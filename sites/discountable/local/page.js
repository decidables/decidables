var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$k =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || commonjsGlobal || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$f = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$e = fails$f;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});

var fails$d = fails$f;
var functionBindNative = !fails$d(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var call$9 = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
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
var call$8 = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$8, call$8);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$8.apply(fn, arguments);
  };
};

var uncurryThis$h = functionUncurryThis;
var toString$3 = uncurryThis$h({}.toString);
var stringSlice$1 = uncurryThis$h(''.slice);
var classofRaw$2 = function (it) {
  return stringSlice$1(toString$3(it), 8, -1);
};

var uncurryThis$g = functionUncurryThis;
var fails$c = fails$f;
var classof$7 = classofRaw$2;
var $Object$3 = Object;
var split = uncurryThis$g(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) === 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;
var $TypeError$d = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$d("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;
var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;
var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$h = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$g = isCallable$h;
var $documentAll = documentAll_1;
var documentAll = $documentAll.all;
var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var global$j = global$k;
var isCallable$f = isCallable$h;
var aFunction = function (argument) {
  return isCallable$f(argument) ? argument : undefined;
};
var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$j[namespace]) : global$j[namespace] && global$j[namespace][method];
};

var uncurryThis$f = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$i = global$k;
var userAgent$1 = engineUserAgent;
var process$1 = global$i.process;
var Deno$1 = global$i.Deno;
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
var fails$b = fails$f;
var global$h = global$k;
var $String$5 = global$h.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$b(function () {
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

var getBuiltIn$4 = getBuiltIn$5;
var isCallable$e = isCallable$h;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$2 = Object;
var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$e($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
};

var $String$4 = String;
var tryToString$4 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$d = isCallable$h;
var tryToString$3 = tryToString$4;
var $TypeError$c = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$4 = function (argument) {
  if (isCallable$d(argument)) return argument;
  throw $TypeError$c(tryToString$3(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$3(func);
};

var call$7 = functionCall;
var isCallable$c = isCallable$h;
var isObject$7 = isObject$8;
var $TypeError$b = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$7(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
  throw $TypeError$b("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$g = global$k;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;
var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$3(global$g, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$g[key] = value;
  }
  return value;
};

var global$f = global$k;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = '__core-js_shared__';
var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.2',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var sharedExports = shared$3.exports;

var requireObjectCoercible = requireObjectCoercible$2;
var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$1(requireObjectCoercible(argument));
};

var uncurryThis$e = functionUncurryThis;
var toObject$2 = toObject$3;
var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$d = functionUncurryThis;
var id$1 = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$d(1.0.toString);
var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id$1 + postfix, 36);
};

var global$e = global$k;
var shared$2 = sharedExports;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$e.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;
var wellKnownSymbol$5 = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

var call$6 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$3 = isSymbol$4;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$4 = wellKnownSymbol$5;
var $TypeError$a = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$3(result)) return result;
    throw $TypeError$a("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};

var global$d = global$k;
var isObject$5 = isObject$8;
var document$1 = global$d.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);
var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$9 = descriptors;
var fails$a = fails$f;
var createElement$1 = documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$9 && !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});

