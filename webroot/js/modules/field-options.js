/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Nov 17, 2023 11:38 AM ET
 * @release       dbdb08c537d79b75d2c22f821df556a03d0ba35c [main]
 * @copyright     Copyright (c) 2023, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class FieldOptions{constructor(t){this.main=t,this.main.debug,this.Config={tabGroupSelector:".tab-group",tabButtonSelector:"[data-target]",tabButtonClass:"tab-button",activeTabClass:"tab--active",activeButtonClass:"tab-button--active"},this.container=document.getElementById("field-options"),this.container&&this.setup()}setup(){this.bench=document.getElementById("benched-options"),this.typeSelector=document.getElementById("type"),this.bench.innerHTML=this.container.innerHTML,this.container.innerHTML="",this.change()}init(){this.typeSelector&&this.typeSelector.addEventListener("change",(()=>{this.reset(),this.change()}))}change(){let t=this.typeSelector.value+"-options",e=document.getElementById(t);e&&this.container.appendChild(e),this.main.layoutUpdate()}reset(){this.container.childNodes.forEach((t=>{this.bench.appendChild(t)}))}}