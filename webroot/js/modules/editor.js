/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jun 28, 2024 12:12 PM ET
 * @release       f3bc757fed4fadc22ff21923995955fc84fbcfe1 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import*as EditorJS from"../../vendor/editorjs/dist/editor.mjs";export default class Editor{constructor(e,t){let o="";t&&t.length>0&&(o=JSON.parse(t)),this.editor=new EditorJS({logLevel:"ERROR",holder:e,tools:{header:{class:Header,inlineToolbar:["link"]},list:List},autofocus:!0,placeholder:"Let`s write an awesome story!",data:o,minHeight:0})}save(){return this.editor.save()}destroy(){this.editor.destroy()}}