var DESCRIPTORS$8 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {/* empty */}
  if (hasOwn$9(O, P)) return createPropertyDescriptor$4(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$7 = descriptors;
var fails$9 = fails$f;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$4 = isObject$8;
var $String$3 = String;
var $TypeError$9 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$8 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw $TypeError$9($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$3;
var $TypeError$8 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
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
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$8('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var createNonEnumerableProperty$3 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$4 = descriptors;
var hasOwn$8 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$c = functionUncurryThis;
var isCallable$b = isCallable$h;
var store$1 = sharedStore;
var functionToString = uncurryThis$c(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$b(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store$1.inspectSource;

var global$c = global$k;
var isCallable$a = isCallable$h;
var WeakMap$2 = global$c.WeakMap;
var weakMapBasicDetection = isCallable$a(WeakMap$2) && /native code/.test(String(WeakMap$2));

var shared$1 = sharedExports;
var uid$1 = uid$3;
var keys = shared$1('keys');
var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$b = global$k;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$7 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$b.TypeError;
var WeakMap$1 = global$b.WeakMap;
var set$3, get$2, has;
var enforce = function (it) {
  return has(it) ? get$2(it) : set$3(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get$2(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
  set$3 = function (it, metadata) {
    if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set$3 = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}
var internalState = {
  set: set$3,
  get: get$2,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$b = functionUncurryThis;
var fails$8 = fails$f;
var isCallable$9 = isCallable$h;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$3 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule = internalState;
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;
var stringSlice = uncurryThis$b(''.slice);
var replace$1 = uncurryThis$b(''.replace);
var join = uncurryThis$b([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$8(function () {
  return defineProperty$2(function () {/* empty */}, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS$3) defineProperty$2(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', {
      value: options.arity
    });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$3) defineProperty$2(value, 'prototype', {
        writable: false
      });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {/* empty */}
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  }
  return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$9(this) && getInternalState(this).source || inspectSource$1(this);
}, 'toString');
var makeBuiltInExports = makeBuiltIn$3.exports;

var isCallable$8 = isCallable$h;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$8(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {/* empty */}
    if (simple) O[key] = value;else definePropertyModule$2.f(O, key, {
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
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max$1 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex(fromIndex, length);
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

var uncurryThis$a = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push$1 = uncurryThis$a([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$1, key) && hasOwn$5(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$5;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;
var concat = uncurryThis$9([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$7 = fails$f;
var isCallable$7 = isCallable$h;
var replacement = /#|\.prototype\./;
var isForced$1 = function (feature, detection) {
  var value = data[normalize$1(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$7(detection) ? fails$7(detection) : !!detection;
};
var normalize$1 = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$a = global$k;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var defineBuiltIn = defineBuiltIn$1;
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
    target = global$a;
  } else if (STATIC) {
    target = global$a[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$a[TARGET] || {}).prototype;
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
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var classof$6 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$6(argument) === 'Array';
};

var DESCRIPTORS$2 = descriptors;
var isArray = isArray$1;
var $TypeError$7 = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$2 && !function () {
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
    throw $TypeError$7('Cannot set read only .length');
  }
  return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError$6 = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$2 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$6('Maximum allowed index exceeded');
  return it;
};

var $$6 = _export;
var toObject$1 = toObject$3;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
var fails$6 = fails$f;
var INCORRECT_TO_LENGTH = fails$6(function () {
  return [].push.call({
    length: 0x100000000
  }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
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
$$6({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED$2
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$1(this);
    var len = lengthOfArrayLike$3(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$1(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$1(O, len);
    return len;
  }
});

var tryToString$2 = tryToString$4;
var $TypeError$5 = TypeError;
var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError$5('Cannot delete property ' + tryToString$2(P) + ' of ' + tryToString$2(O));
};

var $$5 = _export;
var toObject = toObject$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var setArrayLength = arraySetLength;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;

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
$$5({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED$1
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike$2(O);
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

var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;
var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    getter: true
  });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    setter: true
  });
  return defineProperty$1.f(target, name, descriptor);
};

var anObject$5 = anObject$8;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject$5(this);
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

var global$9 = global$k;
var DESCRIPTORS$1 = descriptors;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var regExpFlags$1 = regexpFlags;
var fails$5 = fails$f;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = global$9.RegExp;
var RegExpPrototype$1 = RegExp$1.prototype;
var FORCED = DESCRIPTORS$1 && fails$5(function () {
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
if (FORCED) defineBuiltInAccessor(RegExpPrototype$1, 'flags', {
  configurable: true,
  get: regExpFlags$1
});

var isPrototypeOf$2 = objectIsPrototypeOf;
var $TypeError$4 = TypeError;
var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$4('Incorrect invocation');
};

var uncurryThis$8 = functionUncurryThis;
var aCallable$2 = aCallable$4;
var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$8(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

var isCallable$6 = isCallable$h;
var $String$1 = String;
var $TypeError$3 = TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$6(argument)) return argument;
  throw $TypeError$3("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$4 = anObject$8;
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
    anObject$4(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var isCallable$5 = isCallable$h;
var isObject$2 = isObject$8;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
  // it can work only with native `setPrototypeOf`
  setPrototypeOf &&
  // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  isCallable$5(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var wellKnownSymbol$3 = wellKnownSymbol$5;
var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$4 = isCallable$h;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$5;
var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () {
  return arguments;
}()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw$1(O)
  // ES3 arguments fallback
  : (result = classofRaw$1(O)) === 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
};

var classof$4 = classof$5;
var $String = String;
var toString$1 = function (argument) {
  if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var toString = toString$1;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
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

var uncurryThis$7 = functionUncurryThis;
var $Error = Error;
var replace = uncurryThis$7(''.replace);
var TEST = function (arg) {
  return String($Error(arg).stack);
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

var $$4 = _export;
var global$8 = global$k;
var getBuiltIn$2 = getBuiltIn$5;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var defineProperty = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var anInstance = anInstance$1;
var inheritIfRequired = inheritIfRequired$1;
var normalizeStringArgument = normalizeStringArgument$1;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = errorStackClear;
var DESCRIPTORS = descriptors;
var DOM_EXCEPTION = 'DOMException';
var Error$2 = getBuiltIn$2('Error');
var NativeDOMException = getBuiltIn$2(DOM_EXCEPTION);
var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error$2(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor$2(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};
var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = ('stack' in Error$2(DOM_EXCEPTION));
var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global$8, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$$4({
  global: true,
  constructor: true,
  forced: FORCED_CONSTRUCTOR
}, {
  // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn$2(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$2(1, PolyfilledDOMException));
  }
  for (var key in DOMExceptionConstants) if (hasOwn$3(DOMExceptionConstants, key)) {
    var constant$5 = DOMExceptionConstants[key];
    var constantName = constant$5.s;
    if (!hasOwn$3(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor$2(6, constant$5.c));
    }
  }
}

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$4 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$4.bind(apply$2) : function () {
  return call$4.apply(apply$2, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$6 = functionUncurryThis;
var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$6(fn);
};

var uncurryThis$5 = functionUncurryThisClause;
var aCallable$1 = aCallable$4;
var NATIVE_BIND = functionBindNative;
var bind$2 = uncurryThis$5(uncurryThis$5.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var getBuiltIn$1 = getBuiltIn$5;
var html$1 = getBuiltIn$1('document', 'documentElement');

var uncurryThis$4 = functionUncurryThis;
var arraySlice$2 = uncurryThis$4([].slice);

var $TypeError$2 = TypeError;
var validateArgumentsLength$3 = function (passed, required) {
  if (passed < required) throw $TypeError$2('Not enough arguments');
  return passed;
};

var userAgent = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

var global$7 = global$k;
var classof$3 = classofRaw$2;
var engineIsNode = classof$3(global$7.process) === 'process';

var global$6 = global$k;
var apply$1 = functionApply;
var bind$1 = functionBindContext;
var isCallable$3 = isCallable$h;
var hasOwn$2 = hasOwnProperty_1;
var fails$4 = fails$f;
var html = html$1;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement;
var validateArgumentsLength$2 = validateArgumentsLength$3;
var IS_IOS = engineIsIos;
var IS_NODE$2 = engineIsNode;
var set$2 = global$6.setImmediate;
var clear = global$6.clearImmediate;
var process = global$6.process;
var Dispatch$1 = global$6.Dispatch;
var Function$2 = global$6.Function;
var MessageChannel = global$6.MessageChannel;
var String$1 = global$6.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails$4(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$6.location;
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
  global$6.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$2 || !clear) {
  set$2 = function setImmediate(handler) {
    validateArgumentsLength$2(arguments.length, 1);
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
  if (IS_NODE$2) {
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
    defer = bind$1(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$6.addEventListener && isCallable$3(global$6.postMessage) && !global$6.importScripts && $location && $location.protocol !== 'file:' && !fails$4(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$6.addEventListener('message', eventListener, false);
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

var $$3 = _export;
var global$5 = global$k;
var clearImmediate = task.clear;

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$$3({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$5.clearImmediate !== clearImmediate
}, {
  clearImmediate: clearImmediate
});

/* global Bun -- Deno case */
var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

var global$4 = global$k;
var apply = functionApply;
var isCallable$2 = isCallable$h;
var ENGINE_IS_BUN = engineIsBun;
var USER_AGENT = engineUserAgent;
var arraySlice = arraySlice$2;
var validateArgumentsLength$1 = validateArgumentsLength$3;
var Function$1 = global$4.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
  var version = global$4.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
var schedulersFix$1 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$1(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$2(handler) ? handler : Function$1(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$2 = _export;
var global$3 = global$k;
var setTask = task.set;
var schedulersFix = schedulersFix$1;

// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global$3.setImmediate ? schedulersFix(setTask, false) : setTask;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$$2({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$3.setImmediate !== setImmediate
}, {
  setImmediate: setImmediate
});

var uncurryThis$3 = functionUncurryThis;
var fails$3 = fails$f;
var isCallable$1 = isCallable$h;
var classof$2 = classof$5;
var getBuiltIn = getBuiltIn$5;
var inspectSource = inspectSource$2;
var noop$3 = function () {/* empty */};
var empty$2 = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$3(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$3);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;
  try {
    construct(noop$3, empty$2, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;
  switch (classof$2(argument)) {
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
var isConstructor$1 = !construct || fails$3(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var iterators = {};

var wellKnownSymbol$1 = wellKnownSymbol$5;
var Iterators$1 = iterators;
var ITERATOR$1 = wellKnownSymbol$1('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$1] === it);
};

var classof$1 = classof$5;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol = wellKnownSymbol$5;
var ITERATOR = wellKnownSymbol('iterator');
var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR) || getMethod$1(it, '@@iterator') || Iterators[classof$1(it)];
};

var call$3 = functionCall;
var aCallable = aCallable$4;
var anObject$3 = anObject$8;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$1 = TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$3(call$3(iteratorMethod, argument));
  throw $TypeError$1(tryToString$1(argument) + ' is not iterable');
};

var call$2 = functionCall;
var anObject$2 = anObject$8;
var getMethod = getMethod$3;
var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$2(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$2(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$2(innerResult);
  return value;
};

var bind = functionBindContext;
var call$1 = functionCall;
var anObject$1 = anObject$8;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var $TypeError = TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$1 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$1(value);
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
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$1(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  }
  return new Result(false);
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;
var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
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

var uncurryThis$2 = functionUncurryThis;

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis$2(MapPrototype.set),
  get: uncurryThis$2(MapPrototype.get),
  has: uncurryThis$2(MapPrototype.has),
  remove: uncurryThis$2(MapPrototype['delete']),
  proto: MapPrototype
};

var uncurryThis$1 = functionUncurryThis;

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;
var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis$1(SetPrototype.add),
  has: uncurryThis$1(SetPrototype.has),
  remove: uncurryThis$1(SetPrototype['delete']),
  proto: SetPrototype
};

var fails$2 = fails$f;
var createPropertyDescriptor = createPropertyDescriptor$5;
var errorStackInstallable = !fails$2(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == 'object' && typeof document == 'object';

var global$2 = global$k;
var fails$1 = fails$f;
var V8 = engineV8Version;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var IS_NODE = engineIsNode;
var structuredClone = global$2.structuredClone;
var structuredCloneProperTransfer = !!structuredClone && !fails$1(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (IS_DENO && V8 > 92 || IS_NODE && V8 > 94 || IS_BROWSER && V8 > 97) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, {
    transfer: [buffer]
  });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});

var $$1 = _export;
var global$1 = global$k;
var getBuiltin = getBuiltIn$5;
var uncurryThis = functionUncurryThis;
var fails = fails$f;
var uid = uid$3;
var isCallable = isCallable$h;
var isConstructor = isConstructor$1;
var isNullOrUndefined = isNullOrUndefined$4;
var isObject$1 = isObject$8;
var isSymbol$1 = isSymbol$4;
var iterate = iterate$1;
var anObject = anObject$8;
var classof = classof$5;
var hasOwn = hasOwnProperty_1;
var createProperty = createProperty$1;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var lengthOfArrayLike = lengthOfArrayLike$5;
var validateArgumentsLength = validateArgumentsLength$3;
var getRegExpFlags = regexpGetFlags;
var MapHelpers = mapHelpers;
var SetHelpers = setHelpers;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var PROPER_TRANSFER = structuredCloneProperTransfer;
var Object$1 = global$1.Object;
var Array$1 = global$1.Array;
var Date$1 = global$1.Date;
var Error$1 = global$1.Error;
var EvalError = global$1.EvalError;
var RangeError$1 = global$1.RangeError;
var ReferenceError = global$1.ReferenceError;
var SyntaxError = global$1.SyntaxError;
var TypeError$1 = global$1.TypeError;
var URIError = global$1.URIError;
var PerformanceMark = global$1.PerformanceMark;
var WebAssembly = global$1.WebAssembly;
var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
var DOMException = getBuiltin('DOMException');
var Map$1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set$1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var objectKeys = getBuiltin('Object', 'keys');
var push = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1.0.valueOf);
var thisStringValue = uncurryThis(''.valueOf);
var thisTimeValue = uncurryThis(Date$1.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';
var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var set1 = new global$1.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 === set1 || !set2.has(7) || typeof number != 'object' || +number !== 7;
  }) && structuredCloneImplementation;
};
var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
  return !fails(function () {
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
  return !fails(function () {
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
    if (!DataView && typeof value.slice != 'function') throwUnpolyfillable('ArrayBuffer');
    // detached buffers throws in `DataView` and `.slice`
    try {
      if (typeof value.slice == 'function' && !value.resizable) {
        clone = value.slice(0);
      } else {
        length = value.byteLength;
        options = 'maxByteLength' in value ? {
          maxByteLength: value.maxByteLength
        } : undefined;
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
  if (!isObject$1(C)) throwUnpolyfillable(type);
  return new C(cloneBuffer(value.buffer, map), offset, length);
};
var Placeholder = function (object, type, metadata) {
  this.object = object;
  this.type = type;
  this.metadata = metadata;
};
var structuredCloneInternal = function (value, map, transferredBuffers) {
  if (isSymbol$1(value)) throwUncloneable('Symbol');
  if (!isObject$1(value)) return value;
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
          cloned = getBuiltin('AggregateError')([]);
          break;
        case 'EvalError':
          cloned = EvalError();
          break;
        case 'RangeError':
          cloned = RangeError$1();
          break;
        case 'ReferenceError':
          cloned = ReferenceError();
          break;
        case 'SyntaxError':
          cloned = SyntaxError();
          break;
        case 'TypeError':
          cloned = TypeError$1();
          break;
        case 'URIError':
          cloned = URIError();
          break;
        case 'CompileError':
          cloned = CompileError();
          break;
        case 'LinkError':
          cloned = LinkError();
          break;
        case 'RuntimeError':
          cloned = RuntimeError();
          break;
        default:
          cloned = Error$1();
      }
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      break;
    case 'ArrayBuffer':
    case 'SharedArrayBuffer':
      cloned = transferredBuffers ? new Placeholder(value, type) : cloneBuffer(value, map, type);
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
      cloned = transferredBuffers ? new Placeholder(value, type, {
        offset: value.byteOffset,
        length: length
      }) : cloneView(value, type, value.byteOffset, length, map);
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(structuredCloneInternal(value.p1, map, transferredBuffers), structuredCloneInternal(value.p2, map, transferredBuffers), structuredCloneInternal(value.p3, map, transferredBuffers), structuredCloneInternal(value.p4, map, transferredBuffers));
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
          dataTransfer.items.add(structuredCloneInternal(value[i], map, transferredBuffers));
        }
        cloned = dataTransfer.files;
      } else cloned = tryNativeRestrictedStructuredClone(value, type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(structuredCloneInternal(value.data, map, transferredBuffers), value.width, value.height, {
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
        createProperty(cloned, key, structuredCloneInternal(value[key], map, transferredBuffers));
      }
      break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map, transferredBuffers), structuredCloneInternal(v, map, transferredBuffers));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map, transferredBuffers));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map, transferredBuffers));
      if (hasOwn(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map, transferredBuffers));
      }
      if (name === 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map, transferredBuffers);
      }
    // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map, transferredBuffers));
      }
  }
  return cloned;
};
var replacePlaceholders = function (value, map) {
  if (!isObject$1(value)) return value;
  if (mapHas(map, value)) return mapGet(map, value);
  var type, object, metadata, i, length, keys, key, replacement;
  if (value instanceof Placeholder) {
    type = value.type;
    object = value.object;
    switch (type) {
      case 'ArrayBuffer':
      case 'SharedArrayBuffer':
        replacement = cloneBuffer(object, map, type);
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
        metadata = value.metadata;
        replacement = cloneView(object, type, metadata.offset, metadata.length, map);
    }
  } else switch (classof(value)) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        value[key] = replacePlaceholders(value[key], map);
      }
      break;
    case 'Map':
      replacement = new Map$1();
      value.forEach(function (v, k) {
        mapSet(replacement, replacePlaceholders(k, map), replacePlaceholders(v, map));
      });
      break;
    case 'Set':
      replacement = new Set$1();
      value.forEach(function (v) {
        setAdd(replacement, replacePlaceholders(v, map));
      });
      break;
    case 'Error':
      value.message = replacePlaceholders(value.message, map);
      if (hasOwn(value, 'cause')) {
        value.cause = replacePlaceholders(value.cause, map);
      }
      if (value.name === 'AggregateError') {
        value.errors = replacePlaceholders(value.errors, map);
      }
    // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        value.stack = replacePlaceholders(value.stack, map);
      }
  }
  mapSet(map, value, replacement || value);
  return replacement || value;
};
var tryToTransfer = function (rawTransfer, map) {
  if (!isObject$1(rawTransfer)) throw TypeError$1('Transfer option cannot be converted to a sequence');
  var transfer = [];
  iterate(rawTransfer, function (value) {
    push(transfer, anObject(value));
  });
  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var buffers = [];
  var value, type, C, transferred, canvas, context;
  while (i < length) {
    value = transfer[i++];
    type = classof(value);
    if (type === 'ArrayBuffer') {
      push(buffers, value);
      continue;
    }
    if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    if (PROPER_TRANSFER) {
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
var tryToTransferBuffers = function (transfer, map) {
  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var value, transferred;
  while (i < length) {
    value = transfer[i++];
    if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    if (PROPER_TRANSFER) {
      transferred = nativeStructuredClone(value, {
        transfer: [value]
      });
    } else {
      if (!isCallable(value.transfer)) throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
      transferred = value.transfer();
    }
    mapSet(map, value, transferred);
  }
};

// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$$1({
  global: true,
  enumerable: true,
  sham: !PROPER_TRANSFER,
  forced: FORCED_REPLACEMENT
}, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var transferredBuffers = false;
    var map, buffers;
    if (transfer !== undefined) {
      map = new Map$1();
      buffers = tryToTransfer(transfer, map);
      transferredBuffers = !!lengthOfArrayLike(buffers);
    }
    var clone = structuredCloneInternal(value, map, transferredBuffers);

    // since of an issue with cloning views of transferred buffers, we a forced to transfer / clone them in 2 steps
    // https://github.com/zloirock/core-js/issues/1265
    if (transferredBuffers) {
      map = new Map$1();
      tryToTransferBuffers(transfer, map);
      clone = replacePlaceholders(clone, map);
    }
    return clone;
  }
});

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

const VERSION = '5.3.2';

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
    selector = hrefAttribute && hrefAttribute !== '#' ? parseSelector(hrefAttribute.trim()) : null;
  }
  return selector;
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
const t$2 = window,
  e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$5 = Symbol(),
  n$5 = new WeakMap();
let o$4 = class o {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== s$5) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e$4 && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = n$5.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && n$5.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = t => new o$4("string" == typeof t ? t : t + "", void 0, s$5),
  i$3 = (t, ...e) => {
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[n + 1], t[0]);
    return new o$4(n, t, s$5);
  },
  S$1 = (s, n) => {
    e$4 ? s.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(e => {
      const n = document.createElement("style"),
        o = t$2.litNonce;
      void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
  },
  c$5 = e$4 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r$4(e);
  })(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$4;
const e$3 = window,
  r$3 = e$3.trustedTypes,
  h$3 = r$3 ? r$3.emptyScript : "",
  o$3 = e$3.reactiveElementPolyfillSupport,
  n$4 = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? h$3 : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let s = t;
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
  a$3 = (t, i) => i !== t && (i == i || t == t),
  l$4 = {
    attribute: !0,
    type: String,
    converter: n$4,
    reflect: !1,
    hasChanged: a$3
  },
  d$1 = "finalized";
let u$1 = class u extends HTMLElement {
  constructor() {
    super(), this._$Ei = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(t) {
    var i;
    this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Ep(s, i);
      void 0 !== e && (this._$Ev.set(e, s), t.push(e));
    }), t;
  }
  static createProperty(t, i = l$4) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
        e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const r = this[t];
        this[i] = e, this.requestUpdate(t, r, s);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l$4;
  }
  static finalize() {
    if (this.hasOwnProperty(d$1)) return !1;
    this[d$1] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
        i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(i) {
    const s = [];
    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());
      for (const i of e) s.unshift(c$5(i));
    } else void 0 !== i && s.push(c$5(i));
    return s;
  }
  static _$Ep(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  _$Eu() {
    var t;
    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i, s = l$4) {
    var e;
    const r = this.constructor._$Ep(t, s);
    if (void 0 !== r && !0 === s.reflect) {
      const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n$4).toAttribute(i, s.type);
      this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
    }
  }
  _$AK(t, i) {
    var s;
    const e = this.constructor,
      r = e._$Ev.get(t);
    if (void 0 !== r && this._$El !== r) {
      const t = e.getPropertyOptions(r),
        h = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n$4;
      this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
    }
  }
  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a$3)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
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
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i) => this[i] = t), this._$Ei = void 0);
    let i = !1;
    const s = this._$AL;
    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$Ek();
    } catch (t) {
      throw i = !1, this._$Ek(), t;
    }
    i && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
};
u$1[d$1] = !0, u$1.elementProperties = new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = {
  mode: "open"
}, null == o$3 || o$3({
  ReactiveElement: u$1
}), (null !== (s$4 = e$3.reactiveElementVersions) && void 0 !== s$4 ? s$4 : e$3.reactiveElementVersions = []).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$2 = window,
  s$3 = i$2.trustedTypes,
  e$2 = s$3 ? s$3.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  o$2 = "$lit$",
  n$3 = `lit$${(Math.random() + "").slice(9)}$`,
  l$3 = "?" + n$3,
  h$2 = `<${l$3}>`,
  r$2 = document,
  u = () => r$2.createComment(""),
  d = t => null === t || "object" != typeof t && "function" != typeof t,
  c$4 = Array.isArray,
  v = t => c$4(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
  a$2 = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p$1 = RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  g$1 = /'/g,
  $ = /"/g,
  y$1 = /^(?:script|style|textarea|title)$/i,
  w$1 = t => (i, ...s) => ({
    _$litType$: t,
    strings: i,
    values: s
  }),
  x$2 = w$1(1),
  b$1 = w$1(2),
  T = Symbol.for("lit-noChange"),
  A$2 = Symbol.for("lit-nothing"),
  E$1 = new WeakMap(),
  C$1 = r$2.createTreeWalker(r$2, 129, null, !1);
function P(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$2 ? e$2.createHTML(i) : i;
}
const V = (t, i) => {
  const s = t.length - 1,
    e = [];
  let l,
    r = 2 === i ? "<svg>" : "",
    u = f;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let d,
      c,
      v = -1,
      a = 0;
    for (; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);) a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y$1.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p$1) : void 0 !== c[3] && (u = p$1) : u === p$1 ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p$1 : '"' === c[3] ? $ : g$1) : u === $ || u === g$1 ? u = p$1 : u === _ || u === m ? u = f : (u = p$1, l = void 0);
    const w = u === p$1 && t[i + 1].startsWith("/>") ? " " : "";
    r += u === f ? s + h$2 : v >= 0 ? (e.push(d), s.slice(0, v) + o$2 + s.slice(v) + n$3 + w) : s + n$3 + (-2 === v ? (e.push(void 0), i) : w);
  }
  return [P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), e];
};
let N$1 = class N {
  constructor({
    strings: t,
    _$litType$: i
  }, e) {
    let h;
    this.parts = [];
    let r = 0,
      d = 0;
    const c = t.length - 1,
      v = this.parts,
      [a, f] = V(t, i);
    if (this.el = N.createElement(a, e), C$1.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (h = C$1.nextNode()) && v.length < c;) {
      if (1 === h.nodeType) {
        if (h.hasAttributes()) {
          const t = [];
          for (const i of h.getAttributeNames()) if (i.endsWith(o$2) || i.startsWith(n$3)) {
            const s = f[d++];
            if (t.push(i), void 0 !== s) {
              const t = h.getAttribute(s.toLowerCase() + o$2).split(n$3),
                i = /([.?@])?(.*)/.exec(s);
              v.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k$1
              });
            } else v.push({
              type: 6,
              index: r
            });
          }
          for (const i of t) h.removeAttribute(i);
        }
        if (y$1.test(h.tagName)) {
          const t = h.textContent.split(n$3),
            i = t.length - 1;
          if (i > 0) {
            h.textContent = s$3 ? s$3.emptyScript : "";
            for (let s = 0; s < i; s++) h.append(t[s], u()), C$1.nextNode(), v.push({
              type: 2,
              index: ++r
            });
            h.append(t[i], u());
          }
        }
      } else if (8 === h.nodeType) if (h.data === l$3) v.push({
        type: 2,
        index: r
      });else {
        let t = -1;
        for (; -1 !== (t = h.data.indexOf(n$3, t + 1));) v.push({
          type: 7,
          index: r
        }), t += n$3.length - 1;
      }
      r++;
    }
  }
  static createElement(t, i) {
    const s = r$2.createElement("template");
    return s.innerHTML = t, s;
  }
};
function S(t, i, s = t, e) {
  var o, n, l, h;
  if (i === T) return i;
  let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S(t, r._$AS(t, i.values), r, e)), i;
}
let M$1 = class M {
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
    var i;
    const {
        el: {
          content: s
        },
        parts: e
      } = this._$AD,
      o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r$2).importNode(s, !0);
    C$1.currentNode = o;
    let n = C$1.nextNode(),
      l = 0,
      h = 0,
      u = e[0];
    for (; void 0 !== u;) {
      if (l === u.index) {
        let i;
        2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
      }
      l !== (null == u ? void 0 : u.index) && (n = C$1.nextNode(), l++);
    }
    return C$1.currentNode = r$2, o;
  }
  v(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
};
class R {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = A$2, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }
  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = S(this, t, i), d(t) ? t === A$2 || null == t || "" === t ? (this._$AH !== A$2 && this._$AR(), this._$AH = A$2) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== A$2 && d(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r$2.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var i;
    const {
        values: s,
        _$litType$: e
      } = t,
      o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N$1.createElement(P(e.h, e.h[0]), this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);else {
      const t = new M$1(o, this),
        i = t.u(this.options);
      t.v(s), this.$(i), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = E$1.get(t.strings);
    return void 0 === i && E$1.set(t.strings, i = new N$1(t)), i;
  }
  T(t) {
    c$4(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const o of t) e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var i;
    void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
let k$1 = class k {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = A$2, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A$2;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o) t = S(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
      const e = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++) h = S(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A$2 ? t = A$2 : t !== A$2 && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.j(t);
  }
  j(t) {
    t === A$2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }
};
class H extends k$1 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A$2 ? void 0 : t;
  }
}
const I = s$3 ? s$3.emptyScript : "";
class L extends k$1 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== A$2 ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
}
class z extends k$1 {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A$2) === T) return;
    const e = this._$AH,
      o = t === A$2 && e !== A$2 || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
      n = t !== A$2 && (e === A$2 || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S(this, t);
  }
}
const B$1 = i$2.litHtmlPolyfillSupport;
null == B$1 || B$1(N$1, R), (null !== (t$1 = i$2.litHtmlVersions) && void 0 !== t$1 ? t$1 : i$2.litHtmlVersions = []).push("2.8.0");
const D$1 = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;
  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
  }
  return l._$AI(t), l;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$2, o$1;
