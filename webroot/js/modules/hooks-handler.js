/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Tue, Jan 16, 2024 5:31 PM ET
 * @release       32733eae9077a763c99eeaa6b2bf82d2f114205c [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}