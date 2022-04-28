var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$1 = // eslint-disable-next-line es-x/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var path$1 = global$1;

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var functionBindNative = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var FunctionPrototype$2 = Function.prototype;
var bind$1 = FunctionPrototype$2.bind;
var call$2 = FunctionPrototype$2.call;
var uncurryThis = functionBindNative && bind$1.bind(call$2, call$2);
var functionUncurryThis = functionBindNative ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call$2.apply(fn, arguments);
  };
};

var TypeError$k = global$1.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError$k("Can't call method on " + it);
  return it;
};

var Object$6 = global$1.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject = function (argument) {
  return Object$6(requireObjectCoercible(argument));
};

var hasOwnProperty = functionUncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var isPure = false;

var defineProperty$8 = Object.defineProperty;

var setGlobal = function (key, value) {
  try {
    defineProperty$8(global$1, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$1[key] = value;
  }

  return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global$1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.22.3',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
});

var id$1 = 0;
var postfix = Math.random();
var toString$2 = functionUncurryThis(1.0.toString);

var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id$1 + postfix, 36);
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable = function (argument) {
  return typeof argument == 'function';
};

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$1[namespace]) : global$1[namespace] && global$1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$1 = global$1.process;
var Deno = global$1.Deno;
var versions = process$1 && process$1.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version && engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es-x/no-symbol -- required for testing */

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && engineV8Version && engineV8Version < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */
var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$1.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (useSymbolAsUid && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var f$8 = wellKnownSymbol;
var wellKnownSymbolWrapped = {
  f: f$8
};

var descriptors = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var isObject = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = descriptors && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var String$6 = global$1.String;
var TypeError$j = global$1.TypeError; // `Assert: Type(argument) is Object`

var anObject = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError$j(String$6(argument) + ' is not an object');
};

var call$1 = Function.prototype.call;
var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
  return call$1.apply(call$1, arguments);
};

var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

var Object$5 = global$1.Object;
var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$5(it));
};

var String$5 = global$1.String;

var tryToString = function (argument) {
  try {
    return String$5(argument);
  } catch (error) {
    return 'Object';
  }
};

var TypeError$i = global$1.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError$i(tryToString(argument) + ' is not a function');
};

// https://tc39.es/ecma262/#sec-getmethod

var getMethod = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var TypeError$h = global$1.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  throw TypeError$h("Can't convert object to primitive value");
};

var TypeError$g = global$1.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = functionCall(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError$g("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var TypeError$f = global$1.TypeError; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

var f$7 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);

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
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$f('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var objectDefineProperty = {
  f: f$7
};

var defineProperty$7 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path$1.Symbol || (path$1.Symbol = {});
  if (!hasOwnProperty_1(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

// https://tc39.es/ecma262/#sec-symbol.matchall

defineWellKnownSymbol('matchAll');

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

var f$6 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var objectPropertyIsEnumerable = {
  f: f$6
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$1 = functionUncurryThis({}.toString);
var stringSlice$8 = functionUncurryThis(''.slice);

var classofRaw = function (it) {
  return stringSlice$8(toString$1(it), 8, -1);
};

var Object$4 = global$1.Object;
var split$3 = functionUncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split$3(it, '') : Object$4(it);
} : Object$4;

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

var f$5 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
  f: f$5
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var functionToString = functionUncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable(sharedStore.inspectSource)) {
  sharedStore.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$2 = global$1.WeakMap;
var nativeWeakMap = isCallable(WeakMap$2) && /native code/.test(inspectSource(WeakMap$2));

var keys$1 = shared('keys');

var sharedKey = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$e = global$1.TypeError;
var WeakMap$1 = global$1.WeakMap;
var set$4, get$3, has;

var enforce = function (it) {
  return has(it) ? get$3(it) : set$4(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get$3(it)).type !== TYPE) {
      throw TypeError$e('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
  var wmget = functionUncurryThis(store.get);
  var wmhas = functionUncurryThis(store.has);
  var wmset = functionUncurryThis(store.set);

  set$4 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get$3 = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;

  set$4 = function (it, metadata) {
    if (hasOwnProperty_1(it, STATE)) throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get$3 = function (it) {
    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwnProperty_1(it, STATE);
  };
}

var internalState = {
  set: set$4,
  get: get$3,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var redefine = createCommonjsModule(function (module) {
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');
  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;

    if (isCallable(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }

      if (!hasOwnProperty_1(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        createNonEnumerableProperty(value, 'name', name);
      }

      state = enforceInternalState(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }

    if (O === global$1) {
      if (simple) O[key] = value;else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  });
});

var ceil = Math.ceil;
var floor$7 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$7 : ceil)(number);
};

var max$4 = Math.max;
var min$3 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max$4(integer + length, 0) : min$3(integer, length);
};

var min$2 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var indexOf$2 = arrayIncludes.indexOf;
var push$7 = functionUncurryThis([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$7(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$7(result, key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
  f: f$4
};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
var f$3 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
  f: f$3
};

var concat$2 = functionUncurryThis([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};

var normalize$1 = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data$1 = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call; // eslint-disable-next-line es-x/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

var String$4 = global$1.String;
var TypeError$d = global$1.TypeError;

var aPossiblePrototype = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError$d("Can't set " + String$4(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe

var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$6 = objectDefineProperty.f;

var proxyAccessor = function (Target, Source, key) {
  key in Target || defineProperty$6(Target, key, {
    configurable: true,
    get: function () {
      return Source[key];
    },
    set: function (it) {
      Source[key] = it;
    }
  });
};

var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var TO_STRING_TAG$5 = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG$5] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
var Object$3 = global$1.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var String$3 = global$1.String;

var toString = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$3(argument);
};

var normalizeStringArgument = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause

var installErrorCause = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};

var $Error = Error;
var replace$5 = functionUncurryThis(''.replace);

var TEST = function (arg) {
  return String($Error(arg).stack);
}('zxcasd');

var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var clearErrorStack = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace$5(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  }

  return stack;
};

var errorStackInstallable = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

var wrapErrorConstructorWithCause = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);
  if (!OriginalError) return;
  var OriginalErrorPrototype = OriginalError.prototype; // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006

  if (hasOwnProperty_1(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
  if (!FORCED) return OriginalError;
  var BaseError = getBuiltIn('Error');
  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (errorStackInstallable) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && objectIsPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });
  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (objectSetPrototypeOf) objectSetPrototypeOf(WrappedError, BaseError);else copyConstructorProperties(WrappedError, BaseError, {
      name: true
    });
  } else if (descriptors && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);
  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }

    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) {
    /* empty */
  }
  return WrappedError;
};

/* eslint-disable no-unused-vars -- required for functions `.length` */
var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly$1 = global$1[WEB_ASSEMBLY];
var FORCED$3 = Error('e', {
  cause: 7
}).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$3);
  _export({
    global: true,
    forced: FORCED$3
  }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly$1 && WebAssembly$1[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$3);
    _export({
      target: WEB_ASSEMBLY,
      stat: true,
      forced: FORCED$3
    }, O);
  }
}; // https://github.com/tc39/proposal-error-cause


exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) {
    return functionApply(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) {
    return functionApply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) {
    return functionApply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) {
    return functionApply(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) {
    return functionApply(init, this, arguments);
  };
});

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var Object$2 = global$1.Object;
var ObjectPrototype$2 = Object$2.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

var objectGetPrototypeOf = correctPrototypeGetter ? Object$2.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwnProperty_1(object, IE_PROTO$1)) return object[IE_PROTO$1];
  var constructor = object.constructor;

  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof Object$2 ? ObjectPrototype$2 : null;
};

// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe

var f$2 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);

  return O;
};
var objectDefineProperties = {
  f: f$2
};

var html = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
};

var bind = functionUncurryThis(functionUncurryThis.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : functionBindNative ? bind(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var iterators = {};

var ITERATOR$7 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$7] === it);
};

var ITERATOR$6 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR$6) || getMethod(it, '@@iterator') || iterators[classof(it)];
};

var TypeError$c = global$1.TypeError;

var getIterator = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
  throw TypeError$c(tryToString(argument) + ' is not iterable');
};

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);

  try {
    innerResult = getMethod(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = functionCall(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

var TypeError$b = global$1.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError$b(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
      }

      return new Result(false);
    }

    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;

  while (!(step = functionCall(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
  }

  return new Result(false);
};

var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var Error$3 = global$1.Error;
var push$6 = [].push;

var $AggregateError$1 = function AggregateError(errors, message
/* , options */
) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = objectIsPrototypeOf(AggregateErrorPrototype, this);
  var that;

  if (objectSetPrototypeOf) {
    that = objectSetPrototypeOf(new Error$3(), isInstance ? objectGetPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : objectCreate(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG$3, 'Error');
  }

  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  if (errorStackInstallable) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate(errors, push$6, {
    that: errorsArray
  });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (objectSetPrototypeOf) objectSetPrototypeOf($AggregateError$1, Error$3);else copyConstructorProperties($AggregateError$1, Error$3, {
  name: true
});
var AggregateErrorPrototype = $AggregateError$1.prototype = objectCreate(Error$3.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError$1),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
}); // `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor

_export({
  global: true
}, {
  AggregateError: $AggregateError$1
});

var AGGREGATE_ERROR = 'AggregateError';
var $AggregateError = getBuiltIn(AGGREGATE_ERROR);
var FORCED$2 = !fails(function () {
  return $AggregateError([1]).errors[0] !== 1;
}) && fails(function () {
  return $AggregateError([1], AGGREGATE_ERROR, {
    cause: 7
  }).cause !== 7;
}); // https://github.com/tc39/proposal-error-cause

_export({
  global: true,
  forced: FORCED$2
}, {
  AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
    // eslint-disable-next-line no-unused-vars -- required for functions `.length`
    return function AggregateError(errors, message) {
      return functionApply(init, this, arguments);
    };
  }, FORCED$2, true)
});

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

// https://github.com/tc39/proposal-relative-indexing-method


_export({
  target: 'Array',
  proto: true
}, {
  at: function at(index) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
  }
});
addToUnscopables('at');

// in popular engines, so it's moved to a separate module
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('flat');

// in popular engines, so it's moved to a separate module
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('flatMap');

// https://tc39.es/ecma262/#sec-thisnumbervalue

var thisNumberValue = functionUncurryThis(1.0.valueOf);

var RangeError$8 = global$1.RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError$8('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var log$1 = Math.log;
var LOG10E = Math.LOG10E; // eslint-disable-next-line es-x/no-math-log10 -- safe

var mathLog10 = Math.log10 || function log10(x) {
  return log$1(x) * LOG10E;
};

var RangeError$7 = global$1.RangeError;
var String$2 = global$1.String;
var isFinite$1 = global$1.isFinite;
var abs$3 = Math.abs;
var floor$6 = Math.floor;
var pow$2 = Math.pow;
var round = Math.round;
var un$ToExponential = functionUncurryThis(1.0.toExponential);
var repeat = functionUncurryThis(stringRepeat);
var stringSlice$7 = functionUncurryThis(''.slice); // Edge 17-

var ROUNDS_PROPERLY = un$ToExponential(-6.9e-11, 4) === '-6.9000e-11' // IE11- && Edge 14-
&& un$ToExponential(1.255, 2) === '1.25e+0' // FF86-, V8 ~ Chrome 49-50
&& un$ToExponential(12345, 3) === '1.235e+4' // FF86-, V8 ~ Chrome 49-50
&& un$ToExponential(25, 0) === '3e+1'; // IE8-

var THROWS_ON_INFINITY_FRACTION = fails(function () {
  un$ToExponential(1, Infinity);
}) && fails(function () {
  un$ToExponential(1, -Infinity);
}); // Safari <11 && FF <50

var PROPER_NON_FINITE_THIS_CHECK = !fails(function () {
  un$ToExponential(Infinity, Infinity);
}) && !fails(function () {
  un$ToExponential(NaN, Infinity);
});
var FORCED$1 = !ROUNDS_PROPERLY || !THROWS_ON_INFINITY_FRACTION || !PROPER_NON_FINITE_THIS_CHECK; // `Number.prototype.toExponential` method
// https://tc39.es/ecma262/#sec-number.prototype.toexponential

_export({
  target: 'Number',
  proto: true,
  forced: FORCED$1
}, {
  toExponential: function toExponential(fractionDigits) {
    var x = thisNumberValue(this);
    if (fractionDigits === undefined) return un$ToExponential(x);
    var f = toIntegerOrInfinity(fractionDigits);
    if (!isFinite$1(x)) return String$2(x); // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

    if (f < 0 || f > 20) throw RangeError$7('Incorrect fraction digits');
    if (ROUNDS_PROPERLY) return un$ToExponential(x, f);
    var s = '';
    var m = '';
    var e = 0;
    var c = '';
    var d = '';

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x === 0) {
      e = 0;
      m = repeat('0', f + 1);
    } else {
      // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
      // TODO: improve accuracy with big fraction digits
      var l = mathLog10(x);
      e = floor$6(l);
      var n = 0;
      var w = pow$2(10, e - f);
      n = round(x / w);

      if (2 * x >= (2 * n + 1) * w) {
        n += 1;
      }

      if (n >= pow$2(10, f + 1)) {
        n /= 10;
        e += 1;
      }

      m = String$2(n);
    }

    if (f !== 0) {
      m = stringSlice$7(m, 0, 1) + '.' + stringSlice$7(m, 1);
    }

    if (e === 0) {
      c = '+';
      d = '0';
    } else {
      c = e > 0 ? '+' : '-';
      d = String$2(abs$3(e));
    }

    m += 'e' + c + d;
    return s + m;
  }
});

// https://github.com/tc39/proposal-accessible-object-hasownproperty

_export({
  target: 'Object',
  stat: true
}, {
  hasOwn: hasOwnProperty_1
});

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
}; // `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability


var f$1 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability = {
  f: f$1
};

var perform = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

// https://tc39.es/ecma262/#sec-promise.allsettled


_export({
  target: 'Promise',
  stat: true
}, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapability.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        functionCall(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = {
            status: 'fulfilled',
            value: value
          };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = {
            status: 'rejected',
            reason: error
          };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any

_export({
  target: 'Promise',
  stat: true
}, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapability.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        functionCall(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var promiseNativeConstructor = global$1.Promise;

var noop$3 = function () {
  /* empty */
};

var empty$1 = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = functionUncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$3);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop$3, empty$1, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var TypeError$a = global$1.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$a(tryToString(argument) + ' is not a constructor');
};

var SPECIES$3 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aConstructor(S);
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var NativePromisePrototype = promiseNativeConstructor && promiseNativeConstructor.prototype; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

var NON_GENERIC = !!promiseNativeConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({
    then: function () {
      /* empty */
    }
  }, function () {
    /* empty */
  });
}); // `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally

_export({
  target: 'Promise',
  proto: true,
  real: true,
  forced: NON_GENERIC
}, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
}); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

if (isCallable(promiseNativeConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];

  if (NativePromisePrototype['finally'] !== method) {
    redefine(NativePromisePrototype, 'finally', method, {
      unsafe: true
    });
  }
}

var defineProperty$5 = objectDefineProperty.f;
var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;

  if (target && !hasOwnProperty_1(target, TO_STRING_TAG$2)) {
    defineProperty$5(target, TO_STRING_TAG$2, {
      configurable: true,
      value: TAG
    });
  }
};

_export({
  global: true
}, {
  Reflect: {}
}); // Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag

setToStringTag(global$1.Reflect, 'Reflect', true);

var charAt$7 = functionUncurryThis(''.charAt);
var FORCED = fails(function () {
  // eslint-disable-next-line es-x/no-array-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
}); // `String.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method

_export({
  target: 'String',
  proto: true,
  forced: FORCED
}, {
  at: function at(index) {
    var S = toString(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : charAt$7(S, k);
  }
});

var ITERATOR$5 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if (!isCallable(IteratorPrototype$2[ITERATOR$5])) {
  redefine(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwnProperty_1(R, 'flags') && objectIsPrototypeOf(RegExpPrototype$2, R) ? functionCall(regexpFlags, R) : flags;
};

var charAt$6 = functionUncurryThis(''.charAt);
var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
var stringSlice$6 = functionUncurryThis(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$6(S, position) : first : CONVERT_TO_STRING ? stringSlice$6(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt$5 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt$5(S, index).length : 1);
};

var $RegExp$2 = global$1.RegExp;
var UNSUPPORTED_Y$1 = fails(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$1 || fails(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$1 || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var $RegExp$1 = global$1.RegExp;
var regexpUnsupportedDotAll = fails(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var $RegExp = global$1.RegExp;
var regexpUnsupportedNcg = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var getInternalState$4 = internalState.get;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$4 = functionUncurryThis(''.charAt);
var indexOf$1 = functionUncurryThis(''.indexOf);
var replace$4 = functionUncurryThis(''.replace);
var stringSlice$5 = functionUncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  functionCall(nativeExec, re1, 'a');
  functionCall(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || regexpUnsupportedDotAll || regexpUnsupportedNcg;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$4(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = functionCall(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = functionCall(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$4(flags, 'y', '');

      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$5(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = functionCall(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$5(match.input, charsAdded);
        match[0] = stringSlice$5(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      functionCall(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = objectCreate(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec = patchedExec;

var TypeError$9 = global$1.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = functionCall(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }

  if (classofRaw(R) === 'RegExp') return functionCall(regexpExec, R, S);
  throw TypeError$9('RegExp#exec called on incompatible receiver');
};

/* eslint-disable es-x/no-string-prototype-matchall -- safe */


var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState$5 = internalState.set;
var getInternalState$3 = internalState.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype$1 = RegExp.prototype;
var TypeError$8 = global$1.TypeError;
var stringIndexOf$2 = functionUncurryThis(''.indexOf);
var un$MatchAll = functionUncurryThis(''.matchAll);
var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails(function () {
  un$MatchAll('a', /./);
});
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState$5(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState$3(this);
  if (state.done) return {
    value: undefined,
    done: true
  };
  var R = state.regexp;
  var S = state.string;
  var match = regexpExecAbstract(R, S);
  if (match === null) return {
    value: undefined,
    done: state.done = true
  };

  if (state.global) {
    if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return {
      value: match,
      done: false
    };
  }

  state.done = true;
  return {
    value: match,
    done: false
  };
});

var $matchAll = function (string) {
  var R = anObject(this);
  var S = toString(string);
  var C = speciesConstructor(R, RegExp);
  var flags = toString(regexpGetFlags(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf$2(flags, 'g');
  fullUnicode = !!~stringIndexOf$2(flags, 'u');
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
}; // `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall


_export({
  target: 'String',
  proto: true,
  forced: WORKS_WITH_NON_GLOBAL_REGEX
}, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;

    if (regexp != null) {
      if (isRegexp(regexp)) {
        flags = toString(requireObjectCoercible(regexpGetFlags(regexp)));
        if (!~stringIndexOf$2(flags, 'g')) throw TypeError$8('`.matchAll` does not allow non-global regexes');
      }

      if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
      matcher = getMethod(regexp, MATCH_ALL);
      if (matcher === undefined && isPure && classofRaw(regexp) == 'RegExp') matcher = $matchAll;
      if (matcher) return functionCall(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);

    S = toString(O);
    rx = new RegExp(regexp, 'g');
    return rx[MATCH_ALL](S);
  }
});
MATCH_ALL in RegExpPrototype$1 || redefine(RegExpPrototype$1, MATCH_ALL, $matchAll);

// https://tc39.es/ecma262/#sec-regexp.prototype.exec


_export({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== regexpExec
}, {
  exec: regexpExec
});

var SPECIES$2 = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$2] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = functionUncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = functionUncurryThis(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var floor$5 = Math.floor;
var charAt$3 = functionUncurryThis(''.charAt);
var replace$3 = functionUncurryThis(''.replace);
var stringSlice$4 = functionUncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution

var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }

  return replace$3(replacement, symbols, function (match, ch) {
    var capture;

    switch (charAt$3(ch, 0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return stringSlice$4(str, 0, position);

      case "'":
        return stringSlice$4(str, tailPos);

      case '<':
        capture = namedCaptures[stringSlice$4(ch, 1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = floor$5(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$3(ch, 1) : captures[f - 1] + charAt$3(ch, 1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
};

var REPLACE$1 = wellKnownSymbol('replace');
var max$3 = Math.max;
var min$1 = Math.min;
var concat$1 = functionUncurryThis([].concat);
var push$5 = functionUncurryThis([].push);
var stringIndexOf$1 = functionUncurryThis(''.indexOf);
var stringSlice$3 = functionUncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE$1]) {
    return /./[REPLACE$1]('a', '$0') === '';
  }

  return false;
}();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


  return ''.replace(re, '$<a>') !== '7';
}); // @@replace logic

fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE$1);
    return replacer ? functionCall(replacer, searchValue, O, replaceValue) : functionCall(nativeReplace, toString(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    var rx = anObject(this);
    var S = toString(string);

    if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
      var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
      if (res.done) return res.value;
    }

    var functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regexpExecAbstract(rx, S);
      if (result === null) break;
      push$5(results, result);
      if (!global) break;
      var matchStr = toString(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = toString(result[0]);
      var position = max$3(min$1(toIntegerOrInfinity(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) push$5(captures, maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = concat$1([matched], captures, position, S);
        if (namedCaptures !== undefined) push$5(replacerArgs, namedCaptures);
        var replacement = toString(functionApply(replaceValue, undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += stringSlice$3(S, nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + stringSlice$3(S, nextSourcePosition);
  }];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var REPLACE = wellKnownSymbol('replace');
var TypeError$7 = global$1.TypeError;
var indexOf = functionUncurryThis(''.indexOf);
functionUncurryThis(''.replace);
var stringSlice$2 = functionUncurryThis(''.slice);
var max$2 = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
}; // `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall


_export({
  target: 'String',
  proto: true
}, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';

    if (searchValue != null) {
      IS_REG_EXP = isRegexp(searchValue);

      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(regexpGetFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw TypeError$7('`.replaceAll` does not allow non-global regexes');
      }

      replacer = getMethod(searchValue, REPLACE);

      if (replacer) {
        return functionCall(replacer, searchValue, O, replaceValue);
      }
    }

    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max$2(1, searchLength);
    position = stringIndexOf(string, searchString, 0);

    while (position !== -1) {
      replacement = functionalReplace ? toString(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice$2(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }

    if (endOfLastMatch < string.length) {
      result += stringSlice$2(string, endOfLastMatch);
    }

    return result;
  }
});

var ITERATOR$4 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  }; // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

// eslint-disable-next-line es-x/no-typed-arrays -- safe
var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var defineProperty$4 = objectDefineProperty.f;
var Int8Array$2 = global$1.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$2 && Int8Array$2.prototype;
var Uint8ClampedArray$1 = global$1.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray = Int8Array$2 && objectGetPrototypeOf(Int8Array$2);
var TypedArrayPrototype = Int8ArrayPrototype$1 && objectGetPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype$1 = Object.prototype;
var TypeError$6 = global$1.TypeError;
var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferNative && !!objectSetPrototypeOf && classof(global$1.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;
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
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView' || hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
};

var aTypedArray$3 = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError$6('Target is not a typed array');
};

var aTypedArrayConstructor$2 = function (C) {
  if (isCallable(C) && (!objectSetPrototypeOf || objectIsPrototypeOf(TypedArray, C))) return C;
  throw TypeError$6(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$3 = function (KEY, property, forced, options) {
  if (!descriptors) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$1[ARRAY];
    if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) {
        /* empty */
      }
    }
  }

  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod$2 = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!descriptors) return;

  if (objectSetPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$1[ARRAY];
      if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) {
        /* empty */
      }
    }

    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$1 && TypedArray[KEY] || property);
      } catch (error) {
        /* empty */
      }
    } else return;
  }

  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$1[ARRAY];

    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$1[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS$1 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$1[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
} // WebKit bug - typed arrays constructors prototype is Object.prototype


if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError$6('Incorrect invocation');
  };

  if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME in TypedArrayConstructorsList) {
    if (global$1[NAME]) objectSetPrototypeOf(global$1[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$1) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME in TypedArrayConstructorsList) {
    if (global$1[NAME]) objectSetPrototypeOf(global$1[NAME].prototype, TypedArrayPrototype);
  }
} // WebKit bug - one more object in Uint8ClampedArray prototype chain


if (NATIVE_ARRAY_BUFFER_VIEWS$1 && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (descriptors && !hasOwnProperty_1(TypedArrayPrototype, TO_STRING_TAG$1)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineProperty$4(TypedArrayPrototype, TO_STRING_TAG$1, {
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });

  for (NAME in TypedArrayConstructorsList) if (global$1[NAME]) {
    createNonEnumerableProperty(global$1[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$1,
  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray$3,
  aTypedArrayConstructor: aTypedArrayConstructor$2,
  exportTypedArrayMethod: exportTypedArrayMethod$3,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

/* eslint-disable no-new -- required for testing */
var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var ArrayBuffer$1 = global$1.ArrayBuffer;
var Int8Array$1 = global$1.Int8Array;
var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array$1(1);
}) || !fails(function () {
  new Int8Array$1(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$1();
  new Int8Array$1(null);
  new Int8Array$1(1.5);
  new Int8Array$1(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$1(new ArrayBuffer$1(2), 1, undefined).length !== 1;
});

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);

  return target;
};

var TypeError$5 = global$1.TypeError;

var anInstance = function (it, Prototype) {
  if (objectIsPrototypeOf(Prototype, it)) return it;
  throw TypeError$5('Incorrect invocation');
};

var RangeError$6 = global$1.RangeError; // `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex

var toIndex = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw RangeError$6('Wrong length or index');
  return length;
};

var Array$5 = global$1.Array;
var abs$2 = Math.abs;
var pow$1 = Math.pow;
var floor$4 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = Array$5(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow$1(2, -24) - pow$1(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs$2(number); // eslint-disable-next-line no-self-compare -- NaN check

  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$4(log(number) / LN2);
    c = pow$1(2, -exponent);

    if (number * c < 1) {
      exponent--;
      c *= 2;
    }

    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow$1(2, 1 - eBias);
    }

    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }

    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow$1(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow$1(2, eBias - 1) * pow$1(2, mantissaLength);
      exponent = 0;
    }
  }

  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }

  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;

  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }

  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;

  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }

  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;

  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }

  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow$1(2, mantissaLength);
    exponent = exponent - eBias;
  }

  return (sign ? -1 : 1) * mantissa * pow$1(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

// https://tc39.es/ecma262/#sec-array.prototype.fill


var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

var createProperty = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var Array$4 = global$1.Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$4(max$1(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);

  result.length = n;
  return result;
};

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var defineProperty$3 = objectDefineProperty.f;
var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var getInternalState$2 = internalState.get;
var setInternalState$4 = internalState.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global$1[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$1[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array$3 = global$1.Array;
var RangeError$5 = global$1.RangeError;
var fill = functionUncurryThis(arrayFill);
var reverse = functionUncurryThis([].reverse);
var packIEEE754 = ieee754.pack;
var unpackIEEE754 = ieee754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty$3(Constructor[PROTOTYPE], key, {
    get: function () {
      return getInternalState$2(this)[key];
    }
  });
};

var get$2 = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState$2(view);
  if (intIndex + count > store.byteLength) throw RangeError$5(WRONG_INDEX);
  var bytes = getInternalState$2(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySliceSimple(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set$3 = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState$2(view);
  if (intIndex + count > store.byteLength) throw RangeError$5(WRONG_INDEX);
  var bytes = getInternalState$2(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);

  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!arrayBufferNative) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState$4(this, {
      bytes: fill(Array$3(byteLength), 0),
      byteLength: byteLength
    });
    if (!descriptors) this.byteLength = byteLength;
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferLength = getInternalState$2(buffer).byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$5('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$5(WRONG_LENGTH);
    setInternalState$4(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });

    if (!descriptors) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (descriptors) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get$2(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get$2(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get$2(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set$3(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set$3(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set$3(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$1 && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */

  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME$1;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return new NativeArrayBuffer(toIndex(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key$1; keys.length > j;) {
      if (!((key$1 = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key$1, NativeArrayBuffer[key$1]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME$1) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  } // WebKit bug - the same parent prototype for typed arrays and data view


  if (objectSetPrototypeOf && objectGetPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    objectSetPrototypeOf(DataViewPrototype, ObjectPrototype);
  } // iOS Safari 7.x bug


  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = functionUncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, {
    unsafe: true
  });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var floor$3 = Math.floor; // `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es-x/no-number-isinteger -- safe

var isIntegralNumber = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor$3(it) === it;
};

var RangeError$4 = global$1.RangeError;

var toPositiveInteger = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw RangeError$4("The argument can't be less than 0");
  return result;
};

var RangeError$3 = global$1.RangeError;

var toOffset = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError$3('Wrong offset');
  return offset;
};

var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

var typedArrayFrom = function from(source
/* , mapfn, thisArg */
) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;

  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];

    while (!(step = functionCall(next, iterator)).done) {
      O.push(step.value);
    }
  }

  if (mapping && argumentsLength > 2) {
    mapfn = functionBindContext(mapfn, arguments[2]);
  }

  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor$1(C))(length);

  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }

  return result;
};

// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe

var isArray = Array.isArray || function isArray(argument) {
  return classofRaw(argument) == 'Array';
};

var SPECIES$1 = wellKnownSymbol('species');
var Array$2 = global$1.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor = function (originalArray) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$2 || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$2 : C;
};

// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var push$4 = functionUncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$4(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$4(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var SPECIES = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var typedArrayConstructor = createCommonjsModule(function (module) {

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var forEach = arrayIteration.forEach;
  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var round = Math.round;
  var RangeError = global$1.RangeError;
  var ArrayBuffer = arrayBuffer.ArrayBuffer;
  var ArrayBufferPrototype = ArrayBuffer.prototype;
  var DataView = arrayBuffer.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
  var TypedArray = arrayBufferViewCore.TypedArray;
  var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var isTypedArray = arrayBufferViewCore.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    aTypedArrayConstructor(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) result[index] = list[index++];

    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty(it, key, {
      get: function () {
        return getInternalState(this)[key];
      }
    });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return objectIsPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey(key);

    if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwnProperty_1(descriptor, 'value') && !hasOwnProperty_1(descriptor, 'get') && !hasOwnProperty_1(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!hasOwnProperty_1(descriptor, 'writable') || descriptor.writable) && (!hasOwnProperty_1(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }

    return nativeDefineProperty(target, key, descriptor);
  };

  if (descriptors) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
      objectDefineProperty.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    _export({
      target: 'Object',
      stat: true,
      forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    module.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$1[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructorPrototype);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;

          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return functionCall(typedArrayFrom, TypedArrayConstructor, data);
          }

          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView(buffer)
          });

          while (index < length) addElement(that, index++);
        });
        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
      } else if (typedArrayConstructorsRequireWrappers) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructorPrototype);
          return inheritIfRequired(function () {
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return functionCall(typedArrayFrom, TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      _export({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else module.exports = function () {
    /* empty */
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method

exportTypedArrayMethod$2('at', function at(index) {
  var O = aTypedArray$2(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return k < 0 || k >= len ? undefined : O[k];
});

var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod; // `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from

exportTypedArrayStaticMethod$1('from', typedArrayFrom, typedArrayConstructorsRequireWrappers);

var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = arrayBufferViewCore.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of

exportTypedArrayStaticMethod('of', function
  /* ...items */
of() {
  var index = 0;
  var length = arguments.length;
  var result = new (aTypedArrayConstructor(this))(length);

  while (length > index) result[index] = arguments[index++];

  return result;
}, typedArrayConstructorsRequireWrappers);

var RangeError$2 = global$1.RangeError;
var Int8Array = global$1.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  functionCall($set, array, {
    length: 1,
    0: 3
  }, 1);
  return array[1] !== 3;
}); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other

var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
}); // `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

exportTypedArrayMethod$1('set', function set(arrayLike
/* , offset */
) {
  aTypedArray$1(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return functionCall($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError$2('Wrong length');

  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var floor$2 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$2(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge$1(array, mergeSort(arraySliceSimple(array, 0, middle), comparefn), mergeSort(arraySliceSimple(array, middle), comparefn), comparefn);
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge$1 = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }

  return array;
};

var arraySort = mergeSort;

var firefox = engineUserAgent.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];

var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];

var aTypedArray = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global$1.Uint16Array;
var un$Sort = Uint16Array && functionUncurryThis(Uint16Array.prototype.sort); // WebKit

var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {
  un$Sort(new Uint16Array(2), null);
}) && fails(function () {
  un$Sort(new Uint16Array(2), {});
}));
var STABLE_SORT = !!un$Sort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (engineV8Version) return engineV8Version < 74;
  if (engineFfVersion) return engineFfVersion < 67;
  if (engineIsIeOrEdge) return true;
  if (engineWebkitVersion) return engineWebkitVersion < 602;
  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  un$Sort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

    if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
}; // `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return un$Sort(this, comparefn);
  return arraySort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var classList$1 = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList$1 && classList$1.constructor && classList$1.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

var PROPER_FUNCTION_NAME = functionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var IteratorPrototype = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$3])) {
          redefine(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return functionCall(nativeIterator, this);
      };
    }
  } // export additional methods


  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR$3, defaultIterator, {
      name: DEFAULT
    });
  }

  iterators[NAME] = defaultIterator;
  return methods;
};

