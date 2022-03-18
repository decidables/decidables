function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    e$2 = Symbol(),
    n$3 = new Map();

var s$3 = /*#__PURE__*/function () {
  function s(t, n) {
    _classCallCheck(this, s);

    if (this._$cssResult$ = !0, n !== e$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  _createClass(s, [{
    key: "styleSheet",
    get: function get() {
      var e = n$3.get(this.cssText);
      return t$1 && void 0 === e && (n$3.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return s;
}();

var o$3 = function o(t) {
  return new s$3("string" == typeof t ? t : t + "", e$2);
},
    r$2 = function r(t) {
  for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    n[_key - 1] = arguments[_key];
  }

  var o = 1 === t.length ? t[0] : n.reduce(function (e, n, s) {
    return e + function (t) {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    }(n) + t[s + 1];
  }, t[0]);
  return new s$3(o, e$2);
},
    i$1 = function i(e, n) {
  t$1 ? e.adoptedStyleSheets = n.map(function (t) {
    return t instanceof CSSStyleSheet ? t : t.styleSheet;
  }) : n.forEach(function (t) {
    var n = document.createElement("style"),
        s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
    S$1 = t$1 ? function (t) {
  return t;
} : function (t) {
  return t instanceof CSSStyleSheet ? function (t) {
    var e = "";

    var _iterator = _createForOfIteratorHelper(t.cssRules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _n = _step.value;
        e += _n.cssText;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return o$3(e);
  }(t) : t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$2;

var e$1 = window.trustedTypes,
    r$1 = e$1 ? e$1.emptyScript : "",
    h$1 = window.reactiveElementPolyfillSupport,
    o$2 = {
  toAttribute: function toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? r$1 : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },
  fromAttribute: function fromAttribute(t, i) {
    var s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }
},
    n$2 = function n(t, i) {
  return i !== t && (i == i || t == t);
},
    l$3 = {
  attribute: !0,
  type: String,
  converter: o$2,
  reflect: !1,
  hasChanged: n$2
};

var a$1 = /*#__PURE__*/function (_HTMLElement) {
  _inherits(a, _HTMLElement);

  var _super = _createSuper(a);

  function a() {
    var _this;

    _classCallCheck(this, a);

    _this = _super.call(this), _this._$Et = new Map(), _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$Ei = null, _this.o();
    return _this;
  }

  _createClass(a, [{
    key: "o",
    value: function o() {
      var _this2 = this;

      var t;
      this._$Ep = new Promise(function (t) {
        return _this2.enableUpdating = t;
      }), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(function (t) {
        return t(_this2);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var i, s;
      (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var i;
      null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t) >>> 0, 1);
    }
  }, {
    key: "_$Em",
    value: function _$Em() {
      var _this3 = this;

      this.constructor.elementProperties.forEach(function (t, i) {
        _this3.hasOwnProperty(i) && (_this3._$Et.set(i, _this3[i]), delete _this3[i]);
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t;
      var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return i$1(s, this.constructor.elementStyles), s;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, i, s) {
      this._$AK(t, s);
    }
  }, {
    key: "_$ES",
    value: function _$ES(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l$3;
      var e, r;

      var h = this.constructor._$Eh(t, s);

      if (void 0 !== h && !0 === s.reflect) {
        var _n = (null !== (r = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o$2.toAttribute)(i, s.type);

        this._$Ei = t, null == _n ? this.removeAttribute(h) : this.setAttribute(h, _n), this._$Ei = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, i) {
      var s, e, r;

      var h = this.constructor,
          n = h._$Eu.get(t);

      if (void 0 !== n && this._$Ei !== n) {
        var _t = h.getPropertyOptions(n),
            _l = _t.converter,
            _a2 = null !== (r = null !== (e = null === (s = _l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof _l ? _l : null) && void 0 !== r ? r : o$2.fromAttribute;

        this._$Ei = n, this[n] = _a2(i, _t.type), this._$Ei = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, i, s) {
      var e = !0;
      void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$E_());
    }
  }, {
    key: "_$E_",
    value: function () {
      var _$E_2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var t;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isUpdatePending = !0;
                _context.prev = 1;
                _context.next = 4;
                return this._$Ep;

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                Promise.reject(_context.t0);

              case 9:
                t = this.scheduleUpdate();
                _context.t1 = null != t;

                if (!_context.t1) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return t;

              case 14:
                return _context.abrupt("return", !this.isUpdatePending);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _$E_() {
        return _$E_2.apply(this, arguments);
      }

      return _$E_;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this4 = this;

      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Et && (this._$Et.forEach(function (t, i) {
        return _this4[i] = t;
      }), this._$Et = void 0);
      var i = !1;
      var s = this._$AL;

      try {
        i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
          var i;
          return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
        }), this.update(s)) : this._$EU();
      } catch (t) {
        throw i = !1, this._$EU(), t;
      }

      i && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var i;
      null === (i = this._$Eg) || void 0 === i || i.forEach(function (t) {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$EU",
    value: function _$EU() {
      this._$AL = new Map(), this.isUpdatePending = !1;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$Ep;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this5 = this;

      void 0 !== this._$EC && (this._$EC.forEach(function (t, i) {
        return _this5._$ES(i, _this5[i], t);
      }), this._$EC = void 0), this._$EU();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var i;
      null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;

      this.finalize();
      var t = [];
      return this.elementProperties.forEach(function (i, s) {
        var e = _this6._$Eh(s, i);

        void 0 !== e && (_this6._$Eu.set(e, s), t.push(e));
      }), t;
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l$3;

      if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
        var _s = "symbol" == _typeof(t) ? Symbol() : "__" + t,
            _e = this.getPropertyDescriptor(t, _s, i);

        void 0 !== _e && Object.defineProperty(this.prototype, t, _e);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, i, s) {
      return {
        get: function get() {
          return this[i];
        },
        set: function set(e) {
          var r = this[t];
          this[i] = e, this.requestUpdate(t, r, s);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this.elementProperties.get(t) || l$3;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);

      if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        var _t2 = this.properties,
            _i = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t2)), _toConsumableArray(Object.getOwnPropertySymbols(_t2)));

        var _iterator = _createForOfIteratorHelper(_i),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;
            this.createProperty(_s2, _t2[_s2]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(i) {
      var s = [];

      if (Array.isArray(i)) {
        var _e2 = new Set(i.flat(1 / 0).reverse());

        var _iterator2 = _createForOfIteratorHelper(_e2),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i2 = _step2.value;
            s.unshift(S$1(_i2));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else void 0 !== i && s.push(S$1(i));

      return s;
    }
  }, {
    key: "_$Eh",
    value: function _$Eh(t, i) {
      var s = i.attribute;
      return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);

  return a;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

a$1.finalized = !0, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = {
  mode: "open"
}, null == h$1 || h$1({
  ReactiveElement: a$1
}), (null !== (s$2 = globalThis.reactiveElementVersions) && void 0 !== s$2 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;

var i = globalThis.trustedTypes,
    s$1 = i ? i.createPolicy("lit-html", {
  createHTML: function createHTML(t) {
    return t;
  }
}) : void 0,
    e = "lit$".concat((Math.random() + "").slice(9), "$"),
    o$1 = "?" + e,
    n$1 = "<".concat(o$1, ">"),
    l$2 = document,
    h = function h() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return l$2.createComment(t);
},
    r = function r(t) {
  return null === t || "object" != _typeof(t) && "function" != typeof t;
},
    d = Array.isArray,
    u = function u(t) {
  var i;
  return d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
    c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    a = />/g,
    f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
    _ = /'/g,
    m = /"/g,
    g = /^(?:script|style|textarea|title)$/i,
    p = function p(t) {
  return function (i) {
    for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      s[_key - 1] = arguments[_key];
    }

    return {
      _$litType$: t,
      strings: i,
      values: s
    };
  };
},
    $ = p(1),
    y = p(2),
    b = Symbol.for("lit-noChange"),
    w = Symbol.for("lit-nothing"),
    T = new WeakMap(),
    x = function x(t, i, s) {
  var e, o;
  var n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  var l = n._$litPart$;

  if (void 0 === l) {
    var _t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;

    n._$litPart$ = l = new N(i.insertBefore(h(), _t), _t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
    A = l$2.createTreeWalker(l$2, 129, null, !1),
    C = function C(t, i) {
  var o = t.length - 1,
      l = [];
  var h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (var _i = 0; _i < o; _i++) {
    var _s = t[_i];

    var _o = void 0,
        _u = void 0,
        _p = -1,
        _$ = 0;

    for (; _$ < _s.length && (d.lastIndex = _$, _u = d.exec(_s), null !== _u);) {
      _$ = d.lastIndex, d === c ? "!--" === _u[1] ? d = v : void 0 !== _u[1] ? d = a : void 0 !== _u[2] ? (g.test(_u[2]) && (h = RegExp("</" + _u[2], "g")), d = f) : void 0 !== _u[3] && (d = f) : d === f ? ">" === _u[0] ? (d = null != h ? h : c, _p = -1) : void 0 === _u[1] ? _p = -2 : (_p = d.lastIndex - _u[2].length, _o = _u[1], d = void 0 === _u[3] ? f : '"' === _u[3] ? m : _) : d === m || d === _ ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);
    }

    var _y = d === f && t[_i + 1].startsWith("/>") ? " " : "";

    r += d === c ? _s + n$1 : _p >= 0 ? (l.push(_o), _s.slice(0, _p) + "$lit$" + _s.slice(_p) + e + _y) : _s + e + (-2 === _p ? (l.push(void 0), _i) : _y);
  }

  var u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return [void 0 !== s$1 ? s$1.createHTML(u) : u, l];
};

var E = /*#__PURE__*/function () {
  function E(_ref, n) {
    var t = _ref.strings,
        s = _ref._$litType$;

    _classCallCheck(this, E);

    var l;
    this.parts = [];
    var r = 0,
        d = 0;

    var u = t.length - 1,
        c = this.parts,
        _C = C(t, s),
        _C2 = _slicedToArray(_C, 2),
        v = _C2[0],
        a = _C2[1];

    if (this.el = E.createElement(v, n), A.currentNode = this.el.content, 2 === s) {
      var _t2 = this.el.content,
          _i2 = _t2.firstChild;
      _i2.remove(), _t2.append.apply(_t2, _toConsumableArray(_i2.childNodes));
    }

    for (; null !== (l = A.nextNode()) && c.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          var _t3 = [];

          var _iterator = _createForOfIteratorHelper(l.getAttributeNames()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i5 = _step.value;

              if (_i5.endsWith("$lit$") || _i5.startsWith(e)) {
                var _s2 = a[d++];

                if (_t3.push(_i5), void 0 !== _s2) {
                  var _t5 = l.getAttribute(_s2.toLowerCase() + "$lit$").split(e),
                      _i6 = /([.?@])?(.*)/.exec(_s2);

                  c.push({
                    type: 1,
                    index: r,
                    name: _i6[2],
                    strings: _t5,
                    ctor: "." === _i6[1] ? M : "?" === _i6[1] ? H : "@" === _i6[1] ? I : S
                  });
                } else c.push({
                  type: 6,
                  index: r
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          for (var _i3 = 0, _t4 = _t3; _i3 < _t4.length; _i3++) {
            var _i4 = _t4[_i3];
            l.removeAttribute(_i4);
          }
        }

        if (g.test(l.tagName)) {
          var _t6 = l.textContent.split(e),
              _s3 = _t6.length - 1;

          if (_s3 > 0) {
            l.textContent = i ? i.emptyScript : "";

            for (var _i7 = 0; _i7 < _s3; _i7++) {
              l.append(_t6[_i7], h()), A.nextNode(), c.push({
                type: 2,
                index: ++r
              });
            }

            l.append(_t6[_s3], h());
          }
        }
      } else if (8 === l.nodeType) if (l.data === o$1) c.push({
        type: 2,
        index: r
      });else {
        var _t7 = -1;

        for (; -1 !== (_t7 = l.data.indexOf(e, _t7 + 1));) {
          c.push({
            type: 7,
            index: r
          }), _t7 += e.length - 1;
        }
      }

      r++;
    }
  }

  _createClass(E, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = l$2.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);

  return E;
}();

function P(t, i) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  var o, n, l, h;
  if (i === b) return i;
  var d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  var u = r(i) ? void 0 : i._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = P(t, d._$AS(t, i.values), d, e)), i;
}

var V = /*#__PURE__*/function () {
  function V(t, i) {
    _classCallCheck(this, V);

    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  _createClass(V, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "p",
    value: function p(t) {
      var i;
      var _this$_$AD = this._$AD,
          s = _this$_$AD.el.content,
          e = _this$_$AD.parts,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : l$2).importNode(s, !0);
      A.currentNode = o;
      var n = A.nextNode(),
          h = 0,
          r = 0,
          d = e[0];

      for (; void 0 !== d;) {
        if (h === d.index) {
          var _i8 = void 0;

          2 === d.type ? _i8 = new N(n, n.nextSibling, this, t) : 1 === d.type ? _i8 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (_i8 = new L(n, this, t)), this.v.push(_i8), d = e[++r];
        }

        h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
      }

      return o;
    }
  }, {
    key: "m",
    value: function m(t) {
      var i = 0;

      var _iterator2 = _createForOfIteratorHelper(this.v),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s4 = _step2.value;
          void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return V;
}();

var N = /*#__PURE__*/function () {
  function N(t, i, s, e) {
    _classCallCheck(this, N);

    var o;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  _createClass(N, [{
    key: "_$AU",
    get: function get() {
      var t, i;
      return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = P(this, t, i), r(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.k(t) : u(t) ? this.S(t) : this.$(t);
    }
  }, {
    key: "A",
    value: function A(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._$AB;
      return this._$AA.parentNode.insertBefore(t, i);
    }
  }, {
    key: "k",
    value: function k(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.A(t));
    }
  }, {
    key: "$",
    value: function $(t) {
      this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t : this.k(l$2.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "T",
    value: function T(t) {
      var i;
      var s = t.values,
          e = t._$litType$,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = E.createElement(e.h, this.options)), e);
      if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
        var _t8 = new V(o, this),
            _i9 = _t8.p(this.options);

        _t8.m(s), this.k(_i9), this._$AH = _t8;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = T.get(t.strings);
      return void 0 === i && T.set(t.strings, i = new E(t)), i;
    }
  }, {
    key: "S",
    value: function S(t) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
          e = 0;

      var _iterator3 = _createForOfIteratorHelper(t),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _o2 = _step3.value;
          e === i.length ? i.push(s = new N(this.A(h()), this.A(h()), this, this.options)) : s = i[e], s._$AI(_o2), e++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var s;

      for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
        var _i10 = t.nextSibling;
        t.remove(), t = _i10;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var i;
      void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
  }]);

  return N;
}();

var S = /*#__PURE__*/function () {
  function S(t, i, s, e, o) {
    _classCallCheck(this, S);

    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }

  _createClass(S, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var o = this.strings;
      var n = !1;
      if (void 0 === o) t = P(this, t, i, 0), n = !r(t) || t !== this._$AH && t !== b, n && (this._$AH = t);else {
        var _e = t;

        var _l, _h;

        for (t = o[0], _l = 0; _l < o.length - 1; _l++) {
          _h = P(this, _e[s + _l], i, _l), _h === b && (_h = this._$AH[_l]), n || (n = !r(_h) || _h !== this._$AH[_l]), _h === w ? t = w : t !== w && (t += (null != _h ? _h : "") + o[_l + 1]), this._$AH[_l] = _h;
        }
      }
      n && !e && this.C(t);
    }
  }, {
    key: "C",
    value: function C(t) {
      t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }]);

  return S;
}();

var M = /*#__PURE__*/function (_S) {
  _inherits(M, _S);

  var _super = _createSuper(M);

  function M() {
    var _this;

    _classCallCheck(this, M);

    _this = _super.apply(this, arguments), _this.type = 3;
    return _this;
  }

  _createClass(M, [{
    key: "C",
    value: function C(t) {
      this.element[this.name] = t === w ? void 0 : t;
    }
  }]);

  return M;
}(S);

var k = i ? i.emptyScript : "";

var H = /*#__PURE__*/function (_S2) {
  _inherits(H, _S2);

  var _super2 = _createSuper(H);

  function H() {
    var _this2;

    _classCallCheck(this, H);

    _this2 = _super2.apply(this, arguments), _this2.type = 4;
    return _this2;
  }

  _createClass(H, [{
    key: "C",
    value: function C(t) {
      t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
  }]);

  return H;
}(S);

var I = /*#__PURE__*/function (_S3) {
  _inherits(I, _S3);

  var _super3 = _createSuper(I);

  function I(t, i, s, e, o) {
    var _this3;

    _classCallCheck(this, I);

    _this3 = _super3.call(this, t, i, s, e, o), _this3.type = 5;
    return _this3;
  }

  _createClass(I, [{
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s;
      if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : w) === b) return;
      var e = this._$AH,
          o = t === w && e !== w || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== w && (e === w || o);
      o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var i, s;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);

  return I;
}(S);

var L = /*#__PURE__*/function () {
  function L(t, i, s) {
    _classCallCheck(this, L);

    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  _createClass(L, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      P(this, t);
    }
  }]);

  return L;
}();

var z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l$1, o;

var s = /*#__PURE__*/function (_t) {
  _inherits(s, _t);

  var _super = _createSuper(s);

  function s() {
    var _this;

    _classCallCheck(this, s);

    _this = _super.apply(this, arguments), _this.renderOptions = {
      host: _assertThisInitialized(_this)
    }, _this._$Dt = void 0;
    return _this;
  }

  _createClass(s, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t, e;

      var i = _get(_getPrototypeOf(s.prototype), "createRenderRoot", this).call(this);

      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(s.prototype), "update", this).call(this, t), this._$Dt = x(i, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "connectedCallback", this).call(this), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "disconnectedCallback", this).call(this), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
    }
  }, {
    key: "render",
    value: function render() {
      return b;
    }
  }]);

  return s;
}(a$1);

s.finalized = !0, s._$litElement$ = !0, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, {
  LitElement: s
});
var n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s
});
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.0");

var noop = {
  value: function value() {}
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
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      }

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set$1(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;

    for (var t in _) {
      copy[t] = _[t].slice();
    }

    return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
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
function array(x) {
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
    return array(select.apply(this, arguments));
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
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

function constant$1 (x) {
  return function () {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length; // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.

  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  } // Put any non-null nodes that don’t fit into exit.


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
      keyValue; // Compute the key for each node.
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
  } // Compute the key for each datum.
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
  } // Add any remaining nodes that were not bound to data to exit.


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
  if (typeof value !== "function") value = constant$1(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.

    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;

        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
        }

        previous._next = next || null;
      }
    }
  }

  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
} // Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)

function arraylike(data) {
  return _typeof(data) === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
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
  var size = 0;

  var _iterator = _createForOfIteratorHelper(this),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      ++size;
    } // eslint-disable-line no-unused-vars

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

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
  add: function add(name) {
    var i = this._names.indexOf(name);

    if (i < 0) {
      this._names.push(name);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);

    if (i >= 0) {
      this._names.splice(i, 1);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.remove(names[i]);
  }
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

    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }

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

  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, options));
  }

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

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function _callee() {
  var groups, j, m, group, i, n, node;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          groups = this._groups, j = 0, m = groups.length;

        case 1:
          if (!(j < m)) {
            _context.next = 13;
            break;
          }

          group = groups[j], i = 0, n = group.length;

        case 3:
          if (!(i < n)) {
            _context.next = 10;
            break;
          }

          if (!(node = group[i])) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return node;

        case 7:
          ++i;
          _context.next = 3;
          break;

        case 10:
          ++j;
          _context.next = 1;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
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

Selection$1.prototype = selection.prototype = _defineProperty({
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
  dispatch: selection_dispatch
}, Symbol.iterator, _callee);

function select (selector) {
  return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
}

function define (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);

  for (var key in definition) {
    prototype[key] = definition[key];
  }

  return prototype;
}

function Color() {}
var _darker = 0.7;

var _brighter = 1 / _darker;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
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
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
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
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
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
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
/* From FvD 13.37, CSS Color Module Level 3 */

function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

var constant = (function (x) {
  return function () {
    return x;
  };
});

function linear(a, d) {
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
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
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

function interpolateNumber (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
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

  a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.

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
  } // Add remains of b.


  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  } // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.


  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }

    return s.join("");
  });
}

var degrees = 180 / Math.PI;
var identity = {
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
  var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
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

      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }

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
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
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
  restart: function restart(callback, delay, time) {
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
  stop: function stop() {
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
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout (callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
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
      tween; // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.

    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!

      if (o.state === STARTED) return timeout(start); // Interrupt the active transition, if any.

      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    timeout(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    }); // Dispatch the start event.
    // Note this must be done before the tween are initialized.

    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted

    self.state = STARTED; // Initialize the tween, deleting null tween.

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
    } // Dispatch the end event.


    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars


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
        tween = schedule.tween; // If this node shared tween with the previous node,
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
        tween = schedule.tween; // If this node shared tween with the previous node,
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
        on = schedule.on; // If this node shared a dispatch with the previous node,
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

    for (var i in this.__transition) {
      if (+i !== id) return;
    }

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
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
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
      value: function value() {
        if (--size === 0) resolve();
      }
    };
    that.each(function () {
      var schedule = set(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0) {
        on1 = (on0 = on).copy();

        on1._.cancel.push(cancel);

        on1._.interrupt.push(cancel);

        on1._.end.push(end);
      }

      schedule.on = on1;
    }); // The selection was empty, resolve end immediately

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
Transition.prototype = _defineProperty({
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
  end: transition_end
}, Symbol.iterator, selection_prototype[Symbol.iterator]);

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
      throw new Error("transition ".concat(id, " not found"));
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

var _templateObject$6, _templateObject2$6, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
/*
  DecidablesElement Base Class - Not intended for instantiation!
  <decidables-element>
*/

var DecidablesElement = /*#__PURE__*/function (_LitElement) {
  _inherits(DecidablesElement, _LitElement);

  var _super = _createSuper(DecidablesElement);

  function DecidablesElement() {
    var _this;

    _classCallCheck(this, DecidablesElement);

    _this = _super.call(this);
    _this.uniqueId = "decidables-".concat(DecidablesElement.uniqueId);
    return _this;
  }

  _createClass(DecidablesElement, [{
    key: "getComputedStyleValue",
    value: function getComputedStyleValue(property) {
      // HACK: IE11 requires use of polyfill interface to get custom property value in Javascript
      if (window.ShadyCSS) {
        return window.ShadyCSS.getComputedStyleValue(this, property);
      }

      return getComputedStyle(this).getPropertyValue(property);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(DecidablesElement.prototype), "firstUpdated", this).call(this, changedProperties); // Use focus highlighting if keyboard is used at all


      select(this.renderRoot.host).classed('keyboard', true).on('mousemove.keyboard touchstart.keyboard', function (event) {
        var element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', false).on('mousemove.keyboard touchstart.keyboard', null);
      }).on('keydown.keyboard', function (event) {
        var element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', true).on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
    }
  }], [{
    key: "uniqueId",
    get: // HACK: Create a unique ID for each DecidablesElement
    // This is needed because Edge/IE11 don't have real Shadow DOM, so IDs leak
    // out of elements and collide if there is more than one of an element on a
    // page. Known issue for checkbox/switches and the id/for pattern on <input>
    // and <label>
    function get() {
      DecidablesElement.ID += 1;
      return DecidablesElement.ID;
    }
  }, {
    key: "greys",
    get: function get() {
      var grey = '#999999';
      var greys = {};
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
  }, {
    key: "shadows",
    get: function get() {
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
  }, {
    key: "cssBoxShadow",
    value: function cssBoxShadow(elevation) {
      var rotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var inverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var umbraO = this.shadows.opacityUmbra + this.shadows.opacityBoost;
      var penumbraO = this.shadows.opacityPenumbra + this.shadows.opacityBoost;
      var ambientO = this.shadows.opacityAmbient + this.shadows.opacityBoost;
      var umbraC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(umbraO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(umbraO, ")");
      var penumbraC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(penumbraO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(penumbraO, ")");
      var ambientC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(ambientO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(ambientO, ")");
      var umbraM = this.shadows.mapUmbra[elevation];
      var penumbraM = this.shadows.mapPenumbra[elevation];
      var ambientM = this.shadows.mapAmbient[elevation];
      var umbraS = rotate ? "".concat(-umbraM.y, "px ").concat(umbraM.y / 2, "px ").concat(umbraM.b, "px ").concat(umbraM.s, "px") : "".concat(umbraM.y / 2, "px ").concat(umbraM.y, "px ").concat(umbraM.b, "px ").concat(umbraM.s, "px");
      var penumbraS = rotate ? "".concat(-penumbraM.y, "px ").concat(penumbraM.y / 2, "px ").concat(penumbraM.b, "px ").concat(penumbraM.s, "px") : "".concat(penumbraM.y / 2, "px ").concat(penumbraM.y, "px ").concat(penumbraM.b, "px ").concat(penumbraM.s, "px");
      var ambientS = rotate ? "".concat(-ambientM.y, "px ").concat(ambientM.y / 2, "px ").concat(ambientM.b, "px ").concat(ambientM.s, "px") : "".concat(ambientM.y / 2, "px ").concat(ambientM.y, "px ").concat(ambientM.b, "px ").concat(ambientM.s, "px");
      return "".concat(umbraS, " ").concat(umbraC, ", ").concat(penumbraS, " ").concat(penumbraC, ", ").concat(ambientS, " ").concat(ambientC);
    }
  }, {
    key: "svgFilters",
    get: function get() {
      var shadows = DecidablesElement.shadows; // eslint-disable-line prefer-destructuring

      var erodeRadius = 1;
      var filters = shadows.elevations.map(function (z) {
        return y(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n        <filter id=", " x=\"-250%\" y=\"-250%\" width=\"600%\" height=\"600%\">\n          <feComponentTransfer in=\"SourceAlpha\" result=\"solid\">\n            <feFuncA  type=\"table\" tableValues=\"0 1 1\"/>\n          </feComponentTransfer>\n          <feOffset in=\"solid\" result=\"offU\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offP\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offA\" dx=", " dy=", " />\n          ", "\n          ", "\n          ", "\n          <feGaussianBlur in=", " result=\"blurU\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurP\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurA\" stdDeviation=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opU\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opP\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opA\" flood-color=", " flood-opacity=", " />\n          <feComposite in=\"opU\" in2=\"blurU\" result=\"shU\" operator=\"in\" />\n          <feComposite in=\"opP\" in2=\"blurP\" result=\"shP\" operator=\"in\" />\n          <feComposite in=\"opA\" in2=\"blurA\" result=\"shA\" operator=\"in\" />\n          <!-- HACK Edge: Using a dynamic value for erode radius stops Edge from corrupting the \"radius\" value! -->\n          <feMorphology in=\"solid\" result=\"smaller\" operator=\"erode\" radius=", " />\n          <feComposite in=\"shU\" in2=\"smaller\" result=\"finalU\" operator=\"out\" />\n          <feComposite in=\"shP\" in2=\"smaller\" result=\"finalP\" operator=\"out\" />\n          <feComposite in=\"shA\" in2=\"smaller\" result=\"finalA\" operator=\"out\" />\n          <feMerge>\n            <feMergeNode in=\"finalU\" />\n            <feMergeNode in=\"finalP\" />\n            <feMergeNode in=\"finalA\" />\n            <feMergeNode in=\"SourceGraphic\" />\n          </feMerge>\n        </filter>"])), "shadow-".concat(z), shadows.mapUmbra[z].y / 2, shadows.mapUmbra[z].y, shadows.mapPenumbra[z].y / 2, shadows.mapPenumbra[z].y, shadows.mapAmbient[z].y / 2, shadows.mapAmbient[z].y, shadows.mapUmbra[z].s === 0 ? y(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral([""]))) : y(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<feMorphology in=\"offU\" result=\"spreadU\" operator=", " radius=", " />"])), shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapUmbra[z].s)), shadows.mapPenumbra[z].s === 0 ? y(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""]))) : y(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<feMorphology in=\"offP\" result=\"spreadP\" operator=", " radius=", " />"])), shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapPenumbra[z].s)), shadows.mapAmbient[z].s === 0 ? y(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""]))) : y(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<feMorphology in=\"offA\" result=\"spreadA\" operator=", " radius=", " />"])), shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapAmbient[z].s)), shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU', shadows.mapUmbra[z].b / 2, shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP', shadows.mapPenumbra[z].b / 2, shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA', shadows.mapAmbient[z].b / 2, shadows.baselineColor, shadows.opacityUmbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityPenumbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityAmbient + shadows.opacityBoost, erodeRadius);
      });
      return y(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <svg class=\"defs\">\n        <defs>\n          ", "\n        </defs>\n      </svg>\n    "])), filters);
    }
  }, {
    key: "styles",
    get: function get() {
      return r$2(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      :host {\n        ---shadow-0: var(--shadow-0, ", ");\n        ---shadow-2: var(--shadow-2, ", ");\n        ---shadow-4: var(--shadow-4, ", ");\n        ---shadow-8: var(--shadow-8, ", ");\n\n        ---color-background: var(--color-background, ", ");\n        ---color-border: var(--color-border, ", ");\n        ---color-text: var(--color-text, ", ");\n        ---color-text-inverse: var(--color-text-inverse, ", ");\n        ---color-link: var(--color-link, ", ");\n        ---color-element-background: var(--color-element-background, ", ");\n        ---color-element-disabled: var(--color-element-disabled, ", ");\n        ---color-element-enabled: var(--color-element-enabled, ", ");\n        ---color-element-selected: var(--color-element-selected, ", ");\n        ---color-element-border: var(--color-element-border, ", ");\n        ---color-element-emphasis: var(--color-element-emphasis, ", ");\n\n        ---font-family-base: var(--font-family-base, \"Source Sans\", sans-serif);\n        ---font-family-math: var(--font-family-math, \"Source Serif\", serif);\n\n        ---transition-duration: var(--transition-duration, 500ms);\n\n        font-family: var(---font-family-base);\n      }\n\n      :host,\n      :host *,\n      :host *::before,\n      :host *::after {\n        box-sizing: border-box;\n      }\n\n      .math-greek {\n        font-family: var(---font-family-math);\n        font-style: normal;\n      }\n\n      .math-num {\n        font-family: var(---font-family-base);\n        font-style: normal;\n      }\n\n      .math-var {\n        font-family: var(---font-family-math);\n        font-style: italic;\n      }\n\n      .defs {\n        display: block;\n\n        width: 0;\n        height: 0;\n      }\n    "])), o$3(this.cssBoxShadow(0)), o$3(this.cssBoxShadow(2)), o$3(this.cssBoxShadow(4)), o$3(this.cssBoxShadow(8)), o$3(this.greys.white), o$3(this.greys.light75), o$3(this.greys.dark75), o$3(this.greys.white), o$3(this.greys.dark25), o$3(this.greys.light75), o$3(this.greys.light50), o$3(this.greys.grey), o$3(this.greys.dark25), o$3(this.greys.dark50), o$3(this.greys.dark75));
    }
  }]);

  return DecidablesElement;
}(s); // Static property of DecidablesElement!
DecidablesElement.ID = 0;

