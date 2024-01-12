// import DragDrop from "./dragdrop.js";
import Component from "./component.js";

/**
 * 
 */
export default class ComponentsHandler {
	/**
	 * 
	 * @param {*} main 
	 */
	constructor(main) {
		this.main = main;

		if (this.main.debug) {
			console.debug("LayoutComponents::const");
		}

		this.Config = {
			newButtonSelector: 'button[name=new-component]',
			layoutContainerSelector: '.layout-container',
			componentSelector: '.layout-element',
			saveButton: '.layout-button[name=save]'
		}

		this.Actions = {
			new: 	'/rhino/components/new/',
			save: '/rhino/components/save_all/',
			switch: '/rhino/components/switch/',
			delete: '/rhino/components/delete/',
		}

		this.containers = {};
		this.components = [];

		let layoutContainers = document.querySelector(this.Config.layoutContainerSelector);
		
		// this.DragDrop = new DragDrop();
			
		if (layoutContainers) {
			this.setup(document);
		}
	}
	
	/**
	 * setup
	 */
	setup(parentNode) {
		this.pageId = this.main.getPageId();

		this.newButtons = parentNode.querySelectorAll(this.Config.newButtonSelector);
		this.componentElements = parentNode.querySelectorAll(this.Config.componentSelector);
		this.layoutContainers = parentNode.querySelectorAll(this.Config.layoutContainerSelector);
		this.saveButton = parentNode.querySelector(this.Config.saveButton);

		console.log(this.newButtons.length);

		this.layoutContainers.forEach(container => {
			// container.classList.add('mark');
			this.containers[container.getAttribute('name')] = container;
		});
		
		this.newButtons.forEach(newButton => {
			newButton.addEventListener('click', () => {
				this.newComponent(newButton.value);
			});
		});
		
		this.componentElements.forEach(nodeElement => {
			// nodeElement.classList.add('mark');
			let component = new Component(this, nodeElement);
			this.components.push(component);
		});

		this.saveButton.addEventListener('click', () => this.save());
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.keyCode === 83) {
				e.preventDefault();
				this.save();
				return false;
			}
		});
	}

	/**
	 * postFetch
	 * 
	 * @param {*} url 
	 * @param {*} data 
	 * @returns 
	 */
	async postFetch(url, data = '') {
		console.log(data);
	
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-CSRF-Token': this.main.getToken(),
				'X-Requested-With': 'XMLHttpRequest'
			},
			credentials: "same-origin",
			body: JSON.stringify(data)
		})
	}

	/**
	 * newComponent
	 * 
	 * @param {*} url 
	 * @param {*} name 
	 */
	newComponent(region) {
		let container = this.containers[region];
		
		this.postFetch(this.Actions.new, {
			region: region,
			parentId: container.getAttribute('value')
		}).then((response) => response.text())
			.then((html) => {
				let component = new Component(this, html);
				container.appendChild(component.element);
				this.components.push(component);

				this.setup(component.element);
			});
	}

	/**
	 * updateContent
	 * 
	 * @param {*} action 
	 * @param {*} url 
	 * @param {*} element 
	 * @param {*} data 
	 */
	async updateContent(action, url, element, data = {}) {
		if (action == 'save') {
			data = await element.getContent();
		}

		this.postFetch(url, data)
			.then((response) => response.text())
			.then((html) => {
				if (action == 'update') {
					let elementNew = new Element(this, html);
					element.container.insertBefore(elementNew.nodeElement, element.nodeElement);
				}
				
				if (action == 'delete' || action == 'update') {
					element.destroy();
				}
			});
	}

	/**
	 * setPosition (Depricated)
	 * 
	 * @param {*} element 
	 * @param {*} position 
	 */
	setPosition(element, position) {
		let id = element.id.replace('element-', '');
		let url = '/rhino/contents/update/' + id

		if (position < 0) {
			position = 0;
		}

		this.updateContent('move', url, element, { position: position });
	}

	async save() {
		console.log('saving...', this.components.length);

		let data = this.prepareContent(this.components).then(data => {
			// return data;
			console.log('ready to save');
			this.postFetch(this.Actions.save, data);
		});


		console.log('done saving.', data.length);
	}

	async prepareContent(components) {
		// let data = [];
		// components.forEach(component => {
		// 	component.getContent()
		// 		.then(content => data.push(content));
		// });
		// return data;
		return new Promise((resolve, reject) => {
			let data = [];
			components.forEach(component => {
				component.getContent()
					.then(content => data.push(content));
			});
			resolve(data);
		});
	}
}