var defineProperty$2 = objectDefineProperty.f;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

var values = iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries'); // V8 ~ Chrome 45- bug

if (descriptors && values.name !== 'values') try {
  defineProperty$2(values, 'name', {
    value: 'values'
  });
} catch (error) {
  /* empty */
}

var ITERATOR$2 = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$2] = ArrayValues;
    }

    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }

    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in domIterables) {
  handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(domTokenListPrototype, 'DOMTokenList');

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

var defineProperty$1 = objectDefineProperty.f;
var DOM_EXCEPTION = 'DOMException';
var Error$2 = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error$2(message);
  error.name = DOM_EXCEPTION;
  defineProperty$1(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = ('stack' in Error$2(DOM_EXCEPTION));
var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK; // `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness

_export({
  global: true,
  forced: FORCED_CONSTRUCTOR
}, {
  // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty$1(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in domExceptionConstants) if (hasOwnProperty_1(domExceptionConstants, key)) {
    var constant$6 = domExceptionConstants[key];
    var constantName = constant$6.s;

    if (!hasOwnProperty_1(PolyfilledDOMException, constantName)) {
      defineProperty$1(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant$6.c));
    }
  }
}

var arraySlice = functionUncurryThis([].slice);

var TypeError$4 = global$1.TypeError;

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError$4('Not enough arguments');
  return passed;
};

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

var engineIsNode = classofRaw(global$1.process) == 'process';

var set$2 = global$1.setImmediate;
var clear = global$1.clearImmediate;
var process = global$1.process;
var Dispatch$1 = global$1.Dispatch;
var Function$1 = global$1.Function;
var MessageChannel = global$1.MessageChannel;
var String$1 = global$1.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$1.location;
} catch (error) {
  /* empty */
}

var run = function (id) {
  if (hasOwnProperty_1(queue, id)) {
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

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$1.postMessage(String$1(id), location.protocol + '//' + location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!set$2 || !clear) {
  set$2 = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);

    queue[++counter] = function () {
      functionApply(fn, undefined, args);
    };

    defer(counter);
    return counter;
  };

  clear = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (engineIsNode) {
    defer = function (id) {
      process.nextTick(runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch$1 && Dispatch$1.now) {
    defer = function (id) {
      Dispatch$1.now(runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624

  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$1.addEventListener && isCallable(global$1.postMessage) && !global$1.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
    defer = post;
    global$1.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    }; // Rest old browsers

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

var clearImmediate = task.clear; // `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate

_export({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$1.clearImmediate !== clearImmediate
}, {
  clearImmediate: clearImmediate
});

var setImmediate = task.set; // `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate

_export({
  global: true,
  bind: true,
  enumerable: true,
  forced: global$1.setImmediate !== setImmediate
}, {
  setImmediate: setImmediate
});

var Object$1 = global$1.Object;
var Date$1 = global$1.Date;
var Error$1 = global$1.Error;
var EvalError = global$1.EvalError;
var RangeError$1 = global$1.RangeError;
var ReferenceError = global$1.ReferenceError;
var SyntaxError = global$1.SyntaxError;
var TypeError$3 = global$1.TypeError;
var URIError = global$1.URIError;
var PerformanceMark = global$1.PerformanceMark;
var WebAssembly = global$1.WebAssembly;
var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
var DOMException = getBuiltIn('DOMException');
var Set$1 = getBuiltIn('Set');
var Map$1 = getBuiltIn('Map');
var MapPrototype = Map$1.prototype;
var mapHas = functionUncurryThis(MapPrototype.has);
var mapGet = functionUncurryThis(MapPrototype.get);
var mapSet = functionUncurryThis(MapPrototype.set);
var setAdd = functionUncurryThis(Set$1.prototype.add);
var objectKeys = getBuiltIn('Object', 'keys');
var push$3 = functionUncurryThis([].push);
var booleanValueOf = functionUncurryThis(true.valueOf);
var numberValueOf = functionUncurryThis(1.0.valueOf);
var stringValueOf = functionUncurryThis(''.valueOf);
var getTime = functionUncurryThis(Date$1.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';

var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var set1 = new global$1.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 == set1 || !set2.has(7) || typeof number != 'object' || number != 7;
  }) && structuredCloneImplementation;
}; // https://github.com/whatwg/html/pull/5749


var checkNewErrorsSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var test = structuredCloneImplementation(new global$1.AggregateError([1], PERFORMANCE_MARK, {
      cause: 3
    }));
    return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;
  }) && structuredCloneImplementation;
}; // FF94+, Safari TP134+, Chrome Canary 98+, NodeJS 17.0+, Deno 1.13+
// current FF and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// no one of current implementations supports new (html/5749) error cloning semantic


var nativeStructuredClone = global$1.structuredClone;
var FORCED_REPLACEMENT = !checkNewErrorsSemantic(nativeStructuredClone); // Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// current Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor, structured cloning implementation
//   from `performance.mark` is too naive and can't clone, for example, `RegExp` or some boxed primitives
//   https://github.com/nodejs/node/issues/40840
// no one of current implementations supports new (html/5749) error cloning semantic

var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, {
    detail: value
  }).detail;
});
var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};

var throwUnpolyfillable = function (type, kind) {
  throw new DOMException((kind || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};

var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject(value)) return value; // effectively preserves circular references

  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map$1();

  var type = classof(value);
  var deep = false;
  var C, name, cloned, dataTransfer, i, length, keys, key, source, target;

  switch (type) {
    case 'Array':
      cloned = [];
      deep = true;
      break;

    case 'Object':
      cloned = {};
      deep = true;
      break;

    case 'Map':
      cloned = new Map$1();
      deep = true;
      break;

    case 'Set':
      cloned = new Set$1();
      deep = true;
      break;

    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, regexpGetFlags(value));
      break;

    case 'Error':
      name = value.name;

      switch (name) {
        case 'AggregateError':
          cloned = getBuiltIn('AggregateError')([]);
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
          cloned = TypeError$3();
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

      deep = true;
      break;

    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      deep = true;
      break;

    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      C = global$1[type]; // in some old engines like Safari 9, typeof C is 'object'
      // on Uint8ClampedArray or some other constructors

      if (!isObject(C)) throwUnpolyfillable(type);
      cloned = new C( // this is safe, since arraybuffer cannot have circular references
      structuredCloneInternal(value.buffer, map), value.byteOffset, type === 'DataView' ? value.byteLength : value.length);
      break;

    case 'DOMQuad':
      try {
        cloned = new DOMQuad(structuredCloneInternal(value.p1, map), structuredCloneInternal(value.p2, map), structuredCloneInternal(value.p3, map), structuredCloneInternal(value.p4, map));
      } catch (error) {
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);
      }

      break;

    case 'FileList':
      C = global$1.DataTransfer;

      if (isConstructor(C)) {
        dataTransfer = new C();

        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }

        cloned = dataTransfer.files;
      } else if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else throwUnpolyfillable(type);

      break;

    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(structuredCloneInternal(value.data, map), value.width, value.height, {
          colorSpace: value.colorSpace
        });
      } catch (error) {
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);
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
          cloned = Object$1(booleanValueOf(value));
          break;

        case 'Number':
          cloned = Object$1(numberValueOf(value));
          break;

        case 'String':
          cloned = Object$1(stringValueOf(value));
          break;

        case 'Date':
          cloned = new Date$1(getTime(value));
          break;

        case 'ArrayBuffer':
          C = global$1.DataView; // `ArrayBuffer#slice` is not available in IE10
          // `ArrayBuffer#slice` and `DataView` are not available in old FF

          if (!C && typeof value.slice != 'function') throwUnpolyfillable(type); // detached buffers throws in `DataView` and `.slice`

          try {
            if (typeof value.slice == 'function') {
              cloned = value.slice(0);
            } else {
              length = value.byteLength;
              cloned = new ArrayBuffer(length);
              source = new C(value);
              target = new C(cloned);

              for (i = 0; i < length; i++) {
                target.setUint8(i, source.getUint8(i));
              }
            }
          } catch (error) {
            throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
          }

          break;

        case 'SharedArrayBuffer':
          // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
          cloned = value;
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

        case 'File':
          try {
            cloned = new File([value], value.name, value);
          } catch (error) {
            throwUnpolyfillable(type);
          }

          break;

        case 'CryptoKey':
        case 'GPUCompilationMessage':
        case 'GPUCompilationInfo':
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
  if (deep) switch (type) {
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

      if (hasOwnProperty_1(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }

      if (name == 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      }

    // break omitted

    case 'DOMException':
      if (errorStackInstallable) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }

  }
  return cloned;
};

var PROPER_TRANSFER = nativeStructuredClone && !fails(function () {
  var buffer = new ArrayBuffer(8);
  var clone = nativeStructuredClone(buffer, {
    transfer: [buffer]
  });
  return buffer.byteLength != 0 || clone.byteLength != 8;
});

var tryToTransfer = function (rawTransfer, map) {
  if (!isObject(rawTransfer)) throw TypeError$3('Transfer option cannot be converted to a sequence');
  var transfer = [];
  iterate(rawTransfer, function (value) {
    push$3(transfer, anObject(value));
  });
  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var value, type, C, transferredArray, transferred, canvas, context;

  if (PROPER_TRANSFER) {
    transferredArray = nativeStructuredClone(transfer, {
      transfer: transfer
    });

    while (i < length) mapSet(map, transfer[i], transferredArray[i++]);
  } else while (i < length) {
    value = transfer[i++];
    if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    type = classof(value);

    switch (type) {
      case 'ImageBitmap':
        C = global$1.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);

        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) {
          /* empty */
        }

        break;

      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);

        try {
          transferred = value.clone();
          value.close();
        } catch (error) {
          /* empty */
        }

        break;

      case 'ArrayBuffer':
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
};

_export({
  global: true,
  enumerable: true,
  sham: !PROPER_TRANSFER,
  forced: FORCED_REPLACEMENT
}, {
  structuredClone: function structuredClone(value
  /* , { transfer } */
  ) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && arguments[1] != null ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map;

    if (transfer !== undefined) {
      map = new Map$1();
      tryToTransfer(transfer, map);
    }

    return structuredCloneInternal(value, map);
  }
});

var charAt$2 = stringMultibyte.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = internalState.set;
var getInternalState = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt$2(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var ITERATOR$1 = wellKnownSymbol('iterator');
var nativeUrl = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return isPure && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
  || result !== 'a1c3' // throws in Safari
  || new URL('http://x', undefined).host !== 'x';
});

var $assign = Object.assign; // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty;
var concat = functionUncurryThis([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es-x/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var Array$1 = global$1.Array; // `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from

var arrayFrom = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod && !(this == Array$1 && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];

    for (; !(step = functionCall(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array$1(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80

var delimiter = '-'; // '\x2D'

var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var RangeError = global$1.RangeError;
var exec$1 = functionUncurryThis(regexSeparators.exec);
var floor$1 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = functionUncurryThis(''.charCodeAt);
var join$2 = functionUncurryThis([].join);
var push$2 = functionUncurryThis([].push);
var replace$2 = functionUncurryThis(''.replace);
var split$2 = functionUncurryThis(''.split);
var toLowerCase$1 = functionUncurryThis(''.toLowerCase);
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */

var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = charCodeAt(string, counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // Low surrogate.
        push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$2(output, value);
        counter--;
      }
    } else {
      push$2(output, value);
    }
  }

  return output;
};
/**
 * Converts a digit/integer into a basic code point.
 */


var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */


var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
  delta += floor$1(delta / numPoints);

  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$1(delta / baseMinusTMin);
    k += base;
  }

  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */


var encode = function (input) {
  var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

  input = ucs2decode(input); // Cache the length.

  var inputLength = input.length; // Initialize the state.

  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue; // Handle the basic code points.

  for (i = 0; i < input.length; i++) {
    currentValue = input[i];

    if (currentValue < 0x80) {
      push$2(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.

  var handledCPCount = basicLength; // number of code points that have been handled;
  // Finish the basic string with a delimiter unless it's empty.

  if (basicLength) {
    push$2(output, delimiter);
  } // Main encoding loop:


  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


    var handledCPCountPlusOne = handledCPCount + 1;

    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;

        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$1(qMinusT / baseMinusT);
          k += base;
        }

        push$2(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }

  return join$2(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;

  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }

  return join$2(encoded, '.');
};

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = internalState.set;
var getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR); // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Avoid NodeJS experimental warning

var safeGetBuiltIn = function (name) {
  if (!descriptors) return global$1[name];
  var descriptor = getOwnPropertyDescriptor(global$1, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$1.RegExp;
var TypeError$2 = global$1.TypeError;
var decodeURIComponent = global$1.decodeURIComponent;
var encodeURIComponent$1 = global$1.encodeURIComponent;
var charAt$1 = functionUncurryThis(''.charAt);
var join$1 = functionUncurryThis([].join);
var push$1 = functionUncurryThis([].push);
var replace$1 = functionUncurryThis(''.replace);
var shift$1 = functionUncurryThis([].shift);
var splice = functionUncurryThis([].splice);
var split$1 = functionUncurryThis(''.split);
var stringSlice$1 = functionUncurryThis(''.slice);
var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$1(it, plus, ' ');
  var bytes = 4;

  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$1(result, percentSequence(bytes--), percentDecode);
    }

    return result;
  }
};

var find$1 = /[!'()~]|%20/g;
var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$1(encodeURIComponent$1(it), find$1, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;

  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  }

  return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;

      while (!(step = functionCall(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if ((first = functionCall(entryNext, entryIterator)).done || (second = functionCall(entryNext, entryIterator)).done || !functionCall(entryNext, entryIterator).done) throw TypeError$2('Expected sequence with length 2');
        push$1(this.entries, {
          key: toString(first.value),
          value: toString(second.value)
        });
      }
    } else for (var key in object) if (hasOwnProperty_1(object, key)) {
      push$1(this.entries, {
        key: key,
        value: toString(object[key])
      });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;

      while (index < attributes.length) {
        attribute = attributes[index++];

        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
    }

    return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
}; // `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams

var URLSearchParamsConstructor = function
  /* init */
URLSearchParams() {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState$1(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, {
      key: toString(name),
      value: toString(value)
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = toString(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);else index++;
    }

    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = toString(name);
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }

    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = toString(name);
    var result = [];
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }

    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = toString(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }

    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = toString(name);
    var val = toString(value);
    var index = 0;
    var entry;

    for (; index < entries.length; index++) {
      entry = entries[index];

      if (entry.key === key) {
        if (found) splice(entries, index--, 1);else {
          found = true;
          entry.value = val;
        }
      }
    }

    if (!found) push$1(entries, {
      key: key,
      value: val
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback
  /* , thisArg */
  ) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = functionBindContext(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, {
  enumerable: true
}); // `URLSearchParams.prototype[@@iterator]` method

redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
  name: 'entries'
}); // `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

redefine(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, {
  enumerable: true
});
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
_export({
  global: true,
  forced: !nativeUrl
}, {
  URLSearchParams: URLSearchParamsConstructor
}); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

if (!nativeUrl && isCallable(Headers)) {
  var headersHas = functionUncurryThis(HeadersPrototype.has);
  var headersSet = functionUncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;

      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();

        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }

        return objectCreate(init, {
          body: createPropertyDescriptor(0, toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    }

    return init;
  };

  if (isCallable(nativeFetch)) {
    _export({
      global: true,
      enumerable: true,
      noTargetGet: true,
      forced: true
    }, {
      fetch: function fetch(input
      /* , init */
      ) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input
    /* , init */
    ) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;
    _export({
      global: true,
      forced: true,
      noTargetGet: true
    }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

var defineProperties = objectDefineProperties.f;
var codeAt = stringMultibyte.codeAt;
var setInternalState = internalState.set;
var getInternalURLState = internalState.getterFor('URL');
var URLSearchParams$1 = web_urlSearchParams_constructor.URLSearchParams;
var getInternalSearchParamsState = web_urlSearchParams_constructor.getState;
var NativeURL = global$1.URL;
var TypeError$1 = global$1.TypeError;
var parseInt$1 = global$1.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = functionUncurryThis(''.charAt);
var exec = functionUncurryThis(/./.exec);
var join = functionUncurryThis([].join);
var numberToString = functionUncurryThis(1.0.toString);
var pop = functionUncurryThis([].pop);
var push = functionUncurryThis([].push);
var replace = functionUncurryThis(''.replace);
var shift = functionUncurryThis([].shift);
var split = functionUncurryThis(''.split);
var stringSlice = functionUncurryThis(''.slice);
var toLowerCase = functionUncurryThis(''.toLowerCase);
var unshift = functionUncurryThis([].unshift);
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[a-z]/i; // eslint-disable-next-line regexp/no-obscure-range -- safe

var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */

var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */

var EOF; // https://url.spec.whatwg.org/#ipv4-number-parser

var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;

  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }

  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];

  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;

    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }

    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt$1(part, radix);
    }

    push(numbers, number);
  }

  for (index = 0; index < partsLength; index++) {
    number = numbers[index];

    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }

  ipv4 = pop(numbers);

  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }

  return ipv4;
}; // https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO


var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }

  while (chr()) {
    if (pieceIndex == 8) return;

    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }

    value = length = 0;

    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt$1(chr(), 16);
      pointer++;
      length++;
    }

    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;

      while (chr()) {
        ipv4Piece = null;

        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;else return;
        }

        if (!exec(DIGIT, chr())) return;

        while (exec(DIGIT, chr())) {
          number = parseInt$1(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }

        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }

      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;

    address[pieceIndex++] = value;
  }

  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;

    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;

  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;

  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }

      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }

  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }

  return maxIndex;
}; // https://url.spec.whatwg.org/#host-serializing


var serializeHost = function (host) {
  var result, index, compress, ignore0; // ipv4

  if (typeof host == 'number') {
    result = [];

    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    }

    return join(result, '.'); // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);

    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;

      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }

    return '[' + result + ']';
  }

  return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = objectAssign({}, C0ControlPercentEncodeSet, {
  ' ': 1,
  '"': 1,
  '<': 1,
  '>': 1,
  '`': 1
});
var pathPercentEncodeSet = objectAssign({}, fragmentPercentEncodeSet, {
  '#': 1,
  '?': 1,
  '{': 1,
  '}': 1
});
var userinfoPercentEncodeSet = objectAssign({}, pathPercentEncodeSet, {
  '/': 1,
  ':': 1,
  ';': 1,
  '=': 1,
  '@': 1,
  '[': 1,
  '\\': 1,
  ']': 1,
  '^': 1,
  '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwnProperty_1(set, chr) ? chr : encodeURIComponent(chr);
}; // https://url.spec.whatwg.org/#special-scheme


var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}; // https://url.spec.whatwg.org/#windows-drive-letter

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
}; // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter


var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
}; // https://url.spec.whatwg.org/#single-dot-path-segment


var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
}; // https://url.spec.whatwg.org/#double-dot-path-segment


var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
}; // States:


var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = toString(url);
  var baseState, failure, searchParams;

  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError$1(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError$1(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;
    input = toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');
    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];

      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;

          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (url.isSpecial() != hasOwnProperty_1(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
            url.scheme = buffer;

            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }

            buffer = '';

            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;

          break;

        case NO_SCHEME:
          if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;

          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySliceSimple(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }

          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          }

          break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;

          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySliceSimple(base.path);
            url.query = base.query;
          } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySliceSimple(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySliceSimple(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySliceSimple(base.path);
            url.path.length--;
            state = PATH;
            continue;
          }

          break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          }

          break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          }

          break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);

            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];

              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }

              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
            }

            buffer = '';
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;

          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
            buffer += chr;
          }

          break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
            if (buffer != '') {
              var port = parseInt$1(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
              buffer = '';
            }

            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;

          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySliceSimple(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySliceSimple(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySliceSimple(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySliceSimple(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySliceSimple(base.path);
                url.shortenPath();
              }

              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          }
          break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }

          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySliceSimple(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
          }

          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            }

            continue;
          } else buffer += chr;

          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          }

          break;

        case PATH:
          if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();

              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }

              push(url.path, buffer);
            }

            buffer = '';

            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }

            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          }

          break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          }

          break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          }

          break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;

    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result; // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);

      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }

      this.host = result;
    } else {
      input = stringPunycodeToAscii(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwnProperty_1(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;

    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';

    if (host !== null) {
      output += '//';

      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }

      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';

    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError$1(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse(toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom(toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';

    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom(toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';

    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = toString(port);
    if (port == '') this.port = null;else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = toString(search);

    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }

    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = toString(hash);

    if (hash == '') {
      this.fragment = null;
      return;
    }

    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
}; // `URL` constructor
// https://url.spec.whatwg.org/#url-class

var URLConstructor = function URL(url
/* , base */
) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));

  if (!descriptors) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (descriptors) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor('serialize', 'setHref'),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor('getOrigin'),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor('getProtocol', 'setProtocol'),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor('getUsername', 'setUsername'),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor('getPassword', 'setPassword'),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor('getHost', 'setHost'),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor('getHostname', 'setHostname'),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor('getPort', 'setPort'),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor('getPathname', 'setPathname'),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor('getSearch', 'setSearch'),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor('getSearchParams'),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor('getHash', 'setHash')
  });
} // `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson


redefine(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, {
  enumerable: true
}); // `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior

redefine(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, {
  enumerable: true
});

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', functionBindContext(nativeCreateObjectURL, NativeURL)); // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL

  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', functionBindContext(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');
_export({
  global: true,
  forced: !nativeUrl,
  sham: !descriptors
}, {
  URL: URLConstructor
});

// https://url.spec.whatwg.org/#dom-url-tojson


_export({
  target: 'URL',
  proto: true,
  enumerable: true
}, {
  toJSON: function toJSON() {
    return functionCall(URL.prototype.toString, this);
  }
});

/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var eventHandler = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory() ;
  })(commonjsGlobal, function () {
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    const getjQuery = () => {
      const {
        jQuery
      } = window;

      if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
        return jQuery;
      }

      return null;
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/event-handler.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
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
    const customEventsRegex = /^(mouseenter|mouseleave)/i;
    const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
    /**
     * ------------------------------------------------------------------------
     * Private methods
     * ------------------------------------------------------------------------
     */

    function getUidEvent(element, uid) {
      return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
    }

    function getEvent(element) {
      const uid = getUidEvent(element);
      element.uidEvent = uid;
      eventRegistry[uid] = eventRegistry[uid] || {};
      return eventRegistry[uid];
    }

    function bootstrapHandler(element, fn) {
      return function handler(event) {
        event.delegateTarget = element;

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
          for (let i = domElements.length; i--;) {
            if (domElements[i] === target) {
              event.delegateTarget = target;

              if (handler.oneOff) {
                EventHandler.off(element, event.type, selector, fn);
              }

              return fn.apply(target, [event]);
            }
          }
        } // To please ESLint


        return null;
      };
    }

    function findHandler(events, handler, delegationSelector = null) {
      const uidEventList = Object.keys(events);

      for (let i = 0, len = uidEventList.length; i < len; i++) {
        const event = events[uidEventList[i]];

        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
          return event;
        }
      }

      return null;
    }

    function normalizeParams(originalTypeEvent, handler, delegationFn) {
      const delegation = typeof handler === 'string';
      const originalHandler = delegation ? delegationFn : handler;
      let typeEvent = getTypeEvent(originalTypeEvent);
      const isNative = nativeEvents.has(typeEvent);

      if (!isNative) {
        typeEvent = originalTypeEvent;
      }

      return [delegation, originalHandler, typeEvent];
    }

    function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      if (!handler) {
        handler = delegationFn;
        delegationFn = null;
      } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
      // this prevents the handler from being dispatched the same way as mouseover or mouseout does


      if (customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = fn => {
          return function (event) {
            if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
              return fn.call(this, event);
            }
          };
        };

        if (delegationFn) {
          delegationFn = wrapFn(delegationFn);
        } else {
          handler = wrapFn(handler);
        }
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const events = getEvent(element);
      const handlers = events[typeEvent] || (events[typeEvent] = {});
      const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

      if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
      }

      const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
      const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
      fn.delegationSelector = delegation ? handler : null;
      fn.originalHandler = originalHandler;
      fn.oneOff = oneOff;
      fn.uidEvent = uid;
      handlers[uid] = fn;
      element.addEventListener(typeEvent, fn, delegation);
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
      Object.keys(storeElementEvent).forEach(handlerKey => {
        if (handlerKey.includes(namespace)) {
          const event = storeElementEvent[handlerKey];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    }

    function getTypeEvent(event) {
      // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
      event = event.replace(stripNameRegex, '');
      return customEvents[event] || event;
    }

    const EventHandler = {
      on(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
      },

      one(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
      },

      off(element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== 'string' || !element) {
          return;
        }

        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getEvent(element);
        const isNamespace = originalTypeEvent.startsWith('.');

        if (typeof originalHandler !== 'undefined') {
          // Simplest case: handler is passed, remove that listener ONLY.
          if (!events || !events[typeEvent]) {
            return;
          }

          removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
          return;
        }

        if (isNamespace) {
          Object.keys(events).forEach(elementEvent => {
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
          });
        }

        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach(keyHandlers => {
          const handlerKey = keyHandlers.replace(stripUidRegex, '');

          if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
            const event = storeElementEvent[keyHandlers];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
          }
        });
      },

      trigger(element, event, args) {
        if (typeof event !== 'string' || !element) {
          return null;
        }

        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = nativeEvents.has(typeEvent);
        let jQueryEvent;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        let evt = null;

        if (inNamespace && $) {
          jQueryEvent = $.Event(event, args);
          $(element).trigger(jQueryEvent);
          bubbles = !jQueryEvent.isPropagationStopped();
          nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
          defaultPrevented = jQueryEvent.isDefaultPrevented();
        }

        if (isNative) {
          evt = document.createEvent('HTMLEvents');
          evt.initEvent(typeEvent, bubbles, true);
        } else {
          evt = new CustomEvent(event, {
            bubbles,
            cancelable: true
          });
        } // merge custom information in our event


        if (typeof args !== 'undefined') {
          Object.keys(args).forEach(key => {
            Object.defineProperty(evt, key, {
              get() {
                return args[key];
              }

            });
          });
        }

        if (defaultPrevented) {
          evt.preventDefault();
        }

        if (nativeDispatch) {
          element.dispatchEvent(evt);
        }

        if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
          jQueryEvent.preventDefault();
        }

        return evt;
      }

    };
    return EventHandler;
  });
});

/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var data = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory() ;
  })(commonjsGlobal, function () {
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/data.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const elementMap = new Map();
    const data = {
      set(element, key, instance) {
        if (!elementMap.has(element)) {
          elementMap.set(element, new Map());
        }

        const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
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
        instanceMap.delete(key); // free up element references if there are no instances left for an element

        if (instanceMap.size === 0) {
          elementMap.delete(element);
        }
      }

    };
    return data;
  });
});

/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var baseComponent = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(data, eventHandler) ;
  })(commonjsGlobal, function (Data, EventHandler) {

    const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : {
      default: e
    };

    const Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);

    const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */


    const MILLISECONDS_MULTIPLIER = 1000;
    const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    const getTransitionDurationFromElement = element => {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      let {
        transitionDuration,
        transitionDelay
      } = window.getComputedStyle(element);
      const floatTransitionDuration = Number.parseFloat(transitionDuration);
      const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    };

    const triggerTransitionEnd = element => {
      element.dispatchEvent(new Event(TRANSITION_END));
    };

    const isElement = obj => {
      if (!obj || typeof obj !== 'object') {
        return false;
      }

      if (typeof obj.jquery !== 'undefined') {
        obj = obj[0];
      }

      return typeof obj.nodeType !== 'undefined';
    };

    const getElement = obj => {
      if (isElement(obj)) {
        // it's a jQuery object or a node element
        return obj.jquery ? obj[0] : obj;
      }

      if (typeof obj === 'string' && obj.length > 0) {
        return document.querySelector(obj);
      }

      return null;
    };

    const execute = callback => {
      if (typeof callback === 'function') {
        callback();
      }
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
     * Bootstrap (v5.1.3): base-component.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    const VERSION = '5.1.3';

    class BaseComponent {
      constructor(element) {
        element = getElement(element);

        if (!element) {
          return;
        }

        this._element = element;
        Data__default.default.set(this._element, this.constructor.DATA_KEY, this);
      }

      dispose() {
        Data__default.default.remove(this._element, this.constructor.DATA_KEY);
        EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(propertyName => {
          this[propertyName] = null;
        });
      }

      _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */


      static getInstance(element) {
        return Data__default.default.get(getElement(element), this.DATA_KEY);
      }

      static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
      }

      static get VERSION() {
        return VERSION;
      }

      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }

      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }

      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }

    }

    return BaseComponent;
  });
});

/*!
  * Bootstrap button.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(eventHandler, baseComponent) ;
  })(commonjsGlobal, function (EventHandler, BaseComponent) {

    const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : {
      default: e
    };

    const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

    const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */


    const getjQuery = () => {
      const {
        jQuery
      } = window;

      if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
        return jQuery;
      }

      return null;
    };

    const DOMContentLoadedCallbacks = [];

    const onDOMContentLoaded = callback => {
      if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) {
          document.addEventListener('DOMContentLoaded', () => {
            DOMContentLoadedCallbacks.forEach(callback => callback());
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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    const NAME = 'button';
    const DATA_KEY = 'bs.button';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const CLASS_NAME_ACTIVE = 'active';
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Button extends BaseComponent__default.default {
      // Getters
      static get NAME() {
        return NAME;
      } // Public


      toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
      } // Static


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
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
      event.preventDefault();
      const button = event.target.closest(SELECTOR_DATA_TOGGLE);
      const data = Button.getOrCreateInstance(button);
      data.toggle();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Button to jQuery only if jQuery is present
     */

    defineJQueryPlugin(Button);
    return Button;
  });
});

/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var manipulator = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory() ;
  })(commonjsGlobal, function () {
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/manipulator.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    function normalizeData(val) {
      if (val === 'true') {
        return true;
      }

      if (val === 'false') {
        return false;
      }

      if (val === Number(val).toString()) {
        return Number(val);
      }

      if (val === '' || val === 'null') {
        return null;
      }

      return val;
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
        Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
          let pureKey = key.replace(/^bs/, '');
          pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
          attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
      },

      getDataAttribute(element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
      },

      offset(element) {
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top + window.pageYOffset,
          left: rect.left + window.pageXOffset
        };
      },

      position(element) {
        return {
          top: element.offsetTop,
          left: element.offsetLeft
        };
      }

    };
    return Manipulator;
  });
});

/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var selectorEngine = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory() ;
  })(commonjsGlobal, function () {
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    const isElement = obj => {
      if (!obj || typeof obj !== 'object') {
        return false;
      }

      if (typeof obj.jquery !== 'undefined') {
        obj = obj[0];
      }

      return typeof obj.nodeType !== 'undefined';
    };

    const isVisible = element => {
      if (!isElement(element) || element.getClientRects().length === 0) {
        return false;
      }

      return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
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
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/selector-engine.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */


    const NODE_TEXT = 3;
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
        let ancestor = element.parentNode;

        while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
          if (ancestor.matches(selector)) {
            parents.push(ancestor);
          }

          ancestor = ancestor.parentNode;
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
        const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
        return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
      }

    };
    return SelectorEngine;
  });
});

