var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},check=function(t){return t&&t.Math===Math&&t},globalThis_1=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||check("object"==typeof globalThis_1&&globalThis_1)||function(){return this}()||Function("return this")(),objectGetOwnPropertyDescriptor={},fails$o=function(t){try{return!!t()}catch(t){return!0}},fails$n=fails$o,descriptors=!fails$n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),fails$m=fails$o,functionBindNative=!fails$m((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),NATIVE_BIND$3=functionBindNative,call$k=Function.prototype.call,functionCall=NATIVE_BIND$3?call$k.bind(call$k):function(){return call$k.apply(call$k,arguments)},objectPropertyIsEnumerable={},$propertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor$2=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$2&&!$propertyIsEnumerable.call({1:2},1);objectPropertyIsEnumerable.f=NASHORN_BUG?function(t){var e=getOwnPropertyDescriptor$2(this,t);return!!e&&e.enumerable}:$propertyIsEnumerable;var match,version,createPropertyDescriptor$5=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},NATIVE_BIND$2=functionBindNative,FunctionPrototype$2=Function.prototype,call$j=FunctionPrototype$2.call,uncurryThisWithBind=NATIVE_BIND$2&&FunctionPrototype$2.bind.bind(call$j,call$j),functionUncurryThis=NATIVE_BIND$2?uncurryThisWithBind:function(t){return function(){return call$j.apply(t,arguments)}},uncurryThis$s=functionUncurryThis,toString$9=uncurryThis$s({}.toString),stringSlice$1=uncurryThis$s("".slice),classofRaw$2=function(t){return stringSlice$1(toString$9(t),8,-1)},uncurryThis$r=functionUncurryThis,fails$l=fails$o,classof$a=classofRaw$2,$Object$4=Object,split=uncurryThis$r("".split),indexedObject=fails$l((function(){return!$Object$4("z").propertyIsEnumerable(0)}))?function(t){return"String"===classof$a(t)?split(t,""):$Object$4(t)}:$Object$4,isNullOrUndefined$4=function(t){return null==t},isNullOrUndefined$3=isNullOrUndefined$4,$TypeError$j=TypeError,requireObjectCoercible$7=function(t){if(isNullOrUndefined$3(t))throw new $TypeError$j("Can't call method on "+t);return t},IndexedObject=indexedObject,requireObjectCoercible$6=requireObjectCoercible$7,toIndexedObject$8=function(t){return IndexedObject(requireObjectCoercible$6(t))},documentAll="object"==typeof document&&document.all,isCallable$k=void 0===documentAll&&void 0!==documentAll?function(t){return"function"==typeof t||t===documentAll}:function(t){return"function"==typeof t},isCallable$j=isCallable$k,isObject$b=function(t){return"object"==typeof t?null!==t:isCallable$j(t)},globalThis$t=globalThis_1,isCallable$i=isCallable$k,aFunction=function(t){return isCallable$i(t)?t:void 0},getBuiltIn$a=function(t,e){return arguments.length<2?aFunction(globalThis$t[t]):globalThis$t[t]&&globalThis$t[t][e]},uncurryThis$q=functionUncurryThis,objectIsPrototypeOf=uncurryThis$q({}.isPrototypeOf),globalThis$s=globalThis_1,navigator$1=globalThis$s.navigator,userAgent$3=navigator$1&&navigator$1.userAgent,environmentUserAgent=userAgent$3?String(userAgent$3):"",globalThis$r=globalThis_1,userAgent$2=environmentUserAgent,process$1=globalThis$r.process,Deno$1=globalThis$r.Deno,versions=process$1&&process$1.versions||Deno$1&&Deno$1.version,v8=versions&&versions.v8;v8&&(version=(match=v8.split("."))[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&userAgent$2&&(!(match=userAgent$2.match(/Edge\/(\d+)/))||match[1]>=74)&&(match=userAgent$2.match(/Chrome\/(\d+)/))&&(version=+match[1]);var environmentV8Version=version,V8_VERSION=environmentV8Version,fails$k=fails$o,globalThis$q=globalThis_1,$String$5=globalThis$q.String,symbolConstructorDetection=!!Object.getOwnPropertySymbols&&!fails$k((function(){var t=Symbol("symbol detection");return!$String$5(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V8_VERSION&&V8_VERSION<41})),NATIVE_SYMBOL$1=symbolConstructorDetection,useSymbolAsUid=NATIVE_SYMBOL$1&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,getBuiltIn$9=getBuiltIn$a,isCallable$h=isCallable$k,isPrototypeOf$4=objectIsPrototypeOf,USE_SYMBOL_AS_UID$1=useSymbolAsUid,$Object$3=Object,isSymbol$3=USE_SYMBOL_AS_UID$1?function(t){return"symbol"==typeof t}:function(t){var e=getBuiltIn$9("Symbol");return isCallable$h(e)&&isPrototypeOf$4(e.prototype,$Object$3(t))},$String$4=String,tryToString$4=function(t){try{return $String$4(t)}catch(t){return"Object"}},isCallable$g=isCallable$k,tryToString$3=tryToString$4,$TypeError$i=TypeError,aCallable$j=function(t){if(isCallable$g(t))return t;throw new $TypeError$i(tryToString$3(t)+" is not a function")},aCallable$i=aCallable$j,isNullOrUndefined$2=isNullOrUndefined$4,getMethod$4=function(t,e){var r=t[e];return isNullOrUndefined$2(r)?void 0:aCallable$i(r)},call$i=functionCall,isCallable$f=isCallable$k,isObject$a=isObject$b,$TypeError$h=TypeError,ordinaryToPrimitive$1=function(t,e){var r,n;if("string"===e&&isCallable$f(r=t.toString)&&!isObject$a(n=call$i(r,t)))return n;if(isCallable$f(r=t.valueOf)&&!isObject$a(n=call$i(r,t)))return n;if("string"!==e&&isCallable$f(r=t.toString)&&!isObject$a(n=call$i(r,t)))return n;throw new $TypeError$h("Can't convert object to primitive value")},sharedStore={exports:{}},isPure=!1,globalThis$p=globalThis_1,defineProperty$4=Object.defineProperty,defineGlobalProperty$3=function(t,e){try{defineProperty$4(globalThis$p,t,{value:e,configurable:!0,writable:!0})}catch(r){globalThis$p[t]=e}return e},globalThis$o=globalThis_1,defineGlobalProperty$2=defineGlobalProperty$3,SHARED="__core-js_shared__",store$3=sharedStore.exports=globalThis$o[SHARED]||defineGlobalProperty$2(SHARED,{});(store$3.versions||(store$3.versions=[])).push({version:"3.40.0",mode:"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"});var sharedStoreExports=sharedStore.exports,store$2=sharedStoreExports,shared$3=function(t,e){return store$2[t]||(store$2[t]=e||{})},requireObjectCoercible$5=requireObjectCoercible$7,$Object$2=Object,toObject$5=function(t){return $Object$2(requireObjectCoercible$5(t))},uncurryThis$p=functionUncurryThis,toObject$4=toObject$5,hasOwnProperty=uncurryThis$p({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(t,e){return hasOwnProperty(toObject$4(t),e)},uncurryThis$o=functionUncurryThis,id$1=0,postfix=Math.random(),toString$8=uncurryThis$o(1..toString),uid$4=function(t){return"Symbol("+(void 0===t?"":t)+")_"+toString$8(++id$1+postfix,36)},globalThis$n=globalThis_1,shared$2=shared$3,hasOwn$d=hasOwnProperty_1,uid$3=uid$4,NATIVE_SYMBOL=symbolConstructorDetection,USE_SYMBOL_AS_UID=useSymbolAsUid,Symbol$1=globalThis$n.Symbol,WellKnownSymbolsStore=shared$2("wks"),createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol$1.for||Symbol$1:Symbol$1&&Symbol$1.withoutSetter||uid$3,wellKnownSymbol$b=function(t){return hasOwn$d(WellKnownSymbolsStore,t)||(WellKnownSymbolsStore[t]=NATIVE_SYMBOL&&hasOwn$d(Symbol$1,t)?Symbol$1[t]:createWellKnownSymbol("Symbol."+t)),WellKnownSymbolsStore[t]},call$h=functionCall,isObject$9=isObject$b,isSymbol$2=isSymbol$3,getMethod$3=getMethod$4,ordinaryToPrimitive=ordinaryToPrimitive$1,wellKnownSymbol$a=wellKnownSymbol$b,$TypeError$g=TypeError,TO_PRIMITIVE=wellKnownSymbol$a("toPrimitive"),toPrimitive$2=function(t,e){if(!isObject$9(t)||isSymbol$2(t))return t;var r,n=getMethod$3(t,TO_PRIMITIVE);if(n){if(void 0===e&&(e="default"),r=call$h(n,t,e),!isObject$9(r)||isSymbol$2(r))return r;throw new $TypeError$g("Can't convert object to primitive value")}return void 0===e&&(e="number"),ordinaryToPrimitive(t,e)},toPrimitive$1=toPrimitive$2,isSymbol$1=isSymbol$3,toPropertyKey$3=function(t){var e=toPrimitive$1(t,"string");return isSymbol$1(e)?e:e+""},globalThis$m=globalThis_1,isObject$8=isObject$b,document$1=globalThis$m.document,EXISTS$1=isObject$8(document$1)&&isObject$8(document$1.createElement),documentCreateElement$1=function(t){return EXISTS$1?document$1.createElement(t):{}},DESCRIPTORS$g=descriptors,fails$j=fails$o,createElement$1=documentCreateElement$1,ie8DomDefine=!DESCRIPTORS$g&&!fails$j((function(){return 7!==Object.defineProperty(createElement$1("div"),"a",{get:function(){return 7}}).a})),DESCRIPTORS$f=descriptors,call$g=functionCall,propertyIsEnumerableModule=objectPropertyIsEnumerable,createPropertyDescriptor$4=createPropertyDescriptor$5,toIndexedObject$7=toIndexedObject$8,toPropertyKey$2=toPropertyKey$3,hasOwn$c=hasOwnProperty_1,IE8_DOM_DEFINE$1=ie8DomDefine,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor;objectGetOwnPropertyDescriptor.f=DESCRIPTORS$f?$getOwnPropertyDescriptor$1:function(t,e){if(t=toIndexedObject$7(t),e=toPropertyKey$2(e),IE8_DOM_DEFINE$1)try{return $getOwnPropertyDescriptor$1(t,e)}catch(t){}if(hasOwn$c(t,e))return createPropertyDescriptor$4(!call$g(propertyIsEnumerableModule.f,t,e),t[e])};var objectDefineProperty={},DESCRIPTORS$e=descriptors,fails$i=fails$o,v8PrototypeDefineBug=DESCRIPTORS$e&&fails$i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),isObject$7=isObject$b,$String$3=String,$TypeError$f=TypeError,anObject$o=function(t){if(isObject$7(t))return t;throw new $TypeError$f($String$3(t)+" is not an object")},DESCRIPTORS$d=descriptors,IE8_DOM_DEFINE=ie8DomDefine,V8_PROTOTYPE_DEFINE_BUG$1=v8PrototypeDefineBug,anObject$n=anObject$o,toPropertyKey$1=toPropertyKey$3,$TypeError$e=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable";objectDefineProperty.f=DESCRIPTORS$d?V8_PROTOTYPE_DEFINE_BUG$1?function(t,e,r){if(anObject$n(t),e=toPropertyKey$1(e),anObject$n(r),"function"==typeof t&&"prototype"===e&&"value"in r&&WRITABLE in r&&!r[WRITABLE]){var n=$getOwnPropertyDescriptor(t,e);n&&n[WRITABLE]&&(t[e]=r.value,r={configurable:CONFIGURABLE$1 in r?r[CONFIGURABLE$1]:n[CONFIGURABLE$1],enumerable:ENUMERABLE in r?r[ENUMERABLE]:n[ENUMERABLE],writable:!1})}return $defineProperty(t,e,r)}:$defineProperty:function(t,e,r){if(anObject$n(t),e=toPropertyKey$1(e),anObject$n(r),IE8_DOM_DEFINE)try{return $defineProperty(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new $TypeError$e("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var DESCRIPTORS$c=descriptors,definePropertyModule$4=objectDefineProperty,createPropertyDescriptor$3=createPropertyDescriptor$5,createNonEnumerableProperty$5=DESCRIPTORS$c?function(t,e,r){return definePropertyModule$4.f(t,e,createPropertyDescriptor$3(1,r))}:function(t,e,r){return t[e]=r,t},makeBuiltIn$3={exports:{}},DESCRIPTORS$b=descriptors,hasOwn$b=hasOwnProperty_1,FunctionPrototype$1=Function.prototype,getDescriptor=DESCRIPTORS$b&&Object.getOwnPropertyDescriptor,EXISTS=hasOwn$b(FunctionPrototype$1,"name"),CONFIGURABLE=EXISTS&&(!DESCRIPTORS$b||DESCRIPTORS$b&&getDescriptor(FunctionPrototype$1,"name").configurable),functionName={CONFIGURABLE:CONFIGURABLE},uncurryThis$n=functionUncurryThis,isCallable$e=isCallable$k,store$1=sharedStoreExports,functionToString=uncurryThis$n(Function.toString);isCallable$e(store$1.inspectSource)||(store$1.inspectSource=function(t){return functionToString(t)});var set$4,get$3,has$7,inspectSource$2=store$1.inspectSource,globalThis$l=globalThis_1,isCallable$d=isCallable$k,WeakMap$2=globalThis$l.WeakMap,weakMapBasicDetection=isCallable$d(WeakMap$2)&&/native code/.test(String(WeakMap$2)),shared$1=shared$3,uid$2=uid$4,keys$1=shared$1("keys"),sharedKey$3=function(t){return keys$1[t]||(keys$1[t]=uid$2(t))},hiddenKeys$4={},NATIVE_WEAK_MAP=weakMapBasicDetection,globalThis$k=globalThis_1,isObject$6=isObject$b,createNonEnumerableProperty$4=createNonEnumerableProperty$5,hasOwn$a=hasOwnProperty_1,shared=sharedStoreExports,sharedKey$2=sharedKey$3,hiddenKeys$3=hiddenKeys$4,OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$4=globalThis$k.TypeError,WeakMap$1=globalThis$k.WeakMap,enforce=function(t){return has$7(t)?get$3(t):set$4(t,{})},getterFor=function(t){return function(e){var r;if(!isObject$6(e)||(r=get$3(e)).type!==t)throw new TypeError$4("Incompatible receiver, "+t+" required");return r}};if(NATIVE_WEAK_MAP||shared.state){var store=shared.state||(shared.state=new WeakMap$1);store.get=store.get,store.has=store.has,store.set=store.set,set$4=function(t,e){if(store.has(t))throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);return e.facade=t,store.set(t,e),e},get$3=function(t){return store.get(t)||{}},has$7=function(t){return store.has(t)}}else{var STATE=sharedKey$2("state");hiddenKeys$3[STATE]=!0,set$4=function(t,e){if(hasOwn$a(t,STATE))throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);return e.facade=t,createNonEnumerableProperty$4(t,STATE,e),e},get$3=function(t){return hasOwn$a(t,STATE)?t[STATE]:{}},has$7=function(t){return hasOwn$a(t,STATE)}}var internalState={set:set$4,get:get$3,has:has$7,enforce:enforce,getterFor:getterFor},uncurryThis$m=functionUncurryThis,fails$h=fails$o,isCallable$c=isCallable$k,hasOwn$9=hasOwnProperty_1,DESCRIPTORS$a=descriptors,CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,inspectSource$1=inspectSource$2,InternalStateModule$2=internalState,enforceInternalState$1=InternalStateModule$2.enforce,getInternalState$1=InternalStateModule$2.get,$String$2=String,defineProperty$3=Object.defineProperty,stringSlice=uncurryThis$m("".slice),replace$1=uncurryThis$m("".replace),join$1=uncurryThis$m([].join),CONFIGURABLE_LENGTH=DESCRIPTORS$a&&!fails$h((function(){return 8!==defineProperty$3((function(){}),"length",{value:8}).length})),TEMPLATE=String(String).split("String"),makeBuiltIn$2=makeBuiltIn$3.exports=function(t,e,r){"Symbol("===stringSlice($String$2(e),0,7)&&(e="["+replace$1($String$2(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!hasOwn$9(t,"name")||CONFIGURABLE_FUNCTION_NAME&&t.name!==e)&&(DESCRIPTORS$a?defineProperty$3(t,"name",{value:e,configurable:!0}):t.name=e),CONFIGURABLE_LENGTH&&r&&hasOwn$9(r,"arity")&&t.length!==r.arity&&defineProperty$3(t,"length",{value:r.arity});try{r&&hasOwn$9(r,"constructor")&&r.constructor?DESCRIPTORS$a&&defineProperty$3(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=enforceInternalState$1(t);return hasOwn$9(n,"source")||(n.source=join$1(TEMPLATE,"string"==typeof e?e:"")),t};Function.prototype.toString=makeBuiltIn$2((function(){return isCallable$c(this)&&getInternalState$1(this).source||inspectSource$1(this)}),"toString");var makeBuiltInExports=makeBuiltIn$3.exports,isCallable$b=isCallable$k,definePropertyModule$3=objectDefineProperty,makeBuiltIn$1=makeBuiltInExports,defineGlobalProperty$1=defineGlobalProperty$3,defineBuiltIn$6=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(isCallable$b(r)&&makeBuiltIn$1(r,a,n),n.global)i?t[e]=r:defineGlobalProperty$1(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:definePropertyModule$3.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},objectGetOwnPropertyNames={},ceil=Math.ceil,floor=Math.floor,mathTrunc=Math.trunc||function(t){var e=+t;return(e>0?floor:ceil)(e)},trunc=mathTrunc,toIntegerOrInfinity$8=function(t){var e=+t;return e!=e||0===e?0:trunc(e)},toIntegerOrInfinity$7=toIntegerOrInfinity$8,max$2=Math.max,min$3=Math.min,toAbsoluteIndex$2=function(t,e){var r=toIntegerOrInfinity$7(t);return r<0?max$2(r+e,0):min$3(r,e)},toIntegerOrInfinity$6=toIntegerOrInfinity$8,min$2=Math.min,toLength$2=function(t){var e=toIntegerOrInfinity$6(t);return e>0?min$2(e,9007199254740991):0},toLength$1=toLength$2,lengthOfArrayLike$9=function(t){return toLength$1(t.length)},toIndexedObject$6=toIndexedObject$8,toAbsoluteIndex$1=toAbsoluteIndex$2,lengthOfArrayLike$8=lengthOfArrayLike$9,createMethod=function(t){return function(e,r,n){var i=toIndexedObject$6(e),a=lengthOfArrayLike$8(i);if(0===a)return!t&&-1;var s,o=toAbsoluteIndex$1(n,a);if(t&&r!=r){for(;a>o;)if((s=i[o++])!=s)return!0}else for(;a>o;o++)if((t||o in i)&&i[o]===r)return t||o||0;return!t&&-1}},arrayIncludes={indexOf:createMethod(!1)},uncurryThis$l=functionUncurryThis,hasOwn$8=hasOwnProperty_1,toIndexedObject$5=toIndexedObject$8,indexOf=arrayIncludes.indexOf,hiddenKeys$2=hiddenKeys$4,push$5=uncurryThis$l([].push),objectKeysInternal=function(t,e){var r,n=toIndexedObject$5(t),i=0,a=[];for(r in n)!hasOwn$8(hiddenKeys$2,r)&&hasOwn$8(n,r)&&push$5(a,r);for(;e.length>i;)hasOwn$8(n,r=e[i++])&&(~indexOf(a,r)||push$5(a,r));return a},enumBugKeys$3=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],internalObjectKeys$1=objectKeysInternal,enumBugKeys$2=enumBugKeys$3,hiddenKeys$1=enumBugKeys$2.concat("length","prototype");objectGetOwnPropertyNames.f=Object.getOwnPropertyNames||function(t){return internalObjectKeys$1(t,hiddenKeys$1)};var objectGetOwnPropertySymbols={};objectGetOwnPropertySymbols.f=Object.getOwnPropertySymbols;var getBuiltIn$8=getBuiltIn$a,uncurryThis$k=functionUncurryThis,getOwnPropertyNamesModule=objectGetOwnPropertyNames,getOwnPropertySymbolsModule=objectGetOwnPropertySymbols,anObject$m=anObject$o,concat=uncurryThis$k([].concat),ownKeys$1=getBuiltIn$8("Reflect","ownKeys")||function(t){var e=getOwnPropertyNamesModule.f(anObject$m(t)),r=getOwnPropertySymbolsModule.f;return r?concat(e,r(t)):e},hasOwn$7=hasOwnProperty_1,ownKeys=ownKeys$1,getOwnPropertyDescriptorModule=objectGetOwnPropertyDescriptor,definePropertyModule$2=objectDefineProperty,copyConstructorProperties$1=function(t,e,r){for(var n=ownKeys(e),i=definePropertyModule$2.f,a=getOwnPropertyDescriptorModule.f,s=0;s<n.length;s++){var o=n[s];hasOwn$7(t,o)||r&&hasOwn$7(r,o)||i(t,o,a(e,o))}},fails$g=fails$o,isCallable$a=isCallable$k,replacement=/#|\.prototype\./,isForced$1=function(t,e){var r=data[normalize$1(t)];return r===POLYFILL||r!==NATIVE&&(isCallable$a(e)?fails$g(e):!!e)},normalize$1=isForced$1.normalize=function(t){return String(t).replace(replacement,".").toLowerCase()},data=isForced$1.data={},NATIVE=isForced$1.NATIVE="N",POLYFILL=isForced$1.POLYFILL="P",isForced_1=isForced$1,globalThis$j=globalThis_1,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,createNonEnumerableProperty$3=createNonEnumerableProperty$5,defineBuiltIn$5=defineBuiltIn$6,defineGlobalProperty=defineGlobalProperty$3,copyConstructorProperties=copyConstructorProperties$1,isForced=isForced_1,_export=function(t,e){var r,n,i,a,s,o=t.target,l=t.global,c=t.stat;if(r=l?globalThis$j:c?globalThis$j[o]||defineGlobalProperty(o,{}):globalThis$j[o]&&globalThis$j[o].prototype)for(n in e){if(a=e[n],i=t.dontCallGetSet?(s=getOwnPropertyDescriptor$1(r,n))&&s.value:r[n],!isForced(l?n:o+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;copyConstructorProperties(a,i)}(t.sham||i&&i.sham)&&createNonEnumerableProperty$3(a,"sham",!0),defineBuiltIn$5(r,n,a,t)}},classof$9=classofRaw$2,isArray$1=Array.isArray||function(t){return"Array"===classof$9(t)},DESCRIPTORS$9=descriptors,isArray=isArray$1,$TypeError$d=TypeError,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,SILENT_ON_NON_WRITABLE_LENGTH_SET=DESCRIPTORS$9&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}(),arraySetLength=SILENT_ON_NON_WRITABLE_LENGTH_SET?function(t,e){if(isArray(t)&&!getOwnPropertyDescriptor(t,"length").writable)throw new $TypeError$d("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},$TypeError$c=TypeError,MAX_SAFE_INTEGER=9007199254740991,doesNotExceedSafeInteger$3=function(t){if(t>MAX_SAFE_INTEGER)throw $TypeError$c("Maximum allowed index exceeded");return t},$$E=_export,toObject$3=toObject$5,lengthOfArrayLike$7=lengthOfArrayLike$9,setArrayLength$1=arraySetLength,doesNotExceedSafeInteger$2=doesNotExceedSafeInteger$3,fails$f=fails$o,INCORRECT_TO_LENGTH=fails$f((function(){return 4294967297!==[].push.call({length:4294967296},1)})),properErrorOnNonWritableLength$1=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},FORCED$4=INCORRECT_TO_LENGTH||!properErrorOnNonWritableLength$1();$$E({target:"Array",proto:!0,arity:1,forced:FORCED$4},{push:function(t){var e=toObject$3(this),r=lengthOfArrayLike$7(e),n=arguments.length;doesNotExceedSafeInteger$2(r+n);for(var i=0;i<n;i++)e[r]=arguments[i],r++;return setArrayLength$1(e,r),r}});var lengthOfArrayLike$6=lengthOfArrayLike$9,arrayToReversed$2=function(t,e){for(var r=lengthOfArrayLike$6(t),n=new e(r),i=0;i<r;i++)n[i]=t[r-i-1];return n},objectDefineProperties={},internalObjectKeys=objectKeysInternal,enumBugKeys$1=enumBugKeys$3,objectKeys$2=Object.keys||function(t){return internalObjectKeys(t,enumBugKeys$1)},DESCRIPTORS$8=descriptors,V8_PROTOTYPE_DEFINE_BUG=v8PrototypeDefineBug,definePropertyModule$1=objectDefineProperty,anObject$l=anObject$o,toIndexedObject$4=toIndexedObject$8,objectKeys$1=objectKeys$2;objectDefineProperties.f=DESCRIPTORS$8&&!V8_PROTOTYPE_DEFINE_BUG?Object.defineProperties:function(t,e){anObject$l(t);for(var r,n=toIndexedObject$4(e),i=objectKeys$1(e),a=i.length,s=0;a>s;)definePropertyModule$1.f(t,r=i[s++],n[r]);return t};var activeXDocument,getBuiltIn$7=getBuiltIn$a,html$2=getBuiltIn$7("document","documentElement"),anObject$k=anObject$o,definePropertiesModule=objectDefineProperties,enumBugKeys=enumBugKeys$3,hiddenKeys=hiddenKeys$4,html$1=html$2,documentCreateElement=documentCreateElement$1,sharedKey$1=sharedKey$3,GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO$1=sharedKey$1("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return LT+SCRIPT+GT+t+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(t){t.write(scriptTag("")),t.close();var e=t.parentWindow.Object;return t=null,e},NullProtoObjectViaIFrame=function(){var t,e=documentCreateElement("iframe"),r="java"+SCRIPT+":";return e.style.display="none",html$1.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F},NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(t){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var t=enumBugKeys.length;t--;)delete NullProtoObject[PROTOTYPE][enumBugKeys[t]];return NullProtoObject()};hiddenKeys[IE_PROTO$1]=!0;var objectCreate=Object.create||function(t,e){var r;return null!==t?(EmptyConstructor[PROTOTYPE]=anObject$k(t),r=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,r[IE_PROTO$1]=t):r=NullProtoObject(),void 0===e?r:definePropertiesModule.f(r,e)},wellKnownSymbol$9=wellKnownSymbol$b,create$3=objectCreate,defineProperty$2=objectDefineProperty.f,UNSCOPABLES=wellKnownSymbol$9("unscopables"),ArrayPrototype$1=Array.prototype;void 0===ArrayPrototype$1[UNSCOPABLES]&&defineProperty$2(ArrayPrototype$1,UNSCOPABLES,{configurable:!0,value:create$3(null)});var addToUnscopables$3=function(t){ArrayPrototype$1[UNSCOPABLES][t]=!0},$$D=_export,arrayToReversed$1=arrayToReversed$2,toIndexedObject$3=toIndexedObject$8,addToUnscopables$2=addToUnscopables$3,$Array$4=Array;$$D({target:"Array",proto:!0},{toReversed:function(){return arrayToReversed$1(toIndexedObject$3(this),$Array$4)}}),addToUnscopables$2("toReversed");var lengthOfArrayLike$5=lengthOfArrayLike$9,arrayFromConstructorAndList$2=function(t,e,r){for(var n=0,i=arguments.length>2?r:lengthOfArrayLike$5(e),a=new t(i);i>n;)a[n]=e[n++];return a},globalThis$i=globalThis_1,getBuiltInPrototypeMethod$1=function(t,e){var r=globalThis$i[t],n=r&&r.prototype;return n&&n[e]},$$C=_export,uncurryThis$j=functionUncurryThis,aCallable$h=aCallable$j,toIndexedObject$2=toIndexedObject$8,arrayFromConstructorAndList$1=arrayFromConstructorAndList$2,getBuiltInPrototypeMethod=getBuiltInPrototypeMethod$1,addToUnscopables$1=addToUnscopables$3,$Array$3=Array,sort$1=uncurryThis$j(getBuiltInPrototypeMethod("Array","sort"));$$C({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&aCallable$h(t);var e=toIndexedObject$2(this),r=arrayFromConstructorAndList$1($Array$3,e);return sort$1(r,t)}}),addToUnscopables$1("toSorted");var $$B=_export,addToUnscopables=addToUnscopables$3,doesNotExceedSafeInteger$1=doesNotExceedSafeInteger$3,lengthOfArrayLike$4=lengthOfArrayLike$9,toAbsoluteIndex=toAbsoluteIndex$2,toIndexedObject$1=toIndexedObject$8,toIntegerOrInfinity$5=toIntegerOrInfinity$8,$Array$2=Array,max$1=Math.max,min$1=Math.min;$$B({target:"Array",proto:!0},{toSpliced:function(t,e){var r,n,i,a,s=toIndexedObject$1(this),o=lengthOfArrayLike$4(s),l=toAbsoluteIndex(t,o),c=arguments.length,u=0;for(0===c?r=n=0:1===c?(r=0,n=o-l):(r=c-2,n=min$1(max$1(toIntegerOrInfinity$5(e),0),o-l)),i=doesNotExceedSafeInteger$1(o+r-n),a=$Array$2(i);u<l;u++)a[u]=s[u];for(;u<l+r;u++)a[u]=arguments[u-l+2];for(;u<i;u++)a[u]=s[u+n-r];return a}}),addToUnscopables("toSpliced");var tryToString$2=tryToString$4,$TypeError$b=TypeError,deletePropertyOrThrow$1=function(t,e){if(!delete t[e])throw new $TypeError$b("Cannot delete property "+tryToString$2(e)+" of "+tryToString$2(t))},$$A=_export,toObject$2=toObject$5,lengthOfArrayLike$3=lengthOfArrayLike$9,setArrayLength=arraySetLength,deletePropertyOrThrow=deletePropertyOrThrow$1,doesNotExceedSafeInteger=doesNotExceedSafeInteger$3,INCORRECT_RESULT=1!==[].unshift(0),properErrorOnNonWritableLength=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},FORCED$3=INCORRECT_RESULT||!properErrorOnNonWritableLength();$$A({target:"Array",proto:!0,arity:1,forced:FORCED$3},{unshift:function(t){var e=toObject$2(this),r=lengthOfArrayLike$3(e),n=arguments.length;if(n){doesNotExceedSafeInteger(r+n);for(var i=r;i--;){var a=i+n;i in e?e[a]=e[i]:deletePropertyOrThrow(e,a)}for(var s=0;s<n;s++)e[s]=arguments[s]}return setArrayLength(e,r+n)}});var lengthOfArrayLike$2=lengthOfArrayLike$9,toIntegerOrInfinity$4=toIntegerOrInfinity$8,$RangeError$4=RangeError,arrayWith$2=function(t,e,r,n){var i=lengthOfArrayLike$2(t),a=toIntegerOrInfinity$4(r),s=a<0?i+a:a;if(s>=i||s<0)throw new $RangeError$4("Incorrect index");for(var o=new e(i),l=0;l<i;l++)o[l]=l===s?n:t[l];return o},$$z=_export,arrayWith$1=arrayWith$2,toIndexedObject=toIndexedObject$8,$Array$1=Array;$$z({target:"Array",proto:!0},{with:function(t,e){return arrayWith$1(toIndexedObject(this),$Array$1,t,e)}});var makeBuiltIn=makeBuiltInExports,defineProperty$1=objectDefineProperty,defineBuiltInAccessor$5=function(t,e,r){return r.get&&makeBuiltIn(r.get,e,{getter:!0}),r.set&&makeBuiltIn(r.set,e,{setter:!0}),defineProperty$1.f(t,e,r)},arrayBufferBasicDetection="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,uncurryThis$i=functionUncurryThis,aCallable$g=aCallable$j,functionUncurryThisAccessor=function(t,e,r){try{return uncurryThis$i(aCallable$g(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},globalThis$h=globalThis_1,uncurryThisAccessor$3=functionUncurryThisAccessor,classof$8=classofRaw$2,ArrayBuffer$2=globalThis$h.ArrayBuffer,TypeError$3=globalThis$h.TypeError,arrayBufferByteLength$2=ArrayBuffer$2&&uncurryThisAccessor$3(ArrayBuffer$2.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==classof$8(t))throw new TypeError$3("ArrayBuffer expected");return t.byteLength},globalThis$g=globalThis_1,NATIVE_ARRAY_BUFFER$1=arrayBufferBasicDetection,arrayBufferByteLength$1=arrayBufferByteLength$2,DataView$2=globalThis$g.DataView,arrayBufferIsDetached=function(t){if(!NATIVE_ARRAY_BUFFER$1||0!==arrayBufferByteLength$1(t))return!1;try{return new DataView$2(t),!1}catch(t){return!0}},DESCRIPTORS$7=descriptors,defineBuiltInAccessor$4=defineBuiltInAccessor$5,isDetached$1=arrayBufferIsDetached,ArrayBufferPrototype$1=ArrayBuffer.prototype;DESCRIPTORS$7&&!("detached"in ArrayBufferPrototype$1)&&defineBuiltInAccessor$4(ArrayBufferPrototype$1,"detached",{configurable:!0,get:function(){return isDetached$1(this)}});var WorkerThreads,channel$1,buffer,$detach,toIntegerOrInfinity$3=toIntegerOrInfinity$8,toLength=toLength$2,$RangeError$3=RangeError,toIndex$1=function(t){if(void 0===t)return 0;var e=toIntegerOrInfinity$3(t),r=toLength(e);if(e!==r)throw new $RangeError$3("Wrong length or index");return r},isDetached=arrayBufferIsDetached,$TypeError$a=TypeError,arrayBufferNotDetached=function(t){if(isDetached(t))throw new $TypeError$a("ArrayBuffer is detached");return t},globalThis$f=globalThis_1,userAgent$1=environmentUserAgent,classof$7=classofRaw$2,userAgentStartsWith=function(t){return userAgent$1.slice(0,t.length)===t},environment=userAgentStartsWith("Bun/")?"BUN":userAgentStartsWith("Cloudflare-Workers")?"CLOUDFLARE":userAgentStartsWith("Deno/")?"DENO":userAgentStartsWith("Node.js/")?"NODE":globalThis$f.Bun&&"string"==typeof Bun.version?"BUN":globalThis$f.Deno&&"object"==typeof Deno.version?"DENO":"process"===classof$7(globalThis$f.process)?"NODE":globalThis$f.window&&globalThis$f.document?"BROWSER":"REST",ENVIRONMENT$2=environment,environmentIsNode="NODE"===ENVIRONMENT$2,globalThis$e=globalThis_1,IS_NODE$1=environmentIsNode,getBuiltInNodeModule$1=function(t){if(IS_NODE$1){try{return globalThis$e.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},globalThis$d=globalThis_1,fails$e=fails$o,V8=environmentV8Version,ENVIRONMENT$1=environment,structuredClone$3=globalThis$d.structuredClone,structuredCloneProperTransfer=!!structuredClone$3&&!fails$e((function(){if("DENO"===ENVIRONMENT$1&&V8>92||"NODE"===ENVIRONMENT$1&&V8>94||"BROWSER"===ENVIRONMENT$1&&V8>97)return!1;var t=new ArrayBuffer(8),e=structuredClone$3(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength})),globalThis$c=globalThis_1,getBuiltInNodeModule=getBuiltInNodeModule$1,PROPER_STRUCTURED_CLONE_TRANSFER$2=structuredCloneProperTransfer,structuredClone$2=globalThis$c.structuredClone,$ArrayBuffer=globalThis$c.ArrayBuffer,$MessageChannel=globalThis$c.MessageChannel,detach=!1;if(PROPER_STRUCTURED_CLONE_TRANSFER$2)detach=function(t){structuredClone$2(t,{transfer:[t]})};else if($ArrayBuffer)try{$MessageChannel||(WorkerThreads=getBuiltInNodeModule("worker_threads"))&&($MessageChannel=WorkerThreads.MessageChannel),$MessageChannel&&(channel$1=new $MessageChannel,buffer=new $ArrayBuffer(2),$detach=function(t){channel$1.port1.postMessage(null,[t])},2===buffer.byteLength&&($detach(buffer),0===buffer.byteLength&&(detach=$detach)))}catch(t){}var detachTransferable$2=detach,globalThis$b=globalThis_1,uncurryThis$h=functionUncurryThis,uncurryThisAccessor$2=functionUncurryThisAccessor,toIndex=toIndex$1,notDetached=arrayBufferNotDetached,arrayBufferByteLength=arrayBufferByteLength$2,detachTransferable$1=detachTransferable$2,PROPER_STRUCTURED_CLONE_TRANSFER$1=structuredCloneProperTransfer,structuredClone$1=globalThis$b.structuredClone,ArrayBuffer$1=globalThis$b.ArrayBuffer,DataView$1=globalThis$b.DataView,min=Math.min,ArrayBufferPrototype=ArrayBuffer$1.prototype,DataViewPrototype=DataView$1.prototype,slice$1=uncurryThis$h(ArrayBufferPrototype.slice),isResizable=uncurryThisAccessor$2(ArrayBufferPrototype,"resizable","get"),maxByteLength=uncurryThisAccessor$2(ArrayBufferPrototype,"maxByteLength","get"),getInt8=uncurryThis$h(DataViewPrototype.getInt8),setInt8=uncurryThis$h(DataViewPrototype.setInt8),arrayBufferTransfer=(PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1)&&function(t,e,r){var n,i=arrayBufferByteLength(t),a=void 0===e?i:toIndex(e),s=!isResizable||!isResizable(t);if(notDetached(t),PROPER_STRUCTURED_CLONE_TRANSFER$1&&(t=structuredClone$1(t,{transfer:[t]}),i===a&&(r||s)))return t;if(i>=a&&(!r||s))n=slice$1(t,0,a);else{var o=r&&!s&&maxByteLength?{maxByteLength:maxByteLength(t)}:void 0;n=new ArrayBuffer$1(a,o);for(var l=new DataView$1(t),c=new DataView$1(n),u=min(a,i),d=0;d<u;d++)setInt8(c,d,getInt8(l,d))}return PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1(t),n},$$y=_export,$transfer$1=arrayBufferTransfer;$transfer$1&&$$y({target:"ArrayBuffer",proto:!0},{transfer:function(){return $transfer$1(this,arguments.length?arguments[0]:void 0,!0)}});var $$x=_export,$transfer=arrayBufferTransfer;$transfer&&$$x({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return $transfer(this,arguments.length?arguments[0]:void 0,!1)}});var IteratorPrototype$3,PrototypeOfArrayIteratorPrototype,arrayIterator,isPrototypeOf$3=objectIsPrototypeOf,$TypeError$9=TypeError,anInstance$2=function(t,e){if(isPrototypeOf$3(e,t))return t;throw new $TypeError$9("Incorrect invocation")},fails$d=fails$o,correctPrototypeGetter=!fails$d((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),hasOwn$6=hasOwnProperty_1,isCallable$9=isCallable$k,toObject$1=toObject$5,sharedKey=sharedKey$3,CORRECT_PROTOTYPE_GETTER=correctPrototypeGetter,IE_PROTO=sharedKey("IE_PROTO"),$Object$1=Object,ObjectPrototype$1=$Object$1.prototype,objectGetPrototypeOf=CORRECT_PROTOTYPE_GETTER?$Object$1.getPrototypeOf:function(t){var e=toObject$1(t);if(hasOwn$6(e,IE_PROTO))return e[IE_PROTO];var r=e.constructor;return isCallable$9(r)&&e instanceof r?r.prototype:e instanceof $Object$1?ObjectPrototype$1:null},DESCRIPTORS$6=descriptors,definePropertyModule=objectDefineProperty,createPropertyDescriptor$2=createPropertyDescriptor$5,createProperty$2=function(t,e,r){DESCRIPTORS$6?definePropertyModule.f(t,e,createPropertyDescriptor$2(0,r)):t[e]=r},fails$c=fails$o,isCallable$8=isCallable$k,isObject$5=isObject$b,getPrototypeOf$2=objectGetPrototypeOf,defineBuiltIn$4=defineBuiltIn$6,wellKnownSymbol$8=wellKnownSymbol$b,ITERATOR$4=wellKnownSymbol$8("iterator");[].keys&&"next"in(arrayIterator=[].keys())&&(PrototypeOfArrayIteratorPrototype=getPrototypeOf$2(getPrototypeOf$2(arrayIterator)))!==Object.prototype&&(IteratorPrototype$3=PrototypeOfArrayIteratorPrototype);var NEW_ITERATOR_PROTOTYPE=!isObject$5(IteratorPrototype$3)||fails$c((function(){var t={};return IteratorPrototype$3[ITERATOR$4].call(t)!==t}));NEW_ITERATOR_PROTOTYPE&&(IteratorPrototype$3={}),isCallable$8(IteratorPrototype$3[ITERATOR$4])||defineBuiltIn$4(IteratorPrototype$3,ITERATOR$4,(function(){return this}));var iteratorsCore={IteratorPrototype:IteratorPrototype$3},$$w=_export,globalThis$a=globalThis_1,anInstance$1=anInstance$2,anObject$j=anObject$o,isCallable$7=isCallable$k,getPrototypeOf$1=objectGetPrototypeOf,defineBuiltInAccessor$3=defineBuiltInAccessor$5,createProperty$1=createProperty$2,fails$b=fails$o,hasOwn$5=hasOwnProperty_1,wellKnownSymbol$7=wellKnownSymbol$b,IteratorPrototype$2=iteratorsCore.IteratorPrototype,DESCRIPTORS$5=descriptors,CONSTRUCTOR="constructor",ITERATOR$3="Iterator",TO_STRING_TAG$4=wellKnownSymbol$7("toStringTag"),$TypeError$8=TypeError,NativeIterator=globalThis$a[ITERATOR$3],FORCED$2=!isCallable$7(NativeIterator)||NativeIterator.prototype!==IteratorPrototype$2||!fails$b((function(){NativeIterator({})})),IteratorConstructor=function(){if(anInstance$1(this,IteratorPrototype$2),getPrototypeOf$1(this)===IteratorPrototype$2)throw new $TypeError$8("Abstract class Iterator not directly constructable")},defineIteratorPrototypeAccessor=function(t,e){DESCRIPTORS$5?defineBuiltInAccessor$3(IteratorPrototype$2,t,{configurable:!0,get:function(){return e},set:function(e){if(anObject$j(this),this===IteratorPrototype$2)throw new $TypeError$8("You can't redefine this property");hasOwn$5(this,t)?this[t]=e:createProperty$1(this,t,e)}}):IteratorPrototype$2[t]=e};hasOwn$5(IteratorPrototype$2,TO_STRING_TAG$4)||defineIteratorPrototypeAccessor(TO_STRING_TAG$4,ITERATOR$3),!FORCED$2&&hasOwn$5(IteratorPrototype$2,CONSTRUCTOR)&&IteratorPrototype$2[CONSTRUCTOR]!==Object||defineIteratorPrototypeAccessor(CONSTRUCTOR,IteratorConstructor),IteratorConstructor.prototype=IteratorPrototype$2,$$w({global:!0,constructor:!0,forced:FORCED$2},{Iterator:IteratorConstructor});var getIteratorDirect$d=function(t){return{iterator:t,next:t.next,done:!1}},$RangeError$2=RangeError,notANan=function(t){if(t==t)return t;throw new $RangeError$2("NaN is not allowed")},toIntegerOrInfinity$2=toIntegerOrInfinity$8,$RangeError$1=RangeError,toPositiveInteger$2=function(t){var e=toIntegerOrInfinity$2(t);if(e<0)throw new $RangeError$1("The argument can't be less than 0");return e},defineBuiltIn$3=defineBuiltIn$6,defineBuiltIns$1=function(t,e,r){for(var n in e)defineBuiltIn$3(t,n,e[n],r);return t},createIterResultObject$1=function(t,e){return{value:t,done:e}},call$f=functionCall,anObject$i=anObject$o,getMethod$2=getMethod$4,iteratorClose$7=function(t,e,r){var n,i;anObject$i(t);try{if(!(n=getMethod$2(t,"return"))){if("throw"===e)throw r;return r}n=call$f(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return anObject$i(n),r},call$e=functionCall,create$2=objectCreate,createNonEnumerableProperty$2=createNonEnumerableProperty$5,defineBuiltIns=defineBuiltIns$1,wellKnownSymbol$6=wellKnownSymbol$b,InternalStateModule$1=internalState,getMethod$1=getMethod$4,IteratorPrototype$1=iteratorsCore.IteratorPrototype,createIterResultObject=createIterResultObject$1,iteratorClose$6=iteratorClose$7,TO_STRING_TAG$3=wellKnownSymbol$6("toStringTag"),ITERATOR_HELPER="IteratorHelper",WRAP_FOR_VALID_ITERATOR="WrapForValidIterator",setInternalState=InternalStateModule$1.set,createIteratorProxyPrototype=function(t){var e=InternalStateModule$1.getterFor(t?WRAP_FOR_VALID_ITERATOR:ITERATOR_HELPER);return defineBuiltIns(create$2(IteratorPrototype$1),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return createIterResultObject(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:createIterResultObject(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),n=r.iterator;if(r.done=!0,t){var i=getMethod$1(n,"return");return i?call$e(i,n):createIterResultObject(void 0,!0)}if(r.inner)try{iteratorClose$6(r.inner.iterator,"normal")}catch(t){return iteratorClose$6(n,"throw",t)}return n&&iteratorClose$6(n,"normal"),createIterResultObject(void 0,!0)}})},WrapForValidIteratorPrototype=createIteratorProxyPrototype(!0),IteratorHelperPrototype=createIteratorProxyPrototype(!1);createNonEnumerableProperty$2(IteratorHelperPrototype,TO_STRING_TAG$3,"Iterator Helper");var iteratorCreateProxy=function(t,e,r){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?WRAP_FOR_VALID_ITERATOR:ITERATOR_HELPER,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,setInternalState(this,i)};return n.prototype=e?WrapForValidIteratorPrototype:IteratorHelperPrototype,n},$$v=_export,call$d=functionCall,anObject$h=anObject$o,getIteratorDirect$c=getIteratorDirect$d,notANaN$1=notANan,toPositiveInteger$1=toPositiveInteger$2,createIteratorProxy$5=iteratorCreateProxy,IS_PURE$6=isPure,IteratorProxy$5=createIteratorProxy$5((function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=anObject$h(call$d(r,e)),this.done=!!t.done)return;if(t=anObject$h(call$d(r,e)),!(this.done=!!t.done))return t.value}));$$v({target:"Iterator",proto:!0,real:!0,forced:IS_PURE$6},{drop:function(t){anObject$h(this);var e=toPositiveInteger$1(notANaN$1(+t));return new IteratorProxy$5(getIteratorDirect$c(this),{remaining:e})}});var classofRaw$1=classofRaw$2,uncurryThis$g=functionUncurryThis,functionUncurryThisClause=function(t){if("Function"===classofRaw$1(t))return uncurryThis$g(t)},uncurryThis$f=functionUncurryThisClause,aCallable$f=aCallable$j,NATIVE_BIND$1=functionBindNative,bind$2=functionUncurryThisClause(functionUncurryThisClause.bind),functionBindContext=function(t,e){return aCallable$f(t),void 0===e?t:NATIVE_BIND$1?bind$2(t,e):function(){return t.apply(e,arguments)}},iterators={},wellKnownSymbol$5=wellKnownSymbol$b,Iterators$1=iterators,ITERATOR$2=wellKnownSymbol$5("iterator"),ArrayPrototype=Array.prototype,isArrayIteratorMethod$1=function(t){return void 0!==t&&(Iterators$1.Array===t||ArrayPrototype[ITERATOR$2]===t)},wellKnownSymbol$4=wellKnownSymbol$b,TO_STRING_TAG$2=wellKnownSymbol$4("toStringTag"),test={};test[TO_STRING_TAG$2]="z";var toStringTagSupport="[object z]"===String(test),TO_STRING_TAG_SUPPORT=toStringTagSupport,isCallable$6=isCallable$k,classofRaw=classofRaw$2,wellKnownSymbol$3=wellKnownSymbol$b,TO_STRING_TAG$1=wellKnownSymbol$3("toStringTag"),$Object=Object,CORRECT_ARGUMENTS="Arguments"===classofRaw(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}},classof$6=TO_STRING_TAG_SUPPORT?classofRaw:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=$Object(t),TO_STRING_TAG$1))?r:CORRECT_ARGUMENTS?classofRaw(e):"Object"===(n=classofRaw(e))&&isCallable$6(e.callee)?"Arguments":n},classof$5=classof$6,getMethod=getMethod$4,isNullOrUndefined$1=isNullOrUndefined$4,Iterators=iterators,wellKnownSymbol$2=wellKnownSymbol$b,ITERATOR$1=wellKnownSymbol$2("iterator"),getIteratorMethod$3=function(t){if(!isNullOrUndefined$1(t))return getMethod(t,ITERATOR$1)||getMethod(t,"@@iterator")||Iterators[classof$5(t)]},call$c=functionCall,aCallable$e=aCallable$j,anObject$g=anObject$o,tryToString$1=tryToString$4,getIteratorMethod$2=getIteratorMethod$3,$TypeError$7=TypeError,getIterator$1=function(t,e){var r=arguments.length<2?getIteratorMethod$2(t):e;if(aCallable$e(r))return anObject$g(call$c(r,t));throw new $TypeError$7(tryToString$1(t)+" is not iterable")},bind$1=functionBindContext,call$b=functionCall,anObject$f=anObject$o,tryToString=tryToString$4,isArrayIteratorMethod=isArrayIteratorMethod$1,lengthOfArrayLike$1=lengthOfArrayLike$9,isPrototypeOf$2=objectIsPrototypeOf,getIterator=getIterator$1,getIteratorMethod$1=getIteratorMethod$3,iteratorClose$5=iteratorClose$7,$TypeError$6=TypeError,Result=function(t,e){this.stopped=t,this.result=e},ResultPrototype=Result.prototype,iterate$b=function(t,e,r){var n,i,a,s,o,l,c,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),g=!(!r||!r.INTERRUPTED),b=bind$1(e,u),y=function(t){return n&&iteratorClose$5(n,"normal",t),new Result(!0,t)},m=function(t){return d?(anObject$f(t),g?b(t[0],t[1],y):b(t[0],t[1])):g?b(t,y):b(t)};if(h)n=t.iterator;else if(p)n=t;else{if(!(i=getIteratorMethod$1(t)))throw new $TypeError$6(tryToString(t)+" is not iterable");if(isArrayIteratorMethod(i)){for(a=0,s=lengthOfArrayLike$1(t);s>a;a++)if((o=m(t[a]))&&isPrototypeOf$2(ResultPrototype,o))return o;return new Result(!1)}n=getIterator(t,i)}for(l=h?t.next:n.next;!(c=call$b(l,n)).done;){try{o=m(c.value)}catch(t){iteratorClose$5(n,"throw",t)}if("object"==typeof o&&o&&isPrototypeOf$2(ResultPrototype,o))return o}return new Result(!1)},$$u=_export,iterate$a=iterate$b,aCallable$d=aCallable$j,anObject$e=anObject$o,getIteratorDirect$b=getIteratorDirect$d;$$u({target:"Iterator",proto:!0,real:!0},{every:function(t){anObject$e(this),aCallable$d(t);var e=getIteratorDirect$b(this),r=0;return!iterate$a(e,(function(e,n){if(!t(e,r++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var anObject$d=anObject$o,iteratorClose$4=iteratorClose$7,callWithSafeIterationClosing$2=function(t,e,r,n){try{return n?e(anObject$d(r)[0],r[1]):e(r)}catch(e){iteratorClose$4(t,"throw",e)}},$$t=_export,call$a=functionCall,aCallable$c=aCallable$j,anObject$c=anObject$o,getIteratorDirect$a=getIteratorDirect$d,createIteratorProxy$4=iteratorCreateProxy,callWithSafeIterationClosing$1=callWithSafeIterationClosing$2,IS_PURE$5=isPure,IteratorProxy$4=createIteratorProxy$4((function(){for(var t,e,r=this.iterator,n=this.predicate,i=this.next;;){if(t=anObject$c(call$a(i,r)),this.done=!!t.done)return;if(e=t.value,callWithSafeIterationClosing$1(r,n,[e,this.counter++],!0))return e}}));$$t({target:"Iterator",proto:!0,real:!0,forced:IS_PURE$5},{filter:function(t){return anObject$c(this),aCallable$c(t),new IteratorProxy$4(getIteratorDirect$a(this),{predicate:t})}});var $$s=_export,iterate$9=iterate$b,aCallable$b=aCallable$j,anObject$b=anObject$o,getIteratorDirect$9=getIteratorDirect$d;$$s({target:"Iterator",proto:!0,real:!0},{find:function(t){anObject$b(this),aCallable$b(t);var e=getIteratorDirect$9(this),r=0;return iterate$9(e,(function(e,n){if(t(e,r++))return n(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}});var call$9=functionCall,anObject$a=anObject$o,getIteratorDirect$8=getIteratorDirect$d,getIteratorMethod=getIteratorMethod$3,getIteratorFlattenable$2=function(t,e){e&&"string"==typeof t||anObject$a(t);var r=getIteratorMethod(t);return getIteratorDirect$8(anObject$a(void 0!==r?call$9(r,t):t))},$$r=_export,call$8=functionCall,aCallable$a=aCallable$j,anObject$9=anObject$o,getIteratorDirect$7=getIteratorDirect$d,getIteratorFlattenable$1=getIteratorFlattenable$2,createIteratorProxy$3=iteratorCreateProxy,iteratorClose$3=iteratorClose$7,IS_PURE$4=isPure,IteratorProxy$3=createIteratorProxy$3((function(){for(var t,e,r=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=anObject$9(call$8(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){iteratorClose$3(r,"throw",t)}if(t=anObject$9(call$8(this.next,r)),this.done=!!t.done)return;try{this.inner=getIteratorFlattenable$1(n(t.value,this.counter++),!1)}catch(t){iteratorClose$3(r,"throw",t)}}}));$$r({target:"Iterator",proto:!0,real:!0,forced:IS_PURE$4},{flatMap:function(t){return anObject$9(this),aCallable$a(t),new IteratorProxy$3(getIteratorDirect$7(this),{mapper:t,inner:null})}});var $$q=_export,iterate$8=iterate$b,aCallable$9=aCallable$j,anObject$8=anObject$o,getIteratorDirect$6=getIteratorDirect$d;$$q({target:"Iterator",proto:!0,real:!0},{forEach:function(t){anObject$8(this),aCallable$9(t);var e=getIteratorDirect$6(this),r=0;iterate$8(e,(function(e){t(e,r++)}),{IS_RECORD:!0})}});var $$p=_export,call$7=functionCall,toObject=toObject$5,isPrototypeOf$1=objectIsPrototypeOf,IteratorPrototype=iteratorsCore.IteratorPrototype,createIteratorProxy$2=iteratorCreateProxy,getIteratorFlattenable=getIteratorFlattenable$2,IS_PURE$3=isPure,IteratorProxy$2=createIteratorProxy$2((function(){return call$7(this.next,this.iterator)}),!0);$$p({target:"Iterator",stat:!0,forced:IS_PURE$3},{from:function(t){var e=getIteratorFlattenable("string"==typeof t?toObject(t):t,!0);return isPrototypeOf$1(IteratorPrototype,e.iterator)?e.iterator:new IteratorProxy$2(e)}});var call$6=functionCall,aCallable$8=aCallable$j,anObject$7=anObject$o,getIteratorDirect$5=getIteratorDirect$d,createIteratorProxy$1=iteratorCreateProxy,callWithSafeIterationClosing=callWithSafeIterationClosing$2,IteratorProxy$1=createIteratorProxy$1((function(){var t=this.iterator,e=anObject$7(call$6(this.next,t));if(!(this.done=!!e.done))return callWithSafeIterationClosing(t,this.mapper,[e.value,this.counter++],!0)})),iteratorMap=function(t){return anObject$7(this),aCallable$8(t),new IteratorProxy$1(getIteratorDirect$5(this),{mapper:t})},$$o=_export,map$1=iteratorMap,IS_PURE$2=isPure;$$o({target:"Iterator",proto:!0,real:!0,forced:IS_PURE$2},{map:map$1});var $$n=_export,iterate$7=iterate$b,aCallable$7=aCallable$j,anObject$6=anObject$o,getIteratorDirect$4=getIteratorDirect$d,$TypeError$5=TypeError;$$n({target:"Iterator",proto:!0,real:!0},{reduce:function(t){anObject$6(this),aCallable$7(t);var e=getIteratorDirect$4(this),r=arguments.length<2,n=r?void 0:arguments[1],i=0;if(iterate$7(e,(function(e){r?(r=!1,n=e):n=t(n,e,i),i++}),{IS_RECORD:!0}),r)throw new $TypeError$5("Reduce of empty iterator with no initial value");return n}});var $$m=_export,iterate$6=iterate$b,aCallable$6=aCallable$j,anObject$5=anObject$o,getIteratorDirect$3=getIteratorDirect$d;$$m({target:"Iterator",proto:!0,real:!0},{some:function(t){anObject$5(this),aCallable$6(t);var e=getIteratorDirect$3(this),r=0;return iterate$6(e,(function(e,n){if(t(e,r++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var $$l=_export,call$5=functionCall,anObject$4=anObject$o,getIteratorDirect$2=getIteratorDirect$d,notANaN=notANan,toPositiveInteger=toPositiveInteger$2,createIteratorProxy=iteratorCreateProxy,iteratorClose$2=iteratorClose$7,IS_PURE$1=isPure,IteratorProxy=createIteratorProxy((function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,iteratorClose$2(t,"normal",void 0);var e=anObject$4(call$5(this.next,t));return(this.done=!!e.done)?void 0:e.value}));$$l({target:"Iterator",proto:!0,real:!0,forced:IS_PURE$1},{take:function(t){anObject$4(this);var e=toPositiveInteger(notANaN(+t));return new IteratorProxy(getIteratorDirect$2(this),{remaining:e})}});var $$k=_export,anObject$3=anObject$o,iterate$5=iterate$b,getIteratorDirect$1=getIteratorDirect$d,push$4=[].push;$$k({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return iterate$5(getIteratorDirect$1(anObject$3(this)),push$4,{that:t,IS_RECORD:!0}),t}});var uncurryThis$e=functionUncurryThis,MapPrototype=Map.prototype,mapHelpers={Map:Map,set:uncurryThis$e(MapPrototype.set),get:uncurryThis$e(MapPrototype.get),has:uncurryThis$e(MapPrototype.has),remove:uncurryThis$e(MapPrototype.delete)},$$j=_export,uncurryThis$d=functionUncurryThis,aCallable$5=aCallable$j,requireObjectCoercible$4=requireObjectCoercible$7,iterate$4=iterate$b,MapHelpers$1=mapHelpers,fails$a=fails$o,Map$2=MapHelpers$1.Map,has$6=MapHelpers$1.has,get$2=MapHelpers$1.get,set$3=MapHelpers$1.set,push$3=uncurryThis$d([].push),DOES_NOT_WORK_WITH_PRIMITIVES$1=fails$a((function(){return 1!==Map$2.groupBy("ab",(function(t){return t})).get("a").length}));$$j({target:"Map",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES$1},{groupBy:function(t,e){requireObjectCoercible$4(t),aCallable$5(e);var r=new Map$2,n=0;return iterate$4(t,(function(t){var i=e(t,n++);has$6(r,i)?push$3(get$2(r,i),t):set$3(r,i,[t])})),r}});var $$i=_export,getBuiltIn$6=getBuiltIn$a,uncurryThis$c=functionUncurryThis,aCallable$4=aCallable$j,requireObjectCoercible$3=requireObjectCoercible$7,toPropertyKey=toPropertyKey$3,iterate$3=iterate$b,fails$9=fails$o,nativeGroupBy=Object.groupBy,create$1=getBuiltIn$6("Object","create"),push$2=uncurryThis$c([].push),DOES_NOT_WORK_WITH_PRIMITIVES=!nativeGroupBy||fails$9((function(){return 1!==nativeGroupBy("ab",(function(t){return t})).a.length}));$$i({target:"Object",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES},{groupBy:function(t,e){requireObjectCoercible$3(t),aCallable$4(e);var r=create$1(null),n=0;return iterate$3(t,(function(t){var i=toPropertyKey(e(t,n++));i in r?push$2(r[i],t):r[i]=[t]})),r}});var NATIVE_BIND=functionBindNative,FunctionPrototype=Function.prototype,apply$3=FunctionPrototype.apply,call$4=FunctionPrototype.call,functionApply="object"==typeof Reflect&&Reflect.apply||(NATIVE_BIND?call$4.bind(apply$3):function(){return call$4.apply(apply$3,arguments)}),uncurryThis$b=functionUncurryThis,arraySlice$2=uncurryThis$b([].slice),newPromiseCapability={},aCallable$3=aCallable$j,$TypeError$4=TypeError,PromiseCapability=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw new $TypeError$4("Bad Promise constructor");e=t,r=n})),this.resolve=aCallable$3(e),this.reject=aCallable$3(r)};newPromiseCapability.f=function(t){return new PromiseCapability(t)};var perform$1=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},$$h=_export,globalThis$9=globalThis_1,apply$2=functionApply,slice=arraySlice$2,newPromiseCapabilityModule$1=newPromiseCapability,aCallable$2=aCallable$j,perform=perform$1,Promise$1=globalThis$9.Promise,ACCEPT_ARGUMENTS=!1,FORCED$1=!Promise$1||!Promise$1.try||perform((function(){Promise$1.try((function(t){ACCEPT_ARGUMENTS=8===t}),8)})).error||!ACCEPT_ARGUMENTS;$$h({target:"Promise",stat:!0,forced:FORCED$1},{try:function(t){var e=arguments.length>1?slice(arguments,1):[],r=newPromiseCapabilityModule$1.f(this),n=perform((function(){return apply$2(aCallable$2(t),void 0,e)}));return(n.error?r.reject:r.resolve)(n.value),r.promise}});var $$g=_export,newPromiseCapabilityModule=newPromiseCapability;$$g({target:"Promise",stat:!0},{withResolvers:function(){var t=newPromiseCapabilityModule.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var anObject$2=anObject$o,regexpFlags=function(){var t=anObject$2(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},globalThis$8=globalThis_1,DESCRIPTORS$4=descriptors,defineBuiltInAccessor$2=defineBuiltInAccessor$5,regExpFlags$1=regexpFlags,fails$8=fails$o,RegExp$1=globalThis$8.RegExp,RegExpPrototype$1=RegExp$1.prototype,FORCED=DESCRIPTORS$4&&fails$8((function(){var t=!0;try{RegExp$1(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)i(s,a[s]);return Object.getOwnPropertyDescriptor(RegExpPrototype$1,"flags").get.call(e)!==n||r!==n}));FORCED&&defineBuiltInAccessor$2(RegExpPrototype$1,"flags",{configurable:!0,get:regExpFlags$1});var uncurryThis$a=functionUncurryThis,SetPrototype$1=Set.prototype,setHelpers={Set:Set,add:uncurryThis$a(SetPrototype$1.add),has:uncurryThis$a(SetPrototype$1.has),remove:uncurryThis$a(SetPrototype$1.delete),proto:SetPrototype$1},has$5=setHelpers.has,aSet$7=function(t){return has$5(t),t},call$3=functionCall,iterateSimple$7=function(t,e,r){for(var n,i,a=r?t:t.iterator,s=t.next;!(n=call$3(s,a)).done;)if(void 0!==(i=e(n.value)))return i},uncurryThis$9=functionUncurryThis,iterateSimple$6=iterateSimple$7,SetHelpers$6=setHelpers,Set$4=SetHelpers$6.Set,SetPrototype=SetHelpers$6.proto,forEach$2=uncurryThis$9(SetPrototype.forEach),keys=uncurryThis$9(SetPrototype.keys),next=keys(new Set$4).next,setIterate$1=function(t,e,r){return r?iterateSimple$6({iterator:keys(t),next:next},e):forEach$2(t,e)},SetHelpers$5=setHelpers,iterate$2=setIterate$1,Set$3=SetHelpers$5.Set,add$3=SetHelpers$5.add,setClone=function(t){var e=new Set$3;return iterate$2(t,(function(t){add$3(e,t)})),e},uncurryThisAccessor$1=functionUncurryThisAccessor,SetHelpers$4=setHelpers,setSize=uncurryThisAccessor$1(SetHelpers$4.proto,"size","get")||function(t){return t.size},aCallable$1=aCallable$j,anObject$1=anObject$o,call$2=functionCall,toIntegerOrInfinity$1=toIntegerOrInfinity$8,getIteratorDirect=getIteratorDirect$d,INVALID_SIZE="Invalid size",$RangeError=RangeError,$TypeError$3=TypeError,max=Math.max,SetRecord=function(t,e){this.set=t,this.size=max(e,0),this.has=aCallable$1(t.has),this.keys=aCallable$1(t.keys)};SetRecord.prototype={getIterator:function(){return getIteratorDirect(anObject$1(call$2(this.keys,this.set)))},includes:function(t){return call$2(this.has,this.set,t)}};var getSetRecord$7=function(t){anObject$1(t);var e=+t.size;if(e!=e)throw new $TypeError$3(INVALID_SIZE);var r=toIntegerOrInfinity$1(e);if(r<0)throw new $RangeError(INVALID_SIZE);return new SetRecord(t,r)},aSet$6=aSet$7,SetHelpers$3=setHelpers,clone$2=setClone,size$4=setSize,getSetRecord$6=getSetRecord$7,iterateSet$2=setIterate$1,iterateSimple$5=iterateSimple$7,has$4=SetHelpers$3.has,remove$2=SetHelpers$3.remove,setDifference=function(t){var e=aSet$6(this),r=getSetRecord$6(t),n=clone$2(e);return size$4(e)<=r.size?iterateSet$2(e,(function(t){r.includes(t)&&remove$2(n,t)})):iterateSimple$5(r.getIterator(),(function(t){has$4(e,t)&&remove$2(n,t)})),n},getBuiltIn$5=getBuiltIn$a,createSetLike=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},createSetLikeWithInfinitySize=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},setMethodAcceptSetLike$7=function(t,e){var r=getBuiltIn$5("Set");try{(new r)[t](createSetLike(0));try{return(new r)[t](createSetLike(-1)),!1}catch(i){if(!e)return!0;try{return(new r)[t](createSetLikeWithInfinitySize(-1/0)),!1}catch(i){var n=new r;return n.add(1),n.add(2),e(n[t](createSetLikeWithInfinitySize(1/0)))}}}catch(t){return!1}},$$f=_export,difference=setDifference,setMethodAcceptSetLike$6=setMethodAcceptSetLike$7,INCORRECT$4=!setMethodAcceptSetLike$6("difference",(function(t){return 0===t.size}));$$f({target:"Set",proto:!0,real:!0,forced:INCORRECT$4},{difference:difference});var aSet$5=aSet$7,SetHelpers$2=setHelpers,size$3=setSize,getSetRecord$5=getSetRecord$7,iterateSet$1=setIterate$1,iterateSimple$4=iterateSimple$7,Set$2=SetHelpers$2.Set,add$2=SetHelpers$2.add,has$3=SetHelpers$2.has,setIntersection=function(t){var e=aSet$5(this),r=getSetRecord$5(t),n=new Set$2;return size$3(e)>r.size?iterateSimple$4(r.getIterator(),(function(t){has$3(e,t)&&add$2(n,t)})):iterateSet$1(e,(function(t){r.includes(t)&&add$2(n,t)})),n},$$e=_export,fails$7=fails$o,intersection=setIntersection,setMethodAcceptSetLike$5=setMethodAcceptSetLike$7,INCORRECT$3=!setMethodAcceptSetLike$5("intersection",(function(t){return 2===t.size&&t.has(1)&&t.has(2)}))||fails$7((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));$$e({target:"Set",proto:!0,real:!0,forced:INCORRECT$3},{intersection:intersection});var aSet$4=aSet$7,has$2=setHelpers.has,size$2=setSize,getSetRecord$4=getSetRecord$7,iterateSet=setIterate$1,iterateSimple$3=iterateSimple$7,iteratorClose$1=iteratorClose$7,setIsDisjointFrom=function(t){var e=aSet$4(this),r=getSetRecord$4(t);if(size$2(e)<=r.size)return!1!==iterateSet(e,(function(t){if(r.includes(t))return!1}),!0);var n=r.getIterator();return!1!==iterateSimple$3(n,(function(t){if(has$2(e,t))return iteratorClose$1(n,"normal",!1)}))},$$d=_export,isDisjointFrom=setIsDisjointFrom,setMethodAcceptSetLike$4=setMethodAcceptSetLike$7,INCORRECT$2=!setMethodAcceptSetLike$4("isDisjointFrom",(function(t){return!t}));$$d({target:"Set",proto:!0,real:!0,forced:INCORRECT$2},{isDisjointFrom:isDisjointFrom});var aSet$3=aSet$7,size$1=setSize,iterate$1=setIterate$1,getSetRecord$3=getSetRecord$7,setIsSubsetOf=function(t){var e=aSet$3(this),r=getSetRecord$3(t);return!(size$1(e)>r.size)&&!1!==iterate$1(e,(function(t){if(!r.includes(t))return!1}),!0)},$$c=_export,isSubsetOf=setIsSubsetOf,setMethodAcceptSetLike$3=setMethodAcceptSetLike$7,INCORRECT$1=!setMethodAcceptSetLike$3("isSubsetOf",(function(t){return t}));$$c({target:"Set",proto:!0,real:!0,forced:INCORRECT$1},{isSubsetOf:isSubsetOf});var aSet$2=aSet$7,has$1=setHelpers.has,size=setSize,getSetRecord$2=getSetRecord$7,iterateSimple$2=iterateSimple$7,iteratorClose=iteratorClose$7,setIsSupersetOf=function(t){var e=aSet$2(this),r=getSetRecord$2(t);if(size(e)<r.size)return!1;var n=r.getIterator();return!1!==iterateSimple$2(n,(function(t){if(!has$1(e,t))return iteratorClose(n,"normal",!1)}))},$$b=_export,isSupersetOf=setIsSupersetOf,setMethodAcceptSetLike$2=setMethodAcceptSetLike$7,INCORRECT=!setMethodAcceptSetLike$2("isSupersetOf",(function(t){return!t}));$$b({target:"Set",proto:!0,real:!0,forced:INCORRECT},{isSupersetOf:isSupersetOf});var aSet$1=aSet$7,SetHelpers$1=setHelpers,clone$1=setClone,getSetRecord$1=getSetRecord$7,iterateSimple$1=iterateSimple$7,add$1=SetHelpers$1.add,has=SetHelpers$1.has,remove$1=SetHelpers$1.remove,setSymmetricDifference=function(t){var e=aSet$1(this),r=getSetRecord$1(t).getIterator(),n=clone$1(e);return iterateSimple$1(r,(function(t){has(e,t)?remove$1(n,t):add$1(n,t)})),n},$$a=_export,symmetricDifference=setSymmetricDifference,setMethodAcceptSetLike$1=setMethodAcceptSetLike$7;$$a({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$1("symmetricDifference")},{symmetricDifference:symmetricDifference});var aSet=aSet$7,add=setHelpers.add,clone=setClone,getSetRecord=getSetRecord$7,iterateSimple=iterateSimple$7,setUnion=function(t){var e=aSet(this),r=getSetRecord(t).getIterator(),n=clone(e);return iterateSimple(r,(function(t){add(n,t)})),n},$$9=_export,union=setUnion,setMethodAcceptSetLike=setMethodAcceptSetLike$7;$$9({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike("union")},{union:union});var classof$4=classof$6,$String$1=String,toString$7=function(t){if("Symbol"===classof$4(t))throw new TypeError("Cannot convert a Symbol value to a string");return $String$1(t)},$$8=_export,uncurryThis$8=functionUncurryThis,requireObjectCoercible$2=requireObjectCoercible$7,toString$6=toString$7,charCodeAt$1=uncurryThis$8("".charCodeAt);$$8({target:"String",proto:!0},{isWellFormed:function(){for(var t=toString$6(requireObjectCoercible$2(this)),e=t.length,r=0;r<e;r++){var n=charCodeAt$1(t,r);if(55296==(63488&n)&&(n>=56320||++r>=e||56320!=(64512&charCodeAt$1(t,r))))return!1}return!0}});var $$7=_export,call$1=functionCall,uncurryThis$7=functionUncurryThis,requireObjectCoercible$1=requireObjectCoercible$7,toString$5=toString$7,fails$6=fails$o,$Array=Array,charAt=uncurryThis$7("".charAt),charCodeAt=uncurryThis$7("".charCodeAt),join=uncurryThis$7([].join),$toWellFormed="".toWellFormed,REPLACEMENT_CHARACTER="�",TO_STRING_CONVERSION_BUG=$toWellFormed&&fails$6((function(){return"1"!==call$1($toWellFormed,1)}));$$7({target:"String",proto:!0,forced:TO_STRING_CONVERSION_BUG},{toWellFormed:function(){var t=toString$5(requireObjectCoercible$1(this));if(TO_STRING_CONVERSION_BUG)return call$1($toWellFormed,t);for(var e=t.length,r=$Array(e),n=0;n<e;n++){var i=charCodeAt(t,n);55296!=(63488&i)?r[n]=charAt(t,n):i>=56320||n+1>=e||56320!=(64512&charCodeAt(t,n+1))?r[n]=REPLACEMENT_CHARACTER:(r[n]=charAt(t,n),r[++n]=charAt(t,n))}return join(r,"")}});var NAME$2,Constructor,Prototype,isObject$4=isObject$b,isPossiblePrototype$1=function(t){return isObject$4(t)||null===t},isPossiblePrototype=isPossiblePrototype$1,$String=String,$TypeError$2=TypeError,aPossiblePrototype$1=function(t){if(isPossiblePrototype(t))return t;throw new $TypeError$2("Can't set "+$String(t)+" as a prototype")},uncurryThisAccessor=functionUncurryThisAccessor,isObject$3=isObject$b,requireObjectCoercible=requireObjectCoercible$7,aPossiblePrototype=aPossiblePrototype$1,objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=uncurryThisAccessor(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return requireObjectCoercible(r),aPossiblePrototype(n),isObject$3(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),NATIVE_ARRAY_BUFFER=arrayBufferBasicDetection,DESCRIPTORS$3=descriptors,globalThis$7=globalThis_1,isCallable$5=isCallable$k,isObject$2=isObject$b,hasOwn$4=hasOwnProperty_1,classof$3=classof$6,createNonEnumerableProperty$1=createNonEnumerableProperty$5,defineBuiltIn$2=defineBuiltIn$6,defineBuiltInAccessor$1=defineBuiltInAccessor$5,getPrototypeOf=objectGetPrototypeOf,setPrototypeOf$1=objectSetPrototypeOf,wellKnownSymbol$1=wellKnownSymbol$b,uid$1=uid$4,InternalStateModule=internalState,enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,Int8Array$1=globalThis$7.Int8Array,Int8ArrayPrototype=Int8Array$1&&Int8Array$1.prototype,Uint8ClampedArray=globalThis$7.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype,TypedArray=Int8Array$1&&getPrototypeOf(Int8Array$1),TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype),ObjectPrototype=Object.prototype,TypeError$2=globalThis$7.TypeError,TO_STRING_TAG=wellKnownSymbol$1("toStringTag"),TYPED_ARRAY_TAG=uid$1("TYPED_ARRAY_TAG"),TYPED_ARRAY_CONSTRUCTOR="TypedArrayConstructor",NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf$1&&"Opera"!==classof$3(globalThis$7.opera),TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},getTypedArrayConstructor$3=function(t){var e=getPrototypeOf(t);if(isObject$2(e)){var r=getInternalState(e);return r&&hasOwn$4(r,TYPED_ARRAY_CONSTRUCTOR)?r[TYPED_ARRAY_CONSTRUCTOR]:getTypedArrayConstructor$3(e)}},isTypedArray=function(t){if(!isObject$2(t))return!1;var e=classof$3(t);return hasOwn$4(TypedArrayConstructorsList,e)||hasOwn$4(BigIntArrayConstructorsList,e)},aTypedArray$3=function(t){if(isTypedArray(t))return t;throw new TypeError$2("Target is not a typed array")},exportTypedArrayMethod$3=function(t,e,r,n){if(DESCRIPTORS$3){if(r)for(var i in TypedArrayConstructorsList){var a=globalThis$7[i];if(a&&hasOwn$4(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}TypedArrayPrototype[t]&&!r||defineBuiltIn$2(TypedArrayPrototype,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[t]||e,n)}};for(NAME$2 in TypedArrayConstructorsList)(Prototype=(Constructor=globalThis$7[NAME$2])&&Constructor.prototype)?enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor:NATIVE_ARRAY_BUFFER_VIEWS=!1;for(NAME$2 in BigIntArrayConstructorsList)(Prototype=(Constructor=globalThis$7[NAME$2])&&Constructor.prototype)&&(enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable$5(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function(){throw new TypeError$2("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$2 in TypedArrayConstructorsList)globalThis$7[NAME$2]&&setPrototypeOf$1(globalThis$7[NAME$2],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$2 in TypedArrayConstructorsList)globalThis$7[NAME$2]&&setPrototypeOf$1(globalThis$7[NAME$2].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&setPrototypeOf$1(Uint8ClampedArrayPrototype,TypedArrayPrototype),DESCRIPTORS$3&&!hasOwn$4(TypedArrayPrototype,TO_STRING_TAG))for(NAME$2 in defineBuiltInAccessor$1(TypedArrayPrototype,TO_STRING_TAG,{configurable:!0,get:function(){return isObject$2(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)globalThis$7[NAME$2]&&createNonEnumerableProperty$1(globalThis$7[NAME$2],TYPED_ARRAY_TAG,NAME$2);var arrayBufferViewCore={aTypedArray:aTypedArray$3,exportTypedArrayMethod:exportTypedArrayMethod$3,getTypedArrayConstructor:getTypedArrayConstructor$3,TypedArrayPrototype:TypedArrayPrototype},arrayToReversed=arrayToReversed$2,ArrayBufferViewCore$2=arrayBufferViewCore,aTypedArray$2=ArrayBufferViewCore$2.aTypedArray,exportTypedArrayMethod$2=ArrayBufferViewCore$2.exportTypedArrayMethod,getTypedArrayConstructor$2=ArrayBufferViewCore$2.getTypedArrayConstructor;exportTypedArrayMethod$2("toReversed",(function(){return arrayToReversed(aTypedArray$2(this),getTypedArrayConstructor$2(this))}));var ArrayBufferViewCore$1=arrayBufferViewCore,uncurryThis$6=functionUncurryThis,aCallable=aCallable$j,arrayFromConstructorAndList=arrayFromConstructorAndList$2,aTypedArray$1=ArrayBufferViewCore$1.aTypedArray,getTypedArrayConstructor$1=ArrayBufferViewCore$1.getTypedArrayConstructor,exportTypedArrayMethod$1=ArrayBufferViewCore$1.exportTypedArrayMethod,sort=uncurryThis$6(ArrayBufferViewCore$1.TypedArrayPrototype.sort);exportTypedArrayMethod$1("toSorted",(function(t){void 0!==t&&aCallable(t);var e=aTypedArray$1(this),r=arrayFromConstructorAndList(getTypedArrayConstructor$1(e),e);return sort(r,t)}));var classof$2=classof$6,isBigIntArray$1=function(t){var e=classof$2(t);return"BigInt64Array"===e||"BigUint64Array"===e},toPrimitive=toPrimitive$2,$TypeError$1=TypeError,toBigInt$1=function(t){var e=toPrimitive(t,"number");if("number"==typeof e)throw new $TypeError$1("Can't convert number to bigint");return BigInt(e)},arrayWith=arrayWith$2,ArrayBufferViewCore=arrayBufferViewCore,isBigIntArray=isBigIntArray$1,toIntegerOrInfinity=toIntegerOrInfinity$8,toBigInt=toBigInt$1,aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,PROPER_ORDER=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();exportTypedArrayMethod("with",{with:function(t,e){var r=aTypedArray(this),n=toIntegerOrInfinity(t),i=isBigIntArray(r)?toBigInt(e):+e;return arrayWith(r,getTypedArrayConstructor(r),n,i)}}.with,!PROPER_ORDER);var isCallable$4=isCallable$k,isObject$1=isObject$b,setPrototypeOf=objectSetPrototypeOf,inheritIfRequired$1=function(t,e,r){var n,i;return setPrototypeOf&&isCallable$4(n=e.constructor)&&n!==r&&isObject$1(i=n.prototype)&&i!==r.prototype&&setPrototypeOf(t,i),t},toString$4=toString$7,normalizeStringArgument$1=function(t,e){return void 0===t?arguments.length<2?"":e:toString$4(t)},domExceptionConstants={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},uncurryThis$5=functionUncurryThis,$Error=Error,replace=uncurryThis$5("".replace),TEST=String(new $Error("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),errorStackClear=function(t,e){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof t&&!$Error.prepareStackTrace)for(;e--;)t=replace(t,V8_OR_CHAKRA_STACK_ENTRY,"");return t},$$6=_export,globalThis$6=globalThis_1,getBuiltIn$4=getBuiltIn$a,createPropertyDescriptor$1=createPropertyDescriptor$5,defineProperty=objectDefineProperty.f,hasOwn$3=hasOwnProperty_1,anInstance=anInstance$2,inheritIfRequired=inheritIfRequired$1,normalizeStringArgument=normalizeStringArgument$1,DOMExceptionConstants=domExceptionConstants,clearErrorStack=errorStackClear,DESCRIPTORS$2=descriptors,DOM_EXCEPTION="DOMException",Error$2=getBuiltIn$4("Error"),NativeDOMException=getBuiltIn$4(DOM_EXCEPTION),$DOMException=function(){anInstance(this,DOMExceptionPrototype);var t=arguments.length,e=normalizeStringArgument(t<1?void 0:arguments[0]),r=normalizeStringArgument(t<2?void 0:arguments[1],"Error"),n=new NativeDOMException(e,r),i=new Error$2(e);return i.name=DOM_EXCEPTION,defineProperty(n,"stack",createPropertyDescriptor$1(1,clearErrorStack(i.stack,1))),inheritIfRequired(n,this,$DOMException),n},DOMExceptionPrototype=$DOMException.prototype=NativeDOMException.prototype,ERROR_HAS_STACK="stack"in new Error$2(DOM_EXCEPTION),DOM_EXCEPTION_HAS_STACK="stack"in new NativeDOMException(1,2),descriptor=NativeDOMException&&DESCRIPTORS$2&&Object.getOwnPropertyDescriptor(globalThis$6,DOM_EXCEPTION),BUGGY_DESCRIPTOR=!(!descriptor||descriptor.writable&&descriptor.configurable),FORCED_CONSTRUCTOR=ERROR_HAS_STACK&&!BUGGY_DESCRIPTOR&&!DOM_EXCEPTION_HAS_STACK;$$6({global:!0,constructor:!0,forced:FORCED_CONSTRUCTOR},{DOMException:FORCED_CONSTRUCTOR?$DOMException:NativeDOMException});var PolyfilledDOMException=getBuiltIn$4(DOM_EXCEPTION),PolyfilledDOMExceptionPrototype=PolyfilledDOMException.prototype;if(PolyfilledDOMExceptionPrototype.constructor!==PolyfilledDOMException)for(var key in defineProperty(PolyfilledDOMExceptionPrototype,"constructor",createPropertyDescriptor$1(1,PolyfilledDOMException)),DOMExceptionConstants)if(hasOwn$3(DOMExceptionConstants,key)){var constant$4=DOMExceptionConstants[key],constantName=constant$4.s;hasOwn$3(PolyfilledDOMException,constantName)||defineProperty(PolyfilledDOMException,constantName,createPropertyDescriptor$1(6,constant$4.c))}var $location,defer,channel,port,$TypeError=TypeError,validateArgumentsLength$7=function(t,e){if(t<e)throw new $TypeError("Not enough arguments");return t},userAgent=environmentUserAgent,environmentIsIos=/(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent),globalThis$5=globalThis_1,apply$1=functionApply,bind=functionBindContext,isCallable$3=isCallable$k,hasOwn$2=hasOwnProperty_1,fails$5=fails$o,html=html$2,arraySlice$1=arraySlice$2,createElement=documentCreateElement$1,validateArgumentsLength$6=validateArgumentsLength$7,IS_IOS=environmentIsIos,IS_NODE=environmentIsNode,set$2=globalThis$5.setImmediate,clear=globalThis$5.clearImmediate,process=globalThis$5.process,Dispatch$1=globalThis$5.Dispatch,Function$2=globalThis$5.Function,MessageChannel=globalThis$5.MessageChannel,String$1=globalThis$5.String,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange";fails$5((function(){$location=globalThis$5.location}));var run=function(t){if(hasOwn$2(queue,t)){var e=queue[t];delete queue[t],e()}},runner=function(t){return function(){run(t)}},eventListener=function(t){run(t.data)},globalPostMessageDefer=function(t){globalThis$5.postMessage(String$1(t),$location.protocol+"//"+$location.host)};set$2&&clear||(set$2=function(t){validateArgumentsLength$6(arguments.length,1);var e=isCallable$3(t)?t:Function$2(t),r=arraySlice$1(arguments,1);return queue[++counter]=function(){apply$1(e,void 0,r)},defer(counter),counter},clear=function(t){delete queue[t]},IS_NODE?defer=function(t){process.nextTick(runner(t))}:Dispatch$1&&Dispatch$1.now?defer=function(t){Dispatch$1.now(runner(t))}:MessageChannel&&!IS_IOS?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=eventListener,defer=bind(port.postMessage,port)):globalThis$5.addEventListener&&isCallable$3(globalThis$5.postMessage)&&!globalThis$5.importScripts&&$location&&"file:"!==$location.protocol&&!fails$5(globalPostMessageDefer)?(defer=globalPostMessageDefer,globalThis$5.addEventListener("message",eventListener,!1)):defer=ONREADYSTATECHANGE in createElement("script")?function(t){html.appendChild(createElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(t)}}:function(t){setTimeout(runner(t),0)});var task={set:set$2,clear:clear},$$5=_export,globalThis$4=globalThis_1,clearImmediate=task.clear;$$5({global:!0,bind:!0,enumerable:!0,forced:globalThis$4.clearImmediate!==clearImmediate},{clearImmediate:clearImmediate});var globalThis$3=globalThis_1,apply=functionApply,isCallable$2=isCallable$k,ENVIRONMENT=environment,USER_AGENT=environmentUserAgent,arraySlice=arraySlice$2,validateArgumentsLength$5=validateArgumentsLength$7,Function$1=globalThis$3.Function,WRAP=/MSIE .\./.test(USER_AGENT)||"BUN"===ENVIRONMENT&&function(){var t=globalThis$3.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),schedulersFix$1=function(t,e){var r=e?2:1;return WRAP?function(n,i){var a=validateArgumentsLength$5(arguments.length,1)>r,s=isCallable$2(n)?n:Function$1(n),o=a?arraySlice(arguments,r):[],l=a?function(){apply(s,this,o)}:s;return e?t(l,i):t(l)}:t},$$4=_export,globalThis$2=globalThis_1,setTask=task.set,schedulersFix=schedulersFix$1,setImmediate=globalThis$2.setImmediate?schedulersFix(setTask,!1):setTask;$$4({global:!0,bind:!0,enumerable:!0,forced:globalThis$2.setImmediate!==setImmediate},{setImmediate:setImmediate});var uncurryThis$4=functionUncurryThis,fails$4=fails$o,isCallable$1=isCallable$k,classof$1=classof$6,getBuiltIn$3=getBuiltIn$a,inspectSource=inspectSource$2,noop$1=function(){},construct=getBuiltIn$3("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec=uncurryThis$4(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.test(noop$1),isConstructorModern=function(t){if(!isCallable$1(t))return!1;try{return construct(noop$1,[],t),!0}catch(t){return!1}},isConstructorLegacy=function(t){if(!isCallable$1(t))return!1;switch(classof$1(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec(constructorRegExp,inspectSource(t))}catch(t){return!0}};isConstructorLegacy.sham=!0;var isConstructor$1=!construct||fails$4((function(){var t;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern((function(){t=!0}))||t}))?isConstructorLegacy:isConstructorModern,call=functionCall,hasOwn$1=hasOwnProperty_1,isPrototypeOf=objectIsPrototypeOf,regExpFlags=regexpFlags,RegExpPrototype=RegExp.prototype,regexpGetFlags=function(t){var e=t.flags;return void 0!==e||"flags"in RegExpPrototype||hasOwn$1(t,"flags")||!isPrototypeOf(RegExpPrototype,t)?e:call(regExpFlags,t)},fails$3=fails$o,createPropertyDescriptor=createPropertyDescriptor$5,errorStackInstallable=!fails$3((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",createPropertyDescriptor(1,7)),7!==t.stack)})),$$3=_export,globalThis$1=globalThis_1,getBuiltIn$2=getBuiltIn$a,uncurryThis$3=functionUncurryThis,fails$2=fails$o,uid=uid$4,isCallable=isCallable$k,isConstructor=isConstructor$1,isNullOrUndefined=isNullOrUndefined$4,isObject=isObject$b,isSymbol=isSymbol$3,iterate=iterate$b,anObject=anObject$o,classof=classof$6,hasOwn=hasOwnProperty_1,createProperty=createProperty$2,createNonEnumerableProperty=createNonEnumerableProperty$5,lengthOfArrayLike=lengthOfArrayLike$9,validateArgumentsLength$4=validateArgumentsLength$7,getRegExpFlags=regexpGetFlags,MapHelpers=mapHelpers,SetHelpers=setHelpers,setIterate=setIterate$1,detachTransferable=detachTransferable$2,ERROR_STACK_INSTALLABLE=errorStackInstallable,PROPER_STRUCTURED_CLONE_TRANSFER=structuredCloneProperTransfer,Object$1=globalThis$1.Object,Array$1=globalThis$1.Array,Date$1=globalThis$1.Date,Error$1=globalThis$1.Error,TypeError$1=globalThis$1.TypeError,PerformanceMark=globalThis$1.PerformanceMark,DOMException=getBuiltIn$2("DOMException"),Map$1=MapHelpers.Map,mapHas=MapHelpers.has,mapGet=MapHelpers.get,mapSet=MapHelpers.set,Set$1=SetHelpers.Set,setAdd=SetHelpers.add,setHas=SetHelpers.has,objectKeys=getBuiltIn$2("Object","keys"),push$1=uncurryThis$3([].push),thisBooleanValue=uncurryThis$3((!0).valueOf),thisNumberValue=uncurryThis$3(1..valueOf),thisStringValue=uncurryThis$3("".valueOf),thisTimeValue=uncurryThis$3(Date$1.prototype.getTime),PERFORMANCE_MARK=uid("structuredClone"),DATA_CLONE_ERROR="DataCloneError",TRANSFERRING="Transferring",checkBasicSemantic=function(t){return!fails$2((function(){var e=new globalThis$1.Set([7]),r=t(e),n=t(Object$1(7));return r===e||!r.has(7)||!isObject(n)||7!=+n}))&&t},checkErrorsCloning=function(t,e){return!fails$2((function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)}))},checkNewErrorsCloningSemantic=function(t){return!fails$2((function(){var e=t(new globalThis$1.AggregateError([1],PERFORMANCE_MARK,{cause:3}));return"AggregateError"!==e.name||1!==e.errors[0]||e.message!==PERFORMANCE_MARK||3!==e.cause}))},nativeStructuredClone=globalThis$1.structuredClone,FORCED_REPLACEMENT=!checkErrorsCloning(nativeStructuredClone,Error$1)||!checkErrorsCloning(nativeStructuredClone,DOMException)||!checkNewErrorsCloningSemantic(nativeStructuredClone),structuredCloneFromMark=!nativeStructuredClone&&checkBasicSemantic((function(t){return new PerformanceMark(PERFORMANCE_MARK,{detail:t}).detail})),nativeRestrictedStructuredClone=checkBasicSemantic(nativeStructuredClone)||structuredCloneFromMark,throwUncloneable=function(t){throw new DOMException("Uncloneable type: "+t,DATA_CLONE_ERROR)},throwUnpolyfillable=function(t,e){throw new DOMException((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",DATA_CLONE_ERROR)},tryNativeRestrictedStructuredClone=function(t,e){return nativeRestrictedStructuredClone||throwUnpolyfillable(e),nativeRestrictedStructuredClone(t)},createDataTransfer=function(){var t;try{t=new globalThis$1.DataTransfer}catch(e){try{t=new globalThis$1.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null},cloneBuffer=function(t,e,r){if(mapHas(e,t))return mapGet(e,t);var n,i,a,s,o,l;if("SharedArrayBuffer"===(r||classof(t)))n=nativeRestrictedStructuredClone?nativeRestrictedStructuredClone(t):t;else{var c=globalThis$1.DataView;c||isCallable(t.slice)||throwUnpolyfillable("ArrayBuffer");try{if(isCallable(t.slice)&&!t.resizable)n=t.slice(0);else{i=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(i,a),s=new c(t),o=new c(n);for(l=0;l<i;l++)o.setUint8(l,s.getUint8(l))}}catch(t){throw new DOMException("ArrayBuffer is detached",DATA_CLONE_ERROR)}}return mapSet(e,t,n),n},cloneView=function(t,e,r,n,i){var a=globalThis$1[e];return isObject(a)||throwUnpolyfillable(e),new a(cloneBuffer(t.buffer,i),r,n)},structuredCloneInternal=function(t,e){if(isSymbol(t)&&throwUncloneable("Symbol"),!isObject(t))return t;if(e){if(mapHas(e,t))return mapGet(e,t)}else e=new Map$1;var r,n,i,a,s,o,l,c,u=classof(t);switch(u){case"Array":i=Array$1(lengthOfArrayLike(t));break;case"Object":i={};break;case"Map":i=new Map$1;break;case"Set":i=new Set$1;break;case"RegExp":i=new RegExp(t.source,getRegExpFlags(t));break;case"Error":switch(n=t.name){case"AggregateError":i=new(getBuiltIn$2(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(getBuiltIn$2(n));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(getBuiltIn$2("WebAssembly",n));break;default:i=new Error$1}break;case"DOMException":i=new DOMException(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=cloneBuffer(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,i=cloneView(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{i=new DOMQuad(structuredCloneInternal(t.p1,e),structuredCloneInternal(t.p2,e),structuredCloneInternal(t.p3,e),structuredCloneInternal(t.p4,e))}catch(e){i=tryNativeRestrictedStructuredClone(t,u)}break;case"File":if(nativeRestrictedStructuredClone)try{i=nativeRestrictedStructuredClone(t),classof(i)!==u&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||throwUnpolyfillable(u);break;case"FileList":if(a=createDataTransfer()){for(s=0,o=lengthOfArrayLike(t);s<o;s++)a.items.add(structuredCloneInternal(t[s],e));i=a.files}else i=tryNativeRestrictedStructuredClone(t,u);break;case"ImageData":try{i=new ImageData(structuredCloneInternal(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){i=tryNativeRestrictedStructuredClone(t,u)}break;default:if(nativeRestrictedStructuredClone)i=nativeRestrictedStructuredClone(t);else switch(u){case"BigInt":i=Object$1(t.valueOf());break;case"Boolean":i=Object$1(thisBooleanValue(t));break;case"Number":i=Object$1(thisNumberValue(t));break;case"String":i=Object$1(thisStringValue(t));break;case"Date":i=new Date$1(thisTimeValue(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){throwUnpolyfillable(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=globalThis$1[u];try{i=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){throwUnpolyfillable(u)}break;case"DOMRect":case"DOMRectReadOnly":r=globalThis$1[u];try{i=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){throwUnpolyfillable(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=globalThis$1[u];try{i=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){throwUnpolyfillable(u)}break;case"AudioData":case"VideoFrame":isCallable(t.clone)||throwUnpolyfillable(u);try{i=t.clone()}catch(t){throwUncloneable(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":throwUnpolyfillable(u);default:throwUncloneable(u)}}switch(mapSet(e,t,i),u){case"Array":case"Object":for(l=objectKeys(t),s=0,o=lengthOfArrayLike(l);s<o;s++)c=l[s],createProperty(i,c,structuredCloneInternal(t[c],e));break;case"Map":t.forEach((function(t,r){mapSet(i,structuredCloneInternal(r,e),structuredCloneInternal(t,e))}));break;case"Set":t.forEach((function(t){setAdd(i,structuredCloneInternal(t,e))}));break;case"Error":createNonEnumerableProperty(i,"message",structuredCloneInternal(t.message,e)),hasOwn(t,"cause")&&createNonEnumerableProperty(i,"cause",structuredCloneInternal(t.cause,e)),"AggregateError"===n?i.errors=structuredCloneInternal(t.errors,e):"SuppressedError"===n&&(i.error=structuredCloneInternal(t.error,e),i.suppressed=structuredCloneInternal(t.suppressed,e));case"DOMException":ERROR_STACK_INSTALLABLE&&createNonEnumerableProperty(i,"stack",structuredCloneInternal(t.stack,e))}return i},tryToTransfer=function(t,e){if(!isObject(t))throw new TypeError$1("Transfer option cannot be converted to a sequence");var r=[];iterate(t,(function(t){push$1(r,anObject(t))}));for(var n,i,a,s,o,l=0,c=lengthOfArrayLike(r),u=new Set$1;l<c;){if(n=r[l++],"ArrayBuffer"===(i=classof(n))?setHas(u,n):mapHas(e,n))throw new DOMException("Duplicate transferable",DATA_CLONE_ERROR);if("ArrayBuffer"!==i){if(PROPER_STRUCTURED_CLONE_TRANSFER)s=nativeStructuredClone(n,{transfer:[n]});else switch(i){case"ImageBitmap":a=globalThis$1.OffscreenCanvas,isConstructor(a)||throwUnpolyfillable(i,TRANSFERRING);try{(o=new a(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),s=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":isCallable(n.clone)&&isCallable(n.close)||throwUnpolyfillable(i,TRANSFERRING);try{s=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":throwUnpolyfillable(i,TRANSFERRING)}if(void 0===s)throw new DOMException("This object cannot be transferred: "+i,DATA_CLONE_ERROR);mapSet(e,n,s)}else setAdd(u,n)}return u},detachBuffers=function(t){setIterate(t,(function(t){PROPER_STRUCTURED_CLONE_TRANSFER?nativeRestrictedStructuredClone(t,{transfer:[t]}):isCallable(t.transfer)?t.transfer():detachTransferable?detachTransferable(t):throwUnpolyfillable("ArrayBuffer",TRANSFERRING)}))};$$3({global:!0,enumerable:!0,sham:!PROPER_STRUCTURED_CLONE_TRANSFER,forced:FORCED_REPLACEMENT},{structuredClone:function(t){var e,r,n=validateArgumentsLength$4(arguments.length,1)>1&&!isNullOrUndefined(arguments[1])?anObject(arguments[1]):void 0,i=n?n.transfer:void 0;void 0!==i&&(e=new Map$1,r=tryToTransfer(i,e));var a=structuredCloneInternal(t,e);return r&&detachBuffers(r),a}});var fails$1=fails$o,wellKnownSymbol=wellKnownSymbol$b,DESCRIPTORS$1=descriptors,IS_PURE=isPure,ITERATOR=wellKnownSymbol("iterator"),urlConstructorDetection=!fails$1((function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach((function(t,r){e.delete("b"),n+=r+t})),r.delete("a",2),r.delete("b",void 0),IS_PURE&&(!t.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!e.size&&(IS_PURE||!DESCRIPTORS$1)||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[ITERATOR]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==n||"x"!==new URL("https://x",void 0).host})),$$2=_export,getBuiltIn$1=getBuiltIn$a,fails=fails$o,validateArgumentsLength$3=validateArgumentsLength$7,toString$3=toString$7,USE_NATIVE_URL$1=urlConstructorDetection,URL$2=getBuiltIn$1("URL"),THROWS_WITHOUT_ARGUMENTS=USE_NATIVE_URL$1&&fails((function(){URL$2.canParse()})),WRONG_ARITY=fails((function(){return 1!==URL$2.canParse.length}));$$2({target:"URL",stat:!0,forced:!THROWS_WITHOUT_ARGUMENTS||WRONG_ARITY},{canParse:function(t){var e=validateArgumentsLength$3(arguments.length,1),r=toString$3(t),n=e<2||void 0===arguments[1]?void 0:toString$3(arguments[1]);try{return!!new URL$2(r,n)}catch(t){return!1}}});var $$1=_export,getBuiltIn=getBuiltIn$a,validateArgumentsLength$2=validateArgumentsLength$7,toString$2=toString$7,USE_NATIVE_URL=urlConstructorDetection,URL$1=getBuiltIn("URL");$$1({target:"URL",stat:!0,forced:!USE_NATIVE_URL},{parse:function(t){var e=validateArgumentsLength$2(arguments.length,1),r=toString$2(t),n=e<2||void 0===arguments[1]?void 0:toString$2(arguments[1]);try{return new URL$1(r,n)}catch(t){return null}}});var defineBuiltIn$1=defineBuiltIn$6,uncurryThis$2=functionUncurryThis,toString$1=toString$7,validateArgumentsLength$1=validateArgumentsLength$7,$URLSearchParams$1=URLSearchParams,URLSearchParamsPrototype$2=$URLSearchParams$1.prototype,append$1=uncurryThis$2(URLSearchParamsPrototype$2.append),$delete=uncurryThis$2(URLSearchParamsPrototype$2.delete),forEach$1=uncurryThis$2(URLSearchParamsPrototype$2.forEach),push=uncurryThis$2([].push),params$1=new $URLSearchParams$1("a=1&a=2&b=3");params$1.delete("a",1),params$1.delete("b",void 0),params$1+""!="a=2"&&defineBuiltIn$1(URLSearchParamsPrototype$2,"delete",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $delete(this,t);var n=[];forEach$1(this,(function(t,e){push(n,{key:e,value:t})})),validateArgumentsLength$1(e,1);for(var i,a=toString$1(t),s=toString$1(r),o=0,l=0,c=!1,u=n.length;o<u;)i=n[o++],c||i.key===a?(c=!0,$delete(this,i.key)):l++;for(;l<u;)(i=n[l++]).key===a&&i.value===s||append$1(this,i.key,i.value)}),{enumerable:!0,unsafe:!0});var defineBuiltIn=defineBuiltIn$6,uncurryThis$1=functionUncurryThis,toString=toString$7,validateArgumentsLength=validateArgumentsLength$7,$URLSearchParams=URLSearchParams,URLSearchParamsPrototype$1=$URLSearchParams.prototype,getAll=uncurryThis$1(URLSearchParamsPrototype$1.getAll),$has=uncurryThis$1(URLSearchParamsPrototype$1.has),params=new $URLSearchParams("a=1");!params.has("a",2)&&params.has("a",void 0)||defineBuiltIn(URLSearchParamsPrototype$1,"has",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $has(this,t);var n=getAll(this,t);validateArgumentsLength(e,1);for(var i=toString(r),a=0;a<n.length;)if(n[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0});var DESCRIPTORS=descriptors,uncurryThis=functionUncurryThis,defineBuiltInAccessor=defineBuiltInAccessor$5,URLSearchParamsPrototype=URLSearchParams.prototype,forEach=uncurryThis(URLSearchParamsPrototype.forEach);DESCRIPTORS&&!("size"in URLSearchParamsPrototype)&&defineBuiltInAccessor(URLSearchParamsPrototype,"size",{get:function(){var t=0;return forEach(this,(function(){t++})),t},configurable:!0,enumerable:!0});const elementMap=new Map;var Data={set(t,e,r){elementMap.has(t)||elementMap.set(t,new Map);const n=elementMap.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>elementMap.has(t)&&elementMap.get(t).get(e)||null,remove(t,e){if(!elementMap.has(t))return;const r=elementMap.get(t);r.delete(e),0===r.size&&elementMap.delete(t)}};const MILLISECONDS_MULTIPLIER=1e3,TRANSITION_END="transitionend",parseSelector=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),toType=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),getTransitionDurationFromElement=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),i=Number.parseFloat(r);return n||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0},triggerTransitionEnd=t=>{t.dispatchEvent(new Event(TRANSITION_END))},isElement=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),getElement=t=>isElement(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(parseSelector(t)):null,isVisible=t=>{if(!isElement(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e},isDisabled=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),reflow=t=>{t.offsetHeight},getjQuery=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,DOMContentLoadedCallbacks=[],onDOMContentLoaded=t=>{"loading"===document.readyState?(DOMContentLoadedCallbacks.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of DOMContentLoadedCallbacks)t()})),DOMContentLoadedCallbacks.push(t)):t()},defineJQueryPlugin=t=>{onDOMContentLoaded((()=>{const e=getjQuery();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}}))},execute=(t,e=[],r=t)=>"function"==typeof t?t(...e):r,executeAfterTransition=(t,e,r=!0)=>{if(!r)return void execute(t);const n=getTransitionDurationFromElement(e)+5;let i=!1;const a=({target:r})=>{r===e&&(i=!0,e.removeEventListener(TRANSITION_END,a),execute(t))};e.addEventListener(TRANSITION_END,a),setTimeout((()=>{i||triggerTransitionEnd(e)}),n)},namespaceRegex=/[^.]*(?=\..*)\.|.*/,stripNameRegex=/\..*/,stripUidRegex=/::\d+$/,eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"},nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function makeEventUid(t,e){return e&&`${e}::${uidEvent++}`||t.uidEvent||uidEvent++}function getElementEvents(t){const e=makeEventUid(t);return t.uidEvent=e,eventRegistry[e]=eventRegistry[e]||{},eventRegistry[e]}function bootstrapHandler(t,e){return function r(n){return hydrateObj(n,{delegateTarget:t}),r.oneOff&&EventHandler.off(t,n.type,e),e.apply(t,[n])}}function bootstrapDelegationHandler(t,e,r){return function n(i){const a=t.querySelectorAll(e);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(const o of a)if(o===s)return hydrateObj(i,{delegateTarget:s}),n.oneOff&&EventHandler.off(t,i.type,e,r),r.apply(s,[i])}}function findHandler(t,e,r=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===r))}function normalizeParameters(t,e,r){const n="string"==typeof e,i=n?r:e||r;let a=getTypeEvent(t);return nativeEvents.has(a)||(a=t),[n,i,a]}function addHandler(t,e,r,n,i){if("string"!=typeof e||!t)return;let[a,s,o]=normalizeParameters(e,r,n);if(e in customEvents){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s=t(s)}const l=getElementEvents(t),c=l[o]||(l[o]={}),u=findHandler(c,s,a?r:null);if(u)return void(u.oneOff=u.oneOff&&i);const d=makeEventUid(s,e.replace(namespaceRegex,"")),h=a?bootstrapDelegationHandler(t,r,s):bootstrapHandler(t,s);h.delegationSelector=a?r:null,h.callable=s,h.oneOff=i,h.uidEvent=d,c[d]=h,t.addEventListener(o,h,a)}function removeHandler(t,e,r,n,i){const a=findHandler(e[r],n,i);a&&(t.removeEventListener(r,a,Boolean(i)),delete e[r][a.uidEvent])}function removeNamespacedHandlers(t,e,r,n){const i=e[r]||{};for(const[a,s]of Object.entries(i))a.includes(n)&&removeHandler(t,e,r,s.callable,s.delegationSelector)}function getTypeEvent(t){return t=t.replace(stripNameRegex,""),customEvents[t]||t}const EventHandler={on(t,e,r,n){addHandler(t,e,r,n,!1)},one(t,e,r,n){addHandler(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[i,a,s]=normalizeParameters(e,r,n),o=s!==e,l=getElementEvents(t),c=l[s]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(l))removeNamespacedHandlers(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const i=r.replace(stripUidRegex,"");o&&!e.includes(i)||removeHandler(t,l,s,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;removeHandler(t,l,s,a,i?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=getjQuery();let i=null,a=!0,s=!0,o=!1;e!==getTypeEvent(e)&&n&&(i=n.Event(e,r),n(t).trigger(i),a=!i.isPropagationStopped(),s=!i.isImmediatePropagationStopped(),o=i.isDefaultPrevented());const l=hydrateObj(new Event(e,{bubbles:a,cancelable:!0}),r);return o&&l.preventDefault(),s&&t.dispatchEvent(l),l.defaultPrevented&&i&&i.preventDefault(),l}};function hydrateObj(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function normalizeData(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function normalizeDataKey(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Manipulator={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${normalizeDataKey(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${normalizeDataKey(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=normalizeData(t.dataset[n])}return e},getDataAttribute:(t,e)=>normalizeData(t.getAttribute(`data-bs-${normalizeDataKey(e)}`))};class Config{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=isElement(e)?Manipulator.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...isElement(e)?Manipulator.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],i=isElement(e)?"element":toType(e);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)}}}const VERSION="5.3.3";class BaseComponent extends Config{constructor(t,e){super(),(t=getElement(t))&&(this._element=t,this._config=this._getConfig(e),Data.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Data.remove(this._element,this.constructor.DATA_KEY),EventHandler.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){executeAfterTransition(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Data.get(getElement(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const NAME$1="button",DATA_KEY$1="bs.button",EVENT_KEY$1=`.${DATA_KEY$1}`,DATA_API_KEY$1=".data-api",CLASS_NAME_ACTIVE="active",SELECTOR_DATA_TOGGLE$1='[data-bs-toggle="button"]',EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$1}.data-api`;class Button extends BaseComponent{static get NAME(){return NAME$1}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Button.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE$1,(t=>{t.preventDefault();const e=t.target.closest(SELECTOR_DATA_TOGGLE$1);Button.getOrCreateInstance(e).toggle()})),defineJQueryPlugin(Button);const getSelector=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map((t=>parseSelector(t))).join(","):null},SelectorEngine={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!isDisabled(t)&&isVisible(t)))},getSelectorFromElement(t){const e=getSelector(t);return e&&SelectorEngine.findOne(e)?e:null},getElementFromSelector(t){const e=getSelector(t);return e?SelectorEngine.findOne(e):null},getMultipleElementsFromSelector(t){const e=getSelector(t);return e?SelectorEngine.find(e):[]}},NAME="collapse",DATA_KEY="bs.collapse",EVENT_KEY=`.${DATA_KEY}`,DATA_API_KEY=".data-api",EVENT_SHOW=`show${EVENT_KEY}`,EVENT_SHOWN=`shown${EVENT_KEY}`,EVENT_HIDE=`hide${EVENT_KEY}`,EVENT_HIDDEN=`hidden${EVENT_KEY}`,EVENT_CLICK_DATA_API=`click${EVENT_KEY}.data-api`,CLASS_NAME_SHOW="show",CLASS_NAME_COLLAPSE="collapse",CLASS_NAME_COLLAPSING="collapsing",CLASS_NAME_COLLAPSED="collapsed",CLASS_NAME_DEEPER_CHILDREN=":scope .collapse .collapse",CLASS_NAME_HORIZONTAL="collapse-horizontal",WIDTH="width",HEIGHT="height",SELECTOR_ACTIVES=".collapse.show, .collapse.collapsing",SELECTOR_DATA_TOGGLE='[data-bs-toggle="collapse"]',Default={parent:null,toggle:!0},DefaultType={parent:"(null|element)",toggle:"boolean"};class Collapse extends BaseComponent{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=SelectorEngine.find(SELECTOR_DATA_TOGGLE);for(const t of r){const e=SelectorEngine.getSelectorFromElement(t),r=SelectorEngine.find(e).filter((t=>t===this._element));null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((t=>t!==this._element)).map((t=>Collapse.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(EventHandler.trigger(this._element,EVENT_SHOW).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[e]="",EventHandler.trigger(this._element,EVENT_SHOWN)}),this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(EventHandler.trigger(this._element,EVENT_HIDE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,reflow(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");for(const t of this._triggerArray){const e=SelectorEngine.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),EventHandler.trigger(this._element,EVENT_HIDDEN)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains("show")}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=getElement(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?WIDTH:HEIGHT}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);for(const e of t){const t=SelectorEngine.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);return SelectorEngine.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const r=Collapse.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}}))}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(t,{toggle:!1}).toggle()})),defineJQueryPlugin(Collapse);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$3=new WeakMap;let n$2=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(e$2&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o$3.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o$3.set(e,t))}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$1),i$3=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new n$2(r,t,s$1)},S$1=(t,e)=>{if(e$2)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),n=t$1.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return r$3(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,e)=>t,u$1={toAttribute(t,e){switch(e){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f$1=(t,e)=>!i$2(t,e),y$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let b$1=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y$2){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&e$1(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=r$2(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const a=n?.call(this);i.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$2}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,e=[...h$1(t),...o$2(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c$2(t))}else void 0!==t&&e.push(c$2(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:u$1).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=n,this[n]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??f$1)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b$1}),(a$1.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n=`<${o$1}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y$1=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x$1=y$1(1),b=y$1(2),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$1.createTreeWalker(r$1,129);function P(t,e){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const V=(t,r)=>{const i=t.length-1,a=[];let s,o=2===r?"<svg>":3===r?"<math>":"",l=f;for(let r=0;r<i;r++){const i=t[r];let c,u,d=-1,b=0;for(;b<i.length&&(l.lastIndex=b,u=l.exec(i),null!==u);)b=l.lastIndex,l===f?"!--"===u[1]?l=v:void 0!==u[1]?l=_:void 0!==u[2]?($.test(u[2])&&(s=RegExp("</"+u[2],"g")),l=m):void 0!==u[3]&&(l=m):l===m?">"===u[0]?(l=s??f,d=-1):void 0===u[1]?d=-2:(d=l.lastIndex-u[2].length,c=u[1],l=void 0===u[3]?m:'"'===u[3]?g:p):l===g||l===p?l=m:l===v||l===_?l=f:(l=m,s=void 0);const y=l===m&&t[r+1].startsWith("/>")?" ":"";o+=l===f?i+n:d>=0?(a.push(c),i.slice(0,d)+e+i.slice(d)+h+y):i+h+(-2===d?r:y)}return[P(t,o+(t[i]||"<?>")+(2===r?"</svg>":3===r?"</math>":"")),a]};class N{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let a=0,s=0;const o=t.length-1,c=this.parts,[u,d]=V(t,r);if(this.el=N.createElement(u,n),C.currentNode=this.el.content,2===r||3===r){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=C.nextNode())&&c.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(e)){const e=d[s++],r=i.getAttribute(t).split(h),n=/([.?@])?(.*)/.exec(e);c.push({type:1,index:a,name:n[2],strings:r,ctor:"."===n[1]?H:"?"===n[1]?I:"@"===n[1]?L:k}),i.removeAttribute(t)}else t.startsWith(h)&&(c.push({type:6,index:a}),i.removeAttribute(t));if($.test(i.tagName)){const t=i.textContent.split(h),e=t.length-1;if(e>0){i.textContent=i$1?i$1.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],l()),C.nextNode(),c.push({type:2,index:++a});i.append(t[e],l())}}}else if(8===i.nodeType)if(i.data===o$1)c.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(h,t+1));)c.push({type:7,index:a}),t+=h.length-1}a++}}static createElement(t,e){const r=r$1.createElement("template");return r.innerHTML=t,r}}function S(t,e,r=t,n){if(e===T)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const a=c(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=S(t,i._$AS(t,e.values),i,n)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??r$1).importNode(e,!0);C.currentNode=n;let i=C.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new R(i,i.nextSibling,this,t):1===o.type?e=new o.ctor(i,o.name,o.strings,this,t):6===o.type&&(e=new z(i,this,t)),this._$AV.push(e),o=r[++s]}a!==o?.index&&(i=C.nextNode(),a++)}return C.currentNode=r$1,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=N.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new M(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=A.get(t.strings);return void 0===e&&A.set(t.strings,e=new N(t)),e}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new R(this.O(l()),this.O(l()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,e=this,r,n){const i=this.strings;let a=!1;if(void 0===i)t=S(this,t,e,0),a=!c(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const n=t;let s,o;for(t=i[0],s=0;s<i.length-1;s++)o=S(this,n[r+s],e,s),o===T&&(o=this._$AH[s]),a||=!c(o)||o!==this._$AH[s],o===E?t=E:t!==E&&(t+=(o??"")+i[s+1]),this._$AH[s]=o}a&&!n&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??E)===T)return;const r=this._$AH,n=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==E&&(r===E||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1");const B=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new R(e.insertBefore(l(),t),t,void 0,r??{})}return i._$AI(t),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}r._$litElement$=!0,r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:r});const i=globalThis.litElementPolyfillSupport;function ascending$1(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function descending(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function bisector(t){let e,r,n;function i(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<0?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=ascending$1,r=(e,r)=>ascending$1(t(e),r),n=(e,r)=>t(e)-r):(e=t===ascending$1||t===descending?t:zero$1,r=t,n=t),{left:i,center:function(t,e,r=0,a=t.length){const s=i(t,e,r,a-1);return s>r&&n(t[s-1],e)>-n(t[s],e)?s-1:s},right:function(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<=0?i=e+1:a=e}while(i<a)}return i}}}function zero$1(){return 0}function number$2(t){return null===t?NaN:+t}i?.({LitElement:r}),(globalThis.litElementVersions??=[]).push("4.1.1");const ascendingBisect=bisector(ascending$1),bisectRight=ascendingBisect.right;bisector(number$2).center;const e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function tickSpec(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),s=a>=e10?10:a>=e5?5:a>=e2?2:1;let o,l,c;return i<0?(c=Math.pow(10,-i)/s,o=Math.round(t*c),l=Math.round(e*c),o/c<t&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*s,o=Math.round(t/c),l=Math.round(e/c),o*c<t&&++o,l*c>e&&--l),l<o&&.5<=r&&r<2?tickSpec(t,e,2*r):[o,l,c]}function ticks(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,a,s]=n?tickSpec(e,t,r):tickSpec(t,e,r);if(!(a>=i))return[];const o=a-i+1,l=new Array(o);if(n)if(s<0)for(let t=0;t<o;++t)l[t]=(a-t)/-s;else for(let t=0;t<o;++t)l[t]=(a-t)*s;else if(s<0)for(let t=0;t<o;++t)l[t]=(i+t)/-s;else for(let t=0;t<o;++t)l[t]=(i+t)*s;return l}function tickIncrement(t,e,r){return tickSpec(t=+t,e=+e,r=+r)[2]}function tickStep(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?tickIncrement(e,t,r):tickIncrement(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}function identity$3(t){return t}var top=1,right=2,bottom=3,left=4,epsilon$1=1e-6;function translateX(t){return"translate("+t+",0)"}function translateY(t){return"translate(0,"+t+")"}function number$1(t){return e=>+t(e)}function center(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function entering(){return!this.__axis}function axis(t,e){var r=[],n=null,i=null,a=6,s=6,o=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=t===top||t===left?-1:1,u=t===left||t===right?"x":"y",d=t===top||t===bottom?translateX:translateY;function h(h){var p=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,g=null==i?e.tickFormat?e.tickFormat.apply(e,r):identity$3:i,b=Math.max(a,0)+o,y=e.range(),m=+y[0]+l,f=+y[y.length-1]+l,$=(e.bandwidth?center:number$1)(e.copy(),l),I=h.selection?h.selection():h,C=I.selectAll(".domain").data([null]),A=I.selectAll(".tick").data(p,e).order(),E=A.exit(),B=A.enter().append("g").attr("class","tick"),v=A.select("line"),U=A.select("text");C=C.merge(C.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(B),v=v.merge(B.append("line").attr("stroke","currentColor").attr(u+"2",c*a)),U=U.merge(B.append("text").attr("fill","currentColor").attr(u,c*b).attr("dy",t===top?"0em":t===bottom?"0.71em":"0.32em")),h!==I&&(C=C.transition(h),A=A.transition(h),v=v.transition(h),U=U.transition(h),E=E.transition(h).attr("opacity",epsilon$1).attr("transform",(function(t){return isFinite(t=$(t))?d(t+l):this.getAttribute("transform")})),B.attr("opacity",epsilon$1).attr("transform",(function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:$(t))+l)}))),E.remove(),C.attr("d",t===left||t===right?s?"M"+c*s+","+m+"H"+l+"V"+f+"H"+c*s:"M"+l+","+m+"V"+f:s?"M"+m+","+c*s+"V"+l+"H"+f+"V"+c*s:"M"+m+","+l+"H"+f),A.attr("opacity",1).attr("transform",(function(t){return d($(t)+l)})),v.attr(u+"2",c*a),U.attr(u,c*b).text(g),I.filter(entering).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===right?"start":t===left?"end":"middle"),I.each((function(){this.__axis=$}))}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return r=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),h):r.slice()},h.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),h):n&&n.slice()},h.tickFormat=function(t){return arguments.length?(i=t,h):i},h.tickSize=function(t){return arguments.length?(a=s=+t,h):a},h.tickSizeInner=function(t){return arguments.length?(a=+t,h):a},h.tickSizeOuter=function(t){return arguments.length?(s=+t,h):s},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(l=+t,h):l},h}function axisRight(t){return axis(right,t)}function axisBottom(t){return axis(bottom,t)}function axisLeft(t){return axis(left,t)}var noop={value:()=>{}};function dispatch(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Dispatch(n)}function Dispatch(t){this._=t}function parseTypenames$1(t,e){return t.trim().split(/^|\s+/).map((function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function get$1(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function set$1(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=noop,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function(t,e){var r,n=this._,i=parseTypenames$1(t+"",n),a=-1,s=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<s;)if(r=(t=i[a]).type)n[r]=set$1(n[r],t.name,e);else if(null==e)for(r in n)n[r]=set$1(n[r],t.name,null);return this}for(;++a<s;)if((r=(t=i[a]).type)&&(r=get$1(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Dispatch(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var xhtml="http://www.w3.org/1999/xhtml",namespaces={svg:"http://www.w3.org/2000/svg",xhtml:xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),namespaces.hasOwnProperty(e)?{space:namespaces[e],local:t}:t}function creatorInherit(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===xhtml&&e.documentElement.namespaceURI===xhtml?e.createElement(t):e.createElementNS(r,t)}}function creatorFixed(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function creator(t){var e=namespace(t);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(t){return null==t?none:function(){return this.querySelector(t)}}function selection_select(t){"function"!=typeof t&&(t=selector(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s,o=e[i],l=o.length,c=n[i]=new Array(l),u=0;u<l;++u)(a=o[u])&&(s=t.call(a,a.__data__,u,o))&&("__data__"in a&&(s.__data__=a.__data__),c[u]=s);return new Selection$1(n,this._parents)}function array$1(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function empty(){return[]}function selectorAll(t){return null==t?empty:function(){return this.querySelectorAll(t)}}function arrayAll(t){return function(){return array$1(t.apply(this,arguments))}}function selection_selectAll(t){t="function"==typeof t?arrayAll(t):selectorAll(t);for(var e=this._groups,r=e.length,n=[],i=[],a=0;a<r;++a)for(var s,o=e[a],l=o.length,c=0;c<l;++c)(s=o[c])&&(n.push(t.call(s,s.__data__,c,o)),i.push(s));return new Selection$1(n,i)}function matcher(t){return function(){return this.matches(t)}}function childMatcher(t){return function(e){return e.matches(t)}}var find=Array.prototype.find;function childFind(t){return function(){return find.call(this.children,t)}}function childFirst(){return this.firstElementChild}function selection_selectChild(t){return this.select(null==t?childFirst:childFind("function"==typeof t?t:childMatcher(t)))}var filter=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(t){return function(){return filter.call(this.children,t)}}function selection_selectChildren(t){return this.selectAll(null==t?children:childrenFilter("function"==typeof t?t:childMatcher(t)))}function selection_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new Selection$1(n,this._parents)}function sparse(t){return new Array(t.length)}function selection_enter(){return new Selection$1(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function constant$3(t){return function(){return t}}function bindIndex(t,e,r,n,i,a){for(var s,o=0,l=e.length,c=a.length;o<c;++o)(s=e[o])?(s.__data__=a[o],n[o]=s):r[o]=new EnterNode(t,a[o]);for(;o<l;++o)(s=e[o])&&(i[o]=s)}function bindKey(t,e,r,n,i,a,s){var o,l,c,u=new Map,d=e.length,h=a.length,p=new Array(d);for(o=0;o<d;++o)(l=e[o])&&(p[o]=c=s.call(l,l.__data__,o,e)+"",u.has(c)?i[o]=l:u.set(c,l));for(o=0;o<h;++o)c=s.call(t,a[o],o,a)+"",(l=u.get(c))?(n[o]=l,l.__data__=a[o],u.delete(c)):r[o]=new EnterNode(t,a[o]);for(o=0;o<d;++o)(l=e[o])&&u.get(p[o])===l&&(i[o]=l)}function datum(t){return t.__data__}function selection_data(t,e){if(!arguments.length)return Array.from(this,datum);var r=e?bindKey:bindIndex,n=this._parents,i=this._groups;"function"!=typeof t&&(t=constant$3(t));for(var a=i.length,s=new Array(a),o=new Array(a),l=new Array(a),c=0;c<a;++c){var u=n[c],d=i[c],h=d.length,p=arraylike(t.call(u,u&&u.__data__,c,n)),g=p.length,b=o[c]=new Array(g),y=s[c]=new Array(g);r(u,d,b,y,l[c]=new Array(h),p,e);for(var m,f,$=0,I=0;$<g;++$)if(m=b[$]){for($>=I&&(I=$+1);!(f=y[I])&&++I<g;);m._next=f||null}}return(s=new Selection$1(s,n))._enter=o,s._exit=l,s}function arraylike(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function selection_exit(){return new Selection$1(this._exit||this._groups.map(sparse),this._parents)}function selection_join(t,e,r){var n=this.enter(),i=this,a=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?a.remove():r(a),n&&i?n.merge(i).order():i}function selection_merge(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,a=n.length,s=Math.min(i,a),o=new Array(i),l=0;l<s;++l)for(var c,u=r[l],d=n[l],h=u.length,p=o[l]=new Array(h),g=0;g<h;++g)(c=u[g]||d[g])&&(p[g]=c);for(;l<i;++l)o[l]=r[l];return new Selection$1(o,this._parents)}function selection_order(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],a=i.length-1,s=i[a];--a>=0;)(n=i[a])&&(s&&4^n.compareDocumentPosition(s)&&s.parentNode.insertBefore(n,s),s=n);return this}function selection_sort(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ascending);for(var r=this._groups,n=r.length,i=new Array(n),a=0;a<n;++a){for(var s,o=r[a],l=o.length,c=i[a]=new Array(l),u=0;u<l;++u)(s=o[u])&&(c[u]=s);c.sort(e)}return new Selection$1(i,this._parents).order()}function ascending(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function selection_call(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,a=n.length;i<a;++i){var s=n[i];if(s)return s}return null}function selection_size(){let t=0;for(const e of this)++t;return t}function selection_empty(){return!this.node()}function selection_each(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,a=e[r],s=0,o=a.length;s<o;++s)(i=a[s])&&t.call(i,i.__data__,s,a);return this}function attrRemove$1(t){return function(){this.removeAttribute(t)}}function attrRemoveNS$1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant$1(t,e){return function(){this.setAttribute(t,e)}}function attrConstantNS$1(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function attrFunction$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function attrFunctionNS$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function selection_attr(t,e){var r=namespace(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?attrRemoveNS$1:attrRemove$1:"function"==typeof e?r.local?attrFunctionNS$1:attrFunction$1:r.local?attrConstantNS$1:attrConstant$1)(r,e))}function defaultView(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function styleRemove$1(t){return function(){this.style.removeProperty(t)}}function styleConstant$1(t,e,r){return function(){this.style.setProperty(t,e,r)}}function styleFunction$1(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function selection_style(t,e,r){return arguments.length>1?this.each((null==e?styleRemove$1:"function"==typeof e?styleFunction$1:styleConstant$1)(t,e,null==r?"":r)):styleValue(this.node(),t)}function styleValue(t,e){return t.style.getPropertyValue(e)||defaultView(t).getComputedStyle(t,null).getPropertyValue(e)}function propertyRemove(t){return function(){delete this[t]}}function propertyConstant(t,e){return function(){this[t]=e}}function propertyFunction(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function selection_property(t,e){return arguments.length>1?this.each((null==e?propertyRemove:"function"==typeof e?propertyFunction:propertyConstant)(t,e)):this.node()[t]}function classArray(t){return t.trim().split(/^|\s+/)}function classList(t){return t.classList||new ClassList(t)}function ClassList(t){this._node=t,this._names=classArray(t.getAttribute("class")||"")}function classedAdd(t,e){for(var r=classList(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function classedRemove(t,e){for(var r=classList(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function classedTrue(t){return function(){classedAdd(this,t)}}function classedFalse(t){return function(){classedRemove(this,t)}}function classedFunction(t,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,t)}}function selection_classed(t,e){var r=classArray(t+"");if(arguments.length<2){for(var n=classList(this.node()),i=-1,a=r.length;++i<a;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?classedFunction:e?classedTrue:classedFalse)(r,e))}function textRemove(){this.textContent=""}function textConstant$1(t){return function(){this.textContent=t}}function textFunction$1(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function selection_text(t){return arguments.length?this.each(null==t?textRemove:("function"==typeof t?textFunction$1:textConstant$1)(t)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(t){return function(){this.innerHTML=t}}function htmlFunction(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function selection_html(t){return arguments.length?this.each(null==t?htmlRemove:("function"==typeof t?htmlFunction:htmlConstant)(t)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(t){var e="function"==typeof t?t:creator(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}function constantNull(){return null}function selection_insert(t,e){var r="function"==typeof t?t:creator(t),n=null==e?constantNull:"function"==typeof e?e:selector(e);return this.select((function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)}))}function remove(){var t=this.parentNode;t&&t.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_cloneDeep(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_clone(t){return this.select(t?selection_cloneDeep:selection_cloneShallow)}function selection_datum(t){return arguments.length?this.property("__data__",t):this.node().__data__}function contextListener(t){return function(e){t.call(this,e,this.__data__)}}function parseTypenames(t){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}}))}function onRemove(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,a=e.length;n<a;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function onAdd(t,e,r){return function(){var n,i=this.__on,a=contextListener(e);if(i)for(var s=0,o=i.length;s<o;++s)if((n=i[s]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),void(n.value=e);this.addEventListener(t.type,a,r),n={type:t.type,name:t.name,value:e,listener:a,options:r},i?i.push(n):this.__on=[n]}}function selection_on(t,e,r){var n,i,a=parseTypenames(t+""),s=a.length;if(!(arguments.length<2)){for(o=e?onAdd:onRemove,n=0;n<s;++n)this.each(o(a[n],e,r));return this}var o=this.node().__on;if(o)for(var l,c=0,u=o.length;c<u;++c)for(n=0,l=o[c];n<s;++n)if((i=a[n]).type===l.type&&i.name===l.name)return l.value}function dispatchEvent(t,e,r){var n=defaultView(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function dispatchConstant(t,e){return function(){return dispatchEvent(this,t,e)}}function dispatchFunction(t,e){return function(){return dispatchEvent(this,t,e.apply(this,arguments))}}function selection_dispatch(t,e){return this.each(("function"==typeof e?dispatchFunction:dispatchConstant)(t,e))}function*selection_iterator(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],a=0,s=i.length;a<s;++a)(n=i[a])&&(yield n)}EnterNode.prototype={constructor:EnterNode,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ClassList.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var root=[null];function Selection$1(t,e){this._groups=t,this._parents=e}function selection(){return new Selection$1([[document.documentElement]],root)}function selection_selection(){return this}function select(t){return"string"==typeof t?new Selection$1([[document.querySelector(t)]],[document.documentElement]):new Selection$1([[t]],root)}Selection$1.prototype=selection.prototype={constructor:Selection$1,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};var nextId=0;function local(){return new Local}function Local(){this._="@"+(++nextId).toString(36)}function sourceEvent(t){let e;for(;e=t.sourceEvent;)t=e;return t}function pointer(t,e){if(t=sourceEvent(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}Local.prototype=local.prototype={constructor:Local,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const nonpassive={passive:!1},nonpassivecapture={capture:!0,passive:!1};function nopropagation(t){t.stopImmediatePropagation()}function noevent(t){t.preventDefault(),t.stopImmediatePropagation()}function dragDisable(t){var e=t.document.documentElement,r=select(t).on("dragstart.drag",noevent,nonpassivecapture);"onselectstart"in e?r.on("selectstart.drag",noevent,nonpassivecapture):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function yesdrag(t,e){var r=t.document.documentElement,n=select(t).on("dragstart.drag",null);e&&(n.on("click.drag",noevent,nonpassivecapture),setTimeout((function(){n.on("click.drag",null)}),0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var constant$2=t=>()=>t;function DragEvent(t,{sourceEvent:e,subject:r,target:n,identifier:i,active:a,x:s,y:o,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function defaultFilter(t){return!t.ctrlKey&&!t.button}function defaultContainer(){return this.parentNode}function defaultSubject(t,e){return null==e?{x:t.x,y:t.y}:e}function defaultTouchable(){return navigator.maxTouchPoints||"ontouchstart"in this}function drag(){var t,e,r,n,i=defaultFilter,a=defaultContainer,s=defaultSubject,o=defaultTouchable,l={},c=dispatch("start","drag","end"),u=0,d=0;function h(t){t.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",m,nonpassive).on("touchend.drag touchcancel.drag",f).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(s,o){if(!n&&i.call(this,s,o)){var l=$(this,a.call(this,s,o),s,o,"mouse");l&&(select(s.view).on("mousemove.drag",g,nonpassivecapture).on("mouseup.drag",b,nonpassivecapture),dragDisable(s.view),nopropagation(s),r=!1,t=s.clientX,e=s.clientY,l("start",s))}}function g(n){if(noevent(n),!r){var i=n.clientX-t,a=n.clientY-e;r=i*i+a*a>d}l.mouse("drag",n)}function b(t){select(t.view).on("mousemove.drag mouseup.drag",null),yesdrag(t.view,r),noevent(t),l.mouse("end",t)}function y(t,e){if(i.call(this,t,e)){var r,n,s=t.changedTouches,o=a.call(this,t,e),l=s.length;for(r=0;r<l;++r)(n=$(this,o,t,e,s[r].identifier,s[r]))&&(nopropagation(t),n("start",t,s[r]))}}function m(t){var e,r,n=t.changedTouches,i=n.length;for(e=0;e<i;++e)(r=l[n[e].identifier])&&(noevent(t),r("drag",t,n[e]))}function f(t){var e,r,i=t.changedTouches,a=i.length;for(n&&clearTimeout(n),n=setTimeout((function(){n=null}),500),e=0;e<a;++e)(r=l[i[e].identifier])&&(nopropagation(t),r("end",t,i[e]))}function $(t,e,r,n,i,a){var o,d,p,g=c.copy(),b=pointer(a||r,e);if(null!=(p=s.call(t,new DragEvent("beforestart",{sourceEvent:r,target:h,identifier:i,active:u,x:b[0],y:b[1],dx:0,dy:0,dispatch:g}),n)))return o=p.x-b[0]||0,d=p.y-b[1]||0,function r(a,s,c){var y,m=b;switch(a){case"start":l[i]=r,y=u++;break;case"end":delete l[i],--u;case"drag":b=pointer(c||s,e),y=u}g.call(a,t,new DragEvent(a,{sourceEvent:s,subject:p,target:h,identifier:i,active:y,x:b[0]+o,y:b[1]+d,dx:b[0]-m[0],dy:b[1]-m[1],dispatch:g}),n)}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:constant$2(!!t),h):i},h.container=function(t){return arguments.length?(a="function"==typeof t?t:constant$2(t),h):a},h.subject=function(t){return arguments.length?(s="function"==typeof t?t:constant$2(t),h):s},h.touchable=function(t){return arguments.length?(o="function"==typeof t?t:constant$2(!!t),h):o},h.on=function(){var t=c.on.apply(c,arguments);return t===c?h:t},h.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,h):Math.sqrt(d)},h}function define(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function extend(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function Color(){}DragEvent.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatHex8(){return this.rgb().formatHex8()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?rgbn(e):3===r?new Rgb(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?rgba(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):"transparent"===t?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,255&t,1)}function rgba(t,e,r,n){return n<=0&&(t=e=r=NaN),new Rgb(t,e,r,n)}function rgbConvert(t){return t instanceof Color||(t=color(t)),t?new Rgb((t=t.rgb()).r,t.g,t.b,t.opacity):new Rgb}function rgb(t,e,r,n){return 1===arguments.length?rgbConvert(t):new Rgb(t,e,r,null==n?1:n)}function Rgb(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`}function rgb_formatRgb(){const t=clampa(this.opacity);return`${1===t?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===t?")":`, ${t})`}`}function clampa(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function clampi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hex(t){return((t=clampi(t))<16?"0":"")+t.toString(16)}function hsla(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,r,n)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=NaN,o=a-i,l=(a+i)/2;return o?(s=e===a?(r-n)/o+6*(r<n):r===a?(n-e)/o+2:(e-r)/o+4,o/=l<.5?a+i:2-a-i,s*=60):o=l>0&&l<1?0:s,new Hsl(s,o,l,t.opacity)}function hsl(t,e,r,n){return 1===arguments.length?hslConvert(t):new Hsl(t,e,r,null==n?1:n)}function Hsl(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function clamph(t){return(t=(t||0)%360)<0?t+360:t}function clampt(t){return Math.max(0,Math.min(1,t||0))}function hsl2rgb(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}define(Color,color,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:color_formatHex8,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb}),define(Rgb,rgb,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:rgb_formatHex8,formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),define(Hsl,hsl,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new Rgb(hsl2rgb(t>=240?t-240:t+120,i,n),hsl2rgb(t,i,n),hsl2rgb(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=clampa(this.opacity);return`${1===t?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===t?")":`, ${t})`}`}}));var constant$1=t=>()=>t;function linear$2(t,e){return function(r){return t+r*e}}function exponential(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function gamma(t){return 1==(t=+t)?nogamma:function(e,r){return r-e?exponential(e,r,t):constant$1(isNaN(e)?r:e)}}function nogamma(t,e){var r=e-t;return r?linear$2(t,r):constant$1(isNaN(t)?e:t)}var interpolateRgb=function t(e){var r=gamma(e);function n(t,e){var n=r((t=rgb(t)).r,(e=rgb(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),s=nogamma(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=s(e),t+""}}return n.gamma=t,n}(1);function numberArray(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(r=0;r<n;++r)i[r]=t[r]*(1-a)+e[r]*a;return i}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,a=new Array(i),s=new Array(n);for(r=0;r<i;++r)a[r]=interpolate$1(t[r],e[r]);for(;r<n;++r)s[r]=e[r];return function(t){for(r=0;r<i;++r)s[r]=a[r](t);return s}}function date(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function interpolateNumber(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function object(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=interpolate$1(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(t){return function(){return t}}function one(t){return function(e){return t(e)+""}}function interpolateString(t,e){var r,n,i,a=reA.lastIndex=reB.lastIndex=0,s=-1,o=[],l=[];for(t+="",e+="";(r=reA.exec(t))&&(n=reB.exec(e));)(i=n.index)>a&&(i=e.slice(a,i),o[s]?o[s]+=i:o[++s]=i),(r=r[0])===(n=n[0])?o[s]?o[s]+=n:o[++s]=n:(o[++s]=null,l.push({i:s,x:interpolateNumber(r,n)})),a=reB.lastIndex;return a<e.length&&(i=e.slice(a),o[s]?o[s]+=i:o[++s]=i),o.length<2?l[0]?one(l[0].x):zero(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)o[(r=l[n]).i]=r.x(t);return o.join("")})}function interpolate$1(t,e){var r,n=typeof e;return null==e||"boolean"===n?constant$1(e):("number"===n?interpolateNumber:"string"===n?(r=color(e))?(e=r,interpolateRgb):interpolateString:e instanceof color?interpolateRgb:e instanceof Date?date:isNumberArray(e)?numberArray:Array.isArray(e)?genericArray:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?object:interpolateNumber)(t,e)}function interpolateRound(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var svgNode,degrees=180/Math.PI,identity$2={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(t,e,r,n,i,a){var s,o,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(o=Math.sqrt(r*r+n*n))&&(r/=o,n/=o,l/=o),t*n<e*r&&(t=-t,e=-e,l=-l,s=-s),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*degrees,skewX:Math.atan(l)*degrees,scaleX:s,scaleY:o}}function parseCss(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?identity$2:decompose(e.a,e.b,e.c,e.d,e.e,e.f)}function parseSvg(t){return null==t?identity$2:(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",t),(t=svgNode.transform.baseVal.consolidate())?decompose((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):identity$2)}function interpolateTransform(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(a,s){var o=[],l=[];return a=t(a),s=t(s),function(t,n,i,a,s,o){if(t!==i||n!==a){var l=s.push("translate(",null,e,null,r);o.push({i:l-4,x:interpolateNumber(t,i)},{i:l-2,x:interpolateNumber(n,a)})}else(i||a)&&s.push("translate("+i+e+a+r)}(a.translateX,a.translateY,s.translateX,s.translateY,o,l),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(i(r)+"rotate(",null,n)-2,x:interpolateNumber(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(a.rotate,s.rotate,o,l),function(t,e,r,a){t!==e?a.push({i:r.push(i(r)+"skewX(",null,n)-2,x:interpolateNumber(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(a.skewX,s.skewX,o,l),function(t,e,r,n,a,s){if(t!==r||e!==n){var o=a.push(i(a)+"scale(",null,",",null,")");s.push({i:o-4,x:interpolateNumber(t,r)},{i:o-2,x:interpolateNumber(e,n)})}else 1===r&&1===n||a.push(i(a)+"scale("+r+","+n+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,o,l),a=s=null,function(t){for(var e,r=-1,n=l.length;++r<n;)o[(e=l[r]).i]=e.x(t);return o.join("")}}}var taskHead,taskTail,interpolateTransformCss=interpolateTransform(parseCss,"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform(parseSvg,", ",")",")"),frame=0,timeout$1=0,interval$1=0,pokeDelay=1e3,clockLast=0,clockNow=0,clockSkew=0,clock="object"==typeof performance&&performance.now?performance:Date,setFrame="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}function timer(t,e,r){var n=new Timer;return n.restart(t,e,r),n}function timerFlush(){now(),++frame;for(var t,e=taskHead;e;)(t=clockNow-e._time)>=0&&e._call.call(void 0,t),e=e._next;--frame}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{timerFlush()}finally{frame=0,nap(),clockNow=0}}function poke(){var t=clock.now(),e=t-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=t)}function nap(){for(var t,e,r=taskHead,n=1/0;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:taskHead=e);taskTail=t,sleep(n)}function sleep(t){frame||(timeout$1&&(timeout$1=clearTimeout(timeout$1)),t-clockNow>24?(t<1/0&&(timeout$1=setTimeout(wake,t-clock.now()-clockSkew)),interval$1&&(interval$1=clearInterval(interval$1))):(interval$1||(clockLast=clock.now(),interval$1=setInterval(poke,pokeDelay)),frame=1,setFrame(wake)))}function timeout(t,e,r){var n=new Timer;return e=null==e?0:+e,n.restart((r=>{n.stop(),t(r+e)}),e,r),n}function interval(t,e,r){var n=new Timer,i=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?now():+r,n._restart((function a(s){s+=i,n._restart(a,i+=e,r),t(s)}),e,r)},n.restart(t,e,r),n}Timer.prototype=timer.prototype={constructor:Timer,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?now():+r)+(null==e?0:+e),this._next||taskTail===this||(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=t,this._time=r,sleep()},stop:function(){this._call&&(this._call=null,this._time=1/0,sleep())}};var emptyOn=dispatch("start","end","cancel","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(t,e,r,n,i,a){var s=t.__transition;if(s){if(r in s)return}else t.__transition={};create(t,r,{name:e,index:n,group:i,on:emptyOn,tween:emptyTween,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:CREATED})}function init(t,e){var r=get(t,e);if(r.state>CREATED)throw new Error("too late; already scheduled");return r}function set(t,e){var r=get(t,e);if(r.state>STARTED)throw new Error("too late; already running");return r}function get(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function create(t,e,r){var n,i=t.__transition;function a(l){var c,u,d,h;if(r.state!==SCHEDULED)return o();for(c in i)if((h=i[c]).name===r.name){if(h.state===STARTED)return timeout(a);h.state===RUNNING?(h.state=ENDED,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=ENDED,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(timeout((function(){r.state===STARTED&&(r.state=RUNNING,r.timer.restart(s,r.delay,r.time),s(l))})),r.state=STARTING,r.on.call("start",t,t.__data__,r.index,r.group),r.state===STARTING){for(r.state=STARTED,n=new Array(d=r.tween.length),c=0,u=-1;c<d;++c)(h=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=h);n.length=u+1}}function s(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(o),r.state=ENDING,1),a=-1,s=n.length;++a<s;)n[a].call(t,i);r.state===ENDING&&(r.on.call("end",t,t.__data__,r.index,r.group),o())}function o(){for(var n in r.state=ENDED,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=timer((function(t){r.state=SCHEDULED,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)}),0,r.time)}function interrupt(t,e){var r,n,i,a=t.__transition,s=!0;if(a){for(i in e=null==e?null:e+"",a)(r=a[i]).name===e?(n=r.state>STARTING&&r.state<ENDING,r.state=ENDED,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[i]):s=!1;s&&delete t.__transition}}function selection_interrupt(t){return this.each((function(){interrupt(this,t)}))}function tweenRemove(t,e){var r,n;return function(){var i=set(this,t),a=i.tween;if(a!==r)for(var s=0,o=(n=r=a).length;s<o;++s)if(n[s].name===e){(n=n.slice()).splice(s,1);break}i.tween=n}}function tweenFunction(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var a=set(this,t),s=a.tween;if(s!==n){i=(n=s).slice();for(var o={name:e,value:r},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=o;break}l===c&&i.push(o)}a.tween=i}}function transition_tween(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=get(this.node(),r).tween,a=0,s=i.length;a<s;++a)if((n=i[a]).name===t)return n.value;return null}return this.each((null==e?tweenRemove:tweenFunction)(r,t,e))}function tweenValue(t,e,r){var n=t._id;return t.each((function(){var t=set(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)})),function(t){return get(t,n).value[e]}}function interpolate(t,e){var r;return("number"==typeof e?interpolateNumber:e instanceof color?interpolateRgb:(r=color(e))?(e=r,interpolateRgb):interpolateString)(t,e)}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttribute(t);return s===a?null:s===n?i:i=e(n=s,r)}}function attrConstantNS(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===a?null:s===n?i:i=e(n=s,r)}}function attrFunction(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttribute(t))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttribute(t)}}function attrFunctionNS(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttributeNS(t.space,t.local))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttributeNS(t.space,t.local)}}function transition_attr(t,e){var r=namespace(t),n="transform"===r?interpolateTransformSvg:interpolate;return this.attrTween(t,"function"==typeof e?(r.local?attrFunctionNS:attrFunction)(r,n,tweenValue(this,"attr."+t,e)):null==e?(r.local?attrRemoveNS:attrRemove)(r):(r.local?attrConstantNS:attrConstant)(r,n,e))}function attrInterpolate(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}function attrInterpolateNS(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}function attrTweenNS(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&attrInterpolateNS(t,i)),r}return i._value=e,i}function attrTween(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&attrInterpolate(t,i)),r}return i._value=e,i}function transition_attrTween(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=namespace(t);return this.tween(r,(n.local?attrTweenNS:attrTween)(n,e))}function delayFunction(t,e){return function(){init(this,t).delay=+e.apply(this,arguments)}}function delayConstant(t,e){return e=+e,function(){init(this,t).delay=e}}function transition_delay(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?delayFunction:delayConstant)(e,t)):get(this.node(),e).delay}function durationFunction(t,e){return function(){set(this,t).duration=+e.apply(this,arguments)}}function durationConstant(t,e){return e=+e,function(){set(this,t).duration=e}}function transition_duration(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?durationFunction:durationConstant)(e,t)):get(this.node(),e).duration}function easeConstant(t,e){if("function"!=typeof e)throw new Error;return function(){set(this,t).ease=e}}function transition_ease(t){var e=this._id;return arguments.length?this.each(easeConstant(e,t)):get(this.node(),e).ease}function easeVarying(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;set(this,t).ease=r}}function transition_easeVarying(t){if("function"!=typeof t)throw new Error;return this.each(easeVarying(this._id,t))}function transition_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new Transition(n,this._parents,this._name,this._id)}function transition_merge(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,a=Math.min(n,i),s=new Array(n),o=0;o<a;++o)for(var l,c=e[o],u=r[o],d=c.length,h=s[o]=new Array(d),p=0;p<d;++p)(l=c[p]||u[p])&&(h[p]=l);for(;o<n;++o)s[o]=e[o];return new Transition(s,this._parents,this._name,this._id)}function start(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}function onFunction(t,e,r){var n,i,a=start(e)?init:set;return function(){var s=a(this,t),o=s.on;o!==n&&(i=(n=o).copy()).on(e,r),s.on=i}}function transition_on(t,e){var r=this._id;return arguments.length<2?get(this.node(),r).on.on(t):this.each(onFunction(r,t,e))}function removeFunction(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}function transition_remove(){return this.on("end.remove",removeFunction(this._id))}function transition_select(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selector(t));for(var n=this._groups,i=n.length,a=new Array(i),s=0;s<i;++s)for(var o,l,c=n[s],u=c.length,d=a[s]=new Array(u),h=0;h<u;++h)(o=c[h])&&(l=t.call(o,o.__data__,h,c))&&("__data__"in o&&(l.__data__=o.__data__),d[h]=l,schedule(d[h],e,r,h,d,get(o,r)));return new Transition(a,this._parents,e,r)}function transition_selectAll(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selectorAll(t));for(var n=this._groups,i=n.length,a=[],s=[],o=0;o<i;++o)for(var l,c=n[o],u=c.length,d=0;d<u;++d)if(l=c[d]){for(var h,p=t.call(l,l.__data__,d,c),g=get(l,r),b=0,y=p.length;b<y;++b)(h=p[b])&&schedule(h,e,r,b,p,g);a.push(p),s.push(l)}return new Transition(a,s,e,r)}var Selection=selection.prototype.constructor;function transition_selection(){return new Selection(this._groups,this._parents)}function styleNull(t,e){var r,n,i;return function(){var a=styleValue(this,t),s=(this.style.removeProperty(t),styleValue(this,t));return a===s?null:a===r&&s===n?i:i=e(r=a,n=s)}}function styleRemove(t){return function(){this.style.removeProperty(t)}}function styleConstant(t,e,r){var n,i,a=r+"";return function(){var s=styleValue(this,t);return s===a?null:s===n?i:i=e(n=s,r)}}function styleFunction(t,e,r){var n,i,a;return function(){var s=styleValue(this,t),o=r(this),l=o+"";return null==o&&(this.style.removeProperty(t),l=o=styleValue(this,t)),s===l?null:s===n&&l===i?a:(i=l,a=e(n=s,o))}}function styleMaybeRemove(t,e){var r,n,i,a,s="style."+e,o="end."+s;return function(){var l=set(this,t),c=l.on,u=null==l.value[s]?a||(a=styleRemove(e)):void 0;c===r&&i===u||(n=(r=c).copy()).on(o,i=u),l.on=n}}function transition_style(t,e,r){var n="transform"==(t+="")?interpolateTransformCss:interpolate;return null==e?this.styleTween(t,styleNull(t,n)).on("end.style."+t,styleRemove(t)):"function"==typeof e?this.styleTween(t,styleFunction(t,n,tweenValue(this,"style."+t,e))).each(styleMaybeRemove(this._id,t)):this.styleTween(t,styleConstant(t,n,e),r).on("end.style."+t,null)}function styleInterpolate(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}function styleTween(t,e,r){var n,i;function a(){var a=e.apply(this,arguments);return a!==i&&(n=(i=a)&&styleInterpolate(t,a,r)),n}return a._value=e,a}function transition_styleTween(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,styleTween(t,e,null==r?"":r))}function textConstant(t){return function(){this.textContent=t}}function textFunction(t){return function(){var e=t(this);this.textContent=null==e?"":e}}function transition_text(t){return this.tween("text","function"==typeof t?textFunction(tweenValue(this,"text",t)):textConstant(null==t?"":t+""))}function textInterpolate(t){return function(e){this.textContent=t.call(this,e)}}function textTween(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&textInterpolate(n)),e}return n._value=t,n}function transition_textTween(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,textTween(t))}function transition_transition(){for(var t=this._name,e=this._id,r=newId(),n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)if(s=o[c]){var u=get(s,e);schedule(s,t,r,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Transition(n,this._parents,t,r)}function transition_end(){var t,e,r=this,n=r._id,i=r.size();return new Promise((function(a,s){var o={value:s},l={value:function(){0==--i&&a()}};r.each((function(){var r=set(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),r.on=e})),0===i&&a()}))}var id=0;function Transition(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function newId(){return++id}var selection_prototype=selection.prototype;Transition.prototype={constructor:Transition,select:transition_select,selectAll:transition_selectAll,selectChild:selection_prototype.selectChild,selectChildren:selection_prototype.selectChildren,filter:transition_filter,merge:transition_merge,selection:transition_selection,transition:transition_transition,call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:transition_on,attr:transition_attr,attrTween:transition_attrTween,style:transition_style,styleTween:transition_styleTween,text:transition_text,textTween:transition_textTween,remove:transition_remove,tween:transition_tween,delay:transition_delay,duration:transition_duration,ease:transition_ease,easeVarying:transition_easeVarying,end:transition_end,[Symbol.iterator]:selection_prototype[Symbol.iterator]};const linear$1=t=>+t;function cubicOut(t){return--t*t*t+1}function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var defaultTiming={time:null,delay:0,duration:250,ease:cubicInOut};function inherit(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}function selection_transition(t){var e,r;t instanceof Transition?(e=t._id,t=t._name):(e=newId(),(r=defaultTiming).time=now(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)(s=o[c])&&schedule(s,t,e,c,o,r||inherit(s,e));return new Transition(n,this._parents,t,e)}selection.prototype.interrupt=selection_interrupt,selection.prototype.transition=selection_transition;const pi=Math.PI,tau=2*pi,epsilon=1e-6,tauEpsilon=tau-epsilon;function append(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function appendRound(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return append;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}class Path{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?append:appendRound(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,a){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+a}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let a=this._x1,s=this._y1,o=r-t,l=n-e,c=a-t,u=s-e,d=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>epsilon)if(Math.abs(u*o-l*c)>epsilon&&i){let h=r-a,p=n-s,g=o*o+l*l,b=h*h+p*p,y=Math.sqrt(g),m=Math.sqrt(d),f=i*Math.tan((pi-Math.acos((g+d-b)/(2*y*m)))/2),$=f/m,I=f/y;Math.abs($-1)>epsilon&&this._append`L${t+$*c},${e+$*u}`,this._append`A${i},${i},0,0,${+(u*h>c*p)},${this._x1=t+I*o},${this._y1=e+I*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(n),o=r*Math.sin(n),l=t+s,c=e+o,u=1^a,d=a?n-i:i-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>epsilon||Math.abs(this._y1-c)>epsilon)&&this._append`L${l},${c}`,r&&(d<0&&(d=d%tau+tau),d>tauEpsilon?this._append`A${r},${r},0,1,${u},${t-s},${e-o}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:d>epsilon&&this._append`A${r},${r},0,${+(d>=pi)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function exponent(t){return(t=formatDecimalParts(Math.abs(t)))?t[1]:NaN}function formatGroup(t,e){return function(r,n){for(var i=r.length,a=[],s=0,o=t[0],l=0;i>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),a.push(r.substring(i-=o,i+o)),!((l+=o+1)>n));)o=t[s=(s+1)%t.length];return a.reverse().join(e)}}function formatNumerals(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(e=re.exec(t)))throw new Error("invalid format: "+t);var e;return new FormatSpecifier({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function FormatSpecifier(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function formatTrim(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}function formatPrefixAuto(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],i=r[1],a=i-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,s=n.length;return a===s?n:a>s?n+new Array(a-s+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+formatDecimalParts(t,Math.max(0,e+a-1))[0]}function formatRounded(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var formatTypes={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:formatDecimal,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>formatRounded(100*t,e),r:formatRounded,s:formatPrefixAuto,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function identity$1(t){return t}var locale,format,formatPrefix,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale(t){var e=void 0===t.grouping||void 0===t.thousands?identity$1:formatGroup(map.call(t.grouping,Number),t.thousands+""),r=void 0===t.currency?"":t.currency[0]+"",n=void 0===t.currency?"":t.currency[1]+"",i=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?identity$1:formatNumerals(map.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",o=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function c(t){var c=(t=formatSpecifier(t)).fill,u=t.align,d=t.sign,h=t.symbol,p=t.zero,g=t.width,b=t.comma,y=t.precision,m=t.trim,f=t.type;"n"===f?(b=!0,f="g"):formatTypes[f]||(void 0===y&&(y=12),m=!0,f="g"),(p||"0"===c&&"="===u)&&(p=!0,c="0",u="=");var $="$"===h?r:"#"===h&&/[boxX]/.test(f)?"0"+f.toLowerCase():"",I="$"===h?n:/[%p]/.test(f)?s:"",C=formatTypes[f],A=/[defgprs%]/.test(f);function E(t){var r,n,s,h=$,E=I;if("c"===f)E=C(t)+E,t="";else{var B=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:C(Math.abs(t),y),m&&(t=formatTrim(t)),B&&0==+t&&"+"!==d&&(B=!1),h=(B?"("===d?d:o:"-"===d||"("===d?"":d)+h,E=("s"===f?prefixes[8+prefixExponent/3]:"")+E+(B&&"("===d?")":""),A)for(r=-1,n=t.length;++r<n;)if(48>(s=t.charCodeAt(r))||s>57){E=(46===s?i+t.slice(r+1):t.slice(r))+E,t=t.slice(0,r);break}}b&&!p&&(t=e(t,1/0));var v=h.length+t.length+E.length,U=v<g?new Array(g-v+1).join(c):"";switch(b&&p&&(t=e(U+t,U.length?g-E.length:1/0),U=""),u){case"<":t=h+t+E+U;break;case"=":t=h+U+t+E;break;case"^":t=U.slice(0,v=U.length>>1)+h+t+E+U.slice(v);break;default:t=U+h+t+E}return a(t)}return y=void 0===y?6:/[gprs]/.test(f)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),E.toString=function(){return t+""},E}return{format:c,formatPrefix:function(t,e){var r=c(((t=formatSpecifier(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3))),i=Math.pow(10,-n),a=prefixes[8+n/3];return function(t){return r(i*t)+a}}}}function defaultLocale(t){return locale=formatLocale(t),format=locale.format,formatPrefix=locale.formatPrefix,locale}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3)))-exponent(Math.abs(t)))}function precisionRound(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,exponent(e)-exponent(t))+1}defaultLocale({thousands:",",grouping:[3],currency:["$",""]});var defaultSource=Math.random,uniform=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(defaultSource),normal=function t(e){function r(t,r){var n,i;return t=null==t?0:+t,r=null==r?1:+r,function(){var a;if(null!=n)a=n,n=null;else do{n=2*e()-1,a=2*e()-1,i=n*n+a*a}while(!i||i>1);return t+r*a*Math.sqrt(-2*Math.log(i)/i)}}return r.source=t,r}(defaultSource);const mul=1664525,inc=1013904223,eps=1/4294967296;function lcg(t=Math.random()){let e=0|(0<=t&&t<1?t/eps:Math.abs(t));return()=>(e=mul*e+inc|0,eps*(e>>>0))}function initRange(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function constants(t){return function(){return t}}function number(t){return+t}var unit=[0,1];function identity(t){return t}function normalize(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:constants(isNaN(e)?NaN:.5)}function clamper(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}function bimap(t,e,r){var n=t[0],i=t[1],a=e[0],s=e[1];return i<n?(n=normalize(i,n),a=r(s,a)):(n=normalize(n,i),a=r(a,s)),function(t){return a(n(t))}}function polymap(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),a=new Array(n),s=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<n;)i[s]=normalize(t[s],t[s+1]),a[s]=r(e[s],e[s+1]);return function(e){var r=bisectRight(t,e,1,n)-1;return a[r](i[r](e))}}function copy(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer(){var t,e,r,n,i,a,s=unit,o=unit,l=interpolate$1,c=identity;function u(){var t=Math.min(s.length,o.length);return c!==identity&&(c=clamper(s[0],s[t-1])),n=t>2?polymap:bimap,i=a=null,d}function d(e){return null==e||isNaN(e=+e)?r:(i||(i=n(s.map(t),o,l)))(t(c(e)))}return d.invert=function(r){return c(e((a||(a=n(o,s.map(t),interpolateNumber)))(r)))},d.domain=function(t){return arguments.length?(s=Array.from(t,number),u()):s.slice()},d.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},d.rangeRound=function(t){return o=Array.from(t),l=interpolateRound,u()},d.clamp=function(t){return arguments.length?(c=!!t||identity,u()):c!==identity},d.interpolate=function(t){return arguments.length?(l=t,u()):l},d.unknown=function(t){return arguments.length?(r=t,d):r},function(r,n){return t=r,e=n,u()}}function continuous(){return transformer()(identity,identity)}function tickFormat(t,e,r,n){var i,a=tickStep(t,e,r);switch((n=formatSpecifier(null==n?",f":n)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=precisionPrefix(a,s))||(n.precision=i),formatPrefix(n,s);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=precisionRound(a,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=precisionFixed(a))||(n.precision=i-2*("%"===n.type))}return format(n)}function linearish(t){var e=t.domain;return t.ticks=function(t){var r=e();return ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return tickFormat(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,a=e(),s=0,o=a.length-1,l=a[s],c=a[o],u=10;for(c<l&&(i=l,l=c,c=i,i=s,s=o,o=i);u-- >0;){if((i=tickIncrement(l,c,r))===n)return a[s]=l,a[o]=c,e(a);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}n=i}return t},t}function linear(){var t=continuous();return t.copy=function(){return copy(t,linear())},initRange.apply(t,arguments),linearish(t)}function colors(t){for(var e=t.length/6|0,r=new Array(e),n=0;n<e;)r[n]="#"+t.slice(6*n,6*++n);return r}var Set1=colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");function constant(t){return function(){return t}}function withPath(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new Path(e)}function array(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Linear(t){this._context=t}function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function line(t,e){var r=constant(!0),n=null,i=curveLinear,a=null,s=withPath(o);function o(o){var l,c,u,d=(o=array(o)).length,h=!1;for(null==n&&(a=i(u=s())),l=0;l<=d;++l)!(l<d&&r(c=o[l],l,o))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+t(c,l,o),+e(c,l,o));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?x:constant(t),e="function"==typeof e?e:void 0===e?y:constant(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:constant(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:constant(!!t),o):r},o.curve=function(t){return arguments.length?(i=t,null!=n&&(a=i(n)),o):i},o.context=function(t){return arguments.length?(null==t?n=a=null:a=i(n=t),o):n},o}function Transform(t,e,r){this.k=t,this.x=e,this.y=r}Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},Transform.prototype={constructor:Transform,scale:function(t){return 1===t?this:new Transform(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Transform(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},Transform.prototype;class DecidablesElement extends r{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}firstUpdated(t){super.firstUpdated(t),select(this.renderRoot.host).classed("keyboard",!0).on("mousemove.keyboard touchstart.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!1).on("mousemove.keyboard touchstart.keyboard",null)})).on("keydown.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!0).on("keydown.keyboard mousemove.keyboard touchstart.keyboard",null)}))}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=interpolateRgb(t,"#ffffff")(.75),e.light50=interpolateRgb(t,"#ffffff")(.5),e.light25=interpolateRgb(t,"#ffffff")(.25),e.grey=t,e.dark25=interpolateRgb(t,"#000000")(.25),e.dark50=interpolateRgb(t,"#000000")(.5),e.dark75=interpolateRgb(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1,r=!1){const n=this.shadows.opacityUmbra+this.shadows.opacityBoost,i=this.shadows.opacityPenumbra+this.shadows.opacityBoost,a=this.shadows.opacityAmbient+this.shadows.opacityBoost,s=r?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,o=r?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,l=r?`rgba(${this.shadows.inverseBaselineColorString}, ${a})`:`rgba(${this.shadows.baselineColorString}, ${a})`,c=this.shadows.mapUmbra[t],u=this.shadows.mapPenumbra[t],d=this.shadows.mapAmbient[t];return`${e?`${-c.y}px ${c.y/2}px ${c.b}px ${c.s}px`:`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${s}, ${e?`${-u.y}px ${u.y/2}px ${u.b}px ${u.s}px`:`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}, ${e?`${-d.y}px ${d.y/2}px ${d.b}px ${d.s}px`:`${d.y/2}px ${d.y}px ${d.b}px ${d.s}px`} ${l}`}static get svgDefs(){const t=DecidablesElement.shadows,e=t.elevations.map((e=>`\n        <filter id=shadow-${e} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">\n          <feComponentTransfer in="SourceAlpha" result="solid">\n            <feFuncA type="table" tableValues="0 1 1"/>\n          </feComponentTransfer>\n          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />\n          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />\n          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />\n          ${0===t.mapUmbra[e].s?"":`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}\n          ${0===t.mapPenumbra[e].s?"":`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}\n          ${0===t.mapAmbient[e].s?"":`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}\n          <feGaussianBlur in=${0===t.mapUmbra[e].s?"offU":"spreadU"} result="blurU" stdDeviation=${t.mapUmbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapPenumbra[e].s?"offP":"spreadP"} result="blurP" stdDeviation=${t.mapPenumbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapAmbient[e].s?"offA":"spreadA"} result="blurA" stdDeviation=${t.mapAmbient[e].b/2} />\n          <feFlood in="SourceGraphic" result="opU" flood-color=${t.baselineColor} flood-opacity=${t.opacityUmbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opP" flood-color=${t.baselineColor} flood-opacity=${t.opacityPenumbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opA" flood-color=${t.baselineColor} flood-opacity=${t.opacityAmbient+t.opacityBoost} />\n          <feComposite in="opU" in2="blurU" result="shU" operator="in" />\n          <feComposite in="opP" in2="blurP" result="shP" operator="in" />\n          <feComposite in="opA" in2="blurA" result="shA" operator="in" />\n          <feMorphology in="solid" result="smaller" operator="erode" radius="1" />\n          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />\n          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />\n          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />\n          <feMerge>\n            <feMergeNode in="finalU" />\n            <feMergeNode in="finalP" />\n            <feMergeNode in="finalA" />\n            <feMergeNode in="SourceGraphic" />\n          </feMerge>\n        </filter>`));return`\n      <defs>\n        ${e}\n      </defs>\n    `}static get svgFilters(){const t=DecidablesElement.shadows,e=t.elevations.map((e=>b`
        <filter id=${`shadow-${e}`} x="-250%" y="-250%" width="600%" height="600%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?b``:b`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?b``:b`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?b``:b`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
          <feGaussianBlur in=${0===t.mapUmbra[e].s?"offU":"spreadU"} result="blurU" stdDeviation=${t.mapUmbra[e].b/2} />
          <feGaussianBlur in=${0===t.mapPenumbra[e].s?"offP":"spreadP"} result="blurP" stdDeviation=${t.mapPenumbra[e].b/2} />
          <feGaussianBlur in=${0===t.mapAmbient[e].s?"offA":"spreadA"} result="blurA" stdDeviation=${t.mapAmbient[e].b/2} />
          <feFlood in="SourceGraphic" result="opU" flood-color=${t.baselineColor} flood-opacity=${t.opacityUmbra+t.opacityBoost} />
          <feFlood in="SourceGraphic" result="opP" flood-color=${t.baselineColor} flood-opacity=${t.opacityPenumbra+t.opacityBoost} />
          <feFlood in="SourceGraphic" result="opA" flood-color=${t.baselineColor} flood-opacity=${t.opacityAmbient+t.opacityBoost} />
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
        </filter>`));return b`
      <svg class="defs">
        <defs>
          ${e}
        </defs>
      </svg>
    `}static get styles(){return i$3`
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
    `}}class DecidablesButton extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,i$3`
        :host {
          ---decidables-button-background-color-disabled: var(--decidables-button-background-color, var(---color-element-disabled));
          ---decidables-button-background-color-enabled: var(--decidables-button-background-color, var(---color-element-enabled));

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
          background-color: var(---decidables-button-background-color-disabled);
          outline: none;
          box-shadow: none;
        }

        button:enabled {
          cursor: pointer;

          background-color: var(---decidables-button-background-color-enabled);
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
      `]}render(){return x$1`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}}customElements.define("decidables-button",DecidablesButton);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=t=>t??E;class DecidablesSlider extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,i$3`
        :host {
          ---decidables-slider-background-color: var(--decidables-slider-background-color, var(---color-element-disabled));
          ---decidables-slider-color: var(--decidables-slider-color, var(---color-element-enabled));
          ---decidables-spinner-background-color: var(--decidables-slider-background-color, none);

          ---shadow-2-rotate: var(--shadow-2-rotate, ${r$3(this.cssBoxShadow(2,!0,!1))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${r$3(this.cssBoxShadow(4,!0,!1))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${r$3(this.cssBoxShadow(8,!0,!1))});

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        .range {
          position: relative;
          display: flex;

          flex-direction: row;

          width: 3.5rem;
          height: 4.75rem;
          margin: 0 0.25rem 0.25rem;
        }

        decidables-spinner {
          --decidables-spinner-input-width: 3.5rem;

          margin: 0 0.25rem 0.25rem;

          background: var(---decidables-spinner-background-color);
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

          background: var(---decidables-slider-background-color);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        input[type=range]:focus::-webkit-slider-runnable-track {
          background: var(---decidables-slider-background-color);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-moz-range-track {
          width: 100%;
          height: 4px;

          background: var(---decidables-slider-background-color);
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
          /* background: var(---decidables-slider-background-color); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-fill-upper {
          background: #cccccc;
          /* background: var(---decidables-slider-background-color); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-lower {
          background: var(---decidables-slider-background-color);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-upper {
          background: var(---decidables-slider-background-color);
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
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        input[type=range]:enabled::-webkit-slider-thumb {
          background: var(---decidables-slider-color);
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
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-moz-range-thumb {
          background: var(---decidables-slider-color);
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
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-ms-thumb {
          background: var(---decidables-slider-color);
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

        datalist {
          position: absolute;
          left: 2rem;
          z-index: -1;
          display: flex;

          flex-direction: column;

          align-items: flex-start;
          justify-content: space-between;

          height: 4.75rem;

          font-size: 0.75rem;
        }

        option {
          padding: 0;

          line-height: 0.8;
          min-block-size: 0;
        }

        option::before {
          content: "– ";
        }
      `]}render(){return x$1`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${o(this.rangeMin)} max=${o(this.rangeMax)} step=${o(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?x$1`
            <datalist id="ticks">
              <option value=${o(this.rangeMax)} label=${o(this.max)}></option>
              <option value=${o(this.rangeMin)} label=${o(this.min)}></option>
            </datalist>
          `:x$1``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}}customElements.define("decidables-slider",DecidablesSlider);class DecidablesSpinner extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}}customElements.define("decidables-spinner",DecidablesSpinner);class DecidablesSwitch extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,i$3`
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
        `]}render(){return x$1`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}}customElements.define("decidables-switch",DecidablesSwitch);class DecidablesToggle extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}}customElements.define("decidables-toggle",DecidablesToggle);class DecidablesToggleOption extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}}function DecidablesMixinResizeable(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("decidables-toggle-option",DecidablesToggleOption);class AccumulableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return{a:Set1[0],z:Set1[1],v:Set1[4],t0:Set1[7],s:Set1[8],left:"#f032e6",right:"#10dbc9",correct:Set1[2],error:Set1[3],nr:"#cccccc"}}static get lights(){return Object.keys(AccumulableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(AccumulableElement.colors[e],"#ffffff")(.5),t)),{})}static get darks(){return Object.keys(AccumulableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(AccumulableElement.colors[e],"#000000")(.5),t)),{})}static get styles(){return[super.styles,i$3`
        :host {
          /* Declare base colors */
          ${r$3(Object.keys(AccumulableElement.colors).map((t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`)).join("\n"))}

          /* Declare light colors */
          ${r$3(Object.keys(AccumulableElement.colors).map((t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`)).join("\n"))}

          /* Declare dark colors */
          ${r$3(Object.keys(AccumulableElement.colors).map((t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`)).join("\n"))}
        }
      `]}}class AccumulableControl extends AccumulableElement{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},resample:{attribute:"resample",type:Boolean,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.resample=!1,this.duration=void 0,this.coherence=void 0,this.colors=["none","measure","outcome","all"],this.color=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}doResample(){this.dispatchEvent(new CustomEvent("accumulable-control-resample",{detail:{},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-color",{detail:{color:this.color},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("accumulable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("accumulable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("accumulable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1`
      <div class="holder">
        ${null!=this.trials?x$1`<decidables-slider class="trials" min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:x$1``}
        ${this.resample?x$1`
            <div class="buttons">
              ${this.resample?x$1`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`:x$1``}
            </div>
          `:x$1``}
        ${null!=this.duration?x$1`<decidables-slider class="duration" min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:x$1``}
        ${null!=this.coherence?x$1`<decidables-slider class="coherence" min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:x$1``}
        ${null!=this.color?x$1`
            <decidables-toggle class="color" @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${"measure"===this.color}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:x$1``}
        ${this.run||this.pause||this.reset?x$1`
            <div class="buttons">
              ${this.run?x$1`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:x$1``}
              ${this.pause?x$1`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:x$1``}
              ${this.reset?x$1`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:x$1``}
            </div>
          `:x$1``}
      </div>`}}customElements.define("accumulable-control",AccumulableControl);class DDMMath{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce(((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t}),{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const n=t.reduce(((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t}),{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(n.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(n.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(n.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,n=DDMMath.s.DEFAULT){const i=t*e,a=Math.exp(-2*r*t/n**2);return(a-Math.exp(-2*r*i/n**2))/(a-1)}static azv2pC(t,e,r,n=DDMMath.s.DEFAULT){return DDMMath.azv2pE(t,1-e,-r,n)}static azvt02m(t,e,r,n,i=DDMMath.s.DEFAULT){const a=t*e,s=Math.exp(-2*r*t/i**2)-1;return n+1e3*(-a/r+t/r*((Math.exp(-2*r*a/i**2)-1)/s))}static azv2sd(t,e,r,n=DDMMath.s.DEFAULT){const i=t*e,a=Math.exp(-2*r*t/n**2)-1,s=Math.exp(-2*r*i/n**2)-1,o=(-r*t**2*(s+4)*s/a**2+((-3*r*t**2+4*r*i*t+n**2*t)*s+4*r*i*t)/a-n**2*i)/r**3;return 1e3*Math.sqrt(o)}static azvt02mE(t,e,r,n,i=DDMMath.s.DEFAULT){function a(t,e){return Math.exp(2*r*e/i**2)-Math.exp(2*r*t/i**2)}const s=t*e;return n+1e3*((s*(a(s-t,t)+a(0,s))+2*t*a(s,0))/(r*a(s,t)*a(-t,0)))}static azv2sdE(t,e,r,n=DDMMath.s.DEFAULT){function i(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const a=t*e,s=-2*t*i(0,a)*(2*r*t*i(a,2*t)+n**2*i(0,t)*i(a,t))*Math.exp(2*r*t/n**2)/(r**3*i(0,t)**2*i(a,t)**2)+(4*r*a*(2*t-a)*Math.exp(2*r*(a+t)/n**2)+a*n**2*i(2*a,2*t))/(r**3*i(a,t)**2);return 1e3*Math.sqrt(s)}static azvt02mC(t,e,r,n,i=DDMMath.s.DEFAULT){return DDMMath.azvt02mE(t,1-e,-r,n,i)}static azv2sdC(t,e,r,n=DDMMath.s.DEFAULT){return DDMMath.azv2sdE(t,1-e,-r,n)}static tazv2gE(t,e,r,n,i=DDMMath.s.DEFAULT){if(!t)return 0;const a=e*r,s=Math.PI*i**2/e**2*Math.exp(-a*n/i**2);let o=0,l=0,c=0;do{o+=1,l=o*Math.sin(Math.PI*a*o/e)*Math.exp(-.5*(n**2/i**2+Math.PI**2*o**2*i**2/e**2)*t),c+=l}while(o<200);return s*c}static tazv2gC(t,e,r,n,i=DDMMath.s.DEFAULT){return DDMMath.tazv2gE(t,e,1-r,-n,i)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:n}){function i(t){return Math.log(t/(1-t))}const a=(e/1e3)**2,s=r/1e3,o=n**2,l=i(t),c=l*(l*t**2-l*t+t-.5)/a,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*n*c**(1/4),d=o*i(t)/u,h=-u*d/o,p=d/(2*u)*(1-Math.exp(h))/(1+Math.exp(h));return{v:u,a:d,t0:1e3*(s?s-p:null),s:n}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}class AccumulableResponse extends AccumulableElement{static get properties(){return{feedback:{attribute:"feedback",type:Boolean,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedback=!1,this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.correctPayoff=0,this.errorPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["left","right"],this.signal=void 0,this.responses=["left","right"],this.response=void 0,this.outcomes=["correct","error","nr"],this.outcome=void 0,this.startTime=void 0,this.rt=void 0,this.data={},this.trials=[],this.alignState()}get trialPayoff(){switch(this.outcome){case"correct":return this.correctPayoff;case"error":return this.errorPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.data.correctCount*this.correctPayoff+this.data.errorCount*this.errorPayoff+this.data.nrCount*this.nrPayoff}alignState(){this.data=DDMMath.trials2stats(this.trials)}start(t,e){this.startTime=Date.now(),this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0,this.rt=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.rt=void 0,this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState())}left(){this.responded("left")}right(){this.responded("right")}responded(t){this.rt=Date.now()-this.startTime,this.state="feedback",this.response=t,this.signal===this.response?this.outcome="correct":this.signal!==this.response&&(this.outcome="error"),this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,data:this.data,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.rt=void 0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.trials=[],this.alignState()}keydown(t){"waiting"===this.state&&("ArrowLeft"===t.key?(this.responded("left"),t.preventDefault()):"ArrowRight"===t.key&&(this.responded("right"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,i$3`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map((({type:t,value:e})=>"minusSign"===t?"−":e)).reduce(((t,e)=>t+e));return x$1`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${"response "+("feedback"===this.state&&"left"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${"response "+("feedback"===this.state&&"right"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${this.trial||this.feedback||"total"===this.payoff?x$1`
            <div class="feedbacks">
              ${this.trial?x$1`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:x$1``}
              ${this.feedback?x$1`
                  <div class=${`feedback ${"feedback"===this.state&&this.feedback?this.outcome:""}`}>
                    ${"feedback"===this.state&&this.feedback?"correct"===this.outcome?x$1`<span class="outcome">Correct</span>`:"error"===this.outcome?x$1`<span class="outcome">Error</span>`:x$1`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?x$1``:x$1`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:x$1``}
              ${"total"===this.payoff?x$1`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:x$1``}
            </div>`:x$1``}
      </div>`}}customElements.define("accumulable-response",AccumulableResponse);class AccumulableTable extends AccumulableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",type:Boolean,reflect:!0},color:{attribute:"color",type:String,reflect:!0},correctCount:{attribute:"correct-count",type:Number,reflect:!0},errorCount:{attribute:"error-count",type:Number,reflect:!0},nrCount:{attribute:"nr-count",type:Number,reflect:!0},accuracy:{attribute:"accuracy",type:Number,reflect:!0},correctMeanRT:{attribute:"correct-mean-rt",type:Number,reflect:!0},errorMeanRT:{attribute:"error-mean-rt",type:Number,reflect:!0},meanRT:{attribute:"mean-rt",type:Number,reflect:!0},correctSDRT:{attribute:"correct-sd-rt",type:Number,reflect:!0},errorSDRT:{attribute:"error-sd-rt",type:Number,reflect:!0},sdRT:{attribute:"sd-rt",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0}}}constructor(){super(),this.numeric=!1,this.summary=!1,this.colors=["none","measure","outcome","all"],this.color="all",this.payoff=!1,this.correctPayoff=void 0,this.errorPayoff=void 0,this.nrPayoff=void 0,this.correctCount=NaN,this.errorCount=NaN,this.nrCount=NaN,this.accuracy=NaN,this.correctMeanRT=NaN,this.errorMeanRT=NaN,this.meanRT=NaN,this.correctSDRT=NaN,this.errorSDRT=NaN,this.sdRT=NaN}sendEvent(){this.dispatchEvent(new CustomEvent("accumulable-table-change",{detail:{correctCount:this.correctCount,errorCount:this.errorCount,nrCount:this.nrCount,accuracy:this.accuracy,correctMeanRT:this.correctMeanRT,errorMeanRT:this.errorMeanRT,meanRT:this.meanRT,correctSDRT:this.correctSDRT,errorSDRT:this.errorSDRT,sdRT:this.sdRT},bubbles:!0}))}correctCountInput(t){this.correctCount=parseInt(t.target.value,10),this.sendEvent()}errorCountInput(t){this.errorCount=parseInt(t.target.value,10),this.sendEvent()}accuracyInput(t){this.accuracy=parseFloat(t.target.value),this.sendEvent()}correctMeanRTInput(t){this.correctMeanRT=parseFloat(t.target.value),this.sendEvent()}errorMeanRTInput(t){this.errorMeanRT=parseFloat(t.target.value),this.sendEvent()}meanRTInput(t){this.meanRT=parseFloat(t.target.value),this.sendEvent()}correctSDRTInput(t){this.correctSDRT=parseFloat(t.target.value),this.sendEvent()}errorSDRTInput(t){this.errorSDRT=parseFloat(t.target.value),this.sendEvent()}sdRTInput(t){this.sdRT=parseFloat(t.target.value),this.sendEvent()}static get styles(){return[super.styles,i$3`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map((({type:t,value:e})=>"minusSign"===t?"−":e)).reduce(((t,e)=>t+e));let r,n,i,a,s,o,l,c,u;return this.numeric?(r=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.correctPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,n=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.errorPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,i=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,a=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,s=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,o=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `,l=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `,c=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `,u=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `):(r=x$1`<span>Correct Count</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.correctPayoff)}</span>`:x$1``}`,n=x$1`<span>Error Count</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.errorPayoff)}</span>`:x$1``}`,i=x$1`<span>Accuracy</span>`,a=x$1`<span>Correct Mean RT</span>`,s=x$1`<span>Error Mean RT</span>`,o=x$1`<span>Mean RT</span>`,l=x$1`<span>Correct SD RT</span>`,c=x$1`<span>Error SD RT</span>`,u=x$1`<span>SD RT</span>`),x$1`
      <table class=${this.numeric?"numeric":""}>
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
            ${this.summary?x$1`
                <th class="th th-main" scope="col">
                  Overall
                </th>`:x$1``}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Count
            </th>
            <td class="td td-data correct count">
              ${r}
            </td>
            <td class="td td-data error count">
              ${n}
            </td>
            ${this.summary?x$1`
                <td class="td td-summary overall proportion-correct">
                  ${i}
                </td>`:x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Mean RT
            </th>
            <td class="td td-data correct mean-rt">
              ${a}
            </td>
            <td class="td td-data error mean-rt">
              ${s}
            </td>
            ${this.summary?x$1`
                <td class="td td-summary overall mean-rt">
                  ${o}
                </td>`:x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              SD RT
            </th>
            <td class="td td-data correct sd-rt">
              ${l}
            </td>
            <td class="td td-data error sd-rt">
              ${c}
            </td>
            ${this.summary?x$1`
                <td class="td td-summary overall sd-rt">
                  ${u}
                </td>`:x$1``}
          </tr>
        </tbody>
      </table>`}}function decodeBase64(t,e){return atob(t)}function createURL(t,e,r){var n=e,i=decodeBase64(t),a=i.indexOf("\n",10)+1,s=i.substring(a)+"//# sourceMappingURL="+n,o=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(o)}function createBase64WorkerFactory(t,e,r){var n;return function(r){return n=n||createURL(t,e),new Worker(n,r)}}customElements.define("accumulable-table",AccumulableTable);var WorkerFactory=createBase64WorkerFactory("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uIFswLCBJbmZpbml0eSkKICAgICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhICgwLCAxKQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpCiAgICAgIHQwID0gbm9uLWRlY2lzaW9uIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgKDAsIEluZmluaXR5KQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpIFswLCBJbmZpbml0eSkKCiAgICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKSBbMCwgSW5maW5pdHkpCgogICAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6CiAgICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHMKICAgICAgcEMgPSBwcm9wb3J0aW9uIG9mIGNvcnJlY3QgdHJpYWxzCiAgICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUMgPSBtZWFuIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RDID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCgogICAgRXF1YXRpb25zOgogICAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICAgIFN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKQogICAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNykKICAqLwogIGNsYXNzIERETU1hdGggewogICAgc3RhdGljIHMgPSB7CiAgICAgIERFRkFVTFQ6IDEKICAgIH07CiAgICBzdGF0aWMgYSA9IHsKICAgICAgREVGQVVMVDogMS4yLAogICAgICBNSU46IDAuMDEsCiAgICAgIE1BWDogMi4wLAogICAgICBTVEVQOiAwLjAxLAogICAgICBKVU1QOiAwLjEKICAgIH07CiAgICBzdGF0aWMgeiA9IHsKICAgICAgREVGQVVMVDogMC41NSwKICAgICAgTUlOOiAwLjAxLAogICAgICBNQVg6IDAuOTksCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB2ID0gewogICAgICBERUZBVUxUOiAxLjUsCiAgICAgIE1JTjogMC4wMSwKICAgICAgTUFYOiA1LjAsCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB0MCA9IHsKICAgICAgREVGQVVMVDogMTUwLAogICAgICBNSU46IDAsCiAgICAgIE1BWDogNTAwLAogICAgICBTVEVQOiAxLAogICAgICBKVU1QOiAxMAogICAgfTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0ge307CgogICAgICAvLyBGaXJzdC1vcmRlciBzdW1zCiAgICAgIGNvbnN0IHN1bXMgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JDb3VudCArPSAxOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IubnJDb3VudCArPSAxOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIGNvcnJlY3RDb3VudDogMCwKICAgICAgICBlcnJvckNvdW50OiAwLAogICAgICAgIG5yQ291bnQ6IDAsCiAgICAgICAgY29ycmVjdFJUU3VtOiAwLAogICAgICAgIGVycm9yUlRTdW06IDAKICAgICAgfSk7CgogICAgICAvLyBGaXJzdC1vcmRlciBzdGF0cwogICAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JDb3VudCA9IHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubnJDb3VudCA9IHN1bXMubnJDb3VudDsKICAgICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7CiAgICAgIHN0YXRzLmNvcnJlY3RNZWFuUlQgPSBzdW1zLmNvcnJlY3RSVFN1bSAvIHN1bXMuY29ycmVjdENvdW50OwogICAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubWVhblJUID0gKHN1bXMuY29ycmVjdFJUU3VtICsgc3Vtcy5lcnJvclJUU3VtKSAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zMiA9IHRyaWFscy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4gewogICAgICAgIHN3aXRjaCAodHJpYWwub3V0Y29tZSkgewogICAgICAgICAgY2FzZSAnY29ycmVjdCc6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmNvcnJlY3RNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yU1MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMuZXJyb3JNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgc3M6IDAsCiAgICAgICAgY29ycmVjdFNTOiAwLAogICAgICAgIGVycm9yU1M6IDAKICAgICAgfSk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdFNEUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmNvcnJlY3RTUyAvIChzdGF0cy5jb3JyZWN0Q291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLmVycm9yU0RSVCA9IHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmVycm9yU1MgLyAoc3RhdHMuZXJyb3JDb3VudCAtIDEpKSA6IE5hTjsKICAgICAgc3RhdHMuc2RSVCA9IHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLnNzIC8gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHJldHVybiBzdGF0czsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZQogICAgc3RhdGljIGF6djJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMik7CiAgICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gKC12ICogYSAqKiAyICogKFogKyA0KSAqIFogLyBBICoqIDIgKyAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBIC0gcyAqKiAyICogelByaW1lKSAvIHYgKiogMzsKICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwOwogICAgfQoKICAgIC8vIE1lYW4gRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZ0MDJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MDJtQyhhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenYyc2RDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGlmICghdCkgcmV0dXJuIDA7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBiYXNlID0gTWF0aC5QSSAqIHMgKiogMiAvIGEgKiogMiAqIE1hdGguZXhwKC16UHJpbWUgKiB2IC8gcyAqKiAyKTsKICAgICAgbGV0IGsgPSAwOwogICAgICBsZXQgdGVybSA9IDA7CiAgICAgIGxldCBzdW0gPSAwOwogICAgICBkbyB7CiAgICAgICAgayArPSAxOwogICAgICAgIHRlcm0gPSBrICogTWF0aC5zaW4oTWF0aC5QSSAqIHpQcmltZSAqIGsgLyBhKSAqIE1hdGguZXhwKC0wLjUgKiAodiAqKiAyIC8gcyAqKiAyICsgTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyIC8gYSAqKiAyKSAqIHQpOwogICAgICAgIHN1bSArPSB0ZXJtOwogICAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDSwoKICAgICAgcmV0dXJuIGJhc2UgKiBzdW07CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBDb3JyZWN0IFJUCiAgICBzdGF0aWMgdGF6djJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbAogICAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlcwogICAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXMKICAgIC8vICAgIHBDIC0gUHJvcG9ydGlvbiBjb3JyZWN0CiAgICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXMKICAgIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtcwogICAgLy8gICAgcyAtIGRpZmZ1c2lvbiBzdGFuZGFyZCBkZXZpYXRpb24KICAgIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzCiAgICBzdGF0aWMgZGF0YTJleih7CiAgICAgIGFjY3VyYWN5OiBwQywKICAgICAgc2RSVDogc2QsCiAgICAgIG1lYW5SVDogbSwKICAgICAgcwogICAgfSkgewogICAgICBmdW5jdGlvbiBzaWduKHIpIHsKICAgICAgICByZXR1cm4gciA+IDAgPyAxIDogciA9PT0gMCA/IDAgOiAtMTsKICAgICAgfQogICAgICBmdW5jdGlvbiBsb2dpdChwKSB7CiAgICAgICAgcmV0dXJuIE1hdGgubG9nKHAgLyAoMSAtIHApKTsKICAgICAgfQogICAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyOwogICAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDsKICAgICAgY29uc3QgczIgPSBzICoqIDI7CiAgICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7CiAgICAgIGNvbnN0IHggPSBsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpIC8gdnJ0OwogICAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpOwogICAgICBjb25zdCBhID0gczIgKiBsb2dpdChwQykgLyB2OwogICAgICBjb25zdCB5ID0gLXYgKiBhIC8gczI7CiAgICAgIGNvbnN0IG1kdCA9IGEgLyAoMiAqIHYpICogKDEgLSBNYXRoLmV4cCh5KSkgLyAoMSArIE1hdGguZXhwKHkpKTsKICAgICAgY29uc3QgdDAgPSBtcnQgPyBtcnQgLSBtZHQgOiBudWxsOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWQKCiAgICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7CiAgICAgIHJldHVybiB7CiAgICAgICAgdiwKICAgICAgICBhLAogICAgICAgIHQwOiB0MFByaW1lLAogICAgICAgIHMKICAgICAgfTsKICAgIH0KICAgIHN0YXRpYyBkYXRhMmV6MigpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7CiAgICB9CiAgfQoKICAvLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXMKCiAgLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogWyJvZmYiLCAic2VsZiJdICovCgogIHNlbGYub25tZXNzYWdlID0gZXZlbnQgPT4gewogICAgY29uc3QgcGFyYW1zID0gRERNTWF0aC5kYXRhMmV6KHsKICAgICAgLi4uZXZlbnQuZGF0YSwKICAgICAgczogRERNTWF0aC5zLkRFRkFVTFQKICAgIH0pOwoKICAgIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIQogICAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTsKICAgIGNvbnN0IHogPSAhaXNOYU4ocGFyYW1zLnopID8gcGFyYW1zLnogOiAwLjU7CiAgICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xOwogICAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDsKICAgIGNvbnN0IHMgPSAhaXNOYU4ocGFyYW1zLnMpID8gcGFyYW1zLnMgOiBERE1NYXRoLnMuREVGQVVMVDsKICAgIGNvbnN0IHByZWRpY3RlZCA9IHsKICAgICAgYWNjdXJhY3k6IERETU1hdGguYXp2MnBDKGEsIHosIHYpLAogICAgICBjb3JyZWN0TWVhblJUOiBERE1NYXRoLmF6dnQwMm1DKGEsIHosIHYsIHQwKSwKICAgICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLAogICAgICBtZWFuUlQ6IERETU1hdGguYXp2dDAybShhLCB6LCB2LCB0MCksCiAgICAgIGNvcnJlY3RTRFJUOiBERE1NYXRoLmF6djJzZEMoYSwgeiwgdiksCiAgICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLAogICAgICBzZFJUOiBERE1NYXRoLmF6djJzZChhLCB6LCB2KQogICAgfTsKICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICBwYXJhbXM6IHsKICAgICAgICBhLAogICAgICAgIHosCiAgICAgICAgdiwKICAgICAgICB0MCwKICAgICAgICBzCiAgICAgIH0sCiAgICAgIHByZWRpY3RlZAogICAgfSk7CiAgfTsKCn0pKCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWRkbS1maXQtd29ya2VyLmpzLm1hcAoK","data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb24gWzAsIEluZmluaXR5KVxuICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYSAoMCwgMSlcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKSAoMCwgSW5maW5pdHkpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKSBbMCwgSW5maW5pdHkpXG5cbiAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykgWzAsIEluZmluaXR5KVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNylcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSB7XG4gICAgREVGQVVMVDogMSxcbiAgfTtcblxuICBzdGF0aWMgYSA9IHtcbiAgICBERUZBVUxUOiAxLjIsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMi4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB6ID0ge1xuICAgIERFRkFVTFQ6IDAuNTUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMC45OSxcbiAgICBTVEVQOiAwLjAxLFxuICAgIEpVTVA6IDAuMSxcbiAgfTtcblxuICBzdGF0aWMgdiA9IHtcbiAgICBERUZBVUxUOiAxLjUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogNS4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB0MCA9IHtcbiAgICBERUZBVUxUOiAxNTAsXG4gICAgTUlOOiAwLFxuICAgIE1BWDogNTAwLFxuICAgIFNURVA6IDEsXG4gICAgSlVNUDogMTAsXG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMik7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKTtcblxuICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTtcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gTWVhbiBPdmVyYWxsIFJUXG4gIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgdmFyaWFuY2UgPSAoXG4gICAgICAoXG4gICAgICAgICgtdiAqIGEgKiogMiAqIChaICsgNCkgKiBaKSAvIEEgKiogMlxuICAgICAgKSArIChcbiAgICAgICAgKCgtMyAqIHYgKiBhICoqIDIgKyA0ICogdiAqIHpQcmltZSAqIGEgKyBzICoqIDIgKiBhKSAqIFogKyA0ICogdiAqIHpQcmltZSAqIGEpIC8gQVxuICAgICAgKSAtIChcbiAgICAgICAgcyAqKiAyICogelByaW1lXG4gICAgICApXG4gICAgKSAvIHYgKiogMztcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKVxuICAgICAgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7XG4gICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7XG4gIH1cblxuICAvLyBTRCBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2MnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2MmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgdGVybSA9IDA7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZG8ge1xuICAgICAgayArPSAxO1xuXG4gICAgICB0ZXJtID0ga1xuICAgICAgICAqIE1hdGguc2luKChNYXRoLlBJICogelByaW1lICogaykgLyBhKVxuICAgICAgICAqIE1hdGguZXhwKC0wLjUgKiAoKHYgKiogMiAvIHMgKiogMikgKyAoKE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMikgLyBhICoqIDIpKSAqIHQpO1xuXG4gICAgICBzdW0gKz0gdGVybTtcbiAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDS1xuXG4gICAgcmV0dXJuIGJhc2UgKiBzdW07XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIENvcnJlY3QgUlRcbiAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vcmFvdWwuc29jc2NpLnV2YS5ubC9FWjIvRVoyX25ldy5odG1sXG4gIC8vIEVaLWZ1bmN0aW9uIGZvciBzdGFydGluZyB2YWx1ZXNcbiAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXNcbiAgLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3RcbiAgLy8gICAgc2QgLSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBSVCdzIGluIG1zXG4gIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtc1xuICAvLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvblxuICAvLyByZXR1cm5zOiBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHYsIGEsIGFuZCB0MCwgY29udGFpbmluZyBFWi1lc3RpbWF0ZXMgb2YgdGhlc2UgcGFyYW1ldGVyc1xuICBzdGF0aWMgZGF0YTJleih7XG4gICAgYWNjdXJhY3k6IHBDLFxuICAgIHNkUlQ6IHNkLFxuICAgIG1lYW5SVDogbSxcbiAgICBzLFxuICB9KSB7XG4gICAgZnVuY3Rpb24gc2lnbihyKSB7XG4gICAgICByZXR1cm4gKChyID4gMCkgPyAxIDogKChyID09PSAwKSA/IDAgOiAtMSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ2l0KHApIHtcbiAgICAgIHJldHVybiBNYXRoLmxvZyhwIC8gKDEgLSBwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdnJ0ID0gKHNkIC8gMTAwMCkgKiogMjtcbiAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDtcblxuICAgIGNvbnN0IHMyID0gcyAqKiAyO1xuICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7XG4gICAgY29uc3QgeCA9IChsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpKSAvIHZydDtcbiAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpO1xuICAgIGNvbnN0IGEgPSAoczIgKiBsb2dpdChwQykpIC8gdjtcbiAgICBjb25zdCB5ID0gKC12ICogYSkgLyBzMjtcbiAgICBjb25zdCBtZHQgPSAoKGEgLyAoMiAqIHYpKSAqICgxIC0gTWF0aC5leHAoeSkpKSAvICgxICsgTWF0aC5leHAoeSkpO1xuICAgIGNvbnN0IHQwID0gKG1ydCA/IG1ydCAtIG1kdCA6IG51bGwpOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWRcblxuICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHYsXG4gICAgICBhLFxuICAgICAgdDA6IHQwUHJpbWUsXG4gICAgICBzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZGF0YTJlejIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cbn1cbiIsIlxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgRERNTWF0aCBmcm9tICcuL2RkbS1tYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgRERNTWF0aDtcbiIsIi8qIGVzbGludCBuby1yZXN0cmljdGVkLWdsb2JhbHM6IFtcIm9mZlwiLCBcInNlbGZcIl0gKi9cblxuaW1wb3J0IERETU1hdGggZnJvbSAnQGRlY2lkYWJsZXMvYWNjdW11bGFibGUtbWF0aCc7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IERETU1hdGguZGF0YTJleih7Li4uZXZlbnQuZGF0YSwgczogRERNTWF0aC5zLkRFRkFVTFR9KTtcblxuICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISFcbiAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTtcbiAgY29uc3QgeiA9ICFpc05hTihwYXJhbXMueikgPyBwYXJhbXMueiA6IDAuNTtcbiAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDAuMTtcbiAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDtcbiAgY29uc3QgcyA9ICFpc05hTihwYXJhbXMucykgPyBwYXJhbXMucyA6IERETU1hdGgucy5ERUZBVUxUO1xuXG4gIGNvbnN0IHByZWRpY3RlZCA9IHtcbiAgICBhY2N1cmFjeTogRERNTWF0aC5henYycEMoYSwgeiwgdiksXG4gICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksXG4gICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLFxuICAgIG1lYW5SVDogRERNTWF0aC5henZ0MDJtKGEsIHosIHYsIHQwKSxcbiAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLFxuICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLFxuICAgIHNkUlQ6IERETU1hdGguYXp2MnNkKGEsIHosIHYpLFxuICB9O1xuXG4gIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIHBhcmFtczoge1xuICAgICAgYSwgeiwgdiwgdDAsIHMsXG4gICAgfSxcbiAgICBwcmVkaWN0ZWQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJERE1NYXRoIiwicyIsIkRFRkFVTFQiLCJhIiwiTUlOIiwiTUFYIiwiU1RFUCIsIkpVTVAiLCJ6IiwidiIsInQwIiwidHJpYWxzMnN0YXRzIiwidHJpYWxzIiwic3RhdHMiLCJzdW1zIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ0cmlhbCIsIm91dGNvbWUiLCJjb3JyZWN0Q291bnQiLCJjb3JyZWN0UlRTdW0iLCJydCIsImVycm9yQ291bnQiLCJlcnJvclJUU3VtIiwibnJDb3VudCIsImFjY3VyYWN5IiwiY29ycmVjdE1lYW5SVCIsImVycm9yTWVhblJUIiwibWVhblJUIiwic3VtczIiLCJzcyIsImNvcnJlY3RTUyIsImVycm9yU1MiLCJjb3JyZWN0U0RSVCIsIk1hdGgiLCJzcXJ0IiwiTmFOIiwiZXJyb3JTRFJUIiwic2RSVCIsImF6djJwRSIsInpQcmltZSIsIkEiLCJleHAiLCJaIiwiYXp2MnBDIiwiYXp2dDAybSIsIm1lYW4iLCJhenYyc2QiLCJ2YXJpYW5jZSIsImF6dnQwMm1FIiwicGhpIiwieCIsInkiLCJhenYyc2RFIiwiYXp2dDAybUMiLCJhenYyc2RDIiwidGF6djJnRSIsInQiLCJiYXNlIiwiUEkiLCJrIiwidGVybSIsInN1bSIsInNpbiIsInRhenYyZ0MiLCJkYXRhMmV6IiwicEMiLCJzZCIsIm0iLCJzaWduIiwiciIsImxvZ2l0IiwicCIsImxvZyIsInZydCIsIm1ydCIsInMyIiwibCIsIm1kdCIsInQwUHJpbWUiLCJkYXRhMmV6MiIsIkVycm9yIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyYW1zIiwiZGF0YSIsImlzTmFOIiwicHJlZGljdGVkIiwicG9zdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7OztFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNlLE1BQU1BLE9BQU8sQ0FBQztFQUMzQixFQUFBLE9BQU9DLENBQUMsR0FBRztFQUNUQyxJQUFBQSxPQUFPLEVBQUU7S0FDVjtFQUVELEVBQUEsT0FBT0MsQ0FBQyxHQUFHO0VBQ1RELElBQUFBLE9BQU8sRUFBRSxHQUFHO0VBQ1pFLElBQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1RDLElBQUFBLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElBQUFBLElBQUksRUFBRSxJQUFJO0VBQ1ZDLElBQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPQyxDQUFDLEdBQUc7RUFDVE4sSUFBQUEsT0FBTyxFQUFFLElBQUk7RUFDYkUsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsSUFBSSxFQUFFLElBQUk7RUFDVkMsSUFBQUEsSUFBSSxFQUFFO0tBQ1A7RUFFRCxFQUFBLE9BQU9FLENBQUMsR0FBRztFQUNUUCxJQUFBQSxPQUFPLEVBQUUsR0FBRztFQUNaRSxJQUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNUQyxJQUFBQSxHQUFHLEVBQUUs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");class DDMFit extends AccumulableElement{static get properties(){return{}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.observed={},this.predicted={},this.working=!1,this.queued=!1,this.worker=new WorkerFactory,this.worker.onmessage=t=>{this.working=!1,this.predicted=t.data.predicted,this.a=t.data.params.a,this.z=t.data.params.z,this.v=t.data.params.v,this.t0=t.data.params.t0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("ddm-fit-update",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0},bubbles:!0})),this.queued&&this.fit()},this.fit()}fit(){this.working?this.queued=!0:(this.worker.postMessage(this.observed),this.working=!0,this.queued=!1)}clear(){this.observed={},this.fit()}set(t){this.observed=structuredClone(t),this.fit()}static get styles(){return[super.styles,i$3`
        :host {
          display: inline-block;
        }
      `]}render(){return x$1`
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
    `}}customElements.define("ddm-fit",DDMFit);class DDMParameters extends AccumulableElement{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.a=void 0,this.z=void 0,this.v=void 0,this.t0=void 0}setBoundarySeparation(t){this.a=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-a",{detail:{a:this.a},bubbles:!0}))}setStartingPoint(t){this.z=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-z",{detail:{z:this.z},bubbles:!0}))}setDriftRate(t){this.v=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-v",{detail:{v:this.v},bubbles:!0}))}setNondecisionTime(t){this.t0=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-t0",{detail:{t0:this.t0},bubbles:!0}))}static get styles(){return[super.styles,i$3`
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

        .a {
          --decidables-slider-background-color: var(---color-a-light);
          --decidables-slider-color: var(---color-a);
        }

        .z {
          --decidables-slider-background-color: var(---color-z-light);
          --decidables-slider-color: var(---color-z);
        }

        .v {
          --decidables-slider-background-color: var(---color-v-light);
          --decidables-slider-color: var(---color-v);
        }

        .t0 {
          --decidables-slider-background-color: var(---color-t0-light);
          --decidables-slider-color: var(---color-t0);
        }
      `]}render(){return x$1`
      <div class="holder">
        ${null!=this.a?x$1`<decidables-slider class="a"
            ?disabled=${!this.interactive}
            scale
            min=${DDMMath.a.MIN}
            max=${DDMMath.a.MAX}
            step=${DDMMath.a.STEP}
            .value=${+this.a.toFixed(2)}
            @change=${this.setBoundarySeparation.bind(this)}
            @input=${this.setBoundarySeparation.bind(this)}
          ><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>`:x$1``}
        ${null!=this.z?x$1`<decidables-slider class="z"
            ?disabled=${!this.interactive}
            scale
            min=${DDMMath.z.MIN}
            max=${DDMMath.z.MAX}
            step=${DDMMath.z.STEP}
            .value=${+this.z.toFixed(2)}
            @change=${this.setStartingPoint.bind(this)}
            @input=${this.setStartingPoint.bind(this)}
          ><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>`:x$1``}
        ${null!=this.v?x$1`<decidables-slider class="v"
            ?disabled=${!this.interactive}
            scale
            min=${DDMMath.v.MIN}
            max=${DDMMath.v.MAX}
            step=${DDMMath.v.STEP}
            .value=${+this.v.toFixed(2)}
            @change=${this.setDriftRate.bind(this)}
            @input=${this.setDriftRate.bind(this)}
          ><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>`:x$1``}
        ${null!=this.t0?x$1`<decidables-slider class="t0" 
            ?disabled=${!this.interactive}
            scale
            min=${DDMMath.t0.MIN}
            max=${DDMMath.t0.MAX}
            step=${DDMMath.t0.STEP}
            .value=${+this.t0.toFixed(0)}
            @change=${this.setNondecisionTime.bind(this)}
            @input=${this.setNondecisionTime.bind(this)}
          ><div>Nondecision Time<br><span class="math-var">t₀</span></div></decidables-slider>`:x$1``}
      </div>`}}customElements.define("ddm-parameters",DDMParameters);class DDMModel extends(DecidablesMixinResizeable(AccumulableElement)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){select(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=uniform(0,1)()}alignPath(t,e,r,n,i){const a=normal.source(lcg(t))(0,this.precision**.5),s=-e/2,o=e/2,l=e*r-e/2,c=n*this.precision,u=[];for(u.push({t:i,e:l});u.at(-1).e>s&&u.at(-1).e<o;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+c+DDMMath.s.DEFAULT*a()});return u}alignCorrectDistribution(t,e,r,n){const i=DDMMath.azv2pC(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-n;s+=this.scale.time.step)s>0&&a.push({t:n+s,d:DDMMath.tazv2gC(s/1e3,t,e,r)/i});return a}alignErrorDistribution(t,e,r,n){const i=DDMMath.azv2pE(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-n;s+=this.scale.time.step)s>0&&a.push({t:n+s,d:DDMMath.tazv2gE(s/1e3,t,e,r)/i});return a}alignState(){this.random=uniform.source(lcg(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},((t,e)=>{const r=this.random()/1e3*997,n=this.animate&&e===this.trials-1,i=this.alignPath(r,this.a,this.z,this.v,this.t0),a=i.at(-1).e<=this.bounds.lower?"error":i.at(-1).e>=this.bounds.upper?"correct":"nr",s="error"===a?i.at(-2).t+(this.bounds.lower-i.at(-2).e)/(i.at(-1).e-i.at(-2).e)*(1e3*this.precision):"correct"===a?i.at(-2).t+(this.bounds.upper-i.at(-2).e)/(i.at(-1).e-i.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:i,rt:s,outcome:a,animate:n}}));const t=DDMMath.trials2stats(this.data.trials.filter((t=>!t.animate)));this.data={...this.data,...t},this.model.accuracy=DDMMath.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=DDMMath.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=DDMMath.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=DDMMath.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=DDMMath.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,i$3`
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
          stroke-width: 0;

          r: 6px;
        }

        /* Make larger targets for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-dasharray: none;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-linecap: round;
            stroke-width: 12;
          }
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
      `]}render(){return x$1``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.5?(i=r,n=1.5*i):(n=e,i=n/1.5);const a=1*this.rem,s=3*this.rem,o=3.75*this.rem,l=3.25*this.rem,c=i-(a+s),u=n-(o+l),d=.75*this.rem,h=.5*c,p=.25*c-d,g=.75*this.rem,b=.9*u,y=.1*u-g,m=parseInt(this.getComputedStyleValue("---transition-duration"),10),f=linear().domain([this.scale.time.min,this.scale.time.max]).range([0,b]),$=linear().domain([this.scale.evidence.min,this.scale.evidence.max]).range([h,0]),I=linear().domain([this.scale.density.min,this.scale.density.max]).range([p,0]),C=linear().domain([this.scale.density.min,this.scale.density.max]).range([0,p]),A=linear().domain([0,1]).range([0,c]),E=drag().subject(((t,e)=>({x:f(e.t0),y:$(e.startingPoint)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=f.invert(t.x),n=($.invert(t.y)+this.a/2)/this.a;r="z"===e?f.invert(t.subject.x):r<DDMMath.t0.MIN?DDMMath.t0.MIN:r>DDMMath.t0.MAX?DDMMath.t0.MAX:r,n="t0"===e?($.invert(t.subject.y)+this.a/2)/this.a:n<DDMMath.z.MIN?DDMMath.z.MIN:n>DDMMath.z.MAX?DDMMath.z.MAX:n,this.t0=r,this.z=n,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1})),B=drag().on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;let e=($.invert(t.y)-this.startingPoint)/(f.invert(t.x)-this.t0)*1e3;e=e<DDMMath.v.MIN?DDMMath.v.MIN:e>DDMMath.v.MAX?DDMMath.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1})),v=drag().subject(((t,e)=>({x:0,y:$(e.value)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;const e=$.invert(t.y);let r=Math.abs(2*e);r=r<DDMMath.a.MIN?DDMMath.a.MIN:r>DDMMath.a.MAX?DDMMath.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1})),U=line().x((t=>f(t.t))).y((t=>$(t.e))),F=line().x((t=>f(t.t))).y((t=>I(t.d))),Q=line().x((t=>f(t.t))).y((t=>C(t.d))),R=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),S=R.enter().append("svg").classed("main",!0).html(AccumulableElement.svgDefs),x=S.append("defs");x.append("marker").attr("id","measure-arrow").attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","2").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("d","M -3 -3 l 6 3 l -6 3 z"),x.append("marker").attr("id","model-sd-cap").attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),x.append("marker").attr("id","data-sd-cap").attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6");const T=x.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",$(this.bounds.upper)).attr("y2",$(this.bounds.lower));T.append("stop").classed("stop-0",!0).attr("offset","0%"),T.append("stop").classed("stop-100",!0).attr("offset","100%");const D=S.merge(R).attr("viewBox",`0 0 ${n} ${i}`),N=D.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:I,densityLine:F,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:C,densityLine:Q,alignDistribution:this.alignErrorDistribution.bind(this)}]),M=S.append("g").classed("plot evidence",!0),w=N.enter().append("g").attr("class",(t=>`plot density ${t.outcome}`)),L=S.append("g").classed("plot accuracy",!0),O=D.select(".plot.evidence").attr("transform",`translate(${o}, ${a+p+d})`),_=w.merge(N).attr("transform",(t=>`translate(${o}, ${"correct"===t.outcome?a:a+p+h+2*d})`)),k=D.select(".plot.accuracy").attr("transform",`translate(${o+b+g}, ${a})`);M.append("clipPath").attr("id","clip-evidence").append("rect"),O.select("clipPath rect").attr("y",$(this.bounds.upper)).attr("height",$(this.bounds.lower)-$(this.bounds.upper)+1).attr("width",b+1);const P=M.append("g").classed("underlayer",!0),V=w.append("g").classed("underlayer",!0),H=L.append("g").classed("underlayer",!0),G=O.select(".underlayer"),z=_.select(".underlayer"),Y=k.select(".underlayer");M.append("g").classed("content",!0).append("g").classed("paths",!0);const j=w.append("g").classed("content",!0);L.append("g").classed("content",!0);const W=O.select(".content"),K=_.select(".content"),X=k.select(".content");M.append("g").classed("overlayer",!0),w.append("g").classed("overlayer",!0),L.append("g").classed("overlayer",!0);const J=O.select(".overlayer"),Z=_.select(".overlayer");P.append("rect").classed("background",!0),V.append("rect").classed("background",!0),G.select(".background").transition().duration(this.drag?0:m).ease(cubicOut).attr("y",$(this.bounds.upper)).attr("height",$(this.bounds.lower)-$(this.bounds.upper)).attr("width",b),z.select(".background").transition().duration(m).ease(cubicOut).attr("height",p).attr("width",b),V.filter((t=>"error"===t.outcome)).append("g").classed("axis time",!0);const q=z.filter((t=>"error"===t.outcome)).select(".axis.time").attr("transform",`translate(0, ${p+.25*this.rem})`);q.transition().duration(m).ease(cubicOut).call(axisBottom(f)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const tt=V.filter((t=>"error"===t.outcome)).append("text").classed("title time",!0).attr("text-anchor","middle");tt.append("tspan").classed("name",!0).text("Time (ms)"),z.filter((t=>"error"===t.outcome)).select(".title.time").transition().duration(m).ease(cubicOut).attr("transform",`translate(${b/2}, ${p+2.5*this.rem})`),P.append("g").classed("axis evidence",!0),V.append("g").attr("class",(t=>`axis density ${t.outcome}`)),H.append("g").classed("axis accuracy",!0);const et=G.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),rt=z.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),nt=Y.select(".axis.accuracy").attr("transform",`translate(${y+.25*this.rem}, 0)`),it=et.transition().duration(m).ease(cubicOut).call(axisLeft($)).attr("font-size",null).attr("font-family",null),at=rt.transition().duration(m).ease(cubicOut).each(((t,e,r)=>{axisLeft(t.densityScale).ticks(2)(select(r[e]))})).attr("font-size",null).attr("font-family",null),st=nt.transition().duration(m).ease(cubicOut).call(axisRight(A)).attr("font-size",null).attr("font-family",null);it.selectAll("line, path").attr("stroke",null),at.selectAll("line, path").attr("stroke",null),st.selectAll("line, path").attr("stroke",null);const ot=P.append("text").classed("title evidence",!0).attr("text-anchor","middle"),lt=V.append("text").attr("class",(t=>`title density ${t.outcome}`)).attr("text-anchor","middle"),ct=H.append("text").classed("title accuracy",!0).attr("text-anchor","middle");ot.append("tspan").classed("name",!0).text("Evidence"),lt.append("tspan").classed("name",!0).text("Density"),ct.append("tspan").classed("name",!0).text("Accuracy"),G.select(".title.evidence").transition().duration(m).ease(cubicOut).attr("transform",`translate(${-2.5*this.rem}, ${h/2})rotate(-90)`),z.select(".title.density").transition().duration(m).ease(cubicOut).attr("transform",`translate(${-2.5*this.rem}, ${p/2})rotate(-90)`),Y.select(".title.accuracy").transition().duration(m).ease(cubicOut).attr("transform",`translate(${y+2.25*this.rem}, ${c/2})rotate(90)`);const ut=W.select(".paths").selectAll(".path").data(this.data.trials.filter((t=>void 0!==t.path))),dt=local(),ht=ut.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",((t,e)=>{if(!this.drag){select(t.currentTarget).classed("highlight",!0).raise();const r=J.append("g").classed(`rt-label ${e.outcome}`,!0),n=r.append("rect"),i=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",f(e.rt)).attr("y","correct"===e.outcome?$(this.bounds.upper)-.25*this.rem:$(this.bounds.lower)+.125*this.rem).node().getBBox();n.attr("x",i.x-.125*this.rem).attr("y",i.y+.125*this.rem).attr("width",i.width+.25*this.rem).attr("height",i.height-.25*this.rem),dt.set(t.currentTarget,r)}})).on("pointerout",((t,e)=>{this.drag||(select(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),dt.get(t.currentTarget).remove())}));ht.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const pt=ht.merge(ut).attr("class",(t=>`path ${t.outcome}`));pt.select(".curve").transition().duration(this.drag?0:m).ease(cubicOut).attr("stroke",(t=>this.getComputedStyleValue(`---color-${t.outcome}`))).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:this.a,this.a),a=interpolate$1(void 0!==n.z?n.z:this.z,this.z),s=interpolate$1(void 0!==n.v?n.v:this.v,this.v),o=interpolate$1(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=i(e),n.z=a(e),n.v=s(e),n.t0=o(e);const r=this.alignPath(t.seed,n.a,n.z,n.v,n.t0);return U(r)}}));const gt=pt.filter((t=>t.animate&&!this.paused));if(!gt.empty()){const t=gt.attr("data-new-trial-ease-time"),e=e=>linear().domain([0,1]).range([t,1])(e),r=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r));gt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),gt.transition("new").duration((e=>Math.floor(1.5*e.rt*(1-t)))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",((t,e,n)=>{const i=interpolate$1(n[e].getAttribute("stroke-dashoffset"),0);return t=>i(r(linear$1)(t))})).on("end",((t,e,r)=>{select(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))}))}const bt=pt.filter((t=>t.animate&&this.paused));if(!bt.empty()){const t=bt.attr("data-new-trial-ease-time");bt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",(()=>interpolate$1(1,0)(linear$1(t))))}pt.filter((t=>!t.animate)).attr("data-new-trial-ease-time",null),ut.exit().remove();const yt=j.append("g").attr("class",(t=>`dist ${t.outcome}`));yt.append("path").classed("curve",!0),K.select(".dist").select(".curve").transition().duration(this.drag?0:m).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:this.a,this.a),a=interpolate$1(void 0!==n.z?n.z:this.z,this.z),s=interpolate$1(void 0!==n.v?n.v:this.v,this.v),o=interpolate$1(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=i(e),n.z=a(e),n.v=s(e),n.t0=o(e);const r=t.alignDistribution(n.a,n.z,n.v,n.t0);return t.densityLine(r)}}));const mt=W.selectAll(".rt").data(this.data.trials),ft=mt.enter().append("g");ft.append("line").classed("mark",!0).attr("x1",(t=>f(t.rt))).attr("x2",(t=>f(t.rt))).attr("y1",(t=>"correct"===t.outcome?$(1)-.125*this.rem:$(-1)+.125*this.rem)).attr("y2",(t=>"correct"===t.outcome?$(1)-.675*this.rem:$(-1)+.675*this.rem));const $t=ft.merge(mt).attr("class",(t=>`rt ${t.outcome}`));$t.filter((t=>!t.animate)).select(".mark").transition().duration(this.drag?0:m).ease(cubicOut).attr("stroke",(t=>this.getComputedStyleValue(`---color-${t.outcome}`))).attr("x1",(t=>f(t.rt))).attr("x2",(t=>f(t.rt))).attr("y1",(t=>"correct"===t.outcome?$(1)-.125*this.rem:$(-1)+.125*this.rem)).attr("y2",(t=>"correct"===t.outcome?$(1)-.675*this.rem:$(-1)+.675*this.rem)),mt.exit().remove();const It=X.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),Ct=It.enter().append("g").attr("class",((t,e)=>"accuracy model "+(0===e?"correct":"error")));Ct.append("rect").classed("bar",!0).attr("x",0),Ct.merge(It).select("rect").transition().duration(this.drag?0:m).ease(cubicOut).attr("y",((t,e)=>A(0===e?0:1-t))).attr("width",y).attr("height",(t=>A(t))),It.exit().remove();const At=X.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),Et=At.enter().append("g").classed("accuracy data",!0);Et.append("line").classed("mark",!0);const Bt=Et.merge(At).attr("class",(t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error")));Bt.select(".mark").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",0+.25*this.rem).attr("x2",y-.25*this.rem).attr("y1",(t=>A(t)-1)).attr("y2",(t=>A(t)-1)),At.exit().remove();const vt=J.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),Ut=vt.enter().append("g").attr("class",((t,e)=>"boundary "+(0===e?"correct":"error")));Ut.append("line").classed("line",!0),Ut.append("line").classed("line touch",!0);const Ft=Ut.merge(vt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?DDMMath.a.STEP:DDMMath.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?DDMMath.a.STEP:DDMMath.a.JUMP}r=r<DDMMath.a.MIN?DDMMath.a.MIN:r>DDMMath.a.MAX?DDMMath.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Ft.call(v):Ft.on(".drag",null)),Ft.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(this.scale.time.min)).attr("x2",f(this.scale.time.max)).attr("y1",(t=>$(t.value))).attr("y2",(t=>$(t.value))),Ft.select(".line.touch").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(this.scale.time.min)).attr("x2",f(this.scale.time.max)).attr("y1",(t=>$(t.value))).attr("y2",(t=>$(t.value))),vt.exit().remove();const Qt=J.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Rt=Qt.enter().append("g").classed("drift",!0);Rt.append("line").classed("line",!0),Rt.append("line").classed("line touch",!0),Rt.append("path").classed("arrow",!0),Rt.append("path").classed("arrow touch",!0);const St=Rt.merge(Qt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?DDMMath.v.STEP:DDMMath.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?DDMMath.v.STEP:DDMMath.v.JUMP}e=e<DDMMath.v.MIN?DDMMath.v.MIN:e>DDMMath.v.MAX?DDMMath.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?St.call(B):St.on(".drag",null));const xt=($(0)-$(1))/(f(1)-f(0));St.transition().duration(this.drag?0:m).ease(cubicOut).attr("transform",(t=>`translate(${f(t.t0)}, ${$(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*xt)*(180/Math.PI)})`)),St.select(".line").attr("x2",f(200)),St.select(".line.touch").attr("x2",f(200)),St.select(".arrow").attr("d",`\n        M ${f(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),St.select(".arrow.touch").attr("d",`\n        M ${f(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Qt.exit().remove();const Tt=J.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Dt=Tt.enter().append("g").classed("t0z",!0);Dt.append("line").classed("line",!0),Dt.append("line").classed("line touch",!0),Dt.append("circle").classed("point touch",!0);const Nt=Dt.merge(Tt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?DDMMath.z.STEP:DDMMath.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?DDMMath.z.STEP:DDMMath.z.JUMP}e=e<DDMMath.z.MIN?DDMMath.z.MIN:e>DDMMath.z.MAX?DDMMath.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?DDMMath.t0.STEP:DDMMath.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?DDMMath.t0.STEP:DDMMath.t0.JUMP}e=e<DDMMath.t0.MIN?DDMMath.t0.MIN:e>DDMMath.t0.MAX?DDMMath.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Nt.call(E):Nt.on(".drag",null)),Nt.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(0)).attr("x2",(t=>f(t.t0))).attr("y1",(t=>$(t.startingPoint))).attr("y2",(t=>$(t.startingPoint))),Nt.select(".line.touch").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(0)).attr("x2",(t=>f(t.t0))).attr("y1",(t=>$(t.startingPoint))).attr("y2",(t=>$(t.startingPoint))),Nt.select(".point").transition().duration(this.drag?0:m).ease(cubicOut).attr("cx",(t=>f(t.t0))).attr("cy",(t=>$(t.startingPoint))),Tt.exit().remove();const Mt=J.selectAll(".measure.a").data(this.measures?[this.a]:[]),wt=Mt.enter().append("g").classed("measure a",!0);wt.append("line").classed("line",!0).attr("marker-start","url(#measure-arrow)").attr("marker-end","url(#measure-arrow)");const Lt=wt.append("text").classed("label",!0);Lt.append("tspan").classed("a math-var",!0).text("a"),Lt.append("tspan").classed("equals",!0).text(" = "),Lt.append("tspan").classed("value",!0);const Ot=wt.merge(Mt);Ot.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(this.scale.time.max)-.75*this.rem).attr("y1",$(this.bounds.upper)+2).attr("x2",f(this.scale.time.max)-.75*this.rem).attr("y2",$(this.bounds.lower)-2);Ot.select(".label").transition().duration(this.drag?0:m).ease(cubicOut).attr("x",f(this.scale.time.max)).attr("y",$(this.bounds.upper)-.25*this.rem).select(".value").text(format(".2f")(this.a)),Mt.exit().remove();const _t=J.selectAll(".measure.z").data(this.measures?[this.z]:[]),kt=_t.enter().append("g").classed("measure z",!0);kt.append("line").classed("line",!0).attr("marker-start","url(#measure-arrow)").attr("marker-end","url(#measure-arrow)");const Pt=kt.append("text").classed("label",!0);Pt.append("tspan").classed("z math-var",!0).text("z"),Pt.append("tspan").classed("equals",!0).text(" = "),Pt.append("tspan").classed("value",!0);const Vt=kt.merge(_t);Vt.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(this.scale.time.min)+.75*this.rem).attr("y1",$(this.startingPoint)+2).attr("x2",f(this.scale.time.min)+.75*this.rem).attr("y2",$(this.bounds.lower)-2);Vt.select(".label").transition().duration(this.drag?0:m).ease(cubicOut).attr("x",f(this.scale.time.min)).attr("y",$(this.bounds.lower)+.125*this.rem).select(".value").text(format(".0%")(this.z)),_t.exit().remove();const Ht=J.selectAll(".measure.v").data(this.measures?[this.v]:[]),Gt=Ht.enter().append("g").classed("measure v",!0);Gt.append("path").classed("line",!0).attr("marker-start","url(#measure-arrow)").attr("marker-end","url(#measure-arrow)");const zt=Gt.append("text").classed("label",!0);zt.append("tspan").classed("v math-var",!0).text("v"),zt.append("tspan").classed("equals",!0).text(" = "),zt.append("tspan").classed("value",!0);const Yt=Math.atan(this.v/1e3*xt),jt=f(200)-f(0)+.75*this.rem,Wt=Math.cos(Yt)*jt,Kt=Math.sin(Yt)*jt,Xt=Gt.merge(Ht);Xt.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("d",`\n        M ${f(this.t0+200)+.75*this.rem}, ${$(this.startingPoint)}\n        A ${f(200)-f(0)} ${f(200)-f(0)} 0 0 0 ${f(this.t0)+Wt} ${$(this.startingPoint)-Kt}\n      `);Xt.select(".label").transition().duration(this.drag?0:m).ease(cubicOut).attr("x",f(this.t0+200)+.5*this.rem).attr("y",$(this.bounds.upper)-.25*this.rem).select(".value").text(format(".2f")(this.v)),Ht.exit().remove();const Jt=J.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),Zt=Jt.enter().append("g").classed("measure t0",!0);Zt.append("line").classed("line",!0).attr("marker-start","url(#measure-arrow)").attr("marker-end","url(#measure-arrow)");const qt=Zt.append("text").classed("label",!0);qt.append("tspan").classed("t0 math-var",!0).text("t₀"),qt.append("tspan").classed("equals",!0).text(" = "),qt.append("tspan").classed("value",!0);const te=Zt.merge(Jt);te.select(".line").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",f(0)+2).attr("y1",$(this.startingPoint)-.75*this.rem).attr("x2",f(this.t0)-2).attr("y2",$(this.startingPoint)-.75*this.rem);te.select(".label").transition().duration(this.drag?0:m).ease(cubicOut).attr("x",f(this.t0)+.25*this.rem).attr("y",$(this.bounds.upper)-.25*this.rem).select(".value").text(format("d")(this.t0)),Jt.exit().remove();const ee=Z.selectAll(".model.mean").data((t=>this.means?[t]:[])),re=ee.enter().append("g").attr("class",(t=>`model mean ${t.outcome}`));re.append("line").classed("indicator",!0);re.merge(ee).select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",(t=>f(t.model.meanRT))).attr("x2",(t=>f(t.model.meanRT))).attr("y1",(t=>t.densityScale(this.scale.density.min))).attr("y2",(t=>t.densityScale(this.scale.density.max))),ee.exit().remove();const ne=Z.selectAll(".data.mean").data((t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[])),ie=ne.enter().append("g").attr("class",(t=>`data mean ${t.outcome}`));ie.append("line").classed("indicator",!0).attr("y1",(t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem)).attr("y2",(t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem));ie.merge(ne).select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",(t=>f(t.data.meanRT))).attr("x2",(t=>f(t.data.meanRT))).attr("y1",(t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem)).attr("y2",(t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem)),ne.exit().select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",0).attr("x2",0).on("end",((t,e,r)=>{select(r[e].parentElement).remove()}));const ae=Z.selectAll(".model.sd").data((t=>this.sds?[t]:[])),se=ae.enter().append("g").attr("class",(t=>`model sd ${t.outcome}`));se.append("line").classed("indicator",!0).attr("marker-start","url(#model-sd-cap)").attr("marker-end","url(#model-sd-cap)");se.merge(ae).select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",(t=>f(t.model.meanRT-t.model.sdRT/2))).attr("x2",(t=>f(t.model.meanRT+t.model.sdRT/2))).attr("y1",(t=>t.densityScale(5))).attr("y2",(t=>t.densityScale(5))),ae.exit().remove();const oe=Z.selectAll(".data.sd").data((t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t])),le=oe.enter().append("g").attr("class",(t=>`data sd ${t.outcome}`));le.append("line").classed("indicator",!0).attr("marker-start","url(#data-sd-cap)").attr("marker-end","url(#data-sd-cap)").attr("y1",(t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem)).attr("y2",(t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem));le.merge(oe).select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",(t=>f(t.data.meanRT-t.data.sdRT/2))).attr("x2",(t=>f(t.data.meanRT+t.data.sdRT/2))).attr("y1",(t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem)).attr("y2",(t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem)),oe.exit().select(".indicator").transition().duration(this.drag?0:m).ease(cubicOut).attr("x1",0).attr("x2",0).on("end",((t,e,r)=>{select(r[e].parentElement).remove()})),this.firstUpdate=!1}}customElements.define("ddm-model",DDMModel);class RDK2AFCTask extends(DecidablesMixinResizeable(AccumulableElement)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=n-(i+a),l=n-(s+.25*this.rem);this.xScale=linear().domain([-1,1]).range([0,l]),this.yScale=linear().domain([1,-1]).range([0,o]);const c=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),d=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),d.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const h=u.append("g").classed("plot",!0),p=d.select(".plot").attr("transform",`translate(${s}, ${i})`),g=h.append("g").classed("underlayer",!0),b=p.select(".underlayer");g.append("circle").classed("background",!0),b.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),h.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");p.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",((t,e)=>e===this.COHERENT)).classed("random",((t,e)=>e===this.RANDOM));const y=h.append("g").classed("overlayer",!0),m=p.select(".overlayer");y.append("circle").classed("outline",!0),m.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=select(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data((t=>t));t.exit().remove();select(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();select(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(i||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());s.x=this.xScale(n*Math.cos(r)),s.y=this.yScale(n*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(n/1e3)*Math.cos(e),s.dy=this.speed*(n/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=select(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=select(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data((t=>t));o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",(t=>t.x)).attr("cy",(t=>t.y)),o.exit().remove();const l=select(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}customElements.define("rdk-2afc-task",RDK2AFCTask);class DDMEquation extends AccumulableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,i$3`
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
      `]}}class DDMEquationAZV2PC extends DDMEquation{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},accuracy:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.alignState()}alignState(){this.accuracy=DDMMath.azv2pC(this.a,this.z,this.v)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azv2pc-change",{detail:{a:this.a,z:this.z,v:this.v,accuracy:this.accuracy},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;this.numeric?(t=x$1`<decidables-spinner class="a bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.a.MIN}
          max=${DDMMath.a.MAX}
          step=${DDMMath.a.STEP}
          .value=${this.a}
          @input=${this.aInput.bind(this)}
        >
          <var class="math-var">a</var>
        </decidables-spinner>`,e=x$1`<decidables-spinner class="z bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.z.MIN}
          max=${DDMMath.z.MAX}
          step=${DDMMath.z.STEP}
          .value=${this.z}
          @input=${this.zInput.bind(this)}
        >
          <var class="math-var">z</var>
        </decidables-spinner>`,r=x$1`<decidables-spinner class="v bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.v.MIN}
          max=${DDMMath.v.MAX}
          step=${DDMMath.v.STEP}
          .value=${this.v}
          @input=${this.vInput.bind(this)}
        >
          <var class="math-var">v</var>
        </decidables-spinner>`,n=x$1`<decidables-spinner class="s bottom"
          disabled
          .value=${DDMMath.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`,i=x$1`<decidables-spinner class="accuracy bottom"
          disabled
          .value=${+this.accuracy.toFixed(2)}
        >
          <var>Accuracy</var>
        </decidables-spinner>`):(t=x$1`<var class="math-var a">a</var>`,e=x$1`<var class="math-var z">z</var>`,r=x$1`<var class="math-var v">v</var>`,n=x$1`<var class="math-var s">s</var>`,i=x$1`<var class="accuracy">Accuracy</var>`);const a=x$1`
      <tr>
        <td rowspan="2">
          ${i}<span class="equals">=</span>
        </td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${n}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${e} / ${n}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
        </td>
      </tr>
      <tr>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${n}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${a}
          </tbody>
        </table>
      </div>`}}customElements.define("ddm-equation-azv2pc",DDMEquationAZV2PC);class DDMEquationAZVT02M extends DDMEquation{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0},meanRT:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.alignState()}alignState(){this.meanRT=DDMMath.azvt02m(this.a,this.z,this.v,this.t0)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azvt02m-change",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0,meanRT:this.meanRT},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}t0Input(t){this.t0=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i,a;this.numeric?(t=x$1`<decidables-spinner class="a bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.a.MIN}
          max=${DDMMath.a.MAX}
          step=${DDMMath.a.STEP}
          .value=${this.a}
          @input=${this.aInput.bind(this)}
        >
          <var class="math-var">a</var>
        </decidables-spinner>`,e=x$1`<decidables-spinner class="z bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.z.MIN}
          max=${DDMMath.z.MAX}
          step=${DDMMath.z.STEP}
          .value=${this.z}
          @input=${this.zInput.bind(this)}
        >
          <var class="math-var">z</var>
        </decidables-spinner>`,r=x$1`<decidables-spinner class="v bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.v.MIN}
          max=${DDMMath.v.MAX}
          step=${DDMMath.v.STEP}
          .value=${this.v}
          @input=${this.vInput.bind(this)}
        >
          <var class="math-var">v</var>
        </decidables-spinner>`,n=x$1`<decidables-spinner class="t0 bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.t0.MIN}
          max=${DDMMath.t0.MAX}
          step=${DDMMath.t0.STEP}
          .value=${this.t0}
          @input=${this.t0Input.bind(this)}
        >
          <var class="math-var">t<sub>0</sub></var>
        </decidables-spinner>`,i=x$1`<decidables-spinner class="s bottom"
          disabled
          .value=${DDMMath.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`,a=x$1`<decidables-spinner class="mean-rt bottom"
          disabled
          .value=${+this.meanRT.toFixed(0)}
        >
          <var>Mean RT</var>
        </decidables-spinner>`):(t=x$1`<var class="math-var a">a</var>`,e=x$1`<var class="math-var z">z</var>`,r=x$1`<var class="math-var v">v</var>`,n=x$1`<var class="math-var t0">t<sub>0</sub></var>`,i=x$1`<var class="math-var s">s</var>`,a=x$1`<var class="mean-rt">Mean RT</var>`);const s=x$1`
      <tr>
        <td rowspan="2">
          ${a}<span class="equals">=</span>
          ${n}
          <span class="minus">−</span>
        </td>
        <td class="underline">
          ${e}
        </td>
        <td rowspan="2">
          <span class="plus">+</span>
        </td>
        <td class="underline">
          ${t}
        </td>
        <td rowspan="2">&nbsp;</td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${e} / ${i}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          1
        </td>
      </tr>
      <tr>
        <td>
          ${r}
        </td>
        <td>
          ${r}
        </td>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${i}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${s}
          </tbody>
        </table>
      </div>`}}customElements.define("ddm-equation-azvt02m",DDMEquationAZVT02M);class DDMExample extends AccumulableElement{static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`}}customElements.define("ddm-example",DDMExample);class DDMExampleHuman extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:!1,type:Number,reflect:!1},z:{attribute:!1,type:Number,reflect:!1},v:{attribute:!1,type:Number,reflect:!1},t0:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.accumulableResponse=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.ddmFit=null,this.data=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.ddmFit=this.querySelector("ddm-fit"),this.ddmModel.clear(),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",(t=>{this.trials=t.detail.trials})),this.accumulableControl.addEventListener("accumulable-control-duration",(t=>{this.duration=t.detail.duration})),this.accumulableControl.addEventListener("accumulable-control-coherence",(t=>{this.coherence=t.detail.coherence})),this.accumulableControl.addEventListener("accumulable-control-color",(t=>{this.color=t.detail.color})),this.accumulableControl.addEventListener("accumulable-control-run",(()=>{this.rdkTask&&(this.rdkTask.running=!0)})),this.accumulableControl.addEventListener("accumulable-control-pause",(()=>{this.rdkTask&&(this.rdkTask.running=!1)})),this.accumulableControl.addEventListener("accumulable-control-reset",(()=>{this.rdkTask&&this.rdkTask.reset(),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable&&(this.accumulableTable.correctCount=NaN,this.accumulableTable.errorCount=NaN,this.accumulableTable.nrCount=NaN,this.accumulableTable.accuracy=NaN,this.accumulableTable.correctMeanRT=NaN,this.accumulableTable.errorMeanRT=NaN,this.accumulableTable.meanRT=NaN,this.accumulableTable.correctSDRT=NaN,this.accumulableTable.errorSDRT=NaN,this.accumulableTable.sdRT=NaN),this.ddmModel&&this.ddmModel.clear(),this.ddmFit&&this.ddmFit.clear()}))),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",(t=>{this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial)})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",(()=>{this.accumulableResponse&&this.accumulableResponse.stop()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",(()=>{this.accumulableControl&&this.accumulableControl.complete()})),this.accumulableResponse&&this.accumulableResponse.addEventListener("accumulable-response",(t=>{this.data=t.detail.data,this.ddmModel&&this.ddmModel.trial({index:t.detail.trial,rt:t.detail.rt,outcome:t.detail.outcome}),this.ddmFit&&this.ddmFit.set({accuracy:t.detail.data.accuracy,correctMeanRT:t.detail.data.correctMeanRT,errorMeanRT:t.detail.data.errorMeanRT,meanRT:t.detail.data.meanRT,correctSDRT:t.detail.data.correctSDRT,errorSDRT:t.detail.data.errorSDRT,sdRT:t.detail.data.sdRT}),this.requestUpdate()})),this.ddmFit&&this.ddmFit.addEventListener("ddm-fit-update",(t=>{this.a=t.detail.a,this.z=.5,this.v=t.detail.v,this.t0=t.detail.t0}))}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}}customElements.define("ddm-example-human",DDMExampleHuman);class DDMExampleInteractive extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-resample",(()=>{this.ddmModel?.resample(),this.requestUpdate()})),this.accumulableControl.addEventListener("accumulable-control-trials",(t=>{this.trials=t.detail.trials})),this.accumulableControl.addEventListener("accumulable-control-color",(t=>{this.color=t.detail.color}))),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",(t=>{this.a=t.detail.a})),this.ddmParameters.addEventListener("ddm-parameters-z",(t=>{this.z=t.detail.z})),this.ddmParameters.addEventListener("ddm-parameters-v",(t=>{this.v=t.detail.v})),this.ddmParameters.addEventListener("ddm-parameters-t0",(t=>{this.t0=t.detail.t0}))),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",(t=>{this.a=t.detail.a})),this.ddmModel.addEventListener("ddm-model-z",(t=>{this.z=t.detail.z})),this.ddmModel.addEventListener("ddm-model-v",(t=>{this.v=t.detail.v})),this.ddmModel.addEventListener("ddm-model-t0",(t=>{this.t0=t.detail.t0})),this.ddmModel.addEventListener("ddm-model-output",(t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}))),this.requestUpdate()}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trials,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0)}}customElements.define("ddm-example-interactive",DDMExampleInteractive);class DDMExampleModel extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.ddmParameters=null,this.ddmModel=null,this.accumulableResponse=null,this.accumulableTable=null,this.trialCount=0,this.signals=["left","right"],this.signal=void 0,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",(t=>{this.trials=t.detail.trials})),this.accumulableControl.addEventListener("accumulable-control-duration",(t=>{this.duration=t.detail.duration})),this.accumulableControl.addEventListener("accumulable-control-color",(t=>{this.color=t.detail.color})),this.accumulableControl.addEventListener("accumulable-control-run",(()=>{this.rdkTask&&(this.rdkTask.running=!0),this.ddmModel&&this.ddmModel.resumeTrial()})),this.accumulableControl.addEventListener("accumulable-control-pause",(()=>{this.rdkTask&&(this.rdkTask.running=!1),this.ddmModel&&this.ddmModel.pauseTrial()})),this.accumulableControl.addEventListener("accumulable-control-reset",(()=>{this.trialCount=0,this.signal=void 0,this.rdkTask&&this.rdkTask.reset(),this.ddmModel&&(this.ddmModel.trials=this.trialCount),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable}))),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",(t=>{this.signal=t.detail.signal,this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial),this.ddmModel&&(this.trialCount+=1,this.ddmModel.trial())})),this.rdkTask.addEventListener("rdk-trial-end",(()=>{this.signal=void 0,this.accumulableResponse&&this.accumulableResponse.stop()})),this.rdkTask.addEventListener("rdk-block-end",(()=>{this.accumulableControl&&this.accumulableControl.complete()}))),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",(t=>{this.a=t.detail.a})),this.ddmParameters.addEventListener("ddm-parameters-z",(t=>{this.z=t.detail.z})),this.ddmParameters.addEventListener("ddm-parameters-v",(t=>{this.v=t.detail.v})),this.ddmParameters.addEventListener("ddm-parameters-t0",(t=>{this.t0=t.detail.t0}))),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",(t=>{this.a=t.detail.a})),this.ddmModel.addEventListener("ddm-model-z",(t=>{this.z=t.detail.z})),this.ddmModel.addEventListener("ddm-model-v",(t=>{this.v=t.detail.v})),this.ddmModel.addEventListener("ddm-model-t0",(t=>{this.t0=t.detail.t0})),this.ddmModel.addEventListener("ddm-model-output",(t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.ddmModel.addEventListener("accumulable-response",(t=>{if(this.accumulableResponse){const e="correct"===t.detail.outcome?this.signal:"left"===this.signal?"right":"left";this.accumulableResponse.responded(e)}this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}))),this.requestUpdate()}update(t){super.update(t),this.trialCount>this.trials&&(this.trialCount=this.trials),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trialCount,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}}customElements.define("ddm-example-model",DDMExampleModel);
//# sourceMappingURL=page.js.map