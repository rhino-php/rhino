/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jun 28, 2024 12:21 PM ET
 * @release       040fbbbda84e153bb16d08136fde5e69461d8be8 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import ComponentsHandler from"/rhino/js/modules/componentsHandler.js";class Layout{constructor(){this.debug=!0,window.addEventListener("load",(e=>{this.init()}))}init(){this.Components=new ComponentsHandler(this)}getToken(){return document.querySelector('meta[name="csrfToken"]').getAttribute("content")}getPageId(){return document.querySelector('meta[name="pageId"]').getAttribute("content")}}new Layout;