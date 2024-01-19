/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 19, 2024 12:08 PM ET
 * @release       1b650994ae2e5cea2d12394c10d15a51a4839535 [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Editor{constructor(e,t){let o="";t&&t.length>0&&(o=JSON.parse(t)),this.editor=new EditorJS({logLevel:"ERROR",holder:e,tools:{header:{class:Header,inlineToolbar:["link"]},list:List},autofocus:!0,placeholder:"Let`s write an awesome story!",data:o,minHeight:0})}save(){return this.editor.save()}destroy(){this.editor.destroy()}}