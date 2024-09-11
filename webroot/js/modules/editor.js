/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Wed, Sep 11, 2024 5:29 PM ET
 * @release       bb7d38593a64fd853c85873a3742f267f8e92fb0 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import*as EditorJS from"../../vendor/editorjs/dist/editor.mjs";export default class Editor{constructor(e,t){let o="";t&&t.length>0&&(o=JSON.parse(t)),this.editor=new EditorJS({logLevel:"ERROR",holder:e,tools:{header:{class:Header,inlineToolbar:["link"]},list:List},autofocus:!0,placeholder:"Let`s write an awesome story!",data:o,minHeight:0})}save(){return this.editor.save()}destroy(){this.editor.destroy()}}