/*!
  * Bootstrap carousel.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(eventHandler, manipulator, selectorEngine, baseComponent) ;
  })(commonjsGlobal, function (EventHandler, Manipulator, SelectorEngine, BaseComponent) {

    const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : {
      default: e
    };

    const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

    const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

    const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

    const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */


    const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    const toType = obj => {
      if (obj === null || obj === undefined) {
        return `${obj}`;
      }

      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };

    const getSelector = element => {
      let selector = element.getAttribute('data-bs-target');

      if (!selector || selector === '#') {
        let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273

        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
          return null;
        } // Just in case some CMS puts out a full URL with the anchor appended


        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
          hrefAttr = `#${hrefAttr.split('#')[1]}`;
        }

        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
      }

      return selector;
    };

    const getElementFromSelector = element => {
      const selector = getSelector(element);
      return selector ? document.querySelector(selector) : null;
    };

    const triggerTransitionEnd = element => {
      element.dispatchEvent(new Event(TRANSITION_END));
    };

    const isElement = obj => {
      if (!obj || typeof obj !== 'object') {
        return false;
      }

      if (typeof obj.jquery !== 'undefined') {
        obj = obj[0];
      }

      return typeof obj.nodeType !== 'undefined';
    };

    const typeCheckConfig = (componentName, config, configTypes) => {
      Object.keys(configTypes).forEach(property => {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      });
    };

    const isVisible = element => {
      if (!isElement(element) || element.getClientRects().length === 0) {
        return false;
      }

      return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
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
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight;
    };

    const getjQuery = () => {
      const {
        jQuery
      } = window;

      if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
        return jQuery;
      }

      return null;
    };

    const DOMContentLoadedCallbacks = [];

    const onDOMContentLoaded = callback => {
      if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) {
          document.addEventListener('DOMContentLoaded', () => {
            DOMContentLoadedCallbacks.forEach(callback => callback());
          });
        }

        DOMContentLoadedCallbacks.push(callback);
      } else {
        callback();
      }
    };

    const isRTL = () => document.documentElement.dir === 'rtl';

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
    /**
     * Return the previous/next element of a list.
     *
     * @param {array} list    The list of elements
     * @param activeElement   The active element
     * @param shouldGetNext   Choose to get next or previous element
     * @param isCycleAllowed
     * @return {Element|elem} The proper element
     */


    const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
      let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

      if (index === -1) {
        return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
      }

      const listLength = list.length;
      index += shouldGetNext ? 1 : -1;

      if (isCycleAllowed) {
        index = (index + listLength) % listLength;
      }

      return list[Math.max(0, Math.min(index, listLength - 1))];
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    const NAME = 'carousel';
    const DATA_KEY = 'bs.carousel';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const ARROW_LEFT_KEY = 'ArrowLeft';
    const ARROW_RIGHT_KEY = 'ArrowRight';
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    const SWIPE_THRESHOLD = 40;
    const Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true
    };
    const DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    };
    const ORDER_NEXT = 'next';
    const ORDER_PREV = 'prev';
    const DIRECTION_LEFT = 'left';
    const DIRECTION_RIGHT = 'right';
    const KEY_TO_DIRECTION = {
      [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
      [ARROW_RIGHT_KEY]: DIRECTION_LEFT
    };
    const EVENT_SLIDE = `slide${EVENT_KEY}`;
    const EVENT_SLID = `slid${EVENT_KEY}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
    const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
    const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
    const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
    const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
    const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
    const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
    const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
    const CLASS_NAME_CAROUSEL = 'carousel';
    const CLASS_NAME_ACTIVE = 'active';
    const CLASS_NAME_SLIDE = 'slide';
    const CLASS_NAME_END = 'carousel-item-end';
    const CLASS_NAME_START = 'carousel-item-start';
    const CLASS_NAME_NEXT = 'carousel-item-next';
    const CLASS_NAME_PREV = 'carousel-item-prev';
    const CLASS_NAME_POINTER_EVENT = 'pointer-event';
    const SELECTOR_ACTIVE = '.active';
    const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    const SELECTOR_ITEM = '.carousel-item';
    const SELECTOR_ITEM_IMG = '.carousel-item img';
    const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    const SELECTOR_INDICATORS = '.carousel-indicators';
    const SELECTOR_INDICATOR = '[data-bs-target]';
    const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const POINTER_TYPE_TOUCH = 'touch';
    const POINTER_TYPE_PEN = 'pen';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Carousel extends BaseComponent__default.default {
      constructor(element, config) {
        super(element);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._indicatorsElement = SelectorEngine__default.default.findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);

        this._addEventListeners();
      } // Getters


      static get Default() {
        return Default;
      }

      static get NAME() {
        return NAME;
      } // Public


      next() {
        this._slide(ORDER_NEXT);
      }

      nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }

      prev() {
        this._slide(ORDER_PREV);
      }

      pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (SelectorEngine__default.default.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }

      cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();

          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }

      to(index) {
        this._activeElement = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        const activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          EventHandler__default.default.one(this._element, EVENT_SLID, () => this.to(index));
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

        this._slide(order, this._items[index]);
      } // Private


      _getConfig(config) {
        config = { ...Default,
          ...Manipulator__default.default.getDataAttributes(this._element),
          ...(typeof config === 'object' ? config : {})
        };
        typeCheckConfig(NAME, config, DefaultType);
        return config;
      }

      _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;

        if (!direction) {
          return;
        }

        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }

      _addEventListeners() {
        if (this._config.keyboard) {
          EventHandler__default.default.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
        }

        if (this._config.pause === 'hover') {
          EventHandler__default.default.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
          EventHandler__default.default.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
        }

        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }

      _addTouchEventListeners() {
        const hasPointerPenTouch = event => {
          return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };

        const start = event => {
          if (hasPointerPenTouch(event)) {
            this.touchStartX = event.clientX;
          } else if (!this._pointerEvent) {
            this.touchStartX = event.touches[0].clientX;
          }
        };

        const move = event => {
          // ensure swiping with one touch and not pinching
          this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
        };

        const end = event => {
          if (hasPointerPenTouch(event)) {
            this.touchDeltaX = event.clientX - this.touchStartX;
          }

          this._handleSwipe();

          if (this._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();

            if (this.touchTimeout) {
              clearTimeout(this.touchTimeout);
            }

            this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
          }
        };

        SelectorEngine__default.default.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
          EventHandler__default.default.on(itemImg, EVENT_DRAG_START, event => event.preventDefault());
        });

        if (this._pointerEvent) {
          EventHandler__default.default.on(this._element, EVENT_POINTERDOWN, event => start(event));
          EventHandler__default.default.on(this._element, EVENT_POINTERUP, event => end(event));

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler__default.default.on(this._element, EVENT_TOUCHSTART, event => start(event));
          EventHandler__default.default.on(this._element, EVENT_TOUCHMOVE, event => move(event));
          EventHandler__default.default.on(this._element, EVENT_TOUCHEND, event => end(event));
        }
      }

      _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        const direction = KEY_TO_DIRECTION[event.key];

        if (direction) {
          event.preventDefault();

          this._slide(direction);
        }
      }

      _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine__default.default.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }

      _getItemByOrder(order, activeElement) {
        const isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }

      _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);

        const fromIndex = this._getItemIndex(SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element));

        return EventHandler__default.default.trigger(this._element, EVENT_SLIDE, {
          relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }

      _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          const activeIndicator = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
          activeIndicator.removeAttribute('aria-current');
          const indicators = SelectorEngine__default.default.find(SELECTOR_INDICATOR, this._indicatorsElement);

          for (let i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }

      _updateInterval() {
        const element = this._activeElement || SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        if (!element) {
          return;
        }

        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }

      _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);

        const activeElement = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        const activeElementIndex = this._getItemIndex(activeElement);

        const nextElement = element || this._getItemByOrder(order, activeElement);

        const nextElementIndex = this._getItemIndex(nextElement);

        const isCycling = Boolean(this._interval);
        const isNext = order === ORDER_NEXT;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

        const eventDirectionName = this._orderToDirection(order);

        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE)) {
          this._isSliding = false;
          return;
        }

        if (this._isSliding) {
          return;
        }

        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.defaultPrevented) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        this._activeElement = nextElement;

        const triggerSlidEvent = () => {
          EventHandler__default.default.trigger(this._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };

        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);

          const completeCallBack = () => {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE);
            activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
            this._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };

          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE);
          nextElement.classList.add(CLASS_NAME_ACTIVE);
          this._isSliding = false;
          triggerSlidEvent();
        }

        if (isCycling) {
          this.cycle();
        }
      }

      _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }

        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }

        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }

      _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }

        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static


      static carouselInterface(element, config) {
        const data = Carousel.getOrCreateInstance(element, config);
        let {
          _config
        } = data;

        if (typeof config === 'object') {
          _config = { ..._config,
            ...config
          };
        }

        const action = typeof config === 'string' ? config : _config.slide;

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError(`No method named "${action}"`);
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }

      static jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }

      static dataApiClickHandler(event) {
        const target = getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }

        const config = { ...Manipulator__default.default.getDataAttributes(target),
          ...Manipulator__default.default.getDataAttributes(this)
        };
        const slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel.carouselInterface(target, config);

        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }

        event.preventDefault();
      }

    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
    EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
      const carousels = SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);

      for (let i = 0, len = carousels.length; i < len; i++) {
        Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Carousel to jQuery only if jQuery is present
     */

    defineJQueryPlugin(Carousel);
    return Carousel;
  });
});

/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory(data, eventHandler, manipulator, selectorEngine, baseComponent) ;
  })(commonjsGlobal, function (Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {

    const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : {
      default: e
    };

    const Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);

    const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

    const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

    const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

    const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */


    const toType = obj => {
      if (obj === null || obj === undefined) {
        return `${obj}`;
      }

      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };

    const getSelector = element => {
      let selector = element.getAttribute('data-bs-target');

      if (!selector || selector === '#') {
        let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273

        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
          return null;
        } // Just in case some CMS puts out a full URL with the anchor appended


        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
          hrefAttr = `#${hrefAttr.split('#')[1]}`;
        }

        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
      }

      return selector;
    };

    const getSelectorFromElement = element => {
      const selector = getSelector(element);

      if (selector) {
        return document.querySelector(selector) ? selector : null;
      }

      return null;
    };

    const getElementFromSelector = element => {
      const selector = getSelector(element);
      return selector ? document.querySelector(selector) : null;
    };

    const isElement = obj => {
      if (!obj || typeof obj !== 'object') {
        return false;
      }

      if (typeof obj.jquery !== 'undefined') {
        obj = obj[0];
      }

      return typeof obj.nodeType !== 'undefined';
    };

    const getElement = obj => {
      if (isElement(obj)) {
        // it's a jQuery object or a node element
        return obj.jquery ? obj[0] : obj;
      }

      if (typeof obj === 'string' && obj.length > 0) {
        return document.querySelector(obj);
      }

      return null;
    };

    const typeCheckConfig = (componentName, config, configTypes) => {
      Object.keys(configTypes).forEach(property => {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      });
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
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight;
    };

    const getjQuery = () => {
      const {
        jQuery
      } = window;

      if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
        return jQuery;
      }

      return null;
    };

    const DOMContentLoadedCallbacks = [];

    const onDOMContentLoaded = callback => {
      if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) {
          document.addEventListener('DOMContentLoaded', () => {
            DOMContentLoadedCallbacks.forEach(callback => callback());
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
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    const NAME = 'collapse';
    const DATA_KEY = 'bs.collapse';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const Default = {
      toggle: true,
      parent: null
    };
    const DefaultType = {
      toggle: 'boolean',
      parent: '(null|element)'
    };
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
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Collapse extends BaseComponent__default.default {
      constructor(element, config) {
        super(element);
        this._isTransitioning = false;
        this._config = this._getConfig(config);
        this._triggerArray = [];
        const toggleList = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);

        for (let i = 0, len = toggleList.length; i < len; i++) {
          const elem = toggleList[i];
          const selector = getSelectorFromElement(elem);
          const filterElement = SelectorEngine__default.default.find(selector).filter(foundElem => foundElem === this._element);

          if (selector !== null && filterElement.length) {
            this._selector = selector;

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
      } // Getters


      static get Default() {
        return Default;
      }

      static get NAME() {
        return NAME;
      } // Public


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

        let actives = [];
        let activesData;

        if (this._config.parent) {
          const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
          actives = SelectorEngine__default.default.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
        }

        const container = SelectorEngine__default.default.findOne(this._selector);

        if (actives.length) {
          const tempActiveData = actives.find(elem => container !== elem);
          activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        const startEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);

        if (startEvent.defaultPrevented) {
          return;
        }

        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.getOrCreateInstance(elemActive, {
              toggle: false
            }).hide();
          }

          if (!activesData) {
            Data__default.default.set(elemActive, DATA_KEY, null);
          }
        });

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
          EventHandler__default.default.trigger(this._element, EVENT_SHOWN);
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

        const startEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

        if (startEvent.defaultPrevented) {
          return;
        }

        const dimension = this._getDimension();

        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        const triggerArrayLength = this._triggerArray.length;

        for (let i = 0; i < triggerArrayLength; i++) {
          const trigger = this._triggerArray[i];
          const elem = getElementFromSelector(trigger);

          if (elem && !this._isShown(elem)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }

        this._isTransitioning = true;

        const complete = () => {
          this._isTransitioning = false;

          this._element.classList.remove(CLASS_NAME_COLLAPSING);

          this._element.classList.add(CLASS_NAME_COLLAPSE);

          EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
        };

        this._element.style[dimension] = '';

        this._queueCallback(complete, this._element, true);
      }

      _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW);
      } // Private


      _getConfig(config) {
        config = { ...Default,
          ...Manipulator__default.default.getDataAttributes(this._element),
          ...config
        };
        config.toggle = Boolean(config.toggle); // Coerce string values

        config.parent = getElement(config.parent);
        typeCheckConfig(NAME, config, DefaultType);
        return config;
      }

      _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }

      _initializeChildren() {
        if (!this._config.parent) {
          return;
        }

        const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
          const selected = getElementFromSelector(element);

          if (selected) {
            this._addAriaAndCollapsedClass([element], this._isShown(selected));
          }
        });
      }

      _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }

        triggerArray.forEach(elem => {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static


      static jQueryInterface(config) {
        return this.each(function () {
          const _config = {};

          if (typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

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
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
        event.preventDefault();
      }

      const selector = getSelectorFromElement(this);
      const selectorElements = SelectorEngine__default.default.find(selector);
      selectorElements.forEach(element => {
        Collapse.getOrCreateInstance(element, {
          toggle: false
        }).toggle();
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Collapse to jQuery only if jQuery is present
     */

    defineJQueryPlugin(Collapse);
    return Collapse;
  });
});

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e$2 = Symbol(),
      n$3 = new Map();

class s$3 {
  constructor(t, n) {
    if (this._$cssResult$ = !0, n !== e$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    let e = n$3.get(this.cssText);
    return t$1 && void 0 === e && (n$3.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const o$3 = t => new s$3("string" == typeof t ? t : t + "", e$2),
      r$2 = (t, ...n) => {
  const o = 1 === t.length ? t[0] : n.reduce((e, n, s) => e + (t => {
    if (!0 === t._$cssResult$) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[s + 1], t[0]);
  return new s$3(o, e$2);
},
      i$1 = (e, n) => {
  t$1 ? e.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(t => {
    const n = document.createElement("style"),
          s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
      S$1 = t$1 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const n of t.cssRules) e += n.cssText;

  return o$3(e);
})(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$2;

const e$1 = window.trustedTypes,
      r$1 = e$1 ? e$1.emptyScript : "",
      h$1 = window.reactiveElementPolyfillSupport,
      o$2 = {
  toAttribute(t, i) {
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
      n$2 = (t, i) => i !== t && (i == i || t == t),
      l$3 = {
  attribute: !0,
  type: String,
  converter: o$2,
  reflect: !1,
  hasChanged: n$2
};

class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Eh(s, i);

      void 0 !== e && (this._$Eu.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l$3) {
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
    return this.elementProperties.get(t) || l$3;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
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

      for (const i of e) s.unshift(S$1(i));
    } else void 0 !== i && s.push(S$1(i));

    return s;
  }

  static _$Eh(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  o() {
    var t;
    this._$Ep = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }

  _$Em() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return i$1(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }

  _$ES(t, i, s = l$3) {
    var e, r;

    const h = this.constructor._$Eh(t, s);

    if (void 0 !== h && !0 === s.reflect) {
      const n = (null !== (r = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o$2.toAttribute)(i, s.type);
      this._$Ei = t, null == n ? this.removeAttribute(h) : this.setAttribute(h, n), this._$Ei = null;
    }
  }

  _$AK(t, i) {
    var s, e, r;

    const h = this.constructor,
          n = h._$Eu.get(t);

    if (void 0 !== n && this._$Ei !== n) {
      const t = h.getPropertyOptions(n),
            l = t.converter,
            a = null !== (r = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== r ? r : o$2.fromAttribute;
      this._$Ei = n, this[n] = a(i, t.type), this._$Ei = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$E_());
  }

  async _$E_() {
    this.isUpdatePending = !0;

    try {
      await this._$Ep;
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
    this.hasUpdated, this._$Et && (this._$Et.forEach((t, i) => this[i] = t), this._$Et = void 0);
    let i = !1;
    const s = this._$AL;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Eg) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$EU();
    } catch (t) {
      throw i = !1, this._$EU(), t;
    }

    i && this._$AE(s);
  }

  willUpdate(t) {}

  _$AE(t) {
    var i;
    null === (i = this._$Eg) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ep;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$ES(i, this[i], t)), this._$EC = void 0), this._$EU();
  }

  updated(t) {}

  firstUpdated(t) {}

}

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

const i = globalThis.trustedTypes,
      s$1 = i ? i.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      e = `lit$${(Math.random() + "").slice(9)}$`,
      o$1 = "?" + e,
      n$1 = `<${o$1}>`,
      l$2 = document,
      h = (t = "") => l$2.createComment(t),
      r = t => null === t || "object" != typeof t && "function" != typeof t,
      d = Array.isArray,
      u = t => {
  var i;
  return d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      v = /-->/g,
      a = />/g,
      f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      _$j = /'/g,
      m = /"/g,
      g = /^(?:script|style|textarea|title)$/i,
      p = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      $ = p(1),
      y$1 = p(2),
      b = Symbol.for("lit-noChange"),
      w = Symbol.for("lit-nothing"),
      T = new WeakMap(),
      x$1 = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;

  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new N(i.insertBefore(h(), t), t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
      A = l$2.createTreeWalker(l$2, 129, null, !1),
      C = (t, i) => {
  const o = t.length - 1,
        l = [];
  let h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (let i = 0; i < o; i++) {
    const s = t[i];
    let o,
        u,
        p = -1,
        $ = 0;

    for (; $ < s.length && (d.lastIndex = $, u = d.exec(s), null !== u);) $ = d.lastIndex, d === c ? "!--" === u[1] ? d = v : void 0 !== u[1] ? d = a : void 0 !== u[2] ? (g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = f) : void 0 !== u[3] && (d = f) : d === f ? ">" === u[0] ? (d = null != h ? h : c, p = -1) : void 0 === u[1] ? p = -2 : (p = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? f : '"' === u[3] ? m : _$j) : d === m || d === _$j ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);

    const y = d === f && t[i + 1].startsWith("/>") ? " " : "";
    r += d === c ? s + n$1 : p >= 0 ? (l.push(o), s.slice(0, p) + "$lit$" + s.slice(p) + e + y) : s + e + (-2 === p ? (l.push(void 0), i) : y);
  }

  const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return [void 0 !== s$1 ? s$1.createHTML(u) : u, l];
};

class E {
  constructor({
    strings: t,
    _$litType$: s
  }, n) {
    let l;
    this.parts = [];
    let r = 0,
        d = 0;
    const u = t.length - 1,
          c = this.parts,
          [v, a] = C(t, s);

    if (this.el = E.createElement(v, n), A.currentNode = this.el.content, 2 === s) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (l = A.nextNode()) && c.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          const t = [];

          for (const i of l.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(e)) {
            const s = a[d++];

            if (t.push(i), void 0 !== s) {
              const t = l.getAttribute(s.toLowerCase() + "$lit$").split(e),
                    i = /([.?@])?(.*)/.exec(s);
              c.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? M : "?" === i[1] ? H : "@" === i[1] ? I : S
              });
            } else c.push({
              type: 6,
              index: r
            });
          }

          for (const i of t) l.removeAttribute(i);
        }

        if (g.test(l.tagName)) {
          const t = l.textContent.split(e),
                s = t.length - 1;

          if (s > 0) {
            l.textContent = i ? i.emptyScript : "";

            for (let i = 0; i < s; i++) l.append(t[i], h()), A.nextNode(), c.push({
              type: 2,
              index: ++r
            });

            l.append(t[s], h());
          }
        }
      } else if (8 === l.nodeType) if (l.data === o$1) c.push({
        type: 2,
        index: r
      });else {
        let t = -1;

        for (; -1 !== (t = l.data.indexOf(e, t + 1));) c.push({
          type: 7,
          index: r
        }), t += e.length - 1;
      }

      r++;
    }
  }

  static createElement(t, i) {
    const s = l$2.createElement("template");
    return s.innerHTML = t, s;
  }

}

function P(t, i, s = t, e) {
  var o, n, l, h;
  if (i === b) return i;
  let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  const u = r(i) ? void 0 : i._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = P(t, d._$AS(t, i.values), d, e)), i;
}

class V {
  constructor(t, i) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  get parentNode() {
    return this._$AM.parentNode;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  p(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this._$AD,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : l$2).importNode(s, !0);
    A.currentNode = o;
    let n = A.nextNode(),
        h = 0,
        r = 0,
        d = e[0];

    for (; void 0 !== d;) {
      if (h === d.index) {
        let i;
        2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new L(n, this, t)), this.v.push(i), d = e[++r];
      }

      h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
    }

    return o;
  }

  m(t) {
    let i = 0;

    for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }

}

class N {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
  }

  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(t, i = this) {
    t = P(this, t, i), r(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.k(t) : u(t) ? this.S(t) : this.$(t);
  }

  A(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }

  k(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.A(t));
  }

  $(t) {
    this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t : this.k(l$2.createTextNode(t)), this._$AH = t;
  }

  T(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = E.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
      const t = new V(o, this),
            i = t.p(this.options);
      t.m(s), this.k(i), this._$AH = t;
    }
  }

  _$AC(t) {
    let i = T.get(t.strings);
    return void 0 === i && T.set(t.strings, i = new E(t)), i;
  }

  S(t) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new N(this.A(h()), this.A(h()), this, this.options)) : s = i[e], s._$AI(o), e++;

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
    void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }

}

class S {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
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
    if (void 0 === o) t = P(this, t, i, 0), n = !r(t) || t !== this._$AH && t !== b, n && (this._$AH = t);else {
      const e = t;
      let l, h;

      for (t = o[0], l = 0; l < o.length - 1; l++) h = P(this, e[s + l], i, l), h === b && (h = this._$AH[l]), n || (n = !r(h) || h !== this._$AH[l]), h === w ? t = w : t !== w && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.C(t);
  }

  C(t) {
    t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }

  C(t) {
    this.element[this.name] = t === w ? void 0 : t;
  }

}

const k = i ? i.emptyScript : "";

class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }

  C(t) {
    t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }

}

class I extends S {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }

  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : w) === b) return;
    const e = this._$AH,
          o = t === w && e !== w || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== w && (e === w || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
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
    P(this, t);
  }

}

const z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l$1, o;

class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Dt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }

  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = x$1(i, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return b;
  }

}

s.finalized = !0, s._$litElement$ = !0, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, {
  LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s
});
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.0");

function ascending$2(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(f) {
  let delta = f;
  let compare1 = f;
  let compare2 = f;

  if (f.length !== 2) {
    delta = (d, x) => f(d) - x;

    compare1 = ascending$2;

    compare2 = (d, x) => ascending$2(f(d), x);
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

function number$2(x) {
  return x === null ? NaN : +x;
}

const ascendingBisect = bisector(ascending$2);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
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

function identity$7(x) {
  return x;
}

var array$3 = Array.prototype;
var slice$1 = array$3.slice;

function constant$5(x) {
  return () => x;
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);
function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step),
        r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);

    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step),
        r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);

    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();
  return ticks;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
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
  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
}

function bin() {
  var value = identity$7,
      domain = extent,
      threshold = thresholdSturges;

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1); // Convert number of thresholds into uniform thresholds, and nice the
    // default domain accordingly.

    if (!Array.isArray(tz)) {
      const max = x1,
            tn = +tz;
      if (domain === extent) [x0, x1] = nice(x0, x1, tn);
      tz = ticks(x0, x1, tn); // If the last threshold is coincident with the domain’s upper bound, the
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
    } // Remove any thresholds outside the domain.


    var m = tz.length;

    while (tz[0] <= x0) tz.shift(), --m;

    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin; // Initialize bins.

    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    } // Assign data to bins by value, ignoring any outside the domain.


    for (i = 0; i < n; ++i) {
      x = values[i];

      if (x != null && x0 <= x && x <= x1) {
        bins[bisect(tz, x, 0, m)].push(data[i]);
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
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$5(slice$1.call(_)) : constant$5(_), histogram) : threshold;
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

function identity$6 (x) {
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
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$6 : tickFormat,
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
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;

      return;
    } // If a type was specified, set the callback for the given type and name.
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
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
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
} // Given some data, this returns an array-like view of it: an object that
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
  copy: function (channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function () {
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
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function () {
    return this;
  },
  displayable: function () {
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
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function () {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function () {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
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
var identity$5 = {
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
  return m.isIdentity ? identity$5 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$5;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$5;
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
      value: function () {
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

const pi$2 = Math.PI,
      tau$2 = 2 * pi$2,
      epsilon$2 = 1e-6,
      tauEpsilon = tau$2 - epsilon$2;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath

  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function (x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function () {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function (x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function (x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function (x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$2)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$2) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

      if (Math.abs(t01 - 1) > epsilon$2) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function (x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$2 || Math.abs(this._y1 - y0) > epsilon$2) {
      this._ += "L" + x0 + "," + y0;
    } // Is this arc empty? We’re done.


    if (!r) return; // Does the angle go the wrong way? Flip the direction.

    if (da < 0) da = da % tau$2 + tau$2; // Is this a complete circle? Draw two arcs to complete the circle.

    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$2) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi$2) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function (x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function () {
    return this._;
  }
};

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
function contours () {
  var dx = 1,
      dy = 1,
      threshold = thresholdSturges,
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values); // Convert number of thresholds into uniform thresholds.

    if (!Array.isArray(tz)) {
      const e = extent(values),
            ts = tickStep(e[0], e[1], tz);
      tz = ticks(Math.floor(e[0] / ts) * ts, Math.floor(e[1] / ts - 1) * ts, tz);
    } else {
      tz = tz.slice().sort(ascending);
    }

    return tz.map(value => contour(values, value));
  } // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js


  function contour(values, value) {
    var polygons = [],
        holes = [];
    isorings(values, value, function (ring) {
      smooth(ring, values, value);
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
  } // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js


  function isorings(values, value, callback) {
    var fragmentByStart = new Array(),
        fragmentByEnd = new Array(),
        x,
        y,
        t0,
        t1,
        t2,
        t3; // Special case for the first row (y = -1, t2 = t3 = 0).

    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);

    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }

    cases[t1 << 0].forEach(stitch); // General case for the intermediate rows.

    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);

      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }

      cases[t1 | t2 << 3].forEach(stitch);
    } // Special case for the last row (y = dy - 1, t0 = t1 = 0).


    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);

    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
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
          v0,
          v1 = values[yt * dx + xt];

      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }

      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
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

function formatDecimal (x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
} // Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].

function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity

  var i,
      coefficient = x.slice(0, i); // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
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

function identity$4 (x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$4 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$4 : formatNumerals(map.call(locale.numerals, String)),
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
        type = specifier.type; // The "n" type is an alias for ",g".

    if (type === "n") comma = true, type = "g"; // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g"; // If zero fill is specified, padding goes after sign and before digits.

    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "="; // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.

    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : ""; // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?

    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type); // Set the default precision if not specified,
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
        value = +value; // Determine the sign. -0 is not less than 0, but 1 / -0 is!

        var valueNegative = value < 0 || 1 / value < 0; // Perform the initial formatting.

        value = isNaN(value) ? nan : formatType(Math.abs(value), precision); // Trim insignificant zeros.

        if (trim) value = formatTrim(value); // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.

        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false; // Compute the prefix and suffix.

        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : ""); // Break the formatted value into the integer “value” part that can be
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
      } // If the fill character is not "0", grouping is applied before padding.


      if (comma && !zero) value = group(value, Infinity); // Compute the padding.

      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : ""; // If the fill character is "0", grouping is applied after padding.

      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = ""; // Reconstruct the final output based on the desired alignment.

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

var epsilon$1 = 1e-6;
var pi$1 = Math.PI;
var tau$1 = pi$1 * 2;
var degrees = 180 / pi$1;
var radians = pi$1 / 180;
var abs$1 = Math.abs;
var cos$1 = Math.cos;
var sin$1 = Math.sin;
var sqrt$1 = Math.sqrt;

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
  return abs$1(a[0] - b[0]) < epsilon$1 && abs$1(a[1] - b[1]) < epsilon$1;
}

function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection

  this.e = entry; // is an entry?

  this.v = false; // visited

  this.n = this.p = null; // next & previous
} // A generalized polygon clipping algorithm: given a polygon that has been cut
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
      } // handle degenerate cases by moving the point


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
    clipMin = -clipMax; // TODO Use d3-polygon’s polygonContains here for the ring check?
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
    return abs$1(p[0] - x0) < epsilon$1 ? direction > 0 ? 0 : 3 : abs$1(p[0] - x1) < epsilon$1 ? direction > 0 ? 2 : 1 : abs$1(p[1] - y0) < epsilon$1 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
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
    } // Buffer geometry within a polygon and then clip it en masse.


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
    } // TODO rather than special-case polygons, simply handle them separately.
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

var identity$3 = (x => x);

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
    areaSum.add(abs$1(areaRingSum));
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

var boundsStream$1 = boundsStream;

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

          this._context.arc(x, y, this._radius, 0, tau$1);

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
  lengthSum.add(sqrt$1(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

var pathMeasure = lengthStream;

function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function (_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
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
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function (x, y) {
    switch (this._point) {
      case 0:
        {
          this._string.push("M", x, ",", y);

          this._point = 1;
          break;
        }

      case 1:
        {
          this._string.push("L", x, ",", y);

          break;
        }

      default:
        {
          if (this._circle == null) this._circle = circle(this._radius);

          this._string.push("M", x, ",", y, this._circle);

          break;
        }
    }
  },
  result: function () {
    if (this._string.length) {
      var result = this._string.join("");

      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

function index (projection, context) {
  var pointRadius = 4.5,
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
    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$3) : (projection = _).stream, path) : projection;
  };

  path.context = function (_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function (_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
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

function identity$2 () {
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
      postclip = identity$3,
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
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$3) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function (_) {
    return arguments.length ? (k = +_, reset()) : k;
  };

  projection.translate = function (_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };

  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin$1(alpha), ca = cos$1(alpha), reset()) : alpha * degrees;
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
function identity$1(x) {
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
} // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
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
      i = -1; // Reverse descending domains.

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
      clamp = identity$1,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
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
    return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
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
  return transformer()(identity$1, identity$1);
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

const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
      y10 = y1 - y0,
      x32 = x3 - x2,
      y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
} // Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html


function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00; // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?

  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function arc () {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = abs(a1 - a0),
        cw = a1 > a0;
    if (!context) context = buffer = path(); // Ensure that the outer radius is always larger than the inner radius.

    if (r1 < r0) r = r1, r1 = r0, r0 = r; // Is it a point?

    if (!(r1 > epsilon)) context.moveTo(0, 0); // Or is it a circle or annulus?
    else if (da > tau - epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);

      if (r0 > epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1; // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.

      if (rp > epsilon) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10); // Apply rounded corners?

      if (rc > epsilon) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00),
            oc; // Restrict the corner radius according to the sector angle.

        if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
              lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      } // Is the sector collapsed to a line?


      if (!(da1 > epsilon)) context.moveTo(x01, y01); // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw); // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?

      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10); // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
  };

  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
  };

  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
  };

  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
  };

  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
  };

  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
  };

  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };

  return arc;
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
      output = null;
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

