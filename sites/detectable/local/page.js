var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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

var fails$j = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$i = fails$j;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});

var fails$h = fails$j;
var functionBindNative = !fails$h(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var call$b = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
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
var call$a = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$a, call$a);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$a.apply(fn, arguments);
  };
};

var uncurryThis$p = functionUncurryThis;
var toString$8 = uncurryThis$p({}.toString);
var stringSlice$1 = uncurryThis$p(''.slice);
var classofRaw$2 = function (it) {
  return stringSlice$1(toString$8(it), 8, -1);
};

var uncurryThis$o = functionUncurryThis;
var fails$g = fails$j;
var classof$9 = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$o(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$g(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$9(it) === 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;
var $TypeError$e = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$4 = function (it) {
  if (isNullOrUndefined$3(it)) throw new $TypeError$e("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var toIndexedObject$8 = function (it) {
  return IndexedObject(requireObjectCoercible$3(it));
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
var isObject$9 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var global$m = global$n;
var isCallable$g = isCallable$i;
var aFunction = function (argument) {
  return isCallable$g(argument) ? argument : undefined;
};
var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
};

var uncurryThis$n = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);

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
var fails$f = fails$j;
var global$k = global$n;
var $String$5 = global$k.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$f(function () {
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

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$f = isCallable$i;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
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
var $TypeError$d = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$6 = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw new $TypeError$d(tryToString$4(argument) + ' is not a function');
};

var aCallable$5 = aCallable$6;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$5(func);
};

var call$9 = functionCall;
var isCallable$d = isCallable$i;
var isObject$8 = isObject$9;
var $TypeError$c = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$8(val = call$9(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
  throw new $TypeError$c("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

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

var global$i = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = '__core-js_shared__';
var store$3 = global$i[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.35.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var sharedExports = shared$3.exports;

var requireObjectCoercible$2 = requireObjectCoercible$4;
var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$2(argument));
};

var uncurryThis$m = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$l = functionUncurryThis;
var id$1 = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$l(1.0.toString);
var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id$1 + postfix, 36);
};

var global$h = global$n;
var shared$2 = sharedExports;
var hasOwn$c = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$h.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;
var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$c(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

var call$8 = functionCall;
var isObject$7 = isObject$9;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;
var $TypeError$b = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$8(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$2(result)) return result;
    throw new $TypeError$b("Can't convert object to primitive value");
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

var global$g = global$n;
var isObject$6 = isObject$9;
var document$1 = global$g.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);
var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$d = descriptors;
var fails$e = fails$j;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$d && !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});

