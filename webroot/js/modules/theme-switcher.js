/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Wed, Jan 17, 2024 5:37 PM ET
 * @release       3176381cad9094427d128d958abf86381344efb9 [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class ThemeSwitcher{constructor(e){this.main=e,this.main.debug,this.Config={_scheme:"auto",menuTarget:"details[role='list']",buttonsTarget:"a[data-theme-switcher]",buttonAttribute:"data-theme-switcher",rootAttribute:"data-theme",localStorageKey:"picoPreferredColorScheme"},this.scheme=this.schemeFromLocalStorage}init(){this.initSwitchers()}get schemeFromLocalStorage(){return void 0!==window.localStorage&&null!==window.localStorage.getItem(this.Config.localStorageKey)?window.localStorage.getItem(this.Config.localStorageKey):this.Config._scheme}get preferredColorScheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}initSwitchers(){this.buttons=document.querySelectorAll(this.Config.buttonsTarget),this.buttons.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),this.scheme=e.getAttribute(this.Config.buttonAttribute),document.querySelector(this.Config.menuTarget).removeAttribute("open")}),!1)}))}set scheme(e){"auto"==e?"dark"==this.preferredColorScheme?this.Config._scheme="dark":this.Config._scheme="light":"dark"!=e&&"light"!=e||(this.Config._scheme=e),this.applyScheme(),this.schemeToLocalStorage()}get scheme(){return this.Config._scheme}applyScheme(){document.querySelector("html").setAttribute(this.Config.rootAttribute,this.scheme)}schemeToLocalStorage(){void 0!==window.localStorage&&window.localStorage.setItem(this.Config.localStorageKey,this.scheme)}}