/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jun 28, 2024 12:12 PM ET
 * @release       f3bc757fed4fadc22ff21923995955fc84fbcfe1 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Menu{constructor(t){this.main=t,this.main.debug,this.Config={menuID:"main-menu",menuButtonID:"menu-button",bodyClass:"menu-is-open",menuClass:"menu--open"},this.menu=document.getElementById(this.Config.menuID),this.menuButton=document.getElementById(this.Config.menuButtonID),this.menu&&this.menuButton&&this.setup()}setup(){this.menuButton.addEventListener("click",(()=>this.toggle())),window.addEventListener("keydown",(t=>{"Escape"==t.key&&this.close()})),this.main.onOutsideClick("#"+this.Config.menuID,(t=>{"true"==this.menuButton.getAttribute("aria-expanded")&&this.close()}))}toggle(){"true"==this.menuButton.getAttribute("aria-expanded")?this.close():this.open()}close(){this.menu.classList.remove(this.Config.menuClass),document.body.classList.remove(this.Config.bodyClass),this.menuButton.setAttribute("aria-expanded","false")}open(){setTimeout((()=>{this.menu.classList.add(this.Config.menuClass),document.body.classList.add(this.Config.bodyClass),this.menuButton.setAttribute("aria-expanded","true")}),100)}}