var DESCRIPTORS$c = descriptors;
var call$7 = functionCall;
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
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$c ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$7(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {/* empty */}
  if (hasOwn$b(O, P)) return createPropertyDescriptor$4(!call$7(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$b = descriptors;
var fails$d = fails$j;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$5 = isObject$9;
var $String$3 = String;
var $TypeError$a = TypeError;

// `Assert: Type(argument) is Object`
var anObject$a = function (argument) {
  if (isObject$5(argument)) return argument;
  throw new $TypeError$a($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$3;
var $TypeError$9 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$9 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var createNonEnumerableProperty$4 = DESCRIPTORS$9 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$8 = descriptors;
var hasOwn$a = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$a(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$k = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStore;
var functionToString = uncurryThis$k(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store$1.inspectSource;

var global$f = global$n;
var isCallable$b = isCallable$i;
var WeakMap$2 = global$f.WeakMap;
var weakMapBasicDetection = isCallable$b(WeakMap$2) && /native code/.test(String(WeakMap$2));

var shared$1 = sharedExports;
var uid$2 = uid$4;
var keys$1 = shared$1('keys');
var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$2(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$9 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$e.TypeError;
var WeakMap$1 = global$e.WeakMap;
var set$3, get$2, has;
var enforce = function (it) {
  return has(it) ? get$2(it) : set$3(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$4(it) || (state = get$2(it)).type !== TYPE) {
      throw new TypeError$3('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
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
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$3 = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$9(it, STATE);
  };
}
var internalState = {
  set: set$3,
  get: get$2,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$j = functionUncurryThis;
var fails$c = fails$j;
var isCallable$a = isCallable$i;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$7 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$1 = internalState;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;
var stringSlice = uncurryThis$j(''.slice);
var replace$1 = uncurryThis$j(''.replace);
var join$1 = uncurryThis$j([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$7 && !fails$c(function () {
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
    if (DESCRIPTORS$7) defineProperty$3(value, 'name', {
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
      if (DESCRIPTORS$7) defineProperty$3(value, 'prototype', {
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
var toIntegerOrInfinity$5 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;
var max$1 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$4(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;
var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  var len = toIntegerOrInfinity$3(argument);
  return len > 0 ? min$1(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$9 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$6 = toIndexedObject$8;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$8 = lengthOfArrayLike$9;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$6($this);
    var length = lengthOfArrayLike$8(O);
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

var uncurryThis$i = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$5 = toIndexedObject$8;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$2 = uncurryThis$i([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$5(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$2, key) && hasOwn$7(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf(result, key) || push$2(result, key);
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

var getBuiltIn$5 = getBuiltIn$7;
var uncurryThis$h = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$8 = anObject$a;
var concat = uncurryThis$h([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
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

var fails$b = fails$j;
var isCallable$8 = isCallable$i;
var replacement = /#|\.prototype\./;
var isForced$1 = function (feature, detection) {
  var value = data[normalize$1(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$8(detection) ? fails$b(detection) : !!detection;
};
var normalize$1 = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$d = global$n;
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
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global$d[TARGET] && global$d[TARGET].prototype;
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

var classof$8 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$8(argument) === 'Array';
};

var DESCRIPTORS$6 = descriptors;
var isArray = isArray$1;
var $TypeError$8 = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$6 && !function () {
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
    throw new $TypeError$8('Cannot set read only .length');
  }
  return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError$7 = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$7('Maximum allowed index exceeded');
  return it;
};

var $$d = _export;
var toObject$2 = toObject$4;
var lengthOfArrayLike$7 = lengthOfArrayLike$9;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var fails$a = fails$j;
var INCORRECT_TO_LENGTH = fails$a(function () {
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
$$d({
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

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$7 = anObject$a;
var toIndexedObject$4 = toIndexedObject$8;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var props = toIndexedObject$4(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$7;
var html$2 = getBuiltIn$4('document', 'documentElement');

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
var create$1 = objectCreate;
var defineProperty$2 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$6('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
  defineProperty$2(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$3 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $$c = _export;
var arrayToReversed$1 = arrayToReversed$2;
var toIndexedObject$3 = toIndexedObject$8;
var addToUnscopables$2 = addToUnscopables$3;
var $Array$4 = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$$c({
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

var global$c = global$n;
var getBuiltInPrototypeMethod$1 = function (CONSTRUCTOR, METHOD) {
  var Constructor = global$c[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};

var $$b = _export;
var uncurryThis$g = functionUncurryThis;
var aCallable$4 = aCallable$6;
var toIndexedObject$2 = toIndexedObject$8;
var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$2;
var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$1;
var addToUnscopables$1 = addToUnscopables$3;
var $Array$3 = Array;
var sort$1 = uncurryThis$g(getBuiltInPrototypeMethod('Array', 'sort'));

// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$$b({
  target: 'Array',
  proto: true
}, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable$4(compareFn);
    var O = toIndexedObject$2(this);
    var A = arrayFromConstructorAndList$1($Array$3, O);
    return sort$1(A, compareFn);
  }
});
addToUnscopables$1('toSorted');

var $$a = _export;
var addToUnscopables = addToUnscopables$3;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var lengthOfArrayLike$4 = lengthOfArrayLike$9;
var toAbsoluteIndex = toAbsoluteIndex$2;
var toIndexedObject$1 = toIndexedObject$8;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
var $Array$2 = Array;
var max = Math.max;
var min = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$$a({
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
      actualDeleteCount = min(max(toIntegerOrInfinity$2(deleteCount), 0), len - actualStart);
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
var $TypeError$6 = TypeError;
var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$6('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var $$9 = _export;
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
$$9({
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
var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
var arrayWith$2 = function (O, C, index, value) {
  var len = lengthOfArrayLike$2(O);
  var relativeIndex = toIntegerOrInfinity$1(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};

var $$8 = _export;
var arrayWith$1 = arrayWith$2;
var toIndexedObject = toIndexedObject$8;
var $Array$1 = Array;

// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$$8({
  target: 'Array',
  proto: true
}, {
  'with': function (index, value) {
    return arrayWith$1(toIndexedObject(this), $Array$1, index, value);
  }
});

var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;
var defineBuiltInAccessor$3 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    getter: true
  });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    setter: true
  });
  return defineProperty$1.f(target, name, descriptor);
};

var anObject$5 = anObject$a;

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

var global$b = global$n;
var DESCRIPTORS$4 = descriptors;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var regExpFlags$1 = regexpFlags;
var fails$9 = fails$j;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = global$b.RegExp;
var RegExpPrototype$1 = RegExp$1.prototype;
var FORCED = DESCRIPTORS$4 && fails$9(function () {
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

var wellKnownSymbol$5 = wellKnownSymbol$8;
var TO_STRING_TAG$2 = wellKnownSymbol$5('toStringTag');
var test = {};
test[TO_STRING_TAG$2] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$7 = isCallable$i;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$8;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var $Object$1 = Object;

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
var classof$7 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw$1(O)
  // ES3 arguments fallback
  : (result = classofRaw$1(O)) === 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var classof$6 = classof$7;
var $String$1 = String;
var toString$6 = function (argument) {
  if (classof$6(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var $$7 = _export;
var uncurryThis$f = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var toString$5 = toString$6;
var charCodeAt$1 = uncurryThis$f(''.charCodeAt);

// `String.prototype.isWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$7({
  target: 'String',
  proto: true
}, {
  isWellFormed: function isWellFormed() {
    var S = toString$5(requireObjectCoercible$1(this));
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

var $$6 = _export;
var call$6 = functionCall;
var uncurryThis$e = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$4;
var toString$4 = toString$6;
var fails$8 = fails$j;
var $Array = Array;
var charAt = uncurryThis$e(''.charAt);
var charCodeAt = uncurryThis$e(''.charCodeAt);
var join = uncurryThis$e([].join);
// eslint-disable-next-line es/no-string-prototype-iswellformed-towellformed -- safe
var $toWellFormed = ''.toWellFormed;
var REPLACEMENT_CHARACTER = '\uFFFD';

// Safari bug
var TO_STRING_CONVERSION_BUG = $toWellFormed && fails$8(function () {
  return call$6($toWellFormed, 1) !== '1';
});

// `String.prototype.toWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$6({
  target: 'String',
  proto: true,
  forced: TO_STRING_CONVERSION_BUG
}, {
  toWellFormed: function toWellFormed() {
    var S = toString$4(requireObjectCoercible(this));
    if (TO_STRING_CONVERSION_BUG) return call$6($toWellFormed, S);
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

var fails$7 = fails$j;
var correctPrototypeGetter = !fails$7(function () {
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

var uncurryThis$d = functionUncurryThis;
var aCallable$3 = aCallable$6;
var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$d(aCallable$3(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

var isObject$3 = isObject$9;
var isPossiblePrototype$1 = function (argument) {
  return isObject$3(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;
var $String = String;
var $TypeError$5 = TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$5("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$4 = anObject$a;
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

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$3 = descriptors;
var global$a = global$n;
var isCallable$5 = isCallable$i;
var isObject$2 = isObject$9;
var hasOwn$4 = hasOwnProperty_1;
var classof$5 = classof$7;
var tryToString$2 = tryToString$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn$2 = defineBuiltIn$4;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var wellKnownSymbol$3 = wellKnownSymbol$8;
var uid$1 = uid$4;
var InternalStateModule = internalState;
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array$1 = global$a.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var Uint8ClampedArray = global$a.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array$1 && getPrototypeOf(Int8Array$1);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError$2 = global$a.TypeError;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var TYPED_ARRAY_TAG = uid$1('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$5(global$a.opera) !== 'Opera';
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
  var klass = classof$5(it);
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
  var klass = classof$5(it);
  return hasOwn$4(TypedArrayConstructorsList, klass) || hasOwn$4(BigIntArrayConstructorsList, klass);
};
var aTypedArray$3 = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError$2('Target is not a typed array');
};
var aTypedArrayConstructor = function (C) {
  if (isCallable$5(C) && (!setPrototypeOf$1 || isPrototypeOf$3(TypedArray, C))) return C;
  throw new TypeError$2(tryToString$2(C) + ' is not a typed array constructor');
};
var exportTypedArrayMethod$3 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$3) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$a[ARRAY];
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
  if (!DESCRIPTORS$3) return;
  if (setPrototypeOf$1) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$a[ARRAY];
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
    TypedArrayConstructor = global$a[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$2(TypedArrayConstructor, KEY, property);
    }
  }
};
for (NAME$2 in TypedArrayConstructorsList) {
  Constructor = global$a[NAME$2];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;else NATIVE_ARRAY_BUFFER_VIEWS = false;
}
for (NAME$2 in BigIntArrayConstructorsList) {
  Constructor = global$a[NAME$2];
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
    if (global$a[NAME$2]) setPrototypeOf$1(global$a[NAME$2], TypedArray);
  }
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$2 in TypedArrayConstructorsList) {
    if (global$a[NAME$2]) setPrototypeOf$1(global$a[NAME$2].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}
if (DESCRIPTORS$3 && !hasOwn$4(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$1(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$2(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME$2 in TypedArrayConstructorsList) if (global$a[NAME$2]) {
    createNonEnumerableProperty$1(global$a[NAME$2], TYPED_ARRAY_TAG, NAME$2);
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
var uncurryThis$c = functionUncurryThis;
var aCallable$2 = aCallable$6;
var arrayFromConstructorAndList = arrayFromConstructorAndList$2;
var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var sort = uncurryThis$c(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod$1('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable$2(compareFn);
  var O = aTypedArray$1(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor$1(O), O);
  return sort(A, compareFn);
});

var classof$4 = classof$7;
var isBigIntArray$1 = function (it) {
  var klass = classof$4(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;
var $TypeError$4 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$1 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError$4("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var arrayWith = arrayWith$2;
var ArrayBufferViewCore = arrayBufferViewCore;
var isBigIntArray = isBigIntArray$1;
var toIntegerOrInfinity = toIntegerOrInfinity$5;
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

var isPrototypeOf$2 = objectIsPrototypeOf;
var $TypeError$3 = TypeError;
var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw new $TypeError$3('Incorrect invocation');
};

var isCallable$4 = isCallable$i;
var isObject$1 = isObject$9;
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

var toString$3 = toString$6;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$3(argument);
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

var uncurryThis$b = functionUncurryThis;
var $Error = Error;
var replace = uncurryThis$b(''.replace);
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

var $$5 = _export;
var global$9 = global$n;
var getBuiltIn$3 = getBuiltIn$7;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var defineProperty = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var anInstance = anInstance$1;
var inheritIfRequired = inheritIfRequired$1;
var normalizeStringArgument = normalizeStringArgument$1;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = errorStackClear;
var DESCRIPTORS$2 = descriptors;
var DOM_EXCEPTION = 'DOMException';
var Error$2 = getBuiltIn$3('Error');
var NativeDOMException = getBuiltIn$3(DOM_EXCEPTION);
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
var descriptor = NativeDOMException && DESCRIPTORS$2 && Object.getOwnPropertyDescriptor(global$9, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$$5({
  global: true,
  constructor: true,
  forced: FORCED_CONSTRUCTOR
}, {
  // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn$3(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$2(1, PolyfilledDOMException));
  }
  for (var key in DOMExceptionConstants) if (hasOwn$3(DOMExceptionConstants, key)) {
    var constant$6 = DOMExceptionConstants[key];
    var constantName = constant$6.s;
    if (!hasOwn$3(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor$2(6, constant$6.c));
    }
  }
}

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$5 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$5.bind(apply$2) : function () {
  return call$5.apply(apply$2, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$a = functionUncurryThis;
var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$a(fn);
};

var uncurryThis$9 = functionUncurryThisClause;
var aCallable$1 = aCallable$6;
var NATIVE_BIND = functionBindNative;
var bind$2 = uncurryThis$9(uncurryThis$9.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$8 = functionUncurryThis;
var arraySlice$2 = uncurryThis$8([].slice);

var $TypeError$2 = TypeError;
var validateArgumentsLength$6 = function (passed, required) {
  if (passed < required) throw new $TypeError$2('Not enough arguments');
  return passed;
};

var userAgent = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

var global$8 = global$n;
var classof$3 = classofRaw$2;
var engineIsNode = classof$3(global$8.process) === 'process';

var global$7 = global$n;
var apply$1 = functionApply;
var bind$1 = functionBindContext;
var isCallable$3 = isCallable$i;
var hasOwn$2 = hasOwnProperty_1;
var fails$6 = fails$j;
var html = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$1;
var validateArgumentsLength$5 = validateArgumentsLength$6;
var IS_IOS = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set$2 = global$7.setImmediate;
var clear = global$7.clearImmediate;
var process = global$7.process;
var Dispatch$1 = global$7.Dispatch;
var Function$2 = global$7.Function;
var MessageChannel = global$7.MessageChannel;
var String$1 = global$7.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel$1, port;
fails$6(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$7.location;
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
  global$7.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$2 || !clear) {
  set$2 = function setImmediate(handler) {
    validateArgumentsLength$5(arguments.length, 1);
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
  if (IS_NODE$3) {
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
    channel$1 = new MessageChannel();
    port = channel$1.port2;
    channel$1.port1.onmessage = eventListener;
    defer = bind$1(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$7.addEventListener && isCallable$3(global$7.postMessage) && !global$7.importScripts && $location && $location.protocol !== 'file:' && !fails$6(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$7.addEventListener('message', eventListener, false);
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

var $$4 = _export;
var global$6 = global$n;
var clearImmediate = task.clear;

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$$4({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$6.clearImmediate !== clearImmediate
}, {
  clearImmediate: clearImmediate
});

/* global Bun -- Bun case */
var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

var global$5 = global$n;
var apply = functionApply;
var isCallable$2 = isCallable$i;
var ENGINE_IS_BUN = engineIsBun;
var USER_AGENT = engineUserAgent;
var arraySlice = arraySlice$2;
var validateArgumentsLength$4 = validateArgumentsLength$6;
var Function$1 = global$5.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
  var version = global$5.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
var schedulersFix$1 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$4(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$2(handler) ? handler : Function$1(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$3 = _export;
var global$4 = global$n;
var setTask = task.set;
var schedulersFix = schedulersFix$1;

// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global$4.setImmediate ? schedulersFix(setTask, false) : setTask;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$$3({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$4.setImmediate !== setImmediate
}, {
  setImmediate: setImmediate
});

var uncurryThis$7 = functionUncurryThis;
var fails$5 = fails$j;
var isCallable$1 = isCallable$i;
var classof$2 = classof$7;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource = inspectSource$2;
var noop$3 = function () {/* empty */};
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$7(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$3);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;
  try {
    construct(noop$3, [], argument);
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
var isConstructor$1 = !construct || fails$5(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var iterators = {};

var wellKnownSymbol$2 = wellKnownSymbol$8;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$2('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof$1 = classof$7;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$8;
var ITERATOR$1 = wellKnownSymbol$1('iterator');
var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1) || getMethod$1(it, '@@iterator') || Iterators[classof$1(it)];
};

var call$4 = functionCall;
var aCallable = aCallable$6;
var anObject$3 = anObject$a;
var tryToString$1 = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$1 = TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$3(call$4(iteratorMethod, argument));
  throw new $TypeError$1(tryToString$1(argument) + ' is not iterable');
};

var call$3 = functionCall;
var anObject$2 = anObject$a;
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
    innerResult = call$3(innerResult, iterator);
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
var call$2 = functionCall;
var anObject$1 = anObject$a;
var tryToString = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$9;
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
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
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
  while (!(step = call$2(next, iterator)).done) {
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

var call$1 = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags;
var RegExpPrototype = RegExp.prototype;
var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn$1(R, 'flags') && isPrototypeOf(RegExpPrototype, R) ? call$1(regExpFlags, R) : flags;
};

var uncurryThis$6 = functionUncurryThis;

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis$6(MapPrototype.set),
  get: uncurryThis$6(MapPrototype.get),
  has: uncurryThis$6(MapPrototype.has),
  remove: uncurryThis$6(MapPrototype['delete']),
  proto: MapPrototype
};

var uncurryThis$5 = functionUncurryThis;

// eslint-disable-next-line es/no-set -- safe
var SetPrototype$1 = Set.prototype;
var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis$5(SetPrototype$1.add),
  has: uncurryThis$5(SetPrototype$1.has),
  remove: uncurryThis$5(SetPrototype$1['delete']),
  proto: SetPrototype$1
};

var call = functionCall;
var iterateSimple$1 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};

var uncurryThis$4 = functionUncurryThis;
var iterateSimple = iterateSimple$1;
var SetHelpers$1 = setHelpers;
var Set$2 = SetHelpers$1.Set;
var SetPrototype = SetHelpers$1.proto;
var forEach$2 = uncurryThis$4(SetPrototype.forEach);
var keys = uncurryThis$4(SetPrototype.keys);
var next = keys(new Set$2()).next;
var setIterate$1 = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({
    iterator: keys(set),
    next: next
  }, fn) : forEach$2(set, fn);
};

var IS_NODE$2 = engineIsNode;
var tryNodeRequire$1 = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE$2) return Function('return require("' + name + '")')();
  } catch (error) {/* empty */}
};

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == 'object' && typeof document == 'object';

var global$3 = global$n;
var fails$4 = fails$j;
var V8 = engineV8Version;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var IS_NODE = engineIsNode;
var structuredClone$1 = global$3.structuredClone;
var structuredCloneProperTransfer = !!structuredClone$1 && !fails$4(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (IS_DENO && V8 > 92 || IS_NODE && V8 > 94 || IS_BROWSER && V8 > 97) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$1(buffer, {
    transfer: [buffer]
  });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});

var global$2 = global$n;
var tryNodeRequire = tryNodeRequire$1;
var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;
var structuredClone = global$2.structuredClone;
var $ArrayBuffer = global$2.ArrayBuffer;
var $MessageChannel = global$2.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;
if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
  detach = function (transferable) {
    structuredClone(transferable, {
      transfer: [transferable]
    });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }
  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);
    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };
    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) {/* empty */}
var detachTransferable$1 = detach;

var fails$3 = fails$j;
var createPropertyDescriptor = createPropertyDescriptor$5;
var errorStackInstallable = !fails$3(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

var $$2 = _export;
var global$1 = global$n;
var getBuiltIn$1 = getBuiltIn$7;
var uncurryThis$3 = functionUncurryThis;
var fails$2 = fails$j;
var uid = uid$4;
var isCallable = isCallable$i;
var isConstructor = isConstructor$1;
var isNullOrUndefined = isNullOrUndefined$4;
var isObject = isObject$9;
var isSymbol = isSymbol$3;
var iterate = iterate$1;
var anObject = anObject$a;
var classof = classof$7;
var hasOwn = hasOwnProperty_1;
var createProperty = createProperty$1;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var lengthOfArrayLike = lengthOfArrayLike$9;
var validateArgumentsLength$3 = validateArgumentsLength$6;
var getRegExpFlags = regexpGetFlags;
var MapHelpers = mapHelpers;
var SetHelpers = setHelpers;
var setIterate = setIterate$1;
var detachTransferable = detachTransferable$1;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;
var Object$1 = global$1.Object;
var Array$1 = global$1.Array;
var Date$1 = global$1.Date;
var Error$1 = global$1.Error;
var TypeError$1 = global$1.TypeError;
var PerformanceMark = global$1.PerformanceMark;
var DOMException = getBuiltIn$1('DOMException');
var Map$1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set$1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var setHas = SetHelpers.has;
var objectKeys = getBuiltIn$1('Object', 'keys');
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
          cloned = new (getBuiltIn$1(name))([]);
          break;
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SuppressedError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
          cloned = new (getBuiltIn$1(name))();
          break;
        case 'CompileError':
        case 'LinkError':
        case 'RuntimeError':
          cloned = new (getBuiltIn$1('WebAssembly', name))();
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
$$2({
  global: true,
  enumerable: true,
  sham: !PROPER_STRUCTURED_CLONE_TRANSFER,
  forced: FORCED_REPLACEMENT
}, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength$3(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
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

var fails$1 = fails$j;
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

var $$1 = _export;
var getBuiltIn = getBuiltIn$7;
var fails = fails$j;
var validateArgumentsLength$2 = validateArgumentsLength$6;
var toString$2 = toString$6;
var USE_NATIVE_URL = urlConstructorDetection;
var URL$1 = getBuiltIn('URL');

// https://github.com/nodejs/node/issues/47505
// https://github.com/denoland/deno/issues/18893
var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
  URL$1.canParse();
});

// `URL.canParse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$$1({
  target: 'URL',
  stat: true,
  forced: !THROWS_WITHOUT_ARGUMENTS
}, {
  canParse: function canParse(url) {
    var length = validateArgumentsLength$2(arguments.length, 1);
    var urlString = toString$2(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString$2(arguments[1]);
    try {
      return !!new URL$1(urlString, base);
    } catch (error) {
      return false;
    }
  }
});

var defineBuiltIn$1 = defineBuiltIn$4;
var uncurryThis$2 = functionUncurryThis;
var toString$1 = toString$6;
var validateArgumentsLength$1 = validateArgumentsLength$6;
var $URLSearchParams$1 = URLSearchParams;
var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
var append$2 = uncurryThis$2(URLSearchParamsPrototype$2.append);
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
      if (!(entry.key === key && entry.value === value)) append$2(this, entry.key, entry.value);
    }
  }, {
    enumerable: true,
    unsafe: true
  });
}

var defineBuiltIn = defineBuiltIn$4;
var uncurryThis$1 = functionUncurryThis;
var toString = toString$6;
var validateArgumentsLength = validateArgumentsLength$6;
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
var defineBuiltInAccessor = defineBuiltInAccessor$3;
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
    this._$Eg = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
  }
  addController(t) {
    (this._$E_ ??= new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$E_?.delete(t);
  }
  _$ES() {
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
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$E_?.forEach(t => t.hostConnected?.());
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$E_?.forEach(t => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  _$EO(t, s) {
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
  requestUpdate(t, s, i, e = !1, r) {
    if (void 0 !== t) {
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$1)(e ? r : this[t], s)) return;
      this.C(t, s, i);
    }
    !1 === this.isUpdatePending && (this._$Eg = this._$EP());
  }
  C(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
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
      if (t.size > 0) for (const [s, i] of t) !0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.C(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$E_?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$ET();
    } catch (s) {
      throw t = !1, this._$ET(), s;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$E_?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$ET() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach(t => this._$EO(t, this[t])), this._$ET();
  }
  updated(t) {}
  firstUpdated(t) {}
};
b$1.elementStyles = [], b$1.shadowRootOptions = {
  mode: "open"
}, b$1[d$1("elementProperties")] = new Map(), b$1[d$1("finalized")] = new Map(), p$1?.({
  ReactiveElement: b$1
}), (a$1.reactiveElementVersions ??= []).push("2.0.2");

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
  h = `lit$${(Math.random() + "").slice(9)}$`,
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
    t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : u(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r$1.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === e) this._$AH.p(i);else {
      const t = new S(e, this),
        s = t.u(this.options);
      t.p(i), this.$(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = A.get(t.strings);
    return void 0 === i && A.set(t.strings, i = new V(t)), i;
  }
  T(t) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const h of t) e === i.length ? i.push(s = new M(this.k(l()), this.k(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
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
    o && !e && this.O(t);
  }
  O(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t) {
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
Z?.(V, M), (t.litHtmlVersions ??= []).push("3.1.0");
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
(globalThis.litElementVersions ??= []).push("4.0.2");

function ascending$2(a, b) {
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
    compare1 = ascending$2;
    compare2 = (d, x) => ascending$2(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending$2 || f === descending ? f : zero$1;
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

const ascendingBisect = bisector(ascending$2);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;

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

function extent(values, valueof) {
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

function identity$6(x) {
  return x;
}

var array$3 = Array.prototype;
var slice$1 = array$3.slice;

function constant$5(x) {
  return () => x;
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

function nice(start, stop, count) {
  let prestep;
  while (true) {
    const step = tickIncrement(start, stop, count);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}

function thresholdSturges(values) {
  return Math.max(1, Math.ceil(Math.log(count(values)) / Math.LN2) + 1);
}

function bin() {
  var value = identity$6,
    domain = extent,
    threshold = thresholdSturges;
  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i,
      n = data.length,
      x,
      step,
      values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values),
      x0 = xz[0],
      x1 = xz[1],
      tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds, and nice the
    // default domain accordingly.
    if (!Array.isArray(tz)) {
      const max = x1,
        tn = +tz;
      if (domain === extent) [x0, x1] = nice(x0, x1, tn);
      tz = ticks(x0, x1, tn);

      // If the domain is aligned with the first tick (which it will by
      // default), then we can use quantization rather than bisection to bin
      // values, which is substantially faster.
      if (tz[0] <= x0) step = tickIncrement(x0, x1, tn);

      // If the last threshold is coincident with the domain’s upper bound, the
      // last bin will be zero-width. If the default domain is used, and this
      // last threshold is coincident with the maximum input value, we can
      // extend the niced upper bound by one tick to ensure uniform bin widths;
      // otherwise, we simply remove the last threshold. Note that we don’t
      // coerce values or the domain to numbers, and thus must be careful to
      // compare order (>=) rather than strict equality (===)!
      if (tz[tz.length - 1] >= x1) {
        if (max >= x1 && domain === extent) {
          const step = tickIncrement(x0, x1, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }

    // Remove any thresholds outside the domain.
    // Be careful not to mutate an array owned by the user!
    var m = tz.length,
      a = 0,
      b = m;
    while (tz[a] <= x0) ++a;
    while (tz[b - 1] > x1) --b;
    if (a || b < m) tz = tz.slice(a, b), m = b - a;
    var bins = new Array(m + 1),
      bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    if (isFinite(step)) {
      if (step > 0) {
        for (i = 0; i < n; ++i) {
          if ((x = values[i]) != null && x0 <= x && x <= x1) {
            bins[Math.min(m, Math.floor((x - x0) / step))].push(data[i]);
          }
        }
      } else if (step < 0) {
        for (i = 0; i < n; ++i) {
          if ((x = values[i]) != null && x0 <= x && x <= x1) {
            const j = Math.floor((x0 - x) * step);
            bins[Math.min(m, j + (tz[j] <= x))].push(data[i]); // handle off-by-one due to rounding
          }
        }
      }
    } else {
      for (i = 0; i < n; ++i) {
        if ((x = values[i]) != null && x0 <= x && x <= x1) {
          bins[bisectRight(tz, x, 0, m)].push(data[i]);
        }
      }
    }
    return bins;
  }
  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$5(_), histogram) : value;
  };
  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant$5([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : constant$5(Array.isArray(_) ? slice$1.call(_) : _), histogram) : threshold;
  };
  return histogram;
}

function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
    n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
    range = new Array(n);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}

function identity$5 (x) {
  return x;
}

var top = 1,
  right = 2,
  bottom = 3,
  left = 4,
  epsilon$2 = 1e-6;
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
      format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$5 : tickFormat,
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
      tickExit = tickExit.transition(context).attr("opacity", epsilon$2).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon$2).attr("transform", function (d) {
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
function array$2(x) {
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
    return array$2(select.apply(this, arguments));
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
  if (!compare) compare = ascending$1;
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
function ascending$1(a, b) {
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
  return b == null || t === "boolean" ? constant$2(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}

function interpolateRound (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees$1 = 180 / Math.PI;
var identity$4 = {
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
  return m.isIdentity ? identity$4 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$4;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$4;
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

function cubicIn(t) {
  return t * t * t;
}
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

const pi$1 = Math.PI,
  tau$1 = 2 * pi$1,
  epsilon$1 = 1e-6,
  tauEpsilon = tau$1 - epsilon$1;
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
    else if (!(l01_2 > epsilon$1)) ;

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
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
        l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
        t01 = l / l01,
        t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
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
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$1 + tau$1;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._append`A${r},${r},0,${+(da >= pi$1)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

var array$1 = Array.prototype;
var slice = array$1.slice;

function ascending (a, b) {
  return a - b;
}

function area (ring) {
  var i = 0,
    n = ring.length,
    area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
}

var constant$1 = (x => () => x);

function contains (ring, hole) {
  var i = -1,
    n = hole.length,
    c;
  while (++i < n) if (c = ringContains(ring, hole[i])) return c;
  return 0;
}
function ringContains(ring, point) {
  var x = point[0],
    y = point[1],
    contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i],
      xi = pi[0],
      yi = pi[1],
      pj = ring[j],
      xj = pj[0],
      yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
  }
  return contains;
}
function segmentContains(a, b, c) {
  var i;
  return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}
function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}
function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

function noop$1 () {}

var cases = [[], [[[1.0, 1.5], [0.5, 1.0]]], [[[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [0.5, 1.0]]], [[[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 0.5], [1.0, 1.5]]], [[[1.0, 0.5], [0.5, 1.0]]], [[[0.5, 1.0], [1.0, 0.5]]], [[[1.0, 1.5], [1.0, 0.5]]], [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [1.0, 0.5]]], [[[0.5, 1.0], [1.5, 1.0]]], [[[1.0, 1.5], [1.5, 1.0]]], [[[0.5, 1.0], [1.0, 1.5]]], []];
function Contours () {
  var dx = 1,
    dy = 1,
    threshold = thresholdSturges,
    smooth = smoothLinear;
  function contours(values) {
    var tz = threshold(values);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      const e = extent(values, finite);
      tz = ticks(...nice(e[0], e[1], tz), tz);
      while (tz[tz.length - 1] >= e[1]) tz.pop();
      while (tz[1] < e[0]) tz.shift();
    } else {
      tz = tz.slice().sort(ascending);
    }
    return tz.map(value => contour(values, value));
  }

  // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
  function contour(values, value) {
    const v = value == null ? NaN : +value;
    if (isNaN(v)) throw new Error(`invalid value: ${value}`);
    var polygons = [],
      holes = [];
    isorings(values, v, function (ring) {
      smooth(ring, values, v);
      if (area(ring) > 0) polygons.push([ring]);else holes.push(ring);
    });
    holes.forEach(function (hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  }

  // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
  function isorings(values, value, callback) {
    var fragmentByStart = new Array(),
      fragmentByEnd = new Array(),
      x,
      y,
      t0,
      t1,
      t2,
      t3;

    // Special case for the first row (y = -1, t2 = t3 = 0).
    x = y = -1;
    t1 = above(values[0], value);
    cases[t1 << 1].forEach(stitch);
    while (++x < dx - 1) {
      t0 = t1, t1 = above(values[x + 1], value);
      cases[t0 | t1 << 1].forEach(stitch);
    }
    cases[t1 << 0].forEach(stitch);

    // General case for the intermediate rows.
    while (++y < dy - 1) {
      x = -1;
      t1 = above(values[y * dx + dx], value);
      t2 = above(values[y * dx], value);
      cases[t1 << 1 | t2 << 2].forEach(stitch);
      while (++x < dx - 1) {
        t0 = t1, t1 = above(values[y * dx + dx + x + 1], value);
        t3 = t2, t2 = above(values[y * dx + x + 1], value);
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t1 | t2 << 3].forEach(stitch);
    }

    // Special case for the last row (y = dy - 1, t0 = t1 = 0).
    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);
    while (++x < dx - 1) {
      t3 = t2, t2 = above(values[y * dx + x + 1], value);
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);
    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
        end = [line[1][0] + x, line[1][1] + y],
        startIndex = index(start),
        endIndex = index(end),
        f,
        g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {
              start: f.start,
              end: g.end,
              ring: f.ring.concat(g.ring)
            };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {
              start: g.start,
              end: f.end,
              ring: g.ring.concat(f.ring)
            };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
          start: startIndex,
          end: endIndex,
          ring: [start, end]
        };
      }
    }
  }
  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }
  function smoothLinear(ring, values, value) {
    ring.forEach(function (point) {
      var x = point[0],
        y = point[1],
        xt = x | 0,
        yt = y | 0,
        v1 = valid(values[yt * dx + xt]);
      if (x > 0 && x < dx && xt === x) {
        point[0] = smooth1(x, valid(values[yt * dx + xt - 1]), v1, value);
      }
      if (y > 0 && y < dy && yt === y) {
        point[1] = smooth1(y, valid(values[(yt - 1) * dx + xt]), v1, value);
      }
    });
  }
  contours.contour = contour;
  contours.size = function (_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.floor(_[0]),
      _1 = Math.floor(_[1]);
    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };
  contours.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$1(slice.call(_)) : constant$1(_), contours) : threshold;
  };
  contours.smooth = function (_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop$1, contours) : smooth === smoothLinear;
  };
  return contours;
}

// When computing the extent, ignore infinite values (as well as invalid ones).
function finite(x) {
  return isFinite(x) ? x : NaN;
}

// Is the (possibly invalid) x greater than or equal to the (known valid) value?
// Treat any invalid value as below negative infinity.
function above(x, value) {
  return x == null ? false : +x >= value;
}

// During smoothing, treat any invalid value as negative infinity.
function valid(v) {
  return v == null || isNaN(v = +v) ? -Infinity : v;
}
function smooth1(x, v0, v1, value) {
  const a = value - v0;
  const b = v1 - v0;
  const d = isFinite(a) || isFinite(b) ? a / b : Math.sign(a) / Math.sign(b);
  return isNaN(d) ? x : x + d - 0.5;
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

function identity$3 (x) {
  return x;
}

var map = Array.prototype.map,
  prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$3 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
    currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals = locale.numerals === undefined ? identity$3 : formatNumerals(map.call(locale.numerals, String)),
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

var epsilon = 1e-6;
var pi = Math.PI;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;

function noop() {}

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
    lineEnd: noop,
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
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
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
      p1[0] += 2 * epsilon;
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
    return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
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

var identity$2 = (x => x);

var areaSum = new Adder(),
  areaRingSum = new Adder(),
  x00$2,
  y00$2,
  x0$3,
  y0$3;
var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function () {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop;
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
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
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
    z = sqrt(dx * dx + dy * dy);
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
    z = sqrt(dx * dx + dy * dy);
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
          this._context.arc(x, y, this._radius, 0, tau);
          break;
        }
    }
  },
  result: noop
};

var lengthSum = new Adder(),
  lengthRing,
  x00,
  y00,
  x0,
  y0;
var lengthStream = {
  point: noop,
  lineStart: function () {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function () {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = noop;
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
  lengthSum.add(sqrt(x0 * x0 + y0 * y0));
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

function index (projection, context) {
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
    projectionStream = _ == null ? (projection = null, identity$2) : (projection = _).stream;
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

function transformer$1(methods) {
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

function identity$1 () {
  var k = 1,
    tx = 0,
    ty = 0,
    sx = 1,
    sy = 1,
    // scale, translate and reflect
    alpha = 0,
    ca,
    sa,
    // angle
    x0 = null,
    y0,
    x1,
    y1,
    // clip extent
    kx = 1,
    ky = 1,
    transform = transformer$1({
      point: function (x, y) {
        var p = projection([x, y]);
        this.stream.point(p[0], p[1]);
      }
    }),
    postclip = identity$2,
    cache,
    cacheStream;
  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection;
  }
  function projection(p) {
    var x = p[0] * kx,
      y = p[1] * ky;
    if (alpha) {
      var t = y * ca - x * sa;
      x = x * ca + y * sa;
      y = t;
    }
    return [x + tx, y + ty];
  }
  projection.invert = function (p) {
    var x = p[0] - tx,
      y = p[1] - ty;
    if (alpha) {
      var t = y * ca + x * sa;
      x = x * ca - y * sa;
      y = t;
    }
    return [x / kx, y / ky];
  };
  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
  };
  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };
  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$2) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  projection.scale = function (_) {
    return arguments.length ? (k = +_, reset()) : k;
  };
  projection.translate = function (_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees;
  };
  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
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
  return projection;
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
        <input type="range" id="slider" min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @change=${this.changed.bind(this)} @input=${this.inputted.bind(this)}>
      </div>
      <decidables-spinner min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}></decidables-spinner>
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

        /* stylelint-disable-next-line selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,
        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {
          box-shadow: var(---shadow-8);
        }
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
  Attribute: Space-separated sequence of numbers
  Property: Array of numbers
*/
const DecidablesConverterArray = {
  fromAttribute: value => {
    return value.split(/\s+/).map(item => {
      return Number.parseFloat(item);
    });
  },
  toAttribute: value => {
    return value.length ? value.map(item => {
      return item.toFixed(3);
    }).join(' ') : null;
  }
};

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
  DetectableElement Base Class - Not intended for instantiation!
  <detectable-element>
*/
class DetectableElement extends DecidablesElement {
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
      h: Set1[2],
      m: Set1[4],
      fa: Set1[1],
      cr: Set1[0],
      hr: Set1[5],
      far: Set1[3],
      acc: Set1[8],
      d: Set1[7],
      c: Set1[6],
      s: '#4545d0',
      present: '#f032e6',
      absent: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
      nr: '#cccccc'
    };
  }
  static get lights() {
    return Object.keys(DetectableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(DetectableElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }
  static get darks() {
    return Object.keys(DetectableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(DetectableElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }
  static get styles() {
    return [super.styles, i$2`
        :host {
          ---color-h: var(--color-h, ${r$3(this.colors.h)});
          ---color-m: var(--color-m, ${r$3(this.colors.m)});
          ---color-fa: var(--color-fa, ${r$3(this.colors.fa)});
          ---color-cr: var(--color-cr, ${r$3(this.colors.cr)});
          ---color-hr: var(--color-hr, ${r$3(this.colors.hr)});
          ---color-far: var(--color-far, ${r$3(this.colors.far)});
          ---color-acc: var(--color-acc, ${r$3(this.colors.acc)});
          ---color-d: var(--color-d, ${r$3(this.colors.d)});
          ---color-c: var(--color-c, ${r$3(this.colors.c)});
          ---color-s: var(--color-s, ${r$3(this.colors.s)});
          ---color-present: var(--color-present, ${r$3(this.colors.present)});
          ---color-absent: var(--color-absent, ${r$3(this.colors.absent)});
          ---color-correct: var(--color-correct, ${r$3(this.colors.correct)});
          ---color-error: var(--color-error, ${r$3(this.colors.error)});
          ---color-nr: var(--color-nr, ${r$3(this.colors.nr)});

          ---color-h-light: var(--color-h-light, ${r$3(this.lights.h)});
          ---color-m-light: var(--color-m-light, ${r$3(this.lights.m)});
          ---color-fa-light: var(--color-fa-light, ${r$3(this.lights.fa)});
          ---color-cr-light: var(--color-cr-light, ${r$3(this.lights.cr)});
          ---color-hr-light: var(--color-hr-light, ${r$3(this.lights.hr)});
          ---color-far-light: var(--color-far-light, ${r$3(this.lights.far)});
          ---color-acc-light: var(--color-acc-light, ${r$3(this.lights.acc)});
          ---color-d-light: var(--color-d-light, ${r$3(this.lights.d)});
          ---color-c-light: var(--color-c-light, ${r$3(this.lights.c)});
          ---color-s-light: var(--color-s-light, ${r$3(this.lights.s)});
          ---color-present-light: var(--color-present-light, ${r$3(this.lights.present)});
          ---color-absent-light: var(--color-absent-light, ${r$3(this.lights.absent)});
          ---color-correct-light: var(--color-correct-light, ${r$3(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${r$3(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${r$3(this.lights.nr)});

          ---color-h-dark: var(--color-h-dark, ${r$3(this.darks.h)});
          ---color-m-dark: var(--color-m-dark, ${r$3(this.darks.m)});
          ---color-fa-dark: var(--color-fa-dark, ${r$3(this.darks.fa)});
          ---color-cr-dark: var(--color-cr-dark, ${r$3(this.darks.cr)});
          ---color-hr-dark: var(--color-hr-dark, ${r$3(this.darks.hr)});
          ---color-far-dark: var(--color-far-dark, ${r$3(this.darks.far)});
          ---color-acc-dark: var(--color-acc-dark, ${r$3(this.darks.acc)});
          ---color-d-dark: var(--color-d-dark, ${r$3(this.darks.d)});
          ---color-c-dark: var(--color-c-dark, ${r$3(this.darks.c)});
          ---color-s-dark: var(--color-s-dark, ${r$3(this.darks.s)});
          ---color-present-dark: var(--color-present-dark, ${r$3(this.darks.present)});
          ---color-absent-dark: var(--color-absent-dark, ${r$3(this.darks.absent)});
          ---color-correct-dark: var(--color-correct-dark, ${r$3(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${r$3(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${r$3(this.darks.nr)});
        }
      `];
  }
}

/*
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
class RDKTask extends DecidablesMixinResizeable(DetectableElement) {
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
      direction: {
        attribute: false,
        type: Number,
        reflect: false
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
    this.probability = 0.5; // Probability of signal (as opposed to noise)
    this.duration = 2000; // Duration of stimulus in milliseconds
    this.wait = 2000; // Duration of wait period for response in milliseconds
    this.iti = 2000; // Duration of inter-trial interval in milliseconds
    this.trials = 5; // Number of trials per block
    this.running = false; // Currently executing block of trials

    // Properties
    this.direction = -1; // Direction of current trial in degrees
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
    this.currentDirection = undefined; // Direction in degrees for current trial

    this.signals = ['present', 'absent']; // Possible trial types
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
      this.signal = Math.random() < this.probability ? 'present' : 'absent';
      this.currentDirection = this.signal === 'absent' ? undefined : this.direction >= 0 ? this.direction : Math.random() * 360;
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
      this.dots[this.COHERENT].length = this.signal === 'present' ? Math.round(this.count * this.coherence) : 0;
      this.dots[this.RANDOM].length = this.signal === 'present' ? this.count - this.dots[this.COHERENT].length : this.count;
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
customElements.define('rdk-task', RDKTask);

var jstat = {exports: {}};

(function (module, exports) {
  (function (window, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function () {
    var jStat = function (Math, undefined$1) {
      // For quick reference.
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var toString = Object.prototype.toString;

      // Calculate correction for IEEE error
      // TODO: This calculation can be improved.
      function calcRdx(n, m) {
        var val = n > m ? n : m;
        return Math.pow(10, 17 - ~~(Math.log(val > 0 ? val : -val) * Math.LOG10E));
      }
      var isArray = Array.isArray || function isArray(arg) {
        return toString.call(arg) === '[object Array]';
      };
      function isFunction(arg) {
        return toString.call(arg) === '[object Function]';
      }
      function isNumber(num) {
        return typeof num === 'number' ? num - num === 0 : false;
      }

      // Converts the jStat matrix to vector.
      function toVector(arr) {
        return concat.apply([], arr);
      }

      // The one and only jStat constructor.
      function jStat() {
        return new jStat._init(arguments);
      }

      // TODO: Remove after all references in src files have been removed.
      jStat.fn = jStat.prototype;

      // By separating the initializer from the constructor it's easier to handle
      // always returning a new instance whether "new" was used or not.
      jStat._init = function _init(args) {
        // If first argument is an array, must be vector or matrix.
        if (isArray(args[0])) {
          // Check if matrix.
          if (isArray(args[0][0])) {
            // See if a mapping function was also passed.
            if (isFunction(args[1])) args[0] = jStat.map(args[0], args[1]);
            // Iterate over each is faster than this.push.apply(this, args[0].
            for (var i = 0; i < args[0].length; i++) this[i] = args[0][i];
            this.length = args[0].length;

            // Otherwise must be a vector.
          } else {
            this[0] = isFunction(args[1]) ? jStat.map(args[0], args[1]) : args[0];
            this.length = 1;
          }

          // If first argument is number, assume creation of sequence.
        } else if (isNumber(args[0])) {
          this[0] = jStat.seq.apply(null, args);
          this.length = 1;

          // Handle case when jStat object is passed to jStat.
        } else if (args[0] instanceof jStat) {
          // Duplicate the object and pass it back.
          return jStat(args[0].toArray());

          // Unexpected argument value, return empty jStat object.
          // TODO: This is strange behavior. Shouldn't this throw or some such to let
          // the user know they had bad arguments?
        } else {
          this[0] = [];
          this.length = 1;
        }
        return this;
      };
      jStat._init.prototype = jStat.prototype;
      jStat._init.constructor = jStat;

      // Utility functions.
      // TODO: for internal use only?
      jStat.utils = {
        calcRdx: calcRdx,
        isArray: isArray,
        isFunction: isFunction,
        isNumber: isNumber,
        toVector: toVector
      };
      jStat._random_fn = Math.random;
      jStat.setRandom = function setRandom(fn) {
        if (typeof fn !== 'function') throw new TypeError('fn is not a function');
        jStat._random_fn = fn;
      };

      // Easily extend the jStat object.
      // TODO: is this seriously necessary?
      jStat.extend = function extend(obj) {
        var i, j;
        if (arguments.length === 1) {
          for (j in obj) jStat[j] = obj[j];
          return this;
        }
        for (i = 1; i < arguments.length; i++) {
          for (j in arguments[i]) obj[j] = arguments[i][j];
        }
        return obj;
      };

      // Returns the number of rows in the matrix.
      jStat.rows = function rows(arr) {
        return arr.length || 1;
      };

      // Returns the number of columns in the matrix.
      jStat.cols = function cols(arr) {
        return arr[0].length || 1;
      };

      // Returns the dimensions of the object { rows: i, cols: j }
      jStat.dimensions = function dimensions(arr) {
        return {
          rows: jStat.rows(arr),
          cols: jStat.cols(arr)
        };
      };

      // Returns a specified row as a vector or return a sub matrix by pick some rows
      jStat.row = function row(arr, index) {
        if (isArray(index)) {
          return index.map(function (i) {
            return jStat.row(arr, i);
          });
        }
        return arr[index];
      };

      // return row as array
      // rowa([[1,2],[3,4]],0) -> [1,2]
      jStat.rowa = function rowa(arr, i) {
        return jStat.row(arr, i);
      };

      // Returns the specified column as a vector or return a sub matrix by pick some
      // columns
      jStat.col = function col(arr, index) {
        if (isArray(index)) {
          var submat = jStat.arange(arr.length).map(function () {
            return new Array(index.length);
          });
          index.forEach(function (ind, i) {
            jStat.arange(arr.length).forEach(function (j) {
              submat[j][i] = arr[j][ind];
            });
          });
          return submat;
        }
        var column = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) column[i] = [arr[i][index]];
        return column;
      };

      // return column as array
      // cola([[1,2],[3,4]],0) -> [1,3]
      jStat.cola = function cola(arr, i) {
        return jStat.col(arr, i).map(function (a) {
          return a[0];
        });
      };

      // Returns the diagonal of the matrix
      jStat.diag = function diag(arr) {
        var nrow = jStat.rows(arr);
        var res = new Array(nrow);
        for (var row = 0; row < nrow; row++) res[row] = [arr[row][row]];
        return res;
      };

      // Returns the anti-diagonal of the matrix
      jStat.antidiag = function antidiag(arr) {
        var nrow = jStat.rows(arr) - 1;
        var res = new Array(nrow);
        for (var i = 0; nrow >= 0; nrow--, i++) res[i] = [arr[i][nrow]];
        return res;
      };

      // Transpose a matrix or array.
      jStat.transpose = function transpose(arr) {
        var obj = [];
        var objArr, rows, cols, j, i;

        // Make sure arr is in matrix format.
        if (!isArray(arr[0])) arr = [arr];
        rows = arr.length;
        cols = arr[0].length;
        for (i = 0; i < cols; i++) {
          objArr = new Array(rows);
          for (j = 0; j < rows; j++) objArr[j] = arr[j][i];
          obj.push(objArr);
        }

        // If obj is vector, return only single array.
        return obj.length === 1 ? obj[0] : obj;
      };

      // Map a function to an array or array of arrays.
      // "toAlter" is an internal variable.
      jStat.map = function map(arr, func, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray(arr[0])) arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);
        for (row = 0; row < nrow; row++) {
          // if the row doesn't exist, create it
          if (!res[row]) res[row] = new Array(ncol);
          for (col = 0; col < ncol; col++) res[row][col] = func(arr[row][col], row, col);
        }
        return res.length === 1 ? res[0] : res;
      };

      // Cumulatively combine the elements of an array or array of arrays using a function.
      jStat.cumreduce = function cumreduce(arr, func, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray(arr[0])) arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);
        for (row = 0; row < nrow; row++) {
          // if the row doesn't exist, create it
          if (!res[row]) res[row] = new Array(ncol);
          if (ncol > 0) res[row][0] = arr[row][0];
          for (col = 1; col < ncol; col++) res[row][col] = func(res[row][col - 1], arr[row][col]);
        }
        return res.length === 1 ? res[0] : res;
      };

      // Destructively alter an array.
      jStat.alter = function alter(arr, func) {
        return jStat.map(arr, func, true);
      };

      // Generate a rows x cols matrix according to the supplied function.
      jStat.create = function create(rows, cols, func) {
        var res = new Array(rows);
        var i, j;
        if (isFunction(cols)) {
          func = cols;
          cols = rows;
        }
        for (i = 0; i < rows; i++) {
          res[i] = new Array(cols);
          for (j = 0; j < cols; j++) res[i][j] = func(i, j);
        }
        return res;
      };
      function retZero() {
        return 0;
      }

      // Generate a rows x cols matrix of zeros.
      jStat.zeros = function zeros(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retZero);
      };
      function retOne() {
        return 1;
      }

      // Generate a rows x cols matrix of ones.
      jStat.ones = function ones(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retOne);
      };

      // Generate a rows x cols matrix of uniformly random numbers.
      jStat.rand = function rand(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, jStat._random_fn);
      };
      function retIdent(i, j) {
        return i === j ? 1 : 0;
      }

      // Generate an identity matrix of size row x cols.
      jStat.identity = function identity(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retIdent);
      };

      // Tests whether a matrix is symmetric
      jStat.symmetric = function symmetric(arr) {
        var size = arr.length;
        var row, col;
        if (arr.length !== arr[0].length) return false;
        for (row = 0; row < size; row++) {
          for (col = 0; col < size; col++) if (arr[col][row] !== arr[row][col]) return false;
        }
        return true;
      };

      // Set all values to zero.
      jStat.clear = function clear(arr) {
        return jStat.alter(arr, retZero);
      };

      // Generate sequence.
      jStat.seq = function seq(min, max, length, func) {
        if (!isFunction(func)) func = false;
        var arr = [];
        var hival = calcRdx(min, max);
        var step = (max * hival - min * hival) / ((length - 1) * hival);
        var current = min;
        var cnt;

        // Current is assigned using a technique to compensate for IEEE error.
        // TODO: Needs better implementation.
        for (cnt = 0; current <= max && cnt < length; cnt++, current = (min * hival + step * hival * cnt) / hival) {
          arr.push(func ? func(current, cnt) : current);
        }
        return arr;
      };

      // arange(5) -> [0,1,2,3,4]
      // arange(1,5) -> [1,2,3,4]
      // arange(5,1,-1) -> [5,4,3,2]
      jStat.arange = function arange(start, end, step) {
        var rl = [];
        var i;
        step = step || 1;
        if (end === undefined$1) {
          end = start;
          start = 0;
        }
        if (start === end || step === 0) {
          return [];
        }
        if (start < end && step < 0) {
          return [];
        }
        if (start > end && step > 0) {
          return [];
        }
        if (step > 0) {
          for (i = start; i < end; i += step) {
            rl.push(i);
          }
        } else {
          for (i = start; i > end; i += step) {
            rl.push(i);
          }
        }
        return rl;
      };

      // A=[[1,2,3],[4,5,6],[7,8,9]]
      // slice(A,{row:{end:2},col:{start:1}}) -> [[2,3],[5,6]]
      // slice(A,1,{start:1}) -> [5,6]
      // as numpy code A[:2,1:]
      jStat.slice = function () {
        function _slice(list, start, end, step) {
          // note it's not equal to range.map mode it's a bug
          var i;
          var rl = [];
          var length = list.length;
          if (start === undefined$1 && end === undefined$1 && step === undefined$1) {
            return jStat.copy(list);
          }
          start = start || 0;
          end = end || list.length;
          start = start >= 0 ? start : length + start;
          end = end >= 0 ? end : length + end;
          step = step || 1;
          if (start === end || step === 0) {
            return [];
          }
          if (start < end && step < 0) {
            return [];
          }
          if (start > end && step > 0) {
            return [];
          }
          if (step > 0) {
            for (i = start; i < end; i += step) {
              rl.push(list[i]);
            }
          } else {
            for (i = start; i > end; i += step) {
              rl.push(list[i]);
            }
          }
          return rl;
        }
        function slice(list, rcSlice) {
          var colSlice, rowSlice;
          rcSlice = rcSlice || {};
          if (isNumber(rcSlice.row)) {
            if (isNumber(rcSlice.col)) return list[rcSlice.row][rcSlice.col];
            var row = jStat.rowa(list, rcSlice.row);
            colSlice = rcSlice.col || {};
            return _slice(row, colSlice.start, colSlice.end, colSlice.step);
          }
          if (isNumber(rcSlice.col)) {
            var col = jStat.cola(list, rcSlice.col);
            rowSlice = rcSlice.row || {};
            return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);
          }
          rowSlice = rcSlice.row || {};
          colSlice = rcSlice.col || {};
          var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);
          return rows.map(function (row) {
            return _slice(row, colSlice.start, colSlice.end, colSlice.step);
          });
        }
        return slice;
      }();

      // A=[[1,2,3],[4,5,6],[7,8,9]]
      // sliceAssign(A,{row:{start:1},col:{start:1}},[[0,0],[0,0]])
      // A=[[1,2,3],[4,0,0],[7,0,0]]
      jStat.sliceAssign = function sliceAssign(A, rcSlice, B) {
        var nl, ml;
        if (isNumber(rcSlice.row)) {
          if (isNumber(rcSlice.col)) return A[rcSlice.row][rcSlice.col] = B;
          rcSlice.col = rcSlice.col || {};
          rcSlice.col.start = rcSlice.col.start || 0;
          rcSlice.col.end = rcSlice.col.end || A[0].length;
          rcSlice.col.step = rcSlice.col.step || 1;
          nl = jStat.arange(rcSlice.col.start, Math.min(A.length, rcSlice.col.end), rcSlice.col.step);
          var m = rcSlice.row;
          nl.forEach(function (n, i) {
            A[m][n] = B[i];
          });
          return A;
        }
        if (isNumber(rcSlice.col)) {
          rcSlice.row = rcSlice.row || {};
          rcSlice.row.start = rcSlice.row.start || 0;
          rcSlice.row.end = rcSlice.row.end || A.length;
          rcSlice.row.step = rcSlice.row.step || 1;
          ml = jStat.arange(rcSlice.row.start, Math.min(A[0].length, rcSlice.row.end), rcSlice.row.step);
          var n = rcSlice.col;
          ml.forEach(function (m, j) {
            A[m][n] = B[j];
          });
          return A;
        }
        if (B[0].length === undefined$1) {
          B = [B];
        }
        rcSlice.row.start = rcSlice.row.start || 0;
        rcSlice.row.end = rcSlice.row.end || A.length;
        rcSlice.row.step = rcSlice.row.step || 1;
        rcSlice.col.start = rcSlice.col.start || 0;
        rcSlice.col.end = rcSlice.col.end || A[0].length;
        rcSlice.col.step = rcSlice.col.step || 1;
        ml = jStat.arange(rcSlice.row.start, Math.min(A.length, rcSlice.row.end), rcSlice.row.step);
        nl = jStat.arange(rcSlice.col.start, Math.min(A[0].length, rcSlice.col.end), rcSlice.col.step);
        ml.forEach(function (m, i) {
          nl.forEach(function (n, j) {
            A[m][n] = B[i][j];
          });
        });
        return A;
      };

      // [1,2,3] ->
      // [[1,0,0],[0,2,0],[0,0,3]]
      jStat.diagonal = function diagonal(diagArray) {
        var mat = jStat.zeros(diagArray.length, diagArray.length);
        diagArray.forEach(function (t, i) {
          mat[i][i] = t;
        });
        return mat;
      };

      // return copy of A
      jStat.copy = function copy(A) {
        return A.map(function (row) {
          if (isNumber(row)) return row;
          return row.map(function (t) {
            return t;
          });
        });
      };

      // TODO: Go over this entire implementation. Seems a tragic waste of resources
      // doing all this work. Instead, and while ugly, use new Function() to generate
      // a custom function for each static method.

      // Quick reference.
      var jProto = jStat.prototype;

      // Default length.
      jProto.length = 0;

      // For internal use only.
      // TODO: Check if they're actually used, and if they are then rename them
      // to _*
      jProto.push = Array.prototype.push;
      jProto.sort = Array.prototype.sort;
      jProto.splice = Array.prototype.splice;
      jProto.slice = Array.prototype.slice;

      // Return a clean array.
      jProto.toArray = function toArray() {
        return this.length > 1 ? slice.call(this) : slice.call(this)[0];
      };

      // Map a function to a matrix or vector.
      jProto.map = function map(func, toAlter) {
        return jStat(jStat.map(this, func, toAlter));
      };

      // Cumulatively combine the elements of a matrix or vector using a function.
      jProto.cumreduce = function cumreduce(func, toAlter) {
        return jStat(jStat.cumreduce(this, func, toAlter));
      };

      // Destructively alter an array.
      jProto.alter = function alter(func) {
        jStat.alter(this, func);
        return this;
      };

      // Extend prototype with methods that have no argument.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function (func) {
            var self = this,
              results;
            // Check for callback.
            if (func) {
              setTimeout(function () {
                func.call(self, jProto[passfunc].call(self));
              });
              return this;
            }
            results = jStat[passfunc](this);
            return isArray(results) ? jStat(results) : results;
          };
        })(funcs[i]);
      })('transpose clear symmetric rows cols dimensions diag antidiag'.split(' '));

      // Extend prototype with methods that have one argument.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function (index, func) {
            var self = this;
            // check for callback
            if (func) {
              setTimeout(function () {
                func.call(self, jProto[passfunc].call(self, index));
              });
              return this;
            }
            return jStat(jStat[passfunc](this, index));
          };
        })(funcs[i]);
      })('row col'.split(' '));

      // Extend prototype with simple shortcut methods.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function () {
            return jStat(jStat[passfunc].apply(null, arguments));
          };
        })(funcs[i]);
      })('create zeros ones rand identity'.split(' '));

      // Exposing jStat.
      return jStat;
    }(Math);
    (function (jStat, Math) {
      var isFunction = jStat.utils.isFunction;

      // Ascending functions for sort
      function ascNum(a, b) {
        return a - b;
      }
      function clip(arg, min, max) {
        return Math.max(min, Math.min(arg, max));
      }

      // sum of an array
      jStat.sum = function sum(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >= 0) sum += arr[i];
        return sum;
      };

      // sum squared
      jStat.sumsqrd = function sumsqrd(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >= 0) sum += arr[i] * arr[i];
        return sum;
      };

      // sum of squared errors of prediction (SSE)
      jStat.sumsqerr = function sumsqerr(arr) {
        var mean = jStat.mean(arr);
        var sum = 0;
        var i = arr.length;
        var tmp;
        while (--i >= 0) {
          tmp = arr[i] - mean;
          sum += tmp * tmp;
        }
        return sum;
      };

      // sum of an array in each row
      jStat.sumrow = function sumrow(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >= 0) sum += arr[i];
        return sum;
      };

      // product of an array
      jStat.product = function product(arr) {
        var prod = 1;
        var i = arr.length;
        while (--i >= 0) prod *= arr[i];
        return prod;
      };

      // minimum value of an array
      jStat.min = function min(arr) {
        var low = arr[0];
        var i = 0;
        while (++i < arr.length) if (arr[i] < low) low = arr[i];
        return low;
      };

      // maximum value of an array
      jStat.max = function max(arr) {
        var high = arr[0];
        var i = 0;
        while (++i < arr.length) if (arr[i] > high) high = arr[i];
        return high;
      };

      // unique values of an array
      jStat.unique = function unique(arr) {
        var hash = {},
          _arr = [];
        for (var i = 0; i < arr.length; i++) {
          if (!hash[arr[i]]) {
            hash[arr[i]] = true;
            _arr.push(arr[i]);
          }
        }
        return _arr;
      };

      // mean value of an array
      jStat.mean = function mean(arr) {
        return jStat.sum(arr) / arr.length;
      };

      // mean squared error (MSE)
      jStat.meansqerr = function meansqerr(arr) {
        return jStat.sumsqerr(arr) / arr.length;
      };

      // geometric mean of an array
      jStat.geomean = function geomean(arr) {
        var logs = arr.map(Math.log);
        var meanOfLogs = jStat.mean(logs);
        return Math.exp(meanOfLogs);
      };

      // median of an array
      jStat.median = function median(arr) {
        var arrlen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        // check if array is even or odd, then return the appropriate
        return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
      };

      // cumulative sum of an array
      jStat.cumsum = function cumsum(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a + b;
        });
      };

      // cumulative product of an array
      jStat.cumprod = function cumprod(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a * b;
        });
      };

      // successive differences of a sequence
      jStat.diff = function diff(arr) {
        var diffs = [];
        var arrLen = arr.length;
        var i;
        for (i = 1; i < arrLen; i++) diffs.push(arr[i] - arr[i - 1]);
        return diffs;
      };

      // ranks of an array
      jStat.rank = function (arr) {
        var i;
        var distinctNumbers = [];
        var numberCounts = {};
        for (i = 0; i < arr.length; i++) {
          var number = arr[i];
          if (numberCounts[number]) {
            numberCounts[number]++;
          } else {
            numberCounts[number] = 1;
            distinctNumbers.push(number);
          }
        }
        var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
        var numberRanks = {};
        var currentRank = 1;
        for (i = 0; i < sortedDistinctNumbers.length; i++) {
          var number = sortedDistinctNumbers[i];
          var count = numberCounts[number];
          var first = currentRank;
          var last = currentRank + count - 1;
          var rank = (first + last) / 2;
          numberRanks[number] = rank;
          currentRank += count;
        }
        return arr.map(function (number) {
          return numberRanks[number];
        });
      };

      // mode of an array
      // if there are multiple modes of an array, return all of them
      // is this the appropriate way of handling it?
      jStat.mode = function mode(arr) {
        var arrLen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        var count = 1;
        var maxCount = 0;
        var numMaxCount = 0;
        var mode_arr = [];
        var i;
        for (i = 0; i < arrLen; i++) {
          if (_arr[i] === _arr[i + 1]) {
            count++;
          } else {
            if (count > maxCount) {
              mode_arr = [_arr[i]];
              maxCount = count;
              numMaxCount = 0;
            }
            // are there multiple max counts
            else if (count === maxCount) {
              mode_arr.push(_arr[i]);
              numMaxCount++;
            }
            // resetting count for new value in array
            count = 1;
          }
        }
        return numMaxCount === 0 ? mode_arr[0] : mode_arr;
      };

      // range of an array
      jStat.range = function range(arr) {
        return jStat.max(arr) - jStat.min(arr);
      };

      // variance of an array
      // flag = true indicates sample instead of population
      jStat.variance = function variance(arr, flag) {
        return jStat.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
      };

      // pooled variance of an array of arrays
      jStat.pooledvariance = function pooledvariance(arr) {
        var sumsqerr = arr.reduce(function (a, samples) {
          return a + jStat.sumsqerr(samples);
        }, 0);
        var count = arr.reduce(function (a, samples) {
          return a + samples.length;
        }, 0);
        return sumsqerr / (count - arr.length);
      };

      // deviation of an array
      jStat.deviation = function (arr) {
        var mean = jStat.mean(arr);
        var arrlen = arr.length;
        var dev = new Array(arrlen);
        for (var i = 0; i < arrlen; i++) {
          dev[i] = arr[i] - mean;
        }
        return dev;
      };

      // standard deviation of an array
      // flag = true indicates sample instead of population
      jStat.stdev = function stdev(arr, flag) {
        return Math.sqrt(jStat.variance(arr, flag));
      };

      // pooled standard deviation of an array of arrays
      jStat.pooledstdev = function pooledstdev(arr) {
        return Math.sqrt(jStat.pooledvariance(arr));
      };

      // mean deviation (mean absolute deviation) of an array
      jStat.meandev = function meandev(arr) {
        var mean = jStat.mean(arr);
        var a = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - mean));
        }
        return jStat.mean(a);
      };

      // median deviation (median absolute deviation) of an array
      jStat.meddev = function meddev(arr) {
        var median = jStat.median(arr);
        var a = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - median));
        }
        return jStat.median(a);
      };

      // coefficient of variation
      jStat.coeffvar = function coeffvar(arr) {
        return jStat.stdev(arr) / jStat.mean(arr);
      };

      // quartiles of an array
      jStat.quartiles = function quartiles(arr) {
        var arrlen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        return [_arr[Math.round(arrlen / 4) - 1], _arr[Math.round(arrlen / 2) - 1], _arr[Math.round(arrlen * 3 / 4) - 1]];
      };

      // Arbitary quantiles of an array. Direct port of the scipy.stats
      // implementation by Pierre GF Gerard-Marchant.
      jStat.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
        var sortedArray = arr.slice().sort(ascNum);
        var quantileVals = [quantilesArray.length];
        var n = arr.length;
        var i, p, m, aleph, k, gamma;
        if (typeof alphap === 'undefined') alphap = 3 / 8;
        if (typeof betap === 'undefined') betap = 3 / 8;
        for (i = 0; i < quantilesArray.length; i++) {
          p = quantilesArray[i];
          m = alphap + p * (1 - alphap - betap);
          aleph = n * p + m;
          k = Math.floor(clip(aleph, 1, n - 1));
          gamma = clip(aleph - k, 0, 1);
          quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k];
        }
        return quantileVals;
      };

      // Return the k-th percentile of values in a range, where k is in the range 0..1, inclusive.
      // Passing true for the exclusive parameter excludes both endpoints of the range.
      jStat.percentile = function percentile(arr, k, exclusive) {
        var _arr = arr.slice().sort(ascNum);
        var realIndex = k * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
        var index = parseInt(realIndex);
        var frac = realIndex - index;
        if (index + 1 < _arr.length) {
          return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1]);
        } else {
          return _arr[index - 1];
        }
      };

      // The percentile rank of score in a given array. Returns the percentage
      // of all values in the input array that are less than (kind='strict') or
      // less or equal than (kind='weak') score. Default is weak.
      jStat.percentileOfScore = function percentileOfScore(arr, score, kind) {
        var counter = 0;
        var len = arr.length;
        var strict = false;
        var value, i;
        if (kind === 'strict') strict = true;
        for (i = 0; i < len; i++) {
          value = arr[i];
          if (strict && value < score || !strict && value <= score) {
            counter++;
          }
        }
        return counter / len;
      };

      // Histogram (bin count) data
      jStat.histogram = function histogram(arr, binCnt) {
        binCnt = binCnt || 4;
        var first = jStat.min(arr);
        var binWidth = (jStat.max(arr) - first) / binCnt;
        var len = arr.length;
        var bins = [];
        var i;
        for (i = 0; i < binCnt; i++) bins[i] = 0;
        for (i = 0; i < len; i++) bins[Math.min(Math.floor((arr[i] - first) / binWidth), binCnt - 1)] += 1;
        return bins;
      };

      // covariance of two arrays
      jStat.covariance = function covariance(arr1, arr2) {
        var u = jStat.mean(arr1);
        var v = jStat.mean(arr2);
        var arr1Len = arr1.length;
        var sq_dev = new Array(arr1Len);
        var i;
        for (i = 0; i < arr1Len; i++) sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);
        return jStat.sum(sq_dev) / (arr1Len - 1);
      };

      // (pearson's) population correlation coefficient, rho
      jStat.corrcoeff = function corrcoeff(arr1, arr2) {
        return jStat.covariance(arr1, arr2) / jStat.stdev(arr1, 1) / jStat.stdev(arr2, 1);
      };

      // (spearman's) rank correlation coefficient, sp
      jStat.spearmancoeff = function (arr1, arr2) {
        arr1 = jStat.rank(arr1);
        arr2 = jStat.rank(arr2);
        //return pearson's correlation of the ranks:
        return jStat.corrcoeff(arr1, arr2);
      };

      // statistical standardized moments (general form of skew/kurt)
      jStat.stanMoment = function stanMoment(arr, n) {
        var mu = jStat.mean(arr);
        var sigma = jStat.stdev(arr);
        var len = arr.length;
        var skewSum = 0;
        for (var i = 0; i < len; i++) skewSum += Math.pow((arr[i] - mu) / sigma, n);
        return skewSum / arr.length;
      };

      // (pearson's) moment coefficient of skewness
      jStat.skewness = function skewness(arr) {
        return jStat.stanMoment(arr, 3);
      };

      // (pearson's) (excess) kurtosis
      jStat.kurtosis = function kurtosis(arr) {
        return jStat.stanMoment(arr, 4) - 3;
      };
      var jProto = jStat.prototype;

      // Extend jProto with method for calculating cumulative sums and products.
      // This differs from the similar extension below as cumsum and cumprod should
      // not be run again in the case fullbool === true.
      // If a matrix is passed, automatically assume operation should be done on the
      // columns.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          // If a matrix is passed, automatically assume operation should be done on
          // the columns.
          jProto[passfunc] = function (fullbool, func) {
            var arr = [];
            var i = 0;
            var tmpthis = this;
            // Assignment reassignation depending on how parameters were passed in.
            if (isFunction(fullbool)) {
              func = fullbool;
              fullbool = false;
            }
            // Check if a callback was passed with the function.
            if (func) {
              setTimeout(function () {
                func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
              });
              return this;
            }
            // Check if matrix and run calculations.
            if (this.length > 1) {
              tmpthis = fullbool === true ? this : this.transpose();
              for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);
              return arr;
            }
            // Pass fullbool if only vector, not a matrix. for variance and stdev.
            return jStat[passfunc](this[0], fullbool);
          };
        })(funcs[i]);
      })('cumsum cumprod'.split(' '));

      // Extend jProto with methods which don't require arguments and work on columns.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          // If a matrix is passed, automatically assume operation should be done on
          // the columns.
          jProto[passfunc] = function (fullbool, func) {
            var arr = [];
            var i = 0;
            var tmpthis = this;
            // Assignment reassignation depending on how parameters were passed in.
            if (isFunction(fullbool)) {
              func = fullbool;
              fullbool = false;
            }
            // Check if a callback was passed with the function.
            if (func) {
              setTimeout(function () {
                func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
              });
              return this;
            }
            // Check if matrix and run calculations.
            if (this.length > 1) {
              if (passfunc !== 'sumrow') tmpthis = fullbool === true ? this : this.transpose();
              for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);
              return fullbool === true ? jStat[passfunc](jStat.utils.toVector(arr)) : arr;
            }
            // Pass fullbool if only vector, not a matrix. for variance and stdev.
            return jStat[passfunc](this[0], fullbool);
          };
        })(funcs[i]);
      })(('sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr ' + 'geomean median diff rank mode range variance deviation stdev meandev ' + 'meddev coeffvar quartiles histogram skewness kurtosis').split(' '));

      // Extend jProto with functions that take arguments. Operations on matrices are
      // done on columns.
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function () {
            var arr = [];
            var i = 0;
            var tmpthis = this;
            var args = Array.prototype.slice.call(arguments);
            var callbackFunction;

            // If the last argument is a function, we assume it's a callback; we
            // strip the callback out and call the function again.
            if (isFunction(args[args.length - 1])) {
              callbackFunction = args[args.length - 1];
              var argsToPass = args.slice(0, args.length - 1);
              setTimeout(function () {
                callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass));
              });
              return this;

              // Otherwise we curry the function args and call normally.
            } else {
              callbackFunction = undefined;
              var curriedFunction = function curriedFunction(vector) {
                return jStat[passfunc].apply(tmpthis, [vector].concat(args));
              };
            }

            // If this is a matrix, run column-by-column.
            if (this.length > 1) {
              tmpthis = tmpthis.transpose();
              for (; i < tmpthis.length; i++) arr[i] = curriedFunction(tmpthis[i]);
              return arr;
            }

            // Otherwise run on the vector.
            return curriedFunction(this[0]);
          };
        })(funcs[i]);
      })('quantiles percentileOfScore'.split(' '));
    })(jStat, Math);
    // Special functions //
    (function (jStat, Math) {
      // Log-gamma function
      jStat.gammaln = function gammaln(x) {
        var j = 0;
        var cof = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
        var ser = 1.000000000190015;
        var xx, y, tmp;
        tmp = (y = xx = x) + 5.5;
        tmp -= (xx + 0.5) * Math.log(tmp);
        for (; j < 6; j++) ser += cof[j] / ++y;
        return Math.log(2.5066282746310005 * ser / xx) - tmp;
      };

      /*
       * log-gamma function to support poisson distribution sampling. The
       * algorithm comes from SPECFUN by Shanjie Zhang and Jianming Jin and their
       * book "Computation of Special Functions", 1996, John Wiley & Sons, Inc.
       */
      jStat.loggam = function loggam(x) {
        var x0, x2, xp, gl, gl0;
        var k, n;
        var a = [8.333333333333333e-02, -2.777777777777778e-03, 7.936507936507937e-04, -5.952380952380952e-04, 8.417508417508418e-04, -1.917526917526918e-03, 6.410256410256410e-03, -2.955065359477124e-02, 1.796443723688307e-01, -1.39243221690590e+00];
        x0 = x;
        n = 0;
        if (x == 1.0 || x == 2.0) {
          return 0.0;
        }
        if (x <= 7.0) {
          n = Math.floor(7 - x);
          x0 = x + n;
        }
        x2 = 1.0 / (x0 * x0);
        xp = 2 * Math.PI;
        gl0 = a[9];
        for (k = 8; k >= 0; k--) {
          gl0 *= x2;
          gl0 += a[k];
        }
        gl = gl0 / x0 + 0.5 * Math.log(xp) + (x0 - 0.5) * Math.log(x0) - x0;
        if (x <= 7.0) {
          for (k = 1; k <= n; k++) {
            gl -= Math.log(x0 - 1.0);
            x0 -= 1.0;
          }
        }
        return gl;
      };

      // gamma of x
      jStat.gammafn = function gammafn(x) {
        var p = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054];
        var q = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.118420980151, 4755.8462775278811, -134659.9598649693, -115132.2596755535];
        var fact = false;
        var n = 0;
        var xden = 0;
        var xnum = 0;
        var y = x;
        var i, z, yi, res;
        if (x > 171.6243769536076) {
          return Infinity;
        }
        if (y <= 0) {
          res = y % 1 + 3.6e-16;
          if (res) {
            fact = (!(y & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * res);
            y = 1 - y;
          } else {
            return Infinity;
          }
        }
        yi = y;
        if (y < 1) {
          z = y++;
        } else {
          z = (y -= n = (y | 0) - 1) - 1;
        }
        for (i = 0; i < 8; ++i) {
          xnum = (xnum + p[i]) * z;
          xden = xden * z + q[i];
        }
        res = xnum / xden + 1;
        if (yi < y) {
          res /= yi;
        } else if (yi > y) {
          for (i = 0; i < n; ++i) {
            res *= y;
            y++;
          }
        }
        if (fact) {
          res = fact / res;
        }
        return res;
      };

      // lower incomplete gamma function, which is usually typeset with a
      // lower-case greek gamma as the function symbol
      jStat.gammap = function gammap(a, x) {
        return jStat.lowRegGamma(a, x) * jStat.gammafn(a);
      };

      // The lower regularized incomplete gamma function, usually written P(a,x)
      jStat.lowRegGamma = function lowRegGamma(a, x) {
        var aln = jStat.gammaln(a);
        var ap = a;
        var sum = 1 / a;
        var del = sum;
        var b = x + 1 - a;
        var c = 1 / 1.0e-30;
        var d = 1 / b;
        var h = d;
        var i = 1;
        // calculate maximum number of itterations required for a
        var ITMAX = -~(Math.log(a >= 1 ? a : 1 / a) * 8.5 + a * 0.4 + 17);
        var an;
        if (x < 0 || a <= 0) {
          return NaN;
        } else if (x < a + 1) {
          for (; i <= ITMAX; i++) {
            sum += del *= x / ++ap;
          }
          return sum * Math.exp(-x + a * Math.log(x) - aln);
        }
        for (; i <= ITMAX; i++) {
          an = -i * (i - a);
          b += 2;
          d = an * d + b;
          c = b + an / c;
          d = 1 / d;
          h *= d * c;
        }
        return 1 - h * Math.exp(-x + a * Math.log(x) - aln);
      };

      // natural log factorial of n
      jStat.factorialln = function factorialln(n) {
        return n < 0 ? NaN : jStat.gammaln(n + 1);
      };

      // factorial of n
      jStat.factorial = function factorial(n) {
        return n < 0 ? NaN : jStat.gammafn(n + 1);
      };

      // combinations of n, m
      jStat.combination = function combination(n, m) {
        // make sure n or m don't exceed the upper limit of usable values
        return n > 170 || m > 170 ? Math.exp(jStat.combinationln(n, m)) : jStat.factorial(n) / jStat.factorial(m) / jStat.factorial(n - m);
      };
      jStat.combinationln = function combinationln(n, m) {
        return jStat.factorialln(n) - jStat.factorialln(m) - jStat.factorialln(n - m);
      };

      // permutations of n, m
      jStat.permutation = function permutation(n, m) {
        return jStat.factorial(n) / jStat.factorial(n - m);
      };

      // beta function
      jStat.betafn = function betafn(x, y) {
        // ensure arguments are positive
        if (x <= 0 || y <= 0) return undefined;
        // make sure x + y doesn't exceed the upper limit of usable values
        return x + y > 170 ? Math.exp(jStat.betaln(x, y)) : jStat.gammafn(x) * jStat.gammafn(y) / jStat.gammafn(x + y);
      };

      // natural logarithm of beta function
      jStat.betaln = function betaln(x, y) {
        return jStat.gammaln(x) + jStat.gammaln(y) - jStat.gammaln(x + y);
      };

      // Evaluates the continued fraction for incomplete beta function by modified
      // Lentz's method.
      jStat.betacf = function betacf(x, a, b) {
        var fpmin = 1e-30;
        var m = 1;
        var qab = a + b;
        var qap = a + 1;
        var qam = a - 1;
        var c = 1;
        var d = 1 - qab * x / qap;
        var m2, aa, del, h;

        // These q's will be used in factors that occur in the coefficients
        if (Math.abs(d) < fpmin) d = fpmin;
        d = 1 / d;
        h = d;
        for (; m <= 100; m++) {
          m2 = 2 * m;
          aa = m * (b - m) * x / ((qam + m2) * (a + m2));
          // One step (the even one) of the recurrence
          d = 1 + aa * d;
          if (Math.abs(d) < fpmin) d = fpmin;
          c = 1 + aa / c;
          if (Math.abs(c) < fpmin) c = fpmin;
          d = 1 / d;
          h *= d * c;
          aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
          // Next step of the recurrence (the odd one)
          d = 1 + aa * d;
          if (Math.abs(d) < fpmin) d = fpmin;
          c = 1 + aa / c;
          if (Math.abs(c) < fpmin) c = fpmin;
          d = 1 / d;
          del = d * c;
          h *= del;
          if (Math.abs(del - 1.0) < 3e-7) break;
        }
        return h;
      };

      // Returns the inverse of the lower regularized inomplete gamma function
      jStat.gammapinv = function gammapinv(p, a) {
        var j = 0;
        var a1 = a - 1;
        var EPS = 1e-8;
        var gln = jStat.gammaln(a);
        var x, err, t, u, pp, lna1, afac;
        if (p >= 1) return Math.max(100, a + 100 * Math.sqrt(a));
        if (p <= 0) return 0;
        if (a > 1) {
          lna1 = Math.log(a1);
          afac = Math.exp(a1 * (lna1 - 1) - gln);
          pp = p < 0.5 ? p : 1 - p;
          t = Math.sqrt(-2 * Math.log(pp));
          x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
          if (p < 0.5) x = -x;
          x = Math.max(1e-3, a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));
        } else {
          t = 1 - a * (0.253 + a * 0.12);
          if (p < t) x = Math.pow(p / t, 1 / a);else x = 1 - Math.log(1 - (p - t) / (1 - t));
        }
        for (; j < 12; j++) {
          if (x <= 0) return 0;
          err = jStat.lowRegGamma(a, x) - p;
          if (a > 1) t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));else t = Math.exp(-x + a1 * Math.log(x) - gln);
          u = err / t;
          x -= t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1)));
          if (x <= 0) x = 0.5 * (x + t);
          if (Math.abs(t) < EPS * x) break;
        }
        return x;
      };

      // Returns the error function erf(x)
      jStat.erf = function erf(x) {
        var cof = [-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2, -9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4, 4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6, 1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 9.6467911e-11, 2.394038e-12, -6.886027e-12, 8.94487e-13, 3.13092e-13, -1.12708e-13, 3.81e-16, 7.106e-15, -1.523e-15, -9.4e-17, 1.21e-16, -2.8e-17];
        var j = cof.length - 1;
        var isneg = false;
        var d = 0;
        var dd = 0;
        var t, ty, tmp, res;
        if (x < 0) {
          x = -x;
          isneg = true;
        }
        t = 2 / (2 + x);
        ty = 4 * t - 2;
        for (; j > 0; j--) {
          tmp = d;
          d = ty * d - dd + cof[j];
          dd = tmp;
        }
        res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
        return isneg ? res - 1 : 1 - res;
      };

      // Returns the complmentary error function erfc(x)
      jStat.erfc = function erfc(x) {
        return 1 - jStat.erf(x);
      };

      // Returns the inverse of the complementary error function
      jStat.erfcinv = function erfcinv(p) {
        var j = 0;
        var x, err, t, pp;
        if (p >= 2) return -100;
        if (p <= 0) return 100;
        pp = p < 1 ? p : 2 - p;
        t = Math.sqrt(-2 * Math.log(pp / 2));
        x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);
        for (; j < 2; j++) {
          err = jStat.erfc(x) - pp;
          x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);
        }
        return p < 1 ? x : -x;
      };

      // Returns the inverse of the incomplete beta function
      jStat.ibetainv = function ibetainv(p, a, b) {
        var EPS = 1e-8;
        var a1 = a - 1;
        var b1 = b - 1;
        var j = 0;
        var lna, lnb, pp, t, u, err, x, al, h, w, afac;
        if (p <= 0) return 0;
        if (p >= 1) return 1;
        if (a >= 1 && b >= 1) {
          pp = p < 0.5 ? p : 1 - p;
          t = Math.sqrt(-2 * Math.log(pp));
          x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
          if (p < 0.5) x = -x;
          al = (x * x - 3) / 6;
          h = 2 / (1 / (2 * a - 1) + 1 / (2 * b - 1));
          w = x * Math.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
          x = a / (a + b * Math.exp(2 * w));
        } else {
          lna = Math.log(a / (a + b));
          lnb = Math.log(b / (a + b));
          t = Math.exp(a * lna) / a;
          u = Math.exp(b * lnb) / b;
          w = t + u;
          if (p < t / w) x = Math.pow(a * w * p, 1 / a);else x = 1 - Math.pow(b * w * (1 - p), 1 / b);
        }
        afac = -jStat.gammaln(a) - jStat.gammaln(b) + jStat.gammaln(a + b);
        for (; j < 10; j++) {
          if (x === 0 || x === 1) return x;
          err = jStat.ibeta(x, a, b) - p;
          t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
          u = err / t;
          x -= t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x))));
          if (x <= 0) x = 0.5 * (x + t);
          if (x >= 1) x = 0.5 * (x + t + 1);
          if (Math.abs(t) < EPS * x && j > 0) break;
        }
        return x;
      };

      // Returns the incomplete beta function I_x(a,b)
      jStat.ibeta = function ibeta(x, a, b) {
        // Factors in front of the continued fraction.
        var bt = x === 0 || x === 1 ? 0 : Math.exp(jStat.gammaln(a + b) - jStat.gammaln(a) - jStat.gammaln(b) + a * Math.log(x) + b * Math.log(1 - x));
        if (x < 0 || x > 1) return false;
        if (x < (a + 1) / (a + b + 2))
          // Use continued fraction directly.
          return bt * jStat.betacf(x, a, b) / a;
        // else use continued fraction after making the symmetry transformation.
        return 1 - bt * jStat.betacf(1 - x, b, a) / b;
      };

      // Returns a normal deviate (mu=0, sigma=1).
      // If n and m are specified it returns a object of normal deviates.
      jStat.randn = function randn(n, m) {
        var u, v, x, y, q;
        if (!m) m = n;
        if (n) return jStat.create(n, m, function () {
          return jStat.randn();
        });
        do {
          u = jStat._random_fn();
          v = 1.7156 * (jStat._random_fn() - 0.5);
          x = u - 0.449871;
          y = Math.abs(v) + 0.386595;
          q = x * x + y * (0.19600 * y - 0.25472 * x);
        } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));
        return v / u;
      };

      // Returns a gamma deviate by the method of Marsaglia and Tsang.
      jStat.randg = function randg(shape, n, m) {
        var oalph = shape;
        var a1, a2, u, v, x, mat;
        if (!m) m = n;
        if (!shape) shape = 1;
        if (n) {
          mat = jStat.zeros(n, m);
          mat.alter(function () {
            return jStat.randg(shape);
          });
          return mat;
        }
        if (shape < 1) shape += 1;
        a1 = shape - 1 / 3;
        a2 = 1 / Math.sqrt(9 * a1);
        do {
          do {
            x = jStat.randn();
            v = 1 + a2 * x;
          } while (v <= 0);
          v = v * v * v;
          u = jStat._random_fn();
        } while (u > 1 - 0.331 * Math.pow(x, 4) && Math.log(u) > 0.5 * x * x + a1 * (1 - v + Math.log(v)));
        // alpha > 1
        if (shape == oalph) return a1 * v;
        // alpha < 1
        do {
          u = jStat._random_fn();
        } while (u === 0);
        return Math.pow(u, 1 / oalph) * a1 * v;
      };

      // making use of static methods on the instance
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jStat.fn[passfunc] = function () {
            return jStat(jStat.map(this, function (value) {
              return jStat[passfunc](value);
            }));
          };
        })(funcs[i]);
      })('gammaln gammafn factorial factorialln'.split(' '));
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jStat.fn[passfunc] = function () {
            return jStat(jStat[passfunc].apply(null, arguments));
          };
        })(funcs[i]);
      })('randn'.split(' '));
    })(jStat, Math);
    (function (jStat, Math) {
      // generate all distribution instance methods
      (function (list) {
        for (var i = 0; i < list.length; i++) (function (func) {
          // distribution instance method
          jStat[func] = function f(a, b, c) {
            if (!(this instanceof f)) return new f(a, b, c);
            this._a = a;
            this._b = b;
            this._c = c;
            return this;
          };
          // distribution method to be used on a jStat instance
          jStat.fn[func] = function (a, b, c) {
            var newthis = jStat[func](a, b, c);
            newthis.data = this;
            return newthis;
          };
          // sample instance method
          jStat[func].prototype.sample = function (arr) {
            var a = this._a;
            var b = this._b;
            var c = this._c;
            if (arr) return jStat.alter(arr, function () {
              return jStat[func].sample(a, b, c);
            });else return jStat[func].sample(a, b, c);
          };
          // generate the pdf, cdf and inv instance methods
          (function (vals) {
            for (var i = 0; i < vals.length; i++) (function (fnfunc) {
              jStat[func].prototype[fnfunc] = function (x) {
                var a = this._a;
                var b = this._b;
                var c = this._c;
                if (!x && x !== 0) x = this.data;
                if (typeof x !== 'number') {
                  return jStat.fn.map.call(x, function (x) {
                    return jStat[func][fnfunc](x, a, b, c);
                  });
                }
                return jStat[func][fnfunc](x, a, b, c);
              };
            })(vals[i]);
          })('pdf cdf inv'.split(' '));
          // generate the mean, median, mode and variance instance methods
          (function (vals) {
            for (var i = 0; i < vals.length; i++) (function (fnfunc) {
              jStat[func].prototype[fnfunc] = function () {
                return jStat[func][fnfunc](this._a, this._b, this._c);
              };
            })(vals[i]);
          })('mean median mode variance'.split(' '));
        })(list[i]);
      })(('beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy ' + 'laplace lognormal noncentralt normal pareto studentt weibull uniform ' + 'binomial negbin hypgeom poisson triangular tukey arcsine').split(' '));

      // extend beta function with static methods
      jStat.extend(jStat.beta, {
        pdf: function pdf(x, alpha, beta) {
          // PDF is zero outside the support
          if (x > 1 || x < 0) return 0;
          // PDF is one for the uniform case
          if (alpha == 1 && beta == 1) return 1;
          if (alpha < 512 && beta < 512) {
            return Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1) / jStat.betafn(alpha, beta);
          } else {
            return Math.exp((alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - x) - jStat.betaln(alpha, beta));
          }
        },
        cdf: function cdf(x, alpha, beta) {
          return x > 1 || x < 0 ? (x > 1) * 1 : jStat.ibeta(x, alpha, beta);
        },
        inv: function inv(x, alpha, beta) {
          return jStat.ibetainv(x, alpha, beta);
        },
        mean: function mean(alpha, beta) {
          return alpha / (alpha + beta);
        },
        median: function median(alpha, beta) {
          return jStat.ibetainv(0.5, alpha, beta);
        },
        mode: function mode(alpha, beta) {
          return (alpha - 1) / (alpha + beta - 2);
        },
        // return a random sample
        sample: function sample(alpha, beta) {
          var u = jStat.randg(alpha);
          return u / (u + jStat.randg(beta));
        },
        variance: function variance(alpha, beta) {
          return alpha * beta / (Math.pow(alpha + beta, 2) * (alpha + beta + 1));
        }
      });

      // extend F function with static methods
      jStat.extend(jStat.centralF, {
        // This implementation of the pdf function avoids float overflow
        // See the way that R calculates this value:
        // https://svn.r-project.org/R/trunk/src/nmath/df.c
        pdf: function pdf(x, df1, df2) {
          var p, q, f;
          if (x < 0) return 0;
          if (df1 <= 2) {
            if (x === 0 && df1 < 2) {
              return Infinity;
            }
            if (x === 0 && df1 === 2) {
              return 1;
            }
            return 1 / jStat.betafn(df1 / 2, df2 / 2) * Math.pow(df1 / df2, df1 / 2) * Math.pow(x, df1 / 2 - 1) * Math.pow(1 + df1 / df2 * x, -(df1 + df2) / 2);
          }
          p = df1 * x / (df2 + x * df1);
          q = df2 / (df2 + x * df1);
          f = df1 * q / 2.0;
          return f * jStat.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p);
        },
        cdf: function cdf(x, df1, df2) {
          if (x < 0) return 0;
          return jStat.ibeta(df1 * x / (df1 * x + df2), df1 / 2, df2 / 2);
        },
        inv: function inv(x, df1, df2) {
          return df2 / (df1 * (1 / jStat.ibetainv(x, df1 / 2, df2 / 2) - 1));
        },
        mean: function mean(df1, df2) {
          return df2 > 2 ? df2 / (df2 - 2) : undefined;
        },
        mode: function mode(df1, df2) {
          return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : undefined;
        },
        // return a random sample
        sample: function sample(df1, df2) {
          var x1 = jStat.randg(df1 / 2) * 2;
          var x2 = jStat.randg(df2 / 2) * 2;
          return x1 / df1 / (x2 / df2);
        },
        variance: function variance(df1, df2) {
          if (df2 <= 4) return undefined;
          return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));
        }
      });

      // extend cauchy function with static methods
      jStat.extend(jStat.cauchy, {
        pdf: function pdf(x, local, scale) {
          if (scale < 0) {
            return 0;
          }
          return scale / (Math.pow(x - local, 2) + Math.pow(scale, 2)) / Math.PI;
        },
        cdf: function cdf(x, local, scale) {
          return Math.atan((x - local) / scale) / Math.PI + 0.5;
        },
        inv: function (p, local, scale) {
          return local + scale * Math.tan(Math.PI * (p - 0.5));
        },
        median: function median(local /*, scale*/) {
          return local;
        },
        mode: function mode(local /*, scale*/) {
          return local;
        },
        sample: function sample(local, scale) {
          return jStat.randn() * Math.sqrt(1 / (2 * jStat.randg(0.5))) * scale + local;
        }
      });

      // extend chisquare function with static methods
      jStat.extend(jStat.chisquare, {
        pdf: function pdf(x, dof) {
          if (x < 0) return 0;
          return x === 0 && dof === 2 ? 0.5 : Math.exp((dof / 2 - 1) * Math.log(x) - x / 2 - dof / 2 * Math.log(2) - jStat.gammaln(dof / 2));
        },
        cdf: function cdf(x, dof) {
          if (x < 0) return 0;
          return jStat.lowRegGamma(dof / 2, x / 2);
        },
        inv: function (p, dof) {
          return 2 * jStat.gammapinv(p, 0.5 * dof);
        },
        mean: function (dof) {
          return dof;
        },
        // TODO: this is an approximation (is there a better way?)
        median: function median(dof) {
          return dof * Math.pow(1 - 2 / (9 * dof), 3);
        },
        mode: function mode(dof) {
          return dof - 2 > 0 ? dof - 2 : 0;
        },
        sample: function sample(dof) {
          return jStat.randg(dof / 2) * 2;
        },
        variance: function variance(dof) {
          return 2 * dof;
        }
      });

      // extend exponential function with static methods
      jStat.extend(jStat.exponential, {
        pdf: function pdf(x, rate) {
          return x < 0 ? 0 : rate * Math.exp(-rate * x);
        },
        cdf: function cdf(x, rate) {
          return x < 0 ? 0 : 1 - Math.exp(-rate * x);
        },
        inv: function (p, rate) {
          return -Math.log(1 - p) / rate;
        },
        mean: function (rate) {
          return 1 / rate;
        },
        median: function (rate) {
          return 1 / rate * Math.log(2);
        },
        mode: function mode( /*rate*/
        ) {
          return 0;
        },
        sample: function sample(rate) {
          return -1 / rate * Math.log(jStat._random_fn());
        },
        variance: function (rate) {
          return Math.pow(rate, -2);
        }
      });

      // extend gamma function with static methods
      jStat.extend(jStat.gamma, {
        pdf: function pdf(x, shape, scale) {
          if (x < 0) return 0;
          return x === 0 && shape === 1 ? 1 / scale : Math.exp((shape - 1) * Math.log(x) - x / scale - jStat.gammaln(shape) - shape * Math.log(scale));
        },
        cdf: function cdf(x, shape, scale) {
          if (x < 0) return 0;
          return jStat.lowRegGamma(shape, x / scale);
        },
        inv: function (p, shape, scale) {
          return jStat.gammapinv(p, shape) * scale;
        },
        mean: function (shape, scale) {
          return shape * scale;
        },
        mode: function mode(shape, scale) {
          if (shape > 1) return (shape - 1) * scale;
          return undefined;
        },
        sample: function sample(shape, scale) {
          return jStat.randg(shape) * scale;
        },
        variance: function variance(shape, scale) {
          return shape * scale * scale;
        }
      });

      // extend inverse gamma function with static methods
      jStat.extend(jStat.invgamma, {
        pdf: function pdf(x, shape, scale) {
          if (x <= 0) return 0;
          return Math.exp(-(shape + 1) * Math.log(x) - scale / x - jStat.gammaln(shape) + shape * Math.log(scale));
        },
        cdf: function cdf(x, shape, scale) {
          if (x <= 0) return 0;
          return 1 - jStat.lowRegGamma(shape, scale / x);
        },
        inv: function (p, shape, scale) {
          return scale / jStat.gammapinv(1 - p, shape);
        },
        mean: function (shape, scale) {
          return shape > 1 ? scale / (shape - 1) : undefined;
        },
        mode: function mode(shape, scale) {
          return scale / (shape + 1);
        },
        sample: function sample(shape, scale) {
          return scale / jStat.randg(shape);
        },
        variance: function variance(shape, scale) {
          if (shape <= 2) return undefined;
          return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));
        }
      });

      // extend kumaraswamy function with static methods
      jStat.extend(jStat.kumaraswamy, {
        pdf: function pdf(x, alpha, beta) {
          if (x === 0 && alpha === 1) return beta;else if (x === 1 && beta === 1) return alpha;
          return Math.exp(Math.log(alpha) + Math.log(beta) + (alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - Math.pow(x, alpha)));
        },
        cdf: function cdf(x, alpha, beta) {
          if (x < 0) return 0;else if (x > 1) return 1;
          return 1 - Math.pow(1 - Math.pow(x, alpha), beta);
        },
        inv: function inv(p, alpha, beta) {
          return Math.pow(1 - Math.pow(1 - p, 1 / beta), 1 / alpha);
        },
        mean: function (alpha, beta) {
          return beta * jStat.gammafn(1 + 1 / alpha) * jStat.gammafn(beta) / jStat.gammafn(1 + 1 / alpha + beta);
        },
        median: function median(alpha, beta) {
          return Math.pow(1 - Math.pow(2, -1 / beta), 1 / alpha);
        },
        mode: function mode(alpha, beta) {
          if (!(alpha >= 1 && beta >= 1 && alpha !== 1 && beta !== 1)) return undefined;
          return Math.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);
        },
        variance: function variance( /*alpha, beta*/
        ) {
          throw new Error('variance not yet implemented');
          // TODO: complete this
        }
      });

      // extend lognormal function with static methods
      jStat.extend(jStat.lognormal, {
        pdf: function pdf(x, mu, sigma) {
          if (x <= 0) return 0;
          return Math.exp(-Math.log(x) - 0.5 * Math.log(2 * Math.PI) - Math.log(sigma) - Math.pow(Math.log(x) - mu, 2) / (2 * sigma * sigma));
        },
        cdf: function cdf(x, mu, sigma) {
          if (x < 0) return 0;
          return 0.5 + 0.5 * jStat.erf((Math.log(x) - mu) / Math.sqrt(2 * sigma * sigma));
        },
        inv: function (p, mu, sigma) {
          return Math.exp(-1.41421356237309505 * sigma * jStat.erfcinv(2 * p) + mu);
        },
        mean: function mean(mu, sigma) {
          return Math.exp(mu + sigma * sigma / 2);
        },
        median: function median(mu /*, sigma*/) {
          return Math.exp(mu);
        },
        mode: function mode(mu, sigma) {
          return Math.exp(mu - sigma * sigma);
        },
        sample: function sample(mu, sigma) {
          return Math.exp(jStat.randn() * sigma + mu);
        },
        variance: function variance(mu, sigma) {
          return (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma);
        }
      });

      // extend noncentralt function with static methods
      jStat.extend(jStat.noncentralt, {
        pdf: function pdf(x, dof, ncp) {
          var tol = 1e-14;
          if (Math.abs(ncp) < tol)
            // ncp approx 0; use student-t
            return jStat.studentt.pdf(x, dof);
          if (Math.abs(x) < tol) {
            // different formula for x == 0
            return Math.exp(jStat.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math.log(Math.PI * dof) - jStat.gammaln(dof / 2));
          }

          // formula for x != 0
          return dof / x * (jStat.noncentralt.cdf(x * Math.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat.noncentralt.cdf(x, dof, ncp));
        },
        cdf: function cdf(x, dof, ncp) {
          var tol = 1e-14;
          var min_iterations = 200;
          if (Math.abs(ncp) < tol)
            // ncp approx 0; use student-t
            return jStat.studentt.cdf(x, dof);

          // turn negative x into positive and flip result afterwards
          var flip = false;
          if (x < 0) {
            flip = true;
            ncp = -ncp;
          }
          var prob = jStat.normal.cdf(-ncp, 0, 1);
          var value = tol + 1;
          // use value at last two steps to determine convergence
          var lastvalue = value;
          var y = x * x / (x * x + dof);
          var j = 0;
          var p = Math.exp(-ncp * ncp / 2);
          var q = Math.exp(-ncp * ncp / 2 - 0.5 * Math.log(2) - jStat.gammaln(3 / 2)) * ncp;
          while (j < min_iterations || lastvalue > tol || value > tol) {
            lastvalue = value;
            if (j > 0) {
              p *= ncp * ncp / (2 * j);
              q *= ncp * ncp / (2 * (j + 1 / 2));
            }
            value = p * jStat.beta.cdf(y, j + 0.5, dof / 2) + q * jStat.beta.cdf(y, j + 1, dof / 2);
            prob += 0.5 * value;
            j++;
          }
          return flip ? 1 - prob : prob;
        }
      });

      // extend normal function with static methods
      jStat.extend(jStat.normal, {
        pdf: function pdf(x, mean, std) {
          return Math.exp(-0.5 * Math.log(2 * Math.PI) - Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));
        },
        cdf: function cdf(x, mean, std) {
          return 0.5 * (1 + jStat.erf((x - mean) / Math.sqrt(2 * std * std)));
        },
        inv: function (p, mean, std) {
          return -1.41421356237309505 * std * jStat.erfcinv(2 * p) + mean;
        },
        mean: function (mean /*, std*/) {
          return mean;
        },
        median: function median(mean /*, std*/) {
          return mean;
        },
        mode: function (mean /*, std*/) {
          return mean;
        },
        sample: function sample(mean, std) {
          return jStat.randn() * std + mean;
        },
        variance: function (mean, std) {
          return std * std;
        }
      });

      // extend pareto function with static methods
      jStat.extend(jStat.pareto, {
        pdf: function pdf(x, scale, shape) {
          if (x < scale) return 0;
          return shape * Math.pow(scale, shape) / Math.pow(x, shape + 1);
        },
        cdf: function cdf(x, scale, shape) {
          if (x < scale) return 0;
          return 1 - Math.pow(scale / x, shape);
        },
        inv: function inv(p, scale, shape) {
          return scale / Math.pow(1 - p, 1 / shape);
        },
        mean: function mean(scale, shape) {
          if (shape <= 1) return undefined;
          return shape * Math.pow(scale, shape) / (shape - 1);
        },
        median: function median(scale, shape) {
          return scale * (shape * Math.SQRT2);
        },
        mode: function mode(scale /*, shape*/) {
          return scale;
        },
        variance: function (scale, shape) {
          if (shape <= 2) return undefined;
          return scale * scale * shape / (Math.pow(shape - 1, 2) * (shape - 2));
        }
      });

      // extend studentt function with static methods
      jStat.extend(jStat.studentt, {
        pdf: function pdf(x, dof) {
          dof = dof > 1e100 ? 1e100 : dof;
          return 1 / (Math.sqrt(dof) * jStat.betafn(0.5, dof / 2)) * Math.pow(1 + x * x / dof, -((dof + 1) / 2));
        },
        cdf: function cdf(x, dof) {
          var dof2 = dof / 2;
          return jStat.ibeta((x + Math.sqrt(x * x + dof)) / (2 * Math.sqrt(x * x + dof)), dof2, dof2);
        },
        inv: function (p, dof) {
          var x = jStat.ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);
          x = Math.sqrt(dof * (1 - x) / x);
          return p > 0.5 ? x : -x;
        },
        mean: function mean(dof) {
          return dof > 1 ? 0 : undefined;
        },
        median: function median( /*dof*/
        ) {
          return 0;
        },
        mode: function mode( /*dof*/
        ) {
          return 0;
        },
        sample: function sample(dof) {
          return jStat.randn() * Math.sqrt(dof / (2 * jStat.randg(dof / 2)));
        },
        variance: function variance(dof) {
          return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : undefined;
        }
      });

      // extend weibull function with static methods
      jStat.extend(jStat.weibull, {
        pdf: function pdf(x, scale, shape) {
          if (x < 0 || scale < 0 || shape < 0) return 0;
          return shape / scale * Math.pow(x / scale, shape - 1) * Math.exp(-Math.pow(x / scale, shape));
        },
        cdf: function cdf(x, scale, shape) {
          return x < 0 ? 0 : 1 - Math.exp(-Math.pow(x / scale, shape));
        },
        inv: function (p, scale, shape) {
          return scale * Math.pow(-Math.log(1 - p), 1 / shape);
        },
        mean: function (scale, shape) {
          return scale * jStat.gammafn(1 + 1 / shape);
        },
        median: function median(scale, shape) {
          return scale * Math.pow(Math.log(2), 1 / shape);
        },
        mode: function mode(scale, shape) {
          if (shape <= 1) return 0;
          return scale * Math.pow((shape - 1) / shape, 1 / shape);
        },
        sample: function sample(scale, shape) {
          return scale * Math.pow(-Math.log(jStat._random_fn()), 1 / shape);
        },
        variance: function variance(scale, shape) {
          return scale * scale * jStat.gammafn(1 + 2 / shape) - Math.pow(jStat.weibull.mean(scale, shape), 2);
        }
      });

      // extend uniform function with static methods
      jStat.extend(jStat.uniform, {
        pdf: function pdf(x, a, b) {
          return x < a || x > b ? 0 : 1 / (b - a);
        },
        cdf: function cdf(x, a, b) {
          if (x < a) return 0;else if (x < b) return (x - a) / (b - a);
          return 1;
        },
        inv: function (p, a, b) {
          return a + p * (b - a);
        },
        mean: function mean(a, b) {
          return 0.5 * (a + b);
        },
        median: function median(a, b) {
          return jStat.mean(a, b);
        },
        mode: function mode( /*a, b*/
        ) {
          throw new Error('mode is not yet implemented');
        },
        sample: function sample(a, b) {
          return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat._random_fn() - 1);
        },
        variance: function variance(a, b) {
          return Math.pow(b - a, 2) / 12;
        }
      });

      // Got this from http://www.math.ucla.edu/~tom/distributions/binomial.html
      function betinc(x, a, b, eps) {
        var a0 = 0;
        var b0 = 1;
        var a1 = 1;
        var b1 = 1;
        var m9 = 0;
        var a2 = 0;
        var c9;
        while (Math.abs((a1 - a2) / a1) > eps) {
          a2 = a1;
          c9 = -(a + m9) * (a + b + m9) * x / (a + 2 * m9) / (a + 2 * m9 + 1);
          a0 = a1 + c9 * a0;
          b0 = b1 + c9 * b0;
          m9 = m9 + 1;
          c9 = m9 * (b - m9) * x / (a + 2 * m9 - 1) / (a + 2 * m9);
          a1 = a0 + c9 * a1;
          b1 = b0 + c9 * b1;
          a0 = a0 / b1;
          b0 = b0 / b1;
          a1 = a1 / b1;
          b1 = 1;
        }
        return a1 / a;
      }

      // extend uniform function with static methods
      jStat.extend(jStat.binomial, {
        pdf: function pdf(k, n, p) {
          return p === 0 || p === 1 ? n * p === k ? 1 : 0 : jStat.combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
        },
        cdf: function cdf(x, n, p) {
          var betacdf;
          var eps = 1e-10;
          if (x < 0) return 0;
          if (x >= n) return 1;
          if (p < 0 || p > 1 || n <= 0) return NaN;
          x = Math.floor(x);
          var z = p;
          var a = x + 1;
          var b = n - x;
          var s = a + b;
          var bt = Math.exp(jStat.gammaln(s) - jStat.gammaln(b) - jStat.gammaln(a) + a * Math.log(z) + b * Math.log(1 - z));
          if (z < (a + 1) / (s + 2)) betacdf = bt * betinc(z, a, b, eps);else betacdf = 1 - bt * betinc(1 - z, b, a, eps);
          return Math.round((1 - betacdf) * (1 / eps)) / (1 / eps);
        }
      });

      // extend uniform function with static methods
      jStat.extend(jStat.negbin, {
        pdf: function pdf(k, r, p) {
          if (k !== k >>> 0) return false;
          if (k < 0) return 0;
          return jStat.combination(k + r - 1, r - 1) * Math.pow(1 - p, k) * Math.pow(p, r);
        },
        cdf: function cdf(x, r, p) {
          var sum = 0,
            k = 0;
          if (x < 0) return 0;
          for (; k <= x; k++) {
            sum += jStat.negbin.pdf(k, r, p);
          }
          return sum;
        }
      });

      // extend uniform function with static methods
      jStat.extend(jStat.hypgeom, {
        pdf: function pdf(k, N, m, n) {
          // Hypergeometric PDF.

          // A simplification of the CDF algorithm below.

          // k = number of successes drawn
          // N = population size
          // m = number of successes in population
          // n = number of items drawn from population

          if (k !== k | 0) {
            return false;
          } else if (k < 0 || k < m - (N - n)) {
            // It's impossible to have this few successes drawn.
            return 0;
          } else if (k > n || k > m) {
            // It's impossible to have this many successes drawn.
            return 0;
          } else if (m * 2 > N) {
            // More than half the population is successes.

            if (n * 2 > N) {
              // More than half the population is sampled.

              return jStat.hypgeom.pdf(N - m - n + k, N, N - m, N - n);
            } else {
              // Half or less of the population is sampled.

              return jStat.hypgeom.pdf(n - k, N, N - m, n);
            }
          } else if (n * 2 > N) {
            // Half or less is successes.

            return jStat.hypgeom.pdf(m - k, N, m, N - n);
          } else if (m < n) {
            // We want to have the number of things sampled to be less than the
            // successes available. So swap the definitions of successful and sampled.
            return jStat.hypgeom.pdf(k, N, n, m);
          } else {
            // If we get here, half or less of the population was sampled, half or
            // less of it was successes, and we had fewer sampled things than
            // successes. Now we can do this complicated iterative algorithm in an
            // efficient way.

            // The basic premise of the algorithm is that we partially normalize our
            // intermediate product to keep it in a numerically good region, and then
            // finish the normalization at the end.

            // This variable holds the scaled probability of the current number of
            // successes.
            var scaledPDF = 1;

            // This keeps track of how much we have normalized.
            var samplesDone = 0;
            for (var i = 0; i < k; i++) {
              // For every possible number of successes up to that observed...

              while (scaledPDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.

                scaledPDF *= 1 - m / (N - samplesDone);

                // Say we've normalized by this sample already.
                samplesDone++;
              }

              // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes
              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
            }
            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledPDF *= 1 - m / (N - samplesDone);
            }

            // Bound answer sanely before returning.
            return Math.min(1, Math.max(0, scaledPDF));
          }
        },
        cdf: function cdf(x, N, m, n) {
          // Hypergeometric CDF.

          // This algorithm is due to Prof. Thomas S. Ferguson, <tom@math.ucla.edu>,
          // and comes from his hypergeometric test calculator at
          // <http://www.math.ucla.edu/~tom/distributions/Hypergeometric.html>.

          // x = number of successes drawn
          // N = population size
          // m = number of successes in population
          // n = number of items drawn from population

          if (x < 0 || x < m - (N - n)) {
            // It's impossible to have this few successes drawn or fewer.
            return 0;
          } else if (x >= n || x >= m) {
            // We will always have this many successes or fewer.
            return 1;
          } else if (m * 2 > N) {
            // More than half the population is successes.

            if (n * 2 > N) {
              // More than half the population is sampled.

              return jStat.hypgeom.cdf(N - m - n + x, N, N - m, N - n);
            } else {
              // Half or less of the population is sampled.

              return 1 - jStat.hypgeom.cdf(n - x - 1, N, N - m, n);
            }
          } else if (n * 2 > N) {
            // Half or less is successes.

            return 1 - jStat.hypgeom.cdf(m - x - 1, N, m, N - n);
          } else if (m < n) {
            // We want to have the number of things sampled to be less than the
            // successes available. So swap the definitions of successful and sampled.
            return jStat.hypgeom.cdf(x, N, n, m);
          } else {
            // If we get here, half or less of the population was sampled, half or
            // less of it was successes, and we had fewer sampled things than
            // successes. Now we can do this complicated iterative algorithm in an
            // efficient way.

            // The basic premise of the algorithm is that we partially normalize our
            // intermediate sum to keep it in a numerically good region, and then
            // finish the normalization at the end.

            // Holds the intermediate, scaled total CDF.
            var scaledCDF = 1;

            // This variable holds the scaled probability of the current number of
            // successes.
            var scaledPDF = 1;

            // This keeps track of how much we have normalized.
            var samplesDone = 0;
            for (var i = 0; i < x; i++) {
              // For every possible number of successes up to that observed...

              while (scaledCDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.

                var factor = 1 - m / (N - samplesDone);
                scaledPDF *= factor;
                scaledCDF *= factor;

                // Say we've normalized by this sample already.
                samplesDone++;
              }

              // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes
              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));

              // Add to the CDF answer.
              scaledCDF += scaledPDF;
            }
            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledCDF *= 1 - m / (N - samplesDone);
            }

            // Bound answer sanely before returning.
            return Math.min(1, Math.max(0, scaledCDF));
          }
        }
      });

      // extend uniform function with static methods
      jStat.extend(jStat.poisson, {
        pdf: function pdf(k, l) {
          if (l < 0 || k % 1 !== 0 || k < 0) {
            return 0;
          }
          return Math.pow(l, k) * Math.exp(-l) / jStat.factorial(k);
        },
        cdf: function cdf(x, l) {
          var sumarr = [],
            k = 0;
          if (x < 0) return 0;
          for (; k <= x; k++) {
            sumarr.push(jStat.poisson.pdf(k, l));
          }
          return jStat.sum(sumarr);
        },
        mean: function (l) {
          return l;
        },
        variance: function (l) {
          return l;
        },
        sampleSmall: function sampleSmall(l) {
          var p = 1,
            k = 0,
            L = Math.exp(-l);
          do {
            k++;
            p *= jStat._random_fn();
          } while (p > L);
          return k - 1;
        },
        sampleLarge: function sampleLarge(l) {
          var lam = l;
          var k;
          var U, V, slam, loglam, a, b, invalpha, vr, us;
          slam = Math.sqrt(lam);
          loglam = Math.log(lam);
          b = 0.931 + 2.53 * slam;
          a = -0.059 + 0.02483 * b;
          invalpha = 1.1239 + 1.1328 / (b - 3.4);
          vr = 0.9277 - 3.6224 / (b - 2);
          while (1) {
            U = Math.random() - 0.5;
            V = Math.random();
            us = 0.5 - Math.abs(U);
            k = Math.floor((2 * a / us + b) * U + lam + 0.43);
            if (us >= 0.07 && V <= vr) {
              return k;
            }
            if (k < 0 || us < 0.013 && V > us) {
              continue;
            }
            /* log(V) == log(0.0) ok here */
            /* if U==0.0 so that us==0.0, log is ok since always returns */
            if (Math.log(V) + Math.log(invalpha) - Math.log(a / (us * us) + b) <= -lam + k * loglam - jStat.loggam(k + 1)) {
              return k;
            }
          }
        },
        sample: function sample(l) {
          if (l < 10) return this.sampleSmall(l);else return this.sampleLarge(l);
        }
      });

      // extend triangular function with static methods
      jStat.extend(jStat.triangular, {
        pdf: function pdf(x, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (x < a || x > b) {
              return 0;
            } else if (x < c) {
              return 2 * (x - a) / ((b - a) * (c - a));
            } else if (x === c) {
              return 2 / (b - a);
            } else {
              // x > c
              return 2 * (b - x) / ((b - a) * (b - c));
            }
          }
        },
        cdf: function cdf(x, a, b, c) {
          if (b <= a || c < a || c > b) return NaN;
          if (x <= a) return 0;else if (x >= b) return 1;
          if (x <= c) return Math.pow(x - a, 2) / ((b - a) * (c - a));else
            // x > c
            return 1 - Math.pow(b - x, 2) / ((b - a) * (b - c));
        },
        inv: function inv(p, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (p <= (c - a) / (b - a)) {
              return a + (b - a) * Math.sqrt(p * ((c - a) / (b - a)));
            } else {
              // p > ((c - a) / (b - a))
              return a + (b - a) * (1 - Math.sqrt((1 - p) * (1 - (c - a) / (b - a))));
            }
          }
        },
        mean: function mean(a, b, c) {
          return (a + b + c) / 3;
        },
        median: function median(a, b, c) {
          if (c <= (a + b) / 2) {
            return b - Math.sqrt((b - a) * (b - c)) / Math.sqrt(2);
          } else if (c > (a + b) / 2) {
            return a + Math.sqrt((b - a) * (c - a)) / Math.sqrt(2);
          }
        },
        mode: function mode(a, b, c) {
          return c;
        },
        sample: function sample(a, b, c) {
          var u = jStat._random_fn();
          if (u < (c - a) / (b - a)) return a + Math.sqrt(u * (b - a) * (c - a));
          return b - Math.sqrt((1 - u) * (b - a) * (b - c));
        },
        variance: function variance(a, b, c) {
          return (a * a + b * b + c * c - a * b - a * c - b * c) / 18;
        }
      });

      // extend arcsine function with static methods
      jStat.extend(jStat.arcsine, {
        pdf: function pdf(x, a, b) {
          if (b <= a) return NaN;
          return x <= a || x >= b ? 0 : 2 / Math.PI * Math.pow(Math.pow(b - a, 2) - Math.pow(2 * x - a - b, 2), -0.5);
        },
        cdf: function cdf(x, a, b) {
          if (x < a) return 0;else if (x < b) return 2 / Math.PI * Math.asin(Math.sqrt((x - a) / (b - a)));
          return 1;
        },
        inv: function (p, a, b) {
          return a + (0.5 - 0.5 * Math.cos(Math.PI * p)) * (b - a);
        },
        mean: function mean(a, b) {
          if (b <= a) return NaN;
          return (a + b) / 2;
        },
        median: function median(a, b) {
          if (b <= a) return NaN;
          return (a + b) / 2;
        },
        mode: function mode( /*a, b*/
        ) {
          throw new Error('mode is not yet implemented');
        },
        sample: function sample(a, b) {
          return (a + b) / 2 + (b - a) / 2 * Math.sin(2 * Math.PI * jStat.uniform.sample(0, 1));
        },
        variance: function variance(a, b) {
          if (b <= a) return NaN;
          return Math.pow(b - a, 2) / 8;
        }
      });
      function laplaceSign(x) {
        return x / Math.abs(x);
      }
      jStat.extend(jStat.laplace, {
        pdf: function pdf(x, mu, b) {
          return b <= 0 ? 0 : Math.exp(-Math.abs(x - mu) / b) / (2 * b);
        },
        cdf: function cdf(x, mu, b) {
          if (b <= 0) {
            return 0;
          }
          if (x < mu) {
            return 0.5 * Math.exp((x - mu) / b);
          } else {
            return 1 - 0.5 * Math.exp(-(x - mu) / b);
          }
        },
        mean: function (mu /*, b*/) {
          return mu;
        },
        median: function (mu /*, b*/) {
          return mu;
        },
        mode: function (mu /*, b*/) {
          return mu;
        },
        variance: function (mu, b) {
          return 2 * b * b;
        },
        sample: function sample(mu, b) {
          var u = jStat._random_fn() - 0.5;
          return mu - b * laplaceSign(u) * Math.log(1 - 2 * Math.abs(u));
        }
      });
      function tukeyWprob(w, rr, cc) {
        var nleg = 12;
        var ihalf = 6;
        var C1 = -30;
        var C2 = -50;
        var C3 = 60;
        var bb = 8;
        var wlar = 3;
        var wincr1 = 2;
        var wincr2 = 3;
        var xleg = [0.981560634246719250690549090149, 0.904117256370474856678465866119, 0.769902674194304687036893833213, 0.587317954286617447296702418941, 0.367831498998180193752691536644, 0.125233408511468915472441369464];
        var aleg = [0.047175336386511827194615961485, 0.106939325995318430960254718194, 0.160078328543346226334652529543, 0.203167426723065921749064455810, 0.233492536538354808760849898925, 0.249147045813402785000562436043];
        var qsqz = w * 0.5;

        // if w >= 16 then the integral lower bound (occurs for c=20)
        // is 0.99999999999995 so return a value of 1.

        if (qsqz >= bb) return 1.0;

        // find (f(w/2) - 1) ^ cc
        // (first term in integral of hartley's form).

        var pr_w = 2 * jStat.normal.cdf(qsqz, 0, 1, 1, 0) - 1; // erf(qsqz / M_SQRT2)
        // if pr_w ^ cc < 2e-22 then set pr_w = 0
        if (pr_w >= Math.exp(C2 / cc)) pr_w = Math.pow(pr_w, cc);else pr_w = 0.0;

        // if w is large then the second component of the
        // integral is small, so fewer intervals are needed.

        var wincr;
        if (w > wlar) wincr = wincr1;else wincr = wincr2;

        // find the integral of second term of hartley's form
        // for the integral of the range for equal-length
        // intervals using legendre quadrature.  limits of
        // integration are from (w/2, 8).  two or three
        // equal-length intervals are used.

        // blb and bub are lower and upper limits of integration.

        var blb = qsqz;
        var binc = (bb - qsqz) / wincr;
        var bub = blb + binc;
        var einsum = 0.0;

        // integrate over each interval

        var cc1 = cc - 1.0;
        for (var wi = 1; wi <= wincr; wi++) {
          var elsum = 0.0;
          var a = 0.5 * (bub + blb);

          // legendre quadrature with order = nleg

          var b = 0.5 * (bub - blb);
          for (var jj = 1; jj <= nleg; jj++) {
            var j, xx;
            if (ihalf < jj) {
              j = nleg - jj + 1;
              xx = xleg[j - 1];
            } else {
              j = jj;
              xx = -xleg[j - 1];
            }
            var c = b * xx;
            var ac = a + c;

            // if exp(-qexpo/2) < 9e-14,
            // then doesn't contribute to integral

            var qexpo = ac * ac;
            if (qexpo > C3) break;
            var pplus = 2 * jStat.normal.cdf(ac, 0, 1, 1, 0);
            var pminus = 2 * jStat.normal.cdf(ac, w, 1, 1, 0);

            // if rinsum ^ (cc-1) < 9e-14,
            // then doesn't contribute to integral

            var rinsum = pplus * 0.5 - pminus * 0.5;
            if (rinsum >= Math.exp(C1 / cc1)) {
              rinsum = aleg[j - 1] * Math.exp(-(0.5 * qexpo)) * Math.pow(rinsum, cc1);
              elsum += rinsum;
            }
          }
          elsum *= 2.0 * b * cc / Math.sqrt(2 * Math.PI);
          einsum += elsum;
          blb = bub;
          bub += binc;
        }

        // if pr_w ^ rr < 9e-14, then return 0
        pr_w += einsum;
        if (pr_w <= Math.exp(C1 / rr)) return 0;
        pr_w = Math.pow(pr_w, rr);
        if (pr_w >= 1)
          // 1 was iMax was eps
          return 1;
        return pr_w;
      }
      function tukeyQinv(p, c, v) {
        var p0 = 0.322232421088;
        var q0 = 0.993484626060e-01;
        var p1 = -1.0;
        var q1 = 0.588581570495;
        var p2 = -0.342242088547;
        var q2 = 0.531103462366;
        var p3 = -0.204231210125;
        var q3 = 0.103537752850;
        var p4 = -0.453642210148e-04;
        var q4 = 0.38560700634e-02;
        var c1 = 0.8832;
        var c2 = 0.2368;
        var c3 = 1.214;
        var c4 = 1.208;
        var c5 = 1.4142;
        var vmax = 120.0;
        var ps = 0.5 - 0.5 * p;
        var yi = Math.sqrt(Math.log(1.0 / (ps * ps)));
        var t = yi + ((((yi * p4 + p3) * yi + p2) * yi + p1) * yi + p0) / ((((yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);
        if (v < vmax) t += (t * t * t + t) / v / 4.0;
        var q = c1 - c2 * t;
        if (v < vmax) q += -c3 / v + c4 * t / v;
        return t * (q * Math.log(c - 1.0) + c5);
      }
      jStat.extend(jStat.tukey, {
        cdf: function cdf(q, nmeans, df) {
          // Identical implementation as the R ptukey() function as of commit 68947
          var rr = 1;
          var cc = nmeans;
          var nlegq = 16;
          var ihalfq = 8;
          var eps1 = -30.0;
          var eps2 = 1.0e-14;
          var dhaf = 100.0;
          var dquar = 800.0;
          var deigh = 5000.0;
          var dlarg = 25000.0;
          var ulen1 = 1.0;
          var ulen2 = 0.5;
          var ulen3 = 0.25;
          var ulen4 = 0.125;
          var xlegq = [0.989400934991649932596154173450, 0.944575023073232576077988415535, 0.865631202387831743880467897712, 0.755404408355003033895101194847, 0.617876244402643748446671764049, 0.458016777657227386342419442984, 0.281603550779258913230460501460, 0.950125098376374401853193354250e-1];
          var alegq = [0.271524594117540948517805724560e-1, 0.622535239386478928628438369944e-1, 0.951585116824927848099251076022e-1, 0.124628971255533872052476282192, 0.149595988816576732081501730547, 0.169156519395002538189312079030, 0.182603415044923588866763667969, 0.189450610455068496285396723208];
          if (q <= 0) return 0;

          // df must be > 1
          // there must be at least two values

          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (!Number.isFinite(q)) return 1;
          if (df > dlarg) return tukeyWprob(q, rr, cc);

          // calculate leading constant

          var f2 = df * 0.5;
          var f2lf = f2 * Math.log(df) - df * Math.log(2) - jStat.gammaln(f2);
          var f21 = f2 - 1.0;

          // integral is divided into unit, half-unit, quarter-unit, or
          // eighth-unit length intervals depending on the value of the
          // degrees of freedom.

          var ff4 = df * 0.25;
          var ulen;
          if (df <= dhaf) ulen = ulen1;else if (df <= dquar) ulen = ulen2;else if (df <= deigh) ulen = ulen3;else ulen = ulen4;
          f2lf += Math.log(ulen);

          // integrate over each subinterval

          var ans = 0.0;
          for (var i = 1; i <= 50; i++) {
            var otsum = 0.0;

            // legendre quadrature with order = nlegq
            // nodes (stored in xlegq) are symmetric around zero.

            var twa1 = (2 * i - 1) * ulen;
            for (var jj = 1; jj <= nlegq; jj++) {
              var j, t1;
              if (ihalfq < jj) {
                j = jj - ihalfq - 1;
                t1 = f2lf + f21 * Math.log(twa1 + xlegq[j] * ulen) - (xlegq[j] * ulen + twa1) * ff4;
              } else {
                j = jj - 1;
                t1 = f2lf + f21 * Math.log(twa1 - xlegq[j] * ulen) + (xlegq[j] * ulen - twa1) * ff4;
              }

              // if exp(t1) < 9e-14, then doesn't contribute to integral
              var qsqz;
              if (t1 >= eps1) {
                if (ihalfq < jj) {
                  qsqz = q * Math.sqrt((xlegq[j] * ulen + twa1) * 0.5);
                } else {
                  qsqz = q * Math.sqrt((-(xlegq[j] * ulen) + twa1) * 0.5);
                }

                // call wprob to find integral of range portion

                var wprb = tukeyWprob(qsqz, rr, cc);
                var rotsum = wprb * alegq[j] * Math.exp(t1);
                otsum += rotsum;
              }
              // end legendre integral for interval i
              // L200:
            }

            // if integral for interval i < 1e-14, then stop.
            // However, in order to avoid small area under left tail,
            // at least  1 / ulen  intervals are calculated.
            if (i * ulen >= 1.0 && otsum <= eps2) break;

            // end of interval i
            // L330:

            ans += otsum;
          }
          if (otsum > eps2) {
            // not converged
            throw new Error('tukey.cdf failed to converge');
          }
          if (ans > 1) ans = 1;
          return ans;
        },
        inv: function (p, nmeans, df) {
          // Identical implementation as the R qtukey() function as of commit 68947
          var rr = 1;
          var cc = nmeans;
          var eps = 0.0001;
          var maxiter = 50;

          // df must be > 1 ; there must be at least two values
          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (p < 0 || p > 1) return NaN;
          if (p === 0) return 0;
          if (p === 1) return Infinity;

          // Initial value

          var x0 = tukeyQinv(p, cc, df);

          // Find prob(value < x0)

          var valx0 = jStat.tukey.cdf(x0, nmeans, df) - p;

          // Find the second iterate and prob(value < x1).
          // If the first iterate has probability value
          // exceeding p then second iterate is 1 less than
          // first iterate; otherwise it is 1 greater.

          var x1;
          if (valx0 > 0.0) x1 = Math.max(0.0, x0 - 1.0);else x1 = x0 + 1.0;
          var valx1 = jStat.tukey.cdf(x1, nmeans, df) - p;

          // Find new iterate

          var ans;
          for (var iter = 1; iter < maxiter; iter++) {
            ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
            valx0 = valx1;

            // New iterate must be >= 0

            x0 = x1;
            if (ans < 0.0) {
              ans = 0.0;
              valx1 = -p;
            }
            // Find prob(value < new iterate)

            valx1 = jStat.tukey.cdf(ans, nmeans, df) - p;
            x1 = ans;

            // If the difference between two successive
            // iterates is less than eps, stop

            var xabs = Math.abs(x1 - x0);
            if (xabs < eps) return ans;
          }
          throw new Error('tukey.inv failed to converge');
        }
      });
    })(jStat, Math);
    /* Provides functions for the solution of linear system of equations, integration, extrapolation,
     * interpolation, eigenvalue problems, differential equations and PCA analysis. */

    (function (jStat, Math) {
      var push = Array.prototype.push;
      var isArray = jStat.utils.isArray;
      function isUsable(arg) {
        return isArray(arg) || arg instanceof jStat;
      }
      jStat.extend({
        // add a vector/matrix to a vector/matrix or scalar
        add: function add(arr, arg) {
          // check if arg is a vector or scalar
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.map(arr, function (value, row, col) {
              return value + arg[row][col];
            });
          }
          return jStat.map(arr, function (value) {
            return value + arg;
          });
        },
        // subtract a vector or scalar from the vector
        subtract: function subtract(arr, arg) {
          // check if arg is a vector or scalar
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.map(arr, function (value, row, col) {
              return value - arg[row][col] || 0;
            });
          }
          return jStat.map(arr, function (value) {
            return value - arg;
          });
        },
        // matrix division
        divide: function divide(arr, arg) {
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.multiply(arr, jStat.inv(arg));
          }
          return jStat.map(arr, function (value) {
            return value / arg;
          });
        },
        // matrix multiplication
        multiply: function multiply(arr, arg) {
          var row, col, nrescols, sum, nrow, ncol, res, rescols;
          // eg: arr = 2 arg = 3 -> 6 for res[0][0] statement closure
          if (arr.length === undefined && arg.length === undefined) {
            return arr * arg;
          }
          nrow = arr.length, ncol = arr[0].length, res = jStat.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;
          if (isUsable(arg)) {
            for (; rescols < nrescols; rescols++) {
              for (row = 0; row < nrow; row++) {
                sum = 0;
                for (col = 0; col < ncol; col++) sum += arr[row][col] * arg[col][rescols];
                res[row][rescols] = sum;
              }
            }
            return nrow === 1 && rescols === 1 ? res[0][0] : res;
          }
          return jStat.map(arr, function (value) {
            return value * arg;
          });
        },
        // outer([1,2,3],[4,5,6])
        // ===
        // [[1],[2],[3]] times [[4,5,6]]
        // ->
        // [[4,5,6],[8,10,12],[12,15,18]]
        outer: function outer(A, B) {
          return jStat.multiply(A.map(function (t) {
            return [t];
          }), [B]);
        },
        // Returns the dot product of two matricies
        dot: function dot(arr, arg) {
          if (!isUsable(arr[0])) arr = [arr];
          if (!isUsable(arg[0])) arg = [arg];
          // convert column to row vector
          var left = arr[0].length === 1 && arr.length !== 1 ? jStat.transpose(arr) : arr,
            right = arg[0].length === 1 && arg.length !== 1 ? jStat.transpose(arg) : arg,
            res = [],
            row = 0,
            nrow = left.length,
            ncol = left[0].length,
            sum,
            col;
          for (; row < nrow; row++) {
            res[row] = [];
            sum = 0;
            for (col = 0; col < ncol; col++) sum += left[row][col] * right[row][col];
            res[row] = sum;
          }
          return res.length === 1 ? res[0] : res;
        },
        // raise every element by a scalar
        pow: function pow(arr, arg) {
          return jStat.map(arr, function (value) {
            return Math.pow(value, arg);
          });
        },
        // exponentiate every element
        exp: function exp(arr) {
          return jStat.map(arr, function (value) {
            return Math.exp(value);
          });
        },
        // generate the natural log of every element
        log: function exp(arr) {
          return jStat.map(arr, function (value) {
            return Math.log(value);
          });
        },
        // generate the absolute values of the vector
        abs: function abs(arr) {
          return jStat.map(arr, function (value) {
            return Math.abs(value);
          });
        },
        // computes the p-norm of the vector
        // In the case that a matrix is passed, uses the first row as the vector
        norm: function norm(arr, p) {
          var nnorm = 0,
            i = 0;
          // check the p-value of the norm, and set for most common case
          if (isNaN(p)) p = 2;
          // check if multi-dimensional array, and make vector correction
          if (isUsable(arr[0])) arr = arr[0];
          // vector norm
          for (; i < arr.length; i++) {
            nnorm += Math.pow(Math.abs(arr[i]), p);
          }
          return Math.pow(nnorm, 1 / p);
        },
        // computes the angle between two vectors in rads
        // In case a matrix is passed, this uses the first row as the vector
        angle: function angle(arr, arg) {
          return Math.acos(jStat.dot(arr, arg) / (jStat.norm(arr) * jStat.norm(arg)));
        },
        // augment one matrix by another
        // Note: this function returns a matrix, not a jStat object
        aug: function aug(a, b) {
          var newarr = [];
          var i;
          for (i = 0; i < a.length; i++) {
            newarr.push(a[i].slice());
          }
          for (i = 0; i < newarr.length; i++) {
            push.apply(newarr[i], b[i]);
          }
          return newarr;
        },
        // The inv() function calculates the inverse of a matrix
        // Create the inverse by augmenting the matrix by the identity matrix of the
        // appropriate size, and then use G-J elimination on the augmented matrix.
        inv: function inv(a) {
          var rows = a.length;
          var cols = a[0].length;
          var b = jStat.identity(rows, cols);
          var c = jStat.gauss_jordan(a, b);
          var result = [];
          var i = 0;
          var j;

          //We need to copy the inverse portion to a new matrix to rid G-J artifacts
          for (; i < rows; i++) {
            result[i] = [];
            for (j = cols; j < c[0].length; j++) result[i][j - cols] = c[i][j];
          }
          return result;
        },
        // calculate the determinant of a matrix
        det: function det(a) {
          if (a.length === 2) {
            return a[0][0] * a[1][1] - a[0][1] * a[1][0];
          }
          var determinant = 0;
          for (var i = 0; i < a.length; i++) {
            // build a sub matrix without column `i`
            var submatrix = [];
            for (var row = 1; row < a.length; row++) {
              submatrix[row - 1] = [];
              for (var col = 0; col < a.length; col++) {
                if (col < i) {
                  submatrix[row - 1][col] = a[row][col];
                } else if (col > i) {
                  submatrix[row - 1][col - 1] = a[row][col];
                }
              }
            }

            // alternate between + and - between determinants
            var sign = i % 2 ? -1 : 1;
            determinant += det(submatrix) * a[0][i] * sign;
          }
          return determinant;
        },
        gauss_elimination: function gauss_elimination(a, b) {
          var i = 0,
            j = 0,
            n = a.length,
            m = a[0].length,
            factor = 1,
            sum = 0,
            x = [],
            maug,
            pivot,
            temp,
            k;
          a = jStat.aug(a, b);
          maug = a[0].length;
          for (i = 0; i < n; i++) {
            pivot = a[i][i];
            j = i;
            for (k = i + 1; k < m; k++) {
              if (pivot < Math.abs(a[k][i])) {
                pivot = a[k][i];
                j = k;
              }
            }
            if (j != i) {
              for (k = 0; k < maug; k++) {
                temp = a[i][k];
                a[i][k] = a[j][k];
                a[j][k] = temp;
              }
            }
            for (j = i + 1; j < n; j++) {
              factor = a[j][i] / a[i][i];
              for (k = i; k < maug; k++) {
                a[j][k] = a[j][k] - factor * a[i][k];
              }
            }
          }
          for (i = n - 1; i >= 0; i--) {
            sum = 0;
            for (j = i + 1; j <= n - 1; j++) {
              sum = sum + x[j] * a[i][j];
            }
            x[i] = (a[i][maug - 1] - sum) / a[i][i];
          }
          return x;
        },
        gauss_jordan: function gauss_jordan(a, b) {
          var m = jStat.aug(a, b);
          var h = m.length;
          var w = m[0].length;
          var c = 0;
          var x, y, y2;
          // find max pivot
          for (y = 0; y < h; y++) {
            var maxrow = y;
            for (y2 = y + 1; y2 < h; y2++) {
              if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) maxrow = y2;
            }
            var tmp = m[y];
            m[y] = m[maxrow];
            m[maxrow] = tmp;
            for (y2 = y + 1; y2 < h; y2++) {
              c = m[y2][y] / m[y][y];
              for (x = y; x < w; x++) {
                m[y2][x] -= m[y][x] * c;
              }
            }
          }
          // backsubstitute
          for (y = h - 1; y >= 0; y--) {
            c = m[y][y];
            for (y2 = 0; y2 < y; y2++) {
              for (x = w - 1; x > y - 1; x--) {
                m[y2][x] -= m[y][x] * m[y2][y] / c;
              }
            }
            m[y][y] /= c;
            for (x = h; x < w; x++) {
              m[y][x] /= c;
            }
          }
          return m;
        },
        // solve equation
        // Ax=b
        // A is upper triangular matrix
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[1,2,3]
        // triaUpSolve(A,b) // -> [2.666,0.1666,1.666]
        // if you use matrix style
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[[1],[2],[3]]
        // will return [[2.666],[0.1666],[1.666]]
        triaUpSolve: function triaUpSolve(A, b) {
          var size = A[0].length;
          var x = jStat.zeros(1, size)[0];
          var parts;
          var matrix_mode = false;
          if (b[0].length != undefined) {
            b = b.map(function (i) {
              return i[0];
            });
            matrix_mode = true;
          }
          jStat.arange(size - 1, -1, -1).forEach(function (i) {
            parts = jStat.arange(i + 1, size).map(function (j) {
              return x[j] * A[i][j];
            });
            x[i] = (b[i] - jStat.sum(parts)) / A[i][i];
          });
          if (matrix_mode) return x.map(function (i) {
            return [i];
          });
          return x;
        },
        triaLowSolve: function triaLowSolve(A, b) {
          // like to triaUpSolve but A is lower triangular matrix
          var size = A[0].length;
          var x = jStat.zeros(1, size)[0];
          var parts;
          var matrix_mode = false;
          if (b[0].length != undefined) {
            b = b.map(function (i) {
              return i[0];
            });
            matrix_mode = true;
          }
          jStat.arange(size).forEach(function (i) {
            parts = jStat.arange(i).map(function (j) {
              return A[i][j] * x[j];
            });
            x[i] = (b[i] - jStat.sum(parts)) / A[i][i];
          });
          if (matrix_mode) return x.map(function (i) {
            return [i];
          });
          return x;
        },
        // A -> [L,U]
        // A=LU
        // L is lower triangular matrix
        // U is upper triangular matrix
        lu: function lu(A) {
          var size = A.length;
          //var L=jStat.diagonal(jStat.ones(1,size)[0]);
          var L = jStat.identity(size);
          var R = jStat.zeros(A.length, A[0].length);
          var parts;
          jStat.arange(size).forEach(function (t) {
            R[0][t] = A[0][t];
          });
          jStat.arange(1, size).forEach(function (l) {
            jStat.arange(l).forEach(function (i) {
              parts = jStat.arange(i).map(function (jj) {
                return L[l][jj] * R[jj][i];
              });
              L[l][i] = (A[l][i] - jStat.sum(parts)) / R[i][i];
            });
            jStat.arange(l, size).forEach(function (j) {
              parts = jStat.arange(l).map(function (jj) {
                return L[l][jj] * R[jj][j];
              });
              R[l][j] = A[parts.length][j] - jStat.sum(parts);
            });
          });
          return [L, R];
        },
        // A -> T
        // A=TT'
        // T is lower triangular matrix
        cholesky: function cholesky(A) {
          var size = A.length;
          var T = jStat.zeros(A.length, A[0].length);
          var parts;
          jStat.arange(size).forEach(function (i) {
            parts = jStat.arange(i).map(function (t) {
              return Math.pow(T[i][t], 2);
            });
            T[i][i] = Math.sqrt(A[i][i] - jStat.sum(parts));
            jStat.arange(i + 1, size).forEach(function (j) {
              parts = jStat.arange(i).map(function (t) {
                return T[i][t] * T[j][t];
              });
              T[j][i] = (A[i][j] - jStat.sum(parts)) / T[i][i];
            });
          });
          return T;
        },
        gauss_jacobi: function gauss_jacobi(a, b, x, r) {
          var i = 0;
          var j = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var xv, c, h, xk;
          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];
            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }
          h = jStat.multiply(jStat.multiply(jStat.inv(d), jStat.add(l, u)), -1);
          c = jStat.multiply(jStat.inv(d), b);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;
          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i++;
          }
          return xk;
        },
        gauss_seidel: function gauss_seidel(a, b, x, r) {
          var i = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var j, xv, c, h, xk;
          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];
            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }
          h = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, l)), u), -1);
          c = jStat.multiply(jStat.inv(jStat.add(d, l)), b);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;
          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i = i + 1;
          }
          return xk;
        },
        SOR: function SOR(a, b, x, r, w) {
          var i = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var j, xv, c, h, xk;
          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];
            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }
          h = jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), jStat.subtract(jStat.multiply(d, 1 - w), jStat.multiply(u, w)));
          c = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), b), w);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;
          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i++;
          }
          return xk;
        },
        householder: function householder(a) {
          var m = a.length;
          var n = a[0].length;
          var i = 0;
          var w = [];
          var p = [];
          var alpha, r, k, j, factor;
          for (; i < m - 1; i++) {
            alpha = 0;
            for (j = i + 1; j < n; j++) alpha += a[j][i] * a[j][i];
            factor = a[i + 1][i] > 0 ? -1 : 1;
            alpha = factor * Math.sqrt(alpha);
            r = Math.sqrt((alpha * alpha - a[i + 1][i] * alpha) / 2);
            w = jStat.zeros(m, 1);
            w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r);
            for (k = i + 2; k < m; k++) w[k][0] = a[k][i] / (2 * r);
            p = jStat.subtract(jStat.identity(m, n), jStat.multiply(jStat.multiply(w, jStat.transpose(w)), 2));
            a = jStat.multiply(p, jStat.multiply(a, p));
          }
          return a;
        },
        // A -> [Q,R]
        // Q is orthogonal matrix
        // R is upper triangular
        QR: function () {
          // x -> Q
          // find a orthogonal matrix Q st.
          // Qx=y
          // y is [||x||,0,0,...]

          // quick ref
          var sum = jStat.sum;
          var range = jStat.arange;
          function qr2(x) {
            // quick impletation
            // https://www.stat.wisc.edu/~larget/math496/qr.html

            var n = x.length;
            var p = x[0].length;
            var r = jStat.zeros(p, p);
            x = jStat.copy(x);
            var i, j, k;
            for (j = 0; j < p; j++) {
              r[j][j] = Math.sqrt(sum(range(n).map(function (i) {
                return x[i][j] * x[i][j];
              })));
              for (i = 0; i < n; i++) {
                x[i][j] = x[i][j] / r[j][j];
              }
              for (k = j + 1; k < p; k++) {
                r[j][k] = sum(range(n).map(function (i) {
                  return x[i][j] * x[i][k];
                }));
                for (i = 0; i < n; i++) {
                  x[i][k] = x[i][k] - x[i][j] * r[j][k];
                }
              }
            }
            return [x, r];
          }
          return qr2;
        }(),
        lstsq: function () {
          // solve least squard problem for Ax=b as QR decomposition way if b is
          // [[b1],[b2],[b3]] form will return [[x1],[x2],[x3]] array form solution
          // else b is [b1,b2,b3] form will return [x1,x2,x3] array form solution
          function R_I(A) {
            A = jStat.copy(A);
            var size = A.length;
            var I = jStat.identity(size);
            jStat.arange(size - 1, -1, -1).forEach(function (i) {
              jStat.sliceAssign(I, {
                row: i
              }, jStat.divide(jStat.slice(I, {
                row: i
              }), A[i][i]));
              jStat.sliceAssign(A, {
                row: i
              }, jStat.divide(jStat.slice(A, {
                row: i
              }), A[i][i]));
              jStat.arange(i).forEach(function (j) {
                var c = jStat.multiply(A[j][i], -1);
                var Aj = jStat.slice(A, {
                  row: j
                });
                var cAi = jStat.multiply(jStat.slice(A, {
                  row: i
                }), c);
                jStat.sliceAssign(A, {
                  row: j
                }, jStat.add(Aj, cAi));
                var Ij = jStat.slice(I, {
                  row: j
                });
                var cIi = jStat.multiply(jStat.slice(I, {
                  row: i
                }), c);
                jStat.sliceAssign(I, {
                  row: j
                }, jStat.add(Ij, cIi));
              });
            });
            return I;
          }
          function qr_solve(A, b) {
            var array_mode = false;
            if (b[0].length === undefined) {
              // [c1,c2,c3] mode
              b = b.map(function (x) {
                return [x];
              });
              array_mode = true;
            }
            var QR = jStat.QR(A);
            var Q = QR[0];
            var R = QR[1];
            var attrs = A[0].length;
            var Q1 = jStat.slice(Q, {
              col: {
                end: attrs
              }
            });
            var R1 = jStat.slice(R, {
              row: {
                end: attrs
              }
            });
            var RI = R_I(R1);
            var Q2 = jStat.transpose(Q1);
            if (Q2[0].length === undefined) {
              Q2 = [Q2]; // The confusing jStat.multifly implementation threat nature process again.
            }
            var x = jStat.multiply(jStat.multiply(RI, Q2), b);
            if (x.length === undefined) {
              x = [[x]]; // The confusing jStat.multifly implementation threat nature process again.
            }
            if (array_mode) return x.map(function (i) {
              return i[0];
            });
            return x;
          }
          return qr_solve;
        }(),
        jacobi: function jacobi(a) {
          var condition = 1;
          var n = a.length;
          var e = jStat.identity(n, n);
          var ev = [];
          var b, i, j, p, q, maxim, theta, s;
          // condition === 1 only if tolerance is not reached
          while (condition === 1) {
            maxim = a[0][1];
            p = 0;
            q = 1;
            for (i = 0; i < n; i++) {
              for (j = 0; j < n; j++) {
                if (i != j) {
                  if (maxim < Math.abs(a[i][j])) {
                    maxim = Math.abs(a[i][j]);
                    p = i;
                    q = j;
                  }
                }
              }
            }
            if (a[p][p] === a[q][q]) theta = a[p][q] > 0 ? Math.PI / 4 : -Math.PI / 4;else theta = Math.atan(2 * a[p][q] / (a[p][p] - a[q][q])) / 2;
            s = jStat.identity(n, n);
            s[p][p] = Math.cos(theta);
            s[p][q] = -Math.sin(theta);
            s[q][p] = Math.sin(theta);
            s[q][q] = Math.cos(theta);
            // eigen vector matrix
            e = jStat.multiply(e, s);
            b = jStat.multiply(jStat.multiply(jStat.inv(s), a), s);
            a = b;
            condition = 0;
            for (i = 1; i < n; i++) {
              for (j = 1; j < n; j++) {
                if (i != j && Math.abs(a[i][j]) > 0.001) {
                  condition = 1;
                }
              }
            }
          }
          for (i = 0; i < n; i++) ev.push(a[i][i]);
          //returns both the eigenvalue and eigenmatrix
          return [e, ev];
        },
        rungekutta: function rungekutta(f, h, p, t_j, u_j, order) {
          var k1, k2, u_j1, k3, k4;
          if (order === 2) {
            while (t_j <= p) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h, u_j + k1);
              u_j1 = u_j + (k1 + k2) / 2;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }
          if (order === 4) {
            while (t_j <= p) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h / 2, u_j + k1 / 2);
              k3 = h * f(t_j + h / 2, u_j + k2 / 2);
              k4 = h * f(t_j + h, u_j + k3);
              u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }
          return u_j;
        },
        romberg: function romberg(f, a, b, order) {
          var i = 0;
          var h = (b - a) / 2;
          var x = [];
          var h1 = [];
          var g = [];
          var m, a1, j, k, I;
          while (i < order / 2) {
            I = f(a);
            for (j = a, k = 0; j <= b; j = j + h, k++) x[k] = j;
            m = x.length;
            for (j = 1; j < m - 1; j++) {
              I += (j % 2 !== 0 ? 4 : 2) * f(x[j]);
            }
            I = h / 3 * (I + f(b));
            g[i] = I;
            h /= 2;
            i++;
          }
          a1 = g.length;
          m = 1;
          while (a1 !== 1) {
            for (j = 0; j < a1 - 1; j++) h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
            a1 = h1.length;
            g = h1;
            h1 = [];
            m++;
          }
          return g;
        },
        richardson: function richardson(X, f, x, h) {
          function pos(X, x) {
            var i = 0;
            var n = X.length;
            var p;
            for (; i < n; i++) if (X[i] === x) p = i;
            return p;
          }
          var h_min = Math.abs(x - X[pos(X, x) + 1]);
          var i = 0;
          var g = [];
          var h1 = [];
          var y1, y2, m, a, j;
          while (h >= h_min) {
            y1 = pos(X, x + h);
            y2 = pos(X, x);
            g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);
            h /= 2;
            i++;
          }
          a = g.length;
          m = 1;
          while (a != 1) {
            for (j = 0; j < a - 1; j++) h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
            a = h1.length;
            g = h1;
            h1 = [];
            m++;
          }
          return g;
        },
        simpson: function simpson(f, a, b, n) {
          var h = (b - a) / n;
          var I = f(a);
          var x = [];
          var j = a;
          var k = 0;
          var i = 1;
          var m;
          for (; j <= b; j = j + h, k++) x[k] = j;
          m = x.length;
          for (; i < m - 1; i++) {
            I += (i % 2 !== 0 ? 4 : 2) * f(x[i]);
          }
          return h / 3 * (I + f(b));
        },
        hermite: function hermite(X, F, dF, value) {
          var n = X.length;
          var p = 0;
          var i = 0;
          var l = [];
          var dl = [];
          var A = [];
          var B = [];
          var j;
          for (; i < n; i++) {
            l[i] = 1;
            for (j = 0; j < n; j++) {
              if (i != j) l[i] *= (value - X[j]) / (X[i] - X[j]);
            }
            dl[i] = 0;
            for (j = 0; j < n; j++) {
              if (i != j) dl[i] += 1 / (X[i] - X[j]);
            }
            A[i] = (1 - 2 * (value - X[i]) * dl[i]) * (l[i] * l[i]);
            B[i] = (value - X[i]) * (l[i] * l[i]);
            p += A[i] * F[i] + B[i] * dF[i];
          }
          return p;
        },
        lagrange: function lagrange(X, F, value) {
          var p = 0;
          var i = 0;
          var j, l;
          var n = X.length;
          for (; i < n; i++) {
            l = F[i];
            for (j = 0; j < n; j++) {
              // calculating the lagrange polynomial L_i
              if (i != j) l *= (value - X[j]) / (X[i] - X[j]);
            }
            // adding the lagrange polynomials found above
            p += l;
          }
          return p;
        },
        cubic_spline: function cubic_spline(X, F, value) {
          var n = X.length;
          var i = 0,
            j;
          var A = [];
          var B = [];
          var alpha = [];
          var c = [];
          var h = [];
          var b = [];
          var d = [];
          for (; i < n - 1; i++) h[i] = X[i + 1] - X[i];
          alpha[0] = 0;
          for (i = 1; i < n - 1; i++) {
            alpha[i] = 3 / h[i] * (F[i + 1] - F[i]) - 3 / h[i - 1] * (F[i] - F[i - 1]);
          }
          for (i = 1; i < n - 1; i++) {
            A[i] = [];
            B[i] = [];
            A[i][i - 1] = h[i - 1];
            A[i][i] = 2 * (h[i - 1] + h[i]);
            A[i][i + 1] = h[i];
            B[i][0] = alpha[i];
          }
          c = jStat.multiply(jStat.inv(A), B);
          for (j = 0; j < n - 1; j++) {
            b[j] = (F[j + 1] - F[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;
            d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j]);
          }
          for (j = 0; j < n; j++) {
            if (X[j] > value) break;
          }
          j -= 1;
          return F[j] + (value - X[j]) * b[j] + jStat.sq(value - X[j]) * c[j] + (value - X[j]) * jStat.sq(value - X[j]) * d[j];
        },
        gauss_quadrature: function gauss_quadrature() {
          throw new Error('gauss_quadrature not yet implemented');
        },
        PCA: function PCA(X) {
          var m = X.length;
          var n = X[0].length;
          var i = 0;
          var j, temp1;
          var u = [];
          var D = [];
          var result = [];
          var temp2 = [];
          var Y = [];
          var Bt = [];
          var B = [];
          var C = [];
          var V = [];
          var Vt = [];
          for (i = 0; i < m; i++) {
            u[i] = jStat.sum(X[i]) / n;
          }
          for (i = 0; i < n; i++) {
            B[i] = [];
            for (j = 0; j < m; j++) {
              B[i][j] = X[j][i] - u[j];
            }
          }
          B = jStat.transpose(B);
          for (i = 0; i < m; i++) {
            C[i] = [];
            for (j = 0; j < m; j++) {
              C[i][j] = jStat.dot([B[i]], [B[j]]) / (n - 1);
            }
          }
          result = jStat.jacobi(C);
          V = result[0];
          D = result[1];
          Vt = jStat.transpose(V);
          for (i = 0; i < D.length; i++) {
            for (j = i; j < D.length; j++) {
              if (D[i] < D[j]) {
                temp1 = D[i];
                D[i] = D[j];
                D[j] = temp1;
                temp2 = Vt[i];
                Vt[i] = Vt[j];
                Vt[j] = temp2;
              }
            }
          }
          Bt = jStat.transpose(B);
          for (i = 0; i < m; i++) {
            Y[i] = [];
            for (j = 0; j < Bt.length; j++) {
              Y[i][j] = jStat.dot([Vt[i]], [Bt[j]]);
            }
          }
          return [X, D, Vt, Y];
        }
      });

      // extend jStat.fn with methods that require one argument
      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jStat.fn[passfunc] = function (arg, func) {
            var tmpthis = this;
            // check for callback
            if (func) {
              setTimeout(function () {
                func.call(tmpthis, jStat.fn[passfunc].call(tmpthis, arg));
              }, 15);
              return this;
            }
            if (typeof jStat[passfunc](this, arg) === 'number') return jStat[passfunc](this, arg);else return jStat(jStat[passfunc](this, arg));
          };
        })(funcs[i]);
      })('add divide multiply subtract dot pow exp log abs norm angle'.split(' '));
    })(jStat, Math);
    (function (jStat, Math) {
      var slice = [].slice;
      var isNumber = jStat.utils.isNumber;
      var isArray = jStat.utils.isArray;

      // flag==true denotes use of sample standard deviation
      // Z Statistics
      jStat.extend({
        // 2 different parameter lists:
        // (value, mean, sd)
        // (value, array, flag)
        zscore: function zscore() {
          var args = slice.call(arguments);
          if (isNumber(args[1])) {
            return (args[0] - args[1]) / args[2];
          }
          return (args[0] - jStat.mean(args[1])) / jStat.stdev(args[1], args[2]);
        },
        // 3 different paramter lists:
        // (value, mean, sd, sides)
        // (zscore, sides)
        // (value, array, sides, flag)
        ztest: function ztest() {
          var args = slice.call(arguments);
          var z;
          if (isArray(args[1])) {
            // (value, array, sides, flag)
            z = jStat.zscore(args[0], args[1], args[3]);
            return args[2] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
          } else {
            if (args.length > 2) {
              // (value, mean, sd, sides)
              z = jStat.zscore(args[0], args[1], args[2]);
              return args[3] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
            } else {
              // (zscore, sides)
              z = args[0];
              return args[1] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
            }
          }
        }
      });
      jStat.extend(jStat.fn, {
        zscore: function zscore(value, flag) {
          return (value - this.mean()) / this.stdev(flag);
        },
        ztest: function ztest(value, sides, flag) {
          var zscore = Math.abs(this.zscore(value, flag));
          return sides === 1 ? jStat.normal.cdf(-zscore, 0, 1) : jStat.normal.cdf(-zscore, 0, 1) * 2;
        }
      });

      // T Statistics
      jStat.extend({
        // 2 parameter lists
        // (value, mean, sd, n)
        // (value, array)
        tscore: function tscore() {
          var args = slice.call(arguments);
          return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math.sqrt(args[3])) : (args[0] - jStat.mean(args[1])) / (jStat.stdev(args[1], true) / Math.sqrt(args[1].length));
        },
        // 3 different paramter lists:
        // (value, mean, sd, n, sides)
        // (tscore, n, sides)
        // (value, array, sides)
        ttest: function ttest() {
          var args = slice.call(arguments);
          var tscore;
          if (args.length === 5) {
            tscore = Math.abs(jStat.tscore(args[0], args[1], args[2], args[3]));
            return args[4] === 1 ? jStat.studentt.cdf(-tscore, args[3] - 1) : jStat.studentt.cdf(-tscore, args[3] - 1) * 2;
          }
          if (isNumber(args[1])) {
            tscore = Math.abs(args[0]);
            return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1] - 1) : jStat.studentt.cdf(-tscore, args[1] - 1) * 2;
          }
          tscore = Math.abs(jStat.tscore(args[0], args[1]));
          return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1].length - 1) : jStat.studentt.cdf(-tscore, args[1].length - 1) * 2;
        }
      });
      jStat.extend(jStat.fn, {
        tscore: function tscore(value) {
          return (value - this.mean()) / (this.stdev(true) / Math.sqrt(this.cols()));
        },
        ttest: function ttest(value, sides) {
          return sides === 1 ? 1 - jStat.studentt.cdf(Math.abs(this.tscore(value)), this.cols() - 1) : jStat.studentt.cdf(-Math.abs(this.tscore(value)), this.cols() - 1) * 2;
        }
      });

      // F Statistics
      jStat.extend({
        // Paramter list is as follows:
        // (array1, array2, array3, ...)
        // or it is an array of arrays
        // array of arrays conversion
        anovafscore: function anovafscore() {
          var args = slice.call(arguments),
            expVar,
            sample,
            sampMean,
            sampSampMean,
            tmpargs,
            unexpVar,
            i,
            j;
          if (args.length === 1) {
            tmpargs = new Array(args[0].length);
            for (i = 0; i < args[0].length; i++) {
              tmpargs[i] = args[0][i];
            }
            args = tmpargs;
          }
          // Builds sample array
          sample = new Array();
          for (i = 0; i < args.length; i++) {
            sample = sample.concat(args[i]);
          }
          sampMean = jStat.mean(sample);
          // Computes the explained variance
          expVar = 0;
          for (i = 0; i < args.length; i++) {
            expVar = expVar + args[i].length * Math.pow(jStat.mean(args[i]) - sampMean, 2);
          }
          expVar /= args.length - 1;
          // Computes unexplained variance
          unexpVar = 0;
          for (i = 0; i < args.length; i++) {
            sampSampMean = jStat.mean(args[i]);
            for (j = 0; j < args[i].length; j++) {
              unexpVar += Math.pow(args[i][j] - sampSampMean, 2);
            }
          }
          unexpVar /= sample.length - args.length;
          return expVar / unexpVar;
        },
        // 2 different paramter setups
        // (array1, array2, array3, ...)
        // (anovafscore, df1, df2)
        anovaftest: function anovaftest() {
          var args = slice.call(arguments),
            df1,
            df2,
            n,
            i;
          if (isNumber(args[0])) {
            return 1 - jStat.centralF.cdf(args[0], args[1], args[2]);
          }
          var anovafscore = jStat.anovafscore(args);
          df1 = args.length - 1;
          n = 0;
          for (i = 0; i < args.length; i++) {
            n = n + args[i].length;
          }
          df2 = n - df1 - 1;
          return 1 - jStat.centralF.cdf(anovafscore, df1, df2);
        },
        ftest: function ftest(fscore, df1, df2) {
          return 1 - jStat.centralF.cdf(fscore, df1, df2);
        }
      });
      jStat.extend(jStat.fn, {
        anovafscore: function anovafscore() {
          return jStat.anovafscore(this.toArray());
        },
        anovaftes: function anovaftes() {
          var n = 0;
          var i;
          for (i = 0; i < this.length; i++) {
            n = n + this[i].length;
          }
          return jStat.ftest(this.anovafscore(), this.length - 1, n - this.length);
        }
      });

      // Tukey's range test
      jStat.extend({
        // 2 parameter lists
        // (mean1, mean2, n1, n2, sd)
        // (array1, array2, sd)
        qscore: function qscore() {
          var args = slice.call(arguments);
          var mean1, mean2, n1, n2, sd;
          if (isNumber(args[0])) {
            mean1 = args[0];
            mean2 = args[1];
            n1 = args[2];
            n2 = args[3];
            sd = args[4];
          } else {
            mean1 = jStat.mean(args[0]);
            mean2 = jStat.mean(args[1]);
            n1 = args[0].length;
            n2 = args[1].length;
            sd = args[2];
          }
          return Math.abs(mean1 - mean2) / (sd * Math.sqrt((1 / n1 + 1 / n2) / 2));
        },
        // 3 different parameter lists:
        // (qscore, n, k)
        // (mean1, mean2, n1, n2, sd, n, k)
        // (array1, array2, sd, n, k)
        qtest: function qtest() {
          var args = slice.call(arguments);
          var qscore;
          if (args.length === 3) {
            qscore = args[0];
            args = args.slice(1);
          } else if (args.length === 7) {
            qscore = jStat.qscore(args[0], args[1], args[2], args[3], args[4]);
            args = args.slice(5);
          } else {
            qscore = jStat.qscore(args[0], args[1], args[2]);
            args = args.slice(3);
          }
          var n = args[0];
          var k = args[1];
          return 1 - jStat.tukey.cdf(qscore, k, n - k);
        },
        tukeyhsd: function tukeyhsd(arrays) {
          var sd = jStat.pooledstdev(arrays);
          var means = arrays.map(function (arr) {
            return jStat.mean(arr);
          });
          var n = arrays.reduce(function (n, arr) {
            return n + arr.length;
          }, 0);
          var results = [];
          for (var i = 0; i < arrays.length; ++i) {
            for (var j = i + 1; j < arrays.length; ++j) {
              var p = jStat.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd, n, arrays.length);
              results.push([[i, j], p]);
            }
          }
          return results;
        }
      });

      // Error Bounds
      jStat.extend({
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        normalci: function normalci() {
          var args = slice.call(arguments),
            ans = new Array(2),
            change;
          if (args.length === 4) {
            change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * args[2] / Math.sqrt(args[3]));
          } else {
            change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * jStat.stdev(args[2]) / Math.sqrt(args[2].length));
          }
          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        tci: function tci() {
          var args = slice.call(arguments),
            ans = new Array(2),
            change;
          if (args.length === 4) {
            change = Math.abs(jStat.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math.sqrt(args[3]));
          } else {
            change = Math.abs(jStat.studentt.inv(args[1] / 2, args[2].length - 1) * jStat.stdev(args[2], true) / Math.sqrt(args[2].length));
          }
          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        significant: function significant(pvalue, alpha) {
          return pvalue < alpha;
        }
      });
      jStat.extend(jStat.fn, {
        normalci: function normalci(value, alpha) {
          return jStat.normalci(value, alpha, this.toArray());
        },
        tci: function tci(value, alpha) {
          return jStat.tci(value, alpha, this.toArray());
        }
      });

      // internal method for calculating the z-score for a difference of proportions test
      function differenceOfProportions(p1, n1, p2, n2) {
        if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
          throw new Error("Proportions should be greater than 0 and less than 1");
        }
        var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
        var se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
        return (p1 - p2) / se;
      }

      // Difference of Proportions
      jStat.extend(jStat.fn, {
        oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z = differenceOfProportions(p1, n1, p2, n2);
          return jStat.ztest(z, 1);
        },
        twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z = differenceOfProportions(p1, n1, p2, n2);
          return jStat.ztest(z, 2);
        }
      });
    })(jStat, Math);
    jStat.models = function () {
      function sub_regress(exog) {
        var var_count = exog[0].length;
        var modelList = jStat.arange(var_count).map(function (endog_index) {
          var exog_index = jStat.arange(var_count).filter(function (i) {
            return i !== endog_index;
          });
          return ols(jStat.col(exog, endog_index).map(function (x) {
            return x[0];
          }), jStat.col(exog, exog_index));
        });
        return modelList;
      }

      // do OLS model regress
      // exog have include const columns ,it will not generate it .In fact, exog is
      // "design matrix" look at
      //https://en.wikipedia.org/wiki/Design_matrix
      function ols(endog, exog) {
        var nobs = endog.length;
        var df_model = exog[0].length - 1;
        var df_resid = nobs - df_model - 1;
        var coef = jStat.lstsq(exog, endog);
        var predict = jStat.multiply(exog, coef.map(function (x) {
          return [x];
        })).map(function (p) {
          return p[0];
        });
        var resid = jStat.subtract(endog, predict);
        var ybar = jStat.mean(endog);
        // constant cause problem
        // var SST = jStat.sum(endog.map(function(y) {
        //   return Math.pow(y-ybar,2);
        // }));
        var SSE = jStat.sum(predict.map(function (f) {
          return Math.pow(f - ybar, 2);
        }));
        var SSR = jStat.sum(endog.map(function (y, i) {
          return Math.pow(y - predict[i], 2);
        }));
        var SST = SSE + SSR;
        var R2 = SSE / SST;
        return {
          exog: exog,
          endog: endog,
          nobs: nobs,
          df_model: df_model,
          df_resid: df_resid,
          coef: coef,
          predict: predict,
          resid: resid,
          ybar: ybar,
          SST: SST,
          SSE: SSE,
          SSR: SSR,
          R2: R2
        };
      }

      // H0: b_I=0
      // H1: b_I!=0
      function t_test(model) {
        var subModelList = sub_regress(model.exog);
        //var sigmaHat=jStat.stdev(model.resid);
        var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
        var seBetaHat = subModelList.map(function (mod) {
          var SST = mod.SST;
          var R2 = mod.R2;
          return sigmaHat / Math.sqrt(SST * (1 - R2));
        });
        var tStatistic = model.coef.map(function (coef, i) {
          return (coef - 0) / seBetaHat[i];
        });
        var pValue = tStatistic.map(function (t) {
          var leftppf = jStat.studentt.cdf(t, model.df_resid);
          return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;
        });
        var c = jStat.studentt.inv(0.975, model.df_resid);
        var interval95 = model.coef.map(function (coef, i) {
          var d = c * seBetaHat[i];
          return [coef - d, coef + d];
        });
        return {
          se: seBetaHat,
          t: tStatistic,
          p: pValue,
          sigmaHat: sigmaHat,
          interval95: interval95
        };
      }
      function F_test(model) {
        var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);
        var fcdf = function (x, n1, n2) {
          return jStat.beta.cdf(x / (n2 / n1 + x), n1 / 2, n2 / 2);
        };
        var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
        return {
          F_statistic: F_statistic,
          pvalue: pvalue
        };
      }
      function ols_wrap(endog, exog) {
        var model = ols(endog, exog);
        var ttest = t_test(model);
        var ftest = F_test(model);
        // Provide the Wherry / Ezekiel / McNemar / Cohen Adjusted R^2
        // Which matches the 'adjusted R^2' provided by R's lm package
        var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
        model.t = ttest;
        model.f = ftest;
        model.adjust_R2 = adjust_R2;
        return model;
      }
      return {
        ols: ols_wrap
      };
    }();
    //To regress, simply build X matrix
    //(append column of 1's) using
    //buildxmatrix and build the Y
    //matrix using buildymatrix
    //(simply the transpose)
    //and run regress.

    //Regressions

    jStat.extend({
      buildxmatrix: function buildxmatrix() {
        //Parameters will be passed in as such
        //(array1,array2,array3,...)
        //as (x1,x2,x3,...)
        //needs to be (1,x1,x2,x3,...)
        var matrixRows = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[i]);
        }
        return jStat(matrixRows);
      },
      builddxmatrix: function builddxmatrix() {
        //Paramters will be passed in as such
        //([array1,array2,...]
        var matrixRows = new Array(arguments[0].length);
        for (var i = 0; i < arguments[0].length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[0][i]);
        }
        return jStat(matrixRows);
      },
      buildjxmatrix: function buildjxmatrix(jMat) {
        //Builds from jStat Matrix
        var pass = new Array(jMat.length);
        for (var i = 0; i < jMat.length; i++) {
          pass[i] = jMat[i];
        }
        return jStat.builddxmatrix(pass);
      },
      buildymatrix: function buildymatrix(array) {
        return jStat(array).transpose();
      },
      buildjymatrix: function buildjymatrix(jMat) {
        return jMat.transpose();
      },
      matrixmult: function matrixmult(A, B) {
        var i, j, k, result, sum;
        if (A.cols() == B.rows()) {
          if (B.rows() > 1) {
            result = [];
            for (i = 0; i < A.rows(); i++) {
              result[i] = [];
              for (j = 0; j < B.cols(); j++) {
                sum = 0;
                for (k = 0; k < A.cols(); k++) {
                  sum += A.toArray()[i][k] * B.toArray()[k][j];
                }
                result[i][j] = sum;
              }
            }
            return jStat(result);
          }
          result = [];
          for (i = 0; i < A.rows(); i++) {
            result[i] = [];
            for (j = 0; j < B.cols(); j++) {
              sum = 0;
              for (k = 0; k < A.cols(); k++) {
                sum += A.toArray()[i][k] * B.toArray()[j];
              }
              result[i][j] = sum;
            }
          }
          return jStat(result);
        }
      },
      //regress and regresst to be fixed

      regress: function regress(jMatX, jMatY) {
        //print("regressin!");
        //print(jMatX.toArray());
        var innerinv = jStat.xtranspxinv(jMatX);
        //print(innerinv);
        var xtransp = jMatX.transpose();
        var next = jStat.matrixmult(jStat(innerinv), xtransp);
        return jStat.matrixmult(next, jMatY);
      },
      regresst: function regresst(jMatX, jMatY, sides) {
        var beta = jStat.regress(jMatX, jMatY);
        var compile = {};
        compile.anova = {};
        var jMatYBar = jStat.jMatYBar(jMatX, beta);
        compile.yBar = jMatYBar;
        var yAverage = jMatY.mean();
        compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
        compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
        compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
        compile.anova.sse = jStat.sse(jMatY, jMatYBar);
        compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.sst = jStat.sst(jMatY, yAverage);
        compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
        compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
        if (compile.anova.r2 < 0) compile.anova.r2 = 0;
        compile.anova.fratio = compile.anova.msr / compile.anova.mse;
        compile.anova.pvalue = jStat.anovaftest(compile.anova.fratio, jMatX[0].length - 1, jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.rmse = Math.sqrt(compile.anova.mse);
        compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
        if (compile.anova.r2adj < 0) compile.anova.r2adj = 0;
        compile.stats = new Array(jMatX[0].length);
        var covar = jStat.xtranspxinv(jMatX);
        var sds, ts, ps;
        for (var i = 0; i < beta.length; i++) {
          sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i][i]));
          ts = Math.abs(beta[i] / sds);
          ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
          compile.stats[i] = [beta[i], sds, ts, ps];
        }
        compile.regress = beta;
        return compile;
      },
      xtranspx: function xtranspx(jMatX) {
        return jStat.matrixmult(jMatX.transpose(), jMatX);
      },
      xtranspxinv: function xtranspxinv(jMatX) {
        var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
        var innerinv = jStat.inv(inner);
        return innerinv;
      },
      jMatYBar: function jMatYBar(jMatX, beta) {
        var yBar = jStat.matrixmult(jMatX, beta);
        return new jStat(yBar);
      },
      residuals: function residuals(jMatY, jMatYBar) {
        return jStat.matrixsubtract(jMatY, jMatYBar);
      },
      ssr: function ssr(jMatYBar, yAverage) {
        var ssr = 0;
        for (var i = 0; i < jMatYBar.length; i++) {
          ssr += Math.pow(jMatYBar[i] - yAverage, 2);
        }
        return ssr;
      },
      sse: function sse(jMatY, jMatYBar) {
        var sse = 0;
        for (var i = 0; i < jMatY.length; i++) {
          sse += Math.pow(jMatY[i] - jMatYBar[i], 2);
        }
        return sse;
      },
      sst: function sst(jMatY, yAverage) {
        var sst = 0;
        for (var i = 0; i < jMatY.length; i++) {
          sst += Math.pow(jMatY[i] - yAverage, 2);
        }
        return sst;
      },
      matrixsubtract: function matrixsubtract(A, B) {
        var ans = new Array(A.length);
        for (var i = 0; i < A.length; i++) {
          ans[i] = new Array(A[i].length);
          for (var j = 0; j < A[i].length; j++) {
            ans[i][j] = A[i][j] - B[i][j];
          }
        }
        return jStat(ans);
      }
    });
    // Make it compatible with previous version.
    jStat.jStat = jStat;
    return jStat;
  });
})(jstat);
var jstatExports = jstat.exports;
var jStat = /*@__PURE__*/getDefaultExportFromCjs(jstatExports);

/*
  SDTMath Static Class - Not intended for instantiation!

  Variables:
    H = hits
    M = misses
    FA = false alarms
    CR = correct rejections
    HR = hit rate
    zHR = Z-transformed hit rate
    FAR = false alarm rate
    zFAR = Z-transformed false alarm rate
    ACC = accuracy
    PPV = positive predictive value
    FOMR = false omission rate (used FOMR to avoid keyword FOR!)
    d = sensitivity (d' for equal variance, d_a for unequal variance)
    c = response bias (c for equal variance, c_a for unequal variance)
    s = standard deviation of signal distribution, with standard deviation of noise distribution = 1
    muN = mean of noise distribution
    muS = mean of signal distribution
    l = lambda, threshold location, with l = 0 indicating no response bias
    h = height of signal distribution

  Functions:
    Z = z-score
    Z^-1 = inverse z-score

  Equations (* = unequal variance):
    HR = H / (H + M)
    FAR = FA / (FA + CR)
    ACC = (H + CR) / (H + M + FA + CR)
    ACC = (HR + (1 - FAR)) / 2
    PPV = H / (H + FA)
    FOMR = M / (M + CR)

    d' = Z^-1(HR) - Z^-1(FAR)
    *d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))

    c = -(Z^-1(HR) + Z^-1(FAR))/2
    *c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))

    HR = Z(d'/2 - c)
    *HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))

    FAR = Z(-d'/2 - c)
    *FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))

    HR = Z(d' + Z^-1(FAR))
    *HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)

    HR = Z(-2c - Z^-1(FAR))
    *HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))

    muN = -d'/2
    *muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'

    d' = -2 * muN
    *d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN

    muS = d'/2
    *muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'

    d' = 2 * muS
    *d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS

    l = c
    *l = ((s^2 + 1) / 2)^(1/2) * c

    c = l
    *c = (2 / (s^2 + 1))^(1/2) * l

    h = 1 / (s * (2 * pi)^(1/2))
    s = 1 / (h * (2 * pi)^(1/2))

    zHR = Z(HR)

    zFAR = Z(FAR)

    HR = Z^-1(zHR)

    FAR = Z^-1(zFAR)

*/
class SDTMath {
  static hM2Hr(h, m) {
    if (h === 0 && m === 0) {
      return 0;
    }
    return h / (h + m);
  }
  static faCr2Far(fa, cr) {
    if (fa === 0 && cr === 0) {
      return 0;
    }
    return fa / (fa + cr);
  }
  static hMFaCr2Acc(h, m, fa, cr) {
    if (h === 0 && m === 0 && fa === 0 && cr === 0) {
      return 0;
    }
    return (h + cr) / (h + m + fa + cr);
  }
  static hrFar2Acc(hr, far) {
    return (hr + (1 - far)) / 2;
  }
  static hFa2Ppv(h, fa) {
    if (h === 0 && fa === 0) {
      return 0;
    }
    return h / (h + fa);
  }
  static mCr2Fomr(m, cr) {
    if (m === 0 && cr === 0) {
      return 0;
    }
    return m / (m + cr);
  }
  static hrFar2D(hr, far, s = 1) {
    if (s === 1) return jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1);
    return Math.sqrt(2 / (s * s + 1)) * (s * jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1));
  }
  static hrFar2C(hr, far, s = 1) {
    if (s === 1) return -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1)) / 2;
    return Math.sqrt(2 / (s * s + 1)) * (s / (s + 1)) * -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1));
  }
  static dC2Hr(d, c, s = 1) {
    if (s === 1) return jStat.normal.cdf(d / 2 - c, 0, 1);
    return jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1);
  }
  static dC2Far(d, c, s = 1) {
    if (s === 1) return jStat.normal.cdf(-(d / 2 + c), 0, 1);
    return jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1);
  }
  static dFar2Hr(d, far, s = 1) {
    if (s === 1) return jStat.normal.cdf(d + jStat.normal.inv(far, 0, 1), 0, 1);
    return jStat.normal.cdf((Math.sqrt((s * s + 1) / 2) * d + jStat.normal.inv(far, 0, 1)) / s, 0, 1);
  }
  static cFar2Hr(c, far, s = 1) {
    if (s === 1) return jStat.normal.cdf(-(2 * c) - jStat.normal.inv(far, 0, 1), 0, 1);
    return jStat.normal.cdf(-Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jStat.normal.inv(far, 0, 1), 0, 1);
  }
  static d2MuN(d, s = 1) {
    if (s === 1) return -d / 2;
    return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
  }
  static muN2D(muN, s = 1) {
    if (s === 1) return -2 * muN;
    return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
  }
  static d2MuS(d, s = 1) {
    if (s === 1) return d / 2;
    return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
  }
  static muS2D(muS, s = 1) {
    if (s === 1) return 2 * muS;
    return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
  }
  static c2L(c, s = 1) {
    if (s === 1) return c;
    return Math.sqrt((s * s + 1) / 2) * c;
  }
  static l2C(l, s = 1) {
    if (s === 1) return l;
    return Math.sqrt(2 / (s * s + 1)) * l;
  }
  static s2H(s = 1) {
    return 1 / (s * Math.sqrt(2 * Math.PI));
  }
  static h2S(h) {
    return 1 / (h * Math.sqrt(2 * Math.PI));
  }
  static hr2Zhr(hr) {
    return jStat.normal.inv(hr, 0, 1);
  }
  static far2Zfar(far) {
    return jStat.normal.inv(far, 0, 1);
  }
  static zhr2Hr(zhr) {
    return jStat.normal.cdf(zhr, 0, 1);
  }
  static zfar2Far(zfar) {
    return jStat.normal.cdf(zfar, 0, 1);
  }
}

/*
  ROCSpace element
  <roc-space>

  Attributes:
    FAR; HR;
    d'; C; zFAR; zHR

    draggable: yes/no

    scale: FAR/HR; zFAR/zHR; d'/C
    grid: FAR/HR; zFAR/zHR; d'/C
    isos: d'; C; FAR; HR

  Styles:
    ??
*/
class ROCSpace extends DecidablesMixinResizeable(DetectableElement) {
  static get properties() {
    return {
      contour: {
        attribute: 'contour',
        type: String,
        reflect: true
      },
      point: {
        attribute: 'point',
        type: String,
        reflect: true
      },
      isoD: {
        attribute: 'iso-d',
        type: String,
        reflect: true
      },
      isoC: {
        attribute: 'iso-c',
        type: String,
        reflect: true
      },
      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
        reflect: true
      },
      far: {
        attribute: 'far',
        type: Number,
        reflect: true
      },
      hr: {
        attribute: 'hr',
        type: Number,
        reflect: true
      },
      d: {
        attribute: false,
        type: Number,
        reflect: false
      },
      c: {
        attribute: false,
        type: Number,
        reflect: false
      },
      s: {
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
    this.sdt = false;
    this.contours = ['sensitivity', 'bias', 'accuracy'];
    this.contour = undefined;
    this.points = ['all', 'first', 'rest', 'none'];
    this.point = 'all';
    this.isoDs = ['all', 'first', 'rest', 'none'];
    this.isoD = 'first';
    this.isoCs = ['all', 'first', 'rest', 'none'];
    this.isoC = 'first';
    this.zRoc = false;
    this.far = 0.25;
    this.hr = 0.75;
    this.s = 1;
    this.label = '';
    this.locations = [{
      name: 'default',
      far: this.far,
      hr: this.hr,
      s: this.s,
      label: ''
    }];
    this.pointArray = [];
    this.isoDArray = [];
    this.isoCArray = [];
    this.alignState();
  }
  alignState() {
    this.locations[0].hr = this.hr;
    this.locations[0].far = this.far;
    this.locations[0].s = this.s;
    this.locations[0].label = this.label;
    this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
    this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
    this.pointArray = [];
    this.isoDArray = [];
    this.isoCArray = [];
    this.locations.forEach((item, index) => {
      item.d = SDTMath.hrFar2D(item.hr, item.far, item.s);
      item.c = SDTMath.hrFar2C(item.hr, item.far, item.s);
      if (index === 0 && (this.point === 'first' || this.point === 'all')) {
        this.pointArray.push(item);
      } else if (index > 0 && (this.point === 'rest' || this.point === 'all')) {
        this.pointArray.push(item);
      }
      if (index === 0 && (this.isoD === 'first' || this.isoD === 'all')) {
        this.isoDArray.push(item);
      } else if (index > 0 && (this.isoD === 'rest' || this.isoD === 'all')) {
        this.isoDArray.push(item);
      }
      if (index === 0 && (this.isoC === 'first' || this.isoC === 'all')) {
        this.isoCArray.push(item);
      } else if (index > 0 && (this.isoC === 'rest' || this.isoC === 'all')) {
        this.isoCArray.push(item);
      }
    });
  }
  set(hr, far, name = 'default', label = '', s = 1) {
    if (name === 'default') {
      this.hr = hr;
      this.far = far;
      this.s = s;
      this.label = label;
    }
    const location = this.locations.find(item => {
      return item.name === name;
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: far,
        hr: hr,
        s: s,
        label: label
      });
    } else {
      location.hr = hr;
      location.far = far;
      location.s = s;
      location.label = label;
    }
    this.requestUpdate();
  }
  setWithSDT(d, c, name = 'default', label = '', s = 1) {
    if (name === 'default') {
      this.hr = SDTMath.dC2Hr(d, c, s);
      this.far = SDTMath.dC2Far(d, c, s);
      this.s = s;
      this.label = label;
    }
    const location = this.locations.find(item => {
      return item.name === name;
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: SDTMath.dC2Far(d, c, s),
        hr: SDTMath.dC2Hr(d, c, s),
        s: s,
        label: label
      });
    } else {
      location.hr = SDTMath.dC2Hr(d, c, s);
      location.far = SDTMath.dC2Far(d, c, s);
      location.s = s;
      location.label = label;
    }
    this.sdt = true;
    this.requestUpdate();
  }
  static get styles() {
    return [super.styles, i$2`
        :host {
          display: inline-block;

          width: 20rem;
          height: 20rem;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        .plot-contour,
        .legend-contour .contour {
          stroke: var(---color-background);
          stroke-width: 0.5;
        }

        text {
          /* stylelint-disable property-no-vendor-prefix */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .point.interactive {
          cursor: move;

          filter: url("#shadow-2");
          outline: none;

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          stroke: #000000;
          stroke-opacity: 0;
          stroke-width: 0;
        }

        /* Make a larger target for touch users */
        @media (pointer: coarse) {
          .point.interactive .circle {
            stroke: #000000;
            stroke-opacity: 0;
            stroke-width: 12px;
          }
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

        .background {
          fill: var(---color-element-background);
          stroke: var(---color-element-border);
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title-x,
        .title-y,
        .title-contour {
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
        }

        .axis-contour .domain {
          stroke: none;
        }

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve-iso-d {
          fill: none;
          stroke: var(---color-d);
          stroke-width: 2;
        }

        .curve-iso-c {
          fill: none;
          stroke: var(---color-c);
          stroke-width: 2;
        }

        .point .circle {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: central;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }
      `];
  }
  render() {
    /* eslint-disable-line class-methods-use-this */
    return x$1`
      ${DetectableElement.svgFilters}
    `;
  }
  willUpdate() {
    this.alignState();
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
      top: 2 * this.rem,
      bottom: 3 * this.rem,
      left: 3 * this.rem,
      right: 2 * this.rem
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const xScale = linear().domain(this.zRoc ? [-3, 3] : [0, 1]) // zFAR or FAR
    .range([0, width]);
    this.xScale = xScale;

    // Y Scale
    const yScale = linear().domain(this.zRoc ? [3, -3] : [1, 0]) // zHR or HR
    .range([0, height]);
    this.yScale = yScale;

    // Drag behavior
    const drag$1 = drag().subject((event, datum) => {
      return {
        x: this.xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far),
        y: this.yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const far = this.zRoc ? SDTMath.zfar2Far(this.xScale.invert(event.x)) : this.xScale.invert(event.x);
      const hr = this.zRoc ? SDTMath.zhr2Hr(this.yScale.invert(event.y)) : this.yScale.invert(event.y);
      // Clamp FAR and HR to ROC Space
      datum.far = far < 0.001 ? 0.001 : far > 0.999 ? 0.999 : far;
      datum.hr = hr <= 0.001 ? 0.001 : hr >= 0.999 ? 0.999 : hr;
      // console.log(`roc-space.drag: far = ${datum.far}, hr = ${datum.hr}`);
      if (datum.name === 'default') {
        this.far = datum.far;
        this.hr = datum.hr;
      }
      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('roc-point-change', {
        detail: {
          name: datum.name,
          far: datum.far,
          hr: datum.hr,
          d: datum.d,
          c: datum.c,
          s: datum.s,
          label: datum.label
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });

    // Line for FAR/HR Space
    const line$1 = line().x(datum => {
      return xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far);
    }).y(datum => {
      return yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr);
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
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`);

    // Plot
    //  ENTER
    const plotEnter = svgEnter.append('g').classed('plot', true);
    //  MERGE
    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Clippath
    //  ENTER
    plotEnter.append('clipPath').attr('id', 'clip-roc-space').append('rect');
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

    // Contour Plotting
    //  Handles: Bias, Sensitivity, & Accuracy
    if (this.firstUpdate || changedProperties.has('contour') || changedProperties.has('zRoc') || changedProperties.has('width') || changedProperties.has('height') || changedProperties.has('rem') || changedProperties.has('s')) {
      if (this.contour !== undefined) {
        // Contour Plot
        const n = 100; // Resolution
        const contourValues = [];
        for (let j = 0.5, k = 0; j < n; j += 1) {
          for (let i = 0.5; i < n; i += 1, k += 1) {
            const hr = this.zRoc ? SDTMath.zhr2Hr(i / n * 6 - 3) : i / n;
            const far = this.zRoc ? SDTMath.zfar2Far((1 - j / n) * 6 - 3) : 1 - j / n;
            contourValues[k] = this.contour === 'bias' ? SDTMath.hrFar2C(hr, far, this.s) : this.contour === 'sensitivity' ? SDTMath.hrFar2D(hr, far, this.s) : this.contour === 'accuracy' ? SDTMath.hrFar2Acc(hr, far) : null;
          }
        }
        const contourThresholds = this.contour === 'bias' ? range(-3, 3, 0.25) : this.contour === 'sensitivity' ? range(-6, 6, 0.5) : this.contour === 'accuracy' ? range(0, 1, 0.05) : null;
        const contours = Contours().size([n, n]).thresholds(contourThresholds);
        const contourColorStart = this.getComputedStyleValue(this.contour === 'bias' ? '---color-element-background' : this.contour === 'sensitivity' ? '---color-d' : this.contour === 'accuracy' ? '---color-acc-dark' : null);
        const contourColorEnd = this.getComputedStyleValue(this.contour === 'bias' ? '---color-c' : this.contour === 'sensitivity' ? '---color-element-background' : this.contour === 'accuracy' ? '---color-element-background' : null);
        const contourColor = linear().domain(extent(contourThresholds)).interpolate(() => {
          return interpolateRgb(contourColorStart, contourColorEnd);
        });
        //  DATA-JOIN
        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([this.contour]);
        //  ENTER
        const contourPlotEnter = contourPlotUpdate.enter().append('g').classed('plot-contour', true);
        //  MERGE
        const contourPlotMerge = contourPlotEnter.merge(contourPlotUpdate);

        // Contour Plot Contours
        //  DATA-JOIN
        const contoursUpdate = contourPlotMerge.selectAll('.contour').data(contours(contourValues));
        //  ENTER
        const contoursEnter = contoursUpdate.enter().append('path').classed('contour', true);
        //  MERGE
        contoursEnter.merge(contoursUpdate).transition().duration(transitionDuration * 2) // Extra long transition!
        .ease(cubicOut).attr('d', index(identity$1().scale(width / n))) // ????
        .attr('fill', datum => {
          return contourColor(datum.value);
        });
        //  EXIT
        contoursUpdate.exit().remove();

        // Contour Title
        //  DATA-JOIN
        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([this.contour]);
        //  ENTER
        const contourTitleEnter = contourTitleUpdate.enter().append('text').classed('title-contour', true).attr('text-anchor', 'middle');
        //  MERGE
        contourTitleEnter.merge(contourTitleUpdate).classed('math-var', this.contour === 'bias' || this.contour === 'sensitivity').attr('transform', this.contour === 'bias' ? `translate(${width + 1.25 * this.rem}, ${this.rem})` : this.contour === 'sensitivity' ? `translate(${width + 1.25 * this.rem}, ${this.rem})` : this.contour === 'accuracy' ? `translate(${width + 1.125 * this.rem}, ${this.rem})` : null).text(this.contour === 'bias' ? 'c' : this.contour === 'sensitivity' ? 'd′' : this.contour === 'accuracy' ? 'Acc' : null);

        // Contour Legend
        const l = 100;
        const contourLegendValues = []; // new Array(4 * l);
        for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
          contourLegendValues[k] = this.contour === 'bias' ? -(i / n * 6 - 3) : this.contour === 'sensitivity' ? i / n * 12 - 6 : this.contour === 'accuracy' ? i / n : null;
          contourLegendValues[k + 1] = contourLegendValues[k];
          contourLegendValues[k + 2] = contourLegendValues[k];
          contourLegendValues[k + 3] = contourLegendValues[k];
        }
        const legendContours = Contours().size([4, l]).thresholds(contourThresholds);
        const legendScale = linear().domain(this.contour === 'bias' ? [3, -3] : this.contour === 'sensitivity' ? [6, -6] : this.contour === 'accuracy' ? [1, 0] : null).range([0, 10 * this.rem]);
        //  DATA-JOIN
        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([this.contour]);
        //  ENTER
        const contourLegendEnter = contourLegendUpdate.enter().append('g').classed('legend-contour', true);
        //  MERGE
        const contourLegendMerge = contourLegendEnter.merge(contourLegendUpdate).attr('transform', this.contour === 'bias' ? `translate(${width + 1.25 * this.rem}, ${1.5 * this.rem})` : this.contour === 'sensitivity' ? `translate(${width + 1.25 * this.rem}, ${1.5 * this.rem})` : this.contour === 'accuracy' ? `translate(${width + 1.5 * this.rem}, ${1.5 * this.rem})` : null);
        //  EXIT
        contourLegendUpdate.exit().remove();

        // Contour Legend Axis
        //  ENTER
        contourLegendEnter.append('g').classed('axis-contour', true);
        //  MERGE
        contourLegendMerge.select('.axis-contour').call(axisLeft(legendScale).ticks(7).tickSize(0)).attr('font-size', null).attr('font-family', null);

        // Contour Legend Contours
        //  DATA-JOIN
        const legendContoursUpdate = contourLegendMerge.selectAll('.contour').data(legendContours(contourLegendValues));
        //  ENTER
        const legendContoursEnter = legendContoursUpdate.enter().append('path').classed('contour', true);
        //  MERGE
        legendContoursEnter.merge(legendContoursUpdate).attr('d', index(identity$1().scale(10 * this.rem / l))) // ????
        .attr('fill', datum => {
          return contourColor(datum.value);
        });
        //  EXIT
        legendContoursUpdate.exit().remove();
      } else {
        // Contour Plot
        //  DATA-JOIN
        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([]);
        //  EXIT
        contourPlotUpdate.exit().remove();

        // Contour Title
        //  DATA-JOIN
        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([]);
        //  EXIT
        contourTitleUpdate.exit().remove();

        // Contour Legend
        //  DATA-JOIN
        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([]);
        //  EXIT
        contourLegendUpdate.exit().remove();
      }
    }

    // X Axis
    //  ENTER
    underlayerEnter.append('g').classed('axis-x', true);
    //  MERGE
    const axisXMerge = underlayerMerge.select('.axis-x').attr('transform', `translate(0, ${height})`);
    const axisXTransition = axisXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    axisXTransition.selectAll('line, path').attr('stroke', null);

    // X Axis Title
    //  ENTER
    const titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
    titleXEnter.append('tspan').classed('z math-var', true);
    titleXEnter.append('tspan').classed('name', true);
    //  MERGE
    const titleXMerge = underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`);
    titleXMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
    titleXMerge.select('tspan.name').text(this.zRoc ? '(False Alarm Rate)' : 'False Alarm Rate');

    // Y Axis
    //  ENTER
    underlayerEnter.append('g').classed('axis-y', true);
    // MERGE
    const axisYTransition = underlayerMerge.select('.axis-y').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
    axisYTransition.selectAll('line, path').attr('stroke', null);

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
    titleYEnter.append('tspan').classed('z math-var', true);
    titleYEnter.append('tspan').classed('name', true);
    //  MERGE
    const titleYMerge = underlayerMerge.select('.title-y').attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`);
    titleYMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
    titleYMerge.select('tspan.name').text(this.zRoc ? '(Hit Rate)' : 'Hit Rate');

    // No-Information Line
    //  ENTER
    underlayerEnter.append('line').classed('diagonal', true);
    //  MERGE
    underlayerMerge.select('.diagonal').attr('x1', this.zRoc ? xScale(-3) : xScale(0)).attr('y1', this.zRoc ? yScale(-3) : yScale(0)).attr('x2', this.zRoc ? xScale(3) : xScale(1)).attr('y2', this.zRoc ? yScale(3) : yScale(1));

    // Content
    //  ENTER
    plotEnter.append('g').classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Iso-sensitivity Curve
    //  DATA-JOIN
    const isoDUpdate = contentMerge.selectAll('.curve-iso-d').data(this.isoDArray, datum => {
      return datum.name;
    });
    //  ENTER
    const isoDEnter = isoDUpdate.enter().append('path').classed('curve-iso-d', true).attr('clip-path', 'url(#clip-roc-space)');
    //  MERGE
    const isoDMerge = isoDEnter.merge(isoDUpdate);
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      isoDMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
      .ease(cubicOut).attr('d', datum => {
        return line$1(range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
          return {
            far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
            hr: this.zRoc ? SDTMath.dFar2Hr(datum.d, SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.dFar2Hr(datum.d, xScale.invert(x), datum.s)
          };
        }));
      });
    } else if (this.sdt) {
      isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        element.hr = undefined;
        element.far = undefined;
        const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
        const interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
        return time => {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          const isoD = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
            return {
              far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: this.zRoc ? SDTMath.dFar2Hr(element.d, SDTMath.zfar2Far(xScale.invert(x)), element.s) : SDTMath.dFar2Hr(element.d, xScale.invert(x), element.s)
            };
          });
          return line$1(isoD);
        };
      });
    } else {
      isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        element.d = undefined;
        element.s = undefined;
        const interpolateHr = interpolate$1(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
        const interpolateFar = interpolate$1(element.far !== undefined ? element.far : datum.far, datum.far);
        return time => {
          element.hr = interpolateHr(time);
          element.far = interpolateFar(time);
          const isoD = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
            return {
              far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: this.zRoc ? SDTMath.dFar2Hr(SDTMath.hrFar2D(element.hr, element.far, datum.s), SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.dFar2Hr(SDTMath.hrFar2D(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
            };
          });
          return line$1(isoD);
        };
      });
    }
    //  EXIT
    // NOTE: Could add a transition here
    isoDUpdate.exit().remove();

    // Iso-bias Curve
    //  DATA-JOIN
    const isoCUpdate = contentMerge.selectAll('.curve-iso-c').data(this.isoCArray, datum => {
      return datum.name;
    });
    //  ENTER
    const isoCEnter = isoCUpdate.enter().append('path').classed('curve-iso-c', true).attr('clip-path', 'url(#clip-roc-space)');
    //  MERGE
    const isoCMerge = isoCEnter.merge(isoCUpdate);
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      isoCMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
      .ease(cubicOut).attr('d', datum => {
        return line$1(range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
          return {
            far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
            hr: this.zRoc ? SDTMath.cFar2Hr(datum.c, SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.cFar2Hr(datum.c, xScale.invert(x), datum.s)
          };
        }));
      });
    } else if (this.sdt) {
      isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        element.hr = undefined;
        element.far = undefined;
        const interpolateC = interpolate$1(element.c !== undefined ? element.c : datum.c, datum.c);
        const interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
        return time => {
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          const isoC = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
            return {
              far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: this.zRoc ? SDTMath.cFar2Hr(element.c, SDTMath.zfar2Far(xScale.invert(x)), element.s) : SDTMath.cFar2Hr(element.c, xScale.invert(x), element.s)
            };
          });
          return line$1(isoC);
        };
      });
    } else {
      isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        element.c = undefined;
        element.s = undefined;
        const interpolateHr = interpolate$1(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
        const interpolateFar = interpolate$1(element.far !== undefined ? element.far : datum.far, datum.far);
        return time => {
          element.hr = interpolateHr(time);
          element.far = interpolateFar(time);
          const isoC = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(x => {
            return {
              far: this.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: this.zRoc ? SDTMath.cFar2Hr(SDTMath.hrFar2C(element.hr, element.far, datum.s), SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.cFar2Hr(SDTMath.hrFar2C(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
            };
          });
          return line$1(isoC);
        };
      });
    }
    //  EXIT
    // NOTE: Could add a transition here
    isoCUpdate.exit().remove();

    // Point
    //  DATA-JOIN
    const pointUpdate = contentMerge.selectAll('.point').data(this.pointArray, datum => {
      return datum.name;
    });
    //  ENTER
    const pointEnter = pointUpdate.enter().append('g').classed('point', true);
    pointEnter.append('circle').classed('circle', true);
    pointEnter.append('text').classed('label', true);
    //  MERGE
    const pointMerge = pointEnter.merge(pointUpdate);
    pointMerge.select('text').text(datum => {
      return datum.label;
    });
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        pointMerge.attr('tabindex', 0).classed('interactive', true).call(drag$1).on('keydown', (event, datum) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let hr = this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr;
            let far = this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far;
            switch (event.key) {
              case 'ArrowUp':
                hr += this.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                break;
              case 'ArrowDown':
                hr -= this.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                break;
              case 'ArrowRight':
                far += this.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                break;
              case 'ArrowLeft':
                far -= this.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                break;
              // no-op
            }
            hr = this.zRoc ? SDTMath.zhr2Hr(hr) : hr;
            far = this.zRoc ? SDTMath.zfar2Far(far) : far;
            // Clamp FAR and HR to ROC Space
            hr = hr < 0.001 ? 0.001 : hr > 0.999 ? 0.999 : hr;
            far = far < 0.001 ? 0.001 : far > 0.999 ? 0.999 : far;
            if (hr !== datum.hr || far !== datum.far) {
              datum.hr = hr;
              datum.far = far;
              if (datum.name === 'default') {
                this.hr = datum.hr;
                this.far = datum.far;
              }
              this.alignState();
              this.requestUpdate();
              this.dispatchEvent(new CustomEvent('roc-point-change', {
                detail: {
                  name: datum.name,
                  far: datum.far,
                  hr: datum.hr,
                  d: datum.d,
                  c: datum.c,
                  s: datum.s,
                  label: datum.label
                },
                bubbles: true
              }));
            }
            event.preventDefault();
          }
        });
      } else {
        pointMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
      }
    }
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      pointMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
      .ease(cubicOut).attr('transform', (datum, index, elements) => {
        const element = elements[index];
        element.d = undefined;
        element.c = undefined;
        element.s = undefined;
        return `translate(
            ${xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far)},
            ${yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)}
          )`;
      });
    } else if (this.sdt) {
      pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('transform', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
        const interpolateC = interpolate$1(element.c !== undefined ? element.c : datum.c, datum.c);
        const interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
        return time => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          return `translate(
              ${xScale(this.zRoc ? SDTMath.far2Zfar(SDTMath.dC2Far(element.d, element.c, element.s)) : SDTMath.dC2Far(element.d, element.c, element.s))},
              ${yScale(this.zRoc ? SDTMath.hr2Zhr(SDTMath.dC2Hr(element.d, element.c, element.s)) : SDTMath.dC2Hr(element.d, element.c, element.s))}
            )`;
        };
      });
    } else {
      pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('transform', (datum, index, elements) => {
        const element = elements[index];
        element.d = undefined;
        element.c = undefined;
        element.s = undefined;
        return `translate(
            ${xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far)},
            ${yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)}
          )`;
      });
    }
    //  EXIT
    // NOTE: Could add a transition here
    pointUpdate.exit().remove();
    this.drag = false;
    this.sdt = false;
    this.firstUpdate = false;
  }
}
customElements.define('roc-space', ROCSpace);

/*
  DetectableControl element
  <detectable-control>

  Attributes:

*/
class DetectableControl extends DetectableElement {
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
      payoff: {
        attribute: 'payoff',
        type: Number,
        reflect: true
      },
      color: {
        attribute: 'color',
        type: String,
        reflect: true
      },
      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
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
    this.duration = undefined;
    this.coherence = undefined;
    this.payoff = undefined;
    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome', 'all'];
    this.color = undefined;
    this.zRoc = undefined;
    this.run = false;
    this.pause = false;
    this.reset = false;

    // Properties
    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
  }
  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-trials', {
      detail: {
        trials: this.trials
      },
      bubbles: true
    }));
  }
  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-duration', {
      detail: {
        duration: this.duration
      },
      bubbles: true
    }));
  }
  setCoherence(e) {
    this.coherence = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-coherence', {
      detail: {
        coherence: this.coherence
      },
      bubbles: true
    }));
  }
  setPayoff(e) {
    this.payoff = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-payoff', {
      detail: {
        payoff: this.payoff
      },
      bubbles: true
    }));
  }
  chooseColor(e) {
    this.color = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-color', {
      detail: {
        color: this.color
      },
      bubbles: true
    }));
  }
  flipZRoc(e) {
    this.zRoc = e.target.checked;
    this.dispatchEvent(new CustomEvent('detectable-control-z-roc', {
      detail: {
        zRoc: this.zRoc
      },
      bubbles: true
    }));
  }
  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('detectable-control-run', {
      detail: {},
      bubbles: true
    }));
  }
  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('detectable-control-pause', {
      detail: {},
      bubbles: true
    }));
  }
  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('detectable-control-reset', {
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

        /* Payoff  Slider */
        .payoff {
          --decidables-spinner-prefix: "$";
        }
      `];
  }
  render() {
    return x$1`
      <div class="holder">
        ${this.trials ? x$1`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>` : x$1``}
        ${this.duration ? x$1`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>` : x$1``}
        ${this.coherence ? x$1`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>` : x$1``}
        ${this.payoff ? x$1`<decidables-slider class="payoff" min="0" max="100" step="1" .value=${this.payoff} @change=${this.setPayoff.bind(this)} @input=${this.setPayoff.bind(this)}>Payoff</decidables-slider>` : x$1``}
        ${this.color !== undefined ? x$1`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${this.color === 'none'}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="accuracy" ?checked=${this.color === 'accuracy'}>Accuracy</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="stimulus" ?checked=${this.color === 'stimulus'}>Stimulus</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="response" ?checked=${this.color === 'response'}>Response</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${this.color === 'outcome'}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${this.color === 'all'}>All</decidables-toggle-option>
            </decidables-toggle>
          ` : x$1``}
        ${this.zRoc !== undefined ? x$1`
            <decidables-switch ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidables-switch>
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
customElements.define('detectable-control', DetectableControl);

/*
  SDTModel element
  <sdt-model>

  Attributes:
    d'; C;
    FAR; HR; zFAR; zHR;

    draggable: d'; C;
    highlight: H; M; CR; FA;

    Styles:
      ??
*/
class SDTModel extends DecidablesMixinResizeable(DetectableElement) {
  static get properties() {
    return {
      color: {
        attribute: 'color',
        type: String,
        reflect: true
      },
      distributions: {
        attribute: 'distributions',
        type: Boolean,
        reflect: true
      },
      threshold: {
        attribute: 'threshold',
        type: Boolean,
        reflect: true
      },
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true
      },
      sensitivity: {
        attribute: 'sensitivity',
        type: Boolean,
        reflect: true
      },
      bias: {
        attribute: 'bias',
        type: Boolean,
        reflect: true
      },
      variance: {
        attribute: 'variance',
        type: Boolean,
        reflect: true
      },
      histogram: {
        attribute: 'histogram',
        type: Boolean,
        reflect: true
      },
      d: {
        attribute: 'd',
        type: Number,
        reflect: true
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true
      },
      far: {
        attribute: false,
        type: Number,
        reflect: false
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false
      },
      binWidth: {
        attribute: false,
        type: Number,
        reflect: false
      },
      trials: {
        attribute: false,
        type: Array,
        reflect: false
      }
    };
  }
  constructor() {
    super();

    // Attributes
    this.colors = ['outcome', 'response', 'stimulus', 'none']; // Allowable values of 'color'
    this.color = 'outcome'; // How to color distributions and trials
    this.distributions = false; // Show distributions?
    this.threshold = false; // Show threshold?
    this.unequal = false; // Allow unequal variance?
    this.sensitivity = false; // Show d'?
    this.bias = false; // Show c?
    this.variance = false; // Show variance?
    this.histogram = false; // Show histogram?

    this.d = 1; // Sensitivity
    this.c = 0; // Bias
    this.s = 1; // Variance

    // Properties
    this.binWidth = 0.25; // Histogram bin width in units of evidence
    this.signals = ['present', 'absent']; // Allowable values of trial.signal
    this.responses = ['present', 'absent']; // Allowable values of trial.response
    this.trials = []; // Array of simulated trials

    // Private
    this.muN = NaN; // Mean of noise distribution
    this.muS = NaN; // Mean of signal distribution
    this.l = NaN; // lambda (threshold location)
    this.hS = NaN; // Height of signal distribution

    this.binRange = [-3.0, 3.0]; // Range of histogram
    this.h = 0; // Hits
    this.m = 0; // Misses
    this.fa = 0; // False alarms
    this.cr = 0; // Correct rejections

    this.firstUpdate = true; // Are we waiting for the first update?
    this.drag = false; // Are we currently dragging?

    this.alignState();
  }
  reset() {
    this.trials = [];
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
  }
  trial(trialNumber, signal, duration, wait, iti) {
    const trial = {};
    trial.new = true;
    trial.paused = false;
    trial.trial = trialNumber;
    trial.signal = signal;
    trial.duration = duration;
    trial.wait = wait;
    trial.iti = iti;
    trial.evidence = jStat.normal.sample(0, 1);
    this.alignTrial(trial);
    this.trials.push(trial);
    this.requestUpdate();
  }
  alignTrial(trial) {
    if (trial.signal === 'present') {
      trial.trueEvidence = trial.evidence * this.s + this.muS;
      trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
      trial.outcome = trial.response === 'present' ? 'h' : 'm';
    } else {
      // trial.signal == 'absent'
      trial.trueEvidence = trial.evidence + this.muN;
      trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
      trial.outcome = trial.response === 'present' ? 'fa' : 'cr';
    }
    if (!trial.new) this[trial.outcome] += 1;
    return trial;
  }
  alignState() {
    this.far = SDTMath.dC2Far(this.d, this.c, this.s);
    this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
    this.muN = SDTMath.d2MuN(this.d, this.s);
    this.muS = SDTMath.d2MuS(this.d, this.s);
    this.l = SDTMath.c2L(this.c, this.s);
    this.hS = SDTMath.s2H(this.s);
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
    for (let i = 0; i < this.trials.length; i += 1) {
      this.alignTrial(this.trials[i]);
    }
  }
  static get styles() {
    return [super.styles, i$2`
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

        .tick {
          font-size: 0.75rem;
        }

        .axis-x path,
        .axis-x line,
        .axis-y path,
        .axis-y line,
        .axis-y2 path,
        .axis-y2 line {
          stroke: var(---color-element-border);
        }

        .noise.interactive,
        .signal.interactive,
        .threshold.interactive {
          cursor: ew-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .signal.unequal {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .signal.interactive.unequal {
          cursor: move;
        }

        .noise.interactive:hover,
        .signal.interactive:hover,
        .signal.unequal:hover,
        .threshold.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateX(0);
        }

        .noise.interactive:active,
        .signal.interactive:active,
        .signal.unequal:active,
        .threshold.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        :host(.keyboard) .noise.interactive:focus,
        :host(.keyboard) .signal.interactive:focus,
        :host(.keyboard) .signal.unequal:focus,
        :host(.keyboard) .threshold.interactive:focus {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .underlayer .background {
          fill: var(---color-element-background);
          stroke: none;
        }

        .overlayer .background {
          fill: none;
          stroke: var(---color-element-border);
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title-x,
        .title-y,
        .title-y2 {
          font-weight: 600;

          fill: currentColor;
        }

        .curve-cr,
        .curve-fa,
        .curve-m,
        .curve-h {
          fill-opacity: 0.5;
          stroke: none;

          transition: fill var(---transition-duration) ease;
        }

        .curve-cr {
          fill: var(---color-cr);
        }

        .curve-fa {
          fill: var(---color-fa);
        }

        .curve-m {
          fill: var(---color-m);
        }

        .curve-h {
          fill: var(---color-h);
        }

        :host([color="accuracy"]) .curve-h,
        :host([color="accuracy"]) .curve-cr {
          fill: var(---color-correct);
        }

        :host([color="accuracy"]) .curve-m,
        :host([color="accuracy"]) .curve-fa {
          fill: var(---color-error);
        }

        :host([color="stimulus"]) .curve-cr,
        :host([color="stimulus"]) .curve-fa {
          fill: var(---color-far);
        }

        :host([color="stimulus"]) .curve-m,
        :host([color="stimulus"]) .curve-h {
          fill: var(---color-hr);
        }

        :host([color="response"]) .curve-cr,
        :host([color="response"]) .curve-m {
          fill: var(---color-absent);
        }

        :host([color="response"]) .curve-fa,
        :host([color="response"]) .curve-h {
          fill: var(---color-present);
        }

        :host([color="none"]) .curve-cr,
        :host([color="none"]) .curve-fa,
        :host([color="none"]) .curve-m,
        :host([color="none"]) .curve-h {
          fill: var(---color-element-enabled);
        }

        .curve-noise,
        .curve-signal {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .measure-d,
        .measure-c,
        .measure-s {
          pointer-events: none;
        }

        .threshold .line {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .threshold .handle {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        /* Make a larger target for touch users */
        @media (pointer: coarse) {
          .threshold.interactive .handle {
            stroke: #000000;
            stroke-opacity: 0;
            stroke-width: 12px;
          }
        }

        .measure-d .line,
        .measure-d .cap-left,
        .measure-d .cap-right {
          stroke: var(---color-d);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-d .label {
          font-size: 0.75rem;

          text-anchor: start;
          fill: currentColor;
        }

        .measure-c .line,
        .measure-c .cap-zero {
          stroke: var(---color-c);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-c .label {
          font-size: 0.75rem;

          fill: currentColor;
        }

        .measure-s .line,
        .measure-s .cap-left,
        .measure-s .cap-right {
          stroke: var(---color-s);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-s .label {
          font-size: 0.75rem;

          text-anchor: middle;
          fill: currentColor;
        }
      `];
  }
  render() {
    /* eslint-disable-line class-methods-use-this */
    return x$1`
      ${DetectableElement.svgFilters}
    `;
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-model-change', {
      detail: {
        d: this.d,
        c: this.c,
        s: this.s,
        far: this.far,
        hr: this.hr,
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr
      },
      bubbles: true
    }));
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
      right: (this.histogram && this.distributions ? 3 : 0.75) * this.rem
    };
    const height = elementHeight - (margin.top + margin.bottom);
    const width = elementWidth - (margin.left + margin.right);
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const xScale = linear().domain([-3, 3]) // Evidence // FIX - no hardcoding
    .range([0, width]);

    // Y Scale
    const yScale = linear().domain([0.5, 0]) // Probability // FIX - no hardcoding
    .range([0, height]);

    // 2nd Y Scale
    const strokeWidth = 3; // FIX - no hardcoding
    const binWidth = xScale(this.binWidth) - xScale(0);
    const y2Scale = linear().domain([height / binWidth, 0]) // Number of Stimuli
    .range([0, height]);

    // Threshold Drag behavior
    const dragThreshold = drag().subject(() => {
      return {
        x: xScale(this.l),
        y: 0
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', event => {
      this.drag = true;
      let l = xScale.invert(event.x);
      // Clamp lambda to stay visible
      l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;
      this.c = SDTMath.l2C(l, this.s);
      this.alignState();
      this.sendEvent();
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });

    // Noise Curve Drag behavior
    const dragNoise = drag().subject(() => {
      return {
        x: xScale(this.muN),
        y: 0
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', event => {
      this.drag = true;
      let muN = xScale.invert(event.x);
      // Clamp Noise Curve to stay visible
      muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;
      this.d = SDTMath.muN2D(muN, this.s);
      this.alignState();
      this.sendEvent();
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });

    // Signal+Noise Curve Drag behavior
    const dragSignal = drag().subject(() => {
      return {
        x: xScale(this.muS),
        y: yScale(this.hS)
      };
    }).on('start', (event, datum) => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
      datum.startX = event.x;
      datum.startY = event.y;
      datum.startHS = this.hS;
      datum.startMuS = this.muS;
    }).on('drag', (event, datum) => {
      this.drag = true;
      let muS = this.muS; /* eslint-disable-line prefer-destructuring */
      if (this.interactive) {
        muS = xScale.invert(event.x);
        // Clamp Signal Curve to stay visible
        muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;
      }
      let hS = this.hS; /* eslint-disable-line prefer-destructuring */
      if (this.unequal) {
        hS = yScale.invert(event.y);
        // Clamp Signal Curve to stay visible
        hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;
      }
      if (this.interactive && this.unequal) {
        // Use shift key as modifier for single dimension
        if (event.sourceEvent.shiftKey) {
          if (Math.abs(event.x - datum.startX) > Math.abs(event.y - datum.startY)) {
            hS = datum.startHS;
          } else {
            muS = datum.startMuS;
          }
        }
      }
      if (this.unequal) {
        this.s = SDTMath.h2S(hS);
        this.c = SDTMath.l2C(this.l, this.s);
      }
      this.d = SDTMath.muS2D(muS, this.s);
      this.alignState();
      this.sendEvent();
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });

    // Line for Evidence/Probability Space
    const line$1 = line().x(datum => {
      return xScale(datum.e);
    }).y(datum => {
      return yScale(datum.p);
    });

    // Svg
    //  DATA-JOIN
    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]);
    // ENTER
    const svgEnter = svgUpdate.enter().append('svg').classed('main', true);
    // MERGE
    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

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
    underlayerEnter.append('rect').classed('background', true);
    //  MERGE
    underlayerMerge.select('.background').attr('height', height).attr('width', width);

    // X Axis
    //  ENTER
    underlayerEnter.append('g').classed('axis-x', true);
    //  MERGE
    const axisXMerge = underlayerMerge.select('.axis-x').attr('transform', `translate(0, ${height})`).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    axisXMerge.selectAll('line, path').attr('stroke', null);

    // X Axis Title
    //  ENTER
    underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle').text('Evidence');
    //  MERGE
    underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`);

    // Y Axis
    //  DATA-JOIN
    const axisYUpdate = underlayerMerge.selectAll('.axis-y').data(this.distributions ? [{}] : []);
    //  ENTER
    const axisYEnter = axisYUpdate.enter().append('g').classed('axis-y', true);
    //  MERGE
    const axisYMerge = axisYEnter.merge(axisYUpdate).call(axisLeft(yScale).ticks(5)).attr('font-size', null).attr('font-family', null);
    axisYMerge.selectAll('line, path').attr('stroke', null);
    //  EXIT
    axisYUpdate.exit().remove();

    // Y Axis Title
    //  DATA-JOIN
    const titleYUpdate = underlayerMerge.selectAll('.title-y').data(this.distributions ? [{}] : []);
    //  ENTER
    const titleYEnter = titleYUpdate.enter().append('text').classed('title-y', true).attr('text-anchor', 'middle').text('Probability');
    //  MERGE
    titleYEnter.merge(titleYUpdate).attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`);
    //  EXIT
    titleYUpdate.exit().remove();

    // 2nd Y Axis
    //  DATA-JOIN
    const axisY2Update = underlayerMerge.selectAll('.axis-y2').data(this.histogram ? [{}] : []);
    //  ENTER
    const axisY2Enter = axisY2Update.enter().append('g').classed('axis-y2', true);
    //  MERGE
    const axisY2Merge = axisY2Enter.merge(axisY2Update).attr('transform', this.distributions ? `translate(${width}, 0)` : '').call(this.distributions ? axisRight(y2Scale).ticks(10) : axisLeft(y2Scale).ticks(10)).attr('font-size', null).attr('font-family', null);
    axisY2Merge.selectAll('line, path').attr('stroke', null);
    //  EXIT
    axisY2Update.exit().remove();

    // 2nd Y Axis Title
    //  DATA-JOIN
    const titleY2Update = underlayerMerge.selectAll('.title-y2').data(this.histogram ? [{}] : []);
    //  ENTER
    const titleY2Enter = titleY2Update.enter().append('text').classed('title-y2', true).attr('text-anchor', 'middle').text('Count');
    //  MERGE
    titleY2Enter.merge(titleY2Update).attr('transform', this.distributions ? `translate(${width + 1.5 * this.rem}, ${height / 2})rotate(90)` : `translate(${-1.5 * this.rem}, ${height / 2})rotate(-90)`);
    //  EXIT
    titleY2Update.exit().remove();

    // Plot Content
    plotEnter.append('g').classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Noise & Signal + Noise Distributions
    //  DATA-JOIN
    const signalNoiseUpdate = contentMerge.selectAll('.signal-noise').data(this.distributions ? [{}] : []);
    //  ENTER
    const signalNoiseEnter = signalNoiseUpdate.enter().append('g').classed('signal-noise', true);
    //  MERGE
    const signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate);
    //  EXIT
    signalNoiseUpdate.exit().remove();

    // Noise Distribution
    //  ENTER
    const noiseEnter = signalNoiseEnter.append('g').classed('noise', true);
    //  MERGE
    const noiseMerge = signalNoiseMerge.selectAll('.noise').attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? event => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let muN = this.muN; /* eslint-disable-line prefer-destructuring */
        switch (event.key) {
          case 'ArrowRight':
            muN += event.shiftKey ? 0.01 : 0.1;
            break;
          case 'ArrowLeft':
            muN -= event.shiftKey ? 0.01 : 0.1;
            break;
        }
        // Clamp C to visible extent
        muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;
        if (muN !== this.muN) {
          this.d = SDTMath.muN2D(muN, this.s);
          this.alignState();
          this.sendEvent();
        }
        event.preventDefault();
      }
    } : null);
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        noiseMerge.call(dragNoise);
      } else {
        noiseMerge.on('.drag', null);
      }
    }

    // CR Curve
    //  ENTER
    noiseEnter.append('path').classed('curve-cr', true);
    //  MERGE
    noiseMerge.select('.curve-cr').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateC = interpolate$1(element.c !== undefined ? element.c : this.c, this.c);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.c = interpolateC(time);
        element.s = interpolateS(time);
        const correctRejections = range(xScale.domain()[0], SDTMath.c2L(element.c, element.s), 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        correctRejections.push({
          e: SDTMath.c2L(element.c, element.s),
          p: jStat.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuN(element.d, element.s), 1)
        });
        correctRejections.push({
          e: SDTMath.c2L(element.c, element.s),
          p: 0
        });
        correctRejections.push({
          e: xScale.domain()[0],
          p: 0
        });
        return line$1(correctRejections);
      };
    });

    // FA Curve
    //  ENTER
    noiseEnter.append('path').classed('curve-fa', true);
    //  MERGE
    noiseMerge.select('.curve-fa').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateC = interpolate$1(element.c !== undefined ? element.c : this.c, this.c);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.c = interpolateC(time);
        element.s = interpolateS(time);
        const falseAlarms = range(SDTMath.c2L(element.c, element.s), xScale.domain()[1], 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        falseAlarms.push({
          e: xScale.domain()[1],
          p: jStat.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
        });
        falseAlarms.push({
          e: xScale.domain()[1],
          p: 0
        });
        falseAlarms.push({
          e: SDTMath.c2L(element.c, element.s),
          p: 0
        });
        return line$1(falseAlarms);
      };
    });

    // Noise Curve
    //  ENTER
    noiseEnter.append('path').classed('curve-noise', true);
    //  MERGE
    noiseMerge.select('.curve-noise').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.s = interpolateS(time);
        const noise = range(xScale.domain()[0], xScale.domain()[1], 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        noise.push({
          e: xScale.domain()[1],
          p: jStat.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
        });
        return line$1(noise);
      };
    });

    // Signal + Noise Distribution
    //  ENTER
    const signalEnter = signalNoiseEnter.append('g').classed('signal', true);
    //  MERGE
    const signalMerge = signalNoiseMerge.selectAll('.signal').attr('tabindex', this.interactive || this.unequal ? 0 : null).classed('interactive', this.interactive).classed('unequal', this.unequal).on('keydown.sensitivity', this.interactive ? event => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let muS = this.muS; /* eslint-disable-line prefer-destructuring */
        switch (event.key) {
          case 'ArrowRight':
            muS += event.shiftKey ? 0.01 : 0.1;
            break;
          case 'ArrowLeft':
            muS -= event.shiftKey ? 0.01 : 0.1;
            break;
        }
        // Clamp C to visible extent
        muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;
        if (muS !== this.muS) {
          this.d = SDTMath.muS2D(muS, this.s);
          this.alignState();
          this.sendEvent();
        }
        event.preventDefault();
      }
    } : null).on('keydown.variance', this.unequal ? event => {
      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        let hS = this.hS; /* eslint-disable-line prefer-destructuring */
        switch (event.key) {
          case 'ArrowUp':
            hS += event.shiftKey ? 0.002 : 0.02;
            break;
          case 'ArrowDown':
            hS -= event.shiftKey ? 0.002 : 0.02;
            break;
        }
        // Clamp s so distribution stays visible
        hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;
        if (hS !== this.hS) {
          this.s = SDTMath.h2S(hS);
          this.d = SDTMath.muN2D(this.muN, this.s);
          this.c = SDTMath.l2C(this.l, this.s);
          this.alignState();
          this.sendEvent();
        }
        event.preventDefault();
      }
    } : null);
    if (this.firstUpdate || changedProperties.has('interactive') || changedProperties.has('unequal')) {
      if (this.interactive || this.unequal) {
        signalMerge.call(dragSignal);
      } else {
        signalMerge.on('.drag', null);
      }
    }

    // M Curve
    //  ENTER
    signalEnter.append('path').classed('curve-m', true);
    //  MERGE
    signalMerge.select('.curve-m').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateC = interpolate$1(element.c !== undefined ? element.c : this.c, this.c);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.c = interpolateC(time);
        element.s = interpolateS(time);
        const misses = range(xScale.domain()[0], SDTMath.c2L(element.c, element.s), 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        misses.push({
          e: SDTMath.c2L(element.c, element.s),
          p: jStat.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuS(element.d, element.s), element.s)
        });
        misses.push({
          e: SDTMath.c2L(element.c, element.s),
          p: 0
        });
        misses.push({
          e: xScale.domain()[0],
          p: 0
        });
        return line$1(misses);
      };
    });

    // H Curve
    //  ENTER
    signalEnter.append('path').classed('curve-h', true);
    //  MERGE
    signalMerge.select('.curve-h').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateC = interpolate$1(element.c !== undefined ? element.c : this.c, this.c);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.c = interpolateC(time);
        element.s = interpolateS(time);
        const hits = range(SDTMath.c2L(element.c, element.s), xScale.domain()[1], 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        hits.push({
          e: xScale.domain()[1],
          p: jStat.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
        });
        hits.push({
          e: xScale.domain()[1],
          p: 0
        });
        hits.push({
          e: SDTMath.c2L(element.c, element.s),
          p: 0
        });
        return line$1(hits);
      };
    });

    // Signal Curve
    //  ENTER
    signalEnter.append('path').classed('curve-signal', true);
    //  MERGE
    signalMerge.select('.curve-signal').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.d = interpolateD(time);
        element.s = interpolateS(time);
        const signal = range(xScale.domain()[0], xScale.domain()[1], 0.05).map(e => {
          return {
            e: e,
            p: jStat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        signal.push({
          e: xScale.domain()[1],
          p: jStat.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
        });
        return line$1(signal);
      };
    });

    // d' Measure
    //  DATA-JOIN
    const dUpdate = contentMerge.selectAll('.measure-d').data(this.sensitivity ? [{}] : []);
    //  ENTER
    const dEnter = dUpdate.enter().append('g').classed('measure-d', true);
    dEnter.append('line').classed('line', true);
    dEnter.append('line').classed('cap-left', true);
    dEnter.append('line').classed('cap-right', true);
    const dLabel = dEnter.append('text').classed('label', true);
    dLabel.append('tspan').classed('d math-var', true).text('d′');
    dLabel.append('tspan').classed('equals', true).text(' = ');
    dLabel.append('tspan').classed('value', true);
    //  MERGE
    const dMerge = dEnter.merge(dUpdate);
    dMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43)) // FIX - no hardcoding
    .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43)); // FIX - no hardcoding
    dMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muN)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding
    dMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding
    const dLabelTransition = dMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(this.muN > this.muS ? this.muN : this.muS) + 5).attr('y', yScale(0.43) + 3); // FIX - no hardcoding
    dLabelTransition.select('.value').tween('text', (datum, index, elements) => {
      const element = elements[index];
      const interpolateD = interpolate$1(element.d !== undefined ? element.d : this.d, this.d);
      return time => {
        element.d = interpolateD(time);
        select(element).text(format('.3')(element.d));
      };
    });
    //  EXIT
    dUpdate.exit().remove();

    // c Measure
    //  DATA-JOIN
    const cUpdate = contentMerge.selectAll('.measure-c').data(this.bias ? [{}] : []);
    //  ENTER
    const cEnter = cUpdate.enter().append('g').classed('measure-c', true);
    cEnter.append('line').classed('line', true);
    cEnter.append('line').classed('cap-zero', true);
    const cLabel = cEnter.append('text').classed('label', true);
    cLabel.append('tspan').classed('c math-var', true).text('c');
    cLabel.append('tspan').classed('equals', true).text(' = ');
    cLabel.append('tspan').classed('value', true);
    //  MERGE
    const cMerge = cEnter.merge(cUpdate);
    cMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0.47)) // FIX - no hardcoding
    .attr('x2', xScale(0)).attr('y2', yScale(0.47)); // FIX - no hardcoding
    cMerge.select('.cap-zero').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(0)).attr('y1', yScale(0.47) + 5) // FIX - no hardcoding
    .attr('x2', xScale(0)).attr('y2', yScale(0.47) - 5); // FIX - no hardcoding
    const cLabelTransition = cMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(0) + (this.l < 0 ? 5 : -5)).attr('y', yScale(0.47) + 3) // FIX - no hardcoding
    .attr('text-anchor', this.c < 0 ? 'start' : 'end');
    cLabelTransition.select('.value').tween('text', (datum, index, elements) => {
      const element = elements[index];
      const interpolateC = interpolate$1(element.c !== undefined ? element.c : this.c, this.c);
      return time => {
        element.c = interpolateC(time);
        select(element).text(format('.3')(element.c));
      };
    });
    //  EXIT
    cUpdate.exit().remove();

    // s Measure
    //  DATA-JOIN
    const sUpdate = contentMerge.selectAll('.measure-s').data(this.variance ? [{}] : []);
    //  ENTER
    const sEnter = sUpdate.enter().append('g').classed('measure-s', true);
    sEnter.append('line').classed('line', true);
    sEnter.append('line').classed('cap-left', true);
    sEnter.append('line').classed('cap-right', true);
    const sLabel = sEnter.append('text').classed('label', true);
    sLabel.append('tspan').classed('s math-var', true).text('σ');
    sLabel.append('tspan').classed('equals', true).text(' = ');
    sLabel.append('tspan').classed('value', true);
    //  MERGE
    const sMerge = sEnter.merge(sUpdate);
    sMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s) // FIX - no hardcoding
    .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s); // FIX - no hardcoding
    sMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muS - this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding
    sMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS + this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding
    const sLabelTransition = sMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(this.muS)).attr('y', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 3); // FIX - no hardcoding
    sLabelTransition.select('.value').tween('text', (datum, index, elements) => {
      const element = elements[index];
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.s = interpolateS(time);
        select(element).text(format('.3')(element.s));
      };
    });
    //  EXIT
    sUpdate.exit().remove();

    // Threshold Line
    //  DATA-JOIN
    const thresholdUpdate = contentMerge.selectAll('.threshold').data(this.threshold ? [{}] : []);
    //  ENTER
    const thresholdEnter = thresholdUpdate.enter().append('g').classed('threshold', true);
    thresholdEnter.append('line').classed('line', true);
    thresholdEnter.append('circle').classed('handle', true);
    //  MERGE
    const thresholdMerge = thresholdEnter.merge(thresholdUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive);
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        thresholdMerge.call(dragThreshold).on('keydown', event => {
          if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let l = this.l; /* eslint-disable-line prefer-destructuring */
            switch (event.key) {
              case 'ArrowRight':
                l += event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowLeft':
                l -= event.shiftKey ? 0.01 : 0.1;
                break;
            }
            // Clamp C to visible extent
            l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;
            if (l !== this.l) {
              this.c = SDTMath.l2C(l, this.s);
              this.alignState();
              this.sendEvent();
            }
            event.preventDefault();
          }
        });
      } else {
        thresholdMerge.on('drag', null).on('keydown', null);
      }
    }
    thresholdMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0)).attr('x2', xScale(this.l)).attr('y2', yScale(0.54));
    thresholdMerge.select('.handle').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('cx', xScale(this.l)).attr('cy', yScale(0.54));
    //  EXIT
    thresholdUpdate.exit().remove();

    // Histogram
    //  DATA-JOIN
    const histogramUpdate = contentMerge.selectAll('.histogram').data(this.histogram ? [{}] : []);
    //  ENTER
    const histogramEnter = histogramUpdate.enter().append('g').classed('histogram', true);
    //  MERGE
    const histogramMerge = histogramEnter.merge(histogramUpdate);
    //  EXIT
    histogramUpdate.exit().remove();

    // Trials
    if (this.histogram) {
      const histogram = bin().value(datum => {
        return datum.trueEvidence;
      }).domain(xScale.domain()).thresholds(range(this.binRange[0], this.binRange[1], this.binWidth));
      const hist = histogram(this.trials);
      let binCountLeft = -1;
      let binCountRight = -1;
      for (let i = 0; i < hist.length; i += 1) {
        for (let j = 0; j < hist[i].length; j += 1) {
          hist[i][j].binValue = hist[i].x0;
          hist[i][j].binCount = j;
          if (i === 0) binCountLeft = j;
          if (i === hist.length - 1) binCountRight = j;
        }
      }
      // Put out-of-range values in extreme left/right bins
      for (let i = 0; i < this.trials.length; i += 1) {
        if (this.trials[i].trueEvidence < this.binRange[0]) {
          binCountLeft += 1;
          this.trials[i].binCount = binCountLeft;
          this.trials[i].binValue = hist[0].x0;
        }
        if (this.trials[i].trueEvidence > this.binRange[1]) {
          binCountRight += 1;
          this.trials[i].binCount = binCountRight;
          this.trials[i].binValue = hist[hist.length - 1].x0;
        }
      }
      //  DATA-JOIN
      const trialUpdate = histogramMerge.selectAll('.trial').data(this.trials, datum => {
        return datum.trial;
      });
      //  ENTER
      const trialEnter = trialUpdate.enter().append('rect').attr('stroke-width', strokeWidth).attr('data-new-trial-ease-time', 0) // use 'data-trial-enter'
      .attr('stroke', this.getComputedStyleValue('---color-acc')).attr('fill', this.getComputedStyleValue('---color-acc-light'));
      //  MERGE
      const trialMerge = trialEnter.merge(trialUpdate).attr('class', datum => {
        return `trial ${datum.outcome}`;
      }).attr('width', binWidth - strokeWidth).attr('height', binWidth - strokeWidth);
      //  MERGE - Active New Trials
      const trialMergeNewActive = trialMerge.filter(datum => {
        return datum.new && !datum.paused;
      });
      if (!trialMergeNewActive.empty()) {
        const easeTime = trialMergeNewActive.attr('data-new-trial-ease-time');
        const scaleIn = time => {
          return linear().domain([0, 1]).range([easeTime, 1])(time);
        };
        const scaleOutGenerator = easeFunction => {
          return time => {
            return linear().domain([easeFunction(easeTime), 1]).range([0, 1])(easeFunction(time));
          };
        };
        trialMergeNewActive.transition('new').duration(datum => {
          return Math.floor((datum.duration * 0.75 + datum.wait * 0.25) * (1 - easeTime));
        }).ease(scaleIn).attr('data-new-trial-ease-time', 1).attrTween('stroke', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = interpolateRgb(element.getAttribute('stroke'), this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr') : this.getComputedStyleValue('---color-far') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}`) : this.getComputedStyleValue('---color-acc'));
          return time => {
            return interpolator(scaleOutGenerator(cubicIn)(time));
          };
        }).attrTween('fill', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = interpolateRgb(element.getAttribute('fill'), this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr-light') : this.getComputedStyleValue('---color-far-light') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}-light`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}-light`) : this.getComputedStyleValue('---color-acc-light'));
          return time => {
            return interpolator(scaleOutGenerator(cubicIn)(time));
          };
        }).attrTween('x', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = interpolate$1(element.getAttribute('x'), xScale(datum.binValue) + strokeWidth / 2);
          return time => {
            return interpolator(scaleOutGenerator(cubicOut)(time));
          };
        }).attrTween('y', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = interpolate$1(element.getAttribute('y'), yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
          return time => {
            return interpolator(scaleOutGenerator(cubicIn)(time));
          };
        }).on('end', (datum, index, elements) => {
          const element = elements[index];
          element.removeAttribute('data-new-trial-ease-time');
          datum.new = false;
          this.alignTrial(datum);
          this.dispatchEvent(new CustomEvent('detectable-response', {
            detail: {
              stimulus: datum.signal,
              response: datum.response,
              outcome: datum.outcome,
              h: this.h,
              m: this.m,
              fa: this.fa,
              cr: this.cr,
              nr: 0
            },
            bubbles: true
          }));
        });
      }
      // MERGE - Paused New Trials
      const trialMergeNewPaused = trialMerge.filter(datum => {
        return datum.new && datum.paused;
      });
      if (!trialMergeNewPaused.empty()) {
        const easeTime = trialMergeNewPaused.attr('data-new-trial-ease-time');
        trialMergeNewPaused.transition().duration(transitionDuration).ease(cubicOut).attr('x', datum => {
          const interpolator = interpolate$1(0, xScale(datum.binValue) + strokeWidth / 2);
          return interpolator(cubicOut(easeTime));
        }).attr('y', datum => {
          const interpolator = interpolate$1(0, yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
          return interpolator(cubicIn(easeTime));
        }).attr('stroke', datum => {
          const interpolator = interpolateRgb(this.getComputedStyleValue('---color-acc'), this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr') : this.getComputedStyleValue('---color-far') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}`) : this.getComputedStyleValue('---color-acc'));
          return interpolator(cubicIn(easeTime));
        }).attr('fill', datum => {
          const interpolator = interpolateRgb(this.getComputedStyleValue('---color-acc-light'), this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr-light') : this.getComputedStyleValue('---color-far-light') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}-light`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}-light`) : this.getComputedStyleValue('---color-acc-light'));
          return interpolator(cubicIn(easeTime));
        });
      }
      //  MERGE - Old Trials
      trialMerge.filter(datum => {
        return !datum.new;
      }).transition().duration(transitionDuration).ease(cubicOut).attr('x', datum => {
        return xScale(datum.binValue) + strokeWidth / 2;
      }).attr('y', datum => {
        return yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth;
      }).attr('stroke', datum => {
        return this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr') : this.getComputedStyleValue('---color-far') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}`) : this.getComputedStyleValue('---color-acc');
      }).attr('fill', datum => {
        return this.color === 'stimulus' ? datum.signal === 'present' ? this.getComputedStyleValue('---color-hr-light') : this.getComputedStyleValue('---color-far-light') : this.color === 'response' ? this.getComputedStyleValue(`---color-${datum.response}-light`) : this.color === 'outcome' ? this.getComputedStyleValue(`---color-${datum.outcome}-light`) : this.getComputedStyleValue('---color-acc-light');
      });
      //  EXIT
      trialUpdate.exit().transition().duration(transitionDuration).ease(linear$1).attrTween('stroke', (datum, index, elements) => {
        const element = elements[index];
        const interpolator = interpolateRgb(element.getAttribute('stroke'), this.getComputedStyleValue('---color-acc'));
        return time => {
          return interpolator(cubicIn(time));
        };
      }).attrTween('fill', (datum, index, elements) => {
        const element = elements[index];
        const interpolator = interpolateRgb(element.getAttribute('fill'), this.getComputedStyleValue('---color-acc-light'));
        return time => {
          return interpolator(cubicIn(time));
        };
      }).attrTween('x', (datum, index, elements) => {
        const element = elements[index];
        const interpolator = interpolate$1(element.getAttribute('x'), 0);
        return time => {
          return interpolator(cubicIn(time));
        };
      }).attrTween('y', (datum, index, elements) => {
        const element = elements[index];
        const interpolator = interpolate$1(element.getAttribute('y'), 0);
        return time => {
          return interpolator(cubicOut(time));
        };
      }).remove();
    }

    // Overlayer
    //  ENTER
    const overlayerEnter = plotEnter.append('g').classed('overlayer', true);
    // MERGE
    const overlayerMerge = plotMerge.select('.overlayer');

    // Background
    //  ENTER
    overlayerEnter.append('rect').classed('background', true);
    //  MERGE
    overlayerMerge.select('.background').attr('height', height).attr('width', width);
    this.drag = false;
    this.firstUpdate = false;
  }

  // Called to pause trial animations!
  pauseTrial() {
    const trialNew = select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
    trialNew.interrupt('new');
    trialNew.datum(datum => {
      datum.paused = true;
      return datum;
    });
  }

  // Called to resume trial animations!
  resumeTrial() {
    const trialNew = select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
    trialNew.datum(datum => {
      datum.paused = false;
      return datum;
    });
    this.requestUpdate();
  }
}
customElements.define('sdt-model', SDTModel);

/*
  DetectableResponse element
  <detectable-response>

  Attributes:

*/
class DetectableResponse extends DetectableElement {
  static get properties() {
    return {
      feedback: {
        attribute: 'feedback',
        type: String,
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
      hPayoff: {
        attribute: 'hit-payoff',
        type: Number,
        reflect: true
      },
      mPayoff: {
        attribute: 'miss-payoff',
        type: Number,
        reflect: true
      },
      faPayoff: {
        attribute: 'false-alarm-payoff',
        type: Number,
        reflect: true
      },
      crPayoff: {
        attribute: 'correct-rejection-payoff',
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
    this.feedbacks = ['none', 'accuracy', 'outcome']; // Possible values for 'feedback'
    this.feedback = 'outcome'; // What feedback to display
    this.trial = false; // Show trial count?
    this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info
    this.payoff = 'none'; // What payoff info to display

    this.hPayoff = 0; // Hit payoff
    this.mPayoff = 0; // Miss payoff
    this.crPayoff = 0; // Correct Rejection payoff
    this.faPayoff = 0; // False Alarm payoff
    this.nrPayoff = 0; // No Response payoff

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.signals = ['present', 'absent']; // Possible values of 'signal'
    this.signal = undefined; // Signal for current trial
    this.responses = ['present', 'absent']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
    this.outcomes = ['h', 'm', 'fa', 'cr', 'nr']; // Possible values of 'outcome'
    this.outcome = undefined; // Outcome for current trial
    this.accuracies = ['c', 'e', 'nr']; // Possible values of 'accuracy'
    this.accuracy = undefined; // Accuracy for current trial

    this.h = 0; // Count of Hits
    this.m = 0; // Count of Misses
    this.cr = 0; // Count of Correct Rejections
    this.fa = 0; // Count of False Alarms

    this.c = 0; // Count of Correct trials
    this.e = 0; // Count of Error trials

    this.nr = 0; // Count of No Response trials
  }
  get trialPayoff() {
    switch (this.outcome) {
      case 'h':
        return this.hPayoff;
      case 'm':
        return this.mPayoff;
      case 'fa':
        return this.faPayoff;
      case 'cr':
        return this.crPayoff;
      case 'nr':
        return this.nrPayoff;
      default:
        return undefined;
    }
  }
  get totalPayoff() {
    return this.h * this.hPayoff + this.m * this.mPayoff + this.cr * this.crPayoff + this.fa * this.faPayoff + this.nr * this.nrPayoff;
  }
  start(signal, trial) {
    this.trialCount = trial;
    this.state = 'waiting';
    this.signal = signal;
    this.response = undefined;
    this.outcome = undefined;
  }
  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.outcome = 'nr';
      this.nr += 1;
      this.accuracy = 'nr';
    }
  }
  present() {
    this.responded('present');
  }
  absent() {
    this.responded('absent');
  }
  responded(response) {
    this.state = 'feedback';
    this.response = response;
    if (this.signal === 'present' && this.response === 'present') {
      this.outcome = 'h';
      this.h += 1;
      this.accuracy = 'c';
      this.c += 1;
    } else if (this.signal === 'present' && this.response === 'absent') {
      this.outcome = 'm';
      this.m += 1;
      this.accuracy = 'e';
      this.e += 1;
    } else if (this.signal === 'absent' && this.response === 'present') {
      this.outcome = 'fa';
      this.fa += 1;
      this.accuracy = 'e';
      this.e += 1;
    } else if (this.signal === 'absent' && this.response === 'absent') {
      this.outcome = 'cr';
      this.cr += 1;
      this.accuracy = 'c';
      this.c += 1;
    }
    this.dispatchEvent(new CustomEvent('detectable-response', {
      detail: {
        trial: this.trialCount,
        signal: this.signal,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff,
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
        nr: this.nr,
        totalPayoff: this.totalPayoff
      },
      bubbles: true
    }));
  }
  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.signal = undefined;
    this.response = undefined;
    this.outcome = undefined;
    this.accuracy = undefined;
    this.h = 0;
    this.m = 0;
    this.cr = 0;
    this.fa = 0;
    this.nr = 0;
    this.c = 0;
    this.e = 0;
  }
  static get styles() {
    return [super.styles, i$2`
        :host {
          display: inline-block;
        }

        /* Overall container */
        .holder {
          display: flex;

          flex-direction: row;
        }

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }

        .waiting[disabled] {
          --decidables-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="present"] {
          --decidables-button-background-color: var(---color-present);
        }

        .selected[disabled][name="absent"] {
          --decidables-button-background-color: var(---color-absent);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: column;

          justify-content: center;
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

        .feedback.h {
          background-color: var(---color-h-light);
        }

        .feedback.m {
          background-color: var(---color-m-light);
        }

        .feedback.fa {
          background-color: var(---color-fa-light);
        }

        .feedback.cr {
          background-color: var(---color-cr-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }

        .feedback.c {
          background-color: var(---color-correct-light);
        }

        .feedback.e {
          color: var(---color-text-inverse);

          background-color: var(---color-error-light);
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
          <decidables-button name="present" class=${this.state === 'feedback' && this.response === 'present' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.present.bind(this)}>Present</decidables-button>
          <decidables-button name="absent" class=${this.state === 'feedback' && this.response === 'absent' ? 'selected' : this.state === 'waiting' ? 'waiting' : ''} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.absent.bind(this)}>Absent</decidables-button>
        </div>
        ${this.trial || this.feedback !== 'none' || this.payoff === 'total' ? x$1`
            <div class="feedbacks">
              ${this.trial ? x$1`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>` : x$1``}
              ${this.feedback !== 'none' ? x$1`
                  <div class=${`feedback ${this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome : this.accuracy : ''}`}>
                    ${this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome === 'h' ? x$1`<span class="outcome">Hit</span>` : this.outcome === 'm' ? x$1`<span class="outcome">Miss</span>` : this.outcome === 'fa' ? x$1`<span class="outcome">False<br>Alarm</span>` : this.outcome === 'cr' ? x$1`<span class="outcome">Correct<br>Rejection</span>` : x$1`<span class="outcome">No<br>Response</span>` : this.accuracy === 'c' ? x$1`<span class="outcome">Correct</span>` : this.accuracy === 'e' ? x$1`<span class="outcome">Error</span>` : x$1`<span class="outcome">No<br>Response</span>` : ''}
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
customElements.define('detectable-response', DetectableResponse);

/*
  DetectableTable element
  <detectable-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
class DetectableTable extends DetectableElement {
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
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true
      },
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true
      },
      payoff: {
        attribute: 'payoff',
        type: Boolean,
        reflect: true
      },
      hPayoff: {
        attribute: 'hit-payoff',
        type: Number,
        reflect: true
      },
      mPayoff: {
        attribute: 'miss-payoff',
        type: Number,
        reflect: true
      },
      faPayoff: {
        attribute: 'false-alarm-payoff',
        type: Number,
        reflect: true
      },
      crPayoff: {
        attribute: 'correct-rejection-payoff',
        type: Number,
        reflect: true
      },
      far: {
        attribute: false,
        type: Number,
        reflect: false
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false
      },
      acc: {
        attribute: false,
        type: Number,
        reflect: false
      },
      // positive predictive value (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
      ppv: {
        attribute: false,
        type: Number,
        reflect: false
      },
      // false omission rate (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
      // Using "fomr" to avoid keyword "for"
      fomr: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.numeric = false;
    this.summaries = ['stimulusRates', 'responseRates', 'accuracy'];
    this.summary = new Set();
    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome', 'all'];
    this.color = 'all';
    this.payoff = false;
    this.hPayoff = undefined; // Hit payoff
    this.mPayoff = undefined; // Miss payoff
    this.crPayoff = undefined; // Correct Rejection payoff
    this.faPayoff = undefined; // False Alarm payoff

    this.h = 40;
    this.m = 60;
    this.fa = 75;
    this.cr = 25;
    this.alignState();
  }
  alignState() {
    this.hr = SDTMath.hM2Hr(this.h, this.m);
    this.far = SDTMath.faCr2Far(this.fa, this.cr);
    this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
    this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
    this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('detectable-table-change', {
      detail: {
        h: this.h,
        m: this.m,
        hr: this.hr,
        fa: this.fa,
        cr: this.cr,
        far: this.far,
        acc: this.acc,
        ppv: this.ppv,
        fomr: this.fomr
      },
      bubbles: true
    }));
  }
  hInput(e) {
    this.h = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  mInput(e) {
    this.m = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  faInput(e) {
    this.fa = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  crInput(e) {
    this.cr = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  hrInput(e) {
    const newhr = parseFloat(e.target.value);
    const present = this.h + this.m;
    this.h = Math.round(newhr * present);
    this.m = present - this.h;
    this.alignState();
    this.sendEvent();
  }
  farInput(e) {
    const newfar = parseFloat(e.target.value);
    const absent = this.fa + this.cr;
    this.fa = Math.round(newfar * absent);
    this.cr = absent - this.fa;
    this.alignState();
    this.sendEvent();
  }
  accInput(e) {
    const newacc = parseFloat(e.target.value);
    const present = this.h + this.m;
    const absent = this.fa + this.cr;
    const x = (this.hr + this.far - 1) / 2; // Rotate into ACC
    let newhr = x + newacc;
    let newfar = 1 + x - newacc;
    if (newfar > 1) {
      newfar = 1;
      newhr = newfar + 2 * newacc - 1;
    }
    if (newfar < 0) {
      newfar = 0;
      newhr = newfar + 2 * newacc - 1;
    }
    if (newhr > 1) {
      newhr = 1;
      newfar = newhr - 2 * newacc + 1;
    }
    if (newhr < 0) {
      newhr = 0;
      newfar = newhr - 2 * newacc + 1;
    }
    this.h = Math.round(newhr * present);
    this.m = present - this.h;
    this.fa = Math.round(newfar * absent);
    this.cr = absent - this.fa;
    this.alignState();
    this.sendEvent();
  }
  ppvInput(e) {
    const newppv = parseFloat(e.target.value);
    const present = this.h + this.fa;
    this.h = Math.round(newppv * present);
    this.fa = present - this.h;
    this.alignState();
    this.sendEvent();
  }
  fomrInput(e) {
    const newfomr = parseFloat(e.target.value);
    const present = this.m + this.cr;
    this.m = Math.round(newfomr * present);
    this.cr = present - this.m;
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

        /* Color schemes & Table emphasis */

        /* (Default) All color scheme */
        .h {
          background: var(---color-h-light);
          border-top: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .m {
          background: var(---color-m-light);
          border-top: 2px solid var(---color-element-emphasis);
          border-right: 2px solid var(---color-element-emphasis);
        }

        .fa {
          background: var(---color-fa-light);
          border-bottom: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .cr {
          background: var(---color-cr-light);
          border-right: 2px solid var(---color-element-emphasis);
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        .hr {
          background: var(---color-hr-light);
        }

        .far {
          background: var(---color-far-light);
        }

        .acc {
          background: var(---color-acc-light);
        }

        .ppv {
          background: var(---color-present-light);
        }

        .fomr {
          background: var(---color-absent-light);
        }

        /* Accuracy color scheme */
        :host([color="accuracy"]) .h,
        :host([color="accuracy"]) .cr {
          background: var(---color-correct-light);
        }

        :host([color="accuracy"]) .m,
        :host([color="accuracy"]) .fa {
          color: var(---color-text-inverse);

          background: var(---color-error-light);
        }

        :host([color="accuracy"]) .hr,
        :host([color="accuracy"]) .far,
        :host([color="accuracy"]) .ppv,
        :host([color="accuracy"]) .fomr {
          background: var(---color-element-background);
        }

        /* Stimulus color scheme */
        :host([color="stimulus"]) .cr,
        :host([color="stimulus"]) .fa {
          background: var(---color-far-light);
        }

        :host([color="stimulus"]) .m,
        :host([color="stimulus"]) .h {
          background: var(---color-hr-light);
        }

        :host([color="stimulus"]) .ppv,
        :host([color="stimulus"]) .fomr,
        :host([color="stimulus"]) .acc {
          background: var(---color-element-background);
        }

        /* Response color scheme */
        :host([color="response"]) .cr,
        :host([color="response"]) .m {
          background: var(---color-absent-light);
        }

        :host([color="response"]) .fa,
        :host([color="response"]) .h {
          background: var(---color-present-light);
        }

        :host([color="response"]) .hr,
        :host([color="response"]) .far,
        :host([color="response"]) .acc {
          background: var(---color-element-background);
        }

        /* Outcome color scheme */
        :host([color="outcome"]) .hr,
        :host([color="outcome"]) .far,
        :host([color="outcome"]) .ppv,
        :host([color="outcome"]) .fomr,
        :host([color="outcome"]) .acc {
          background: var(---color-element-background);
        }

        /* No color scheme */
        :host([color="none"]) .cr,
        :host([color="none"]) .fa,
        :host([color="none"]) .m,
        :host([color="none"]) .h,
        :host([color="none"]) .hr,
        :host([color="none"]) .far,
        :host([color="none"]) .ppv,
        :host([color="none"]) .fomr,
        :host([color="none"]) .acc {
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
    let h;
    let m;
    let fa;
    let cr;
    let hr;
    let far;
    let acc;
    let ppv;
    let fomr;
    if (this.numeric) {
      h = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.hPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
      m = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.mPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
      fa = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.faPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
      cr = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.crPayoff)}</span>` : x$1``}
        </decidables-spinner>
      `;
      hr = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `;
      far = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `;
      acc = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `;
      ppv = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `;
      fomr = x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `;
    } else {
      h = x$1`<span>Hits</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.hPayoff)}</span>` : x$1``}`;
      m = x$1`<span>Misses</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.mPayoff)}</span>` : x$1``}`;
      fa = x$1`<span>False Alarms</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.faPayoff)}</span>` : x$1``}`;
      cr = x$1`<span>Correct Rejections</span>
        ${this.payoff ? x$1`<span class="payoff">${payoffFormat(this.crPayoff)}</span>` : x$1``}`;
      hr = x$1`<span>Hit Rate</span>`;
      far = x$1`<span>False Alarm Rate</span>`;
      acc = x$1`<span>Accuracy</span>`;
      ppv = x$1`<span>Positive Predictive Value</span>`;
      fomr = x$1`<span>False Omission Rate</span>`;
    }
    return x$1`
      <table class=${this.numeric ? 'numeric' : ''}>
        <thead>
          <tr>
            <th colspan="2" rowspan="2"></th>
            <th class="th th-main" colspan="2" scope="col">
              Response
            </th>
          </tr>
          <tr>
            <th class="th th-sub" scope="col">
              ‘Present’
            </th>
            <th class="th th-sub" scope="col">
              ‘Absent’
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-main" rowspan="2" scope="row">
              Signal
            </th>
            <th class="th th-sub th-left" scope="row">
              Present
            </th>
            <td class="td td-data h">
              ${h}
            </td>
            <td class="td td-data m">
              ${m}
            </td>
            ${this.summary.has('stimulusRates') ? x$1`
                <td class="td td-summary hr">
                  ${hr}
                </td>` : x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Absent
            </th>
            <td class="td td-data fa">
              ${fa}
            </td>
            <td class="td td-data cr">
              ${cr}
            </td>
            ${this.summary.has('stimulusRates') ? x$1`
                <td class="td td-summary far">
                  ${far}
                </td>` : x$1``}
          </tr>
          ${this.summary.has('responseRates') || this.summary.has('accuracy') ? x$1`
              <tr>
                <td colspan="2"></td>
                ${this.summary.has('responseRates') ? x$1`
                    <td class="td td-summary ppv">
                      ${ppv}
                    </td>
                    <td class="td td-summary fomr">
                      ${fomr}
                    </td>` : x$1`
                    <td colspan="2"></td>`}
                ${this.summary.has('accuracy') ? x$1`
                    <td class="td td-summary acc" rowspan="2">
                      ${acc}
                    </td>` : x$1``}
              </tr>` : x$1``}
        </tbody>
      </table>`;
  }
}
customElements.define('detectable-table', DetectableTable);

/*
  SDTEquation Base Class - Not intended for instantiation!
  <sdt-equation>
*/
class SDTEquation extends DetectableElement {
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
    return [super.styles, i$2`
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

        .exp {
          font-size: 0.75rem;
        }

        /* Input wrapping <label> */
        decidables-spinner {
          --decidables-spinner-input-width: 4rem;

          display: inline-block;

          padding: 0.125rem 0.375rem 0.375rem;

          vertical-align: middle;

          border-radius: var(---border-radius);
        }

        .bottom {
          vertical-align: bottom;
        }

        /* Color scheme */
        .h {
          background: var(---color-h-light);
        }

        .m {
          background: var(---color-m-light);
        }

        .hr {
          background: var(---color-hr-light);
        }

        .fa {
          background: var(---color-fa-light);
        }

        .ppv {
          background: var(---color-present-light);
        }

        .fomr {
          background: var(---color-absent-light);
        }

        .acc {
          background: var(---color-acc-light);
        }

        .cr {
          background: var(---color-cr-light);
        }

        .far {
          background: var(---color-far-light);
        }

        .d {
          background: var(---color-d-light);
        }

        .c {
          background: var(---color-c-light);
        }

        .s {
          background: var(---color-s-light);
        }
      `];
  }
}

/*
  SDTEquationDC2Far element
  <sdt-equation-dc2far>

  Attributes:
  d'; c; False Alarm Rate;
*/
class SDTEquationDC2Far extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true
      },
      d: {
        attribute: 'd',
        type: Number,
        reflect: true
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true
      },
      far: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.unequal = false;
    this.d = 0;
    this.c = 0;
    this.s = 1;
    this.alignState();
  }
  alignState() {
    this.far = SDTMath.dC2Far(this.d, this.c, this.s);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2far-change', {
      detail: {
        d: this.d,
        c: this.c,
        s: this.s,
        far: this.far
      },
      bubbles: true
    }));
  }
  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  cInput(event) {
    this.c = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let d;
    let c;
    let s;
    let far;
    if (this.numeric) {
      d = x$1`
        <decidables-spinner class="d bottom" ?disabled=${!this.interactive} step=".001" .value="${this.d}" @input=${this.dInput.bind(this)}>
          <var class="math-var">d′</var>
        </decidables-spinner>
      `;
      c = x$1`
        <decidables-spinner class="c bottom" ?disabled=${!this.interactive} step=".001" .value="${this.c}" @input=${this.cInput.bind(this)}>
          <var class="math-var">c</var>
        </decidables-spinner>
      `;
      s = x$1`
        <decidables-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `;
      far = x$1`
        <decidables-spinner class="far bottom" disabled min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}">
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `;
    } else {
      d = x$1`<var class="math-var d">d′</var>`;
      c = x$1`<var class="math-var c">c</var>`;
      s = x$1`<var class="math-var s">σ</var>`;
      far = x$1`<var class="far">False Alarm Rate</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${far}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span>${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${c}<span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${s}</span>
          </td>
        </tr>`;
    } else {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${far}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="minus tight">−</span>
          </td>
          <td class="underline">
            ${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${c}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`;
    }
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
customElements.define('sdt-equation-dc2far', SDTEquationDC2Far);

/*
  SDTEquationDC2Hr element
  <sdt-equation-dc2hr>

  Attributes:
  d'; c; Hit Rate;
*/
class SDTEquationDC2Hr extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true
      },
      d: {
        attribute: 'd',
        type: Number,
        reflect: true
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.unequal = false;
    this.d = 0;
    this.c = 0;
    this.s = 1;
    this.alignState();
  }
  alignState() {
    this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2hr-change', {
      detail: {
        d: this.d,
        c: this.c,
        s: this.s,
        hr: this.hr
      },
      bubbles: true
    }));
  }
  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  cInput(event) {
    this.c = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let d;
    let c;
    let s;
    let hr;
    if (this.numeric) {
      d = x$1`
        <decidables-spinner class="d bottom" ?disabled=${!this.interactive} step=".001" .value="${this.d}" @input=${this.dInput.bind(this)}>
          <var class="math-var">d′</var>
        </decidables-spinner>
      `;
      c = x$1`
        <decidables-spinner class="c bottom" ?disabled=${!this.interactive} step=".001" .value="${this.c}" @input=${this.cInput.bind(this)}>
          <var class="math-var">c</var>
        </decidables-spinner>
      `;
      s = x$1`
        <decidables-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `;
      hr = x$1`
        <decidables-spinner class="hr bottom" disabled min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}">
          <var>Hit Rate</var>
        </decidables-spinner>
      `;
    } else {
      d = x$1`<var class="math-var d">d′</var>`;
      c = x$1`<var class="math-var c">c</var>`;
      s = x$1`<var class="math-var s">σ</var>`;
      hr = x$1`<var class="hr">Hit Rate</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${hr}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            ${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>
          </td>
          <td class="underline">
            ${c}
          </td>
          <td rowspan="2">
            <span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${s}</span>
          </td>
          <td>
            ${s}
          </td>
        </tr>`;
    } else {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${hr}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span>
          </td>
          <td class="underline">
            ${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${c}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`;
    }
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
customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);

/*
  SDTEquationFaCr2Far element
  <sdt-equation-facr2far>

  Attributes:
  False Alarms; Correct Rejections; False Alarm Rate;
*/
class SDTEquationFaCr2Far extends SDTEquation {
  static get properties() {
    return {
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true
      },
      far: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.fa = 0;
    this.cr = 0;
    this.alignState();
  }
  alignState() {
    this.far = SDTMath.faCr2Far(this.fa, this.cr);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-facr2far-change', {
      detail: {
        fa: this.fa,
        cr: this.cr,
        far: this.far
      },
      bubbles: true
    }));
  }
  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let fa;
    let cr;
    let far;
    if (this.numeric) {
      fa = x$1`
        <decidables-spinner class="fa" ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <var>False Alarms</var>
        </decidables-spinner>
      `;
      cr = x$1`
        <decidables-spinner class="cr" ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `;
      far = x$1`
        <decidables-spinner class="far" disabled min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}">
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `;
    } else {
      fa = x$1`<var class="fa">False Alarms</var>`;
      cr = x$1`<var class="cr">Correct Rejections</var>`;
      far = x$1`<var class="far">False Alarm Rate</var>`;
    }
    return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${far}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${fa}
              </td>
            </tr>
            <tr>
              <td>
                ${fa}<span class="plus">+</span>${cr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}
customElements.define('sdt-equation-facr2far', SDTEquationFaCr2Far);

/*
  SDTEquationHFa2Ppv element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
class SDTEquationHFa2Ppv extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true
      },
      ppv: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.h = 0;
    this.fa = 0;
    this.alignState();
  }
  alignState() {
    this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hfa2ppv-change', {
      detail: {
        h: this.h,
        fa: this.fa,
        ppv: this.ppv
      },
      bubbles: true
    }));
  }
  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let h;
    let fa;
    let ppv;
    if (this.numeric) {
      h = x$1`
        <decidables-spinner class="h" ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <var>Hits</var>
        </decidables-spinner>
      `;
      fa = x$1`
        <decidables-spinner class="fa" ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <var>False Alarms</var>
        </decidables-spinner>
      `;
      ppv = x$1`
        <decidables-spinner class="ppv" disabled min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}">
          <var>Positive Predictive Value</var>
        </decidables-spinner>
      `;
    } else {
      h = x$1`<var class="h">Hits</var>`;
      fa = x$1`<var class="fa">False Alarms</var>`;
      ppv = x$1`<var class="ppv">Positive Predictive Value</var>`;
    }
    return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${ppv}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${fa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define('sdt-equation-hfa2ppv', SDTEquationHFa2Ppv);

/*
  SDTEquationHM2Hr element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
class SDTEquationHM2Hr extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true
      },
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.h = 0;
    this.m = 0;
    this.alignState();
  }
  alignState() {
    this.hr = SDTMath.hM2Hr(this.h, this.m);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hm2hr-change', {
      detail: {
        h: this.h,
        m: this.m,
        hr: this.hr
      },
      bubbles: true
    }));
  }
  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let h;
    let m;
    let hr;
    if (this.numeric) {
      h = x$1`
        <decidables-spinner class="h" ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <var>Hits</var>
        </decidables-spinner>
      `;
      m = x$1`
        <decidables-spinner class="m" ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <var>Misses</var>
        </decidables-spinner>
      `;
      hr = x$1`
        <decidables-spinner class="hr" disabled min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}">
          <var>Hit Rate</var>
        </decidables-spinner>
      `;
    } else {
      h = x$1`<var class="h">Hits</var>`;
      m = x$1`<var class="m">Misses</var>`;
      hr = x$1`<var class="hr">Hit Rate</var>`;
    }
    return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${hr}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${m}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define('sdt-equation-hm2hr', SDTEquationHM2Hr);

/*
  SDTEquationHMFaCr2Acc element
  <sdt-equation-hmfacr2acc>

  Attributes:
  Hits; Misses; False Alarms; Correct Rejections; Accuracy;
*/
class SDTEquationHMFaCr2Acc extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true
      },
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true
      },
      acc: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
    this.alignState();
  }
  alignState() {
    this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hmfacr2acc-change', {
      detail: {
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
        acc: this.acc
      },
      bubbles: true
    }));
  }
  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let h;
    let m;
    let fa;
    let cr;
    let acc;
    if (this.numeric) {
      h = x$1`
        <decidables-spinner class="h" ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <var>Hits</var>
        </decidables-spinner>
      `;
      m = x$1`
        <decidables-spinner class="m" ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <var>Misses</var>
        </decidables-spinner>
      `;
      fa = x$1`
        <decidables-spinner class="fa" ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <var>False Alarms</var>
        </decidables-spinner>
      `;
      cr = x$1`
        <decidables-spinner class="cr" ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `;
      acc = x$1`
        <decidables-spinner class="acc" disabled min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}">
          <var>Accuracy</var>
        </decidables-spinner>
      `;
    } else {
      h = x$1`<var class="h">Hits</var>`;
      m = x$1`<var class="m">Misses</var>`;
      fa = x$1`<var class="fa">False Alarms</var>`;
      cr = x$1`<var class="cr">Correct Rejections</var>`;
      acc = x$1`<var class="acc">Accuracy</var>`;
    }
    return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${acc}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}<span class="plus">+</span>${cr}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${cr}<span class="plus">+</span>${m}<span class="plus">+</span>${fa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}
customElements.define('sdt-equation-hmfacr2acc', SDTEquationHMFaCr2Acc);

/*
  SDTEquationHrFar2C element
  <sdt-equation-hrfar2c>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
class SDTEquationHrFar2C extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true
      },
      hr: {
        attribute: 'hit-rate',
        type: Number,
        reflect: true
      },
      far: {
        attribute: 'false-alarm-rate',
        type: Number,
        reflect: true
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true
      },
      c: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.unequal = false;
    this.hr = 0;
    this.far = 0;
    this.s = 1;
    this.alignState();
  }
  alignState() {
    this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2c-change', {
      detail: {
        hr: this.hr,
        far: this.far,
        s: this.s,
        c: this.c
      },
      bubbles: true
    }));
  }
  hrInput(event) {
    this.hr = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  farInput(event) {
    this.far = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let hr;
    let far;
    let s;
    let c;
    if (this.numeric) {
      hr = x$1`
        <decidables-spinner class="hr bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.hr}" @input=${this.hrInput.bind(this)}>
          <var>Hit Rate</var>
        </decidables-spinner>
      `;
      far = x$1`
        <decidables-spinner class="far bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.far}" @input=${this.farInput.bind(this)}>
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `;
      s = x$1`
        <decidables-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `;
      c = x$1`
        <decidables-spinner class="c bottom" disabled step=".001" .value="${+this.c.toFixed(3)}">
          <var class="math-var">c</var>
        </decidables-spinner>
      `;
    } else {
      hr = x$1`<var class="hr">Hit Rate</var>`;
      far = x$1`<var class="far">False Alarm Rate</var>`;
      s = x$1`<var class="math-var s">σ</var>`;
      c = x$1`<var class="math-var c">c</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${c}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span class="minus tight">−</span>${s}
          </td>
          <td rowspan="2">
            <span class="bracket tight">)</span><span class="bracket">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${s}</span>
          </td>
        </tr>`;
    } else {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${c}<span class="equals">=</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span><span class="bracket tight">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span><span class="bracket tight">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`;
    }
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
customElements.define('sdt-equation-hrfar2c', SDTEquationHrFar2C);

/*
  SDTEquationHrFar2D element
  <sdt-equation-hrfar2d>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
class SDTEquationHrFar2D extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true
      },
      hr: {
        attribute: 'hit-rate',
        type: Number,
        reflect: true
      },
      far: {
        attribute: 'false-alarm-rate',
        type: Number,
        reflect: true
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true
      },
      d: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.unequal = false;
    this.hr = 0;
    this.far = 0;
    this.s = 1;
    this.alignState();
  }
  alignState() {
    this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2d-change', {
      detail: {
        hr: this.hr,
        far: this.far,
        s: this.s,
        d: this.d
      },
      bubbles: true
    }));
  }
  hrInput(event) {
    this.hr = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  farInput(event) {
    this.far = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let hr;
    let far;
    let s;
    let d;
    if (this.numeric) {
      hr = x$1`
        <decidables-spinner class="hr bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.hr}" @input=${this.hrInput.bind(this)}>
          <var>Hit Rate</var>
        </decidables-spinner>
      `;
      far = x$1`
        <decidables-spinner class="far bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.far}" @input=${this.farInput.bind(this)}>
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `;
      s = x$1`
        <decidables-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `;
      d = x$1`
        <decidables-spinner class="d bottom" disabled step=".001" .value="${+this.d.toFixed(3)}">
          <var class="math-var">d′</var>
        </decidables-spinner>
      `;
    } else {
      hr = x$1`<var class="hr">Hit Rate</var>`;
      far = x$1`<var class="far">False Alarm Rate</var>`;
      s = x$1`<var class="math-var s">σ</var>`;
      d = x$1`<var class="math-var d">d′</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = x$1`
        <tr>
          <td rowspan="2">
            ${d}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket">[</span>${s}<span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`;
    } else {
      equation = x$1`
        <tr>
          <td>
              ${d}<span class="equals">=</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span>
          </td>
        </tr>`;
    }
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
customElements.define('sdt-equation-hrfar2d', SDTEquationHrFar2D);

/*
  SDTEquationMCr2Fomr element
  <sdt-equation-mcr2fomr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
class SDTEquationMCr2Fomr extends SDTEquation {
  static get properties() {
    return {
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true
      },
      fomr: {
        attribute: false,
        type: Number,
        reflect: false
      }
    };
  }
  constructor() {
    super();
    this.m = 0;
    this.cr = 0;
    this.alignState();
  }
  alignState() {
    this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }
  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-mcr2fomr-change', {
      detail: {
        m: this.m,
        cr: this.cr,
        fomr: this.fomr
      },
      bubbles: true
    }));
  }
  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }
  willUpdate() {
    this.alignState();
  }
  render() {
    let m;
    let cr;
    let fomr;
    if (this.numeric) {
      m = x$1`
        <decidables-spinner class="m" ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <var>Misses</var>
        </decidables-spinner>
      `;
      cr = x$1`
        <decidables-spinner class="cr" ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `;
      fomr = x$1`
        <decidables-spinner class="fomr" disabled min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}">
          <var>False Omission Rate</var>
        </decidables-spinner>
      `;
    } else {
      m = x$1`<var class="m">Misses</var>`;
      cr = x$1`<var class="cr">Correct Rejections</var>`;
      fomr = x$1`<var class="fomr">False Omission Rate</var>`;
    }
    return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${fomr}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${m}
              </td>
            </tr>
            <tr>
              <td>
                ${m}<span class="plus">+</span>${cr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define('sdt-equation-mcr2fomr', SDTEquationMCr2Fomr);

/*
  SDTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/
class SDTExample extends DetectableElement {
  static get styles() {
    return [super.styles, i$2`
        :host {
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
          border-radius: var(---border-radius);
        }

        .body ::slotted(*) {
          margin: 0.625rem;
        }

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > rdk-task + detectable-response,
        ::slotted(rdk-task) + ::slotted(detectable-response) { */
        .body ::slotted(detectable-response) {
          margin-left: 0;
        }

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > detectable-control + rdk-task,
        ::slotted(detectable-control) + ::slotted(rdk-task) {
          margin-left: 0;
        } */
        .body ::slotted(rdk-task) {
          margin-left: 0;
        }
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
customElements.define('sdt-example', SDTExample);

/*
  SDTExample_DoubleInteractive element
  <sdt-example-interactive>
*/
class SDTExampleDoubleInteractive extends SDTExample {
  connectedCallback() {
    super.connectedCallback();
    this.one = {};
    this.one.h = 95;
    this.one.m = 5;
    this.one.fa = 35;
    this.one.cr = 65;
    this.one.hr = SDTMath.hM2Hr(this.one.h, this.one.m);
    this.one.far = SDTMath.faCr2Far(this.one.fa, this.one.cr);
    this.one.d = SDTMath.hrFar2D(this.one.hr, this.one.far);
    this.one.c = SDTMath.hrFar2C(this.one.hr, this.one.far);
    this.two = {};
    this.two.h = 40;
    this.two.m = 60;
    this.two.fa = 20;
    this.two.cr = 80;
    this.two.hr = SDTMath.hM2Hr(this.two.h, this.two.m);
    this.two.far = SDTMath.faCr2Far(this.two.fa, this.two.cr);
    this.two.d = SDTMath.hrFar2D(this.two.hr, this.two.far);
    this.two.c = SDTMath.hrFar2C(this.two.hr, this.two.far);
    this.detectableTableOne = this.querySelector('detectable-table:nth-of-type(1)');
    this.detectableTableTwo = this.querySelector('detectable-table:nth-of-type(2)');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModelOne = this.querySelector('sdt-model:nth-of-type(1)');
    this.sdtModelTwo = this.querySelector('sdt-model:nth-of-type(2)');
    if (this.detectableTableOne) {
      this.detectableTableOne.h = this.one.h;
      this.detectableTableOne.m = this.one.m;
      this.detectableTableOne.fa = this.one.fa;
      this.detectableTableOne.cr = this.one.cr;
      this.detectableTableOne.addEventListener('detectable-table-change', event => {
        if (this.rocSpace) {
          this.rocSpace.set(event.detail.hr, event.detail.far, 'default', '↑');
        }
        if (this.sdtModelOne) {
          this.sdtModelOne.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
          this.sdtModelOne.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
        }
      });
    }
    if (this.detectableTableTwo) {
      this.detectableTableTwo.h = this.two.h;
      this.detectableTableTwo.m = this.two.m;
      this.detectableTableTwo.fa = this.two.fa;
      this.detectableTableTwo.cr = this.two.cr;
      this.detectableTableTwo.addEventListener('detectable-table-change', event => {
        if (this.rocSpace) {
          this.rocSpace.set(event.detail.hr, event.detail.far, 'two', '↓');
        }
        if (this.sdtModelTwo) {
          this.sdtModelTwo.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
          this.sdtModelTwo.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
        }
      });
    }
    if (this.rocSpace) {
      this.rocSpace.set(this.one.hr, this.one.far, 'default', '↑');
      this.rocSpace.set(this.two.hr, this.two.far, 'two', '↓');
      this.rocSpace.addEventListener('roc-point-change', event => {
        if (event.detail.name === 'default' && this.sdtModelOne) {
          this.sdtModelOne.d = event.detail.d;
          this.sdtModelOne.c = event.detail.c;
        } else if (event.detail.name === 'two' && this.sdtModelTwo) {
          this.sdtModelTwo.d = event.detail.d;
          this.sdtModelTwo.c = event.detail.c;
        }
        if (event.detail.name === 'default' && this.detectableTableOne) {
          const newh = Math.round((this.detectableTableOne.h + this.detectableTableOne.m) * event.detail.hr);
          const newm = this.detectableTableOne.h + this.detectableTableOne.m - newh;
          const newfa = Math.round((this.detectableTableOne.fa + this.detectableTableOne.cr) * event.detail.far);
          const newcr = this.detectableTableOne.fa + this.detectableTableOne.cr - newfa;
          this.detectableTableOne.h = newh;
          this.detectableTableOne.m = newm;
          this.detectableTableOne.fa = newfa;
          this.detectableTableOne.cr = newcr;
        } else if (event.detail.name === 'two' && this.detectableTableTwo) {
          const newh = Math.round((this.detectableTableTwo.h + this.detectableTableTwo.m) * event.detail.hr);
          const newm = this.detectableTableTwo.h + this.detectableTableTwo.m - newh;
          const newfa = Math.round((this.detectableTableTwo.fa + this.detectableTableTwo.cr) * event.detail.far);
          const newcr = this.detectableTableTwo.fa + this.detectableTableTwo.cr - newfa;
          this.detectableTableTwo.h = newh;
          this.detectableTableTwo.m = newm;
          this.detectableTableTwo.fa = newfa;
          this.detectableTableTwo.cr = newcr;
        }
      });
    }
    if (this.sdtModelOne) {
      this.sdtModelOne.d = this.one.d;
      this.sdtModelOne.c = this.one.c;
      this.sdtModelOne.addEventListener('sdt-model-change', event => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '↑');
        }
        if (this.detectableTableOne) {
          const newh = Math.round((this.detectableTableOne.h + this.detectableTableOne.m) * event.detail.hr);
          const newm = this.detectableTableOne.h + this.detectableTableOne.m - newh;
          const newfa = Math.round((this.detectableTableOne.fa + this.detectableTableOne.cr) * event.detail.far);
          const newcr = this.detectableTableOne.fa + this.detectableTableOne.cr - newfa;
          this.detectableTableOne.h = newh;
          this.detectableTableOne.m = newm;
          this.detectableTableOne.fa = newfa;
          this.detectableTableOne.cr = newcr;
        }
      });
    }
    if (this.sdtModelTwo) {
      this.sdtModelTwo.d = this.two.d;
      this.sdtModelTwo.c = this.two.c;
      this.sdtModelTwo.addEventListener('sdt-model-change', event => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'two', '↓');
        }
        if (this.detectableTableTwo) {
          const newh = Math.round((this.detectableTableTwo.h + this.detectableTableTwo.m) * event.detail.hr);
          const newm = this.detectableTableTwo.h + this.detectableTableTwo.m - newh;
          const newfa = Math.round((this.detectableTableTwo.fa + this.detectableTableTwo.cr) * event.detail.far);
          const newcr = this.detectableTableTwo.fa + this.detectableTableTwo.cr - newfa;
          this.detectableTableTwo.h = newh;
          this.detectableTableTwo.m = newm;
          this.detectableTableTwo.fa = newfa;
          this.detectableTableTwo.cr = newcr;
        }
      });
    }
  }
}
customElements.define('sdt-example-double-interactive', SDTExampleDoubleInteractive);

/*
  SDTExample_Human element
  <sdt-example-human>
*/
class SDTExampleHuman extends SDTExample {
  connectedCallback() {
    super.connectedCallback();
    this.count = 1;
    this.detectableControl = this.querySelector('detectable-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');
    if (this.rocSpace) {
      if (this.rocSpace.hasAttribute('history')) {
        this.rocSpace.set(0.5, 0.5, 'default', this.count);
      }
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('trials')) {
      this.detectableControl.addEventListener('detectable-control-trials', event => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }
        if (this.detectableResponse) {
          this.detectableResponse.trialTotal = event.detail.trials;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('duration')) {
      this.detectableControl.addEventListener('detectable-control-duration', event => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('coherence')) {
      this.detectableControl.addEventListener('detectable-control-coherence', event => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('payoff')) {
      this.detectableControl.addEventListener('detectable-control-payoff', event => {
        if (this.detectableResponse) {
          this.detectableResponse.hPayoff = event.detail.payoff;
          this.detectableResponse.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.detectableResponse.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.detectableResponse.crPayoff = 100 - event.detail.payoff;
        }
        if (this.detectableTable) {
          this.detectableTable.hPayoff = event.detail.payoff;
          this.detectableTable.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.detectableTable.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.detectableTable.crPayoff = 100 - event.detail.payoff;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('run')) {
      this.detectableControl.addEventListener('detectable-control-run', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('pause')) {
      this.detectableControl.addEventListener('detectable-control-pause', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('reset')) {
      this.detectableControl.addEventListener('detectable-control-reset', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }
        if (this.detectableResponse) {
          this.detectableResponse.reset();
        }
        if (this.detectableTable) {
          this.detectableTable.h = 0;
          this.detectableTable.m = 0;
          this.detectableTable.fa = 0;
          this.detectableTable.cr = 0;
        }
        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.count += 1;
            this.rocSpace.set(0.5, 0.5, `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }
        if (this.sdtModel) {
          this.sdtModel.d = 0;
          this.sdtModel.c = 0;
        }
      });
    }
    if (this.rdkTask) {
      if (this.detectableResponse) {
        this.detectableResponse.trialTotal = this.rdkTask.trials;
      }
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', event => {
        if (this.detectableResponse) {
          this.detectableResponse.start(event.detail.signal, event.detail.trial);
        }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-end', ( /* event */
      ) => {
        if (this.detectableResponse) {
          this.detectableResponse.stop();
        }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', ( /* event */
      ) => {
        if (this.detectableControl) {
          this.detectableControl.complete();
        }
      });
    }
    if (this.detectableResponse) {
      this.detectableResponse.addEventListener('detectable-response', event => {
        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }
        const newhr = SDTMath.hM2Hr(event.detail.h + 1, event.detail.m + 1);
        const newfar = SDTMath.faCr2Far(event.detail.fa + 1, event.detail.cr + 1);
        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.rocSpace.set(newhr, newfar, this.count === 1 ? 'default' : `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = newhr;
            this.rocSpace.far = newfar;
          }
        }
        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(newhr, newfar);
          this.sdtModel.c = SDTMath.hrFar2C(newhr, newfar);
        }
      });
    }
  }
}
customElements.define('sdt-example-human', SDTExampleHuman);

/*
  SDTExample_Interactive element
  <sdt-example-interactive>
*/
class SDTExampleInteractive extends SDTExample {
  connectedCallback() {
    super.connectedCallback();
    this.detectableControl = this.querySelector('detectable-control');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');
    this.rocSpaces = this.querySelectorAll('roc-space');
    if (this.detectableControl && this.detectableControl.hasAttribute('color')) {
      this.detectableControl.addEventListener('detectable-control-color', event => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }
        if (this.detectableTable) {
          this.detectableTable.color = event.detail.color;
        }
      });
    }
    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-z-roc', event => {
        if (this.rocSpaces.length > 0) {
          this.rocSpaces.forEach(rocSpace => {
            rocSpace.zRoc = event.detail.zRoc;
          });
        }
      });
    }
    if (this.detectableTable) {
      if (this.rocSpace) {
        this.rocSpace.hr = SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m);
        this.rocSpace.far = SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr);
      }
      if (this.sdtModel) {
        this.sdtModel.d = SDTMath.hrFar2D(SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m), SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr), this.sdtModel.s);
        this.sdtModel.c = SDTMath.hrFar2C(SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m), SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr), this.sdtModel.s);
      }
      this.detectableTable.addEventListener('detectable-table-change', event => {
        if (this.rocSpace) {
          this.rocSpace.far = event.detail.far;
          this.rocSpace.hr = event.detail.hr;
        }
        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far, this.sdtModel.s);
          this.sdtModel.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far, this.sdtModel.s);
        }
      });
    }
    if (this.rocSpace) {
      if (this.sdtModel && !this.detectableTable) {
        this.sdtModel.d = SDTMath.hrFar2D(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
        this.sdtModel.c = SDTMath.hrFar2C(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
        this.sdtModel.s = this.rocSpace.s;
      }
      this.rocSpace.addEventListener('roc-point-change', event => {
        if (this.sdtModel) {
          this.sdtModel.d = event.detail.d;
          this.sdtModel.c = event.detail.c;
          this.sdtModel.s = event.detail.s;
        }
        if (this.detectableTable) {
          const newh = Math.round((this.detectableTable.h + this.detectableTable.m) * event.detail.hr);
          const newm = this.detectableTable.h + this.detectableTable.m - newh;
          const newfa = Math.round((this.detectableTable.fa + this.detectableTable.cr) * event.detail.far);
          const newcr = this.detectableTable.fa + this.detectableTable.cr - newfa;
          this.detectableTable.h = newh;
          this.detectableTable.m = newm;
          this.detectableTable.fa = newfa;
          this.detectableTable.cr = newcr;
        }
      });
    }
    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', event => {
        if (this.rocSpaces.length > 0) {
          this.rocSpaces.forEach(rocSpace => {
            rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
          });
        }
        if (this.detectableTable) {
          const newh = Math.round((this.detectableTable.h + this.detectableTable.m) * event.detail.hr);
          const newm = this.detectableTable.h + this.detectableTable.m - newh;
          const newfa = Math.round((this.detectableTable.fa + this.detectableTable.cr) * event.detail.far);
          const newcr = this.detectableTable.fa + this.detectableTable.cr - newfa;
          this.detectableTable.h = newh;
          this.detectableTable.m = newm;
          this.detectableTable.fa = newfa;
          this.detectableTable.cr = newcr;
        }
      });
    }
  }
}
customElements.define('sdt-example-interactive', SDTExampleInteractive);

