var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$n =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$m = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$l = fails$m;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$l(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});

var fails$k = fails$m;
var functionBindNative = !fails$k(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var call$c = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$c.bind(call$c) : function () {
  return call$c.apply(call$c, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var call$b = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$b, call$b);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$b.apply(fn, arguments);
  };
};

var uncurryThis$t = functionUncurryThis;
var toString$9 = uncurryThis$t({}.toString);
var stringSlice$1 = uncurryThis$t(''.slice);
var classofRaw$2 = function (it) {
  return stringSlice$1(toString$9(it), 8, -1);
};

var uncurryThis$s = functionUncurryThis;
var fails$j = fails$m;
var classof$a = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$s(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$j(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$a(it) === 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;
var $TypeError$h = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$3(it)) throw new $TypeError$h("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;
var toIndexedObject$8 = function (it) {
  return IndexedObject(requireObjectCoercible$6(it));
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$i = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$h = isCallable$i;
var isObject$a = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var global$m = global$n;
var isCallable$g = isCallable$i;
var aFunction = function (argument) {
  return isCallable$g(argument) ? argument : undefined;
};
var getBuiltIn$a = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
};

var uncurryThis$r = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$r({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$l = global$n;
var userAgent$1 = engineUserAgent;
var process$1 = global$l.process;
var Deno$1 = global$l.Deno;
var versions = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$1) {
  match = userAgent$1.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$1.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$i = fails$m;
var global$k = global$n;
var $String$5 = global$k.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$i(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var getBuiltIn$9 = getBuiltIn$a;
var isCallable$f = isCallable$i;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$9('Symbol');
  return isCallable$f($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;
var tryToString$5 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$e = isCallable$i;
var tryToString$4 = tryToString$5;
var $TypeError$g = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$a = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw new $TypeError$g(tryToString$4(argument) + ' is not a function');
};

var aCallable$9 = aCallable$a;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$9(func);
};

var call$a = functionCall;
var isCallable$d = isCallable$i;
var isObject$9 = isObject$a;
var $TypeError$f = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$9(val = call$a(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$9(val = call$a(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$9(val = call$a(fn, input))) return val;
  throw new $TypeError$f("Can't convert object to primitive value");
};

var sharedStore = {exports: {}};

var isPure = false;

var global$j = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;
var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(global$j, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$j[key] = value;
  }
  return value;
};

var globalThis$1 = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: '3.37.0',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var sharedStoreExports = sharedStore.exports;

var store$2 = sharedStoreExports;
var shared$3 = function (key, value) {
  return store$2[key] || (store$2[key] = value || {});
};

var requireObjectCoercible$5 = requireObjectCoercible$7;
var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$5(argument));
};

var uncurryThis$q = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty = uncurryThis$q({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$p = functionUncurryThis;
var id$1 = 0;
var postfix = Math.random();
var toString$8 = uncurryThis$p(1.0.toString);
var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id$1 + postfix, 36);
};

var global$i = global$n;
var shared$2 = shared$3;
var hasOwn$c = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$i.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;
var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$c(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

var call$9 = functionCall;
var isObject$8 = isObject$a;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;
var $TypeError$e = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$8(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$9(exoticToPrim, input, pref);
    if (!isObject$8(result) || isSymbol$2(result)) return result;
    throw new $TypeError$e("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var global$h = global$n;
var isObject$7 = isObject$a;
var document$1 = global$h.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$7(document$1) && isObject$7(document$1.createElement);
var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$f = descriptors;
var fails$h = fails$m;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$f && !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});

var DESCRIPTORS$e = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$7 = toIndexedObject$8;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$b = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$e ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$7(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {/* empty */}
  if (hasOwn$b(O, P)) return createPropertyDescriptor$4(!call$8(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$d = descriptors;
var fails$g = fails$m;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$d && fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$6 = isObject$a;
var $String$3 = String;
var $TypeError$d = TypeError;

// `Assert: Type(argument) is Object`
var anObject$a = function (argument) {
  if (isObject$6(argument)) return argument;
  throw new $TypeError$d($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$c = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$3;
var $TypeError$c = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$c ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$c('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$b = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var createNonEnumerableProperty$4 = DESCRIPTORS$b ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$a = descriptors;
var hasOwn$a = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$a && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$a(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$a || DESCRIPTORS$a && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$o = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStoreExports;
var functionToString = uncurryThis$o(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store$1.inspectSource;

var global$g = global$n;
var isCallable$b = isCallable$i;
var WeakMap$2 = global$g.WeakMap;
var weakMapBasicDetection = isCallable$b(WeakMap$2) && /native code/.test(String(WeakMap$2));

var shared$1 = shared$3;
var uid$2 = uid$4;
var keys$1 = shared$1('keys');
var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$2(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$f = global$n;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$9 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$f.TypeError;
var WeakMap$1 = global$f.WeakMap;
var set$4, get$3, has$7;
var enforce = function (it) {
  return has$7(it) ? get$3(it) : set$4(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get$3(it)).type !== TYPE) {
      throw new TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$4 = function (it, metadata) {
    if (store.has(it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$3 = function (it) {
    return store.get(it) || {};
  };
  has$7 = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$4 = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get$3 = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has$7 = function (it) {
    return hasOwn$9(it, STATE);
  };
}
var internalState = {
  set: set$4,
  get: get$3,
  has: has$7,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$n = functionUncurryThis;
var fails$f = fails$m;
var isCallable$a = isCallable$i;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$9 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$1 = internalState;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;
var stringSlice = uncurryThis$n(''.slice);
var replace$1 = uncurryThis$n(''.replace);
var join$1 = uncurryThis$n([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$9 && !fails$f(function () {
  return defineProperty$3(function () {/* empty */}, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$2(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$8(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS$9) defineProperty$3(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$8(options, 'arity') && value.length !== options.arity) {
    defineProperty$3(value, 'length', {
      value: options.arity
    });
  }
  try {
    if (options && hasOwn$8(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$9) defineProperty$3(value, 'prototype', {
        writable: false
      });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {/* empty */}
  var state = enforceInternalState$1(value);
  if (!hasOwn$8(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  }
  return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$a(this) && getInternalState$1(this).source || inspectSource$1(this);
}, 'toString');
var makeBuiltInExports = makeBuiltIn$3.exports;

var isCallable$9 = isCallable$i;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$4 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$9(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {/* empty */}
    if (simple) O[key] = value;else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$7 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;
var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$6(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;
var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2 = function (argument) {
  var len = toIntegerOrInfinity$5(argument);
  return len > 0 ? min$2(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$9 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$6 = toIndexedObject$8;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$8 = lengthOfArrayLike$9;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$6($this);
    var length = lengthOfArrayLike$8(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$m = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$5 = toIndexedObject$8;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$4 = uncurryThis$m([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$5(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$2, key) && hasOwn$7(O, key) && push$4(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf(result, key) || push$4(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$8 = getBuiltIn$a;
var uncurryThis$l = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$8 = anObject$a;
var concat = uncurryThis$l([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$8('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$8(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$6 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$6(target, key) && !(exceptions && hasOwn$6(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$e = fails$m;
var isCallable$8 = isCallable$i;
var replacement = /#|\.prototype\./;
var isForced$1 = function (feature, detection) {
  var value = data[normalize$1(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$8(detection) ? fails$e(detection) : !!detection;
};
var normalize$1 = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$e = global$n;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$3 = defineBuiltIn$4;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$e;
  } else if (STATIC) {
    target = global$e[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global$e[TARGET] && global$e[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn$3(target, key, sourceProperty, options);
  }
};

var classof$9 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$9(argument) === 'Array';
};

var DESCRIPTORS$8 = descriptors;
var isArray = isArray$1;
var $TypeError$b = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$8 && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', {
      writable: false
    }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();
var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError$b('Cannot set read only .length');
  }
  return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError$a = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$a('Maximum allowed index exceeded');
  return it;
};

var $$q = _export;
var toObject$2 = toObject$4;
var lengthOfArrayLike$7 = lengthOfArrayLike$9;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var fails$d = fails$m;
var INCORRECT_TO_LENGTH = fails$d(function () {
  return [].push.call({
    length: 0x100000000
  }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength$1 = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', {
      writable: false
    }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED$2 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$$q({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED$2
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$2(this);
    var len = lengthOfArrayLike$7(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$2(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$1(O, len);
    return len;
  }
});

var lengthOfArrayLike$6 = lengthOfArrayLike$9;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
var arrayToReversed$2 = function (O, C) {
  var len = lengthOfArrayLike$6(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$7 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$7 = anObject$a;
var toIndexedObject$4 = toIndexedObject$8;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var props = toIndexedObject$4(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$7 = getBuiltIn$a;
var html$2 = getBuiltIn$7('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$6 = anObject$a;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');
var EmptyConstructor = function () {/* empty */};
var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {/* ignore */}
  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$6(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$6 = wellKnownSymbol$8;
var create$2 = objectCreate;
var defineProperty$2 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$6('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
  defineProperty$2(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$3 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $$p = _export;
var arrayToReversed$1 = arrayToReversed$2;
var toIndexedObject$3 = toIndexedObject$8;
var addToUnscopables$2 = addToUnscopables$3;
var $Array$4 = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$$p({
  target: 'Array',
  proto: true
}, {
  toReversed: function toReversed() {
    return arrayToReversed$1(toIndexedObject$3(this), $Array$4);
  }
});
addToUnscopables$2('toReversed');

var lengthOfArrayLike$5 = lengthOfArrayLike$9;
var arrayFromConstructorAndList$2 = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike$5(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var global$d = global$n;
var getBuiltInPrototypeMethod$1 = function (CONSTRUCTOR, METHOD) {
  var Constructor = global$d[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};

var $$o = _export;
var uncurryThis$k = functionUncurryThis;
var aCallable$8 = aCallable$a;
var toIndexedObject$2 = toIndexedObject$8;
var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$2;
var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$1;
var addToUnscopables$1 = addToUnscopables$3;
var $Array$3 = Array;
var sort$1 = uncurryThis$k(getBuiltInPrototypeMethod('Array', 'sort'));

// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$$o({
  target: 'Array',
  proto: true
}, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable$8(compareFn);
    var O = toIndexedObject$2(this);
    var A = arrayFromConstructorAndList$1($Array$3, O);
    return sort$1(A, compareFn);
  }
});
addToUnscopables$1('toSorted');

var $$n = _export;
var addToUnscopables = addToUnscopables$3;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var lengthOfArrayLike$4 = lengthOfArrayLike$9;
var toAbsoluteIndex = toAbsoluteIndex$2;
var toIndexedObject$1 = toIndexedObject$8;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
var $Array$2 = Array;
var max$1 = Math.max;
var min$1 = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$$n({
  target: 'Array',
  proto: true
}, {
  toSpliced: function toSpliced(start, deleteCount /* , ...items */) {
    var O = toIndexedObject$1(this);
    var len = lengthOfArrayLike$4(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var k = 0;
    var insertCount, actualDeleteCount, newLen, A;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$1(max$1(toIntegerOrInfinity$4(deleteCount), 0), len - actualStart);
    }
    newLen = doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
    A = $Array$2(newLen);
    for (; k < actualStart; k++) A[k] = O[k];
    for (; k < actualStart + insertCount; k++) A[k] = arguments[k - actualStart + 2];
    for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];
    return A;
  }
});
addToUnscopables('toSpliced');

var tryToString$3 = tryToString$5;
var $TypeError$9 = TypeError;
var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$9('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var $$m = _export;
var toObject$1 = toObject$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$9;
var setArrayLength = arraySetLength;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', {
      writable: false
    }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED$1 = INCORRECT_RESULT || !properErrorOnNonWritableLength();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$$m({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED$1
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject$1(this);
    var len = lengthOfArrayLike$3(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    }
    return setArrayLength(O, len + argCount);
  }
});

var lengthOfArrayLike$2 = lengthOfArrayLike$9;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$7;
var $RangeError$2 = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
var arrayWith$2 = function (O, C, index, value) {
  var len = lengthOfArrayLike$2(O);
  var relativeIndex = toIntegerOrInfinity$3(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError$2('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};

var $$l = _export;
var arrayWith$1 = arrayWith$2;
var toIndexedObject = toIndexedObject$8;
var $Array$1 = Array;

// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$$l({
  target: 'Array',
  proto: true
}, {
  'with': function (index, value) {
    return arrayWith$1(toIndexedObject(this), $Array$1, index, value);
  }
});

var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;
var defineBuiltInAccessor$4 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    getter: true
  });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    setter: true
  });
  return defineProperty$1.f(target, name, descriptor);
};

var uncurryThis$j = functionUncurryThis;
var aCallable$7 = aCallable$a;
var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$j(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

var uncurryThisAccessor$3 = functionUncurryThisAccessor;
var classof$8 = classofRaw$2;
var $TypeError$8 = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
var arrayBufferByteLength$2 = uncurryThisAccessor$3(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof$8(O) !== 'ArrayBuffer') throw new $TypeError$8('ArrayBuffer expected');
  return O.byteLength;
};

var uncurryThis$i = functionUncurryThis;
var arrayBufferByteLength$1 = arrayBufferByteLength$2;
var slice$1 = uncurryThis$i(ArrayBuffer.prototype.slice);
var arrayBufferIsDetached = function (O) {
  if (arrayBufferByteLength$1(O) !== 0) return false;
  try {
    slice$1(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};

var DESCRIPTORS$6 = descriptors;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$4;
var isDetached$1 = arrayBufferIsDetached;
var ArrayBufferPrototype$1 = ArrayBuffer.prototype;
if (DESCRIPTORS$6 && !('detached' in ArrayBufferPrototype$1)) {
  defineBuiltInAccessor$3(ArrayBufferPrototype$1, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached$1(this);
    }
  });
}

var toIntegerOrInfinity$2 = toIntegerOrInfinity$7;
var toLength = toLength$2;
var $RangeError$1 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$1 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$2(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError$1('Wrong length or index');
  return length;
};

var global$c = global$n;
var classof$7 = classofRaw$2;
var engineIsNode = classof$7(global$c.process) === 'process';

var IS_NODE$3 = engineIsNode;
var tryNodeRequire$1 = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE$3) return Function('return require("' + name + '")')();
  } catch (error) {/* empty */}
};

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2 && typeof window == 'object' && typeof document == 'object';

var global$b = global$n;
var fails$c = fails$m;
var V8 = engineV8Version;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var structuredClone$3 = global$b.structuredClone;
var structuredCloneProperTransfer = !!structuredClone$3 && !fails$c(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (IS_DENO && V8 > 92 || IS_NODE$1 && V8 > 94 || IS_BROWSER && V8 > 97) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$3(buffer, {
    transfer: [buffer]
  });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});

var global$a = global$n;
var tryNodeRequire = tryNodeRequire$1;
var PROPER_STRUCTURED_CLONE_TRANSFER$2 = structuredCloneProperTransfer;
var structuredClone$2 = global$a.structuredClone;
var $ArrayBuffer = global$a.ArrayBuffer;
var $MessageChannel = global$a.MessageChannel;
var detach = false;
var WorkerThreads, channel$1, buffer, $detach;
if (PROPER_STRUCTURED_CLONE_TRANSFER$2) {
  detach = function (transferable) {
    structuredClone$2(transferable, {
      transfer: [transferable]
    });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }
  if ($MessageChannel) {
    channel$1 = new $MessageChannel();
    buffer = new $ArrayBuffer(2);
    $detach = function (transferable) {
      channel$1.port1.postMessage(null, [transferable]);
    };
    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) {/* empty */}
var detachTransferable$2 = detach;

var global$9 = global$n;
var uncurryThis$h = functionUncurryThis;
var uncurryThisAccessor$2 = functionUncurryThisAccessor;
var toIndex = toIndex$1;
var isDetached = arrayBufferIsDetached;
var arrayBufferByteLength = arrayBufferByteLength$2;
var detachTransferable$1 = detachTransferable$2;
var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;
var structuredClone$1 = global$9.structuredClone;
var ArrayBuffer$1 = global$9.ArrayBuffer;
var DataView$1 = global$9.DataView;
var TypeError$3 = global$9.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataViewPrototype = DataView$1.prototype;
var slice = uncurryThis$h(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor$2(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor$2(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis$h(DataViewPrototype.getInt8);
var setInt8 = uncurryThis$h(DataViewPrototype.setInt8);
var arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER$1 || detachTransferable$1) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError$3('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
    arrayBuffer = structuredClone$1(arrayBuffer, {
      transfer: [arrayBuffer]
    });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? {
      maxByteLength: maxByteLength(arrayBuffer)
    } : undefined;
    newBuffer = new ArrayBuffer$1(newByteLength, options);
    var a = new DataView$1(arrayBuffer);
    var b = new DataView$1(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER$1) detachTransferable$1(arrayBuffer);
  return newBuffer;
};

var $$k = _export;
var $transfer$1 = arrayBufferTransfer;

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer$1) $$k({
  target: 'ArrayBuffer',
  proto: true
}, {
  transfer: function transfer() {
    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
  }
});

var $$j = _export;
var $transfer = arrayBufferTransfer;

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $$j({
  target: 'ArrayBuffer',
  proto: true
}, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});

var classofRaw$1 = classofRaw$2;
var uncurryThis$g = functionUncurryThis;
var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$g(fn);
};

var uncurryThis$f = functionUncurryThisClause;
var aCallable$6 = aCallable$a;
var NATIVE_BIND$1 = functionBindNative;
var bind$2 = uncurryThis$f(uncurryThis$f.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$6(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$2(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var iterators = {};

var wellKnownSymbol$5 = wellKnownSymbol$8;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$5('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var wellKnownSymbol$4 = wellKnownSymbol$8;
var TO_STRING_TAG$2 = wellKnownSymbol$4('toStringTag');
var test = {};
test[TO_STRING_TAG$2] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$7 = isCallable$i;
var classofRaw = classofRaw$2;
var wellKnownSymbol$3 = wellKnownSymbol$8;
var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O)
  // ES3 arguments fallback
  : (result = classofRaw(O)) === 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol$2 = wellKnownSymbol$8;
var ITERATOR$1 = wellKnownSymbol$2('iterator');
var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1) || getMethod$1(it, '@@iterator') || Iterators[classof$5(it)];
};

var call$7 = functionCall;
var aCallable$5 = aCallable$a;
var anObject$5 = anObject$a;
var tryToString$2 = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$7 = TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$5(iteratorMethod)) return anObject$5(call$7(iteratorMethod, argument));
  throw new $TypeError$7(tryToString$2(argument) + ' is not iterable');
};

var call$6 = functionCall;
var anObject$4 = anObject$a;
var getMethod = getMethod$3;
var iteratorClose$3 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$6(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$4(innerResult);
  return value;
};

var bind$1 = functionBindContext;
var call$5 = functionCall;
var anObject$3 = anObject$a;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$9;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose$2 = iteratorClose$3;
var $TypeError$6 = TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$5 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$1(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose$2(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$6(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$3(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$5(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$2(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$3(ResultPrototype, result)) return result;
  }
  return new Result(false);
};

var uncurryThis$e = functionUncurryThis;

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis$e(MapPrototype.set),
  get: uncurryThis$e(MapPrototype.get),
  has: uncurryThis$e(MapPrototype.has),
  remove: uncurryThis$e(MapPrototype['delete']),
  proto: MapPrototype
};

var $$i = _export;
var uncurryThis$d = functionUncurryThis;
var aCallable$4 = aCallable$a;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var iterate$4 = iterate$5;
var MapHelpers$1 = mapHelpers;
var fails$b = fails$m;
var Map$2 = MapHelpers$1.Map;
var has$6 = MapHelpers$1.has;
var get$2 = MapHelpers$1.get;
var set$3 = MapHelpers$1.set;
var push$3 = uncurryThis$d([].push);
var DOES_NOT_WORK_WITH_PRIMITIVES$1 = fails$b(function () {
  return Map$2.groupBy('ab', function (it) {
    return it;
  }).get('a').length !== 1;
});

// `Map.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$$i({
  target: 'Map',
  stat: true,
  forced: DOES_NOT_WORK_WITH_PRIMITIVES$1
}, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible$4(items);
    aCallable$4(callbackfn);
    var map = new Map$2();
    var k = 0;
    iterate$4(items, function (value) {
      var key = callbackfn(value, k++);
      if (!has$6(map, key)) set$3(map, key, [value]);else push$3(get$2(map, key), value);
    });
    return map;
  }
});

var $$h = _export;
var getBuiltIn$6 = getBuiltIn$a;
var uncurryThis$c = functionUncurryThis;
var aCallable$3 = aCallable$a;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var toPropertyKey = toPropertyKey$3;
var iterate$3 = iterate$5;
var fails$a = fails$m;

// eslint-disable-next-line es/no-object-map-groupby -- testing
var nativeGroupBy = Object.groupBy;
var create$1 = getBuiltIn$6('Object', 'create');
var push$2 = uncurryThis$c([].push);
var DOES_NOT_WORK_WITH_PRIMITIVES = !nativeGroupBy || fails$a(function () {
  return nativeGroupBy('ab', function (it) {
    return it;
  }).a.length !== 1;
});

// `Object.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$$h({
  target: 'Object',
  stat: true,
  forced: DOES_NOT_WORK_WITH_PRIMITIVES
}, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible$3(items);
    aCallable$3(callbackfn);
    var obj = create$1(null);
    var k = 0;
    iterate$3(items, function (value) {
      var key = toPropertyKey(callbackfn(value, k++));
      // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
      // but since it's a `null` prototype object, we can safely use `in`
      if (key in obj) push$2(obj[key], value);else obj[key] = [value];
    });
    return obj;
  }
});

var newPromiseCapability = {};

var aCallable$2 = aCallable$a;
var $TypeError$5 = TypeError;
var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$5('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$2(resolve);
  this.reject = aCallable$2(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability.f = function (C) {
  return new PromiseCapability(C);
};

var $$g = _export;
var newPromiseCapabilityModule = newPromiseCapability;

// `Promise.withResolvers` method
// https://github.com/tc39/proposal-promise-with-resolvers
$$g({
  target: 'Promise',
  stat: true
}, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});

var anObject$2 = anObject$a;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject$2(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var global$8 = global$n;
var DESCRIPTORS$5 = descriptors;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$4;
var regExpFlags$1 = regexpFlags;
var fails$9 = fails$m;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = global$8.RegExp;
var RegExpPrototype$1 = RegExp$1.prototype;
var FORCED = DESCRIPTORS$5 && fails$9(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp$1('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }
  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, {
      get: function () {
        calls += chr;
        return true;
      }
    });
  };
  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };
  if (INDICES_SUPPORT) pairs.hasIndices = 'd';
  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype$1, 'flags').get.call(O);
  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor$2(RegExpPrototype$1, 'flags', {
  configurable: true,
  get: regExpFlags$1
});

var uncurryThis$b = functionUncurryThis;

// eslint-disable-next-line es/no-set -- safe
var SetPrototype$1 = Set.prototype;
var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis$b(SetPrototype$1.add),
  has: uncurryThis$b(SetPrototype$1.has),
  remove: uncurryThis$b(SetPrototype$1['delete']),
  proto: SetPrototype$1
};

var has$5 = setHelpers.has;

// Perform ? RequireInternalSlot(M, [[SetData]])
var aSet$7 = function (it) {
  has$5(it);
  return it;
};

var call$4 = functionCall;
var iterateSimple$7 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call$4(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};

var uncurryThis$a = functionUncurryThis;
var iterateSimple$6 = iterateSimple$7;
var SetHelpers$6 = setHelpers;
var Set$4 = SetHelpers$6.Set;
var SetPrototype = SetHelpers$6.proto;
var forEach$2 = uncurryThis$a(SetPrototype.forEach);
var keys = uncurryThis$a(SetPrototype.keys);
var next = keys(new Set$4()).next;
var setIterate$1 = function (set, fn, interruptible) {
  return interruptible ? iterateSimple$6({
    iterator: keys(set),
    next: next
  }, fn) : forEach$2(set, fn);
};

var SetHelpers$5 = setHelpers;
var iterate$2 = setIterate$1;
var Set$3 = SetHelpers$5.Set;
var add$3 = SetHelpers$5.add;
var setClone = function (set) {
  var result = new Set$3();
  iterate$2(set, function (it) {
    add$3(result, it);
  });
  return result;
};

var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var SetHelpers$4 = setHelpers;
var setSize = uncurryThisAccessor$1(SetHelpers$4.proto, 'size', 'get') || function (set) {
  return set.size;
};

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
var getIteratorDirect$1 = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};

var aCallable$1 = aCallable$a;
var anObject$1 = anObject$a;
var call$3 = functionCall;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$7;
var getIteratorDirect = getIteratorDirect$1;
var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError$4 = TypeError;
var max = Math.max;
var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable$1(set.has);
  this.keys = aCallable$1(set.keys);
};
SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject$1(call$3(this.keys, this.set)));
  },
  includes: function (it) {
    return call$3(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
var getSetRecord$7 = function (obj) {
  anObject$1(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError$4(INVALID_SIZE);
  var intSize = toIntegerOrInfinity$1(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};

var aSet$6 = aSet$7;
var SetHelpers$3 = setHelpers;
var clone$2 = setClone;
var size$4 = setSize;
var getSetRecord$6 = getSetRecord$7;
var iterateSet$2 = setIterate$1;
var iterateSimple$5 = iterateSimple$7;
var has$4 = SetHelpers$3.has;
var remove$2 = SetHelpers$3.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
var setDifference = function difference(other) {
  var O = aSet$6(this);
  var otherRec = getSetRecord$6(other);
  var result = clone$2(O);
  if (size$4(O) <= otherRec.size) iterateSet$2(O, function (e) {
    if (otherRec.includes(e)) remove$2(result, e);
  });else iterateSimple$5(otherRec.getIterator(), function (e) {
    if (has$4(O, e)) remove$2(result, e);
  });
  return result;
};

var getBuiltIn$5 = getBuiltIn$a;
var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return {
            done: true
          };
        }
      };
    }
  };
};
var setMethodAcceptSetLike$7 = function (name) {
  var Set = getBuiltIn$5('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

var $$f = _export;
var difference = setDifference;
var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$$f({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike$6('difference')
}, {
  difference: difference
});

var aSet$5 = aSet$7;
var SetHelpers$2 = setHelpers;
var size$3 = setSize;
var getSetRecord$5 = getSetRecord$7;
var iterateSet$1 = setIterate$1;
var iterateSimple$4 = iterateSimple$7;
var Set$2 = SetHelpers$2.Set;
var add$2 = SetHelpers$2.add;
var has$3 = SetHelpers$2.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
var setIntersection = function intersection(other) {
  var O = aSet$5(this);
  var otherRec = getSetRecord$5(other);
  var result = new Set$2();
  if (size$3(O) > otherRec.size) {
    iterateSimple$4(otherRec.getIterator(), function (e) {
      if (has$3(O, e)) add$2(result, e);
    });
  } else {
    iterateSet$1(O, function (e) {
      if (otherRec.includes(e)) add$2(result, e);
    });
  }
  return result;
};

var $$e = _export;
var fails$8 = fails$m;
var intersection = setIntersection;
var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;
var INCORRECT = !setMethodAcceptSetLike$5('intersection') || fails$8(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$$e({
  target: 'Set',
  proto: true,
  real: true,
  forced: INCORRECT
}, {
  intersection: intersection
});

var aSet$4 = aSet$7;
var has$2 = setHelpers.has;
var size$2 = setSize;
var getSetRecord$4 = getSetRecord$7;
var iterateSet = setIterate$1;
var iterateSimple$3 = iterateSimple$7;
var iteratorClose$1 = iteratorClose$3;

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
var setIsDisjointFrom = function isDisjointFrom(other) {
  var O = aSet$4(this);
  var otherRec = getSetRecord$4(other);
  if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple$3(iterator, function (e) {
    if (has$2(O, e)) return iteratorClose$1(iterator, 'normal', false);
  }) !== false;
};

var $$d = _export;
var isDisjointFrom = setIsDisjointFrom;
var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
$$d({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike$4('isDisjointFrom')
}, {
  isDisjointFrom: isDisjointFrom
});

var aSet$3 = aSet$7;
var size$1 = setSize;
var iterate$1 = setIterate$1;
var getSetRecord$3 = getSetRecord$7;

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
var setIsSubsetOf = function isSubsetOf(other) {
  var O = aSet$3(this);
  var otherRec = getSetRecord$3(other);
  if (size$1(O) > otherRec.size) return false;
  return iterate$1(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};

var $$c = _export;
var isSubsetOf = setIsSubsetOf;
var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$$c({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike$3('isSubsetOf')
}, {
  isSubsetOf: isSubsetOf
});

var aSet$2 = aSet$7;
var has$1 = setHelpers.has;
var size = setSize;
var getSetRecord$2 = getSetRecord$7;
var iterateSimple$2 = iterateSimple$7;
var iteratorClose = iteratorClose$3;

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
var setIsSupersetOf = function isSupersetOf(other) {
  var O = aSet$2(this);
  var otherRec = getSetRecord$2(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple$2(iterator, function (e) {
    if (!has$1(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};

var $$b = _export;
var isSupersetOf = setIsSupersetOf;
var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
$$b({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike$2('isSupersetOf')
}, {
  isSupersetOf: isSupersetOf
});

var aSet$1 = aSet$7;
var SetHelpers$1 = setHelpers;
var clone$1 = setClone;
var getSetRecord$1 = getSetRecord$7;
var iterateSimple$1 = iterateSimple$7;
var add$1 = SetHelpers$1.add;
var has = SetHelpers$1.has;
var remove$1 = SetHelpers$1.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
var setSymmetricDifference = function symmetricDifference(other) {
  var O = aSet$1(this);
  var keysIter = getSetRecord$1(other).getIterator();
  var result = clone$1(O);
  iterateSimple$1(keysIter, function (e) {
    if (has(O, e)) remove$1(result, e);else add$1(result, e);
  });
  return result;
};

var $$a = _export;
var symmetricDifference = setSymmetricDifference;
var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$$a({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike$1('symmetricDifference')
}, {
  symmetricDifference: symmetricDifference
});

var aSet = aSet$7;
var add = setHelpers.add;
var clone = setClone;
var getSetRecord = getSetRecord$7;
var iterateSimple = iterateSimple$7;

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
var setUnion = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};

var $$9 = _export;
var union = setUnion;
var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$$9({
  target: 'Set',
  proto: true,
  real: true,
  forced: !setMethodAcceptSetLike('union')
}, {
  union: union
});

var classof$4 = classof$6;
var $String$1 = String;
var toString$7 = function (argument) {
  if (classof$4(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var $$8 = _export;
var uncurryThis$9 = functionUncurryThis;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var toString$6 = toString$7;
var charCodeAt$1 = uncurryThis$9(''.charCodeAt);

// `String.prototype.isWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$8({
  target: 'String',
  proto: true
}, {
  isWellFormed: function isWellFormed() {
    var S = toString$6(requireObjectCoercible$2(this));
    var length = S.length;
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt$1(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) continue;
      // unpaired surrogate
      if (charCode >= 0xDC00 || ++i >= length || (charCodeAt$1(S, i) & 0xFC00) !== 0xDC00) return false;
    }
    return true;
  }
});

var $$7 = _export;
var call$2 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var toString$5 = toString$7;
var fails$7 = fails$m;
var $Array = Array;
var charAt = uncurryThis$8(''.charAt);
var charCodeAt = uncurryThis$8(''.charCodeAt);
var join = uncurryThis$8([].join);
// eslint-disable-next-line es/no-string-prototype-iswellformed-towellformed -- safe
var $toWellFormed = ''.toWellFormed;
var REPLACEMENT_CHARACTER = '\uFFFD';

// Safari bug
var TO_STRING_CONVERSION_BUG = $toWellFormed && fails$7(function () {
  return call$2($toWellFormed, 1) !== '1';
});

// `String.prototype.toWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$7({
  target: 'String',
  proto: true,
  forced: TO_STRING_CONVERSION_BUG
}, {
  toWellFormed: function toWellFormed() {
    var S = toString$5(requireObjectCoercible$1(this));
    if (TO_STRING_CONVERSION_BUG) return call$2($toWellFormed, S);
    var length = S.length;
    var result = $Array(length);
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) result[i] = charAt(S, i);
      // unpaired surrogate
      else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) !== 0xDC00) result[i] = REPLACEMENT_CHARACTER;
      // surrogate pair
      else {
        result[i] = charAt(S, i);
        result[++i] = charAt(S, i);
      }
    }
    return join(result, '');
  }
});

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var fails$6 = fails$m;
var correctPrototypeGetter = !fails$6(function () {
  function F() {/* empty */}
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$6 = isCallable$i;
var toObject = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$1 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$6(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype$1 : null;
};

var isObject$4 = isObject$a;
var isPossiblePrototype$1 = function (argument) {
  return isObject$4(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;
var $String = String;
var $TypeError$3 = TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$3("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$3 = isObject$a;
var requireObjectCoercible = requireObjectCoercible$7;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {/* empty */}
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject$3(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$4 = descriptors;
var global$7 = global$n;
var isCallable$5 = isCallable$i;
var isObject$2 = isObject$a;
var hasOwn$4 = hasOwnProperty_1;
var classof$3 = classof$6;
var tryToString = tryToString$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn$2 = defineBuiltIn$4;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$4;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var wellKnownSymbol$1 = wellKnownSymbol$8;
var uid$1 = uid$4;
var InternalStateModule = internalState;
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array$1 = global$7.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var Uint8ClampedArray = global$7.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array$1 && getPrototypeOf(Int8Array$1);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError$2 = global$7.TypeError;
var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
var TYPED_ARRAY_TAG = uid$1('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$3(global$7.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME$2, Constructor, Prototype;
var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
var isView = function isView(it) {
  if (!isObject$2(it)) return false;
  var klass = classof$3(it);
  return klass === 'DataView' || hasOwn$4(TypedArrayConstructorsList, klass) || hasOwn$4(BigIntArrayConstructorsList, klass);
};
var getTypedArrayConstructor$3 = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$2(proto)) return;
  var state = getInternalState(proto);
  return state && hasOwn$4(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$3(proto);
};
var isTypedArray = function (it) {
  if (!isObject$2(it)) return false;
  var klass = classof$3(it);
  return hasOwn$4(TypedArrayConstructorsList, klass) || hasOwn$4(BigIntArrayConstructorsList, klass);
};
var aTypedArray$3 = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError$2('Target is not a typed array');
};
var aTypedArrayConstructor = function (C) {
  if (isCallable$5(C) && (!setPrototypeOf$1 || isPrototypeOf$2(TypedArray, C))) return C;
  throw new TypeError$2(tryToString(C) + ' is not a typed array constructor');
};
var exportTypedArrayMethod$3 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$4) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$7[ARRAY];
    if (TypedArrayConstructor && hasOwn$4(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) {/* empty */}
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn$2(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};
var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$4) return;
  if (setPrototypeOf$1) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$7[ARRAY];
      if (TypedArrayConstructor && hasOwn$4(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) {/* empty */}
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$2(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) {/* empty */}
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$7[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$2(TypedArrayConstructor, KEY, property);
    }
  }
};
for (NAME$2 in TypedArrayConstructorsList) {
  Constructor = global$7[NAME$2];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;else NATIVE_ARRAY_BUFFER_VIEWS = false;
}
for (NAME$2 in BigIntArrayConstructorsList) {
  Constructor = global$7[NAME$2];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable$5(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError$2('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$2 in TypedArrayConstructorsList) {
    if (global$7[NAME$2]) setPrototypeOf$1(global$7[NAME$2], TypedArray);
  }
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$2 in TypedArrayConstructorsList) {
    if (global$7[NAME$2]) setPrototypeOf$1(global$7[NAME$2].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}
if (DESCRIPTORS$4 && !hasOwn$4(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$1(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$2(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME$2 in TypedArrayConstructorsList) if (global$7[NAME$2]) {
    createNonEnumerableProperty$1(global$7[NAME$2], TYPED_ARRAY_TAG, NAME$2);
  }
}
var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray$3,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod$3,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor$3,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

var arrayToReversed = arrayToReversed$2;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
var getTypedArrayConstructor$2 = ArrayBufferViewCore$2.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod$2('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray$2(this), getTypedArrayConstructor$2(this));
});

var ArrayBufferViewCore$1 = arrayBufferViewCore;
var uncurryThis$7 = functionUncurryThis;
var aCallable = aCallable$a;
var arrayFromConstructorAndList = arrayFromConstructorAndList$2;
var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var sort = uncurryThis$7(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod$1('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray$1(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor$1(O), O);
  return sort(A, compareFn);
});

var classof$2 = classof$6;
var isBigIntArray$1 = function (it) {
  var klass = classof$2(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;
var $TypeError$2 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$1 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError$2("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var arrayWith = arrayWith$2;
var ArrayBufferViewCore = arrayBufferViewCore;
var isBigIntArray = isBigIntArray$1;
var toIntegerOrInfinity = toIntegerOrInfinity$7;
var toBigInt = toBigInt$1;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, {
      valueOf: function () {
        throw 8;
      }
    });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', {
  'with': function (index, value) {
    var O = aTypedArray(this);
    var relativeIndex = toIntegerOrInfinity(index);
    var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
    return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
  }
}['with'], !PROPER_ORDER);

var isPrototypeOf$1 = objectIsPrototypeOf;
var $TypeError$1 = TypeError;
var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw new $TypeError$1('Incorrect invocation');
};

var isCallable$4 = isCallable$i;
var isObject$1 = isObject$a;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
  // it can work only with native `setPrototypeOf`
  setPrototypeOf &&
  // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  isCallable$4(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$1(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var toString$4 = toString$7;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$4(argument);
};

var domExceptionConstants = {
  IndexSizeError: {
    s: 'INDEX_SIZE_ERR',
    c: 1,
    m: 1
  },
  DOMStringSizeError: {
    s: 'DOMSTRING_SIZE_ERR',
    c: 2,
    m: 0
  },
  HierarchyRequestError: {
    s: 'HIERARCHY_REQUEST_ERR',
    c: 3,
    m: 1
  },
  WrongDocumentError: {
    s: 'WRONG_DOCUMENT_ERR',
    c: 4,
    m: 1
  },
  InvalidCharacterError: {
    s: 'INVALID_CHARACTER_ERR',
    c: 5,
    m: 1
  },
  NoDataAllowedError: {
    s: 'NO_DATA_ALLOWED_ERR',
    c: 6,
    m: 0
  },
  NoModificationAllowedError: {
    s: 'NO_MODIFICATION_ALLOWED_ERR',
    c: 7,
    m: 1
  },
  NotFoundError: {
    s: 'NOT_FOUND_ERR',
    c: 8,
    m: 1
  },
  NotSupportedError: {
    s: 'NOT_SUPPORTED_ERR',
    c: 9,
    m: 1
  },
  InUseAttributeError: {
    s: 'INUSE_ATTRIBUTE_ERR',
    c: 10,
    m: 1
  },
  InvalidStateError: {
    s: 'INVALID_STATE_ERR',
    c: 11,
    m: 1
  },
  SyntaxError: {
    s: 'SYNTAX_ERR',
    c: 12,
    m: 1
  },
  InvalidModificationError: {
    s: 'INVALID_MODIFICATION_ERR',
    c: 13,
    m: 1
  },
  NamespaceError: {
    s: 'NAMESPACE_ERR',
    c: 14,
    m: 1
  },
  InvalidAccessError: {
    s: 'INVALID_ACCESS_ERR',
    c: 15,
    m: 1
  },
  ValidationError: {
    s: 'VALIDATION_ERR',
    c: 16,
    m: 0
  },
  TypeMismatchError: {
    s: 'TYPE_MISMATCH_ERR',
    c: 17,
    m: 1
  },
  SecurityError: {
    s: 'SECURITY_ERR',
    c: 18,
    m: 1
  },
  NetworkError: {
    s: 'NETWORK_ERR',
    c: 19,
    m: 1
  },
  AbortError: {
    s: 'ABORT_ERR',
    c: 20,
    m: 1
  },
  URLMismatchError: {
    s: 'URL_MISMATCH_ERR',
    c: 21,
    m: 1
  },
  QuotaExceededError: {
    s: 'QUOTA_EXCEEDED_ERR',
    c: 22,
    m: 1
  },
  TimeoutError: {
    s: 'TIMEOUT_ERR',
    c: 23,
    m: 1
  },
  InvalidNodeTypeError: {
    s: 'INVALID_NODE_TYPE_ERR',
    c: 24,
    m: 1
  },
  DataCloneError: {
    s: 'DATA_CLONE_ERR',
    c: 25,
    m: 1
  }
};

var uncurryThis$6 = functionUncurryThis;
var $Error = Error;
var replace = uncurryThis$6(''.replace);
var TEST = function (arg) {
  return String(new $Error(arg).stack);
}('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  }
  return stack;
};

var $$6 = _export;
var global$6 = global$n;
var getBuiltIn$4 = getBuiltIn$a;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var defineProperty = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var anInstance = anInstance$1;
var inheritIfRequired = inheritIfRequired$1;
var normalizeStringArgument = normalizeStringArgument$1;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = errorStackClear;
var DESCRIPTORS$3 = descriptors;
var DOM_EXCEPTION = 'DOMException';
var Error$2 = getBuiltIn$4('Error');
var NativeDOMException = getBuiltIn$4(DOM_EXCEPTION);
var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error$2(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor$2(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};
var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = ('stack' in new Error$2(DOM_EXCEPTION));
var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS$3 && Object.getOwnPropertyDescriptor(global$6, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$$6({
  global: true,
  constructor: true,
  forced: FORCED_CONSTRUCTOR
}, {
  // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn$4(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$2(1, PolyfilledDOMException));
  }
  for (var key in DOMExceptionConstants) if (hasOwn$3(DOMExceptionConstants, key)) {
    var constant$4 = DOMExceptionConstants[key];
    var constantName = constant$4.s;
    if (!hasOwn$3(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor$2(6, constant$4.c));
    }
  }
}

var NATIVE_BIND = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$1 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$1.bind(apply$2) : function () {
  return call$1.apply(apply$2, arguments);
});

var uncurryThis$5 = functionUncurryThis;
var arraySlice$2 = uncurryThis$5([].slice);

var $TypeError = TypeError;
var validateArgumentsLength$7 = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};

var userAgent = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

var global$5 = global$n;
var apply$1 = functionApply;
var bind = functionBindContext;
var isCallable$3 = isCallable$i;
var hasOwn$2 = hasOwnProperty_1;
var fails$5 = fails$m;
var html = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$1;
var validateArgumentsLength$6 = validateArgumentsLength$7;
var IS_IOS = engineIsIos;
var IS_NODE = engineIsNode;
var set$2 = global$5.setImmediate;
var clear = global$5.clearImmediate;
var process = global$5.process;
var Dispatch$1 = global$5.Dispatch;
var Function$2 = global$5.Function;
var MessageChannel = global$5.MessageChannel;
var String$1 = global$5.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails$5(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$5.location;
});
var run = function (id) {
  if (hasOwn$2(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var runner = function (id) {
  return function () {
    run(id);
  };
};
var eventListener = function (event) {
  run(event.data);
};
var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$5.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$2 || !clear) {
  set$2 = function setImmediate(handler) {
    validateArgumentsLength$6(arguments.length, 1);
    var fn = isCallable$3(handler) ? handler : Function$2(handler);
    var args = arraySlice$1(arguments, 1);
    queue[++counter] = function () {
      apply$1(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer = function (id) {
      Dispatch$1.now(runner(id));
    };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$5.addEventListener && isCallable$3(global$5.postMessage) && !global$5.importScripts && $location && $location.protocol !== 'file:' && !fails$5(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$5.addEventListener('message', eventListener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}
var task = {
  set: set$2,
  clear: clear
};

var $$5 = _export;
var global$4 = global$n;
var clearImmediate = task.clear;

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$$5({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$4.clearImmediate !== clearImmediate
}, {
  clearImmediate: clearImmediate
});

/* global Bun -- Bun case */
var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

var global$3 = global$n;
var apply = functionApply;
var isCallable$2 = isCallable$i;
var ENGINE_IS_BUN = engineIsBun;
var USER_AGENT = engineUserAgent;
var arraySlice = arraySlice$2;
var validateArgumentsLength$5 = validateArgumentsLength$7;
var Function$1 = global$3.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
  var version = global$3.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
var schedulersFix$1 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$5(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$2(handler) ? handler : Function$1(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$4 = _export;
var global$2 = global$n;
var setTask = task.set;
var schedulersFix = schedulersFix$1;

// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global$2.setImmediate ? schedulersFix(setTask, false) : setTask;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$$4({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$2.setImmediate !== setImmediate
}, {
  setImmediate: setImmediate
});

var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$m;
var isCallable$1 = isCallable$i;
var classof$1 = classof$6;
var getBuiltIn$3 = getBuiltIn$a;
var inspectSource = inspectSource$2;
var noop$1 = function () {/* empty */};
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$4(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;
  try {
    construct(noop$1, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$4(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var DESCRIPTORS$2 = descriptors;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;
var createProperty$1 = function (object, key, value) {
  if (DESCRIPTORS$2) definePropertyModule.f(object, key, createPropertyDescriptor$1(0, value));else object[key] = value;
};

var call = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags;
var RegExpPrototype = RegExp.prototype;
var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn$1(R, 'flags') && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};

var fails$3 = fails$m;
var createPropertyDescriptor = createPropertyDescriptor$5;
var errorStackInstallable = !fails$3(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

var $$3 = _export;
var global$1 = global$n;
var getBuiltIn$2 = getBuiltIn$a;
var uncurryThis$3 = functionUncurryThis;
var fails$2 = fails$m;
var uid = uid$4;
var isCallable = isCallable$i;
var isConstructor = isConstructor$1;
var isNullOrUndefined = isNullOrUndefined$4;
var isObject = isObject$a;
var isSymbol = isSymbol$3;
var iterate = iterate$5;
var anObject = anObject$a;
var classof = classof$6;
var hasOwn = hasOwnProperty_1;
var createProperty = createProperty$1;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var lengthOfArrayLike = lengthOfArrayLike$9;
var validateArgumentsLength$4 = validateArgumentsLength$7;
var getRegExpFlags = regexpGetFlags;
var MapHelpers = mapHelpers;
var SetHelpers = setHelpers;
var setIterate = setIterate$1;
var detachTransferable = detachTransferable$2;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;
var Object$1 = global$1.Object;
var Array$1 = global$1.Array;
var Date$1 = global$1.Date;
var Error$1 = global$1.Error;
var TypeError$1 = global$1.TypeError;
var PerformanceMark = global$1.PerformanceMark;
var DOMException = getBuiltIn$2('DOMException');
var Map$1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set$1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var setHas = SetHelpers.has;
var objectKeys = getBuiltIn$2('Object', 'keys');
var push$1 = uncurryThis$3([].push);
var thisBooleanValue = uncurryThis$3(true.valueOf);
var thisNumberValue = uncurryThis$3(1.0.valueOf);
var thisStringValue = uncurryThis$3(''.valueOf);
var thisTimeValue = uncurryThis$3(Date$1.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';
var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails$2(function () {
    var set1 = new global$1.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 === set1 || !set2.has(7) || !isObject(number) || +number !== 7;
  }) && structuredCloneImplementation;
};
var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
  return !fails$2(function () {
    var error = new $Error();
    var test = structuredCloneImplementation({
      a: error,
      b: error
    });
    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
  });
};

// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
  return !fails$2(function () {
    var test = structuredCloneImplementation(new global$1.AggregateError([1], PERFORMANCE_MARK, {
      cause: 3
    }));
    return test.name !== 'AggregateError' || test.errors[0] !== 1 || test.message !== PERFORMANCE_MARK || test.cause !== 3;
  });
};

// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF<103 and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// FF103 can clone errors, but `.stack` of clone is an empty string
// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
// FF104+ fixed it on usual errors, but not on DOMExceptions
// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
// Chrome <102 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// NodeJS implementation can't clone DOMExceptions
// https://github.com/nodejs/node/issues/41038
// only FF103+ supports new (html/5749) error cloning semantic
var nativeStructuredClone = global$1.structuredClone;
var FORCED_REPLACEMENT = !checkErrorsCloning(nativeStructuredClone, Error$1) || !checkErrorsCloning(nativeStructuredClone, DOMException) || !checkNewErrorsCloningSemantic(nativeStructuredClone);

// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of those implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, {
    detail: value
  }).detail;
});
var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;
var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};
var throwUnpolyfillable = function (type, action) {
  throw new DOMException((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};
var tryNativeRestrictedStructuredClone = function (value, type) {
  if (!nativeRestrictedStructuredClone) throwUnpolyfillable(type);
  return nativeRestrictedStructuredClone(value);
};
var createDataTransfer = function () {
  var dataTransfer;
  try {
    dataTransfer = new global$1.DataTransfer();
  } catch (error) {
    try {
      dataTransfer = new global$1.ClipboardEvent('').clipboardData;
    } catch (error2) {/* empty */}
  }
  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};
var cloneBuffer = function (value, map, $type) {
  if (mapHas(map, value)) return mapGet(map, value);
  var type = $type || classof(value);
  var clone, length, options, source, target, i;
  if (type === 'SharedArrayBuffer') {
    if (nativeRestrictedStructuredClone) clone = nativeRestrictedStructuredClone(value);
    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
    else clone = value;
  } else {
    var DataView = global$1.DataView;

    // `ArrayBuffer#slice` is not available in IE10
    // `ArrayBuffer#slice` and `DataView` are not available in old FF
    if (!DataView && !isCallable(value.slice)) throwUnpolyfillable('ArrayBuffer');
    // detached buffers throws in `DataView` and `.slice`
    try {
      if (isCallable(value.slice) && !value.resizable) {
        clone = value.slice(0);
      } else {
        length = value.byteLength;
        options = 'maxByteLength' in value ? {
          maxByteLength: value.maxByteLength
        } : undefined;
        // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
        clone = new ArrayBuffer(length, options);
        source = new DataView(value);
        target = new DataView(clone);
        for (i = 0; i < length; i++) {
          target.setUint8(i, source.getUint8(i));
        }
      }
    } catch (error) {
      throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
    }
  }
  mapSet(map, value, clone);
  return clone;
};
var cloneView = function (value, type, offset, length, map) {
  var C = global$1[type];
  // in some old engines like Safari 9, typeof C is 'object'
  // on Uint8ClampedArray or some other constructors
  if (!isObject(C)) throwUnpolyfillable(type);
  return new C(cloneBuffer(value.buffer, map), offset, length);
};
var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject(value)) return value;
  // effectively preserves circular references
  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map$1();
  var type = classof(value);
  var C, name, cloned, dataTransfer, i, length, keys, key;
  switch (type) {
    case 'Array':
      cloned = Array$1(lengthOfArrayLike(value));
      break;
    case 'Object':
      cloned = {};
      break;
    case 'Map':
      cloned = new Map$1();
      break;
    case 'Set':
      cloned = new Set$1();
      break;
    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case 'Error':
      name = value.name;
      switch (name) {
        case 'AggregateError':
          cloned = new (getBuiltIn$2(name))([]);
          break;
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SuppressedError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
          cloned = new (getBuiltIn$2(name))();
          break;
        case 'CompileError':
        case 'LinkError':
        case 'RuntimeError':
          cloned = new (getBuiltIn$2('WebAssembly', name))();
          break;
        default:
          cloned = new Error$1();
      }
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      break;
    case 'ArrayBuffer':
    case 'SharedArrayBuffer':
      cloned = cloneBuffer(value, map, type);
      break;
    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float16Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      length = type === 'DataView' ? value.byteLength : value.length;
      cloned = cloneView(value, type, value.byteOffset, length, map);
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(structuredCloneInternal(value.p1, map), structuredCloneInternal(value.p2, map), structuredCloneInternal(value.p3, map), structuredCloneInternal(value.p4, map));
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      }
      break;
    case 'File':
      if (nativeRestrictedStructuredClone) try {
        cloned = nativeRestrictedStructuredClone(value);
        // NodeJS 20.0.0 bug, https://github.com/nodejs/node/issues/47612
        if (classof(cloned) !== type) cloned = undefined;
      } catch (error) {/* empty */}
      if (!cloned) try {
        cloned = new File([value], value.name, value);
      } catch (error) {/* empty */}
      if (!cloned) throwUnpolyfillable(type);
      break;
    case 'FileList':
      dataTransfer = createDataTransfer();
      if (dataTransfer) {
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }
        cloned = dataTransfer.files;
      } else cloned = tryNativeRestrictedStructuredClone(value, type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(structuredCloneInternal(value.data, map), value.width, value.height, {
          colorSpace: value.colorSpace
        });
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      }
      break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else switch (type) {
        case 'BigInt':
          // can be a 3rd party polyfill
          cloned = Object$1(value.valueOf());
          break;
        case 'Boolean':
          cloned = Object$1(thisBooleanValue(value));
          break;
        case 'Number':
          cloned = Object$1(thisNumberValue(value));
          break;
        case 'String':
          cloned = Object$1(thisStringValue(value));
          break;
        case 'Date':
          cloned = new Date$1(thisTimeValue(value));
          break;
        case 'Blob':
          try {
            cloned = value.slice(0, value.size, value.type);
          } catch (error) {
            throwUnpolyfillable(type);
          }
          break;
        case 'DOMPoint':
        case 'DOMPointReadOnly':
          C = global$1[type];
          try {
            cloned = C.fromPoint ? C.fromPoint(value) : new C(value.x, value.y, value.z, value.w);
          } catch (error) {
            throwUnpolyfillable(type);
          }
          break;
        case 'DOMRect':
        case 'DOMRectReadOnly':
          C = global$1[type];
          try {
            cloned = C.fromRect ? C.fromRect(value) : new C(value.x, value.y, value.width, value.height);
          } catch (error) {
            throwUnpolyfillable(type);
          }
          break;
        case 'DOMMatrix':
        case 'DOMMatrixReadOnly':
          C = global$1[type];
          try {
            cloned = C.fromMatrix ? C.fromMatrix(value) : new C(value);
          } catch (error) {
            throwUnpolyfillable(type);
          }
          break;
        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable(value.clone)) throwUnpolyfillable(type);
          try {
            cloned = value.clone();
          } catch (error) {
            throwUncloneable(type);
          }
          break;
        case 'CropTarget':
        case 'CryptoKey':
        case 'FileSystemDirectoryHandle':
        case 'FileSystemFileHandle':
        case 'FileSystemHandle':
        case 'GPUCompilationInfo':
        case 'GPUCompilationMessage':
        case 'ImageBitmap':
        case 'RTCCertificate':
        case 'WebAssembly.Module':
          throwUnpolyfillable(type);
        // break omitted
        default:
          throwUncloneable(type);
      }
  }
  mapSet(map, value, cloned);
  switch (type) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        createProperty(cloned, key, structuredCloneInternal(value[key], map));
      }
      break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
      if (hasOwn(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }
      if (name === 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      } else if (name === 'SuppressedError') {
        cloned.error = structuredCloneInternal(value.error, map);
        cloned.suppressed = structuredCloneInternal(value.suppressed, map);
      }
    // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }
  }
  return cloned;
};
var tryToTransfer = function (rawTransfer, map) {
  if (!isObject(rawTransfer)) throw new TypeError$1('Transfer option cannot be converted to a sequence');
  var transfer = [];
  iterate(rawTransfer, function (value) {
    push$1(transfer, anObject(value));
  });
  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var buffers = new Set$1();
  var value, type, C, transferred, canvas, context;
  while (i < length) {
    value = transfer[i++];
    type = classof(value);
    if (type === 'ArrayBuffer' ? setHas(buffers, value) : mapHas(map, value)) {
      throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    }
    if (type === 'ArrayBuffer') {
      setAdd(buffers, value);
      continue;
    }
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      transferred = nativeStructuredClone(value, {
        transfer: [value]
      });
    } else switch (type) {
      case 'ImageBitmap':
        C = global$1.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) {/* empty */}
        break;
      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          transferred = value.clone();
          value.close();
        } catch (error) {/* empty */}
        break;
      case 'MediaSourceHandle':
      case 'MessagePort':
      case 'OffscreenCanvas':
      case 'ReadableStream':
      case 'TransformStream':
      case 'WritableStream':
        throwUnpolyfillable(type, TRANSFERRING);
    }
    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);
    mapSet(map, value, transferred);
  }
  return buffers;
};
var detachBuffers = function (buffers) {
  setIterate(buffers, function (buffer) {
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      nativeRestrictedStructuredClone(buffer, {
        transfer: [buffer]
      });
    } else if (isCallable(buffer.transfer)) {
      buffer.transfer();
    } else if (detachTransferable) {
      detachTransferable(buffer);
    } else {
      throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
    }
  });
};

// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$$3({
  global: true,
  enumerable: true,
  sham: !PROPER_STRUCTURED_CLONE_TRANSFER,
  forced: FORCED_REPLACEMENT
}, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength$4(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map, buffers;
    if (transfer !== undefined) {
      map = new Map$1();
      buffers = tryToTransfer(transfer, map);
    }
    var clone = structuredCloneInternal(value, map);

    // since of an issue with cloning views of transferred buffers, we a forced to detach them later
    // https://github.com/zloirock/core-js/issues/1265
    if (buffers) detachBuffers(buffers);
    return clone;
  }
});

var fails$1 = fails$m;
var wellKnownSymbol = wellKnownSymbol$8;
var DESCRIPTORS$1 = descriptors;
var IS_PURE = isPure;
var ITERATOR = wellKnownSymbol('iterator');
var urlConstructorDetection = !fails$1(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')) || !params.size && (IS_PURE || !DESCRIPTORS$1) || !params.sort || url.href !== 'http://a/c%20d?a=1&c=3' || params.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !params[ITERATOR]
  // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
  // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc'
  // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1'
  // fails in Chrome 66-
  || result !== 'a1c3'
  // throws in Safari
  || new URL('http://x', undefined).host !== 'x';
});

var $$2 = _export;
var getBuiltIn$1 = getBuiltIn$a;
var fails = fails$m;
var validateArgumentsLength$3 = validateArgumentsLength$7;
var toString$3 = toString$7;
var USE_NATIVE_URL = urlConstructorDetection;
var URL$2 = getBuiltIn$1('URL');

// https://github.com/nodejs/node/issues/47505
// https://github.com/denoland/deno/issues/18893
var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
  URL$2.canParse();
});

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9250
var WRONG_ARITY = fails(function () {
  return URL$2.canParse.length !== 1;
});

// `URL.canParse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$$2({
  target: 'URL',
  stat: true,
  forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY
}, {
  canParse: function canParse(url) {
    var length = validateArgumentsLength$3(arguments.length, 1);
    var urlString = toString$3(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString$3(arguments[1]);
    try {
      return !!new URL$2(urlString, base);
    } catch (error) {
      return false;
    }
  }
});

var $$1 = _export;
var getBuiltIn = getBuiltIn$a;
var validateArgumentsLength$2 = validateArgumentsLength$7;
var toString$2 = toString$7;
var URL$1 = getBuiltIn('URL');

// `URL.parse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$$1({
  target: 'URL',
  stat: true
}, {
  parse: function parse(url) {
    var length = validateArgumentsLength$2(arguments.length, 1);
    var urlString = toString$2(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString$2(arguments[1]);
    try {
      return new URL$1(urlString, base);
    } catch (error) {
      return null;
    }
  }
});

var defineBuiltIn$1 = defineBuiltIn$4;
var uncurryThis$2 = functionUncurryThis;
var toString$1 = toString$7;
var validateArgumentsLength$1 = validateArgumentsLength$7;
var $URLSearchParams$1 = URLSearchParams;
var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
var append$1 = uncurryThis$2(URLSearchParamsPrototype$2.append);
var $delete = uncurryThis$2(URLSearchParamsPrototype$2['delete']);
var forEach$1 = uncurryThis$2(URLSearchParamsPrototype$2.forEach);
var push = uncurryThis$2([].push);
var params$1 = new $URLSearchParams$1('a=1&a=2&b=3');
params$1['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params$1['delete']('b', undefined);
if (params$1 + '' !== 'a=2') {
  defineBuiltIn$1(URLSearchParamsPrototype$2, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach$1(this, function (v, k) {
      // also validates `this`
      push(entries, {
        key: k,
        value: v
      });
    });
    validateArgumentsLength$1(length, 1);
    var key = toString$1(name);
    var value = toString$1($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append$1(this, entry.key, entry.value);
    }
  }, {
    enumerable: true,
    unsafe: true
  });
}

var defineBuiltIn = defineBuiltIn$4;
var uncurryThis$1 = functionUncurryThis;
var toString = toString$7;
var validateArgumentsLength = validateArgumentsLength$7;
var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype$1 = $URLSearchParams.prototype;
var getAll = uncurryThis$1(URLSearchParamsPrototype$1.getAll);
var $has = uncurryThis$1(URLSearchParamsPrototype$1.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype$1, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    }
    return false;
  }, {
    enumerable: true,
    unsafe: true
  });
}

var DESCRIPTORS = descriptors;
var uncurryThis = functionUncurryThis;
var defineBuiltInAccessor = defineBuiltInAccessor$4;
var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () {
        count++;
      });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const elementMap = new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }
    const instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend';

/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */
const parseSelector = selector => {
  if (selector && window.CSS && window.CSS.escape) {
    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }
  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }
  return typeof object.nodeType !== 'undefined';
};
const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])');
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = element => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }
  return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */
    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn);
        }
        return fn.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string';
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith('.');
    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }
    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}