var _templateObject$5, _templateObject2$5;

var DecidablesButton = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesButton, _DecidablesElement);

  var _super = _createSuper(DecidablesButton);

  function DecidablesButton() {
    var _this;

    _classCallCheck(this, DecidablesButton);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    return _this;
  }

  _createClass(DecidablesButton, [{
    key: "render",
    value: function render() {
      return $(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n      <button ?disabled=", ">\n        <slot></slot>\n      </button>\n    "])), this.disabled);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesButton), "styles", this), r$2(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n        :host {\n          margin: 0.25rem;\n        }\n\n        button {\n          width: 100%;\n          height: 100%;\n          padding: 0.375rem 0.75rem;\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          line-height: 1.5;\n          color: var(---color-text-inverse);\n\n          border: 0;\n          border-radius: 0.25rem;\n          outline: none;\n        }\n\n        button:disabled {\n          background-color: var(--decidables-button-background-color, var(---color-element-disabled));\n          outline: none;\n          box-shadow: none;\n        }\n\n        button:enabled {\n          cursor: pointer;\n\n          background-color: var(--decidables-button-background-color, var(---color-element-enabled));\n          outline: none;\n          box-shadow: var(---shadow-2);\n        }\n\n        button:enabled:hover {\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        button:enabled:active {\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n\n        :host(.keyboard) button:enabled:focus {\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) button:enabled:focus:active {\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidablesButton;
}(DecidablesElement);
customElements.define('decidables-button', DecidablesButton);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l = function l(_l) {
  return null != _l ? _l : w;
};

var _templateObject$4, _templateObject2$4;

var DecidablesSlider = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesSlider, _DecidablesElement);

  var _super = _createSuper(DecidablesSlider);

  function DecidablesSlider() {
    var _this;

    _classCallCheck(this, DecidablesSlider);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    _this.max = undefined;
    _this.min = undefined;
    _this.step = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidablesSlider, [{
    key: "changed",
    value: function changed(event) {
      this.value = event.target.value;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: this.value
        },
        bubbles: true
      }));
    }
  }, {
    key: "inputted",
    value: function inputted(event) {
      this.value = event.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n      <label for=", ">\n        <slot></slot>\n      </label>\n      <div class=\"range\">\n        <input type=\"range\" id=", " min=", " max=", " step=", " .value=", " @change=", " @input=", ">\n      </div>\n      <decidables-spinner min=", " max=", " step=", " .value=", " @input=", "></decidables-spinner>\n    "])), "".concat(this.uniqueId, "-slider"), "".concat(this.uniqueId, "-slider"), l(this.min), l(this.max), l(this.step), this.value, this.changed.bind(this), this.inputted.bind(this), l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesSlider), "styles", this), r$2(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n        :host {\n          ---shadow-2-rotate: var(--shadow-2-rotate, ", ");\n          ---shadow-4-rotate: var(--shadow-4-rotate, ", ");\n          ---shadow-8-rotate: var(--shadow-8-rotate, ", ");\n\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        label {\n          margin: 0.25rem 0.25rem 0;\n        }\n\n        .range {\n          display: inline-block;\n\n          width: 3.5rem;\n          height: 4.75rem;\n          margin: 0 0.25rem 0.25rem;\n        }\n\n        decidables-spinner {\n          --decidables-spinner-input-width: 3.5rem;\n\n          margin: 0 0.25rem 0.25rem;\n        }\n\n        /* Adapted from http://danielstern.ca/range.css/#/ */\n        /* Overall */\n        input[type=range] {\n          width: 4.75rem;\n          height: 3.5rem;\n          padding: 0;\n          margin: 0;\n\n          background-color: unset;\n\n          transform: rotate(-90deg);\n          transform-origin: 2.375rem 2.375rem;\n\n          /* stylelint-disable-next-line property-no-vendor-prefix */\n          -webkit-appearance: none;\n        }\n\n        input[type=range]:enabled {\n          cursor: ns-resize;\n        }\n\n        input[type=range]:focus {\n          outline: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-tooltip {\n          display: none;\n        }\n\n        /* Track */\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-webkit-slider-runnable-track {\n          width: 100%;\n          height: 4px;\n\n          background: var(---color-element-disabled);\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        input[type=range]:focus::-webkit-slider-runnable-track {\n          background: var(---color-element-disabled);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-moz-range-track {\n          width: 100%;\n          height: 4px;\n\n          background: var(---color-element-disabled);\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-track {\n          width: 100%;\n          height: 4px;\n\n          color: transparent;\n\n          background: transparent;\n          border-color: transparent;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-fill-lower {\n          background: #cccccc;\n          /* background: var(---color-element-disabled); */\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-fill-upper {\n          background: #cccccc;\n          /* background: var(---color-element-disabled); */\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:focus::-ms-fill-lower {\n          background: var(---color-element-disabled);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:focus::-ms-fill-upper {\n          background: var(---color-element-disabled);\n        }\n\n        /* Thumb */\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-webkit-slider-thumb {\n          width: 10px;\n          height: 20px;\n          margin-top: -8px;\n\n          border: 0;\n          border-radius: 4px;\n\n          /* stylelint-disable-next-line property-no-vendor-prefix */\n          -webkit-appearance: none;\n        }\n\n        input[type=range]:disabled::-webkit-slider-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        input[type=range]:enabled::-webkit-slider-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        input[type=range]:enabled:hover::-webkit-slider-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        input[type=range]:enabled:active::-webkit-slider-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-moz-range-thumb {\n          width: 10px;\n          height: 20px;\n\n          border: 0;\n          border-radius: 4px;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:disabled::-moz-range-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled::-moz-range-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:hover::-moz-range-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:active::-moz-range-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-thumb {\n          width: 10px;\n          height: 20px;\n          margin-top: 0;\n\n          background: #999999;\n          /* background: var(---color-element-enabled); */\n          border: 0;\n          border-radius: 4px;\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:disabled::-ms-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled::-ms-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:hover::-ms-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:active::-ms-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n      "])), o$3(this.cssBoxShadow(2, true, false)), o$3(this.cssBoxShadow(4, true, false)), o$3(this.cssBoxShadow(8, true, false)))];
    }
  }]);

  return DecidablesSlider;
}(DecidablesElement);
customElements.define('decidables-slider', DecidablesSlider);

var _templateObject$3, _templateObject2$3;

var DecidablesSpinner = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesSpinner, _DecidablesElement);

  var _super = _createSuper(DecidablesSpinner);

  function DecidablesSpinner() {
    var _this;

    _classCallCheck(this, DecidablesSpinner);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    _this.max = undefined;
    _this.min = undefined;
    _this.step = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidablesSpinner, [{
    key: "inputted",
    value: function inputted(event) {
      this.value = event.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n      <label>\n        <slot></slot>\n        <input ?disabled=", " type=\"number\" min=", " max=", " step=", " .value=", " @input=", ">\n      </label>\n    "])), this.disabled, l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesSpinner), "styles", this), r$2(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n        :host {\n          ---decidables-spinner-font-size: var(--decidables-spinner-font-size, 1.125rem);\n          ---decidables-spinner-input-width: var(--decidables-spinner-input-width, 4rem);\n          ---decidables-spinner-prefix: var(--decidables-spinner-prefix, \"\");\n\n          display: block;\n        }\n\n        label {\n          position: relative;\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n\n          margin: 0;\n\n          font-size: 0.75rem;\n        }\n\n        label::before {\n          position: absolute;\n          bottom: 1px;\n          left: calc(50% - var(---decidables-spinner-input-width) / 2 + 0.25rem);\n\n          font-size: var(---decidables-spinner-font-size);\n          line-height: normal;\n\n          content: var(---decidables-spinner-prefix);\n        }\n\n        input[type=number] {\n          width: var(---decidables-spinner-input-width);\n\n          font-family: var(---font-family-base);\n          font-size: var(---decidables-spinner-font-size);\n          color: inherit;\n          text-align: right;\n\n          background: none;\n          border: 0;\n          border-radius: 0;\n          outline: none;\n          box-shadow: var(---shadow-2);\n\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n\n        input[type=number]:hover {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=number]:focus,\n        input[type=number]:active {\n          box-shadow: var(---shadow-8);\n        }\n\n        input[type=number]:disabled {\n          color: var(---color-text);\n\n          border: 0;\n          box-shadow: none;\n\n          /* HACK: Use correct text color in Safari */\n          -webkit-opacity: 1;\n          /* HACK: Hide spinners in disabled input for Firefox and Safari */\n          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */\n          /* HACK: Use correct text color in Safari */\n          -webkit-text-fill-color: var(---color-text);\n        }\n\n        /* HACK: Hide spinners in disabled input for Firefox and Safari */\n        input[type=number]:disabled::-webkit-outer-spin-button,\n        input[type=number]:disabled::-webkit-inner-spin-button {\n          margin: 0;\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n      "])))];
    }
  }]);

  return DecidablesSpinner;
}(DecidablesElement);
customElements.define('decidables-spinner', DecidablesSpinner);

