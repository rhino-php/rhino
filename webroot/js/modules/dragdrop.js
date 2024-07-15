/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jul 15, 2024 4:39 PM ET
 * @release       0675fc2f8de240a5e4a0517effaa2dbdb926ef29 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class DragDrop{loadElements(e,t){e.length>0&&(this.dropZone=e[0].parentNode,this.callback=t),e.forEach((e=>{this.addElement(e)}))}addElement(e){e.addEventListener("dragstart",(e=>this.dragStart(e.target))),e.addEventListener("dragover",(e=>this.dragOver(e.target))),e.addEventListener("dragend",(e=>this.dropped(e.target)))}dragStart(e){this.draggedElement=e}dragOver(e){if(null==this.draggedElement||e==this.draggedElement)return;let t=this.getPosition(e),r=this.getPosition(this.draggedElement);null!=t&&null!=r&&(t<r?e.before(this.draggedElement):e.after(this.draggedElement))}getPosition(e){let t=null;for(let r=0;r<this.dropZone.children.length;r++)this.dropZone.children[r]==e&&(t=r);return t}dropped(e){this.dragedElement=null,this.callback(e,this.getPosition(e))}}