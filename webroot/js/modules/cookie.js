/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Thu, Feb 22, 2024 10:19 AM ET
 * @release       ec6f9470d2fb88ad3409d68c4bc25807286db5e7 [main]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Cookie{set(e,t,o,i){let n=e+"="+t+";";if(o){const e=new Date;e.setTime(e.getTime()+o),n+="expires="+e.toUTCString()}i&&(n+=";path=/"+i),domain&&(n+=";domain=/"+domain),document.cookie=n}get(e){let t=e+"=",o=document.cookie.split(";");for(let e=0;e<o.length;e++){let i=o[e];for(;" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}}remove(e,t,o){this.get(e)&&(document.cookie=e+"="+(t?";path="+t:"")+(o?";domain="+o:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT")}}