/*
  SDTExample_Model element
  <sdt-example-model>
*/
class SDTExampleModel extends SDTExample {
  connectedCallback() {
    super.connectedCallback();
    this.count = 1;
    this.detectableControl = this.querySelector('detectable-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.sdtModel = this.querySelector('sdt-model');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    if (this.detectableControl && this.detectableControl.hasAttribute('color')) {
      this.detectableControl.addEventListener('detectable-control-color', event => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }
        if (this.detectableTable) {
          this.detectableTable.color = event.detail.color;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('duration')) {
      this.detectableControl.addEventListener('detectable-control-duration', event => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('trials')) {
      this.detectableControl.addEventListener('detectable-control-trials', event => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }
        if (this.detectableResponse) {
          this.detectableResponse.trialTotal = event.detail.trials;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('coherence')) {
      this.detectableControl.addEventListener('detectable-control-coherence', event => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('run')) {
      this.detectableControl.addEventListener('detectable-control-run', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
        if (this.sdtModel) {
          this.sdtModel.resumeTrial();
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('pause')) {
      this.detectableControl.addEventListener('detectable-control-pause', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
        if (this.sdtModel) {
          this.sdtModel.pauseTrial();
        }
      });
    }
    if (this.detectableControl && this.detectableControl.hasAttribute('reset')) {
      this.detectableControl.addEventListener('detectable-control-reset', ( /* event */
      ) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }
        if (this.detectableResponse) {
          this.detectableResponse.reset();
        }
        if (this.sdtModel) {
          this.sdtModel.reset();
        }
        if (this.detectableTable) {
          this.detectableTable.h = 0;
          this.detectableTable.m = 0;
          this.detectableTable.fa = 0;
          this.detectableTable.cr = 0;
        }
        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.count += 1;
            this.rocSpace.set(0.5, 0.5, `point${this.count}`, '', 1);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }
      });
    }
    if (this.rdkTask) {
      if (this.detectableResponse) {
        this.detectableResponse.trialTotal = this.rdkTask.trials;
      }
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', event => {
        if (this.detectableResponse) {
          this.detectableResponse.start(event.detail.signal, event.detail.trial);
        }
        if (this.sdtModel) {
          this.sdtModel.trial(event.detail.trial, event.detail.signal, event.detail.duration, event.detail.wait, event.detail.iti);
        }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-middle', ( /* event */
      ) => {
        // if (this.sdtModel) {
        //   this.sdtModel.trial(event.detail.trial, event.detail.signal);
        // }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-end', ( /* event */
      ) => {
        if (this.detectableResponse) {
          this.detectableResponse.stop();
        }
      });
    }
    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', ( /* event */
      ) => {
        if (this.detectableControl) {
          this.detectableControl.complete();
        }
      });
    }
    if (this.sdtModel) {
      this.sdtModel.addEventListener('detectable-response', event => {
        if (this.detectableResponse) {
          this.detectableResponse.responded(event.detail.response);
        }
        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }
        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr(event.detail.h, event.detail.m);
          this.rocSpace.far = SDTMath.faCr2Far(event.detail.fa, event.detail.cr);
        }
      });
    }
    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', event => {
        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }
        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr(event.detail.h, event.detail.m);
          this.rocSpace.far = SDTMath.faCr2Far(event.detail.fa, event.detail.cr);
        }
      });
    }
  }
}
customElements.define('sdt-example-model', SDTExampleModel);

