/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jul 15, 2024 4:39 PM ET
 * @release       0675fc2f8de240a5e4a0517effaa2dbdb926ef29 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import Editor from"./editor.js";import Modal from"./modal.js";export default class Component{constructor(e,t=null){this.Handler=e,"object"==typeof t&&t.nodeType?this.element=t:"string"==typeof t&&(this.element=this.createElement(t)),this.id=this.element.dataset.id,this.region=this.element.dataset.region,this.initialize()}initialize(){this.content=this.element.querySelector("[name=content]"),this.select=this.element.querySelector("[name=template_id]"),this.deleteButton=this.element.querySelector("[name=delete]"),this.toggleButton=this.element.querySelector("[name=toggle]"),this.moveHandle=this.element.querySelector("[name=move]"),this.slots=this.element.querySelectorAll('.layout-slot[value="'+this.id+'"]'),this.deleteButton.addEventListener("click",(()=>this.delete())),this.select.addEventListener("change",(()=>this.switch({template_id:this.select.value}))),this.addEditor(),this.addMedia(),this.slots.forEach((e=>{e.querySelector("[name=new-slot]").addEventListener("click",(()=>this.newSlot(e)))}))}newSlot(e){this.Handler.postFetch(this.Handler.Actions.new,{region:e.getAttribute("name"),parentId:this.id}).then((e=>e.text())).then((t=>{let n=new Component(this.Handler,t);e.appendChild(n.element),this.Handler.components.push(n),this.Handler.setup(n.element)}))}async save(){let e=await this.getContent();e.id=this.id,this.Handler.postFetch(this.Handler.Actions.save,e)}async switch(e){e.id=this.id,e.templat_id=this.select.value,this.Handler.postFetch(this.Handler.Actions.switch,e).then((e=>e.text())).then((e=>{let t=new Component(this.Handler,e);this.element.parentElement.insertBefore(t.element,this.element),this.destroy(),this.Handler.setup(t.element)}))}async delete(){this.Handler.postFetch(this.Handler.Actions.delete,{id:this.id}).then((e=>e.text())).then((e=>{this.destroy()}))}createElement(e){let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}addEditor(){let e=this.element.querySelector(".editor");e&&(this.checkContainer(e)||(this.editor=new Editor(e,this.content.value)))}addMedia(){let e=this.element.querySelector("[name=mediaButton]");if(!e)return;if(this.checkContainer(e))return;this.Modal||(this.Modal=new Modal(this.Handler.main));let t=this.Modal.newModal(e,!1);this.Modal.addQuery(t),e.addEventListener("click",(()=>{fetch(e.value).then((e=>e.text())).then((e=>{this.Modal.addContent(t,e),this.Modal.openModal(t)}))})),t.addEventListener("confirm",(e=>{let n=t.querySelector("input[type=radio]:checked");this.content.value=n.value,this.content.parentNode.querySelector("img").src=n.dataset.src})),t.addEventListener("close",(e=>{this.Modal.reset(t)}))}checkContainer(e){let t=e.closest(".layout-element");return this.element.dataset.id!=t.dataset.id}async getContent(){let e={id:this.id};if(this.editor){let e=await this.editor.save();this.content.value=JSON.stringify(e),this.content.innerHTML=this.content.value}return e.content=this.content?this.content.value:null,e}destroy(){let e=this.Handler.components.indexOf(this);e>-1&&this.Handler.components.splice(e,1),this.editor&&this.editor.destroy(),this.element.remove()}}