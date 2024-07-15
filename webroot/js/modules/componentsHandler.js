/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jul 15, 2024 4:39 PM ET
 * @release       0675fc2f8de240a5e4a0517effaa2dbdb926ef29 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
import Component from"./component.js";export default class ComponentsHandler{constructor(t){this.main=t,this.main.debug,this.Config={newButtonSelector:"button[name=new-component]",layoutContainerSelector:".layout-container",componentSelector:".layout-element",saveButton:".layout-button[name=save]"},this.Actions={new:"/rhino/components/new/",save:"/rhino/components/save_all/",switch:"/rhino/components/switch/",delete:"/rhino/components/delete/"},this.containers={},this.components=[],document.querySelector(this.Config.layoutContainerSelector)&&(this.saveButton=document.querySelector(this.Config.saveButton),this.saveButton.addEventListener("click",(()=>this.save())),document.addEventListener("keydown",(t=>{if(t.ctrlKey&&83===t.keyCode)return t.preventDefault(),this.save(),!1})),this.setup(document))}setup(t){this.pageId=this.main.getPageId(),this.newButtons=t.querySelectorAll(this.Config.newButtonSelector),this.componentElements=t.querySelectorAll(this.Config.componentSelector),this.layoutContainers=t.querySelectorAll(this.Config.layoutContainerSelector),this.layoutContainers.forEach((t=>{this.containers[t.getAttribute("name")]=t})),this.newButtons.forEach((t=>{t.addEventListener("click",(()=>{this.newComponent(t.value)}))})),this.componentElements.forEach((t=>{let e=new Component(this,t);this.components.push(e)}))}async postFetch(t,e=""){this.main.debug,document.body.classList.add("layout-loading");let n=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRF-Token":this.main.getToken(),"X-Requested-With":"XMLHttpRequest"},credentials:"same-origin",body:JSON.stringify(e)});return document.body.classList.remove("layout-loading"),n}newComponent(t){let e=this.containers[t];this.postFetch(this.Actions.new,{region:t,parentId:e.getAttribute("value")}).then((t=>t.text())).then((t=>{let n=new Component(this,t);e.appendChild(n.element),this.components.push(n),this.setup(n.element)}))}async updateContent(t,e,n,o={}){"save"==t&&(o=await n.getContent()),this.postFetch(e,o).then((t=>t.text())).then((e=>{if("update"==t){let t=new Element(this,e);n.container.insertBefore(t.nodeElement,n.nodeElement)}"delete"!=t&&"update"!=t||n.destroy()}))}setPosition(t,e){let n="/rhino/contents/update/"+t.id.replace("element-","");e<0&&(e=0),this.updateContent("move",n,t,{position:e})}async save(){let t=[];this.components.forEach((e=>{t.push(this.prepareContent(e))})),Promise.all(t).then((t=>{this.postFetch(this.Actions.save,t)}))}async prepareContent(t){return await t.getContent()}}