var _templateObject$2, _templateObject2$2;

var DecidablesSwitch = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesSwitch, _DecidablesElement);

  var _super = _createSuper(DecidablesSwitch);

  function DecidablesSwitch() {
    var _this;

    _classCallCheck(this, DecidablesSwitch);

    _this = _super.call(this); // Attributes

    _this.checked = false;
    _this.disabled = false;
    return _this;
  }

  _createClass(DecidablesSwitch, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n      <input type=\"checkbox\" id=", " ?checked=", " ?disabled=", " @change=", ">\n      <label for=", ">\n        <slot name=\"off-label\"></slot>\n      </label>\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "])), "".concat(this.uniqueId, "-checkbox"), this.checked, this.disabled, this.changed.bind(this), "".concat(this.uniqueId, "-checkbox"), "".concat(this.uniqueId, "-checkbox"));
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesSwitch), "styles", this), r$2(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        /* Adapted from https://codepen.io/guuslieben/pen/YyPRVP */\n        input[type=checkbox] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=checkbox] + label {\n          order: 1;\n\n          margin: 0 0.25rem 0.25rem;\n\n          font-weight: 400;\n        }\n\n        input[type=checkbox] + label + label {\n          position: relative;\n\n          min-width: 24px;\n          padding: 0 0 36px;\n          margin: 0.25rem 0.25rem 0;\n\n          font-weight: 400;\n\n          outline: none;\n        }\n\n        input[type=checkbox] + label + label::before,\n        input[type=checkbox] + label + label::after {\n          position: absolute;\n\n          left: 50%;\n\n          margin: 0;\n\n          content: \"\";\n\n          outline: 0;\n\n          transition: all var(---transition-duration) ease;\n          transform: translate(-50%, 0);\n        }\n\n        input[type=checkbox] + label + label::before {\n          bottom: 1px;\n\n          width: 8px;\n          height: 34px;\n\n          background-color: var(---color-element-disabled);\n          border-radius: 4px;\n        }\n\n        input[type=checkbox] + label + label::after {\n          bottom: 0;\n\n          width: 18px;\n          height: 18px;\n\n          background-color: var(---color-element-enabled);\n          border-radius: 50%;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=checkbox]:checked + label + label::after {\n          transform: translate(-50%, -100%);\n        }\n\n        input[type=checkbox]:disabled + label + label::after {\n          background-color: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        input[type=checkbox]:enabled + label,\n        input[type=checkbox]:enabled + label + label {\n          cursor: pointer;\n        }\n\n        input[type=checkbox]:enabled + label:hover + label::after,\n        input[type=checkbox]:enabled + label + label:hover::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=checkbox]:enabled + label:active + label::after,\n        input[type=checkbox]:enabled + label + label:active::after {\n          box-shadow: var(---shadow-8);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,\n        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidablesSwitch;
}(DecidablesElement);
customElements.define('decidables-switch', DecidablesSwitch);