let s$2 = class s extends u$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D$1(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return T;
  }
};
s$2.finalized = !0, s$2._$litElement$ = !0, null === (l$2 = globalThis.litElementHydrateSupport) || void 0 === l$2 || l$2.call(globalThis, {
  LitElement: s$2
});
const n$2 = globalThis.litElementPolyfillSupport;
null == n$2 || n$2({
  LitElement: s$2
});
(null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.3.3");

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
var bisect = bisectRight;

function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
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
  var sum = 0,
    index = 0;
  return Float64Array.from(values, valueof === undefined ? v => sum += +v || 0 : v => sum += +valueof(v, index++, values) || 0);
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
  if (delay == null) return t.restart(callback, delay, time), t;
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
    delta = 6 * radians$1,
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
var pathArea = areaStream;

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
var boundsStream$1 = boundsStream;

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
var pathCentroid = centroidStream;

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
var pathMeasure = lengthStream;

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
    geoStream(object, projectionStream(pathArea));
    return pathArea.result();
  };
  path.measure = function (object) {
    geoStream(object, projectionStream(pathMeasure));
    return pathMeasure.result();
  };
  path.bounds = function (object) {
    geoStream(object, projectionStream(boundsStream$1));
    return boundsStream$1.result();
  };
  path.centroid = function (object) {
    geoStream(object, projectionStream(pathCentroid));
    return pathCentroid.result();
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
  geoStream(object, projection.stream(boundsStream$1));
  fitBounds(boundsStream$1.result());
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
    var i = bisect(domain, x, 1, j) - 1;
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
    return x == null || isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
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
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
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
    return i$3`
      :host {
        ---shadow-0: var(--shadow-0, ${r$4(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${r$4(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${r$4(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${r$4(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${r$4(this.greys.white)});
        ---color-border: var(--color-border, ${r$4(this.greys.light75)});
        ---color-text: var(--color-text, ${r$4(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${r$4(this.greys.white)});
        ---color-link: var(--color-link, ${r$4(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${r$4(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${r$4(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${r$4(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${r$4(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${r$4(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${r$4(this.greys.dark75)});

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
const l$1 = l => null != l ? l : A$2;

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
          ---shadow-2-rotate: var(--shadow-2-rotate, ${r$4(this.cssBoxShadow(2, true, false))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${r$4(this.cssBoxShadow(4, true, false))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${r$4(this.cssBoxShadow(8, true, false))});

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
        <input type="range" id="slider" min=${l$1(this.min)} max=${l$1(this.max)} step=${l$1(this.step)} .value=${this.value} @change=${this.changed.bind(this)} @input=${this.inputted.bind(this)}>
      </div>
      <decidables-spinner min=${l$1(this.min)} max=${l$1(this.max)} step=${l$1(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}></decidables-spinner>
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
    return x$2`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${l$1(this.min)} max=${l$1(this.max)} step=${l$1(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
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

        /* stylelint-disable-next-line selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,
        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {
          box-shadow: var(---shadow-8);
        }
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
      chosen: schemeSet1[8],
      better: '#4545d0',
      worse: '#f032e6',
      even: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
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
    return [super.styles, i$3`
        :host {
          ---color-a: var(--color-a, ${r$4(this.colors.a)});
          ---color-d: var(--color-d, ${r$4(this.colors.d)});
          ---color-k: var(--color-k, ${r$4(this.colors.k)});
          ---color-v: var(--color-v, ${r$4(this.colors.v)});
          ---color-chosen: var(--color-chosen, ${r$4(this.colors.chosen)});
          ---color-better: var(--color-better, ${r$4(this.colors.better)});
          ---color-worse: var(--color-worse, ${r$4(this.colors.worse)});
          ---color-even: var(--color-even, ${r$4(this.colors.even)});
          ---color-correct: var(--color-correct, ${r$4(this.colors.correct)});
          ---color-error: var(--color-error, ${r$4(this.colors.error)});
          ---color-nr: var(--color-nr, ${r$4(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${r$4(this.lights.a)});
          ---color-d-light: var(--color-d-light, ${r$4(this.lights.d)});
          ---color-k-light: var(--color-k-light, ${r$4(this.lights.k)});
          ---color-v-light: var(--color-v-light, ${r$4(this.lights.v)});
          ---color-chosen-light: var(--color-chosen-light, ${r$4(this.lights.chosen)});
          ---color-better-light: var(--color-better-light, ${r$4(this.lights.better)});
          ---color-worse-light: var(--color-worse-light, ${r$4(this.lights.worse)});
          ---color-even-light: var(--color-even-light, ${r$4(this.lights.even)});
          ---color-correct-light: var(--color-correct-light, ${r$4(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${r$4(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${r$4(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${r$4(this.darks.a)});
          ---color-d-dark: var(--color-d-dark, ${r$4(this.darks.d)});
          ---color-k-dark: var(--color-k-dark, ${r$4(this.darks.k)});
          ---color-v-dark: var(--color-v-dark, ${r$4(this.darks.v)});
          ---color-chosen-dark: var(--color-chosen-dark, ${r$4(this.darks.chosen)});
          ---color-better-dark: var(--color-better-dark, ${r$4(this.darks.better)});
          ---color-worse-dark: var(--color-worse-dark, ${r$4(this.darks.worse)});
          ---color-even-dark: var(--color-even-dark, ${r$4(this.darks.even)});
          ---color-correct-dark: var(--color-correct-dark, ${r$4(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${r$4(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${r$4(this.darks.nr)});
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
    return [super.styles, i$3`
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
          --decidables-button-background-color: var(---color-worse);
        }

        .selected[disabled][name="second"] {
          --decidables-button-background-color: var(---color-better);
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
          background-color: var(---color-worse-light);
        }

        .feedback.second {
          background-color: var(---color-better-light);
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
  e$1 = t => (...e) => ({
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
const e = o => void 0 === o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (i, t) => {
    var e, o;
    const r = i._$AN;
    if (void 0 === r) return !1;
    for (const i of r) null === (o = (e = i)._$AO) || void 0 === o || o.call(e, t, !1), s(i, t);
    return !0;
  },
  o = i => {
    let t, e;
    do {
      if (void 0 === (t = i._$AM)) break;
      e = t._$AN, e.delete(i), i = t;
    } while (0 === (null == e ? void 0 : e.size));
  },
  r$1 = i => {
    for (let t; t = i._$AM; i = t) {
      let e = t._$AN;
      if (void 0 === e) t._$AN = e = new Set();else if (e.has(i)) break;
      e.add(i), l(t);
    }
  };
function n$1(i) {
  void 0 !== this._$AN ? (o(this), this._$AM = i, r$1(this)) : this._$AM = i;
}
function h$1(i, t = !1, e = 0) {
  const r = this._$AH,
    n = this._$AN;
  if (void 0 !== n && 0 !== n.size) if (t) {
    if (Array.isArray(r)) for (let i = e; i < r.length; i++) s(r[i], !1), o(r[i]);else null != r && (s(r, !1), o(r));
  } else s(this, i);
}
const l = i => {
  var t$1, s, o, r;
  i.type == t.CHILD && (null !== (t$1 = (o = i)._$AP) && void 0 !== t$1 || (o._$AP = h$1), null !== (s = (r = i)._$AQ) && void 0 !== s || (r._$AQ = n$1));
};
class c extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i, t, e) {
    super._$AT(i, t, e), r$1(this), this.isConnected = i._$AU;
  }
  _$AO(i, t = !0) {
    var e, r;
    i !== this.isConnected && (this.isConnected = i, i ? null === (e = this.reconnected) || void 0 === e || e.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)), t && (s(this, i), o(this));
  }
  setValue(t) {
    if (e(this._$Ct)) this._$Ct._$AI(t, this);else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}

const i = new WeakMap();

let h = 0;
const r = new Map(),
  n = new WeakSet(),
  a = () => new Promise(t => requestAnimationFrame(t)),
  p = [{
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
class x extends c {
  constructor(t$1) {
    if (super(t$1), this.t = null, this.i = null, this.o = !0, this.shouldLog = !1, t$1.type === t.CHILD) throw Error("The `animate` directive must be used in attribute position.");
    this.createFinished();
  }
  createFinished() {
    var t;
    null === (t = this.resolveFinished) || void 0 === t || t.call(this), this.finished = new Promise(t => {
      this.h = t;
    });
  }
  async resolveFinished() {
    var t;
    null === (t = this.h) || void 0 === t || t.call(this), this.h = void 0;
  }
  render(i) {
    return A$2;
  }
  getController() {
    return i.get(this.l);
  }
  isDisabled() {
    var t;
    return this.options.disabled || (null === (t = this.getController()) || void 0 === t ? void 0 : t.disabled);
  }
  update(t, [i]) {
    var s;
    const e = void 0 === this.l;
    return e && (this.l = null === (s = t.options) || void 0 === s ? void 0 : s.host, this.l.addController(this), this.element = t.element, j.set(this.element, this)), this.optionsOrCallback = i, (e || "function" != typeof i) && this.u(i), this.render(i);
  }
  u(t) {
    var i, s;
    t = null != t ? t : {};
    const e = this.getController();
    void 0 !== e && ((t = {
      ...e.defaultOptions,
      ...t
    }).keyframeOptions = {
      ...e.defaultOptions.keyframeOptions,
      ...t.keyframeOptions
    }), null !== (i = (s = t).properties) && void 0 !== i || (s.properties = b), this.options = t;
  }
  v() {
    const t = {},
      i = this.element.getBoundingClientRect(),
      s = getComputedStyle(this.element);
    return this.options.properties.forEach(e => {
      var o;
      const h = null !== (o = i[e]) && void 0 !== o ? o : N[e] ? void 0 : s[e],
        r = Number(h);
      t[e] = isNaN(r) ? h + "" : r;
    }), t;
  }
  p() {
    let t,
      i = !0;
    return this.options.guard && (t = this.options.guard(), i = ((t, i) => {
      if (Array.isArray(t)) {
        if (Array.isArray(i) && i.length === t.length && t.every((t, s) => t === i[s])) return !1;
      } else if (i === t) return !1;
      return !0;
    })(t, this.m)), this.o = this.l.hasUpdated && !this.isDisabled() && !this.isAnimating() && i && this.element.isConnected, this.o && (this.m = Array.isArray(t) ? Array.from(t) : t), this.o;
  }
  hostUpdate() {
    var t;
    "function" == typeof this.optionsOrCallback && this.u(this.optionsOrCallback()), this.p() && (this.g = this.v(), this.t = null !== (t = this.t) && void 0 !== t ? t : this.element.parentNode, this.i = this.element.nextSibling);
  }
  async hostUpdated() {
    if (!this.o || !this.element.isConnected || this.options.skipInitial && !this.isHostRendered) return;
    let t;
    this.prepare(), await a;
    const i = this._(),
      s = this.A(this.options.keyframeOptions, i),
      e = this.v();
    if (void 0 !== this.g) {
      const {
        from: s,
        to: o
      } = this.O(this.g, e, i);
      this.log("measured", [this.g, e, s, o]), t = this.calculateKeyframes(s, o);
    } else {
      const s = r.get(this.options.inId);
      if (s) {
        r.delete(this.options.inId);
        const {
          from: o,
          to: n
        } = this.O(s, e, i);
        t = this.calculateKeyframes(o, n), t = this.options.in ? [{
          ...this.options.in[0],
          ...t[0]
        }, ...this.options.in.slice(1), t[1]] : t, h++, t.forEach(t => t.zIndex = h);
      } else this.options.in && (t = [...this.options.in, {}]);
    }
    this.animate(t, s);
  }
  resetStyles() {
    var t;
    void 0 !== this.j && (this.element.setAttribute("style", null !== (t = this.j) && void 0 !== t ? t : ""), this.j = void 0);
  }
  commitStyles() {
    var t, i;
    this.j = this.element.getAttribute("style"), null === (t = this.webAnimation) || void 0 === t || t.commitStyles(), null === (i = this.webAnimation) || void 0 === i || i.cancel();
  }
  reconnected() {}
  async disconnected() {
    var t;
    if (!this.o) return;
    if (void 0 !== this.options.id && r.set(this.options.id, this.g), void 0 === this.options.out) return;
    if (this.prepare(), await a(), null === (t = this.t) || void 0 === t ? void 0 : t.isConnected) {
      const t = this.i && this.i.parentNode === this.t ? this.i : null;
      if (this.t.insertBefore(this.element, t), this.options.stabilizeOut) {
        const t = this.v();
        this.log("stabilizing out");
        const i = this.g.left - t.left,
          s = this.g.top - t.top;
        !("static" === getComputedStyle(this.element).position) || 0 === i && 0 === s || (this.element.style.position = "relative"), 0 !== i && (this.element.style.left = i + "px"), 0 !== s && (this.element.style.top = s + "px");
      }
    }
    const i = this.A(this.options.keyframeOptions);
    await this.animate(this.options.out, i), this.element.remove();
  }
  prepare() {
    this.createFinished();
  }
  start() {
    var t, i;
    null === (i = (t = this.options).onStart) || void 0 === i || i.call(t, this);
  }
  didFinish(t) {
    var i, s;
    t && (null === (s = (i = this.options).onComplete) || void 0 === s || s.call(i, this)), this.g = void 0, this.animatingProperties = void 0, this.frames = void 0, this.resolveFinished();
  }
  _() {
    const t = [];
    for (let i = this.element.parentNode; i; i = null == i ? void 0 : i.parentNode) {
      const s = j.get(i);
      s && !s.isDisabled() && s && t.push(s);
    }
    return t;
  }
  get isHostRendered() {
    const t = n.has(this.l);
    return t || this.l.updateComplete.then(() => {
      n.add(this.l);
    }), t;
  }
  A(t, i = this._()) {
    const s = {
      ...A
    };
    return i.forEach(t => Object.assign(s, t.options.keyframeOptions)), Object.assign(s, t), s;
  }
  O(t, i, s) {
    t = {
      ...t
    }, i = {
      ...i
    };
    const e = s.map(t => t.animatingProperties).filter(t => void 0 !== t);
    let o = 1,
      h = 1;
    return void 0 !== e && (e.forEach(t => {
      t.width && (o /= t.width), t.height && (h /= t.height);
    }), void 0 !== t.left && void 0 !== i.left && (t.left = o * t.left, i.left = o * i.left), void 0 !== t.top && void 0 !== i.top && (t.top = h * t.top, i.top = h * i.top)), {
      from: t,
      to: i
    };
  }
  calculateKeyframes(t, i, s = !1) {
    var e;
    const o = {},
      h = {};
    let r = !1;
    const n = {};
    for (const s in i) {
      const a = t[s],
        l = i[s];
      if (s in N) {
        const t = N[s];
        if (void 0 === a || void 0 === l) continue;
        const i = t(a, l);
        void 0 !== i.transform && (n[s] = i.value, r = !0, o.transform = `${null !== (e = o.transform) && void 0 !== e ? e : ""} ${i.transform}`, void 0 !== i.overrideFrom && Object.assign(o, i.overrideFrom));
      } else a !== l && void 0 !== a && void 0 !== l && (r = !0, o[s] = a, h[s] = l);
    }
    return o.transformOrigin = h.transformOrigin = s ? "center center" : "top left", this.animatingProperties = n, r ? [o, h] : void 0;
  }
  async animate(t, i = this.options.keyframeOptions) {
    this.start(), this.frames = t;
    let s = !1;
    if (!this.isAnimating() && !this.isDisabled() && (this.options.onFrames && (this.frames = t = this.options.onFrames(this), this.log("modified frames", t)), void 0 !== t)) {
      this.log("animate", [t, i]), s = !0, this.webAnimation = this.element.animate(t, i);
      const e = this.getController();
      null == e || e.add(this);
      try {
        await this.webAnimation.finished;
      } catch (t) {}
      null == e || e.remove(this);
    }
    return this.didFinish(s), s;
  }
  isAnimating() {
    var t, i;
    return "running" === (null === (t = this.webAnimation) || void 0 === t ? void 0 : t.playState) || (null === (i = this.webAnimation) || void 0 === i ? void 0 : i.pending);
  }
  log(t, i) {
    this.shouldLog && !this.isDisabled() && console.log(t, this.options.id, i);
  }
}
const F = e$1(x);

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
    return [super.styles, i$3`
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
  render() {
    this.alignState();
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
        in: p
      })}>&gt;</span>` : this.vDiff < 0 ? x$2`<span class="comparison" ${F({
        in: p
      })}>&lt;</span>` : x$2`<span class="comparison" ${F({
        in: p
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
    return [super.styles, i$3`
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
    //   ${DiscountableElement.svgFilters}
    // `;
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.alignState();

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

// An interleaved array of UTC and local time intervals, in descending order
// from largest to smallest, used to determine the most specific standard time
// format for a given array of dates. This is a subset of the tick intervals
// listed above; we only need the breakpoints where the format changes.
const formatIntervals = [["year", utcYear, "utc"], ["year", timeYear, "time"], ["month", utcMonth, "utc"], ["month", timeMonth, "time"], ["day", unixDay, "utc", 6 * durationMonth], ["day", timeDay, "time", 6 * durationMonth],
// Below day, local time typically has an hourly offset from UTC and hence the
// two are aligned and indistinguishable; therefore, we only consider UTC, and
// we don’t consider these if the domain only has a single value.
["hour", utcHour, "utc", 3 * durationDay], ["minute", utcMinute, "utc", 6 * durationHour], ["second", second$1, "utc", 30 * durationMinute]];
function parseInterval(input, intervals, type) {
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
  let interval = intervals.get(name);
  if (!interval) throw new Error(`unknown interval: ${input}`);
  if (period > 1) {
    if (!interval.every) throw new Error(`non-periodic interval: ${name}`);
    interval = interval.every(period);
    interval[intervalDuration] = durations.get(name) * period;
    interval[intervalType] = type;
  }
  return interval;
}
function maybeTimeInterval(interval) {
  return parseInterval(interval, timeIntervals, "time");
}
function maybeUtcInterval(interval) {
  return parseInterval(interval, utcIntervals, "utc");
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

// Given an array of dates, returns the largest compatible standard time
// interval. If no standard interval is compatible (other than milliseconds,
// which is universally compatible), returns undefined.
function inferTimeFormat(dates, anchor) {
  const step = max(pairs(dates, (a, b) => Math.abs(b - a))); // maybe undefined!
  if (step < 1000) return formatTimeInterval("millisecond", "utc", anchor);
  for (const [name, interval, type, maxStep] of formatIntervals) {
    if (step > maxStep) break; // e.g., 52 weeks
    if (name === "hour" && !step) break; // e.g., domain with a single date
    if (dates.every(d => interval.floor(d) >= d)) return formatTimeInterval(name, type, anchor);
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

// Like a sort comparator, returns a positive value if the given array of values
// is in ascending order, a negative value if the values are in descending
// order. Assumes monotonicity; only tests the first and last values.
function orderof(values) {
  if (values == null) return;
  const first = values[0];
  const last = values[values.length - 1];
  return descending(first, last);
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
  return X ? sort(group(I, i => X[i]), first) : [[, I]];
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

// TODO Accept other types of clips (paths, urls, x, y, other marks…)?
// https://github.com/observablehq/plot/issues/181
function maybeClip(clip) {
  if (clip === true) clip = "frame";else if (clip === false) clip = null;else if (clip != null) clip = keyword(clip, "clip", ["frame", "sphere"]);
  return clip;
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

const categoricalSchemes = new Map([["accent", schemeAccent], ["category10", schemeCategory10], ["dark2", schemeDark2], ["paired", schemePaired], ["pastel1", schemePastel1], ["pastel2", schemePastel2], ["set1", schemeSet1], ["set2", schemeSet2], ["set3", schemeSet3], ["tableau10", schemeTableau10]]);
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
      scheme = type === "ordinal" ? "turbo" : "tableau10";
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
    if (value === undefined) value = candidate;
    // first hint
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
  // The facet scales are always band scales; this cannot be changed.
  if (key === "fx" || key === "fy") return "band";

  // If a projection is specified, the x- and y-scales are disabled; these
  // channels will be projected rather than scaled. (But still check that none
  // of the associated channels are incompatible with a projection.)
  if ((key === "x" || key === "y") && projection != null) type = typeProjection;

  // If a channel dictates a scale type, make sure that it is consistent with
  // the user-specified scale type (if any) and all other channels. For example,
  // barY requires x to be a band scale and disallows any other scale type.
  for (const {
    type: t
  } of channels) {
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
  svg.append("style").text(`.${className}-ramp {
  display: block;
  background: white;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
.${className}-ramp text {
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
  return create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", color).attr("stroke", "white").attr("stroke-width", 1.5).call(marker => marker.append("circle").attr("r", 3)).node();
}
function markerCircleStroke(color, context) {
  return create("svg:marker", context).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "white").attr("stroke", color).attr("stroke-width", 1.5).call(marker => marker.append("circle").attr("r", 3)).node();
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
      [`${k}2`]: v2 === undefined ? kv : v2
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
    sum += isPictographic(text, i) ? 200 : 100;
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
  return axisMark(vectorY, k, anchor, `${k}-axis tick`, data, {
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
  return axisMark(vectorX, k, anchor, `${k}-axis tick`, data, {
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
  return axisMark(textY, k, anchor, `${k}-axis tick label`, data, {
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
  return axisMark(textX, k, anchor, `${k}-axis tick label`, data, {
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
  return axisMark(ruleY, k, anchor, `${k}-grid`, data, {
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
  return axisMark(ruleX, k, anchor, `${k}-grid`, data, {
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
function axisMark(mark, k, anchor, ariaLabel, data, options, initialize) {
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
  m.ariaLabel = ariaLabel;
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
  return typeof tickFormat === "function" ? tickFormat : tickFormat === undefined && data && isTemporal(data) ? inferTimeFormat(data, anchor) ?? formatDefault : scale.tickFormat ? scale.tickFormat(typeof ticks === "number" ? ticks : null, tickFormat) : tickFormat === undefined ? formatDefault : typeof tickFormat === "string" ? (isTemporal(scale.domain()) ? utcFormat : format$1)(tickFormat) : constant(tickFormat);
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

// Determines whether the scale points in the “positive” (right or down) or
// “negative” (left or up) direction; if the scale order cannot be determined,
// returns NaN; used to assign an appropriate label arrow.
function inferScaleOrder(scale) {
  return Math.sign(orderof(scale.domain())) * Math.sign(orderof(scale.range()));
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
    extraStyle = `.${className}-swatches-columns .${className}-swatch {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
.${className}-swatches-columns .${className}-swatch::before {
  flex-shrink: 0;
}
.${className}-swatches-columns .${className}-swatch-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;
    swatches.style("columns", columns).selectAll().data(scale.domain).enter().append("div").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).call(item => item.append("div").attr("class", `${className}-swatch-label`).attr("title", tickFormat).text(tickFormat));
  } else {
    extraStyle = `.${className}-swatches-wrap {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
.${className}-swatches-wrap .${className}-swatch {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`;
    swatches.selectAll().data(scale.domain).enter().append("span").attr("class", `${className}-swatch`).call(swatch, scale, swatchWidth, swatchHeight).append(function () {
      return this.ownerDocument.createTextNode(tickFormat.apply(this, arguments));
    });
  }
  return swatches.call(div => div.insert("style", "*").text(`.${className}-swatches {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
.${className}-swatch > svg {
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
  fill: "white",
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
    this.previousAnchor = this.anchor ?? "top-left";
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
          value = value.slice(0, k).trimEnd() + ellipsis;
          title = value.trim();
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
          a = mark.previousAnchor; // favor the previous anchor, if it fits
          const x = px(i) + ox;
          const y = py(i) + oy;
          const fitLeft = x + w + r * 2 < width;
          const fitRight = x - w - r * 2 > 0;
          const fitTop = y + h + m + r * 2 + 7 < height;
          const fitBottom = y - h - m - r * 2 > 0;
          const ax = (/-left$/.test(a) ? fitLeft || !fitRight : fitLeft && !fitRight) ? "left" : "right";
          const ay = (/^top-/.test(a) ? fitTop || !fitBottom : fitTop && !fitBottom) ? "top" : "bottom";
          a = mark.previousAnchor = `${ay}-${ax}`;
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
  svg.append("style").text(`.${className} {
  display: block;
  background: white;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
.${className} text,
.${className} tspan {
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
        pointer: p
      } = tipOptions;
      p = /^x$/i.test(p) ? pointerX : /^y$/i.test(p) ? pointerY : pointer; // TODO validate?
      tipOptions = p(derive(mark, tipOptions));
      tipOptions.title = null; // prevent implicit title for primitive data
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

  // Don’t group on a channel if an output requires it as an input!
  if (gx != null && hasOutput(outputs, "x", "x1", "x2")) gx = null;
  if (gy != null && hasOutput(outputs, "y", "y1", "y2")) gy = null;

  // Produce x1, x2, y1, and y2 output channels as appropriate (when binning).
  const [BX1, setBX1] = maybeColumn(bx);
  const [BX2, setBX2] = maybeColumn(bx);
  const [BY1, setBY1] = maybeColumn(by);
  const [BY2, setBY2] = maybeColumn(by);

  // Produce x or y output channels as appropriate (when grouping).
  const [k, gk] = gx != null ? [gx, "x"] : gy != null ? [gy, "y"] : [];
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
      const bin = bing(bx?.(data), by?.(data));
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
              if (sort) sort.reduce(b);
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
  }
  throw new Error(`invalid bin reduce: ${reduce}`);
}
function thresholdAuto(values, min, max) {
  return Math.min(200, thresholdScott(values, min, max));
}
function isTimeThresholds(t) {
  return isTimeInterval(t) || isIterable(t) && isTemporal(t);
}
function bing(EX, EY) {
  return EX && EY ? function* (I) {
    const X = EX.bin(I); // first bin on x
    for (const [ix, [x1, x2]] of EX.entries()) {
      const Y = EY.bin(X[ix]); // then bin on y
      for (const [iy, [y1, y2]] of EY.entries()) {
        yield [Y[iy], {
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
        x1,
        x2
      }];
    }
  } : function* (I) {
    const Y = EY.bin(I);
    for (const [i, [y1, y2]] of EY.entries()) {
      yield [Y[i], {
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
    for (const i of I) B[bisect(T, V[i]) - 1]?.push(i); // TODO quantization?
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
        optional: true
      },
      y1: {
        value: y1,
        scale: "y",
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
    return create("svg:g", context).call(applyIndirectStyles, this, dimensions, context).call(applyTransform, this, {
      x: X1 && X2 && x,
      y: Y1 && Y2 && y
    }, 0, 0).call(g => g.selectAll().data(index).enter().append("rect").call(applyDirectStyles, this).attr("x", X1 && X2 && (projection || !isCollapsed(x)) ? i => Math.min(X1[i], X2[i]) + insetLeft : marginLeft + insetLeft).attr("y", Y1 && Y2 && (projection || !isCollapsed(y)) ? i => Math.min(Y1[i], Y2[i]) + insetTop : marginTop + insetTop).attr("width", X1 && X2 && (projection || !isCollapsed(x)) ? i => Math.max(0, Math.abs(X2[i] - X1[i]) - insetLeft - insetRight) : width - marginRight - marginLeft - insetRight - insetLeft).attr("height", Y1 && Y2 && (projection || !isCollapsed(y)) ? i => Math.max(0, Math.abs(Y1[i] - Y2[i]) - insetTop - insetBottom) : height - marginTop - marginBottom - insetTop - insetBottom).call(applyAttr, "rx", rx).call(applyAttr, "ry", ry).call(applyChannelStyles, this, channels)).node();
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
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

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
    return [super.styles, i$3`
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
    return [super.styles, i$3`
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
          border-radius: 50%;
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
    return [super.styles, i$3`
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
      start: 10,
      stop: 20,
      step: 1
    }; // Amount SS
    this.range.ds = {
      start: 10,
      stop: 40,
      step: 1
    }; // Delay SS
    this.range.al = {
      start: 20,
      stop: 40,
      step: 1
    }; // Amount LL
    this.range.dl = {
      start: 50,
      stop: 80,
      step: 1
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
    return [super.styles, i$3`
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
  render() {
    this.alignState();
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
  firstUpdated( /* changedProperties */
  ) {
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
  firstUpdated( /* changedProperties */
  ) {
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
  firstUpdated( /* changedProperties */
  ) {
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
//# sourceMappingURL=page.js.map