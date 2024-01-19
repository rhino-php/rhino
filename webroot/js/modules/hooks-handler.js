/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 19, 2024 12:08 PM ET
 * @release       1b650994ae2e5cea2d12394c10d15a51a4839535 [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}