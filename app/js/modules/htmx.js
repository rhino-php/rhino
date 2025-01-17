import 'htmx.org';

export default class Htmx {
	constructor(app) {
		this.app = app;
		this.token = this.app.getToken();

		document.body.addEventListener('htmx:configRequest', (event) => {
			event.detail.headers['X-CSRF-Token'] = this.token;
		});

	}
}