var _templateObject$1, _templateObject2$1;

var DecidablesToggle = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesToggle, _DecidablesElement);

  var _super = _createSuper(DecidablesToggle);

  function DecidablesToggle() {
    var _this;

    _classCallCheck(this, DecidablesToggle);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    return _this;
  }

  _createClass(DecidablesToggle, [{
    key: "render",
    value: function render() {
      return $(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      <fieldset ?disabled=", ">\n        <legend><slot name=\"label\"></slot></legend>\n        <slot></slot>\n      </fieldset>\n    "])), this.disabled);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesToggle), "styles", this), r$2(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        fieldset {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n\n          margin: 0.25rem;\n\n          border: 0;\n        }\n\n        legend {\n          text-align: center;\n        }\n      "])))];
    }
  }]);

  return DecidablesToggle;
}(DecidablesElement);
customElements.define('decidables-toggle', DecidablesToggle);

var _templateObject, _templateObject2;

var DecidablesToggleOption = /*#__PURE__*/function (_DecidablesElement) {
  _inherits(DecidablesToggleOption, _DecidablesElement);

  var _super = _createSuper(DecidablesToggleOption);

  function DecidablesToggleOption() {
    var _this;

    _classCallCheck(this, DecidablesToggleOption);

    _this = _super.call(this); // Attributes

    _this.checked = false;
    _this.disabled = false;
    _this.name = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidablesToggleOption, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <input type=\"radio\" id=", " name=", " value=", " .checked=", " @change=", ">\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "])), "".concat(this.uniqueId, "-radio"), this.name, this.value, this.checked, this.changed.bind(this), "".concat(this.uniqueId, "-radio"));
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidablesToggleOption), "styles", this), r$2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n        }\n\n        input[type=radio] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=radio] + label {\n          width: 100%;\n          padding: 0.375rem 0.75rem;\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          line-height: 1.5;\n          color: var(---color-text-inverse);\n          text-align: center;\n\n          cursor: pointer;\n\n          background-color: var(---color-element-enabled);\n          border: 0;\n          border-radius: 0;\n          outline: none;\n\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio]:checked + label {\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio] + label:hover {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=radio] + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n\n        :host(:first-of-type) input[type=radio] + label {\n          border-top-left-radius: 0.25rem;\n          border-top-right-radius: 0.25rem;\n        }\n\n        :host(:last-of-type) input[type=radio] + label {\n          border-bottom-right-radius: 0.25rem;\n          border-bottom-left-radius: 0.25rem;\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus:checked + label {\n          z-index: 1;\n\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidablesToggleOption;
}(DecidablesElement);
customElements.define('decidables-toggle-option', DecidablesToggleOption);

/*
  Attribute: Space-separated sequence of numbers
  Property: Array of numbers
*/
var DecidablesConverterArray = {
  fromAttribute: function fromAttribute(value) {
    return value.split(/\s+/).map(function (item) {
      return Number.parseFloat(item);
    });
  },
  toAttribute: function toAttribute(value) {
    return value.length ? value.map(function (item) {
      return item.toFixed(3);
    }).join(' ') : null;
  }
};

/*
  Attribute: Space-separated sequence of strings
  Property: Set of strings
*/
var DecidablesConverterSet = {
  fromAttribute: function fromAttribute(value) {
    return new Set(value.split(/\s+/));
  },
  toAttribute: function toAttribute(value) {
    return value.size ? _toConsumableArray(value).join(' ') : null;
  }
};

export { DecidablesButton, DecidablesConverterArray, DecidablesConverterSet, DecidablesElement, DecidablesSlider, DecidablesSpinner, DecidablesSwitch, DecidablesToggle, DecidablesToggleOption };
//# sourceMappingURL=decidablesElements.esm.js.map
