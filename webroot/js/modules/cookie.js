/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Mon, Jan 15, 2024 4:42 PM ET
 * @release       730d3ac23a4bd74c8b0948c34bbad7eab93db13b [dev]
 * @copyright     Copyright (c) 2024, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */
export default class Cookie{set(e,t,o,i){let n=e+"="+t+";";if(o){const e=new Date;e.setTime(e.getTime()+o),n+="expires="+e.toUTCString()}i&&(n+=";path=/"+i),domain&&(n+=";domain=/"+domain),document.cookie=n}get(e){let t=e+"=",o=document.cookie.split(";");for(let e=0;e<o.length;e++){let i=o[e];for(;" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}}remove(e,t,o){this.get(e)&&(document.cookie=e+"="+(t?";path="+t:"")+(o?";domain="+o:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT")}}