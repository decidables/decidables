var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var check=function(t){return t&&t.Math===Math&&t},global$n=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||function(){return this}()||Function("return this")(),objectGetOwnPropertyDescriptor={},fails$m=function(t){try{return!!t()}catch(t){return!0}},fails$l=fails$m,descriptors=!fails$l((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),fails$k=fails$m,functionBindNative=!fails$k((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),NATIVE_BIND$3=functionBindNative,call$c=Function.prototype.call,functionCall=NATIVE_BIND$3?call$c.bind(call$c):function(){return call$c.apply(call$c,arguments)},objectPropertyIsEnumerable={},$propertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor$2=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$2&&!$propertyIsEnumerable.call({1:2},1);objectPropertyIsEnumerable.f=NASHORN_BUG?function(t){var e=getOwnPropertyDescriptor$2(this,t);return!!e&&e.enumerable}:$propertyIsEnumerable;var match,version,createPropertyDescriptor$5=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},NATIVE_BIND$2=functionBindNative,FunctionPrototype$2=Function.prototype,call$b=FunctionPrototype$2.call,uncurryThisWithBind=NATIVE_BIND$2&&FunctionPrototype$2.bind.bind(call$b,call$b),functionUncurryThis=NATIVE_BIND$2?uncurryThisWithBind:function(t){return function(){return call$b.apply(t,arguments)}},uncurryThis$t=functionUncurryThis,toString$9=uncurryThis$t({}.toString),stringSlice$1=uncurryThis$t("".slice),classofRaw$2=function(t){return stringSlice$1(toString$9(t),8,-1)},uncurryThis$s=functionUncurryThis,fails$j=fails$m,classof$a=classofRaw$2,$Object$4=Object,split=uncurryThis$s("".split),indexedObject=fails$j((function(){return!$Object$4("z").propertyIsEnumerable(0)}))?function(t){return"String"===classof$a(t)?split(t,""):$Object$4(t)}:$Object$4,isNullOrUndefined$4=function(t){return null==t},isNullOrUndefined$3=isNullOrUndefined$4,$TypeError$h=TypeError,requireObjectCoercible$7=function(t){if(isNullOrUndefined$3(t))throw new $TypeError$h("Can't call method on "+t);return t},IndexedObject=indexedObject,requireObjectCoercible$6=requireObjectCoercible$7,toIndexedObject$8=function(t){return IndexedObject(requireObjectCoercible$6(t))},documentAll="object"==typeof document&&document.all,isCallable$i=void 0===documentAll&&void 0!==documentAll?function(t){return"function"==typeof t||t===documentAll}:function(t){return"function"==typeof t},isCallable$h=isCallable$i,isObject$a=function(t){return"object"==typeof t?null!==t:isCallable$h(t)},global$m=global$n,isCallable$g=isCallable$i,aFunction=function(t){return isCallable$g(t)?t:void 0},getBuiltIn$a=function(t,e){return arguments.length<2?aFunction(global$m[t]):global$m[t]&&global$m[t][e]},uncurryThis$r=functionUncurryThis,objectIsPrototypeOf=uncurryThis$r({}.isPrototypeOf),engineUserAgent="undefined"!=typeof navigator&&String(navigator.userAgent)||"",global$l=global$n,userAgent$1=engineUserAgent,process$1=global$l.process,Deno$1=global$l.Deno,versions=process$1&&process$1.versions||Deno$1&&Deno$1.version,v8=versions&&versions.v8;v8&&(version=(match=v8.split("."))[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&userAgent$1&&(!(match=userAgent$1.match(/Edge\/(\d+)/))||match[1]>=74)&&(match=userAgent$1.match(/Chrome\/(\d+)/))&&(version=+match[1]);var engineV8Version=version,V8_VERSION=engineV8Version,fails$i=fails$m,global$k=global$n,$String$5=global$k.String,symbolConstructorDetection=!!Object.getOwnPropertySymbols&&!fails$i((function(){var t=Symbol("symbol detection");return!$String$5(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V8_VERSION&&V8_VERSION<41})),NATIVE_SYMBOL$1=symbolConstructorDetection,useSymbolAsUid=NATIVE_SYMBOL$1&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,getBuiltIn$9=getBuiltIn$a,isCallable$f=isCallable$i,isPrototypeOf$4=objectIsPrototypeOf,USE_SYMBOL_AS_UID$1=useSymbolAsUid,$Object$3=Object,isSymbol$3=USE_SYMBOL_AS_UID$1?function(t){return"symbol"==typeof t}:function(t){var e=getBuiltIn$9("Symbol");return isCallable$f(e)&&isPrototypeOf$4(e.prototype,$Object$3(t))},$String$4=String,tryToString$5=function(t){try{return $String$4(t)}catch(t){return"Object"}},isCallable$e=isCallable$i,tryToString$4=tryToString$5,$TypeError$g=TypeError,aCallable$a=function(t){if(isCallable$e(t))return t;throw new $TypeError$g(tryToString$4(t)+" is not a function")},aCallable$9=aCallable$a,isNullOrUndefined$2=isNullOrUndefined$4,getMethod$3=function(t,e){var r=t[e];return isNullOrUndefined$2(r)?void 0:aCallable$9(r)},call$a=functionCall,isCallable$d=isCallable$i,isObject$9=isObject$a,$TypeError$f=TypeError,ordinaryToPrimitive$1=function(t,e){var r,n;if("string"===e&&isCallable$d(r=t.toString)&&!isObject$9(n=call$a(r,t)))return n;if(isCallable$d(r=t.valueOf)&&!isObject$9(n=call$a(r,t)))return n;if("string"!==e&&isCallable$d(r=t.toString)&&!isObject$9(n=call$a(r,t)))return n;throw new $TypeError$f("Can't convert object to primitive value")},sharedStore={exports:{}},isPure=!1,global$j=global$n,defineProperty$4=Object.defineProperty,defineGlobalProperty$3=function(t,e){try{defineProperty$4(global$j,t,{value:e,configurable:!0,writable:!0})}catch(r){global$j[t]=e}return e},globalThis$1=global$n,defineGlobalProperty$2=defineGlobalProperty$3,SHARED="__core-js_shared__",store$3=sharedStore.exports=globalThis$1[SHARED]||defineGlobalProperty$2(SHARED,{});(store$3.versions||(store$3.versions=[])).push({version:"3.37.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"});var sharedStoreExports=sharedStore.exports,store$2=sharedStoreExports,shared$3=function(t,e){return store$2[t]||(store$2[t]=e||{})},requireObjectCoercible$5=requireObjectCoercible$7,$Object$2=Object,toObject$4=function(t){return $Object$2(requireObjectCoercible$5(t))},uncurryThis$q=functionUncurryThis,toObject$3=toObject$4,hasOwnProperty=uncurryThis$q({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(t,e){return hasOwnProperty(toObject$3(t),e)},uncurryThis$p=functionUncurryThis,id$1=0,postfix=Math.random(),toString$8=uncurryThis$p(1..toString),uid$4=function(t){return"Symbol("+(void 0===t?"":t)+")_"+toString$8(++id$1+postfix,36)},global$i=global$n,shared$2=shared$3,hasOwn$c=hasOwnProperty_1,uid$3=uid$4,NATIVE_SYMBOL=symbolConstructorDetection,USE_SYMBOL_AS_UID=useSymbolAsUid,Symbol$1=global$i.Symbol,WellKnownSymbolsStore=shared$2("wks"),createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol$1.for||Symbol$1:Symbol$1&&Symbol$1.withoutSetter||uid$3,wellKnownSymbol$8=function(t){return hasOwn$c(WellKnownSymbolsStore,t)||(WellKnownSymbolsStore[t]=NATIVE_SYMBOL&&hasOwn$c(Symbol$1,t)?Symbol$1[t]:createWellKnownSymbol("Symbol."+t)),WellKnownSymbolsStore[t]},call$9=functionCall,isObject$8=isObject$a,isSymbol$2=isSymbol$3,getMethod$2=getMethod$3,ordinaryToPrimitive=ordinaryToPrimitive$1,wellKnownSymbol$7=wellKnownSymbol$8,$TypeError$e=TypeError,TO_PRIMITIVE=wellKnownSymbol$7("toPrimitive"),toPrimitive$2=function(t,e){if(!isObject$8(t)||isSymbol$2(t))return t;var r,n=getMethod$2(t,TO_PRIMITIVE);if(n){if(void 0===e&&(e="default"),r=call$9(n,t,e),!isObject$8(r)||isSymbol$2(r))return r;throw new $TypeError$e("Can't convert object to primitive value")}return void 0===e&&(e="number"),ordinaryToPrimitive(t,e)},toPrimitive$1=toPrimitive$2,isSymbol$1=isSymbol$3,toPropertyKey$3=function(t){var e=toPrimitive$1(t,"string");return isSymbol$1(e)?e:e+""},global$h=global$n,isObject$7=isObject$a,document$1=global$h.document,EXISTS$1=isObject$7(document$1)&&isObject$7(document$1.createElement),documentCreateElement$1=function(t){return EXISTS$1?document$1.createElement(t):{}},DESCRIPTORS$f=descriptors,fails$h=fails$m,createElement$1=documentCreateElement$1,ie8DomDefine=!DESCRIPTORS$f&&!fails$h((function(){return 7!==Object.defineProperty(createElement$1("div"),"a",{get:function(){return 7}}).a})),DESCRIPTORS$e=descriptors,call$8=functionCall,propertyIsEnumerableModule=objectPropertyIsEnumerable,createPropertyDescriptor$4=createPropertyDescriptor$5,toIndexedObject$7=toIndexedObject$8,toPropertyKey$2=toPropertyKey$3,hasOwn$b=hasOwnProperty_1,IE8_DOM_DEFINE$1=ie8DomDefine,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor;objectGetOwnPropertyDescriptor.f=DESCRIPTORS$e?$getOwnPropertyDescriptor$1:function(t,e){if(t=toIndexedObject$7(t),e=toPropertyKey$2(e),IE8_DOM_DEFINE$1)try{return $getOwnPropertyDescriptor$1(t,e)}catch(t){}if(hasOwn$b(t,e))return createPropertyDescriptor$4(!call$8(propertyIsEnumerableModule.f,t,e),t[e])};var objectDefineProperty={},DESCRIPTORS$d=descriptors,fails$g=fails$m,v8PrototypeDefineBug=DESCRIPTORS$d&&fails$g((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),isObject$6=isObject$a,$String$3=String,$TypeError$d=TypeError,anObject$a=function(t){if(isObject$6(t))return t;throw new $TypeError$d($String$3(t)+" is not an object")},DESCRIPTORS$c=descriptors,IE8_DOM_DEFINE=ie8DomDefine,V8_PROTOTYPE_DEFINE_BUG$1=v8PrototypeDefineBug,anObject$9=anObject$a,toPropertyKey$1=toPropertyKey$3,$TypeError$c=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable";objectDefineProperty.f=DESCRIPTORS$c?V8_PROTOTYPE_DEFINE_BUG$1?function(t,e,r){if(anObject$9(t),e=toPropertyKey$1(e),anObject$9(r),"function"==typeof t&&"prototype"===e&&"value"in r&&WRITABLE in r&&!r[WRITABLE]){var n=$getOwnPropertyDescriptor(t,e);n&&n[WRITABLE]&&(t[e]=r.value,r={configurable:CONFIGURABLE$1 in r?r[CONFIGURABLE$1]:n[CONFIGURABLE$1],enumerable:ENUMERABLE in r?r[ENUMERABLE]:n[ENUMERABLE],writable:!1})}return $defineProperty(t,e,r)}:$defineProperty:function(t,e,r){if(anObject$9(t),e=toPropertyKey$1(e),anObject$9(r),IE8_DOM_DEFINE)try{return $defineProperty(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new $TypeError$c("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var DESCRIPTORS$b=descriptors,definePropertyModule$4=objectDefineProperty,createPropertyDescriptor$3=createPropertyDescriptor$5,createNonEnumerableProperty$4=DESCRIPTORS$b?function(t,e,r){return definePropertyModule$4.f(t,e,createPropertyDescriptor$3(1,r))}:function(t,e,r){return t[e]=r,t},makeBuiltIn$3={exports:{}},DESCRIPTORS$a=descriptors,hasOwn$a=hasOwnProperty_1,FunctionPrototype$1=Function.prototype,getDescriptor=DESCRIPTORS$a&&Object.getOwnPropertyDescriptor,EXISTS=hasOwn$a(FunctionPrototype$1,"name"),PROPER=EXISTS&&"something"===function(){}.name,CONFIGURABLE=EXISTS&&(!DESCRIPTORS$a||DESCRIPTORS$a&&getDescriptor(FunctionPrototype$1,"name").configurable),functionName={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE},uncurryThis$o=functionUncurryThis,isCallable$c=isCallable$i,store$1=sharedStoreExports,functionToString=uncurryThis$o(Function.toString);isCallable$c(store$1.inspectSource)||(store$1.inspectSource=function(t){return functionToString(t)});var set$4,get$3,has$7,inspectSource$2=store$1.inspectSource,global$g=global$n,isCallable$b=isCallable$i,WeakMap$2=global$g.WeakMap,weakMapBasicDetection=isCallable$b(WeakMap$2)&&/native code/.test(String(WeakMap$2)),shared$1=shared$3,uid$2=uid$4,keys$1=shared$1("keys"),sharedKey$3=function(t){return keys$1[t]||(keys$1[t]=uid$2(t))},hiddenKeys$4={},NATIVE_WEAK_MAP=weakMapBasicDetection,global$f=global$n,isObject$5=isObject$a,createNonEnumerableProperty$3=createNonEnumerableProperty$4,hasOwn$9=hasOwnProperty_1,shared=sharedStoreExports,sharedKey$2=sharedKey$3,hiddenKeys$3=hiddenKeys$4,OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$4=global$f.TypeError,WeakMap$1=global$f.WeakMap,enforce=function(t){return has$7(t)?get$3(t):set$4(t,{})},getterFor=function(t){return function(e){var r;if(!isObject$5(e)||(r=get$3(e)).type!==t)throw new TypeError$4("Incompatible receiver, "+t+" required");return r}};if(NATIVE_WEAK_MAP||shared.state){var store=shared.state||(shared.state=new WeakMap$1);store.get=store.get,store.has=store.has,store.set=store.set,set$4=function(t,e){if(store.has(t))throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);return e.facade=t,store.set(t,e),e},get$3=function(t){return store.get(t)||{}},has$7=function(t){return store.has(t)}}else{var STATE=sharedKey$2("state");hiddenKeys$3[STATE]=!0,set$4=function(t,e){if(hasOwn$9(t,STATE))throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);return e.facade=t,createNonEnumerableProperty$3(t,STATE,e),e},get$3=function(t){return hasOwn$9(t,STATE)?t[STATE]:{}},has$7=function(t){return hasOwn$9(t,STATE)}}var internalState={set:set$4,get:get$3,has:has$7,enforce:enforce,getterFor:getterFor},uncurryThis$n=functionUncurryThis,fails$f=fails$m,isCallable$a=isCallable$i,hasOwn$8=hasOwnProperty_1,DESCRIPTORS$9=descriptors,CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,inspectSource$1=inspectSource$2,InternalStateModule$1=internalState,enforceInternalState$1=InternalStateModule$1.enforce,getInternalState$1=InternalStateModule$1.get,$String$2=String,defineProperty$3=Object.defineProperty,stringSlice=uncurryThis$n("".slice),replace$1=uncurryThis$n("".replace),join$1=uncurryThis$n([].join),CONFIGURABLE_LENGTH=DESCRIPTORS$9&&!fails$f((function(){return 8!==defineProperty$3((function(){}),"length",{value:8}).length})),TEMPLATE=String(String).split("String"),makeBuiltIn$2=makeBuiltIn$3.exports=function(t,e,r){"Symbol("===stringSlice($String$2(e),0,7)&&(e="["+replace$1($String$2(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!hasOwn$8(t,"name")||CONFIGURABLE_FUNCTION_NAME&&t.name!==e)&&(DESCRIPTORS$9?defineProperty$3(t,"name",{value:e,configurable:!0}):t.name=e),CONFIGURABLE_LENGTH&&r&&hasOwn$8(r,"arity")&&t.length!==r.arity&&defineProperty$3(t,"length",{value:r.arity});try{r&&hasOwn$8(r,"constructor")&&r.constructor?DESCRIPTORS$9&&defineProperty$3(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=enforceInternalState$1(t);return hasOwn$8(n,"source")||(n.source=join$1(TEMPLATE,"string"==typeof e?e:"")),t};Function.prototype.toString=makeBuiltIn$2((function(){return isCallable$a(this)&&getInternalState$1(this).source||inspectSource$1(this)}),"toString");var makeBuiltInExports=makeBuiltIn$3.exports,isCallable$9=isCallable$i,definePropertyModule$3=objectDefineProperty,makeBuiltIn$1=makeBuiltInExports,defineGlobalProperty$1=defineGlobalProperty$3,defineBuiltIn$4=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(isCallable$9(r)&&makeBuiltIn$1(r,a,n),n.global)i?t[e]=r:defineGlobalProperty$1(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:definePropertyModule$3.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},objectGetOwnPropertyNames={},ceil=Math.ceil,floor=Math.floor,mathTrunc=Math.trunc||function(t){var e=+t;return(e>0?floor:ceil)(e)},trunc=mathTrunc,toIntegerOrInfinity$7=function(t){var e=+t;return e!=e||0===e?0:trunc(e)},toIntegerOrInfinity$6=toIntegerOrInfinity$7,max$3=Math.max,min$4=Math.min,toAbsoluteIndex$2=function(t,e){var r=toIntegerOrInfinity$6(t);return r<0?max$3(r+e,0):min$4(r,e)},toIntegerOrInfinity$5=toIntegerOrInfinity$7,min$3=Math.min,toLength$2=function(t){var e=toIntegerOrInfinity$5(t);return e>0?min$3(e,9007199254740991):0},toLength$1=toLength$2,lengthOfArrayLike$9=function(t){return toLength$1(t.length)},toIndexedObject$6=toIndexedObject$8,toAbsoluteIndex$1=toAbsoluteIndex$2,lengthOfArrayLike$8=lengthOfArrayLike$9,createMethod=function(t){return function(e,r,n){var i=toIndexedObject$6(e),a=lengthOfArrayLike$8(i);if(0===a)return!t&&-1;var o,s=toAbsoluteIndex$1(n,a);if(t&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===r)return t||s||0;return!t&&-1}},arrayIncludes={includes:createMethod(!0),indexOf:createMethod(!1)},uncurryThis$m=functionUncurryThis,hasOwn$7=hasOwnProperty_1,toIndexedObject$5=toIndexedObject$8,indexOf=arrayIncludes.indexOf,hiddenKeys$2=hiddenKeys$4,push$4=uncurryThis$m([].push),objectKeysInternal=function(t,e){var r,n=toIndexedObject$5(t),i=0,a=[];for(r in n)!hasOwn$7(hiddenKeys$2,r)&&hasOwn$7(n,r)&&push$4(a,r);for(;e.length>i;)hasOwn$7(n,r=e[i++])&&(~indexOf(a,r)||push$4(a,r));return a},enumBugKeys$3=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],internalObjectKeys$1=objectKeysInternal,enumBugKeys$2=enumBugKeys$3,hiddenKeys$1=enumBugKeys$2.concat("length","prototype");objectGetOwnPropertyNames.f=Object.getOwnPropertyNames||function(t){return internalObjectKeys$1(t,hiddenKeys$1)};var objectGetOwnPropertySymbols={};objectGetOwnPropertySymbols.f=Object.getOwnPropertySymbols;var getBuiltIn$8=getBuiltIn$a,uncurryThis$l=functionUncurryThis,getOwnPropertyNamesModule=objectGetOwnPropertyNames,getOwnPropertySymbolsModule=objectGetOwnPropertySymbols,anObject$8=anObject$a,concat=uncurryThis$l([].concat),ownKeys$1=getBuiltIn$8("Reflect","ownKeys")||function(t){var e=getOwnPropertyNamesModule.f(anObject$8(t)),r=getOwnPropertySymbolsModule.f;return r?concat(e,r(t)):e},hasOwn$6=hasOwnProperty_1,ownKeys=ownKeys$1,getOwnPropertyDescriptorModule=objectGetOwnPropertyDescriptor,definePropertyModule$2=objectDefineProperty,copyConstructorProperties$1=function(t,e,r){for(var n=ownKeys(e),i=definePropertyModule$2.f,a=getOwnPropertyDescriptorModule.f,o=0;o<n.length;o++){var s=n[o];hasOwn$6(t,s)||r&&hasOwn$6(r,s)||i(t,s,a(e,s))}},fails$e=fails$m,isCallable$8=isCallable$i,replacement=/#|\.prototype\./,isForced$1=function(t,e){var r=data[normalize$1(t)];return r===POLYFILL||r!==NATIVE&&(isCallable$8(e)?fails$e(e):!!e)},normalize$1=isForced$1.normalize=function(t){return String(t).replace(replacement,".").toLowerCase()},data=isForced$1.data={},NATIVE=isForced$1.NATIVE="N",POLYFILL=isForced$1.POLYFILL="P",isForced_1=isForced$1,global$e=global$n,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,createNonEnumerableProperty$2=createNonEnumerableProperty$4,defineBuiltIn$3=defineBuiltIn$4,defineGlobalProperty=defineGlobalProperty$3,copyConstructorProperties=copyConstructorProperties$1,isForced=isForced_1,_export=function(t,e){var r,n,i,a,o,s=t.target,l=t.global,c=t.stat;if(r=l?global$e:c?global$e[s]||defineGlobalProperty(s,{}):global$e[s]&&global$e[s].prototype)for(n in e){if(a=e[n],i=t.dontCallGetSet?(o=getOwnPropertyDescriptor$1(r,n))&&o.value:r[n],!isForced(l?n:s+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;copyConstructorProperties(a,i)}(t.sham||i&&i.sham)&&createNonEnumerableProperty$2(a,"sham",!0),defineBuiltIn$3(r,n,a,t)}},classof$9=classofRaw$2,isArray$1=Array.isArray||function(t){return"Array"===classof$9(t)},DESCRIPTORS$8=descriptors,isArray=isArray$1,$TypeError$b=TypeError,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,SILENT_ON_NON_WRITABLE_LENGTH_SET=DESCRIPTORS$8&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}(),arraySetLength=SILENT_ON_NON_WRITABLE_LENGTH_SET?function(t,e){if(isArray(t)&&!getOwnPropertyDescriptor(t,"length").writable)throw new $TypeError$b("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},$TypeError$a=TypeError,MAX_SAFE_INTEGER=9007199254740991,doesNotExceedSafeInteger$3=function(t){if(t>MAX_SAFE_INTEGER)throw $TypeError$a("Maximum allowed index exceeded");return t},$$q=_export,toObject$2=toObject$4,lengthOfArrayLike$7=lengthOfArrayLike$9,setArrayLength$1=arraySetLength,doesNotExceedSafeInteger$2=doesNotExceedSafeInteger$3,fails$d=fails$m,INCORRECT_TO_LENGTH=fails$d((function(){return 4294967297!==[].push.call({length:4294967296},1)})),properErrorOnNonWritableLength$1=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},FORCED$2=INCORRECT_TO_LENGTH||!properErrorOnNonWritableLength$1();$$q({target:"Array",proto:!0,arity:1,forced:FORCED$2},{push:function(t){var e=toObject$2(this),r=lengthOfArrayLike$7(e),n=arguments.length;doesNotExceedSafeInteger$2(r+n);for(var i=0;i<n;i++)e[r]=arguments[i],r++;return setArrayLength$1(e,r),r}});var lengthOfArrayLike$6=lengthOfArrayLike$9,arrayToReversed$2=function(t,e){for(var r=lengthOfArrayLike$6(t),n=new e(r),i=0;i<r;i++)n[i]=t[r-i-1];return n},objectDefineProperties={},internalObjectKeys=objectKeysInternal,enumBugKeys$1=enumBugKeys$3,objectKeys$2=Object.keys||function(t){return internalObjectKeys(t,enumBugKeys$1)},DESCRIPTORS$7=descriptors,V8_PROTOTYPE_DEFINE_BUG=v8PrototypeDefineBug,definePropertyModule$1=objectDefineProperty,anObject$7=anObject$a,toIndexedObject$4=toIndexedObject$8,objectKeys$1=objectKeys$2;objectDefineProperties.f=DESCRIPTORS$7&&!V8_PROTOTYPE_DEFINE_BUG?Object.defineProperties:function(t,e){anObject$7(t);for(var r,n=toIndexedObject$4(e),i=objectKeys$1(e),a=i.length,o=0;a>o;)definePropertyModule$1.f(t,r=i[o++],n[r]);return t};var activeXDocument,getBuiltIn$7=getBuiltIn$a,html$2=getBuiltIn$7("document","documentElement"),anObject$6=anObject$a,definePropertiesModule=objectDefineProperties,enumBugKeys=enumBugKeys$3,hiddenKeys=hiddenKeys$4,html$1=html$2,documentCreateElement=documentCreateElement$1,sharedKey$1=sharedKey$3,GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO$1=sharedKey$1("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return LT+SCRIPT+GT+t+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(t){t.write(scriptTag("")),t.close();var e=t.parentWindow.Object;return t=null,e},NullProtoObjectViaIFrame=function(){var t,e=documentCreateElement("iframe"),r="java"+SCRIPT+":";return e.style.display="none",html$1.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F},NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(t){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var t=enumBugKeys.length;t--;)delete NullProtoObject[PROTOTYPE][enumBugKeys[t]];return NullProtoObject()};hiddenKeys[IE_PROTO$1]=!0;var objectCreate=Object.create||function(t,e){var r;return null!==t?(EmptyConstructor[PROTOTYPE]=anObject$6(t),r=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,r[IE_PROTO$1]=t):r=NullProtoObject(),void 0===e?r:definePropertiesModule.f(r,e)},wellKnownSymbol$6=wellKnownSymbol$8,create$2=objectCreate,defineProperty$2=objectDefineProperty.f,UNSCOPABLES=wellKnownSymbol$6("unscopables"),ArrayPrototype$1=Array.prototype;void 0===ArrayPrototype$1[UNSCOPABLES]&&defineProperty$2(ArrayPrototype$1,UNSCOPABLES,{configurable:!0,value:create$2(null)});var addToUnscopables$3=function(t){ArrayPrototype$1[UNSCOPABLES][t]=!0},$$p=_export,arrayToReversed$1=arrayToReversed$2,toIndexedObject$3=toIndexedObject$8,addToUnscopables$2=addToUnscopables$3,$Array$4=Array;$$p({target:"Array",proto:!0},{toReversed:function(){return arrayToReversed$1(toIndexedObject$3(this),$Array$4)}}),addToUnscopables$2("toReversed");var lengthOfArrayLike$5=lengthOfArrayLike$9,arrayFromConstructorAndList$2=function(t,e,r){for(var n=0,i=arguments.length>2?r:lengthOfArrayLike$5(e),a=new t(i);i>n;)a[n]=e[n++];return a},global$d=global$n,getBuiltInPrototypeMethod$1=function(t,e){var r=global$d[t],n=r&&r.prototype;return n&&n[e]},$$o=_export,uncurryThis$k=functionUncurryThis,aCallable$8=aCallable$a,toIndexedObject$2=toIndexedObject$8,arrayFromConstructorAndList$1=arrayFromConstructorAndList$2,getBuiltInPrototypeMethod=getBuiltInPrototypeMethod$1,addToUnscopables$1=addToUnscopables$3,$Array$3=Array,sort$1=uncurryThis$k(getBuiltInPrototypeMethod("Array","sort"));$$o({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&aCallable$8(t);var e=toIndexedObject$2(this),r=arrayFromConstructorAndList$1($Array$3,e);return sort$1(r,t)}}),addToUnscopables$1("toSorted");var $$n=_export,addToUnscopables=addToUnscopables$3,doesNotExceedSafeInteger$1=doesNotExceedSafeInteger$3,lengthOfArrayLike$4=lengthOfArrayLike$9,toAbsoluteIndex=toAbsoluteIndex$2,toIndexedObject$1=toIndexedObject$8,toIntegerOrInfinity$4=toIntegerOrInfinity$7,$Array$2=Array,max$2=Math.max,min$2=Math.min;$$n({target:"Array",proto:!0},{toSpliced:function(t,e){var r,n,i,a,o=toIndexedObject$1(this),s=lengthOfArrayLike$4(o),l=toAbsoluteIndex(t,s),c=arguments.length,u=0;for(0===c?r=n=0:1===c?(r=0,n=s-l):(r=c-2,n=min$2(max$2(toIntegerOrInfinity$4(e),0),s-l)),i=doesNotExceedSafeInteger$1(s+r-n),a=$Array$2(i);u<l;u++)a[u]=o[u];for(;u<l+r;u++)a[u]=arguments[u-l+2];for(;u<i;u++)a[u]=o[u+n-r];return a}}),addToUnscopables("toSpliced");var tryToString$3=tryToString$5,$TypeError$9=TypeError,deletePropertyOrThrow$1=function(t,e){if(!delete t[e])throw new $TypeError$9("Cannot delete property "+tryToString$3(e)+" of "+tryToString$3(t))},$$m=_export,toObject$1=toObject$4,lengthOfArrayLike$3=lengthOfArrayLike$9,setArrayLength=arraySetLength,deletePropertyOrThrow=deletePropertyOrThrow$1,doesNotExceedSafeInteger=doesNotExceedSafeInteger$3,INCORRECT_RESULT=1!==[].unshift(0),properErrorOnNonWritableLength=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},FORCED$1=INCORRECT_RESULT||!properErrorOnNonWritableLength();$$m({target:"Array",proto:!0,arity:1,forced:FORCED$1},{unshift:function(t){var e=toObject$1(this),r=lengthOfArrayLike$3(e),n=arguments.length;if(n){doesNotExceedSafeInteger(r+n);for(var i=r;i--;){var a=i+n;i in e?e[a]=e[i]:deletePropertyOrThrow(e,a)}for(var o=0;o<n;o++)e[o]=arguments[o]}return setArrayLength(e,r+n)}});var lengthOfArrayLike$2=lengthOfArrayLike$9,toIntegerOrInfinity$3=toIntegerOrInfinity$7,$RangeError$2=RangeError,arrayWith$2=function(t,e,r,n){var i=lengthOfArrayLike$2(t),a=toIntegerOrInfinity$3(r),o=a<0?i+a:a;if(o>=i||o<0)throw new $RangeError$2("Incorrect index");for(var s=new e(i),l=0;l<i;l++)s[l]=l===o?n:t[l];return s},$$l=_export,arrayWith$1=arrayWith$2,toIndexedObject=toIndexedObject$8,$Array$1=Array;$$l({target:"Array",proto:!0},{with:function(t,e){return arrayWith$1(toIndexedObject(this),$Array$1,t,e)}});var makeBuiltIn=makeBuiltInExports,defineProperty$1=objectDefineProperty,defineBuiltInAccessor$4=function(t,e,r){return r.get&&makeBuiltIn(r.get,e,{getter:!0}),r.set&&makeBuiltIn(r.set,e,{setter:!0}),defineProperty$1.f(t,e,r)},uncurryThis$j=functionUncurryThis,aCallable$7=aCallable$a,functionUncurryThisAccessor=function(t,e,r){try{return uncurryThis$j(aCallable$7(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},uncurryThisAccessor$3=functionUncurryThisAccessor,classof$8=classofRaw$2,$TypeError$8=TypeError,arrayBufferByteLength$2=uncurryThisAccessor$3(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==classof$8(t))throw new $TypeError$8("ArrayBuffer expected");return t.byteLength},uncurryThis$i=functionUncurryThis,arrayBufferByteLength$1=arrayBufferByteLength$2,slice$3=uncurryThis$i(ArrayBuffer.prototype.slice),arrayBufferIsDetached=function(t){if(0!==arrayBufferByteLength$1(t))return!1;try{return slice$3(t,0,0),!1}catch(t){return!0}},DESCRIPTORS$6=descriptors,defineBuiltInAccessor$3=defineBuiltInAccessor$4,isDetached$1=arrayBufferIsDetached,ArrayBufferPrototype$1=ArrayBuffer.prototype;DESCRIPTORS$6&&!("detached"in ArrayBufferPrototype$1)&&defineBuiltInAccessor$3(ArrayBufferPrototype$1,"detached",{configurable:!0,get:function(){return isDetached$1(this)}});var WorkerThreads,channel$1,buffer,$detach,toIntegerOrInfinity$2=toIntegerOrInfinity$7,toLength=toLength$2,$RangeError$1=RangeError,toIndex$1=function(t){if(void 0===t)return 0;var e=toIntegerOrInfinity$2(t),r=toLength(e);if(e!==r)throw new $RangeError$1("Wrong length or index");return r},global$c=global$n,classof$7=classofRaw$2,engineIsNode="process"===classof$7(global$c.process),IS_NODE$3=engineIsNode,tryNodeRequire$1=function(t){try{if(IS_NODE$3)return Function('return require("'+t+'")')()}catch(t){}},engineIsDeno="object"==typeof Deno&&Deno&&"object"==typeof Deno.version,IS_DENO$1=engineIsDeno,IS_NODE$2=engineIsNode,engineIsBrowser=!IS_DENO$1&&!IS_NODE$2&&"object"==typeof window&&"object"==typeof document,global$b=global$n,fails$c=fails$m,V8=engineV8Version,IS_BROWSER=engineIsBrowser,IS_DENO=engineIsDeno,IS_NODE$1=engineIsNode,structuredClone$2=global$b.structuredClone,structuredCloneProperTransfer=!!structuredClone$2&&!fails$c((function(){if(IS_DENO&&V8>92||IS_NODE$1&&V8>94||IS_BROWSER&&V8>97)return!1;var t=new ArrayBuffer(8),e=structuredClone$2(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength})),global$a=global$n,tryNodeRequire=tryNodeRequire$1,PROPER_STRUCTURED_CLONE_TRANSFER$2=structuredCloneProperTransfer,structuredClone$1=global$a.structuredClone,$ArrayBuffer=global$a.ArrayBuffer,$MessageChannel=global$a.MessageChannel,detach=!1;if(PROPER_STRUCTURED_CLONE_TRANSFER$2)detach=function(t){structuredClone$1(t,{transfer:[t]})};else if($ArrayBuffer)try{$MessageChannel||(WorkerThreads=tryNodeRequire("worker_threads"))&&($MessageChannel=WorkerThreads.MessageChannel),$MessageChannel&&(channel$1=new $MessageChannel,buffer=new $ArrayBuffer(2),$detach=function(t){channel$1.port1.postMessage(null,[t])},2===buffer.byteLength&&($detach(buffer),0===buffer.byteLength&&(detach=$detach)))}catch(t){}var detachTransferable$2=detach,global$9=global$n,uncurryThis$h=functionUncurryThis,uncurryThisAccessor$2=functionUncurryThisAccessor,toIndex=toIndex$1,isDetached=arrayBufferIsDetached,arrayBufferByteLength=arrayBufferByteLength$2,detachTransferable$1=detachTransferable$2,PROPER_STRUCTURED_CLONE_TRANSFER$1=structuredCloneProperTransfer,structuredClone=global$9.structuredClone,ArrayBuffer$1=global$9.ArrayBuffer,DataView$1=global$9.DataView,TypeError$3=global$9.TypeError,min$1=Math.min,ArrayBufferPrototype=ArrayBuffer$1.prototype,DataViewPrototype=DataView$1.prototype,slice$2=uncurryThis$h(ArrayBufferPrototype.slice),isResizable=uncurryThisAccessor$2(ArrayBufferPrototype,"resizable","get"),maxByteLength=uncurryThisAccessor$2(ArrayBufferPrototype,"maxByteLength","get"),getInt8=uncurryThis$h(DataViewPrototype.getInt8),setInt8=uncurryThis$h(DataViewPrototype.setInt8),arrayBufferTransfer=(PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1)&&function(t,e,r){var n,i=arrayBufferByteLength(t),a=void 0===e?i:toIndex(e),o=!isResizable||!isResizable(t);if(isDetached(t))throw new TypeError$3("ArrayBuffer is detached");if(PROPER_STRUCTURED_CLONE_TRANSFER$1&&(t=structuredClone(t,{transfer:[t]}),i===a&&(r||o)))return t;if(i>=a&&(!r||o))n=slice$2(t,0,a);else{var s=r&&!o&&maxByteLength?{maxByteLength:maxByteLength(t)}:void 0;n=new ArrayBuffer$1(a,s);for(var l=new DataView$1(t),c=new DataView$1(n),u=min$1(a,i),h=0;h<u;h++)setInt8(c,h,getInt8(l,h))}return PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1(t),n},$$k=_export,$transfer$1=arrayBufferTransfer;$transfer$1&&$$k({target:"ArrayBuffer",proto:!0},{transfer:function(){return $transfer$1(this,arguments.length?arguments[0]:void 0,!0)}});var $$j=_export,$transfer=arrayBufferTransfer;$transfer&&$$j({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return $transfer(this,arguments.length?arguments[0]:void 0,!1)}});var classofRaw$1=classofRaw$2,uncurryThis$g=functionUncurryThis,functionUncurryThisClause=function(t){if("Function"===classofRaw$1(t))return uncurryThis$g(t)},uncurryThis$f=functionUncurryThisClause,aCallable$6=aCallable$a,NATIVE_BIND$1=functionBindNative,bind$2=functionUncurryThisClause(functionUncurryThisClause.bind),functionBindContext=function(t,e){return aCallable$6(t),void 0===e?t:NATIVE_BIND$1?bind$2(t,e):function(){return t.apply(e,arguments)}},iterators={},wellKnownSymbol$5=wellKnownSymbol$8,Iterators$1=iterators,ITERATOR$2=wellKnownSymbol$5("iterator"),ArrayPrototype=Array.prototype,isArrayIteratorMethod$1=function(t){return void 0!==t&&(Iterators$1.Array===t||ArrayPrototype[ITERATOR$2]===t)},wellKnownSymbol$4=wellKnownSymbol$8,TO_STRING_TAG$2=wellKnownSymbol$4("toStringTag"),test={};test[TO_STRING_TAG$2]="z";var toStringTagSupport="[object z]"===String(test),TO_STRING_TAG_SUPPORT=toStringTagSupport,isCallable$7=isCallable$i,classofRaw=classofRaw$2,wellKnownSymbol$3=wellKnownSymbol$8,TO_STRING_TAG$1=wellKnownSymbol$3("toStringTag"),$Object$1=Object,CORRECT_ARGUMENTS="Arguments"===classofRaw(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}},classof$6=TO_STRING_TAG_SUPPORT?classofRaw:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=$Object$1(t),TO_STRING_TAG$1))?r:CORRECT_ARGUMENTS?classofRaw(e):"Object"===(n=classofRaw(e))&&isCallable$7(e.callee)?"Arguments":n},classof$5=classof$6,getMethod$1=getMethod$3,isNullOrUndefined$1=isNullOrUndefined$4,Iterators=iterators,wellKnownSymbol$2=wellKnownSymbol$8,ITERATOR$1=wellKnownSymbol$2("iterator"),getIteratorMethod$2=function(t){if(!isNullOrUndefined$1(t))return getMethod$1(t,ITERATOR$1)||getMethod$1(t,"@@iterator")||Iterators[classof$5(t)]},call$7=functionCall,aCallable$5=aCallable$a,anObject$5=anObject$a,tryToString$2=tryToString$5,getIteratorMethod$1=getIteratorMethod$2,$TypeError$7=TypeError,getIterator$1=function(t,e){var r=arguments.length<2?getIteratorMethod$1(t):e;if(aCallable$5(r))return anObject$5(call$7(r,t));throw new $TypeError$7(tryToString$2(t)+" is not iterable")},call$6=functionCall,anObject$4=anObject$a,getMethod=getMethod$3,iteratorClose$3=function(t,e,r){var n,i;anObject$4(t);try{if(!(n=getMethod(t,"return"))){if("throw"===e)throw r;return r}n=call$6(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return anObject$4(n),r},bind$1=functionBindContext,call$5=functionCall,anObject$3=anObject$a,tryToString$1=tryToString$5,isArrayIteratorMethod=isArrayIteratorMethod$1,lengthOfArrayLike$1=lengthOfArrayLike$9,isPrototypeOf$3=objectIsPrototypeOf,getIterator=getIterator$1,getIteratorMethod=getIteratorMethod$2,iteratorClose$2=iteratorClose$3,$TypeError$6=TypeError,Result=function(t,e){this.stopped=t,this.result=e},ResultPrototype=Result.prototype,iterate$5=function(t,e,r){var n,i,a,o,s,l,c,u=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),f=!(!r||!r.INTERRUPTED),g=bind$1(e,u),m=function(t){return n&&iteratorClose$2(n,"normal",t),new Result(!0,t)},y=function(t){return h?(anObject$3(t),f?g(t[0],t[1],m):g(t[0],t[1])):f?g(t,m):g(t)};if(d)n=t.iterator;else if(p)n=t;else{if(!(i=getIteratorMethod(t)))throw new $TypeError$6(tryToString$1(t)+" is not iterable");if(isArrayIteratorMethod(i)){for(a=0,o=lengthOfArrayLike$1(t);o>a;a++)if((s=y(t[a]))&&isPrototypeOf$3(ResultPrototype,s))return s;return new Result(!1)}n=getIterator(t,i)}for(l=d?t.next:n.next;!(c=call$5(l,n)).done;){try{s=y(c.value)}catch(t){iteratorClose$2(n,"throw",t)}if("object"==typeof s&&s&&isPrototypeOf$3(ResultPrototype,s))return s}return new Result(!1)},uncurryThis$e=functionUncurryThis,MapPrototype=Map.prototype,mapHelpers={Map:Map,set:uncurryThis$e(MapPrototype.set),get:uncurryThis$e(MapPrototype.get),has:uncurryThis$e(MapPrototype.has),remove:uncurryThis$e(MapPrototype.delete),proto:MapPrototype},$$i=_export,uncurryThis$d=functionUncurryThis,aCallable$4=aCallable$a,requireObjectCoercible$4=requireObjectCoercible$7,iterate$4=iterate$5,MapHelpers$1=mapHelpers,fails$b=fails$m,Map$2=MapHelpers$1.Map,has$6=MapHelpers$1.has,get$2=MapHelpers$1.get,set$3=MapHelpers$1.set,push$3=uncurryThis$d([].push),DOES_NOT_WORK_WITH_PRIMITIVES$1=fails$b((function(){return 1!==Map$2.groupBy("ab",(function(t){return t})).get("a").length}));$$i({target:"Map",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES$1},{groupBy:function(t,e){requireObjectCoercible$4(t),aCallable$4(e);var r=new Map$2,n=0;return iterate$4(t,(function(t){var i=e(t,n++);has$6(r,i)?push$3(get$2(r,i),t):set$3(r,i,[t])})),r}});var $$h=_export,getBuiltIn$6=getBuiltIn$a,uncurryThis$c=functionUncurryThis,aCallable$3=aCallable$a,requireObjectCoercible$3=requireObjectCoercible$7,toPropertyKey=toPropertyKey$3,iterate$3=iterate$5,fails$a=fails$m,nativeGroupBy=Object.groupBy,create$1=getBuiltIn$6("Object","create"),push$2=uncurryThis$c([].push),DOES_NOT_WORK_WITH_PRIMITIVES=!nativeGroupBy||fails$a((function(){return 1!==nativeGroupBy("ab",(function(t){return t})).a.length}));$$h({target:"Object",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES},{groupBy:function(t,e){requireObjectCoercible$3(t),aCallable$3(e);var r=create$1(null),n=0;return iterate$3(t,(function(t){var i=toPropertyKey(e(t,n++));i in r?push$2(r[i],t):r[i]=[t]})),r}});var newPromiseCapability={},aCallable$2=aCallable$a,$TypeError$5=TypeError,PromiseCapability=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw new $TypeError$5("Bad Promise constructor");e=t,r=n})),this.resolve=aCallable$2(e),this.reject=aCallable$2(r)};newPromiseCapability.f=function(t){return new PromiseCapability(t)};var $$g=_export,newPromiseCapabilityModule=newPromiseCapability;$$g({target:"Promise",stat:!0},{withResolvers:function(){var t=newPromiseCapabilityModule.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var anObject$2=anObject$a,regexpFlags=function(){var t=anObject$2(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},global$8=global$n,DESCRIPTORS$5=descriptors,defineBuiltInAccessor$2=defineBuiltInAccessor$4,regExpFlags$1=regexpFlags,fails$9=fails$m,RegExp$1=global$8.RegExp,RegExpPrototype$1=RegExp$1.prototype,FORCED=DESCRIPTORS$5&&fails$9((function(){var t=!0;try{RegExp$1(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(RegExpPrototype$1,"flags").get.call(e)!==n||r!==n}));FORCED&&defineBuiltInAccessor$2(RegExpPrototype$1,"flags",{configurable:!0,get:regExpFlags$1});var uncurryThis$b=functionUncurryThis,SetPrototype$1=Set.prototype,setHelpers={Set:Set,add:uncurryThis$b(SetPrototype$1.add),has:uncurryThis$b(SetPrototype$1.has),remove:uncurryThis$b(SetPrototype$1.delete),proto:SetPrototype$1},has$5=setHelpers.has,aSet$7=function(t){return has$5(t),t},call$4=functionCall,iterateSimple$7=function(t,e,r){for(var n,i,a=r?t:t.iterator,o=t.next;!(n=call$4(o,a)).done;)if(void 0!==(i=e(n.value)))return i},uncurryThis$a=functionUncurryThis,iterateSimple$6=iterateSimple$7,SetHelpers$6=setHelpers,Set$4=SetHelpers$6.Set,SetPrototype=SetHelpers$6.proto,forEach$2=uncurryThis$a(SetPrototype.forEach),keys=uncurryThis$a(SetPrototype.keys),next=keys(new Set$4).next,setIterate$1=function(t,e,r){return r?iterateSimple$6({iterator:keys(t),next:next},e):forEach$2(t,e)},SetHelpers$5=setHelpers,iterate$2=setIterate$1,Set$3=SetHelpers$5.Set,add$3=SetHelpers$5.add,setClone=function(t){var e=new Set$3;return iterate$2(t,(function(t){add$3(e,t)})),e},uncurryThisAccessor$1=functionUncurryThisAccessor,SetHelpers$4=setHelpers,setSize=uncurryThisAccessor$1(SetHelpers$4.proto,"size","get")||function(t){return t.size},getIteratorDirect$1=function(t){return{iterator:t,next:t.next,done:!1}},aCallable$1=aCallable$a,anObject$1=anObject$a,call$3=functionCall,toIntegerOrInfinity$1=toIntegerOrInfinity$7,getIteratorDirect=getIteratorDirect$1,INVALID_SIZE="Invalid size",$RangeError=RangeError,$TypeError$4=TypeError,max$1=Math.max,SetRecord=function(t,e){this.set=t,this.size=max$1(e,0),this.has=aCallable$1(t.has),this.keys=aCallable$1(t.keys)};SetRecord.prototype={getIterator:function(){return getIteratorDirect(anObject$1(call$3(this.keys,this.set)))},includes:function(t){return call$3(this.has,this.set,t)}};var getSetRecord$7=function(t){anObject$1(t);var e=+t.size;if(e!=e)throw new $TypeError$4(INVALID_SIZE);var r=toIntegerOrInfinity$1(e);if(r<0)throw new $RangeError(INVALID_SIZE);return new SetRecord(t,r)},aSet$6=aSet$7,SetHelpers$3=setHelpers,clone$2=setClone,size$4=setSize,getSetRecord$6=getSetRecord$7,iterateSet$2=setIterate$1,iterateSimple$5=iterateSimple$7,has$4=SetHelpers$3.has,remove$2=SetHelpers$3.remove,setDifference=function(t){var e=aSet$6(this),r=getSetRecord$6(t),n=clone$2(e);return size$4(e)<=r.size?iterateSet$2(e,(function(t){r.includes(t)&&remove$2(n,t)})):iterateSimple$5(r.getIterator(),(function(t){has$4(e,t)&&remove$2(n,t)})),n},getBuiltIn$5=getBuiltIn$a,createSetLike=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},setMethodAcceptSetLike$7=function(t){var e=getBuiltIn$5("Set");try{(new e)[t](createSetLike(0));try{return(new e)[t](createSetLike(-1)),!1}catch(t){return!0}}catch(t){return!1}},$$f=_export,difference=setDifference,setMethodAcceptSetLike$6=setMethodAcceptSetLike$7;$$f({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$6("difference")},{difference:difference});var aSet$5=aSet$7,SetHelpers$2=setHelpers,size$3=setSize,getSetRecord$5=getSetRecord$7,iterateSet$1=setIterate$1,iterateSimple$4=iterateSimple$7,Set$2=SetHelpers$2.Set,add$2=SetHelpers$2.add,has$3=SetHelpers$2.has,setIntersection=function(t){var e=aSet$5(this),r=getSetRecord$5(t),n=new Set$2;return size$3(e)>r.size?iterateSimple$4(r.getIterator(),(function(t){has$3(e,t)&&add$2(n,t)})):iterateSet$1(e,(function(t){r.includes(t)&&add$2(n,t)})),n},$$e=_export,fails$8=fails$m,intersection=setIntersection,setMethodAcceptSetLike$5=setMethodAcceptSetLike$7,INCORRECT=!setMethodAcceptSetLike$5("intersection")||fails$8((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));$$e({target:"Set",proto:!0,real:!0,forced:INCORRECT},{intersection:intersection});var aSet$4=aSet$7,has$2=setHelpers.has,size$2=setSize,getSetRecord$4=getSetRecord$7,iterateSet=setIterate$1,iterateSimple$3=iterateSimple$7,iteratorClose$1=iteratorClose$3,setIsDisjointFrom=function(t){var e=aSet$4(this),r=getSetRecord$4(t);if(size$2(e)<=r.size)return!1!==iterateSet(e,(function(t){if(r.includes(t))return!1}),!0);var n=r.getIterator();return!1!==iterateSimple$3(n,(function(t){if(has$2(e,t))return iteratorClose$1(n,"normal",!1)}))},$$d=_export,isDisjointFrom=setIsDisjointFrom,setMethodAcceptSetLike$4=setMethodAcceptSetLike$7;$$d({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$4("isDisjointFrom")},{isDisjointFrom:isDisjointFrom});var aSet$3=aSet$7,size$1=setSize,iterate$1=setIterate$1,getSetRecord$3=getSetRecord$7,setIsSubsetOf=function(t){var e=aSet$3(this),r=getSetRecord$3(t);return!(size$1(e)>r.size)&&!1!==iterate$1(e,(function(t){if(!r.includes(t))return!1}),!0)},$$c=_export,isSubsetOf=setIsSubsetOf,setMethodAcceptSetLike$3=setMethodAcceptSetLike$7;$$c({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$3("isSubsetOf")},{isSubsetOf:isSubsetOf});var aSet$2=aSet$7,has$1=setHelpers.has,size=setSize,getSetRecord$2=getSetRecord$7,iterateSimple$2=iterateSimple$7,iteratorClose=iteratorClose$3,setIsSupersetOf=function(t){var e=aSet$2(this),r=getSetRecord$2(t);if(size(e)<r.size)return!1;var n=r.getIterator();return!1!==iterateSimple$2(n,(function(t){if(!has$1(e,t))return iteratorClose(n,"normal",!1)}))},$$b=_export,isSupersetOf=setIsSupersetOf,setMethodAcceptSetLike$2=setMethodAcceptSetLike$7;$$b({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$2("isSupersetOf")},{isSupersetOf:isSupersetOf});var aSet$1=aSet$7,SetHelpers$1=setHelpers,clone$1=setClone,getSetRecord$1=getSetRecord$7,iterateSimple$1=iterateSimple$7,add$1=SetHelpers$1.add,has=SetHelpers$1.has,remove$1=SetHelpers$1.remove,setSymmetricDifference=function(t){var e=aSet$1(this),r=getSetRecord$1(t).getIterator(),n=clone$1(e);return iterateSimple$1(r,(function(t){has(e,t)?remove$1(n,t):add$1(n,t)})),n},$$a=_export,symmetricDifference=setSymmetricDifference,setMethodAcceptSetLike$1=setMethodAcceptSetLike$7;$$a({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike$1("symmetricDifference")},{symmetricDifference:symmetricDifference});var aSet=aSet$7,add=setHelpers.add,clone=setClone,getSetRecord=getSetRecord$7,iterateSimple=iterateSimple$7,setUnion=function(t){var e=aSet(this),r=getSetRecord(t).getIterator(),n=clone(e);return iterateSimple(r,(function(t){add(n,t)})),n},$$9=_export,union=setUnion,setMethodAcceptSetLike=setMethodAcceptSetLike$7;$$9({target:"Set",proto:!0,real:!0,forced:!setMethodAcceptSetLike("union")},{union:union});var classof$4=classof$6,$String$1=String,toString$7=function(t){if("Symbol"===classof$4(t))throw new TypeError("Cannot convert a Symbol value to a string");return $String$1(t)},$$8=_export,uncurryThis$9=functionUncurryThis,requireObjectCoercible$2=requireObjectCoercible$7,toString$6=toString$7,charCodeAt$1=uncurryThis$9("".charCodeAt);$$8({target:"String",proto:!0},{isWellFormed:function(){for(var t=toString$6(requireObjectCoercible$2(this)),e=t.length,r=0;r<e;r++){var n=charCodeAt$1(t,r);if(55296==(63488&n)&&(n>=56320||++r>=e||56320!=(64512&charCodeAt$1(t,r))))return!1}return!0}});var $$7=_export,call$2=functionCall,uncurryThis$8=functionUncurryThis,requireObjectCoercible$1=requireObjectCoercible$7,toString$5=toString$7,fails$7=fails$m,$Array=Array,charAt=uncurryThis$8("".charAt),charCodeAt=uncurryThis$8("".charCodeAt),join=uncurryThis$8([].join),$toWellFormed="".toWellFormed,REPLACEMENT_CHARACTER="�",TO_STRING_CONVERSION_BUG=$toWellFormed&&fails$7((function(){return"1"!==call$2($toWellFormed,1)}));$$7({target:"String",proto:!0,forced:TO_STRING_CONVERSION_BUG},{toWellFormed:function(){var t=toString$5(requireObjectCoercible$1(this));if(TO_STRING_CONVERSION_BUG)return call$2($toWellFormed,t);for(var e=t.length,r=$Array(e),n=0;n<e;n++){var i=charCodeAt(t,n);55296!=(63488&i)?r[n]=charAt(t,n):i>=56320||n+1>=e||56320!=(64512&charCodeAt(t,n+1))?r[n]=REPLACEMENT_CHARACTER:(r[n]=charAt(t,n),r[++n]=charAt(t,n))}return join(r,"")}});var NAME$4,Constructor,Prototype,arrayBufferBasicDetection="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,fails$6=fails$m,correctPrototypeGetter=!fails$6((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),hasOwn$5=hasOwnProperty_1,isCallable$6=isCallable$i,toObject=toObject$4,sharedKey=sharedKey$3,CORRECT_PROTOTYPE_GETTER=correctPrototypeGetter,IE_PROTO=sharedKey("IE_PROTO"),$Object=Object,ObjectPrototype$1=$Object.prototype,objectGetPrototypeOf=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(t){var e=toObject(t);if(hasOwn$5(e,IE_PROTO))return e[IE_PROTO];var r=e.constructor;return isCallable$6(r)&&e instanceof r?r.prototype:e instanceof $Object?ObjectPrototype$1:null},isObject$4=isObject$a,isPossiblePrototype$1=function(t){return isObject$4(t)||null===t},isPossiblePrototype=isPossiblePrototype$1,$String=String,$TypeError$3=TypeError,aPossiblePrototype$1=function(t){if(isPossiblePrototype(t))return t;throw new $TypeError$3("Can't set "+$String(t)+" as a prototype")},uncurryThisAccessor=functionUncurryThisAccessor,isObject$3=isObject$a,requireObjectCoercible=requireObjectCoercible$7,aPossiblePrototype=aPossiblePrototype$1,objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=uncurryThisAccessor(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return requireObjectCoercible(r),aPossiblePrototype(n),isObject$3(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),NATIVE_ARRAY_BUFFER=arrayBufferBasicDetection,DESCRIPTORS$4=descriptors,global$7=global$n,isCallable$5=isCallable$i,isObject$2=isObject$a,hasOwn$4=hasOwnProperty_1,classof$3=classof$6,tryToString=tryToString$5,createNonEnumerableProperty$1=createNonEnumerableProperty$4,defineBuiltIn$2=defineBuiltIn$4,defineBuiltInAccessor$1=defineBuiltInAccessor$4,isPrototypeOf$2=objectIsPrototypeOf,getPrototypeOf=objectGetPrototypeOf,setPrototypeOf$1=objectSetPrototypeOf,wellKnownSymbol$1=wellKnownSymbol$8,uid$1=uid$4,InternalStateModule=internalState,enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,Int8Array$1=global$7.Int8Array,Int8ArrayPrototype=Int8Array$1&&Int8Array$1.prototype,Uint8ClampedArray=global$7.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype,TypedArray=Int8Array$1&&getPrototypeOf(Int8Array$1),TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype),ObjectPrototype=Object.prototype,TypeError$2=global$7.TypeError,TO_STRING_TAG=wellKnownSymbol$1("toStringTag"),TYPED_ARRAY_TAG=uid$1("TYPED_ARRAY_TAG"),TYPED_ARRAY_CONSTRUCTOR="TypedArrayConstructor",NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf$1&&"Opera"!==classof$3(global$7.opera),TYPED_ARRAY_TAG_REQUIRED=!1,TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},isView=function(t){if(!isObject$2(t))return!1;var e=classof$3(t);return"DataView"===e||hasOwn$4(TypedArrayConstructorsList,e)||hasOwn$4(BigIntArrayConstructorsList,e)},getTypedArrayConstructor$3=function(t){var e=getPrototypeOf(t);if(isObject$2(e)){var r=getInternalState(e);return r&&hasOwn$4(r,TYPED_ARRAY_CONSTRUCTOR)?r[TYPED_ARRAY_CONSTRUCTOR]:getTypedArrayConstructor$3(e)}},isTypedArray=function(t){if(!isObject$2(t))return!1;var e=classof$3(t);return hasOwn$4(TypedArrayConstructorsList,e)||hasOwn$4(BigIntArrayConstructorsList,e)},aTypedArray$3=function(t){if(isTypedArray(t))return t;throw new TypeError$2("Target is not a typed array")},aTypedArrayConstructor=function(t){if(isCallable$5(t)&&(!setPrototypeOf$1||isPrototypeOf$2(TypedArray,t)))return t;throw new TypeError$2(tryToString(t)+" is not a typed array constructor")},exportTypedArrayMethod$3=function(t,e,r,n){if(DESCRIPTORS$4){if(r)for(var i in TypedArrayConstructorsList){var a=global$7[i];if(a&&hasOwn$4(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}TypedArrayPrototype[t]&&!r||defineBuiltIn$2(TypedArrayPrototype,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[t]||e,n)}},exportTypedArrayStaticMethod=function(t,e,r){var n,i;if(DESCRIPTORS$4){if(setPrototypeOf$1){if(r)for(n in TypedArrayConstructorsList)if((i=global$7[n])&&hasOwn$4(i,t))try{delete i[t]}catch(t){}if(TypedArray[t]&&!r)return;try{return defineBuiltIn$2(TypedArray,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS&&TypedArray[t]||e)}catch(t){}}for(n in TypedArrayConstructorsList)!(i=global$7[n])||i[t]&&!r||defineBuiltIn$2(i,t,e)}};for(NAME$4 in TypedArrayConstructorsList)(Prototype=(Constructor=global$7[NAME$4])&&Constructor.prototype)?enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor:NATIVE_ARRAY_BUFFER_VIEWS=!1;for(NAME$4 in BigIntArrayConstructorsList)(Prototype=(Constructor=global$7[NAME$4])&&Constructor.prototype)&&(enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable$5(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function(){throw new TypeError$2("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$4 in TypedArrayConstructorsList)global$7[NAME$4]&&setPrototypeOf$1(global$7[NAME$4],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$4 in TypedArrayConstructorsList)global$7[NAME$4]&&setPrototypeOf$1(global$7[NAME$4].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&setPrototypeOf$1(Uint8ClampedArrayPrototype,TypedArrayPrototype),DESCRIPTORS$4&&!hasOwn$4(TypedArrayPrototype,TO_STRING_TAG))for(NAME$4 in TYPED_ARRAY_TAG_REQUIRED=!0,defineBuiltInAccessor$1(TypedArrayPrototype,TO_STRING_TAG,{configurable:!0,get:function(){return isObject$2(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)global$7[NAME$4]&&createNonEnumerableProperty$1(global$7[NAME$4],TYPED_ARRAY_TAG,NAME$4);var arrayBufferViewCore={NATIVE_ARRAY_BUFFER_VIEWS:NATIVE_ARRAY_BUFFER_VIEWS,TYPED_ARRAY_TAG:TYPED_ARRAY_TAG_REQUIRED&&TYPED_ARRAY_TAG,aTypedArray:aTypedArray$3,aTypedArrayConstructor:aTypedArrayConstructor,exportTypedArrayMethod:exportTypedArrayMethod$3,exportTypedArrayStaticMethod:exportTypedArrayStaticMethod,getTypedArrayConstructor:getTypedArrayConstructor$3,isView:isView,isTypedArray:isTypedArray,TypedArray:TypedArray,TypedArrayPrototype:TypedArrayPrototype},arrayToReversed=arrayToReversed$2,ArrayBufferViewCore$2=arrayBufferViewCore,aTypedArray$2=ArrayBufferViewCore$2.aTypedArray,exportTypedArrayMethod$2=ArrayBufferViewCore$2.exportTypedArrayMethod,getTypedArrayConstructor$2=ArrayBufferViewCore$2.getTypedArrayConstructor;exportTypedArrayMethod$2("toReversed",(function(){return arrayToReversed(aTypedArray$2(this),getTypedArrayConstructor$2(this))}));var ArrayBufferViewCore$1=arrayBufferViewCore,uncurryThis$7=functionUncurryThis,aCallable=aCallable$a,arrayFromConstructorAndList=arrayFromConstructorAndList$2,aTypedArray$1=ArrayBufferViewCore$1.aTypedArray,getTypedArrayConstructor$1=ArrayBufferViewCore$1.getTypedArrayConstructor,exportTypedArrayMethod$1=ArrayBufferViewCore$1.exportTypedArrayMethod,sort=uncurryThis$7(ArrayBufferViewCore$1.TypedArrayPrototype.sort);exportTypedArrayMethod$1("toSorted",(function(t){void 0!==t&&aCallable(t);var e=aTypedArray$1(this),r=arrayFromConstructorAndList(getTypedArrayConstructor$1(e),e);return sort(r,t)}));var classof$2=classof$6,isBigIntArray$1=function(t){var e=classof$2(t);return"BigInt64Array"===e||"BigUint64Array"===e},toPrimitive=toPrimitive$2,$TypeError$2=TypeError,toBigInt$1=function(t){var e=toPrimitive(t,"number");if("number"==typeof e)throw new $TypeError$2("Can't convert number to bigint");return BigInt(e)},arrayWith=arrayWith$2,ArrayBufferViewCore=arrayBufferViewCore,isBigIntArray=isBigIntArray$1,toIntegerOrInfinity=toIntegerOrInfinity$7,toBigInt=toBigInt$1,aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,PROPER_ORDER=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();exportTypedArrayMethod("with",{with:function(t,e){var r=aTypedArray(this),n=toIntegerOrInfinity(t),i=isBigIntArray(r)?toBigInt(e):+e;return arrayWith(r,getTypedArrayConstructor(r),n,i)}}.with,!PROPER_ORDER);var isPrototypeOf$1=objectIsPrototypeOf,$TypeError$1=TypeError,anInstance$1=function(t,e){if(isPrototypeOf$1(e,t))return t;throw new $TypeError$1("Incorrect invocation")},isCallable$4=isCallable$i,isObject$1=isObject$a,setPrototypeOf=objectSetPrototypeOf,inheritIfRequired$1=function(t,e,r){var n,i;return setPrototypeOf&&isCallable$4(n=e.constructor)&&n!==r&&isObject$1(i=n.prototype)&&i!==r.prototype&&setPrototypeOf(t,i),t},toString$4=toString$7,normalizeStringArgument$1=function(t,e){return void 0===t?arguments.length<2?"":e:toString$4(t)},domExceptionConstants={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},uncurryThis$6=functionUncurryThis,$Error=Error,replace=uncurryThis$6("".replace),TEST=String(new $Error("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),errorStackClear=function(t,e){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof t&&!$Error.prepareStackTrace)for(;e--;)t=replace(t,V8_OR_CHAKRA_STACK_ENTRY,"");return t},$$6=_export,global$6=global$n,getBuiltIn$4=getBuiltIn$a,createPropertyDescriptor$2=createPropertyDescriptor$5,defineProperty=objectDefineProperty.f,hasOwn$3=hasOwnProperty_1,anInstance=anInstance$1,inheritIfRequired=inheritIfRequired$1,normalizeStringArgument=normalizeStringArgument$1,DOMExceptionConstants=domExceptionConstants,clearErrorStack=errorStackClear,DESCRIPTORS$3=descriptors,DOM_EXCEPTION="DOMException",Error$2=getBuiltIn$4("Error"),NativeDOMException=getBuiltIn$4(DOM_EXCEPTION),$DOMException=function(){anInstance(this,DOMExceptionPrototype);var t=arguments.length,e=normalizeStringArgument(t<1?void 0:arguments[0]),r=normalizeStringArgument(t<2?void 0:arguments[1],"Error"),n=new NativeDOMException(e,r),i=new Error$2(e);return i.name=DOM_EXCEPTION,defineProperty(n,"stack",createPropertyDescriptor$2(1,clearErrorStack(i.stack,1))),inheritIfRequired(n,this,$DOMException),n},DOMExceptionPrototype=$DOMException.prototype=NativeDOMException.prototype,ERROR_HAS_STACK="stack"in new Error$2(DOM_EXCEPTION),DOM_EXCEPTION_HAS_STACK="stack"in new NativeDOMException(1,2),descriptor=NativeDOMException&&DESCRIPTORS$3&&Object.getOwnPropertyDescriptor(global$6,DOM_EXCEPTION),BUGGY_DESCRIPTOR=!(!descriptor||descriptor.writable&&descriptor.configurable),FORCED_CONSTRUCTOR=ERROR_HAS_STACK&&!BUGGY_DESCRIPTOR&&!DOM_EXCEPTION_HAS_STACK;$$6({global:!0,constructor:!0,forced:FORCED_CONSTRUCTOR},{DOMException:FORCED_CONSTRUCTOR?$DOMException:NativeDOMException});var PolyfilledDOMException=getBuiltIn$4(DOM_EXCEPTION),PolyfilledDOMExceptionPrototype=PolyfilledDOMException.prototype;if(PolyfilledDOMExceptionPrototype.constructor!==PolyfilledDOMException)for(var key in defineProperty(PolyfilledDOMExceptionPrototype,"constructor",createPropertyDescriptor$2(1,PolyfilledDOMException)),DOMExceptionConstants)if(hasOwn$3(DOMExceptionConstants,key)){var constant$6=DOMExceptionConstants[key],constantName=constant$6.s;hasOwn$3(PolyfilledDOMException,constantName)||defineProperty(PolyfilledDOMException,constantName,createPropertyDescriptor$2(6,constant$6.c))}var $location,defer,channel,port,NATIVE_BIND=functionBindNative,FunctionPrototype=Function.prototype,apply$2=FunctionPrototype.apply,call$1=FunctionPrototype.call,functionApply="object"==typeof Reflect&&Reflect.apply||(NATIVE_BIND?call$1.bind(apply$2):function(){return call$1.apply(apply$2,arguments)}),uncurryThis$5=functionUncurryThis,arraySlice$2=uncurryThis$5([].slice),$TypeError=TypeError,validateArgumentsLength$7=function(t,e){if(t<e)throw new $TypeError("Not enough arguments");return t},userAgent=engineUserAgent,engineIsIos=/(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent),global$5=global$n,apply$1=functionApply,bind=functionBindContext,isCallable$3=isCallable$i,hasOwn$2=hasOwnProperty_1,fails$5=fails$m,html=html$2,arraySlice$1=arraySlice$2,createElement=documentCreateElement$1,validateArgumentsLength$6=validateArgumentsLength$7,IS_IOS=engineIsIos,IS_NODE=engineIsNode,set$2=global$5.setImmediate,clear=global$5.clearImmediate,process=global$5.process,Dispatch$1=global$5.Dispatch,Function$2=global$5.Function,MessageChannel=global$5.MessageChannel,String$1=global$5.String,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange";fails$5((function(){$location=global$5.location}));var run=function(t){if(hasOwn$2(queue,t)){var e=queue[t];delete queue[t],e()}},runner=function(t){return function(){run(t)}},eventListener=function(t){run(t.data)},globalPostMessageDefer=function(t){global$5.postMessage(String$1(t),$location.protocol+"//"+$location.host)};set$2&&clear||(set$2=function(t){validateArgumentsLength$6(arguments.length,1);var e=isCallable$3(t)?t:Function$2(t),r=arraySlice$1(arguments,1);return queue[++counter]=function(){apply$1(e,void 0,r)},defer(counter),counter},clear=function(t){delete queue[t]},IS_NODE?defer=function(t){process.nextTick(runner(t))}:Dispatch$1&&Dispatch$1.now?defer=function(t){Dispatch$1.now(runner(t))}:MessageChannel&&!IS_IOS?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=eventListener,defer=bind(port.postMessage,port)):global$5.addEventListener&&isCallable$3(global$5.postMessage)&&!global$5.importScripts&&$location&&"file:"!==$location.protocol&&!fails$5(globalPostMessageDefer)?(defer=globalPostMessageDefer,global$5.addEventListener("message",eventListener,!1)):defer=ONREADYSTATECHANGE in createElement("script")?function(t){html.appendChild(createElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(t)}}:function(t){setTimeout(runner(t),0)});var task={set:set$2,clear:clear},$$5=_export,global$4=global$n,clearImmediate=task.clear;$$5({global:!0,bind:!0,enumerable:!0,forced:global$4.clearImmediate!==clearImmediate},{clearImmediate:clearImmediate});var engineIsBun="function"==typeof Bun&&Bun&&"string"==typeof Bun.version,global$3=global$n,apply=functionApply,isCallable$2=isCallable$i,ENGINE_IS_BUN=engineIsBun,USER_AGENT=engineUserAgent,arraySlice=arraySlice$2,validateArgumentsLength$5=validateArgumentsLength$7,Function$1=global$3.Function,WRAP=/MSIE .\./.test(USER_AGENT)||ENGINE_IS_BUN&&function(){var t=global$3.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),schedulersFix$1=function(t,e){var r=e?2:1;return WRAP?function(n,i){var a=validateArgumentsLength$5(arguments.length,1)>r,o=isCallable$2(n)?n:Function$1(n),s=a?arraySlice(arguments,r):[],l=a?function(){apply(o,this,s)}:o;return e?t(l,i):t(l)}:t},$$4=_export,global$2=global$n,setTask=task.set,schedulersFix=schedulersFix$1,setImmediate=global$2.setImmediate?schedulersFix(setTask,!1):setTask;$$4({global:!0,bind:!0,enumerable:!0,forced:global$2.setImmediate!==setImmediate},{setImmediate:setImmediate});var uncurryThis$4=functionUncurryThis,fails$4=fails$m,isCallable$1=isCallable$i,classof$1=classof$6,getBuiltIn$3=getBuiltIn$a,inspectSource=inspectSource$2,noop$3=function(){},construct=getBuiltIn$3("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec=uncurryThis$4(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.test(noop$3),isConstructorModern=function(t){if(!isCallable$1(t))return!1;try{return construct(noop$3,[],t),!0}catch(t){return!1}},isConstructorLegacy=function(t){if(!isCallable$1(t))return!1;switch(classof$1(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec(constructorRegExp,inspectSource(t))}catch(t){return!0}};isConstructorLegacy.sham=!0;var isConstructor$1=!construct||fails$4((function(){var t;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern((function(){t=!0}))||t}))?isConstructorLegacy:isConstructorModern,DESCRIPTORS$2=descriptors,definePropertyModule=objectDefineProperty,createPropertyDescriptor$1=createPropertyDescriptor$5,createProperty$1=function(t,e,r){DESCRIPTORS$2?definePropertyModule.f(t,e,createPropertyDescriptor$1(0,r)):t[e]=r},call=functionCall,hasOwn$1=hasOwnProperty_1,isPrototypeOf=objectIsPrototypeOf,regExpFlags=regexpFlags,RegExpPrototype=RegExp.prototype,regexpGetFlags=function(t){var e=t.flags;return void 0!==e||"flags"in RegExpPrototype||hasOwn$1(t,"flags")||!isPrototypeOf(RegExpPrototype,t)?e:call(regExpFlags,t)},fails$3=fails$m,createPropertyDescriptor=createPropertyDescriptor$5,errorStackInstallable=!fails$3((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",createPropertyDescriptor(1,7)),7!==t.stack)})),$$3=_export,global$1=global$n,getBuiltIn$2=getBuiltIn$a,uncurryThis$3=functionUncurryThis,fails$2=fails$m,uid=uid$4,isCallable=isCallable$i,isConstructor=isConstructor$1,isNullOrUndefined=isNullOrUndefined$4,isObject=isObject$a,isSymbol=isSymbol$3,iterate=iterate$5,anObject=anObject$a,classof=classof$6,hasOwn=hasOwnProperty_1,createProperty=createProperty$1,createNonEnumerableProperty=createNonEnumerableProperty$4,lengthOfArrayLike=lengthOfArrayLike$9,validateArgumentsLength$4=validateArgumentsLength$7,getRegExpFlags=regexpGetFlags,MapHelpers=mapHelpers,SetHelpers=setHelpers,setIterate=setIterate$1,detachTransferable=detachTransferable$2,ERROR_STACK_INSTALLABLE=errorStackInstallable,PROPER_STRUCTURED_CLONE_TRANSFER=structuredCloneProperTransfer,Object$1=global$1.Object,Array$1=global$1.Array,Date$1=global$1.Date,Error$1=global$1.Error,TypeError$1=global$1.TypeError,PerformanceMark=global$1.PerformanceMark,DOMException=getBuiltIn$2("DOMException"),Map$1=MapHelpers.Map,mapHas=MapHelpers.has,mapGet=MapHelpers.get,mapSet=MapHelpers.set,Set$1=SetHelpers.Set,setAdd=SetHelpers.add,setHas=SetHelpers.has,objectKeys=getBuiltIn$2("Object","keys"),push$1=uncurryThis$3([].push),thisBooleanValue=uncurryThis$3((!0).valueOf),thisNumberValue=uncurryThis$3(1..valueOf),thisStringValue=uncurryThis$3("".valueOf),thisTimeValue=uncurryThis$3(Date$1.prototype.getTime),PERFORMANCE_MARK=uid("structuredClone"),DATA_CLONE_ERROR="DataCloneError",TRANSFERRING="Transferring",checkBasicSemantic=function(t){return!fails$2((function(){var e=new global$1.Set([7]),r=t(e),n=t(Object$1(7));return r===e||!r.has(7)||!isObject(n)||7!=+n}))&&t},checkErrorsCloning=function(t,e){return!fails$2((function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)}))},checkNewErrorsCloningSemantic=function(t){return!fails$2((function(){var e=t(new global$1.AggregateError([1],PERFORMANCE_MARK,{cause:3}));return"AggregateError"!==e.name||1!==e.errors[0]||e.message!==PERFORMANCE_MARK||3!==e.cause}))},nativeStructuredClone=global$1.structuredClone,FORCED_REPLACEMENT=!checkErrorsCloning(nativeStructuredClone,Error$1)||!checkErrorsCloning(nativeStructuredClone,DOMException)||!checkNewErrorsCloningSemantic(nativeStructuredClone),structuredCloneFromMark=!nativeStructuredClone&&checkBasicSemantic((function(t){return new PerformanceMark(PERFORMANCE_MARK,{detail:t}).detail})),nativeRestrictedStructuredClone=checkBasicSemantic(nativeStructuredClone)||structuredCloneFromMark,throwUncloneable=function(t){throw new DOMException("Uncloneable type: "+t,DATA_CLONE_ERROR)},throwUnpolyfillable=function(t,e){throw new DOMException((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",DATA_CLONE_ERROR)},tryNativeRestrictedStructuredClone=function(t,e){return nativeRestrictedStructuredClone||throwUnpolyfillable(e),nativeRestrictedStructuredClone(t)},createDataTransfer=function(){var t;try{t=new global$1.DataTransfer}catch(e){try{t=new global$1.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null},cloneBuffer=function(t,e,r){if(mapHas(e,t))return mapGet(e,t);var n,i,a,o,s,l;if("SharedArrayBuffer"===(r||classof(t)))n=nativeRestrictedStructuredClone?nativeRestrictedStructuredClone(t):t;else{var c=global$1.DataView;c||isCallable(t.slice)||throwUnpolyfillable("ArrayBuffer");try{if(isCallable(t.slice)&&!t.resizable)n=t.slice(0);else{i=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(i,a),o=new c(t),s=new c(n);for(l=0;l<i;l++)s.setUint8(l,o.getUint8(l))}}catch(t){throw new DOMException("ArrayBuffer is detached",DATA_CLONE_ERROR)}}return mapSet(e,t,n),n},cloneView=function(t,e,r,n,i){var a=global$1[e];return isObject(a)||throwUnpolyfillable(e),new a(cloneBuffer(t.buffer,i),r,n)},structuredCloneInternal=function(t,e){if(isSymbol(t)&&throwUncloneable("Symbol"),!isObject(t))return t;if(e){if(mapHas(e,t))return mapGet(e,t)}else e=new Map$1;var r,n,i,a,o,s,l,c,u=classof(t);switch(u){case"Array":i=Array$1(lengthOfArrayLike(t));break;case"Object":i={};break;case"Map":i=new Map$1;break;case"Set":i=new Set$1;break;case"RegExp":i=new RegExp(t.source,getRegExpFlags(t));break;case"Error":switch(n=t.name){case"AggregateError":i=new(getBuiltIn$2(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(getBuiltIn$2(n));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(getBuiltIn$2("WebAssembly",n));break;default:i=new Error$1}break;case"DOMException":i=new DOMException(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=cloneBuffer(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":s="DataView"===u?t.byteLength:t.length,i=cloneView(t,u,t.byteOffset,s,e);break;case"DOMQuad":try{i=new DOMQuad(structuredCloneInternal(t.p1,e),structuredCloneInternal(t.p2,e),structuredCloneInternal(t.p3,e),structuredCloneInternal(t.p4,e))}catch(e){i=tryNativeRestrictedStructuredClone(t,u)}break;case"File":if(nativeRestrictedStructuredClone)try{i=nativeRestrictedStructuredClone(t),classof(i)!==u&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||throwUnpolyfillable(u);break;case"FileList":if(a=createDataTransfer()){for(o=0,s=lengthOfArrayLike(t);o<s;o++)a.items.add(structuredCloneInternal(t[o],e));i=a.files}else i=tryNativeRestrictedStructuredClone(t,u);break;case"ImageData":try{i=new ImageData(structuredCloneInternal(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){i=tryNativeRestrictedStructuredClone(t,u)}break;default:if(nativeRestrictedStructuredClone)i=nativeRestrictedStructuredClone(t);else switch(u){case"BigInt":i=Object$1(t.valueOf());break;case"Boolean":i=Object$1(thisBooleanValue(t));break;case"Number":i=Object$1(thisNumberValue(t));break;case"String":i=Object$1(thisStringValue(t));break;case"Date":i=new Date$1(thisTimeValue(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){throwUnpolyfillable(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=global$1[u];try{i=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){throwUnpolyfillable(u)}break;case"DOMRect":case"DOMRectReadOnly":r=global$1[u];try{i=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){throwUnpolyfillable(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=global$1[u];try{i=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){throwUnpolyfillable(u)}break;case"AudioData":case"VideoFrame":isCallable(t.clone)||throwUnpolyfillable(u);try{i=t.clone()}catch(t){throwUncloneable(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":throwUnpolyfillable(u);default:throwUncloneable(u)}}switch(mapSet(e,t,i),u){case"Array":case"Object":for(l=objectKeys(t),o=0,s=lengthOfArrayLike(l);o<s;o++)c=l[o],createProperty(i,c,structuredCloneInternal(t[c],e));break;case"Map":t.forEach((function(t,r){mapSet(i,structuredCloneInternal(r,e),structuredCloneInternal(t,e))}));break;case"Set":t.forEach((function(t){setAdd(i,structuredCloneInternal(t,e))}));break;case"Error":createNonEnumerableProperty(i,"message",structuredCloneInternal(t.message,e)),hasOwn(t,"cause")&&createNonEnumerableProperty(i,"cause",structuredCloneInternal(t.cause,e)),"AggregateError"===n?i.errors=structuredCloneInternal(t.errors,e):"SuppressedError"===n&&(i.error=structuredCloneInternal(t.error,e),i.suppressed=structuredCloneInternal(t.suppressed,e));case"DOMException":ERROR_STACK_INSTALLABLE&&createNonEnumerableProperty(i,"stack",structuredCloneInternal(t.stack,e))}return i},tryToTransfer=function(t,e){if(!isObject(t))throw new TypeError$1("Transfer option cannot be converted to a sequence");var r=[];iterate(t,(function(t){push$1(r,anObject(t))}));for(var n,i,a,o,s,l=0,c=lengthOfArrayLike(r),u=new Set$1;l<c;){if(n=r[l++],"ArrayBuffer"===(i=classof(n))?setHas(u,n):mapHas(e,n))throw new DOMException("Duplicate transferable",DATA_CLONE_ERROR);if("ArrayBuffer"!==i){if(PROPER_STRUCTURED_CLONE_TRANSFER)o=nativeStructuredClone(n,{transfer:[n]});else switch(i){case"ImageBitmap":a=global$1.OffscreenCanvas,isConstructor(a)||throwUnpolyfillable(i,TRANSFERRING);try{(s=new a(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),o=s.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":isCallable(n.clone)&&isCallable(n.close)||throwUnpolyfillable(i,TRANSFERRING);try{o=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":throwUnpolyfillable(i,TRANSFERRING)}if(void 0===o)throw new DOMException("This object cannot be transferred: "+i,DATA_CLONE_ERROR);mapSet(e,n,o)}else setAdd(u,n)}return u},detachBuffers=function(t){setIterate(t,(function(t){PROPER_STRUCTURED_CLONE_TRANSFER?nativeRestrictedStructuredClone(t,{transfer:[t]}):isCallable(t.transfer)?t.transfer():detachTransferable?detachTransferable(t):throwUnpolyfillable("ArrayBuffer",TRANSFERRING)}))};$$3({global:!0,enumerable:!0,sham:!PROPER_STRUCTURED_CLONE_TRANSFER,forced:FORCED_REPLACEMENT},{structuredClone:function(t){var e,r,n=validateArgumentsLength$4(arguments.length,1)>1&&!isNullOrUndefined(arguments[1])?anObject(arguments[1]):void 0,i=n?n.transfer:void 0;void 0!==i&&(e=new Map$1,r=tryToTransfer(i,e));var a=structuredCloneInternal(t,e);return r&&detachBuffers(r),a}});var fails$1=fails$m,wellKnownSymbol=wellKnownSymbol$8,DESCRIPTORS$1=descriptors,IS_PURE=isPure,ITERATOR=wellKnownSymbol("iterator"),urlConstructorDetection=!fails$1((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach((function(t,r){e.delete("b"),n+=r+t})),r.delete("a",2),r.delete("b",void 0),IS_PURE&&(!t.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!e.size&&(IS_PURE||!DESCRIPTORS$1)||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[ITERATOR]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host})),$$2=_export,getBuiltIn$1=getBuiltIn$a,fails=fails$m,validateArgumentsLength$3=validateArgumentsLength$7,toString$3=toString$7,USE_NATIVE_URL=urlConstructorDetection,URL$2=getBuiltIn$1("URL"),THROWS_WITHOUT_ARGUMENTS=USE_NATIVE_URL&&fails((function(){URL$2.canParse()})),WRONG_ARITY=fails((function(){return 1!==URL$2.canParse.length}));$$2({target:"URL",stat:!0,forced:!THROWS_WITHOUT_ARGUMENTS||WRONG_ARITY},{canParse:function(t){var e=validateArgumentsLength$3(arguments.length,1),r=toString$3(t),n=e<2||void 0===arguments[1]?void 0:toString$3(arguments[1]);try{return!!new URL$2(r,n)}catch(t){return!1}}});var $$1=_export,getBuiltIn=getBuiltIn$a,validateArgumentsLength$2=validateArgumentsLength$7,toString$2=toString$7,URL$1=getBuiltIn("URL");$$1({target:"URL",stat:!0},{parse:function(t){var e=validateArgumentsLength$2(arguments.length,1),r=toString$2(t),n=e<2||void 0===arguments[1]?void 0:toString$2(arguments[1]);try{return new URL$1(r,n)}catch(t){return null}}});var defineBuiltIn$1=defineBuiltIn$4,uncurryThis$2=functionUncurryThis,toString$1=toString$7,validateArgumentsLength$1=validateArgumentsLength$7,$URLSearchParams$1=URLSearchParams,URLSearchParamsPrototype$2=$URLSearchParams$1.prototype,append$2=uncurryThis$2(URLSearchParamsPrototype$2.append),$delete=uncurryThis$2(URLSearchParamsPrototype$2.delete),forEach$1=uncurryThis$2(URLSearchParamsPrototype$2.forEach),push=uncurryThis$2([].push),params$1=new $URLSearchParams$1("a=1&a=2&b=3");params$1.delete("a",1),params$1.delete("b",void 0),params$1+""!="a=2"&&defineBuiltIn$1(URLSearchParamsPrototype$2,"delete",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $delete(this,t);var n=[];forEach$1(this,(function(t,e){push(n,{key:e,value:t})})),validateArgumentsLength$1(e,1);for(var i,a=toString$1(t),o=toString$1(r),s=0,l=0,c=!1,u=n.length;s<u;)i=n[s++],c||i.key===a?(c=!0,$delete(this,i.key)):l++;for(;l<u;)(i=n[l++]).key===a&&i.value===o||append$2(this,i.key,i.value)}),{enumerable:!0,unsafe:!0});var defineBuiltIn=defineBuiltIn$4,uncurryThis$1=functionUncurryThis,toString=toString$7,validateArgumentsLength=validateArgumentsLength$7,$URLSearchParams=URLSearchParams,URLSearchParamsPrototype$1=$URLSearchParams.prototype,getAll=uncurryThis$1(URLSearchParamsPrototype$1.getAll),$has=uncurryThis$1(URLSearchParamsPrototype$1.has),params=new $URLSearchParams("a=1");!params.has("a",2)&&params.has("a",void 0)||defineBuiltIn(URLSearchParamsPrototype$1,"has",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $has(this,t);var n=getAll(this,t);validateArgumentsLength(e,1);for(var i=toString(r),a=0;a<n.length;)if(n[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0});var DESCRIPTORS=descriptors,uncurryThis=functionUncurryThis,defineBuiltInAccessor=defineBuiltInAccessor$4,URLSearchParamsPrototype=URLSearchParams.prototype,forEach=uncurryThis(URLSearchParamsPrototype.forEach);DESCRIPTORS&&!("size"in URLSearchParamsPrototype)&&defineBuiltInAccessor(URLSearchParamsPrototype,"size",{get:function(){var t=0;return forEach(this,(function(){t++})),t},configurable:!0,enumerable:!0});const elementMap=new Map;var Data={set(t,e,r){elementMap.has(t)||elementMap.set(t,new Map);const n=elementMap.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>elementMap.has(t)&&elementMap.get(t).get(e)||null,remove(t,e){if(!elementMap.has(t))return;const r=elementMap.get(t);r.delete(e),0===r.size&&elementMap.delete(t)}};const MILLISECONDS_MULTIPLIER=1e3,TRANSITION_END="transitionend",parseSelector=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),toType=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),getTransitionDurationFromElement=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),i=Number.parseFloat(r);return n||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0},triggerTransitionEnd=t=>{t.dispatchEvent(new Event(TRANSITION_END))},isElement=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),getElement=t=>isElement(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(parseSelector(t)):null,isVisible=t=>{if(!isElement(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e},isDisabled=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),reflow=t=>{t.offsetHeight},getjQuery=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,DOMContentLoadedCallbacks=[],onDOMContentLoaded=t=>{"loading"===document.readyState?(DOMContentLoadedCallbacks.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of DOMContentLoadedCallbacks)t()})),DOMContentLoadedCallbacks.push(t)):t()},isRTL=()=>"rtl"===document.documentElement.dir,defineJQueryPlugin=t=>{onDOMContentLoaded((()=>{const e=getjQuery();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}}))},execute=(t,e=[],r=t)=>"function"==typeof t?t(...e):r,executeAfterTransition=(t,e,r=!0)=>{if(!r)return void execute(t);const n=getTransitionDurationFromElement(e)+5;let i=!1;const a=({target:r})=>{r===e&&(i=!0,e.removeEventListener(TRANSITION_END,a),execute(t))};e.addEventListener(TRANSITION_END,a),setTimeout((()=>{i||triggerTransitionEnd(e)}),n)},getNextActiveElement=(t,e,r,n)=>{const i=t.length;let a=t.indexOf(e);return-1===a?!r&&n?t[i-1]:t[0]:(a+=r?1:-1,n&&(a=(a+i)%i),t[Math.max(0,Math.min(a,i-1))])},namespaceRegex=/[^.]*(?=\..*)\.|.*/,stripNameRegex=/\..*/,stripUidRegex=/::\d+$/,eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"},nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function makeEventUid(t,e){return e&&`${e}::${uidEvent++}`||t.uidEvent||uidEvent++}function getElementEvents(t){const e=makeEventUid(t);return t.uidEvent=e,eventRegistry[e]=eventRegistry[e]||{},eventRegistry[e]}function bootstrapHandler(t,e){return function r(n){return hydrateObj(n,{delegateTarget:t}),r.oneOff&&EventHandler.off(t,n.type,e),e.apply(t,[n])}}function bootstrapDelegationHandler(t,e,r){return function n(i){const a=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const s of a)if(s===o)return hydrateObj(i,{delegateTarget:o}),n.oneOff&&EventHandler.off(t,i.type,e,r),r.apply(o,[i])}}function findHandler(t,e,r=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===r))}function normalizeParameters(t,e,r){const n="string"==typeof e,i=n?r:e||r;let a=getTypeEvent(t);return nativeEvents.has(a)||(a=t),[n,i,a]}function addHandler(t,e,r,n,i){if("string"!=typeof e||!t)return;let[a,o,s]=normalizeParameters(e,r,n);if(e in customEvents){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o=t(o)}const l=getElementEvents(t),c=l[s]||(l[s]={}),u=findHandler(c,o,a?r:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=makeEventUid(o,e.replace(namespaceRegex,"")),d=a?bootstrapDelegationHandler(t,r,o):bootstrapHandler(t,o);d.delegationSelector=a?r:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(s,d,a)}function removeHandler(t,e,r,n,i){const a=findHandler(e[r],n,i);a&&(t.removeEventListener(r,a,Boolean(i)),delete e[r][a.uidEvent])}function removeNamespacedHandlers(t,e,r,n){const i=e[r]||{};for(const[a,o]of Object.entries(i))a.includes(n)&&removeHandler(t,e,r,o.callable,o.delegationSelector)}function getTypeEvent(t){return t=t.replace(stripNameRegex,""),customEvents[t]||t}const EventHandler={on(t,e,r,n){addHandler(t,e,r,n,!1)},one(t,e,r,n){addHandler(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[i,a,o]=normalizeParameters(e,r,n),s=o!==e,l=getElementEvents(t),c=l[o]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(l))removeNamespacedHandlers(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const i=r.replace(stripUidRegex,"");s&&!e.includes(i)||removeHandler(t,l,o,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;removeHandler(t,l,o,a,i?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=getjQuery();let i=null,a=!0,o=!0,s=!1;e!==getTypeEvent(e)&&n&&(i=n.Event(e,r),n(t).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());const l=hydrateObj(new Event(e,{bubbles:a,cancelable:!0}),r);return s&&l.preventDefault(),o&&t.dispatchEvent(l),l.defaultPrevented&&i&&i.preventDefault(),l}};function hydrateObj(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function normalizeData(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function normalizeDataKey(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Manipulator={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${normalizeDataKey(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${normalizeDataKey(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=normalizeData(t.dataset[n])}return e},getDataAttribute:(t,e)=>normalizeData(t.getAttribute(`data-bs-${normalizeDataKey(e)}`))};class Config{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=isElement(e)?Manipulator.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...isElement(e)?Manipulator.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],i=isElement(e)?"element":toType(e);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)}}}const VERSION="5.3.3";class BaseComponent extends Config{constructor(t,e){super(),(t=getElement(t))&&(this._element=t,this._config=this._getConfig(e),Data.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Data.remove(this._element,this.constructor.DATA_KEY),EventHandler.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){executeAfterTransition(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Data.get(getElement(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const NAME$3="button",DATA_KEY$2="bs.button",EVENT_KEY$3=`.${DATA_KEY$2}`,DATA_API_KEY$2=".data-api",CLASS_NAME_ACTIVE$1="active",SELECTOR_DATA_TOGGLE$1='[data-bs-toggle="button"]',EVENT_CLICK_DATA_API$2=`click${EVENT_KEY$3}.data-api`;class Button extends BaseComponent{static get NAME(){return NAME$3}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Button.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}EventHandler.on(document,EVENT_CLICK_DATA_API$2,SELECTOR_DATA_TOGGLE$1,(t=>{t.preventDefault();const e=t.target.closest(SELECTOR_DATA_TOGGLE$1);Button.getOrCreateInstance(e).toggle()})),defineJQueryPlugin(Button);const getSelector=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map((t=>parseSelector(t))).join(","):null},SelectorEngine={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!isDisabled(t)&&isVisible(t)))},getSelectorFromElement(t){const e=getSelector(t);return e&&SelectorEngine.findOne(e)?e:null},getElementFromSelector(t){const e=getSelector(t);return e?SelectorEngine.findOne(e):null},getMultipleElementsFromSelector(t){const e=getSelector(t);return e?SelectorEngine.find(e):[]}},NAME$2="swipe",EVENT_KEY$2=".bs.swipe",EVENT_TOUCHSTART="touchstart.bs.swipe",EVENT_TOUCHMOVE="touchmove.bs.swipe",EVENT_TOUCHEND="touchend.bs.swipe",EVENT_POINTERDOWN="pointerdown.bs.swipe",EVENT_POINTERUP="pointerup.bs.swipe",POINTER_TYPE_TOUCH="touch",POINTER_TYPE_PEN="pen",CLASS_NAME_POINTER_EVENT="pointer-event",SWIPE_THRESHOLD=40,Default$2={endCallback:null,leftCallback:null,rightCallback:null},DefaultType$2={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Swipe extends Config{constructor(t,e){super(),this._element=t,t&&Swipe.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Default$2}static get DefaultType(){return DefaultType$2}static get NAME(){return NAME$2}dispose(){EventHandler.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),execute(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&execute(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(EventHandler.on(this._element,EVENT_POINTERDOWN,(t=>this._start(t))),EventHandler.on(this._element,EVENT_POINTERUP,(t=>this._end(t))),this._element.classList.add("pointer-event")):(EventHandler.on(this._element,EVENT_TOUCHSTART,(t=>this._start(t))),EventHandler.on(this._element,EVENT_TOUCHMOVE,(t=>this._move(t))),EventHandler.on(this._element,EVENT_TOUCHEND,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const NAME$1="carousel",DATA_KEY$1="bs.carousel",EVENT_KEY$1=`.${DATA_KEY$1}`,DATA_API_KEY$1=".data-api",ARROW_LEFT_KEY="ArrowLeft",ARROW_RIGHT_KEY="ArrowRight",TOUCHEVENT_COMPAT_WAIT=500,ORDER_NEXT="next",ORDER_PREV="prev",DIRECTION_LEFT="left",DIRECTION_RIGHT="right",EVENT_SLIDE=`slide${EVENT_KEY$1}`,EVENT_SLID=`slid${EVENT_KEY$1}`,EVENT_KEYDOWN=`keydown${EVENT_KEY$1}`,EVENT_MOUSEENTER=`mouseenter${EVENT_KEY$1}`,EVENT_MOUSELEAVE=`mouseleave${EVENT_KEY$1}`,EVENT_DRAG_START=`dragstart${EVENT_KEY$1}`,EVENT_LOAD_DATA_API=`load${EVENT_KEY$1}.data-api`,EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$1}.data-api`,CLASS_NAME_CAROUSEL="carousel",CLASS_NAME_ACTIVE="active",CLASS_NAME_SLIDE="slide",CLASS_NAME_END="carousel-item-end",CLASS_NAME_START="carousel-item-start",CLASS_NAME_NEXT="carousel-item-next",CLASS_NAME_PREV="carousel-item-prev",SELECTOR_ACTIVE=".active",SELECTOR_ITEM=".carousel-item",SELECTOR_ACTIVE_ITEM=".active.carousel-item",SELECTOR_ITEM_IMG=".carousel-item img",SELECTOR_INDICATORS=".carousel-indicators",SELECTOR_DATA_SLIDE="[data-bs-slide], [data-bs-slide-to]",SELECTOR_DATA_RIDE='[data-bs-ride="carousel"]',KEY_TO_DIRECTION={[ARROW_LEFT_KEY]:"right",[ARROW_RIGHT_KEY]:"left"},Default$1={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},DefaultType$1={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Carousel extends BaseComponent{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=SelectorEngine.findOne(SELECTOR_INDICATORS,this._element),this._addEventListeners(),"carousel"===this._config.ride&&this.cycle()}static get Default(){return Default$1}static get DefaultType(){return DefaultType$1}static get NAME(){return NAME$1}next(){this._slide("next")}nextWhenVisible(){!document.hidden&&isVisible(this._element)&&this.next()}prev(){this._slide("prev")}pause(){this._isSliding&&triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?EventHandler.one(this._element,EVENT_SLID,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void EventHandler.one(this._element,EVENT_SLID,(()=>this.to(t)));const r=this._getItemIndex(this._getActive());if(r===t)return;const n=t>r?"next":"prev";this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&EventHandler.on(this._element,EVENT_KEYDOWN,(t=>this._keydown(t))),"hover"===this._config.pause&&(EventHandler.on(this._element,EVENT_MOUSEENTER,(()=>this.pause())),EventHandler.on(this._element,EVENT_MOUSELEAVE,(()=>this._maybeEnableCycle()))),this._config.touch&&Swipe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of SelectorEngine.find(SELECTOR_ITEM_IMG,this._element))EventHandler.on(t,EVENT_DRAG_START,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder("left")),rightCallback:()=>this._slide(this._directionToOrder("right")),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Swipe(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=KEY_TO_DIRECTION[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=SelectorEngine.findOne(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");const r=SelectorEngine.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add("active"),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),n="next"===t,i=e||getNextActiveElement(this._getItems(),r,n,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),o=e=>EventHandler.trigger(this._element,e,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(o(EVENT_SLIDE).defaultPrevented)return;if(!r||!i)return;const s=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const l=n?CLASS_NAME_START:CLASS_NAME_END,c=n?CLASS_NAME_NEXT:CLASS_NAME_PREV;i.classList.add(c),reflow(i),r.classList.add(l),i.classList.add(l);this._queueCallback((()=>{i.classList.remove(l,c),i.classList.add("active"),r.classList.remove("active",c,l),this._isSliding=!1,o(EVENT_SLID)}),r,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element)}_getItems(){return SelectorEngine.find(SELECTOR_ITEM,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return isRTL()?"left"===t?"prev":"next":"left"===t?"next":"prev"}_orderToDirection(t){return isRTL()?"prev"===t?"left":"right":"prev"===t?"right":"left"}static jQueryInterface(t){return this.each((function(){const e=Carousel.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_SLIDE,(function(t){const e=SelectorEngine.getElementFromSelector(this);if(!e||!e.classList.contains("carousel"))return;t.preventDefault();const r=Carousel.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(r.to(n),void r._maybeEnableCycle()):"next"===Manipulator.getDataAttribute(this,"slide")?(r.next(),void r._maybeEnableCycle()):(r.prev(),void r._maybeEnableCycle())})),EventHandler.on(window,EVENT_LOAD_DATA_API,(()=>{const t=SelectorEngine.find(SELECTOR_DATA_RIDE);for(const e of t)Carousel.getOrCreateInstance(e)})),defineJQueryPlugin(Carousel);const NAME="collapse",DATA_KEY="bs.collapse",EVENT_KEY=`.${DATA_KEY}`,DATA_API_KEY=".data-api",EVENT_SHOW=`show${EVENT_KEY}`,EVENT_SHOWN=`shown${EVENT_KEY}`,EVENT_HIDE=`hide${EVENT_KEY}`,EVENT_HIDDEN=`hidden${EVENT_KEY}`,EVENT_CLICK_DATA_API=`click${EVENT_KEY}.data-api`,CLASS_NAME_SHOW="show",CLASS_NAME_COLLAPSE="collapse",CLASS_NAME_COLLAPSING="collapsing",CLASS_NAME_COLLAPSED="collapsed",CLASS_NAME_DEEPER_CHILDREN=":scope .collapse .collapse",CLASS_NAME_HORIZONTAL="collapse-horizontal",WIDTH="width",HEIGHT="height",SELECTOR_ACTIVES=".collapse.show, .collapse.collapsing",SELECTOR_DATA_TOGGLE='[data-bs-toggle="collapse"]',Default={parent:null,toggle:!0},DefaultType={parent:"(null|element)",toggle:"boolean"};class Collapse extends BaseComponent{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=SelectorEngine.find(SELECTOR_DATA_TOGGLE);for(const t of r){const e=SelectorEngine.getSelectorFromElement(t),r=SelectorEngine.find(e).filter((t=>t===this._element));null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((t=>t!==this._element)).map((t=>Collapse.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(EventHandler.trigger(this._element,EVENT_SHOW).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[e]="",EventHandler.trigger(this._element,EVENT_SHOWN)}),this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(EventHandler.trigger(this._element,EVENT_HIDE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,reflow(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");for(const t of this._triggerArray){const e=SelectorEngine.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),EventHandler.trigger(this._element,EVENT_HIDDEN)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains("show")}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=getElement(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?WIDTH:HEIGHT}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);for(const e of t){const t=SelectorEngine.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);return SelectorEngine.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const r=Collapse.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}}))}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(t,{toggle:!1}).toggle()})),defineJQueryPlugin(Collapse);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(e$2&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o$3.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o$3.set(e,t))}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$2=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new n$2(r,t,s$2)},S$1=(t,e)=>{if(e$2)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const r of e){const e=document.createElement("style"),n=t$1.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return r$3(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,e)=>t,u$1={toAttribute(t,e){switch(e){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f$1=(t,e)=>!i$1(t,e),y$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let b$1=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y$2){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&e$1(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=r$2(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const a=n?.call(this);i.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$2}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,e=[...h$1(t),...o$2(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c$2(t))}else void 0!==t&&e.push(c$2(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:u$1).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=n,this[n]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??f$1)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b$1}),(a$1.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n=`<${o$1}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y$1=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x$1=y$1(1),b=y$1(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(e):e}const P=(t,r)=>{const i=t.length-1,a=[];let o,s=2===r?"<svg>":"",l=f;for(let r=0;r<i;r++){const i=t[r];let c,u,d=-1,y=0;for(;y<i.length&&(l.lastIndex=y,u=l.exec(i),null!==u);)y=l.lastIndex,l===f?"!--"===u[1]?l=v:void 0!==u[1]?l=_:void 0!==u[2]?($.test(u[2])&&(o=RegExp("</"+u[2],"g")),l=m):void 0!==u[3]&&(l=m):l===m?">"===u[0]?(l=o??f,d=-1):void 0===u[1]?d=-2:(d=l.lastIndex-u[2].length,c=u[1],l=void 0===u[3]?m:'"'===u[3]?g:p):l===g||l===p?l=m:l===v||l===_?l=f:(l=m,o=void 0);const b=l===m&&t[r+1].startsWith("/>")?" ":"";s+=l===f?i+n:d>=0?(a.push(c),i.slice(0,d)+e+i.slice(d)+h+b):i+h+(-2===d?r:b)}return[C(t,s+(t[i]||"<?>")+(2===r?"</svg>":"")),a]};class V{constructor({strings:t,_$litType$:r},n){let a;this.parts=[];let o=0,s=0;const c=t.length-1,u=this.parts,[d,p]=P(t,r);if(this.el=V.createElement(d,n),E.currentNode=this.el.content,2===r){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=E.nextNode())&&u.length<c;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(e)){const e=p[s++],r=a.getAttribute(t).split(h),n=/([.?@])?(.*)/.exec(e);u.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?k:"?"===n[1]?H:"@"===n[1]?I:R}),a.removeAttribute(t)}else t.startsWith(h)&&(u.push({type:6,index:o}),a.removeAttribute(t));if($.test(a.tagName)){const t=a.textContent.split(h),e=t.length-1;if(e>0){a.textContent=i?i.emptyScript:"";for(let r=0;r<e;r++)a.append(t[r],l()),E.nextNode(),u.push({type:2,index:++o});a.append(t[e],l())}}}else if(8===a.nodeType)if(a.data===o$1)u.push({type:2,index:o});else{let t=-1;for(;-1!==(t=a.data.indexOf(h,t+1));)u.push({type:7,index:o}),t+=h.length-1}o++}}static createElement(t,e){const r=r$1.createElement("template");return r.innerHTML=t,r}}function N(t,e,r=t,n){if(e===w)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const a=c(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=N(t,i._$AS(t,e.values),i,n)),e}class S{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??r$1).importNode(e,!0);E.currentNode=n;let i=E.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new M(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new L(i,this,t)),this._$AV.push(e),s=r[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=r$1,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=V.createElement(C(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new S(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=A.get(t.strings);return void 0===e&&A.set(t.strings,e=new V(t)),e}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new M(this.S(l()),this.S(l()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=T}_$AI(t,e=this,r,n){const i=this.strings;let a=!1;if(void 0===i)t=N(this,t,e,0),a=!c(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{const n=t;let o,s;for(t=i[0],o=0;o<i.length-1;o++)s=N(this,n[r+o],e,o),s===w&&(s=this._$AH[o]),a||=!c(s)||s!==this._$AH[o],s===T?t=T:t!==T&&(t+=(s??"")+i[o+1]),this._$AH[o]=s}a&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??T)===w)return;const r=this._$AH,n=t===T&&r!==T||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==T&&(r===T||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.3");const j=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new M(e.insertBefore(l(),t),t,void 0,r??{})}return i._$AI(t),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;function ascending$2(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function descending$1(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function bisector(t){let e,r,n;function i(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<0?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=ascending$2,r=(e,r)=>ascending$2(t(e),r),n=(e,r)=>t(e)-r):(e=t===ascending$2||t===descending$1?t:zero$1,r=t,n=t),{left:i,center:function(t,e,r=0,a=t.length){const o=i(t,e,r,a-1);return o>r&&n(t[o-1],e)>-n(t[o],e)?o-1:o},right:function(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<=0?i=e+1:a=e}while(i<a)}return i}}}function zero$1(){return 0}function number$2(t){return null===t?NaN:+t}r?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.5");const ascendingBisect=bisector(ascending$2),bisectRight=ascendingBisect.right;function count(t,e){let r=0;for(let e of t)null!=e&&(e=+e)>=e&&++r;return r}function extent(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let i=-1;for(let a of t)null!=(a=e(a,++i,t))&&(void 0===r?a>=a&&(r=n=a):(r>a&&(r=a),n<a&&(n=a)))}return[r,n]}bisector(number$2).center;class Adder{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let n=0;n<this._n&&n<32;n++){const i=e[n],a=t+i,o=Math.abs(t)<Math.abs(i)?t-(a-i):i-(a-t);o&&(e[r++]=o),t=a}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e,r,n,i=this._n,a=0;if(i>0){for(a=t[--i];i>0&&(e=a,r=t[--i],a=e+r,n=r-(a-e),!n););i>0&&(n<0&&t[i-1]<0||n>0&&t[i-1]>0)&&(r=2*n,e=a+r,r==e-a&&(a=e))}return a}}function identity$7(t){return t}var array$3=Array.prototype,slice$1=array$3.slice;function constant$5(t){return()=>t}const e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function tickSpec(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),o=a>=e10?10:a>=e5?5:a>=e2?2:1;let s,l,c;return i<0?(c=Math.pow(10,-i)/o,s=Math.round(t*c),l=Math.round(e*c),s/c<t&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*o,s=Math.round(t/c),l=Math.round(e/c),s*c<t&&++s,l*c>e&&--l),l<s&&.5<=r&&r<2?tickSpec(t,e,2*r):[s,l,c]}function ticks(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,a,o]=n?tickSpec(e,t,r):tickSpec(t,e,r);if(!(a>=i))return[];const s=a-i+1,l=new Array(s);if(n)if(o<0)for(let t=0;t<s;++t)l[t]=(a-t)/-o;else for(let t=0;t<s;++t)l[t]=(a-t)*o;else if(o<0)for(let t=0;t<s;++t)l[t]=(i+t)/-o;else for(let t=0;t<s;++t)l[t]=(i+t)*o;return l}function tickIncrement(t,e,r){return tickSpec(t=+t,e=+e,r=+r)[2]}function tickStep(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?tickIncrement(e,t,r):tickIncrement(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}function nice(t,e,r){let n;for(;;){const i=tickIncrement(t,e,r);if(i===n||0===i||!isFinite(i))return[t,e];i>0?(t=Math.floor(t/i)*i,e=Math.ceil(e/i)*i):i<0&&(t=Math.ceil(t*i)/i,e=Math.floor(e*i)/i),n=i}}function thresholdSturges(t){return Math.max(1,Math.ceil(Math.log(count(t))/Math.LN2)+1)}function bin(){var t=identity$7,e=extent,r=thresholdSturges;function n(n){Array.isArray(n)||(n=Array.from(n));var i,a,o,s=n.length,l=new Array(s);for(i=0;i<s;++i)l[i]=t(n[i],i,n);var c=e(l),u=c[0],h=c[1],d=r(l,u,h);if(!Array.isArray(d)){const t=h,r=+d;if(e===extent&&([u,h]=nice(u,h,r)),(d=ticks(u,h,r))[0]<=u&&(o=tickIncrement(u,h,r)),d[d.length-1]>=h)if(t>=h&&e===extent){const t=tickIncrement(u,h,r);isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else d.pop()}for(var p=d.length,f=0,g=p;d[f]<=u;)++f;for(;d[g-1]>h;)--g;(f||g<p)&&(d=d.slice(f,g),p=g-f);var m,y=new Array(p+1);for(i=0;i<=p;++i)(m=y[i]=[]).x0=i>0?d[i-1]:u,m.x1=i<p?d[i]:h;if(isFinite(o)){if(o>0)for(i=0;i<s;++i)null!=(a=l[i])&&u<=a&&a<=h&&y[Math.min(p,Math.floor((a-u)/o))].push(n[i]);else if(o<0)for(i=0;i<s;++i)if(null!=(a=l[i])&&u<=a&&a<=h){const t=Math.floor((u-a)*o);y[Math.min(p,t+(d[t]<=a))].push(n[i])}}else for(i=0;i<s;++i)null!=(a=l[i])&&u<=a&&a<=h&&y[bisectRight(d,a,0,p)].push(n[i]);return y}return n.value=function(e){return arguments.length?(t="function"==typeof e?e:constant$5(e),n):t},n.domain=function(t){return arguments.length?(e="function"==typeof t?t:constant$5([t[0],t[1]]),n):e},n.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:constant$5(Array.isArray(t)?slice$1.call(t):t),n):r},n}function*flatten(t){for(const e of t)yield*e}function merge(t){return Array.from(flatten(t))}function range(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),a=new Array(i);++n<i;)a[n]=t+n*r;return a}function identity$6(t){return t}var top=1,right=2,bottom=3,left=4,epsilon$3=1e-6;function translateX(t){return"translate("+t+",0)"}function translateY(t){return"translate(0,"+t+")"}function number$1(t){return e=>+t(e)}function center(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function entering(){return!this.__axis}function axis(t,e){var r=[],n=null,i=null,a=6,o=6,s=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=t===top||t===left?-1:1,u=t===left||t===right?"x":"y",h=t===top||t===bottom?translateX:translateY;function d(d){var p=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,f=null==i?e.tickFormat?e.tickFormat.apply(e,r):identity$6:i,g=Math.max(a,0)+s,m=e.range(),y=+m[0]+l,b=+m[m.length-1]+l,$=(e.bandwidth?center:number$1)(e.copy(),l),v=d.selection?d.selection():d,w=v.selectAll(".domain").data([null]),x=v.selectAll(".tick").data(p,e).order(),E=x.exit(),S=x.enter().append("g").attr("class","tick"),_=x.select("line"),T=x.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(S),_=_.merge(S.append("line").attr("stroke","currentColor").attr(u+"2",c*a)),T=T.merge(S.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy",t===top?"0em":t===bottom?"0.71em":"0.32em")),d!==v&&(w=w.transition(d),x=x.transition(d),_=_.transition(d),T=T.transition(d),E=E.transition(d).attr("opacity",epsilon$3).attr("transform",(function(t){return isFinite(t=$(t))?h(t+l):this.getAttribute("transform")})),S.attr("opacity",epsilon$3).attr("transform",(function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:$(t))+l)}))),E.remove(),w.attr("d",t===left||t===right?o?"M"+c*o+","+y+"H"+l+"V"+b+"H"+c*o:"M"+l+","+y+"V"+b:o?"M"+y+","+c*o+"V"+l+"H"+b+"V"+c*o:"M"+y+","+l+"H"+b),x.attr("opacity",1).attr("transform",(function(t){return h($(t)+l)})),_.attr(u+"2",c*a),T.attr(u,c*g).text(f),v.filter(entering).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===right?"start":t===left?"end":"middle"),v.each((function(){this.__axis=$}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return r=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),d):r.slice()},d.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),d):n&&n.slice()},d.tickFormat=function(t){return arguments.length?(i=t,d):i},d.tickSize=function(t){return arguments.length?(a=o=+t,d):a},d.tickSizeInner=function(t){return arguments.length?(a=+t,d):a},d.tickSizeOuter=function(t){return arguments.length?(o=+t,d):o},d.tickPadding=function(t){return arguments.length?(s=+t,d):s},d.offset=function(t){return arguments.length?(l=+t,d):l},d}function axisRight(t){return axis(right,t)}function axisBottom(t){return axis(bottom,t)}function axisLeft(t){return axis(left,t)}var noop$2={value:()=>{}};function dispatch(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Dispatch(n)}function Dispatch(t){this._=t}function parseTypenames$1(t,e){return t.trim().split(/^|\s+/).map((function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function get$1(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function set$1(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=noop$2,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function(t,e){var r,n=this._,i=parseTypenames$1(t+"",n),a=-1,o=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(t=i[a]).type)n[r]=set$1(n[r],t.name,e);else if(null==e)for(r in n)n[r]=set$1(n[r],t.name,null);return this}for(;++a<o;)if((r=(t=i[a]).type)&&(r=get$1(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Dispatch(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var xhtml="http://www.w3.org/1999/xhtml",namespaces={svg:"http://www.w3.org/2000/svg",xhtml:xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),namespaces.hasOwnProperty(e)?{space:namespaces[e],local:t}:t}function creatorInherit(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===xhtml&&e.documentElement.namespaceURI===xhtml?e.createElement(t):e.createElementNS(r,t)}}function creatorFixed(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function creator(t){var e=namespace(t);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(t){return null==t?none:function(){return this.querySelector(t)}}function selection_select(t){"function"!=typeof t&&(t=selector(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o,s=e[i],l=s.length,c=n[i]=new Array(l),u=0;u<l;++u)(a=s[u])&&(o=t.call(a,a.__data__,u,s))&&("__data__"in a&&(o.__data__=a.__data__),c[u]=o);return new Selection$1(n,this._parents)}function array$2(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function empty(){return[]}function selectorAll(t){return null==t?empty:function(){return this.querySelectorAll(t)}}function arrayAll(t){return function(){return array$2(t.apply(this,arguments))}}function selection_selectAll(t){t="function"==typeof t?arrayAll(t):selectorAll(t);for(var e=this._groups,r=e.length,n=[],i=[],a=0;a<r;++a)for(var o,s=e[a],l=s.length,c=0;c<l;++c)(o=s[c])&&(n.push(t.call(o,o.__data__,c,s)),i.push(o));return new Selection$1(n,i)}function matcher(t){return function(){return this.matches(t)}}function childMatcher(t){return function(e){return e.matches(t)}}var find=Array.prototype.find;function childFind(t){return function(){return find.call(this.children,t)}}function childFirst(){return this.firstElementChild}function selection_selectChild(t){return this.select(null==t?childFirst:childFind("function"==typeof t?t:childMatcher(t)))}var filter=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(t){return function(){return filter.call(this.children,t)}}function selection_selectChildren(t){return this.selectAll(null==t?children:childrenFilter("function"==typeof t?t:childMatcher(t)))}function selection_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o=e[i],s=o.length,l=n[i]=[],c=0;c<s;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&l.push(a);return new Selection$1(n,this._parents)}function sparse(t){return new Array(t.length)}function selection_enter(){return new Selection$1(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function constant$4(t){return function(){return t}}function bindIndex(t,e,r,n,i,a){for(var o,s=0,l=e.length,c=a.length;s<c;++s)(o=e[s])?(o.__data__=a[s],n[s]=o):r[s]=new EnterNode(t,a[s]);for(;s<l;++s)(o=e[s])&&(i[s]=o)}function bindKey(t,e,r,n,i,a,o){var s,l,c,u=new Map,h=e.length,d=a.length,p=new Array(h);for(s=0;s<h;++s)(l=e[s])&&(p[s]=c=o.call(l,l.__data__,s,e)+"",u.has(c)?i[s]=l:u.set(c,l));for(s=0;s<d;++s)c=o.call(t,a[s],s,a)+"",(l=u.get(c))?(n[s]=l,l.__data__=a[s],u.delete(c)):r[s]=new EnterNode(t,a[s]);for(s=0;s<h;++s)(l=e[s])&&u.get(p[s])===l&&(i[s]=l)}function datum(t){return t.__data__}function selection_data(t,e){if(!arguments.length)return Array.from(this,datum);var r=e?bindKey:bindIndex,n=this._parents,i=this._groups;"function"!=typeof t&&(t=constant$4(t));for(var a=i.length,o=new Array(a),s=new Array(a),l=new Array(a),c=0;c<a;++c){var u=n[c],h=i[c],d=h.length,p=arraylike(t.call(u,u&&u.__data__,c,n)),f=p.length,g=s[c]=new Array(f),m=o[c]=new Array(f);r(u,h,g,m,l[c]=new Array(d),p,e);for(var y,b,$=0,v=0;$<f;++$)if(y=g[$]){for($>=v&&(v=$+1);!(b=m[v])&&++v<f;);y._next=b||null}}return(o=new Selection$1(o,n))._enter=s,o._exit=l,o}function arraylike(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function selection_exit(){return new Selection$1(this._exit||this._groups.map(sparse),this._parents)}function selection_join(t,e,r){var n=this.enter(),i=this,a=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?a.remove():r(a),n&&i?n.merge(i).order():i}function selection_merge(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,a=n.length,o=Math.min(i,a),s=new Array(i),l=0;l<o;++l)for(var c,u=r[l],h=n[l],d=u.length,p=s[l]=new Array(d),f=0;f<d;++f)(c=u[f]||h[f])&&(p[f]=c);for(;l<i;++l)s[l]=r[l];return new Selection$1(s,this._parents)}function selection_order(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],a=i.length-1,o=i[a];--a>=0;)(n=i[a])&&(o&&4^n.compareDocumentPosition(o)&&o.parentNode.insertBefore(n,o),o=n);return this}function selection_sort(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ascending$1);for(var r=this._groups,n=r.length,i=new Array(n),a=0;a<n;++a){for(var o,s=r[a],l=s.length,c=i[a]=new Array(l),u=0;u<l;++u)(o=s[u])&&(c[u]=o);c.sort(e)}return new Selection$1(i,this._parents).order()}function ascending$1(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function selection_call(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,a=n.length;i<a;++i){var o=n[i];if(o)return o}return null}function selection_size(){let t=0;for(const e of this)++t;return t}function selection_empty(){return!this.node()}function selection_each(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,a=e[r],o=0,s=a.length;o<s;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this}function attrRemove$1(t){return function(){this.removeAttribute(t)}}function attrRemoveNS$1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant$1(t,e){return function(){this.setAttribute(t,e)}}function attrConstantNS$1(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function attrFunction$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function attrFunctionNS$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function selection_attr(t,e){var r=namespace(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?attrRemoveNS$1:attrRemove$1:"function"==typeof e?r.local?attrFunctionNS$1:attrFunction$1:r.local?attrConstantNS$1:attrConstant$1)(r,e))}function defaultView(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function styleRemove$1(t){return function(){this.style.removeProperty(t)}}function styleConstant$1(t,e,r){return function(){this.style.setProperty(t,e,r)}}function styleFunction$1(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function selection_style(t,e,r){return arguments.length>1?this.each((null==e?styleRemove$1:"function"==typeof e?styleFunction$1:styleConstant$1)(t,e,null==r?"":r)):styleValue(this.node(),t)}function styleValue(t,e){return t.style.getPropertyValue(e)||defaultView(t).getComputedStyle(t,null).getPropertyValue(e)}function propertyRemove(t){return function(){delete this[t]}}function propertyConstant(t,e){return function(){this[t]=e}}function propertyFunction(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function selection_property(t,e){return arguments.length>1?this.each((null==e?propertyRemove:"function"==typeof e?propertyFunction:propertyConstant)(t,e)):this.node()[t]}function classArray(t){return t.trim().split(/^|\s+/)}function classList(t){return t.classList||new ClassList(t)}function ClassList(t){this._node=t,this._names=classArray(t.getAttribute("class")||"")}function classedAdd(t,e){for(var r=classList(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function classedRemove(t,e){for(var r=classList(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function classedTrue(t){return function(){classedAdd(this,t)}}function classedFalse(t){return function(){classedRemove(this,t)}}function classedFunction(t,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,t)}}function selection_classed(t,e){var r=classArray(t+"");if(arguments.length<2){for(var n=classList(this.node()),i=-1,a=r.length;++i<a;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?classedFunction:e?classedTrue:classedFalse)(r,e))}function textRemove(){this.textContent=""}function textConstant$1(t){return function(){this.textContent=t}}function textFunction$1(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function selection_text(t){return arguments.length?this.each(null==t?textRemove:("function"==typeof t?textFunction$1:textConstant$1)(t)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(t){return function(){this.innerHTML=t}}function htmlFunction(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function selection_html(t){return arguments.length?this.each(null==t?htmlRemove:("function"==typeof t?htmlFunction:htmlConstant)(t)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(t){var e="function"==typeof t?t:creator(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}function constantNull(){return null}function selection_insert(t,e){var r="function"==typeof t?t:creator(t),n=null==e?constantNull:"function"==typeof e?e:selector(e);return this.select((function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)}))}function remove(){var t=this.parentNode;t&&t.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_cloneDeep(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_clone(t){return this.select(t?selection_cloneDeep:selection_cloneShallow)}function selection_datum(t){return arguments.length?this.property("__data__",t):this.node().__data__}function contextListener(t){return function(e){t.call(this,e,this.__data__)}}function parseTypenames(t){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}}))}function onRemove(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,a=e.length;n<a;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function onAdd(t,e,r){return function(){var n,i=this.__on,a=contextListener(e);if(i)for(var o=0,s=i.length;o<s;++o)if((n=i[o]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),void(n.value=e);this.addEventListener(t.type,a,r),n={type:t.type,name:t.name,value:e,listener:a,options:r},i?i.push(n):this.__on=[n]}}function selection_on(t,e,r){var n,i,a=parseTypenames(t+""),o=a.length;if(!(arguments.length<2)){for(s=e?onAdd:onRemove,n=0;n<o;++n)this.each(s(a[n],e,r));return this}var s=this.node().__on;if(s)for(var l,c=0,u=s.length;c<u;++c)for(n=0,l=s[c];n<o;++n)if((i=a[n]).type===l.type&&i.name===l.name)return l.value}function dispatchEvent(t,e,r){var n=defaultView(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function dispatchConstant(t,e){return function(){return dispatchEvent(this,t,e)}}function dispatchFunction(t,e){return function(){return dispatchEvent(this,t,e.apply(this,arguments))}}function selection_dispatch(t,e){return this.each(("function"==typeof e?dispatchFunction:dispatchConstant)(t,e))}function*selection_iterator(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],a=0,o=i.length;a<o;++a)(n=i[a])&&(yield n)}EnterNode.prototype={constructor:EnterNode,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ClassList.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var root=[null];function Selection$1(t,e){this._groups=t,this._parents=e}function selection(){return new Selection$1([[document.documentElement]],root)}function selection_selection(){return this}function select(t){return"string"==typeof t?new Selection$1([[document.querySelector(t)]],[document.documentElement]):new Selection$1([[t]],root)}function sourceEvent(t){let e;for(;e=t.sourceEvent;)t=e;return t}function pointer(t,e){if(t=sourceEvent(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}Selection$1.prototype=selection.prototype={constructor:Selection$1,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};const nonpassive={passive:!1},nonpassivecapture={capture:!0,passive:!1};function nopropagation(t){t.stopImmediatePropagation()}function noevent(t){t.preventDefault(),t.stopImmediatePropagation()}function dragDisable(t){var e=t.document.documentElement,r=select(t).on("dragstart.drag",noevent,nonpassivecapture);"onselectstart"in e?r.on("selectstart.drag",noevent,nonpassivecapture):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function yesdrag(t,e){var r=t.document.documentElement,n=select(t).on("dragstart.drag",null);e&&(n.on("click.drag",noevent,nonpassivecapture),setTimeout((function(){n.on("click.drag",null)}),0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var constant$3=t=>()=>t;function DragEvent(t,{sourceEvent:e,subject:r,target:n,identifier:i,active:a,x:o,y:s,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function defaultFilter(t){return!t.ctrlKey&&!t.button}function defaultContainer(){return this.parentNode}function defaultSubject(t,e){return null==e?{x:t.x,y:t.y}:e}function defaultTouchable(){return navigator.maxTouchPoints||"ontouchstart"in this}function drag(){var t,e,r,n,i=defaultFilter,a=defaultContainer,o=defaultSubject,s=defaultTouchable,l={},c=dispatch("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",p).filter(s).on("touchstart.drag",m).on("touchmove.drag",y,nonpassive).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(o,s){if(!n&&i.call(this,o,s)){var l=$(this,a.call(this,o,s),o,s,"mouse");l&&(select(o.view).on("mousemove.drag",f,nonpassivecapture).on("mouseup.drag",g,nonpassivecapture),dragDisable(o.view),nopropagation(o),r=!1,t=o.clientX,e=o.clientY,l("start",o))}}function f(n){if(noevent(n),!r){var i=n.clientX-t,a=n.clientY-e;r=i*i+a*a>h}l.mouse("drag",n)}function g(t){select(t.view).on("mousemove.drag mouseup.drag",null),yesdrag(t.view,r),noevent(t),l.mouse("end",t)}function m(t,e){if(i.call(this,t,e)){var r,n,o=t.changedTouches,s=a.call(this,t,e),l=o.length;for(r=0;r<l;++r)(n=$(this,s,t,e,o[r].identifier,o[r]))&&(nopropagation(t),n("start",t,o[r]))}}function y(t){var e,r,n=t.changedTouches,i=n.length;for(e=0;e<i;++e)(r=l[n[e].identifier])&&(noevent(t),r("drag",t,n[e]))}function b(t){var e,r,i=t.changedTouches,a=i.length;for(n&&clearTimeout(n),n=setTimeout((function(){n=null}),500),e=0;e<a;++e)(r=l[i[e].identifier])&&(nopropagation(t),r("end",t,i[e]))}function $(t,e,r,n,i,a){var s,h,p,f=c.copy(),g=pointer(a||r,e);if(null!=(p=o.call(t,new DragEvent("beforestart",{sourceEvent:r,target:d,identifier:i,active:u,x:g[0],y:g[1],dx:0,dy:0,dispatch:f}),n)))return s=p.x-g[0]||0,h=p.y-g[1]||0,function r(a,o,c){var m,y=g;switch(a){case"start":l[i]=r,m=u++;break;case"end":delete l[i],--u;case"drag":g=pointer(c||o,e),m=u}f.call(a,t,new DragEvent(a,{sourceEvent:o,subject:p,target:d,identifier:i,active:m,x:g[0]+s,y:g[1]+h,dx:g[0]-y[0],dy:g[1]-y[1],dispatch:f}),n)}}return d.filter=function(t){return arguments.length?(i="function"==typeof t?t:constant$3(!!t),d):i},d.container=function(t){return arguments.length?(a="function"==typeof t?t:constant$3(t),d):a},d.subject=function(t){return arguments.length?(o="function"==typeof t?t:constant$3(t),d):o},d.touchable=function(t){return arguments.length?(s="function"==typeof t?t:constant$3(!!t),d):s},d.on=function(){var t=c.on.apply(c,arguments);return t===c?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}function define(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function extend(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function Color(){}DragEvent.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatHex8(){return this.rgb().formatHex8()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?rgbn(e):3===r?new Rgb(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?rgba(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):"transparent"===t?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,255&t,1)}function rgba(t,e,r,n){return n<=0&&(t=e=r=NaN),new Rgb(t,e,r,n)}function rgbConvert(t){return t instanceof Color||(t=color(t)),t?new Rgb((t=t.rgb()).r,t.g,t.b,t.opacity):new Rgb}function rgb(t,e,r,n){return 1===arguments.length?rgbConvert(t):new Rgb(t,e,r,null==n?1:n)}function Rgb(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`}function rgb_formatRgb(){const t=clampa(this.opacity);return`${1===t?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===t?")":`, ${t})`}`}function clampa(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function clampi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hex(t){return((t=clampi(t))<16?"0":"")+t.toString(16)}function hsla(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,r,n)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),o=NaN,s=a-i,l=(a+i)/2;return s?(o=e===a?(r-n)/s+6*(r<n):r===a?(n-e)/s+2:(e-r)/s+4,s/=l<.5?a+i:2-a-i,o*=60):s=l>0&&l<1?0:o,new Hsl(o,s,l,t.opacity)}function hsl(t,e,r,n){return 1===arguments.length?hslConvert(t):new Hsl(t,e,r,null==n?1:n)}function Hsl(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function clamph(t){return(t=(t||0)%360)<0?t+360:t}function clampt(t){return Math.max(0,Math.min(1,t||0))}function hsl2rgb(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}define(Color,color,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:color_formatHex8,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb}),define(Rgb,rgb,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:rgb_formatHex8,formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),define(Hsl,hsl,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new Rgb(hsl2rgb(t>=240?t-240:t+120,i,n),hsl2rgb(t,i,n),hsl2rgb(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=clampa(this.opacity);return`${1===t?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===t?")":`, ${t})`}`}}));var constant$2=t=>()=>t;function linear$2(t,e){return function(r){return t+r*e}}function exponential(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function gamma(t){return 1==(t=+t)?nogamma:function(e,r){return r-e?exponential(e,r,t):constant$2(isNaN(e)?r:e)}}function nogamma(t,e){var r=e-t;return r?linear$2(t,r):constant$2(isNaN(t)?e:t)}var interpolateRgb=function t(e){var r=gamma(e);function n(t,e){var n=r((t=rgb(t)).r,(e=rgb(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),o=nogamma(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+""}}return n.gamma=t,n}(1);function numberArray(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(r=0;r<n;++r)i[r]=t[r]*(1-a)+e[r]*a;return i}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,a=new Array(i),o=new Array(n);for(r=0;r<i;++r)a[r]=interpolate$1(t[r],e[r]);for(;r<n;++r)o[r]=e[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function date(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function interpolateNumber(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function object(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=interpolate$1(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(t){return function(){return t}}function one(t){return function(e){return t(e)+""}}function interpolateString(t,e){var r,n,i,a=reA.lastIndex=reB.lastIndex=0,o=-1,s=[],l=[];for(t+="",e+="";(r=reA.exec(t))&&(n=reB.exec(e));)(i=n.index)>a&&(i=e.slice(a,i),s[o]?s[o]+=i:s[++o]=i),(r=r[0])===(n=n[0])?s[o]?s[o]+=n:s[++o]=n:(s[++o]=null,l.push({i:o,x:interpolateNumber(r,n)})),a=reB.lastIndex;return a<e.length&&(i=e.slice(a),s[o]?s[o]+=i:s[++o]=i),s.length<2?l[0]?one(l[0].x):zero(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)s[(r=l[n]).i]=r.x(t);return s.join("")})}function interpolate$1(t,e){var r,n=typeof e;return null==e||"boolean"===n?constant$2(e):("number"===n?interpolateNumber:"string"===n?(r=color(e))?(e=r,interpolateRgb):interpolateString:e instanceof color?interpolateRgb:e instanceof Date?date:isNumberArray(e)?numberArray:Array.isArray(e)?genericArray:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?object:interpolateNumber)(t,e)}function interpolateRound(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var svgNode,degrees$1=180/Math.PI,identity$5={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(t,e,r,n,i,a){var o,s,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,l/=s),t*n<e*r&&(t=-t,e=-e,l=-l,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*degrees$1,skewX:Math.atan(l)*degrees$1,scaleX:o,scaleY:s}}function parseCss(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?identity$5:decompose(e.a,e.b,e.c,e.d,e.e,e.f)}function parseSvg(t){return null==t?identity$5:(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",t),(t=svgNode.transform.baseVal.consolidate())?decompose((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):identity$5)}function interpolateTransform(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var s=[],l=[];return a=t(a),o=t(o),function(t,n,i,a,o,s){if(t!==i||n!==a){var l=o.push("translate(",null,e,null,r);s.push({i:l-4,x:interpolateNumber(t,i)},{i:l-2,x:interpolateNumber(n,a)})}else(i||a)&&o.push("translate("+i+e+a+r)}(a.translateX,a.translateY,o.translateX,o.translateY,s,l),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(i(r)+"rotate(",null,n)-2,x:interpolateNumber(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(a.rotate,o.rotate,s,l),function(t,e,r,a){t!==e?a.push({i:r.push(i(r)+"skewX(",null,n)-2,x:interpolateNumber(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(a.skewX,o.skewX,s,l),function(t,e,r,n,a,o){if(t!==r||e!==n){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:interpolateNumber(t,r)},{i:s-2,x:interpolateNumber(e,n)})}else 1===r&&1===n||a.push(i(a)+"scale("+r+","+n+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,s,l),a=o=null,function(t){for(var e,r=-1,n=l.length;++r<n;)s[(e=l[r]).i]=e.x(t);return s.join("")}}}var taskHead,taskTail,interpolateTransformCss=interpolateTransform(parseCss,"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform(parseSvg,", ",")",")"),frame=0,timeout$1=0,interval$1=0,pokeDelay=1e3,clockLast=0,clockNow=0,clockSkew=0,clock="object"==typeof performance&&performance.now?performance:Date,setFrame="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}function timer(t,e,r){var n=new Timer;return n.restart(t,e,r),n}function timerFlush(){now(),++frame;for(var t,e=taskHead;e;)(t=clockNow-e._time)>=0&&e._call.call(void 0,t),e=e._next;--frame}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{timerFlush()}finally{frame=0,nap(),clockNow=0}}function poke(){var t=clock.now(),e=t-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=t)}function nap(){for(var t,e,r=taskHead,n=1/0;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:taskHead=e);taskTail=t,sleep(n)}function sleep(t){frame||(timeout$1&&(timeout$1=clearTimeout(timeout$1)),t-clockNow>24?(t<1/0&&(timeout$1=setTimeout(wake,t-clock.now()-clockSkew)),interval$1&&(interval$1=clearInterval(interval$1))):(interval$1||(clockLast=clock.now(),interval$1=setInterval(poke,pokeDelay)),frame=1,setFrame(wake)))}function timeout(t,e,r){var n=new Timer;return e=null==e?0:+e,n.restart((r=>{n.stop(),t(r+e)}),e,r),n}function interval(t,e,r){var n=new Timer,i=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?now():+r,n._restart((function a(o){o+=i,n._restart(a,i+=e,r),t(o)}),e,r)},n.restart(t,e,r),n}Timer.prototype=timer.prototype={constructor:Timer,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?now():+r)+(null==e?0:+e),this._next||taskTail===this||(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=t,this._time=r,sleep()},stop:function(){this._call&&(this._call=null,this._time=1/0,sleep())}};var emptyOn=dispatch("start","end","cancel","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(t,e,r,n,i,a){var o=t.__transition;if(o){if(r in o)return}else t.__transition={};create(t,r,{name:e,index:n,group:i,on:emptyOn,tween:emptyTween,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:CREATED})}function init(t,e){var r=get(t,e);if(r.state>CREATED)throw new Error("too late; already scheduled");return r}function set(t,e){var r=get(t,e);if(r.state>STARTED)throw new Error("too late; already running");return r}function get(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function create(t,e,r){var n,i=t.__transition;function a(l){var c,u,h,d;if(r.state!==SCHEDULED)return s();for(c in i)if((d=i[c]).name===r.name){if(d.state===STARTED)return timeout(a);d.state===RUNNING?(d.state=ENDED,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete i[c]):+c<e&&(d.state=ENDED,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete i[c])}if(timeout((function(){r.state===STARTED&&(r.state=RUNNING,r.timer.restart(o,r.delay,r.time),o(l))})),r.state=STARTING,r.on.call("start",t,t.__data__,r.index,r.group),r.state===STARTING){for(r.state=STARTED,n=new Array(h=r.tween.length),c=0,u=-1;c<h;++c)(d=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=d);n.length=u+1}}function o(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(s),r.state=ENDING,1),a=-1,o=n.length;++a<o;)n[a].call(t,i);r.state===ENDING&&(r.on.call("end",t,t.__data__,r.index,r.group),s())}function s(){for(var n in r.state=ENDED,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=timer((function(t){r.state=SCHEDULED,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)}),0,r.time)}function interrupt(t,e){var r,n,i,a=t.__transition,o=!0;if(a){for(i in e=null==e?null:e+"",a)(r=a[i]).name===e?(n=r.state>STARTING&&r.state<ENDING,r.state=ENDED,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[i]):o=!1;o&&delete t.__transition}}function selection_interrupt(t){return this.each((function(){interrupt(this,t)}))}function tweenRemove(t,e){var r,n;return function(){var i=set(this,t),a=i.tween;if(a!==r)for(var o=0,s=(n=r=a).length;o<s;++o)if(n[o].name===e){(n=n.slice()).splice(o,1);break}i.tween=n}}function tweenFunction(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var a=set(this,t),o=a.tween;if(o!==n){i=(n=o).slice();for(var s={name:e,value:r},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=s;break}l===c&&i.push(s)}a.tween=i}}function transition_tween(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=get(this.node(),r).tween,a=0,o=i.length;a<o;++a)if((n=i[a]).name===t)return n.value;return null}return this.each((null==e?tweenRemove:tweenFunction)(r,t,e))}function tweenValue(t,e,r){var n=t._id;return t.each((function(){var t=set(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)})),function(t){return get(t,n).value[e]}}function interpolate(t,e){var r;return("number"==typeof e?interpolateNumber:e instanceof color?interpolateRgb:(r=color(e))?(e=r,interpolateRgb):interpolateString)(t,e)}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e,r){var n,i,a=r+"";return function(){var o=this.getAttribute(t);return o===a?null:o===n?i:i=e(n=o,r)}}function attrConstantNS(t,e,r){var n,i,a=r+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===a?null:o===n?i:i=e(n=o,r)}}function attrFunction(t,e,r){var n,i,a;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttribute(t))===(s=l+"")?null:o===n&&s===i?a:(i=s,a=e(n=o,l));this.removeAttribute(t)}}function attrFunctionNS(t,e,r){var n,i,a;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttributeNS(t.space,t.local))===(s=l+"")?null:o===n&&s===i?a:(i=s,a=e(n=o,l));this.removeAttributeNS(t.space,t.local)}}function transition_attr(t,e){var r=namespace(t),n="transform"===r?interpolateTransformSvg:interpolate;return this.attrTween(t,"function"==typeof e?(r.local?attrFunctionNS:attrFunction)(r,n,tweenValue(this,"attr."+t,e)):null==e?(r.local?attrRemoveNS:attrRemove)(r):(r.local?attrConstantNS:attrConstant)(r,n,e))}function attrInterpolate(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}function attrInterpolateNS(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}function attrTweenNS(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&attrInterpolateNS(t,i)),r}return i._value=e,i}function attrTween(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&attrInterpolate(t,i)),r}return i._value=e,i}function transition_attrTween(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=namespace(t);return this.tween(r,(n.local?attrTweenNS:attrTween)(n,e))}function delayFunction(t,e){return function(){init(this,t).delay=+e.apply(this,arguments)}}function delayConstant(t,e){return e=+e,function(){init(this,t).delay=e}}function transition_delay(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?delayFunction:delayConstant)(e,t)):get(this.node(),e).delay}function durationFunction(t,e){return function(){set(this,t).duration=+e.apply(this,arguments)}}function durationConstant(t,e){return e=+e,function(){set(this,t).duration=e}}function transition_duration(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?durationFunction:durationConstant)(e,t)):get(this.node(),e).duration}function easeConstant(t,e){if("function"!=typeof e)throw new Error;return function(){set(this,t).ease=e}}function transition_ease(t){var e=this._id;return arguments.length?this.each(easeConstant(e,t)):get(this.node(),e).ease}function easeVarying(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;set(this,t).ease=r}}function transition_easeVarying(t){if("function"!=typeof t)throw new Error;return this.each(easeVarying(this._id,t))}function transition_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o=e[i],s=o.length,l=n[i]=[],c=0;c<s;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&l.push(a);return new Transition(n,this._parents,this._name,this._id)}function transition_merge(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,a=Math.min(n,i),o=new Array(n),s=0;s<a;++s)for(var l,c=e[s],u=r[s],h=c.length,d=o[s]=new Array(h),p=0;p<h;++p)(l=c[p]||u[p])&&(d[p]=l);for(;s<n;++s)o[s]=e[s];return new Transition(o,this._parents,this._name,this._id)}function start(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}function onFunction(t,e,r){var n,i,a=start(e)?init:set;return function(){var o=a(this,t),s=o.on;s!==n&&(i=(n=s).copy()).on(e,r),o.on=i}}function transition_on(t,e){var r=this._id;return arguments.length<2?get(this.node(),r).on.on(t):this.each(onFunction(r,t,e))}function removeFunction(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}function transition_remove(){return this.on("end.remove",removeFunction(this._id))}function transition_select(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selector(t));for(var n=this._groups,i=n.length,a=new Array(i),o=0;o<i;++o)for(var s,l,c=n[o],u=c.length,h=a[o]=new Array(u),d=0;d<u;++d)(s=c[d])&&(l=t.call(s,s.__data__,d,c))&&("__data__"in s&&(l.__data__=s.__data__),h[d]=l,schedule(h[d],e,r,d,h,get(s,r)));return new Transition(a,this._parents,e,r)}function transition_selectAll(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selectorAll(t));for(var n=this._groups,i=n.length,a=[],o=[],s=0;s<i;++s)for(var l,c=n[s],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,p=t.call(l,l.__data__,h,c),f=get(l,r),g=0,m=p.length;g<m;++g)(d=p[g])&&schedule(d,e,r,g,p,f);a.push(p),o.push(l)}return new Transition(a,o,e,r)}var Selection=selection.prototype.constructor;function transition_selection(){return new Selection(this._groups,this._parents)}function styleNull(t,e){var r,n,i;return function(){var a=styleValue(this,t),o=(this.style.removeProperty(t),styleValue(this,t));return a===o?null:a===r&&o===n?i:i=e(r=a,n=o)}}function styleRemove(t){return function(){this.style.removeProperty(t)}}function styleConstant(t,e,r){var n,i,a=r+"";return function(){var o=styleValue(this,t);return o===a?null:o===n?i:i=e(n=o,r)}}function styleFunction(t,e,r){var n,i,a;return function(){var o=styleValue(this,t),s=r(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=styleValue(this,t)),o===l?null:o===n&&l===i?a:(i=l,a=e(n=o,s))}}function styleMaybeRemove(t,e){var r,n,i,a,o="style."+e,s="end."+o;return function(){var l=set(this,t),c=l.on,u=null==l.value[o]?a||(a=styleRemove(e)):void 0;c===r&&i===u||(n=(r=c).copy()).on(s,i=u),l.on=n}}function transition_style(t,e,r){var n="transform"==(t+="")?interpolateTransformCss:interpolate;return null==e?this.styleTween(t,styleNull(t,n)).on("end.style."+t,styleRemove(t)):"function"==typeof e?this.styleTween(t,styleFunction(t,n,tweenValue(this,"style."+t,e))).each(styleMaybeRemove(this._id,t)):this.styleTween(t,styleConstant(t,n,e),r).on("end.style."+t,null)}function styleInterpolate(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}function styleTween(t,e,r){var n,i;function a(){var a=e.apply(this,arguments);return a!==i&&(n=(i=a)&&styleInterpolate(t,a,r)),n}return a._value=e,a}function transition_styleTween(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,styleTween(t,e,null==r?"":r))}function textConstant(t){return function(){this.textContent=t}}function textFunction(t){return function(){var e=t(this);this.textContent=null==e?"":e}}function transition_text(t){return this.tween("text","function"==typeof t?textFunction(tweenValue(this,"text",t)):textConstant(null==t?"":t+""))}function textInterpolate(t){return function(e){this.textContent=t.call(this,e)}}function textTween(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&textInterpolate(n)),e}return n._value=t,n}function transition_textTween(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,textTween(t))}function transition_transition(){for(var t=this._name,e=this._id,r=newId(),n=this._groups,i=n.length,a=0;a<i;++a)for(var o,s=n[a],l=s.length,c=0;c<l;++c)if(o=s[c]){var u=get(o,e);schedule(o,t,r,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Transition(n,this._parents,t,r)}function transition_end(){var t,e,r=this,n=r._id,i=r.size();return new Promise((function(a,o){var s={value:o},l={value:function(){0==--i&&a()}};r.each((function(){var r=set(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),r.on=e})),0===i&&a()}))}var id=0;function Transition(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function newId(){return++id}var selection_prototype=selection.prototype;Transition.prototype={constructor:Transition,select:transition_select,selectAll:transition_selectAll,selectChild:selection_prototype.selectChild,selectChildren:selection_prototype.selectChildren,filter:transition_filter,merge:transition_merge,selection:transition_selection,transition:transition_transition,call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:transition_on,attr:transition_attr,attrTween:transition_attrTween,style:transition_style,styleTween:transition_styleTween,text:transition_text,textTween:transition_textTween,remove:transition_remove,tween:transition_tween,delay:transition_delay,duration:transition_duration,ease:transition_ease,easeVarying:transition_easeVarying,end:transition_end,[Symbol.iterator]:selection_prototype[Symbol.iterator]};const linear$1=t=>+t;function cubicIn(t){return t*t*t}function cubicOut(t){return--t*t*t+1}function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var defaultTiming={time:null,delay:0,duration:250,ease:cubicInOut};function inherit(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}function selection_transition(t){var e,r;t instanceof Transition?(e=t._id,t=t._name):(e=newId(),(r=defaultTiming).time=now(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,a=0;a<i;++a)for(var o,s=n[a],l=s.length,c=0;c<l;++c)(o=s[c])&&schedule(o,t,e,c,s,r||inherit(o,e));return new Transition(n,this._parents,t,e)}selection.prototype.interrupt=selection_interrupt,selection.prototype.transition=selection_transition;const pi$2=Math.PI,tau$2=2*pi$2,epsilon$2=1e-6,tauEpsilon=tau$2-1e-6;function append$1(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function appendRound$1(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return append$1;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}class Path{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?append$1:appendRound$1(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,a){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+a}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=r-t,l=n-e,c=a-t,u=o-e,h=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>1e-6)if(Math.abs(u*s-l*c)>1e-6&&i){let d=r-a,p=n-o,f=s*s+l*l,g=d*d+p*p,m=Math.sqrt(f),y=Math.sqrt(h),b=i*Math.tan((pi$2-Math.acos((f+h-g)/(2*m*y)))/2),$=b/y,v=b/m;Math.abs($-1)>1e-6&&this._append`L${t+$*c},${e+$*u}`,this._append`A${i},${i},0,0,${+(u*d>c*p)},${this._x1=t+v*s},${this._y1=e+v*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(n),s=r*Math.sin(n),l=t+o,c=e+s,u=1^a,h=a?n-i:i-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-c)>1e-6)&&this._append`L${l},${c}`,r&&(h<0&&(h=h%tau$2+tau$2),h>tauEpsilon?this._append`A${r},${r},0,1,${u},${t-o},${e-s}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:h>1e-6&&this._append`A${r},${r},0,${+(h>=pi$2)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}var array$1=Array.prototype,slice=array$1.slice;function ascending(t,e){return t-e}function area(t){for(var e=0,r=t.length,n=t[r-1][1]*t[0][0]-t[r-1][0]*t[0][1];++e<r;)n+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return n}var constant$1=t=>()=>t;function contains(t,e){for(var r,n=-1,i=e.length;++n<i;)if(r=ringContains(t,e[n]))return r;return 0}function ringContains(t,e){for(var r=e[0],n=e[1],i=-1,a=0,o=t.length,s=o-1;a<o;s=a++){var l=t[a],c=l[0],u=l[1],h=t[s],d=h[0],p=h[1];if(segmentContains(l,h,e))return 0;u>n!=p>n&&r<(d-c)*(n-u)/(p-u)+c&&(i=-i)}return i}function segmentContains(t,e,r){var n;return collinear(t,e,r)&&within(t[n=+(t[0]===e[0])],r[n],e[n])}function collinear(t,e,r){return(e[0]-t[0])*(r[1]-t[1])==(r[0]-t[0])*(e[1]-t[1])}function within(t,e,r){return t<=e&&e<=r||r<=e&&e<=t}function noop$1(){}var cases=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function Contours(){var t=1,e=1,r=thresholdSturges,n=s;function i(t){var e=r(t);if(Array.isArray(e))e=e.slice().sort(ascending);else{const r=extent(t,finite);for(e=ticks(...nice(r[0],r[1],e),e);e[e.length-1]>=r[1];)e.pop();for(;e[1]<r[0];)e.shift()}return e.map((e=>a(t,e)))}function a(r,i){const a=null==i?NaN:+i;if(isNaN(a))throw new Error(`invalid value: ${i}`);var s=[],l=[];return function(r,n,i){var a,s,l,c,u,h,d=new Array,p=new Array;a=s=-1,c=above(r[0],n),cases[c<<1].forEach(f);for(;++a<t-1;)l=c,c=above(r[a+1],n),cases[l|c<<1].forEach(f);cases[c|0].forEach(f);for(;++s<e-1;){for(a=-1,c=above(r[s*t+t],n),u=above(r[s*t],n),cases[c<<1|u<<2].forEach(f);++a<t-1;)l=c,c=above(r[s*t+t+a+1],n),h=u,u=above(r[s*t+a+1],n),cases[l|c<<1|u<<2|h<<3].forEach(f);cases[c|u<<3].forEach(f)}a=-1,u=r[s*t]>=n,cases[u<<2].forEach(f);for(;++a<t-1;)h=u,u=above(r[s*t+a+1],n),cases[u<<2|h<<3].forEach(f);function f(t){var e,r,n=[t[0][0]+a,t[0][1]+s],l=[t[1][0]+a,t[1][1]+s],c=o(n),u=o(l);(e=p[c])?(r=d[u])?(delete p[e.end],delete d[r.start],e===r?(e.ring.push(l),i(e.ring)):d[e.start]=p[r.end]={start:e.start,end:r.end,ring:e.ring.concat(r.ring)}):(delete p[e.end],e.ring.push(l),p[e.end=u]=e):(e=d[u])?(r=p[c])?(delete d[e.start],delete p[r.end],e===r?(e.ring.push(l),i(e.ring)):d[r.start]=p[e.end]={start:r.start,end:e.end,ring:r.ring.concat(e.ring)}):(delete d[e.start],e.ring.unshift(n),d[e.start=c]=e):d[c]=p[u]={start:c,end:u,ring:[n,l]}}cases[u<<3].forEach(f)}(r,a,(function(t){n(t,r,a),area(t)>0?s.push([t]):l.push(t)})),l.forEach((function(t){for(var e,r=0,n=s.length;r<n;++r)if(-1!==contains((e=s[r])[0],t))return void e.push(t)})),{type:"MultiPolygon",value:i,coordinates:s}}function o(e){return 2*e[0]+e[1]*(t+1)*4}function s(r,n,i){r.forEach((function(r){var a=r[0],o=r[1],s=0|a,l=0|o,c=valid(n[l*t+s]);a>0&&a<t&&s===a&&(r[0]=smooth1(a,valid(n[l*t+s-1]),c,i)),o>0&&o<e&&l===o&&(r[1]=smooth1(o,valid(n[(l-1)*t+s]),c,i))}))}return i.contour=a,i.size=function(r){if(!arguments.length)return[t,e];var n=Math.floor(r[0]),a=Math.floor(r[1]);if(!(n>=0&&a>=0))throw new Error("invalid size");return t=n,e=a,i},i.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?constant$1(slice.call(t)):constant$1(t),i):r},i.smooth=function(t){return arguments.length?(n=t?s:noop$1,i):n===s},i}function finite(t){return isFinite(t)?t:NaN}function above(t,e){return null!=t&&+t>=e}function valid(t){return null==t||isNaN(t=+t)?-1/0:t}function smooth1(t,e,r,n){const i=n-e,a=r-e,o=isFinite(i)||isFinite(a)?i/a:Math.sign(i)/Math.sign(a);return isNaN(o)?t:t+o-.5}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function exponent(t){return(t=formatDecimalParts(Math.abs(t)))?t[1]:NaN}function formatGroup(t,e){return function(r,n){for(var i=r.length,a=[],o=0,s=t[0],l=0;i>0&&s>0&&(l+s+1>n&&(s=Math.max(1,n-l)),a.push(r.substring(i-=s,i+s)),!((l+=s+1)>n));)s=t[o=(o+1)%t.length];return a.reverse().join(e)}}function formatNumerals(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(e=re.exec(t)))throw new Error("invalid format: "+t);var e;return new FormatSpecifier({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function FormatSpecifier(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function formatTrim(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}function formatPrefixAuto(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],i=r[1],a=i-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+formatDecimalParts(t,Math.max(0,e+a-1))[0]}function formatRounded(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var formatTypes={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:formatDecimal,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>formatRounded(100*t,e),r:formatRounded,s:formatPrefixAuto,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function identity$4(t){return t}var locale,format,formatPrefix,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale(t){var e=void 0===t.grouping||void 0===t.thousands?identity$4:formatGroup(map.call(t.grouping,Number),t.thousands+""),r=void 0===t.currency?"":t.currency[0]+"",n=void 0===t.currency?"":t.currency[1]+"",i=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?identity$4:formatNumerals(map.call(t.numerals,String)),o=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function c(t){var c=(t=formatSpecifier(t)).fill,u=t.align,h=t.sign,d=t.symbol,p=t.zero,f=t.width,g=t.comma,m=t.precision,y=t.trim,b=t.type;"n"===b?(g=!0,b="g"):formatTypes[b]||(void 0===m&&(m=12),y=!0,b="g"),(p||"0"===c&&"="===u)&&(p=!0,c="0",u="=");var $="$"===d?r:"#"===d&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",v="$"===d?n:/[%p]/.test(b)?o:"",w=formatTypes[b],x=/[defgprs%]/.test(b);function E(t){var r,n,o,d=$,E=v;if("c"===b)E=w(t)+E,t="";else{var S=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:w(Math.abs(t),m),y&&(t=formatTrim(t)),S&&0==+t&&"+"!==h&&(S=!1),d=(S?"("===h?h:s:"-"===h||"("===h?"":h)+d,E=("s"===b?prefixes[8+prefixExponent/3]:"")+E+(S&&"("===h?")":""),x)for(r=-1,n=t.length;++r<n;)if(48>(o=t.charCodeAt(r))||o>57){E=(46===o?i+t.slice(r+1):t.slice(r))+E,t=t.slice(0,r);break}}g&&!p&&(t=e(t,1/0));var _=d.length+t.length+E.length,T=_<f?new Array(f-_+1).join(c):"";switch(g&&p&&(t=e(T+t,T.length?f-E.length:1/0),T=""),u){case"<":t=d+t+E+T;break;case"=":t=d+T+t+E;break;case"^":t=T.slice(0,_=T.length>>1)+d+t+E+T.slice(_);break;default:t=T+d+t+E}return a(t)}return m=void 0===m?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),E.toString=function(){return t+""},E}return{format:c,formatPrefix:function(t,e){var r=c(((t=formatSpecifier(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3))),i=Math.pow(10,-n),a=prefixes[8+n/3];return function(t){return r(i*t)+a}}}}function defaultLocale(t){return locale=formatLocale(t),format=locale.format,formatPrefix=locale.formatPrefix,locale}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3)))-exponent(Math.abs(t)))}function precisionRound(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,exponent(e)-exponent(t))+1}defaultLocale({thousands:",",grouping:[3],currency:["$",""]});var epsilon$1=1e-6,pi$1=Math.PI,tau$1=2*pi$1,degrees=180/pi$1,radians=pi$1/180,abs$1=Math.abs,cos$1=Math.cos,sin$1=Math.sin,sqrt$1=Math.sqrt;function noop(){}function streamGeometry(t,e){t&&streamGeometryType.hasOwnProperty(t.type)&&streamGeometryType[t.type](t,e)}var streamObjectType={Feature:function(t,e){streamGeometry(t.geometry,e)},FeatureCollection:function(t,e){for(var r=t.features,n=-1,i=r.length;++n<i;)streamGeometry(r[n].geometry,e)}},streamGeometryType={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)t=r[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){streamLine(t.coordinates,e,0)},MultiLineString:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)streamLine(r[n],e,0)},Polygon:function(t,e){streamPolygon(t.coordinates,e)},MultiPolygon:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)streamPolygon(r[n],e)},GeometryCollection:function(t,e){for(var r=t.geometries,n=-1,i=r.length;++n<i;)streamGeometry(r[n],e)}};function streamLine(t,e,r){var n,i=-1,a=t.length-r;for(e.lineStart();++i<a;)n=t[i],e.point(n[0],n[1],n[2]);e.lineEnd()}function streamPolygon(t,e){var r=-1,n=t.length;for(e.polygonStart();++r<n;)streamLine(t[r],e,1);e.polygonEnd()}function geoStream(t,e){t&&streamObjectType.hasOwnProperty(t.type)?streamObjectType[t.type](t,e):streamGeometry(t,e)}function clipBuffer(){var t,e=[];return{point:function(e,r,n){t.push([e,r,n])},lineStart:function(){e.push(t=[])},lineEnd:noop,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],t=null,r}}}function pointEqual(t,e){return abs$1(t[0]-e[0])<epsilon$1&&abs$1(t[1]-e[1])<epsilon$1}function Intersection(t,e,r,n){this.x=t,this.z=e,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function clipRejoin(t,e,r,n,i){var a,o,s=[],l=[];if(t.forEach((function(t){if(!((e=t.length-1)<=0)){var e,r,n=t[0],o=t[e];if(pointEqual(n,o)){if(!n[2]&&!o[2]){for(i.lineStart(),a=0;a<e;++a)i.point((n=t[a])[0],n[1]);return void i.lineEnd()}o[0]+=2*epsilon$1}s.push(r=new Intersection(n,t,null,!0)),l.push(r.o=new Intersection(n,null,r,!1)),s.push(r=new Intersection(o,t,null,!1)),l.push(r.o=new Intersection(o,null,r,!0))}})),s.length){for(l.sort(e),link(s),link(l),a=0,o=l.length;a<o;++a)l[a].e=r=!r;for(var c,u,h=s[0];;){for(var d=h,p=!0;d.v;)if((d=d.n)===h)return;c=d.z,i.lineStart();do{if(d.v=d.o.v=!0,d.e){if(p)for(a=0,o=c.length;a<o;++a)i.point((u=c[a])[0],u[1]);else n(d.x,d.n.x,1,i);d=d.n}else{if(p)for(c=d.p.z,a=c.length-1;a>=0;--a)i.point((u=c[a])[0],u[1]);else n(d.x,d.p.x,-1,i);d=d.p}c=(d=d.o).z,p=!p}while(!d.v);i.lineEnd()}}}function link(t){if(e=t.length){for(var e,r,n=0,i=t[0];++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function clipLine(t,e,r,n,i,a){var o,s=t[0],l=t[1],c=0,u=1,h=e[0]-s,d=e[1]-l;if(o=r-s,h||!(o>0)){if(o/=h,h<0){if(o<c)return;o<u&&(u=o)}else if(h>0){if(o>u)return;o>c&&(c=o)}if(o=i-s,h||!(o<0)){if(o/=h,h<0){if(o>u)return;o>c&&(c=o)}else if(h>0){if(o<c)return;o<u&&(u=o)}if(o=n-l,d||!(o>0)){if(o/=d,d<0){if(o<c)return;o<u&&(u=o)}else if(d>0){if(o>u)return;o>c&&(c=o)}if(o=a-l,d||!(o<0)){if(o/=d,d<0){if(o>u)return;o>c&&(c=o)}else if(d>0){if(o<c)return;o<u&&(u=o)}return c>0&&(t[0]=s+c*h,t[1]=l+c*d),u<1&&(e[0]=s+u*h,e[1]=l+u*d),!0}}}}}var clipMax=1e9,clipMin=-clipMax;function clipRectangle(t,e,r,n){function i(i,a){return t<=i&&i<=r&&e<=a&&a<=n}function a(i,a,s,c){var u=0,h=0;if(null==i||(u=o(i,s))!==(h=o(a,s))||l(i,a)<0^s>0)do{c.point(0===u||3===u?t:r,u>1?n:e)}while((u=(u+s+4)%4)!==h);else c.point(a[0],a[1])}function o(n,i){return abs$1(n[0]-t)<epsilon$1?i>0?0:3:abs$1(n[0]-r)<epsilon$1?i>0?2:1:abs$1(n[1]-e)<epsilon$1?i>0?1:0:i>0?3:2}function s(t,e){return l(t.x,e.x)}function l(t,e){var r=o(t,1),n=o(e,1);return r!==n?r-n:0===r?e[1]-t[1]:1===r?t[0]-e[0]:2===r?t[1]-e[1]:e[0]-t[0]}return function(o){var l,c,u,h,d,p,f,g,m,y,b,$=o,v=clipBuffer(),w={point:x,lineStart:function(){w.point=E,c&&c.push(u=[]);y=!0,m=!1,f=g=NaN},lineEnd:function(){l&&(E(h,d),p&&m&&v.rejoin(),l.push(v.result()));w.point=x,m&&$.lineEnd()},polygonStart:function(){$=v,l=[],c=[],b=!0},polygonEnd:function(){var e=function(){for(var e=0,r=0,i=c.length;r<i;++r)for(var a,o,s=c[r],l=1,u=s.length,h=s[0],d=h[0],p=h[1];l<u;++l)a=d,o=p,d=(h=s[l])[0],p=h[1],o<=n?p>n&&(d-a)*(n-o)>(p-o)*(t-a)&&++e:p<=n&&(d-a)*(n-o)<(p-o)*(t-a)&&--e;return e}(),r=b&&e,i=(l=merge(l)).length;(r||i)&&(o.polygonStart(),r&&(o.lineStart(),a(null,null,1,o),o.lineEnd()),i&&clipRejoin(l,s,e,a,o),o.polygonEnd());$=o,l=c=u=null}};function x(t,e){i(t,e)&&$.point(t,e)}function E(a,o){var s=i(a,o);if(c&&u.push([a,o]),y)h=a,d=o,p=s,y=!1,s&&($.lineStart(),$.point(a,o));else if(s&&m)$.point(a,o);else{var l=[f=Math.max(clipMin,Math.min(clipMax,f)),g=Math.max(clipMin,Math.min(clipMax,g))],v=[a=Math.max(clipMin,Math.min(clipMax,a)),o=Math.max(clipMin,Math.min(clipMax,o))];clipLine(l,v,t,e,r,n)?(m||($.lineStart(),$.point(l[0],l[1])),$.point(v[0],v[1]),s||$.lineEnd(),b=!1):s&&($.lineStart(),$.point(a,o),b=!1)}f=a,g=o,m=s}return w}}var x00$2,y00$2,x0$3,y0$3,identity$3=t=>t,areaSum=new Adder,areaRingSum=new Adder,areaStream={point:noop,lineStart:noop,lineEnd:noop,polygonStart:function(){areaStream.lineStart=areaRingStart,areaStream.lineEnd=areaRingEnd},polygonEnd:function(){areaStream.lineStart=areaStream.lineEnd=areaStream.point=noop,areaSum.add(abs$1(areaRingSum)),areaRingSum=new Adder},result:function(){var t=areaSum/2;return areaSum=new Adder,t}};function areaRingStart(){areaStream.point=areaPointFirst}function areaPointFirst(t,e){areaStream.point=areaPoint,x00$2=x0$3=t,y00$2=y0$3=e}function areaPoint(t,e){areaRingSum.add(y0$3*t-x0$3*e),x0$3=t,y0$3=e}function areaRingEnd(){areaPoint(x00$2,y00$2)}var x0$2=1/0,y0$2=x0$2,x1=-x0$2,y1=x1,boundsStream={point:boundsPoint,lineStart:noop,lineEnd:noop,polygonStart:noop,polygonEnd:noop,result:function(){var t=[[x0$2,y0$2],[x1,y1]];return x1=y1=-(y0$2=x0$2=1/0),t}};function boundsPoint(t,e){t<x0$2&&(x0$2=t),t>x1&&(x1=t),e<y0$2&&(y0$2=e),e>y1&&(y1=e)}var x00$1,y00$1,x0$1,y0$1,X0=0,Y0=0,Z0=0,X1=0,Y1=0,Z1=0,X2=0,Y2=0,Z2=0,centroidStream={point:centroidPoint,lineStart:centroidLineStart,lineEnd:centroidLineEnd,polygonStart:function(){centroidStream.lineStart=centroidRingStart,centroidStream.lineEnd=centroidRingEnd},polygonEnd:function(){centroidStream.point=centroidPoint,centroidStream.lineStart=centroidLineStart,centroidStream.lineEnd=centroidLineEnd},result:function(){var t=Z2?[X2/Z2,Y2/Z2]:Z1?[X1/Z1,Y1/Z1]:Z0?[X0/Z0,Y0/Z0]:[NaN,NaN];return X0=Y0=Z0=X1=Y1=Z1=X2=Y2=Z2=0,t}};function centroidPoint(t,e){X0+=t,Y0+=e,++Z0}function centroidLineStart(){centroidStream.point=centroidPointFirstLine}function centroidPointFirstLine(t,e){centroidStream.point=centroidPointLine,centroidPoint(x0$1=t,y0$1=e)}function centroidPointLine(t,e){var r=t-x0$1,n=e-y0$1,i=sqrt$1(r*r+n*n);X1+=i*(x0$1+t)/2,Y1+=i*(y0$1+e)/2,Z1+=i,centroidPoint(x0$1=t,y0$1=e)}function centroidLineEnd(){centroidStream.point=centroidPoint}function centroidRingStart(){centroidStream.point=centroidPointFirstRing}function centroidRingEnd(){centroidPointRing(x00$1,y00$1)}function centroidPointFirstRing(t,e){centroidStream.point=centroidPointRing,centroidPoint(x00$1=x0$1=t,y00$1=y0$1=e)}function centroidPointRing(t,e){var r=t-x0$1,n=e-y0$1,i=sqrt$1(r*r+n*n);X1+=i*(x0$1+t)/2,Y1+=i*(y0$1+e)/2,Z1+=i,X2+=(i=y0$1*t-x0$1*e)*(x0$1+t),Y2+=i*(y0$1+e),Z2+=3*i,centroidPoint(x0$1=t,y0$1=e)}function PathContext(t){this._context=t}PathContext.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,tau$1)}},result:noop};var lengthRing,x00,y00,x0,y0,lengthSum=new Adder,lengthStream={point:noop,lineStart:function(){lengthStream.point=lengthPointFirst},lineEnd:function(){lengthRing&&lengthPoint(x00,y00),lengthStream.point=noop},polygonStart:function(){lengthRing=!0},polygonEnd:function(){lengthRing=null},result:function(){var t=+lengthSum;return lengthSum=new Adder,t}};function lengthPointFirst(t,e){lengthStream.point=lengthPoint,x00=x0=t,y00=y0=e}function lengthPoint(t,e){x0-=t,y0-=e,lengthSum.add(sqrt$1(x0*x0+y0*y0)),x0=t,y0=e}let cacheDigits,cacheAppend,cacheRadius,cacheCircle;class PathString{constructor(t){this._append=null==t?append:appendRound(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:this._append`M${t},${e}`,this._point=1;break;case 1:this._append`L${t},${e}`;break;default:if(this._append`M${t},${e}`,this._radius!==cacheRadius||this._append!==cacheAppend){const t=this._radius,e=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,cacheRadius=t,cacheAppend=this._append,cacheCircle=this._,this._=e}this._+=cacheCircle}}result(){const t=this._;return this._="",t.length?t:null}}function append(t){let e=1;this._+=t[0];for(const r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function appendRound(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return append;if(e!==cacheDigits){const t=10**e;cacheDigits=e,cacheAppend=function(e){let r=1;this._+=e[0];for(const n=e.length;r<n;++r)this._+=Math.round(arguments[r]*t)/t+e[r]}}return cacheAppend}function index(t,e){let r,n,i=3,a=4.5;function o(t){return t&&("function"==typeof a&&n.pointRadius(+a.apply(this,arguments)),geoStream(t,r(n))),n.result()}return o.area=function(t){return geoStream(t,r(areaStream)),areaStream.result()},o.measure=function(t){return geoStream(t,r(lengthStream)),lengthStream.result()},o.bounds=function(t){return geoStream(t,r(boundsStream)),boundsStream.result()},o.centroid=function(t){return geoStream(t,r(centroidStream)),centroidStream.result()},o.projection=function(e){return arguments.length?(r=null==e?(t=null,identity$3):(t=e).stream,o):t},o.context=function(t){return arguments.length?(n=null==t?(e=null,new PathString(i)):new PathContext(e=t),"function"!=typeof a&&n.pointRadius(a),o):e},o.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(n.pointRadius(+t),+t),o):a},o.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);i=e}return null===e&&(n=new PathString(i)),o},o.projection(t).digits(i).context(e)}function transformer$1(t){return function(e){var r=new TransformStream;for(var n in t)r[n]=t[n];return r.stream=e,r}}function TransformStream(){}function fit(t,e,r){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=n&&t.clipExtent(null),geoStream(r,t.stream(boundsStream)),e(boundsStream.result()),null!=n&&t.clipExtent(n),t}function fitExtent(t,e,r){return fit(t,(function(r){var n=e[1][0]-e[0][0],i=e[1][1]-e[0][1],a=Math.min(n/(r[1][0]-r[0][0]),i/(r[1][1]-r[0][1])),o=+e[0][0]+(n-a*(r[1][0]+r[0][0]))/2,s=+e[0][1]+(i-a*(r[1][1]+r[0][1]))/2;t.scale(150*a).translate([o,s])}),r)}function fitSize(t,e,r){return fitExtent(t,[[0,0],e],r)}function fitWidth(t,e,r){return fit(t,(function(r){var n=+e,i=n/(r[1][0]-r[0][0]),a=(n-i*(r[1][0]+r[0][0]))/2,o=-i*r[0][1];t.scale(150*i).translate([a,o])}),r)}function fitHeight(t,e,r){return fit(t,(function(r){var n=+e,i=n/(r[1][1]-r[0][1]),a=-i*r[0][0],o=(n-i*(r[1][1]+r[0][1]))/2;t.scale(150*i).translate([a,o])}),r)}function identity$2(){var t,e,r,n,i,a,o,s=1,l=0,c=0,u=1,h=1,d=0,p=null,f=1,g=1,m=transformer$1({point:function(t,e){var r=$([t,e]);this.stream.point(r[0],r[1])}}),y=identity$3;function b(){return f=s*u,g=s*h,a=o=null,$}function $(r){var n=r[0]*f,i=r[1]*g;if(d){var a=i*t-n*e;n=n*t+i*e,i=a}return[n+l,i+c]}return $.invert=function(r){var n=r[0]-l,i=r[1]-c;if(d){var a=i*t+n*e;n=n*t-i*e,i=a}return[n/f,i/g]},$.stream=function(t){return a&&o===t?a:a=m(y(o=t))},$.postclip=function(t){return arguments.length?(y=t,p=r=n=i=null,b()):y},$.clipExtent=function(t){return arguments.length?(y=null==t?(p=r=n=i=null,identity$3):clipRectangle(p=+t[0][0],r=+t[0][1],n=+t[1][0],i=+t[1][1]),b()):null==p?null:[[p,r],[n,i]]},$.scale=function(t){return arguments.length?(s=+t,b()):s},$.translate=function(t){return arguments.length?(l=+t[0],c=+t[1],b()):[l,c]},$.angle=function(r){return arguments.length?(e=sin$1(d=r%360*radians),t=cos$1(d),b()):d*degrees},$.reflectX=function(t){return arguments.length?(u=t?-1:1,b()):u<0},$.reflectY=function(t){return arguments.length?(h=t?-1:1,b()):h<0},$.fitExtent=function(t,e){return fitExtent($,t,e)},$.fitSize=function(t,e){return fitSize($,t,e)},$.fitWidth=function(t,e){return fitWidth($,t,e)},$.fitHeight=function(t,e){return fitHeight($,t,e)},$}function initRange(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function constants(t){return function(){return t}}function number(t){return+t}TransformStream.prototype={constructor:TransformStream,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var unit=[0,1];function identity$1(t){return t}function normalize(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:constants(isNaN(e)?NaN:.5)}function clamper(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}function bimap(t,e,r){var n=t[0],i=t[1],a=e[0],o=e[1];return i<n?(n=normalize(i,n),a=r(o,a)):(n=normalize(n,i),a=r(a,o)),function(t){return a(n(t))}}function polymap(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),a=new Array(n),o=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<n;)i[o]=normalize(t[o],t[o+1]),a[o]=r(e[o],e[o+1]);return function(e){var r=bisectRight(t,e,1,n)-1;return a[r](i[r](e))}}function copy(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer(){var t,e,r,n,i,a,o=unit,s=unit,l=interpolate$1,c=identity$1;function u(){var t=Math.min(o.length,s.length);return c!==identity$1&&(c=clamper(o[0],o[t-1])),n=t>2?polymap:bimap,i=a=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(o.map(t),s,l)))(t(c(e)))}return h.invert=function(r){return c(e((a||(a=n(s,o.map(t),interpolateNumber)))(r)))},h.domain=function(t){return arguments.length?(o=Array.from(t,number),u()):o.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),l=interpolateRound,u()},h.clamp=function(t){return arguments.length?(c=!!t||identity$1,u()):c!==identity$1},h.interpolate=function(t){return arguments.length?(l=t,u()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,u()}}function continuous(){return transformer()(identity$1,identity$1)}function tickFormat(t,e,r,n){var i,a=tickStep(t,e,r);switch((n=formatSpecifier(null==n?",f":n)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=precisionPrefix(a,o))||(n.precision=i),formatPrefix(n,o);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=precisionRound(a,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=precisionFixed(a))||(n.precision=i-2*("%"===n.type))}return format(n)}function linearish(t){var e=t.domain;return t.ticks=function(t){var r=e();return ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return tickFormat(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,a=e(),o=0,s=a.length-1,l=a[o],c=a[s],u=10;for(c<l&&(i=l,l=c,c=i,i=o,o=s,s=i);u-- >0;){if((i=tickIncrement(l,c,r))===n)return a[o]=l,a[s]=c,e(a);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}n=i}return t},t}function linear(){var t=continuous();return t.copy=function(){return copy(t,linear())},initRange.apply(t,arguments),linearish(t)}function colors(t){for(var e=t.length/6|0,r=new Array(e),n=0;n<e;)r[n]="#"+t.slice(6*n,6*++n);return r}var Set1=colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");function constant(t){return function(){return t}}const abs=Math.abs,atan2=Math.atan2,cos=Math.cos,max=Math.max,min=Math.min,sin=Math.sin,sqrt=Math.sqrt,epsilon=1e-12,pi=Math.PI,halfPi=pi/2,tau=2*pi;function acos(t){return t>1?0:t<-1?pi:Math.acos(t)}function asin(t){return t>=1?halfPi:t<=-1?-halfPi:Math.asin(t)}function withPath(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new Path(e)}function arcInnerRadius(t){return t.innerRadius}function arcOuterRadius(t){return t.outerRadius}function arcStartAngle(t){return t.startAngle}function arcEndAngle(t){return t.endAngle}function arcPadAngle(t){return t&&t.padAngle}function intersect(t,e,r,n,i,a,o,s){var l=r-t,c=n-e,u=o-i,h=s-a,d=h*l-u*c;if(!(d*d<epsilon))return[t+(d=(u*(e-a)-h*(t-i))/d)*l,e+d*c]}function cornerTangents(t,e,r,n,i,a,o){var s=t-r,l=e-n,c=(o?a:-a)/sqrt(s*s+l*l),u=c*l,h=-c*s,d=t+u,p=e+h,f=r+u,g=n+h,m=(d+f)/2,y=(p+g)/2,b=f-d,$=g-p,v=b*b+$*$,w=i-a,x=d*g-f*p,E=($<0?-1:1)*sqrt(max(0,w*w*v-x*x)),S=(x*$-b*E)/v,_=(-x*b-$*E)/v,T=(x*$+b*E)/v,A=(-x*b+$*E)/v,R=S-m,C=_-y,O=T-m,k=A-y;return R*R+C*C>O*O+k*k&&(S=T,_=A),{cx:S,cy:_,x01:-u,y01:-h,x11:S*(i/w-1),y11:_*(i/w-1)}}function arc(){var t=arcInnerRadius,e=arcOuterRadius,r=constant(0),n=null,i=arcStartAngle,a=arcEndAngle,o=arcPadAngle,s=null,l=withPath(c);function c(){var c,u,h=+t.apply(this,arguments),d=+e.apply(this,arguments),p=i.apply(this,arguments)-halfPi,f=a.apply(this,arguments)-halfPi,g=abs(f-p),m=f>p;if(s||(s=c=l()),d<h&&(u=d,d=h,h=u),d>epsilon)if(g>tau-epsilon)s.moveTo(d*cos(p),d*sin(p)),s.arc(0,0,d,p,f,!m),h>epsilon&&(s.moveTo(h*cos(f),h*sin(f)),s.arc(0,0,h,f,p,m));else{var y,b,$=p,v=f,w=p,x=f,E=g,S=g,_=o.apply(this,arguments)/2,T=_>epsilon&&(n?+n.apply(this,arguments):sqrt(h*h+d*d)),A=min(abs(d-h)/2,+r.apply(this,arguments)),R=A,C=A;if(T>epsilon){var O=asin(T/h*sin(_)),k=asin(T/d*sin(_));(E-=2*O)>epsilon?(w+=O*=m?1:-1,x-=O):(E=0,w=x=(p+f)/2),(S-=2*k)>epsilon?($+=k*=m?1:-1,v-=k):(S=0,$=v=(p+f)/2)}var N=d*cos($),P=d*sin($),I=h*cos(x),M=h*sin(x);if(A>epsilon){var D,L=d*cos(v),j=d*sin(v),U=h*cos(w),F=h*sin(w);if(g<pi)if(D=intersect(N,P,U,F,L,j,I,M)){var B=N-D[0],V=P-D[1],H=L-D[0],z=j-D[1],q=1/sin(acos((B*H+V*z)/(sqrt(B*B+V*V)*sqrt(H*H+z*z)))/2),K=sqrt(D[0]*D[0]+D[1]*D[1]);R=min(A,(h-K)/(q-1)),C=min(A,(d-K)/(q+1))}else R=C=0}S>epsilon?C>epsilon?(y=cornerTangents(U,F,N,P,d,C,m),b=cornerTangents(L,j,I,M,d,C,m),s.moveTo(y.cx+y.x01,y.cy+y.y01),C<A?s.arc(y.cx,y.cy,C,atan2(y.y01,y.x01),atan2(b.y01,b.x01),!m):(s.arc(y.cx,y.cy,C,atan2(y.y01,y.x01),atan2(y.y11,y.x11),!m),s.arc(0,0,d,atan2(y.cy+y.y11,y.cx+y.x11),atan2(b.cy+b.y11,b.cx+b.x11),!m),s.arc(b.cx,b.cy,C,atan2(b.y11,b.x11),atan2(b.y01,b.x01),!m))):(s.moveTo(N,P),s.arc(0,0,d,$,v,!m)):s.moveTo(N,P),h>epsilon&&E>epsilon?R>epsilon?(y=cornerTangents(I,M,L,j,h,-R,m),b=cornerTangents(N,P,U,F,h,-R,m),s.lineTo(y.cx+y.x01,y.cy+y.y01),R<A?s.arc(y.cx,y.cy,R,atan2(y.y01,y.x01),atan2(b.y01,b.x01),!m):(s.arc(y.cx,y.cy,R,atan2(y.y01,y.x01),atan2(y.y11,y.x11),!m),s.arc(0,0,h,atan2(y.cy+y.y11,y.cx+y.x11),atan2(b.cy+b.y11,b.cx+b.x11),m),s.arc(b.cx,b.cy,R,atan2(b.y11,b.x11),atan2(b.y01,b.x01),!m))):s.arc(0,0,h,x,w,m):s.lineTo(I,M)}else s.moveTo(0,0);if(s.closePath(),c)return s=null,c+""||null}return c.centroid=function(){var r=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,n=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-pi/2;return[cos(n)*r,sin(n)*r]},c.innerRadius=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),c):t},c.outerRadius=function(t){return arguments.length?(e="function"==typeof t?t:constant(+t),c):e},c.cornerRadius=function(t){return arguments.length?(r="function"==typeof t?t:constant(+t),c):r},c.padRadius=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:constant(+t),c):n},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:constant(+t),c):i},c.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:constant(+t),c):a},c.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:constant(+t),c):o},c.context=function(t){return arguments.length?(s=null==t?null:t,c):s},c}function array(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Linear(t){this._context=t}function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function line(t,e){var r=constant(!0),n=null,i=curveLinear,a=null,o=withPath(s);function s(s){var l,c,u,h=(s=array(s)).length,d=!1;for(null==n&&(a=i(u=o())),l=0;l<=h;++l)!(l<h&&r(c=s[l],l,s))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+t(c,l,s),+e(c,l,s));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?x:constant(t),e="function"==typeof e?e:void 0===e?y:constant(e),s.x=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:constant(+t),s):e},s.defined=function(t){return arguments.length?(r="function"==typeof t?t:constant(!!t),s):r},s.curve=function(t){return arguments.length?(i=t,null!=n&&(a=i(n)),s):i},s.context=function(t){return arguments.length?(null==t?n=a=null:a=i(n=t),s):n},s}function descending(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function identity(t){return t}function pie(){var t=identity,e=descending,r=null,n=constant(0),i=constant(tau),a=constant(0);function o(o){var s,l,c,u,h,d=(o=array(o)).length,p=0,f=new Array(d),g=new Array(d),m=+n.apply(this,arguments),y=Math.min(tau,Math.max(-tau,i.apply(this,arguments)-m)),b=Math.min(Math.abs(y)/d,a.apply(this,arguments)),$=b*(y<0?-1:1);for(s=0;s<d;++s)(h=g[f[s]=s]=+t(o[s],s,o))>0&&(p+=h);for(null!=e?f.sort((function(t,r){return e(g[t],g[r])})):null!=r&&f.sort((function(t,e){return r(o[t],o[e])})),s=0,c=p?(y-d*$)/p:0;s<d;++s,m=u)l=f[s],u=m+((h=g[l])>0?h*c:0)+$,g[l]={data:o[l],index:s,value:h,startAngle:m,endAngle:u,padAngle:b};return g}return o.value=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),o):t},o.sortValues=function(t){return arguments.length?(e=t,r=null,o):e},o.sort=function(t){return arguments.length?(r=t,e=null,o):r},o.startAngle=function(t){return arguments.length?(n="function"==typeof t?t:constant(+t),o):n},o.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:constant(+t),o):i},o.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:constant(+t),o):a},o}function Transform(t,e,r){this.k=t,this.x=e,this.y=r}Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},Transform.prototype={constructor:Transform,scale:function(t){return 1===t?this:new Transform(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Transform(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},Transform.prototype;class DecidablesElement extends s{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}firstUpdated(t){super.firstUpdated(t),select(this.renderRoot.host).classed("keyboard",!0).on("mousemove.keyboard touchstart.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!1).on("mousemove.keyboard touchstart.keyboard",null)})).on("keydown.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!0).on("keydown.keyboard mousemove.keyboard touchstart.keyboard",null)}))}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=interpolateRgb(t,"#ffffff")(.75),e.light50=interpolateRgb(t,"#ffffff")(.5),e.light25=interpolateRgb(t,"#ffffff")(.25),e.grey=t,e.dark25=interpolateRgb(t,"#000000")(.25),e.dark50=interpolateRgb(t,"#000000")(.5),e.dark75=interpolateRgb(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1,r=!1){const n=this.shadows.opacityUmbra+this.shadows.opacityBoost,i=this.shadows.opacityPenumbra+this.shadows.opacityBoost,a=this.shadows.opacityAmbient+this.shadows.opacityBoost,o=r?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,s=r?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,l=r?`rgba(${this.shadows.inverseBaselineColorString}, ${a})`:`rgba(${this.shadows.baselineColorString}, ${a})`,c=this.shadows.mapUmbra[t],u=this.shadows.mapPenumbra[t],h=this.shadows.mapAmbient[t];return`${e?`${-c.y}px ${c.y/2}px ${c.b}px ${c.s}px`:`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${o}, ${e?`${-u.y}px ${u.y/2}px ${u.b}px ${u.s}px`:`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${s}, ${e?`${-h.y}px ${h.y/2}px ${h.b}px ${h.s}px`:`${h.y/2}px ${h.y}px ${h.b}px ${h.s}px`} ${l}`}static get svgDefs(){const t=DecidablesElement.shadows;return`\n      <defs>\n        ${t.elevations.map((e=>`\n        <filter id=shadow-${e} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">\n          <feComponentTransfer in="SourceAlpha" result="solid">\n            <feFuncA type="table" tableValues="0 1 1"/>\n          </feComponentTransfer>\n          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />\n          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />\n          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />\n          ${0===t.mapUmbra[e].s?"":`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}\n          ${0===t.mapPenumbra[e].s?"":`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}\n          ${0===t.mapAmbient[e].s?"":`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}\n          <feGaussianBlur in=${0===t.mapUmbra[e].s?"offU":"spreadU"} result="blurU" stdDeviation=${t.mapUmbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapPenumbra[e].s?"offP":"spreadP"} result="blurP" stdDeviation=${t.mapPenumbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapAmbient[e].s?"offA":"spreadA"} result="blurA" stdDeviation=${t.mapAmbient[e].b/2} />\n          <feFlood in="SourceGraphic" result="opU" flood-color=${t.baselineColor} flood-opacity=${t.opacityUmbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opP" flood-color=${t.baselineColor} flood-opacity=${t.opacityPenumbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opA" flood-color=${t.baselineColor} flood-opacity=${t.opacityAmbient+t.opacityBoost} />\n          <feComposite in="opU" in2="blurU" result="shU" operator="in" />\n          <feComposite in="opP" in2="blurP" result="shP" operator="in" />\n          <feComposite in="opA" in2="blurA" result="shA" operator="in" />\n          <feMorphology in="solid" result="smaller" operator="erode" radius="1" />\n          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />\n          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />\n          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />\n          <feMerge>\n            <feMergeNode in="finalU" />\n            <feMergeNode in="finalP" />\n            <feMergeNode in="finalA" />\n            <feMergeNode in="SourceGraphic" />\n          </feMerge>\n        </filter>`))}\n      </defs>\n    `}static get svgFilters(){const t=DecidablesElement.shadows,e=t.elevations.map((e=>b`
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
    `}static get styles(){return i$2`
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
    `}}class DecidablesButton extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,i$2`
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
const o=t=>t??T;class DecidablesSlider extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}changed(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,i$2`
        :host {
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
      `]}render(){return x$1`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @change=${this.changed.bind(this)} @input=${this.inputted.bind(this)}>
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${o(this.min)} max=${o(this.max)} step=${o(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}></decidables-spinner>
    `}}customElements.define("decidables-slider",DecidablesSlider);class DecidablesSpinner extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,i$2`
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
    `}}customElements.define("decidables-spinner",DecidablesSpinner);class DecidablesSwitch extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,i$2`
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
    `}}customElements.define("decidables-switch",DecidablesSwitch);class DecidablesToggle extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,i$2`
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
    `}}customElements.define("decidables-toggle",DecidablesToggle);class DecidablesToggleOption extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,i$2`
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
    `}}customElements.define("decidables-toggle-option",DecidablesToggleOption);const DecidablesConverterSet={fromAttribute:t=>new Set(t.split(/\s+/)),toAttribute:t=>t.size?[...t].join(" "):null};function DecidablesMixinResizeable(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}class DetectableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return{h:Set1[2],m:Set1[4],fa:Set1[1],cr:Set1[0],hr:Set1[5],far:Set1[3],acc:Set1[8],d:Set1[7],c:Set1[6],s:"#4545d0",present:"#f032e6",absent:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"}}static get lights(){return Object.keys(DetectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DetectableElement.colors[e],"#ffffff")(.5),t)),{})}static get darks(){return Object.keys(DetectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DetectableElement.colors[e],"#000000")(.5),t)),{})}static get styles(){return[super.styles,i$2`
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
      `]}}class RDKTask extends(DecidablesMixinResizeable(DetectableElement)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},direction:{attribute:!1,type:Number,reflect:!1},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.direction=-1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.currentDirection=void 0,this.signals=["present","absent"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,a=.25*this.rem,o=.25*this.rem,s=n-(i+a),l=n-(o+.25*this.rem);this.xScale=linear().domain([-1,1]).range([0,l]),this.yScale=linear().domain([1,-1]).range([0,s]);const c=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),p=h.select(".plot").attr("transform",`translate(${o}, ${i})`),f=d.append("g").classed("underlayer",!0),g=p.select(".underlayer");f.append("circle").classed("background",!0),g.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");p.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",((t,e)=>e===this.COHERENT)).classed("random",((t,e)=>e===this.RANDOM));const m=d.append("g").classed("overlayer",!0),y=p.select(".overlayer");m.append("circle").classed("outline",!0),y.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=select(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data((t=>t));t.exit().remove();select(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();select(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"present":"absent",this.currentDirection="absent"===this.signal?void 0:this.direction>=0?this.direction:360*Math.random(),this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length="present"===this.signal?Math.round(this.count*this.coherence):0,this.dots[this.RANDOM].length="present"===this.signal?this.count-this.dots[this.COHERENT].length:this.count;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const o=this.dots[t][r];if(i||a){o.direction=t===this.RANDOM?360*Math.random():this.currentDirection,o.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());o.x=this.xScale(n*Math.cos(r)),o.y=this.yScale(n*Math.sin(r))}else if(e>o.birth+this.lifetime){o.birth+=this.lifetime,o.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());o.x=this.xScale(r*Math.cos(e)),o.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(o.direction=this.currentDirection);const e=o.direction*(Math.PI/180);o.dx=this.speed*(n/1e3)*Math.cos(e),o.dy=this.speed*(n/1e3)*Math.sin(e),o.x+=o.dx,o.y+=o.dy;(o.x-this.xScale(0))**2+(o.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(o.x=-(o.x-this.xScale(0))+this.xScale(0),o.y=-(o.y-this.yScale(0))+this.yScale(0))}}}const a=select(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),o=a.enter().append("g").classed("fixation",!0);o.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),o.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const s=select(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data((t=>t));s.enter().append("circle").classed("dot",!0).merge(s).attr("cx",(t=>t.x)).attr("cy",(t=>t.y)),s.exit().remove();const l=select(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}customElements.define("rdk-task",RDKTask);var jstat={exports:{}};jstat.exports=function(){var t=function(t,e){var r=Array.prototype.concat,n=Array.prototype.slice,i=Object.prototype.toString;function a(e,r){var n=e>r?e:r;return t.pow(10,17-~~(t.log(n>0?n:-n)*t.LOG10E))}var o=Array.isArray||function(t){return"[object Array]"===i.call(t)};function s(t){return"[object Function]"===i.call(t)}function l(t){return"number"==typeof t&&t-t==0}function c(t){return r.apply([],t)}function u(){return new u._init(arguments)}function h(){return 0}function d(){return 1}function p(t,e){return t===e?1:0}u.fn=u.prototype,u._init=function(t){if(o(t[0]))if(o(t[0][0])){s(t[1])&&(t[0]=u.map(t[0],t[1]));for(var e=0;e<t[0].length;e++)this[e]=t[0][e];this.length=t[0].length}else this[0]=s(t[1])?u.map(t[0],t[1]):t[0],this.length=1;else if(l(t[0]))this[0]=u.seq.apply(null,t),this.length=1;else{if(t[0]instanceof u)return u(t[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:a,isArray:o,isFunction:s,isNumber:l,toVector:c},u._random_fn=t.random,u.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");u._random_fn=t},u.extend=function(t){var e,r;if(1===arguments.length){for(r in t)u[r]=t[r];return this}for(e=1;e<arguments.length;e++)for(r in arguments[e])t[r]=arguments[e][r];return t},u.rows=function(t){return t.length||1},u.cols=function(t){return t[0].length||1},u.dimensions=function(t){return{rows:u.rows(t),cols:u.cols(t)}},u.row=function(t,e){return o(e)?e.map((function(e){return u.row(t,e)})):t[e]},u.rowa=function(t,e){return u.row(t,e)},u.col=function(t,e){if(o(e)){var r=u.arange(t.length).map((function(){return new Array(e.length)}));return e.forEach((function(e,n){u.arange(t.length).forEach((function(i){r[i][n]=t[i][e]}))})),r}for(var n=new Array(t.length),i=0;i<t.length;i++)n[i]=[t[i][e]];return n},u.cola=function(t,e){return u.col(t,e).map((function(t){return t[0]}))},u.diag=function(t){for(var e=u.rows(t),r=new Array(e),n=0;n<e;n++)r[n]=[t[n][n]];return r},u.antidiag=function(t){for(var e=u.rows(t)-1,r=new Array(e),n=0;e>=0;e--,n++)r[n]=[t[n][e]];return r},u.transpose=function(t){var e,r,n,i,a,s=[];for(o(t[0])||(t=[t]),r=t.length,n=t[0].length,a=0;a<n;a++){for(e=new Array(r),i=0;i<r;i++)e[i]=t[i][a];s.push(e)}return 1===s.length?s[0]:s},u.map=function(t,e,r){var n,i,a,s,l;for(o(t[0])||(t=[t]),i=t.length,a=t[0].length,s=r?t:new Array(i),n=0;n<i;n++)for(s[n]||(s[n]=new Array(a)),l=0;l<a;l++)s[n][l]=e(t[n][l],n,l);return 1===s.length?s[0]:s},u.cumreduce=function(t,e,r){var n,i,a,s,l;for(o(t[0])||(t=[t]),i=t.length,a=t[0].length,s=r?t:new Array(i),n=0;n<i;n++)for(s[n]||(s[n]=new Array(a)),a>0&&(s[n][0]=t[n][0]),l=1;l<a;l++)s[n][l]=e(s[n][l-1],t[n][l]);return 1===s.length?s[0]:s},u.alter=function(t,e){return u.map(t,e,!0)},u.create=function(t,e,r){var n,i,a=new Array(t);for(s(e)&&(r=e,e=t),n=0;n<t;n++)for(a[n]=new Array(e),i=0;i<e;i++)a[n][i]=r(n,i);return a},u.zeros=function(t,e){return l(e)||(e=t),u.create(t,e,h)},u.ones=function(t,e){return l(e)||(e=t),u.create(t,e,d)},u.rand=function(t,e){return l(e)||(e=t),u.create(t,e,u._random_fn)},u.identity=function(t,e){return l(e)||(e=t),u.create(t,e,p)},u.symmetric=function(t){var e,r,n=t.length;if(t.length!==t[0].length)return!1;for(e=0;e<n;e++)for(r=0;r<n;r++)if(t[r][e]!==t[e][r])return!1;return!0},u.clear=function(t){return u.alter(t,h)},u.seq=function(t,e,r,n){s(n)||(n=!1);var i,o=[],l=a(t,e),c=(e*l-t*l)/((r-1)*l),u=t;for(i=0;u<=e&&i<r;u=(t*l+c*l*++i)/l)o.push(n?n(u,i):u);return o},u.arange=function(t,r,n){var i,a=[];if(n=n||1,r===e&&(r=t,t=0),t===r||0===n)return[];if(t<r&&n<0)return[];if(t>r&&n>0)return[];if(n>0)for(i=t;i<r;i+=n)a.push(i);else for(i=t;i>r;i+=n)a.push(i);return a},u.slice=function(){function t(t,r,n,i){var a,o=[],s=t.length;if(r===e&&n===e&&i===e)return u.copy(t);if(i=i||1,(r=(r=r||0)>=0?r:s+r)===(n=(n=n||t.length)>=0?n:s+n)||0===i)return[];if(r<n&&i<0)return[];if(r>n&&i>0)return[];if(i>0)for(a=r;a<n;a+=i)o.push(t[a]);else for(a=r;a>n;a+=i)o.push(t[a]);return o}function r(e,r){var n,i;return l((r=r||{}).row)?l(r.col)?e[r.row][r.col]:t(u.rowa(e,r.row),(n=r.col||{}).start,n.end,n.step):l(r.col)?t(u.cola(e,r.col),(i=r.row||{}).start,i.end,i.step):(i=r.row||{},n=r.col||{},t(e,i.start,i.end,i.step).map((function(e){return t(e,n.start,n.end,n.step)})))}return r}(),u.sliceAssign=function(r,n,i){var a,o;if(l(n.row)){if(l(n.col))return r[n.row][n.col]=i;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,a=u.arange(n.col.start,t.min(r.length,n.col.end),n.col.step);var s=n.row;return a.forEach((function(t,e){r[s][t]=i[e]})),r}if(l(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,o=u.arange(n.row.start,t.min(r[0].length,n.row.end),n.row.step);var c=n.col;return o.forEach((function(t,e){r[t][c]=i[e]})),r}return i[0].length===e&&(i=[i]),n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,o=u.arange(n.row.start,t.min(r.length,n.row.end),n.row.step),a=u.arange(n.col.start,t.min(r[0].length,n.col.end),n.col.step),o.forEach((function(t,e){a.forEach((function(n,a){r[t][n]=i[e][a]}))})),r},u.diagonal=function(t){var e=u.zeros(t.length,t.length);return t.forEach((function(t,r){e[r][r]=t})),e},u.copy=function(t){return t.map((function(t){return l(t)?t:t.map((function(t){return t}))}))};var f=u.prototype;return f.length=0,f.push=Array.prototype.push,f.sort=Array.prototype.sort,f.splice=Array.prototype.splice,f.slice=Array.prototype.slice,f.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},f.map=function(t,e){return u(u.map(this,t,e))},f.cumreduce=function(t,e){return u(u.cumreduce(this,t,e))},f.alter=function(t){return u.alter(this,t),this},function(t){for(var e=0;e<t.length;e++)!function(t){f[t]=function(e){var r,n=this;return e?(setTimeout((function(){e.call(n,f[t].call(n))})),this):(r=u[t](this),o(r)?u(r):r)}}(t[e])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var e=0;e<t.length;e++)!function(t){f[t]=function(e,r){var n=this;return r?(setTimeout((function(){r.call(n,f[t].call(n,e))})),this):u(u[t](this,e))}}(t[e])}("row col".split(" ")),function(t){for(var e=0;e<t.length;e++)!function(t){f[t]=function(){return u(u[t].apply(null,arguments))}}(t[e])}("create zeros ones rand identity".split(" ")),u}(Math);return function(t,e){var r=t.utils.isFunction;function n(t,e){return t-e}function i(t,r,n){return e.max(r,e.min(t,n))}t.sum=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.sumsqrd=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r]*t[r];return e},t.sumsqerr=function(e){for(var r,n=t.mean(e),i=0,a=e.length;--a>=0;)i+=(r=e[a]-n)*r;return i},t.sumrow=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.product=function(t){for(var e=1,r=t.length;--r>=0;)e*=t[r];return e},t.min=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]<e&&(e=t[r]);return e},t.max=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]>e&&(e=t[r]);return e},t.unique=function(t){for(var e={},r=[],n=0;n<t.length;n++)e[t[n]]||(e[t[n]]=!0,r.push(t[n]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(r){var n=r.map(e.log),i=t.mean(n);return e.exp(i)},t.median=function(t){var e=t.length,r=t.slice().sort(n);return 1&e?r[e/2|0]:(r[e/2-1]+r[e/2])/2},t.cumsum=function(e){return t.cumreduce(e,(function(t,e){return t+e}))},t.cumprod=function(e){return t.cumreduce(e,(function(t,e){return t*e}))},t.diff=function(t){var e,r=[],n=t.length;for(e=1;e<n;e++)r.push(t[e]-t[e-1]);return r},t.rank=function(t){var e,r=[],i={};for(e=0;e<t.length;e++)i[l=t[e]]?i[l]++:(i[l]=1,r.push(l));var a=r.sort(n),o={},s=1;for(e=0;e<a.length;e++){var l,c=i[l=a[e]],u=(s+(s+c-1))/2;o[l]=u,s+=c}return t.map((function(t){return o[t]}))},t.mode=function(t){var e,r=t.length,i=t.slice().sort(n),a=1,o=0,s=0,l=[];for(e=0;e<r;e++)i[e]===i[e+1]?a++:(a>o?(l=[i[e]],o=a,s=0):a===o&&(l.push(i[e]),s++),a=1);return 0===s?l[0]:l},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,r){return t.sumsqerr(e)/(e.length-(r?1:0))},t.pooledvariance=function(e){var r=e.reduce((function(e,r){return e+t.sumsqerr(r)}),0),n=e.reduce((function(t,e){return t+e.length}),0);return r/(n-e.length)},t.deviation=function(e){for(var r=t.mean(e),n=e.length,i=new Array(n),a=0;a<n;a++)i[a]=e[a]-r;return i},t.stdev=function(r,n){return e.sqrt(t.variance(r,n))},t.pooledstdev=function(r){return e.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var n=t.mean(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.mean(i)},t.meddev=function(r){for(var n=t.median(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.median(i)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(t){var r=t.length,i=t.slice().sort(n);return[i[e.round(r/4)-1],i[e.round(r/2)-1],i[e.round(3*r/4)-1]]},t.quantiles=function(t,r,a,o){var s,l,c,u,h,d=t.slice().sort(n),p=[r.length],f=t.length;for(void 0===a&&(a=3/8),void 0===o&&(o=3/8),s=0;s<r.length;s++)c=f*(l=r[s])+(a+l*(1-a-o)),u=e.floor(i(c,1,f-1)),h=i(c-u,0,1),p[s]=(1-h)*d[u-1]+h*d[u];return p},t.percentile=function(t,e,r){var i=t.slice().sort(n),a=e*(i.length+(r?1:-1))+(r?0:1),o=parseInt(a),s=a-o;return o+1<i.length?i[o-1]+s*(i[o]-i[o-1]):i[o-1]},t.percentileOfScore=function(t,e,r){var n,i,a=0,o=t.length,s=!1;for("strict"===r&&(s=!0),i=0;i<o;i++)n=t[i],(s&&n<e||!s&&n<=e)&&a++;return a/o},t.histogram=function(r,n){n=n||4;var i,a=t.min(r),o=(t.max(r)-a)/n,s=r.length,l=[];for(i=0;i<n;i++)l[i]=0;for(i=0;i<s;i++)l[e.min(e.floor((r[i]-a)/o),n-1)]+=1;return l},t.covariance=function(e,r){var n,i=t.mean(e),a=t.mean(r),o=e.length,s=new Array(o);for(n=0;n<o;n++)s[n]=(e[n]-i)*(r[n]-a);return t.sum(s)/(o-1)},t.corrcoeff=function(e,r){return t.covariance(e,r)/t.stdev(e,1)/t.stdev(r,1)},t.spearmancoeff=function(e,r){return e=t.rank(e),r=t.rank(r),t.corrcoeff(e,r)},t.stanMoment=function(r,n){for(var i=t.mean(r),a=t.stdev(r),o=r.length,s=0,l=0;l<o;l++)s+=e.pow((r[l]-i)/a,n);return s/r.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var a=t.prototype;!function(e){for(var n=0;n<e.length;n++)!function(e){a[e]=function(n,i){var o=[],s=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout((function(){i.call(l,a[e].call(l,n))})),this;if(this.length>1){for(l=!0===n?this:this.transpose();s<l.length;s++)o[s]=t[e](l[s]);return o}return t[e](this[0],n)}}(e[n])}("cumsum cumprod".split(" ")),function(e){for(var n=0;n<e.length;n++)!function(e){a[e]=function(n,i){var o=[],s=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout((function(){i.call(l,a[e].call(l,n))})),this;if(this.length>1){for("sumrow"!==e&&(l=!0===n?this:this.transpose());s<l.length;s++)o[s]=t[e](l[s]);return!0===n?t[e](t.utils.toVector(o)):o}return t[e](this[0],n)}}(e[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(e){for(var n=0;n<e.length;n++)!function(e){a[e]=function(){var n,i=[],o=0,s=this,l=Array.prototype.slice.call(arguments);if(r(l[l.length-1])){n=l[l.length-1];var c=l.slice(0,l.length-1);return setTimeout((function(){n.call(s,a[e].apply(s,c))})),this}n=void 0;var u=function(r){return t[e].apply(s,[r].concat(l))};if(this.length>1){for(s=s.transpose();o<s.length;o++)i[o]=u(s[o]);return i}return u(this[0])}}(e[n])}("quantiles percentileOfScore".split(" "))}(t,Math),function(t,e){t.gammaln=function(t){var r,n,i,a=0,o=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015;for(i=(n=r=t)+5.5,i-=(r+.5)*e.log(i);a<6;a++)s+=o[a]/++n;return e.log(2.5066282746310007*s/r)-i},t.loggam=function(t){var r,n,i,a,o,s,l,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,l=0,1==t||2==t)return 0;for(t<=7&&(r=t+(l=e.floor(7-t))),n=1/(r*r),i=2*e.PI,o=c[9],s=8;s>=0;s--)o*=n,o+=c[s];if(a=o/r+.5*e.log(i)+(r-.5)*e.log(r)-r,t<=7)for(s=1;s<=l;s++)a-=e.log(r-1),r-=1;return a},t.gammafn=function(t){var r,n,i,a,o=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],s=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,c=0,u=0,h=0,d=t;if(t>171.6243769536076)return 1/0;if(d<=0){if(!(a=d%1+36e-17))return 1/0;l=(1&d?-1:1)*e.PI/e.sin(e.PI*a),d=1-d}for(i=d,n=d<1?d++:(d-=c=(0|d)-1)-1,r=0;r<8;++r)h=(h+o[r])*n,u=u*n+s[r];if(a=h/u+1,i<d)a/=i;else if(i>d)for(r=0;r<c;++r)a*=d,d++;return l&&(a=l/a),a},t.gammap=function(e,r){return t.lowRegGamma(e,r)*t.gammafn(e)},t.lowRegGamma=function(r,n){var i,a=t.gammaln(r),o=r,s=1/r,l=s,c=n+1-r,u=1/1e-30,h=1/c,d=h,p=1,f=-~(8.5*e.log(r>=1?r:1/r)+.4*r+17);if(n<0||r<=0)return NaN;if(n<r+1){for(;p<=f;p++)s+=l*=n/++o;return s*e.exp(-n+r*e.log(n)-a)}for(;p<=f;p++)d*=(h=1/(h=(i=-p*(p-r))*h+(c+=2)))*(u=c+i/u);return 1-d*e.exp(-n+r*e.log(n)-a)},t.factorialln=function(e){return e<0?NaN:t.gammaln(e+1)},t.factorial=function(e){return e<0?NaN:t.gammafn(e+1)},t.combination=function(r,n){return r>170||n>170?e.exp(t.combinationln(r,n)):t.factorial(r)/t.factorial(n)/t.factorial(r-n)},t.combinationln=function(e,r){return t.factorialln(e)-t.factorialln(r)-t.factorialln(e-r)},t.permutation=function(e,r){return t.factorial(e)/t.factorial(e-r)},t.betafn=function(r,n){if(!(r<=0||n<=0))return r+n>170?e.exp(t.betaln(r,n)):t.gammafn(r)*t.gammafn(n)/t.gammafn(r+n)},t.betaln=function(e,r){return t.gammaln(e)+t.gammaln(r)-t.gammaln(e+r)},t.betacf=function(t,r,n){var i,a,o,s,l=1e-30,c=1,u=r+n,h=r+1,d=r-1,p=1,f=1-u*t/h;for(e.abs(f)<l&&(f=l),s=f=1/f;c<=100&&(f=1+(a=c*(n-c)*t/((d+(i=2*c))*(r+i)))*f,e.abs(f)<l&&(f=l),p=1+a/p,e.abs(p)<l&&(p=l),s*=(f=1/f)*p,f=1+(a=-(r+c)*(u+c)*t/((r+i)*(h+i)))*f,e.abs(f)<l&&(f=l),p=1+a/p,e.abs(p)<l&&(p=l),s*=o=(f=1/f)*p,!(e.abs(o-1)<3e-7));c++);return s},t.gammapinv=function(r,n){var i,a,o,s,l,c,u=0,h=n-1,d=1e-8,p=t.gammaln(n);if(r>=1)return e.max(100,n+100*e.sqrt(n));if(r<=0)return 0;for(n>1?(l=e.log(h),c=e.exp(h*(l-1)-p),s=r<.5?r:1-r,i=(2.30753+.27061*(a=e.sqrt(-2*e.log(s))))/(1+a*(.99229+.04481*a))-a,r<.5&&(i=-i),i=e.max(.001,n*e.pow(1-1/(9*n)-i/(3*e.sqrt(n)),3))):i=r<(a=1-n*(.253+.12*n))?e.pow(r/a,1/n):1-e.log(1-(r-a)/(1-a));u<12;u++){if(i<=0)return 0;if((i-=a=(o=(t.lowRegGamma(n,i)-r)/(a=n>1?c*e.exp(-(i-h)+h*(e.log(i)-l)):e.exp(-i+h*e.log(i)-p)))/(1-.5*e.min(1,o*((n-1)/i-1))))<=0&&(i=.5*(i+a)),e.abs(a)<d*i)break}return i},t.erf=function(t){var r,n,i,a,o=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],s=o.length-1,l=!1,c=0,u=0;for(t<0&&(t=-t,l=!0),n=4*(r=2/(2+t))-2;s>0;s--)i=c,c=n*c-u+o[s],u=i;return a=r*e.exp(-t*t+.5*(o[0]+n*c)-u),l?a-1:1-a},t.erfc=function(e){return 1-t.erf(e)},t.erfcinv=function(r){var n,i,a,o,s=0;if(r>=2)return-100;if(r<=0)return 100;for(o=r<1?r:2-r,n=-.70711*((2.30753+.27061*(a=e.sqrt(-2*e.log(o/2))))/(1+a*(.99229+.04481*a))-a);s<2;s++)n+=(i=t.erfc(n)-o)/(1.1283791670955126*e.exp(-n*n)-n*i);return r<1?n:-n},t.ibetainv=function(r,n,i){var a,o,s,l,c,u,h,d,p,f,g=1e-8,m=n-1,y=i-1,b=0;if(r<=0)return 0;if(r>=1)return 1;for(n>=1&&i>=1?(s=r<.5?r:1-r,u=(2.30753+.27061*(l=e.sqrt(-2*e.log(s))))/(1+l*(.99229+.04481*l))-l,r<.5&&(u=-u),h=(u*u-3)/6,d=2/(1/(2*n-1)+1/(2*i-1)),p=u*e.sqrt(h+d)/d-(1/(2*i-1)-1/(2*n-1))*(h+5/6-2/(3*d)),u=n/(n+i*e.exp(2*p))):(a=e.log(n/(n+i)),o=e.log(i/(n+i)),u=r<(l=e.exp(n*a)/n)/(p=l+(c=e.exp(i*o)/i))?e.pow(n*p*r,1/n):1-e.pow(i*p*(1-r),1/i)),f=-t.gammaln(n)-t.gammaln(i)+t.gammaln(n+i);b<10;b++){if(0===u||1===u)return u;if((u-=l=(c=(t.ibeta(u,n,i)-r)/(l=e.exp(m*e.log(u)+y*e.log(1-u)+f)))/(1-.5*e.min(1,c*(m/u-y/(1-u)))))<=0&&(u=.5*(u+l)),u>=1&&(u=.5*(u+l+1)),e.abs(l)<g*u&&b>0)break}return u},t.ibeta=function(r,n,i){var a=0===r||1===r?0:e.exp(t.gammaln(n+i)-t.gammaln(n)-t.gammaln(i)+n*e.log(r)+i*e.log(1-r));return!(r<0||r>1)&&(r<(n+1)/(n+i+2)?a*t.betacf(r,n,i)/n:1-a*t.betacf(1-r,i,n)/i)},t.randn=function(r,n){var i,a,o,s,l;if(n||(n=r),r)return t.create(r,n,(function(){return t.randn()}));do{i=t._random_fn(),a=1.7156*(t._random_fn()-.5),l=(o=i-.449871)*o+(s=e.abs(a)+.386595)*(.196*s-.25472*o)}while(l>.27597&&(l>.27846||a*a>-4*e.log(i)*i*i));return a/i},t.randg=function(r,n,i){var a,o,s,l,c,u,h=r;if(i||(i=n),r||(r=1),n)return(u=t.zeros(n,i)).alter((function(){return t.randg(r)})),u;r<1&&(r+=1),a=r-1/3,o=1/e.sqrt(9*a);do{do{l=1+o*(c=t.randn())}while(l<=0);l*=l*l,s=t._random_fn()}while(s>1-.331*e.pow(c,4)&&e.log(s)>.5*c*c+a*(1-l+e.log(l)));if(r==h)return a*l;do{s=t._random_fn()}while(0===s);return e.pow(s,1/h)*a*l},function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(){return t(t.map(this,(function(r){return t[e](r)})))}}(e[r])}("gammaln gammafn factorial factorialln".split(" ")),function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(){return t(t[e].apply(null,arguments))}}(e[r])}("randn".split(" "))}(t,Math),function(t,e){function r(t,r,n,i){for(var a,o=0,s=1,l=1,c=1,u=0,h=0;e.abs((l-h)/l)>i;)h=l,s=c+(a=-(r+u)*(r+n+u)*t/(r+2*u)/(r+2*u+1))*s,l=(o=l+a*o)+(a=(u+=1)*(n-u)*t/(r+2*u-1)/(r+2*u))*l,o/=c=s+a*c,s/=c,l/=c,c=1;return l/r}function n(t){return t/e.abs(t)}function i(r,n,i){var a=12,o=6,s=-30,l=-50,c=60,u=8,h=3,d=2,p=3,f=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],g=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],m=.5*r;if(m>=u)return 1;var y,b=2*t.normal.cdf(m,0,1,1,0)-1;b=b>=e.exp(l/i)?e.pow(b,i):0;for(var $=m,v=(u-m)/(y=r>h?d:p),w=$+v,x=0,E=i-1,S=1;S<=y;S++){for(var _=0,T=.5*(w+$),A=.5*(w-$),R=1;R<=a;R++){var C,O=T+A*(o<R?f[(C=a-R+1)-1]:-f[(C=R)-1]),k=O*O;if(k>c)break;var N=2*t.normal.cdf(O,0,1,1,0)*.5-2*t.normal.cdf(O,r,1,1,0)*.5;N>=e.exp(s/E)&&(_+=N=g[C-1]*e.exp(-.5*k)*e.pow(N,E))}x+=_*=2*A*i/e.sqrt(2*e.PI),$=w,w+=v}return(b+=x)<=e.exp(s/n)?0:(b=e.pow(b,n))>=1?1:b}function a(t,r,n){var i=.322232421088,a=.099348462606,o=-1,s=.588581570495,l=-.342242088547,c=.531103462366,u=-.204231210125,h=.10353775285,d=-453642210148e-16,p=.0038560700634,f=.8832,g=.2368,m=1.214,y=1.208,b=1.4142,$=120,v=.5-.5*t,w=e.sqrt(e.log(1/(v*v))),x=w+((((w*d+u)*w+l)*w+o)*w+i)/((((w*p+h)*w+c)*w+s)*w+a);n<$&&(x+=(x*x*x+x)/n/4);var E=f-g*x;return n<$&&(E+=-m/n+y*x/n),x*(E*e.log(r-1)+b)}!function(e){for(var r=0;r<e.length;r++)!function(e){t[e]=function t(e,r,n){return this instanceof t?(this._a=e,this._b=r,this._c=n,this):new t(e,r,n)},t.fn[e]=function(r,n,i){var a=t[e](r,n,i);return a.data=this,a},t[e].prototype.sample=function(r){var n=this._a,i=this._b,a=this._c;return r?t.alter(r,(function(){return t[e].sample(n,i,a)})):t[e].sample(n,i,a)},function(r){for(var n=0;n<r.length;n++)!function(r){t[e].prototype[r]=function(n){var i=this._a,a=this._b,o=this._c;return n||0===n||(n=this.data),"number"!=typeof n?t.fn.map.call(n,(function(n){return t[e][r](n,i,a,o)})):t[e][r](n,i,a,o)}}(r[n])}("pdf cdf inv".split(" ")),function(r){for(var n=0;n<r.length;n++)!function(r){t[e].prototype[r]=function(){return t[e][r](this._a,this._b,this._c)}}(r[n])}("mean median mode variance".split(" "))}(e[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,n,i){return r>1||r<0?0:1==n&&1==i?1:n<512&&i<512?e.pow(r,n-1)*e.pow(1-r,i-1)/t.betafn(n,i):e.exp((n-1)*e.log(r)+(i-1)*e.log(1-r)-t.betaln(n,i))},cdf:function(e,r,n){return e>1||e<0?1*(e>1):t.ibeta(e,r,n)},inv:function(e,r,n){return t.ibetainv(e,r,n)},mean:function(t,e){return t/(t+e)},median:function(e,r){return t.ibetainv(.5,e,r)},mode:function(t,e){return(t-1)/(t+e-2)},sample:function(e,r){var n=t.randg(e);return n/(n+t.randg(r))},variance:function(t,r){return t*r/(e.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,n,i){var a;return r<0?0:n<=2?0===r&&n<2?1/0:0===r&&2===n?1:1/t.betafn(n/2,i/2)*e.pow(n/i,n/2)*e.pow(r,n/2-1)*e.pow(1+n/i*r,-(n+i)/2):(a=n*r/(i+r*n),n*(i/(i+r*n))/2*t.binomial.pdf((n-2)/2,(n+i-2)/2,a))},cdf:function(e,r,n){return e<0?0:t.ibeta(r*e/(r*e+n),r/2,n/2)},inv:function(e,r,n){return n/(r*(1/t.ibetainv(e,r/2,n/2)-1))},mean:function(t,e){return e>2?e/(e-2):void 0},mode:function(t,e){return t>2?e*(t-2)/(t*(e+2)):void 0},sample:function(e,r){return 2*t.randg(e/2)/e/(2*t.randg(r/2)/r)},variance:function(t,e){if(!(e<=4))return 2*e*e*(t+e-2)/(t*(e-2)*(e-2)*(e-4))}}),t.extend(t.cauchy,{pdf:function(t,r,n){return n<0?0:n/(e.pow(t-r,2)+e.pow(n,2))/e.PI},cdf:function(t,r,n){return e.atan((t-r)/n)/e.PI+.5},inv:function(t,r,n){return r+n*e.tan(e.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,n){return t.randn()*e.sqrt(1/(2*t.randg(.5)))*n+r}}),t.extend(t.chisquare,{pdf:function(r,n){return r<0?0:0===r&&2===n?.5:e.exp((n/2-1)*e.log(r)-r/2-n/2*e.log(2)-t.gammaln(n/2))},cdf:function(e,r){return e<0?0:t.lowRegGamma(r/2,e/2)},inv:function(e,r){return 2*t.gammapinv(e,.5*r)},mean:function(t){return t},median:function(t){return t*e.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(e){return 2*t.randg(e/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*e.exp(-r*t)},cdf:function(t,r){return t<0?0:1-e.exp(-r*t)},inv:function(t,r){return-e.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*e.log(2)},mode:function(){return 0},sample:function(r){return-1/r*e.log(t._random_fn())},variance:function(t){return e.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,n,i){return r<0?0:0===r&&1===n?1/i:e.exp((n-1)*e.log(r)-r/i-t.gammaln(n)-n*e.log(i))},cdf:function(e,r,n){return e<0?0:t.lowRegGamma(r,e/n)},inv:function(e,r,n){return t.gammapinv(e,r)*n},mean:function(t,e){return t*e},mode:function(t,e){if(t>1)return(t-1)*e},sample:function(e,r){return t.randg(e)*r},variance:function(t,e){return t*e*e}}),t.extend(t.invgamma,{pdf:function(r,n,i){return r<=0?0:e.exp(-(n+1)*e.log(r)-i/r-t.gammaln(n)+n*e.log(i))},cdf:function(e,r,n){return e<=0?0:1-t.lowRegGamma(r,n/e)},inv:function(e,r,n){return n/t.gammapinv(1-e,r)},mean:function(t,e){return t>1?e/(t-1):void 0},mode:function(t,e){return e/(t+1)},sample:function(e,r){return r/t.randg(e)},variance:function(t,e){if(!(t<=2))return e*e/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,n){return 0===t&&1===r?n:1===t&&1===n?r:e.exp(e.log(r)+e.log(n)+(r-1)*e.log(t)+(n-1)*e.log(1-e.pow(t,r)))},cdf:function(t,r,n){return t<0?0:t>1?1:1-e.pow(1-e.pow(t,r),n)},inv:function(t,r,n){return e.pow(1-e.pow(1-t,1/n),1/r)},mean:function(e,r){return r*t.gammafn(1+1/e)*t.gammafn(r)/t.gammafn(1+1/e+r)},median:function(t,r){return e.pow(1-e.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return e.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,n){return t<=0?0:e.exp(-e.log(t)-.5*e.log(2*e.PI)-e.log(n)-e.pow(e.log(t)-r,2)/(2*n*n))},cdf:function(r,n,i){return r<0?0:.5+.5*t.erf((e.log(r)-n)/e.sqrt(2*i*i))},inv:function(r,n,i){return e.exp(-1.4142135623730951*i*t.erfcinv(2*r)+n)},mean:function(t,r){return e.exp(t+r*r/2)},median:function(t){return e.exp(t)},mode:function(t,r){return e.exp(t-r*r)},sample:function(r,n){return e.exp(t.randn()*n+r)},variance:function(t,r){return(e.exp(r*r)-1)*e.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,n,i){var a=1e-14;return e.abs(i)<a?t.studentt.pdf(r,n):e.abs(r)<a?e.exp(t.gammaln((n+1)/2)-i*i/2-.5*e.log(e.PI*n)-t.gammaln(n/2)):n/r*(t.noncentralt.cdf(r*e.sqrt(1+2/n),n+2,i)-t.noncentralt.cdf(r,n,i))},cdf:function(r,n,i){var a=1e-14,o=200;if(e.abs(i)<a)return t.studentt.cdf(r,n);var s=!1;r<0&&(s=!0,i=-i);for(var l=t.normal.cdf(-i,0,1),c=a+1,u=c,h=r*r/(r*r+n),d=0,p=e.exp(-i*i/2),f=e.exp(-i*i/2-.5*e.log(2)-t.gammaln(1.5))*i;d<o||u>a||c>a;)u=c,d>0&&(p*=i*i/(2*d),f*=i*i/(2*(d+.5))),l+=.5*(c=p*t.beta.cdf(h,d+.5,n/2)+f*t.beta.cdf(h,d+1,n/2)),d++;return s?1-l:l}}),t.extend(t.normal,{pdf:function(t,r,n){return e.exp(-.5*e.log(2*e.PI)-e.log(n)-e.pow(t-r,2)/(2*n*n))},cdf:function(r,n,i){return.5*(1+t.erf((r-n)/e.sqrt(2*i*i)))},inv:function(e,r,n){return-1.4142135623730951*n*t.erfcinv(2*e)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(e,r){return t.randn()*r+e},variance:function(t,e){return e*e}}),t.extend(t.pareto,{pdf:function(t,r,n){return t<r?0:n*e.pow(r,n)/e.pow(t,n+1)},cdf:function(t,r,n){return t<r?0:1-e.pow(r/t,n)},inv:function(t,r,n){return r/e.pow(1-t,1/n)},mean:function(t,r){if(!(r<=1))return r*e.pow(t,r)/(r-1)},median:function(t,r){return t*(r*e.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(e.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,n){return n=n>1e100?1e100:n,1/(e.sqrt(n)*t.betafn(.5,n/2))*e.pow(1+r*r/n,-(n+1)/2)},cdf:function(r,n){var i=n/2;return t.ibeta((r+e.sqrt(r*r+n))/(2*e.sqrt(r*r+n)),i,i)},inv:function(r,n){var i=t.ibetainv(2*e.min(r,1-r),.5*n,.5);return i=e.sqrt(n*(1-i)/i),r>.5?i:-i},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*e.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,n){return t<0||r<0||n<0?0:n/r*e.pow(t/r,n-1)*e.exp(-e.pow(t/r,n))},cdf:function(t,r,n){return t<0?0:1-e.exp(-e.pow(t/r,n))},inv:function(t,r,n){return r*e.pow(-e.log(1-t),1/n)},mean:function(e,r){return e*t.gammafn(1+1/r)},median:function(t,r){return t*e.pow(e.log(2),1/r)},mode:function(t,r){return r<=1?0:t*e.pow((r-1)/r,1/r)},sample:function(r,n){return r*e.pow(-e.log(t._random_fn()),1/n)},variance:function(r,n){return r*r*t.gammafn(1+2/n)-e.pow(t.weibull.mean(r,n),2)}}),t.extend(t.uniform,{pdf:function(t,e,r){return t<e||t>r?0:1/(r-e)},cdf:function(t,e,r){return t<e?0:t<r?(t-e)/(r-e):1},inv:function(t,e,r){return e+t*(r-e)},mean:function(t,e){return.5*(t+e)},median:function(e,r){return t.mean(e,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,r){return e/2+r/2+(r/2-e/2)*(2*t._random_fn()-1)},variance:function(t,r){return e.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,n,i){return 0===i||1===i?n*i===r?1:0:t.combination(n,r)*e.pow(i,r)*e.pow(1-i,n-r)},cdf:function(n,i,a){var o,s=1e-10;if(n<0)return 0;if(n>=i)return 1;if(a<0||a>1||i<=0)return NaN;var l=a,c=(n=e.floor(n))+1,u=i-n,h=c+u,d=e.exp(t.gammaln(h)-t.gammaln(u)-t.gammaln(c)+c*e.log(l)+u*e.log(1-l));return o=l<(c+1)/(h+2)?d*r(l,c,u,s):1-d*r(1-l,u,c,s),e.round(1/s*(1-o))/(1/s)}}),t.extend(t.negbin,{pdf:function(r,n,i){return r===r>>>0&&(r<0?0:t.combination(r+n-1,n-1)*e.pow(1-i,r)*e.pow(i,n))},cdf:function(e,r,n){var i=0,a=0;if(e<0)return 0;for(;a<=e;a++)i+=t.negbin.pdf(a,r,n);return i}}),t.extend(t.hypgeom,{pdf:function(r,n,i,a){if(r!=r|0)return!1;if(r<0||r<i-(n-a))return 0;if(r>a||r>i)return 0;if(2*i>n)return 2*a>n?t.hypgeom.pdf(n-i-a+r,n,n-i,n-a):t.hypgeom.pdf(a-r,n,n-i,a);if(2*a>n)return t.hypgeom.pdf(i-r,n,i,n-a);if(i<a)return t.hypgeom.pdf(r,n,a,i);for(var o=1,s=0,l=0;l<r;l++){for(;o>1&&s<a;)o*=1-i/(n-s),s++;o*=(a-l)*(i-l)/((l+1)*(n-i-a+l+1))}for(;s<a;s++)o*=1-i/(n-s);return e.min(1,e.max(0,o))},cdf:function(r,n,i,a){if(r<0||r<i-(n-a))return 0;if(r>=a||r>=i)return 1;if(2*i>n)return 2*a>n?t.hypgeom.cdf(n-i-a+r,n,n-i,n-a):1-t.hypgeom.cdf(a-r-1,n,n-i,a);if(2*a>n)return 1-t.hypgeom.cdf(i-r-1,n,i,n-a);if(i<a)return t.hypgeom.cdf(r,n,a,i);for(var o=1,s=1,l=0,c=0;c<r;c++){for(;o>1&&l<a;){var u=1-i/(n-l);s*=u,o*=u,l++}o+=s*=(a-c)*(i-c)/((c+1)*(n-i-a+c+1))}for(;l<a;l++)o*=1-i/(n-l);return e.min(1,e.max(0,o))}}),t.extend(t.poisson,{pdf:function(r,n){return n<0||r%1!=0||r<0?0:e.pow(n,r)*e.exp(-n)/t.factorial(r)},cdf:function(e,r){var n=[],i=0;if(e<0)return 0;for(;i<=e;i++)n.push(t.poisson.pdf(i,r));return t.sum(n)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var n=1,i=0,a=e.exp(-r);do{i++,n*=t._random_fn()}while(n>a);return i-1},sampleLarge:function(r){var n,i,a,o,s,l,c,u,h,d,p=r;for(o=e.sqrt(p),s=e.log(p),l=.02483*(c=.931+2.53*o)-.059,u=1.1239+1.1328/(c-3.4),h=.9277-3.6224/(c-2);;){if(i=e.random()-.5,a=e.random(),d=.5-e.abs(i),n=e.floor((2*l/d+c)*i+p+.43),d>=.07&&a<=h)return n;if(!(n<0||d<.013&&a>d)&&e.log(a)+e.log(u)-e.log(l/(d*d)+c)<=n*s-p-t.loggam(n+1))return n}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,e,r,n){return r<=e||n<e||n>r?NaN:t<e||t>r?0:t<n?2*(t-e)/((r-e)*(n-e)):t===n?2/(r-e):2*(r-t)/((r-e)*(r-n))},cdf:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=r?0:t>=n?1:t<=i?e.pow(t-r,2)/((n-r)*(i-r)):1-e.pow(n-t,2)/((n-r)*(n-i))},inv:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=(i-r)/(n-r)?r+(n-r)*e.sqrt(t*((i-r)/(n-r))):r+(n-r)*(1-e.sqrt((1-t)*(1-(i-r)/(n-r))))},mean:function(t,e,r){return(t+e+r)/3},median:function(t,r,n){return n<=(t+r)/2?r-e.sqrt((r-t)*(r-n))/e.sqrt(2):n>(t+r)/2?t+e.sqrt((r-t)*(n-t))/e.sqrt(2):void 0},mode:function(t,e,r){return r},sample:function(r,n,i){var a=t._random_fn();return a<(i-r)/(n-r)?r+e.sqrt(a*(n-r)*(i-r)):n-e.sqrt((1-a)*(n-r)*(n-i))},variance:function(t,e,r){return(t*t+e*e+r*r-t*e-t*r-e*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,n){return n<=r?NaN:t<=r||t>=n?0:2/e.PI*e.pow(e.pow(n-r,2)-e.pow(2*t-r-n,2),-.5)},cdf:function(t,r,n){return t<r?0:t<n?2/e.PI*e.asin(e.sqrt((t-r)/(n-r))):1},inv:function(t,r,n){return r+(.5-.5*e.cos(e.PI*t))*(n-r)},mean:function(t,e){return e<=t?NaN:(t+e)/2},median:function(t,e){return e<=t?NaN:(t+e)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,n){return(r+n)/2+(n-r)/2*e.sin(2*e.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:e.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,n){return n<=0?0:e.exp(-e.abs(t-r)/n)/(2*n)},cdf:function(t,r,n){return n<=0?0:t<r?.5*e.exp((t-r)/n):1-.5*e.exp(-(t-r)/n)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,e){return 2*e*e},sample:function(r,i){var a=t._random_fn()-.5;return r-i*n(a)*e.log(1-2*e.abs(a))}}),t.extend(t.tukey,{cdf:function(r,n,a){var o=1,s=n,l=16,c=8,u=-30,h=1e-14,d=100,p=800,f=5e3,g=25e3,m=1,y=.5,b=.25,$=.125,v=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],w=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(a<2||o<1||s<2)return NaN;if(!Number.isFinite(r))return 1;if(a>g)return i(r,o,s);var x,E=.5*a,S=E*e.log(a)-a*e.log(2)-t.gammaln(E),_=E-1,T=.25*a;x=a<=d?m:a<=p?y:a<=f?b:$,S+=e.log(x);for(var A=0,R=1;R<=50;R++){for(var C=0,O=(2*R-1)*x,k=1;k<=l;k++){var N,P;c<k?(N=k-c-1,P=S+_*e.log(O+v[N]*x)-(v[N]*x+O)*T):(N=k-1,P=S+_*e.log(O-v[N]*x)+(v[N]*x-O)*T),P>=u&&(C+=i(c<k?r*e.sqrt(.5*(v[N]*x+O)):r*e.sqrt(.5*(-v[N]*x+O)),o,s)*w[N]*e.exp(P))}if(R*x>=1&&C<=h)break;A+=C}if(C>h)throw new Error("tukey.cdf failed to converge");return A>1&&(A=1),A},inv:function(r,n,i){var o=1e-4,s=50;if(i<2||n<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var l,c=a(r,n,i),u=t.tukey.cdf(c,n,i)-r;l=u>0?e.max(0,c-1):c+1;for(var h,d=t.tukey.cdf(l,n,i)-r,p=1;p<s;p++)if(h=l-d*(l-c)/(d-u),u=d,c=l,h<0&&(h=0,d=-r),d=t.tukey.cdf(h,n,i)-r,l=h,e.abs(l-c)<o)return h;throw new Error("tukey.inv failed to converge")}})}(t,Math),function(t,e){var r=Array.prototype.push,n=t.utils.isArray;function i(e){return n(e)||e instanceof t}t.extend({add:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,(function(t,e,n){return t+r[e][n]}))):t.map(e,(function(t){return t+r}))},subtract:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,(function(t,e,n){return t-r[e][n]||0}))):t.map(e,(function(t){return t-r}))},divide:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.multiply(e,t.inv(r))):t.map(e,(function(t){return t/r}))},multiply:function(e,r){var n,a,o,s,l,c,u,h;if(void 0===e.length&&void 0===r.length)return e*r;if(l=e.length,c=e[0].length,u=t.zeros(l,o=i(r)?r[0].length:c),h=0,i(r)){for(;h<o;h++)for(n=0;n<l;n++){for(s=0,a=0;a<c;a++)s+=e[n][a]*r[a][h];u[n][h]=s}return 1===l&&1===h?u[0][0]:u}return t.map(e,(function(t){return t*r}))},outer:function(e,r){return t.multiply(e.map((function(t){return[t]})),[r])},dot:function(e,r){i(e[0])||(e=[e]),i(r[0])||(r=[r]);for(var n,a,o=1===e[0].length&&1!==e.length?t.transpose(e):e,s=1===r[0].length&&1!==r.length?t.transpose(r):r,l=[],c=0,u=o.length,h=o[0].length;c<u;c++){for(l[c]=[],n=0,a=0;a<h;a++)n+=o[c][a]*s[c][a];l[c]=n}return 1===l.length?l[0]:l},pow:function(r,n){return t.map(r,(function(t){return e.pow(t,n)}))},exp:function(r){return t.map(r,(function(t){return e.exp(t)}))},log:function(r){return t.map(r,(function(t){return e.log(t)}))},abs:function(r){return t.map(r,(function(t){return e.abs(t)}))},norm:function(t,r){var n=0,a=0;for(isNaN(r)&&(r=2),i(t[0])&&(t=t[0]);a<t.length;a++)n+=e.pow(e.abs(t[a]),r);return e.pow(n,1/r)},angle:function(r,n){return e.acos(t.dot(r,n)/(t.norm(r)*t.norm(n)))},aug:function(t,e){var n,i=[];for(n=0;n<t.length;n++)i.push(t[n].slice());for(n=0;n<i.length;n++)r.apply(i[n],e[n]);return i},inv:function(e){for(var r,n=e.length,i=e[0].length,a=t.identity(n,i),o=t.gauss_jordan(e,a),s=[],l=0;l<n;l++)for(s[l]=[],r=i;r<o[0].length;r++)s[l][r-i]=o[l][r];return s},det:function t(e){if(2===e.length)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(var r=0,n=0;n<e.length;n++){for(var i=[],a=1;a<e.length;a++){i[a-1]=[];for(var o=0;o<e.length;o++)o<n?i[a-1][o]=e[a][o]:o>n&&(i[a-1][o-1]=e[a][o])}var s=n%2?-1:1;r+=t(i)*e[0][n]*s}return r},gauss_elimination:function(r,n){var i,a,o,s,l=0,c=0,u=r.length,h=r[0].length,d=1,p=0,f=[];for(i=(r=t.aug(r,n))[0].length,l=0;l<u;l++){for(a=r[l][l],c=l,s=l+1;s<h;s++)a<e.abs(r[s][l])&&(a=r[s][l],c=s);if(c!=l)for(s=0;s<i;s++)o=r[l][s],r[l][s]=r[c][s],r[c][s]=o;for(c=l+1;c<u;c++)for(d=r[c][l]/r[l][l],s=l;s<i;s++)r[c][s]=r[c][s]-d*r[l][s]}for(l=u-1;l>=0;l--){for(p=0,c=l+1;c<=u-1;c++)p+=f[c]*r[l][c];f[l]=(r[l][i-1]-p)/r[l][l]}return f},gauss_jordan:function(r,n){var i,a,o,s=t.aug(r,n),l=s.length,c=s[0].length,u=0;for(a=0;a<l;a++){var h=a;for(o=a+1;o<l;o++)e.abs(s[o][a])>e.abs(s[h][a])&&(h=o);var d=s[a];for(s[a]=s[h],s[h]=d,o=a+1;o<l;o++)for(u=s[o][a]/s[a][a],i=a;i<c;i++)s[o][i]-=s[a][i]*u}for(a=l-1;a>=0;a--){for(u=s[a][a],o=0;o<a;o++)for(i=c-1;i>a-1;i--)s[o][i]-=s[a][i]*s[o][a]/u;for(s[a][a]/=u,i=l;i<c;i++)s[a][i]/=u}return s},triaUpSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],o=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),o=!0),t.arange(i-1,-1,-1).forEach((function(o){n=t.arange(o+1,i).map((function(t){return a[t]*e[o][t]})),a[o]=(r[o]-t.sum(n))/e[o][o]})),o?a.map((function(t){return[t]})):a},triaLowSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],o=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),o=!0),t.arange(i).forEach((function(i){n=t.arange(i).map((function(t){return e[i][t]*a[t]})),a[i]=(r[i]-t.sum(n))/e[i][i]})),o?a.map((function(t){return[t]})):a},lu:function(e){var r,n=e.length,i=t.identity(n),a=t.zeros(e.length,e[0].length);return t.arange(n).forEach((function(t){a[0][t]=e[0][t]})),t.arange(1,n).forEach((function(o){t.arange(o).forEach((function(n){r=t.arange(n).map((function(t){return i[o][t]*a[t][n]})),i[o][n]=(e[o][n]-t.sum(r))/a[n][n]})),t.arange(o,n).forEach((function(n){r=t.arange(o).map((function(t){return i[o][t]*a[t][n]})),a[o][n]=e[r.length][n]-t.sum(r)}))})),[i,a]},cholesky:function(r){var n,i=r.length,a=t.zeros(r.length,r[0].length);return t.arange(i).forEach((function(o){n=t.arange(o).map((function(t){return e.pow(a[o][t],2)})),a[o][o]=e.sqrt(r[o][o]-t.sum(n)),t.arange(o+1,i).forEach((function(e){n=t.arange(o).map((function(t){return a[o][t]*a[e][t]})),a[e][o]=(r[o][e]-t.sum(n))/a[o][o]}))})),a},gauss_jacobi:function(r,n,i,a){for(var o,s,l,c,u=0,h=0,d=r.length,p=[],f=[],g=[];u<d;u++)for(p[u]=[],f[u]=[],g[u]=[],h=0;h<d;h++)u>h?(p[u][h]=r[u][h],f[u][h]=g[u][h]=0):u<h?(f[u][h]=r[u][h],p[u][h]=g[u][h]=0):(g[u][h]=r[u][h],p[u][h]=f[u][h]=0);for(l=t.multiply(t.multiply(t.inv(g),t.add(p,f)),-1),s=t.multiply(t.inv(g),n),o=i,c=t.add(t.multiply(l,i),s),u=2;e.abs(t.norm(t.subtract(c,o)))>a;)o=c,c=t.add(t.multiply(l,o),s),u++;return c},gauss_seidel:function(r,n,i,a){for(var o,s,l,c,u,h=0,d=r.length,p=[],f=[],g=[];h<d;h++)for(p[h]=[],f[h]=[],g[h]=[],o=0;o<d;o++)h>o?(p[h][o]=r[h][o],f[h][o]=g[h][o]=0):h<o?(f[h][o]=r[h][o],p[h][o]=g[h][o]=0):(g[h][o]=r[h][o],p[h][o]=f[h][o]=0);for(c=t.multiply(t.multiply(t.inv(t.add(g,p)),f),-1),l=t.multiply(t.inv(t.add(g,p)),n),s=i,u=t.add(t.multiply(c,i),l),h=2;e.abs(t.norm(t.subtract(u,s)))>a;)s=u,u=t.add(t.multiply(c,s),l),h+=1;return u},SOR:function(r,n,i,a,o){for(var s,l,c,u,h,d=0,p=r.length,f=[],g=[],m=[];d<p;d++)for(f[d]=[],g[d]=[],m[d]=[],s=0;s<p;s++)d>s?(f[d][s]=r[d][s],g[d][s]=m[d][s]=0):d<s?(g[d][s]=r[d][s],f[d][s]=m[d][s]=0):(m[d][s]=r[d][s],f[d][s]=g[d][s]=0);for(u=t.multiply(t.inv(t.add(m,t.multiply(f,o))),t.subtract(t.multiply(m,1-o),t.multiply(g,o))),c=t.multiply(t.multiply(t.inv(t.add(m,t.multiply(f,o))),n),o),l=i,h=t.add(t.multiply(u,i),c),d=2;e.abs(t.norm(t.subtract(h,l)))>a;)l=h,h=t.add(t.multiply(u,l),c),d++;return h},householder:function(r){for(var n,i,a,o,s=r.length,l=r[0].length,c=0,u=[],h=[];c<s-1;c++){for(n=0,o=c+1;o<l;o++)n+=r[o][c]*r[o][c];for(n=(r[c+1][c]>0?-1:1)*e.sqrt(n),i=e.sqrt((n*n-r[c+1][c]*n)/2),(u=t.zeros(s,1))[c+1][0]=(r[c+1][c]-n)/(2*i),a=c+2;a<s;a++)u[a][0]=r[a][c]/(2*i);h=t.subtract(t.identity(s,l),t.multiply(t.multiply(u,t.transpose(u)),2)),r=t.multiply(h,t.multiply(r,h))}return r},QR:function(){var r=t.sum,n=t.arange;function i(i){var a,o,s,l=i.length,c=i[0].length,u=t.zeros(c,c);for(i=t.copy(i),o=0;o<c;o++){for(u[o][o]=e.sqrt(r(n(l).map((function(t){return i[t][o]*i[t][o]})))),a=0;a<l;a++)i[a][o]=i[a][o]/u[o][o];for(s=o+1;s<c;s++)for(u[o][s]=r(n(l).map((function(t){return i[t][o]*i[t][s]}))),a=0;a<l;a++)i[a][s]=i[a][s]-i[a][o]*u[o][s]}return[i,u]}return i}(),lstsq:function(){function e(e){var r=(e=t.copy(e)).length,n=t.identity(r);return t.arange(r-1,-1,-1).forEach((function(r){t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),e[r][r])),t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),e[r][r])),t.arange(r).forEach((function(i){var a=t.multiply(e[i][r],-1),o=t.slice(e,{row:i}),s=t.multiply(t.slice(e,{row:r}),a);t.sliceAssign(e,{row:i},t.add(o,s));var l=t.slice(n,{row:i}),c=t.multiply(t.slice(n,{row:r}),a);t.sliceAssign(n,{row:i},t.add(l,c))}))})),n}function r(r,n){var i=!1;void 0===n[0].length&&(n=n.map((function(t){return[t]})),i=!0);var a=t.QR(r),o=a[0],s=a[1],l=r[0].length,c=t.slice(o,{col:{end:l}}),u=e(t.slice(s,{row:{end:l}})),h=t.transpose(c);void 0===h[0].length&&(h=[h]);var d=t.multiply(t.multiply(u,h),n);return void 0===d.length&&(d=[[d]]),i?d.map((function(t){return t[0]})):d}return r}(),jacobi:function(r){for(var n,i,a,o,s,l,c,u=1,h=r.length,d=t.identity(h,h),p=[];1===u;){for(s=r[0][1],a=0,o=1,n=0;n<h;n++)for(i=0;i<h;i++)n!=i&&s<e.abs(r[n][i])&&(s=e.abs(r[n][i]),a=n,o=i);for(l=r[a][a]===r[o][o]?r[a][o]>0?e.PI/4:-e.PI/4:e.atan(2*r[a][o]/(r[a][a]-r[o][o]))/2,(c=t.identity(h,h))[a][a]=e.cos(l),c[a][o]=-e.sin(l),c[o][a]=e.sin(l),c[o][o]=e.cos(l),d=t.multiply(d,c),r=t.multiply(t.multiply(t.inv(c),r),c),u=0,n=1;n<h;n++)for(i=1;i<h;i++)n!=i&&e.abs(r[n][i])>.001&&(u=1)}for(n=0;n<h;n++)p.push(r[n][n]);return[d,p]},rungekutta:function(t,e,r,n,i,a){var o,s,l;if(2===a)for(;n<=r;)i+=((o=e*t(n,i))+(s=e*t(n+e,i+o)))/2,n+=e;if(4===a)for(;n<=r;)i+=((o=e*t(n,i))+2*(s=e*t(n+e/2,i+o/2))+2*(l=e*t(n+e/2,i+s/2))+e*t(n+e,i+l))/6,n+=e;return i},romberg:function(t,r,n,i){for(var a,o,s,l,c,u=0,h=(n-r)/2,d=[],p=[],f=[];u<i/2;){for(c=t(r),s=r,l=0;s<=n;s+=h,l++)d[l]=s;for(a=d.length,s=1;s<a-1;s++)c+=(s%2!=0?4:2)*t(d[s]);c=h/3*(c+t(n)),f[u]=c,h/=2,u++}for(o=f.length,a=1;1!==o;){for(s=0;s<o-1;s++)p[s]=(e.pow(4,a)*f[s+1]-f[s])/(e.pow(4,a)-1);o=p.length,f=p,p=[],a++}return f},richardson:function(t,r,n,i){function a(t,e){for(var r,n=0,i=t.length;n<i;n++)t[n]===e&&(r=n);return r}for(var o,s,l,c,u,h=e.abs(n-t[a(t,n)+1]),d=0,p=[],f=[];i>=h;)o=a(t,n+i),s=a(t,n),p[d]=(r[o]-2*r[s]+r[2*s-o])/(i*i),i/=2,d++;for(c=p.length,l=1;1!=c;){for(u=0;u<c-1;u++)f[u]=(e.pow(4,l)*p[u+1]-p[u])/(e.pow(4,l)-1);c=f.length,p=f,f=[],l++}return p},simpson:function(t,e,r,n){for(var i,a=(r-e)/n,o=t(e),s=[],l=e,c=0,u=1;l<=r;l+=a,c++)s[c]=l;for(i=s.length;u<i-1;u++)o+=(u%2!=0?4:2)*t(s[u]);return a/3*(o+t(r))},hermite:function(t,e,r,n){for(var i,a=t.length,o=0,s=0,l=[],c=[],u=[],h=[];s<a;s++){for(l[s]=1,i=0;i<a;i++)s!=i&&(l[s]*=(n-t[i])/(t[s]-t[i]));for(c[s]=0,i=0;i<a;i++)s!=i&&(c[s]+=1/(t[s]-t[i]));u[s]=(1-2*(n-t[s])*c[s])*(l[s]*l[s]),h[s]=(n-t[s])*(l[s]*l[s]),o+=u[s]*e[s]+h[s]*r[s]}return o},lagrange:function(t,e,r){for(var n,i,a=0,o=0,s=t.length;o<s;o++){for(i=e[o],n=0;n<s;n++)o!=n&&(i*=(r-t[n])/(t[o]-t[n]));a+=i}return a},cubic_spline:function(e,r,n){for(var i,a=e.length,o=0,s=[],l=[],c=[],u=[],h=[],d=[],p=[];o<a-1;o++)h[o]=e[o+1]-e[o];for(c[0]=0,o=1;o<a-1;o++)c[o]=3/h[o]*(r[o+1]-r[o])-3/h[o-1]*(r[o]-r[o-1]);for(o=1;o<a-1;o++)s[o]=[],l[o]=[],s[o][o-1]=h[o-1],s[o][o]=2*(h[o-1]+h[o]),s[o][o+1]=h[o],l[o][0]=c[o];for(u=t.multiply(t.inv(s),l),i=0;i<a-1;i++)d[i]=(r[i+1]-r[i])/h[i]-h[i]*(u[i+1][0]+2*u[i][0])/3,p[i]=(u[i+1][0]-u[i][0])/(3*h[i]);for(i=0;i<a&&!(e[i]>n);i++);return r[i-=1]+(n-e[i])*d[i]+t.sq(n-e[i])*u[i]+(n-e[i])*t.sq(n-e[i])*p[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(e){var r,n,i=e.length,a=e[0].length,o=0,s=[],l=[],c=[],u=[],h=[],d=[],p=[],f=[],g=[],m=[];for(o=0;o<i;o++)s[o]=t.sum(e[o])/a;for(o=0;o<a;o++)for(p[o]=[],r=0;r<i;r++)p[o][r]=e[r][o]-s[r];for(p=t.transpose(p),o=0;o<i;o++)for(f[o]=[],r=0;r<i;r++)f[o][r]=t.dot([p[o]],[p[r]])/(a-1);for(g=(c=t.jacobi(f))[0],l=c[1],m=t.transpose(g),o=0;o<l.length;o++)for(r=o;r<l.length;r++)l[o]<l[r]&&(n=l[o],l[o]=l[r],l[r]=n,u=m[o],m[o]=m[r],m[r]=u);for(d=t.transpose(p),o=0;o<i;o++)for(h[o]=[],r=0;r<d.length;r++)h[o][r]=t.dot([m[o]],[d[r]]);return[e,l,m,h]}}),function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(r,n){var i=this;return n?(setTimeout((function(){n.call(i,t.fn[e].call(i,r))}),15),this):"number"==typeof t[e](this,r)?t[e](this,r):t(t[e](this,r))}}(e[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(t,Math),function(t,e){var r=[].slice,n=t.utils.isNumber,i=t.utils.isArray;function a(t,r,n,i){if(t>1||n>1||t<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var a=(t*r+n*i)/(r+i);return(t-n)/e.sqrt(a*(1-a)*(1/r+1/i))}t.extend({zscore:function(){var e=r.call(arguments);return n(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var n,a=r.call(arguments);return i(a[1])?(n=t.zscore(a[0],a[1],a[3]),1===a[2]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):a.length>2?(n=t.zscore(a[0],a[1],a[2]),1===a[3]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):(n=a[0],1===a[1]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1))}}),t.extend(t.fn,{zscore:function(t,e){return(t-this.mean())/this.stdev(e)},ztest:function(r,n,i){var a=e.abs(this.zscore(r,i));return 1===n?t.normal.cdf(-a,0,1):2*t.normal.cdf(-a,0,1)}}),t.extend({tscore:function(){var n=r.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/e.sqrt(n[3])):(n[0]-t.mean(n[1]))/(t.stdev(n[1],!0)/e.sqrt(n[1].length))},ttest:function(){var i,a=r.call(arguments);return 5===a.length?(i=e.abs(t.tscore(a[0],a[1],a[2],a[3])),1===a[4]?t.studentt.cdf(-i,a[3]-1):2*t.studentt.cdf(-i,a[3]-1)):n(a[1])?(i=e.abs(a[0]),1==a[2]?t.studentt.cdf(-i,a[1]-1):2*t.studentt.cdf(-i,a[1]-1)):(i=e.abs(t.tscore(a[0],a[1])),1==a[2]?t.studentt.cdf(-i,a[1].length-1):2*t.studentt.cdf(-i,a[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/e.sqrt(this.cols()))},ttest:function(r,n){return 1===n?1-t.studentt.cdf(e.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-e.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var n,i,a,o,s,l,c,u,h=r.call(arguments);if(1===h.length){for(s=new Array(h[0].length),c=0;c<h[0].length;c++)s[c]=h[0][c];h=s}for(i=new Array,c=0;c<h.length;c++)i=i.concat(h[c]);for(a=t.mean(i),n=0,c=0;c<h.length;c++)n+=h[c].length*e.pow(t.mean(h[c])-a,2);for(n/=h.length-1,l=0,c=0;c<h.length;c++)for(o=t.mean(h[c]),u=0;u<h[c].length;u++)l+=e.pow(h[c][u]-o,2);return n/(l/=i.length-h.length)},anovaftest:function(){var e,i,a,o,s=r.call(arguments);if(n(s[0]))return 1-t.centralF.cdf(s[0],s[1],s[2]);var l=t.anovafscore(s);for(e=s.length-1,a=0,o=0;o<s.length;o++)a+=s[o].length;return i=a-e-1,1-t.centralF.cdf(l,e,i)},ftest:function(e,r,n){return 1-t.centralF.cdf(e,r,n)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e,r=0;for(e=0;e<this.length;e++)r+=this[e].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var i,a,o,s,l,c=r.call(arguments);return n(c[0])?(i=c[0],a=c[1],o=c[2],s=c[3],l=c[4]):(i=t.mean(c[0]),a=t.mean(c[1]),o=c[0].length,s=c[1].length,l=c[2]),e.abs(i-a)/(l*e.sqrt((1/o+1/s)/2))},qtest:function(){var e,n=r.call(arguments);3===n.length?(e=n[0],n=n.slice(1)):7===n.length?(e=t.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(e=t.qscore(n[0],n[1],n[2]),n=n.slice(3));var i=n[0],a=n[1];return 1-t.tukey.cdf(e,a,i-a)},tukeyhsd:function(e){for(var r=t.pooledstdev(e),n=e.map((function(e){return t.mean(e)})),i=e.reduce((function(t,e){return t+e.length}),0),a=[],o=0;o<e.length;++o)for(var s=o+1;s<e.length;++s){var l=t.qtest(n[o],n[s],e[o].length,e[s].length,r,i,e.length);a.push([[o,s],l])}return a}}),t.extend({normalci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.normal.inv(i[1]/2,0,1)*i[2]/e.sqrt(i[3])):e.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},tci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/e.sqrt(i[3])):e.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},significant:function(t,e){return t<e}}),t.extend(t.fn,{normalci:function(e,r){return t.normalci(e,r,this.toArray())},tci:function(e,r){return t.tci(e,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,r,n,i){var o=a(e,r,n,i);return t.ztest(o,1)},twoSidedDifferenceOfProportions:function(e,r,n,i){var o=a(e,r,n,i);return t.ztest(o,2)}})}(t,Math),t.models=function(){function e(e){var n=e[0].length,i=t.arange(n).map((function(i){var a=t.arange(n).filter((function(t){return t!==i}));return r(t.col(e,i).map((function(t){return t[0]})),t.col(e,a))}));return i}function r(e,r){var n=e.length,i=r[0].length-1,a=n-i-1,o=t.lstsq(r,e),s=t.multiply(r,o.map((function(t){return[t]}))).map((function(t){return t[0]})),l=t.subtract(e,s),c=t.mean(e),u=t.sum(s.map((function(t){return Math.pow(t-c,2)}))),h=t.sum(e.map((function(t,e){return Math.pow(t-s[e],2)}))),d=u+h;return{exog:r,endog:e,nobs:n,df_model:i,df_resid:a,coef:o,predict:s,resid:l,ybar:c,SST:d,SSE:u,SSR:h,R2:u/d}}function n(r){var n=e(r.exog),i=Math.sqrt(r.SSR/r.df_resid),a=n.map((function(t){var e=t.SST,r=t.R2;return i/Math.sqrt(e*(1-r))})),o=r.coef.map((function(t,e){return(t-0)/a[e]})),s=o.map((function(e){var n=t.studentt.cdf(e,r.df_resid);return 2*(n>.5?1-n:n)})),l=t.studentt.inv(.975,r.df_resid),c=r.coef.map((function(t,e){var r=l*a[e];return[t-r,t+r]}));return{se:a,t:o,p:s,sigmaHat:i,interval95:c}}function i(e){var r=e.R2/e.df_model/((1-e.R2)/e.df_resid),n=function(e,r,n){return t.beta.cdf(e/(n/r+e),r/2,n/2)};return{F_statistic:r,pvalue:1-n(r,e.df_model,e.df_resid)}}function a(t,e){var a=r(t,e),o=n(a),s=i(a),l=1-(1-a.R2)*((a.nobs-1)/a.df_resid);return a.t=o,a.f=s,a.adjust_R2=l,a}return{ols:a}}(),t.extend({buildxmatrix:function(){for(var e=new Array(arguments.length),r=0;r<arguments.length;r++){var n=[1];e[r]=n.concat(arguments[r])}return t(e)},builddxmatrix:function(){for(var e=new Array(arguments[0].length),r=0;r<arguments[0].length;r++){var n=[1];e[r]=n.concat(arguments[0][r])}return t(e)},buildjxmatrix:function(e){for(var r=new Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return t.builddxmatrix(r)},buildymatrix:function(e){return t(e).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(e,r){var n,i,a,o,s;if(e.cols()==r.rows()){if(r.rows()>1){for(o=[],n=0;n<e.rows();n++)for(o[n]=[],i=0;i<r.cols();i++){for(s=0,a=0;a<e.cols();a++)s+=e.toArray()[n][a]*r.toArray()[a][i];o[n][i]=s}return t(o)}for(o=[],n=0;n<e.rows();n++)for(o[n]=[],i=0;i<r.cols();i++){for(s=0,a=0;a<e.cols();a++)s+=e.toArray()[n][a]*r.toArray()[i];o[n][i]=s}return t(o)}},regress:function(e,r){var n=t.xtranspxinv(e),i=e.transpose(),a=t.matrixmult(t(n),i);return t.matrixmult(a,r)},regresst:function(e,r,n){var i=t.regress(e,r),a={anova:{}},o=t.jMatYBar(e,i);a.yBar=o;var s=r.mean();a.anova.residuals=t.residuals(r,o),a.anova.ssr=t.ssr(o,s),a.anova.msr=a.anova.ssr/(e[0].length-1),a.anova.sse=t.sse(r,o),a.anova.mse=a.anova.sse/(r.length-(e[0].length-1)-1),a.anova.sst=t.sst(r,s),a.anova.mst=a.anova.sst/(r.length-1),a.anova.r2=1-a.anova.sse/a.anova.sst,a.anova.r2<0&&(a.anova.r2=0),a.anova.fratio=a.anova.msr/a.anova.mse,a.anova.pvalue=t.anovaftest(a.anova.fratio,e[0].length-1,r.length-(e[0].length-1)-1),a.anova.rmse=Math.sqrt(a.anova.mse),a.anova.r2adj=1-a.anova.mse/a.anova.mst,a.anova.r2adj<0&&(a.anova.r2adj=0),a.stats=new Array(e[0].length);for(var l,c,u,h=t.xtranspxinv(e),d=0;d<i.length;d++)l=Math.sqrt(a.anova.mse*Math.abs(h[d][d])),c=Math.abs(i[d]/l),u=t.ttest(c,r.length-e[0].length-1,n),a.stats[d]=[i[d],l,c,u];return a.regress=i,a},xtranspx:function(e){return t.matrixmult(e.transpose(),e)},xtranspxinv:function(e){var r=t.matrixmult(e.transpose(),e);return t.inv(r)},jMatYBar:function(e,r){var n=t.matrixmult(e,r);return new t(n)},residuals:function(e,r){return t.matrixsubtract(e,r)},ssr:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},sse:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e[n],2);return r},sst:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},matrixsubtract:function(e,r){for(var n=new Array(e.length),i=0;i<e.length;i++){n[i]=new Array(e[i].length);for(var a=0;a<e[i].length;a++)n[i][a]=e[i][a]-r[i][a]}return t(n)}}),t.jStat=t,t}();var jstatExports=jstat.exports,jStat=getDefaultExportFromCjs(jstatExports);class SDTMath{static hM2Hr(t,e){return 0===t&&0===e?0:t/(t+e)}static faCr2Far(t,e){return 0===t&&0===e?0:t/(t+e)}static hMFaCr2Acc(t,e,r,n){return 0===t&&0===e&&0===r&&0===n?0:(t+n)/(t+e+r+n)}static hrFar2Acc(t,e){return(t+(1-e))/2}static hFa2Ppv(t,e){return 0===t&&0===e?0:t/(t+e)}static mCr2Fomr(t,e){return 0===t&&0===e?0:t/(t+e)}static hrFar2D(t,e,r=1){return 1===r?jStat.normal.inv(t,0,1)-jStat.normal.inv(e,0,1):Math.sqrt(2/(r*r+1))*(r*jStat.normal.inv(t,0,1)-jStat.normal.inv(e,0,1))}static hrFar2C(t,e,r=1){return 1===r?-(jStat.normal.inv(t,0,1)+jStat.normal.inv(e,0,1))/2:Math.sqrt(2/(r*r+1))*(r/(r+1))*-(jStat.normal.inv(t,0,1)+jStat.normal.inv(e,0,1))}static dC2Hr(t,e,r=1){return 1===r?jStat.normal.cdf(t/2-e,0,1):jStat.normal.cdf(Math.sqrt((r*r+1)/2)*(t/(1+r)-e/r),0,1)}static dC2Far(t,e,r=1){return 1===r?jStat.normal.cdf(-(t/2+e),0,1):jStat.normal.cdf(Math.sqrt((r*r+1)/2)*-(t/(1+r)+e),0,1)}static dFar2Hr(t,e,r=1){return 1===r?jStat.normal.cdf(t+jStat.normal.inv(e,0,1),0,1):jStat.normal.cdf((Math.sqrt((r*r+1)/2)*t+jStat.normal.inv(e,0,1))/r,0,1)}static cFar2Hr(t,e,r=1){return 1===r?jStat.normal.cdf(-2*t-jStat.normal.inv(e,0,1),0,1):jStat.normal.cdf(-Math.sqrt((r*r+1)/2)*((r+1)/r)*t-jStat.normal.inv(e,0,1),0,1)}static d2MuN(t,e=1){return 1===e?-t/2:-Math.sqrt((e*e+1)/2)*(1/(e+1))*t}static muN2D(t,e=1){return 1===e?-2*t:-Math.sqrt(2/(e*e+1))*(e+1)*t}static d2MuS(t,e=1){return 1===e?t/2:Math.sqrt((e*e+1)/2)*(e/(e+1))*t}static muS2D(t,e=1){return 1===e?2*t:Math.sqrt(2/(e*e+1))*((e+1)/e)*t}static c2L(t,e=1){return 1===e?t:Math.sqrt((e*e+1)/2)*t}static l2C(t,e=1){return 1===e?t:Math.sqrt(2/(e*e+1))*t}static s2H(t=1){return 1/(t*Math.sqrt(2*Math.PI))}static h2S(t){return 1/(t*Math.sqrt(2*Math.PI))}static hr2Zhr(t){return jStat.normal.inv(t,0,1)}static far2Zfar(t){return jStat.normal.inv(t,0,1)}static zhr2Hr(t){return jStat.normal.cdf(t,0,1)}static zfar2Far(t){return jStat.normal.cdf(t,0,1)}}class ROCSpace extends(DecidablesMixinResizeable(DetectableElement)){static get properties(){return{contour:{attribute:"contour",type:String,reflect:!0},point:{attribute:"point",type:String,reflect:!0},isoD:{attribute:"iso-d",type:String,reflect:!0},isoC:{attribute:"iso-c",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.sdt=!1,this.contours=["sensitivity","bias","accuracy"],this.contour=void 0,this.points=["all","first","rest","none"],this.point="all",this.isoDs=["all","first","rest","none"],this.isoD="first",this.isoCs=["all","first","rest","none"],this.isoC="first",this.zRoc=!1,this.far=.25,this.hr=.75,this.s=1,this.label="",this.locations=[{name:"default",far:this.far,hr:this.hr,s:this.s,label:""}],this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.alignState()}alignState(){this.locations[0].hr=this.hr,this.locations[0].far=this.far,this.locations[0].s=this.s,this.locations[0].label=this.label,this.d=SDTMath.hrFar2D(this.hr,this.far,this.s),this.c=SDTMath.hrFar2C(this.hr,this.far,this.s),this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.locations.forEach(((t,e)=>{t.d=SDTMath.hrFar2D(t.hr,t.far,t.s),t.c=SDTMath.hrFar2C(t.hr,t.far,t.s),0!==e||"first"!==this.point&&"all"!==this.point?e>0&&("rest"===this.point||"all"===this.point)&&this.pointArray.push(t):this.pointArray.push(t),0!==e||"first"!==this.isoD&&"all"!==this.isoD?e>0&&("rest"===this.isoD||"all"===this.isoD)&&this.isoDArray.push(t):this.isoDArray.push(t),0!==e||"first"!==this.isoC&&"all"!==this.isoC?e>0&&("rest"===this.isoC||"all"===this.isoC)&&this.isoCArray.push(t):this.isoCArray.push(t)}))}set(t,e,r="default",n="",i=1){"default"===r&&(this.hr=t,this.far=e,this.s=i,this.label=n);const a=this.locations.find((t=>t.name===r));void 0===a?this.locations.push({name:r,far:e,hr:t,s:i,label:n}):(a.hr=t,a.far=e,a.s=i,a.label=n),this.requestUpdate()}setWithSDT(t,e,r="default",n="",i=1){"default"===r&&(this.hr=SDTMath.dC2Hr(t,e,i),this.far=SDTMath.dC2Far(t,e,i),this.s=i,this.label=n);const a=this.locations.find((t=>t.name===r));void 0===a?this.locations.push({name:r,far:SDTMath.dC2Far(t,e,i),hr:SDTMath.dC2Hr(t,e,i),s:i,label:n}):(a.hr=SDTMath.dC2Hr(t,e,i),a.far=SDTMath.dC2Far(t,e,i),a.s=i,a.label=n),this.sdt=!0,this.requestUpdate()}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1`
      ${DetectableElement.svgFilters}
    `}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,o=3*this.rem,s=n-(i+a),l=n-(o+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=linear().domain(this.zRoc?[-3,3]:[0,1]).range([0,l]);this.xScale=u;const h=linear().domain(this.zRoc?[3,-3]:[1,0]).range([0,s]);this.yScale=h;const d=drag().subject(((t,e)=>({x:this.xScale(this.zRoc?SDTMath.far2Zfar(e.far):e.far),y:this.yScale(this.zRoc?SDTMath.hr2Zhr(e.hr):e.hr)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.zRoc?SDTMath.zfar2Far(this.xScale.invert(t.x)):this.xScale.invert(t.x),n=this.zRoc?SDTMath.zhr2Hr(this.yScale.invert(t.y)):this.yScale.invert(t.y);e.far=r<.001?.001:r>.999?.999:r,e.hr=n<=.001?.001:n>=.999?.999:n,"default"===e.name&&(this.far=e.far,this.hr=e.hr),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),p=line().x((t=>u(this.zRoc?SDTMath.far2Zfar(t.far):t.far))).y((t=>h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr))),f=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),g=f.enter().append("svg").classed("main",!0),m=g.merge(f).attr("viewBox",`0 0 ${n} ${n}`),y=g.append("g").classed("plot",!0),b=m.select(".plot").attr("transform",`translate(${o}, ${i})`);y.append("clipPath").attr("id","clip-roc-space").append("rect"),b.select("clipPath rect").attr("height",s+1).attr("width",l+1);const $=y.append("g").classed("underlayer",!0),v=b.select(".underlayer");if($.append("rect").classed("background",!0),v.select(".background").attr("height",s).attr("width",l),this.firstUpdate||t.has("contour")||t.has("zRoc")||t.has("width")||t.has("height")||t.has("rem")||t.has("s"))if(void 0!==this.contour){const t=100,e=[];for(let r=.5,n=0;r<t;r+=1)for(let i=.5;i<t;i+=1,n+=1){const a=this.zRoc?SDTMath.zhr2Hr(i/t*6-3):i/t,o=this.zRoc?SDTMath.zfar2Far(6*(1-r/t)-3):1-r/t;e[n]="bias"===this.contour?SDTMath.hrFar2C(a,o,this.s):"sensitivity"===this.contour?SDTMath.hrFar2D(a,o,this.s):"accuracy"===this.contour?SDTMath.hrFar2Acc(a,o):null}const r="bias"===this.contour?range(-3,3,.25):"sensitivity"===this.contour?range(-6,6,.5):"accuracy"===this.contour?range(0,1,.05):null,n=Contours().size([t,t]).thresholds(r),i=this.getComputedStyleValue("bias"===this.contour?"---color-element-background":"sensitivity"===this.contour?"---color-d":"accuracy"===this.contour?"---color-acc-dark":null),a=this.getComputedStyleValue("bias"===this.contour?"---color-c":"sensitivity"===this.contour||"accuracy"===this.contour?"---color-element-background":null),o=linear().domain(extent(r)).interpolate((()=>interpolateRgb(i,a))),s=v.selectAll(".plot-contour").data([this.contour]),u=s.enter().append("g").classed("plot-contour",!0).merge(s).selectAll(".contour").data(n(e));u.enter().append("path").classed("contour",!0).merge(u).transition().duration(2*c).ease(cubicOut).attr("d",index(identity$2().scale(l/t))).attr("fill",(t=>o(t.value))),u.exit().remove();const h=v.selectAll(".title-contour").data([this.contour]);h.enter().append("text").classed("title-contour",!0).attr("text-anchor","middle").merge(h).classed("math-var","bias"===this.contour||"sensitivity"===this.contour).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${this.rem})`:"accuracy"===this.contour?`translate(${l+1.125*this.rem}, ${this.rem})`:null).text("bias"===this.contour?"c":"sensitivity"===this.contour?"d′":"accuracy"===this.contour?"Acc":null);const d=100,p=[];for(let e=.5,r=0;e<d;e+=1,r+=4)p[r]="bias"===this.contour?-(e/t*6-3):"sensitivity"===this.contour?e/t*12-6:"accuracy"===this.contour?e/t:null,p[r+1]=p[r],p[r+2]=p[r],p[r+3]=p[r];const f=Contours().size([4,d]).thresholds(r),g=linear().domain("bias"===this.contour?[3,-3]:"sensitivity"===this.contour?[6,-6]:"accuracy"===this.contour?[1,0]:null).range([0,10*this.rem]),m=v.selectAll(".legend-contour").data([this.contour]),y=m.enter().append("g").classed("legend-contour",!0),b=y.merge(m).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${1.5*this.rem})`:"accuracy"===this.contour?`translate(${l+1.5*this.rem}, ${1.5*this.rem})`:null);m.exit().remove(),y.append("g").classed("axis-contour",!0),b.select(".axis-contour").call(axisLeft(g).ticks(7).tickSize(0)).attr("font-size",null).attr("font-family",null);const $=b.selectAll(".contour").data(f(p));$.enter().append("path").classed("contour",!0).merge($).attr("d",index(identity$2().scale(10*this.rem/d))).attr("fill",(t=>o(t.value))),$.exit().remove()}else{v.selectAll(".plot-contour").data([]).exit().remove();v.selectAll(".title-contour").data([]).exit().remove();v.selectAll(".legend-contour").data([]).exit().remove()}$.append("g").classed("axis-x",!0);v.select(".axis-x").attr("transform",`translate(0, ${s})`).transition().duration(2*c).ease(cubicOut).call(axisBottom(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const w=$.append("text").classed("title-x",!0).attr("text-anchor","middle");w.append("tspan").classed("z math-var",!0),w.append("tspan").classed("name",!0);const x=v.select(".title-x").attr("transform",`translate(${l/2}, ${s+2.25*this.rem})`);x.select("tspan.z").text(this.zRoc?"z":""),x.select("tspan.name").text(this.zRoc?"(False Alarm Rate)":"False Alarm Rate"),$.append("g").classed("axis-y",!0);v.select(".axis-y").transition().duration(2*c).ease(cubicOut).call(axisLeft(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const E=$.append("text").classed("title-y",!0).attr("text-anchor","middle");E.append("tspan").classed("z math-var",!0),E.append("tspan").classed("name",!0);const S=v.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${s/2})rotate(-90)`);S.select("tspan.z").text(this.zRoc?"z":""),S.select("tspan.name").text(this.zRoc?"(Hit Rate)":"Hit Rate"),$.append("line").classed("diagonal",!0),v.select(".diagonal").attr("x1",this.zRoc?u(-3):u(0)).attr("y1",this.zRoc?h(-3):h(0)).attr("x2",this.zRoc?u(3):u(1)).attr("y2",this.zRoc?h(3):h(1)),y.append("g").classed("content",!0);const _=b.select(".content"),T=_.selectAll(".curve-iso-d").data(this.isoDArray,(t=>t.name)),A=T.enter().append("path").classed("curve-iso-d",!0).attr("clip-path","url(#clip-roc-space)").merge(T);this.firstUpdate||t.has("zRoc")?A.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("d",(t=>p(range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.dFar2Hr(t.d,SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.dFar2Hr(t.d,u.invert(e),t.s)})))))):this.sdt?A.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=interpolate$1(void 0!==n.d?n.d:t.d,t.d),a=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>{n.d=i(t),n.s=a(t);const e=range(u.range()[0],u.range()[1]+1,1).map((t=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?SDTMath.dFar2Hr(n.d,SDTMath.zfar2Far(u.invert(t)),n.s):SDTMath.dFar2Hr(n.d,u.invert(t),n.s)})));return p(e)}})):A.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.d=void 0,n.s=void 0;const i=interpolate$1(void 0!==n.hr?n.hr:t.hr,t.hr),a=interpolate$1(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.dFar2Hr(SDTMath.hrFar2D(n.hr,n.far,t.s),SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.dFar2Hr(SDTMath.hrFar2D(n.hr,n.far,t.s),u.invert(e),t.s)})));return p(r)}})),T.exit().remove();const R=_.selectAll(".curve-iso-c").data(this.isoCArray,(t=>t.name)),C=R.enter().append("path").classed("curve-iso-c",!0).attr("clip-path","url(#clip-roc-space)").merge(R);this.firstUpdate||t.has("zRoc")?C.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("d",(t=>p(range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.cFar2Hr(t.c,SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.cFar2Hr(t.c,u.invert(e),t.s)})))))):this.sdt?C.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=interpolate$1(void 0!==n.c?n.c:t.c,t.c),a=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>{n.c=i(t),n.s=a(t);const e=range(u.range()[0],u.range()[1]+1,1).map((t=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?SDTMath.cFar2Hr(n.c,SDTMath.zfar2Far(u.invert(t)),n.s):SDTMath.cFar2Hr(n.c,u.invert(t),n.s)})));return p(e)}})):C.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.c=void 0,n.s=void 0;const i=interpolate$1(void 0!==n.hr?n.hr:t.hr,t.hr),a=interpolate$1(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.cFar2Hr(SDTMath.hrFar2C(n.hr,n.far,t.s),SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.cFar2Hr(SDTMath.hrFar2C(n.hr,n.far,t.s),u.invert(e),t.s)})));return p(r)}})),R.exit().remove();const O=_.selectAll(".point").data(this.pointArray,(t=>t.name)),k=O.enter().append("g").classed("point",!0);k.append("circle").classed("circle",!0),k.append("text").classed("label",!0);const N=k.merge(O);N.select("text").text((t=>t.label)),(this.firstUpdate||t.has("interactive"))&&(this.interactive?N.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.zRoc?SDTMath.hr2Zhr(e.hr):e.hr,n=this.zRoc?SDTMath.far2Zfar(e.far):e.far;switch(t.key){case"ArrowUp":r+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowDown":r-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowRight":n+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowLeft":n-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05}r=this.zRoc?SDTMath.zhr2Hr(r):r,n=this.zRoc?SDTMath.zfar2Far(n):n,r=r<.001?.001:r>.999?.999:r,n=n<.001?.001:n>.999?.999:n,r===e.hr&&n===e.far||(e.hr=r,e.far=n,"default"===e.name&&(this.hr=e.hr,this.far=e.far),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))),t.preventDefault()}})):N.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),this.firstUpdate||t.has("zRoc")?N.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("transform",((t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?SDTMath.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr)}\n          )`})):this.sdt?N.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("transform",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:t.d,t.d),a=interpolate$1(void 0!==n.c?n.c:t.c,t.c),o=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>(n.d=i(t),n.c=a(t),n.s=o(t),`translate(\n              ${u(this.zRoc?SDTMath.far2Zfar(SDTMath.dC2Far(n.d,n.c,n.s)):SDTMath.dC2Far(n.d,n.c,n.s))},\n              ${h(this.zRoc?SDTMath.hr2Zhr(SDTMath.dC2Hr(n.d,n.c,n.s)):SDTMath.dC2Hr(n.d,n.c,n.s))}\n            )`)})):N.transition().duration(this.drag?0:c).ease(cubicOut).attr("transform",((t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?SDTMath.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr)}\n          )`})),O.exit().remove(),this.drag=!1,this.sdt=!1,this.firstUpdate=!1}}customElements.define("roc-space",ROCSpace);class SDTModel extends(DecidablesMixinResizeable(DetectableElement)){static get properties(){return{color:{attribute:"color",type:String,reflect:!0},distributions:{attribute:"distributions",type:Boolean,reflect:!0},threshold:{attribute:"threshold",type:Boolean,reflect:!0},unequal:{attribute:"unequal",type:Boolean,reflect:!0},sensitivity:{attribute:"sensitivity",type:Boolean,reflect:!0},bias:{attribute:"bias",type:Boolean,reflect:!0},variance:{attribute:"variance",type:Boolean,reflect:!0},histogram:{attribute:"histogram",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},binWidth:{attribute:!1,type:Number,reflect:!1},trials:{attribute:!1,type:Array,reflect:!1}}}constructor(){super(),this.colors=["outcome","response","stimulus","none"],this.color="outcome",this.distributions=!1,this.threshold=!1,this.unequal=!1,this.sensitivity=!1,this.bias=!1,this.variance=!1,this.histogram=!1,this.d=1,this.c=0,this.s=1,this.binWidth=.25,this.signals=["present","absent"],this.responses=["present","absent"],this.trials=[],this.muN=NaN,this.muS=NaN,this.l=NaN,this.hS=NaN,this.binRange=[-3,3],this.h=0,this.m=0,this.fa=0,this.cr=0,this.firstUpdate=!0,this.drag=!1,this.alignState()}reset(){this.trials=[],this.h=0,this.m=0,this.fa=0,this.cr=0}trial(t,e,r,n,i){const a={new:!0,paused:!1};a.trial=t,a.signal=e,a.duration=r,a.wait=n,a.iti=i,a.evidence=jStat.normal.sample(0,1),this.alignTrial(a),this.trials.push(a),this.requestUpdate()}alignTrial(t){return"present"===t.signal?(t.trueEvidence=t.evidence*this.s+this.muS,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"h":"m"):(t.trueEvidence=t.evidence+this.muN,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"fa":"cr"),t.new||(this[t.outcome]+=1),t}alignState(){this.far=SDTMath.dC2Far(this.d,this.c,this.s),this.hr=SDTMath.dC2Hr(this.d,this.c,this.s),this.muN=SDTMath.d2MuN(this.d,this.s),this.muS=SDTMath.d2MuS(this.d,this.s),this.l=SDTMath.c2L(this.c,this.s),this.hS=SDTMath.s2H(this.s),this.h=0,this.m=0,this.fa=0,this.cr=0;for(let t=0;t<this.trials.length;t+=1)this.alignTrial(this.trials[t])}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1`
      ${DetectableElement.svgFilters}
    `}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-model-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far,hr:this.hr,h:this.h,m:this.m,fa:this.fa,cr:this.cr},bubbles:!0}))}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const a=2*this.rem,o=3*this.rem,s=3*this.rem,l=i-(a+o),c=n-(s+(this.histogram&&this.distributions?3:.75)*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=linear().domain([-3,3]).range([0,c]),d=linear().domain([.5,0]).range([0,l]),p=h(this.binWidth)-h(0),f=linear().domain([l/p,0]).range([0,l]),g=drag().subject((()=>({x:h(this.l),y:0}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;let e=h.invert(t.x);e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,this.c=SDTMath.l2C(e,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),m=drag().subject((()=>({x:h(this.muN),y:0}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;let e=h.invert(t.x);e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,this.d=SDTMath.muN2D(e,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),y=drag().subject((()=>({x:h(this.muS),y:d(this.hS)}))).on("start",((t,e)=>{select(t.currentTarget).classed("dragging",!0),e.startX=t.x,e.startY=t.y,e.startHS=this.hS,e.startMuS=this.muS})).on("drag",((t,e)=>{this.drag=!0;let r=this.muS;this.interactive&&(r=h.invert(t.x),r=r<h.domain()[0]?h.domain()[0]:r>h.domain()[1]?h.domain()[1]:r);let n=this.hS;this.unequal&&(n=d.invert(t.y),n=n<.01?.01:n>d.domain()[0]?d.domain()[0]:n),this.interactive&&this.unequal&&t.sourceEvent.shiftKey&&(Math.abs(t.x-e.startX)>Math.abs(t.y-e.startY)?n=e.startHS:r=e.startMuS),this.unequal&&(this.s=SDTMath.h2S(n),this.c=SDTMath.l2C(this.l,this.s)),this.d=SDTMath.muS2D(r,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),b=line().x((t=>h(t.e))).y((t=>d(t.p))),$=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),v=$.enter().append("svg").classed("main",!0),w=v.merge($).attr("viewBox",`0 0 ${n} ${i}`),x=v.append("g").classed("plot",!0),E=w.select(".plot").attr("transform",`translate(${s}, ${a})`),S=x.append("g").classed("underlayer",!0),_=E.select(".underlayer");S.append("rect").classed("background",!0),_.select(".background").attr("height",l).attr("width",c),S.append("g").classed("axis-x",!0);_.select(".axis-x").attr("transform",`translate(0, ${l})`).call(axisBottom(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),S.append("text").classed("title-x",!0).attr("text-anchor","middle").text("Evidence"),_.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`);const T=_.selectAll(".axis-y").data(this.distributions?[{}]:[]);T.enter().append("g").classed("axis-y",!0).merge(T).call(axisLeft(d).ticks(5)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),T.exit().remove();const A=_.selectAll(".title-y").data(this.distributions?[{}]:[]);A.enter().append("text").classed("title-y",!0).attr("text-anchor","middle").text("Probability").merge(A).attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),A.exit().remove();const R=_.selectAll(".axis-y2").data(this.histogram?[{}]:[]);R.enter().append("g").classed("axis-y2",!0).merge(R).attr("transform",this.distributions?`translate(${c}, 0)`:"").call(this.distributions?axisRight(f).ticks(10):axisLeft(f).ticks(10)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),R.exit().remove();const C=_.selectAll(".title-y2").data(this.histogram?[{}]:[]);C.enter().append("text").classed("title-y2",!0).attr("text-anchor","middle").text("Count").merge(C).attr("transform",this.distributions?`translate(${c+1.5*this.rem}, ${l/2})rotate(90)`:`translate(${-1.5*this.rem}, ${l/2})rotate(-90)`),C.exit().remove(),x.append("g").classed("content",!0);const O=E.select(".content"),k=O.selectAll(".signal-noise").data(this.distributions?[{}]:[]),N=k.enter().append("g").classed("signal-noise",!0),P=N.merge(k);k.exit().remove();const I=N.append("g").classed("noise",!0),M=P.selectAll(".noise").attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muN;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.muN&&(this.d=SDTMath.muN2D(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?M.call(m):M.on(".drag",null)),I.append("path").classed("curve-cr",!0),M.select(".curve-cr").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=o(t);const e=range(h.domain()[0],SDTMath.c2L(n.c,n.s),.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:SDTMath.c2L(n.c,n.s),p:jStat.normal.pdf(SDTMath.c2L(n.c,n.s),SDTMath.d2MuN(n.d,n.s),1)}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),b(e)}})),I.append("path").classed("curve-fa",!0),M.select(".curve-fa").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=o(t);const e=range(SDTMath.c2L(n.c,n.s),h.domain()[1],.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:h.domain()[1],p:jStat.normal.pdf(h.domain()[1],SDTMath.d2MuN(n.d,n.s),1)}),e.push({e:h.domain()[1],p:0}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),b(e)}})),I.append("path").classed("curve-noise",!0),M.select(".curve-noise").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=range(h.domain()[0],h.domain()[1],.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:h.domain()[1],p:jStat.normal.pdf(h.domain()[1],SDTMath.d2MuN(n.d,n.s),1)}),b(e)}}));const D=N.append("g").classed("signal",!0),L=P.selectAll(".signal").attr("tabindex",this.interactive||this.unequal?0:null).classed("interactive",this.interactive).classed("unequal",this.unequal).on("keydown.sensitivity",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muS;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.muS&&(this.d=SDTMath.muS2D(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null).on("keydown.variance",this.unequal?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let e=this.hS;switch(t.key){case"ArrowUp":e+=t.shiftKey?.002:.02;break;case"ArrowDown":e-=t.shiftKey?.002:.02}e=e<.01?.01:e>d.domain()[0]?d.domain()[0]:e,e!==this.hS&&(this.s=SDTMath.h2S(e),this.d=SDTMath.muN2D(this.muN,this.s),this.c=SDTMath.l2C(this.l,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive")||t.has("unequal"))&&(this.interactive||this.unequal?L.call(y):L.on(".drag",null)),D.append("path").classed("curve-m",!0),L.select(".curve-m").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=o(t);const e=range(h.domain()[0],SDTMath.c2L(n.c,n.s),.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:SDTMath.c2L(n.c,n.s),p:jStat.normal.pdf(SDTMath.c2L(n.c,n.s),SDTMath.d2MuS(n.d,n.s),n.s)}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),b(e)}})),D.append("path").classed("curve-h",!0),L.select(".curve-h").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=o(t);const e=range(SDTMath.c2L(n.c,n.s),h.domain()[1],.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:h.domain()[1],p:jStat.normal.pdf(h.domain()[1],SDTMath.d2MuS(n.d,n.s),n.s)}),e.push({e:h.domain()[1],p:0}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),b(e)}})),D.append("path").classed("curve-signal",!0),L.select(".curve-signal").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d),a=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=range(h.domain()[0],h.domain()[1],.05).map((t=>({e:t,p:jStat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:h.domain()[1],p:jStat.normal.pdf(h.domain()[1],SDTMath.d2MuS(n.d,n.s),n.s)}),b(e)}}));const j=O.selectAll(".measure-d").data(this.sensitivity?[{}]:[]),U=j.enter().append("g").classed("measure-d",!0);U.append("line").classed("line",!0),U.append("line").classed("cap-left",!0),U.append("line").classed("cap-right",!0);const F=U.append("text").classed("label",!0);F.append("tspan").classed("d math-var",!0).text("d′"),F.append("tspan").classed("equals",!0).text(" = "),F.append("tspan").classed("value",!0);const B=U.merge(j);B.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muN)).attr("y1",d(.43)).attr("x2",h(this.muS)).attr("y2",d(.43)),B.select(".cap-left").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muN)).attr("y1",d(.43)+5).attr("x2",h(this.muN)).attr("y2",d(.43)-5),B.select(".cap-right").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS)).attr("y1",d(.43)+5).attr("x2",h(this.muS)).attr("y2",d(.43)-5);B.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(this.muN>this.muS?this.muN:this.muS)+5).attr("y",d(.43)+3).select(".value").tween("text",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:this.d,this.d);return t=>{n.d=i(t),select(n).text(format(".3")(n.d))}})),j.exit().remove();const V=O.selectAll(".measure-c").data(this.bias?[{}]:[]),H=V.enter().append("g").classed("measure-c",!0);H.append("line").classed("line",!0),H.append("line").classed("cap-zero",!0);const z=H.append("text").classed("label",!0);z.append("tspan").classed("c math-var",!0).text("c"),z.append("tspan").classed("equals",!0).text(" = "),z.append("tspan").classed("value",!0);const q=H.merge(V);q.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.l)).attr("y1",d(.47)).attr("x2",h(0)).attr("y2",d(.47)),q.select(".cap-zero").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(0)).attr("y1",d(.47)+5).attr("x2",h(0)).attr("y2",d(.47)-5);q.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(0)+(this.l<0?5:-5)).attr("y",d(.47)+3).attr("text-anchor",this.c<0?"start":"end").select(".value").tween("text",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.c?n.c:this.c,this.c);return t=>{n.c=i(t),select(n).text(format(".3")(n.c))}})),V.exit().remove();const K=O.selectAll(".measure-s").data(this.variance?[{}]:[]),G=K.enter().append("g").classed("measure-s",!0);G.append("line").classed("line",!0),G.append("line").classed("cap-left",!0),G.append("line").classed("cap-right",!0);const Y=G.append("text").classed("label",!0);Y.append("tspan").classed("s math-var",!0).text("σ"),Y.append("tspan").classed("equals",!0).text(" = "),Y.append("tspan").classed("value",!0);const W=G.merge(K);W.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS-this.s)).attr("y1",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s).attr("x2",h(this.muS+this.s)).attr("y2",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s),W.select(".cap-left").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS-this.s)).attr("y1",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS-this.s)).attr("y2",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s-5),W.select(".cap-right").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS+this.s)).attr("y1",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS+this.s)).attr("y2",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s-5);W.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(this.muS)).attr("y",d(jStat.normal.pdf(this.s,0,this.s))+10/this.s-3).select(".value").tween("text",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.s=i(t),select(n).text(format(".3")(n.s))}})),K.exit().remove();const X=O.selectAll(".threshold").data(this.threshold?[{}]:[]),Z=X.enter().append("g").classed("threshold",!0);Z.append("line").classed("line",!0),Z.append("circle").classed("handle",!0);const Q=Z.merge(X).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Q.call(g).on("keydown",(t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.l;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.l&&(this.c=SDTMath.l2C(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}})):Q.on("drag",null).on("keydown",null)),Q.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),Q.select(".handle").transition().duration(this.drag?0:u).ease(cubicOut).attr("cx",h(this.l)).attr("cy",d(.54)),X.exit().remove();const J=O.selectAll(".histogram").data(this.histogram?[{}]:[]),tt=J.enter().append("g").classed("histogram",!0).merge(J);if(J.exit().remove(),this.histogram){const t=bin().value((t=>t.trueEvidence)).domain(h.domain()).thresholds(range(this.binRange[0],this.binRange[1],this.binWidth)),e=t(this.trials);let r=-1,n=-1;for(let t=0;t<e.length;t+=1)for(let i=0;i<e[t].length;i+=1)e[t][i].binValue=e[t].x0,e[t][i].binCount=i,0===t&&(r=i),t===e.length-1&&(n=i);for(let t=0;t<this.trials.length;t+=1)this.trials[t].trueEvidence<this.binRange[0]&&(r+=1,this.trials[t].binCount=r,this.trials[t].binValue=e[0].x0),this.trials[t].trueEvidence>this.binRange[1]&&(n+=1,this.trials[t].binCount=n,this.trials[t].binValue=e[e.length-1].x0);const i=tt.selectAll(".trial").data(this.trials,(t=>t.trial)),a=i.enter().append("rect").attr("stroke-width",3).attr("data-new-trial-ease-time",0).attr("stroke",this.getComputedStyleValue("---color-acc")).attr("fill",this.getComputedStyleValue("---color-acc-light")).merge(i).attr("class",(t=>`trial ${t.outcome}`)).attr("width",p-3).attr("height",p-3),o=a.filter((t=>t.new&&!t.paused));if(!o.empty()){const t=o.attr("data-new-trial-ease-time"),e=e=>linear().domain([0,1]).range([t,1])(e),r=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r));o.transition("new").duration((e=>Math.floor((.75*e.duration+.25*e.wait)*(1-t)))).ease(e).attr("data-new-trial-ease-time",1).attrTween("stroke",((t,e,n)=>{const i=n[e],a=interpolateRgb(i.getAttribute("stroke"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"));return t=>a(r(cubicIn)(t))})).attrTween("fill",((t,e,n)=>{const i=n[e],a=interpolateRgb(i.getAttribute("fill"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"));return t=>a(r(cubicIn)(t))})).attrTween("x",((t,e,n)=>{const i=interpolate$1(n[e].getAttribute("x"),h(t.binValue)+1.5);return t=>i(r(cubicOut)(t))})).attrTween("y",((t,e,n)=>{const i=interpolate$1(n[e].getAttribute("y"),d(0)+1.5-(t.binCount+1)*p);return t=>i(r(cubicIn)(t))})).on("end",((t,e,r)=>{r[e].removeAttribute("data-new-trial-ease-time"),t.new=!1,this.alignTrial(t),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{stimulus:t.signal,response:t.response,outcome:t.outcome,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:0},bubbles:!0}))}))}const s=a.filter((t=>t.new&&t.paused));if(!s.empty()){const t=s.attr("data-new-trial-ease-time");s.transition().duration(u).ease(cubicOut).attr("x",(e=>interpolate$1(0,h(e.binValue)+1.5)(cubicOut(t)))).attr("y",(e=>interpolate$1(0,d(0)+1.5-(e.binCount+1)*p)(cubicIn(t)))).attr("stroke",(e=>interpolateRgb(this.getComputedStyleValue("---color-acc"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${e.outcome}`):this.getComputedStyleValue("---color-acc"))(cubicIn(t)))).attr("fill",(e=>interpolateRgb(this.getComputedStyleValue("---color-acc-light"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${e.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))(cubicIn(t))))}a.filter((t=>!t.new)).transition().duration(u).ease(cubicOut).attr("x",(t=>h(t.binValue)+1.5)).attr("y",(t=>d(0)+1.5-(t.binCount+1)*p)).attr("stroke",(t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"))).attr("fill",(t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))),i.exit().transition().duration(u).ease(linear$1).attrTween("stroke",((t,e,r)=>{const n=r[e],i=interpolateRgb(n.getAttribute("stroke"),this.getComputedStyleValue("---color-acc"));return t=>i(cubicIn(t))})).attrTween("fill",((t,e,r)=>{const n=r[e],i=interpolateRgb(n.getAttribute("fill"),this.getComputedStyleValue("---color-acc-light"));return t=>i(cubicIn(t))})).attrTween("x",((t,e,r)=>{const n=interpolate$1(r[e].getAttribute("x"),0);return t=>n(cubicIn(t))})).attrTween("y",((t,e,r)=>{const n=interpolate$1(r[e].getAttribute("y"),0);return t=>n(cubicOut(t))})).remove()}const et=x.append("g").classed("overlayer",!0),rt=E.select(".overlayer");et.append("rect").classed("background",!0),rt.select(".background").attr("height",l).attr("width",c),this.drag=!1,this.firstUpdate=!1}pauseTrial(){const t=select(this.renderRoot).select(".trial[data-new-trial-ease-time]");t.interrupt("new"),t.datum((t=>(t.paused=!0,t)))}resumeTrial(){select(this.renderRoot).select(".trial[data-new-trial-ease-time]").datum((t=>(t.paused=!1,t))),this.requestUpdate()}}customElements.define("sdt-model",SDTModel);class DetectableTable extends DetectableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",converter:DecidablesConverterSet,reflect:!0},color:{attribute:"color",type:String,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},acc:{attribute:!1,type:Number,reflect:!1},ppv:{attribute:!1,type:Number,reflect:!1},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.numeric=!1,this.summaries=["stimulusRates","responseRates","accuracy"],this.summary=new Set,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color="all",this.payoff=!1,this.hPayoff=void 0,this.mPayoff=void 0,this.crPayoff=void 0,this.faPayoff=void 0,this.h=40,this.m=60,this.fa=75,this.cr=25,this.alignState()}alignState(){this.hr=SDTMath.hM2Hr(this.h,this.m),this.far=SDTMath.faCr2Far(this.fa,this.cr),this.acc=SDTMath.hMFaCr2Acc(this.h,this.m,this.fa,this.cr),this.ppv=SDTMath.hFa2Ppv(this.h,this.fa),this.fomr=SDTMath.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("detectable-table-change",{detail:{h:this.h,m:this.m,hr:this.hr,fa:this.fa,cr:this.cr,far:this.far,acc:this.acc,ppv:this.ppv,fomr:this.fomr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}hrInput(t){const e=parseFloat(t.target.value),r=this.h+this.m;this.h=Math.round(e*r),this.m=r-this.h,this.alignState(),this.sendEvent()}farInput(t){const e=parseFloat(t.target.value),r=this.fa+this.cr;this.fa=Math.round(e*r),this.cr=r-this.fa,this.alignState(),this.sendEvent()}accInput(t){const e=parseFloat(t.target.value),r=this.h+this.m,n=this.fa+this.cr,i=(this.hr+this.far-1)/2;let a=i+e,o=1+i-e;o>1&&(o=1,a=o+2*e-1),o<0&&(o=0,a=o+2*e-1),a>1&&(a=1,o=a-2*e+1),a<0&&(a=0,o=a-2*e+1),this.h=Math.round(a*r),this.m=r-this.h,this.fa=Math.round(o*n),this.cr=n-this.fa,this.alignState(),this.sendEvent()}ppvInput(t){const e=parseFloat(t.target.value),r=this.h+this.fa;this.h=Math.round(e*r),this.fa=r-this.h,this.alignState(),this.sendEvent()}fomrInput(t){const e=parseFloat(t.target.value),r=this.m+this.cr;this.m=Math.round(e*r),this.cr=r-this.m,this.alignState(),this.sendEvent()}static get styles(){return[super.styles,i$2`
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
      `]}willUpdate(){this.alignState()}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map((({type:t,value:e})=>"minusSign"===t?"−":e)).reduce(((t,e)=>t+e));let r,n,i,a,o,s,l,c,u;return this.numeric?(r=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.hPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,n=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.mPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,i=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.faPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,a=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.crPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,o=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `,s=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `,l=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `,c=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `,u=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `):(r=x$1`<span>Hits</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.hPayoff)}</span>`:x$1``}`,n=x$1`<span>Misses</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.mPayoff)}</span>`:x$1``}`,i=x$1`<span>False Alarms</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.faPayoff)}</span>`:x$1``}`,a=x$1`<span>Correct Rejections</span>
        ${this.payoff?x$1`<span class="payoff">${e(this.crPayoff)}</span>`:x$1``}`,o=x$1`<span>Hit Rate</span>`,s=x$1`<span>False Alarm Rate</span>`,l=x$1`<span>Accuracy</span>`,c=x$1`<span>Positive Predictive Value</span>`,u=x$1`<span>False Omission Rate</span>`),x$1`
      <table class=${this.numeric?"numeric":""}>
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
              ${r}
            </td>
            <td class="td td-data m">
              ${n}
            </td>
            ${this.summary.has("stimulusRates")?x$1`
                <td class="td td-summary hr">
                  ${o}
                </td>`:x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Absent
            </th>
            <td class="td td-data fa">
              ${i}
            </td>
            <td class="td td-data cr">
              ${a}
            </td>
            ${this.summary.has("stimulusRates")?x$1`
                <td class="td td-summary far">
                  ${s}
                </td>`:x$1``}
          </tr>
          ${this.summary.has("responseRates")||this.summary.has("accuracy")?x$1`
              <tr>
                <td colspan="2"></td>
                ${this.summary.has("responseRates")?x$1`
                    <td class="td td-summary ppv">
                      ${c}
                    </td>
                    <td class="td td-summary fomr">
                      ${u}
                    </td>`:x$1`
                    <td colspan="2"></td>`}
                ${this.summary.has("accuracy")?x$1`
                    <td class="td td-summary acc" rowspan="2">
                      ${l}
                    </td>`:x$1``}
              </tr>`:x$1``}
        </tbody>
      </table>`}}customElements.define("detectable-table",DetectableTable);class CPTMath{static xal2v(t,e,r){return t>=0?t**e:-r*(-t)**e}static xlv2a(t,e,r){return t>=0?Math.log(r)/Math.log(t):(Math.log(-r)-Math.log(e))/Math.log(-t)}static xav2l(t,e,r){return t>=0?NaN:-r/(-t)**e}static pg2w(t,e){return t**e/(t**e+(1-t)**e)**(1/e)}static vw2u(t,e){if("number"==typeof t&&"number"==typeof e)return t*e;if(t instanceof Array&&e instanceof Array&&t.length>0&&t.length===e.length){let r=0;for(let n=0;n<t.length;n+=1)r+=t[n]*e[n];return r}return NaN}}class ProspectableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return{x:Set1[0],a:Set1[4],l:Set1[5],v:Set1[7],p:Set1[1],g:Set1[2],w:Set1[3],u:Set1[6],chosen:Set1[8],better:"#4545d0",worse:"#f032e6",even:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"}}static get lights(){return Object.keys(ProspectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(ProspectableElement.colors[e],"#ffffff")(.5),t)),{})}static get darks(){return Object.keys(ProspectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(ProspectableElement.colors[e],"#000000")(.5),t)),{})}static get styles(){return[super.styles,i$2`
        :host {
          ---color-x: var(--color-x, ${r$3(this.colors.x)});
          ---color-a: var(--color-a, ${r$3(this.colors.a)});
          ---color-l: var(--color-l, ${r$3(this.colors.l)});
          ---color-v: var(--color-v, ${r$3(this.colors.v)});
          ---color-p: var(--color-p, ${r$3(this.colors.p)});
          ---color-g: var(--color-g, ${r$3(this.colors.g)});
          ---color-w: var(--color-w, ${r$3(this.colors.w)});
          ---color-u: var(--color-u, ${r$3(this.colors.u)});
          ---color-chosen: var(--color-chosen, ${r$3(this.colors.chosen)});
          ---color-better: var(--color-better, ${r$3(this.colors.better)});
          ---color-worse: var(--color-worse, ${r$3(this.colors.worse)});
          ---color-even: var(--color-even, ${r$3(this.colors.even)});
          ---color-correct: var(--color-correct, ${r$3(this.colors.correct)});
          ---color-error: var(--color-error, ${r$3(this.colors.error)});
          ---color-nr: var(--color-nr, ${r$3(this.colors.nr)});

          ---color-x-light: var(--color-x-light, ${r$3(this.lights.x)});
          ---color-a-light: var(--color-a-light, ${r$3(this.lights.a)});
          ---color-l-light: var(--color-l-light, ${r$3(this.lights.l)});
          ---color-v-light: var(--color-v-light, ${r$3(this.lights.v)});
          ---color-p-light: var(--color-p-light, ${r$3(this.lights.p)});
          ---color-g-light: var(--color-g-light, ${r$3(this.lights.g)});
          ---color-w-light: var(--color-w-light, ${r$3(this.lights.w)});
          ---color-u-light: var(--color-u-light, ${r$3(this.lights.u)});
          ---color-chosen-light: var(--color-chosen-light, ${r$3(this.lights.chosen)});
          ---color-better-light: var(--color-better-light, ${r$3(this.lights.better)});
          ---color-worse-light: var(--color-worse-light, ${r$3(this.lights.worse)});
          ---color-even-light: var(--color-even-light, ${r$3(this.lights.even)});
          ---color-correct-light: var(--color-correct-light, ${r$3(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${r$3(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${r$3(this.lights.nr)});

          ---color-x-dark: var(--color-x-dark, ${r$3(this.darks.x)});
          ---color-a-dark: var(--color-a-dark, ${r$3(this.darks.a)});
          ---color-l-dark: var(--color-l-dark, ${r$3(this.darks.l)});
          ---color-v-dark: var(--color-v-dark, ${r$3(this.darks.v)});
          ---color-p-dark: var(--color-p-dark, ${r$3(this.darks.p)});
          ---color-g-dark: var(--color-g-dark, ${r$3(this.darks.g)});
          ---color-w-dark: var(--color-w-dark, ${r$3(this.darks.w)});
          ---color-u-dark: var(--color-u-dark, ${r$3(this.darks.u)});
          ---color-chosen-dark: var(--color-chosen-dark, ${r$3(this.darks.chosen)});
          ---color-better-dark: var(--color-better-dark, ${r$3(this.darks.better)});
          ---color-worse-dark: var(--color-worse-dark, ${r$3(this.darks.worse)});
          ---color-even-dark: var(--color-even-dark, ${r$3(this.darks.even)});
          ---color-correct-dark: var(--color-correct-dark, ${r$3(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${r$3(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${r$3(this.darks.nr)});
        }
      `]}}class CPTProbability extends(DecidablesMixinResizeable(ProspectableElement)){static get properties(){return{p:{attribute:"probability",type:Number,reflect:!0},g:{attribute:"gamma",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},w:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.g=.5,this.p=null,this.label="",this.function="default",this.functions=[{name:"default",g:this.g}],this.probabilities=[{name:"default",p:this.p,label:this.label,function:this.function}],this.xl=null,this.xw=null,this.pw=null,this.xs=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.functions[0].g=this.g,this.probabilities[0].p=this.p,this.probabilities[0].label=this.label,this.probabilities[0].function=this.function,this.probabilities.forEach((t=>{const e=this.functions.find((e=>e.name===t.function));t.w=CPTMath.pg2w(t.p,e.g)})),this.w=this.probabilities[0].w}trial(t,e,r,n,i,a){this.trialCount&&this.removeProbability(`${this.trialCount}`),this.xl=t,this.xw=e,this.pw=r,this.xs=n,this.trialCount=i,this.response=a,this.setProbability(this.pw,`${this.trialCount}`,"","default",!0)}pauseTrial(){const t=select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum((t=>(t.paused=!0,t)))}resumeTrial(){select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum((t=>(t.paused=!1,t))),this.requestUpdate()}clearFunctions(){this.functions.splice(1),this.requestUpdate()}clearProbabilities(){this.probabilities.splice(1),this.requestUpdate()}clear(){this.clearFunctions(),this.clearProbabilities()}removeFunction(t){this.functions=this.functions.filter((e=>e.name!==t)),this.requestUpdate()}removeProbability(t){this.probabilities=this.probabilities.filter((e=>e.name!==t)),this.requestUpdate()}remove(t){this.removeFunction(t),this.removeProbability(t)}getFunction(t="default"){return this.functions.find((e=>e.name===t))}getProbability(t="default"){return this.probabilities.find((e=>e.name===t))}get(t="default"){return{...this.getFunction(t),...this.getProbability(t)}}setFunction(t,e="default"){"default"===e&&(this.g=t);const r=this.functions.find((t=>t.name===e));void 0===r?this.functions.push({name:e,g:t}):r.g=t,this.requestUpdate()}setProbability(t,e="default",r="",n=e,i=!1){"default"===e&&(this.p=t,this.label=r);const a=this.probabilities.find((t=>t.name===e));void 0===a?this.probabilities.push({name:e,p:t,label:r,function:n,trial:i,new:i}):(a.p=t,a.label=r,a.function=n),this.requestUpdate()}set(t,e,r="default",n="",i=r){this.setFunction(e,i),this.setProbability(t,r,n,i)}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1`
      ${ProspectableElement.svgFilters}
    `}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,o=3*this.rem,s=n-(i+a),l=n-(o+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=linear().domain([0,1]).range([0,l]).clamp(!0);this.xScale=u;const h=linear().domain([1,0]).range([0,s]);this.yScale=h;const d=drag().subject(((t,e)=>({x:t.x,y:this.yScale(CPTMath.pg2w(this.xScale.invert(t.x),e.g)),p:this.xScale.invert(t.x),g:e.g,w:CPTMath.pg2w(this.xScale.invert(t.x),e.g)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=r-t.subject.p,a=n-t.subject.w,o=(i**2+a**2)**.5,s=t.subject.p>t.subject.w?i>a?t.subject.g-o:t.subject.g+o:i>a?t.subject.g+o:t.subject.g-o;e.g=s>1?1:s<0?0:s,"default"===e.name&&(this.g=e.g),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:this.get(e.name),bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),p=drag().subject(((t,e)=>({x:this.xScale(e.p),y:this.yScale(e.w)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x);e.p=r<0?0:r>1?1:r,"default"===e.name&&(this.p=e.p),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:{name:e.name,p:e.p,w:e.w,label:e.label,g:this.getFunction(e.function).g},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),f=line().x((t=>u(t.p))).y((t=>h(t.w))),g=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),m=g.enter().append("svg").classed("main",!0),y=m.merge(g).attr("viewBox",`0 0 ${n} ${n}`),b=m.append("g").classed("plot",!0),$=y.select(".plot").attr("transform",`translate(${o}, ${i})`);b.append("clipPath").attr("id","clip-cpt-value").append("rect"),$.select("clipPath rect").attr("height",s+1).attr("width",l+1);const v=b.append("g").classed("underlayer",!0),w=$.select(".underlayer");v.append("rect").classed("background",!0),w.select(".background").attr("height",s).attr("width",l),v.append("g").classed("scale-x",!0);w.select(".scale-x").attr("transform",`translate(0, ${s})`).transition().duration(2*c).ease(cubicOut).call(axisBottom(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const x=v.append("text").classed("title-x",!0).attr("text-anchor","middle");x.append("tspan").classed("name",!0).text("Probability ("),x.append("tspan").classed("math-var p",!0).text("p"),x.append("tspan").classed("name",!0).text(")"),w.select(".title-x").attr("transform",`translate(${l/2}, ${s+2.25*this.rem})`),v.append("g").classed("scale-y",!0);w.select(".scale-y").transition().duration(2*c).ease(cubicOut).call(axisLeft(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const E=v.append("text").classed("title-y",!0).attr("text-anchor","middle");E.append("tspan").classed("name",!0).text("Decision Weight ("),E.append("tspan").classed("math-var v",!0).text("w"),E.append("tspan").classed("name",!0).text(")"),w.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${s/2})rotate(-90)`),v.append("line").classed("diagonal",!0),w.select(".diagonal").transition().duration(2*c).attr("x1",u(0)).attr("y1",h(0)).attr("x2",u(1)).attr("y2",h(1)),b.append("g").classed("content",!0);const S=$.select(".content"),_=S.selectAll(".lines").data(this.probabilities.filter((t=>null!=t.p)),(t=>t.name)),T=_.enter().append("g").classed("lines",!0);T.each(((t,e,r)=>{const n=select(r[e]);n.append("line").classed("line-p above",!0),n.append("line").classed("line-p below",!0),n.append("line").classed("line-w before",!0),n.append("line").classed("line-w after",!0)})),T.filter((t=>t.new)).attr("data-animating-ease-time-1",0).attr("data-animating-ease-time-2",0).each(((t,e,r)=>{const n=select(r[e]);n.select(".line-p.above").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(1)).attr("y2",h(1)),n.select(".line-p.below").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(0)).attr("y2",h(0)),n.select(".line-w.before").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(t.w)).attr("y2",h(t.w)),n.select(".line-w.after").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(t.w)).attr("y2",h(t.w))}));const A=T.merge(_),R=A.filter((t=>t.new&&!t.paused));if(!R.empty()){const t=R.attr("data-animating-ease-time-1"),e=R.attr("data-animating-ease-time-2"),r=e=>linear().domain([0,1]).range([t,1])(e),n=e=>linear().range([0,1]).domain([t,1])(e),i=t=>linear().domain([0,1]).range([e,1])(t),a=t=>linear().range([0,1]).domain([e,1])(t),o=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r)),s=t=>r=>linear().domain([t(e),1]).range([0,1])(t(r));R.transition("new-1").duration((()=>Math.floor(c*(1-t)))).ease(r).attr("data-animating-ease-time-1",1).tween("animating",((t,e,r)=>{const i=r[e],a=select(i),s=interpolate$1(void 0!==i.p?i.p:t.p,t.p),l=interpolate$1(void 0!==i.g?i.g:this.getFunction(t.function).g,this.getFunction(t.function).g),c=interpolate$1(h.invert(a.select(".line-p.above").attr("y1")),t.w),d=interpolate$1(h.invert(a.select(".line-p.below").attr("y1")),t.w);return t=>{i.p=s(cubicOut(n(t))),i.g=l(cubicOut(n(t))),i.w=CPTMath.pg2w(i.p,i.g),a.select(".line-p.above").attr("x1",u(i.p)).attr("x2",u(i.p)).attr("y1",h(c(o(cubicIn)(t)))).attr("y2",h(1)),a.select(".line-p.below").attr("x1",u(i.p)).attr("x2",u(i.p)).attr("y1",h(d(o(cubicIn)(t)))).attr("y2",h(0))}})).transition("new-2").duration((()=>Math.floor(c*(1-e)))).ease(i).attr("data-animating-ease-time-2",1).tween("animating",((t,e,r)=>{const n=r[e],i=select(n),o=interpolate$1(void 0!==n.p?n.p:t.p,t.p),l=interpolate$1(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g),c=interpolate$1(u.invert(i.select(".line-w.before").attr("x1")),0),d=interpolate$1(u.invert(i.select(".line-w.after").attr("x1")),1);return t=>{n.p=o(cubicOut(a(t))),n.g=l(cubicOut(a(t))),n.w=CPTMath.pg2w(n.p,n.g),i.select(".line-w.before").attr("x1",u(c(s(cubicOut)(t)))).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w)),i.select(".line-w.after").attr("x1",u(d(s(cubicOut)(t)))).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w))}})).on("end",((t,e,r)=>{const n=r[e];n.removeAttribute("data-animating-ease-time-1"),n.removeAttribute("data-animating-ease-time-2"),t.new=!1,this.dispatchEvent(new CustomEvent("prospectable-response",{detail:{trial:this.trialCount,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,response:this.response},bubbles:!0}))}))}const C=A.filter((t=>t.new&&t.paused));if(!C.empty()){const t=C.attr("data-animating-ease-time-1"),e=C.attr("data-animating-ease-time-2");C.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).tween("paused",((r,n,i)=>{const a=i[n],o=select(a),s=interpolate$1(void 0!==a.p?a.p:r.p,r.p),l=interpolate$1(void 0!==a.g?a.g:this.getFunction(r.function).g,this.getFunction(r.function).g),c=interpolate$1(1,r.w),d=interpolate$1(0,r.w),p=interpolate$1(r.p,0),f=interpolate$1(r.p,1);return r=>{a.p=s(r),a.g=l(r),a.w=CPTMath.pg2w(a.p,a.g),o.select(".line-p.above").attr("x1",u(a.p)).attr("x2",u(a.p)).attr("y1",h(c(cubicIn(t)))).attr("y2",h(1)),o.select(".line-p.below").attr("x1",u(a.p)).attr("x2",u(a.p)).attr("y1",h(d(cubicIn(t)))).attr("y2",h(0)),o.select(".line-w.before").attr("x1",u(p(cubicOut(e)))).attr("x2",u(a.p)).attr("y1",h(a.w)).attr("y2",h(a.w)),o.select(".line-w.after").attr("x1",u(f(cubicOut(e)))).attr("x2",u(a.p)).attr("y1",h(a.w)).attr("y2",h(a.w))}}))}A.filter((t=>!t.new)).transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).tween("non-animating",((t,e,r)=>{const n=r[e],i=select(n),a=interpolate$1(void 0!==n.p?n.p:t.p,t.p),o=interpolate$1(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g);return t=>{n.p=a(t),n.g=o(t),n.w=CPTMath.pg2w(n.p,n.g),i.select(".line-p.above").attr("x1",u(n.p)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(1)),i.select(".line-p.below").attr("x1",u(n.p)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(0)),i.select(".line-w.before").attr("x1",u(0)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w)),i.select(".line-w.after").attr("x1",u(1)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w))}})),_.exit().remove();const O=S.selectAll(".curve").data(this.functions,(t=>t.name)),k=O.enter().append("path").classed("curve",!0).attr("clip-path","url(#clip-cpt-value)").merge(O);(this.firstUpdate||t.has("interactive"))&&(this.interactive?k.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.g;switch(t.key){case"ArrowUp":case"ArrowLeft":r+=t.shiftKey?.01:.05;break;case"ArrowDown":case"ArrowRight":r-=t.shiftKey?.01:.05}r=r<0?0:r>1?1:r,r!==e.g&&(e.g=r,"default"===e.name&&(this.g=e.g),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}})):k.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),k.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.g?n.g:t.g,t.g);return t=>{n.g=i(t);const e=range(u.range()[0],u.range()[1]+1,1).map((t=>({p:u.invert(t),w:CPTMath.pg2w(u.invert(t),n.g)})));return f(e)}})),O.exit().remove();const N=S.selectAll(".point").data(this.probabilities.filter((t=>null!=t.p)),(t=>t.name)),P=N.enter().append("g").classed("point",!0);P.append("circle").classed("circle",!0),P.append("text").classed("label",!0);const I=P.merge(N);I.select("text").text((t=>t.label)),I.filter((e=>(this.firstUpdate||t.has("interactive"))&&this.interactive&&!e.trial)).attr("tabindex",0).classed("interactive",!0).call(p).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.p;switch(t.key){case"ArrowUp":case"ArrowRight":r+=t.shiftKey?.01:.05;break;case"ArrowDown":case"ArrowLeft":r-=t.shiftKey?.01:.05}r=r<0?0:r>1?1:r,r!==e.p&&(e.p=r,"default"===e.name&&(this.p=e.p),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:{name:e.name,p:e.p,w:e.w,label:e.label,g:this.getFunction(e.function).g},bubbles:!0}))),t.preventDefault()}})),I.filter((e=>(this.firstUpdate||t.has("interactive"))&&!this.interactive||e.trial)).attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null),I.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).attrTween("transform",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.p?n.p:t.p,t.p),a=interpolate$1(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g);return t=>(n.p=i(t),n.g=a(t),`translate(\n            ${u(n.p)},\n            ${h(CPTMath.pg2w(n.p,n.g))}\n          )`)})),N.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("cpt-probability",CPTProbability);class CPTValue extends(DecidablesMixinResizeable(ProspectableElement)){static get properties(){return{x:{attribute:"value",type:Number,reflect:!0},a:{attribute:"alpha",type:Number,reflect:!0},l:{attribute:"lambda",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},v:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.a=.5,this.l=2,this.x=null,this.label="",this.function="default",this.functions=[{name:"default",a:this.a,l:this.l}],this.values=[{name:"default",x:this.x,label:this.label,function:this.function}],this.xl=null,this.xw=null,this.pw=null,this.xs=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.functions[0].a=this.a,this.functions[0].l=this.l,this.values[0].x=this.x,this.values[0].label=this.label,this.values[0].function=this.function,this.values.forEach((t=>{const e=this.functions.find((e=>e.name===t.function));t.v=CPTMath.xal2v(t.x,e.a,e.l)})),this.v=this.values[0].v}trial(t,e,r,n,i,a){this.trialCount&&this.removeValue(`${this.trialCount}-w`),this.trialCount&&this.removeValue(`${this.trialCount}-s`),this.xl=t,this.xw=e,this.pw=r,this.xs=n,this.trialCount=i,this.response=a,this.setValue(this.xw,`${this.trialCount}-w`,"g","default",!0),this.setValue(this.xs,`${this.trialCount}-s`,"s","default",!0)}pauseTrial(){const t=select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum((t=>(t.paused=!0,t)))}resumeTrial(){select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum((t=>(t.paused=!1,t))),this.requestUpdate()}clearFunctions(){this.functions.splice(1),this.requestUpdate()}clearValues(){this.values.splice(1),this.requestUpdate()}clear(){this.clearFunctions(),this.clearValues()}removeFunction(t){this.functions=this.functions.filter((e=>e.name!==t)),this.requestUpdate()}removeValue(t){this.values=this.values.filter((e=>e.name!==t)),this.requestUpdate()}remove(t){this.removeFunction(t),this.removeValue(t)}getFunction(t="default"){return this.functions.find((e=>e.name===t))}getValue(t="default"){return this.values.find((e=>e.name===t))}get(t="default"){return{...this.getFunction(t),...this.getValue(t)}}setFunction(t,e,r="default"){"default"===r&&(this.a=t,this.l=e);const n=this.functions.find((t=>t.name===r));void 0===n?this.functions.push({name:r,a:t,l:e}):(n.a=t,n.l=e),this.requestUpdate()}setValue(t,e="default",r="",n=e,i=!1){"default"===e&&(this.x=t,this.label=r);const a=this.values.find((t=>t.name===e));void 0===a?this.values.push({name:e,x:t,label:r,function:n,trial:i,new:i}):(a.x=t,a.label=r,a.function=n),this.requestUpdate()}set(t,e,r,n="default",i="",a=n){this.setFunction(e,r,a),this.setValue(t,n,i,a)}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1`
      ${ProspectableElement.svgFilters}
    `}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,o=3*this.rem,s=n-(i+a),l=n-(o+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=20,h=linear().domain([-20,u]).range([0,l]);this.xScale=h;const d=linear().domain([u,-20]).range([0,s]);this.yScale=d;const p=drag().subject(((t,e)=>({x:t.x,y:this.yScale(CPTMath.xal2v(this.xScale.invert(t.x),e.a,e.l))}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=CPTMath.xlv2a(r,e.l,n);e.a=Number.isNaN(i)||i<0||i>1||r<0||n<0?r>n?0:1:i,"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),f=drag().subject(((t,e)=>({x:t.x,y:this.yScale(CPTMath.xal2v(this.xScale.invert(t.x),e.a,e.l))}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=CPTMath.xav2l(r,e.a,n);e.l=Number.isNaN(i)||i<0||i>100||r>0||n>0?r>n?100:0:i,"default"===e.name&&(this.l=e.l),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),g=drag().subject(((t,e)=>({x:this.xScale(e.x),y:this.yScale(e.v)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x);e.x=r<-20?-20:r>u?u:r,"default"===e.name&&(this.x=e.x),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:{name:e.name,x:e.x,v:e.v,label:e.label,a:this.getFunction(e.function).a,l:this.getFunction(e.function).l},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),m=line().x((t=>h(t.x))).y((t=>d(t.v))),y=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),b=y.enter().append("svg").classed("main",!0),$=b.merge(y).attr("viewBox",`0 0 ${n} ${n}`),v=b.append("g").classed("plot",!0),w=$.select(".plot").attr("transform",`translate(${o}, ${i})`);v.append("clipPath").attr("id","clip-cpt-value").append("rect"),w.select("clipPath rect").attr("height",s+1).attr("width",l+1);const x=v.append("g").classed("underlayer",!0),E=w.select(".underlayer");x.append("rect").classed("background",!0),E.select(".background").attr("height",s).attr("width",l),x.append("g").classed("scale-x",!0);E.select(".scale-x").attr("transform",`translate(0, ${d(-20)})`).transition().duration(2*c).ease(cubicOut).call(axisBottom(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),x.append("line").classed("axis-x",!0),E.select(".axis-x").transition().duration(c).ease(cubicOut).attr("x1",h(-20)).attr("x2",h(u)).attr("y1",d(0)).attr("y2",d(0));const S=x.append("text").classed("title-x",!0).attr("text-anchor","middle");S.append("tspan").classed("name",!0).text("Objective Value ("),S.append("tspan").classed("math-var x",!0).text("x"),S.append("tspan").classed("name",!0).text(")"),E.select(".title-x").attr("transform",`translate(${l/2}, ${s+2.25*this.rem})`),x.append("g").classed("scale-y",!0);E.select(".scale-y").transition().duration(2*c).ease(cubicOut).call(axisLeft(d)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),x.append("line").classed("axis-y",!0),E.select(".axis-y").transition().duration(c).ease(cubicOut).attr("x1",h(0)).attr("x2",h(0)).attr("y1",d(u)).attr("y2",d(-20));const _=x.append("text").classed("title-y",!0).attr("text-anchor","middle");_.append("tspan").classed("name",!0).text("Subjective Value ("),_.append("tspan").classed("math-var v",!0).text("v"),_.append("tspan").classed("name",!0).text(")"),E.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${s/2})rotate(-90)`),x.append("line").classed("diagonal",!0),E.select(".diagonal").transition().duration(2*c).ease(cubicOut).attr("x1",h(-20)).attr("y1",d(-20)).attr("x2",h(u)).attr("y2",d(u)),v.append("g").classed("content",!0);const T=w.select(".content"),A=T.selectAll(".lines").data(this.values.filter((t=>null!=t.x)),(t=>t.name)),R=A.enter().append("g").classed("lines",!0);R.each(((t,e,r)=>{const n=select(r[e]);n.append("line").classed("line-x above",!0),n.append("line").classed("line-x below",!0),n.append("line").classed("line-v before",!0),n.append("line").classed("line-v after",!0)})),R.filter((t=>t.new)).attr("data-animating-ease-time-1",0).attr("data-animating-ease-time-2",0).each(((t,e,r)=>{const n=select(r[e]);n.select(".line-x.above").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(u)).attr("y2",d(u)),n.select(".line-x.below").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(-20)).attr("y2",d(-20)),n.select(".line-v.before").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(t.v)).attr("y2",d(t.v)),n.select(".line-v.after").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(t.v)).attr("y2",d(t.v))}));const C=R.merge(A),O=C.filter((t=>t.new&&!t.paused));if(!O.empty()){const t=O.attr("data-animating-ease-time-1"),e=O.attr("data-animating-ease-time-2"),r=e=>linear().domain([0,1]).range([t,1])(e),n=e=>linear().range([0,1]).domain([t,1])(e),i=t=>linear().domain([0,1]).range([e,1])(t),a=t=>linear().range([0,1]).domain([e,1])(t),o=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r)),s=t=>r=>linear().domain([t(e),1]).range([0,1])(t(r));O.transition("new-1").duration((()=>Math.floor(c*(1-t)))).ease(r).attr("data-animating-ease-time-1",1).tween("animating",((t,e,r)=>{const i=r[e],a=select(i),s=interpolate$1(void 0!==i.x?i.x:t.x,t.x),l=interpolate$1(void 0!==i.a?i.a:this.getFunction(t.function).a,this.getFunction(t.function).a),c=interpolate$1(void 0!==i.l?i.l:this.getFunction(t.function).l,this.getFunction(t.function).l),p=interpolate$1(d.invert(a.select(".line-x.above").attr("y1")),t.v),f=interpolate$1(d.invert(a.select(".line-x.below").attr("y1")),t.v);return t=>{i.x=s(cubicOut(n(t))),i.a=l(cubicOut(n(t))),i.l=c(cubicOut(n(t))),i.v=CPTMath.xal2v(i.x,i.a,i.l),a.select(".line-x.above").attr("x1",h(i.x)).attr("x2",h(i.x)).attr("y1",d(p(o(cubicIn)(t)))).attr("y2",d(u)),a.select(".line-x.below").attr("x1",h(i.x)).attr("x2",h(i.x)).attr("y1",d(f(o(cubicIn)(t)))).attr("y2",d(-20))}})).transition("new-2").duration((()=>Math.floor(c*(1-e)))).ease(i).attr("data-animating-ease-time-2",1).tween("animating",((t,e,r)=>{const n=r[e],i=select(n),o=interpolate$1(void 0!==n.x?n.x:t.x,t.x),l=interpolate$1(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),c=interpolate$1(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l),p=interpolate$1(h.invert(i.select(".line-v.before").attr("x1")),-20),f=interpolate$1(h.invert(i.select(".line-v.after").attr("x1")),u);return t=>{n.x=o(cubicOut(a(t))),n.a=l(cubicOut(a(t))),n.l=c(cubicOut(a(t))),n.v=CPTMath.xal2v(n.x,n.a,n.l),i.select(".line-v.before").attr("x1",h(p(s(cubicOut)(t)))).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v)),i.select(".line-v.after").attr("x1",h(f(s(cubicOut)(t)))).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v))}})).on("end",((t,e,r)=>{const n=r[e];n.removeAttribute("data-animating-ease-time-1"),n.removeAttribute("data-animating-ease-time-2"),t.new=!1,this.dispatchEvent(new CustomEvent("prospectable-response",{detail:{trial:this.trialCount,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,response:this.response},bubbles:!0}))}))}const k=C.filter((t=>t.new&&t.paused));if(!k.empty()){const t=k.attr("data-animating-ease-time-1"),e=k.attr("data-animating-ease-time-2");k.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).tween("paused",((r,n,i)=>{const a=i[n],o=select(a),s=interpolate$1(void 0!==a.x?a.x:r.x,r.x),l=interpolate$1(void 0!==a.a?a.a:this.getFunction(r.function).a,this.getFunction(r.function).a),c=interpolate$1(void 0!==a.l?a.l:this.getFunction(r.function).l,this.getFunction(r.function).l),p=interpolate$1(u,r.v),f=interpolate$1(-20,r.v),g=interpolate$1(r.x,-20),m=interpolate$1(r.x,u);return r=>{a.x=s(r),a.a=l(r),a.l=c(r),a.v=CPTMath.xal2v(a.x,a.a,a.l),o.select(".line-x.above").attr("x1",h(a.x)).attr("x2",h(a.x)).attr("y1",d(p(cubicIn(t)))).attr("y2",d(u)),o.select(".line-x.below").attr("x1",h(a.x)).attr("x2",h(a.x)).attr("y1",d(f(cubicIn(t)))).attr("y2",d(-20)),o.select(".line-v.before").attr("x1",h(g(cubicOut(e)))).attr("x2",h(a.x)).attr("y1",d(a.v)).attr("y2",d(a.v)),o.select(".line-v.after").attr("x1",h(m(cubicOut(e)))).attr("x2",h(a.x)).attr("y1",d(a.v)).attr("y2",d(a.v))}}))}C.filter((t=>!t.new)).transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).tween("non-animating",((t,e,r)=>{const n=r[e],i=select(n),a=interpolate$1(void 0!==n.x?n.x:t.x,t.x),o=interpolate$1(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),s=interpolate$1(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l);return t=>{n.x=a(t),n.a=o(t),n.l=s(t),n.v=CPTMath.xal2v(n.x,n.a,n.l),i.select(".line-x.above").attr("x1",h(n.x)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(u)),i.select(".line-x.below").attr("x1",h(n.x)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(-20)),i.select(".line-v.before").attr("x1",h(-20)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v)),i.select(".line-v.after").attr("x1",h(u)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v))}})),A.exit().remove();const N=T.selectAll(".curve-p").data(this.functions,(t=>t.name)),P=N.enter().append("path").classed("curve-p",!0).attr("clip-path","url(#clip-cpt-value)").merge(N);(this.firstUpdate||t.has("interactive"))&&(this.interactive?P.attr("tabindex",0).classed("interactive",!0).call(p).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.a;switch(t.key){case"ArrowUp":case"ArrowLeft":r+=t.shiftKey?.01:.05;break;case"ArrowDown":case"ArrowRight":r-=t.shiftKey?.01:.05}r=r<0?0:r>1?1:r,r!==e.a&&(e.a=r,"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}})):P.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),P.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:t.a,t.a),a=interpolate$1(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=range(h(0),h.range()[1]+1,1).map((t=>({x:h.invert(t),v:CPTMath.xal2v(h.invert(t),n.a,n.l)})));return m(e)}})),N.exit().remove();const I=T.selectAll(".curve-n").data(this.functions,(t=>t.name)),M=I.enter().append("path").classed("curve-n",!0).attr("clip-path","url(#clip-cpt-value)").merge(I);(this.firstUpdate||t.has("interactive"))&&(this.interactive?M.attr("tabindex",0).classed("interactive",!0).call(f).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.l;switch(t.key){case"ArrowUp":case"ArrowLeft":r-=t.shiftKey?.01:.05;break;case"ArrowDown":case"ArrowRight":r+=t.shiftKey?.01:.05}r=r<0?0:r>100?100:r,r!==e.l&&(e.l=r,"default"===e.name&&(this.l=e.l),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}})):M.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),M.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:t.a,t.a),a=interpolate$1(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=range(h.range()[0],h(0)+1,1).map((t=>({x:h.invert(t),v:CPTMath.xal2v(h.invert(t),n.a,n.l)})));return m(e)}})),I.exit().remove();const D=T.selectAll(".point").data(this.values.filter((t=>null!=t.x)),(t=>t.name)),L=D.enter().append("g").classed("point",!0);L.append("circle").classed("circle",!0),L.append("text").classed("label",!0);const j=L.merge(D);j.select("text").text((t=>t.label)),j.filter((e=>(this.firstUpdate||t.has("interactive"))&&this.interactive&&!e.trial)).attr("tabindex",0).classed("interactive",!0).call(g).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.x;switch(t.key){case"ArrowUp":case"ArrowRight":r+=t.shiftKey?.2:1;break;case"ArrowDown":case"ArrowLeft":r-=t.shiftKey?.2:1}r=r<-20?-20:r>u?u:r,r!==e.x&&(e.x=r,"default"===e.name&&(this.x=e.x),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:{name:e.name,x:e.x,v:e.v,label:e.label,a:this.getFunction(e.function).a,l:this.getFunction(e.function).l},bubbles:!0}))),t.preventDefault()}})),j.filter((e=>(this.firstUpdate||t.has("interactive"))&&!this.interactive||e.trial)).attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null),j.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(cubicOut).attrTween("transform",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.x?n.x:t.x,t.x),a=interpolate$1(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),o=interpolate$1(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l);return t=>(n.x=i(t),n.a=a(t),n.l=o(t),`translate(\n            ${h(n.x)},\n            ${d(CPTMath.xal2v(n.x,n.a,n.l))}\n          )`)})),D.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("cpt-value",CPTValue);class RiskyOption extends(DecidablesMixinResizeable(ProspectableElement)){static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1`
      ${ProspectableElement.svgFilters}
      <slot></slot>
    `}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver((t=>{t.some((t=>"childList"===t.type||"attributes"===t.type&&t.target!==this))&&this.requestUpdate()})),this.mutationObserver.observe(this,{subtree:!0,childList:!0,attributes:!0})}disconnectedCallback(){this.mutationObserver.disconnect(),super.disconnectedCallback()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=n-(0+0),a=n-(0+0),o=this.querySelectorAll("risky-outcome"),s=o.length?-o[0].p:0,l=pie().startAngle(s*Math.PI-Math.PI).endAngle(s*Math.PI+Math.PI).sortValues(null).value((t=>t.p))(o),c=l.filter((t=>!t.data.interactive)),u=l.filter((t=>t.data.interactive));function h(t){const e=(t+2*Math.PI)%(2*Math.PI);return e>Math.PI?e-2*Math.PI:e<-Math.PI?e+2*Math.PI:e}const d=drag().subject(((t,e)=>{const r=h((e.endAngle+e.startAngle)/2),n=h(Math.atan2(t.y,t.x)+Math.PI/2);return o.forEach((t=>{t.startP=t.p})),{arcAngle:r,startAngle:h(n-r)}})).on("start",((t,e)=>{if(!e.data.interactive)return;select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{if(!e.data.interactive)return;const r=h(Math.atan2(t.y,t.x)+Math.PI/2),n=h(r-t.subject.arcAngle),i=h(t.subject.startAngle>0?n-t.subject.startAngle:t.subject.startAngle-n)/Math.PI,a=e.data.startP+i,s=a>.99?.99:a<.01?.01:a;o.forEach((t=>{t.p=t===e.data?s:t.startP/(1-e.data.startP)*(1-s)})),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0}))})).on("end",((t,e)=>{if(!e.data.interactive)return;select(t.currentTarget).classed("dragging",!1)})),p=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),f=p.enter().append("svg").classed("main",!0),g=f.merge(p).attr("viewBox",`0 0 ${n} ${n}`),m=f.append("g").classed("pie",!0),y=g.select(".pie").attr("transform",`translate(${a/2}, ${i/2})`);m.append("circle").classed("outline",!0),y.select(".outline").attr("r",Math.min(a,i)/2-1);const b=y.selectAll(".arc").data(l),$=b.enter().append("path").call(d).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){const r=e.data.p;let n=e.data.p;switch(t.key){case"ArrowUp":n-=t.shiftKey?.01:.05;break;case"ArrowDown":n+=t.shiftKey?.01:.05}const i=n>.99?.99:n<.01?.01:n;o.forEach((t=>{t.p=t===e.data?i:t.p/(1-r)*(1-i)})),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0})),t.preventDefault()}}));$.merge(b).attr("tabindex",(t=>u.includes(t)&&l.length>1?0:null)).attr("class",(t=>`arc ${t.data.name}`)).classed("interactive",(t=>u.includes(t)&&l.length>1)).attr("d",arc().innerRadius(0).outerRadius(Math.min(a,i)/2-1)),b.exit().remove();const v=y.selectAll(".label.static").data(c),w=y.selectAll(".label.interactive").data(u),x=v.enter().append("text"),E=w.enter().append("foreignObject");E.append("xhtml:decidables-spinner").on("input",((t,e)=>{e.data.x=parseFloat(t.target.value),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0}))})),x.merge(v).attr("class",(t=>`label static ${t.data.name}`)).attr("transform",(t=>{if(1===l.length)return"translate(0, 0)";const e=Math.min(a,i)/2*.6;return`translate(${arc().innerRadius(e).outerRadius(e).centroid(t)})`})).text((t=>`$${t.data.x.toFixed(0)}`));const S=E.merge(w).attr("class",(t=>`label interactive ${t.data.name}`)).attr("transform",(t=>{const e=parseFloat(this.getComputedStyleValue("--decidables-spinner-input-width")),r=parseFloat(this.getComputedStyleValue("--decidables-spinner-font-size")),n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10),o=e*n/-2,s=r*n*1.5/-2;if(1===l.length)return`translate(${o}, ${s})`;const c=Math.min(a,i)/2*.6,u=arc().innerRadius(c).outerRadius(c);return`translate(${u.centroid(t)[0]+o}, ${u.centroid(t)[1]+s})`}));S.select("decidables-spinner").attr("value",(t=>`${t.data.x.toFixed(0)}`)),v.exit().remove(),w.exit().remove()}}customElements.define("risky-option",RiskyOption);class RiskyOutcome extends ProspectableElement{static get properties(){return{x:{attribute:"value",type:Number,reflect:!0},p:{attribute:"probability",type:Number,reflect:!0},name:{attribute:"name",type:String,reflect:!0}}}constructor(){super(),this.x=0,this.p=0,this.name=""}static get styles(){return[i$2`
        :host {
          display: none;
        }
      `]}render(){return x$1``}}customElements.define("risky-outcome",RiskyOutcome);class RiskyChoice extends ProspectableElement{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},xl:{attribute:"loss",type:Number,reflect:!0},xw:{attribute:"win",type:Number,reflect:!0},pw:{attribute:"probability",type:Number,reflect:!0},xs:{attribute:"sure",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.xl=0,this.xw=100,this.pw=.75,this.xs=50}static get styles(){return[super.styles,i$2`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("risky-choice-change",{detail:{xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs},bubbles:!0}))}winChange(t){this.xw=parseFloat(t.detail.x),this.pw=parseFloat(t.detail.p),this.sendEvent()}sureChange(t){this.xs=parseFloat(t.detail.x),this.sendEvent()}render(){return x$1`
      <div class="holder">
        <risky-option class="gamble" ?interactive=${this.interactive} @risky-outcome-change=${this.winChange.bind(this)}>
          ${"choice"===this.state?x$1`
              <risky-outcome probability="${1-this.pw}" value="${this.xl}" name="loss"></risky-outcome>
              <risky-outcome ?interactive=${this.interactive} probability="${this.pw}" value="${this.xw}" name="win"></risky-outcome>`:""}
        </risky-option><span class="query"
         >${"choice"===this.state?"?":"fixation"===this.state?"+":x$1`∙`}</span
        ><risky-option class="sure" ?interactive=${this.interactive} @risky-outcome-change=${this.sureChange.bind(this)}>
          ${"choice"===this.state?x$1`
              <risky-outcome ?interactive=${this.interactive} probability="1" value="${this.xs}" name="sure"></risky-outcome>`:""}
        </risky-option>
      </div>`}}customElements.define("risky-choice",RiskyChoice);class RiskyTask extends ProspectableElement{static get properties(){return{duration:{attribute:"duration",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.duration=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.states=["resetted","iti","stimulus","ended"],this.state="resetted",this.range={},this.range.xl={start:0,stop:0,step:1},this.range.xw={start:10,stop:30,step:1},this.range.pw={start:.1,stop:.9,step:.1},this.range.xs={start:5,stop:15,step:1},this.range.xl.values=range(this.range.xl.start,this.range.xl.stop+.01,this.range.xl.step),this.range.xw.values=range(this.range.xw.start,this.range.xw.stop+.01,this.range.xw.step),this.range.pw.values=range(this.range.pw.start,this.range.pw.stop+.01,this.range.pw.step),this.range.xs.values=range(this.range.xs.start,this.range.xs.stop+.01,this.range.xs.step),this.firstUpdate=!0,this.xl=0,this.xw=0,this.pw=0,this.xs=0,this.trial=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.runner=void 0}static get styles(){return[super.styles,i$2`
        :host {
          display: inline-block;
        }
      `]}render(){return x$1`
      <div class="holder">
        <risky-choice state="${"stimulus"===this.state?"choice":"iti"===this.state?"fixation":"blank"}" probability="${this.pw}" win="${this.xw}" loss="${this.xl}" sure="${this.xs}"></risky-choice>
      </div>`}update(t){super.update(t),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.xl=0,this.xw=0,this.pw=0,this.xs=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0;this.lastTime=e,"resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("risky-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(this.trial+=1,this.state="stimulus",this.startTime=e,this.xl=this.range.xl.values[Math.floor(Math.random()*this.range.xl.values.length)],this.xw=this.range.xw.values[Math.floor(Math.random()*this.range.xw.values.length)],this.pw=this.range.pw.values[Math.floor(Math.random()*this.range.pw.values.length)],this.xs=this.range.xs.values[Math.floor(Math.random()*this.range.xs.values.length)],this.vDiff=this.xw*this.pw+this.xl*(1-this.pw)-this.xs,this.gamblePayoff=Math.random()<this.pw?this.xw:this.xl,this.surePayoff=this.xs,this.better=this.vDiff>0?"gamble":this.vDiff<0?"sure":"equal",this.dispatchEvent(new CustomEvent("risky-trial-start",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,better:this.better,gamblePayoff:this.gamblePayoff,surePayoff:this.surePayoff},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration&&(this.dispatchEvent(new CustomEvent("risky-trial-end",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,better:this.better,gamblePayoff:this.gamblePayoff,surePayoff:this.surePayoff},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.dispatchEvent(new CustomEvent("risky-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e))}}customElements.define("risky-task",RiskyTask);class HTDMath{static adk2v(t,e,r){return t/(1+r*e)}static adv2k(t,e,r){return(t-r)/(r*e)}}class DiscountableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return{a:Set1[0],d:Set1[1],k:Set1[2],v:Set1[3],sooner:Set1[5],later:Set1[7],larger:"#4545d0",smaller:"#f032e6",equal:"#10dbc9",nr:"#cccccc"}}static get lights(){return Object.keys(DiscountableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DiscountableElement.colors[e],"#ffffff")(.5),t)),{})}static get darks(){return Object.keys(DiscountableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DiscountableElement.colors[e],"#000000")(.5),t)),{})}static get styles(){return[super.styles,i$2`
        :host {
          ---color-a: var(--color-a, ${r$3(this.colors.a)});
          ---color-d: var(--color-d, ${r$3(this.colors.d)});
          ---color-k: var(--color-k, ${r$3(this.colors.k)});
          ---color-v: var(--color-v, ${r$3(this.colors.v)});
          ---color-sooner: var(--color-sooner, ${r$3(this.colors.sooner)});
          ---color-later: var(--color-later, ${r$3(this.colors.later)});
          ---color-larger: var(--color-larger, ${r$3(this.colors.larger)});
          ---color-smaller: var(--color-smaller, ${r$3(this.colors.smaller)});
          ---color-equal: var(--color-equal, ${r$3(this.colors.equal)});
          ---color-nr: var(--color-nr, ${r$3(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${r$3(this.lights.a)});
          ---color-d-light: var(--color-d-light, ${r$3(this.lights.d)});
          ---color-k-light: var(--color-k-light, ${r$3(this.lights.k)});
          ---color-v-light: var(--color-v-light, ${r$3(this.lights.v)});
          ---color-sooner-light: var(--color-sooner-light, ${r$3(this.lights.sooner)});
          ---color-later-light: var(--color-later-light, ${r$3(this.lights.later)});
          ---color-larger-light: var(--color-larger-light, ${r$3(this.lights.larger)});
          ---color-smaller-light: var(--color-smaller-light, ${r$3(this.lights.smaller)});
          ---color-equal-light: var(--color-equal-light, ${r$3(this.lights.equal)});
          ---color-nr-light: var(--color-nr-light, ${r$3(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${r$3(this.darks.a)});
          ---color-d-dark: var(--color-d-dark, ${r$3(this.darks.d)});
          ---color-k-dark: var(--color-k-dark, ${r$3(this.darks.k)});
          ---color-v-dark: var(--color-v-dark, ${r$3(this.darks.v)});
          ---color-sooner-dark: var(--color-sooner-dark, ${r$3(this.darks.sooner)});
          ---color-later-dark: var(--color-later-dark, ${r$3(this.darks.later)});
          ---color-larger-dark: var(--color-larger-dark, ${r$3(this.darks.larger)});
          ---color-smaller-dark: var(--color-smaller-dark, ${r$3(this.darks.smaller)});
          ---color-equal-dark: var(--color-equal-dark, ${r$3(this.darks.equal)});
          ---color-nr-dark: var(--color-nr-dark, ${r$3(this.darks.nr)});
        }
      `]}}class HTDCurves extends(DecidablesMixinResizeable(DiscountableElement)){static get properties(){return{a:{attribute:"amount",type:Number,reflect:!0},d:{attribute:"delay",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},k:{attribute:"k",type:Number,reflect:!0},v:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={value:{min:0,max:80,step:1,round:Math.round},time:{min:0,max:100,step:1,round:Math.round},discount:{min:0,max:100,step:.001,round:t=>+t.toFixed(3)}},this.a=null,this.d=null,this.label="",this.k=.1,this.options=[{name:"default",a:this.a,d:this.d,label:this.label}],this.as=null,this.ds=null,this.al=null,this.dl=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.options[0].a=this.a,this.options[0].d=this.d,this.options[0].label=this.label,this.options.forEach((t=>{t.v=HTDMath.adk2v(t.a,t.d,this.k)})),this.v=this.options[0].v}trial(t,e,r,n,i,a){this.trialCount&&this.removeOption(`${this.trialCount}-s`),this.trialCount&&this.removeOption(`${this.trialCount}-l`),this.as=t,this.ds=e,this.al=r,this.dl=n,this.trialCount=i,this.response=a,this.setOption(this.as,this.ds,`${this.trialCount}-s`,"s",!0),this.setOption(this.al,this.dl,`${this.trialCount}-l`,"l",!0)}pauseTrial(){const t=select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum((t=>(t.paused=!0,t)))}resumeTrial(){select(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum((t=>(t.paused=!1,t))),this.requestUpdate()}clearOptions(){this.options.splice(1),this.requestUpdate()}removeOption(t){this.options=this.options.filter((e=>e.name!==t)),this.requestUpdate()}getOption(t="default"){return this.options.find((e=>e.name===t))}setOption(t,e,r="default",n="",i=!1){"default"===r&&(this.a=t,this.d=e,this.label=n);const a=this.options.find((t=>t.name===r));void 0===a?this.options.push({name:r,a:t,d:e,label:n,trial:i,new:i}):(a.a=t,a.d=e,a.label=n),this.requestUpdate()}static get styles(){return[super.styles,i$2`
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
      `]}render(){return x$1``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const a=2*this.rem,o=3*this.rem,s=3*this.rem,l=i-(a+o),c=n-(s+2*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=linear().domain([this.scale.time.min,this.scale.time.max]).range([0,c]),d=linear().domain([this.scale.value.min,this.scale.value.max]).range([l,0]),p=line().x((t=>h(t.d))).y((t=>d(t.v))),f=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),g=f.enter().append("svg").classed("main",!0);g.html(DiscountableElement.svgDefs);const m=g.merge(f).attr("viewBox",`0 0 ${n} ${i}`),y=g.append("g").classed("plot",!0),b=m.select(".plot").attr("transform",`translate(${s}, ${a})`);y.append("clipPath").attr("id","clip-htd-curves").append("rect"),b.select("clipPath rect").attr("height",l+1).attr("width",c+1);const $=y.append("g").classed("underlayer",!0),v=b.select(".underlayer");$.append("rect").classed("background",!0),v.select(".background").attr("height",l).attr("width",c),$.append("g").classed("axis-x",!0);v.select(".axis-x").attr("transform",`translate(0, ${d(0)})`).transition().duration(2*u).ease(cubicOut).call(axisBottom(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const w=$.append("text").classed("title-x",!0).attr("text-anchor","middle");w.append("tspan").classed("name",!0).text("Delay ("),w.append("tspan").classed("math-var d",!0).text("D"),w.append("tspan").classed("name",!0).text(")"),v.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`),$.append("g").classed("axis-y",!0);v.select(".axis-y").transition().duration(2*u).ease(cubicOut).call(axisLeft(d)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const x=$.append("text").classed("title-y",!0).attr("text-anchor","middle");x.append("tspan").classed("name",!0).text("Value ("),x.append("tspan").classed("math-var v",!0).text("V"),x.append("tspan").classed("name",!0).text(")"),v.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),y.append("g").classed("content",!0);const E=b.select(".content").selectAll(".option").data(this.options.filter((t=>null!==t.a&&null!==t.d)),(t=>t.name)),S=E.enter().append("g").classed("option",!0);S.append("path").classed("curve",!0).attr("clip-path","url(#clip-htd-curves)").attr("d",(t=>{const e=range(h(t.d),h(0),-1).map((e=>({d:h.invert(e),v:HTDMath.adk2v(t.a,t.d-h.invert(e),this.k)})));return p(e)})).attr("stroke-dasharray",((t,e,r)=>{if(t.trial){return`0,${r[e].getTotalLength()}`}return"none"})),S.append("line").classed("bar",!0).attr("x1",(t=>h(t.d))).attr("x2",(t=>h(t.d))).attr("y1",d(0)).attr("y2",(t=>d(t.a))).attr("stroke-dasharray",((t,e,r)=>{if(t.trial){return`0,${r[e].getTotalLength()}`}return"none"}));const _=S.append("g").classed("point",!0).attr("transform",(t=>`translate(${h(t.d)}, ${d(t.a)})`)).attr("opacity",(t=>t.trial?0:1));_.append("circle").classed("mark",!0),_.append("text").classed("label",!0);const T=S.merge(E);T.filter(((t,e,r)=>this.interactive&&!r[e].classList.contains("interactive"))).select(".curve").classed("interactive",!0).attr("tabindex",0).call(drag().subject((t=>({x:t.x,y:t.y}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=e.d-h.invert(t.x),n=r<0?0:r>e.d?e.d:r,i=d.invert(t.y),a=i<=0?.001:i>e.a?e.a:i,o=HTDMath.adv2k(e.a,n,a);this.k=o<this.scale.discount.min?this.scale.discount.min:o>this.scale.discount.max?this.scale.discount.max:this.scale.discount.round(o),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)}))).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.k;switch(t.key){case"ArrowUp":case"ArrowLeft":r*=t.shiftKey?.95:.85;break;case"ArrowDown":case"ArrowRight":r*=t.shiftKey?1.05:1.15}r=r<this.scale.discount.min?this.scale.discount.min:r>this.scale.discount.max?this.scale.discount.max:this.scale.discount.round(r),r!==this.k&&(this.k=r,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}})),T.filter(((t,e,r)=>this.interactive&&!t.trial&&!r[e].classList.contains("interactive"))).select(".bar").classed("interactive",!0).attr("tabindex",0).call(drag().subject(((t,e)=>({x:h(e.d),y:d(e.a)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=h.invert(t.x);e.d=r<this.scale.time.min?this.scale.time.min:r>this.scale.time.max?this.scale.time.max:this.scale.time.round(r),"default"===e.name&&(this.d=e.d),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)}))).on("keydown",((t,e)=>{if(["ArrowLeft","ArrowRight"].includes(t.key)){let r=e.d;switch(t.key){case"ArrowRight":r+=t.shiftKey?1:5;break;case"ArrowLeft":r-=t.shiftKey?1:5}r=r<this.scale.time.min?this.scale.time.min:r>this.scale.time.max?this.scale.time.max:r,r!==e.d&&(e.d=r,"default"===e.name&&(this.d=e.d),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}})),T.filter(((t,e,r)=>this.interactive&&!t.trial&&!r[e].classList.contains("interactive"))).select(".point").classed("interactive",!0).attr("tabindex",0).call(drag().subject(((t,e)=>({x:h(e.d),y:d(e.a)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=d.invert(t.y);e.a=r<this.scale.value.min?this.scale.value.min:r>this.scale.value.max?this.scale.value.max:this.scale.value.round(r),"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)}))).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let r=e.a;switch(t.key){case"ArrowUp":r+=t.shiftKey?1:5;break;case"ArrowDown":r-=t.shiftKey?1:5}r=r<this.scale.value.min?this.scale.value.min:r>this.scale.value.max?this.scale.value.max:r,r!==e.a&&(e.a=r,"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}})),T.filter(((t,e,r)=>!this.interactive&&r[e].classList.contains("interactive"))).select(".curve").classed("interactive",!1).attr("tabindex",null).on("drag",null).on("keydown",null),T.filter(((t,e,r)=>(!this.interactive||t.trial)&&r[e].classList.contains("interactive"))).select(".bar").classed("interactive",!1).attr("tabindex",null).on("drag",null).on("keydown",null),T.filter(((t,e,r)=>(!this.interactive||t.trial)&&r[e].classList.contains("interactive"))).select(".point").classed("interactive",!1).attr("tabindex",null).on("drag",null).on("keydown",null),T.filter((t=>t.new)).select(".curve").transition().duration(u).delay(u+u/10).ease(linear$1).attrTween("stroke-dasharray",((t,e,r)=>{const n=r[e].getTotalLength();return interpolate$1(`0,${n}`,`${n},0`)})).on("end",(t=>{t.new=!1,this.dispatchEvent(new CustomEvent("discountable-response",{detail:{trial:this.trialCount,as:this.as,ds:this.ds,al:this.al,dl:this.dl,response:this.response},bubbles:!0}))})),T.filter((t=>t.new)).select(".bar").transition().duration(u).ease(linear$1).attrTween("stroke-dasharray",((t,e,r)=>{const n=r[e].getTotalLength();return interpolate$1(`0,${n}`,`${n},${n}`)})),T.filter((t=>t.new)).select(".point").transition().duration(u/10).delay(u).ease(linear$1).attrTween("opacity",(()=>interpolate$1(0,1))),E.select(".curve").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:t.a,t.a),a=interpolate$1(void 0!==n.d?n.d:t.d,t.d);return t=>{n.a=i(t),n.d=a(t);const e=range(h(n.d),h(0),-1).map((t=>({d:h.invert(t),v:HTDMath.adk2v(n.a,n.d-h.invert(t),this.k)})));return p(e)}})),E.select(".bar").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(cubicOut).attrTween("x1",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:t.d,t.d);return t=>(n.d=i(t),`${h(n.d)}`)})).attrTween("x2",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:t.d,t.d);return t=>(n.d=i(t),`${h(n.d)}`)})).attrTween("y2",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.a?n.a:t.a,t.a);return t=>(n.a=i(t),`${d(n.a)}`)})),E.select(".point").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(cubicOut).attrTween("transform",((t,e,r)=>{const n=r[e],i=interpolate$1(void 0!==n.d?n.d:t.d,t.d),a=interpolate$1(void 0!==n.a?n.a:t.a,t.a);return t=>(n.d=i(t),n.a=a(t),`translate(${h(n.d)}, ${d(n.a)})`)})),T.select(".point .label").text((t=>t.label)),E.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("htd-curves",HTDCurves);class ITCOption extends DiscountableElement{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},a:{attribute:"amount",type:Number,reflect:!0},d:{attribute:"delay",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.a=0,this.d=0}static get styles(){return[super.styles,i$2`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("itc-option-change",{detail:{a:this.a,d:this.d},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.sendEvent()}dInput(t){this.d=parseFloat(t.target.value),this.sendEvent()}render(){return x$1`
      <div class="holder">
        ${"choice"===this.state?this.interactive?x$1`<decidables-spinner
              class="amount interactive"
              ?disabled=${!this.interactive}
              step="1"
              .value="${this.a}"
              @input=${this.aInput.bind(this)}
              ></decidables-spinner>`:x$1`<div
              class="amount static"
              >$${this.a}</div>`:""}
        ${"choice"===this.state?x$1`<div class="in">in</div>`:""}
        ${"choice"===this.state?this.interactive?x$1`<decidables-spinner
              class="delay interactive"
              ?disabled=${!this.interactive}
              min="0" 
              step="1"
              .value="${this.d}"
              @input=${this.dInput.bind(this)}
              ></decidables-spinner>`:x$1`<div
              class="delay static"
              >${this.d} days</div>`:""}
      </div>
    `}}customElements.define("itc-option",ITCOption);class ITCChoice extends DiscountableElement{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},as:{attribute:"amount-ss",type:Number,reflect:!0},ds:{attribute:"delay-ss",type:Number,reflect:!0},al:{attribute:"amount-ll",type:Number,reflect:!0},dl:{attribute:"delay-ll",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.as=10,this.ds=5,this.al=40,this.dl=30}static get styles(){return[super.styles,i$2`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("itc-choice-change",{detail:{as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0}))}ssChange(t){this.as=parseFloat(t.detail.a),this.ds=parseFloat(t.detail.d),this.sendEvent()}llChange(t){this.al=parseFloat(t.detail.a),this.dl=parseFloat(t.detail.d),this.sendEvent()}render(){return x$1`
      <div class="holder">
        <itc-option
          class="ss"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.as}"
          delay="${this.ds}"
          @itc-option-change=${this.ssChange.bind(this)}>
        </itc-option><span class="query"
         >${"choice"===this.state?"?":"fixation"===this.state?"+":x$1`∙`}</span
        ><itc-option
          class="ll"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.al}"
          delay="${this.dl}"
          @itc-option-change=${this.llChange.bind(this)}>
        </itc-option>
      </div>`}}customElements.define("itc-choice",ITCChoice);class ITCTask extends DiscountableElement{static get properties(){return{duration:{attribute:"duration",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.duration=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.states=["resetted","iti","stimulus","ended"],this.state="resetted",this.range={},this.range.as={start:5,stop:20,step:5},this.range.ds={start:5,stop:20,step:5},this.range.al={start:40,stop:80,step:5},this.range.dl={start:40,stop:80,step:5},this.range.as.values=range(this.range.as.start,this.range.as.stop+.01,this.range.as.step),this.range.ds.values=range(this.range.ds.start,this.range.ds.stop+.01,this.range.ds.step),this.range.al.values=range(this.range.al.start,this.range.al.stop+.01,this.range.al.step),this.range.dl.values=range(this.range.dl.start,this.range.dl.stop+.01,this.range.dl.step),this.firstUpdate=!0,this.as=0,this.ds=0,this.al=0,this.dl=0,this.trial=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.runner=void 0}static get styles(){return[super.styles,i$2`
        :host {
          display: inline-block;
        }
      `]}render(){return x$1`
      <div class="holder">
        <itc-choice 
          state="${"stimulus"===this.state?"choice":"iti"===this.state?"fixation":"blank"}"
          amount-ss="${this.as}"
          delay-ss="${this.ds}"
          amount-ll="${this.al}"
          delay-ll="${this.dl}">
        </itc-choice>
      </div>`}update(t){super.update(t),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.as=0,this.ds=0,this.al=0,this.dl=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0;this.lastTime=e,"resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("itc-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(this.trial+=1,this.state="stimulus",this.startTime=e,this.as=this.range.as.values[Math.floor(Math.random()*this.range.as.values.length)],this.ds=this.range.ds.values[Math.floor(Math.random()*this.range.ds.values.length)],this.al=this.range.al.values[Math.floor(Math.random()*this.range.al.values.length)],this.dl=this.range.dl.values[Math.floor(Math.random()*this.range.dl.values.length)],this.dispatchEvent(new CustomEvent("itc-trial-start",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration&&(this.dispatchEvent(new CustomEvent("itc-trial-end",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.dispatchEvent(new CustomEvent("itc-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e))}}customElements.define("itc-task",ITCTask);
//# sourceMappingURL=page.js.map