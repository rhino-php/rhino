/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 19, 2024 12:11 PM ET
 * @release       f38b39a9ff4654a2961da2c462564838777b619a [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}