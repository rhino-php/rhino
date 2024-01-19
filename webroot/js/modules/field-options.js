/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 19, 2024 12:08 PM ET
 * @release       1b650994ae2e5cea2d12394c10d15a51a4839535 [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class FieldOptions{constructor(t){this.main=t,this.main.debug,this.Config={tabGroupSelector:".tab-group",tabButtonSelector:"[data-target]",tabButtonClass:"tab-button",activeTabClass:"tab--active",activeButtonClass:"tab-button--active"},this.container=document.getElementById("field-options"),this.container&&this.setup()}setup(){this.bench=document.getElementById("benched-options"),this.typeSelector=document.getElementById("type"),this.bench.innerHTML=this.container.innerHTML,this.container.innerHTML="",this.change()}init(){this.typeSelector&&this.typeSelector.addEventListener("change",(()=>{this.reset(),this.change()}))}change(){let t=this.typeSelector.value+"-options",e=document.getElementById(t);e&&this.container.appendChild(e),this.main.layoutUpdate()}reset(){this.container.childNodes.forEach((t=>{this.bench.appendChild(t)}))}}