function descending (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function identity (d) {
  return d;
}

function pie () {
  var value = identity,
      sortValues = descending,
      sort = null,
      startAngle = constant(0),
      endAngle = constant(tau),
      padAngle = constant(0);

  function pie(data) {
    var i,
        n = (data = array(data)).length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    } // Optionally sort the arcs by previously-computed values or by data.


    if (sortValues != null) index.sort(function (i, j) {
      return sortValues(arcs[i], arcs[j]);
    });else if (sort != null) index.sort(function (i, j) {
      return sort(data[i], data[j]);
    }); // Compute the arcs! They are stored in the original data's order.

    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
  };

  pie.sortValues = function (_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function (_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
  };

  pie.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
  };

  pie.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
  };

  return pie;
}

let _$i = t => t,
    _t$i,
    _t2$g,
    _t3$2,
    _t4$2,
    _t5$2,
    _t6$1,
    _t7$1,
    _t8$1,
    _t9$1;
/*
  DecidablesElement Base Class - Not intended for instantiation!
  <decidables-element>
*/

class DecidablesElement extends s {
  getComputedStyleValue(property) {
    return getComputedStyle(this).getPropertyValue(property).trim();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Use focus highlighting if keyboard is used at all

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

  static get svgFilters() {
    const shadows = DecidablesElement.shadows;
    /* eslint-disable-line prefer-destructuring */

    const filters = shadows.elevations.map(z => {
      return y$1(_t$i || (_t$i = _$i`
        <filter id=${0} x="-250%" y="-250%" width="600%" height="600%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA  type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${0} dy=${0} />
          <feOffset in="solid" result="offP" dx=${0} dy=${0} />
          <feOffset in="solid" result="offA" dx=${0} dy=${0} />
          ${0}
          ${0}
          ${0}
          <feGaussianBlur in=${0} result="blurU" stdDeviation=${0} />
          <feGaussianBlur in=${0} result="blurP" stdDeviation=${0} />
          <feGaussianBlur in=${0} result="blurA" stdDeviation=${0} />
          <feFlood in="SourceGraphic" result="opU" flood-color=${0} flood-opacity=${0} />
          <feFlood in="SourceGraphic" result="opP" flood-color=${0} flood-opacity=${0} />
          <feFlood in="SourceGraphic" result="opA" flood-color=${0} flood-opacity=${0} />
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
        </filter>`), `shadow-${z}`, shadows.mapUmbra[z].y / 2, shadows.mapUmbra[z].y, shadows.mapPenumbra[z].y / 2, shadows.mapPenumbra[z].y, shadows.mapAmbient[z].y / 2, shadows.mapAmbient[z].y, shadows.mapUmbra[z].s === 0 ? y$1(_t2$g || (_t2$g = _$i``)) : y$1(_t3$2 || (_t3$2 = _$i`<feMorphology in="offU" result="spreadU" operator=${0} radius=${0} />`), shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapUmbra[z].s)), shadows.mapPenumbra[z].s === 0 ? y$1(_t4$2 || (_t4$2 = _$i``)) : y$1(_t5$2 || (_t5$2 = _$i`<feMorphology in="offP" result="spreadP" operator=${0} radius=${0} />`), shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapPenumbra[z].s)), shadows.mapAmbient[z].s === 0 ? y$1(_t6$1 || (_t6$1 = _$i``)) : y$1(_t7$1 || (_t7$1 = _$i`<feMorphology in="offA" result="spreadA" operator=${0} radius=${0} />`), shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapAmbient[z].s)), shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU', shadows.mapUmbra[z].b / 2, shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP', shadows.mapPenumbra[z].b / 2, shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA', shadows.mapAmbient[z].b / 2, shadows.baselineColor, shadows.opacityUmbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityPenumbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityAmbient + shadows.opacityBoost);
    });
    return y$1(_t8$1 || (_t8$1 = _$i`
      <svg class="defs">
        <defs>
          ${0}
        </defs>
      </svg>
    `), filters);
  }

  static get styles() {
    return r$2(_t9$1 || (_t9$1 = _$i`
      :host {
        ---shadow-0: var(--shadow-0, ${0});
        ---shadow-2: var(--shadow-2, ${0});
        ---shadow-4: var(--shadow-4, ${0});
        ---shadow-8: var(--shadow-8, ${0});

        ---color-background: var(--color-background, ${0});
        ---color-border: var(--color-border, ${0});
        ---color-text: var(--color-text, ${0});
        ---color-text-inverse: var(--color-text-inverse, ${0});
        ---color-link: var(--color-link, ${0});
        ---color-element-background: var(--color-element-background, ${0});
        ---color-element-disabled: var(--color-element-disabled, ${0});
        ---color-element-enabled: var(--color-element-enabled, ${0});
        ---color-element-selected: var(--color-element-selected, ${0});
        ---color-element-border: var(--color-element-border, ${0});
        ---color-element-emphasis: var(--color-element-emphasis, ${0});

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
    `), o$3(this.cssBoxShadow(0)), o$3(this.cssBoxShadow(2)), o$3(this.cssBoxShadow(4)), o$3(this.cssBoxShadow(8)), o$3(this.greys.white), o$3(this.greys.light75), o$3(this.greys.dark75), o$3(this.greys.white), o$3(this.greys.dark25), o$3(this.greys.light75), o$3(this.greys.light50), o$3(this.greys.dark25), o$3(this.greys.grey), o$3(this.greys.dark50), o$3(this.greys.dark75));
  }

}

let _$h = t => t,
    _t$h,
    _t2$f;
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
    super(); // Attributes

    this.disabled = false;
  }

  static get styles() {
    return [super.styles, r$2(_t$h || (_t$h = _$h`
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
      `))];
  }

  render() {
    return $(_t2$f || (_t2$f = _$h`
      <button ?disabled=${0}>
        <slot></slot>
      </button>
    `), this.disabled);
  }

}
customElements.define('decidables-button', DecidablesButton);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const l = l => null != l ? l : w;

let _$g = t => t,
    _t$g,
    _t2$e;
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
    super(); // Attributes

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
    return [super.styles, r$2(_t$g || (_t$g = _$g`
        :host {
          ---shadow-2-rotate: var(--shadow-2-rotate, ${0});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${0});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${0});

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
      `), o$3(this.cssBoxShadow(2, true, false)), o$3(this.cssBoxShadow(4, true, false)), o$3(this.cssBoxShadow(8, true, false)))];
  }

  render() {
    return $(_t2$e || (_t2$e = _$g`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input type="range" id="slider" min=${0} max=${0} step=${0} .value=${0} @change=${0} @input=${0}>
      </div>
      <decidables-spinner min=${0} max=${0} step=${0} .value=${0} @input=${0}></decidables-spinner>
    `), l(this.min), l(this.max), l(this.step), this.value, this.changed.bind(this), this.inputted.bind(this), l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
  }

}
customElements.define('decidables-slider', DecidablesSlider);

let _$f = t => t,
    _t$f,
    _t2$d;
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
    super(); // Attributes

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
    return [super.styles, r$2(_t$f || (_t$f = _$f`
        :host {
          ---decidables-spinner-font-size: var(--decidables-spinner-font-size, 1.125rem);
          ---decidables-spinner-input-width: var(--decidables-spinner-input-width, 4rem);
          ---decidables-spinner-prefix: var(--decidables-spinner-prefix, "");

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

        input[type=number] {
          width: var(---decidables-spinner-input-width);

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
      `))];
  }

  render() {
    return $(_t2$d || (_t2$d = _$f`
      <label>
        <slot></slot>
        <input ?disabled=${0} type="number" min=${0} max=${0} step=${0} .value=${0} @input=${0}>
      </label>
    `), this.disabled, l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
  }

}
customElements.define('decidables-spinner', DecidablesSpinner);

let _$e = t => t,
    _t$e,
    _t2$c;
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
    super(); // Attributes

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
    return [super.styles, r$2(_t$e || (_t$e = _$e`
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
      `))];
  }

  render() {
    return $(_t2$c || (_t2$c = _$e`
      <input type="checkbox" id="switch" ?checked=${0} ?disabled=${0} @change=${0}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `), this.checked, this.disabled, this.changed.bind(this));
  }

}
customElements.define('decidables-switch', DecidablesSwitch);

let _$d = t => t,
    _t$d,
    _t2$b;
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
    super(); // Attributes

    this.disabled = false;
  }

  static get styles() {
    return [super.styles, r$2(_t$d || (_t$d = _$d`
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
      `))];
  }

  render() {
    return $(_t2$b || (_t2$b = _$d`
      <fieldset ?disabled=${0}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `), this.disabled);
  }

}
customElements.define('decidables-toggle', DecidablesToggle);

let _$c = t => t,
    _t$c,
    _t2$a;
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
    super(); // Attributes

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
    return [super.styles, r$2(_t$c || (_t$c = _$c`
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
      `))];
  }

  render() {
    return $(_t2$a || (_t2$a = _$c`
      <input type="radio" id="toggle-option" name=${0} value=${0} .checked=${0} @change=${0}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `), this.name, this.value, this.checked, this.changed.bind(this));
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

let _$b = t => t,
    _t$b;
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
    return [super.styles, r$2(_t$b || (_t$b = _$b`
        :host {
          ---color-h: var(--color-h, ${0});
          ---color-m: var(--color-m, ${0});
          ---color-fa: var(--color-fa, ${0});
          ---color-cr: var(--color-cr, ${0});
          ---color-hr: var(--color-hr, ${0});
          ---color-far: var(--color-far, ${0});
          ---color-acc: var(--color-acc, ${0});
          ---color-d: var(--color-d, ${0});
          ---color-c: var(--color-c, ${0});
          ---color-s: var(--color-s, ${0});
          ---color-present: var(--color-present, ${0});
          ---color-absent: var(--color-absent, ${0});
          ---color-correct: var(--color-correct, ${0});
          ---color-error: var(--color-error, ${0});
          ---color-nr: var(--color-nr, ${0});

          ---color-h-light: var(--color-h-light, ${0});
          ---color-m-light: var(--color-m-light, ${0});
          ---color-fa-light: var(--color-fa-light, ${0});
          ---color-cr-light: var(--color-cr-light, ${0});
          ---color-hr-light: var(--color-hr-light, ${0});
          ---color-far-light: var(--color-far-light, ${0});
          ---color-acc-light: var(--color-acc-light, ${0});
          ---color-d-light: var(--color-d-light, ${0});
          ---color-c-light: var(--color-c-light, ${0});
          ---color-s-light: var(--color-s-light, ${0});
          ---color-present-light: var(--color-present-light, ${0});
          ---color-absent-light: var(--color-absent-light, ${0});
          ---color-correct-light: var(--color-correct-light, ${0});
          ---color-error-light: var(--color-error-light, ${0});
          ---color-nr-light: var(--color-nr-light, ${0});

          ---color-h-dark: var(--color-h-dark, ${0});
          ---color-m-dark: var(--color-m-dark, ${0});
          ---color-fa-dark: var(--color-fa-dark, ${0});
          ---color-cr-dark: var(--color-cr-dark, ${0});
          ---color-hr-dark: var(--color-hr-dark, ${0});
          ---color-far-dark: var(--color-far-dark, ${0});
          ---color-acc-dark: var(--color-acc-dark, ${0});
          ---color-d-dark: var(--color-d-dark, ${0});
          ---color-c-dark: var(--color-c-dark, ${0});
          ---color-s-dark: var(--color-s-dark, ${0});
          ---color-present-dark: var(--color-present-dark, ${0});
          ---color-absent-dark: var(--color-absent-dark, ${0});
          ---color-correct-dark: var(--color-correct-dark, ${0});
          ---color-error-dark: var(--color-error-dark, ${0});
          ---color-nr-dark: var(--color-nr-dark, ${0});
        }
      `), o$3(this.colors.h), o$3(this.colors.m), o$3(this.colors.fa), o$3(this.colors.cr), o$3(this.colors.hr), o$3(this.colors.far), o$3(this.colors.acc), o$3(this.colors.d), o$3(this.colors.c), o$3(this.colors.s), o$3(this.colors.present), o$3(this.colors.absent), o$3(this.colors.correct), o$3(this.colors.error), o$3(this.colors.nr), o$3(this.lights.h), o$3(this.lights.m), o$3(this.lights.fa), o$3(this.lights.cr), o$3(this.lights.hr), o$3(this.lights.far), o$3(this.lights.acc), o$3(this.lights.d), o$3(this.lights.c), o$3(this.lights.s), o$3(this.lights.present), o$3(this.lights.absent), o$3(this.lights.correct), o$3(this.lights.error), o$3(this.lights.nr), o$3(this.darks.h), o$3(this.darks.m), o$3(this.darks.fa), o$3(this.darks.cr), o$3(this.darks.hr), o$3(this.darks.far), o$3(this.darks.acc), o$3(this.darks.d), o$3(this.darks.c), o$3(this.darks.s), o$3(this.darks.present), o$3(this.darks.absent), o$3(this.darks.correct), o$3(this.darks.error), o$3(this.darks.nr))];
  }

}

let _$a = t => t,
    _t$a,
    _t2$9;
