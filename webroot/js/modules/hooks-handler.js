/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jan 15, 2024 3:58 PM ET
 * @release       03bc7ece39ba0553408a48509f6dd82d7fce5f32 [page-tree]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}