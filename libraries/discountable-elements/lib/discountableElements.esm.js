/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis,
  e$3 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$4 = Symbol(),
  o$5 = new WeakMap();
let n$4 = class n {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== s$4) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e$3 && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = o$5.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$5.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const r$5 = t => new n$4("string" == typeof t ? t : t + "", void 0, s$4),
  i$4 = (t, ...e) => {
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[o + 1], t[0]);
    return new n$4(o, t, s$4);
  },
  S$1 = (s, o) => {
    if (e$3) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
      const o = document.createElement("style"),
        n = t$2.litNonce;
      void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
  },
  c$6 = e$3 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r$5(e);
  })(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: i$3,
    defineProperty: e$2,
    getOwnPropertyDescriptor: r$4,
    getOwnPropertyNames: h$2,
    getOwnPropertySymbols: o$4,
    getPrototypeOf: n$3
  } = Object,
  a$3 = globalThis,
  c$5 = a$3.trustedTypes,
  l$1 = c$5 ? c$5.emptyScript : "",
  p$1 = a$3.reactiveElementPolyfillSupport,
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
  f$3 = (t, s) => !i$3(t, s),
  y$2 = {
    attribute: !0,
    type: String,
    converter: u$1,
    reflect: !1,
    hasChanged: f$3
  };
Symbol.metadata ??= Symbol("metadata"), a$3.litPropertyMetadata ??= new WeakMap();
let b$2 = class b extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, s = y$2) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
      const i = Symbol(),
        r = this.getPropertyDescriptor(t, i, s);
      void 0 !== r && e$2(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const {
      get: e,
      set: h
    } = r$4(this.prototype, t) ?? {
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
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y$2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t = n$3(this);
    t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t = this.properties,
        s = [...h$2(t), ...o$4(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const s = litPropertyMetadata.get(t);
      if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
    }
    this._$Eh = new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      void 0 !== i && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const i = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const s of e) i.unshift(c$6(s));
    } else void 0 !== s && i.push(c$6(s));
    return i;
  }
  static _$Eu(t, s) {
    const i = s.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
  }
  addController(t) {
    (this._$EO ??= new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
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
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(t => t.hostConnected?.());
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
    if (void 0 !== e && !0 === i.reflect) {
      const r = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
      this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i._$Eh.get(t);
    if (void 0 !== e && this._$Em !== e) {
      const t = i.getPropertyOptions(e),
        r = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== t.converter?.fromAttribute ? t.converter : u$1;
      this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
    }
  }
  requestUpdate(t, s, i) {
    if (void 0 !== t) {
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$3)(this[t], s)) return;
      this.P(t, s, i);
    }
    !1 === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
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
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0) for (const [s, i] of t) !0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach(t => this._$EC(t, this[t])), this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
};
b$2.elementStyles = [], b$2.shadowRootOptions = {
  mode: "open"
}, b$2[d$1("elementProperties")] = new Map(), b$2[d$1("finalized")] = new Map(), p$1?.({
  ReactiveElement: b$2
}), (a$3.reactiveElementVersions ??= []).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis,
  i$2 = t$1.trustedTypes,
  s$3 = i$2 ? i$2.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  e$1 = "$lit$",
  h$1 = `lit$${Math.random().toFixed(9).slice(2)}$`,
  o$3 = "?" + h$1,
  n$2 = `<${o$3}>`,
  r$3 = document,
  l = () => r$3.createComment(""),
  c$4 = t => null === t || "object" != typeof t && "function" != typeof t,
  a$2 = Array.isArray,
  u = t => a$2(t) || "function" == typeof t?.[Symbol.iterator],
  d = "[ \t\n\f\r]",
  f$2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v$1 = /-->/g,
  _ = />/g,
  m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  p = /'/g,
  g$1 = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  y$1 = t => (i, ...s) => ({
    _$litType$: t,
    strings: i,
    values: s
  }),
  x$2 = y$1(1),
  b$1 = y$1(2),
  w$1 = Symbol.for("lit-noChange"),
  T = Symbol.for("lit-nothing"),
  A$2 = new WeakMap(),
  E$1 = r$3.createTreeWalker(r$3, 129);
function C$1(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$3 ? s$3.createHTML(i) : i;
}
const P = (t, i) => {
  const s = t.length - 1,
    o = [];
  let r,
    l = 2 === i ? "<svg>" : "",
    c = f$2;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let a,
      u,
      d = -1,
      y = 0;
    for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === f$2 ? "!--" === u[1] ? c = v$1 : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f$2, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g$1 : p) : c === g$1 || c === p ? c = m : c === v$1 || c === _ ? c = f$2 : (c = m, r = void 0);
    const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
    l += c === f$2 ? s + n$2 : d >= 0 ? (o.push(a), s.slice(0, d) + e$1 + s.slice(d) + h$1 + x) : s + h$1 + (-2 === d ? i : x);
  }
  return [C$1(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), o];
};
class V {
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
      [f, v] = P(t, s);
    if (this.el = V.createElement(f, n), E$1.currentNode = this.el.content, 2 === s) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (r = E$1.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(e$1)) {
          const i = v[a++],
            s = r.getAttribute(t).split(h$1),
            e = /([.?@])?(.*)/.exec(i);
          d.push({
            type: 1,
            index: c,
            name: e[2],
            strings: s,
            ctor: "." === e[1] ? k$1 : "?" === e[1] ? H : "@" === e[1] ? I : R
          }), r.removeAttribute(t);
        } else t.startsWith(h$1) && (d.push({
          type: 6,
          index: c
        }), r.removeAttribute(t));
        if ($.test(r.tagName)) {
          const t = r.textContent.split(h$1),
            s = t.length - 1;
          if (s > 0) {
            r.textContent = i$2 ? i$2.emptyScript : "";
            for (let i = 0; i < s; i++) r.append(t[i], l()), E$1.nextNode(), d.push({
              type: 2,
              index: ++c
            });
            r.append(t[s], l());
          }
        }
      } else if (8 === r.nodeType) if (r.data === o$3) d.push({
        type: 2,
        index: c
      });else {
        let t = -1;
        for (; -1 !== (t = r.data.indexOf(h$1, t + 1));) d.push({
          type: 7,
          index: c
        }), t += h$1.length - 1;
      }
      c++;
    }
  }
  static createElement(t, i) {
    const s = r$3.createElement("template");
    return s.innerHTML = t, s;
  }
}
function N$1(t, i, s = t, e) {
  if (i === w$1) return i;
  let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
  const o = c$4(i) ? void 0 : i._$litDirective$;
  return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = N$1(t, h._$AS(t, i.values), h, e)), i;
}
class S {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
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
      e = (t?.creationScope ?? r$3).importNode(i, !0);
    E$1.currentNode = e;
    let h = E$1.nextNode(),
      o = 0,
      n = 0,
      l = s[0];
    for (; void 0 !== l;) {
      if (o === l.index) {
        let i;
        2 === l.type ? i = new M$1(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new L(h, this, t)), this._$AV.push(i), l = s[++n];
      }
      o !== l?.index && (h = E$1.nextNode(), o++);
    }
    return E$1.currentNode = r$3, e;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
let M$1 = class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, s, e) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = N$1(this, t, i), c$4(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w$1 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== T && c$4(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$3.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C$1(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === e) this._$AH.p(i);else {
      const t = new S(e, this),
        s = t.u(this.options);
      t.p(i), this.T(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = A$2.get(t.strings);
    return void 0 === i && A$2.set(t.strings, i = new V(t)), i;
  }
  k(t) {
    a$2(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const h of t) e === i.length ? i.push(s = new M(this.S(l()), this.S(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
  }
};
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, e, h) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
  }
  _$AI(t, i = this, s, e) {
    const h = this.strings;
    let o = !1;
    if (void 0 === h) t = N$1(this, t, i, 0), o = !c$4(t) || t !== this._$AH && t !== w$1, o && (this._$AH = t);else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++) r = N$1(this, e[s + n], i, n), r === w$1 && (r = this._$AH[n]), o ||= !c$4(r) || r !== this._$AH[n], r === T ? t = T : t !== T && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
    }
    o && !e && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
let k$1 = class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
};
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class I extends R {
  constructor(t, i, s, e, h) {
    super(t, i, s, e, h), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = N$1(this, t, i, 0) ?? T) === w$1) return;
    const s = this._$AH,
      e = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
      h = t !== T && (s === T || e);
    e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class L {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N$1(this, t);
  }
}
const Z = t$1.litHtmlPolyfillSupport;
Z?.(V, M$1), (t$1.litHtmlVersions ??= []).push("3.1.3");
const j$1 = (t, i, s) => {
  const e = s?.renderBefore ?? i;
  let h = e._$litPart$;
  if (void 0 === h) {
    const t = s?.renderBefore ?? null;
    e._$litPart$ = h = new M$1(i.insertBefore(l(), t), t, void 0, s ?? {});
  }
  return h._$AI(t), h;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$2 = class s extends b$2 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = j$1(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w$1;
  }
};
s$2._$litElement$ = !0, s$2[("finalized")] = !0, globalThis.litElementHydrateSupport?.({
  LitElement: s$2
});
const r$2 = globalThis.litElementPolyfillSupport;
r$2?.({
  LitElement: s$2
});
(globalThis.litElementVersions ??= []).push("4.0.5");

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

function number$4(x) {
  return x === null ? NaN : +x;
}
function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

const ascendingBisect = bisector(ascending$1);
const bisectRight = ascendingBisect.right;
bisector(number$4).center;

function count(values, valueof) {
  let count = 0;
  {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}

function length$1(array) {
  return array.length | 0;
}
function empty$1(length) {
  return !(length > 0);
}
function arrayify$1(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce) {
  return values => reduce(...values);
}
function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify$1);
  const lengths = values.map(length$1);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty$1)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}

function cumsum(values, valueof) {
  var sum = 0;
  return Float64Array.from(values, v => sum += +v || 0 );
}

function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}

function deviation(values, valueof) {
  const v = variance(values, valueof);
  return v ? Math.sqrt(v) : v;
}

function extent$1(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j],
        hi = x + y,
        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n,
      x,
      y,
      lo,
      hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
}

class InternMap extends Map {
  constructor(entries, key = keyof$1) {
    super();
    Object.defineProperties(this, {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}
class InternSet extends Set {
  constructor(values, key = keyof$1) {
    super();
    Object.defineProperties(this, {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}
function intern_get({
  _intern,
  _key
}, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({
  _intern,
  _key
}, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({
  _intern,
  _key
}, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof$1(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

function identity$8(x) {
  return x;
}

function group(values, ...keys) {
  return nest(values, identity$8, identity$8, keys);
}
function rollup(values, reduce, ...keys) {
  return nest(values, identity$8, reduce, keys);
}
function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}
function nest(values, map, reduce, keys) {
  return function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new InternMap();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  }(values, 0);
}

function permute(source, keys) {
  return Array.from(keys, key => source[key]);
}

function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f] = F;
  if (f && f.length !== 2 || F.length > 1) {
    const index = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map(f => values.map(f));
      index.sort((i, j) => {
        for (const f of F) {
          const c = ascendingDefined$1(f[i], f[j]);
          if (c) return c;
        }
      });
    } else {
      f = values.map(f);
      index.sort((i, j) => ascendingDefined$1(f[i], f[j]));
    }
    return permute(values, index);
  }
  return values.sort(compareDefined(f));
}
function compareDefined(compare = ascending$1) {
  if (compare === ascending$1) return ascendingDefined$1;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a, b) => {
    const x = compare(a, b);
    if (x || x === 0) return x;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}
function ascendingDefined$1(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}

function groupSort(values, reduce, key) {
  return (reduce.length !== 2 ? sort(rollup(values, reduce, key), ([ak, av], [bk, bv]) => ascending$1(av, bv) || ascending$1(ak, bk)) : sort(group(values, key), ([ak, av], [bk, bv]) => reduce(av, bv) || ascending$1(ak, bk))).map(([key]) => key);
}

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

function thresholdSturges(values) {
  return Math.max(1, Math.ceil(Math.log(count(values)) / Math.LN2) + 1);
}

function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && (max < value || max === undefined && value >= value)) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
        max = value;
      }
    }
  }
  return max;
}

function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null && (max < value || max === undefined && value >= value)) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}

function min$1(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && (min > value || min === undefined && value >= value)) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
        min = value;
      }
    }
  }
  return min;
}

function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null && (min > value || min === undefined && value >= value)) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}

// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = Infinity, compare) {
  k = Math.floor(k);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array.length - 1, right));
  if (!(left <= k && k <= right)) return array;
  compare = compare === undefined ? ascendingDefined$1 : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }
    const t = array[k];
    let i = left;
    let j = right;
    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);
    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }
    if (compare(array[left], t) === 0) swap(array, left, j);else ++j, swap(array, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}
function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function greatest(values, compare = ascending$1) {
  let max;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? ascending$1(value, maxValue) > 0 : ascending$1(value, value) === 0) {
        max = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
        max = value;
        defined = true;
      }
    }
  }
  return max;
}

function quantile$1(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min$1(values);
  if (p >= 1) return max(values);
  var n,
    i = (n - 1) * p,
    i0 = Math.floor(i),
    value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
    value1 = min$1(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = number$4) {
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
    i = (n - 1) * p,
    i0 = Math.floor(i),
    value0 = +valueof(values[i0], i0, values),
    value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function thresholdFreedmanDiaconis(values, min, max) {
  const c = count(values),
    d = quantile$1(values, 0.75) - quantile$1(values, 0.25);
  return c && d ? Math.ceil((max - min) / (2 * d * Math.pow(c, -1 / 3))) : 1;
}

function thresholdScott(values, min, max) {
  const c = count(values),
    d = deviation(values);
  return c && d ? Math.ceil((max - min) * Math.cbrt(c) / (3.49 * d)) : 1;
}

function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}

function median(values, valueof) {
  return quantile$1(values, 0.5, valueof);
}

function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

function mode(values, valueof) {
  const counts = new InternMap();
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  }
  let modeValue;
  let modeCount = 0;
  for (const [value, count] of counts) {
    if (count > modeCount) {
      modeCount = count;
      modeValue = value;
    }
  }
  return modeValue;
}

function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}
function pair(a, b) {
  return [a, b];
}

function range$1(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
    n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
    range = new Array(n);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}

function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}

function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}

function identity$7 (x) {
  return x;
}

var top = 1,
  right = 2,
  bottom = 3,
  left = 4,
  epsilon$3 = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number$3(scale) {
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
      format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$7 : tickFormat,
      spacing = Math.max(tickSizeInner, 0) + tickPadding,
      range = scale.range(),
      range0 = +range[0] + offset,
      range1 = +range[range.length - 1] + offset,
      position = (scale.bandwidth ? center : number$3)(scale.copy(), offset),
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
      tickExit = tickExit.transition(context).attr("opacity", epsilon$3).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon$3).attr("transform", function (d) {
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
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

var noop$2 = {
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
      type[i] = noop$2, type = type.slice(0, i).concat(type.slice(i + 1));
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

function constant$4 (x) {
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
  if (typeof value !== "function") value = constant$4(value);
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

function sourceEvent (event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

function pointof (event, node) {
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

var constant$3 = (x => () => x);

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
      p = pointof(touch || event, container),
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
          p = pointof(touch || event, container), n = active;
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
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$3(!!_), drag) : filter;
  };
  drag.container = function (_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$3(_), drag) : container;
  };
  drag.subject = function (_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$3(_), drag) : subject;
  };
  drag.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), drag) : touchable;
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
var named$1 = {
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
define(Color, color$1, {
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
function color$1(format) {
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
  : named$1.hasOwnProperty(format) ? rgbn(named$1[format]) // eslint-disable-line no-prototype-builtins
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
  if (!(o instanceof Color)) o = color$1(o);
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
  if (!(o instanceof Color)) o = color$1(o);
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
function hsl$1(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl$1, extend(Color, {
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

const radians$2 = Math.PI / 180;
const degrees$2 = 180 / Math.PI;

// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18,
  Xn = 0.96422,
  Yn = 1,
  Zn = 0.82521,
  t0$1 = 4 / 29,
  t1$1 = 6 / 29,
  t2 = 3 * t1$1 * t1$1,
  t3 = t1$1 * t1$1 * t1$1;
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
    g = rgb2lrgb(o.g),
    b = rgb2lrgb(o.b),
    y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
    x,
    z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab$1(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}
define(Lab, lab$1, extend(Color, {
  brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb() {
    var y = (this.l + 16) / 116,
      x = isNaN(this.a) ? y : y + this.a / 500,
      z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0$1;
}
function lab2xyz(t) {
  return t > t1$1 ? t * t * t : t2 * (t - t0$1);
}
function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees$2;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl$1(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians$2;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define(Hcl, hcl$1, extend(Color, {
  brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

var A$1 = -0.14861,
  B = +1.78277,
  C = -0.29227,
  D = -0.90649,
  E = +1.97294,
  ED = E * D,
  EB = E * B,
  BC_DA = B * C - D * A$1;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
    bl = b - l,
    k = (E * (g - l) - C * bl) / D,
    s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
    // NaN if l=0 or l=1
    h = s ? Math.atan2(k, bl) * degrees$2 - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix$1(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Cubehelix, cubehelix$1, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians$2,
      l = +this.l,
      a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
      cosh = Math.cos(h),
      sinh = Math.sin(h);
    return new Rgb(255 * (l + a * (A$1 * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
    t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis$1 (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
      v1 = values[i],
      v2 = values[i + 1],
      v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
      v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

var constant$2 = (x => () => x);

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
function hue(a, b) {
  var d = b - a;
  return d ? linear$2(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$2(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$2(a, d) : constant$2(isNaN(a) ? b : a);
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
function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
      r = new Array(n),
      g = new Array(n),
      b = new Array(n),
      i,
      color;
    for (i = 0; i < n; ++i) {
      color = rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}
var rgbBasis = rgbSpline(basis$1);

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

function date$1 (a, b) {
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
function one$1(b) {
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
  return s.length < 2 ? q[0] ? one$1(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
    return s.join("");
  });
}

function interpolate$1 (a, b) {
  var t = typeof b,
    c;
  return b == null || t === "boolean" ? constant$2(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color$1(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color$1 ? interpolateRgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}

function interpolateRound (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees$1 = 180 / Math.PI;
var identity$6 = {
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
    rotate: Math.atan2(b, a) * degrees$1,
    skewX: Math.atan(skewX) * degrees$1,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$6 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$6;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$6;
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

function hsl(hue) {
  return function (start, end) {
    var h = hue((start = hsl$1(start)).h, (end = hsl$1(end)).h),
      s = nogamma(start.s, end.s),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var interpolateHsl = hsl(hue);

function lab(start, end) {
  var l = nogamma((start = lab$1(start)).l, (end = lab$1(end)).l),
    a = nogamma(start.a, end.a),
    b = nogamma(start.b, end.b),
    opacity = nogamma(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

function hcl(hue) {
  return function (start, end) {
    var h = hue((start = hcl$1(start)).h, (end = hcl$1(end)).h),
      c = nogamma(start.c, end.c),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var interpolateHcl = hcl(hue);

function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix(start, end) {
      var h = hue((start = cubehelix$1(start)).h, (end = cubehelix$1(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }
    cubehelix.gamma = cubehelixGamma;
    return cubehelix;
  }(1);
}
cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);

function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = interpolate$1;
  var i = 0,
    n = values.length - 1,
    v = values[0],
    I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function (t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

function quantize (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}

var frame$1 = 0,
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
  ++frame$1; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
    e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame$1;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame$1 = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame$1 = 0;
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
  if (frame$1) return; // Soonest alarm already set, or will be.
  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval$1) interval$1 = clearInterval(interval$1);
  } else {
    if (!interval$1) clockLast = clock.now(), interval$1 = setInterval(poke, pokeDelay);
    frame$1 = 1, setFrame(wake);
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
  create$1(node, id, {
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
function create$1(node, id, self) {
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
  return (typeof b === "number" ? interpolateNumber : b instanceof color$1 ? interpolateRgb : (c = color$1(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
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
function inherit$1(node, id) {
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
        schedule(node, name, id, i, group, timing || inherit$1(node, id));
      }
    }
  }
  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

const pi$3 = Math.PI,
  tau$3 = 2 * pi$3,
  epsilon$2 = 1e-6,
  tauEpsilon = tau$3 - epsilon$2;
function append$1(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound$1(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append$1;
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
    this._append = digits == null ? append$1 : appendRound$1(digits);
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
    else if (!(l01_2 > epsilon$2)) ;

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$2) || !r) {
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
        l = r * Math.tan((pi$3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
        t01 = l / l01,
        t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$2) {
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
    else if (Math.abs(this._x1 - x0) > epsilon$2 || Math.abs(this._y1 - y0) > epsilon$2) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$3 + tau$3;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$2) {
      this._append`A${r},${r},0,${+(da >= pi$3)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}
function pathRound(digits = 3) {
  return new Path(+digits);
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
var re$1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re$1.exec(specifier))) throw new Error("invalid format: " + specifier);
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

function identity$5 (x) {
  return x;
}

var map$1 = Array.prototype.map,
  prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale$1 (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$5 : formatGroup(map$1.call(locale.grouping, Number), locale.thousands + ""),
    currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals = locale.numerals === undefined ? identity$5 : formatNumerals(map$1.call(locale.numerals, String)),
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

var locale$1;
var format$1;
var formatPrefix;
defaultLocale$1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format$1 = locale$1.format;
  formatPrefix = locale$1.formatPrefix;
  return locale$1;
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

var epsilon$1 = 1e-6;
var epsilon2 = 1e-12;
var pi$2 = Math.PI;
var halfPi = pi$2 / 2;
var quarterPi = pi$2 / 4;
var tau$2 = pi$2 * 2;
var degrees = 180 / pi$2;
var radians$1 = pi$2 / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos$1 = Math.cos;
var exp = Math.exp;
var log$1 = Math.log;
var pow$1 = Math.pow;
var sin$1 = Math.sin;
var sign$1 = Math.sign || function (x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt$1 = Math.sqrt;
var tan = Math.tan;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$2 : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function noop$1() {}

function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function (object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function (object, stream) {
    var features = object.features,
      i = -1,
      n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function (object, stream) {
    stream.sphere();
  },
  Point: function (object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function (object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function (object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function (object, stream) {
    var geometries = object.geometries,
      i = -1,
      n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates, stream, closed) {
  var i = -1,
    n = coordinates.length - closed,
    coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
  var i = -1,
    n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}
function geoStream (object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

function spherical(cartesian) {
  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
}
function cartesian(spherical) {
  var lambda = spherical[0],
    phi = spherical[1],
    cosPhi = cos$1(phi);
  return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

function compose (a, b) {
  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }
  if (a.invert && b.invert) compose.invert = function (x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };
  return compose;
}

function rotationIdentity(lambda, phi) {
  if (abs(lambda) > pi$2) lambda -= Math.round(lambda / tau$2) * tau$2;
  return [lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau$2) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function (lambda, phi) {
    lambda += deltaLambda;
    if (abs(lambda) > pi$2) lambda -= Math.round(lambda / tau$2) * tau$2;
    return [lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos$1(deltaPhi),
    sinDeltaPhi = sin$1(deltaPhi),
    cosDeltaGamma = cos$1(deltaGamma),
    sinDeltaGamma = sin$1(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos$1(phi),
      x = cos$1(lambda) * cosPhi,
      y = sin$1(lambda) * cosPhi,
      z = sin$1(phi),
      k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), asin(k * cosDeltaGamma + y * sinDeltaGamma)];
  }
  rotation.invert = function (lambda, phi) {
    var cosPhi = cos$1(phi),
      x = cos$1(lambda) * cosPhi,
      y = sin$1(lambda) * cosPhi,
      z = sin$1(phi),
      k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), asin(k * cosDeltaPhi - x * sinDeltaPhi)];
  };
  return rotation;
}
function rotation (rotate) {
  rotate = rotateRadians(rotate[0] * radians$1, rotate[1] * radians$1, rotate.length > 2 ? rotate[2] * radians$1 : 0);
  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * radians$1, coordinates[1] * radians$1);
    return coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates;
  }
  forward.invert = function (coordinates) {
    coordinates = rotate.invert(coordinates[0] * radians$1, coordinates[1] * radians$1);
    return coordinates[0] *= degrees, coordinates[1] *= degrees, coordinates;
  };
  return forward;
}

// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos$1(radius),
    sinRadius = sin$1(radius),
    step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau$2;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$2;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau$2 - epsilon$1) % tau$2;
}

function clipBuffer () {
  var lines = [],
    line;
  return {
    point: function (x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function () {
      lines.push(line = []);
    },
    lineEnd: noop$1,
    rejoin: function () {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function () {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

function pointEqual (a, b) {
  return abs(a[0] - b[0]) < epsilon$1 && abs(a[1] - b[1]) < epsilon$1;
}

function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
function clipRejoin (segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
    clip = [],
    i,
    n;
  segments.forEach(function (segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n,
      p0 = segment[0],
      p1 = segment[n],
      x;
    if (pointEqual(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      // handle degenerate cases by moving the point
      p1[0] += 2 * epsilon$1;
    }
    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start = subject[0],
    points,
    point;
  while (1) {
    // Find first unvisited intersection.
    var current = start,
      isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array) {
  if (!(n = array.length)) return;
  var n,
    i = 0,
    a = array[0],
    b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

function longitude(point) {
  return abs(point[0]) <= pi$2 ? point[0] : sign$1(point[0]) * ((abs(point[0]) + pi$2) % tau$2 - pi$2);
}
function polygonContains (polygon, point) {
  var lambda = longitude(point),
    phi = point[1],
    sinPhi = sin$1(phi),
    normal = [sin$1(lambda), -cos$1(lambda), 0],
    angle = 0,
    winding = 0;
  var sum = new Adder();
  if (sinPhi === 1) phi = halfPi + epsilon$1;else if (sinPhi === -1) phi = -halfPi - epsilon$1;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
      m,
      point0 = ring[m - 1],
      lambda0 = longitude(point0),
      phi0 = point0[1] / 2 + quarterPi,
      sinPhi0 = sin$1(phi0),
      cosPhi0 = cos$1(phi0);
    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
        lambda1 = longitude(point1),
        phi1 = point1[1] / 2 + quarterPi,
        sinPhi1 = sin$1(phi1),
        cosPhi1 = cos$1(phi1),
        delta = lambda1 - lambda0,
        sign = delta >= 0 ? 1 : -1,
        absDelta = sign * delta,
        antimeridian = absDelta > pi$2,
        k = sinPhi0 * sinPhi1;
      sum.add(atan2(k * sign * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
      angle += antimeridian ? delta + sign * tau$2 : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -epsilon$1 || angle < epsilon$1 && sum < -epsilon2) ^ winding & 1;
}

function clip (pointVisible, clipLine, interpolate, start) {
  return function (sink) {
    var line = clipLine(sink),
      ringBuffer = clipBuffer(),
      ringSink = clipLine(ringBuffer),
      polygonStarted = false,
      polygon,
      segments,
      ring;
    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function () {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function () {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(),
        ringSegments = ringBuffer.result(),
        i,
        n = ringSegments.length,
        m,
        segment,
        point;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon$1 : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon$1 : halfPi - b[1]);
}

var clipAntimeridian = clip(function () {
  return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi$2, -halfPi]);

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
    phi0 = NaN,
    sign0 = NaN,
    clean; // no intersections

  return {
    lineStart: function () {
      stream.lineStart();
      clean = 1;
    },
    point: function (lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi$2 : -pi$2,
        delta = abs(lambda1 - lambda0);
      if (abs(delta - pi$2) < epsilon$1) {
        // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi$2) {
        // line crosses antimeridian
        if (abs(lambda0 - sign0) < epsilon$1) lambda0 -= sign0 * epsilon$1; // handle degeneracies
        if (abs(lambda1 - sign1) < epsilon$1) lambda1 -= sign1 * epsilon$1;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function () {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function () {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
    cosPhi1,
    sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon$1 ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1) - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi$2, phi);
    stream.point(0, phi);
    stream.point(pi$2, phi);
    stream.point(pi$2, 0);
    stream.point(pi$2, -phi);
    stream.point(0, -phi);
    stream.point(-pi$2, -phi);
    stream.point(-pi$2, 0);
    stream.point(-pi$2, phi);
  } else if (abs(from[0] - to[0]) > epsilon$1) {
    var lambda = from[0] < to[0] ? pi$2 : -pi$2;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

function clipCircle (radius) {
  var cr = cos$1(radius),
    delta = 2 * radians$1,
    smallRadius = cr > 0,
    notHemisphere = abs(cr) > epsilon$1; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos$1(lambda) * cos$1(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0,
      // previous point
      c0,
      // code for previous point
      v0,
      // visibility of previous point
      v00,
      // visibility of first point
      clean; // no intersections
    return {
      lineStart: function () {
        v00 = v0 = false;
        clean = 1;
      },
      point: function (lambda, phi) {
        var point1 = [lambda, phi],
          point2,
          v = visible(lambda, phi),
          c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi$2 : -pi$2), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function () {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function () {
        return clean | (v00 && v0) << 1;
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = cartesian(a),
      pb = cartesian(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0],
      // normal
      n2 = cartesianCross(pa, pb),
      n2n2 = cartesianDot(n2, n2),
      n1n2 = n2[0],
      // cartesianDot(n1, n2),
      determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant,
      c2 = -cr * n1n2 / determinant,
      n1xn2 = cartesianCross(n1, n2),
      A = cartesianScale(n1, c1),
      B = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
      w = cartesianDot(A, u),
      uu = cartesianDot(u, u),
      t2 = w * w - uu * (cartesianDot(A, A) - 1);
    if (t2 < 0) return;
    var t = sqrt$1(t2),
      q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);
    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
      lambda1 = b[0],
      phi0 = a[1],
      phi1 = b[1],
      z;
    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
    var delta = lambda1 - lambda0,
      polar = abs(delta - pi$2) < epsilon$1,
      meridian = polar || delta < epsilon$1;
    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$1 ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > pi$2 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi$2 - radius,
      code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }
  return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$2, radius - pi$2]);
}

function clipLine (a, b, x0, y0, x1, y1) {
  var ax = a[0],
    ay = a[1],
    bx = b[0],
    by = b[1],
    t0 = 0,
    t1 = 1,
    dx = bx - ax,
    dy = by - ay,
    r;
  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

var clipMax = 1e9,
  clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {
  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }
  function interpolate(from, to, direction, stream) {
    var a = 0,
      a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x0) < epsilon$1 ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon$1 ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon$1 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }
  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1),
      cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function (stream) {
    var activeStream = stream,
      bufferStream = clipBuffer(),
      segments,
      polygon,
      ring,
      x__,
      y__,
      v__,
      // first point
      x_,
      y_,
      v_,
      // previous point
      first,
      clean;
    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };
    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) {
            if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
          } else {
            if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
          }
        }
      }
      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(),
        cleanInside = clean && startInside,
        visible = (segments = merge(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
            b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (clipLine(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }
    return clipStream;
  };
}

var identity$4 = (x => x);

var areaSum = new Adder(),
  areaRingSum = new Adder(),
  x00$2,
  y00$2,
  x0$3,
  y0$3;
var areaStream = {
  point: noop$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: function () {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop$1;
    areaSum.add(abs(areaRingSum));
    areaRingSum = new Adder();
  },
  result: function () {
    var area = areaSum / 2;
    areaSum = new Adder();
    return area;
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00$2 = x0$3 = x, y00$2 = y0$3 = y;
}
function areaPoint(x, y) {
  areaRingSum.add(y0$3 * x - x0$3 * y);
  x0$3 = x, y0$3 = y;
}
function areaRingEnd() {
  areaPoint(x00$2, y00$2);
}

var x0$2 = Infinity,
  y0$2 = x0$2,
  x1 = -x0$2,
  y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: noop$1,
  polygonEnd: noop$1,
  result: function () {
    var bounds = [[x0$2, y0$2], [x1, y1]];
    x1 = y1 = -(y0$2 = x0$2 = Infinity);
    return bounds;
  }
};
function boundsPoint(x, y) {
  if (x < x0$2) x0$2 = x;
  if (x > x1) x1 = x;
  if (y < y0$2) y0$2 = y;
  if (y > y1) y1 = y;
}

// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
  Y0 = 0,
  Z0 = 0,
  X1 = 0,
  Y1 = 0,
  Z1 = 0,
  X2 = 0,
  Y2 = 0,
  Z2 = 0,
  x00$1,
  y00$1,
  x0$1,
  y0$1;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function () {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function () {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function () {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0$1 = x, y0$1 = y);
}
function centroidPointLine(x, y) {
  var dx = x - x0$1,
    dy = y - y0$1,
    z = sqrt$1(dx * dx + dy * dy);
  X1 += z * (x0$1 + x) / 2;
  Y1 += z * (y0$1 + y) / 2;
  Z1 += z;
  centroidPoint(x0$1 = x, y0$1 = y);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x00$1, y00$1);
}
function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00$1 = x0$1 = x, y00$1 = y0$1 = y);
}
function centroidPointRing(x, y) {
  var dx = x - x0$1,
    dy = y - y0$1,
    z = sqrt$1(dx * dx + dy * dy);
  X1 += z * (x0$1 + x) / 2;
  Y1 += z * (y0$1 + y) / 2;
  Z1 += z;
  z = y0$1 * x - x0$1 * y;
  X2 += z * (x0$1 + x);
  Y2 += z * (y0$1 + y);
  Z2 += z * 3;
  centroidPoint(x0$1 = x, y0$1 = y);
}

function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function (_) {
    return this._radius = _, this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function (x, y) {
    switch (this._point) {
      case 0:
        {
          this._context.moveTo(x, y);
          this._point = 1;
          break;
        }
      case 1:
        {
          this._context.lineTo(x, y);
          break;
        }
      default:
        {
          this._context.moveTo(x + this._radius, y);
          this._context.arc(x, y, this._radius, 0, tau$2);
          break;
        }
    }
  },
  result: noop$1
};

var lengthSum = new Adder(),
  lengthRing,
  x00,
  y00,
  x0,
  y0;
var lengthStream = {
  point: noop$1,
  lineStart: function () {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function () {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = noop$1;
  },
  polygonStart: function () {
    lengthRing = true;
  },
  polygonEnd: function () {
    lengthRing = null;
  },
  result: function () {
    var length = +lengthSum;
    lengthSum = new Adder();
    return length;
  }
};
function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(sqrt$1(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

// Simple caching for constant-radius points.
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
  constructor(digits) {
    this._append = digits == null ? append : appendRound(digits);
    this._radius = 4.5;
    this._ = "";
  }
  pointRadius(_) {
    this._radius = +_;
    return this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line === 0) this._ += "Z";
    this._point = NaN;
  }
  point(x, y) {
    switch (this._point) {
      case 0:
        {
          this._append`M${x},${y}`;
          this._point = 1;
          break;
        }
      case 1:
        {
          this._append`L${x},${y}`;
          break;
        }
      default:
        {
          this._append`M${x},${y}`;
          if (this._radius !== cacheRadius || this._append !== cacheAppend) {
            const r = this._radius;
            const s = this._;
            this._ = ""; // stash the old string so we can cache the circle path fragment
            this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
            cacheRadius = r;
            cacheAppend = this._append;
            cacheCircle = this._;
            this._ = s;
          }
          this._ += cacheCircle;
          break;
        }
    }
  }
  result() {
    const result = this._;
    this._ = "";
    return result.length ? result : null;
  }
}
function append(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15) return append;
  if (d !== cacheDigits) {
    const k = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  return cacheAppend;
}

function geoPath (projection, context) {
  let digits = 3,
    pointRadius = 4.5,
    projectionStream,
    contextStream;
  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      geoStream(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path.area = function (object) {
    geoStream(object, projectionStream(areaStream));
    return areaStream.result();
  };
  path.measure = function (object) {
    geoStream(object, projectionStream(lengthStream));
    return lengthStream.result();
  };
  path.bounds = function (object) {
    geoStream(object, projectionStream(boundsStream));
    return boundsStream.result();
  };
  path.centroid = function (object) {
    geoStream(object, projectionStream(centroidStream));
    return centroidStream.result();
  };
  path.projection = function (_) {
    if (!arguments.length) return projection;
    projectionStream = _ == null ? (projection = null, identity$4) : (projection = _).stream;
    return path;
  };
  path.context = function (_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString(digits)) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };
  path.pointRadius = function (_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };
  path.digits = function (_) {
    if (!arguments.length) return digits;
    if (_ == null) digits = null;else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null) contextStream = new PathString(digits);
    return path;
  };
  return path.projection(projection).digits(digits).context(context);
}

function geoTransform (methods) {
  return {
    stream: transformer$2(methods)
  };
}
function transformer$2(methods) {
  return function (stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function (x, y) {
    this.stream.point(x, y);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  }
};

function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  geoStream(object, projection.stream(boundsStream));
  fitBounds(boundsStream.result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}
function fitExtent(projection, extent, object) {
  return fit(projection, function (b) {
    var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}
function fitWidth(projection, width, object) {
  return fit(projection, function (b) {
    var w = +width,
      k = w / (b[1][0] - b[0][0]),
      x = (w - k * (b[1][0] + b[0][0])) / 2,
      y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitHeight(projection, height, object) {
  return fit(projection, function (b) {
    var h = +height,
      k = h / (b[1][1] - b[0][1]),
      x = -k * b[0][0],
      y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

var maxDepth = 16,
  // maximum depth of subdivision
  cosMinDistance = cos$1(30 * radians$1); // cos(minimum angular distance)

function resample (project, delta2) {
  return +delta2 ? resample$1(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer$2({
    point: function (x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}
function resample$1(project, delta2) {
  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
      dy = y1 - y0,
      d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
        b = b0 + b1,
        c = c0 + c1,
        m = sqrt$1(a * a + b * b + c * c),
        phi2 = asin(c /= m),
        lambda2 = abs(abs(c) - 1) < epsilon$1 || abs(lambda0 - lambda1) < epsilon$1 ? (lambda0 + lambda1) / 2 : atan2(b, a),
        p = project(lambda2, phi2),
        x2 = p[0],
        y2 = p[1],
        dx2 = x2 - x0,
        dy2 = y2 - y0,
        dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
      || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
      || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function (stream) {
    var lambda00, x00, y00, a00, b00, c00,
      // first point
      lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function () {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }
    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c = cartesian([lambda, phi]),
        p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

var transformRadians = transformer$2({
  point: function (x, y) {
    this.stream.point(x * radians$1, y * radians$1);
  }
});
function transformRotate(rotate) {
  return transformer$2({
    point: function (x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function (x, y) {
    return [(x - dx) / k * sx, (dy - y) / k * sy];
  };
  return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = cos$1(alpha),
    sinAlpha = sin$1(alpha),
    a = cosAlpha * k,
    b = sinAlpha * k,
    ai = cosAlpha / k,
    bi = sinAlpha / k,
    ci = (sinAlpha * dy - cosAlpha * dx) / k,
    fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function (x, y) {
    return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
  };
  return transform;
}
function projection$1(project) {
  return projectionMutator(function () {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project,
    k = 150,
    // scale
    x = 480,
    y = 250,
    // translate
    lambda = 0,
    phi = 0,
    // center
    deltaLambda = 0,
    deltaPhi = 0,
    deltaGamma = 0,
    rotate,
    // pre-rotate
    alpha = 0,
    // post-rotate angle
    sx = 1,
    // reflectX
    sy = 1,
    // reflectX
    theta = null,
    preclip = clipAntimeridian,
    // pre-clip angle
    x0 = null,
    y0,
    x1,
    y1,
    postclip = identity$4,
    // post-clip extent
    delta2 = 0.5,
    // precision
    projectResample,
    projectTransform,
    projectRotateTransform,
    cache,
    cacheStream;
  function projection(point) {
    return projectRotateTransform(point[0] * radians$1, point[1] * radians$1);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees, point[1] * degrees];
  }
  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection.preclip = function (_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };
  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };
  projection.clipAngle = function (_) {
    return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians$1) : (theta = null, clipAntimeridian), reset()) : theta * degrees;
  };
  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  projection.scale = function (_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection.translate = function (_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };
  projection.center = function (_) {
    return arguments.length ? (lambda = _[0] % 360 * radians$1, phi = _[1] % 360 * radians$1, recenter()) : [lambda * degrees, phi * degrees];
  };
  projection.rotate = function (_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians$1, deltaPhi = _[1] % 360 * radians$1, deltaGamma = _.length > 2 ? _[2] % 360 * radians$1 : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * radians$1, recenter()) : alpha * degrees;
  };
  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection.precision = function (_) {
    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
  };
  projection.fitExtent = function (extent, object) {
    return fitExtent(projection, extent, object);
  };
  projection.fitSize = function (size, object) {
    return fitSize(projection, size, object);
  };
  projection.fitWidth = function (width, object) {
    return fitWidth(projection, width, object);
  };
  projection.fitHeight = function (height, object) {
    return fitHeight(projection, height, object);
  };
  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
      transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose(project, transform);
    projectRotateTransform = compose(rotate, projectTransform);
    projectResample = resample(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection;
  }
  return function () {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

function conicProjection$1(projectAt) {
  var phi0 = 0,
    phi1 = pi$2 / 3,
    m = projectionMutator(projectAt),
    p = m(phi0, phi1);
  p.parallels = function (_) {
    return arguments.length ? m(phi0 = _[0] * radians$1, phi1 = _[1] * radians$1) : [phi0 * degrees, phi1 * degrees];
  };
  return p;
}

function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = cos$1(phi0);
  function forward(lambda, phi) {
    return [lambda * cosPhi0, sin$1(phi) / cosPhi0];
  }
  forward.invert = function (x, y) {
    return [x / cosPhi0, asin(y * cosPhi0)];
  };
  return forward;
}

function conicEqualAreaRaw(y0, y1) {
  var sy0 = sin$1(y0),
    n = (sy0 + sin$1(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (abs(n) < epsilon$1) return cylindricalEqualAreaRaw(y0);
  var c = 1 + sy0 * (2 * n - sy0),
    r0 = sqrt$1(c) / n;
  function project(x, y) {
    var r = sqrt$1(c - 2 * n * sin$1(y)) / n;
    return [r * sin$1(x *= n), r0 - r * cos$1(x)];
  }
  project.invert = function (x, y) {
    var r0y = r0 - y,
      l = atan2(x, abs(r0y)) * sign$1(r0y);
    if (r0y * n < 0) l -= pi$2 * sign$1(x) * sign$1(r0y);
    return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
function geoConicEqualArea () {
  return conicProjection$1(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

function geoAlbers () {
  return geoConicEqualArea().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function (x, y) {
      var i = -1;
      while (++i < n) streams[i].point(x, y);
    },
    sphere: function () {
      var i = -1;
      while (++i < n) streams[i].sphere();
    },
    lineStart: function () {
      var i = -1;
      while (++i < n) streams[i].lineStart();
    },
    lineEnd: function () {
      var i = -1;
      while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function () {
      var i = -1;
      while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function () {
      var i = -1;
      while (++i < n) streams[i].polygonEnd();
    }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
function geoAlbersUsa () {
  var cache,
    cacheStream,
    lower48 = geoAlbers(),
    lower48Point,
    alaska = geoConicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
    alaskaPoint,
    // EPSG:3338
    hawaii = geoConicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
    hawaiiPoint,
    // ESRI:102007
    point,
    pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
  function albersUsa(coordinates) {
    var x = coordinates[0],
      y = coordinates[1];
    return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
  }
  albersUsa.invert = function (coordinates) {
    var k = lower48.scale(),
      t = lower48.translate(),
      x = (coordinates[0] - t[0]) / k,
      y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
  };
  albersUsa.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function (_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function (_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function (_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(),
      x = +_[0],
      y = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
    alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon$1, y + 0.120 * k + epsilon$1], [x - 0.214 * k - epsilon$1, y + 0.234 * k - epsilon$1]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon$1, y + 0.166 * k + epsilon$1], [x - 0.115 * k - epsilon$1, y + 0.234 * k - epsilon$1]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function (extent, object) {
    return fitExtent(albersUsa, extent, object);
  };
  albersUsa.fitSize = function (size, object) {
    return fitSize(albersUsa, size, object);
  };
  albersUsa.fitWidth = function (width, object) {
    return fitWidth(albersUsa, width, object);
  };
  albersUsa.fitHeight = function (height, object) {
    return fitHeight(albersUsa, height, object);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

function azimuthalRaw(scale) {
  return function (x, y) {
    var cx = cos$1(x),
      cy = cos$1(y),
      k = scale(cx * cy);
    if (k === Infinity) return [2, 0];
    return [k * cy * sin$1(x), k * sin$1(y)];
  };
}
function azimuthalInvert(angle) {
  return function (x, y) {
    var z = sqrt$1(x * x + y * y),
      c = angle(z),
      sc = sin$1(c),
      cc = cos$1(c);
    return [atan2(x * sc, z * cc), asin(z && y * sc / z)];
  };
}

var azimuthalEqualAreaRaw = azimuthalRaw(function (cxcy) {
  return sqrt$1(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function (z) {
  return 2 * asin(z / 2);
});
function geoAzimuthalEqualArea () {
  return projection$1(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

var azimuthalEquidistantRaw = azimuthalRaw(function (c) {
  return (c = acos(c)) && c / sin$1(c);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function (z) {
  return z;
});
function geoAzimuthalEquidistant () {
  return projection$1(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

function mercatorRaw(lambda, phi) {
  return [lambda, log$1(tan((halfPi + phi) / 2))];
}
mercatorRaw.invert = function (x, y) {
  return [x, 2 * atan(exp(y)) - halfPi];
};
function geoMercator () {
  return mercatorProjection(mercatorRaw).scale(961 / tau$2);
}
function mercatorProjection(project) {
  var m = projection$1(project),
    center = m.center,
    scale = m.scale,
    translate = m.translate,
    clipExtent = m.clipExtent,
    x0 = null,
    y0,
    x1,
    y1; // clip extent

  m.scale = function (_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function (_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function (_) {
    return arguments.length ? (center(_), reclip()) : center();
  };
  m.clipExtent = function (_) {
    return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  function reclip() {
    var k = pi$2 * scale(),
      t = m(rotation(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]] : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }
  return reclip();
}

function tany(y) {
  return tan((halfPi + y) / 2);
}
function conicConformalRaw(y0, y1) {
  var cy0 = cos$1(y0),
    n = y0 === y1 ? sin$1(y0) : log$1(cy0 / cos$1(y1)) / log$1(tany(y1) / tany(y0)),
    f = cy0 * pow$1(tany(y0), n) / n;
  if (!n) return mercatorRaw;
  function project(x, y) {
    if (f > 0) {
      if (y < -halfPi + epsilon$1) y = -halfPi + epsilon$1;
    } else {
      if (y > halfPi - epsilon$1) y = halfPi - epsilon$1;
    }
    var r = f / pow$1(tany(y), n);
    return [r * sin$1(n * x), f - r * cos$1(n * x)];
  }
  project.invert = function (x, y) {
    var fy = f - y,
      r = sign$1(n) * sqrt$1(x * x + fy * fy),
      l = atan2(x, abs(fy)) * sign$1(fy);
    if (fy * n < 0) l -= pi$2 * sign$1(x) * sign$1(fy);
    return [l / n, 2 * atan(pow$1(f / r, 1 / n)) - halfPi];
  };
  return project;
}
function geoConicConformal () {
  return conicProjection$1(conicConformalRaw).scale(109.5).parallels([30, 30]);
}

function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;
function geoEquirectangular () {
  return projection$1(equirectangularRaw).scale(152.63);
}

function conicEquidistantRaw(y0, y1) {
  var cy0 = cos$1(y0),
    n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
    g = cy0 / n + y0;
  if (abs(n) < epsilon$1) return equirectangularRaw;
  function project(x, y) {
    var gy = g - y,
      nx = n * x;
    return [gy * sin$1(nx), g - gy * cos$1(nx)];
  }
  project.invert = function (x, y) {
    var gy = g - y,
      l = atan2(x, abs(gy)) * sign$1(gy);
    if (gy * n < 0) l -= pi$2 * sign$1(x) * sign$1(gy);
    return [l / n, g - sign$1(n) * sqrt$1(x * x + gy * gy)];
  };
  return project;
}
function geoConicEquidistant () {
  return conicProjection$1(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}

var A1 = 1.340264,
  A2 = -0.081106,
  A3 = 0.000893,
  A4 = 0.003796,
  M = sqrt$1(3) / 2,
  iterations = 12;
function equalEarthRaw(lambda, phi) {
  var l = asin(M * sin$1(phi)),
    l2 = l * l,
    l6 = l2 * l2 * l2;
  return [lambda * cos$1(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))), l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))];
}
equalEarthRaw.invert = function (x, y) {
  var l = y,
    l2 = l * l,
    l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs(delta) < epsilon2) break;
  }
  return [M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos$1(l), asin(sin$1(l) / M)];
};
function geoEqualEarth () {
  return projection$1(equalEarthRaw).scale(177.158);
}

function gnomonicRaw(x, y) {
  var cy = cos$1(y),
    k = cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function geoGnomonic () {
  return projection$1(gnomonicRaw).scale(144.049).clipAngle(60);
}

function orthographicRaw(x, y) {
  return [cos$1(y) * sin$1(x), sin$1(y)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function geoOrthographic () {
  return projection$1(orthographicRaw).scale(249.5).clipAngle(90 + epsilon$1);
}

function stereographicRaw(x, y) {
  var cy = cos$1(y),
    k = 1 + cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}
stereographicRaw.invert = azimuthalInvert(function (z) {
  return 2 * atan(z);
});
function geoStereographic () {
  return projection$1(stereographicRaw).scale(250).clipAngle(142);
}

function transverseMercatorRaw(lambda, phi) {
  return [log$1(tan((halfPi + phi) / 2)), -lambda];
}
transverseMercatorRaw.invert = function (x, y) {
  return [-y, 2 * atan(exp(x)) - halfPi];
};
function geoTransverseMercator () {
  var m = mercatorProjection(transverseMercatorRaw),
    center = m.center,
    rotate = m.rotate;
  m.center = function (_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };
  m.rotate = function (_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
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
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      {
        if (typeof domain === "function") this.interpolator(domain);else this.range(domain);
        break;
      }
    default:
      {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);else this.range(interpolator);
        break;
      }
  }
  return this;
}

const implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(),
    domain = [],
    range = [],
    unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === undefined) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range[i % range.length];
  }
  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
    domain = scale.domain,
    ordinalRange = scale.range,
    r0 = 0,
    r1 = 1,
    step,
    bandwidth,
    round = false,
    paddingInner = 0,
    paddingOuter = 0,
    align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length,
      reverse = r1 < r0,
      start = reverse ? r1 : r0,
      stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range$1(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function (_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function (_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function () {
    return bandwidth;
  };
  scale.step = function () {
    return step;
  };
  scale.round = function (_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function (_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function (_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function () {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function () {
    return pointish(copy());
  };
  return scale;
}
function point$4() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

function constants(x) {
  return function () {
    return x;
  };
}

function number$2(x) {
  return +x;
}

var unit$1 = [0, 1];
function identity$3(x) {
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
function copy$1(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer$1() {
  var domain = unit$1,
    range = unit$1,
    interpolate = interpolate$1,
    transform,
    untransform,
    unknown,
    clamp = identity$3,
    piecewise,
    output,
    input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$3) clamp = clamper(domain[0], domain[n - 1]);
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
    return arguments.length ? (domain = Array.from(_, number$2), rescale()) : domain.slice();
  };
  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function (_) {
    return range = Array.from(_), interpolate = interpolateRound, rescale();
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? true : identity$3, rescale()) : clamp !== identity$3;
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
  return transformer$1()(identity$3, identity$3);
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
  return format$1(specifier);
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
    return copy$1(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

function identity$2(domain) {
  var unknown;
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }
  scale.invert = scale;
  scale.domain = scale.range = function (_) {
    return arguments.length ? (domain = Array.from(_, number$2), scale) : domain.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return identity$2(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number$2) : [0, 1];
  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0,
    i1 = domain.length - 1,
    x0 = domain[i0],
    x1 = domain[i1],
    t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function transformLog$1(x) {
  return Math.log(x);
}
function transformExp(x) {
  return Math.exp(x);
}
function transformLogn(x) {
  return -Math.log(-x);
}
function transformExpn(x) {
  return -Math.exp(-x);
}
function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : x => Math.pow(base, x);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), x => Math.log(x) / base);
}
function reflect(f) {
  return (x, k) => -f(-x, k);
}
function loggish(transform) {
  const scale = transform(transformLog$1, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog$1, transformExp);
    }
    return scale;
  }
  scale.base = function (_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = count => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r) [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k;
    let t;
    const n = count == null ? 10 : +count;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1; k < base; ++k) {
          t = i < 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1; k >= 1; --k) {
          t = i > 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count, specifier) => {
    if (count == null) count = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format$1(specifier);
    }
    if (count === Infinity) return specifier;
    const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return d => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice(domain(), {
      floor: x => pows(Math.floor(logs(x))),
      ceil: x => pows(Math.ceil(logs(x)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer$1()).domain([1, 10]);
  scale.copy = () => copy$1(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}

function transformSymlog$1(c) {
  return function (x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}
function transformSymexp(c) {
  return function (x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}
function symlogish(transform) {
  var c = 1,
    scale = transform(transformSymlog$1(c), transformSymexp(c));
  scale.constant = function (_) {
    return arguments.length ? transform(transformSymlog$1(c = +_), transformSymexp(c)) : c;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer$1());
  scale.copy = function () {
    return copy$1(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

function transformPow$1(exponent) {
  return function (x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function transformSqrt$1(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}
function powish(transform) {
  var scale = transform(identity$3, identity$3),
    exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity$3, identity$3) : exponent === 0.5 ? transform(transformSqrt$1, transformSquare) : transform(transformPow$1(exponent), transformPow$1(1 / exponent));
  }
  scale.exponent = function (_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer$1());
  scale.copy = function () {
    return copy$1(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}

function quantile() {
  var domain = [],
    range = [],
    thresholds = [],
    unknown;
  function rescale() {
    var i = 0,
      n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[bisectRight(thresholds, x)];
  }
  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };
  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending$1);
    return rescale();
  };
  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function () {
    return thresholds.slice();
  };
  scale.copy = function () {
    return quantile().domain(domain).range(range).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

function threshold() {
  var domain = [0.5],
    range = [0, 1],
    unknown,
    n = 1;
  function scale(x) {
    return x != null && x <= x ? range[bisectRight(domain, x, 0, n)] : unknown;
  }
  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };
  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };
  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return threshold().domain(domain).range(range).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

const t0 = new Date(),
  t1 = new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }
  interval.floor = date => {
    return floori(date = new Date(+date)), date;
  };
  interval.ceil = date => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = date => {
    const d0 = interval(date),
      d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
    return range;
  };
  interval.filter = test => {
    return timeInterval(date => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = step => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? d => field(d) % step === 0 : d => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

const millisecond = timeInterval(() => {
  // noop
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = k => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval(date => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};
millisecond.range;

const durationSecond$1 = 1000;
const durationMinute$1 = durationSecond$1 * 60;
const durationHour$1 = durationMinute$1 * 60;
const durationDay$1 = durationHour$1 * 24;
const durationWeek$1 = durationDay$1 * 7;
const durationMonth$1 = durationDay$1 * 30;
const durationYear$1 = durationDay$1 * 365;

const second$1 = timeInterval(date => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond$1);
}, (start, end) => {
  return (end - start) / durationSecond$1;
}, date => {
  return date.getUTCSeconds();
});
second$1.range;

const timeMinute = timeInterval(date => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond$1);
}, (date, step) => {
  date.setTime(+date + step * durationMinute$1);
}, (start, end) => {
  return (end - start) / durationMinute$1;
}, date => {
  return date.getMinutes();
});
timeMinute.range;
const utcMinute = timeInterval(date => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute$1);
}, (start, end) => {
  return (end - start) / durationMinute$1;
}, date => {
  return date.getUTCMinutes();
});
utcMinute.range;

const timeHour = timeInterval(date => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond$1 - date.getMinutes() * durationMinute$1);
}, (date, step) => {
  date.setTime(+date + step * durationHour$1);
}, (start, end) => {
  return (end - start) / durationHour$1;
}, date => {
  return date.getHours();
});
timeHour.range;
const utcHour = timeInterval(date => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour$1);
}, (start, end) => {
  return (end - start) / durationHour$1;
}, date => {
  return date.getUTCHours();
});
utcHour.range;

const timeDay = timeInterval(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationDay$1, date => date.getDate() - 1);
timeDay.range;
const utcDay = timeInterval(date => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay$1;
}, date => {
  return date.getUTCDate() - 1;
});
utcDay.range;
const unixDay = timeInterval(date => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay$1;
}, date => {
  return Math.floor(date / durationDay$1);
});
unixDay.range;

function timeWeekday(i) {
  return timeInterval(date => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
  });
}
const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);
timeSunday.range;
timeMonday.range;
timeTuesday.range;
timeWednesday.range;
timeThursday.range;
timeFriday.range;
timeSaturday.range;
function utcWeekday(i) {
  return timeInterval(date => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek$1;
  });
}
const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);
utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;

const timeMonth = timeInterval(date => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, date => {
  return date.getMonth();
});
timeMonth.range;
const utcMonth = timeInterval(date => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, date => {
  return date.getUTCMonth();
});
utcMonth.range;

const timeYear = timeInterval(date => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, date => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = k => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
timeYear.range;
const utcYear = timeInterval(date => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, date => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = k => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
utcYear.range;

function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [[second$1, 1, durationSecond$1], [second$1, 5, 5 * durationSecond$1], [second$1, 15, 15 * durationSecond$1], [second$1, 30, 30 * durationSecond$1], [minute, 1, durationMinute$1], [minute, 5, 5 * durationMinute$1], [minute, 15, 15 * durationMinute$1], [minute, 30, 30 * durationMinute$1], [hour, 1, durationHour$1], [hour, 3, 3 * durationHour$1], [hour, 6, 6 * durationHour$1], [hour, 12, 12 * durationHour$1], [day, 1, durationDay$1], [day, 2, 2 * durationDay$1], [week, 1, durationWeek$1], [month, 1, durationMonth$1], [month, 3, 3 * durationMonth$1], [year, 1, durationYear$1]];
  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear$1, stop / durationYear$1, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks, tickInterval];
}
const [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
  return {
    y: y,
    m: m,
    d: d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
    locale_date = locale.date,
    locale_time = locale.time,
    locale_periods = locale.periods,
    locale_weekdays = locale.days,
    locale_shortWeekdays = locale.shortDays,
    locale_months = locale.months,
    locale_shortMonths = locale.shortMonths;
  var periodRe = formatRe(locale_periods),
    periodLookup = formatLookup(locale_periods),
    weekdayRe = formatRe(locale_weekdays),
    weekdayLookup = formatLookup(locale_weekdays),
    shortWeekdayRe = formatRe(locale_shortWeekdays),
    shortWeekdayLookup = formatLookup(locale_shortWeekdays),
    monthRe = formatRe(locale_months),
    monthLookup = formatLookup(locale_months),
    shortMonthRe = formatRe(locale_shortMonths),
    shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear$1,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
        i = -1,
        j = 0,
        n = specifier.length,
        c,
        pad,
        format;
      if (!(date instanceof Date)) date = new Date(+date);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
        i = parseSpecifier(d, specifier, string += "", 0),
        week,
        day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
      n = specifier.length,
      m = string.length,
      c,
      parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function (specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function (specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function (specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function (specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function () {
        return specifier;
      };
      return p;
    }
  };
}
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
  },
  numberRe = /^\s*\d+/,
  // note: ignores next directive
  percentRe = /^%/,
  requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad$1(value, fill, width) {
  var sign = value < 0 ? "-" : "",
    string = (sign ? -value : value) + "",
    length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad$1(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad$1(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad$1(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad$1(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad$1(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad$1(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad$1(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad$1(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad$1(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad$1(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad$1(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear$1(d, p) {
  return pad$1(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad$1(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad$1(d.getFullYear() % 10000, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad$1(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad$1(z / 60 | 0, "0", 2) + pad$1(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad$1(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad$1(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad$1(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad$1(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad$1(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad$1(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad$1(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad$1(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad$1(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad$1(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad$1(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad$1(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad$1(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;
var utcFormat;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}

function date(t) {
  return new Date(t);
}
function number$1(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous(),
    invert = scale.invert,
    domain = scale.domain;
  var formatMillisecond = format(".%L"),
    formatSecond = format(":%S"),
    formatMinute = format("%I:%M"),
    formatHour = format("%I %p"),
    formatDay = format("%a %d"),
    formatWeek = format("%b %d"),
    formatMonth = format("%B"),
    formatYear = format("%Y");
  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
  }
  scale.invert = function (y) {
    return new Date(invert(y));
  };
  scale.domain = function (_) {
    return arguments.length ? domain(Array.from(_, number$1)) : domain().map(date);
  };
  scale.ticks = function (interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };
  scale.nice = function (interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function () {
    return copy$1(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second$1, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second$1, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}

function transformer() {
  var x0 = 0,
    x1 = 0.5,
    x2 = 1,
    s = 1,
    t0,
    t1,
    t2,
    k10,
    k21,
    interpolator = identity$3,
    transform,
    clamp = false,
    unknown;
  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }
  scale.domain = function (_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range(interpolate) {
    return function (_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range(interpolate$1);
  scale.rangeRound = range(interpolateRound);
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer()(identity$3));
  scale.copy = function () {
    return copy(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer()).domain([0.1, 1, 10]);
  scale.copy = function () {
    return copy(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer());
  scale.copy = function () {
    return copy(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer());
  scale.copy = function () {
    return copy(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}

function colors (specifier) {
  var n = specifier.length / 6 | 0,
    colors = new Array(n),
    i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

var schemeCategory10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

var schemeAccent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

var schemeDark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

var schemeObservable10 = colors("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

var schemePaired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

var schemePastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

var schemePastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

var schemeSet1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

var schemeSet2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

var schemeSet3 = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

var schemeTableau10 = colors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

var ramp$1 = (scheme => rgbBasis(scheme[scheme.length - 1]));

var scheme$q = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors);
var interpolateBrBG = ramp$1(scheme$q);

var scheme$p = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors);
var interpolatePRGn = ramp$1(scheme$p);

var scheme$o = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors);
var interpolatePiYG = ramp$1(scheme$o);

var scheme$n = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors);
var interpolatePuOr = ramp$1(scheme$n);

var scheme$m = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors);
var interpolateRdBu = ramp$1(scheme$m);

var scheme$l = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors);
var interpolateRdGy = ramp$1(scheme$l);

var scheme$k = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors);
var interpolateRdYlBu = ramp$1(scheme$k);

var scheme$j = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors);
var interpolateRdYlGn = ramp$1(scheme$j);

var scheme$i = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors);
var interpolateSpectral = ramp$1(scheme$i);

var scheme$h = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors);
var interpolateBuGn = ramp$1(scheme$h);

var scheme$g = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors);
var interpolateBuPu = ramp$1(scheme$g);

var scheme$f = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors);
var interpolateGnBu = ramp$1(scheme$f);

var scheme$e = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors);
var interpolateOrRd = ramp$1(scheme$e);

var scheme$d = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors);
var interpolatePuBuGn = ramp$1(scheme$d);

var scheme$c = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors);
var interpolatePuBu = ramp$1(scheme$c);

var scheme$b = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors);
var interpolatePuRd = ramp$1(scheme$b);

var scheme$a = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors);
var interpolateRdPu = ramp$1(scheme$a);

var scheme$9 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors);
var interpolateYlGnBu = ramp$1(scheme$9);

var scheme$8 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors);
var interpolateYlGn = ramp$1(scheme$8);

var scheme$7 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors);
var interpolateYlOrBr = ramp$1(scheme$7);

var scheme$6 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors);
var interpolateYlOrRd = ramp$1(scheme$6);

var scheme$5 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors);
var interpolateBlues = ramp$1(scheme$5);

var scheme$4 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors);
var interpolateGreens = ramp$1(scheme$4);

var scheme$3 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors);
var interpolateGreys = ramp$1(scheme$3);

var scheme$2 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors);
var interpolatePurples = ramp$1(scheme$2);

var scheme$1 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors);
var interpolateReds = ramp$1(scheme$1);

var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors);
var interpolateOranges = ramp$1(scheme);

function interpolateCividis (t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}

var interpolateCubehelixDefault = cubehelixLong(cubehelix$1(300, 0.5, 0.0), cubehelix$1(-240, 0.5, 1.0));

var warm = cubehelixLong(cubehelix$1(-100, 0.75, 0.35), cubehelix$1(80, 1.50, 0.8));
var cool = cubehelixLong(cubehelix$1(260, 0.75, 0.35), cubehelix$1(80, 1.50, 0.8));
var c$3 = cubehelix$1();
function interpolateRainbow (t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c$3.h = 360 * t - 100;
  c$3.s = 1.5 - 1.5 * ts;
  c$3.l = 0.8 - 0.9 * ts;
  return c$3 + "";
}

var c$2 = rgb(),
  pi_1_3 = Math.PI / 3,
  pi_2_3 = Math.PI * 2 / 3;
function interpolateSinebow (t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c$2.r = 255 * (x = Math.sin(t)) * x;
  c$2.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c$2.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c$2 + "";
}

function interpolateTurbo (t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}

function ramp(range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var interpolateViridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

function constant$1 (x) {
  return function constant() {
    return x;
  };
}

const cos = Math.cos;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi$1 = Math.PI;
const tau$1 = 2 * pi$1;

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

function x$1(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

function shapeLine (x, y$1) {
  var defined = constant$1(true),
    context = null,
    curve = curveLinear,
    output = null,
    path = withPath(line);
  x = typeof x === "function" ? x : x === undefined ? x$1 : constant$1(x);
  y$1 = typeof y$1 === "function" ? y$1 : y$1 === undefined ? y : constant$1(y$1);
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
      if (defined0) output.point(+x(d, i, data), +y$1(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$1(+_), line) : x;
  };
  line.y = function (_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), line) : y$1;
  };
  line.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
  };
  line.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        {
          this._point = 1;
          if (this._line) this._context.lineTo(x, y);else this._context.moveTo(x, y);
          break;
        }
      case 1:
        this._point = 2;
      // falls through
      default:
        {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
          break;
        }
    }
    this._x0 = x, this._y0 = y;
  }
}
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}

const sqrt3$3 = sqrt(3);
var symbolAsterisk = {
  draw(context, size) {
    const r = sqrt(size + min(size / 28, 0.75)) * 0.59436;
    const t = r / 2;
    const u = t * sqrt3$3;
    context.moveTo(0, r);
    context.lineTo(0, -r);
    context.moveTo(-u, -t);
    context.lineTo(u, t);
    context.moveTo(-u, t);
    context.lineTo(u, -t);
  }
};

var symbolCircle = {
  draw(context, size) {
    const r = sqrt(size / pi$1);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau$1);
  }
};

var symbolCross = {
  draw(context, size) {
    const r = sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

const tan30 = sqrt(1 / 3);
const tan30_2 = tan30 * 2;
var symbolDiamond = {
  draw(context, size) {
    const y = sqrt(size / tan30_2);
    const x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var symbolDiamond2 = {
  draw(context, size) {
    const r = sqrt(size) * 0.62625;
    context.moveTo(0, -r);
    context.lineTo(r, 0);
    context.lineTo(0, r);
    context.lineTo(-r, 0);
    context.closePath();
  }
};

var symbolPlus = {
  draw(context, size) {
    const r = sqrt(size - min(size / 7, 2)) * 0.87559;
    context.moveTo(-r, 0);
    context.lineTo(r, 0);
    context.moveTo(0, r);
    context.lineTo(0, -r);
  }
};

var symbolSquare = {
  draw(context, size) {
    const w = sqrt(size);
    const x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var symbolSquare2 = {
  draw(context, size) {
    const r = sqrt(size) * 0.4431;
    context.moveTo(r, r);
    context.lineTo(r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, r);
    context.closePath();
  }
};

const ka = 0.89081309152928522810;
const kr = sin(pi$1 / 10) / sin(7 * pi$1 / 10);
const kx = sin(tau$1 / 10) * kr;
const ky = -cos(tau$1 / 10) * kr;
var symbolStar = {
  draw(context, size) {
    const r = sqrt(size * ka);
    const x = kx * r;
    const y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (let i = 1; i < 5; ++i) {
      const a = tau$1 * i / 5;
      const c = cos(a);
      const s = sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

const sqrt3$2 = sqrt(3);
var symbolTriangle = {
  draw(context, size) {
    const y = -sqrt(size / (sqrt3$2 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3$2 * y, -y);
    context.lineTo(sqrt3$2 * y, -y);
    context.closePath();
  }
};

const sqrt3$1 = sqrt(3);
var symbolTriangle2 = {
  draw(context, size) {
    const s = sqrt(size) * 0.6824;
    const t = s / 2;
    const u = s * sqrt3$1 / 2; // cos(Math.PI / 6)
    context.moveTo(0, -s);
    context.lineTo(u, t);
    context.lineTo(-u, t);
    context.closePath();
  }
};

const c$1 = -0.5;
const s$1 = sqrt(3) / 2;
const k = 1 / sqrt(12);
const a$1 = (k / 2 + 1) * 3;
var symbolWye = {
  draw(context, size) {
    const r = sqrt(size / a$1);
    const x0 = r / 2,
      y0 = r * k;
    const x1 = x0,
      y1 = r * k + r;
    const x2 = -x1,
      y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c$1 * x0 - s$1 * y0, s$1 * x0 + c$1 * y0);
    context.lineTo(c$1 * x1 - s$1 * y1, s$1 * x1 + c$1 * y1);
    context.lineTo(c$1 * x2 - s$1 * y2, s$1 * x2 + c$1 * y2);
    context.lineTo(c$1 * x0 + s$1 * y0, c$1 * y0 - s$1 * x0);
    context.lineTo(c$1 * x1 + s$1 * y1, c$1 * y1 - s$1 * x1);
    context.lineTo(c$1 * x2 + s$1 * y2, c$1 * y2 - s$1 * x2);
    context.closePath();
  }
};

var symbolTimes = {
  draw(context, size) {
    const r = sqrt(size - min(size / 6, 1.7)) * 0.6189;
    context.moveTo(-r, -r);
    context.lineTo(r, r);
    context.moveTo(-r, r);
    context.lineTo(r, -r);
  }
};

// These symbols are designed to be filled.
const symbolsFill = [symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye];

// These symbols are designed to be stroked (with a width of 1.5px and round caps).
const symbolsStroke = [symbolCircle, symbolPlus, symbolTimes, symbolTriangle2, symbolAsterisk, symbolSquare2, symbolDiamond2];

function noop () {}

function point$3(that, x, y) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        point$3(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
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
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasis (context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x, this._y2 = y;
        break;
      case 1:
        this._point = 2;
        this._x3 = x, this._y3 = y;
        break;
      case 2:
        this._point = 3;
        this._x4 = x, this._y4 = y;
        this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
        break;
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasisClosed (context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x) / 6,
          y0 = (this._y0 + 4 * this._y1 + y) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasisOpen (context) {
  return new BasisOpen(context);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function () {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function () {
    var x = this._x,
      y = this._y,
      j = x.length - 1;
    if (j > 0) {
      var x0 = x[0],
        y0 = y[0],
        dx = x[j] - x0,
        dy = y[j] - y0,
        i = -1,
        t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};
var curveBundle = (function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function (beta) {
    return custom(+beta);
  };
  return bundle;
})(0.85);

function point$2(that, x, y) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point$2(this, this._x1, this._y1);
        break;
    }
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
        this._x1 = x, this._y1 = y;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCardinal = (function custom(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function (tension) {
    return custom(+tension);
  };
  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x, this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x, this._y4 = y);
        break;
      case 2:
        this._point = 3;
        this._x5 = x, this._y5 = y;
        break;
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCardinalClosed = (function custom(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function (tension) {
    return custom(+tension);
  };
  return cardinal;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCardinalOpen = (function custom(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function (tension) {
    return custom(+tension);
  };
  return cardinal;
})(0);

function point$1(that, x, y) {
  var x1 = that._x1,
    y1 = that._y1,
    x2 = that._x2,
    y2 = that._y2;
  if (that._l01_a > epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
      n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
      m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCatmullRom = (function custom(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };
  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x, this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x, this._y4 = y);
        break;
      case 2:
        this._point = 3;
        this._x5 = x, this._y5 = y;
        break;
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCatmullRomClosed = (function custom(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };
  return catmullRom;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
var curveCatmullRomOpen = (function custom(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };
  return catmullRom;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._point) this._context.closePath();
  },
  point: function (x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);else this._point = 1, this._context.moveTo(x, y);
  }
};
function curveLinearClosed (context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
    h1 = x2 - that._x1,
    s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
    s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
    p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
    y0 = that._y0,
    x1 = that._x1,
    y1 = that._y1,
    dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    var t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t1 = slope3(this, x, y)), t1);
        break;
      default:
        point(this, this._t0, t1 = slope3(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function (x, y) {
    this._context.moveTo(y, x);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (x, y) {
    this._context.lineTo(y, x);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = [];
    this._y = [];
  },
  lineEnd: function () {
    var x = this._x,
      y = this._y,
      n = x.length;
    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
          py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
    n = x.length - 1,
    m,
    a = new Array(n),
    b = new Array(n),
    r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}
function curveNatural (context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
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
        {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y);
            this._context.lineTo(x, y);
          } else {
            var x1 = this._x * (1 - this._t) + x * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y);
          }
          break;
        }
    }
    this._x = x, this._y = y;
  }
};
function curveStep (context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
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
class DecidablesElement extends s$2 {
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
      return b$1`
        <filter id=${`shadow-${z}`} x="-250%" y="-250%" width="600%" height="600%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${shadows.mapUmbra[z].y / 2} dy=${shadows.mapUmbra[z].y} />
          <feOffset in="solid" result="offP" dx=${shadows.mapPenumbra[z].y / 2} dy=${shadows.mapPenumbra[z].y} />
          <feOffset in="solid" result="offA" dx=${shadows.mapAmbient[z].y / 2} dy=${shadows.mapAmbient[z].y} />
          ${shadows.mapUmbra[z].s === 0 ? b$1`` : b$1`<feMorphology in="offU" result="spreadU" operator=${shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapUmbra[z].s)} />`}
          ${shadows.mapPenumbra[z].s === 0 ? b$1`` : b$1`<feMorphology in="offP" result="spreadP" operator=${shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapPenumbra[z].s)} />`}
          ${shadows.mapAmbient[z].s === 0 ? b$1`` : b$1`<feMorphology in="offA" result="spreadA" operator=${shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapAmbient[z].s)} />`}
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
    return b$1`
      <svg class="defs">
        <defs>
          ${filters}
        </defs>
      </svg>
    `;
  }
  static get styles() {
    return i$4`
      :host {
        ---shadow-0: var(--shadow-0, ${r$5(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${r$5(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${r$5(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${r$5(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${r$5(this.greys.white)});
        ---color-border: var(--color-border, ${r$5(this.greys.light75)});
        ---color-text: var(--color-text, ${r$5(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${r$5(this.greys.white)});
        ---color-link: var(--color-link, ${r$5(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${r$5(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${r$5(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${r$5(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${r$5(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${r$5(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${r$5(this.greys.dark75)});

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
    return [super.styles, i$4`
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
    return x$2`
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
const o$2 = o => o ?? T;

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
    return [super.styles, i$4`
        :host {
          ---shadow-2-rotate: var(--shadow-2-rotate, ${r$5(this.cssBoxShadow(2, true, false))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${r$5(this.cssBoxShadow(4, true, false))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${r$5(this.cssBoxShadow(8, true, false))});

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
    return x$2`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input type="range" id="slider" min=${o$2(this.min)} max=${o$2(this.max)} step=${o$2(this.step)} .value=${this.value} @change=${this.changed.bind(this)} @input=${this.inputted.bind(this)}>
      </div>
      <decidables-spinner min=${o$2(this.min)} max=${o$2(this.max)} step=${o$2(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}></decidables-spinner>
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
    return [super.styles, i$4`
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
    return x$2`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${o$2(this.min)} max=${o$2(this.max)} step=${o$2(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
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
    return [super.styles, i$4`
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
    return x$2`
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
    return [super.styles, i$4`
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
    return x$2`
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
    return [super.styles, i$4`
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
    return x$2`
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
  DiscountableElement Base Class - Not intended for instantiation!
  <sdt-element>
*/
class DiscountableElement extends DecidablesElement {
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
      a: schemeSet1[0],
      d: schemeSet1[1],
      k: schemeSet1[2],
      v: schemeSet1[3],
      sooner: schemeSet1[5],
      later: schemeSet1[7],
      larger: '#4545d0',
      smaller: '#f032e6',
      equal: '#10dbc9',
      nr: '#cccccc'
    };
  }
  static get lights() {
    return Object.keys(DiscountableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(DiscountableElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }
  static get darks() {
    return Object.keys(DiscountableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(DiscountableElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          ---color-a: var(--color-a, ${r$5(this.colors.a)});
          ---color-d: var(--color-d, ${r$5(this.colors.d)});
          ---color-k: var(--color-k, ${r$5(this.colors.k)});
          ---color-v: var(--color-v, ${r$5(this.colors.v)});
          ---color-sooner: var(--color-sooner, ${r$5(this.colors.sooner)});
          ---color-later: var(--color-later, ${r$5(this.colors.later)});
          ---color-larger: var(--color-larger, ${r$5(this.colors.larger)});
          ---color-smaller: var(--color-smaller, ${r$5(this.colors.smaller)});
          ---color-equal: var(--color-equal, ${r$5(this.colors.equal)});
          ---color-nr: var(--color-nr, ${r$5(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${r$5(this.lights.a)});
          ---color-d-light: var(--color-d-light, ${r$5(this.lights.d)});
          ---color-k-light: var(--color-k-light, ${r$5(this.lights.k)});
          ---color-v-light: var(--color-v-light, ${r$5(this.lights.v)});
          ---color-sooner-light: var(--color-sooner-light, ${r$5(this.lights.sooner)});
          ---color-later-light: var(--color-later-light, ${r$5(this.lights.later)});
          ---color-larger-light: var(--color-larger-light, ${r$5(this.lights.larger)});
          ---color-smaller-light: var(--color-smaller-light, ${r$5(this.lights.smaller)});
          ---color-equal-light: var(--color-equal-light, ${r$5(this.lights.equal)});
          ---color-nr-light: var(--color-nr-light, ${r$5(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${r$5(this.darks.a)});
          ---color-d-dark: var(--color-d-dark, ${r$5(this.darks.d)});
          ---color-k-dark: var(--color-k-dark, ${r$5(this.darks.k)});
          ---color-v-dark: var(--color-v-dark, ${r$5(this.darks.v)});
          ---color-sooner-dark: var(--color-sooner-dark, ${r$5(this.darks.sooner)});
          ---color-later-dark: var(--color-later-dark, ${r$5(this.darks.later)});
          ---color-larger-dark: var(--color-larger-dark, ${r$5(this.darks.larger)});
          ---color-smaller-dark: var(--color-smaller-dark, ${r$5(this.darks.smaller)});
          ---color-equal-dark: var(--color-equal-dark, ${r$5(this.darks.equal)});
          ---color-nr-dark: var(--color-nr-dark, ${r$5(this.darks.nr)});
        }
      `];
  }
}

/*
  DiscountableControl element
  <discountable-control>

  Attributes:

*/
class DiscountableControl extends DiscountableElement {
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
        atribute: false,
        type: String,
        reflect: false
      }
    };
  }
  constructor() {
    super();

    // Attributes
    this.trials = undefined;
    this.duration = undefined;
    this.run = false;
    this.pause = false;
    this.reset = false;

    // Properties
    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
  }
  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('discountable-control-trials', {
      detail: {
        trials: this.trials
      },
      bubbles: true
    }));
  }
  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('discountable-control-duration', {
      detail: {
        duration: this.duration
      },
      bubbles: true
    }));
  }
  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('discountable-control-run', {
      detail: {},
      bubbles: true
    }));
  }
  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('discountable-control-pause', {
      detail: {},
      bubbles: true
    }));
  }
  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('discountable-control-reset', {
      detail: {},
      bubbles: true
    }));
  }
  complete() {
    this.state = 'ended';
  }
  static get styles() {
    return [super.styles, i$4`
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
    return x$2`
      <div class="holder">
        ${this.trials ? x$2`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>` : x$2``}
        ${this.duration ? x$2`<decidables-slider min="10" max="4000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>` : x$2``}
        ${this.run || this.pause || this.reset ? x$2`
            <div class="buttons">
              ${this.run ? x$2`<decidables-button name="run" ?disabled=${this.state === 'running' || this.state === 'ended'} @click=${this.doRun.bind(this)}>Run</decidables-button>` : x$2``}
              ${this.pause ? x$2`<decidables-button name="pause" ?disabled=${this.state !== 'running'} @click=${this.doPause.bind(this)}>Pause</decidables-button>` : x$2``}
              ${this.reset ? x$2`<decidables-button name="reset" ?disabled=${this.state === 'resetted'} @click=${this.doReset.bind(this)}>Reset</decidables-button>` : x$2``}
            </div>
            ` : x$2``}
      </div>`;
  }
}
customElements.define('discountable-control', DiscountableControl);

/*
  DiscountableResponse element
  <discountable-response>

  Attributes:

*/
class DiscountableResponse extends DiscountableElement {
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
    this.trial = false; // Show trial count?
    this.feedback = false; // Show response feedback?

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;
    this.responses = ['first', 'second', 'nr']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
  }
  start(as, ds, al, dl, trial) {
    this.state = 'waiting';
    this.as = as;
    this.ds = ds;
    this.al = al;
    this.dl = dl;
    this.trialCount = trial;
    this.response = undefined;
  }
  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.response = 'nr';
    }
  }
  first() {
    this.responded('first');
  }
  second() {
    this.responded('second');
  }
  responded(response) {
    this.state = 'feedback';
    this.response = response;
    this.dispatchEvent(new CustomEvent('discountable-response', {
      detail: {
        trial: this.trialCount,
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,
        response: this.response
      },
      bubbles: true
    }));
  }
  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.response = undefined;
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          display: inline-block;
        }

        /* Overall container */
        .holder {
          display: flex;

          flex-direction: column;
        }

        /* Trial messages */
        .trials {
          display: flex;

          flex-direction: column;

          justify-content: center;
        }

        .trial {
          text-align: center;
        }

        .trial .label {
          font-weight: 600;
        }

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .response {
          width: 5.25rem;
        }

        .waiting[disabled] {
          --decidables-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="first"] {
          --decidables-button-background-color: var(---color-sooner);
        }

        .selected[disabled][name="second"] {
          --decidables-button-background-color: var(---color-later);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: row;

          justify-content: center;
        }

        /* Outcome feedback */
        .feedback {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          width: 5.25rem;
          height: 3.5rem;
          padding: 0.375rem 0.75rem;
          margin: 0.25rem;

          text-align: center;

          background-color: var(---color-element-background);
          border: 1px solid var(---color-element-border);
        }

        .feedback.first {
          background-color: var(---color-sooner-light);
        }

        .feedback.second {
          background-color: var(---color-later-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }
      `];
  }
  render() {
    return x$2`
      <div class="holder">
        ${this.trial ? x$2`
            <div class="trials">
              <div class="trial">
                <span class="label">Trial: </span
                ><span class="count">${this.trialCount}</span
                ><span class="of"> of </span
                ><span class="total">${this.trialTotal}</span>
              </div>
            </div>` : x$2``}
        <div class="responses">
          <decidables-button 
            name="first"
            class="response ${this.state === 'feedback' && this.response === 'first' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''}"
            ?disabled=${this.state !== 'waiting' || this.interactive !== true}
            @click=${this.first.bind(this)}
          >First</decidables-button>
          <decidables-button 
            name="second"
            class="response ${this.state === 'feedback' && this.response === 'second' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''}"
            ?disabled=${this.state !== 'waiting' || this.interactive !== true}
            @click=${this.second.bind(this)}
          >Second</decidables-button>
        </div>
        ${this.feedback ? x$2`
            <div class="feedbacks">
              <div class="feedback
                ${this.state === 'feedback' && this.feedback ? this.response : ''}">
                ${this.state === 'feedback' && this.feedback ? this.response === 'first' ? x$2`<span class="response">First</span>` : this.response === 'second' ? x$2`<span class="response">Second</span>` : x$2`<span class="response">No<br>Response</span>` : ''}
              </div>
            </div>` : x$2``}
      </div>`;
  }
}
customElements.define('discountable-response', DiscountableResponse);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
  },
  e = t => (...e) => ({
    _$litDirective$: t,
    values: e
  });
let i$1 = class i {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f$1 = o => void 0 === o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (i, t) => {
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e) i._$AO?.(t, !1), s(i, t);
    return !0;
  },
  o$1 = i => {
    let t, e;
    do {
      if (void 0 === (t = i._$AM)) break;
      e = t._$AN, e.delete(i), i = t;
    } while (0 === e?.size);
  },
  r$1 = i => {
    for (let t; t = i._$AM; i = t) {
      let e = t._$AN;
      if (void 0 === e) t._$AN = e = new Set();else if (e.has(i)) break;
      e.add(i), c(t);
    }
  };
function h(i) {
  void 0 !== this._$AN ? (o$1(this), this._$AM = i, r$1(this)) : this._$AM = i;
}
function n$1(i, t = !1, e = 0) {
  const r = this._$AH,
    h = this._$AN;
  if (void 0 !== h && 0 !== h.size) if (t) {
    if (Array.isArray(r)) for (let i = e; i < r.length; i++) s(r[i], !1), o$1(r[i]);else null != r && (s(r, !1), o$1(r));
  } else s(this, i);
}
const c = i => {
  i.type == t.CHILD && (i._$AP ??= n$1, i._$AQ ??= h);
};
class f extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i, t, e) {
    super._$AT(i, t, e), r$1(this), this.isConnected = i._$AU;
  }
  _$AO(i, t = !0) {
    i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && (s(this, i), o$1(this));
  }
  setValue(t) {
    if (f$1(this._$Ct)) this._$Ct._$AI(t, this);else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}

const i = new WeakMap();

let o = 0;
const r = new Map(),
  n = new WeakSet(),
  a = () => new Promise(t => requestAnimationFrame(t)),
  v = [{
    opacity: 0
  }, {
    opacity: 1
  }],
  g = (t, i) => {
    const s = t - i;
    return 0 === s ? void 0 : s;
  },
  w = (t, i) => {
    const s = t / i;
    return 1 === s ? void 0 : s;
  },
  N = {
    left: (t, i) => {
      const s = g(t, i);
      return {
        value: s,
        transform: null == s || isNaN(s) ? void 0 : `translateX(${s}px)`
      };
    },
    top: (t, i) => {
      const s = g(t, i);
      return {
        value: s,
        transform: null == s || isNaN(s) ? void 0 : `translateY(${s}px)`
      };
    },
    width: (t, i) => {
      let s;
      0 === i && (i = 1, s = {
        width: "1px"
      });
      const e = w(t, i);
      return {
        value: e,
        overrideFrom: s,
        transform: null == e || isNaN(e) ? void 0 : `scaleX(${e})`
      };
    },
    height: (t, i) => {
      let s;
      0 === i && (i = 1, s = {
        height: "1px"
      });
      const e = w(t, i);
      return {
        value: e,
        overrideFrom: s,
        transform: null == e || isNaN(e) ? void 0 : `scaleY(${e})`
      };
    }
  },
  A = {
    duration: 333,
    easing: "ease-in-out"
  },
  b = ["left", "top", "width", "height", "opacity", "color", "background"],
  j = new WeakMap();
class x extends f {
  constructor(t$1) {
    if (super(t$1), this.t = !1, this.i = null, this.o = null, this.h = !0, this.shouldLog = !1, t$1.type === t.CHILD) throw Error("The `animate` directive must be used in attribute position.");
    this.createFinished();
  }
  createFinished() {
    this.resolveFinished?.(), this.finished = new Promise(t => {
      this.l = t;
    });
  }
  async resolveFinished() {
    this.l?.(), this.l = void 0;
  }
  render(i) {
    return T;
  }
  getController() {
    return i.get(this.u);
  }
  isDisabled() {
    return this.options.disabled || this.getController()?.disabled;
  }
  update(t, [i]) {
    const s = void 0 === this.u;
    return s && (this.u = t.options?.host, this.u.addController(this), this.u.updateComplete.then(t => this.t = !0), this.element = t.element, j.set(this.element, this)), this.optionsOrCallback = i, (s || "function" != typeof i) && this.p(i), this.render(i);
  }
  p(t) {
    t = t ?? {};
    const i = this.getController();
    void 0 !== i && ((t = {
      ...i.defaultOptions,
      ...t
    }).keyframeOptions = {
      ...i.defaultOptions.keyframeOptions,
      ...t.keyframeOptions
    }), t.properties ??= b, this.options = t;
  }
  m() {
    const t = {},
      i = this.element.getBoundingClientRect(),
      s = getComputedStyle(this.element);
    return this.options.properties.forEach(e => {
      const h = i[e] ?? (N[e] ? void 0 : s[e]),
        o = Number(h);
      t[e] = isNaN(o) ? h + "" : o;
    }), t;
  }
  v() {
    let t,
      i = !0;
    return this.options.guard && (t = this.options.guard(), i = ((t, i) => {
      if (Array.isArray(t)) {
        if (Array.isArray(i) && i.length === t.length && t.every((t, s) => t === i[s])) return !1;
      } else if (i === t) return !1;
      return !0;
    })(t, this._)), this.h = this.t && !this.isDisabled() && !this.isAnimating() && i && this.element.isConnected, this.h && (this._ = Array.isArray(t) ? Array.from(t) : t), this.h;
  }
  hostUpdate() {
    "function" == typeof this.optionsOrCallback && this.p(this.optionsOrCallback()), this.v() && (this.A = this.m(), this.i = this.i ?? this.element.parentNode, this.o = this.element.nextSibling);
  }
  async hostUpdated() {
    if (!this.h || !this.element.isConnected || this.options.skipInitial && !this.isHostRendered) return;
    let t;
    this.prepare(), await a;
    const i = this.O(),
      s = this.j(this.options.keyframeOptions, i),
      e = this.m();
    if (void 0 !== this.A) {
      const {
        from: s,
        to: h
      } = this.N(this.A, e, i);
      this.log("measured", [this.A, e, s, h]), t = this.calculateKeyframes(s, h);
    } else {
      const s = r.get(this.options.inId);
      if (s) {
        r.delete(this.options.inId);
        const {
          from: h,
          to: n
        } = this.N(s, e, i);
        t = this.calculateKeyframes(h, n), t = this.options.in ? [{
          ...this.options.in[0],
          ...t[0]
        }, ...this.options.in.slice(1), t[1]] : t, o++, t.forEach(t => t.zIndex = o);
      } else this.options.in && (t = [...this.options.in, {}]);
    }
    this.animate(t, s);
  }
  resetStyles() {
    void 0 !== this.P && (this.element.setAttribute("style", this.P ?? ""), this.P = void 0);
  }
  commitStyles() {
    this.P = this.element.getAttribute("style"), this.webAnimation?.commitStyles(), this.webAnimation?.cancel();
  }
  reconnected() {}
  async disconnected() {
    if (!this.h) return;
    if (void 0 !== this.options.id && r.set(this.options.id, this.A), void 0 === this.options.out) return;
    if (this.prepare(), await a(), this.i?.isConnected) {
      const t = this.o && this.o.parentNode === this.i ? this.o : null;
      if (this.i.insertBefore(this.element, t), this.options.stabilizeOut) {
        const t = this.m();
        this.log("stabilizing out");
        const i = this.A.left - t.left,
          s = this.A.top - t.top;
        !("static" === getComputedStyle(this.element).position) || 0 === i && 0 === s || (this.element.style.position = "relative"), 0 !== i && (this.element.style.left = i + "px"), 0 !== s && (this.element.style.top = s + "px");
      }
    }
    const t = this.j(this.options.keyframeOptions);
    await this.animate(this.options.out, t), this.element.remove();
  }
  prepare() {
    this.createFinished();
  }
  start() {
    this.options.onStart?.(this);
  }
  didFinish(t) {
    t && this.options.onComplete?.(this), this.A = void 0, this.animatingProperties = void 0, this.frames = void 0, this.resolveFinished();
  }
  O() {
    const t = [];
    for (let i = this.element.parentNode; i; i = i?.parentNode) {
      const s = j.get(i);
      s && !s.isDisabled() && s && t.push(s);
    }
    return t;
  }
  get isHostRendered() {
    const t = n.has(this.u);
    return t || this.u.updateComplete.then(() => {
      n.add(this.u);
    }), t;
  }
  j(t, i = this.O()) {
    const s = {
      ...A
    };
    return i.forEach(t => Object.assign(s, t.options.keyframeOptions)), Object.assign(s, t), s;
  }
  N(t, i, s) {
    t = {
      ...t
    }, i = {
      ...i
    };
    const e = s.map(t => t.animatingProperties).filter(t => void 0 !== t);
    let h = 1,
      o = 1;
    return e.length > 0 && (e.forEach(t => {
      t.width && (h /= t.width), t.height && (o /= t.height);
    }), void 0 !== t.left && void 0 !== i.left && (t.left = h * t.left, i.left = h * i.left), void 0 !== t.top && void 0 !== i.top && (t.top = o * t.top, i.top = o * i.top)), {
      from: t,
      to: i
    };
  }
  calculateKeyframes(t, i, s = !1) {
    const e = {},
      h = {};
    let o = !1;
    const r = {};
    for (const s in i) {
      const n = t[s],
        a = i[s];
      if (s in N) {
        const t = N[s];
        if (void 0 === n || void 0 === a) continue;
        const i = t(n, a);
        void 0 !== i.transform && (r[s] = i.value, o = !0, e.transform = `${e.transform ?? ""} ${i.transform}`, void 0 !== i.overrideFrom && Object.assign(e, i.overrideFrom));
      } else n !== a && void 0 !== n && void 0 !== a && (o = !0, e[s] = n, h[s] = a);
    }
    return e.transformOrigin = h.transformOrigin = s ? "center center" : "top left", this.animatingProperties = r, o ? [e, h] : void 0;
  }
  async animate(t, i = this.options.keyframeOptions) {
    this.start(), this.frames = t;
    let s = !1;
    if (!this.isAnimating() && !this.isDisabled() && (this.options.onFrames && (this.frames = t = this.options.onFrames(this), this.log("modified frames", t)), void 0 !== t)) {
      this.log("animate", [t, i]), s = !0, this.webAnimation = this.element.animate(t, i);
      const e = this.getController();
      e?.add(this);
      try {
        await this.webAnimation.finished;
      } catch (t) {}
      e?.remove(this);
    }
    return this.didFinish(s), s;
  }
  isAnimating() {
    return "running" === this.webAnimation?.playState || this.webAnimation?.pending;
  }
  log(t, i) {
    this.shouldLog && !this.isDisabled() && console.log(t, this.options.id, i);
  }
}
const F = e(x);

/*
  HTDMath Static Class - Not intended for instantiation!

  Variables:
    A = amount
    D = delay
    V = subjective value

    k = discount factor

  Equations:
    V = A / (1 + kD)
*/
class HTDMath {
  static adk2v(a, d, k) {
    return a / (1 + k * d);
  }
  static adv2k(a, d, v) {
    return (a - v) / (v * d);
  }
}

/*
  HTDEquation Base Class - Not intended for instantiation!
  <cpt-equation>
*/
class HTDEquation extends DiscountableElement {
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
    return [super.styles, i$4`
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
        /* .win {
          background: var(---color-better);
        }

        .loss {
          background: var(---color-worse);
        }

        .sure {
          background: var(---color-even);
        } */

        .a {
          background: var(---color-a-light);
        }

        .d {
          background: var(---color-d-light);
        }

        .k {
          background: var(---color-k-light);
        }

        .v {
          background: var(---color-v-light);
        }
      `];
  }
}

/*
  HTDCalculation element
  <htd-calculation>
*/
class HTDCalculation extends HTDEquation {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true
      },
      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true
      },
      dl: {
        attribute: 'delay-ll',
        type: Number,
        reflect: true
      },
      k: {
        attribute: 'k',
        type: Number,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.numeric = false;
    this.as = 20;
    this.ds = 5;
    this.al = 50;
    this.dl = 40;
    this.k = 0.1;
    this.alignState();
  }
  alignState() {
    // Calculate value
    this.vs = HTDMath.adk2v(this.as, this.ds, this.k);
    this.vl = HTDMath.adk2v(this.al, this.dl, this.k);
    // Calculate difference
    this.vDiff = this.vs - this.vl;
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-calculation-change', {
      detail: {
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,
        k: this.k
      },
      bubbles: true
    }));
  }
  asInput(e) {
    this.as = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  dsInput(e) {
    this.ds = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  alInput(e) {
    this.al = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  dlInput(e) {
    this.dl = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  kInput(e) {
    this.k = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  static get styles() {
    return [super.styles, i$4`
        /* :host {
          display: inline-block;
        } */

        var {
          border-radius: var(---border-radius);
        }

        decidables-spinner {
          border-radius: var(---border-radius);
        }
      `];
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let as;
    let ds;
    let al;
    let dl;
    let k;
    let vs;
    let vl;
    let vDiff;
    if (this.numeric) {
      as = x$2`<decidables-spinner class="a as" ?disabled=${!this.interactive} step="1" .value="${this.as}" @input=${this.asInput.bind(this)}>
          <var class="math-var">A<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      ds = x$2`<decidables-spinner class="d ds" ?disabled=${!this.interactive} min="0" step="1" .value="${this.ds}" @input=${this.dsInput.bind(this)}>
          <var class="math-var">D<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      al = x$2`<decidables-spinner class="a al" ?disabled=${!this.interactive} step="1" .value="${this.al}" @input=${this.alInput.bind(this)}>
          <var class="math-var">A<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      dl = x$2`<decidables-spinner class="d dl" ?disabled=${!this.interactive} min="0" step="1" .value="${this.dl}" @input=${this.dlInput.bind(this)}>
          <var class="math-var">D<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      k = x$2`<decidables-spinner class="k" ?disabled=${!this.interactive} min="0" max="100" step=".001" .value="${this.k}" @input=${this.kInput.bind(this)}>
          <var class="math-var">k</var>
        </decidables-spinner>`;
      vs = x$2`<decidables-spinner class="v vs" disabled .value="${+this.vs.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      vl = x$2`<decidables-spinner class="v vl" disabled .value="${+this.vl.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      vDiff = x$2`${this.vDiff > 0 ? x$2`<span class="comparison" ${F({
        in: v
      })}>&gt;</span>` : this.vDiff < 0 ? x$2`<span class="comparison" ${F({
        in: v
      })}>&lt;</span>` : x$2`<span class="comparison" ${F({
        in: v
      })}>=</span>`}`;
    } else {
      as = x$2`<var class="math-var a as">A<sub class="subscript">ss</sub></var>`;
      ds = x$2`<var class="math-var d ds">D<sub class="subscript">ss</sub></var>`;
      al = x$2`<var class="math-var a al">A<sub class="subscript">ll</sub></var>`;
      dl = x$2`<var class="math-var d dl">D<sub class="subscript">ll</sub></var>`;
      k = x$2`<var class="math-var k">k</var>`;
      vs = x$2`<var class="math-var v vs">V<sub class="subscript">ss</sub></var>`;
      vl = x$2`<var class="math-var v vl">V<sub class="subscript">ll</sub></var>`;
      vDiff = x$2`<span class="comparison">≟</span>`;
    }
    const equation = x$2`
      <tr>
        <td class="underline">
          ${as}
        </td>
        <td rowspan="2">
          ${vDiff}
        </td>
        <td class="underline">
          ${al}
        </td>
      </tr>
      <tr>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${ds}<span class="paren tight">)</span>
        </td>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${dl}<span class="paren tight">)</span>
        </td>
      </tr>
      <tr>
        <td class="right">
          ${vs}
        </td>
        <td>
          ${vDiff}
        </td>
        <td class="left">
          ${vl}
        </td>
      </tr>`;
    return x$2`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
  }
}
customElements.define('htd-calculation', HTDCalculation);

/*
  HTDCurves element
  <htd-curves>

  Attributes:
    interactive: true/false

    a: numeric (-infinity, infinity)
    d: numeric [0, infinity)
    k: numeric [0, infinity)
    label: string

  Styles:
    ??
*/
class HTDCurves extends DecidablesMixinResizeable(DiscountableElement) {
  static get properties() {
    return {
      a: {
        attribute: 'amount',
        type: Number,
        reflect: true
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true
      },
      label: {
        attribute: 'label',
        type: String,
        reflect: true
      },
      k: {
        attribute: 'k',
        type: Number,
        reflect: true
      },
      v: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.firstUpdate = true;
    this.drag = false;
    this.scale = {
      value: {
        min: 0,
        max: 80,
        step: 1,
        round: Math.round
      },
      time: {
        min: 0,
        max: 100,
        step: 1,
        round: Math.round
      },
      discount: {
        min: 0,
        max: 100,
        step: 0.001,
        round: k => {
          return +k.toFixed(3);
        }
      }
    };
    this.a = null;
    this.d = null;
    this.label = '';
    this.k = 0.1;
    this.options = [{
      name: 'default',
      a: this.a,
      d: this.d,
      label: this.label
    }];
    this.as = null;
    this.ds = null;
    this.al = null;
    this.dl = null;
    this.trialCount = null;
    this.response = null;
    this.alignState();
  }
  alignState() {
    // Default options
    this.options[0].a = this.a;
    this.options[0].d = this.d;
    this.options[0].label = this.label;

    // Update values
    this.options.forEach(option => {
      option.v = HTDMath.adk2v(option.a, option.d, this.k);
    });
    this.v = this.options[0].v;
  }
  trial(as, ds, al, dl, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeOption(`${this.trialCount}-s`);
    if (this.trialCount) this.removeOption(`${this.trialCount}-l`);
    this.as = as;
    this.ds = ds;
    this.al = al;
    this.dl = dl;
    this.trialCount = trial;
    this.response = response;

    // Add the new trial
    this.setOption(this.as, this.ds, `${this.trialCount}-s`, 's', true);
    this.setOption(this.al, this.dl, `${this.trialCount}-l`, 'l', true);
  }

  // Called to pause trial animations!
  pauseTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.interrupt('new-1');
    lineNew.interrupt('new-2');
    lineNew.datum(datum => {
      datum.paused = true;
      return datum;
    });
  }

  // Called to resume trial animations!
  resumeTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.datum(datum => {
      datum.paused = false;
      return datum;
    });
    this.requestUpdate();
  }
  clearOptions() {
    this.options.splice(1);
    this.requestUpdate();
  }
  removeOption(name) {
    this.options = this.options.filter(option => {
      return option.name !== name;
    });
    this.requestUpdate();
  }
  getOption(name = 'default') {
    return this.options.find(option => {
      return option.name === name;
    });
  }
  setOption(a, d, name = 'default', label = '', trial = false) {
    if (name === 'default') {
      this.a = a;
      this.d = d;
      this.label = label;
    }
    const myOption = this.options.find(option => {
      return option.name === name;
    });
    if (myOption === undefined) {
      this.options.push({
        name: name,
        a: a,
        d: d,
        label: label,
        trial: trial,
        new: trial
      });
    } else {
      myOption.a = a;
      myOption.d = d;
      myOption.label = label;
    }
    this.requestUpdate();
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          display: inline-block;

          width: 27rem;
          height: 15rem;
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

        .background {
          fill: var(---color-element-background);
          stroke: var(---color-element-border);
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title-x,
        .title-y {
          font-weight: 600;

          fill: currentColor;
        }

        .tick {
          font-size: 0.75rem;
        }

        .axis-x path,
        .axis-x line,
        .axis-y path,
        .axis-y line {
          stroke: var(---color-element-border);
          /* shape-rendering: crispEdges; */
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .curve.interactive {
          cursor: nwse-resize;
          
          filter: url("#shadow-2");
          outline: none;
        }

        .curve.interactive:hover {
          filter: url("#shadow-4");
        }

        .curve.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .curve.interactive:focus {
          filter: url("#shadow-8");
        }

        .bar {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .bar.interactive {
          cursor: ew-resize;
          
          filter: url("#shadow-2");
          outline: none;
        }

        .bar.interactive:hover {
          filter: url("#shadow-4");
        }

        .bar.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .bar.interactive:focus {
          filter: url("#shadow-8");
        }

        .point .mark {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: middle;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }

        .point.interactive {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          stroke: #000000;
          stroke-opacity: 0;
          stroke-width: 0;
        }

        .point.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #ff0000;
        }

        .point.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #00ff00;
        }

        :host(.keyboard) .point.interactive:focus {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #0000ff;
        }
      `];
  }
  render() {
    /* eslint-disable-line class-methods-use-this */
    return x$2``;
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
    const elementAspectRatio = 1.8;
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
      top: 2 * this.rem,
      bottom: 3 * this.rem,
      left: 3 * this.rem,
      right: 2 * this.rem
    };
    const height = elementHeight - (margin.top + margin.bottom);
    const width = elementWidth - (margin.left + margin.right);
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const xScale = linear().domain([this.scale.time.min, this.scale.time.max]).range([0, width]);

    // Y Scale
    const yScale = linear().domain([this.scale.value.min, this.scale.value.max]).range([height, 0]);

    // Line for time/value space
    const line = shapeLine().x(datum => {
      return xScale(datum.d);
    }).y(datum => {
      return yScale(datum.v);
    });

    // Svg
    //  DATA-JOIN
    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]);
    //  ENTER
    const svgEnter = svgUpdate.enter().append('svg').classed('main', true);
    svgEnter.html(DiscountableElement.svgDefs);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

    // Plot
    //  ENTER
    const plotEnter = svgEnter.append('g').classed('plot', true);
    //  MERGE
    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Clippath
    //  ENTER
    plotEnter.append('clipPath').attr('id', 'clip-htd-curves').append('rect');
    //  MERGE
    plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1);

    // Underlayer
    //  ENTER
    const underlayerEnter = plotEnter.append('g').classed('underlayer', true);
    // MERGE
    const underlayerMerge = plotMerge.select('.underlayer');

    // Background
    //  ENTER
    underlayerEnter.append('rect').classed('background', true);
    //  MERGE
    underlayerMerge.select('.background').attr('height', height).attr('width', width);

    // X Axis
    //  ENTER
    underlayerEnter.append('g').classed('axis-x', true);
    //  MERGE
    const scaleXMerge = underlayerMerge.select('.axis-x').attr('transform', `translate(0, ${yScale(0)})`);
    const scaleXTransition = scaleXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    scaleXTransition.selectAll('line, path').attr('stroke', null);

    // X Axis Title
    //  ENTER
    const titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
    titleXEnter.append('tspan').classed('name', true).text('Delay (');
    titleXEnter.append('tspan').classed('math-var d', true).text('D');
    titleXEnter.append('tspan').classed('name', true).text(')');
    //  MERGE
    underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`);

    // Y Axis
    //  ENTER
    underlayerEnter.append('g').classed('axis-y', true);
    // MERGE
    const scaleYTransition = underlayerMerge.select('.axis-y').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
    scaleYTransition.selectAll('line, path').attr('stroke', null);

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
    titleYEnter.append('tspan').classed('name', true).text('Value (');
    titleYEnter.append('tspan').classed('math-var v', true).text('V');
    titleYEnter.append('tspan').classed('name', true).text(')');
    //  MERGE
    underlayerMerge.select('.title-y').attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`);

    // Content
    //  ENTER
    plotEnter.append('g').classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Options
    // DATA-JOIN
    const optionUpdate = contentMerge.selectAll('.option').data(this.options.filter(option => {
      return option.a !== null && option.d !== null;
    }), datum => {
      return datum.name;
    });
    //  ENTER
    const optionEnter = optionUpdate.enter().append('g').classed('option', true);
    // Curve
    optionEnter.append('path').classed('curve', true).attr('clip-path', 'url(#clip-htd-curves)').attr('d', datum => {
      const curve = range$1(xScale(datum.d), xScale(0), -1).map(range => {
        return {
          d: xScale.invert(range),
          v: HTDMath.adk2v(datum.a, datum.d - xScale.invert(range), this.k)
        };
      });
      return line(curve);
    }).attr('stroke-dasharray', (datum, index, nodes) => {
      if (datum.trial) {
        const length = nodes[index].getTotalLength();
        return `0,${length}`;
      }
      return 'none';
    });
    // Bar
    optionEnter.append('line').classed('bar', true).attr('x1', datum => {
      return xScale(datum.d);
    }).attr('x2', datum => {
      return xScale(datum.d);
    }).attr('y1', yScale(0)).attr('y2', datum => {
      return yScale(datum.a);
    }).attr('stroke-dasharray', (datum, index, nodes) => {
      if (datum.trial) {
        const length = nodes[index].getTotalLength();
        return `0,${length}`;
      }
      return 'none';
    });
    // Point
    const pointEnter = optionEnter.append('g').classed('point', true).attr('transform', datum => {
      return `translate(${xScale(datum.d)}, ${yScale(datum.a)})`;
    }).attr('opacity', datum => {
      if (datum.trial) {
        return 0;
      }
      return 1;
    });
    pointEnter.append('circle').classed('mark', true);
    pointEnter.append('text').classed('label', true);
    //  MERGE
    const optionMerge = optionEnter.merge(optionUpdate);

    // Interactive options
    // Curve
    optionMerge.filter((datum, index, nodes) => {
      return this.interactive && !nodes[index].classList.contains('interactive');
    }).select('.curve').classed('interactive', true).attr('tabindex', 0)
    // Drag interaction
    .call(drag().subject(event => {
      return {
        x: event.x,
        y: event.y
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const dragD = datum.d - xScale.invert(event.x);
      const d = dragD < 0 ? 0 : dragD > datum.d ? datum.d : dragD;
      const dragV = yScale.invert(event.y);
      const v = dragV <= 0 ? 0.001 : dragV > datum.a ? datum.a : dragV;
      const k = HTDMath.adv2k(datum.a, d, v);
      this.k = k < this.scale.discount.min ? this.scale.discount.min : k > this.scale.discount.max ? this.scale.discount.max : this.scale.discount.round(k);
      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('htd-curves-change', {
        detail: {
          name: datum.name,
          a: datum.a,
          d: datum.d,
          k: this.k,
          label: datum.label
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }))
    // Keyboard interaction
    .on('keydown', (event, datum) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let keyK = this.k;
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowLeft':
            keyK *= event.shiftKey ? 0.95 : 0.85;
            break;
          case 'ArrowDown':
          case 'ArrowRight':
            keyK *= event.shiftKey ? 1.05 : 1.15;
            break;
          // no-op
        }
        keyK = keyK < this.scale.discount.min ? this.scale.discount.min : keyK > this.scale.discount.max ? this.scale.discount.max : this.scale.discount.round(keyK);
        if (keyK !== this.k) {
          this.k = keyK;
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label
            },
            bubbles: true
          }));
        }
        event.preventDefault();
      }
    });
    // Bar
    optionMerge.filter((datum, index, nodes) => {
      return this.interactive && !datum.trial && !nodes[index].classList.contains('interactive');
    }).select('.bar').classed('interactive', true).attr('tabindex', 0)
    // Drag interaction
    .call(drag().subject((event, datum) => {
      return {
        x: xScale(datum.d),
        y: yScale(datum.a)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const d = xScale.invert(event.x);
      datum.d = d < this.scale.time.min ? this.scale.time.min : d > this.scale.time.max ? this.scale.time.max : this.scale.time.round(d);
      if (datum.name === 'default') {
        this.d = datum.d;
      }
      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('htd-curves-change', {
        detail: {
          name: datum.name,
          a: datum.a,
          d: datum.d,
          k: this.k,
          label: datum.label
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }))
    // Keyboard interaction
    .on('keydown', (event, datum) => {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        let keyD = datum.d;
        switch (event.key) {
          case 'ArrowRight':
            keyD += event.shiftKey ? 1 : 5;
            break;
          case 'ArrowLeft':
            keyD -= event.shiftKey ? 1 : 5;
            break;
          // no-op
        }
        keyD = keyD < this.scale.time.min ? this.scale.time.min : keyD > this.scale.time.max ? this.scale.time.max : keyD;
        if (keyD !== datum.d) {
          datum.d = keyD;
          if (datum.name === 'default') {
            this.d = datum.d;
          }
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label
            },
            bubbles: true
          }));
        }
        event.preventDefault();
      }
    });
    // Point
    optionMerge.filter((datum, index, nodes) => {
      return this.interactive && !datum.trial && !nodes[index].classList.contains('interactive');
    }).select('.point').classed('interactive', true).attr('tabindex', 0)
    // Drag interaction
    .call(drag().subject((event, datum) => {
      return {
        x: xScale(datum.d),
        y: yScale(datum.a)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const a = yScale.invert(event.y);
      datum.a = a < this.scale.value.min ? this.scale.value.min : a > this.scale.value.max ? this.scale.value.max : this.scale.value.round(a);
      if (datum.name === 'default') {
        this.a = datum.a;
      }
      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('htd-curves-change', {
        detail: {
          name: datum.name,
          a: datum.a,
          d: datum.d,
          k: this.k,
          label: datum.label
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }))
    // Keyboard interaction
    .on('keydown', (event, datum) => {
      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        let keyA = datum.a;
        switch (event.key) {
          case 'ArrowUp':
            keyA += event.shiftKey ? 1 : 5;
            break;
          case 'ArrowDown':
            keyA -= event.shiftKey ? 1 : 5;
            break;
          // no-op
        }
        keyA = keyA < this.scale.value.min ? this.scale.value.min : keyA > this.scale.value.max ? this.scale.value.max : keyA;
        if (keyA !== datum.a) {
          datum.a = keyA;
          if (datum.name === 'default') {
            this.a = datum.a;
          }
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label
            },
            bubbles: true
          }));
        }
        event.preventDefault();
      }
    });

    // Non-interactive options
    // Curve
    optionMerge.filter((datum, index, nodes) => {
      return !this.interactive && nodes[index].classList.contains('interactive');
    }).select('.curve').classed('interactive', false).attr('tabindex', null).on('drag', null).on('keydown', null);
    // Bar
    optionMerge.filter((datum, index, nodes) => {
      return (!this.interactive || datum.trial) && nodes[index].classList.contains('interactive');
    }).select('.bar').classed('interactive', false).attr('tabindex', null).on('drag', null).on('keydown', null);
    // Point
    optionMerge.filter((datum, index, nodes) => {
      return (!this.interactive || datum.trial) && nodes[index].classList.contains('interactive');
    }).select('.point').classed('interactive', false).attr('tabindex', null).on('drag', null).on('keydown', null);

    // Trial Animation
    // Curve
    optionMerge.filter(datum => {
      return datum.new;
    }).select('.curve').transition().duration(transitionDuration).delay(transitionDuration + transitionDuration / 10).ease(linear$1).attrTween('stroke-dasharray', (datum, index, nodes) => {
      const length = nodes[index].getTotalLength();
      return interpolate$1(`0,${length}`, `${length},${0}`);
    }).on('end', datum => {
      datum.new = false;
      this.dispatchEvent(new CustomEvent('discountable-response', {
        detail: {
          trial: this.trialCount,
          as: this.as,
          ds: this.ds,
          al: this.al,
          dl: this.dl,
          response: this.response
        },
        bubbles: true
      }));
    });
    // Bar
    optionMerge.filter(datum => {
      return datum.new;
    }).select('.bar').transition().duration(transitionDuration).ease(linear$1).attrTween('stroke-dasharray', (datum, index, nodes) => {
      const length = nodes[index].getTotalLength();
      return interpolate$1(`0,${length}`, `${length},${length}`);
    });
    // Point
    optionMerge.filter(datum => {
      return datum.new;
    }).select('.point').transition().duration(transitionDuration / 10).delay(transitionDuration).ease(linear$1).attrTween('opacity', () => {
      return interpolate$1(0, 1);
    });

    // All options
    optionUpdate.select('.curve').transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : datum.a, datum.a);
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
      return time => {
        element.a = interpolateA(time);
        element.d = interpolateD(time);
        const curve = range$1(xScale(element.d), xScale(0), -1).map(range => {
          return {
            d: xScale.invert(range),
            v: HTDMath.adk2v(element.a, element.d - xScale.invert(range), this.k)
          };
        });
        return line(curve);
      };
    });
    optionUpdate.select('.bar').transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('x1', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
      return time => {
        element.d = interpolateD(time);
        return `${xScale(element.d)}`;
      };
    }).attrTween('x2', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
      return time => {
        element.d = interpolateD(time);
        return `${xScale(element.d)}`;
      };
    }).attrTween('y2', (datum, index, elements) => {
      const element = elements[index];
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : datum.a, datum.a);
      return time => {
        element.a = interpolateA(time);
        return `${yScale(element.a)}`;
      };
    });
    optionUpdate.select('.point').transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('transform', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : datum.a, datum.a);
      return time => {
        element.d = interpolateD(time);
        element.a = interpolateA(time);
        return `translate(${xScale(element.d)}, ${yScale(element.a)})`;
      };
    });
    optionMerge.select('.point .label').text(datum => {
      return datum.label;
    });
    //  EXIT
    // NOTE: Could add a transition here
    optionUpdate.exit().remove();
    this.drag = false;
    this.firstUpdate = false;
  }
}
customElements.define('htd-curves', HTDCurves);

function defined(x) {
  return x != null && !Number.isNaN(x);
}
function ascendingDefined(a, b) {
  return +defined(b) - +defined(a) || ascending$1(a, b);
}
function descendingDefined(a, b) {
  return +defined(b) - +defined(a) || descending(a, b);
}
function nonempty(x) {
  return x != null && `${x}` !== "";
}
function finite(x) {
  return isFinite(x) ? x : NaN;
}
function positive(x) {
  return x > 0 && isFinite(x) ? x : NaN;
}
function negative(x) {
  return x < 0 && isFinite(x) ? x : NaN;
}

function format(date, fallback) {
  if (!(date instanceof Date)) date = new Date(+date);
  if (isNaN(date)) return typeof fallback === "function" ? fallback(date) : fallback;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();
  return `${formatYear(date.getUTCFullYear())}-${pad(date.getUTCMonth() + 1, 2)}-${pad(date.getUTCDate(), 2)}${hours || minutes || seconds || milliseconds ? `T${pad(hours, 2)}:${pad(minutes, 2)}${seconds || milliseconds ? `:${pad(seconds, 2)}${milliseconds ? `.${pad(milliseconds, 3)}` : ``}` : ``}Z` : ``}`;
}
function formatYear(year) {
  return year < 0 ? `-${pad(-year, 6)}` : year > 9999 ? `+${pad(year, 6)}` : pad(year, 4);
}
function pad(value, width) {
  return `${value}`.padStart(width, "0");
}

const re = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function parse(string, fallback) {
  if (!re.test(string += "")) return typeof fallback === "function" ? fallback(string) : fallback;
  return new Date(string);
}

// Like a sort comparator, returns a positive value if the given array of values
// is in ascending order, a negative value if the values are in descending
// order. Assumes monotonicity; only tests the first and last values.
function orderof(values) {
  if (values == null) return;
  const first = values[0];
  const last = values[values.length - 1];
  return descending(first, last);
}

const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

// See https://github.com/d3/d3-time/blob/9e8dc940f38f78d7588aad68a54a25b1f0c2d97b/src/ticks.js#L14-L33
const tickIntervals = [["millisecond", 1], ["2 milliseconds", 2], ["5 milliseconds", 5], ["10 milliseconds", 10], ["20 milliseconds", 20], ["50 milliseconds", 50], ["100 milliseconds", 100], ["200 milliseconds", 200], ["500 milliseconds", 500], ["second", durationSecond], ["5 seconds", 5 * durationSecond], ["15 seconds", 15 * durationSecond], ["30 seconds", 30 * durationSecond], ["minute", durationMinute], ["5 minutes", 5 * durationMinute], ["15 minutes", 15 * durationMinute], ["30 minutes", 30 * durationMinute], ["hour", durationHour], ["3 hours", 3 * durationHour], ["6 hours", 6 * durationHour], ["12 hours", 12 * durationHour], ["day", durationDay], ["2 days", 2 * durationDay], ["week", durationWeek], ["2 weeks", 2 * durationWeek],
// https://github.com/d3/d3-time/issues/46
["month", durationMonth], ["3 months", 3 * durationMonth], ["6 months", 6 * durationMonth],
// https://github.com/d3/d3-time/issues/46
["year", durationYear], ["2 years", 2 * durationYear], ["5 years", 5 * durationYear], ["10 years", 10 * durationYear], ["20 years", 20 * durationYear], ["50 years", 50 * durationYear], ["100 years", 100 * durationYear] // TODO generalize to longer time scales
];
const durations = new Map([["second", durationSecond], ["minute", durationMinute], ["hour", durationHour], ["day", durationDay], ["monday", durationWeek], ["tuesday", durationWeek], ["wednesday", durationWeek], ["thursday", durationWeek], ["friday", durationWeek], ["saturday", durationWeek], ["sunday", durationWeek], ["week", durationWeek], ["month", durationMonth], ["year", durationYear]]);
const timeIntervals = new Map([["second", second$1], ["minute", timeMinute], ["hour", timeHour], ["day", timeDay],
// https://github.com/d3/d3-time/issues/62
["monday", timeMonday], ["tuesday", timeTuesday], ["wednesday", timeWednesday], ["thursday", timeThursday], ["friday", timeFriday], ["saturday", timeSaturday], ["sunday", timeSunday], ["week", timeSunday], ["month", timeMonth], ["year", timeYear]]);
const utcIntervals = new Map([["second", second$1], ["minute", utcMinute], ["hour", utcHour], ["day", unixDay], ["monday", utcMonday], ["tuesday", utcTuesday], ["wednesday", utcWednesday], ["thursday", utcThursday], ["friday", utcFriday], ["saturday", utcSaturday], ["sunday", utcSunday], ["week", utcSunday], ["month", utcMonth], ["year", utcYear]]);

// These hidden fields describe standard intervals so that we can, for example,
// generalize a scale’s time interval to a larger ticks time interval to reduce
// the number of displayed ticks. TODO We could instead allow the interval
// implementation to expose a “generalize” method that returns a larger, aligned
// interval; that would allow us to move this logic to D3, and allow
// generalization even when a custom interval is provided.
const intervalDuration = Symbol("intervalDuration");
const intervalType = Symbol("intervalType");

// We greedily mutate D3’s standard intervals on load so that the hidden fields
// are available even if specified as e.g. d3.utcMonth instead of "month".
for (const [name, interval] of timeIntervals) {
  interval[intervalDuration] = durations.get(name);
  interval[intervalType] = "time";
}
for (const [name, interval] of utcIntervals) {
  interval[intervalDuration] = durations.get(name);
  interval[intervalType] = "utc";
}
const utcFormatIntervals = [["year", utcYear, "utc"], ["month", utcMonth, "utc"], ["day", unixDay, "utc", 6 * durationMonth], ["hour", utcHour, "utc", 3 * durationDay], ["minute", utcMinute, "utc", 6 * durationHour], ["second", second$1, "utc", 30 * durationMinute]];
const timeFormatIntervals = [["year", timeYear, "time"], ["month", timeMonth, "time"], ["day", timeDay, "time", 6 * durationMonth], ["hour", timeHour, "time", 3 * durationDay], ["minute", timeMinute, "time", 6 * durationHour], ["second", second$1, "time", 30 * durationMinute]];

// An interleaved array of UTC and local time intervals, in descending order
// from largest to smallest, used to determine the most specific standard time
// format for a given array of dates. This is a subset of the tick intervals
// listed above; we only need the breakpoints where the format changes.
const formatIntervals = [utcFormatIntervals[0], timeFormatIntervals[0], utcFormatIntervals[1], timeFormatIntervals[1], utcFormatIntervals[2], timeFormatIntervals[2],
// Below day, local time typically has an hourly offset from UTC and hence the
// two are aligned and indistinguishable; therefore, we only consider UTC, and
// we don’t consider these if the domain only has a single value.
...utcFormatIntervals.slice(3)];
function parseTimeInterval(input) {
  let name = `${input}`.toLowerCase();
  if (name.endsWith("s")) name = name.slice(0, -1); // drop plural
  let period = 1;
  const match = /^(?:(\d+)\s+)/.exec(name);
  if (match) {
    name = name.slice(match[0].length);
    period = +match[1];
  }
  switch (name) {
    case "quarter":
      name = "month";
      period *= 3;
      break;
    case "half":
      name = "month";
      period *= 6;
      break;
  }
  let interval = utcIntervals.get(name);
  if (!interval) throw new Error(`unknown interval: ${input}`);
  if (period > 1 && !interval.every) throw new Error(`non-periodic interval: ${name}`);
  return [name, period];
}
function maybeTimeInterval(input) {
  return asInterval(parseTimeInterval(input), "time");
}
function maybeUtcInterval(input) {
  return asInterval(parseTimeInterval(input), "utc");
}
function asInterval([name, period], type) {
  let interval = (type === "time" ? timeIntervals : utcIntervals).get(name);
  if (period > 1) {
    interval = interval.every(period);
    interval[intervalDuration] = durations.get(name) * period;
    interval[intervalType] = type;
  }
  return interval;
}

// If the given interval is a standard time interval, we may be able to promote
// it a larger aligned time interval, rather than showing every nth tick.
function generalizeTimeInterval(interval, n) {
  if (!(n > 1)) return; // no need to generalize
  const duration = interval[intervalDuration];
  if (!tickIntervals.some(([, d]) => d === duration)) return; // nonstandard or unknown interval
  if (duration % durationDay === 0 && durationDay < duration && duration < durationMonth) return; // not generalizable
  const [i] = tickIntervals[bisector(([, step]) => Math.log(step)).center(tickIntervals, Math.log(duration * n))];
  return (interval[intervalType] === "time" ? maybeTimeInterval : maybeUtcInterval)(i);
}
function formatTimeInterval(name, type, anchor) {
  const format = type === "time" ? timeFormat : utcFormat;
  // For tips and legends, use a format that doesn’t require context.
  if (anchor == null) {
    return format(name === "year" ? "%Y" : name === "month" ? "%Y-%m" : name === "day" ? "%Y-%m-%d" : name === "hour" || name === "minute" ? "%Y-%m-%dT%H:%M" : name === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
  }
  // Otherwise, assume that this is for axis ticks.
  const template = getTimeTemplate(anchor);
  switch (name) {
    case "millisecond":
      return formatConditional(format(".%L"), format(":%M:%S"), template);
    case "second":
      return formatConditional(format(":%S"), format("%-I:%M"), template);
    case "minute":
      return formatConditional(format("%-I:%M"), format("%p"), template);
    case "hour":
      return formatConditional(format("%-I %p"), format("%b %-d"), template);
    case "day":
      return formatConditional(format("%-d"), format("%b"), template);
    case "month":
      return formatConditional(format("%b"), format("%Y"), template);
    case "year":
      return format("%Y");
  }
  throw new Error("unable to format time ticks");
}
function getTimeTemplate(anchor) {
  return anchor === "left" || anchor === "right" ? (f1, f2) => `\n${f1}\n${f2}` // extra newline to keep f1 centered
  : anchor === "top" ? (f1, f2) => `${f2}\n${f1}` : (f1, f2) => `${f1}\n${f2}`;
}
function getFormatIntervals(type) {
  return type === "time" ? timeFormatIntervals : type === "utc" ? utcFormatIntervals : formatIntervals;
}

// Given an array of dates, returns the largest compatible standard time
// interval. If no standard interval is compatible (other than milliseconds,
// which is universally compatible), returns undefined.
function inferTimeFormat(type, dates, anchor) {
  const step = max(pairs(dates, (a, b) => Math.abs(b - a))); // maybe undefined!
  if (step < 1000) return formatTimeInterval("millisecond", "utc", anchor);
  for (const [name, interval, intervalType, maxStep] of getFormatIntervals(type)) {
    if (step > maxStep) break; // e.g., 52 weeks
    if (name === "hour" && !step) break; // e.g., domain with a single date
    if (dates.every(d => interval.floor(d) >= d)) return formatTimeInterval(name, intervalType, anchor);
  }
}
function formatConditional(format1, format2, template) {
  return (x, i, X) => {
    const f1 = format1(x, i); // always shown
    const f2 = format2(x, i); // only shown if different
    const j = i - orderof(X); // detect reversed domains
    return i !== j && X[j] !== undefined && f2 === format2(X[j], j) ? f1 : template(f1, f2);
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
const TypedArray = Object.getPrototypeOf(Uint8Array);
const objectToString = Object.prototype.toString;

// If a reindex is attached to the data, channel values expressed as arrays will
// be reindexed when the channels are instantiated. See exclusiveFacets.
const reindex = Symbol("reindex");
function valueof(data, value, type) {
  const valueType = typeof value;
  return valueType === "string" ? maybeTypedMap(data, field(value), type) : valueType === "function" ? maybeTypedMap(data, value, type) : valueType === "number" || value instanceof Date || valueType === "boolean" ? map(data, constant(value), type) : typeof value?.transform === "function" ? maybeTypedArrayify(value.transform(data), type) : maybeTake(maybeTypedArrayify(value, type), data?.[reindex]);
}
function maybeTake(values, index) {
  return index ? take(values, index) : values;
}
function maybeTypedMap(data, f, type) {
  return map(data, type?.prototype instanceof TypedArray ? floater(f) : f, type);
}
function maybeTypedArrayify(data, type) {
  return type === undefined ? arrayify(data) // preserve undefined type
  : data instanceof type ? data : type.prototype instanceof TypedArray && !(data instanceof TypedArray) ? type.from(data, coerceNumber) : type.from(data);
}
function floater(f) {
  return (d, i) => coerceNumber(f(d, i));
}
const singleton = [null]; // for data-less decoration marks, e.g. frame
const field = name => d => d[name];
const indexOf = {
  transform: range
};
const identity$1 = {
  transform: d => d
};
const one = () => 1;
const yes = () => true;
const string = x => x == null ? x : `${x}`;
const number = x => x == null ? x : +x;
const first = x => x ? x[0] : undefined;
const second = x => x ? x[1] : undefined;
const constant = x => () => x;

// Converts a string like “p25” into a function that takes an index I and an
// accessor function f, returning the corresponding percentile value.
function percentile(reduce) {
  const p = +`${reduce}`.slice(1) / 100;
  return (I, f) => quantile$1(I, p, f);
}

// If the values are specified as a typed array, no coercion is required.
function coerceNumbers(values) {
  return values instanceof TypedArray ? values : map(values, coerceNumber, Float64Array);
}

// Unlike Mark’s number, here we want to convert null and undefined to NaN since
// the result will be stored in a Float64Array and we don’t want null to be
// coerced to zero. We use Number instead of unary + to allow BigInt coercion.
function coerceNumber(x) {
  return x == null ? NaN : Number(x);
}
function coerceDates(values) {
  return map(values, coerceDate);
}

// When coercing strings to dates, we only want to allow the ISO 8601 format
// since the built-in string parsing of the Date constructor varies across
// browsers. (In the future, this could be made more liberal if desired, though
// it is still generally preferable to do date parsing yourself explicitly,
// rather than rely on Plot.) Any non-string values are coerced to number first
// and treated as milliseconds since UNIX epoch.
function coerceDate(x) {
  return x instanceof Date && !isNaN(x) ? x : typeof x === "string" ? parse(x) : x == null || isNaN(x = +x) ? undefined : new Date(x);
}

// Some channels may allow a string constant to be specified; to differentiate
// string constants (e.g., "red") from named fields (e.g., "date"), this
// function tests whether the given value is a CSS color string and returns a
// tuple [channel, constant] where one of the two is undefined, and the other is
// the given value. If you wish to reference a named field that is also a valid
// CSS color, use an accessor (d => d.red) instead.
function maybeColorChannel(value, defaultValue) {
  if (value === undefined) value = defaultValue;
  return value === null ? [undefined, "none"] : isColor(value) ? [undefined, value] : [value, undefined];
}

// Similar to maybeColorChannel, this tests whether the given value is a number
// indicating a constant, and otherwise assumes that it’s a channel value.
function maybeNumberChannel(value, defaultValue) {
  if (value === undefined) value = defaultValue;
  return value === null || typeof value === "number" ? [undefined, value] : [value, undefined];
}

// Validates the specified optional string against the allowed list of keywords.
function maybeKeyword(input, name, allowed) {
  if (input != null) return keyword(input, name, allowed);
}

// Validates the specified required string against the allowed list of keywords.
function keyword(input, name, allowed) {
  const i = `${input}`.toLowerCase();
  if (!allowed.includes(i)) throw new Error(`invalid ${name}: ${input}`);
  return i;
}

// Promotes the specified data to an array as needed.
function arrayify(data) {
  return data == null || data instanceof Array || data instanceof TypedArray ? data : Array.from(data);
}

// An optimization of type.from(values, f): if the given values are already an
// instanceof the desired array type, the faster values.map method is used.
function map(values, f, type = Array) {
  return values == null ? values : values instanceof type ? values.map(f) : type.from(values, f);
}

// An optimization of type.from(values): if the given values are already an
// instanceof the desired array type, the faster values.slice method is used.
function slice(values, type = Array) {
  return values instanceof type ? values.slice() : type.from(values);
}

// Returns true if any of x, x1, or x2 is not (strictly) undefined.
function hasX({
  x,
  x1,
  x2
}) {
  return x !== undefined || x1 !== undefined || x2 !== undefined;
}

// Returns true if any of y, y1, or y2 is not (strictly) undefined.
function hasY({
  y,
  y1,
  y2
}) {
  return y !== undefined || y1 !== undefined || y2 !== undefined;
}

// Returns true if has x or y, or if interval is not (strictly) undefined.
function hasXY(options) {
  return hasX(options) || hasY(options) || options.interval !== undefined;
}

// Disambiguates an options object (e.g., {y: "x2"}) from a primitive value.
function isObject(option) {
  return option?.toString === objectToString;
}

// Disambiguates a scale options object (e.g., {color: {type: "linear"}}) from
// some other option (e.g., {color: "red"}). When creating standalone legends,
// this is used to test whether a scale is defined; this should be consistent
// with inferScaleType when there are no channels associated with the scale, and
// if this returns true, then normalizeScale must return non-null.
function isScaleOptions(option) {
  return isObject(option) && (option.type !== undefined || option.domain !== undefined);
}

// Disambiguates an options object (e.g., {y: "x2"}) from a channel value
// definition expressed as a channel transform (e.g., {transform: …}).
// TODO Check typeof option[Symbol.iterator] !== "function"?
function isOptions(option) {
  return isObject(option) && typeof option.transform !== "function";
}

// Disambiguates a sort transform (e.g., {sort: "date"}) from a channel domain
// sort definition (e.g., {sort: {y: "x"}}).
function isDomainSort(sort) {
  return isOptions(sort) && sort.value === undefined && sort.channel === undefined;
}

// For marks specified either as [0, x] or [x1, x2], such as areas and bars.
function maybeZero(x, x1, x2, x3 = identity$1) {
  if (x1 === undefined && x2 === undefined) {
    // {x} or {}
    x1 = 0, x2 = x === undefined ? x3 : x;
  } else if (x1 === undefined) {
    // {x, x2} or {x2}
    x1 = x === undefined ? 0 : x;
  } else if (x2 === undefined) {
    // {x, x1} or {x1}
    x2 = x === undefined ? 0 : x;
  }
  return [x1, x2];
}

// For marks that have x and y channels (e.g., cell, dot, line, text).
function maybeTuple(x, y) {
  return x === undefined && y === undefined ? [first, second] : [x, y];
}

// A helper for extracting the z channel, if it is variable. Used by transforms
// that require series, such as moving average and normalize.
function maybeZ({
  z,
  fill,
  stroke
} = {}) {
  if (z === undefined) [z] = maybeColorChannel(fill);
  if (z === undefined) [z] = maybeColorChannel(stroke);
  return z;
}

// Returns a Uint32Array with elements [0, 1, 2, … data.length - 1].
function range(data) {
  const n = data.length;
  const r = new Uint32Array(n);
  for (let i = 0; i < n; ++i) r[i] = i;
  return r;
}

// Returns an array [values[index[0]], values[index[1]], …].
function take(values, index) {
  return map(index, i => values[i], values.constructor);
}

// Uses subarray if available, and otherwise slice.
function subarray(I, i, j) {
  return I.subarray ? I.subarray(i, j) : I.slice(i, j);
}

// Based on InternMap (d3.group).
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
function maybeInput(key, options) {
  if (options[key] !== undefined) return options[key];
  switch (key) {
    case "x1":
    case "x2":
      key = "x";
      break;
    case "y1":
    case "y2":
      key = "y";
      break;
  }
  return options[key];
}
function column(source) {
  // Defines a column whose values are lazily populated by calling the returned
  // setter. If the given source is labeled, the label is propagated to the
  // returned column definition.
  let value;
  return [{
    transform: () => value,
    label: labelof(source)
  }, v => value = v];
}

// Like column, but allows the source to be null.
function maybeColumn(source) {
  return source == null ? [source] : column(source);
}
function labelof(value, defaultValue) {
  return typeof value === "string" ? value : value && value.label !== undefined ? value.label : defaultValue;
}

// Assuming that both x1 and x2 and lazy columns (per above), this derives a new
// a column that’s the average of the two, and which inherits the column label
// (if any). Both input columns are assumed to be quantitative. If either column
// is temporal, the returned column is also temporal.
function mid(x1, x2) {
  return {
    transform(data) {
      const X1 = x1.transform(data);
      const X2 = x2.transform(data);
      return isTemporal(X1) || isTemporal(X2) ? map(X1, (_, i) => new Date((+X1[i] + +X2[i]) / 2)) : map(X1, (_, i) => (+X1[i] + +X2[i]) / 2, Float64Array);
    },
    label: x1.label
  };
}

// If the scale options declare an interval, applies it to the values V.
function maybeApplyInterval(V, scale) {
  const t = maybeIntervalTransform(scale?.interval, scale?.type);
  return t ? map(V, t) : V;
}

// Returns the equivalent scale transform for the specified interval option.
function maybeIntervalTransform(interval, type) {
  const i = maybeInterval(interval, type);
  return i && (v => defined(v) ? i.floor(v) : v);
}

// If interval is not nullish, converts interval shorthand such as a number (for
// multiples) or a time interval name (such as “day”) to a {floor, offset,
// range} object similar to a D3 time interval.
function maybeInterval(interval, type) {
  if (interval == null) return;
  if (typeof interval === "number") {
    if (0 < interval && interval < 1 && Number.isInteger(1 / interval)) interval = -1 / interval;
    const n = Math.abs(interval);
    return interval < 0 ? {
      floor: d => Math.floor(d * n) / n,
      offset: d => (d * n + 1) / n,
      // note: no optional step for simplicity
      range: (lo, hi) => range$1(Math.ceil(lo * n), hi * n).map(x => x / n)
    } : {
      floor: d => Math.floor(d / n) * n,
      offset: d => d + n,
      // note: no optional step for simplicity
      range: (lo, hi) => range$1(Math.ceil(lo / n), hi / n).map(x => x * n)
    };
  }
  if (typeof interval === "string") return (type === "time" ? maybeTimeInterval : maybeUtcInterval)(interval);
  if (typeof interval.floor !== "function") throw new Error("invalid interval; missing floor method");
  if (typeof interval.offset !== "function") throw new Error("invalid interval; missing offset method");
  return interval;
}

// Like maybeInterval, but requires a range method too.
function maybeRangeInterval(interval, type) {
  interval = maybeInterval(interval, type);
  if (interval && typeof interval.range !== "function") throw new Error("invalid interval: missing range method");
  return interval;
}

// Like maybeRangeInterval, but requires a ceil method too.
function maybeNiceInterval(interval, type) {
  interval = maybeRangeInterval(interval, type);
  if (interval && typeof interval.ceil !== "function") throw new Error("invalid interval: missing ceil method");
  return interval;
}
function isTimeInterval(t) {
  return isInterval(t) && typeof t?.floor === "function" && t.floor() instanceof Date;
}
function isInterval(t) {
  return typeof t?.range === "function";
}

// This distinguishes between per-dimension options and a standalone value.
function maybeValue(value) {
  return value === undefined || isOptions(value) ? value : {
    value
  };
}

// Coerces the given channel values (if any) to numbers. This is useful when
// values will be interpolated into other code, such as an SVG transform, and
// where we don’t wish to allow unexpected behavior for weird input.
function numberChannel(source) {
  return source == null ? null : {
    transform: data => valueof(data, source, Float64Array),
    label: labelof(source)
  };
}
function isIterable(value) {
  return value && typeof value[Symbol.iterator] === "function";
}
function isTextual(values) {
  for (const value of values) {
    if (value == null) continue;
    return typeof value !== "object" || value instanceof Date;
  }
}
function isOrdinal(values) {
  for (const value of values) {
    if (value == null) continue;
    const type = typeof value;
    return type === "string" || type === "boolean";
  }
}
function isTemporal(values) {
  for (const value of values) {
    if (value == null) continue;
    return value instanceof Date;
  }
}

// Are these strings that might represent dates? This is stricter than ISO 8601
// because we want to ignore false positives on numbers; for example, the string
// "1192" is more likely to represent a number than a date even though it is
// valid ISO 8601 representing 1192-01-01.
function isTemporalString(values) {
  for (const value of values) {
    if (value == null) continue;
    return typeof value === "string" && isNaN(value) && parse(value);
  }
}

// Are these strings that might represent numbers? This is stricter than
// coercion because we want to ignore false positives on e.g. empty strings.
function isNumericString(values) {
  for (const value of values) {
    if (value == null) continue;
    if (typeof value !== "string") return false;
    if (!value.trim()) continue;
    return !isNaN(value);
  }
}
function isNumeric(values) {
  for (const value of values) {
    if (value == null) continue;
    return typeof value === "number";
  }
}

// Returns true if every non-null value in the specified iterable of values
// passes the specified predicate, and there is at least one non-null value;
// returns false if at least one non-null value does not pass the specified
// predicate; otherwise returns undefined (as if all values are null).
function isEvery(values, is) {
  let every;
  for (const value of values) {
    if (value == null) continue;
    if (!is(value)) return false;
    every = true;
  }
  return every;
}
const namedColors = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(",")); // prettier-ignore

// Returns true if value is a valid CSS color string. This is intentionally lax
// because the CSS color spec keeps growing, and we don’t need to parse these
// colors—we just need to disambiguate them from column names.
// https://www.w3.org/TR/SVG11/painting.html#SpecifyingPaint
// https://www.w3.org/TR/css-color-5/
function isColor(value) {
  if (typeof value !== "string") return false;
  value = value.toLowerCase().trim();
  return /^#[0-9a-f]{3,8}$/.test(value) ||
  // hex rgb, rgba, rrggbb, rrggbbaa
  /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(value) ||
  // <funciri>, CSS variable, color, etc.
  namedColors.has(value) // currentColor, red, etc.
  ;
}
function isOpacity(value) {
  return typeof value === "number" && (0 <= value && value <= 1 || isNaN(value));
}
function isNoneish(value) {
  return value == null || isNone(value);
}
function isNone(value) {
  return /^\s*none\s*$/i.test(value);
}
function isRound(value) {
  return /^\s*round\s*$/i.test(value);
}
function maybeAnchor$1(value, name) {
  return maybeKeyword(value, name, ["middle", "top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]);
}
function maybeFrameAnchor(value = "middle") {
  return maybeAnchor$1(value, "frameAnchor");
}

// Unlike {...defaults, ...options}, this ensures that any undefined (but
// present) properties in options inherit the given default value.
function inherit(options = {}, ...rest) {
  let o = options;
  for (const defaults of rest) {
    for (const key in defaults) {
      if (o[key] === undefined) {
        const value = defaults[key];
        if (o === options) o = {
          ...o,
          [key]: value
        };else o[key] = value;
      }
    }
  }
  return o;
}

// Given an iterable of named things (objects with a name property), returns a
// corresponding object with properties associated with the given name.
function named(things) {
  console.warn("named iterables are deprecated; please use an object instead");
  const names = new Set();
  return Object.fromEntries(Array.from(things, thing => {
    const {
      name
    } = thing;
    if (name == null) throw new Error("missing name");
    const key = `${name}`;
    if (key === "__proto__") throw new Error(`illegal name: ${key}`);
    if (names.has(key)) throw new Error(`duplicate name: ${key}`);
    names.add(key);
    return [name, thing];
  }));
}
function maybeNamed(things) {
  return isIterable(things) ? named(things) : things;
}

// TODO Accept other types of clips (paths, urls, x, y, other marks…)?
// https://github.com/observablehq/plot/issues/181
function maybeClip(clip) {
  if (clip === true) clip = "frame";else if (clip === false) clip = null;else if (clip != null) clip = keyword(clip, "clip", ["frame", "sphere"]);
  return clip;
}

// Positional scales have associated axes, and for ordinal data, a point or band
// scale is used instead of an ordinal scale.
const position = Symbol("position");

// Color scales default to the turbo interpolator for quantitative data, and to
// the Tableau10 scheme for ordinal data. Color scales may also have an
// associated legend.
const color = Symbol("color");

// Radius scales default to the sqrt type, have a default range of [0, 3], and a
// default domain from 0 to the median first quartile of associated channels.
const radius = Symbol("radius");

// Length scales default to the linear type, have a default range of [0, 12],
// and a default domain from 0 to the median median of associated channels.
const length = Symbol("length");

// Opacity scales have a default range of [0, 1], and a default domain from 0 to
// the maximum value of associated channels.
const opacity = Symbol("opacity");

// Symbol scales have a default range of categorical symbols.
const symbol = Symbol("symbol");

// There isn’t really a projection scale; this represents x and y for geometry.
// This is used to denote channels that should be projected.
const projection = Symbol("projection");

// TODO Rather than hard-coding the list of known scale names, collect the names
// and categories for each plot specification, so that custom marks can register
// custom scales.
const registry = new Map([["x", position], ["y", position], ["fx", position], ["fy", position], ["r", radius], ["color", color], ["opacity", opacity], ["symbol", symbol], ["length", length], ["projection", projection]]);
function isPosition(kind) {
  return kind === position || kind === projection;
}
function hasNumericRange(kind) {
  return kind === position || kind === radius || kind === length || kind === opacity;
}

const sqrt3 = Math.sqrt(3);
const sqrt4_3 = 2 / sqrt3;
const symbolHexagon = {
  draw(context, size) {
    const rx = Math.sqrt(size / Math.PI),
      ry = rx * sqrt4_3,
      hy = ry / 2;
    context.moveTo(0, ry);
    context.lineTo(rx, hy);
    context.lineTo(rx, -hy);
    context.lineTo(0, -ry);
    context.lineTo(-rx, -hy);
    context.lineTo(-rx, hy);
    context.closePath();
  }
};
const symbols = new Map([["asterisk", symbolAsterisk], ["circle", symbolCircle], ["cross", symbolCross], ["diamond", symbolDiamond], ["diamond2", symbolDiamond2], ["hexagon", symbolHexagon], ["plus", symbolPlus], ["square", symbolSquare], ["square2", symbolSquare2], ["star", symbolStar], ["times", symbolTimes], ["triangle", symbolTriangle], ["triangle2", symbolTriangle2], ["wye", symbolWye]]);
function isSymbolObject(value) {
  return value && typeof value.draw === "function";
}
function isSymbol(value) {
  if (isSymbolObject(value)) return true;
  if (typeof value !== "string") return false;
  return symbols.has(value.toLowerCase());
}
function maybeSymbol(symbol) {
  if (symbol == null || isSymbolObject(symbol)) return symbol;
  const value = symbols.get(`${symbol}`.toLowerCase());
  if (value) return value;
  throw new Error(`invalid symbol: ${symbol}`);
}

function basic({
  filter: f1,
  sort: s1,
  reverse: r1,
  transform: t1,
  initializer: i1,
  ...options
} = {}, transform) {
  // If both t1 and t2 are defined, returns a composite transform that first
  // applies t1 and then applies t2.
  if (t1 === undefined) {
    // explicit transform overrides filter, sort, and reverse
    if (f1 != null) t1 = filterTransform(f1);
    if (s1 != null && !isDomainSort(s1)) t1 = composeTransform(t1, sortTransform(s1));
    if (r1) t1 = composeTransform(t1, reverseTransform);
  }
  if (transform != null && i1 != null) throw new Error("transforms cannot be applied after initializers");
  return {
    ...options,
    ...((s1 === null || isDomainSort(s1)) && {
      sort: s1
    }),
    transform: composeTransform(t1, transform)
  };
}
function initializer({
  filter: f1,
  sort: s1,
  reverse: r1,
  initializer: i1,
  ...options
} = {}, initializer) {
  // If both i1 and i2 are defined, returns a composite initializer that first
  // applies i1 and then applies i2.
  if (i1 === undefined) {
    // explicit initializer overrides filter, sort, and reverse
    if (f1 != null) i1 = filterTransform(f1);
    if (s1 != null && !isDomainSort(s1)) i1 = composeInitializer(i1, sortTransform(s1));
    if (r1) i1 = composeInitializer(i1, reverseTransform);
  }
  return {
    ...options,
    ...((s1 === null || isDomainSort(s1)) && {
      sort: s1
    }),
    initializer: composeInitializer(i1, initializer)
  };
}
function composeTransform(t1, t2) {
  if (t1 == null) return t2 === null ? undefined : t2;
  if (t2 == null) return t1 === null ? undefined : t1;
  return function (data, facets, plotOptions) {
    ({
      data,
      facets
    } = t1.call(this, data, facets, plotOptions));
    return t2.call(this, arrayify(data), facets, plotOptions);
  };
}
function composeInitializer(i1, i2) {
  if (i1 == null) return i2 === null ? undefined : i2;
  if (i2 == null) return i1 === null ? undefined : i1;
  return function (data, facets, channels, ...args) {
    let c1, d1, f1, c2, d2, f2;
    ({
      data: d1 = data,
      facets: f1 = facets,
      channels: c1
    } = i1.call(this, data, facets, channels, ...args));
    ({
      data: d2 = d1,
      facets: f2 = f1,
      channels: c2
    } = i2.call(this, d1, f1, {
      ...channels,
      ...c1
    }, ...args));
    return {
      data: d2,
      facets: f2,
      channels: {
        ...c1,
        ...c2
      }
    };
  };
}
function filterTransform(value) {
  return (data, facets) => {
    const V = valueof(data, value);
    return {
      data,
      facets: facets.map(I => I.filter(i => V[i]))
    };
  };
}
function reverseTransform(data, facets) {
  return {
    data,
    facets: facets.map(I => I.slice().reverse())
  };
}
function sortTransform(value) {
  return (typeof value === "function" && value.length !== 1 ? sortData : sortValue)(value);
}
function sortData(compare) {
  return (data, facets) => {
    const compareData = (i, j) => compare(data[i], data[j]);
    return {
      data,
      facets: facets.map(I => I.slice().sort(compareData))
    };
  };
}
function sortValue(value) {
  let channel, order;
  ({
    channel,
    value,
    order
  } = {
    ...maybeValue(value)
  });
  const negate = channel?.startsWith("-");
  if (negate) channel = channel.slice(1);
  if (order === undefined) order = negate ? descendingDefined : ascendingDefined;
  if (typeof order !== "function") {
    switch (`${order}`.toLowerCase()) {
      case "ascending":
        order = ascendingDefined;
        break;
      case "descending":
        order = descendingDefined;
        break;
      default:
        throw new Error(`invalid order: ${order}`);
    }
  }
  return (data, facets, channels) => {
    let V;
    if (channel === undefined) {
      V = valueof(data, value);
    } else {
      if (channels === undefined) throw new Error("channel sort requires an initializer");
      V = channels[channel];
      if (!V) return {}; // ignore missing channel
      V = V.value;
    }
    const compareValue = (i, j) => order(V[i], V[j]);
    return {
      data,
      facets: facets.map(I => I.slice().sort(compareValue))
    };
  };
}

function hasOutput(outputs, ...names) {
  for (const {
    name
  } of outputs) {
    if (names.includes(name)) {
      return true;
    }
  }
  return false;
}
function maybeOutputs(outputs, inputs, asOutput = maybeOutput) {
  const entries = Object.entries(outputs);
  // Propagate standard mark channels by default.
  if (inputs.title != null && outputs.title === undefined) entries.push(["title", reduceTitle]);
  if (inputs.href != null && outputs.href === undefined) entries.push(["href", reduceFirst]);
  return entries.filter(([, reduce]) => reduce !== undefined).map(([name, reduce]) => reduce === null ? nullOutput(name) : asOutput(name, reduce, inputs));
}
function maybeOutput(name, reduce, inputs, asEvaluator = maybeEvaluator) {
  let scale; // optional per-channel scale override
  if (isObject(reduce) && "reduce" in reduce) scale = reduce.scale, reduce = reduce.reduce; // N.B. array.reduce
  const evaluator = asEvaluator(name, reduce, inputs);
  const [output, setOutput] = column(evaluator.label);
  let O;
  return {
    name,
    output: scale === undefined ? output : {
      value: output,
      scale
    },
    initialize(data) {
      evaluator.initialize(data);
      O = setOutput([]);
    },
    scope(scope, I) {
      evaluator.scope(scope, I);
    },
    reduce(I, extent) {
      O.push(evaluator.reduce(I, extent));
    }
  };
}
function nullOutput(name) {
  return {
    name,
    initialize() {},
    scope() {},
    reduce() {}
  };
}
function maybeEvaluator(name, reduce, inputs, asReduce = maybeReduce) {
  const input = maybeInput(name, inputs);
  const reducer = asReduce(reduce, input);
  let V, context;
  return {
    label: labelof(reducer === reduceCount ? null : input, reducer.label),
    initialize(data) {
      V = input === undefined ? data : valueof(data, input);
      if (reducer.scope === "data") {
        context = reducer.reduceIndex(range(data), V);
      }
    },
    scope(scope, I) {
      if (reducer.scope === scope) {
        context = reducer.reduceIndex(I, V);
      }
    },
    reduce(I, extent) {
      return reducer.scope == null ? reducer.reduceIndex(I, V, extent) : reducer.reduceIndex(I, V, context, extent);
    }
  };
}
function maybeGroup(I, X) {
  return X ? group(I, i => X[i]) : [[, I]];
}
function maybeReduce(reduce, value, fallback = invalidReduce) {
  if (reduce == null) return fallback(reduce);
  if (typeof reduce.reduceIndex === "function") return reduce;
  if (typeof reduce.reduce === "function" && isObject(reduce)) return reduceReduce(reduce); // N.B. array.reduce
  if (typeof reduce === "function") return reduceFunction(reduce);
  if (/^p\d{2}$/i.test(reduce)) return reduceAccessor(percentile(reduce));
  switch (`${reduce}`.toLowerCase()) {
    case "first":
      return reduceFirst;
    case "last":
      return reduceLast;
    case "identity":
      return reduceIdentity;
    case "count":
      return reduceCount;
    case "distinct":
      return reduceDistinct;
    case "sum":
      return value == null ? reduceCount : reduceSum;
    case "proportion":
      return reduceProportion(value, "data");
    case "proportion-facet":
      return reduceProportion(value, "facet");
    case "deviation":
      return reduceAccessor(deviation);
    case "min":
      return reduceAccessor(min$1);
    case "min-index":
      return reduceAccessor(minIndex);
    case "max":
      return reduceAccessor(max);
    case "max-index":
      return reduceAccessor(maxIndex);
    case "mean":
      return reduceMaybeTemporalAccessor(mean);
    case "median":
      return reduceMaybeTemporalAccessor(median);
    case "variance":
      return reduceAccessor(variance);
    case "mode":
      return reduceAccessor(mode);
  }
  return fallback(reduce);
}
function invalidReduce(reduce) {
  throw new Error(`invalid reduce: ${reduce}`);
}
function maybeSubgroup(outputs, inputs) {
  for (const name in inputs) {
    const value = inputs[name];
    if (value !== undefined && !outputs.some(o => o.name === name)) {
      return value;
    }
  }
}
function maybeSort(facets, sort, reverse) {
  if (sort) {
    const S = sort.output.transform();
    const compare = (i, j) => ascendingDefined(S[i], S[j]);
    facets.forEach(f => f.sort(compare));
  }
  if (reverse) {
    facets.forEach(f => f.reverse());
  }
}
function reduceReduce(reduce) {
  console.warn("deprecated reduce interface; implement reduceIndex instead.");
  return {
    ...reduce,
    reduceIndex: reduce.reduce.bind(reduce)
  };
}
function reduceFunction(f) {
  return {
    reduceIndex(I, X, extent) {
      return f(take(X, I), extent);
    }
  };
}
function reduceAccessor(f) {
  return {
    reduceIndex(I, X) {
      return f(I, i => X[i]);
    }
  };
}
function reduceMaybeTemporalAccessor(f) {
  return {
    reduceIndex(I, X) {
      const x = f(I, i => X[i]);
      return isTemporal(X) ? new Date(x) : x;
    }
  };
}
const reduceIdentity = {
  reduceIndex(I, X) {
    return take(X, I);
  }
};
const reduceFirst = {
  reduceIndex(I, X) {
    return X[I[0]];
  }
};
const reduceTitle = {
  reduceIndex(I, X) {
    const n = 5;
    const groups = sort(rollup(I, V => V.length, i => X[i]), second);
    const top = groups.slice(-n).reverse();
    if (top.length < groups.length) {
      const bottom = groups.slice(0, 1 - n);
      top[n - 1] = [`… ${bottom.length.toLocaleString("en-US")} more`, sum(bottom, second)];
    }
    return top.map(([key, value]) => `${key} (${value.toLocaleString("en-US")})`).join("\n");
  }
};
const reduceLast = {
  reduceIndex(I, X) {
    return X[I[I.length - 1]];
  }
};
const reduceCount = {
  label: "Frequency",
  reduceIndex(I) {
    return I.length;
  }
};
const reduceDistinct = {
  label: "Distinct",
  reduceIndex(I, X) {
    const s = new InternSet();
    for (const i of I) s.add(X[i]);
    return s.size;
  }
};
const reduceSum = reduceAccessor(sum);
function reduceProportion(value, scope) {
  return value == null ? {
    scope,
    label: "Frequency",
    reduceIndex: (I, V, basis = 1) => I.length / basis
  } : {
    scope,
    reduceIndex: (I, V, basis = 1) => sum(I, i => V[i]) / basis
  };
}
const reduceZ = {
  reduceIndex(I, X, {
    z
  }) {
    return z;
  }
};

function createChannel(data, {
  scale,
  type,
  value,
  filter,
  hint,
  label = labelof(value)
}, name) {
  if (hint === undefined && typeof value?.transform === "function") hint = value.hint;
  return inferChannelScale(name, {
    scale,
    type,
    value: valueof(data, value),
    label,
    filter,
    hint
  });
}
function createChannels(channels, data) {
  return Object.fromEntries(Object.entries(channels).map(([name, channel]) => [name, createChannel(data, channel, name)]));
}

// TODO Use Float64Array for scales with numeric ranges, e.g. position?
function valueObject(channels, scales) {
  const values = Object.fromEntries(Object.entries(channels).map(([name, {
    scale: scaleName,
    value
  }]) => {
    const scale = scaleName == null ? null : scales[scaleName];
    return [name, scale == null ? value : map(value, scale)];
  }));
  values.channels = channels; // expose channel state for advanced usage
  return values;
}

// If the channel uses the "auto" scale (or equivalently true), infer the scale
// from the channel name and the provided values. For color and symbol channels,
// no scale is applied if the values are literal; however for symbols, we must
// promote symbol names (e.g., "plus") to symbol implementations (symbolPlus).
// Note: mutates channel!
function inferChannelScale(name, channel) {
  const {
    scale,
    value
  } = channel;
  if (scale === true || scale === "auto") {
    switch (name) {
      case "fill":
      case "stroke":
      case "color":
        channel.scale = scale !== true && isEvery(value, isColor) ? null : "color";
        break;
      case "fillOpacity":
      case "strokeOpacity":
      case "opacity":
        channel.scale = scale !== true && isEvery(value, isOpacity) ? null : "opacity";
        break;
      case "symbol":
        if (scale !== true && isEvery(value, isSymbol)) {
          channel.scale = null;
          channel.value = map(value, maybeSymbol);
        } else {
          channel.scale = "symbol";
        }
        break;
      default:
        channel.scale = registry.has(name) ? name : null;
        break;
    }
  } else if (scale === false) {
    channel.scale = null;
  } else if (scale != null && !registry.has(scale)) {
    throw new Error(`unknown scale: ${scale}`);
  }
  return channel;
}

// Note: mutates channel.domain! This is set to a function so that it is lazily
// computed; i.e., if the scale’s domain is set explicitly, that takes priority
// over the sort option, and we don’t need to do additional work.
function channelDomain(data, facets, channels, facetChannels, options) {
  const {
    order: defaultOrder,
    reverse: defaultReverse,
    reduce: defaultReduce = true,
    limit: defaultLimit
  } = options;
  for (const x in options) {
    if (!registry.has(x)) continue; // ignore unknown scale keys (including generic options)
    let {
      value: y,
      order = defaultOrder,
      reverse = defaultReverse,
      reduce = defaultReduce,
      limit = defaultLimit
    } = maybeValue(options[x]); // prettier-ignore
    const negate = y?.startsWith("-");
    if (negate) y = y.slice(1);
    order = order === undefined ? negate !== (y === "width" || y === "height") ? descendingGroup : ascendingGroup : maybeOrder$1(order); // prettier-ignore
    if (reduce == null || reduce === false) continue; // disabled reducer
    const X = x === "fx" || x === "fy" ? reindexFacetChannel(facets, facetChannels[x]) : findScaleChannel(channels, x);
    if (!X) throw new Error(`missing channel for scale: ${x}`);
    const XV = X.value;
    const [lo = 0, hi = Infinity] = isIterable(limit) ? limit : limit < 0 ? [limit] : [0, limit];
    if (y == null) {
      X.domain = () => {
        let domain = Array.from(new InternSet(XV)); // remove any duplicates
        if (reverse) domain = domain.reverse();
        if (lo !== 0 || hi !== Infinity) domain = domain.slice(lo, hi);
        return domain;
      };
    } else {
      const YV = y === "data" ? data : y === "height" ? difference(channels, "y1", "y2") : y === "width" ? difference(channels, "x1", "x2") : values(channels, y, y === "y" ? "y2" : y === "x" ? "x2" : undefined);
      const reducer = maybeReduce(reduce === true ? "max" : reduce, YV);
      X.domain = () => {
        let domain = rollups(range(XV), I => reducer.reduceIndex(I, YV), i => XV[i]);
        if (order) domain.sort(order);
        if (reverse) domain.reverse();
        if (lo !== 0 || hi !== Infinity) domain = domain.slice(lo, hi);
        return domain.map(first);
      };
    }
  }
}
function findScaleChannel(channels, scale) {
  for (const name in channels) {
    const channel = channels[name];
    if (channel.scale === scale) return channel;
  }
}

// Facet channels are not affected by transforms; so, to compute the domain of a
// facet scale, we must first re-index the facet channel according to the
// transformed mark index. Note: mutates channel, but that should be safe here?
function reindexFacetChannel(facets, channel) {
  const originalFacets = facets.original;
  if (originalFacets === facets) return channel; // not transformed
  const V1 = channel.value;
  const V2 = channel.value = []; // mutates channel!
  for (let i = 0; i < originalFacets.length; ++i) {
    const vi = V1[originalFacets[i][0]];
    for (const j of facets[i]) V2[j] = vi;
  }
  return channel;
}
function difference(channels, k1, k2) {
  const X1 = values(channels, k1);
  const X2 = values(channels, k2);
  return map(X2, (x2, i) => Math.abs(x2 - X1[i]), Float64Array);
}
function values(channels, name, alias) {
  let channel = channels[name];
  if (!channel && alias !== undefined) channel = channels[alias];
  if (channel) return channel.value;
  throw new Error(`missing channel: ${name}`);
}
function maybeOrder$1(order) {
  if (order == null || typeof order === "function") return order;
  switch (`${order}`.toLowerCase()) {
    case "ascending":
      return ascendingGroup;
    case "descending":
      return descendingGroup;
  }
  throw new Error(`invalid order: ${order}`);
}
function ascendingGroup([ak, av], [bk, bv]) {
  return ascendingDefined(av, bv) || ascendingDefined(ak, bk);
}
function descendingGroup([ak, av], [bk, bv]) {
  return descendingDefined(av, bv) || ascendingDefined(ak, bk);
}
function getSource(channels, key) {
  let channel = channels[key];
  if (!channel) return;
  while (channel.source) channel = channel.source;
  return channel.source === null ? null : channel;
}

function createContext(options = {}) {
  const {
    document = typeof window !== "undefined" ? window.document : undefined,
    clip
  } = options;
  return {
    document,
    clip: maybeClip(clip)
  };
}
function create(name, {
  document
}) {
  return select(creator(name).call(document.documentElement));
}

let warnings = 0;
let lastMessage;
function consumeWarnings() {
  const w = warnings;
  warnings = 0;
  lastMessage = undefined;
  return w;
}
function warn(message) {
  if (message === lastMessage) return;
  lastMessage = message;
  console.warn(message);
  ++warnings;
}

const pi = Math.PI;
const tau = 2 * pi;
const defaultAspectRatio = 0.618;
function createProjection({
  projection,
  inset: globalInset = 0,
  insetTop = globalInset,
  insetRight = globalInset,
  insetBottom = globalInset,
  insetLeft = globalInset
} = {}, dimensions) {
  if (projection == null) return;
  if (typeof projection.stream === "function") return projection; // d3 projection
  let options;
  let domain;
  let clip = "frame";

  // If the projection was specified as an object with additional options,
  // extract those. The order of precedence for insetTop (and other insets) is:
  // projection.insetTop, projection.inset, (global) insetTop, (global) inset.
  // Any other options on this object will be passed through to the initializer.
  if (isObject(projection)) {
    let inset;
    ({
      type: projection,
      domain,
      inset,
      insetTop = inset !== undefined ? inset : insetTop,
      insetRight = inset !== undefined ? inset : insetRight,
      insetBottom = inset !== undefined ? inset : insetBottom,
      insetLeft = inset !== undefined ? inset : insetLeft,
      clip = clip,
      ...options
    } = projection);
    if (projection == null) return;
  }

  // For named projections, retrieve the corresponding projection initializer.
  if (typeof projection !== "function") ({
    type: projection
  } = namedProjection(projection));

  // Compute the frame dimensions and invoke the projection initializer.
  const {
    width,
    height,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  } = dimensions;
  const dx = width - marginLeft - marginRight - insetLeft - insetRight;
  const dy = height - marginTop - marginBottom - insetTop - insetBottom;
  projection = projection?.({
    width: dx,
    height: dy,
    clip,
    ...options
  });

  // The projection initializer might decide to not use a projection.
  if (projection == null) return;
  clip = maybePostClip(clip, marginLeft, marginTop, width - marginRight, height - marginBottom);

  // Translate the origin to the top-left corner, respecting margins and insets.
  let tx = marginLeft + insetLeft;
  let ty = marginTop + insetTop;
  let transform;

  // If a domain is specified, fit the projection to the frame.
  if (domain != null) {
    const [[x0, y0], [x1, y1]] = geoPath(projection).bounds(domain);
    const k = Math.min(dx / (x1 - x0), dy / (y1 - y0));
    if (k > 0) {
      tx -= (k * (x0 + x1) - dx) / 2;
      ty -= (k * (y0 + y1) - dy) / 2;
      transform = geoTransform({
        point(x, y) {
          this.stream.point(x * k + tx, y * k + ty);
        }
      });
    } else {
      warn(`Warning: the projection could not be fit to the specified domain; using the default scale.`);
    }
  }
  transform ??= tx === 0 && ty === 0 ? identity() : geoTransform({
    point(x, y) {
      this.stream.point(x + tx, y + ty);
    }
  });
  return {
    stream: s => projection.stream(transform.stream(clip(s)))
  };
}
function namedProjection(projection) {
  switch (`${projection}`.toLowerCase()) {
    case "albers-usa":
      return scaleProjection(geoAlbersUsa, 0.7463, 0.4673);
    case "albers":
      return conicProjection(geoAlbers, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return scaleProjection(geoAzimuthalEqualArea, 4, 4);
    case "azimuthal-equidistant":
      return scaleProjection(geoAzimuthalEquidistant, tau, tau);
    case "conic-conformal":
      return conicProjection(geoConicConformal, tau, tau);
    case "conic-equal-area":
      return conicProjection(geoConicEqualArea, 6.1702, 2.9781);
    case "conic-equidistant":
      return conicProjection(geoConicEquidistant, 7.312, 3.6282);
    case "equal-earth":
      return scaleProjection(geoEqualEarth, 5.4133, 2.6347);
    case "equirectangular":
      return scaleProjection(geoEquirectangular, tau, pi);
    case "gnomonic":
      return scaleProjection(geoGnomonic, 3.4641, 3.4641);
    case "identity":
      return {
        type: identity
      };
    case "reflect-y":
      return {
        type: reflectY
      };
    case "mercator":
      return scaleProjection(geoMercator, tau, tau);
    case "orthographic":
      return scaleProjection(geoOrthographic, 2, 2);
    case "stereographic":
      return scaleProjection(geoStereographic, 2, 2);
    case "transverse-mercator":
      return scaleProjection(geoTransverseMercator, tau, tau);
    default:
      throw new Error(`unknown projection type: ${projection}`);
  }
}
function maybePostClip(clip, x1, y1, x2, y2) {
  if (clip === false || clip == null || typeof clip === "number") return s => s;
  if (clip === true) clip = "frame";
  switch (`${clip}`.toLowerCase()) {
    case "frame":
      return clipRectangle(x1, y1, x2, y2);
    default:
      throw new Error(`unknown projection clip type: ${clip}`);
  }
}
function scaleProjection(createProjection, kx, ky) {
  return {
    type: ({
      width,
      height,
      rotate,
      precision = 0.15,
      clip
    }) => {
      const projection = createProjection();
      if (precision != null) projection.precision?.(precision);
      if (rotate != null) projection.rotate?.(rotate);
      if (typeof clip === "number") projection.clipAngle?.(clip);
      projection.scale(Math.min(width / kx, height / ky));
      projection.translate([width / 2, height / 2]);
      return projection;
    },
    aspectRatio: ky / kx
  };
}
function conicProjection(createProjection, kx, ky) {
  const {
    type,
    aspectRatio
  } = scaleProjection(createProjection, kx, ky);
  return {
    type: options => {
      const {
        parallels,
        domain,
        width,
        height
      } = options;
      const projection = type(options);
      if (parallels != null) {
        projection.parallels(parallels);
        if (domain === undefined) {
          projection.fitSize([width, height], {
            type: "Sphere"
          });
        }
      }
      return projection;
    },
    aspectRatio
  };
}
const identity = constant({
  stream: stream => stream
});
const reflectY = constant(geoTransform({
  point(x, y) {
    this.stream.point(x, -y);
  }
}));

// Applies a point-wise projection to the given paired x and y channels.
// Note: mutates values!
function project(cx, cy, values, projection) {
  const x = values[cx];
  const y = values[cy];
  const n = x.length;
  const X = values[cx] = new Float64Array(n).fill(NaN);
  const Y = values[cy] = new Float64Array(n).fill(NaN);
  let i;
  const stream = projection.stream({
    point(x, y) {
      X[i] = x;
      Y[i] = y;
    }
  });
  for (i = 0; i < n; ++i) {
    stream.point(x[i], y[i]);
  }
}

// Returns true if a projection was specified. This should match the logic of
// createProjection above, and is called before we construct the projection.
// (Though note that we ignore the edge case where the projection initializer
// may return null.)
function hasProjection({
  projection
} = {}) {
  if (projection == null) return false;
  if (typeof projection.stream === "function") return true;
  if (isObject(projection)) projection = projection.type;
  return projection != null;
}

// When a named projection is specified, we can use its natural aspect ratio to
// determine a good value for the projection’s height based on the desired
// width. When we don’t have a way to know, the golden ratio is our best guess.
// Due to a circular dependency (we need to know the height before we can
// construct the projection), we have to test the raw projection option rather
// than the materialized projection; therefore we must be extremely careful that
// the logic of this function exactly matches createProjection above!
function projectionAspectRatio(projection) {
  if (typeof projection?.stream === "function") return defaultAspectRatio;
  if (isObject(projection)) projection = projection.type;
  if (projection == null) return;
  if (typeof projection !== "function") {
    const {
      aspectRatio
    } = namedProjection(projection);
    if (aspectRatio) return aspectRatio;
  }
  return defaultAspectRatio;
}
function getGeometryChannels(channel) {
  const X = [];
  const Y = [];
  const x = {
    scale: "x",
    value: X
  };
  const y = {
    scale: "y",
    value: Y
  };
  const sink = {
    point(x, y) {
      X.push(x);
      Y.push(y);
    },
    lineStart() {},
    lineEnd() {},
    polygonStart() {},
    polygonEnd() {},
    sphere() {}
  };
  for (const object of channel.value) geoStream(object, sink);
  return [x, y];
}

const categoricalSchemes = new Map([["accent", schemeAccent], ["category10", schemeCategory10], ["dark2", schemeDark2], ["observable10", schemeObservable10], ["paired", schemePaired], ["pastel1", schemePastel1], ["pastel2", schemePastel2], ["set1", schemeSet1], ["set2", schemeSet2], ["set3", schemeSet3], ["tableau10", schemeTableau10]]);
function isCategoricalScheme(scheme) {
  return scheme != null && categoricalSchemes.has(`${scheme}`.toLowerCase());
}
const ordinalSchemes = new Map([...categoricalSchemes,
// diverging
["brbg", scheme11(scheme$q, interpolateBrBG)], ["prgn", scheme11(scheme$p, interpolatePRGn)], ["piyg", scheme11(scheme$o, interpolatePiYG)], ["puor", scheme11(scheme$n, interpolatePuOr)], ["rdbu", scheme11(scheme$m, interpolateRdBu)], ["rdgy", scheme11(scheme$l, interpolateRdGy)], ["rdylbu", scheme11(scheme$k, interpolateRdYlBu)], ["rdylgn", scheme11(scheme$j, interpolateRdYlGn)], ["spectral", scheme11(scheme$i, interpolateSpectral)],
// reversed diverging (for temperature data)
["burd", scheme11r(scheme$m, interpolateRdBu)], ["buylrd", scheme11r(scheme$k, interpolateRdYlBu)],
// sequential (single-hue)
["blues", scheme9(scheme$5, interpolateBlues)], ["greens", scheme9(scheme$4, interpolateGreens)], ["greys", scheme9(scheme$3, interpolateGreys)], ["oranges", scheme9(scheme, interpolateOranges)], ["purples", scheme9(scheme$2, interpolatePurples)], ["reds", scheme9(scheme$1, interpolateReds)],
// sequential (multi-hue)
["turbo", schemei(interpolateTurbo)], ["viridis", schemei(interpolateViridis)], ["magma", schemei(magma)], ["inferno", schemei(inferno)], ["plasma", schemei(plasma)], ["cividis", schemei(interpolateCividis)], ["cubehelix", schemei(interpolateCubehelixDefault)], ["warm", schemei(warm)], ["cool", schemei(cool)], ["bugn", scheme9(scheme$h, interpolateBuGn)], ["bupu", scheme9(scheme$g, interpolateBuPu)], ["gnbu", scheme9(scheme$f, interpolateGnBu)], ["orrd", scheme9(scheme$e, interpolateOrRd)], ["pubu", scheme9(scheme$c, interpolatePuBu)], ["pubugn", scheme9(scheme$d, interpolatePuBuGn)], ["purd", scheme9(scheme$b, interpolatePuRd)], ["rdpu", scheme9(scheme$a, interpolateRdPu)], ["ylgn", scheme9(scheme$8, interpolateYlGn)], ["ylgnbu", scheme9(scheme$9, interpolateYlGnBu)], ["ylorbr", scheme9(scheme$7, interpolateYlOrBr)], ["ylorrd", scheme9(scheme$6, interpolateYlOrRd)],
// cyclical
["rainbow", schemeicyclical(interpolateRainbow)], ["sinebow", schemeicyclical(interpolateSinebow)]]);
function scheme9(scheme, interpolate) {
  return ({
    length: n
  }) => {
    if (n === 1) return [scheme[3][1]]; // favor midpoint
    if (n === 2) return [scheme[3][1], scheme[3][2]]; // favor darker
    n = Math.max(3, Math.floor(n));
    return n > 9 ? quantize(interpolate, n) : scheme[n];
  };
}
function scheme11(scheme, interpolate) {
  return ({
    length: n
  }) => {
    if (n === 2) return [scheme[3][0], scheme[3][2]]; // favor diverging extrema
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize(interpolate, n) : scheme[n];
  };
}
function scheme11r(scheme, interpolate) {
  return ({
    length: n
  }) => {
    if (n === 2) return [scheme[3][2], scheme[3][0]]; // favor diverging extrema
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize(t => interpolate(1 - t), n) : scheme[n].slice().reverse();
  };
}
function schemei(interpolate) {
  return ({
    length: n
  }) => quantize(interpolate, Math.max(2, Math.floor(n)));
}
function schemeicyclical(interpolate) {
  return ({
    length: n
  }) => quantize(interpolate, Math.floor(n) + 1).slice(0, -1);
}
function ordinalScheme(scheme) {
  const s = `${scheme}`.toLowerCase();
  if (!ordinalSchemes.has(s)) throw new Error(`unknown ordinal scheme: ${s}`);
  return ordinalSchemes.get(s);
}
function ordinalRange(scheme, length) {
  const s = ordinalScheme(scheme);
  const r = typeof s === "function" ? s({
    length
  }) : s;
  return r.length !== length ? r.slice(0, length) : r;
}

// If the specified domain contains only booleans (ignoring null and undefined),
// returns a corresponding range where false is mapped to the low color and true
// is mapped to the high color of the specified scheme.
function maybeBooleanRange(domain, scheme = "greys") {
  const range = new Set();
  const [f, t] = ordinalRange(scheme, 2);
  for (const value of domain) {
    if (value == null) continue;
    if (value === true) range.add(t);else if (value === false) range.add(f);else return;
  }
  return [...range];
}
const quantitativeSchemes = new Map([
// diverging
["brbg", interpolateBrBG], ["prgn", interpolatePRGn], ["piyg", interpolatePiYG], ["puor", interpolatePuOr], ["rdbu", interpolateRdBu], ["rdgy", interpolateRdGy], ["rdylbu", interpolateRdYlBu], ["rdylgn", interpolateRdYlGn], ["spectral", interpolateSpectral],
// reversed diverging (for temperature data)
["burd", t => interpolateRdBu(1 - t)], ["buylrd", t => interpolateRdYlBu(1 - t)],
// sequential (single-hue)
["blues", interpolateBlues], ["greens", interpolateGreens], ["greys", interpolateGreys], ["purples", interpolatePurples], ["reds", interpolateReds], ["oranges", interpolateOranges],
// sequential (multi-hue)
["turbo", interpolateTurbo], ["viridis", interpolateViridis], ["magma", magma], ["inferno", inferno], ["plasma", plasma], ["cividis", interpolateCividis], ["cubehelix", interpolateCubehelixDefault], ["warm", warm], ["cool", cool], ["bugn", interpolateBuGn], ["bupu", interpolateBuPu], ["gnbu", interpolateGnBu], ["orrd", interpolateOrRd], ["pubugn", interpolatePuBuGn], ["pubu", interpolatePuBu], ["purd", interpolatePuRd], ["rdpu", interpolateRdPu], ["ylgnbu", interpolateYlGnBu], ["ylgn", interpolateYlGn], ["ylorbr", interpolateYlOrBr], ["ylorrd", interpolateYlOrRd],
// cyclical
["rainbow", interpolateRainbow], ["sinebow", interpolateSinebow]]);
function quantitativeScheme(scheme) {
  const s = `${scheme}`.toLowerCase();
  if (!quantitativeSchemes.has(s)) throw new Error(`unknown quantitative scheme: ${s}`);
  return quantitativeSchemes.get(s);
}
const divergingSchemes = new Set(["brbg", "prgn", "piyg", "puor", "rdbu", "rdgy", "rdylbu", "rdylgn", "spectral", "burd", "buylrd"]);
function isDivergingScheme(scheme) {
  return scheme != null && divergingSchemes.has(`${scheme}`.toLowerCase());
}

const flip = i => t => i(1 - t);
const unit = [0, 1];
const interpolators = new Map([
// numbers
["number", interpolateNumber],
// color spaces
["rgb", interpolateRgb], ["hsl", interpolateHsl], ["hcl", interpolateHcl], ["lab", lab]]);
function maybeInterpolator(interpolate) {
  const i = `${interpolate}`.toLowerCase();
  if (!interpolators.has(i)) throw new Error(`unknown interpolator: ${i}`);
  return interpolators.get(i);
}
function createScaleQ(key, scale, channels, {
  type,
  nice,
  clamp,
  zero,
  domain = inferAutoDomain(key, channels),
  unknown,
  round,
  scheme,
  interval,
  range = registry.get(key) === radius ? inferRadialRange(channels, domain) : registry.get(key) === length ? inferLengthRange(channels, domain) : registry.get(key) === opacity ? unit : undefined,
  interpolate = registry.get(key) === color ? scheme == null && range !== undefined ? interpolateRgb : quantitativeScheme(scheme !== undefined ? scheme : type === "cyclical" ? "rainbow" : "turbo") : round ? interpolateRound : interpolateNumber,
  reverse: reverse$1
}) {
  interval = maybeRangeInterval(interval, type);
  if (type === "cyclical" || type === "sequential") type = "linear"; // shorthand for color schemes
  if (typeof interpolate !== "function") interpolate = maybeInterpolator(interpolate); // named interpolator
  reverse$1 = !!reverse$1;

  // If an explicit range is specified, and it has a different length than the
  // domain, then redistribute the range using a piecewise interpolator.
  if (range !== undefined) {
    const n = (domain = arrayify(domain)).length;
    const m = (range = arrayify(range)).length;
    if (n !== m) {
      if (interpolate.length === 1) throw new Error("invalid piecewise interpolator"); // e.g., turbo
      interpolate = piecewise(interpolate, range);
      range = undefined;
    }
  }

  // Disambiguate between a two-argument interpolator that is used in
  // conjunction with the range, and a one-argument “fixed” interpolator on the
  // [0, 1] interval as with the RdBu color scheme.
  if (interpolate.length === 1) {
    if (reverse$1) {
      interpolate = flip(interpolate);
      reverse$1 = false;
    }
    if (range === undefined) {
      range = Float64Array.from(domain, (_, i) => i / (domain.length - 1));
      if (range.length === 2) range = unit; // optimize common case of [0, 1]
    }
    scale.interpolate((range === unit ? constant : interpolatePiecewise)(interpolate));
  } else {
    scale.interpolate(interpolate);
  }

  // If a zero option is specified, we assume that the domain is numeric, and we
  // want to ensure that the domain crosses zero. However, note that the domain
  // may be reversed (descending) so we shouldn’t assume that the first value is
  // smaller than the last; and also it’s possible that the domain has more than
  // two values for a “poly” scale. And lastly be careful not to mutate input!
  if (zero) {
    const [min, max] = extent$1(domain);
    if (min > 0 || max < 0) {
      domain = slice(domain);
      if (orderof(domain) !== Math.sign(min)) domain[domain.length - 1] = 0; // [2, 1] or [-2, -1]
      else domain[0] = 0; // [1, 2] or [-1, -2]
    }
  }
  if (reverse$1) domain = reverse(domain);
  scale.domain(domain).unknown(unknown);
  if (nice) scale.nice(maybeNice(nice, type)), domain = scale.domain();
  if (range !== undefined) scale.range(range);
  if (clamp) scale.clamp(clamp);
  return {
    type,
    domain,
    range,
    scale,
    interpolate,
    interval
  };
}
function maybeNice(nice, type) {
  return nice === true ? undefined : typeof nice === "number" ? nice : maybeNiceInterval(nice, type);
}
function createScaleLinear(key, channels, options) {
  return createScaleQ(key, linear(), channels, options);
}
function createScaleSqrt(key, channels, options) {
  return createScalePow(key, channels, {
    ...options,
    exponent: 0.5
  });
}
function createScalePow(key, channels, {
  exponent = 1,
  ...options
}) {
  return createScaleQ(key, pow().exponent(exponent), channels, {
    ...options,
    type: "pow"
  });
}
function createScaleLog(key, channels, {
  base = 10,
  domain = inferLogDomain(channels),
  ...options
}) {
  return createScaleQ(key, log().base(base), channels, {
    ...options,
    domain
  });
}
function createScaleSymlog(key, channels, {
  constant = 1,
  ...options
}) {
  return createScaleQ(key, symlog().constant(constant), channels, options);
}
function createScaleQuantile(key, channels, {
  range,
  quantiles = range === undefined ? 5 : (range = [...range]).length,
  // deprecated; use n instead
  n = quantiles,
  scheme = "rdylbu",
  domain = inferQuantileDomain(channels),
  unknown,
  interpolate,
  reverse
}) {
  if (range === undefined) {
    range = interpolate !== undefined ? quantize(interpolate, n) : registry.get(key) === color ? ordinalRange(scheme, n) : undefined;
  }
  if (domain.length > 0) {
    domain = quantile(domain, range === undefined ? {
      length: n
    } : range).quantiles();
  }
  return createScaleThreshold(key, channels, {
    domain,
    range,
    reverse,
    unknown
  });
}
function createScaleQuantize(key, channels, {
  range,
  n = range === undefined ? 5 : (range = [...range]).length,
  scheme = "rdylbu",
  domain = inferAutoDomain(key, channels),
  unknown,
  interpolate,
  reverse
}) {
  const [min, max] = extent$1(domain);
  let thresholds;
  if (range === undefined) {
    thresholds = ticks(min, max, n); // approximate number of nice, round thresholds
    if (thresholds[0] <= min) thresholds.splice(0, 1); // drop exact lower bound
    if (thresholds[thresholds.length - 1] >= max) thresholds.pop(); // drop exact upper bound
    n = thresholds.length + 1;
    range = interpolate !== undefined ? quantize(interpolate, n) : registry.get(key) === color ? ordinalRange(scheme, n) : undefined;
  } else {
    thresholds = quantize(interpolateNumber(min, max), n + 1).slice(1, -1); // exactly n - 1 thresholds to match range
    if (min instanceof Date) thresholds = thresholds.map(x => new Date(x)); // preserve date types
  }
  if (orderof(arrayify(domain)) < 0) thresholds.reverse(); // preserve descending domain
  return createScaleThreshold(key, channels, {
    domain: thresholds,
    range,
    reverse,
    unknown
  });
}
function createScaleThreshold(key, channels, {
  domain = [0],
  // explicit thresholds in ascending order
  unknown,
  scheme = "rdylbu",
  interpolate,
  range = interpolate !== undefined ? quantize(interpolate, domain.length + 1) : registry.get(key) === color ? ordinalRange(scheme, domain.length + 1) : undefined,
  reverse: reverse$1
}) {
  domain = arrayify(domain);
  const sign = orderof(domain); // preserve descending domain
  if (!isNaN(sign) && !isOrdered(domain, sign)) throw new Error(`the ${key} scale has a non-monotonic domain`);
  if (reverse$1) range = reverse(range); // domain ascending, so reverse range
  return {
    type: "threshold",
    scale: threshold(sign < 0 ? reverse(domain) : domain, range === undefined ? [] : range).unknown(unknown),
    domain,
    range
  };
}
function isOrdered(domain, sign) {
  for (let i = 1, n = domain.length, d = domain[0]; i < n; ++i) {
    const s = descending(d, d = domain[i]);
    if (s !== 0 && s !== sign) return false;
  }
  return true;
}

// For non-numeric identity scales such as color and symbol, we can’t use D3’s
// identity scale because it coerces to number; and we can’t compute the domain
// (and equivalently range) since we can’t know whether the values are
// continuous or discrete.
function createScaleIdentity(key) {
  return {
    type: "identity",
    scale: hasNumericRange(registry.get(key)) ? identity$2() : d => d
  };
}
function inferDomain$1(channels, f = finite) {
  return channels.length ? [min$1(channels, ({
    value
  }) => value === undefined ? value : min$1(value, f)), max(channels, ({
    value
  }) => value === undefined ? value : max(value, f))] : [0, 1];
}
function inferAutoDomain(key, channels) {
  const type = registry.get(key);
  return (type === radius || type === opacity || type === length ? inferZeroDomain : inferDomain$1)(channels);
}
function inferZeroDomain(channels) {
  return [0, channels.length ? max(channels, ({
    value
  }) => value === undefined ? value : max(value, finite)) : 1];
}

// We don’t want the upper bound of the radial domain to be zero, as this would
// be degenerate, so we ignore nonpositive values. We also don’t want the
// maximum default radius to exceed 30px.
function inferRadialRange(channels, domain) {
  const hint = channels.find(({
    radius
  }) => radius !== undefined);
  if (hint !== undefined) return [0, hint.radius]; // a natural maximum radius, e.g. hexbins
  const h25 = quantile$1(channels, 0.5, ({
    value
  }) => value === undefined ? NaN : quantile$1(value, 0.25, positive));
  const range = domain.map(d => 3 * Math.sqrt(d / h25));
  const k = 30 / max(range);
  return k < 1 ? range.map(r => r * k) : range;
}

// We want a length scale’s domain to go from zero to a positive value, and to
// treat negative lengths if any as inverted vectors of equivalent magnitude. We
// also don’t want the maximum default length to exceed 60px.
function inferLengthRange(channels, domain) {
  const h50 = median(channels, ({
    value
  }) => value === undefined ? NaN : median(value, Math.abs));
  const range = domain.map(d => 12 * d / h50);
  const k = 60 / max(range);
  return k < 1 ? range.map(r => r * k) : range;
}
function inferLogDomain(channels) {
  for (const {
    value
  } of channels) {
    if (value !== undefined) {
      for (let v of value) {
        if (v > 0) return inferDomain$1(channels, positive);
        if (v < 0) return inferDomain$1(channels, negative);
      }
    }
  }
  return [1, 10];
}
function inferQuantileDomain(channels) {
  const domain = [];
  for (const {
    value
  } of channels) {
    if (value === undefined) continue;
    for (const v of value) domain.push(v);
  }
  return domain;
}
function interpolatePiecewise(interpolate) {
  return (i, j) => t => interpolate(i + t * (j - i));
}

function createScaleD(key, scale, transform, channels, {
  type,
  nice,
  clamp,
  domain = inferDomain$1(channels),
  unknown,
  pivot = 0,
  scheme,
  range,
  symmetric = true,
  interpolate = registry.get(key) === color ? scheme == null && range !== undefined ? interpolateRgb : quantitativeScheme(scheme !== undefined ? scheme : "rdbu") : interpolateNumber,
  reverse
}) {
  pivot = +pivot;
  domain = arrayify(domain);
  let [min, max] = domain;
  if (domain.length > 2) warn(`Warning: the diverging ${key} scale domain contains extra elements.`);
  if (descending(min, max) < 0) [min, max] = [max, min], reverse = !reverse;
  min = Math.min(min, pivot);
  max = Math.max(max, pivot);

  // Sometimes interpolate is a named interpolator, such as "lab" for Lab color
  // space. Other times interpolate is a function that takes two arguments and
  // is used in conjunction with the range. And other times the interpolate
  // function is a “fixed” interpolator on the [0, 1] interval, as when a
  // color scheme such as interpolateRdBu is used.
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }

  // If an explicit range is specified, promote it to a piecewise interpolator.
  if (range !== undefined) {
    interpolate = interpolate.length === 1 ? interpolatePiecewise(interpolate)(...range) : piecewise(interpolate, range);
  }

  // Reverse before normalization.
  if (reverse) interpolate = flip(interpolate);

  // Normalize the interpolator for symmetric difference around the pivot.
  if (symmetric) {
    const mid = transform.apply(pivot);
    const mindelta = mid - transform.apply(min);
    const maxdelta = transform.apply(max) - mid;
    if (mindelta < maxdelta) min = transform.invert(mid - maxdelta);else if (mindelta > maxdelta) max = transform.invert(mid + mindelta);
  }
  scale.domain([min, pivot, max]).unknown(unknown).interpolator(interpolate);
  if (clamp) scale.clamp(clamp);
  if (nice) scale.nice(nice);
  return {
    type,
    domain: [min, max],
    pivot,
    interpolate,
    scale
  };
}
function createScaleDiverging(key, channels, options) {
  return createScaleD(key, diverging(), transformIdentity, channels, options);
}
function createScaleDivergingSqrt(key, channels, options) {
  return createScaleDivergingPow(key, channels, {
    ...options,
    exponent: 0.5
  });
}
function createScaleDivergingPow(key, channels, {
  exponent = 1,
  ...options
}) {
  return createScaleD(key, divergingPow().exponent(exponent = +exponent), transformPow(exponent), channels, {
    ...options,
    type: "diverging-pow"
  });
}
function createScaleDivergingLog(key, channels, {
  base = 10,
  pivot = 1,
  domain = inferDomain$1(channels, pivot < 0 ? negative : positive),
  ...options
}) {
  return createScaleD(key, divergingLog().base(base = +base), transformLog, channels, {
    domain,
    pivot,
    ...options
  });
}
function createScaleDivergingSymlog(key, channels, {
  constant = 1,
  ...options
}) {
  return createScaleD(key, divergingSymlog().constant(constant = +constant), transformSymlog(constant), channels, options);
}
const transformIdentity = {
  apply(x) {
    return x;
  },
  invert(x) {
    return x;
  }
};
const transformLog = {
  apply: Math.log,
  invert: Math.exp
};
const transformSqrt = {
  apply(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
  },
  invert(x) {
    return Math.sign(x) * (x * x);
  }
};
function transformPow(exponent) {
  return exponent === 0.5 ? transformSqrt : {
    apply(x) {
      return Math.sign(x) * Math.pow(Math.abs(x), exponent);
    },
    invert(x) {
      return Math.sign(x) * Math.pow(Math.abs(x), 1 / exponent);
    }
  };
}
function transformSymlog(constant) {
  return {
    apply(x) {
      return Math.sign(x) * Math.log1p(Math.abs(x / constant));
    },
    invert(x) {
      return Math.sign(x) * Math.expm1(Math.abs(x)) * constant;
    }
  };
}

function createScaleT(key, scale, channels, options) {
  return createScaleQ(key, scale, channels, options);
}
function createScaleTime(key, channels, options) {
  return createScaleT(key, time(), channels, options);
}
function createScaleUtc(key, channels, options) {
  return createScaleT(key, utcTime(), channels, options);
}

// This denotes an implicitly ordinal color scale: the scale type was not set,
// but the associated values are strings or booleans. If the associated defined
// values are entirely boolean, the range will default to greys. You can opt out
// of this by setting the type explicitly.
const ordinalImplicit = Symbol("ordinal");
function createScaleO(key, scale, channels, {
  type,
  interval,
  domain,
  range,
  reverse: reverse$1,
  hint
}) {
  interval = maybeRangeInterval(interval, type);
  if (domain === undefined) domain = inferDomain(channels, interval, key);
  if (type === "categorical" || type === ordinalImplicit) type = "ordinal"; // shorthand for color schemes
  if (reverse$1) domain = reverse(domain);
  domain = scale.domain(domain).domain(); // deduplicate
  if (range !== undefined) {
    // If the range is specified as a function, pass it the domain.
    if (typeof range === "function") range = range(domain);
    scale.range(range);
  }
  return {
    type,
    domain,
    range,
    scale,
    hint,
    interval
  };
}
function createScaleOrdinal(key, channels, {
  type,
  interval,
  domain,
  range,
  scheme,
  unknown,
  ...options
}) {
  interval = maybeRangeInterval(interval, type);
  if (domain === undefined) domain = inferDomain(channels, interval, key);
  let hint;
  if (registry.get(key) === symbol) {
    hint = inferSymbolHint(channels);
    range = range === undefined ? inferSymbolRange(hint) : map(range, maybeSymbol);
  } else if (registry.get(key) === color) {
    if (range === undefined && (type === "ordinal" || type === ordinalImplicit)) {
      range = maybeBooleanRange(domain, scheme);
      if (range !== undefined) scheme = undefined; // Don’t re-apply scheme.
    }
    if (scheme === undefined && range === undefined) {
      scheme = type === "ordinal" ? "turbo" : "observable10";
    }
    if (scheme !== undefined) {
      if (range !== undefined) {
        const interpolate = quantitativeScheme(scheme);
        const t0 = range[0],
          d = range[1] - range[0];
        range = ({
          length: n
        }) => quantize(t => interpolate(t0 + d * t), n);
      } else {
        range = ordinalScheme(scheme);
      }
    }
  }
  if (unknown === implicit) {
    throw new Error(`implicit unknown on ${key} scale is not supported`);
  }
  return createScaleO(key, ordinal().unknown(unknown), channels, {
    ...options,
    type,
    domain,
    range,
    hint
  });
}
function createScalePoint(key, channels, {
  align = 0.5,
  padding = 0.5,
  ...options
}) {
  return maybeRound(point$4().align(align).padding(padding), channels, options, key);
}
function createScaleBand(key, channels, {
  align = 0.5,
  padding = 0.1,
  paddingInner = padding,
  paddingOuter = key === "fx" || key === "fy" ? 0 : padding,
  ...options
}) {
  return maybeRound(band().align(align).paddingInner(paddingInner).paddingOuter(paddingOuter), channels, options, key);
}
function maybeRound(scale, channels, options, key) {
  let {
    round
  } = options;
  if (round !== undefined) scale.round(round = !!round);
  scale = createScaleO(key, scale, channels, options);
  scale.round = round; // preserve for autoScaleRound
  return scale;
}
function inferDomain(channels, interval, key) {
  const values = new InternSet();
  for (const {
    value,
    domain
  } of channels) {
    if (domain !== undefined) return domain(); // see channelDomain
    if (value === undefined) continue;
    for (const v of value) values.add(v);
  }
  if (interval !== undefined) {
    const [min, max] = extent$1(values).map(interval.floor, interval);
    return interval.range(min, interval.offset(max));
  }
  if (values.size > 10e3 && registry.get(key) === position) {
    throw new Error(`implicit ordinal domain of ${key} scale has more than 10,000 values`);
  }
  return sort(values, ascendingDefined);
}

// If all channels provide a consistent hint, propagate it to the scale.
function inferHint(channels, key) {
  let value;
  for (const {
    hint
  } of channels) {
    const candidate = hint?.[key];
    if (candidate === undefined) continue; // no hint here
    if (value === undefined) value = candidate; // first hint
    else if (value !== candidate) return; // inconsistent hint
  }
  return value;
}
function inferSymbolHint(channels) {
  return {
    fill: inferHint(channels, "fill"),
    stroke: inferHint(channels, "stroke")
  };
}
function inferSymbolRange(hint) {
  return isNoneish(hint.fill) ? symbolsStroke : symbolsFill;
}

function createScales(channelsByScale, {
  label: globalLabel,
  inset: globalInset = 0,
  insetTop: globalInsetTop = globalInset,
  insetRight: globalInsetRight = globalInset,
  insetBottom: globalInsetBottom = globalInset,
  insetLeft: globalInsetLeft = globalInset,
  round,
  nice,
  clamp,
  zero,
  align,
  padding,
  projection,
  facet: {
    label: facetLabel = globalLabel
  } = {},
  ...options
} = {}) {
  const scales = {};
  for (const [key, channels] of channelsByScale) {
    const scaleOptions = options[key];
    const scale = createScale(key, channels, {
      round: registry.get(key) === position ? round : undefined,
      // only for position
      nice,
      clamp,
      zero,
      align,
      padding,
      projection,
      ...scaleOptions
    });
    if (scale) {
      // populate generic scale options (percent, transform, insets)
      let {
        label = key === "fx" || key === "fy" ? facetLabel : globalLabel,
        percent,
        transform,
        inset,
        insetTop = inset !== undefined ? inset : key === "y" ? globalInsetTop : 0,
        // not fy
        insetRight = inset !== undefined ? inset : key === "x" ? globalInsetRight : 0,
        // not fx
        insetBottom = inset !== undefined ? inset : key === "y" ? globalInsetBottom : 0,
        // not fy
        insetLeft = inset !== undefined ? inset : key === "x" ? globalInsetLeft : 0 // not fx
      } = scaleOptions || {};
      if (transform == null) transform = undefined;else if (typeof transform !== "function") throw new Error("invalid scale transform; not a function");
      scale.percent = !!percent;
      scale.label = label === undefined ? inferScaleLabel(channels, scale) : label;
      scale.transform = transform;
      if (key === "x" || key === "fx") {
        scale.insetLeft = +insetLeft;
        scale.insetRight = +insetRight;
      } else if (key === "y" || key === "fy") {
        scale.insetTop = +insetTop;
        scale.insetBottom = +insetBottom;
      }
      scales[key] = scale;
    }
  }
  return scales;
}
function createScaleFunctions(descriptors) {
  const scales = {};
  const scaleFunctions = {
    scales
  };
  for (const [key, descriptor] of Object.entries(descriptors)) {
    const {
      scale,
      type,
      interval,
      label
    } = descriptor;
    scales[key] = exposeScale(descriptor);
    scaleFunctions[key] = scale;
    // TODO: pass these properties, which are needed for axes, in the descriptor.
    scale.type = type;
    if (interval != null) scale.interval = interval;
    if (label != null) scale.label = label;
  }
  return scaleFunctions;
}

// Mutates scale.range!
function autoScaleRange(scales, dimensions) {
  const {
    x,
    y,
    fx,
    fy
  } = scales;
  const superdimensions = fx || fy ? outerDimensions(dimensions) : dimensions;
  if (fx) autoScaleRangeX(fx, superdimensions);
  if (fy) autoScaleRangeY(fy, superdimensions);
  const subdimensions = fx || fy ? innerDimensions(scales, dimensions) : dimensions;
  if (x) autoScaleRangeX(x, subdimensions);
  if (y) autoScaleRangeY(y, subdimensions);
}

// Channels can have labels; if all the channels for a given scale are
// consistently labeled (i.e., have the same value if not undefined), and the
// corresponding scale doesn’t already have an explicit label, then the
// channels’ label is promoted to the scale. This inferred label should have an
// orientation-appropriate arrow added when used as an axis, but we don’t want
// to add the arrow when the label is set explicitly as an option; so, the
// inferred label is distinguished as an object with an “inferred” property.
function inferScaleLabel(channels = [], scale) {
  let label;
  for (const {
    label: l
  } of channels) {
    if (l === undefined) continue;
    if (label === undefined) label = l;else if (label !== l) return;
  }
  if (label === undefined) return;
  if (!isOrdinalScale(scale) && scale.percent) label = `${label} (%)`;
  return {
    inferred: true,
    toString: () => label
  };
}

// Determines whether the scale points in the “positive” (right or down) or
// “negative” (left or up) direction; if the scale order cannot be determined,
// returns NaN; used to assign an appropriate label arrow.
function inferScaleOrder(scale) {
  return Math.sign(orderof(scale.domain())) * Math.sign(orderof(scale.range()));
}

// Returns the dimensions of the outer frame; this is subdivided into facets
// with the margins of each facet collapsing into the outer margins.
function outerDimensions(dimensions) {
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    height,
    facet: {
      marginTop: facetMarginTop,
      marginRight: facetMarginRight,
      marginBottom: facetMarginBottom,
      marginLeft: facetMarginLeft
    }
  } = dimensions;
  return {
    marginTop: Math.max(marginTop, facetMarginTop),
    marginRight: Math.max(marginRight, facetMarginRight),
    marginBottom: Math.max(marginBottom, facetMarginBottom),
    marginLeft: Math.max(marginLeft, facetMarginLeft),
    width,
    height
  };
}

// Returns the dimensions of each facet.
function innerDimensions({
  fx,
  fy
}, dimensions) {
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    height
  } = outerDimensions(dimensions);
  return {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width: fx ? fx.scale.bandwidth() + marginLeft + marginRight : width,
    height: fy ? fy.scale.bandwidth() + marginTop + marginBottom : height,
    facet: {
      width,
      height
    }
  };
}
function autoScaleRangeX(scale, dimensions) {
  if (scale.range === undefined) {
    const {
      insetLeft,
      insetRight
    } = scale;
    const {
      width,
      marginLeft = 0,
      marginRight = 0
    } = dimensions;
    const left = marginLeft + insetLeft;
    const right = width - marginRight - insetRight;
    scale.range = [left, Math.max(left, right)];
    if (!isOrdinalScale(scale)) scale.range = piecewiseRange(scale);
    scale.scale.range(scale.range);
  }
  autoScaleRound(scale);
}
function autoScaleRangeY(scale, dimensions) {
  if (scale.range === undefined) {
    const {
      insetTop,
      insetBottom
    } = scale;
    const {
      height,
      marginTop = 0,
      marginBottom = 0
    } = dimensions;
    const top = marginTop + insetTop;
    const bottom = height - marginBottom - insetBottom;
    scale.range = [Math.max(top, bottom), top];
    if (!isOrdinalScale(scale)) scale.range = piecewiseRange(scale);else scale.range.reverse();
    scale.scale.range(scale.range);
  }
  autoScaleRound(scale);
}
function autoScaleRound(scale) {
  if (scale.round === undefined && isBandScale(scale) && roundError(scale) <= 30) {
    scale.scale.round(true);
  }
}

// If we were to turn on rounding for this band or point scale, how much wasted
// space would it introduce (on both ends of the range)? This must match
// d3.scaleBand’s rounding behavior:
// https://github.com/d3/d3-scale/blob/83555bd759c7314420bd4240642beda5e258db9e/src/band.js#L20-L32
function roundError({
  scale
}) {
  const n = scale.domain().length;
  const [start, stop] = scale.range();
  const paddingInner = scale.paddingInner ? scale.paddingInner() : 1;
  const paddingOuter = scale.paddingOuter ? scale.paddingOuter() : scale.padding();
  const m = n - paddingInner;
  const step = Math.abs(stop - start) / Math.max(1, m + paddingOuter * 2);
  return (step - Math.floor(step)) * m;
}
function piecewiseRange(scale) {
  const length = scale.scale.domain().length + isThresholdScale(scale);
  if (!(length > 2)) return scale.range;
  const [start, end] = scale.range;
  return Array.from({
    length
  }, (_, i) => start + i / (length - 1) * (end - start));
}
function createScale(key, channels = [], options = {}) {
  const type = inferScaleType(key, channels, options);

  // Warn for common misuses of implicit ordinal scales. We disable this test if
  // you specify a scale interval or if you set the domain or range explicitly,
  // since setting the domain or range (typically with a cardinality of more than
  // two) is another indication that you intended for the scale to be ordinal; we
  // also disable it for facet scales since these are always band scales.
  if (options.type === undefined && options.domain === undefined && options.range === undefined && options.interval == null && key !== "fx" && key !== "fy" && isOrdinalScale({
    type
  })) {
    const values = channels.map(({
      value
    }) => value).filter(value => value !== undefined);
    if (values.some(isTemporal)) warn(`Warning: some data associated with the ${key} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(type)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(type)}".`);else if (values.some(isTemporalString)) warn(`Warning: some data associated with the ${key} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(type)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(type)}".`);else if (values.some(isNumericString)) warn(`Warning: some data associated with the ${key} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${formatScaleType(type)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(type)}".`);
  }
  options.type = type; // Mutates input!

  // Once the scale type is known, coerce the associated channel values and any
  // explicitly-specified domain to the expected type.
  switch (type) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      options = coerceType(channels, options, coerceNumbers);
      break;
    case "identity":
      switch (registry.get(key)) {
        case position:
          options = coerceType(channels, options, coerceNumbers);
          break;
        case symbol:
          options = coerceType(channels, options, coerceSymbols);
          break;
      }
      break;
    case "utc":
    case "time":
      options = coerceType(channels, options, coerceDates);
      break;
  }
  switch (type) {
    case "diverging":
      return createScaleDiverging(key, channels, options);
    case "diverging-sqrt":
      return createScaleDivergingSqrt(key, channels, options);
    case "diverging-pow":
      return createScaleDivergingPow(key, channels, options);
    case "diverging-log":
      return createScaleDivergingLog(key, channels, options);
    case "diverging-symlog":
      return createScaleDivergingSymlog(key, channels, options);
    case "categorical":
    case "ordinal":
    case ordinalImplicit:
      return createScaleOrdinal(key, channels, options);
    case "cyclical":
    case "sequential":
    case "linear":
      return createScaleLinear(key, channels, options);
    case "sqrt":
      return createScaleSqrt(key, channels, options);
    case "threshold":
      return createScaleThreshold(key, channels, options);
    case "quantile":
      return createScaleQuantile(key, channels, options);
    case "quantize":
      return createScaleQuantize(key, channels, options);
    case "pow":
      return createScalePow(key, channels, options);
    case "log":
      return createScaleLog(key, channels, options);
    case "symlog":
      return createScaleSymlog(key, channels, options);
    case "utc":
      return createScaleUtc(key, channels, options);
    case "time":
      return createScaleTime(key, channels, options);
    case "point":
      return createScalePoint(key, channels, options);
    case "band":
      return createScaleBand(key, channels, options);
    case "identity":
      return createScaleIdentity(key);
    case undefined:
      return;
    default:
      throw new Error(`unknown scale type: ${type}`);
  }
}
function formatScaleType(type) {
  return typeof type === "symbol" ? type.description : type;
}
function maybeScaleType(type) {
  return typeof type === "string" ? `${type}`.toLowerCase() : type;
}

// A special type symbol when the x and y scales are replaced with a projection.
const typeProjection = {
  toString: () => "projection"
};
function inferScaleType(key, channels, {
  type,
  domain,
  range,
  scheme,
  pivot,
  projection
}) {
  type = maybeScaleType(type);

  // The facet scales are always band scales; this cannot be changed.
  if (key === "fx" || key === "fy") return "band";

  // If a projection is specified, the x- and y-scales are disabled; these
  // channels will be projected rather than scaled. (But still check that none
  // of the associated channels are incompatible with a projection.)
  if ((key === "x" || key === "y") && projection != null) type = typeProjection;

  // If a channel dictates a scale type, make sure that it is consistent with
  // the user-specified scale type (if any) and all other channels. For example,
  // barY requires x to be a band scale and disallows any other scale type.
  for (const channel of channels) {
    const t = maybeScaleType(channel.type);
    if (t === undefined) continue;else if (type === undefined) type = t;else if (type !== t) throw new Error(`scale incompatible with channel: ${type} !== ${t}`);
  }

  // If the scale, a channel, or user specified a (consistent) type, return it.
  if (type === typeProjection) return;
  if (type !== undefined) return type;

  // If there’s no data (and no type) associated with this scale, don’t create a scale.
  if (domain === undefined && !channels.some(({
    value
  }) => value !== undefined)) return;

  // Some scales have default types.
  const kind = registry.get(key);
  if (kind === radius) return "sqrt";
  if (kind === opacity || kind === length) return "linear";
  if (kind === symbol) return "ordinal";

  // If the domain or range has more than two values, assume it’s ordinal. You
  // can still use a “piecewise” (or “polylinear”) scale, but you must set the
  // type explicitly.
  if ((domain || range || []).length > 2) return asOrdinalType(kind);

  // Otherwise, infer the scale type from the data! Prefer the domain, if
  // present, over channels. (The domain and channels should be consistently
  // typed, and the domain is more explicit and typically much smaller.) We only
  // check the first defined value for expedience and simplicity; we expect
  // that the types are consistent.
  if (domain !== undefined) {
    if (isOrdinal(domain)) return asOrdinalType(kind);
    if (isTemporal(domain)) return "utc";
  } else {
    const values = channels.map(({
      value
    }) => value).filter(value => value !== undefined);
    if (values.some(isOrdinal)) return asOrdinalType(kind);
    if (values.some(isTemporal)) return "utc";
  }

  // For color scales, take a hint from the color scheme and pivot option.
  if (kind === color) {
    if (pivot != null || isDivergingScheme(scheme)) return "diverging";
    if (isCategoricalScheme(scheme)) return "categorical";
  }
  return "linear";
}

// Positional scales default to a point scale instead of an ordinal scale.
function asOrdinalType(kind) {
  switch (kind) {
    case position:
      return "point";
    case color:
      return ordinalImplicit;
    default:
      return "ordinal";
  }
}
function isOrdinalScale({
  type
}) {
  return type === "ordinal" || type === "point" || type === "band" || type === ordinalImplicit;
}
function isThresholdScale({
  type
}) {
  return type === "threshold";
}
function isBandScale({
  type
}) {
  return type === "point" || type === "band";
}

// Certain marks have special behavior if a scale is collapsed, i.e. if the
// domain is degenerate and represents only a single value such as [3, 3]; for
// example, a rect will span the full extent of the chart along a collapsed
// dimension (whereas a dot will simply be drawn in the center).
function isCollapsed(scale) {
  if (scale === undefined) return true; // treat missing scale as collapsed
  const domain = scale.domain();
  const value = scale(domain[0]);
  for (let i = 1, n = domain.length; i < n; ++i) {
    if (scale(domain[i]) - value) {
      return false;
    }
  }
  return true;
}

// Mutates channel.value!
function coerceType(channels, {
  domain,
  ...options
}, coerceValues) {
  for (const c of channels) {
    if (c.value !== undefined) {
      if (domain === undefined) domain = c.value?.domain; // promote channel domain
      c.value = coerceValues(c.value);
    }
  }
  return {
    domain: domain === undefined ? domain : coerceValues(domain),
    ...options
  };
}
function coerceSymbols(values) {
  return map(values, maybeSymbol);
}
function exposeScales(scales) {
  return key => {
    if (!registry.has(key = `${key}`)) throw new Error(`unknown scale: ${key}`);
    return scales[key];
  };
}

// Note: axis- and legend-related properties (such as label, ticks and
// tickFormat) are not included here as they do not affect the scale’s behavior.
function exposeScale({
  scale,
  type,
  domain,
  range,
  interpolate,
  interval,
  transform,
  percent,
  pivot
}) {
  if (type === "identity") return {
    type: "identity",
    apply: d => d,
    invert: d => d
  };
  const unknown = scale.unknown ? scale.unknown() : undefined;
  return {
    type,
    domain: slice(domain),
    // defensive copy
    ...(range !== undefined && {
      range: slice(range)
    }),
    // defensive copy
    ...(transform !== undefined && {
      transform
    }),
    ...(percent && {
      percent
    }),
    // only exposed if truthy
    ...(unknown !== undefined && {
      unknown
    }),
    ...(interval !== undefined && {
      interval
    }),
    // quantitative
    ...(interpolate !== undefined && {
      interpolate
    }),
    ...(scale.clamp && {
      clamp: scale.clamp()
    }),
    // diverging (always asymmetric; we never want to apply the symmetric transform twice)
    ...(pivot !== undefined && {
      pivot,
      symmetric: false
    }),
    // log, diverging-log
    ...(scale.base && {
      base: scale.base()
    }),
    // pow, diverging-pow
    ...(scale.exponent && {
      exponent: scale.exponent()
    }),
    // symlog, diverging-symlog
    ...(scale.constant && {
      constant: scale.constant()
    }),
    // band, point
    ...(scale.align && {
      align: scale.align(),
      round: scale.round()
    }),
    ...(scale.padding && (scale.paddingInner ? {
      paddingInner: scale.paddingInner(),
      paddingOuter: scale.paddingOuter()
    } : {
      padding: scale.padding()
    })),
    ...(scale.bandwidth && {
      bandwidth: scale.bandwidth(),
      step: scale.step()
    }),
    // utilities
    apply: t => scale(t),
    ...(scale.invert && {
      invert: t => scale.invert(t)
    })
  };
}

function memoize1(compute) {
  let cacheValue, cacheKeys;
  return (...keys) => {
    if (cacheKeys?.length !== keys.length || cacheKeys.some((k, i) => k !== keys[i])) {
      cacheKeys = keys;
      cacheValue = compute(...keys);
    }
    return cacheValue;
  };
}

const numberFormat = memoize1(locale => {
  return new Intl.NumberFormat(locale);
});
function formatNumber(locale = "en-US") {
  const format = numberFormat(locale);
  return i => i != null && !isNaN(i) ? format.format(i) : undefined;
}
function formatIsoDate(date) {
  return format(date, "Invalid Date");
}
function formatAuto(locale = "en-US") {
  const number = formatNumber(locale);
  return v => (v instanceof Date ? formatIsoDate : typeof v === "number" ? number : string)(v);
}

// TODO When Plot supports a top-level locale option, this should be removed
// because it lacks context to know which locale to use; formatAuto should be
// used instead whenever possible.
const formatDefault = formatAuto();

const offset = (typeof window !== "undefined" ? window.devicePixelRatio > 1 : typeof it === "undefined") ? 0 : 0.5; // prettier-ignore

let nextClipId = 0;
function getClipId() {
  return `plot-clip-${++nextClipId}`;
}
function styles(mark, {
  title,
  href,
  ariaLabel: variaLabel,
  ariaDescription,
  ariaHidden,
  target,
  fill,
  fillOpacity,
  stroke,
  strokeWidth,
  strokeOpacity,
  strokeLinejoin,
  strokeLinecap,
  strokeMiterlimit,
  strokeDasharray,
  strokeDashoffset,
  opacity,
  mixBlendMode,
  imageFilter,
  paintOrder,
  pointerEvents,
  shapeRendering,
  channels
}, {
  ariaLabel: cariaLabel,
  fill: defaultFill = "currentColor",
  fillOpacity: defaultFillOpacity,
  stroke: defaultStroke = "none",
  strokeOpacity: defaultStrokeOpacity,
  strokeWidth: defaultStrokeWidth,
  strokeLinecap: defaultStrokeLinecap,
  strokeLinejoin: defaultStrokeLinejoin,
  strokeMiterlimit: defaultStrokeMiterlimit,
  paintOrder: defaultPaintOrder
}) {
  // Some marks don’t support fill (e.g., tick and rule).
  if (defaultFill === null) {
    fill = null;
    fillOpacity = null;
  }

  // Some marks don’t support stroke (e.g., image).
  if (defaultStroke === null) {
    stroke = null;
    strokeOpacity = null;
  }

  // Some marks default to fill with no stroke, while others default to stroke
  // with no fill. For example, bar and area default to fill, while dot and line
  // default to stroke. For marks that fill by default, the default fill only
  // applies if the stroke is (constant) none; if you set a stroke, then the
  // default fill becomes none. Similarly for marks that stroke by stroke, the
  // default stroke only applies if the fill is (constant) none.
  if (isNoneish(defaultFill)) {
    if (!isNoneish(defaultStroke) && (!isNoneish(fill) || channels?.fill)) defaultStroke = "none";
  } else {
    if (isNoneish(defaultStroke) && (!isNoneish(stroke) || channels?.stroke)) defaultFill = "none";
  }
  const [vfill, cfill] = maybeColorChannel(fill, defaultFill);
  const [vfillOpacity, cfillOpacity] = maybeNumberChannel(fillOpacity, defaultFillOpacity);
  const [vstroke, cstroke] = maybeColorChannel(stroke, defaultStroke);
  const [vstrokeOpacity, cstrokeOpacity] = maybeNumberChannel(strokeOpacity, defaultStrokeOpacity);
  const [vopacity, copacity] = maybeNumberChannel(opacity);

  // For styles that have no effect if there is no stroke, only apply the
  // defaults if the stroke is not the constant none. (If stroke is a channel,
  // then cstroke will be undefined, but there’s still a stroke; hence we don’t
  // use isNoneish here.)
  if (!isNone(cstroke)) {
    if (strokeWidth === undefined) strokeWidth = defaultStrokeWidth;
    if (strokeLinecap === undefined) strokeLinecap = defaultStrokeLinecap;
    if (strokeLinejoin === undefined) strokeLinejoin = defaultStrokeLinejoin;

    // The default stroke miterlimit need not be applied if the current stroke
    // is the constant round; this only has effect on miter joins.
    if (strokeMiterlimit === undefined && !isRound(strokeLinejoin)) strokeMiterlimit = defaultStrokeMiterlimit;

    // The paint order only takes effect if there is both a fill and a stroke
    // (at least if we ignore markers, which no built-in marks currently use).
    if (!isNone(cfill) && paintOrder === undefined) paintOrder = defaultPaintOrder;
  }
  const [vstrokeWidth, cstrokeWidth] = maybeNumberChannel(strokeWidth);

  // Some marks don’t support fill (e.g., tick and rule).
  if (defaultFill !== null) {
    mark.fill = impliedString(cfill, "currentColor");
    mark.fillOpacity = impliedNumber(cfillOpacity, 1);
  }

  // Some marks don’t support stroke (e.g., image).
  if (defaultStroke !== null) {
    mark.stroke = impliedString(cstroke, "none");
    mark.strokeWidth = impliedNumber(cstrokeWidth, 1);
    mark.strokeOpacity = impliedNumber(cstrokeOpacity, 1);
    mark.strokeLinejoin = impliedString(strokeLinejoin, "miter");
    mark.strokeLinecap = impliedString(strokeLinecap, "butt");
    mark.strokeMiterlimit = impliedNumber(strokeMiterlimit, 4);
    mark.strokeDasharray = impliedString(strokeDasharray, "none");
    mark.strokeDashoffset = impliedString(strokeDashoffset, "0");
  }
  mark.target = string(target);
  mark.ariaLabel = string(cariaLabel);
  mark.ariaDescription = string(ariaDescription);
  mark.ariaHidden = string(ariaHidden);
  mark.opacity = impliedNumber(copacity, 1);
  mark.mixBlendMode = impliedString(mixBlendMode, "normal");
  mark.imageFilter = impliedString(imageFilter, "none");
  mark.paintOrder = impliedString(paintOrder, "normal");
  mark.pointerEvents = impliedString(pointerEvents, "auto");
  mark.shapeRendering = impliedString(shapeRendering, "auto");
  return {
    title: {
      value: title,
      optional: true,
      filter: null
    },
    href: {
      value: href,
      optional: true,
      filter: null
    },
    ariaLabel: {
      value: variaLabel,
      optional: true,
      filter: null
    },
    fill: {
      value: vfill,
      scale: "auto",
      optional: true
    },
    fillOpacity: {
      value: vfillOpacity,
      scale: "auto",
      optional: true
    },
    stroke: {
      value: vstroke,
      scale: "auto",
      optional: true
    },
    strokeOpacity: {
      value: vstrokeOpacity,
      scale: "auto",
      optional: true
    },
    strokeWidth: {
      value: vstrokeWidth,
      optional: true
    },
    opacity: {
      value: vopacity,
      scale: "auto",
      optional: true
    }
  };
}

// Applies the specified titles via selection.call.
function applyTitle(selection, L) {
  if (L) selection.filter(i => nonempty(L[i])).append("title").call(applyText, L);
}

// Like applyTitle, but for grouped data (lines, areas).
function applyTitleGroup(selection, L) {
  if (L) selection.filter(([i]) => nonempty(L[i])).append("title").call(applyTextGroup, L);
}
function applyText(selection, T) {
  if (T) selection.text(i => formatDefault(T[i]));
}
function applyTextGroup(selection, T) {
  if (T) selection.text(([i]) => formatDefault(T[i]));
}
function applyChannelStyles(selection, {
  target,
  tip
}, {
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}) {
  if (AL) applyAttr(selection, "aria-label", i => AL[i]);
  if (F) applyAttr(selection, "fill", i => F[i]);
  if (FO) applyAttr(selection, "fill-opacity", i => FO[i]);
  if (S) applyAttr(selection, "stroke", i => S[i]);
  if (SO) applyAttr(selection, "stroke-opacity", i => SO[i]);
  if (SW) applyAttr(selection, "stroke-width", i => SW[i]);
  if (O) applyAttr(selection, "opacity", i => O[i]);
  if (H) applyHref(selection, i => H[i], target);
  if (!tip) applyTitle(selection, T);
}
function applyGroupedChannelStyles(selection, {
  target,
  tip
}, {
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}) {
  if (AL) applyAttr(selection, "aria-label", ([i]) => AL[i]);
  if (F) applyAttr(selection, "fill", ([i]) => F[i]);
  if (FO) applyAttr(selection, "fill-opacity", ([i]) => FO[i]);
  if (S) applyAttr(selection, "stroke", ([i]) => S[i]);
  if (SO) applyAttr(selection, "stroke-opacity", ([i]) => SO[i]);
  if (SW) applyAttr(selection, "stroke-width", ([i]) => SW[i]);
  if (O) applyAttr(selection, "opacity", ([i]) => O[i]);
  if (H) applyHref(selection, ([i]) => H[i], target);
  if (!tip) applyTitleGroup(selection, T);
}
function groupAesthetics({
  ariaLabel: AL,
  title: T,
  fill: F,
  fillOpacity: FO,
  stroke: S,
  strokeOpacity: SO,
  strokeWidth: SW,
  opacity: O,
  href: H
}, {
  tip
}) {
  return [AL, tip ? undefined : T, F, FO, S, SO, SW, O, H].filter(c => c !== undefined);
}
function groupZ(I, Z, z) {
  const G = group(I, i => Z[i]);
  if (z === undefined && G.size > 1 + I.length >> 1) {
    warn(`Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null.`);
  }
  return G.values();
}
function* groupIndex(I, position, mark, channels) {
  const {
    z
  } = mark;
  const {
    z: Z
  } = channels; // group channel
  const A = groupAesthetics(channels, mark); // aesthetic channels
  const C = [...position, ...A]; // all channels

  // Group the current index by Z (if any).
  for (const G of Z ? groupZ(I, Z, z) : [I]) {
    let Ag; // the A-values (aesthetics) of the current group, if any
    let Gg; // the current group index (a subset of G, and I), if any
    out: for (const i of G) {
      // If any channel has an undefined value for this index, skip it.
      for (const c of C) {
        if (!defined(c[i])) {
          if (Gg) Gg.push(-1);
          continue out;
        }
      }

      // Otherwise, if this is a new group, record the aesthetics for this
      // group. Yield the current group and start a new one.
      if (Ag === undefined) {
        if (Gg) yield Gg;
        Ag = A.map(c => keyof(c[i])), Gg = [i];
        continue;
      }

      // Otherwise, add the current index to the current group. Then, if any of
      // the aesthetics don’t match the current group, yield the current group
      // and start a new group of the current index.
      Gg.push(i);
      for (let j = 0; j < A.length; ++j) {
        const k = keyof(A[j][i]);
        if (k !== Ag[j]) {
          yield Gg;
          Ag = A.map(c => keyof(c[i])), Gg = [i];
          continue out;
        }
      }
    }

    // Yield the current group, if any.
    if (Gg) yield Gg;
  }
}

// Note: may mutate selection.node!
function applyClip(selection, mark, dimensions, context) {
  let clipUrl;
  const {
    clip = context.clip
  } = mark;
  switch (clip) {
    case "frame":
      {
        const {
          width,
          height,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom
        } = dimensions;
        const id = getClipId();
        clipUrl = `url(#${id})`;
        selection = create("svg:g", context).call(g => g.append("svg:clipPath").attr("id", id).append("rect").attr("x", marginLeft).attr("y", marginTop).attr("width", width - marginRight - marginLeft).attr("height", height - marginTop - marginBottom)).each(function () {
          this.appendChild(selection.node());
          selection.node = () => this; // Note: mutation!
        });
        break;
      }
    case "sphere":
      {
        const {
          projection
        } = context;
        if (!projection) throw new Error(`the "sphere" clip option requires a projection`);
        const id = getClipId();
        clipUrl = `url(#${id})`;
        selection.append("clipPath").attr("id", id).append("path").attr("d", geoPath(projection)({
          type: "Sphere"
        }));
        break;
      }
  }
  // Here we’re careful to apply the ARIA attributes to the outer G element when
  // clipping is applied, and to apply the ARIA attributes before any other
  // attributes (for readability).
  applyAttr(selection, "aria-label", mark.ariaLabel);
  applyAttr(selection, "aria-description", mark.ariaDescription);
  applyAttr(selection, "aria-hidden", mark.ariaHidden);
  applyAttr(selection, "clip-path", clipUrl);
}

// Note: may mutate selection.node!
function applyIndirectStyles(selection, mark, dimensions, context) {
  applyClip(selection, mark, dimensions, context);
  applyAttr(selection, "fill", mark.fill);
  applyAttr(selection, "fill-opacity", mark.fillOpacity);
  applyAttr(selection, "stroke", mark.stroke);
  applyAttr(selection, "stroke-width", mark.strokeWidth);
  applyAttr(selection, "stroke-opacity", mark.strokeOpacity);
  applyAttr(selection, "stroke-linejoin", mark.strokeLinejoin);
  applyAttr(selection, "stroke-linecap", mark.strokeLinecap);
  applyAttr(selection, "stroke-miterlimit", mark.strokeMiterlimit);
  applyAttr(selection, "stroke-dasharray", mark.strokeDasharray);
  applyAttr(selection, "stroke-dashoffset", mark.strokeDashoffset);
  applyAttr(selection, "shape-rendering", mark.shapeRendering);
  applyAttr(selection, "filter", mark.imageFilter);
  applyAttr(selection, "paint-order", mark.paintOrder);
  const {
    pointerEvents = context.pointerSticky === false ? "none" : undefined
  } = mark;
  applyAttr(selection, "pointer-events", pointerEvents);
}
function applyDirectStyles(selection, mark) {
  applyStyle(selection, "mix-blend-mode", mark.mixBlendMode);
  applyAttr(selection, "opacity", mark.opacity);
}
function applyHref(selection, href, target) {
  selection.each(function (i) {
    const h = href(i);
    if (h != null) {
      const a = this.ownerDocument.createElementNS(namespaces.svg, "a");
      a.setAttribute("fill", "inherit");
      a.setAttributeNS(namespaces.xlink, "href", h);
      if (target != null) a.setAttribute("target", target);
      this.parentNode.insertBefore(a, this).appendChild(this);
    }
  });
}
function applyAttr(selection, name, value) {
  if (value != null) selection.attr(name, value);
}
function applyStyle(selection, name, value) {
  if (value != null) selection.style(name, value);
}
function applyTransform(selection, mark, {
  x,
  y
}, tx = offset, ty = offset) {
  tx += mark.dx;
  ty += mark.dy;
  if (x?.bandwidth) tx += x.bandwidth() / 2;
  if (y?.bandwidth) ty += y.bandwidth() / 2;
  if (tx || ty) selection.attr("transform", `translate(${tx},${ty})`);
}
function impliedString(value, impliedValue) {
  if ((value = string(value)) !== impliedValue) return value;
}
function impliedNumber(value, impliedValue) {
  if ((value = number(value)) !== impliedValue) return value;
}

// https://www.w3.org/TR/CSS21/grammar.html
const validClassName = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function maybeClassName(name) {
  // The default should be changed whenever the default styles are changed, so
  // as to avoid conflict when multiple versions of Plot are on the page.
  if (name === undefined) return "plot-d6a7b5";
  name = `${name}`;
  if (!validClassName.test(name)) throw new Error(`invalid class name: ${name}`);
  return name;
}
function applyInlineStyles(selection, style) {
  if (typeof style === "string") {
    selection.property("style", style);
  } else if (style != null) {
    for (const element of selection) {
      Object.assign(element.style, style);
    }
  }
}
function applyFrameAnchor({
  frameAnchor
}, {
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
}) {
  return [/left$/.test(frameAnchor) ? marginLeft : /right$/.test(frameAnchor) ? width - marginRight : (marginLeft + width - marginRight) / 2, /^top/.test(frameAnchor) ? marginTop : /^bottom/.test(frameAnchor) ? height - marginBottom : (marginTop + height - marginBottom) / 2];
}

function createDimensions(scales, marks, options = {}) {
  // Compute the default margins: the maximum of the marks’ margins. While not
  // always used, they may be needed to compute the default height of the plot.
  let marginTopDefault = 0.5 - offset,
    marginRightDefault = 0.5 + offset,
    marginBottomDefault = 0.5 + offset,
    marginLeftDefault = 0.5 - offset;
  for (const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  } of marks) {
    if (marginTop > marginTopDefault) marginTopDefault = marginTop;
    if (marginRight > marginRightDefault) marginRightDefault = marginRight;
    if (marginBottom > marginBottomDefault) marginBottomDefault = marginBottom;
    if (marginLeft > marginLeftDefault) marginLeftDefault = marginLeft;
  }

  // Compute the actual margins. The order of precedence is: the side-specific
  // margin options, then the global margin option, then the defaults.
  let {
    margin,
    marginTop = margin !== undefined ? margin : marginTopDefault,
    marginRight = margin !== undefined ? margin : marginRightDefault,
    marginBottom = margin !== undefined ? margin : marginBottomDefault,
    marginLeft = margin !== undefined ? margin : marginLeftDefault
  } = options;

  // Coerce the margin options to numbers.
  marginTop = +marginTop;
  marginRight = +marginRight;
  marginBottom = +marginBottom;
  marginLeft = +marginLeft;

  // Compute the outer dimensions of the plot. If the top and bottom margins are
  // specified explicitly, adjust the automatic height accordingly.
  let {
    width = 640,
    height = autoHeight(scales, options, {
      width,
      marginTopDefault,
      marginRightDefault,
      marginBottomDefault,
      marginLeftDefault
    }) + Math.max(0, marginTop - marginTopDefault + marginBottom - marginBottomDefault)
  } = options;

  // Coerce the width and height.
  width = +width;
  height = +height;
  const dimensions = {
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  };

  // Compute the facet margins.
  if (scales.fx || scales.fy) {
    let {
      margin: facetMargin,
      marginTop: facetMarginTop = facetMargin !== undefined ? facetMargin : marginTop,
      marginRight: facetMarginRight = facetMargin !== undefined ? facetMargin : marginRight,
      marginBottom: facetMarginBottom = facetMargin !== undefined ? facetMargin : marginBottom,
      marginLeft: facetMarginLeft = facetMargin !== undefined ? facetMargin : marginLeft
    } = options.facet ?? {};

    // Coerce the facet margin options to numbers.
    facetMarginTop = +facetMarginTop;
    facetMarginRight = +facetMarginRight;
    facetMarginBottom = +facetMarginBottom;
    facetMarginLeft = +facetMarginLeft;
    dimensions.facet = {
      marginTop: facetMarginTop,
      marginRight: facetMarginRight,
      marginBottom: facetMarginBottom,
      marginLeft: facetMarginLeft
    };
  }
  return dimensions;
}
function autoHeight({
  x,
  y,
  fy,
  fx
}, {
  projection,
  aspectRatio
}, {
  width,
  marginTopDefault,
  marginRightDefault,
  marginBottomDefault,
  marginLeftDefault
}) {
  const nfy = fy ? fy.scale.domain().length : 1;

  // If a projection is specified, use its natural aspect ratio (if known).
  const ar = projectionAspectRatio(projection);
  if (ar) {
    const nfx = fx ? fx.scale.domain().length : 1;
    const far = (1.1 * nfy - 0.1) / (1.1 * nfx - 0.1) * ar; // 0.1 is default facet padding
    const lar = Math.max(0.1, Math.min(10, far)); // clamp the aspect ratio to a “reasonable” value
    return Math.round((width - marginLeftDefault - marginRightDefault) * lar + marginTopDefault + marginBottomDefault);
  }
  const ny = y ? isOrdinalScale(y) ? y.scale.domain().length : Math.max(7, 17 / nfy) : 1;

  // If a desired aspect ratio is given, compute a default height to match.
  if (aspectRatio != null) {
    aspectRatio = +aspectRatio;
    if (!(isFinite(aspectRatio) && aspectRatio > 0)) throw new Error(`invalid aspectRatio: ${aspectRatio}`);
    const ratio = aspectRatioLength("y", y) / (aspectRatioLength("x", x) * aspectRatio);
    const fxb = fx ? fx.scale.bandwidth() : 1;
    const fyb = fy ? fy.scale.bandwidth() : 1;
    const w = fxb * (width - marginLeftDefault - marginRightDefault) - x.insetLeft - x.insetRight;
    return (ratio * w + y.insetTop + y.insetBottom) / fyb + marginTopDefault + marginBottomDefault;
  }
  return !!(y || fy) * Math.max(1, Math.min(60, ny * nfy)) * 20 + !!fx * 30 + 60;
}
function aspectRatioLength(k, scale) {
  if (!scale) throw new Error(`aspectRatio requires ${k} scale`);
  const {
    type,
    domain
  } = scale;
  let transform;
  switch (type) {
    case "linear":
    case "utc":
    case "time":
      transform = Number;
      break;
    case "pow":
      {
        const exponent = scale.scale.exponent();
        transform = x => Math.pow(x, exponent);
        break;
      }
    case "log":
      transform = Math.log;
      break;
    case "point":
    case "band":
      return domain.length;
    default:
      throw new Error(`unsupported ${k} scale for aspectRatio: ${type}`);
  }
  const [min, max] = extent$1(domain);
  return Math.abs(transform(max) - transform(min));
}

// Returns an array of {x?, y?, i} objects representing the facet domain.
function createFacets(channelsByScale, options) {
  const {
    fx,
    fy
  } = createScales(channelsByScale, options);
  const fxDomain = fx?.scale.domain();
  const fyDomain = fy?.scale.domain();
  return fxDomain && fyDomain ? cross(fxDomain, fyDomain).map(([x, y], i) => ({
    x,
    y,
    i
  })) : fxDomain ? fxDomain.map((x, i) => ({
    x,
    i
  })) : fyDomain ? fyDomain.map((y, i) => ({
    y,
    i
  })) : undefined;
}
function recreateFacets(facets, {
  x: X,
  y: Y
}) {
  X &&= facetIndex(X);
  Y &&= facetIndex(Y);
  return facets.filter(X && Y // remove any facets no longer present in the domain
  ? f => X.has(f.x) && Y.has(f.y) : X ? f => X.has(f.x) : f => Y.has(f.y)).sort(X && Y // reorder facets to match the new scale domains
  ? (a, b) => X.get(a.x) - X.get(b.x) || Y.get(a.y) - Y.get(b.y) : X ? (a, b) => X.get(a.x) - X.get(b.x) : (a, b) => Y.get(a.y) - Y.get(b.y));
}

// Returns a (possibly nested) Map of [[key1, index1], [key2, index2], …]
// representing the data indexes associated with each facet.
function facetGroups(data, {
  fx,
  fy
}) {
  const I = range(data);
  const FX = fx?.value;
  const FY = fy?.value;
  return fx && fy ? rollup(I, G => (G.fx = FX[G[0]], G.fy = FY[G[0]], G), i => FX[i], i => FY[i]) : fx ? rollup(I, G => (G.fx = FX[G[0]], G), i => FX[i]) : rollup(I, G => (G.fy = FY[G[0]], G), i => FY[i]);
}
function facetTranslator(fx, fy, {
  marginTop,
  marginLeft
}) {
  return fx && fy ? ({
    x,
    y
  }) => `translate(${fx(x) - marginLeft},${fy(y) - marginTop})` : fx ? ({
    x
  }) => `translate(${fx(x) - marginLeft},0)` : ({
    y
  }) => `translate(0,${fy(y) - marginTop})`;
}

// Returns an index that for each facet lists all the elements present in other
// facets in the original index. TODO Memoize to avoid repeated work?
function facetExclude(index) {
  const ex = [];
  const e = new Uint32Array(sum(index, d => d.length));
  for (const i of index) {
    let n = 0;
    for (const j of index) {
      if (i === j) continue;
      e.set(j, n);
      n += j.length;
    }
    ex.push(e.slice(0, n));
  }
  return ex;
}
const facetAnchors = new Map([["top", facetAnchorTop], ["right", facetAnchorRight], ["bottom", facetAnchorBottom], ["left", facetAnchorLeft], ["top-left", and(facetAnchorTop, facetAnchorLeft)], ["top-right", and(facetAnchorTop, facetAnchorRight)], ["bottom-left", and(facetAnchorBottom, facetAnchorLeft)], ["bottom-right", and(facetAnchorBottom, facetAnchorRight)], ["top-empty", facetAnchorTopEmpty], ["right-empty", facetAnchorRightEmpty], ["bottom-empty", facetAnchorBottomEmpty], ["left-empty", facetAnchorLeftEmpty], ["empty", facetAnchorEmpty]]);
function maybeFacetAnchor(facetAnchor) {
  if (facetAnchor == null) return null;
  const anchor = facetAnchors.get(`${facetAnchor}`.toLowerCase());
  if (anchor) return anchor;
  throw new Error(`invalid facet anchor: ${facetAnchor}`);
}
const indexCache = new WeakMap();
function facetIndex(V) {
  let I = indexCache.get(V);
  if (!I) indexCache.set(V, I = new InternMap(map(V, (v, i) => [v, i])));
  return I;
}

// Like V.indexOf(v), but with the same semantics as InternMap.
function facetIndexOf(V, v) {
  return facetIndex(V).get(v);
}

// Like facets.find, but with the same semantics as InternMap.
function facetFind(facets, x, y) {
  x = keyof(x);
  y = keyof(y);
  return facets.find(f => Object.is(keyof(f.x), x) && Object.is(keyof(f.y), y));
}
function facetEmpty(facets, x, y) {
  return facetFind(facets, x, y)?.empty;
}
function facetAnchorTop(facets, {
  y: Y
}, {
  y
}) {
  return Y ? facetIndexOf(Y, y) === 0 : true;
}
function facetAnchorBottom(facets, {
  y: Y
}, {
  y
}) {
  return Y ? facetIndexOf(Y, y) === Y.length - 1 : true;
}
function facetAnchorLeft(facets, {
  x: X
}, {
  x
}) {
  return X ? facetIndexOf(X, x) === 0 : true;
}
function facetAnchorRight(facets, {
  x: X
}, {
  x
}) {
  return X ? facetIndexOf(X, x) === X.length - 1 : true;
}
function facetAnchorTopEmpty(facets, {
  y: Y
}, {
  x,
  y,
  empty
}) {
  if (empty) return false;
  if (!Y) return;
  const i = facetIndexOf(Y, y);
  if (i > 0) return facetEmpty(facets, x, Y[i - 1]);
}
function facetAnchorBottomEmpty(facets, {
  y: Y
}, {
  x,
  y,
  empty
}) {
  if (empty) return false;
  if (!Y) return;
  const i = facetIndexOf(Y, y);
  if (i < Y.length - 1) return facetEmpty(facets, x, Y[i + 1]);
}
function facetAnchorLeftEmpty(facets, {
  x: X
}, {
  x,
  y,
  empty
}) {
  if (empty) return false;
  if (!X) return;
  const i = facetIndexOf(X, x);
  if (i > 0) return facetEmpty(facets, X[i - 1], y);
}
function facetAnchorRightEmpty(facets, {
  x: X
}, {
  x,
  y,
  empty
}) {
  if (empty) return false;
  if (!X) return;
  const i = facetIndexOf(X, x);
  if (i < X.length - 1) return facetEmpty(facets, X[i + 1], y);
}
function facetAnchorEmpty(facets, channels, {
  empty
}) {
  return empty;
}
function and(a, b) {
  return function () {
    return a.apply(null, arguments) && b.apply(null, arguments);
  };
}

// Facet filter, by mark; for now only the "eq" filter is provided.
function facetFilter(facets, {
  channels: {
    fx,
    fy
  },
  groups
}) {
  return fx && fy ? facets.map(({
    x,
    y
  }) => groups.get(x)?.get(y) ?? []) : fx ? facets.map(({
    x
  }) => groups.get(x) ?? []) : facets.map(({
    y
  }) => groups.get(y) ?? []);
}

class Mark {
  constructor(data, channels = {}, options = {}, defaults) {
    const {
      facet = "auto",
      facetAnchor,
      fx,
      fy,
      sort,
      dx = 0,
      dy = 0,
      margin = 0,
      marginTop = margin,
      marginRight = margin,
      marginBottom = margin,
      marginLeft = margin,
      clip = defaults?.clip,
      channels: extraChannels,
      tip,
      render
    } = options;
    this.data = data;
    this.sort = isDomainSort(sort) ? sort : null;
    this.initializer = initializer(options).initializer;
    this.transform = this.initializer ? options.transform : basic(options).transform;
    if (facet === null || facet === false) {
      this.facet = null;
    } else {
      this.facet = keyword(facet === true ? "include" : facet, "facet", ["auto", "include", "exclude", "super"]);
      this.fx = data === singleton && typeof fx === "string" ? [fx] : fx;
      this.fy = data === singleton && typeof fy === "string" ? [fy] : fy;
    }
    this.facetAnchor = maybeFacetAnchor(facetAnchor);
    channels = maybeNamed(channels);
    if (extraChannels !== undefined) channels = {
      ...maybeChannels(extraChannels),
      ...channels
    };
    if (defaults !== undefined) channels = {
      ...styles(this, options, defaults),
      ...channels
    };
    this.channels = Object.fromEntries(Object.entries(channels).map(([name, channel]) => {
      if (isOptions(channel.value)) {
        // apply scale and label overrides
        const {
          value,
          label = channel.label,
          scale = channel.scale
        } = channel.value;
        channel = {
          ...channel,
          label,
          scale,
          value
        };
      }
      if (data === singleton && typeof channel.value === "string") {
        // convert field names to singleton values for decoration marks (e.g., frame)
        const {
          value
        } = channel;
        channel = {
          ...channel,
          value: [value]
        };
      }
      return [name, channel];
    }).filter(([name, {
      value,
      optional
    }]) => {
      if (value != null) return true;
      if (optional) return false;
      throw new Error(`missing channel value: ${name}`);
    }));
    this.dx = +dx;
    this.dy = +dy;
    this.marginTop = +marginTop;
    this.marginRight = +marginRight;
    this.marginBottom = +marginBottom;
    this.marginLeft = +marginLeft;
    this.clip = maybeClip(clip);
    this.tip = maybeTip(tip);
    // Super-faceting currently disallow position channels; in the future, we
    // could allow position to be specified in fx and fy in addition to (or
    // instead of) x and y.
    if (this.facet === "super") {
      if (fx || fy) throw new Error(`super-faceting cannot use fx or fy`);
      for (const name in this.channels) {
        const {
          scale
        } = channels[name];
        if (scale !== "x" && scale !== "y") continue;
        throw new Error(`super-faceting cannot use x or y`);
      }
    }
    if (render != null) {
      this.render = composeRender(render, this.render);
    }
  }
  initialize(facets, facetChannels, plotOptions) {
    let data = arrayify(this.data);
    if (facets === undefined && data != null) facets = [range(data)];
    const originalFacets = facets;
    if (this.transform != null) (({
      facets,
      data
    } = this.transform(data, facets, plotOptions))), data = arrayify(data);
    if (facets !== undefined) facets.original = originalFacets; // needed to read facetChannels
    const channels = createChannels(this.channels, data);
    if (this.sort != null) channelDomain(data, facets, channels, facetChannels, this.sort); // mutates facetChannels!
    return {
      data,
      facets,
      channels
    };
  }
  filter(index, channels, values) {
    for (const name in channels) {
      const {
        filter = defined
      } = channels[name];
      if (filter !== null) {
        const value = values[name];
        index = index.filter(i => filter(value[i]));
      }
    }
    return index;
  }
  // If there is a projection, and there are paired x and y channels associated
  // with the x and y scale respectively (and not already in screen coordinates
  // as with an initializer), then apply the projection, replacing the x and y
  // values. Note that the x and y scales themselves don’t exist if there is a
  // projection, but whether the channels are associated with scales still
  // determines whether the projection should apply; think of the projection as
  // a combination xy-scale.
  project(channels, values, context) {
    for (const cx in channels) {
      if (channels[cx].scale === "x" && /^x|x$/.test(cx)) {
        const cy = cx.replace(/^x|x$/, "y");
        if (cy in channels && channels[cy].scale === "y") {
          project(cx, cy, values, context.projection);
        }
      }
    }
  }
  scale(channels, scales, context) {
    const values = valueObject(channels, scales);
    if (context.projection) this.project(channels, values, context);
    return values;
  }
}
function marks(...marks) {
  marks.plot = Mark.prototype.plot; // Note: depends on side-effect in plot!
  return marks;
}
function composeRender(r1, r2) {
  if (r1 == null) return r2 === null ? undefined : r2;
  if (r2 == null) return r1 === null ? undefined : r1;
  if (typeof r1 !== "function") throw new TypeError(`invalid render transform: ${r1}`);
  if (typeof r2 !== "function") throw new TypeError(`invalid render transform: ${r2}`);
  return function (i, s, v, d, c, next) {
    return r1.call(this, i, s, v, d, c, (i, s, v, d, c) => {
      return r2.call(this, i, s, v, d, c, next); // preserve this
    });
  };
}
function maybeChannels(channels) {
  return Object.fromEntries(Object.entries(maybeNamed(channels)).map(([name, channel]) => {
    channel = typeof channel === "string" ? {
      value: channel,
      label: name
    } : maybeValue(channel); // for shorthand extra channels, use name as label
    if (channel.filter === undefined && channel.scale == null) channel = {
      ...channel,
      filter: null
    };
    return [name, channel];
  }));
}
function maybeTip(tip) {
  return tip === true ? "xy" : tip === false || tip == null ? null : typeof tip === "string" ? keyword(tip, "tip", ["x", "y", "xy"]) : tip; // tip options object
}
function withTip(options, pointer) {
  return options?.tip === true ? {
    ...options,
    tip: pointer
  } : isObject(options?.tip) && options.tip.pointer === undefined ? {
    ...options,
    tip: {
      ...options.tip,
      pointer
    }
  } : options;
}

const states = new WeakMap();
function pointerK(kx, ky, {
  x,
  y,
  px,
  py,
  maxRadius = 40,
  channels,
  render,
  ...options
} = {}) {
  maxRadius = +maxRadius;
  // When px or py is used, register an extra channel that the pointer
  // interaction can use to control which point is focused; this allows pointing
  // to function independently of where the downstream mark (e.g., a tip) is
  // displayed. Also default x or y to null to disable maybeTuple etc.
  if (px != null) x ??= null, channels = {
    ...channels,
    px: {
      value: px,
      scale: "x"
    }
  };
  if (py != null) y ??= null, channels = {
    ...channels,
    py: {
      value: py,
      scale: "y"
    }
  };
  return {
    x,
    y,
    channels,
    ...options,
    // Unlike other composed transforms, the render transform must be the
    // outermost render function because it will re-render dynamically in
    // response to pointer events.
    render: composeRender(function (index, scales, values, dimensions, context, next) {
      context = {
        ...context,
        pointerSticky: false
      };
      const svg = context.ownerSVGElement;
      const {
        data
      } = context.getMarkState(this);

      // Isolate state per-pointer, per-plot; if the pointer is reused by
      // multiple marks, they will share the same state (e.g., sticky modality).
      let state = states.get(svg);
      if (!state) states.set(svg, state = {
        sticky: false,
        roots: [],
        renders: []
      });

      // This serves as a unique identifier of the rendered mark per-plot; it is
      // used to record the currently-rendered elements (state.roots) so that we
      // can tell when a rendered element is clicked on.
      let renderIndex = state.renders.push(render) - 1;

      // For faceting, we want to compute the local coordinates of each point,
      // which means subtracting out the facet translation, if any. (It’s
      // tempting to do this using the local coordinates in SVG, but that’s
      // complicated by mark-specific transforms such as dx and dy.) Also, since
      // band scales return the upper bound of the band, we have to offset by
      // half the bandwidth.
      const {
        x,
        y,
        fx,
        fy
      } = scales;
      let tx = fx ? fx(index.fx) - dimensions.marginLeft : 0;
      let ty = fy ? fy(index.fy) - dimensions.marginTop : 0;
      if (x?.bandwidth) tx += x.bandwidth() / 2;
      if (y?.bandwidth) ty += y.bandwidth() / 2;

      // For faceting, we also need to record the closest point per facet per
      // mark (!), since each facet has its own pointer event listeners; we only
      // want the closest point across facets to be visible.
      const faceted = index.fi != null;
      let facetState;
      if (faceted) {
        let facetStates = state.facetStates;
        if (!facetStates) state.facetStates = facetStates = new Map();
        facetState = facetStates.get(this);
        if (!facetState) facetStates.set(this, facetState = new Map());
      }

      // The order of precedence for the pointer position is: px & py; the
      // middle of x1 & y1 and x2 & y2; or x1 & y1 (e.g., area); or lastly x &
      // y. If a dimension is unspecified, the frame anchor is used.
      const [cx, cy] = applyFrameAnchor(this, dimensions);
      const {
        px: PX,
        py: PY
      } = values;
      const px = PX ? i => PX[i] : anchorX$1(values, cx);
      const py = PY ? i => PY[i] : anchorY$1(values, cy);
      let i; // currently focused index
      let g; // currently rendered mark
      let s; // currently rendered stickiness
      let f; // current animation frame

      // When faceting, if more than one pointer would be visible, only show
      // this one if it is the closest. We defer rendering using an animation
      // frame to allow all pointer events to be received before deciding which
      // mark to render; although when hiding, we render immediately.
      function update(ii, ri) {
        if (faceted) {
          if (f) f = cancelAnimationFrame(f);
          if (ii == null) facetState.delete(index.fi);else {
            facetState.set(index.fi, ri);
            f = requestAnimationFrame(() => {
              f = null;
              for (const [fi, r] of facetState) {
                if (r < ri || r === ri && fi < index.fi) {
                  ii = null;
                  break;
                }
              }
              render(ii);
            });
            return;
          }
        }
        render(ii);
      }
      function render(ii) {
        if (i === ii && s === state.sticky) return; // the tooltip hasn’t moved
        i = ii;
        s = context.pointerSticky = state.sticky;
        const I = i == null ? [] : [i];
        if (faceted) I.fx = index.fx, I.fy = index.fy, I.fi = index.fi;
        const r = next(I, scales, values, dimensions, context);
        if (g) {
          // When faceting, preserve swapped mark and facet transforms; also
          // remove ARIA attributes since these are promoted to the parent. This
          // is perhaps brittle in that it depends on how Plot renders facets,
          // but it produces a cleaner and more accessible SVG structure.
          if (faceted) {
            const p = g.parentNode;
            const ft = g.getAttribute("transform");
            const mt = r.getAttribute("transform");
            ft ? r.setAttribute("transform", ft) : r.removeAttribute("transform");
            mt ? p.setAttribute("transform", mt) : p.removeAttribute("transform");
            r.removeAttribute("aria-label");
            r.removeAttribute("aria-description");
            r.removeAttribute("aria-hidden");
          }
          g.replaceWith(r);
        }
        state.roots[renderIndex] = g = r;

        // Dispatch the value. When simultaneously exiting this facet and
        // entering a new one, prioritize the entering facet.
        if (!(i == null && facetState?.size > 1)) context.dispatchValue(i == null ? null : data[i]);
        return r;
      }

      // Select the closest point to the mouse in the current facet; for
      // pointerX or pointerY, the orthogonal component of the distance is
      // squashed, selecting primarily on the dominant dimension. Across facets,
      // use unsquashed distance to determine the winner.
      function pointermove(event) {
        if (state.sticky || event.pointerType === "mouse" && event.buttons === 1) return; // dragging
        let [xp, yp] = pointof(event);
        xp -= tx, yp -= ty; // correct for facets and band scales
        const kpx = xp < dimensions.marginLeft || xp > dimensions.width - dimensions.marginRight ? 1 : kx;
        const kpy = yp < dimensions.marginTop || yp > dimensions.height - dimensions.marginBottom ? 1 : ky;
        let ii = null;
        let ri = maxRadius * maxRadius;
        for (const j of index) {
          const dx = kpx * (px(j) - xp);
          const dy = kpy * (py(j) - yp);
          const rj = dx * dx + dy * dy;
          if (rj <= ri) ii = j, ri = rj;
        }
        if (ii != null && (kx !== 1 || ky !== 1)) {
          const dx = px(ii) - xp;
          const dy = py(ii) - yp;
          ri = dx * dx + dy * dy;
        }
        update(ii, ri);
      }
      function pointerdown(event) {
        if (event.pointerType !== "mouse") return;
        if (i == null) return; // not pointing
        if (state.sticky && state.roots.some(r => r?.contains(event.target))) return; // stay sticky
        if (state.sticky) state.sticky = false, state.renders.forEach(r => r(null)); // clear all pointers
        else state.sticky = true, render(i);
        event.stopImmediatePropagation(); // suppress other pointers
      }
      function pointerleave(event) {
        if (event.pointerType !== "mouse") return;
        if (!state.sticky) update(null);
      }

      // We listen to the svg element; listening to the window instead would let
      // us receive pointer events from farther away, but would also make it
      // hard to know when to remove the listeners. (Using a mutation observer
      // to watch the entire document is likely too expensive.)
      svg.addEventListener("pointerenter", pointermove);
      svg.addEventListener("pointermove", pointermove);
      svg.addEventListener("pointerdown", pointerdown);
      svg.addEventListener("pointerleave", pointerleave);
      return render(null);
    }, render)
  };
}
function pointer(options) {
  return pointerK(1, 1, options);
}
function pointerX(options) {
  return pointerK(1, 0.01, options);
}
function pointerY(options) {
  return pointerK(0.01, 1, options);
}
function anchorX$1({
  x1: X1,
  x2: X2,
  x: X = X1
}, cx) {
  return X1 && X2 ? i => (X1[i] + X2[i]) / 2 : X ? i => X[i] : () => cx;
}
function anchorY$1({
  y1: Y1,
  y2: Y2,
  y: Y = Y1
}, cy) {
  return Y1 && Y2 ? i => (Y1[i] + Y2[i]) / 2 : Y ? i => Y[i] : () => cy;
}

function inferFontVariant$2(scale) {
  return isOrdinalScale(scale) && scale.interval === undefined ? undefined : "tabular-nums";
}

function legendRamp(color, options) {
  let {
    label = color.label,
    tickSize = 6,
    width = 240,
    height = 44 + tickSize,
    marginTop = 18,
    marginRight = 0,
    marginBottom = 16 + tickSize,
    marginLeft = 0,
    style,
    ticks = (width - marginLeft - marginRight) / 64,
    tickFormat,
    fontVariant = inferFontVariant$2(color),
    round = true,
    opacity,
    className
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  opacity = maybeNumberChannel(opacity)[1];
  if (tickFormat === null) tickFormat = () => null;
  const svg = create("svg", context).attr("class", `${className}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`).call(svg =>
  // Warning: if you edit this, change defaultClassName.
  svg.append("style").text(`:where(.${className}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${className}-ramp text) {
  white-space: pre;
}`)).call(applyInlineStyles, style);
  let tickAdjust = g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
  let x;

  // Some D3 scales use scale.interpolate, some scale.interpolator, and some
  // scale.round; this normalizes the API so it works with all scale types.
  const applyRange = round ? (x, range) => x.rangeRound(range) : (x, range) => x.range(range);
  const {
    type,
    domain,
    range,
    interpolate,
    scale,
    pivot
  } = color;

  // Continuous
  if (interpolate) {
    // Often interpolate is a “fixed” interpolator on the [0, 1] interval, as
    // with a built-in color scheme, but sometimes it is a function that takes
    // two arguments and is used in conjunction with the range.
    const interpolator = range === undefined ? interpolate : piecewise(interpolate.length === 1 ? interpolatePiecewise(interpolate) : interpolate, range);

    // Construct a D3 scale of the same type, but with a range that evenly
    // divides the horizontal extent of the legend. (In the common case, the
    // domain.length is two, and so the range is simply the extent.) For a
    // diverging scale, we need an extra point in the range for the pivot such
    // that the pivot is always drawn in the middle.
    x = applyRange(scale.copy(), quantize(interpolateNumber(marginLeft, width - marginRight), Math.min(domain.length + (pivot !== undefined), range === undefined ? Infinity : range.length)));

    // Construct a 256×1 canvas, filling each pixel using the interpolator.
    const n = 256;
    const canvas = context.document.createElement("canvas");
    canvas.width = n;
    canvas.height = 1;
    const context2 = canvas.getContext("2d");
    for (let i = 0, j = n - 1; i < n; ++i) {
      context2.fillStyle = interpolator(i / j);
      context2.fillRect(i, 0, 1, 1);
    }
    svg.append("image").attr("opacity", opacity).attr("x", marginLeft).attr("y", marginTop).attr("width", width - marginLeft - marginRight).attr("height", height - marginTop - marginBottom).attr("preserveAspectRatio", "none").attr("xlink:href", canvas.toDataURL());
  }

  // Threshold
  else if (type === "threshold") {
    const thresholds = domain;
    const thresholdFormat = tickFormat === undefined ? d => d : typeof tickFormat === "string" ? format$1(tickFormat) : tickFormat;

    // Construct a linear scale with evenly-spaced ticks for each of the
    // thresholds; the domain extends one beyond the threshold extent.
    x = applyRange(linear().domain([-1, range.length - 1]), [marginLeft, width - marginRight]);
    svg.append("g").attr("fill-opacity", opacity).selectAll().data(range).enter().append("rect").attr("x", (d, i) => x(i - 1)).attr("y", marginTop).attr("width", (d, i) => x(i) - x(i - 1)).attr("height", height - marginTop - marginBottom).attr("fill", d => d);
    ticks = map(thresholds, (_, i) => i);
    tickFormat = i => thresholdFormat(thresholds[i], i);
  }

  // Ordinal (hopefully!)
  else {
    x = applyRange(band().domain(domain), [marginLeft, width - marginRight]);
    svg.append("g").attr("fill-opacity", opacity).selectAll().data(domain).enter().append("rect").attr("x", x).attr("y", marginTop).attr("width", Math.max(0, x.bandwidth() - 1)).attr("height", height - marginTop - marginBottom).attr("fill", scale);
    tickAdjust = () => {};
  }
  svg.append("g").attr("transform", `translate(0,${height - marginBottom})`).call(axisBottom(x).ticks(Array.isArray(ticks) ? null : ticks, typeof tickFormat === "string" ? tickFormat : undefined).tickFormat(typeof tickFormat === "function" ? tickFormat : undefined).tickSize(tickSize).tickValues(Array.isArray(ticks) ? ticks : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", impliedString(fontVariant, "normal")).call(tickAdjust).call(g => g.select(".domain").remove());
  if (label !== undefined) {
    svg.append("text").attr("x", marginLeft).attr("y", marginTop - 6).attr("fill", "currentColor") // TODO move to stylesheet?
    .attr("font-weight", "bold").text(label);
  }
  return svg.node();
}

const radians = Math.PI / 180;

function markers(mark, {
  marker,
  markerStart = marker,
  markerMid = marker,
  markerEnd = marker
} = {}) {
  mark.markerStart = maybeMarker(markerStart);
  mark.markerMid = maybeMarker(markerMid);
  mark.markerEnd = maybeMarker(markerEnd);
}
function maybeMarker(marker) {
  if (marker == null || marker === false) return null;
  if (marker === true) return markerCircleFill;
  if (typeof marker === "function") return marker;
  switch (`${marker}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return markerArrow("auto");
    case "arrow-reverse":
      return markerArrow("auto-start-reverse");
    case "dot":
      return markerDot;
    case "circle":
    case "circle-fill":
      return markerCircleFill;
    case "circle-stroke":
      return markerCircleStroke;
    case "tick":
      return markerTick("auto");
    case "tick-x":
      return markerTick(90);
    case "tick-y":
      return markerTick(0);
  }
  throw new Error(`invalid marker: ${marker}`);
}
function markerArrow(orient) {
  return (color, context) => create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", orient).attr("fill", "none").attr("stroke", color).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call(marker => marker.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function markerDot(color, context) {
  return create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", color).attr("stroke", "none").call(marker => marker.append("circle").attr("r", 2.5)).node();
}
function markerCircleFill(color, context) {
  return create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", color).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call(marker => marker.append("circle").attr("r", 3)).node();
}
function markerCircleStroke(color, context) {
  return create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", color).attr("stroke-width", 1.5).call(marker => marker.append("circle").attr("r", 3)).node();
}
function markerTick(orient) {
  return (color, context) => create("svg:marker", context).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", orient).attr("stroke", color).call(marker => marker.append("path").attr("d", "M0,-3v6")).node();
}
let nextMarkerId = 0;
function applyMarkers(path, mark, {
  stroke: S
}, context) {
  return applyMarkersColor(path, mark, S && (i => S[i]), context);
}
function applyGroupedMarkers(path, mark, {
  stroke: S
}, context) {
  return applyMarkersColor(path, mark, S && (([i]) => S[i]), context);
}
function applyMarkersColor(path, {
  markerStart,
  markerMid,
  markerEnd,
  stroke
}, strokeof = () => stroke, context) {
  const iriByMarkerColor = new Map();
  function applyMarker(marker) {
    return function (i) {
      const color = strokeof(i);
      let iriByColor = iriByMarkerColor.get(marker);
      if (!iriByColor) iriByMarkerColor.set(marker, iriByColor = new Map());
      let iri = iriByColor.get(color);
      if (!iri) {
        const node = this.parentNode.insertBefore(marker(color, context), this);
        const id = `plot-marker-${++nextMarkerId}`;
        node.setAttribute("id", id);
        iriByColor.set(color, iri = `url(#${id})`);
      }
      return iri;
    };
  }
  if (markerStart) path.attr("marker-start", applyMarker(markerStart));
  if (markerMid) path.attr("marker-mid", applyMarker(markerMid));
  if (markerEnd) path.attr("marker-end", applyMarker(markerEnd));
}

function maybeInsetX({
  inset,
  insetLeft,
  insetRight,
  ...options
} = {}) {
  [insetLeft, insetRight] = maybeInset(inset, insetLeft, insetRight);
  return {
    inset,
    insetLeft,
    insetRight,
    ...options
  };
}
function maybeInsetY({
  inset,
  insetTop,
  insetBottom,
  ...options
} = {}) {
  [insetTop, insetBottom] = maybeInset(inset, insetTop, insetBottom);
  return {
    inset,
    insetTop,
    insetBottom,
    ...options
  };
}
function maybeInset(inset, inset1, inset2) {
  return inset === undefined && inset1 === undefined && inset2 === undefined ? offset ? [1, 0] : [0.5, 0.5] : [inset1, inset2];
}

// The interval may be specified either as x: {value, interval} or as {x,
// interval}. The former can be used to specify separate intervals for x and y,
// for example with Plot.rect.
function maybeIntervalValue(value, {
  interval
}) {
  value = {
    ...maybeValue(value)
  };
  value.interval = maybeInterval(value.interval === undefined ? interval : value.interval);
  return value;
}
function maybeIntervalK(k, maybeInsetK, options, trivial) {
  const {
    [k]: v,
    [`${k}1`]: v1,
    [`${k}2`]: v2
  } = options;
  const {
    value,
    interval
  } = maybeIntervalValue(v, options);
  if (value == null || interval == null && !trivial) return options;
  const label = labelof(v);
  if (interval == null) {
    let V;
    const kv = {
      transform: data => V || (V = valueof(data, value)),
      label
    };
    return {
      ...options,
      [k]: undefined,
      [`${k}1`]: v1 === undefined ? kv : v1,
      [`${k}2`]: v2 === undefined && !(v1 === v2 && trivial) ? kv : v2
    };
  }
  let D1, V1;
  function transform(data) {
    if (V1 !== undefined && data === D1) return V1; // memoize
    return V1 = map(valueof(D1 = data, value), v => interval.floor(v));
  }
  return maybeInsetK({
    ...options,
    [k]: undefined,
    [`${k}1`]: v1 === undefined ? {
      transform,
      label
    } : v1,
    [`${k}2`]: v2 === undefined ? {
      transform: data => transform(data).map(v => interval.offset(v)),
      label
    } : v2
  });
}
function maybeIntervalMidK(k, maybeInsetK, options) {
  const {
    [k]: v
  } = options;
  const {
    value,
    interval
  } = maybeIntervalValue(v, options);
  if (value == null || interval == null) return options;
  return maybeInsetK({
    ...options,
    [k]: {
      label: labelof(v),
      transform: data => {
        const V1 = map(valueof(data, value), v => interval.floor(v));
        const V2 = V1.map(v => interval.offset(v));
        return V1.map(isTemporal(V1) ? (v1, v2) => v1 == null || isNaN(v1 = +v1) || (v2 = V2[v2], v2 == null) || isNaN(v2 = +v2) ? undefined : new Date((v1 + v2) / 2) : (v1, v2) => v1 == null || (v2 = V2[v2], v2 == null) ? NaN : (+v1 + +v2) / 2);
      }
    }
  });
}
function maybeTrivialIntervalX(options = {}) {
  return maybeIntervalK("x", maybeInsetX, options, true);
}
function maybeIntervalX(options = {}) {
  return maybeIntervalK("x", maybeInsetX, options);
}
function maybeIntervalY(options = {}) {
  return maybeIntervalK("y", maybeInsetY, options);
}
function maybeIntervalMidX(options = {}) {
  return maybeIntervalMidK("x", maybeInsetX, options);
}
function maybeIntervalMidY(options = {}) {
  return maybeIntervalMidK("y", maybeInsetY, options);
}

const defaults$6 = {
  ariaLabel: "rule",
  fill: null,
  stroke: "currentColor"
};
class RuleX extends Mark {
  constructor(data, options = {}) {
    const {
      x,
      y1,
      y2,
      inset = 0,
      insetTop = inset,
      insetBottom = inset
    } = options;
    super(data, {
      x: {
        value: x,
        scale: "x",
        optional: true
      },
      y1: {
        value: y1,
        scale: "y",
        optional: true
      },
      y2: {
        value: y2,
        scale: "y",
        optional: true
      }
    }, withTip(options, "x"), defaults$6);
    this.insetTop = number(insetTop);
    this.insetBottom = number(insetBottom);
    markers(this, options);
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x,
      y
    } = scales;
    const {
      x: X,
      y1: Y1,
      y2: Y2
    } = channels;
    const {
      width,
      height,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom
    } = dimensions;
    const {
      insetTop,
      insetBottom
    } = this;
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, {
      x: X && x
    }, offset, 0).call(g => g.selectAll().data(index).enter().append("line").call(applyDirectStyles, this).attr("x1", X ? i => X[i] : (marginLeft + width - marginRight) / 2).attr("x2", X ? i => X[i] : (marginLeft + width - marginRight) / 2).attr("y1", Y1 && !isCollapsed(y) ? i => Y1[i] + insetTop : marginTop + insetTop).attr("y2", Y2 && !isCollapsed(y) ? y.bandwidth ? i => Y2[i] + y.bandwidth() - insetBottom : i => Y2[i] - insetBottom : height - marginBottom - insetBottom).call(applyChannelStyles, this, channels).call(applyMarkers, this, channels, context)).node();
  }
}
class RuleY extends Mark {
  constructor(data, options = {}) {
    const {
      x1,
      x2,
      y,
      inset = 0,
      insetRight = inset,
      insetLeft = inset
    } = options;
    super(data, {
      y: {
        value: y,
        scale: "y",
        optional: true
      },
      x1: {
        value: x1,
        scale: "x",
        optional: true
      },
      x2: {
        value: x2,
        scale: "x",
        optional: true
      }
    }, withTip(options, "y"), defaults$6);
    this.insetRight = number(insetRight);
    this.insetLeft = number(insetLeft);
    markers(this, options);
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x,
      y
    } = scales;
    const {
      y: Y,
      x1: X1,
      x2: X2
    } = channels;
    const {
      width,
      height,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom
    } = dimensions;
    const {
      insetLeft,
      insetRight
    } = this;
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, {
      y: Y && y
    }, 0, offset).call(g => g.selectAll().data(index).enter().append("line").call(applyDirectStyles, this).attr("x1", X1 && !isCollapsed(x) ? i => X1[i] + insetLeft : marginLeft + insetLeft).attr("x2", X2 && !isCollapsed(x) ? x.bandwidth ? i => X2[i] + x.bandwidth() - insetRight : i => X2[i] - insetRight : width - marginRight - insetRight).attr("y1", Y ? i => Y[i] : (marginTop + height - marginBottom) / 2).attr("y2", Y ? i => Y[i] : (marginTop + height - marginBottom) / 2).call(applyChannelStyles, this, channels).call(applyMarkers, this, channels, context)).node();
  }
}
function ruleX(data, options) {
  let {
    x = identity$1,
    y,
    y1,
    y2,
    ...rest
  } = maybeIntervalY(options);
  [y1, y2] = maybeOptionalZero(y, y1, y2);
  return new RuleX(data, {
    ...rest,
    x,
    y1,
    y2
  });
}
function ruleY(data, options) {
  let {
    y = identity$1,
    x,
    x1,
    x2,
    ...rest
  } = maybeIntervalX(options);
  [x1, x2] = maybeOptionalZero(x, x1, x2);
  return new RuleY(data, {
    ...rest,
    y,
    x1,
    x2
  });
}

// For marks specified either as [0, x] or [x1, x2], or nothing.
function maybeOptionalZero(x, x1, x2) {
  if (x == null) {
    if (x1 === undefined) {
      if (x2 !== undefined) return [0, x2];
    } else {
      if (x2 === undefined) return [0, x1];
    }
  } else if (x1 === undefined) {
    return x2 === undefined ? [0, x] : [x, x2];
  } else if (x2 === undefined) {
    return [x, x1];
  }
  return [x1, x2];
}

function template(strings, ...parts) {
  let n = parts.length;

  // If any of the interpolated parameters are strings rather than functions,
  // bake them into the template to optimize performance during render.
  for (let j = 0, copy = true; j < n; ++j) {
    if (typeof parts[j] !== "function") {
      if (copy) {
        strings = strings.slice(); // copy before mutate
        copy = false;
      }
      strings.splice(j, 2, strings[j] + parts[j] + strings[j + 1]);
      parts.splice(j, 1);
      --j, --n;
    }
  }
  return i => {
    let s = strings[0];
    for (let j = 0; j < n; ++j) {
      s += parts[j](i) + strings[j + 1];
    }
    return s;
  };
}

const defaults$5 = {
  ariaLabel: "text",
  strokeLinejoin: "round",
  strokeWidth: 3,
  paintOrder: "stroke"
};
const softHyphen = "\u00ad";
class Text extends Mark {
  constructor(data, options = {}) {
    const {
      x,
      y,
      text = isIterable(data) && isTextual(data) ? identity$1 : indexOf,
      frameAnchor,
      textAnchor = /right$/i.test(frameAnchor) ? "end" : /left$/i.test(frameAnchor) ? "start" : "middle",
      lineAnchor = /^top/i.test(frameAnchor) ? "top" : /^bottom/i.test(frameAnchor) ? "bottom" : "middle",
      lineHeight = 1,
      lineWidth = Infinity,
      textOverflow,
      monospace,
      fontFamily = monospace ? "ui-monospace, monospace" : undefined,
      fontSize,
      fontStyle,
      fontVariant,
      fontWeight,
      rotate
    } = options;
    const [vrotate, crotate] = maybeNumberChannel(rotate, 0);
    const [vfontSize, cfontSize] = maybeFontSizeChannel(fontSize);
    super(data, {
      x: {
        value: x,
        scale: "x",
        optional: true
      },
      y: {
        value: y,
        scale: "y",
        optional: true
      },
      fontSize: {
        value: vfontSize,
        optional: true
      },
      rotate: {
        value: numberChannel(vrotate),
        optional: true
      },
      text: {
        value: text,
        filter: nonempty,
        optional: true
      }
    }, options, defaults$5);
    this.rotate = crotate;
    this.textAnchor = impliedString(textAnchor, "middle");
    this.lineAnchor = keyword(lineAnchor, "lineAnchor", ["top", "middle", "bottom"]);
    this.lineHeight = +lineHeight;
    this.lineWidth = +lineWidth;
    this.textOverflow = maybeTextOverflow(textOverflow);
    this.monospace = !!monospace;
    this.fontFamily = string(fontFamily);
    this.fontSize = cfontSize;
    this.fontStyle = string(fontStyle);
    this.fontVariant = string(fontVariant);
    this.fontWeight = string(fontWeight);
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
    if (!(this.lineWidth >= 0)) throw new Error(`invalid lineWidth: ${lineWidth}`);
    this.splitLines = splitter(this);
    this.clipLine = clipper(this);
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x,
      y
    } = scales;
    const {
      x: X,
      y: Y,
      rotate: R,
      text: T,
      title: TL,
      fontSize: FS
    } = channels;
    const {
      rotate
    } = this;
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyIndirectTextStyles, this, T, dimensions).call(applyTransform, this, {
      x: X && x,
      y: Y && y
    }).call(g => g.selectAll().data(index).enter().append("text").call(applyDirectStyles, this).call(applyMultilineText, this, T, TL).attr("transform", template`translate(${X ? i => X[i] : cx},${Y ? i => Y[i] : cy})${R ? i => ` rotate(${R[i]})` : rotate ? ` rotate(${rotate})` : ``}`).call(applyAttr, "font-size", FS && (i => FS[i])).call(applyChannelStyles, this, channels)).node();
  }
}
function maybeTextOverflow(textOverflow) {
  return textOverflow == null ? null : keyword(textOverflow, "textOverflow", ["clip",
  // shorthand for clip-end
  "ellipsis",
  // … ellipsis-end
  "clip-start", "clip-end", "ellipsis-start", "ellipsis-middle", "ellipsis-end"]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function applyMultilineText(selection, mark, T, TL) {
  if (!T) return;
  const {
    lineAnchor,
    lineHeight,
    textOverflow,
    splitLines,
    clipLine
  } = mark;
  selection.each(function (i) {
    const lines = splitLines(formatDefault(T[i]) ?? "").map(clipLine);
    const n = lines.length;
    const y = lineAnchor === "top" ? 0.71 : lineAnchor === "bottom" ? 1 - n : (164 - n * 100) / 200;
    if (n > 1) {
      let m = 0;
      for (let i = 0; i < n; ++i) {
        ++m;
        if (!lines[i]) continue;
        const tspan = this.ownerDocument.createElementNS(namespaces.svg, "tspan");
        tspan.setAttribute("x", 0);
        if (i === m - 1) tspan.setAttribute("y", `${(y + i) * lineHeight}em`);else tspan.setAttribute("dy", `${m * lineHeight}em`);
        tspan.textContent = lines[i];
        this.appendChild(tspan);
        m = 0;
      }
    } else {
      if (y) this.setAttribute("y", `${y * lineHeight}em`);
      this.textContent = lines[0];
    }
    if (textOverflow && !TL && lines[0] !== T[i]) {
      const title = this.ownerDocument.createElementNS(namespaces.svg, "title");
      title.textContent = T[i];
      this.appendChild(title);
    }
  });
}
function text(data, {
  x,
  y,
  ...options
} = {}) {
  if (options.frameAnchor === undefined) [x, y] = maybeTuple(x, y);
  return new Text(data, {
    ...options,
    x,
    y
  });
}
function textX(data, {
  x = identity$1,
  ...options
} = {}) {
  return new Text(data, maybeIntervalMidY({
    ...options,
    x
  }));
}
function textY(data, {
  y = identity$1,
  ...options
} = {}) {
  return new Text(data, maybeIntervalMidX({
    ...options,
    y
  }));
}
function applyIndirectTextStyles(selection, mark, T) {
  applyAttr(selection, "text-anchor", mark.textAnchor);
  applyAttr(selection, "font-family", mark.fontFamily);
  applyAttr(selection, "font-size", mark.fontSize);
  applyAttr(selection, "font-style", mark.fontStyle);
  applyAttr(selection, "font-variant", mark.fontVariant === undefined ? inferFontVariant$1(T) : mark.fontVariant);
  applyAttr(selection, "font-weight", mark.fontWeight);
}
function inferFontVariant$1(T) {
  return T && (isNumeric(T) || isTemporal(T)) ? "tabular-nums" : undefined;
}

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
const fontSizes = new Set([
// global keywords
"inherit", "initial", "revert", "unset",
// absolute keywords
"xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large",
// relative keywords
"larger", "smaller"]);

// The font size may be expressed as a constant in the following forms:
// - number in pixels
// - string keyword: see above
// - string <length>: e.g., "12px"
// - string <percentage>: e.g., "80%"
// Anything else is assumed to be a channel definition.
function maybeFontSizeChannel(fontSize) {
  if (fontSize == null || typeof fontSize === "number") return [undefined, fontSize];
  if (typeof fontSize !== "string") return [fontSize, undefined];
  fontSize = fontSize.trim().toLowerCase();
  return fontSizes.has(fontSize) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(fontSize) ? [undefined, fontSize] : [fontSize, undefined];
}

// This is a greedy algorithm for line wrapping. It would be better to use the
// Knuth–Plass line breaking algorithm (but that would be much more complex).
// https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap
function lineWrap(input, maxWidth, widthof) {
  const lines = [];
  let lineStart,
    lineEnd = 0;
  for (const [wordStart, wordEnd, required] of lineBreaks(input)) {
    // Record the start of a line. This isn’t the same as the previous line’s
    // end because we often skip spaces between lines.
    if (lineStart === undefined) lineStart = wordStart;

    // If the current line is not empty, and if adding the current word would
    // make the line longer than the allowed width, then break the line at the
    // previous word end.
    if (lineEnd > lineStart && widthof(input, lineStart, wordEnd) > maxWidth) {
      lines.push(input.slice(lineStart, lineEnd) + (input[lineEnd - 1] === softHyphen ? "-" : ""));
      lineStart = wordStart;
    }

    // If this is a required break (a newline), emit the line and reset.
    if (required) {
      lines.push(input.slice(lineStart, wordEnd));
      lineStart = undefined;
      continue;
    }

    // Extend the current line to include the new word.
    lineEnd = wordEnd;
  }
  return lines;
}

// This is a rudimentary (and U.S.-centric) algorithm for finding opportunities
// to break lines between words. A better and far more comprehensive approach
// would be to use the official Unicode Line Breaking Algorithm.
// https://unicode.org/reports/tr14/
function* lineBreaks(input) {
  let i = 0,
    j = 0;
  const n = input.length;
  while (j < n) {
    let k = 1;
    switch (input[j]) {
      case softHyphen:
      case "-":
        // hyphen
        ++j;
        yield [i, j, false];
        i = j;
        break;
      case " ":
        yield [i, j, false];
        while (input[++j] === " "); // skip multiple spaces
        i = j;
        break;
      case "\r":
        if (input[j + 1] === "\n") ++k;
      // falls through
      case "\n":
        yield [i, j, true];
        j += k;
        i = j;
        break;
      default:
        ++j;
        break;
    }
  }
  yield [i, j, true];
}

// Computed as round(measureText(text).width * 10) at 10px system-ui. For
// characters that are not represented in this map, we’d ideally want to use a
// weighted average of what we expect to see. But since we don’t really know
// what that is, using “e” seems reasonable.
const defaultWidthMap = {
  a: 56,
  b: 63,
  c: 57,
  d: 63,
  e: 58,
  f: 37,
  g: 62,
  h: 60,
  i: 26,
  j: 26,
  k: 55,
  l: 26,
  m: 88,
  n: 60,
  o: 60,
  p: 62,
  q: 62,
  r: 39,
  s: 54,
  t: 38,
  u: 60,
  v: 55,
  w: 79,
  x: 54,
  y: 55,
  z: 55,
  A: 69,
  B: 67,
  C: 73,
  D: 74,
  E: 61,
  F: 58,
  G: 76,
  H: 75,
  I: 28,
  J: 55,
  K: 67,
  L: 58,
  M: 89,
  N: 75,
  O: 78,
  P: 65,
  Q: 78,
  R: 67,
  S: 65,
  T: 65,
  U: 75,
  V: 69,
  W: 98,
  X: 69,
  Y: 67,
  Z: 67,
  0: 64,
  1: 48,
  2: 62,
  3: 64,
  4: 66,
  5: 63,
  6: 65,
  7: 58,
  8: 65,
  9: 65,
  " ": 29,
  "!": 32,
  '"': 49,
  "'": 31,
  "(": 39,
  ")": 39,
  ",": 31,
  "-": 48,
  ".": 31,
  "/": 32,
  ":": 31,
  ";": 31,
  "?": 52,
  "‘": 31,
  "’": 31,
  "“": 47,
  "”": 47,
  "…": 82
};

// This is a rudimentary (and U.S.-centric) algorithm for measuring the width of
// a string based on a technique of Gregor Aisch; it assumes that individual
// characters are laid out independently and does not implement the Unicode
// grapheme cluster breaking algorithm. It does understand code points, though,
// and so treats things like emoji as having the width of a lowercase e (and
// should be equivalent to using for-of to iterate over code points, while also
// being fast). TODO Optimize this by noting that we often re-measure characters
// that were previously measured?
// http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries
// https://exploringjs.com/impatient-js/ch_strings.html#atoms-of-text
function defaultWidth(text, start = 0, end = text.length) {
  let sum = 0;
  for (let i = start; i < end; i = readCharacter(text, i)) {
    sum += defaultWidthMap[text[i]] ?? (isPictographic(text, i) ? 120 : defaultWidthMap.e);
  }
  return sum;
}

// Even for monospaced text, we can’t assume that the number of UTF-16 code
// points (i.e., the length of a string) corresponds to the number of visible
// characters; we still have to count graphemes. And note that pictographic
// characters such as emojis are typically not monospaced!
function monospaceWidth(text, start = 0, end = text.length) {
  let sum = 0;
  for (let i = start; i < end; i = readCharacter(text, i)) {
    sum += isPictographic(text, i) ? 126 : 63;
  }
  return sum;
}
function splitter({
  monospace,
  lineWidth,
  textOverflow
}) {
  if (textOverflow != null || lineWidth == Infinity) return text => text.split(/\r\n?|\n/g);
  const widthof = monospace ? monospaceWidth : defaultWidth;
  const maxWidth = lineWidth * 100;
  return text => lineWrap(text, maxWidth, widthof);
}
function clipper({
  monospace,
  lineWidth,
  textOverflow
}) {
  if (textOverflow == null || lineWidth == Infinity) return text => text;
  const widthof = monospace ? monospaceWidth : defaultWidth;
  const maxWidth = lineWidth * 100;
  switch (textOverflow) {
    case "clip-start":
      return text => clipStart(text, maxWidth, widthof, "");
    case "clip-end":
      return text => clipEnd(text, maxWidth, widthof, "");
    case "ellipsis-start":
      return text => clipStart(text, maxWidth, widthof, ellipsis);
    case "ellipsis-middle":
      return text => clipMiddle(text, maxWidth, widthof, ellipsis);
    case "ellipsis-end":
      return text => clipEnd(text, maxWidth, widthof, ellipsis);
  }
}
const ellipsis = "…";

// Cuts the given text to the given width, using the specified widthof function;
// the returned [index, error] guarantees text.slice(0, index) fits within the
// specified width with the given error. If the text fits naturally within the
// given width, returns [-1, 0]. If the text needs cutting, the given inset
// specifies how much space (in the same units as width and widthof) to reserve
// for a possible ellipsis character.
function cut(text, width, widthof, inset) {
  const I = []; // indexes of read character boundaries
  let w = 0; // current line width
  for (let i = 0, j = 0, n = text.length; i < n; i = j) {
    j = readCharacter(text, i); // read the next character
    const l = widthof(text, i, j); // current character width
    if (w + l > width) {
      w += inset;
      while (w > width && i > 0) j = i, i = I.pop(), w -= widthof(text, i, j); // remove excess
      return [i, width - w];
    }
    w += l;
    I.push(i);
  }
  return [-1, 0];
}
function clipEnd(text, width, widthof, ellipsis) {
  text = text.trim(); // ignore leading and trailing whitespace
  const e = widthof(ellipsis);
  const [i] = cut(text, width, widthof, e);
  return i < 0 ? text : text.slice(0, i).trimEnd() + ellipsis;
}
function clipMiddle(text, width, widthof, ellipsis) {
  text = text.trim(); // ignore leading and trailing whitespace
  const w = widthof(text);
  if (w <= width) return text;
  const e = widthof(ellipsis) / 2;
  const [i, ei] = cut(text, width / 2, widthof, e);
  const [j] = cut(text, w - width / 2 - ei + e, widthof, -e); // TODO read spaces?
  return j < 0 ? ellipsis : text.slice(0, i).trimEnd() + ellipsis + text.slice(readCharacter(text, j)).trimStart();
}
function clipStart(text, width, widthof, ellipsis) {
  text = text.trim(); // ignore leading and trailing whitespace
  const w = widthof(text);
  if (w <= width) return text;
  const e = widthof(ellipsis);
  const [j] = cut(text, w - width + e, widthof, -e); // TODO read spaces?
  return j < 0 ? ellipsis : ellipsis + text.slice(readCharacter(text, j)).trimStart();
}
const reCombiner = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy;
const rePictographic = /\p{Extended_Pictographic}/uy;

// Reads a single “character” element from the given text starting at the given
// index, returning the index after the read character. Ideally, this implements
// the Unicode text segmentation algorithm and understands grapheme cluster
// boundaries, etc., but in practice this is only smart enough to detect UTF-16
// surrogate pairs, combining marks, and zero-width joiner (zwj) sequences such
// as emoji skin color modifiers. https://unicode.org/reports/tr29/
function readCharacter(text, i) {
  i += isSurrogatePair(text, i) ? 2 : 1;
  if (isCombiner(text, i)) i = reCombiner.lastIndex;
  if (isZeroWidthJoiner(text, i)) return readCharacter(text, i + 1);
  return i;
}

// We avoid more expensive regex tests involving Unicode property classes by
// first checking for the common case of 7-bit ASCII characters.
function isAscii(text, i) {
  return text.charCodeAt(i) < 0x80;
}
function isSurrogatePair(text, i) {
  const hi = text.charCodeAt(i);
  if (hi >= 0xd800 && hi < 0xdc00) {
    const lo = text.charCodeAt(i + 1);
    return lo >= 0xdc00 && lo < 0xe000;
  }
  return false;
}
function isZeroWidthJoiner(text, i) {
  return text.charCodeAt(i) === 0x200d;
}
function isCombiner(text, i) {
  return isAscii(text, i) ? false : (reCombiner.lastIndex = i, reCombiner.test(text));
}
function isPictographic(text, i) {
  return isAscii(text, i) ? false : (rePictographic.lastIndex = i, rePictographic.test(text));
}

const defaults$4 = {
  ariaLabel: "vector",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinejoin: "round",
  strokeLinecap: "round"
};
const defaultRadius = 3.5;

// The size of the arrowhead is proportional to its length, but we still allow
// the relative size of the head to be controlled via the mark’s width option;
// doubling the default radius will produce an arrowhead that is twice as big.
// That said, we’ll probably want a arrow with a fixed head size, too.
const wingRatio = defaultRadius * 5;
const shapeArrow = {
  draw(context, l, r) {
    const wing = l * r / wingRatio;
    context.moveTo(0, 0);
    context.lineTo(0, -l);
    context.moveTo(-wing, wing - l);
    context.lineTo(0, -l);
    context.lineTo(wing, wing - l);
  }
};
const shapeSpike = {
  draw(context, l, r) {
    context.moveTo(-r, 0);
    context.lineTo(0, -l);
    context.lineTo(r, 0);
  }
};
const shapes = new Map([["arrow", shapeArrow], ["spike", shapeSpike]]);
function isShapeObject(value) {
  return value && typeof value.draw === "function";
}
function maybeShape(shape) {
  if (isShapeObject(shape)) return shape;
  const value = shapes.get(`${shape}`.toLowerCase());
  if (value) return value;
  throw new Error(`invalid shape: ${shape}`);
}
class Vector extends Mark {
  constructor(data, options = {}) {
    const {
      x,
      y,
      r = defaultRadius,
      length,
      rotate,
      shape = shapeArrow,
      anchor = "middle",
      frameAnchor
    } = options;
    const [vl, cl] = maybeNumberChannel(length, 12);
    const [vr, cr] = maybeNumberChannel(rotate, 0);
    super(data, {
      x: {
        value: x,
        scale: "x",
        optional: true
      },
      y: {
        value: y,
        scale: "y",
        optional: true
      },
      length: {
        value: vl,
        scale: "length",
        optional: true
      },
      rotate: {
        value: vr,
        optional: true
      }
    }, options, defaults$4);
    this.r = +r;
    this.length = cl;
    this.rotate = cr;
    this.shape = maybeShape(shape);
    this.anchor = keyword(anchor, "anchor", ["start", "middle", "end"]);
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x,
      y
    } = scales;
    const {
      x: X,
      y: Y,
      length: L,
      rotate: A
    } = channels;
    const {
      length,
      rotate,
      anchor,
      shape,
      r
    } = this;
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, {
      x: X && x,
      y: Y && y
    }).call(g => g.selectAll().data(index).enter().append("path").call(applyDirectStyles, this).attr("transform", template`translate(${X ? i => X[i] : cx},${Y ? i => Y[i] : cy})${A ? i => ` rotate(${A[i]})` : rotate ? ` rotate(${rotate})` : ``}${anchor === "start" ? `` : anchor === "end" ? L ? i => ` translate(0,${L[i]})` : ` translate(0,${length})` : L ? i => ` translate(0,${L[i] / 2})` : ` translate(0,${length / 2})`}`).attr("d", L ? i => {
      const p = pathRound();
      shape.draw(p, L[i], r);
      return p;
    } : (() => {
      const p = pathRound();
      shape.draw(p, length, r);
      return p;
    })()).call(applyChannelStyles, this, channels)).node();
  }
}
function vectorX(data, options = {}) {
  const {
    x = identity$1,
    ...rest
  } = options;
  return new Vector(data, {
    ...rest,
    x
  });
}
function vectorY(data, options = {}) {
  const {
    y = identity$1,
    ...rest
  } = options;
  return new Vector(data, {
    ...rest,
    y
  });
}

function maybeData(data, options) {
  if (arguments.length < 2 && !isIterable(data)) options = data, data = null;
  if (options === undefined) options = {};
  return [data, options];
}
function maybeAnchor({
  anchor
} = {}, anchors) {
  return anchor === undefined ? anchors[0] : keyword(anchor, "anchor", anchors);
}
function anchorY(options) {
  return maybeAnchor(options, ["left", "right"]);
}
function anchorFy(options) {
  return maybeAnchor(options, ["right", "left"]);
}
function anchorX(options) {
  return maybeAnchor(options, ["bottom", "top"]);
}
function anchorFx(options) {
  return maybeAnchor(options, ["top", "bottom"]);
}
function axisY() {
  const [data, options] = maybeData(...arguments);
  return axisKy("y", anchorY(options), data, options);
}
function axisFy() {
  const [data, options] = maybeData(...arguments);
  return axisKy("fy", anchorFy(options), data, options);
}
function axisX() {
  const [data, options] = maybeData(...arguments);
  return axisKx("x", anchorX(options), data, options);
}
function axisFx() {
  const [data, options] = maybeData(...arguments);
  return axisKx("fx", anchorFx(options), data, options);
}
function axisKy(k, anchor, data, {
  color = "currentColor",
  opacity = 1,
  stroke = color,
  strokeOpacity = opacity,
  strokeWidth = 1,
  fill = color,
  fillOpacity = opacity,
  textAnchor,
  textStroke,
  textStrokeOpacity,
  textStrokeWidth,
  tickSize = k === "y" ? 6 : 0,
  tickPadding,
  tickRotate,
  x,
  margin,
  marginTop = margin === undefined ? 20 : margin,
  marginRight = margin === undefined ? anchor === "right" ? 40 : 0 : margin,
  marginBottom = margin === undefined ? 20 : margin,
  marginLeft = margin === undefined ? anchor === "left" ? 40 : 0 : margin,
  label,
  labelAnchor,
  labelArrow,
  labelOffset,
  ...options
}) {
  tickSize = number(tickSize);
  tickPadding = number(tickPadding);
  tickRotate = number(tickRotate);
  if (labelAnchor !== undefined) labelAnchor = keyword(labelAnchor, "labelAnchor", ["center", "top", "bottom"]);
  labelArrow = maybeLabelArrow(labelArrow);
  return marks(tickSize && !isNoneish(stroke) ? axisTickKy(k, anchor, data, {
    stroke,
    strokeOpacity,
    strokeWidth,
    tickSize,
    tickPadding,
    tickRotate,
    x,
    ...options
  }) : null, !isNoneish(fill) ? axisTextKy(k, anchor, data, {
    fill,
    fillOpacity,
    stroke: textStroke,
    strokeOpacity: textStrokeOpacity,
    strokeWidth: textStrokeWidth,
    textAnchor,
    tickSize,
    tickPadding,
    tickRotate,
    x,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...options
  }) : null, !isNoneish(fill) && label !== null ? text([], labelOptions({
    fill,
    fillOpacity,
    ...options
  }, function (data, facets, channels, scales, dimensions) {
    const scale = scales[k];
    const {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    } = k === "y" && dimensions.inset || dimensions;
    const cla = labelAnchor ?? (scale.bandwidth ? "center" : "top");
    const clo = labelOffset ?? (anchor === "right" ? marginRight : marginLeft) - 3;
    if (cla === "center") {
      this.textAnchor = undefined; // middle
      this.lineAnchor = anchor === "right" ? "bottom" : "top";
      this.frameAnchor = anchor;
      this.rotate = -90;
    } else {
      this.textAnchor = anchor === "right" ? "end" : "start";
      this.lineAnchor = cla;
      this.frameAnchor = `${cla}-${anchor}`;
      this.rotate = 0;
    }
    this.dy = cla === "top" ? 3 - marginTop : cla === "bottom" ? marginBottom - 3 : 0;
    this.dx = anchor === "right" ? clo : -clo;
    this.ariaLabel = `${k}-axis label`;
    return {
      facets: [[0]],
      channels: {
        text: {
          value: [formatAxisLabel(k, scale, {
            anchor,
            label,
            labelAnchor: cla,
            labelArrow
          })]
        }
      }
    };
  })) : null);
}
function axisKx(k, anchor, data, {
  color = "currentColor",
  opacity = 1,
  stroke = color,
  strokeOpacity = opacity,
  strokeWidth = 1,
  fill = color,
  fillOpacity = opacity,
  textAnchor,
  textStroke,
  textStrokeOpacity,
  textStrokeWidth,
  tickSize = k === "x" ? 6 : 0,
  tickPadding,
  tickRotate,
  y,
  margin,
  marginTop = margin === undefined ? anchor === "top" ? 30 : 0 : margin,
  marginRight = margin === undefined ? 20 : margin,
  marginBottom = margin === undefined ? anchor === "bottom" ? 30 : 0 : margin,
  marginLeft = margin === undefined ? 20 : margin,
  label,
  labelAnchor,
  labelArrow,
  labelOffset,
  ...options
}) {
  tickSize = number(tickSize);
  tickPadding = number(tickPadding);
  tickRotate = number(tickRotate);
  if (labelAnchor !== undefined) labelAnchor = keyword(labelAnchor, "labelAnchor", ["center", "left", "right"]);
  labelArrow = maybeLabelArrow(labelArrow);
  return marks(tickSize && !isNoneish(stroke) ? axisTickKx(k, anchor, data, {
    stroke,
    strokeOpacity,
    strokeWidth,
    tickSize,
    tickPadding,
    tickRotate,
    y,
    ...options
  }) : null, !isNoneish(fill) ? axisTextKx(k, anchor, data, {
    fill,
    fillOpacity,
    stroke: textStroke,
    strokeOpacity: textStrokeOpacity,
    strokeWidth: textStrokeWidth,
    textAnchor,
    tickSize,
    tickPadding,
    tickRotate,
    y,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...options
  }) : null, !isNoneish(fill) && label !== null ? text([], labelOptions({
    fill,
    fillOpacity,
    ...options
  }, function (data, facets, channels, scales, dimensions) {
    const scale = scales[k];
    const {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    } = k === "x" && dimensions.inset || dimensions;
    const cla = labelAnchor ?? (scale.bandwidth ? "center" : "right");
    const clo = labelOffset ?? (anchor === "top" ? marginTop : marginBottom) - 3;
    if (cla === "center") {
      this.frameAnchor = anchor;
      this.textAnchor = undefined; // middle
    } else {
      this.frameAnchor = `${anchor}-${cla}`;
      this.textAnchor = cla === "right" ? "end" : "start";
    }
    this.lineAnchor = anchor;
    this.dy = anchor === "top" ? -clo : clo;
    this.dx = cla === "right" ? marginRight - 3 : cla === "left" ? 3 - marginLeft : 0;
    this.ariaLabel = `${k}-axis label`;
    return {
      facets: [[0]],
      channels: {
        text: {
          value: [formatAxisLabel(k, scale, {
            anchor,
            label,
            labelAnchor: cla,
            labelArrow
          })]
        }
      }
    };
  })) : null);
}
function axisTickKy(k, anchor, data, {
  strokeWidth = 1,
  strokeLinecap = null,
  strokeLinejoin = null,
  facetAnchor = anchor + (k === "y" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  inset = 0,
  insetLeft = inset,
  insetRight = inset,
  dx = 0,
  y = k === "y" ? undefined : null,
  ...options
}) {
  return axisMark(vectorY, k, data, {
    ariaLabel: `${k}-axis tick`,
    ariaHidden: true
  }, {
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    facetAnchor,
    frameAnchor,
    y,
    ...options,
    dx: anchor === "left" ? +dx - offset + +insetLeft : +dx + offset - insetRight,
    anchor: "start",
    length: tickSize,
    shape: anchor === "left" ? shapeTickLeft : shapeTickRight
  });
}
function axisTickKx(k, anchor, data, {
  strokeWidth = 1,
  strokeLinecap = null,
  strokeLinejoin = null,
  facetAnchor = anchor + (k === "x" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  inset = 0,
  insetTop = inset,
  insetBottom = inset,
  dy = 0,
  x = k === "x" ? undefined : null,
  ...options
}) {
  return axisMark(vectorX, k, data, {
    ariaLabel: `${k}-axis tick`,
    ariaHidden: true
  }, {
    strokeWidth,
    strokeLinejoin,
    strokeLinecap,
    facetAnchor,
    frameAnchor,
    x,
    ...options,
    dy: anchor === "bottom" ? +dy - offset - insetBottom : +dy + offset + +insetTop,
    anchor: "start",
    length: tickSize,
    shape: anchor === "bottom" ? shapeTickBottom : shapeTickTop
  });
}
function axisTextKy(k, anchor, data, {
  facetAnchor = anchor + (k === "y" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  tickRotate = 0,
  tickPadding = Math.max(3, 9 - tickSize) + (Math.abs(tickRotate) > 60 ? 4 * Math.cos(tickRotate * radians) : 0),
  text,
  textAnchor = Math.abs(tickRotate) > 60 ? "middle" : anchor === "left" ? "end" : "start",
  lineAnchor = tickRotate > 60 ? "top" : tickRotate < -60 ? "bottom" : "middle",
  fontVariant,
  inset = 0,
  insetLeft = inset,
  insetRight = inset,
  dx = 0,
  y = k === "y" ? undefined : null,
  ...options
}) {
  return axisMark(textY, k, data, {
    ariaLabel: `${k}-axis tick label`
  }, {
    facetAnchor,
    frameAnchor,
    text,
    textAnchor,
    lineAnchor,
    fontVariant,
    rotate: tickRotate,
    y,
    ...options,
    dx: anchor === "left" ? +dx - tickSize - tickPadding + +insetLeft : +dx + +tickSize + +tickPadding - insetRight
  }, function (scale, data, ticks, tickFormat, channels) {
    if (fontVariant === undefined) this.fontVariant = inferFontVariant(scale);
    if (text === undefined) channels.text = inferTextChannel(scale, data, ticks, tickFormat, anchor);
  });
}
function axisTextKx(k, anchor, data, {
  facetAnchor = anchor + (k === "x" ? "-empty" : ""),
  frameAnchor = anchor,
  tickSize,
  tickRotate = 0,
  tickPadding = Math.max(3, 9 - tickSize) + (Math.abs(tickRotate) >= 10 ? 4 * Math.cos(tickRotate * radians) : 0),
  text,
  textAnchor = Math.abs(tickRotate) >= 10 ? tickRotate < 0 ^ anchor === "bottom" ? "start" : "end" : "middle",
  lineAnchor = Math.abs(tickRotate) >= 10 ? "middle" : anchor === "bottom" ? "top" : "bottom",
  fontVariant,
  inset = 0,
  insetTop = inset,
  insetBottom = inset,
  dy = 0,
  x = k === "x" ? undefined : null,
  ...options
}) {
  return axisMark(textX, k, data, {
    ariaLabel: `${k}-axis tick label`
  }, {
    facetAnchor,
    frameAnchor,
    text: text === undefined ? null : text,
    textAnchor,
    lineAnchor,
    fontVariant,
    rotate: tickRotate,
    x,
    ...options,
    dy: anchor === "bottom" ? +dy + +tickSize + +tickPadding - insetBottom : +dy - tickSize - tickPadding + +insetTop
  }, function (scale, data, ticks, tickFormat, channels) {
    if (fontVariant === undefined) this.fontVariant = inferFontVariant(scale);
    if (text === undefined) channels.text = inferTextChannel(scale, data, ticks, tickFormat, anchor);
  });
}
function gridY() {
  const [data, options] = maybeData(...arguments);
  return gridKy("y", anchorY(options), data, options);
}
function gridFy() {
  const [data, options] = maybeData(...arguments);
  return gridKy("fy", anchorFy(options), data, options);
}
function gridX() {
  const [data, options] = maybeData(...arguments);
  return gridKx("x", anchorX(options), data, options);
}
function gridFx() {
  const [data, options] = maybeData(...arguments);
  return gridKx("fx", anchorFx(options), data, options);
}
function gridKy(k, anchor, data, {
  y = k === "y" ? undefined : null,
  x = null,
  x1 = anchor === "left" ? x : null,
  x2 = anchor === "right" ? x : null,
  ...options
}) {
  return axisMark(ruleY, k, data, {
    ariaLabel: `${k}-grid`,
    ariaHidden: true
  }, {
    y,
    x1,
    x2,
    ...gridDefaults(options)
  });
}
function gridKx(k, anchor, data, {
  x = k === "x" ? undefined : null,
  y = null,
  y1 = anchor === "top" ? y : null,
  y2 = anchor === "bottom" ? y : null,
  ...options
}) {
  return axisMark(ruleX, k, data, {
    ariaLabel: `${k}-grid`,
    ariaHidden: true
  }, {
    x,
    y1,
    y2,
    ...gridDefaults(options)
  });
}
function gridDefaults({
  color = "currentColor",
  opacity = 0.1,
  stroke = color,
  strokeOpacity = opacity,
  strokeWidth = 1,
  ...options
}) {
  return {
    stroke,
    strokeOpacity,
    strokeWidth,
    ...options
  };
}
function labelOptions({
  fill,
  fillOpacity,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  monospace,
  pointerEvents,
  shapeRendering,
  clip = false
}, initializer) {
  // Only propagate these options if constant.
  [, fill] = maybeColorChannel(fill);
  [, fillOpacity] = maybeNumberChannel(fillOpacity);
  return {
    facet: "super",
    x: null,
    y: null,
    fill,
    fillOpacity,
    fontFamily,
    fontSize,
    fontStyle,
    fontVariant,
    fontWeight,
    monospace,
    pointerEvents,
    shapeRendering,
    clip,
    initializer
  };
}
function axisMark(mark, k, data, properties, options, initialize) {
  let channels;
  function axisInitializer(data, facets, _channels, scales, dimensions, context) {
    const initializeFacets = data == null && (k === "fx" || k === "fy");
    const {
      [k]: scale
    } = scales;
    if (!scale) throw new Error(`missing scale: ${k}`);
    const domain = scale.domain();
    let {
      interval,
      ticks,
      tickFormat,
      tickSpacing = k === "x" ? 80 : 35
    } = options;
    // For a scale with a temporal domain, also allow the ticks to be specified
    // as a string which is promoted to a time interval. In the case of ordinal
    // scales, the interval is interpreted as UTC.
    if (typeof ticks === "string" && hasTemporalDomain(scale)) interval = ticks, ticks = undefined;
    // The interval axis option is an alternative method of specifying ticks;
    // for example, for a numeric scale, ticks = 5 means “about 5 ticks” whereas
    // interval = 5 means “ticks every 5 units”. (This is not to be confused
    // with the interval scale option, which affects the scale’s behavior!)
    // Lastly use the tickSpacing option to infer the desired tick count.
    if (ticks === undefined) ticks = maybeRangeInterval(interval, scale.type) ?? inferTickCount(scale, tickSpacing);
    if (data == null) {
      if (isIterable(ticks)) {
        // Use explicit ticks, if specified.
        data = arrayify(ticks);
      } else if (isInterval(ticks)) {
        // Use the tick interval, if specified.
        data = inclusiveRange(ticks, ...extent$1(domain));
      } else if (scale.interval) {
        // If the scale interval is a standard time interval such as "day", we
        // may be able to generalize the scale interval it to a larger aligned
        // time interval to create the desired number of ticks.
        let interval = scale.interval;
        if (scale.ticks) {
          const [min, max] = extent$1(domain);
          const n = (max - min) / interval[intervalDuration]; // current tick count
          // We don’t explicitly check that given interval is a time interval;
          // in that case the generalized interval will be undefined, just like
          // a nonstandard interval. TODO Generalize integer intervals, too.
          interval = generalizeTimeInterval(interval, n / ticks) ?? interval;
          data = inclusiveRange(interval, min, max);
        } else {
          data = domain;
          const n = data.length; // current tick count
          interval = generalizeTimeInterval(interval, n / ticks) ?? interval;
          if (interval !== scale.interval) data = inclusiveRange(interval, ...extent$1(data));
        }
        if (interval === scale.interval) {
          // If we weren’t able to generalize the scale’s interval, compute the
          // positive number n such that taking every nth value from the scale’s
          // domain produces as close as possible to the desired number of
          // ticks. For example, if the domain has 100 values and 5 ticks are
          // desired, n = 20.
          const n = Math.round(data.length / ticks);
          if (n > 1) data = data.filter((d, i) => i % n === 0);
        }
      } else if (scale.ticks) {
        data = scale.ticks(ticks);
      } else {
        // For ordinal scales, the domain will already be generated using the
        // scale’s interval, if any.
        data = domain;
      }
      if (!scale.ticks && data.length && data !== domain) {
        // For ordinal scales, intersect the ticks with the scale domain since
        // the scale is only defined on its domain. If all of the ticks are
        // removed, then warn that the ticks and scale domain may be misaligned
        // (e.g., "year" ticks and "4 weeks" interval).
        const domainSet = new InternSet(domain);
        data = data.filter(d => domainSet.has(d));
        if (!data.length) warn(`Warning: the ${k}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`); // prettier-ignore
      }
      if (k === "y" || k === "x") {
        facets = [range(data)];
      } else {
        channels[k] = {
          scale: k,
          value: identity$1
        };
      }
    }
    initialize?.call(this, scale, data, ticks, tickFormat, channels);
    const initializedChannels = Object.fromEntries(Object.entries(channels).map(([name, channel]) => {
      return [name, {
        ...channel,
        value: valueof(data, channel.value)
      }];
    }));
    if (initializeFacets) facets = context.filterFacets(data, initializedChannels);
    return {
      data,
      facets,
      channels: initializedChannels
    };
  }

  // Apply any basic initializers after the axis initializer computes the ticks.
  const basicInitializer = initializer(options).initializer;
  const m = mark(data, initializer({
    ...options,
    initializer: axisInitializer
  }, basicInitializer));
  if (data == null) {
    channels = m.channels;
    m.channels = {};
  } else {
    channels = {};
  }
  if (properties !== undefined) Object.assign(m, properties);
  if (m.clip === undefined) m.clip = false; // don’t clip axes by default
  return m;
}
function inferTickCount(scale, tickSpacing) {
  const [min, max] = extent$1(scale.range());
  return (max - min) / tickSpacing;
}
function inferTextChannel(scale, data, ticks, tickFormat, anchor) {
  return {
    value: inferTickFormat(scale, data, ticks, tickFormat, anchor)
  };
}

// D3’s ordinal scales simply use toString by default, but if the ordinal scale
// domain (or ticks) are numbers or dates (say because we’re applying a time
// interval to the ordinal scale), we want Plot’s default formatter. And for
// time ticks, we want to use the multi-line time format (e.g., Jan 26) if
// possible, or the default ISO format (2014-01-26). TODO We need a better way
// to infer whether the ordinal scale is UTC or local time.
function inferTickFormat(scale, data, ticks, tickFormat, anchor) {
  return typeof tickFormat === "function" ? tickFormat : tickFormat === undefined && data && isTemporal(data) ? inferTimeFormat(scale.type, data, anchor) ?? formatDefault : scale.tickFormat ? scale.tickFormat(typeof ticks === "number" ? ticks : null, tickFormat) : tickFormat === undefined ? formatDefault : typeof tickFormat === "string" ? (isTemporal(scale.domain()) ? utcFormat : format$1)(tickFormat) : constant(tickFormat);
}
function inclusiveRange(interval, min, max) {
  return interval.range(min, interval.offset(interval.floor(max)));
}
const shapeTickBottom = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(0, l);
  }
};
const shapeTickTop = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(0, -l);
  }
};
const shapeTickLeft = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(-l, 0);
  }
};
const shapeTickRight = {
  draw(context, l) {
    context.moveTo(0, 0);
    context.lineTo(l, 0);
  }
};

// TODO Unify this with the other inferFontVariant; here we only have a scale
// function rather than a scale descriptor.
function inferFontVariant(scale) {
  return scale.bandwidth && !scale.interval ? undefined : "tabular-nums";
}

// Takes the scale label, and if this is not an ordinal scale and the label was
// inferred from an associated channel, adds an orientation-appropriate arrow.
function formatAxisLabel(k, scale, {
  anchor,
  label = scale.label,
  labelAnchor,
  labelArrow
} = {}) {
  if (label == null || label.inferred && hasTemporalDomain(scale) && /^(date|time|year)$/i.test(label)) return;
  label = String(label); // coerce to a string after checking if inferred
  if (labelArrow === "auto") labelArrow = (!scale.bandwidth || scale.interval) && !/[↑↓→←]/.test(label);
  if (!labelArrow) return label;
  if (labelArrow === true) {
    const order = inferScaleOrder(scale);
    if (order) labelArrow = /x$/.test(k) || labelAnchor === "center" ? /x$/.test(k) === order < 0 ? "left" : "right" : order < 0 ? "up" : "down";
  }
  switch (labelArrow) {
    case "left":
      return `← ${label}`;
    case "right":
      return `${label} →`;
    case "up":
      return anchor === "right" ? `${label} ↑` : `↑ ${label}`;
    case "down":
      return anchor === "right" ? `${label} ↓` : `↓ ${label}`;
  }
  return label;
}
function maybeLabelArrow(labelArrow = "auto") {
  return isNoneish(labelArrow) ? false : typeof labelArrow === "boolean" ? labelArrow : keyword(labelArrow, "labelArrow", ["auto", "up", "right", "down", "left"]);
}
function hasTemporalDomain(scale) {
  return isTemporal(scale.domain());
}

function maybeScale(scale, key) {
  if (key == null) return key;
  const s = scale(key);
  if (!s) throw new Error(`scale not found: ${key}`);
  return s;
}
function legendSwatches(color, {
  opacity,
  ...options
} = {}) {
  if (!isOrdinalScale(color) && !isThresholdScale(color)) throw new Error(`swatches legend requires ordinal or threshold color scale (not ${color.type})`);
  return legendItems(color, options, (selection, scale, width, height) => selection.append("svg").attr("width", width).attr("height", height).attr("fill", scale.scale).attr("fill-opacity", maybeNumberChannel(opacity)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function legendSymbols(symbol, {
  fill = symbol.hint?.fill !== undefined ? symbol.hint.fill : "none",
  fillOpacity = 1,
  stroke = symbol.hint?.stroke !== undefined ? symbol.hint.stroke : isNoneish(fill) ? "currentColor" : "none",
  strokeOpacity = 1,
  strokeWidth = 1.5,
  r = 4.5,
  ...options
} = {}, scale) {
  const [vf, cf] = maybeColorChannel(fill);
  const [vs, cs] = maybeColorChannel(stroke);
  const sf = maybeScale(scale, vf);
  const ss = maybeScale(scale, vs);
  const size = r * r * Math.PI;
  fillOpacity = maybeNumberChannel(fillOpacity)[1];
  strokeOpacity = maybeNumberChannel(strokeOpacity)[1];
  strokeWidth = maybeNumberChannel(strokeWidth)[1];
  return legendItems(symbol, options, (selection, scale, width, height) => selection.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", width).attr("height", height).attr("fill", vf === "color" ? d => sf.scale(d) : cf).attr("fill-opacity", fillOpacity).attr("stroke", vs === "color" ? d => ss.scale(d) : cs).attr("stroke-opacity", strokeOpacity).attr("stroke-width", strokeWidth).append("path").attr("d", d => {
    const p = pathRound();
    symbol.scale(d).draw(p, size);
    return p;
  }));
}
function legendItems(scale, options = {}, swatch) {
  let {
    columns,
    tickFormat,
    fontVariant = inferFontVariant$2(scale),
    // TODO label,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0,
    className,
    style,
    width
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  tickFormat = inferTickFormat(scale.scale, scale.domain, undefined, tickFormat);
  const swatches = create("div", context).attr("class", `${className}-swatches ${className}-swatches-${columns != null ? "columns" : "wrap"}`);
  let extraStyle;
  if (columns != null) {
    extraStyle = `:where(.${className}-swatches-columns .${className}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${className}-swatches-columns .${className}-swatch::before) {
  flex-shrink: 0;
}
:where(.${className}-swatches-columns .${className}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;
    swatches.style("columns", columns).selectAll().data(scale.domain).enter().append("div").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).call(item => item.append("div").attr("class", `${className}-swatch-label`).attr("title", tickFormat).text(tickFormat));
  } else {
    extraStyle = `:where(.${className}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${className}-swatches-wrap .${className}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`;
    swatches.selectAll().data(scale.domain).enter().append("span").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).append(function () {
      return this.ownerDocument.createTextNode(tickFormat.apply(this, arguments));
    });
  }
  return swatches.call(div => div.insert("style", "*").text(`:where(.${className}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${className}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${extraStyle}`)).style("margin-left", marginLeft ? `${+marginLeft}px` : null).style("width", width === undefined ? null : `${+width}px`).style("font-variant", impliedString(fontVariant, "normal")).call(applyInlineStyles, style).node();
}

const legendRegistry = new Map([["symbol", legendSymbols], ["color", legendColor], ["opacity", legendOpacity]]);
function exposeLegends(scales, context, defaults = {}) {
  return (key, options) => {
    if (!legendRegistry.has(key)) throw new Error(`unknown legend type: ${key}`);
    if (!(key in scales)) return;
    return legendRegistry.get(key)(scales[key], legendOptions(context, defaults[key], options), key => scales[key]);
  };
}
function legendOptions({
  className,
  ...context
}, {
  label,
  ticks,
  tickFormat
} = {}, options) {
  return inherit(options, {
    className,
    ...context
  }, {
    label,
    ticks,
    tickFormat
  });
}
function legendColor(color, {
  legend = true,
  ...options
}) {
  if (legend === true) legend = color.type === "ordinal" ? "swatches" : "ramp";
  if (color.domain === undefined) return;
  switch (`${legend}`.toLowerCase()) {
    case "swatches":
      return legendSwatches(color, options);
    case "ramp":
      return legendRamp(color, options);
    default:
      throw new Error(`unknown legend type: ${legend}`);
  }
}
function legendOpacity({
  type,
  interpolate,
  ...scale
}, {
  legend = true,
  color = rgb(0, 0, 0),
  ...options
}) {
  if (!interpolate) throw new Error(`${type} opacity scales are not supported`);
  if (legend === true) legend = "ramp";
  if (`${legend}`.toLowerCase() !== "ramp") throw new Error(`${legend} opacity legends are not supported`);
  return legendColor({
    type,
    ...scale,
    interpolate: interpolateOpacity(color)
  }, {
    legend,
    ...options
  });
}
function interpolateOpacity(color) {
  const {
    r,
    g,
    b
  } = rgb(color) || rgb(0, 0, 0); // treat invalid color as black
  return t => `rgba(${r},${g},${b},${t})`;
}
function createLegends(scales, context, options) {
  const legends = [];
  for (const [key, value] of legendRegistry) {
    const o = options[key];
    if (o?.legend && key in scales) {
      const legend = value(scales[key], legendOptions(context, scales[key], o), key => scales[key]);
      if (legend != null) legends.push(legend);
    }
  }
  return legends;
}

const defaults$3 = {
  ariaLabel: "frame",
  fill: "none",
  stroke: "currentColor",
  clip: false
};
const lineDefaults = {
  ariaLabel: "frame",
  fill: null,
  stroke: "currentColor",
  strokeLinecap: "square",
  clip: false
};
class Frame extends Mark {
  constructor(options = {}) {
    const {
      anchor = null,
      inset = 0,
      insetTop = inset,
      insetRight = inset,
      insetBottom = inset,
      insetLeft = inset,
      rx,
      ry
    } = options;
    super(singleton, undefined, options, anchor == null ? defaults$3 : lineDefaults);
    this.anchor = maybeKeyword(anchor, "anchor", ["top", "right", "bottom", "left"]);
    this.insetTop = number(insetTop);
    this.insetRight = number(insetRight);
    this.insetBottom = number(insetBottom);
    this.insetLeft = number(insetLeft);
    this.rx = number(rx);
    this.ry = number(ry);
  }
  render(index, scales, channels, dimensions, context) {
    const {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      width,
      height
    } = dimensions;
    const {
      anchor,
      insetTop,
      insetRight,
      insetBottom,
      insetLeft,
      rx,
      ry
    } = this;
    const x1 = marginLeft + insetLeft;
    const x2 = width - marginRight - insetRight;
    const y1 = marginTop + insetTop;
    const y2 = height - marginBottom - insetBottom;
    return create(anchor ? "svg:line" : "svg:rect", context).datum(0).call(applyIndirectStyles, this, dimensions, context).call(applyDirectStyles, this).call(applyChannelStyles, this, channels).call(applyTransform, this, {}).call(anchor === "left" ? line => line.attr("x1", x1).attr("x2", x1).attr("y1", y1).attr("y2", y2) : anchor === "right" ? line => line.attr("x1", x2).attr("x2", x2).attr("y1", y1).attr("y2", y2) : anchor === "top" ? line => line.attr("x1", x1).attr("x2", x2).attr("y1", y1).attr("y2", y1) : anchor === "bottom" ? line => line.attr("x1", x1).attr("x2", x2).attr("y1", y2).attr("y2", y2) : rect => rect.attr("x", x1).attr("y", y1).attr("width", x2 - x1).attr("height", y2 - y1).attr("rx", rx).attr("ry", ry)).node();
  }
}
function frame(options) {
  return new Frame(options);
}

const defaults$2 = {
  ariaLabel: "tip",
  fill: "var(--plot-background)",
  stroke: "currentColor"
};

// These channels are not displayed in the default tip; see formatChannels.
const ignoreChannels = new Set(["geometry", "href", "src", "ariaLabel", "scales"]);
class Tip extends Mark {
  constructor(data, options = {}) {
    if (options.tip) options = {
      ...options,
      tip: false
    };
    if (options.title === undefined && isIterable(data) && isTextual(data)) options = {
      ...options,
      title: identity$1
    };
    const {
      x,
      y,
      x1,
      x2,
      y1,
      y2,
      anchor,
      preferredAnchor = "bottom",
      monospace,
      fontFamily = monospace ? "ui-monospace, monospace" : undefined,
      fontSize,
      fontStyle,
      fontVariant,
      fontWeight,
      lineHeight = 1,
      lineWidth = 20,
      frameAnchor,
      format,
      textAnchor = "start",
      textOverflow,
      textPadding = 8,
      title,
      pointerSize = 12,
      pathFilter = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))"
    } = options;
    super(data, {
      x: {
        value: x1 != null && x2 != null ? null : x,
        scale: "x",
        optional: true
      },
      // ignore midpoint
      y: {
        value: y1 != null && y2 != null ? null : y,
        scale: "y",
        optional: true
      },
      // ignore midpoint
      x1: {
        value: x1,
        scale: "x",
        optional: x2 == null
      },
      y1: {
        value: y1,
        scale: "y",
        optional: y2 == null
      },
      x2: {
        value: x2,
        scale: "x",
        optional: x1 == null
      },
      y2: {
        value: y2,
        scale: "y",
        optional: y1 == null
      },
      title: {
        value: title,
        optional: true
      } // filter: defined
    }, options, defaults$2);
    this.anchor = maybeAnchor$1(anchor, "anchor");
    this.preferredAnchor = maybeAnchor$1(preferredAnchor, "preferredAnchor");
    this.frameAnchor = maybeFrameAnchor(frameAnchor);
    this.textAnchor = impliedString(textAnchor, "middle");
    this.textPadding = +textPadding;
    this.pointerSize = +pointerSize;
    this.pathFilter = string(pathFilter);
    this.lineHeight = +lineHeight;
    this.lineWidth = +lineWidth;
    this.textOverflow = maybeTextOverflow(textOverflow);
    this.monospace = !!monospace;
    this.fontFamily = string(fontFamily);
    this.fontSize = number(fontSize);
    this.fontStyle = string(fontStyle);
    this.fontVariant = string(fontVariant);
    this.fontWeight = string(fontWeight);
    for (const key in defaults$2) if (key in this.channels) this[key] = defaults$2[key]; // apply default even if channel
    this.splitLines = splitter(this);
    this.clipLine = clipper(this);
    this.format = {
      ...format
    }; // defensive copy before mutate; also promote nullish to empty
  }
  render(index, scales, values, dimensions, context) {
    const mark = this;
    const {
      x,
      y,
      fx,
      fy
    } = scales;
    const {
      ownerSVGElement: svg,
      document
    } = context;
    const {
      anchor,
      monospace,
      lineHeight,
      lineWidth
    } = this;
    const {
      textPadding: r,
      pointerSize: m,
      pathFilter
    } = this;
    const {
      marginTop,
      marginLeft
    } = dimensions;

    // The anchor position is the middle of x1 & y1 and x2 & y2, if available,
    // or x & y; the former is considered more specific because it’s how we
    // disable the implicit stack and interval transforms. If any dimension is
    // unspecified, we fallback to the frame anchor. We also need to know the
    // facet offsets to detect when the tip would draw outside the plot, and
    // thus we need to change the orientation.
    const {
      x1: X1,
      y1: Y1,
      x2: X2,
      y2: Y2,
      x: X = X1 ?? X2,
      y: Y = Y1 ?? Y2
    } = values;
    const ox = fx ? fx(index.fx) - marginLeft : 0;
    const oy = fy ? fy(index.fy) - marginTop : 0;

    // The order of precedence for the anchor position is: the middle of x1 & y1
    // and x2 & y2; or x1 & y1 (e.g., area); or lastly x & y. If a dimension is
    // unspecified, the frame anchor is used.
    const [cx, cy] = applyFrameAnchor(this, dimensions);
    const px = anchorX$1(values, cx);
    const py = anchorY$1(values, cy);

    // Resolve the text metric implementation. We may need an ellipsis for text
    // truncation, so we optimistically compute the ellipsis width.
    const widthof = monospace ? monospaceWidth : defaultWidth;
    const ee = widthof(ellipsis);

    // If there’s a title channel, display that as-is; otherwise, show multiple
    // channels as name-value pairs.
    let sources, format;
    if ("title" in values) {
      sources = values.channels;
      format = formatTitle;
    } else {
      sources = getSourceChannels.call(this, values, scales);
      format = formatChannels;
    }

    // We don’t call applyChannelStyles because we only use the channels to
    // derive the content of the tip, not its aesthetics.
    const g = create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyIndirectTextStyles, this).call(applyTransform, this, {
      x: X && x,
      y: Y && y
    }).call(g => g.selectAll().data(index).enter().append("g").attr("transform", i => `translate(${Math.round(px(i))},${Math.round(py(i))})`) // crisp edges
    .call(applyDirectStyles, this).call(g => g.append("path").attr("filter", pathFilter)).call(g => g.append("text").each(function (i) {
      const that = select(this);
      // prevent style inheritance (from path)
      this.setAttribute("fill", "currentColor");
      this.setAttribute("fill-opacity", 1);
      this.setAttribute("stroke", "none");
      // iteratively render each channel value
      const lines = format.call(mark, i, index, sources, scales, values);
      if (typeof lines === "string") {
        for (const line of mark.splitLines(lines)) {
          renderLine(that, {
            value: mark.clipLine(line)
          });
        }
      } else {
        const labels = new Set();
        for (const line of lines) {
          const {
            label = ""
          } = line;
          if (label && labels.has(label)) continue;else labels.add(label);
          renderLine(that, line);
        }
      }
    })));

    // Renders a single line (a name-value pair) to the tip, truncating the text
    // as needed, and adding a title if the text is truncated. Note that this is
    // just the initial layout of the text; in postrender we will compute the
    // exact text metrics and translate the text as needed once we know the
    // tip’s orientation (anchor).
    function renderLine(selection, {
      label,
      value,
      color,
      opacity
    }) {
      label ??= "", value ??= "";
      const swatch = color != null || opacity != null;
      let title;
      let w = lineWidth * 100;
      const [j] = cut(label, w, widthof, ee);
      if (j >= 0) {
        // label is truncated
        label = label.slice(0, j).trimEnd() + ellipsis;
        title = value.trim();
        value = "";
      } else {
        if (label || !value && !swatch) value = " " + value;
        const [k] = cut(value, w - widthof(label), widthof, ee);
        if (k >= 0) {
          // value is truncated
          title = value.trim();
          value = value.slice(0, k).trimEnd() + ellipsis;
        }
      }
      const line = selection.append("tspan").attr("x", 0).attr("dy", `${lineHeight}em`).text("\u200b"); // zwsp for double-click
      if (label) line.append("tspan").attr("font-weight", "bold").text(label);
      if (value) line.append(() => document.createTextNode(value));
      if (swatch) line.append("tspan").text(" ■").attr("fill", color).attr("fill-opacity", opacity).style("user-select", "none"); // prettier-ignore
      if (title) line.append("title").text(title);
    }

    // Only after the plot is attached to the page can we compute the exact text
    // metrics needed to determine the tip size and orientation (anchor).
    function postrender() {
      const {
        width,
        height
      } = dimensions.facet ?? dimensions;
      g.selectChildren().each(function (i) {
        let {
          x: tx,
          width: w,
          height: h
        } = this.getBBox();
        w = Math.round(w), h = Math.round(h); // crisp edges
        let a = anchor; // use the specified anchor, if any
        if (a === undefined) {
          const x = px(i) + ox;
          const y = py(i) + oy;
          const fitLeft = x + w + m + r * 2 < width;
          const fitRight = x - w - m - r * 2 > 0;
          const fitTop = y + h + m + r * 2 < height;
          const fitBottom = y - h - m - r * 2 > 0;
          a = fitLeft && fitRight ? fitTop && fitBottom ? mark.preferredAnchor : fitBottom ? "bottom" : "top" : fitTop && fitBottom ? fitLeft ? "left" : "right" : (fitLeft || fitRight) && (fitTop || fitBottom) ? `${fitBottom ? "bottom" : "top"}-${fitLeft ? "left" : "right"}` : mark.preferredAnchor;
        }
        const path = this.firstChild; // note: assumes exactly two children!
        const text = this.lastChild; // note: assumes exactly two children!
        path.setAttribute("d", getPath(a, m, r, w, h));
        if (tx) for (const t of text.childNodes) t.setAttribute("x", -tx);
        text.setAttribute("y", `${+getLineOffset(a, text.childNodes.length, lineHeight).toFixed(6)}em`);
        text.setAttribute("transform", `translate(${getTextTranslate(a, m, r, w, h)})`);
      });
      g.attr("visibility", null);
    }

    // Wait until the plot is inserted into the page so that we can use getBBox
    // to compute the exact text dimensions. If the SVG is already connected, as
    // when the pointer interaction triggers the re-render, use a faster
    // microtask instead of an animation frame; if this SSR (e.g., JSDOM), skip
    // this step. Perhaps this could be done synchronously; getting the
    // dimensions of the SVG is easy, and although accurate text metrics are
    // hard, we could use approximate heuristics.
    if (index.length) {
      g.attr("visibility", "hidden"); // hide until postrender
      if (svg.isConnected) Promise.resolve().then(postrender);else if (typeof requestAnimationFrame !== "undefined") requestAnimationFrame(postrender);
    }
    return g.node();
  }
}
function tip(data, {
  x,
  y,
  ...options
} = {}) {
  if (options.frameAnchor === undefined) [x, y] = maybeTuple(x, y);
  return new Tip(data, {
    ...options,
    x,
    y
  });
}
function getLineOffset(anchor, length, lineHeight) {
  return /^top(?:-|$)/.test(anchor) ? 0.94 - lineHeight : /^bottom(?:-|$)/ ? -0.29 - length * lineHeight : length / 2 * lineHeight;
}
function getTextTranslate(anchor, m, r, width, height) {
  switch (anchor) {
    case "middle":
      return [-width / 2, height / 2];
    case "top-left":
      return [r, m + r];
    case "top":
      return [-width / 2, m / 2 + r];
    case "top-right":
      return [-width - r, m + r];
    case "right":
      return [-m / 2 - width - r, height / 2];
    case "bottom-left":
      return [r, -m - r];
    case "bottom":
      return [-width / 2, -m / 2 - r];
    case "bottom-right":
      return [-width - r, -m - r];
    case "left":
      return [r + m / 2, height / 2];
  }
}
function getPath(anchor, m, r, width, height) {
  const w = width + r * 2;
  const h = height + r * 2;
  switch (anchor) {
    case "middle":
      return `M${-w / 2},${-h / 2}h${w}v${h}h${-w}z`;
    case "top-left":
      return `M0,0l${m},${m}h${w - m}v${h}h${-w}z`;
    case "top":
      return `M0,0l${m / 2},${m / 2}h${(w - m) / 2}v${h}h${-w}v${-h}h${(w - m) / 2}z`;
    case "top-right":
      return `M0,0l${-m},${m}h${m - w}v${h}h${w}z`;
    case "right":
      return `M0,0l${-m / 2},${-m / 2}v${m / 2 - h / 2}h${-w}v${h}h${w}v${m / 2 - h / 2}z`;
    case "bottom-left":
      return `M0,0l${m},${-m}h${w - m}v${-h}h${-w}z`;
    case "bottom":
      return `M0,0l${m / 2},${-m / 2}h${(w - m) / 2}v${-h}h${-w}v${h}h${(w - m) / 2}z`;
    case "bottom-right":
      return `M0,0l${-m},${-m}h${m - w}v${-h}h${w}z`;
    case "left":
      return `M0,0l${m / 2},${-m / 2}v${m / 2 - h / 2}h${w}v${h}h${-w}v${m / 2 - h / 2}z`;
  }
}

// Note: mutates this.format!
function getSourceChannels({
  channels
}, scales) {
  const sources = {};

  // Promote x and y shorthand for paired channels (in order).
  let format = this.format;
  format = maybeExpandPairedFormat(format, channels, "x");
  format = maybeExpandPairedFormat(format, channels, "y");
  this.format = format;

  // Prioritize channels with explicit formats, in the given order.
  for (const key in format) {
    const value = format[key];
    if (value === null || value === false) {
      continue;
    } else if (key === "fx" || key === "fy") {
      sources[key] = true;
    } else {
      const source = getSource(channels, key);
      if (source) sources[key] = source;
    }
  }

  // Then fallback to all other (non-ignored) channels.
  for (const key in channels) {
    if (key in sources || key in format || ignoreChannels.has(key)) continue;
    const source = getSource(channels, key);
    if (source) sources[key] = source;
  }

  // And lastly facet channels, but only if this mark is faceted.
  if (this.facet) {
    if (scales.fx && !("fx" in format)) sources.fx = true;
    if (scales.fy && !("fy" in format)) sources.fy = true;
  }

  // Promote shorthand string formats, and materialize default formats.
  for (const key in sources) {
    const format = this.format[key];
    if (typeof format === "string") {
      const value = sources[key]?.value ?? scales[key]?.domain() ?? [];
      this.format[key] = (isTemporal(value) ? utcFormat : format$1)(format);
    } else if (format === undefined || format === true) {
      // For ordinal scales, the inferred tick format can be more concise, such
      // as only showing the year for yearly data.
      const scale = scales[key];
      this.format[key] = scale?.bandwidth ? inferTickFormat(scale, scale.domain()) : formatDefault;
    }
  }
  return sources;
}

// Promote x and y shorthand for paired channels, while preserving order.
function maybeExpandPairedFormat(format, channels, key) {
  if (!(key in format)) return format;
  const key1 = `${key}1`;
  const key2 = `${key}2`;
  if ((key1 in format || !(key1 in channels)) && (key2 in format || !(key2 in channels))) return format;
  const entries = Object.entries(format);
  const value = format[key];
  entries.splice(entries.findIndex(([name]) => name === key) + 1, 0, [key1, value], [key2, value]);
  return Object.fromEntries(entries);
}
function formatTitle(i, index, {
  title
}) {
  return formatDefault(title.value[i], i);
}
function* formatChannels(i, index, channels, scales, values) {
  for (const key in channels) {
    if (key === "fx" || key === "fy") {
      yield {
        label: formatLabel(scales, channels, key),
        value: this.format[key](index[key], i)
      };
      continue;
    }
    if (key === "x1" && "x2" in channels) continue;
    if (key === "y1" && "y2" in channels) continue;
    const channel = channels[key];
    if (key === "x2" && "x1" in channels) {
      yield {
        label: formatPairLabel(scales, channels, "x"),
        value: formatPair(this.format.x2, channels.x1, channel, i)
      };
    } else if (key === "y2" && "y1" in channels) {
      yield {
        label: formatPairLabel(scales, channels, "y"),
        value: formatPair(this.format.y2, channels.y1, channel, i)
      };
    } else {
      const value = channel.value[i];
      const scale = channel.scale;
      if (!defined(value) && scale == null) continue;
      yield {
        label: formatLabel(scales, channels, key),
        value: this.format[key](value, i),
        color: scale === "color" ? values[key][i] : null,
        opacity: scale === "opacity" ? values[key][i] : null
      };
    }
  }
}
function formatPair(formatValue, c1, c2, i) {
  return c2.hint?.length // e.g., stackY’s y1 and y2
  ? `${formatValue(c2.value[i] - c1.value[i], i)}` : `${formatValue(c1.value[i], i)}–${formatValue(c2.value[i], i)}`;
}
function formatPairLabel(scales, channels, key) {
  const l1 = formatLabel(scales, channels, `${key}1`, key);
  const l2 = formatLabel(scales, channels, `${key}2`, key);
  return l1 === l2 ? l1 : `${l1}–${l2}`;
}
function formatLabel(scales, channels, key, defaultLabel = key) {
  const channel = channels[key];
  const scale = scales[channel?.scale ?? key];
  return String(scale?.label ?? channel?.label ?? defaultLabel);
}

function plot(options = {}) {
  const {
    facet,
    style,
    title,
    subtitle,
    caption,
    ariaLabel,
    ariaDescription
  } = options;

  // className for inline styles
  const className = maybeClassName(options.className);

  // Flatten any nested marks.
  const marks = options.marks === undefined ? [] : flatMarks(options.marks);

  // Add implicit tips.
  marks.push(...inferTips(marks));

  // Compute the top-level facet state. This has roughly the same structure as
  // mark-specific facet state, except there isn’t a facetsIndex, and there’s a
  // data and dataLength so we can warn the user if a different data of the same
  // length is used in a mark.
  const topFacetState = maybeTopFacet(facet, options);

  // Construct a map from (faceted) Mark instance to facet state, including:
  // channels - an {fx?, fy?} object to add to the fx and fy scale
  // groups - a possibly-nested map from facet values to indexes in the data array
  // facetsIndex - a sparse nested array of indices corresponding to the valid facets
  const facetStateByMark = new Map();
  for (const mark of marks) {
    const facetState = maybeMarkFacet(mark, topFacetState, options);
    if (facetState) facetStateByMark.set(mark, facetState);
  }

  // Compute a Map from scale name to an array of associated channels.
  const channelsByScale = new Map();
  if (topFacetState) addScaleChannels(channelsByScale, [topFacetState], options);
  addScaleChannels(channelsByScale, facetStateByMark, options);

  // Add implicit axis marks. Because this happens after faceting (because it
  // depends on whether faceting is present), we must initialize the facet state
  // of any implicit axes, too.
  const axes = flatMarks(inferAxes(marks, channelsByScale, options));
  for (const mark of axes) {
    const facetState = maybeMarkFacet(mark, topFacetState, options);
    if (facetState) facetStateByMark.set(mark, facetState);
  }
  marks.unshift(...axes);

  // All the possible facets are given by the domains of the fx or fy scales, or
  // the cross-product of these domains if we facet by both x and y. We sort
  // them in order to apply the facet filters afterwards.
  let facets = createFacets(channelsByScale, options);
  if (facets !== undefined) {
    const topFacetsIndex = topFacetState ? facetFilter(facets, topFacetState) : undefined;

    // Compute a facet index for each mark, parallel to the facets array. For
    // mark-level facets, compute an index for that mark’s data and options.
    // Otherwise, use the top-level facet index.
    for (const mark of marks) {
      if (mark.facet === null || mark.facet === "super") continue;
      const facetState = facetStateByMark.get(mark);
      if (facetState === undefined) continue;
      facetState.facetsIndex = mark.fx != null || mark.fy != null ? facetFilter(facets, facetState) : topFacetsIndex;
    }

    // The cross product of the domains of fx and fy can include fx-fy
    // combinations for which no mark has an instance associated with that
    // combination, and therefore we don’t want to render this facet (not even
    // the frame). The same can occur if you specify the domain of fx and fy
    // explicitly, but there is no mark instance associated with some values in
    // the domain. Expunge empty facets, and clear the corresponding elements
    // from the nested index in each mark.
    const nonEmpty = new Set();
    for (const {
      facetsIndex
    } of facetStateByMark.values()) {
      facetsIndex?.forEach((index, i) => {
        if (index?.length > 0) {
          nonEmpty.add(i);
        }
      });
    }

    // If all the facets are empty (as when none of the marks are actually
    // faceted), none of them are empty.
    facets.forEach(0 < nonEmpty.size && nonEmpty.size < facets.length ? (f, i) => f.empty = !nonEmpty.has(i) : f => f.empty = false);

    // For any mark using the “exclude” facet mode, invert the index.
    for (const mark of marks) {
      if (mark.facet === "exclude") {
        const facetState = facetStateByMark.get(mark);
        if (facetState !== undefined) facetState.facetsIndex = facetExclude(facetState.facetsIndex);
      }
    }
  }

  // If a scale is explicitly declared in options, initialize its associated
  // channels to the empty array; this will guarantee that a corresponding scale
  // will be created later (even if there are no other channels). Ignore facet
  // scale declarations, which are handled above.
  for (const key of registry.keys()) {
    if (isScaleOptions(options[key]) && key !== "fx" && key !== "fy") {
      channelsByScale.set(key, []);
    }
  }

  // A Map from Mark instance to its render state, including:
  // index - the data index e.g. [0, 1, 2, 3, …]
  // channels - an array of materialized channels e.g. [["x", {value}], …]
  // faceted - a boolean indicating whether this mark is faceted
  // values - an object of scaled values e.g. {x: [40, 32, …], …}
  const stateByMark = new Map();

  // Initialize the marks’ state.
  for (const mark of marks) {
    if (stateByMark.has(mark)) throw new Error("duplicate mark; each mark must be unique");
    const {
      facetsIndex,
      channels: facetChannels
    } = facetStateByMark.get(mark) ?? {};
    const {
      data,
      facets,
      channels
    } = mark.initialize(facetsIndex, facetChannels, options);
    applyScaleTransforms(channels, options);
    stateByMark.set(mark, {
      data,
      facets,
      channels
    });
  }

  // Initalize the scales and dimensions.
  const scaleDescriptors = createScales(addScaleChannels(channelsByScale, stateByMark, options), options);
  const dimensions = createDimensions(scaleDescriptors, marks, options);
  autoScaleRange(scaleDescriptors, dimensions);
  const scales = createScaleFunctions(scaleDescriptors);
  const {
    fx,
    fy
  } = scales;
  const subdimensions = fx || fy ? innerDimensions(scaleDescriptors, dimensions) : dimensions;
  const superdimensions = fx || fy ? actualDimensions(scales, dimensions) : dimensions;

  // Initialize the context.
  const context = createContext(options);
  const document = context.document;
  const svg = creator("svg").call(document.documentElement);
  let figure = svg; // replaced with the figure element, if any
  context.ownerSVGElement = svg;
  context.className = className;
  context.projection = createProjection(options, subdimensions);

  // Allows e.g. the axis mark to determine faceting lazily.
  context.filterFacets = (data, channels) => {
    return facetFilter(facets, {
      channels,
      groups: facetGroups(data, channels)
    });
  };

  // Allows e.g. the tip mark to reference channels and data on other marks.
  context.getMarkState = mark => {
    const state = stateByMark.get(mark);
    const facetState = facetStateByMark.get(mark);
    return {
      ...state,
      channels: {
        ...state.channels,
        ...facetState?.channels
      }
    };
  };

  // Allows e.g. the pointer transform to support viewof.
  context.dispatchValue = value => {
    if (figure.value === value) return;
    figure.value = value;
    figure.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  };

  // Reinitialize; for deriving channels dependent on other channels.
  const newByScale = new Set();
  for (const [mark, state] of stateByMark) {
    if (mark.initializer != null) {
      const dimensions = mark.facet === "super" ? superdimensions : subdimensions;
      const update = mark.initializer(state.data, state.facets, state.channels, scales, dimensions, context);
      if (update.data !== undefined) {
        state.data = update.data;
      }
      if (update.facets !== undefined) {
        state.facets = update.facets;
      }
      if (update.channels !== undefined) {
        const {
          fx,
          fy,
          ...channels
        } = update.channels; // separate facet channels
        inferChannelScales(channels);
        Object.assign(state.channels, channels);
        for (const channel of Object.values(channels)) {
          const {
            scale
          } = channel;
          // Initializers aren’t allowed to redefine position scales as this
          // would introduce a circular dependency; so simply scale these
          // channels as-is rather than creating new scales, and assume that
          // they already have the scale’s transform applied, if any (e.g., when
          // generating ticks for the axis mark).
          if (scale != null && !isPosition(registry.get(scale))) {
            applyScaleTransform(channel, options);
            newByScale.add(scale);
          }
        }
        // If the initializer returns new mark-level facet channels, we must
        // record that the mark is now faceted. Note: we aren’t actually
        // populating the facet state, but subsequently we won’t need it.
        if (fx != null || fy != null) facetStateByMark.set(mark, true);
      }
    }
  }

  // Reconstruct scales if new scaled channels were created during
  // reinitialization. Preserve existing scale labels, if any.
  if (newByScale.size) {
    const newChannelsByScale = new Map();
    addScaleChannels(newChannelsByScale, stateByMark, options, key => newByScale.has(key));
    addScaleChannels(channelsByScale, stateByMark, options, key => newByScale.has(key));
    const newScaleDescriptors = inheritScaleLabels(createScales(newChannelsByScale, options), scaleDescriptors);
    const {
      scales: newExposedScales,
      ...newScales
    } = createScaleFunctions(newScaleDescriptors);
    Object.assign(scaleDescriptors, newScaleDescriptors);
    Object.assign(scales, newScales);
    Object.assign(scales.scales, newExposedScales);
  }

  // Sort and filter the facets to match the fx and fy domains; this is needed
  // because the facets were constructed prior to the fx and fy scales.
  let facetDomains, facetTranslate;
  if (facets !== undefined) {
    facetDomains = {
      x: fx?.domain(),
      y: fy?.domain()
    };
    facets = recreateFacets(facets, facetDomains);
    facetTranslate = facetTranslator(fx, fy, dimensions);
  }

  // Compute value objects, applying scales and projection as needed.
  for (const [mark, state] of stateByMark) {
    state.values = mark.scale(state.channels, scales, context);
  }
  const {
    width,
    height
  } = dimensions;
  select(svg).attr("class", className).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`).attr("aria-label", ariaLabel).attr("aria-description", ariaDescription).call(svg =>
  // Warning: if you edit this, change defaultClassName.
  svg.append("style").text(`:where(.${className}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${className} text),
:where(.${className} tspan) {
  white-space: pre;
}`)).call(applyInlineStyles, style);

  // Render marks.
  for (const mark of marks) {
    const {
      channels,
      values,
      facets: indexes
    } = stateByMark.get(mark);

    // Render a non-faceted mark.
    if (facets === undefined || mark.facet === "super") {
      let index = null;
      if (indexes) {
        index = indexes[0];
        index = mark.filter(index, channels, values);
        if (index.length === 0) continue;
      }
      const node = mark.render(index, scales, values, superdimensions, context);
      if (node == null) continue;
      svg.appendChild(node);
    }

    // Render a faceted mark.
    else {
      let g;
      for (const f of facets) {
        if (!(mark.facetAnchor?.(facets, facetDomains, f) ?? !f.empty)) continue;
        let index = null;
        if (indexes) {
          const faceted = facetStateByMark.has(mark);
          index = indexes[faceted ? f.i : 0];
          index = mark.filter(index, channels, values);
          if (index.length === 0) continue;
          if (!faceted && index === indexes[0]) index = subarray(index); // copy before assigning fx, fy, fi
          index.fx = f.x, index.fy = f.y, index.fi = f.i;
        }
        const node = mark.render(index, scales, values, subdimensions, context);
        if (node == null) continue;
        // Lazily construct the shared group (to drop empty marks).
        (g ??= select(svg).append("g")).append(() => node).datum(f);
        // Promote ARIA attributes and mark transform to avoid repetition on
        // each facet; this assumes that these attributes are consistent across
        // facets, but that should be the case!
        for (const name of ["aria-label", "aria-description", "aria-hidden", "transform"]) {
          if (node.hasAttribute(name)) {
            g.attr(name, node.getAttribute(name));
            node.removeAttribute(name);
          }
        }
      }
      g?.selectChildren().attr("transform", facetTranslate);
    }
  }

  // Wrap the plot in a figure, if needed.
  const legends = createLegends(scaleDescriptors, context, options);
  const {
    figure: figured = title != null || subtitle != null || caption != null || legends.length > 0
  } = options;
  if (figured) {
    figure = document.createElement("figure");
    figure.className = `${className}-figure`;
    figure.style.maxWidth = "initial"; // avoid Observable default style
    if (title != null) figure.append(createTitleElement(document, title, "h2"));
    if (subtitle != null) figure.append(createTitleElement(document, subtitle, "h3"));
    figure.append(...legends, svg);
    if (caption != null) figure.append(createFigcaption(document, caption));
  }
  figure.scale = exposeScales(scales.scales);
  figure.legend = exposeLegends(scaleDescriptors, context, options);
  const w = consumeWarnings();
  if (w > 0) {
    select(svg).append("text").attr("x", width).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial") // fix emoji rendering in Chrome
    .text("\u26a0\ufe0f") // emoji variation selector
    .append("title").text(`${w.toLocaleString("en-US")} warning${w === 1 ? "" : "s"}. Please check the console.`);
  }
  return figure;
}
function createTitleElement(document, contents, tag) {
  if (contents.ownerDocument) return contents;
  const e = document.createElement(tag);
  e.append(contents);
  return e;
}
function createFigcaption(document, caption) {
  const e = document.createElement("figcaption");
  e.append(caption);
  return e;
}
function plotThis({
  marks = [],
  ...options
} = {}) {
  return plot({
    ...options,
    marks: [...marks, this]
  });
}

// Note: This side-effect avoids a circular dependency.
Mark.prototype.plot = plotThis;
function flatMarks(marks) {
  return marks.flat(Infinity).filter(mark => mark != null).map(markify);
}
function markify(mark) {
  return typeof mark.render === "function" ? mark : new Render(mark);
}
class Render extends Mark {
  constructor(render) {
    if (typeof render !== "function") throw new TypeError("invalid mark; missing render function");
    super();
    this.render = render;
  }
  render() {}
}

// Note: mutates channel.value to apply the scale transform, if any.
function applyScaleTransforms(channels, options) {
  for (const name in channels) applyScaleTransform(channels[name], options);
  return channels;
}

// Note: mutates channel.value to apply the scale transform, if any. Also sets
// channel.transform to false to prevent duplicate transform application.
function applyScaleTransform(channel, options) {
  const {
    scale,
    transform: t = true
  } = channel;
  if (scale == null || !t) return;
  const {
    type,
    percent,
    interval,
    transform = percent ? x => x * 100 : maybeIntervalTransform(interval, type)
  } = options[scale] ?? {};
  if (transform == null) return;
  channel.value = map(channel.value, transform);
  channel.transform = false;
}

// An initializer may generate channels without knowing how the downstream mark
// will use them. Marks are typically responsible associated scales with
// channels, but here we assume common behavior across marks.
function inferChannelScales(channels) {
  for (const name in channels) {
    inferChannelScale(name, channels[name]);
  }
}
function addScaleChannels(channelsByScale, stateByMark, options, filter = yes) {
  for (const {
    channels
  } of stateByMark.values()) {
    for (const name in channels) {
      const channel = channels[name];
      const {
        scale
      } = channel;
      if (scale != null && filter(scale)) {
        // Geo marks affect the default x and y domains if there is no
        // projection. Skip this (as an optimization) when a projection is
        // specified, or when the domains for x and y are specified.
        if (scale === "projection") {
          if (!hasProjection(options)) {
            const gx = options.x?.domain === undefined;
            const gy = options.y?.domain === undefined;
            if (gx || gy) {
              const [x, y] = getGeometryChannels(channel);
              if (gx) addScaleChannel(channelsByScale, "x", x);
              if (gy) addScaleChannel(channelsByScale, "y", y);
            }
          }
        } else {
          addScaleChannel(channelsByScale, scale, channel);
        }
      }
    }
  }
  return channelsByScale;
}
function addScaleChannel(channelsByScale, scale, channel) {
  const scaleChannels = channelsByScale.get(scale);
  if (scaleChannels !== undefined) scaleChannels.push(channel);else channelsByScale.set(scale, [channel]);
}

// Returns the facet groups, and possibly fx and fy channels, associated with
// the top-level facet option {data, x, y}.
function maybeTopFacet(facet, options) {
  if (facet == null) return;
  const {
    x,
    y
  } = facet;
  if (x == null && y == null) return;
  const data = arrayify(facet.data);
  if (data == null) throw new Error("missing facet data");
  const channels = {};
  if (x != null) channels.fx = createChannel(data, {
    value: x,
    scale: "fx"
  });
  if (y != null) channels.fy = createChannel(data, {
    value: y,
    scale: "fy"
  });
  applyScaleTransforms(channels, options);
  const groups = facetGroups(data, channels);
  return {
    channels,
    groups,
    data: facet.data
  };
}

// Returns the facet groups, and possibly fx and fy channels, associated with a
// mark, either through top-level faceting or mark-level facet options {fx, fy}.
function maybeMarkFacet(mark, topFacetState, options) {
  if (mark.facet === null || mark.facet === "super") return;

  // This mark defines a mark-level facet. TODO There’s some code duplication
  // here with maybeTopFacet that we could reduce.
  const {
    fx,
    fy
  } = mark;
  if (fx != null || fy != null) {
    const data = arrayify(mark.data ?? fx ?? fy);
    if (data === undefined) throw new Error(`missing facet data in ${mark.ariaLabel}`);
    if (data === null) return; // ignore channel definitions if no data is provided TODO this right?
    const channels = {};
    if (fx != null) channels.fx = createChannel(data, {
      value: fx,
      scale: "fx"
    });
    if (fy != null) channels.fy = createChannel(data, {
      value: fy,
      scale: "fy"
    });
    applyScaleTransforms(channels, options);
    return {
      channels,
      groups: facetGroups(data, channels)
    };
  }

  // This mark links to a top-level facet, if present.
  if (topFacetState === undefined) return;

  // TODO Can we link the top-level facet channels here?
  const {
    channels,
    groups,
    data
  } = topFacetState;
  if (mark.facet !== "auto" || mark.data === data) return {
    channels,
    groups
  };

  // Warn for the common pitfall of wanting to facet mapped data with the
  // top-level facet option.
  if (data.length > 0 && (groups.size > 1 || groups.size === 1 && channels.fx && channels.fy && [...groups][0][1].size > 1) && arrayify(mark.data)?.length === data.length) {
    warn(`Warning: the ${mark.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
  }
}
function derive(mark, options = {}) {
  return initializer({
    ...options,
    x: null,
    y: null
  }, (data, facets, channels, scales, dimensions, context) => {
    return context.getMarkState(mark);
  });
}
function inferTips(marks) {
  const tips = [];
  for (const mark of marks) {
    let tipOptions = mark.tip;
    if (tipOptions) {
      if (tipOptions === true) tipOptions = {};else if (typeof tipOptions === "string") tipOptions = {
        pointer: tipOptions
      };
      let {
        pointer: p,
        preferredAnchor: a
      } = tipOptions;
      p = /^x$/i.test(p) ? pointerX : /^y$/i.test(p) ? pointerY : pointer; // TODO validate?
      tipOptions = p(derive(mark, tipOptions));
      tipOptions.title = null; // prevent implicit title for primitive data
      if (a === undefined) tipOptions.preferredAnchor = p === pointerY ? "left" : "bottom";
      const t = tip(mark.data, tipOptions);
      t.facet = mark.facet; // inherit facet settings
      t.facetAnchor = mark.facetAnchor; // inherit facet settings
      tips.push(t);
    }
  }
  return tips;
}
function inferAxes(marks, channelsByScale, options) {
  let {
    projection,
    x = {},
    y = {},
    fx = {},
    fy = {},
    axis,
    grid,
    facet = {},
    facet: {
      axis: facetAxis = axis,
      grid: facetGrid
    } = facet,
    x: {
      axis: xAxis = axis,
      grid: xGrid = xAxis === null ? null : grid
    } = x,
    y: {
      axis: yAxis = axis,
      grid: yGrid = yAxis === null ? null : grid
    } = y,
    fx: {
      axis: fxAxis = facetAxis,
      grid: fxGrid = fxAxis === null ? null : facetGrid
    } = fx,
    fy: {
      axis: fyAxis = facetAxis,
      grid: fyGrid = fyAxis === null ? null : facetGrid
    } = fy
  } = options;

  // Disable axes if the corresponding scale is not present.
  if (projection || !isScaleOptions(x) && !hasPositionChannel("x", marks)) xAxis = xGrid = null;
  if (projection || !isScaleOptions(y) && !hasPositionChannel("y", marks)) yAxis = yGrid = null;
  if (!channelsByScale.has("fx")) fxAxis = fxGrid = null;
  if (!channelsByScale.has("fy")) fyAxis = fyGrid = null;

  // Resolve the default implicit axes by checking for explicit ones.
  if (xAxis === undefined) xAxis = !hasAxis(marks, "x");
  if (yAxis === undefined) yAxis = !hasAxis(marks, "y");
  if (fxAxis === undefined) fxAxis = !hasAxis(marks, "fx");
  if (fyAxis === undefined) fyAxis = !hasAxis(marks, "fy");

  // Resolve the default orientation of axes.
  if (xAxis === true) xAxis = "bottom";
  if (yAxis === true) yAxis = "left";
  if (fxAxis === true) fxAxis = xAxis === "top" || xAxis === null ? "bottom" : "top";
  if (fyAxis === true) fyAxis = yAxis === "right" || yAxis === null ? "left" : "right";
  const axes = [];
  maybeGrid(axes, fyGrid, gridFy, fy);
  maybeAxis(axes, fyAxis, axisFy, "right", "left", facet, fy);
  maybeGrid(axes, fxGrid, gridFx, fx);
  maybeAxis(axes, fxAxis, axisFx, "top", "bottom", facet, fx);
  maybeGrid(axes, yGrid, gridY, y);
  maybeAxis(axes, yAxis, axisY, "left", "right", options, y);
  maybeGrid(axes, xGrid, gridX, x);
  maybeAxis(axes, xAxis, axisX, "bottom", "top", options, x);
  return axes;
}
function maybeAxis(axes, axis, axisType, primary, secondary, defaults, options) {
  if (!axis) return;
  const both = isBoth(axis);
  options = axisOptions(both ? primary : axis, defaults, options);
  const {
    line
  } = options;
  if ((axisType === axisY || axisType === axisX) && line && !isNone(line)) axes.push(frame(lineOptions(options)));
  axes.push(axisType(options));
  if (both) axes.push(axisType({
    ...options,
    anchor: secondary,
    label: null
  }));
}
function maybeGrid(axes, grid, gridType, options) {
  if (!grid || isNone(grid)) return;
  axes.push(gridType(gridOptions(grid, options)));
}
function isBoth(value) {
  return /^\s*both\s*$/i.test(value);
}
function axisOptions(anchor, defaults, {
  line = defaults.line,
  ticks,
  tickSize,
  tickSpacing,
  tickPadding,
  tickFormat,
  tickRotate,
  fontVariant,
  ariaLabel,
  ariaDescription,
  label = defaults.label,
  labelAnchor,
  labelArrow = defaults.labelArrow,
  labelOffset
}) {
  return {
    anchor,
    line,
    ticks,
    tickSize,
    tickSpacing,
    tickPadding,
    tickFormat,
    tickRotate,
    fontVariant,
    ariaLabel,
    ariaDescription,
    label,
    labelAnchor,
    labelArrow,
    labelOffset
  };
}
function lineOptions(options) {
  const {
    anchor,
    line
  } = options;
  return {
    anchor,
    facetAnchor: anchor + "-empty",
    stroke: line === true ? undefined : line
  };
}
function gridOptions(grid, {
  stroke = isColor(grid) ? grid : undefined,
  ticks = isGridTicks(grid) ? grid : undefined,
  tickSpacing,
  ariaLabel,
  ariaDescription
}) {
  return {
    stroke,
    ticks,
    tickSpacing,
    ariaLabel,
    ariaDescription
  };
}
function isGridTicks(grid) {
  switch (typeof grid) {
    case "number":
      return true;
    case "string":
      return !isColor(grid);
  }
  return isIterable(grid) || typeof grid?.range === "function";
}

// Is there an explicit axis already present? TODO We probably want a more
// explicit test than looking for the ARIA label, but it does afford some
// flexibility in axis implementation which is nice.
function hasAxis(marks, k) {
  const prefix = `${k}-axis `;
  return marks.some(m => m.ariaLabel?.startsWith(prefix));
}
function hasPositionChannel(k, marks) {
  for (const mark of marks) {
    for (const key in mark.channels) {
      const {
        scale
      } = mark.channels[key];
      if (scale === k || scale === "projection") {
        return true;
      }
    }
  }
  return false;
}
function inheritScaleLabels(newScales, scales) {
  for (const key in newScales) {
    const newScale = newScales[key];
    const scale = scales[key];
    if (newScale.label === undefined && scale) {
      newScale.label = scale.label;
    }
  }
  return newScales;
}

// This differs from the other outerDimensions in that it accounts for rounding
// and outer padding in the facet scales; we want the frame to align exactly
// with the actual range, not the desired range.
function actualDimensions({
  fx,
  fy
}, dimensions) {
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    height
  } = outerDimensions(dimensions);
  const fxr = fx && outerRange(fx);
  const fyr = fy && outerRange(fy);
  return {
    marginTop: fy ? fyr[0] : marginTop,
    marginRight: fx ? width - fxr[1] : marginRight,
    marginBottom: fy ? height - fyr[1] : marginBottom,
    marginLeft: fx ? fxr[0] : marginLeft,
    // Some marks, namely the x- and y-axis labels, want to know what the
    // desired (rather than actual) margins are for positioning.
    inset: {
      marginTop: dimensions.marginTop,
      marginRight: dimensions.marginRight,
      marginBottom: dimensions.marginBottom,
      marginLeft: dimensions.marginLeft
    },
    width,
    height
  };
}
function outerRange(scale) {
  const domain = scale.domain();
  let x1 = scale(domain[0]);
  let x2 = scale(domain[domain.length - 1]);
  if (x2 < x1) [x1, x2] = [x2, x1];
  return [x1, x2 + scale.bandwidth()];
}

const curves = new Map([["basis", curveBasis], ["basis-closed", curveBasisClosed], ["basis-open", curveBasisOpen], ["bundle", curveBundle], ["bump-x", bumpX], ["bump-y", bumpY], ["cardinal", curveCardinal], ["cardinal-closed", curveCardinalClosed], ["cardinal-open", curveCardinalOpen], ["catmull-rom", curveCatmullRom], ["catmull-rom-closed", curveCatmullRomClosed], ["catmull-rom-open", curveCatmullRomOpen], ["linear", curveLinear], ["linear-closed", curveLinearClosed], ["monotone-x", monotoneX], ["monotone-y", monotoneY], ["natural", curveNatural], ["step", curveStep], ["step-after", stepAfter], ["step-before", stepBefore]]);
function maybeCurve(curve = curveLinear, tension) {
  if (typeof curve === "function") return curve; // custom curve
  const c = curves.get(`${curve}`.toLowerCase());
  if (!c) throw new Error(`unknown curve: ${curve}`);
  if (tension !== undefined) {
    if ("beta" in c) {
      return c.beta(tension);
    } else if ("tension" in c) {
      return c.tension(tension);
    } else if ("alpha" in c) {
      return c.alpha(tension);
    }
  }
  return c;
}

// For the “auto” curve, return a symbol instead of a curve implementation;
// we’ll use d3.geoPath to render if there’s a projection.
function maybeCurveAuto(curve = curveAuto, tension) {
  return typeof curve !== "function" && `${curve}`.toLowerCase() === "auto" ? curveAuto : maybeCurve(curve, tension);
}

// This is a special built-in curve that will use d3.geoPath when there is a
// projection, and the linear curve when there is not. You can explicitly
// opt-out of d3.geoPath and instead use d3.line with the "linear" curve.
function curveAuto(context) {
  return curveLinear(context);
}

// Group on {z, fill, stroke}, then optionally on y, then bin x.
function binX(outputs = {
  y: "count"
}, options = {}) {
  [outputs, options] = mergeOptions$1(outputs, options);
  const {
    x,
    y
  } = options;
  return binn(maybeBinValue(x, options, identity$1), null, null, y, outputs, maybeInsetX(options));
}
function maybeDenseInterval(bin, k, options = {}) {
  if (options?.interval == null) return options;
  const {
    reduce = reduceFirst
  } = options;
  const outputs = {
    filter: null
  };
  if (options[k] != null) outputs[k] = reduce;
  if (options[`${k}1`] != null) outputs[`${k}1`] = reduce;
  if (options[`${k}2`] != null) outputs[`${k}2`] = reduce;
  return bin(outputs, options);
}
function maybeDenseIntervalX(options = {}) {
  return maybeDenseInterval(binX, "y", withTip(options, "x"));
}
function binn(bx,
// optionally bin on x (exclusive with gx)
by,
// optionally bin on y (exclusive with gy)
gx,
// optionally group on x (exclusive with bx and gy)
gy,
// optionally group on y (exclusive with by and gx)
{
  data: reduceData = reduceIdentity,
  // TODO avoid materializing when unused?
  filter = reduceCount,
  // return only non-empty bins by default
  sort,
  reverse,
  ...outputs // output channel definitions
} = {}, inputs = {} // input channels and options
) {
  bx = maybeBin(bx);
  by = maybeBin(by);

  // Compute the outputs.
  outputs = maybeBinOutputs(outputs, inputs);
  reduceData = maybeBinReduce(reduceData, identity$1);
  sort = sort == null ? undefined : maybeBinOutput("sort", sort, inputs);
  filter = filter == null ? undefined : maybeBinEvaluator("filter", filter, inputs);
  if (gy != null && hasOutput(outputs, "y", "y1", "y2")) gy = null;

  // Produce x1, x2, y1, and y2 output channels as appropriate (when binning).
  const [BX1, setBX1] = maybeColumn(bx);
  const [BX2, setBX2] = maybeColumn(bx);
  const [BY1, setBY1] = maybeColumn(by);
  const [BY2, setBY2] = maybeColumn(by);

  // Produce x or y output channels as appropriate (when grouping).
  const [k, gk] = gy != null ? [gy, "y"] : [];
  const [GK, setGK] = maybeColumn(k);

  // Greedily materialize the z, fill, and stroke channels (if channels and not
  // constants) so that we can reference them for subdividing groups without
  // computing them more than once. We also want to consume options that should
  // only apply to this transform rather than passing them through to the next.
  const {
    x,
    y,
    z,
    fill,
    stroke,
    x1,
    x2,
    // consumed if x is an output
    y1,
    y2,
    // consumed if y is an output
    domain,
    cumulative,
    thresholds,
    interval,
    ...options
  } = inputs;
  const [GZ, setGZ] = maybeColumn(z);
  const [vfill] = maybeColorChannel(fill);
  const [vstroke] = maybeColorChannel(stroke);
  const [GF, setGF] = maybeColumn(vfill);
  const [GS, setGS] = maybeColumn(vstroke);
  return {
    ...("z" in inputs && {
      z: GZ || z
    }),
    ...("fill" in inputs && {
      fill: GF || fill
    }),
    ...("stroke" in inputs && {
      stroke: GS || stroke
    }),
    ...basic(options, (data, facets, plotOptions) => {
      const K = maybeApplyInterval(valueof(data, k), plotOptions?.[gk]);
      const Z = valueof(data, z);
      const F = valueof(data, vfill);
      const S = valueof(data, vstroke);
      const G = maybeSubgroup(outputs, {
        z: Z,
        fill: F,
        stroke: S
      });
      const groupFacets = [];
      const groupData = [];
      const GK = K && setGK([]);
      const GZ = Z && setGZ([]);
      const GF = F && setGF([]);
      const GS = S && setGS([]);
      const BX1 = bx && setBX1([]);
      const BX2 = bx && setBX2([]);
      const BY1 = by && setBY1([]);
      const BY2 = by && setBY2([]);
      const bin = bing(bx, by, data);
      let i = 0;
      for (const o of outputs) o.initialize(data);
      if (sort) sort.initialize(data);
      if (filter) filter.initialize(data);
      for (const facet of facets) {
        const groupFacet = [];
        for (const o of outputs) o.scope("facet", facet);
        if (sort) sort.scope("facet", facet);
        if (filter) filter.scope("facet", facet);
        for (const [f, I] of maybeGroup(facet, G)) {
          for (const [k, g] of maybeGroup(I, K)) {
            for (const [b, extent] of bin(g)) {
              if (G) extent.z = f;
              if (filter && !filter.reduce(b, extent)) continue;
              groupFacet.push(i++);
              groupData.push(reduceData.reduceIndex(b, data, extent));
              if (K) GK.push(k);
              if (Z) GZ.push(G === Z ? f : Z[(b.length > 0 ? b : g)[0]]);
              if (F) GF.push(G === F ? f : F[(b.length > 0 ? b : g)[0]]);
              if (S) GS.push(G === S ? f : S[(b.length > 0 ? b : g)[0]]);
              if (BX1) BX1.push(extent.x1), BX2.push(extent.x2);
              if (BY1) BY1.push(extent.y1), BY2.push(extent.y2);
              for (const o of outputs) o.reduce(b, extent);
              if (sort) sort.reduce(b, extent);
            }
          }
        }
        groupFacets.push(groupFacet);
      }
      maybeSort(groupFacets, sort, reverse);
      return {
        data: groupData,
        facets: groupFacets
      };
    }),
    ...(!hasOutput(outputs, "x") && (BX1 ? {
      x1: BX1,
      x2: BX2,
      x: mid(BX1, BX2)
    } : {
      x,
      x1,
      x2
    })),
    ...(!hasOutput(outputs, "y") && (BY1 ? {
      y1: BY1,
      y2: BY2,
      y: mid(BY1, BY2)
    } : {
      y,
      y1,
      y2
    })),
    ...(GK && {
      [gk]: GK
    }),
    ...Object.fromEntries(outputs.map(({
      name,
      output
    }) => [name, output]))
  };
}

// Allow bin options to be specified as part of outputs; merge them into options.
function mergeOptions$1({
  cumulative,
  domain,
  thresholds,
  interval,
  ...outputs
}, options) {
  return [outputs, {
    cumulative,
    domain,
    thresholds,
    interval,
    ...options
  }];
}
function maybeBinValue(value, {
  cumulative,
  domain,
  thresholds,
  interval
}, defaultValue) {
  value = {
    ...maybeValue(value)
  };
  if (value.domain === undefined) value.domain = domain;
  if (value.cumulative === undefined) value.cumulative = cumulative;
  if (value.thresholds === undefined) value.thresholds = thresholds;
  if (value.interval === undefined) value.interval = interval;
  if (value.value === undefined) value.value = defaultValue;
  value.thresholds = maybeThresholds(value.thresholds, value.interval);
  return value;
}
function maybeBin(options) {
  if (options == null) return;
  const {
    value,
    cumulative,
    domain = extent$1,
    thresholds
  } = options;
  const bin = data => {
    let V = valueof(data, value);
    let T; // bin thresholds
    if (isTemporal(V) || isTimeThresholds(thresholds)) {
      V = map(V, coerceDate, Float64Array); // like coerceDates, but faster
      let [min, max] = typeof domain === "function" ? domain(V) : domain;
      let t = typeof thresholds === "function" && !isInterval(thresholds) ? thresholds(V, min, max) : thresholds;
      if (typeof t === "number") t = utcTickInterval(min, max, t);
      if (isInterval(t)) {
        if (domain === extent$1) {
          min = t.floor(min);
          max = t.offset(t.floor(max));
        }
        t = t.range(min, t.offset(max));
      }
      T = t;
    } else {
      V = coerceNumbers(V);
      let [min, max] = typeof domain === "function" ? domain(V) : domain;
      let t = typeof thresholds === "function" && !isInterval(thresholds) ? thresholds(V, min, max) : thresholds;
      if (typeof t === "number") {
        // This differs from d3.ticks with regard to exclusive bounds: we want a
        // first threshold less than or equal to the minimum, and a last
        // threshold (strictly) greater than the maximum.
        if (domain === extent$1) {
          let step = tickIncrement(min, max, t);
          if (isFinite(step)) {
            if (step > 0) {
              let r0 = Math.round(min / step);
              let r1 = Math.round(max / step);
              if (!(r0 * step <= min)) --r0;
              if (!(r1 * step > max)) ++r1;
              let n = r1 - r0 + 1;
              t = new Float64Array(n);
              for (let i = 0; i < n; ++i) t[i] = (r0 + i) * step;
            } else if (step < 0) {
              step = -step;
              let r0 = Math.round(min * step);
              let r1 = Math.round(max * step);
              if (!(r0 / step <= min)) --r0;
              if (!(r1 / step > max)) ++r1;
              let n = r1 - r0 + 1;
              t = new Float64Array(n);
              for (let i = 0; i < n; ++i) t[i] = (r0 + i) / step;
            } else {
              t = [min];
            }
          } else {
            t = [min];
          }
        } else {
          t = ticks(min, max, t);
        }
      } else if (isInterval(t)) {
        if (domain === extent$1) {
          min = t.floor(min);
          max = t.offset(t.floor(max));
        }
        t = t.range(min, t.offset(max));
      }
      T = t;
    }
    const E = [];
    if (T.length === 1) E.push([T[0], T[0]]); // collapsed domain
    else for (let i = 1; i < T.length; ++i) E.push([T[i - 1], T[i]]);
    E.bin = (cumulative < 0 ? bin1cn : cumulative > 0 ? bin1cp : bin1)(E, T, V);
    return E;
  };
  bin.label = labelof(value);
  return bin;
}
function maybeThresholds(thresholds, interval, defaultThresholds = thresholdAuto) {
  if (thresholds === undefined) {
    return interval === undefined ? defaultThresholds : maybeRangeInterval(interval);
  }
  if (typeof thresholds === "string") {
    switch (thresholds.toLowerCase()) {
      case "freedman-diaconis":
        return thresholdFreedmanDiaconis;
      case "scott":
        return thresholdScott;
      case "sturges":
        return thresholdSturges;
      case "auto":
        return thresholdAuto;
    }
    return maybeUtcInterval(thresholds);
  }
  return thresholds; // pass array, count, or function to bin.thresholds
}
function maybeBinOutputs(outputs, inputs) {
  return maybeOutputs(outputs, inputs, maybeBinOutput);
}
function maybeBinOutput(name, reduce, inputs) {
  return maybeOutput(name, reduce, inputs, maybeBinEvaluator);
}
function maybeBinEvaluator(name, reduce, inputs) {
  return maybeEvaluator(name, reduce, inputs, maybeBinReduce);
}
function maybeBinReduce(reduce, value) {
  return maybeReduce(reduce, value, maybeBinReduceFallback);
}
function maybeBinReduceFallback(reduce) {
  switch (`${reduce}`.toLowerCase()) {
    case "x":
      return reduceX;
    case "x1":
      return reduceX1;
    case "x2":
      return reduceX2;
    case "y":
      return reduceY;
    case "y1":
      return reduceY1;
    case "y2":
      return reduceY2;
    case "z":
      return reduceZ;
  }
  throw new Error(`invalid bin reduce: ${reduce}`);
}
function thresholdAuto(values, min, max) {
  return Math.min(200, thresholdScott(values, min, max));
}
function isTimeThresholds(t) {
  return isTimeInterval(t) || isIterable(t) && isTemporal(t);
}
function bing(bx, by, data) {
  const EX = bx?.(data);
  const EY = by?.(data);
  return EX && EY ? function* (I) {
    const X = EX.bin(I); // first bin on x
    for (const [ix, [x1, x2]] of EX.entries()) {
      const Y = EY.bin(X[ix]); // then bin on y
      for (const [iy, [y1, y2]] of EY.entries()) {
        yield [Y[iy], {
          data,
          x1,
          y1,
          x2,
          y2
        }];
      }
    }
  } : EX ? function* (I) {
    const X = EX.bin(I);
    for (const [i, [x1, x2]] of EX.entries()) {
      yield [X[i], {
        data,
        x1,
        x2
      }];
    }
  } : function* (I) {
    const Y = EY.bin(I);
    for (const [i, [y1, y2]] of EY.entries()) {
      yield [Y[i], {
        data,
        y1,
        y2
      }];
    }
  };
}

// non-cumulative distribution
function bin1(E, T, V) {
  T = coerceNumbers(T); // for faster bisection
  return I => {
    const B = E.map(() => []);
    for (const i of I) B[bisectRight(T, V[i]) - 1]?.push(i); // TODO quantization?
    return B;
  };
}

// cumulative distribution
function bin1cp(E, T, V) {
  const bin = bin1(E, T, V);
  return I => {
    const B = bin(I);
    for (let i = 1, n = B.length; i < n; ++i) {
      const C = B[i - 1];
      const b = B[i];
      for (const j of C) b.push(j);
    }
    return B;
  };
}

// complementary cumulative distribution
function bin1cn(E, T, V) {
  const bin = bin1(E, T, V);
  return I => {
    const B = bin(I);
    for (let i = B.length - 2; i >= 0; --i) {
      const C = B[i + 1];
      const b = B[i];
      for (const j of C) b.push(j);
    }
    return B;
  };
}
function mid1(x1, x2) {
  const m = (+x1 + +x2) / 2;
  return x1 instanceof Date ? new Date(m) : m;
}
const reduceX = {
  reduceIndex(I, X, {
    x1,
    x2
  }) {
    return mid1(x1, x2);
  }
};
const reduceY = {
  reduceIndex(I, X, {
    y1,
    y2
  }) {
    return mid1(y1, y2);
  }
};
const reduceX1 = {
  reduceIndex(I, X, {
    x1
  }) {
    return x1;
  }
};
const reduceX2 = {
  reduceIndex(I, X, {
    x2
  }) {
    return x2;
  }
};
const reduceY1 = {
  reduceIndex(I, X, {
    y1
  }) {
    return y1;
  }
};
const reduceY2 = {
  reduceIndex(I, X, {
    y2
  }) {
    return y2;
  }
};

function maybeIdentityY(options = {}) {
  return hasY(options) ? options : {
    ...options,
    y: identity$1
  };
}

function exclusiveFacets(data, facets) {
  if (facets.length === 1) return {
    data,
    facets
  }; // only one facet; trivially exclusive

  const n = data.length;
  const O = new Uint8Array(n);
  let overlaps = 0;

  // Count the number of overlapping indexes across facets.
  for (const facet of facets) {
    for (const i of facet) {
      if (O[i]) ++overlaps;
      O[i] = 1;
    }
  }

  // Do nothing if the facets are already exclusive.
  if (overlaps === 0) return {
    data,
    facets
  }; // facets are exclusive

  // For each overlapping index (duplicate), assign a new unique index at the
  // end of the existing array, duplicating the datum. For example, [[0, 1, 2],
  // [2, 1, 3]] would become [[0, 1, 2], [4, 5, 3]]. Also attach a reindex to
  // the data to preserve the association of channel values specified as arrays.
  data = slice(data);
  const R = data[reindex] = new Uint32Array(n + overlaps);
  facets = facets.map(facet => slice(facet, Uint32Array));
  let j = n;
  O.fill(0);
  for (const facet of facets) {
    for (let k = 0, m = facet.length; k < m; ++k) {
      const i = facet[k];
      if (O[i]) facet[k] = j, data[j] = data[i], R[j] = i, ++j;else R[i] = i;
      O[i] = 1;
    }
  }
  return {
    data,
    facets
  };
}

function stackY(stackOptions = {}, options = {}) {
  if (arguments.length === 1) [stackOptions, options] = mergeOptions(stackOptions);
  const {
    x1,
    x = x1,
    y,
    ...rest
  } = options; // note: consumes y!
  const [transform, X, y1, y2] = stack(x, y, "x", "y", stackOptions, rest);
  return {
    ...transform,
    x1,
    x: X,
    y1,
    y2,
    y: mid(y1, y2)
  };
}
function maybeStackY({
  y,
  y1,
  y2,
  ...options
} = {}) {
  options = withTip(options, "x");
  if (y1 === undefined && y2 === undefined) return stackY({
    y,
    ...options
  });
  [y1, y2] = maybeZero(y, y1, y2);
  return {
    ...options,
    y1,
    y2
  };
}

// The reverse option is ambiguous: it is both a stack option and a basic
// transform. If only one options object is specified, we interpret it as a
// stack option, and therefore must remove it from the propagated options.
function mergeOptions(options) {
  const {
    offset,
    order,
    reverse,
    ...rest
  } = options;
  return [{
    offset,
    order,
    reverse
  }, rest];
}

// This is a hint to the tooltip mark that the y1 and y2 channels (for stackY,
// or conversely x1 and x2 for stackX) represent a stacked length, and that the
// tooltip should therefore show y2-y1 instead of an extent.
const lengthy = {
  length: true
};
function stack(x, y = one, kx, ky, {
  offset,
  order,
  reverse
}, options) {
  if (y === null) throw new Error(`stack requires ${ky}`);
  const z = maybeZ(options);
  const [X, setX] = maybeColumn(x);
  const [Y1, setY1] = column(y);
  const [Y2, setY2] = column(y);
  Y1.hint = Y2.hint = lengthy;
  offset = maybeOffset(offset);
  order = maybeOrder(order, offset, ky);
  return [basic(options, (data, facets, plotOptions) => {
    ({
      data,
      facets
    } = exclusiveFacets(data, facets));
    const X = x == null ? undefined : setX(maybeApplyInterval(valueof(data, x), plotOptions?.[kx]));
    const Y = valueof(data, y, Float64Array);
    const Z = valueof(data, z);
    const compare = order && order(data, X, Y, Z);
    const n = data.length;
    const Y1 = setY1(new Float64Array(n));
    const Y2 = setY2(new Float64Array(n));
    const facetstacks = [];
    for (const facet of facets) {
      const stacks = X ? Array.from(group(facet, i => X[i]).values()) : [facet];
      if (compare) for (const stack of stacks) stack.sort(compare);
      for (const stack of stacks) {
        let yn = 0;
        let yp = 0;
        if (reverse) stack.reverse();
        for (const i of stack) {
          const y = Y[i];
          if (y < 0) yn = Y2[i] = (Y1[i] = yn) + y;else if (y > 0) yp = Y2[i] = (Y1[i] = yp) + y;else Y2[i] = Y1[i] = yp; // NaN or zero
        }
      }
      facetstacks.push(stacks);
    }
    if (offset) offset(facetstacks, Y1, Y2, Z);
    return {
      data,
      facets
    };
  }), X, Y1, Y2];
}
function maybeOffset(offset) {
  if (offset == null) return;
  if (typeof offset === "function") return offset;
  switch (`${offset}`.toLowerCase()) {
    case "expand":
    case "normalize":
      return offsetExpand;
    case "center":
    case "silhouette":
      return offsetCenter;
    case "wiggle":
      return offsetWiggle;
  }
  throw new Error(`unknown offset: ${offset}`);
}

// Given a single stack, returns the minimum and maximum values from the given
// Y2 column. Note that this relies on Y2 always being the outer column for
// diverging values.
function extent(stack, Y2) {
  let min = 0,
    max = 0;
  for (const i of stack) {
    const y = Y2[i];
    if (y < min) min = y;
    if (y > max) max = y;
  }
  return [min, max];
}
function offsetExpand(facetstacks, Y1, Y2) {
  for (const stacks of facetstacks) {
    for (const stack of stacks) {
      const [yn, yp] = extent(stack, Y2);
      for (const i of stack) {
        const m = 1 / (yp - yn || 1);
        Y1[i] = m * (Y1[i] - yn);
        Y2[i] = m * (Y2[i] - yn);
      }
    }
  }
}
function offsetCenter(facetstacks, Y1, Y2) {
  for (const stacks of facetstacks) {
    for (const stack of stacks) {
      const [yn, yp] = extent(stack, Y2);
      for (const i of stack) {
        const m = (yp + yn) / 2;
        Y1[i] -= m;
        Y2[i] -= m;
      }
    }
    offsetZero(stacks, Y1, Y2);
  }
  offsetCenterFacets(facetstacks, Y1, Y2);
}
function offsetWiggle(facetstacks, Y1, Y2, Z) {
  for (const stacks of facetstacks) {
    const prev = new InternMap();
    let y = 0;
    for (const stack of stacks) {
      let j = -1;
      const Fi = stack.map(i => Math.abs(Y2[i] - Y1[i]));
      const Df = stack.map(i => {
        j = Z ? Z[i] : ++j;
        const value = Y2[i] - Y1[i];
        const diff = prev.has(j) ? value - prev.get(j) : 0;
        prev.set(j, value);
        return diff;
      });
      const Cf1 = [0, ...cumsum(Df)];
      for (const i of stack) {
        Y1[i] += y;
        Y2[i] += y;
      }
      const s1 = sum(Fi);
      if (s1) y -= sum(Fi, (d, i) => (Df[i] / 2 + Cf1[i]) * d) / s1;
    }
    offsetZero(stacks, Y1, Y2);
  }
  offsetCenterFacets(facetstacks, Y1, Y2);
}
function offsetZero(stacks, Y1, Y2) {
  const m = min$1(stacks, stack => min$1(stack, i => Y1[i]));
  for (const stack of stacks) {
    for (const i of stack) {
      Y1[i] -= m;
      Y2[i] -= m;
    }
  }
}
function offsetCenterFacets(facetstacks, Y1, Y2) {
  const n = facetstacks.length;
  if (n === 1) return;
  const facets = facetstacks.map(stacks => stacks.flat());
  const m = facets.map(I => (min$1(I, i => Y1[i]) + max(I, i => Y2[i])) / 2);
  const m0 = min$1(m);
  for (let j = 0; j < n; j++) {
    const p = m0 - m[j];
    for (const i of facets[j]) {
      Y1[i] += p;
      Y2[i] += p;
    }
  }
}
function maybeOrder(order, offset, ky) {
  if (order === undefined && offset === offsetWiggle) return orderInsideOut(ascendingDefined);
  if (order == null) return;
  if (typeof order === "string") {
    const negate = order.startsWith("-");
    const compare = negate ? descendingDefined : ascendingDefined;
    switch ((negate ? order.slice(1) : order).toLowerCase()) {
      case "value":
      case ky:
        return orderY(compare);
      case "z":
        return orderZ(compare);
      case "sum":
        return orderSum(compare);
      case "appearance":
        return orderAppearance(compare);
      case "inside-out":
        return orderInsideOut(compare);
    }
    return orderAccessor(field(order));
  }
  if (typeof order === "function") return (order.length === 1 ? orderAccessor : orderComparator)(order);
  if (Array.isArray(order)) return orderGiven(order);
  throw new Error(`invalid order: ${order}`);
}

// by value
function orderY(compare) {
  return (data, X, Y) => (i, j) => compare(Y[i], Y[j]);
}

// by location
function orderZ(compare) {
  return (data, X, Y, Z) => (i, j) => compare(Z[i], Z[j]);
}

// by sum of value (a.k.a. “ascending”)
function orderSum(compare) {
  return orderZDomain(compare, (data, X, Y, Z) => groupSort(range(data), I => sum(I, i => Y[i]), i => Z[i]));
}

// by x = argmax of value
function orderAppearance(compare) {
  return orderZDomain(compare, (data, X, Y, Z) => groupSort(range(data), I => X[greatest(I, i => Y[i])], i => Z[i]));
}

// by x = argmax of value, but rearranged inside-out by alternating series
// according to the sign of a running divergence of sums
function orderInsideOut(compare) {
  return orderZDomain(compare, (data, X, Y, Z) => {
    const I = range(data);
    const K = groupSort(I, I => X[greatest(I, i => Y[i])], i => Z[i]);
    const sums = rollup(I, I => sum(I, i => Y[i]), i => Z[i]);
    const Kp = [],
      Kn = [];
    let s = 0;
    for (const k of K) {
      if (s < 0) {
        s += sums.get(k);
        Kp.push(k);
      } else {
        s -= sums.get(k);
        Kn.push(k);
      }
    }
    return Kn.reverse().concat(Kp);
  });
}
function orderAccessor(f) {
  return data => {
    const O = valueof(data, f);
    return (i, j) => ascendingDefined(O[i], O[j]);
  };
}
function orderComparator(f) {
  return data => (i, j) => f(data[i], data[j]);
}
function orderGiven(domain) {
  return orderZDomain(ascendingDefined, () => domain);
}

// Given an ordering (domain) of distinct values in z that can be derived from
// the data, returns a comparator that can be used to sort stacks. Note that
// this is a series order: it will be consistent across stacks.
function orderZDomain(compare, domain) {
  return (data, X, Y, Z) => {
    if (!Z) throw new Error("missing channel: z");
    const map = new InternMap(domain(data, X, Y, Z).map((d, i) => [d, i]));
    return (i, j) => compare(map.get(Z[i]), map.get(Z[j]));
  };
}

const defaults$1 = {
  ariaLabel: "line",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1
};
class Line extends Mark {
  constructor(data, options = {}) {
    const {
      x,
      y,
      z,
      curve,
      tension
    } = options;
    super(data, {
      x: {
        value: x,
        scale: "x"
      },
      y: {
        value: y,
        scale: "y"
      },
      z: {
        value: maybeZ(options),
        optional: true
      }
    }, options, defaults$1);
    this.z = z;
    this.curve = maybeCurveAuto(curve, tension);
    markers(this, options);
  }
  filter(index) {
    return index;
  }
  project(channels, values, context) {
    // For the auto curve, projection is handled at render.
    if (this.curve !== curveAuto) {
      super.project(channels, values, context);
    }
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x: X,
      y: Y
    } = channels;
    const {
      curve
    } = this;
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, scales).call(g => g.selectAll().data(groupIndex(index, [X, Y], this, channels)).enter().append("path").call(applyDirectStyles, this).call(applyGroupedChannelStyles, this, channels).call(applyGroupedMarkers, this, channels, context).attr("d", curve === curveAuto && context.projection ? sphereLine(context.projection, X, Y) : shapeLine().curve(curve).defined(i => i >= 0).x(i => X[i]).y(i => Y[i]))).node();
  }
}
function sphereLine(projection, X, Y) {
  const path = geoPath(projection);
  X = coerceNumbers(X);
  Y = coerceNumbers(Y);
  return I => {
    let line = [];
    const lines = [line];
    for (const i of I) {
      // Check for undefined value; see groupIndex.
      if (i === -1) {
        line = [];
        lines.push(line);
      } else {
        line.push([X[i], Y[i]]);
      }
    }
    return path({
      type: "MultiLineString",
      coordinates: lines
    });
  };
}
function lineY(data, {
  x = indexOf,
  y = identity$1,
  ...options
} = {}) {
  return new Line(data, maybeDenseIntervalX({
    ...options,
    x,
    y
  }));
}

const defaults = {
  ariaLabel: "rect"
};
class Rect extends Mark {
  constructor(data, options = {}) {
    const {
      x1,
      y1,
      x2,
      y2,
      inset = 0,
      insetTop = inset,
      insetRight = inset,
      insetBottom = inset,
      insetLeft = inset,
      rx,
      ry
    } = options;
    super(data, {
      x1: {
        value: x1,
        scale: "x",
        type: x1 != null && x2 == null ? "band" : undefined,
        optional: true
      },
      y1: {
        value: y1,
        scale: "y",
        type: y1 != null && y2 == null ? "band" : undefined,
        optional: true
      },
      x2: {
        value: x2,
        scale: "x",
        optional: true
      },
      y2: {
        value: y2,
        scale: "y",
        optional: true
      }
    }, options, defaults);
    this.insetTop = number(insetTop);
    this.insetRight = number(insetRight);
    this.insetBottom = number(insetBottom);
    this.insetLeft = number(insetLeft);
    this.rx = impliedString(rx, "auto"); // number or percentage
    this.ry = impliedString(ry, "auto");
  }
  render(index, scales, channels, dimensions, context) {
    const {
      x,
      y
    } = scales;
    const {
      x1: X1,
      y1: Y1,
      x2: X2,
      y2: Y2
    } = channels;
    const {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      width,
      height
    } = dimensions;
    const {
      projection
    } = context;
    const {
      insetTop,
      insetRight,
      insetBottom,
      insetLeft,
      rx,
      ry
    } = this;
    const bx = (x?.bandwidth ? x.bandwidth() : 0) - insetLeft - insetRight;
    const by = (y?.bandwidth ? y.bandwidth() : 0) - insetTop - insetBottom;
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, {}, 0, 0).call(g => g.selectAll().data(index).enter().append("rect").call(applyDirectStyles, this).attr("x", X1 && (projection || !isCollapsed(x)) ? X2 ? i => Math.min(X1[i], X2[i]) + insetLeft : i => X1[i] + insetLeft : marginLeft + insetLeft).attr("y", Y1 && (projection || !isCollapsed(y)) ? Y2 ? i => Math.min(Y1[i], Y2[i]) + insetTop : i => Y1[i] + insetTop : marginTop + insetTop).attr("width", X1 && (projection || !isCollapsed(x)) ? X2 ? i => Math.max(0, Math.abs(X2[i] - X1[i]) + bx) : bx : width - marginRight - marginLeft - insetRight - insetLeft).attr("height", Y1 && (projection || !isCollapsed(y)) ? Y2 ? i => Math.max(0, Math.abs(Y1[i] - Y2[i]) + by) : by : height - marginTop - marginBottom - insetTop - insetBottom).call(applyAttr, "rx", rx).call(applyAttr, "ry", ry).call(applyChannelStyles, this, channels)).node();
  }
}
function rectY(data, options = {}) {
  if (!hasXY(options)) options = {
    ...options,
    x: indexOf,
    y2: identity$1,
    interval: 1
  };
  return new Rect(data, maybeStackY(maybeTrivialIntervalX(maybeIdentityY(options))));
}

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

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewoJJ3VzZSBzdHJpY3QnOwoKCXZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9OwoKCXZhciBkaXN0cmlidXRpb25zID0ge2V4cG9ydHM6IHt9fTsKCgkoZnVuY3Rpb24gKG1vZHVsZSkgewoKCSAgLy8gQSBudW1iZXIgb2YgbG9nIHByb2JhYmlsaXR5IGRlbnNpdHkgZnVuY3Rpb25zIChQREYpLiBOYW1pbmcgYW5kIHBhcmFtZXRlcml6YXRpb24KCSAgLy8gc2hvdWxkIG1hdGNoIFIncywgZXhjZXB0IGZvciB0aGF0IGFsbCBmdW5jdGlvbnMgcmVzaWRlIGluIGFuIGxkIG9iamVjdCAoCgkgIC8vIGFzIGluICJsb2cgZGVuc2l0eSIpLCBzbyB0byBnZXQgYSBub3JtYWwgbG9nIGRlbnNpdHkgeW91IHdvdWxkIHdyaXRlCgkgIC8vIGxkLm5vcm0oLi4uKS4KCSAgLy8gTW9zdCBvZiB0aGUgY29kZSBiZWxvdyBpcyBkaXJlY3RseSB0YWtlbiBmcm9tIHRoZSBncmVhdCBKc3RhdCBwcm9qZWN0CgkgIC8vIChodHRwczovL2dpdGh1Yi5jb20vanN0YXQvKSB3aGljaCBpbmNsdWRlcyBQREYgZm9yIG1hbnkgY29tbW9uIHByb2JhYmlsaXR5CgkgIC8vIGRpc3RyaWJ1dGlvbnMuIFdoYXQgSSBoYXZlIGRvbmUgaXMgb25seSB0byBjb252ZXJ0IHRoZXNlIHRvIGxvZyBQREZzLgoKCSAgLyoKCSAgT3JpZ2luYWwgd29yayBDb3B5cmlnaHQgKGMpIDIwMTMgalN0YXQKCSAgTW9kaWZpZWQgd29yayBDb3B5cmlnaHQgKGMpIDIwMTUgUmFzbXVzIELDpcOldGggCgkgIAlQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5CgkgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICJTb2Z0d2FyZSIpLCB0byBkZWFsCgkgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMKCSAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbAoJICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMKCSAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoKCSAgCVRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluCgkgIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgoJICAJVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IKCSAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksCgkgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRQoJICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSCgkgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sCgkgIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4KCSAgVEhFIFNPRlRXQVJFLgoJICAJKi8KCgkgIC8vIFRoaXMgYm9pbGVyIHBsYXRlIGNvZGUgaGVyZSBpcyB0YWtlbiBmcm9tOgoJICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy9yZXR1cm5FeHBvcnRzLmpzCgkgIC8vIEl0IHNob3VsZCBtYWtlIHNodXJlIHRoYXQgbW9kdWxlIGNhbiBiZSBpbXBvcnRlZCBib3RoIGluIHRoZSBicm93c2VyLAoJICAvLyBOb2RlLCBhbmQgYnkgdXNpbmcgdGhlIEFzeW5jaHJvbm91cyBNb2R1bGUgRGVmaW5pdGlvbiBzdGFuZGFyZC4KCSAgLy8gSWYgdGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIHRoZSBicm93c2VyIGl0IHdpbGwgY3JlYXRlZCB0aGUgZ2xvYmFsCgkgIC8vIG9iamVjdCBsZCAuCgkgIChmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkgewoJICAgIGlmIChtb2R1bGUuZXhwb3J0cykgewoJICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0CgkgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cywKCSAgICAgIC8vIGxpa2UgTm9kZS4KCSAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOwoJICAgIH0gZWxzZSB7CgkgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KQoJICAgICAgcm9vdC5sZCA9IGZhY3RvcnkoKTsKCSAgICB9CgkgIH0pKGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7CgkgICAgLy8gT2JqZWN0IHRvIGhvbGQgdGhlIGZ1bmN0aW9ucyB0byBiZSBleHBvcnRlZC4KCSAgICB2YXIgbGQgPSB7fTsKCgkgICAgLy8vLy8vLy8vLyBIZWxwZXIgZnVuY3Rpb25zIC8vLy8vLy8vLy8KCSAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwoKCSAgICB2YXIgbGdhbW1hID0gZnVuY3Rpb24gKHgpIHsKCSAgICAgIHZhciBqID0gMDsKCSAgICAgIHZhciBjb2YgPSBbNzYuMTgwMDkxNzI5NDcxNDYsIC04Ni41MDUzMjAzMjk0MTY3NywgMjQuMDE0MDk4MjQwODMwOTEsIC0xLjIzMTczOTU3MjQ1MDE1NSwgMC4xMjA4NjUwOTczODY2MTc5ZS0yLCAtMC41Mzk1MjM5Mzg0OTUzZS01XTsKCSAgICAgIHZhciBzZXIgPSAxLjAwMDAwMDAwMDE5MDAxNTsKCSAgICAgIHZhciB4eCwgeSwgdG1wOwoJICAgICAgdG1wID0gKHkgPSB4eCA9IHgpICsgNS41OwoJICAgICAgdG1wIC09ICh4eCArIDAuNSkgKiBsb2codG1wKTsKCSAgICAgIGZvciAoOyBqIDwgNjsgaisrKSBzZXIgKz0gY29mW2pdIC8gKyt5OwoJICAgICAgcmV0dXJuIGxvZygyLjUwNjYyODI3NDYzMTAwMDUgKiBzZXIgLyB4eCkgLSB0bXA7CgkgICAgfTsKCSAgICBsZC5sZ2FtbWEgPSBsZ2FtbWE7CgkgICAgdmFyIGxmYWN0b3JpYWwgPSBmdW5jdGlvbiAobikgewoJICAgICAgcmV0dXJuIG4gPCAwID8gTmFOIDogbGdhbW1hKG4gKyAxKTsKCSAgICB9OwoJICAgIGxkLmxmYWN0b3JpYWwgPSBsZmFjdG9yaWFsOwoJICAgIHZhciBsY2hvb3NlID0gZnVuY3Rpb24gKG4sIGspIHsKCSAgICAgIHJldHVybiBsZmFjdG9yaWFsKG4pIC0gbGZhY3RvcmlhbChrKSAtIGxmYWN0b3JpYWwobiAtIGspOwoJICAgIH07CgkgICAgbGQubGNob29zZSA9IGxjaG9vc2U7CgkgICAgdmFyIGxiZXRhID0gZnVuY3Rpb24gKGEsIGIpIHsKCSAgICAgIHJldHVybiBsZ2FtbWEoYSkgKyBsZ2FtbWEoYikgLSBsZ2FtbWEoYSArIGIpOwoJICAgIH07CgkgICAgbGQubGJldGEgPSBsYmV0YTsKCSAgICB2YXIgbG9nID0gTWF0aC5sb2c7CgkgICAgdmFyIGV4cCA9IE1hdGguZXhwOwoJICAgIHZhciBhYnMgPSBNYXRoLmFiczsKCSAgICB2YXIgcG93ID0gTWF0aC5wb3c7CgkgICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7CgkgICAgdmFyIHBpID0gTWF0aC5QSTsKCgkgICAgLy8vLy8vLy8vLyBDb250aW5vdXMgZGlzdHJpYnV0aW9ucyAvLy8vLy8vLy8vCgkgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCgoJICAgIGxkLmJldGEgPSBmdW5jdGlvbiAoeCwgc2hhcGUxLCBzaGFwZTIpIHsKCSAgICAgIGlmICh4ID4gMSB8fCB4IDwgMCkgewoJICAgICAgICByZXR1cm4gLUluZmluaXR5OwoJICAgICAgfQoJICAgICAgaWYgKHNoYXBlMSA9PT0gMSAmJiBzaGFwZTIgPT09IDEpIHsKCSAgICAgICAgcmV0dXJuIDA7CgkgICAgICB9IGVsc2UgewoJICAgICAgICByZXR1cm4gKHNoYXBlMSAtIDEpICogbG9nKHgpICsgKHNoYXBlMiAtIDEpICogbG9nKDEgLSB4KSAtIGxiZXRhKHNoYXBlMSwgc2hhcGUyKTsKCSAgICAgIH0KCSAgICB9OwoJICAgIGxkLmNhdWNoeSA9IGZ1bmN0aW9uICh4LCBsb2NhdGlvbiwgc2NhbGUpIHsKCSAgICAgIHJldHVybiBsb2coc2NhbGUpIC0gbG9nKHBvdyh4IC0gbG9jYXRpb24sIDIpICsgcG93KHNjYWxlLCAyKSkgLSBsb2cocGkpOwoJICAgIH07CgkgICAgbGQubm9ybSA9IGZ1bmN0aW9uICh4LCBtZWFuLCBzZCkgewoJICAgICAgcmV0dXJuIC0wLjUgKiBsb2coMiAqIHBpKSAtIGxvZyhzZCkgLSBwb3coeCAtIG1lYW4sIDIpIC8gKDIgKiBzZCAqIHNkKTsKCSAgICB9OwoKCSAgICAvLyBBIGJpdmFyaWF0ZSBOb3JtYWwgZGlzdHJpYnV0aW9uIHBhcmFtZXRlcml6ZWQgYnkgYXJyYXlzIG9mIHR3byBtZWFucyBhbmQgU0RzLCBhbmQgCgkgICAgLy8gdGhlIGNvcnJlbGF0aW9uLgoJICAgIGxkLmJpdmFybm9ybSA9IGZ1bmN0aW9uICh4LCBtZWFuLCBzZCwgY29ycikgewoJICAgICAgdmFyIHogPSBwb3coeFswXSAtIG1lYW5bMF0sIDIpIC8gcG93KHNkWzBdLCAyKSArIHBvdyh4WzFdIC0gbWVhblsxXSwgMikgLyBwb3coc2RbMV0sIDIpIC0gMiAqIGNvcnIgKiAoeFswXSAtIG1lYW5bMF0pICogKHhbMV0gLSBtZWFuWzFdKSAvIChzZFswXSAqIHNkWzFdKTsKCSAgICAgIHZhciBub3JtYWxpemluZ19mYWN0b3IgPSAtKGxvZygyKSArIGxvZyhwaSkgKyBsb2coc2RbMF0pICsgbG9nKHNkWzFdKSArIDAuNSAqIGxvZygxIC0gcG93KGNvcnIsIDIpKSk7CgkgICAgICB2YXIgYml2YXJfbG9nX2RlbnMgPSBub3JtYWxpemluZ19mYWN0b3IgLSB6IC8gKDIgKiAoMSAtIHBvdyhjb3JyLCAyKSkpOwoJICAgICAgcmV0dXJuIGJpdmFyX2xvZ19kZW5zOwoJICAgIH07CgkgICAgbGQubGFwbGFjZSA9IGZ1bmN0aW9uICh4LCBsb2NhdGlvbiwgc2NhbGUpIHsKCSAgICAgIHJldHVybiAtYWJzKHggLSBsb2NhdGlvbikgLyBzY2FsZSAtIGxvZygyICogc2NhbGUpOwoJICAgIH07CgkgICAgbGQuZGV4cCA9IGxkLmxhcGxhY2U7CgkgICAgbGQuZ2FtbWEgPSBmdW5jdGlvbiAoeCwgc2hhcGUsIHJhdGUpIHsKCSAgICAgIHZhciBzY2FsZSA9IDEgLyByYXRlOwoJICAgICAgaWYgKHggPCAwKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICBpZiAoeCA9PT0gMCAmJiBzaGFwZSA9PT0gMSkgewoJICAgICAgICByZXR1cm4gLWxvZyhzY2FsZSk7CgkgICAgICB9IGVsc2UgewoJICAgICAgICByZXR1cm4gKHNoYXBlIC0gMSkgKiBsb2coeCkgLSB4IC8gc2NhbGUgLSBsZ2FtbWEoc2hhcGUpIC0gc2hhcGUgKiBsb2coc2NhbGUpOwoJICAgICAgfQoJICAgIH07CgkgICAgbGQuaW52Z2FtbWEgPSBmdW5jdGlvbiAoeCwgc2hhcGUsIHNjYWxlKSB7CgkgICAgICBpZiAoeCA8PSAwKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICByZXR1cm4gLShzaGFwZSArIDEpICogbG9nKHgpIC0gc2NhbGUgLyB4IC0gbGdhbW1hKHNoYXBlKSArIHNoYXBlICogbG9nKHNjYWxlKTsKCSAgICB9OwoJICAgIGxkLmxub3JtID0gZnVuY3Rpb24gKHgsIG1lYW5sb2csIHNkbG9nKSB7CgkgICAgICBpZiAoeCA8PSAwKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICByZXR1cm4gLWxvZyh4KSAtIDAuNSAqIGxvZygyICogcGkpIC0gbG9nKHNkbG9nKSAtIHBvdyhsb2coeCkgLSBtZWFubG9nLCAyKSAvICgyICogc2Rsb2cgKiBzZGxvZyk7CgkgICAgfTsKCSAgICBsZC5wYXJldG8gPSBmdW5jdGlvbiAoeCwgc2NhbGUsIHNoYXBlKSB7CgkgICAgICBpZiAoeCA8IHNjYWxlKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICByZXR1cm4gbG9nKHNoYXBlKSArIHNoYXBlICogbG9nKHNjYWxlKSAtIChzaGFwZSArIDEpICogbG9nKHgpOwoJICAgIH07CgkgICAgbGQudCA9IGZ1bmN0aW9uICh4LCBsb2NhdGlvbiwgc2NhbGUsIGRmKSB7CgkgICAgICBkZiA9IGRmID4gMWUxMDAgPyAxZTEwMCA6IGRmOwoJICAgICAgcmV0dXJuIGxnYW1tYSgoZGYgKyAxKSAvIDIpIC0gbGdhbW1hKGRmIC8gMikgLSBsb2coc3FydChwaSAqIGRmKSAqIHNjYWxlKSArIGxvZyhwb3coMSArIDEgLyBkZiAqIHBvdygoeCAtIGxvY2F0aW9uKSAvIHNjYWxlLCAyKSwgLShkZiArIDEpIC8gMikpOwoJICAgIH07CgoJICAgIC8vIFRoaXMgaXMgYSBkaXJlY3QgamF2YXNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUgUiBjb2RlIHVzZWQgdG8gZXZhbHVhdGUKCSAgICAvLyB0aGUgbG9nIGRlbnNpdHkgb2YgYSB3ZWlidWxsIGRpc3RyaWJ1dGlvbjogCgkgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3djaC9yLXNvdXJjZS9ibG9iL2IxNTZlM2E3MTE5NjdmNTgxMzFlMjNjMWIxZGMxZWE5MGUyZjBjNDMvc3JjL25tYXRoL2R3ZWlidWxsLmMKCSAgICBsZC53ZWlidWxsID0gZnVuY3Rpb24gKHgsIHNoYXBlLCBzY2FsZSkgewoJICAgICAgaWYgKHggPCAwKSByZXR1cm4gLUluZmluaXR5OwoJICAgICAgaWYgKHggPT09IDAgJiYgc2hhcGUgPCAxKSByZXR1cm4gSW5maW5pdHk7CgkgICAgICB2YXIgdG1wMSA9IHBvdyh4IC8gc2NhbGUsIHNoYXBlIC0gMSk7CgkgICAgICB2YXIgdG1wMiA9IHRtcDEgKiAoeCAvIHNjYWxlKTsKCSAgICAgIHJldHVybiAtdG1wMiArIGxvZyhzaGFwZSAqIHRtcDEgLyBzY2FsZSk7CgkgICAgfTsKCgkgICAgLy8gVGhpcyBpcyBhIGRpcmVjdCBqYXZhc2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSBSIGNvZGUgdXNlZCB0byBldmFsdWF0ZQoJICAgIC8vIHRoZSBsb2cgZGVuc2l0eSBvZiBhIGxvZ2lzdGljIGRpc3RyaWJ1dGlvbjogCgkgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3djaC9yLXNvdXJjZS9ibG9iL2IxNTZlM2E3MTE5NjdmNTgxMzFlMjNjMWIxZGMxZWE5MGUyZjBjNDMvc3JjL25tYXRoL2Rsb2dpcy5jCgkgICAgbGQubG9naXMgPSBmdW5jdGlvbiAoeCwgbG9jYXRpb24sIHNjYWxlKSB7CgkgICAgICB4ID0gYWJzKCh4IC0gbG9jYXRpb24pIC8gc2NhbGUpOwoJICAgICAgdmFyIGUgPSBleHAoLXgpOwoJICAgICAgdmFyIGYgPSAxLjAgKyBlOwoJICAgICAgcmV0dXJuIC0oeCArIGxvZyhzY2FsZSAqIGYgKiBmKSk7CgkgICAgfTsKCSAgICBsZC5kaXJpY2hsZXQgPSBmdW5jdGlvbiAoeCwgYWxwaGEpIHsKCSAgICAgIHZhciBzdW1fYWxwaGEgPSAwOwoJICAgICAgdmFyIHN1bV9sZ2FtbWFfYWxwaGEgPSAwOwoJICAgICAgdmFyIHN1bV9hbHBoYV9zdWJfMV9sb2dfeCA9IDA7CgkgICAgICB2YXIgbiA9IGFscGhhLmxlbmd0aDsKCSAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7CgkgICAgICAgIHN1bV9hbHBoYSArPSBhbHBoYVtpXTsKCSAgICAgICAgc3VtX2xnYW1tYV9hbHBoYSArPSBsZ2FtbWEoYWxwaGFbaV0pOwoJICAgICAgICBzdW1fYWxwaGFfc3ViXzFfbG9nX3ggKz0gKGFscGhhW2ldIC0gMSkgKiBsb2coeFtpXSk7CgkgICAgICB9CgkgICAgICByZXR1cm4gbGdhbW1hKHN1bV9hbHBoYSkgLSBzdW1fbGdhbW1hX2FscGhhICsgc3VtX2FscGhhX3N1Yl8xX2xvZ194OwoJICAgIH07CgkgICAgbGQuZXhwID0gZnVuY3Rpb24gKHgsIHJhdGUpIHsKCSAgICAgIHJldHVybiB4IDwgMCA/IC1JbmZpbml0eSA6IGxvZyhyYXRlKSAtIHJhdGUgKiB4OwoJICAgIH07CgkgICAgbGQudW5pZiA9IGZ1bmN0aW9uICh4LCBtaW4sIG1heCkgewoJICAgICAgcmV0dXJuIHggPCBtaW4gfHwgeCA+IG1heCA/IC1JbmZpbml0eSA6IGxvZygxIC8gKG1heCAtIG1pbikpOwoJICAgIH07CgoJICAgIC8vLy8vLy8vLy8gRGlzY3JldGUgZGlzdHJpYnV0aW9ucyAvLy8vLy8vLy8vCgkgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KCgkgICAgbGQuYmVybiA9IGZ1bmN0aW9uICh4LCBwcm9iKSB7CgkgICAgICByZXR1cm4gISh4ID09PSAwIHx8IHggPT09IDEpID8gLUluZmluaXR5IDogbG9nKHggKiBwcm9iICsgKDEgLSB4KSAqICgxIC0gcHJvYikpOwoJICAgIH07CgkgICAgbGQuY2F0ID0gZnVuY3Rpb24gKHgsIHByb2JzKSB7CgkgICAgICBpZiAoeCA8IDEgfHwgeCA+IHByb2JzLmxlbmd0aCkgewoJICAgICAgICByZXR1cm4gLUluZmluaXR5OwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgcmV0dXJuIGxvZyhwcm9ic1t4IC0gMV0pOwoJICAgICAgfQoJICAgIH07CgkgICAgbGQuYmlub20gPSBmdW5jdGlvbiAoeCwgc2l6ZSwgcHJvYikgewoJICAgICAgaWYgKHggPiBzaXplIHx8IHggPCAwKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICBpZiAocHJvYiA9PT0gMCB8fCBwcm9iID09PSAxKSB7CgkgICAgICAgIHJldHVybiBzaXplICogcHJvYiA9PT0geCA/IDAgOiAtSW5maW5pdHk7CgkgICAgICB9CgkgICAgICByZXR1cm4gbGNob29zZShzaXplLCB4KSArIHggKiBsb2cocHJvYikgKyAoc2l6ZSAtIHgpICogbG9nKDEgLSBwcm9iKTsKCSAgICB9OwoJICAgIGxkLm5iaW5vbSA9IGZ1bmN0aW9uICh4LCBzaXplLCBwcm9iKSB7CgkgICAgICBpZiAoeCA8IDApIHsKCSAgICAgICAgcmV0dXJuIC1JbmZpbml0eTsKCSAgICAgIH0KCSAgICAgIHJldHVybiBsY2hvb3NlKHggKyBzaXplIC0gMSwgc2l6ZSAtIDEpICsgeCAqIGxvZygxIC0gcHJvYikgKyBzaXplICogbG9nKHByb2IpOwoJICAgIH07CgkgICAgbGQuaHlwZXIgPSBmdW5jdGlvbiAoeCwgbSwgbiwgaykgewoJICAgICAgaWYgKHggPCAwIHx8IHggPiBrKSB7CgkgICAgICAgIHJldHVybiAtSW5maW5pdHk7CgkgICAgICB9IGVsc2UgewoJICAgICAgICByZXR1cm4gbGNob29zZShtLCB4KSArIGxjaG9vc2UobiwgayAtIHgpIC0gbGNob29zZShtICsgbiwgayk7CgkgICAgICB9CgkgICAgfTsKCSAgICBsZC5wb2lzID0gZnVuY3Rpb24gKHgsIGxhbWJkYSkgewoJICAgICAgcmV0dXJuIHggPCAwID8gLUluZmluaXR5IDogbG9nKGxhbWJkYSkgKiB4IC0gbGFtYmRhIC0gbGZhY3RvcmlhbCh4KTsKCSAgICB9OwoJICAgIHJldHVybiBsZDsKCSAgfSk7Cgl9KShkaXN0cmlidXRpb25zKTsKCXZhciBkaXN0cmlidXRpb25zRXhwb3J0cyA9IGRpc3RyaWJ1dGlvbnMuZXhwb3J0czsKCgl2YXIgbWNtYyA9IHtleHBvcnRzOiB7fX07CgoJKGZ1bmN0aW9uIChtb2R1bGUpIHsKCgkgIC8vIFRoaXMgYm9pbGVyIHBsYXRlIGNvZGUgaGVyZSBpcyB0YWtlbiBmcm9tOgoJICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy9yZXR1cm5FeHBvcnRzLmpzCgkgIC8vIEl0IHNob3VsZCBtYWtlIHNodXJlIHRoYXQgbW9kdWxlIGNhbiBiZSBpbXBvcnRlZCBib3RoIGluIHRoZSBicm93c2VyLAoJICAvLyBOb2RlLCBhbmQgYnkgdXNpbmcgdGhlIEFzeW5jaHJvbm91cyBNb2R1bGUgRGVmaW5pdGlvbiBzdGFuZGFyZC4KCSAgLy8gSWYgdGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIHRoZSBicm93c2VyIGl0IHdpbGwgY3JlYXRlZCB0aGUgZ2xvYmFsCgkgIC8vIG9iamVjdCBtY21jIC4KCSAgKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7CgkgICAgaWYgKG1vZHVsZS5leHBvcnRzKSB7CgkgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXQKCSAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLAoJICAgICAgLy8gbGlrZSBOb2RlLgoJICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7CgkgICAgfSBlbHNlIHsKCSAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpCgkgICAgICByb290Lm1jbWMgPSBmYWN0b3J5KCk7CgkgICAgfQoJICB9KShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkgewoJICAgIC8vLyBUaGUgYWN0dWFsIG1vZHVsZSBjb2RlIHN0YXJ0cyBoZXJlIC8vLwoJICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgCgoJICAgIC8vLy8vLy8vLy8gSGVscGVyIEZ1bmN0aW9ucyAvLy8vLy8vLy8vCgkgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KCgkgICAgLyoqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAqLwoJICAgIHZhciBydW5pZiA9IGZ1bmN0aW9uIChtaW4sIG1heCkgewoJICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjsKCSAgICB9OwoKCSAgICAvKiogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKi8KCSAgICB2YXIgcnVuaWZfZGlzY3JldGUgPSBmdW5jdGlvbiAobWluLCBtYXgpIHsKCSAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOwoJICAgIH07CgoJICAgIC8qKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGZyb20gYSBub3JtYWwgZGlzdHJpYmJ1dGlvbiBkZWZpbmVkCgkgICAgICogIGJ5IG1lYW4gYW5kIHNkLiAKCSAgICAgKiAgQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qc3RhdC9qc3RhdC9ibG9iL21hc3Rlci9zcmMvc3BlY2lhbC5qcyAqLwoJICAgIHZhciBybm9ybSA9IGZ1bmN0aW9uIChtZWFuLCBzZCkgewoJICAgICAgdmFyIHUsIHYsIHgsIHksIHE7CgkgICAgICBkbyB7CgkgICAgICAgIHUgPSBNYXRoLnJhbmRvbSgpOwoJICAgICAgICB2ID0gMS43MTU2ICogKE1hdGgucmFuZG9tKCkgLSAwLjUpOwoJICAgICAgICB4ID0gdSAtIDAuNDQ5ODcxOwoJICAgICAgICB5ID0gTWF0aC5hYnModikgKyAwLjM4NjU5NTsKCSAgICAgICAgcSA9IHggKiB4ICsgeSAqICgwLjE5NjAwICogeSAtIDAuMjU0NzIgKiB4KTsKCSAgICAgIH0gd2hpbGUgKHEgPiAwLjI3NTk3ICYmIChxID4gMC4yNzg0NiB8fCB2ICogdiA+IC00ICogTWF0aC5sb2codSkgKiB1ICogdSkpOwoJICAgICAgcmV0dXJuIHYgLyB1ICogc2QgKyBtZWFuOwoJICAgIH07CgoJICAgIC8qKiBSZXR1cm5zIGEgZGVlcCBjbG9uZSBvZiBzcmMsIHNvcnQgb2YuLi4gSXQgb25seSBjb3BpZXMgYSBsaW1pdGVkCgkgICAgICogbnVtYmVyIG9mIHR5cGVzIGFuZCwgZm9yIGV4YW1wbGUsIGZ1bmN0aW9uIGFyZSBub3QgY29waWVkLiAKCSAgICAgKiBGcm9tIGh0dHA6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1jbG9uZQoJICAgICAqLwoJICAgIHZhciBkZWVwX2Nsb25lID0gZnVuY3Rpb24gKHNyYykgewoJICAgICAgZnVuY3Rpb24gbWl4aW4oZGVzdCwgc291cmNlLCBjb3B5RnVuYykgewoJICAgICAgICB2YXIgbmFtZSwKCSAgICAgICAgICBzLAoJICAgICAgICAgIGVtcHR5ID0ge307CgkgICAgICAgIGZvciAobmFtZSBpbiBzb3VyY2UpIHsKCSAgICAgICAgICAvLyB0aGUgKCEobmFtZSBpbiBlbXB0eSkgfHwgZW1wdHlbbmFtZV0gIT09IHMpIGNvbmRpdGlvbiBhdm9pZHMgY29weWluZyBwcm9wZXJ0aWVzIGluICJzb3VyY2UiCgkgICAgICAgICAgLy8gaW5oZXJpdGVkIGZyb20gT2JqZWN0LnByb3RvdHlwZS4JIEZvciBleGFtcGxlLCBpZiBkZXN0IGhhcyBhIGN1c3RvbSB0b1N0cmluZygpIG1ldGhvZCwKCSAgICAgICAgICAvLyBkb24ndCBvdmVyd3JpdGUgaXQgd2l0aCB0aGUgdG9TdHJpbmcoKSBtZXRob2QgdGhhdCBzb3VyY2UgaW5oZXJpdGVkIGZyb20gT2JqZWN0LnByb3RvdHlwZQoJICAgICAgICAgIHMgPSBzb3VyY2VbbmFtZV07CgkgICAgICAgICAgaWYgKCEobmFtZSBpbiBkZXN0KSB8fCBkZXN0W25hbWVdICE9PSBzICYmICghKG5hbWUgaW4gZW1wdHkpIHx8IGVtcHR5W25hbWVdICE9PSBzKSkgewoJICAgICAgICAgICAgZGVzdFtuYW1lXSA9IGNvcHlGdW5jID8gY29weUZ1bmMocykgOiBzOwoJICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gZGVzdDsKCSAgICAgIH0KCSAgICAgIGlmICghc3JjIHx8IHR5cGVvZiBzcmMgIT0gIm9iamVjdCIgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNyYykgPT09ICJbb2JqZWN0IEZ1bmN0aW9uXSIpIHsKCSAgICAgICAgLy8gbnVsbCwgdW5kZWZpbmVkLCBhbnkgbm9uLW9iamVjdCwgb3IgZnVuY3Rpb24KCSAgICAgICAgcmV0dXJuIHNyYzsgLy8gYW55dGhpbmcKCSAgICAgIH0KCSAgICAgIGlmIChzcmMubm9kZVR5cGUgJiYgImNsb25lTm9kZSIgaW4gc3JjKSB7CgkgICAgICAgIC8vIERPTSBOb2RlCgkgICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpOyAvLyBOb2RlCgkgICAgICB9CgkgICAgICBpZiAoc3JjIGluc3RhbmNlb2YgRGF0ZSkgewoJICAgICAgICAvLyBEYXRlCgkgICAgICAgIHJldHVybiBuZXcgRGF0ZShzcmMuZ2V0VGltZSgpKTsgLy8gRGF0ZQoJICAgICAgfQoJICAgICAgaWYgKHNyYyBpbnN0YW5jZW9mIFJlZ0V4cCkgewoJICAgICAgICAvLyBSZWdFeHAKCSAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoc3JjKTsgLy8gUmVnRXhwCgkgICAgICB9CgkgICAgICB2YXIgciwgaSwgbDsKCSAgICAgIGlmIChzcmMgaW5zdGFuY2VvZiBBcnJheSkgewoJICAgICAgICAvLyBhcnJheQoJICAgICAgICByID0gW107CgkgICAgICAgIGZvciAoaSA9IDAsIGwgPSBzcmMubGVuZ3RoOyBpIDwgbDsgKytpKSB7CgkgICAgICAgICAgaWYgKGkgaW4gc3JjKSB7CgkgICAgICAgICAgICByLnB1c2goZGVlcF9jbG9uZShzcmNbaV0pKTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgIH0gZWxzZSB7CgkgICAgICAgIC8vIGdlbmVyaWMgb2JqZWN0cwoJICAgICAgICByID0gc3JjLmNvbnN0cnVjdG9yID8gbmV3IHNyYy5jb25zdHJ1Y3RvcigpIDoge307CgkgICAgICB9CgkgICAgICByZXR1cm4gbWl4aW4ociwgc3JjLCBkZWVwX2Nsb25lKTsKCSAgICB9OwoKCSAgICAvKiogU3BlY2lhbGl6ZWQgY2xvbmUgZnVuY3Rpb24gdGhhdCBvbmx5IGNsb25lcyBzY2FsYXJzIGFuZCBuZXN0ZWQgYXJyYXlzIHdoZXJlCgkgICAgICogZWFjaCBhcnJheSBlaXRoZXIgY29uc2lzdHMgb2YgYWxsIGFycmF5cyBvciBhbGwgbnVtYmVycy4gVGhpcyBmdW5jdGlvbgoJICAgICAqIGlzIG1lYW50IGFzIGEgZmFzdCB3YXkgb2YgY2xvbmluZyBwYXJhbWV0ZXIgZHJhd3Mgd2l0aGluIHRoZSBtY21jIHNhbXBsaW5nCgkgICAgICogbG9vcC4KCSAgICAgKi8KCSAgICB2YXIgY2xvbmVfcGFyYW1fZHJhdyA9IGZ1bmN0aW9uICh4KSB7CgkgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkgewoJICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4WzBdKSkgewoJICAgICAgICAgIC8vIHggaXMgYW4gYXJyYXkgb2YgYXJyYXlzIHNvIHdlIG5lZWQgdG8gY2xvbmUgaXQgcmVjdXJzaXZlbHkKCSAgICAgICAgICB2YXIgeF9jb3B5ID0gW107CgkgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHgubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIHhfY29weS5wdXNoKGNsb25lX3BhcmFtX2RyYXcoeFtpXSkpOwoJICAgICAgICAgIH0KCSAgICAgICAgICByZXR1cm4geF9jb3B5OwoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIC8vIFdlJ2xsIGFzc3VtZSB4IGlzIGEgYXJyYXlzIG9mIHNjYWxhcnMKCSAgICAgICAgICByZXR1cm4geC5zbGljZSgwKTsKCSAgICAgICAgfQoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgLy8gV2UnbGwgYXNzdW1lIHggaXMgYSBzY2FsYXIKCSAgICAgICAgcmV0dXJuIHg7CgkgICAgICB9CgkgICAgfTsKCgkgICAgLyoqIFJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYSBudW1iZXIuCgkgICAgICovCgkgICAgdmFyIGlzX251bWJlciA9IGZ1bmN0aW9uIChvYmplY3QpIHsKCSAgICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICJudW1iZXIiIHx8IHR5cGVvZiBvYmplY3QgPT0gIm9iamVjdCIgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBOdW1iZXI7CgkgICAgfTsKCgkgICAgLyoqCgkgICAgICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSAocG9zc2libHkgbXVsdGlkaW1lbnNpb25hbC9uZXN0ZWQpIGFycmF5LgoJICAgICAqIEBwYXJhbSBkaW0gLSBBbiBhcnJheSBnaXZpbmcgdGhlIGRpbWVuc2lvbiBvZiB0aGUgYXJyYXkuIEZvciBleGFtcGxlLAoJICAgICAqICAgWzVdIHdvdWxkIHlpZWxkIGEgNSBlbGVtZW50IGFycmF5LCBhbmQgWzMsM10gd291bGQgeWllbGQgYSAzIGJ5IDMgbWF0cml4LgoJICAgICAqIEBwYXJhbSBpbml0IC0gQSB2YWx1ZSBvciBhIGZ1bmN0aW9uIHVzZWQgdG8gZmlsbCBpbiB0aGUgZWFjaCBlbGVtZW50IGluCgkgICAgICogICB0aGUgYXJyYXkuIElmIGl0IGlzIGEgZnVuY3Rpb24gaXQgc2hvdWxkIHRha2Ugbm8gYXJndW1lbnRzLCBpdCB3aWxsIGJlIAoJICAgICAqICAgZXZhbHVhdGVkIG9uY2UgZm9yIGVhY2ggZWxlbWVudCwgYW5kIGl0J3MgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdXNlZCB0bwoJICAgICAqICAgZmlsbCBpbiBlYWNoIGVsZW1lbnQuCgkgICAgICogQGV4YW1wbGUgCgkgICAgICogLy8gVGhlIGZvbGxvd2luZyB3b3VsZCByZXR1cm4gW1sxLDFdLFsxLDFdLFsxLDFdXQoJICAgICAqIGNyZWF0ZV9hcnJheShbMiwzXSwgMSkKCSAgICAgKi8KCSAgICB2YXIgY3JlYXRlX2FycmF5ID0gZnVuY3Rpb24gKGRpbSwgaW5pdCkgewoJICAgICAgdmFyIGFyciA9IG5ldyBBcnJheShkaW1bMF0pOwoJICAgICAgdmFyIGk7CgkgICAgICBpZiAoZGltLmxlbmd0aCA9PSAxKSB7CgkgICAgICAgIC8vIEZpbGwgaXQgdXAgd2l0aCBpbml0CgkgICAgICAgIGlmICh0eXBlb2YgaW5pdCA9PT0gImZ1bmN0aW9uIikgewoJICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaW1bMF07IGkrKykgewoJICAgICAgICAgICAgYXJyW2ldID0gaW5pdCgpOwoJICAgICAgICAgIH0KCSAgICAgICAgfSBlbHNlIHsKCSAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHsKCSAgICAgICAgICAgIGFycltpXSA9IGluaXQ7CgkgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICB9IGVsc2UgaWYgKGRpbS5sZW5ndGggPiAxKSB7CgkgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaW1bMF07IGkrKykgewoJICAgICAgICAgIGFycltpXSA9IGNyZWF0ZV9hcnJheShkaW0uc2xpY2UoMSksIGluaXQpOwoJICAgICAgICB9CgkgICAgICB9IGVsc2UgewoJICAgICAgICB0aHJvdyAiY3JlYXRlX2FycmF5IGNhbid0IGNyZWF0ZSBhIGRpbWVuc2lvbmxlc3MgYXJyYXkiOwoJICAgICAgfQoJICAgICAgcmV0dXJuIGFycjsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBSZXR1cm4gdGhlIGRpbWVuc2lvbnMgb2YgYSBwb3NzaWJseSBuZXN0ZWQgYXJyYXkgYXMgYW4gYXJyYXkuIEZvciAKCSAgICAgKiBleGFtcGxlLCBhcnJheV9kaW0oIFtbMSwgMl0sIFsxLCAyXV0gKSBzaG91bGQgcmV0dXJuIFsyLCAyXQoJICAgICAqIEFzc3VtZXMgdGhhdCBhbGwgYXJyYXlzIGluc2lkZSBhbm90aGVyIGFycmF5IGFyZSBvZiB0aGUgc2FtZSBsZW5ndGguCgkgICAgICogQGV4YW1wbGUKCSAgICAgKiAvLyBTaG91bGQgcmV0dXJuIFs0LCAyLCAxXQoJICAgICAqIGFycmF5X2RpbShjcmVhdGVfYXJyYXkoWzQsIDIsIDFdLCAwKSkKCSAgICAgKi8KCSAgICB2YXIgYXJyYXlfZGltID0gZnVuY3Rpb24gKGEpIHsKCSAgICAgIGlmIChBcnJheS5pc0FycmF5KGFbMF0pKSB7CgkgICAgICAgIHJldHVybiBbYS5sZW5ndGhdLmNvbmNhdChhcnJheV9kaW0oYVswXSkpOwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgcmV0dXJuIFthLmxlbmd0aF07CgkgICAgICB9CgkgICAgfTsKCgkgICAgLyoqCgkgICAgICogQ2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIGluIHRoZSBzZW5zZSB0aGF0IHRoZXkgY29udGFpbiB0aGUgc2FtZSBlbGVtZW50cwoJICAgICAqIGFzIGp1ZGdlZCBieSB0aGUgIj09IiBvcGVyYXRvci4gUmV0dXJucyB0cnVlIG9yIGZhbHNlLgoJICAgICAqIEFkYXB0ZWQgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDg1Mzk3NC8xMDAxODQ4CgkgICAgICovCgkgICAgdmFyIGFycmF5X2VxdWFsID0gZnVuY3Rpb24gKGExLCBhMikgewoJICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTsKCSAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBuZXN0ZWQgYXJyYXlzCgkgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGExW2ldKSAmJiBBcnJheS5pc0FycmF5KGEyW2ldKSkgewoJICAgICAgICAgIC8vIHJlY3Vyc2UgaW50byB0aGUgbmVzdGVkIGFycmF5cwoJICAgICAgICAgIGlmICghYXJyYXlfZXF1YWwoYTFbaV0sIGEyW2ldKSkgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9IGVsc2UgaWYgKGExW2ldICE9IGEyW2ldKSB7CgkgICAgICAgICAgLy8gV2FybmluZyAtIHR3byBkaWZmZXJlbnQgb2JqZWN0IGluc3RhbmNlcyB3aWxsIG5ldmVyIGJlIGVxdWFsOiB7eDoyMH0gIT0ge3g6MjB9CgkgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICB9CgkgICAgICByZXR1cm4gdHJ1ZTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBUcmF2ZXJzZXMgYSBwb3NzaWJseSBuZXN0ZWQgYXJyYXkgYSBhbmQgYXBwbGllcyBmdW4gdG8gYWxsICJsZWFmIG5vZGVzIiwgCgkgICAgICogdGhhdCBpcywgdmFsdWVzIHRoYXQgYXJlIG5vdCBhcnJheXMuIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHNhbWUgc2l6ZSBhcwoJICAgICAqIGEuCgkgICAgICovCgkgICAgdmFyIG5lc3RlZF9hcnJheV9hcHBseSA9IGZ1bmN0aW9uIChhLCBmdW4pIHsKCSAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7CgkgICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYS5sZW5ndGgpOwoJICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICByZXN1bHRbaV0gPSBuZXN0ZWRfYXJyYXlfYXBwbHkoYVtpXSwgZnVuKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcmVzdWx0OwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgcmV0dXJuIGZ1bihhKTsKCSAgICAgIH0KCSAgICB9OwoKCSAgICAvKiogUmFuZG9taXppbmcgdGhlIGFycmF5IGVsZW1lbnQgb3JkZXIgaW4tcGxhY2UuIFVzaW5nIER1cnN0ZW5mZWxkCgkgICAgICogc2h1ZmZsZSBhbGdvcml0aG0uIEFkYXB0ZWQgZnJvbSBoZXJlOiAKCSAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMjY0Njg2NC8xMDAxODQ4CgkgICAgICovCgkgICAgZnVuY3Rpb24gc2h1ZmZsZV9hcnJheShhcnJheSkgewoJICAgICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHsKCSAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTsKCSAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTsKCSAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTsKCSAgICAgICAgYXJyYXlbal0gPSB0ZW1wOwoJICAgICAgfQoJICAgICAgcmV0dXJuIGFycmF5OwoJICAgIH0KCgkgICAgLyoqCgkgICAgICogRG9lcyB0aGUgc2FtZSB0aGluZyBhcyBuZXN0ZWRfYXJyYXlfYXBwbHksIHRoYXQgaXMsIHRyYXZlcnNlcyBhIHBvc3NpYmx5CgkgICAgICogbmVzdGVkIGFycmF5IGEgYW5kIGFwcGxpZXMgZnVuIHRvIGFsbCAibGVhZiBub2RlcyIgYW5kIHJldHVybnMgYW4gYXJyYXkgCgkgICAgICogb2YgdGhlIHNhbWUgc2l6ZSBhcyBhLiBUaGUgZGlmZmVyZW5jZSBpcyB0aGF0IG5lc3RlZF9hcnJheV9yYW5kb21fYXBwbHkKCSAgICAgKiBicmFuY2hlcyByYW5kb21seS4KCSAgICAgKi8KCSAgICB2YXIgbmVzdGVkX2FycmF5X3JhbmRvbV9hcHBseSA9IGZ1bmN0aW9uIChhLCBmdW4pIHsKCSAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7CgkgICAgICAgIHZhciBsZW4gPSBhLmxlbmd0aDsKCSAgICAgICAgdmFyIGk7CgkgICAgICAgIHZhciBhcnJheV9pcyA9IFtdOwoJICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHsKCSAgICAgICAgICBhcnJheV9pc1tpXSA9IGk7CgkgICAgICAgIH0KCSAgICAgICAgc2h1ZmZsZV9hcnJheShhcnJheV9pcyk7CgkgICAgICAgIHZhciByZXN1bHQgPSBbXTsKCSAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7CgkgICAgICAgICAgdmFyIGFycmF5X2kgPSBhcnJheV9pc1tpXTsKCSAgICAgICAgICByZXN1bHRbYXJyYXlfaV0gPSBuZXN0ZWRfYXJyYXlfYXBwbHkoYVthcnJheV9pXSwgZnVuKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcmVzdWx0OwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgcmV0dXJuIGZ1bihhKTsKCSAgICAgIH0KCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBBbGxvd3MgYSBwcmV0dHkgd2F5IG9mIHNldHRpbmcgZGVmYXVsdCBvcHRpb25zIHdoZXJlIHRoZSBkZWZ1bHRzIGNhbiBiZQoJICAgICAqIG92ZXJyaWRkZW4gYnkgYW4gb3B0aW9ucyBvYmplY3QuCgkgICAgICogIEBwYXJhbSBvcHRpb25fbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBvcHRpb24gYXMgYSBzdHJpbmcKCSAgICAgKiAgQHBhcmFtIG15X29wdGlvbnMgLSBhbiBvcHRpb24gb2JqZWN0IHRoYXQgY291bGQgaGF2ZSBvcHRpb25fbmFtZSAKCSAgICAgKiAgICBhcyBhIG1lbWJlci4KCSAgICAgKiBAcGFyYW0gZGVmYXVsX3ZhbHVlIC0gZGVmdWx0IHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgaWYgb3B0aW9uX25hbWUgCgkgICAgICogICBpcyBub3QgZGVmaW5lZCBpbiBteV9vcHRpb25zLgoJICAgICAqIEBleGFtcGxlCgkgICAgICogdmFyIG15X29wdGlvbnMgPSB7cGk6IDMuMTQxNTl9CgkgICAgICogdmFyIHBpID0gZ2V0X29wdGlvbigicGkiLCBteV9vcHRpb25zLCAzLjE0KQoJICAgICAqLwoJICAgIC8vIFByZXR0eSB3YXkgb2Ygc2V0dGluZyBkZWZhdWx0IG9wdGlvbnMgd2hlcmUgdGhlIGRlZmF1bHRzIGNhbiBiZSBvdmVycmlkZGVuCgkgICAgLy8gYnkgYW4gb3B0aW9ucyBvYmplY3QuIEZvciBleGFtcGxlOgoJICAgIC8vIHZhciBwaSA9IGdldF9vcHRpb24oInBpIiwgbXlfb3B0aW9ucywgMy4xNCkKCSAgICB2YXIgZ2V0X29wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25fbmFtZSwgb3B0aW9ucywgZGVmYXVsX3ZhbHVlKSB7CgkgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsKCSAgICAgIHJldHVybiBvcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbl9uYW1lKSAmJiBvcHRpb25zW29wdGlvbl9uYW1lXSAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnNbb3B0aW9uX25hbWVdICE9PSBudWxsID8gb3B0aW9uc1tvcHRpb25fbmFtZV0gOiBkZWZhdWxfdmFsdWU7CgkgICAgfTsKCgkgICAgLyoqIFZlcnNpb24gb2YgZ2V0X29wdGlvbiB3aGVyZSB0aGUgb3B0aW9uIHNob3VsZCBiZSBhIG9uZSBvciBtdWx0aS1kaW1lbnNpb25hbAoJICAgICAqIGFycmF5IGFuZCB3aGVyZSB0aGUgZGVmYXVsdCBjYW4gYmUgb3ZlcnJpZGRlbiBlaXRoZXIgYnkgYSBzY2FsYXIgb3IgYnkgYW4gYXJyYXkuCgkgICAgICogSWYgaXQncyBhIHNjYWxhciB0aGUgdGhhdCBzY2FsYXIgaXMgdXNlZCB0byBpbml0aWFsaXplIGFuIGFycmF5IHdpdGggCgkgICAgICogZGltIGRpbWVuc2lvbnMuCgkgICAgICogCgkgICAgICovCgkgICAgdmFyIGdldF9tdWx0aWRpbV9vcHRpb24gPSBmdW5jdGlvbiAob3B0aW9uX25hbWUsIG9wdGlvbnMsIGRpbSwgZGVmYXVsX3ZhbHVlKSB7CgkgICAgICB2YXIgdmFsdWUgPSBnZXRfb3B0aW9uKG9wdGlvbl9uYW1lLCBvcHRpb25zLCBkZWZhdWxfdmFsdWUpOwoJICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgewoJICAgICAgICB2YWx1ZSA9IGNyZWF0ZV9hcnJheShkaW0sIHZhbHVlKTsKCSAgICAgIH0KCSAgICAgIGlmICghYXJyYXlfZXF1YWwoYXJyYXlfZGltKHZhbHVlKSwgZGltKSkgewoJICAgICAgICB0aHJvdyAiVGhlIG9wdGlvbiAiICsgb3B0aW9uX25hbWUgKyAiIGlzIG9mIGRpbWVuc2lvbiBbIiArIGFycmF5X2RpbSh2YWx1ZSkgKyAiXSBidXQgc2hvdWxkIGJlIFsiICsgZGltICsgIl0uIjsKCSAgICAgIH0KCSAgICAgIHJldHVybiB2YWx1ZTsKCSAgICB9OwoKCSAgICAvLy8vLy8vLy8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgcGFyYW1ldGVyIG9iamVjdHMgLy8vLy8vLy8vLwoJICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCgoJICAgIC8qKgoJICAgICAqIFJldHVybnMgYSBmaXhlZCAoc2FtZSBldmVyeSB0aW1lKSBudW1iZXIgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGluaXRpYWxpemUKCSAgICAgKiBhIHBhcmFtZXRlciBvZiBhIGNlcnRhaW4gdHlwZSwgcG9zc2libHkgd2l0aCBsb3dlciBhbmQgdXBwZXIgYm91bmRzLgoJICAgICAqIFRoZSBwb3NzaWxlIHR5cGVzIGFyZSAicmVhbCIsICJpbnQiLCBhbmQgImJpbmFyeSIuCgkgICAgICovCgkgICAgdmFyIHBhcmFtX2luaXRfZml4ZWQgPSBmdW5jdGlvbiAodHlwZSwgbG93ZXIsIHVwcGVyKSB7CgkgICAgICBpZiAobG93ZXIgPiB1cHBlcikgewoJICAgICAgICB0aHJvdyAiQ2FuIG5vdCBpbml0aWFsaXplIHBhcmFtZXRlciB3aGVyZSBsb3dlciBib3VuZCA+IHVwcGVyIGJvdW5kIjsKCSAgICAgIH0KCSAgICAgIGlmICh0eXBlID09PSAicmVhbCIpIHsKCSAgICAgICAgaWYgKGxvd2VyID09PSAtSW5maW5pdHkgJiYgdXBwZXIgPT09IEluZmluaXR5KSB7CgkgICAgICAgICAgcmV0dXJuIDAuNTsKCSAgICAgICAgfSBlbHNlIGlmIChsb3dlciA9PT0gLUluZmluaXR5KSB7CgkgICAgICAgICAgcmV0dXJuIHVwcGVyIC0gMC41OwoJICAgICAgICB9IGVsc2UgaWYgKHVwcGVyID09PSBJbmZpbml0eSkgewoJICAgICAgICAgIHJldHVybiBsb3dlciArIDAuNTsKCSAgICAgICAgfSBlbHNlIGlmIChsb3dlciA8PSB1cHBlcikgewoJICAgICAgICAgIHJldHVybiAobG93ZXIgKyB1cHBlcikgLyAyOwoJICAgICAgICB9CgkgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICJpbnQiKSB7CgkgICAgICAgIGlmIChsb3dlciA9PT0gLUluZmluaXR5ICYmIHVwcGVyID09PSBJbmZpbml0eSkgewoJICAgICAgICAgIHJldHVybiAxOwoJICAgICAgICB9IGVsc2UgaWYgKGxvd2VyID09PSAtSW5maW5pdHkpIHsKCSAgICAgICAgICByZXR1cm4gdXBwZXIgLSAxOwoJICAgICAgICB9IGVsc2UgaWYgKHVwcGVyID09PSBJbmZpbml0eSkgewoJICAgICAgICAgIHJldHVybiBsb3dlciArIDE7CgkgICAgICAgIH0gZWxzZSBpZiAobG93ZXIgPD0gdXBwZXIpIHsKCSAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgobG93ZXIgKyB1cHBlcikgLyAyKTsKCSAgICAgICAgfQoJICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAiYmluYXJ5IikgewoJICAgICAgICByZXR1cm4gMTsKCSAgICAgIH0KCSAgICAgIHRocm93ICJDb3VsZCBub3QgaW5pdGlhbGl6ZSBwYXJhbWV0ZXIgb2YgdHlwZSAiICsgdHlwZSArICJbIiArIGxvd2VyICsgIiwgIiArIHVwcGVyICsgIl0iOwoJICAgIH07CgoJICAgIC8qKgoJICAgICAqIENvbXBsZXRlcyBwYXJhbXNfdG9fY29tcGxldGUsIGFuIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlciBkZXNjcmlwdGlvbnMsIAoJICAgICAqIGFuZCBpbml0aWFsaXplcyBub24taW5pdGlhbGl6ZWQgcGFyYW1ldGVycy4gVGhpcyBtb2RpZmllZCB2ZXJzaW9uIG9mCgkgICAgICogcGFyYW1zX3RvX2NvbXBsZXRlIGlzIHJldHVybmVkIGFzIGEgZGVlcCBjb3B5IGFuZCBub3QgbW9kaWZpZWQgaW4gcGxhY2UuCgkgICAgICogSW5pdGlhbGl6YXRpb24gaXMgZG9uZSBieSBzdXBwbHlpbmcgYSBwYXJhbV9pbml0IGZ1bmN0aW9uIHdpdGggc2lnbmF0dXJlCgkgICAgICogZnVuY3Rpb24odHlwZSwgbG93ZXIsIHVwcGVyKSB0aGF0IHNob3VsZCByZXR1cm4gYSBzaW5nbGUgbnVtYmVyIAoJICAgICAqIChsaWtlIHBhcmFtX2luaXRfZml4ZWQsIGZvciBleGFtcGxlKS4KCSAgICAgKiBAZXhhbXBsZQoJICAgICAqIHZhciBwYXJhbXMgPSB7ICJtdSI6IHsidHlwZSI6ICJyZWFsIn0gfQoJICAgICAqIHBhcmFtcyA9IGNvbXBsZXRlX3BhcmFtcyhwYXJhbXMpOwoJICAgICAqIC8vIHBhcmFtcyBzaG91bGQgbm93IGJlOgoJICAgICAqIC8vICB7Im11IjogeyAidHlwZSI6ICJyZWFsIiwgImRpbSI6IFsxXSwgInVwcGVyIjogSW5maW5pdHksCgkgICAgICogLy8gICAgICAgICAgICJsb3dlciI6IC1JbmZpbml0eSwgImluaXQiOiAwLjUgfX0KCSAgICAgKi8KCSAgICB2YXIgY29tcGxldGVfcGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtc190b19jb21wbGV0ZSwgcGFyYW1faW5pdCkgewoJICAgICAgdmFyIHBhcmFtcyA9IGRlZXBfY2xvbmUocGFyYW1zX3RvX2NvbXBsZXRlKTsKCSAgICAgIGZvciAodmFyIHBhcmFtX25hbWUgaW4gcGFyYW1zKSB7CgkgICAgICAgIGlmICghcGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtX25hbWUpKSBjb250aW51ZTsKCSAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW3BhcmFtX25hbWVdOwoJICAgICAgICBpZiAoIXBhcmFtLmhhc093blByb3BlcnR5KCJ0eXBlIikpIHsKCSAgICAgICAgICBwYXJhbS50eXBlID0gInJlYWwiOwoJICAgICAgICB9CgkgICAgICAgIGlmICghcGFyYW0uaGFzT3duUHJvcGVydHkoImRpbSIpKSB7CgkgICAgICAgICAgcGFyYW0uZGltID0gWzFdOwoJICAgICAgICB9CgkgICAgICAgIGlmIChpc19udW1iZXIocGFyYW0uZGltKSkgewoJICAgICAgICAgIHBhcmFtLmRpbSA9IFtwYXJhbS5kaW1dOwoJICAgICAgICB9CgkgICAgICAgIGlmIChwYXJhbS50eXBlID09ICJiaW5hcnkiKSB7CgkgICAgICAgICAgcGFyYW0udXBwZXIgPSAxOwoJICAgICAgICAgIHBhcmFtLmxvd2VyID0gMDsKCSAgICAgICAgfQoJICAgICAgICBpZiAoIXBhcmFtLmhhc093blByb3BlcnR5KCJ1cHBlciIpKSB7CgkgICAgICAgICAgcGFyYW0udXBwZXIgPSBJbmZpbml0eTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoIXBhcmFtLmhhc093blByb3BlcnR5KCJsb3dlciIpKSB7CgkgICAgICAgICAgcGFyYW0ubG93ZXIgPSAtSW5maW5pdHk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHBhcmFtLmhhc093blByb3BlcnR5KCJpbml0IikpIHsKCSAgICAgICAgICAvLyBJZiB0aGlzIGlzIGp1c3QgYSBudW1iZXIgb3IgYSBuZXN0ZWQgYXJyYXkgd2UgbGVhdmUgaXQgYWxvbmUsIGJ1dCBpZi4uLgoJICAgICAgICAgIGlmIChhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkgJiYgdHlwZW9mIHBhcmFtLmluaXQgPT09ICJmdW5jdGlvbiIpIHsKCSAgICAgICAgICAgIC8vIHBhcmFtLmluaXQgaXMgYSBmdW5jdGlvbiwgdXNlIHRoYXQgdG8gaW5pdGlhbGl6ZSB0aGUgcGFyYW1ldGVyLgoJICAgICAgICAgICAgcGFyYW0uaW5pdCA9IHBhcmFtLmluaXQoKTsKCSAgICAgICAgICB9IGVsc2UgaWYgKCFhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkgJiYgIUFycmF5LmlzQXJyYXkocGFyYW0uaW5pdCkpIHsKCSAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBtdWx0aWRpbWVuc2lvbmFsIHBhcmFtZXRlciB3aGVyZSB0aGUgcGFyYW0uaW5pdCBleGlzdCBidXQKCSAgICAgICAgICAgIC8vIGlzIG5vdCBhbiBhcnJheS4gVGhlbiBhc3N1bWUgaXQgaXMgYSBudW1iZXIgb3IgYSBmdW5jdGlvbiBhbmQgdXNlCgkgICAgICAgICAgICAvLyBpdCB0byBpbml0aWFsaXplIHRoZSBwYXJhbWV0ZXIuCgkgICAgICAgICAgICBwYXJhbS5pbml0ID0gY3JlYXRlX2FycmF5KHBhcmFtLmRpbSwgcGFyYW0uaW5pdCk7CgkgICAgICAgICAgfQoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIC8vIFdlIHVzZSB0aGUgZGVmYXVsdCBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4KCSAgICAgICAgICBpZiAoYXJyYXlfZXF1YWwocGFyYW0uZGltLCBbMV0pKSB7CgkgICAgICAgICAgICBwYXJhbS5pbml0ID0gcGFyYW1faW5pdChwYXJhbS50eXBlLCBwYXJhbS5sb3dlciwgcGFyYW0udXBwZXIpOwoJICAgICAgICAgIH0gZWxzZSB7CgkgICAgICAgICAgICBwYXJhbS5pbml0ID0gY3JlYXRlX2FycmF5KHBhcmFtLmRpbSwgZnVuY3Rpb24gKCkgewoJICAgICAgICAgICAgICByZXR1cm4gcGFyYW1faW5pdChwYXJhbS50eXBlLCBwYXJhbS5sb3dlciwgcGFyYW0udXBwZXIpOwoJICAgICAgICAgICAgfSk7CgkgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICB9CgkgICAgICByZXR1cm4gcGFyYW1zOwoJICAgIH07CgoJICAgIC8vLy8vLy8vLy8gU3RlcHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vLy8KCSAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCgoJICAgIC8qKgoJICAgICAqIEBpbnRlcmZhY2UKCSAgICAgKiBBIFN0ZXBwZXIgaXMgYW4gb2JqZWN0IHJlc3BvbnNpYmxlIGZvciBwdXNoaW5nIGFyb3VuZCBvbmUKCSAgICAgKiBvciBtb3JlIHBhcmFtZXRlciB2YWx1ZXMgaW4gYSBzdGF0ZSBhY2NvcmRpbmcgdG8gdGhlIGRpc3RyaWJ1dGlvbgoJICAgICAqIGRlZmluZWQgYnkgdGhlIGxvZyBwb3N0ZXJpb3IuIFRoaXMgZGVmaW5lcyB0aGUgU3RlcHBlciAiaW50ZXJmYWNlIiwKCSAgICAgKiB3aGVyZSAiaW50ZXJmYWNlIiBtZWFucyB0aGF0IFN0ZXBwZXIgZGVmaW5lcyBhIGNsYXNzIHRoYXQgaXMgbmV2ZXIKCSAgICAgKiBtZWFudCB0byBiZSBpbnN0YW50aWF0ZWQsIGJ1dCBqdXN0IHRvIGJlIHN1YmNsYXNzZWQgYnkgc3BlY2lhbGl6ZWQKCSAgICAgKiBzdGVwcGVyIGZ1bmN0aW9ucy4KCSAgICAgKiBAaW50ZXJmYWNlCgkgICAgICogQHBhcmFtIHBhcmFtcyAtIEFuIG9iamVjdCB3aXRoIHBhcmFtZXRlciBkZWZpbml0aW9ucywgZm9yIGV4YW1wbGU6CgkgICAgICogICB7Im11IjogeyAidHlwZSI6ICJyZWFsIiwgImRpbSI6IFsxXSwgInVwcGVyIjogSW5maW5pdHksIAoJICAgICAqICAgImxvd2VyIjogLUluZmluaXR5LCAiaW5pdCI6IDAuNSB9fQoJICAgICAqICAgVGhlIHBhcmFtZXRlciBkZWZpbml0aW9ucyBhcmUgZXhwZWN0ZWQgdG8gYmUgImNvbXBsZXRlIiwgdGhhdCBpcywKCSAgICAgKiAgIHNwZWNpZnlpbmcgYWxsIHJlbGV2YW50IGF0dHJpYnV0ZXMgc3VjaCBhcyBkaW0sIGxvd2VyIGFuZCB1cHBlci4KCSAgICAgKiBAcGFyYW0gc3RhdGUgLSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhdGUgb2YgYWxsIHBhcmFtZXRlcnMgaW4gcGFyYW1zCgkgICAgICogICAoYW5kIHBvc3NpYmx5IG1vcmUpLiBUaGUgcGFyYW1ldGVyIG5hbWVzIGFyZSBnaXZlbiBhcyBrZXlzIGFuZCB0aGUgc3RhdGVzCgkgICAgICogICBhcyBzY2FsYXJzIG9yLCBwb3NzaWJseSBuZXN0ZWQsIGFycmF5cy4gRm9yIGV4YW1wbGU6CgkgICAgICogICB7bXU6IDEwLCBzaWdtYTogNSwgYmV0YTogWzEsIDIuNV19CgkgICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiAqdGFraW5nIG5vIHBhcmFtZXRlcnMqIHRoYXQgcmV0dXJucyB0aGUKCSAgICAgKiAgIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIFRoYXQgaXMsIHRoZSB2YWx1ZSBvZiBsb2dfcG9zdAoJICAgICAqICAgc2hvdWxkIGNoYW5nZSBpZiB0aGUgdGhlIHZhbHVlcyBpbiBzdGF0ZSBhcmUgY2hhbmdlZC4KCSAgICAKCSAgICAgKi8KCSAgICB2YXIgU3RlcHBlciA9IGZ1bmN0aW9uIChwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCkgewoJICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7CgkgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7CgkgICAgICB0aGlzLmxvZ19wb3N0ID0gbG9nX3Bvc3Q7CgkgICAgfTsKCgkgICAgLyoqCgkgICAgICogVGFrZXMgYSBzdGVwIGluIHRoZSBwYXJhbWV0ZXIgc3BhY2UuIFNob3VsZCByZXR1cm4gdGhlIG5ldyBzdGF0ZSwKCSAgICAgKiBidXQgaXMgbWFpbmx5IGNhbGxlZCBmb3IgaXQncyBzaWRlIGVmZmVjdCBvZiBtYWtpbmcgYSBjaGFuZ2UgaW4gdGhlCgkgICAgICogc3RhdGUgb2JqZWN0LgoJICAgICAqLwoJICAgIFN0ZXBwZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7CgkgICAgICB0aHJvdyAiRXZlcnkgU3RlcHBlciBuZWVkIHRvIGltcGxlbWVudCBzdGVwKCkiOwoJICAgIH07CgoJICAgIC8qKgoJICAgICAqIElmIGltcGxlbWVudGVkLCBtYWtlcyB0aGUgc3RlcHBlciBhZGFwdCB3aGlsZSBzdGVwcGluZy4KCSAgICAgKi8KCSAgICBTdGVwcGVyLnByb3RvdHlwZS5zdGFydF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgLy8gT3B0aW9uYWwsIHNvbWUgc3RlcHBlcnMgbWlnaHQgbm90IGJlIGFkYXB0aXZlLiAqLyAKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBJZiBpbXBsZW1lbnRlZCwgbWFrZXMgdGhlIHN0ZXBwZXIgY2Vhc2UgYWRhcHRpbmcgd2hpbGUgc3RlcHBpbmcuCgkgICAgICovCgkgICAgU3RlcHBlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgLy8gT3B0aW9uYWwsIHNvbWUgc3RlcHBlcnMgbWlnaHQgbm90IGJlIGFkYXB0aXZlLiAqLyAKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluZyBpbmZvIHJlZ2FyZGluZyB0aGUgc3RlcHBlci4KCSAgICAgKi8KCSAgICBTdGVwcGVyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKCkgewoJICAgICAgLy8gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBpbmZvIGFib3V0IHRoZSBzdGF0ZSBvZiB0aGUgc3RlcHBlci4KCSAgICAgIHJldHVybiB7fTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBAY2xhc3MKCSAgICAgKiBAaW1wbGVtZW50cyB7U3RlcHBlcn0KCSAgICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgbWV0cm9wb2xpcyBzdGVwIGluCgkgICAgICogdGhlIEFkYXB0aXZlIE1ldHJvcG9saXMtV2l0aGluLUdpYmJzIGFsZ29yaXRobSBpbiAiRXhhbXBsZXMgb2YgQWRhcHRpdmUgTUNNQyIKCSAgICAgKiBieSBSb2JlcnRzIGFuZCBSb3NlbnRoYWwgKDIwMDgpLgoJICAgICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbi4KCSAgICAgKiBAcGFyYW0gc3RhdGUgLSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhdGUgb2YgYWxsIHBhcmFtZXRlcnMuCgkgICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIAoJICAgICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci4KCSAgICAgKiBAcGFyYW0gZ2VuZXJhdGVfcHJvcG9zYWwgLSBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb3Bvc2FsIChhcyBhIG51bWJlcikKCSAgICAgKiB3aXRoIHNpZ25hdHVyZSBmdW5jdGlvbihwYXJhbV9zdGF0ZSwgbG9nX3NjYWxlKSB3aGVyZSBwYXJhbV9zdGF0ZSBpcyBhCgkgICAgICogbnVtYmVyIGFuZCBsb2dfc2NhbGUgZGVmaW5lcyB0aGUgc2NhbGUgb2YgdGhlIHByb3Bvc2FsIHNvbWVob3cuCgkgICAgKi8KCSAgICB2YXIgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbiAocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIGdlbmVyYXRlX3Byb3Bvc2FsKSB7CgkgICAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpOwoJICAgICAgdmFyIHBhcmFtX25hbWVzID0gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpOwoJICAgICAgaWYgKHBhcmFtX25hbWVzLmxlbmd0aCAhPSAxKSB7CgkgICAgICAgIHRocm93ICJPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciBjYW4gb25seSBoYW5kbGUgb25lIHBhcmFtZXRlci4iOwoJICAgICAgfQoJICAgICAgdGhpcy5wYXJhbV9uYW1lID0gcGFyYW1fbmFtZXNbMF07CgkgICAgICB2YXIgcGFyYW0gPSB0aGlzLnBhcmFtc1t0aGlzLnBhcmFtX25hbWVdOwoJICAgICAgaWYgKCFhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkpIHsKCSAgICAgICAgdGhyb3cgIk9uZWRpbU1ldHJvcG9saXNTdGVwcGVyIGNhbiBvbmx5IGhhbmRsZSBvbmUgb25lLWRpbWVuc2lvbmFsIHBhcmFtZXRlci4iOwoJICAgICAgfQoJICAgICAgdGhpcy5sb3dlciA9IHBhcmFtLmxvd2VyOwoJICAgICAgdGhpcy51cHBlciA9IHBhcmFtLnVwcGVyOwoJICAgICAgdGhpcy5wcm9wX2xvZ19zY2FsZSA9IGdldF9vcHRpb24oInByb3BfbG9nX3NjYWxlIiwgb3B0aW9ucywgMCk7CgkgICAgICB0aGlzLmJhdGNoX3NpemUgPSBnZXRfb3B0aW9uKCJiYXRjaF9zaXplIiwgb3B0aW9ucywgNTApOwoJICAgICAgdGhpcy5tYXhfYWRhcHRhdGlvbiA9IGdldF9vcHRpb24oIm1heF9hZGFwdGF0aW9uIiwgb3B0aW9ucywgMC4zMyk7CgkgICAgICB0aGlzLmluaXRpYWxfYWRhcHRhdGlvbiA9IGdldF9vcHRpb24oImluaXRpYWxfYWRhcHRhdGlvbiIsIG9wdGlvbnMsIDEuMCk7CgkgICAgICB0aGlzLnRhcmdldF9hY2NlcHRfcmF0ZSA9IGdldF9vcHRpb24oInRhcmdldF9hY2NlcHRfcmF0ZSIsIG9wdGlvbnMsIDAuNDQpOwoJICAgICAgdGhpcy5pc19hZGFwdGluZyA9IGdldF9vcHRpb24oImlzX2FkYXB0aW5nIiwgb3B0aW9ucywgdHJ1ZSk7CgkgICAgICB0aGlzLmdlbmVyYXRlX3Byb3Bvc2FsID0gZ2VuZXJhdGVfcHJvcG9zYWw7CgkgICAgICB0aGlzLmFjY2VwdGFuY2VfY291bnQgPSAwOwoJICAgICAgdGhpcy5iYXRjaF9jb3VudCA9IDA7CgkgICAgICB0aGlzLml0ZXJhdGlvbnNfc2luY2VfYWRhcHRpb24gPSAwOwoJICAgIH07CgkgICAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT25lZGltTWV0cm9wb2xpc1N0ZXBwZXI7CgkgICAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7CgkgICAgICB2YXIgcGFyYW1fc3RhdGUgPSB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV07CgkgICAgICB2YXIgcGFyYW1fcHJvcG9zYWwgPSB0aGlzLmdlbmVyYXRlX3Byb3Bvc2FsKHBhcmFtX3N0YXRlLCB0aGlzLnByb3BfbG9nX3NjYWxlKTsKCSAgICAgIGlmIChwYXJhbV9wcm9wb3NhbCA8IHRoaXMubG93ZXIgfHwgcGFyYW1fcHJvcG9zYWwgPiB0aGlzLnVwcGVyKSA7IGVsc2UgewoJICAgICAgICAvLyBtYWtlIGEgTWV0cm9wb2xpcyBzdGVwCgkgICAgICAgIHZhciBjdXJyX2xvZ19kZW5zID0gdGhpcy5sb2dfcG9zdCgpOwoJICAgICAgICB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV0gPSBwYXJhbV9wcm9wb3NhbDsKCSAgICAgICAgdmFyIHByb3BfbG9nX2RlbnMgPSB0aGlzLmxvZ19wb3N0KCk7CgkgICAgICAgIHZhciBhY2NlcHRfcHJvYiA9IE1hdGguZXhwKHByb3BfbG9nX2RlbnMgLSBjdXJyX2xvZ19kZW5zKTsKCSAgICAgICAgaWYgKGFjY2VwdF9wcm9iID4gTWF0aC5yYW5kb20oKSkgewoJICAgICAgICAgIC8vIFdlIGRvIG5vdGhpbmcgYXMgdGhlIHN0YXRlIG9mIHBhcmFtIGhhcyBhbHJlYWR5IGJlZW4gY2hhbmdlZCB0byB0aGUgcHJvcG9zYWwKCSAgICAgICAgICBpZiAodGhpcy5pc19hZGFwdGluZykgdGhpcy5hY2NlcHRhbmNlX2NvdW50Kys7CgkgICAgICAgIH0gZWxzZSB7CgkgICAgICAgICAgLy8gcmV2ZXJ0IHN0YXRlIGJhY2sgdG8gdGhlIG9sZCBzdGF0ZSBvZiBwYXJhbQoJICAgICAgICAgIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXSA9IHBhcmFtX3N0YXRlOwoJICAgICAgICB9CgkgICAgICB9CgkgICAgICBpZiAodGhpcy5pc19hZGFwdGluZykgewoJICAgICAgICB0aGlzLml0ZXJhdGlvbnNfc2luY2VfYWRhcHRpb24rKzsKCSAgICAgICAgaWYgKHRoaXMuaXRlcmF0aW9uc19zaW5jZV9hZGFwdGlvbiA+PSB0aGlzLmJhdGNoX3NpemUpIHsKCSAgICAgICAgICAvLyB0aGVuIGFkYXB0CgkgICAgICAgICAgdGhpcy5iYXRjaF9jb3VudCsrOwoJICAgICAgICAgIHZhciBsb2dfc2RfYWRqdXN0bWVudCA9IE1hdGgubWluKHRoaXMubWF4X2FkYXB0YXRpb24sIHRoaXMuaW5pdGlhbF9hZGFwdGF0aW9uIC8gTWF0aC5zcXJ0KHRoaXMuYmF0Y2hfY291bnQpKTsKCSAgICAgICAgICBpZiAodGhpcy5hY2NlcHRhbmNlX2NvdW50IC8gdGhpcy5iYXRjaF9zaXplID4gdGhpcy50YXJnZXRfYWNjZXB0X3JhdGUpIHsKCSAgICAgICAgICAgIHRoaXMucHJvcF9sb2dfc2NhbGUgKz0gbG9nX3NkX2FkanVzdG1lbnQ7CgkgICAgICAgICAgfSBlbHNlIHsKCSAgICAgICAgICAgIHRoaXMucHJvcF9sb2dfc2NhbGUgLT0gbG9nX3NkX2FkanVzdG1lbnQ7CgkgICAgICAgICAgfQoJICAgICAgICAgIHRoaXMuYWNjZXB0YW5jZV9jb3VudCA9IDA7CgkgICAgICAgICAgdGhpcy5pdGVyYXRpb25zX3NpbmNlX2FkYXB0aW9uID0gMDsKCSAgICAgICAgfQoJICAgICAgfQoJICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXTsKCSAgICB9OwoJICAgIE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZS5zdGFydF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgdGhpcy5pc19hZGFwdGluZyA9IHRydWU7CgkgICAgfTsKCSAgICBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgdGhpcy5pc19hZGFwdGluZyA9IGZhbHNlOwoJICAgIH07CgkgICAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7CgkgICAgICByZXR1cm4gewoJICAgICAgICBwcm9wX2xvZ19zY2FsZTogdGhpcy5wcm9wX2xvZ19zY2FsZSwKCSAgICAgICAgaXNfYWRhcHRpbmc6IHRoaXMuaXNfYWRhcHRpbmcsCgkgICAgICAgIGFjY2VwdGFuY2VfY291bnQ6IHRoaXMuYWNjZXB0YW5jZV9jb3VudCwKCSAgICAgICAgaXRlcmF0aW9uc19zaW5jZV9hZGFwdGlvbjogdGhpcy5pdGVyYXRpb25zX3NpbmNlX2FkYXB0aW9uLAoJICAgICAgICBiYXRjaF9jb3VudDogdGhpcy5iYXRjaF9jb3VudAoJICAgICAgfTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBGdW5jdGlvbiByZXR1cm5pbmcgYSBOb3JtYWwgcHJvcG9zYWwuCgkgICAgICovCgkgICAgdmFyIG5vcm1hbF9wcm9wb3NhbCA9IGZ1bmN0aW9uIChwYXJhbV9zdGF0ZSwgcHJvcF9sb2dfc2NhbGUpIHsKCSAgICAgIHJldHVybiBybm9ybShwYXJhbV9zdGF0ZSwgTWF0aC5leHAocHJvcF9sb2dfc2NhbGUpKTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBAY2xhc3MKCSAgICAgKiBAYXVnbWVudHMge09uZWRpbU1ldHJvcG9saXNTdGVwcGVyfQoJICAgICAqIEEgInN1YmNsYXNzIiBvZiBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciBtYWtpbmcgY29udGlub3VzIE5vcm1hbCBwcm9wb3NhbHMuCgkgICAgICovCgkgICAgdmFyIFJlYWxNZXRyb3BvbGlzU3RlcHBlciA9IGZ1bmN0aW9uIChwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykgewoJICAgICAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucywgbm9ybWFsX3Byb3Bvc2FsKTsKCSAgICB9OwoJICAgIFJlYWxNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgUmVhbE1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlYWxNZXRyb3BvbGlzU3RlcHBlcjsKCgkgICAgLyoqCgkgICAgICogRnVuY3Rpb24gcmV0dXJuaW5nIGEgZGlzY3JldGl6ZWQgTm9ybWFsIHByb3Bvc2FsLgoJICAgICAqLwoJICAgIHZhciBkaXNjcmV0ZV9ub3JtYWxfcHJvcG9zYWwgPSBmdW5jdGlvbiAocGFyYW1fc3RhdGUsIHByb3BfbG9nX3NjYWxlKSB7CgkgICAgICByZXR1cm4gTWF0aC5yb3VuZChybm9ybShwYXJhbV9zdGF0ZSwgTWF0aC5leHAocHJvcF9sb2dfc2NhbGUpKSk7CgkgICAgfTsKCgkgICAgLyoqCgkgICAgKiBAY2xhc3MKCSAgICAqIEBhdWdtZW50cyB7T25lZGltTWV0cm9wb2xpc1N0ZXBwZXJ9CgkgICAgKiBBICJzdWJjbGFzcyIgb2YgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIgbWFraW5nIGRpc2NyZXRpemVkIE5vcm1hbCBwcm9wb3NhbHMuCgkgICAgKi8KCSAgICB2YXIgSW50TWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbiAocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIHsKCSAgICAgIE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIGRpc2NyZXRlX25vcm1hbF9wcm9wb3NhbCk7CgkgICAgfTsKCSAgICBJbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgSW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW50TWV0cm9wb2xpc1N0ZXBwZXI7CgoJICAgIC8qKgoJICAgICAqIEBjbGFzcwoJICAgICAqIEBpbXBsZW1lbnRzIHtTdGVwcGVyfQoJICAgICAqIENvbnN0cnVjdG9yIGZvciBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBtZXRyb3BvbGlzIHN0ZXAgaW4KCSAgICAgKiB0aGUgQWRhcHRpdmUgTWV0cm9wb2xpcy1XaXRoaW4tR2liYnMgYWxnb3JpdGhtIGluICJFeGFtcGxlcyBvZiBBZGFwdGl2ZSBNQ01DIgoJICAgICAqIGJ5IFJvYmVydHMgYW5kIFJvc2VudGhhbCAoMjAwOCkgZm9yIHBvc3NpYmx5IG11bHRpZGltZW5zaW9uYWwgYXJyYXlzLiBUaGF0CgkgICAgICogaXMsIGluc3RlYWQgb2YganVzdCB0YWtpbmcgYSBzdGVwIGZvciBhIG9uZS1kaW1lbnNpb25hbCBwYXJhbWV0ZXIgbGlrZSAKCSAgICAgKiBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciwgdGhpcyBTdGVwcGVyIGlzIHJlc3BvbnNpYmxlIGZvciB0YWtpbmcgc3RlcHMgCgkgICAgICogZm9yIGEgbXVsdGlkaW1lbnNpb25hbCBhcnJheS4gSXQncyBzdGlsbCBwcmV0dHkgZHVtYiBhbmQganVzdCB0YWtlcwoJICAgICAqIG9uZS1kaW1lbnNpb25hbCBzdGVwcyBmb3IgZWFjaCBwYXJhbWV0ZXIgY29tcG9uZW50LCB0aG91Z2guCgkgICAgICogQHBhcmFtIHBhcmFtcyAtIEFuIG9iamVjdCB3aXRoIGEgc2luZ2xlIHBhcmFtZXRlciBkZWZpbml0aW9uIGZvciBhIAoJICAgICAqICAgbXVsdGlkaW1lbnNpb25hbCBwYXJhbWV0ZXIuCgkgICAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLgoJICAgICAqIEBwYXJhbSBsb2dfcG9zdCAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBsb2cgZGVuc2l0eSB0aGF0IGRlcGVuZHMgb24gdGhlIHN0YXRlLiAKCSAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMgdG8gdGhlIHN0ZXBwZXIuCgkgICAgICogQHBhcmFtIFN1YlN0ZXBwZXIgLSBhIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZSBvZiBvbmUgZGltZW5zaW9uYWwgU3RlcHBlciB0byBhcHBseSBvbgoJICAgICAqICAgYWxsIHRoZSBjb21wb25lbnRzIG9mIHRoZSBtdWx0aWRpbWVuc2lvbmFsIHBhcmFtZXRlci4KCSAgICAqLwoJICAgIHZhciBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyID0gZnVuY3Rpb24gKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zLCBTdWJTdGVwcGVyKSB7CgkgICAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpOwoJICAgICAgdmFyIHBhcmFtX25hbWVzID0gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpOwoJICAgICAgaWYgKHBhcmFtX25hbWVzLmxlbmd0aCAhPSAxKSB7CgkgICAgICAgIHRocm93ICJNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyIGNhbid0IGhhbmRsZSBtb3JlIHRoYW4gb25lIHBhcmFtZXRlci4iOwoJICAgICAgfQoJICAgICAgdGhpcy5wYXJhbV9uYW1lID0gcGFyYW1fbmFtZXNbMF07CgkgICAgICB2YXIgcGFyYW0gPSB0aGlzLnBhcmFtc1t0aGlzLnBhcmFtX25hbWVdOwoJICAgICAgdGhpcy5sb3dlciA9IHBhcmFtLmxvd2VyOwoJICAgICAgdGhpcy51cHBlciA9IHBhcmFtLnVwcGVyOwoJICAgICAgdGhpcy5kaW0gPSBwYXJhbS5kaW07CgkgICAgICB0aGlzLnByb3BfbG9nX3NjYWxlID0gZ2V0X211bHRpZGltX29wdGlvbigicHJvcF9sb2dfc2NhbGUiLCBvcHRpb25zLCB0aGlzLmRpbSwgMCk7CgkgICAgICB0aGlzLmJhdGNoX3NpemUgPSBnZXRfbXVsdGlkaW1fb3B0aW9uKCJiYXRjaF9zaXplIiwgb3B0aW9ucywgdGhpcy5kaW0sIDUwKTsKCSAgICAgIHRoaXMubWF4X2FkYXB0YXRpb24gPSBnZXRfbXVsdGlkaW1fb3B0aW9uKCJtYXhfYWRhcHRhdGlvbiIsIG9wdGlvbnMsIHRoaXMuZGltLCAwLjMzKTsKCSAgICAgIHRoaXMuaW5pdGlhbF9hZGFwdGF0aW9uID0gZ2V0X211bHRpZGltX29wdGlvbigiaW5pdGlhbF9hZGFwdGF0aW9uIiwgb3B0aW9ucywgdGhpcy5kaW0sIDEuMCk7CgkgICAgICB0aGlzLnRhcmdldF9hY2NlcHRfcmF0ZSA9IGdldF9tdWx0aWRpbV9vcHRpb24oInRhcmdldF9hY2NlcHRfcmF0ZSIsIG9wdGlvbnMsIHRoaXMuZGltLCAwLjQ0KTsKCSAgICAgIHRoaXMuaXNfYWRhcHRpbmcgPSBnZXRfbXVsdGlkaW1fb3B0aW9uKCJpc19hZGFwdGluZyIsIG9wdGlvbnMsIHRoaXMuZGltLCB0cnVlKTsKCgkgICAgICAvLyBUaGlzIGhhY2sgYmVsb3cgaXMgYSByZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuIGFycmF5IG9mIAoJICAgICAgLy8gb25lIGRpbWVuc2lvbmFsIHN0ZXBwZXJzIGFjY29yZGluZyB0byBkaW0uCgkgICAgICB2YXIgY3JlYXRlX3N1YnN0ZXBwZXJzID0gZnVuY3Rpb24gKGRpbSwgc3Vic3RhdGUsIGxvZ19wb3N0LCBwcm9wX2xvZ19zY2FsZSwgYmF0Y2hfc2l6ZSwgbWF4X2FkYXB0YXRpb24sIGluaXRpYWxfYWRhcHRhdGlvbiwgdGFyZ2V0X2FjY2VwdF9yYXRlLCBpc19hZGFwdGluZykgewoJICAgICAgICB2YXIgc3Vic3RlcHBlcnMgPSBbXTsKCSAgICAgICAgaWYgKGRpbS5sZW5ndGggPT09IDEpIHsKCSAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpbVswXTsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgc3Vib3B0aW9ucyA9IHsKCSAgICAgICAgICAgICAgcHJvcF9sb2dfc2NhbGU6IHByb3BfbG9nX3NjYWxlW2ldLAoJICAgICAgICAgICAgICBiYXRjaF9zaXplOiBiYXRjaF9zaXplW2ldLAoJICAgICAgICAgICAgICBtYXhfYWRhcHRhdGlvbjogbWF4X2FkYXB0YXRpb25baV0sCgkgICAgICAgICAgICAgIGluaXRpYWxfYWRhcHRhdGlvbjogaW5pdGlhbF9hZGFwdGF0aW9uW2ldLAoJICAgICAgICAgICAgICB0YXJnZXRfYWNjZXB0X3JhdGU6IHRhcmdldF9hY2NlcHRfcmF0ZVtpXSwKCSAgICAgICAgICAgICAgaXNfYWRhcHRpbmc6IGlzX2FkYXB0aW5nW2ldCgkgICAgICAgICAgICB9OwoJICAgICAgICAgICAgdmFyIHN1YnBhcmFtID0ge307CgkgICAgICAgICAgICBzdWJwYXJhbVtpXSA9IGRlZXBfY2xvbmUocGFyYW0pOwoJICAgICAgICAgICAgc3VicGFyYW1baV0uZGltID0gWzFdOyAvLyBBcyB0aGlzIHNob3VsZCBub3cgYmUgYSBvbmUtZGltIHBhcmFtZXRlcgoJICAgICAgICAgICAgZGVsZXRlIHN1YnBhcmFtW2ldLmluaXQ7IC8vIEFzIGl0IHNvdWxkIG5vdCBiZSBuZWVkZWQKCSAgICAgICAgICAgIHN1YnN0ZXBwZXJzW2ldID0gbmV3IFN1YlN0ZXBwZXIoc3VicGFyYW0sIHN1YnN0YXRlLCBsb2dfcG9zdCwgc3Vib3B0aW9ucyk7CgkgICAgICAgICAgfQoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHsKCSAgICAgICAgICAgIHN1YnN0ZXBwZXJzW2ldID0gY3JlYXRlX3N1YnN0ZXBwZXJzKGRpbS5zbGljZSgxKSwgc3Vic3RhdGVbaV0sIGxvZ19wb3N0LCBwcm9wX2xvZ19zY2FsZVtpXSwgYmF0Y2hfc2l6ZVtpXSwgbWF4X2FkYXB0YXRpb25baV0sIGluaXRpYWxfYWRhcHRhdGlvbltpXSwgdGFyZ2V0X2FjY2VwdF9yYXRlW2ldLCBpc19hZGFwdGluZ1tpXSk7CgkgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBzdWJzdGVwcGVyczsKCSAgICAgIH07CgkgICAgICB0aGlzLnN1YnN0ZXBwZXJzID0gY3JlYXRlX3N1YnN0ZXBwZXJzKHRoaXMuZGltLCB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV0sIHRoaXMubG9nX3Bvc3QsIHRoaXMucHJvcF9sb2dfc2NhbGUsIHRoaXMuYmF0Y2hfc2l6ZSwgdGhpcy5tYXhfYWRhcHRhdGlvbiwgdGhpcy5pbml0aWFsX2FkYXB0YXRpb24sIHRoaXMudGFyZ2V0X2FjY2VwdF9yYXRlLCB0aGlzLmlzX2FkYXB0aW5nKTsKCSAgICB9OwoJICAgIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyOwoJICAgIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBzdWJzdGVwcGVycyBpbiBhIHJhbmRvbSBvcmRlciBhbmQgY2FsbCBzdGVwKCkgb24gdGhlbS4KCSAgICAgIHJldHVybiBuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uIChzdWJzdGVwcGVyKSB7CgkgICAgICAgIHJldHVybiBzdWJzdGVwcGVyLnN0ZXAoKTsKCSAgICAgIH0pOwoJICAgIH07CgkgICAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RhcnRfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uICgpIHsKCSAgICAgIG5lc3RlZF9hcnJheV9hcHBseSh0aGlzLnN1YnN0ZXBwZXJzLCBmdW5jdGlvbiAoc3Vic3RlcHBlcikgewoJICAgICAgICBzdWJzdGVwcGVyLnN0YXJ0X2FkYXB0YXRpb24oKTsKCSAgICAgIH0pOwoJICAgIH07CgkgICAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgbmVzdGVkX2FycmF5X2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uIChzdWJzdGVwcGVyKSB7CgkgICAgICAgIHN1YnN0ZXBwZXIuc3RvcF9hZGFwdGF0aW9uKCk7CgkgICAgICB9KTsKCSAgICB9OwoJICAgIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7CgkgICAgICByZXR1cm4gbmVzdGVkX2FycmF5X2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uIChzdWJzdGVwcGVyKSB7CgkgICAgICAgIHJldHVybiBzdWJzdGVwcGVyLmluZm8oKTsKCSAgICAgIH0pOwoJICAgIH07CgoJICAgIC8qKgoJICAgICAqIEBjbGFzcwoJICAgICAqIEBhdWdtZW50cyB7TXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcn0KCSAgICAgKiBBICJzdWJjbGFzcyIgb2YgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlciBtYWtpbmcgY29udGlub3VzIE5vcm1hbCBwcm9wb3NhbHMuCgkgICAgICovCgkgICAgdmFyIE11bHRpUmVhbENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyID0gZnVuY3Rpb24gKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zKSB7CgkgICAgICBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIFJlYWxNZXRyb3BvbGlzU3RlcHBlcik7CgkgICAgfTsKCSAgICBNdWx0aVJlYWxDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlKTsKCSAgICBNdWx0aVJlYWxDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aVJlYWxDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcjsKCgkgICAgLyoqCgkgICAgICogQGNsYXNzCgkgICAgICogQGF1Z21lbnRzIHtNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyfQoJICAgICAqIEEgInN1YmNsYXNzIiBvZiBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyIG1ha2luZyBkaXNjcmV0aXplZCBOb3JtYWwgcHJvcG9zYWxzLgoJICAgICAqLwoJICAgIHZhciBNdWx0aUludENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyID0gZnVuY3Rpb24gKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zKSB7CgkgICAgICBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIEludE1ldHJvcG9saXNTdGVwcGVyKTsKCSAgICB9OwoJICAgIE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgTXVsdGlJbnRDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aUludENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyOwoKCSAgICAvKioKCSAgICAgKiBAY2xhc3MKCSAgICAgKiBAaW1wbGVtZW50cyB7U3RlcHBlcn0KCSAgICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBhIHN0ZXAgZm9yIGEgYmluYXJ5IHBhcmFtZXRlci4KCSAgICAgKiBUaGlzIGlzIGRvbmUgYnkgZXZhbHVhdGluZyB0aGUgbG9nIHBvc3RlcmlvciBmb3IgYm90aCBzdGF0ZXMgb2YgdGhlCgkgICAgICogcGFyYW1ldGVyIGFuZCB0aGVuIHNlbGVjdGluZyBhIHN0YXRlIHJhbmRvbWx5IHdpdGggcHJvYmFiaWxpdHkgcmVsYXRpdmUgCgkgICAgICogdG8gdGhlIHBvc3RlcmlvciBvZiBlYWNoIHN0YXRlLgoJICAgICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbi4KCSAgICAgKiBAcGFyYW0gc3RhdGUgLSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhdGUgb2YgYWxsIHBhcmFtZXRlcnMuCgkgICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIAoJICAgICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci4KCSAgICAqLwoJICAgIHZhciBCaW5hcnlTdGVwcGVyID0gZnVuY3Rpb24gKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zKSB7CgkgICAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpOwoJICAgICAgdmFyIHBhcmFtX25hbWVzID0gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpOwoJICAgICAgaWYgKHBhcmFtX25hbWVzLmxlbmd0aCA9PSAxKSB7CgkgICAgICAgIHRoaXMucGFyYW1fbmFtZSA9IHBhcmFtX25hbWVzWzBdOwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgdGhyb3cgIkJpbmFyeVN0ZXBwZXIgY2FuJ3QgaGFuZGxlIG1vcmUgdGhhbiBvbmUgcGFyYW1ldGVyLiI7CgkgICAgICB9CgkgICAgfTsKCSAgICBCaW5hcnlTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RlcHBlci5wcm90b3R5cGUpOwoJICAgIEJpbmFyeVN0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmluYXJ5U3RlcHBlcjsKCSAgICBCaW5hcnlTdGVwcGVyLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkgewoJICAgICAgdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdID0gMDsKCSAgICAgIHZhciB6ZXJvX2xvZ19kZW5zID0gdGhpcy5sb2dfcG9zdCgpOwoJICAgICAgdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdID0gMTsKCSAgICAgIHZhciBvbmVfbG9nX2RlbnMgPSB0aGlzLmxvZ19wb3N0KCk7CgkgICAgICB2YXIgbWF4X2xvZ19kZW5zID0gTWF0aC5tYXgoemVyb19sb2dfZGVucywgb25lX2xvZ19kZW5zKTsKCSAgICAgIHplcm9fbG9nX2RlbnMgLT0gbWF4X2xvZ19kZW5zOwoJICAgICAgb25lX2xvZ19kZW5zIC09IG1heF9sb2dfZGVuczsKCSAgICAgIHZhciB6ZXJvX3Byb2IgPSBNYXRoLmV4cCh6ZXJvX2xvZ19kZW5zIC0gTWF0aC5sb2coTWF0aC5leHAoemVyb19sb2dfZGVucykgKyBNYXRoLmV4cChvbmVfbG9nX2RlbnMpKSk7CgkgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHplcm9fcHJvYikgewoJICAgICAgICB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV0gPSAwOwoJICAgICAgICByZXR1cm4gMDsKCSAgICAgIH0gLy8gZWxzZSBrZWVwIHRoZSBwYXJhbSBhdCAxIC4KCSAgICAgIHJldHVybiAxOwoJICAgIH07CgoJICAgIC8qKgoJICAgICogQGNsYXNzCgkgICAgKiBAaW1wbGVtZW50cyB7U3RlcHBlcn0KCSAgICAqIEp1c3QgbGlrZSBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyIHRoaXMgU3RlcHBlciB0YWtlcyBhIHN0ZXBzIGZvcgoJICAgICogYSBtdWx0aWRpbWVuc2lvbmFsIHBhcmFtZXRlciBieSB1cGRhdGluZyBlYWNoIGNvbXBvbmVudCBpbiB0dXJuLiBUaGUgZGlmZmVyZW5jZQoJICAgICogaXMgdGhhdCB0aGlzIHN0ZXBwZXIgd29ya3Mgb24gYmluYXJ5IHBhcmFtZXRlcnMuCgkgICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGRlZmluaXRpb24gZm9yIGEgCgkgICAgKiAgIG11bHRpZGltZW5zaW9uYWwgcGFyYW1ldGVyLgoJICAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLgoJICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIAoJICAgICogQHBhcmFtIG9wdGlvbnMgLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIHRoZSBzdGVwcGVyLgoJICAgICovCgkgICAgdmFyIEJpbmFyeUNvbXBvbmVudFN0ZXBwZXIgPSBmdW5jdGlvbiAocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIHsKCSAgICAgIFN0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCk7CgkgICAgICB2YXIgcGFyYW1fbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7CgkgICAgICBpZiAocGFyYW1fbmFtZXMubGVuZ3RoID09IDEpIHsKCSAgICAgICAgdGhpcy5wYXJhbV9uYW1lID0gcGFyYW1fbmFtZXNbMF07CgkgICAgICAgIHZhciBwYXJhbSA9IHRoaXMucGFyYW1zW3RoaXMucGFyYW1fbmFtZV07CgkgICAgICAgIHRoaXMuZGltID0gcGFyYW0uZGltOwoJICAgICAgfSBlbHNlIHsKCSAgICAgICAgdGhyb3cgIkJpbmFyeUNvbXBvbmVudFN0ZXBwZXIgY2FuJ3QgaGFuZGxlIG1vcmUgdGhhbiBvbmUgcGFyYW1ldGVyLiI7CgkgICAgICB9CgkgICAgICB2YXIgY3JlYXRlX3N1YnN0ZXBwZXJzID0gZnVuY3Rpb24gKGRpbSwgc3Vic3RhdGUsIGxvZ19wb3N0KSB7CgkgICAgICAgIHZhciBzdWJzdGVwcGVycyA9IFtdOwoJICAgICAgICB2YXIgaTsKCSAgICAgICAgaWYgKGRpbS5sZW5ndGggPT09IDEpIHsKCSAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHsKCSAgICAgICAgICAgIHZhciBzdWJwYXJhbXMgPSB7fTsKCSAgICAgICAgICAgIHN1YnBhcmFtc1tpXSA9IHBhcmFtOwoJICAgICAgICAgICAgc3Vic3RlcHBlcnNbaV0gPSBuZXcgQmluYXJ5U3RlcHBlcihzdWJwYXJhbXMsIHN1YnN0YXRlLCBsb2dfcG9zdCk7CgkgICAgICAgICAgfQoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaW1bMF07IGkrKykgewoJICAgICAgICAgICAgc3Vic3RlcHBlcnNbaV0gPSBjcmVhdGVfc3Vic3RlcHBlcnMoZGltLnNsaWNlKDEpLCBzdWJzdGF0ZVtpXSwgbG9nX3Bvc3QpOwoJICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gc3Vic3RlcHBlcnM7CgkgICAgICB9OwoJICAgICAgdGhpcy5zdWJzdGVwcGVycyA9IGNyZWF0ZV9zdWJzdGVwcGVycyh0aGlzLmRpbSwgdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdLCB0aGlzLmxvZ19wb3N0KTsKCSAgICB9OwoJICAgIEJpbmFyeUNvbXBvbmVudFN0ZXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdGVwcGVyLnByb3RvdHlwZSk7CgkgICAgQmluYXJ5Q29tcG9uZW50U3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaW5hcnlDb21wb25lbnRTdGVwcGVyOwoJICAgIEJpbmFyeUNvbXBvbmVudFN0ZXBwZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBzdWJzdGVwcGVycyBpbiBhIHJhbmRvbSBvcmRlciBhbmQgY2FsbCBzdGVwKCkgb24gdGhlbS4KCSAgICAgIHJldHVybiBuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uIChzdWJzdGVwcGVyKSB7CgkgICAgICAgIHJldHVybiBzdWJzdGVwcGVyLnN0ZXAoKTsKCSAgICAgIH0pOwoJICAgIH07CgoJICAgIC8qKgoJICAgICAqIEBjbGFzcwoJICAgICAqIEBpbXBsZW1lbnRzIHtTdGVwcGVyfQoJICAgICAqIFRoaXMgc3RlcHBlciBjYW4gYmUgcmVzcG9uc2libGUgZm9yIHRha2luZyBhIHN0ZXAgZm9yIG9uZSBvciBtb3JlIHBhcmFtZXRlcnMuCgkgICAgICogRm9yIHJlYWwgYW5kIGludCBwYXJhbWV0ZXJzIGl0IHRha2VzIE1ldHJvcG9saXMgd2l0aGluIEdpYmJzIHN0ZXBzLCBhbmQgZm9yIAoJICAgICAqIGJpbmFyeSBwYXJhbWV0ZXJzIGl0IGRvZXMgZXZhbHVhdGVzIHRoZSBwb3N0ZXJpb3IgZm9yIGJvdGggcGFyYW10ZXIgdmFsdWVzIGFuZAoJICAgICAqIHJhbmRvbWx5IGNoYW5nZXMgdG8gYSBjZXJ0YWluIHZhbHVlIHByb3BvcnRpb25hbGx5IHRvIHRoYXQgdmFsdWUncyBwb3N0ZXJpb3IKCSAgICAgKiAodGhpcyBpcyBhbHNvIGRvbmUgZm9yIGVhY2ggcGFyYW1ldGVyLCBzbyBhbHNvIGEgKiB3aXRoaW4gR2liYnMgYXBwcm9hY2gpLgoJICAgICAqIFRoaXMgc3RlcHBlciBpcyBhbHNvIGFkYXB0aXZlIGFuZCBjYW4gYmUgZWZmaWNpZW50IHdoZW4gdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzCgkgICAgICogYXJlIG5vdCB0b28gaGlnaCBhbmQgdGhlIGNvcnJlbGF0aW9ucyBiZXR3ZWVuIHBhcmFtZXRlcnMgYXJlIGxvdy4KCSAgICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggYSBvbmUgb3IgbW9yZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbnMKCSAgICAgKiBAcGFyYW0gc3RhdGUgLSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhdGUgb2YgYWxsIHBhcmFtZXRlcnMuCgkgICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIAoJICAgICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci4KCSAgICAqLwoJICAgIHZhciBBbXdnU3RlcHBlciA9IGZ1bmN0aW9uIChwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykgewoJICAgICAgU3RlcHBlci5jYWxsKHRoaXMsIHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0KTsKCSAgICAgIHRoaXMucGFyYW1fbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7CgkgICAgICB0aGlzLnN1YnN0ZXBwZXJzID0gW107CgkgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFyYW1fbmFtZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW3RoaXMucGFyYW1fbmFtZXNbaV1dOwoJICAgICAgICB2YXIgU2VsZWN0U3RlcHBlcjsKCSAgICAgICAgc3dpdGNoIChwYXJhbS50eXBlKSB7CgkgICAgICAgICAgY2FzZSAicmVhbCI6CgkgICAgICAgICAgICBpZiAoYXJyYXlfZXF1YWwocGFyYW0uZGltLCBbMV0pKSB7CgkgICAgICAgICAgICAgIFNlbGVjdFN0ZXBwZXIgPSBSZWFsTWV0cm9wb2xpc1N0ZXBwZXI7CgkgICAgICAgICAgICB9IGVsc2UgewoJICAgICAgICAgICAgICBTZWxlY3RTdGVwcGVyID0gTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXI7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICBjYXNlICJpbnQiOgoJICAgICAgICAgICAgaWYgKGFycmF5X2VxdWFsKHBhcmFtLmRpbSwgWzFdKSkgewoJICAgICAgICAgICAgICBTZWxlY3RTdGVwcGVyID0gSW50TWV0cm9wb2xpc1N0ZXBwZXI7CgkgICAgICAgICAgICB9IGVsc2UgewoJICAgICAgICAgICAgICBTZWxlY3RTdGVwcGVyID0gTXVsdGlJbnRDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcjsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgIGNhc2UgImJpbmFyeSI6CgkgICAgICAgICAgICBpZiAoYXJyYXlfZXF1YWwocGFyYW0uZGltLCBbMV0pKSB7CgkgICAgICAgICAgICAgIFNlbGVjdFN0ZXBwZXIgPSBCaW5hcnlTdGVwcGVyOwoJICAgICAgICAgICAgfSBlbHNlIHsKCSAgICAgICAgICAgICAgU2VsZWN0U3RlcHBlciA9IEJpbmFyeUNvbXBvbmVudFN0ZXBwZXI7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICBkZWZhdWx0OgoJICAgICAgICAgICAgdGhyb3cgIkFtd2dTdGVwcGVyIGNhbid0IGhhbmRsZSBwYXJhbWV0ZXIgIiArIHRoaXMucGFyYW1fbmFtZXNbaV0gKyAiIHdpdGggdHlwZSAiICsgcGFyYW0udHlwZTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgcGFyYW1fb2JqZWN0X3dyYXAgPSB7fTsKCSAgICAgICAgcGFyYW1fb2JqZWN0X3dyYXBbdGhpcy5wYXJhbV9uYW1lc1tpXV0gPSBwYXJhbTsKCSAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307CgkgICAgICAgIHZhciBwYXJhbV9vcHRpb25zID0gb3B0aW9ucy5wYXJhbXMgJiYgb3B0aW9ucy5wYXJhbXNbdGhpcy5wYXJhbV9uYW1lc1tpXV0gfHwge307CgkgICAgICAgIHBhcmFtX29wdGlvbnMucHJvcF9sb2dfc2NhbGUgPSBwYXJhbV9vcHRpb25zLnByb3BfbG9nX3NjYWxlIHx8IG9wdGlvbnMucHJvcF9sb2dfc2NhbGU7CgkgICAgICAgIHBhcmFtX29wdGlvbnMuYmF0Y2hfc2l6ZSA9IHBhcmFtX29wdGlvbnMuYmF0Y2hfc2l6ZSB8fCBvcHRpb25zLmJhdGNoX3NpemU7CgkgICAgICAgIHBhcmFtX29wdGlvbnMubWF4X2FkYXB0YXRpb24gPSBwYXJhbV9vcHRpb25zLm1heF9hZGFwdGF0aW9uIHx8IG9wdGlvbnMubWF4X2FkYXB0YXRpb247CgkgICAgICAgIHBhcmFtX29wdGlvbnMuaW5pdGlhbF9hZGFwdGF0aW9uID0gcGFyYW1fb3B0aW9ucy5pbml0aWFsX2FkYXB0YXRpb24gfHwgb3B0aW9ucy5pbml0aWFsX2FkYXB0YXRpb247CgkgICAgICAgIHBhcmFtX29wdGlvbnMudGFyZ2V0X2FjY2VwdF9yYXRlID0gcGFyYW1fb3B0aW9ucy50YXJnZXRfYWNjZXB0X3JhdGUgfHwgb3B0aW9ucy50YXJnZXRfYWNjZXB0X3JhdGU7CgkgICAgICAgIHBhcmFtX29wdGlvbnMuaXNfYWRhcHRpbmcgPSBwYXJhbV9vcHRpb25zLmlzX2FkYXB0aW5nIHx8IG9wdGlvbnMuaXNfYWRhcHRpbmc7CgkgICAgICAgIHRoaXMuc3Vic3RlcHBlcnNbaV0gPSBuZXcgU2VsZWN0U3RlcHBlcihwYXJhbV9vYmplY3Rfd3JhcCwgc3RhdGUsIGxvZ19wb3N0LCBwYXJhbV9vcHRpb25zKTsKCSAgICAgIH0KCSAgICB9OwoJICAgIEFtd2dTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RlcHBlci5wcm90b3R5cGUpOwoJICAgIEFtd2dTdGVwcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFtd2dTdGVwcGVyOwoJICAgIEFtd2dTdGVwcGVyLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkgewoJICAgICAgc2h1ZmZsZV9hcnJheSh0aGlzLnN1YnN0ZXBwZXJzKTsKCSAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzdGVwcGVycy5sZW5ndGg7IGkrKykgewoJICAgICAgICB0aGlzLnN1YnN0ZXBwZXJzW2ldLnN0ZXAoKTsKCSAgICAgIH0KCSAgICAgIHJldHVybiB0aGlzLnN0YXRlOwoJICAgIH07CgkgICAgQW13Z1N0ZXBwZXIucHJvdG90eXBlLnN0YXJ0X2FkYXB0YXRpb24gPSBmdW5jdGlvbiAoKSB7CgkgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic3RlcHBlcnMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgdGhpcy5zdWJzdGVwcGVyc1tpXS5zdGFydF9hZGFwdGF0aW9uKCk7CgkgICAgICB9CgkgICAgfTsKCSAgICBBbXdnU3RlcHBlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnN0ZXBwZXJzLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgIHRoaXMuc3Vic3RlcHBlcnNbaV0uc3RvcF9hZGFwdGF0aW9uKCk7CgkgICAgICB9CgkgICAgfTsKCSAgICBBbXdnU3RlcHBlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgIHZhciBpbmZvID0ge307CgkgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic3RlcHBlcnMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgaW5mb1t0aGlzLnBhcmFtX25hbWVzW2ldXSA9IHRoaXMuc3Vic3RlcHBlcnNbaV0uaW5mbygpOwoJICAgICAgfQoJICAgICAgcmV0dXJuIGluZm87CgkgICAgfTsKCgkgICAgLy8vLy8vLy8vLy8gU2FtcGxlciBGdW5jdGlvbnMgLy8vLy8vLy8vLwoJICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KCgkgICAgLyoqCgkgICAgKiBAaW50ZXJmYWNlCgkgICAgKiBXaGlsZSB5b3UgY291bGQgZml0IGEgbW9kZWwgYnkgcGFzdGluZyB0b2dldGhlciBTdGVwcGVycywgYQoJICAgIC8vIFNhbXBsZXIgaXMgaGVyZSBpcyBhIGNvbnZlbmllbmNlIGNsYXNzIHdoZXJlIGFuIGluc3RhbmNlIG9mIFNhbXBsZXIKCSAgICAvLyBzZXRzIHVwIHRoZSBTdGVwcGVycywgY2hlY2tzIHRoZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbiwKCSAgICAvLyBhbmQgbWFuYWdlcyB0aGUgc2FtcGxpbmcuIFRoaXMgaGVyZSBkZWZpbmVzIHRoZSBTYW1wbGVyICJpbnRlcmZhY2UiLgoJICAgICogQGludGVyZmFjZQoJICAgICogQHBhcmFtIHBhcmFtcyAtIEFuIG9iamVjdCB3aXRoIHBhcmFtZXRlciBkZWZpbml0aW9ucywgZm9yIGV4YW1wbGU6CgkgICAgKiAgIHsibXUiOiB7InR5cGUiOiAicmVhbCJ9LCAic2lnbWEiOiB7InR5cGUiOiAicmVhbCIsICJsb3dlciIgPSAwfX0KCSAgICAqICAgVGhlIHBhcmFtZXRlciBkZWZpbml0aW9ucyBkb2Vzbid0IGhhdmUgdG8gYmUgImNvbXBsZXRlIiBhbmQgcHJvcGVydGllcwoJICAgICogICBsZWZ0IG91dCAobGlrZSBsb3dlciBhbmQgdXBwZXIpIHdpbGwgYmUgZmlsbGVkIGluIGJ5IGRlZmF1bHRzLgoJICAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB3aXRoIHNpZ25hdHVyZSBmdW5jdGlvbihzdGF0ZSwgZGF0YSkuIEhlcmUKCSAgICAqICAgc3RhdGUgd2lsbCBiZSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSB3aXRoIGVhY2ggcGFyYW1ldGVyIGFzIGEgCgkgICAgKiAgIGtleSBhbmQgdGhlIHBhcmFtZXRlciB2YWx1ZXMgYXMgbnVtYmVycyBvciBhcnJheXMuIEZvciBleGFtcGxlOgoJICAgICogICB7Im11IjogMywgInNpZ21hIjogMS41fS4gVGhlIGRhdGEgYXJndW1lbnQgd2lsbCBiZSB0aGUgc2FtZSBvYmplY3QgYXMgCgkgICAgKiAgIHRoZSBkYXRhIGFyZ3VtZW50IGdpdmVuIGJlbG93LgoJICAgICogQHBhcmFtIGRhdGEgLSBhbiBvYmplY3QgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgbG9nX3Bvc3QgZnVuY3Rpb24KCSAgICAqICAgd2hlbiBzYW1wbGluZy4KCSAgICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc2FtcGxlci4KCSAgICAqLwoJICAgIHZhciBTYW1wbGVyID0gZnVuY3Rpb24gKHBhcmFtcywgbG9nX3Bvc3QsIGRhdGEsIG9wdGlvbnMpIHsKCSAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zOwoJICAgICAgdGhpcy5kYXRhID0gZGF0YTsKCSAgICAgIHRoaXMucGFyYW1fbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7CgoJICAgICAgLy8gU2V0dGluZyBkZWZhdWx0IG9wdGlvbnMgaWYgbm90IHBhc3NlZCB0aHJvdWdoIHRoZSBvcHRpb25zIG9iamVjdAoJICAgICAgdGhpcy5wYXJhbV9pbml0X2Z1biA9IGdldF9vcHRpb24oInBhcmFtX2luaXRfZnVuIiwgb3B0aW9ucywgcGFyYW1faW5pdF9maXhlZCk7CgkgICAgICB2YXIgdGhpbm5pbmdfaW50ZXJ2YWwgPSBnZXRfb3B0aW9uKCJ0aGluIiwgb3B0aW9ucywgMSk7CgkgICAgICB2YXIgcGFyYW1zX3RvX21vbml0b3IgPSBnZXRfb3B0aW9uKCJtb25pdG9yIiwgb3B0aW9ucywgbnVsbCk7CgkgICAgICB0aGlzLnRoaW4odGhpbm5pbmdfaW50ZXJ2YWwpOwoJICAgICAgdGhpcy5tb25pdG9yKHBhcmFtc190b19tb25pdG9yKTsKCSAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7CgkgICAgICAvLyBDb21wbGV0aW5nIHRoZSBwYXJhbXMgYW5kIGluaXRpYWxpemluZyB0aGUgc3RhdGUuCgkgICAgICB0aGlzLnBhcmFtcyA9IGNvbXBsZXRlX3BhcmFtcyh0aGlzLnBhcmFtcywgdGhpcy5wYXJhbV9pbml0X2Z1bik7CgkgICAgICB2YXIgc3RhdGUgPSB7fTsKCSAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXJhbV9uYW1lcy5sZW5ndGg7IGkrKykgewoJICAgICAgICBzdGF0ZVt0aGlzLnBhcmFtX25hbWVzW2ldXSA9IHRoaXMucGFyYW1zW3RoaXMucGFyYW1fbmFtZXNbaV1dLmluaXQ7CgkgICAgICB9CgkgICAgICB0aGlzLmxvZ19wb3N0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbG9nX3Bvc3Qoc3RhdGUsIGRhdGEpOwoJICAgICAgfTsKCSAgICAgIC8vIFJ1bm5pbmcgdGhlIGxvZ19wb3N0IGZ1bmN0aW9uIG9uY2UgaW4gY2FzZSBpdCBmdXJ0aGVyIG1vZGlmaWVzIHRoZSBzdGF0ZQoJICAgICAgLy8gZm9yIGV4YW1wbGUgYWRkaW5nIGRlcml2ZWQgcXVhbnRpdGllcy4KCSAgICAgIHRoaXMubG9nX3Bvc3QoKTsKCSAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTsKCSAgICAgIHRoaXMuc3RlcHBlcnMgPSB0aGlzLmNyZWF0ZV9zdGVwcGVyX2Vuc2FtYmxlKHRoaXMucGFyYW1zLCB0aGlzLnN0YXRlLCB0aGlzLmxvZ19wb3N0LCB0aGlzLm9wdGlvbnMpOwoJICAgIH07CgoJICAgIC8qKiBTaG91bGQgcmV0dXJuIGEgdmVjdG9yIG9mIHN0ZXBwZXJzIHRoYXQgd2hlbiBjYWxsZWQgCgkgICAgICogc2hvdWxkIHRha2UgYSBzdGVwIGluIHRoZSBwYXJhbWV0ZXIgc3BhY2UuCgkgICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUuY3JlYXRlX3N0ZXBwZXJfZW5zYW1ibGUgPSBmdW5jdGlvbiAoc3RhdGUsIGxvZ19wb3N0KSB7CgkgICAgICB0aHJvdyAiRXZlcnkgU2FtcGxlciBuZWVkcyB0byBpbXBsZW1lbnQgY3JlYXRlX3N0ZXBwZXJfZW5zYW1ibGUoKSI7CgkgICAgfTsKCgkgICAgLyoqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggaW5mbyBhYm91dCB0aGUgc3RhdGUgb2YgdGhlIFNhbXBsZXIuCgkgICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgIHJldHVybiB7CgkgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLAoJICAgICAgICB0aGluOiB0aGlzLnRoaW4sCgkgICAgICAgIG1vbml0b3I6IHRoaXMubW9uaXRvciwKCSAgICAgICAgc3RlcHBlcnM6IHRoaXMuc3RlcHBlcnMKCSAgICAgIH07CgkgICAgfTsKCgkgICAgLyoqIFRha2VzIGEgc3RlcCBpbiB0aGUgcGFyYW1ldGVyIHNwYWNlLiBSZXR1cm5zIHRoZSBuZXcgc3BhY2UKCSAgICAgKiBidXQgYWxzbyBtb2RpZmllcyB0aGUgc3RhdGUgaW4gcGxhY2UuCgkgICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgIHNodWZmbGVfYXJyYXkodGhpcy5zdGVwcGVycyk7CgkgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RlcHBlcnMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgdGhpcy5zdGVwcGVyc1tpXS5zdGVwKCk7CgkgICAgICB9CgkgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zdGF0ZSkubGVuZ3RoID4gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpLmxlbmd0aCkgewoJICAgICAgICAvLyBUaGUgc3RhdGUgY29udGFpbnMgZGV2aXZlZCBxdWFudGl0aWVzIChub3Qgb25seSBwYXJhbWV0ZXJzKSBhbmQgd2UKCSAgICAgICAgLy8gbmVlZCB0byBydW4gdGhlIGxvZ19wb3N0IG9uY2UgbW9yZSBpbiBvcmRlciB0byBzZXQgdGhlIGRlcml2ZWQgcXVhbnRpdGllcwoJICAgICAgICAvLyBmb3IgdGhlIGZpbmFsIHBhcmFtZXRlciBzdGF0ZQoJICAgICAgICB0aGlzLmxvZ19wb3N0KCk7CgkgICAgICB9CgkgICAgICByZXR1cm4gdGhpcy5zdGF0ZTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBUYWtlcyBuX2l0ZXJhdGlvbnMgc3RlcHMgaW4gdGhlIHBhcmFtZXRlciBzcGFjZSBhbmQgcmV0dXJucyB0aGVtCgkgICAgICogYXMgYW4gb2JqZWN0IG9mIGFycmF5cyB3aXRoIG9uZSBhcnJheSBwZXIgcGFyYW1ldGVyLiBGb3IgZXhhbXBsZToKCSAgICAgKiB7bXU6IFsxLCAtMSwgMiwgMywgLi4uXSwgc2lnbWE6IFsxLCAyLCAyLCAxLCAuLi5dfS4KCSAgICAgKiBJZiB0aGluIGlzID4gMSB0aGVuIG5faXRlcmF0aW9ucyAvIHRoaW4gc2FtcGxlcyBhcmUgcmV0dXJuZWQuCgkgICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUuc2FtcGxlID0gZnVuY3Rpb24gKG5faXRlcmF0aW9ucykgewoJICAgICAgLy8gSW5pdGlhbGl6aW5nIGN1cnJfc2FtcGxlIHdoZXJlIHRoZSBzYW1wbGUgaXMgZ29pbmcgdG8gYmUgc2F2ZWQKCSAgICAgIC8vIGFzIGFuIG9iamVjdCBjb250YWluaW5nIG9uZSBhcnJheSBwZXIgcGFyYW1ldGVyIHRvIGJlIG1vbml0b3JlZC4KCSAgICAgIHZhciBpLCBqLCBtb25pdG9yZWRfcGFyYW1zOwoJICAgICAgaWYgKHRoaXMubW9uaXRvcmVkX3BhcmFtcyA9PT0gbnVsbCkgewoJICAgICAgICBtb25pdG9yZWRfcGFyYW1zID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZSk7CgkgICAgICB9IGVsc2UgewoJICAgICAgICBtb25pdG9yZWRfcGFyYW1zID0gdGhpcy5tb25pdG9yZWRfcGFyYW1zOwoJICAgICAgfQoJICAgICAgdmFyIGN1cnJfc2FtcGxlID0ge307CgkgICAgICBmb3IgKGogPSAwOyBqIDwgbW9uaXRvcmVkX3BhcmFtcy5sZW5ndGg7IGorKykgewoJICAgICAgICBjdXJyX3NhbXBsZVttb25pdG9yZWRfcGFyYW1zW2pdXSA9IFtdOwoJICAgICAgfQoJICAgICAgZm9yIChpID0gMDsgaSA8IG5faXRlcmF0aW9uczsgaSsrKSB7CgkgICAgICAgIGlmIChpICUgdGhpcy50aGlubmluZ19pbnRlcnZhbCA9PT0gMCkgewoJICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBtb25pdG9yZWRfcGFyYW1zLmxlbmd0aDsgaisrKSB7CgkgICAgICAgICAgICB2YXIgcGFyYW0gPSBtb25pdG9yZWRfcGFyYW1zW2pdOwoJICAgICAgICAgICAgY3Vycl9zYW1wbGVbcGFyYW1dLnB1c2goY2xvbmVfcGFyYW1fZHJhdyh0aGlzLnN0YXRlW3BhcmFtXSkpOwoJICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICB0aGlzLnN0ZXAoKTsKCSAgICAgIH0KCSAgICAgIHJldHVybiBjdXJyX3NhbXBsZTsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBUYWtlcyBuX2l0ZXJhdGlvbiBzdGVwcyBpbiBwYXJhbWV0ZXIgc3BhY2UgYnV0IHJldHVybnMgbm90aGluZy4KCSAgICAgKi8KCSAgICBTYW1wbGVyLnByb3RvdHlwZS5idXJuID0gZnVuY3Rpb24gKG5faXRlcmF0aW9ucykgewoJICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuX2l0ZXJhdGlvbnM7IGkrKykgewoJICAgICAgICB0aGlzLnN0ZXAoKTsKCSAgICAgIH0KCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBTZXRzIHdoYXQgcGFyYW1ldGVycyBzaG91bGQgYmUgbW9uaXRvcmVkIGFuZCByZXR1cm5lZCB3aGVuIGNhbGxpbmcKCSAgICAgKiBzYW1wbGUuCgkgICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUubW9uaXRvciA9IGZ1bmN0aW9uIChwYXJhbXNfdG9fbW9uaXRvcikgewoJICAgICAgdGhpcy5tb25pdG9yZWRfcGFyYW1zID0gcGFyYW1zX3RvX21vbml0b3I7CgkgICAgfTsKCgkgICAgLyoqCgkgICAgICogU2V0cyB0aGUgdGhpbm5pbmcuIEZvciBleGFtcGxlIHRoaW4gPT0gMTAgbWVhbnMgdGhhdCBldmVyeSAxMHRoIHBvc3RlcmlvcgoJICAgICAqIGRyYXcgd2lsbCBiZSBrZXB0LgoJICAgICAqLwoJICAgIFNhbXBsZXIucHJvdG90eXBlLnRoaW4gPSBmdW5jdGlvbiAodGhpbm5pbmdfaW50ZXJ2YWwpIHsKCSAgICAgIHRoaXMudGhpbm5pbmdfaW50ZXJ2YWwgPSB0aGlubmluZ19pbnRlcnZhbDsKCSAgICB9OwoKCSAgICAvKioKCSAgICAgKiBTZXRzIGFkYXB0YXRpb24gb24sIGlmIGFwcGxpY2FibGUsIGluIGFsbCBzdGVwcGVycy4KCSAgICAgKi8KCSAgICBTYW1wbGVyLnByb3RvdHlwZS5zdGFydF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0ZXBwZXJzLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgIHRoaXMuc3RlcHBlcnNbaV0uc3RhcnRfYWRhcHRhdGlvbigpOwoJICAgICAgfQoJICAgIH07CgoJICAgIC8qKgoJICAgICogU2V0cyBhZGFwdGF0aW9uIG9mZiwgaWYgYXBwbGljYWJsZSwgaW4gYWxsIHN0ZXBwZXJzLgoJICAgICovCgkgICAgU2FtcGxlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24gKCkgewoJICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0ZXBwZXJzLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgIHRoaXMuc3RlcHBlcnNbaV0uc3RvcF9hZGFwdGF0aW9uKCk7CgkgICAgICB9CgkgICAgfTsKCgkgICAgLyoqCgkgICAgKiBAY2xhc3MKCSAgICAqIEBpbXBsZW1lbnRzIHtTYW1wbGVyfQoJICAgICogVGhpcyBzYW1wbGVyIHVzZXMgdGhlIEFtd2dTdGVwcGVyIGFzIHRoZSBzdGVwcGVyIGZ1bmN0aW9uIHdoaWNoIGltcGxlbWVudHMgdGhlIAoJICAgICogQWRhcHRpdmUgTWV0cm9wb2xpcy1XaXRoaW4tR2liYnMgYWxnb3JpdGhtIGluICJFeGFtcGxlcyBvZiBBZGFwdGl2ZSBNQ01DIgoJICAgICogYnkgUm9iZXJ0cyBhbmQgUm9zZW50aGFsICgyMDA4KS4gQW4gYWRpdGlvbiBpcyB0aGF0IGl0IGhhbmRsZXMgaW50IHBhcmFtZXRlcnMKCSAgICAqIGJ5IG1ha2luZyBkaXNjcmV0ZSBOb3JtYWwgcHJvcG9zYWxzIGFuZCBiaW5hcnkgcGFyYW1ldGVycyBieSB0YWtpbmcgb24gYSBuZXcgCgkgICAgKiB2YWx1ZSBwcm9wb3J0aW9uYWwgdG8gdGhlIHBvc3RlcmlvciBvZiB0aGUgdHdvIHBvc3NpYmxlIHN0YXRlcyBvZiB0aGUKCSAgICAqIHBhcmFtZXRlci4gVGhpcyBzYW1wbGVyIGNhbiBiZSBlZmZpY2llbnQgd2hlbiB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMKCSAgICAqIGFyZSBub3QgdG9vIGhpZ2ggYW5kIHRoZSBjb3JyZWxhdGlvbnMgYmV0d2VlbiBwYXJhbWV0ZXJzIGFyZSBsb3cuCgkgICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggYSBvbmUgb3IgbW9yZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbnMKCSAgICAqIEBwYXJhbSBzdGF0ZSAtIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBzdGF0ZSBvZiBhbGwgcGFyYW1ldGVycy4KCSAgICAqIEBwYXJhbSBsb2dfcG9zdCAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBsb2cgZGVuc2l0eSB0aGF0IGRlcGVuZHMgb24gdGhlIHN0YXRlLiAKCSAgICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci4KCSAgICAqLwoJICAgIHZhciBBbXdnU2FtcGxlciA9IGZ1bmN0aW9uIChwYXJhbXMsIGxvZ19wb3N0LCBkYXRhLCBvcHRpb25zKSB7CgkgICAgICBTYW1wbGVyLmNhbGwodGhpcywgcGFyYW1zLCBsb2dfcG9zdCwgZGF0YSwgb3B0aW9ucyk7CgkgICAgfTsKCSAgICBBbXdnU2FtcGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNhbXBsZXIucHJvdG90eXBlKTsKCSAgICBBbXdnU2FtcGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBbXdnU2FtcGxlcjsKCSAgICBBbXdnU2FtcGxlci5wcm90b3R5cGUuY3JlYXRlX3N0ZXBwZXJfZW5zYW1ibGUgPSBmdW5jdGlvbiAocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIHsKCSAgICAgIHJldHVybiBbbmV3IEFtd2dTdGVwcGVyKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zKV07CgkgICAgfTsKCgkgICAgLy8gUmV0dXJuaW5nIHRoZSBmdW5jdGlvbnMgdGhhdCBzaG91bGQgYmUgcHVibGljbHkgZXhwb3NlZCBieSB0aGlzIG1vZHVsZQoJICAgIHJldHVybiB7CgkgICAgICBydW5pZjogcnVuaWYsCgkgICAgICBydW5pZl9kaXNjcmV0ZTogcnVuaWZfZGlzY3JldGUsCgkgICAgICBybm9ybTogcm5vcm0sCgkgICAgICBwYXJhbV9pbml0X2ZpeGVkOiBwYXJhbV9pbml0X2ZpeGVkLAoJICAgICAgY29tcGxldGVfcGFyYW1zOiBjb21wbGV0ZV9wYXJhbXMsCgkgICAgICBSZWFsTWV0cm9wb2xpc1N0ZXBwZXI6IFJlYWxNZXRyb3BvbGlzU3RlcHBlciwKCSAgICAgIEludE1ldHJvcG9saXNTdGVwcGVyOiBJbnRNZXRyb3BvbGlzU3RlcHBlciwKCSAgICAgIE11bHRpUmVhbENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyOiBNdWx0aVJlYWxDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlciwKCSAgICAgIE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXI6IE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIsCgkgICAgICBCaW5hcnlTdGVwcGVyOiBCaW5hcnlTdGVwcGVyLAoJICAgICAgQmluYXJ5Q29tcG9uZW50U3RlcHBlcjogQmluYXJ5Q29tcG9uZW50U3RlcHBlciwKCSAgICAgIEFtd2dTdGVwcGVyOiBBbXdnU3RlcHBlciwKCSAgICAgIEFtd2dTYW1wbGVyOiBBbXdnU2FtcGxlcgoJICAgIH07CgkgIH0pOwoJfSkobWNtYyk7Cgl2YXIgbWNtY0V4cG9ydHMgPSBtY21jLmV4cG9ydHM7CgoJZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHsKCSAgcmV0dXJuIGEgPT0gbnVsbCB8fCBiID09IG51bGwgPyBOYU4gOiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjsKCX0KCglmdW5jdGlvbiogbnVtYmVycyh2YWx1ZXMsIHZhbHVlb2YpIHsKCSAgewoJICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykgewoJICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkgewoJICAgICAgICB5aWVsZCB2YWx1ZTsKCSAgICAgIH0KCSAgICB9CgkgIH0KCX0KCglmdW5jdGlvbiBjb21wYXJlRGVmaW5lZChjb21wYXJlID0gYXNjZW5kaW5nKSB7CgkgIGlmIChjb21wYXJlID09PSBhc2NlbmRpbmcpIHJldHVybiBhc2NlbmRpbmdEZWZpbmVkOwoJICBpZiAodHlwZW9mIGNvbXBhcmUgIT09ICJmdW5jdGlvbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoImNvbXBhcmUgaXMgbm90IGEgZnVuY3Rpb24iKTsKCSAgcmV0dXJuIChhLCBiKSA9PiB7CgkgICAgY29uc3QgeCA9IGNvbXBhcmUoYSwgYik7CgkgICAgaWYgKHggfHwgeCA9PT0gMCkgcmV0dXJuIHg7CgkgICAgcmV0dXJuIChjb21wYXJlKGIsIGIpID09PSAwKSAtIChjb21wYXJlKGEsIGEpID09PSAwKTsKCSAgfTsKCX0KCWZ1bmN0aW9uIGFzY2VuZGluZ0RlZmluZWQoYSwgYikgewoJICByZXR1cm4gKGEgPT0gbnVsbCB8fCAhKGEgPj0gYSkpIC0gKGIgPT0gbnVsbCB8fCAhKGIgPj0gYikpIHx8IChhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMCk7Cgl9CgoJZnVuY3Rpb24gbWF4KHZhbHVlcywgdmFsdWVvZikgewoJICBsZXQgbWF4OwoJICB7CgkgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHsKCSAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIChtYXggPCB2YWx1ZSB8fCBtYXggPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpIHsKCSAgICAgICAgbWF4ID0gdmFsdWU7CgkgICAgICB9CgkgICAgfQoJICB9CgkgIHJldHVybiBtYXg7Cgl9CgoJZnVuY3Rpb24gbWluKHZhbHVlcywgdmFsdWVvZikgewoJICBsZXQgbWluOwoJICB7CgkgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHsKCSAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIChtaW4gPiB2YWx1ZSB8fCBtaW4gPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpIHsKCSAgICAgICAgbWluID0gdmFsdWU7CgkgICAgICB9CgkgICAgfQoJICB9CgkgIHJldHVybiBtaW47Cgl9CgoJLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL21vdXJuZXIvcXVpY2tzZWxlY3QKCS8vIElTQyBsaWNlbnNlLCBDb3B5cmlnaHQgMjAxOCBWbGFkaW1pciBBZ2Fmb25raW4uCglmdW5jdGlvbiBxdWlja3NlbGVjdChhcnJheSwgaywgbGVmdCA9IDAsIHJpZ2h0ID0gSW5maW5pdHksIGNvbXBhcmUpIHsKCSAgayA9IE1hdGguZmxvb3Ioayk7CgkgIGxlZnQgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGxlZnQpKTsKCSAgcmlnaHQgPSBNYXRoLmZsb29yKE1hdGgubWluKGFycmF5Lmxlbmd0aCAtIDEsIHJpZ2h0KSk7CgkgIGlmICghKGxlZnQgPD0gayAmJiBrIDw9IHJpZ2h0KSkgcmV0dXJuIGFycmF5OwoJICBjb21wYXJlID0gY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gYXNjZW5kaW5nRGVmaW5lZCA6IGNvbXBhcmVEZWZpbmVkKGNvbXBhcmUpOwoJICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7CgkgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkgewoJICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7CgkgICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxOwoJICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pOwoJICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7CgkgICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTsKCSAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpOwoJICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTsKCSAgICAgIHF1aWNrc2VsZWN0KGFycmF5LCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgY29tcGFyZSk7CgkgICAgfQoJICAgIGNvbnN0IHQgPSBhcnJheVtrXTsKCSAgICBsZXQgaSA9IGxlZnQ7CgkgICAgbGV0IGogPSByaWdodDsKCSAgICBzd2FwKGFycmF5LCBsZWZ0LCBrKTsKCSAgICBpZiAoY29tcGFyZShhcnJheVtyaWdodF0sIHQpID4gMCkgc3dhcChhcnJheSwgbGVmdCwgcmlnaHQpOwoJICAgIHdoaWxlIChpIDwgaikgewoJICAgICAgc3dhcChhcnJheSwgaSwgaiksICsraSwgLS1qOwoJICAgICAgd2hpbGUgKGNvbXBhcmUoYXJyYXlbaV0sIHQpIDwgMCkgKytpOwoJICAgICAgd2hpbGUgKGNvbXBhcmUoYXJyYXlbal0sIHQpID4gMCkgLS1qOwoJICAgIH0KCSAgICBpZiAoY29tcGFyZShhcnJheVtsZWZ0XSwgdCkgPT09IDApIHN3YXAoYXJyYXksIGxlZnQsIGopO2Vsc2UgKytqLCBzd2FwKGFycmF5LCBqLCByaWdodCk7CgkgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxOwoJICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7CgkgIH0KCSAgcmV0dXJuIGFycmF5OwoJfQoJZnVuY3Rpb24gc3dhcChhcnJheSwgaSwgaikgewoJICBjb25zdCB0ID0gYXJyYXlbaV07CgkgIGFycmF5W2ldID0gYXJyYXlbal07CgkgIGFycmF5W2pdID0gdDsKCX0KCglmdW5jdGlvbiBxdWFudGlsZSh2YWx1ZXMsIHAsIHZhbHVlb2YpIHsKCSAgdmFsdWVzID0gRmxvYXQ2NEFycmF5LmZyb20obnVtYmVycyh2YWx1ZXMpKTsKCSAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpIHx8IGlzTmFOKHAgPSArcCkpIHJldHVybjsKCSAgaWYgKHAgPD0gMCB8fCBuIDwgMikgcmV0dXJuIG1pbih2YWx1ZXMpOwoJICBpZiAocCA+PSAxKSByZXR1cm4gbWF4KHZhbHVlcyk7CgkgIHZhciBuLAoJICAgIGkgPSAobiAtIDEpICogcCwKCSAgICBpMCA9IE1hdGguZmxvb3IoaSksCgkgICAgdmFsdWUwID0gbWF4KHF1aWNrc2VsZWN0KHZhbHVlcywgaTApLnN1YmFycmF5KDAsIGkwICsgMSkpLAoJICAgIHZhbHVlMSA9IG1pbih2YWx1ZXMuc3ViYXJyYXkoaTAgKyAxKSk7CgkgIHJldHVybiB2YWx1ZTAgKyAodmFsdWUxIC0gdmFsdWUwKSAqIChpIC0gaTApOwoJfQoKCWZ1bmN0aW9uIG1lZGlhbih2YWx1ZXMsIHZhbHVlb2YpIHsKCSAgcmV0dXJuIHF1YW50aWxlKHZhbHVlcywgMC41KTsKCX0KCglmdW5jdGlvbiBUcmFuc2Zvcm0oaywgeCwgeSkgewoJICB0aGlzLmsgPSBrOwoJICB0aGlzLnggPSB4OwoJICB0aGlzLnkgPSB5OwoJfQoJVHJhbnNmb3JtLnByb3RvdHlwZSA9IHsKCSAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSwKCSAgc2NhbGU6IGZ1bmN0aW9uIChrKSB7CgkgICAgcmV0dXJuIGsgPT09IDEgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmsgKiBrLCB0aGlzLngsIHRoaXMueSk7CgkgIH0sCgkgIHRyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHsKCSAgICByZXR1cm4geCA9PT0gMCAmIHkgPT09IDAgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmssIHRoaXMueCArIHRoaXMuayAqIHgsIHRoaXMueSArIHRoaXMuayAqIHkpOwoJICB9LAoJICBhcHBseTogZnVuY3Rpb24gKHBvaW50KSB7CgkgICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldOwoJICB9LAoJICBhcHBseVg6IGZ1bmN0aW9uICh4KSB7CgkgICAgcmV0dXJuIHggKiB0aGlzLmsgKyB0aGlzLng7CgkgIH0sCgkgIGFwcGx5WTogZnVuY3Rpb24gKHkpIHsKCSAgICByZXR1cm4geSAqIHRoaXMuayArIHRoaXMueTsKCSAgfSwKCSAgaW52ZXJ0OiBmdW5jdGlvbiAobG9jYXRpb24pIHsKCSAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdOwoJICB9LAoJICBpbnZlcnRYOiBmdW5jdGlvbiAoeCkgewoJICAgIHJldHVybiAoeCAtIHRoaXMueCkgLyB0aGlzLms7CgkgIH0sCgkgIGludmVydFk6IGZ1bmN0aW9uICh5KSB7CgkgICAgcmV0dXJuICh5IC0gdGhpcy55KSAvIHRoaXMuazsKCSAgfSwKCSAgcmVzY2FsZVg6IGZ1bmN0aW9uICh4KSB7CgkgICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7CgkgIH0sCgkgIHJlc2NhbGVZOiBmdW5jdGlvbiAoeSkgewoJICAgIHJldHVybiB5LmNvcHkoKS5kb21haW4oeS5yYW5nZSgpLm1hcCh0aGlzLmludmVydFksIHRoaXMpLm1hcCh5LmludmVydCwgeSkpOwoJICB9LAoJICB0b1N0cmluZzogZnVuY3Rpb24gKCkgewoJICAgIHJldHVybiAidHJhbnNsYXRlKCIgKyB0aGlzLnggKyAiLCIgKyB0aGlzLnkgKyAiKSBzY2FsZSgiICsgdGhpcy5rICsgIikiOwoJICB9Cgl9OwoJVHJhbnNmb3JtLnByb3RvdHlwZTsKCgkvKgoJICBIVERNYXRoIFN0YXRpYyBDbGFzcyAtIE5vdCBpbnRlbmRlZCBmb3IgaW5zdGFudGlhdGlvbiEKCgkgIFZhcmlhYmxlczoKCSAgICBBID0gYW1vdW50CgkgICAgRCA9IGRlbGF5CgkgICAgViA9IHN1YmplY3RpdmUgdmFsdWUKCgkgICAgayA9IGRpc2NvdW50IGZhY3RvcgoKCSAgRXF1YXRpb25zOgoJICAgIFYgPSBBIC8gKDEgKyBrRCkKCSovCgljbGFzcyBIVERNYXRoIHsKCSAgc3RhdGljIGFkazJ2KGEsIGQsIGspIHsKCSAgICByZXR1cm4gYSAvICgxICsgayAqIGQpOwoJICB9CgkgIHN0YXRpYyBhZHYyayhhLCBkLCB2KSB7CgkgICAgcmV0dXJuIChhIC0gdikgLyAodiAqIGQpOwoJICB9Cgl9CgoJLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzCgoJLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogWyJvZmYiLCAic2VsZiJdICovCgoJc2VsZi5vbm1lc3NhZ2UgPSBldmVudCA9PiB7CgkgIGNvbnN0IHBhcmFtcyA9IHsKCSAgICBrOiB7CgkgICAgICB0eXBlOiAncmVhbCcsCgkgICAgICBsb3dlcjogMCwKCSAgICAgIHVwcGVyOiAxMDAKCSAgICB9LAoJICAgIGx1Y2U6IHsKCSAgICAgIHR5cGU6ICdyZWFsJywKCSAgICAgIGxvd2VyOiAwLAoJICAgICAgdXBwZXI6IDEwMAoJICAgIH0KCSAgfTsKCSAgY29uc3QgbG9nUG9zdCA9IChzdGF0ZSwgZGF0YSkgPT4gewoJICAgIGxldCBscCA9IDA7CgoJICAgIC8vIFByaW9ycwoJICAgIGNvbnN0IGtNZWFuID0gMjsKCSAgICBjb25zdCBrU2hhcGUgPSAzOwoJICAgIGxwICs9IGRpc3RyaWJ1dGlvbnNFeHBvcnRzLmdhbW1hKHN0YXRlLmssIGtTaGFwZSwga1NoYXBlIC8ga01lYW4pOwoJICAgIC8vIGxwICs9IEJheWVzRGlzdHJpYnV0aW9ucy51bmlmKHN0YXRlLmssIDAsIDEwMCk7CgoJICAgIGNvbnN0IGx1Y2VNZWFuID0gMjsKCSAgICBjb25zdCBsdWNlU2hhcGUgPSAzOwoJICAgIGxwICs9IGRpc3RyaWJ1dGlvbnNFeHBvcnRzLmdhbW1hKHN0YXRlLmx1Y2UsIGx1Y2VTaGFwZSwgbHVjZVNoYXBlIC8gbHVjZU1lYW4pOwoJICAgIC8vIGxwICs9IEJheWVzRGlzdHJpYnV0aW9ucy51bmlmKHN0YXRlLmx1Y2UsIDAsIDEwMCk7CgoJICAgIC8vIExpa2VsaWhvb2QKCSAgICBkYXRhLmZvckVhY2goY2hvaWNlID0+IHsKCSAgICAgIC8vIFZhbHVlcwoJICAgICAgY29uc3QgdnMgPSBIVERNYXRoLmFkazJ2KGNob2ljZS5hcywgY2hvaWNlLmRzLCBzdGF0ZS5rKTsKCSAgICAgIGNvbnN0IHZsID0gSFRETWF0aC5hZGsydihjaG9pY2UuYWwsIGNob2ljZS5kbCwgc3RhdGUuayk7CgoJICAgICAgLy8gQ2hvaWNlIG9mIHNvb25lciBvciBsYXRlciBpcyBzYW1wbGVkIGZyb20gYSBCZXJub3VsbGkgZGlzdHJpYnV0aW9uCgkgICAgICAvLyBMdWNlIGNob2ljZSBydWxlIGlzIHVzZWQgdG8gY29tcHV0ZSBwcm9iYWJpbGl0eSBvZiB3YWl0aW5nISAoMCA9IHNvb25lciwgMSA9IGxhdGVyKQoJICAgICAgY29uc3QgYmludmFsID0gMSAvICgxICsgTWF0aC5leHAoc3RhdGUubHVjZSAqICh2cyAtIHZsKSkpOwoKCSAgICAgIC8vIEFjdHVhbCByZXNwb25zZQoJICAgICAgY29uc3QgcmVzcG9uc2UgPSBjaG9pY2UucmVzcG9uc2UgPT09ICdmaXJzdCcgPyAwIDogMTsKCSAgICAgIGxwICs9IGRpc3RyaWJ1dGlvbnNFeHBvcnRzLmJlcm4ocmVzcG9uc2UsIGJpbnZhbCk7CgkgICAgfSk7CgkgICAgcmV0dXJuIGxwOwoJICB9OwoKCSAgLy8gSW5pdGlhbGl6aW5nIHRoZSBzYW1wbGVyCgkgIGNvbnN0IHNhbXBsZXIgPSBuZXcgbWNtY0V4cG9ydHMuQW13Z1NhbXBsZXIocGFyYW1zLCBsb2dQb3N0LCBldmVudC5kYXRhKTsKCSAgLy8gQnVybmluZyBzb21lIHNhbXBsZXMgdG8gdGhlIE1DTUMgZ29kcyBhbmQgc2FtcGxpbmcgNTAwMCBkcmF3cwoJICBzYW1wbGVyLmJ1cm4oMTAwMCk7CgkgIGNvbnN0IHNhbXBsZXMgPSBzYW1wbGVyLnNhbXBsZSg1MDAwKTsKCgkgIC8vIEV4dHJhY3Qgc3VtbWFyeSBzdGF0cwoJICBjb25zdCByZXN1bHRzID0gewoJICAgIGs6IG1lZGlhbihzYW1wbGVzLmspLAoJICAgIGx1Y2U6IG1lZGlhbihzYW1wbGVzLmx1Y2UpCgkgIH07CgkgIHNlbGYucG9zdE1lc3NhZ2UoewoJICAgIHJlc3VsdHM6IHJlc3VsdHMsCgkgICAgc2FtcGxlczogc2FtcGxlcwoJICB9KTsKCX07Cgp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1odGQtZml0LXdvcmtlci5qcy5tYXAKCg==', 'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRkLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9iYXllcy5qcy9kaXN0cmlidXRpb25zLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2JheWVzLmpzL21jbWMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FzY2VuZGluZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zb3J0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tYXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcXVpY2tzZWxlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3F1YW50aWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWRpYW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvdHJhbnNmb3JtLmpzIiwiLi4vZGlzY291bnRhYmxlLW1hdGgvc3JjL2h0ZC1tYXRoLmpzIiwiLi4vZGlzY291bnRhYmxlLW1hdGgvc3JjL2luZGV4LmpzIiwic3JjL2NvbXBvbmVudHMvaHRkLWZpdC13b3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLy8gQSBudW1iZXIgb2YgbG9nIHByb2JhYmlsaXR5IGRlbnNpdHkgZnVuY3Rpb25zIChQREYpLiBOYW1pbmcgYW5kIHBhcmFtZXRlcml6YXRpb25cbi8vIHNob3VsZCBtYXRjaCBSJ3MsIGV4Y2VwdCBmb3IgdGhhdCBhbGwgZnVuY3Rpb25zIHJlc2lkZSBpbiBhbiBsZCBvYmplY3QgKFxuLy8gYXMgaW4gXCJsb2cgZGVuc2l0eVwiKSwgc28gdG8gZ2V0IGEgbm9ybWFsIGxvZyBkZW5zaXR5IHlvdSB3b3VsZCB3cml0ZVxuLy8gbGQubm9ybSguLi4pLlxuLy8gTW9zdCBvZiB0aGUgY29kZSBiZWxvdyBpcyBkaXJlY3RseSB0YWtlbiBmcm9tIHRoZSBncmVhdCBKc3RhdCBwcm9qZWN0XG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL2pzdGF0Lykgd2hpY2ggaW5jbHVkZXMgUERGIGZvciBtYW55IGNvbW1vbiBwcm9iYWJpbGl0eVxuLy8gZGlzdHJpYnV0aW9ucy4gV2hhdCBJIGhhdmUgZG9uZSBpcyBvbmx5IHRvIGNvbnZlcnQgdGhlc2UgdG8gbG9nIFBERnMuXG5cbi8qXG5PcmlnaW5hbCB3b3JrIENvcHlyaWdodCAoYykgMjAxMyBqU3RhdFxuTW9kaWZpZWQgd29yayBDb3B5cmlnaHQgKGMpIDIwMTUgUmFzbXVzIELDpcOldGggXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxuXG4vLyBUaGlzIGJvaWxlciBwbGF0ZSBjb2RlIGhlcmUgaXMgdGFrZW4gZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL3JldHVybkV4cG9ydHMuanNcbi8vIEl0IHNob3VsZCBtYWtlIHNodXJlIHRoYXQgbW9kdWxlIGNhbiBiZSBpbXBvcnRlZCBib3RoIGluIHRoZSBicm93c2VyLFxuLy8gTm9kZSwgYW5kIGJ5IHVzaW5nIHRoZSBBc3luY2hyb25vdXMgTW9kdWxlIERlZmluaXRpb24gc3RhbmRhcmQuXG4vLyBJZiB0aGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gdGhlIGJyb3dzZXIgaXQgd2lsbCBjcmVhdGVkIHRoZSBnbG9iYWxcbi8vIG9iamVjdCBsZCAuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LmxkID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAvLyBPYmplY3QgdG8gaG9sZCB0aGUgZnVuY3Rpb25zIHRvIGJlIGV4cG9ydGVkLlxuICB2YXIgbGQgID0ge307XG4gIFxuICAvLy8vLy8vLy8vIEhlbHBlciBmdW5jdGlvbnMgLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgdmFyIGxnYW1tYSA9IGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGNvZiA9IFtcbiAgICAgIDc2LjE4MDA5MTcyOTQ3MTQ2LCAtODYuNTA1MzIwMzI5NDE2NzcsIDI0LjAxNDA5ODI0MDgzMDkxLFxuICAgICAgLTEuMjMxNzM5NTcyNDUwMTU1LCAwLjEyMDg2NTA5NzM4NjYxNzllLTIsIC0wLjUzOTUyMzkzODQ5NTNlLTVcbiAgICBdO1xuICAgIHZhciBzZXIgPSAxLjAwMDAwMDAwMDE5MDAxNTtcbiAgICB2YXIgeHgsIHksIHRtcDtcbiAgICB0bXAgPSAoeSA9IHh4ID0geCkgKyA1LjU7XG4gICAgdG1wIC09ICh4eCArIDAuNSkgKiBsb2codG1wKTtcbiAgICBmb3IgKDsgaiA8IDY7IGorKylcbiAgICAgIHNlciArPSBjb2Zbal0gLyArK3k7XG4gICAgcmV0dXJuIGxvZygyLjUwNjYyODI3NDYzMTAwMDUgKiBzZXIgLyB4eCkgLSB0bXA7XG4gIH07XG4gIGxkLmxnYW1tYSA9IGxnYW1tYTtcbiAgXG4gIHZhciBsZmFjdG9yaWFsID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBuIDwgMCA/IE5hTiA6IGxnYW1tYShuICsgMSk7XG4gIH07XG4gIGxkLmxmYWN0b3JpYWwgPSBsZmFjdG9yaWFsO1xuICBcbiAgdmFyIGxjaG9vc2UgPSBmdW5jdGlvbihuLCBrKXtcbiAgICByZXR1cm4gbGZhY3RvcmlhbChuKSAtIGxmYWN0b3JpYWwoaykgLSBsZmFjdG9yaWFsKG4gLSBrKTtcbiAgfTtcbiAgbGQubGNob29zZSA9IGxjaG9vc2U7XG4gIFxuICB2YXIgbGJldGEgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGxnYW1tYShhKSArIGxnYW1tYShiKSAtIGxnYW1tYShhICsgYik7XG4gIH07XG4gIGxkLmxiZXRhID0gbGJldGE7XG4gIFxuICB2YXIgbG9nICA9IE1hdGgubG9nO1xuICB2YXIgZXhwICA9IE1hdGguZXhwO1xuICB2YXIgYWJzICA9IE1hdGguYWJzO1xuICB2YXIgcG93ICA9IE1hdGgucG93O1xuICB2YXIgc3FydCA9IE1hdGguc3FydDtcbiAgdmFyIHBpICAgPSBNYXRoLlBJO1xuICBcbiAgLy8vLy8vLy8vLyBDb250aW5vdXMgZGlzdHJpYnV0aW9ucyAvLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgbGQuYmV0YSA9IGZ1bmN0aW9uKHgsIHNoYXBlMSwgc2hhcGUyKSB7XG4gICAgaWYgKHggPiAxIHx8IHggPCAwKSB7XG4gICAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfVxuICAgIGlmKHNoYXBlMSA9PT0gMSAmJiBzaGFwZTIgPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHNoYXBlMSAtIDEpICogbG9nKHgpICsgKHNoYXBlMiAtIDEpICogbG9nKDEgLSB4KSAtIGxiZXRhKHNoYXBlMSwgc2hhcGUyKTsgIFxuICAgIH1cbiAgfTtcbiAgXG4gIGxkLmNhdWNoeSA9IGZ1bmN0aW9uKHgsIGxvY2F0aW9uLCBzY2FsZSkge1xuICAgIHJldHVybiBsb2coc2NhbGUpIC0gbG9nKHBvdyh4IC0gbG9jYXRpb24sIDIpICsgcG93KHNjYWxlLCAyKSkgIC0gbG9nKHBpKTtcbiAgfTtcbiAgXG4gIGxkLm5vcm0gPSBmdW5jdGlvbih4LCBtZWFuLCBzZCkge1xuICAgICAgcmV0dXJuIC0wLjUgKiBsb2coMiAqIHBpKSAtbG9nKHNkKSAtIHBvdyh4IC0gbWVhbiwgMikgLyAoMiAqIHNkICogc2QpO1xuICB9O1xuXG4gIC8vIEEgYml2YXJpYXRlIE5vcm1hbCBkaXN0cmlidXRpb24gcGFyYW1ldGVyaXplZCBieSBhcnJheXMgb2YgdHdvIG1lYW5zIGFuZCBTRHMsIGFuZCBcbiAgLy8gdGhlIGNvcnJlbGF0aW9uLlxuICBsZC5iaXZhcm5vcm0gPSBmdW5jdGlvbih4LCBtZWFuLCBzZCwgY29ycikge1xuICAgIHZhciB6ID0gcG93KHhbMF0gLSBtZWFuWzBdLCAyKSAvIHBvdyhzZFswXSwgMikgK1xuICAgICAgICAgICAgcG93KHhbMV0gLSBtZWFuWzFdLCAyKSAvIHBvdyhzZFsxXSwgMikgLSBcbiAgICAgICAgICAgICgyICogY29yciAqICh4WzBdIC0gbWVhblswXSkgKiAoeFsxXSAtIG1lYW5bMV0pKSAvIChzZFswXSAqIHNkWzFdKTtcbiAgICB2YXIgbm9ybWFsaXppbmdfZmFjdG9yID0gLSggbG9nKDIpICsgbG9nKHBpKSArIGxvZyhzZFswXSkgKyBsb2coc2RbMV0pICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSAqIGxvZygxIC0gcG93KGNvcnIsIDIpKSApOyBcbiAgICB2YXIgYml2YXJfbG9nX2RlbnMgPSBub3JtYWxpemluZ19mYWN0b3IgLSB6IC8gKDIgKiAoMSAtIHBvdyhjb3JyLCAyKSApICk7IFxuICAgIHJldHVybiBiaXZhcl9sb2dfZGVucztcbiAgfTtcbiAgXG5cbiAgbGQubGFwbGFjZSA9IGZ1bmN0aW9uKHgsIGxvY2F0aW9uLCBzY2FsZSkge1xuICAgIHJldHVybiAoLWFicyh4IC0gbG9jYXRpb24pL3NjYWxlKSAtIGxvZygyICogc2NhbGUpO1xuICB9O1xuICBcbiAgbGQuZGV4cCA9IGxkLmxhcGxhY2U7XG4gIFxuICBsZC5nYW1tYSA9IGZ1bmN0aW9uKHgsIHNoYXBlLCByYXRlKSB7XG4gICAgdmFyIHNjYWxlID0gMSAvIHJhdGU7XG4gICAgaWYgKHggPCAwKSB7XG4gICAgICByZXR1cm4gLUluZmluaXR5O1xuICAgIH1cbiAgICBpZigoeCA9PT0gMCAmJiBzaGFwZSA9PT0gMSkgKSB7XG4gICAgICByZXR1cm4gLWxvZyhzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoc2hhcGUgLSAxKSAqIGxvZyh4KSAtIHggLyBzY2FsZSAtIGxnYW1tYShzaGFwZSkgLSBzaGFwZSAqIGxvZyhzY2FsZSk7XG4gICAgfVxuICB9O1xuICBcbiAgbGQuaW52Z2FtbWEgPSBmdW5jdGlvbih4LCBzaGFwZSwgc2NhbGUpIHtcbiAgICAgIGlmICh4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtKHNoYXBlICsgMSkgKiBsb2coeCkgLSBzY2FsZSAvIHggLSBsZ2FtbWEoc2hhcGUpICsgc2hhcGUgKiBsb2coc2NhbGUpO1xuICAgIH07XG4gIFxuICBsZC5sbm9ybSA9ICBmdW5jdGlvbih4LCBtZWFubG9nLCBzZGxvZykge1xuICAgIGlmICh4IDw9IDApIHtcbiAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfVxuICAgIHJldHVybiAtbG9nKHgpIC0gMC41ICogbG9nKDIgKiBwaSkgLSBsb2coc2Rsb2cpIC0gXG4gICAgICAgICAgICBwb3cobG9nKHgpIC0gbWVhbmxvZywgMikgLyAoMiAqIHNkbG9nICogc2Rsb2cpO1xuICB9O1xuICBcbiAgbGQucGFyZXRvID0gZnVuY3Rpb24oeCwgc2NhbGUsIHNoYXBlKSB7XG4gICAgaWYgKHggPCBzY2FsZSkge1xuICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB9XG4gICAgcmV0dXJuIGxvZyhzaGFwZSkgKyBzaGFwZSAqIGxvZyhzY2FsZSkgLSAoc2hhcGUgKyAxKSAqIGxvZyh4KTtcbiAgfTtcbiAgXG4gIGxkLnQgID0gIGZ1bmN0aW9uKHgsIGxvY2F0aW9uLCBzY2FsZSwgZGYpIHtcbiAgICBkZiA9IGRmID4gMWUxMDAgPyAxZTEwMCA6IGRmO1xuICAgIHJldHVybiBsZ2FtbWEoKGRmICsgMSkvMikgLSBsZ2FtbWEoZGYvMikgLSBsb2coc3FydChwaSAqIGRmKSAqIHNjYWxlKSArXG4gICAgICAgICAgIGxvZyhwb3coMSArICgxL2RmKSAqIHBvdygoeCAtIGxvY2F0aW9uKS9zY2FsZSwgMiksIC0oZGYgKyAxKS8yKSk7XG4gIH07XG4gIFxuICAvLyBUaGlzIGlzIGEgZGlyZWN0IGphdmFzY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIFIgY29kZSB1c2VkIHRvIGV2YWx1YXRlXG4gIC8vIHRoZSBsb2cgZGVuc2l0eSBvZiBhIHdlaWJ1bGwgZGlzdHJpYnV0aW9uOiBcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3djaC9yLXNvdXJjZS9ibG9iL2IxNTZlM2E3MTE5NjdmNTgxMzFlMjNjMWIxZGMxZWE5MGUyZjBjNDMvc3JjL25tYXRoL2R3ZWlidWxsLmNcbiAgbGQud2VpYnVsbCA9IGZ1bmN0aW9uKHgsIHNoYXBlLCBzY2FsZSkge1xuICAgIGlmICh4IDwgMCkgcmV0dXJuIC1JbmZpbml0eTtcbiAgICBpZih4ID09PSAwICYmIHNoYXBlIDwgMSkgcmV0dXJuIEluZmluaXR5O1xuICAgIHZhciB0bXAxID0gcG93KHggLyBzY2FsZSwgc2hhcGUgLSAxKTtcbiAgICB2YXIgdG1wMiA9IHRtcDEgKiAoeCAvIHNjYWxlKTtcblx0ICByZXR1cm4gLXRtcDIgKyBsb2coc2hhcGUgKiB0bXAxIC8gc2NhbGUpO1xuICB9O1xuICBcbiAgLy8gVGhpcyBpcyBhIGRpcmVjdCBqYXZhc2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSBSIGNvZGUgdXNlZCB0byBldmFsdWF0ZVxuICAvLyB0aGUgbG9nIGRlbnNpdHkgb2YgYSBsb2dpc3RpYyBkaXN0cmlidXRpb246IFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2NoL3Itc291cmNlL2Jsb2IvYjE1NmUzYTcxMTk2N2Y1ODEzMWUyM2MxYjFkYzFlYTkwZTJmMGM0My9zcmMvbm1hdGgvZGxvZ2lzLmNcbiAgbGQubG9naXMgPSBmdW5jdGlvbih4LCBsb2NhdGlvbiwgc2NhbGUpIHtcbiAgICB4ID0gYWJzKCh4IC0gbG9jYXRpb24pIC8gc2NhbGUpO1xuICAgIHZhciBlID0gZXhwKC14KTtcbiAgICB2YXIgZiA9IDEuMCArIGU7XG4gICAgcmV0dXJuIC0oeCArIGxvZyhzY2FsZSAqIGYgKiBmKSk7ICAgIFxuICB9O1xuXG4gIGxkLmRpcmljaGxldCA9IGZ1bmN0aW9uKHgsIGFscGhhKSB7XG4gICAgdmFyIHN1bV9hbHBoYSA9IDA7XG4gICAgdmFyIHN1bV9sZ2FtbWFfYWxwaGEgPSAwO1xuICAgIHZhciBzdW1fYWxwaGFfc3ViXzFfbG9nX3ggPSAwO1xuICAgIHZhciBuID0gYWxwaGEubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN1bV9hbHBoYSArPSBhbHBoYVtpXTtcbiAgICAgIHN1bV9sZ2FtbWFfYWxwaGEgKz0gbGdhbW1hKGFscGhhW2ldKTtcbiAgICAgIHN1bV9hbHBoYV9zdWJfMV9sb2dfeCArPSAoYWxwaGFbaV0gLSAxKSAqIGxvZyh4W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGxnYW1tYShzdW1fYWxwaGEpIC0gc3VtX2xnYW1tYV9hbHBoYSArIHN1bV9hbHBoYV9zdWJfMV9sb2dfeDtcbiAgfTtcbiAgIFxuICAgIFxuICBsZC5leHAgPSBmdW5jdGlvbih4LCByYXRlKSB7XG4gICAgICByZXR1cm4geCA8IDAgPyAtSW5maW5pdHkgOiBsb2cocmF0ZSkgLXJhdGUgKiB4O1xuICB9O1xuICBcbiAgbGQudW5pZiA9IGZ1bmN0aW9uKHgsIG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gKHggPCBtaW4gfHwgeCA+IG1heCkgPyAtSW5maW5pdHkgOiBsb2coMSAvIChtYXggLSBtaW4pKTtcbiAgfTtcbiAgXG4gIC8vLy8vLy8vLy8gRGlzY3JldGUgZGlzdHJpYnV0aW9ucyAvLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFxuICBsZC5iZXJuID0gZnVuY3Rpb24oeCwgcHJvYikge1xuICAgICAgcmV0dXJuICEoeCA9PT0gMCB8fCB4ID09PSAxKSA/IC1JbmZpbml0eSA6IGxvZyh4ICogcHJvYiArICgxIC0geCkgKiAoMSAtIHByb2IpKTtcbiAgfTtcbiAgXG4gIGxkLmNhdCA9IGZ1bmN0aW9uKHgsIHByb2JzKSB7XG4gICAgaWYoeCA8IDEgfHwgeCA+IHByb2JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvZyggcHJvYnNbeCAtIDFdICk7XG4gICAgfVxuICB9O1xuICBcbiAgbGQuYmlub20gPSBmdW5jdGlvbih4LCBzaXplLCBwcm9iKSB7XG4gICAgaWYoeCA+IHNpemUgfHwgeCA8IDApIHtcbiAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfVxuICAgIGlmKHByb2IgPT09IDAgfHwgcHJvYiA9PT0gMSkge1xuICAgICAgcmV0dXJuIChzaXplICogcHJvYikgPT09IHggPyAwIDogLUluZmluaXR5O1xuICAgIH1cbiAgICByZXR1cm4gbGNob29zZShzaXplLCB4KSArIHggKiBsb2cocHJvYikgKyAoc2l6ZSAtIHgpICogbG9nKDEgLSBwcm9iKTtcbiAgfTtcbiAgXG4gIHZhciBtdWx0aW5vbSA9IGZ1bmN0aW9uKHgsIHByb2JzKSB7XG4gICAgdmFyIG4gPSB4Lmxlbmd0aDtcbiAgICB2YXIgc2l6ZSA9IDA7XG4gICAgdmFyIHRtcF90ZXJtID0gMDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZihwcm9ic1tpXSA9PT0gMCkge1xuICAgICAgICBpZih4W2ldICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIC1JbmZpbml0eTsgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaXplICs9IHhbaV07XG4gICAgICAgIHRtcF90ZXJtICs9IHhbaV0gKiBsb2cocHJvYnNbaV0pIC0gbGdhbW1hKHhbaV0gKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxnYW1tYShzaXplICsgMSkgKyB0bXBfdGVybSA7XG4gIH07XG4gIFxuICBsZC5uYmlub20gPSBmdW5jdGlvbih4LCBzaXplLCBwcm9iKSB7XG4gICAgaWYoeCA8IDApIHtcbiAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfVxuICAgIHJldHVybiBsY2hvb3NlKHggKyBzaXplIC0gMSwgc2l6ZSAtIDEpICsgeCAqIGxvZygxIC0gcHJvYikgKyBzaXplICogbG9nKHByb2IpO1xuICB9O1xuICBcbiAgbGQuaHlwZXIgPSBmdW5jdGlvbih4LCBtLCBuLCBrKSB7XG4gICAgaWYoeCA8IDAgfHwgeCA+IGspIHtcbiAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGNob29zZShtLCB4KSArIGxjaG9vc2Uobiwgay14KSAtIGxjaG9vc2UobStuLCBrKTtcbiAgICB9XG4gIH07XG4gIFxuICBsZC5wb2lzID0gZnVuY3Rpb24oeCwgbGFtYmRhKSB7XG4gICAgICByZXR1cm4geCA8IDAgPyAtSW5maW5pdHkgOiBsb2cobGFtYmRhKSAqIHggLSBsYW1iZGEgLSBsZmFjdG9yaWFsKHgpO1xuICB9O1xuICBcbiAgcmV0dXJuIGxkO1xufSkpOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBUaGlzIGJvaWxlciBwbGF0ZSBjb2RlIGhlcmUgaXMgdGFrZW4gZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL3JldHVybkV4cG9ydHMuanNcbi8vIEl0IHNob3VsZCBtYWtlIHNodXJlIHRoYXQgbW9kdWxlIGNhbiBiZSBpbXBvcnRlZCBib3RoIGluIHRoZSBicm93c2VyLFxuLy8gTm9kZSwgYW5kIGJ5IHVzaW5nIHRoZSBBc3luY2hyb25vdXMgTW9kdWxlIERlZmluaXRpb24gc3RhbmRhcmQuXG4vLyBJZiB0aGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gdGhlIGJyb3dzZXIgaXQgd2lsbCBjcmVhdGVkIHRoZSBnbG9iYWxcbi8vIG9iamVjdCBtY21jIC5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QubWNtYyA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigpe1xuXG4vLy8gVGhlIGFjdHVhbCBtb2R1bGUgY29kZSBzdGFydHMgaGVyZSAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgXG4gIFxuICAvLy8vLy8vLy8vIEhlbHBlciBGdW5jdGlvbnMgLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgLyoqIFJldHVybnMgYSByYW5kb20gcmVhbCBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAqL1xuICB2YXIgcnVuaWYgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH07XG4gIFxuICAvKiogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKi9cbiAgdmFyIHJ1bmlmX2Rpc2NyZXRlID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfTtcbiAgXG4gIC8qKiBSZXR1cm5zIGEgcmFuZG9tIHJlYWwgbnVtYmVyIGZyb20gYSBub3JtYWwgZGlzdHJpYmJ1dGlvbiBkZWZpbmVkXG4gICAqICBieSBtZWFuIGFuZCBzZC4gXG4gICAqICBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pzdGF0L2pzdGF0L2Jsb2IvbWFzdGVyL3NyYy9zcGVjaWFsLmpzICovXG4gIHZhciBybm9ybSA9IGZ1bmN0aW9uKG1lYW4sIHNkKSB7XG4gICAgdmFyIHUsIHYsIHgsIHksIHE7XG4gICAgZG8ge1xuICAgICAgdSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICB2ID0gMS43MTU2ICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgeCA9IHUgLSAwLjQ0OTg3MTtcbiAgICAgIHkgPSBNYXRoLmFicyh2KSArIDAuMzg2NTk1O1xuICAgICAgcSA9IHggKiB4ICsgeSAqICgwLjE5NjAwICogeSAtIDAuMjU0NzIgKiB4KTtcbiAgICB9IHdoaWxlIChxID4gMC4yNzU5NyAmJiAocSA+IDAuMjc4NDYgfHwgdiAqIHYgPiAtNCAqIE1hdGgubG9nKHUpICogdSAqIHUpKTtcbiAgICBcbiAgICByZXR1cm4gKHYgLyB1KSAqIHNkICsgbWVhbjtcbiAgfTtcbiAgXG4gIFxuICAvKiogUmV0dXJucyBhIGRlZXAgY2xvbmUgb2Ygc3JjLCBzb3J0IG9mLi4uIEl0IG9ubHkgY29waWVzIGEgbGltaXRlZFxuICAgKiBudW1iZXIgb2YgdHlwZXMgYW5kLCBmb3IgZXhhbXBsZSwgZnVuY3Rpb24gYXJlIG5vdCBjb3BpZWQuIFxuICAgKiBGcm9tIGh0dHA6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1jbG9uZVxuICAgKi9cbiAgdmFyIGRlZXBfY2xvbmUgPSBmdW5jdGlvbihzcmMpIHtcbiAgXHRmdW5jdGlvbiBtaXhpbihkZXN0LCBzb3VyY2UsIGNvcHlGdW5jKSB7XG4gIFx0XHR2YXIgbmFtZSwgcywgaSwgZW1wdHkgPSB7fTtcbiAgXHRcdGZvcihuYW1lIGluIHNvdXJjZSl7XG4gIFx0XHRcdC8vIHRoZSAoIShuYW1lIGluIGVtcHR5KSB8fCBlbXB0eVtuYW1lXSAhPT0gcykgY29uZGl0aW9uIGF2b2lkcyBjb3B5aW5nIHByb3BlcnRpZXMgaW4gXCJzb3VyY2VcIlxuICBcdFx0XHQvLyBpbmhlcml0ZWQgZnJvbSBPYmplY3QucHJvdG90eXBlLlx0IEZvciBleGFtcGxlLCBpZiBkZXN0IGhhcyBhIGN1c3RvbSB0b1N0cmluZygpIG1ldGhvZCxcbiAgXHRcdFx0Ly8gZG9uJ3Qgb3ZlcndyaXRlIGl0IHdpdGggdGhlIHRvU3RyaW5nKCkgbWV0aG9kIHRoYXQgc291cmNlIGluaGVyaXRlZCBmcm9tIE9iamVjdC5wcm90b3R5cGVcbiAgXHRcdFx0cyA9IHNvdXJjZVtuYW1lXTtcbiAgXHRcdFx0aWYoIShuYW1lIGluIGRlc3QpIHx8IChkZXN0W25hbWVdICE9PSBzICYmICghKG5hbWUgaW4gZW1wdHkpIHx8IGVtcHR5W25hbWVdICE9PSBzKSkpe1xuICBcdFx0XHRcdGRlc3RbbmFtZV0gPSBjb3B5RnVuYyA/IGNvcHlGdW5jKHMpIDogcztcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIGRlc3Q7XG4gIFx0fVxuICBcdGlmKCFzcmMgfHwgdHlwZW9mIHNyYyAhPSBcIm9iamVjdFwiIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzcmMpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpe1xuICBcdFx0Ly8gbnVsbCwgdW5kZWZpbmVkLCBhbnkgbm9uLW9iamVjdCwgb3IgZnVuY3Rpb25cbiAgXHRcdHJldHVybiBzcmM7XHQvLyBhbnl0aGluZ1xuICBcdH1cbiAgXHRpZihzcmMubm9kZVR5cGUgJiYgXCJjbG9uZU5vZGVcIiBpbiBzcmMpe1xuICBcdFx0Ly8gRE9NIE5vZGVcbiAgXHRcdHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpOyAvLyBOb2RlXG4gIFx0fVxuICBcdGlmKHNyYyBpbnN0YW5jZW9mIERhdGUpe1xuICBcdFx0Ly8gRGF0ZVxuICBcdFx0cmV0dXJuIG5ldyBEYXRlKHNyYy5nZXRUaW1lKCkpO1x0Ly8gRGF0ZVxuICBcdH1cbiAgXHRpZihzcmMgaW5zdGFuY2VvZiBSZWdFeHApe1xuICBcdFx0Ly8gUmVnRXhwXG4gIFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChzcmMpOyAgIC8vIFJlZ0V4cFxuICBcdH1cbiAgXHR2YXIgciwgaSwgbDtcbiAgXHRpZihzcmMgaW5zdGFuY2VvZiBBcnJheSl7XG4gIFx0XHQvLyBhcnJheVxuICBcdFx0ciA9IFtdO1xuICBcdFx0Zm9yKGkgPSAwLCBsID0gc3JjLmxlbmd0aDsgaSA8IGw7ICsraSl7XG4gIFx0XHRcdGlmKGkgaW4gc3JjKXtcbiAgXHRcdFx0XHRyLnB1c2goZGVlcF9jbG9uZShzcmNbaV0pKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0gZWxzZSB7XG4gIFx0XHQvLyBnZW5lcmljIG9iamVjdHNcbiAgXHRcdHIgPSBzcmMuY29uc3RydWN0b3IgPyBuZXcgc3JjLmNvbnN0cnVjdG9yKCkgOiB7fTtcbiAgXHR9XG4gIFx0cmV0dXJuIG1peGluKHIsIHNyYywgZGVlcF9jbG9uZSk7XG4gIH07XG4gIFxuICAvKiogU3BlY2lhbGl6ZWQgY2xvbmUgZnVuY3Rpb24gdGhhdCBvbmx5IGNsb25lcyBzY2FsYXJzIGFuZCBuZXN0ZWQgYXJyYXlzIHdoZXJlXG4gICAqIGVhY2ggYXJyYXkgZWl0aGVyIGNvbnNpc3RzIG9mIGFsbCBhcnJheXMgb3IgYWxsIG51bWJlcnMuIFRoaXMgZnVuY3Rpb25cbiAgICogaXMgbWVhbnQgYXMgYSBmYXN0IHdheSBvZiBjbG9uaW5nIHBhcmFtZXRlciBkcmF3cyB3aXRoaW4gdGhlIG1jbWMgc2FtcGxpbmdcbiAgICogbG9vcC5cbiAgICovXG4gIHZhciBjbG9uZV9wYXJhbV9kcmF3ID0gZnVuY3Rpb24oeCkge1xuICAgIGlmKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoeFswXSkpIHtcbiAgICAgICAgLy8geCBpcyBhbiBhcnJheSBvZiBhcnJheXMgc28gd2UgbmVlZCB0byBjbG9uZSBpdCByZWN1cnNpdmVseVxuICAgICAgICB2YXIgeF9jb3B5ID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbmd0aCA9IHgubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB4X2NvcHkucHVzaChjbG9uZV9wYXJhbV9kcmF3KHhbaV0pKTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIHhfY29weTtcbiAgICAgIH0gZWxzZSB7IC8vIFdlJ2xsIGFzc3VtZSB4IGlzIGEgYXJyYXlzIG9mIHNjYWxhcnNcbiAgICAgICAgcmV0dXJuIHguc2xpY2UoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gV2UnbGwgYXNzdW1lIHggaXMgYSBzY2FsYXJcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfTtcbiAgXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgb2JqZWN0IGlzIGEgbnVtYmVyLlxuICAgKi9cbiAgdmFyIGlzX251bWJlciA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gXCJudW1iZXJcIiB8fCAodHlwZW9mIG9iamVjdCA9PSBcIm9iamVjdFwiICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyKTtcbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIChwb3NzaWJseSBtdWx0aWRpbWVuc2lvbmFsL25lc3RlZCkgYXJyYXkuXG4gICAqIEBwYXJhbSBkaW0gLSBBbiBhcnJheSBnaXZpbmcgdGhlIGRpbWVuc2lvbiBvZiB0aGUgYXJyYXkuIEZvciBleGFtcGxlLFxuICAgKiAgIFs1XSB3b3VsZCB5aWVsZCBhIDUgZWxlbWVudCBhcnJheSwgYW5kIFszLDNdIHdvdWxkIHlpZWxkIGEgMyBieSAzIG1hdHJpeC5cbiAgICogQHBhcmFtIGluaXQgLSBBIHZhbHVlIG9yIGEgZnVuY3Rpb24gdXNlZCB0byBmaWxsIGluIHRoZSBlYWNoIGVsZW1lbnQgaW5cbiAgICogICB0aGUgYXJyYXkuIElmIGl0IGlzIGEgZnVuY3Rpb24gaXQgc2hvdWxkIHRha2Ugbm8gYXJndW1lbnRzLCBpdCB3aWxsIGJlIFxuICAgKiAgIGV2YWx1YXRlZCBvbmNlIGZvciBlYWNoIGVsZW1lbnQsIGFuZCBpdCdzIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWQgdG9cbiAgICogICBmaWxsIGluIGVhY2ggZWxlbWVudC5cbiAgICogQGV4YW1wbGUgXG4gICAqIC8vIFRoZSBmb2xsb3dpbmcgd291bGQgcmV0dXJuIFtbMSwxXSxbMSwxXSxbMSwxXV1cbiAgICogY3JlYXRlX2FycmF5KFsyLDNdLCAxKVxuICAgKi9cbiAgdmFyIGNyZWF0ZV9hcnJheSA9IGZ1bmN0aW9uKGRpbSwgaW5pdCkge1xuICAgIHZhciBhcnIgPSBuZXcgQXJyYXkoZGltWzBdKTtcbiAgICB2YXIgaTtcbiAgICBpZihkaW0ubGVuZ3RoID09IDEpIHsgLy8gRmlsbCBpdCB1cCB3aXRoIGluaXRcbiAgICAgIGlmKHR5cGVvZiBpbml0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0gPSBpbml0KCk7XG4gICAgICAgIH0gIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0gPSBpbml0O1xuICAgICAgICB9IFxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkaW0ubGVuZ3RoID4gMSkge1xuICAgICAgZm9yKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gY3JlYXRlX2FycmF5KGRpbS5zbGljZSgxKSwgaW5pdCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiY3JlYXRlX2FycmF5IGNhbid0IGNyZWF0ZSBhIGRpbWVuc2lvbmxlc3MgYXJyYXlcIjtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpbWVuc2lvbnMgb2YgYSBwb3NzaWJseSBuZXN0ZWQgYXJyYXkgYXMgYW4gYXJyYXkuIEZvciBcbiAgICogZXhhbXBsZSwgYXJyYXlfZGltKCBbWzEsIDJdLCBbMSwgMl1dICkgc2hvdWxkIHJldHVybiBbMiwgMl1cbiAgICogQXNzdW1lcyB0aGF0IGFsbCBhcnJheXMgaW5zaWRlIGFub3RoZXIgYXJyYXkgYXJlIG9mIHRoZSBzYW1lIGxlbmd0aC5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gU2hvdWxkIHJldHVybiBbNCwgMiwgMV1cbiAgICogYXJyYXlfZGltKGNyZWF0ZV9hcnJheShbNCwgMiwgMV0sIDApKVxuICAgKi9cbiAgdmFyIGFycmF5X2RpbSA9IGZ1bmN0aW9uKGEpIHtcbiAgICBpZihBcnJheS5pc0FycmF5KGFbMF0pKSB7XG4gICAgICByZXR1cm4gW2EubGVuZ3RoXS5jb25jYXQoYXJyYXlfZGltKGFbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFthLmxlbmd0aF07XG4gICAgfVxuICB9O1xuICBcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbCBpbiB0aGUgc2Vuc2UgdGhhdCB0aGV5IGNvbnRhaW4gdGhlIHNhbWUgZWxlbWVudHNcbiAgICogYXMganVkZ2VkIGJ5IHRoZSBcIj09XCIgb3BlcmF0b3IuIFJldHVybnMgdHJ1ZSBvciBmYWxzZS5cbiAgICogQWRhcHRlZCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0ODUzOTc0LzEwMDE4NDhcbiAgICovIFxuICB2YXIgYXJyYXlfZXF1YWwgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgbmVzdGVkIGFycmF5c1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGExW2ldKSAmJiBBcnJheS5pc0FycmF5KGEyW2ldKSkge1xuICAgICAgICAgICAgICAvLyByZWN1cnNlIGludG8gdGhlIG5lc3RlZCBhcnJheXNcbiAgICAgICAgICAgICAgaWYgKCFhcnJheV9lcXVhbChhMVtpXSwgYTJbaV0pKSByZXR1cm4gZmFsc2U7ICAgICAgIFxuICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKGExW2ldICE9IGEyW2ldKSB7IFxuICAgICAgICAgICAgICAvLyBXYXJuaW5nIC0gdHdvIGRpZmZlcmVudCBvYmplY3QgaW5zdGFuY2VzIHdpbGwgbmV2ZXIgYmUgZXF1YWw6IHt4OjIwfSAhPSB7eDoyMH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIFxuICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgfSAgICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIFRyYXZlcnNlcyBhIHBvc3NpYmx5IG5lc3RlZCBhcnJheSBhIGFuZCBhcHBsaWVzIGZ1biB0byBhbGwgXCJsZWFmIG5vZGVzXCIsIFxuICAgKiB0aGF0IGlzLCB2YWx1ZXMgdGhhdCBhcmUgbm90IGFycmF5cy4gUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgc2FtZSBzaXplIGFzXG4gICAqIGEuXG4gICAqL1xuICB2YXIgbmVzdGVkX2FycmF5X2FwcGx5ID0gZnVuY3Rpb24oYSwgZnVuKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhLmxlbmd0aCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBuZXN0ZWRfYXJyYXlfYXBwbHkoYVtpXSwgZnVuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW4oYSk7XG4gICAgfVxuICB9O1xuICBcbiAgLyoqIFJhbmRvbWl6aW5nIHRoZSBhcnJheSBlbGVtZW50IG9yZGVyIGluLXBsYWNlLiBVc2luZyBEdXJzdGVuZmVsZFxuICAgKiBzaHVmZmxlIGFsZ29yaXRobS4gQWRhcHRlZCBmcm9tIGhlcmU6IFxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMjY0Njg2NC8xMDAxODQ4XG4gICAqL1xuICBmdW5jdGlvbiBzaHVmZmxlX2FycmF5KGFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIERvZXMgdGhlIHNhbWUgdGhpbmcgYXMgbmVzdGVkX2FycmF5X2FwcGx5LCB0aGF0IGlzLCB0cmF2ZXJzZXMgYSBwb3NzaWJseVxuICAgKiBuZXN0ZWQgYXJyYXkgYSBhbmQgYXBwbGllcyBmdW4gdG8gYWxsIFwibGVhZiBub2Rlc1wiIGFuZCByZXR1cm5zIGFuIGFycmF5IFxuICAgKiBvZiB0aGUgc2FtZSBzaXplIGFzIGEuIFRoZSBkaWZmZXJlbmNlIGlzIHRoYXQgbmVzdGVkX2FycmF5X3JhbmRvbV9hcHBseVxuICAgKiBicmFuY2hlcyByYW5kb21seS5cbiAgICovXG4gIHZhciBuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5ID0gZnVuY3Rpb24oYSwgZnVuKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgdmFyIGxlbiA9IGEubGVuZ3RoO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgYXJyYXlfaXMgPSBbXTtcbiAgICAgIGZvcihpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFycmF5X2lzW2ldID0gaTtcbiAgICAgIH1cbiAgICAgIHNodWZmbGVfYXJyYXkoYXJyYXlfaXMpO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgXG4gICAgICBmb3IoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXJyYXlfaSA9IGFycmF5X2lzW2ldO1xuICAgICAgICByZXN1bHRbYXJyYXlfaV0gPSBuZXN0ZWRfYXJyYXlfYXBwbHkoYVthcnJheV9pXSwgZnVuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW4oYSk7XG4gICAgfVxuICB9O1xuICBcbiAgLyoqXG4gICAqIEFsbG93cyBhIHByZXR0eSB3YXkgb2Ygc2V0dGluZyBkZWZhdWx0IG9wdGlvbnMgd2hlcmUgdGhlIGRlZnVsdHMgY2FuIGJlXG4gICAqIG92ZXJyaWRkZW4gYnkgYW4gb3B0aW9ucyBvYmplY3QuXG4gICAqICBAcGFyYW0gb3B0aW9uX25hbWUgLSB0aGUgbmFtZSBvZiB0aGUgb3B0aW9uIGFzIGEgc3RyaW5nXG4gICAqICBAcGFyYW0gbXlfb3B0aW9ucyAtIGFuIG9wdGlvbiBvYmplY3QgdGhhdCBjb3VsZCBoYXZlIG9wdGlvbl9uYW1lIFxuICAgKiAgICBhcyBhIG1lbWJlci5cbiAgICogQHBhcmFtIGRlZmF1bF92YWx1ZSAtIGRlZnVsdCB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGlmIG9wdGlvbl9uYW1lIFxuICAgKiAgIGlzIG5vdCBkZWZpbmVkIGluIG15X29wdGlvbnMuXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBteV9vcHRpb25zID0ge3BpOiAzLjE0MTU5fVxuICAgKiB2YXIgcGkgPSBnZXRfb3B0aW9uKFwicGlcIiwgbXlfb3B0aW9ucywgMy4xNClcbiAgICovXG4gIC8vIFByZXR0eSB3YXkgb2Ygc2V0dGluZyBkZWZhdWx0IG9wdGlvbnMgd2hlcmUgdGhlIGRlZmF1bHRzIGNhbiBiZSBvdmVycmlkZGVuXG4gIC8vIGJ5IGFuIG9wdGlvbnMgb2JqZWN0LiBGb3IgZXhhbXBsZTpcbiAgLy8gdmFyIHBpID0gZ2V0X29wdGlvbihcInBpXCIsIG15X29wdGlvbnMsIDMuMTQpXG4gIHZhciBnZXRfb3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uX25hbWUsIG9wdGlvbnMsIGRlZmF1bF92YWx1ZSkge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBvcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbl9uYW1lKSAmJiBcbiAgICAgICAgICAgb3B0aW9uc1tvcHRpb25fbmFtZV0gIT09IHVuZGVmaW5lZCAgJiYgXG4gICAgICAgICAgIG9wdGlvbnNbb3B0aW9uX25hbWVdICE9PSBudWxsID8gb3B0aW9uc1tvcHRpb25fbmFtZV0gOiBkZWZhdWxfdmFsdWU7XG4gIH07XG4gIFxuICAvKiogVmVyc2lvbiBvZiBnZXRfb3B0aW9uIHdoZXJlIHRoZSBvcHRpb24gc2hvdWxkIGJlIGEgb25lIG9yIG11bHRpLWRpbWVuc2lvbmFsXG4gICAqIGFycmF5IGFuZCB3aGVyZSB0aGUgZGVmYXVsdCBjYW4gYmUgb3ZlcnJpZGRlbiBlaXRoZXIgYnkgYSBzY2FsYXIgb3IgYnkgYW4gYXJyYXkuXG4gICAqIElmIGl0J3MgYSBzY2FsYXIgdGhlIHRoYXQgc2NhbGFyIGlzIHVzZWQgdG8gaW5pdGlhbGl6ZSBhbiBhcnJheSB3aXRoIFxuICAgKiBkaW0gZGltZW5zaW9ucy5cbiAgICogXG4gICAqL1xuICB2YXIgZ2V0X211bHRpZGltX29wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbl9uYW1lLCBvcHRpb25zLCBkaW0sIGRlZmF1bF92YWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IGdldF9vcHRpb24ob3B0aW9uX25hbWUsIG9wdGlvbnMsIGRlZmF1bF92YWx1ZSk7XG4gICAgIGlmKCEgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICB2YWx1ZSA9IGNyZWF0ZV9hcnJheShkaW0sIHZhbHVlKTtcbiAgICAgfSBcbiAgICAgaWYoISBhcnJheV9lcXVhbCggYXJyYXlfZGltKHZhbHVlKSwgZGltKSkge1xuICAgICAgIHRocm93IFwiVGhlIG9wdGlvbiBcIiArIG9wdGlvbl9uYW1lICsgXCIgaXMgb2YgZGltZW5zaW9uIFtcIiArIFxuICAgICAgICAgICAgIGFycmF5X2RpbSh2YWx1ZSkgKyBcIl0gYnV0IHNob3VsZCBiZSBbXCIgKyBkaW0gKyBcIl0uXCI7XG4gICAgfVxuICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIFxuICAvLy8vLy8vLy8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgcGFyYW1ldGVyIG9iamVjdHMgLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgLyoqXG4gICAqIFJldHVybnMgYSBmaXhlZCAoc2FtZSBldmVyeSB0aW1lKSBudW1iZXIgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgICogYSBwYXJhbWV0ZXIgb2YgYSBjZXJ0YWluIHR5cGUsIHBvc3NpYmx5IHdpdGggbG93ZXIgYW5kIHVwcGVyIGJvdW5kcy5cbiAgICogVGhlIHBvc3NpbGUgdHlwZXMgYXJlIFwicmVhbFwiLCBcImludFwiLCBhbmQgXCJiaW5hcnlcIi5cbiAgICovXG4gIHZhciBwYXJhbV9pbml0X2ZpeGVkID0gZnVuY3Rpb24odHlwZSwgbG93ZXIsIHVwcGVyKSB7XG4gICAgaWYobG93ZXIgPiB1cHBlcikge1xuICAgICAgdGhyb3cgXCJDYW4gbm90IGluaXRpYWxpemUgcGFyYW1ldGVyIHdoZXJlIGxvd2VyIGJvdW5kID4gdXBwZXIgYm91bmRcIjtcbiAgICB9XG4gICAgaWYodHlwZSA9PT0gXCJyZWFsXCIpIHtcbiAgICAgIGlmKGxvd2VyID09PSAtSW5maW5pdHkgJiYgdXBwZXIgPT09IEluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgICB9IGVsc2UgaWYobG93ZXIgPT09IC1JbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gdXBwZXIgLSAwLjU7XG4gICAgICB9IGVsc2UgaWYodXBwZXIgPT09IEluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiBsb3dlciArIDAuNTtcbiAgICAgIH0gZWxzZSBpZihsb3dlciA8PSB1cHBlcikge1xuICAgICAgICByZXR1cm4gKGxvd2VyICsgdXBwZXIpIC8gMjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodHlwZSA9PT0gXCJpbnRcIikge1xuICAgICAgaWYobG93ZXIgPT09IC1JbmZpbml0eSAmJiB1cHBlciA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYobG93ZXIgPT09IC1JbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gdXBwZXIgLSAxO1xuICAgICAgfSBlbHNlIGlmKHVwcGVyID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gbG93ZXIgKyAxO1xuICAgICAgfSBlbHNlIGlmKGxvd2VyIDw9IHVwcGVyKXtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGxvd2VyICsgdXBwZXIpIC8gMik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHR5cGUgPT09IFwiYmluYXJ5XCIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB0aHJvdyBcIkNvdWxkIG5vdCBpbml0aWFsaXplIHBhcmFtZXRlciBvZiB0eXBlIFwiICsgdHlwZSArIFwiW1wiICsgbG93ZXIgKyBcIiwgXCIgKyB1cHBlciArIFwiXVwiO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIENvbXBsZXRlcyBwYXJhbXNfdG9fY29tcGxldGUsIGFuIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlciBkZXNjcmlwdGlvbnMsIFxuICAgKiBhbmQgaW5pdGlhbGl6ZXMgbm9uLWluaXRpYWxpemVkIHBhcmFtZXRlcnMuIFRoaXMgbW9kaWZpZWQgdmVyc2lvbiBvZlxuICAgKiBwYXJhbXNfdG9fY29tcGxldGUgaXMgcmV0dXJuZWQgYXMgYSBkZWVwIGNvcHkgYW5kIG5vdCBtb2RpZmllZCBpbiBwbGFjZS5cbiAgICogSW5pdGlhbGl6YXRpb24gaXMgZG9uZSBieSBzdXBwbHlpbmcgYSBwYXJhbV9pbml0IGZ1bmN0aW9uIHdpdGggc2lnbmF0dXJlXG4gICAqIGZ1bmN0aW9uKHR5cGUsIGxvd2VyLCB1cHBlcikgdGhhdCBzaG91bGQgcmV0dXJuIGEgc2luZ2xlIG51bWJlciBcbiAgICogKGxpa2UgcGFyYW1faW5pdF9maXhlZCwgZm9yIGV4YW1wbGUpLlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcGFyYW1zID0geyBcIm11XCI6IHtcInR5cGVcIjogXCJyZWFsXCJ9IH1cbiAgICogcGFyYW1zID0gY29tcGxldGVfcGFyYW1zKHBhcmFtcyk7XG4gICAqIC8vIHBhcmFtcyBzaG91bGQgbm93IGJlOlxuICAgKiAvLyAge1wibXVcIjogeyBcInR5cGVcIjogXCJyZWFsXCIsIFwiZGltXCI6IFsxXSwgXCJ1cHBlclwiOiBJbmZpbml0eSxcbiAgICogLy8gICAgICAgICAgIFwibG93ZXJcIjogLUluZmluaXR5LCBcImluaXRcIjogMC41IH19XG4gICAqLyBcbiAgdmFyIGNvbXBsZXRlX3BhcmFtcyAgPSBmdW5jdGlvbihwYXJhbXNfdG9fY29tcGxldGUsIHBhcmFtX2luaXQpIHtcbiAgICB2YXIgcGFyYW1zID0gZGVlcF9jbG9uZShwYXJhbXNfdG9fY29tcGxldGUpO1xuICAgIGZvciAodmFyIHBhcmFtX25hbWUgaW4gcGFyYW1zKSB7IGlmICghcGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtX25hbWUpKSBjb250aW51ZTtcbiAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1twYXJhbV9uYW1lXTtcbiAgICAgIGlmKCAhcGFyYW0uaGFzT3duUHJvcGVydHkoXCJ0eXBlXCIpKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSBcInJlYWxcIjtcbiAgICAgIH1cbiAgICAgIGlmKCFwYXJhbS5oYXNPd25Qcm9wZXJ0eShcImRpbVwiKSkge1xuICAgICAgICBwYXJhbS5kaW0gPSBbMV07XG4gICAgICB9XG4gICAgICBpZihpc19udW1iZXIocGFyYW0uZGltKSkge1xuICAgICAgICBwYXJhbS5kaW0gPSBbcGFyYW0uZGltXTtcbiAgICAgIH1cbiAgICAgIGlmKHBhcmFtLnR5cGUgPT0gXCJiaW5hcnlcIikge1xuICAgICAgICBwYXJhbS51cHBlciA9IDE7XG4gICAgICAgIHBhcmFtLmxvd2VyID0gMDtcbiAgICAgIH1cbiAgICAgIGlmKCFwYXJhbS5oYXNPd25Qcm9wZXJ0eShcInVwcGVyXCIpKSB7XG4gICAgICAgIHBhcmFtLnVwcGVyID0gSW5maW5pdHk7XG4gICAgICB9XG4gICAgICBpZighcGFyYW0uaGFzT3duUHJvcGVydHkoXCJsb3dlclwiKSkge1xuICAgICAgICBwYXJhbS5sb3dlciA9IC1JbmZpbml0eTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYocGFyYW0uaGFzT3duUHJvcGVydHkoXCJpbml0XCIpKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMganVzdCBhIG51bWJlciBvciBhIG5lc3RlZCBhcnJheSB3ZSBsZWF2ZSBpdCBhbG9uZSwgYnV0IGlmLi4uXG4gICAgICAgIGlmKGFycmF5X2VxdWFsKHBhcmFtLmRpbSwgWzFdKSAmJiB0eXBlb2YgcGFyYW0uaW5pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gcGFyYW0uaW5pdCBpcyBhIGZ1bmN0aW9uLCB1c2UgdGhhdCB0byBpbml0aWFsaXplIHRoZSBwYXJhbWV0ZXIuXG4gICAgICAgICAgcGFyYW0uaW5pdCA9IHBhcmFtLmluaXQoKTtcbiAgICAgICAgfSBlbHNlIGlmKCFhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkgJiYgIUFycmF5LmlzQXJyYXkocGFyYW0uaW5pdCkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhIG11bHRpZGltZW5zaW9uYWwgcGFyYW1ldGVyIHdoZXJlIHRoZSBwYXJhbS5pbml0IGV4aXN0IGJ1dFxuICAgICAgICAvLyBpcyBub3QgYW4gYXJyYXkuIFRoZW4gYXNzdW1lIGl0IGlzIGEgbnVtYmVyIG9yIGEgZnVuY3Rpb24gYW5kIHVzZVxuICAgICAgICAvLyBpdCB0byBpbml0aWFsaXplIHRoZSBwYXJhbWV0ZXIuXG4gICAgICAgIHBhcmFtLmluaXQgPSBjcmVhdGVfYXJyYXkocGFyYW0uZGltLCBwYXJhbS5pbml0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gV2UgdXNlIHRoZSBkZWZhdWx0IGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uLlxuICAgICAgICBpZihhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkpIHtcbiAgICAgICAgICBwYXJhbS5pbml0ID0gcGFyYW1faW5pdChwYXJhbS50eXBlLCBwYXJhbS5sb3dlciwgcGFyYW0udXBwZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtLmluaXQgPSBjcmVhdGVfYXJyYXkocGFyYW0uZGltLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbV9pbml0KHBhcmFtLnR5cGUsIHBhcmFtLmxvd2VyLCBwYXJhbS51cHBlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcbiAgXG4gIFxuICAvLy8vLy8vLy8vIFN0ZXBwZXIgRnVuY3Rpb25zIC8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gIFxuICAvKipcbiAgICogQGludGVyZmFjZVxuICAgKiBBIFN0ZXBwZXIgaXMgYW4gb2JqZWN0IHJlc3BvbnNpYmxlIGZvciBwdXNoaW5nIGFyb3VuZCBvbmVcbiAgICogb3IgbW9yZSBwYXJhbWV0ZXIgdmFsdWVzIGluIGEgc3RhdGUgYWNjb3JkaW5nIHRvIHRoZSBkaXN0cmlidXRpb25cbiAgICogZGVmaW5lZCBieSB0aGUgbG9nIHBvc3Rlcmlvci4gVGhpcyBkZWZpbmVzIHRoZSBTdGVwcGVyIFwiaW50ZXJmYWNlXCIsXG4gICAqIHdoZXJlIFwiaW50ZXJmYWNlXCIgbWVhbnMgdGhhdCBTdGVwcGVyIGRlZmluZXMgYSBjbGFzcyB0aGF0IGlzIG5ldmVyXG4gICAqIG1lYW50IHRvIGJlIGluc3RhbnRpYXRlZCwgYnV0IGp1c3QgdG8gYmUgc3ViY2xhc3NlZCBieSBzcGVjaWFsaXplZFxuICAgKiBzdGVwcGVyIGZ1bmN0aW9ucy5cbiAgICogQGludGVyZmFjZVxuICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggcGFyYW1ldGVyIGRlZmluaXRpb25zLCBmb3IgZXhhbXBsZTpcbiAgICogICB7XCJtdVwiOiB7IFwidHlwZVwiOiBcInJlYWxcIiwgXCJkaW1cIjogWzFdLCBcInVwcGVyXCI6IEluZmluaXR5LCBcbiAgICogICBcImxvd2VyXCI6IC1JbmZpbml0eSwgXCJpbml0XCI6IDAuNSB9fVxuICAgKiAgIFRoZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbnMgYXJlIGV4cGVjdGVkIHRvIGJlIFwiY29tcGxldGVcIiwgdGhhdCBpcyxcbiAgICogICBzcGVjaWZ5aW5nIGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIHN1Y2ggYXMgZGltLCBsb3dlciBhbmQgdXBwZXIuXG4gICAqIEBwYXJhbSBzdGF0ZSAtIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBzdGF0ZSBvZiBhbGwgcGFyYW1ldGVycyBpbiBwYXJhbXNcbiAgICogICAoYW5kIHBvc3NpYmx5IG1vcmUpLiBUaGUgcGFyYW1ldGVyIG5hbWVzIGFyZSBnaXZlbiBhcyBrZXlzIGFuZCB0aGUgc3RhdGVzXG4gICAqICAgYXMgc2NhbGFycyBvciwgcG9zc2libHkgbmVzdGVkLCBhcnJheXMuIEZvciBleGFtcGxlOlxuICAgKiAgIHttdTogMTAsIHNpZ21hOiA1LCBiZXRhOiBbMSwgMi41XX1cbiAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiAqdGFraW5nIG5vIHBhcmFtZXRlcnMqIHRoYXQgcmV0dXJucyB0aGVcbiAgICogICBsb2cgZGVuc2l0eSB0aGF0IGRlcGVuZHMgb24gdGhlIHN0YXRlLiBUaGF0IGlzLCB0aGUgdmFsdWUgb2YgbG9nX3Bvc3RcbiAgICogICBzaG91bGQgY2hhbmdlIGlmIHRoZSB0aGUgdmFsdWVzIGluIHN0YXRlIGFyZSBjaGFuZ2VkLlxuICBcbiAgICovXG4gIHZhciBTdGVwcGVyID0gZnVuY3Rpb24ocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5sb2dfcG9zdCA9IGxvZ19wb3N0O1xuICB9O1xuICBcbiAgLyoqXG4gICAqIFRha2VzIGEgc3RlcCBpbiB0aGUgcGFyYW1ldGVyIHNwYWNlLiBTaG91bGQgcmV0dXJuIHRoZSBuZXcgc3RhdGUsXG4gICAqIGJ1dCBpcyBtYWlubHkgY2FsbGVkIGZvciBpdCdzIHNpZGUgZWZmZWN0IG9mIG1ha2luZyBhIGNoYW5nZSBpbiB0aGVcbiAgICogc3RhdGUgb2JqZWN0LlxuICAgKi9cbiAgU3RlcHBlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IFwiRXZlcnkgU3RlcHBlciBuZWVkIHRvIGltcGxlbWVudCBzdGVwKClcIjtcbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBJZiBpbXBsZW1lbnRlZCwgbWFrZXMgdGhlIHN0ZXBwZXIgYWRhcHQgd2hpbGUgc3RlcHBpbmcuXG4gICAqLyBcbiAgU3RlcHBlci5wcm90b3R5cGUuc3RhcnRfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9wdGlvbmFsLCBzb21lIHN0ZXBwZXJzIG1pZ2h0IG5vdCBiZSBhZGFwdGl2ZS4gKi8gXG4gIH07XG4gIFxuICAvKipcbiAgICogSWYgaW1wbGVtZW50ZWQsIG1ha2VzIHRoZSBzdGVwcGVyIGNlYXNlIGFkYXB0aW5nIHdoaWxlIHN0ZXBwaW5nLlxuICAgKi8gXG4gIFN0ZXBwZXIucHJvdG90eXBlLnN0b3BfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9wdGlvbmFsLCBzb21lIHN0ZXBwZXJzIG1pZ2h0IG5vdCBiZSBhZGFwdGl2ZS4gKi8gXG4gIH07XG4gIFxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmcgaW5mbyByZWdhcmRpbmcgdGhlIHN0ZXBwZXIuXG4gICAqLyBcbiAgU3RlcHBlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggaW5mbyBhYm91dCB0aGUgc3RhdGUgb2YgdGhlIHN0ZXBwZXIuXG4gICAgcmV0dXJuIHt9O1xuICB9O1xuICBcbiAgXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQGltcGxlbWVudHMge1N0ZXBwZXJ9XG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBtZXRyb3BvbGlzIHN0ZXAgaW5cbiAgICogdGhlIEFkYXB0aXZlIE1ldHJvcG9saXMtV2l0aGluLUdpYmJzIGFsZ29yaXRobSBpbiBcIkV4YW1wbGVzIG9mIEFkYXB0aXZlIE1DTUNcIlxuICAgKiBieSBSb2JlcnRzIGFuZCBSb3NlbnRoYWwgKDIwMDgpLlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGRlZmluaXRpb24uXG4gICAqIEBwYXJhbSBzdGF0ZSAtIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBzdGF0ZSBvZiBhbGwgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGxvZyBkZW5zaXR5IHRoYXQgZGVwZW5kcyBvbiB0aGUgc3RhdGUuIFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMgdG8gdGhlIHN0ZXBwZXIuXG4gICAqIEBwYXJhbSBnZW5lcmF0ZV9wcm9wb3NhbCAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgcHJvcG9zYWwgKGFzIGEgbnVtYmVyKVxuICAgKiB3aXRoIHNpZ25hdHVyZSBmdW5jdGlvbihwYXJhbV9zdGF0ZSwgbG9nX3NjYWxlKSB3aGVyZSBwYXJhbV9zdGF0ZSBpcyBhXG4gICAqIG51bWJlciBhbmQgbG9nX3NjYWxlIGRlZmluZXMgdGhlIHNjYWxlIG9mIHRoZSBwcm9wb3NhbCBzb21laG93LlxuICAqL1xuICB2YXIgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucywgZ2VuZXJhdGVfcHJvcG9zYWwpIHtcbiAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpO1xuICAgIFxuICAgIHZhciBwYXJhbV9uYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKTtcbiAgICBpZihwYXJhbV9uYW1lcy5sZW5ndGggICE9IDEpIHtcbiAgICAgIHRocm93IFwiT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIgY2FuIG9ubHkgaGFuZGxlIG9uZSBwYXJhbWV0ZXIuXCI7XG4gICAgfVxuICAgIHRoaXMucGFyYW1fbmFtZSA9IHBhcmFtX25hbWVzWzBdO1xuICAgIHZhciBwYXJhbSA9IHRoaXMucGFyYW1zW3RoaXMucGFyYW1fbmFtZV07XG4gICAgaWYoIWFycmF5X2VxdWFsKHBhcmFtLmRpbSwgWzFdKSkge1xuICAgICAgdGhyb3cgXCJPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciBjYW4gb25seSBoYW5kbGUgb25lIG9uZS1kaW1lbnNpb25hbCBwYXJhbWV0ZXIuXCI7XG4gICAgfVxuICAgIHRoaXMubG93ZXIgPSBwYXJhbS5sb3dlcjtcbiAgICB0aGlzLnVwcGVyID0gcGFyYW0udXBwZXI7XG4gICAgXG4gICAgdGhpcy5wcm9wX2xvZ19zY2FsZSAgICAgPSBnZXRfb3B0aW9uKFwicHJvcF9sb2dfc2NhbGVcIiwgb3B0aW9ucywgMCk7XG4gICAgdGhpcy5iYXRjaF9zaXplICAgICAgICAgPSBnZXRfb3B0aW9uKFwiYmF0Y2hfc2l6ZVwiLCBvcHRpb25zLCA1MCk7XG4gICAgdGhpcy5tYXhfYWRhcHRhdGlvbiAgICAgPSBnZXRfb3B0aW9uKFwibWF4X2FkYXB0YXRpb25cIiwgb3B0aW9ucywgMC4zMyk7XG4gICAgdGhpcy5pbml0aWFsX2FkYXB0YXRpb24gPSBnZXRfb3B0aW9uKFwiaW5pdGlhbF9hZGFwdGF0aW9uXCIsIG9wdGlvbnMsIDEuMCk7XG4gICAgdGhpcy50YXJnZXRfYWNjZXB0X3JhdGUgPSBnZXRfb3B0aW9uKFwidGFyZ2V0X2FjY2VwdF9yYXRlXCIsIG9wdGlvbnMsIDAuNDQpO1xuICAgIHRoaXMuaXNfYWRhcHRpbmcgICAgICAgID0gZ2V0X29wdGlvbihcImlzX2FkYXB0aW5nXCIsIG9wdGlvbnMsIHRydWUpO1xuICAgIFxuICAgIHRoaXMuZ2VuZXJhdGVfcHJvcG9zYWwgPSBnZW5lcmF0ZV9wcm9wb3NhbDtcbiAgICBcbiAgICB0aGlzLmFjY2VwdGFuY2VfY291bnQgPSAwO1xuICAgIHRoaXMuYmF0Y2hfY291bnQgPSAwO1xuICAgIHRoaXMuaXRlcmF0aW9uc19zaW5jZV9hZGFwdGlvbiA9IDA7ICBcbiAgfTtcbiAgXG4gIE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RlcHBlci5wcm90b3R5cGUpOyBcbiAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT25lZGltTWV0cm9wb2xpc1N0ZXBwZXI7XG4gIFxuICBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhcmFtX3N0YXRlID0gdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdO1xuICAgICAgdmFyIHBhcmFtX3Byb3Bvc2FsID0gdGhpcy5nZW5lcmF0ZV9wcm9wb3NhbChwYXJhbV9zdGF0ZSwgdGhpcy5wcm9wX2xvZ19zY2FsZSk7XG4gICAgICBpZihwYXJhbV9wcm9wb3NhbCA8IHRoaXMubG93ZXIgfHwgcGFyYW1fcHJvcG9zYWwgPiB0aGlzLnVwcGVyKSB7XG4gICAgICAgIC8vIE91dHNpZGUgb2YgbGltaXRzIG9mIHRoZSBwYXJhbWV0ZXIsIHJlamVjdCB0aGUgcHJvcG9zYWwgXG4gICAgICAgIC8vIGFuZCBzdGF5IGF0IHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICAgfSBlbHNlIHsgLy8gbWFrZSBhIE1ldHJvcG9saXMgc3RlcFxuICAgICAgICB2YXIgY3Vycl9sb2dfZGVucyA9IHRoaXMubG9nX3Bvc3QoKTtcbiAgICAgICAgdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdID0gcGFyYW1fcHJvcG9zYWw7XG4gICAgICAgIHZhciBwcm9wX2xvZ19kZW5zID0gdGhpcy5sb2dfcG9zdCgpO1xuICAgICAgICB2YXIgYWNjZXB0X3Byb2IgPSBNYXRoLmV4cChwcm9wX2xvZ19kZW5zIC0gY3Vycl9sb2dfZGVucyk7XG4gICAgICAgIGlmKGFjY2VwdF9wcm9iID4gTWF0aC5yYW5kb20oKSkge1xuICAgICAgICAgIC8vIFdlIGRvIG5vdGhpbmcgYXMgdGhlIHN0YXRlIG9mIHBhcmFtIGhhcyBhbHJlYWR5IGJlZW4gY2hhbmdlZCB0byB0aGUgcHJvcG9zYWxcbiAgICAgICAgICBpZih0aGlzLmlzX2FkYXB0aW5nKSB0aGlzLmFjY2VwdGFuY2VfY291bnQrKyA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHN0YXRlIGJhY2sgdG8gdGhlIG9sZCBzdGF0ZSBvZiBwYXJhbVxuICAgICAgICAgIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXSA9IHBhcmFtX3N0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLmlzX2FkYXB0aW5nKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uc19zaW5jZV9hZGFwdGlvbiArKztcbiAgICAgICAgaWYodGhpcy5pdGVyYXRpb25zX3NpbmNlX2FkYXB0aW9uID49IHRoaXMuYmF0Y2hfc2l6ZSkgeyAvLyB0aGVuIGFkYXB0XG4gICAgICAgICAgdGhpcy5iYXRjaF9jb3VudCArKztcbiAgICAgICAgICB2YXIgbG9nX3NkX2FkanVzdG1lbnQgPSBcbiAgICAgICAgICAgIE1hdGgubWluKHRoaXMubWF4X2FkYXB0YXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsX2FkYXB0YXRpb24gLyBNYXRoLnNxcnQodGhpcy5iYXRjaF9jb3VudCkpO1xuICAgICAgICAgIGlmKHRoaXMuYWNjZXB0YW5jZV9jb3VudCAvIHRoaXMuYmF0Y2hfc2l6ZSA+IHRoaXMudGFyZ2V0X2FjY2VwdF9yYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BfbG9nX3NjYWxlICs9IGxvZ19zZF9hZGp1c3RtZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BfbG9nX3NjYWxlIC09IGxvZ19zZF9hZGp1c3RtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFjY2VwdGFuY2VfY291bnQgPSAwO1xuICAgICAgICAgIHRoaXMuaXRlcmF0aW9uc19zaW5jZV9hZGFwdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV07XG4gIH07XG4gIFxuICBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RhcnRfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNfYWRhcHRpbmcgPSB0cnVlO1xuICB9O1xuICBcbiAgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLnN0b3BfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNfYWRhcHRpbmcgPSBmYWxzZTtcbiAgfTtcbiAgXG4gIE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BfbG9nX3NjYWxlOiB0aGlzLnByb3BfbG9nX3NjYWxlLFxuICAgICAgaXNfYWRhcHRpbmc6IHRoaXMuaXNfYWRhcHRpbmcsXG4gICAgICBhY2NlcHRhbmNlX2NvdW50OiB0aGlzLmFjY2VwdGFuY2VfY291bnQsXG4gICAgICBpdGVyYXRpb25zX3NpbmNlX2FkYXB0aW9uOiB0aGlzLml0ZXJhdGlvbnNfc2luY2VfYWRhcHRpb24sXG4gICAgICBiYXRjaF9jb3VudDogdGhpcy5iYXRjaF9jb3VudFxuICAgIH07XG4gIH07XG4gIFxuICBcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHJldHVybmluZyBhIE5vcm1hbCBwcm9wb3NhbC5cbiAgICovXG4gIHZhciBub3JtYWxfcHJvcG9zYWwgPSBmdW5jdGlvbihwYXJhbV9zdGF0ZSwgcHJvcF9sb2dfc2NhbGUpIHtcbiAgICByZXR1cm4gcm5vcm0ocGFyYW1fc3RhdGUgLCBNYXRoLmV4cChwcm9wX2xvZ19zY2FsZSkpO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAYXVnbWVudHMge09uZWRpbU1ldHJvcG9saXNTdGVwcGVyfVxuICAgKiBBIFwic3ViY2xhc3NcIiBvZiBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciBtYWtpbmcgY29udGlub3VzIE5vcm1hbCBwcm9wb3NhbHMuXG4gICAqL1xuICB2YXIgUmVhbE1ldHJvcG9saXNTdGVwcGVyID0gZnVuY3Rpb24ocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIHtcbiAgICBPbmVkaW1NZXRyb3BvbGlzU3RlcHBlci5jYWxsKHRoaXMsIHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zLCBub3JtYWxfcHJvcG9zYWwpO1xuICB9O1xuICBcbiAgUmVhbE1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlKTsgXG4gIFJlYWxNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWFsTWV0cm9wb2xpc1N0ZXBwZXI7XG4gIFxuICAvKipcbiAgICogRnVuY3Rpb24gcmV0dXJuaW5nIGEgZGlzY3JldGl6ZWQgTm9ybWFsIHByb3Bvc2FsLlxuICAgKi9cbiAgdmFyIGRpc2NyZXRlX25vcm1hbF9wcm9wb3NhbCA9IGZ1bmN0aW9uKHBhcmFtX3N0YXRlLCBwcm9wX2xvZ19zY2FsZSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHJub3JtKHBhcmFtX3N0YXRlICwgTWF0aC5leHAocHJvcF9sb2dfc2NhbGUpKSk7XG4gIH07XG4gIFxuICAgIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQGF1Z21lbnRzIHtPbmVkaW1NZXRyb3BvbGlzU3RlcHBlcn1cbiAgICogQSBcInN1YmNsYXNzXCIgb2YgT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIgbWFraW5nIGRpc2NyZXRpemVkIE5vcm1hbCBwcm9wb3NhbHMuXG4gICAqL1xuICB2YXIgSW50TWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykge1xuICAgIE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIGRpc2NyZXRlX25vcm1hbF9wcm9wb3NhbCk7XG4gIH07XG4gIFxuICBJbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9uZWRpbU1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSk7IFxuICBJbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbnRNZXRyb3BvbGlzU3RlcHBlcjtcbiAgXG4gIFxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBpbXBsZW1lbnRzIHtTdGVwcGVyfVxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgbWV0cm9wb2xpcyBzdGVwIGluXG4gICAqIHRoZSBBZGFwdGl2ZSBNZXRyb3BvbGlzLVdpdGhpbi1HaWJicyBhbGdvcml0aG0gaW4gXCJFeGFtcGxlcyBvZiBBZGFwdGl2ZSBNQ01DXCJcbiAgICogYnkgUm9iZXJ0cyBhbmQgUm9zZW50aGFsICgyMDA4KSBmb3IgcG9zc2libHkgbXVsdGlkaW1lbnNpb25hbCBhcnJheXMuIFRoYXRcbiAgICogaXMsIGluc3RlYWQgb2YganVzdCB0YWtpbmcgYSBzdGVwIGZvciBhIG9uZS1kaW1lbnNpb25hbCBwYXJhbWV0ZXIgbGlrZSBcbiAgICogT25lZGltTWV0cm9wb2xpc1N0ZXBwZXIsIHRoaXMgU3RlcHBlciBpcyByZXNwb25zaWJsZSBmb3IgdGFraW5nIHN0ZXBzIFxuICAgKiBmb3IgYSBtdWx0aWRpbWVuc2lvbmFsIGFycmF5LiBJdCdzIHN0aWxsIHByZXR0eSBkdW1iIGFuZCBqdXN0IHRha2VzXG4gICAqIG9uZS1kaW1lbnNpb25hbCBzdGVwcyBmb3IgZWFjaCBwYXJhbWV0ZXIgY29tcG9uZW50LCB0aG91Z2guXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbiBmb3IgYSBcbiAgICogICBtdWx0aWRpbWVuc2lvbmFsIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gbG9nX3Bvc3QgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbG9nIGRlbnNpdHkgdGhhdCBkZXBlbmRzIG9uIHRoZSBzdGF0ZS4gXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci5cbiAgICogQHBhcmFtIFN1YlN0ZXBwZXIgLSBhIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZSBvZiBvbmUgZGltZW5zaW9uYWwgU3RlcHBlciB0byBhcHBseSBvblxuICAgKiAgIGFsbCB0aGUgY29tcG9uZW50cyBvZiB0aGUgbXVsdGlkaW1lbnNpb25hbCBwYXJhbWV0ZXIuXG4gICovXG4gIHZhciBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyID0gZnVuY3Rpb24ocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMsIFN1YlN0ZXBwZXIpIHtcbiAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpO1xuICAgIFxuICAgIHZhciBwYXJhbV9uYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKTtcbiAgICBpZihwYXJhbV9uYW1lcy5sZW5ndGggICE9IDEpIHtcbiAgICAgIHRocm93IFwiTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlciBjYW4ndCBoYW5kbGUgbW9yZSB0aGFuIG9uZSBwYXJhbWV0ZXIuXCI7XG4gICAgfVxuICAgIHRoaXMucGFyYW1fbmFtZSA9IHBhcmFtX25hbWVzWzBdO1xuICAgIHZhciBwYXJhbSA9IHRoaXMucGFyYW1zW3RoaXMucGFyYW1fbmFtZV07XG4gICAgdGhpcy5sb3dlciA9IHBhcmFtLmxvd2VyO1xuICAgIHRoaXMudXBwZXIgPSBwYXJhbS51cHBlcjtcbiAgICB0aGlzLmRpbSA9IHBhcmFtLmRpbTtcbiAgXG4gICAgdGhpcy5wcm9wX2xvZ19zY2FsZSAgICAgPSBnZXRfbXVsdGlkaW1fb3B0aW9uKFwicHJvcF9sb2dfc2NhbGVcIiwgb3B0aW9ucywgdGhpcy5kaW0sIDApO1xuICAgIHRoaXMuYmF0Y2hfc2l6ZSAgICAgICAgID0gZ2V0X211bHRpZGltX29wdGlvbihcImJhdGNoX3NpemVcIiwgb3B0aW9ucywgdGhpcy5kaW0sIDUwKTtcbiAgICB0aGlzLm1heF9hZGFwdGF0aW9uICAgICA9IGdldF9tdWx0aWRpbV9vcHRpb24oXCJtYXhfYWRhcHRhdGlvblwiLCBvcHRpb25zLCB0aGlzLmRpbSwgMC4zMyk7XG4gICAgdGhpcy5pbml0aWFsX2FkYXB0YXRpb24gPSBnZXRfbXVsdGlkaW1fb3B0aW9uKFwiaW5pdGlhbF9hZGFwdGF0aW9uXCIsIG9wdGlvbnMsIHRoaXMuZGltLCAxLjApO1xuICAgIHRoaXMudGFyZ2V0X2FjY2VwdF9yYXRlID0gZ2V0X211bHRpZGltX29wdGlvbihcInRhcmdldF9hY2NlcHRfcmF0ZVwiLCBvcHRpb25zLCB0aGlzLmRpbSwgMC40NCk7XG4gICAgdGhpcy5pc19hZGFwdGluZyAgICAgICAgPSBnZXRfbXVsdGlkaW1fb3B0aW9uKFwiaXNfYWRhcHRpbmdcIiwgb3B0aW9ucywgdGhpcy5kaW0sIHRydWUpO1xuICAgIFxuICAgIC8vIFRoaXMgaGFjayBiZWxvdyBpcyBhIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYW4gYXJyYXkgb2YgXG4gICAgLy8gb25lIGRpbWVuc2lvbmFsIHN0ZXBwZXJzIGFjY29yZGluZyB0byBkaW0uXG4gICAgdmFyIGNyZWF0ZV9zdWJzdGVwcGVycyA9IFxuICAgICAgZnVuY3Rpb24oZGltLCBzdWJzdGF0ZSwgbG9nX3Bvc3QsIHByb3BfbG9nX3NjYWxlLCBiYXRjaF9zaXplLCBtYXhfYWRhcHRhdGlvbiwgaW5pdGlhbF9hZGFwdGF0aW9uLCB0YXJnZXRfYWNjZXB0X3JhdGUsIGlzX2FkYXB0aW5nKSB7XG4gICAgICB2YXIgc3Vic3RlcHBlcnMgPSBbXTtcbiAgICAgIGlmKGRpbS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRpbVswXTsgaSsrKSB7XG4gICAgICAgICAgdmFyIHN1Ym9wdGlvbnMgPSB7cHJvcF9sb2dfc2NhbGU6IHByb3BfbG9nX3NjYWxlW2ldLCBiYXRjaF9zaXplOiBiYXRjaF9zaXplW2ldLFxuICAgICAgICAgICAgbWF4X2FkYXB0YXRpb246IG1heF9hZGFwdGF0aW9uW2ldLCBpbml0aWFsX2FkYXB0YXRpb246IGluaXRpYWxfYWRhcHRhdGlvbltpXSxcbiAgICAgICAgICAgIHRhcmdldF9hY2NlcHRfcmF0ZTogdGFyZ2V0X2FjY2VwdF9yYXRlW2ldLCBpc19hZGFwdGluZzogaXNfYWRhcHRpbmdbaV19O1xuICAgICAgICAgICAgdmFyIHN1YnBhcmFtID0ge307XG4gICAgICAgICAgICBzdWJwYXJhbVtpXSA9IGRlZXBfY2xvbmUocGFyYW0pO1xuICAgICAgICAgICAgc3VicGFyYW1baV0uZGltID0gWzFdOyAvLyBBcyB0aGlzIHNob3VsZCBub3cgYmUgYSBvbmUtZGltIHBhcmFtZXRlclxuICAgICAgICAgICAgZGVsZXRlIHN1YnBhcmFtW2ldLmluaXQ7IC8vIEFzIGl0IHNvdWxkIG5vdCBiZSBuZWVkZWRcbiAgICAgICAgICBzdWJzdGVwcGVyc1tpXSA9IG5ldyBTdWJTdGVwcGVyKHN1YnBhcmFtLCBzdWJzdGF0ZSwgbG9nX3Bvc3QsIHN1Ym9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHtcbiAgICAgICAgICBzdWJzdGVwcGVyc1tpXSA9IGNyZWF0ZV9zdWJzdGVwcGVycyhkaW0uc2xpY2UoMSksIHN1YnN0YXRlW2ldLCBsb2dfcG9zdCwgcHJvcF9sb2dfc2NhbGVbaV0sIFxuICAgICAgICAgICAgYmF0Y2hfc2l6ZVtpXSwgbWF4X2FkYXB0YXRpb25baV0sIGluaXRpYWxfYWRhcHRhdGlvbltpXSwgdGFyZ2V0X2FjY2VwdF9yYXRlW2ldLCBpc19hZGFwdGluZ1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdGVwcGVycztcbiAgICB9O1xuICAgIFxuICAgIHRoaXMuc3Vic3RlcHBlcnMgPSBjcmVhdGVfc3Vic3RlcHBlcnModGhpcy5kaW0sIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXSwgdGhpcy5sb2dfcG9zdCxcbiAgICAgIHRoaXMucHJvcF9sb2dfc2NhbGUsIHRoaXMuYmF0Y2hfc2l6ZSwgdGhpcy5tYXhfYWRhcHRhdGlvbiwgdGhpcy5pbml0aWFsX2FkYXB0YXRpb24sXG4gICAgICB0aGlzLnRhcmdldF9hY2NlcHRfcmF0ZSwgdGhpcy5pc19hZGFwdGluZyk7XG4gICAgXG4gIH07XG4gIFxuICBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RlcHBlci5wcm90b3R5cGUpOyBcbiAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyO1xuICBcbiAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEdvIHRocm91Z2ggdGhlIHN1YnN0ZXBwZXJzIGluIGEgcmFuZG9tIG9yZGVyIGFuZCBjYWxsIHN0ZXAoKSBvbiB0aGVtLlxuICAgIHJldHVybiBuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uKHN1YnN0ZXBwZXIpIHtyZXR1cm4gc3Vic3RlcHBlci5zdGVwKCk7IH0pO1xuICB9O1xuICBcbiAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RhcnRfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIG5lc3RlZF9hcnJheV9hcHBseSh0aGlzLnN1YnN0ZXBwZXJzLCBmdW5jdGlvbihzdWJzdGVwcGVyKSB7c3Vic3RlcHBlci5zdGFydF9hZGFwdGF0aW9uKCk7IH0pO1xuICB9O1xuICBcbiAgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgbmVzdGVkX2FycmF5X2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uKHN1YnN0ZXBwZXIpIHtzdWJzdGVwcGVyLnN0b3BfYWRhcHRhdGlvbigpOyB9KTtcbiAgfTtcbiAgXG4gIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmVzdGVkX2FycmF5X2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uKHN1YnN0ZXBwZXIpIHtcbiAgICAgIHJldHVybiBzdWJzdGVwcGVyLmluZm8oKTsgXG4gICAgfSk7XG4gIH07XG4gIFxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBhdWdtZW50cyB7TXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcn1cbiAgICogQSBcInN1YmNsYXNzXCIgb2YgTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlciBtYWtpbmcgY29udGlub3VzIE5vcm1hbCBwcm9wb3NhbHMuXG4gICAqL1xuICB2YXIgTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykge1xuICAgIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucywgUmVhbE1ldHJvcG9saXNTdGVwcGVyKTtcbiAgfTtcbiAgXG4gIE11bHRpUmVhbENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTXVsdGlkaW1Db21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUpOyBcbiAgTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXI7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAYXVnbWVudHMge011bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXJ9XG4gICAqIEEgXCJzdWJjbGFzc1wiIG9mIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIgbWFraW5nIGRpc2NyZXRpemVkIE5vcm1hbCBwcm9wb3NhbHMuXG4gICAqLyAgICBcbiAgdmFyIE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykge1xuICAgIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucywgSW50TWV0cm9wb2xpc1N0ZXBwZXIpO1xuICB9O1xuICBcbiAgTXVsdGlJbnRDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlKTsgXG4gIE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTXVsdGlJbnRDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcjtcbiAgXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQGltcGxlbWVudHMge1N0ZXBwZXJ9XG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIGEgc3RlcCBmb3IgYSBiaW5hcnkgcGFyYW1ldGVyLlxuICAgKiBUaGlzIGlzIGRvbmUgYnkgZXZhbHVhdGluZyB0aGUgbG9nIHBvc3RlcmlvciBmb3IgYm90aCBzdGF0ZXMgb2YgdGhlXG4gICAqIHBhcmFtZXRlciBhbmQgdGhlbiBzZWxlY3RpbmcgYSBzdGF0ZSByYW5kb21seSB3aXRoIHByb2JhYmlsaXR5IHJlbGF0aXZlIFxuICAgKiB0byB0aGUgcG9zdGVyaW9yIG9mIGVhY2ggc3RhdGUuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbi5cbiAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gbG9nX3Bvc3QgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbG9nIGRlbnNpdHkgdGhhdCBkZXBlbmRzIG9uIHRoZSBzdGF0ZS4gXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci5cbiAgKi9cbiAgdmFyIEJpbmFyeVN0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykge1xuICAgIFN0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCk7XG4gICAgdmFyIHBhcmFtX25hbWVzID0gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICAgIGlmKHBhcmFtX25hbWVzLmxlbmd0aCAgPT0gMSkge1xuICAgICAgdGhpcy5wYXJhbV9uYW1lID0gcGFyYW1fbmFtZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiQmluYXJ5U3RlcHBlciBjYW4ndCBoYW5kbGUgbW9yZSB0aGFuIG9uZSBwYXJhbWV0ZXIuXCI7XG4gICAgfVxuICB9O1xuICBcbiAgQmluYXJ5U3RlcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN0ZXBwZXIucHJvdG90eXBlKTsgXG4gIEJpbmFyeVN0ZXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmluYXJ5U3RlcHBlcjtcbiAgXG4gIEJpbmFyeVN0ZXBwZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRlW3RoaXMucGFyYW1fbmFtZV0gPSAwO1xuICAgIHZhciB6ZXJvX2xvZ19kZW5zID0gdGhpcy5sb2dfcG9zdCgpO1xuICAgIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXSA9IDE7XG4gICAgdmFyIG9uZV9sb2dfZGVucyA9IHRoaXMubG9nX3Bvc3QoKTtcbiAgICB2YXIgbWF4X2xvZ19kZW5zID0gTWF0aC5tYXgoemVyb19sb2dfZGVucywgb25lX2xvZ19kZW5zKTtcbiAgICB6ZXJvX2xvZ19kZW5zIC09IG1heF9sb2dfZGVucztcbiAgICBvbmVfbG9nX2RlbnMgLT0gbWF4X2xvZ19kZW5zO1xuICAgIHZhciB6ZXJvX3Byb2IgPSBNYXRoLmV4cCh6ZXJvX2xvZ19kZW5zIC0gTWF0aC5sb2coIE1hdGguZXhwKHplcm9fbG9nX2RlbnMpICsgTWF0aC5leHAob25lX2xvZ19kZW5zKSApICk7XG4gICAgaWYoTWF0aC5yYW5kb20oKSA8IHplcm9fcHJvYikge1xuICAgICAgdGhpcy5zdGF0ZVt0aGlzLnBhcmFtX25hbWVdID0gMDtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gLy8gZWxzZSBrZWVwIHRoZSBwYXJhbSBhdCAxIC5cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgXG4gICAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAaW1wbGVtZW50cyB7U3RlcHBlcn1cbiAgICogSnVzdCBsaWtlIE11bHRpZGltQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIgdGhpcyBTdGVwcGVyIHRha2VzIGEgc3RlcHMgZm9yXG4gICAqIGEgbXVsdGlkaW1lbnNpb25hbCBwYXJhbWV0ZXIgYnkgdXBkYXRpbmcgZWFjaCBjb21wb25lbnQgaW4gdHVybi4gVGhlIGRpZmZlcmVuY2VcbiAgICogaXMgdGhhdCB0aGlzIHN0ZXBwZXIgd29ya3Mgb24gYmluYXJ5IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbiBmb3IgYSBcbiAgICogICBtdWx0aWRpbWVuc2lvbmFsIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gbG9nX3Bvc3QgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbG9nIGRlbnNpdHkgdGhhdCBkZXBlbmRzIG9uIHRoZSBzdGF0ZS4gXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci5cbiAgKi9cbiAgdmFyIEJpbmFyeUNvbXBvbmVudFN0ZXBwZXIgPSBmdW5jdGlvbihwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCwgb3B0aW9ucykge1xuICAgIFN0ZXBwZXIuY2FsbCh0aGlzLCBwYXJhbXMsIHN0YXRlLCBsb2dfcG9zdCk7XG4gICAgXG4gICAgdmFyIHBhcmFtX25hbWVzID0gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICAgIGlmKHBhcmFtX25hbWVzLmxlbmd0aCAgPT0gMSkge1xuICAgICAgdGhpcy5wYXJhbV9uYW1lID0gcGFyYW1fbmFtZXNbMF07XG4gICAgICB2YXIgcGFyYW0gPSB0aGlzLnBhcmFtc1t0aGlzLnBhcmFtX25hbWVdO1xuICAgICAgdGhpcy5kaW0gPSBwYXJhbS5kaW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiQmluYXJ5Q29tcG9uZW50U3RlcHBlciBjYW4ndCBoYW5kbGUgbW9yZSB0aGFuIG9uZSBwYXJhbWV0ZXIuXCI7XG4gICAgfVxuICAgIFxuICAgIHZhciBjcmVhdGVfc3Vic3RlcHBlcnMgPSBcbiAgICAgIGZ1bmN0aW9uKGRpbSwgc3Vic3RhdGUsIGxvZ19wb3N0KSB7XG4gICAgICB2YXIgc3Vic3RlcHBlcnMgPSBbXTtcbiAgICAgIHZhciBpO1xuICAgICAgaWYoZGltLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBkaW1bMF07IGkrKykge1xuICAgICAgICAgIHZhciBzdWJwYXJhbXMgPSB7fTtcbiAgICAgICAgICBzdWJwYXJhbXNbaV0gPSBwYXJhbTtcbiAgICAgICAgICBzdWJzdGVwcGVyc1tpXSA9IG5ldyBCaW5hcnlTdGVwcGVyKHN1YnBhcmFtcywgc3Vic3RhdGUsIGxvZ19wb3N0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgZGltWzBdOyBpKyspIHtcbiAgICAgICAgICBzdWJzdGVwcGVyc1tpXSA9IGNyZWF0ZV9zdWJzdGVwcGVycyhkaW0uc2xpY2UoMSksIHN1YnN0YXRlW2ldLCBsb2dfcG9zdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdGVwcGVycztcbiAgICB9O1xuICAgIFxuICAgIHRoaXMuc3Vic3RlcHBlcnMgPSBjcmVhdGVfc3Vic3RlcHBlcnModGhpcy5kaW0sIHRoaXMuc3RhdGVbdGhpcy5wYXJhbV9uYW1lXSwgdGhpcy5sb2dfcG9zdCk7XG4gIH07XG4gIFxuICBCaW5hcnlDb21wb25lbnRTdGVwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RlcHBlci5wcm90b3R5cGUpOyBcbiAgQmluYXJ5Q29tcG9uZW50U3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaW5hcnlDb21wb25lbnRTdGVwcGVyO1xuICBcbiAgQmluYXJ5Q29tcG9uZW50U3RlcHBlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEdvIHRocm91Z2ggdGhlIHN1YnN0ZXBwZXJzIGluIGEgcmFuZG9tIG9yZGVyIGFuZCBjYWxsIHN0ZXAoKSBvbiB0aGVtLlxuICAgIHJldHVybiBuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5KHRoaXMuc3Vic3RlcHBlcnMsIGZ1bmN0aW9uKHN1YnN0ZXBwZXIpIHtyZXR1cm4gc3Vic3RlcHBlci5zdGVwKCk7IH0pO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAaW1wbGVtZW50cyB7U3RlcHBlcn1cbiAgICogVGhpcyBzdGVwcGVyIGNhbiBiZSByZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgc3RlcCBmb3Igb25lIG9yIG1vcmUgcGFyYW1ldGVycy5cbiAgICogRm9yIHJlYWwgYW5kIGludCBwYXJhbWV0ZXJzIGl0IHRha2VzIE1ldHJvcG9saXMgd2l0aGluIEdpYmJzIHN0ZXBzLCBhbmQgZm9yIFxuICAgKiBiaW5hcnkgcGFyYW1ldGVycyBpdCBkb2VzIGV2YWx1YXRlcyB0aGUgcG9zdGVyaW9yIGZvciBib3RoIHBhcmFtdGVyIHZhbHVlcyBhbmRcbiAgICogcmFuZG9tbHkgY2hhbmdlcyB0byBhIGNlcnRhaW4gdmFsdWUgcHJvcG9ydGlvbmFsbHkgdG8gdGhhdCB2YWx1ZSdzIHBvc3RlcmlvclxuICAgKiAodGhpcyBpcyBhbHNvIGRvbmUgZm9yIGVhY2ggcGFyYW1ldGVyLCBzbyBhbHNvIGEgKiB3aXRoaW4gR2liYnMgYXBwcm9hY2gpLlxuICAgKiBUaGlzIHN0ZXBwZXIgaXMgYWxzbyBhZGFwdGl2ZSBhbmQgY2FuIGJlIGVmZmljaWVudCB3aGVuIHRoZSBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICAgKiBhcmUgbm90IHRvbyBoaWdoIGFuZCB0aGUgY29ycmVsYXRpb25zIGJldHdlZW4gcGFyYW1ldGVycyBhcmUgbG93LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IHdpdGggYSBvbmUgb3IgbW9yZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbnNcbiAgICogQHBhcmFtIHN0YXRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHN0YXRlIG9mIGFsbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gbG9nX3Bvc3QgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbG9nIGRlbnNpdHkgdGhhdCBkZXBlbmRzIG9uIHRoZSBzdGF0ZS4gXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc3RlcHBlci5cbiAgKi9cbiAgdmFyIEFtd2dTdGVwcGVyID0gZnVuY3Rpb24ocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIHtcbiAgICBTdGVwcGVyLmNhbGwodGhpcywgcGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QpO1xuICAgIHRoaXMucGFyYW1fbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7XG4gICAgdGhpcy5zdWJzdGVwcGVycyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnBhcmFtX25hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFyYW0gPSBwYXJhbXNbdGhpcy5wYXJhbV9uYW1lc1tpXV07XG4gICAgICB2YXIgU2VsZWN0U3RlcHBlcjtcbiAgICAgIHN3aXRjaCAocGFyYW0udHlwZSkge1xuICAgICAgICBjYXNlIFwicmVhbFwiOlxuICAgICAgICAgIGlmKGFycmF5X2VxdWFsKHBhcmFtLmRpbSwgWzFdKSkge1xuICAgICAgICAgICAgU2VsZWN0U3RlcHBlciA9IFJlYWxNZXRyb3BvbGlzU3RlcHBlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2VsZWN0U3RlcHBlciA9IE11bHRpUmVhbENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImludFwiOlxuICAgICAgICAgIGlmKGFycmF5X2VxdWFsKHBhcmFtLmRpbSwgWzFdKSkge1xuICAgICAgICAgICAgU2VsZWN0U3RlcHBlciA9IEludE1ldHJvcG9saXNTdGVwcGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZWxlY3RTdGVwcGVyID0gTXVsdGlJbnRDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgICBpZihhcnJheV9lcXVhbChwYXJhbS5kaW0sIFsxXSkpIHtcbiAgICAgICAgICAgIFNlbGVjdFN0ZXBwZXIgPSBCaW5hcnlTdGVwcGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZWxlY3RTdGVwcGVyID0gQmluYXJ5Q29tcG9uZW50U3RlcHBlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgXCJBbXdnU3RlcHBlciBjYW4ndCBoYW5kbGUgcGFyYW1ldGVyIFwiICsgdGhpcy5wYXJhbV9uYW1lc1tpXSAgK1wiIHdpdGggdHlwZSBcIiArIHBhcmFtLnR5cGU7IFxuICAgICAgfVxuICAgICAgdmFyIHBhcmFtX29iamVjdF93cmFwID0ge307XG4gICAgICBwYXJhbV9vYmplY3Rfd3JhcFt0aGlzLnBhcmFtX25hbWVzW2ldXSA9IHBhcmFtO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgcGFyYW1fb3B0aW9ucyA9IG9wdGlvbnMucGFyYW1zICYmIG9wdGlvbnMucGFyYW1zW3RoaXMucGFyYW1fbmFtZXNbaV1dIHx8IHt9O1xuICAgICAgcGFyYW1fb3B0aW9ucy5wcm9wX2xvZ19zY2FsZSAgICAgPSBwYXJhbV9vcHRpb25zLnByb3BfbG9nX3NjYWxlICAgICB8fCBvcHRpb25zLnByb3BfbG9nX3NjYWxlOyBcbiAgICAgIHBhcmFtX29wdGlvbnMuYmF0Y2hfc2l6ZSAgICAgICAgID0gcGFyYW1fb3B0aW9ucy5iYXRjaF9zaXplICAgICAgICAgfHwgb3B0aW9ucy5iYXRjaF9zaXplOyBcbiAgICAgIHBhcmFtX29wdGlvbnMubWF4X2FkYXB0YXRpb24gICAgID0gcGFyYW1fb3B0aW9ucy5tYXhfYWRhcHRhdGlvbiAgICAgfHwgb3B0aW9ucy5tYXhfYWRhcHRhdGlvbjtcbiAgICAgIHBhcmFtX29wdGlvbnMuaW5pdGlhbF9hZGFwdGF0aW9uID0gcGFyYW1fb3B0aW9ucy5pbml0aWFsX2FkYXB0YXRpb24gfHwgb3B0aW9ucy5pbml0aWFsX2FkYXB0YXRpb247XG4gICAgICBwYXJhbV9vcHRpb25zLnRhcmdldF9hY2NlcHRfcmF0ZSA9IHBhcmFtX29wdGlvbnMudGFyZ2V0X2FjY2VwdF9yYXRlIHx8IG9wdGlvbnMudGFyZ2V0X2FjY2VwdF9yYXRlOyBcbiAgICAgIHBhcmFtX29wdGlvbnMuaXNfYWRhcHRpbmcgICAgICAgID0gcGFyYW1fb3B0aW9ucy5pc19hZGFwdGluZyAgICAgICAgfHwgb3B0aW9ucy5pc19hZGFwdGluZzsgXG4gICAgICB0aGlzLnN1YnN0ZXBwZXJzW2ldID0gbmV3IFNlbGVjdFN0ZXBwZXIocGFyYW1fb2JqZWN0X3dyYXAsIHN0YXRlLCBsb2dfcG9zdCwgcGFyYW1fb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuICBcbiAgQW13Z1N0ZXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdGVwcGVyLnByb3RvdHlwZSk7IFxuICBBbXdnU3RlcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBbXdnU3RlcHBlcjtcbiAgXG4gIEFtd2dTdGVwcGVyLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgc2h1ZmZsZV9hcnJheSh0aGlzLnN1YnN0ZXBwZXJzKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzdGVwcGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdWJzdGVwcGVyc1tpXS5zdGVwKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9O1xuICBcbiAgQW13Z1N0ZXBwZXIucHJvdG90eXBlLnN0YXJ0X2FkYXB0YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzdGVwcGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdWJzdGVwcGVyc1tpXS5zdGFydF9hZGFwdGF0aW9uKCk7XG4gICAgfVxuICB9O1xuICBcbiAgQW13Z1N0ZXBwZXIucHJvdG90eXBlLnN0b3BfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnN0ZXBwZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN1YnN0ZXBwZXJzW2ldLnN0b3BfYWRhcHRhdGlvbigpO1xuICAgIH0gXG4gIH07XG4gIFxuICBBbXdnU3RlcHBlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmZvID0ge307XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vic3RlcHBlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluZm9bdGhpcy5wYXJhbV9uYW1lc1tpXV0gPSB0aGlzLnN1YnN0ZXBwZXJzW2ldLmluZm8oKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm87XG4gIH07XG4gIFxuICBcbiAgXG4gIC8vLy8vLy8vLy8vIFNhbXBsZXIgRnVuY3Rpb25zIC8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgXG4gICAvKipcbiAgICogQGludGVyZmFjZVxuICAgKiBXaGlsZSB5b3UgY291bGQgZml0IGEgbW9kZWwgYnkgcGFzdGluZyB0b2dldGhlciBTdGVwcGVycywgYVxuICAvLyBTYW1wbGVyIGlzIGhlcmUgaXMgYSBjb252ZW5pZW5jZSBjbGFzcyB3aGVyZSBhbiBpbnN0YW5jZSBvZiBTYW1wbGVyXG4gIC8vIHNldHMgdXAgdGhlIFN0ZXBwZXJzLCBjaGVja3MgdGhlIHBhcmFtZXRlciBkZWZpbml0aW9uLFxuICAvLyBhbmQgbWFuYWdlcyB0aGUgc2FtcGxpbmcuIFRoaXMgaGVyZSBkZWZpbmVzIHRoZSBTYW1wbGVyIFwiaW50ZXJmYWNlXCIuXG4gICAqIEBpbnRlcmZhY2VcbiAgICogQHBhcmFtIHBhcmFtcyAtIEFuIG9iamVjdCB3aXRoIHBhcmFtZXRlciBkZWZpbml0aW9ucywgZm9yIGV4YW1wbGU6XG4gICAqICAge1wibXVcIjoge1widHlwZVwiOiBcInJlYWxcIn0sIFwic2lnbWFcIjoge1widHlwZVwiOiBcInJlYWxcIiwgXCJsb3dlclwiID0gMH19XG4gICAqICAgVGhlIHBhcmFtZXRlciBkZWZpbml0aW9ucyBkb2Vzbid0IGhhdmUgdG8gYmUgXCJjb21wbGV0ZVwiIGFuZCBwcm9wZXJ0aWVzXG4gICAqICAgbGVmdCBvdXQgKGxpa2UgbG93ZXIgYW5kIHVwcGVyKSB3aWxsIGJlIGZpbGxlZCBpbiBieSBkZWZhdWx0cy5cbiAgICogQHBhcmFtIGxvZ19wb3N0IC0gQSBmdW5jdGlvbiB3aXRoIHNpZ25hdHVyZSBmdW5jdGlvbihzdGF0ZSwgZGF0YSkuIEhlcmVcbiAgICogICBzdGF0ZSB3aWxsIGJlIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIHdpdGggZWFjaCBwYXJhbWV0ZXIgYXMgYSBcbiAgICogICBrZXkgYW5kIHRoZSBwYXJhbWV0ZXIgdmFsdWVzIGFzIG51bWJlcnMgb3IgYXJyYXlzLiBGb3IgZXhhbXBsZTpcbiAgICogICB7XCJtdVwiOiAzLCBcInNpZ21hXCI6IDEuNX0uIFRoZSBkYXRhIGFyZ3VtZW50IHdpbGwgYmUgdGhlIHNhbWUgb2JqZWN0IGFzIFxuICAgKiAgIHRoZSBkYXRhIGFyZ3VtZW50IGdpdmVuIGJlbG93LlxuICAgKiBAcGFyYW0gZGF0YSAtIGFuIG9iamVjdCB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBsb2dfcG9zdCBmdW5jdGlvblxuICAgKiAgIHdoZW4gc2FtcGxpbmcuXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucyB0byB0aGUgc2FtcGxlci5cbiAgICovXG4gIHZhciBTYW1wbGVyID0gZnVuY3Rpb24ocGFyYW1zLCBsb2dfcG9zdCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYXJhbV9uYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKTtcbiAgICBcbiAgICAvLyBTZXR0aW5nIGRlZmF1bHQgb3B0aW9ucyBpZiBub3QgcGFzc2VkIHRocm91Z2ggdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgdGhpcy5wYXJhbV9pbml0X2Z1biAgID0gZ2V0X29wdGlvbihcInBhcmFtX2luaXRfZnVuXCIsIG9wdGlvbnMsIHBhcmFtX2luaXRfZml4ZWQpO1xuICAgIHZhciB0aGlubmluZ19pbnRlcnZhbCA9IGdldF9vcHRpb24oXCJ0aGluXCIsIG9wdGlvbnMsIDEpO1xuICAgIHZhciBwYXJhbXNfdG9fbW9uaXRvciA9IGdldF9vcHRpb24oXCJtb25pdG9yXCIsIG9wdGlvbnMsIG51bGwpO1xuICAgIHRoaXMudGhpbih0aGlubmluZ19pbnRlcnZhbCk7XG4gICAgdGhpcy5tb25pdG9yKHBhcmFtc190b19tb25pdG9yKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIENvbXBsZXRpbmcgdGhlIHBhcmFtcyBhbmQgaW5pdGlhbGl6aW5nIHRoZSBzdGF0ZS5cbiAgICB0aGlzLnBhcmFtcyA9IGNvbXBsZXRlX3BhcmFtcyh0aGlzLnBhcmFtcywgdGhpcy5wYXJhbV9pbml0X2Z1bik7XG4gICAgdmFyIHN0YXRlID0ge307XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucGFyYW1fbmFtZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBzdGF0ZVt0aGlzLnBhcmFtX25hbWVzW2ldXSA9IHRoaXMucGFyYW1zW3RoaXMucGFyYW1fbmFtZXNbaV1dLmluaXQ7XG4gICAgfVxuICAgIHRoaXMubG9nX3Bvc3QgPSBmdW5jdGlvbigpIHsgXG4gICAgICByZXR1cm4gbG9nX3Bvc3Qoc3RhdGUsIGRhdGEpO1xuICAgIH07XG4gICAgLy8gUnVubmluZyB0aGUgbG9nX3Bvc3QgZnVuY3Rpb24gb25jZSBpbiBjYXNlIGl0IGZ1cnRoZXIgbW9kaWZpZXMgdGhlIHN0YXRlXG4gICAgLy8gZm9yIGV4YW1wbGUgYWRkaW5nIGRlcml2ZWQgcXVhbnRpdGllcy5cbiAgICB0aGlzLmxvZ19wb3N0KCk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuc3RlcHBlcnMgPSB0aGlzLmNyZWF0ZV9zdGVwcGVyX2Vuc2FtYmxlKHRoaXMucGFyYW1zLCB0aGlzLnN0YXRlLCB0aGlzLmxvZ19wb3N0LCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuICBcbiAgLyoqIFNob3VsZCByZXR1cm4gYSB2ZWN0b3Igb2Ygc3RlcHBlcnMgdGhhdCB3aGVuIGNhbGxlZCBcbiAgICogc2hvdWxkIHRha2UgYSBzdGVwIGluIHRoZSBwYXJhbWV0ZXIgc3BhY2UuXG4gICAqL1xuICBTYW1wbGVyLnByb3RvdHlwZS5jcmVhdGVfc3RlcHBlcl9lbnNhbWJsZSA9IGZ1bmN0aW9uKHN0YXRlLCBsb2dfcG9zdCl7XG4gICAgdGhyb3cgXCJFdmVyeSBTYW1wbGVyIG5lZWRzIHRvIGltcGxlbWVudCBjcmVhdGVfc3RlcHBlcl9lbnNhbWJsZSgpXCI7XG4gIH07XG4gIFxuICAvKiogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBpbmZvIGFib3V0IHRoZSBzdGF0ZSBvZiB0aGUgU2FtcGxlci5cbiAgICovIFxuICBTYW1wbGVyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtzdGF0ZTogdGhpcy5zdGF0ZSwgdGhpbjogdGhpcy50aGluLCBtb25pdG9yOiB0aGlzLm1vbml0b3IsXG4gICAgICAgICAgICBzdGVwcGVyczogdGhpcy5zdGVwcGVyc307XG4gIH07XG4gIFxuICAvKiogVGFrZXMgYSBzdGVwIGluIHRoZSBwYXJhbWV0ZXIgc3BhY2UuIFJldHVybnMgdGhlIG5ldyBzcGFjZVxuICAgKiBidXQgYWxzbyBtb2RpZmllcyB0aGUgc3RhdGUgaW4gcGxhY2UuXG4gICAqLyBcbiAgU2FtcGxlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHNodWZmbGVfYXJyYXkodGhpcy5zdGVwcGVycyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RlcHBlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3RlcHBlcnNbaV0uc3RlcCgpO1xuICAgIH1cbiAgICBpZihPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5sZW5ndGggPiBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcykubGVuZ3RoKSB7XG4gICAgICAvLyBUaGUgc3RhdGUgY29udGFpbnMgZGV2aXZlZCBxdWFudGl0aWVzIChub3Qgb25seSBwYXJhbWV0ZXJzKSBhbmQgd2VcbiAgICAgIC8vIG5lZWQgdG8gcnVuIHRoZSBsb2dfcG9zdCBvbmNlIG1vcmUgaW4gb3JkZXIgdG8gc2V0IHRoZSBkZXJpdmVkIHF1YW50aXRpZXNcbiAgICAgIC8vIGZvciB0aGUgZmluYWwgcGFyYW1ldGVyIHN0YXRlXG4gICAgICB0aGlzLmxvZ19wb3N0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIFRha2VzIG5faXRlcmF0aW9ucyBzdGVwcyBpbiB0aGUgcGFyYW1ldGVyIHNwYWNlIGFuZCByZXR1cm5zIHRoZW1cbiAgICogYXMgYW4gb2JqZWN0IG9mIGFycmF5cyB3aXRoIG9uZSBhcnJheSBwZXIgcGFyYW1ldGVyLiBGb3IgZXhhbXBsZTpcbiAgICoge211OiBbMSwgLTEsIDIsIDMsIC4uLl0sIHNpZ21hOiBbMSwgMiwgMiwgMSwgLi4uXX0uXG4gICAqIElmIHRoaW4gaXMgPiAxIHRoZW4gbl9pdGVyYXRpb25zIC8gdGhpbiBzYW1wbGVzIGFyZSByZXR1cm5lZC5cbiAgICovIFxuICBTYW1wbGVyLnByb3RvdHlwZS5zYW1wbGUgPSBmdW5jdGlvbihuX2l0ZXJhdGlvbnMpIHtcbiAgICAgIC8vIEluaXRpYWxpemluZyBjdXJyX3NhbXBsZSB3aGVyZSB0aGUgc2FtcGxlIGlzIGdvaW5nIHRvIGJlIHNhdmVkXG4gICAgICAvLyBhcyBhbiBvYmplY3QgY29udGFpbmluZyBvbmUgYXJyYXkgcGVyIHBhcmFtZXRlciB0byBiZSBtb25pdG9yZWQuXG4gICAgICB2YXIgaSwgaiwgbW9uaXRvcmVkX3BhcmFtcztcbiAgICAgIGlmKHRoaXMubW9uaXRvcmVkX3BhcmFtcyA9PT0gbnVsbCkge1xuICAgICAgICBtb25pdG9yZWRfcGFyYW1zID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb25pdG9yZWRfcGFyYW1zID0gdGhpcy5tb25pdG9yZWRfcGFyYW1zO1xuICAgICAgfVxuICAgICAgXG4gICAgICB2YXIgY3Vycl9zYW1wbGUgPSB7fTtcbiAgICAgIGZvcihqID0gMDsgaiA8IG1vbml0b3JlZF9wYXJhbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY3Vycl9zYW1wbGVbbW9uaXRvcmVkX3BhcmFtc1tqXV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yKGkgPSAwOyBpIDwgbl9pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgaWYoaSAlIHRoaXMudGhpbm5pbmdfaW50ZXJ2YWwgPT09IDApIHtcbiAgICAgICAgICBmb3IoaiA9IDA7IGogPCBtb25pdG9yZWRfcGFyYW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBtb25pdG9yZWRfcGFyYW1zW2pdO1xuICAgICAgICAgICAgY3Vycl9zYW1wbGVbcGFyYW1dLnB1c2goIGNsb25lX3BhcmFtX2RyYXcodGhpcy5zdGF0ZVtwYXJhbV0pICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJfc2FtcGxlO1xuICB9O1xuICBcbiAgLyoqXG4gICAqIFRha2VzIG5faXRlcmF0aW9uIHN0ZXBzIGluIHBhcmFtZXRlciBzcGFjZSBidXQgcmV0dXJucyBub3RoaW5nLlxuICAgKi8gXG4gIFNhbXBsZXIucHJvdG90eXBlLmJ1cm4gPSBmdW5jdGlvbihuX2l0ZXJhdGlvbnMpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbl9pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMuc3RlcCgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBTZXRzIHdoYXQgcGFyYW1ldGVycyBzaG91bGQgYmUgbW9uaXRvcmVkIGFuZCByZXR1cm5lZCB3aGVuIGNhbGxpbmdcbiAgICogc2FtcGxlLlxuICAgKi8gXG4gIFNhbXBsZXIucHJvdG90eXBlLm1vbml0b3IgPSBmdW5jdGlvbihwYXJhbXNfdG9fbW9uaXRvcikge1xuICAgICAgdGhpcy5tb25pdG9yZWRfcGFyYW1zID0gcGFyYW1zX3RvX21vbml0b3I7XG4gIH07XG4gIFxuICAvKipcbiAgICogU2V0cyB0aGUgdGhpbm5pbmcuIEZvciBleGFtcGxlIHRoaW4gPT0gMTAgbWVhbnMgdGhhdCBldmVyeSAxMHRoIHBvc3RlcmlvclxuICAgKiBkcmF3IHdpbGwgYmUga2VwdC5cbiAgICovIFxuICBTYW1wbGVyLnByb3RvdHlwZS50aGluID0gZnVuY3Rpb24odGhpbm5pbmdfaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnRoaW5uaW5nX2ludGVydmFsID0gdGhpbm5pbmdfaW50ZXJ2YWw7XG4gIH07XG4gIFxuICAvKipcbiAgICogU2V0cyBhZGFwdGF0aW9uIG9uLCBpZiBhcHBsaWNhYmxlLCBpbiBhbGwgc3RlcHBlcnMuXG4gICAqLyBcbiAgU2FtcGxlci5wcm90b3R5cGUuc3RhcnRfYWRhcHRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0ZXBwZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN0ZXBwZXJzW2ldLnN0YXJ0X2FkYXB0YXRpb24oKTtcbiAgICB9XG4gIH07XG4gIFxuICAgIC8qKlxuICAgKiBTZXRzIGFkYXB0YXRpb24gb2ZmLCBpZiBhcHBsaWNhYmxlLCBpbiBhbGwgc3RlcHBlcnMuXG4gICAqLyBcbiAgU2FtcGxlci5wcm90b3R5cGUuc3RvcF9hZGFwdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RlcHBlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3RlcHBlcnNbaV0uc3RvcF9hZGFwdGF0aW9uKCk7XG4gICAgfVxuICB9O1xuICBcbiAgIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQGltcGxlbWVudHMge1NhbXBsZXJ9XG4gICAqIFRoaXMgc2FtcGxlciB1c2VzIHRoZSBBbXdnU3RlcHBlciBhcyB0aGUgc3RlcHBlciBmdW5jdGlvbiB3aGljaCBpbXBsZW1lbnRzIHRoZSBcbiAgICogQWRhcHRpdmUgTWV0cm9wb2xpcy1XaXRoaW4tR2liYnMgYWxnb3JpdGhtIGluIFwiRXhhbXBsZXMgb2YgQWRhcHRpdmUgTUNNQ1wiXG4gICAqIGJ5IFJvYmVydHMgYW5kIFJvc2VudGhhbCAoMjAwOCkuIEFuIGFkaXRpb24gaXMgdGhhdCBpdCBoYW5kbGVzIGludCBwYXJhbWV0ZXJzXG4gICAqIGJ5IG1ha2luZyBkaXNjcmV0ZSBOb3JtYWwgcHJvcG9zYWxzIGFuZCBiaW5hcnkgcGFyYW1ldGVycyBieSB0YWtpbmcgb24gYSBuZXcgXG4gICAqIHZhbHVlIHByb3BvcnRpb25hbCB0byB0aGUgcG9zdGVyaW9yIG9mIHRoZSB0d28gcG9zc2libGUgc3RhdGVzIG9mIHRoZVxuICAgKiBwYXJhbWV0ZXIuIFRoaXMgc2FtcGxlciBjYW4gYmUgZWZmaWNpZW50IHdoZW4gdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gICAqIGFyZSBub3QgdG9vIGhpZ2ggYW5kIHRoZSBjb3JyZWxhdGlvbnMgYmV0d2VlbiBwYXJhbWV0ZXJzIGFyZSBsb3cuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgd2l0aCBhIG9uZSBvciBtb3JlIHBhcmFtZXRlciBkZWZpbml0aW9uc1xuICAgKiBAcGFyYW0gc3RhdGUgLSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhdGUgb2YgYWxsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSBsb2dfcG9zdCAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBsb2cgZGVuc2l0eSB0aGF0IGRlcGVuZHMgb24gdGhlIHN0YXRlLiBcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIHRoZSBzdGVwcGVyLlxuICAqL1xuICB2YXIgQW13Z1NhbXBsZXIgPSBmdW5jdGlvbihwYXJhbXMsIGxvZ19wb3N0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgU2FtcGxlci5jYWxsKHRoaXMsIHBhcmFtcywgbG9nX3Bvc3QsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuICBcbiAgQW13Z1NhbXBsZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTYW1wbGVyLnByb3RvdHlwZSk7IFxuICBBbXdnU2FtcGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBbXdnU2FtcGxlcjtcbiAgXG4gIEFtd2dTYW1wbGVyLnByb3RvdHlwZS5jcmVhdGVfc3RlcHBlcl9lbnNhbWJsZSA9IGZ1bmN0aW9uKHBhcmFtcywgc3RhdGUsIGxvZ19wb3N0LCBvcHRpb25zKXtcbiAgICByZXR1cm4gWyBuZXcgQW13Z1N0ZXBwZXIocGFyYW1zLCBzdGF0ZSwgbG9nX3Bvc3QsIG9wdGlvbnMpIF07XG4gIH07XG4gIFxuICBcbiAgLy8gUmV0dXJuaW5nIHRoZSBmdW5jdGlvbnMgdGhhdCBzaG91bGQgYmUgcHVibGljbHkgZXhwb3NlZCBieSB0aGlzIG1vZHVsZVxuICByZXR1cm4ge1xuICAgIHJ1bmlmOiBydW5pZixcbiAgICBydW5pZl9kaXNjcmV0ZTogcnVuaWZfZGlzY3JldGUsXG4gICAgcm5vcm06IHJub3JtLFxuICAgIHBhcmFtX2luaXRfZml4ZWQ6IHBhcmFtX2luaXRfZml4ZWQsIFxuICAgIGNvbXBsZXRlX3BhcmFtczogY29tcGxldGVfcGFyYW1zLCBcbiAgICBSZWFsTWV0cm9wb2xpc1N0ZXBwZXI6IFJlYWxNZXRyb3BvbGlzU3RlcHBlciwgXG4gICAgSW50TWV0cm9wb2xpc1N0ZXBwZXI6IEludE1ldHJvcG9saXNTdGVwcGVyLCBcbiAgICBNdWx0aVJlYWxDb21wb25lbnRNZXRyb3BvbGlzU3RlcHBlcjogTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIsIFxuICAgIE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXI6IE11bHRpSW50Q29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIsIFxuICAgIEJpbmFyeVN0ZXBwZXI6IEJpbmFyeVN0ZXBwZXIsIFxuICAgIEJpbmFyeUNvbXBvbmVudFN0ZXBwZXI6IEJpbmFyeUNvbXBvbmVudFN0ZXBwZXIsIFxuICAgIEFtd2dTdGVwcGVyOiBBbXdnU3RlcHBlciwgXG4gICAgQW13Z1NhbXBsZXI6IEFtd2dTYW1wbGVyXG4gIH07XG59KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTiA6IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuIHggPT09IG51bGwgPyBOYU4gOiAreDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBudW1iZXJzKHZhbHVlcywgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IHBlcm11dGUgZnJvbSBcIi4vcGVybXV0ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0KHZhbHVlcywgLi4uRikge1xuICBpZiAodHlwZW9mIHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ2YWx1ZXMgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB2YWx1ZXMgPSBBcnJheS5mcm9tKHZhbHVlcyk7XG4gIGxldCBbZl0gPSBGO1xuICBpZiAoKGYgJiYgZi5sZW5ndGggIT09IDIpIHx8IEYubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGluZGV4ID0gVWludDMyQXJyYXkuZnJvbSh2YWx1ZXMsIChkLCBpKSA9PiBpKTtcbiAgICBpZiAoRi5sZW5ndGggPiAxKSB7XG4gICAgICBGID0gRi5tYXAoZiA9PiB2YWx1ZXMubWFwKGYpKTtcbiAgICAgIGluZGV4LnNvcnQoKGksIGopID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIEYpIHtcbiAgICAgICAgICBjb25zdCBjID0gYXNjZW5kaW5nRGVmaW5lZChmW2ldLCBmW2pdKTtcbiAgICAgICAgICBpZiAoYykgcmV0dXJuIGM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmID0gdmFsdWVzLm1hcChmKTtcbiAgICAgIGluZGV4LnNvcnQoKGksIGopID0+IGFzY2VuZGluZ0RlZmluZWQoZltpXSwgZltqXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcGVybXV0ZSh2YWx1ZXMsIGluZGV4KTtcbiAgfVxuICByZXR1cm4gdmFsdWVzLnNvcnQoY29tcGFyZURlZmluZWQoZikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZURlZmluZWQoY29tcGFyZSA9IGFzY2VuZGluZykge1xuICBpZiAoY29tcGFyZSA9PT0gYXNjZW5kaW5nKSByZXR1cm4gYXNjZW5kaW5nRGVmaW5lZDtcbiAgaWYgKHR5cGVvZiBjb21wYXJlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb21wYXJlIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICBjb25zdCB4ID0gY29tcGFyZShhLCBiKTtcbiAgICBpZiAoeCB8fCB4ID09PSAwKSByZXR1cm4geDtcbiAgICByZXR1cm4gKGNvbXBhcmUoYiwgYikgPT09IDApIC0gKGNvbXBhcmUoYSwgYSkgPT09IDApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kaW5nRGVmaW5lZChhLCBiKSB7XG4gIHJldHVybiAoYSA9PSBudWxsIHx8ICEoYSA+PSBhKSkgLSAoYiA9PSBudWxsIHx8ICEoYiA+PSBiKSkgfHwgKGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtYXggPCB2YWx1ZSB8fCAobWF4ID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cbiIsImltcG9ydCB7YXNjZW5kaW5nRGVmaW5lZCwgY29tcGFyZURlZmluZWR9IGZyb20gXCIuL3NvcnQuanNcIjtcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL21vdXJuZXIvcXVpY2tzZWxlY3Rcbi8vIElTQyBsaWNlbnNlLCBDb3B5cmlnaHQgMjAxOCBWbGFkaW1pciBBZ2Fmb25raW4uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWlja3NlbGVjdChhcnJheSwgaywgbGVmdCA9IDAsIHJpZ2h0ID0gSW5maW5pdHksIGNvbXBhcmUpIHtcbiAgayA9IE1hdGguZmxvb3Ioayk7XG4gIGxlZnQgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGxlZnQpKTtcbiAgcmlnaHQgPSBNYXRoLmZsb29yKE1hdGgubWluKGFycmF5Lmxlbmd0aCAtIDEsIHJpZ2h0KSk7XG5cbiAgaWYgKCEobGVmdCA8PSBrICYmIGsgPD0gcmlnaHQpKSByZXR1cm4gYXJyYXk7XG5cbiAgY29tcGFyZSA9IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IGFzY2VuZGluZ0RlZmluZWQgOiBjb21wYXJlRGVmaW5lZChjb21wYXJlKTtcblxuICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgIHF1aWNrc2VsZWN0KGFycmF5LCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgY29tcGFyZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdCA9IGFycmF5W2tdO1xuICAgIGxldCBpID0gbGVmdDtcbiAgICBsZXQgaiA9IHJpZ2h0O1xuXG4gICAgc3dhcChhcnJheSwgbGVmdCwgayk7XG4gICAgaWYgKGNvbXBhcmUoYXJyYXlbcmlnaHRdLCB0KSA+IDApIHN3YXAoYXJyYXksIGxlZnQsIHJpZ2h0KTtcblxuICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgc3dhcChhcnJheSwgaSwgaiksICsraSwgLS1qO1xuICAgICAgd2hpbGUgKGNvbXBhcmUoYXJyYXlbaV0sIHQpIDwgMCkgKytpO1xuICAgICAgd2hpbGUgKGNvbXBhcmUoYXJyYXlbal0sIHQpID4gMCkgLS1qO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlKGFycmF5W2xlZnRdLCB0KSA9PT0gMCkgc3dhcChhcnJheSwgbGVmdCwgaik7XG4gICAgZWxzZSArK2osIHN3YXAoYXJyYXksIGosIHJpZ2h0KTtcblxuICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzd2FwKGFycmF5LCBpLCBqKSB7XG4gIGNvbnN0IHQgPSBhcnJheVtpXTtcbiAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgYXJyYXlbal0gPSB0O1xufVxuIiwiaW1wb3J0IG1heCBmcm9tIFwiLi9tYXguanNcIjtcbmltcG9ydCBtYXhJbmRleCBmcm9tIFwiLi9tYXhJbmRleC5qc1wiO1xuaW1wb3J0IG1pbiBmcm9tIFwiLi9taW4uanNcIjtcbmltcG9ydCBtaW5JbmRleCBmcm9tIFwiLi9taW5JbmRleC5qc1wiO1xuaW1wb3J0IHF1aWNrc2VsZWN0IGZyb20gXCIuL3F1aWNrc2VsZWN0LmpzXCI7XG5pbXBvcnQgbnVtYmVyLCB7bnVtYmVyc30gZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge2FzY2VuZGluZ0RlZmluZWR9IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBncmVhdGVzdCBmcm9tIFwiLi9ncmVhdGVzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGlsZSh2YWx1ZXMsIHAsIHZhbHVlb2YpIHtcbiAgdmFsdWVzID0gRmxvYXQ2NEFycmF5LmZyb20obnVtYmVycyh2YWx1ZXMsIHZhbHVlb2YpKTtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpIHx8IGlzTmFOKHAgPSArcCkpIHJldHVybjtcbiAgaWYgKHAgPD0gMCB8fCBuIDwgMikgcmV0dXJuIG1pbih2YWx1ZXMpO1xuICBpZiAocCA+PSAxKSByZXR1cm4gbWF4KHZhbHVlcyk7XG4gIHZhciBuLFxuICAgICAgaSA9IChuIC0gMSkgKiBwLFxuICAgICAgaTAgPSBNYXRoLmZsb29yKGkpLFxuICAgICAgdmFsdWUwID0gbWF4KHF1aWNrc2VsZWN0KHZhbHVlcywgaTApLnN1YmFycmF5KDAsIGkwICsgMSkpLFxuICAgICAgdmFsdWUxID0gbWluKHZhbHVlcy5zdWJhcnJheShpMCArIDEpKTtcbiAgcmV0dXJuIHZhbHVlMCArICh2YWx1ZTEgLSB2YWx1ZTApICogKGkgLSBpMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGlsZVNvcnRlZCh2YWx1ZXMsIHAsIHZhbHVlb2YgPSBudW1iZXIpIHtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpIHx8IGlzTmFOKHAgPSArcCkpIHJldHVybjtcbiAgaWYgKHAgPD0gMCB8fCBuIDwgMikgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1swXSwgMCwgdmFsdWVzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1tuIC0gMV0sIG4gLSAxLCB2YWx1ZXMpO1xuICB2YXIgbixcbiAgICAgIGkgPSAobiAtIDEpICogcCxcbiAgICAgIGkwID0gTWF0aC5mbG9vcihpKSxcbiAgICAgIHZhbHVlMCA9ICt2YWx1ZW9mKHZhbHVlc1tpMF0sIGkwLCB2YWx1ZXMpLFxuICAgICAgdmFsdWUxID0gK3ZhbHVlb2YodmFsdWVzW2kwICsgMV0sIGkwICsgMSwgdmFsdWVzKTtcbiAgcmV0dXJuIHZhbHVlMCArICh2YWx1ZTEgLSB2YWx1ZTApICogKGkgLSBpMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGlsZUluZGV4KHZhbHVlcywgcCwgdmFsdWVvZiA9IG51bWJlcikge1xuICBpZiAoaXNOYU4ocCA9ICtwKSkgcmV0dXJuO1xuICBudW1iZXJzID0gRmxvYXQ2NEFycmF5LmZyb20odmFsdWVzLCAoXywgaSkgPT4gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSk7XG4gIGlmIChwIDw9IDApIHJldHVybiBtaW5JbmRleChudW1iZXJzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuIG1heEluZGV4KG51bWJlcnMpO1xuICB2YXIgbnVtYmVycyxcbiAgICAgIGluZGV4ID0gVWludDMyQXJyYXkuZnJvbSh2YWx1ZXMsIChfLCBpKSA9PiBpKSxcbiAgICAgIGogPSBudW1iZXJzLmxlbmd0aCAtIDEsXG4gICAgICBpID0gTWF0aC5mbG9vcihqICogcCk7XG4gIHF1aWNrc2VsZWN0KGluZGV4LCBpLCAwLCBqLCAoaSwgaikgPT4gYXNjZW5kaW5nRGVmaW5lZChudW1iZXJzW2ldLCBudW1iZXJzW2pdKSk7XG4gIGkgPSBncmVhdGVzdChpbmRleC5zdWJhcnJheSgwLCBpICsgMSksIChpKSA9PiBudW1iZXJzW2ldKTtcbiAgcmV0dXJuIGkgPj0gMCA/IGkgOiAtMTtcbn1cbiIsImltcG9ydCBxdWFudGlsZSwge3F1YW50aWxlSW5kZXh9IGZyb20gXCIuL3F1YW50aWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lZGlhbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgcmV0dXJuIHF1YW50aWxlKHZhbHVlcywgMC41LCB2YWx1ZW9mKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhbkluZGV4KHZhbHVlcywgdmFsdWVvZikge1xuICByZXR1cm4gcXVhbnRpbGVJbmRleCh2YWx1ZXMsIDAuNSwgdmFsdWVvZik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsIlxuLypcbiAgSFRETWF0aCBTdGF0aWMgQ2xhc3MgLSBOb3QgaW50ZW5kZWQgZm9yIGluc3RhbnRpYXRpb24hXG5cbiAgVmFyaWFibGVzOlxuICAgIEEgPSBhbW91bnRcbiAgICBEID0gZGVsYXlcbiAgICBWID0gc3ViamVjdGl2ZSB2YWx1ZVxuXG4gICAgayA9IGRpc2NvdW50IGZhY3RvclxuXG4gIEVxdWF0aW9uczpcbiAgICBWID0gQSAvICgxICsga0QpXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRETWF0aCB7XG4gIHN0YXRpYyBhZGsydihhLCBkLCBrKSB7XG4gICAgcmV0dXJuIGEgLyAoMSArIGsgKiBkKTtcbiAgfVxuXG4gIHN0YXRpYyBhZHYyayhhLCBkLCB2KSB7XG4gICAgcmV0dXJuIChhIC0gdikgLyAodiAqIGQpO1xuICB9XG59XG4iLCJcbi8vIEludGVybmFsIGRlcGVuZGVuY2llc1xuaW1wb3J0IEhURE1hdGggZnJvbSAnLi9odGQtbWF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IEhURE1hdGg7XG4iLCIvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1nbG9iYWxzOiBbXCJvZmZcIiwgXCJzZWxmXCJdICovXG5cbi8vIE5lZWRlZCBmb3IgZDMgaW4gV2ViV29ya2VyIVxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG5pbXBvcnQgKiBhcyBCYXllc0Rpc3RyaWJ1dGlvbnMgZnJvbSAnYmF5ZXMuanMvZGlzdHJpYnV0aW9ucyc7XG5pbXBvcnQgKiBhcyBCYXllc01jbWMgZnJvbSAnYmF5ZXMuanMvbWNtYyc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgSFRETWF0aCBmcm9tICdAZGVjaWRhYmxlcy9kaXNjb3VudGFibGUtbWF0aCc7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBrOiB7dHlwZTogJ3JlYWwnLCBsb3dlcjogMCwgdXBwZXI6IDEwMH0sXG4gICAgbHVjZToge3R5cGU6ICdyZWFsJywgbG93ZXI6IDAsIHVwcGVyOiAxMDB9LFxuICB9O1xuXG4gIGNvbnN0IGxvZ1Bvc3QgPSAoc3RhdGUsIGRhdGEpID0+IHtcbiAgICBsZXQgbHAgPSAwO1xuXG4gICAgLy8gUHJpb3JzXG4gICAgY29uc3Qga01lYW4gPSAyO1xuICAgIGNvbnN0IGtTaGFwZSA9IDM7XG4gICAgbHAgKz0gQmF5ZXNEaXN0cmlidXRpb25zLmdhbW1hKFxuICAgICAgc3RhdGUuayxcbiAgICAgIGtTaGFwZSxcbiAgICAgIGtTaGFwZSAvIGtNZWFuLFxuICAgICk7XG4gICAgLy8gbHAgKz0gQmF5ZXNEaXN0cmlidXRpb25zLnVuaWYoc3RhdGUuaywgMCwgMTAwKTtcblxuICAgIGNvbnN0IGx1Y2VNZWFuID0gMjtcbiAgICBjb25zdCBsdWNlU2hhcGUgPSAzO1xuICAgIGxwICs9IEJheWVzRGlzdHJpYnV0aW9ucy5nYW1tYShcbiAgICAgIHN0YXRlLmx1Y2UsXG4gICAgICBsdWNlU2hhcGUsXG4gICAgICBsdWNlU2hhcGUgLyBsdWNlTWVhbixcbiAgICApO1xuICAgIC8vIGxwICs9IEJheWVzRGlzdHJpYnV0aW9ucy51bmlmKHN0YXRlLmx1Y2UsIDAsIDEwMCk7XG5cbiAgICAvLyBMaWtlbGlob29kXG4gICAgZGF0YS5mb3JFYWNoKChjaG9pY2UpID0+IHtcbiAgICAgIC8vIFZhbHVlc1xuICAgICAgY29uc3QgdnMgPSBIVERNYXRoLmFkazJ2KGNob2ljZS5hcywgY2hvaWNlLmRzLCBzdGF0ZS5rKTtcbiAgICAgIGNvbnN0IHZsID0gSFRETWF0aC5hZGsydihjaG9pY2UuYWwsIGNob2ljZS5kbCwgc3RhdGUuayk7XG5cbiAgICAgIC8vIENob2ljZSBvZiBzb29uZXIgb3IgbGF0ZXIgaXMgc2FtcGxlZCBmcm9tIGEgQmVybm91bGxpIGRpc3RyaWJ1dGlvblxuICAgICAgLy8gTHVjZSBjaG9pY2UgcnVsZSBpcyB1c2VkIHRvIGNvbXB1dGUgcHJvYmFiaWxpdHkgb2Ygd2FpdGluZyEgKDAgPSBzb29uZXIsIDEgPSBsYXRlcilcbiAgICAgIGNvbnN0IGJpbnZhbCA9IDEgLyAoMSArIE1hdGguZXhwKHN0YXRlLmx1Y2UgKiAodnMgLSB2bCkpKTtcblxuICAgICAgLy8gQWN0dWFsIHJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZSA9IChjaG9pY2UucmVzcG9uc2UgPT09ICdmaXJzdCcpID8gMCA6IDE7XG5cbiAgICAgIGxwICs9IEJheWVzRGlzdHJpYnV0aW9ucy5iZXJuKHJlc3BvbnNlLCBiaW52YWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxwO1xuICB9O1xuXG4gIC8vIEluaXRpYWxpemluZyB0aGUgc2FtcGxlclxuICBjb25zdCBzYW1wbGVyID0gbmV3IEJheWVzTWNtYy5BbXdnU2FtcGxlcihwYXJhbXMsIGxvZ1Bvc3QsIGV2ZW50LmRhdGEpO1xuICAvLyBCdXJuaW5nIHNvbWUgc2FtcGxlcyB0byB0aGUgTUNNQyBnb2RzIGFuZCBzYW1wbGluZyA1MDAwIGRyYXdzXG4gIHNhbXBsZXIuYnVybigxMDAwKTtcbiAgY29uc3Qgc2FtcGxlcyA9IHNhbXBsZXIuc2FtcGxlKDUwMDApO1xuXG4gIC8vIEV4dHJhY3Qgc3VtbWFyeSBzdGF0c1xuICBjb25zdCByZXN1bHRzID0ge1xuICAgIGs6IGQzLm1lZGlhbihzYW1wbGVzLmspLFxuICAgIGx1Y2U6IGQzLm1lZGlhbihzYW1wbGVzLmx1Y2UpLFxuICB9O1xuXG4gIHNlbGYucG9zdE1lc3NhZ2Uoe3Jlc3VsdHM6IHJlc3VsdHMsIHNhbXBsZXM6IHNhbXBsZXN9KTtcbn07XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwibGQiLCJ0aGlzIiwibGdhbW1hIiwieCIsImoiLCJjb2YiLCJzZXIiLCJ4eCIsInkiLCJ0bXAiLCJsb2ciLCJsZmFjdG9yaWFsIiwibiIsIk5hTiIsImxjaG9vc2UiLCJrIiwibGJldGEiLCJhIiwiYiIsIk1hdGgiLCJleHAiLCJhYnMiLCJwb3ciLCJzcXJ0IiwicGkiLCJQSSIsImJldGEiLCJzaGFwZTEiLCJzaGFwZTIiLCJJbmZpbml0eSIsImNhdWNoeSIsImxvY2F0aW9uIiwic2NhbGUiLCJub3JtIiwibWVhbiIsInNkIiwiYml2YXJub3JtIiwiY29yciIsInoiLCJub3JtYWxpemluZ19mYWN0b3IiLCJiaXZhcl9sb2dfZGVucyIsImxhcGxhY2UiLCJkZXhwIiwiZ2FtbWEiLCJzaGFwZSIsInJhdGUiLCJpbnZnYW1tYSIsImxub3JtIiwibWVhbmxvZyIsInNkbG9nIiwicGFyZXRvIiwidCIsImRmIiwid2VpYnVsbCIsInRtcDEiLCJ0bXAyIiwibG9naXMiLCJlIiwiZiIsImRpcmljaGxldCIsImFscGhhIiwic3VtX2FscGhhIiwic3VtX2xnYW1tYV9hbHBoYSIsInN1bV9hbHBoYV9zdWJfMV9sb2dfeCIsImxlbmd0aCIsImkiLCJ1bmlmIiwibWluIiwibWF4IiwiYmVybiIsInByb2IiLCJjYXQiLCJwcm9icyIsImJpbm9tIiwic2l6ZSIsIm5iaW5vbSIsImh5cGVyIiwibSIsInBvaXMiLCJsYW1iZGEiLCJtY21jIiwicnVuaWYiLCJyYW5kb20iLCJydW5pZl9kaXNjcmV0ZSIsImZsb29yIiwicm5vcm0iLCJ1IiwidiIsInEiLCJkZWVwX2Nsb25lIiwic3JjIiwibWl4aW4iLCJkZXN0Iiwic291cmNlIiwiY29weUZ1bmMiLCJuYW1lIiwicyIsImVtcHR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVR5cGUiLCJjbG9uZU5vZGUiLCJEYXRlIiwiZ2V0VGltZSIsIlJlZ0V4cCIsInIiLCJsIiwiQXJyYXkiLCJwdXNoIiwiY29uc3RydWN0b3IiLCJjbG9uZV9wYXJhbV9kcmF3IiwiaXNBcnJheSIsInhfY29weSIsInNsaWNlIiwiaXNfbnVtYmVyIiwib2JqZWN0IiwiTnVtYmVyIiwiY3JlYXRlX2FycmF5IiwiZGltIiwiaW5pdCIsImFyciIsImFycmF5X2RpbSIsImNvbmNhdCIsImFycmF5X2VxdWFsIiwiYTEiLCJhMiIsIm5lc3RlZF9hcnJheV9hcHBseSIsImZ1biIsInJlc3VsdCIsInNodWZmbGVfYXJyYXkiLCJhcnJheSIsInRlbXAiLCJuZXN0ZWRfYXJyYXlfcmFuZG9tX2FwcGx5IiwibGVuIiwiYXJyYXlfaXMiLCJhcnJheV9pIiwiZ2V0X29wdGlvbiIsIm9wdGlvbl9uYW1lIiwib3B0aW9ucyIsImRlZmF1bF92YWx1ZSIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiZ2V0X211bHRpZGltX29wdGlvbiIsInZhbHVlIiwicGFyYW1faW5pdF9maXhlZCIsInR5cGUiLCJsb3dlciIsInVwcGVyIiwicm91bmQiLCJjb21wbGV0ZV9wYXJhbXMiLCJwYXJhbXNfdG9fY29tcGxldGUiLCJwYXJhbV9pbml0IiwicGFyYW1zIiwicGFyYW1fbmFtZSIsInBhcmFtIiwiU3RlcHBlciIsInN0YXRlIiwibG9nX3Bvc3QiLCJzdGVwIiwic3RhcnRfYWRhcHRhdGlvbiIsInN0b3BfYWRhcHRhdGlvbiIsImluZm8iLCJPbmVkaW1NZXRyb3BvbGlzU3RlcHBlciIsImdlbmVyYXRlX3Byb3Bvc2FsIiwicGFyYW1fbmFtZXMiLCJrZXlzIiwicHJvcF9sb2dfc2NhbGUiLCJiYXRjaF9zaXplIiwibWF4X2FkYXB0YXRpb24iLCJpbml0aWFsX2FkYXB0YXRpb24iLCJ0YXJnZXRfYWNjZXB0X3JhdGUiLCJpc19hZGFwdGluZyIsImFjY2VwdGFuY2VfY291bnQiLCJiYXRjaF9jb3VudCIsIml0ZXJhdGlvbnNfc2luY2VfYWRhcHRpb24iLCJjcmVhdGUiLCJwYXJhbV9zdGF0ZSIsInBhcmFtX3Byb3Bvc2FsIiwiY3Vycl9sb2dfZGVucyIsInByb3BfbG9nX2RlbnMiLCJhY2NlcHRfcHJvYiIsImxvZ19zZF9hZGp1c3RtZW50Iiwibm9ybWFsX3Byb3Bvc2FsIiwiUmVhbE1ldHJvcG9saXNTdGVwcGVyIiwiZGlzY3JldGVfbm9ybWFsX3Byb3Bvc2FsIiwiSW50TWV0cm9wb2xpc1N0ZXBwZXIiLCJNdWx0aWRpbUNvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyIiwiU3ViU3RlcHBlciIsImNyZWF0ZV9zdWJzdGVwcGVycyIsInN1YnN0YXRlIiwic3Vic3RlcHBlcnMiLCJzdWJvcHRpb25zIiwic3VicGFyYW0iLCJzdWJzdGVwcGVyIiwiTXVsdGlSZWFsQ29tcG9uZW50TWV0cm9wb2xpc1N0ZXBwZXIiLCJNdWx0aUludENvbXBvbmVudE1ldHJvcG9saXNTdGVwcGVyIiwiQmluYXJ5U3RlcHBlciIsInplcm9fbG9nX2RlbnMiLCJvbmVfbG9nX2RlbnMiLCJtYXhfbG9nX2RlbnMiLCJ6ZXJvX3Byb2IiLCJCaW5hcnlDb21wb25lbnRTdGVwcGVyIiwic3VicGFyYW1zIiwiQW13Z1N0ZXBwZXIiLCJTZWxlY3RTdGVwcGVyIiwicGFyYW1fb2JqZWN0X3dyYXAiLCJwYXJhbV9vcHRpb25zIiwiU2FtcGxlciIsImRhdGEiLCJwYXJhbV9pbml0X2Z1biIsInRoaW5uaW5nX2ludGVydmFsIiwicGFyYW1zX3RvX21vbml0b3IiLCJ0aGluIiwibW9uaXRvciIsInN0ZXBwZXJzIiwiY3JlYXRlX3N0ZXBwZXJfZW5zYW1ibGUiLCJzYW1wbGUiLCJuX2l0ZXJhdGlvbnMiLCJtb25pdG9yZWRfcGFyYW1zIiwiY3Vycl9zYW1wbGUiLCJidXJuIiwiQW13Z1NhbXBsZXIiLCJhc2NlbmRpbmciLCJudW1iZXJzIiwidmFsdWVzIiwidmFsdWVvZiIsImNvbXBhcmVEZWZpbmVkIiwiY29tcGFyZSIsImFzY2VuZGluZ0RlZmluZWQiLCJUeXBlRXJyb3IiLCJxdWlja3NlbGVjdCIsImxlZnQiLCJyaWdodCIsIm5ld0xlZnQiLCJuZXdSaWdodCIsInN3YXAiLCJxdWFudGlsZSIsInAiLCJGbG9hdDY0QXJyYXkiLCJmcm9tIiwiaXNOYU4iLCJpMCIsInZhbHVlMCIsInN1YmFycmF5IiwidmFsdWUxIiwibWVkaWFuIiwiVHJhbnNmb3JtIiwidHJhbnNsYXRlIiwiYXBwbHkiLCJwb2ludCIsImFwcGx5WCIsImFwcGx5WSIsImludmVydCIsImludmVydFgiLCJpbnZlcnRZIiwicmVzY2FsZVgiLCJjb3B5IiwiZG9tYWluIiwicmFuZ2UiLCJtYXAiLCJyZXNjYWxlWSIsIkhURE1hdGgiLCJhZGsydiIsImQiLCJhZHYyayIsInNlbGYiLCJvbm1lc3NhZ2UiLCJldmVudCIsImx1Y2UiLCJsb2dQb3N0IiwibHAiLCJrTWVhbiIsImtTaGFwZSIsIkJheWVzRGlzdHJpYnV0aW9ucyIsImx1Y2VNZWFuIiwibHVjZVNoYXBlIiwiZm9yRWFjaCIsImNob2ljZSIsInZzIiwiYXMiLCJkcyIsInZsIiwiYWwiLCJkbCIsImJpbnZhbCIsInJlc3BvbnNlIiwic2FtcGxlciIsIkJheWVzTWNtYyIsInNhbXBsZXMiLCJyZXN1bHRzIiwiZDMiLCJwb3N0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0NBR0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7O0NBRUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7O0NBT0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0dBQ0MsQ0FBVUEsVUFBQUEsSUFBSSxFQUFFQyxPQUFPLEVBQUU7S0FJZixJQUFrQ0MsTUFBTSxDQUFDQyxPQUFPLEVBQUU7Q0FDN0Q7Q0FDQTtDQUNBO0NBQ1FELE1BQUFBLE1BQUEsQ0FBQUMsT0FBQSxHQUFpQkYsT0FBTyxFQUFFLENBQUE7Q0FDbEMsS0FBSyxNQUFNO0NBQ1g7Q0FDUUQsTUFBQUEsSUFBSSxDQUFDSSxFQUFFLEdBQUdILE9BQU8sRUFBRSxDQUFBO0NBQ3hCLEtBQUE7Q0FDSCxHQUFDLEVBQUNJLGNBQUksRUFBRSxZQUFXO0NBQ25CO0tBQ0UsSUFBSUQsRUFBRSxHQUFJLEVBQUUsQ0FBQTs7Q0FFZDtDQUNBOztDQUVFLElBQUEsSUFBSUUsTUFBTSxHQUFHLFVBQVNDLENBQUMsRUFBRTtPQUN2QixJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQ1QsTUFBQSxJQUFJQyxHQUFHLEdBQUcsQ0FDUixpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUN4RCxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLENBQUMsa0JBQWtCLENBQy9ELENBQUE7T0FDRCxJQUFJQyxHQUFHLEdBQUcsaUJBQWlCLENBQUE7Q0FDM0IsTUFBQSxJQUFJQyxFQUFFLEVBQUVDLENBQUMsRUFBRUMsR0FBRyxDQUFBO09BQ2RBLEdBQUcsR0FBRyxDQUFDRCxDQUFDLEdBQUdELEVBQUUsR0FBR0osQ0FBQyxJQUFJLEdBQUcsQ0FB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QUEsTUFBTUMsRUFBRSxHQUFHakIsT0FBTyxDQUFDQyxLQUFLLENBQUNlLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFRixNQUFNLENBQUNHLEVBQUUsRUFBRTVILEtBQUssQ0FBQy9JLENBQUMsQ0FBQyxDQUFBO0NBQ3ZELE1BQUEsTUFBTTRRLEVBQUUsR0FBR3BCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDZSxNQUFNLENBQUNLLEVBQUUsRUFBRUwsTUFBTSxDQUFDTSxFQUFFLEVBQUUvSCxLQUFLLENBQUMvSSxDQUFDLENBQUMsQ0FBQTs7Q0FFdkQ7Q0FDQTtDQUNBLE1BQUEsTUFBTStRLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHM1EsSUFBSSxDQUFDQyxHQUFHLENBQUMwSSxLQUFLLENBQUNnSCxJQUFJLElBQUlVLEVBQUUsR0FBR0csRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOztDQUV6RDtPQUNBLE1BQU1JLFFBQVEsR0FBSVIsTUFBTSxDQUFDUSxRQUFRLEtBQUssT0FBTyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7T0FFdERmLEVBQUUsSUFBSUcseUJBQXVCLENBQUNZLFFBQVEsRUFBRUQsTUFBTSxDQUFDLENBQUE7Q0FDakQsS0FBQyxDQUFDLENBQUE7Q0FFRixJQUFBLE9BQU9kLEVBQUUsQ0FBQTtJQUNWLENBQUE7O0NBRUQ7Q0FDQSxFQUFBLE1BQU1nQixPQUFPLEdBQUcsSUFBSUMsdUJBQXFCLENBQUN2SSxNQUFNLEVBQUVxSCxPQUFPLEVBQUVGLEtBQUssQ0FBQzNELElBQUksQ0FBQyxDQUFBO0NBQ3RFO0NBQ0E4RSxFQUFBQSxPQUFPLENBQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Q0FDbEIsRUFBQSxNQUFNb0UsT0FBTyxHQUFHRixPQUFPLENBQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7O0NBRXBDO0NBQ0EsRUFBQSxNQUFNeUUsT0FBTyxHQUFHO0tBQ2RwUixDQUFDLEVBQUVxUixNQUFTLENBQUNGLE9BQU8sQ0FBQ25SLENBQUMsQ0FBQztDQUN2QitQLElBQUFBLElBQUksRUFBRXNCLE1BQVMsQ0FBQ0YsT0FBTyxDQUFDcEIsSUFBSSxDQUFBO0lBQzdCLENBQUE7R0FFREgsSUFBSSxDQUFDMEIsV0FBVyxDQUFDO0NBQUNGLElBQUFBLE9BQU8sRUFBRUEsT0FBTztDQUFFRCxJQUFBQSxPQUFPLEVBQUVBLE9BQUFBO0NBQU8sR0FBQyxDQUFDLENBQUE7Q0FDeEQsQ0FBQzs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwXX0=');
/* eslint-enable */

/*
  HTDFit element
  <htd-fit>

  Attributes:
    interactive: true/false

*/
class HTDFit extends DiscountableElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
    this.k = 0.05;
    this.choices = [];
    this.samples = null;
    this.working = false;
    this.queued = false;
    this.worker = new WorkerFactory();
    this.worker.onmessage = event => {
      this.working = false;
      this.samples = event.data.samples;
      this.k = event.data.results.k;
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('htd-fit-update', {
        detail: {
          k: this.k
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
      this.worker.postMessage(this.choices);
      this.working = true;
      this.queued = false;
    } else {
      this.queued = true;
    }
  }
  clear() {
    this.choices = [];
    this.fit();
  }
  get(name = 'default') {
    const choice = this.choices.find(item => {
      return item.name === name;
    });
    return choice === undefined ? null : choice;
  }
  set(as, ds, al, dl, response, name = '', label = '') {
    const choice = this.choices.find(item => {
      return item.name === name;
    });
    if (choice === undefined) {
      this.choices.push({
        as: as,
        ds: ds,
        al: al,
        dl: dl,
        response: response,
        name: name,
        label: label
      });
    } else {
      choice.as = as;
      choice.ds = ds;
      choice.al = al;
      choice.dl = dl;
      choice.response = response;
      choice.label = label;
    }
    this.fit();
  }
  static get styles() {
    return [super.styles, i$4`
        /* :host {
          display: inline-block;
        } */

        figure {
          margin: 0.625rem;
        }

        figure h2 {
          margin: 0.25rem 0;

          font-size: 1.125rem;
          font-weight: 600;
        }

        .trace,
        .hist {
          display: inline-block;
        }
      `];
  }
  render() {
    return x$2`
      <div>
        <div>After ${this.choices.length} trials:</div>
        <div>Current:
          <var class="math-var k">k</var> = ${this.k.toFixed(2)}
        </div>
        <div class="param">
          <div class="trace k"></div>
          <div class="hist k"></div>
        </div>
        <div class="param">
          <div class="trace luce"></div>
          <div class="hist luce"></div>
        </div>
      </div>
    `;
  }
  plotParam(param) {
    this.shadowRoot.querySelector(`.hist.${param}`).replaceChildren(plot({
      title: `Posterior of ${param}`,
      x: {
        label: `${param}`
      },
      width: 320,
      height: 240,
      style: 'font-size: 0.75rem; font-family: var(---font-family-base);',
      marks: [rectY(this.samples[param], binX({
        y: 'count'
      }, {
        x: identity$1
      }))]
    }));
    this.shadowRoot.querySelector(`.trace.${param}`).replaceChildren(plot({
      title: `Traceplot of ${param}`,
      x: {
        label: 'Samples'
      },
      y: {
        label: `${param}`
      },
      width: 320,
      height: 240,
      style: 'font-size: 0.75rem; font-family: var(---font-family-base);',
      marks: [lineY(this.samples[param])]
    }));
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.samples !== null) {
      this.plotParam('k');
      this.plotParam('luce');
    }
  }
}
customElements.define('htd-fit', HTDFit);

/*
  ITCOption element
  <itc-option>

  Attributes:
  State
  Amount, Delay
*/
class ITCOption extends DiscountableElement {
  static get properties() {
    return {
      state: {
        attribute: 'state',
        type: String,
        reflect: true
      },
      a: {
        attribute: 'amount',
        type: Number,
        reflect: true
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.a = 0;
    this.d = 0;
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          display: inline-block;
          
          width: 10rem;
          height: 10rem;
        }

        .holder {
          display: flex;
          
          flex-flow: column nowrap;

          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
          overflow: visible;
          

          background: var(---color-element-background);
          border: 2px solid var(---color-element-emphasis);
          border-radius: var(---border-radius);
        }

        .interactive,
        .static {
          font-size: 1.75rem;
        }

        .interactive {
          --decidables-spinner-font-size: 1.75rem;
        }

        .static {
          padding: 0 0.25rem;
          
          border-radius: var(---border-radius);
        }

        .amount {
          --decidables-spinner-prefix: "$";
          background-color: var(---color-a-light);
        }

        .amount.interactive {
          --decidables-spinner-input-width: 4rem;
        }

        .delay {
          background-color: var(---color-d-light);
        }
        
        .delay.interactive {
          --decidables-spinner-input-width: 6.75rem;
          --decidables-spinner-postfix: "days";
          --decidables-spinner-postfix-padding: 3.75rem;
        }
      `];
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('itc-option-change', {
      detail: {
        a: this.a,
        d: this.d
      },
      bubbles: true
    }));
  }
  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.sendEvent();
  }
  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.sendEvent();
  }
  render() {
    /* eslint-disable-line class-methods-use-this */
    return x$2`
      <div class="holder">
        ${this.state === 'choice' ? this.interactive ? x$2`<decidables-spinner
              class="amount interactive"
              ?disabled=${!this.interactive}
              step="1"
              .value="${this.a}"
              @input=${this.aInput.bind(this)}
              ></decidables-spinner>` : x$2`<div
              class="amount static"
              >$${this.a}</div>` : ''}
        ${this.state === 'choice' ? x$2`<div class="in">in</div>` : ''}
        ${this.state === 'choice' ? this.interactive ? x$2`<decidables-spinner
              class="delay interactive"
              ?disabled=${!this.interactive}
              min="0" 
              step="1"
              .value="${this.d}"
              @input=${this.dInput.bind(this)}
              ></decidables-spinner>` : x$2`<div
              class="delay static"
              >${this.d} days</div>` : ''}
      </div>
    `;
  }
}
customElements.define('itc-option', ITCOption);

/*
  ITCChoice element
  <itc-choice>

  Attributes:
*/
class ITCChoice extends DiscountableElement {
  static get properties() {
    return {
      state: {
        attribute: 'state',
        type: String,
        reflect: true
      },
      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true
      },
      dl: {
        attribute: 'delay-ll',
        type: Number,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.as = 10;
    this.ds = 5;
    this.al = 40;
    this.dl = 30;
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          display: inline-block;
        }

        .holder {
          user-select: none;
        }

        .holder > * {
          vertical-align: middle;
        }

        .query {
          margin: 0 0.5rem;

          font-family: var(--font-family-code);
          font-size: 1.75rem;
        }

        itc-option {
          width: 10rem;
          height: 10rem;
        }
      `];
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('itc-choice-change', {
      detail: {
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl
      },
      bubbles: true
    }));
  }
  ssChange(event) {
    this.as = parseFloat(event.detail.a);
    this.ds = parseFloat(event.detail.d);
    this.sendEvent();
  }
  llChange(event) {
    this.al = parseFloat(event.detail.a);
    this.dl = parseFloat(event.detail.d);
    this.sendEvent();
  }
  render() {
    return x$2`
      <div class="holder">
        <itc-option
          class="ss"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.as}"
          delay="${this.ds}"
          @itc-option-change=${this.ssChange.bind(this)}>
        </itc-option><span class="query"
         >${this.state === 'choice' ? '?' : this.state === 'fixation' ? '+' : x$2`∙`}</span
        ><itc-option
          class="ll"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.al}"
          delay="${this.dl}"
          @itc-option-change=${this.llChange.bind(this)}>
        </itc-option>
      </div>`;
  }
}
customElements.define('itc-choice', ITCChoice);

/*
  ITCTask element
  <itc-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
class ITCTask extends DiscountableElement {
  static get properties() {
    return {
      duration: {
        attribute: 'duration',
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
    this.duration = 2000; // Duration of stimulus in milliseconds
    this.iti = 2000; // Duration of inter-trial interval in milliseconds
    this.trials = 5; // Number of trials per block
    this.running = false; // Currently executing block of trials

    // Properties
    this.states = ['resetted', 'iti', 'stimulus', 'ended']; // Possible states of task
    this.state = 'resetted'; // Current state of task

    // Decision parameters
    this.range = {};
    this.range.as = {
      start: 5,
      stop: 20,
      step: 5
    }; // Amount SS
    this.range.ds = {
      start: 5,
      stop: 20,
      step: 5
    }; // Delay SS
    this.range.al = {
      start: 40,
      stop: 80,
      step: 5
    }; // Amount LL
    this.range.dl = {
      start: 40,
      stop: 80,
      step: 5
    }; // Delay LL

    this.range.as.values = range$1(this.range.as.start, this.range.as.stop + 0.01, this.range.as.step);
    this.range.ds.values = range$1(this.range.ds.start, this.range.ds.stop + 0.01, this.range.ds.step);
    this.range.al.values = range$1(this.range.al.start, this.range.al.stop + 0.01, this.range.al.step);
    this.range.dl.values = range$1(this.range.dl.start, this.range.dl.stop + 0.01, this.range.dl.step);

    // Private
    this.firstUpdate = true;
    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;
    this.trial = 0; // Count of current trial

    this.baseTime = 0; // Real time, in milliseconds, that the current block started
    this.pauseTime = 0; // Real time, in milliseconds, that block was paused at
    this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started
    this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

    this.runner = undefined; // D3 Interval for frame timing
  }
  static get styles() {
    return [super.styles, i$4`
        :host {
          display: inline-block;
        }
      `];
  }
  render() {
    return x$2`
      <div class="holder">
        <itc-choice 
          state="${this.state === 'stimulus' ? 'choice' : this.state === 'iti' ? 'fixation' : 'blank'}"
          amount-ss="${this.as}"
          delay-ss="${this.ds}"
          amount-ll="${this.al}"
          delay-ll="${this.dl}">
        </itc-choice>
      </div>`;
  }
  update(changedProperties) {
    super.update(changedProperties);

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
    this.runner.stop();
    this.running = false;
    this.trial = 0;
    this.state = 'resetted';
    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;
    this.baseTime = 0;
    this.pauseTime = 0;
    this.startTime = 0;
    this.lastTime = 0;
  }
  run( /* elapsed */
  ) {
    const realTime = now();
    const currentTime = this.baseTime ? realTime - this.baseTime : 0;
    const elapsedTime = this.baseTime ? currentTime - this.startTime : 0;
    this.lastTime = currentTime;
    if (this.state === 'resetted') {
      // Start block with an ITI
      this.state = 'iti';
      this.baseTime = realTime;
      this.startTime = 0;
      this.dispatchEvent(new CustomEvent('itc-block-start', {
        detail: {
          trials: this.trials
        },
        bubbles: true
      }));
    } else if (this.state === 'iti' && elapsedTime >= this.iti) {
      // Start new trial with a stimulus
      this.trial += 1;
      this.state = 'stimulus';
      this.startTime = currentTime;
      // Determine trial
      this.as = this.range.as.values[Math.floor(Math.random() * this.range.as.values.length)];
      this.ds = this.range.ds.values[Math.floor(Math.random() * this.range.ds.values.length)];
      this.al = this.range.al.values[Math.floor(Math.random() * this.range.al.values.length)];
      this.dl = this.range.dl.values[Math.floor(Math.random() * this.range.dl.values.length)];
      this.dispatchEvent(new CustomEvent('itc-trial-start', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          as: this.as,
          ds: this.ds,
          al: this.al,
          dl: this.dl
        },
        bubbles: true
      }));
    } else if (this.state === 'stimulus' && elapsedTime >= this.duration) {
      // Stimulus is over, end of trial
      this.dispatchEvent(new CustomEvent('itc-trial-end', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          as: this.as,
          ds: this.ds,
          al: this.al,
          dl: this.dl
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
        this.dispatchEvent(new CustomEvent('itc-block-end', {
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
  }
}
customElements.define('itc-task', ITCTask);

/*
  HTDEquationADK2V element
  <htd-equation-adk2v>

  Attributes:
  amount, delay, k, value;
*/
class HTDEquationADK2V extends HTDEquation {
  static get properties() {
    return {
      a: {
        attribute: 'amount',
        type: Number,
        reflect: true
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true
      },
      k: {
        attribute: 'k',
        type: Number,
        reflect: true
      },
      v: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.a = 100;
    this.d = 30;
    this.k = 0.05;
    this.alignState();
  }
  alignState() {
    this.v = HTDMath.adk2v(this.a, this.d, this.k);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-equation-adk2v-change', {
      detail: {
        a: this.a,
        d: this.d,
        k: this.k,
        v: this.v
      },
      bubbles: true
    }));
  }
  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  kInput(event) {
    this.k = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let a;
    let d;
    let k;
    let v;
    if (this.numeric) {
      a = x$2`<decidables-spinner class="a bottom" ?disabled=${!this.interactive} step="1" .value="${this.a}" @input=${this.aInput.bind(this)}>
          <var class="math-var">A</var>
        </decidables-spinner>`;
      d = x$2`<decidables-spinner class="d bottom" ?disabled=${!this.interactive} min="0" step="1" .value="${this.d}" @input=${this.dInput.bind(this)}>
          <var class="math-var">D</var>
        </decidables-spinner>`;
      k = x$2`<decidables-spinner class="k bottom" ?disabled=${!this.interactive} min="0" max="100" step=".001" .value="${this.k}" @input=${this.kInput.bind(this)}>
          <var class="math-var">k</var>
        </decidables-spinner>`;
      v = x$2`<decidables-spinner class="v bottom" disabled step=".001" .value="${+this.v.toFixed(3)}">
          <var class="math-var">V</var>
        </decidables-spinner>`;
    } else {
      a = x$2`<var class="math-var a">A</var>`;
      d = x$2`<var class="math-var d">D</var>`;
      k = x$2`<var class="math-var k">k</var>`;
      v = x$2`<var class="math-var v">V</var>`;
    }
    const equation = x$2`
      <tr>
        <td rowspan="2">
          ${v}<span class="equals">=</span>
        </td>
        <td class="underline">
          ${a}
        </td>
      </tr>
      <tr>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${d}<span class="paren tight">)</span>
        </td>
      </tr>`;
    return x$2`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
  }
}
customElements.define('htd-equation-adk2v', HTDEquationADK2V);

/*
  CPTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/
class HTDExample extends DiscountableElement {
  static get styles() {
    return [super.styles, i$4`
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
    return x$2`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`;
  }
}
customElements.define('htd-example', HTDExample);

// import HTDMath from '@decidables/discountable-math';


/*
  HTDExampleHuman element
  <htd-example-human>
*/
class HTDExampleHuman extends HTDExample {
  connectedCallback() {
    super.connectedCallback();
    this.discountableControl = this.querySelector('discountable-control');
    this.itcTask = this.querySelector('itc-task');
    this.discountableResponse = this.querySelector('discountable-response');
    this.htdFit = this.querySelector('htd-fit');
    this.htdCurves = this.querySelector('htd-curves');
    if (this.discountableControl) {
      if (this.discountableControl.hasAttribute('trials')) {
        this.discountableControl.addEventListener('discountable-control-trials', event => {
          if (this.itcTask) {
            this.itcTask.trials = event.detail.trials;
          }
          if (this.discountableResponse) {
            this.discountableResponse.trialTotal = event.detail.trials;
          }
        });
      }
      if (this.discountableControl.hasAttribute('duration')) {
        this.discountableControl.addEventListener('discountable-control-duration', event => {
          if (this.itcTask) {
            this.itcTask.duration = event.detail.duration;
            this.itcTask.iti = event.detail.duration;
          }
        });
      }
      if (this.discountableControl.hasAttribute('run')) {
        this.discountableControl.addEventListener('discountable-control-run', ( /* event */
        ) => {
          if (this.itcTask) {
            this.itcTask.running = true;
          }
        });
      }
      if (this.discountableControl.hasAttribute('pause')) {
        this.discountableControl.addEventListener('discountable-control-pause', ( /* event */
        ) => {
          if (this.itcTask) {
            this.itcTask.running = false;
          }
        });
      }
      if (this.discountableControl.hasAttribute('reset')) {
        this.discountableControl.addEventListener('discountable-control-reset', ( /* event */
        ) => {
          if (this.itcTask) {
            this.itcTask.reset();
          }
          if (this.discountableResponse) {
            this.discountableResponse.reset();
          }
          if (this.htdFit) {
            this.htdFit.clear();
          }
          if (this.htdCurves) {
            this.htdCurves.clearOptions();
          }
        });
      }
    }
    if (this.itcTask) {
      if (this.discountableResponse) {
        this.discountableResponse.trialTotal = this.itcTask.trials;
      }
      this.itcTask.addEventListener('itc-trial-start', event => {
        if (this.discountableResponse) {
          this.discountableResponse.start(event.detail.as, event.detail.ds, event.detail.al, event.detail.dl, event.detail.trial);
        }
        if (this.htdCurves) {
          this.htdCurves.setOption(event.detail.as, event.detail.ds, 'smaller-sooner', 's');
          this.htdCurves.setOption(event.detail.al, event.detail.dl, 'larger-later', 'l');
        }
      });
      this.itcTask.addEventListener('itc-trial-end', ( /* event */
      ) => {
        if (this.discountableResponse) {
          this.discountableResponse.stop();
        }
        if (this.htdCurves) {
          this.htdCurves.removeOption('smaller-sooner');
          this.htdCurves.removeOption('larger-later');
        }
      });
      this.itcTask.addEventListener('itc-block-end', ( /* event */
      ) => {
        if (this.discountableControl) {
          this.discountableControl.complete();
        }
      });
    }
    if (this.discountableResponse) {
      this.discountableResponse.addEventListener('discountable-response', event => {
        if (this.htdFit) {
          this.htdFit.set(event.detail.as, event.detail.ds, event.detail.al, event.detail.dl, event.detail.response, event.detail.trial.toString(), event.detail.trial.toString());
        }
      });
    }
    if (this.htdFit) {
      this.htdFit.addEventListener('htd-fit-update', event => {
        if (this.htdCurves) {
          this.htdCurves.k = event.detail.k;
        }
      });
    }
  }
}
customElements.define('htd-example-human', HTDExampleHuman);

/*
  HTDExampleInteractive element
  <htd-example-interactive>
*/
class HTDExampleInteractive extends HTDExample {
  static get properties() {
    return {
      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true
      },
      dl: {
        attribute: 'delay-ll',
        type: Number,
        reflect: true
      },
      k: {
        attribute: 'k',
        type: Number,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.as = 10;
    this.ds = 1;
    this.al = 50;
    this.dl = 40;
    this.k = 0.05;
    this.htdCalculation = null;
    this.htdCurves = null;
    this.itcChoice = null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.htdCalculation = this.querySelector('htd-calculation');
    this.htdCurves = this.querySelector('htd-curves');
    this.itcChoice = this.querySelector('itc-choice');
    if (this.htdCalculation) {
      this.htdCalculation.addEventListener('htd-calculation-change', event => {
        this.as = event.detail.as;
        this.ds = event.detail.ds;
        this.al = event.detail.al;
        this.dl = event.detail.dl;
        this.k = event.detail.k;
      });
    }
    if (this.htdCurves) {
      this.htdCurves.addEventListener('htd-curves-change', event => {
        this.k = event.detail.k;
        if (event.detail.name === 'default') {
          this.as = event.detail.a;
          this.ds = event.detail.d;
        } else if (event.detail.name === 'larger-later') {
          this.al = event.detail.a;
          this.dl = event.detail.d;
        }
      });
    }
    if (this.itcChoice) {
      this.itcChoice.addEventListener('itc-choice-change', event => {
        this.as = event.detail.as;
        this.ds = event.detail.ds;
        this.al = event.detail.al;
        this.dl = event.detail.dl;
      });
    }
    this.requestUpdate();
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.htdCalculation) {
      this.htdCalculation.as = this.as;
      this.htdCalculation.ds = this.ds;
      this.htdCalculation.al = this.al;
      this.htdCalculation.dl = this.dl;
      this.htdCalculation.k = this.k;
    }
    if (this.htdCurves) {
      this.htdCurves.setOption(this.as, this.ds, 'default', 's');
      this.htdCurves.setOption(this.al, this.dl, 'larger-later', 'l');
      this.htdCurves.k = this.k;
    }
    if (this.itcChoice) {
      this.itcChoice.as = this.as;
      this.itcChoice.ds = this.ds;
      this.itcChoice.al = this.al;
      this.itcChoice.dl = this.dl;
    }
  }
}
customElements.define('htd-example-interactive', HTDExampleInteractive);

/*
  HTDExampleModel element
  <htd-example-model>
*/
class HTDExampleModel extends HTDExample {
  static get properties() {
    return {
      k: {
        attribute: 'k',
        type: Number,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.k = 0.2;
    this.discountableControl = null;
    this.discountableResponse = null;
    this.htdCalculation = null;
    this.htdCurves = null;
    this.itcTask = null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.discountableControl = this.querySelector('discountable-control');
    this.discountableResponse = this.querySelector('discountable-response');
    this.htdCalculation = this.querySelector('htd-calculation');
    this.htdCurves = this.querySelector('htd-curves');
    this.itcTask = this.querySelector('itc-task');
    if (this.discountableControl) {
      if (this.discountableControl.hasAttribute('trials')) {
        this.discountableControl.addEventListener('discountable-control-trials', event => {
          if (this.itcTask) {
            this.itcTask.trials = event.detail.trials;
          }
          if (this.discountableResponse) {
            this.discountableResponse.trialTotal = event.detail.trials;
          }
        });
      }
      if (this.discountableControl.hasAttribute('duration')) {
        this.discountableControl.addEventListener('discountable-control-duration', event => {
          if (this.itcTask) {
            this.itcTask.duration = event.detail.duration;
            this.itcTask.iti = event.detail.duration;
          }
        });
      }
      if (this.discountableControl.hasAttribute('run')) {
        this.discountableControl.addEventListener('discountable-control-run', ( /* event */
        ) => {
          if (this.htdCurves) {
            this.htdCurves.resumeTrial();
          }
          if (this.itcTask) {
            this.itcTask.running = true;
          }
        });
      }
      if (this.discountableControl.hasAttribute('pause')) {
        this.discountableControl.addEventListener('discountable-control-pause', ( /* event */
        ) => {
          if (this.htdCurves) {
            this.htdCurves.pauseTrial();
          }
          if (this.itcTask) {
            this.itcTask.running = false;
          }
        });
      }
      if (this.discountableControl.hasAttribute('reset')) {
        this.discountableControl.addEventListener('discountable-control-reset', ( /* event */
        ) => {
          if (this.discountableResponse) {
            this.discountableResponse.reset();
          }
          if (this.htdCurves) {
            this.htdCurves.clearOptions();
          }
          if (this.itcTask) {
            this.itcTask.reset();
          }
        });
      }
    }
    if (this.htdCurves) {
      this.htdCurves.addEventListener('htd-curves-change', event => {
        this.k = event.detail.k;
      });
      this.htdCurves.addEventListener('discountable-response', event => {
        if (this.discountableResponse) {
          this.discountableResponse.responded(event.detail.response);
        }
      });
    }
    if (this.itcTask) {
      if (this.discountableResponse) {
        this.discountableResponse.trialTotal = this.itcTask.trials;
      }
      this.itcTask.addEventListener('itc-trial-start', event => {
        if (this.discountableResponse) {
          this.discountableResponse.start(event.detail.as, event.detail.ds, event.detail.al, event.detail.dl, event.detail.trial);
        }
        const vs = HTDMath.adk2v(event.detail.as, event.detail.ds, this.k);
        const vl = HTDMath.adk2v(event.detail.al, event.detail.dl, this.k);
        const response = vs > vl ? 'first' : 'second';
        if (this.htdCurves) {
          this.htdCurves.trial(event.detail.as, event.detail.ds, event.detail.al, event.detail.dl, event.detail.trial, response);
        }
      });
      this.itcTask.addEventListener('itc-trial-end', ( /* event */
      ) => {
        if (this.discountableResponse) {
          this.discountableResponse.stop();
        }
      });
      this.itcTask.addEventListener('itc-block-end', ( /* event */
      ) => {
        if (this.discountableControl) {
          this.discountableControl.complete();
        }
      });
    }
    this.requestUpdate();
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.htdCalculation) {
      this.htdCalculation.k = this.k;
    }
    if (this.htdCurves) {
      this.htdCurves.k = this.k;
    }
  }
}
customElements.define('htd-example-model', HTDExampleModel);

export { DiscountableControl, DiscountableElement, DiscountableResponse, HTDCalculation, HTDCurves, HTDEquationADK2V, HTDExampleHuman, HTDExampleInteractive, HTDExampleModel, HTDFit, ITCChoice, ITCOption, ITCTask };
//# sourceMappingURL=discountableElements.esm.js.map
