/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Tue, Jan 16, 2024 5:31 PM ET
 * @release       32733eae9077a763c99eeaa6b2bf82d2f114205c [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Menu{constructor(t){this.main=t,this.main.debug,this.Config={menuID:"main-menu",menuButtonID:"menu-button",bodyClass:"menu-is-open",menuClass:"menu--open"},this.menu=document.getElementById(this.Config.menuID),this.menuButton=document.getElementById(this.Config.menuButtonID),this.menu&&this.menuButton&&this.setup()}setup(){this.menuButton.addEventListener("click",(()=>this.toggle())),window.addEventListener("keydown",(t=>{"Escape"==t.key&&this.close()})),this.main.onOutsideClick("#"+this.Config.menuID,(t=>{"true"==this.menuButton.getAttribute("aria-expanded")&&this.close()}))}toggle(){"true"==this.menuButton.getAttribute("aria-expanded")?this.close():this.open()}close(){this.menu.classList.remove(this.Config.menuClass),document.body.classList.remove(this.Config.bodyClass),this.menuButton.setAttribute("aria-expanded","false")}open(){setTimeout((()=>{this.menu.classList.add(this.Config.menuClass),document.body.classList.add(this.Config.bodyClass),this.menuButton.setAttribute("aria-expanded","true")}),100)}}