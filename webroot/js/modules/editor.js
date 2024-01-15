/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jan 15, 2024 4:42 PM ET
 * @release       730d3ac23a4bd74c8b0948c34bbad7eab93db13b [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Editor{constructor(e,t){let o="";t&&t.length>0&&(o=JSON.parse(t)),this.editor=new EditorJS({logLevel:"ERROR",holder:e,tools:{header:{class:Header,inlineToolbar:["link"]},list:List},autofocus:!0,placeholder:"Let`s write an awesome story!",data:o,minHeight:0})}save(){return this.editor.save()}destroy(){this.editor.destroy()}}