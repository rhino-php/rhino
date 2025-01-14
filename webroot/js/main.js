/**
 * @project       tusk
 * @author        carsten.coull@swu.de
 * @build         Fri, Jan 10, 2025 11:23 AM ET
 * @release       9cdc452c535dd3b2e8f88074575afd1a1e971e8c [main]
 * @copyright     Copyright (c) 2025, SWU Stadtwerke Ulm / Neu-Ulm GmbH
 *
 */

(() => {
  // app/js/modules/theme-switcher.js
  var ThemeSwitcher = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("ThemeSwitcher::const");
      }
      this.Config = {
        _scheme: "auto",
        menuTarget: "details[role='list']",
        buttonsTarget: "a[data-theme-switcher]",
        buttonAttribute: "data-theme-switcher",
        rootAttribute: "data-theme",
        localStorageKey: "picoPreferredColorScheme"
      };
      this.scheme = this.schemeFromLocalStorage;
    }
    // Init
    init() {
      this.initSwitchers();
    }
    // Get color scheme from local storage
    get schemeFromLocalStorage() {
      if (typeof window.localStorage !== "undefined") {
        if (window.localStorage.getItem(this.Config.localStorageKey) !== null) {
          return window.localStorage.getItem(this.Config.localStorageKey);
        }
      }
      return this.Config._scheme;
    }
    // Preferred color scheme
    get preferredColorScheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    // Init switchers
    initSwitchers() {
      this.buttons = document.querySelectorAll(this.Config.buttonsTarget);
      this.buttons.forEach((button) => {
        button.addEventListener(
          "click",
          (event) => {
            event.preventDefault();
            this.scheme = button.getAttribute(this.Config.buttonAttribute);
            document.querySelector(this.Config.menuTarget).removeAttribute("open");
          },
          false
        );
      });
    }
    // Set scheme
    set scheme(scheme) {
      if (scheme == "auto") {
        this.preferredColorScheme == "dark" ? this.Config._scheme = "dark" : this.Config._scheme = "light";
      } else if (scheme == "dark" || scheme == "light") {
        this.Config._scheme = scheme;
      }
      this.applyScheme();
      this.schemeToLocalStorage();
    }
    // Get scheme
    get scheme() {
      return this.Config._scheme;
    }
    // Apply scheme
    applyScheme() {
      document.querySelector("html").setAttribute(this.Config.rootAttribute, this.scheme);
    }
    // Store scheme to local storage
    schemeToLocalStorage() {
      if (typeof window.localStorage !== "undefined") {
        window.localStorage.setItem(this.Config.localStorageKey, this.scheme);
      }
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

  // app/js/modules/files.js
  var Files = class {
    constructor(main) {
      this.main = main;
      this.Modal = main.Modal;
      if (this.main.debug) {
        console.debug("Files::const");
      }
      this.buttons = document.querySelectorAll("[type=directory]");
      if (this.buttons.length > 0) {
        this.init();
      }
    }
    init() {
      this.buttons.forEach((button) => {
        let modal = this.Modal.newModal(button, false);
        this.Modal.addQuery(modal);
        let input = document.getElementById(button.name);
        let fileInput = document.querySelector("input[name=" + button.name + "_file]");
        if (fileInput) {
          fileInput.addEventListener("change", (event) => {
            let files = fileInput.files;
            let output = [];
            for (var i = 0; i < files.length; i++) {
              var filename = files[i].name.replace(/^.*[\\/]/, "");
              output.push(filename);
            }
            input.value = output.join(", ");
          });
        }
        modal.addEventListener("confirm", (e) => {
          let selected = modal.querySelector("input[type=radio]:checked");
          input.value = selected.value;
        });
        modal.addEventListener("close", (e) => {
          this.Modal.reset(modal);
        });
        button.addEventListener("click", (event) => {
          event.preventDefault();
          let url = button.value + "?";
          url += new URLSearchParams({
            modal: true,
            dir: button.dataset.dir,
            types: button.dataset.types
          });
          fetch(url, {
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }).then((response) => {
            return response.text();
          }).then((html) => {
            this.Modal.addContent(modal, html);
            this.Modal.openModal(modal);
          }).catch((err) => console.log(err));
        });
      });
    }
  };

  // app/js/modules/menu.js
  var Menu = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("Menu::const");
      }
      this.Config = {
        menuID: "main-menu",
        menuButtonID: "menu-button",
        bodyClass: "menu-is-open",
        menuClass: "menu--open"
      };
      this.menu = document.getElementById(this.Config.menuID);
      this.menuButton = document.getElementById(this.Config.menuButtonID);
      if (this.menu && this.menuButton) {
        this.setup();
      }
    }
    setup() {
      this.menuButton.addEventListener("click", () => this.toggle());
      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.close();
        }
      });
      this.main.onOutsideClick("#" + this.Config.menuID, (event) => {
        let status = this.menuButton.getAttribute("aria-expanded");
        if (status == "true") {
          this.close();
        }
      });
    }
    toggle() {
      let status = this.menuButton.getAttribute("aria-expanded");
      if (status == "true") {
        this.close();
      } else {
        this.open();
      }
    }
    close() {
      this.menu.classList.remove(this.Config.menuClass);
      document.body.classList.remove(this.Config.bodyClass);
      this.menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    }
    open() {
      setTimeout(() => {
        this.menu.classList.add(this.Config.menuClass);
        document.body.classList.add(this.Config.bodyClass);
        this.menuButton.setAttribute(
          "aria-expanded",
          "true"
        );
      }, 100);
    }
  };

  // app/js/modules/tabs.js
  var Tabs = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("Tabs::const");
      }
      this.Config = {
        tabGroupSelector: ".tab-group",
        tabButtonSelector: "[data-target]",
        tabButtonClass: "tab-button",
        activeTabClass: "tab--active",
        activeButtonClass: "tab-button--active"
      };
      this.tabGroups = document.querySelectorAll(this.Config.tabGroupSelector);
      if (this.tabGroups.length > 0) {
        this.setup();
      }
    }
    setup() {
      this.tabGroups.forEach((tabGroup) => {
        let tabButton = tabGroup.querySelector(this.Config.tabButtonSelector);
        this.open(tabButton);
      });
      const hash = location.hash.substring(1);
      if (hash) {
        let hashButton = document.querySelector(
          "." + this.Config.tabButtonClass + this.Config.tabButtonSelector.slice(0, -1) + "=" + hash + "]"
        );
        if (hashButton) {
          let hashGroup = hashButton.closest(this.Config.tabGroupSelector);
          this.toggle(hashButton, hashGroup);
          console.log("toggle");
        }
      }
    }
    init() {
      this.tabGroups.forEach((tabGroup) => {
        let tabButtons = tabGroup.querySelectorAll(this.Config.tabButtonSelector);
        tabButtons.forEach((tabButton) => {
          tabButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.toggle(tabButton, tabGroup);
          });
        });
      });
      window.addEventListener("layout-update", () => this.refresh());
    }
    toggle(tabButton, tabGroup) {
      this.close(tabGroup);
      this.open(tabButton);
    }
    close(group) {
      let activeButtons = group.querySelectorAll("." + this.Config.activeButtonClass);
      let activeTabs = group.querySelectorAll("." + this.Config.activeTabClass);
      activeButtons.forEach((active) => {
        active.classList.remove(this.Config.activeButtonClass);
      });
      activeTabs.forEach((active) => {
        active.classList.remove(this.Config.activeTabClass);
      });
    }
    open(button) {
      let target = document.getElementById(button.dataset.target);
      button.classList.add(this.Config.activeButtonClass);
      target.classList.add(this.Config.activeTabClass);
    }
    refresh() {
      this.tabGroups = document.querySelectorAll(this.Config.tabGroupSelector);
      this.tabGroups.forEach((tabGroup) => {
        let tabButton = tabGroup.querySelector(this.Config.tabButtonSelector);
        this.open(tabButton);
      });
    }
  };

  // app/js/modules/field-options.js
  var FieldOptions = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("FieldOptions::const");
      }
      this.Config = {
        tabGroupSelector: ".tab-group",
        tabButtonSelector: "[data-target]",
        tabButtonClass: "tab-button",
        activeTabClass: "tab--active",
        activeButtonClass: "tab-button--active"
      };
      this.container = document.getElementById("field-options");
      if (this.container) {
        this.setup();
      }
    }
    setup() {
      this.bench = document.getElementById("benched-options");
      this.typeSelector = document.getElementById("type");
      this.bench.innerHTML = this.container.innerHTML;
      this.container.innerHTML = "";
      this.change();
    }
    init() {
      if (!this.typeSelector) {
        return;
      }
      this.typeSelector.addEventListener("change", () => {
        this.reset();
        this.change();
      });
    }
    change() {
      let selected = this.typeSelector.value + "-options";
      let element = document.getElementById(selected);
      if (element) {
        this.container.appendChild(element);
      }
      this.main.layoutUpdate();
    }
    reset() {
      this.container.childNodes.forEach((node) => {
        this.bench.appendChild(node);
      });
    }
  };

  // app/js/modules/hooks-handler.js
  var HooksHandler = class {
    constructor(main) {
      this.main = main;
      if (this.main.debug) {
        console.debug("HooksHandler::const");
      }
      this.queue = {};
    }
    // (A2) ADD FUNCTION TO QUEUE
    // name : name of function to add hook to
    // fn : function to call
    add(name, fn) {
      if (!this.queue[name]) {
        this.queue[name] = [];
      }
      this.queue[name].push(fn);
    }
    // (A3) CALL A HOOK
    // name : name of function to add hook to
    // params : parameters
    call(name, ...params) {
      console.log(name);
      if (this.queue[name]) {
        this.queue[name].forEach((fn) => {
          fn(...params);
        });
        delete this.queue[name];
      }
    }
  };

  // app/js/main.ts
  var MAIN = class {
    /**
     * Constructor
    */
    constructor() {
      console.log("hello");
      this.debug = false;
      document.addEventListener("DOMContentLoaded", () => this.init());
      window.onload = () => this.main();
    }
    /**
     * init
     * Called on DOMContentLoaded, so a good place to setup things not dependend
     * on the page finished rendering
     */
    init() {
      if (this.debug) {
        console.debug("MAIN::init");
      }
      this._layoutUpdate = new CustomEvent("layout-update", {});
      this.Hooks = new HooksHandler(this);
      this.ThemeSwitcher = new ThemeSwitcher(this);
      this.FieldOptions = new FieldOptions(this);
      this.Tabs = new Tabs(this);
      document.body.classList.add("page-has-loaded");
      window.addEventListener("resize", () => this.throttle(this.resizeHandler), { passive: true });
      window.addEventListener("scroll", () => this.throttle(this.scrollHandler), { passive: true });
    }
    layoutUpdate() {
      window.dispatchEvent(this._layoutUpdate);
    }
    /**
     * Main method
     * Put main business logic here
     *
     * @return void
     */
    main() {
      this.pageInit();
      if (this.debug) {
        console.debug("MAIN::main");
      }
      this.ThemeSwitcher.init();
      this.FieldOptions.init();
      this.Tabs.init();
      this.Modal = new Modal(this);
      this.Menu = new Menu(this);
      this.Files = new Files(this);
      document.body.classList.add("page-has-rendered");
    }
    /**
     * pageInit
     * Called on window.load, i.e. when the page and all assets have been
     * loaded completely and the page has rendered
     *
     * @return void
     */
    pageInit() {
      if (this.debug) {
        console.debug("MAIN::pageInit");
      }
      this.header = document.querySelector("header");
      if (this.header) {
        let rect = this.header.getBoundingClientRect();
        this.headerBottom = rect.top + rect.height;
      }
    }
    /*
     * Debounced / throttled scroll handler. Put your scroll-related stuff here!
     * @return void
     */
    scrollHandler() {
      let y = window.scrollY;
      if (this.debug) {
        console.debug(`Scroll position: ${y}`);
      }
      document.body.classList.toggle("has-scrolled", y > 0);
      document.body.classList.toggle("has-scrolled-a-bit", y > 30);
      document.body.classList.toggle(
        "has-scrolled-past-header",
        y > this.headerBottom
      );
      document.body.classList.toggle(
        "has-scrolled-100vh",
        y > window.innerHeight
      );
      if (this.lastScrollPosition) {
        document.body.classList.toggle(
          "has-scrolled-up",
          y < this.lastScrollPosition
        );
        document.body.classList.toggle(
          "has-scrolled-down",
          y > this.lastScrollPosition
        );
      }
      this.lastScrollPosition = y;
    }
    /**
     * Debounced / throttled scroll handler. Put your resize-related stuff here!
     *
     * @return void
     */
    resizeHandler() {
      let width = window.innerWidth, height = window.innerHeight;
      if (this.debug) {
        console.debug(`Window has been resized to ${width}, ${height}`);
      }
      document.body.style.setProperty("--window-width", `${width}px`);
      document.body.style.setProperty("--window-height", `${height}px`);
    }
    /**
     * Throttler method
     *
     * @param callable: Handler to be called on throttled scroll event
     * @return void
     */
    throttle(handler) {
      this.ticking = false;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          handler.call(this);
          this.ticking = false;
        });
        this.ticking = true;
      }
    }
    /**
     * execute if click/interaktion is outside of the Selector
     *
     * @param selector: Element selector (e.g. class, id) to watch for
     * @param callback: function to execute if interaktion is outside of the Selector
     *
     * Example:
     * this.app.onOutsideClick('#main-menu', this.closeMenu);
     */
    onOutsideClick(selector, callback) {
      document.addEventListener("click", (event) => {
        var target = event.target.parentNode.closest(selector);
        if (target == null && document.querySelector(selector) != event.target) {
          callback(event, target);
        }
      });
    }
  };
  new MAIN();
})();
//# sourceMappingURL=main.js.map
