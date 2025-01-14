import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Quote from "@editorjs/quote";
import Table from '@editorjs/table';
import Embed from '@editorjs/embed';
import Delimiter from '@editorjs/delimiter';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Warning from '@editorjs/warning';
import RawTool from '@editorjs/raw';

export default class Editor {
	constructor(selector, contents) {
		let editorData = '';
		if (contents && contents.length > 0) {
			editorData = JSON.parse(contents);
		} 

		this.editor = new EditorJS({
			// https://editorjs.io/configuration/#log-level
			logLevel: 'ERROR',

			/** 
			 * Id of Element that should contain the Editor 
			 */
			holder: selector,
	
			/** 
			 * Available Tools list. 
			 * Pass Tool's class or Settings object for each Tool you want to use 
			 */
			tools: {
				header: {
					class: Header,
					inlineToolbar: ["link"],
				},
				list: {
					class: List,
					inlineToolbar: true,
				},
				code: CodeTool,
				quote: {
					class: Quote,
					inlineToolbar: true,
					shortcut: "CMD+SHIFT+O",
					config: {
						quotePlaceholder: "Enter a quote",
						captionPlaceholder: "Quote's author",
					},
				},
				inlineCode: {
					class: InlineCode,
					shortcut: "CMD+SHIFT+M",
				},
				table: Table,
				embed: Embed,
				delimiter: Delimiter,
				warning: Warning,
				raw: RawTool,
				linkTool: {
					class: LinkTool,
					config: {
						endpoint: '/pages/fetchUrl', // Your backend endpoint for url data fetching,
					}
				},
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: '/uploadFile', // Your backend file uploader endpoint
							byUrl: '/pages/fetchUrl', // Your endpoint that provides uploading by Url
						}
					}
				}
			},
			autofocus: true,
			placeholder: 'Let`s write an awesome story!',
			data: editorData,
			minHeight: 0
		});

	}
	
	save() {
		return this.editor.save();
	}
	
	destroy() {
		this.editor.destroy();
	}
}