/*
  SDTExampleMulti element
  <sdt-example-multi>
*/
class SDTExampleMultiple extends SDTExample {
  static get properties() {
    return {
      variable: {
        attribute: 'variable',
        type: String,
        reflect: true
      },
      values: {
        attribute: 'values',
        converter: DecidablesConverterArray,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.variables = ['d', 'c'];
    this.variable = 'd';
    this.values = [0, 1];
  }
  connectedCallback() {
    super.connectedCallback();
    this.detectableControl = this.querySelector('detectable-control');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');
    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-z-roc', event => {
        this.rocSpace.zRoc = event.detail.zRoc;
      });
    }
    if (this.rocSpace) {
      this.rocSpace.setWithSDT(1, 0, 'default', '', 1);
      if (this.variable === 'd') {
        this.values.forEach((d, index) => {
          this.rocSpace.setWithSDT(d, this.sdtModel.c, `point${index}`, index + 1, this.sdtModel.s);
        });
      } else if (this.variable === 'c') {
        this.values.forEach((c, index) => {
          this.rocSpace.setWithSDT(this.sdtModel.d, c, `point${index}`, index + 1, this.sdtModel.s);
        });
      }
    }
    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', event => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
          if (this.variable === 'd') {
            this.values.forEach((d, index) => {
              this.rocSpace.setWithSDT(d, event.detail.c, `point${index}`, index + 1, event.detail.s);
            });
          } else if (this.variable === 'c') {
            this.values.forEach((c, index) => {
              this.rocSpace.setWithSDT(event.detail.d, c, `point${index}`, index + 1, event.detail.s);
            });
          }
        }
      });
    }
  }
}
customElements.define('sdt-example-multiple', SDTExampleMultiple);

/*
  SDTExampleUnequal element
  <sdt-example-unequal>
*/
class SDTExampleUnequal extends SDTExample {
  connectedCallback() {
    super.connectedCallback();
    this.detectableControl = this.querySelector('detectable-control');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');
    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-z-roc', event => {
        this.rocSpace.zRoc = event.detail.zRoc;
      });
    }
    if (this.rocSpace) {
      this.rocSpace.setWithSDT(1, 0, 'default', '', 1); // Set 'default' to equal variance for contours

      range(-1.5, 1.6, 0.5).forEach((c, index) => {
        this.rocSpace.setWithSDT(this.sdtModel.d, c, `point${index}`, '', this.sdtModel.s);
      });
    }
    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', event => {
        if (this.rocSpace) {
          range(-1.5, 1.6, 0.5).forEach((c, index) => {
            this.rocSpace.setWithSDT(event.detail.d, c, `point${index}`, '', event.detail.s);
          });
        }
      });
    }
  }
}
customElements.define('sdt-example-unequal', SDTExampleUnequal);
//# sourceMappingURL=page.js.map
