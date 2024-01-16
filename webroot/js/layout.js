/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Tue, Jan 16, 2024 5:31 PM ET
 * @release       32733eae9077a763c99eeaa6b2bf82d2f114205c [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import ComponentsHandler from"/rhino/js/modules/componentsHandler.js";class Layout{constructor(){this.debug=!0,window.addEventListener("load",(e=>{this.init()}))}init(){this.Components=new ComponentsHandler(this)}getToken(){return document.querySelector('meta[name="csrfToken"]').getAttribute("content")}getPageId(){return document.querySelector('meta[name="pageId"]').getAttribute("content")}}new Layout;