/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Thu, Feb 22, 2024 10:19 AM ET
 * @release       ec6f9470d2fb88ad3409d68c4bc25807286db5e7 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class FieldOptions{constructor(t){this.main=t,this.main.debug,this.Config={tabGroupSelector:".tab-group",tabButtonSelector:"[data-target]",tabButtonClass:"tab-button",activeTabClass:"tab--active",activeButtonClass:"tab-button--active"},this.container=document.getElementById("field-options"),this.container&&this.setup()}setup(){this.bench=document.getElementById("benched-options"),this.typeSelector=document.getElementById("type"),this.bench.innerHTML=this.container.innerHTML,this.container.innerHTML="",this.change()}init(){this.typeSelector&&this.typeSelector.addEventListener("change",(()=>{this.reset(),this.change()}))}change(){let t=this.typeSelector.value+"-options",e=document.getElementById(t);e&&this.container.appendChild(e),this.main.layoutUpdate()}reset(){this.container.childNodes.forEach((t=>{this.bench.appendChild(t)}))}}