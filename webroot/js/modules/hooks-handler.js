/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jan 15, 2024 4:42 PM ET
 * @release       730d3ac23a4bd74c8b0948c34bbad7eab93db13b [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}