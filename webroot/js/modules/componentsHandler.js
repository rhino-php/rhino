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
			elementSelector: '.layout-element'
		}

		this.Actions = {
			new: 	'/rhino/components/new/',
			save: '/rhino/components/save/',
			switch: '/rhino/components/switch/',
			delete: '/rhino/components/delete/',
		}

		this.containers = {};

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
		this.elements = parentNode.querySelectorAll(this.Config.elementSelector);
		this.layoutContainers = parentNode.querySelectorAll(this.Config.layoutContainerSelector);

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
		
		this.elements.forEach(nodeElement => {
			// nodeElement.classList.add('mark');
			new Component(this, nodeElement);
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
}
//# sourceMappingURL=componentsHandler.js.map