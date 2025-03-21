import Editor from "./editor.js";
import Modal from "./modal.js";

/**
 * Component
 * 
 */
export default class Component {
	/**
	 * 
	 * @param {*} handler 
	 * @param {*} element 
	 */
	constructor(handler, element = null) {
		this.Handler = handler;

		if (typeof element == "object" && element.nodeType) {
			this.element = element;
		} else if (typeof element == "string") {
			this.element = this.createElement(element);
		}

		this.id = this.element.dataset.id;
		this.region = this.element.dataset.region;

		this.initialize();
	}

	/**
	 * initialize
	 * 
	 */
	initialize() {
		this.content = this.element.querySelector('[name=content]');
		this.select = this.element.querySelector('[name=template_id]');
		this.deleteButton = this.element.querySelector('[name=delete]');
		this.toggleButton = this.element.querySelector('[name=toggle]');
		this.moveHandle = this.element.querySelector('[name=move]');
		this.moveUpButton = this.element.querySelector('[name=move_up]');
		this.moveDownButton = this.element.querySelector('[name=move_down]');
		this.slots = this.element.querySelectorAll('.layout-slot[value="' + this.id + '"]');

		this.deleteButton.addEventListener('click', () => this.delete());
		this.toggleButton.addEventListener('click', () => this.toggle());
		this.moveDownButton.addEventListener('click', () => this.move('down'));
		this.moveUpButton.addEventListener('click', () => this.move('up'));
		this.select.addEventListener('change', () => this.switch({
			template_id: this.select.value
		}));

		this.addEditor();
		this.addMedia();

		this.slots.forEach(slot => {
			let newButton = slot.querySelector('[name=new-slot]');
			newButton.addEventListener('click', () => this.newSlot(slot));
		});
	}

	newSlot(container) {
		this.Handler.postFetch(this.Handler.Actions.new, {
			region: container.getAttribute('name'),
			parentId: this.id
		}).then((response) => response.text())
			.then((html) => {
				let component = new Component(this.Handler, html);
				container.appendChild(component.element);
				this.Handler.components.push(component);

				this.Handler.setup(component.element);
			});
	}

	async save() {
		let data = await this.getContent();
		data.id = this.id;

		this.Handler.postFetch(this.Handler.Actions.save, data);
	}

	async switch(data) {
		data.id = this.id;
		data.templat_id = this.select.value;

		this.Handler.postFetch(this.Handler.Actions.switch, data)
			.then((response) => response.text())
			.then((html) => {
				let elementNew = new Component(this.Handler, html);
				this.element.parentElement.insertBefore(elementNew.element, this.element);
				this.destroy();

				this.Handler.setup(elementNew.element);
			});
	}

	async delete() {
		this.Handler.postFetch(this.Handler.Actions.delete, {
			id: this.id
		})
			.then((response) => response.text())
			.then((html) => {
				this.destroy();
			});
	}

	async move(direction) {
		let sibling;
		switch (direction) {
			case 'up':
				sibling = this.element.previousElementSibling;

				if (sibling) {
					this.element.after(sibling);
				}
				break;
			case 'down':
				sibling = this.element.nextElementSibling;

				if (sibling) {
					this.element.before(sibling);
				}
				break;
		}

		if (sibling) {
			this.Handler.postFetch(this.Handler.Actions.move, {
				id: this.id,
				direction: direction
			})
				.then((response) => response.text())
				.then((html) => {});
		}
	}

	async toggle() {
		this.Handler.postFetch(this.Handler.Actions.toggle, {
			id: this.id
		})
			.then((response) => response.text())
			.then((html) => {
				let data = JSON.parse(html);
				this.element.classList.toggle('inactive');
			});
	}

	/**
	 * createElement
	 * 
	 * @param {*} html 
	 * @returns 
	 */
	createElement(html) {
		let template = document.createElement('template');
		template.innerHTML = html.trim();

		let element = template.content.firstChild;
		return element;
	}

	/**
	 * addEditor
	 * 
	 * @returns 
	 */
	addEditor() {
		let editorElement = this.element.querySelector('.editor');

		if (!editorElement) {
			return;
		}

		if (this.checkContainer(editorElement)) {
			return;
		}

		// let container = this.element.querySelector('.element-container');
		// this.content = container.querySelectorAll('textarea[name="content"]');

		this.editor = new Editor(editorElement, this.content.value);
	}

	/**
	 * addMedia
	 * 
	 * @returns 
	 */
	addMedia() {
		let mediaButton = this.element.querySelector('[name=mediaButton]');

		if (!mediaButton) {
			return;
		}

		if (this.checkContainer(mediaButton)) {
			return;
		}

		if (!this.Modal) {
			this.Modal = new Modal(this.Handler.main);
		}

		console.log('new Modal', this.id);
		let modal = this.Modal.newModal(mediaButton, false);
		this.Modal.addQuery(modal);

		mediaButton.addEventListener('click', () => {
			fetch(mediaButton.value)
				.then(response => response.text())
				.then(text => {
					this.Modal.addContent(modal, text);
					this.Modal.openModal(modal);
				});
		});

		modal.addEventListener('confirm', (e) => {
			let selected = modal.querySelector('input[type=radio]:checked');

			this.content.value = selected.value;
			let image = this.content.parentNode.querySelector('img');
			console.log(selected.dataset.src);
			image.src = selected.dataset.src;
		});

		modal.addEventListener('close', (e) => {
			this.Modal.reset(modal);
		});
	}

	checkContainer(nodeElement) {
		let parentElement = nodeElement.closest('.layout-element');
		return this.element.dataset.id != parentElement.dataset.id;
	}

	/**
	 * get
	 * 
	 * @returns 
	 */
	async getContent() {
		let data = {
			id: this.id,
		};

		if (this.editor) {
			let editorData = await this.editor.save();
			this.content.value = JSON.stringify(editorData);
			this.content.innerHTML = this.content.value;
		}

		data.content = this.content ? this.content.value : null;
		return data;
	}

	/**
	 * destroy
	 */
	destroy() {
		let index = this.Handler.components.indexOf(this);

		if (index > -1) { // only splice array when item is found
			this.Handler.components.splice(index, 1);
		}

		if (this.editor) {
			this.editor.destroy();
		}

		this.element.remove();
		delete this;
	}
}