/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Thu, Feb 22, 2024 10:19 AM ET
 * @release       ec6f9470d2fb88ad3409d68c4bc25807286db5e7 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class HooksHandler{constructor(e){this.main=e,this.main.debug,this.queue={}}add(e,u){this.queue[e]||(this.queue[e]=[]),this.queue[e].push(u)}call(e,...u){this.queue[e]&&(this.queue[e].forEach((e=>{e(...u)})),delete this.queue[e])}}