/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jun 28, 2024 12:21 PM ET
 * @release       040fbbbda84e153bb16d08136fde5e69461d8be8 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}