/*
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/

class RDKTask extends DetectableElement {
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
      },
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
    super(); // Attributes

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

    this.width = NaN; // Width of component in pixels

    this.height = NaN; // Height of component in pixels

    this.rem = NaN; // Pixels per rem for component
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
    return [super.styles, r$2(_t$a || (_t$a = _$a`
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
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$9 || (_t2$9 = _$a``));
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`rdk-task: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties); // Bail out if we can't get the width/height/rem

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
    const width = elementSize - (margin.left + margin.right); // X Scale

    this.xScale = linear().domain([-1, 1]).range([0, width]); // Y Scale

    this.yScale = linear().domain([1, -1]).range([0, height]); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); //  ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`); // Clippath
    //  ENTER

    svgEnter.append('clipPath').attr('id', 'clip-rdk-task').append('circle'); //  MERGE

    svgMerge.select('clipPath circle').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Plot
    //  ENTER

    const plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`); // Underlayer
    //  ENTER

    const underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

    const underlayerMerge = plotMerge.select('.underlayer'); // Background
    //  ENTER

    underlayerEnter.append('circle').classed('background', true); //  MERGE

    underlayerMerge.select('.background').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Content
    //  ENTER

    plotEnter.append('g').classed('content', true).attr('clip-path', 'url(#clip-rdk-task)'); //  MERGE

    const contentMerge = plotMerge.select('.content'); // Dot Groups
    //  DATA-JOIN

    const dotsUpdate = contentMerge.selectAll('.dots').data([[], []]); //  ENTER

    dotsUpdate.enter().append('g').classed('dots', true).classed('coherent', (datum, index) => {
      return index === this.COHERENT;
    }).classed('random', (datum, index) => {
      return index === this.RANDOM;
    }); // Overlayer
    //  ENTER

    const overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

    const overlayerMerge = plotMerge.select('.overlayer'); // Outline
    //  ENTER

    overlayerEnter.append('circle').classed('outline', true); //  MERGE

    overlayerMerge.select('.outline').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.yScale(0)); // Start or stop trial block

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

  run() {
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
    } // Dots


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
            dot.dy = this.speed * (frameTime / 1000) * Math.sin(directionR); // Update position

            dot.x += dot.dx;
            dot.y += dot.dy; // Calculate squared distance from center

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
    } // Fixation
    //  DATA-JOIN


    const fixationUpdate = select(this.renderRoot).select('.content').selectAll('.fixation').data(this.state === 'iti' ? [true] : []); //  ENTER

    const fixationEnter = fixationUpdate.enter().append('g').classed('fixation', true);
    fixationEnter.append('line').attr('x1', this.xScale(-0.1)).attr('y1', this.xScale(0)).attr('x2', this.xScale(0.1)).attr('y2', this.xScale(0));
    fixationEnter.append('line').attr('x1', this.xScale(0)).attr('y1', this.xScale(-0.1)).attr('x2', this.xScale(0)).attr('y2', this.xScale(0.1)); //  EXIT

    fixationUpdate.exit().remove(); // Dots
    //  DATA-JOIN

    const dotsUpdate = select(this.renderRoot).select('.content').selectAll('.dots').data(this.state === 'stimulus' ? this.dots : [[], []]);
    const dotUpdate = dotsUpdate.selectAll('.dot').data(datum => {
      return datum;
    }); //  ENTER

    const dotEnter = dotUpdate.enter().append('circle').classed('dot', true); //  MERGE

    dotEnter.merge(dotUpdate).attr('cx', datum => {
      return datum.x;
    }).attr('cy', datum => {
      return datum.y;
    }); //  EXIT

    dotUpdate.exit().remove(); // Query
    //  DATA-JOIN

    const queryUpdate = select(this.renderRoot).select('.content').selectAll('.query').data(this.state === 'wait' ? [true] : []); //  ENTER

    const queryEnter = queryUpdate.enter().append('g').classed('query', true);
    queryEnter.append('text').attr('x', this.xScale(0)).attr('y', this.xScale(0)).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text('?'); //  EXIT

    queryUpdate.exit().remove();
  }

}
customElements.define('rdk-task', RDKTask);

var jstat = createCommonjsModule(function (module, exports) {
  (function (window, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function () {
    var jStat = function (Math, undefined$1) {
      // For quick reference.
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var toString = Object.prototype.toString; // Calculate correction for IEEE error
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
      } // Converts the jStat matrix to vector.


      function toVector(arr) {
        return concat.apply([], arr);
      } // The one and only jStat constructor.


      function jStat() {
        return new jStat._init(arguments);
      } // TODO: Remove after all references in src files have been removed.


      jStat.fn = jStat.prototype; // By separating the initializer from the constructor it's easier to handle
      // always returning a new instance whether "new" was used or not.

      jStat._init = function _init(args) {
        // If first argument is an array, must be vector or matrix.
        if (isArray(args[0])) {
          // Check if matrix.
          if (isArray(args[0][0])) {
            // See if a mapping function was also passed.
            if (isFunction(args[1])) args[0] = jStat.map(args[0], args[1]); // Iterate over each is faster than this.push.apply(this, args[0].

            for (var i = 0; i < args[0].length; i++) this[i] = args[0][i];

            this.length = args[0].length; // Otherwise must be a vector.
          } else {
            this[0] = isFunction(args[1]) ? jStat.map(args[0], args[1]) : args[0];
            this.length = 1;
          } // If first argument is number, assume creation of sequence.

        } else if (isNumber(args[0])) {
          this[0] = jStat.seq.apply(null, args);
          this.length = 1; // Handle case when jStat object is passed to jStat.
        } else if (args[0] instanceof jStat) {
          // Duplicate the object and pass it back.
          return jStat(args[0].toArray()); // Unexpected argument value, return empty jStat object.
          // TODO: This is strange behavior. Shouldn't this throw or some such to let
          // the user know they had bad arguments?
        } else {
          this[0] = [];
          this.length = 1;
        }

        return this;
      };

      jStat._init.prototype = jStat.prototype;
      jStat._init.constructor = jStat; // Utility functions.
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
      }; // Easily extend the jStat object.
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
      }; // Returns the number of rows in the matrix.


      jStat.rows = function rows(arr) {
        return arr.length || 1;
      }; // Returns the number of columns in the matrix.


      jStat.cols = function cols(arr) {
        return arr[0].length || 1;
      }; // Returns the dimensions of the object { rows: i, cols: j }


      jStat.dimensions = function dimensions(arr) {
        return {
          rows: jStat.rows(arr),
          cols: jStat.cols(arr)
        };
      }; // Returns a specified row as a vector or return a sub matrix by pick some rows


      jStat.row = function row(arr, index) {
        if (isArray(index)) {
          return index.map(function (i) {
            return jStat.row(arr, i);
          });
        }

        return arr[index];
      }; // return row as array
      // rowa([[1,2],[3,4]],0) -> [1,2]


      jStat.rowa = function rowa(arr, i) {
        return jStat.row(arr, i);
      }; // Returns the specified column as a vector or return a sub matrix by pick some
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
      }; // return column as array
      // cola([[1,2],[3,4]],0) -> [1,3]


      jStat.cola = function cola(arr, i) {
        return jStat.col(arr, i).map(function (a) {
          return a[0];
        });
      }; // Returns the diagonal of the matrix


      jStat.diag = function diag(arr) {
        var nrow = jStat.rows(arr);
        var res = new Array(nrow);

        for (var row = 0; row < nrow; row++) res[row] = [arr[row][row]];

        return res;
      }; // Returns the anti-diagonal of the matrix


      jStat.antidiag = function antidiag(arr) {
        var nrow = jStat.rows(arr) - 1;
        var res = new Array(nrow);

        for (var i = 0; nrow >= 0; nrow--, i++) res[i] = [arr[i][nrow]];

        return res;
      }; // Transpose a matrix or array.


      jStat.transpose = function transpose(arr) {
        var obj = [];
        var objArr, rows, cols, j, i; // Make sure arr is in matrix format.

        if (!isArray(arr[0])) arr = [arr];
        rows = arr.length;
        cols = arr[0].length;

        for (i = 0; i < cols; i++) {
          objArr = new Array(rows);

          for (j = 0; j < rows; j++) objArr[j] = arr[j][i];

          obj.push(objArr);
        } // If obj is vector, return only single array.


        return obj.length === 1 ? obj[0] : obj;
      }; // Map a function to an array or array of arrays.
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
      }; // Cumulatively combine the elements of an array or array of arrays using a function.


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
      }; // Destructively alter an array.


      jStat.alter = function alter(arr, func) {
        return jStat.map(arr, func, true);
      }; // Generate a rows x cols matrix according to the supplied function.


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
      } // Generate a rows x cols matrix of zeros.


      jStat.zeros = function zeros(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retZero);
      };

      function retOne() {
        return 1;
      } // Generate a rows x cols matrix of ones.


      jStat.ones = function ones(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retOne);
      }; // Generate a rows x cols matrix of uniformly random numbers.


      jStat.rand = function rand(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, jStat._random_fn);
      };

      function retIdent(i, j) {
        return i === j ? 1 : 0;
      } // Generate an identity matrix of size row x cols.


      jStat.identity = function identity(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retIdent);
      }; // Tests whether a matrix is symmetric


      jStat.symmetric = function symmetric(arr) {
        var size = arr.length;
        var row, col;
        if (arr.length !== arr[0].length) return false;

        for (row = 0; row < size; row++) {
          for (col = 0; col < size; col++) if (arr[col][row] !== arr[row][col]) return false;
        }

        return true;
      }; // Set all values to zero.


      jStat.clear = function clear(arr) {
        return jStat.alter(arr, retZero);
      }; // Generate sequence.


      jStat.seq = function seq(min, max, length, func) {
        if (!isFunction(func)) func = false;
        var arr = [];
        var hival = calcRdx(min, max);
        var step = (max * hival - min * hival) / ((length - 1) * hival);
        var current = min;
        var cnt; // Current is assigned using a technique to compensate for IEEE error.
        // TODO: Needs better implementation.

        for (cnt = 0; current <= max && cnt < length; cnt++, current = (min * hival + step * hival * cnt) / hival) {
          arr.push(func ? func(current, cnt) : current);
        }

        return arr;
      }; // arange(5) -> [0,1,2,3,4]
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
      }; // A=[[1,2,3],[4,5,6],[7,8,9]]
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
      }(); // A=[[1,2,3],[4,5,6],[7,8,9]]
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
      }; // [1,2,3] ->
      // [[1,0,0],[0,2,0],[0,0,3]]


      jStat.diagonal = function diagonal(diagArray) {
        var mat = jStat.zeros(diagArray.length, diagArray.length);
        diagArray.forEach(function (t, i) {
          mat[i][i] = t;
        });
        return mat;
      }; // return copy of A


      jStat.copy = function copy(A) {
        return A.map(function (row) {
          if (isNumber(row)) return row;
          return row.map(function (t) {
            return t;
          });
        });
      }; // TODO: Go over this entire implementation. Seems a tragic waste of resources
      // doing all this work. Instead, and while ugly, use new Function() to generate
      // a custom function for each static method.
      // Quick reference.


      var jProto = jStat.prototype; // Default length.

      jProto.length = 0; // For internal use only.
      // TODO: Check if they're actually used, and if they are then rename them
      // to _*

      jProto.push = Array.prototype.push;
      jProto.sort = Array.prototype.sort;
      jProto.splice = Array.prototype.splice;
      jProto.slice = Array.prototype.slice; // Return a clean array.

      jProto.toArray = function toArray() {
        return this.length > 1 ? slice.call(this) : slice.call(this)[0];
      }; // Map a function to a matrix or vector.


      jProto.map = function map(func, toAlter) {
        return jStat(jStat.map(this, func, toAlter));
      }; // Cumulatively combine the elements of a matrix or vector using a function.


      jProto.cumreduce = function cumreduce(func, toAlter) {
        return jStat(jStat.cumreduce(this, func, toAlter));
      }; // Destructively alter an array.


      jProto.alter = function alter(func) {
        jStat.alter(this, func);
        return this;
      }; // Extend prototype with methods that have no argument.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function (func) {
            var self = this,
                results; // Check for callback.

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
      })('transpose clear symmetric rows cols dimensions diag antidiag'.split(' ')); // Extend prototype with methods that have one argument.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function (index, func) {
            var self = this; // check for callback

            if (func) {
              setTimeout(function () {
                func.call(self, jProto[passfunc].call(self, index));
              });
              return this;
            }

            return jStat(jStat[passfunc](this, index));
          };
        })(funcs[i]);
      })('row col'.split(' ')); // Extend prototype with simple shortcut methods.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function () {
            return jStat(jStat[passfunc].apply(null, arguments));
          };
        })(funcs[i]);
      })('create zeros ones rand identity'.split(' ')); // Exposing jStat.


      return jStat;
    }(Math);

    (function (jStat, Math) {
      var isFunction = jStat.utils.isFunction; // Ascending functions for sort

      function ascNum(a, b) {
        return a - b;
      }

      function clip(arg, min, max) {
        return Math.max(min, Math.min(arg, max));
      } // sum of an array


      jStat.sum = function sum(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) sum += arr[i];

        return sum;
      }; // sum squared


      jStat.sumsqrd = function sumsqrd(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) sum += arr[i] * arr[i];

        return sum;
      }; // sum of squared errors of prediction (SSE)


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
      }; // sum of an array in each row


      jStat.sumrow = function sumrow(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) sum += arr[i];

        return sum;
      }; // product of an array


      jStat.product = function product(arr) {
        var prod = 1;
        var i = arr.length;

        while (--i >= 0) prod *= arr[i];

        return prod;
      }; // minimum value of an array


      jStat.min = function min(arr) {
        var low = arr[0];
        var i = 0;

        while (++i < arr.length) if (arr[i] < low) low = arr[i];

        return low;
      }; // maximum value of an array


      jStat.max = function max(arr) {
        var high = arr[0];
        var i = 0;

        while (++i < arr.length) if (arr[i] > high) high = arr[i];

        return high;
      }; // unique values of an array


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
      }; // mean value of an array


      jStat.mean = function mean(arr) {
        return jStat.sum(arr) / arr.length;
      }; // mean squared error (MSE)


      jStat.meansqerr = function meansqerr(arr) {
        return jStat.sumsqerr(arr) / arr.length;
      }; // geometric mean of an array


      jStat.geomean = function geomean(arr) {
        return Math.pow(jStat.product(arr), 1 / arr.length);
      }; // median of an array


      jStat.median = function median(arr) {
        var arrlen = arr.length;

        var _arr = arr.slice().sort(ascNum); // check if array is even or odd, then return the appropriate


        return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
      }; // cumulative sum of an array


      jStat.cumsum = function cumsum(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a + b;
        });
      }; // cumulative product of an array


      jStat.cumprod = function cumprod(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a * b;
        });
      }; // successive differences of a sequence


      jStat.diff = function diff(arr) {
        var diffs = [];
        var arrLen = arr.length;
        var i;

        for (i = 1; i < arrLen; i++) diffs.push(arr[i] - arr[i - 1]);

        return diffs;
      }; // ranks of an array


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
      }; // mode of an array
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
            } // are there multiple max counts
            else if (count === maxCount) {
              mode_arr.push(_arr[i]);
              numMaxCount++;
            } // resetting count for new value in array


            count = 1;
          }
        }

        return numMaxCount === 0 ? mode_arr[0] : mode_arr;
      }; // range of an array


      jStat.range = function range(arr) {
        return jStat.max(arr) - jStat.min(arr);
      }; // variance of an array
      // flag = true indicates sample instead of population


      jStat.variance = function variance(arr, flag) {
        return jStat.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
      }; // pooled variance of an array of arrays


      jStat.pooledvariance = function pooledvariance(arr) {
        var sumsqerr = arr.reduce(function (a, samples) {
          return a + jStat.sumsqerr(samples);
        }, 0);
        var count = arr.reduce(function (a, samples) {
          return a + samples.length;
        }, 0);
        return sumsqerr / (count - arr.length);
      }; // deviation of an array


      jStat.deviation = function (arr) {
        var mean = jStat.mean(arr);
        var arrlen = arr.length;
        var dev = new Array(arrlen);

        for (var i = 0; i < arrlen; i++) {
          dev[i] = arr[i] - mean;
        }

        return dev;
      }; // standard deviation of an array
      // flag = true indicates sample instead of population


      jStat.stdev = function stdev(arr, flag) {
        return Math.sqrt(jStat.variance(arr, flag));
      }; // pooled standard deviation of an array of arrays


      jStat.pooledstdev = function pooledstdev(arr) {
        return Math.sqrt(jStat.pooledvariance(arr));
      }; // mean deviation (mean absolute deviation) of an array


      jStat.meandev = function meandev(arr) {
        var mean = jStat.mean(arr);
        var a = [];

        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - mean));
        }

        return jStat.mean(a);
      }; // median deviation (median absolute deviation) of an array


      jStat.meddev = function meddev(arr) {
        var median = jStat.median(arr);
        var a = [];

        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - median));
        }

        return jStat.median(a);
      }; // coefficient of variation


      jStat.coeffvar = function coeffvar(arr) {
        return jStat.stdev(arr) / jStat.mean(arr);
      }; // quartiles of an array


      jStat.quartiles = function quartiles(arr) {
        var arrlen = arr.length;

        var _arr = arr.slice().sort(ascNum);

        return [_arr[Math.round(arrlen / 4) - 1], _arr[Math.round(arrlen / 2) - 1], _arr[Math.round(arrlen * 3 / 4) - 1]];
      }; // Arbitary quantiles of an array. Direct port of the scipy.stats
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
      }; // Return the k-th percentile of values in a range, where k is in the range 0..1, inclusive.
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
      }; // The percentile rank of score in a given array. Returns the percentage
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
      }; // Histogram (bin count) data


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
      }; // covariance of two arrays


      jStat.covariance = function covariance(arr1, arr2) {
        var u = jStat.mean(arr1);
        var v = jStat.mean(arr2);
        var arr1Len = arr1.length;
        var sq_dev = new Array(arr1Len);
        var i;

        for (i = 0; i < arr1Len; i++) sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);

        return jStat.sum(sq_dev) / (arr1Len - 1);
      }; // (pearson's) population correlation coefficient, rho


      jStat.corrcoeff = function corrcoeff(arr1, arr2) {
        return jStat.covariance(arr1, arr2) / jStat.stdev(arr1, 1) / jStat.stdev(arr2, 1);
      }; // (spearman's) rank correlation coefficient, sp


      jStat.spearmancoeff = function (arr1, arr2) {
        arr1 = jStat.rank(arr1);
        arr2 = jStat.rank(arr2); //return pearson's correlation of the ranks:

        return jStat.corrcoeff(arr1, arr2);
      }; // statistical standardized moments (general form of skew/kurt)


      jStat.stanMoment = function stanMoment(arr, n) {
        var mu = jStat.mean(arr);
        var sigma = jStat.stdev(arr);
        var len = arr.length;
        var skewSum = 0;

        for (var i = 0; i < len; i++) skewSum += Math.pow((arr[i] - mu) / sigma, n);

        return skewSum / arr.length;
      }; // (pearson's) moment coefficient of skewness


      jStat.skewness = function skewness(arr) {
        return jStat.stanMoment(arr, 3);
      }; // (pearson's) (excess) kurtosis


      jStat.kurtosis = function kurtosis(arr) {
        return jStat.stanMoment(arr, 4) - 3;
      };

      var jProto = jStat.prototype; // Extend jProto with method for calculating cumulative sums and products.
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
            var tmpthis = this; // Assignment reassignation depending on how parameters were passed in.

            if (isFunction(fullbool)) {
              func = fullbool;
              fullbool = false;
            } // Check if a callback was passed with the function.


            if (func) {
              setTimeout(function () {
                func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
              });
              return this;
            } // Check if matrix and run calculations.


            if (this.length > 1) {
              tmpthis = fullbool === true ? this : this.transpose();

              for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);

              return arr;
            } // Pass fullbool if only vector, not a matrix. for variance and stdev.


            return jStat[passfunc](this[0], fullbool);
          };
        })(funcs[i]);
      })('cumsum cumprod'.split(' ')); // Extend jProto with methods which don't require arguments and work on columns.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          // If a matrix is passed, automatically assume operation should be done on
          // the columns.
          jProto[passfunc] = function (fullbool, func) {
            var arr = [];
            var i = 0;
            var tmpthis = this; // Assignment reassignation depending on how parameters were passed in.

            if (isFunction(fullbool)) {
              func = fullbool;
              fullbool = false;
            } // Check if a callback was passed with the function.


            if (func) {
              setTimeout(function () {
                func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
              });
              return this;
            } // Check if matrix and run calculations.


            if (this.length > 1) {
              if (passfunc !== 'sumrow') tmpthis = fullbool === true ? this : this.transpose();

              for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);

              return fullbool === true ? jStat[passfunc](jStat.utils.toVector(arr)) : arr;
            } // Pass fullbool if only vector, not a matrix. for variance and stdev.


            return jStat[passfunc](this[0], fullbool);
          };
        })(funcs[i]);
      })(('sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr ' + 'geomean median diff rank mode range variance deviation stdev meandev ' + 'meddev coeffvar quartiles histogram skewness kurtosis').split(' ')); // Extend jProto with functions that take arguments. Operations on matrices are
      // done on columns.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jProto[passfunc] = function () {
            var arr = [];
            var i = 0;
            var tmpthis = this;
            var args = Array.prototype.slice.call(arguments);
            var callbackFunction; // If the last argument is a function, we assume it's a callback; we
            // strip the callback out and call the function again.

            if (isFunction(args[args.length - 1])) {
              callbackFunction = args[args.length - 1];
              var argsToPass = args.slice(0, args.length - 1);
              setTimeout(function () {
                callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass));
              });
              return this; // Otherwise we curry the function args and call normally.
            } else {
              callbackFunction = undefined;

              var curriedFunction = function curriedFunction(vector) {
                return jStat[passfunc].apply(tmpthis, [vector].concat(args));
              };
            } // If this is a matrix, run column-by-column.


            if (this.length > 1) {
              tmpthis = tmpthis.transpose();

              for (; i < tmpthis.length; i++) arr[i] = curriedFunction(tmpthis[i]);

              return arr;
            } // Otherwise run on the vector.


            return curriedFunction(this[0]);
          };
        })(funcs[i]);
      })('quantiles percentileOfScore'.split(' '));
    })(jStat, Math); // Special functions //


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
      }; // gamma of x


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
      }; // lower incomplete gamma function, which is usually typeset with a
      // lower-case greek gamma as the function symbol


      jStat.gammap = function gammap(a, x) {
        return jStat.lowRegGamma(a, x) * jStat.gammafn(a);
      }; // The lower regularized incomplete gamma function, usually written P(a,x)


      jStat.lowRegGamma = function lowRegGamma(a, x) {
        var aln = jStat.gammaln(a);
        var ap = a;
        var sum = 1 / a;
        var del = sum;
        var b = x + 1 - a;
        var c = 1 / 1.0e-30;
        var d = 1 / b;
        var h = d;
        var i = 1; // calculate maximum number of itterations required for a

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
      }; // natural log factorial of n


      jStat.factorialln = function factorialln(n) {
        return n < 0 ? NaN : jStat.gammaln(n + 1);
      }; // factorial of n


      jStat.factorial = function factorial(n) {
        return n < 0 ? NaN : jStat.gammafn(n + 1);
      }; // combinations of n, m


      jStat.combination = function combination(n, m) {
        // make sure n or m don't exceed the upper limit of usable values
        return n > 170 || m > 170 ? Math.exp(jStat.combinationln(n, m)) : jStat.factorial(n) / jStat.factorial(m) / jStat.factorial(n - m);
      };

      jStat.combinationln = function combinationln(n, m) {
        return jStat.factorialln(n) - jStat.factorialln(m) - jStat.factorialln(n - m);
      }; // permutations of n, m


      jStat.permutation = function permutation(n, m) {
        return jStat.factorial(n) / jStat.factorial(n - m);
      }; // beta function


      jStat.betafn = function betafn(x, y) {
        // ensure arguments are positive
        if (x <= 0 || y <= 0) return undefined; // make sure x + y doesn't exceed the upper limit of usable values

        return x + y > 170 ? Math.exp(jStat.betaln(x, y)) : jStat.gammafn(x) * jStat.gammafn(y) / jStat.gammafn(x + y);
      }; // natural logarithm of beta function


      jStat.betaln = function betaln(x, y) {
        return jStat.gammaln(x) + jStat.gammaln(y) - jStat.gammaln(x + y);
      }; // Evaluates the continued fraction for incomplete beta function by modified
      // Lentz's method.


      jStat.betacf = function betacf(x, a, b) {
        var fpmin = 1e-30;
        var m = 1;
        var qab = a + b;
        var qap = a + 1;
        var qam = a - 1;
        var c = 1;
        var d = 1 - qab * x / qap;
        var m2, aa, del, h; // These q's will be used in factors that occur in the coefficients

        if (Math.abs(d) < fpmin) d = fpmin;
        d = 1 / d;
        h = d;

        for (; m <= 100; m++) {
          m2 = 2 * m;
          aa = m * (b - m) * x / ((qam + m2) * (a + m2)); // One step (the even one) of the recurrence

          d = 1 + aa * d;
          if (Math.abs(d) < fpmin) d = fpmin;
          c = 1 + aa / c;
          if (Math.abs(c) < fpmin) c = fpmin;
          d = 1 / d;
          h *= d * c;
          aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2)); // Next step of the recurrence (the odd one)

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
      }; // Returns the inverse of the lower regularized inomplete gamma function


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
      }; // Returns the error function erf(x)


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
      }; // Returns the complmentary error function erfc(x)


      jStat.erfc = function erfc(x) {
        return 1 - jStat.erf(x);
      }; // Returns the inverse of the complementary error function


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
      }; // Returns the inverse of the incomplete beta function


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
      }; // Returns the incomplete beta function I_x(a,b)


      jStat.ibeta = function ibeta(x, a, b) {
        // Factors in front of the continued fraction.
        var bt = x === 0 || x === 1 ? 0 : Math.exp(jStat.gammaln(a + b) - jStat.gammaln(a) - jStat.gammaln(b) + a * Math.log(x) + b * Math.log(1 - x));
        if (x < 0 || x > 1) return false;
        if (x < (a + 1) / (a + b + 2)) // Use continued fraction directly.
          return bt * jStat.betacf(x, a, b) / a; // else use continued fraction after making the symmetry transformation.

        return 1 - bt * jStat.betacf(1 - x, b, a) / b;
      }; // Returns a normal deviate (mu=0, sigma=1).
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
      }; // Returns a gamma deviate by the method of Marsaglia and Tsang.


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
        } while (u > 1 - 0.331 * Math.pow(x, 4) && Math.log(u) > 0.5 * x * x + a1 * (1 - v + Math.log(v))); // alpha > 1


        if (shape == oalph) return a1 * v; // alpha < 1

        do {
          u = jStat._random_fn();
        } while (u === 0);

        return Math.pow(u, 1 / oalph) * a1 * v;
      }; // making use of static methods on the instance


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
          }; // distribution method to be used on a jStat instance


          jStat.fn[func] = function (a, b, c) {
            var newthis = jStat[func](a, b, c);
            newthis.data = this;
            return newthis;
          }; // sample instance method


          jStat[func].prototype.sample = function (arr) {
            var a = this._a;
            var b = this._b;
            var c = this._c;
            if (arr) return jStat.alter(arr, function () {
              return jStat[func].sample(a, b, c);
            });else return jStat[func].sample(a, b, c);
          }; // generate the pdf, cdf and inv instance methods


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
          })('pdf cdf inv'.split(' ')); // generate the mean, median, mode and variance instance methods


          (function (vals) {
            for (var i = 0; i < vals.length; i++) (function (fnfunc) {
              jStat[func].prototype[fnfunc] = function () {
                return jStat[func][fnfunc](this._a, this._b, this._c);
              };
            })(vals[i]);
          })('mean median mode variance'.split(' '));
        })(list[i]);
      })(('beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy ' + 'laplace lognormal noncentralt normal pareto studentt weibull uniform ' + 'binomial negbin hypgeom poisson triangular tukey arcsine').split(' ')); // extend beta function with static methods


      jStat.extend(jStat.beta, {
        pdf: function pdf(x, alpha, beta) {
          // PDF is zero outside the support
          if (x > 1 || x < 0) return 0; // PDF is one for the uniform case

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
      }); // extend F function with static methods

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
      }); // extend cauchy function with static methods

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
        median: function median(local
        /*, scale*/
        ) {
          return local;
        },
        mode: function mode(local
        /*, scale*/
        ) {
          return local;
        },
        sample: function sample(local, scale) {
          return jStat.randn() * Math.sqrt(1 / (2 * jStat.randg(0.5))) * scale + local;
        }
      }); // extend chisquare function with static methods

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
      }); // extend exponential function with static methods

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
        mode: function
          /*rate*/
        mode() {
          return 0;
        },
        sample: function sample(rate) {
          return -1 / rate * Math.log(jStat._random_fn());
        },
        variance: function (rate) {
          return Math.pow(rate, -2);
        }
      }); // extend gamma function with static methods

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
      }); // extend inverse gamma function with static methods

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
      }); // extend kumaraswamy function with static methods

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
        variance: function
          /*alpha, beta*/
        variance() {
          throw new Error('variance not yet implemented'); // TODO: complete this
        }
      }); // extend lognormal function with static methods

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
        median: function median(mu
        /*, sigma*/
        ) {
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
      }); // extend noncentralt function with static methods

      jStat.extend(jStat.noncentralt, {
        pdf: function pdf(x, dof, ncp) {
          var tol = 1e-14;
          if (Math.abs(ncp) < tol) // ncp approx 0; use student-t
            return jStat.studentt.pdf(x, dof);

          if (Math.abs(x) < tol) {
            // different formula for x == 0
            return Math.exp(jStat.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math.log(Math.PI * dof) - jStat.gammaln(dof / 2));
          } // formula for x != 0


          return dof / x * (jStat.noncentralt.cdf(x * Math.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat.noncentralt.cdf(x, dof, ncp));
        },
        cdf: function cdf(x, dof, ncp) {
          var tol = 1e-14;
          var min_iterations = 200;
          if (Math.abs(ncp) < tol) // ncp approx 0; use student-t
            return jStat.studentt.cdf(x, dof); // turn negative x into positive and flip result afterwards

          var flip = false;

          if (x < 0) {
            flip = true;
            ncp = -ncp;
          }

          var prob = jStat.normal.cdf(-ncp, 0, 1);
          var value = tol + 1; // use value at last two steps to determine convergence

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
      }); // extend normal function with static methods

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
        mean: function (mean
        /*, std*/
        ) {
          return mean;
        },
        median: function median(mean
        /*, std*/
        ) {
          return mean;
        },
        mode: function (mean
        /*, std*/
        ) {
          return mean;
        },
        sample: function sample(mean, std) {
          return jStat.randn() * std + mean;
        },
        variance: function (mean, std) {
          return std * std;
        }
      }); // extend pareto function with static methods

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
        mode: function mode(scale
        /*, shape*/
        ) {
          return scale;
        },
        variance: function (scale, shape) {
          if (shape <= 2) return undefined;
          return scale * scale * shape / (Math.pow(shape - 1, 2) * (shape - 2));
        }
      }); // extend studentt function with static methods

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
        median: function
          /*dof*/
        median() {
          return 0;
        },
        mode: function
          /*dof*/
        mode() {
          return 0;
        },
        sample: function sample(dof) {
          return jStat.randn() * Math.sqrt(dof / (2 * jStat.randg(dof / 2)));
        },
        variance: function variance(dof) {
          return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : undefined;
        }
      }); // extend weibull function with static methods

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
      }); // extend uniform function with static methods

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
        mode: function
          /*a, b*/
        mode() {
          throw new Error('mode is not yet implemented');
        },
        sample: function sample(a, b) {
          return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat._random_fn() - 1);
        },
        variance: function variance(a, b) {
          return Math.pow(b - a, 2) / 12;
        }
      }); // Got this from http://www.math.ucla.edu/~tom/distributions/binomial.html

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
      } // extend uniform function with static methods


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
      }); // extend uniform function with static methods

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
      }); // extend uniform function with static methods

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
            var scaledPDF = 1; // This keeps track of how much we have normalized.

            var samplesDone = 0;

            for (var i = 0; i < k; i++) {
              // For every possible number of successes up to that observed...
              while (scaledPDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.
                scaledPDF *= 1 - m / (N - samplesDone); // Say we've normalized by this sample already.

                samplesDone++;
              } // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes


              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
            }

            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledPDF *= 1 - m / (N - samplesDone);
            } // Bound answer sanely before returning.


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
            var scaledCDF = 1; // This variable holds the scaled probability of the current number of
            // successes.

            var scaledPDF = 1; // This keeps track of how much we have normalized.

            var samplesDone = 0;

            for (var i = 0; i < x; i++) {
              // For every possible number of successes up to that observed...
              while (scaledCDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.
                var factor = 1 - m / (N - samplesDone);
                scaledPDF *= factor;
                scaledCDF *= factor; // Say we've normalized by this sample already.

                samplesDone++;
              } // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes


              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1)); // Add to the CDF answer.

              scaledCDF += scaledPDF;
            }

            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledCDF *= 1 - m / (N - samplesDone);
            } // Bound answer sanely before returning.


            return Math.min(1, Math.max(0, scaledCDF));
          }
        }
      }); // extend uniform function with static methods

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
      }); // extend triangular function with static methods

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
          if (x <= c) return Math.pow(x - a, 2) / ((b - a) * (c - a));else // x > c
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
      }); // extend arcsine function with static methods

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
        mode: function
          /*a, b*/
        mode() {
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
        mean: function (mu
        /*, b*/
        ) {
          return mu;
        },
        median: function (mu
        /*, b*/
        ) {
          return mu;
        },
        mode: function (mu
        /*, b*/
        ) {
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
        var qsqz = w * 0.5; // if w >= 16 then the integral lower bound (occurs for c=20)
        // is 0.99999999999995 so return a value of 1.

        if (qsqz >= bb) return 1.0; // find (f(w/2) - 1) ^ cc
        // (first term in integral of hartley's form).

        var pr_w = 2 * jStat.normal.cdf(qsqz, 0, 1, 1, 0) - 1; // erf(qsqz / M_SQRT2)
        // if pr_w ^ cc < 2e-22 then set pr_w = 0

        if (pr_w >= Math.exp(C2 / cc)) pr_w = Math.pow(pr_w, cc);else pr_w = 0.0; // if w is large then the second component of the
        // integral is small, so fewer intervals are needed.

        var wincr;
        if (w > wlar) wincr = wincr1;else wincr = wincr2; // find the integral of second term of hartley's form
        // for the integral of the range for equal-length
        // intervals using legendre quadrature.  limits of
        // integration are from (w/2, 8).  two or three
        // equal-length intervals are used.
        // blb and bub are lower and upper limits of integration.

        var blb = qsqz;
        var binc = (bb - qsqz) / wincr;
        var bub = blb + binc;
        var einsum = 0.0; // integrate over each interval

        var cc1 = cc - 1.0;

        for (var wi = 1; wi <= wincr; wi++) {
          var elsum = 0.0;
          var a = 0.5 * (bub + blb); // legendre quadrature with order = nleg

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
            var ac = a + c; // if exp(-qexpo/2) < 9e-14,
            // then doesn't contribute to integral

            var qexpo = ac * ac;
            if (qexpo > C3) break;
            var pplus = 2 * jStat.normal.cdf(ac, 0, 1, 1, 0);
            var pminus = 2 * jStat.normal.cdf(ac, w, 1, 1, 0); // if rinsum ^ (cc-1) < 9e-14,
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
        } // if pr_w ^ rr < 9e-14, then return 0


        pr_w += einsum;
        if (pr_w <= Math.exp(C1 / rr)) return 0;
        pr_w = Math.pow(pr_w, rr);
        if (pr_w >= 1) // 1 was iMax was eps
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
          if (q <= 0) return 0; // df must be > 1
          // there must be at least two values

          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (!Number.isFinite(q)) return 1;
          if (df > dlarg) return tukeyWprob(q, rr, cc); // calculate leading constant

          var f2 = df * 0.5;
          var f2lf = f2 * Math.log(df) - df * Math.log(2) - jStat.gammaln(f2);
          var f21 = f2 - 1.0; // integral is divided into unit, half-unit, quarter-unit, or
          // eighth-unit length intervals depending on the value of the
          // degrees of freedom.

          var ff4 = df * 0.25;
          var ulen;
          if (df <= dhaf) ulen = ulen1;else if (df <= dquar) ulen = ulen2;else if (df <= deigh) ulen = ulen3;else ulen = ulen4;
          f2lf += Math.log(ulen); // integrate over each subinterval

          var ans = 0.0;

          for (var i = 1; i <= 50; i++) {
            var otsum = 0.0; // legendre quadrature with order = nlegq
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
              } // if exp(t1) < 9e-14, then doesn't contribute to integral


              var qsqz;

              if (t1 >= eps1) {
                if (ihalfq < jj) {
                  qsqz = q * Math.sqrt((xlegq[j] * ulen + twa1) * 0.5);
                } else {
                  qsqz = q * Math.sqrt((-(xlegq[j] * ulen) + twa1) * 0.5);
                } // call wprob to find integral of range portion


                var wprb = tukeyWprob(qsqz, rr, cc);
                var rotsum = wprb * alegq[j] * Math.exp(t1);
                otsum += rotsum;
              } // end legendre integral for interval i
              // L200:

            } // if integral for interval i < 1e-14, then stop.
            // However, in order to avoid small area under left tail,
            // at least  1 / ulen  intervals are calculated.


            if (i * ulen >= 1.0 && otsum <= eps2) break; // end of interval i
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
          var maxiter = 50; // df must be > 1 ; there must be at least two values

          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (p < 0 || p > 1) return NaN;
          if (p === 0) return 0;
          if (p === 1) return Infinity; // Initial value

          var x0 = tukeyQinv(p, cc, df); // Find prob(value < x0)

          var valx0 = jStat.tukey.cdf(x0, nmeans, df) - p; // Find the second iterate and prob(value < x1).
          // If the first iterate has probability value
          // exceeding p then second iterate is 1 less than
          // first iterate; otherwise it is 1 greater.

          var x1;
          if (valx0 > 0.0) x1 = Math.max(0.0, x0 - 1.0);else x1 = x0 + 1.0;
          var valx1 = jStat.tukey.cdf(x1, nmeans, df) - p; // Find new iterate

          var ans;

          for (var iter = 1; iter < maxiter; iter++) {
            ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
            valx0 = valx1; // New iterate must be >= 0

            x0 = x1;

            if (ans < 0.0) {
              ans = 0.0;
              valx1 = -p;
            } // Find prob(value < new iterate)


            valx1 = jStat.tukey.cdf(ans, nmeans, df) - p;
            x1 = ans; // If the difference between two successive
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
          var row, col, nrescols, sum, nrow, ncol, res, rescols; // eg: arr = 2 arg = 3 -> 6 for res[0][0] statement closure

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
          if (!isUsable(arg[0])) arg = [arg]; // convert column to row vector

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
              i = 0; // check the p-value of the norm, and set for most common case

          if (isNaN(p)) p = 2; // check if multi-dimensional array, and make vector correction

          if (isUsable(arr[0])) arr = arr[0]; // vector norm

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
          var j; //We need to copy the inverse portion to a new matrix to rid G-J artifacts

          for (; i < rows; i++) {
            result[i] = [];

            for (j = cols; j < c[0].length; j++) result[i][j - cols] = c[i][j];
          }

          return result;
        },
        // calculate the determinant of a matrix
        det: function det(a) {
          var alen = a.length,
              alend = alen * 2,
              vals = new Array(alend),
              rowshift = alen - 1,
              colshift = alend - 1,
              mrow = rowshift - alen + 1,
              mcol = colshift,
              i = 0,
              result = 0,
              j; // check for special 2x2 case

          if (alen === 2) {
            return a[0][0] * a[1][1] - a[0][1] * a[1][0];
          }

          for (; i < alend; i++) {
            vals[i] = 1;
          }

          for (i = 0; i < alen; i++) {
            for (j = 0; j < alen; j++) {
              vals[mrow < 0 ? mrow + alen : mrow] *= a[i][j];
              vals[mcol < alen ? mcol + alen : mcol] *= a[i][j];
              mrow++;
              mcol--;
            }

            mrow = --rowshift - alen + 1;
            mcol = --colshift;
          }

          for (i = 0; i < alen; i++) {
            result += vals[i];
          }

          for (; i < alend; i++) {
            result -= vals[i];
          }

          return result;
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
          var x, y, y2; // find max pivot

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
          } // backsubstitute


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
          var size = A.length; //var L=jStat.diagonal(jStat.ones(1,size)[0]);

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
          var b, i, j, p, q, maxim, theta, s; // condition === 1 only if tolerance is not reached

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
            s[q][q] = Math.cos(theta); // eigen vector matrix

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

          for (i = 0; i < n; i++) ev.push(a[i][i]); //returns both the eigenvalue and eigenmatrix


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
            } // adding the lagrange polynomials found above


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
      }); // extend jStat.fn with methods that require one argument

      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) (function (passfunc) {
          jStat.fn[passfunc] = function (arg, func) {
            var tmpthis = this; // check for callback

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
      var isArray = jStat.utils.isArray; // flag==true denotes use of sample standard deviation
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
      }); // T Statistics

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
      }); // F Statistics

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
          } // Builds sample array


          sample = new Array();

          for (i = 0; i < args.length; i++) {
            sample = sample.concat(args[i]);
          }

          sampMean = jStat.mean(sample); // Computes the explained variance

          expVar = 0;

          for (i = 0; i < args.length; i++) {
            expVar = expVar + args[i].length * Math.pow(jStat.mean(args[i]) - sampMean, 2);
          }

          expVar /= args.length - 1; // Computes unexplained variance

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
      }); // Tukey's range test

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
      }); // Error Bounds

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
      }); // internal method for calculating the z-score for a difference of proportions test

      function differenceOfProportions(p1, n1, p2, n2) {
        if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
          throw new Error("Proportions should be greater than 0 and less than 1");
        }

        var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
        var se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
        return (p1 - p2) / se;
      } // Difference of Proportions


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
      } // do OLS model regress
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
        var ybar = jStat.mean(endog); // constant cause problem
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
      } // H0: b_I=0
      // H1: b_I!=0


      function t_test(model) {
        var subModelList = sub_regress(model.exog); //var sigmaHat=jStat.stdev(model.resid);

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
        var ftest = F_test(model); // Provide the Wherry / Ezekiel / McNemar / Cohen Adjusted R^2
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
    }(); //To regress, simply build X matrix
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
        var innerinv = jStat.xtranspxinv(jMatX); //print(innerinv);

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
    }); // Make it compatible with previous version.

    jStat.jStat = jStat;
    return jStat;
  });
});

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
    if (s === 1) return jstat.normal.inv(hr, 0, 1) - jstat.normal.inv(far, 0, 1);
    return Math.sqrt(2 / (s * s + 1)) * (s * jstat.normal.inv(hr, 0, 1) - jstat.normal.inv(far, 0, 1));
  }

  static hrFar2C(hr, far, s = 1) {
    if (s === 1) return -(jstat.normal.inv(hr, 0, 1) + jstat.normal.inv(far, 0, 1)) / 2;
    return Math.sqrt(2 / (s * s + 1)) * (s / (s + 1)) * -(jstat.normal.inv(hr, 0, 1) + jstat.normal.inv(far, 0, 1));
  }

  static dC2Hr(d, c, s = 1) {
    if (s === 1) return jstat.normal.cdf(d / 2 - c, 0, 1);
    return jstat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1);
  }

  static dC2Far(d, c, s = 1) {
    if (s === 1) return jstat.normal.cdf(-(d / 2 + c), 0, 1);
    return jstat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1);
  }

  static dFar2Hr(d, far, s = 1) {
    if (s === 1) return jstat.normal.cdf(d + jstat.normal.inv(far, 0, 1), 0, 1);
    return jstat.normal.cdf((Math.sqrt((s * s + 1) / 2) * d + jstat.normal.inv(far, 0, 1)) / s, 0, 1);
  }

  static cFar2Hr(c, far, s = 1) {
    if (s === 1) return jstat.normal.cdf(-(2 * c) - jstat.normal.inv(far, 0, 1), 0, 1);
    return jstat.normal.cdf(-Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jstat.normal.inv(far, 0, 1), 0, 1);
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
    return jstat.normal.inv(hr, 0, 1);
  }

  static far2Zfar(far) {
    return jstat.normal.inv(far, 0, 1);
  }

  static zhr2Hr(zhr) {
    return jstat.normal.cdf(zhr, 0, 1);
  }

  static zfar2Far(zfar) {
    return jstat.normal.cdf(zfar, 0, 1);
  }

}

let _$9 = t => t,
    _t$9,
    _t2$8;
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

