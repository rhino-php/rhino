/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 19, 2024 12:08 PM ET
 * @release       1b650994ae2e5cea2d12394c10d15a51a4839535 [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import ComponentsHandler from"/rhino/js/modules/componentsHandler.js";class Layout{constructor(){this.debug=!0,window.addEventListener("load",(e=>{this.init()}))}init(){this.Components=new ComponentsHandler(this)}getToken(){return document.querySelector('meta[name="csrfToken"]').getAttribute("content")}getPageId(){return document.querySelector('meta[name="pageId"]').getAttribute("content")}}new Layout;