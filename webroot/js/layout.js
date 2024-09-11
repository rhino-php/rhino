/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Wed, Sep 11, 2024 5:29 PM ET
 * @release       bb7d38593a64fd853c85873a3742f267f8e92fb0 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import ComponentsHandler from"/rhino/js/modules/componentsHandler.js";class Layout{constructor(){this.debug=!0,window.addEventListener("load",(e=>{this.init()}))}init(){this.Components=new ComponentsHandler(this)}getToken(){return document.querySelector('meta[name="csrfToken"]').getAttribute("content")}getPageId(){return document.querySelector('meta[name="pageId"]').getAttribute("content")}}new Layout;