class ROCSpace extends DetectableElement {
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
      },
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
    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;
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
    return [super.styles, r$2(_t$9 || (_t$9 = _$9`
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
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$8 || (_t2$8 = _$9`
      ${0}
    `), DetectableElement.svgFilters);
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`roc-space: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.alignState(); // Bail out if we can't get the width/height/rem

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
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

    const xScale = linear().domain(this.zRoc ? [-3, 3] : [0, 1]) // zFAR or FAR
    .range([0, width]);
    this.xScale = xScale; // Y Scale

    const yScale = linear().domain(this.zRoc ? [3, -3] : [1, 0]) // zHR or HR
    .range([0, height]);
    this.yScale = yScale; // Drag behavior

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
      const hr = this.zRoc ? SDTMath.zhr2Hr(this.yScale.invert(event.y)) : this.yScale.invert(event.y); // Clamp FAR and HR to ROC Space

      datum.far = far < 0.001 ? 0.001 : far > 0.999 ? 0.999 : far;
      datum.hr = hr <= 0.001 ? 0.001 : hr >= 0.999 ? 0.999 : hr; // console.log(`roc-space.drag: far = ${datum.far}, hr = ${datum.hr}`);

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
    }); // Line for FAR/HR Space

    const line$1 = line().x(datum => {
      return xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far);
    }).y(datum => {
      return yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr);
    }); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); //  ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`); // Plot
    //  ENTER

    const plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`); // Clippath
    //  ENTER

    plotEnter.append('clipPath').attr('id', 'clip-roc-space').append('rect'); //  MERGE

    plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1); // Underlayer
    //  ENTER

    const underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

    const underlayerMerge = plotMerge.select('.underlayer'); // Background
    //  ENTER

    underlayerEnter.append('rect').classed('background', true); //  MERGE

    underlayerMerge.select('.background').attr('height', height).attr('width', width); // Contour Plotting
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
        const contours$1 = contours().size([n, n]).thresholds(contourThresholds);
        const contourColorStart = this.getComputedStyleValue(this.contour === 'bias' ? '---color-element-background' : this.contour === 'sensitivity' ? '---color-d' : this.contour === 'accuracy' ? '---color-acc-dark' : null);
        const contourColorEnd = this.getComputedStyleValue(this.contour === 'bias' ? '---color-c' : this.contour === 'sensitivity' ? '---color-element-background' : this.contour === 'accuracy' ? '---color-element-background' : null);
        const contourColor = linear().domain(extent(contourThresholds)).interpolate(() => {
          return interpolateRgb(contourColorStart, contourColorEnd);
        }); //  DATA-JOIN

        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([this.contour]); //  ENTER

        const contourPlotEnter = contourPlotUpdate.enter().append('g').classed('plot-contour', true); //  MERGE

        const contourPlotMerge = contourPlotEnter.merge(contourPlotUpdate); // Contour Plot Contours
        //  DATA-JOIN

        const contoursUpdate = contourPlotMerge.selectAll('.contour').data(contours$1(contourValues)); //  ENTER

        const contoursEnter = contoursUpdate.enter().append('path').classed('contour', true); //  MERGE

        contoursEnter.merge(contoursUpdate).transition().duration(transitionDuration * 2) // Extra long transition!
        .ease(cubicOut).attr('d', index(identity$2().scale(width / n))) // ????
        .attr('fill', datum => {
          return contourColor(datum.value);
        }); //  EXIT

        contoursUpdate.exit().remove(); // Contour Title
        //  DATA-JOIN

        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([this.contour]); //  ENTER

        const contourTitleEnter = contourTitleUpdate.enter().append('text').classed('title-contour', true).attr('text-anchor', 'middle'); //  MERGE

        contourTitleEnter.merge(contourTitleUpdate).classed('math-var', this.contour === 'bias' || this.contour === 'sensitivity').attr('transform', this.contour === 'bias' ? `translate(${width + 1.25 * this.rem}, ${this.rem})` : this.contour === 'sensitivity' ? `translate(${width + 1.25 * this.rem}, ${this.rem})` : this.contour === 'accuracy' ? `translate(${width + 1.125 * this.rem}, ${this.rem})` : null).text(this.contour === 'bias' ? 'c' : this.contour === 'sensitivity' ? 'd′' : this.contour === 'accuracy' ? 'Acc' : null); // Contour Legend

        const l = 100;
        const contourLegendValues = []; // new Array(4 * l);

        for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
          contourLegendValues[k] = this.contour === 'bias' ? -(i / n * 6 - 3) : this.contour === 'sensitivity' ? i / n * 12 - 6 : this.contour === 'accuracy' ? i / n : null;
          contourLegendValues[k + 1] = contourLegendValues[k];
          contourLegendValues[k + 2] = contourLegendValues[k];
          contourLegendValues[k + 3] = contourLegendValues[k];
        }

        const legendContours = contours().size([4, l]).thresholds(contourThresholds);
        const legendScale = linear().domain(this.contour === 'bias' ? [3, -3] : this.contour === 'sensitivity' ? [6, -6] : this.contour === 'accuracy' ? [1, 0] : null).range([0, 10 * this.rem]); //  DATA-JOIN

        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([this.contour]); //  ENTER

        const contourLegendEnter = contourLegendUpdate.enter().append('g').classed('legend-contour', true); //  MERGE

        const contourLegendMerge = contourLegendEnter.merge(contourLegendUpdate).attr('transform', this.contour === 'bias' ? `translate(${width + 1.25 * this.rem}, ${1.5 * this.rem})` : this.contour === 'sensitivity' ? `translate(${width + 1.25 * this.rem}, ${1.5 * this.rem})` : this.contour === 'accuracy' ? `translate(${width + 1.5 * this.rem}, ${1.5 * this.rem})` : null); //  EXIT

        contourLegendUpdate.exit().remove(); // Contour Legend Axis
        //  ENTER

        contourLegendEnter.append('g').classed('axis-contour', true); //  MERGE

        contourLegendMerge.select('.axis-contour').call(axisLeft(legendScale).ticks(7).tickSize(0)).attr('font-size', null).attr('font-family', null); // Contour Legend Contours
        //  DATA-JOIN

        const legendContoursUpdate = contourLegendMerge.selectAll('.contour').data(legendContours(contourLegendValues)); //  ENTER

        const legendContoursEnter = legendContoursUpdate.enter().append('path').classed('contour', true); //  MERGE

        legendContoursEnter.merge(legendContoursUpdate).attr('d', index(identity$2().scale(10 * this.rem / l))) // ????
        .attr('fill', datum => {
          return contourColor(datum.value);
        }); //  EXIT

        legendContoursUpdate.exit().remove();
      } else {
        // Contour Plot
        //  DATA-JOIN
        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([]); //  EXIT

        contourPlotUpdate.exit().remove(); // Contour Title
        //  DATA-JOIN

        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([]); //  EXIT

        contourTitleUpdate.exit().remove(); // Contour Legend
        //  DATA-JOIN

        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([]); //  EXIT

        contourLegendUpdate.exit().remove();
      }
    } // X Axis
    //  ENTER


    underlayerEnter.append('g').classed('axis-x', true); //  MERGE

    const axisXMerge = underlayerMerge.select('.axis-x').attr('transform', `translate(0, ${height})`);
    const axisXTransition = axisXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    axisXTransition.selectAll('line, path').attr('stroke', null); // X Axis Title
    //  ENTER

    const titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
    titleXEnter.append('tspan').classed('z math-var', true);
    titleXEnter.append('tspan').classed('name', true); //  MERGE

    const titleXMerge = underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`);
    titleXMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
    titleXMerge.select('tspan.name').text(this.zRoc ? '(False Alarm Rate)' : 'False Alarm Rate'); // Y Axis
    //  ENTER

    underlayerEnter.append('g').classed('axis-y', true); // MERGE

    const axisYTransition = underlayerMerge.select('.axis-y').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
    axisYTransition.selectAll('line, path').attr('stroke', null); // Y Axis Title
    //  ENTER

    const titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
    titleYEnter.append('tspan').classed('z math-var', true);
    titleYEnter.append('tspan').classed('name', true); //  MERGE

    const titleYMerge = underlayerMerge.select('.title-y').attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`);
    titleYMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
    titleYMerge.select('tspan.name').text(this.zRoc ? '(Hit Rate)' : 'Hit Rate'); // No-Information Line
    //  ENTER

    underlayerEnter.append('line').classed('diagonal', true); //  MERGE

    underlayerMerge.select('.diagonal').attr('x1', this.zRoc ? xScale(-3) : xScale(0)).attr('y1', this.zRoc ? yScale(-3) : yScale(0)).attr('x2', this.zRoc ? xScale(3) : xScale(1)).attr('y2', this.zRoc ? yScale(3) : yScale(1)); // Content
    //  ENTER

    plotEnter.append('g').classed('content', true); //  MERGE

    const contentMerge = plotMerge.select('.content'); // Iso-sensitivity Curve
    //  DATA-JOIN

    const isoDUpdate = contentMerge.selectAll('.curve-iso-d').data(this.isoDArray, datum => {
      return datum.name;
    }); //  ENTER

    const isoDEnter = isoDUpdate.enter().append('path').classed('curve-iso-d', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

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
    } //  EXIT
    // NOTE: Could add a transition here


    isoDUpdate.exit().remove(); // Iso-bias Curve
    //  DATA-JOIN

    const isoCUpdate = contentMerge.selectAll('.curve-iso-c').data(this.isoCArray, datum => {
      return datum.name;
    }); //  ENTER

    const isoCEnter = isoCUpdate.enter().append('path').classed('curve-iso-c', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

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
    } //  EXIT
    // NOTE: Could add a transition here


    isoCUpdate.exit().remove(); // Point
    //  DATA-JOIN

    const pointUpdate = contentMerge.selectAll('.point').data(this.pointArray, datum => {
      return datum.name;
    }); //  ENTER

    const pointEnter = pointUpdate.enter().append('g').classed('point', true);
    pointEnter.append('circle').classed('circle', true);
    pointEnter.append('text').classed('label', true); //  MERGE

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

            }

            hr = this.zRoc ? SDTMath.zhr2Hr(hr) : hr;
            far = this.zRoc ? SDTMath.zfar2Far(far) : far; // Clamp FAR and HR to ROC Space

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
    } //  EXIT
    // NOTE: Could add a transition here


    pointUpdate.exit().remove();
    this.drag = false;
    this.sdt = false;
    this.firstUpdate = false;
  }

}
customElements.define('roc-space', ROCSpace);

let _$8 = t => t,
    _t$8,
    _t2$7;
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

class SDTModel extends DetectableElement {
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
      },
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
    super(); // Attributes

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

    this.width = NaN; // Width of component in pixels

    this.height = NaN; // Height of component in pixels

    this.rem = NaN; // Pixels per rem for component
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
    trial.evidence = jstat.normal.sample(0, 1);
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
    return [super.styles, r$2(_t$8 || (_t$8 = _$8`
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
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$7 || (_t2$7 = _$8`
      ${0}
    `), DetectableElement.svgFilters);
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

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`sdt-model: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.alignState(); // Bail out if we can't get the width/height

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
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

    const xScale = linear().domain([-3, 3]) // Evidence // FIX - no hardcoding
    .range([0, width]); // Y Scale

    const yScale = linear().domain([0.5, 0]) // Probability // FIX - no hardcoding
    .range([0, height]); // 2nd Y Scale

    const strokeWidth = 3; // FIX - no hardcoding

    const binWidth = xScale(this.binWidth) - xScale(0);
    const y2Scale = linear().domain([height / binWidth, 0]) // Number of Stimuli
    .range([0, height]); // Threshold Drag behavior

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
      let l = xScale.invert(event.x); // Clamp lambda to stay visible

      l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;
      this.c = SDTMath.l2C(l, this.s);
      this.alignState();
      this.sendEvent();
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }); // Noise Curve Drag behavior

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
      let muN = xScale.invert(event.x); // Clamp Noise Curve to stay visible

      muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;
      this.d = SDTMath.muN2D(muN, this.s);
      this.alignState();
      this.sendEvent();
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }); // Signal+Noise Curve Drag behavior

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
      let muS = this.muS;
      /* eslint-disable-line prefer-destructuring */

      if (this.interactive) {
        muS = xScale.invert(event.x); // Clamp Signal Curve to stay visible

        muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;
      }

      let hS = this.hS;
      /* eslint-disable-line prefer-destructuring */

      if (this.unequal) {
        hS = yScale.invert(event.y); // Clamp Signal Curve to stay visible

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
    }); // Line for Evidence/Probability Space

    const line$1 = line().x(datum => {
      return xScale(datum.e);
    }).y(datum => {
      return yScale(datum.p);
    }); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); // ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); // MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`); // Plot
    //  ENTER

    const plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`); // Underlayer
    //  ENTER

    const underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

    const underlayerMerge = plotMerge.select('.underlayer'); // Background
    //  ENTER

    underlayerEnter.append('rect').classed('background', true); //  MERGE

    underlayerMerge.select('.background').attr('height', height).attr('width', width); // X Axis
    //  ENTER

    underlayerEnter.append('g').classed('axis-x', true); //  MERGE

    const axisXMerge = underlayerMerge.select('.axis-x').attr('transform', `translate(0, ${height})`).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    axisXMerge.selectAll('line, path').attr('stroke', null); // X Axis Title
    //  ENTER

    underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle').text('Evidence'); //  MERGE

    underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`); // Y Axis
    //  DATA-JOIN

    const axisYUpdate = underlayerMerge.selectAll('.axis-y').data(this.distributions ? [{}] : []); //  ENTER

    const axisYEnter = axisYUpdate.enter().append('g').classed('axis-y', true); //  MERGE

    const axisYMerge = axisYEnter.merge(axisYUpdate).call(axisLeft(yScale).ticks(5)).attr('font-size', null).attr('font-family', null);
    axisYMerge.selectAll('line, path').attr('stroke', null); //  EXIT

    axisYUpdate.exit().remove(); // Y Axis Title
    //  DATA-JOIN

    const titleYUpdate = underlayerMerge.selectAll('.title-y').data(this.distributions ? [{}] : []); //  ENTER

    const titleYEnter = titleYUpdate.enter().append('text').classed('title-y', true).attr('text-anchor', 'middle').text('Probability'); //  MERGE

    titleYEnter.merge(titleYUpdate).attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`); //  EXIT

    titleYUpdate.exit().remove(); // 2nd Y Axis
    //  DATA-JOIN

    const axisY2Update = underlayerMerge.selectAll('.axis-y2').data(this.histogram ? [{}] : []); //  ENTER

    const axisY2Enter = axisY2Update.enter().append('g').classed('axis-y2', true); //  MERGE

    const axisY2Merge = axisY2Enter.merge(axisY2Update).attr('transform', this.distributions ? `translate(${width}, 0)` : '').call(this.distributions ? axisRight(y2Scale).ticks(10) : axisLeft(y2Scale).ticks(10)).attr('font-size', null).attr('font-family', null);
    axisY2Merge.selectAll('line, path').attr('stroke', null); //  EXIT

    axisY2Update.exit().remove(); // 2nd Y Axis Title
    //  DATA-JOIN

    const titleY2Update = underlayerMerge.selectAll('.title-y2').data(this.histogram ? [{}] : []); //  ENTER

    const titleY2Enter = titleY2Update.enter().append('text').classed('title-y2', true).attr('text-anchor', 'middle').text('Count'); //  MERGE

    titleY2Enter.merge(titleY2Update).attr('transform', this.distributions ? `translate(${width + 1.5 * this.rem}, ${height / 2})rotate(90)` : `translate(${-1.5 * this.rem}, ${height / 2})rotate(-90)`); //  EXIT

    titleY2Update.exit().remove(); // Plot Content

    plotEnter.append('g').classed('content', true); //  MERGE

    const contentMerge = plotMerge.select('.content'); // Noise & Signal + Noise Distributions
    //  DATA-JOIN

    const signalNoiseUpdate = contentMerge.selectAll('.signal-noise').data(this.distributions ? [{}] : []); //  ENTER

    const signalNoiseEnter = signalNoiseUpdate.enter().append('g').classed('signal-noise', true); //  MERGE

    const signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate); //  EXIT

    signalNoiseUpdate.exit().remove(); // Noise Distribution
    //  ENTER

    const noiseEnter = signalNoiseEnter.append('g').classed('noise', true); //  MERGE

    const noiseMerge = signalNoiseMerge.selectAll('.noise').attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? event => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let muN = this.muN;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowRight':
            muN += event.shiftKey ? 0.01 : 0.1;
            break;

          case 'ArrowLeft':
            muN -= event.shiftKey ? 0.01 : 0.1;
            break;
        } // Clamp C to visible extent


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
    } // CR Curve
    //  ENTER


    noiseEnter.append('path').classed('curve-cr', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        correctRejections.push({
          e: SDTMath.c2L(element.c, element.s),
          p: jstat.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuN(element.d, element.s), 1)
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
    }); // FA Curve
    //  ENTER

    noiseEnter.append('path').classed('curve-fa', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        falseAlarms.push({
          e: xScale.domain()[1],
          p: jstat.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
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
    }); // Noise Curve
    //  ENTER

    noiseEnter.append('path').classed('curve-noise', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
          };
        });
        noise.push({
          e: xScale.domain()[1],
          p: jstat.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
        });
        return line$1(noise);
      };
    }); // Signal + Noise Distribution
    //  ENTER

    const signalEnter = signalNoiseEnter.append('g').classed('signal', true); //  MERGE

    const signalMerge = signalNoiseMerge.selectAll('.signal').attr('tabindex', this.interactive || this.unequal ? 0 : null).classed('interactive', this.interactive).classed('unequal', this.unequal).on('keydown.sensitivity', this.interactive ? event => {
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let muS = this.muS;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowRight':
            muS += event.shiftKey ? 0.01 : 0.1;
            break;

          case 'ArrowLeft':
            muS -= event.shiftKey ? 0.01 : 0.1;
            break;
        } // Clamp C to visible extent


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
        let hS = this.hS;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowUp':
            hS += event.shiftKey ? 0.002 : 0.02;
            break;

          case 'ArrowDown':
            hS -= event.shiftKey ? 0.002 : 0.02;
            break;
        } // Clamp s so distribution stays visible


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
    } // M Curve
    //  ENTER


    signalEnter.append('path').classed('curve-m', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        misses.push({
          e: SDTMath.c2L(element.c, element.s),
          p: jstat.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuS(element.d, element.s), element.s)
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
    }); // H Curve
    //  ENTER

    signalEnter.append('path').classed('curve-h', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        hits.push({
          e: xScale.domain()[1],
          p: jstat.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
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
    }); // Signal Curve
    //  ENTER

    signalEnter.append('path').classed('curve-signal', true); //  MERGE

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
            p: jstat.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
          };
        });
        signal.push({
          e: xScale.domain()[1],
          p: jstat.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
        });
        return line$1(signal);
      };
    }); // d' Measure
    //  DATA-JOIN

    const dUpdate = contentMerge.selectAll('.measure-d').data(this.sensitivity ? [{}] : []); //  ENTER

    const dEnter = dUpdate.enter().append('g').classed('measure-d', true);
    dEnter.append('line').classed('line', true);
    dEnter.append('line').classed('cap-left', true);
    dEnter.append('line').classed('cap-right', true);
    const dLabel = dEnter.append('text').classed('label', true);
    dLabel.append('tspan').classed('d math-var', true).text('d′');
    dLabel.append('tspan').classed('equals', true).text(' = ');
    dLabel.append('tspan').classed('value', true); //  MERGE

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
    }); //  EXIT

    dUpdate.exit().remove(); // c Measure
    //  DATA-JOIN

    const cUpdate = contentMerge.selectAll('.measure-c').data(this.bias ? [{}] : []); //  ENTER

    const cEnter = cUpdate.enter().append('g').classed('measure-c', true);
    cEnter.append('line').classed('line', true);
    cEnter.append('line').classed('cap-zero', true);
    const cLabel = cEnter.append('text').classed('label', true);
    cLabel.append('tspan').classed('c math-var', true).text('c');
    cLabel.append('tspan').classed('equals', true).text(' = ');
    cLabel.append('tspan').classed('value', true); //  MERGE

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
    }); //  EXIT

    cUpdate.exit().remove(); // s Measure
    //  DATA-JOIN

    const sUpdate = contentMerge.selectAll('.measure-s').data(this.variance ? [{}] : []); //  ENTER

    const sEnter = sUpdate.enter().append('g').classed('measure-s', true);
    sEnter.append('line').classed('line', true);
    sEnter.append('line').classed('cap-left', true);
    sEnter.append('line').classed('cap-right', true);
    const sLabel = sEnter.append('text').classed('label', true);
    sLabel.append('tspan').classed('s math-var', true).text('σ');
    sLabel.append('tspan').classed('equals', true).text(' = ');
    sLabel.append('tspan').classed('value', true); //  MERGE

    const sMerge = sEnter.merge(sUpdate);
    sMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s) // FIX - no hardcoding
    .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s); // FIX - no hardcoding

    sMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muS - this.s)).attr('y2', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

    sMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS + this.s)).attr('y1', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
    .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

    const sLabelTransition = sMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(this.muS)).attr('y', yScale(jstat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 3); // FIX - no hardcoding

    sLabelTransition.select('.value').tween('text', (datum, index, elements) => {
      const element = elements[index];
      const interpolateS = interpolate$1(element.s !== undefined ? element.s : this.s, this.s);
      return time => {
        element.s = interpolateS(time);
        select(element).text(format('.3')(element.s));
      };
    }); //  EXIT

    sUpdate.exit().remove(); // Threshold Line
    //  DATA-JOIN

    const thresholdUpdate = contentMerge.selectAll('.threshold').data(this.threshold ? [{}] : []); //  ENTER

    const thresholdEnter = thresholdUpdate.enter().append('g').classed('threshold', true);
    thresholdEnter.append('line').classed('line', true);
    thresholdEnter.append('circle').classed('handle', true); //  MERGE

    const thresholdMerge = thresholdEnter.merge(thresholdUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive);

    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        thresholdMerge.call(dragThreshold).on('keydown', event => {
          if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let l = this.l;
            /* eslint-disable-line prefer-destructuring */

            switch (event.key) {
              case 'ArrowRight':
                l += event.shiftKey ? 0.01 : 0.1;
                break;

              case 'ArrowLeft':
                l -= event.shiftKey ? 0.01 : 0.1;
                break;
            } // Clamp C to visible extent


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
    thresholdMerge.select('.handle').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('cx', xScale(this.l)).attr('cy', yScale(0.54)); //  EXIT

    thresholdUpdate.exit().remove(); // Histogram
    //  DATA-JOIN

    const histogramUpdate = contentMerge.selectAll('.histogram').data(this.histogram ? [{}] : []); //  ENTER

    const histogramEnter = histogramUpdate.enter().append('g').classed('histogram', true); //  MERGE

    const histogramMerge = histogramEnter.merge(histogramUpdate); //  EXIT

    histogramUpdate.exit().remove(); // Trials

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
      } // Put out-of-range values in extreme left/right bins


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
      } //  DATA-JOIN


      const trialUpdate = histogramMerge.selectAll('.trial').data(this.trials, datum => {
        return datum.trial;
      }); //  ENTER

      const trialEnter = trialUpdate.enter().append('rect').attr('stroke-width', strokeWidth).attr('data-new-trial-ease-time', 0) // use 'data-trial-enter'
      .attr('stroke', this.getComputedStyleValue('---color-acc')).attr('fill', this.getComputedStyleValue('---color-acc-light')); //  MERGE

      const trialMerge = trialEnter.merge(trialUpdate).attr('class', datum => {
        return `trial ${datum.outcome}`;
      }).attr('width', binWidth - strokeWidth).attr('height', binWidth - strokeWidth); //  MERGE - Active New Trials

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
      } // MERGE - Paused New Trials


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
      } //  MERGE - Old Trials


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
      }); //  EXIT

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
    } // Overlayer
    //  ENTER


    const overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

    const overlayerMerge = plotMerge.select('.overlayer'); // Background
    //  ENTER

    overlayerEnter.append('rect').classed('background', true); //  MERGE

    overlayerMerge.select('.background').attr('height', height).attr('width', width);
    this.drag = false;
    this.firstUpdate = false;
  } // Called to pause trial animations!


  pauseTrial() {
    const trialNew = select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
    trialNew.interrupt('new');
    trialNew.datum(datum => {
      datum.paused = true;
      return datum;
    });
  } // Called to resume trial animations!


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

let _$7 = t => t,
    _t$7,
    _t2$6,
    _t3$1,
    _t4$1,
    _t5$1,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14,
    _t15,
    _t16,
    _t17,
    _t18,
    _t19,
    _t20,
    _t21,
    _t22,
    _t23,
    _t24,
    _t25,
    _t26,
    _t27,
    _t28,
    _t29,
    _t30,
    _t31,
    _t32,
    _t33,
    _t34,
    _t35,
    _t36,
    _t37,
    _t38,
    _t39,
    _t40,
    _t41,
    _t42,
    _t43,
    _t44,
    _t45,
    _t46;
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
    this.h = 40;
    this.m = 60;
    this.fa = 75;
    this.cr = 25;
    this.alignState();
    this.payoff = false;
    this.hPayoff = undefined; // Hit payoff

    this.mPayoff = undefined; // Miss payoff

    this.crPayoff = undefined; // Correct Rejection payoff

    this.faPayoff = undefined; // False Alarm payoff
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
    return [super.styles, r$2(_t$7 || (_t$7 = _$7`
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
      `))];
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

    this.alignState();
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
      h = $(_t2$6 || (_t2$6 = _$7`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Hits</span>
          ${0}
        </decidables-spinner>
      `), !this.interactive, this.h, this.hInput.bind(this), this.payoff ? $(_t3$1 || (_t3$1 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.hPayoff)) : $(_t4$1 || (_t4$1 = _$7``)));
      m = $(_t5$1 || (_t5$1 = _$7`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Misses</span>
          ${0}
        </decidables-spinner>
      `), !this.interactive, this.m, this.mInput.bind(this), this.payoff ? $(_t6 || (_t6 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.mPayoff)) : $(_t7 || (_t7 = _$7``)));
      fa = $(_t8 || (_t8 = _$7`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>False Alarms</span>
          ${0}
        </decidables-spinner>
      `), !this.interactive, this.fa, this.faInput.bind(this), this.payoff ? $(_t9 || (_t9 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.faPayoff)) : $(_t10 || (_t10 = _$7``)));
      cr = $(_t11 || (_t11 = _$7`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Correct Rejections</span>
          ${0}
        </decidables-spinner>
      `), !this.interactive, this.cr, this.crInput.bind(this), this.payoff ? $(_t12 || (_t12 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.crPayoff)) : $(_t13 || (_t13 = _$7``)));
      hr = $(_t14 || (_t14 = _$7`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `), !this.interactive, +this.hr.toFixed(3), this.hrInput.bind(this));
      far = $(_t15 || (_t15 = _$7`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `), !this.interactive, +this.far.toFixed(3), this.farInput.bind(this));
      acc = $(_t16 || (_t16 = _$7`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Accuracy</span>
        </decidables-spinner>
      `), !this.interactive, +this.acc.toFixed(3), this.accInput.bind(this));
      ppv = $(_t17 || (_t17 = _$7`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `), !this.interactive, +this.ppv.toFixed(3), this.ppvInput.bind(this));
      fomr = $(_t18 || (_t18 = _$7`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `), !this.interactive, +this.fomr.toFixed(3), this.fomrInput.bind(this));
    } else {
      h = $(_t19 || (_t19 = _$7`<span>Hits</span>
        ${0}`), this.payoff ? $(_t20 || (_t20 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.hPayoff)) : $(_t21 || (_t21 = _$7``)));
      m = $(_t22 || (_t22 = _$7`<span>Misses</span>
        ${0}`), this.payoff ? $(_t23 || (_t23 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.mPayoff)) : $(_t24 || (_t24 = _$7``)));
      fa = $(_t25 || (_t25 = _$7`<span>False Alarms</span>
        ${0}`), this.payoff ? $(_t26 || (_t26 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.faPayoff)) : $(_t27 || (_t27 = _$7``)));
      cr = $(_t28 || (_t28 = _$7`<span>Correct Rejections</span>
        ${0}`), this.payoff ? $(_t29 || (_t29 = _$7`<span class="payoff">${0}</span>`), payoffFormat(this.crPayoff)) : $(_t30 || (_t30 = _$7``)));
      hr = $(_t31 || (_t31 = _$7`<span>Hit Rate</span>`));
      far = $(_t32 || (_t32 = _$7`<span>False Alarm Rate</span>`));
      acc = $(_t33 || (_t33 = _$7`<span>Accuracy</span>`));
      ppv = $(_t34 || (_t34 = _$7`<span>Positive Predictive Value</span>`));
      fomr = $(_t35 || (_t35 = _$7`<span>False Omission Rate</span>`));
    }

    return $(_t36 || (_t36 = _$7`
      <table class=${0}>
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
              ${0}
            </td>
            <td class="td td-data m">
              ${0}
            </td>
            ${0}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Absent
            </th>
            <td class="td td-data fa">
              ${0}
            </td>
            <td class="td td-data cr">
              ${0}
            </td>
            ${0}
          </tr>
          ${0}
        </tbody>
      </table>`), this.numeric ? 'numeric' : '', h, m, this.summary.has('stimulusRates') ? $(_t37 || (_t37 = _$7`
                <td class="td td-summary hr">
                  ${0}
                </td>`), hr) : $(_t38 || (_t38 = _$7``)), fa, cr, this.summary.has('stimulusRates') ? $(_t39 || (_t39 = _$7`
                <td class="td td-summary far">
                  ${0}
                </td>`), far) : $(_t40 || (_t40 = _$7``)), this.summary.has('responseRates') || this.summary.has('accuracy') ? $(_t41 || (_t41 = _$7`
              <tr>
                <td colspan="2"></td>
                ${0}
                ${0}
              </tr>`), this.summary.has('responseRates') ? $(_t42 || (_t42 = _$7`
                    <td class="td td-summary ppv">
                      ${0}
                    </td>
                    <td class="td td-summary fomr">
                      ${0}
                    </td>`), ppv, fomr) : $(_t43 || (_t43 = _$7`
                    <td colspan="2"></td>`)), this.summary.has('accuracy') ? $(_t44 || (_t44 = _$7`
                    <td class="td td-summary acc" rowspan="2">
                      ${0}
                    </td>`), acc) : $(_t45 || (_t45 = _$7``))) : $(_t46 || (_t46 = _$7``)));
  }

}
customElements.define('detectable-table', DetectableTable);

/*
  CPTMath Static Class - Not intended for instantiation!

  Variables:
    x = objective value
    v = subjective value
    p = objective probability
    w = subjective probability/decision weight
    u = subjective utility

    a = alpha (curvature for value function)
    l = lambda (loss aversion for value function)
    g = gamma (sensitivity for decision weighting function)

  Equations:
    v = if (x >= 0) x^a; if (x < 0) -l * (-x)^a
    a = if (x >= 0) log(v) / log(x); if (x < 0) (log(-v) - log(l)) / log(-x)
    l = if (x >= 0) 1; if (x < 0) -v / (-x)^a

    w = p^g / (p^g + (1 - p)^g)^(1 / g)

    u = Sum_n(v_n * w_n)
*/
class CPTMath {
  static xal2v(x, a, l) {
    if (x >= 0) {
      return x ** a;
    } // else (x < 0)


    return -l * (-x) ** a;
  }

  static xlv2a(x, l, v) {
    if (x >= 0) {
      return Math.log(v) / Math.log(x);
    } // else (x < 0)


    return (Math.log(-v) - Math.log(l)) / Math.log(-x);
  }

  static xav2l(x, a, v) {
    if (x >= 0) {
      return NaN;
    } // else (x < 0)


    return -v / (-x) ** a;
  }

  static pg2w(p, g) {
    return p ** g / (p ** g + (1 - p) ** g) ** (1 / g);
  }

  static vw2u(v, w) {
    // Numbers
    if (typeof v === 'number' && typeof w === 'number') {
      return v * w;
    } // Arrays


    if (v instanceof Array && w instanceof Array && v.length > 0 && v.length === w.length) {
      let u = 0;

      for (let n = 0; n < v.length; n += 1) {
        u += v[n] * w[n];
      }

      return u;
    } // Otherwise


    return NaN;
  }

}

let _$6 = t => t,
    _t$6;
/*
  ProspectableElement Base Class - Not intended for instantiation!
  <sdt-element>
*/

class ProspectableElement extends DecidablesElement {
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
      x: Set1[0],
      a: Set1[4],
      l: Set1[5],
      v: Set1[7],
      p: Set1[1],
      g: Set1[2],
      w: Set1[3],
      u: Set1[6],
      chosen: Set1[8],
      better: '#4545d0',
      worse: '#f032e6',
      even: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
      nr: '#cccccc'
    };
  }

  static get lights() {
    return Object.keys(ProspectableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(ProspectableElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }

  static get darks() {
    return Object.keys(ProspectableElement.colors).reduce((acc, cur) => {
      acc[cur] = interpolateRgb(ProspectableElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }

  static get styles() {
    return [super.styles, r$2(_t$6 || (_t$6 = _$6`
        :host {
          ---color-x: var(--color-x, ${0});
          ---color-a: var(--color-a, ${0});
          ---color-l: var(--color-l, ${0});
          ---color-v: var(--color-v, ${0});
          ---color-p: var(--color-p, ${0});
          ---color-g: var(--color-g, ${0});
          ---color-w: var(--color-w, ${0});
          ---color-u: var(--color-u, ${0});
          ---color-chosen: var(--color-chosen, ${0});
          ---color-better: var(--color-better, ${0});
          ---color-worse: var(--color-worse, ${0});
          ---color-even: var(--color-even, ${0});
          ---color-correct: var(--color-correct, ${0});
          ---color-error: var(--color-error, ${0});
          ---color-nr: var(--color-nr, ${0});

          ---color-x-light: var(--color-x-light, ${0});
          ---color-a-light: var(--color-a-light, ${0});
          ---color-l-light: var(--color-l-light, ${0});
          ---color-v-light: var(--color-v-light, ${0});
          ---color-p-light: var(--color-p-light, ${0});
          ---color-g-light: var(--color-g-light, ${0});
          ---color-w-light: var(--color-w-light, ${0});
          ---color-u-light: var(--color-u-light, ${0});
          ---color-chosen-light: var(--color-chosen-light, ${0});
          ---color-better-light: var(--color-better-light, ${0});
          ---color-worse-light: var(--color-worse-light, ${0});
          ---color-even-light: var(--color-even-light, ${0});
          ---color-correct-light: var(--color-correct-light, ${0});
          ---color-error-light: var(--color-error-light, ${0});
          ---color-nr-light: var(--color-nr-light, ${0});

          ---color-x-dark: var(--color-x-dark, ${0});
          ---color-a-dark: var(--color-a-dark, ${0});
          ---color-l-dark: var(--color-l-dark, ${0});
          ---color-v-dark: var(--color-v-dark, ${0});
          ---color-p-dark: var(--color-p-dark, ${0});
          ---color-g-dark: var(--color-g-dark, ${0});
          ---color-w-dark: var(--color-w-dark, ${0});
          ---color-u-dark: var(--color-u-dark, ${0});
          ---color-chosen-dark: var(--color-chosen-dark, ${0});
          ---color-better-dark: var(--color-better-dark, ${0});
          ---color-worse-dark: var(--color-worse-dark, ${0});
          ---color-even-dark: var(--color-even-dark, ${0});
          ---color-correct-dark: var(--color-correct-dark, ${0});
          ---color-error-dark: var(--color-error-dark, ${0});
          ---color-nr-dark: var(--color-nr-dark, ${0});
        }
      `), o$3(this.colors.x), o$3(this.colors.a), o$3(this.colors.l), o$3(this.colors.v), o$3(this.colors.p), o$3(this.colors.g), o$3(this.colors.w), o$3(this.colors.u), o$3(this.colors.chosen), o$3(this.colors.better), o$3(this.colors.worse), o$3(this.colors.even), o$3(this.colors.correct), o$3(this.colors.error), o$3(this.colors.nr), o$3(this.lights.x), o$3(this.lights.a), o$3(this.lights.l), o$3(this.lights.v), o$3(this.lights.p), o$3(this.lights.g), o$3(this.lights.w), o$3(this.lights.u), o$3(this.lights.chosen), o$3(this.lights.better), o$3(this.lights.worse), o$3(this.lights.even), o$3(this.lights.correct), o$3(this.lights.error), o$3(this.lights.nr), o$3(this.darks.x), o$3(this.darks.a), o$3(this.darks.l), o$3(this.darks.v), o$3(this.darks.p), o$3(this.darks.g), o$3(this.darks.w), o$3(this.darks.u), o$3(this.darks.chosen), o$3(this.darks.better), o$3(this.darks.worse), o$3(this.darks.even), o$3(this.darks.correct), o$3(this.darks.error), o$3(this.darks.nr))];
  }

}

let _$5 = t => t,
    _t$5,
    _t2$5;
/*
  CPTProbability element
  <cpt-probability>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    p: numeric [0, 1]
    g: numeric [0, 1]
    label: string

  Styles:
    ??
*/

class CPTProbability extends ProspectableElement {
  static get properties() {
    return {
      p: {
        attribute: 'probability',
        type: Number,
        reflect: true
      },
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true
      },
      label: {
        attribute: 'label',
        type: String,
        reflect: true
      },
      w: {
        attribute: false,
        type: Number,
        reflect: false
      },
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
    this.firstUpdate = true;
    this.drag = false;
    this.g = 0.5;
    this.p = null;
    this.label = '';
    this.function = 'default';
    this.functions = [{
      name: 'default',
      g: this.g
    }];
    this.probabilities = [{
      name: 'default',
      p: this.p,
      label: this.label,
      function: this.function
    }];
    this.xl = null;
    this.xw = null;
    this.pw = null;
    this.xs = null;
    this.trialCount = null;
    this.response = null;
    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;
    this.alignState();
  }

  alignState() {
    // Default function
    this.functions[0].g = this.g; // Default probabilities

    this.probabilities[0].p = this.p;
    this.probabilities[0].label = this.label;
    this.probabilities[0].function = this.function; // Update subjective decision weights

    this.probabilities.forEach(probability => {
      const myFunction = this.functions.find(func => {
        return func.name === probability.function;
      });
      probability.w = CPTMath.pg2w(probability.p, myFunction.g);
    });
    this.w = this.probabilities[0].w;
  }

  trial(xl, xw, pw, xs, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeProbability(`${this.trialCount}`);
    this.xl = xl;
    this.xw = xw;
    this.pw = pw;
    this.xs = xs;
    this.trialCount = trial;
    this.response = response; // Add the new trial

    this.setProbability(this.pw, `${this.trialCount}`, '', 'default', true);
  } // Called to pause trial animations!


  pauseTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.interrupt('new-1');
    lineNew.interrupt('new-2');
    lineNew.datum(datum => {
      datum.paused = true;
      return datum;
    });
  } // Called to resume trial animations!


  resumeTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.datum(datum => {
      datum.paused = false;
      return datum;
    });
    this.requestUpdate();
  }

  clearFunctions() {
    this.functions.splice(1);
    this.requestUpdate();
  }

  clearProbabilities() {
    this.probabilities.splice(1);
    this.requestUpdate();
  }

  clear() {
    this.clearFunctions();
    this.clearProbabilities();
  }

  removeFunction(name) {
    this.functions = this.functions.filter(func => {
      return func.name !== name;
    });
    this.requestUpdate();
  }

  removeProbability(name) {
    this.probabilities = this.probabilities.filter(probability => {
      return probability.name !== name;
    });
    this.requestUpdate();
  }

  remove(name) {
    this.removeFunction(name);
    this.removeProbability(name);
  }

  getFunction(name = 'default') {
    return this.functions.find(func => {
      return func.name === name;
    });
  }

  getProbability(name = 'default') {
    return this.probabilities.find(probability => {
      return probability.name === name;
    });
  }

  get(name = 'default') {
    return { ...this.getFunction(name),
      ...this.getProbability(name)
    };
  }

  setFunction(g, name = 'default') {
    if (name === 'default') {
      this.g = g;
    }

    const myFunction = this.functions.find(func => {
      return func.name === name;
    });

    if (myFunction === undefined) {
      this.functions.push({
        name: name,
        g: g
      });
    } else {
      myFunction.g = g;
    }

    this.requestUpdate();
  }

  setProbability(p, name = 'default', label = '', func = name, trial = false) {
    if (name === 'default') {
      this.p = p;
      this.label = label;
    }

    const myProbability = this.probabilities.find(probability => {
      return probability.name === name;
    });

    if (myProbability === undefined) {
      this.probabilities.push({
        name: name,
        p: p,
        label: label,
        function: func,
        trial: trial,
        new: trial
      });
    } else {
      myProbability.p = p;
      myProbability.label = label;
      myProbability.function = func;
    }

    this.requestUpdate();
  }

  set(p, g, name = 'default', label = '', func = name) {
    this.setFunction(g, func);
    this.setProbability(p, name, label, func);
  }

  static get styles() {
    return [super.styles, r$2(_t$5 || (_t$5 = _$5`
        :host {
          display: inline-block;

          width: 20rem;
          height: 20rem;
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

        .point.interactive {
          cursor: nesw-resize;

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
        .title-y {
          font-weight: 600;

          fill: currentColor;
        }

        .tick {
          font-size: 0.75rem;
        }

        .scale-x path,
        .scale-x line,
        .scale-y path,
        .scale-y line {
          stroke: var(---color-element-border);
        }

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .line-p,
        .line-w {
          fill: none;
          stroke-width: 2;
        }

        .line-p {
          stroke: var(---color-p);
        }

        .line-w {
          stroke: var(---color-w);
        }

        .point .circle {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: middle;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$5 || (_t2$5 = _$5`
      ${0}
    `), ProspectableElement.svgFilters);
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`cpt-value: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.alignState(); // Bail out if we can't get the width/height/rem

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
    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

    const xScale = linear().domain([0, 1]).range([0, width]).clamp(true);
    this.xScale = xScale; // Y Scale

    const yScale = linear().domain([1, 0]).range([0, height]);
    this.yScale = yScale; // Drag behaviors

    const curveDrag = drag().subject((event, datum) => {
      return {
        x: event.x,
        y: this.yScale(CPTMath.pg2w(this.xScale.invert(event.x), datum.g)),
        p: this.xScale.invert(event.x),
        g: datum.g,
        w: CPTMath.pg2w(this.xScale.invert(event.x), datum.g)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const p = this.xScale.invert(event.x);
      const w = this.yScale.invert(event.y);
      const pDiff = p - event.subject.p;
      const wDiff = w - event.subject.w;
      const distance = (pDiff ** 2 + wDiff ** 2) ** 0.5;
      const g = event.subject.p > event.subject.w ? pDiff > wDiff ? event.subject.g - distance : event.subject.g + distance : pDiff > wDiff ? event.subject.g + distance : event.subject.g - distance; // Clamp g to legal values [0, 1]

      datum.g = g > 1 ? 1 : g < 0 ? 0 : g;

      if (datum.name === 'default') {
        this.g = datum.g;
      }

      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('cpt-probability-change', {
        detail: this.get(datum.name),
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });
    const pointDrag = drag().subject((event, datum) => {
      return {
        x: this.xScale(datum.p),
        y: this.yScale(datum.w)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const p = this.xScale.invert(event.x); // Clamp p to visible plot

      datum.p = p < 0 ? 0 : p > 1 ? 1 : p;

      if (datum.name === 'default') {
        this.p = datum.p;
      }

      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('cpt-probability-change', {
        detail: {
          name: datum.name,
          p: datum.p,
          w: datum.w,
          label: datum.label,
          g: this.getFunction(datum.function).g
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }); // Line for value

    const line$1 = line().x(datum => {
      return xScale(datum.p);
    }).y(datum => {
      return yScale(datum.w);
    }); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); //  ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`); // Plot
    //  ENTER

    const plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`); // Clippath
    //  ENTER

    plotEnter.append('clipPath').attr('id', 'clip-cpt-value').append('rect'); //  MERGE

    plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1); // Underlayer
    //  ENTER

    const underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

    const underlayerMerge = plotMerge.select('.underlayer'); // Background
    //  ENTER

    underlayerEnter.append('rect').classed('background', true); //  MERGE

    underlayerMerge.select('.background').attr('height', height).attr('width', width); // X Axis/Scale
    //  ENTER

    underlayerEnter.append('g').classed('scale-x', true); //  MERGE

    const scaleXMerge = underlayerMerge.select('.scale-x').attr('transform', `translate(0, ${height})`);
    const scaleXTransition = scaleXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    scaleXTransition.selectAll('line, path').attr('stroke', null); // X Axis Title
    //  ENTER

    const titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
    titleXEnter.append('tspan').classed('name', true).text('Probability (');
    titleXEnter.append('tspan').classed('math-var p', true).text('p');
    titleXEnter.append('tspan').classed('name', true).text(')'); //  MERGE

    underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`); // Y Axis/Scale
    //  ENTER

    underlayerEnter.append('g').classed('scale-y', true); // MERGE

    const scaleYTransition = underlayerMerge.select('.scale-y').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
    scaleYTransition.selectAll('line, path').attr('stroke', null); // Y Axis Title
    //  ENTER

    const titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
    titleYEnter.append('tspan').classed('name', true).text('Decision Weight (');
    titleYEnter.append('tspan').classed('math-var v', true).text('w');
    titleYEnter.append('tspan').classed('name', true).text(')'); //  MERGE

    underlayerMerge.select('.title-y').attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`); // No-Subjectivity Line
    //  ENTER

    underlayerEnter.append('line').classed('diagonal', true); //  MERGE

    underlayerMerge.select('.diagonal').transition().duration(transitionDuration * 2) // Extra long transition!
    .attr('x1', xScale(0)).attr('y1', yScale(0)).attr('x2', xScale(1)).attr('y2', yScale(1)); // Content
    //  ENTER

    plotEnter.append('g').classed('content', true); //  MERGE

    const contentMerge = plotMerge.select('.content'); // Indicator lines
    //  DATA-JOIN

    const lineUpdate = contentMerge.selectAll('.lines').data(this.probabilities.filter(probability => {
      return probability.p != null;
    }), datum => {
      return datum.name;
    }); //  ENTER

    const lineEnter = lineUpdate.enter().append('g').classed('lines', true); //  ENTER - All

    lineEnter.each((datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      selection.append('line').classed('line-p above', true);
      selection.append('line').classed('line-p below', true);
      selection.append('line').classed('line-w before', true);
      selection.append('line').classed('line-w after', true);
    }); //  ENTER - Animating

    lineEnter.filter(datum => {
      return datum.new;
    }).attr('data-animating-ease-time-1', 0).attr('data-animating-ease-time-2', 0).each((datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      selection.select('.line-p.above').attr('x1', xScale(datum.p)).attr('x2', xScale(datum.p)).attr('y1', yScale(1)).attr('y2', yScale(1));
      selection.select('.line-p.below').attr('x1', xScale(datum.p)).attr('x2', xScale(datum.p)).attr('y1', yScale(0)).attr('y2', yScale(0));
      selection.select('.line-w.before').attr('x1', xScale(datum.p)).attr('x2', xScale(datum.p)).attr('y1', yScale(datum.w)).attr('y2', yScale(datum.w));
      selection.select('.line-w.after').attr('x1', xScale(datum.p)).attr('x2', xScale(datum.p)).attr('y1', yScale(datum.w)).attr('y2', yScale(datum.w));
    }); //  MERGE

    const lineMerge = lineEnter.merge(lineUpdate); //  MERGE - Active Animating

    const lineMergeActive = lineMerge.filter(datum => {
      return datum.new && !datum.paused;
    });

    if (!lineMergeActive.empty()) {
      const easeTime1 = lineMergeActive.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergeActive.attr('data-animating-ease-time-2');

      const scaleIn1 = time => {
        return linear().domain([0, 1]).range([easeTime1, 1])(time);
      };

      const scaleIn1Inverse = time => {
        return linear().range([0, 1]).domain([easeTime1, 1])(time);
      };

      const scaleIn2 = time => {
        return linear().domain([0, 1]).range([easeTime2, 1])(time);
      };

      const scaleIn2Inverse = time => {
        return linear().range([0, 1]).domain([easeTime2, 1])(time);
      };

      const scaleOutGenerator1 = easeFunction => {
        return time => {
          return linear().domain([easeFunction(easeTime1), 1]).range([0, 1])(easeFunction(time));
        };
      };

      const scaleOutGenerator2 = easeFunction => {
        return time => {
          return linear().domain([easeFunction(easeTime2), 1]).range([0, 1])(easeFunction(time));
        };
      };

      lineMergeActive.transition('new-1').duration(() => {
        return Math.floor(transitionDuration * (1 - easeTime1));
      }).ease(scaleIn1).attr('data-animating-ease-time-1', 1).tween('animating', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateP = interpolate$1(element.p !== undefined ? element.p : datum.p, datum.p);
        const interpolateG = interpolate$1(element.g !== undefined ? element.g : this.getFunction(datum.function).g, this.getFunction(datum.function).g);
        const interpolateAbove = interpolate$1(yScale.invert(selection.select('.line-p.above').attr('y1')), datum.w);
        const interpolateBelow = interpolate$1(yScale.invert(selection.select('.line-p.below').attr('y1')), datum.w);
        return time => {
          element.p = interpolateP(cubicOut(scaleIn1Inverse(time)));
          element.g = interpolateG(cubicOut(scaleIn1Inverse(time)));
          element.w = CPTMath.pg2w(element.p, element.g);
          selection.select('.line-p.above').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(interpolateAbove(scaleOutGenerator1(cubicIn)(time)))).attr('y2', yScale(1));
          selection.select('.line-p.below').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(interpolateBelow(scaleOutGenerator1(cubicIn)(time)))).attr('y2', yScale(0));
        };
      }).transition('new-2').duration(() => {
        return Math.floor(transitionDuration * (1 - easeTime2));
      }).ease(scaleIn2).attr('data-animating-ease-time-2', 1).tween('animating', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateP = interpolate$1(element.p !== undefined ? element.p : datum.p, datum.p);
        const interpolateG = interpolate$1(element.g !== undefined ? element.g : this.getFunction(datum.function).g, this.getFunction(datum.function).g);
        const interpolateBefore = interpolate$1(xScale.invert(selection.select('.line-w.before').attr('x1')), 0);
        const interpolateAfter = interpolate$1(xScale.invert(selection.select('.line-w.after').attr('x1')), 1);
        return time => {
          element.p = interpolateP(cubicOut(scaleIn2Inverse(time)));
          element.g = interpolateG(cubicOut(scaleIn2Inverse(time)));
          element.w = CPTMath.pg2w(element.p, element.g);
          selection.select('.line-w.before').attr('x1', xScale(interpolateBefore(scaleOutGenerator2(cubicOut)(time)))).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
          selection.select('.line-w.after').attr('x1', xScale(interpolateAfter(scaleOutGenerator2(cubicOut)(time)))).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
        };
      }).on('end', (datum, index, elements) => {
        const element = elements[index];
        element.removeAttribute('data-animating-ease-time-1');
        element.removeAttribute('data-animating-ease-time-2');
        datum.new = false;
        this.dispatchEvent(new CustomEvent('prospectable-response', {
          detail: {
            trial: this.trialCount,
            xl: this.xl,
            xw: this.xw,
            pw: this.pw,
            xs: this.xs,
            response: this.response
          },
          bubbles: true
        }));
      });
    } //  MERGE - Paused Animating


    const lineMergePaused = lineMerge.filter(datum => {
      return datum.new && datum.paused;
    });

    if (!lineMergePaused.empty()) {
      const easeTime1 = lineMergePaused.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergePaused.attr('data-animating-ease-time-2');
      lineMergePaused.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).tween('paused', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateP = interpolate$1(element.p !== undefined ? element.p : datum.p, datum.p);
        const interpolateG = interpolate$1(element.g !== undefined ? element.g : this.getFunction(datum.function).g, this.getFunction(datum.function).g);
        const interpolateAbove = interpolate$1(1, datum.w);
        const interpolateBelow = interpolate$1(0, datum.w);
        const interpolateBefore = interpolate$1(datum.p, 0);
        const interpolateAfter = interpolate$1(datum.p, 1);
        return time => {
          element.p = interpolateP(time);
          element.g = interpolateG(time);
          element.w = CPTMath.pg2w(element.p, element.g);
          selection.select('.line-p.above').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(interpolateAbove(cubicIn(easeTime1)))).attr('y2', yScale(1));
          selection.select('.line-p.below').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(interpolateBelow(cubicIn(easeTime1)))).attr('y2', yScale(0));
          selection.select('.line-w.before').attr('x1', xScale(interpolateBefore(cubicOut(easeTime2)))).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
          selection.select('.line-w.after').attr('x1', xScale(interpolateAfter(cubicOut(easeTime2)))).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
        };
      });
    } //  MERGE - Non-animating


    lineMerge.filter(datum => {
      return !datum.new;
    }).transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).tween('non-animating', (datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      const interpolateP = interpolate$1(element.p !== undefined ? element.p : datum.p, datum.p);
      const interpolateG = interpolate$1(element.g !== undefined ? element.g : this.getFunction(datum.function).g, this.getFunction(datum.function).g);
      return time => {
        element.p = interpolateP(time);
        element.g = interpolateG(time);
        element.w = CPTMath.pg2w(element.p, element.g);
        selection.select('.line-p.above').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(1));
        selection.select('.line-p.below').attr('x1', xScale(element.p)).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(0));
        selection.select('.line-w.before').attr('x1', xScale(0)).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
        selection.select('.line-w.after').attr('x1', xScale(1)).attr('x2', xScale(element.p)).attr('y1', yScale(element.w)).attr('y2', yScale(element.w));
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    lineUpdate.exit().remove(); // Probability Curve
    //  DATA-JOIN

    const curveUpdate = contentMerge.selectAll('.curve').data(this.functions, datum => {
      return datum.name;
    }); //  ENTER

    const curveEnter = curveUpdate.enter().append('path').classed('curve', true).attr('clip-path', 'url(#clip-cpt-value)'); //  MERGE

    const curveMerge = curveEnter.merge(curveUpdate);

    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curveMerge.attr('tabindex', 0).classed('interactive', true).call(curveDrag).on('keydown', (event, datum) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let g = datum.g;
            /* eslint-disable-line prefer-destructuring */

            switch (event.key) {
              case 'ArrowUp':
              case 'ArrowLeft':
                g += event.shiftKey ? 0.01 : 0.05;
                break;

              case 'ArrowDown':
              case 'ArrowRight':
                g -= event.shiftKey ? 0.01 : 0.05;
                break;

            } // Clamp g to legal values [0, 1]


            g = g < 0 ? 0 : g > 1 ? 1 : g;

            if (g !== datum.g) {
              datum.g = g;

              if (datum.name === 'default') {
                this.g = datum.g;
              }

              this.alignState();
              this.requestUpdate();
              this.dispatchEvent(new CustomEvent('cpt-probability-change', {
                detail: this.get(datum.name),
                bubbles: true
              }));
            }

            event.preventDefault();
          }
        });
      } else {
        curveMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
      }
    }

    curveMerge.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateG = interpolate$1(element.g !== undefined ? element.g : datum.g, datum.g);
      return time => {
        element.g = interpolateG(time);
        const curve = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(range => {
          return {
            p: xScale.invert(range),
            w: CPTMath.pg2w(xScale.invert(range), element.g)
          };
        });
        return line$1(curve);
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    curveUpdate.exit().remove(); // Point
    //  DATA-JOIN

    const pointUpdate = contentMerge.selectAll('.point').data(this.probabilities.filter(probability => {
      return probability.p != null;
    }), datum => {
      return datum.name;
    }); //  ENTER

    const pointEnter = pointUpdate.enter().append('g').classed('point', true);
    pointEnter.append('circle').classed('circle', true);
    pointEnter.append('text').classed('label', true); //  MERGE

    const pointMerge = pointEnter.merge(pointUpdate);
    pointMerge.select('text').text(datum => {
      return datum.label;
    }); // Interactive points

    pointMerge.filter(datum => {
      return (this.firstUpdate || changedProperties.has('interactive')) && this.interactive && !datum.trial;
    }).attr('tabindex', 0).classed('interactive', true).call(pointDrag).on('keydown', (event, datum) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let p = datum.p;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowRight':
            p += event.shiftKey ? 0.01 : 0.05;
            break;

          case 'ArrowDown':
          case 'ArrowLeft':
            p -= event.shiftKey ? 0.01 : 0.05;
            break;

        } // Clamp p to visible plot


        p = p < 0 ? 0 : p > 1 ? 1 : p;

        if (p !== datum.p) {
          datum.p = p;

          if (datum.name === 'default') {
            this.p = datum.p;
          }

          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('cpt-probability-change', {
            detail: {
              name: datum.name,
              p: datum.p,
              w: datum.w,
              label: datum.label,
              g: this.getFunction(datum.function).g
            },
            bubbles: true
          }));
        }

        event.preventDefault();
      }
    }); // Non-interactive points

    pointMerge.filter(datum => {
      return (this.firstUpdate || changedProperties.has('interactive')) && !this.interactive || datum.trial;
    }).attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null); // All points

    pointMerge.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('transform', (datum, index, elements) => {
      const element = elements[index];
      const interpolateP = interpolate$1(element.p !== undefined ? element.p : datum.p, datum.p);
      const interpolateG = interpolate$1(element.g !== undefined ? element.g : this.getFunction(datum.function).g, this.getFunction(datum.function).g);
      return time => {
        element.p = interpolateP(time);
        element.g = interpolateG(time);
        return `translate(
            ${xScale(element.p)},
            ${yScale(CPTMath.pg2w(element.p, element.g))}
          )`;
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    pointUpdate.exit().remove();
    this.drag = false; // this.sdt = false;

    this.firstUpdate = false;
  }

}
customElements.define('cpt-probability', CPTProbability);

let _$4 = t => t,
    _t$4,
    _t2$4;
/*
  CPTValue element
  <cpt-value>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    x: numeric (-infinity, infinity)
    a: numeric [0, 1]
    l: numeric [0, 100]
    label: string

  Styles:
    ??
*/

class CPTValue extends ProspectableElement {
  static get properties() {
    return {
      x: {
        attribute: 'value',
        type: Number,
        reflect: true
      },
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true
      },
      l: {
        attribute: 'lambda',
        type: Number,
        reflect: true
      },
      label: {
        attribute: 'label',
        type: String,
        reflect: true
      },
      v: {
        attribute: false,
        type: Number,
        reflect: false
      },
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
    this.firstUpdate = true;
    this.drag = false;
    this.a = 0.5;
    this.l = 2;
    this.x = null;
    this.label = '';
    this.function = 'default';
    this.functions = [{
      name: 'default',
      a: this.a,
      l: this.l
    }];
    this.values = [{
      name: 'default',
      x: this.x,
      label: this.label,
      function: this.function
    }];
    this.xl = null;
    this.xw = null;
    this.pw = null;
    this.xs = null;
    this.trialCount = null;
    this.response = null;
    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;
    this.alignState();
  }

  alignState() {
    // Default function
    this.functions[0].a = this.a;
    this.functions[0].l = this.l; // Default values

    this.values[0].x = this.x;
    this.values[0].label = this.label;
    this.values[0].function = this.function; // Update subjective values

    this.values.forEach(value => {
      const myFunction = this.functions.find(func => {
        return func.name === value.function;
      });
      value.v = CPTMath.xal2v(value.x, myFunction.a, myFunction.l);
    });
    this.v = this.values[0].v;
  }

  trial(xl, xw, pw, xs, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeValue(`${this.trialCount}-w`);
    if (this.trialCount) this.removeValue(`${this.trialCount}-s`);
    this.xl = xl;
    this.xw = xw;
    this.pw = pw;
    this.xs = xs;
    this.trialCount = trial;
    this.response = response; // Add the new trial

    this.setValue(this.xw, `${this.trialCount}-w`, 'g', 'default', true);
    this.setValue(this.xs, `${this.trialCount}-s`, 's', 'default', true);
  } // Called to pause trial animations!


  pauseTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.interrupt('new-1');
    lineNew.interrupt('new-2');
    lineNew.datum(datum => {
      datum.paused = true;
      return datum;
    });
  } // Called to resume trial animations!


  resumeTrial() {
    const lineNew = select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.datum(datum => {
      datum.paused = false;
      return datum;
    });
    this.requestUpdate();
  }

  clearFunctions() {
    this.functions.splice(1);
    this.requestUpdate();
  }

  clearValues() {
    this.values.splice(1);
    this.requestUpdate();
  }

  clear() {
    this.clearFunctions();
    this.clearValues();
  }

  removeFunction(name) {
    this.functions = this.functions.filter(func => {
      return func.name !== name;
    });
    this.requestUpdate();
  }

  removeValue(name) {
    this.values = this.values.filter(value => {
      return value.name !== name;
    });
    this.requestUpdate();
  }

  remove(name) {
    this.removeFunction(name);
    this.removeValue(name);
  }

  getFunction(name = 'default') {
    return this.functions.find(func => {
      return func.name === name;
    });
  }

  getValue(name = 'default') {
    return this.values.find(value => {
      return value.name === name;
    });
  }

  get(name = 'default') {
    return { ...this.getFunction(name),
      ...this.getValue(name)
    };
  }

  setFunction(a, l, name = 'default') {
    if (name === 'default') {
      this.a = a;
      this.l = l;
    }

    const myFunction = this.functions.find(func => {
      return func.name === name;
    });

    if (myFunction === undefined) {
      this.functions.push({
        name: name,
        a: a,
        l: l
      });
    } else {
      myFunction.a = a;
      myFunction.l = l;
    }

    this.requestUpdate();
  }

  setValue(x, name = 'default', label = '', func = name, trial = false) {
    if (name === 'default') {
      this.x = x;
      this.label = label;
    }

    const myValue = this.values.find(value => {
      return value.name === name;
    });

    if (myValue === undefined) {
      this.values.push({
        name: name,
        x: x,
        label: label,
        function: func,
        trial: trial,
        new: trial
      });
    } else {
      myValue.x = x;
      myValue.label = label;
      myValue.function = func;
    }

    this.requestUpdate();
  }

  set(x, a, l, name = 'default', label = '', func = name) {
    this.setFunction(a, l, func);
    this.setValue(x, name, label, func);
  }

  static get styles() {
    return [super.styles, r$2(_t$4 || (_t$4 = _$4`
        :host {
          display: inline-block;

          width: 20rem;
          height: 20rem;
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

        .curve-p.interactive,
        .curve-n.interactive {
          cursor: nwse-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .curve-p.interactive:hover,
        .curve-n.interactive:hover {
          filter: url("#shadow-4");
        }

        .curve-p.interactive:active,
        .curve-n.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .curve-p.interactive:focus,
        :host(.keyboard) .curve-n.interactive:focus {
          filter: url("#shadow-8");
        }

        .point.interactive {
          cursor: nesw-resize;

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
        .title-y {
          font-weight: 600;

          fill: currentColor;
        }

        .tick {
          font-size: 0.75rem;
        }

        .scale-x path,
        .scale-x line,
        .scale-y path,
        .scale-y line {
          stroke: var(---color-element-border);
        }

        .axis-x,
        .axis-y {
          stroke: var(---color-element-border);
          shape-rendering: crispEdges;
        }

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve-p,
        .curve-n {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .line-x,
        .line-v {
          fill: none;
          stroke-width: 2;
        }

        .line-x {
          stroke: var(---color-x);
        }

        .line-v {
          stroke: var(---color-v);
        }

        .point .circle {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: middle;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$4 || (_t2$4 = _$4`
      ${0}
    `), ProspectableElement.svgFilters);
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`cpt-value: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.alignState(); // Bail out if we can't get the width/height/rem

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
    const domainScale = 20; // X Scale

    const xScale = linear().domain([-domainScale, domainScale]).range([0, width]);
    this.xScale = xScale; // Y Scale

    const yScale = linear().domain([domainScale, -domainScale]).range([0, height]);
    this.yScale = yScale; // Drag behaviors

    const curvePDrag = drag().subject((event, datum) => {
      return {
        x: event.x,
        y: this.yScale(CPTMath.xal2v(this.xScale.invert(event.x), datum.a, datum.l))
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const x = this.xScale.invert(event.x);
      const v = this.yScale.invert(event.y);
      const a = CPTMath.xlv2a(x, datum.l, v); // Clamp a to legal values [0, 1]

      datum.a = Number.isNaN(a) || a < 0 || a > 1 || x < 0 || v < 0 ? x > v ? 0 : 1 : a;

      if (datum.name === 'default') {
        this.a = datum.a;
      }

      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('cpt-value-change', {
        detail: this.get(datum.name),
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });
    const curveNDrag = drag().subject((event, datum) => {
      return {
        x: event.x,
        y: this.yScale(CPTMath.xal2v(this.xScale.invert(event.x), datum.a, datum.l))
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const x = this.xScale.invert(event.x);
      const v = this.yScale.invert(event.y);
      const l = CPTMath.xav2l(x, datum.a, v); // Clamp l to legal values [0, ?

      datum.l = Number.isNaN(l) || l < 0 || l > 100 || x > 0 || v > 0 ? x > v ? 100 : 0 : l;

      if (datum.name === 'default') {
        this.l = datum.l;
      }

      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('cpt-value-change', {
        detail: this.get(datum.name),
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    });
    const pointDrag = drag().subject((event, datum) => {
      return {
        x: this.xScale(datum.x),
        y: this.yScale(datum.v)
      };
    }).on('start', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      this.drag = true;
      const x = this.xScale.invert(event.x); // Clamp x to visible plot

      datum.x = x < -domainScale ? -domainScale : x > domainScale ? domainScale : x;

      if (datum.name === 'default') {
        this.x = datum.x;
      }

      this.alignState();
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent('cpt-value-change', {
        detail: {
          name: datum.name,
          x: datum.x,
          v: datum.v,
          label: datum.label,
          a: this.getFunction(datum.function).a,
          l: this.getFunction(datum.function).l
        },
        bubbles: true
      }));
    }).on('end', event => {
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }); // Line for value

    const line$1 = line().x(datum => {
      return xScale(datum.x);
    }).y(datum => {
      return yScale(datum.v);
    }); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); //  ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`); // Plot
    //  ENTER

    const plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

    const plotMerge = svgMerge.select('.plot').attr('transform', `translate(${margin.left}, ${margin.top})`); // Clippath
    //  ENTER

    plotEnter.append('clipPath').attr('id', 'clip-cpt-value').append('rect'); //  MERGE

    plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1); // Underlayer
    //  ENTER

    const underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

    const underlayerMerge = plotMerge.select('.underlayer'); // Background
    //  ENTER

    underlayerEnter.append('rect').classed('background', true); //  MERGE

    underlayerMerge.select('.background').attr('height', height).attr('width', width); // X Scale
    //  ENTER

    underlayerEnter.append('g').classed('scale-x', true); //  MERGE

    const scaleXMerge = underlayerMerge.select('.scale-x').attr('transform', `translate(0, ${yScale(-domainScale)})`);
    const scaleXTransition = scaleXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
    scaleXTransition.selectAll('line, path').attr('stroke', null); // X Axis
    //  ENTER

    underlayerEnter.append('line').classed('axis-x', true); //  MERGE

    underlayerMerge.select('.axis-x').transition().duration(transitionDuration).ease(cubicOut).attr('x1', xScale(-domainScale)).attr('x2', xScale(domainScale)).attr('y1', yScale(0)).attr('y2', yScale(0)); // X Axis Title
    //  ENTER

    const titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
    titleXEnter.append('tspan').classed('name', true).text('Objective Value (');
    titleXEnter.append('tspan').classed('math-var x', true).text('x');
    titleXEnter.append('tspan').classed('name', true).text(')'); //  MERGE

    underlayerMerge.select('.title-x').attr('transform', `translate(${width / 2}, ${height + 2.25 * this.rem})`); // Y Scale
    //  ENTER

    underlayerEnter.append('g').classed('scale-y', true); // MERGE

    const scaleYTransition = underlayerMerge.select('.scale-y').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
    scaleYTransition.selectAll('line, path').attr('stroke', null); // Y Axis
    //  ENTER

    underlayerEnter.append('line').classed('axis-y', true); //  MERGE

    underlayerMerge.select('.axis-y').transition().duration(transitionDuration).ease(cubicOut).attr('x1', xScale(0)).attr('x2', xScale(0)).attr('y1', yScale(domainScale)).attr('y2', yScale(-domainScale)); // Y Axis Title
    //  ENTER

    const titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
    titleYEnter.append('tspan').classed('name', true).text('Subjective Value (');
    titleYEnter.append('tspan').classed('math-var v', true).text('v');
    titleYEnter.append('tspan').classed('name', true).text(')'); //  MERGE

    underlayerMerge.select('.title-y').attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`); // No-Subjectivity Line
    //  ENTER

    underlayerEnter.append('line').classed('diagonal', true); //  MERGE

    underlayerMerge.select('.diagonal').transition().duration(transitionDuration * 2) // Extra long transition!
    .ease(cubicOut).attr('x1', xScale(-domainScale)).attr('y1', yScale(-domainScale)).attr('x2', xScale(domainScale)).attr('y2', yScale(domainScale)); // Content
    //  ENTER

    plotEnter.append('g').classed('content', true); //  MERGE

    const contentMerge = plotMerge.select('.content'); // Indicator lines
    //  DATA-JOIN

    const lineUpdate = contentMerge.selectAll('.lines').data(this.values.filter(value => {
      return value.x != null;
    }), datum => {
      return datum.name;
    }); //  ENTER

    const lineEnter = lineUpdate.enter().append('g').classed('lines', true); //  ENTER - All

    lineEnter.each((datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      selection.append('line').classed('line-x above', true);
      selection.append('line').classed('line-x below', true);
      selection.append('line').classed('line-v before', true);
      selection.append('line').classed('line-v after', true);
    }); //  ENTER - Animating

    lineEnter.filter(datum => {
      return datum.new;
    }).attr('data-animating-ease-time-1', 0).attr('data-animating-ease-time-2', 0).each((datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      selection.select('.line-x.above').attr('x1', xScale(datum.x)).attr('x2', xScale(datum.x)).attr('y1', yScale(domainScale)).attr('y2', yScale(domainScale));
      selection.select('.line-x.below').attr('x1', xScale(datum.x)).attr('x2', xScale(datum.x)).attr('y1', yScale(-domainScale)).attr('y2', yScale(-domainScale));
      selection.select('.line-v.before').attr('x1', xScale(datum.x)).attr('x2', xScale(datum.x)).attr('y1', yScale(datum.v)).attr('y2', yScale(datum.v));
      selection.select('.line-v.after').attr('x1', xScale(datum.x)).attr('x2', xScale(datum.x)).attr('y1', yScale(datum.v)).attr('y2', yScale(datum.v));
    }); //  MERGE

    const lineMerge = lineEnter.merge(lineUpdate); //  MERGE - Active Animating

    const lineMergeActive = lineMerge.filter(datum => {
      return datum.new && !datum.paused;
    });

    if (!lineMergeActive.empty()) {
      const easeTime1 = lineMergeActive.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergeActive.attr('data-animating-ease-time-2');

      const scaleIn1 = time => {
        return linear().domain([0, 1]).range([easeTime1, 1])(time);
      };

      const scaleIn1Inverse = time => {
        return linear().range([0, 1]).domain([easeTime1, 1])(time);
      };

      const scaleIn2 = time => {
        return linear().domain([0, 1]).range([easeTime2, 1])(time);
      };

      const scaleIn2Inverse = time => {
        return linear().range([0, 1]).domain([easeTime2, 1])(time);
      };

      const scaleOutGenerator1 = easeFunction => {
        return time => {
          return linear().domain([easeFunction(easeTime1), 1]).range([0, 1])(easeFunction(time));
        };
      };

      const scaleOutGenerator2 = easeFunction => {
        return time => {
          return linear().domain([easeFunction(easeTime2), 1]).range([0, 1])(easeFunction(time));
        };
      };

      lineMergeActive.transition('new-1').duration(() => {
        return Math.floor(transitionDuration * (1 - easeTime1));
      }).ease(scaleIn1).attr('data-animating-ease-time-1', 1).tween('animating', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateX = interpolate$1(element.x !== undefined ? element.x : datum.x, datum.x);
        const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.getFunction(datum.function).a, this.getFunction(datum.function).a);
        const interpolateL = interpolate$1(element.l !== undefined ? element.l : this.getFunction(datum.function).l, this.getFunction(datum.function).l);
        const interpolateAbove = interpolate$1(yScale.invert(selection.select('.line-x.above').attr('y1')), datum.v);
        const interpolateBelow = interpolate$1(yScale.invert(selection.select('.line-x.below').attr('y1')), datum.v);
        return time => {
          element.x = interpolateX(cubicOut(scaleIn1Inverse(time)));
          element.a = interpolateA(cubicOut(scaleIn1Inverse(time)));
          element.l = interpolateL(cubicOut(scaleIn1Inverse(time)));
          element.v = CPTMath.xal2v(element.x, element.a, element.l);
          selection.select('.line-x.above').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(interpolateAbove(scaleOutGenerator1(cubicIn)(time)))).attr('y2', yScale(domainScale));
          selection.select('.line-x.below').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(interpolateBelow(scaleOutGenerator1(cubicIn)(time)))).attr('y2', yScale(-domainScale));
        };
      }).transition('new-2').duration(() => {
        return Math.floor(transitionDuration * (1 - easeTime2));
      }).ease(scaleIn2).attr('data-animating-ease-time-2', 1).tween('animating', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateX = interpolate$1(element.x !== undefined ? element.x : datum.x, datum.x);
        const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.getFunction(datum.function).a, this.getFunction(datum.function).a);
        const interpolateL = interpolate$1(element.l !== undefined ? element.l : this.getFunction(datum.function).l, this.getFunction(datum.function).l);
        const interpolateBefore = interpolate$1(xScale.invert(selection.select('.line-v.before').attr('x1')), -domainScale);
        const interpolateAfter = interpolate$1(xScale.invert(selection.select('.line-v.after').attr('x1')), domainScale);
        return time => {
          element.x = interpolateX(cubicOut(scaleIn2Inverse(time)));
          element.a = interpolateA(cubicOut(scaleIn2Inverse(time)));
          element.l = interpolateL(cubicOut(scaleIn2Inverse(time)));
          element.v = CPTMath.xal2v(element.x, element.a, element.l);
          selection.select('.line-v.before').attr('x1', xScale(interpolateBefore(scaleOutGenerator2(cubicOut)(time)))).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
          selection.select('.line-v.after').attr('x1', xScale(interpolateAfter(scaleOutGenerator2(cubicOut)(time)))).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
        };
      }).on('end', (datum, index, elements) => {
        const element = elements[index];
        element.removeAttribute('data-animating-ease-time-1');
        element.removeAttribute('data-animating-ease-time-2');
        datum.new = false;
        this.dispatchEvent(new CustomEvent('prospectable-response', {
          detail: {
            trial: this.trialCount,
            xl: this.xl,
            xw: this.xw,
            pw: this.pw,
            xs: this.xs,
            response: this.response
          },
          bubbles: true
        }));
      });
    } //  MERGE - Paused Animating


    const lineMergePaused = lineMerge.filter(datum => {
      return datum.new && datum.paused;
    });

    if (!lineMergePaused.empty()) {
      const easeTime1 = lineMergePaused.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergePaused.attr('data-animating-ease-time-2');
      lineMergePaused.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).tween('paused', (datum, index, elements) => {
        const element = elements[index];
        const selection = select(element);
        const interpolateX = interpolate$1(element.x !== undefined ? element.x : datum.x, datum.x);
        const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.getFunction(datum.function).a, this.getFunction(datum.function).a);
        const interpolateL = interpolate$1(element.l !== undefined ? element.l : this.getFunction(datum.function).l, this.getFunction(datum.function).l);
        const interpolateAbove = interpolate$1(domainScale, datum.v);
        const interpolateBelow = interpolate$1(-domainScale, datum.v);
        const interpolateBefore = interpolate$1(datum.x, -domainScale);
        const interpolateAfter = interpolate$1(datum.x, domainScale);
        return time => {
          element.x = interpolateX(time);
          element.a = interpolateA(time);
          element.l = interpolateL(time);
          element.v = CPTMath.xal2v(element.x, element.a, element.l);
          selection.select('.line-x.above').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(interpolateAbove(cubicIn(easeTime1)))).attr('y2', yScale(domainScale));
          selection.select('.line-x.below').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(interpolateBelow(cubicIn(easeTime1)))).attr('y2', yScale(-domainScale));
          selection.select('.line-v.before').attr('x1', xScale(interpolateBefore(cubicOut(easeTime2)))).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
          selection.select('.line-v.after').attr('x1', xScale(interpolateAfter(cubicOut(easeTime2)))).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
        };
      });
    } //  MERGE - Non-animating


    lineMerge.filter(datum => {
      return !datum.new;
    }).transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).tween('non-animating', (datum, index, elements) => {
      const element = elements[index];
      const selection = select(element);
      const interpolateX = interpolate$1(element.x !== undefined ? element.x : datum.x, datum.x);
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.getFunction(datum.function).a, this.getFunction(datum.function).a);
      const interpolateL = interpolate$1(element.l !== undefined ? element.l : this.getFunction(datum.function).l, this.getFunction(datum.function).l);
      return time => {
        element.x = interpolateX(time);
        element.a = interpolateA(time);
        element.l = interpolateL(time);
        element.v = CPTMath.xal2v(element.x, element.a, element.l);
        selection.select('.line-x.above').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(domainScale));
        selection.select('.line-x.below').attr('x1', xScale(element.x)).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(-domainScale));
        selection.select('.line-v.before').attr('x1', xScale(-domainScale)).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
        selection.select('.line-v.after').attr('x1', xScale(domainScale)).attr('x2', xScale(element.x)).attr('y1', yScale(element.v)).attr('y2', yScale(element.v));
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    lineUpdate.exit().remove(); // Positive Value Curve
    //  DATA-JOIN

    const curvePUpdate = contentMerge.selectAll('.curve-p').data(this.functions, datum => {
      return datum.name;
    }); //  ENTER

    const curvePEnter = curvePUpdate.enter().append('path').classed('curve-p', true).attr('clip-path', 'url(#clip-cpt-value)'); //  MERGE

    const curvePMerge = curvePEnter.merge(curvePUpdate);

    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curvePMerge.attr('tabindex', 0).classed('interactive', true).call(curvePDrag).on('keydown', (event, datum) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let a = datum.a;
            /* eslint-disable-line prefer-destructuring */

            switch (event.key) {
              case 'ArrowUp':
              case 'ArrowLeft':
                a += event.shiftKey ? 0.01 : 0.05;
                break;

              case 'ArrowDown':
              case 'ArrowRight':
                a -= event.shiftKey ? 0.01 : 0.05;
                break;

            } // Clamp a to legal values [0, 1]


            a = a < 0 ? 0 : a > 1 ? 1 : a;

            if (a !== datum.a) {
              datum.a = a;

              if (datum.name === 'default') {
                this.a = datum.a;
              }

              this.alignState();
              this.requestUpdate();
              this.dispatchEvent(new CustomEvent('cpt-value-change', {
                detail: this.get(datum.name),
                bubbles: true
              }));
            }

            event.preventDefault();
          }
        });
      } else {
        curvePMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
      }
    }

    curvePMerge.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : datum.a, datum.a);
      const interpolateL = interpolate$1(element.l !== undefined ? element.l : datum.l, datum.l);
      return time => {
        element.a = interpolateA(time);
        element.l = interpolateL(time);
        const curveP = range(xScale(0), xScale.range()[1] + 1, 1).map(range => {
          return {
            x: xScale.invert(range),
            v: CPTMath.xal2v(xScale.invert(range), element.a, element.l)
          };
        });
        return line$1(curveP);
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    curvePUpdate.exit().remove(); // Negative Value Curve
    //  DATA-JOIN

    const curveNUpdate = contentMerge.selectAll('.curve-n').data(this.functions, datum => {
      return datum.name;
    }); //  ENTER

    const curveNEnter = curveNUpdate.enter().append('path').classed('curve-n', true).attr('clip-path', 'url(#clip-cpt-value)'); //  MERGE

    const curveNMerge = curveNEnter.merge(curveNUpdate);

    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curveNMerge.attr('tabindex', 0).classed('interactive', true).call(curveNDrag).on('keydown', (event, datum) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
            let l = datum.l;
            /* eslint-disable-line prefer-destructuring */

            switch (event.key) {
              case 'ArrowUp':
              case 'ArrowLeft':
                l -= event.shiftKey ? 0.01 : 0.05;
                break;

              case 'ArrowDown':
              case 'ArrowRight':
                l += event.shiftKey ? 0.01 : 0.05;
                break;

            } // Clamp l to legal values [0, ?


            l = l < 0 ? 0 : l > 100 ? 100 : l;

            if (l !== datum.l) {
              datum.l = l;

              if (datum.name === 'default') {
                this.l = datum.l;
              }

              this.alignState();
              this.requestUpdate();
              this.dispatchEvent(new CustomEvent('cpt-value-change', {
                detail: this.get(datum.name),
                bubbles: true
              }));
            }

            event.preventDefault();
          }
        });
      } else {
        curveNMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
      }
    }

    curveNMerge.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('d', (datum, index, elements) => {
      const element = elements[index];
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : datum.a, datum.a);
      const interpolateL = interpolate$1(element.l !== undefined ? element.l : datum.l, datum.l);
      return time => {
        element.a = interpolateA(time);
        element.l = interpolateL(time);
        const curveN = range(xScale.range()[0], xScale(0) + 1, 1).map(range => {
          return {
            x: xScale.invert(range),
            v: CPTMath.xal2v(xScale.invert(range), element.a, element.l)
          };
        });
        return line$1(curveN);
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    curveNUpdate.exit().remove(); // Point
    //  DATA-JOIN

    const pointUpdate = contentMerge.selectAll('.point').data(this.values.filter(value => {
      return value.x != null;
    }), datum => {
      return datum.name;
    }); //  ENTER

    const pointEnter = pointUpdate.enter().append('g').classed('point', true);
    pointEnter.append('circle').classed('circle', true);
    pointEnter.append('text').classed('label', true); //  MERGE

    const pointMerge = pointEnter.merge(pointUpdate);
    pointMerge.select('text').text(datum => {
      return datum.label;
    }); // Interactive points

    pointMerge.filter(datum => {
      return (this.firstUpdate || changedProperties.has('interactive')) && this.interactive && !datum.trial;
    }).attr('tabindex', 0).classed('interactive', true).call(pointDrag).on('keydown', (event, datum) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
        let x = datum.x;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowRight':
            x += event.shiftKey ? 0.2 : 1;
            break;

          case 'ArrowDown':
          case 'ArrowLeft':
            x -= event.shiftKey ? 0.2 : 1;
            break;

        } // Clamp x to visible plot


        x = x < -domainScale ? -domainScale : x > domainScale ? domainScale : x;

        if (x !== datum.x) {
          datum.x = x;

          if (datum.name === 'default') {
            this.x = datum.x;
          }

          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('cpt-value-change', {
            detail: {
              name: datum.name,
              x: datum.x,
              v: datum.v,
              label: datum.label,
              a: this.getFunction(datum.function).a,
              l: this.getFunction(datum.function).l
            },
            bubbles: true
          }));
        }

        event.preventDefault();
      }
    }); // Non-interactive points

    pointMerge.filter(datum => {
      return (this.firstUpdate || changedProperties.has('interactive')) && !this.interactive || datum.trial;
    }).attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null); // All points

    pointMerge.transition().duration(this.drag ? 0 : this.firstUpdate ? transitionDuration * 2 : transitionDuration).ease(cubicOut).attrTween('transform', (datum, index, elements) => {
      const element = elements[index];
      const interpolateX = interpolate$1(element.x !== undefined ? element.x : datum.x, datum.x);
      const interpolateA = interpolate$1(element.a !== undefined ? element.a : this.getFunction(datum.function).a, this.getFunction(datum.function).a);
      const interpolateL = interpolate$1(element.l !== undefined ? element.l : this.getFunction(datum.function).l, this.getFunction(datum.function).l);
      return time => {
        element.x = interpolateX(time);
        element.a = interpolateA(time);
        element.l = interpolateL(time);
        return `translate(
            ${xScale(element.x)},
            ${yScale(CPTMath.xal2v(element.x, element.a, element.l))}
          )`;
      };
    }); //  EXIT
    // NOTE: Could add a transition here

    pointUpdate.exit().remove();
    this.drag = false; // this.sdt = false;

    this.firstUpdate = false;
  }

}
customElements.define('cpt-value', CPTValue);

let _$3 = t => t,
    _t$3,
    _t2$3;
/*
  RiskyOption element
  <risky-option>

  Attributes:
  Win, Loss, Probability
*/

class RiskyOption extends ProspectableElement {
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
    super(); // Properties

    this.width = NaN; // Width of component in pixels

    this.height = NaN; // Height of component in pixels

    this.rem = NaN; // Pixels per rem for component
  }

  static get styles() {
    return [super.styles, r$2(_t$3 || (_t$3 = _$3`
        :host {
          --decidables-spinner-font-size: 1.75rem;
          --decidables-spinner-input-width: 4rem;
          --decidables-spinner-prefix: "$";

          display: inline-block;

          width: 10rem;
          height: 10rem;
        }

        .main {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .outline {
          fill: var(---color-element-background);
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .arc {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .arc.interactive {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .arc.interactive:hover {
          filter: url("#shadow-4");
        }

        .arc.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .arc.interactive:focus {
          filter: url("#shadow-8");
        }

        .arc.win {
          fill: var(---color-better-light);
        }

        .arc.loss {
          fill: var(---color-worse-light);
        }

        .arc.sure {
          fill: var(---color-even-light);
        }

        .label.static {
          font-size: 1.75rem;

          user-select: none;

          dominant-baseline: middle;
          text-anchor: middle;
        }

        .label.interactive {
          width: var(--decidables-spinner-input-width);
          height: calc(var(--decidables-spinner-font-size) * 1.5);
          overflow: visible;
        }

        /* HACK: Get Safari to work with SVG foreignObject */
        /* https://stackoverflow.com/questions/51313873/svg-foreignobject-not-working-properly-on-safari */
        /* https://bugs.webkit.org/show_bug.cgi?id=23113 */
        .label.interactive decidables-spinner {
          position: fixed;
        }

        .label.interactive.win decidables-spinner {
          background-color: var(---color-better-light);
        }

        .label.interactive.loss decidables-spinner {
          background-color: var(---color-worse-light);
        }

        .label.interactive.sure decidables-spinner {
          background-color: var(---color-even-light);
        }
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$3 || (_t2$3 = _$3`
      ${0}
      <slot></slot>
    `), ProspectableElement.svgFilters);
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`rdk-task: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this)); // Detect and update on changes in children

    this.observer = new MutationObserver(mutations => {
      if (mutations.some(mutation => {
        return mutation.type === 'childList' || mutation.type === 'attributes' && mutation.target !== this;
      })) {
        this.requestUpdate();
      }
    });
    this.observer.observe(this, {
      subtree: true,
      childList: true,
      attributes: true
    });
  }

  disconnectedCallback() {
    this.observer.disconnect();
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // Get the width and height after initial render/update has occurred

    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties); // Bail out if we can't get the width/height/rem

    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const elementWidth = this.width;
    const elementHeight = this.height;
    const elementSize = Math.min(elementWidth, elementHeight);
    const margin = {
      top: 0,
      // 0.25 * this.rem,
      bottom: 0,
      // 0.25 * this.rem,
      left: 0,
      // 0.25 * this.rem,
      right: 0 // 0.25 * this.rem,

    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right); // Get outcomes from slots!

    const riskyOutcomes = this.querySelectorAll('risky-outcome');
    const pCorrection = riskyOutcomes.length ? -riskyOutcomes[0].p : 0;
    const arcs = pie().startAngle(pCorrection * Math.PI - Math.PI).endAngle(pCorrection * Math.PI + Math.PI).sortValues(null) // Use inserted order!
    .value(datum => {
      return datum.p;
    })(riskyOutcomes);
    const arcsStatic = arcs.filter(arc => {
      return !arc.data.interactive;
    });
    const arcsInteractive = arcs.filter(arc => {
      return arc.data.interactive;
    }); // Define drag behavior for arcs

    function fixAngle(angle) {
      const modAngle = (angle + 2 * Math.PI) % (2 * Math.PI);
      const newAngle = modAngle > Math.PI ? modAngle - 2 * Math.PI : modAngle < -Math.PI ? modAngle + 2 * Math.PI : modAngle;
      return newAngle;
    }

    const arcDrag = drag().subject((event, datum) => {
      const arcAngle = fixAngle((datum.endAngle + datum.startAngle) / 2);
      const dragAngle = fixAngle(Math.atan2(event.y, event.x) + Math.PI / 2);
      riskyOutcomes.forEach(item => {
        item.startP = item.p;
      });
      return {
        arcAngle: arcAngle,
        startAngle: fixAngle(dragAngle - arcAngle)
      };
    }).on('start', (event, datum) => {
      if (!datum.data.interactive) return;
      const element = event.currentTarget;
      select(element).classed('dragging', true);
    }).on('drag', (event, datum) => {
      if (!datum.data.interactive) return;
      const angle = fixAngle(Math.atan2(event.y, event.x) + Math.PI / 2);
      const currentAngle = fixAngle(angle - event.subject.arcAngle);
      const changeAngle = fixAngle(event.subject.startAngle > 0 ? currentAngle - event.subject.startAngle : event.subject.startAngle - currentAngle);
      const changeP = changeAngle / Math.PI;
      const proposedP = datum.data.startP + changeP;
      const newP = proposedP > 0.99 ? 0.99 : proposedP < 0.01 ? 0.01 : proposedP;
      riskyOutcomes.forEach(item => {
        item.p = item === datum.data ? newP : item.startP / (1 - datum.data.startP) * (1 - newP);
      });
      this.dispatchEvent(new CustomEvent('risky-outcome-change', {
        detail: {
          x: datum.data.x,
          p: datum.data.p,
          name: datum.data.name
        },
        bubbles: true
      })); // console.log(`x: ${event.x}, y: ${event.y}`);
      // console.log(`change: ${changeAngle}, changeP: ${changeP}`);
    }).on('end', (event, datum) => {
      if (!datum.data.interactive) return;
      const element = event.currentTarget;
      select(element).classed('dragging', false);
    }); // Svg
    //  DATA-JOIN

    const svgUpdate = select(this.renderRoot).selectAll('.main').data([{
      width: this.width,
      height: this.height,
      rem: this.rem
    }]); //  ENTER

    const svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

    const svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', `0 0 ${elementSize} ${elementSize}`); // Pie
    //  ENTER

    const pieEnter = svgEnter.append('g').classed('pie', true); //  MERGE

    const pieMerge = svgMerge.select('.pie').attr('transform', `translate(${width / 2}, ${height / 2})`); // Outline
    //  ENTER

    pieEnter.append('circle').classed('outline', true); //  MERGE

    pieMerge.select('.outline').attr('r', Math.min(width, height) / 2 - 1); // Arcs
    //  DATA-JOIN

    const arcUpdate = pieMerge.selectAll('.arc').data(arcs); //  ENTER

    const arcEnter = arcUpdate.enter().append('path').call(arcDrag).on('keydown', (event, datum) => {
      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        const startP = datum.data.p;
        let proposedP = datum.data.p;
        /* eslint-disable-line prefer-destructuring */

        switch (event.key) {
          case 'ArrowUp':
            proposedP -= event.shiftKey ? 0.01 : 0.05;
            break;

          case 'ArrowDown':
            proposedP += event.shiftKey ? 0.01 : 0.05;
            break;

        }

        const newP = proposedP > 0.99 ? 0.99 : proposedP < 0.01 ? 0.01 : proposedP;
        riskyOutcomes.forEach(item => {
          item.p = item === datum.data ? newP : item.p / (1 - startP) * (1 - newP);
        });
        this.dispatchEvent(new CustomEvent('risky-outcome-change', {
          detail: {
            x: datum.data.x,
            p: datum.data.p,
            name: datum.data.name
          },
          bubbles: true
        }));
        event.preventDefault();
      }
    }); //  MERGE

    arcEnter.merge(arcUpdate).attr('tabindex', datum => {
      return arcsInteractive.includes(datum) && arcs.length > 1 ? 0 : null;
    }).attr('class', datum => {
      return `arc ${datum.data.name}`;
    }).classed('interactive', datum => {
      return arcsInteractive.includes(datum) && arcs.length > 1;
    }).attr('d', arc().innerRadius(0).outerRadius(Math.min(width, height) / 2 - 1)); //  EXIT

    arcUpdate.exit().remove(); // Labels
    //  DATA-JOIN

    const labelStaticUpdate = pieMerge.selectAll('.label.static').data(arcsStatic);
    const labelInteractiveUpdate = pieMerge.selectAll('.label.interactive').data(arcsInteractive); //  ENTER

    const labelStaticEnter = labelStaticUpdate.enter().append('text');
    const labelInteractiveEnter = labelInteractiveUpdate.enter().append('foreignObject');
    labelInteractiveEnter.append('xhtml:decidables-spinner').on('input', (event, datum) => {
      datum.data.x = parseFloat(event.target.value);
      this.dispatchEvent(new CustomEvent('risky-outcome-change', {
        detail: {
          x: datum.data.x,
          p: datum.data.p,
          name: datum.data.name
        },
        bubbles: true
      }));
    }); //  MERGE

    labelStaticEnter.merge(labelStaticUpdate).attr('class', datum => {
      return `label static ${datum.data.name}`;
    }).attr('transform', datum => {
      if (arcs.length === 1) {
        return 'translate(0, 0)';
      }

      const radius = Math.min(width, height) / 2 * 0.6;
      const arcLabel = arc().innerRadius(radius).outerRadius(radius);
      return `translate(${arcLabel.centroid(datum)})`;
    }).text(datum => {
      return `$${datum.data.x.toFixed(0)}`;
    });
    const labelInteractiveMerge = labelInteractiveEnter.merge(labelInteractiveUpdate).attr('class', datum => {
      return `label interactive ${datum.data.name}`;
    }).attr('transform', datum => {
      // HACK: Center spinner here instead of CSS for Safari SVG foreignObject
      // x: calc(var(--decidables-spinner-input-width) / -2);
      // y: calc(var(--decidables-spinner-font-size) * 1.5 / -2);
      const inputWidth = parseFloat(this.getComputedStyleValue('--decidables-spinner-input-width'));
      const fontSize = parseFloat(this.getComputedStyleValue('--decidables-spinner-font-size'));
      const rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
      const x = inputWidth * rem / -2;
      const y = fontSize * rem * 1.5 / -2;

      if (arcs.length === 1) {
        return `translate(${x}, ${y})`;
      }

      const radius = Math.min(width, height) / 2 * 0.6;
      const arcLabel = arc().innerRadius(radius).outerRadius(radius);
      return `translate(${arcLabel.centroid(datum)[0] + x}, ${arcLabel.centroid(datum)[1] + y})`;
    });
    labelInteractiveMerge.select('decidables-spinner').attr('value', datum => {
      return `${datum.data.x.toFixed(0)}`;
    }); //  EXIT

    labelStaticUpdate.exit().remove();
    labelInteractiveUpdate.exit().remove();
  }

}
customElements.define('risky-option', RiskyOption);

let _$2 = t => t,
    _t$2,
    _t2$2;
/*
  RiskyOutcome element
  <risky-outcome>

  Attributes:
  value, probability, name
*/

class RiskyOutcome extends ProspectableElement {
  static get properties() {
    return {
      x: {
        attribute: 'value',
        type: Number,
        reflect: true
      },
      p: {
        attribute: 'probability',
        type: Number,
        reflect: true
      },
      name: {
        attribute: 'name',
        type: String,
        reflect: true
      }
    };
  }

  constructor() {
    super(); // Attributes

    this.x = 0; // Value

    this.p = 0; // Probability

    this.name = '';
  }

  static get styles() {
    return [r$2(_t$2 || (_t$2 = _$2`
        :host {
          display: none;
        }
      `))];
  }

  render() {
    /* eslint-disable-line class-methods-use-this */
    return $(_t2$2 || (_t2$2 = _$2``));
  }

}
customElements.define('risky-outcome', RiskyOutcome);

let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3,
    _t4,
    _t5;
/*
  RiskyChoice element
  <risky-choice>

  Attributes:
*/

class RiskyChoice extends ProspectableElement {
  static get properties() {
    return {
      state: {
        attribute: 'state',
        type: String,
        reflect: true
      },
      xl: {
        attribute: 'loss',
        type: Number,
        reflect: true
      },
      xw: {
        attribute: 'win',
        type: Number,
        reflect: true
      },
      pw: {
        attribute: 'probability',
        type: Number,
        reflect: true
      },
      xs: {
        attribute: 'sure',
        type: Number,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.states = ['choice', 'fixation', 'blank']; // Possible states

    this.state = 'choice'; // Current state

    this.xl = 0;
    this.xw = 100;
    this.pw = 0.75;
    this.xs = 50;
  }

  static get styles() {
    return [super.styles, r$2(_t$1 || (_t$1 = _$1`
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

        risky-option {
          width: 10rem;
          height: 10rem;
        }
      `))];
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('risky-choice-change', {
      detail: {
        xl: this.xl,
        xw: this.xw,
        pw: this.pw,
        xs: this.xs
      },
      bubbles: true
    }));
  }

  winChange(event) {
    this.xw = parseFloat(event.detail.x);
    this.pw = parseFloat(event.detail.p);
    this.sendEvent();
  }

  sureChange(event) {
    this.xs = parseFloat(event.detail.x);
    this.sendEvent();
  }

  render() {
    return $(_t2$1 || (_t2$1 = _$1`
      <div class="holder">
        <risky-option class="gamble" ?interactive=${0} @risky-outcome-change=${0}>
          ${0}
        </risky-option><span class="query"
         >${0}</span
        ><risky-option class="sure" ?interactive=${0} @risky-outcome-change=${0}>
          ${0}
        </risky-option>
      </div>`), this.interactive, this.winChange.bind(this), this.state === 'choice' ? $(_t3 || (_t3 = _$1`
              <risky-outcome probability="${0}" value="${0}" name="loss"></risky-outcome>
              <risky-outcome ?interactive=${0} probability="${0}" value="${0}" name="win"></risky-outcome>`), 1 - this.pw, this.xl, this.interactive, this.pw, this.xw) : '', this.state === 'choice' ? '?' : this.state === 'fixation' ? '+' : $(_t4 || (_t4 = _$1`∙`)), this.interactive, this.sureChange.bind(this), this.state === 'choice' ? $(_t5 || (_t5 = _$1`
              <risky-outcome ?interactive=${0} probability="1" value="${0}" name="sure"></risky-outcome>`), this.interactive, this.xs) : '');
  }

}
customElements.define('risky-choice', RiskyChoice);

let _ = t => t,
    _t,
    _t2;
/*
  RiskyTask element
  <risky-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/

class RiskyTask extends ProspectableElement {
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
    super(); // Attributes

    this.duration = 2000; // Duration of stimulus in milliseconds

    this.iti = 2000; // Duration of inter-trial interval in milliseconds

    this.trials = 5; // Number of trials per block

    this.running = false; // Currently executing block of trials
    // Properties

    this.states = ['resetted', 'iti', 'stimulus', 'ended']; // Possible states of task

    this.state = 'resetted'; // Current state of task
    // Decision parameters

    this.range = {};
    this.range.xl = {
      start: 0,
      stop: 0,
      step: 1
    }; // Gamble Loss Value

    this.range.xw = {
      start: 10,
      stop: 30,
      step: 1
    }; // Gamble Win Value

    this.range.pw = {
      start: 0.1,
      stop: 0.9,
      step: 0.1
    }; // Gamble Win Probability

    this.range.xs = {
      start: 5,
      stop: 15,
      step: 1
    }; // Sure Value

    this.range.xl.values = range(this.range.xl.start, this.range.xl.stop + 0.01, this.range.xl.step);
    this.range.xw.values = range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step);
    this.range.pw.values = range(this.range.pw.start, this.range.pw.stop + 0.01, this.range.pw.step);
    this.range.xs.values = range(this.range.xs.start, this.range.xs.stop + 0.01, this.range.xs.step); // Private

    this.firstUpdate = true;
    this.xl = 0;
    this.xw = 0;
    this.pw = 0;
    this.xs = 0;
    this.trial = 0; // Count of current trial

    this.baseTime = 0; // Real time, in milliseconds, that the current block started

    this.pauseTime = 0; // Real time, in milliseconds, that block was paused at

    this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started

    this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

    this.runner = undefined; // D3 Interval for frame timing
  }

  static get styles() {
    return [super.styles, r$2(_t || (_t = _`
        :host {
          display: inline-block;
        }
      `))];
  }

  render() {
    return $(_t2 || (_t2 = _`
      <div class="holder">
        <risky-choice state="${0}" probability="${0}" win="${0}" loss="${0}" sure="${0}"></risky-choice>
      </div>`), this.state === 'stimulus' ? 'choice' : this.state === 'iti' ? 'fixation' : 'blank', this.pw, this.xw, this.xl, this.xs);
  }

  update(changedProperties) {
    super.update(changedProperties); // Start or stop trial block

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
    this.xl = 0;
    this.xw = 0;
    this.pw = 0;
    this.xs = 0;
    this.baseTime = 0;
    this.pauseTime = 0;
    this.startTime = 0;
    this.lastTime = 0;
  }

  run() {
    const realTime = now();
    const currentTime = this.baseTime ? realTime - this.baseTime : 0;
    const elapsedTime = this.baseTime ? currentTime - this.startTime : 0;
    this.lastTime = currentTime;

    if (this.state === 'resetted') {
      // Start block with an ITI
      this.state = 'iti';
      this.baseTime = realTime;
      this.startTime = 0;
      this.dispatchEvent(new CustomEvent('risky-block-start', {
        detail: {
          trials: this.trials
        },
        bubbles: true
      }));
    } else if (this.state === 'iti' && elapsedTime >= this.iti) {
      // Start new trial with a stimulus
      this.trial += 1;
      this.state = 'stimulus';
      this.startTime = currentTime; // Determine trial

      this.xl = this.range.xl.values[Math.floor(Math.random() * this.range.xl.values.length)];
      this.xw = this.range.xw.values[Math.floor(Math.random() * this.range.xw.values.length)];
      this.pw = this.range.pw.values[Math.floor(Math.random() * this.range.pw.values.length)];
      this.xs = this.range.xs.values[Math.floor(Math.random() * this.range.xs.values.length)];
      this.vDiff = this.xw * this.pw + this.xl * (1 - this.pw) - this.xs;
      this.gamblePayoff = Math.random() < this.pw ? this.xw : this.xl;
      this.surePayoff = this.xs;
      this.better = this.vDiff > 0 ? 'gamble' : this.vDiff < 0 ? 'sure' : 'equal';
      this.dispatchEvent(new CustomEvent('risky-trial-start', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          xl: this.xl,
          xw: this.xw,
          pw: this.pw,
          xs: this.xs,
          better: this.better,
          gamblePayoff: this.gamblePayoff,
          surePayoff: this.surePayoff
        },
        bubbles: true
      }));
    } else if (this.state === 'stimulus' && elapsedTime >= this.duration) {
      // Stimulus is over, end of trial
      this.dispatchEvent(new CustomEvent('risky-trial-end', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          xl: this.xl,
          xw: this.xw,
          pw: this.pw,
          xs: this.xs,
          better: this.better,
          gamblePayoff: this.gamblePayoff,
          surePayoff: this.surePayoff
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
        this.dispatchEvent(new CustomEvent('risky-block-end', {
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
customElements.define('risky-task', RiskyTask);
//# sourceMappingURL=page.js.map
