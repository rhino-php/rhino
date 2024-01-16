import ComponentsHandler from "/rhino/js/modules/componentsHandler.js";
// import EditorJS from "/rhino/js/vendor/editor.js";

class Layout {
	constructor() {
		this.debug = true;
		window.addEventListener("load", (event) => {
			this.init();
		});
	}
	
	init() {
		this.Components = new ComponentsHandler(this);
		// this.elements.setModal(this.LayoutModal.modal);
	}

	getToken() {
		return document.querySelector('meta[name="csrfToken"]').getAttribute('content');
	}

	getPageId() {
		return document.querySelector('meta[name="pageId"]').getAttribute('content');
	}
}

new Layout();