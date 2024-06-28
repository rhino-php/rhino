/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jun 28, 2024 12:12 PM ET
 * @release       f3bc757fed4fadc22ff21923995955fc84fbcfe1 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}