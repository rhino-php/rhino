/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Tue, Jan 16, 2024 5:31 PM ET
 * @release       32733eae9077a763c99eeaa6b2bf82d2f114205c [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Editor{constructor(e,t){let o="";t&&t.length>0&&(o=JSON.parse(t)),this.editor=new EditorJS({logLevel:"ERROR",holder:e,tools:{header:{class:Header,inlineToolbar:["link"]},list:List},autofocus:!0,placeholder:"Let`s write an awesome story!",data:o,minHeight:0})}save(){return this.editor.save()}destroy(){this.editor.destroy()}}