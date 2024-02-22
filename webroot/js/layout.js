/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Thu, Feb 22, 2024 10:19 AM ET
 * @release       ec6f9470d2fb88ad3409d68c4bc25807286db5e7 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import ComponentsHandler from"/rhino/js/modules/componentsHandler.js";class Layout{constructor(){this.debug=!0,window.addEventListener("load",(e=>{this.init()}))}init(){this.Components=new ComponentsHandler(this)}getToken(){return document.querySelector('meta[name="csrfToken"]').getAttribute("content")}getPageId(){return document.querySelector('meta[name="pageId"]').getAttribute("content")}}new Layout;