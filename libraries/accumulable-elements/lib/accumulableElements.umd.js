(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.accumulableElements = {}));
})(this, (function (exports) { 'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = globalThis,
    e$2 = t$1.ShadowRoot && (undefined === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    s$1 = Symbol(),
    o$3 = new WeakMap();
  let n$2 = class n {
    constructor(t, e, o) {
      if (this._$cssResult$ = true, o !== s$1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = e;
    }
    get styleSheet() {
      let t = this.o;
      const s = this.t;
      if (e$2 && undefined === t) {
        const e = undefined !== s && 1 === s.length;
        e && (t = o$3.get(s)), undefined === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$3.set(s, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$3 = t => new n$2("string" == typeof t ? t : t + "", undefined, s$1),
    i$3 = (t, ...e) => {
      const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + (t => {
        if (true === t._$cssResult$) return t.cssText;
        if ("number" == typeof t) return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s) + t[o + 1], t[0]);
      return new n$2(o, t, s$1);
    },
    S$1 = (s, o) => {
      if (e$2) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
        const o = document.createElement("style"),
          n = t$1.litNonce;
        undefined !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
      }
    },
    c$2 = e$2 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
      let e = "";
      for (const s of t.cssRules) e += s.cssText;
      return r$3(e);
    })(t) : t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const {
      is: i$2,
      defineProperty: e$1,
      getOwnPropertyDescriptor: r$2,
      getOwnPropertyNames: h$1,
      getOwnPropertySymbols: o$2,
      getPrototypeOf: n$1
    } = Object,
    a$1 = globalThis,
    c$1 = a$1.trustedTypes,
    l$1 = c$1 ? c$1.emptyScript : "",
    p$1 = a$1.reactiveElementPolyfillSupport,
    d$1 = (t, s) => t,
    u$1 = {
      toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, s) {
        let i = t;
        switch (s) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      }
    },
    f$1 = (t, s) => !i$2(t, s),
    y$2 = {
      attribute: true,
      type: String,
      converter: u$1,
      reflect: false,
      hasChanged: f$1
    };
  Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= new WeakMap();
  let b$1 = class b extends HTMLElement {
    static addInitializer(t) {
      this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t, s = y$2) {
      if (s.state && (s.attribute = false), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
        const i = Symbol(),
          r = this.getPropertyDescriptor(t, i, s);
        undefined !== r && e$1(this.prototype, t, r);
      }
    }
    static getPropertyDescriptor(t, s, i) {
      const {
        get: e,
        set: h
      } = r$2(this.prototype, t) ?? {
        get() {
          return this[s];
        },
        set(t) {
          this[s] = t;
        }
      };
      return {
        get() {
          return e?.call(this);
        },
        set(s) {
          const r = e?.call(this);
          h.call(this, s), this.requestUpdate(t, r, i);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? y$2;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      const t = n$1(this);
      t.finalize(), undefined !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t = this.properties,
          s = [...h$1(t), ...o$2(t)];
        for (const i of s) this.createProperty(i, t[i]);
      }
      const t = this[Symbol.metadata];
      if (null !== t) {
        const s = litPropertyMetadata.get(t);
        if (undefined !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
      }
      this._$Eh = new Map();
      for (const [t, s] of this.elementProperties) {
        const i = this._$Eu(t, s);
        undefined !== i && this._$Eh.set(i, t);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
      const i = [];
      if (Array.isArray(s)) {
        const e = new Set(s.flat(1 / 0).reverse());
        for (const s of e) i.unshift(c$2(s));
      } else undefined !== s && i.push(c$2(s));
      return i;
    }
    static _$Eu(t, s) {
      const i = s.attribute;
      return false === i ? undefined : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : undefined;
    }
    constructor() {
      super(), this._$Ep = undefined, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
    }
    addController(t) {
      (this._$EO ??= new Set()).add(t), undefined !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
      this._$EO?.delete(t);
    }
    _$E_() {
      const t = new Map(),
        s = this.constructor.elementProperties;
      for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(t => t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      this._$EO?.forEach(t => t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
    _$EC(t, s) {
      const i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (undefined !== e && true === i.reflect) {
        const r = (undefined !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
        this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
      }
    }
    _$AK(t, s) {
      const i = this.constructor,
        e = i._$Eh.get(t);
      if (undefined !== e && this._$Em !== e) {
        const t = i.getPropertyOptions(e),
          r = "function" == typeof t.converter ? {
            fromAttribute: t.converter
          } : undefined !== t.converter?.fromAttribute ? t.converter : u$1;
        this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
      }
    }
    requestUpdate(t, s, i) {
      if (undefined !== t) {
        if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$1)(this[t], s)) return;
        this.P(t, s, i);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
      this._$AL.has(t) || this._$AL.set(t, s), true === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return null != t && (await t), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t, s] of this._$Ep) this[t] = s;
          this._$Ep = undefined;
        }
        const t = this.constructor.elementProperties;
        if (t.size > 0) for (const [s, i] of t) true !== i.wrapped || this._$AL.has(s) || undefined === this[s] || this.P(s, this[s], i);
      }
      let t = false;
      const s = this._$AL;
      try {
        t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$EU();
      } catch (s) {
        throw t = false, this._$EU(), s;
      }
      t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
      this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      this._$Ej &&= this._$Ej.forEach(t => this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
  };
  b$1.elementStyles = [], b$1.shadowRootOptions = {
    mode: "open"
  }, b$1[d$1("elementProperties")] = new Map(), b$1[d$1("finalized")] = new Map(), p$1?.({
    ReactiveElement: b$1
  }), (a$1.reactiveElementVersions ??= []).push("2.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = globalThis,
    i$1 = t.trustedTypes,
    s = i$1 ? i$1.createPolicy("lit-html", {
      createHTML: t => t
    }) : undefined,
    e = "$lit$",
    h = `lit$${Math.random().toFixed(9).slice(2)}$`,
    o$1 = "?" + h,
    n = `<${o$1}>`,
    r$1 = document,
    l = () => r$1.createComment(""),
    c = t => null === t || "object" != typeof t && "function" != typeof t,
    a = Array.isArray,
    u = t => a(t) || "function" == typeof t?.[Symbol.iterator],
    d = "[ \t\n\f\r]",
    f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _ = />/g,
    m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
    p = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y$1 = t => (i, ...s) => ({
      _$litType$: t,
      strings: i,
      values: s
    }),
    x$1 = y$1(1),
    b = y$1(2),
    T = Symbol.for("lit-noChange"),
    E = Symbol.for("lit-nothing"),
    A = new WeakMap(),
    C = r$1.createTreeWalker(r$1, 129);
  function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return undefined !== s ? s.createHTML(i) : i;
  }
  const V = (t, i) => {
    const s = t.length - 1,
      o = [];
    let r,
      l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "",
      c = f;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let a,
        u,
        d = -1,
        y = 0;
      for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : undefined !== u[1] ? c = _ : undefined !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : undefined !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : undefined === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = undefined === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = undefined);
      const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
      l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), o];
  };
  class N {
    constructor({
      strings: t,
      _$litType$: s
    }, n) {
      let r;
      this.parts = [];
      let c = 0,
        a = 0;
      const u = t.length - 1,
        d = this.parts,
        [f, v] = V(t, s);
      if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
        const t = this.el.content.firstChild;
        t.replaceWith(...t.childNodes);
      }
      for (; null !== (r = C.nextNode()) && d.length < u;) {
        if (1 === r.nodeType) {
          if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(e)) {
            const i = v[a++],
              s = r.getAttribute(t).split(h),
              e = /([.?@])?(.*)/.exec(i);
            d.push({
              type: 1,
              index: c,
              name: e[2],
              strings: s,
              ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
            }), r.removeAttribute(t);
          } else t.startsWith(h) && (d.push({
            type: 6,
            index: c
          }), r.removeAttribute(t));
          if ($.test(r.tagName)) {
            const t = r.textContent.split(h),
              s = t.length - 1;
            if (s > 0) {
              r.textContent = i$1 ? i$1.emptyScript : "";
              for (let i = 0; i < s; i++) r.append(t[i], l()), C.nextNode(), d.push({
                type: 2,
                index: ++c
              });
              r.append(t[s], l());
            }
          }
        } else if (8 === r.nodeType) if (r.data === o$1) d.push({
          type: 2,
          index: c
        });else {
          let t = -1;
          for (; -1 !== (t = r.data.indexOf(h, t + 1));) d.push({
            type: 7,
            index: c
          }), t += h.length - 1;
        }
        c++;
      }
    }
    static createElement(t, i) {
      const s = r$1.createElement("template");
      return s.innerHTML = t, s;
    }
  }
  function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = undefined !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? undefined : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(false), undefined === o ? h = undefined : (h = new o(t), h._$AT(t, s, e)), undefined !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), undefined !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
  }
  class M {
    constructor(t, i) {
      this._$AV = [], this._$AN = undefined, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const {
          el: {
            content: i
          },
          parts: s
        } = this._$AD,
        e = (t?.creationScope ?? r$1).importNode(i, true);
      C.currentNode = e;
      let h = C.nextNode(),
        o = 0,
        n = 0,
        l = s[0];
      for (; undefined !== l;) {
        if (o === l.index) {
          let i;
          2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
        }
        o !== l?.index && (h = C.nextNode(), o++);
      }
      return C.currentNode = r$1, e;
    }
    p(t) {
      let i = 0;
      for (const s of this._$AV) undefined !== s && (undefined !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e) {
      this.type = 2, this._$AH = E, this._$AN = undefined, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? true;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const i = this._$AM;
      return undefined !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, i = this) {
      t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : undefined !== t._$litType$ ? this.$(t) : undefined !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$1.createTextNode(t)), this._$AH = t;
    }
    $(t) {
      const {
          values: i,
          _$litType$: s
        } = t,
        e = "number" == typeof s ? this._$AC(t) : (undefined === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
      if (this._$AH?._$AD === e) this._$AH.p(i);else {
        const t = new M(e, this),
          s = t.u(this.options);
        t.p(i), this.T(s), this._$AH = t;
      }
    }
    _$AC(t) {
      let i = A.get(t.strings);
      return undefined === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i = this._$AH;
      let s,
        e = 0;
      for (const h of t) e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
      for (this._$AP?.(false, true, i); t && t !== this._$AB;) {
        const i = t.nextSibling;
        t.remove(), t = i;
      }
    }
    setConnected(t) {
      undefined === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
  }
  class k {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, i, s, e, h) {
      this.type = 1, this._$AH = E, this._$AN = undefined, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
      const h = this.strings;
      let o = false;
      if (undefined === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);else {
        const e = t;
        let n, r;
        for (t = h[0], n = 0; n < h.length - 1; n++) r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
      }
      o && !e && this.j(t);
    }
    j(t) {
      t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
  }
  class H extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t) {
      this.element[this.name] = t === E ? undefined : t;
    }
  }
  class I extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== E);
    }
  }
  class L extends k {
    constructor(t, i, s, e, h) {
      super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
      if ((t = S(this, t, i, 0) ?? E) === T) return;
      const s = this._$AH,
        e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
        h = t !== E && (s === E || e);
      e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
  }
  class z {
    constructor(t, i, s) {
      this.element = t, this.type = 6, this._$AN = undefined, this._$AM = i, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      S(this, t);
    }
  }
  const j = t.litHtmlPolyfillSupport;
  j?.(N, R), (t.litHtmlVersions ??= []).push("3.2.1");
  const B = (t, i, s) => {
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (undefined === h) {
      const t = s?.renderBefore ?? null;
      e._$litPart$ = h = new R(i.insertBefore(l(), t), t, undefined, s ?? {});
    }
    return h._$AI(t), h;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  class r extends b$1 {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = undefined;
    }
    createRenderRoot() {
      const t = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
      const s = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = B(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  }
  r._$litElement$ = true, r["finalized"] = true, globalThis.litElementHydrateSupport?.({
    LitElement: r
  });
  const i = globalThis.litElementPolyfillSupport;
  i?.({
    LitElement: r
  });
  (globalThis.litElementVersions ??= []).push("4.1.1");

  function ascending$1(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }

  function bisector(f) {
    let compare1, compare2, delta;

    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
      compare1 = ascending$1;
      compare2 = (d, x) => ascending$1(f(d), x);
      delta = (d, x) => f(d) - x;
    } else {
      compare1 = f === ascending$1 || f === descending ? f : zero$1;
      compare2 = f;
      delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
      left,
      center,
      right
    };
  }
  function zero$1() {
    return 0;
  }

  function number$2(x) {
    return x === null ? NaN : +x;
  }

  const ascendingBisect = bisector(ascending$1);
  const bisectRight = ascendingBisect.right;
  bisector(number$2).center;

  const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);
  function tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start * inc);
      i2 = Math.round(stop * inc);
      if (i1 / inc < start) ++i1;
      if (i2 / inc > stop) --i2;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start / inc);
      i2 = Math.round(stop / inc);
      if (i1 * inc < start) ++i1;
      if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
    return [i1, i2, inc];
  }
  function ticks(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [start];
    const reverse = stop < start,
      [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1,
      ticks = new Array(n);
    if (reverse) {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
    } else {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
    }
    return ticks;
  }
  function tickIncrement(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return tickSpec(start, stop, count)[2];
  }
  function tickStep(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start,
      inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }

  function identity$3 (x) {
    return x;
  }

  var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon$1 = 1e-6;
  function translateX(x) {
    return "translate(" + x + ",0)";
  }
  function translateY(y) {
    return "translate(0," + y + ")";
  }
  function number$1(scale) {
    return d => +scale(d);
  }
  function center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return d => +scale(d) + offset;
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale) {
    var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;
    function axis(context) {
      var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$3 : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number$1)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");
      path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      tick = tick.merge(tickEnter);
      line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
      text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
      if (context !== selection) {
        path = path.transition(context);
        tick = tick.transition(context);
        line = line.transition(context);
        text = text.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon$1).attr("transform", function (d) {
          return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon$1).attr("transform", function (d) {
          var p = this.parentNode.__axis;
          return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
        });
      }
      tickExit.remove();
      path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
      tick.attr("opacity", 1).attr("transform", function (d) {
        return transform(position(d) + offset);
      });
      line.attr(x + "2", k * tickSizeInner);
      text.attr(x, k * spacing).text(format);
      selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
      selection.each(function () {
        this.__axis = position;
      });
    }
    axis.scale = function (_) {
      return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function () {
      return tickArguments = Array.from(arguments), axis;
    };
    axis.tickArguments = function (_) {
      return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function (_) {
      return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function (_) {
      return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function (_) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function (_) {
      return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function (_) {
      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function (_) {
      return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function (_) {
      return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
  }
  function axisRight(scale) {
    return axis(right, scale);
  }
  function axisBottom(scale) {
    return axis(bottom, scale);
  }
  function axisLeft(scale) {
    return axis(left, scale);
  }

  var noop = {
    value: () => {}
  };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
        i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: name
      };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function (typename, callback) {
      var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }
      return this;
    },
    copy: function () {
      var copy = {},
        _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function (type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function (type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };
  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }
  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({
      name: name,
      value: callback
    });
    return type;
  }

  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace (name) {
    var prefix = name += "",
      i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument,
        uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator (name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  function none() {}
  function selector (selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }

  function selection_select (select) {
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  }

  // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array$1(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  function empty() {
    return [];
  }
  function selectorAll (selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function () {
      return array$1(select.apply(this, arguments));
    };
  }
  function selection_selectAll (select) {
    if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection$1(subgroups, parents);
  }

  function matcher (selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;
  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selection_selectChild (match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }
  function selection_selectChildren (match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter (match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  }

  function sparse (update) {
    return new Array(update.length);
  }

  function selection_enter () {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function (child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function (selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function (selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  function constant$3 (x) {
    return function () {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function selection_data (value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
    if (typeof value !== "function") value = constant$3(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }
    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
  }

  function selection_exit () {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join (onenter, onupdate, onexit) {
    var enter = this.enter(),
      update = this,
      exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge (context) {
    var selection = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection$1(merges, this._parents);
  }

  function selection_order () {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  function selection_sort (compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection$1(sortgroups, this._parents).order();
  }
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call () {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes () {
    return Array.from(this);
  }

  function selection_node () {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  }

  function selection_size () {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  }

  function selection_empty () {
    return !this.node();
  }

  function selection_each (callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }

  function attrRemove$1(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS$1(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant$1(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS$1(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction$1(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
    };
  }
  function attrFunctionNS$1(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function selection_attr (name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
  }

  function defaultView (node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
    || node.document && node // node is a Window
    || node.defaultView; // node is a Document
  }

  function styleRemove$1(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant$1(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction$1(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
    };
  }
  function selection_style (name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];else this[name] = v;
    };
  }
  function selection_property (name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function (name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function (name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function (name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node),
      i = -1,
      n = names.length;
    while (++i < n) list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node),
      i = -1,
      n = names.length;
    while (++i < n) list.remove(names[i]);
  }
  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function selection_classed (name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()),
        i = -1,
        n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }
  function textConstant$1(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction$1(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function selection_text (value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function selection_html (value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function selection_raise () {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function selection_lower () {
    return this.each(lower);
  }

  function selection_append (name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }
  function selection_insert (name, before) {
    var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function selection_remove () {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_clone (deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
        i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {
        type: t,
        name: name
      };
    });
  }
  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on,
        o,
        listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o];else on.push(o);
    };
  }
  function selection_on (typename, value, options) {
    var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
      event = window.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function selection_dispatch (type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }

  function* selection_iterator () {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  var root = [null];
  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection$1.prototype = selection.prototype = {
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };

  function select (selector) {
    return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
  }

  var nextId = 0;
  function local() {
    return new Local();
  }
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  Local.prototype = local.prototype = {
    constructor: Local,
    get: function (node) {
      var id = this._;
      while (!(id in node)) if (!(node = node.parentNode)) return;
      return node[id];
    },
    set: function (node, value) {
      return node[this._] = value;
    },
    remove: function (node) {
      return this._ in node && delete node[this._];
    },
    toString: function () {
      return this._;
    }
  };

  function sourceEvent (event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }

  function pointer (event, node) {
    event = sourceEvent(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  // These are typically used in conjunction with noevent to ensure that we can
  // preventDefault on the event.
  const nonpassive = {
    passive: false
  };
  const nonpassivecapture = {
    capture: true,
    passive: false
  };
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function dragDisable (view) {
    var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent, nonpassivecapture);
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", noevent, nonpassivecapture);
    } else {
      root.__noselect = root.style.MozUserSelect;
      root.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection.on("click.drag", noevent, nonpassivecapture);
      setTimeout(function () {
        selection.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", null);
    } else {
      root.style.MozUserSelect = root.__noselect;
      delete root.__noselect;
    }
  }

  var constant$2 = x => () => x;

  function DragEvent(type, {
    sourceEvent,
    subject,
    target,
    identifier,
    active,
    x,
    y,
    dx,
    dy,
    dispatch
  }) {
    Object.defineProperties(this, {
      type: {
        value: type,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: sourceEvent,
        enumerable: true,
        configurable: true
      },
      subject: {
        value: subject,
        enumerable: true,
        configurable: true
      },
      target: {
        value: target,
        enumerable: true,
        configurable: true
      },
      identifier: {
        value: identifier,
        enumerable: true,
        configurable: true
      },
      active: {
        value: active,
        enumerable: true,
        configurable: true
      },
      x: {
        value: x,
        enumerable: true,
        configurable: true
      },
      y: {
        value: y,
        enumerable: true,
        configurable: true
      },
      dx: {
        value: dx,
        enumerable: true,
        configurable: true
      },
      dy: {
        value: dy,
        enumerable: true,
        configurable: true
      },
      _: {
        value: dispatch
      }
    });
  }
  DragEvent.prototype.on = function () {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // Ignore right-click, since that should open the context menu.
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d) {
    return d == null ? {
      x: event.x,
      y: event.y
    } : d;
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function drag () {
    var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;
    function drag(selection) {
      selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
      if (touchending || !filter.call(this, event, d)) return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
      dragDisable(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx,
          dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
      if (!filter.call(this, event, d)) return;
      var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length,
        i,
        gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent(event);
          gesture("drag", event, touches[i]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function () {
        touchending = null;
      }, 500); // Ghost clicks are delayed!
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }
    function beforestart(that, container, event, d, identifier, touch) {
      var dispatch = listeners.copy(),
        p = pointer(touch || event, container),
        dx,
        dy,
        s;
      if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return function gesture(type, event, touch) {
        var p0 = p,
          n;
        switch (type) {
          case "start":
            gestures[identifier] = gesture, n = active++;
            break;
          case "end":
            delete gestures[identifier], --active;
          // falls through
          case "drag":
            p = pointer(touch || event, container), n = active;
            break;
        }
        dispatch.call(type, that, new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }), d);
      };
    }
    drag.filter = function (_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag) : filter;
    };
    drag.container = function (_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag) : container;
    };
    drag.subject = function (_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag) : subject;
    };
    drag.touchable = function (_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag) : touchable;
    };
    drag.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };
    drag.clickDistance = function (_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
  }

  function define (constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };
  define(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
    : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
    : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
    : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
    : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  var constant$1 = x => () => x;

  function linear$2(a, d) {
    return function (t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
      return Math.pow(a + t * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
      return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear$2(a, d) : constant$1(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);
    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    rgb$1.gamma = rgbGamma;
    return rgb$1;
  })(1);

  function numberArray (a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
    return function (t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }
  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;
    for (i = 0; i < na; ++i) x[i] = interpolate$1(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];
    return function (t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date (a, b) {
    var d = new Date();
    return a = +a, b = +b, function (t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber (a, b) {
    return a = +a, b = +b, function (t) {
      return a * (1 - t) + b * t;
    };
  }

  function object (a, b) {
    var i = {},
      c = {},
      k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for (k in b) {
      if (k in a) {
        i[k] = interpolate$1(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function (t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function () {
      return b;
    };
  }
  function one(b) {
    return function (t) {
      return b(t) + "";
    };
  }
  function interpolateString (a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
      am,
      // current match in a
      bm,
      // current match in b
      bs,
      // string preceding current number in b, if any
      i = -1,
      // index in s
      s = [],
      // string constants and placeholders
      q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else {
        // interpolate non-matching numbers
        s[++i] = null;
        q.push({
          i: i,
          x: interpolateNumber(am, bm)
        });
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }

  function interpolate$1 (a, b) {
    var t = typeof b,
      c;
    return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
  }

  function interpolateRound (a, b) {
    return a = +a, b = +b, function (t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  var degrees = 180 / Math.PI;
  var identity$2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose (a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var svgNode;

  /* eslint-disable no-undef */
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity$2 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null) return identity$2;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
        q.push({
          i: s.push(pop(s) + "rotate(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({
          i: s.push(pop(s) + "skewX(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function (a, b) {
      var s = [],
        // string constants and placeholders
        q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function (t) {
        var i = -1,
          n = q.length,
          o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  var frame = 0,
    // is an animation frame pending?
    timeout$1 = 0,
    // is a timeout pending?
    interval$1 = 0,
    // are any timers active?
    pokeDelay = 1000,
    // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
      setTimeout(f, 17);
    };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function (callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function () {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead,
      e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now = clock.now(),
      delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }
  function nap() {
    var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval$1) interval$1 = clearInterval(interval$1);
    } else {
      if (!interval$1) clockLast = clock.now(), interval$1 = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout (callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  function interval (callback, delay, time) {
    var t = new Timer(),
      total = delay;
    t._restart = t.restart;
    t.restart = function (callback, delay, time) {
      delay = +delay, time = time == null ? now() : +time;
      t._restart(function tick(elapsed) {
        elapsed += total;
        t._restart(tick, total += delay, time);
        callback(elapsed);
      }, delay, time);
    };
    t.restart(callback, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule (node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index,
      // For context during callback.
      group: group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id, self) {
    var schedules = node.__transition,
      tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout(function () {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt (node, name) {
    var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty) delete node.__transition;
  }

  function selection_interrupt (name) {
    return this.each(function () {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
      var schedule = set(this, id),
        tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function () {
      var schedule = set(this, id),
        tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {
            name: name,
            value: value
          }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function transition_tween (name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }
  function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
      return get(node, id).value[name];
    };
  }

  function interpolate (a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
  }

  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
        value1 = value(this),
        string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
        value1 = value(this),
        string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function transition_attr (name, value) {
    var fullname = namespace(name),
      i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function (t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function (t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_attrTween (name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function () {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id, value) {
    return value = +value, function () {
      init(this, id).delay = value;
    };
  }
  function transition_delay (value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function () {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id, value) {
    return value = +value, function () {
      set(this, id).duration = value;
    };
  }
  function transition_duration (value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error();
    return function () {
      set(this, id).ease = value;
    };
  }
  function transition_ease (value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error();
      set(this, id).ease = v;
    };
  }
  function transition_easeVarying (value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter (match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge (transition) {
    if (transition._id !== this._id) throw new Error();
    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id, name, listener) {
    var on0,
      on1,
      sit = start(name) ? init : set;
    return function () {
      var schedule = sit(this, id),
        on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function transition_on (name, listener) {
    var id = this._id;
    return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function () {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }
  function transition_remove () {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select (select) {
    var name = this._name,
      id = this._id;
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll (select) {
    var name = this._name,
      id = this._id;
    if (typeof select !== "function") select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id);
  }

  var Selection = selection.prototype.constructor;
  function transition_selection () {
    return new Selection(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id, name) {
    var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
    return function () {
      var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function transition_style (name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function (t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function transition_styleTween (name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function transition_text (value) {
    return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function (t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_textTween (value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }

  function transition_transition () {
    var name = this._name,
      id0 = this._id,
      id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end () {
    var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
    return new Promise(function (resolve, reject) {
      var cancel = {
          value: reject
        },
        end = {
          value: function () {
            if (--size === 0) resolve();
          }
        };
      that.each(function () {
        var schedule = set(this, id),
          on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });

      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }

  var id = 0;
  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection.prototype;
  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  const linear$1 = t => +t;

  function cubicOut(t) {
    return --t * t * t + 1;
  }
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }
  function selection_transition (name) {
    var id, timing;
    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }
    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  const pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;
  function append(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += arguments[i] + strings[i];
    }
  }
  function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k = 10 ** d;
    return function (strings) {
      this._ += strings[0];
      for (let i = 1, n = strings.length; i < n; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  class Path {
    constructor(digits) {
      this._x0 = this._y0 =
      // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
      this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x, y) {
      this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(x, y) {
      this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
      this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
      this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

      // Is the radius negative? Error.
      if (r < 0) throw new Error(`negative radius: ${r}`);
      let x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._append`M${this._x1 = x1},${this._y1 = y1}`;
      }

      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon)) ;

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._append`L${this._x1 = x1},${this._y1 = y1}`;
      }

      // Otherwise, draw an arc!
      else {
        let x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
        }
        this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
      }
    }
    arc(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;

      // Is the radius negative? Error.
      if (r < 0) throw new Error(`negative radius: ${r}`);
      let dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._append`M${x0},${y0}`;
      }

      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._append`L${x0},${y0}`;
      }

      // Is this arc empty? We’re done.
      if (!r) return;

      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;

      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
      }

      // Is this arc non-empty? Draw an arc!
      else if (da > epsilon) {
        this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
      }
    }
    rect(x, y, w, h) {
      this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
      return this._;
    }
  }

  function formatDecimal (x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimalParts(1.23) returns ["123", 0].
  function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i,
      coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
  }

  function exponent (x) {
    return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup (grouping, thousands) {
    return function (value, width) {
      var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }

  function formatNumerals (numerals) {
    return function (value) {
      return value.replace(/[0-9]/g, function (i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim (s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0) i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i]) break out;
          if (i0 > 0) i0 = 0;
          break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;
  function formatPrefixAuto (x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded (x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
      exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": (x, p) => (x * 100).toFixed(p),
    "b": x => Math.round(x).toString(2),
    "c": x => x + "",
    "d": formatDecimal,
    "e": (x, p) => x.toExponential(p),
    "f": (x, p) => x.toFixed(p),
    "g": (x, p) => x.toPrecision(p),
    "o": x => Math.round(x).toString(8),
    "p": (x, p) => formatRounded(x * 100, p),
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": x => Math.round(x).toString(16).toUpperCase(),
    "x": x => Math.round(x).toString(16)
  };

  function identity$1 (x) {
    return x;
  }

  var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function formatLocale (locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format(value) {
        var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;
        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Determine the sign. -0 is not less than 0, but 1 / -0 is!
          var valueNegative = value < 0 || 1 / value < 0;

          // Perform the initial formatting.
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
          if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format.toString = function () {
        return specifier + "";
      };
      return format;
    }
    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
      return function (value) {
        return f(k * value) + prefix;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed (step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix (step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound (step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  var defaultSource = Math.random;

  var uniform = (function sourceRandomUniform(source) {
    function randomUniform(min, max) {
      min = min == null ? 0 : +min;
      max = max == null ? 1 : +max;
      if (arguments.length === 1) max = min, min = 0;else max -= min;
      return function () {
        return source() * max + min;
      };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
  })(defaultSource);

  var normal = (function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
      var x, r;
      mu = mu == null ? 0 : +mu;
      sigma = sigma == null ? 1 : +sigma;
      return function () {
        var y;

        // If available, use the second previously-generated uniform random.
        if (x != null) y = x, x = null;

        // Otherwise, generate a new x and y.
        else do {
          x = source() * 2 - 1;
          y = source() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
      };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
  })(defaultSource);

  // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
  const mul = 0x19660D;
  const inc = 0x3C6EF35F;
  const eps = 1 / 0x100000000;
  function lcg(seed = Math.random()) {
    let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
    return () => (state = mul * state + inc | 0, eps * (state >>> 0));
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }

  function constants(x) {
    return function () {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];
  function identity(x) {
    return x;
  }
  function normalize(a, b) {
    return (b -= a = +a) ? function (x) {
      return (x - a) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function (x) {
      return Math.max(a, Math.min(b, x));
    };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function (x) {
      return r0(d0(x));
    };
  }
  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }
    return function (x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit,
      range = unit,
      interpolate = interpolate$1,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;
    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function (y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };
    scale.domain = function (_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function (_) {
      return range = Array.from(_), interpolate = interpolateRound, rescale();
    };
    scale.clamp = function (_) {
      return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function (_) {
      return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity, identity);
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
      precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s":
        {
          var value = Math.max(Math.abs(start), Math.abs(stop));
          if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
          return formatPrefix(specifier, value);
        }
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        {
          if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
          break;
        }
      case "f":
      case "%":
        {
          if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
          break;
        }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function (count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function (count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function (count) {
      if (count == null) count = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear() {
    var scale = continuous();
    scale.copy = function () {
      return copy(scale, linear());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }

  function colors (specifier) {
    var n = specifier.length / 6 | 0,
      colors = new Array(n),
      i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  var Set1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  function constant (x) {
    return function constant() {
      return x;
    };
  }

  function withPath(shape) {
    let digits = 3;
    shape.digits = function (_) {
      if (!arguments.length) return digits;
      if (_ == null) {
        digits = null;
      } else {
        const d = Math.floor(_);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
        digits = d;
      }
      return shape;
    };
    return () => new Path(digits);
  }

  function array (x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;
        case 1:
          this._point = 2;
        // falls through
        default:
          this._context.lineTo(x, y);
          break;
      }
    }
  };
  function curveLinear (context) {
    return new Linear(context);
  }

  function x(p) {
    return p[0];
  }
  function y(p) {
    return p[1];
  }

  function line (x$1, y$1) {
    var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null,
      path = withPath(line);
    x$1 = typeof x$1 === "function" ? x$1 : x$1 === undefined ? x : constant(x$1);
    y$1 = typeof y$1 === "function" ? y$1 : y$1 === undefined ? y : constant(y$1);
    function line(data) {
      var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;
      if (context == null) output = curve(buffer = path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();else output.lineEnd();
        }
        if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
      }
      if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function (_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
    };
    line.y = function (_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
    };
    line.defined = function (_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
    };
    line.curve = function (_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function (_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
  }

  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function (k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function (x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function (point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function (x) {
      return x * this.k + this.x;
    },
    applyY: function (y) {
      return y * this.k + this.y;
    },
    invert: function (location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function (x) {
      return (x - this.x) / this.k;
    },
    invertY: function (y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function (x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function (y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  Transform.prototype;

  /*
    DecidablesElement Base Class - Not intended for instantiation!
    <decidables-element>
  */
  class DecidablesElement extends r {
    getComputedStyleValue(property) {
      return getComputedStyle(this).getPropertyValue(property).trim();
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);

      // Use focus highlighting if keyboard is used at all
      select(this.renderRoot.host).classed('keyboard', true).on('mousemove.keyboard touchstart.keyboard', event => {
        const element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', false).on('mousemove.keyboard touchstart.keyboard', null);
      }).on('keydown.keyboard', event => {
        const element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', true).on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
    }
    static get greys() {
      const grey = '#999999';
      const greys = {};
      greys.white = '#ffffff';
      greys.light75 = interpolateRgb(grey, '#ffffff')(0.75);
      greys.light50 = interpolateRgb(grey, '#ffffff')(0.5);
      greys.light25 = interpolateRgb(grey, '#ffffff')(0.25);
      greys.grey = grey;
      greys.dark25 = interpolateRgb(grey, '#000000')(0.25);
      greys.dark50 = interpolateRgb(grey, '#000000')(0.5);
      greys.dark75 = interpolateRgb(grey, '#000000')(0.75);
      greys.black = '#000000';
      return greys;
    }
    static get shadows() {
      // Material Design elevation styles
      // References:
      //   https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
      //   https://codepen.io/hanger/pen/yOGvQp
      /* eslint-disable key-spacing, object-curly-newline */
      return {
        elevations: [0, 2, 4, 8, 16],
        baselineColor: '#000000',
        baselineColorString: '0, 0, 0',
        inverseBaselineColor: '#FFFFFF',
        inverseBaselineColorString: '255, 255, 255',
        opacityUmbra: 0.2,
        opacityPenumbra: 0.14,
        opacityAmbient: 0.12,
        opacityBoost: 0.2,
        mapUmbra: {
          // $mdc-elevation-umbra-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 3,
            b: 1,
            s: -2
          },
          4: {
            x: 0,
            y: 2,
            b: 4,
            s: -1
          },
          8: {
            x: 0,
            y: 5,
            b: 5,
            s: -3
          },
          16: {
            x: 0,
            y: 8,
            b: 10,
            s: -5
          }
        },
        mapPenumbra: {
          // $mdc-elevation-penumbra-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 2,
            b: 2,
            s: 0
          },
          4: {
            x: 0,
            y: 4,
            b: 5,
            s: 0
          },
          8: {
            x: 0,
            y: 8,
            b: 10,
            s: 1
          },
          16: {
            x: 0,
            y: 16,
            b: 24,
            s: 2
          }
        },
        mapAmbient: {
          // $mdc-elevation-ambient-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 1,
            b: 5,
            s: 0
          },
          4: {
            x: 0,
            y: 1,
            b: 10,
            s: 0
          },
          8: {
            x: 0,
            y: 3,
            b: 14,
            s: 2
          },
          16: {
            x: 0,
            y: 6,
            b: 30,
            s: 5
          }
        }
      };
      /* eslint-enable key-spacing, object-curly-newline */
    }
    static cssBoxShadow(elevation, rotate = false, inverse = false) {
      const umbraO = this.shadows.opacityUmbra + this.shadows.opacityBoost;
      const penumbraO = this.shadows.opacityPenumbra + this.shadows.opacityBoost;
      const ambientO = this.shadows.opacityAmbient + this.shadows.opacityBoost;
      const umbraC = inverse ? `rgba(${this.shadows.inverseBaselineColorString}, ${umbraO})` : `rgba(${this.shadows.baselineColorString}, ${umbraO})`;
      const penumbraC = inverse ? `rgba(${this.shadows.inverseBaselineColorString}, ${penumbraO})` : `rgba(${this.shadows.baselineColorString}, ${penumbraO})`;
      const ambientC = inverse ? `rgba(${this.shadows.inverseBaselineColorString}, ${ambientO})` : `rgba(${this.shadows.baselineColorString}, ${ambientO})`;
      const umbraM = this.shadows.mapUmbra[elevation];
      const penumbraM = this.shadows.mapPenumbra[elevation];
      const ambientM = this.shadows.mapAmbient[elevation];
      const umbraS = rotate ? `${-umbraM.y}px ${umbraM.y / 2}px ${umbraM.b}px ${umbraM.s}px` : `${umbraM.y / 2}px ${umbraM.y}px ${umbraM.b}px ${umbraM.s}px`;
      const penumbraS = rotate ? `${-penumbraM.y}px ${penumbraM.y / 2}px ${penumbraM.b}px ${penumbraM.s}px` : `${penumbraM.y / 2}px ${penumbraM.y}px ${penumbraM.b}px ${penumbraM.s}px`;
      const ambientS = rotate ? `${-ambientM.y}px ${ambientM.y / 2}px ${ambientM.b}px ${ambientM.s}px` : `${ambientM.y / 2}px ${ambientM.y}px ${ambientM.b}px ${ambientM.s}px`;
      return `${umbraS} ${umbraC}, ${penumbraS} ${penumbraC}, ${ambientS} ${ambientC}`;
    }
    static get svgDefs() {
      const shadows = DecidablesElement.shadows; /* eslint-disable-line prefer-destructuring */

      const filters = shadows.elevations.map(z => {
        return `
        <filter id=${`shadow-${z}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${shadows.mapUmbra[z].y / 2} dy=${shadows.mapUmbra[z].y} />
          <feOffset in="solid" result="offP" dx=${shadows.mapPenumbra[z].y / 2} dy=${shadows.mapPenumbra[z].y} />
          <feOffset in="solid" result="offA" dx=${shadows.mapAmbient[z].y / 2} dy=${shadows.mapAmbient[z].y} />
          ${shadows.mapUmbra[z].s === 0 ? '' : `<feMorphology in="offU" result="spreadU" operator=${shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapUmbra[z].s)} />`}
          ${shadows.mapPenumbra[z].s === 0 ? '' : `<feMorphology in="offP" result="spreadP" operator=${shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapPenumbra[z].s)} />`}
          ${shadows.mapAmbient[z].s === 0 ? '' : `<feMorphology in="offA" result="spreadA" operator=${shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapAmbient[z].s)} />`}
          <feGaussianBlur in=${shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU'} result="blurU" stdDeviation=${shadows.mapUmbra[z].b / 2} />
          <feGaussianBlur in=${shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP'} result="blurP" stdDeviation=${shadows.mapPenumbra[z].b / 2} />
          <feGaussianBlur in=${shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA'} result="blurA" stdDeviation=${shadows.mapAmbient[z].b / 2} />
          <feFlood in="SourceGraphic" result="opU" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityUmbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opP" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityPenumbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opA" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityAmbient + shadows.opacityBoost} />
          <feComposite in="opU" in2="blurU" result="shU" operator="in" />
          <feComposite in="opP" in2="blurP" result="shP" operator="in" />
          <feComposite in="opA" in2="blurA" result="shA" operator="in" />
          <feMorphology in="solid" result="smaller" operator="erode" radius="1" />
          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />
          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />
          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />
          <feMerge>
            <feMergeNode in="finalU" />
            <feMergeNode in="finalP" />
            <feMergeNode in="finalA" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>`;
      });
      return `
      <defs>
        ${filters}
      </defs>
    `;
    }
    static get svgFilters() {
      const shadows = DecidablesElement.shadows; /* eslint-disable-line prefer-destructuring */

      const filters = shadows.elevations.map(z => {
        return b`
        <filter id=${`shadow-${z}`} x="-250%" y="-250%" width="600%" height="600%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${shadows.mapUmbra[z].y / 2} dy=${shadows.mapUmbra[z].y} />
          <feOffset in="solid" result="offP" dx=${shadows.mapPenumbra[z].y / 2} dy=${shadows.mapPenumbra[z].y} />
          <feOffset in="solid" result="offA" dx=${shadows.mapAmbient[z].y / 2} dy=${shadows.mapAmbient[z].y} />
          ${shadows.mapUmbra[z].s === 0 ? b`` : b`<feMorphology in="offU" result="spreadU" operator=${shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapUmbra[z].s)} />`}
          ${shadows.mapPenumbra[z].s === 0 ? b`` : b`<feMorphology in="offP" result="spreadP" operator=${shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapPenumbra[z].s)} />`}
          ${shadows.mapAmbient[z].s === 0 ? b`` : b`<feMorphology in="offA" result="spreadA" operator=${shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapAmbient[z].s)} />`}
          <feGaussianBlur in=${shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU'} result="blurU" stdDeviation=${shadows.mapUmbra[z].b / 2} />
          <feGaussianBlur in=${shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP'} result="blurP" stdDeviation=${shadows.mapPenumbra[z].b / 2} />
          <feGaussianBlur in=${shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA'} result="blurA" stdDeviation=${shadows.mapAmbient[z].b / 2} />
          <feFlood in="SourceGraphic" result="opU" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityUmbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opP" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityPenumbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opA" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityAmbient + shadows.opacityBoost} />
          <feComposite in="opU" in2="blurU" result="shU" operator="in" />
          <feComposite in="opP" in2="blurP" result="shP" operator="in" />
          <feComposite in="opA" in2="blurA" result="shA" operator="in" />
          <feMorphology in="solid" result="smaller" operator="erode" radius="1" />
          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />
          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />
          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />
          <feMerge>
            <feMergeNode in="finalU" />
            <feMergeNode in="finalP" />
            <feMergeNode in="finalA" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>`;
      });
      return b`
      <svg class="defs">
        <defs>
          ${filters}
        </defs>
      </svg>
    `;
    }
    static get styles() {
      return i$3`
      :host {
        ---shadow-0: var(--shadow-0, ${r$3(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${r$3(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${r$3(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${r$3(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${r$3(this.greys.white)});
        ---color-border: var(--color-border, ${r$3(this.greys.light75)});
        ---color-text: var(--color-text, ${r$3(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${r$3(this.greys.white)});
        ---color-link: var(--color-link, ${r$3(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${r$3(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${r$3(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${r$3(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${r$3(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${r$3(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${r$3(this.greys.dark75)});

        ---font-family-base: var(--font-family-base, "Source Sans", sans-serif);
        ---font-family-math: var(--font-family-math, "Source Serif", serif);

        ---border: var(--border, 1px solid var(---color-border));
        ---border-radius: var(--border-radius, 0.25rem);
        ---transition-duration: var(--transition-duration, 500ms);

        font-family: var(---font-family-base);
      }

      :host,
      :host *,
      :host *::before,
      :host *::after {
        box-sizing: border-box;
      }

      .math-greek {
        font-family: var(---font-family-math);
        font-style: normal;
      }

      .math-num {
        font-family: var(---font-family-base);
        font-style: normal;
      }

      .math-var {
        font-family: var(---font-family-math);
        font-style: italic;
      }

      .defs {
        display: block;

        width: 0;
        height: 0;
      }
    `;
    }
  }

  class DecidablesButton extends DecidablesElement {
    static get properties() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.disabled = false;
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          margin: 0.25rem;
        }

        button {
          width: 100%;
          height: 100%;
          padding: 0.375rem 0.75rem;

          font-family: var(---font-family-base);
          font-size: 1.125rem;
          line-height: 1.5;
          color: var(---color-text-inverse);

          border: 0;
          border-radius: var(---border-radius);
          outline: none;
        }

        button:disabled {
          background-color: var(--decidables-button-background-color, var(---color-element-disabled));
          outline: none;
          box-shadow: none;
        }

        button:enabled {
          cursor: pointer;

          background-color: var(--decidables-button-background-color, var(---color-element-enabled));
          outline: none;
          box-shadow: var(---shadow-2);
        }

        button:enabled:hover {
          outline: none;
          box-shadow: var(---shadow-4);
        }

        button:enabled:active {
          outline: none;
          box-shadow: var(---shadow-8);
        }

        :host(.keyboard) button:enabled:focus {
          outline: none;
          box-shadow: var(---shadow-4);
        }

        :host(.keyboard) button:enabled:focus:active {
          outline: none;
          box-shadow: var(---shadow-8);
        }
      `];
    }
    render() {
      return x$1`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
    }
  }
  customElements.define('decidables-button', DecidablesButton);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = o => o ?? E;

  class DecidablesSlider extends DecidablesElement {
    static get properties() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        max: {
          attribute: 'max',
          type: Number,
          reflect: true
        },
        min: {
          attribute: 'min',
          type: Number,
          reflect: true
        },
        step: {
          attribute: 'step',
          type: Number,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.disabled = false;
      this.max = undefined;
      this.min = undefined;
      this.step = undefined;
      this.value = undefined;
    }
    changed(event) {
      this.value = event.target.value;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: this.value
        },
        bubbles: true
      }));
    }
    inputted(event) {
      this.value = event.target.value;
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          ---shadow-2-rotate: var(--shadow-2-rotate, ${r$3(this.cssBoxShadow(2, true, false))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${r$3(this.cssBoxShadow(4, true, false))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${r$3(this.cssBoxShadow(8, true, false))});

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        .range {
          display: inline-block;

          width: 3.5rem;
          height: 4.75rem;
          margin: 0 0.25rem 0.25rem;
        }

        decidables-spinner {
          --decidables-spinner-input-width: 3.5rem;

          margin: 0 0.25rem 0.25rem;
        }

        /* Adapted from http://danielstern.ca/range.css/#/ */
        /* Overall */
        input[type=range] {
          width: 4.75rem;
          height: 3.5rem;
          padding: 0;
          margin: 0;

          background-color: unset;

          transform: rotate(-90deg);
          transform-origin: 2.375rem 2.375rem;

          /* stylelint-disable-next-line property-no-vendor-prefix */
          -webkit-appearance: none;
        }

        input[type=range]:enabled {
          cursor: ns-resize;
        }

        input[type=range]:focus {
          outline: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-tooltip {
          display: none;
        }

        /* Track */
        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;

          background: var(---color-element-disabled);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        input[type=range]:focus::-webkit-slider-runnable-track {
          background: var(---color-element-disabled);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-moz-range-track {
          width: 100%;
          height: 4px;

          background: var(---color-element-disabled);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-track {
          width: 100%;
          height: 4px;

          color: transparent;

          background: transparent;
          border-color: transparent;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-fill-lower {
          background: #cccccc;
          /* background: var(---color-element-disabled); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-fill-upper {
          background: #cccccc;
          /* background: var(---color-element-disabled); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-lower {
          background: var(---color-element-disabled);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-upper {
          background: var(---color-element-disabled);
        }

        /* Thumb */
        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-webkit-slider-thumb {
          width: 10px;
          height: 20px;
          margin-top: -8px;

          border: 0;
          border-radius: 4px;

          /* stylelint-disable-next-line property-no-vendor-prefix */
          -webkit-appearance: none;
        }

        input[type=range]:disabled::-webkit-slider-thumb {
          background: var(---color-element-disabled);
          box-shadow: none;
        }

        input[type=range]:enabled::-webkit-slider-thumb {
          background: var(---color-element-enabled);
          box-shadow: var(---shadow-2-rotate);
        }

        input[type=range]:enabled:hover::-webkit-slider-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        input[type=range]:enabled:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-moz-range-thumb {
          width: 10px;
          height: 20px;

          border: 0;
          border-radius: 4px;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:disabled::-moz-range-thumb {
          background: var(---color-element-disabled);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-moz-range-thumb {
          background: var(---color-element-enabled);
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:hover::-moz-range-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:active::-moz-range-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-thumb {
          width: 10px;
          height: 20px;
          margin-top: 0;

          background: #999999;
          /* background: var(---color-element-enabled); */
          border: 0;
          border-radius: 4px;
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:disabled::-ms-thumb {
          background: var(---color-element-disabled);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-ms-thumb {
          background: var(---color-element-enabled);
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:hover::-ms-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:active::-ms-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {
          box-shadow: var(---shadow-8-rotate);
        }
      `];
    }
    render() {
      return x$1`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @change=${this.changed.bind(this)} @input=${this.inputted.bind(this)}>
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}></decidables-spinner>
    `;
    }
  }
  customElements.define('decidables-slider', DecidablesSlider);

  class DecidablesSpinner extends DecidablesElement {
    static get properties() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        max: {
          attribute: 'max',
          type: Number,
          reflect: true
        },
        min: {
          attribute: 'min',
          type: Number,
          reflect: true
        },
        step: {
          attribute: 'step',
          type: Number,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.disabled = false;
      this.max = undefined;
      this.min = undefined;
      this.step = undefined;
      this.value = undefined;
    }
    inputted(event) {
      this.value = event.target.value;
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          ---decidables-spinner-font-size: var(--decidables-spinner-font-size, 1.125rem);
          ---decidables-spinner-input-width: var(--decidables-spinner-input-width, 4rem);
          ---decidables-spinner-prefix: var(--decidables-spinner-prefix, "");

          ---decidables-spinner-postfix: var(--decidables-spinner-postfix, "");
          ---decidables-spinner-postfix-padding: var(--decidables-spinner-postfix-padding, 0);

          display: block;
        }

        label {
          position: relative;
          display: flex;

          flex-direction: column;

          align-items: center;

          margin: 0;

          font-size: 0.75rem;
        }

        label::before {
          position: absolute;
          bottom: 1px;
          left: calc(50% - var(---decidables-spinner-input-width) / 2 + 0.25rem);

          font-size: var(---decidables-spinner-font-size);
          line-height: normal;

          content: var(---decidables-spinner-prefix);
        }

        label::after {
          position: absolute;
          right: 0.25rem;
          bottom: 1px;

          font-size: var(---decidables-spinner-font-size);
          line-height: normal;

          content: var(---decidables-spinner-postfix);
        }

        input[type=number] {
          width: var(---decidables-spinner-input-width);
          padding-right: var(---decidables-spinner-postfix-padding);

          font-family: var(---font-family-base);
          font-size: var(---decidables-spinner-font-size);
          color: inherit;
          text-align: right;

          background: none;
          border: 0;
          border-radius: 0;
          outline: none;
          box-shadow: var(---shadow-2);

          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }

        input[type=number]:hover {
          box-shadow: var(---shadow-4);
        }

        input[type=number]:focus,
        input[type=number]:active {
          box-shadow: var(---shadow-8);
        }

        input[type=number]:disabled {
          color: var(---color-text);

          border: 0;
          box-shadow: none;

          /* HACK: Use correct text color in Safari */
          -webkit-opacity: 1;
          /* HACK: Hide spinners in disabled input for Firefox and Safari */
          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */
          /* HACK: Use correct text color in Safari */
          -webkit-text-fill-color: var(---color-text);
        }

        /* HACK: Hide spinners in disabled input for Firefox and Safari */
        input[type=number]:disabled::-webkit-outer-spin-button,
        input[type=number]:disabled::-webkit-inner-spin-button {
          margin: 0;
          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }
      `];
    }
    render() {
      return x$1`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `;
    }
  }
  customElements.define('decidables-spinner', DecidablesSpinner);

  class DecidablesSwitch extends DecidablesElement {
    static get properties() {
      return {
        checked: {
          attribute: 'checked',
          type: Boolean,
          reflect: true
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.checked = false;
      this.disabled = false;
    }
    changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked
        },
        bubbles: true
      }));
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        /* Adapted from https://codepen.io/guuslieben/pen/YyPRVP */
        input[type=checkbox] {
          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */
          position: absolute;

          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);

          white-space: nowrap;

          border: 0;
          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */
        }

        input[type=checkbox] + label {
          order: 1;

          margin: 0 0.25rem 0.25rem;

          font-weight: 400;
        }

        input[type=checkbox] + label + label {
          position: relative;

          min-width: 24px;
          padding: 0 0 36px;
          margin: 0.25rem 0.25rem 0;

          font-weight: 400;

          outline: none;
        }

        input[type=checkbox] + label + label::before,
        input[type=checkbox] + label + label::after {
          position: absolute;

          left: 50%;

          margin: 0;

          content: "";

          outline: 0;

          transition: all var(---transition-duration) ease;
          transform: translate(-50%, 0);
        }

        input[type=checkbox] + label + label::before {
          bottom: 1px;

          width: 8px;
          height: 34px;

          background-color: var(---color-element-disabled);
          border-radius: 4px;
        }

        input[type=checkbox] + label + label::after {
          bottom: 0;

          width: 18px;
          height: 18px;

          background-color: var(---color-element-enabled);
          border-radius: 50%;
          box-shadow: var(---shadow-2);
        }

        input[type=checkbox]:checked + label + label::after {
          transform: translate(-50%, -100%);
        }

        input[type=checkbox]:disabled + label + label::after {
          background-color: var(---color-element-disabled);
          box-shadow: none;
        }

        input[type=checkbox]:enabled + label,
        input[type=checkbox]:enabled + label + label {
          cursor: pointer;
        }

        input[type=checkbox]:enabled + label:hover + label::after,
        input[type=checkbox]:enabled + label + label:hover::after {
          box-shadow: var(---shadow-4);
        }

        input[type=checkbox]:enabled + label:active + label::after,
        input[type=checkbox]:enabled + label + label:active::after {
          box-shadow: var(---shadow-8);
        }

        /* stylelint-disable-next-line selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label::after {
          box-shadow: var(---shadow-4);
        }

        /* stylelint-disable selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,
        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {
          box-shadow: var(---shadow-8);
        }
        /* stylelint-enable selector-max-compound-selectors */
        `];
    }
    render() {
      return x$1`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `;
    }
  }
  customElements.define('decidables-switch', DecidablesSwitch);

  class DecidablesToggle extends DecidablesElement {
    static get properties() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.disabled = false;
    }
    static get styles() {
      return [super.styles, i$3`
        fieldset {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;

          margin: 0.25rem;

          border: 0;
        }

        legend {
          text-align: center;
        }
      `];
    }
    render() {
      return x$1`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `;
    }
  }
  customElements.define('decidables-toggle', DecidablesToggle);

  class DecidablesToggleOption extends DecidablesElement {
    static get properties() {
      return {
        checked: {
          attribute: 'checked',
          type: Boolean,
          reflect: true
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        name: {
          attribute: 'name',
          type: String,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: String,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.checked = false;
      this.disabled = false;
      this.name = undefined;
      this.value = undefined;
    }
    changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value
        },
        bubbles: true
      }));
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: flex;
        }

        input[type=radio] {
          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */
          position: absolute;

          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);

          white-space: nowrap;

          border: 0;
          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */
        }

        input[type=radio] + label {
          width: 100%;
          padding: 0.375rem 0.75rem;

          font-family: var(---font-family-base);
          font-size: 1.125rem;
          line-height: 1.5;
          color: var(---color-text-inverse);
          text-align: center;

          cursor: pointer;

          background-color: var(---color-element-enabled);
          border: 0;
          border-radius: 0;
          outline: none;

          box-shadow: var(---shadow-2);
        }

        input[type=radio]:checked + label {
          background-color: var(---color-element-selected);
          outline: none;
          box-shadow: var(---shadow-2);
        }

        input[type=radio] + label:hover {
          z-index: 1;

          outline: none;
          box-shadow: var(---shadow-4);
        }

        input[type=radio] + label:active {
          z-index: 2;

          outline: none;
          box-shadow: var(---shadow-8);
        }

        :host(:first-of-type) input[type=radio] + label {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }

        :host(:last-of-type) input[type=radio] + label {
          border-bottom-right-radius: 0.25rem;
          border-bottom-left-radius: 0.25rem;
        }

        :host(.keyboard) input[type=radio]:focus + label {
          z-index: 1;

          outline: none;
          box-shadow: var(---shadow-4);
        }

        :host(.keyboard) input[type=radio]:focus:checked + label {
          z-index: 1;

          background-color: var(---color-element-selected);
          outline: none;
          box-shadow: var(---shadow-4);
        }

        :host(.keyboard) input[type=radio]:focus + label:active {
          z-index: 2;

          outline: none;
          box-shadow: var(---shadow-8);
        }
      `];
    }
    render() {
      return x$1`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `;
    }
  }
  customElements.define('decidables-toggle-option', DecidablesToggleOption);

  function DecidablesMixinResizeable(superClass) {
    return class extends superClass {
      static get properties() {
        return {
          width: {
            attribute: false,
            type: Number,
            reflect: false
          },
          height: {
            attribute: false,
            type: Number,
            reflect: false
          },
          rem: {
            attribute: false,
            type: Number,
            reflect: false
          }
        };
      }
      constructor() {
        super();
        this.width = NaN;
        this.height = NaN;
        this.rem = NaN;
      }
      getDimensions() {
        this.width = parseFloat(this.getComputedStyleValue('width'), 10);
        this.height = parseFloat(this.getComputedStyleValue('height'), 10);
        this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
      }
      connectedCallback() {
        super.connectedCallback();
        this.resizeObserver = new ResizeObserver(this.getDimensions.bind(this));
        this.resizeObserver.observe(this);
      }
      disconnectedCallback() {
        this.resizeObserver.unobserve(this);
        super.disconnectedCallback();
      }
    };
  }

  /*
    AccumulableElement Base Class - Not intended for instantiation!
  */
  class AccumulableElement extends DecidablesElement {
    static get properties() {
      return {
        interactive: {
          attribute: 'interactive',
          type: Boolean,
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.interactive = false;
    }
    static get colors() {
      return {
        a: Set1[0],
        z: Set1[1],
        v: Set1[4],
        t0: Set1[7],
        s: Set1[8],
        left: '#f032e6',
        right: '#10dbc9',
        correct: Set1[2],
        error: Set1[3],
        nr: '#cccccc'
      };
    }
    static get lights() {
      return Object.keys(AccumulableElement.colors).reduce((acc, cur) => {
        acc[cur] = interpolateRgb(AccumulableElement.colors[cur], '#ffffff')(0.5);
        return acc;
      }, {});
    }
    static get darks() {
      return Object.keys(AccumulableElement.colors).reduce((acc, cur) => {
        acc[cur] = interpolateRgb(AccumulableElement.colors[cur], '#000000')(0.5);
        return acc;
      }, {});
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          /* Declare base colors */
          ${r$3(Object.keys(AccumulableElement.colors).map(color => {
      return `---color-${color}: var(--color-${color}, ${this.colors[color]});`;
    }).join('\n'))}

          /* Declare light colors */
          ${r$3(Object.keys(AccumulableElement.colors).map(color => {
      return `---color-${color}-light: var(--color-${color}-light, ${this.lights[color]});`;
    }).join('\n'))}

          /* Declare dark colors */
          ${r$3(Object.keys(AccumulableElement.colors).map(color => {
      return `---color-${color}-dark: var(--color-${color}-dark, ${this.darks[color]});`;
    }).join('\n'))}
        }
      `];
    }
  }

  /*
    AccumulableControl element
    <accumulable-control>

    Attributes:

  */
  class AccumulableControl extends AccumulableElement {
    static get properties() {
      return {
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        resample: {
          attribute: 'resample',
          type: Boolean,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        run: {
          attribute: 'run',
          type: Boolean,
          reflect: true
        },
        pause: {
          attribute: 'pause',
          type: Boolean,
          reflect: true
        },
        reset: {
          attribute: 'reset',
          type: Boolean,
          reflect: true
        },
        state: {
          attribute: false,
          type: String,
          reflect: false
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.trials = undefined;
      this.resample = false;
      this.duration = undefined;
      this.coherence = undefined;
      this.colors = ['none', 'measure', 'outcome', 'all'];
      this.color = undefined;
      this.run = false;
      this.pause = false;
      this.reset = false;

      // Properties
      this.states = ['resetted', 'running', 'paused', 'ended'];
      this.state = 'resetted';
    }
    setTrials(e) {
      this.trials = e.target.value;
      this.dispatchEvent(new CustomEvent('accumulable-control-trials', {
        detail: {
          trials: this.trials
        },
        bubbles: true
      }));
    }
    doResample() {
      this.dispatchEvent(new CustomEvent('accumulable-control-resample', {
        detail: {},
        bubbles: true
      }));
    }
    setDuration(e) {
      this.duration = e.target.value;
      this.dispatchEvent(new CustomEvent('accumulable-control-duration', {
        detail: {
          duration: this.duration
        },
        bubbles: true
      }));
    }
    setCoherence(e) {
      this.coherence = e.target.value;
      this.dispatchEvent(new CustomEvent('accumulable-control-coherence', {
        detail: {
          coherence: this.coherence
        },
        bubbles: true
      }));
    }
    chooseColor(e) {
      this.color = e.target.value;
      this.dispatchEvent(new CustomEvent('accumulable-control-color', {
        detail: {
          color: this.color
        },
        bubbles: true
      }));
    }
    doRun() {
      this.state = 'running';
      this.dispatchEvent(new CustomEvent('accumulable-control-run', {
        detail: {},
        bubbles: true
      }));
    }
    doPause() {
      this.state = 'paused';
      this.dispatchEvent(new CustomEvent('accumulable-control-pause', {
        detail: {},
        bubbles: true
      }));
    }
    doReset() {
      this.state = 'resetted';
      this.dispatchEvent(new CustomEvent('accumulable-control-reset', {
        detail: {},
        bubbles: true
      }));
    }
    complete() {
      this.state = 'ended';
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;
        }

        .holder {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .buttons {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }
      `];
    }
    render() {
      return x$1`
      <div class="holder">
        ${this.trials ? x$1`<decidables-slider class="trials" min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>` : x$1``}
        ${this.resample ? x$1`
            <div class="buttons">
              ${this.resample ? x$1`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>` : x$1``}
            </div>
          ` : x$1``}
        ${this.duration ? x$1`<decidables-slider class="duration" min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>` : x$1``}
        ${this.coherence ? x$1`<decidables-slider class="coherence" min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>` : x$1``}
        ${this.color !== undefined ? x$1`
            <decidables-toggle class="color" @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${this.color === 'none'}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${this.color === 'measure'}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${this.color === 'outcome'}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${this.color === 'all'}>All</decidables-toggle-option>
            </decidables-toggle>
          ` : x$1``}
        ${this.run || this.pause || this.reset ? x$1`
            <div class="buttons">
              ${this.run ? x$1`<decidables-button name="run" ?disabled=${this.state === 'running' || this.state === 'ended'} @click=${this.doRun.bind(this)}>Run</decidables-button>` : x$1``}
              ${this.pause ? x$1`<decidables-button name="pause" ?disabled=${this.state !== 'running'} @click=${this.doPause.bind(this)}>Pause</decidables-button>` : x$1``}
              ${this.reset ? x$1`<decidables-button name="reset" ?disabled=${this.state === 'resetted'} @click=${this.doReset.bind(this)}>Reset</decidables-button>` : x$1``}
            </div>
          ` : x$1``}
      </div>`;
    }
  }
  customElements.define('accumulable-control', AccumulableControl);

  /*
    DDMMath Static Class - Not intended for instantiation!

    Model parameters:
      a = boundary separation
      z = starting point as a proportion of a
      v = drift rate (per second)
      t0 = non-decision time (in milliseconds)
      s = within-trial variability in drift rate (s^2 = infinitesimal variance)

      zPrime = starting point on a 0-to-a scale (typically used in published equations)

    Behavioral variables:
      pE = proportion of error trials
      pC = proportion of correct trials
      m = mean of overall RTs (in milliseconds)
      mE = mean of error RTs (in milliseconds)
      mC = mean correct RTs (in milliseconds)
      sd = standard deviation of overall RTs (in milliseconds)
      sdE = standard deviation of error RTs (in milliseconds)
      sdC = standard deviation of correct RTs (in milliseconds)

    Equations:
      Probability of correct and error responses (Alexandrowicz, 2020)
      Mean of overall, error, and correct RTs (Grasman et al., 2009)
      Standard deviation of overall, error, and correct RTs (Grasman et al., 2009)
      Density of error and correct RT distributions (Alexandrowicz, 2020)
      EZ-diffusion model (Wagenmakers et al., 2007)
  */
  class DDMMath {
    static s = 1;

    // Calculate a bunch of statistics for an array of trials
    static trials2stats(trials) {
      const stats = {};

      // First-order sums
      const sums = trials.reduce((accumulator, trial) => {
        switch (trial.outcome) {
          case 'correct':
            accumulator.correctCount += 1;
            accumulator.correctRTSum += trial.rt;
            break;
          case 'error':
            accumulator.errorCount += 1;
            accumulator.errorRTSum += trial.rt;
            break;
          case 'nr':
            accumulator.nrCount += 1;
            break;
          // No-op
        }
        return accumulator;
      }, {
        correctCount: 0,
        errorCount: 0,
        nrCount: 0,
        correctRTSum: 0,
        errorRTSum: 0
      });

      // First-order stats
      stats.correctCount = sums.correctCount;
      stats.errorCount = sums.errorCount;
      stats.nrCount = sums.nrCount;
      stats.accuracy = sums.correctCount / (sums.correctCount + sums.errorCount + sums.nrCount);
      stats.correctMeanRT = sums.correctRTSum / sums.correctCount;
      stats.errorMeanRT = sums.errorRTSum / sums.errorCount;
      stats.meanRT = (sums.correctRTSum + sums.errorRTSum) / (sums.correctCount + sums.errorCount);

      // Second-order sums
      const sums2 = trials.reduce((accumulator, trial) => {
        switch (trial.outcome) {
          case 'correct':
            accumulator.ss += (trial.rt - stats.meanRT) ** 2;
            accumulator.correctSS += (trial.rt - stats.correctMeanRT) ** 2;
            break;
          case 'error':
            accumulator.ss += (trial.rt - stats.meanRT) ** 2;
            accumulator.errorSS += (trial.rt - stats.errorMeanRT) ** 2;
            break;
          // No-op
        }
        return accumulator;
      }, {
        ss: 0,
        correctSS: 0,
        errorSS: 0
      });

      // Second-order stats
      stats.correctSDRT = stats.correctCount > 1 ? Math.sqrt(sums2.correctSS / (stats.correctCount - 1)) : NaN;
      stats.errorSDRT = stats.errorCount > 1 ? Math.sqrt(sums2.errorSS / (stats.errorCount - 1)) : NaN;
      stats.sdRT = stats.correctCount + stats.errorCount > 1 ? Math.sqrt(sums2.ss / (stats.correctCount + stats.errorCount - 1)) : NaN;
      return stats;
    }

    // Probability of an Error Response
    static azv2pE(a, z, v, s = DDMMath.s) {
      const zPrime = a * z;
      const A = Math.exp(-2 * v * a / s ** 2);
      const Z = Math.exp(-2 * v * zPrime / s ** 2);
      return (A - Z) / (A - 1);
    }

    // Probability of a Correct Response
    static azv2pC(a, z, v, s = DDMMath.s) {
      return DDMMath.azv2pE(a, 1 - z, -v, s);
    }

    // Mean Overall RT
    // Equation 5 (Grasman et al., 2009)
    static azvt02m(a, z, v, t0, s = DDMMath.s) {
      const zPrime = a * z;
      const A = Math.exp(-2 * v * a / s ** 2) - 1;
      const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
      const mean = -(zPrime / v) + a / v * (Z / A);
      return t0 + mean * 1000;
    }

    // SD Overall RT
    // Equation 6 (Grasman et al., 2009)
    static azv2sd(a, z, v, s = DDMMath.s) {
      const zPrime = a * z;
      const A = Math.exp(-2 * v * a / s ** 2) - 1;
      const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
      const variance = (-v * a ** 2 * (Z + 4) * Z / A ** 2 + ((-3 * v * a ** 2 + 4 * v * zPrime * a + s ** 2 * a) * Z + 4 * v * zPrime * a) / A - s ** 2 * zPrime) / v ** 3;
      return Math.sqrt(variance) * 1000;
    }

    // Mean Error RT
    // Equation 13 (Grasman et al., 2009)
    static azvt02mE(a, z, v, t0, s = DDMMath.s) {
      function phi(x, y) {
        return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
      }
      const zPrime = a * z;
      const mean = (zPrime * (phi(zPrime - a, a) + phi(0, zPrime)) + 2 * a * phi(zPrime, 0)) / (v * phi(zPrime, a) * phi(-a, 0));
      return t0 + mean * 1000;
    }

    // SD Error RT
    // Equation 14 (Grasman et al., 2009)
    static azv2sdE(a, z, v, s = DDMMath.s) {
      function phi(x, y) {
        return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
      }
      const zPrime = a * z;
      const variance = -2 * a * phi(0, zPrime) * (2 * v * a * phi(zPrime, 2 * a) + s ** 2 * phi(0, a) * phi(zPrime, a)) * Math.exp(2 * v * a / s ** 2) / (v ** 3 * phi(0, a) ** 2 * phi(zPrime, a) ** 2) + (4 * v * zPrime * (2 * a - zPrime) * Math.exp(2 * v * (zPrime + a) / s ** 2) + zPrime * s ** 2 * phi(2 * zPrime, 2 * a)) / (v ** 3 * phi(zPrime, a) ** 2);
      return Math.sqrt(variance) * 1000;
    }

    // Mean Correct RT
    static azvt02mC(a, z, v, t0, s = DDMMath.s) {
      return DDMMath.azvt02mE(a, 1 - z, -v, t0, s);
    }

    // SD Correct RT
    static azv2sdC(a, z, v, s = DDMMath.s) {
      return DDMMath.azv2sdE(a, 1 - z, -v, s);
    }

    // Density of Error RT
    static tazv2gE(t, a, z, v, s = DDMMath.s) {
      if (!t) return 0;
      const zPrime = a * z;
      const base = Math.PI * s ** 2 / a ** 2 * Math.exp(-zPrime * v / s ** 2);
      let k = 0;
      let term = 0;
      let sum = 0;
      do {
        k += 1;
        term = k * Math.sin(Math.PI * zPrime * k / a) * Math.exp(-0.5 * (v ** 2 / s ** 2 + Math.PI ** 2 * k ** 2 * s ** 2 / a ** 2) * t);
        sum += term;
      } while (k < 200); // ?? HACK

      return base * sum;
    }

    // Density of Correct RT
    static tazv2gC(t, a, z, v, s = DDMMath.s) {
      return DDMMath.tazv2gE(t, a, 1 - z, -v, s);
    }

    // Adapted from https://raoul.socsci.uva.nl/EZ2/EZ2_new.html
    // EZ-function for starting values
    // input: obj - Object with properties
    //    pC - Proportion correct
    //    sd - sample standard deviation of the RT's in ms
    //    m - sample mean of the RT's in ms
    //    s - diffusion standard deviation
    // returns: Object with properties v, a, and t0, containing EZ-estimates of these parameters
    static data2ez({
      accuracy: pC,
      sdRT: sd,
      meanRT: m,
      s
    }) {
      function sign(r) {
        return r > 0 ? 1 : r === 0 ? 0 : -1;
      }
      function logit(p) {
        return Math.log(p / (1 - p));
      }
      const vrt = (sd / 1000) ** 2;
      const mrt = m / 1000;
      const s2 = s ** 2;
      const l = logit(pC);
      const x = l * (l * pC ** 2 - l * pC + pC - 0.5) / vrt;
      const v = sign(pC - 0.5) * s * x ** (1 / 4);
      const a = s2 * logit(pC) / v;
      const y = -v * a / s2;
      const mdt = a / (2 * v) * (1 - Math.exp(y)) / (1 + Math.exp(y));
      const t0 = mrt ? mrt - mdt : null; // compute Ter only if MRT was provided

      const t0Prime = t0 * 1000;
      return {
        v,
        a,
        t0: t0Prime,
        s
      };
    }
    static data2ez2() {
      throw new Error('data2ez2 is not implemented!');
    }
  }

  /*
    AccumulableResponse element
    <accumulable-response>

    Attributes:

  */
  class AccumulableResponse extends AccumulableElement {
    static get properties() {
      return {
        feedback: {
          attribute: 'feedback',
          type: Boolean,
          reflect: true
        },
        trial: {
          attribute: 'trial',
          type: Boolean,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: String,
          reflect: true
        },
        correctPayoff: {
          attribute: 'correct-payoff',
          type: Number,
          reflect: true
        },
        errorPayoff: {
          attribute: 'error-payoff',
          type: Number,
          reflect: true
        },
        nrPayoff: {
          attribute: 'no-response-payoff',
          type: Number,
          reflect: true
        },
        state: {
          attribute: false,
          type: String,
          reflect: false
        },
        trialCount: {
          attribute: false,
          type: Number,
          reflect: false
        },
        trialTotal: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.feedback = false; // Display feedback?
      this.trial = false; // Show trial count?
      this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info
      this.payoff = 'none'; // What payoff info to display

      this.correctPayoff = 0; // Correct payoff
      this.errorPayoff = 0; // Error payoff
      this.nrPayoff = 0; // No Response payoff

      // Properties
      this.states = ['off', 'waiting', 'feedback']; // Possible states
      this.state = 'off'; // Current state

      this.trialCount = 0; // Current trial
      this.trialTotal = 0; // Total trials

      // Private
      this.signals = ['left', 'right']; // Possible values of 'signal'
      this.signal = undefined; // Signal for current trial
      this.responses = ['left', 'right']; // Possible values of 'response'
      this.response = undefined; // Response for current trial
      this.outcomes = ['correct', 'error', 'nr']; // Possible values of 'outcome'
      this.outcome = undefined; // Outcome for current trial
      this.startTime = undefined; // Start time of current trial
      this.rt = undefined; // RT for current trial

      this.correctCount = 0; // Count of Correct Trials
      this.errorCount = 0; // Count of Error Trials
      this.nrCount = 0; // Count of No Response trials

      this.trials = []; // Record of trials in block
      this.alignState();
    }
    get trialPayoff() {
      switch (this.outcome) {
        case 'correct':
          return this.correctPayoff;
        case 'error':
          return this.errorPayoff;
        case 'nr':
          return this.nrPayoff;
        default:
          return undefined;
      }
    }
    get totalPayoff() {
      return this.correctCount * this.correctPayoff + this.errorCount * this.errorPayoff + this.nrCount * this.nrPayoff;
    }
    alignState() {
      const stats = DDMMath.trials2stats(this.trials);
      Object.assign(this, stats);
    }
    start(signal, trial) {
      this.startTime = Date.now();
      this.trialCount = trial;
      this.state = 'waiting';
      this.signal = signal;
      this.response = undefined;
      this.outcome = undefined;
      this.rt = undefined;
    }
    stop() {
      this.state = 'feedback';
      if (this.response === undefined) {
        this.outcome = 'nr';
        this.nrCount += 1;
        this.rt = undefined;
        this.trials.push({
          trial: this.trialCount,
          rt: this.rt,
          signal: this.signal,
          response: this.response,
          outcome: this.outcome,
          payoff: this.trialPayoff
        });
        this.alignState();
      }
    }
    left() {
      this.responded('left');
    }
    right() {
      this.responded('right');
    }
    responded(response) {
      this.rt = Date.now() - this.startTime;
      this.state = 'feedback';
      this.response = response;
      if (this.signal === this.response) {
        this.outcome = 'correct';
        this.correctCount += 1;
      } else if (this.signal !== this.response) {
        this.outcome = 'error';
        this.errorCount += 1;
      }
      this.trials.push({
        trial: this.trialCount,
        rt: this.rt,
        signal: this.signal,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff
      });
      this.alignState();
      this.dispatchEvent(new CustomEvent('accumulable-response', {
        detail: {
          trial: this.trialCount,
          rt: this.rt,
          signal: this.signal,
          response: this.response,
          outcome: this.outcome,
          payoff: this.trialPayoff,
          correctCount: this.correctCount,
          errorCount: this.errorCount,
          nrCount: this.nrCount,
          accuracy: this.accuracy,
          meanRT: this.meanRT,
          correctMeanRT: this.correctMeanRT,
          errorMeanRT: this.errorMeanRT,
          sdRT: this.sdRT,
          correctSDRT: this.correctSDRT,
          errorSDRT: this.errorSDRT,
          totalPayoff: this.totalPayoff
        },
        bubbles: true
      }));
    }
    reset() {
      this.state = 'off';
      this.trialCount = 0;
      this.rt = undefined;
      this.signal = undefined;
      this.response = undefined;
      this.outcome = undefined;
      this.correctCount = 0;
      this.errorCount = 0;
      this.nrCount = 0;
      this.trials = [];
      this.alignState();
    }
    keydown(event) {
      if (this.state === 'waiting') {
        if (event.key === 'ArrowLeft') {
          this.responded('left');
          event.preventDefault();
        } else if (event.key === 'ArrowRight') {
          this.responded('right');
          event.preventDefault();
        }
      }
    }
    connectedCallback() {
      super.connectedCallback();
      window.addEventListener('keydown', this.keydown.bind(this));
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this.keydown.bind(this));
      super.disconnectedCallback();
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;
        }

        /* Overall container */
        .holder {
          display: flex;

          flex-direction: column;
        }

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .response {
          flex: 1 0 50%;
        }

        .waiting[disabled] {
          --decidables-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="left"] {
          --decidables-button-background-color: var(---color-left);
        }

        .selected[disabled][name="right"] {
          --decidables-button-background-color: var(---color-right);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: column;

          align-items: center;

          margin: 0.25rem;
        }

        /* Trial feedback */
        .trial {
          text-align: center;
        }

        .trial .label {
          font-weight: 600;
        }

        /* Outcome feedback */
        .feedback {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          width: 6rem;
          height: 3.5rem;
          padding: 0.375rem 0.75rem;
          margin: 0.25rem;

          text-align: center;

          background-color: var(---color-element-background);
          border: 1px solid var(---color-element-border);
        }

        :host([payoff="trial"]) .feedback,
        :host([payoff="total"]) .feedback {
          height: 5rem;
        }

        .feedback.correct {
          background-color: var(---color-correct-light);
        }

        .feedback.error {
          background-color: var(---color-error-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }

        .feedback .outcome {
          font-weight: 600;
          line-height: 1.15;
        }

        /* Payoff feedback */
        .total {
          text-align: center;
        }

        .total .label {
          font-weight: 600;
        }
      `];
    }
    render() {
      const payoffFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      const payoffFormat = number => {
        return payoffFormatter.formatToParts(number).map(({
          type,
          value
        }) => {
          if (type === 'minusSign') {
            return '−';
          }
          return value;
        }).reduce((string, part) => {
          return string + part;
        });
      };
      return x$1`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${`response ${this.state === 'feedback' && this.response === 'left' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''}`} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${`response ${this.state === 'feedback' && this.response === 'right' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''}`} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${this.trial || this.feedback || this.payoff === 'total' ? x$1`
            <div class="feedbacks">
              ${this.trial ? x$1`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>` : x$1``}
              ${this.feedback ? x$1`
                  <div class=${`feedback ${this.state === 'feedback' && this.feedback ? this.outcome : ''}`}>
                    ${this.state === 'feedback' && this.feedback ? this.outcome === 'correct' ? x$1`<span class="outcome">Correct</span>` : this.outcome === 'error' ? x$1`<span class="outcome">Error</span>` : x$1`<span class="outcome">No<br>Response</span>` : ''}
                    ${this.state === 'feedback' && (this.payoff === 'trial' || this.payoff === 'total') ? x$1`<span class="payoff">${payoffFormat(this.trialPayoff)}</span>` : x$1``}
                  </div>` : x$1``}
              ${this.payoff === 'total' ? x$1`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${payoffFormat(this.totalPayoff)}</span>
                  </div>` : x$1``}
            </div>` : x$1``}
      </div>`;
    }
  }
  customElements.define('accumulable-response', AccumulableResponse);

  /*
    AccumulableTable element
    <accumulable-table>

    Attributes:
    ????Hit; Miss; FalseAlarm; CorrectRejection;
  */
  class AccumulableTable extends AccumulableElement {
    static get properties() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        },
        summary: {
          attribute: 'summary',
          type: Boolean,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        correctCount: {
          attribute: 'correct-count',
          type: Number,
          reflect: true
        },
        errorCount: {
          attribute: 'error-count',
          type: Number,
          reflect: true
        },
        nrCount: {
          attribute: 'nr-count',
          type: Number,
          reflect: true
        },
        accuracy: {
          attribute: 'accuracy',
          type: Number,
          reflect: true
        },
        correctMeanRT: {
          attribute: 'correct-mean-rt',
          type: Number,
          reflect: true
        },
        errorMeanRT: {
          attribute: 'error-mean-rt',
          type: Number,
          reflect: true
        },
        meanRT: {
          attribute: 'mean-rt',
          type: Number,
          reflect: true
        },
        correctSDRT: {
          attribute: 'correct-sd-rt',
          type: Number,
          reflect: true
        },
        errorSDRT: {
          attribute: 'error-sd-rt',
          type: Number,
          reflect: true
        },
        sdRT: {
          attribute: 'sd-rt',
          type: Number,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: Boolean,
          reflect: true
        },
        correctPayoff: {
          attribute: 'correct-payoff',
          type: Number,
          reflect: true
        },
        errorPayoff: {
          attribute: 'error-payoff',
          type: Number,
          reflect: true
        },
        nrPayoff: {
          attribute: 'no-response-payoff',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.numeric = false;
      this.summary = false;
      this.colors = ['none', 'measure', 'outcome', 'all'];
      this.color = 'all';
      this.payoff = false;
      this.correctPayoff = undefined; // Correct payoff
      this.errorPayoff = undefined; // Error payoff
      this.nrPayoff = undefined; // No Response payoff

      this.correctCount = NaN;
      this.errorCount = NaN;
      this.nrCount = NaN;
      this.accuracy = NaN;
      this.correctMeanRT = NaN;
      this.errorMeanRT = NaN;
      this.meanRT = NaN;
      this.correctSDRT = NaN;
      this.errorSDRT = NaN;
      this.sdRT = NaN;
    }
    sendEvent() {
      this.dispatchEvent(new CustomEvent('accumulable-table-change', {
        detail: {
          correctCount: this.correctCount,
          errorCount: this.errorCount,
          nrCount: this.nrCount,
          accuracy: this.accuracy,
          correctMeanRT: this.correctMeanRT,
          errorMeanRT: this.errorMeanRT,
          meanRT: this.meanRT,
          correctSDRT: this.correctSDRT,
          errorSDRT: this.errorSDRT,
          sdRT: this.sdRT
        },
        bubbles: true
      }));
    }
    correctCountInput(e) {
      this.correctCount = parseInt(e.target.value, 10);
      this.sendEvent();
    }
    errorCountInput(e) {
      this.errorCount = parseInt(e.target.value, 10);
      this.sendEvent();
    }
    accuracyInput(e) {
      this.accuracy = parseFloat(e.target.value);
      this.sendEvent();
    }
    correctMeanRTInput(e) {
      this.correctMeanRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    errorMeanRTInput(e) {
      this.errorMeanRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    meanRTInput(e) {
      this.meanRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    correctSDRTInput(e) {
      this.correctSDRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    errorSDRTInput(e) {
      this.errorSDRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    sdRTInput(e) {
      this.sdRT = parseFloat(e.target.value);
      this.sendEvent();
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;
        }

        /* Overall element */
        table {
          text-align: center;

          border-collapse: collapse;

          border: 0;
        }

        /* Headers */
        .th-main {
          padding: 0;

          font-weight: bold;
        }

        .th-sub {
          padding: 0 0.25rem;

          font-weight: 600;
        }

        .th-left {
          padding-left: 0;

          text-align: right;
        }

        /* Cells */
        .td {
          width: 10rem;

          padding: 0.25rem 0.25rem 0.375rem;

          transition: all var(---transition-duration) ease;
        }

        .numeric .td {
          width: 7rem;
        }

        /* Labels */
        .payoff {
          font-weight: 600;
          line-height: 0.75rem;
        }

        /* User interaction <input> */
        .td-data decidables-spinner {
          --decidables-spinner-input-width: 3.5rem;
        }

        .td-summary decidables-spinner {
          --decidables-spinner-input-width: 4.5rem;
        }

        /* Table emphasis */
        .td-data.correct {
          border-left: 2px solid var(---color-element-emphasis);
        }

        .td-data.error {
          border-right: 2px solid var(---color-element-emphasis);
        }

        .td-data.count {
          border-top: 2px solid var(---color-element-emphasis);
        }

        .td-data.sd-rt {
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        /* Color schemes */

        /* (Default) All color scheme */
        .correct.count {
          background: var(---color-element-background); /* ###### */
        }

        .error.count {
          background: var(---color-element-background); /* ###### */
        }

        .overall.proportion-correct {
          background: var(---color-element-background); /* ###### */
        }

        .correct.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .overall.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .correct.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .overall.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        /* Outcome color scheme */
        :host([color="outcome"]) .correct {
          background: var(---color-correct-light);
        }

        :host([color="outcome"]) .error {
          background: var(---color-error-light);
        }

        :host([color="outcome"]) .overall {
          background: var(---color-element-background);
        }

        /* Measure color scheme */
        :host([color="measure"]) .count,
        :host([color="measure"]) .proportion-correct {
          background: var(---color-element-background); /* ###### */
        }

        :host([color="measure"]) .mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        :host([color="measure"]) .sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        /* No color scheme */
        :host([color="none"]) .td-data,
        :host([color="none"]) .td-summary {
          background: var(---color-element-background);
        }
      `];
    }
    render() {
      const payoffFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      const payoffFormat = number => {
        return payoffFormatter.formatToParts(number).map(({
          type,
          value
        }) => {
          if (type === 'minusSign') {
            return '−';
          }
          return value;
        }).reduce((string, part) => {
          return string + part;
        });
      };
      let correctCount;
      let errorCount;
      let accuracy;
      let correctMeanRT;
      let errorMeanRT;
      let meanRT;
      let correctSDRT;
      let errorSDRT;
      let sdRT;
      if (this.numeric) {
        correctCount = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
        errorCount = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
        accuracy = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `;
        correctMeanRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `;
        errorMeanRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `;
        meanRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `;
        correctSDRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `;
        errorSDRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `;
        sdRT = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `;
      } else {
        correctCount = x$1`<span>Correct Count</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : x$1``}`;
        errorCount = x$1`<span>Error Count</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : x$1``}`;
        accuracy = x$1`<span>Accuracy</span>`;
        correctMeanRT = x$1`<span>Correct Mean RT</span>`;
        errorMeanRT = x$1`<span>Error Mean RT</span>`;
        meanRT = x$1`<span>Mean RT</span>`;
        correctSDRT = x$1`<span>Correct SD RT</span>`;
        errorSDRT = x$1`<span>Error SD RT</span>`;
        sdRT = x$1`<span>SD RT</span>`;
      }
      return x$1`
      <table class=${this.numeric ? 'numeric' : ''}>
        <thead>
          <tr>
            <th rowspan="2"></th>
            <th class="th th-main" colspan="2" scope="col">
              Outcome
            </th>
          </tr>
          <tr>
            <th class="th th-sub" scope="col">
              Correct
            </th>
            <th class="th th-sub" scope="col">
              Error
            </th>
            ${this.summary ? x$1`
                <th class="th th-main" scope="col">
                  Overall
                </th>` : x$1``}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Count
            </th>
            <td class="td td-data correct count">
              ${correctCount}
            </td>
            <td class="td td-data error count">
              ${errorCount}
            </td>
            ${this.summary ? x$1`
                <td class="td td-summary overall proportion-correct">
                  ${accuracy}
                </td>` : x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Mean RT
            </th>
            <td class="td td-data correct mean-rt">
              ${correctMeanRT}
            </td>
            <td class="td td-data error mean-rt">
              ${errorMeanRT}
            </td>
            ${this.summary ? x$1`
                <td class="td td-summary overall mean-rt">
                  ${meanRT}
                </td>` : x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              SD RT
            </th>
            <td class="td td-data correct sd-rt">
              ${correctSDRT}
            </td>
            <td class="td td-data error sd-rt">
              ${errorSDRT}
            </td>
            ${this.summary ? x$1`
                <td class="td td-summary overall sd-rt">
                  ${sdRT}
                </td>` : x$1``}
          </tr>
        </tbody>
      </table>`;
    }
  }
  customElements.define('accumulable-table', AccumulableTable);

  function decodeBase64(base64, enableUnicode) {
      var binaryString = atob(base64);
      return binaryString;
  }

  function createURL(base64, sourcemapArg, enableUnicodeArg) {
      var sourcemap = sourcemapArg;
      var source = decodeBase64(base64);
      var start = source.indexOf('\n', 10) + 1;
      var body = source.substring(start) + ('\/\/# sourceMappingURL=' + sourcemap );
      var blob = new Blob([body], { type: 'application/javascript' });
      return URL.createObjectURL(blob);
  }

  function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
      var url;
      return function WorkerFactory(options) {
          url = url || createURL(base64, sourcemapArg);
          return new Worker(url, options);
      };
  }

  var WorkerFactory = /*#__PURE__*/createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uCiAgICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkKICAgICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpCgogICAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykKCiAgICBCZWhhdmlvcmFsIHZhcmlhYmxlczoKICAgICAgcEUgPSBwcm9wb3J0aW9uIG9mIGVycm9yIHRyaWFscwogICAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHMKICAgICAgbSA9IG1lYW4gb2Ygb3ZlcmFsbCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUUgPSBtZWFuIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2QgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2Ygb3ZlcmFsbCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RFID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcykKCiAgICBFcXVhdGlvbnM6CiAgICAgIFByb2JhYmlsaXR5IG9mIGNvcnJlY3QgYW5kIGVycm9yIHJlc3BvbnNlcyAoQWxleGFuZHJvd2ljeiwgMjAyMCkKICAgICAgTWVhbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KQogICAgICBEZW5zaXR5IG9mIGVycm9yIGFuZCBjb3JyZWN0IFJUIGRpc3RyaWJ1dGlvbnMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIEVaLWRpZmZ1c2lvbiBtb2RlbCAoV2FnZW5tYWtlcnMgZXQgYWwuLCAyMDA3KQogICovCiAgY2xhc3MgRERNTWF0aCB7CiAgICBzdGF0aWMgcyA9IDE7CgogICAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzCiAgICBzdGF0aWMgdHJpYWxzMnN0YXRzKHRyaWFscykgewogICAgICBjb25zdCBzdGF0cyA9IHt9OwoKICAgICAgLy8gRmlyc3Qtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZSgoYWNjdW11bGF0b3IsIHRyaWFsKSA9PiB7CiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7CiAgICAgICAgICBjYXNlICdjb3JyZWN0JzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdENvdW50ICs9IDE7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlICdlcnJvcic6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JSVFN1bSArPSB0cmlhbC5ydDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlICducic6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLm5yQ291bnQgKz0gMTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAvLyBOby1vcAogICAgICAgIH0KICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7CiAgICAgIH0sIHsKICAgICAgICBjb3JyZWN0Q291bnQ6IDAsCiAgICAgICAgZXJyb3JDb3VudDogMCwKICAgICAgICBuckNvdW50OiAwLAogICAgICAgIGNvcnJlY3RSVFN1bTogMCwKICAgICAgICBlcnJvclJUU3VtOiAwCiAgICAgIH0pOwoKICAgICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdENvdW50ID0gc3Vtcy5jb3JyZWN0Q291bnQ7CiAgICAgIHN0YXRzLmVycm9yQ291bnQgPSBzdW1zLmVycm9yQ291bnQ7CiAgICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7CiAgICAgIHN0YXRzLmFjY3VyYWN5ID0gc3Vtcy5jb3JyZWN0Q291bnQgLyAoc3Vtcy5jb3JyZWN0Q291bnQgKyBzdW1zLmVycm9yQ291bnQgKyBzdW1zLm5yQ291bnQpOwogICAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JNZWFuUlQgPSBzdW1zLmVycm9yUlRTdW0gLyBzdW1zLmVycm9yQ291bnQ7CiAgICAgIHN0YXRzLm1lYW5SVCA9IChzdW1zLmNvcnJlY3RSVFN1bSArIHN1bXMuZXJyb3JSVFN1bSkgLyAoc3Vtcy5jb3JyZWN0Q291bnQgKyBzdW1zLmVycm9yQ291bnQpOwoKICAgICAgLy8gU2Vjb25kLW9yZGVyIHN1bXMKICAgICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmVycm9yTWVhblJUKSAqKiAyOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIHNzOiAwLAogICAgICAgIGNvcnJlY3RTUzogMCwKICAgICAgICBlcnJvclNTOiAwCiAgICAgIH0pOwoKICAgICAgLy8gU2Vjb25kLW9yZGVyIHN0YXRzCiAgICAgIHN0YXRzLmNvcnJlY3RTRFJUID0gc3RhdHMuY29ycmVjdENvdW50ID4gMSA/IE1hdGguc3FydChzdW1zMi5jb3JyZWN0U1MgLyAoc3RhdHMuY29ycmVjdENvdW50IC0gMSkpIDogTmFOOwogICAgICBzdGF0cy5lcnJvclNEUlQgPSBzdGF0cy5lcnJvckNvdW50ID4gMSA/IE1hdGguc3FydChzdW1zMi5lcnJvclNTIC8gKHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLnNkUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgKyBzdGF0cy5lcnJvckNvdW50ID4gMSA/IE1hdGguc3FydChzdW1zMi5zcyAvIChzdGF0cy5jb3JyZWN0Q291bnQgKyBzdGF0cy5lcnJvckNvdW50IC0gMSkpIDogTmFOOwogICAgICByZXR1cm4gc3RhdHM7CiAgICB9CgogICAgLy8gUHJvYmFiaWxpdHkgb2YgYW4gRXJyb3IgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEUoYSwgeiwgdiwgcyA9IERETU1hdGgucykgewogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgQSA9IE1hdGguZXhwKC0yICogdiAqIGEgLyBzICoqIDIpOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKTsKICAgICAgcmV0dXJuIChBIC0gWikgLyAoQSAtIDEpOwogICAgfQoKICAgIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZQogICAgc3RhdGljIGF6djJwQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucykgewogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgQSA9IE1hdGguZXhwKC0yICogdiAqIGEgLyBzICoqIDIpIC0gMTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBtZWFuID0gLSh6UHJpbWUgLyB2KSArIGEgLyB2ICogKFogLyBBKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2MnNkKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IFogPSBNYXRoLmV4cCgtMiAqIHYgKiB6UHJpbWUgLyBzICoqIDIpIC0gMTsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAoLXYgKiBhICoqIDIgKiAoWiArIDQpICogWiAvIEEgKiogMiArICgoLTMgKiB2ICogYSAqKiAyICsgNCAqIHYgKiB6UHJpbWUgKiBhICsgcyAqKiAyICogYSkgKiBaICsgNCAqIHYgKiB6UHJpbWUgKiBhKSAvIEEgLSBzICoqIDIgKiB6UHJpbWUpIC8gdiAqKiAzOwogICAgICByZXR1cm4gTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIDEwMDA7CiAgICB9CgogICAgLy8gTWVhbiBFcnJvciBSVAogICAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KQogICAgc3RhdGljIGF6dnQwMm1FKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgZnVuY3Rpb24gcGhpKHgsIHkpIHsKICAgICAgICByZXR1cm4gTWF0aC5leHAoMiAqIHYgKiB5IC8gcyAqKiAyKSAtIE1hdGguZXhwKDIgKiB2ICogeCAvIHMgKiogMik7CiAgICAgIH0KICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gLTIgKiBhICogcGhpKDAsIHpQcmltZSkgKiAoMiAqIHYgKiBhICogcGhpKHpQcmltZSwgMiAqIGEpICsgcyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpICogTWF0aC5leHAoMiAqIHYgKiBhIC8gcyAqKiAyKSAvICh2ICoqIDMgKiBwaGkoMCwgYSkgKiogMiAqIHBoaSh6UHJpbWUsIGEpICoqIDIpICsgKDQgKiB2ICogelByaW1lICogKDIgKiBhIC0gelByaW1lKSAqIE1hdGguZXhwKDIgKiB2ICogKHpQcmltZSArIGEpIC8gcyAqKiAyKSArIHpQcmltZSAqIHMgKiogMiAqIHBoaSgyICogelByaW1lLCAyICogYSkpIC8gKHYgKiogMyAqIHBoaSh6UHJpbWUsIGEpICoqIDIpOwogICAgICByZXR1cm4gTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIDEwMDA7CiAgICB9CgogICAgLy8gTWVhbiBDb3JyZWN0IFJUCiAgICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgcmV0dXJuIERETU1hdGguYXp2dDAybUUoYSwgMSAtIHosIC12LCB0MCwgcyk7CiAgICB9CgogICAgLy8gU0QgQ29ycmVjdCBSVAogICAgc3RhdGljIGF6djJzZEMoYSwgeiwgdiwgcyA9IERETU1hdGgucykgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucykgewogICAgICBpZiAoIXQpIHJldHVybiAwOwogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgYmFzZSA9IE1hdGguUEkgKiBzICoqIDIgLyBhICoqIDIgKiBNYXRoLmV4cCgtelByaW1lICogdiAvIHMgKiogMik7CiAgICAgIGxldCBrID0gMDsKICAgICAgbGV0IHRlcm0gPSAwOwogICAgICBsZXQgc3VtID0gMDsKICAgICAgZG8gewogICAgICAgIGsgKz0gMTsKICAgICAgICB0ZXJtID0gayAqIE1hdGguc2luKE1hdGguUEkgKiB6UHJpbWUgKiBrIC8gYSkgKiBNYXRoLmV4cCgtMC41ICogKHYgKiogMiAvIHMgKiogMiArIE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMiAvIGEgKiogMikgKiB0KTsKICAgICAgICBzdW0gKz0gdGVybTsKICAgICAgfSB3aGlsZSAoayA8IDIwMCk7IC8vID8/IEhBQ0sKCiAgICAgIHJldHVybiBiYXNlICogc3VtOwogICAgfQoKICAgIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVAogICAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucykgewogICAgICByZXR1cm4gRERNTWF0aC50YXp2MmdFKHQsIGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vcmFvdWwuc29jc2NpLnV2YS5ubC9FWjIvRVoyX25ldy5odG1sCiAgICAvLyBFWi1mdW5jdGlvbiBmb3Igc3RhcnRpbmcgdmFsdWVzCiAgICAvLyBpbnB1dDogb2JqIC0gT2JqZWN0IHdpdGggcHJvcGVydGllcwogICAgLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3QKICAgIC8vICAgIHNkIC0gc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgUlQncyBpbiBtcwogICAgLy8gICAgbSAtIHNhbXBsZSBtZWFuIG9mIHRoZSBSVCdzIGluIG1zCiAgICAvLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvbgogICAgLy8gcmV0dXJuczogT2JqZWN0IHdpdGggcHJvcGVydGllcyB2LCBhLCBhbmQgdDAsIGNvbnRhaW5pbmcgRVotZXN0aW1hdGVzIG9mIHRoZXNlIHBhcmFtZXRlcnMKICAgIHN0YXRpYyBkYXRhMmV6KHsKICAgICAgYWNjdXJhY3k6IHBDLAogICAgICBzZFJUOiBzZCwKICAgICAgbWVhblJUOiBtLAogICAgICBzCiAgICB9KSB7CiAgICAgIGZ1bmN0aW9uIHNpZ24ocikgewogICAgICAgIHJldHVybiByID4gMCA/IDEgOiByID09PSAwID8gMCA6IC0xOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGxvZ2l0KHApIHsKICAgICAgICByZXR1cm4gTWF0aC5sb2cocCAvICgxIC0gcCkpOwogICAgICB9CiAgICAgIGNvbnN0IHZydCA9IChzZCAvIDEwMDApICoqIDI7CiAgICAgIGNvbnN0IG1ydCA9IG0gLyAxMDAwOwogICAgICBjb25zdCBzMiA9IHMgKiogMjsKICAgICAgY29uc3QgbCA9IGxvZ2l0KHBDKTsKICAgICAgY29uc3QgeCA9IGwgKiAobCAqIHBDICoqIDIgLSBsICogcEMgKyBwQyAtIDAuNSkgLyB2cnQ7CiAgICAgIGNvbnN0IHYgPSBzaWduKHBDIC0gMC41KSAqIHMgKiB4ICoqICgxIC8gNCk7CiAgICAgIGNvbnN0IGEgPSBzMiAqIGxvZ2l0KHBDKSAvIHY7CiAgICAgIGNvbnN0IHkgPSAtdiAqIGEgLyBzMjsKICAgICAgY29uc3QgbWR0ID0gYSAvICgyICogdikgKiAoMSAtIE1hdGguZXhwKHkpKSAvICgxICsgTWF0aC5leHAoeSkpOwogICAgICBjb25zdCB0MCA9IG1ydCA/IG1ydCAtIG1kdCA6IG51bGw7IC8vIGNvbXB1dGUgVGVyIG9ubHkgaWYgTVJUIHdhcyBwcm92aWRlZAoKICAgICAgY29uc3QgdDBQcmltZSA9IHQwICogMTAwMDsKICAgICAgcmV0dXJuIHsKICAgICAgICB2LAogICAgICAgIGEsCiAgICAgICAgdDA6IHQwUHJpbWUsCiAgICAgICAgcwogICAgICB9OwogICAgfQogICAgc3RhdGljIGRhdGEyZXoyKCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEyZXoyIGlzIG5vdCBpbXBsZW1lbnRlZCEnKTsKICAgIH0KICB9CgogIC8vIEludGVybmFsIGRlcGVuZGVuY2llcwoKICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1nbG9iYWxzOiBbIm9mZiIsICJzZWxmIl0gKi8KCiAgc2VsZi5vbm1lc3NhZ2UgPSBldmVudCA9PiB7CiAgICBjb25zdCBwYXJhbXMgPSBERE1NYXRoLmRhdGEyZXooewogICAgICAuLi5ldmVudC5kYXRhLAogICAgICBzOiBERE1NYXRoLnMKICAgIH0pOwoKICAgIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIQogICAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTsKICAgIGNvbnN0IHogPSAhaXNOYU4ocGFyYW1zLnopID8gcGFyYW1zLnogOiAwLjU7CiAgICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xOwogICAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDsKICAgIGNvbnN0IHMgPSAhaXNOYU4ocGFyYW1zLnMpID8gcGFyYW1zLnMgOiBERE1NYXRoLnM7CiAgICBjb25zdCBwcmVkaWN0ZWQgPSB7CiAgICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6djJwQyhhLCB6LCB2KSwKICAgICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksCiAgICAgIGVycm9yTWVhblJUOiBERE1NYXRoLmF6dnQwMm1FKGEsIHosIHYsIHQwKSwKICAgICAgbWVhblJUOiBERE1NYXRoLmF6dnQwMm0oYSwgeiwgdiwgdDApLAogICAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLAogICAgICBlcnJvclNEUlQ6IERETU1hdGguYXp2MnNkRShhLCB6LCB2KSwKICAgICAgc2RSVDogRERNTWF0aC5henYyc2QoYSwgeiwgdikKICAgIH07CiAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgcGFyYW1zOiB7CiAgICAgICAgYSwKICAgICAgICB6LAogICAgICAgIHYsCiAgICAgICAgdDAsCiAgICAgICAgcwogICAgICB9LAogICAgICBwcmVkaWN0ZWQKICAgIH0pOwogIH07Cgp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1kZG0tZml0LXdvcmtlci5qcy5tYXAKCg==', 'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uL2FjY3VtdWxhYmxlLW1hdGgvc3JjL2RkbS1tYXRoLmpzIiwiLi4vYWNjdW11bGFibGUtbWF0aC9zcmMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb25cbiAgICB6ID0gc3RhcnRpbmcgcG9pbnQgYXMgYSBwcm9wb3J0aW9uIG9mIGFcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZClcbiAgICB0MCA9IG5vbi1kZWNpc2lvbiB0aW1lIChpbiBtaWxsaXNlY29uZHMpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKVxuXG4gICAgelByaW1lID0gc3RhcnRpbmcgcG9pbnQgb24gYSAwLXRvLWEgc2NhbGUgKHR5cGljYWxseSB1c2VkIGluIHB1Ymxpc2hlZCBlcXVhdGlvbnMpXG5cbiAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6XG4gICAgcEUgPSBwcm9wb3J0aW9uIG9mIGVycm9yIHRyaWFsc1xuICAgIHBDID0gcHJvcG9ydGlvbiBvZiBjb3JyZWN0IHRyaWFsc1xuICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpXG4gICAgbUUgPSBtZWFuIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1DID0gbWVhbiBjb3JyZWN0IFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpXG4gICAgc2RFID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkQyA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBjb3JyZWN0IFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuXG4gIEVxdWF0aW9uczpcbiAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApXG4gICAgTWVhbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSlcbiAgICBTdGFuZGFyZCBkZXZpYXRpb24gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIEVaLWRpZmZ1c2lvbiBtb2RlbCAoV2FnZW5tYWtlcnMgZXQgYWwuLCAyMDA3KVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERETU1hdGgge1xuICBzdGF0aWMgcyA9IDE7XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHtcbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcblxuICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgoLTIgKiB2ICogYSkgLyBzICoqIDIpO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMik7XG5cbiAgICByZXR1cm4gKEEgLSBaKSAvIChBIC0gMSk7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2VcbiAgc3RhdGljIGF6djJwQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7XG4gICAgcmV0dXJuIERETU1hdGguYXp2MnBFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBNZWFuIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenZ0MDJtKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgoLTIgKiB2ICogYSkgLyBzICoqIDIpIC0gMTtcbiAgICBjb25zdCBaID0gTWF0aC5leHAoKC0yICogdiAqIHpQcmltZSkgLyBzICoqIDIpIC0gMTtcblxuICAgIGNvbnN0IHZhcmlhbmNlID0gKFxuICAgICAgKFxuICAgICAgICAoLXYgKiBhICoqIDIgKiAoWiArIDQpICogWikgLyBBICoqIDJcbiAgICAgICkgKyAoXG4gICAgICAgICgoLTMgKiB2ICogYSAqKiAyICsgNCAqIHYgKiB6UHJpbWUgKiBhICsgcyAqKiAyICogYSkgKiBaICsgNCAqIHYgKiB6UHJpbWUgKiBhKSAvIEFcbiAgICAgICkgLSAoXG4gICAgICAgIHMgKiogMiAqIHpQcmltZVxuICAgICAgKVxuICAgICkgLyB2ICoqIDM7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIDEwMDA7XG4gIH1cblxuICAvLyBNZWFuIEVycm9yIFJUXG4gIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSlcbiAgc3RhdGljIGF6dnQwMm1FKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7XG4gICAgZnVuY3Rpb24gcGhpKHgsIHkpIHtcbiAgICAgIHJldHVybiBNYXRoLmV4cCgoMiAqIHYgKiB5KSAvIChzICoqIDIpKSAtIE1hdGguZXhwKCgyICogdiAqIHgpIC8gKHMgKiogMikpO1xuICAgIH1cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcblxuICAgIGNvbnN0IG1lYW4gPSAoelByaW1lICogKHBoaSh6UHJpbWUgLSBhLCBhKSArIHBoaSgwLCB6UHJpbWUpKSArIDIgKiBhICogcGhpKHpQcmltZSwgMCkpXG4gICAgICAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIEVycm9yIFJUXG4gIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSlcbiAgc3RhdGljIGF6djJzZEUoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henZ0MDJtRShhLCAxIC0geiwgLXYsIHQwLCBzKTtcbiAgfVxuXG4gIC8vIFNEIENvcnJlY3QgUlRcbiAgc3RhdGljIGF6djJzZEMoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJzZEUoYSwgMSAtIHosIC12LCBzKTtcbiAgfVxuXG4gIC8vIERlbnNpdHkgb2YgRXJyb3IgUlRcbiAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgdGVybSA9IDA7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZG8ge1xuICAgICAgayArPSAxO1xuXG4gICAgICB0ZXJtID0ga1xuICAgICAgICAqIE1hdGguc2luKChNYXRoLlBJICogelByaW1lICogaykgLyBhKVxuICAgICAgICAqIE1hdGguZXhwKC0wLjUgKiAoKHYgKiogMiAvIHMgKiogMikgKyAoKE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMikgLyBhICoqIDIpKSAqIHQpO1xuXG4gICAgICBzdW0gKz0gdGVybTtcbiAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDS1xuXG4gICAgcmV0dXJuIGJhc2UgKiBzdW07XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIENvcnJlY3QgUlRcbiAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIHJldHVybiBERE1NYXRoLnRhenYyZ0UodCwgYSwgMSAtIHosIC12LCBzKTtcbiAgfVxuXG4gIC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbFxuICAvLyBFWi1mdW5jdGlvbiBmb3Igc3RhcnRpbmcgdmFsdWVzXG4gIC8vIGlucHV0OiBvYmogLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzXG4gIC8vICAgIHBDIC0gUHJvcG9ydGlvbiBjb3JyZWN0XG4gIC8vICAgIHNkIC0gc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgUlQncyBpbiBtc1xuICAvLyAgICBtIC0gc2FtcGxlIG1lYW4gb2YgdGhlIFJUJ3MgaW4gbXNcbiAgLy8gICAgcyAtIGRpZmZ1c2lvbiBzdGFuZGFyZCBkZXZpYXRpb25cbiAgLy8gcmV0dXJuczogT2JqZWN0IHdpdGggcHJvcGVydGllcyB2LCBhLCBhbmQgdDAsIGNvbnRhaW5pbmcgRVotZXN0aW1hdGVzIG9mIHRoZXNlIHBhcmFtZXRlcnNcbiAgc3RhdGljIGRhdGEyZXooe1xuICAgIGFjY3VyYWN5OiBwQyxcbiAgICBzZFJUOiBzZCxcbiAgICBtZWFuUlQ6IG0sXG4gICAgcyxcbiAgfSkge1xuICAgIGZ1bmN0aW9uIHNpZ24ocikge1xuICAgICAgcmV0dXJuICgociA+IDApID8gMSA6ICgociA9PT0gMCkgPyAwIDogLTEpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpdChwKSB7XG4gICAgICByZXR1cm4gTWF0aC5sb2cocCAvICgxIC0gcCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHZydCA9IChzZCAvIDEwMDApICoqIDI7XG4gICAgY29uc3QgbXJ0ID0gbSAvIDEwMDA7XG5cbiAgICBjb25zdCBzMiA9IHMgKiogMjtcbiAgICBjb25zdCBsID0gbG9naXQocEMpO1xuICAgIGNvbnN0IHggPSAobCAqIChsICogcEMgKiogMiAtIGwgKiBwQyArIHBDIC0gMC41KSkgLyB2cnQ7XG4gICAgY29uc3QgdiA9IHNpZ24ocEMgLSAwLjUpICogcyAqIHggKiogKDEgLyA0KTtcbiAgICBjb25zdCBhID0gKHMyICogbG9naXQocEMpKSAvIHY7XG4gICAgY29uc3QgeSA9ICgtdiAqIGEpIC8gczI7XG4gICAgY29uc3QgbWR0ID0gKChhIC8gKDIgKiB2KSkgKiAoMSAtIE1hdGguZXhwKHkpKSkgLyAoMSArIE1hdGguZXhwKHkpKTtcbiAgICBjb25zdCB0MCA9IChtcnQgPyBtcnQgLSBtZHQgOiBudWxsKTsgLy8gY29tcHV0ZSBUZXIgb25seSBpZiBNUlQgd2FzIHByb3ZpZGVkXG5cbiAgICBjb25zdCB0MFByaW1lID0gdDAgKiAxMDAwO1xuICAgIHJldHVybiB7XG4gICAgICB2LFxuICAgICAgYSxcbiAgICAgIHQwOiB0MFByaW1lLFxuICAgICAgcyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGRhdGEyZXoyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZGF0YTJlejIgaXMgbm90IGltcGxlbWVudGVkIScpO1xuICB9XG59XG4iLCJcbi8vIEludGVybmFsIGRlcGVuZGVuY2llc1xuaW1wb3J0IERETU1hdGggZnJvbSAnLi9kZG0tbWF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IERETU1hdGg7XG4iLCIvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1nbG9iYWxzOiBbXCJvZmZcIiwgXCJzZWxmXCJdICovXG5cbmltcG9ydCBERE1NYXRoIGZyb20gJ0BkZWNpZGFibGVzL2FjY3VtdWxhYmxlLW1hdGgnO1xuXG5zZWxmLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBERE1NYXRoLmRhdGEyZXooey4uLmV2ZW50LmRhdGEsIHM6IERETU1hdGguc30pO1xuXG4gIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIVxuICBjb25zdCBhID0gIWlzTmFOKHBhcmFtcy5hKSA/IHBhcmFtcy5hIDogMS41O1xuICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41O1xuICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xO1xuICBjb25zdCB0MCA9ICFpc05hTihwYXJhbXMudDApID8gcGFyYW1zLnQwIDogMTAwO1xuICBjb25zdCBzID0gIWlzTmFOKHBhcmFtcy5zKSA/IHBhcmFtcy5zIDogRERNTWF0aC5zO1xuXG4gIGNvbnN0IHByZWRpY3RlZCA9IHtcbiAgICBhY2N1cmFjeTogRERNTWF0aC5henYycEMoYSwgeiwgdiksXG4gICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksXG4gICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLFxuICAgIG1lYW5SVDogRERNTWF0aC5henZ0MDJtKGEsIHosIHYsIHQwKSxcbiAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLFxuICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLFxuICAgIHNkUlQ6IERETU1hdGguYXp2MnNkKGEsIHosIHYpLFxuICB9O1xuXG4gIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIHBhcmFtczoge1xuICAgICAgYSwgeiwgdiwgdDAsIHMsXG4gICAgfSxcbiAgICBwcmVkaWN0ZWQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJERE1NYXRoIiwicyIsInRyaWFsczJzdGF0cyIsInRyaWFscyIsInN0YXRzIiwic3VtcyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwidHJpYWwiLCJvdXRjb21lIiwiY29ycmVjdENvdW50IiwiY29ycmVjdFJUU3VtIiwicnQiLCJlcnJvckNvdW50IiwiZXJyb3JSVFN1bSIsIm5yQ291bnQiLCJhY2N1cmFjeSIsImNvcnJlY3RNZWFuUlQiLCJlcnJvck1lYW5SVCIsIm1lYW5SVCIsInN1bXMyIiwic3MiLCJjb3JyZWN0U1MiLCJlcnJvclNTIiwiY29ycmVjdFNEUlQiLCJNYXRoIiwic3FydCIsIk5hTiIsImVycm9yU0RSVCIsInNkUlQiLCJhenYycEUiLCJhIiwieiIsInYiLCJ6UHJpbWUiLCJBIiwiZXhwIiwiWiIsImF6djJwQyIsImF6dnQwMm0iLCJ0MCIsIm1lYW4iLCJhenYyc2QiLCJ2YXJpYW5jZSIsImF6dnQwMm1FIiwicGhpIiwieCIsInkiLCJhenYyc2RFIiwiYXp2dDAybUMiLCJhenYyc2RDIiwidGF6djJnRSIsInQiLCJiYXNlIiwiUEkiLCJrIiwidGVybSIsInN1bSIsInNpbiIsInRhenYyZ0MiLCJkYXRhMmV6IiwicEMiLCJzZCIsIm0iLCJzaWduIiwiciIsImxvZ2l0IiwicCIsImxvZyIsInZydCIsIm1ydCIsInMyIiwibCIsIm1kdCIsInQwUHJpbWUiLCJkYXRhMmV6MiIsIkVycm9yIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyYW1zIiwiZGF0YSIsImlzTmFOIiwicHJlZGljdGVkIiwicG9zdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7OztFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNlLE1BQU1BLE9BQU8sQ0FBQztJQUMzQixPQUFPQyxDQUFDLEdBQUcsQ0FBQzs7RUFFWjtJQUNBLE9BQU9DLFlBQVlBLENBQUNDLE1BQU0sRUFBRTtNQUMxQixNQUFNQyxLQUFLLEdBQUcsRUFBRTs7RUFFaEI7TUFDQSxNQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csTUFBTSxDQUN4QixDQUFDQyxXQUFXLEVBQUVDLEtBQUssS0FBSztRQUN0QixRQUFRQSxLQUFLLENBQUNDLE9BQU87RUFDbkIsUUFBQSxLQUFLLFNBQVM7WUFDWkYsV0FBVyxDQUFDRyxZQUFZLElBQUksQ0FBQztFQUM3QkgsVUFBQUEsV0FBVyxDQUFDSSxZQUFZLElBQUlILEtBQUssQ0FBQ0ksRUFBRTtFQUNwQyxVQUFBO0VBQ0YsUUFBQSxLQUFLLE9BQU87WUFDVkwsV0FBVyxDQUFDTSxVQUFVLElBQUksQ0FBQztFQUMzQk4sVUFBQUEsV0FBVyxDQUFDTyxVQUFVLElBQUlOLEtBQUssQ0FBQ0ksRUFBRTtFQUNsQyxVQUFBO0VBQ0YsUUFBQSxLQUFLLElBQUk7WUFDUEwsV0FBVyxDQUFDUSxPQUFPLElBQUksQ0FBQztFQUN4QixVQUFBO0VBRUE7RUFDSjtFQUNBLE1BQUEsT0FBT1IsV0FBVztFQUNwQixLQUFDLEVBQ0Q7RUFDRUcsTUFBQUEsWUFBWSxFQUFFLENBQUM7RUFDZkcsTUFBQUEsVUFBVSxFQUFFLENBQUM7RUFDYkUsTUFBQUEsT0FBTyxFQUFFLENBQUM7RUFFVkosTUFBQUEsWUFBWSxFQUFFLENBQUM7RUFDZkcsTUFBQUEsVUFBVSxFQUFFO0VBQ2QsS0FDRixDQUFDOztFQUVEO0VBQ0FWLElBQUFBLEtBQUssQ0FBQ00sWUFBWSxHQUFHTCxJQUFJLENBQUNLLFlBQVk7RUFDdENOLElBQUFBLEtBQUssQ0FBQ1MsVUFBVSxHQUFHUixJQUFJLENBQUNRLFVBQVU7RUFDbENULElBQUFBLEtBQUssQ0FBQ1csT0FBTyxHQUFHVixJQUFJLENBQUNVLE9BQU87RUFDNUJYLElBQUFBLEtBQUssQ0FBQ1ksUUFBUSxHQUFHWCxJQUFJLENBQUNLLFlBQVksSUFBSUwsSUFBSSxDQUFDSyxZQUFZLEdBQUdMLElBQUksQ0FBQ1EsVUFBVSxHQUFHUixJQUFJLENBQUNVLE9BQU8sQ0FBQztNQUV6RlgsS0FBSyxDQUFDYSxhQUFhLEdBQUdaLElBQUksQ0FBQ00sWUFBWSxHQUFHTixJQUFJLENBQUNLLFlBQVk7TUFDM0ROLEtBQUssQ0FBQ2MsV0FBVyxHQUFHYixJQUFJLENBQUNTLFVBQVUsR0FBR1QsSUFBSSxDQUFDUSxVQUFVO0VBQ3JEVCxJQUFBQSxLQUFLLENBQUNlLE1BQU0sR0FBRyxDQUFDZCxJQUFJLENBQUNNLFlBQVksR0FBR04sSUFBSSxDQUFDUyxVQUFVLEtBQUtULElBQUksQ0FBQ0ssWUFBWSxHQUFHTCxJQUFJLENBQUNRLFVBQVUsQ0FBQzs7RUFFNUY7TUFDQSxNQUFNTyxLQUFLLEdBQUdqQixNQUFNLENBQUNHLE1BQU0sQ0FDekIsQ0FBQ0MsV0FBVyxFQUFFQyxLQUFLLEtBQUs7UUFDdEIsUUFBUUEsS0FBSyxDQUFDQyxPQUFPO0VBQ25CLFFBQUEsS0FBSyxTQUFTO0VBQ1pGLFVBQUFBLFdBQVcsQ0FBQ2MsRUFBRSxJQUFJLENBQUNiLEtBQUssQ0FBQ0ksRUFBRSxHQUFHUixLQUFLLENBQUNlLE1BQU0sS0FBSyxDQUFDO0VBQ2hEWixVQUFBQSxXQUFXLENBQUNlLFNBQVMsSUFBSSxDQUFDZCxLQUFLLENBQUNJLEVBQUUsR0FBR1IsS0FBSyxDQUFDYSxhQUFhLEtBQUssQ0FBQztFQUM5RCxVQUFBO0VBQ0YsUUFBQSxLQUFLLE9BQU87RUFDVlYsVUFBQUEsV0FBVyxDQUFDYyxFQUFFLElBQUksQ0FBQ2IsS0FBSyxDQUFDSSxFQUFFLEdBQUdSLEtBQUssQ0FBQ2UsTUFBTSxLQUFLLENBQUM7RUFDaERaLFVBQUFBLFdBQVcsQ0FBQ2dCLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNJLEVBQUUsR0FBR1IsS0FBSyxDQUFDYyxXQUFXLEtBQUssQ0FBQztFQUMxRCxVQUFBO0VBRUE7RUFDSjtFQUNBLE1BQUEsT0FBT1gsV0FBVztFQUNwQixLQUFDLEVBQ0Q7RUFDRWMsTUFBQUEsRUFBRSxFQUFFLENBQUM7RUFDTEMsTUFBQUEsU0FBUyxFQUFFLENBQUM7RUFDWkMsTUFBQUEsT0FBTyxFQUFFO0VBQ1gsS0FDRixDQUFDOztFQUVEO01BQ0FuQixLQUFLLENBQUNvQixXQUFXLEdBQUlwQixLQUFLLENBQUNNLFlBQVksR0FBRyxDQUFDLEdBQ3ZDZSxJQUFJLENBQUNDLElBQUksQ0FBQ04sS0FBSyxDQUFDRSxTQUFTLElBQUlsQixLQUFLLENBQUNNLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUNyRGlCLEdBQUc7TUFDUHZCLEtBQUssQ0FBQ3dCLFNBQVMsR0FBSXhCLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsR0FDbkNZLElBQUksQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUNHLE9BQU8sSUFBSW5CLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ2pEYyxHQUFHO0VBQ1B2QixJQUFBQSxLQUFLLENBQUN5QixJQUFJLEdBQUl6QixLQUFLLENBQUNNLFlBQVksR0FBR04sS0FBSyxDQUFDUyxVQUFVLEdBQUcsQ0FBQyxHQUNuRFksSUFBSSxDQUFDQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0MsRUFBRSxJQUFJakIsS0FBSyxDQUFDTSxZQUFZLEdBQUdOLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ2pFYyxHQUFHO0VBRVAsSUFBQSxPQUFPdkIsS0FBSztFQUNkOztFQUVBO0VBQ0EsRUFBQSxPQUFPMEIsTUFBTUEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRWhDLENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLEVBQUU7RUFDcEMsSUFBQSxNQUFNaUMsTUFBTSxHQUFHSCxDQUFDLEdBQUdDLENBQUM7RUFFcEIsSUFBQSxNQUFNRyxDQUFDLEdBQUdWLElBQUksQ0FBQ1csR0FBRyxDQUFFLEVBQUUsR0FBR0gsQ0FBQyxHQUFHRixDQUFDLEdBQUk5QixDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pDLElBQUEsTUFBTW9DLENBQUMsR0FBR1osSUFBSSxDQUFDVyxHQUFHLENBQUUsRUFBRSxHQUFHSCxDQUFDLEdBQUdDLE1BQU0sR0FBSWpDLENBQUMsSUFBSSxDQUFDLENBQUM7TUFFOUMsT0FBTyxDQUFDa0MsQ0FBQyxHQUFHRSxDQUFDLEtBQUtGLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDMUI7O0VBRUE7RUFDQSxFQUFBLE9BQU9HLE1BQU1BLENBQUNQLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVoQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3BDLElBQUEsT0FBT0QsT0FBTyxDQUFDOEIsTUFBTSxDQUFDQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFaEMsQ0FBQyxDQUFDO0VBQ3hDOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU9zQyxPQUFPQSxDQUFDUixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFTyxFQUFFLEVBQUV2QyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3pDLElBQUEsTUFBTWlDLE1BQU0sR0FBR0gsQ0FBQyxHQUFHQyxDQUFDO0VBQ3BCLElBQUEsTUFBTUcsQ0FBQyxHQUFHVixJQUFJLENBQUNXLEdBQUcsQ0FBRSxFQUFFLEdBQUdILENBQUMsR0FBR0YsQ0FBQyxHQUFJOUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDN0MsSUFBQSxNQUFNb0MsQ0FBQyxHQUFHWixJQUFJLENBQUNXLEdBQUcsQ0FBRSxFQUFFLEdBQUdILENBQUMsR0FBR0MsTUFBTSxHQUFJakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFbEQsSUFBQSxNQUFNd0MsSUFBSSxHQUFHLEVBQUVQLE1BQU0sR0FBR0QsQ0FBQyxDQUFDLEdBQUlGLENBQUMsR0FBR0UsQ0FBQyxJQUFLSSxDQUFDLEdBQUdGLENBQUMsQ0FBQztFQUM5QyxJQUFBLE9BQU9LLEVBQUUsR0FBR0MsSUFBSSxHQUFHLElBQUk7RUFDekI7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBT0MsTUFBTUEsQ0FBQ1gsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRWhDLENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLEVBQUU7RUFDcEMsSUFBQSxNQUFNaUMsTUFBTSxHQUFHSCxDQUFDLEdBQUdDLENBQUM7RUFDcEIsSUFBQSxNQUFNRyxDQUFDLEdBQUdWLElBQUksQ0FBQ1csR0FBRyxDQUFFLEVBQUUsR0FBR0gsQ0FBQyxHQUFHRixDQUFDLEdBQUk5QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUM3QyxJQUFBLE1BQU1vQyxDQUFDLEdBQUdaLElBQUksQ0FBQ1csR0FBRyxDQUFFLEVBQUUsR0FBR0gsQ0FBQyxHQUFHQyxNQUFNLEdBQUlqQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUVsRCxJQUFBLE1BQU0wQyxRQUFRLEdBQUcsQ0FFWixDQUFDVixDQUFDLEdBQUdGLENBQUMsSUFBSSxDQUFDLElBQUlNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxHQUFJRixDQUFDLElBQUksQ0FBQyxHQUVwQyxDQUFDLENBQUMsRUFBRSxHQUFHRixDQUFDLEdBQUdGLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHRSxDQUFDLEdBQUdDLE1BQU0sR0FBR0gsQ0FBQyxHQUFHOUIsQ0FBQyxJQUFJLENBQUMsR0FBRzhCLENBQUMsSUFBSU0sQ0FBQyxHQUFHLENBQUMsR0FBR0osQ0FBQyxHQUFHQyxNQUFNLEdBQUdILENBQUMsSUFBSUksQ0FDbEYsR0FDQ2xDLENBQUMsSUFBSSxDQUFDLEdBQUdpQyxNQUNWLElBQ0NELENBQUMsSUFBSSxDQUFDO0VBRVYsSUFBQSxPQUFPUixJQUFJLENBQUNDLElBQUksQ0FBQ2lCLFFBQVEsQ0FBQyxHQUFHLElBQUk7RUFDbkM7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBT0MsUUFBUUEsQ0FBQ2IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRU8sRUFBRSxFQUFFdkMsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUMxQyxJQUFBLFNBQVM0QyxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNqQixNQUFBLE9BQU90QixJQUFJLENBQUNXLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsR0FBR2MsQ0FBQyxHQUFLOUMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHd0IsSUFBSSxDQUFDVyxHQUFHLENBQUUsQ0FBQyxHQUFHSCxDQUFDLEdBQUdhLENBQUMsR0FBSzdDLENBQUMsSUFBSSxDQUFFLENBQUM7RUFDNUU7RUFDQSxJQUFBLE1BQU1pQyxNQUFNLEdBQUdILENBQUMsR0FBR0MsQ0FBQztNQUVwQixNQUFNUyxJQUFJLEdBQUcsQ0FBQ1AsTUFBTSxJQUFJVyxHQUFHLENBQUNYLE1BQU0sR0FBR0gsQ0FBQyxFQUFFQSxDQUFDLENBQUMsR0FBR2MsR0FBRyxDQUFDLENBQUMsRUFBRVgsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUdILENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQ2hGRCxDQUFDLEdBQUdZLEdBQUcsQ0FBQ1gsTUFBTSxFQUFFSCxDQUFDLENBQUMsR0FBR2MsR0FBRyxDQUFDLENBQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNyQyxJQUFBLE9BQU9TLEVBQUUsR0FBR0MsSUFBSSxHQUFHLElBQUk7RUFDekI7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBT08sT0FBT0EsQ0FBQ2pCLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVoQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3JDLElBQUEsU0FBUzRDLEdBQUdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQ2pCLE1BQUEsT0FBT3RCLElBQUksQ0FBQ1csR0FBRyxDQUFFLENBQUMsR0FBR0gsQ0FBQyxHQUFHYyxDQUFDLEdBQUs5QyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUd3QixJQUFJLENBQUNXLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsR0FBR2EsQ0FBQyxHQUFLN0MsQ0FBQyxJQUFJLENBQUUsQ0FBQztFQUM1RTtFQUNBLElBQUEsTUFBTWlDLE1BQU0sR0FBR0gsQ0FBQyxHQUFHQyxDQUFDO0VBRXBCLElBQUEsTUFBTVcsUUFBUSxHQUVWLEVBQUUsR0FBR1osQ0FBQyxHQUFHYyxHQUFHLENBQUMsQ0FBQyxFQUFFWCxNQUFNLENBQUMsSUFDbkIsQ0FBQyxHQUFHRCxDQUFDLEdBQUdGLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUUsQ0FBQyxHQUFHSCxDQUFDLENBQUMsR0FBSzlCLENBQUMsSUFBSSxDQUFDLEdBQUc0QyxHQUFHLENBQUMsQ0FBQyxFQUFFZCxDQUFDLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUVILENBQUMsQ0FBRSxDQUFDLEdBQzFFTixJQUFJLENBQUNXLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsR0FBR0YsQ0FBQyxHQUFJOUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUVoQ2dDLENBQUMsSUFBSSxDQUFDLEdBQUdZLEdBQUcsQ0FBQyxDQUFDLEVBQUVkLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUVILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsR0FFRCxDQUNFLENBQUMsR0FBR0UsQ0FBQyxHQUFHQyxNQUFNLElBQUksQ0FBQyxHQUFHSCxDQUFDLEdBQUdHLE1BQU0sQ0FBQyxHQUFHVCxJQUFJLENBQUNXLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsSUFBSUMsTUFBTSxHQUFHSCxDQUFDLENBQUMsR0FBSTlCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDM0VpQyxNQUFNLEdBQUdqQyxDQUFDLElBQUksQ0FBQyxHQUFHNEMsR0FBRyxDQUFDLENBQUMsR0FBR1gsTUFBTSxFQUFFLENBQUMsR0FBR0gsQ0FBQyxDQUFDLEtBRTFDRSxDQUFDLElBQUksQ0FBQyxHQUFHWSxHQUFHLENBQUNYLE1BQU0sRUFBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUUvQjtFQUVELElBQUEsT0FBT04sSUFBSSxDQUFDQyxJQUFJLENBQUNpQixRQUFRLENBQUMsR0FBRyxJQUFJO0VBQ25DOztFQUVBO0VBQ0EsRUFBQSxPQUFPTSxRQUFRQSxDQUFDbEIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRU8sRUFBRSxFQUFFdkMsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUMxQyxJQUFBLE9BQU9ELE9BQU8sQ0FBQzRDLFFBQVEsQ0FBQ2IsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRU8sRUFBRSxFQUFFdkMsQ0FBQyxDQUFDO0VBQzlDOztFQUVBO0VBQ0EsRUFBQSxPQUFPaUQsT0FBT0EsQ0FBQ25CLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVoQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3JDLElBQUEsT0FBT0QsT0FBTyxDQUFDZ0QsT0FBTyxDQUFDakIsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRWhDLENBQUMsQ0FBQztFQUN6Qzs7RUFFQTtFQUNBLEVBQUEsT0FBT2tELE9BQU9BLENBQUNDLENBQUMsRUFBRXJCLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVoQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3hDLElBQUEsSUFBSSxDQUFDbUQsQ0FBQyxFQUFFLE9BQU8sQ0FBQztFQUVoQixJQUFBLE1BQU1sQixNQUFNLEdBQUdILENBQUMsR0FBR0MsQ0FBQztNQUNwQixNQUFNcUIsSUFBSSxHQUFLNUIsSUFBSSxDQUFDNkIsRUFBRSxHQUFHckQsQ0FBQyxJQUFJLENBQUMsR0FBSThCLENBQUMsSUFBSSxDQUFDLEdBQUlOLElBQUksQ0FBQ1csR0FBRyxDQUFFLENBQUNGLE1BQU0sR0FBR0QsQ0FBQyxHQUFJaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUU3RSxJQUFJc0QsQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJQyxJQUFJLEdBQUcsQ0FBQztNQUNaLElBQUlDLEdBQUcsR0FBRyxDQUFDO01BQ1gsR0FBRztFQUNERixNQUFBQSxDQUFDLElBQUksQ0FBQztRQUVOQyxJQUFJLEdBQUdELENBQUMsR0FDSjlCLElBQUksQ0FBQ2lDLEdBQUcsQ0FBRWpDLElBQUksQ0FBQzZCLEVBQUUsR0FBR3BCLE1BQU0sR0FBR3FCLENBQUMsR0FBSXhCLENBQUMsQ0FBQyxHQUNwQ04sSUFBSSxDQUFDVyxHQUFHLENBQUMsSUFBSSxJQUFLSCxDQUFDLElBQUksQ0FBQyxHQUFHaEMsQ0FBQyxJQUFJLENBQUMsR0FBTXdCLElBQUksQ0FBQzZCLEVBQUUsSUFBSSxDQUFDLEdBQUdDLENBQUMsSUFBSSxDQUFDLEdBQUd0RCxDQUFDLElBQUksQ0FBQyxHQUFJOEIsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHcUIsQ0FBQyxDQUFDO0VBRTFGSyxNQUFBQSxHQUFHLElBQUlELElBQUk7RUFDYixLQUFDLFFBQVFELENBQUMsR0FBRyxHQUFHLEVBQUU7O01BRWxCLE9BQU9GLElBQUksR0FBR0ksR0FBRztFQUNuQjs7RUFFQTtFQUNBLEVBQUEsT0FBT0UsT0FBT0EsQ0FBQ1AsQ0FBQyxFQUFFckIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRWhDLENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLEVBQUU7RUFDeEMsSUFBQSxPQUFPRCxPQUFPLENBQUNtRCxPQUFPLENBQUNDLENBQUMsRUFBRXJCLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUMsRUFBRSxDQUFDQyxDQUFDLEVBQUVoQyxDQUFDLENBQUM7RUFDNUM7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUEsT0FBTzJELE9BQU9BLENBQUM7RUFDYjVDLElBQUFBLFFBQVEsRUFBRTZDLEVBQUU7RUFDWmhDLElBQUFBLElBQUksRUFBRWlDLEVBQUU7RUFDUjNDLElBQUFBLE1BQU0sRUFBRTRDLENBQUM7RUFDVDlELElBQUFBO0VBQ0YsR0FBQyxFQUFFO01BQ0QsU0FBUytELElBQUlBLENBQUNDLENBQUMsRUFBRTtFQUNmLE1BQUEsT0FBU0EsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUtBLENBQUMsS0FBSyxDQUFDLEdBQUksQ0FBQyxHQUFHLEVBQUc7RUFDNUM7TUFFQSxTQUFTQyxLQUFLQSxDQUFDQyxDQUFDLEVBQUU7UUFDaEIsT0FBTzFDLElBQUksQ0FBQzJDLEdBQUcsQ0FBQ0QsQ0FBQyxJQUFJLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUM7RUFDOUI7RUFFQSxJQUFBLE1BQU1FLEdBQUcsR0FBRyxDQUFDUCxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUM7RUFDNUIsSUFBQSxNQUFNUSxHQUFHLEdBQUdQLENBQUMsR0FBRyxJQUFJO0VBRXBCLElBQUEsTUFBTVEsRUFBRSxHQUFHdEUsQ0FBQyxJQUFJLENBQUM7RUFDakIsSUFBQSxNQUFNdUUsQ0FBQyxHQUFHTixLQUFLLENBQUNMLEVBQUUsQ0FBQztFQUNuQixJQUFBLE1BQU1mLENBQUMsR0FBSTBCLENBQUMsSUFBSUEsQ0FBQyxHQUFHWCxFQUFFLElBQUksQ0FBQyxHQUFHVyxDQUFDLEdBQUdYLEVBQUUsR0FBR0EsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFJUSxHQUFHO0VBQ3ZELElBQUEsTUFBTXBDLENBQUMsR0FBRytCLElBQUksQ0FBQ0gsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHNUQsQ0FBQyxHQUFHNkMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDM0MsTUFBTWYsQ0FBQyxHQUFJd0MsRUFBRSxHQUFHTCxLQUFLLENBQUNMLEVBQUUsQ0FBQyxHQUFJNUIsQ0FBQztFQUM5QixJQUFBLE1BQU1jLENBQUMsR0FBSSxDQUFDZCxDQUFDLEdBQUdGLENBQUMsR0FBSXdDLEVBQUU7TUFDdkIsTUFBTUUsR0FBRyxHQUFLMUMsQ0FBQyxJQUFJLENBQUMsR0FBR0UsQ0FBQyxDQUFDLElBQUssQ0FBQyxHQUFHUixJQUFJLENBQUNXLEdBQUcsQ0FBQ1csQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDLEdBQUd0QixJQUFJLENBQUNXLEdBQUcsQ0FBQ1csQ0FBQyxDQUFDLENBQUM7TUFDbkUsTUFBTVAsRUFBRSxHQUFJOEIsR0FBRyxHQUFHQSxHQUFHLEdBQUdHLEdBQUcsR0FBRyxJQUFLLENBQUM7O0VBRXBDLElBQUEsTUFBTUMsT0FBTyxHQUFHbEMsRUFBRSxHQUFHLElBQUk7TUFDekIsT0FBTztRQUNMUCxDQUFDO1FBQ0RGLENBQUM7RUFDRFMsTUFBQUEsRUFBRSxFQUFFa0MsT0FBTztFQUNYekUsTUFBQUE7T0FDRDtFQUNIO0lBRUEsT0FBTzBFLFFBQVFBLEdBQUc7RUFDaEIsSUFBQSxNQUFNLElBQUlDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztFQUNqRDtFQUNGOztFQzdSQTs7RUNEQTs7RUFJQUMsSUFBSSxDQUFDQyxTQUFTLEdBQUlDLEtBQUssSUFBSztFQUMxQixFQUFBLE1BQU1DLE1BQU0sR0FBR2hGLE9BQU8sQ0FBQzRELE9BQU8sQ0FBQztNQUFDLEdBQUdtQixLQUFLLENBQUNFLElBQUk7TUFBRWhGLENBQUMsRUFBRUQsT0FBTyxDQUFDQztFQUFDLEdBQUMsQ0FBQzs7RUFFN0Q7RUFDQSxFQUFBLE1BQU04QixDQUFDLEdBQUcsQ0FBQ21ELEtBQUssQ0FBQ0YsTUFBTSxDQUFDakQsQ0FBQyxDQUFDLEdBQUdpRCxNQUFNLENBQUNqRCxDQUFDLEdBQUcsR0FBRztFQUMzQyxFQUFBLE1BQU1DLENBQUMsR0FBRyxDQUFDa0QsS0FBSyxDQUFDRixNQUFNLENBQUNoRCxDQUFDLENBQUMsR0FBR2dELE1BQU0sQ0FBQ2hELENBQUMsR0FBRyxHQUFHO0VBQzNDLEVBQUEsTUFBTUMsQ0FBQyxHQUFHLENBQUNpRCxLQUFLLENBQUNGLE1BQU0sQ0FBQy9DLENBQUMsQ0FBQyxHQUFHK0MsTUFBTSxDQUFDL0MsQ0FBQyxHQUFHLEdBQUc7RUFDM0MsRUFBQSxNQUFNTyxFQUFFLEdBQUcsQ0FBQzBDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDeEMsRUFBRSxDQUFDLEdBQUd3QyxNQUFNLENBQUN4QyxFQUFFLEdBQUcsR0FBRztFQUM5QyxFQUFBLE1BQU12QyxDQUFDLEdBQUcsQ0FBQ2lGLEtBQUssQ0FBQ0YsTUFBTSxDQUFDL0UsQ0FBQyxDQUFDLEdBQUcrRSxNQUFNLENBQUMvRSxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQztFQUVqRCxFQUFBLE1BQU1rRixTQUFTLEdBQUc7TUFDaEJuRSxRQUFRLEVBQUVoQixPQUFPLENBQUNzQyxNQUFNLENBQUNQLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDakNoQixJQUFBQSxhQUFhLEVBQUVqQixPQUFPLENBQUNpRCxRQUFRLENBQUNsQixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFTyxFQUFFLENBQUM7RUFDNUN0QixJQUFBQSxXQUFXLEVBQUVsQixPQUFPLENBQUM0QyxRQUFRLENBQUNiLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVPLEVBQUUsQ0FBQztFQUMxQ3JCLElBQUFBLE1BQU0sRUFBRW5CLE9BQU8sQ0FBQ3VDLE9BQU8sQ0FBQ1IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRU8sRUFBRSxDQUFDO01BQ3BDaEIsV0FBVyxFQUFFeEIsT0FBTyxDQUFDa0QsT0FBTyxDQUFDbkIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztNQUNyQ0wsU0FBUyxFQUFFNUIsT0FBTyxDQUFDZ0QsT0FBTyxDQUFDakIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsQ0FBQztNQUNuQ0osSUFBSSxFQUFFN0IsT0FBTyxDQUFDMEMsTUFBTSxDQUFDWCxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQztLQUM3QjtJQUVENEMsSUFBSSxDQUFDTyxXQUFXLENBQUM7RUFDZkosSUFBQUEsTUFBTSxFQUFFO1FBQ05qRCxDQUFDO1FBQUVDLENBQUM7UUFBRUMsQ0FBQztRQUFFTyxFQUFFO0VBQUV2QyxNQUFBQTtPQUNkO0VBQ0RrRixJQUFBQTtFQUNGLEdBQUMsQ0FBQztFQUNKLENBQUM7Ozs7OzsifQ==');
  /* eslint-enable */

  /*
    DDMFit element
    <ddm-fit>

    Attributes:
      interactive: true/false
  */
  class DDMFit extends AccumulableElement {
    static get properties() {
      return {};
    }
    constructor() {
      super();
      this.a = 1.2;
      this.z = 0.35;
      this.v = 1.5;
      this.t0 = 150;
      this.observed = {};
      this.predicted = {};
      this.working = false;
      this.queued = false;
      this.worker = new WorkerFactory();
      this.worker.onmessage = event => {
        this.working = false;
        this.predicted = event.data.predicted;
        this.a = event.data.params.a;
        this.z = event.data.params.z;
        this.v = event.data.params.v;
        this.t0 = event.data.params.t0;
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('ddm-fit-update', {
          detail: {
            a: this.a,
            z: this.z,
            v: this.v,
            t0: this.t0
          },
          bubbles: true
        }));
        if (this.queued) {
          this.fit();
        }
      };
      this.fit();
    }
    fit() {
      if (!this.working) {
        this.worker.postMessage(this.observed);
        this.working = true;
        this.queued = false;
      } else {
        this.queued = true;
      }
    }
    clear() {
      this.observed = {};
      this.fit();
    }
    set(data) {
      // Deep copy
      this.observed = structuredClone(data);
      this.fit();
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;
        }
      `];
    }
    render() {
      return x$1`
      <div>
        <div><b>Observed:</b>
          <br/>Accuracy = ${this.observed.accuracy?.toFixed(2)},
          <br/>Correct Mean RT = ${this.observed.correctMeanRT?.toFixed(0)},
          Error Mean RT = ${this.observed.errorMeanRT?.toFixed(0)},
          Mean RT = ${this.observed.meanRT?.toFixed(0)},
          <br/>Correct SD RT = ${this.observed.correctSDRT?.toFixed(0)},
          Error SD RT = ${this.observed.errorSDRT?.toFixed(0)},
          SD RT = ${this.observed.sdRT?.toFixed(0)},
        </div>
        <div><b>Parameters:</b>
          <br/><var class="math-var a">a</var> = ${this.a.toFixed(2)},
          <var class="math-var z">z</var> = ${this.z.toFixed(2)},
          <var class="math-var v">v</var> = ${this.v.toFixed(2)},
          <var class="math-var t0">t0</var> = ${this.t0.toFixed(0)}
        </div>
        <div><b>Predicted:</b>
          <br/>Accuracy = ${this.predicted.accuracy?.toFixed(2)},
          <br/>Correct Mean RT = ${this.predicted.correctMeanRT?.toFixed(0)},
          Error Mean RT = ${this.predicted.errorMeanRT?.toFixed(0)},
          Mean RT = ${this.predicted.meanRT?.toFixed(0)},
          <br/>Correct SD RT = ${this.predicted.correctSDRT?.toFixed(0)},
          Error SD RT = ${this.predicted.errorSDRT?.toFixed(0)},
          SD RT = ${this.predicted.sdRT?.toFixed(0)},
        </div>
      </div>
    `;
    }
  }
  customElements.define('ddm-fit', DDMFit);

  /*
    DDMParameters element
    <ddm-paramters>

    Attributes:

  */
  class DDMParameters extends AccumulableElement {
    static get properties() {
      return {
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        t0: {
          attribute: 'nondecision-time',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.a = undefined;
      this.z = undefined;
      this.v = undefined;
      this.t0 = undefined;
    }
    setBoundarySeparation(e) {
      this.a = +e.target.value;
      this.dispatchEvent(new CustomEvent('ddm-parameters-a', {
        detail: {
          a: this.a
        },
        bubbles: true
      }));
    }
    setStartingPoint(e) {
      this.z = +e.target.value;
      this.dispatchEvent(new CustomEvent('ddm-parameters-z', {
        detail: {
          z: this.z
        },
        bubbles: true
      }));
    }
    setDriftRate(e) {
      this.v = +e.target.value;
      this.dispatchEvent(new CustomEvent('ddm-parameters-v', {
        detail: {
          v: this.v
        },
        bubbles: true
      }));
    }
    setNondecisionTime(e) {
      this.t0 = +e.target.value;
      this.dispatchEvent(new CustomEvent('ddm-parameters-t0', {
        detail: {
          t0: this.t0
        },
        bubbles: true
      }));
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;
        }

        .holder {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        decidables-slider {
          line-height: 1;
          text-align: center;
        }

        decidables-slider  div {
          margin-bottom: 0.25rem;
        }
      `];
    }
    render() {
      return x$1`
      <div class="holder">
        ${this.a != null ? x$1`<decidables-slider class="a" ?disabled=${!this.interactive} min="0.01" max="2" step="0.01" .value=${+this.a.toFixed(2)} @change=${this.setBoundarySeparation.bind(this)} @input=${this.setBoundarySeparation.bind(this)}><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>` : x$1``}
        ${this.z != null ? x$1`<decidables-slider class="z" ?disabled=${!this.interactive} min="0.01" max="0.99" step="0.01" .value=${+this.z.toFixed(2)} @change=${this.setStartingPoint.bind(this)} @input=${this.setStartingPoint.bind(this)}><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>` : x$1``}
        ${this.v != null ? x$1`<decidables-slider class="v" ?disabled=${!this.interactive} min="0.01" max="5" step="0.01" .value=${+this.v.toFixed(2)} @change=${this.setDriftRate.bind(this)} @input=${this.setDriftRate.bind(this)}><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>` : x$1``}
        ${this.t0 != null ? x$1`<decidables-slider class="t0" ?disabled=${!this.interactive} min="0" max="500" step="1" .value=${+this.t0.toFixed(0)} @change=${this.setNondecisionTime.bind(this)} @input=${this.setNondecisionTime.bind(this)}><div>Nondecision Time<br><span class="math-var">t₀</span></div></decidables-slider>` : x$1``}
      </div>`;
    }
  }
  customElements.define('ddm-parameters', DDMParameters);

  /*
    DDMModel element
    <ddm-model>

    Attributes:
      interactive: true/false

      measures: boolean
      means: boolean

      seed: numeric
      trials: numeric

      a: numeric
      z: numeric
      v: numeric
      t0: numeric

      // s: numeric
      // sz: numeric
      // eta: numeric
      // st: numeric

    Styles:
      ??
  */
  class DDMModel extends DecidablesMixinResizeable(AccumulableElement) {
    static get properties() {
      return {
        measures: {
          attribute: 'measures',
          type: Boolean,
          reflect: true
        },
        means: {
          attribute: 'means',
          type: Boolean,
          reflect: true
        },
        sds: {
          attribute: 'sds',
          type: Boolean,
          reflect: true
        },
        human: {
          attribute: 'human',
          type: Boolean,
          reflect: true
        },
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        seed: {
          attribute: 'seed',
          type: Number,
          reflect: true
        },
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        t0: {
          attribute: 'nondecision-time',
          type: Number,
          reflect: true
        }

        // s: {
        //   attribute: false, // within-trial variability in drift rate
        //   type: Number,
        //   reflect: false,
        // },
        // sz: {
        //   attribute: false, // starting point range
        //   type: Number,
        //   reflect: false,
        // },
        // eta: {
        //   attribute: false, // standard deviation for across-trial variability in drift rate
        //   type: Number,
        //   reflect: false,
        // },
        // st: {
        //   attribute: false, // nondecision-time range
        //   type: Number,
        //   reflect: false,
        // },
      };
    }
    constructor() {
      super();
      this.firstUpdate = true;
      this.drag = false;
      this.scale = {
        time: {
          min: 0,
          max: 1000,
          step: 1,
          round: Math.round
        },
        evidence: {
          min: -1,
          max: 1,
          step: 0.01,
          round: Math.round
        },
        density: {
          min: 0,
          max: 10,
          step: 0.01,
          round: Math.round
        }
      };
      this.measures = false;
      this.means = false;
      this.sds = false;
      this.resample();
      this.human = false;
      this.trials = 10;
      this.a = 1.2;
      this.z = 0.35;
      this.v = 1.5;
      this.t0 = 150;

      // this.s = null;
      // this.sz = null;
      // this.eta = null;
      // this.st = null;

      this.precision = 0.005;
      this.random = null;
      this.bounds = null;
      this.startingPoint = null;
      this.data = {};
      this.model = {};
      this.animate = false;
      this.paused = false;
      this.alignState();
    }
    clear() {
      this.trials = 0;
      this.data.trials = [];
    }
    trial(trial = {}) {
      this.trials += 1;
      if (this.human) {
        this.data.trials.push(trial);
      } else {
        this.animate = true;
      }
    }

    // Called to pause trial animations!
    pauseTrial() {
      const pathNew = select(this.renderRoot).select('.path[data-new-trial-ease-time]');
      pathNew.interrupt('new').select('.curve').interrupt('new');
      this.paused = true;
    }

    // Called to resume trial animations!
    resumeTrial() {
      this.paused = false;
      this.requestUpdate();
    }
    resample() {
      this.seed = uniform(0, 1)();
    }
    alignPath(seed, a, z, v, t0) {
      const random = normal.source(lcg(seed))(0, this.precision ** 0.5);
      const bounds = {
        lower: -a / 2,
        upper: a / 2
      };
      const startingPoint = a * z - a / 2;
      const drift = v * this.precision;
      const path = [];
      path.push({
        t: t0,
        e: startingPoint
      });
      while (path.at(-1).e > bounds.lower && path.at(-1).e < bounds.upper) {
        path.push({
          t: path.at(-1).t + this.precision * 1000,
          e: path.at(-1).e + drift + DDMMath.s * random()
        });
      }
      return path;
    }
    alignCorrectDistribution(a, z, v, t0) {
      const proportionCorrect = DDMMath.azv2pC(a, z, v);
      const dist = [{
        t: 0,
        d: 0
      }, {
        t: this.t0,
        d: 0
      }];
      for (let i = this.scale.time.min; i <= this.scale.time.max - t0; i += this.scale.time.step) {
        if (i > 0) {
          dist.push({
            t: t0 + i,
            d: DDMMath.tazv2gC(i / 1000, a, z, v) / proportionCorrect
          });
        }
      }
      return dist;
    }
    alignErrorDistribution(a, z, v, t0) {
      const proportionError = DDMMath.azv2pE(a, z, v);
      const dist = [{
        t: 0,
        d: 0
      }, {
        t: this.t0,
        d: 0
      }];
      for (let i = this.scale.time.min; i <= this.scale.time.max - t0; i += this.scale.time.step) {
        if (i > 0) {
          dist.push({
            t: t0 + i,
            d: DDMMath.tazv2gE(i / 1000, a, z, v) / proportionError
          });
        }
      }
      return dist;
    }
    alignState() {
      this.random = uniform.source(lcg(this.seed))(0, 1);
      this.bounds = {
        lower: -this.a / 2,
        upper: this.a / 2
      };
      this.startingPoint = this.a * this.z - this.a / 2;

      // Data Trials
      if (this.human) {
        this.trials = this.data.trials.length;
      } else {
        this.data.trials = Array.from({
          length: this.trials
        }, (element, index) => {
          const seed = this.random() / 1000 * 997; // HACK to avoid randomLcg repetition
          const animate = this.animate && index === this.trials - 1;

          // Sample Paths
          const path = this.alignPath(seed, this.a, this.z, this.v, this.t0);
          const outcome = path.at(-1).e <= this.bounds.lower ? 'error' : path.at(-1).e >= this.bounds.upper ? 'correct' : 'nr';
          const rt = outcome === 'error' ? path.at(-2).t + (this.bounds.lower - path.at(-2).e) / (path.at(-1).e - path.at(-2).e) * (this.precision * 1000) : outcome === 'correct' ? path.at(-2).t + (this.bounds.upper - path.at(-2).e) / (path.at(-1).e - path.at(-2).e) * (this.precision * 1000) : null;
          return {
            index,
            seed,
            path,
            rt,
            outcome,
            animate
          };
        });
      }

      // Data Summary Stats
      const dataStats = DDMMath.trials2stats(this.data.trials.filter(path => {
        return !path.animate;
      }));
      this.data = {
        ...this.data,
        ...dataStats
      };

      // Model Summary Stats
      this.model.accuracy = DDMMath.azv2pC(this.a, this.z, this.v);
      this.model.correctMeanRT = DDMMath.azvt02mC(this.a, this.z, this.v, this.t0);
      this.model.errorMeanRT = DDMMath.azvt02mE(this.a, this.z, this.v, this.t0);
      this.model.correctSDRT = DDMMath.azv2sdC(this.a, this.z, this.v);
      this.model.errorSDRT = DDMMath.azv2sdE(this.a, this.z, this.v);

      // Model Distributions
      this.model.correctDist = this.alignCorrectDistribution(this.a, this.z, this.v, this.t0);
      this.model.errorDist = this.alignErrorDistribution(this.a, this.z, this.v, this.t0);
      this.dispatchEvent(new CustomEvent('ddm-model-output', {
        detail: {
          data: this.data,
          model: this.model
        },
        bubbles: true
      }));
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;

          width: 27rem;
          height: 18rem;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        text {
          /* stylelint-disable property-no-vendor-prefix */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /*  
          UNDERLAYER
        */
        .background {
          fill: var(---color-element-background);
          stroke: none;
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title {
          font-weight: 600;

          fill: currentColor;
        }

        .axis path,
        .axis line {
          stroke: var(---color-element-border);
          /* shape-rendering: crispEdges; */
        }

        .tick {
          font-size: 0.75rem;
        }

        /*  
          CONTENT
        */
        .line {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .curve {
          stroke-width: 2;
        }

        .path .curve {
          opacity: 0.5;

          fill: none;

          transition: opacity 0.5s;
        }

        .path.highlight .curve {
          filter: url("#shadow-2");
          opacity: 1;
        }

        .path.correct .curve {
          /* stroke: var(---color-correct); */
        }

        .path.error .curve {
          /* stroke: var(---color-error); */
        }

        .stop-0 {
          stop-color: var(---color-correct);
        }

        .stop-100 {
          stop-color: var(---color-error);
        }

        .path.animate .curve {
          opacity: 1;

          stroke: url("#path-animate");
        }

        .dist.correct .curve {
          fill: var(---color-correct-light);
          stroke: var(---color-correct);
        }

        .dist.error .curve {
          fill: var(---color-error-light);
          stroke: var(---color-error);
        }

        .rt .mark {
          stroke-width: 1;
        }

        .accuracy.model .bar {
          stroke: none;
        }

        .accuracy.model.correct .bar {
          fill: var(---color-correct);
        }

        .accuracy.model.error .bar {
          fill: var(---color-error);
        }

        .accuracy.data .mark {
          stroke-width: 2;
        }

        .accuracy.data.correct .mark {
          stroke: var(---color-correct-light);
        }

        .accuracy.data.error .mark {
          stroke: var(---color-error-light);
        }

        /*
          OVERLAYER
        */
        .interactive {
          filter: url("#shadow-2");
          outline: none;
        }

        .interactive:hover {
          filter: url("#shadow-4");
        }

        .interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .interactive:focus {
          filter: url("#shadow-8");
        }

        .boundary {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .boundary.interactive {
          cursor: ns-resize;
        }

        .drift {
          pointer-events: visible;

          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-dasharray: 8 4;
          stroke-width: 2;
        }

        .drift.interactive {
          cursor: ns-resize;
        }

        .drift .arrow {
          stroke-dasharray: none;
        }

        .t0z.interactive {
          cursor: move;
        }

        .t0z .point {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .measure {
          stroke-width: 2;
        }

        .measure .label {
          font-size: 0.75rem;

          fill: currentColor;
        }

        .measure.a .line {
          stroke: var(---color-a);
        }

        .measure.a .label {
          dominant-baseline: auto;
          text-anchor: end;
        }

        .measure.z .line {
          stroke: var(---color-z);
        }

        .measure.z .label {
          dominant-baseline: hanging;
          text-anchor: start;
        }

        .measure.v .line {
          stroke: var(---color-v);
        }

        .measure.v .label {
          dominant-baseline: auto;
          text-anchor: start;
        }

        .measure.t0 .line {
          stroke: var(---color-t0);
        }

        .measure.t0 .label {
          dominant-baseline: auto;
          text-anchor: middle;
        }

        .sd .indicator,
        .mean .indicator {
          stroke-width: 2;
        }

        .sd.model .indicator,
        .mean.model .indicator {
          stroke-dasharray: 2 2;
        }

        .sd.data .indicator,
        .mean.data .indicator {
          stroke-dasharray: 1 1;
        }

        .sd.correct .indicator,
        .mean.correct .indicator {
          stroke: var(---color-correct-dark);
        }

        .sd.error .indicator,
        .mean.error .indicator {
          stroke: var(---color-error-dark);
        }

        .rt-label rect {
          filter: url("#shadow-2");

          fill: var(--color-background);
          rx: 4;
        }

        .rt-label text {
          font-size: 0.75rem;
          
          text-anchor: middle;
        }

        .rt-label.correct text {
          dominant-baseline: auto;
        }

        .rt-label.error text {
          dominant-baseline: hanging;
        }
      `];
    }
    render() {
      /* eslint-disable-line class-methods-use-this */
      return x$1``;
    }
    willUpdate() {
      this.alignState();
    }
    update(changedProperties) {
      super.update(changedProperties);

      // Bail out if we can't get the width/height
      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }
      const hostWidth = this.width;
      const hostHeight = this.height;
      const hostAspectRatio = hostWidth / hostHeight;
      const elementAspectRatio = 1.5;
      let elementWidth;
      let elementHeight;
      if (hostAspectRatio > elementAspectRatio) {
        elementHeight = hostHeight;
        elementWidth = elementHeight * elementAspectRatio;
      } else {
        elementWidth = hostWidth;
        elementHeight = elementWidth / elementAspectRatio;
      }
      const margin = {
        top: 1 * this.rem,
        bottom: 3 * this.rem,
        left: 3.75 * this.rem,
        right: 3.25 * this.rem
      };
      const height = elementHeight - (margin.top + margin.bottom);
      const width = elementWidth - (margin.left + margin.right);
      const gapHeight = 0.75 * this.rem;
      const evidenceHeight = height * 0.5;
      const densityHeight = height * 0.25 - gapHeight;
      const gapWidth = 0.75 * this.rem;
      const timeWidth = width * 0.90;
      const accuracyWidth = width * 0.10 - gapWidth;
      const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

      //
      // SCALES
      //

      // Time Scale
      const timeScale = linear().domain([this.scale.time.min, this.scale.time.max]).range([0, timeWidth]);

      // Evidence Scale
      const evidenceScale = linear().domain([this.scale.evidence.min, this.scale.evidence.max]).range([evidenceHeight, 0]);

      // Correct Density Scale
      const correctDensityScale = linear().domain([this.scale.density.min, this.scale.density.max]).range([densityHeight, 0]);

      // Error Density Scale
      const errorDensityScale = linear().domain([this.scale.density.min, this.scale.density.max]).range([0, densityHeight]);

      // Accuracy Scale
      const accuracyScale = linear().domain([0, 1]).range([0, height]);

      //
      // DRAG BEHAVIORS
      //

      // Nondecision Time/Starting Point Drag behavior
      const dragT0z = drag().subject((event, datum) => {
        return {
          x: timeScale(datum.t0),
          y: evidenceScale(datum.startingPoint)
        };
      }).on('start', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', event => {
        this.drag = true;
        const shift = event.sourceEvent.shiftKey ? Math.abs(event.x - event.subject.x) > Math.abs(event.y - event.subject.y) ? 't0' : 'z' : false;
        let t0 = timeScale.invert(event.x);
        let z = (evidenceScale.invert(event.y) + this.a / 2) / this.a;
        // Clamp t0
        t0 = shift === 'z' ? timeScale.invert(event.subject.x) : t0 < 0 ? 0 : t0 > 500 ? 500 : t0;
        // Clamp z
        z = shift === 't0' ? (evidenceScale.invert(event.subject.y) + this.a / 2) / this.a : z < 0.01 ? 0.01 : z > 0.99 ? 0.99 : z;
        this.t0 = t0;
        this.z = z;
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-t0', {
          detail: {
            t0: this.t0
          },
          bubbles: true
        }));
        this.dispatchEvent(new CustomEvent('ddm-model-z', {
          detail: {
            z: this.z
          },
          bubbles: true
        }));
      }).on('end', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', false);
        this.drag = false;
      });

      // Drift Rate Drag behavior
      const dragDrift = drag().on('start', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', event => {
        this.drag = true;
        let v = (evidenceScale.invert(event.y) - this.startingPoint) / (timeScale.invert(event.x) - this.t0) * 1000;
        // Clamp drift rate
        v = v < 0.01 ? 0.01 : v > 5 ? 5 : v;
        this.v = v;
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-v', {
          detail: {
            v: this.v
          },
          bubbles: true
        }));
      }).on('end', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', false);
        this.drag = false;
      });

      // Boundary Drag behavior
      const dragBoundary = drag().subject((event, datum) => {
        return {
          x: 0,
          y: evidenceScale(datum.value)
        };
      }).on('start', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', (event, datum) => {
        this.drag = true;
        let boundary = evidenceScale.invert(event.y);
        // Clamp boundaries to visible evidence
        boundary = boundary < this.scale.evidence.min ? this.scale.evidence.min : boundary > this.scale.evidence.max ? this.scale.evidence.max : datum.bound === 'upper' && boundary < 0.005 ? 0.005 : datum.bound === 'lower' && boundary > -5e-3 ? -5e-3 : boundary;
        this.a = Math.abs(boundary * 2);
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-a', {
          detail: {
            a: this.a
          },
          bubbles: true
        }));
      }).on('end', event => {
        const element = event.currentTarget;
        select(element).classed('dragging', false);
        this.drag = false;
      });

      //
      // LINES
      //

      // Line for time/evidence space
      const evidenceLine = line().x(datum => {
        return timeScale(datum.t);
      }).y(datum => {
        return evidenceScale(datum.e);
      });

      // Line for correct time/density space
      const correctDensityLine = line().x(datum => {
        return timeScale(datum.t);
      }).y(datum => {
        return correctDensityScale(datum.d);
      });

      // Line for error time/density space
      const errorDensityLine = line().x(datum => {
        return timeScale(datum.t);
      }).y(datum => {
        return errorDensityScale(datum.d);
      });

      //
      // PLOTS
      //

      // Svg
      //  DATA-JOIN
      const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]);
      //  ENTER
      const svgEnter = svgUpdate.enter().append('svg').classed('main', true).html(AccumulableElement.svgDefs);
      const svgDefs = svgEnter.append('defs');
      // Arrowhead marker for measures
      svgDefs.append('marker').attr('id', 'measure-arrow').attr('orient', 'auto-start-reverse').attr('markerUnits', 'userSpaceOnUse').attr('viewBox', '-5 -5 10 10').attr('refX', '2').attr('refY', '0').attr('markerWidth', '10').attr('markerHeight', '10').append('path').attr('stroke', 'context-stroke').attr('fill', 'context-stroke').attr('d', 'M -3 -3 l 6 3 l -6 3 z');
      // Flat markers for SDs
      svgDefs.append('marker').attr('id', 'model-sd-cap').attr('orient', 'auto-start-reverse').attr('markerUnits', 'userSpaceOnUse').attr('viewBox', '-5 -5 10 10').attr('refX', '0').attr('refY', '0').attr('markerWidth', '10').attr('markerHeight', '10').append('path').attr('stroke', 'context-stroke').attr('fill', 'context-stroke').attr('stroke-width', '2').attr('d', 'M 0 -4 l 0 8');
      svgDefs.append('marker').attr('id', 'data-sd-cap').attr('orient', 'auto-start-reverse').attr('markerUnits', 'userSpaceOnUse').attr('viewBox', '-5 -5 10 10').attr('refX', '0').attr('refY', '0').attr('markerWidth', '10').attr('markerHeight', '10').append('path').attr('stroke', 'context-stroke').attr('fill', 'context-stroke').attr('stroke-width', '2').attr('d', 'M 0 -3 l 0 6');
      const gradient = svgDefs.append('linearGradient').attr('id', 'path-animate').attr('gradientUnits', 'userSpaceOnUse').attr('color-interpolation', 'linearRGB').attr('x1', '0').attr('x2', '0').attr('y1', evidenceScale(this.bounds.upper)).attr('y2', evidenceScale(this.bounds.lower));
      gradient.append('stop').classed('stop-0', true).attr('offset', '0%');
      gradient.append('stop').classed('stop-100', true).attr('offset', '100%');
      //  MERGE
      const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

      // Plots
      //  DATA-JOIN
      const densityPlotUpdate = svgMerge.selectAll('.plot.density').data([{
        outcome: 'correct',
        data: {
          meanRT: this.data.correctMeanRT,
          sdRT: this.data.correctSDRT
        },
        model: {
          meanRT: this.model.correctMeanRT,
          sdRT: this.model.correctSDRT,
          dist: this.model.correctDist
        },
        densityScale: correctDensityScale,
        densityLine: correctDensityLine,
        alignDistribution: this.alignCorrectDistribution.bind(this)
      }, {
        outcome: 'error',
        data: {
          meanRT: this.data.errorMeanRT,
          sdRT: this.data.errorSDRT
        },
        model: {
          meanRT: this.model.errorMeanRT,
          sdRT: this.model.errorSDRT,
          dist: this.model.errorDist
        },
        densityScale: errorDensityScale,
        densityLine: errorDensityLine,
        alignDistribution: this.alignErrorDistribution.bind(this)
      }]);
      //  ENTER
      const evidencePlotEnter = svgEnter.append('g').classed('plot evidence', true);
      const densityPlotEnter = densityPlotUpdate.enter().append('g').attr('class', datum => {
        return `plot density ${datum.outcome}`;
      });
      const accuracyPlotEnter = svgEnter.append('g').classed('plot accuracy', true);
      //  MERGE
      const evidencePlotMerge = svgMerge.select('.plot.evidence').attr('transform', `translate(${margin.left}, ${margin.top + densityHeight + gapHeight})`);
      const densityPlotMerge = densityPlotEnter.merge(densityPlotUpdate).attr('transform', datum => {
        return `translate(${margin.left}, ${datum.outcome === 'correct' ? margin.top : margin.top + densityHeight + evidenceHeight + 2 * gapHeight})`;
      });
      const accuracyPlotMerge = svgMerge.select('.plot.accuracy').attr('transform', `translate(${margin.left + timeWidth + gapWidth}, ${margin.top})`);

      // Clippaths
      //  ENTER
      evidencePlotEnter.append('clipPath').attr('id', 'clip-evidence').append('rect');
      //  MERGE
      evidencePlotMerge.select('clipPath rect').attr('y', evidenceScale(this.bounds.upper)).attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper) + 1).attr('width', timeWidth + 1);

      //
      // LAYERS
      //

      // Underlayers
      //  ENTER
      const evidenceUnderlayerEnter = evidencePlotEnter.append('g').classed('underlayer', true);
      const densityUnderlayerEnter = densityPlotEnter.append('g').classed('underlayer', true);
      const accuracyUnderlayerEnter = accuracyPlotEnter.append('g').classed('underlayer', true);
      //  MERGE
      const evidenceUnderlayerMerge = evidencePlotMerge.select('.underlayer');
      const densityUnderlayerMerge = densityPlotMerge.select('.underlayer');
      const accuracyUnderlayerMerge = accuracyPlotMerge.select('.underlayer');

      // Contents
      //  ENTER
      evidencePlotEnter.append('g').classed('content', true).append('g').classed('paths', true);
      const densityContentEnter = densityPlotEnter.append('g').classed('content', true);
      accuracyPlotEnter.append('g').classed('content', true);
      //  MERGE
      const evidenceContentMerge = evidencePlotMerge.select('.content');
      const densityContentMerge = densityPlotMerge.select('.content');
      const accuracyContentMerge = accuracyPlotMerge.select('.content');

      // Overlayers
      //  ENTER
      evidencePlotEnter.append('g').classed('overlayer', true);
      densityPlotEnter.append('g').classed('overlayer', true);
      accuracyPlotEnter.append('g').classed('overlayer', true);
      //  MERGE
      const evidenceOverlayerMerge = evidencePlotMerge.select('.overlayer');
      const densityOverlayerMerge = densityPlotMerge.select('.overlayer');
      // const accuracyOverlayerMerge = accuracyPlotMerge.select('.overlayer');

      //
      // UNDERLAYERS
      //

      // Backgrounds
      //  ENTER
      evidenceUnderlayerEnter.append('rect').classed('background', true);
      densityUnderlayerEnter.append('rect').classed('background', true);
      //  MERGE
      evidenceUnderlayerMerge.select('.background').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('y', evidenceScale(this.bounds.upper)).attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper)).attr('width', timeWidth);
      densityUnderlayerMerge.select('.background').transition().duration(transitionDuration).ease(cubicOut).attr('height', densityHeight).attr('width', timeWidth);

      // X Axes (Time)
      //  ENTER
      densityUnderlayerEnter.filter(datum => {
        return datum.outcome === 'error';
      }).append('g').classed('axis time', true);
      //  MERGE
      const timeScaleMerge = densityUnderlayerMerge.filter(datum => {
        return datum.outcome === 'error';
      }).select('.axis.time').attr('transform', `translate(0, ${densityHeight + 0.25 * this.rem})`);
      const timeScaleTransition = timeScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisBottom(timeScale)).attr('font-size', null).attr('font-family', null);
      timeScaleTransition.selectAll('line, path').attr('stroke', null);

      // X Axes Titles
      //  ENTER
      const timeTitleEnter = densityUnderlayerEnter.filter(datum => {
        return datum.outcome === 'error';
      }).append('text').classed('title time', true).attr('text-anchor', 'middle');
      timeTitleEnter.append('tspan').classed('name', true).text('Time (ms)');
      //  MERGE
      densityUnderlayerMerge.filter(datum => {
        return datum.outcome === 'error';
      }).select('.title.time').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${timeWidth / 2}, ${densityHeight + 2.5 * this.rem})`);

      // Y Axes (Evidence, Density, Accuracy)
      //  ENTER
      evidenceUnderlayerEnter.append('g').classed('axis evidence', true);
      densityUnderlayerEnter.append('g').attr('class', datum => {
        return `axis density ${datum.outcome}`;
      });
      accuracyUnderlayerEnter.append('g').classed('axis accuracy', true);
      // MERGE
      const evidenceScaleMerge = evidenceUnderlayerMerge.select('.axis.evidence').attr('transform', `translate(${ -0.25 * this.rem}, 0)`);
      const densityScaleMerge = densityUnderlayerMerge.select('.axis.density').attr('transform', `translate(${ -0.25 * this.rem}, 0)`);
      const accuracyScaleMerge = accuracyUnderlayerMerge.select('.axis.accuracy').attr('transform', `translate(${accuracyWidth + 0.25 * this.rem}, 0)`);
      const evidenceScaleTransition = evidenceScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisLeft(evidenceScale)).attr('font-size', null).attr('font-family', null);
      const densityScaleTransition = densityScaleMerge.transition().duration(transitionDuration).ease(cubicOut).each((datum, index, elements) => {
        axisLeft(datum.densityScale).ticks(2)(select(elements[index]));
      }).attr('font-size', null).attr('font-family', null);
      const accuracyScaleTransition = accuracyScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisRight(accuracyScale)).attr('font-size', null).attr('font-family', null);
      evidenceScaleTransition.selectAll('line, path').attr('stroke', null);
      densityScaleTransition.selectAll('line, path').attr('stroke', null);
      accuracyScaleTransition.selectAll('line, path').attr('stroke', null);

      // Y Axes Titles (Evidence & Density)
      //  ENTER
      const evidenceTitleEnter = evidenceUnderlayerEnter.append('text').classed('title evidence', true).attr('text-anchor', 'middle');
      const densityTitleEnter = densityUnderlayerEnter.append('text').attr('class', datum => {
        return `title density ${datum.outcome}`;
      }).attr('text-anchor', 'middle');
      const accuracyTitleEnter = accuracyUnderlayerEnter.append('text').classed('title accuracy', true).attr('text-anchor', 'middle');
      evidenceTitleEnter.append('tspan').classed('name', true).text('Evidence');
      densityTitleEnter.append('tspan').classed('name', true).text('Density');
      accuracyTitleEnter.append('tspan').classed('name', true).text('Accuracy');
      //  MERGE
      evidenceUnderlayerMerge.select('.title.evidence').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${ -2.5 * this.rem}, ${evidenceHeight / 2})rotate(-90)`);
      densityUnderlayerMerge.select('.title.density').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${ -2.5 * this.rem}, ${densityHeight / 2})rotate(-90)`);
      accuracyUnderlayerMerge.select('.title.accuracy').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${accuracyWidth + 2.25 * this.rem}, ${height / 2})rotate(90)`);

      //
      // CONTENTS
      //

      // Paths
      //  DATA-JOIN
      const pathUpdate = evidenceContentMerge.select('.paths').selectAll('.path').data(this.data.trials.filter(trial => {
        return trial.path !== undefined;
      }));
      //  ENTER
      const rtLabel = local();
      const pathEnter = pathUpdate.enter().append('g').classed('path', true).attr('data-new-trial-ease-time', 0).on('pointerenter', (event, datum) => {
        if (!this.drag) {
          select(event.currentTarget).classed('highlight', true).raise();
          const myRtLabel = evidenceOverlayerMerge.append('g').classed(`rt-label ${datum.outcome}`, true);
          const rect = myRtLabel.append('rect');
          const text = myRtLabel.append('text').text(`RT = ${datum.rt.toFixed()}`).attr('x', timeScale(datum.rt)).attr('y', datum.outcome === 'correct' ? evidenceScale(this.bounds.upper) - this.rem * 0.25 : evidenceScale(this.bounds.lower) + this.rem * 0.125);
          const bbox = text.node().getBBox();
          rect.attr('x', bbox.x - this.rem * 0.125).attr('y', bbox.y + this.rem * 0.125).attr('width', bbox.width + this.rem * 0.25).attr('height', bbox.height - this.rem * 0.25);
          rtLabel.set(event.currentTarget, myRtLabel);
        }
      }).on('pointerout', (event, datum) => {
        if (!this.drag) {
          select(event.currentTarget).classed('highlight', false).lower();
          event.currentTarget.parentNode.insertBefore(event.currentTarget, event.currentTarget.parentNode.children[datum.index]);
          rtLabel.get(event.currentTarget).remove();
        }
      });
      pathEnter.append('path').classed('curve', true).attr('clip-path', 'url(#clip-evidence)').attr('pathLength', 1).attr('stroke-dashoffset', 1);
      //  MERGE
      const pathMerge = pathEnter.merge(pathUpdate).attr('class', datum => {
        return `path ${datum.outcome}`;
      });
      pathMerge.select('.curve').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('stroke', datum => {
        return this.getComputedStyleValue(`---color-${datum.outcome}`);
      }).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.a, this.a);
        const interpolateZ = interpolate$1(element.z !== undefined ? element.z : this.z, this.z);
        const interpolateV = interpolate$1(element.v !== undefined ? element.v : this.v, this.v);
        const interpolateT0 = interpolate$1(element.t0 !== undefined ? element.t0 : this.t0, this.t0);
        return time => {
          element.a = interpolateA(time);
          element.z = interpolateZ(time);
          element.v = interpolateV(time);
          element.t0 = interpolateT0(time);
          const path = this.alignPath(datum.seed, element.a, element.z, element.v, element.t0);
          return evidenceLine(path);
        };
      });
      //  MERGE - Active Animate Paths
      const pathMergeNewActive = pathMerge.filter(datum => {
        return datum.animate && !this.paused;
      });
      if (!pathMergeNewActive.empty()) {
        const easeTime = pathMergeNewActive.attr('data-new-trial-ease-time');
        const scaleIn = time => {
          return linear().domain([0, 1]).range([easeTime, 1])(time);
        };
        const scaleOutGenerator = easeFunction => {
          return time => {
            return linear().domain([easeFunction(easeTime), 1]).range([0, 1])(easeFunction(time));
          };
        };
        pathMergeNewActive.classed('animate', true).select('.curve').attr('stroke-dasharray', 1);
        pathMergeNewActive.transition('new').duration(datum => {
          // scale the RT for viewing pleasure
          return Math.floor(datum.rt * 1.5 * (1 - easeTime));
        }).ease(scaleIn).attr('data-new-trial-ease-time', 1).select('.curve').attrTween('stroke-dashoffset', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = interpolate$1(element.getAttribute('stroke-dashoffset'), 0);
          return time => {
            return interpolator(scaleOutGenerator(linear$1)(time));
          };
        }).on('end', (datum, index, elements) => {
          const element = elements[index];
          select(element.parentElement).classed('animate', false).attr('data-new-trial-ease-time', null);
          datum.animate = false;
          this.animate = false;
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('accumulable-response', {
            detail: {
              outcome: datum.outcome,
              data: this.data,
              model: this.model
            },
            bubbles: true
          }));
        });
      }
      //  MERGE - Paused Animate Paths
      const pathMergeNewPaused = pathMerge.filter(datum => {
        return datum.animate && this.paused;
      });
      if (!pathMergeNewPaused.empty()) {
        const easeTime = pathMergeNewPaused.attr('data-new-trial-ease-time');
        pathMergeNewPaused.classed('animate', true).select('.curve').attr('stroke-dasharray', 1).attr('stroke-dashoffset', () => {
          const interpolator = interpolate$1(1, 0);
          return interpolator(linear$1(easeTime));
        });
      }
      //  MERGE - Non-Animate Paths
      pathMerge.filter(datum => {
        return !datum.animate;
      }).attr('data-new-trial-ease-time', null);
      //  EXIT
      pathUpdate.exit().remove();

      // Distributions
      //  ENTER
      const distEnter = densityContentEnter.append('g').attr('class', datum => {
        return `dist ${datum.outcome}`;
      });
      distEnter.append('path').classed('curve', true);
      //  MERGE
      densityContentMerge.select('.dist').select('.curve').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.a, this.a);
        const interpolateZ = interpolate$1(element.z !== undefined ? element.z : this.z, this.z);
        const interpolateV = interpolate$1(element.v !== undefined ? element.v : this.v, this.v);
        const interpolateT0 = interpolate$1(element.t0 !== undefined ? element.t0 : this.t0, this.t0);
        return time => {
          element.a = interpolateA(time);
          element.z = interpolateZ(time);
          element.v = interpolateV(time);
          element.t0 = interpolateT0(time);
          const path = datum.alignDistribution(element.a, element.z, element.v, element.t0);
          return datum.densityLine(path);
        };
      });

      // RTs
      //  DATA-JOIN
      const rtUpdate = evidenceContentMerge.selectAll('.rt').data(this.data.trials);
      //  ENTER
      const rtEnter = rtUpdate.enter().append('g');
      rtEnter.append('line').classed('mark', true).attr('x1', datum => {
        return timeScale(datum.rt);
      }).attr('x2', datum => {
        return timeScale(datum.rt);
      }).attr('y1', datum => {
        return datum.outcome === 'correct' ? evidenceScale(1) - 0.125 * this.rem : evidenceScale(-1) + 0.125 * this.rem;
      }).attr('y2', datum => {
        return datum.outcome === 'correct' ? evidenceScale(1) - 0.675 * this.rem : evidenceScale(-1) + 0.675 * this.rem;
      });
      //  MERGE
      const rtMerge = rtEnter.merge(rtUpdate).attr('class', datum => {
        return `rt ${datum.outcome}`;
      });
      rtMerge.filter(datum => {
        return !datum.animate;
      }).select('.mark').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('stroke', datum => {
        return this.getComputedStyleValue(`---color-${datum.outcome}`);
      }).attr('x1', datum => {
        return timeScale(datum.rt);
      }).attr('x2', datum => {
        return timeScale(datum.rt);
      }).attr('y1', datum => {
        return datum.outcome === 'correct' ? evidenceScale(1) - 0.125 * this.rem : evidenceScale(-1) + 0.125 * this.rem;
      }).attr('y2', datum => {
        return datum.outcome === 'correct' ? evidenceScale(1) - 0.675 * this.rem : evidenceScale(-1) + 0.675 * this.rem;
      });
      //  EXIT
      rtUpdate.exit().remove();

      // Model Accuracy
      //  DATA-JOIN
      const accuracyUpdate = accuracyContentMerge.selectAll('.accuracy.model').data([this.model.accuracy, 1 - this.model.accuracy]);
      //  ENTER
      const accuracyEnter = accuracyUpdate.enter().append('g').attr('class', (_, index) => {
        return `accuracy model ${index === 0 ? 'correct' : 'error'}`;
      });
      accuracyEnter.append('rect').classed('bar', true).attr('x', 0);
      //  MERGE
      accuracyEnter.merge(accuracyUpdate).select('rect').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut)
      // ## Tween based on params?
      .attr('y', (datum, index) => {
        return index === 0 ? accuracyScale(0) : accuracyScale(1 - datum);
      }).attr('width', accuracyWidth).attr('height', datum => {
        return accuracyScale(datum);
      });
      //  EXIT
      accuracyUpdate.exit().remove();

      // Data Accuracy
      //  DATA-JOIN
      const dataAccuracyUpdate = accuracyContentMerge.selectAll('.accuracy.data').data(!Number.isNaN(this.data.accuracy) ? [this.data.accuracy] : []);
      //  ENTER
      const dataAccuracyEnter = dataAccuracyUpdate.enter().append('g').classed('accuracy data', true);
      dataAccuracyEnter.append('line').classed('mark', true);
      //  MERGE
      const dataAccuracyMerge = dataAccuracyEnter.merge(dataAccuracyUpdate).attr('class', datum => {
        return `accuracy data ${datum < this.model.accuracy.correct ? 'correct' : 'error'}`;
      });
      dataAccuracyMerge.select('.mark').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut)
      // ## Tween based on params?
      .attr('x1', 0 + 0.25 * this.rem).attr('x2', accuracyWidth - 0.25 * this.rem).attr('y1', datum => {
        return accuracyScale(datum) - 1;
      }).attr('y2', datum => {
        return accuracyScale(datum) - 1;
      });
      //  EXIT
      dataAccuracyUpdate.exit().remove();

      //
      // OVERLAYERS
      //

      // Boundaries
      //  DATA-JOIN
      const boundaryUpdate = evidenceOverlayerMerge.selectAll('.boundary').data([{
        bound: 'upper',
        value: this.bounds.upper
      }, {
        bound: 'lower',
        value: this.bounds.lower
      }]);
      //  ENTER
      const boundaryEnter = boundaryUpdate.enter().append('g').attr('class', (_, index) => {
        return `boundary ${index === 0 ? 'correct' : 'error'}`;
      });
      boundaryEnter.append('line').classed('line', true);
      //  MERGE
      const boundaryMerge = boundaryEnter.merge(boundaryUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? (event, datum) => {
        if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
          let a = this.a; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowUp':
              a += datum.bound === 'upper' ? event.shiftKey ? 0.01 : 0.1 : event.shiftKey ? -0.01 : -0.1;
              break;
            case 'ArrowDown':
              a += datum.bound === 'upper' ? event.shiftKey ? -0.01 : -0.1 : event.shiftKey ? 0.01 : 0.1;
              break;
          }
          // Clamp boundaries to visible evidence
          a = a < 0.01 ? 0.01 : a > this.scale.evidence.max * 2 ? this.scale.evidence.max * 2 : a;
          this.a = a;
          this.alignState();
          this.dispatchEvent(new CustomEvent('ddm-model-a', {
            detail: {
              a: this.a
            },
            bubbles: true
          }));
          event.preventDefault();
        }
      } : null);
      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          boundaryMerge.call(dragBoundary);
        } else {
          boundaryMerge.on('.drag', null);
        }
      }
      boundaryMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', timeScale(this.scale.time.min)).attr('x2', timeScale(this.scale.time.max)).attr('y1', datum => {
        return evidenceScale(datum.value);
      }).attr('y2', datum => {
        return evidenceScale(datum.value);
      });
      //  EXIT
      boundaryUpdate.exit().remove();

      // Drift Rate
      //  DATA-JOIN
      const driftUpdate = evidenceOverlayerMerge.selectAll('.drift').data([{
        v: this.v,
        t0: this.t0,
        startingPoint: this.startingPoint
      }]);
      //  ENTER
      const driftEnter = driftUpdate.enter().append('g').classed('drift', true);
      driftEnter.append('line').classed('line', true);
      driftEnter.append('path').classed('arrow', true);
      //  MERGE
      const driftMerge = driftEnter.merge(driftUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? event => {
        if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
          let v = this.v; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowUp':
              v += event.shiftKey ? 0.01 : 0.1;
              break;
            case 'ArrowDown':
              v -= event.shiftKey ? 0.01 : 0.1;
              break;
          }
          // Clamp z
          v = v < 0.01 ? 0.01 : v > 5 ? 5 : v;
          this.v = v;
          this.alignState();
          this.dispatchEvent(new CustomEvent('ddm-model-v', {
            detail: {
              v: this.v
            },
            bubbles: true
          }));
          event.preventDefault();
        }
      } : null);
      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          driftMerge.call(dragDrift);
        } else {
          driftMerge.on('.drag', null);
        }
      }
      const scaleRatio = (evidenceScale(0) - evidenceScale(1)) / (timeScale(1) - timeScale(0));
      driftMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('transform', datum => {
        return `translate(${timeScale(datum.t0)}, ${evidenceScale(datum.startingPoint)})
          rotate(${-Math.atan(datum.v / 1000 * scaleRatio) * (180 / Math.PI)})`;
      });
      driftMerge.select('.line').attr('x2', timeScale(200));
      driftMerge.select('.arrow').attr('d', `
        M ${timeScale(200) - this.rem * 0.5},${-this.rem * 0.5}
        l ${this.rem * 0.5},${this.rem * 0.5}
        l ${-this.rem * 0.5},${this.rem * 0.5}
      `);
      //  EXIT
      driftUpdate.exit().remove();

      // Nondecision Time/Starting Point
      //  DATA-JOIN
      const t0zUpdate = evidenceOverlayerMerge.selectAll('.t0z').data([{
        t0: this.t0,
        startingPoint: this.startingPoint
      }]);
      //  ENTER
      const t0zEnter = t0zUpdate.enter().append('g').classed('t0z', true);
      t0zEnter.append('line').classed('line', true);
      t0zEnter.append('circle').classed('point', true);
      //  MERGE
      const t0zMerge = t0zEnter.merge(t0zUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? event => {
        if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
          let z = this.z; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowUp':
              z += event.shiftKey ? 0.01 : 0.1;
              break;
            case 'ArrowDown':
              z -= event.shiftKey ? 0.01 : 0.1;
              break;
          }
          // Clamp z
          z = z < 0.01 ? 0.01 : z > 0.99 ? 0.99 : z;
          this.z = z;
          this.alignState();
          this.dispatchEvent(new CustomEvent('ddm-model-z', {
            detail: {
              z: this.z
            },
            bubbles: true
          }));
          event.preventDefault();
        }
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          let t0 = this.t0; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowRight':
              t0 += event.shiftKey ? 1 : 10;
              break;
            case 'ArrowLeft':
              t0 -= event.shiftKey ? 1 : 10;
              break;
          }
          // Clamp t0
          t0 = t0 < 0 ? 0 : t0 > 500 ? 500 : t0;
          this.t0 = t0;
          this.alignState();
          this.dispatchEvent(new CustomEvent('ddm-model-t0', {
            detail: {
              t0: this.t0
            },
            bubbles: true
          }));
          event.preventDefault();
        }
      } : null);
      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          t0zMerge.call(dragT0z);
        } else {
          t0zMerge.on('.drag', null);
        }
      }
      t0zMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', timeScale(0)).attr('x2', datum => {
        return timeScale(datum.t0);
      }).attr('y1', datum => {
        return evidenceScale(datum.startingPoint);
      }).attr('y2', datum => {
        return evidenceScale(datum.startingPoint);
      });
      t0zMerge.select('.point').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('cx', datum => {
        return timeScale(datum.t0);
      }).attr('cy', datum => {
        return evidenceScale(datum.startingPoint);
      });
      //  EXIT
      t0zUpdate.exit().remove();

      // a Measure
      //  DATA-JOIN
      const aUpdate = evidenceOverlayerMerge.selectAll('.measure.a').data(this.measures ? [this.a] : []);
      //  ENTER
      const aEnter = aUpdate.enter().append('g').classed('measure a', true);
      aEnter.append('line').classed('line', true).attr('marker-start', 'url(#measure-arrow)').attr('marker-end', 'url(#measure-arrow)');
      const aLabel = aEnter.append('text').classed('label', true);
      aLabel.append('tspan').classed('a math-var', true).text('a');
      aLabel.append('tspan').classed('equals', true).text(' = ');
      aLabel.append('tspan').classed('value', true);
      //  MERGE
      const aMerge = aEnter.merge(aUpdate);
      aMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', timeScale(this.scale.time.max) - this.rem * 0.75).attr('y1', evidenceScale(this.bounds.upper) + 2).attr('x2', timeScale(this.scale.time.max) - this.rem * 0.75).attr('y2', evidenceScale(this.bounds.lower) - 2);
      const aLabelMerge = aMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', timeScale(this.scale.time.max)).attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
      aLabelMerge.select('.value').text(format('.2f')(this.a));
      //  EXIT
      aUpdate.exit().remove();

      // z Measure
      //  DATA-JOIN
      const zUpdate = evidenceOverlayerMerge.selectAll('.measure.z').data(this.measures ? [this.z] : []);
      //  ENTER
      const zEnter = zUpdate.enter().append('g').classed('measure z', true);
      zEnter.append('line').classed('line', true).attr('marker-start', 'url(#measure-arrow)').attr('marker-end', 'url(#measure-arrow)');
      const zLabel = zEnter.append('text').classed('label', true);
      zLabel.append('tspan').classed('z math-var', true).text('z');
      zLabel.append('tspan').classed('equals', true).text(' = ');
      zLabel.append('tspan').classed('value', true);
      //  MERGE
      const zMerge = zEnter.merge(zUpdate);
      zMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', timeScale(this.scale.time.min) + this.rem * 0.75).attr('y1', evidenceScale(this.startingPoint) + 2).attr('x2', timeScale(this.scale.time.min) + this.rem * 0.75).attr('y2', evidenceScale(this.bounds.lower) - 2);
      const zLabelMerge = zMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', timeScale(this.scale.time.min)).attr('y', evidenceScale(this.bounds.lower) + this.rem * 0.125);
      zLabelMerge.select('.value').text(format('.0%')(this.z));
      //  EXIT
      zUpdate.exit().remove();

      // v Measure
      //  DATA-JOIN
      const vUpdate = evidenceOverlayerMerge.selectAll('.measure.v').data(this.measures ? [this.v] : []);
      //  ENTER
      const vEnter = vUpdate.enter().append('g').classed('measure v', true);
      vEnter.append('path').classed('line', true).attr('marker-start', 'url(#measure-arrow)').attr('marker-end', 'url(#measure-arrow)');
      const vLabel = vEnter.append('text').classed('label', true);
      vLabel.append('tspan').classed('v math-var', true).text('v');
      vLabel.append('tspan').classed('equals', true).text(' = ');
      vLabel.append('tspan').classed('value', true);
      //  MERGE
      const driftAngle = Math.atan(this.v / 1000 * scaleRatio);
      const driftHypotenuse = timeScale(200) - timeScale(0) + this.rem * 0.75;
      const driftX = Math.cos(driftAngle) * driftHypotenuse;
      const driftY = Math.sin(driftAngle) * driftHypotenuse;
      const vMerge = vEnter.merge(vUpdate);
      vMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('d', `
        M ${timeScale(this.t0 + 200) + this.rem * 0.75}, ${evidenceScale(this.startingPoint)}
        A ${timeScale(200) - timeScale(0)} ${timeScale(200) - timeScale(0)} 0 0 0 ${timeScale(this.t0) + driftX} ${evidenceScale(this.startingPoint) - driftY}
      `);
      const vLabelMerge = vMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', timeScale(this.t0 + 200) + this.rem * 0.5).attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
      vLabelMerge.select('.value').text(format('.2f')(this.v));
      //  EXIT
      vUpdate.exit().remove();

      // t0 Measure
      //  DATA-JOIN
      const t0Update = evidenceOverlayerMerge.selectAll('.measure.t0').data(this.measures ? [this.t0] : []);
      //  ENTER
      const t0Enter = t0Update.enter().append('g').classed('measure t0', true);
      t0Enter.append('line').classed('line', true).attr('marker-start', 'url(#measure-arrow)').attr('marker-end', 'url(#measure-arrow)');
      const t0Label = t0Enter.append('text').classed('label', true);
      t0Label.append('tspan').classed('t0 math-var', true).text('t₀');
      t0Label.append('tspan').classed('equals', true).text(' = ');
      t0Label.append('tspan').classed('value', true);
      //  MERGE
      const t0Merge = t0Enter.merge(t0Update);
      t0Merge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', timeScale(0) + 2).attr('y1', evidenceScale(this.startingPoint) - this.rem * 0.75).attr('x2', timeScale(this.t0) - 2).attr('y2', evidenceScale(this.startingPoint) - this.rem * 0.75);
      const t0LabelMerge = t0Merge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', timeScale(this.t0) + this.rem * 0.25).attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
      t0LabelMerge.select('.value').text(format('d')(this.t0));
      //  EXIT
      t0Update.exit().remove();

      // Means
      // DATA-JOIN
      const meanUpdate = densityOverlayerMerge.selectAll('.model.mean').data(datum => {
        return this.means ? [datum] : [];
      });
      //  ENTER
      const meanEnter = meanUpdate.enter().append('g').attr('class', datum => {
        return `model mean ${datum.outcome}`;
      });
      meanEnter.append('line').classed('indicator', true);
      //  MERGE
      const meanMerge = meanEnter.merge(meanUpdate);
      meanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
        return timeScale(datum.model.meanRT);
      }).attr('x2', datum => {
        return timeScale(datum.model.meanRT);
      }).attr('y1', datum => {
        return datum.densityScale(this.scale.density.min);
      }).attr('y2', datum => {
        return datum.densityScale(this.scale.density.max);
      });
      //  EXIT
      meanUpdate.exit().remove();

      // Data Means
      // DATA-JOIN
      const dataMeanUpdate = densityOverlayerMerge.selectAll('.data.mean').data(datum => {
        return this.means && !Number.isNaN(datum.data.meanRT) ? [datum] : [];
      });
      //  ENTER
      const dataMeanEnter = dataMeanUpdate.enter().append('g').attr('class', datum => {
        return `data mean ${datum.outcome}`;
      });
      dataMeanEnter.append('line').classed('indicator', true).attr('y1', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.125 : -0.125) * this.rem;
      }).attr('y2', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.675 : -0.675) * this.rem;
      });
      //  MERGE
      const dataMeanMerge = dataMeanEnter.merge(dataMeanUpdate);
      dataMeanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
        return timeScale(datum.data.meanRT);
      }).attr('x2', datum => {
        return timeScale(datum.data.meanRT);
      }).attr('y1', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.125 : -0.125) * this.rem;
      }).attr('y2', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.675 : -0.675) * this.rem;
      });
      //  EXIT
      dataMeanUpdate.exit().select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', 0).attr('x2', 0).on('end', (datum, index, elements) => {
        select(elements[index].parentElement).remove();
      });

      // Standard Deviations
      // DATA-JOIN
      const sdUpdate = densityOverlayerMerge.selectAll('.model.sd').data(datum => {
        return this.sds ? [datum] : [];
      });
      //  ENTER
      const sdEnter = sdUpdate.enter().append('g').attr('class', datum => {
        return `model sd ${datum.outcome}`;
      });
      sdEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#model-sd-cap)').attr('marker-end', 'url(#model-sd-cap)');
      //  MERGE
      const sdMerge = sdEnter.merge(sdUpdate);
      sdMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
        return timeScale(datum.model.meanRT - datum.model.sdRT / 2);
      }).attr('x2', datum => {
        return timeScale(datum.model.meanRT + datum.model.sdRT / 2);
      }).attr('y1', datum => {
        return datum.densityScale(5);
      }).attr('y2', datum => {
        return datum.densityScale(5);
      });
      //  EXIT
      sdUpdate.exit().remove();

      // Data Standard Deviation
      // DATA-JOIN
      const dataSDUpdate = densityOverlayerMerge.selectAll('.data.sd').data(datum => {
        return this.sds && !Number.isNaN(datum.data.meanRT) && !Number.isNaN(datum.data.sdRT) ? [datum] : [];
      });
      //  ENTER
      const dataSDEnter = dataSDUpdate.enter().append('g').attr('class', datum => {
        return `data sd ${datum.outcome}`;
      });
      dataSDEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#data-sd-cap)').attr('marker-end', 'url(#data-sd-cap)').attr('y1', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.375 : -0.375) * this.rem;
      }).attr('y2', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.375 : -0.375) * this.rem;
      });
      //  MERGE
      const dataSDMerge = dataSDEnter.merge(dataSDUpdate);
      dataSDMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
        return timeScale(datum.data.meanRT - datum.data.sdRT / 2);
      }).attr('x2', datum => {
        return timeScale(datum.data.meanRT + datum.data.sdRT / 2);
      }).attr('y1', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.375 : -0.375) * this.rem;
      }).attr('y2', datum => {
        return datum.densityScale(0) + (datum.outcome === 'correct' ? 0.375 : -0.375) * this.rem;
      });
      //  EXIT
      dataSDUpdate.exit().select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', 0).attr('x2', 0).on('end', (datum, index, elements) => {
        select(elements[index].parentElement).remove();
      });
      this.firstUpdate = false;
    }
  }
  customElements.define('ddm-model', DDMModel);

  /*
    RDK2AFCTask element
    <rdk-2afc-task>

    Attributes:
    Dots; Coherence;
    # Direction, Speed, Lifetime
  */
  class RDK2AFCTask extends DecidablesMixinResizeable(AccumulableElement) {
    static get properties() {
      return {
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        count: {
          attribute: 'count',
          type: Number,
          reflect: true
        },
        probability: {
          attribute: 'probability',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        wait: {
          attribute: 'wait',
          type: Number,
          reflect: true
        },
        iti: {
          attribute: 'iti',
          type: Number,
          reflect: true
        },
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        running: {
          attribute: 'running',
          type: Boolean,
          reflect: true
        },
        lifetime: {
          attribute: false,
          type: Number,
          reflect: false
        },
        speed: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
    constructor() {
      super();

      // Attributes
      this.coherence = 0.5; // Proportion of dots moving coherently
      this.count = 100; // Number of dots
      this.probability = 0.5; // Probability of left (as opposed to right)
      this.duration = 2000; // Duration of stimulus in milliseconds
      this.wait = 2000; // Duration of wait period for response in milliseconds
      this.iti = 2000; // Duration of inter-trial interval in milliseconds
      this.trials = 5; // Number of trials per block
      this.running = false; // Currently executing block of trials

      // Properties
      this.lifetime = 400; // Lifetime of each dot in milliseconds
      this.speed = 50; // Rate of dot movement in pixels per second

      // Private
      this.firstUpdate = true;
      this.COHERENT = 0; // "Constant" for index to coherent dots
      this.RANDOM = 1; // "Constant" for index to random dots
      this.dots = [[], []]; // Array of array of dots
      this.trial = 0; // Count of current trial

      this.states = ['resetted', 'iti', 'stimulus', 'wait', 'ended']; // Possible states of task
      this.state = 'resetted'; // Current state of task

      this.baseTime = 0; // Real time, in milliseconds, that the current block started
      this.pauseTime = 0; // Real time, in milliseconds, that block was paused at
      this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started
      this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

      this.LEFT = 180; // "Constant" for left stimulus direction
      this.RIGHT = 0; // "Constant" for right stimulus direction
      this.currentDirection = undefined; // Direction in degrees for current trial

      this.signals = ['left', 'right']; // Possible trial types
      this.signal = undefined; // Current trial type

      this.runner = undefined; // D3 Interval for frame timing
      this.xScale = undefined; // D3 Scale for x-axis
      this.yScale = undefined; // D3 Scale for y-axis
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: inline-block;

          width: 10rem;
          height: 10rem;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        .background {
          fill: var(---color-element-disabled);
          stroke: none;
        }

        .outline {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2px;
        }

        .dot {
          r: 2px;
        }

        .dots.coherent {
          fill: var(---color-background);
        }

        .dots.random {
          fill: var(---color-background);
        }

        .fixation {
          stroke: var(---color-text);
          stroke-width: 2px;
        }

        .query {
          font-size: 1.75rem;
          font-weight: 600;
        }
      `];
    }
    render() {
      /* eslint-disable-line class-methods-use-this */
      return x$1``;
    }
    update(changedProperties) {
      super.update(changedProperties);

      // Bail out if we can't get the width/height/rem
      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }
      const elementWidth = this.width;
      const elementHeight = this.height;
      const elementSize = Math.min(elementWidth, elementHeight);
      const margin = {
        top: 0.25 * this.rem,
        bottom: 0.25 * this.rem,
        left: 0.25 * this.rem,
        right: 0.25 * this.rem
      };
      const height = elementSize - (margin.top + margin.bottom);
      const width = elementSize - (margin.left + margin.right);

      // X Scale
      this.xScale = linear().domain([-1, 1]).range([0, width]);

      // Y Scale
      this.yScale = linear().domain([1, -1]).range([0, height]);

      // Svg
      //  DATA-JOIN
      const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]);
      //  ENTER
      const svgEnter = svgUpdate.enter().append('svg').classed('main', true);
      //  MERGE
      const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`);

      // Clippath
      //  ENTER
      svgEnter.append('clipPath').attr('id', 'clip-rdk-task').append('circle');
      //  MERGE
      svgMerge.select('clipPath circle').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0));

      // Plot
      //  ENTER
      const plotEnter = svgEnter.append('g').classed('plot', true);
      //  MERGE
      const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`);

      // Underlayer
      //  ENTER
      const underlayerEnter = plotEnter.append('g').classed('underlayer', true);
      // MERGE
      const underlayerMerge = plotMerge.select('.underlayer');

      // Background
      //  ENTER
      underlayerEnter.append('circle').classed('background', true);
      //  MERGE
      underlayerMerge.select('.background').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0));

      // Content
      //  ENTER
      plotEnter.append('g').classed('content', true).attr('clip-path', 'url(#clip-rdk-task)');
      //  MERGE
      const contentMerge = plotMerge.select('.content');

      // Dot Groups
      //  DATA-JOIN
      const dotsUpdate = contentMerge.selectAll('.dots').data([[], []]);
      //  ENTER
      dotsUpdate.enter().append('g').classed('dots', true).classed('coherent', (datum, index) => {
        return index === this.COHERENT;
      }).classed('random', (datum, index) => {
        return index === this.RANDOM;
      });

      // Overlayer
      //  ENTER
      const overlayerEnter = plotEnter.append('g').classed('overlayer', true);
      // MERGE
      const overlayerMerge = plotMerge.select('.overlayer');

      // Outline
      //  ENTER
      overlayerEnter.append('circle').classed('outline', true);
      //  MERGE
      overlayerMerge.select('.outline').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.yScale(0));

      // Start or stop trial block
      if (this.firstUpdate || changedProperties.has('running')) {
        if (this.running) {
          // (Re)Start
          if (this.pauseTime) {
            // Shift timeline forward as if paused time never happened
            this.baseTime += now() - this.pauseTime;
            this.pauseTime = 0;
          }
          this.runner = interval(this.run.bind(this), 20); // FIXME??
        } else if (this.runner !== undefined) {
          // Pause
          this.runner.stop();
          this.pauseTime = now();
        }
      }
      this.firstUpdate = false;
    }
    reset() {
      if (this.runner !== undefined) {
        this.runner.stop();
      }
      this.running = false;
      this.trial = 0;
      this.state = 'resetted';
      this.baseTime = 0;
      this.pauseTime = 0;
      this.startTime = 0;
      this.lastTime = 0;
      this.signal = undefined;
      this.currentDirection = undefined;
      const dotsUpdate = select(this.renderRoot).select('.content').selectAll('.dots').data([[], []]);
      const dotUpdate = dotsUpdate.selectAll('.dot').data(datum => {
        return datum;
      });
      dotUpdate.exit().remove();
      const fixationUpdate = select(this.renderRoot).select('.content').selectAll('.fixation').data([]);
      fixationUpdate.exit().remove();
      const queryUpdate = select(this.renderRoot).select('.content').selectAll('.query').data([]);
      queryUpdate.exit().remove();
    }
    run(/* elapsed */
    ) {
      const realTime = now();
      const currentTime = this.baseTime ? realTime - this.baseTime : 0;
      const elapsedTime = this.baseTime ? currentTime - this.startTime : 0;
      const frameTime = this.baseTime ? currentTime - this.lastTime : 0;
      this.lastTime = currentTime;
      let newTrial = false;
      if (this.state === 'resetted') {
        // Start block with an ITI
        this.state = 'iti';
        this.baseTime = realTime;
        this.startTime = 0;
        this.dispatchEvent(new CustomEvent('rdk-block-start', {
          detail: {
            trials: this.trials
          },
          bubbles: true
        }));
      } else if (this.state === 'iti' && elapsedTime >= this.iti) {
        // Start new trial with a stimulus
        newTrial = true;
        this.trial += 1;
        this.state = 'stimulus';
        this.startTime = currentTime;
        this.signal = Math.random() < this.probability ? 'left' : 'right';
        this.currentDirection = this.signal === 'left' ? this.LEFT : this.RIGHT;
        this.dispatchEvent(new CustomEvent('rdk-trial-start', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'stimulus' && elapsedTime >= this.duration) {
        // Stimulus is over, now wait
        this.state = 'wait';
        this.startTime = currentTime;
        this.dispatchEvent(new CustomEvent('rdk-trial-middle', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'wait' && elapsedTime >= this.wait) {
        // Wait is over, end of trial
        this.dispatchEvent(new CustomEvent('rdk-trial-end', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
        if (this.trial >= this.trials) {
          // End of block
          this.runner.stop();
          this.running = false;
          this.state = 'ended';
          this.baseTime = 0;
          this.pauseTime = 0;
          this.startTime = 0;
          this.lastTime = 0;
          this.signal = undefined;
          this.currentDirection = undefined;
          this.dispatchEvent(new CustomEvent('rdk-block-end', {
            detail: {
              trials: this.trial
            },
            bubbles: true
          }));
        } else {
          // ITI
          this.state = 'iti';
          this.startTime = currentTime;
        }
      }

      // Dots
      if (this.state === 'stimulus') {
        this.dots[this.COHERENT].length = Math.round(this.count * this.coherence);
        this.dots[this.RANDOM].length = this.count - this.dots[this.COHERENT].length;
        for (let t = 0; t < this.dots.length; t += 1) {
          for (let i = 0; i < this.dots[t].length; i += 1) {
            const newDot = this.dots[t][i] === undefined;
            if (newDot) {
              this.dots[t][i] = {};
            }
            const dot = this.dots[t][i];
            if (newTrial || newDot) {
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;
              dot.birth = currentTime - Math.floor(Math.random() * this.lifetime);
              const angle = Math.random() * 2 * Math.PI;
              const radius = Math.sqrt(Math.random());
              dot.x = this.xScale(radius * Math.cos(angle));
              dot.y = this.yScale(radius * Math.sin(angle));
            } else if (currentTime > dot.birth + this.lifetime) {
              // Dot has died, so rebirth
              dot.birth += this.lifetime;
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;
              const angle = Math.random() * 2 * Math.PI;
              const radius = Math.sqrt(Math.random());
              dot.x = this.xScale(radius * Math.cos(angle));
              dot.y = this.yScale(radius * Math.sin(angle));
            } else {
              if (t === this.COHERENT) {
                dot.direction = this.currentDirection;
              }
              const directionR = dot.direction * (Math.PI / 180);
              dot.dx = this.speed * (frameTime / 1000) * Math.cos(directionR);
              dot.dy = this.speed * (frameTime / 1000) * Math.sin(directionR);
              // Update position
              dot.x += dot.dx;
              dot.y += dot.dy;
              // Calculate squared distance from center
              const distance2 = (dot.x - this.xScale(0)) ** 2 + (dot.y - this.yScale(0)) ** 2;
              const radius2 = (this.xScale(1) - this.xScale(0)) ** 2;
              if (distance2 > radius2) {
                // Dot has exited so move to other side
                dot.x = -(dot.x - this.xScale(0)) + this.xScale(0);
                dot.y = -(dot.y - this.yScale(0)) + this.yScale(0);
              }
            }
          }
        }
      }

      // Fixation
      //  DATA-JOIN
      const fixationUpdate = select(this.renderRoot).select('.content').selectAll('.fixation').data(this.state === 'iti' ? [true] : []);
      //  ENTER
      const fixationEnter = fixationUpdate.enter().append('g').classed('fixation', true);
      fixationEnter.append('line').attr('x1', this.xScale(-0.1)).attr('y1', this.xScale(0)).attr('x2', this.xScale(0.1)).attr('y2', this.xScale(0));
      fixationEnter.append('line').attr('x1', this.xScale(0)).attr('y1', this.xScale(-0.1)).attr('x2', this.xScale(0)).attr('y2', this.xScale(0.1));
      //  EXIT
      fixationUpdate.exit().remove();

      // Dots
      //  DATA-JOIN
      const dotsUpdate = select(this.renderRoot).select('.content').selectAll('.dots').data(this.state === 'stimulus' ? this.dots : [[], []]);
      const dotUpdate = dotsUpdate.selectAll('.dot').data(datum => {
        return datum;
      });
      //  ENTER
      const dotEnter = dotUpdate.enter().append('circle').classed('dot', true);
      //  MERGE
      dotEnter.merge(dotUpdate).attr('cx', datum => {
        return datum.x;
      }).attr('cy', datum => {
        return datum.y;
      });
      //  EXIT
      dotUpdate.exit().remove();

      // Query
      //  DATA-JOIN
      const queryUpdate = select(this.renderRoot).select('.content').selectAll('.query').data(this.state === 'wait' ? [true] : []);
      //  ENTER
      const queryEnter = queryUpdate.enter().append('g').classed('query', true);
      queryEnter.append('text').attr('x', this.xScale(0)).attr('y', this.xScale(0)).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text('?');
      //  EXIT
      queryUpdate.exit().remove();
    }
  }
  customElements.define('rdk-2afc-task', RDK2AFCTask);

  /*
    DDMEquation Base Class - Not intended for instantiation!
  */
  class DDMEquation extends AccumulableElement {
    static get properties() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.numeric = false;
    }
    static get styles() {
      return [super.styles, i$3`
        :host {
          display: block;

          margin: 1rem;
        }

        /* Containing <div> */
        .holder {
          display: flex;

          flex-direction: row;

          justify-content: left;
        }

        /* Overall <table> */
        .equation {
          text-align: center;
          white-space: nowrap;

          border-collapse: collapse;

          border: 0;
        }

        /* Modifies <td> */
        .underline {
          border-bottom: 1px solid var(---color-text);
        }

        /* Basic <span> and <var> w/modifiers */
        span,
        var {
          padding: 0 0.25rem;

          font-style: normal;
        }

        var {
          border-radius: var(---border-radius);
        }

        .tight {
          padding: 0;
        }

        .paren {
          font-size: 150%;
        }

        .bracket {
          font-size: 175%;
        }

        .brace {
          font-size: 200%;
        }

        .addend {
          position: relative;
          display: inline-block;
        }

        .comparison {
          position: relative;
          display: inline-block;

          font-size: 125%;
          font-weight: 600;
        }

        .function {
          display: inline-block;

          border-radius: var(---border-radius);
        }

        :host([numeric]) .function {
          padding: 0.25rem;
        }

        .exp {
          display: inline-block;

          font-size: 0.75rem;
        }

        .subscript {
          display: inline-block;

          font-size: 66.667%;
        }

        .summation {
          display: flex;

          flex-direction: column;

          line-height: 0.8;
        }

        .sigma {
          display: inline-block;

          font-size: 200%;
        }

        /* Input wrapping <label> */
        decidables-spinner {
          --decidables-spinner-input-width: 4rem;

          display: inline-block;

          padding: 0.125rem 0.375rem 0.375rem;

          line-height: 1.5;
          vertical-align: middle;

          border-radius: var(---border-radius);
        }

        .n {
          --decidables-spinner-input-width: 2rem;
        }

        .left {
          text-align: left;
        }

        .right {
          text-align: right;
        }

        .bottom {
          vertical-align: bottom;
        }

        .top {
          vertical-align: top;
        }

        /* Color scheme */
        .a {
          background: var(---color-a-light);
        }

        .z {
          background: var(---color-z-light);
        }

        .v {
          background: var(---color-v-light);
        }

        .t0 {
          background: var(---color-t0-light);
        }

        .s {
          background: var(---color-s-light);
        }
      `];
    }
  }

  /*
    DDMEquationAZV2PC element
    <ddm-equation-azv2pc>

    Attributes:
  */
  class DDMEquationAZV2PC extends DDMEquation {
    static get properties() {
      return {
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        accuracy: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
    constructor() {
      super();
      this.a = 1.5;
      this.z = 0.5;
      this.v = 0.1;
      this.alignState();
    }
    alignState() {
      this.accuracy = DDMMath.azv2pC(this.a, this.z, this.v);
    }
    sendEvent() {
      this.dispatchEvent(new CustomEvent('ddm-equation-azv2pc-change', {
        detail: {
          a: this.a,
          z: this.z,
          v: this.v,
          accuracy: this.accuracy
        },
        bubbles: true
      }));
    }
    aInput(event) {
      this.a = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    zInput(event) {
      this.z = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    vInput(event) {
      this.v = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    willUpdate() {
      this.alignState();
    }
    render() {
      let a;
      let z;
      let v;
      let s;
      let accuracy;
      if (this.numeric) {
        a = x$1`<decidables-spinner class="a bottom" ?disabled=${!this.interactive} min="0.1" max="2" step="0.01" .value="${this.a}" @input=${this.aInput.bind(this)}>
          <var class="math-var">a</var>
        </decidables-spinner>`;
        z = x$1`<decidables-spinner class="z bottom" ?disabled=${!this.interactive} min="0.01" max="0.99" step="0.01" .value="${this.z}" @input=${this.zInput.bind(this)}>
          <var class="math-var">z</var>
        </decidables-spinner>`;
        v = x$1`<decidables-spinner class="v bottom" ?disabled=${!this.interactive} min="0.01" max="5" step="0.01" .value="${this.v}" @input=${this.vInput.bind(this)}>
          <var class="math-var">v</var>
        </decidables-spinner>`;
        s = x$1`<decidables-spinner class="s bottom" disabled min="0.01" max="1" step="0.01" .value="${DDMMath.s}">
          <var class="math-var">s</var>
        </decidables-spinner>`;
        accuracy = x$1`<decidables-spinner class="accuracy bottom" disabled min="0" max="1" step="0.01" .value="${+this.accuracy.toFixed(2)}">
          <var>Accuracy</var>
        </decidables-spinner>`;
      } else {
        a = x$1`<var class="math-var a">a</var>`;
        z = x$1`<var class="math-var z">z</var>`;
        v = x$1`<var class="math-var v">v</var>`;
        s = x$1`<var class="math-var s">s</var>`;
        accuracy = x$1`<var class="accuracy">Accuracy</var>`;
      }
      const equation = x$1`
      <tr>
        <td rowspan="2">
          ${accuracy}<span class="equals">=</span>
        </td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${a} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${z} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
        </td>
      </tr>
      <tr>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${a} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;
      return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
    }
  }
  customElements.define('ddm-equation-azv2pc', DDMEquationAZV2PC);

  /*
    DDMEquationAZVT02M element
    <ddm-equation-azvt02m>

    Attributes:
  */
  class DDMEquationAZVT02M extends DDMEquation {
    static get properties() {
      return {
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        t0: {
          attribute: 'nondecision-time',
          type: Number,
          reflect: true
        },
        meanRT: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
    constructor() {
      super();
      this.a = 1.5;
      this.z = 0.5;
      this.v = 0.1;
      this.t0 = 200;
      this.alignState();
    }
    alignState() {
      this.meanRT = DDMMath.azvt02m(this.a, this.z, this.v, this.t0);
    }
    sendEvent() {
      this.dispatchEvent(new CustomEvent('ddm-equation-azvt02m-change', {
        detail: {
          a: this.a,
          z: this.z,
          v: this.v,
          t0: this.t0,
          meanRT: this.meanRT
        },
        bubbles: true
      }));
    }
    aInput(event) {
      this.a = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    zInput(event) {
      this.z = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    vInput(event) {
      this.v = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    t0Input(event) {
      this.t0 = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
    willUpdate() {
      this.alignState();
    }
    render() {
      let a;
      let z;
      let v;
      let t0;
      let s;
      let meanRT;
      if (this.numeric) {
        a = x$1`<decidables-spinner class="a bottom" ?disabled=${!this.interactive} min="0.1" max="2" step="0.01" .value="${this.a}" @input=${this.aInput.bind(this)}>
          <var class="math-var">a</var>
        </decidables-spinner>`;
        z = x$1`<decidables-spinner class="z bottom" ?disabled=${!this.interactive} min="0.01" max="0.99" step="0.01" .value="${this.z}" @input=${this.zInput.bind(this)}>
          <var class="math-var">z</var>
        </decidables-spinner>`;
        v = x$1`<decidables-spinner class="v bottom" ?disabled=${!this.interactive} min="0.01" max="5" step="0.01" .value="${this.v}" @input=${this.vInput.bind(this)}>
          <var class="math-var">v</var>
        </decidables-spinner>`;
        t0 = x$1`<decidables-spinner class="t0 bottom" ?disabled=${!this.interactive} min="0" max="500" step="1" .value="${this.t0}" @input=${this.t0Input.bind(this)}>
          <var class="math-var">t<sub>0</sub></var>
        </decidables-spinner>`;
        s = x$1`<decidables-spinner class="s bottom" disabled min="0.01" max="1" step="0.01" .value="${DDMMath.s}">
          <var class="math-var">s</var>
        </decidables-spinner>`;
        meanRT = x$1`<decidables-spinner class="mean-rt bottom" disabled min="0" max="1" step="0.01" .value="${+this.meanRT.toFixed(0)}">
          <var>Mean RT</var>
        </decidables-spinner>`;
      } else {
        a = x$1`<var class="math-var a">a</var>`;
        z = x$1`<var class="math-var z">z</var>`;
        v = x$1`<var class="math-var v">v</var>`;
        t0 = x$1`<var class="math-var t0">t<sub>0</sub></var>`;
        s = x$1`<var class="math-var s">s</var>`;
        meanRT = x$1`<var class="mean-rt">Mean RT</var>`;
      }
      const equation = x$1`
      <tr>
        <td rowspan="2">
          ${meanRT}<span class="equals">=</span>
          ${t0}
          <span class="minus">−</span>
        </td>
        <td class="underline">
          ${z}
        </td>
        <td rowspan="2">
          <span class="plus">+</span>
        </td>
        <td class="underline">
          ${a}
        </td>
        <td rowspan="2">&nbsp;</td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${z} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          1
        </td>
      </tr>
      <tr>
        <td>
          ${v}
        </td>
        <td>
          ${v}
        </td>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${a} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;
      return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
    }
  }
  customElements.define('ddm-equation-azvt02m', DDMEquationAZVT02M);

  /*
    DDMExample Base Class - Not intended for instantiation!
  */
  class DDMExample extends AccumulableElement {
    static get styles() {
      return [super.styles, i$3`
        :host {
          ---border: var(--border, 1px solid var(---color-border));
          display: inline-block;

          margin-bottom: 1rem;
        }

        .holder {
          display: flex;
        }

        .body {
          display: flex;

          flex-wrap: wrap;

          align-items: center;
          justify-content: left;

          padding: 0.625rem;

          border: var(---border);
          border-radius: 0.25rem;
        }

        .body ::slotted(*) {
          margin: 0.625rem;
        }

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > rdk-task + sdt-response,
        ::slotted(rdk-task) + ::slotted(sdt-response) { */
        /* .body ::slotted(sdt-response) {
          margin-left: 0;
        } */

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > sdt-control + rdk-task,
        ::slotted(sdt-control) + ::slotted(rdk-task) {
          margin-left: 0;
        } */
        /* .body ::slotted(rdk-task) {
          margin-left: 0;
        } */
      `];
    }
    render() {
      /* eslint-disable-line class-methods-use-this */
      return x$1`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`;
    }
  }
  customElements.define('ddm-example', DDMExample);

  // import DDMMath from '@decidables/accumulable-math';


  /*
    DDMExampleHuman element
    <ddm-example-human>
  */
  class DDMExampleHuman extends DDMExample {
    constructor() {
      super();
      this.trialCount = 0;
    }
    connectedCallback() {
      super.connectedCallback();
      this.accumulableControl = this.querySelector('accumulable-control');
      this.rdkTask = this.querySelector('rdk-2afc-task');
      this.accumulableResponse = this.querySelector('accumulable-response');
      this.accumulableTable = this.querySelector('accumulable-table');
      this.ddmParameters = this.querySelector('ddm-parameters');
      this.ddmModel = this.querySelector('ddm-model');
      this.ddmFit = this.querySelector('ddm-fit');

      // Initialize
      this.ddmModel.clear();
      if (this.accumulableControl && this.accumulableControl.hasAttribute('trials')) {
        this.accumulableControl.addEventListener('accumulable-control-trials', event => {
          if (this.rdkTask) {
            this.rdkTask.trials = event.detail.trials;
          }
          if (this.accumulableResponse) {
            this.accumulableResponse.trialTotal = event.detail.trials;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('duration')) {
        this.accumulableControl.addEventListener('accumulable-control-duration', event => {
          if (this.rdkTask) {
            this.rdkTask.duration = event.detail.duration;
            this.rdkTask.wait = event.detail.duration;
            this.rdkTask.iti = event.detail.duration;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('coherence')) {
        this.accumulableControl.addEventListener('accumulable-control-coherence', event => {
          if (this.rdkTask) {
            this.rdkTask.coherence = event.detail.coherence;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('color')) {
        this.accumulableControl.addEventListener('accumulable-control-color', event => {
          if (this.accumulableTable) {
            this.accumulableTable.color = event.detail.color;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('run')) {
        this.accumulableControl.addEventListener('accumulable-control-run', (/* event */
        ) => {
          if (this.rdkTask) {
            this.rdkTask.running = true;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('pause')) {
        this.accumulableControl.addEventListener('accumulable-control-pause', (/* event */
        ) => {
          if (this.rdkTask) {
            this.rdkTask.running = false;
          }
        });
      }
      if (this.accumulableControl && this.accumulableControl.hasAttribute('reset')) {
        this.accumulableControl.addEventListener('accumulable-control-reset', (/* event */
        ) => {
          if (this.rdkTask) {
            this.rdkTask.reset();
          }
          if (this.accumulableResponse) {
            this.accumulableResponse.reset();
          }
          if (this.accumulableTable) {
            this.accumulableTable.correctCount = NaN;
            this.accumulableTable.errorCount = NaN;
            this.accumulableTable.nrCount = NaN;
            this.accumulableTable.accuracy = NaN;
            this.accumulableTable.correctMeanRT = NaN;
            this.accumulableTable.errorMeanRT = NaN;
            this.accumulableTable.meanRT = NaN;
            this.accumulableTable.correctSDRT = NaN;
            this.accumulableTable.errorSDRT = NaN;
            this.accumulableTable.sdRT = NaN;
          }

          // if (this.ddmParameters) {
          // }

          if (this.ddmModel) {
            this.ddmModel.clear();
          }
          if (this.ddmFit) {
            this.ddmFit.clear();
          }
        });
      }
      if (this.rdkTask) {
        if (this.accumulableResponse) {
          this.accumulableResponse.trialTotal = this.rdkTask.trials;
        }
      }
      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-start', event => {
          if (this.accumulableResponse) {
            this.accumulableResponse.start(event.detail.signal, event.detail.trial);
          }
        });
      }
      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-end', (/* event */
        ) => {
          if (this.accumulableResponse) {
            this.accumulableResponse.stop();
          }
        });
      }
      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-block-end', (/* event */
        ) => {
          if (this.accumulableControl) {
            this.accumulableControl.complete();
          }
        });
      }
      if (this.accumulableResponse) {
        this.accumulableResponse.addEventListener('accumulable-response', event => {
          if (this.accumulableTable) {
            this.accumulableTable.correctCount = event.detail.correctCount;
            this.accumulableTable.errorCount = event.detail.errorCount;
            this.accumulableTable.nrCount = event.detail.nrCount;
            this.accumulableTable.accuracy = event.detail.accuracy;
            this.accumulableTable.correctMeanRT = event.detail.correctMeanRT;
            this.accumulableTable.errorMeanRT = event.detail.errorMeanRT;
            this.accumulableTable.meanRT = event.detail.meanRT;
            this.accumulableTable.correctSDRT = event.detail.correctSDRT;
            this.accumulableTable.errorSDRT = event.detail.errorSDRT;
            this.accumulableTable.sdRT = event.detail.sdRT;
          }
          if (this.ddmModel) {
            this.ddmModel.trial({
              index: event.detail.trial,
              rt: event.detail.rt,
              outcome: event.detail.outcome
            });
          }
          if (this.ddmFit) {
            this.ddmFit.set({
              accuracy: event.detail.accuracy,
              correctMeanRT: event.detail.correctMeanRT,
              errorMeanRT: event.detail.errorMeanRT,
              meanRT: event.detail.meanRT,
              correctSDRT: event.detail.correctSDRT,
              errorSDRT: event.detail.errorSDRT,
              sdRT: event.detail.sdRT
            });
          }
        });
      }
      if (this.ddmFit) {
        this.ddmFit.addEventListener('ddm-fit-update', event => {
          if (this.ddmParameters) {
            this.ddmParameters.a = event.detail.a;
            this.ddmParameters.z = 0.5; // event.detail.z;
            this.ddmParameters.v = event.detail.v;
            this.ddmParameters.t0 = event.detail.t0;
          }
          if (this.ddmModel) {
            this.ddmModel.a = event.detail.a;
            this.ddmModel.z = 0.5; // event.detail.z;
            this.ddmModel.v = event.detail.v;
            this.ddmModel.t0 = event.detail.t0;
          }
        });
      }
    }
  }
  customElements.define('ddm-example-human', DDMExampleHuman);

  /*
    DDMExampleInteractive element
    <ddm-example-interactive>
  */
  class DDMExampleInteractive extends DDMExample {
    static get properties() {
      return {
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        t0: {
          attribute: 'nondecision-time',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.trials = 10;
      this.a = 1.2;
      this.z = 0.35;
      this.v = 1.5;
      this.t0 = 150;
      this.accumulableControl = null;
      this.accumulableTable = null;
      this.ddmParameters = null;
      this.ddmModel = null;
      this.data = undefined;
      this.model = undefined;
    }
    connectedCallback() {
      super.connectedCallback();
      this.accumulableControl = this.querySelector('accumulable-control');
      this.accumulableTable = this.querySelector('accumulable-table');
      this.ddmParameters = this.querySelector('ddm-parameters');
      this.ddmModel = this.querySelector('ddm-model');
      if (this.accumulableControl) {
        this.accumulableControl.addEventListener('accumulable-control-resample', (/* event */
        ) => {
          this.ddmModel?.resample();
          this.requestUpdate();
        });
        this.accumulableControl.addEventListener('accumulable-control-trials', event => {
          this.trials = event.detail.trials;
        });
      }
      if (this.ddmParameters) {
        this.ddmParameters.addEventListener('ddm-parameters-a', event => {
          this.a = event.detail.a;
        });
        this.ddmParameters.addEventListener('ddm-parameters-z', event => {
          this.z = event.detail.z;
        });
        this.ddmParameters.addEventListener('ddm-parameters-v', event => {
          this.v = event.detail.v;
        });
        this.ddmParameters.addEventListener('ddm-parameters-t0', event => {
          this.t0 = event.detail.t0;
        });
      }
      if (this.ddmModel) {
        this.ddmModel.addEventListener('ddm-model-a', event => {
          this.a = event.detail.a;
        });
        this.ddmModel.addEventListener('ddm-model-z', event => {
          this.z = event.detail.z;
        });
        this.ddmModel.addEventListener('ddm-model-v', event => {
          this.v = event.detail.v;
        });
        this.ddmModel.addEventListener('ddm-model-t0', event => {
          this.t0 = event.detail.t0;
        });
        this.ddmModel.addEventListener('ddm-model-output', event => {
          this.data = event.detail.data;
          this.model = event.detail.model;
          this.requestUpdate();
        });
      }
      this.requestUpdate();
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (this.accumulableControl) {
        this.accumulableControl.trials = this.trials;
      }
      if (this.accumulableTable && this.data) {
        this.accumulableTable.correctCount = this.data.correctCount;
        this.accumulableTable.errorCount = this.data.errorCount;
        this.accumulableTable.nrCount = this.data.nrCount;
        this.accumulableTable.accuracy = this.data.accuracy;
        this.accumulableTable.correctMeanRT = this.data.correctMeanRT;
        this.accumulableTable.errorMeanRT = this.data.errorMeanRT;
        this.accumulableTable.meanRT = this.data.meanRT;
        this.accumulableTable.correctSDRT = this.data.correctSDRT;
        this.accumulableTable.errorSDRT = this.data.errorSDRT;
        this.accumulableTable.sdRT = this.data.sdRT;
      }
      if (this.ddmParameters) {
        this.ddmParameters.a = this.a;
        this.ddmParameters.z = this.z;
        this.ddmParameters.v = this.v;
        this.ddmParameters.t0 = this.t0;
      }
      if (this.ddmModel) {
        this.ddmModel.trials = this.trials;
        this.ddmModel.a = +this.a;
        this.ddmModel.z = +this.z;
        this.ddmModel.v = +this.v;
        this.ddmModel.t0 = +this.t0;
      }
    }
  }
  customElements.define('ddm-example-interactive', DDMExampleInteractive);

  // import DDMMath from '@decidables/accumulable-math';


  /*
    DDMExampleModel element
    <ddm-example-model>
  */
  class DDMExampleModel extends DDMExample {
    static get properties() {
      return {
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        a: {
          attribute: 'boundary-separation',
          type: Number,
          reflect: true
        },
        z: {
          attribute: 'starting-point',
          type: Number,
          reflect: true
        },
        v: {
          attribute: 'drift-rate',
          type: Number,
          reflect: true
        },
        t0: {
          attribute: 'nondecision-time',
          type: Number,
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.trials = 10;
      this.duration = 2000;
      this.coherence = 0.5;
      this.colors = ['none', 'measure', 'outcome', 'all'];
      this.color = 'outcome';
      this.a = 1.2;
      this.z = 0.35;
      this.v = 1.5;
      this.t0 = 150;
      this.accumulableControl = null;
      this.rdkTask = null;
      this.ddmParameters = null;
      this.ddmModel = null;
      this.accumulableResponse = null;
      this.accumulableTable = null;
      this.trialCount = 0;
      this.signals = ['left', 'right']; // Possible values of 'signal'
      this.signal = undefined; // Signal for current trial
      this.data = undefined;
      this.model = undefined;
    }
    connectedCallback() {
      super.connectedCallback();
      this.accumulableControl = this.querySelector('accumulable-control');
      this.rdkTask = this.querySelector('rdk-2afc-task');
      this.ddmParameters = this.querySelector('ddm-parameters');
      this.ddmModel = this.querySelector('ddm-model');
      this.accumulableResponse = this.querySelector('accumulable-response');
      this.accumulableTable = this.querySelector('accumulable-table');
      if (this.accumulableControl) {
        if (this.accumulableControl.hasAttribute('trials')) {
          this.accumulableControl.addEventListener('accumulable-control-trials', event => {
            this.trials = event.detail.trials;
          });
        }
        if (this.accumulableControl.hasAttribute('duration')) {
          this.accumulableControl.addEventListener('accumulable-control-duration', event => {
            this.duration = event.detail.duration;
          });
        }
        if (this.accumulableControl.hasAttribute('color')) {
          this.accumulableControl.addEventListener('accumulable-control-color', event => {
            this.color = event.detail.color;
          });
        }
        if (this.accumulableControl.hasAttribute('run')) {
          this.accumulableControl.addEventListener('accumulable-control-run', (/* event */
          ) => {
            if (this.rdkTask) {
              this.rdkTask.running = true;
            }
            if (this.ddmModel) {
              this.ddmModel.resumeTrial();
            }
          });
        }
        if (this.accumulableControl.hasAttribute('pause')) {
          this.accumulableControl.addEventListener('accumulable-control-pause', (/* event */
          ) => {
            if (this.rdkTask) {
              this.rdkTask.running = false;
            }
            if (this.ddmModel) {
              this.ddmModel.pauseTrial();
            }
          });
        }
        if (this.accumulableControl.hasAttribute('reset')) {
          this.accumulableControl.addEventListener('accumulable-control-reset', (/* event */
          ) => {
            this.trialCount = 0;
            this.signal = undefined;
            if (this.rdkTask) {
              this.rdkTask.reset();
            }
            if (this.ddmModel) {
              this.ddmModel.trials = this.trialCount;
            }
            if (this.accumulableResponse) {
              this.accumulableResponse.reset();
            }
            if (this.accumulableTable) ;
          });
        }
      }
      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-start', event => {
          this.signal = event.detail.signal;
          if (this.accumulableResponse) {
            this.accumulableResponse.start(event.detail.signal, event.detail.trial);
          }
          if (this.ddmModel) {
            this.trialCount += 1;
            this.ddmModel.trial();
          }
        });
        this.rdkTask.addEventListener('rdk-trial-end', (/* event */
        ) => {
          this.signal = undefined;
          if (this.accumulableResponse) {
            this.accumulableResponse.stop();
          }
        });
        this.rdkTask.addEventListener('rdk-block-end', (/* event */
        ) => {
          if (this.accumulableControl) {
            this.accumulableControl.complete();
          }
        });
      }
      if (this.ddmParameters) {
        this.ddmParameters.addEventListener('ddm-parameters-a', event => {
          this.a = event.detail.a;
        });
        this.ddmParameters.addEventListener('ddm-parameters-z', event => {
          this.z = event.detail.z;
        });
        this.ddmParameters.addEventListener('ddm-parameters-v', event => {
          this.v = event.detail.v;
        });
        this.ddmParameters.addEventListener('ddm-parameters-t0', event => {
          this.t0 = event.detail.t0;
        });
      }
      if (this.ddmModel) {
        this.ddmModel.addEventListener('ddm-model-a', event => {
          this.a = event.detail.a;
        });
        this.ddmModel.addEventListener('ddm-model-z', event => {
          this.z = event.detail.z;
        });
        this.ddmModel.addEventListener('ddm-model-v', event => {
          this.v = event.detail.v;
        });
        this.ddmModel.addEventListener('ddm-model-t0', event => {
          this.t0 = event.detail.t0;
        });
        this.ddmModel.addEventListener('ddm-model-output', event => {
          this.data = event.detail.data;
          this.model = event.detail.model;
          this.requestUpdate();
        });
        if (this.ddmModel) {
          this.ddmModel.addEventListener('accumulable-response', event => {
            if (this.accumulableResponse) {
              const response = event.detail.outcome === 'correct' ? this.signal : this.signal === 'left' ? 'right' : 'left';
              this.accumulableResponse.responded(response);
            }
            this.data = event.detail.data;
            this.model = event.detail.model;
            this.requestUpdate();
          });
        }
      }
      this.requestUpdate();
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (this.trialCount > this.trials) {
        this.trialCount = this.trials;
      }
      if (this.accumulableControl) {
        this.accumulableControl.trials = this.trials;
        this.accumulableControl.duration = this.duration;
        this.accumulableControl.coherence = this.coherence;
        this.accumulableControl.color = this.color;
      }
      if (this.rdkTask) {
        this.rdkTask.trials = this.trials;
        this.rdkTask.duration = this.duration;
        this.rdkTask.coherence = this.coherence;
      }
      if (this.ddmParameters) {
        this.ddmParameters.a = this.a;
        this.ddmParameters.z = this.z;
        this.ddmParameters.v = this.v;
        this.ddmParameters.t0 = this.t0;
      }
      if (this.ddmModel) {
        this.ddmModel.trials = this.trialCount;
        this.ddmModel.a = +this.a;
        this.ddmModel.z = +this.z;
        this.ddmModel.v = +this.v;
        this.ddmModel.t0 = +this.t0;
      }
      if (this.accumulableResponse) {
        this.accumulableResponse.trialTotal = this.trials;
      }
      if (this.accumulableTable) {
        this.accumulableTable.color = this.color;
      }
      if (this.accumulableTable && this.data) {
        this.accumulableTable.correctCount = this.data.correctCount;
        this.accumulableTable.errorCount = this.data.errorCount;
        this.accumulableTable.nrCount = this.data.nrCount;
        this.accumulableTable.accuracy = this.data.accuracy;
        this.accumulableTable.correctMeanRT = this.data.correctMeanRT;
        this.accumulableTable.errorMeanRT = this.data.errorMeanRT;
        this.accumulableTable.meanRT = this.data.meanRT;
        this.accumulableTable.correctSDRT = this.data.correctSDRT;
        this.accumulableTable.errorSDRT = this.data.errorSDRT;
        this.accumulableTable.sdRT = this.data.sdRT;
      }
    }
  }
  customElements.define('ddm-example-model', DDMExampleModel);

  exports.AccumulableControl = AccumulableControl;
  exports.AccumulableElement = AccumulableElement;
  exports.AccumulableResponse = AccumulableResponse;
  exports.AccumulableTable = AccumulableTable;
  exports.DDMEquationAZV2PC = DDMEquationAZV2PC;
  exports.DDMEquationAZVT02M = DDMEquationAZVT02M;
  exports.DDMExampleHuman = DDMExampleHuman;
  exports.DDMExampleInteractive = DDMExampleInteractive;
  exports.DDMExampleModel = DDMExampleModel;
  exports.DDMFit = DDMFit;
  exports.DDMModel = DDMModel;
  exports.DDMParameters = DDMParameters;
  exports.RDK2AFCTask = RDK2AFCTask;

}));
//# sourceMappingURL=accumulableElements.umd.js.map