const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

    return {
      ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const VERSION = '5.3.3';

/**
 * Class definition
 */

class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }

  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME$1 = 'button';
const DATA_KEY$1 = 'bs.button';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY$1 = '.data-api';
const CLASS_NAME_ACTIVE = 'active';
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$1}${DATA_API_KEY$1}`;

/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$1;
  }

  // Public
  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this);
      if (config === 'toggle') {
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$1);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');
  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;
};
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME = 'collapse';
const DATA_KEY = 'bs.collapse';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
const Default = {
  parent: null,
  toggle: true
};
const DefaultType = {
  parent: '(null|element)',
  toggle: 'boolean'
};

/**
 * Class definition
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }

  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }

  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];

    // find active children
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.style[dimension] = '';
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW);
  }

  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle); // Coerce string values
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    // remove children if greater depth
    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute('aria-expanded', isOpen);
    }
  }

  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis,
  e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$2 = Symbol(),
  o$3 = new WeakMap();
let n$2 = class n {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e$2 && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = o$3.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$3.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const r$3 = t => new n$2("string" == typeof t ? t : t + "", void 0, s$2),
  i$2 = (t, ...e) => {
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[o + 1], t[0]);
    return new n$2(o, t, s$2);
  },
  S$1 = (s, o) => {
    if (e$2) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
      const o = document.createElement("style"),
        n = t$1.litNonce;
      void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
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
    is: i$1,
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
  f$1 = (t, s) => !i$1(t, s),
  y$2 = {
    attribute: !0,
    type: String,
    converter: u$1,
    reflect: !1,
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
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
      const i = Symbol(),
        r = this.getPropertyDescriptor(t, i, s);
      void 0 !== r && e$1(this.prototype, t, r);
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
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y$2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t = n$1(this);
    t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t = this.properties,
        s = [...h$1(t), ...o$2(t)];
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
      for (const s of e) i.unshift(c$2(s));
    } else void 0 !== s && i.push(c$2(s));
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
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$1)(this[t], s)) return;
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
  i = t.trustedTypes,
  s$1 = i ? i.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
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
  w = Symbol.for("lit-noChange"),
  T = Symbol.for("lit-nothing"),
  A = new WeakMap(),
  E = r$1.createTreeWalker(r$1, 129);
function C(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i) : i;
}
const P = (t, i) => {
  const s = t.length - 1,
    o = [];
  let r,
    l = 2 === i ? "<svg>" : "",
    c = f;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let a,
      u,
      d = -1,
      y = 0;
    for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
    const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
    l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
  }
  return [C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), o];
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
    if (this.el = V.createElement(f, n), E.currentNode = this.el.content, 2 === s) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (r = E.nextNode()) && d.length < u;) {
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
            ctor: "." === e[1] ? k : "?" === e[1] ? H : "@" === e[1] ? I : R
          }), r.removeAttribute(t);
        } else t.startsWith(h) && (d.push({
          type: 6,
          index: c
        }), r.removeAttribute(t));
        if ($.test(r.tagName)) {
          const t = r.textContent.split(h),
            s = t.length - 1;
          if (s > 0) {
            r.textContent = i ? i.emptyScript : "";
            for (let i = 0; i < s; i++) r.append(t[i], l()), E.nextNode(), d.push({
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
function N(t, i, s = t, e) {
  if (i === w) return i;
  let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
  const o = c(i) ? void 0 : i._$litDirective$;
  return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
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
      e = (t?.creationScope ?? r$1).importNode(i, !0);
    E.currentNode = e;
    let h = E.nextNode(),
      o = 0,
      n = 0,
      l = s[0];
    for (; void 0 !== l;) {
      if (o === l.index) {
        let i;
        2 === l.type ? i = new M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new L(h, this, t)), this._$AV.push(i), l = s[++n];
      }
      o !== l?.index && (h = E.nextNode(), o++);
    }
    return E.currentNode = r$1, e;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class M {
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
    t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$1.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === e) this._$AH.p(i);else {
      const t = new S(e, this),
        s = t.u(this.options);
      t.p(i), this.T(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = A.get(t.strings);
    return void 0 === i && A.set(t.strings, i = new V(t)), i;
  }
  k(t) {
    a(this._$AH) || (this._$AH = [], this._$AR());
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
}
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
    if (void 0 === h) t = N(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== w, o && (this._$AH = t);else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++) r = N(this, e[s + n], i, n), r === w && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === T ? t = T : t !== T && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
    }
    o && !e && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
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
    if ((t = N(this, t, i, 0) ?? T) === w) return;
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
    N(this, t);
  }
}
const Z = t.litHtmlPolyfillSupport;
Z?.(V, M), (t.litHtmlVersions ??= []).push("3.1.3");
const j = (t, i, s) => {
  const e = s?.renderBefore ?? i;
  let h = e._$litPart$;
  if (void 0 === h) {
    const t = s?.renderBefore ?? null;
    e._$litPart$ = h = new M(i.insertBefore(l(), t), t, void 0, s ?? {});
  }
  return h._$AI(t), h;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s extends b$1 {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = j(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w;
  }
}
s._$litElement$ = !0, s[("finalized")] = !0, globalThis.litElementHydrateSupport?.({
  LitElement: s
});
const r = globalThis.litElementPolyfillSupport;
r?.({
  LitElement: s
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

var constant$2 = (x => () => x);

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

var constant$1 = (x => () => x);

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
class DecidablesElement extends s {
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
    return i$2`
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
    return [super.styles, i$2`
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
const o = o => o ?? T;

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
    return [super.styles, i$2`
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
    return [super.styles, i$2`
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
    return [super.styles, i$2`
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
    return [super.styles, i$2`
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
    return [super.styles, i$2`
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

/*
  Attribute: Space-separated sequence of strings
  Property: Set of strings
*/
const DecidablesConverterSet = {
  fromAttribute: value => {
    return new Set(value.split(/\s+/));
  },
  toAttribute: value => {
    return value.size ? [...value].join(' ') : null;
  }
};

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
    return [super.styles, i$2`
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
    return [super.styles, i$2`
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
        ${this.trials ? x$1`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>` : x$1``}
        ${this.resample ? x$1`
            <div class="buttons">
              ${this.resample ? x$1`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>` : x$1``}
            </div>
          ` : x$1``}
        ${this.duration ? x$1`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>` : x$1``}
        ${this.coherence ? x$1`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>` : x$1``}
        ${this.color !== undefined ? x$1`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
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
  get meanRT() {
    const sumTotal = this.trials.filter(trial => {
      return trial.outcome !== 'nr';
    }).reduce((sum, trial) => {
      return sum + trial.rt;
    }, 0);
    return sumTotal / (this.correctCount + this.errorCount);
  }
  get correctMeanRT() {
    const sumCorrect = this.trials.filter(trial => {
      return trial.outcome === 'correct';
    }).reduce((sum, trial) => {
      return sum + trial.rt;
    }, 0);
    return sumCorrect / this.correctCount;
  }
  get errorMeanRT() {
    const sumError = this.trials.filter(trial => {
      return trial.outcome === 'error';
    }).reduce((sum, trial) => {
      return sum + trial.rt;
    }, 0);
    return sumError / this.errorCount;
  }
  get sdRT() {
    const ss = this.trials.filter(trial => {
      return trial.outcome !== 'nr';
    }).reduce((sum, trial) => {
      return sum + (trial.rt - this.meanRT) ** 2;
    }, 0);
    return Math.sqrt(ss / (this.correctCount + this.errorCount - 1));
  }
  get correctSDRT() {
    const ss = this.trials.filter(trial => {
      return trial.outcome === 'correct';
    }).reduce((sum, trial) => {
      return sum + (trial.rt - this.correctMeanRT) ** 2;
    }, 0);
    return Math.sqrt(ss / (this.correctCount - 1));
  }
  get errorSDRT() {
    const ss = this.trials.filter(trial => {
      return trial.outcome === 'error';
    }).reduce((sum, trial) => {
      return sum + (trial.rt - this.errorMeanRT) ** 2;
    }, 0);
    return Math.sqrt(ss / (this.errorCount - 1));
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
    return [super.styles, i$2`
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
        converter: DecidablesConverterSet,
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
    this.summaries = ['overall'];
    this.summary = new Set();
    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'all';
    this.payoff = false;
    this.correctPayoff = undefined; // Correct payoff
    this.errorPayoff = undefined; // Error payoff
    this.nrPayoff = undefined; // No Response payoff

    this.correctCount = NaN;
    this.errorCount = NaN;
    this.nrCount = NaN;
    this.correctMeanRT = NaN;
    this.errorMeanRT = NaN;
    this.meanRT = NaN;
    this.correctSDRT = NaN;
    this.errorSDRT = NaN;
    this.sdRT = NaN;
    this.accuracy = NaN;
    this.alignState();
  }
  alignState() {
    this.accuracy = this.correctCount / (this.correctCount + this.errorCount + this.nrCount);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('accumulable-table-change', {
      detail: {
        correctCount: this.correctCount,
        errorCount: this.errorCount,
        nrCount: this.nrCount,
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
    this.alignState();
    this.sendEvent();
  }
  errorCountInput(e) {
    this.errorCount = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  accuracyInput(e) {
    this.accuracy = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  correctMeanRTInput(e) {
    this.correctMeanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  errorMeanRTInput(e) {
    this.errorMeanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  meanRTInput(e) {
    this.meanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  correctSDRTInput(e) {
    this.correctSDRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  errorSDRTInput(e) {
    this.errorSDRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  sdRTInput(e) {
    this.sdRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }
  static get styles() {
    return [super.styles, i$2`
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
  willUpdate() {
    this.alignState();
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
            ${this.summary.has('overall') ? x$1`
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
            ${this.summary.has('overall') ? x$1`
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
            ${this.summary.has('overall') ? x$1`
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
            ${this.summary.has('overall') ? x$1`
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

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uCiAgICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkKICAgICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpCgogICAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykKCiAgICBCZWhhdmlvcmFsIHZhcmlhYmxlczoKICAgICAgcEUgPSBwcm9wb3J0aW9uIG9mIGVycm9yIHRyaWFscwogICAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHMKICAgICAgbSA9IG1lYW4gb2Ygb3ZlcmFsbCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUUgPSBtZWFuIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2QgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2Ygb3ZlcmFsbCBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RFID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGVycm9yIFJUcyAoaW4gbWlsbGlzZWNvbmRzKQogICAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcykKCiAgICBFcXVhdGlvbnM6CiAgICAgIFByb2JhYmlsaXR5IG9mIGNvcnJlY3QgYW5kIGVycm9yIHJlc3BvbnNlcyAoQWxleGFuZHJvd2ljeiwgMjAyMCkKICAgICAgTWVhbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KQogICAgICBEZW5zaXR5IG9mIGVycm9yIGFuZCBjb3JyZWN0IFJUIGRpc3RyaWJ1dGlvbnMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgKi8KICBjbGFzcyBERE1NYXRoIHsKICAgIHN0YXRpYyBzID0gMTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0gdHJpYWxzLnJlZHVjZSgoYWNjdW11bGF0b3IsIHRyaWFsKSA9PiB7CiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7CiAgICAgICAgICBjYXNlICdjb3JyZWN0JzoKICAgICAgICAgICAgYWNjdW11bGF0b3IudHJpYWxzLmNvcnJlY3QgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IucnRzLmNvcnJlY3QgKz0gdHJpYWwucnQ7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci50cmlhbHMuZXJyb3IgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IucnRzLmVycm9yICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IudHJpYWxzLm5yICs9IDE7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgdHJpYWxzOiB7CiAgICAgICAgICB0b3RhbDogMCwKICAgICAgICAgIGNvcnJlY3Q6IDAsCiAgICAgICAgICBlcnJvcjogMCwKICAgICAgICAgIG5yOiAwCiAgICAgICAgfSwKICAgICAgICBydHM6IHsKICAgICAgICAgIG92ZXJhbGw6IDAsCiAgICAgICAgICBjb3JyZWN0OiAwLAogICAgICAgICAgZXJyb3I6IDAKICAgICAgICB9LAogICAgICAgIHNzczogewogICAgICAgICAgb3ZlcmFsbDogMCwKICAgICAgICAgIGNvcnJlY3Q6IDAsCiAgICAgICAgICBlcnJvcjogMAogICAgICAgIH0KICAgICAgfSk7CiAgICAgIHN0YXRzLnRyaWFscy50b3RhbCA9IHN0YXRzLnRyaWFscy5jb3JyZWN0ICsgc3RhdHMudHJpYWxzLmVycm9yICsgc3RhdHMudHJpYWxzLm5yOwogICAgICBzdGF0cy5ydHMub3ZlcmFsbCA9IHN0YXRzLnJ0cy5jb3JyZWN0ICsgc3RhdHMucnRzLmVycm9yOwogICAgICBzdGF0cy5wcm9wb3J0aW9uID0gewogICAgICAgIGNvcnJlY3Q6IHN0YXRzLnRyaWFscy5jb3JyZWN0IC8gc3RhdHMudHJpYWxzLnRvdGFsLAogICAgICAgIGVycm9yOiBzdGF0cy50cmlhbHMuZXJyb3IgLyBzdGF0cy50cmlhbHMudG90YWwsCiAgICAgICAgbnI6IHN0YXRzLnRyaWFscy5uciAvIHN0YXRzLnRyaWFscy50b3RhbAogICAgICB9OwogICAgICBzdGF0cy5tZWFuUlQgPSB7CiAgICAgICAgb3ZlcmFsbDogc3RhdHMucnRzLm92ZXJhbGwgLyAoc3RhdHMudHJpYWxzLmNvcnJlY3QgKyBzdGF0cy50cmlhbHMuZXJyb3IpLAogICAgICAgIGNvcnJlY3Q6IHN0YXRzLnJ0cy5jb3JyZWN0IC8gc3RhdHMudHJpYWxzLmNvcnJlY3QsCiAgICAgICAgZXJyb3I6IHN0YXRzLnJ0cy5lcnJvciAvIHN0YXRzLnRyaWFscy5lcnJvcgogICAgICB9OwogICAgICB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBhY2N1bXVsYXRvci5zc3Mub3ZlcmFsbCArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQub3ZlcmFsbCkgKiogMjsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zc3MuY29ycmVjdCArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQuY29ycmVjdCkgKiogMjsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlICdlcnJvcic6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzcy5lcnJvciArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQuZXJyb3IpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCBzdGF0cyk7CiAgICAgIHN0YXRzLnNkUlQgPSB7CiAgICAgICAgb3ZlcmFsbDogTWF0aC5zcXJ0KHN0YXRzLnNzcy5vdmVyYWxsIC8gKHN0YXRzLnRyaWFscy5jb3JyZWN0ICsgc3RhdHMudHJpYWxzLmVycm9yIC0gMSkpLAogICAgICAgIGNvcnJlY3Q6IE1hdGguc3FydChzdGF0cy5zc3MuY29ycmVjdCAvIChzdGF0cy50cmlhbHMuY29ycmVjdCAtIDEpKSwKICAgICAgICBlcnJvcjogTWF0aC5zcXJ0KHN0YXRzLnNzcy5lcnJvciAvIChzdGF0cy50cmlhbHMuZXJyb3IgLSAxKSkKICAgICAgfTsKICAgICAgcmV0dXJuIHN0YXRzOwogICAgfQoKICAgIC8vIFByb2JhYmlsaXR5IG9mIGFuIEVycm9yIFJlc3BvbnNlCiAgICBzdGF0aWMgYXp2czJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMik7CiAgICAgIGNvbnN0IFogPSBNYXRoLmV4cCgtMiAqIHYgKiB6UHJpbWUgLyBzICoqIDIpOwogICAgICByZXR1cm4gKEEgLSBaKSAvIChBIC0gMSk7CiAgICB9CgogICAgLy8gUHJvYmFiaWxpdHkgb2YgYSBDb3JyZWN0IFJlc3BvbnNlCiAgICBzdGF0aWMgYXp2czJwQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnMycEUoYSwgMSAtIHosIC12LCBzKTsKICAgIH0KCiAgICAvLyBNZWFuIE92ZXJhbGwgUlQKICAgIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KQogICAgc3RhdGljIGF6dnQwczJtKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZzMnNkKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IFogPSBNYXRoLmV4cCgtMiAqIHYgKiB6UHJpbWUgLyBzICoqIDIpIC0gMTsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAoLXYgKiBhICoqIDIgKiAoWiArIDQpICogWiAvIEEgKiogMiArICgoLTMgKiB2ICogYSAqKiAyICsgNCAqIHYgKiB6UHJpbWUgKiBhICsgcyAqKiAyICogYSkgKiBaICsgNCAqIHYgKiB6UHJpbWUgKiBhKSAvIEEgLSBzICoqIDIgKiB6UHJpbWUpIC8gdiAqKiAzOwogICAgICByZXR1cm4gTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIDEwMDA7CiAgICB9CgogICAgLy8gTWVhbiBFcnJvciBSVAogICAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KQogICAgc3RhdGljIGF6dnQwczJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucykgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgbWVhbiA9ICh6UHJpbWUgKiAocGhpKHpQcmltZSAtIGEsIGEpICsgcGhpKDAsIHpQcmltZSkpICsgMiAqIGEgKiBwaGkoelByaW1lLCAwKSkgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7CiAgICAgIHJldHVybiB0MCArIG1lYW4gKiAxMDAwOwogICAgfQoKICAgIC8vIFNEIEVycm9yIFJUCiAgICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2czJzZEUoYSwgeiwgdiwgcyA9IERETU1hdGgucykgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MHMybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgcmV0dXJuIERETU1hdGguYXp2dDBzMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZzMnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnMyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenZzMmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHsKICAgICAgaWYgKCF0KSByZXR1cm4gMDsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IGJhc2UgPSBNYXRoLlBJICogcyAqKiAyIC8gYSAqKiAyICogTWF0aC5leHAoLXpQcmltZSAqIHYgLyBzICoqIDIpOwogICAgICBsZXQgayA9IDA7CiAgICAgIGxldCB0ZXJtID0gMDsKICAgICAgbGV0IHN1bSA9IDA7CiAgICAgIGRvIHsKICAgICAgICBrICs9IDE7CiAgICAgICAgdGVybSA9IGsgKiBNYXRoLnNpbihNYXRoLlBJICogelByaW1lICogayAvIGEpICogTWF0aC5leHAoLTAuNSAqICh2ICoqIDIgLyBzICoqIDIgKyBNYXRoLlBJICoqIDIgKiBrICoqIDIgKiBzICoqIDIgLyBhICoqIDIpICogdCk7CiAgICAgICAgc3VtICs9IHRlcm07CiAgICAgIH0gd2hpbGUgKGsgPCAyMDApOyAvLyA/PyBIQUNLCgogICAgICByZXR1cm4gYmFzZSAqIHN1bTsKICAgIH0KCiAgICAvLyBEZW5zaXR5IG9mIENvcnJlY3QgUlQKICAgIHN0YXRpYyB0YXp2czJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7CiAgICAgIHJldHVybiBERE1NYXRoLnRhenZzMmdFKHQsIGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CiAgfQoKICAvLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXMKCiAgLy8gQWRhcHRlZCBmcm9tICBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbAoKICBmdW5jdGlvbiBzaWduKHIpIHsKICAgIHJldHVybiByID4gMCA/IDEgOiByID09PSAwID8gMCA6IC0xOwogIH0KICBmdW5jdGlvbiBsb2dpdChwKSB7CiAgICByZXR1cm4gTWF0aC5sb2cocCAvICgxIC0gcCkpOwogIH0KCiAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlcwogIC8vIGlucHV0OiBvYmogLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzCiAgLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3QKICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXMKICAvLyAgICBtIC0gc2FtcGxlIG1lYW4gb2YgdGhlIFJUJ3MgaW4gbXMKICAvLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvbgogIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzCiAgZnVuY3Rpb24gZGF0YTJleih7CiAgICBhY2N1cmFjeTogcEMsCiAgICBzZFJUOiBzZCwKICAgIG1lYW5SVDogbSwKICAgIHMKICB9KSB7CiAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyOwogICAgY29uc3QgbXJ0ID0gbSAvIDEwMDA7CiAgICBjb25zdCBzMiA9IHMgKiogMjsKICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7CiAgICBjb25zdCB4ID0gbCAqIChsICogcEMgKiogMiAtIGwgKiBwQyArIHBDIC0gMC41KSAvIHZydDsKICAgIGNvbnN0IHYgPSBzaWduKHBDIC0gMC41KSAqIHMgKiB4ICoqICgxIC8gNCk7CiAgICBjb25zdCBhID0gczIgKiBsb2dpdChwQykgLyB2OwogICAgY29uc3QgeSA9IC12ICogYSAvIHMyOwogICAgY29uc3QgbWR0ID0gYSAvICgyICogdikgKiAoMSAtIE1hdGguZXhwKHkpKSAvICgxICsgTWF0aC5leHAoeSkpOwogICAgY29uc3QgdDAgPSBtcnQgPyBtcnQgLSBtZHQgOiBudWxsOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWQKCiAgICBjb25zdCB0MFByaW1lID0gdDAgKiAxMDAwOwogICAgcmV0dXJuIHsKICAgICAgdiwKICAgICAgYSwKICAgICAgdDA6IHQwUHJpbWUsCiAgICAgIHMKICAgIH07CiAgfQoKICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1nbG9iYWxzOiBbIm9mZiIsICJzZWxmIl0gKi8KCiAgc2VsZi5vbm1lc3NhZ2UgPSBldmVudCA9PiB7CiAgICBjb25zdCBwYXJhbXMgPSBkYXRhMmV6KHsKICAgICAgLi4uZXZlbnQuZGF0YSwKICAgICAgczogRERNTWF0aC5zCiAgICB9KTsKCiAgICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISEKICAgIGNvbnN0IGEgPSAhaXNOYU4ocGFyYW1zLmEpID8gcGFyYW1zLmEgOiAxLjU7CiAgICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41OwogICAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDA7CiAgICBjb25zdCB0MCA9ICFpc05hTihwYXJhbXMudDApID8gcGFyYW1zLnQwIDogMTAwOwogICAgY29uc3QgcyA9ICFpc05hTihwYXJhbXMucykgPyBwYXJhbXMucyA6IERETU1hdGguczsKICAgIGNvbnN0IHByZWRpY3RlZCA9IHsKICAgICAgYWNjdXJhY3k6IERETU1hdGguYXp2czJwQyhhLCB6LCB2KSwKICAgICAgbWVhblJUOiBERE1NYXRoLmF6dnQwczJtKGEsIHosIHYsIHQwKSwKICAgICAgc2RSVDogRERNTWF0aC5henZzMnNkKGEsIHosIHYpCiAgICB9OwogICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgIHBhcmFtczogewogICAgICAgIGEsCiAgICAgICAgeiwKICAgICAgICB2LAogICAgICAgIHQwLAogICAgICAgIHMKICAgICAgfSwKICAgICAgcHJlZGljdGVkCiAgICB9KTsKICB9OwoKfSkoKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGRtLWZpdC13b3JrZXIuanMubWFwCgo=', 'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9lejIuanMiLCIuLi8uLi9saWJyYXJpZXMvYWNjdW11bGFibGUtZWxlbWVudHMvc3JjL2NvbXBvbmVudHMvZGRtLWZpdC13b3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuICBERE1NYXRoIFN0YXRpYyBDbGFzcyAtIE5vdCBpbnRlbmRlZCBmb3IgaW5zdGFudGlhdGlvbiFcblxuICBNb2RlbCBwYXJhbWV0ZXJzOlxuICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uXG4gICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhXG4gICAgdiA9IGRyaWZ0IHJhdGUgKHBlciBzZWNvbmQpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHMgPSB3aXRoaW4tdHJpYWwgdmFyaWFiaWxpdHkgaW4gZHJpZnQgcmF0ZSAoc14yID0gaW5maW5pdGVzaW1hbCB2YXJpYW5jZSlcblxuICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSAxO1xuXG4gIC8vIENhbGN1bGF0ZSBhIGJ1bmNoIG9mIHN0YXRpc3RpY3MgZm9yIGFuIGFycmF5IG9mIHRyaWFsc1xuICBzdGF0aWMgdHJpYWxzMnN0YXRzKHRyaWFscykge1xuICAgIGNvbnN0IHN0YXRzID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci50cmlhbHMuY29ycmVjdCArPSAxO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IucnRzLmNvcnJlY3QgKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci50cmlhbHMuZXJyb3IgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnJ0cy5lcnJvciArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnRyaWFscy5uciArPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIE5vLW9wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHJpYWxzOiB7XG4gICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgY29ycmVjdDogMCxcbiAgICAgICAgICBlcnJvcjogMCxcbiAgICAgICAgICBucjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcnRzOiB7XG4gICAgICAgICAgb3ZlcmFsbDogMCxcbiAgICAgICAgICBjb3JyZWN0OiAwLFxuICAgICAgICAgIGVycm9yOiAwLFxuICAgICAgICB9LFxuICAgICAgICBzc3M6IHtcbiAgICAgICAgICBvdmVyYWxsOiAwLFxuICAgICAgICAgIGNvcnJlY3Q6IDAsXG4gICAgICAgICAgZXJyb3I6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBzdGF0cy50cmlhbHMudG90YWwgPSBzdGF0cy50cmlhbHMuY29ycmVjdCArIHN0YXRzLnRyaWFscy5lcnJvciArIHN0YXRzLnRyaWFscy5ucjtcbiAgICBzdGF0cy5ydHMub3ZlcmFsbCA9IHN0YXRzLnJ0cy5jb3JyZWN0ICsgc3RhdHMucnRzLmVycm9yO1xuXG4gICAgc3RhdHMucHJvcG9ydGlvbiA9IHtcbiAgICAgIGNvcnJlY3Q6IHN0YXRzLnRyaWFscy5jb3JyZWN0IC8gc3RhdHMudHJpYWxzLnRvdGFsLFxuICAgICAgZXJyb3I6IHN0YXRzLnRyaWFscy5lcnJvciAvIHN0YXRzLnRyaWFscy50b3RhbCxcbiAgICAgIG5yOiBzdGF0cy50cmlhbHMubnIgLyBzdGF0cy50cmlhbHMudG90YWwsXG4gICAgfTtcblxuICAgIHN0YXRzLm1lYW5SVCA9IHtcbiAgICAgIG92ZXJhbGw6IHN0YXRzLnJ0cy5vdmVyYWxsIC8gKHN0YXRzLnRyaWFscy5jb3JyZWN0ICsgc3RhdHMudHJpYWxzLmVycm9yKSxcbiAgICAgIGNvcnJlY3Q6IHN0YXRzLnJ0cy5jb3JyZWN0IC8gc3RhdHMudHJpYWxzLmNvcnJlY3QsXG4gICAgICBlcnJvcjogc3RhdHMucnRzLmVycm9yIC8gc3RhdHMudHJpYWxzLmVycm9yLFxuICAgIH07XG5cbiAgICB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBhY2N1bXVsYXRvci5zc3Mub3ZlcmFsbCArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQub3ZlcmFsbCkgKiogMjtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5zc3MuY29ycmVjdCArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQuY29ycmVjdCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzcy5lcnJvciArPSAodHJpYWwucnQgLSBhY2N1bXVsYXRvci5tZWFuUlQuZXJyb3IpICoqIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAgc3RhdHMsXG4gICAgKTtcblxuICAgIHN0YXRzLnNkUlQgPSB7XG4gICAgICBvdmVyYWxsOiBNYXRoLnNxcnQoc3RhdHMuc3NzLm92ZXJhbGwgLyAoc3RhdHMudHJpYWxzLmNvcnJlY3QgKyBzdGF0cy50cmlhbHMuZXJyb3IgLSAxKSksXG4gICAgICBjb3JyZWN0OiBNYXRoLnNxcnQoc3RhdHMuc3NzLmNvcnJlY3QgLyAoc3RhdHMudHJpYWxzLmNvcnJlY3QgLSAxKSksXG4gICAgICBlcnJvcjogTWF0aC5zcXJ0KHN0YXRzLnNzcy5lcnJvciAvIChzdGF0cy50cmlhbHMuZXJyb3IgLSAxKSksXG4gICAgfTtcblxuICAgIHJldHVybiBzdGF0cztcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGFuIEVycm9yIFJlc3BvbnNlXG4gIHN0YXRpYyBhenZzMnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHtcbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcblxuICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgoLTIgKiB2ICogYSkgLyBzICoqIDIpO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMik7XG5cbiAgICByZXR1cm4gKEEgLSBaKSAvIChBIC0gMSk7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2VcbiAgc3RhdGljIGF6dnMycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnMycEUoYSwgMSAtIHosIC12LCBzKTtcbiAgfVxuXG4gIC8vIE1lYW4gT3ZlcmFsbCBSVFxuICAvLyBFcXVhdGlvbiA1IChHcmFzbWFuIGV0IGFsLiwgMjAwOSlcbiAgc3RhdGljIGF6dnQwczJtKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenZzMnNkKGEsIHosIHYsIHMgPSBERE1NYXRoLnMpIHtcbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBBID0gTWF0aC5leHAoKC0yICogdiAqIGEpIC8gcyAqKiAyKSAtIDE7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKSAtIDE7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgKC12ICogYSAqKiAyICogKFogKyA0KSAqIFopIC8gQSAqKiAyXG4gICAgICApICsgKFxuICAgICAgICAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBXG4gICAgICApIC0gKFxuICAgICAgICBzICoqIDIgKiB6UHJpbWVcbiAgICAgIClcbiAgICApIC8gdiAqKiAzO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwO1xuICB9XG5cbiAgLy8gTWVhbiBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxMyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenZ0MHMybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMpIHtcbiAgICBmdW5jdGlvbiBwaGkoeCwgeSkge1xuICAgICAgcmV0dXJuIE1hdGguZXhwKCgyICogdiAqIHkpIC8gKHMgKiogMikpIC0gTWF0aC5leHAoKDIgKiB2ICogeCkgLyAocyAqKiAyKSk7XG4gICAgfVxuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgbWVhbiA9ICh6UHJpbWUgKiAocGhpKHpQcmltZSAtIGEsIGEpICsgcGhpKDAsIHpQcmltZSkpICsgMiAqIGEgKiBwaGkoelByaW1lLCAwKSlcbiAgICAgIC8gKHYgKiBwaGkoelByaW1lLCBhKSAqIHBoaSgtYSwgMCkpO1xuICAgIHJldHVybiB0MCArIG1lYW4gKiAxMDAwO1xuICB9XG5cbiAgLy8gU0QgRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTQgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2czJzZEUoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDBzMm1DKGEsIHosIHYsIHQwLCBzID0gRERNTWF0aC5zKSB7XG4gICAgcmV0dXJuIERETU1hdGguYXp2dDBzMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2czJzZEMoYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnMyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2czJnRSh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zKSB7XG4gICAgaWYgKCF0KSByZXR1cm4gMDtcblxuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuICAgIGNvbnN0IGJhc2UgPSAoKE1hdGguUEkgKiBzICoqIDIpIC8gYSAqKiAyKSAqIE1hdGguZXhwKCgtelByaW1lICogdikgLyBzICoqIDIpO1xuXG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCB0ZXJtID0gMDtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBkbyB7XG4gICAgICBrICs9IDE7XG5cbiAgICAgIHRlcm0gPSBrXG4gICAgICAgICogTWF0aC5zaW4oKE1hdGguUEkgKiB6UHJpbWUgKiBrKSAvIGEpXG4gICAgICAgICogTWF0aC5leHAoLTAuNSAqICgodiAqKiAyIC8gcyAqKiAyKSArICgoTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyKSAvIGEgKiogMikpICogdCk7XG5cbiAgICAgIHN1bSArPSB0ZXJtO1xuICAgIH0gd2hpbGUgKGsgPCAyMDApOyAvLyA/PyBIQUNLXG5cbiAgICByZXR1cm4gYmFzZSAqIHN1bTtcbiAgfVxuXG4gIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVFxuICBzdGF0aWMgdGF6dnMyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucykge1xuICAgIHJldHVybiBERE1NYXRoLnRhenZzMmdFKHQsIGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cbn1cbiIsIlxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgRERNTWF0aCBmcm9tICcuL2RkbS1tYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgRERNTWF0aDtcbiIsIlxuLy8gQWRhcHRlZCBmcm9tICBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbFxuXG5mdW5jdGlvbiBzaWduKHIpIHtcbiAgcmV0dXJuICgociA+IDApID8gMSA6ICgociA9PT0gMCkgPyAwIDogLTEpKTtcbn1cblxuZnVuY3Rpb24gbG9naXQocCkge1xuICByZXR1cm4gTWF0aC5sb2cocCAvICgxIC0gcCkpO1xufVxuXG4vLyBFWi1mdW5jdGlvbiBmb3Igc3RhcnRpbmcgdmFsdWVzXG4vLyBpbnB1dDogb2JqIC0gT2JqZWN0IHdpdGggcHJvcGVydGllc1xuLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3Rcbi8vICAgIHNkIC0gc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgUlQncyBpbiBtc1xuLy8gICAgbSAtIHNhbXBsZSBtZWFuIG9mIHRoZSBSVCdzIGluIG1zXG4vLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvblxuLy8gcmV0dXJuczogT2JqZWN0IHdpdGggcHJvcGVydGllcyB2LCBhLCBhbmQgdDAsIGNvbnRhaW5pbmcgRVotZXN0aW1hdGVzIG9mIHRoZXNlIHBhcmFtZXRlcnNcbmV4cG9ydCBmdW5jdGlvbiBkYXRhMmV6KHtcbiAgYWNjdXJhY3k6IHBDLFxuICBzZFJUOiBzZCxcbiAgbWVhblJUOiBtLFxuICBzLFxufSkge1xuICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyO1xuICBjb25zdCBtcnQgPSBtIC8gMTAwMDtcblxuICBjb25zdCBzMiA9IHMgKiogMjtcbiAgY29uc3QgbCA9IGxvZ2l0KHBDKTtcbiAgY29uc3QgeCA9IChsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpKSAvIHZydDtcbiAgY29uc3QgdiA9IHNpZ24ocEMgLSAwLjUpICogcyAqIHggKiogKDEgLyA0KTtcbiAgY29uc3QgYSA9IChzMiAqIGxvZ2l0KHBDKSkgLyB2O1xuICBjb25zdCB5ID0gKC12ICogYSkgLyBzMjtcbiAgY29uc3QgbWR0ID0gKChhIC8gKDIgKiB2KSkgKiAoMSAtIE1hdGguZXhwKHkpKSkgLyAoMSArIE1hdGguZXhwKHkpKTtcbiAgY29uc3QgdDAgPSAobXJ0ID8gbXJ0IC0gbWR0IDogbnVsbCk7IC8vIGNvbXB1dGUgVGVyIG9ubHkgaWYgTVJUIHdhcyBwcm92aWRlZFxuXG4gIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7XG4gIHJldHVybiB7XG4gICAgdixcbiAgICBhLFxuICAgIHQwOiB0MFByaW1lLFxuICAgIHMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhMmV6MigpIHtcblxufVxuIiwiLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogW1wib2ZmXCIsIFwic2VsZlwiXSAqL1xuXG5pbXBvcnQgRERNTWF0aCBmcm9tICdAZGVjaWRhYmxlcy9hY2N1bXVsYWJsZS1tYXRoJztcblxuaW1wb3J0ICogYXMgRVogZnJvbSAnLi9lejInO1xuXG5zZWxmLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBFWi5kYXRhMmV6KHsuLi5ldmVudC5kYXRhLCBzOiBERE1NYXRoLnN9KTtcblxuICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISFcbiAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTtcbiAgY29uc3QgeiA9ICFpc05hTihwYXJhbXMueikgPyBwYXJhbXMueiA6IDAuNTtcbiAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDA7XG4gIGNvbnN0IHQwID0gIWlzTmFOKHBhcmFtcy50MCkgPyBwYXJhbXMudDAgOiAxMDA7XG4gIGNvbnN0IHMgPSAhaXNOYU4ocGFyYW1zLnMpID8gcGFyYW1zLnMgOiBERE1NYXRoLnM7XG5cbiAgY29uc3QgcHJlZGljdGVkID0ge1xuICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6dnMycEMoYSwgeiwgdiksXG4gICAgbWVhblJUOiBERE1NYXRoLmF6dnQwczJtKGEsIHosIHYsIHQwKSxcbiAgICBzZFJUOiBERE1NYXRoLmF6dnMyc2QoYSwgeiwgdiksXG4gIH07XG5cbiAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBhLCB6LCB2LCB0MCwgcyxcbiAgICB9LFxuICAgIHByZWRpY3RlZCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkRETU1hdGgiLCJzIiwidHJpYWxzMnN0YXRzIiwidHJpYWxzIiwic3RhdHMiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInRyaWFsIiwib3V0Y29tZSIsImNvcnJlY3QiLCJydHMiLCJydCIsImVycm9yIiwibnIiLCJ0b3RhbCIsIm92ZXJhbGwiLCJzc3MiLCJwcm9wb3J0aW9uIiwibWVhblJUIiwic2RSVCIsIk1hdGgiLCJzcXJ0IiwiYXp2czJwRSIsImEiLCJ6IiwidiIsInpQcmltZSIsIkEiLCJleHAiLCJaIiwiYXp2czJwQyIsImF6dnQwczJtIiwidDAiLCJtZWFuIiwiYXp2czJzZCIsInZhcmlhbmNlIiwiYXp2dDBzMm1FIiwicGhpIiwieCIsInkiLCJhenZzMnNkRSIsImF6dnQwczJtQyIsImF6dnMyc2RDIiwidGF6dnMyZ0UiLCJ0IiwiYmFzZSIsIlBJIiwiayIsInRlcm0iLCJzdW0iLCJzaW4iLCJ0YXp2czJnQyIsInNpZ24iLCJyIiwibG9naXQiLCJwIiwibG9nIiwiZGF0YTJleiIsImFjY3VyYWN5IiwicEMiLCJzZCIsIm0iLCJ2cnQiLCJtcnQiLCJzMiIsImwiLCJtZHQiLCJ0MFByaW1lIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyYW1zIiwiRVoiLCJkYXRhIiwiaXNOYU4iLCJwcmVkaWN0ZWQiLCJwb3N0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQ0E7RUFDQTtBQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDQTtBQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDZSxNQUFNQSxPQUFPLENBQUM7SUFDM0IsT0FBT0MsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7RUFFWjtJQUNBLE9BQU9DLFlBQVlBLENBQUNDLE1BQU0sRUFBRTtNQUMxQixNQUFNQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUN6QixDQUFDQyxXQUFXLEVBQUVDLEtBQUssS0FBSztRQUN0QixRQUFRQSxLQUFLLENBQUNDLE9BQU87RUFDbkIsUUFBQSxLQUFLLFNBQVM7RUFDWkYsVUFBQUEsV0FBVyxDQUFDSCxNQUFNLENBQUNNLE9BQU8sSUFBSSxDQUFDLENBQUE7RUFDL0JILFVBQUFBLFdBQVcsQ0FBQ0ksR0FBRyxDQUFDRCxPQUFPLElBQUlGLEtBQUssQ0FBQ0ksRUFBRSxDQUFBO0VBQ25DLFVBQUEsTUFBQTtFQUNGLFFBQUEsS0FBSyxPQUFPO0VBQ1ZMLFVBQUFBLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDUyxLQUFLLElBQUksQ0FBQyxDQUFBO0VBQzdCTixVQUFBQSxXQUFXLENBQUNJLEdBQUcsQ0FBQ0UsS0FBSyxJQUFJTCxLQUFLLENBQUNJLEVBQUUsQ0FBQTtFQUNqQyxVQUFBLE1BQUE7RUFDRixRQUFBLEtBQUssSUFBSTtFQUNQTCxVQUFBQSxXQUFXLENBQUNILE1BQU0sQ0FBQ1UsRUFBRSxJQUFJLENBQUMsQ0FBQTtFQUMxQixVQUFBLE1BQUE7RUFFQTtFQUNKLE9BQUE7RUFDQSxNQUFBLE9BQU9QLFdBQVcsQ0FBQTtFQUNwQixLQUFDLEVBQ0Q7RUFDRUgsTUFBQUEsTUFBTSxFQUFFO0VBQ05XLFFBQUFBLEtBQUssRUFBRSxDQUFDO0VBQ1JMLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0VBQ1ZHLFFBQUFBLEtBQUssRUFBRSxDQUFDO0VBQ1JDLFFBQUFBLEVBQUUsRUFBRSxDQUFBO1NBQ0w7RUFDREgsTUFBQUEsR0FBRyxFQUFFO0VBQ0hLLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0VBQ1ZOLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0VBQ1ZHLFFBQUFBLEtBQUssRUFBRSxDQUFBO1NBQ1I7RUFDREksTUFBQUEsR0FBRyxFQUFFO0VBQ0hELFFBQUFBLE9BQU8sRUFBRSxDQUFDO0VBQ1ZOLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0VBQ1ZHLFFBQUFBLEtBQUssRUFBRSxDQUFBO0VBQ1QsT0FBQTtFQUNGLEtBQ0YsQ0FBQyxDQUFBO01BRURSLEtBQUssQ0FBQ0QsTUFBTSxDQUFDVyxLQUFLLEdBQUdWLEtBQUssQ0FBQ0QsTUFBTSxDQUFDTSxPQUFPLEdBQUdMLEtBQUssQ0FBQ0QsTUFBTSxDQUFDUyxLQUFLLEdBQUdSLEtBQUssQ0FBQ0QsTUFBTSxDQUFDVSxFQUFFLENBQUE7RUFDaEZULElBQUFBLEtBQUssQ0FBQ00sR0FBRyxDQUFDSyxPQUFPLEdBQUdYLEtBQUssQ0FBQ00sR0FBRyxDQUFDRCxPQUFPLEdBQUdMLEtBQUssQ0FBQ00sR0FBRyxDQUFDRSxLQUFLLENBQUE7TUFFdkRSLEtBQUssQ0FBQ2EsVUFBVSxHQUFHO1FBQ2pCUixPQUFPLEVBQUVMLEtBQUssQ0FBQ0QsTUFBTSxDQUFDTSxPQUFPLEdBQUdMLEtBQUssQ0FBQ0QsTUFBTSxDQUFDVyxLQUFLO1FBQ2xERixLQUFLLEVBQUVSLEtBQUssQ0FBQ0QsTUFBTSxDQUFDUyxLQUFLLEdBQUdSLEtBQUssQ0FBQ0QsTUFBTSxDQUFDVyxLQUFLO1FBQzlDRCxFQUFFLEVBQUVULEtBQUssQ0FBQ0QsTUFBTSxDQUFDVSxFQUFFLEdBQUdULEtBQUssQ0FBQ0QsTUFBTSxDQUFDVyxLQUFBQTtPQUNwQyxDQUFBO01BRURWLEtBQUssQ0FBQ2MsTUFBTSxHQUFHO0VBQ2JILE1BQUFBLE9BQU8sRUFBRVgsS0FBSyxDQUFDTSxHQUFHLENBQUNLLE9BQU8sSUFBSVgsS0FBSyxDQUFDRCxNQUFNLENBQUNNLE9BQU8sR0FBR0wsS0FBSyxDQUFDRCxNQUFNLENBQUNTLEtBQUssQ0FBQztRQUN4RUgsT0FBTyxFQUFFTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0QsT0FBTyxHQUFHTCxLQUFLLENBQUNELE1BQU0sQ0FBQ00sT0FBTztRQUNqREcsS0FBSyxFQUFFUixLQUFLLENBQUNNLEdBQUcsQ0FBQ0UsS0FBSyxHQUFHUixLQUFLLENBQUNELE1BQU0sQ0FBQ1MsS0FBQUE7T0FDdkMsQ0FBQTtFQUVEVCxJQUFBQSxNQUFNLENBQUNFLE1BQU0sQ0FDWCxDQUFDQyxXQUFXLEVBQUVDLEtBQUssS0FBSztFQUN0QkQsTUFBQUEsV0FBVyxDQUFDVSxHQUFHLENBQUNELE9BQU8sSUFBSSxDQUFDUixLQUFLLENBQUNJLEVBQUUsR0FBR0wsV0FBVyxDQUFDWSxNQUFNLENBQUNILE9BQU8sS0FBSyxDQUFDLENBQUE7UUFDdkUsUUFBUVIsS0FBSyxDQUFDQyxPQUFPO0VBQ25CLFFBQUEsS0FBSyxTQUFTO0VBQ1pGLFVBQUFBLFdBQVcsQ0FBQ1UsR0FBRyxDQUFDUCxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDSSxFQUFFLEdBQUdMLFdBQVcsQ0FBQ1ksTUFBTSxDQUFDVCxPQUFPLEtBQUssQ0FBQyxDQUFBO0VBQ3ZFLFVBQUEsTUFBQTtFQUNGLFFBQUEsS0FBSyxPQUFPO0VBQ1ZILFVBQUFBLFdBQVcsQ0FBQ1UsR0FBRyxDQUFDSixLQUFLLElBQUksQ0FBQ0wsS0FBSyxDQUFDSSxFQUFFLEdBQUdMLFdBQVcsQ0FBQ1ksTUFBTSxDQUFDTixLQUFLLEtBQUssQ0FBQyxDQUFBO0VBQ25FLFVBQUEsTUFBQTtFQUVBO0VBQ0osT0FBQTtFQUNBLE1BQUEsT0FBT04sV0FBVyxDQUFBO09BQ25CLEVBQ0RGLEtBQ0YsQ0FBQyxDQUFBO01BRURBLEtBQUssQ0FBQ2UsSUFBSSxHQUFHO1FBQ1hKLE9BQU8sRUFBRUssSUFBSSxDQUFDQyxJQUFJLENBQUNqQixLQUFLLENBQUNZLEdBQUcsQ0FBQ0QsT0FBTyxJQUFJWCxLQUFLLENBQUNELE1BQU0sQ0FBQ00sT0FBTyxHQUFHTCxLQUFLLENBQUNELE1BQU0sQ0FBQ1MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3ZGSCxNQUFBQSxPQUFPLEVBQUVXLElBQUksQ0FBQ0MsSUFBSSxDQUFDakIsS0FBSyxDQUFDWSxHQUFHLENBQUNQLE9BQU8sSUFBSUwsS0FBSyxDQUFDRCxNQUFNLENBQUNNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNsRUcsTUFBQUEsS0FBSyxFQUFFUSxJQUFJLENBQUNDLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ1ksR0FBRyxDQUFDSixLQUFLLElBQUlSLEtBQUssQ0FBQ0QsTUFBTSxDQUFDUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7T0FDNUQsQ0FBQTtFQUVELElBQUEsT0FBT1IsS0FBSyxDQUFBO0VBQ2QsR0FBQTs7RUFFQTtFQUNBLEVBQUEsT0FBT2tCLE9BQU9BLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUV4QixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3JDLElBQUEsTUFBTXlCLE1BQU0sR0FBR0gsQ0FBQyxHQUFHQyxDQUFDLENBQUE7RUFFcEIsSUFBQSxNQUFNRyxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUMsQ0FBQyxHQUFHSCxDQUFDLEdBQUdGLENBQUMsR0FBSXRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtFQUN6QyxJQUFBLE1BQU00QixDQUFDLEdBQUdULElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUMsQ0FBQyxHQUFHSCxDQUFDLEdBQUdDLE1BQU0sR0FBSXpCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtNQUU5QyxPQUFPLENBQUMwQixDQUFDLEdBQUdFLENBQUMsS0FBS0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQzFCLEdBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9HLE9BQU9BLENBQUNQLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUV4QixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3JDLElBQUEsT0FBT0QsT0FBTyxDQUFDc0IsT0FBTyxDQUFDQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFeEIsQ0FBQyxDQUFDLENBQUE7RUFDekMsR0FBQTs7RUFFQTtFQUNBO0VBQ0EsRUFBQSxPQUFPOEIsUUFBUUEsQ0FBQ1IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRU8sRUFBRSxFQUFFL0IsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUMxQyxJQUFBLE1BQU15QixNQUFNLEdBQUdILENBQUMsR0FBR0MsQ0FBQyxDQUFBO0VBQ3BCLElBQUEsTUFBTUcsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLENBQUMsR0FBR0gsQ0FBQyxHQUFHRixDQUFDLEdBQUl0QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBQzdDLElBQUEsTUFBTTRCLENBQUMsR0FBR1QsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxDQUFDLEdBQUdILENBQUMsR0FBR0MsTUFBTSxHQUFJekIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUVsRCxJQUFBLE1BQU1nQyxJQUFJLEdBQUcsRUFBRVAsTUFBTSxHQUFHRCxDQUFDLENBQUMsR0FBSUYsQ0FBQyxHQUFHRSxDQUFDLElBQUtJLENBQUMsR0FBR0YsQ0FBQyxDQUFDLENBQUE7RUFDOUMsSUFBQSxPQUFPSyxFQUFFLEdBQUdDLElBQUksR0FBRyxJQUFJLENBQUE7RUFDekIsR0FBQTs7RUFFQTtFQUNBO0VBQ0EsRUFBQSxPQUFPQyxPQUFPQSxDQUFDWCxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFeEIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUNyQyxJQUFBLE1BQU15QixNQUFNLEdBQUdILENBQUMsR0FBR0MsQ0FBQyxDQUFBO0VBQ3BCLElBQUEsTUFBTUcsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLENBQUMsR0FBR0gsQ0FBQyxHQUFHRixDQUFDLEdBQUl0QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBQzdDLElBQUEsTUFBTTRCLENBQUMsR0FBR1QsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxDQUFDLEdBQUdILENBQUMsR0FBR0MsTUFBTSxHQUFJekIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUVsRCxJQUFBLE1BQU1rQyxRQUFRLEdBQUcsQ0FFWixDQUFDVixDQUFDLEdBQUdGLENBQUMsSUFBSSxDQUFDLElBQUlNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxHQUFJRixDQUFDLElBQUksQ0FBQyxHQUVwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdGLENBQUMsR0FBR0YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdFLENBQUMsR0FBR0MsTUFBTSxHQUFHSCxDQUFDLEdBQUd0QixDQUFDLElBQUksQ0FBQyxHQUFHc0IsQ0FBQyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxHQUFHSixDQUFDLEdBQUdDLE1BQU0sR0FBR0gsQ0FBQyxJQUFJSSxDQUNsRixHQUNDMUIsQ0FBQyxJQUFJLENBQUMsR0FBR3lCLE1BQ1YsSUFDQ0QsQ0FBQyxJQUFJLENBQUMsQ0FBQTtFQUVWLElBQUEsT0FBT0wsSUFBSSxDQUFDQyxJQUFJLENBQUNjLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQTtFQUNuQyxHQUFBOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU9DLFNBQVNBLENBQUNiLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVPLEVBQUUsRUFBRS9CLENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLEVBQUU7RUFDM0MsSUFBQSxTQUFTb0MsR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFDakIsTUFBQSxPQUFPbkIsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxHQUFHSCxDQUFDLEdBQUdjLENBQUMsR0FBS3RDLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBR21CLElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUMsR0FBR0gsQ0FBQyxHQUFHYSxDQUFDLEdBQUtyQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUE7RUFDNUUsS0FBQTtFQUNBLElBQUEsTUFBTXlCLE1BQU0sR0FBR0gsQ0FBQyxHQUFHQyxDQUFDLENBQUE7TUFFcEIsTUFBTVMsSUFBSSxHQUFHLENBQUNQLE1BQU0sSUFBSVcsR0FBRyxDQUFDWCxNQUFNLEdBQUdILENBQUMsRUFBRUEsQ0FBQyxDQUFDLEdBQUdjLEdBQUcsQ0FBQyxDQUFDLEVBQUVYLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHSCxDQUFDLEdBQUdjLEdBQUcsQ0FBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUNoRkQsQ0FBQyxHQUFHWSxHQUFHLENBQUNYLE1BQU0sRUFBRUgsQ0FBQyxDQUFDLEdBQUdjLEdBQUcsQ0FBQyxDQUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUNyQyxJQUFBLE9BQU9TLEVBQUUsR0FBR0MsSUFBSSxHQUFHLElBQUksQ0FBQTtFQUN6QixHQUFBOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU9PLFFBQVFBLENBQUNqQixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFeEIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUN0QyxJQUFBLFNBQVNvQyxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNqQixNQUFBLE9BQU9uQixJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsR0FBR2MsQ0FBQyxHQUFLdEMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxHQUFHSCxDQUFDLEdBQUdhLENBQUMsR0FBS3JDLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQTtFQUM1RSxLQUFBO0VBQ0EsSUFBQSxNQUFNeUIsTUFBTSxHQUFHSCxDQUFDLEdBQUdDLENBQUMsQ0FBQTtFQUVwQixJQUFBLE1BQU1XLFFBQVEsR0FFVixDQUFDLENBQUMsR0FBR1osQ0FBQyxHQUFHYyxHQUFHLENBQUMsQ0FBQyxFQUFFWCxNQUFNLENBQUMsSUFDbkIsQ0FBQyxHQUFHRCxDQUFDLEdBQUdGLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUUsQ0FBQyxHQUFHSCxDQUFDLENBQUMsR0FBS3RCLENBQUMsSUFBSSxDQUFDLEdBQUdvQyxHQUFHLENBQUMsQ0FBQyxFQUFFZCxDQUFDLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUVILENBQUMsQ0FBRSxDQUFDLEdBQzFFSCxJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsR0FBR0YsQ0FBQyxHQUFJdEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUVoQ3dCLENBQUMsSUFBSSxDQUFDLEdBQUdZLEdBQUcsQ0FBQyxDQUFDLEVBQUVkLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBR2MsR0FBRyxDQUFDWCxNQUFNLEVBQUVILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsR0FFRCxDQUNFLENBQUMsR0FBR0UsQ0FBQyxHQUFHQyxNQUFNLElBQUksQ0FBQyxHQUFHSCxDQUFDLEdBQUdHLE1BQU0sQ0FBQyxHQUFHTixJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLEdBQUdILENBQUMsSUFBSUMsTUFBTSxHQUFHSCxDQUFDLENBQUMsR0FBSXRCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDM0V5QixNQUFNLEdBQUd6QixDQUFDLElBQUksQ0FBQyxHQUFHb0MsR0FBRyxDQUFDLENBQUMsR0FBR1gsTUFBTSxFQUFFLENBQUMsR0FBR0gsQ0FBQyxDQUFDLEtBRTFDRSxDQUFDLElBQUksQ0FBQyxHQUFHWSxHQUFHLENBQUNYLE1BQU0sRUFBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUUvQixDQUFBO0VBRUQsSUFBQSxPQUFPSCxJQUFJLENBQUNDLElBQUksQ0FBQ2MsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFBO0VBQ25DLEdBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9NLFNBQVNBLENBQUNsQixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFTyxFQUFFLEVBQUUvQixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQzNDLElBQUEsT0FBT0QsT0FBTyxDQUFDb0MsU0FBUyxDQUFDYixDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFTyxFQUFFLEVBQUUvQixDQUFDLENBQUMsQ0FBQTtFQUMvQyxHQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPeUMsUUFBUUEsQ0FBQ25CLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUV4QixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3RDLElBQUEsT0FBT0QsT0FBTyxDQUFDd0MsUUFBUSxDQUFDakIsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRXhCLENBQUMsQ0FBQyxDQUFBO0VBQzFDLEdBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU8wQyxRQUFRQSxDQUFDQyxDQUFDLEVBQUVyQixDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFeEIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsRUFBRTtFQUN6QyxJQUFBLElBQUksQ0FBQzJDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtFQUVoQixJQUFBLE1BQU1sQixNQUFNLEdBQUdILENBQUMsR0FBR0MsQ0FBQyxDQUFBO01BQ3BCLE1BQU1xQixJQUFJLEdBQUt6QixJQUFJLENBQUMwQixFQUFFLEdBQUc3QyxDQUFDLElBQUksQ0FBQyxHQUFJc0IsQ0FBQyxJQUFJLENBQUMsR0FBSUgsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQ0YsTUFBTSxHQUFHRCxDQUFDLEdBQUl4QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7TUFFN0UsSUFBSThDLENBQUMsR0FBRyxDQUFDLENBQUE7TUFDVCxJQUFJQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO01BQ1osSUFBSUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtNQUNYLEdBQUc7RUFDREYsTUFBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVOQyxJQUFJLEdBQUdELENBQUMsR0FDSjNCLElBQUksQ0FBQzhCLEdBQUcsQ0FBRTlCLElBQUksQ0FBQzBCLEVBQUUsR0FBR3BCLE1BQU0sR0FBR3FCLENBQUMsR0FBSXhCLENBQUMsQ0FBQyxHQUNwQ0gsSUFBSSxDQUFDUSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUtILENBQUMsSUFBSSxDQUFDLEdBQUd4QixDQUFDLElBQUksQ0FBQyxHQUFNbUIsSUFBSSxDQUFDMEIsRUFBRSxJQUFJLENBQUMsR0FBR0MsQ0FBQyxJQUFJLENBQUMsR0FBRzlDLENBQUMsSUFBSSxDQUFDLEdBQUlzQixDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUdxQixDQUFDLENBQUMsQ0FBQTtFQUUxRkssTUFBQUEsR0FBRyxJQUFJRCxJQUFJLENBQUE7RUFDYixLQUFDLFFBQVFELENBQUMsR0FBRyxHQUFHLEVBQUU7O01BRWxCLE9BQU9GLElBQUksR0FBR0ksR0FBRyxDQUFBO0VBQ25CLEdBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9FLFFBQVFBLENBQUNQLENBQUMsRUFBRXJCLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUV4QixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3pDLElBQUEsT0FBT0QsT0FBTyxDQUFDMkMsUUFBUSxDQUFDQyxDQUFDLEVBQUVyQixDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFeEIsQ0FBQyxDQUFDLENBQUE7RUFDN0MsR0FBQTtFQUNGOztFQzlPQTs7RUNBQTs7RUFFQSxTQUFTbUQsSUFBSUEsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ2YsRUFBQSxPQUFTQSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBS0EsQ0FBQyxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUE7RUFDNUMsQ0FBQTtFQUVBLFNBQVNDLEtBQUtBLENBQUNDLENBQUMsRUFBRTtJQUNoQixPQUFPbkMsSUFBSSxDQUFDb0MsR0FBRyxDQUFDRCxDQUFDLElBQUksQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQzlCLENBQUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDTyxTQUFTRSxPQUFPQSxDQUFDO0VBQ3RCQyxFQUFBQSxRQUFRLEVBQUVDLEVBQUU7RUFDWnhDLEVBQUFBLElBQUksRUFBRXlDLEVBQUU7RUFDUjFDLEVBQUFBLE1BQU0sRUFBRTJDLENBQUM7RUFDVDVELEVBQUFBLENBQUFBO0VBQ0YsQ0FBQyxFQUFFO0VBQ0QsRUFBQSxNQUFNNkQsR0FBRyxHQUFHLENBQUNGLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFBO0VBQzVCLEVBQUEsTUFBTUcsR0FBRyxHQUFHRixDQUFDLEdBQUcsSUFBSSxDQUFBO0VBRXBCLEVBQUEsTUFBTUcsRUFBRSxHQUFHL0QsQ0FBQyxJQUFJLENBQUMsQ0FBQTtFQUNqQixFQUFBLE1BQU1nRSxDQUFDLEdBQUdYLEtBQUssQ0FBQ0ssRUFBRSxDQUFDLENBQUE7RUFDbkIsRUFBQSxNQUFNckIsQ0FBQyxHQUFJMkIsQ0FBQyxJQUFJQSxDQUFDLEdBQUdOLEVBQUUsSUFBSSxDQUFDLEdBQUdNLENBQUMsR0FBR04sRUFBRSxHQUFHQSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUlHLEdBQUcsQ0FBQTtFQUN2RCxFQUFBLE1BQU1yQyxDQUFDLEdBQUcyQixJQUFJLENBQUNPLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRzFELENBQUMsR0FBR3FDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDM0MsTUFBTWYsQ0FBQyxHQUFJeUMsRUFBRSxHQUFHVixLQUFLLENBQUNLLEVBQUUsQ0FBQyxHQUFJbEMsQ0FBQyxDQUFBO0VBQzlCLEVBQUEsTUFBTWMsQ0FBQyxHQUFJLENBQUNkLENBQUMsR0FBR0YsQ0FBQyxHQUFJeUMsRUFBRSxDQUFBO0lBQ3ZCLE1BQU1FLEdBQUcsR0FBSzNDLENBQUMsSUFBSSxDQUFDLEdBQUdFLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBR0wsSUFBSSxDQUFDUSxHQUFHLENBQUNXLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQyxHQUFHbkIsSUFBSSxDQUFDUSxHQUFHLENBQUNXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkUsTUFBTVAsRUFBRSxHQUFJK0IsR0FBRyxHQUFHQSxHQUFHLEdBQUdHLEdBQUcsR0FBRyxJQUFLLENBQUM7O0VBRXBDLEVBQUEsTUFBTUMsT0FBTyxHQUFHbkMsRUFBRSxHQUFHLElBQUksQ0FBQTtJQUN6QixPQUFPO01BQ0xQLENBQUM7TUFDREYsQ0FBQztFQUNEUyxJQUFBQSxFQUFFLEVBQUVtQyxPQUFPO0VBQ1hsRSxJQUFBQSxDQUFBQTtLQUNELENBQUE7RUFDSDs7RUMzQ0E7O0VBTUFtRSxJQUFJLENBQUNDLFNBQVMsR0FBSUMsS0FBSyxJQUFLO0VBQzFCLEVBQUEsTUFBTUMsTUFBTSxHQUFHQyxPQUFVLENBQUM7TUFBQyxHQUFHRixLQUFLLENBQUNHLElBQUk7TUFBRXhFLENBQUMsRUFBRUQsT0FBTyxDQUFDQyxDQUFBQTtFQUFDLEdBQUMsQ0FBQyxDQUFBOztFQUV4RDtFQUNBLEVBQUEsTUFBTXNCLENBQUMsR0FBRyxDQUFDbUQsS0FBSyxDQUFDSCxNQUFNLENBQUNoRCxDQUFDLENBQUMsR0FBR2dELE1BQU0sQ0FBQ2hELENBQUMsR0FBRyxHQUFHLENBQUE7RUFDM0MsRUFBQSxNQUFNQyxDQUFDLEdBQUcsQ0FBQ2tELEtBQUssQ0FBQ0gsTUFBTSxDQUFDL0MsQ0FBQyxDQUFDLEdBQUcrQyxNQUFNLENBQUMvQyxDQUFDLEdBQUcsR0FBRyxDQUFBO0VBQzNDLEVBQUEsTUFBTUMsQ0FBQyxHQUFHLENBQUNpRCxLQUFLLENBQUNILE1BQU0sQ0FBQzlDLENBQUMsQ0FBQyxHQUFHOEMsTUFBTSxDQUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUN6QyxFQUFBLE1BQU1PLEVBQUUsR0FBRyxDQUFDMEMsS0FBSyxDQUFDSCxNQUFNLENBQUN2QyxFQUFFLENBQUMsR0FBR3VDLE1BQU0sQ0FBQ3ZDLEVBQUUsR0FBRyxHQUFHLENBQUE7RUFDOUMsRUFBQSxNQUFNL0IsQ0FBQyxHQUFHLENBQUN5RSxLQUFLLENBQUNILE1BQU0sQ0FBQ3RFLENBQUMsQ0FBQyxHQUFHc0UsTUFBTSxDQUFDdEUsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQTtFQUVqRCxFQUFBLE1BQU0wRSxTQUFTLEdBQUc7TUFDaEJqQixRQUFRLEVBQUUxRCxPQUFPLENBQUM4QixPQUFPLENBQUNQLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLENBQUM7RUFDbENQLElBQUFBLE1BQU0sRUFBRWxCLE9BQU8sQ0FBQytCLFFBQVEsQ0FBQ1IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRU8sRUFBRSxDQUFDO01BQ3JDYixJQUFJLEVBQUVuQixPQUFPLENBQUNrQyxPQUFPLENBQUNYLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLENBQUE7S0FDOUIsQ0FBQTtJQUVEMkMsSUFBSSxDQUFDUSxXQUFXLENBQUM7RUFDZkwsSUFBQUEsTUFBTSxFQUFFO1FBQ05oRCxDQUFDO1FBQUVDLENBQUM7UUFBRUMsQ0FBQztRQUFFTyxFQUFFO0VBQUUvQixNQUFBQSxDQUFBQTtPQUNkO0VBQ0QwRSxJQUFBQSxTQUFBQTtFQUNGLEdBQUMsQ0FBQyxDQUFBO0VBQ0osQ0FBQzs7Ozs7OyJ9');
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
    return [super.styles, i$2`
        :host {
          display: inline-block;
        }
      `];
  }
  render() {
    return x$1`
      <div>
        <div>Observed:
          sd = ${this.observed.sdRT?.toFixed(0)},
          sdC = ${this.observed.correctSDRT?.toFixed(0)},
          pC = ${this.observed.accuracy?.toFixed(2)},
          m = ${this.observed.meanRT?.toFixed(0)},
          mC = ${this.observed.correctMeanRT?.toFixed(0)}
        </div>
        <div>Current:
          <var class="math-var a">a</var> = ${this.a.toFixed(2)},
          <var class="math-var z">z</var> = ${this.z.toFixed(2)},
          <var class="math-var v">v</var> = ${this.v.toFixed(2)},
          <var class="math-var t0">t0</var> = ${this.t0.toFixed(0)}
        </div>
        <div>Predicted:
          sd = ${this.predicted.sdRT?.toFixed(0)},
          sdC = ${this.predicted.correctSDRT?.toFixed(0)},
          pC = ${this.predicted.accuracy?.toFixed(2)},
          m = ${this.predicted.meanRT?.toFixed(0)},
          mC = ${this.predicted.correctMeanRT?.toFixed(0)}
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
    this.a = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-a', {
      detail: {
        a: this.a
      },
      bubbles: true
    }));
  }
  setStartingPoint(e) {
    this.z = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-z', {
      detail: {
        z: this.z
      },
      bubbles: true
    }));
  }
  setDriftRate(e) {
    this.v = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-v', {
      detail: {
        v: this.v
      },
      bubbles: true
    }));
  }
  setNondecisionTime(e) {
    this.t0 = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-t0', {
      detail: {
        t0: this.t0
      },
      bubbles: true
    }));
  }
  static get styles() {
    return [super.styles, i$2`
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
        ${this.a != null ? x$1`<decidables-slider ?disabled=${!this.interactive} min="0.01" max="2" step=".01" .value=${this.a.toFixed(2)} @change=${this.setBoundarySeparation.bind(this)} @input=${this.setBoundarySeparation.bind(this)}><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>` : x$1``}
        ${this.z != null ? x$1`<decidables-slider ?disabled=${!this.interactive} min="0.01" max="0.99" step=".01" .value=${this.z.toFixed(2)} @change=${this.setStartingPoint.bind(this)} @input=${this.setStartingPoint.bind(this)}><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>` : x$1``}
        ${this.v != null ? x$1`<decidables-slider ?disabled=${!this.interactive} min="0.01" max="5" step=".01" .value=${this.v.toFixed(2)} @change=${this.setDriftRate.bind(this)} @input=${this.setDriftRate.bind(this)}><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>` : x$1``}
        ${this.t0 != null ? x$1`<decidables-slider ?disabled=${!this.interactive} min="0" max="500" step="1" .value=${this.t0.toFixed(0)} @change=${this.setNondecisionTime.bind(this)} @input=${this.setNondecisionTime.bind(this)}><div>Nondecision Time<br><span class="math-var">t₀</span></div></decidables-slider>` : x$1``}
      </div>`;
  }
}
customElements.define('ddm-parameters', DDMParameters);

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
*/
class DDMMath {
  static s = 1;

  // Calculate a bunch of statistics for an array of trials
  static trials2stats(trials) {
    const stats = trials.reduce((accumulator, trial) => {
      switch (trial.outcome) {
        case 'correct':
          accumulator.trials.correct += 1;
          accumulator.rts.correct += trial.rt;
          break;
        case 'error':
          accumulator.trials.error += 1;
          accumulator.rts.error += trial.rt;
          break;
        case 'nr':
          accumulator.trials.nr += 1;
          break;
        // No-op
      }
      return accumulator;
    }, {
      trials: {
        total: 0,
        correct: 0,
        error: 0,
        nr: 0
      },
      rts: {
        overall: 0,
        correct: 0,
        error: 0
      },
      sss: {
        overall: 0,
        correct: 0,
        error: 0
      }
    });
    stats.trials.total = stats.trials.correct + stats.trials.error + stats.trials.nr;
    stats.rts.overall = stats.rts.correct + stats.rts.error;
    stats.proportion = {
      correct: stats.trials.correct / stats.trials.total,
      error: stats.trials.error / stats.trials.total,
      nr: stats.trials.nr / stats.trials.total
    };
    stats.meanRT = {
      overall: stats.rts.overall / (stats.trials.correct + stats.trials.error),
      correct: stats.rts.correct / stats.trials.correct,
      error: stats.rts.error / stats.trials.error
    };
    trials.reduce((accumulator, trial) => {
      accumulator.sss.overall += (trial.rt - accumulator.meanRT.overall) ** 2;
      switch (trial.outcome) {
        case 'correct':
          accumulator.sss.correct += (trial.rt - accumulator.meanRT.correct) ** 2;
          break;
        case 'error':
          accumulator.sss.error += (trial.rt - accumulator.meanRT.error) ** 2;
          break;
        // No-op
      }
      return accumulator;
    }, stats);
    stats.sdRT = {
      overall: Math.sqrt(stats.sss.overall / (stats.trials.correct + stats.trials.error - 1)),
      correct: Math.sqrt(stats.sss.correct / (stats.trials.correct - 1)),
      error: Math.sqrt(stats.sss.error / (stats.trials.error - 1))
    };
    return stats;
  }

  // Probability of an Error Response
  static azvs2pE(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2);
    const Z = Math.exp(-2 * v * zPrime / s ** 2);
    return (A - Z) / (A - 1);
  }

  // Probability of a Correct Response
  static azvs2pC(a, z, v, s = DDMMath.s) {
    return DDMMath.azvs2pE(a, 1 - z, -v, s);
  }

  // Mean Overall RT
  // Equation 5 (Grasman et al., 2009)
  static azvt0s2m(a, z, v, t0, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2) - 1;
    const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
    const mean = -(zPrime / v) + a / v * (Z / A);
    return t0 + mean * 1000;
  }

  // SD Overall RT
  // Equation 6 (Grasman et al., 2009)
  static azvs2sd(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2) - 1;
    const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
    const variance = (-v * a ** 2 * (Z + 4) * Z / A ** 2 + ((-3 * v * a ** 2 + 4 * v * zPrime * a + s ** 2 * a) * Z + 4 * v * zPrime * a) / A - s ** 2 * zPrime) / v ** 3;
    return Math.sqrt(variance) * 1000;
  }

  // Mean Error RT
  // Equation 13 (Grasman et al., 2009)
  static azvt0s2mE(a, z, v, t0, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
    }
    const zPrime = a * z;
    const mean = (zPrime * (phi(zPrime - a, a) + phi(0, zPrime)) + 2 * a * phi(zPrime, 0)) / (v * phi(zPrime, a) * phi(-a, 0));
    return t0 + mean * 1000;
  }

  // SD Error RT
  // Equation 14 (Grasman et al., 2009)
  static azvs2sdE(a, z, v, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
    }
    const zPrime = a * z;
    const variance = -2 * a * phi(0, zPrime) * (2 * v * a * phi(zPrime, 2 * a) + s ** 2 * phi(0, a) * phi(zPrime, a)) * Math.exp(2 * v * a / s ** 2) / (v ** 3 * phi(0, a) ** 2 * phi(zPrime, a) ** 2) + (4 * v * zPrime * (2 * a - zPrime) * Math.exp(2 * v * (zPrime + a) / s ** 2) + zPrime * s ** 2 * phi(2 * zPrime, 2 * a)) / (v ** 3 * phi(zPrime, a) ** 2);
    return Math.sqrt(variance) * 1000;
  }

  // Mean Correct RT
  static azvt0s2mC(a, z, v, t0, s = DDMMath.s) {
    return DDMMath.azvt0s2mE(a, 1 - z, -v, t0, s);
  }

  // SD Correct RT
  static azvs2sdC(a, z, v, s = DDMMath.s) {
    return DDMMath.azvs2sdE(a, 1 - z, -v, s);
  }

  // Density of Error RT
  static tazvs2gE(t, a, z, v, s = DDMMath.s) {
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
  static tazvs2gC(t, a, z, v, s = DDMMath.s) {
    return DDMMath.tazvs2gE(t, a, 1 - z, -v, s);
  }
}

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
    const proportionCorrect = DDMMath.azvs2pC(a, z, v);
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
          d: DDMMath.tazvs2gC(i / 1000, a, z, v) / proportionCorrect
        });
      }
    }
    return dist;
  }
  alignErrorDistribution(a, z, v, t0) {
    const proportionError = DDMMath.azvs2pE(a, z, v);
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
          d: DDMMath.tazvs2gE(i / 1000, a, z, v) / proportionError
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
    const trials = this.data.trials.filter(path => {
      return !path.animate;
    }).reduce((stats, path) => {
      stats.correct += path.outcome === 'correct' ? 1 : 0;
      stats.error += path.outcome === 'error' ? 1 : 0;
      return stats;
    }, {
      correct: 0,
      error: 0
    });
    this.data.correctCount = trials.correct;
    this.data.errorCount = trials.error;
    this.data.accuracy = this.trials > 0 ? trials.correct / this.trials : NaN;
    const rts = this.data.trials.filter(path => {
      return !path.animate;
    }).reduce((stats, path) => {
      stats.correct += path.outcome === 'correct' ? path.rt : 0;
      stats.error += path.outcome === 'error' ? path.rt : 0;
      return stats;
    }, {
      correct: 0,
      error: 0
    });
    this.data.correctMeanRT = trials.correct > 0 ? rts.correct / trials.correct : NaN;
    this.data.errorMeanRT = trials.error > 0 ? rts.error / trials.error : NaN;
    this.data.meanRT = this.trials > 0 ? (rts.correct + rts.error) / (trials.correct + trials.error) : NaN;
    const sss = this.data.trials.filter(path => {
      return !path.animate;
    }).reduce((stats, path) => {
      stats.correct += path.outcome === 'correct' ? (path.rt - this.data.correctMeanRT) ** 2 : 0;
      stats.error += path.outcome === 'error' ? (path.rt - this.data.errorMeanRT) ** 2 : 0;
      stats.overall += (path.rt - this.data.meanRT) ** 2;
      return stats;
    }, {
      correct: 0,
      error: 0,
      overall: 0
    });
    this.data.correctSDRT = trials.correct > 1 ? Math.sqrt(sss.correct / (trials.correct - 1)) : NaN;
    this.data.errorSDRT = trials.error > 1 ? Math.sqrt(sss.error / (trials.error - 1)) : NaN;
    this.data.sdRT = this.trials > 1 ? Math.sqrt(sss.overall / (this.trials - 1)) : NaN;

    // Model Summary Stats
    this.model.accuracy = DDMMath.azvs2pC(this.a, this.z, this.v);
    this.model.correctMeanRT = DDMMath.azvt0s2mC(this.a, this.z, this.v, this.t0);
    this.model.errorMeanRT = DDMMath.azvt0s2mE(this.a, this.z, this.v, this.t0);
    this.model.correctSDRT = DDMMath.azvs2sdC(this.a, this.z, this.v);
    this.model.errorSDRT = DDMMath.azvs2sdE(this.a, this.z, this.v);

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
    return [super.styles, i$2`
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
          stroke: var(---color-correct);
        }

        .path.error .curve {
          stroke: var(---color-error);
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

        .rt.correct .mark {
          stroke: var(---color-correct);
          stroke-width: 1;
        }

        .rt.error .mark {
          stroke: var(---color-error);
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
      boundary = boundary < this.scale.evidence.min ? this.scale.evidence.min : boundary > this.scale.evidence.max ? this.scale.evidence.max : datum.bound === 'upper' && boundary < 0.005 ? 0.005 : datum.bound === 'lower' && boundary > -0.005 ? -0.005 : boundary;
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
    //  ENTER
    const evidencePlotEnter = svgEnter.append('g').classed('plot evidence', true);
    const correctDensityPlotEnter = svgEnter.append('g').classed('plot density correct', true);
    const errorDensityPlotEnter = svgEnter.append('g').classed('plot density error', true);
    const accuracyPlotEnter = svgEnter.append('g').classed('plot accuracy', true);
    //  MERGE
    const evidencePlotMerge = svgMerge.select('.plot.evidence').attr('transform', `translate(${margin.left}, ${margin.top + densityHeight + gapHeight})`);
    const correctDensityPlotMerge = svgMerge.select('.plot.density.correct').attr('transform', `translate(${margin.left}, ${margin.top})`);
    const errorDensityPlotMerge = svgMerge.select('.plot.density.error').attr('transform', `translate(${margin.left}, ${margin.top + densityHeight + evidenceHeight + 2 * gapHeight})`);
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
    const correctDensityUnderlayerEnter = correctDensityPlotEnter.append('g').classed('underlayer', true);
    const errorDensityUnderlayerEnter = errorDensityPlotEnter.append('g').classed('underlayer', true);
    const accuracyUnderlayerEnter = accuracyPlotEnter.append('g').classed('underlayer', true);
    //  MERGE
    const evidenceUnderlayerMerge = evidencePlotMerge.select('.underlayer');
    const correctDensityUnderlayerMerge = correctDensityPlotMerge.select('.underlayer');
    const errorDensityUnderlayerMerge = errorDensityPlotMerge.select('.underlayer');
    const accuracyUnderlayerMerge = accuracyPlotMerge.select('.underlayer');

    // Contents
    //  ENTER
    evidencePlotEnter.append('g').classed('content', true).append('g').classed('paths', true);
    correctDensityPlotEnter.append('g').classed('content', true);
    errorDensityPlotEnter.append('g').classed('content', true);
    accuracyPlotEnter.append('g').classed('content', true);
    //  MERGE
    const evidenceContentMerge = evidencePlotMerge.select('.content');
    const correctDensityContentMerge = correctDensityPlotMerge.select('.content');
    const errorDensityContentMerge = errorDensityPlotMerge.select('.content');
    const accuracyContentMerge = accuracyPlotMerge.select('.content');

    // Overlayers
    //  ENTER
    evidencePlotEnter.append('g').classed('overlayer', true);
    correctDensityPlotEnter.append('g').classed('overlayer', true);
    errorDensityPlotEnter.append('g').classed('overlayer', true);
    accuracyPlotEnter.append('g').classed('overlayer', true);
    //  MERGE
    const evidenceOverlayerMerge = evidencePlotMerge.select('.overlayer');
    const correctDensityOverlayerMerge = correctDensityPlotMerge.select('.overlayer');
    const errorDensityOverlayerMerge = errorDensityPlotMerge.select('.overlayer');
    // const accuracyOverlayerMerge = accuracyPlotMerge.select('.overlayer');

    //
    // UNDERLAYERS
    //

    // Backgrounds
    //  ENTER
    evidenceUnderlayerEnter.append('rect').classed('background', true);
    correctDensityUnderlayerEnter.append('rect').classed('background', true);
    errorDensityUnderlayerEnter.append('rect').classed('background', true);
    //  MERGE
    evidenceUnderlayerMerge.select('.background').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('y', evidenceScale(this.bounds.upper)).attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper)).attr('width', timeWidth);
    correctDensityUnderlayerMerge.select('.background').transition().duration(transitionDuration).ease(cubicOut).attr('height', densityHeight).attr('width', timeWidth);
    errorDensityUnderlayerMerge.select('.background').transition().duration(transitionDuration).ease(cubicOut).attr('height', densityHeight).attr('width', timeWidth);

    // X Axes (Time)
    //  ENTER
    errorDensityUnderlayerEnter.append('g').classed('axis time', true);
    //  MERGE
    const timeScaleMerge = errorDensityUnderlayerMerge.select('.axis.time').attr('transform', `translate(0, ${densityHeight + 0.25 * this.rem})`);
    const timeScaleTransition = timeScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisBottom(timeScale)).attr('font-size', null).attr('font-family', null);
    timeScaleTransition.selectAll('line, path').attr('stroke', null);

    // X Axes Titles
    //  ENTER
    const timeTitleEnter = errorDensityUnderlayerEnter.append('text').classed('title time', true).attr('text-anchor', 'middle');
    timeTitleEnter.append('tspan').classed('name', true).text('Time (ms)');
    //  MERGE
    errorDensityUnderlayerMerge.select('.title.time').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${timeWidth / 2}, ${densityHeight + 2.5 * this.rem})`);

    // Y Axes (Evidence, Density, Accuracy)
    //  ENTER
    evidenceUnderlayerEnter.append('g').classed('axis evidence', true);
    correctDensityUnderlayerEnter.append('g').classed('axis density correct', true);
    errorDensityUnderlayerEnter.append('g').classed('axis density error', true);
    accuracyUnderlayerEnter.append('g').classed('axis accuracy', true);
    // MERGE
    const evidenceScaleMerge = evidenceUnderlayerMerge.select('.axis.evidence').attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const correctDensityScaleMerge = correctDensityUnderlayerMerge.select('.axis.density.correct').attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const errorDensityScaleMerge = errorDensityUnderlayerMerge.select('.axis.density.error').attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const accuracyScaleMerge = accuracyUnderlayerMerge.select('.axis.accuracy').attr('transform', `translate(${accuracyWidth + 0.25 * this.rem}, 0)`);
    const evidenceScaleTransition = evidenceScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisLeft(evidenceScale)).attr('font-size', null).attr('font-family', null);
    const correctDensityScaleTransition = correctDensityScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisLeft(correctDensityScale).ticks(2)).attr('font-size', null).attr('font-family', null);
    const errorDensityScaleTransition = errorDensityScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisLeft(errorDensityScale).ticks(2)).attr('font-size', null).attr('font-family', null);
    const accuracyScaleTransition = accuracyScaleMerge.transition().duration(transitionDuration).ease(cubicOut).call(axisRight(accuracyScale)).attr('font-size', null).attr('font-family', null);
    evidenceScaleTransition.selectAll('line, path').attr('stroke', null);
    correctDensityScaleTransition.selectAll('line, path').attr('stroke', null);
    errorDensityScaleTransition.selectAll('line, path').attr('stroke', null);
    accuracyScaleTransition.selectAll('line, path').attr('stroke', null);

    // Y Axes Titles (Evidence & Density)
    //  ENTER
    const evidenceTitleEnter = evidenceUnderlayerEnter.append('text').classed('title evidence', true).attr('text-anchor', 'middle');
    const correctDensityTitleEnter = correctDensityUnderlayerEnter.append('text').classed('title density correct', true).attr('text-anchor', 'middle');
    const errorDensityTitleEnter = errorDensityUnderlayerEnter.append('text').classed('title density error', true).attr('text-anchor', 'middle');
    const accuracyTitleEnter = accuracyUnderlayerEnter.append('text').classed('title accuracy', true).attr('text-anchor', 'middle');
    evidenceTitleEnter.append('tspan').classed('name', true).text('Evidence');
    correctDensityTitleEnter.append('tspan').classed('name', true).text('Density');
    errorDensityTitleEnter.append('tspan').classed('name', true).text('Density');
    accuracyTitleEnter.append('tspan').classed('name', true).text('Accuracy');
    //  MERGE
    evidenceUnderlayerMerge.select('.title.evidence').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${-2.5 * this.rem}, ${evidenceHeight / 2})rotate(-90)`);
    correctDensityUnderlayerMerge.select('.title.density.correct').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${-2.5 * this.rem}, ${densityHeight / 2})rotate(-90)`);
    errorDensityUnderlayerMerge.select('.title.density.error').transition().duration(transitionDuration).ease(cubicOut).attr('transform', `translate(${-2.5 * this.rem}, ${densityHeight / 2})rotate(-90)`);
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
    pathMerge.select('.curve').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
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
    // DATA-JOIN
    const correctDistUpdate = correctDensityContentMerge.selectAll('.dist.correct').data([this.model.correctDist]);
    const errorDistUpdate = errorDensityContentMerge.selectAll('.dist.error').data([this.model.errorDist]);
    //  ENTER
    const correctDistEnter = correctDistUpdate.enter().append('g').classed('dist correct', true);
    const errorDistEnter = errorDistUpdate.enter().append('g').classed('dist error', true);
    correctDistEnter.append('path').classed('curve', true);
    errorDistEnter.append('path').classed('curve', true);
    //  MERGE
    correctDistEnter.merge(correctDistUpdate).select('.curve').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
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
        const path = this.alignCorrectDistribution(element.a, element.z, element.v, element.t0);
        return correctDensityLine(path);
      };
    });
    errorDistEnter.merge(errorDistUpdate).select('.curve').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
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
        const path = this.alignErrorDistribution(element.a, element.z, element.v, element.t0);
        return errorDensityLine(path);
      };
    });
    //  EXIT
    correctDistUpdate.exit().remove();
    errorDistUpdate.exit().remove();

    // RTs
    //  DATA-JOIN
    const correctRTUpdate = correctDensityContentMerge.selectAll('.rt.correct').data(this.data.trials.filter(trial => {
      return trial.outcome === 'correct' && trial.rt < this.scale.time.max;
    }));
    const errorRTUpdate = errorDensityContentMerge.selectAll('.rt.error').data(this.data.trials.filter(trial => {
      return trial.outcome === 'error' && trial.rt < this.scale.time.max;
    }));
    //  ENTER
    const correctRTEnter = correctRTUpdate.enter().append('g').classed('rt correct', true);
    const errorRTEnter = errorRTUpdate.enter().append('g').classed('rt error', true);
    correctRTEnter.append('line').classed('mark', true);
    errorRTEnter.append('line').classed('mark', true);
    //  MERGE
    correctRTEnter.merge(correctRTUpdate).filter(datum => {
      return !datum.animate;
    }).select('.mark').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut)
    // ## Tween based on params, across correct and error?
    .attr('x1', datum => {
      return timeScale(datum.rt);
    }).attr('x2', datum => {
      return timeScale(datum.rt);
    }).attr('y1', correctDensityScale(0) + 0.125 * this.rem).attr('y2', correctDensityScale(0) + 0.675 * this.rem);
    errorRTEnter.merge(errorRTUpdate).filter(datum => {
      return !datum.animate;
    }).select('.mark').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut)
    // ## Tween based on params, across correct and error?
    .attr('x1', datum => {
      return timeScale(datum.rt);
    }).attr('x2', datum => {
      return timeScale(datum.rt);
    }).attr('y1', errorDensityScale(0) - 0.125 * this.rem).attr('y2', errorDensityScale(0) - 0.675 * this.rem);
    //  EXIT
    correctRTUpdate.exit().remove();
    errorRTUpdate.exit().remove();

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
    const correctMeanUpdate = correctDensityOverlayerMerge.selectAll('.model.mean.correct').data(this.means ? [this.model.correctMeanRT] : []);
    const errorMeanUpdate = errorDensityOverlayerMerge.selectAll('.model.mean.error').data(this.means ? [this.model.errorMeanRT] : []);
    //  ENTER
    const correctMeanEnter = correctMeanUpdate.enter().append('g').classed('model mean correct', true);
    const errorMeanEnter = errorMeanUpdate.enter().append('g').classed('model mean error', true);
    correctMeanEnter.append('line').classed('indicator', true);
    errorMeanEnter.append('line').classed('indicator', true);
    //  MERGE
    const correctMeanMerge = correctMeanEnter.merge(correctMeanUpdate);
    correctMeanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum);
    }).attr('x2', datum => {
      return timeScale(datum);
    }).attr('y1', correctDensityScale(this.scale.density.min)).attr('y2', correctDensityScale(this.scale.density.max));
    const errorMeanMerge = errorMeanEnter.merge(errorMeanUpdate);
    errorMeanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum);
    }).attr('x2', datum => {
      return timeScale(datum);
    }).attr('y1', errorDensityScale(this.scale.density.min)).attr('y2', errorDensityScale(this.scale.density.max));
    //  EXIT
    correctMeanUpdate.exit().remove();
    errorMeanUpdate.exit().remove();

    // Data Means
    // DATA-JOIN
    const correctDataMeanUpdate = correctDensityOverlayerMerge.selectAll('.data.mean.correct').data(this.means && !Number.isNaN(this.data.correctMeanRT) ? [this.data.correctMeanRT] : []);
    const errorDataMeanUpdate = errorDensityOverlayerMerge.selectAll('.data.mean.error').data(this.means && !Number.isNaN(this.data.errorMeanRT) ? [this.data.errorMeanRT] : []);
    //  ENTER
    const correctDataMeanEnter = correctDataMeanUpdate.enter().append('g').classed('data mean correct', true);
    const errorDataMeanEnter = errorDataMeanUpdate.enter().append('g').classed('data mean error', true);
    correctDataMeanEnter.append('line').classed('indicator', true);
    errorDataMeanEnter.append('line').classed('indicator', true);
    //  MERGE
    const correctDataMeanMerge = correctDataMeanEnter.merge(correctDataMeanUpdate);
    correctDataMeanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum);
    }).attr('x2', datum => {
      return timeScale(datum);
    }).attr('y1', correctDensityScale(0) + 0.125 * this.rem).attr('y2', correctDensityScale(0) + 0.675 * this.rem);
    const errorDataMeanMerge = errorDataMeanEnter.merge(errorDataMeanUpdate);
    errorDataMeanMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum);
    }).attr('x2', datum => {
      return timeScale(datum);
    }).attr('y1', errorDensityScale(0) - 0.125 * this.rem).attr('y2', errorDensityScale(0) - 0.675 * this.rem);
    //  EXIT
    correctDataMeanUpdate.exit().remove();
    errorDataMeanUpdate.exit().remove();

    // Standard Deviations
    // DATA-JOIN
    const correctSDUpdate = correctDensityOverlayerMerge.selectAll('.model.sd.correct').data(this.sds ? [{
      mean: this.model.correctMeanRT,
      sd: this.model.correctSDRT
    }] : []);
    const errorSDUpdate = errorDensityOverlayerMerge.selectAll('.model.sd.error').data(this.sds ? [{
      mean: this.model.errorMeanRT,
      sd: this.model.errorSDRT
    }] : []);
    //  ENTER
    const correctSDEnter = correctSDUpdate.enter().append('g').classed('model sd correct', true);
    const errorSDEnter = errorSDUpdate.enter().append('g').classed('model sd error', true);
    correctSDEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#model-sd-cap)').attr('marker-end', 'url(#model-sd-cap)');
    errorSDEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#model-sd-cap)').attr('marker-end', 'url(#model-sd-cap)');
    //  MERGE
    const correctSDMerge = correctSDEnter.merge(correctSDUpdate);
    correctSDMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum.mean - datum.sd / 2);
    }).attr('x2', datum => {
      return timeScale(datum.mean + datum.sd / 2);
    }).attr('y1', correctDensityScale(5)).attr('y2', correctDensityScale(5));
    const errorSDMerge = errorSDEnter.merge(errorSDUpdate);
    errorSDMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum.mean - datum.sd / 2);
    }).attr('x2', datum => {
      return timeScale(datum.mean + datum.sd / 2);
    }).attr('y1', errorDensityScale(5)).attr('y2', errorDensityScale(5));
    //  EXIT
    correctSDUpdate.exit().remove();
    errorSDUpdate.exit().remove();

    // Data Standard Deviation
    // DATA-JOIN
    const correctDataSDUpdate = correctDensityOverlayerMerge.selectAll('.data.sd.correct').data(this.sds && !Number.isNaN(this.data.correctMeanRT) && !Number.isNaN(this.data.correctSDRT) ? [{
      mean: this.data.correctMeanRT,
      sd: this.data.correctSDRT
    }] : []);
    const errorDataSDUpdate = errorDensityOverlayerMerge.selectAll('.data.sd.error').data(this.sds && !Number.isNaN(this.data.erroMeanRT) && !Number.isNaN(this.data.errorSDRT) ? [{
      mean: this.data.errorMeanRT,
      sd: this.data.errorSDRT
    }] : []);
    //  ENTER
    const correctDataSDEnter = correctDataSDUpdate.enter().append('g').classed('data sd correct', true);
    const errorDataSDEnter = errorDataSDUpdate.enter().append('g').classed('data sd error', true);
    correctDataSDEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#data-sd-cap)').attr('marker-end', 'url(#data-sd-cap)');
    errorDataSDEnter.append('line').classed('indicator', true).attr('marker-start', 'url(#data-sd-cap)').attr('marker-end', 'url(#data-sd-cap)');
    //  MERGE
    const correctDataSDMerge = correctDataSDEnter.merge(correctDataSDUpdate);
    correctDataSDMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum.mean - datum.sd / 2);
    }).attr('x2', datum => {
      return timeScale(datum.mean + datum.sd / 2);
    }).attr('y1', correctDensityScale(0) + 0.375 * this.rem).attr('y2', correctDensityScale(0) + 0.375 * this.rem);
    const errorDataSDMerge = errorDataSDEnter.merge(errorDataSDUpdate);
    errorDataSDMerge.select('.indicator').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', datum => {
      return timeScale(datum.mean - datum.sd / 2);
    }).attr('x2', datum => {
      return timeScale(datum.mean + datum.sd / 2);
    }).attr('y1', errorDensityScale(0) - 0.375 * this.rem).attr('y2', errorDensityScale(0) - 0.375 * this.rem);
    //  EXIT
    correctDataSDUpdate.exit().remove();
    errorDataSDUpdate.exit().remove();
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
    return [super.styles, i$2`
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
  run( /* elapsed */
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
  DDMExample Base Class - Not intended for instantiation!
*/
class DDMExample extends AccumulableElement {
  static get styles() {
    return [super.styles, i$2`
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
      this.accumulableControl.addEventListener('accumulable-control-run', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }
    if (this.accumulableControl && this.accumulableControl.hasAttribute('pause')) {
      this.accumulableControl.addEventListener('accumulable-control-pause', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });
    }
    if (this.accumulableControl && this.accumulableControl.hasAttribute('reset')) {
      this.accumulableControl.addEventListener('accumulable-control-reset', ( /* event */
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
      this.rdkTask.addEventListener('rdk-trial-end', ( /* event */
      ) => {
        if (this.accumulableResponse) {
          this.accumulableResponse.stop();
        }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', ( /* event */
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
            meanRT: event.detail.meanRT,
            sdRT: event.detail.sdRT,
            accuracy: event.detail.correctCount / (event.detail.correctCount + event.detail.errorCount + event.detail.nrCount)
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
      this.accumulableControl.addEventListener('accumulable-control-resample', ( /* event */
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
    if (this.accumulableTable) {
      this.accumulableTable.correctCount = this.data.correctCount;
      this.accumulableTable.errorCount = this.data.errorCount;
      this.accumulableTable.nrCount = 0;
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
      if (this.accumulableControl.hasAttribute('run')) {
        this.accumulableControl.addEventListener('accumulable-control-run', ( /* event */
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
        this.accumulableControl.addEventListener('accumulable-control-pause', ( /* event */
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
        this.accumulableControl.addEventListener('accumulable-control-reset', ( /* event */
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
      this.rdkTask.addEventListener('rdk-trial-end', ( /* event */
      ) => {
        this.signal = undefined;
        if (this.accumulableResponse) {
          this.accumulableResponse.stop();
        }
      });
      this.rdkTask.addEventListener('rdk-block-end', ( /* event */
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
      this.rdkTask.color = this.color;
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
      this.accumulableTable.correctCount = this.data.correctCount;
      this.accumulableTable.errorCount = this.data.errorCount;
      this.accumulableTable.nrCount = 0;
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
//# sourceMappingURL=page.js.map
