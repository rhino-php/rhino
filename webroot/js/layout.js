/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 10, 2025 11:23 AM ET
 * @release       9cdc452c535dd3b2e8f88074575afd1a1e971e8c [main]
 * @copyright     Copyright (c) 2025, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */

(() => {
  // node_modules/@editorjs/editorjs/dist/editorjs.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe(n2) {
    return n2 && n2.__esModule && Object.prototype.hasOwnProperty.call(n2, "default") ? n2.default : n2;
  }
  function ze() {
  }
  Object.assign(ze, {
    default: ze,
    register: ze,
    revert: function() {
    },
    __esModule: true
  });
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n2) {
    const e = (this.document || this.ownerDocument).querySelectorAll(n2);
    let t = e.length;
    for (; --t >= 0 && e.item(t) !== this; )
      ;
    return t > -1;
  });
  Element.prototype.closest || (Element.prototype.closest = function(n2) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(n2))
        return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null);
    return null;
  });
  Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t = document.createDocumentFragment();
    Array.isArray(e) || (e = [e]), e.forEach((o3) => {
      const i2 = o3 instanceof Node;
      t.appendChild(i2 ? o3 : document.createTextNode(o3));
    }), this.insertBefore(t, this.firstChild);
  });
  Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n2) {
    n2 = arguments.length === 0 ? true : !!n2;
    const e = this.parentNode, t = window.getComputedStyle(e, null), o3 = parseInt(t.getPropertyValue("border-top-width")), i2 = parseInt(t.getPropertyValue("border-left-width")), s4 = this.offsetTop - e.offsetTop < e.scrollTop, r2 = this.offsetTop - e.offsetTop + this.clientHeight - o3 > e.scrollTop + e.clientHeight, l3 = this.offsetLeft - e.offsetLeft < e.scrollLeft, a5 = this.offsetLeft - e.offsetLeft + this.clientWidth - i2 > e.scrollLeft + e.clientWidth, c5 = s4 && !r2;
    (s4 || r2) && n2 && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o3 + this.clientHeight / 2), (l3 || a5) && n2 && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i2 + this.clientWidth / 2), (s4 || r2 || l3 || a5) && !n2 && this.scrollIntoView(c5);
  });
  window.requestIdleCallback = window.requestIdleCallback || function(n2) {
    const e = Date.now();
    return setTimeout(function() {
      n2({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - e));
        }
      });
    }, 1);
  };
  window.cancelIdleCallback = window.cancelIdleCallback || function(n2) {
    clearTimeout(n2);
  };
  var vo = (n2 = 21) => crypto.getRandomValues(new Uint8Array(n2)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
  var It = /* @__PURE__ */ ((n2) => (n2.VERBOSE = "VERBOSE", n2.INFO = "INFO", n2.WARN = "WARN", n2.ERROR = "ERROR", n2))(It || {});
  var w = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var wo = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  function Be(n2, e, t = "log", o3, i2 = "color: inherit") {
    if (!("console" in window) || !window.console[t])
      return;
    const s4 = ["info", "log", "warn", "error"].includes(t), r2 = [];
    switch (Be.logLevel) {
      case "ERROR":
        if (t !== "error")
          return;
        break;
      case "WARN":
        if (!["error", "warn"].includes(t))
          return;
        break;
      case "INFO":
        if (!s4 || n2)
          return;
        break;
    }
    o3 && r2.push(o3);
    const l3 = "Editor.js 2.30.7", a5 = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    n2 && (s4 ? (r2.unshift(a5, i2), e = `%c${l3}%c ${e}`) : e = `( ${l3} )${e}`);
    try {
      s4 ? o3 ? console[t](`${e} %o`, ...r2) : console[t](e, ...r2) : console[t](e);
    } catch {
    }
  }
  Be.logLevel = "VERBOSE";
  function xo(n2) {
    Be.logLevel = n2;
  }
  var I = Be.bind(window, false);
  var X = Be.bind(window, true);
  function re(n2) {
    return Object.prototype.toString.call(n2).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function O(n2) {
    return re(n2) === "function" || re(n2) === "asyncfunction";
  }
  function R(n2) {
    return re(n2) === "object";
  }
  function Q(n2) {
    return re(n2) === "string";
  }
  function yo(n2) {
    return re(n2) === "boolean";
  }
  function bt(n2) {
    return re(n2) === "number";
  }
  function kt(n2) {
    return re(n2) === "undefined";
  }
  function V(n2) {
    return n2 ? Object.keys(n2).length === 0 && n2.constructor === Object : true;
  }
  function Mt(n2) {
    return n2 > 47 && n2 < 58 || // number keys
    n2 === 32 || n2 === 13 || // Space bar & return key(s)
    n2 === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    n2 > 64 && n2 < 91 || // letter keys
    n2 > 95 && n2 < 112 || // Numpad keys
    n2 > 185 && n2 < 193 || // ;=,-./` (in order)
    n2 > 218 && n2 < 223;
  }
  async function Eo(n2, e = () => {
  }, t = () => {
  }) {
    async function o3(i2, s4, r2) {
      try {
        await i2.function(i2.data), await s4(kt(i2.data) ? {} : i2.data);
      } catch {
        r2(kt(i2.data) ? {} : i2.data);
      }
    }
    return n2.reduce(async (i2, s4) => (await i2, o3(s4, e, t)), Promise.resolve());
  }
  function At(n2) {
    return Array.prototype.slice.call(n2);
  }
  function Oe(n2, e) {
    return function() {
      const t = this, o3 = arguments;
      window.setTimeout(() => n2.apply(t, o3), e);
    };
  }
  function Bo(n2) {
    return n2.name.split(".").pop();
  }
  function To(n2) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(n2);
  }
  function vt(n2, e, t) {
    let o3;
    return (...i2) => {
      const s4 = this, r2 = () => {
        o3 = null, t || n2.apply(s4, i2);
      }, l3 = t && !o3;
      window.clearTimeout(o3), o3 = window.setTimeout(r2, e), l3 && n2.apply(s4, i2);
    };
  }
  function Ve(n2, e, t = void 0) {
    let o3, i2, s4, r2 = null, l3 = 0;
    t || (t = {});
    const a5 = function() {
      l3 = t.leading === false ? 0 : Date.now(), r2 = null, s4 = n2.apply(o3, i2), r2 || (o3 = i2 = null);
    };
    return function() {
      const c5 = Date.now();
      !l3 && t.leading === false && (l3 = c5);
      const u2 = e - (c5 - l3);
      return o3 = this, i2 = arguments, u2 <= 0 || u2 > e ? (r2 && (clearTimeout(r2), r2 = null), l3 = c5, s4 = n2.apply(o3, i2), r2 || (o3 = i2 = null)) : !r2 && t.trailing !== false && (r2 = setTimeout(a5, u2)), s4;
    };
  }
  function Co() {
    const n2 = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, e = Object.keys(n2).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
    return e && (n2[e] = true), n2;
  }
  function Le(n2) {
    return n2[0].toUpperCase() + n2.slice(1);
  }
  function qe(n2, ...e) {
    if (!e.length)
      return n2;
    const t = e.shift();
    if (R(n2) && R(t))
      for (const o3 in t)
        R(t[o3]) ? (n2[o3] || Object.assign(n2, { [o3]: {} }), qe(n2[o3], t[o3])) : Object.assign(n2, { [o3]: t[o3] });
    return qe(n2, ...e);
  }
  function tt(n2) {
    const e = Co();
    return n2 = n2.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? n2 = n2.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n2 = n2.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n2;
  }
  function So(n2) {
    try {
      return new URL(n2).href;
    } catch {
    }
    return n2.substring(0, 2) === "//" ? window.location.protocol + n2 : window.location.origin + n2;
  }
  function Io() {
    return vo(10);
  }
  function Mo(n2) {
    window.open(n2, "_blank");
  }
  function Ao(n2 = "") {
    return `${n2}${Math.floor(Math.random() * 1e8).toString(16)}`;
  }
  function Ze(n2, e, t) {
    const o3 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
    n2 && X(o3, "warn");
  }
  function ue(n2, e, t) {
    const o3 = t.value ? "value" : "get", i2 = t[o3], s4 = `#${e}Cache`;
    if (t[o3] = function(...r2) {
      return this[s4] === void 0 && (this[s4] = i2.apply(this, ...r2)), this[s4];
    }, o3 === "get" && t.set) {
      const r2 = t.set;
      t.set = function(l3) {
        delete n2[s4], r2.apply(this, l3);
      };
    }
    return t;
  }
  var Ot = 650;
  function pe() {
    return window.matchMedia(`(max-width: ${Ot}px)`).matches;
  }
  var Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Oo(n2, e) {
    const t = Array.isArray(n2) || R(n2), o3 = Array.isArray(e) || R(e);
    return t || o3 ? JSON.stringify(n2) === JSON.stringify(e) : n2 === e;
  }
  var d = class _d {
    /**
     * Check if passed tag has no closed tag
     *
     * @param {HTMLElement} tag - element to check
     * @returns {boolean}
     */
    static isSingleTag(e) {
      return e.tagName && [
        "AREA",
        "BASE",
        "BR",
        "COL",
        "COMMAND",
        "EMBED",
        "HR",
        "IMG",
        "INPUT",
        "KEYGEN",
        "LINK",
        "META",
        "PARAM",
        "SOURCE",
        "TRACK",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Check if element is BR or WBR
     *
     * @param {HTMLElement} element - element to check
     * @returns {boolean}
     */
    static isLineBreakTag(e) {
      return e && e.tagName && [
        "BR",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Helper for making Elements with class name and attributes
     *
     * @param  {string} tagName - new Element tag name
     * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
     * @param  {object} [attributes] - any attributes
     * @returns {HTMLElement}
     */
    static make(e, t = null, o3 = {}) {
      const i2 = document.createElement(e);
      if (Array.isArray(t)) {
        const s4 = t.filter((r2) => r2 !== void 0);
        i2.classList.add(...s4);
      } else
        t && i2.classList.add(t);
      for (const s4 in o3)
        Object.prototype.hasOwnProperty.call(o3, s4) && (i2[s4] = o3[s4]);
      return i2;
    }
    /**
     * Creates Text Node with the passed content
     *
     * @param {string} content - text content
     * @returns {Text}
     */
    static text(e) {
      return document.createTextNode(e);
    }
    /**
     * Append one or several elements to the parent
     *
     * @param  {Element|DocumentFragment} parent - where to append
     * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
     */
    static append(e, t) {
      Array.isArray(t) ? t.forEach((o3) => e.appendChild(o3)) : e.appendChild(t);
    }
    /**
     * Append element or a couple to the beginning of the parent elements
     *
     * @param {Element} parent - where to append
     * @param {Element|Element[]} elements - element or elements list
     */
    static prepend(e, t) {
      Array.isArray(t) ? (t = t.reverse(), t.forEach((o3) => e.prepend(o3))) : e.prepend(t);
    }
    /**
     * Swap two elements in parent
     *
     * @param {HTMLElement} el1 - from
     * @param {HTMLElement} el2 - to
     * @deprecated
     */
    static swap(e, t) {
      const o3 = document.createElement("div"), i2 = e.parentNode;
      i2.insertBefore(o3, e), i2.insertBefore(e, t), i2.insertBefore(t, o3), i2.removeChild(o3);
    }
    /**
     * Selector Decorator
     *
     * Returns first match
     *
     * @param {Element} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {Element}
     */
    static find(e = document, t) {
      return e.querySelector(t);
    }
    /**
     * Get Element by Id
     *
     * @param {string} id - id to find
     * @returns {HTMLElement | null}
     */
    static get(e) {
      return document.getElementById(e);
    }
    /**
     * Selector Decorator.
     *
     * Returns all matches
     *
     * @param {Element|Document} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {NodeList}
     */
    static findAll(e = document, t) {
      return e.querySelectorAll(t);
    }
    /**
     * Returns CSS selector for all text inputs
     */
    static get allInputsSelector() {
      return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
    }
    /**
     * Find all contenteditable, textarea and editable input elements passed holder contains
     *
     * @param holder - element where to find inputs
     */
    static findAllInputs(e) {
      return At(e.querySelectorAll(_d.allInputsSelector)).reduce((t, o3) => _d.isNativeInput(o3) || _d.containsOnlyInlineElements(o3) ? [...t, o3] : [...t, ..._d.getDeepestBlockElements(o3)], []);
    }
    /**
     * Search for deepest node which is Leaf.
     * Leaf is the vertex that doesn't have any child nodes
     *
     * @description Method recursively goes throw the all Node until it finds the Leaf
     * @param {Node} node - root Node. From this vertex we start Deep-first search
     *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
     * @param {boolean} [atLast] - find last text node
     * @returns - it can be text Node or Element Node, so that caret will able to work with it
     *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
     */
    static getDeepestNode(e, t = false) {
      const o3 = t ? "lastChild" : "firstChild", i2 = t ? "previousSibling" : "nextSibling";
      if (e && e.nodeType === Node.ELEMENT_NODE && e[o3]) {
        let s4 = e[o3];
        if (_d.isSingleTag(s4) && !_d.isNativeInput(s4) && !_d.isLineBreakTag(s4))
          if (s4[i2])
            s4 = s4[i2];
          else if (s4.parentNode[i2])
            s4 = s4.parentNode[i2];
          else
            return s4.parentNode;
        return this.getDeepestNode(s4, t);
      }
      return e;
    }
    /**
     * Check if object is DOM node
     *
     * @param {*} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isElement(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
     * Check if object is DocumentFragment node
     *
     * @param {object} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    /**
     * Check if passed element is contenteditable
     *
     * @param {HTMLElement} element - html element to check
     * @returns {boolean}
     */
    static isContentEditable(e) {
      return e.contentEditable === "true";
    }
    /**
     * Checks target if it is native input
     *
     * @param {*} target - HTML element or string
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isNativeInput(e) {
      const t = [
        "INPUT",
        "TEXTAREA"
      ];
      return e && e.tagName ? t.includes(e.tagName) : false;
    }
    /**
     * Checks if we can set caret
     *
     * @param {HTMLElement} target - target to check
     * @returns {boolean}
     */
    static canSetCaret(e) {
      let t = true;
      if (_d.isNativeInput(e))
        switch (e.type) {
          case "file":
          case "checkbox":
          case "radio":
          case "hidden":
          case "submit":
          case "button":
          case "image":
          case "reset":
            t = false;
            break;
        }
      else
        t = _d.isContentEditable(e);
      return t;
    }
    /**
     * Checks node if it is empty
     *
     * @description Method checks simple Node without any childs for emptiness
     * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean} true if it is empty
     */
    static isNodeEmpty(e, t) {
      let o3;
      return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? o3 = e.value : o3 = e.textContent.replace("\u200B", ""), t && (o3 = o3.replace(new RegExp(t, "g"), "")), o3.trim().length === 0);
    }
    /**
     * checks node if it is doesn't have any child nodes
     *
     * @param {Node} node - node to check
     * @returns {boolean}
     */
    static isLeaf(e) {
      return e ? e.childNodes.length === 0 : false;
    }
    /**
     * breadth-first search (BFS)
     * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
     *
     * @description Pushes to stack all DOM leafs and checks for emptiness
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean}
     */
    static isEmpty(e, t) {
      const o3 = [e];
      for (; o3.length > 0; )
        if (e = o3.shift(), !!e) {
          if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
            return false;
          e.childNodes && o3.push(...Array.from(e.childNodes));
        }
      return true;
    }
    /**
     * Check if string contains html elements
     *
     * @param {string} str - string to check
     * @returns {boolean}
     */
    static isHTMLString(e) {
      const t = _d.make("div");
      return t.innerHTML = e, t.childElementCount > 0;
    }
    /**
     * Return length of node`s text content
     *
     * @param {Node} node - node with content
     * @returns {number}
     */
    static getContentLength(e) {
      return _d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
    }
    /**
     * Return array of names of block html elements
     *
     * @returns {string[]}
     */
    static get blockElements() {
      return [
        "address",
        "article",
        "aside",
        "blockquote",
        "canvas",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "li",
        "main",
        "nav",
        "noscript",
        "ol",
        "output",
        "p",
        "pre",
        "ruby",
        "section",
        "table",
        "tbody",
        "thead",
        "tr",
        "tfoot",
        "ul",
        "video"
      ];
    }
    /**
     * Check if passed content includes only inline elements
     *
     * @param {string|HTMLElement} data - element or html string
     * @returns {boolean}
     */
    static containsOnlyInlineElements(e) {
      let t;
      Q(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
      const o3 = (i2) => !_d.blockElements.includes(i2.tagName.toLowerCase()) && Array.from(i2.children).every(o3);
      return Array.from(t.children).every(o3);
    }
    /**
     * Find and return all block elements in the passed parent (including subtree)
     *
     * @param {HTMLElement} parent - root element
     * @returns {HTMLElement[]}
     */
    static getDeepestBlockElements(e) {
      return _d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o3) => [...t, ..._d.getDeepestBlockElements(o3)], []);
    }
    /**
     * Helper for get holder from {string} or return HTMLElement
     *
     * @param {string | HTMLElement} element - holder's id or holder's HTML Element
     * @returns {HTMLElement}
     */
    static getHolder(e) {
      return Q(e) ? document.getElementById(e) : e;
    }
    /**
     * Returns true if element is anchor (is A tag)
     *
     * @param {Element} element - element to check
     * @returns {boolean}
     */
    static isAnchor(e) {
      return e.tagName.toLowerCase() === "a";
    }
    /**
     * Return element's offset related to the document
     *
     * @todo handle case when editor initialized in scrollable popup
     * @param el - element to compute offset
     */
    static offset(e) {
      const t = e.getBoundingClientRect(), o3 = window.pageXOffset || document.documentElement.scrollLeft, i2 = window.pageYOffset || document.documentElement.scrollTop, s4 = t.top + i2, r2 = t.left + o3;
      return {
        top: s4,
        left: r2,
        bottom: s4 + t.height,
        right: r2 + t.width
      };
    }
  };
  function Lo(n2) {
    return !/[^\t\n\r ]/.test(n2);
  }
  function _o(n2) {
    const e = window.getComputedStyle(n2), t = parseFloat(e.fontSize), o3 = parseFloat(e.lineHeight) || t * 1.2, i2 = parseFloat(e.paddingTop), s4 = parseFloat(e.borderTopWidth), r2 = parseFloat(e.marginTop), l3 = t * 0.8, a5 = (o3 - t) / 2;
    return r2 + s4 + i2 + a5 + l3;
  }
  function Lt(n2) {
    n2.dataset.empty = d.isEmpty(n2) ? "true" : "false";
  }
  var No = {
    blockTunes: {
      toggler: {
        "Click to tune": "",
        "or drag to move": ""
      }
    },
    inlineToolbar: {
      converter: {
        "Convert to": ""
      }
    },
    toolbar: {
      toolbox: {
        Add: ""
      }
    },
    popover: {
      Filter: "",
      "Nothing found": "",
      "Convert to": ""
    }
  };
  var Po = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
  };
  var Do = {
    link: {
      "Add a link": ""
    },
    stub: {
      "The block can not be displayed correctly.": ""
    }
  };
  var Ro = {
    delete: {
      Delete: "",
      "Click to delete": ""
    },
    moveUp: {
      "Move up": ""
    },
    moveDown: {
      "Move down": ""
    }
  };
  var _t = {
    ui: No,
    toolNames: Po,
    tools: Do,
    blockTunes: Ro
  };
  var Nt = class ae {
    /**
     * Type-safe translation for internal UI texts:
     * Perform translation of the string by namespace and a key
     *
     * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
     * @param internalNamespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static ui(e, t) {
      return ae._t(e, t);
    }
    /**
     * Translate for external strings that is not presented in default dictionary.
     * For example, for user-specified tool names
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static t(e, t) {
      return ae._t(e, t);
    }
    /**
     * Adjust module for using external dictionary
     *
     * @param dictionary - new messages list to override default
     */
    static setDictionary(e) {
      ae.currentDictionary = e;
    }
    /**
     * Perform translation both for internal and external namespaces
     * If there is no translation found, returns passed key as a translated message
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static _t(e, t) {
      const o3 = ae.getNamespace(e);
      return !o3 || !o3[t] ? t : o3[t];
    }
    /**
     * Find messages section by namespace path
     *
     * @param namespace - path to section
     */
    static getNamespace(e) {
      return e.split(".").reduce((o3, i2) => !o3 || !Object.keys(o3).length ? {} : o3[i2], ae.currentDictionary);
    }
  };
  Nt.currentDictionary = _t;
  var z = Nt;
  var Pt = class extends Error {
  };
  var Te = class {
    constructor() {
      this.subscribers = {};
    }
    /**
     * Subscribe any event on callback
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    on(e, t) {
      e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
    }
    /**
     * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    once(e, t) {
      e in this.subscribers || (this.subscribers[e] = []);
      const o3 = (i2) => {
        const s4 = t(i2), r2 = this.subscribers[e].indexOf(o3);
        return r2 !== -1 && this.subscribers[e].splice(r2, 1), s4;
      };
      this.subscribers[e].push(o3);
    }
    /**
     * Emit callbacks with passed data
     *
     * @param eventName - event name
     * @param data - subscribers get this data when they were fired
     */
    emit(e, t) {
      V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o3, i2) => {
        const s4 = i2(o3);
        return s4 !== void 0 ? s4 : o3;
      }, t);
    }
    /**
     * Unsubscribe callback from event
     *
     * @param eventName - event name
     * @param callback - event handler
     */
    off(e, t) {
      if (this.subscribers[e] === void 0) {
        console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
        return;
      }
      for (let o3 = 0; o3 < this.subscribers[e].length; o3++)
        if (this.subscribers[e][o3] === t) {
          delete this.subscribers[e][o3];
          break;
        }
    }
    /**
     * Destroyer
     * clears subscribers list
     */
    destroy() {
      this.subscribers = {};
    }
  };
  function G(n2) {
    Object.setPrototypeOf(this, {
      /**
       * Block id
       *
       * @returns {string}
       */
      get id() {
        return n2.id;
      },
      /**
       * Tool name
       *
       * @returns {string}
       */
      get name() {
        return n2.name;
      },
      /**
       * Tool config passed on Editor's initialization
       *
       * @returns {ToolConfig}
       */
      get config() {
        return n2.config;
      },
      /**
       * .ce-block element, that wraps plugin contents
       *
       * @returns {HTMLElement}
       */
      get holder() {
        return n2.holder;
      },
      /**
       * True if Block content is empty
       *
       * @returns {boolean}
       */
      get isEmpty() {
        return n2.isEmpty;
      },
      /**
       * True if Block is selected with Cross-Block selection
       *
       * @returns {boolean}
       */
      get selected() {
        return n2.selected;
      },
      /**
       * Set Block's stretch state
       *
       * @param {boolean} state — state to set
       */
      set stretched(t) {
        n2.stretched = t;
      },
      /**
       * True if Block is stretched
       *
       * @returns {boolean}
       */
      get stretched() {
        return n2.stretched;
      },
      /**
       * True if Block has inputs to be focused
       */
      get focusable() {
        return n2.focusable;
      },
      /**
       * Call Tool method with errors handler under-the-hood
       *
       * @param {string} methodName - method to call
       * @param {object} param - object with parameters
       * @returns {unknown}
       */
      call(t, o3) {
        return n2.call(t, o3);
      },
      /**
       * Save Block content
       *
       * @returns {Promise<void|SavedData>}
       */
      save() {
        return n2.save();
      },
      /**
       * Validate Block data
       *
       * @param {BlockToolData} data - data to validate
       * @returns {Promise<boolean>}
       */
      validate(t) {
        return n2.validate(t);
      },
      /**
       * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
       * Can be useful for block changes invisible for editor core.
       */
      dispatchChange() {
        n2.dispatchChange();
      },
      /**
       * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
       * This method returns the entry that is related to the Block (depended on the Block data)
       */
      getActiveToolboxEntry() {
        return n2.getActiveToolboxEntry();
      }
    });
  }
  var Ce = class {
    constructor() {
      this.allListeners = [];
    }
    /**
     * Assigns event listener on element and returns unique identifier
     *
     * @param {EventTarget} element - DOM element that needs to be listened
     * @param {string} eventType - event type
     * @param {Function} handler - method that will be fired on event
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    on(e, t, o3, i2 = false) {
      const s4 = Ao("l"), r2 = {
        id: s4,
        element: e,
        eventType: t,
        handler: o3,
        options: i2
      };
      if (!this.findOne(e, t, o3))
        return this.allListeners.push(r2), e.addEventListener(t, o3, i2), s4;
    }
    /**
     * Removes event listener from element
     *
     * @param {EventTarget} element - DOM element that we removing listener
     * @param {string} eventType - event type
     * @param {Function} handler - remove handler, if element listens several handlers on the same event type
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    off(e, t, o3, i2) {
      const s4 = this.findAll(e, t, o3);
      s4.forEach((r2, l3) => {
        const a5 = this.allListeners.indexOf(s4[l3]);
        a5 > -1 && (this.allListeners.splice(a5, 1), r2.element.removeEventListener(r2.eventType, r2.handler, r2.options));
      });
    }
    /**
     * Removes listener by id
     *
     * @param {string} id - listener identifier
     */
    offById(e) {
      const t = this.findById(e);
      t && t.element.removeEventListener(t.eventType, t.handler, t.options);
    }
    /**
     * Finds and returns first listener by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} [eventType] - event type
     * @param {Function} [handler] - event handler
     * @returns {ListenerData|null}
     */
    findOne(e, t, o3) {
      const i2 = this.findAll(e, t, o3);
      return i2.length > 0 ? i2[0] : null;
    }
    /**
     * Return all stored listeners by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} eventType - event type
     * @param {Function} handler - event handler
     * @returns {ListenerData[]}
     */
    findAll(e, t, o3) {
      let i2;
      const s4 = e ? this.findByEventTarget(e) : [];
      return e && t && o3 ? i2 = s4.filter((r2) => r2.eventType === t && r2.handler === o3) : e && t ? i2 = s4.filter((r2) => r2.eventType === t) : i2 = s4, i2;
    }
    /**
     * Removes all listeners
     */
    removeAll() {
      this.allListeners.map((e) => {
        e.element.removeEventListener(e.eventType, e.handler, e.options);
      }), this.allListeners = [];
    }
    /**
     * Module cleanup on destruction
     */
    destroy() {
      this.removeAll();
    }
    /**
     * Search method: looks for listener by passed element
     *
     * @param {EventTarget} element - searching element
     * @returns {Array} listeners that found on element
     */
    findByEventTarget(e) {
      return this.allListeners.filter((t) => {
        if (t.element === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed event type
     *
     * @param {string} eventType - event type
     * @returns {ListenerData[]} listeners that found on element
     */
    findByType(e) {
      return this.allListeners.filter((t) => {
        if (t.eventType === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed handler
     *
     * @param {Function} handler - event handler
     * @returns {ListenerData[]} listeners that found on element
     */
    findByHandler(e) {
      return this.allListeners.filter((t) => {
        if (t.handler === e)
          return t;
      });
    }
    /**
     * Returns listener data found by id
     *
     * @param {string} id - listener identifier
     * @returns {ListenerData}
     */
    findById(e) {
      return this.allListeners.find((t) => t.id === e);
    }
  };
  var y = class _y {
    /**
     * @class
     * @param options - Module options
     * @param options.config - Module config
     * @param options.eventsDispatcher - Common event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      if (this.nodes = {}, this.listeners = new Ce(), this.readOnlyMutableListeners = {
        /**
         * Assigns event listener on DOM element and pushes into special array that might be removed
         *
         * @param {EventTarget} element - DOM Element
         * @param {string} eventType - Event name
         * @param {Function} handler - Event handler
         * @param {boolean|AddEventListenerOptions} options - Listening options
         */
        on: (o3, i2, s4, r2 = false) => {
          this.mutableListenerIds.push(
            this.listeners.on(o3, i2, s4, r2)
          );
        },
        /**
         * Clears all mutable listeners
         */
        clearAll: () => {
          for (const o3 of this.mutableListenerIds)
            this.listeners.offById(o3);
          this.mutableListenerIds = [];
        }
      }, this.mutableListenerIds = [], new.target === _y)
        throw new TypeError("Constructors for abstract class Module are not allowed.");
      this.config = e, this.eventsDispatcher = t;
    }
    /**
     * Editor modules setter
     *
     * @param {EditorModules} Editor - Editor's Modules
     */
    set state(e) {
      this.Editor = e;
    }
    /**
     * Remove memorized nodes
     */
    removeAllNodes() {
      for (const e in this.nodes) {
        const t = this.nodes[e];
        t instanceof HTMLElement && t.remove();
      }
    }
    /**
     * Returns true if current direction is RTL (Right-To-Left)
     */
    get isRtl() {
      return this.config.i18n.direction === "rtl";
    }
  };
  var b = class _b {
    constructor() {
      this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
    }
    /**
     * Editor styles
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    static get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorZone: "codex-editor__redactor"
      };
    }
    /**
     * Returns selected anchor
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
     *
     * @returns {Node|null}
     */
    static get anchorNode() {
      const e = window.getSelection();
      return e ? e.anchorNode : null;
    }
    /**
     * Returns selected anchor element
     *
     * @returns {Element|null}
     */
    static get anchorElement() {
      const e = window.getSelection();
      if (!e)
        return null;
      const t = e.anchorNode;
      return t ? d.isElement(t) ? t : t.parentElement : null;
    }
    /**
     * Returns selection offset according to the anchor node
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
     *
     * @returns {number|null}
     */
    static get anchorOffset() {
      const e = window.getSelection();
      return e ? e.anchorOffset : null;
    }
    /**
     * Is current selection range collapsed
     *
     * @returns {boolean|null}
     */
    static get isCollapsed() {
      const e = window.getSelection();
      return e ? e.isCollapsed : null;
    }
    /**
     * Check current selection if it is at Editor's zone
     *
     * @returns {boolean}
     */
    static get isAtEditor() {
      return this.isSelectionAtEditor(_b.get());
    }
    /**
     * Check if passed selection is at Editor's zone
     *
     * @param selection - Selection object to check
     */
    static isSelectionAtEditor(e) {
      if (!e)
        return false;
      let t = e.anchorNode || e.focusNode;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o3 = null;
      return t && t instanceof Element && (o3 = t.closest(`.${_b.CSS.editorZone}`)), o3 ? o3.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Check if passed range at Editor zone
     *
     * @param range - range to check
     */
    static isRangeAtEditor(e) {
      if (!e)
        return;
      let t = e.startContainer;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o3 = null;
      return t && t instanceof Element && (o3 = t.closest(`.${_b.CSS.editorZone}`)), o3 ? o3.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Methods return boolean that true if selection exists on the page
     */
    static get isSelectionExists() {
      return !!_b.get().anchorNode;
    }
    /**
     * Return first range
     *
     * @returns {Range|null}
     */
    static get range() {
      return this.getRangeFromSelection(this.get());
    }
    /**
     * Returns range from passed Selection object
     *
     * @param selection - Selection object to get Range from
     */
    static getRangeFromSelection(e) {
      return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    /**
     * Calculates position and size of selected text
     *
     * @returns {DOMRect | ClientRect}
     */
    static get rect() {
      let e = document.selection, t, o3 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      if (e && e.type !== "Control")
        return e = e, t = e.createRange(), o3.x = t.boundingLeft, o3.y = t.boundingTop, o3.width = t.boundingWidth, o3.height = t.boundingHeight, o3;
      if (!window.getSelection)
        return I("Method window.getSelection is not supported", "warn"), o3;
      if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
        return I("Method SelectionUtils.rangeCount is not supported", "warn"), o3;
      if (e.rangeCount === 0)
        return o3;
      if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o3 = t.getBoundingClientRect()), o3.x === 0 && o3.y === 0) {
        const i2 = document.createElement("span");
        if (i2.getBoundingClientRect) {
          i2.appendChild(document.createTextNode("\u200B")), t.insertNode(i2), o3 = i2.getBoundingClientRect();
          const s4 = i2.parentNode;
          s4.removeChild(i2), s4.normalize();
        }
      }
      return o3;
    }
    /**
     * Returns selected text as String
     *
     * @returns {string}
     */
    static get text() {
      return window.getSelection ? window.getSelection().toString() : "";
    }
    /**
     * Returns window SelectionUtils
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
     *
     * @returns {Selection}
     */
    static get() {
      return window.getSelection();
    }
    /**
     * Set focus to contenteditable or native input element
     *
     * @param element - element where to set focus
     * @param offset - offset of cursor
     */
    static setCursor(e, t = 0) {
      const o3 = document.createRange(), i2 = window.getSelection();
      return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o3.setStart(e, t), o3.setEnd(e, t), i2.removeAllRanges(), i2.addRange(o3), o3.getBoundingClientRect());
    }
    /**
     * Check if current range exists and belongs to container
     *
     * @param container - where range should be
     */
    static isRangeInsideContainer(e) {
      const t = _b.range;
      return t === null ? false : e.contains(t.startContainer);
    }
    /**
     * Adds fake cursor to the current range
     */
    static addFakeCursor() {
      const e = _b.range;
      if (e === null)
        return;
      const t = d.make("span", "codex-editor__fake-cursor");
      t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
    }
    /**
     * Check if passed element contains a fake cursor
     *
     * @param el - where to check
     */
    static isFakeCursorInsideContainer(e) {
      return d.find(e, ".codex-editor__fake-cursor") !== null;
    }
    /**
     * Removes fake cursor from a container
     *
     * @param container - container to look for
     */
    static removeFakeCursor(e = document.body) {
      const t = d.find(e, ".codex-editor__fake-cursor");
      t && t.remove();
    }
    /**
     * Removes fake background
     */
    removeFakeBackground() {
      this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
    }
    /**
     * Sets fake background
     */
    setFakeBackground() {
      document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
    }
    /**
     * Save SelectionUtils's range
     */
    save() {
      this.savedSelectionRange = _b.range;
    }
    /**
     * Restore saved SelectionUtils's range
     */
    restore() {
      if (!this.savedSelectionRange)
        return;
      const e = window.getSelection();
      e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    /**
     * Clears saved selection
     */
    clearSaved() {
      this.savedSelectionRange = null;
    }
    /**
     * Collapse current selection
     */
    collapseToEnd() {
      const e = window.getSelection(), t = document.createRange();
      t.selectNodeContents(e.focusNode), t.collapse(false), e.removeAllRanges(), e.addRange(t);
    }
    /**
     * Looks ahead to find passed tag from current selection
     *
     * @param  {string} tagName       - tag to found
     * @param  {string} [className]   - tag's class name
     * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t, o3 = 10) {
      const i2 = window.getSelection();
      let s4 = null;
      return !i2 || !i2.anchorNode || !i2.focusNode ? null : ([
        /** the Node in which the selection begins */
        i2.anchorNode,
        /** the Node in which the selection ends */
        i2.focusNode
      ].forEach((l3) => {
        let a5 = o3;
        for (; a5 > 0 && l3.parentNode && !(l3.tagName === e && (s4 = l3, t && l3.classList && !l3.classList.contains(t) && (s4 = null), s4)); )
          l3 = l3.parentNode, a5--;
      }), s4);
    }
    /**
     * Expands selection range to the passed parent node
     *
     * @param {HTMLElement} element - element which contents should be selected
     */
    expandToTag(e) {
      const t = window.getSelection();
      t.removeAllRanges();
      const o3 = document.createRange();
      o3.selectNodeContents(e), t.addRange(o3);
    }
  };
  function Fo(n2, e) {
    const { type: t, target: o3, addedNodes: i2, removedNodes: s4 } = n2;
    return n2.type === "attributes" && n2.attributeName === "data-empty" ? false : !!(e.contains(o3) || t === "childList" && (Array.from(i2).some((a5) => a5 === e) || Array.from(s4).some((a5) => a5 === e)));
  }
  var Je = "redactor dom changed";
  var Dt = "block changed";
  var Rt = "fake cursor is about to be toggled";
  var Ft = "fake cursor have been set";
  var ye = "editor mobile layout toggled";
  function Qe(n2, e) {
    if (!n2.conversionConfig)
      return false;
    const t = n2.conversionConfig[e];
    return O(t) || Q(t);
  }
  function _e(n2, e) {
    return Qe(n2.tool, e);
  }
  function Ht(n2, e) {
    return Object.entries(n2).some(([t, o3]) => e[t] && Oo(e[t], o3));
  }
  async function zt(n2, e) {
    const o3 = (await n2.save()).data, i2 = e.find((s4) => s4.name === n2.name);
    return i2 !== void 0 && !Qe(i2, "export") ? [] : e.reduce((s4, r2) => {
      if (!Qe(r2, "import") || r2.toolbox === void 0)
        return s4;
      const l3 = r2.toolbox.filter((a5) => {
        if (V(a5) || a5.icon === void 0)
          return false;
        if (a5.data !== void 0) {
          if (Ht(a5.data, o3))
            return false;
        } else if (r2.name === n2.name)
          return false;
        return true;
      });
      return s4.push({
        ...r2,
        toolbox: l3
      }), s4;
    }, []);
  }
  function wt(n2, e) {
    return n2.mergeable ? n2.name === e.name ? true : _e(e, "export") && _e(n2, "import") : false;
  }
  function Ho(n2, e) {
    const t = e == null ? void 0 : e.export;
    return O(t) ? t(n2) : Q(t) ? n2[t] : (t !== void 0 && I("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
  }
  function xt(n2, e) {
    const t = e == null ? void 0 : e.import;
    return O(t) ? t(n2) : Q(t) ? {
      [t]: n2
    } : (t !== void 0 && I("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
  }
  var A = /* @__PURE__ */ ((n2) => (n2.Default = "default", n2.Separator = "separator", n2.Html = "html", n2))(A || {});
  var J = /* @__PURE__ */ ((n2) => (n2.APPEND_CALLBACK = "appendCallback", n2.RENDERED = "rendered", n2.MOVED = "moved", n2.UPDATED = "updated", n2.REMOVED = "removed", n2.ON_PASTE = "onPaste", n2))(J || {});
  var D = class _D extends Te {
    /**
     * @param options - block constructor options
     * @param [options.id] - block's id. Will be generated if omitted.
     * @param options.data - Tool's initial data
     * @param options.tool — block's tool
     * @param options.api - Editor API module for pass it to the Block Tunes
     * @param options.readOnly - Read-Only flag
     * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
     */
    constructor({
      id: e = Io(),
      data: t,
      tool: o3,
      readOnly: i2,
      tunesData: s4
    }, r2) {
      super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
        this.dropInputsCache(), this.updateCurrentInput();
      }, this.didMutated = (l3 = void 0) => {
        const a5 = l3 === void 0, c5 = l3 instanceof InputEvent;
        !a5 && !c5 && this.detectToolRootChange(l3);
        let u2;
        a5 || c5 ? u2 = true : u2 = !(l3.length > 0 && l3.every((p3) => {
          const { addedNodes: g5, removedNodes: f3, target: k4 } = p3;
          return [
            ...Array.from(g5),
            ...Array.from(f3),
            k4
          ].some((S5) => (d.isElement(S5) || (S5 = S5.parentElement), S5 && S5.closest('[data-mutation-free="true"]') !== null));
        })), u2 && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
          "updated"
          /* UPDATED */
        ), this.emit("didMutated", this));
      }, this.name = o3.name, this.id = e, this.settings = o3.settings, this.config = o3.settings.config || {}, this.editorEventBus = r2 || null, this.blockAPI = new G(this), this.tool = o3, this.toolInstance = o3.create(t, this.blockAPI, i2), this.tunes = o3.tunes, this.composeTunes(s4), this.holder = this.compose(), window.requestIdleCallback(() => {
        this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
      });
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        wrapper: "ce-block",
        wrapperStretched: "ce-block--stretched",
        content: "ce-block__content",
        selected: "ce-block--selected",
        dropTarget: "ce-block--drop-target"
      };
    }
    /**
     * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
     */
    get inputs() {
      if (this.cachedInputs.length !== 0)
        return this.cachedInputs;
      const e = d.findAllInputs(this.holder);
      return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
     * Return current Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get currentInput() {
      return this.inputs[this.inputIndex];
    }
    /**
     * Set input index to the passed element
     *
     * @param element - HTML Element to set as current input
     */
    set currentInput(e) {
      const t = this.inputs.findIndex((o3) => o3 === e || o3.contains(e));
      t !== -1 && (this.inputIndex = t);
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get firstInput() {
      return this.inputs[0];
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get lastInput() {
      const e = this.inputs;
      return e[e.length - 1];
    }
    /**
     * Return next Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get nextInput() {
      return this.inputs[this.inputIndex + 1];
    }
    /**
     * Return previous Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get previousInput() {
      return this.inputs[this.inputIndex - 1];
    }
    /**
     * Get Block's JSON data
     *
     * @returns {object}
     */
    get data() {
      return this.save().then((e) => e && !V(e.data) ? e.data : {});
    }
    /**
     * Returns tool's sanitizer config
     *
     * @returns {object}
     */
    get sanitize() {
      return this.tool.sanitizeConfig;
    }
    /**
     * is block mergeable
     * We plugin have merge function then we call it mergeable
     *
     * @returns {boolean}
     */
    get mergeable() {
      return O(this.toolInstance.merge);
    }
    /**
     * If Block contains inputs, it is focusable
     */
    get focusable() {
      return this.inputs.length !== 0;
    }
    /**
     * Check block for emptiness
     *
     * @returns {boolean}
     */
    get isEmpty() {
      const e = d.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
      return e && t;
    }
    /**
     * Check if block has a media content such as images, iframe and other
     *
     * @returns {boolean}
     */
    get hasMedia() {
      const e = [
        "img",
        "iframe",
        "video",
        "audio",
        "source",
        "input",
        "textarea",
        "twitterwidget"
      ];
      return !!this.holder.querySelector(e.join(","));
    }
    /**
     * Set selected state
     * We don't need to mark Block as Selected when it is empty
     *
     * @param {boolean} state - 'true' to select, 'false' to remove selection
     */
    set selected(e) {
      var i2, s4;
      this.holder.classList.toggle(_D.CSS.selected, e);
      const t = e === true && b.isRangeInsideContainer(this.holder), o3 = e === false && b.isFakeCursorInsideContainer(this.holder);
      (t || o3) && ((i2 = this.editorEventBus) == null || i2.emit(Rt, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s4 = this.editorEventBus) == null || s4.emit(Ft, { state: e }));
    }
    /**
     * Returns True if it is Selected
     *
     * @returns {boolean}
     */
    get selected() {
      return this.holder.classList.contains(_D.CSS.selected);
    }
    /**
     * Set stretched state
     *
     * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
     */
    set stretched(e) {
      this.holder.classList.toggle(_D.CSS.wrapperStretched, e);
    }
    /**
     * Return Block's stretched state
     *
     * @returns {boolean}
     */
    get stretched() {
      return this.holder.classList.contains(_D.CSS.wrapperStretched);
    }
    /**
     * Toggle drop target state
     *
     * @param {boolean} state - 'true' if block is drop target, false otherwise
     */
    set dropTarget(e) {
      this.holder.classList.toggle(_D.CSS.dropTarget, e);
    }
    /**
     * Returns Plugins content
     *
     * @returns {HTMLElement}
     */
    get pluginsContent() {
      return this.toolRenderedElement;
    }
    /**
     * Calls Tool's method
     *
     * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
     *
     * @param {string} methodName - method to call
     * @param {object} params - method argument
     */
    call(e, t) {
      if (O(this.toolInstance[e])) {
        e === "appendCallback" && I(
          "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
          "warn"
        );
        try {
          this.toolInstance[e].call(this.toolInstance, t);
        } catch (o3) {
          I(`Error during '${e}' call: ${o3.message}`, "error");
        }
      }
    }
    /**
     * Call plugins merge method
     *
     * @param {BlockToolData} data - data to merge
     */
    async mergeWith(e) {
      await this.toolInstance.merge(e);
    }
    /**
     * Extracts data from Block
     * Groups Tool's save processing time
     *
     * @returns {object}
     */
    async save() {
      const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
      [
        ...this.tunesInstances.entries(),
        ...this.defaultTunesInstances.entries()
      ].forEach(([s4, r2]) => {
        if (O(r2.save))
          try {
            t[s4] = r2.save();
          } catch (l3) {
            I(`Tune ${r2.constructor.name} save method throws an Error %o`, "warn", l3);
          }
      });
      const o3 = window.performance.now();
      let i2;
      return Promise.resolve(e).then((s4) => (i2 = window.performance.now(), {
        id: this.id,
        tool: this.name,
        data: s4,
        tunes: t,
        time: i2 - o3
      })).catch((s4) => {
        I(`Saving process for ${this.name} tool failed due to the ${s4}`, "log", "red");
      });
    }
    /**
     * Uses Tool's validation method to check the correctness of output data
     * Tool's validation method is optional
     *
     * @description Method returns true|false whether data passed the validation or not
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>} valid
     */
    async validate(e) {
      let t = true;
      return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
    }
    /**
     * Returns data to render in Block Tunes menu.
     * Splits block tunes into 2 groups: block specific tunes and common tunes
     */
    getTunes() {
      const e = [], t = [], o3 = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
      return d.isElement(o3) ? e.push({
        type: A.Html,
        element: o3
      }) : Array.isArray(o3) ? e.push(...o3) : e.push(o3), [
        ...this.tunesInstances.values(),
        ...this.defaultTunesInstances.values()
      ].map((s4) => s4.render()).forEach((s4) => {
        d.isElement(s4) ? t.push({
          type: A.Html,
          element: s4
        }) : Array.isArray(s4) ? t.push(...s4) : t.push(s4);
      }), {
        toolTunes: e,
        commonTunes: t
      };
    }
    /**
     * Update current input index with selection anchor node
     */
    updateCurrentInput() {
      this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
    }
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      this.didMutated();
    }
    /**
     * Call Tool instance destroy method
     */
    destroy() {
      this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), O(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    async getActiveToolboxEntry() {
      const e = this.tool.toolbox;
      if (e.length === 1)
        return Promise.resolve(this.tool.toolbox[0]);
      const t = await this.data, o3 = e;
      return o3 == null ? void 0 : o3.find((i2) => Ht(i2.data, t));
    }
    /**
     * Exports Block data as string using conversion config
     */
    async exportDataAsString() {
      const e = await this.data;
      return Ho(e, this.tool.conversionConfig);
    }
    /**
     * Make default Block wrappers and put Tool`s content there
     *
     * @returns {HTMLDivElement}
     */
    compose() {
      const e = d.make("div", _D.CSS.wrapper), t = d.make("div", _D.CSS.content), o3 = this.toolInstance.render();
      e.dataset.id = this.id, this.toolRenderedElement = o3, t.appendChild(this.toolRenderedElement);
      let i2 = t;
      return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s4) => {
        if (O(s4.wrap))
          try {
            i2 = s4.wrap(i2);
          } catch (r2) {
            I(`Tune ${s4.constructor.name} wrap method throws an Error %o`, "warn", r2);
          }
      }), e.appendChild(i2), e;
    }
    /**
     * Instantiate Block Tunes
     *
     * @param tunesData - current Block tunes data
     * @private
     */
    composeTunes(e) {
      Array.from(this.tunes.values()).forEach((t) => {
        (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
      }), Object.entries(e).forEach(([t, o3]) => {
        this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o3);
      });
    }
    /**
     * Adds focus event listeners to all inputs and contenteditable
     */
    addInputEvents() {
      this.inputs.forEach((e) => {
        e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
      });
    }
    /**
     * removes focus event listeners from all inputs and contenteditable
     */
    removeInputEvents() {
      this.inputs.forEach((e) => {
        e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
      });
    }
    /**
     * Listen common editor Dom Changed event and detect mutations related to the  Block
     */
    watchBlockMutations() {
      var e;
      this.redactorDomChangedCallback = (t) => {
        const { mutations: o3 } = t;
        o3.some((s4) => Fo(s4, this.toolRenderedElement)) && this.didMutated(o3);
      }, (e = this.editorEventBus) == null || e.on(Je, this.redactorDomChangedCallback);
    }
    /**
     * Remove redactor dom change event listener
     */
    unwatchBlockMutations() {
      var e;
      (e = this.editorEventBus) == null || e.off(Je, this.redactorDomChangedCallback);
    }
    /**
     * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
     * We need to detect such changes and update a link to tools main element with the new one
     *
     * @param mutations - records of block content mutations
     */
    detectToolRootChange(e) {
      e.forEach((t) => {
        if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
          const i2 = t.addedNodes[t.addedNodes.length - 1];
          this.toolRenderedElement = i2;
        }
      });
    }
    /**
     * Clears inputs cached value
     */
    dropInputsCache() {
      this.cachedInputs = [];
    }
    /**
     * Mark inputs with 'data-empty' attribute with the empty state
     */
    toggleInputsEmptyMark() {
      this.inputs.forEach(Lt);
    }
  };
  var zo = class extends y {
    constructor() {
      super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o3 = {}, i2, s4, r2, l3) => {
        const a5 = this.Editor.BlockManager.insert({
          id: l3,
          tool: e,
          data: t,
          index: i2,
          needToFocus: s4,
          replace: r2
        });
        return new G(a5);
      }, this.composeBlockData = async (e) => {
        const t = this.Editor.Tools.blockTools.get(e);
        return new D({
          tool: t,
          api: this.Editor.API,
          readOnly: true,
          data: {},
          tunesData: {}
        }).data;
      }, this.update = async (e, t, o3) => {
        const { BlockManager: i2 } = this.Editor, s4 = i2.getBlockById(e);
        if (s4 === void 0)
          throw new Error(`Block with id "${e}" not found`);
        const r2 = await i2.update(s4, t, o3);
        return new G(r2);
      }, this.convert = async (e, t, o3) => {
        var h5, p3;
        const { BlockManager: i2, Tools: s4 } = this.Editor, r2 = i2.getBlockById(e);
        if (!r2)
          throw new Error(`Block with id "${e}" not found`);
        const l3 = s4.blockTools.get(r2.name), a5 = s4.blockTools.get(t);
        if (!a5)
          throw new Error(`Block Tool with type "${t}" not found`);
        const c5 = ((h5 = l3 == null ? void 0 : l3.conversionConfig) == null ? void 0 : h5.export) !== void 0, u2 = ((p3 = a5.conversionConfig) == null ? void 0 : p3.import) !== void 0;
        if (c5 && u2) {
          const g5 = await i2.convert(r2, t, o3);
          return new G(g5);
        } else {
          const g5 = [
            c5 ? false : Le(r2.name),
            u2 ? false : Le(t)
          ].filter(Boolean).join(" and ");
          throw new Error(`Conversion from "${r2.name}" to "${t}" is not possible. ${g5} tool(s) should provide a "conversionConfig"`);
        }
      }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
        this.validateIndex(t);
        const o3 = e.map(({ id: i2, type: s4, data: r2 }) => this.Editor.BlockManager.composeBlock({
          id: i2,
          tool: s4 || this.config.defaultBlock,
          data: r2
        }));
        return this.Editor.BlockManager.insertMany(o3, t), o3.map((i2) => new G(i2));
      };
    }
    /**
     * Available methods
     *
     * @returns {Blocks}
     */
    get methods() {
      return {
        clear: () => this.clear(),
        render: (e) => this.render(e),
        renderFromHTML: (e) => this.renderFromHTML(e),
        delete: (e) => this.delete(e),
        swap: (e, t) => this.swap(e, t),
        move: (e, t) => this.move(e, t),
        getBlockByIndex: (e) => this.getBlockByIndex(e),
        getById: (e) => this.getById(e),
        getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
        getBlockIndex: (e) => this.getBlockIndex(e),
        getBlocksCount: () => this.getBlocksCount(),
        getBlockByElement: (e) => this.getBlockByElement(e),
        stretchBlock: (e, t = true) => this.stretchBlock(e, t),
        insertNewBlock: () => this.insertNewBlock(),
        insert: this.insert,
        insertMany: this.insertMany,
        update: this.update,
        composeBlockData: this.composeBlockData,
        convert: this.convert
      };
    }
    /**
     * Returns Blocks count
     *
     * @returns {number}
     */
    getBlocksCount() {
      return this.Editor.BlockManager.blocks.length;
    }
    /**
     * Returns current block index
     *
     * @returns {number}
     */
    getCurrentBlockIndex() {
      return this.Editor.BlockManager.currentBlockIndex;
    }
    /**
     * Returns the index of Block by id;
     *
     * @param id - block id
     */
    getBlockIndex(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      if (!t) {
        X("There is no block with id `" + e + "`", "warn");
        return;
      }
      return this.Editor.BlockManager.getBlockIndex(t);
    }
    /**
     * Returns BlockAPI object by Block index
     *
     * @param {number} index - index to get
     */
    getBlockByIndex(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      if (t === void 0) {
        X("There is no block at index `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Returns BlockAPI object by Block id
     *
     * @param id - id of block to get
     */
    getById(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new G(t);
    }
    /**
     * Get Block API object by any child html element
     *
     * @param element - html element to get Block by
     */
    getBlockByElement(e) {
      const t = this.Editor.BlockManager.getBlock(e);
      if (t === void 0) {
        X("There is no block corresponding to element `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Call Block Manager method that swap Blocks
     *
     * @param {number} fromIndex - position of first Block
     * @param {number} toIndex - position of second Block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      I(
        "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
        "info"
      ), this.Editor.BlockManager.swap(e, t);
    }
    /**
     * Move block from one index to another
     *
     * @param {number} toIndex - index to move to
     * @param {number} fromIndex - index to move from
     */
    move(e, t) {
      this.Editor.BlockManager.move(e, t);
    }
    /**
     * Deletes Block
     *
     * @param {number} blockIndex - index of Block to delete
     */
    delete(e = this.Editor.BlockManager.currentBlockIndex) {
      try {
        const t = this.Editor.BlockManager.getBlockByIndex(e);
        this.Editor.BlockManager.removeBlock(t);
      } catch (t) {
        X(t, "warn");
        return;
      }
      this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
    }
    /**
     * Clear Editor's area
     */
    async clear() {
      await this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
    }
    /**
     * Fills Editor with Blocks data
     *
     * @param {OutputData} data — Saved Editor data
     */
    async render(e) {
      if (e === void 0 || e.blocks === void 0)
        throw new Error("Incorrect data passed to the render() method");
      this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
    }
    /**
     * Render passed HTML string
     *
     * @param {string} data - HTML string to render
     * @returns {Promise<void>}
     */
    renderFromHTML(e) {
      return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
    }
    /**
     * Stretch Block's content
     *
     * @param {number} index - index of Block to stretch
     * @param {boolean} status - true to enable, false to disable
     * @deprecated Use BlockAPI interface to stretch Blocks
     */
    stretchBlock(e, t = true) {
      Ze(
        true,
        "blocks.stretchBlock()",
        "BlockAPI"
      );
      const o3 = this.Editor.BlockManager.getBlockByIndex(e);
      o3 && (o3.stretched = t);
    }
    /**
     * Insert new Block
     * After set caret to this Block
     *
     * @todo remove in 3.0.0
     * @deprecated with insert() method
     */
    insertNewBlock() {
      I("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
    }
    /**
     * Validated block index and throws an error if it's invalid
     *
     * @param index - index to validate
     */
    validateIndex(e) {
      if (typeof e != "number")
        throw new Error("Index should be a number");
      if (e < 0)
        throw new Error("Index should be greater than or equal to 0");
      if (e === null)
        throw new Error("Index should be greater than or equal to 0");
    }
  };
  function Uo(n2, e) {
    return typeof n2 == "number" ? e.BlockManager.getBlockByIndex(n2) : typeof n2 == "string" ? e.BlockManager.getBlockById(n2) : e.BlockManager.getBlockById(n2.id);
  }
  var jo = class extends y {
    constructor() {
      super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o3 = 0) => {
        const i2 = Uo(e, this.Editor);
        return i2 === void 0 ? false : (this.Editor.Caret.setToBlock(i2, t, o3), true);
      }, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
    }
    /**
     * Available methods
     *
     * @returns {Caret}
     */
    get methods() {
      return {
        setToFirstBlock: this.setToFirstBlock,
        setToLastBlock: this.setToLastBlock,
        setToPreviousBlock: this.setToPreviousBlock,
        setToNextBlock: this.setToNextBlock,
        setToBlock: this.setToBlock,
        focus: this.focus
      };
    }
  };
  var $o = class extends y {
    /**
     * Available methods
     *
     * @returns {Events}
     */
    get methods() {
      return {
        emit: (e, t) => this.emit(e, t),
        off: (e, t) => this.off(e, t),
        on: (e, t) => this.on(e, t)
      };
    }
    /**
     * Subscribe on Events
     *
     * @param {string} eventName - event name to subscribe
     * @param {Function} callback - event handler
     */
    on(e, t) {
      this.eventsDispatcher.on(e, t);
    }
    /**
     * Emit event with data
     *
     * @param {string} eventName - event to emit
     * @param {object} data - event's data
     */
    emit(e, t) {
      this.eventsDispatcher.emit(e, t);
    }
    /**
     * Unsubscribe from Event
     *
     * @param {string} eventName - event to unsubscribe
     * @param {Function} callback - event handler
     */
    off(e, t) {
      this.eventsDispatcher.off(e, t);
    }
  };
  var ot = class _ot extends y {
    /**
     * Return namespace section for tool or block tune
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    static getNamespace(e, t) {
      return t ? `blockTunes.${e}` : `tools.${e}`;
    }
    /**
     * Return I18n API methods with global dictionary access
     */
    get methods() {
      return {
        t: () => {
          X("I18n.t() method can be accessed only from Tools", "warn");
        }
      };
    }
    /**
     * Return I18n API methods with tool namespaced dictionary
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          t: (o3) => z.t(_ot.getNamespace(e, t), o3)
        }
      );
    }
  };
  var Yo = class extends y {
    /**
     * Editor.js Core API modules
     */
    get methods() {
      return {
        blocks: this.Editor.BlocksAPI.methods,
        caret: this.Editor.CaretAPI.methods,
        tools: this.Editor.ToolsAPI.methods,
        events: this.Editor.EventsAPI.methods,
        listeners: this.Editor.ListenersAPI.methods,
        notifier: this.Editor.NotifierAPI.methods,
        sanitizer: this.Editor.SanitizerAPI.methods,
        saver: this.Editor.SaverAPI.methods,
        selection: this.Editor.SelectionAPI.methods,
        styles: this.Editor.StylesAPI.classes,
        toolbar: this.Editor.ToolbarAPI.methods,
        inlineToolbar: this.Editor.InlineToolbarAPI.methods,
        tooltip: this.Editor.TooltipAPI.methods,
        i18n: this.Editor.I18nAPI.methods,
        readOnly: this.Editor.ReadOnlyAPI.methods,
        ui: this.Editor.UiAPI.methods
      };
    }
    /**
     * Returns Editor.js Core API methods for passed tool
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
        }
      );
    }
  };
  var Wo = class extends y {
    /**
     * Available methods
     *
     * @returns {InlineToolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open()
      };
    }
    /**
     * Open Inline Toolbar
     */
    open() {
      this.Editor.InlineToolbar.tryToShow();
    }
    /**
     * Close Inline Toolbar
     */
    close() {
      this.Editor.InlineToolbar.close();
    }
  };
  var Ko = class extends y {
    /**
     * Available methods
     *
     * @returns {Listeners}
     */
    get methods() {
      return {
        on: (e, t, o3, i2) => this.on(e, t, o3, i2),
        off: (e, t, o3, i2) => this.off(e, t, o3, i2),
        offById: (e) => this.offById(e)
      };
    }
    /**
     * Ads a DOM event listener. Return it's id.
     *
     * @param {HTMLElement} element - Element to set handler to
     * @param {string} eventType - event type
     * @param {() => void} handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    on(e, t, o3, i2) {
      return this.listeners.on(e, t, o3, i2);
    }
    /**
     * Removes DOM listener from element
     *
     * @param {Element} element - Element to remove handler from
     * @param eventType - event type
     * @param handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    off(e, t, o3, i2) {
      this.listeners.off(e, t, o3, i2);
    }
    /**
     * Removes DOM listener by the listener id
     *
     * @param id - id of the listener to remove
     */
    offById(e) {
      this.listeners.offById(e);
    }
  };
  var Ut = { exports: {} };
  (function(n2, e) {
    (function(t, o3) {
      n2.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(s4) {
          if (o3[s4])
            return o3[s4].exports;
          var r2 = o3[s4] = { i: s4, l: false, exports: {} };
          return t[s4].call(r2.exports, r2, r2.exports, i2), r2.l = true, r2.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(s4, r2, l3) {
          i2.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: l3 });
        }, i2.r = function(s4) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
        }, i2.t = function(s4, r2) {
          if (1 & r2 && (s4 = i2(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
            return s4;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
            for (var a5 in s4)
              i2.d(l3, a5, function(c5) {
                return s4[c5];
              }.bind(null, a5));
          return l3;
        }, i2.n = function(s4) {
          var r2 = s4 && s4.__esModule ? function() {
            return s4.default;
          } : function() {
            return s4;
          };
          return i2.d(r2, "a", r2), r2;
        }, i2.o = function(s4, r2) {
          return Object.prototype.hasOwnProperty.call(s4, r2);
        }, i2.p = "/", i2(i2.s = 0);
      }([function(t, o3, i2) {
        i2(1), /*!
        * Codex JavaScript Notification module
        * https://github.com/codex-team/js-notifier
        */
        t.exports = function() {
          var s4 = i2(6), r2 = "cdx-notify--bounce-in", l3 = null;
          return { show: function(a5) {
            if (a5.message) {
              (function() {
                if (l3)
                  return true;
                l3 = s4.getWrapper(), document.body.appendChild(l3);
              })();
              var c5 = null, u2 = a5.time || 8e3;
              switch (a5.type) {
                case "confirm":
                  c5 = s4.confirm(a5);
                  break;
                case "prompt":
                  c5 = s4.prompt(a5);
                  break;
                default:
                  c5 = s4.alert(a5), window.setTimeout(function() {
                    c5.remove();
                  }, u2);
              }
              l3.appendChild(c5), c5.classList.add(r2);
            }
          } };
        }();
      }, function(t, o3, i2) {
        var s4 = i2(2);
        typeof s4 == "string" && (s4 = [[t.i, s4, ""]]);
        var r2 = { hmr: true, transform: void 0, insertInto: void 0 };
        i2(4)(s4, r2), s4.locals && (t.exports = s4.locals);
      }, function(t, o3, i2) {
        (t.exports = i2(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
      }, function(t, o3) {
        t.exports = function(i2) {
          var s4 = [];
          return s4.toString = function() {
            return this.map(function(r2) {
              var l3 = function(a5, c5) {
                var u2 = a5[1] || "", h5 = a5[3];
                if (!h5)
                  return u2;
                if (c5 && typeof btoa == "function") {
                  var p3 = (f3 = h5, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f3)))) + " */"), g5 = h5.sources.map(function(k4) {
                    return "/*# sourceURL=" + h5.sourceRoot + k4 + " */";
                  });
                  return [u2].concat(g5).concat([p3]).join(`
`);
                }
                var f3;
                return [u2].join(`
`);
              }(r2, i2);
              return r2[2] ? "@media " + r2[2] + "{" + l3 + "}" : l3;
            }).join("");
          }, s4.i = function(r2, l3) {
            typeof r2 == "string" && (r2 = [[null, r2, ""]]);
            for (var a5 = {}, c5 = 0; c5 < this.length; c5++) {
              var u2 = this[c5][0];
              typeof u2 == "number" && (a5[u2] = true);
            }
            for (c5 = 0; c5 < r2.length; c5++) {
              var h5 = r2[c5];
              typeof h5[0] == "number" && a5[h5[0]] || (l3 && !h5[2] ? h5[2] = l3 : l3 && (h5[2] = "(" + h5[2] + ") and (" + l3 + ")"), s4.push(h5));
            }
          }, s4;
        };
      }, function(t, o3, i2) {
        var s4, r2, l3 = {}, a5 = (s4 = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return r2 === void 0 && (r2 = s4.apply(this, arguments)), r2;
        }), c5 = /* @__PURE__ */ function(v5) {
          var m5 = {};
          return function(x5) {
            if (typeof x5 == "function")
              return x5();
            if (m5[x5] === void 0) {
              var E4 = function(M5) {
                return document.querySelector(M5);
              }.call(this, x5);
              if (window.HTMLIFrameElement && E4 instanceof window.HTMLIFrameElement)
                try {
                  E4 = E4.contentDocument.head;
                } catch {
                  E4 = null;
                }
              m5[x5] = E4;
            }
            return m5[x5];
          };
        }(), u2 = null, h5 = 0, p3 = [], g5 = i2(5);
        function f3(v5, m5) {
          for (var x5 = 0; x5 < v5.length; x5++) {
            var E4 = v5[x5], M5 = l3[E4.id];
            if (M5) {
              M5.refs++;
              for (var T4 = 0; T4 < M5.parts.length; T4++)
                M5.parts[T4](E4.parts[T4]);
              for (; T4 < E4.parts.length; T4++)
                M5.parts.push(j4(E4.parts[T4], m5));
            } else {
              var P5 = [];
              for (T4 = 0; T4 < E4.parts.length; T4++)
                P5.push(j4(E4.parts[T4], m5));
              l3[E4.id] = { id: E4.id, refs: 1, parts: P5 };
            }
          }
        }
        function k4(v5, m5) {
          for (var x5 = [], E4 = {}, M5 = 0; M5 < v5.length; M5++) {
            var T4 = v5[M5], P5 = m5.base ? T4[0] + m5.base : T4[0], B5 = { css: T4[1], media: T4[2], sourceMap: T4[3] };
            E4[P5] ? E4[P5].parts.push(B5) : x5.push(E4[P5] = { id: P5, parts: [B5] });
          }
          return x5;
        }
        function C5(v5, m5) {
          var x5 = c5(v5.insertInto);
          if (!x5)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var E4 = p3[p3.length - 1];
          if (v5.insertAt === "top")
            E4 ? E4.nextSibling ? x5.insertBefore(m5, E4.nextSibling) : x5.appendChild(m5) : x5.insertBefore(m5, x5.firstChild), p3.push(m5);
          else if (v5.insertAt === "bottom")
            x5.appendChild(m5);
          else {
            if (typeof v5.insertAt != "object" || !v5.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var M5 = c5(v5.insertInto + " " + v5.insertAt.before);
            x5.insertBefore(m5, M5);
          }
        }
        function S5(v5) {
          if (v5.parentNode === null)
            return false;
          v5.parentNode.removeChild(v5);
          var m5 = p3.indexOf(v5);
          m5 >= 0 && p3.splice(m5, 1);
        }
        function _3(v5) {
          var m5 = document.createElement("style");
          return v5.attrs.type === void 0 && (v5.attrs.type = "text/css"), ee3(m5, v5.attrs), C5(v5, m5), m5;
        }
        function ee3(v5, m5) {
          Object.keys(m5).forEach(function(x5) {
            v5.setAttribute(x5, m5[x5]);
          });
        }
        function j4(v5, m5) {
          var x5, E4, M5, T4;
          if (m5.transform && v5.css) {
            if (!(T4 = m5.transform(v5.css)))
              return function() {
              };
            v5.css = T4;
          }
          if (m5.singleton) {
            var P5 = h5++;
            x5 = u2 || (u2 = _3(m5)), E4 = fe3.bind(null, x5, P5, false), M5 = fe3.bind(null, x5, P5, true);
          } else
            v5.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x5 = function(B5) {
              var Y3 = document.createElement("link");
              return B5.attrs.type === void 0 && (B5.attrs.type = "text/css"), B5.attrs.rel = "stylesheet", ee3(Y3, B5.attrs), C5(B5, Y3), Y3;
            }(m5), E4 = function(B5, Y3, ge3) {
              var ie3 = ge3.css, He3 = ge3.sourceMap, mo = Y3.convertToAbsoluteUrls === void 0 && He3;
              (Y3.convertToAbsoluteUrls || mo) && (ie3 = g5(ie3)), He3 && (ie3 += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He3)))) + " */");
              var bo = new Blob([ie3], { type: "text/css" }), mt2 = B5.href;
              B5.href = URL.createObjectURL(bo), mt2 && URL.revokeObjectURL(mt2);
            }.bind(null, x5, m5), M5 = function() {
              S5(x5), x5.href && URL.revokeObjectURL(x5.href);
            }) : (x5 = _3(m5), E4 = function(B5, Y3) {
              var ge3 = Y3.css, ie3 = Y3.media;
              if (ie3 && B5.setAttribute("media", ie3), B5.styleSheet)
                B5.styleSheet.cssText = ge3;
              else {
                for (; B5.firstChild; )
                  B5.removeChild(B5.firstChild);
                B5.appendChild(document.createTextNode(ge3));
              }
            }.bind(null, x5), M5 = function() {
              S5(x5);
            });
          return E4(v5), function(B5) {
            if (B5) {
              if (B5.css === v5.css && B5.media === v5.media && B5.sourceMap === v5.sourceMap)
                return;
              E4(v5 = B5);
            } else
              M5();
          };
        }
        t.exports = function(v5, m5) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (m5 = m5 || {}).attrs = typeof m5.attrs == "object" ? m5.attrs : {}, m5.singleton || typeof m5.singleton == "boolean" || (m5.singleton = a5()), m5.insertInto || (m5.insertInto = "head"), m5.insertAt || (m5.insertAt = "bottom");
          var x5 = k4(v5, m5);
          return f3(x5, m5), function(E4) {
            for (var M5 = [], T4 = 0; T4 < x5.length; T4++) {
              var P5 = x5[T4];
              (B5 = l3[P5.id]).refs--, M5.push(B5);
            }
            for (E4 && f3(k4(E4, m5), m5), T4 = 0; T4 < M5.length; T4++) {
              var B5;
              if ((B5 = M5[T4]).refs === 0) {
                for (var Y3 = 0; Y3 < B5.parts.length; Y3++)
                  B5.parts[Y3]();
                delete l3[B5.id];
              }
            }
          };
        };
        var $3, oe3 = ($3 = [], function(v5, m5) {
          return $3[v5] = m5, $3.filter(Boolean).join(`
`);
        });
        function fe3(v5, m5, x5, E4) {
          var M5 = x5 ? "" : E4.css;
          if (v5.styleSheet)
            v5.styleSheet.cssText = oe3(m5, M5);
          else {
            var T4 = document.createTextNode(M5), P5 = v5.childNodes;
            P5[m5] && v5.removeChild(P5[m5]), P5.length ? v5.insertBefore(T4, P5[m5]) : v5.appendChild(T4);
          }
        }
      }, function(t, o3) {
        t.exports = function(i2) {
          var s4 = typeof window < "u" && window.location;
          if (!s4)
            throw new Error("fixUrls requires window.location");
          if (!i2 || typeof i2 != "string")
            return i2;
          var r2 = s4.protocol + "//" + s4.host, l3 = r2 + s4.pathname.replace(/\/[^\/]*$/, "/");
          return i2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a5, c5) {
            var u2, h5 = c5.trim().replace(/^"(.*)"$/, function(p3, g5) {
              return g5;
            }).replace(/^'(.*)'$/, function(p3, g5) {
              return g5;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h5) ? a5 : (u2 = h5.indexOf("//") === 0 ? h5 : h5.indexOf("/") === 0 ? r2 + h5 : l3 + h5.replace(/^\.\//, ""), "url(" + JSON.stringify(u2) + ")");
          });
        };
      }, function(t, o3, i2) {
        var s4, r2, l3, a5, c5, u2, h5, p3, g5;
        t.exports = (s4 = "cdx-notifies", r2 = "cdx-notify", l3 = "cdx-notify__cross", a5 = "cdx-notify__button--confirm", c5 = "cdx-notify__button--cancel", u2 = "cdx-notify__input", h5 = "cdx-notify__button", p3 = "cdx-notify__btns-wrapper", { alert: g5 = function(f3) {
          var k4 = document.createElement("DIV"), C5 = document.createElement("DIV"), S5 = f3.message, _3 = f3.style;
          return k4.classList.add(r2), _3 && k4.classList.add(r2 + "--" + _3), k4.innerHTML = S5, C5.classList.add(l3), C5.addEventListener("click", k4.remove.bind(k4)), k4.appendChild(C5), k4;
        }, confirm: function(f3) {
          var k4 = g5(f3), C5 = document.createElement("div"), S5 = document.createElement("button"), _3 = document.createElement("button"), ee3 = k4.querySelector("." + l3), j4 = f3.cancelHandler, $3 = f3.okHandler;
          return C5.classList.add(p3), S5.innerHTML = f3.okText || "Confirm", _3.innerHTML = f3.cancelText || "Cancel", S5.classList.add(h5), _3.classList.add(h5), S5.classList.add(a5), _3.classList.add(c5), j4 && typeof j4 == "function" && (_3.addEventListener("click", j4), ee3.addEventListener("click", j4)), $3 && typeof $3 == "function" && S5.addEventListener("click", $3), S5.addEventListener("click", k4.remove.bind(k4)), _3.addEventListener("click", k4.remove.bind(k4)), C5.appendChild(S5), C5.appendChild(_3), k4.appendChild(C5), k4;
        }, prompt: function(f3) {
          var k4 = g5(f3), C5 = document.createElement("div"), S5 = document.createElement("button"), _3 = document.createElement("input"), ee3 = k4.querySelector("." + l3), j4 = f3.cancelHandler, $3 = f3.okHandler;
          return C5.classList.add(p3), S5.innerHTML = f3.okText || "Ok", S5.classList.add(h5), S5.classList.add(a5), _3.classList.add(u2), f3.placeholder && _3.setAttribute("placeholder", f3.placeholder), f3.default && (_3.value = f3.default), f3.inputType && (_3.type = f3.inputType), j4 && typeof j4 == "function" && ee3.addEventListener("click", j4), $3 && typeof $3 == "function" && S5.addEventListener("click", function() {
            $3(_3.value);
          }), S5.addEventListener("click", k4.remove.bind(k4)), C5.appendChild(_3), C5.appendChild(S5), k4.appendChild(C5), k4;
        }, getWrapper: function() {
          var f3 = document.createElement("DIV");
          return f3.classList.add(s4), f3;
        } });
      }]);
    });
  })(Ut);
  var Xo = Ut.exports;
  var Vo = /* @__PURE__ */ Fe(Xo);
  var qo = class {
    /**
     * Show web notification
     *
     * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
     */
    show(e) {
      Vo.show(e);
    }
  };
  var Zo = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.notifier = new qo();
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e) => this.show(e)
      };
    }
    /**
     * Show notification
     *
     * @param {NotifierOptions} options - message option
     */
    show(e) {
      return this.notifier.show(e);
    }
  };
  var Go = class extends y {
    /**
     * Available methods
     */
    get methods() {
      const e = () => this.isEnabled;
      return {
        toggle: (t) => this.toggle(t),
        get isEnabled() {
          return e();
        }
      };
    }
    /**
     * Set or toggle read-only state
     *
     * @param {boolean|undefined} state - set or toggle state
     * @returns {boolean} current value
     */
    toggle(e) {
      return this.Editor.ReadOnly.toggle(e);
    }
    /**
     * Returns current read-only state
     */
    get isEnabled() {
      return this.Editor.ReadOnly.isEnabled;
    }
  };
  var jt = { exports: {} };
  (function(n2, e) {
    (function(t, o3) {
      n2.exports = o3();
    })(ko, function() {
      function t(h5) {
        var p3 = h5.tags, g5 = Object.keys(p3), f3 = g5.map(function(k4) {
          return typeof p3[k4];
        }).every(function(k4) {
          return k4 === "object" || k4 === "boolean" || k4 === "function";
        });
        if (!f3)
          throw new Error("The configuration was invalid");
        this.config = h5;
      }
      var o3 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
      function i2(h5) {
        return o3.indexOf(h5.nodeName) !== -1;
      }
      var s4 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
      function r2(h5) {
        return s4.indexOf(h5.nodeName) !== -1;
      }
      t.prototype.clean = function(h5) {
        const p3 = document.implementation.createHTMLDocument(), g5 = p3.createElement("div");
        return g5.innerHTML = h5, this._sanitize(p3, g5), g5.innerHTML;
      }, t.prototype._sanitize = function(h5, p3) {
        var g5 = l3(h5, p3), f3 = g5.firstChild();
        if (f3)
          do {
            if (f3.nodeType === Node.TEXT_NODE)
              if (f3.data.trim() === "" && (f3.previousElementSibling && i2(f3.previousElementSibling) || f3.nextElementSibling && i2(f3.nextElementSibling))) {
                p3.removeChild(f3), this._sanitize(h5, p3);
                break;
              } else
                continue;
            if (f3.nodeType === Node.COMMENT_NODE) {
              p3.removeChild(f3), this._sanitize(h5, p3);
              break;
            }
            var k4 = r2(f3), C5;
            k4 && (C5 = Array.prototype.some.call(f3.childNodes, i2));
            var S5 = !!p3.parentNode, _3 = i2(p3) && i2(f3) && S5, ee3 = f3.nodeName.toLowerCase(), j4 = a5(this.config, ee3, f3), $3 = k4 && C5;
            if ($3 || c5(f3, j4) || !this.config.keepNestedBlockElements && _3) {
              if (!(f3.nodeName === "SCRIPT" || f3.nodeName === "STYLE"))
                for (; f3.childNodes.length > 0; )
                  p3.insertBefore(f3.childNodes[0], f3);
              p3.removeChild(f3), this._sanitize(h5, p3);
              break;
            }
            for (var oe3 = 0; oe3 < f3.attributes.length; oe3 += 1) {
              var fe3 = f3.attributes[oe3];
              u2(fe3, j4, f3) && (f3.removeAttribute(fe3.name), oe3 = oe3 - 1);
            }
            this._sanitize(h5, f3);
          } while (f3 = g5.nextSibling());
      };
      function l3(h5, p3) {
        return h5.createTreeWalker(
          p3,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
          null,
          false
        );
      }
      function a5(h5, p3, g5) {
        return typeof h5.tags[p3] == "function" ? h5.tags[p3](g5) : h5.tags[p3];
      }
      function c5(h5, p3) {
        return typeof p3 > "u" ? true : typeof p3 == "boolean" ? !p3 : false;
      }
      function u2(h5, p3, g5) {
        var f3 = h5.name.toLowerCase();
        return p3 === true ? false : typeof p3[f3] == "function" ? !p3[f3](h5.value, g5) : typeof p3[f3] > "u" || p3[f3] === false ? true : typeof p3[f3] == "string" ? p3[f3] !== h5.value : false;
      }
      return t;
    });
  })(jt);
  var Jo = jt.exports;
  var Qo = /* @__PURE__ */ Fe(Jo);
  function it(n2, e) {
    return n2.map((t) => {
      const o3 = O(e) ? e(t.tool) : e;
      return V(o3) || (t.data = st(t.data, o3)), t;
    });
  }
  function q(n2, e = {}) {
    const t = {
      tags: e
    };
    return new Qo(t).clean(n2);
  }
  function st(n2, e) {
    return Array.isArray(n2) ? ei(n2, e) : R(n2) ? ti(n2, e) : Q(n2) ? oi(n2, e) : n2;
  }
  function ei(n2, e) {
    return n2.map((t) => st(t, e));
  }
  function ti(n2, e) {
    const t = {};
    for (const o3 in n2) {
      if (!Object.prototype.hasOwnProperty.call(n2, o3))
        continue;
      const i2 = n2[o3], s4 = ii(e[o3]) ? e[o3] : e;
      t[o3] = st(i2, s4);
    }
    return t;
  }
  function oi(n2, e) {
    return R(e) ? q(n2, e) : e === false ? q(n2, {}) : n2;
  }
  function ii(n2) {
    return R(n2) || yo(n2) || O(n2);
  }
  var si = class extends y {
    /**
     * Available methods
     *
     * @returns {SanitizerConfig}
     */
    get methods() {
      return {
        clean: (e, t) => this.clean(e, t)
      };
    }
    /**
     * Perform sanitizing of a string
     *
     * @param {string} taintString - what to sanitize
     * @param {SanitizerConfig} config - sanitizer config
     * @returns {string}
     */
    clean(e, t) {
      return q(e, t);
    }
  };
  var ni = class extends y {
    /**
     * Available methods
     *
     * @returns {Saver}
     */
    get methods() {
      return {
        save: () => this.save()
      };
    }
    /**
     * Return Editor's data
     *
     * @returns {OutputData}
     */
    save() {
      const e = "Editor's content can not be saved in read-only mode";
      return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
  };
  var ri = class extends y {
    constructor() {
      super(...arguments), this.selectionUtils = new b();
    }
    /**
     * Available methods
     *
     * @returns {SelectionAPIInterface}
     */
    get methods() {
      return {
        findParentTag: (e, t) => this.findParentTag(e, t),
        expandToTag: (e) => this.expandToTag(e),
        save: () => this.selectionUtils.save(),
        restore: () => this.selectionUtils.restore(),
        setFakeBackground: () => this.selectionUtils.setFakeBackground(),
        removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
      };
    }
    /**
     * Looks ahead from selection and find passed tag with class name
     *
     * @param {string} tagName - tag to find
     * @param {string} className - tag's class name
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t) {
      return this.selectionUtils.findParentTag(e, t);
    }
    /**
     * Expand selection to passed tag
     *
     * @param {HTMLElement} node - tag that should contain selection
     */
    expandToTag(e) {
      this.selectionUtils.expandToTag(e);
    }
  };
  var li = class extends y {
    /**
     * Available methods
     */
    get methods() {
      return {
        getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
      };
    }
  };
  var ai = class extends y {
    /**
     * Exported classes
     */
    get classes() {
      return {
        /**
         * Base Block styles
         */
        block: "cdx-block",
        /**
         * Inline Tools styles
         */
        inlineToolButton: "ce-inline-tool",
        inlineToolButtonActive: "ce-inline-tool--active",
        /**
         * UI elements
         */
        input: "cdx-input",
        loader: "cdx-loader",
        button: "cdx-button",
        /**
         * Settings styles
         */
        settingsButton: "cdx-settings-button",
        settingsButtonActive: "cdx-settings-button--active"
      };
    }
  };
  var ci = class extends y {
    /**
     * Available methods
     *
     * @returns {Toolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open(),
        toggleBlockSettings: (e) => this.toggleBlockSettings(e),
        toggleToolbox: (e) => this.toggleToolbox(e)
      };
    }
    /**
     * Open toolbar
     */
    open() {
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * Close toolbar and all included elements
     */
    close() {
      this.Editor.Toolbar.close();
    }
    /**
     * Toggles Block Setting of the current block
     *
     * @param {boolean} openingState —  opening state of Block Setting
     */
    toggleBlockSettings(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbar because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
    }
    /**
     * Open toolbox
     *
     * @param {boolean} openingState - Opening state of toolbox
     */
    toggleToolbox(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbox because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
  };
  var $t = { exports: {} };
  (function(n2, e) {
    (function(t, o3) {
      n2.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(s4) {
          if (o3[s4])
            return o3[s4].exports;
          var r2 = o3[s4] = { i: s4, l: false, exports: {} };
          return t[s4].call(r2.exports, r2, r2.exports, i2), r2.l = true, r2.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(s4, r2, l3) {
          i2.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: l3 });
        }, i2.r = function(s4) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
        }, i2.t = function(s4, r2) {
          if (1 & r2 && (s4 = i2(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
            return s4;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
            for (var a5 in s4)
              i2.d(l3, a5, function(c5) {
                return s4[c5];
              }.bind(null, a5));
          return l3;
        }, i2.n = function(s4) {
          var r2 = s4 && s4.__esModule ? function() {
            return s4.default;
          } : function() {
            return s4;
          };
          return i2.d(r2, "a", r2), r2;
        }, i2.o = function(s4, r2) {
          return Object.prototype.hasOwnProperty.call(s4, r2);
        }, i2.p = "", i2(i2.s = 0);
      }([function(t, o3, i2) {
        t.exports = i2(1);
      }, function(t, o3, i2) {
        i2.r(o3), i2.d(o3, "default", function() {
          return s4;
        });
        class s4 {
          constructor() {
            this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
              this.showed && this.hide(true);
            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
          }
          get CSS() {
            return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
          }
          show(l3, a5, c5) {
            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
            const u2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c5);
            if (u2.hidingDelay && (this.hidingDelay = u2.hidingDelay), this.nodes.content.innerHTML = "", typeof a5 == "string")
              this.nodes.content.appendChild(document.createTextNode(a5));
            else {
              if (!(a5 instanceof Node))
                throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof a5 + " given.");
              this.nodes.content.appendChild(a5);
            }
            switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u2.placement) {
              case "top":
                this.placeTop(l3, u2);
                break;
              case "left":
                this.placeLeft(l3, u2);
                break;
              case "right":
                this.placeRight(l3, u2);
                break;
              case "bottom":
              default:
                this.placeBottom(l3, u2);
            }
            u2 && u2.delay ? this.showingTimeout = setTimeout(() => {
              this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
            }, u2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
          }
          hide(l3 = false) {
            if (this.hidingDelay && !l3)
              return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                this.hide(true);
              }, this.hidingDelay));
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
          }
          onHover(l3, a5, c5) {
            l3.addEventListener("mouseenter", () => {
              this.show(l3, a5, c5);
            }), l3.addEventListener("mouseleave", () => {
              this.hide();
            });
          }
          destroy() {
            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
          }
          prepare() {
            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
          }
          loadStyles() {
            const l3 = "codex-tooltips-style";
            if (document.getElementById(l3))
              return;
            const a5 = i2(2), c5 = this.make("style", null, { textContent: a5.toString(), id: l3 });
            this.prepend(document.head, c5);
          }
          placeBottom(l3, a5) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h5 = c5.bottom + window.pageYOffset + this.offsetTop + a5.marginTop;
            this.applyPlacement("bottom", u2, h5);
          }
          placeTop(l3, a5) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h5 = c5.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
            this.applyPlacement("top", u2, h5);
          }
          placeLeft(l3, a5) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - a5.marginLeft, h5 = c5.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", u2, h5);
          }
          placeRight(l3, a5) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.right + this.offsetRight + a5.marginRight, h5 = c5.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", u2, h5);
          }
          applyPlacement(l3, a5, c5) {
            this.nodes.wrapper.classList.add(this.CSS.placement[l3]), this.nodes.wrapper.style.left = a5 + "px", this.nodes.wrapper.style.top = c5 + "px";
          }
          make(l3, a5 = null, c5 = {}) {
            const u2 = document.createElement(l3);
            Array.isArray(a5) ? u2.classList.add(...a5) : a5 && u2.classList.add(a5);
            for (const h5 in c5)
              c5.hasOwnProperty(h5) && (u2[h5] = c5[h5]);
            return u2;
          }
          append(l3, a5) {
            Array.isArray(a5) ? a5.forEach((c5) => l3.appendChild(c5)) : l3.appendChild(a5);
          }
          prepend(l3, a5) {
            Array.isArray(a5) ? (a5 = a5.reverse()).forEach((c5) => l3.prepend(c5)) : l3.prepend(a5);
          }
        }
      }, function(t, o3) {
        t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
      }]).default;
    });
  })($t);
  var di = $t.exports;
  var hi = /* @__PURE__ */ Fe(di);
  var U = null;
  function nt() {
    U || (U = new hi());
  }
  function ui(n2, e, t) {
    nt(), U == null || U.show(n2, e, t);
  }
  function Ne(n2 = false) {
    nt(), U == null || U.hide(n2);
  }
  function Pe(n2, e, t) {
    nt(), U == null || U.onHover(n2, e, t);
  }
  function pi() {
    U == null || U.destroy(), U = null;
  }
  var fi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      });
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e, t, o3) => this.show(e, t, o3),
        hide: () => this.hide(),
        onHover: (e, t, o3) => this.onHover(e, t, o3)
      };
    }
    /**
     * Method show tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    show(e, t, o3) {
      ui(e, t, o3);
    }
    /**
     * Method hides tooltip on HTML page
     */
    hide() {
      Ne();
    }
    /**
     * Decorator for showing Tooltip by mouseenter/mouseleave
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    onHover(e, t, o3) {
      Pe(e, t, o3);
    }
  };
  var gi = class extends y {
    /**
     * Available methods / getters
     */
    get methods() {
      return {
        nodes: this.editorNodes
        /**
         * There can be added some UI methods, like toggleThinMode() etc
         */
      };
    }
    /**
     * Exported classes
     */
    get editorNodes() {
      return {
        /**
         * Top-level editor instance wrapper
         */
        wrapper: this.Editor.UI.nodes.wrapper,
        /**
         * Element that holds all the Blocks
         */
        redactor: this.Editor.UI.nodes.redactor
      };
    }
  };
  function Yt(n2, e) {
    const t = {};
    return Object.entries(n2).forEach(([o3, i2]) => {
      if (R(i2)) {
        const s4 = e ? `${e}.${o3}` : o3;
        Object.values(i2).every((l3) => Q(l3)) ? t[o3] = s4 : t[o3] = Yt(i2, s4);
        return;
      }
      t[o3] = i2;
    }), t;
  }
  var K = Yt(_t);
  function mi(n2, e) {
    const t = {};
    return Object.keys(n2).forEach((o3) => {
      const i2 = e[o3];
      i2 !== void 0 ? t[i2] = n2[o3] : t[o3] = n2[o3];
    }), t;
  }
  var Wt = class ve {
    /**
     * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
     * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
     */
    constructor(e, t) {
      this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
    }
    /**
     * Returns Focused button Node
     *
     * @returns {HTMLElement}
     */
    get currentItem() {
      return this.cursor === -1 ? null : this.items[this.cursor];
    }
    /**
     * Sets cursor to specified position
     *
     * @param cursorPosition - new cursor position
     */
    setCursor(e) {
      e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
     * Sets items. Can be used when iterable items changed dynamically
     *
     * @param {HTMLElement[]} nodeList - nodes to iterate
     */
    setItems(e) {
      this.items = e;
    }
    /**
     * Sets cursor next to the current
     */
    next() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.RIGHT);
    }
    /**
     * Sets cursor before current
     */
    previous() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.LEFT);
    }
    /**
     * Sets cursor to the default position and removes CSS-class from previously focused item
     */
    dropCursor() {
      this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
    }
    /**
     * Leafs nodes inside the target list from active element
     *
     * @param {string} direction - leaf direction. Can be 'left' or 'right'
     * @returns {number} index of focused node
     */
    leafNodesAndReturnIndex(e) {
      if (this.items.length === 0)
        return this.cursor;
      let t = this.cursor;
      return t === -1 ? t = e === ve.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === ve.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && Oe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
    }
  };
  Wt.directions = {
    RIGHT: "right",
    LEFT: "left"
  };
  var me = Wt;
  var le = class _le {
    /**
     * @param options - different constructing settings
     */
    constructor(e) {
      this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t) => {
        if (this.isEventReadyForHandling(t))
          switch (_le.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
            case w.TAB:
              this.handleTabPress(t);
              break;
            case w.LEFT:
            case w.UP:
              this.flipLeft();
              break;
            case w.RIGHT:
            case w.DOWN:
              this.flipRight();
              break;
            case w.ENTER:
              this.handleEnterPress(t);
              break;
          }
      }, this.iterator = new me(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || _le.usedKeys;
    }
    /**
     * True if flipper is currently activated
     */
    get isActivated() {
      return this.activated;
    }
    /**
     * Array of keys (codes) that is handled by Flipper
     * Used to:
     *  - preventDefault only for this keys, not all keydowns (@see constructor)
     *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
     */
    static get usedKeys() {
      return [
        w.TAB,
        w.LEFT,
        w.RIGHT,
        w.ENTER,
        w.UP,
        w.DOWN
      ];
    }
    /**
     * Active tab/arrows handling by flipper
     *
     * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
     * @param cursorPosition - index of the item that should be focused once flipper is activated
     */
    activate(e, t) {
      this.activated = true, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, true);
    }
    /**
     * Disable tab/arrows handling by flipper
     */
    deactivate() {
      this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
    }
    /**
     * Focus first item
     */
    focusFirst() {
      this.dropCursor(), this.flipRight();
    }
    /**
     * Focuses previous flipper iterator item
     */
    flipLeft() {
      this.iterator.previous(), this.flipCallback();
    }
    /**
     * Focuses next flipper iterator item
     */
    flipRight() {
      this.iterator.next(), this.flipCallback();
    }
    /**
     * Return true if some button is focused
     */
    hasFocus() {
      return !!this.iterator.currentItem;
    }
    /**
     * Registeres function that should be executed on each navigation action
     *
     * @param cb - function to execute
     */
    onFlip(e) {
      this.flipCallbacks.push(e);
    }
    /**
     * Unregisteres function that is executed on each navigation action
     *
     * @param cb - function to stop executing
     */
    removeOnFlip(e) {
      this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
    }
    /**
     * Drops flipper's iterator cursor
     *
     * @see DomIterator#dropCursor
     */
    dropCursor() {
      this.iterator.dropCursor();
    }
    /**
     * This function is fired before handling flipper keycodes
     * The result of this function defines if it is need to be handled or not
     *
     * @param {KeyboardEvent} event - keydown keyboard event
     * @returns {boolean}
     */
    isEventReadyForHandling(e) {
      return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    /**
     * When flipper is activated tab press will leaf the items
     *
     * @param {KeyboardEvent} event - tab keydown event
     */
    handleTabPress(e) {
      switch (e.shiftKey ? me.directions.LEFT : me.directions.RIGHT) {
        case me.directions.RIGHT:
          this.flipRight();
          break;
        case me.directions.LEFT:
          this.flipLeft();
          break;
      }
    }
    /**
     * Enter press will click current item if flipper is activated
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    handleEnterPress(e) {
      this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
     * Fired after flipping in any direction
     */
    flipCallback() {
      this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
    }
  };
  var bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>';
  var ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>';
  var vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>';
  var wi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>';
  var xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>';
  var yi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var Ei = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>';
  var Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>';
  var yt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';
  var Ti = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>';
  var Ci = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>';
  var Si = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
  var Ai = "__";
  var Oi = "--";
  function te(n2) {
    return (e, t) => [[n2, e].filter((i2) => !!i2).join(Ai), t].filter((i2) => !!i2).join(Oi);
  }
  var be = te("ce-hint");
  var ke = {
    root: be(),
    alignedStart: be(null, "align-left"),
    alignedCenter: be(null, "align-center"),
    title: be("title"),
    description: be("description")
  };
  var Li = class {
    /**
     * Constructs the hint content instance
     *
     * @param params - hint content parameters
     */
    constructor(e) {
      this.nodes = {
        root: d.make("div", [ke.root, e.alignment === "center" ? ke.alignedCenter : ke.alignedStart]),
        title: d.make("div", ke.title, { textContent: e.title })
      }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = d.make("div", ke.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
    }
    /**
     * Returns the root element of the hint content
     */
    getElement() {
      return this.nodes.root;
    }
  };
  var rt = class {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      this.params = e;
    }
    /**
     * Item name if exists
     */
    get name() {
      if (this.params !== void 0 && "name" in this.params)
        return this.params.name;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      Ne();
    }
    /**
     * Called when children popover is opened (if exists)
     */
    onChildrenOpen() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
    }
    /**
     * Called when children popover is closed (if exists)
     */
    onChildrenClose() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      var e, t;
      this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
    }
    /**
     * Adds hint to the item element if hint data is provided
     *
     * @param itemElement - popover item root element to add hint to
     * @param hintData - hint data
     */
    addHint(e, t) {
      const o3 = new Li(t);
      Pe(e, o3.getElement(), {
        placement: t.position,
        hidingDelay: 100
      });
    }
    /**
     * Returns item children that are represented as popover items
     */
    get children() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
    }
    /**
     * Returns true if item has any type of children
     */
    get hasChildren() {
      return this.children.length > 0;
    }
    /**
     * Returns true if item children should be open instantly after popover is opened and not on item click/hover
     */
    get isChildrenOpen() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === true;
    }
    /**
     * True if item children items should be navigatable via keyboard
     */
    get isChildrenFlippable() {
      var e;
      return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === false);
    }
    /**
     * Returns true if item has children that should be searchable
     */
    get isChildrenSearchable() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === true;
    }
    /**
     * True if popover should close once item is activated
     */
    get closeOnActivate() {
      return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
    }
    /**
     * True if item is active
     */
    get isActive() {
      return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
    }
  };
  var W = te("ce-popover-item");
  var L = {
    container: W(),
    active: W(null, "active"),
    disabled: W(null, "disabled"),
    focused: W(null, "focused"),
    hidden: W(null, "hidden"),
    confirmationState: W(null, "confirmation"),
    noHover: W(null, "no-hover"),
    noFocus: W(null, "no-focus"),
    title: W("title"),
    secondaryTitle: W("secondary-title"),
    icon: W("icon"),
    iconTool: W("icon", "tool"),
    iconChevronRight: W("icon", "chevron-right"),
    wobbleAnimation: te("wobble")()
  };
  var se = class extends rt {
    /**
     * Constructs popover item instance
     *
     * @param params - popover item construction params
     * @param renderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e), this.params = e, this.nodes = {
        root: null,
        icon: null
      }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
        var o3;
        (o3 = this.nodes.root) == null || o3.classList.remove(L.noFocus);
      }, this.removeSpecialHoverBehavior = () => {
        var o3;
        (o3 = this.nodes.root) == null || o3.classList.remove(L.noHover);
      }, this.onErrorAnimationEnd = () => {
        var o3, i2;
        (o3 = this.nodes.icon) == null || o3.classList.remove(L.wobbleAnimation), (i2 = this.nodes.icon) == null || i2.removeEventListener("animationend", this.onErrorAnimationEnd);
      }, this.nodes.root = this.make(e, t);
    }
    /**
     * True if item is disabled and hence not clickable
     */
    get isDisabled() {
      return this.params.isDisabled === true;
    }
    /**
     * Exposes popover item toggle parameter
     */
    get toggle() {
      return this.params.toggle;
    }
    /**
     * Item title
     */
    get title() {
      return this.params.title;
    }
    /**
     * True if confirmation state is enabled for popover item
     */
    get isConfirmationStateEnabled() {
      return this.confirmationState !== null;
    }
    /**
     * True if item is focused in keyboard navigation process
     */
    get isFocused() {
      return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
        this.activateOrEnableConfirmationMode(this.confirmationState);
        return;
      }
      this.activateOrEnableConfirmationMode(this.params);
    }
    /**
     * Toggles item active state
     *
     * @param isActive - true if item should strictly should become active
     */
    toggleActive(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
    }
    /**
     * Resets popover item to its original state
     */
    reset() {
      this.isConfirmationStateEnabled && this.disableConfirmationMode();
    }
    /**
     * Method called once item becomes focused during keyboard navigation
     */
    onFocus() {
      this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Constructs HTML element corresponding to popover item params
     *
     * @param params - item construction params
     * @param renderParams - popover item render params
     */
    make(e, t) {
      var s4, r2;
      const o3 = (t == null ? void 0 : t.wrapperTag) || "div", i2 = d.make(o3, L.container, {
        type: o3 === "button" ? "button" : void 0
      });
      return e.name && (i2.dataset.itemName = e.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
        innerHTML: e.icon || Ei
      }), i2.appendChild(this.nodes.icon), e.title !== void 0 && i2.appendChild(d.make("div", L.title, {
        innerHTML: e.title || ""
      })), e.secondaryLabel && i2.appendChild(d.make("div", L.secondaryTitle, {
        textContent: e.secondaryLabel
      })), this.hasChildren && i2.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
        innerHTML: wi
      })), this.isActive && i2.classList.add(L.active), e.isDisabled && i2.classList.add(L.disabled), e.hint !== void 0 && ((s4 = t == null ? void 0 : t.hint) == null ? void 0 : s4.enabled) !== false && this.addHint(i2, {
        ...e.hint,
        position: ((r2 = t == null ? void 0 : t.hint) == null ? void 0 : r2.position) || "right"
      }), i2;
    }
    /**
     * Activates confirmation mode for the item.
     *
     * @param newState - new popover item params that should be applied
     */
    enableConfirmationMode(e) {
      if (this.nodes.root === null)
        return;
      const t = {
        ...this.params,
        ...e,
        confirmation: "confirmation" in e ? e.confirmation : void 0
      }, o3 = this.make(t);
      this.nodes.root.innerHTML = o3.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
     * Returns item to its original state
     */
    disableConfirmationMode() {
      if (this.nodes.root === null)
        return;
      const e = this.make(this.params);
      this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Enables special focus and hover behavior for item in confirmation state.
     * This is needed to prevent item from being highlighted as hovered/focused just after click.
     */
    enableSpecialHoverAndFocusBehavior() {
      var e, t, o3;
      (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o3 = this.nodes.root) == null || o3.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
    }
    /**
     * Disables special focus and hover behavior
     */
    disableSpecialHoverAndFocusBehavior() {
      var e;
      this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
     * Executes item's onActivate callback if the item has no confirmation configured
     *
     * @param item - item to activate or bring to confirmation mode
     */
    activateOrEnableConfirmationMode(e) {
      var t;
      if (!("confirmation" in e) || e.confirmation === void 0)
        try {
          (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
        } catch {
          this.animateError();
        }
      else
        this.enableConfirmationMode(e.confirmation);
    }
    /**
     * Animates item which symbolizes that error occured while executing 'onActivate()' callback
     */
    animateError() {
      var e, t, o3;
      (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o3 = this.nodes.icon) == null || o3.addEventListener("animationend", this.onErrorAnimationEnd));
    }
  };
  var Ue = te("ce-popover-item-separator");
  var je = {
    container: Ue(),
    line: Ue("line"),
    hidden: Ue(null, "hidden")
  };
  var Xt = class extends rt {
    /**
     * Constructs the instance
     */
    constructor() {
      super(), this.nodes = {
        root: d.make("div", je.container),
        line: d.make("div", je.line)
      }, this.nodes.root.appendChild(this.nodes.line);
    }
    /**
     * Returns popover separator root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(je.hidden, e);
    }
  };
  var Z = /* @__PURE__ */ ((n2) => (n2.Closed = "closed", n2.ClosedOnActivate = "closed-on-activate", n2))(Z || {});
  var H = te("ce-popover");
  var N = {
    popover: H(),
    popoverContainer: H("container"),
    popoverOpenTop: H(null, "open-top"),
    popoverOpenLeft: H(null, "open-left"),
    popoverOpened: H(null, "opened"),
    search: H("search"),
    nothingFoundMessage: H("nothing-found-message"),
    nothingFoundMessageDisplayed: H("nothing-found-message", "displayed"),
    items: H("items"),
    overlay: H("overlay"),
    overlayHidden: H("overlay", "hidden"),
    popoverNested: H(null, "nested"),
    getPopoverNestedClass: (n2) => H(null, `nested-level-${n2.toString()}`),
    popoverInline: H(null, "inline"),
    popoverHeader: H("header")
  };
  var de = /* @__PURE__ */ ((n2) => (n2.NestingLevel = "--nesting-level", n2.PopoverHeight = "--popover-height", n2.InlinePopoverWidth = "--inline-popover-width", n2.TriggerItemLeft = "--trigger-item-left", n2.TriggerItemTop = "--trigger-item-top", n2))(de || {});
  var Et = te("ce-popover-item-html");
  var Bt = {
    root: Et(),
    hidden: Et(null, "hidden")
  };
  var Ee = class extends rt {
    /**
     * Constructs the instance
     *
     * @param params – instance parameters
     * @param renderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      var o3, i2;
      super(e), this.nodes = {
        root: d.make("div", Bt.root)
      }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o3 = t == null ? void 0 : t.hint) == null ? void 0 : o3.enabled) !== false && this.addHint(this.nodes.root, {
        ...e.hint,
        position: ((i2 = t == null ? void 0 : t.hint) == null ? void 0 : i2.position) || "right"
      });
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(Bt.hidden, e);
    }
    /**
     * Returns list of buttons and inputs inside custom content
     */
    getControls() {
      const e = this.nodes.root.querySelectorAll(
        `button, ${d.allInputsSelector}`
      );
      return Array.from(e);
    }
  };
  var Vt = class extends Te {
    /**
     * Constructs the instance
     *
     * @param params - popover construction params
     * @param itemsRenderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t = {}) {
      super(), this.params = e, this.itemsRenderParams = t, this.listeners = new Ce(), this.messages = {
        nothingFound: "Nothing found",
        search: "Search"
      }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
        ...this.messages,
        ...e.messages
      }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [N.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [N.nothingFoundMessage], {
        textContent: this.messages.nothingFound
      }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.items]), this.items.forEach((o3) => {
        const i2 = o3.getElement();
        i2 !== null && this.nodes.items.appendChild(i2);
      }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o3) => this.handleClick(o3)), this.nodes.popover = d.make("div", [
        N.popover,
        this.params.class
      ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
    }
    /**
     * List of default popover items that are searchable and may have confirmation state
     */
    get itemsDefault() {
      return this.items.filter((e) => e instanceof se);
    }
    /**
     * Returns HTML element corresponding to the popover
     */
    getElement() {
      return this.nodes.popover;
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.popover.classList.add(N.popoverOpened), this.search !== void 0 && this.search.focus();
    }
    /**
     * Closes popover
     */
    hide() {
      this.nodes.popover.classList.remove(N.popoverOpened), this.nodes.popover.classList.remove(N.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(Z.Closed);
    }
    /**
     * Clears memory
     */
    destroy() {
      var e;
      this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
    }
    /**
     * Looks for the item by name and imitates click on it
     *
     * @param name - name of the item to activate
     */
    activateItemByName(e) {
      const t = this.items.find((o3) => o3.name === e);
      this.handleItemClick(t);
    }
    /**
     * Factory method for creating popover items
     *
     * @param items - list of items params
     */
    buildItems(e) {
      return e.map((t) => {
        switch (t.type) {
          case A.Separator:
            return new Xt();
          case A.Html:
            return new Ee(t, this.itemsRenderParams[A.Html]);
          default:
            return new se(t, this.itemsRenderParams[A.Default]);
        }
      });
    }
    /**
     * Retrieves popover item that is the target of the specified event
     *
     * @param event - event to retrieve popover item from
     */
    getTargetItem(e) {
      return this.items.filter((t) => t instanceof se || t instanceof Ee).find((t) => {
        const o3 = t.getElement();
        return o3 === null ? false : e.composedPath().includes(o3);
      });
    }
    /**
     * Handles popover item click
     *
     * @param item - item to handle click of
     */
    handleItemClick(e) {
      if (!("isDisabled" in e && e.isDisabled)) {
        if (e.hasChildren) {
          this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
          return;
        }
        this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(Z.ClosedOnActivate));
      }
    }
    /**
     * Handles clicks inside popover
     *
     * @param event - item to handle click of
     */
    handleClick(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.handleItemClick(t);
    }
    /**
     * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
     *
     * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
     * (All the other items with the same key get inactive, and the item gets active)
     *
     * @param clickedItem - popover item that was clicked
     */
    toggleItemActivenessIfNeeded(e) {
      if (e instanceof se && (e.toggle === true && e.toggleActive(), typeof e.toggle == "string")) {
        const t = this.itemsDefault.filter((o3) => o3.toggle === e.toggle);
        if (t.length === 1) {
          e.toggleActive();
          return;
        }
        t.forEach((o3) => {
          o3.toggleActive(o3 === e);
        });
      }
    }
  };
  var De = /* @__PURE__ */ ((n2) => (n2.Search = "search", n2))(De || {});
  var $e = te("cdx-search-field");
  var Ye = {
    wrapper: $e(),
    icon: $e("icon"),
    input: $e("input")
  };
  var _i = class extends Te {
    /**
     * @param options - available config
     * @param options.items - searchable items list
     * @param options.placeholder - input placeholder
     */
    constructor({ items: e, placeholder: t }) {
      super(), this.listeners = new Ce(), this.items = e, this.wrapper = d.make("div", Ye.wrapper);
      const o3 = d.make("div", Ye.icon, {
        innerHTML: Si
      });
      this.input = d.make("input", Ye.input, {
        placeholder: t,
        /**
         * Used to prevent focusing on the input by Tab key
         * (Popover in the Toolbar lays below the blocks,
         * so Tab in the last block will focus this hidden input if this property is not set)
         */
        tabIndex: -1
      }), this.wrapper.appendChild(o3), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
        this.searchQuery = this.input.value, this.emit(De.Search, {
          query: this.searchQuery,
          items: this.foundItems
        });
      });
    }
    /**
     * Returns search field element
     */
    getElement() {
      return this.wrapper;
    }
    /**
     * Sets focus to the input
     */
    focus() {
      this.input.focus();
    }
    /**
     * Clears search query and results
     */
    clear() {
      this.input.value = "", this.searchQuery = "", this.emit(De.Search, {
        query: "",
        items: this.foundItems
      });
    }
    /**
     * Clears memory
     */
    destroy() {
      this.listeners.removeAll();
    }
    /**
     * Returns list of found items for the current search query
     */
    get foundItems() {
      return this.items.filter((e) => this.checkItem(e));
    }
    /**
     * Contains logic for checking whether passed item conforms the search query
     *
     * @param item - item to be checked
     */
    checkItem(e) {
      var i2, s4;
      const t = ((i2 = e.title) == null ? void 0 : i2.toLowerCase()) || "", o3 = (s4 = this.searchQuery) == null ? void 0 : s4.toLowerCase();
      return o3 !== void 0 ? t.includes(o3) : false;
    }
  };
  var Ni = Object.defineProperty;
  var Pi = Object.getOwnPropertyDescriptor;
  var Di = (n2, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? Pi(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
      (r2 = n2[s4]) && (i2 = (o3 ? r2(e, t, i2) : r2(i2)) || i2);
    return o3 && i2 && Ni(e, t, i2), i2;
  };
  var qt = class Zt extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     * @param itemsRenderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
        var o3;
        super.hide(), this.destroyNestedPopoverIfExists(), (o3 = this.flipper) == null || o3.deactivate(), this.previouslyHoveredItem = null;
      }, this.onFlip = () => {
        const o3 = this.itemsDefault.find((i2) => i2.isFocused);
        o3 == null || o3.onFocus();
      }, this.onSearch = (o3) => {
        var l3;
        const i2 = o3.query === "", s4 = o3.items.length === 0;
        this.items.forEach((a5) => {
          let c5 = false;
          a5 instanceof se ? c5 = !o3.items.includes(a5) : (a5 instanceof Xt || a5 instanceof Ee) && (c5 = s4 || !i2), a5.toggleHidden(c5);
        }), this.toggleNothingFoundMessage(s4);
        const r2 = o3.query === "" ? this.flippableElements : o3.items.map((a5) => a5.getElement());
        (l3 = this.flipper) != null && l3.isActivated && (this.flipper.deactivate(), this.flipper.activate(r2));
      }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(N.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o3) => this.handleHover(o3)), e.searchable && this.addSearch(), e.flippable !== false && (this.flipper = new le({
        items: this.flippableElements,
        focusedItemClass: L.focused,
        allowedKeys: [
          w.TAB,
          w.UP,
          w.DOWN,
          w.ENTER
        ]
      }), this.flipper.onFlip(this.onFlip));
    }
    /**
     * Returns true if some item inside popover is focused
     */
    hasFocus() {
      return this.flipper === void 0 ? false : this.flipper.hasFocus();
    }
    /**
     * Scroll position inside items container of the popover
     */
    get scrollTop() {
      return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
    }
    /**
     * Returns visible element offset top
     */
    get offsetTop() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
    }
    /**
     * Open popover
     */
    show() {
      var e;
      this.nodes.popover.style.setProperty(de.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(N.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(N.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
    }
    /**
     * Clears memory
     */
    destroy() {
      this.hide(), super.destroy();
    }
    /**
     * Handles displaying nested items for the item.
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
    }
    /**
     * Handles hover events inside popover items container
     *
     * @param event - hover event data
     */
    handleHover(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used for correct positioning of the nested popover
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o3 = t.getElement(), i2 = (o3 ? o3.offsetTop : 0) - this.scrollTop, s4 = this.offsetTop + i2;
      e.style.setProperty(de.TriggerItemTop, s4 + "px");
    }
    /**
     * Destroys existing nested popover
     */
    destroyNestedPopoverIfExists() {
      var e, t;
      this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Z.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      var o3;
      this.nestedPopover = new Zt({
        searchable: e.isChildrenSearchable,
        items: e.children,
        nestingLevel: this.nestingLevel + 1,
        flippable: e.isChildrenFlippable,
        messages: this.messages
      }), e.onChildrenOpen(), this.nestedPopover.on(Z.ClosedOnActivate, this.hide);
      const t = this.nestedPopover.getElement();
      return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(de.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o3 = this.flipper) == null || o3.deactivate(), this.nestedPopover;
    }
    /**
     * Checks if popover should be opened bottom.
     * It should happen when there is enough space below or not enough space above
     */
    get shouldOpenBottom() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o3 = this.size.height, i2 = e.top + o3, s4 = e.top - o3, r2 = Math.min(window.innerHeight, t.bottom);
      return s4 < t.top || i2 <= r2;
    }
    /**
     * Checks if popover should be opened left.
     * It should happen when there is enough space in the right or not enough space in the left
     */
    get shouldOpenRight() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o3 = this.size.width, i2 = e.right + o3, s4 = e.left - o3, r2 = Math.min(window.innerWidth, t.right);
      return s4 < t.left || i2 <= r2;
    }
    get size() {
      var i2;
      const e = {
        height: 0,
        width: 0
      };
      if (this.nodes.popover === null)
        return e;
      const t = this.nodes.popover.cloneNode(true);
      t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(N.popoverOpened), (i2 = t.querySelector("." + N.popoverNested)) == null || i2.remove(), document.body.appendChild(t);
      const o3 = t.querySelector("." + N.popoverContainer);
      return e.height = o3.offsetHeight, e.width = o3.offsetWidth, t.remove(), e;
    }
    /**
     * Returns list of elements available for keyboard navigation.
     */
    get flippableElements() {
      return this.items.map((t) => {
        if (t instanceof se)
          return t.getElement();
        if (t instanceof Ee)
          return t.getControls();
      }).flat().filter((t) => t != null);
    }
    /**
     * Adds search to the popover
     */
    addSearch() {
      this.search = new _i({
        items: this.itemsDefault,
        placeholder: this.messages.search
      }), this.search.on(De.Search, this.onSearch);
      const e = this.search.getElement();
      e.classList.add(N.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
    }
    /**
     * Toggles nothing found message visibility
     *
     * @param isDisplayed - true if the message should be displayed
     */
    toggleNothingFoundMessage(e) {
      this.nodes.nothingFoundMessage.classList.toggle(N.nothingFoundMessageDisplayed, e);
    }
  };
  Di([
    ue
  ], qt.prototype, "size", 1);
  var lt = qt;
  var Ri = class extends lt {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      const t = !pe();
      super(
        {
          ...e,
          class: N.popoverInline
        },
        {
          [A.Default]: {
            /**
             * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
             *
             * @todo figure out better way to solve the issue
             */
            wrapperTag: "button",
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          },
          [A.Html]: {
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          }
        }
      ), this.items.forEach((o3) => {
        !(o3 instanceof se) && !(o3 instanceof Ee) || o3.hasChildren && o3.isChildrenOpen && this.showNestedItems(o3);
      });
    }
    /**
     * Returns visible element offset top
     */
    get offsetLeft() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
    }
    /**
     * Open popover
     */
    show() {
      this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
        de.InlinePopoverWidth,
        this.size.width + "px"
      ), super.show();
    }
    /**
     * Disable hover event handling.
     * Overrides parent's class behavior
     */
    handleHover() {
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used to position nested popover right below clicked item
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o3 = t.getElement(), i2 = o3 ? o3.offsetLeft : 0, s4 = this.offsetLeft + i2;
      e.style.setProperty(
        de.TriggerItemLeft,
        s4 + "px"
      );
    }
    /**
     * Handles displaying nested items for the item.
     * Overriding in order to add toggling behaviour
     *
     * @param item – item to toggle nested popover for
     */
    showNestedItems(e) {
      if (this.nestedPopoverTriggerItem === e) {
        this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
        return;
      }
      super.showNestedItems(e);
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      const t = super.showNestedPopoverForItem(e);
      return t.getElement().classList.add(N.getPopoverNestedClass(t.nestingLevel)), t;
    }
    /**
     * Overrides default item click handling.
     * Helps to close nested popover once other item is clicked.
     *
     * @param item - clicked item
     */
    handleItemClick(e) {
      var t;
      e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
    }
  };
  var Gt = class we {
    constructor() {
      this.scrollPosition = null;
    }
    /**
     * Locks body element scroll
     */
    lock() {
      Ge ? this.lockHard() : document.body.classList.add(we.CSS.scrollLocked);
    }
    /**
     * Unlocks body element scroll
     */
    unlock() {
      Ge ? this.unlockHard() : document.body.classList.remove(we.CSS.scrollLocked);
    }
    /**
     * Locks scroll in a hard way (via setting fixed position to body element)
     */
    lockHard() {
      this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
        "--window-scroll-offset",
        `${this.scrollPosition}px`
      ), document.body.classList.add(we.CSS.scrollLockedHard);
    }
    /**
     * Unlocks hard scroll lock
     */
    unlockHard() {
      document.body.classList.remove(we.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
  };
  Gt.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
  };
  var Fi = Gt;
  var We = te("ce-popover-header");
  var Ke = {
    root: We(),
    text: We("text"),
    backButton: We("back-button")
  };
  var Hi = class {
    /**
     * Constructs the instance
     *
     * @param params - popover header params
     */
    constructor({ text: e, onBackButtonClick: t }) {
      this.listeners = new Ce(), this.text = e, this.onBackButtonClick = t, this.nodes = {
        root: d.make("div", [Ke.root]),
        backButton: d.make("button", [Ke.backButton]),
        text: d.make("div", [Ke.text])
      }, this.nodes.backButton.innerHTML = vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
    }
    /**
     * Returns popover header root html element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      this.nodes.root.remove(), this.listeners.destroy();
    }
  };
  var zi = class {
    constructor() {
      this.history = [];
    }
    /**
     * Push new popover state
     *
     * @param state - new state
     */
    push(e) {
      this.history.push(e);
    }
    /**
     * Pop last popover state
     */
    pop() {
      return this.history.pop();
    }
    /**
     * Title retrieved from the current state
     */
    get currentTitle() {
      return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
    }
    /**
     * Items list retrieved from the current state
     */
    get currentItems() {
      return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
    }
    /**
     * Returns history to initial popover state
     */
    reset() {
      for (; this.history.length > 1; )
        this.pop();
    }
  };
  var Jt = class extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     */
    constructor(e) {
      super(e, {
        [A.Default]: {
          hint: {
            enabled: false
          }
        },
        [A.Html]: {
          hint: {
            enabled: false
          }
        }
      }), this.scrollLocker = new Fi(), this.history = new zi(), this.isHidden = true, this.nodes.overlay = d.make("div", [N.overlay, N.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
        this.hide();
      }), this.history.push({ items: e.items });
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.overlay.classList.remove(N.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
    }
    /**
     * Closes popover
     */
    hide() {
      this.isHidden || (super.hide(), this.nodes.overlay.classList.add(N.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
    }
    /**
     * Clears memory
     */
    destroy() {
      super.destroy(), this.scrollLocker.unlock();
    }
    /**
     * Handles displaying nested items for the item
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.updateItemsAndHeader(e.children, e.title), this.history.push({
        title: e.title,
        items: e.children
      });
    }
    /**
     * Removes rendered popover items and header and displays new ones
     *
     * @param items - new popover items
     * @param title - new popover header text
     */
    updateItemsAndHeader(e, t) {
      if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
        this.header = new Hi({
          text: t,
          onBackButtonClick: () => {
            this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
          }
        });
        const o3 = this.header.getElement();
        o3 !== null && this.nodes.popoverContainer.insertBefore(o3, this.nodes.popoverContainer.firstChild);
      }
      this.items.forEach((o3) => {
        var i2;
        return (i2 = o3.getElement()) == null ? void 0 : i2.remove();
      }), this.items = this.buildItems(e), this.items.forEach((o3) => {
        var s4;
        const i2 = o3.getElement();
        i2 !== null && ((s4 = this.nodes.items) == null || s4.appendChild(i2));
      });
    }
  };
  var Ui = class extends y {
    constructor() {
      super(...arguments), this.opened = false, this.selection = new b(), this.popover = null, this.close = () => {
        this.opened && (this.opened = false, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
      }, this.onPopoverClose = () => {
        this.close();
      };
    }
    /**
     * Module Events
     */
    get events() {
      return {
        opened: "block-settings-opened",
        closed: "block-settings-closed"
      };
    }
    /**
     * Block Settings CSS
     */
    get CSS() {
      return {
        settings: "ce-settings"
      };
    }
    /**
     * Getter for inner popover's flipper instance
     *
     * @todo remove once BlockSettings becomes standalone non-module class
     */
    get flipper() {
      var e;
      if (this.popover !== null)
        return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
    }
    /**
     * Panel with block settings with 2 sections:
     *  - Tool's Settings
     *  - Default Settings [Move, Remove, etc]
     */
    make() {
      this.nodes.wrapper = d.make("div", [this.CSS.settings]), this.eventsDispatcher.on(ye, this.close);
    }
    /**
     * Destroys module
     */
    destroy() {
      this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(ye, this.close);
    }
    /**
     * Open Block Settings pane
     *
     * @param targetBlock - near which Block we should open BlockSettings
     */
    async open(e = this.Editor.BlockManager.currentBlock) {
      var s4;
      this.opened = true, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
      const { toolTunes: t, commonTunes: o3 } = e.getTunes();
      this.eventsDispatcher.emit(this.events.opened);
      const i2 = pe() ? Jt : lt;
      this.popover = new i2({
        searchable: true,
        items: await this.getTunesItems(e, o3, t),
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.popover.on(Z.Closed, this.onPopoverClose), (s4 = this.nodes.wrapper) == null || s4.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.wrapper;
    }
    /**
     * Returns list of items to be displayed in block tunes menu.
     * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
     *
     * @param currentBlock –  block we are about to open block tunes for
     * @param commonTunes – common tunes
     * @param toolTunes - tool specific tunes
     */
    async getTunesItems(e, t, o3) {
      const i2 = [];
      o3 !== void 0 && o3.length > 0 && (i2.push(...o3), i2.push({
        type: A.Separator
      }));
      const s4 = Array.from(this.Editor.Tools.blockTools.values()), l3 = (await zt(e, s4)).reduce((a5, c5) => (c5.toolbox.forEach((u2) => {
        a5.push({
          icon: u2.icon,
          title: z.t(K.toolNames, u2.title),
          name: c5.name,
          closeOnActivate: true,
          onActivate: async () => {
            const { BlockManager: h5, Caret: p3, Toolbar: g5 } = this.Editor, f3 = await h5.convert(e, c5.name, u2.data);
            g5.close(), p3.setToBlock(f3, p3.positions.END);
          }
        });
      }), a5), []);
      return l3.length > 0 && (i2.push({
        icon: Kt,
        name: "convert-to",
        title: z.ui(K.ui.popover, "Convert to"),
        children: {
          searchable: true,
          items: l3
        }
      }), i2.push({
        type: A.Separator
      })), i2.push(...t), i2.map((a5) => this.resolveTuneAliases(a5));
    }
    /**
     * Resolves aliases in tunes menu items
     *
     * @param item - item with resolved aliases
     */
    resolveTuneAliases(e) {
      if (e.type === A.Separator || e.type === A.Html)
        return e;
      const t = mi(e, { label: "title" });
      return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
    }
  };
  var Qt = { exports: {} };
  (function(n2, e) {
    (function(t, o3) {
      n2.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(s4) {
          if (o3[s4])
            return o3[s4].exports;
          var r2 = o3[s4] = { i: s4, l: false, exports: {} };
          return t[s4].call(r2.exports, r2, r2.exports, i2), r2.l = true, r2.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(s4, r2, l3) {
          i2.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: l3 });
        }, i2.r = function(s4) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
        }, i2.t = function(s4, r2) {
          if (1 & r2 && (s4 = i2(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
            return s4;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
            for (var a5 in s4)
              i2.d(l3, a5, function(c5) {
                return s4[c5];
              }.bind(null, a5));
          return l3;
        }, i2.n = function(s4) {
          var r2 = s4 && s4.__esModule ? function() {
            return s4.default;
          } : function() {
            return s4;
          };
          return i2.d(r2, "a", r2), r2;
        }, i2.o = function(s4, r2) {
          return Object.prototype.hasOwnProperty.call(s4, r2);
        }, i2.p = "", i2(i2.s = 0);
      }([function(t, o3, i2) {
        function s4(a5, c5) {
          for (var u2 = 0; u2 < c5.length; u2++) {
            var h5 = c5[u2];
            h5.enumerable = h5.enumerable || false, h5.configurable = true, "value" in h5 && (h5.writable = true), Object.defineProperty(a5, h5.key, h5);
          }
        }
        function r2(a5, c5, u2) {
          return c5 && s4(a5.prototype, c5), u2 && s4(a5, u2), a5;
        }
        i2.r(o3);
        var l3 = function() {
          function a5(c5) {
            var u2 = this;
            (function(h5, p3) {
              if (!(h5 instanceof p3))
                throw new TypeError("Cannot call a class as a function");
            })(this, a5), this.commands = {}, this.keys = {}, this.name = c5.name, this.parseShortcutName(c5.name), this.element = c5.on, this.callback = c5.callback, this.executeShortcut = function(h5) {
              u2.execute(h5);
            }, this.element.addEventListener("keydown", this.executeShortcut, false);
          }
          return r2(a5, null, [{ key: "supportedCommands", get: function() {
            return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
          } }, { key: "keyCodes", get: function() {
            return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
          } }]), r2(a5, [{ key: "parseShortcutName", value: function(c5) {
            c5 = c5.split("+");
            for (var u2 = 0; u2 < c5.length; u2++) {
              c5[u2] = c5[u2].toUpperCase();
              var h5 = false;
              for (var p3 in a5.supportedCommands)
                if (a5.supportedCommands[p3].includes(c5[u2])) {
                  h5 = this.commands[p3] = true;
                  break;
                }
              h5 || (this.keys[c5[u2]] = true);
            }
            for (var g5 in a5.supportedCommands)
              this.commands[g5] || (this.commands[g5] = false);
          } }, { key: "execute", value: function(c5) {
            var u2, h5 = { CMD: c5.ctrlKey || c5.metaKey, SHIFT: c5.shiftKey, ALT: c5.altKey }, p3 = true;
            for (u2 in this.commands)
              this.commands[u2] !== h5[u2] && (p3 = false);
            var g5, f3 = true;
            for (g5 in this.keys)
              f3 = f3 && c5.keyCode === a5.keyCodes[g5];
            p3 && f3 && this.callback(c5);
          } }, { key: "remove", value: function() {
            this.element.removeEventListener("keydown", this.executeShortcut);
          } }]), a5;
        }();
        o3.default = l3;
      }]).default;
    });
  })(Qt);
  var ji = Qt.exports;
  var $i = /* @__PURE__ */ Fe(ji);
  var Yi = class {
    constructor() {
      this.registeredShortcuts = /* @__PURE__ */ new Map();
    }
    /**
     * Register shortcut
     *
     * @param shortcut - shortcut options
     */
    add(e) {
      if (this.findShortcut(e.on, e.name))
        throw Error(
          `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
        );
      const o3 = new $i({
        name: e.name,
        on: e.on,
        callback: e.handler
      }), i2 = this.registeredShortcuts.get(e.on) || [];
      this.registeredShortcuts.set(e.on, [...i2, o3]);
    }
    /**
     * Remove shortcut
     *
     * @param element - Element shortcut is set for
     * @param name - shortcut name
     */
    remove(e, t) {
      const o3 = this.findShortcut(e, t);
      if (!o3)
        return;
      o3.remove();
      const i2 = this.registeredShortcuts.get(e);
      this.registeredShortcuts.set(e, i2.filter((s4) => s4 !== o3));
    }
    /**
     * Get Shortcut instance if exist
     *
     * @param element - Element shorcut is set for
     * @param shortcut - shortcut name
     * @returns {number} index - shortcut index if exist
     */
    findShortcut(e, t) {
      return (this.registeredShortcuts.get(e) || []).find(({ name: i2 }) => i2 === t);
    }
  };
  var he = new Yi();
  var Wi = Object.defineProperty;
  var Ki = Object.getOwnPropertyDescriptor;
  var eo = (n2, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? Ki(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
      (r2 = n2[s4]) && (i2 = (o3 ? r2(e, t, i2) : r2(i2)) || i2);
    return o3 && i2 && Wi(e, t, i2), i2;
  };
  var Se = /* @__PURE__ */ ((n2) => (n2.Opened = "toolbox-opened", n2.Closed = "toolbox-closed", n2.BlockAdded = "toolbox-block-added", n2))(Se || {});
  var at = class to extends Te {
    /**
     * Toolbox constructor
     *
     * @param options - available parameters
     * @param options.api - Editor API methods
     * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
     */
    constructor({ api: e, tools: t, i18nLabels: o3 }) {
      super(), this.opened = false, this.listeners = new Ce(), this.popover = null, this.handleMobileLayoutToggle = () => {
        this.destroyPopover(), this.initPopover();
      }, this.onPopoverClose = () => {
        this.opened = false, this.emit(
          "toolbox-closed"
          /* Closed */
        );
      }, this.api = e, this.tools = t, this.i18nLabels = o3, this.enableShortcuts(), this.nodes = {
        toolbox: d.make("div", to.CSS.toolbox)
      }, this.initPopover(), this.api.events.on(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Returns True if Toolbox is Empty and nothing to show
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return this.toolsToBeDisplayed.length === 0;
    }
    /**
     * CSS styles
     */
    static get CSS() {
      return {
        toolbox: "ce-toolbox"
      };
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.toolbox;
    }
    /**
     * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
     */
    hasFocus() {
      if (this.popover !== null)
        return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
    }
    /**
     * Destroy Module
     */
    destroy() {
      var e;
      super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(Z.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Toolbox Tool's button click handler
     *
     * @param toolName - tool type to be activated
     * @param blockDataOverrides - Block data predefined by the activated Toolbox item
     */
    toolButtonActivated(e, t) {
      this.insertNewBlock(e, t);
    }
    /**
     * Open Toolbox with Tools
     */
    open() {
      var e;
      this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = true, this.emit(
        "toolbox-opened"
        /* Opened */
      ));
    }
    /**
     * Close Toolbox
     */
    close() {
      var e;
      (e = this.popover) == null || e.hide(), this.opened = false, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }
    /**
     * Close Toolbox
     */
    toggle() {
      this.opened ? this.close() : this.open();
    }
    /**
     * Creates toolbox popover and appends it inside wrapper element
     */
    initPopover() {
      var t;
      const e = pe() ? Jt : lt;
      this.popover = new e({
        scopeElement: this.api.ui.nodes.redactor,
        searchable: true,
        messages: {
          nothingFound: this.i18nLabels.nothingFound,
          search: this.i18nLabels.filter
        },
        items: this.toolboxItemsToBeDisplayed
      }), this.popover.on(Z.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
    }
    /**
     * Destroys popover instance and removes it from DOM
     */
    destroyPopover() {
      this.popover !== null && (this.popover.hide(), this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
    }
    get toolsToBeDisplayed() {
      const e = [];
      return this.tools.forEach((t) => {
        t.toolbox && e.push(t);
      }), e;
    }
    get toolboxItemsToBeDisplayed() {
      const e = (t, o3) => ({
        icon: t.icon,
        title: z.t(K.toolNames, t.title || Le(o3.name)),
        name: o3.name,
        onActivate: () => {
          this.toolButtonActivated(o3.name, t.data);
        },
        secondaryLabel: o3.shortcut ? tt(o3.shortcut) : ""
      });
      return this.toolsToBeDisplayed.reduce((t, o3) => (Array.isArray(o3.toolbox) ? o3.toolbox.forEach((i2) => {
        t.push(e(i2, o3));
      }) : o3.toolbox !== void 0 && t.push(e(o3.toolbox, o3)), t), []);
    }
    /**
     * Iterate all tools and enable theirs shortcuts if specified
     */
    enableShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && this.enableShortcutForTool(e.name, t);
      });
    }
    /**
     * Enable shortcut Block Tool implemented shortcut
     *
     * @param {string} toolName - Tool name
     * @param {string} shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcutForTool(e, t) {
      he.add({
        name: t,
        on: this.api.ui.nodes.redactor,
        handler: async (o3) => {
          o3.preventDefault();
          const i2 = this.api.blocks.getCurrentBlockIndex(), s4 = this.api.blocks.getBlockByIndex(i2);
          if (s4)
            try {
              const r2 = await this.api.blocks.convert(s4.id, e);
              this.api.caret.setToBlock(r2, "end");
              return;
            } catch {
            }
          this.insertNewBlock(e);
        }
      });
    }
    /**
     * Removes all added shortcuts
     * Fired when the Read-Only mode is activated
     */
    removeAllShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && he.remove(this.api.ui.nodes.redactor, t);
      });
    }
    /**
     * Inserts new block
     * Can be called when button clicked on Toolbox or by ShortcutData
     *
     * @param {string} toolName - Tool name
     * @param blockDataOverrides - predefined Block data
     */
    async insertNewBlock(e, t) {
      const o3 = this.api.blocks.getCurrentBlockIndex(), i2 = this.api.blocks.getBlockByIndex(o3);
      if (!i2)
        return;
      const s4 = i2.isEmpty ? o3 : o3 + 1;
      let r2;
      if (t) {
        const a5 = await this.api.blocks.composeBlockData(e);
        r2 = Object.assign(a5, t);
      }
      const l3 = this.api.blocks.insert(
        e,
        r2,
        void 0,
        s4,
        void 0,
        i2.isEmpty
      );
      l3.call(J.APPEND_CALLBACK), this.api.caret.setToBlock(s4), this.emit("toolbox-block-added", {
        block: l3
      }), this.api.toolbar.close();
    }
  };
  eo([
    ue
  ], at.prototype, "toolsToBeDisplayed", 1);
  eo([
    ue
  ], at.prototype, "toolboxItemsToBeDisplayed", 1);
  var Xi = at;
  var oo = "block hovered";
  async function Vi(n2, e) {
    const t = navigator.keyboard;
    if (!t)
      return e;
    try {
      return (await t.getLayoutMap()).get(n2) || e;
    } catch (o3) {
      return console.error(o3), e;
    }
  }
  var qi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.toolboxInstance = null;
    }
    /**
     * CSS styles
     *
     * @returns {object}
     */
    get CSS() {
      return {
        toolbar: "ce-toolbar",
        content: "ce-toolbar__content",
        actions: "ce-toolbar__actions",
        actionsOpened: "ce-toolbar__actions--opened",
        toolbarOpened: "ce-toolbar--opened",
        openedToolboxHolderModifier: "codex-editor--toolbox-opened",
        plusButton: "ce-toolbar__plus",
        plusButtonShortcut: "ce-toolbar__plus-shortcut",
        settingsToggler: "ce-toolbar__settings-btn",
        settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
      };
    }
    /**
     * Returns the Toolbar opening state
     *
     * @returns {boolean}
     */
    get opened() {
      return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
    }
    /**
     * Public interface for accessing the Toolbox
     */
    get toolbox() {
      var e;
      return {
        opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
        close: () => {
          var t;
          (t = this.toolboxInstance) == null || t.close();
        },
        open: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.open() called before initialization is finished", "warn");
            return;
          }
          this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
        },
        toggle: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.toggle() called before initialization is finished", "warn");
            return;
          }
          this.toolboxInstance.toggle();
        },
        hasFocus: () => {
          var t;
          return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
        }
      };
    }
    /**
     * Block actions appearance manipulations
     */
    get blockActions() {
      return {
        hide: () => {
          this.nodes.actions.classList.remove(this.CSS.actionsOpened);
        },
        show: () => {
          this.nodes.actions.classList.add(this.CSS.actionsOpened);
        }
      };
    }
    /**
     * Methods for working with Block Tunes toggler
     */
    get blockTunesToggler() {
      return {
        hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
        show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
      };
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
        this.drawUI(), this.enableModuleBindings();
      }, { timeout: 2e3 });
    }
    /**
     * Move Toolbar to the passed (or current) Block
     *
     * @param block - block to move Toolbar near it
     */
    moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
      if (this.toolboxInstance === null) {
        I("Can't open Toolbar since Editor initialization is not finished yet", "warn");
        return;
      }
      if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
        return;
      this.hoveredBlock = e;
      const t = e.holder, { isMobile: o3 } = this.Editor.UI;
      let i2;
      const s4 = 20, r2 = e.firstInput, l3 = t.getBoundingClientRect(), a5 = r2 !== void 0 ? r2.getBoundingClientRect() : null, c5 = a5 !== null ? a5.top - l3.top : null, u2 = c5 !== null ? c5 > s4 : void 0;
      if (o3)
        i2 = t.offsetTop + t.offsetHeight;
      else if (r2 === void 0 || u2) {
        const h5 = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
        i2 = t.offsetTop + h5;
      } else {
        const h5 = _o(r2), p3 = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g5 = 8;
        i2 = t.offsetTop + h5 - p3 + g5 + c5;
      }
      this.nodes.wrapper.style.top = `${Math.floor(i2)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
     * Close the Toolbar
     */
    close() {
      var e, t;
      this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
    }
    /**
     * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
     */
    reset() {
      this.nodes.wrapper.style.top = "unset";
    }
    /**
     * Open Toolbar with Plus Button and Actions
     *
     * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
     *                                     This flag allows to open Toolbar without Actions.
     */
    open(e = true) {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }
    /**
     * Draws Toolbar elements
     */
    async make() {
      this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s4) => {
        this.nodes[s4] = d.make("div", this.CSS[s4]);
      }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
        innerHTML: Ci
      }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
        Ne(true), this.plusButtonClicked();
      }, false);
      const e = d.make("div");
      e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "/"
      })), Pe(this.nodes.plusButton, e, {
        hidingDelay: 400
      }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
        innerHTML: Ti
      }), d.append(this.nodes.actions, this.nodes.settingsToggler);
      const t = d.make("div"), o3 = d.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i2 = await Vi("Slash", "/");
      t.appendChild(o3), t.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: tt(`CMD + ${i2}`)
      })), Pe(this.nodes.settingsToggler, t, {
        hidingDelay: 400
      }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Creates the Toolbox instance and return it's rendered element
     */
    makeToolbox() {
      return this.toolboxInstance = new Xi({
        api: this.Editor.API.methods,
        tools: this.Editor.Tools.blockTools,
        i18nLabels: {
          filter: z.ui(K.ui.popover, "Filter"),
          nothingFound: z.ui(K.ui.popover, "Nothing found")
        }
      }), this.toolboxInstance.on(Se.Opened, () => {
        this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.Closed, () => {
        this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.BlockAdded, ({ block: e }) => {
        const { BlockManager: t, Caret: o3 } = this.Editor, i2 = t.getBlockById(e.id);
        i2.inputs.length === 0 && (i2 === t.lastBlock ? (t.insertAtEnd(), o3.setToBlock(t.lastBlock)) : o3.setToBlock(t.nextBlock));
      }), this.toolboxInstance.getElement();
    }
    /**
     * Handler for Plus Button
     */
    plusButtonClicked() {
      var e;
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
    }
    /**
     * Enable bindings
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
        var t;
        e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), Ne(true);
      }, true), pe() || this.eventsDispatcher.on(oo, (e) => {
        var t;
        this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
      });
    }
    /**
     * Disable bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Clicks on the Block Settings toggler
     */
    settingsTogglerClicked() {
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
    }
    /**
     * Draws Toolbar UI
     *
     * Toolbar contains BlockSettings and Toolbox.
     * That's why at first we draw its components and then Toolbar itself
     *
     * Steps:
     *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
     *  - Make itself and append dependent nodes to itself
     *
     */
    drawUI() {
      this.Editor.BlockSettings.make(), this.make();
    }
    /**
     * Removes all created and saved HTMLElements
     * It is used in Read-Only mode
     */
    destroy() {
      this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
    }
  };
  var ne = /* @__PURE__ */ ((n2) => (n2[n2.Block = 0] = "Block", n2[n2.Inline = 1] = "Inline", n2[n2.Tune = 2] = "Tune", n2))(ne || {});
  var Ie = /* @__PURE__ */ ((n2) => (n2.Shortcut = "shortcut", n2.Toolbox = "toolbox", n2.EnabledInlineTools = "inlineToolbar", n2.EnabledBlockTunes = "tunes", n2.Config = "config", n2))(Ie || {});
  var io = /* @__PURE__ */ ((n2) => (n2.Shortcut = "shortcut", n2.SanitizeConfig = "sanitize", n2))(io || {});
  var ce = /* @__PURE__ */ ((n2) => (n2.IsEnabledLineBreaks = "enableLineBreaks", n2.Toolbox = "toolbox", n2.ConversionConfig = "conversionConfig", n2.IsReadOnlySupported = "isReadOnlySupported", n2.PasteConfig = "pasteConfig", n2))(ce || {});
  var ct = /* @__PURE__ */ ((n2) => (n2.IsInline = "isInline", n2.Title = "title", n2))(ct || {});
  var et = /* @__PURE__ */ ((n2) => (n2.IsTune = "isTune", n2))(et || {});
  var dt = class {
    /**
     * @class
     * @param {ConstructorOptions} options - Constructor options
     */
    constructor({
      name: e,
      constructable: t,
      config: o3,
      api: i2,
      isDefault: s4,
      isInternal: r2 = false,
      defaultPlaceholder: l3
    }) {
      this.api = i2, this.name = e, this.constructable = t, this.config = o3, this.isDefault = s4, this.isInternal = r2, this.defaultPlaceholder = l3;
    }
    /**
     * Returns Tool user configuration
     */
    get settings() {
      const e = this.config.config || {};
      return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
    }
    /**
     * Calls Tool's reset method
     */
    reset() {
      if (O(this.constructable.reset))
        return this.constructable.reset();
    }
    /**
     * Calls Tool's prepare method
     */
    prepare() {
      if (O(this.constructable.prepare))
        return this.constructable.prepare({
          toolName: this.name,
          config: this.settings
        });
    }
    /**
     * Returns shortcut for Tool (internal or specified by user)
     */
    get shortcut() {
      const e = this.constructable.shortcut;
      return this.config.shortcut || e;
    }
    /**
     * Returns Tool's sanitizer configuration
     */
    get sanitizeConfig() {
      return this.constructable.sanitize || {};
    }
    /**
     * Returns true if Tools is inline
     */
    isInline() {
      return this.type === ne.Inline;
    }
    /**
     * Returns true if Tools is block
     */
    isBlock() {
      return this.type === ne.Block;
    }
    /**
     * Returns true if Tools is tune
     */
    isTune() {
      return this.type === ne.Tune;
    }
  };
  var Zi = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.CSS = {
        inlineToolbar: "ce-inline-toolbar"
      }, this.opened = false, this.popover = null, this.toolbarVerticalMargin = pe() ? 20 : 6, this.toolsInstances = /* @__PURE__ */ new Map();
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? this.destroy() : window.requestIdleCallback(() => {
        this.make();
      }, { timeout: 2e3 });
    }
    /**
     *  Moving / appearance
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Shows Inline Toolbar if something is selected
     *
     * @param [needToClose] - pass true to close toolbar if it is not allowed.
     *                                  Avoid to use it just for closing IT, better call .close() clearly.
     */
    async tryToShow(e = false) {
      e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
    }
    /**
     * Hides Inline Toolbar
     */
    close() {
      var e, t;
      this.opened && (this.Editor.ReadOnly.isEnabled || (Array.from(this.toolsInstances.entries()).forEach(([o3, i2]) => {
        const s4 = this.getToolShortcut(o3);
        s4 && he.remove(this.Editor.UI.nodes.redactor, s4), O(i2.clear) && i2.clear();
      }), this.toolsInstances = null, this.reset(), this.opened = false, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null));
    }
    /**
     * Check if node is contained by Inline Toolbar
     *
     * @param {Node} node — node to check
     */
    containsNode(e) {
      return this.nodes.wrapper === void 0 ? false : this.nodes.wrapper.contains(e);
    }
    /**
     * Removes UI and its components
     */
    destroy() {
      var e;
      this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
    }
    /**
     * Making DOM
     */
    make() {
      this.nodes.wrapper = d.make("div", [
        this.CSS.inlineToolbar,
        ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
      ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Shows Inline Toolbar
     */
    async open() {
      var t;
      if (this.opened)
        return;
      this.opened = true, this.popover !== null && this.popover.destroy();
      const e = await this.getInlineTools();
      this.popover = new Ri({
        items: e,
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Move Toolbar to the selected text
     *
     * @param popoverWidth - width of the toolbar popover
     */
    move(e) {
      const t = b.rect, o3 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i2 = {
        x: t.x - o3.x,
        y: t.y + t.height - // + window.scrollY
        o3.top + this.toolbarVerticalMargin
      };
      i2.x + e + o3.x > this.Editor.UI.contentRect.right && (i2.x = this.Editor.UI.contentRect.right - e - o3.x), this.nodes.wrapper.style.left = Math.floor(i2.x) + "px", this.nodes.wrapper.style.top = Math.floor(i2.y) + "px";
    }
    /**
     * Clear orientation classes and reset position
     */
    reset() {
      this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
    }
    /**
     * Need to show Inline Toolbar or not
     */
    allowedToShow() {
      const e = ["IMG", "INPUT"], t = b.get(), o3 = b.text;
      if (!t || !t.anchorNode || t.isCollapsed || o3.length < 1)
        return false;
      const i2 = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
      if (i2 === null || t && e.includes(i2.tagName) || i2.closest('[contenteditable="true"]') === null)
        return false;
      const r2 = this.Editor.BlockManager.getBlock(t.anchorNode);
      return r2 ? r2.tool.inlineTools.size !== 0 : false;
    }
    /**
     *  Working with Tools
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
     * Sets this.toolsInstances map
     */
    async getInlineTools() {
      const e = b.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode), o3 = Array.from(t.tool.inlineTools.values()), i2 = [];
      this.toolsInstances === null && (this.toolsInstances = /* @__PURE__ */ new Map());
      for (let s4 = 0; s4 < o3.length; s4++) {
        const r2 = o3[s4], l3 = r2.create(), a5 = await l3.render();
        this.toolsInstances.set(r2.name, l3);
        const c5 = this.getToolShortcut(r2.name);
        if (c5)
          try {
            this.enableShortcuts(r2.name, c5);
          } catch {
          }
        const u2 = c5 !== void 0 ? tt(c5) : void 0, h5 = z.t(
          K.toolNames,
          r2.title || Le(r2.name)
        );
        [a5].flat().forEach((p3) => {
          var f3, k4;
          const g5 = {
            name: r2.name,
            onActivate: () => {
              this.toolClicked(l3);
            },
            hint: {
              title: h5,
              description: u2
            }
          };
          if (d.isElement(p3)) {
            const C5 = {
              ...g5,
              element: p3,
              type: A.Html
            };
            if (O(l3.renderActions)) {
              const S5 = l3.renderActions();
              C5.children = {
                isOpen: (f3 = l3.checkState) == null ? void 0 : f3.call(l3, b.get()),
                /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
                isFlippable: false,
                items: [
                  {
                    type: A.Html,
                    element: S5
                  }
                ]
              };
            } else
              (k4 = l3.checkState) == null || k4.call(l3, b.get());
            i2.push(C5);
          } else if (p3.type === A.Html)
            i2.push({
              ...g5,
              ...p3,
              type: A.Html
            });
          else if (p3.type === A.Separator)
            i2.push({
              type: A.Separator
            });
          else {
            const C5 = {
              ...g5,
              ...p3,
              type: A.Default
            };
            "children" in C5 && s4 !== 0 && i2.push({
              type: A.Separator
            }), i2.push(C5), "children" in C5 && s4 < o3.length - 1 && i2.push({
              type: A.Separator
            });
          }
        });
      }
      return i2;
    }
    /**
     * Get shortcut name for tool
     *
     * @param toolName — Tool name
     */
    getToolShortcut(e) {
      const { Tools: t } = this.Editor, o3 = t.inlineTools.get(e), i2 = t.internal.inlineTools;
      return Array.from(i2.keys()).includes(e) ? this.inlineTools[e][io.Shortcut] : o3 == null ? void 0 : o3.shortcut;
    }
    /**
     * Enable Tool shortcut with Editor Shortcuts Module
     *
     * @param toolName - tool name
     * @param shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcuts(e, t) {
      he.add({
        name: t,
        handler: (o3) => {
          var s4;
          const { currentBlock: i2 } = this.Editor.BlockManager;
          i2 && i2.tool.enabledInlineTools && (o3.preventDefault(), (s4 = this.popover) == null || s4.activateItemByName(e));
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Inline Tool button clicks
     *
     * @param tool - Tool's instance
     */
    toolClicked(e) {
      var o3;
      const t = b.range;
      (o3 = e.surround) == null || o3.call(e, t), this.checkToolsState();
    }
    /**
     * Check Tools` state by selection
     */
    checkToolsState() {
      var e;
      (e = this.toolsInstances) == null || e.forEach((t) => {
        var o3;
        (o3 = t.checkState) == null || o3.call(t, b.get());
      });
    }
    /**
     * Get inline tools tools
     * Tools that has isInline is true
     */
    get inlineTools() {
      const e = {};
      return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o3]) => {
        e[t] = o3.create();
      }), e;
    }
  };
  function so() {
    const n2 = window.getSelection();
    if (n2 === null)
      return [null, 0];
    let e = n2.focusNode, t = n2.focusOffset;
    return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
  }
  function no(n2, e, t, o3) {
    const i2 = document.createRange();
    o3 === "left" ? (i2.setStart(n2, 0), i2.setEnd(e, t)) : (i2.setStart(e, t), i2.setEnd(n2, n2.childNodes.length));
    const s4 = i2.cloneContents(), r2 = document.createElement("div");
    r2.appendChild(s4);
    const l3 = r2.textContent || "";
    return Lo(l3);
  }
  function Me(n2) {
    const e = d.getDeepestNode(n2);
    if (e === null || d.isEmpty(n2))
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === 0;
    if (d.isEmpty(n2))
      return true;
    const [t, o3] = so();
    return t === null ? false : no(n2, t, o3, "left");
  }
  function Ae(n2) {
    const e = d.getDeepestNode(n2, true);
    if (e === null)
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === e.value.length;
    const [t, o3] = so();
    return t === null ? false : no(n2, t, o3, "right");
  }
  var Gi = class extends y {
    /**
     * All keydowns on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    keydown(e) {
      switch (this.beforeKeydownProcessing(e), e.keyCode) {
        case w.BACKSPACE:
          this.backspace(e);
          break;
        case w.DELETE:
          this.delete(e);
          break;
        case w.ENTER:
          this.enter(e);
          break;
        case w.DOWN:
        case w.RIGHT:
          this.arrowRightAndDown(e);
          break;
        case w.UP:
        case w.LEFT:
          this.arrowLeftAndUp(e);
          break;
        case w.TAB:
          this.tabPressed(e);
          break;
      }
      e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
    }
    /**
     * Fires on keydown before event processing
     *
     * @param {KeyboardEvent} event - keydown
     */
    beforeKeydownProcessing(e) {
      this.needToolbarClosing(e) && Mt(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
    }
    /**
     * Key up on Block:
     * - shows Inline Toolbar if something selected
     * - shows conversion toolbar with 85% of block selection
     *
     * @param {KeyboardEvent} event - keyup event
     */
    keyup(e) {
      e.shiftKey || this.Editor.UI.checkEmptiness();
    }
    /**
     * Add drop target styles
     *
     * @param {DragEvent} event - drag over event
     */
    dragOver(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = true;
    }
    /**
     * Remove drop target style
     *
     * @param {DragEvent} event - drag leave event
     */
    dragLeave(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = false;
    }
    /**
     * Copying selected blocks
     * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandC(e) {
      const { BlockSelection: t } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e);
    }
    /**
     * Copy and Delete selected Blocks
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandX(e) {
      const { BlockSelection: t, BlockManager: o3, Caret: i2 } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
        const s4 = o3.removeSelectedBlocks(), r2 = o3.insertDefaultBlockAtIndex(s4, true);
        i2.setToBlock(r2, i2.positions.START), t.clearSelection(e);
      });
    }
    /**
     * Tab pressed inside a Block.
     *
     * @param {KeyboardEvent} event - keydown
     */
    tabPressed(e) {
      const { InlineToolbar: t, Caret: o3 } = this.Editor;
      if (t.opened)
        return;
      (e.shiftKey ? o3.navigatePrevious(true) : o3.navigateNext(true)) && e.preventDefault();
    }
    /**
     * '/' + 'command' keydown inside a Block
     */
    commandSlashPressed() {
      this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
    }
    /**
     * '/' keydown inside a Block
     *
     * @param event - keydown
     */
    slashPressed(e) {
      this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
    }
    /**
     * ENTER pressed on block
     *
     * @param {KeyboardEvent} event - keydown
     */
    enter(e) {
      const { BlockManager: t, UI: o3 } = this.Editor, i2 = t.currentBlock;
      if (i2 === void 0 || i2.tool.isLineBreaksEnabled || o3.someToolbarOpened && o3.someFlipperButtonFocused || e.shiftKey && !Ge)
        return;
      let s4 = i2;
      i2.currentInput !== void 0 && Me(i2.currentInput) && !i2.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i2.currentInput && Ae(i2.currentInput) ? s4 = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s4 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s4), this.Editor.Toolbar.moveAndOpen(s4), e.preventDefault();
    }
    /**
     * Handle backspace keydown on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    backspace(e) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { currentBlock: i2, previousBlock: s4 } = t;
      if (i2 === void 0 || !b.isCollapsed || !i2.currentInput || !Me(i2.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i2.currentInput === i2.firstInput)) {
        o3.navigatePrevious();
        return;
      }
      if (s4 === null)
        return;
      if (s4.isEmpty) {
        t.removeBlock(s4);
        return;
      }
      if (i2.isEmpty) {
        t.removeBlock(i2);
        const a5 = t.currentBlock;
        o3.setToBlock(a5, o3.positions.END);
        return;
      }
      wt(s4, i2) ? this.mergeBlocks(s4, i2) : o3.setToBlock(s4, o3.positions.END);
    }
    /**
     * Handles delete keydown on Block
     * Removes char after the caret.
     * If caret is at the end of the block, merge next block with current
     *
     * @param {KeyboardEvent} event - keydown
     */
    delete(e) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { currentBlock: i2, nextBlock: s4 } = t;
      if (!b.isCollapsed || !Ae(i2.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i2.currentInput === i2.lastInput)) {
        o3.navigateNext();
        return;
      }
      if (s4 === null)
        return;
      if (s4.isEmpty) {
        t.removeBlock(s4);
        return;
      }
      if (i2.isEmpty) {
        t.removeBlock(i2), o3.setToBlock(s4, o3.positions.START);
        return;
      }
      wt(i2, s4) ? this.mergeBlocks(i2, s4) : o3.setToBlock(s4, o3.positions.START);
    }
    /**
     * Merge passed Blocks
     *
     * @param targetBlock - to which Block we want to merge
     * @param blockToMerge - what Block we want to merge
     */
    mergeBlocks(e, t) {
      const { BlockManager: o3, Caret: i2, Toolbar: s4 } = this.Editor;
      i2.createShadow(e.lastInput), o3.mergeBlocks(e, t).then(() => {
        i2.restoreCaret(e.pluginsContent), s4.close();
      });
    }
    /**
     * Handle right and down keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowRightAndDown(e) {
      const t = le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB);
      if (this.Editor.UI.someToolbarOpened && t)
        return;
      this.Editor.Toolbar.close();
      const { currentBlock: o3 } = this.Editor.BlockManager, s4 = ((o3 == null ? void 0 : o3.currentInput) !== void 0 ? Ae(o3.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.DOWN && s4) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState();
        return;
      }
      if (e.keyCode === w.DOWN || e.keyCode === w.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Handle left and up keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowLeftAndUp(e) {
      if (this.Editor.UI.someToolbarOpened) {
        if (le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB))
          return;
        this.Editor.UI.closeAllToolbars();
      }
      this.Editor.Toolbar.close();
      const { currentBlock: t } = this.Editor.BlockManager, i2 = ((t == null ? void 0 : t.currentInput) !== void 0 ? Me(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.UP && i2) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
        return;
      }
      if (e.keyCode === w.UP || e.keyCode === w.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Cases when we need to close Toolbar
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    needToolbarClosing(e) {
      const t = e.keyCode === w.ENTER && this.Editor.Toolbar.toolbox.opened, o3 = e.keyCode === w.ENTER && this.Editor.BlockSettings.opened, i2 = e.keyCode === w.ENTER && this.Editor.InlineToolbar.opened, s4 = e.keyCode === w.TAB;
      return !(e.shiftKey || s4 || t || o3 || i2);
    }
    /**
     * If Toolbox is not open, then just open it and show plus button
     */
    activateToolbox() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
    }
    /**
     * Open Toolbar and show BlockSettings before flipping Tools
     */
    activateBlockSettings() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
  };
  var Xe = class {
    /**
     * @class
     * @param {HTMLElement} workingArea — editor`s working node
     */
    constructor(e) {
      this.blocks = [], this.workingArea = e;
    }
    /**
     * Get length of Block instances array
     *
     * @returns {number}
     */
    get length() {
      return this.blocks.length;
    }
    /**
     * Get Block instances array
     *
     * @returns {Block[]}
     */
    get array() {
      return this.blocks;
    }
    /**
     * Get blocks html elements array
     *
     * @returns {HTMLElement[]}
     */
    get nodes() {
      return At(this.workingArea.children);
    }
    /**
     * Proxy trap to implement array-like setter
     *
     * @example
     * blocks[0] = new Block(...)
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — block index or any Blocks class property key to set
     * @param {Block} value — value to set
     * @returns {boolean}
     */
    static set(e, t, o3) {
      return isNaN(Number(t)) ? (Reflect.set(e, t, o3), true) : (e.insert(+t, o3), true);
    }
    /**
     * Proxy trap to implement array-like getter
     *
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — Blocks class property key
     * @returns {Block|*}
     */
    static get(e, t) {
      return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
    }
    /**
     * Push new Block to the blocks array and append it to working area
     *
     * @param {Block} block - Block to add
     */
    push(e) {
      this.blocks.push(e), this.insertToDOM(e);
    }
    /**
     * Swaps blocks with indexes first and second
     *
     * @param {number} first - first block index
     * @param {number} second - second block index
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      const o3 = this.blocks[t];
      d.swap(this.blocks[e].holder, o3.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o3;
    }
    /**
     * Move a block from one to another index
     *
     * @param {number} toIndex - new index of the block
     * @param {number} fromIndex - block to move
     */
    move(e, t) {
      const o3 = this.blocks.splice(t, 1)[0], i2 = e - 1, s4 = Math.max(0, i2), r2 = this.blocks[s4];
      e > 0 ? this.insertToDOM(o3, "afterend", r2) : this.insertToDOM(o3, "beforebegin", r2), this.blocks.splice(e, 0, o3);
      const l3 = this.composeBlockEvent("move", {
        fromIndex: t,
        toIndex: e
      });
      o3.call(J.MOVED, l3);
    }
    /**
     * Insert new Block at passed index
     *
     * @param {number} index — index to insert Block
     * @param {Block} block — Block to insert
     * @param {boolean} replace — it true, replace block on given index
     */
    insert(e, t, o3 = false) {
      if (!this.length) {
        this.push(t);
        return;
      }
      e > this.length && (e = this.length), o3 && (this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED));
      const i2 = o3 ? 1 : 0;
      if (this.blocks.splice(e, i2, t), e > 0) {
        const s4 = this.blocks[e - 1];
        this.insertToDOM(t, "afterend", s4);
      } else {
        const s4 = this.blocks[e + 1];
        s4 ? this.insertToDOM(t, "beforebegin", s4) : this.insertToDOM(t);
      }
    }
    /**
     * Replaces block under passed index with passed block
     *
     * @param index - index of existed block
     * @param block - new block
     */
    replace(e, t) {
      if (this.blocks[e] === void 0)
        throw Error("Incorrect index");
      this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index to insert blocks at
     */
    insertMany(e, t) {
      const o3 = new DocumentFragment();
      for (const i2 of e)
        o3.appendChild(i2.holder);
      if (this.length > 0) {
        if (t > 0) {
          const i2 = Math.min(t - 1, this.length - 1);
          this.blocks[i2].holder.after(o3);
        } else
          t === 0 && this.workingArea.prepend(o3);
        this.blocks.splice(t, 0, ...e);
      } else
        this.blocks.push(...e), this.workingArea.appendChild(o3);
      e.forEach((i2) => i2.call(J.RENDERED));
    }
    /**
     * Remove block
     *
     * @param {number} index - index of Block to remove
     */
    remove(e) {
      isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED), this.blocks.splice(e, 1);
    }
    /**
     * Remove all blocks
     */
    removeAll() {
      this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(J.REMOVED)), this.blocks.length = 0;
    }
    /**
     * Insert Block after passed target
     *
     * @todo decide if this method is necessary
     * @param {Block} targetBlock — target after which Block should be inserted
     * @param {Block} newBlock — Block to insert
     */
    insertAfter(e, t) {
      const o3 = this.blocks.indexOf(e);
      this.insert(o3 + 1, t);
    }
    /**
     * Get Block by index
     *
     * @param {number} index — Block index
     * @returns {Block}
     */
    get(e) {
      return this.blocks[e];
    }
    /**
     * Return index of passed Block
     *
     * @param {Block} block - Block to find
     * @returns {number}
     */
    indexOf(e) {
      return this.blocks.indexOf(e);
    }
    /**
     * Insert new Block into DOM
     *
     * @param {Block} block - Block to insert
     * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
     * @param {Block} target — Block related to position
     */
    insertToDOM(e, t, o3) {
      t ? o3.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(J.RENDERED);
    }
    /**
     * Composes Block event with passed type and details
     *
     * @param {string} type - event type
     * @param {object} detail - event detail
     */
    composeBlockEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  var Tt = "block-removed";
  var Ct = "block-added";
  var Ji = "block-moved";
  var St = "block-changed";
  var Qi = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     *
     * @param operation - promise should be added to queue
     */
    add(e) {
      return new Promise((t, o3) => {
        this.completed = this.completed.then(e).then(t).catch(o3);
      });
    }
  };
  var es = class extends y {
    constructor() {
      super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
    }
    /**
     * Returns current Block index
     *
     * @returns {number}
     */
    get currentBlockIndex() {
      return this._currentBlockIndex;
    }
    /**
     * Set current Block index and fire Block lifecycle callbacks
     *
     * @param {number} newIndex - index of Block to set as current
     */
    set currentBlockIndex(e) {
      this._currentBlockIndex = e;
    }
    /**
     * returns first Block
     *
     * @returns {Block}
     */
    get firstBlock() {
      return this._blocks[0];
    }
    /**
     * returns last Block
     *
     * @returns {Block}
     */
    get lastBlock() {
      return this._blocks[this._blocks.length - 1];
    }
    /**
     * Get current Block instance
     *
     * @returns {Block}
     */
    get currentBlock() {
      return this._blocks[this.currentBlockIndex];
    }
    /**
     * Set passed Block as a current
     *
     * @param block - block to set as a current
     */
    set currentBlock(e) {
      this.currentBlockIndex = this.getBlockIndex(e);
    }
    /**
     * Returns next Block instance
     *
     * @returns {Block|null}
     */
    get nextBlock() {
      return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
    }
    /**
     * Return first Block with inputs after current Block
     *
     * @returns {Block | undefined}
     */
    get nextContentfulBlock() {
      return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
    }
    /**
     * Return first Block with inputs before current Block
     *
     * @returns {Block | undefined}
     */
    get previousContentfulBlock() {
      return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
    }
    /**
     * Returns previous Block instance
     *
     * @returns {Block|null}
     */
    get previousBlock() {
      return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
    }
    /**
     * Get array of Block instances
     *
     * @returns {Block[]} {@link Blocks#array}
     */
    get blocks() {
      return this._blocks.array;
    }
    /**
     * Check if each Block is empty
     *
     * @returns {boolean}
     */
    get isEditorEmpty() {
      return this.blocks.every((e) => e.isEmpty);
    }
    /**
     * Should be called after Editor.UI preparation
     * Define this._blocks property
     */
    prepare() {
      const e = new Xe(this.Editor.UI.nodes.redactor);
      this._blocks = new Proxy(e, {
        set: Xe.set,
        get: Xe.get
      }), this.listeners.on(
        document,
        "copy",
        (t) => this.Editor.BlockEvents.handleCommandC(t)
      );
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - Unbind event handlers from created Blocks
     *
     * if readOnly is false:
     *  - Bind event handlers to all existing Blocks
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Creates Block instance by tool name
     *
     * @param {object} options - block creation options
     * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
     * @param {string} [options.id] - unique id for this block
     * @param {BlockToolData} [options.data] - constructor params
     * @returns {Block}
     */
    composeBlock({
      tool: e,
      data: t = {},
      id: o3 = void 0,
      tunes: i2 = {}
    }) {
      const s4 = this.Editor.ReadOnly.isEnabled, r2 = this.Editor.Tools.blockTools.get(e), l3 = new D({
        id: o3,
        data: t,
        tool: r2,
        api: this.Editor.API,
        readOnly: s4,
        tunesData: i2
      }, this.eventsDispatcher);
      return s4 || window.requestIdleCallback(() => {
        this.bindBlockEvents(l3);
      }, { timeout: 2e3 }), l3;
    }
    /**
     * Insert new block into _blocks
     *
     * @param {object} options - insert options
     * @param {string} [options.id] - block's unique id
     * @param {string} [options.tool] - plugin name, by default method inserts the default block type
     * @param {object} [options.data] - plugin data
     * @param {number} [options.index] - index where to insert new Block
     * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
     * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
     * @returns {Block}
     */
    insert({
      id: e = void 0,
      tool: t = this.config.defaultBlock,
      data: o3 = {},
      index: i2,
      needToFocus: s4 = true,
      replace: r2 = false,
      tunes: l3 = {}
    } = {}) {
      let a5 = i2;
      a5 === void 0 && (a5 = this.currentBlockIndex + (r2 ? 0 : 1));
      const c5 = this.composeBlock({
        id: e,
        tool: t,
        data: o3,
        tunes: l3
      });
      return r2 && this.blockDidMutated(Tt, this.getBlockByIndex(a5), {
        index: a5
      }), this._blocks.insert(a5, c5, r2), this.blockDidMutated(Ct, c5, {
        index: a5
      }), s4 ? this.currentBlockIndex = a5 : a5 <= this.currentBlockIndex && this.currentBlockIndex++, c5;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index where to insert
     */
    insertMany(e, t = 0) {
      this._blocks.insertMany(e, t);
    }
    /**
     * Update Block data.
     *
     * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
     * Should not trigger 'block-removed' or 'block-added' events.
     *
     * If neither data nor tunes is provided, return the provided block instead.
     *
     * @param block - block to update
     * @param data - (optional) new data
     * @param tunes - (optional) tune data
     */
    async update(e, t, o3) {
      if (!t && !o3)
        return e;
      const i2 = await e.data, s4 = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, i2, t ?? {}),
        tunes: o3 ?? e.tunes
      }), r2 = this.getBlockIndex(e);
      return this._blocks.replace(r2, s4), this.blockDidMutated(St, s4, {
        index: r2
      }), s4;
    }
    /**
     * Replace passed Block with the new one with specified Tool and data
     *
     * @param block - block to replace
     * @param newTool - new Tool name
     * @param data - new Tool data
     */
    replace(e, t, o3) {
      const i2 = this.getBlockIndex(e);
      return this.insert({
        tool: t,
        data: o3,
        index: i2,
        replace: true
      });
    }
    /**
     * Insert pasted content. Call onPaste callback after insert.
     *
     * @param {string} toolName - name of Tool to insert
     * @param {PasteEvent} pasteEvent - pasted data
     * @param {boolean} replace - should replace current block
     */
    paste(e, t, o3 = false) {
      const i2 = this.insert({
        tool: e,
        replace: o3
      });
      try {
        window.requestIdleCallback(() => {
          i2.call(J.ON_PASTE, t);
        });
      } catch (s4) {
        I(`${e}: onPaste callback call is failed`, "error", s4);
      }
      return i2;
    }
    /**
     * Insert new default block at passed index
     *
     * @param {number} index - index where Block should be inserted
     * @param {boolean} needToFocus - if true, updates current Block index
     *
     * TODO: Remove method and use insert() with index instead (?)
     * @returns {Block} inserted Block
     */
    insertDefaultBlockAtIndex(e, t = false) {
      const o3 = this.composeBlock({ tool: this.config.defaultBlock });
      return this._blocks[e] = o3, this.blockDidMutated(Ct, o3, {
        index: e
      }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o3;
    }
    /**
     * Always inserts at the end
     *
     * @returns {Block}
     */
    insertAtEnd() {
      return this.currentBlockIndex = this.blocks.length - 1, this.insert();
    }
    /**
     * Merge two blocks
     *
     * @param {Block} targetBlock - previous block will be append to this block
     * @param {Block} blockToMerge - block that will be merged with target block
     * @returns {Promise} - the sequence that can be continued
     */
    async mergeBlocks(e, t) {
      let o3;
      if (e.name === t.name && e.mergeable) {
        const i2 = await t.data;
        if (V(i2)) {
          console.error("Could not merge Block. Failed to extract original Block data.");
          return;
        }
        const [s4] = it([i2], e.tool.sanitizeConfig);
        o3 = s4;
      } else if (e.mergeable && _e(t, "export") && _e(e, "import")) {
        const i2 = await t.exportDataAsString(), s4 = q(i2, e.tool.sanitizeConfig);
        o3 = xt(s4, e.tool.conversionConfig);
      }
      o3 !== void 0 && (await e.mergeWith(o3), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
    }
    /**
     * Remove passed Block
     *
     * @param block - Block to remove
     * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
     */
    removeBlock(e, t = true) {
      return new Promise((o3) => {
        const i2 = this._blocks.indexOf(e);
        if (!this.validateIndex(i2))
          throw new Error("Can't find a Block to remove");
        e.destroy(), this._blocks.remove(i2), this.blockDidMutated(Tt, e, {
          index: i2
        }), this.currentBlockIndex >= i2 && this.currentBlockIndex--, this.blocks.length ? i2 === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o3();
      });
    }
    /**
     * Remove only selected Blocks
     * and returns first Block index where started removing...
     *
     * @returns {number|undefined}
     */
    removeSelectedBlocks() {
      let e;
      for (let t = this.blocks.length - 1; t >= 0; t--)
        this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
      return e;
    }
    /**
     * Attention!
     * After removing insert the new default typed Block and focus on it
     * Removes all blocks
     */
    removeAllBlocks() {
      for (let e = this.blocks.length - 1; e >= 0; e--)
        this._blocks.remove(e);
      this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
    }
    /**
     * Split current Block
     * 1. Extract content from Caret position to the Block`s end
     * 2. Insert a new Block below current one with extracted content
     *
     * @returns {Block}
     */
    split() {
      const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d.make("div");
      t.appendChild(e);
      const o3 = {
        text: d.isEmpty(t) ? "" : t.innerHTML
      };
      return this.insert({ data: o3 });
    }
    /**
     * Returns Block by passed index
     *
     * @param {number} index - index to get. -1 to get last
     * @returns {Block}
     */
    getBlockByIndex(e) {
      return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
    }
    /**
     * Returns an index for passed Block
     *
     * @param block - block to find index
     */
    getBlockIndex(e) {
      return this._blocks.indexOf(e);
    }
    /**
     * Returns the Block by passed id
     *
     * @param id - id of block to get
     * @returns {Block}
     */
    getBlockById(e) {
      return this._blocks.array.find((t) => t.id === e);
    }
    /**
     * Get Block instance by html element
     *
     * @param {Node} element - html element to get Block by
     */
    getBlock(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = this._blocks.nodes, o3 = e.closest(`.${D.CSS.wrapper}`), i2 = t.indexOf(o3);
      if (i2 >= 0)
        return this._blocks[i2];
    }
    /**
     * 1) Find first-level Block from passed child Node
     * 2) Mark it as current
     *
     * @param {Node} childNode - look ahead from this node.
     * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
     */
    setCurrentBlockByChildNode(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      if (!t)
        return;
      const o3 = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
      if (o3 != null && o3.isEqualNode(this.Editor.UI.nodes.wrapper))
        return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
     * Return block which contents passed node
     *
     * @param {Node} childNode - node to get Block by
     * @returns {Block}
     */
    getBlockByChildNode(e) {
      if (!e || !(e instanceof Node))
        return;
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      return this.blocks.find((o3) => o3.holder === t);
    }
    /**
     * Swap Blocks Position
     *
     * @param {number} fromIndex - index of first block
     * @param {number} toIndex - index of second block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      this._blocks.swap(e, t), this.currentBlockIndex = t;
    }
    /**
     * Move a block to a new index
     *
     * @param {number} toIndex - index where to move Block
     * @param {number} fromIndex - index of Block to move
     */
    move(e, t = this.currentBlockIndex) {
      if (isNaN(e) || isNaN(t)) {
        I("Warning during 'move' call: incorrect indices provided.", "warn");
        return;
      }
      if (!this.validateIndex(e) || !this.validateIndex(t)) {
        I("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
        return;
      }
      this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Ji, this.currentBlock, {
        fromIndex: t,
        toIndex: e
      });
    }
    /**
     * Converts passed Block to the new Tool
     * Uses Conversion Config
     *
     * @param blockToConvert - Block that should be converted
     * @param targetToolName - name of the Tool to convert to
     * @param blockDataOverrides - optional new Block data overrides
     */
    async convert(e, t, o3) {
      if (!await e.save())
        throw new Error("Could not convert Block. Failed to extract original Block data.");
      const s4 = this.Editor.Tools.blockTools.get(t);
      if (!s4)
        throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
      const r2 = await e.exportDataAsString(), l3 = q(
        r2,
        s4.sanitizeConfig
      );
      let a5 = xt(l3, s4.conversionConfig);
      return o3 && (a5 = Object.assign(a5, o3)), this.replace(e, s4.name, a5);
    }
    /**
     * Sets current Block Index -1 which means unknown
     * and clear highlights
     */
    unsetCurrentBlock() {
      this.currentBlockIndex = -1;
    }
    /**
     * Clears Editor
     *
     * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
     *                                             we don't need to add an empty default block
     *                                        2) in api.blocks.clear we should add empty block
     */
    async clear(e = false) {
      const t = new Qi();
      this.blocks.forEach((o3) => {
        t.add(async () => {
          await this.removeBlock(o3, false);
        });
      }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
    }
    /**
     * Cleans up all the block tools' resources
     * This is called when editor is destroyed
     */
    async destroy() {
      await Promise.all(this.blocks.map((e) => e.destroy()));
    }
    /**
     * Bind Block events
     *
     * @param {Block} block - Block to which event should be bound
     */
    bindBlockEvents(e) {
      const { BlockEvents: t } = this.Editor;
      this.readOnlyMutableListeners.on(e.holder, "keydown", (o3) => {
        t.keydown(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o3) => {
        t.keyup(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o3) => {
        t.dragOver(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o3) => {
        t.dragLeave(o3);
      }), e.on("didMutated", (o3) => this.blockDidMutated(St, o3, {
        index: this.getBlockIndex(o3)
      }));
    }
    /**
     * Disable mutable handlers and bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Enables all module handlers and bindings for all Blocks
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(
        document,
        "cut",
        (e) => this.Editor.BlockEvents.handleCommandX(e)
      ), this.blocks.forEach((e) => {
        this.bindBlockEvents(e);
      });
    }
    /**
     * Validates that the given index is not lower than 0 or higher than the amount of blocks
     *
     * @param {number} index - index of blocks array to validate
     * @returns {boolean}
     */
    validateIndex(e) {
      return !(e < 0 || e >= this._blocks.length);
    }
    /**
     * Block mutation callback
     *
     * @param mutationType - what happened with block
     * @param block - mutated block
     * @param detailData - additional data to pass with change event
     */
    blockDidMutated(e, t, o3) {
      const i2 = new CustomEvent(e, {
        detail: {
          target: new G(t),
          ...o3
        }
      });
      return this.eventsDispatcher.emit(Dt, {
        event: i2
      }), t;
    }
  };
  var ts = class extends y {
    constructor() {
      super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
    }
    /**
     * Sanitizer Config
     *
     * @returns {SanitizerConfig}
     */
    get sanitizerConfig() {
      return {
        p: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        ol: {},
        ul: {},
        li: {},
        br: true,
        img: {
          src: true,
          width: true,
          height: true
        },
        a: {
          href: true
        },
        b: {},
        i: {},
        u: {}
      };
    }
    /**
     * Flag that identifies all Blocks selection
     *
     * @returns {boolean}
     */
    get allBlocksSelected() {
      const { BlockManager: e } = this.Editor;
      return e.blocks.every((t) => t.selected === true);
    }
    /**
     * Set selected all blocks
     *
     * @param {boolean} state - state to set
     */
    set allBlocksSelected(e) {
      const { BlockManager: t } = this.Editor;
      t.blocks.forEach((o3) => {
        o3.selected = e;
      }), this.clearCache();
    }
    /**
     * Flag that identifies any Block selection
     *
     * @returns {boolean}
     */
    get anyBlockSelected() {
      const { BlockManager: e } = this.Editor;
      return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === true)), this.anyBlockSelectedCache;
    }
    /**
     * Return selected Blocks array
     *
     * @returns {Block[]}
     */
    get selectedBlocks() {
      return this.Editor.BlockManager.blocks.filter((e) => e.selected);
    }
    /**
     * Module Preparation
     * Registers Shortcuts CMD+A and CMD+C
     * to select all and copy them
     */
    prepare() {
      this.selection = new b(), he.add({
        name: "CMD+A",
        handler: (e) => {
          const { BlockManager: t, ReadOnly: o3 } = this.Editor;
          if (o3.isEnabled) {
            e.preventDefault(), this.selectAllBlocks();
            return;
          }
          t.currentBlock && this.handleCommandA(e);
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Toggle read-only state
     *
     *  - Remove all ranges
     *  - Unselect all Blocks
     */
    toggleReadOnly() {
      b.get().removeAllRanges(), this.allBlocksSelected = false;
    }
    /**
     * Remove selection of Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    unSelectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor;
      let o3;
      isNaN(e) ? o3 = t.currentBlock : o3 = t.getBlockByIndex(e), o3.selected = false, this.clearCache();
    }
    /**
     * Clear selection from Blocks
     *
     * @param {Event} reason - event caused clear of selection
     * @param {boolean} restoreSelection - if true, restore saved selection
     */
    clearSelection(e, t = false) {
      const { BlockManager: o3, Caret: i2, RectangleSelection: s4 } = this.Editor;
      this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
      const r2 = e && e instanceof KeyboardEvent, l3 = r2 && Mt(e.keyCode);
      if (this.anyBlockSelected && r2 && l3 && !b.isSelectionExists) {
        const a5 = o3.removeSelectedBlocks();
        o3.insertDefaultBlockAtIndex(a5, true), i2.setToBlock(o3.currentBlock), Oe(() => {
          const c5 = e.key;
          i2.insertContentAtCaretPosition(c5.length > 1 ? "" : c5);
        }, 20)();
      }
      if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s4.isRectActivated()) {
        this.Editor.RectangleSelection.clearSelection();
        return;
      }
      t && this.selection.restore(), this.allBlocksSelected = false;
    }
    /**
     * Reduce each Block and copy its content
     *
     * @param {ClipboardEvent} e - copy/cut event
     * @returns {Promise<void>}
     */
    copySelectedBlocks(e) {
      e.preventDefault();
      const t = d.make("div");
      this.selectedBlocks.forEach((s4) => {
        const r2 = q(s4.holder.innerHTML, this.sanitizerConfig), l3 = d.make("p");
        l3.innerHTML = r2, t.appendChild(l3);
      });
      const o3 = Array.from(t.childNodes).map((s4) => s4.textContent).join(`

`), i2 = t.innerHTML;
      return e.clipboardData.setData("text/plain", o3), e.clipboardData.setData("text/html", i2), Promise.all(this.selectedBlocks.map((s4) => s4.save())).then((s4) => {
        try {
          e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s4));
        } catch {
        }
      });
    }
    /**
     * Select Block by its index
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    selectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor, o3 = t.getBlockByIndex(e);
      o3 !== void 0 && this.selectBlock(o3);
    }
    /**
     * Select passed Block
     *
     * @param {Block} block - Block to select
     */
    selectBlock(e) {
      this.selection.save(), b.get().removeAllRanges(), e.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
    }
    /**
     * Remove selection from passed Block
     *
     * @param {Block} block - Block to unselect
     */
    unselectBlock(e) {
      e.selected = false, this.clearCache();
    }
    /**
     * Clear anyBlockSelected cache
     */
    clearCache() {
      this.anyBlockSelectedCache = null;
    }
    /**
     * Module destruction
     * De-registers Shortcut CMD+A
     */
    destroy() {
      he.remove(this.Editor.UI.nodes.redactor, "CMD+A");
    }
    /**
     * First CMD+A selects all input content by native behaviour,
     * next CMD+A keypress selects all blocks
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    handleCommandA(e) {
      if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      const t = this.Editor.BlockManager.getBlock(e.target), o3 = t.inputs;
      if (o3.length > 1 && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      if (o3.length === 1 && !this.needToSelectAll) {
        this.needToSelectAll = true;
        return;
      }
      this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = true);
    }
    /**
     * Select All Blocks
     * Each Block has selected setter that makes Block copyable
     */
    selectAllBlocks() {
      this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
    }
  };
  var Re = class _Re extends y {
    /**
     * Allowed caret positions in input
     *
     * @static
     * @returns {{START: string, END: string, DEFAULT: string}}
     */
    get positions() {
      return {
        START: "start",
        END: "end",
        DEFAULT: "default"
      };
    }
    /**
     * Elements styles that can be useful for Caret Module
     */
    static get CSS() {
      return {
        shadowCaret: "cdx-shadow-caret"
      };
    }
    /**
     * Method gets Block instance and puts caret to the text node with offset
     * There two ways that method applies caret position:
     *   - first found text node: sets at the beginning, but you can pass an offset
     *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
     *
     * @param {Block} block - Block class
     * @param {string} position - position where to set caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToBlock(e, t = this.positions.DEFAULT, o3 = 0) {
      var c5;
      const { BlockManager: i2, BlockSelection: s4 } = this.Editor;
      if (s4.clearSelection(), !e.focusable) {
        (c5 = window.getSelection()) == null || c5.removeAllRanges(), s4.selectBlock(e), i2.currentBlock = e;
        return;
      }
      let r2;
      switch (t) {
        case this.positions.START:
          r2 = e.firstInput;
          break;
        case this.positions.END:
          r2 = e.lastInput;
          break;
        default:
          r2 = e.currentInput;
      }
      if (!r2)
        return;
      const l3 = d.getDeepestNode(r2, t === this.positions.END), a5 = d.getContentLength(l3);
      switch (true) {
        case t === this.positions.START:
          o3 = 0;
          break;
        case t === this.positions.END:
        case o3 > a5:
          o3 = a5;
          break;
      }
      this.set(l3, o3), i2.setCurrentBlockByChildNode(e.holder), i2.currentBlock.currentInput = r2;
    }
    /**
     * Set caret to the current input of current Block.
     *
     * @param {HTMLElement} input - input where caret should be set
     * @param {string} position - position of the caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToInput(e, t = this.positions.DEFAULT, o3 = 0) {
      const { currentBlock: i2 } = this.Editor.BlockManager, s4 = d.getDeepestNode(e);
      switch (t) {
        case this.positions.START:
          this.set(s4, 0);
          break;
        case this.positions.END:
          this.set(s4, d.getContentLength(s4));
          break;
        default:
          o3 && this.set(s4, o3);
      }
      i2.currentInput = e;
    }
    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    set(e, t = 0) {
      const { top: i2, bottom: s4 } = b.setCursor(e, t), { innerHeight: r2 } = window;
      i2 < 0 ? window.scrollBy(0, i2 - 30) : s4 > r2 && window.scrollBy(0, s4 - r2 + 30);
    }
    /**
     * Set Caret to the last Block
     * If last block is not empty, append another empty block
     */
    setToTheLastBlock() {
      const e = this.Editor.BlockManager.lastBlock;
      if (e)
        if (e.tool.isDefault && e.isEmpty)
          this.setToBlock(e);
        else {
          const t = this.Editor.BlockManager.insertAtEnd();
          this.setToBlock(t);
        }
    }
    /**
     * Extract content fragment of current Block from Caret position to the end of the Block
     */
    extractFragmentFromCaretPosition() {
      const e = b.get();
      if (e.rangeCount) {
        const t = e.getRangeAt(0), o3 = this.Editor.BlockManager.currentBlock.currentInput;
        if (t.deleteContents(), o3)
          if (d.isNativeInput(o3)) {
            const i2 = o3, s4 = document.createDocumentFragment(), r2 = i2.value.substring(0, i2.selectionStart), l3 = i2.value.substring(i2.selectionStart);
            return s4.textContent = l3, i2.value = r2, s4;
          } else {
            const i2 = t.cloneRange();
            return i2.selectNodeContents(o3), i2.setStart(t.endContainer, t.endOffset), i2.extractContents();
          }
      }
    }
    /**
     * Set's caret to the next Block or Tool`s input
     * Before moving caret, we should check if caret position is at the end of Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigateNext(e = false) {
      const { BlockManager: t } = this.Editor, { currentBlock: o3, nextBlock: i2 } = t;
      if (o3 === void 0)
        return false;
      const { nextInput: s4, currentInput: r2 } = o3, l3 = r2 !== void 0 ? Ae(r2) : void 0;
      let a5 = i2;
      const c5 = e || l3 || !o3.focusable;
      if (s4 && c5)
        return this.setToInput(s4, this.positions.START), true;
      if (a5 === null) {
        if (o3.tool.isDefault || !c5)
          return false;
        a5 = t.insertAtEnd();
      }
      return c5 ? (this.setToBlock(a5, this.positions.START), true) : false;
    }
    /**
     * Set's caret to the previous Tool`s input or Block
     * Before moving caret, we should check if caret position is start of the Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigatePrevious(e = false) {
      const { currentBlock: t, previousBlock: o3 } = this.Editor.BlockManager;
      if (!t)
        return false;
      const { previousInput: i2, currentInput: s4 } = t, r2 = s4 !== void 0 ? Me(s4) : void 0, l3 = e || r2 || !t.focusable;
      return i2 && l3 ? (this.setToInput(i2, this.positions.END), true) : o3 !== null && l3 ? (this.setToBlock(o3, this.positions.END), true) : false;
    }
    /**
     * Inserts shadow element after passed element where caret can be placed
     *
     * @param {Element} element - element after which shadow caret should be inserted
     */
    createShadow(e) {
      const t = document.createElement("span");
      t.classList.add(_Re.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
    }
    /**
     * Restores caret position
     *
     * @param {HTMLElement} element - element where caret should be restored
     */
    restoreCaret(e) {
      const t = e.querySelector(`.${_Re.CSS.shadowCaret}`);
      if (!t)
        return;
      new b().expandToTag(t);
      const i2 = document.createRange();
      i2.selectNode(t), i2.extractContents();
    }
    /**
     * Inserts passed content at caret position
     *
     * @param {string} content - content to insert
     */
    insertContentAtCaretPosition(e) {
      const t = document.createDocumentFragment(), o3 = document.createElement("div"), i2 = b.get(), s4 = b.range;
      o3.innerHTML = e, Array.from(o3.childNodes).forEach((c5) => t.appendChild(c5)), t.childNodes.length === 0 && t.appendChild(new Text());
      const r2 = t.lastChild;
      s4.deleteContents(), s4.insertNode(t);
      const l3 = document.createRange(), a5 = r2.nodeType === Node.TEXT_NODE ? r2 : r2.firstChild;
      a5 !== null && a5.textContent !== null && l3.setStart(a5, a5.textContent.length), i2.removeAllRanges(), i2.addRange(l3);
    }
  };
  var os = class extends y {
    constructor() {
      super(...arguments), this.onMouseUp = () => {
        this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
      }, this.onMouseOver = (e) => {
        const { BlockManager: t, BlockSelection: o3 } = this.Editor;
        if (e.relatedTarget === null && e.target === null)
          return;
        const i2 = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s4 = t.getBlockByChildNode(e.target);
        if (!(!i2 || !s4) && s4 !== i2) {
          if (i2 === this.firstSelectedBlock) {
            b.get().removeAllRanges(), i2.selected = true, s4.selected = true, o3.clearCache();
            return;
          }
          if (s4 === this.firstSelectedBlock) {
            i2.selected = false, s4.selected = false, o3.clearCache();
            return;
          }
          this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i2, s4), this.lastSelectedBlock = s4;
        }
      };
    }
    /**
     * Module preparation
     *
     * @returns {Promise}
     */
    async prepare() {
      this.listeners.on(document, "mousedown", (e) => {
        this.enableCrossBlockSelection(e);
      });
    }
    /**
     * Sets up listeners
     *
     * @param {MouseEvent} event - mouse down event
     */
    watchSelection(e) {
      if (e.button !== wo.LEFT)
        return;
      const { BlockManager: t } = this.Editor;
      this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
     * Return boolean is cross block selection started:
     * there should be at least 2 selected blocks
     */
    get isCrossBlockSelectionStarted() {
      return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
    }
    /**
     * Change selection state of the next Block
     * Used for CBS via Shift + arrow keys
     *
     * @param {boolean} next - if true, toggle next block. Previous otherwise
     */
    toggleBlockSelectedState(e = true) {
      const { BlockManager: t, BlockSelection: o3 } = this.Editor;
      this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o3.clearCache(), b.get().removeAllRanges());
      const i2 = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s4 = t.blocks[i2];
      s4 && (this.lastSelectedBlock.selected !== s4.selected ? (s4.selected = true, o3.clearCache()) : (this.lastSelectedBlock.selected = false, o3.clearCache()), this.lastSelectedBlock = s4, this.Editor.InlineToolbar.close(), s4.holder.scrollIntoView({
        block: "nearest"
      }));
    }
    /**
     * Clear saved state
     *
     * @param {Event} reason - event caused clear of selection
     */
    clear(e) {
      const { BlockManager: t, BlockSelection: o3, Caret: i2 } = this.Editor, s4 = t.blocks.indexOf(this.firstSelectedBlock), r2 = t.blocks.indexOf(this.lastSelectedBlock);
      if (o3.anyBlockSelected && s4 > -1 && r2 > -1 && e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case w.DOWN:
          case w.RIGHT:
            i2.setToBlock(t.blocks[Math.max(s4, r2)], i2.positions.END);
            break;
          case w.UP:
          case w.LEFT:
            i2.setToBlock(t.blocks[Math.min(s4, r2)], i2.positions.START);
            break;
          default:
            i2.setToBlock(t.blocks[Math.max(s4, r2)], i2.positions.END);
        }
      this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
     * Enables Cross Block Selection
     *
     * @param {MouseEvent} event - mouse down event
     */
    enableCrossBlockSelection(e) {
      const { UI: t } = this.Editor;
      b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Change blocks selection state between passed two blocks.
     *
     * @param {Block} firstBlock - first block in range
     * @param {Block} lastBlock - last block in range
     */
    toggleBlocksSelectedState(e, t) {
      const { BlockManager: o3, BlockSelection: i2 } = this.Editor, s4 = o3.blocks.indexOf(e), r2 = o3.blocks.indexOf(t), l3 = e.selected !== t.selected;
      for (let a5 = Math.min(s4, r2); a5 <= Math.max(s4, r2); a5++) {
        const c5 = o3.blocks[a5];
        c5 !== this.firstSelectedBlock && c5 !== (l3 ? e : t) && (o3.blocks[a5].selected = !o3.blocks[a5].selected, i2.clearCache());
      }
    }
  };
  var is = class extends y {
    constructor() {
      super(...arguments), this.isStartedAtEditor = false;
    }
    /**
     * Toggle read-only state
     *
     * if state is true:
     *  - disable all drag-n-drop event handlers
     *
     * if state is false:
     *  - restore drag-n-drop event handlers
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Add drag events listeners to editor zone
     */
    enableModuleBindings() {
      const { UI: e } = this.Editor;
      this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
        await this.processDrop(t);
      }, true), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
        this.processDragStart();
      }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
        this.processDragOver(t);
      }, true);
    }
    /**
     * Unbind drag-n-drop event handlers
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Handle drop event
     *
     * @param {DragEvent} dropEvent - drop event
     */
    async processDrop(e) {
      const {
        BlockManager: t,
        Paste: o3,
        Caret: i2
      } = this.Editor;
      e.preventDefault(), t.blocks.forEach((r2) => {
        r2.dropTarget = false;
      }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
      const s4 = t.setCurrentBlockByChildNode(e.target);
      if (s4)
        this.Editor.Caret.setToBlock(s4, i2.positions.END);
      else {
        const r2 = t.setCurrentBlockByChildNode(t.lastBlock.holder);
        this.Editor.Caret.setToBlock(r2, i2.positions.END);
      }
      await o3.processDataTransfer(e.dataTransfer, true);
    }
    /**
     * Handle drag start event
     */
    processDragStart() {
      b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
    }
    /**
     * @param {DragEvent} dragEvent - drag event
     */
    processDragOver(e) {
      e.preventDefault();
    }
  };
  var ss = 180;
  var ns = 400;
  var rs = class extends y {
    /**
     * Prepare the module
     *
     * @param options - options used by the modification observer module
     * @param options.config - Editor configuration object
     * @param options.eventsDispatcher - common Editor event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ns, this.mutationObserver = new MutationObserver((o3) => {
        this.redactorChanged(o3);
      }), this.eventsDispatcher.on(Dt, (o3) => {
        this.particularBlockChanged(o3.event);
      }), this.eventsDispatcher.on(Rt, () => {
        this.disable();
      }), this.eventsDispatcher.on(Ft, () => {
        this.enable();
      });
    }
    /**
     * Enables onChange event
     */
    enable() {
      this.mutationObserver.observe(
        this.Editor.UI.nodes.redactor,
        {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        }
      ), this.disabled = false;
    }
    /**
     * Disables onChange event
     */
    disable() {
      this.mutationObserver.disconnect(), this.disabled = true;
    }
    /**
     * Call onChange event passed to Editor.js configuration
     *
     * @param event - some of our custom change events
     */
    particularBlockChanged(e) {
      this.disabled || !O(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
        let t;
        this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
      }, this.batchTime));
    }
    /**
     * Fired on every blocks wrapper dom change
     *
     * @param mutations - mutations happened
     */
    redactorChanged(e) {
      this.eventsDispatcher.emit(Je, {
        mutations: e
      });
    }
  };
  var ro = class lo extends y {
    constructor() {
      super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
        try {
          const t = e.create({}, {}, false);
          if (e.pasteConfig === false) {
            this.exceptionList.push(e.name);
            return;
          }
          if (!O(t.onPaste))
            return;
          this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
        } catch (t) {
          I(
            `Paste handling for \xAB${e.name}\xBB Tool hasn't been set up because of the error`,
            "warn",
            t
          );
        }
      }, this.handlePasteEvent = async (e) => {
        const { BlockManager: t, Toolbar: o3 } = this.Editor, i2 = t.setCurrentBlockByChildNode(e.target);
        !i2 || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i2 && this.exceptionList.includes(i2.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o3.close());
      };
    }
    /**
     * Set onPaste callback and collect tools` paste configurations
     */
    async prepare() {
      this.processTools();
    }
    /**
     * Set read-only state
     *
     * @param {boolean} readOnlyEnabled - read only flag value
     */
    toggleReadOnly(e) {
      e ? this.unsetCallback() : this.setCallback();
    }
    /**
     * Handle pasted or dropped data transfer object
     *
     * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
     * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
     */
    async processDataTransfer(e, t = false) {
      const { Tools: o3 } = this.Editor, i2 = e.types;
      if ((i2.includes ? i2.includes("Files") : i2.contains("Files")) && !V(this.toolsFiles)) {
        await this.processFiles(e.files);
        return;
      }
      const r2 = e.getData(this.MIME_TYPE), l3 = e.getData("text/plain");
      let a5 = e.getData("text/html");
      if (r2)
        try {
          this.insertEditorJSData(JSON.parse(r2));
          return;
        } catch {
        }
      t && l3.trim() && a5.trim() && (a5 = "<p>" + (a5.trim() ? a5 : l3) + "</p>");
      const c5 = Object.keys(this.toolsTags).reduce((p3, g5) => (p3[g5.toLowerCase()] = this.toolsTags[g5].sanitizationConfig ?? {}, p3), {}), u2 = Object.assign({}, c5, o3.getAllInlineToolsSanitizeConfig(), { br: {} }), h5 = q(a5, u2);
      !h5.trim() || h5.trim() === l3 || !d.isHTMLString(h5) ? await this.processText(l3) : await this.processText(h5, true);
    }
    /**
     * Process pasted text and divide them into Blocks
     *
     * @param {string} data - text to process. Can be HTML or plain.
     * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
     */
    async processText(e, t = false) {
      const { Caret: o3, BlockManager: i2 } = this.Editor, s4 = t ? this.processHTML(e) : this.processPlain(e);
      if (!s4.length)
        return;
      if (s4.length === 1) {
        s4[0].isBlock ? this.processSingleBlock(s4.pop()) : this.processInlinePaste(s4.pop());
        return;
      }
      const l3 = i2.currentBlock && i2.currentBlock.tool.isDefault && i2.currentBlock.isEmpty;
      s4.map(
        async (a5, c5) => this.insertBlock(a5, c5 === 0 && l3)
      ), i2.currentBlock && o3.setToBlock(i2.currentBlock, o3.positions.END);
    }
    /**
     * Set onPaste callback handler
     */
    setCallback() {
      this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Unset onPaste callback handler
     */
    unsetCallback() {
      this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Get and process tool`s paste configs
     */
    processTools() {
      const e = this.Editor.Tools.blockTools;
      Array.from(e.values()).forEach(this.processTool);
    }
    /**
     * Get tags name list from either tag name or sanitization config.
     *
     * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
     * @returns {string[]} array of tags.
     */
    collectTagNames(e) {
      return Q(e) ? [e] : R(e) ? Object.keys(e) : [];
    }
    /**
     * Get tags to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getTagsConfig(e) {
      if (e.pasteConfig === false)
        return;
      const t = e.pasteConfig.tags || [], o3 = [];
      t.forEach((i2) => {
        const s4 = this.collectTagNames(i2);
        o3.push(...s4), s4.forEach((r2) => {
          if (Object.prototype.hasOwnProperty.call(this.toolsTags, r2)) {
            I(
              `Paste handler for \xAB${e.name}\xBB Tool on \xAB${r2}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[r2].tool.name}\xBB Tool.`,
              "warn"
            );
            return;
          }
          const l3 = R(i2) ? i2[r2] : null;
          this.toolsTags[r2.toUpperCase()] = {
            tool: e,
            sanitizationConfig: l3
          };
        });
      }), this.tagsByTool[e.name] = o3.map((i2) => i2.toUpperCase());
    }
    /**
     * Get files` types and extensions to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getFilesConfig(e) {
      if (e.pasteConfig === false)
        return;
      const { files: t = {} } = e.pasteConfig;
      let { extensions: o3, mimeTypes: i2 } = t;
      !o3 && !i2 || (o3 && !Array.isArray(o3) && (I(`\xABextensions\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), o3 = []), i2 && !Array.isArray(i2) && (I(`\xABmimeTypes\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), i2 = []), i2 && (i2 = i2.filter((s4) => To(s4) ? true : (I(`MIME type value \xAB${s4}\xBB for the \xAB${e.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e.name] = {
        extensions: o3 || [],
        mimeTypes: i2 || []
      });
    }
    /**
     * Get RegExp patterns to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getPatternsConfig(e) {
      e.pasteConfig === false || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o3]) => {
        o3 instanceof RegExp || I(
          `Pattern ${o3} for \xAB${e.name}\xBB Tool is skipped because it should be a Regexp instance.`,
          "warn"
        ), this.toolsPatterns.push({
          key: t,
          pattern: o3,
          tool: e
        });
      });
    }
    /**
     * Check if browser behavior suits better
     *
     * @param {EventTarget} element - element where content has been pasted
     * @returns {boolean}
     */
    isNativeBehaviour(e) {
      return d.isNativeInput(e);
    }
    /**
     * Get files from data transfer object and insert related Tools
     *
     * @param {FileList} items - pasted or dropped items
     */
    async processFiles(e) {
      const { BlockManager: t } = this.Editor;
      let o3;
      o3 = await Promise.all(
        Array.from(e).map((r2) => this.processFile(r2))
      ), o3 = o3.filter((r2) => !!r2);
      const s4 = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
      o3.forEach(
        (r2, l3) => {
          t.paste(r2.type, r2.event, l3 === 0 && s4);
        }
      );
    }
    /**
     * Get information about file and find Tool to handle it
     *
     * @param {File} file - file to process
     */
    async processFile(e) {
      const t = Bo(e), o3 = Object.entries(this.toolsFiles).find(([r2, { mimeTypes: l3, extensions: a5 }]) => {
        const [c5, u2] = e.type.split("/"), h5 = a5.find((g5) => g5.toLowerCase() === t.toLowerCase()), p3 = l3.find((g5) => {
          const [f3, k4] = g5.split("/");
          return f3 === c5 && (k4 === u2 || k4 === "*");
        });
        return !!h5 || !!p3;
      });
      if (!o3)
        return;
      const [i2] = o3;
      return {
        event: this.composePasteEvent("file", {
          file: e
        }),
        type: i2
      };
    }
    /**
     * Split HTML string to blocks and return it as array of Block data
     *
     * @param {string} innerHTML - html string to process
     * @returns {PasteData[]}
     */
    processHTML(e) {
      const { Tools: t } = this.Editor, o3 = d.make("DIV");
      return o3.innerHTML = e, this.getNodes(o3).map((s4) => {
        let r2, l3 = t.defaultTool, a5 = false;
        switch (s4.nodeType) {
          case Node.DOCUMENT_FRAGMENT_NODE:
            r2 = d.make("div"), r2.appendChild(s4);
            break;
          case Node.ELEMENT_NODE:
            r2 = s4, a5 = true, this.toolsTags[r2.tagName] && (l3 = this.toolsTags[r2.tagName].tool);
            break;
        }
        const { tags: c5 } = l3.pasteConfig || { tags: [] }, u2 = c5.reduce((g5, f3) => (this.collectTagNames(f3).forEach((C5) => {
          const S5 = R(f3) ? f3[C5] : null;
          g5[C5.toLowerCase()] = S5 || {};
        }), g5), {}), h5 = Object.assign({}, u2, l3.baseSanitizeConfig);
        if (r2.tagName.toLowerCase() === "table") {
          const g5 = q(r2.outerHTML, h5);
          r2 = d.make("div", void 0, {
            innerHTML: g5
          }).firstChild;
        } else
          r2.innerHTML = q(r2.innerHTML, h5);
        const p3 = this.composePasteEvent("tag", {
          data: r2
        });
        return {
          content: r2,
          isBlock: a5,
          tool: l3.name,
          event: p3
        };
      }).filter((s4) => {
        const r2 = d.isEmpty(s4.content), l3 = d.isSingleTag(s4.content);
        return !r2 || l3;
      });
    }
    /**
     * Split plain text by new line symbols and return it as array of Block data
     *
     * @param {string} plain - string to process
     * @returns {PasteData[]}
     */
    processPlain(e) {
      const { defaultBlock: t } = this.config;
      if (!e)
        return [];
      const o3 = t;
      return e.split(/\r?\n/).filter((i2) => i2.trim()).map((i2) => {
        const s4 = d.make("div");
        s4.textContent = i2;
        const r2 = this.composePasteEvent("tag", {
          data: s4
        });
        return {
          content: s4,
          tool: o3,
          isBlock: false,
          event: r2
        };
      });
    }
    /**
     * Process paste of single Block tool content
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processSingleBlock(e) {
      const { Caret: t, BlockManager: o3 } = this.Editor, { currentBlock: i2 } = o3;
      if (!i2 || e.tool !== i2.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
        this.insertBlock(e, (i2 == null ? void 0 : i2.tool.isDefault) && i2.isEmpty);
        return;
      }
      t.insertContentAtCaretPosition(e.content.innerHTML);
    }
    /**
     * Process paste to single Block:
     * 1. Find patterns` matches
     * 2. Insert new block if it is not the same type as current one
     * 3. Just insert text if there is no substitutions
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processInlinePaste(e) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { content: i2 } = e;
      if (t.currentBlock && t.currentBlock.tool.isDefault && i2.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
        const r2 = await this.processPattern(i2.textContent);
        if (r2) {
          const l3 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, a5 = t.paste(r2.tool, r2.event, l3);
          o3.setToBlock(a5, o3.positions.END);
          return;
        }
      }
      if (t.currentBlock && t.currentBlock.currentInput) {
        const r2 = t.currentBlock.tool.baseSanitizeConfig;
        document.execCommand(
          "insertHTML",
          false,
          q(i2.innerHTML, r2)
        );
      } else
        this.insertBlock(e);
    }
    /**
     * Get patterns` matches
     *
     * @param {string} text - text to process
     * @returns {Promise<{event: PasteEvent, tool: string}>}
     */
    async processPattern(e) {
      const t = this.toolsPatterns.find((i2) => {
        const s4 = i2.pattern.exec(e);
        return s4 ? e === s4.shift() : false;
      });
      return t ? {
        event: this.composePasteEvent("pattern", {
          key: t.key,
          data: e
        }),
        tool: t.tool.name
      } : void 0;
    }
    /**
     * Insert pasted Block content to Editor
     *
     * @param {PasteData} data - data to insert
     * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
     * @returns {void}
     */
    insertBlock(e, t = false) {
      const { BlockManager: o3, Caret: i2 } = this.Editor, { currentBlock: s4 } = o3;
      let r2;
      if (t && s4 && s4.isEmpty) {
        r2 = o3.paste(e.tool, e.event, true), i2.setToBlock(r2, i2.positions.END);
        return;
      }
      r2 = o3.paste(e.tool, e.event), i2.setToBlock(r2, i2.positions.END);
    }
    /**
     * Insert data passed as application/x-editor-js JSON
     *
     * @param {Array} blocks — Blocks' data to insert
     * @returns {void}
     */
    insertEditorJSData(e) {
      const { BlockManager: t, Caret: o3, Tools: i2 } = this.Editor;
      it(
        e,
        (r2) => i2.blockTools.get(r2).sanitizeConfig
      ).forEach(({ tool: r2, data: l3 }, a5) => {
        let c5 = false;
        a5 === 0 && (c5 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
        const u2 = t.insert({
          tool: r2,
          data: l3,
          replace: c5
        });
        o3.setToBlock(u2, o3.positions.END);
      });
    }
    /**
     * Fetch nodes from Element node
     *
     * @param {Node} node - current node
     * @param {Node[]} nodes - processed nodes
     * @param {Node} destNode - destination node
     */
    processElementNode(e, t, o3) {
      const i2 = Object.keys(this.toolsTags), s4 = e, { tool: r2 } = this.toolsTags[s4.tagName] || {}, l3 = this.tagsByTool[r2 == null ? void 0 : r2.name] || [], a5 = i2.includes(s4.tagName), c5 = d.blockElements.includes(s4.tagName.toLowerCase()), u2 = Array.from(s4.children).some(
        ({ tagName: p3 }) => i2.includes(p3) && !l3.includes(p3)
      ), h5 = Array.from(s4.children).some(
        ({ tagName: p3 }) => d.blockElements.includes(p3.toLowerCase())
      );
      if (!c5 && !a5 && !u2)
        return o3.appendChild(s4), [...t, o3];
      if (a5 && !u2 || c5 && !h5 && !u2)
        return [...t, o3, s4];
    }
    /**
     * Recursively divide HTML string to two types of nodes:
     * 1. Block element
     * 2. Document Fragments contained text and markup tags like a, b, i etc.
     *
     * @param {Node} wrapper - wrapper of paster HTML content
     * @returns {Node[]}
     */
    getNodes(e) {
      const t = Array.from(e.childNodes);
      let o3;
      const i2 = (s4, r2) => {
        if (d.isEmpty(r2) && !d.isSingleTag(r2))
          return s4;
        const l3 = s4[s4.length - 1];
        let a5 = new DocumentFragment();
        switch (l3 && d.isFragment(l3) && (a5 = s4.pop()), r2.nodeType) {
          case Node.ELEMENT_NODE:
            if (o3 = this.processElementNode(r2, s4, a5), o3)
              return o3;
            break;
          case Node.TEXT_NODE:
            return a5.appendChild(r2), [...s4, a5];
          default:
            return [...s4, a5];
        }
        return [...s4, ...Array.from(r2.childNodes).reduce(i2, [])];
      };
      return t.reduce(i2, []);
    }
    /**
     * Compose paste event with passed type and detail
     *
     * @param {string} type - event type
     * @param {PasteEventDetail} detail - event detail
     */
    composePasteEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  ro.PATTERN_PROCESSING_MAX_LENGTH = 450;
  var ls = ro;
  var as = class extends y {
    constructor() {
      super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = false;
    }
    /**
     * Returns state of read only mode
     */
    get isEnabled() {
      return this.readOnlyEnabled;
    }
    /**
     * Set initial state
     */
    async prepare() {
      const { Tools: e } = this.Editor, { blockTools: t } = e, o3 = [];
      Array.from(t.entries()).forEach(([i2, s4]) => {
        s4.isReadOnlySupported || o3.push(i2);
      }), this.toolsDontSupportReadOnly = o3, this.config.readOnly && o3.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, true);
    }
    /**
     * Set read-only mode or toggle current state
     * Call all Modules `toggleReadOnly` method and re-render Editor
     *
     * @param state - (optional) read-only state or toggle
     * @param isInitial - (optional) true when editor is initializing
     */
    async toggle(e = !this.readOnlyEnabled, t = false) {
      e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
      const o3 = this.readOnlyEnabled;
      this.readOnlyEnabled = e;
      for (const s4 in this.Editor)
        this.Editor[s4].toggleReadOnly && this.Editor[s4].toggleReadOnly(e);
      if (o3 === e)
        return this.readOnlyEnabled;
      if (t)
        return this.readOnlyEnabled;
      this.Editor.ModificationsObserver.disable();
      const i2 = await this.Editor.Saver.save();
      return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i2.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
    }
    /**
     * Throws an error about tools which don't support read-only mode
     */
    throwCriticalError() {
      throw new Pt(
        `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
      );
    }
  };
  var xe = class _xe extends y {
    constructor() {
      super(...arguments), this.isRectSelectionActivated = false, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = false, this.isScrolling = false, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        overlay: "codex-editor-overlay",
        overlayContainer: "codex-editor-overlay__container",
        rect: "codex-editor-overlay__rectangle",
        topScrollZone: "codex-editor-overlay__scroll-zone--top",
        bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
      };
    }
    /**
     * Module Preparation
     * Creating rect and hang handlers
     */
    prepare() {
      this.enableModuleBindings();
    }
    /**
     * Init rect params
     *
     * @param {number} pageX - X coord of mouse
     * @param {number} pageY - Y coord of mouse
     */
    startSelection(e, t) {
      const o3 = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
      o3.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
      const s4 = [
        `.${D.CSS.content}`,
        `.${this.Editor.Toolbar.CSS.toolbar}`,
        `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
      ], r2 = o3.closest("." + this.Editor.UI.CSS.editorWrapper), l3 = s4.some((a5) => !!o3.closest(a5));
      !r2 || l3 || (this.mousedown = true, this.startX = e, this.startY = t);
    }
    /**
     * Clear all params to end selection
     */
    endSelection() {
      this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
    }
    /**
     * is RectSelection Activated
     */
    isRectActivated() {
      return this.isRectSelectionActivated;
    }
    /**
     * Mark that selection is end
     */
    clearSelection() {
      this.isRectSelectionActivated = false;
    }
    /**
     * Sets Module necessary event handlers
     */
    enableModuleBindings() {
      const { container: e } = this.genHTML();
      this.listeners.on(e, "mousedown", (t) => {
        this.processMouseDown(t);
      }, false), this.listeners.on(document.body, "mousemove", Ve((t) => {
        this.processMouseMove(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseleave", () => {
        this.processMouseLeave();
      }), this.listeners.on(window, "scroll", Ve((t) => {
        this.processScroll(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseup", () => {
        this.processMouseUp();
      }, false);
    }
    /**
     * Handle mouse down events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseDown(e) {
      if (e.button !== this.MAIN_MOUSE_BUTTON)
        return;
      e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
    }
    /**
     * Handle mouse move events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseMove(e) {
      this.changingRectangle(e), this.scrollByZones(e.clientY);
    }
    /**
     * Handle mouse leave
     */
    processMouseLeave() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processScroll(e) {
      this.changingRectangle(e);
    }
    /**
     * Handle mouse up
     */
    processMouseUp() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * Scroll If mouse in scroll zone
     *
     * @param {number} clientY - Y coord of mouse
     */
    scrollByZones(e) {
      if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
        this.isScrolling = false;
        return;
      }
      this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true);
    }
    /**
     * Generates required HTML elements
     *
     * @returns {Object<string, Element>}
     */
    genHTML() {
      const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o3 = d.make("div", _xe.CSS.overlay, {}), i2 = d.make("div", _xe.CSS.overlayContainer, {}), s4 = d.make("div", _xe.CSS.rect, {});
      return i2.appendChild(s4), o3.appendChild(i2), t.appendChild(o3), this.overlayRectangle = s4, {
        container: t,
        overlay: o3
      };
    }
    /**
     * Activates scrolling if blockSelection is active and mouse is in scroll zone
     *
     * @param {number} speed - speed of scrolling
     */
    scrollVertical(e) {
      if (!(this.inScrollZone && this.mousedown))
        return;
      const t = window.pageYOffset;
      window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
        this.scrollVertical(e);
      }, 0);
    }
    /**
     * Handles the change in the rectangle and its effect
     *
     * @param {MouseEvent} event - mouse event
     */
    changingRectangle(e) {
      if (!this.mousedown)
        return;
      e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
      const { rightPos: t, leftPos: o3, index: i2 } = this.genInfoForMouseSelection(), s4 = this.startX > t && this.mouseX > t, r2 = this.startX < o3 && this.mouseX < o3;
      this.rectCrossesBlocks = !(s4 || r2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i2 !== void 0 && (this.trySelectNextBlock(i2), this.inverseSelection(), b.get().removeAllRanges());
    }
    /**
     * Shrink rect to singular point
     */
    shrinkRectangleToPoint() {
      this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
    }
    /**
     * Select or unselect all of blocks in array if rect is out or in selectable area
     */
    inverseSelection() {
      const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
      if (this.rectCrossesBlocks && !t)
        for (const o3 of this.stackOfSelected)
          this.Editor.BlockSelection.selectBlockByIndex(o3);
      if (!this.rectCrossesBlocks && t)
        for (const o3 of this.stackOfSelected)
          this.Editor.BlockSelection.unSelectBlockByIndex(o3);
    }
    /**
     * Updates size of rectangle
     */
    updateRectangleSize() {
      this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
    }
    /**
     * Collects information needed to determine the behavior of the rectangle
     *
     * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
     */
    genInfoForMouseSelection() {
      const t = document.body.offsetWidth / 2, o3 = this.mouseY - window.pageYOffset, i2 = document.elementFromPoint(t, o3), s4 = this.Editor.BlockManager.getBlockByChildNode(i2);
      let r2;
      s4 !== void 0 && (r2 = this.Editor.BlockManager.blocks.findIndex((h5) => h5.holder === s4.holder));
      const l3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + D.CSS.content), a5 = Number.parseInt(window.getComputedStyle(l3).width, 10) / 2, c5 = t - a5, u2 = t + a5;
      return {
        index: r2,
        leftPos: c5,
        rightPos: u2
      };
    }
    /**
     * Select block with index index
     *
     * @param index - index of block in redactor
     */
    addBlockInSelection(e) {
      this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
    }
    /**
     * Adds a block to the selection and determines which blocks should be selected
     *
     * @param {object} index - index of new block in the reactor
     */
    trySelectNextBlock(e) {
      const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o3 = this.stackOfSelected.length, i2 = 1, s4 = -1, r2 = 0;
      if (t)
        return;
      const l3 = this.stackOfSelected[o3 - 1] - this.stackOfSelected[o3 - 2] > 0;
      let a5 = r2;
      o3 > 1 && (a5 = l3 ? i2 : s4);
      const c5 = e > this.stackOfSelected[o3 - 1] && a5 === i2, u2 = e < this.stackOfSelected[o3 - 1] && a5 === s4, p3 = !(c5 || u2 || a5 === r2);
      if (!p3 && (e > this.stackOfSelected[o3 - 1] || this.stackOfSelected[o3 - 1] === void 0)) {
        let k4 = this.stackOfSelected[o3 - 1] + 1 || e;
        for (k4; k4 <= e; k4++)
          this.addBlockInSelection(k4);
        return;
      }
      if (!p3 && e < this.stackOfSelected[o3 - 1]) {
        for (let k4 = this.stackOfSelected[o3 - 1] - 1; k4 >= e; k4--)
          this.addBlockInSelection(k4);
        return;
      }
      if (!p3)
        return;
      let g5 = o3 - 1, f3;
      for (e > this.stackOfSelected[o3 - 1] ? f3 = () => e > this.stackOfSelected[g5] : f3 = () => e < this.stackOfSelected[g5]; f3(); )
        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g5]), this.stackOfSelected.pop(), g5--;
    }
  };
  var cs = class extends y {
    /**
     * Renders passed blocks as one batch
     *
     * @param blocksData - blocks to render
     */
    async render(e) {
      return new Promise((t) => {
        const { Tools: o3, BlockManager: i2 } = this.Editor;
        if (e.length === 0)
          i2.insert();
        else {
          const s4 = e.map(({ type: r2, data: l3, tunes: a5, id: c5 }) => {
            o3.available.has(r2) === false && (X(`Tool \xAB${r2}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), l3 = this.composeStubDataForTool(r2, l3, c5), r2 = o3.stubTool);
            let u2;
            try {
              u2 = i2.composeBlock({
                id: c5,
                tool: r2,
                data: l3,
                tunes: a5
              });
            } catch (h5) {
              I(`Block \xAB${r2}\xBB skipped because of plugins error`, "error", {
                data: l3,
                error: h5
              }), l3 = this.composeStubDataForTool(r2, l3, c5), r2 = o3.stubTool, u2 = i2.composeBlock({
                id: c5,
                tool: r2,
                data: l3,
                tunes: a5
              });
            }
            return u2;
          });
          i2.insertMany(s4);
        }
        window.requestIdleCallback(() => {
          t();
        }, { timeout: 2e3 });
      });
    }
    /**
     * Create data for the Stub Tool that will be used instead of unavailable tool
     *
     * @param tool - unavailable tool name to stub
     * @param data - data of unavailable block
     * @param [id] - id of unavailable block
     */
    composeStubDataForTool(e, t, o3) {
      const { Tools: i2 } = this.Editor;
      let s4 = e;
      if (i2.unavailable.has(e)) {
        const r2 = i2.unavailable.get(e).toolbox;
        r2 !== void 0 && r2[0].title !== void 0 && (s4 = r2[0].title);
      }
      return {
        savedData: {
          id: o3,
          type: e,
          data: t
        },
        title: s4
      };
    }
  };
  var ds = class extends y {
    /**
     * Composes new chain of Promises to fire them alternatelly
     *
     * @returns {OutputData}
     */
    async save() {
      const { BlockManager: e, Tools: t } = this.Editor, o3 = e.blocks, i2 = [];
      try {
        o3.forEach((l3) => {
          i2.push(this.getSavedData(l3));
        });
        const s4 = await Promise.all(i2), r2 = await it(s4, (l3) => t.blockTools.get(l3).sanitizeConfig);
        return this.makeOutput(r2);
      } catch (s4) {
        X("Saving failed due to the Error %o", "error", s4);
      }
    }
    /**
     * Saves and validates
     *
     * @param {Block} block - Editor's Tool
     * @returns {ValidatedData} - Tool's validated data
     */
    async getSavedData(e) {
      const t = await e.save(), o3 = t && await e.validate(t.data);
      return {
        ...t,
        isValid: o3
      };
    }
    /**
     * Creates output object with saved data, time and version of editor
     *
     * @param {ValidatedData} allExtractedData - data extracted from Blocks
     * @returns {OutputData}
     */
    makeOutput(e) {
      const t = [];
      return e.forEach(({ id: o3, tool: i2, data: s4, tunes: r2, isValid: l3 }) => {
        if (!l3) {
          I(`Block \xAB${i2}\xBB skipped because saved data is invalid`);
          return;
        }
        if (i2 === this.Editor.Tools.stubTool) {
          t.push(s4);
          return;
        }
        const a5 = {
          id: o3,
          type: i2,
          data: s4,
          ...!V(r2) && {
            tunes: r2
          }
        };
        t.push(a5);
      }), {
        time: +/* @__PURE__ */ new Date(),
        blocks: t,
        version: "2.30.7"
      };
    }
  };
  (function() {
    try {
      if (typeof document < "u") {
        var n2 = document.createElement("style");
        n2.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n2);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var hs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function us(n2) {
    const e = document.createElement("div");
    e.innerHTML = n2.trim();
    const t = document.createDocumentFragment();
    return t.append(...Array.from(e.childNodes)), t;
  }
  var ht = class _ht {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @returns {string}
     * @class
     */
    static get DEFAULT_PLACEHOLDER() {
      return "";
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {ParagraphData} params.data - previously saved data
     * @param {ParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    constructor({ data: e, config: t, api: o3, readOnly: i2 }) {
      this.api = o3, this.readOnly = i2, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-paragraph"
      }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : _ht.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? false;
    }
    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e) {
      if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
        return;
      const { textContent: t } = this._element;
      t === "" && (this._element.innerHTML = "");
    }
    /**
     * Create Tool's view
     *
     * @returns {HTMLDivElement}
     * @private
     */
    drawView() {
      const e = document.createElement("DIV");
      return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this._element = this.drawView(), this._element;
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {ParagraphData} data
     * @public
     */
    merge(e) {
      if (!this._element)
        return;
      this._data.text += e.text;
      const t = us(e.text);
      this._element.appendChild(t), this._element.normalize();
    }
    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return !(e.text.trim() === "" && !this._preserveBlank);
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML
      };
    }
    /**
     * On paste callback fired from Editor.
     *
     * @param {HTMLPasteEvent} event - event with pasted data
     */
    onPaste(e) {
      const t = {
        text: e.detail.data.innerHTML
      };
      this._data = t, window.requestAnimationFrame(() => {
        this._element && (this._element.innerHTML = this._data.text || "");
      });
    }
    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     * @returns {ConversionConfig}
     */
    static get conversionConfig() {
      return {
        export: "text",
        // to convert Paragraph to other block, use 'text' property of saved data
        import: "text"
        // to covert other block's exported string to Paragraph, fill 'text' property of tool data
      };
    }
    /**
     * Sanitizer rules
     * @returns {SanitizerConfig} - Edtior.js sanitizer config
     */
    static get sanitize() {
      return {
        text: {
          br: true
        }
      };
    }
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {PasteConfig} - Paragraph Paste Setting
     */
    static get pasteConfig() {
      return {
        tags: ["P"]
      };
    }
    /**
     * Icon and title for displaying at the Toolbox
     *
     * @returns {ToolboxConfig} - Paragraph Toolbox Setting
     */
    static get toolbox() {
      return {
        icon: hs,
        title: "Text"
      };
    }
  };
  var ut = class {
    constructor() {
      this.commandName = "bold";
    }
    /**
     * Sanitizer Rule
     * Leave <b> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        b: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return {
        icon: bi,
        name: "bold",
        onActivate: () => {
          document.execCommand(this.commandName);
        },
        isActive: () => document.queryCommandState(this.commandName)
      };
    }
    /**
     * Set a shortcut
     *
     * @returns {boolean}
     */
    get shortcut() {
      return "CMD+B";
    }
  };
  ut.isInline = true;
  ut.title = "Bold";
  var pt = class {
    constructor() {
      this.commandName = "italic", this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--italic"
      }, this.nodes = {
        button: null
      };
    }
    /**
     * Sanitizer Rule
     * Leave <i> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        i: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
    }
    /**
     * Wrap range with <i> tag
     */
    surround() {
      document.execCommand(this.commandName);
    }
    /**
     * Check selection and set activated state to button if there are <i> tag
     */
    checkState() {
      const e = document.queryCommandState(this.commandName);
      return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+I";
    }
  };
  pt.isInline = true;
  pt.title = "Italic";
  var ft = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--link",
        buttonUnlink: "ce-inline-tool--unlink",
        input: "ce-inline-tool-input",
        inputShowed: "ce-inline-tool-input--showed"
      }, this.nodes = {
        button: null,
        input: null
      }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
    }
    /**
     * Sanitizer Rule
     * Leave <a> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        a: {
          href: true,
          target: "_blank",
          rel: "nofollow"
        }
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = yt, this.nodes.button;
    }
    /**
     * Input for the link
     */
    renderActions() {
      return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
        e.keyCode === this.ENTER_KEY && this.enterPressed(e);
      }), this.nodes.input;
    }
    /**
     * Handle clicks on the Inline Toolbar icon
     *
     * @param {Range} range - range to wrap with link
     */
    surround(e) {
      if (e) {
        this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
        const t = this.selection.findParentTag("A");
        if (t) {
          this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
          return;
        }
      }
      this.toggleActions();
    }
    /**
     * Check selection and set activated state to button if there are <a> tag
     */
    checkState() {
      const e = this.selection.findParentTag("A");
      if (e) {
        this.nodes.button.innerHTML = Ii, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
        const t = e.getAttribute("href");
        this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
      } else
        this.nodes.button.innerHTML = yt, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
      return !!e;
    }
    /**
     * Function called with Inline Toolbar closing
     */
    clear() {
      this.closeActions();
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+K";
    }
    /**
     * Show/close link input
     */
    toggleActions() {
      this.inputOpened ? this.closeActions(false) : this.openActions(true);
    }
    /**
     * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
     */
    openActions(e = false) {
      this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = true;
    }
    /**
     * Close input
     *
     * @param {boolean} clearSavedSelection — we don't need to clear saved selection
     *                                        on toggle-clicks on the icon of opened Toolbar
     */
    closeActions(e = true) {
      if (this.selection.isFakeBackgroundEnabled) {
        const t = new b();
        t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
      }
      this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = false;
    }
    /**
     * Enter pressed on input
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    enterPressed(e) {
      let t = this.nodes.input.value || "";
      if (!t.trim()) {
        this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
        return;
      }
      if (!this.validateURL(t)) {
        this.notifier.show({
          message: "Pasted link is not valid.",
          style: "error"
        }), I("Incorrect Link pasted", "warn", t);
        return;
      }
      t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
    }
    /**
     * Detects if passed string is URL
     *
     * @param {string} str - string to validate
     * @returns {boolean}
     */
    validateURL(e) {
      return !/\s/.test(e);
    }
    /**
     * Process link before injection
     * - sanitize
     * - add protocol for links like 'google.com'
     *
     * @param {string} link - raw user input
     */
    prepareLink(e) {
      return e = e.trim(), e = this.addProtocol(e), e;
    }
    /**
     * Add 'http' protocol to the links like 'vc.ru', 'google.com'
     *
     * @param {string} link - string to process
     */
    addProtocol(e) {
      if (/^(\w+):(\/\/)?/.test(e))
        return e;
      const t = /^\/[^/\s]/.test(e), o3 = e.substring(0, 1) === "#", i2 = /^\/\/[^/\s]/.test(e);
      return !t && !o3 && !i2 && (e = "http://" + e), e;
    }
    /**
     * Inserts <a> tag with "href"
     *
     * @param {string} link - "href" value
     */
    insertLink(e) {
      const t = this.selection.findParentTag("A");
      t && this.selection.expandToTag(t), document.execCommand(this.commandLink, false, e);
    }
    /**
     * Removes <a> tag
     */
    unlink() {
      document.execCommand(this.commandUnlink);
    }
  };
  ft.isInline = true;
  ft.title = "Link";
  var ao = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
    }
    /**
     * Returns tool's UI config
     */
    async render() {
      const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
      if (t === void 0)
        return [];
      const o3 = this.toolsAPI.getBlockTools(), i2 = await zt(t, o3);
      if (i2.length === 0)
        return [];
      const s4 = i2.reduce((c5, u2) => {
        var h5;
        return (h5 = u2.toolbox) == null || h5.forEach((p3) => {
          c5.push({
            icon: p3.icon,
            title: z.t(K.toolNames, p3.title),
            name: u2.name,
            closeOnActivate: true,
            onActivate: async () => {
              const g5 = await this.blocksAPI.convert(t.id, u2.name, p3.data);
              this.caretAPI.setToBlock(g5, "end");
            }
          });
        }), c5;
      }, []), r2 = await t.getActiveToolboxEntry(), l3 = r2 !== void 0 ? r2.icon : Kt, a5 = !pe();
      return {
        icon: l3,
        name: "convert-to",
        hint: {
          title: this.i18nAPI.t("Convert to")
        },
        children: {
          searchable: a5,
          items: s4,
          onOpen: () => {
            a5 && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
          },
          onClose: () => {
            a5 && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
          }
        }
      };
    }
  };
  ao.isInline = true;
  var co = class {
    /**
     * @param options - constructor options
     * @param options.data - stub tool data
     * @param options.api - Editor.js API
     */
    constructor({ data: e, api: t }) {
      this.CSS = {
        wrapper: "ce-stub",
        info: "ce-stub__info",
        title: "ce-stub__title",
        subtitle: "ce-stub__subtitle"
      }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
    }
    /**
     * Returns stub holder
     *
     * @returns {HTMLElement}
     */
    render() {
      return this.wrapper;
    }
    /**
     * Return original Tool data
     *
     * @returns {BlockToolData}
     */
    save() {
      return this.savedData;
    }
    /**
     * Create Tool html markup
     *
     * @returns {HTMLElement}
     */
    make() {
      const e = d.make("div", this.CSS.wrapper), t = Mi, o3 = d.make("div", this.CSS.info), i2 = d.make("div", this.CSS.title, {
        textContent: this.title
      }), s4 = d.make("div", this.CSS.subtitle, {
        textContent: this.subtitle
      });
      return e.innerHTML = t, o3.appendChild(i2), o3.appendChild(s4), e.appendChild(o3), e;
    }
  };
  co.isReadOnlySupported = true;
  var ps = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Inline;
    }
    /**
     * Returns title for Inline Tool if specified by user
     */
    get title() {
      return this.constructable[ct.Title];
    }
    /**
     * Constructs new InlineTool instance from constructable
     */
    create() {
      return new this.constructable({
        api: this.api,
        config: this.settings
      });
    }
  };
  var fs = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Tune;
    }
    /**
     * Constructs new BlockTune instance from constructable
     *
     * @param data - Tune data
     * @param block - Block API object
     */
    create(e, t) {
      return new this.constructable({
        api: this.api,
        config: this.settings,
        block: t,
        data: e
      });
    }
  };
  var F = class _F extends Map {
    /**
     * Returns Block Tools collection
     */
    get blockTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
      return new _F(e);
    }
    /**
     * Returns Inline Tools collection
     */
    get inlineTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
      return new _F(e);
    }
    /**
     * Returns Block Tunes collection
     */
    get blockTunes() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
      return new _F(e);
    }
    /**
     * Returns internal Tools collection
     */
    get internalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
      return new _F(e);
    }
    /**
     * Returns Tools collection provided by user
     */
    get externalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
      return new _F(e);
    }
  };
  var gs = Object.defineProperty;
  var ms = Object.getOwnPropertyDescriptor;
  var ho = (n2, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? ms(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
      (r2 = n2[s4]) && (i2 = (o3 ? r2(e, t, i2) : r2(i2)) || i2);
    return o3 && i2 && gs(e, t, i2), i2;
  };
  var gt = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Block, this.inlineTools = new F(), this.tunes = new F();
    }
    /**
     * Creates new Tool instance
     *
     * @param data - Tool data
     * @param block - BlockAPI for current Block
     * @param readOnly - True if Editor is in read-only mode
     */
    create(e, t, o3) {
      return new this.constructable({
        data: e,
        block: t,
        readOnly: o3,
        api: this.api,
        config: this.settings
      });
    }
    /**
     * Returns true if read-only mode is supported by Tool
     */
    get isReadOnlySupported() {
      return this.constructable[ce.IsReadOnlySupported] === true;
    }
    /**
     * Returns true if Tool supports linebreaks
     */
    get isLineBreaksEnabled() {
      return this.constructable[ce.IsEnabledLineBreaks];
    }
    /**
     * Returns Tool toolbox configuration (internal or user-specified).
     *
     * Merges internal and user-defined toolbox configs based on the following rules:
     *
     * - If both internal and user-defined toolbox configs are arrays their items are merged.
     * Length of the second one is kept.
     *
     * - If both are objects their properties are merged.
     *
     * - If one is an object and another is an array than internal config is replaced with user-defined
     * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
     */
    get toolbox() {
      const e = this.constructable[ce.Toolbox], t = this.config[Ie.Toolbox];
      if (!V(e) && t !== false)
        return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o3, i2) => {
          const s4 = e[i2];
          return s4 ? {
            ...s4,
            ...o3
          } : o3;
        }) : [t] : Array.isArray(t) ? t : [
          {
            ...e,
            ...t
          }
        ] : Array.isArray(e) ? e : [e];
    }
    /**
     * Returns Tool conversion configuration
     */
    get conversionConfig() {
      return this.constructable[ce.ConversionConfig];
    }
    /**
     * Returns enabled inline tools for Tool
     */
    get enabledInlineTools() {
      return this.config[Ie.EnabledInlineTools] || false;
    }
    /**
     * Returns enabled tunes for Tool
     */
    get enabledBlockTunes() {
      return this.config[Ie.EnabledBlockTunes];
    }
    /**
     * Returns Tool paste configuration
     */
    get pasteConfig() {
      return this.constructable[ce.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
      const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
      if (V(e))
        return t;
      const o3 = {};
      for (const i2 in e)
        if (Object.prototype.hasOwnProperty.call(e, i2)) {
          const s4 = e[i2];
          R(s4) ? o3[i2] = Object.assign({}, t, s4) : o3[i2] = s4;
        }
      return o3;
    }
    get baseSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
    }
  };
  ho([
    ue
  ], gt.prototype, "sanitizeConfig", 1);
  ho([
    ue
  ], gt.prototype, "baseSanitizeConfig", 1);
  var bs = class {
    /**
     * @class
     * @param config - tools config
     * @param editorConfig - EditorJS config
     * @param api - EditorJS API module
     */
    constructor(e, t, o3) {
      this.api = o3, this.config = e, this.editorConfig = t;
    }
    /**
     * Returns Tool object based on it's type
     *
     * @param name - tool name
     */
    get(e) {
      const { class: t, isInternal: o3 = false, ...i2 } = this.config[e], s4 = this.getConstructor(t), r2 = t[et.IsTune];
      return new s4({
        name: e,
        constructable: t,
        config: i2,
        api: this.api.getMethodsForTool(e, r2),
        isDefault: e === this.editorConfig.defaultBlock,
        defaultPlaceholder: this.editorConfig.placeholder,
        isInternal: o3
      });
    }
    /**
     * Find appropriate Tool object constructor for Tool constructable
     *
     * @param constructable - Tools constructable
     */
    getConstructor(e) {
      switch (true) {
        case e[ct.IsInline]:
          return ps;
        case e[et.IsTune]:
          return fs;
        default:
          return gt;
      }
    }
  };
  var uo = class {
    /**
     * MoveDownTune constructor
     *
     * @param {API} api — Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: ki,
        title: this.api.i18n.t("Move down"),
        onActivate: () => this.handleClick(),
        name: "move-down"
      };
    }
    /**
     * Handle clicks on 'move down' button
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
      if (!t)
        throw new Error("Unable to move Block down since it is already the last");
      const o3 = t.holder, i2 = o3.getBoundingClientRect();
      let s4 = Math.abs(window.innerHeight - o3.offsetHeight);
      i2.top < window.innerHeight && (s4 = window.scrollY + o3.offsetHeight), window.scrollTo(0, s4), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  uo.isTune = true;
  var po = class {
    /**
     * DeleteTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: yi,
        title: this.api.i18n.t("Delete"),
        name: "delete",
        confirmation: {
          title: this.api.i18n.t("Click to delete"),
          onActivate: () => this.handleClick()
        }
      };
    }
    /**
     * Delete block conditions passed
     */
    handleClick() {
      this.api.blocks.delete();
    }
  };
  po.isTune = true;
  var fo = class {
    /**
     * MoveUpTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: xi,
        title: this.api.i18n.t("Move up"),
        onActivate: () => this.handleClick(),
        name: "move-up"
      };
    }
    /**
     * Move current block up
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o3 = this.api.blocks.getBlockByIndex(e - 1);
      if (e === 0 || !t || !o3)
        throw new Error("Unable to move Block up since it is already the first");
      const i2 = t.holder, s4 = o3.holder, r2 = i2.getBoundingClientRect(), l3 = s4.getBoundingClientRect();
      let a5;
      l3.top > 0 ? a5 = Math.abs(r2.top) - Math.abs(l3.top) : a5 = Math.abs(r2.top) + l3.height, window.scrollBy(0, -1 * a5), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  fo.isTune = true;
  var ks = Object.defineProperty;
  var vs = Object.getOwnPropertyDescriptor;
  var ws = (n2, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? vs(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
      (r2 = n2[s4]) && (i2 = (o3 ? r2(e, t, i2) : r2(i2)) || i2);
    return o3 && i2 && ks(e, t, i2), i2;
  };
  var go = class extends y {
    constructor() {
      super(...arguments), this.stubTool = "stub", this.toolsAvailable = new F(), this.toolsUnavailable = new F();
    }
    /**
     * Returns available Tools
     */
    get available() {
      return this.toolsAvailable;
    }
    /**
     * Returns unavailable Tools
     */
    get unavailable() {
      return this.toolsUnavailable;
    }
    /**
     * Return Tools for the Inline Toolbar
     */
    get inlineTools() {
      return this.available.inlineTools;
    }
    /**
     * Return editor block tools
     */
    get blockTools() {
      return this.available.blockTools;
    }
    /**
     * Return available Block Tunes
     *
     * @returns {object} - object of Inline Tool's classes
     */
    get blockTunes() {
      return this.available.blockTunes;
    }
    /**
     * Returns default Tool object
     */
    get defaultTool() {
      return this.blockTools.get(this.config.defaultBlock);
    }
    /**
     * Returns internal tools
     */
    get internal() {
      return this.available.internalTools;
    }
    /**
     * Creates instances via passed or default configuration
     *
     * @returns {Promise<void>}
     */
    async prepare() {
      if (this.validateTools(), this.config.tools = qe({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
        throw Error("Can't start without tools");
      const e = this.prepareConfig();
      this.factory = new bs(e, this.config, this.Editor.API);
      const t = this.getListOfPrepareFunctions(e);
      if (t.length === 0)
        return Promise.resolve();
      await Eo(t, (o3) => {
        this.toolPrepareMethodSuccess(o3);
      }, (o3) => {
        this.toolPrepareMethodFallback(o3);
      }), this.prepareBlockTools();
    }
    getAllInlineToolsSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => {
        Object.assign(e, t.sanitizeConfig);
      }), e;
    }
    /**
     * Calls each Tool reset method to clean up anything set by Tool
     */
    destroy() {
      Object.values(this.available).forEach(async (e) => {
        O(e.reset) && await e.reset();
      });
    }
    /**
     * Returns internal tools
     * Includes Bold, Italic, Link and Paragraph
     */
    get internalTools() {
      return {
        convertTo: {
          class: ao,
          isInternal: true
        },
        link: {
          class: ft,
          isInternal: true
        },
        bold: {
          class: ut,
          isInternal: true
        },
        italic: {
          class: pt,
          isInternal: true
        },
        paragraph: {
          class: ht,
          inlineToolbar: true,
          isInternal: true
        },
        stub: {
          class: co,
          isInternal: true
        },
        moveUp: {
          class: fo,
          isInternal: true
        },
        delete: {
          class: po,
          isInternal: true
        },
        moveDown: {
          class: uo,
          isInternal: true
        }
      };
    }
    /**
     * Tool prepare method success callback
     *
     * @param {object} data - append tool to available list
     */
    toolPrepareMethodSuccess(e) {
      const t = this.factory.get(e.toolName);
      if (t.isInline()) {
        const i2 = ["render"].filter((s4) => !t.create()[s4]);
        if (i2.length) {
          I(
            `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
            "warn",
            i2
          ), this.toolsUnavailable.set(t.name, t);
          return;
        }
      }
      this.toolsAvailable.set(t.name, t);
    }
    /**
     * Tool prepare method fail callback
     *
     * @param {object} data - append tool to unavailable list
     */
    toolPrepareMethodFallback(e) {
      this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
    }
    /**
     * Binds prepare function of plugins with user or default config
     *
     * @returns {Array} list of functions that needs to be fired sequentially
     * @param config - tools config
     */
    getListOfPrepareFunctions(e) {
      const t = [];
      return Object.entries(e).forEach(([o3, i2]) => {
        t.push({
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          function: O(i2.class.prepare) ? i2.class.prepare : () => {
          },
          data: {
            toolName: o3,
            config: i2.config
          }
        });
      }), t;
    }
    /**
     * Assign enabled Inline Tools and Block Tunes for Block Tool
     */
    prepareBlockTools() {
      Array.from(this.blockTools.values()).forEach((e) => {
        this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
      });
    }
    /**
     * Assign enabled Inline Tools for Block Tool
     *
     * @param tool - Block Tool
     */
    assignInlineToolsToBlockTool(e) {
      if (this.config.inlineToolbar !== false) {
        if (e.enabledInlineTools === true) {
          e.inlineTools = new F(
            Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
          );
          return;
        }
        Array.isArray(e.enabledInlineTools) && (e.inlineTools = new F(
          /** Prepend ConvertTo Inline Tool */
          ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
        ));
      }
    }
    /**
     * Assign enabled Block Tunes for Block Tool
     *
     * @param tool — Block Tool
     */
    assignBlockTunesToBlockTool(e) {
      if (e.enabledBlockTunes !== false) {
        if (Array.isArray(e.enabledBlockTunes)) {
          const t = new F(
            e.enabledBlockTunes.map((o3) => [o3, this.blockTunes.get(o3)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        if (Array.isArray(this.config.tunes)) {
          const t = new F(
            this.config.tunes.map((o3) => [o3, this.blockTunes.get(o3)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        e.tunes = this.blockTunes.internalTools;
      }
    }
    /**
     * Validate Tools configuration objects and throw Error for user if it is invalid
     */
    validateTools() {
      for (const e in this.config.tools)
        if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
          if (e in this.internalTools)
            return;
          const t = this.config.tools[e];
          if (!O(t) && !O(t.class))
            throw Error(
              `Tool \xAB${e}\xBB must be a constructor function or an object with function in the \xABclass\xBB property`
            );
        }
    }
    /**
     * Unify tools config
     */
    prepareConfig() {
      const e = {};
      for (const t in this.config.tools)
        R(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
      return e;
    }
  };
  ws([
    ue
  ], go.prototype, "getAllInlineToolsSanitizeConfig", 1);
  var xs = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
  var ys = class extends y {
    constructor() {
      super(...arguments), this.isMobile = false, this.contentRectCache = void 0, this.resizeDebouncer = vt(() => {
        this.windowResize();
      }, 200);
    }
    /**
     * Editor.js UI CSS class names
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorWrapperNarrow: "codex-editor--narrow",
        editorZone: "codex-editor__redactor",
        editorZoneHidden: "codex-editor__redactor--hidden",
        editorEmpty: "codex-editor--empty",
        editorRtlFix: "codex-editor--rtl"
      };
    }
    /**
     * Return Width of center column of Editor
     *
     * @returns {DOMRect}
     */
    get contentRect() {
      if (this.contentRectCache)
        return this.contentRectCache;
      const e = this.nodes.wrapper.querySelector(`.${D.CSS.content}`);
      return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
        width: 650,
        left: 0,
        right: 0
      };
    }
    /**
     * Making main interface
     */
    async prepare() {
      this.setIsMobile(), this.make(), this.loadStyles();
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - removes all listeners from main UI module elements
     *
     * if readOnly is false:
     *  - enables all listeners to UI module elements
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
        this.enableModuleBindings();
      }, {
        timeout: 2e3
      });
    }
    /**
     * Check if Editor is empty and set CSS class to wrapper
     */
    checkEmptiness() {
      const { BlockManager: e } = this.Editor;
      this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
    }
    /**
     * Check if one of Toolbar is opened
     * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
     *
     * @returns {boolean}
     */
    get someToolbarOpened() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o3 } = this.Editor;
      return !!(t.opened || o3.opened || e.toolbox.opened);
    }
    /**
     * Check for some Flipper-buttons is under focus
     */
    get someFlipperButtonFocused() {
      return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof le).some(([e, t]) => t.flipper.hasFocus());
    }
    /**
     * Clean editor`s UI
     */
    destroy() {
      this.nodes.holder.innerHTML = "";
    }
    /**
     * Close all Editor's toolbars
     */
    closeAllToolbars() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o3 } = this.Editor;
      t.close(), o3.close(), e.toolbox.close();
    }
    /**
     * Check for mobile mode and save the result
     */
    setIsMobile() {
      const e = window.innerWidth < Ot;
      e !== this.isMobile && this.eventsDispatcher.emit(ye, {
        isEnabled: this.isMobile
      }), this.isMobile = e;
    }
    /**
     * Makes Editor.js interface
     */
    make() {
      this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
        this.CSS.editorWrapper,
        ...this.isRtl ? [this.CSS.editorRtlFix] : []
      ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
    }
    /**
     * Appends CSS
     */
    loadStyles() {
      const e = "editor-js-styles";
      if (d.get(e))
        return;
      const t = d.make("style", null, {
        id: e,
        textContent: xs.toString()
      });
      this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), d.prepend(document.head, t);
    }
    /**
     * Bind events on the Editor.js interface
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
        this.redactorClicked(t);
      }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
        this.documentKeydown(t);
      }, true), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
        this.documentClicked(t);
      }, true);
      const e = vt(() => {
        this.selectionChanged();
      }, ss);
      this.readOnlyMutableListeners.on(document, "selectionchange", e, true), this.readOnlyMutableListeners.on(window, "resize", () => {
        this.resizeDebouncer();
      }, {
        passive: true
      }), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
    }
    /**
     * Listen redactor mousemove to emit 'block-hovered' event
     */
    watchBlockHoveredEvents() {
      let e;
      this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ve((t) => {
        const o3 = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o3 && e !== o3 && (e = o3, this.eventsDispatcher.emit(oo, {
          block: this.Editor.BlockManager.getBlockByChildNode(o3)
        }));
      }, 20), {
        passive: true
      });
    }
    /**
     * Unbind events on the Editor.js interface
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Resize window handler
     */
    windowResize() {
      this.contentRectCache = null, this.setIsMobile();
    }
    /**
     * All keydowns on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    documentKeydown(e) {
      switch (e.keyCode) {
        case w.ENTER:
          this.enterPressed(e);
          break;
        case w.BACKSPACE:
        case w.DELETE:
          this.backspacePressed(e);
          break;
        case w.ESC:
          this.escapePressed(e);
          break;
        default:
          this.defaultBehaviour(e);
          break;
      }
    }
    /**
     * Ignore all other document's keydown events
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    defaultBehaviour(e) {
      const { currentBlock: t } = this.Editor.BlockManager, o3 = e.target.closest(`.${this.CSS.editorWrapper}`), i2 = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      if (t !== void 0 && o3 === null) {
        this.Editor.BlockEvents.keydown(e);
        return;
      }
      o3 || t && i2 || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    }
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    backspacePressed(e) {
      const { BlockManager: t, BlockSelection: o3, Caret: i2 } = this.Editor;
      if (o3.anyBlockSelected && !b.isSelectionExists) {
        const s4 = t.removeSelectedBlocks(), r2 = t.insertDefaultBlockAtIndex(s4, true);
        i2.setToBlock(r2, i2.positions.START), o3.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
      }
    }
    /**
     * Escape pressed
     * If some of Toolbar components are opened, then close it otherwise close Toolbar
     *
     * @param {Event} event - escape keydown event
     */
    escapePressed(e) {
      this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
     * Enter pressed on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      const { BlockManager: t, BlockSelection: o3 } = this.Editor;
      if (this.someToolbarOpened)
        return;
      const i2 = t.currentBlockIndex >= 0;
      if (o3.anyBlockSelected && !b.isSelectionExists) {
        o3.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
        return;
      }
      if (!this.someToolbarOpened && i2 && e.target.tagName === "BODY") {
        const s4 = this.Editor.BlockManager.insert();
        e.preventDefault(), this.Editor.Caret.setToBlock(s4), this.Editor.Toolbar.moveAndOpen(s4);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * All clicks on document
     *
     * @param {MouseEvent} event - Click event
     */
    documentClicked(e) {
      var l3, a5;
      if (!e.isTrusted)
        return;
      const t = e.target;
      this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
      const i2 = (l3 = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : l3.contains(t), s4 = (a5 = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : a5.contains(t), r2 = i2 || s4;
      if (this.Editor.BlockSettings.opened && !r2) {
        this.Editor.BlockSettings.close();
        const c5 = this.Editor.BlockManager.getBlockByChildNode(t);
        this.Editor.Toolbar.moveAndOpen(c5);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * First touch on editor
     * Fired before click
     *
     * Used to change current block — we need to do it before 'selectionChange' event.
     * Also:
     * - Move and show the Toolbar
     * - Set a Caret
     *
     * @param {MouseEvent | TouchEvent} event - touch or mouse event
     */
    documentTouched(e) {
      let t = e.target;
      if (t === this.nodes.redactor) {
        const o3 = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i2 = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        t = document.elementFromPoint(o3, i2);
      }
      try {
        this.Editor.BlockManager.setCurrentBlockByChildNode(t);
      } catch {
        this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
      }
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * All clicks on the redactor zone
     *
     * @param {MouseEvent} event - click event
     * @description
     * - By clicks on the Editor's bottom zone:
     *      - if last Block is empty, set a Caret to this
     *      - otherwise, add a new empty Block and set a Caret to that
     */
    redactorClicked(e) {
      if (!b.isCollapsed)
        return;
      const t = e.target, o3 = e.metaKey || e.ctrlKey;
      if (d.isAnchor(t) && o3) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const i2 = t.getAttribute("href"), s4 = So(i2);
        Mo(s4);
        return;
      }
      this.processBottomZoneClick(e);
    }
    /**
     * Check if user clicks on the Editor's bottom zone:
     *  - set caret to the last block
     *  - or add new empty block
     *
     * @param event - click event
     */
    processBottomZoneClick(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(-1), o3 = d.offset(t.holder).bottom, i2 = e.pageY, { BlockSelection: s4 } = this.Editor;
      if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
      * If there is cross block selection started, target will be equal to redactor so we need additional check
      */
      !s4.anyBlockSelected && /**
      * Prevent caret jumping (to last block) when clicking between blocks
      */
      o3 < i2) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const { BlockManager: l3, Caret: a5, Toolbar: c5 } = this.Editor;
        (!l3.lastBlock.tool.isDefault || !l3.lastBlock.isEmpty) && l3.insertAtEnd(), a5.setToTheLastBlock(), c5.moveAndOpen(l3.lastBlock);
      }
    }
    /**
     * Handle selection changes on mobile devices
     * Uses for showing the Inline Toolbar
     */
    selectionChanged() {
      const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o3 = b.anchorElement;
      if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o3) {
        b.range || this.Editor.InlineToolbar.close();
        return;
      }
      const i2 = o3.closest(`.${D.CSS.content}`);
      (i2 === null || i2.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o3) || this.Editor.InlineToolbar.close(), !(o3.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o3), this.Editor.InlineToolbar.tryToShow(true));
    }
    /**
     * Editor.js provides and ability to show placeholders for empty contenteditable elements
     *
     * This method watches for input and focus events and toggles 'data-empty' attribute
     * to workaroud the case, when inputs contains only <br>s and has no visible content
     * Then, CSS could rely on this attribute to show placeholders
     */
    enableInputsEmptyMark() {
      function e(t) {
        const o3 = t.target;
        Lt(o3);
      }
      this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
    }
  };
  var Es = {
    // API Modules
    BlocksAPI: zo,
    CaretAPI: jo,
    EventsAPI: $o,
    I18nAPI: ot,
    API: Yo,
    InlineToolbarAPI: Wo,
    ListenersAPI: Ko,
    NotifierAPI: Zo,
    ReadOnlyAPI: Go,
    SanitizerAPI: si,
    SaverAPI: ni,
    SelectionAPI: ri,
    ToolsAPI: li,
    StylesAPI: ai,
    ToolbarAPI: ci,
    TooltipAPI: fi,
    UiAPI: gi,
    // Toolbar Modules
    BlockSettings: Ui,
    Toolbar: qi,
    InlineToolbar: Zi,
    // Modules
    BlockEvents: Gi,
    BlockManager: es,
    BlockSelection: ts,
    Caret: Re,
    CrossBlockSelection: os,
    DragNDrop: is,
    ModificationsObserver: rs,
    Paste: ls,
    ReadOnly: as,
    RectangleSelection: xe,
    Renderer: cs,
    Saver: ds,
    Tools: go,
    UI: ys
  };
  var Bs = class {
    /**
     * @param {EditorConfig} config - user configuration
     */
    constructor(e) {
      this.moduleInstances = {}, this.eventsDispatcher = new Te();
      let t, o3;
      this.isReady = new Promise((i2, s4) => {
        t = i2, o3 = s4;
      }), Promise.resolve().then(async () => {
        this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
        const { BlockManager: i2, Caret: s4, UI: r2, ModificationsObserver: l3 } = this.moduleInstances;
        r2.checkEmptiness(), l3.enable(), this.configuration.autofocus && s4.setToBlock(i2.blocks[0], s4.positions.START), t();
      }).catch((i2) => {
        I(`Editor.js is not ready because of ${i2}`, "error"), o3(i2);
      });
    }
    /**
     * Setting for configuration
     *
     * @param {EditorConfig|string} config - Editor's config to set
     */
    set configuration(e) {
      var o3, i2;
      R(e) ? this.config = {
        ...e
      } : this.config = {
        holder: e
      }, Ze(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = It.VERBOSE), xo(this.config.logLevel), Ze(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
      const t = {
        type: this.config.defaultBlock,
        data: {}
      };
      this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || {
        p: true,
        b: true,
        a: true
      }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
      }), this.config.onChange = this.config.onChange || (() => {
      }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || false, (o3 = this.config.i18n) != null && o3.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i2 = this.config.i18n) == null ? void 0 : i2.direction) || "ltr";
    }
    /**
     * Returns private property
     *
     * @returns {EditorConfig}
     */
    get configuration() {
      return this.config;
    }
    /**
     * Checks for required fields in Editor's config
     */
    validate() {
      const { holderId: e, holder: t } = this.config;
      if (e && t)
        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
      if (Q(t) && !d.get(t))
        throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
      if (t && R(t) && !d.isElement(t))
        throw Error("\xABholder\xBB value must be an Element node");
    }
    /**
     * Initializes modules:
     *  - make and save instances
     *  - configure
     */
    init() {
      this.constructModules(), this.configureModules();
    }
    /**
     * Start Editor!
     *
     * Get list of modules that needs to be prepared and return a sequence (Promise)
     *
     * @returns {Promise<void>}
     */
    async start() {
      await [
        "Tools",
        "UI",
        "BlockManager",
        "Paste",
        "BlockSelection",
        "RectangleSelection",
        "CrossBlockSelection",
        "ReadOnly"
      ].reduce(
        (t, o3) => t.then(async () => {
          try {
            await this.moduleInstances[o3].prepare();
          } catch (i2) {
            if (i2 instanceof Pt)
              throw new Error(i2.message);
            I(`Module ${o3} was skipped because of %o`, "warn", i2);
          }
        }),
        Promise.resolve()
      );
    }
    /**
     * Render initial data
     */
    render() {
      return this.moduleInstances.Renderer.render(this.config.data.blocks);
    }
    /**
     * Make modules instances and save it to the @property this.moduleInstances
     */
    constructModules() {
      Object.entries(Es).forEach(([e, t]) => {
        try {
          this.moduleInstances[e] = new t({
            config: this.configuration,
            eventsDispatcher: this.eventsDispatcher
          });
        } catch (o3) {
          I("[constructModules]", `Module ${e} skipped because`, "error", o3);
        }
      });
    }
    /**
     * Modules instances configuration:
     *  - pass other modules to the 'state' property
     *  - ...
     */
    configureModules() {
      for (const e in this.moduleInstances)
        Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
    }
    /**
     * Return modules without passed name
     *
     * @param {string} name - module for witch modules difference should be calculated
     */
    getModulesDiff(e) {
      const t = {};
      for (const o3 in this.moduleInstances)
        o3 !== e && (t[o3] = this.moduleInstances[o3]);
      return t;
    }
  };
  var Ts = class {
    /** Editor version */
    static get version() {
      return "2.30.7";
    }
    /**
     * @param {EditorConfig|string|undefined} [configuration] - user configuration
     */
    constructor(e) {
      let t = () => {
      };
      R(e) && O(e.onReady) && (t = e.onReady);
      const o3 = new Bs(e);
      this.isReady = o3.isReady.then(() => {
        this.exportAPI(o3), t();
      });
    }
    /**
     * Export external API methods
     *
     * @param {Core} editor — Editor's instance
     */
    exportAPI(e) {
      const t = ["configuration"], o3 = () => {
        Object.values(e.moduleInstances).forEach((s4) => {
          O(s4.destroy) && s4.destroy(), s4.listeners.removeAll();
        }), pi(), e = null;
        for (const s4 in this)
          Object.prototype.hasOwnProperty.call(this, s4) && delete this[s4];
        Object.setPrototypeOf(this, null);
      };
      t.forEach((s4) => {
        this[s4] = e[s4];
      }), this.destroy = o3, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
        blocks: {
          clear: "clear",
          render: "render"
        },
        caret: {
          focus: "focus"
        },
        events: {
          on: "on",
          off: "off",
          emit: "emit"
        },
        saver: {
          save: "save"
        }
      }).forEach(([s4, r2]) => {
        Object.entries(r2).forEach(([l3, a5]) => {
          this[a5] = e.moduleInstances.API.methods[s4][l3];
        });
      });
    }
  };

  // node_modules/@editorjs/header/dist/header.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(e);
      }
    } catch (n2) {
      console.error("vite-plugin-css-injected-by-js", n2);
    }
  })();
  var a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>';
  var l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>';
  var o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>';
  var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>';
  var d2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>';
  var u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
  var g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
  var v = class {
    constructor({ data: e, config: t, api: s4, readOnly: r2 }) {
      this.api = s4, this.readOnly = r2, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
    }
    /**
     * Styles
     */
    get _CSS() {
      return {
        block: this.api.styles.block,
        wrapper: "ce-header"
      };
    }
    /**
     * Check if data is valid
     * 
     * @param {any} data - data to check
     * @returns {data is HeaderData}
     * @private
     */
    isHeaderData(e) {
      return e.text !== void 0;
    }
    /**
     * Normalize input data
     *
     * @param {HeaderData} data - saved data to process
     *
     * @returns {HeaderData}
     * @private
     */
    normalizeData(e) {
      const t = { text: "", level: this.defaultLevel.number };
      return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLHeadingElement}
     * @public
     */
    render() {
      return this._element;
    }
    /**
     * Returns header block tunes config
     *
     * @returns {Array}
     */
    renderSettings() {
      return this.levels.map((e) => ({
        icon: e.svg,
        label: this.api.i18n.t(`Heading ${e.number}`),
        onActivate: () => this.setLevel(e.number),
        closeOnActivate: true,
        isActive: this.currentLevel.number === e.number,
        render: () => document.createElement("div")
      }));
    }
    /**
     * Callback for Block's settings buttons
     *
     * @param {number} level - level to set
     */
    setLevel(e) {
      this.data = {
        level: e,
        text: this.data.text
      };
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {HeaderData} data - saved data to merger with current block
     * @public
     */
    merge(e) {
      this._element.insertAdjacentHTML("beforeend", e.text);
    }
    /**
     * Validate Text block data:
     * - check for emptiness
     *
     * @param {HeaderData} blockData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return e.text.trim() !== "";
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
     * @returns {HeaderData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML,
        level: this.currentLevel.number
      };
    }
    /**
     * Allow Header to be converted to/from other blocks
     */
    static get conversionConfig() {
      return {
        export: "text",
        // use 'text' property for other blocks
        import: "text"
        // fill 'text' property from other block's export string
      };
    }
    /**
     * Sanitizer Rules
     */
    static get sanitize() {
      return {
        level: false,
        text: {}
      };
    }
    /**
     * Returns true to notify core that read-only is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get current Tools`s data
     *
     * @returns {HeaderData} Current data
     * @private
     */
    get data() {
      return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
    }
    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {HeaderData} data — data to set
     * @private
     */
    set data(e) {
      if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
        const t = this.getTag();
        t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
      }
      e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
    }
    /**
     * Get tag for target level
     * By default returns second-leveled header
     *
     * @returns {HTMLElement}
     */
    getTag() {
      const e = document.createElement(this.currentLevel.tag);
      return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
    }
    /**
     * Get current level
     *
     * @returns {level}
     */
    get currentLevel() {
      let e = this.levels.find((t) => t.number === this._data.level);
      return e || (e = this.defaultLevel), e;
    }
    /**
     * Return default level
     *
     * @returns {level}
     */
    get defaultLevel() {
      if (this._settings.defaultLevel) {
        const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
        if (e)
          return e;
        console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
      }
      return this.levels[1];
    }
    /**
     * @typedef {object} level
     * @property {number} number - level number
     * @property {string} tag - tag corresponds with level number
     * @property {string} svg - icon
     */
    /**
     * Available header levels
     *
     * @returns {level[]}
     */
    get levels() {
      const e = [
        {
          number: 1,
          tag: "H1",
          svg: a
        },
        {
          number: 2,
          tag: "H2",
          svg: l
        },
        {
          number: 3,
          tag: "H3",
          svg: o
        },
        {
          number: 4,
          tag: "H4",
          svg: h
        },
        {
          number: 5,
          tag: "H5",
          svg: d2
        },
        {
          number: 6,
          tag: "H6",
          svg: u
        }
      ];
      return this._settings.levels ? e.filter(
        (t) => this._settings.levels.includes(t.number)
      ) : e;
    }
    /**
     * Handle H1-H6 tags on paste to substitute it with header Tool
     *
     * @param {PasteEvent} event - event with pasted content
     */
    onPaste(e) {
      const t = e.detail;
      if ("data" in t) {
        const s4 = t.data;
        let r2 = this.defaultLevel.number;
        switch (s4.tagName) {
          case "H1":
            r2 = 1;
            break;
          case "H2":
            r2 = 2;
            break;
          case "H3":
            r2 = 3;
            break;
          case "H4":
            r2 = 4;
            break;
          case "H5":
            r2 = 5;
            break;
          case "H6":
            r2 = 6;
            break;
        }
        this._settings.levels && (r2 = this._settings.levels.reduce((n2, i2) => Math.abs(i2 - r2) < Math.abs(n2 - r2) ? i2 : n2)), this.data = {
          level: r2,
          text: s4.innerHTML
        };
      }
    }
    /**
     * Used by Editor.js paste handling API.
     * Provides configuration to handle H1-H6 tags.
     *
     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
     */
    static get pasteConfig() {
      return {
        tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
      };
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: g,
        title: "Heading"
      };
    }
  };

  // node_modules/@editorjs/list/dist/editorjs-list.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"\u2022"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')), document.head.appendChild(e);
      }
    } catch (c5) {
      console.error("vite-plugin-css-injected-by-js", c5);
    }
  })();
  var Ct2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
  var Ae2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var $e2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
  var Be2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
  var St2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var Ot2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>';
  var kt2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var _t2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var Et2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var It2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var A2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function wt2(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n2 = function r2() {
        return this instanceof r2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n2.prototype = t.prototype;
    } else
      n2 = {};
    return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
      var i2 = Object.getOwnPropertyDescriptor(e, r2);
      Object.defineProperty(n2, r2, i2.get ? i2 : {
        enumerable: true,
        get: function() {
          return e[r2];
        }
      });
    }), n2;
  }
  var c = {};
  var V2 = {};
  var Y = {};
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.allInputsSelector = Pt2;
  function Pt2() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
      return 'input[type="'.concat(t, '"]');
    }).join(", ");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
    var t = Y;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
  })(V2);
  var k = {};
  var J2 = {};
  Object.defineProperty(J2, "__esModule", { value: true });
  J2.isNativeInput = jt2;
  function jt2(e) {
    var t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
    var t = J2;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return t.isNativeInput;
    } });
  })(k);
  var Fe2 = {};
  var Q2 = {};
  Object.defineProperty(Q2, "__esModule", { value: true });
  Q2.append = Tt2;
  function Tt2(e, t) {
    Array.isArray(t) ? t.forEach(function(n2) {
      e.appendChild(n2);
    }) : e.appendChild(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
    var t = Q2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return t.append;
    } });
  })(Fe2);
  var Z2 = {};
  var x = {};
  Object.defineProperty(x, "__esModule", { value: true });
  x.blockElements = Mt2;
  function Mt2() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
    var t = x;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return t.blockElements;
    } });
  })(Z2);
  var Re2 = {};
  var ee = {};
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.calculateBaseline = Lt2;
  function Lt2(e) {
    var t = window.getComputedStyle(e), n2 = parseFloat(t.fontSize), r2 = parseFloat(t.lineHeight) || n2 * 1.2, i2 = parseFloat(t.paddingTop), a5 = parseFloat(t.borderTopWidth), l3 = parseFloat(t.marginTop), s4 = n2 * 0.8, o3 = (r2 - n2) / 2, d4 = l3 + a5 + i2 + o3 + s4;
    return d4;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
    var t = ee;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return t.calculateBaseline;
    } });
  })(Re2);
  var qe2 = {};
  var te2 = {};
  var ne2 = {};
  var re2 = {};
  Object.defineProperty(re2, "__esModule", { value: true });
  re2.isContentEditable = Nt2;
  function Nt2(e) {
    return e.contentEditable === "true";
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
    var t = re2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return t.isContentEditable;
    } });
  })(ne2);
  Object.defineProperty(te2, "__esModule", { value: true });
  te2.canSetCaret = Bt2;
  var At2 = k;
  var $t2 = ne2;
  function Bt2(e) {
    var t = true;
    if ((0, At2.isNativeInput)(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = (0, $t2.isContentEditable)(e);
    return t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
    var t = te2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return t.canSetCaret;
    } });
  })(qe2);
  var $ = {};
  var ie = {};
  function Wt2(e, t, n2) {
    const r2 = n2.value !== void 0 ? "value" : "get", i2 = n2[r2], a5 = `#${t}Cache`;
    if (n2[r2] = function(...l3) {
      return this[a5] === void 0 && (this[a5] = i2.apply(this, l3)), this[a5];
    }, r2 === "get" && n2.set) {
      const l3 = n2.set;
      n2.set = function(s4) {
        delete e[a5], l3.apply(this, s4);
      };
    }
    return n2;
  }
  function Ue2() {
    const e = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, t = Object.keys(e).find((n2) => window.navigator.appVersion.toLowerCase().indexOf(n2) !== -1);
    return t !== void 0 && (e[t] = true), e;
  }
  function ae2(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
  }
  function Dt2(e) {
    return !ae2(e);
  }
  var Ht2 = () => typeof window < "u" && window.navigator !== null && ae2(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Ft2(e) {
    const t = Ue2();
    return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
  }
  function Rt2(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function qt2(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n2 = window.getSelection(), r2 = document.createRange();
    if (r2.selectNode(t), n2 === null)
      throw new Error("Cannot copy text to clipboard");
    n2.removeAllRanges(), n2.addRange(r2), document.execCommand("copy"), document.body.removeChild(t);
  }
  function Ut2(e, t, n2) {
    let r2;
    return (...i2) => {
      const a5 = this, l3 = () => {
        r2 = void 0, n2 !== true && e.apply(a5, i2);
      }, s4 = n2 === true && r2 !== void 0;
      window.clearTimeout(r2), r2 = window.setTimeout(l3, t), s4 && e.apply(a5, i2);
    };
  }
  function S(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function zt2(e) {
    return S(e) === "boolean";
  }
  function ze2(e) {
    return S(e) === "function" || S(e) === "asyncfunction";
  }
  function Kt2(e) {
    return ze2(e) && /^\s*class\s+/.test(e.toString());
  }
  function Xt2(e) {
    return S(e) === "number";
  }
  function L2(e) {
    return S(e) === "object";
  }
  function Gt2(e) {
    return Promise.resolve(e) === e;
  }
  function Vt2(e) {
    return S(e) === "string";
  }
  function Yt2(e) {
    return S(e) === "undefined";
  }
  function X2(e, ...t) {
    if (!t.length)
      return e;
    const n2 = t.shift();
    if (L2(e) && L2(n2))
      for (const r2 in n2)
        L2(n2[r2]) ? (e[r2] === void 0 && Object.assign(e, { [r2]: {} }), X2(e[r2], n2[r2])) : Object.assign(e, { [r2]: n2[r2] });
    return X2(e, ...t);
  }
  function Jt2(e, t, n2) {
    const r2 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n2}\xBB instead.`;
    e && console.warn(r2);
  }
  function Qt2(e) {
    try {
      return new URL(e).href;
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
  }
  function Zt2(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
  }
  var xt2 = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var en = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  var tn = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(t) {
      return new Promise((n2, r2) => {
        this.completed = this.completed.then(t).then(n2).catch(r2);
      });
    }
  };
  function nn(e, t, n2 = void 0) {
    let r2, i2, a5, l3 = null, s4 = 0;
    n2 || (n2 = {});
    const o3 = function() {
      s4 = n2.leading === false ? 0 : Date.now(), l3 = null, a5 = e.apply(r2, i2), l3 === null && (r2 = i2 = null);
    };
    return function() {
      const d4 = Date.now();
      !s4 && n2.leading === false && (s4 = d4);
      const u2 = t - (d4 - s4);
      return r2 = this, i2 = arguments, u2 <= 0 || u2 > t ? (l3 && (clearTimeout(l3), l3 = null), s4 = d4, a5 = e.apply(r2, i2), l3 === null && (r2 = i2 = null)) : !l3 && n2.trailing !== false && (l3 = setTimeout(o3, u2)), a5;
    };
  }
  var rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    PromiseQueue: tn,
    beautifyShortcut: Ft2,
    cacheable: Wt2,
    capitalize: Rt2,
    copyTextToClipboard: qt2,
    debounce: Ut2,
    deepMerge: X2,
    deprecationAssert: Jt2,
    getUserOS: Ue2,
    getValidUrl: Qt2,
    isBoolean: zt2,
    isClass: Kt2,
    isEmpty: Dt2,
    isFunction: ze2,
    isIosDevice: Ht2,
    isNumber: Xt2,
    isObject: L2,
    isPrintableKey: Zt2,
    isPromise: Gt2,
    isString: Vt2,
    isUndefined: Yt2,
    keyCodes: xt2,
    mouseButtons: en,
    notEmpty: ae2,
    throttle: nn,
    typeOf: S
  }, Symbol.toStringTag, { value: "Module" }));
  var le2 = /* @__PURE__ */ wt2(rn);
  Object.defineProperty(ie, "__esModule", { value: true });
  ie.containsOnlyInlineElements = sn;
  var an = le2;
  var ln = Z2;
  function sn(e) {
    var t;
    (0, an.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n2 = function(r2) {
      return !(0, ln.blockElements)().includes(r2.tagName.toLowerCase()) && Array.from(r2.children).every(n2);
    };
    return Array.from(t.children).every(n2);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
    var t = ie;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return t.containsOnlyInlineElements;
    } });
  })($);
  var Ke2 = {};
  var se2 = {};
  var B = {};
  var oe = {};
  Object.defineProperty(oe, "__esModule", { value: true });
  oe.make = on;
  function on(e, t, n2) {
    var r2;
    t === void 0 && (t = null), n2 === void 0 && (n2 = {});
    var i2 = document.createElement(e);
    if (Array.isArray(t)) {
      var a5 = t.filter(function(s4) {
        return s4 !== void 0;
      });
      (r2 = i2.classList).add.apply(r2, a5);
    } else
      t !== null && i2.classList.add(t);
    for (var l3 in n2)
      Object.prototype.hasOwnProperty.call(n2, l3) && (i2[l3] = n2[l3]);
    return i2;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
    var t = oe;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return t.make;
    } });
  })(B);
  Object.defineProperty(se2, "__esModule", { value: true });
  se2.fragmentToString = cn;
  var un = B;
  function cn(e) {
    var t = (0, un.make)("div");
    return t.appendChild(e), t.innerHTML;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
    var t = se2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return t.fragmentToString;
    } });
  })(Ke2);
  var Xe2 = {};
  var ue2 = {};
  Object.defineProperty(ue2, "__esModule", { value: true });
  ue2.getContentLength = fn;
  var dn = k;
  function fn(e) {
    var t, n2;
    return (0, dn.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n2 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n2 !== void 0 ? n2 : 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
    var t = ue2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return t.getContentLength;
    } });
  })(Xe2);
  var ce2 = {};
  var de2 = {};
  var We2 = A2 && A2.__spreadArray || function(e, t, n2) {
    if (n2 || arguments.length === 2)
      for (var r2 = 0, i2 = t.length, a5; r2 < i2; r2++)
        (a5 || !(r2 in t)) && (a5 || (a5 = Array.prototype.slice.call(t, 0, r2)), a5[r2] = t[r2]);
    return e.concat(a5 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(de2, "__esModule", { value: true });
  de2.getDeepestBlockElements = Ge2;
  var pn = $;
  function Ge2(e) {
    return (0, pn.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n2) {
      return We2(We2([], t, true), Ge2(n2), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
    var t = de2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return t.getDeepestBlockElements;
    } });
  })(ce2);
  var Ve2 = {};
  var fe = {};
  var W2 = {};
  var pe2 = {};
  Object.defineProperty(pe2, "__esModule", { value: true });
  pe2.isLineBreakTag = hn;
  function hn(e) {
    return [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
    var t = pe2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return t.isLineBreakTag;
    } });
  })(W2);
  var D2 = {};
  var he2 = {};
  Object.defineProperty(he2, "__esModule", { value: true });
  he2.isSingleTag = mn;
  function mn(e) {
    return [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
    var t = he2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return t.isSingleTag;
    } });
  })(D2);
  Object.defineProperty(fe, "__esModule", { value: true });
  fe.getDeepestNode = Ye2;
  var gn = k;
  var vn = W2;
  var bn = D2;
  function Ye2(e, t) {
    t === void 0 && (t = false);
    var n2 = t ? "lastChild" : "firstChild", r2 = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n2]) {
      var i2 = e[n2];
      if ((0, bn.isSingleTag)(i2) && !(0, gn.isNativeInput)(i2) && !(0, vn.isLineBreakTag)(i2))
        if (i2[r2])
          i2 = i2[r2];
        else if (i2.parentNode !== null && i2.parentNode[r2])
          i2 = i2.parentNode[r2];
        else
          return i2.parentNode;
      return Ye2(i2, t);
    }
    return e;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
    var t = fe;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return t.getDeepestNode;
    } });
  })(Ve2);
  var Je2 = {};
  var me2 = {};
  var j = A2 && A2.__spreadArray || function(e, t, n2) {
    if (n2 || arguments.length === 2)
      for (var r2 = 0, i2 = t.length, a5; r2 < i2; r2++)
        (a5 || !(r2 in t)) && (a5 || (a5 = Array.prototype.slice.call(t, 0, r2)), a5[r2] = t[r2]);
    return e.concat(a5 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(me2, "__esModule", { value: true });
  me2.findAllInputs = kn;
  var yn = $;
  var Cn = ce2;
  var Sn = V2;
  var On = k;
  function kn(e) {
    return Array.from(e.querySelectorAll((0, Sn.allInputsSelector)())).reduce(function(t, n2) {
      return (0, On.isNativeInput)(n2) || (0, yn.containsOnlyInlineElements)(n2) ? j(j([], t, true), [n2], false) : j(j([], t, true), (0, Cn.getDeepestBlockElements)(n2), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
    var t = me2;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return t.findAllInputs;
    } });
  })(Je2);
  var Qe2 = {};
  var ge = {};
  Object.defineProperty(ge, "__esModule", { value: true });
  ge.isCollapsedWhitespaces = _n;
  function _n(e) {
    return !/[^\t\n\r ]/.test(e);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
    var t = ge;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return t.isCollapsedWhitespaces;
    } });
  })(Qe2);
  var ve2 = {};
  var be2 = {};
  Object.defineProperty(be2, "__esModule", { value: true });
  be2.isElement = In;
  var En = le2;
  function In(e) {
    return (0, En.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
    var t = be2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return t.isElement;
    } });
  })(ve2);
  var Ze2 = {};
  var ye2 = {};
  var Ce2 = {};
  var Se2 = {};
  Object.defineProperty(Se2, "__esModule", { value: true });
  Se2.isLeaf = wn;
  function wn(e) {
    return e === null ? false : e.childNodes.length === 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
    var t = Se2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return t.isLeaf;
    } });
  })(Ce2);
  var Oe2 = {};
  var ke2 = {};
  Object.defineProperty(ke2, "__esModule", { value: true });
  ke2.isNodeEmpty = Ln;
  var Pn = W2;
  var jn = ve2;
  var Tn = k;
  var Mn = D2;
  function Ln(e, t) {
    var n2 = "";
    return (0, Mn.isSingleTag)(e) && !(0, Pn.isLineBreakTag)(e) ? false : ((0, jn.isElement)(e) && (0, Tn.isNativeInput)(e) ? n2 = e.value : e.textContent !== null && (n2 = e.textContent.replace("\u200B", "")), t !== void 0 && (n2 = n2.replace(new RegExp(t, "g"), "")), n2.trim().length === 0);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
    var t = ke2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return t.isNodeEmpty;
    } });
  })(Oe2);
  Object.defineProperty(ye2, "__esModule", { value: true });
  ye2.isEmpty = $n;
  var Nn = Ce2;
  var An = Oe2;
  function $n(e, t) {
    e.normalize();
    for (var n2 = [e]; n2.length > 0; ) {
      var r2 = n2.shift();
      if (r2) {
        if (e = r2, (0, Nn.isLeaf)(e) && !(0, An.isNodeEmpty)(e, t))
          return false;
        n2.push.apply(n2, Array.from(e.childNodes));
      }
    }
    return true;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
    var t = ye2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return t.isEmpty;
    } });
  })(Ze2);
  var xe2 = {};
  var _e2 = {};
  Object.defineProperty(_e2, "__esModule", { value: true });
  _e2.isFragment = Wn;
  var Bn = le2;
  function Wn(e) {
    return (0, Bn.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
    var t = _e2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return t.isFragment;
    } });
  })(xe2);
  var et2 = {};
  var Ee2 = {};
  Object.defineProperty(Ee2, "__esModule", { value: true });
  Ee2.isHTMLString = Hn;
  var Dn = B;
  function Hn(e) {
    var t = (0, Dn.make)("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
    var t = Ee2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return t.isHTMLString;
    } });
  })(et2);
  var tt2 = {};
  var Ie2 = {};
  Object.defineProperty(Ie2, "__esModule", { value: true });
  Ie2.offset = Fn;
  function Fn(e) {
    var t = e.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, r2 = window.pageYOffset || document.documentElement.scrollTop, i2 = t.top + r2, a5 = t.left + n2;
    return {
      top: i2,
      left: a5,
      bottom: i2 + t.height,
      right: a5 + t.width
    };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
    var t = Ie2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return t.offset;
    } });
  })(tt2);
  var nt2 = {};
  var we2 = {};
  Object.defineProperty(we2, "__esModule", { value: true });
  we2.prepend = Rn;
  function Rn(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n2) {
      return e.prepend(n2);
    })) : e.prepend(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
    var t = we2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return t.prepend;
    } });
  })(nt2);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = V2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
    var n2 = k;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return n2.isNativeInput;
    } });
    var r2 = Fe2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return r2.append;
    } });
    var i2 = Z2;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return i2.blockElements;
    } });
    var a5 = Re2;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return a5.calculateBaseline;
    } });
    var l3 = qe2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return l3.canSetCaret;
    } });
    var s4 = $;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return s4.containsOnlyInlineElements;
    } });
    var o3 = Ke2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return o3.fragmentToString;
    } });
    var d4 = Xe2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return d4.getContentLength;
    } });
    var u2 = ce2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return u2.getDeepestBlockElements;
    } });
    var p3 = Ve2;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return p3.getDeepestNode;
    } });
    var g5 = Je2;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return g5.findAllInputs;
    } });
    var w5 = Qe2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return w5.isCollapsedWhitespaces;
    } });
    var _3 = ne2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return _3.isContentEditable;
    } });
    var ut3 = ve2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return ut3.isElement;
    } });
    var ct3 = Ze2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return ct3.isEmpty;
    } });
    var dt3 = xe2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return dt3.isFragment;
    } });
    var ft3 = et2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return ft3.isHTMLString;
    } });
    var pt3 = Ce2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return pt3.isLeaf;
    } });
    var ht3 = Oe2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return ht3.isNodeEmpty;
    } });
    var mt2 = W2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return mt2.isLineBreakTag;
    } });
    var gt3 = D2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return gt3.isSingleTag;
    } });
    var vt3 = B;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return vt3.make;
    } });
    var bt3 = tt2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return bt3.offset;
    } });
    var yt3 = nt2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return yt3.prepend;
    } });
  })(c);
  var m = "cdx-list";
  var h2 = {
    wrapper: m,
    item: `${m}__item`,
    itemContent: `${m}__item-content`,
    itemChildren: `${m}__item-children`
  };
  var v2 = class _v {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        orderedList: `${m}-ordered`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n2) {
      this.config = n2, this.readOnly = t;
    }
    /**
     * Renders ol wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ol element
     */
    renderWrapper(t) {
      let n2;
      return t === true ? n2 = c.make("ol", [_v.CSS.wrapper, _v.CSS.orderedList]) : n2 = c.make("ol", [_v.CSS.orderedList, _v.CSS.itemChildren]), n2;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param _meta - meta of the list item unused in rendering of the ordered list
     * @returns - created html list item element
     */
    renderItem(t, n2) {
      const r2 = c.make("li", _v.CSS.item), i2 = c.make("div", _v.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      });
      return r2.appendChild(i2), r2;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n2 = t.querySelector(`.${_v.CSS.itemContent}`);
      return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
    }
    /**
     * Returns item meta, for ordered list
     * @returns item meta object
     */
    getItemMeta() {
      return {};
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return {};
    }
  };
  var b2 = class _b {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        unorderedList: `${m}-unordered`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n2) {
      this.config = n2, this.readOnly = t;
    }
    /**
     * Renders ol wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ul element
     */
    renderWrapper(t) {
      let n2;
      return t === true ? n2 = c.make("ul", [_b.CSS.wrapper, _b.CSS.unorderedList]) : n2 = c.make("ul", [_b.CSS.unorderedList, _b.CSS.itemChildren]), n2;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param _meta - meta of the list item unused in rendering of the unordered list
     * @returns - created html list item element
     */
    renderItem(t, n2) {
      const r2 = c.make("li", _b.CSS.item), i2 = c.make("div", _b.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      });
      return r2.appendChild(i2), r2;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n2 = t.querySelector(`.${_b.CSS.itemContent}`);
      return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
    }
    /**
     * Returns item meta, for unordered list
     * @returns Item meta object
     */
    getItemMeta() {
      return {};
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return {};
    }
  };
  function O2(e) {
    return e.nodeType === Node.ELEMENT_NODE;
  }
  var P = {};
  var Pe2 = {};
  var H2 = {};
  var F2 = {};
  Object.defineProperty(F2, "__esModule", { value: true });
  F2.getContenteditableSlice = Un;
  var qn = c;
  function Un(e, t, n2, r2, i2) {
    var a5;
    i2 === void 0 && (i2 = false);
    var l3 = document.createRange();
    if (r2 === "left" ? (l3.setStart(e, 0), l3.setEnd(t, n2)) : (l3.setStart(t, n2), l3.setEnd(e, e.childNodes.length)), i2 === true) {
      var s4 = l3.extractContents();
      return (0, qn.fragmentToString)(s4);
    }
    var o3 = l3.cloneContents(), d4 = document.createElement("div");
    d4.appendChild(o3);
    var u2 = (a5 = d4.textContent) !== null && a5 !== void 0 ? a5 : "";
    return u2;
  }
  Object.defineProperty(H2, "__esModule", { value: true });
  H2.checkContenteditableSliceForEmptiness = Xn;
  var zn = c;
  var Kn = F2;
  function Xn(e, t, n2, r2) {
    var i2 = (0, Kn.getContenteditableSlice)(e, t, n2, r2);
    return (0, zn.isCollapsedWhitespaces)(i2);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.checkContenteditableSliceForEmptiness = void 0;
    var t = H2;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
      return t.checkContenteditableSliceForEmptiness;
    } });
  })(Pe2);
  var rt2 = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContenteditableSlice = void 0;
    var t = F2;
    Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
      return t.getContenteditableSlice;
    } });
  })(rt2);
  var it2 = {};
  var je2 = {};
  Object.defineProperty(je2, "__esModule", { value: true });
  je2.focus = Vn;
  var Gn = c;
  function Vn(e, t) {
    var n2, r2;
    if (t === void 0 && (t = true), (0, Gn.isNativeInput)(e)) {
      e.focus();
      var i2 = t ? 0 : e.value.length;
      e.setSelectionRange(i2, i2);
    } else {
      var a5 = document.createRange(), l3 = window.getSelection();
      if (!l3)
        return;
      var s4 = function(g5, w5) {
        w5 === void 0 && (w5 = false);
        var _3 = document.createTextNode("");
        w5 ? g5.insertBefore(_3, g5.firstChild) : g5.appendChild(_3), a5.setStart(_3, 0), a5.setEnd(_3, 0);
      }, o3 = function(g5) {
        return g5 != null;
      }, d4 = e.childNodes, u2 = t ? d4[0] : d4[d4.length - 1];
      if (o3(u2)) {
        for (; o3(u2) && u2.nodeType !== Node.TEXT_NODE; )
          u2 = t ? u2.firstChild : u2.lastChild;
        if (o3(u2) && u2.nodeType === Node.TEXT_NODE) {
          var p3 = (r2 = (n2 = u2.textContent) === null || n2 === void 0 ? void 0 : n2.length) !== null && r2 !== void 0 ? r2 : 0, i2 = t ? 0 : p3;
          a5.setStart(u2, i2), a5.setEnd(u2, i2);
        } else
          s4(e, t);
      } else
        s4(e);
      l3.removeAllRanges(), l3.addRange(a5);
    }
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.focus = void 0;
    var t = je2;
    Object.defineProperty(e, "focus", { enumerable: true, get: function() {
      return t.focus;
    } });
  })(it2);
  var Te2 = {};
  var R2 = {};
  Object.defineProperty(R2, "__esModule", { value: true });
  R2.getCaretNodeAndOffset = Yn;
  function Yn() {
    var e = window.getSelection();
    if (e === null)
      return [null, 0];
    var t = e.focusNode, n2 = e.focusOffset;
    return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n2] !== void 0 ? (t = t.childNodes[n2], n2 = 0) : (t = t.childNodes[n2 - 1], t.textContent !== null && (n2 = t.textContent.length))), [t, n2]);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getCaretNodeAndOffset = void 0;
    var t = R2;
    Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
      return t.getCaretNodeAndOffset;
    } });
  })(Te2);
  var at2 = {};
  var q2 = {};
  Object.defineProperty(q2, "__esModule", { value: true });
  q2.getRange = Jn;
  function Jn() {
    var e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getRange = void 0;
    var t = q2;
    Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
      return t.getRange;
    } });
  })(at2);
  var lt2 = {};
  var Me2 = {};
  Object.defineProperty(Me2, "__esModule", { value: true });
  Me2.isCaretAtEndOfInput = xn;
  var De2 = c;
  var Qn = Te2;
  var Zn = Pe2;
  function xn(e) {
    var t = (0, De2.getDeepestNode)(e, true);
    if (t === null)
      return true;
    if ((0, De2.isNativeInput)(t))
      return t.selectionEnd === t.value.length;
    var n2 = (0, Qn.getCaretNodeAndOffset)(), r2 = n2[0], i2 = n2[1];
    return r2 === null ? false : (0, Zn.checkContenteditableSliceForEmptiness)(e, r2, i2, "right");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtEndOfInput = void 0;
    var t = Me2;
    Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
      return t.isCaretAtEndOfInput;
    } });
  })(lt2);
  var st2 = {};
  var Le2 = {};
  Object.defineProperty(Le2, "__esModule", { value: true });
  Le2.isCaretAtStartOfInput = nr;
  var T = c;
  var er = R2;
  var tr = H2;
  function nr(e) {
    var t = (0, T.getDeepestNode)(e);
    if (t === null || (0, T.isEmpty)(e))
      return true;
    if ((0, T.isNativeInput)(t))
      return t.selectionEnd === 0;
    if ((0, T.isEmpty)(e))
      return true;
    var n2 = (0, er.getCaretNodeAndOffset)(), r2 = n2[0], i2 = n2[1];
    return r2 === null ? false : (0, tr.checkContenteditableSliceForEmptiness)(e, r2, i2, "left");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtStartOfInput = void 0;
    var t = Le2;
    Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
      return t.isCaretAtStartOfInput;
    } });
  })(st2);
  var ot2 = {};
  var Ne2 = {};
  Object.defineProperty(Ne2, "__esModule", { value: true });
  Ne2.save = ar;
  var rr = c;
  var ir = q2;
  function ar() {
    var e = (0, ir.getRange)(), t = (0, rr.make)("span");
    if (t.id = "cursor", t.hidden = true, !!e)
      return e.insertNode(t), function() {
        var r2 = window.getSelection();
        r2 && (e.setStartAfter(t), e.setEndAfter(t), r2.removeAllRanges(), r2.addRange(e), setTimeout(function() {
          t.remove();
        }, 150));
      };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.save = void 0;
    var t = Ne2;
    Object.defineProperty(e, "save", { enumerable: true, get: function() {
      return t.save;
    } });
  })(ot2);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
    var t = Pe2;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
      return t.checkContenteditableSliceForEmptiness;
    } });
    var n2 = rt2;
    Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
      return n2.getContenteditableSlice;
    } });
    var r2 = it2;
    Object.defineProperty(e, "focus", { enumerable: true, get: function() {
      return r2.focus;
    } });
    var i2 = Te2;
    Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
      return i2.getCaretNodeAndOffset;
    } });
    var a5 = at2;
    Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
      return a5.getRange;
    } });
    var l3 = lt2;
    Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
      return l3.isCaretAtEndOfInput;
    } });
    var s4 = st2;
    Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
      return s4.isCaretAtStartOfInput;
    } });
    var o3 = ot2;
    Object.defineProperty(e, "save", { enumerable: true, get: function() {
      return o3.save;
    } });
  })(P);
  var f = class _f {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        checklist: `${m}-checklist`,
        itemChecked: `${m}__checkbox--checked`,
        noHover: `${m}__checkbox--no-hover`,
        checkbox: `${m}__checkbox-check`,
        checkboxContainer: `${m}__checkbox`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n2) {
      this.config = n2, this.readOnly = t;
    }
    /**
     * Renders ul wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ul element
     */
    renderWrapper(t) {
      let n2;
      return t === true ? (n2 = c.make("ul", [_f.CSS.wrapper, _f.CSS.checklist]), n2.addEventListener("click", (r2) => {
        const i2 = r2.target;
        if (i2) {
          const a5 = i2.closest(`.${_f.CSS.checkboxContainer}`);
          a5 && a5.contains(i2) && this.toggleCheckbox(a5);
        }
      })) : n2 = c.make("ul", [_f.CSS.checklist, _f.CSS.itemChildren]), n2;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param meta - meta of the list item used in rendering of the checklist
     * @returns - created html list item element
     */
    renderItem(t, n2) {
      const r2 = c.make("li", [_f.CSS.item, _f.CSS.item]), i2 = c.make("div", _f.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      }), a5 = c.make("span", _f.CSS.checkbox), l3 = c.make("div", _f.CSS.checkboxContainer);
      return n2.checked === true && l3.classList.add(_f.CSS.itemChecked), a5.innerHTML = Ct2, l3.appendChild(a5), r2.appendChild(l3), r2.appendChild(i2), r2;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n2 = t.querySelector(`.${_f.CSS.itemContent}`);
      return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
    }
    /**
     * Return meta object of certain element
     * @param item - will be returned meta information of this item
     * @returns Item meta object
     */
    getItemMeta(t) {
      const n2 = t.querySelector(`.${_f.CSS.checkboxContainer}`);
      return {
        checked: n2 ? n2.classList.contains(_f.CSS.itemChecked) : false
      };
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return { checked: false };
    }
    /**
     * Toggle checklist item state
     * @param checkbox - checkbox element to be toggled
     */
    toggleCheckbox(t) {
      t.classList.toggle(_f.CSS.itemChecked), t.classList.add(_f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: true });
    }
    /**
     * Removes class responsible for special hover behavior on an item
     * @param el - item wrapper
     */
    removeSpecialHoverBehavior(t) {
      t.classList.remove(_f.CSS.noHover);
    }
  };
  function U2(e, t = "after") {
    const n2 = [];
    let r2;
    function i2(a5) {
      switch (t) {
        case "after":
          return a5.nextElementSibling;
        case "before":
          return a5.previousElementSibling;
      }
    }
    for (r2 = i2(e); r2 !== null; )
      n2.push(r2), r2 = i2(r2);
    return n2.length !== 0 ? n2 : null;
  }
  function y2(e, t = true) {
    let n2 = e;
    return e.classList.contains(h2.item) && (n2 = e.querySelector(`.${h2.itemChildren}`)), n2 === null ? [] : t ? Array.from(n2.querySelectorAll(`:scope > .${h2.item}`)) : Array.from(n2.querySelectorAll(`.${h2.item}`));
  }
  function lr(e) {
    return e.nextElementSibling === null;
  }
  function sr(e) {
    return e.querySelector(`.${h2.itemChildren}`) !== null;
  }
  function C(e) {
    return e.querySelector(`.${h2.itemChildren}`);
  }
  function z2(e) {
    let t = e;
    e.classList.contains(h2.item) && (t = C(e)), t !== null && y2(t).length === 0 && t.remove();
  }
  function N2(e) {
    return e.querySelector(`.${h2.itemContent}`);
  }
  function E(e, t = true) {
    const n2 = N2(e);
    n2 && P.focus(n2, t);
  }
  var K2 = class {
    /**
     * Getter method to get current item
     * @returns current list item or null if caret position is not undefined
     */
    get currentItem() {
      const t = window.getSelection();
      if (!t)
        return null;
      let n2 = t.anchorNode;
      return !n2 || (O2(n2) || (n2 = n2.parentNode), !n2) || !O2(n2) ? null : n2.closest(`.${h2.item}`);
    }
    /**
     * Method that returns nesting level of the current item, null if there is no selection
     */
    get currentItemLevel() {
      const t = this.currentItem;
      if (t === null)
        return null;
      let n2 = t.parentNode, r2 = 0;
      for (; n2 !== null && n2 !== this.listWrapper; )
        O2(n2) && n2.classList.contains(h2.item) && (r2 += 1), n2 = n2.parentNode;
      return r2 + 1;
    }
    /**
     * Assign all passed params and renderer to relevant class properties
     * @param params - tool constructor options
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - Editor.js API
     * @param params.readOnly - read-only mode flag
     * @param renderer - renderer instance initialized in tool class
     */
    constructor({ data: t, config: n2, api: r2, readOnly: i2, block: a5 }, l3) {
      this.config = n2, this.data = t, this.readOnly = i2, this.api = r2, this.block = a5, this.renderer = l3;
    }
    /**
     * Function that is responsible for rendering list with contents
     * @returns Filled with content wrapper element of the list
     */
    render() {
      return this.listWrapper = this.renderer.renderWrapper(true), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
        [
          {
            content: "",
            meta: {},
            items: []
          }
        ],
        this.listWrapper
      ), this.readOnly || this.listWrapper.addEventListener(
        "keydown",
        (t) => {
          switch (t.key) {
            case "Enter":
              this.enterPressed(t);
              break;
            case "Backspace":
              this.backspace(t);
              break;
            case "Tab":
              t.shiftKey ? this.shiftTab(t) : this.addTab(t);
              break;
          }
        },
        false
      ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
    }
    /**
     * Function that is responsible for list content saving
     * @param wrapper - optional argument wrapper
     * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
     */
    save(t) {
      const n2 = t ?? this.listWrapper, r2 = (l3) => y2(l3).map((o3) => {
        const d4 = C(o3), u2 = this.renderer.getItemContent(o3), p3 = this.renderer.getItemMeta(o3), g5 = d4 ? r2(d4) : [];
        return {
          content: u2,
          meta: p3,
          items: g5
        };
      }), i2 = n2 ? r2(n2) : [];
      let a5 = {
        style: this.data.style,
        meta: {},
        items: i2
      };
      return this.data.style === "ordered" && (a5.meta = {
        start: this.data.meta.start,
        counterType: this.data.meta.counterType
      }), a5;
    }
    /**
     * On paste sanitzation config. Allow only tags that are allowed in the Tool.
     * @returns - config that determines tags supposted by paste handler
     * @todo - refactor and move to list instance
     */
    static get pasteConfig() {
      return {
        tags: ["OL", "UL", "LI"]
      };
    }
    /**
     * Method that specified hot to merge two List blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * Content of the first item of the next List would be merged with deepest item in current list
     * Other items of the next List would be appended to the current list without any changes in nesting levels
     * @param data - data of the second list to be merged with current
     */
    merge(t) {
      const n2 = this.block.holder.querySelectorAll(`.${h2.item}`), r2 = n2[n2.length - 1], i2 = N2(r2);
      if (r2 === null || i2 === null || (i2.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
        return;
      const a5 = y2(this.listWrapper);
      if (a5.length === 0)
        return;
      const l3 = a5[a5.length - 1];
      let s4 = C(l3);
      const o3 = t.items.shift();
      o3 !== void 0 && (o3.items.length !== 0 && (s4 === null && (s4 = this.renderer.renderWrapper(false)), this.appendItems(o3.items, s4)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
    }
    /**
     * On paste callback that is fired from Editor.
     * @param event - event with pasted data
     * @todo - refactor and move to list instance
     */
    onPaste(t) {
      const n2 = t.detail.data;
      this.data = this.pasteHandler(n2);
      const r2 = this.listWrapper;
      r2 && r2.parentNode && r2.parentNode.replaceChild(this.render(), r2);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     * @param element - html element that contains whole list
     * @todo - refactor and move to list instance
     */
    pasteHandler(t) {
      const { tagName: n2 } = t;
      let r2 = "unordered", i2;
      switch (n2) {
        case "OL":
          r2 = "ordered", i2 = "ol";
          break;
        case "UL":
        case "LI":
          r2 = "unordered", i2 = "ul";
      }
      const a5 = {
        style: r2,
        meta: {},
        items: []
      };
      r2 === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
      const l3 = (s4) => Array.from(s4.querySelectorAll(":scope > li")).map((d4) => {
        const u2 = d4.querySelector(`:scope > ${i2}`), p3 = u2 ? l3(u2) : [];
        return {
          content: d4.innerHTML ?? "",
          meta: {},
          items: p3
        };
      });
      return a5.items = l3(t), a5;
    }
    /**
     * Changes ordered list start property value
     * @param index - new value of the start property
     */
    changeStartWith(t) {
      this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
    }
    /**
     * Changes ordered list counterType property value
     * @param counterType - new value of the counterType value
     */
    changeCounters(t) {
      this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
    }
    /**
     * Handles Enter keypress
     * @param event - keydown
     */
    enterPressed(t) {
      var s4;
      const n2 = this.currentItem;
      if (t.stopPropagation(), t.preventDefault(), t.isComposing || n2 === null)
        return;
      const r2 = ((s4 = this.renderer) == null ? void 0 : s4.getItemContent(n2).trim().length) === 0, i2 = n2.parentNode === this.listWrapper, a5 = n2.previousElementSibling === null, l3 = this.api.blocks.getCurrentBlockIndex();
      if (i2 && r2)
        if (lr(n2) && !sr(n2)) {
          a5 ? this.convertItemToDefaultBlock(l3, true) : this.convertItemToDefaultBlock();
          return;
        } else {
          this.splitList(n2);
          return;
        }
      else if (r2) {
        this.unshiftItem(n2);
        return;
      } else
        this.splitItem(n2);
    }
    /**
     * Handle backspace
     * @param event - keydown
     */
    backspace(t) {
      const n2 = this.currentItem;
      if (n2 !== null && P.isCaretAtStartOfInput(n2)) {
        if (t.stopPropagation(), n2.parentNode === this.listWrapper && n2.previousElementSibling === null) {
          this.convertFirstItemToDefaultBlock();
          return;
        }
        t.preventDefault(), this.mergeItemWithPrevious(n2);
      }
    }
    /**
     * Reduce indentation for current item
     * @param event - keydown
     */
    shiftTab(t) {
      t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
    }
    /**
     * Decrease indentation of the passed item
     * @param item - list item to be unshifted
     */
    unshiftItem(t) {
      if (!t.parentNode || !O2(t.parentNode))
        return;
      const n2 = t.parentNode.closest(`.${h2.item}`);
      if (!n2)
        return;
      let r2 = C(t);
      if (t.parentElement === null)
        return;
      const i2 = U2(t);
      i2 !== null && (r2 === null && (r2 = this.renderer.renderWrapper(false)), i2.forEach((a5) => {
        r2.appendChild(a5);
      }), t.appendChild(r2)), n2.after(t), E(t, false), z2(n2);
    }
    /**
     * Method that is used for list splitting and moving trailing items to the new separated list
     * @param item - current item html element
     */
    splitList(t) {
      const n2 = y2(t), r2 = this.block, i2 = this.api.blocks.getCurrentBlockIndex();
      if (n2.length !== 0) {
        const o3 = n2[0];
        this.unshiftItem(o3), E(t, false);
      }
      if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
        this.convertItemToDefaultBlock(i2);
        return;
      }
      const a5 = U2(t);
      if (a5 === null)
        return;
      const l3 = this.renderer.renderWrapper(true);
      a5.forEach((o3) => {
        l3.appendChild(o3);
      });
      const s4 = this.save(l3);
      s4.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r2 == null ? void 0 : r2.name, s4, this.config, i2 + 1), this.convertItemToDefaultBlock(i2 + 1), l3.remove();
    }
    /**
     * Method that is used for splitting item content and moving trailing content to the new sibling item
     * @param currentItem - current item html element
     */
    splitItem(t) {
      const [n2, r2] = P.getCaretNodeAndOffset();
      if (n2 === null)
        return;
      const i2 = N2(t);
      let a5;
      i2 === null ? a5 = "" : a5 = P.getContenteditableSlice(i2, n2, r2, "right", true);
      const l3 = C(t), s4 = this.renderItem(a5);
      t == null || t.after(s4), l3 && s4.appendChild(l3), E(s4);
    }
    /**
     * Method that is used for merging current item with previous one
     * Content of the current item would be appended to the previous item
     * Current item children would not change nesting level
     * @param item - current item html element
     */
    mergeItemWithPrevious(t) {
      const n2 = t.previousElementSibling, r2 = t.parentNode;
      if (r2 === null || !O2(r2))
        return;
      const i2 = r2.closest(`.${h2.item}`);
      if (!n2 && !i2 || n2 && !O2(n2))
        return;
      let a5;
      if (n2) {
        const p3 = y2(n2, false);
        p3.length !== 0 && p3.length !== 0 ? a5 = p3[p3.length - 1] : a5 = n2;
      } else
        a5 = i2;
      const l3 = this.renderer.getItemContent(t);
      if (!a5)
        return;
      E(a5, false);
      const s4 = N2(a5);
      if (s4 === null)
        return;
      s4.insertAdjacentHTML("beforeend", l3);
      const o3 = y2(t);
      if (o3.length === 0) {
        t.remove(), z2(a5);
        return;
      }
      const d4 = n2 || i2, u2 = C(d4) ?? this.renderer.renderWrapper(false);
      n2 ? o3.forEach((p3) => {
        u2.appendChild(p3);
      }) : o3.forEach((p3) => {
        u2.prepend(p3);
      }), C(d4) === null && a5.appendChild(u2), t.remove();
    }
    /**
     * Add indentation to current item
     * @param event - keydown
     */
    addTab(t) {
      var a5;
      t.stopPropagation(), t.preventDefault();
      const n2 = this.currentItem;
      if (!n2)
        return;
      if (((a5 = this.config) == null ? void 0 : a5.maxLevel) !== void 0) {
        const l3 = this.currentItemLevel;
        if (l3 !== null && l3 === this.config.maxLevel)
          return;
      }
      const r2 = n2.previousSibling;
      if (r2 === null || !O2(r2))
        return;
      const i2 = C(r2);
      if (i2)
        i2.appendChild(n2), y2(n2).forEach((s4) => {
          i2.appendChild(s4);
        });
      else {
        const l3 = this.renderer.renderWrapper(false);
        l3.appendChild(n2), y2(n2).forEach((o3) => {
          l3.appendChild(o3);
        }), r2.appendChild(l3);
      }
      z2(n2), E(n2, false);
    }
    /**
     * Convert current item to default block with passed index
     * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
     * @param removeList - optional parameter, that represents condition, if List should be removed
     */
    convertItemToDefaultBlock(t, n2) {
      let r2;
      const i2 = this.currentItem, a5 = i2 !== null ? this.renderer.getItemContent(i2) : "";
      n2 === true && this.api.blocks.delete(), t !== void 0 ? r2 = this.api.blocks.insert(void 0, { text: a5 }, void 0, t) : r2 = this.api.blocks.insert(), i2 == null || i2.remove(), this.api.caret.setToBlock(r2, "start");
    }
    /**
     * Convert first item of the list to default block
     * This method could be called when backspace button pressed at start of the first item of the list
     * First item of the list would be converted to the paragraph and first item children would be unshifted
     */
    convertFirstItemToDefaultBlock() {
      const t = this.currentItem;
      if (t === null)
        return;
      const n2 = y2(t);
      if (n2.length !== 0) {
        const l3 = n2[0];
        this.unshiftItem(l3), E(t);
      }
      const r2 = U2(t), i2 = this.api.blocks.getCurrentBlockIndex(), a5 = r2 === null;
      this.convertItemToDefaultBlock(i2, a5);
    }
    /**
     * Method that calls render function of the renderer with a necessary item meta cast
     * @param itemContent - content to be rendered in new item
     * @param meta - meta used in list item rendering
     * @returns html element of the rendered item
     */
    renderItem(t, n2) {
      const r2 = n2 ?? this.renderer.composeDefaultMeta();
      switch (true) {
        case this.renderer instanceof v2:
          return this.renderer.renderItem(t, r2);
        case this.renderer instanceof b2:
          return this.renderer.renderItem(t, r2);
        default:
          return this.renderer.renderItem(t, r2);
      }
    }
    /**
     * Renders children list
     * @param items - list data used in item rendering
     * @param parentElement - where to append passed items
     */
    appendItems(t, n2) {
      t.forEach((r2) => {
        var a5;
        const i2 = this.renderItem(r2.content, r2.meta);
        if (n2.appendChild(i2), r2.items.length) {
          const l3 = (a5 = this.renderer) == null ? void 0 : a5.renderWrapper(false);
          this.appendItems(r2.items, l3), i2.appendChild(l3);
        }
      });
    }
  };
  var I2 = {
    wrapper: `${m}-start-with-field`,
    input: `${m}-start-with-field__input`,
    startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
  };
  function or(e, { value: t, placeholder: n2, attributes: r2, sanitize: i2 }) {
    const a5 = c.make("div", I2.wrapper), l3 = c.make("input", I2.input, {
      placeholder: n2,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1,
      /**
       * Value of the start property, if it is not specified, then it is set to one
       */
      value: t
    });
    for (const s4 in r2)
      l3.setAttribute(s4, r2[s4]);
    return a5.appendChild(l3), l3.addEventListener("input", () => {
      i2 !== void 0 && (l3.value = i2(l3.value));
      const s4 = l3.checkValidity();
      !s4 && !a5.classList.contains(I2.startWithElementWrapperInvalid) && a5.classList.add(I2.startWithElementWrapperInvalid), s4 && a5.classList.contains(I2.startWithElementWrapperInvalid) && a5.classList.remove(I2.startWithElementWrapperInvalid), s4 && e(l3.value);
    }), a5;
  }
  var M = /* @__PURE__ */ new Map([
    /**
     * Value that represents default arabic numbers for counters
     */
    ["Numeric", "numeric"],
    /**
     * Value that represents lower roman numbers for counteres
     */
    ["Lower Roman", "lower-roman"],
    /**
     * Value that represents upper roman numbers for counters
     */
    ["Upper Roman", "upper-roman"],
    /**
     * Value that represents lower alpha characters for counters
     */
    ["Lower Alpha", "lower-alpha"],
    /**
     * Value that represents upper alpha characters for counters
     */
    ["Upper Alpha", "upper-alpha"]
  ]);
  var He = /* @__PURE__ */ new Map([
    /**
     * Value that represents Icon for Numeric counter type
     */
    ["numeric", St2],
    /**
     * Value that represents Icon for Lower Roman counter type
     */
    ["lower-roman", Ot2],
    /**
     * Value that represents Icon for Upper Roman counter type
     */
    ["upper-roman", kt2],
    /**
     * Value that represents Icon for Lower Alpha counter type
     */
    ["lower-alpha", Et2],
    /**
     * Value that represents Icon for Upper Alpha counter type
     */
    ["upper-alpha", _t2]
  ]);
  function ur(e) {
    return e.replace(/\D+/g, "");
  }
  function cr(e) {
    return typeof e.items[0] == "string";
  }
  function dr(e) {
    return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
  }
  function fr(e) {
    const t = [];
    return cr(e) ? (e.items.forEach((n2) => {
      t.push({
        content: n2,
        meta: {},
        items: []
      });
    }), {
      style: e.style,
      meta: {},
      items: t
    }) : dr(e) ? (e.items.forEach((n2) => {
      t.push({
        content: n2.text,
        meta: {
          checked: n2.checked
        },
        items: []
      });
    }), {
      style: "checklist",
      meta: {},
      items: t
    }) : e;
  }
  var G2 = class _G {
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to use native Enter behaviour
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox() {
      return [
        {
          icon: $e2,
          title: "Unordered List",
          data: {
            style: "unordered"
          }
        },
        {
          icon: Be2,
          title: "Ordered List",
          data: {
            style: "ordered"
          }
        },
        {
          icon: Ae2,
          title: "Checklist",
          data: {
            style: "checklist"
          }
        }
      ];
    }
    /**
     * On paste sanitzation config. Allow only tags that are allowed in the Tool.
     * @returns - paste config object used in editor
     */
    static get pasteConfig() {
      return {
        tags: ["OL", "UL", "LI"]
      };
    }
    /**
     * Convert from text to list with import and export list to text
     */
    static get conversionConfig() {
      return {
        export: (t) => _G.joinRecursive(t),
        import: (t, n2) => ({
          meta: {},
          items: [
            {
              content: t,
              meta: {},
              items: []
            }
          ],
          style: (n2 == null ? void 0 : n2.defaultStyle) !== void 0 ? n2.defaultStyle : "unordered"
        })
      };
    }
    /**
     * Get list style name
     */
    get listStyle() {
      return this.data.style || this.defaultListStyle;
    }
    /**
     * Set list style
     * @param style - new style to set
     */
    set listStyle(t) {
      var r2;
      this.data.style = t, this.changeTabulatorByStyle();
      const n2 = this.list.render();
      (r2 = this.listElement) == null || r2.replaceWith(n2), this.listElement = n2;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param params - tool constructor options
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - Editor.js API
     * @param params.readOnly - read-only mode flag
     */
    constructor({ data: t, config: n2, api: r2, readOnly: i2, block: a5 }) {
      var s4;
      this.api = r2, this.readOnly = i2, this.config = n2, this.block = a5, this.defaultListStyle = ((s4 = this.config) == null ? void 0 : s4.defaultStyle) || "unordered";
      const l3 = {
        style: this.defaultListStyle,
        meta: {},
        items: []
      };
      this.data = Object.keys(t).length ? fr(t) : l3, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
    }
    /**
     * Convert from list to text for conversionConfig
     * @param data - current data of the list
     * @returns - string of the recursively merged contents of the items of the list
     */
    static joinRecursive(t) {
      return t.items.map((n2) => `${n2.content} ${_G.joinRecursive(n2)}`).join("");
    }
    /**
     * Function that is responsible for content rendering
     * @returns rendered list wrapper with all contents
     */
    render() {
      return this.listElement = this.list.render(), this.listElement;
    }
    /**
     * Function that is responsible for content saving
     * @returns formatted content used in editor
     */
    save() {
      return this.data = this.list.save(), this.data;
    }
    /**
     * Function that is responsible for mergind two lists into one
     * @param data - data of the next standing list, that should be merged with current
     */
    merge(t) {
      this.list.merge(t);
    }
    /**
     * Creates Block Tune allowing to change the list style
     * @returns array of tune configs
     */
    renderSettings() {
      const t = [
        {
          label: this.api.i18n.t("Unordered"),
          icon: $e2,
          closeOnActivate: true,
          isActive: this.listStyle == "unordered",
          onActivate: () => {
            this.listStyle = "unordered";
          }
        },
        {
          label: this.api.i18n.t("Ordered"),
          icon: Be2,
          closeOnActivate: true,
          isActive: this.listStyle == "ordered",
          onActivate: () => {
            this.listStyle = "ordered";
          }
        },
        {
          label: this.api.i18n.t("Checklist"),
          icon: Ae2,
          closeOnActivate: true,
          isActive: this.listStyle == "checklist",
          onActivate: () => {
            this.listStyle = "checklist";
          }
        }
      ];
      if (this.listStyle === "ordered") {
        const n2 = or(
          (a5) => this.changeStartWith(Number(a5)),
          {
            value: String(this.data.meta.start ?? 1),
            placeholder: "",
            attributes: {
              required: "true"
            },
            sanitize: (a5) => ur(a5)
          }
        ), r2 = [
          {
            label: this.api.i18n.t("Start with"),
            icon: It2,
            children: {
              items: [
                {
                  element: n2,
                  // @ts-expect-error ts(2820) can not use PopoverItem enum from editor.js types
                  type: "html"
                }
              ]
            }
          }
        ], i2 = {
          label: this.api.i18n.t("Counter type"),
          icon: He.get(this.data.meta.counterType),
          children: {
            items: []
          }
        };
        M.forEach((a5, l3) => {
          i2.children.items.push({
            title: this.api.i18n.t(l3),
            icon: He.get(M.get(l3)),
            isActive: this.data.meta.counterType === M.get(l3),
            closeOnActivate: true,
            onActivate: () => {
              this.changeCounters(M.get(l3));
            }
          });
        }), t.push({ type: "separator" }, ...r2, i2);
      }
      return t;
    }
    /**
     * On paste callback that is fired from Editor.
     * @param event - event with pasted data
     */
    onPaste(t) {
      const { tagName: n2 } = t.detail.data;
      switch (n2) {
        case "OL":
          this.listStyle = "ordered";
          break;
        case "UL":
        case "LI":
          this.listStyle = "unordered";
      }
      this.list.onPaste(t);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     * @param element - html element that contains whole list
     */
    pasteHandler(t) {
      return this.list.pasteHandler(t);
    }
    /**
     * Changes ordered list counterType property value
     * @param counterType - new value of the counterType value
     */
    changeCounters(t) {
      var n2;
      (n2 = this.list) == null || n2.changeCounters(t), this.data.meta.counterType = t;
    }
    /**
     * Changes ordered list start property value
     * @param index - new value of the start property
     */
    changeStartWith(t) {
      var n2;
      (n2 = this.list) == null || n2.changeStartWith(t), this.data.meta.start = t;
    }
    /**
     * This method allows changing tabulator respectfully to passed style
     */
    changeTabulatorByStyle() {
      switch (this.listStyle) {
        case "ordered":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new v2(this.readOnly, this.config)
          );
          break;
        case "unordered":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new b2(this.readOnly, this.config)
          );
          break;
        case "checklist":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new f(this.readOnly, this.config)
          );
          break;
      }
    }
  };

  // node_modules/@editorjs/code/dist/code.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
      }
    } catch (o3) {
      console.error("vite-plugin-css-injected-by-js", o3);
    }
  })();
  function c2(l3, t) {
    let a5 = "";
    for (; a5 !== `
` && t > 0; )
      t = t - 1, a5 = l3.substr(t, 1);
    return a5 === `
` && (t += 1), t;
  }
  var h3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
  var d3 = class _d {
    /**
     * Notify core that read-only mode is supported
     * @returns true if read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allows pressing Enter key to create line breaks inside the CodeTool textarea
     * This enables multi-line input within the code editor.
     * @returns true if line breaks are allowed in the textarea
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param options - tool constricting options
     * @param options.data — previously saved plugin code
     * @param options.config - user config for Tool
     * @param options.api - Editor.js API
     * @param options.readOnly - read only mode flag
     */
    constructor({ data: t, config: e, api: a5, readOnly: r2 }) {
      this.api = a5, this.readOnly = r2, this.placeholder = this.api.i18n.t(e.placeholder || _d.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-code",
        textarea: "ce-code__textarea"
      }, this.nodes = {
        holder: null,
        textarea: null
      }, this.data = {
        code: t.code ?? ""
      }, this.nodes.holder = this.drawView();
    }
    /**
     * Return Tool's view
     * @returns this.nodes.holder - Code's wrapper
     */
    render() {
      return this.nodes.holder;
    }
    /**
     * Extract Tool's data from the view
     * @param codeWrapper - CodeTool's wrapper, containing textarea with code
     * @returns - saved plugin code
     */
    save(t) {
      return {
        code: t.querySelector("textarea").value
      };
    }
    /**
     * onPaste callback fired from Editor`s core
     * @param event - event with pasted content
     */
    onPaste(t) {
      const e = t.detail;
      if ("data" in e) {
        const a5 = e.data;
        this.data = {
          code: a5 || ""
        };
      }
    }
    /**
     * Returns Tool`s data from private property
     * @returns
     */
    get data() {
      return this._data;
    }
    /**
     * Set Tool`s data to private property and update view
     * @param data - saved tool data
     */
    set data(t) {
      this._data = t, this.nodes.textarea && (this.nodes.textarea.value = t.code);
    }
    /**
     * Get Tool toolbox settings.
     * Provides the icon and title to display in the toolbox for the CodeTool.
     * @returns An object containing:
     * - icon: SVG representation of the Tool's icon
     * - title: Title to show in the toolbox
     */
    static get toolbox() {
      return {
        icon: h3,
        title: "Code"
      };
    }
    /**
     * Default placeholder for CodeTool's textarea
     * @returns
     */
    static get DEFAULT_PLACEHOLDER() {
      return "Enter a code";
    }
    /**
     *  Used by Editor.js paste handling API.
     *  Provides configuration to handle CODE tag.
     * @returns
     */
    static get pasteConfig() {
      return {
        tags: ["pre"]
      };
    }
    /**
     * Automatic sanitize config
     * @returns
     */
    static get sanitize() {
      return {
        code: true
        // Allow HTML tags
      };
    }
    /**
     * Handles Tab key pressing (adds/removes indentations)
     * @param event - keydown
     */
    tabHandler(t) {
      t.stopPropagation(), t.preventDefault();
      const e = t.target, a5 = t.shiftKey, r2 = e.selectionStart, s4 = e.value, n2 = "  ";
      let i2;
      if (!a5)
        i2 = r2 + n2.length, e.value = s4.substring(0, r2) + n2 + s4.substring(r2);
      else {
        const o3 = c2(s4, r2);
        if (s4.substr(o3, n2.length) !== n2)
          return;
        e.value = s4.substring(0, o3) + s4.substring(o3 + n2.length), i2 = r2 - n2.length;
      }
      e.setSelectionRange(i2, i2);
    }
    /**
     * Create Tool's view
     * @returns
     */
    drawView() {
      const t = document.createElement("div"), e = document.createElement("textarea");
      return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.value = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = true), t.appendChild(e), e.addEventListener("keydown", (a5) => {
        switch (a5.code) {
          case "Tab":
            this.tabHandler(a5);
            break;
        }
      }), this.nodes.textarea = e, t;
    }
  };

  // node_modules/@editorjs/inline-code/dist/inline-code.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")), document.head.appendChild(e);
      }
    } catch (n2) {
      console.error("vite-plugin-css-injected-by-js", n2);
    }
  })();
  var a2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
  var s = class _s {
    constructor({ api: t }) {
      this.tag = "CODE", this.api = t, this.button = null, this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive
      };
    }
    /**
     * Class name for term-tag
     *
     * @type {string}
     */
    static get CSS() {
      return "inline-code";
    }
    /**
     * Specifies Tool as Inline Toolbar Tool
     *
     * @return {boolean}
     */
    static get isInline() {
      return true;
    }
    /**
     * Create button element for Toolbar
     *
     * @return {HTMLElement}
     */
    render() {
      return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
    }
    /**
     * Wrap/Unwrap selected fragment
     *
     * @param {Range} range - selected fragment
     */
    surround(t) {
      if (!t)
        return;
      let e = this.api.selection.findParentTag(this.tag, _s.CSS);
      e ? this.unwrap(e) : this.wrap(t);
    }
    /**
     * Wrap selection with term-tag
     *
     * @param {Range} range - selected fragment
     */
    wrap(t) {
      let e = document.createElement(this.tag);
      e.classList.add(_s.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
    }
    /**
     * Unwrap term-tag
     *
     * @param {HTMLElement} termWrapper - term wrapper tag
     */
    unwrap(t) {
      var i2;
      this.api.selection.expandToTag(t);
      const e = window.getSelection();
      if (!e)
        return;
      const n2 = e.getRangeAt(0), o3 = n2.extractContents();
      (i2 = t.parentNode) == null || i2.removeChild(t), n2.insertNode(o3), e.removeAllRanges(), e.addRange(n2);
    }
    /**
     * Check and change Term's state for current selection
     * 
     * @return {boolean}
     */
    checkState() {
      const t = this.api.selection.findParentTag(this.tag, _s.CSS);
      return this.button && this.button.classList.toggle(this.iconClasses.active, !!t), !!t;
    }
    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    get toolboxIcon() {
      return a2;
    }
    /**
     * Sanitizer rule
     * @return {SanitizerConfig}
     */
    static get sanitize() {
      return {
        code: {
          class: _s.CSS
        }
      };
    }
  };

  // node_modules/@editorjs/quote/dist/quote.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var De3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>';
  var He2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>';
  var Re3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
  var b3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe3(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n2 = function r2() {
        return this instanceof r2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n2.prototype = t.prototype;
    } else
      n2 = {};
    return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
      var i2 = Object.getOwnPropertyDescriptor(e, r2);
      Object.defineProperty(n2, r2, i2.get ? i2 : {
        enumerable: true,
        get: function() {
          return e[r2];
        }
      });
    }), n2;
  }
  var v3 = {};
  var P2 = {};
  var j2 = {};
  Object.defineProperty(j2, "__esModule", { value: true });
  j2.allInputsSelector = We3;
  function We3() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
      return 'input[type="'.concat(t, '"]');
    }).join(", ");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
    var t = j2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
  })(P2);
  var c3 = {};
  var T2 = {};
  Object.defineProperty(T2, "__esModule", { value: true });
  T2.isNativeInput = Ue3;
  function Ue3(e) {
    var t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
    var t = T2;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return t.isNativeInput;
    } });
  })(c3);
  var ie2 = {};
  var C2 = {};
  Object.defineProperty(C2, "__esModule", { value: true });
  C2.append = qe3;
  function qe3(e, t) {
    Array.isArray(t) ? t.forEach(function(n2) {
      e.appendChild(n2);
    }) : e.appendChild(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
    var t = C2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return t.append;
    } });
  })(ie2);
  var L3 = {};
  var S2 = {};
  Object.defineProperty(S2, "__esModule", { value: true });
  S2.blockElements = ze3;
  function ze3() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
    var t = S2;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return t.blockElements;
    } });
  })(L3);
  var ae3 = {};
  var M2 = {};
  Object.defineProperty(M2, "__esModule", { value: true });
  M2.calculateBaseline = Ge3;
  function Ge3(e) {
    var t = window.getComputedStyle(e), n2 = parseFloat(t.fontSize), r2 = parseFloat(t.lineHeight) || n2 * 1.2, i2 = parseFloat(t.paddingTop), a5 = parseFloat(t.borderTopWidth), l3 = parseFloat(t.marginTop), u2 = n2 * 0.8, d4 = (r2 - n2) / 2, s4 = l3 + a5 + i2 + d4 + u2;
    return s4;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
    var t = M2;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return t.calculateBaseline;
    } });
  })(ae3);
  var le3 = {};
  var k2 = {};
  var w2 = {};
  var N3 = {};
  Object.defineProperty(N3, "__esModule", { value: true });
  N3.isContentEditable = Ke3;
  function Ke3(e) {
    return e.contentEditable === "true";
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
    var t = N3;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return t.isContentEditable;
    } });
  })(w2);
  Object.defineProperty(k2, "__esModule", { value: true });
  k2.canSetCaret = Qe3;
  var Xe3 = c3;
  var Ye3 = w2;
  function Qe3(e) {
    var t = true;
    if ((0, Xe3.isNativeInput)(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = (0, Ye3.isContentEditable)(e);
    return t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
    var t = k2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return t.canSetCaret;
    } });
  })(le3);
  var y3 = {};
  var I3 = {};
  function Ve3(e, t, n2) {
    const r2 = n2.value !== void 0 ? "value" : "get", i2 = n2[r2], a5 = `#${t}Cache`;
    if (n2[r2] = function(...l3) {
      return this[a5] === void 0 && (this[a5] = i2.apply(this, l3)), this[a5];
    }, r2 === "get" && n2.set) {
      const l3 = n2.set;
      n2.set = function(u2) {
        delete e[a5], l3.apply(this, u2);
      };
    }
    return n2;
  }
  function ue3() {
    const e = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, t = Object.keys(e).find((n2) => window.navigator.appVersion.toLowerCase().indexOf(n2) !== -1);
    return t !== void 0 && (e[t] = true), e;
  }
  function A3(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
  }
  function Ze3(e) {
    return !A3(e);
  }
  var Je3 = () => typeof window < "u" && window.navigator !== null && A3(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function xe3(e) {
    const t = ue3();
    return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
  }
  function et3(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function tt3(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n2 = window.getSelection(), r2 = document.createRange();
    if (r2.selectNode(t), n2 === null)
      throw new Error("Cannot copy text to clipboard");
    n2.removeAllRanges(), n2.addRange(r2), document.execCommand("copy"), document.body.removeChild(t);
  }
  function nt3(e, t, n2) {
    let r2;
    return (...i2) => {
      const a5 = this, l3 = () => {
        r2 = void 0, n2 !== true && e.apply(a5, i2);
      }, u2 = n2 === true && r2 !== void 0;
      window.clearTimeout(r2), r2 = window.setTimeout(l3, t), u2 && e.apply(a5, i2);
    };
  }
  function o2(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function rt3(e) {
    return o2(e) === "boolean";
  }
  function oe2(e) {
    return o2(e) === "function" || o2(e) === "asyncfunction";
  }
  function it3(e) {
    return oe2(e) && /^\s*class\s+/.test(e.toString());
  }
  function at3(e) {
    return o2(e) === "number";
  }
  function g2(e) {
    return o2(e) === "object";
  }
  function lt3(e) {
    return Promise.resolve(e) === e;
  }
  function ut2(e) {
    return o2(e) === "string";
  }
  function ot3(e) {
    return o2(e) === "undefined";
  }
  function O3(e, ...t) {
    if (!t.length)
      return e;
    const n2 = t.shift();
    if (g2(e) && g2(n2))
      for (const r2 in n2)
        g2(n2[r2]) ? (e[r2] === void 0 && Object.assign(e, { [r2]: {} }), O3(e[r2], n2[r2])) : Object.assign(e, { [r2]: n2[r2] });
    return O3(e, ...t);
  }
  function st3(e, t, n2) {
    const r2 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n2}\xBB instead.`;
    e && console.warn(r2);
  }
  function ct2(e) {
    try {
      return new URL(e).href;
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
  }
  function dt2(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
  }
  var ft2 = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var pt2 = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  var vt2 = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(t) {
      return new Promise((n2, r2) => {
        this.completed = this.completed.then(t).then(n2).catch(r2);
      });
    }
  };
  function gt2(e, t, n2 = void 0) {
    let r2, i2, a5, l3 = null, u2 = 0;
    n2 || (n2 = {});
    const d4 = function() {
      u2 = n2.leading === false ? 0 : Date.now(), l3 = null, a5 = e.apply(r2, i2), l3 === null && (r2 = i2 = null);
    };
    return function() {
      const s4 = Date.now();
      !u2 && n2.leading === false && (u2 = s4);
      const f3 = t - (s4 - u2);
      return r2 = this, i2 = arguments, f3 <= 0 || f3 > t ? (l3 && (clearTimeout(l3), l3 = null), u2 = s4, a5 = e.apply(r2, i2), l3 === null && (r2 = i2 = null)) : !l3 && n2.trailing !== false && (l3 = setTimeout(d4, f3)), a5;
    };
  }
  var mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    PromiseQueue: vt2,
    beautifyShortcut: xe3,
    cacheable: Ve3,
    capitalize: et3,
    copyTextToClipboard: tt3,
    debounce: nt3,
    deepMerge: O3,
    deprecationAssert: st3,
    getUserOS: ue3,
    getValidUrl: ct2,
    isBoolean: rt3,
    isClass: it3,
    isEmpty: Ze3,
    isFunction: oe2,
    isIosDevice: Je3,
    isNumber: at3,
    isObject: g2,
    isPrintableKey: dt2,
    isPromise: lt3,
    isString: ut2,
    isUndefined: ot3,
    keyCodes: ft2,
    mouseButtons: pt2,
    notEmpty: A3,
    throttle: gt2,
    typeOf: o2
  }, Symbol.toStringTag, { value: "Module" }));
  var $2 = /* @__PURE__ */ Fe3(mt);
  Object.defineProperty(I3, "__esModule", { value: true });
  I3.containsOnlyInlineElements = _t3;
  var bt2 = $2;
  var yt2 = L3;
  function _t3(e) {
    var t;
    (0, bt2.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n2 = function(r2) {
      return !(0, yt2.blockElements)().includes(r2.tagName.toLowerCase()) && Array.from(r2.children).every(n2);
    };
    return Array.from(t.children).every(n2);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
    var t = I3;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return t.containsOnlyInlineElements;
    } });
  })(y3);
  var se3 = {};
  var B2 = {};
  var _ = {};
  var D3 = {};
  Object.defineProperty(D3, "__esModule", { value: true });
  D3.make = ht2;
  function ht2(e, t, n2) {
    var r2;
    t === void 0 && (t = null), n2 === void 0 && (n2 = {});
    var i2 = document.createElement(e);
    if (Array.isArray(t)) {
      var a5 = t.filter(function(u2) {
        return u2 !== void 0;
      });
      (r2 = i2.classList).add.apply(r2, a5);
    } else
      t !== null && i2.classList.add(t);
    for (var l3 in n2)
      Object.prototype.hasOwnProperty.call(n2, l3) && (i2[l3] = n2[l3]);
    return i2;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
    var t = D3;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return t.make;
    } });
  })(_);
  Object.defineProperty(B2, "__esModule", { value: true });
  B2.fragmentToString = Ot3;
  var Et3 = _;
  function Ot3(e) {
    var t = (0, Et3.make)("div");
    return t.appendChild(e), t.innerHTML;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
    var t = B2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return t.fragmentToString;
    } });
  })(se3);
  var ce3 = {};
  var H3 = {};
  Object.defineProperty(H3, "__esModule", { value: true });
  H3.getContentLength = jt3;
  var Pt3 = c3;
  function jt3(e) {
    var t, n2;
    return (0, Pt3.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n2 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n2 !== void 0 ? n2 : 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
    var t = H3;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return t.getContentLength;
    } });
  })(ce3);
  var R3 = {};
  var F3 = {};
  var re3 = b3 && b3.__spreadArray || function(e, t, n2) {
    if (n2 || arguments.length === 2)
      for (var r2 = 0, i2 = t.length, a5; r2 < i2; r2++)
        (a5 || !(r2 in t)) && (a5 || (a5 = Array.prototype.slice.call(t, 0, r2)), a5[r2] = t[r2]);
    return e.concat(a5 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(F3, "__esModule", { value: true });
  F3.getDeepestBlockElements = de3;
  var Tt3 = y3;
  function de3(e) {
    return (0, Tt3.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n2) {
      return re3(re3([], t, true), de3(n2), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
    var t = F3;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return t.getDeepestBlockElements;
    } });
  })(R3);
  var fe2 = {};
  var W3 = {};
  var h4 = {};
  var U3 = {};
  Object.defineProperty(U3, "__esModule", { value: true });
  U3.isLineBreakTag = Ct3;
  function Ct3(e) {
    return [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
    var t = U3;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return t.isLineBreakTag;
    } });
  })(h4);
  var E2 = {};
  var q3 = {};
  Object.defineProperty(q3, "__esModule", { value: true });
  q3.isSingleTag = Lt3;
  function Lt3(e) {
    return [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
    var t = q3;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return t.isSingleTag;
    } });
  })(E2);
  Object.defineProperty(W3, "__esModule", { value: true });
  W3.getDeepestNode = pe3;
  var St3 = c3;
  var Mt3 = h4;
  var kt3 = E2;
  function pe3(e, t) {
    t === void 0 && (t = false);
    var n2 = t ? "lastChild" : "firstChild", r2 = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n2]) {
      var i2 = e[n2];
      if ((0, kt3.isSingleTag)(i2) && !(0, St3.isNativeInput)(i2) && !(0, Mt3.isLineBreakTag)(i2))
        if (i2[r2])
          i2 = i2[r2];
        else if (i2.parentNode !== null && i2.parentNode[r2])
          i2 = i2.parentNode[r2];
        else
          return i2.parentNode;
      return pe3(i2, t);
    }
    return e;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
    var t = W3;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return t.getDeepestNode;
    } });
  })(fe2);
  var ve3 = {};
  var z3 = {};
  var p = b3 && b3.__spreadArray || function(e, t, n2) {
    if (n2 || arguments.length === 2)
      for (var r2 = 0, i2 = t.length, a5; r2 < i2; r2++)
        (a5 || !(r2 in t)) && (a5 || (a5 = Array.prototype.slice.call(t, 0, r2)), a5[r2] = t[r2]);
    return e.concat(a5 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(z3, "__esModule", { value: true });
  z3.findAllInputs = $t3;
  var wt3 = y3;
  var Nt3 = R3;
  var It3 = P2;
  var At3 = c3;
  function $t3(e) {
    return Array.from(e.querySelectorAll((0, It3.allInputsSelector)())).reduce(function(t, n2) {
      return (0, At3.isNativeInput)(n2) || (0, wt3.containsOnlyInlineElements)(n2) ? p(p([], t, true), [n2], false) : p(p([], t, true), (0, Nt3.getDeepestBlockElements)(n2), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
    var t = z3;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return t.findAllInputs;
    } });
  })(ve3);
  var ge2 = {};
  var G3 = {};
  Object.defineProperty(G3, "__esModule", { value: true });
  G3.isCollapsedWhitespaces = Bt3;
  function Bt3(e) {
    return !/[^\t\n\r ]/.test(e);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
    var t = G3;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return t.isCollapsedWhitespaces;
    } });
  })(ge2);
  var K3 = {};
  var X3 = {};
  Object.defineProperty(X3, "__esModule", { value: true });
  X3.isElement = Ht3;
  var Dt3 = $2;
  function Ht3(e) {
    return (0, Dt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
    var t = X3;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return t.isElement;
    } });
  })(K3);
  var me3 = {};
  var Y2 = {};
  var Q3 = {};
  var V3 = {};
  Object.defineProperty(V3, "__esModule", { value: true });
  V3.isLeaf = Rt3;
  function Rt3(e) {
    return e === null ? false : e.childNodes.length === 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
    var t = V3;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return t.isLeaf;
    } });
  })(Q3);
  var Z3 = {};
  var J3 = {};
  Object.defineProperty(J3, "__esModule", { value: true });
  J3.isNodeEmpty = zt3;
  var Ft3 = h4;
  var Wt3 = K3;
  var Ut3 = c3;
  var qt3 = E2;
  function zt3(e, t) {
    var n2 = "";
    return (0, qt3.isSingleTag)(e) && !(0, Ft3.isLineBreakTag)(e) ? false : ((0, Wt3.isElement)(e) && (0, Ut3.isNativeInput)(e) ? n2 = e.value : e.textContent !== null && (n2 = e.textContent.replace("\u200B", "")), t !== void 0 && (n2 = n2.replace(new RegExp(t, "g"), "")), n2.trim().length === 0);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
    var t = J3;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return t.isNodeEmpty;
    } });
  })(Z3);
  Object.defineProperty(Y2, "__esModule", { value: true });
  Y2.isEmpty = Xt3;
  var Gt3 = Q3;
  var Kt3 = Z3;
  function Xt3(e, t) {
    e.normalize();
    for (var n2 = [e]; n2.length > 0; ) {
      var r2 = n2.shift();
      if (r2) {
        if (e = r2, (0, Gt3.isLeaf)(e) && !(0, Kt3.isNodeEmpty)(e, t))
          return false;
        n2.push.apply(n2, Array.from(e.childNodes));
      }
    }
    return true;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
    var t = Y2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return t.isEmpty;
    } });
  })(me3);
  var be3 = {};
  var x2 = {};
  Object.defineProperty(x2, "__esModule", { value: true });
  x2.isFragment = Qt3;
  var Yt3 = $2;
  function Qt3(e) {
    return (0, Yt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
    var t = x2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return t.isFragment;
    } });
  })(be3);
  var ye3 = {};
  var ee2 = {};
  Object.defineProperty(ee2, "__esModule", { value: true });
  ee2.isHTMLString = Zt3;
  var Vt3 = _;
  function Zt3(e) {
    var t = (0, Vt3.make)("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
    var t = ee2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return t.isHTMLString;
    } });
  })(ye3);
  var _e3 = {};
  var te3 = {};
  Object.defineProperty(te3, "__esModule", { value: true });
  te3.offset = Jt3;
  function Jt3(e) {
    var t = e.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, r2 = window.pageYOffset || document.documentElement.scrollTop, i2 = t.top + r2, a5 = t.left + n2;
    return {
      top: i2,
      left: a5,
      bottom: i2 + t.height,
      right: a5 + t.width
    };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
    var t = te3;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return t.offset;
    } });
  })(_e3);
  var he3 = {};
  var ne3 = {};
  Object.defineProperty(ne3, "__esModule", { value: true });
  ne3.prepend = xt3;
  function xt3(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n2) {
      return e.prepend(n2);
    })) : e.prepend(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
    var t = ne3;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return t.prepend;
    } });
  })(he3);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = P2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
    var n2 = c3;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return n2.isNativeInput;
    } });
    var r2 = ie2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return r2.append;
    } });
    var i2 = L3;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return i2.blockElements;
    } });
    var a5 = ae3;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return a5.calculateBaseline;
    } });
    var l3 = le3;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return l3.canSetCaret;
    } });
    var u2 = y3;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return u2.containsOnlyInlineElements;
    } });
    var d4 = se3;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return d4.fragmentToString;
    } });
    var s4 = ce3;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return s4.getContentLength;
    } });
    var f3 = R3;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return f3.getDeepestBlockElements;
    } });
    var Oe3 = fe2;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return Oe3.getDeepestNode;
    } });
    var Pe3 = ve3;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return Pe3.findAllInputs;
    } });
    var je3 = ge2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return je3.isCollapsedWhitespaces;
    } });
    var Te3 = w2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return Te3.isContentEditable;
    } });
    var Ce3 = K3;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return Ce3.isElement;
    } });
    var Le3 = me3;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return Le3.isEmpty;
    } });
    var Se3 = be3;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return Se3.isFragment;
    } });
    var Me3 = ye3;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return Me3.isHTMLString;
    } });
    var ke3 = Q3;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return ke3.isLeaf;
    } });
    var we3 = Z3;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return we3.isNodeEmpty;
    } });
    var Ne3 = h4;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return Ne3.isLineBreakTag;
    } });
    var Ie3 = E2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return Ie3.isSingleTag;
    } });
    var Ae3 = _;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return Ae3.make;
    } });
    var $e3 = _e3;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return $e3.offset;
    } });
    var Be3 = he3;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return Be3.prepend;
    } });
  })(v3);
  var Ee3 = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee3 || {});
  var m2 = class _m {
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param params - Quote Tool constructor params
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - editor.js api
     * @param params.readOnly - read only mode flag
     */
    constructor({ data: t, config: n2, api: r2, readOnly: i2, block: a5 }) {
      const { DEFAULT_ALIGNMENT: l3 } = _m;
      this.api = r2, this.readOnly = i2, this.quotePlaceholder = r2.i18n.t((n2 == null ? void 0 : n2.quotePlaceholder) ?? _m.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r2.i18n.t((n2 == null ? void 0 : n2.captionPlaceholder) ?? _m.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
        text: t.text || "",
        caption: t.caption || "",
        alignment: Object.values(Ee3).includes(t.alignment) ? t.alignment : (n2 == null ? void 0 : n2.defaultAlignment) ?? l3
      }, this.css = {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      }, this.block = a5;
    }
    /**
     * Notify core that read-only mode is supported
     * @returns true
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     * @returns icon and title of the toolbox
     */
    static get toolbox() {
      return {
        icon: Re3,
        title: "Quote"
      };
    }
    /**
     * Empty Quote is not empty Block
     * @returns true
     */
    static get contentless() {
      return true;
    }
    /**
     * Allow to press Enter inside the Quote
     * @returns true
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Default placeholder for quote text
     * @returns 'Enter a quote'
     */
    static get DEFAULT_QUOTE_PLACEHOLDER() {
      return "Enter a quote";
    }
    /**
     * Default placeholder for quote caption
     * @returns 'Enter a caption'
     */
    static get DEFAULT_CAPTION_PLACEHOLDER() {
      return "Enter a caption";
    }
    /**
     * Default quote alignment
     * @returns Alignment.Left
     */
    static get DEFAULT_ALIGNMENT() {
      return "left";
    }
    /**
     * Allow Quote to be converted to/from other blocks
     * @returns conversion config object
     */
    static get conversionConfig() {
      return {
        /**
         * To create Quote data from string, simple fill 'text' property
         */
        import: "text",
        /**
         * To create string from Quote data, concatenate text and caption
         * @param quoteData - Quote data object
         * @returns string
         */
        export: function(t) {
          return t.caption ? `${t.text} \u2014 ${t.caption}` : t.text;
        }
      };
    }
    /**
     * Tool`s styles
     * @returns CSS classes names
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      };
    }
    /**
     * Tool`s settings properties
     * @returns settings properties
     */
    get settings() {
      return [
        {
          name: "left",
          icon: He2
        },
        {
          name: "center",
          icon: De3
        }
      ];
    }
    /**
     * Create Quote Tool container with inputs
     * @returns blockquote DOM element - Quote Tool container
     */
    render() {
      const t = v3.make("blockquote", [
        this.css.baseClass,
        this.css.wrapper
      ]), n2 = v3.make("div", [this.css.input, this.css.text], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.text
      }), r2 = v3.make("div", [this.css.input, this.css.caption], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.caption
      });
      return n2.dataset.placeholder = this.quotePlaceholder, r2.dataset.placeholder = this.captionPlaceholder, t.appendChild(n2), t.appendChild(r2), t;
    }
    /**
     * Extract Quote data from Quote Tool element
     * @param quoteElement - Quote DOM element to save
     * @returns Quote data object
     */
    save(t) {
      const n2 = t.querySelector(`.${this.css.text}`), r2 = t.querySelector(`.${this.css.caption}`);
      return Object.assign(this.data, {
        text: (n2 == null ? void 0 : n2.innerHTML) ?? "",
        caption: (r2 == null ? void 0 : r2.innerHTML) ?? ""
      });
    }
    /**
     * Sanitizer rules
     * @returns sanitizer rules
     */
    static get sanitize() {
      return {
        text: {
          br: true
        },
        caption: {
          br: true
        },
        alignment: {}
      };
    }
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     * @returns settings menu
     */
    renderSettings() {
      const t = (n2) => n2 && n2[0].toUpperCase() + n2.slice(1);
      return this.settings.map((n2) => ({
        icon: n2.icon,
        label: this.api.i18n.t(`Align ${t(n2.name)}`),
        onActivate: () => this._toggleTune(n2.name),
        isActive: this.data.alignment === n2.name,
        closeOnActivate: true
      }));
    }
    /**
     * Toggle quote`s alignment
     * @param tune - alignment
     */
    _toggleTune(t) {
      this.data.alignment = t, this.block.dispatchChange();
    }
  };

  // node_modules/@editorjs/table/dist/table.mjs
  (function() {
    var r2;
    "use strict";
    try {
      if (typeof document < "u") {
        var o3 = document.createElement("style");
        o3.nonce = (r2 = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : r2.content, o3.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')), document.head.appendChild(o3);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  function c4(d4, t, e = {}) {
    const o3 = document.createElement(d4);
    Array.isArray(t) ? o3.classList.add(...t) : t && o3.classList.add(t);
    for (const i2 in e)
      Object.prototype.hasOwnProperty.call(e, i2) && (o3[i2] = e[i2]);
    return o3;
  }
  function f2(d4) {
    const t = d4.getBoundingClientRect();
    return {
      y1: Math.floor(t.top + window.pageYOffset),
      x1: Math.floor(t.left + window.pageXOffset),
      x2: Math.floor(t.right + window.pageXOffset),
      y2: Math.floor(t.bottom + window.pageYOffset)
    };
  }
  function g3(d4, t) {
    const e = f2(d4), o3 = f2(t);
    return {
      fromTopBorder: o3.y1 - e.y1,
      fromLeftBorder: o3.x1 - e.x1,
      fromRightBorder: e.x2 - o3.x2,
      fromBottomBorder: e.y2 - o3.y2
    };
  }
  function k3(d4, t) {
    const e = d4.getBoundingClientRect(), { width: o3, height: i2, x: n2, y: r2 } = e, { clientX: h5, clientY: l3 } = t;
    return {
      width: o3,
      height: i2,
      x: h5 - n2,
      y: l3 - r2
    };
  }
  function m3(d4, t) {
    return t.parentNode.insertBefore(d4, t);
  }
  function C3(d4, t = true) {
    const e = document.createRange(), o3 = window.getSelection();
    e.selectNodeContents(d4), e.collapse(t), o3.removeAllRanges(), o3.addRange(e);
  }
  var a3 = class _a {
    /**
     * @param {object} options - constructor options
     * @param {PopoverItem[]} options.items - constructor options
     */
    constructor({ items: t }) {
      this.items = t, this.wrapper = void 0, this.itemEls = [];
    }
    /**
     * Set of CSS classnames used in popover
     *
     * @returns {object}
     */
    static get CSS() {
      return {
        popover: "tc-popover",
        popoverOpened: "tc-popover--opened",
        item: "tc-popover__item",
        itemHidden: "tc-popover__item--hidden",
        itemConfirmState: "tc-popover__item--confirm",
        itemIcon: "tc-popover__item-icon",
        itemLabel: "tc-popover__item-label"
      };
    }
    /**
     * Returns the popover element
     *
     * @returns {Element}
     */
    render() {
      return this.wrapper = c4("div", _a.CSS.popover), this.items.forEach((t, e) => {
        const o3 = c4("div", _a.CSS.item), i2 = c4("div", _a.CSS.itemIcon, {
          innerHTML: t.icon
        }), n2 = c4("div", _a.CSS.itemLabel, {
          textContent: t.label
        });
        o3.dataset.index = e, o3.appendChild(i2), o3.appendChild(n2), this.wrapper.appendChild(o3), this.itemEls.push(o3);
      }), this.wrapper.addEventListener("click", (t) => {
        this.popoverClicked(t);
      }), this.wrapper;
    }
    /**
     * Popover wrapper click listener
     * Used to delegate clicks in items
     *
     * @returns {void}
     */
    popoverClicked(t) {
      const e = t.target.closest(`.${_a.CSS.item}`);
      if (!e)
        return;
      const o3 = e.dataset.index, i2 = this.items[o3];
      if (i2.confirmationRequired && !this.hasConfirmationState(e)) {
        this.setConfirmationState(e);
        return;
      }
      i2.onClick();
    }
    /**
     * Enable the confirmation state on passed item
     *
     * @returns {void}
     */
    setConfirmationState(t) {
      t.classList.add(_a.CSS.itemConfirmState);
    }
    /**
     * Disable the confirmation state on passed item
     *
     * @returns {void}
     */
    clearConfirmationState(t) {
      t.classList.remove(_a.CSS.itemConfirmState);
    }
    /**
     * Check if passed item has the confirmation state
     *
     * @returns {boolean}
     */
    hasConfirmationState(t) {
      return t.classList.contains(_a.CSS.itemConfirmState);
    }
    /**
     * Return an opening state
     *
     * @returns {boolean}
     */
    get opened() {
      return this.wrapper.classList.contains(_a.CSS.popoverOpened);
    }
    /**
     * Opens the popover
     *
     * @returns {void}
     */
    open() {
      this.items.forEach((t, e) => {
        typeof t.hideIf == "function" && this.itemEls[e].classList.toggle(_a.CSS.itemHidden, t.hideIf());
      }), this.wrapper.classList.add(_a.CSS.popoverOpened);
    }
    /**
     * Closes the popover
     *
     * @returns {void}
     */
    close() {
      this.wrapper.classList.remove(_a.CSS.popoverOpened), this.itemEls.forEach((t) => {
        this.clearConfirmationState(t);
      });
    }
  };
  var R4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>';
  var b4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var x3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>';
  var S3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>';
  var y4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>';
  var L4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>';
  var M3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>';
  var v4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var O4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  var T3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var H4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var A4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var w3 = class _w {
    /**
     * Creates toolbox buttons and toolbox menus
     *
     * @param {Object} config
     * @param {any} config.api - Editor.js api
     * @param {PopoverItem[]} config.items - Editor.js api
     * @param {function} config.onOpen - callback fired when the Popover is opening
     * @param {function} config.onClose - callback fired when the Popover is closing
     * @param {string} config.cssModifier - the modifier for the Toolbox. Allows to add some specific styles.
     */
    constructor({ api: t, items: e, onOpen: o3, onClose: i2, cssModifier: n2 = "" }) {
      this.api = t, this.items = e, this.onOpen = o3, this.onClose = i2, this.cssModifier = n2, this.popover = null, this.wrapper = this.createToolbox();
    }
    /**
     * Style classes
     */
    static get CSS() {
      return {
        toolbox: "tc-toolbox",
        toolboxShowed: "tc-toolbox--showed",
        toggler: "tc-toolbox__toggler"
      };
    }
    /**
     * Returns rendered Toolbox element
     */
    get element() {
      return this.wrapper;
    }
    /**
     * Creating a toolbox to open menu for a manipulating columns
     *
     * @returns {Element}
     */
    createToolbox() {
      const t = c4("div", [
        _w.CSS.toolbox,
        this.cssModifier ? `${_w.CSS.toolbox}--${this.cssModifier}` : ""
      ]);
      t.dataset.mutationFree = "true";
      const e = this.createPopover(), o3 = this.createToggler();
      return t.appendChild(o3), t.appendChild(e), t;
    }
    /**
     * Creates the Toggler
     *
     * @returns {Element}
     */
    createToggler() {
      const t = c4("div", _w.CSS.toggler, {
        innerHTML: M3
      });
      return t.addEventListener("click", () => {
        this.togglerClicked();
      }), t;
    }
    /**
     * Creates the Popover instance and render it
     *
     * @returns {Element}
     */
    createPopover() {
      return this.popover = new a3({
        items: this.items
      }), this.popover.render();
    }
    /**
     * Toggler click handler. Opens/Closes the popover
     *
     * @returns {void}
     */
    togglerClicked() {
      this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
    }
    /**
     * Shows the Toolbox
     *
     * @param {function} computePositionMethod - method that returns the position coordinate
     * @returns {void}
     */
    show(t) {
      const e = t();
      Object.entries(e).forEach(([o3, i2]) => {
        this.wrapper.style[o3] = i2;
      }), this.wrapper.classList.add(_w.CSS.toolboxShowed);
    }
    /**
     * Hides the Toolbox
     *
     * @returns {void}
     */
    hide() {
      this.popover.close(), this.wrapper.classList.remove(_w.CSS.toolboxShowed);
    }
  };
  function B3(d4, t) {
    let e = 0;
    return function(...o3) {
      const i2 = (/* @__PURE__ */ new Date()).getTime();
      if (!(i2 - e < d4))
        return e = i2, t(...o3);
    };
  }
  var s2 = {
    wrapper: "tc-wrap",
    wrapperReadOnly: "tc-wrap--readonly",
    table: "tc-table",
    row: "tc-row",
    withHeadings: "tc-table--heading",
    rowSelected: "tc-row--selected",
    cell: "tc-cell",
    cellSelected: "tc-cell--selected",
    addRow: "tc-add-row",
    addRowDisabled: "tc-add-row--disabled",
    addColumn: "tc-add-column",
    addColumnDisabled: "tc-add-column--disabled"
  };
  var E3 = class {
    /**
     * Creates
     *
     * @constructor
     * @param {boolean} readOnly - read-only mode flag
     * @param {object} api - Editor.js API
     * @param {TableData} data - Editor.js API
     * @param {TableConfig} config - Editor.js API
     */
    constructor(t, e, o3, i2) {
      this.readOnly = t, this.api = e, this.data = o3, this.config = i2, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {
        withHeadings: false
      }, this.resize(), this.fill(), this.focusedCell = {
        row: 0,
        column: 0
      }, this.documentClicked = (n2) => {
        const r2 = n2.target.closest(`.${s2.table}`) !== null, h5 = n2.target.closest(`.${s2.wrapper}`) === null;
        (r2 || h5) && this.hideToolboxes();
        const u2 = n2.target.closest(`.${s2.addRow}`), p3 = n2.target.closest(`.${s2.addColumn}`);
        u2 && u2.parentNode === this.wrapper ? (this.addRow(void 0, true), this.hideToolboxes()) : p3 && p3.parentNode === this.wrapper && (this.addColumn(void 0, true), this.hideToolboxes());
      }, this.readOnly || this.bindEvents();
    }
    /**
     * Returns the rendered table wrapper
     *
     * @returns {Element}
     */
    getWrapper() {
      return this.wrapper;
    }
    /**
     * Hangs the necessary handlers to events
     */
    bindEvents() {
      document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", B3(150, (t) => this.onMouseMoveInTable(t)), { passive: true }), this.table.onkeypress = (t) => this.onKeyPressListener(t), this.table.addEventListener("keydown", (t) => this.onKeyDownListener(t)), this.table.addEventListener("focusin", (t) => this.focusInTableListener(t));
    }
    /**
     * Configures and creates the toolbox for manipulating with columns
     *
     * @returns {Toolbox}
     */
    createColumnToolbox() {
      return new w3({
        api: this.api,
        cssModifier: "column",
        items: [
          {
            label: this.api.i18n.t("Add column to left"),
            icon: S3,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Add column to right"),
            icon: y4,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn + 1, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Delete column"),
            icon: b4,
            hideIf: () => this.numberOfColumns === 1,
            confirmationRequired: true,
            onClick: () => {
              this.deleteColumn(this.selectedColumn), this.hideToolboxes();
            }
          }
        ],
        onOpen: () => {
          this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
        },
        onClose: () => {
          this.unselectColumn();
        }
      });
    }
    /**
     * Configures and creates the toolbox for manipulating with rows
     *
     * @returns {Toolbox}
     */
    createRowToolbox() {
      return new w3({
        api: this.api,
        cssModifier: "row",
        items: [
          {
            label: this.api.i18n.t("Add row above"),
            icon: L4,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Add row below"),
            icon: x3,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow + 1, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Delete row"),
            icon: b4,
            hideIf: () => this.numberOfRows === 1,
            confirmationRequired: true,
            onClick: () => {
              this.deleteRow(this.selectedRow), this.hideToolboxes();
            }
          }
        ],
        onOpen: () => {
          this.selectRow(this.hoveredRow), this.hideColumnToolbox();
        },
        onClose: () => {
          this.unselectRow();
        }
      });
    }
    /**
     * When you press enter it moves the cursor down to the next row
     * or creates it if the click occurred on the last one
     */
    moveCursorToNextRow() {
      this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0));
    }
    /**
     * Get table cell by row and col index
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @returns {HTMLElement}
     */
    getCell(t, e) {
      return this.table.querySelectorAll(`.${s2.row}:nth-child(${t}) .${s2.cell}`)[e - 1];
    }
    /**
     * Get table row by index
     *
     * @param {number} row - row coordinate
     * @returns {HTMLElement}
     */
    getRow(t) {
      return this.table.querySelector(`.${s2.row}:nth-child(${t})`);
    }
    /**
     * The parent of the cell which is the row
     *
     * @param {HTMLElement} cell - cell element
     * @returns {HTMLElement}
     */
    getRowByCell(t) {
      return t.parentElement;
    }
    /**
     * Ger row's first cell
     *
     * @param {Element} row - row to find its first cell
     * @returns {Element}
     */
    getRowFirstCell(t) {
      return t.querySelector(`.${s2.cell}:first-child`);
    }
    /**
     * Set the sell's content by row and column numbers
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @param {string} content - cell HTML content
     */
    setCellContent(t, e, o3) {
      const i2 = this.getCell(t, e);
      i2.innerHTML = o3;
    }
    /**
     * Add column in table on index place
     * Add cells in each row
     *
     * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the first cell
     */
    addColumn(t = -1, e = false) {
      var n2;
      let o3 = this.numberOfColumns;
      if (this.config && this.config.maxcols && this.numberOfColumns >= this.config.maxcols)
        return;
      for (let r2 = 1; r2 <= this.numberOfRows; r2++) {
        let h5;
        const l3 = this.createCell();
        if (t > 0 && t <= o3 ? (h5 = this.getCell(r2, t), m3(l3, h5)) : h5 = this.getRow(r2).appendChild(l3), r2 === 1) {
          const u2 = this.getCell(r2, t > 0 ? t : o3 + 1);
          u2 && e && C3(u2);
        }
      }
      const i2 = this.wrapper.querySelector(`.${s2.addColumn}`);
      (n2 = this.config) != null && n2.maxcols && this.numberOfColumns > this.config.maxcols - 1 && i2 && i2.classList.add(s2.addColumnDisabled), this.addHeadingAttrToFirstRow();
    }
    /**
     * Add row in table on index place
     *
     * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the inserted row
     * @returns {HTMLElement} row
     */
    addRow(t = -1, e = false) {
      let o3, i2 = c4("div", s2.row);
      this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
      let n2 = this.numberOfColumns;
      if (this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h5)
        return;
      if (t > 0 && t <= this.numberOfRows) {
        let l3 = this.getRow(t);
        o3 = m3(i2, l3);
      } else
        o3 = this.table.appendChild(i2);
      this.fillRow(o3, n2), this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
      const r2 = this.getRowFirstCell(o3);
      r2 && e && C3(r2);
      const h5 = this.wrapper.querySelector(`.${s2.addRow}`);
      return this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h5 && h5.classList.add(s2.addRowDisabled), o3;
    }
    /**
     * Delete a column by index
     *
     * @param {number} index
     */
    deleteColumn(t) {
      for (let o3 = 1; o3 <= this.numberOfRows; o3++) {
        const i2 = this.getCell(o3, t);
        if (!i2)
          return;
        i2.remove();
      }
      const e = this.wrapper.querySelector(`.${s2.addColumn}`);
      e && e.classList.remove(s2.addColumnDisabled);
    }
    /**
     * Delete a row by index
     *
     * @param {number} index
     */
    deleteRow(t) {
      this.getRow(t).remove();
      const e = this.wrapper.querySelector(`.${s2.addRow}`);
      e && e.classList.remove(s2.addRowDisabled), this.addHeadingAttrToFirstRow();
    }
    /**
     * Create a wrapper containing a table, toolboxes
     * and buttons for adding rows and columns
     *
     * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
     */
    createTableWrapper() {
      if (this.wrapper = c4("div", s2.wrapper), this.table = c4("div", s2.table), this.readOnly && this.wrapper.classList.add(s2.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
        const t = c4("div", s2.addColumn, {
          innerHTML: v4
        }), e = c4("div", s2.addRow, {
          innerHTML: v4
        });
        this.wrapper.appendChild(t), this.wrapper.appendChild(e);
      }
    }
    /**
     * Returns the size of the table based on initial data or config "size" property
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    computeInitialSize() {
      const t = this.data && this.data.content, e = Array.isArray(t), o3 = e ? t.length : false, i2 = e ? t.length : void 0, n2 = o3 ? t[0].length : void 0, r2 = Number.parseInt(this.config && this.config.rows), h5 = Number.parseInt(this.config && this.config.cols), l3 = !isNaN(r2) && r2 > 0 ? r2 : void 0, u2 = !isNaN(h5) && h5 > 0 ? h5 : void 0;
      return {
        rows: i2 || l3 || 2,
        cols: n2 || u2 || 2
      };
    }
    /**
     * Resize table to match config size or transmitted data size
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    resize() {
      const { rows: t, cols: e } = this.computeInitialSize();
      for (let o3 = 0; o3 < t; o3++)
        this.addRow();
      for (let o3 = 0; o3 < e; o3++)
        this.addColumn();
    }
    /**
     * Fills the table with data passed to the constructor
     *
     * @returns {void}
     */
    fill() {
      const t = this.data;
      if (t && t.content)
        for (let e = 0; e < t.content.length; e++)
          for (let o3 = 0; o3 < t.content[e].length; o3++)
            this.setCellContent(e + 1, o3 + 1, t.content[e][o3]);
    }
    /**
     * Fills a row with cells
     *
     * @param {HTMLElement} row - row to fill
     * @param {number} numberOfColumns - how many cells should be in a row
     */
    fillRow(t, e) {
      for (let o3 = 1; o3 <= e; o3++) {
        const i2 = this.createCell();
        t.appendChild(i2);
      }
    }
    /**
     * Creating a cell element
     *
     * @return {Element}
     */
    createCell() {
      return c4("div", s2.cell, {
        contentEditable: !this.readOnly
      });
    }
    /**
     * Get number of rows in the table
     */
    get numberOfRows() {
      return this.table.childElementCount;
    }
    /**
     * Get number of columns in the table
     */
    get numberOfColumns() {
      return this.numberOfRows ? this.table.querySelectorAll(`.${s2.row}:first-child .${s2.cell}`).length : 0;
    }
    /**
     * Is the column toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isColumnMenuShowing() {
      return this.selectedColumn !== 0;
    }
    /**
     * Is the row toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isRowMenuShowing() {
      return this.selectedRow !== 0;
    }
    /**
     * Recalculate position of toolbox icons
     *
     * @param {Event} event - mouse move event
     */
    onMouseMoveInTable(t) {
      const { row: e, column: o3 } = this.getHoveredCell(t);
      this.hoveredColumn = o3, this.hoveredRow = e, this.updateToolboxesPosition();
    }
    /**
     * Prevents default Enter behaviors
     * Adds Shift+Enter processing
     *
     * @param {KeyboardEvent} event - keypress event
     */
    onKeyPressListener(t) {
      if (t.key === "Enter") {
        if (t.shiftKey)
          return true;
        this.moveCursorToNextRow();
      }
      return t.key !== "Enter";
    }
    /**
     * Prevents tab keydown event from bubbling
     * so that it only works inside the table
     *
     * @param {KeyboardEvent} event - keydown event
     */
    onKeyDownListener(t) {
      t.key === "Tab" && t.stopPropagation();
    }
    /**
     * Set the coordinates of the cell that the focus has moved to
     *
     * @param {FocusEvent} event - focusin event
     */
    focusInTableListener(t) {
      const e = t.target, o3 = this.getRowByCell(e);
      this.focusedCell = {
        row: Array.from(this.table.querySelectorAll(`.${s2.row}`)).indexOf(o3) + 1,
        column: Array.from(o3.querySelectorAll(`.${s2.cell}`)).indexOf(e) + 1
      };
    }
    /**
     * Unselect row/column
     * Close toolbox menu
     * Hide toolboxes
     *
     * @returns {void}
     */
    hideToolboxes() {
      this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition();
    }
    /**
     * Unselect row, close toolbox
     *
     * @returns {void}
     */
    hideRowToolbox() {
      this.unselectRow(), this.toolboxRow.hide();
    }
    /**
     * Unselect column, close toolbox
     *
     * @returns {void}
     */
    hideColumnToolbox() {
      this.unselectColumn(), this.toolboxColumn.hide();
    }
    /**
     * Set the cursor focus to the focused cell
     *
     * @returns {void}
     */
    focusCell() {
      this.focusedCellElem.focus();
    }
    /**
     * Get current focused element
     *
     * @returns {HTMLElement} - focused cell
     */
    get focusedCellElem() {
      const { row: t, column: e } = this.focusedCell;
      return this.getCell(t, e);
    }
    /**
     * Update toolboxes position
     *
     * @param {number} row - hovered row
     * @param {number} column - hovered column
     */
    updateToolboxesPosition(t = this.hoveredRow, e = this.hoveredColumn) {
      this.isColumnMenuShowing || e > 0 && e <= this.numberOfColumns && this.toolboxColumn.show(() => ({
        left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${e} - 1) * 2))`
      })), this.isRowMenuShowing || t > 0 && t <= this.numberOfRows && this.toolboxRow.show(() => {
        const o3 = this.getRow(t), { fromTopBorder: i2 } = g3(this.table, o3), { height: n2 } = o3.getBoundingClientRect();
        return {
          top: `${Math.ceil(i2 + n2 / 2)}px`
        };
      });
    }
    /**
     * Makes the first row headings
     *
     * @param {boolean} withHeadings - use headings row or not
     */
    setHeadingsSetting(t) {
      this.tunes.withHeadings = t, t ? (this.table.classList.add(s2.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(s2.withHeadings), this.removeHeadingAttrFromFirstRow());
    }
    /**
     * Adds an attribute for displaying the placeholder in the cell
     */
    addHeadingAttrToFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.setAttribute("heading", this.api.i18n.t("Heading"));
      }
    }
    /**
     * Removes an attribute for displaying the placeholder in the cell
     */
    removeHeadingAttrFromFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.removeAttribute("heading");
      }
    }
    /**
     * Add effect of a selected row
     *
     * @param {number} index
     */
    selectRow(t) {
      const e = this.getRow(t);
      e && (this.selectedRow = t, e.classList.add(s2.rowSelected));
    }
    /**
     * Remove effect of a selected row
     */
    unselectRow() {
      if (this.selectedRow <= 0)
        return;
      const t = this.table.querySelector(`.${s2.rowSelected}`);
      t && t.classList.remove(s2.rowSelected), this.selectedRow = 0;
    }
    /**
     * Add effect of a selected column
     *
     * @param {number} index
     */
    selectColumn(t) {
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o3 = this.getCell(e, t);
        o3 && o3.classList.add(s2.cellSelected);
      }
      this.selectedColumn = t;
    }
    /**
     * Remove effect of a selected column
     */
    unselectColumn() {
      if (this.selectedColumn <= 0)
        return;
      let t = this.table.querySelectorAll(`.${s2.cellSelected}`);
      Array.from(t).forEach((e) => {
        e.classList.remove(s2.cellSelected);
      }), this.selectedColumn = 0;
    }
    /**
     * Calculates the row and column that the cursor is currently hovering over
     * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
     *
     * @param {Event} event - mousemove event
     * @returns hovered cell coordinates as an integer row and column
     */
    getHoveredCell(t) {
      let e = this.hoveredRow, o3 = this.hoveredColumn;
      const { width: i2, height: n2, x: r2, y: h5 } = k3(this.table, t);
      return r2 >= 0 && (o3 = this.binSearch(
        this.numberOfColumns,
        (l3) => this.getCell(1, l3),
        ({ fromLeftBorder: l3 }) => r2 < l3,
        ({ fromRightBorder: l3 }) => r2 > i2 - l3
      )), h5 >= 0 && (e = this.binSearch(
        this.numberOfRows,
        (l3) => this.getCell(l3, 1),
        ({ fromTopBorder: l3 }) => h5 < l3,
        ({ fromBottomBorder: l3 }) => h5 > n2 - l3
      )), {
        row: e || this.hoveredRow,
        column: o3 || this.hoveredColumn
      };
    }
    /**
     * Looks for the index of the cell the mouse is hovering over.
     * Cells can be represented as ordered intervals with left and
     * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
     *
     * @param {number} numberOfCells - upper bound of binary search
     * @param {function} getCell - function to take the currently viewed cell
     * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
     * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
     * @returns {number}
     */
    binSearch(t, e, o3, i2) {
      let n2 = 0, r2 = t + 1, h5 = 0, l3;
      for (; n2 < r2 - 1 && h5 < 10; ) {
        l3 = Math.ceil((n2 + r2) / 2);
        const u2 = e(l3), p3 = g3(this.table, u2);
        if (o3(p3))
          r2 = l3;
        else if (i2(p3))
          n2 = l3;
        else
          break;
        h5++;
      }
      return l3;
    }
    /**
     * Collects data from cells into a two-dimensional array
     *
     * @returns {string[][]}
     */
    getData() {
      const t = [];
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o3 = this.table.querySelector(`.${s2.row}:nth-child(${e})`), i2 = Array.from(o3.querySelectorAll(`.${s2.cell}`));
        i2.every((r2) => !r2.textContent.trim()) || t.push(i2.map((r2) => r2.innerHTML));
      }
      return t;
    }
    /**
     * Remove listeners on the document
     */
    destroy() {
      document.removeEventListener("click", this.documentClicked);
    }
  };
  var F4 = class {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to press Enter inside the CodeTool textarea
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {TableConstructor} init
     */
    constructor({ data: t, config: e, api: o3, readOnly: i2, block: n2 }) {
      this.api = o3, this.readOnly = i2, this.config = e, this.data = {
        withHeadings: this.getConfig("withHeadings", false, t),
        stretched: this.getConfig("stretched", false, t),
        content: t && t.content ? t.content : []
      }, this.table = null, this.block = n2;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: A4,
        title: "Table"
      };
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this.table = new E3(this.readOnly, this.api, this.data, this.config), this.container = c4("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
    }
    /**
     * Returns plugin settings
     *
     * @returns {Array}
     */
    renderSettings() {
      return [
        {
          label: this.api.i18n.t("With headings"),
          icon: T3,
          isActive: this.data.withHeadings,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.withHeadings = true, this.table.setHeadingsSetting(this.data.withHeadings);
          }
        },
        {
          label: this.api.i18n.t("Without headings"),
          icon: H4,
          isActive: !this.data.withHeadings,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.withHeadings = false, this.table.setHeadingsSetting(this.data.withHeadings);
          }
        },
        {
          label: this.data.stretched ? this.api.i18n.t("Collapse") : this.api.i18n.t("Stretch"),
          icon: this.data.stretched ? R4 : O4,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.stretched = !this.data.stretched, this.block.stretched = this.data.stretched;
          }
        }
      ];
    }
    /**
     * Extract table data from the view
     *
     * @returns {TableData} - saved data
     */
    save() {
      const t = this.table.getData();
      return {
        withHeadings: this.data.withHeadings,
        stretched: this.data.stretched,
        content: t
      };
    }
    /**
     * Plugin destroyer
     *
     * @returns {void}
     */
    destroy() {
      this.table.destroy();
    }
    /**
     * A helper to get config value.
     *
     * @param {string} configName - the key to get from the config.
     * @param {any} defaultValue - default value if config doesn't have passed key
     * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
     * @returns {any} - config value.
     */
    getConfig(t, e = void 0, o3 = void 0) {
      const i2 = this.data || o3;
      return i2 ? i2[t] ? i2[t] : e : this.config && this.config[t] ? this.config[t] : e;
    }
    /**
     * Table onPaste configuration
     *
     * @public
     */
    static get pasteConfig() {
      return { tags: ["TABLE", "TR", "TH", "TD"] };
    }
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(t) {
      const e = t.detail.data, o3 = e.querySelector(":scope > thead, tr:first-of-type th"), n2 = Array.from(e.querySelectorAll("tr")).map((r2) => Array.from(r2.querySelectorAll("th, td")).map((l3) => l3.innerHTML));
      this.data = {
        withHeadings: o3 !== null,
        content: n2
      }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
    }
  };

  // node_modules/@editorjs/embed/dist/embed.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(e);
      }
    } catch (o3) {
      console.error("vite-plugin-css-injected-by-js", o3);
    }
  })();
  var g4 = {
    vimeo: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
      embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
      html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
      height: 320,
      width: 580
    },
    youtube: {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
      embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580,
      id: ([s4, i2]) => {
        if (!i2 && s4)
          return s4;
        const r2 = {
          start: "start",
          end: "end",
          t: "start",
          // eslint-disable-next-line camelcase
          time_continue: "start",
          list: "list"
        };
        let e = i2.slice(1).split("&").map((o3) => {
          const [l3, t] = o3.split("=");
          return !s4 && l3 === "v" ? (s4 = t, null) : !r2[l3] || t === "LL" || t.startsWith("RDMM") || t.startsWith("FL") ? null : `${r2[l3]}=${t}`;
        }).filter((o3) => !!o3);
        return s4 + "?" + e.join("&");
      }
    },
    coub: {
      regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
      embedUrl: "https://coub.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    vine: {
      regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
      embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    imgur: {
      regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
      embedUrl: "http://imgur.com/<%= remote_id %>/embed",
      html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
      height: 500,
      width: 540
    },
    gfycat: {
      regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
      embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
      html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
      height: 436,
      width: 580
    },
    "twitch-channel": {
      regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "twitch-video": {
      regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
      embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "yandex-music-album": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
      embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
      height: 400,
      width: 540
    },
    "yandex-music-track": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
      height: 100,
      width: 540,
      id: (s4) => s4.join("/")
    },
    "yandex-music-playlist": {
      regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
      height: 400,
      width: 540,
      id: (s4) => s4.join("/")
    },
    codepen: {
      regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
      embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
      html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
      height: 300,
      width: 600,
      id: (s4) => s4.join("/embed/")
    },
    instagram: {
      //it support both reel and post
      regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
      embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
      html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 505,
      width: 400,
      id: (s4) => {
        var i2;
        return (i2 = s4 == null ? void 0 : s4[0]) == null ? void 0 : i2.split("/")[0];
      }
    },
    twitter: {
      regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
      embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
      html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600,
      id: (s4) => s4[1]
    },
    pinterest: {
      regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
      id: (s4) => s4[1]
    },
    facebook: {
      regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
      id: (s4) => s4.join("/")
    },
    aparat: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
      html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600
    },
    miro: {
      regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
      embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
      html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
    },
    github: {
      regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
      embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
      html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
      height: 300,
      width: 600,
      id: (s4) => `${s4.join("/")}.js`
    }
  };
  function p2(s4, i2, r2) {
    var e, o3, l3, t, a5;
    i2 == null && (i2 = 100);
    function n2() {
      var d4 = Date.now() - t;
      d4 < i2 && d4 >= 0 ? e = setTimeout(n2, i2 - d4) : (e = null, r2 || (a5 = s4.apply(l3, o3), l3 = o3 = null));
    }
    var h5 = function() {
      l3 = this, o3 = arguments, t = Date.now();
      var d4 = r2 && !e;
      return e || (e = setTimeout(n2, i2)), d4 && (a5 = s4.apply(l3, o3), l3 = o3 = null), a5;
    };
    return h5.clear = function() {
      e && (clearTimeout(e), e = null);
    }, h5.flush = function() {
      e && (a5 = s4.apply(l3, o3), l3 = o3 = null, clearTimeout(e), e = null);
    }, h5;
  }
  p2.debounce = p2;
  var w4 = p2;
  var m4 = class _m {
    /**
     * @param {{data: EmbedData, config: EmbedConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read-only mode flag
     */
    constructor({ data: i2, api: r2, readOnly: e }) {
      this.api = r2, this._data = {}, this.element = null, this.readOnly = e, this.data = i2;
    }
    /**
     * @param {EmbedData} data - embed data
     * @param {RegExp} [data.regex] - pattern of source URLs
     * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
     * @param {string} [data.html] - iframe which contains embedded content
     * @param {number} [data.height] - iframe height
     * @param {number} [data.width] - iframe width
     * @param {string} [data.caption] - caption
     */
    set data(i2) {
      var h5;
      if (!(i2 instanceof Object))
        throw Error("Embed Tool data should be object");
      const { service: r2, source: e, embed: o3, width: l3, height: t, caption: a5 = "" } = i2;
      this._data = {
        service: r2 || this.data.service,
        source: e || this.data.source,
        embed: o3 || this.data.embed,
        width: l3 || this.data.width,
        height: t || this.data.height,
        caption: a5 || this.data.caption || ""
      };
      const n2 = this.element;
      n2 && ((h5 = n2.parentNode) == null || h5.replaceChild(this.render(), n2));
    }
    /**
     * @returns {EmbedData}
     */
    get data() {
      if (this.element) {
        const i2 = this.element.querySelector(`.${this.api.styles.input}`);
        this._data.caption = i2 ? i2.innerHTML : "";
      }
      return this._data;
    }
    /**
     * Get plugin styles
     *
     * @returns {object}
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        container: "embed-tool",
        containerLoading: "embed-tool--loading",
        preloader: "embed-tool__preloader",
        caption: "embed-tool__caption",
        url: "embed-tool__url",
        content: "embed-tool__content"
      };
    }
    /**
     * Render Embed tool content
     *
     * @returns {HTMLElement}
     */
    render() {
      if (!this.data.service) {
        const a5 = document.createElement("div");
        return this.element = a5, a5;
      }
      const { html: i2 } = _m.services[this.data.service], r2 = document.createElement("div"), e = document.createElement("div"), o3 = document.createElement("template"), l3 = this.createPreloader();
      r2.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), r2.appendChild(l3), e.contentEditable = (!this.readOnly).toString(), e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", o3.innerHTML = i2, o3.content.firstChild.setAttribute("src", this.data.embed), o3.content.firstChild.classList.add(this.CSS.content);
      const t = this.embedIsReady(r2);
      return o3.content.firstChild && r2.appendChild(o3.content.firstChild), r2.appendChild(e), t.then(() => {
        r2.classList.remove(this.CSS.containerLoading);
      }), this.element = r2, r2;
    }
    /**
     * Creates preloader to append to container while data is loading
     *
     * @returns {HTMLElement}
     */
    createPreloader() {
      const i2 = document.createElement("preloader"), r2 = document.createElement("div");
      return r2.textContent = this.data.source, i2.classList.add(this.CSS.preloader), r2.classList.add(this.CSS.url), i2.appendChild(r2), i2;
    }
    /**
     * Save current content and return EmbedData object
     *
     * @returns {EmbedData}
     */
    save() {
      return this.data;
    }
    /**
     * Handle pasted url and return Service object
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(i2) {
      var c5;
      const { key: r2, data: e } = i2.detail, { regex: o3, embedUrl: l3, width: t, height: a5, id: n2 = (u2) => u2.shift() || "" } = _m.services[r2], h5 = (c5 = o3.exec(e)) == null ? void 0 : c5.slice(1), d4 = h5 ? l3.replace(/<%= remote_id %>/g, n2(h5)) : "";
      this.data = {
        service: r2,
        source: e,
        embed: d4,
        width: t,
        height: a5
      };
    }
    /**
     * Analyze provided config and make object with services to use
     *
     * @param {EmbedConfig} config - configuration of embed block element
     */
    static prepare({ config: i2 = {} }) {
      const { services: r2 = {} } = i2;
      let e = Object.entries(g4);
      const o3 = Object.entries(r2).filter(([t, a5]) => typeof a5 == "boolean" && a5 === true).map(([t]) => t), l3 = Object.entries(r2).filter(([t, a5]) => typeof a5 == "object").filter(([t, a5]) => _m.checkServiceConfig(a5)).map(([t, a5]) => {
        const { regex: n2, embedUrl: h5, html: d4, height: c5, width: u2, id: f3 } = a5;
        return [t, {
          regex: n2,
          embedUrl: h5,
          html: d4,
          height: c5,
          width: u2,
          id: f3
        }];
      });
      o3.length && (e = e.filter(([t]) => o3.includes(t))), e = e.concat(l3), _m.services = e.reduce((t, [a5, n2]) => a5 in t ? (t[a5] = Object.assign({}, t[a5], n2), t) : (t[a5] = n2, t), {}), _m.patterns = e.reduce((t, [a5, n2]) => (n2 && typeof n2 != "boolean" && (t[a5] = n2.regex), t), {});
    }
    /**
     * Check if Service config is valid
     *
     * @param {Service} config - configuration of embed block element
     * @returns {boolean}
     */
    static checkServiceConfig(i2) {
      const { regex: r2, embedUrl: e, html: o3, height: l3, width: t, id: a5 } = i2;
      let n2 = !!(r2 && r2 instanceof RegExp) && !!(e && typeof e == "string") && !!(o3 && typeof o3 == "string");
      return n2 = n2 && (a5 !== void 0 ? a5 instanceof Function : true), n2 = n2 && (l3 !== void 0 ? Number.isFinite(l3) : true), n2 = n2 && (t !== void 0 ? Number.isFinite(t) : true), n2;
    }
    /**
     * Paste configuration to enable pasted URLs processing by Editor
     *
     * @returns {object} - object of patterns which contain regx for pasteConfig
     */
    static get pasteConfig() {
      return {
        patterns: _m.patterns
      };
    }
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Checks that mutations in DOM have finished after appending iframe content
     *
     * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
     * @returns {Promise<any>} - result that all mutations have finished
     */
    embedIsReady(i2) {
      let e;
      return new Promise((o3, l3) => {
        e = new MutationObserver(w4.debounce(o3, 450)), e.observe(i2, {
          childList: true,
          subtree: true
        });
      }).then(() => {
        e.disconnect();
      });
    }
  };

  // node_modules/@editorjs/delimiter/dist/delimiter.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var n = class {
    /**
     * Notify core that read-only mode is supported
     * @return {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow Tool to have no content
     * @return {boolean}
     */
    static get contentless() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: DelimiterData, config: object, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     */
    constructor({ data: t, config: s4, api: e }) {
      this.api = e, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-delimiter"
      }, this._element = this.drawView(), this.data = t;
    }
    /**
     * Create Tool's view
     * @return {HTMLDivElement}
     * @private
     */
    drawView() {
      let t = document.createElement("div");
      return t.classList.add(this._CSS.wrapper, this._CSS.block), t;
    }
    /**
     * Return Tool's view
     * @returns {HTMLDivElement}
     * @public
     */
    render() {
      return this._element;
    }
    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {DelimiterData} - saved data
     * @public
     */
    save(t) {
      return {};
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: r,
        title: "Delimiter"
      };
    }
    /**
     * Delimiter onPaste configuration
     *
     * @public
     */
    static get pasteConfig() {
      return { tags: ["HR"] };
    }
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(t) {
      this.data = {};
    }
  };

  // node_modules/@editorjs/link/dist/link.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var o3 = document.createElement("style");
        o3.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)), document.head.appendChild(o3);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var C4 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function O5(k4) {
    return k4 && k4.__esModule && Object.prototype.hasOwnProperty.call(k4, "default") ? k4.default : k4;
  }
  (function(k4) {
    var w5 = function() {
      try {
        return !!Symbol.iterator;
      } catch {
        return false;
      }
    }, d4 = w5(), v5 = function(n2) {
      var o3 = {
        next: function() {
          var e = n2.shift();
          return { done: e === void 0, value: e };
        }
      };
      return d4 && (o3[Symbol.iterator] = function() {
        return o3;
      }), o3;
    }, c5 = function(n2) {
      return encodeURIComponent(n2).replace(/%20/g, "+");
    }, i2 = function(n2) {
      return decodeURIComponent(String(n2).replace(/\+/g, " "));
    }, a5 = function() {
      var n2 = function(e) {
        Object.defineProperty(this, "_entries", { writable: true, value: {} });
        var s4 = typeof e;
        if (s4 !== "undefined")
          if (s4 === "string")
            e !== "" && this._fromString(e);
          else if (e instanceof n2) {
            var h5 = this;
            e.forEach(function(u2, f3) {
              h5.append(f3, u2);
            });
          } else if (e !== null && s4 === "object")
            if (Object.prototype.toString.call(e) === "[object Array]")
              for (var t = 0; t < e.length; t++) {
                var y5 = e[t];
                if (Object.prototype.toString.call(y5) === "[object Array]" || y5.length !== 2)
                  this.append(y5[0], y5[1]);
                else
                  throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
              }
            else
              for (var r2 in e)
                e.hasOwnProperty(r2) && this.append(r2, e[r2]);
          else
            throw new TypeError("Unsupported input's type for URLSearchParams");
      }, o3 = n2.prototype;
      o3.append = function(e, s4) {
        e in this._entries ? this._entries[e].push(String(s4)) : this._entries[e] = [String(s4)];
      }, o3.delete = function(e) {
        delete this._entries[e];
      }, o3.get = function(e) {
        return e in this._entries ? this._entries[e][0] : null;
      }, o3.getAll = function(e) {
        return e in this._entries ? this._entries[e].slice(0) : [];
      }, o3.has = function(e) {
        return e in this._entries;
      }, o3.set = function(e, s4) {
        this._entries[e] = [String(s4)];
      }, o3.forEach = function(e, s4) {
        var h5;
        for (var t in this._entries)
          if (this._entries.hasOwnProperty(t)) {
            h5 = this._entries[t];
            for (var y5 = 0; y5 < h5.length; y5++)
              e.call(s4, h5[y5], t, this);
          }
      }, o3.keys = function() {
        var e = [];
        return this.forEach(function(s4, h5) {
          e.push(h5);
        }), v5(e);
      }, o3.values = function() {
        var e = [];
        return this.forEach(function(s4) {
          e.push(s4);
        }), v5(e);
      }, o3.entries = function() {
        var e = [];
        return this.forEach(function(s4, h5) {
          e.push([h5, s4]);
        }), v5(e);
      }, d4 && (o3[Symbol.iterator] = o3.entries), o3.toString = function() {
        var e = [];
        return this.forEach(function(s4, h5) {
          e.push(c5(h5) + "=" + c5(s4));
        }), e.join("&");
      }, k4.URLSearchParams = n2;
    }, p3 = function() {
      try {
        var n2 = k4.URLSearchParams;
        return new n2("?a=1").toString() === "a=1" && typeof n2.prototype.set == "function";
      } catch {
        return false;
      }
    };
    p3() || a5();
    var l3 = k4.URLSearchParams.prototype;
    typeof l3.sort != "function" && (l3.sort = function() {
      var n2 = this, o3 = [];
      this.forEach(function(s4, h5) {
        o3.push([h5, s4]), n2._entries || n2.delete(h5);
      }), o3.sort(function(s4, h5) {
        return s4[0] < h5[0] ? -1 : s4[0] > h5[0] ? 1 : 0;
      }), n2._entries && (n2._entries = {});
      for (var e = 0; e < o3.length; e++)
        this.append(o3[e][0], o3[e][1]);
    }), typeof l3._fromString != "function" && Object.defineProperty(l3, "_fromString", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(n2) {
        if (this._entries)
          this._entries = {};
        else {
          var o3 = [];
          this.forEach(function(t, y5) {
            o3.push(y5);
          });
          for (var e = 0; e < o3.length; e++)
            this.delete(o3[e]);
        }
        n2 = n2.replace(/^\?/, "");
        for (var s4 = n2.split("&"), h5, e = 0; e < s4.length; e++)
          h5 = s4[e].split("="), this.append(
            i2(h5[0]),
            h5.length > 1 ? i2(h5[1]) : ""
          );
      }
    });
  })(
    typeof C4 < "u" ? C4 : typeof window < "u" ? window : typeof self < "u" ? self : C4
  );
  (function(k4) {
    var w5 = function() {
      try {
        var c5 = new k4.URL("b", "http://a");
        return c5.pathname = "c d", c5.href === "http://a/c%20d" && c5.searchParams;
      } catch {
        return false;
      }
    }, d4 = function() {
      var c5 = k4.URL, i2 = function(l3, n2) {
        typeof l3 != "string" && (l3 = String(l3));
        var o3 = document, e;
        if (n2 && (k4.location === void 0 || n2 !== k4.location.href)) {
          o3 = document.implementation.createHTMLDocument(""), e = o3.createElement("base"), e.href = n2, o3.head.appendChild(e);
          try {
            if (e.href.indexOf(n2) !== 0)
              throw new Error(e.href);
          } catch (m5) {
            throw new Error("URL unable to set base " + n2 + " due to " + m5);
          }
        }
        var s4 = o3.createElement("a");
        s4.href = l3, e && (o3.body.appendChild(s4), s4.href = s4.href);
        var h5 = o3.createElement("input");
        if (h5.type = "url", h5.value = l3, s4.protocol === ":" || !/:/.test(s4.href) || !h5.checkValidity() && !n2)
          throw new TypeError("Invalid URL");
        Object.defineProperty(this, "_anchorElement", {
          value: s4
        });
        var t = new k4.URLSearchParams(this.search), y5 = true, r2 = true, u2 = this;
        ["append", "delete", "set"].forEach(function(m5) {
          var b5 = t[m5];
          t[m5] = function() {
            b5.apply(t, arguments), y5 && (r2 = false, u2.search = t.toString(), r2 = true);
          };
        }), Object.defineProperty(this, "searchParams", {
          value: t,
          enumerable: true
        });
        var f3 = void 0;
        Object.defineProperty(this, "_updateSearchParams", {
          enumerable: false,
          configurable: false,
          writable: false,
          value: function() {
            this.search !== f3 && (f3 = this.search, r2 && (y5 = false, this.searchParams._fromString(this.search), y5 = true));
          }
        });
      }, a5 = i2.prototype, p3 = function(l3) {
        Object.defineProperty(a5, l3, {
          get: function() {
            return this._anchorElement[l3];
          },
          set: function(n2) {
            this._anchorElement[l3] = n2;
          },
          enumerable: true
        });
      };
      ["hash", "host", "hostname", "port", "protocol"].forEach(function(l3) {
        p3(l3);
      }), Object.defineProperty(a5, "search", {
        get: function() {
          return this._anchorElement.search;
        },
        set: function(l3) {
          this._anchorElement.search = l3, this._updateSearchParams();
        },
        enumerable: true
      }), Object.defineProperties(a5, {
        toString: {
          get: function() {
            var l3 = this;
            return function() {
              return l3.href;
            };
          }
        },
        href: {
          get: function() {
            return this._anchorElement.href.replace(/\?$/, "");
          },
          set: function(l3) {
            this._anchorElement.href = l3, this._updateSearchParams();
          },
          enumerable: true
        },
        pathname: {
          get: function() {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/");
          },
          set: function(l3) {
            this._anchorElement.pathname = l3;
          },
          enumerable: true
        },
        origin: {
          get: function() {
            var l3 = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n2 = this._anchorElement.port != l3 && this._anchorElement.port !== "";
            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n2 ? ":" + this._anchorElement.port : "");
          },
          enumerable: true
        },
        password: {
          // TODO
          get: function() {
            return "";
          },
          set: function(l3) {
          },
          enumerable: true
        },
        username: {
          // TODO
          get: function() {
            return "";
          },
          set: function(l3) {
          },
          enumerable: true
        }
      }), i2.createObjectURL = function(l3) {
        return c5.createObjectURL.apply(c5, arguments);
      }, i2.revokeObjectURL = function(l3) {
        return c5.revokeObjectURL.apply(c5, arguments);
      }, k4.URL = i2;
    };
    if (w5() || d4(), k4.location !== void 0 && !("origin" in k4.location)) {
      var v5 = function() {
        return k4.location.protocol + "//" + k4.location.hostname + (k4.location.port ? ":" + k4.location.port : "");
      };
      try {
        Object.defineProperty(k4.location, "origin", {
          get: v5,
          enumerable: true
        });
      } catch {
        setInterval(function() {
          k4.location.origin = v5();
        }, 100);
      }
    }
  })(
    typeof C4 < "u" ? C4 : typeof window < "u" ? window : typeof self < "u" ? self : C4
  );
  var j3 = { exports: {} };
  (function(k4, w5) {
    (function(d4, v5) {
      k4.exports = v5();
    })(window, function() {
      return function(d4) {
        var v5 = {};
        function c5(i2) {
          if (v5[i2])
            return v5[i2].exports;
          var a5 = v5[i2] = { i: i2, l: false, exports: {} };
          return d4[i2].call(a5.exports, a5, a5.exports, c5), a5.l = true, a5.exports;
        }
        return c5.m = d4, c5.c = v5, c5.d = function(i2, a5, p3) {
          c5.o(i2, a5) || Object.defineProperty(i2, a5, { enumerable: true, get: p3 });
        }, c5.r = function(i2) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i2, "__esModule", { value: true });
        }, c5.t = function(i2, a5) {
          if (1 & a5 && (i2 = c5(i2)), 8 & a5 || 4 & a5 && typeof i2 == "object" && i2 && i2.__esModule)
            return i2;
          var p3 = /* @__PURE__ */ Object.create(null);
          if (c5.r(p3), Object.defineProperty(p3, "default", { enumerable: true, value: i2 }), 2 & a5 && typeof i2 != "string")
            for (var l3 in i2)
              c5.d(p3, l3, function(n2) {
                return i2[n2];
              }.bind(null, l3));
          return p3;
        }, c5.n = function(i2) {
          var a5 = i2 && i2.__esModule ? function() {
            return i2.default;
          } : function() {
            return i2;
          };
          return c5.d(a5, "a", a5), a5;
        }, c5.o = function(i2, a5) {
          return Object.prototype.hasOwnProperty.call(i2, a5);
        }, c5.p = "", c5(c5.s = 3);
      }([function(d4, v5) {
        var c5;
        c5 = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          c5 = c5 || new Function("return this")();
        } catch {
          typeof window == "object" && (c5 = window);
        }
        d4.exports = c5;
      }, function(d4, v5, c5) {
        (function(i2) {
          var a5 = c5(2), p3 = setTimeout;
          function l3() {
          }
          function n2(r2) {
            if (!(this instanceof n2))
              throw new TypeError("Promises must be constructed via new");
            if (typeof r2 != "function")
              throw new TypeError("not a function");
            this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], y5(r2, this);
          }
          function o3(r2, u2) {
            for (; r2._state === 3; )
              r2 = r2._value;
            r2._state !== 0 ? (r2._handled = true, n2._immediateFn(function() {
              var f3 = r2._state === 1 ? u2.onFulfilled : u2.onRejected;
              if (f3 !== null) {
                var m5;
                try {
                  m5 = f3(r2._value);
                } catch (b5) {
                  return void s4(u2.promise, b5);
                }
                e(u2.promise, m5);
              } else
                (r2._state === 1 ? e : s4)(u2.promise, r2._value);
            })) : r2._deferreds.push(u2);
          }
          function e(r2, u2) {
            try {
              if (u2 === r2)
                throw new TypeError("A promise cannot be resolved with itself.");
              if (u2 && (typeof u2 == "object" || typeof u2 == "function")) {
                var f3 = u2.then;
                if (u2 instanceof n2)
                  return r2._state = 3, r2._value = u2, void h5(r2);
                if (typeof f3 == "function")
                  return void y5((m5 = f3, b5 = u2, function() {
                    m5.apply(b5, arguments);
                  }), r2);
              }
              r2._state = 1, r2._value = u2, h5(r2);
            } catch (g5) {
              s4(r2, g5);
            }
            var m5, b5;
          }
          function s4(r2, u2) {
            r2._state = 2, r2._value = u2, h5(r2);
          }
          function h5(r2) {
            r2._state === 2 && r2._deferreds.length === 0 && n2._immediateFn(function() {
              r2._handled || n2._unhandledRejectionFn(r2._value);
            });
            for (var u2 = 0, f3 = r2._deferreds.length; u2 < f3; u2++)
              o3(r2, r2._deferreds[u2]);
            r2._deferreds = null;
          }
          function t(r2, u2, f3) {
            this.onFulfilled = typeof r2 == "function" ? r2 : null, this.onRejected = typeof u2 == "function" ? u2 : null, this.promise = f3;
          }
          function y5(r2, u2) {
            var f3 = false;
            try {
              r2(function(m5) {
                f3 || (f3 = true, e(u2, m5));
              }, function(m5) {
                f3 || (f3 = true, s4(u2, m5));
              });
            } catch (m5) {
              if (f3)
                return;
              f3 = true, s4(u2, m5);
            }
          }
          n2.prototype.catch = function(r2) {
            return this.then(null, r2);
          }, n2.prototype.then = function(r2, u2) {
            var f3 = new this.constructor(l3);
            return o3(this, new t(r2, u2, f3)), f3;
          }, n2.prototype.finally = a5.a, n2.all = function(r2) {
            return new n2(function(u2, f3) {
              if (!r2 || r2.length === void 0)
                throw new TypeError("Promise.all accepts an array");
              var m5 = Array.prototype.slice.call(r2);
              if (m5.length === 0)
                return u2([]);
              var b5 = m5.length;
              function g5(T4, E4) {
                try {
                  if (E4 && (typeof E4 == "object" || typeof E4 == "function")) {
                    var S5 = E4.then;
                    if (typeof S5 == "function")
                      return void S5.call(E4, function(L6) {
                        g5(T4, L6);
                      }, f3);
                  }
                  m5[T4] = E4, --b5 == 0 && u2(m5);
                } catch (L6) {
                  f3(L6);
                }
              }
              for (var _3 = 0; _3 < m5.length; _3++)
                g5(_3, m5[_3]);
            });
          }, n2.resolve = function(r2) {
            return r2 && typeof r2 == "object" && r2.constructor === n2 ? r2 : new n2(function(u2) {
              u2(r2);
            });
          }, n2.reject = function(r2) {
            return new n2(function(u2, f3) {
              f3(r2);
            });
          }, n2.race = function(r2) {
            return new n2(function(u2, f3) {
              for (var m5 = 0, b5 = r2.length; m5 < b5; m5++)
                r2[m5].then(u2, f3);
            });
          }, n2._immediateFn = typeof i2 == "function" && function(r2) {
            i2(r2);
          } || function(r2) {
            p3(r2, 0);
          }, n2._unhandledRejectionFn = function(r2) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r2);
          }, v5.a = n2;
        }).call(this, c5(5).setImmediate);
      }, function(d4, v5, c5) {
        v5.a = function(i2) {
          var a5 = this.constructor;
          return this.then(function(p3) {
            return a5.resolve(i2()).then(function() {
              return p3;
            });
          }, function(p3) {
            return a5.resolve(i2()).then(function() {
              return a5.reject(p3);
            });
          });
        };
      }, function(d4, v5, c5) {
        function i2(t) {
          return (i2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y5) {
            return typeof y5;
          } : function(y5) {
            return y5 && typeof Symbol == "function" && y5.constructor === Symbol && y5 !== Symbol.prototype ? "symbol" : typeof y5;
          })(t);
        }
        c5(4);
        var a5, p3, l3, n2, o3, e, s4 = c5(8), h5 = (p3 = function(t) {
          return new Promise(function(y5, r2) {
            t = n2(t), t = o3(t);
            var u2 = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
            u2.open(t.method, t.url), u2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m5) {
              var b5 = t.headers[m5];
              u2.setRequestHeader(m5, b5);
            });
            var f3 = t.ratio;
            u2.upload.addEventListener("progress", function(m5) {
              var b5 = Math.round(m5.loaded / m5.total * 100), g5 = Math.ceil(b5 * f3 / 100);
              t.progress(g5);
            }, false), u2.addEventListener("progress", function(m5) {
              var b5 = Math.round(m5.loaded / m5.total * 100), g5 = Math.ceil(b5 * (100 - f3) / 100) + f3;
              t.progress(g5);
            }, false), u2.onreadystatechange = function() {
              if (u2.readyState === 4) {
                var m5 = u2.response;
                try {
                  m5 = JSON.parse(m5);
                } catch {
                }
                var b5 = s4.parseHeaders(u2.getAllResponseHeaders()), g5 = { body: m5, code: u2.status, headers: b5 };
                u2.status === 200 ? y5(g5) : r2(g5);
              }
            }, u2.send(t.data);
          });
        }, l3 = function(t) {
          return t.method = "POST", p3(t);
        }, n2 = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (t.url && typeof t.url != "string")
            throw new Error("Url must be a string");
          if (t.url = t.url || "", t.method && typeof t.method != "string")
            throw new Error("`method` must be a string or null");
          if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && i2(t.headers) !== "object")
            throw new Error("`headers` must be an object or null");
          if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(a5).includes(t.type)))
            throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
          if (t.progress && typeof t.progress != "function")
            throw new Error("`progress` must be a function or null");
          if (t.progress = t.progress || function(y5) {
          }, t.beforeSend = t.beforeSend || function(y5) {
          }, t.ratio && typeof t.ratio != "number")
            throw new Error("`ratio` must be a number");
          if (t.ratio < 0 || t.ratio > 100)
            throw new Error("`ratio` must be in a 0-100 interval");
          if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
            throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
            throw new Error("`multiple` must be a true or false");
          if (t.multiple = t.multiple || false, t.fieldName && typeof t.fieldName != "string")
            throw new Error("`fieldName` must be a string");
          return t.fieldName = t.fieldName || "files", t;
        }, o3 = function(t) {
          switch (t.method) {
            case "GET":
              var y5 = e(t.data, a5.URLENCODED);
              delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y5 : t.url + "?" + y5;
              break;
            case "POST":
            case "PUT":
            case "DELETE":
            case "UPDATE":
              var r2 = function() {
                return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a5.JSON;
              }(t);
              (s4.isFormData(t.data) || s4.isFormElement(t.data)) && (r2 = a5.FORM), t.data = e(t.data, r2), r2 !== h5.contentType.FORM && (t.headers["content-type"] = r2);
          }
          return t;
        }, e = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case a5.URLENCODED:
              return s4.urlEncode(t);
            case a5.JSON:
              return s4.jsonEncode(t);
            case a5.FORM:
              return s4.formEncode(t);
            default:
              return t;
          }
        }, { contentType: a5 = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: p3, get: function(t) {
          return t.method = "GET", p3(t);
        }, post: l3, transport: function(t) {
          return t = n2(t), s4.selectFiles(t).then(function(y5) {
            for (var r2 = new FormData(), u2 = 0; u2 < y5.length; u2++)
              r2.append(t.fieldName, y5[u2], y5[u2].name);
            return s4.isObject(t.data) && Object.keys(t.data).forEach(function(f3) {
              var m5 = t.data[f3];
              r2.append(f3, m5);
            }), t.beforeSend && t.beforeSend(y5), t.data = r2, l3(t);
          });
        }, selectFiles: function(t) {
          return delete (t = n2(t)).beforeSend, s4.selectFiles(t);
        } });
        d4.exports = h5;
      }, function(d4, v5, c5) {
        c5.r(v5);
        var i2 = c5(1);
        window.Promise = window.Promise || i2.a;
      }, function(d4, v5, c5) {
        (function(i2) {
          var a5 = i2 !== void 0 && i2 || typeof self < "u" && self || window, p3 = Function.prototype.apply;
          function l3(n2, o3) {
            this._id = n2, this._clearFn = o3;
          }
          v5.setTimeout = function() {
            return new l3(p3.call(setTimeout, a5, arguments), clearTimeout);
          }, v5.setInterval = function() {
            return new l3(p3.call(setInterval, a5, arguments), clearInterval);
          }, v5.clearTimeout = v5.clearInterval = function(n2) {
            n2 && n2.close();
          }, l3.prototype.unref = l3.prototype.ref = function() {
          }, l3.prototype.close = function() {
            this._clearFn.call(a5, this._id);
          }, v5.enroll = function(n2, o3) {
            clearTimeout(n2._idleTimeoutId), n2._idleTimeout = o3;
          }, v5.unenroll = function(n2) {
            clearTimeout(n2._idleTimeoutId), n2._idleTimeout = -1;
          }, v5._unrefActive = v5.active = function(n2) {
            clearTimeout(n2._idleTimeoutId);
            var o3 = n2._idleTimeout;
            o3 >= 0 && (n2._idleTimeoutId = setTimeout(function() {
              n2._onTimeout && n2._onTimeout();
            }, o3));
          }, c5(6), v5.setImmediate = typeof self < "u" && self.setImmediate || i2 !== void 0 && i2.setImmediate || this && this.setImmediate, v5.clearImmediate = typeof self < "u" && self.clearImmediate || i2 !== void 0 && i2.clearImmediate || this && this.clearImmediate;
        }).call(this, c5(0));
      }, function(d4, v5, c5) {
        (function(i2, a5) {
          (function(p3, l3) {
            if (!p3.setImmediate) {
              var n2, o3, e, s4, h5, t = 1, y5 = {}, r2 = false, u2 = p3.document, f3 = Object.getPrototypeOf && Object.getPrototypeOf(p3);
              f3 = f3 && f3.setTimeout ? f3 : p3, {}.toString.call(p3.process) === "[object process]" ? n2 = function(g5) {
                a5.nextTick(function() {
                  b5(g5);
                });
              } : function() {
                if (p3.postMessage && !p3.importScripts) {
                  var g5 = true, _3 = p3.onmessage;
                  return p3.onmessage = function() {
                    g5 = false;
                  }, p3.postMessage("", "*"), p3.onmessage = _3, g5;
                }
              }() ? (s4 = "setImmediate$" + Math.random() + "$", h5 = function(g5) {
                g5.source === p3 && typeof g5.data == "string" && g5.data.indexOf(s4) === 0 && b5(+g5.data.slice(s4.length));
              }, p3.addEventListener ? p3.addEventListener("message", h5, false) : p3.attachEvent("onmessage", h5), n2 = function(g5) {
                p3.postMessage(s4 + g5, "*");
              }) : p3.MessageChannel ? ((e = new MessageChannel()).port1.onmessage = function(g5) {
                b5(g5.data);
              }, n2 = function(g5) {
                e.port2.postMessage(g5);
              }) : u2 && "onreadystatechange" in u2.createElement("script") ? (o3 = u2.documentElement, n2 = function(g5) {
                var _3 = u2.createElement("script");
                _3.onreadystatechange = function() {
                  b5(g5), _3.onreadystatechange = null, o3.removeChild(_3), _3 = null;
                }, o3.appendChild(_3);
              }) : n2 = function(g5) {
                setTimeout(b5, 0, g5);
              }, f3.setImmediate = function(g5) {
                typeof g5 != "function" && (g5 = new Function("" + g5));
                for (var _3 = new Array(arguments.length - 1), T4 = 0; T4 < _3.length; T4++)
                  _3[T4] = arguments[T4 + 1];
                var E4 = { callback: g5, args: _3 };
                return y5[t] = E4, n2(t), t++;
              }, f3.clearImmediate = m5;
            }
            function m5(g5) {
              delete y5[g5];
            }
            function b5(g5) {
              if (r2)
                setTimeout(b5, 0, g5);
              else {
                var _3 = y5[g5];
                if (_3) {
                  r2 = true;
                  try {
                    (function(T4) {
                      var E4 = T4.callback, S5 = T4.args;
                      switch (S5.length) {
                        case 0:
                          E4();
                          break;
                        case 1:
                          E4(S5[0]);
                          break;
                        case 2:
                          E4(S5[0], S5[1]);
                          break;
                        case 3:
                          E4(S5[0], S5[1], S5[2]);
                          break;
                        default:
                          E4.apply(l3, S5);
                      }
                    })(_3);
                  } finally {
                    m5(g5), r2 = false;
                  }
                }
              }
            }
          })(typeof self > "u" ? i2 === void 0 ? this : i2 : self);
        }).call(this, c5(0), c5(7));
      }, function(d4, v5) {
        var c5, i2, a5 = d4.exports = {};
        function p3() {
          throw new Error("setTimeout has not been defined");
        }
        function l3() {
          throw new Error("clearTimeout has not been defined");
        }
        function n2(f3) {
          if (c5 === setTimeout)
            return setTimeout(f3, 0);
          if ((c5 === p3 || !c5) && setTimeout)
            return c5 = setTimeout, setTimeout(f3, 0);
          try {
            return c5(f3, 0);
          } catch {
            try {
              return c5.call(null, f3, 0);
            } catch {
              return c5.call(this, f3, 0);
            }
          }
        }
        (function() {
          try {
            c5 = typeof setTimeout == "function" ? setTimeout : p3;
          } catch {
            c5 = p3;
          }
          try {
            i2 = typeof clearTimeout == "function" ? clearTimeout : l3;
          } catch {
            i2 = l3;
          }
        })();
        var o3, e = [], s4 = false, h5 = -1;
        function t() {
          s4 && o3 && (s4 = false, o3.length ? e = o3.concat(e) : h5 = -1, e.length && y5());
        }
        function y5() {
          if (!s4) {
            var f3 = n2(t);
            s4 = true;
            for (var m5 = e.length; m5; ) {
              for (o3 = e, e = []; ++h5 < m5; )
                o3 && o3[h5].run();
              h5 = -1, m5 = e.length;
            }
            o3 = null, s4 = false, function(b5) {
              if (i2 === clearTimeout)
                return clearTimeout(b5);
              if ((i2 === l3 || !i2) && clearTimeout)
                return i2 = clearTimeout, clearTimeout(b5);
              try {
                i2(b5);
              } catch {
                try {
                  return i2.call(null, b5);
                } catch {
                  return i2.call(this, b5);
                }
              }
            }(f3);
          }
        }
        function r2(f3, m5) {
          this.fun = f3, this.array = m5;
        }
        function u2() {
        }
        a5.nextTick = function(f3) {
          var m5 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var b5 = 1; b5 < arguments.length; b5++)
              m5[b5 - 1] = arguments[b5];
          e.push(new r2(f3, m5)), e.length !== 1 || s4 || n2(y5);
        }, r2.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, a5.title = "browser", a5.browser = true, a5.env = {}, a5.argv = [], a5.version = "", a5.versions = {}, a5.on = u2, a5.addListener = u2, a5.once = u2, a5.off = u2, a5.removeListener = u2, a5.removeAllListeners = u2, a5.emit = u2, a5.prependListener = u2, a5.prependOnceListener = u2, a5.listeners = function(f3) {
          return [];
        }, a5.binding = function(f3) {
          throw new Error("process.binding is not supported");
        }, a5.cwd = function() {
          return "/";
        }, a5.chdir = function(f3) {
          throw new Error("process.chdir is not supported");
        }, a5.umask = function() {
          return 0;
        };
      }, function(d4, v5, c5) {
        function i2(p3, l3) {
          for (var n2 = 0; n2 < l3.length; n2++) {
            var o3 = l3[n2];
            o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(p3, o3.key, o3);
          }
        }
        var a5 = c5(9);
        d4.exports = function() {
          function p3() {
            (function(e, s4) {
              if (!(e instanceof s4))
                throw new TypeError("Cannot call a class as a function");
            })(this, p3);
          }
          var l3, n2, o3;
          return l3 = p3, o3 = [{ key: "urlEncode", value: function(e) {
            return a5(e);
          } }, { key: "jsonEncode", value: function(e) {
            return JSON.stringify(e);
          } }, { key: "formEncode", value: function(e) {
            if (this.isFormData(e))
              return e;
            if (this.isFormElement(e))
              return new FormData(e);
            if (this.isObject(e)) {
              var s4 = new FormData();
              return Object.keys(e).forEach(function(h5) {
                var t = e[h5];
                s4.append(h5, t);
              }), s4;
            }
            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          } }, { key: "isObject", value: function(e) {
            return Object.prototype.toString.call(e) === "[object Object]";
          } }, { key: "isFormData", value: function(e) {
            return e instanceof FormData;
          } }, { key: "isFormElement", value: function(e) {
            return e instanceof HTMLFormElement;
          } }, { key: "selectFiles", value: function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return new Promise(function(s4, h5) {
              var t = document.createElement("INPUT");
              t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function(y5) {
                var r2 = y5.target.files;
                s4(r2), document.body.removeChild(t);
              }, false), t.click();
            });
          } }, { key: "parseHeaders", value: function(e) {
            var s4 = e.trim().split(/[\r\n]+/), h5 = {};
            return s4.forEach(function(t) {
              var y5 = t.split(": "), r2 = y5.shift(), u2 = y5.join(": ");
              r2 && (h5[r2] = u2);
            }), h5;
          } }], (n2 = null) && i2(l3.prototype, n2), o3 && i2(l3, o3), p3;
        }();
      }, function(d4, v5) {
        var c5 = function(a5) {
          return encodeURIComponent(a5).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
        }, i2 = function(a5, p3, l3, n2) {
          return p3 = p3 || null, l3 = l3 || "&", n2 = n2 || null, a5 ? function(o3) {
            for (var e = new Array(), s4 = 0; s4 < o3.length; s4++)
              o3[s4] && e.push(o3[s4]);
            return e;
          }(Object.keys(a5).map(function(o3) {
            var e, s4, h5 = o3;
            if (n2 && (h5 = n2 + "[" + h5 + "]"), typeof a5[o3] == "object" && a5[o3] !== null)
              e = i2(a5[o3], null, l3, h5);
            else {
              p3 && (s4 = h5, h5 = !isNaN(parseFloat(s4)) && isFinite(s4) ? p3 + Number(h5) : h5);
              var t = a5[o3];
              t = (t = (t = (t = t === true ? "1" : t) === false ? "0" : t) === 0 ? "0" : t) || "", e = c5(h5) + "=" + c5(t);
            }
            return e;
          })).join(l3).replace(/[!'()*]/g, "") : "";
        };
        d4.exports = i2;
      }]);
    });
  })(j3);
  var P3 = j3.exports;
  var R5 = /* @__PURE__ */ O5(P3);
  var F5 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';
  var I4 = class {
    /**
     * Notify core that read-only mode supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: F5,
        title: "Link"
      };
    }
    /**
     * Allow to press Enter inside the LinkTool input
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * @param {object} options - Tool constructor options fot from Editor.js
     * @param {LinkToolData} options.data - previously saved data
     * @param {LinkToolConfig} options.config - user config for Tool
     * @param {object} options.api - Editor.js API
     * @param {boolean} options.readOnly - read-only mode flag
     */
    constructor({ data: w5, config: d4, api: v5, readOnly: c5 }) {
      this.api = v5, this.readOnly = c5, this.config = {
        endpoint: d4.endpoint || "",
        headers: d4.headers || {}
      }, this.nodes = {
        wrapper: null,
        container: null,
        progress: null,
        input: null,
        inputHolder: null,
        linkContent: null,
        linkImage: null,
        linkTitle: null,
        linkDescription: null,
        linkText: null
      }, this._data = {
        link: "",
        meta: {}
      }, this.data = w5;
    }
    /**
     * Renders Block content
     *
     * @public
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
    }
    /**
     * Return Block data
     *
     * @public
     *
     * @returns {LinkToolData}
     */
    save() {
      return this.data;
    }
    /**
     * Validate Block data
     * - check if given link is an empty string or not.
     *
     * @public
     *
     * @returns {boolean} false if saved data is incorrect, otherwise true
     */
    validate() {
      return this.data.link.trim() !== "";
    }
    /**
     * Stores all Tool's data
     *
     * @param {LinkToolData} data - data to store
     */
    set data(w5) {
      this._data = Object.assign({}, {
        link: w5.link || this._data.link,
        meta: w5.meta || this._data.meta
      });
    }
    /**
     * Return Tool data
     *
     * @returns {LinkToolData}
     */
    get data() {
      return this._data;
    }
    /**
     * @returns {object} - Link Tool styles
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        /**
         * Tool's classes
         */
        container: "link-tool",
        inputEl: "link-tool__input",
        inputHolder: "link-tool__input-holder",
        inputError: "link-tool__input-holder--error",
        linkContent: "link-tool__content",
        linkContentRendered: "link-tool__content--rendered",
        linkImage: "link-tool__image",
        linkTitle: "link-tool__title",
        linkDescription: "link-tool__description",
        linkText: "link-tool__anchor",
        progress: "link-tool__progress",
        progressLoading: "link-tool__progress--loading",
        progressLoaded: "link-tool__progress--loaded"
      };
    }
    /**
     * Prepare input holder
     *
     * @returns {HTMLElement}
     */
    makeInputHolder() {
      const w5 = this.make("div", this.CSS.inputHolder);
      return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
        contentEditable: !this.readOnly
      }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", (d4) => {
        this.startFetching(d4);
      }), this.nodes.input.addEventListener("keydown", (d4) => {
        const [v5, c5] = [13, 65], i2 = d4.ctrlKey || d4.metaKey;
        switch (d4.keyCode) {
          case v5:
            d4.preventDefault(), d4.stopPropagation(), this.startFetching(d4);
            break;
          case c5:
            i2 && this.selectLinkUrl(d4);
            break;
        }
      })), w5.appendChild(this.nodes.progress), w5.appendChild(this.nodes.input), w5;
    }
    /**
     * Activates link data fetching by url
     *
     * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
     */
    startFetching(w5) {
      let d4 = this.nodes.input.textContent;
      w5.type === "paste" && (d4 = (w5.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(d4);
    }
    /**
     * If previous link data fetching failed, remove error styles
     */
    removeErrorStyle() {
      this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
    }
    /**
     * Select LinkTool input content by CMD+A
     *
     * @param {KeyboardEvent} event - keydown
     */
    selectLinkUrl(w5) {
      w5.preventDefault(), w5.stopPropagation();
      const d4 = window.getSelection(), v5 = new Range(), a5 = d4.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
      v5.selectNodeContents(a5), d4.removeAllRanges(), d4.addRange(v5);
    }
    /**
     * Prepare link preview holder
     *
     * @returns {HTMLElement}
     */
    prepareLinkPreview() {
      const w5 = this.make("a", this.CSS.linkContent, {
        target: "_blank",
        rel: "nofollow noindex noreferrer"
      });
      return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), w5;
    }
    /**
     * Compose link preview from fetched data
     *
     * @param {metaData} meta - link meta data
     */
    showLinkPreview({ image: w5, title: d4, description: v5 }) {
      this.nodes.container.appendChild(this.nodes.linkContent), w5 && w5.url && (this.nodes.linkImage.style.backgroundImage = "url(" + w5.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), d4 && (this.nodes.linkTitle.textContent = d4, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), v5 && (this.nodes.linkDescription.textContent = v5, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
      try {
        this.nodes.linkText.textContent = new URL(this.data.link).hostname;
      } catch {
        this.nodes.linkText.textContent = this.data.link;
      }
    }
    /**
     * Show loading progress bar
     */
    showProgress() {
      this.nodes.progress.classList.add(this.CSS.progressLoading);
    }
    /**
     * Hide loading progress bar
     *
     * @returns {Promise<void>}
     */
    hideProgress() {
      return new Promise((w5) => {
        this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(w5, 500);
      });
    }
    /**
     * If data fetching failed, set input error style
     */
    applyErrorStyle() {
      this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
    }
    /**
     * Sends to backend pasted url and receives link data
     *
     * @param {string} url - link source url
     */
    async fetchLinkData(w5) {
      this.showProgress(), this.data = { link: w5 };
      try {
        const { body: d4 } = await R5.get({
          url: this.config.endpoint,
          headers: this.config.headers,
          data: {
            url: w5
          }
        });
        this.onFetch(d4);
      } catch {
        this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
      }
    }
    /**
     * Link data fetching callback
     *
     * @param {UploadResponseFormat} response - backend response
     */
    onFetch(w5) {
      if (!w5 || !w5.success) {
        this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
        return;
      }
      const d4 = w5.meta, v5 = w5.link || this.data.link;
      if (this.data = {
        meta: d4,
        link: v5
      }, !d4) {
        this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
        return;
      }
      this.hideProgress().then(() => {
        this.nodes.inputHolder.remove(), this.showLinkPreview(d4);
      });
    }
    /**
     * Handle link fetching errors
     *
     * @private
     *
     * @param {string} errorMessage - message to explain user what he should do
     */
    fetchingFailed(w5) {
      this.api.notifier.show({
        message: w5,
        style: "error"
      }), this.applyErrorStyle();
    }
    /**
     * Helper method for elements creation
     *
     * @param {string} tagName - name of creating element
     * @param {string|string[]} [classNames] - list of CSS classes to add
     * @param {object} [attributes] - object with attributes to add
     * @returns {HTMLElement}
     */
    make(w5, d4 = null, v5 = {}) {
      const c5 = document.createElement(w5);
      Array.isArray(d4) ? c5.classList.add(...d4) : d4 && c5.classList.add(d4);
      for (const i2 in v5)
        c5[i2] = v5[i2];
      return c5;
    }
  };

  // node_modules/@editorjs/image/dist/image.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var o3 = document.createElement("style");
        o3.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{display:none!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{display:block}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(o3);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var R6 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>';
  var I5 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>';
  var L5 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
  var x4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  var B4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function M4(C5, i2 = null, a5 = {}) {
    const s4 = document.createElement(C5);
    Array.isArray(i2) ? s4.classList.add(...i2) : i2 !== null && s4.classList.add(i2);
    for (const r2 in a5)
      a5.hasOwnProperty(r2) && (s4[r2] = a5[r2]);
    return s4;
  }
  var S4 = /* @__PURE__ */ ((C5) => (C5.Empty = "empty", C5.Uploading = "uploading", C5.Filled = "filled", C5))(S4 || {});
  var U4 = class {
    /**
     * @param ui - image tool Ui module
     * @param ui.api - Editor.js API
     * @param ui.config - user config
     * @param ui.onSelectFile - callback for clicks on Select file button
     * @param ui.readOnly - read-only mode flag
     */
    constructor({ api: i2, config: a5, onSelectFile: s4, readOnly: r2 }) {
      this.api = i2, this.config = a5, this.onSelectFile = s4, this.readOnly = r2, this.nodes = {
        wrapper: M4("div", [this.CSS.baseClass, this.CSS.wrapper]),
        imageContainer: M4("div", [this.CSS.imageContainer]),
        fileButton: this.createFileButton(),
        imageEl: void 0,
        imagePreloader: M4("div", this.CSS.imagePreloader),
        caption: M4("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly
        })
      }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
    }
    /**
     * Apply visual representation of activated tune
     * @param tuneName - one of available tunes {@link Tunes.tunes}
     * @param status - true for enable, false for disable
     */
    applyTune(i2, a5) {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i2}`, a5);
    }
    /**
     * Renders tool UI
     * @param toolData - saved tool data
     */
    render(i2) {
      return i2.file === void 0 || Object.keys(i2.file).length === 0 ? this.toggleStatus(
        "empty"
        /* Empty */
      ) : this.toggleStatus(
        "uploading"
        /* Uploading */
      ), this.nodes.wrapper;
    }
    /**
     * Shows uploading preloader
     * @param src - preview source
     */
    showPreloader(i2) {
      this.nodes.imagePreloader.style.backgroundImage = `url(${i2})`, this.toggleStatus(
        "uploading"
        /* Uploading */
      );
    }
    /**
     * Hide uploading preloader
     */
    hidePreloader() {
      this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
        "empty"
        /* Empty */
      );
    }
    /**
     * Shows an image
     * @param url - image source
     */
    fillImage(i2) {
      const a5 = /\.mp4$/.test(i2) ? "VIDEO" : "IMG", s4 = {
        src: i2
      };
      let r2 = "load";
      a5 === "VIDEO" && (s4.autoplay = true, s4.loop = true, s4.muted = true, s4.playsinline = true, r2 = "loadeddata"), this.nodes.imageEl = M4(a5, this.CSS.imageEl, s4), this.nodes.imageEl.addEventListener(r2, () => {
        this.toggleStatus(
          "filled"
          /* Filled */
        ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
      }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    }
    /**
     * Shows caption input
     * @param text - caption content text
     */
    fillCaption(i2) {
      this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = i2);
    }
    /**
     * CSS classes
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        /**
         * Tool's classes
         */
        wrapper: "image-tool",
        imageContainer: "image-tool__image",
        imagePreloader: "image-tool__image-preloader",
        imageEl: "image-tool__image-picture",
        caption: "image-tool__caption"
      };
    }
    /**
     * Creates upload-file button
     */
    createFileButton() {
      const i2 = M4("div", [this.CSS.button]);
      return i2.innerHTML = this.config.buttonContent ?? `${L5} ${this.api.i18n.t("Select an Image")}`, i2.addEventListener("click", () => {
        this.onSelectFile();
      }), i2;
    }
    /**
     * Changes UI status
     * @param status - see {@link Ui.status} constants
     */
    toggleStatus(i2) {
      for (const a5 in S4)
        Object.prototype.hasOwnProperty.call(S4, a5) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${S4[a5]}`, i2 === S4[a5]);
    }
  };
  function D4(C5) {
    return C5 && C5.__esModule && Object.prototype.hasOwnProperty.call(C5, "default") ? C5.default : C5;
  }
  var H5 = { exports: {} };
  (function(C5, i2) {
    (function(a5, s4) {
      C5.exports = s4();
    })(window, function() {
      return function(a5) {
        var s4 = {};
        function r2(e) {
          if (s4[e]) return s4[e].exports;
          var o3 = s4[e] = { i: e, l: false, exports: {} };
          return a5[e].call(o3.exports, o3, o3.exports, r2), o3.l = true, o3.exports;
        }
        return r2.m = a5, r2.c = s4, r2.d = function(e, o3, d4) {
          r2.o(e, o3) || Object.defineProperty(e, o3, { enumerable: true, get: d4 });
        }, r2.r = function(e) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
        }, r2.t = function(e, o3) {
          if (1 & o3 && (e = r2(e)), 8 & o3 || 4 & o3 && typeof e == "object" && e && e.__esModule) return e;
          var d4 = /* @__PURE__ */ Object.create(null);
          if (r2.r(d4), Object.defineProperty(d4, "default", { enumerable: true, value: e }), 2 & o3 && typeof e != "string") for (var v5 in e) r2.d(d4, v5, function(l3) {
            return e[l3];
          }.bind(null, v5));
          return d4;
        }, r2.n = function(e) {
          var o3 = e && e.__esModule ? function() {
            return e.default;
          } : function() {
            return e;
          };
          return r2.d(o3, "a", o3), o3;
        }, r2.o = function(e, o3) {
          return Object.prototype.hasOwnProperty.call(e, o3);
        }, r2.p = "", r2(r2.s = 3);
      }([function(a5, s4) {
        var r2;
        r2 = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          r2 = r2 || new Function("return this")();
        } catch {
          typeof window == "object" && (r2 = window);
        }
        a5.exports = r2;
      }, function(a5, s4, r2) {
        (function(e) {
          var o3 = r2(2), d4 = setTimeout;
          function v5() {
          }
          function l3(n2) {
            if (!(this instanceof l3)) throw new TypeError("Promises must be constructed via new");
            if (typeof n2 != "function") throw new TypeError("not a function");
            this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], t(n2, this);
          }
          function f3(n2, c5) {
            for (; n2._state === 3; ) n2 = n2._value;
            n2._state !== 0 ? (n2._handled = true, l3._immediateFn(function() {
              var u2 = n2._state === 1 ? c5.onFulfilled : c5.onRejected;
              if (u2 !== null) {
                var g5;
                try {
                  g5 = u2(n2._value);
                } catch (m5) {
                  return void y5(c5.promise, m5);
                }
                p3(c5.promise, g5);
              } else (n2._state === 1 ? p3 : y5)(c5.promise, n2._value);
            })) : n2._deferreds.push(c5);
          }
          function p3(n2, c5) {
            try {
              if (c5 === n2) throw new TypeError("A promise cannot be resolved with itself.");
              if (c5 && (typeof c5 == "object" || typeof c5 == "function")) {
                var u2 = c5.then;
                if (c5 instanceof l3) return n2._state = 3, n2._value = c5, void w5(n2);
                if (typeof u2 == "function") return void t((g5 = u2, m5 = c5, function() {
                  g5.apply(m5, arguments);
                }), n2);
              }
              n2._state = 1, n2._value = c5, w5(n2);
            } catch (h5) {
              y5(n2, h5);
            }
            var g5, m5;
          }
          function y5(n2, c5) {
            n2._state = 2, n2._value = c5, w5(n2);
          }
          function w5(n2) {
            n2._state === 2 && n2._deferreds.length === 0 && l3._immediateFn(function() {
              n2._handled || l3._unhandledRejectionFn(n2._value);
            });
            for (var c5 = 0, u2 = n2._deferreds.length; c5 < u2; c5++) f3(n2, n2._deferreds[c5]);
            n2._deferreds = null;
          }
          function b5(n2, c5, u2) {
            this.onFulfilled = typeof n2 == "function" ? n2 : null, this.onRejected = typeof c5 == "function" ? c5 : null, this.promise = u2;
          }
          function t(n2, c5) {
            var u2 = false;
            try {
              n2(function(g5) {
                u2 || (u2 = true, p3(c5, g5));
              }, function(g5) {
                u2 || (u2 = true, y5(c5, g5));
              });
            } catch (g5) {
              if (u2) return;
              u2 = true, y5(c5, g5);
            }
          }
          l3.prototype.catch = function(n2) {
            return this.then(null, n2);
          }, l3.prototype.then = function(n2, c5) {
            var u2 = new this.constructor(v5);
            return f3(this, new b5(n2, c5, u2)), u2;
          }, l3.prototype.finally = o3.a, l3.all = function(n2) {
            return new l3(function(c5, u2) {
              if (!n2 || n2.length === void 0) throw new TypeError("Promise.all accepts an array");
              var g5 = Array.prototype.slice.call(n2);
              if (g5.length === 0) return c5([]);
              var m5 = g5.length;
              function h5(T4, E4) {
                try {
                  if (E4 && (typeof E4 == "object" || typeof E4 == "function")) {
                    var j4 = E4.then;
                    if (typeof j4 == "function") return void j4.call(E4, function(F6) {
                      h5(T4, F6);
                    }, u2);
                  }
                  g5[T4] = E4, --m5 == 0 && c5(g5);
                } catch (F6) {
                  u2(F6);
                }
              }
              for (var k4 = 0; k4 < g5.length; k4++) h5(k4, g5[k4]);
            });
          }, l3.resolve = function(n2) {
            return n2 && typeof n2 == "object" && n2.constructor === l3 ? n2 : new l3(function(c5) {
              c5(n2);
            });
          }, l3.reject = function(n2) {
            return new l3(function(c5, u2) {
              u2(n2);
            });
          }, l3.race = function(n2) {
            return new l3(function(c5, u2) {
              for (var g5 = 0, m5 = n2.length; g5 < m5; g5++) n2[g5].then(c5, u2);
            });
          }, l3._immediateFn = typeof e == "function" && function(n2) {
            e(n2);
          } || function(n2) {
            d4(n2, 0);
          }, l3._unhandledRejectionFn = function(n2) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", n2);
          }, s4.a = l3;
        }).call(this, r2(5).setImmediate);
      }, function(a5, s4, r2) {
        s4.a = function(e) {
          var o3 = this.constructor;
          return this.then(function(d4) {
            return o3.resolve(e()).then(function() {
              return d4;
            });
          }, function(d4) {
            return o3.resolve(e()).then(function() {
              return o3.reject(d4);
            });
          });
        };
      }, function(a5, s4, r2) {
        function e(t) {
          return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n2) {
            return typeof n2;
          } : function(n2) {
            return n2 && typeof Symbol == "function" && n2.constructor === Symbol && n2 !== Symbol.prototype ? "symbol" : typeof n2;
          })(t);
        }
        r2(4);
        var o3, d4, v5, l3, f3, p3, y5, w5 = r2(8), b5 = (d4 = function(t) {
          return new Promise(function(n2, c5) {
            t = l3(t), (t = f3(t)).beforeSend && t.beforeSend();
            var u2 = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
            u2.open(t.method, t.url), u2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m5) {
              var h5 = t.headers[m5];
              u2.setRequestHeader(m5, h5);
            });
            var g5 = t.ratio;
            u2.upload.addEventListener("progress", function(m5) {
              var h5 = Math.round(m5.loaded / m5.total * 100), k4 = Math.ceil(h5 * g5 / 100);
              t.progress(Math.min(k4, 100));
            }, false), u2.addEventListener("progress", function(m5) {
              var h5 = Math.round(m5.loaded / m5.total * 100), k4 = Math.ceil(h5 * (100 - g5) / 100) + g5;
              t.progress(Math.min(k4, 100));
            }, false), u2.onreadystatechange = function() {
              if (u2.readyState === 4) {
                var m5 = u2.response;
                try {
                  m5 = JSON.parse(m5);
                } catch {
                }
                var h5 = w5.parseHeaders(u2.getAllResponseHeaders()), k4 = { body: m5, code: u2.status, headers: h5 };
                y5(u2.status) ? n2(k4) : c5(k4);
              }
            }, u2.send(t.data);
          });
        }, v5 = function(t) {
          return t.method = "POST", d4(t);
        }, l3 = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
          if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
          if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && e(t.headers) !== "object") throw new Error("`headers` must be an object or null");
          if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o3).includes(t.type))) throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
          if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
          if (t.progress = t.progress || function(n2) {
          }, t.beforeSend = t.beforeSend || function(n2) {
          }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
          if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
          if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
          if (t.multiple = t.multiple || false, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
          return t.fieldName = t.fieldName || "files", t;
        }, f3 = function(t) {
          switch (t.method) {
            case "GET":
              var n2 = p3(t.data, o3.URLENCODED);
              delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + n2 : t.url + "?" + n2;
              break;
            case "POST":
            case "PUT":
            case "DELETE":
            case "UPDATE":
              var c5 = function() {
                return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o3.JSON;
              }(t);
              (w5.isFormData(t.data) || w5.isFormElement(t.data)) && (c5 = o3.FORM), t.data = p3(t.data, c5), c5 !== b5.contentType.FORM && (t.headers["content-type"] = c5);
          }
          return t;
        }, p3 = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case o3.URLENCODED:
              return w5.urlEncode(t);
            case o3.JSON:
              return w5.jsonEncode(t);
            case o3.FORM:
              return w5.formEncode(t);
            default:
              return t;
          }
        }, y5 = function(t) {
          return t >= 200 && t < 300;
        }, { contentType: o3 = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d4, get: function(t) {
          return t.method = "GET", d4(t);
        }, post: v5, transport: function(t) {
          return t = l3(t), w5.selectFiles(t).then(function(n2) {
            for (var c5 = new FormData(), u2 = 0; u2 < n2.length; u2++) c5.append(t.fieldName, n2[u2], n2[u2].name);
            w5.isObject(t.data) && Object.keys(t.data).forEach(function(m5) {
              var h5 = t.data[m5];
              c5.append(m5, h5);
            });
            var g5 = t.beforeSend;
            return t.beforeSend = function() {
              return g5(n2);
            }, t.data = c5, v5(t);
          });
        }, selectFiles: function(t) {
          return delete (t = l3(t)).beforeSend, w5.selectFiles(t);
        } });
        a5.exports = b5;
      }, function(a5, s4, r2) {
        r2.r(s4);
        var e = r2(1);
        window.Promise = window.Promise || e.a;
      }, function(a5, s4, r2) {
        (function(e) {
          var o3 = e !== void 0 && e || typeof self < "u" && self || window, d4 = Function.prototype.apply;
          function v5(l3, f3) {
            this._id = l3, this._clearFn = f3;
          }
          s4.setTimeout = function() {
            return new v5(d4.call(setTimeout, o3, arguments), clearTimeout);
          }, s4.setInterval = function() {
            return new v5(d4.call(setInterval, o3, arguments), clearInterval);
          }, s4.clearTimeout = s4.clearInterval = function(l3) {
            l3 && l3.close();
          }, v5.prototype.unref = v5.prototype.ref = function() {
          }, v5.prototype.close = function() {
            this._clearFn.call(o3, this._id);
          }, s4.enroll = function(l3, f3) {
            clearTimeout(l3._idleTimeoutId), l3._idleTimeout = f3;
          }, s4.unenroll = function(l3) {
            clearTimeout(l3._idleTimeoutId), l3._idleTimeout = -1;
          }, s4._unrefActive = s4.active = function(l3) {
            clearTimeout(l3._idleTimeoutId);
            var f3 = l3._idleTimeout;
            f3 >= 0 && (l3._idleTimeoutId = setTimeout(function() {
              l3._onTimeout && l3._onTimeout();
            }, f3));
          }, r2(6), s4.setImmediate = typeof self < "u" && self.setImmediate || e !== void 0 && e.setImmediate || this && this.setImmediate, s4.clearImmediate = typeof self < "u" && self.clearImmediate || e !== void 0 && e.clearImmediate || this && this.clearImmediate;
        }).call(this, r2(0));
      }, function(a5, s4, r2) {
        (function(e, o3) {
          (function(d4, v5) {
            if (!d4.setImmediate) {
              var l3, f3, p3, y5, w5, b5 = 1, t = {}, n2 = false, c5 = d4.document, u2 = Object.getPrototypeOf && Object.getPrototypeOf(d4);
              u2 = u2 && u2.setTimeout ? u2 : d4, {}.toString.call(d4.process) === "[object process]" ? l3 = function(h5) {
                o3.nextTick(function() {
                  m5(h5);
                });
              } : function() {
                if (d4.postMessage && !d4.importScripts) {
                  var h5 = true, k4 = d4.onmessage;
                  return d4.onmessage = function() {
                    h5 = false;
                  }, d4.postMessage("", "*"), d4.onmessage = k4, h5;
                }
              }() ? (y5 = "setImmediate$" + Math.random() + "$", w5 = function(h5) {
                h5.source === d4 && typeof h5.data == "string" && h5.data.indexOf(y5) === 0 && m5(+h5.data.slice(y5.length));
              }, d4.addEventListener ? d4.addEventListener("message", w5, false) : d4.attachEvent("onmessage", w5), l3 = function(h5) {
                d4.postMessage(y5 + h5, "*");
              }) : d4.MessageChannel ? ((p3 = new MessageChannel()).port1.onmessage = function(h5) {
                m5(h5.data);
              }, l3 = function(h5) {
                p3.port2.postMessage(h5);
              }) : c5 && "onreadystatechange" in c5.createElement("script") ? (f3 = c5.documentElement, l3 = function(h5) {
                var k4 = c5.createElement("script");
                k4.onreadystatechange = function() {
                  m5(h5), k4.onreadystatechange = null, f3.removeChild(k4), k4 = null;
                }, f3.appendChild(k4);
              }) : l3 = function(h5) {
                setTimeout(m5, 0, h5);
              }, u2.setImmediate = function(h5) {
                typeof h5 != "function" && (h5 = new Function("" + h5));
                for (var k4 = new Array(arguments.length - 1), T4 = 0; T4 < k4.length; T4++) k4[T4] = arguments[T4 + 1];
                var E4 = { callback: h5, args: k4 };
                return t[b5] = E4, l3(b5), b5++;
              }, u2.clearImmediate = g5;
            }
            function g5(h5) {
              delete t[h5];
            }
            function m5(h5) {
              if (n2) setTimeout(m5, 0, h5);
              else {
                var k4 = t[h5];
                if (k4) {
                  n2 = true;
                  try {
                    (function(T4) {
                      var E4 = T4.callback, j4 = T4.args;
                      switch (j4.length) {
                        case 0:
                          E4();
                          break;
                        case 1:
                          E4(j4[0]);
                          break;
                        case 2:
                          E4(j4[0], j4[1]);
                          break;
                        case 3:
                          E4(j4[0], j4[1], j4[2]);
                          break;
                        default:
                          E4.apply(v5, j4);
                      }
                    })(k4);
                  } finally {
                    g5(h5), n2 = false;
                  }
                }
              }
            }
          })(typeof self > "u" ? e === void 0 ? this : e : self);
        }).call(this, r2(0), r2(7));
      }, function(a5, s4) {
        var r2, e, o3 = a5.exports = {};
        function d4() {
          throw new Error("setTimeout has not been defined");
        }
        function v5() {
          throw new Error("clearTimeout has not been defined");
        }
        function l3(u2) {
          if (r2 === setTimeout) return setTimeout(u2, 0);
          if ((r2 === d4 || !r2) && setTimeout) return r2 = setTimeout, setTimeout(u2, 0);
          try {
            return r2(u2, 0);
          } catch {
            try {
              return r2.call(null, u2, 0);
            } catch {
              return r2.call(this, u2, 0);
            }
          }
        }
        (function() {
          try {
            r2 = typeof setTimeout == "function" ? setTimeout : d4;
          } catch {
            r2 = d4;
          }
          try {
            e = typeof clearTimeout == "function" ? clearTimeout : v5;
          } catch {
            e = v5;
          }
        })();
        var f3, p3 = [], y5 = false, w5 = -1;
        function b5() {
          y5 && f3 && (y5 = false, f3.length ? p3 = f3.concat(p3) : w5 = -1, p3.length && t());
        }
        function t() {
          if (!y5) {
            var u2 = l3(b5);
            y5 = true;
            for (var g5 = p3.length; g5; ) {
              for (f3 = p3, p3 = []; ++w5 < g5; ) f3 && f3[w5].run();
              w5 = -1, g5 = p3.length;
            }
            f3 = null, y5 = false, function(m5) {
              if (e === clearTimeout) return clearTimeout(m5);
              if ((e === v5 || !e) && clearTimeout) return e = clearTimeout, clearTimeout(m5);
              try {
                e(m5);
              } catch {
                try {
                  return e.call(null, m5);
                } catch {
                  return e.call(this, m5);
                }
              }
            }(u2);
          }
        }
        function n2(u2, g5) {
          this.fun = u2, this.array = g5;
        }
        function c5() {
        }
        o3.nextTick = function(u2) {
          var g5 = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var m5 = 1; m5 < arguments.length; m5++) g5[m5 - 1] = arguments[m5];
          p3.push(new n2(u2, g5)), p3.length !== 1 || y5 || l3(t);
        }, n2.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, o3.title = "browser", o3.browser = true, o3.env = {}, o3.argv = [], o3.version = "", o3.versions = {}, o3.on = c5, o3.addListener = c5, o3.once = c5, o3.off = c5, o3.removeListener = c5, o3.removeAllListeners = c5, o3.emit = c5, o3.prependListener = c5, o3.prependOnceListener = c5, o3.listeners = function(u2) {
          return [];
        }, o3.binding = function(u2) {
          throw new Error("process.binding is not supported");
        }, o3.cwd = function() {
          return "/";
        }, o3.chdir = function(u2) {
          throw new Error("process.chdir is not supported");
        }, o3.umask = function() {
          return 0;
        };
      }, function(a5, s4, r2) {
        function e(d4, v5) {
          for (var l3 = 0; l3 < v5.length; l3++) {
            var f3 = v5[l3];
            f3.enumerable = f3.enumerable || false, f3.configurable = true, "value" in f3 && (f3.writable = true), Object.defineProperty(d4, f3.key, f3);
          }
        }
        var o3 = r2(9);
        a5.exports = function() {
          function d4() {
            (function(p3, y5) {
              if (!(p3 instanceof y5)) throw new TypeError("Cannot call a class as a function");
            })(this, d4);
          }
          var v5, l3, f3;
          return v5 = d4, f3 = [{ key: "urlEncode", value: function(p3) {
            return o3(p3);
          } }, { key: "jsonEncode", value: function(p3) {
            return JSON.stringify(p3);
          } }, { key: "formEncode", value: function(p3) {
            if (this.isFormData(p3)) return p3;
            if (this.isFormElement(p3)) return new FormData(p3);
            if (this.isObject(p3)) {
              var y5 = new FormData();
              return Object.keys(p3).forEach(function(w5) {
                var b5 = p3[w5];
                y5.append(w5, b5);
              }), y5;
            }
            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          } }, { key: "isObject", value: function(p3) {
            return Object.prototype.toString.call(p3) === "[object Object]";
          } }, { key: "isFormData", value: function(p3) {
            return p3 instanceof FormData;
          } }, { key: "isFormElement", value: function(p3) {
            return p3 instanceof HTMLFormElement;
          } }, { key: "selectFiles", value: function() {
            var p3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return new Promise(function(y5, w5) {
              var b5 = document.createElement("INPUT");
              b5.type = "file", p3.multiple && b5.setAttribute("multiple", "multiple"), p3.accept && b5.setAttribute("accept", p3.accept), b5.style.display = "none", document.body.appendChild(b5), b5.addEventListener("change", function(t) {
                var n2 = t.target.files;
                y5(n2), document.body.removeChild(b5);
              }, false), b5.click();
            });
          } }, { key: "parseHeaders", value: function(p3) {
            var y5 = p3.trim().split(/[\r\n]+/), w5 = {};
            return y5.forEach(function(b5) {
              var t = b5.split(": "), n2 = t.shift(), c5 = t.join(": ");
              n2 && (w5[n2] = c5);
            }), w5;
          } }], (l3 = null) && e(v5.prototype, l3), f3 && e(v5, f3), d4;
        }();
      }, function(a5, s4) {
        var r2 = function(o3) {
          return encodeURIComponent(o3).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
        }, e = function(o3, d4, v5, l3) {
          return d4 = d4 || null, v5 = v5 || "&", l3 = l3 || null, o3 ? function(f3) {
            for (var p3 = new Array(), y5 = 0; y5 < f3.length; y5++) f3[y5] && p3.push(f3[y5]);
            return p3;
          }(Object.keys(o3).map(function(f3) {
            var p3, y5, w5 = f3;
            if (l3 && (w5 = l3 + "[" + w5 + "]"), typeof o3[f3] == "object" && o3[f3] !== null) p3 = e(o3[f3], null, v5, w5);
            else {
              d4 && (y5 = w5, w5 = !isNaN(parseFloat(y5)) && isFinite(y5) ? d4 + Number(w5) : w5);
              var b5 = o3[f3];
              b5 = (b5 = (b5 = (b5 = b5 === true ? "1" : b5) === false ? "0" : b5) === 0 ? "0" : b5) || "", p3 = r2(w5) + "=" + r2(b5);
            }
            return p3;
          })).join(v5).replace(/[!'()*]/g, "") : "";
        };
        a5.exports = e;
      }]);
    });
  })(H5);
  var q4 = H5.exports;
  var _2 = /* @__PURE__ */ D4(q4);
  function O6(C5) {
    return C5 !== void 0 && typeof C5.then == "function";
  }
  var A5 = class {
    /**
     * @param params - uploader module params
     * @param params.config - image tool config
     * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
     * @param params.onError - callback for uploading errors
     */
    constructor({ config: i2, onUpload: a5, onError: s4 }) {
      this.config = i2, this.onUpload = a5, this.onError = s4;
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.transport()
     * @param onPreview - callback fired when preview is ready
     */
    uploadSelectedFile({ onPreview: i2 }) {
      const a5 = function(r2) {
        const e = new FileReader();
        e.readAsDataURL(r2), e.onload = (o3) => {
          i2(o3.target.result);
        };
      };
      let s4;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
        const r2 = this.config.uploader.uploadByFile;
        s4 = _2.selectFiles({ accept: this.config.types ?? "image/*" }).then((e) => {
          a5(e[0]);
          const o3 = r2(e[0]);
          return O6(o3) || console.warn("Custom uploader method uploadByFile should return a Promise"), o3;
        });
      } else
        s4 = _2.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types ?? "image/*",
          headers: this.config.additionalRequestHeaders,
          beforeSend: (r2) => {
            a5(r2[0]);
          },
          fieldName: this.config.field ?? "image"
        }).then((r2) => r2.body);
      s4.then((r2) => {
        this.onUpload(r2);
      }).catch((r2) => {
        this.onError(r2);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param url - image source url
     */
    uploadByUrl(i2) {
      let a5;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (a5 = this.config.uploader.uploadByUrl(i2), O6(a5) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : a5 = _2.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: i2
        }, this.config.additionalRequestData),
        type: _2.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s4) => s4.body), a5.then((s4) => {
        this.onUpload(s4);
      }).catch((s4) => {
        this.onError(s4);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param file - file pasted by drag-n-drop
     * @param onPreview - file pasted by drag-n-drop
     */
    uploadByFile(i2, { onPreview: a5 }) {
      const s4 = new FileReader();
      s4.readAsDataURL(i2), s4.onload = (e) => {
        a5(e.target.result);
      };
      let r2;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
        r2 = this.config.uploader.uploadByFile(i2), O6(r2) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        const e = new FormData();
        e.append(this.config.field ?? "image", i2), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o3, d4]) => {
          e.append(o3, d4);
        }), r2 = _2.post({
          url: this.config.endpoints.byFile,
          data: e,
          type: _2.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((o3) => o3.body);
      }
      r2.then((e) => {
        this.onUpload(e);
      }).catch((e) => {
        this.onError(e);
      });
    }
  };
  var P4 = class _P {
    /**
     * @param tool - tool properties got from editor.js
     * @param tool.data - previously saved data
     * @param tool.config - user config for Tool
     * @param tool.api - Editor.js API
     * @param tool.readOnly - read-only mode flag
     * @param tool.block - current Block API
     */
    constructor({ data: i2, config: a5, api: s4, readOnly: r2, block: e }) {
      this.api = s4, this.block = e, this.config = {
        endpoints: a5.endpoints,
        additionalRequestData: a5.additionalRequestData,
        additionalRequestHeaders: a5.additionalRequestHeaders,
        field: a5.field,
        types: a5.types,
        captionPlaceholder: this.api.i18n.t(a5.captionPlaceholder ?? "Caption"),
        buttonContent: a5.buttonContent,
        uploader: a5.uploader,
        actions: a5.actions,
        features: a5.features || {}
      }, this.uploader = new A5({
        config: this.config,
        onUpload: (o3) => this.onUpload(o3),
        onError: (o3) => this.uploadingFailed(o3)
      }), this.ui = new U4({
        api: s4,
        config: this.config,
        onSelectFile: () => {
          this.uploader.uploadSelectedFile({
            onPreview: (o3) => {
              this.ui.showPreloader(o3);
            }
          });
        },
        readOnly: r2
      }), this._data = {
        caption: "",
        withBorder: false,
        withBackground: false,
        stretched: false,
        file: {
          url: ""
        }
      }, this.data = i2;
    }
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox() {
      return {
        icon: L5,
        title: "Image"
      };
    }
    /**
     * Available image tools
     */
    static get tunes() {
      return [
        {
          name: "withBorder",
          icon: I5,
          title: "With border",
          toggle: true
        },
        {
          name: "stretched",
          icon: x4,
          title: "Stretch image",
          toggle: true
        },
        {
          name: "withBackground",
          icon: R6,
          title: "With background",
          toggle: true
        }
      ];
    }
    /**
     * Renders Block content
     */
    render() {
      var i2, a5, s4;
      return (((i2 = this.config.features) == null ? void 0 : i2.caption) === true || ((a5 = this.config.features) == null ? void 0 : a5.caption) === void 0 || ((s4 = this.config.features) == null ? void 0 : s4.caption) === "optional" && this.data.caption) && this.ui.applyTune("caption", true), this.ui.render(this.data);
    }
    /**
     * Validate data: check if Image exists
     * @param savedData — data received after saving
     * @returns false if saved data is not correct, otherwise true
     */
    validate(i2) {
      return !!i2.file.url;
    }
    /**
     * Return Block data
     */
    save() {
      const i2 = this.ui.nodes.caption;
      return this._data.caption = i2.innerHTML, this.data;
    }
    /**
     * Returns configuration for block tunes: add background, add border, stretch image
     * @returns TunesMenuConfig
     */
    renderSettings() {
      var r2;
      const i2 = _P.tunes.concat(this.config.actions || []), a5 = {
        border: "withBorder",
        background: "withBackground",
        stretch: "stretched",
        caption: "caption"
      };
      return ((r2 = this.config.features) == null ? void 0 : r2.caption) === "optional" && i2.push({
        name: "caption",
        icon: B4,
        title: "With caption",
        toggle: true
      }), i2.filter((e) => {
        var d4, v5;
        const o3 = Object.keys(a5).find((l3) => a5[l3] === e.name);
        return o3 === "caption" ? ((d4 = this.config.features) == null ? void 0 : d4.caption) !== false : o3 == null || ((v5 = this.config.features) == null ? void 0 : v5[o3]) !== false;
      }).map((e) => ({
        icon: e.icon,
        label: this.api.i18n.t(e.title),
        name: e.name,
        toggle: e.toggle,
        isActive: this.data[e.name],
        onActivate: () => {
          if (typeof e.action == "function") {
            e.action(e.name);
            return;
          }
          this.tuneToggled(e.name);
        }
      }));
    }
    /**
     * Fires after clicks on the Toolbox Image Icon
     * Initiates click on the Select File button
     */
    appendCallback() {
      this.ui.nodes.fileButton.click();
    }
    /**
     * Specify paste substitutes
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */
    static get pasteConfig() {
      return {
        /**
         * Paste HTML into Editor
         */
        tags: [
          {
            img: { src: true }
          }
        ],
        /**
         * Paste URL of image into the Editor
         */
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
        },
        /**
         * Drag n drop file from into the Editor
         */
        files: {
          mimeTypes: ["image/*"]
        }
      };
    }
    /**
     * Specify paste handlers
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     */
    async onPaste(i2) {
      switch (i2.type) {
        case "tag": {
          const a5 = i2.detail.data;
          if (/^blob:/.test(a5.src)) {
            const r2 = await (await fetch(a5.src)).blob();
            this.uploadFile(r2);
            break;
          }
          this.uploadUrl(a5.src);
          break;
        }
        case "pattern": {
          const a5 = i2.detail.data;
          this.uploadUrl(a5);
          break;
        }
        case "file": {
          const a5 = i2.detail.file;
          this.uploadFile(a5);
          break;
        }
      }
    }
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */
    /**
     * Stores all Tool's data
     * @param data - data in Image Tool format
     */
    set data(i2) {
      this.image = i2.file, this._data.caption = i2.caption || "", this.ui.fillCaption(this._data.caption), _P.tunes.forEach(({ name: a5 }) => {
        const s4 = typeof i2[a5] < "u" ? i2[a5] === true || i2[a5] === "true" : false;
        this.setTune(a5, s4);
      });
    }
    /**
     * Return Tool data
     */
    get data() {
      return this._data;
    }
    /**
     * Set new image file
     * @param file - uploaded file data
     */
    set image(i2) {
      this._data.file = i2 || { url: "" }, i2 && i2.url && this.ui.fillImage(i2.url);
    }
    /**
     * File uploading callback
     * @param response - uploading server response
     */
    onUpload(i2) {
      i2.success && i2.file ? this.image = i2.file : this.uploadingFailed("incorrect response: " + JSON.stringify(i2));
    }
    /**
     * Handle uploader errors
     * @param errorText - uploading error info
     */
    uploadingFailed(i2) {
      console.log("Image Tool: uploading failed because of", i2), this.api.notifier.show({
        message: this.api.i18n.t("Couldn\u2019t upload image. Please try another."),
        style: "error"
      }), this.ui.hidePreloader();
    }
    /**
     * Callback fired when Block Tune is activated
     * @param tuneName - tune that has been clicked
     */
    tuneToggled(i2) {
      this.setTune(i2, !this._data[i2]), i2 === "caption" && !this._data[i2] && (this._data.caption = "", this.ui.fillCaption(""));
    }
    /**
     * Set one tune
     * @param tuneName - {@link Tunes.tunes}
     * @param value - tune state
     */
    setTune(i2, a5) {
      this._data[i2] = a5, this.ui.applyTune(i2, a5), i2 === "stretched" && Promise.resolve().then(() => {
        this.block.stretched = a5;
      }).catch((s4) => {
        console.error(s4);
      });
    }
    /**
     * Show preloader and upload image file
     * @param file - file that is currently uploading (from paste)
     */
    uploadFile(i2) {
      this.uploader.uploadByFile(i2, {
        onPreview: (a5) => {
          this.ui.showPreloader(a5);
        }
      });
    }
    /**
     * Show preloader and upload image by target url
     * @param url - url pasted
     */
    uploadUrl(i2) {
      this.ui.showPreloader(i2), this.uploader.uploadByUrl(i2);
    }
  };

  // node_modules/@editorjs/warning/dist/warning.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(`.cdx-warning{position:relative}@media all and (min-width: 736px){.cdx-warning{padding-left:36px}}.cdx-warning [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-warning [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{content:"";background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");width:24px;height:24px;background-size:24px 24px;position:absolute;margin-top:8px;left:0}@media all and (max-width: 735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}`)), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var l2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
  var i = class _i2 {
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Toolbox settings
     *
     * @public
     * @returns {ToolboxConfig} An object containing Tool's icon and title.
     */
    static get toolbox() {
      return {
        icon: l2,
        title: "Warning"
      };
    }
    /**
     * Allow to press Enter inside the Warning
     *
     * @public
     * @returns {boolean}
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Default placeholder for warning title
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_TITLE_PLACEHOLDER() {
      return "Title";
    }
    /**
     * Default placeholder for warning message
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_MESSAGE_PLACEHOLDER() {
      return "Message";
    }
    /**
     * Warning Tool`s styles
     *
     * @returns {WarningCSS} An object containing Tool`s CSS classnames.
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-warning",
        title: "cdx-warning__title",
        input: this.api.styles.input,
        message: "cdx-warning__message"
      };
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params — constructor params
     * @param {WarningData} params.data — previously saved data
     * @param {WarningConfig} params.config — user config for Tool
     * @param {API} params.api - Editor.js API
     * @param {boolean} params.readOnly - read-only mode flag
     */
    constructor({ data: e, config: t, api: s4, readOnly: r2 }) {
      this.api = s4, this.readOnly = r2, this.titlePlaceholder = (t == null ? void 0 : t.titlePlaceholder) || _i2.DEFAULT_TITLE_PLACEHOLDER, this.messagePlaceholder = (t == null ? void 0 : t.messagePlaceholder) || _i2.DEFAULT_MESSAGE_PLACEHOLDER, this.data = {
        title: e.title || "",
        message: e.message || ""
      };
    }
    /**
     * Create Warning Tool container with inputs
     *
     * @returns {Element} Html element of Warning Tool.
     */
    render() {
      const e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("div", [this.CSS.input, this.CSS.title], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.title
      }), s4 = this._make("div", [this.CSS.input, this.CSS.message], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.message
      });
      return t.dataset.placeholder = this.titlePlaceholder, s4.dataset.placeholder = this.messagePlaceholder, e.appendChild(t), e.appendChild(s4), e;
    }
    /**
     * Extract Warning data from Warning Tool element
     *
     * @param {HTMLDivElement} warningElement - element to save
     * @returns {WarningData} Warning Tool`s data.
     */
    save(e) {
      const t = e.querySelector(`.${this.CSS.title}`), s4 = e.querySelector(`.${this.CSS.message}`);
      return Object.assign(this.data, {
        title: (t == null ? void 0 : t.innerHTML) ?? "",
        message: (s4 == null ? void 0 : s4.innerHTML) ?? ""
      });
    }
    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {Array|string} classNames  - list or name of CSS classname(s)
     * @param  {object} attributes        - any attributes
     * @returns {Element} Html element of {tagName}.
     */
    _make(e, t = null, s4 = {}) {
      const r2 = document.createElement(e);
      Array.isArray(t) ? r2.classList.add(...t) : t && r2.classList.add(t);
      for (const a5 in s4)
        r2[a5] = s4[a5];
      return r2;
    }
    /**
     * Sanitizer config for Warning Tool saved data
     *
     */
    static get sanitize() {
      return {
        title: {},
        message: {}
      };
    }
  };

  // node_modules/@editorjs/raw/dist/raw.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")), document.head.appendChild(e);
      }
    } catch (o3) {
      console.error("vite-plugin-css-injected-by-js", o3);
    }
  })();
  var a4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';
  var s3 = class _s {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Should this tool be displayed at the Editor's Toolbox
     *
     * @returns {boolean}
     * @public
     */
    static get displayInToolbox() {
      return true;
    }
    /**
     * Allow to press Enter inside the RawTool textarea
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: a4,
        title: "Raw HTML"
      };
    }
    /**
     * @typedef {object} RawData — plugin saved data
     * @param {string} html - previously saved HTML code
     * @property
     */
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {RawData} data — previously saved HTML data
     * @param {object} config - user config for Tool
     * @param {object} api - CodeX Editor API
     * @param {boolean} readOnly - read-only mode flag
     */
    constructor({ data: t, config: e, api: r2, readOnly: i2 }) {
      this.api = r2, this.readOnly = i2, this.placeholder = r2.i18n.t(e.placeholder || _s.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-rawtool",
        textarea: "ce-rawtool__textarea"
      }, this.data = {
        html: t.html || ""
      }, this.textarea = null, this.resizeDebounce = null;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement} this.element - RawTool's wrapper
     * @public
     */
    render() {
      const t = document.createElement("div"), e = 100;
      return this.textarea = document.createElement("textarea"), t.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = true : this.textarea.addEventListener("input", () => {
        this.onInput();
      }), t.appendChild(this.textarea), setTimeout(() => {
        this.resize();
      }, e), t;
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
     * @returns {RawData} - raw HTML code
     * @public
     */
    save(t) {
      return {
        html: t.querySelector("textarea").value
      };
    }
    /**
     * Default placeholder for RawTool's textarea
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_PLACEHOLDER() {
      return "Enter HTML code";
    }
    /**
     * Automatic sanitize config
     */
    static get sanitize() {
      return {
        html: true
        // Allow HTML tags
      };
    }
    /**
     * Textarea change event
     *
     * @returns {void}
     */
    onInput() {
      this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(() => {
        this.resize();
      }, 200);
    }
    /**
     * Resize textarea to fit whole height
     *
     * @returns {void}
     */
    resize() {
      this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
    }
  };

  // app/js/modules/editor.js
  var Editor = class {
    constructor(selector, contents) {
      let editorData = "";
      if (contents && contents.length > 0) {
        editorData = JSON.parse(contents);
      }
      this.editor = new Ts({
        // https://editorjs.io/configuration/#log-level
        logLevel: "ERROR",
        /** 
         * Id of Element that should contain the Editor 
         */
        holder: selector,
        /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */
        tools: {
          header: {
            class: v,
            inlineToolbar: ["link"]
          },
          list: {
            class: G2,
            inlineToolbar: true
          },
          code: d3,
          quote: {
            class: m2,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author"
            }
          },
          inlineCode: {
            class: s,
            shortcut: "CMD+SHIFT+M"
          },
          table: F4,
          embed: m4,
          delimiter: n,
          warning: i,
          raw: s3,
          linkTool: {
            class: I4,
            config: {
              endpoint: "/pages/fetchUrl"
              // Your backend endpoint for url data fetching,
            }
          },
          image: {
            class: P4,
            config: {
              endpoints: {
                byFile: "/uploadFile",
                // Your backend file uploader endpoint
                byUrl: "/pages/fetchUrl"
                // Your endpoint that provides uploading by Url
              }
            }
          }
        },
        autofocus: true,
        placeholder: "Let`s write an awesome story!",
        data: editorData,
        minHeight: 0
      });
    }
    save() {
      return this.editor.save();
    }
    destroy() {
      this.editor.destroy();
    }
  };

  // app/js/modules/modal.js
  var Modal = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("Modal::const");
      }
      this.Conf = {
        isOpenClass: "modal-is-open",
        openingClass: "modal-is-opening",
        closingClass: "modal-is-closing",
        animationDuration: 400
      };
      this.visibleModal = null;
      this.buttons = document.querySelectorAll("[data-target]");
      if (this.buttons.length > 0) {
        this.init();
      }
    }
    init() {
      this.buttons.forEach((button) => {
        let target = document.getElementById(button.dataset.target);
        this.initButton(button, target);
      });
    }
    initButton(button, target) {
      if (target == null) {
        let modal = this.newModal(button);
        this.addContent(modal, button.dataset.modal);
        this.addQuery(modal);
        modal.addEventListener("confirm", () => {
          let form = modal.querySelector("form");
          if (form) {
            form.submit();
          }
        });
      } else if (target.tagName == "DIALOG") {
        button.addEventListener("click", (event) => {
          if (button.ariaLabel == "Close") {
            let event2 = new Event("cancel");
            target.dispatchEvent(event2);
          }
          this.toggleModal(event, target);
        });
      } else if (target.tagName == "FORM") {
        let modal = this.newModal(button);
        this.addContent(modal, button.dataset.modal);
        this.addQuery(modal);
        modal.addEventListener("confirm", () => {
          target.submit();
        });
      }
    }
    toggleModal(event, target) {
      event.preventDefault();
      if (this.isModalOpen(target)) {
        this.closeModal(target);
      } else {
        this.openModal(target);
      }
    }
    isModalOpen(modal) {
      return !(!modal.hasAttribute("open") || "false" == modal.getAttribute("open"));
    }
    openModal(modal) {
      if (this.main.debug) {
        console.debug("Modal::open");
      }
      this.visibleModal = modal;
      let event = new CustomEvent("open", {
        detail: this.button
      });
      modal.dispatchEvent(event);
      modal.showModal();
    }
    closeModal(modal) {
      if (this.main.debug) {
        console.debug("Modal::close");
      }
      this.visibleModal = null;
      modal.close();
    }
    newModal(button, openOnclick = true) {
      let target = button.dataset.target;
      if (target == null) {
        target = button.name;
        button.dataset.target = target;
      }
      let modal = document.createElement("dialog");
      let modalInner = document.createElement("article");
      let modalMain = document.createElement("main");
      let closeButton = document.createElement("button");
      modal.id = target;
      closeButton.classList.add("close", "button", "outline", "contrast");
      closeButton.ariaLabel = "Close";
      closeButton.dataset.target = target;
      modalInner.appendChild(closeButton);
      modalInner.appendChild(modalMain);
      modal.appendChild(modalInner);
      document.body.appendChild(modal);
      this.initButton(closeButton, modal);
      if (openOnclick) {
        this.initButton(button, modal);
      }
      return modal;
    }
    addContent(modal, content) {
      modal.querySelector("main").innerHTML = content;
    }
    addQuery(modal, conf = { cancel: true, confirm: true }) {
      let modalInner = modal.querySelector("article");
      let container = document.createElement("footer");
      if (conf.cancel) {
        let cancel = document.createElement("button");
        cancel.innerText = "cancel";
        cancel.classList.add("contrast");
        container.appendChild(cancel);
        cancel.addEventListener("click", () => {
          let event = new Event("cancel");
          modal.dispatchEvent(event);
          this.closeModal(modal);
        });
      }
      if (conf.confirm) {
        let confirm = document.createElement("button");
        confirm.innerText = "confirm";
        container.appendChild(confirm);
        confirm.addEventListener("click", () => {
          let event = new Event("confirm");
          modal.dispatchEvent(event);
          this.closeModal(modal);
        });
      }
      modalInner.appendChild(container);
    }
    reset(modal) {
      this.addContent(modal, "");
    }
  };

  // app/js/modules/component.js
  var Component = class _Component {
    /**
     * 
     * @param {*} handler 
     * @param {*} element 
     */
    constructor(handler, element = null) {
      this.Handler = handler;
      if (typeof element == "object" && element.nodeType) {
        this.element = element;
      } else if (typeof element == "string") {
        this.element = this.createElement(element);
      }
      this.id = this.element.dataset.id;
      this.region = this.element.dataset.region;
      this.initialize();
    }
    /**
     * initialize
     * 
     */
    initialize() {
      this.content = this.element.querySelector("[name=content]");
      this.select = this.element.querySelector("[name=template_id]");
      this.deleteButton = this.element.querySelector("[name=delete]");
      this.toggleButton = this.element.querySelector("[name=toggle]");
      this.moveHandle = this.element.querySelector("[name=move]");
      this.moveUpButton = this.element.querySelector("[name=move_up]");
      this.moveDownButton = this.element.querySelector("[name=move_down]");
      this.slots = this.element.querySelectorAll('.layout-slot[value="' + this.id + '"]');
      this.deleteButton.addEventListener("click", () => this.delete());
      this.toggleButton.addEventListener("click", () => this.toggle());
      this.moveDownButton.addEventListener("click", () => this.move("down"));
      this.moveUpButton.addEventListener("click", () => this.move("up"));
      this.select.addEventListener("change", () => this.switch({
        template_id: this.select.value
      }));
      this.addEditor();
      this.addMedia();
      this.slots.forEach((slot) => {
        let newButton = slot.querySelector("[name=new-slot]");
        newButton.addEventListener("click", () => this.newSlot(slot));
      });
    }
    newSlot(container) {
      this.Handler.postFetch(this.Handler.Actions.new, {
        region: container.getAttribute("name"),
        parentId: this.id
      }).then((response) => response.text()).then((html) => {
        let component = new _Component(this.Handler, html);
        container.appendChild(component.element);
        this.Handler.components.push(component);
        this.Handler.setup(component.element);
      });
    }
    async save() {
      let data = await this.getContent();
      data.id = this.id;
      this.Handler.postFetch(this.Handler.Actions.save, data);
    }
    async switch(data) {
      data.id = this.id;
      data.templat_id = this.select.value;
      this.Handler.postFetch(this.Handler.Actions.switch, data).then((response) => response.text()).then((html) => {
        let elementNew = new _Component(this.Handler, html);
        this.element.parentElement.insertBefore(elementNew.element, this.element);
        this.destroy();
        this.Handler.setup(elementNew.element);
      });
    }
    async delete() {
      this.Handler.postFetch(this.Handler.Actions.delete, {
        id: this.id
      }).then((response) => response.text()).then((html) => {
        this.destroy();
      });
    }
    async move(direction) {
      let sibling;
      switch (direction) {
        case "up":
          sibling = this.element.previousElementSibling;
          if (sibling) {
            this.element.after(sibling);
          }
          break;
        case "down":
          sibling = this.element.nextElementSibling;
          if (sibling) {
            this.element.before(sibling);
          }
          break;
      }
      if (sibling) {
        this.Handler.postFetch(this.Handler.Actions.move, {
          id: this.id,
          direction
        }).then((response) => response.text()).then((html) => {
        });
      }
    }
    async toggle() {
      this.Handler.postFetch(this.Handler.Actions.toggle, {
        id: this.id
      }).then((response) => response.text()).then((html) => {
        let data = JSON.parse(html);
        this.element.classList.toggle("inactive");
      });
    }
    /**
     * createElement
     * 
     * @param {*} html 
     * @returns 
     */
    createElement(html) {
      let template = document.createElement("template");
      template.innerHTML = html.trim();
      let element = template.content.firstChild;
      return element;
    }
    /**
     * addEditor
     * 
     * @returns 
     */
    addEditor() {
      let editorElement = this.element.querySelector(".editor");
      if (!editorElement) {
        return;
      }
      if (this.checkContainer(editorElement)) {
        return;
      }
      this.editor = new Editor(editorElement, this.content.value);
    }
    /**
     * addMedia
     * 
     * @returns 
     */
    addMedia() {
      let mediaButton = this.element.querySelector("[name=mediaButton]");
      if (!mediaButton) {
        return;
      }
      if (this.checkContainer(mediaButton)) {
        return;
      }
      if (!this.Modal) {
        this.Modal = new Modal(this.Handler.main);
      }
      console.log("new Modal", this.id);
      let modal = this.Modal.newModal(mediaButton, false);
      this.Modal.addQuery(modal);
      mediaButton.addEventListener("click", () => {
        fetch(mediaButton.value).then((response) => response.text()).then((text) => {
          this.Modal.addContent(modal, text);
          this.Modal.openModal(modal);
        });
      });
      modal.addEventListener("confirm", (e) => {
        let selected = modal.querySelector("input[type=radio]:checked");
        this.content.value = selected.value;
        let image = this.content.parentNode.querySelector("img");
        console.log(selected.dataset.src);
        image.src = selected.dataset.src;
      });
      modal.addEventListener("close", (e) => {
        this.Modal.reset(modal);
      });
    }
    checkContainer(nodeElement) {
      let parentElement = nodeElement.closest(".layout-element");
      return this.element.dataset.id != parentElement.dataset.id;
    }
    /**
     * get
     * 
     * @returns 
     */
    async getContent() {
      let data = {
        id: this.id
      };
      if (this.editor) {
        let editorData = await this.editor.save();
        this.content.value = JSON.stringify(editorData);
        this.content.innerHTML = this.content.value;
      }
      data.content = this.content ? this.content.value : null;
      return data;
    }
    /**
     * destroy
     */
    destroy() {
      let index = this.Handler.components.indexOf(this);
      if (index > -1) {
        this.Handler.components.splice(index, 1);
      }
      if (this.editor) {
        this.editor.destroy();
      }
      this.element.remove();
      delete this;
    }
  };

  // app/js/modules/componentsHandler.js
  var ComponentsHandler = class {
    /**
     * 
     * @param {*} main 
     */
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("LayoutComponents::const");
      }
      this.Config = {
        newButtonSelector: "button[name=new-component]",
        layoutContainerSelector: ".layout-container",
        componentSelector: ".layout-element",
        saveButton: ".layout-button[name=save]"
      };
      this.Actions = {
        new: "/pages/new/",
        save: "/pages/save_page/",
        switch: "/pages/switch/",
        delete: "/pages/remove/",
        toggle: "/pages/toggle/",
        move: "/pages/move/"
      };
      this.containers = {};
      this.components = [];
      let layoutContainers = document.querySelector(this.Config.layoutContainerSelector);
      if (layoutContainers) {
        this.saveButton = document.querySelector(this.Config.saveButton);
        this.saveButton.addEventListener("click", () => this.save());
        document.addEventListener("keydown", (e) => {
          if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            this.save();
            return false;
          }
        });
        this.setup(document);
      }
    }
    /**
     * setup
     */
    setup(parentNode) {
      this.pageId = this.main.getPageId();
      this.newButtons = parentNode.querySelectorAll(this.Config.newButtonSelector);
      this.componentElements = parentNode.querySelectorAll(this.Config.componentSelector);
      this.layoutContainers = parentNode.querySelectorAll(this.Config.layoutContainerSelector);
      this.layoutContainers.forEach((container) => {
        this.containers[container.getAttribute("name")] = container;
      });
      this.newButtons.forEach((newButton) => {
        newButton.addEventListener("click", () => {
          this.newComponent(newButton.value);
        });
      });
      this.componentElements.forEach((nodeElement) => {
        let component = new Component(this, nodeElement);
        this.components.push(component);
      });
    }
    /**
     * postFetch
     * 
     * @param {*} url 
     * @param {*} data 
     * @returns 
     */
    async postFetch(url, data = "") {
      if (this.main.debug) {
        console.debug(data);
      }
      document.body.classList.add("layout-loading");
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": this.main.getToken(),
          "X-Requested-With": "XMLHttpRequest"
        },
        credentials: "same-origin",
        body: JSON.stringify(data)
      });
      document.body.classList.remove("layout-loading");
      return response;
    }
    /**
     * newComponent
     * 
     * @param {*} url 
     * @param {*} name 
     */
    newComponent(region) {
      let container = this.containers[region];
      this.postFetch(this.Actions.new, {
        region,
        parentId: container.getAttribute("value")
      }).then((response) => response.text()).then((html) => {
        let component = new Component(this, html);
        container.appendChild(component.element);
        this.components.push(component);
        this.setup(component.element);
      });
    }
    /**
     * updateContent
     * 
     * @param {*} action 
     * @param {*} url 
     * @param {*} element 
     * @param {*} data 
     */
    async updateContent(action, url, element, data = {}) {
      if (action == "save") {
        data = await element.getContent();
      }
      this.postFetch(url, data).then((response) => response.text()).then((html) => {
        if (action == "update") {
          let elementNew = new Element(this, html);
          element.container.insertBefore(elementNew.nodeElement, element.nodeElement);
        }
        if (action == "delete" || action == "update") {
          element.destroy();
        }
      });
    }
    /**
     * setPosition (Depricated)
     * 
     * @param {*} element 
     * @param {*} position 
     */
    setPosition(element, position) {
      let id = element.id.replace("element-", "");
      let url = "/rhino/contents/update/" + id;
      if (position < 0) {
        position = 0;
      }
      this.updateContent("move", url, element, { position });
    }
    async save() {
      let data = [];
      this.components.forEach((component) => {
        data.push(this.prepareContent(component));
      });
      Promise.all(data).then((result) => {
        this.postFetch(this.Actions.save, result);
      });
    }
    async prepareContent(component) {
      return await component.getContent();
    }
  };

  // app/js/layout.ts
  var Layout = class {
    constructor() {
      this.debug = true;
      window.addEventListener("load", (event) => {
        this.init();
      });
    }
    init() {
      this.Components = new ComponentsHandler(this);
    }
    getToken() {
      return document.querySelector('meta[name="csrfToken"]').getAttribute("content");
    }
    getPageId() {
      return document.querySelector('meta[name="pageId"]').getAttribute("content");
    }
  };
  new Layout();
})();
/*! Bundled license information:

@editorjs/editorjs/dist/editorjs.mjs:
  (*!
   * CodeX.Tooltips
   * 
   * @version 1.0.5
   * 
   * @licence MIT
   * @author CodeX <https://codex.so>
   * 
   * 
   *)
  (*!
   * Library for handling keyboard shortcuts
   * @copyright CodeX (https://codex.so)
   * @license MIT
   * @author CodeX (https://codex.so)
   * @version 1.2.0
   *)
  (**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)
  (**
   * Editor.js
   *
   * @license Apache-2.0
   * @see Editor.js <https://editorjs.io>
   * @author CodeX Team <https://codex.so>
   *)

@editorjs/header/dist/header.mjs:
  (**
   * Header block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   *)

@editorjs/code/dist/code.mjs:
  (**
   * CodeTool for Editor.js
   * @version 2.0.0
   * @license MIT
   *)

@editorjs/delimiter/dist/delimiter.mjs:
  (**
   * Delimiter Block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   * @version 2.0.0
   *)

@editorjs/image/dist/image.mjs:
  (**
   * Image Tool for the Editor.js
   * @author CodeX <team@codex.so>
   * @license MIT
   * @see {@link https://github.com/editor-js/image}
   *
   * To developers.
   * To simplify Tool structure, we split it to 4 parts:
   *  1) index.ts — main Tool's interface, public API and methods for working with data
   *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
   *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
   *
   * For debug purposes there is a testing server
   * that can save uploaded files and return a Response {@link UploadResponseFormat}
   *
   *       $ node dev/server.js
   *
   * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
   *
   * image: {
   *   class: ImageTool,
   *   config: {
   *     endpoints: {
   *       byFile: 'http://localhost:8008/uploadFile',
   *       byUrl: 'http://localhost:8008/fetchUrl',
   *     }
   *   },
   * },
   *)

@editorjs/raw/dist/raw.mjs:
  (**
   * Raw HTML Tool for CodeX Editor
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)
*/
//# sourceMappingURL=layout.js.map
