var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},check=function(t){return t&&t.Math===Math&&t},globalThis_1=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||check("object"==typeof globalThis_1&&globalThis_1)||function(){return this}()||Function("return this")(),globalThis$H=globalThis_1,path$1=globalThis$H,fails$t=function(t){try{return!!t()}catch(t){return!0}},fails$s=fails$t,functionBindNative=!fails$s(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),NATIVE_BIND$3=functionBindNative,FunctionPrototype$2=Function.prototype,call$v=FunctionPrototype$2.call,uncurryThisWithBind=NATIVE_BIND$3&&FunctionPrototype$2.bind.bind(call$v,call$v),functionUncurryThis=NATIVE_BIND$3?uncurryThisWithBind:function(t){return function(){return call$v.apply(t,arguments)}},isNullOrUndefined$5=function(t){return null==t},isNullOrUndefined$4=isNullOrUndefined$5,$TypeError$o=TypeError,requireObjectCoercible$9=function(t){if(isNullOrUndefined$4(t))throw new $TypeError$o("Can't call method on "+t);return t},requireObjectCoercible$8=requireObjectCoercible$9,$Object$4=Object,toObject$5=function(t){return $Object$4(requireObjectCoercible$8(t))},uncurryThis$D=functionUncurryThis,toObject$4=toObject$5,hasOwnProperty=uncurryThis$D({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(t,e){return hasOwnProperty(toObject$4(t),e)},wellKnownSymbolWrapped={},sharedStore={exports:{}},isPure=!1,globalThis$G=globalThis_1,defineProperty$7=Object.defineProperty,defineGlobalProperty$3=function(t,e){try{defineProperty$7(globalThis$G,t,{value:e,configurable:!0,writable:!0})}catch(r){globalThis$G[t]=e}return e},globalThis$F=globalThis_1,defineGlobalProperty$2=defineGlobalProperty$3,SHARED="__core-js_shared__",store$3=sharedStore.exports=globalThis$F[SHARED]||defineGlobalProperty$2(SHARED,{});(store$3.versions||(store$3.versions=[])).push({version:"3.47.0",mode:"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",source:"https://github.com/zloirock/core-js"});var match,version,sharedStoreExports=sharedStore.exports,store$2=sharedStoreExports,shared$4=function(t,e){return store$2[t]||(store$2[t]=e||{})},uncurryThis$C=functionUncurryThis,id$1=0,postfix=Math.random(),toString$b=uncurryThis$C(1.1.toString),uid$4=function(t){return"Symbol("+(void 0===t?"":t)+")_"+toString$b(++id$1+postfix,36)},globalThis$E=globalThis_1,navigator$1=globalThis$E.navigator,userAgent$3=navigator$1&&navigator$1.userAgent,environmentUserAgent=userAgent$3?String(userAgent$3):"",globalThis$D=globalThis_1,userAgent$2=environmentUserAgent,process$1=globalThis$D.process,Deno$1=globalThis$D.Deno,versions=process$1&&process$1.versions||Deno$1&&Deno$1.version,v8=versions&&versions.v8;v8&&(version=(match=v8.split("."))[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&userAgent$2&&(!(match=userAgent$2.match(/Edge\/(\d+)/))||match[1]>=74)&&(match=userAgent$2.match(/Chrome\/(\d+)/))&&(version=+match[1]);var environmentV8Version=version,V8_VERSION$1=environmentV8Version,fails$r=fails$t,globalThis$C=globalThis_1,$String$6=globalThis$C.String,symbolConstructorDetection=!!Object.getOwnPropertySymbols&&!fails$r(function(){var t=Symbol("symbol detection");return!$String$6(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V8_VERSION$1&&V8_VERSION$1<41}),NATIVE_SYMBOL$1=symbolConstructorDetection,useSymbolAsUid=NATIVE_SYMBOL$1&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,globalThis$B=globalThis_1,shared$3=shared$4,hasOwn$i=hasOwnProperty_1,uid$3=uid$4,NATIVE_SYMBOL=symbolConstructorDetection,USE_SYMBOL_AS_UID$1=useSymbolAsUid,Symbol$3=globalThis$B.Symbol,WellKnownSymbolsStore=shared$3("wks"),createWellKnownSymbol=USE_SYMBOL_AS_UID$1?Symbol$3.for||Symbol$3:Symbol$3&&Symbol$3.withoutSetter||uid$3,wellKnownSymbol$l=function(t){return hasOwn$i(WellKnownSymbolsStore,t)||(WellKnownSymbolsStore[t]=NATIVE_SYMBOL&&hasOwn$i(Symbol$3,t)?Symbol$3[t]:createWellKnownSymbol("Symbol."+t)),WellKnownSymbolsStore[t]},wellKnownSymbol$k=wellKnownSymbol$l;wellKnownSymbolWrapped.f=wellKnownSymbol$k;var objectDefineProperty={},fails$q=fails$t,descriptors=!fails$q(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),documentAll="object"==typeof document&&document.all,isCallable$l=void 0===documentAll&&void 0!==documentAll?function(t){return"function"==typeof t||t===documentAll}:function(t){return"function"==typeof t},isCallable$k=isCallable$l,isObject$e=function(t){return"object"==typeof t?null!==t:isCallable$k(t)},globalThis$A=globalThis_1,isObject$d=isObject$e,document$1=globalThis$A.document,EXISTS$1=isObject$d(document$1)&&isObject$d(document$1.createElement),documentCreateElement$1=function(t){return EXISTS$1?document$1.createElement(t):{}},DESCRIPTORS$h=descriptors,fails$p=fails$t,createElement$1=documentCreateElement$1,ie8DomDefine=!DESCRIPTORS$h&&!fails$p(function(){return 7!==Object.defineProperty(createElement$1("div"),"a",{get:function(){return 7}}).a}),DESCRIPTORS$g=descriptors,fails$o=fails$t,v8PrototypeDefineBug=DESCRIPTORS$g&&fails$o(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),isObject$c=isObject$e,$String$5=String,$TypeError$n=TypeError,anObject$s=function(t){if(isObject$c(t))return t;throw new $TypeError$n($String$5(t)+" is not an object")},NATIVE_BIND$2=functionBindNative,call$u=Function.prototype.call,functionCall=NATIVE_BIND$2?call$u.bind(call$u):function(){return call$u.apply(call$u,arguments)},globalThis$z=globalThis_1,isCallable$j=isCallable$l,aFunction=function(t){return isCallable$j(t)?t:void 0},getBuiltIn$j=function(t,e){return arguments.length<2?aFunction(globalThis$z[t]):globalThis$z[t]&&globalThis$z[t][e]},uncurryThis$B=functionUncurryThis,objectIsPrototypeOf=uncurryThis$B({}.isPrototypeOf),getBuiltIn$i=getBuiltIn$j,isCallable$i=isCallable$l,isPrototypeOf$5=objectIsPrototypeOf,USE_SYMBOL_AS_UID=useSymbolAsUid,$Object$3=Object,isSymbol$3=USE_SYMBOL_AS_UID?function(t){return"symbol"==typeof t}:function(t){var e=getBuiltIn$i("Symbol");return isCallable$i(e)&&isPrototypeOf$5(e.prototype,$Object$3(t))},$String$4=String,tryToString$3=function(t){try{return $String$4(t)}catch(t){return"Object"}},isCallable$h=isCallable$l,tryToString$2=tryToString$3,$TypeError$m=TypeError,aCallable$n=function(t){if(isCallable$h(t))return t;throw new $TypeError$m(tryToString$2(t)+" is not a function")},aCallable$m=aCallable$n,isNullOrUndefined$3=isNullOrUndefined$5,getMethod$b=function(t,e){var r=t[e];return isNullOrUndefined$3(r)?void 0:aCallable$m(r)},call$t=functionCall,isCallable$g=isCallable$l,isObject$b=isObject$e,$TypeError$l=TypeError,ordinaryToPrimitive$1=function(t,e){var r,n;if("string"===e&&isCallable$g(r=t.toString)&&!isObject$b(n=call$t(r,t)))return n;if(isCallable$g(r=t.valueOf)&&!isObject$b(n=call$t(r,t)))return n;if("string"!==e&&isCallable$g(r=t.toString)&&!isObject$b(n=call$t(r,t)))return n;throw new $TypeError$l("Can't convert object to primitive value")},call$s=functionCall,isObject$a=isObject$e,isSymbol$2=isSymbol$3,getMethod$a=getMethod$b,ordinaryToPrimitive=ordinaryToPrimitive$1,wellKnownSymbol$j=wellKnownSymbol$l,$TypeError$k=TypeError,TO_PRIMITIVE=wellKnownSymbol$j("toPrimitive"),toPrimitive$2=function(t,e){if(!isObject$a(t)||isSymbol$2(t))return t;var r,n=getMethod$a(t,TO_PRIMITIVE);if(n){if(void 0===e&&(e="default"),r=call$s(n,t,e),!isObject$a(r)||isSymbol$2(r))return r;throw new $TypeError$k("Can't convert object to primitive value")}return void 0===e&&(e="number"),ordinaryToPrimitive(t,e)},toPrimitive$1=toPrimitive$2,isSymbol$1=isSymbol$3,toPropertyKey$3=function(t){var e=toPrimitive$1(t,"string");return isSymbol$1(e)?e:e+""},DESCRIPTORS$f=descriptors,IE8_DOM_DEFINE$1=ie8DomDefine,V8_PROTOTYPE_DEFINE_BUG$1=v8PrototypeDefineBug,anObject$r=anObject$s,toPropertyKey$2=toPropertyKey$3,$TypeError$j=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable";objectDefineProperty.f=DESCRIPTORS$f?V8_PROTOTYPE_DEFINE_BUG$1?function(t,e,r){if(anObject$r(t),e=toPropertyKey$2(e),anObject$r(r),"function"==typeof t&&"prototype"===e&&"value"in r&&WRITABLE in r&&!r[WRITABLE]){var n=$getOwnPropertyDescriptor$1(t,e);n&&n[WRITABLE]&&(t[e]=r.value,r={configurable:CONFIGURABLE$1 in r?r[CONFIGURABLE$1]:n[CONFIGURABLE$1],enumerable:ENUMERABLE in r?r[ENUMERABLE]:n[ENUMERABLE],writable:!1})}return $defineProperty(t,e,r)}:$defineProperty:function(t,e,r){if(anObject$r(t),e=toPropertyKey$2(e),anObject$r(r),IE8_DOM_DEFINE$1)try{return $defineProperty(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new $TypeError$j("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var path=path$1,hasOwn$h=hasOwnProperty_1,wrappedWellKnownSymbolModule=wellKnownSymbolWrapped,defineProperty$6=objectDefineProperty.f,wellKnownSymbolDefine=function(t){var e=path.Symbol||(path.Symbol={});hasOwn$h(e,t)||defineProperty$6(e,t,{value:wrappedWellKnownSymbolModule.f(t)})},objectGetOwnPropertyDescriptor={},objectPropertyIsEnumerable={},$propertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor$4=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$4&&!$propertyIsEnumerable.call({1:2},1);objectPropertyIsEnumerable.f=NASHORN_BUG?function(t){var e=getOwnPropertyDescriptor$4(this,t);return!!e&&e.enumerable}:$propertyIsEnumerable;var createPropertyDescriptor$6=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},uncurryThis$A=functionUncurryThis,toString$a=uncurryThis$A({}.toString),stringSlice$3=uncurryThis$A("".slice),classofRaw$2=function(t){return stringSlice$3(toString$a(t),8,-1)},uncurryThis$z=functionUncurryThis,fails$n=fails$t,classof$d=classofRaw$2,$Object$2=Object,split=uncurryThis$z("".split),indexedObject=fails$n(function(){return!$Object$2("z").propertyIsEnumerable(0)})?function(t){return"String"===classof$d(t)?split(t,""):$Object$2(t)}:$Object$2,IndexedObject=indexedObject,requireObjectCoercible$7=requireObjectCoercible$9,toIndexedObject$8=function(t){return IndexedObject(requireObjectCoercible$7(t))},DESCRIPTORS$e=descriptors,call$r=functionCall,propertyIsEnumerableModule=objectPropertyIsEnumerable,createPropertyDescriptor$5=createPropertyDescriptor$6,toIndexedObject$7=toIndexedObject$8,toPropertyKey$1=toPropertyKey$3,hasOwn$g=hasOwnProperty_1,IE8_DOM_DEFINE=ie8DomDefine,$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;objectGetOwnPropertyDescriptor.f=DESCRIPTORS$e?$getOwnPropertyDescriptor:function(t,e){if(t=toIndexedObject$7(t),e=toPropertyKey$1(e),IE8_DOM_DEFINE)try{return $getOwnPropertyDescriptor(t,e)}catch(t){}if(hasOwn$g(t,e))return createPropertyDescriptor$5(!call$r(propertyIsEnumerableModule.f,t,e),t[e])};var globalThis$y=globalThis_1,defineWellKnownSymbol$1=wellKnownSymbolDefine,defineProperty$5=objectDefineProperty.f,getOwnPropertyDescriptor$3=objectGetOwnPropertyDescriptor.f,Symbol$2=globalThis$y.Symbol;if(defineWellKnownSymbol$1("asyncDispose"),Symbol$2){var descriptor$2=getOwnPropertyDescriptor$3(Symbol$2,"asyncDispose");descriptor$2.enumerable&&descriptor$2.configurable&&descriptor$2.writable&&defineProperty$5(Symbol$2,"asyncDispose",{value:descriptor$2.value,enumerable:!1,configurable:!1,writable:!1})}var globalThis$x=globalThis_1,defineWellKnownSymbol=wellKnownSymbolDefine,defineProperty$4=objectDefineProperty.f,getOwnPropertyDescriptor$2=objectGetOwnPropertyDescriptor.f,Symbol$1=globalThis$x.Symbol;if(defineWellKnownSymbol("dispose"),Symbol$1){var descriptor$1=getOwnPropertyDescriptor$2(Symbol$1,"dispose");descriptor$1.enumerable&&descriptor$1.configurable&&descriptor$1.writable&&defineProperty$4(Symbol$1,"dispose",{value:descriptor$1.value,enumerable:!1,configurable:!1,writable:!1})}var DESCRIPTORS$d=descriptors,definePropertyModule$4=objectDefineProperty,createPropertyDescriptor$4=createPropertyDescriptor$6,createNonEnumerableProperty$7=DESCRIPTORS$d?function(t,e,r){return definePropertyModule$4.f(t,e,createPropertyDescriptor$4(1,r))}:function(t,e,r){return t[e]=r,t},makeBuiltIn$3={exports:{}},DESCRIPTORS$c=descriptors,hasOwn$f=hasOwnProperty_1,FunctionPrototype$1=Function.prototype,getDescriptor=DESCRIPTORS$c&&Object.getOwnPropertyDescriptor,EXISTS=hasOwn$f(FunctionPrototype$1,"name"),CONFIGURABLE=EXISTS&&(!DESCRIPTORS$c||DESCRIPTORS$c&&getDescriptor(FunctionPrototype$1,"name").configurable),functionName={CONFIGURABLE:CONFIGURABLE},uncurryThis$y=functionUncurryThis,isCallable$f=isCallable$l,store$1=sharedStoreExports,functionToString=uncurryThis$y(Function.toString);isCallable$f(store$1.inspectSource)||(store$1.inspectSource=function(t){return functionToString(t)});var set$4,get$3,has$7,inspectSource$2=store$1.inspectSource,globalThis$w=globalThis_1,isCallable$e=isCallable$l,WeakMap$2=globalThis$w.WeakMap,weakMapBasicDetection=isCallable$e(WeakMap$2)&&/native code/.test(String(WeakMap$2)),shared$2=shared$4,uid$2=uid$4,keys$1=shared$2("keys"),sharedKey$3=function(t){return keys$1[t]||(keys$1[t]=uid$2(t))},hiddenKeys$4={},NATIVE_WEAK_MAP=weakMapBasicDetection,globalThis$v=globalThis_1,isObject$9=isObject$e,createNonEnumerableProperty$6=createNonEnumerableProperty$7,hasOwn$e=hasOwnProperty_1,shared$1=sharedStoreExports,sharedKey$2=sharedKey$3,hiddenKeys$3=hiddenKeys$4,OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$5=globalThis$v.TypeError,WeakMap$1=globalThis$v.WeakMap,enforce=function(t){return has$7(t)?get$3(t):set$4(t,{})},getterFor=function(t){return function(e){var r;if(!isObject$9(e)||(r=get$3(e)).type!==t)throw new TypeError$5("Incompatible receiver, "+t+" required");return r}};if(NATIVE_WEAK_MAP||shared$1.state){var store=shared$1.state||(shared$1.state=new WeakMap$1);store.get=store.get,store.has=store.has,store.set=store.set,set$4=function(t,e){if(store.has(t))throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);return e.facade=t,store.set(t,e),e},get$3=function(t){return store.get(t)||{}},has$7=function(t){return store.has(t)}}else{var STATE=sharedKey$2("state");hiddenKeys$3[STATE]=!0,set$4=function(t,e){if(hasOwn$e(t,STATE))throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);return e.facade=t,createNonEnumerableProperty$6(t,STATE,e),e},get$3=function(t){return hasOwn$e(t,STATE)?t[STATE]:{}},has$7=function(t){return hasOwn$e(t,STATE)}}var internalState={set:set$4,get:get$3,has:has$7,enforce:enforce,getterFor:getterFor},uncurryThis$x=functionUncurryThis,fails$m=fails$t,isCallable$d=isCallable$l,hasOwn$d=hasOwnProperty_1,DESCRIPTORS$b=descriptors,CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,inspectSource$1=inspectSource$2,InternalStateModule$5=internalState,enforceInternalState$1=InternalStateModule$5.enforce,getInternalState$2=InternalStateModule$5.get,$String$3=String,defineProperty$3=Object.defineProperty,stringSlice$2=uncurryThis$x("".slice),replace$1=uncurryThis$x("".replace),join$2=uncurryThis$x([].join),CONFIGURABLE_LENGTH=DESCRIPTORS$b&&!fails$m(function(){return 8!==defineProperty$3(function(){},"length",{value:8}).length}),TEMPLATE=String(String).split("String"),makeBuiltIn$2=makeBuiltIn$3.exports=function(t,e,r){"Symbol("===stringSlice$2($String$3(e),0,7)&&(e="["+replace$1($String$3(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!hasOwn$d(t,"name")||CONFIGURABLE_FUNCTION_NAME&&t.name!==e)&&(DESCRIPTORS$b?defineProperty$3(t,"name",{value:e,configurable:!0}):t.name=e),CONFIGURABLE_LENGTH&&r&&hasOwn$d(r,"arity")&&t.length!==r.arity&&defineProperty$3(t,"length",{value:r.arity});try{r&&hasOwn$d(r,"constructor")&&r.constructor?DESCRIPTORS$b&&defineProperty$3(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=enforceInternalState$1(t);return hasOwn$d(n,"source")||(n.source=join$2(TEMPLATE,"string"==typeof e?e:"")),t};Function.prototype.toString=makeBuiltIn$2(function(){return isCallable$d(this)&&getInternalState$2(this).source||inspectSource$1(this)},"toString");var makeBuiltInExports=makeBuiltIn$3.exports,isCallable$c=isCallable$l,definePropertyModule$3=objectDefineProperty,makeBuiltIn$1=makeBuiltInExports,defineGlobalProperty$1=defineGlobalProperty$3,defineBuiltIn$b=function(t,e,r,n){n||(n={});var a=n.enumerable,i=void 0!==n.name?n.name:e;if(isCallable$c(r)&&makeBuiltIn$1(r,i,n),n.global)a?t[e]=r:defineGlobalProperty$1(e,r);else{try{n.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=r:definePropertyModule$3.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},objectGetOwnPropertyNames={},ceil$1=Math.ceil,floor=Math.floor,mathTrunc=Math.trunc||function(t){var e=+t;return(e>0?floor:ceil$1)(e)},trunc=mathTrunc,toIntegerOrInfinity$9=function(t){var e=+t;return e!=e||0===e?0:trunc(e)},toIntegerOrInfinity$8=toIntegerOrInfinity$9,max$2=Math.max,min$4=Math.min,toAbsoluteIndex$2=function(t,e){var r=toIntegerOrInfinity$8(t);return r<0?max$2(r+e,0):min$4(r,e)},toIntegerOrInfinity$7=toIntegerOrInfinity$9,min$3=Math.min,toLength$3=function(t){var e=toIntegerOrInfinity$7(t);return e>0?min$3(e,9007199254740991):0},toLength$2=toLength$3,lengthOfArrayLike$8=function(t){return toLength$2(t.length)},toIndexedObject$6=toIndexedObject$8,toAbsoluteIndex$1=toAbsoluteIndex$2,lengthOfArrayLike$7=lengthOfArrayLike$8,createMethod$2=function(t){return function(e,r,n){var a=toIndexedObject$6(e),i=lengthOfArrayLike$7(a);if(0===i)return!t&&-1;var o,s=toAbsoluteIndex$1(n,i);if(t&&r!=r){for(;i>s;)if((o=a[s++])!=o)return!0}else for(;i>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}},arrayIncludes={indexOf:createMethod$2(!1)},uncurryThis$w=functionUncurryThis,hasOwn$c=hasOwnProperty_1,toIndexedObject$5=toIndexedObject$8,indexOf=arrayIncludes.indexOf,hiddenKeys$2=hiddenKeys$4,push$7=uncurryThis$w([].push),objectKeysInternal=function(t,e){var r,n=toIndexedObject$5(t),a=0,i=[];for(r in n)!hasOwn$c(hiddenKeys$2,r)&&hasOwn$c(n,r)&&push$7(i,r);for(;e.length>a;)hasOwn$c(n,r=e[a++])&&(~indexOf(i,r)||push$7(i,r));return i},enumBugKeys$3=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],internalObjectKeys$1=objectKeysInternal,enumBugKeys$2=enumBugKeys$3,hiddenKeys$1=enumBugKeys$2.concat("length","prototype");objectGetOwnPropertyNames.f=Object.getOwnPropertyNames||function(t){return internalObjectKeys$1(t,hiddenKeys$1)};var objectGetOwnPropertySymbols={};objectGetOwnPropertySymbols.f=Object.getOwnPropertySymbols;var getBuiltIn$h=getBuiltIn$j,uncurryThis$v=functionUncurryThis,getOwnPropertyNamesModule=objectGetOwnPropertyNames,getOwnPropertySymbolsModule=objectGetOwnPropertySymbols,anObject$q=anObject$s,concat=uncurryThis$v([].concat),ownKeys$1=getBuiltIn$h("Reflect","ownKeys")||function(t){var e=getOwnPropertyNamesModule.f(anObject$q(t)),r=getOwnPropertySymbolsModule.f;return r?concat(e,r(t)):e},hasOwn$b=hasOwnProperty_1,ownKeys=ownKeys$1,getOwnPropertyDescriptorModule=objectGetOwnPropertyDescriptor,definePropertyModule$2=objectDefineProperty,copyConstructorProperties$2=function(t,e,r){for(var n=ownKeys(e),a=definePropertyModule$2.f,i=getOwnPropertyDescriptorModule.f,o=0;o<n.length;o++){var s=n[o];hasOwn$b(t,s)||r&&hasOwn$b(r,s)||a(t,s,i(e,s))}},fails$l=fails$t,isCallable$b=isCallable$l,replacement=/#|\.prototype\./,isForced$1=function(t,e){var r=data$1[normalize$1(t)];return r===POLYFILL||r!==NATIVE&&(isCallable$b(e)?fails$l(e):!!e)},normalize$1=isForced$1.normalize=function(t){return String(t).replace(replacement,".").toLowerCase()},data$1=isForced$1.data={},NATIVE=isForced$1.NATIVE="N",POLYFILL=isForced$1.POLYFILL="P",isForced_1=isForced$1,globalThis$u=globalThis_1,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,createNonEnumerableProperty$5=createNonEnumerableProperty$7,defineBuiltIn$a=defineBuiltIn$b,defineGlobalProperty=defineGlobalProperty$3,copyConstructorProperties$1=copyConstructorProperties$2,isForced=isForced_1,_export=function(t,e){var r,n,a,i,o,s=t.target,l=t.global,c=t.stat;if(r=l?globalThis$u:c?globalThis$u[s]||defineGlobalProperty(s,{}):globalThis$u[s]&&globalThis$u[s].prototype)for(n in e){if(i=e[n],a=t.dontCallGetSet?(o=getOwnPropertyDescriptor$1(r,n))&&o.value:r[n],!isForced(l?n:s+(c?".":"#")+n,t.forced)&&void 0!==a){if(typeof i==typeof a)continue;copyConstructorProperties$1(i,a)}(t.sham||a&&a.sham)&&createNonEnumerableProperty$5(i,"sham",!0),defineBuiltIn$a(r,n,i,t)}},wellKnownSymbol$i=wellKnownSymbol$l,TO_STRING_TAG$7=wellKnownSymbol$i("toStringTag"),test={};test[TO_STRING_TAG$7]="z";var toStringTagSupport="[object z]"===String(test),TO_STRING_TAG_SUPPORT=toStringTagSupport,isCallable$a=isCallable$l,classofRaw$1=classofRaw$2,wellKnownSymbol$h=wellKnownSymbol$l,TO_STRING_TAG$6=wellKnownSymbol$h("toStringTag"),$Object$1=Object,CORRECT_ARGUMENTS="Arguments"===classofRaw$1(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}},classof$c=TO_STRING_TAG_SUPPORT?classofRaw$1:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=$Object$1(t),TO_STRING_TAG$6))?r:CORRECT_ARGUMENTS?classofRaw$1(e):"Object"===(n=classofRaw$1(e))&&isCallable$a(e.callee)?"Arguments":n},$$T=_export,getBuiltIn$g=getBuiltIn$j,isObject$8=isObject$e,classof$b=classof$c,fails$k=fails$t,ERROR="Error",DOM_EXCEPTION$1="DOMException",PROTOTYPE_SETTING_AVAILABLE=Object.setPrototypeOf||{}.__proto__,DOMException$1=getBuiltIn$g(DOM_EXCEPTION$1),$Error$2=Error,$isError=$Error$2.isError,FORCED$c=!$isError||!PROTOTYPE_SETTING_AVAILABLE||fails$k(function(){return DOMException$1&&!$isError(new DOMException$1(DOM_EXCEPTION$1))||!$isError(new $Error$2(ERROR,{cause:function(){}}))||$isError(getBuiltIn$g("Object","create")($Error$2.prototype))});$$T({target:"Error",stat:!0,sham:!0,forced:FORCED$c},{isError:function(t){if(!isObject$8(t))return!1;var e=classof$b(t);return e===ERROR||e===DOM_EXCEPTION$1}});var fails$j=fails$t,correctPrototypeGetter=!fails$j(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),hasOwn$a=hasOwnProperty_1,isCallable$9=isCallable$l,toObject$3=toObject$5,sharedKey$1=sharedKey$3,CORRECT_PROTOTYPE_GETTER=correctPrototypeGetter,IE_PROTO$1=sharedKey$1("IE_PROTO"),$Object=Object,ObjectPrototype$1=$Object.prototype,objectGetPrototypeOf=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(t){var e=toObject$3(t);if(hasOwn$a(e,IE_PROTO$1))return e[IE_PROTO$1];var r=e.constructor;return isCallable$9(r)&&e instanceof r?r.prototype:e instanceof $Object?ObjectPrototype$1:null},uncurryThis$u=functionUncurryThis,aCallable$l=aCallable$n,functionUncurryThisAccessor=function(t,e,r){try{return uncurryThis$u(aCallable$l(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},isObject$7=isObject$e,isPossiblePrototype$1=function(t){return isObject$7(t)||null===t},isPossiblePrototype=isPossiblePrototype$1,$String$2=String,$TypeError$i=TypeError,aPossiblePrototype$1=function(t){if(isPossiblePrototype(t))return t;throw new $TypeError$i("Can't set "+$String$2(t)+" as a prototype")},uncurryThisAccessor$3=functionUncurryThisAccessor,isObject$6=isObject$e,requireObjectCoercible$6=requireObjectCoercible$9,aPossiblePrototype=aPossiblePrototype$1,objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=uncurryThisAccessor$3(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return requireObjectCoercible$6(r),aPossiblePrototype(n),isObject$6(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),objectDefineProperties={},internalObjectKeys=objectKeysInternal,enumBugKeys$1=enumBugKeys$3,objectKeys$2=Object.keys||function(t){return internalObjectKeys(t,enumBugKeys$1)},DESCRIPTORS$a=descriptors,V8_PROTOTYPE_DEFINE_BUG=v8PrototypeDefineBug,definePropertyModule$1=objectDefineProperty,anObject$p=anObject$s,toIndexedObject$4=toIndexedObject$8,objectKeys$1=objectKeys$2;objectDefineProperties.f=DESCRIPTORS$a&&!V8_PROTOTYPE_DEFINE_BUG?Object.defineProperties:function(t,e){anObject$p(t);for(var r,n=toIndexedObject$4(e),a=objectKeys$1(e),i=a.length,o=0;i>o;)definePropertyModule$1.f(t,r=a[o++],n[r]);return t};var activeXDocument,getBuiltIn$f=getBuiltIn$j,html$2=getBuiltIn$f("document","documentElement"),anObject$o=anObject$s,definePropertiesModule=objectDefineProperties,enumBugKeys=enumBugKeys$3,hiddenKeys=hiddenKeys$4,html$1=html$2,documentCreateElement=documentCreateElement$1,sharedKey=sharedKey$3,GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return LT+SCRIPT+GT+t+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(t){t.write(scriptTag("")),t.close();var e=t.parentWindow.Object;return t=null,e},NullProtoObjectViaIFrame=function(){var t,e=documentCreateElement("iframe"),r="java"+SCRIPT+":";return e.style.display="none",html$1.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F},NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(t){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var t=enumBugKeys.length;t--;)delete NullProtoObject[PROTOTYPE][enumBugKeys[t]];return NullProtoObject()};hiddenKeys[IE_PROTO]=!0;var objectCreate=Object.create||function(t,e){var r;return null!==t?(EmptyConstructor[PROTOTYPE]=anObject$o(t),r=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,r[IE_PROTO]=t):r=NullProtoObject(),void 0===e?r:definePropertiesModule.f(r,e)},uncurryThis$t=functionUncurryThis,$Error$1=Error,replace=uncurryThis$t("".replace),TEST=String(new $Error$1("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),errorStackClear=function(t,e){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof t&&!$Error$1.prepareStackTrace)for(;e--;)t=replace(t,V8_OR_CHAKRA_STACK_ENTRY,"");return t},fails$i=fails$t,createPropertyDescriptor$3=createPropertyDescriptor$6,errorStackInstallable=!fails$i(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",createPropertyDescriptor$3(1,7)),7!==t.stack)}),createNonEnumerableProperty$4=createNonEnumerableProperty$7,clearErrorStack$1=errorStackClear,ERROR_STACK_INSTALLABLE$1=errorStackInstallable,captureStackTrace=Error.captureStackTrace,errorStackInstall=function(t,e,r,n){ERROR_STACK_INSTALLABLE$1&&(captureStackTrace?captureStackTrace(t,e):createNonEnumerableProperty$4(t,"stack",clearErrorStack$1(r,n)))},classof$a=classof$c,$String$1=String,toString$9=function(t){if("Symbol"===classof$a(t))throw new TypeError("Cannot convert a Symbol value to a string");return $String$1(t)},toString$8=toString$9,normalizeStringArgument$2=function(t,e){return void 0===t?arguments.length<2?"":e:toString$8(t)},$$S=_export,globalThis$t=globalThis_1,isPrototypeOf$4=objectIsPrototypeOf,getPrototypeOf$4=objectGetPrototypeOf,setPrototypeOf$2=objectSetPrototypeOf,copyConstructorProperties=copyConstructorProperties$2,create$5=objectCreate,createNonEnumerableProperty$3=createNonEnumerableProperty$7,createPropertyDescriptor$2=createPropertyDescriptor$6,installErrorStack=errorStackInstall,normalizeStringArgument$1=normalizeStringArgument$2,wellKnownSymbol$g=wellKnownSymbol$l,fails$h=fails$t,NativeSuppressedError=globalThis$t.SuppressedError,TO_STRING_TAG$5=wellKnownSymbol$g("toStringTag"),$Error=Error,WRONG_ARITY$1=!!NativeSuppressedError&&3!==NativeSuppressedError.length,EXTRA_ARGS_SUPPORT=!!NativeSuppressedError&&fails$h(function(){return 4===new NativeSuppressedError(1,2,3,{cause:4}).cause}),PATCH=WRONG_ARITY$1||EXTRA_ARGS_SUPPORT,$SuppressedError=function(t,e,r){var n,a=isPrototypeOf$4(SuppressedErrorPrototype,this);return setPrototypeOf$2?n=!PATCH||a&&getPrototypeOf$4(this)!==SuppressedErrorPrototype?setPrototypeOf$2(new $Error,a?getPrototypeOf$4(this):SuppressedErrorPrototype):new NativeSuppressedError:(n=a?this:create$5(SuppressedErrorPrototype),createNonEnumerableProperty$3(n,TO_STRING_TAG$5,"Error")),void 0!==r&&createNonEnumerableProperty$3(n,"message",normalizeStringArgument$1(r)),installErrorStack(n,$SuppressedError,n.stack,1),createNonEnumerableProperty$3(n,"error",t),createNonEnumerableProperty$3(n,"suppressed",e),n};setPrototypeOf$2?setPrototypeOf$2($SuppressedError,$Error):copyConstructorProperties($SuppressedError,$Error,{name:!0});var SuppressedErrorPrototype=$SuppressedError.prototype=PATCH?NativeSuppressedError.prototype:create$5($Error.prototype,{constructor:createPropertyDescriptor$2(1,$SuppressedError),message:createPropertyDescriptor$2(1,""),name:createPropertyDescriptor$2(1,"SuppressedError")});PATCH&&(SuppressedErrorPrototype.constructor=$SuppressedError),$$S({global:!0,constructor:!0,arity:3,forced:PATCH},{SuppressedError:$SuppressedError});var classof$9=classofRaw$2,isArray$1=Array.isArray||function(t){return"Array"===classof$9(t)},DESCRIPTORS$9=descriptors,isArray=isArray$1,$TypeError$h=TypeError,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,SILENT_ON_NON_WRITABLE_LENGTH_SET=DESCRIPTORS$9&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}(),arraySetLength=SILENT_ON_NON_WRITABLE_LENGTH_SET?function(t,e){if(isArray(t)&&!getOwnPropertyDescriptor(t,"length").writable)throw new $TypeError$h("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},$TypeError$g=TypeError,MAX_SAFE_INTEGER$1=9007199254740991,doesNotExceedSafeInteger$3=function(t){if(t>MAX_SAFE_INTEGER$1)throw $TypeError$g("Maximum allowed index exceeded");return t},$$R=_export,toObject$2=toObject$5,lengthOfArrayLike$6=lengthOfArrayLike$8,setArrayLength=arraySetLength,doesNotExceedSafeInteger$2=doesNotExceedSafeInteger$3,fails$g=fails$t,INCORRECT_TO_LENGTH=fails$g(function(){return 4294967297!==[].push.call({length:4294967296},1)}),properErrorOnNonWritableLength=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},FORCED$b=INCORRECT_TO_LENGTH||!properErrorOnNonWritableLength();$$R({target:"Array",proto:!0,arity:1,forced:FORCED$b},{push:function(t){var e=toObject$2(this),r=lengthOfArrayLike$6(e),n=arguments.length;doesNotExceedSafeInteger$2(r+n);for(var a=0;a<n;a++)e[r]=arguments[a],r++;return setArrayLength(e,r),r}});var lengthOfArrayLike$5=lengthOfArrayLike$8,arrayToReversed$2=function(t,e){for(var r=lengthOfArrayLike$5(t),n=new e(r),a=0;a<r;a++)n[a]=t[r-a-1];return n},wellKnownSymbol$f=wellKnownSymbol$l,create$4=objectCreate,defineProperty$2=objectDefineProperty.f,UNSCOPABLES=wellKnownSymbol$f("unscopables"),ArrayPrototype$1=Array.prototype;void 0===ArrayPrototype$1[UNSCOPABLES]&&defineProperty$2(ArrayPrototype$1,UNSCOPABLES,{configurable:!0,value:create$4(null)});var addToUnscopables$3=function(t){ArrayPrototype$1[UNSCOPABLES][t]=!0},$$Q=_export,arrayToReversed$1=arrayToReversed$2,toIndexedObject$3=toIndexedObject$8,addToUnscopables$2=addToUnscopables$3,$Array$5=Array;$$Q({target:"Array",proto:!0},{toReversed:function(){return arrayToReversed$1(toIndexedObject$3(this),$Array$5)}}),addToUnscopables$2("toReversed");var lengthOfArrayLike$4=lengthOfArrayLike$8,arrayFromConstructorAndList$3=function(t,e,r){for(var n=0,a=arguments.length>2?r:lengthOfArrayLike$4(e),i=new t(a);a>n;)i[n]=e[n++];return i},globalThis$s=globalThis_1,getBuiltInPrototypeMethod$2=function(t,e){var r=globalThis$s[t],n=r&&r.prototype;return n&&n[e]},$$P=_export,uncurryThis$s=functionUncurryThis,aCallable$k=aCallable$n,toIndexedObject$2=toIndexedObject$8,arrayFromConstructorAndList$2=arrayFromConstructorAndList$3,getBuiltInPrototypeMethod$1=getBuiltInPrototypeMethod$2,addToUnscopables$1=addToUnscopables$3,$Array$4=Array,sort$1=uncurryThis$s(getBuiltInPrototypeMethod$1("Array","sort"));$$P({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&aCallable$k(t);var e=toIndexedObject$2(this),r=arrayFromConstructorAndList$2($Array$4,e);return sort$1(r,t)}}),addToUnscopables$1("toSorted");var $$O=_export,addToUnscopables=addToUnscopables$3,doesNotExceedSafeInteger$1=doesNotExceedSafeInteger$3,lengthOfArrayLike$3=lengthOfArrayLike$8,toAbsoluteIndex=toAbsoluteIndex$2,toIndexedObject$1=toIndexedObject$8,toIntegerOrInfinity$6=toIntegerOrInfinity$9,$Array$3=Array,max$1=Math.max,min$2=Math.min;$$O({target:"Array",proto:!0},{toSpliced:function(t,e){var r,n,a,i,o=toIndexedObject$1(this),s=lengthOfArrayLike$3(o),l=toAbsoluteIndex(t,s),c=arguments.length,u=0;for(0===c?r=n=0:1===c?(r=0,n=s-l):(r=c-2,n=min$2(max$1(toIntegerOrInfinity$6(e),0),s-l)),a=doesNotExceedSafeInteger$1(s+r-n),i=$Array$3(a);u<l;u++)i[u]=o[u];for(;u<l+r;u++)i[u]=arguments[u-l+2];for(;u<a;u++)i[u]=o[u+n-r];return i}}),addToUnscopables("toSpliced");var lengthOfArrayLike$2=lengthOfArrayLike$8,toIntegerOrInfinity$5=toIntegerOrInfinity$9,$RangeError$6=RangeError,arrayWith$2=function(t,e,r,n){var a=lengthOfArrayLike$2(t),i=toIntegerOrInfinity$5(r),o=i<0?a+i:i;if(o>=a||o<0)throw new $RangeError$6("Incorrect index");for(var s=new e(a),l=0;l<a;l++)s[l]=l===o?n:t[l];return s},$$N=_export,arrayWith$1=arrayWith$2,toIndexedObject=toIndexedObject$8,$Array$2=Array,INCORRECT_EXCEPTION_ON_COERCION_FAIL=function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}();$$N({target:"Array",proto:!0,forced:INCORRECT_EXCEPTION_ON_COERCION_FAIL},{with:function(t,e){return arrayWith$1(toIndexedObject(this),$Array$2,t,e)}});var $$M=_export,uncurryThis$r=functionUncurryThis,pow$2=Math.pow,EXP_MASK16=31,SIGNIFICAND_MASK16=1023,MIN_SUBNORMAL16=pow$2(2,-24),SIGNIFICAND_DENOM16=.0009765625,unpackFloat16=function(t){var e=t>>>15,r=t>>>10&EXP_MASK16,n=t&SIGNIFICAND_MASK16;return r===EXP_MASK16?0===n?0===e?1/0:-1/0:NaN:0===r?n*(0===e?MIN_SUBNORMAL16:-MIN_SUBNORMAL16):pow$2(2,r-15)*(0===e?1+n*SIGNIFICAND_DENOM16:-1-n*SIGNIFICAND_DENOM16)},getUint16=uncurryThis$r(DataView.prototype.getUint16);$$M({target:"DataView",proto:!0},{getFloat16:function(t){return unpackFloat16(getUint16(this,t,arguments.length>1&&arguments[1]))}});var classof$8=classof$c,$TypeError$f=TypeError,aDataView$1=function(t){if("DataView"===classof$8(t))return t;throw new $TypeError$f("Argument is not a DataView")},toIntegerOrInfinity$4=toIntegerOrInfinity$9,toLength$1=toLength$3,$RangeError$5=RangeError,toIndex$2=function(t){if(void 0===t)return 0;var e=toIntegerOrInfinity$4(t),r=toLength$1(e);if(e!==r)throw new $RangeError$5("Wrong length or index");return r},log=Math.log,LN2=Math.LN2,mathLog2=Math.log2||function(t){return log(t)/LN2},EPSILON$1=2220446049250313e-31,INVERSE_EPSILON=1/EPSILON$1,mathRoundTiesToEven=function(t){return t+INVERSE_EPSILON-INVERSE_EPSILON},$$L=_export,uncurryThis$q=functionUncurryThis,aDataView=aDataView$1,toIndex$1=toIndex$2,log2=mathLog2,roundTiesToEven$1=mathRoundTiesToEven,pow$1=Math.pow,MIN_INFINITY16=65520,MIN_NORMAL16=61005353927612305e-21,REC_MIN_SUBNORMAL16=16777216,REC_SIGNIFICAND_DENOM16=1024,packFloat16=function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=MIN_INFINITY16)return e<<15|31744;if(t<MIN_NORMAL16)return e<<15|roundTiesToEven$1(t*REC_MIN_SUBNORMAL16);var r=0|log2(t);if(-15===r)return e<<15|REC_SIGNIFICAND_DENOM16;var n=roundTiesToEven$1((t*pow$1(2,-r)-1)*REC_SIGNIFICAND_DENOM16);return n===REC_SIGNIFICAND_DENOM16?e<<15|r+16<<10:e<<15|r+15<<10|n},setUint16=uncurryThis$q(DataView.prototype.setUint16);$$L({target:"DataView",proto:!0},{setFloat16:function(t,e){setUint16(aDataView(this),toIndex$1(t),packFloat16(+e),arguments.length>2&&arguments[2])}});var makeBuiltIn=makeBuiltInExports,defineProperty$1=objectDefineProperty,defineBuiltInAccessor$6=function(t,e,r){return r.get&&makeBuiltIn(r.get,e,{getter:!0}),r.set&&makeBuiltIn(r.set,e,{setter:!0}),defineProperty$1.f(t,e,r)},arrayBufferBasicDetection="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,globalThis$r=globalThis_1,uncurryThisAccessor$2=functionUncurryThisAccessor,classof$7=classofRaw$2,ArrayBuffer$2=globalThis$r.ArrayBuffer,TypeError$4=globalThis$r.TypeError,arrayBufferByteLength$2=ArrayBuffer$2&&uncurryThisAccessor$2(ArrayBuffer$2.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==classof$7(t))throw new TypeError$4("ArrayBuffer expected");return t.byteLength},globalThis$q=globalThis_1,NATIVE_ARRAY_BUFFER$1=arrayBufferBasicDetection,arrayBufferByteLength$1=arrayBufferByteLength$2,DataView$2=globalThis$q.DataView,arrayBufferIsDetached=function(t){if(!NATIVE_ARRAY_BUFFER$1||0!==arrayBufferByteLength$1(t))return!1;try{return new DataView$2(t),!1}catch(t){return!0}},DESCRIPTORS$8=descriptors,defineBuiltInAccessor$5=defineBuiltInAccessor$6,isDetached$1=arrayBufferIsDetached,ArrayBufferPrototype$1=ArrayBuffer.prototype;DESCRIPTORS$8&&!("detached"in ArrayBufferPrototype$1)&&defineBuiltInAccessor$5(ArrayBufferPrototype$1,"detached",{configurable:!0,get:function(){return isDetached$1(this)}});var WorkerThreads,channel$1,buffer,$detach,isDetached=arrayBufferIsDetached,$TypeError$e=TypeError,arrayBufferNotDetached=function(t){if(isDetached(t))throw new $TypeError$e("ArrayBuffer is detached");return t},globalThis$p=globalThis_1,userAgent$1=environmentUserAgent,classof$6=classofRaw$2,userAgentStartsWith=function(t){return userAgent$1.slice(0,t.length)===t},environment=userAgentStartsWith("Bun/")?"BUN":userAgentStartsWith("Cloudflare-Workers")?"CLOUDFLARE":userAgentStartsWith("Deno/")?"DENO":userAgentStartsWith("Node.js/")?"NODE":globalThis$p.Bun&&"string"==typeof Bun.version?"BUN":globalThis$p.Deno&&"object"==typeof Deno.version?"DENO":"process"===classof$6(globalThis$p.process)?"NODE":globalThis$p.window&&globalThis$p.document?"BROWSER":"REST",ENVIRONMENT$2=environment,environmentIsNode="NODE"===ENVIRONMENT$2,globalThis$o=globalThis_1,IS_NODE$1=environmentIsNode,getBuiltInNodeModule$1=function(t){if(IS_NODE$1){try{return globalThis$o.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},globalThis$n=globalThis_1,fails$f=fails$t,V8=environmentV8Version,ENVIRONMENT$1=environment,structuredClone$3=globalThis$n.structuredClone,structuredCloneProperTransfer=!!structuredClone$3&&!fails$f(function(){if("DENO"===ENVIRONMENT$1&&V8>92||"NODE"===ENVIRONMENT$1&&V8>94||"BROWSER"===ENVIRONMENT$1&&V8>97)return!1;var t=new ArrayBuffer(8),e=structuredClone$3(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),globalThis$m=globalThis_1,getBuiltInNodeModule=getBuiltInNodeModule$1,PROPER_STRUCTURED_CLONE_TRANSFER$2=structuredCloneProperTransfer,structuredClone$2=globalThis$m.structuredClone,$ArrayBuffer=globalThis$m.ArrayBuffer,$MessageChannel=globalThis$m.MessageChannel,detach=!1;if(PROPER_STRUCTURED_CLONE_TRANSFER$2)detach=function(t){structuredClone$2(t,{transfer:[t]})};else if($ArrayBuffer)try{$MessageChannel||(WorkerThreads=getBuiltInNodeModule("worker_threads"))&&($MessageChannel=WorkerThreads.MessageChannel),$MessageChannel&&(channel$1=new $MessageChannel,buffer=new $ArrayBuffer(2),$detach=function(t){channel$1.port1.postMessage(null,[t])},2===buffer.byteLength&&($detach(buffer),0===buffer.byteLength&&(detach=$detach)))}catch(t){}var detachTransferable$2=detach,globalThis$l=globalThis_1,uncurryThis$p=functionUncurryThis,uncurryThisAccessor$1=functionUncurryThisAccessor,toIndex=toIndex$2,notDetached$4=arrayBufferNotDetached,arrayBufferByteLength=arrayBufferByteLength$2,detachTransferable$1=detachTransferable$2,PROPER_STRUCTURED_CLONE_TRANSFER$1=structuredCloneProperTransfer,structuredClone$1=globalThis$l.structuredClone,ArrayBuffer$1=globalThis$l.ArrayBuffer,DataView$1=globalThis$l.DataView,min$1=Math.min,ArrayBufferPrototype=ArrayBuffer$1.prototype,DataViewPrototype=DataView$1.prototype,slice$1=uncurryThis$p(ArrayBufferPrototype.slice),isResizable=uncurryThisAccessor$1(ArrayBufferPrototype,"resizable","get"),maxByteLength=uncurryThisAccessor$1(ArrayBufferPrototype,"maxByteLength","get"),getInt8=uncurryThis$p(DataViewPrototype.getInt8),setInt8=uncurryThis$p(DataViewPrototype.setInt8),arrayBufferTransfer=(PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1)&&function(t,e,r){var n,a=arrayBufferByteLength(t),i=void 0===e?a:toIndex(e),o=!isResizable||!isResizable(t);if(notDetached$4(t),PROPER_STRUCTURED_CLONE_TRANSFER$1&&(t=structuredClone$1(t,{transfer:[t]}),a===i&&(r||o)))return t;if(a>=i&&(!r||o))n=slice$1(t,0,i);else{var s=r&&!o&&maxByteLength?{maxByteLength:maxByteLength(t)}:void 0;n=new ArrayBuffer$1(i,s);for(var l=new DataView$1(t),c=new DataView$1(n),u=min$1(i,a),d=0;d<u;d++)setInt8(c,d,getInt8(l,d))}return PROPER_STRUCTURED_CLONE_TRANSFER$1||detachTransferable$1(t),n},$$K=_export,$transfer$1=arrayBufferTransfer;$transfer$1&&$$K({target:"ArrayBuffer",proto:!0},{transfer:function(){return $transfer$1(this,arguments.length?arguments[0]:void 0,!0)}});var $$J=_export,$transfer=arrayBufferTransfer;$transfer&&$$J({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return $transfer(this,arguments.length?arguments[0]:void 0,!1)}});var isPrototypeOf$3=objectIsPrototypeOf,$TypeError$d=TypeError,anInstance$4=function(t,e){if(isPrototypeOf$3(e,t))return t;throw new $TypeError$d("Incorrect invocation")},defineBuiltIn$9=defineBuiltIn$b,defineBuiltIns$4=function(t,e,r){for(var n in e)defineBuiltIn$9(t,n,e[n],r);return t},classofRaw=classofRaw$2,uncurryThis$o=functionUncurryThis,functionUncurryThisClause=function(t){if("Function"===classofRaw(t))return uncurryThis$o(t)},uncurryThis$n=functionUncurryThisClause,aCallable$j=aCallable$n,NATIVE_BIND$1=functionBindNative,bind$4=functionUncurryThisClause(functionUncurryThisClause.bind),functionBindContext=function(t,e){return aCallable$j(t),void 0===e?t:NATIVE_BIND$1?bind$4(t,e):function(){return t.apply(e,arguments)}},getBuiltIn$e=getBuiltIn$j,call$q=functionCall,uncurryThis$m=functionUncurryThis,bind$3=functionBindContext,anObject$n=anObject$s,aCallable$i=aCallable$n,isNullOrUndefined$2=isNullOrUndefined$5,getMethod$9=getMethod$b,wellKnownSymbol$e=wellKnownSymbol$l,ASYNC_DISPOSE$2=wellKnownSymbol$e("asyncDispose"),DISPOSE$2=wellKnownSymbol$e("dispose"),push$6=uncurryThis$m([].push),getDisposeMethod=function(t,e){if("async-dispose"===e){var r=getMethod$9(t,ASYNC_DISPOSE$2);return void 0!==r||void 0===(r=getMethod$9(t,DISPOSE$2))?r:function(){var t=this;return new(getBuiltIn$e("Promise"))(function(e){call$q(r,t),e(void 0)})}}return getMethod$9(t,DISPOSE$2)},createDisposableResource=function(t,e,r){return arguments.length<3&&!isNullOrUndefined$2(t)&&(r=aCallable$i(getDisposeMethod(anObject$n(t),e))),void 0===r?function(){}:bind$3(r,t)},addDisposableResource$2=function(t,e,r,n){var a;if(arguments.length<4){if(isNullOrUndefined$2(e)&&"sync-dispose"===r)return;a=createDisposableResource(e,r)}else a=createDisposableResource(void 0,r,n);push$6(t.stack,a)},$$I=_export,DESCRIPTORS$7=descriptors,getBuiltIn$d=getBuiltIn$j,aCallable$h=aCallable$n,anInstance$3=anInstance$4,defineBuiltIn$8=defineBuiltIn$b,defineBuiltIns$3=defineBuiltIns$4,defineBuiltInAccessor$4=defineBuiltInAccessor$6,wellKnownSymbol$d=wellKnownSymbol$l,InternalStateModule$4=internalState,addDisposableResource$1=addDisposableResource$2,SuppressedError$1=getBuiltIn$d("SuppressedError"),$ReferenceError$1=ReferenceError,DISPOSE$1=wellKnownSymbol$d("dispose"),TO_STRING_TAG$4=wellKnownSymbol$d("toStringTag"),DISPOSABLE_STACK="DisposableStack",setInternalState$3=InternalStateModule$4.set,getDisposableStackInternalState=InternalStateModule$4.getterFor(DISPOSABLE_STACK),HINT$1="sync-dispose",DISPOSED$1="disposed",PENDING$1="pending",getPendingDisposableStackInternalState=function(t){var e=getDisposableStackInternalState(t);if(e.state===DISPOSED$1)throw new $ReferenceError$1(DISPOSABLE_STACK+" already disposed");return e},$DisposableStack=function(){setInternalState$3(anInstance$3(this,DisposableStackPrototype),{type:DISPOSABLE_STACK,state:PENDING$1,stack:[]}),DESCRIPTORS$7||(this.disposed=!1)},DisposableStackPrototype=$DisposableStack.prototype;defineBuiltIns$3(DisposableStackPrototype,{dispose:function(){var t=getDisposableStackInternalState(this);if(t.state!==DISPOSED$1){t.state=DISPOSED$1,DESCRIPTORS$7||(this.disposed=!0);for(var e,r=t.stack,n=r.length,a=!1;n;){var i=r[--n];r[n]=null;try{i()}catch(t){a?e=new SuppressedError$1(t,e):(a=!0,e=t)}}if(t.stack=null,a)throw e}},use:function(t){return addDisposableResource$1(getPendingDisposableStackInternalState(this),t,HINT$1),t},adopt:function(t,e){var r=getPendingDisposableStackInternalState(this);return aCallable$h(e),addDisposableResource$1(r,void 0,HINT$1,function(){e(t)}),t},defer:function(t){var e=getPendingDisposableStackInternalState(this);aCallable$h(t),addDisposableResource$1(e,void 0,HINT$1,t)},move:function(){var t=getPendingDisposableStackInternalState(this),e=new $DisposableStack;return getDisposableStackInternalState(e).stack=t.stack,t.stack=[],t.state=DISPOSED$1,DESCRIPTORS$7||(this.disposed=!0),e}}),DESCRIPTORS$7&&defineBuiltInAccessor$4(DisposableStackPrototype,"disposed",{configurable:!0,get:function(){return getDisposableStackInternalState(this).state===DISPOSED$1}}),defineBuiltIn$8(DisposableStackPrototype,DISPOSE$1,DisposableStackPrototype.dispose,{name:"dispose"}),defineBuiltIn$8(DisposableStackPrototype,TO_STRING_TAG$4,DISPOSABLE_STACK,{nonWritable:!0}),$$I({global:!0,constructor:!0},{DisposableStack:$DisposableStack});var IteratorPrototype$4,PrototypeOfArrayIteratorPrototype,arrayIterator$1,DESCRIPTORS$6=descriptors,definePropertyModule=objectDefineProperty,createPropertyDescriptor$1=createPropertyDescriptor$6,createProperty$3=function(t,e,r){DESCRIPTORS$6?definePropertyModule.f(t,e,createPropertyDescriptor$1(0,r)):t[e]=r},fails$e=fails$t,isCallable$8=isCallable$l,isObject$5=isObject$e,getPrototypeOf$3=objectGetPrototypeOf,defineBuiltIn$7=defineBuiltIn$b,wellKnownSymbol$c=wellKnownSymbol$l,ITERATOR$4=wellKnownSymbol$c("iterator");[].keys&&"next"in(arrayIterator$1=[].keys())&&(PrototypeOfArrayIteratorPrototype=getPrototypeOf$3(getPrototypeOf$3(arrayIterator$1)))!==Object.prototype&&(IteratorPrototype$4=PrototypeOfArrayIteratorPrototype);var NEW_ITERATOR_PROTOTYPE=!isObject$5(IteratorPrototype$4)||fails$e(function(){var t={};return IteratorPrototype$4[ITERATOR$4].call(t)!==t});NEW_ITERATOR_PROTOTYPE&&(IteratorPrototype$4={}),isCallable$8(IteratorPrototype$4[ITERATOR$4])||defineBuiltIn$7(IteratorPrototype$4,ITERATOR$4,function(){return this});var iteratorsCore={IteratorPrototype:IteratorPrototype$4},$$H=_export,globalThis$k=globalThis_1,anInstance$2=anInstance$4,anObject$m=anObject$s,isCallable$7=isCallable$l,getPrototypeOf$2=objectGetPrototypeOf,defineBuiltInAccessor$3=defineBuiltInAccessor$6,createProperty$2=createProperty$3,fails$d=fails$t,hasOwn$9=hasOwnProperty_1,wellKnownSymbol$b=wellKnownSymbol$l,IteratorPrototype$3=iteratorsCore.IteratorPrototype,DESCRIPTORS$5=descriptors,CONSTRUCTOR="constructor",ITERATOR$3="Iterator",TO_STRING_TAG$3=wellKnownSymbol$b("toStringTag"),$TypeError$c=TypeError,NativeIterator=globalThis$k[ITERATOR$3],FORCED$a=!isCallable$7(NativeIterator)||NativeIterator.prototype!==IteratorPrototype$3||!fails$d(function(){NativeIterator({})}),IteratorConstructor=function(){if(anInstance$2(this,IteratorPrototype$3),getPrototypeOf$2(this)===IteratorPrototype$3)throw new $TypeError$c("Abstract class Iterator not directly constructable")},defineIteratorPrototypeAccessor=function(t,e){DESCRIPTORS$5?defineBuiltInAccessor$3(IteratorPrototype$3,t,{configurable:!0,get:function(){return e},set:function(e){if(anObject$m(this),this===IteratorPrototype$3)throw new $TypeError$c("You can't redefine this property");hasOwn$9(this,t)?this[t]=e:createProperty$2(this,t,e)}}):IteratorPrototype$3[t]=e};hasOwn$9(IteratorPrototype$3,TO_STRING_TAG$3)||defineIteratorPrototypeAccessor(TO_STRING_TAG$3,ITERATOR$3),!FORCED$a&&hasOwn$9(IteratorPrototype$3,CONSTRUCTOR)&&IteratorPrototype$3[CONSTRUCTOR]!==Object||defineIteratorPrototypeAccessor(CONSTRUCTOR,IteratorConstructor),IteratorConstructor.prototype=IteratorPrototype$3,$$H({global:!0,constructor:!0,forced:FORCED$a},{Iterator:IteratorConstructor});var call$p=functionCall,defineBuiltIn$6=defineBuiltIn$b,getMethod$8=getMethod$b,hasOwn$8=hasOwnProperty_1,wellKnownSymbol$a=wellKnownSymbol$l,IteratorPrototype$2=iteratorsCore.IteratorPrototype,DISPOSE=wellKnownSymbol$a("dispose");hasOwn$8(IteratorPrototype$2,DISPOSE)||defineBuiltIn$6(IteratorPrototype$2,DISPOSE,function(){var t=getMethod$8(this,"return");t&&call$p(t,this)});var getIteratorDirect$g=function(t){return{iterator:t,next:t.next,done:!1}},$RangeError$4=RangeError,notANan=function(t){if(t==t)return t;throw new $RangeError$4("NaN is not allowed")},toIntegerOrInfinity$3=toIntegerOrInfinity$9,$RangeError$3=RangeError,toPositiveInteger$2=function(t){var e=toIntegerOrInfinity$3(t);if(e<0)throw new $RangeError$3("The argument can't be less than 0");return e},call$o=functionCall,anObject$l=anObject$s,getMethod$7=getMethod$b,iteratorClose$h=function(t,e,r){var n,a;anObject$l(t);try{if(!(n=getMethod$7(t,"return"))){if("throw"===e)throw r;return r}n=call$o(n,t)}catch(t){a=!0,n=t}if("throw"===e)throw r;if(a)throw n;return anObject$l(n),r},createIterResultObject$2=function(t,e){return{value:t,done:e}},iteratorClose$g=iteratorClose$h,iteratorCloseAll$1=function(t,e,r){for(var n=t.length-1;n>=0;n--)if(void 0!==t[n])try{r=iteratorClose$g(t[n].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},call$n=functionCall,create$3=objectCreate,createNonEnumerableProperty$2=createNonEnumerableProperty$7,defineBuiltIns$2=defineBuiltIns$4,wellKnownSymbol$9=wellKnownSymbol$l,InternalStateModule$3=internalState,getMethod$6=getMethod$b,IteratorPrototype$1=iteratorsCore.IteratorPrototype,createIterResultObject$1=createIterResultObject$2,iteratorClose$f=iteratorClose$h,iteratorCloseAll=iteratorCloseAll$1,TO_STRING_TAG$2=wellKnownSymbol$9("toStringTag"),ITERATOR_HELPER="IteratorHelper",WRAP_FOR_VALID_ITERATOR="WrapForValidIterator",NORMAL="normal",THROW="throw",setInternalState$2=InternalStateModule$3.set,createIteratorProxyPrototype=function(t){var e=InternalStateModule$3.getterFor(t?WRAP_FOR_VALID_ITERATOR:ITERATOR_HELPER);return defineBuiltIns$2(create$3(IteratorPrototype$1),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return createIterResultObject$1(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:createIterResultObject$1(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),n=r.iterator;if(r.done=!0,t){var a=getMethod$6(n,"return");return a?call$n(a,n):createIterResultObject$1(void 0,!0)}if(r.inner)try{iteratorClose$f(r.inner.iterator,NORMAL)}catch(t){return iteratorClose$f(n,THROW,t)}if(r.openIters)try{iteratorCloseAll(r.openIters,NORMAL)}catch(t){return iteratorClose$f(n,THROW,t)}return n&&iteratorClose$f(n,NORMAL),createIterResultObject$1(void 0,!0)}})},WrapForValidIteratorPrototype=createIteratorProxyPrototype(!0),IteratorHelperPrototype=createIteratorProxyPrototype(!1);createNonEnumerableProperty$2(IteratorHelperPrototype,TO_STRING_TAG$2,"Iterator Helper");var iteratorCreateProxy=function(t,e,r){var n=function(n,a){a?(a.iterator=n.iterator,a.next=n.next):a=n,a.type=e?WRAP_FOR_VALID_ITERATOR:ITERATOR_HELPER,a.returnHandlerResult=!!r,a.nextHandler=t,a.counter=0,a.done=!1,setInternalState$2(this,a)};return n.prototype=e?WrapForValidIteratorPrototype:IteratorHelperPrototype,n},iteratorHelperThrowsOnInvalidIterator$4=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},globalThis$j=globalThis_1,iteratorHelperWithoutClosingOnEarlyError$a=function(t,e){var r=globalThis$j.Iterator,n=r&&r.prototype,a=n&&n[t],i=!1;if(a)try{a.call({next:function(){return{done:!0}},return:function(){i=!0}},-1)}catch(t){t instanceof e||(i=!1)}if(!i)return a},$$G=_export,call$m=functionCall,anObject$k=anObject$s,getIteratorDirect$f=getIteratorDirect$g,notANaN$1=notANan,toPositiveInteger$1=toPositiveInteger$2,iteratorClose$e=iteratorClose$h,createIteratorProxy$5=iteratorCreateProxy,iteratorHelperThrowsOnInvalidIterator$3=iteratorHelperThrowsOnInvalidIterator$4,iteratorHelperWithoutClosingOnEarlyError$9=iteratorHelperWithoutClosingOnEarlyError$a,DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR=!iteratorHelperThrowsOnInvalidIterator$3("drop",0),dropWithoutClosingOnEarlyError=!DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR&&iteratorHelperWithoutClosingOnEarlyError$9("drop",RangeError),FORCED$9=DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR||dropWithoutClosingOnEarlyError,IteratorProxy$5=createIteratorProxy$5(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=anObject$k(call$m(r,e)),this.done=!!t.done)return;if(t=anObject$k(call$m(r,e)),!(this.done=!!t.done))return t.value});$$G({target:"Iterator",proto:!0,real:!0,forced:FORCED$9},{drop:function(t){var e;anObject$k(this);try{e=toPositiveInteger$1(notANaN$1(+t))}catch(t){iteratorClose$e(this,"throw",t)}return dropWithoutClosingOnEarlyError?call$m(dropWithoutClosingOnEarlyError,this,e):new IteratorProxy$5(getIteratorDirect$f(this),{remaining:e})}});var iterators={},wellKnownSymbol$8=wellKnownSymbol$l,Iterators$1=iterators,ITERATOR$2=wellKnownSymbol$8("iterator"),ArrayPrototype=Array.prototype,isArrayIteratorMethod$1=function(t){return void 0!==t&&(Iterators$1.Array===t||ArrayPrototype[ITERATOR$2]===t)},classof$5=classof$c,getMethod$5=getMethod$b,isNullOrUndefined$1=isNullOrUndefined$5,Iterators=iterators,wellKnownSymbol$7=wellKnownSymbol$l,ITERATOR$1=wellKnownSymbol$7("iterator"),getIteratorMethod$4=function(t){if(!isNullOrUndefined$1(t))return getMethod$5(t,ITERATOR$1)||getMethod$5(t,"@@iterator")||Iterators[classof$5(t)]},call$l=functionCall,aCallable$g=aCallable$n,anObject$j=anObject$s,tryToString$1=tryToString$3,getIteratorMethod$3=getIteratorMethod$4,$TypeError$b=TypeError,getIterator$3=function(t,e){var r=arguments.length<2?getIteratorMethod$3(t):e;if(aCallable$g(r))return anObject$j(call$l(r,t));throw new $TypeError$b(tryToString$1(t)+" is not iterable")},bind$2=functionBindContext,call$k=functionCall,anObject$i=anObject$s,tryToString=tryToString$3,isArrayIteratorMethod=isArrayIteratorMethod$1,lengthOfArrayLike$1=lengthOfArrayLike$8,isPrototypeOf$2=objectIsPrototypeOf,getIterator$2=getIterator$3,getIteratorMethod$2=getIteratorMethod$4,iteratorClose$d=iteratorClose$h,$TypeError$a=TypeError,Result=function(t,e){this.stopped=t,this.result=e},ResultPrototype=Result.prototype,iterate$c=function(t,e,r){var n,a,i,o,s,l,c,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),g=!(!r||!r.INTERRUPTED),y=bind$2(e,u),b=function(t){return n&&iteratorClose$d(n,"normal"),new Result(!0,t)},f=function(t){return d?(anObject$i(t),g?y(t[0],t[1],b):y(t[0],t[1])):g?y(t,b):y(t)};if(h)n=t.iterator;else if(p)n=t;else{if(!(a=getIteratorMethod$2(t)))throw new $TypeError$a(tryToString(t)+" is not iterable");if(isArrayIteratorMethod(a)){for(i=0,o=lengthOfArrayLike$1(t);o>i;i++)if((s=f(t[i]))&&isPrototypeOf$2(ResultPrototype,s))return s;return new Result(!1)}n=getIterator$2(t,a)}for(l=h?t.next:n.next;!(c=call$k(l,n)).done;){try{s=f(c.value)}catch(t){iteratorClose$d(n,"throw",t)}if("object"==typeof s&&s&&isPrototypeOf$2(ResultPrototype,s))return s}return new Result(!1)},$$F=_export,call$j=functionCall,iterate$b=iterate$c,aCallable$f=aCallable$n,anObject$h=anObject$s,getIteratorDirect$e=getIteratorDirect$g,iteratorClose$c=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError$8=iteratorHelperWithoutClosingOnEarlyError$a,everyWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError$8("every",TypeError);$$F({target:"Iterator",proto:!0,real:!0,forced:everyWithoutClosingOnEarlyError},{every:function(t){anObject$h(this);try{aCallable$f(t)}catch(t){iteratorClose$c(this,"throw",t)}if(everyWithoutClosingOnEarlyError)return call$j(everyWithoutClosingOnEarlyError,this,t);var e=getIteratorDirect$e(this),r=0;return!iterate$b(e,function(e,n){if(!t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var anObject$g=anObject$s,iteratorClose$b=iteratorClose$h,callWithSafeIterationClosing$2=function(t,e,r,n){try{return n?e(anObject$g(r)[0],r[1]):e(r)}catch(e){iteratorClose$b(t,"throw",e)}},$$E=_export,call$i=functionCall,aCallable$e=aCallable$n,anObject$f=anObject$s,getIteratorDirect$d=getIteratorDirect$g,createIteratorProxy$4=iteratorCreateProxy,callWithSafeIterationClosing$1=callWithSafeIterationClosing$2,iteratorClose$a=iteratorClose$h,iteratorHelperThrowsOnInvalidIterator$2=iteratorHelperThrowsOnInvalidIterator$4,iteratorHelperWithoutClosingOnEarlyError$7=iteratorHelperWithoutClosingOnEarlyError$a,FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR=!iteratorHelperThrowsOnInvalidIterator$2("filter",function(){}),filterWithoutClosingOnEarlyError=!FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR&&iteratorHelperWithoutClosingOnEarlyError$7("filter",TypeError),FORCED$8=FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR||filterWithoutClosingOnEarlyError,IteratorProxy$4=createIteratorProxy$4(function(){for(var t,e,r=this.iterator,n=this.predicate,a=this.next;;){if(t=anObject$f(call$i(a,r)),this.done=!!t.done)return;if(e=t.value,callWithSafeIterationClosing$1(r,n,[e,this.counter++],!0))return e}});$$E({target:"Iterator",proto:!0,real:!0,forced:FORCED$8},{filter:function(t){anObject$f(this);try{aCallable$e(t)}catch(t){iteratorClose$a(this,"throw",t)}return filterWithoutClosingOnEarlyError?call$i(filterWithoutClosingOnEarlyError,this,t):new IteratorProxy$4(getIteratorDirect$d(this),{predicate:t})}});var $$D=_export,call$h=functionCall,iterate$a=iterate$c,aCallable$d=aCallable$n,anObject$e=anObject$s,getIteratorDirect$c=getIteratorDirect$g,iteratorClose$9=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError$6=iteratorHelperWithoutClosingOnEarlyError$a,findWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError$6("find",TypeError);$$D({target:"Iterator",proto:!0,real:!0,forced:findWithoutClosingOnEarlyError},{find:function(t){anObject$e(this);try{aCallable$d(t)}catch(t){iteratorClose$9(this,"throw",t)}if(findWithoutClosingOnEarlyError)return call$h(findWithoutClosingOnEarlyError,this,t);var e=getIteratorDirect$c(this),r=0;return iterate$a(e,function(e,n){if(t(e,r++))return n(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var call$g=functionCall,anObject$d=anObject$s,getIteratorDirect$b=getIteratorDirect$g,getIteratorMethod$1=getIteratorMethod$4,getIteratorFlattenable$2=function(t,e){e&&"string"==typeof t||anObject$d(t);var r=getIteratorMethod$1(t);return getIteratorDirect$b(anObject$d(void 0!==r?call$g(r,t):t))},$$C=_export,call$f=functionCall,aCallable$c=aCallable$n,anObject$c=anObject$s,getIteratorDirect$a=getIteratorDirect$g,getIteratorFlattenable$1=getIteratorFlattenable$2,createIteratorProxy$3=iteratorCreateProxy,iteratorClose$8=iteratorClose$h,iteratorHelperThrowsOnInvalidIterator$1=iteratorHelperThrowsOnInvalidIterator$4,iteratorHelperWithoutClosingOnEarlyError$5=iteratorHelperWithoutClosingOnEarlyError$a,FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR=!iteratorHelperThrowsOnInvalidIterator$1("flatMap",function(){}),flatMapWithoutClosingOnEarlyError=!FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR&&iteratorHelperWithoutClosingOnEarlyError$5("flatMap",TypeError),FORCED$7=FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR||flatMapWithoutClosingOnEarlyError,IteratorProxy$3=createIteratorProxy$3(function(){for(var t,e,r=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=anObject$c(call$f(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){iteratorClose$8(r,"throw",t)}if(t=anObject$c(call$f(this.next,r)),this.done=!!t.done)return;try{this.inner=getIteratorFlattenable$1(n(t.value,this.counter++),!1)}catch(t){iteratorClose$8(r,"throw",t)}}});$$C({target:"Iterator",proto:!0,real:!0,forced:FORCED$7},{flatMap:function(t){anObject$c(this);try{aCallable$c(t)}catch(t){iteratorClose$8(this,"throw",t)}return flatMapWithoutClosingOnEarlyError?call$f(flatMapWithoutClosingOnEarlyError,this,t):new IteratorProxy$3(getIteratorDirect$a(this),{mapper:t,inner:null})}});var $$B=_export,call$e=functionCall,iterate$9=iterate$c,aCallable$b=aCallable$n,anObject$b=anObject$s,getIteratorDirect$9=getIteratorDirect$g,iteratorClose$7=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError$4=iteratorHelperWithoutClosingOnEarlyError$a,forEachWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError$4("forEach",TypeError);$$B({target:"Iterator",proto:!0,real:!0,forced:forEachWithoutClosingOnEarlyError},{forEach:function(t){anObject$b(this);try{aCallable$b(t)}catch(t){iteratorClose$7(this,"throw",t)}if(forEachWithoutClosingOnEarlyError)return call$e(forEachWithoutClosingOnEarlyError,this,t);var e=getIteratorDirect$9(this),r=0;iterate$9(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var $$A=_export,call$d=functionCall,toObject$1=toObject$5,isPrototypeOf$1=objectIsPrototypeOf,IteratorPrototype=iteratorsCore.IteratorPrototype,createIteratorProxy$2=iteratorCreateProxy,getIteratorFlattenable=getIteratorFlattenable$2,FORCED$6=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),IteratorProxy$2=createIteratorProxy$2(function(){return call$d(this.next,this.iterator)},!0);$$A({target:"Iterator",stat:!0,forced:FORCED$6},{from:function(t){var e=getIteratorFlattenable("string"==typeof t?toObject$1(t):t,!0);return isPrototypeOf$1(IteratorPrototype,e.iterator)?e.iterator:new IteratorProxy$2(e)}});var $$z=_export,call$c=functionCall,aCallable$a=aCallable$n,anObject$a=anObject$s,getIteratorDirect$8=getIteratorDirect$g,createIteratorProxy$1=iteratorCreateProxy,callWithSafeIterationClosing=callWithSafeIterationClosing$2,iteratorClose$6=iteratorClose$h,iteratorHelperThrowsOnInvalidIterator=iteratorHelperThrowsOnInvalidIterator$4,iteratorHelperWithoutClosingOnEarlyError$3=iteratorHelperWithoutClosingOnEarlyError$a,MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR=!iteratorHelperThrowsOnInvalidIterator("map",function(){}),mapWithoutClosingOnEarlyError=!MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR&&iteratorHelperWithoutClosingOnEarlyError$3("map",TypeError),FORCED$5=MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR||mapWithoutClosingOnEarlyError,IteratorProxy$1=createIteratorProxy$1(function(){var t=this.iterator,e=anObject$a(call$c(this.next,t));if(!(this.done=!!e.done))return callWithSafeIterationClosing(t,this.mapper,[e.value,this.counter++],!0)});$$z({target:"Iterator",proto:!0,real:!0,forced:FORCED$5},{map:function(t){anObject$a(this);try{aCallable$a(t)}catch(t){iteratorClose$6(this,"throw",t)}return mapWithoutClosingOnEarlyError?call$c(mapWithoutClosingOnEarlyError,this,t):new IteratorProxy$1(getIteratorDirect$8(this),{mapper:t})}});var NATIVE_BIND=functionBindNative,FunctionPrototype=Function.prototype,apply$4=FunctionPrototype.apply,call$b=FunctionPrototype.call,functionApply="object"==typeof Reflect&&Reflect.apply||(NATIVE_BIND?call$b.bind(apply$4):function(){return call$b.apply(apply$4,arguments)}),$$y=_export,iterate$8=iterate$c,aCallable$9=aCallable$n,anObject$9=anObject$s,getIteratorDirect$7=getIteratorDirect$g,iteratorClose$5=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError$2=iteratorHelperWithoutClosingOnEarlyError$a,apply$3=functionApply,fails$c=fails$t,$TypeError$9=TypeError,FAILS_ON_INITIAL_UNDEFINED=fails$c(function(){[].keys().reduce(function(){},void 0)}),reduceWithoutClosingOnEarlyError=!FAILS_ON_INITIAL_UNDEFINED&&iteratorHelperWithoutClosingOnEarlyError$2("reduce",$TypeError$9);$$y({target:"Iterator",proto:!0,real:!0,forced:FAILS_ON_INITIAL_UNDEFINED||reduceWithoutClosingOnEarlyError},{reduce:function(t){anObject$9(this);try{aCallable$9(t)}catch(t){iteratorClose$5(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(reduceWithoutClosingOnEarlyError)return apply$3(reduceWithoutClosingOnEarlyError,this,e?[t]:[t,r]);var n=getIteratorDirect$7(this),a=0;if(iterate$8(n,function(n){e?(e=!1,r=n):r=t(r,n,a),a++},{IS_RECORD:!0}),e)throw new $TypeError$9("Reduce of empty iterator with no initial value");return r}});var $$x=_export,call$a=functionCall,iterate$7=iterate$c,aCallable$8=aCallable$n,anObject$8=anObject$s,getIteratorDirect$6=getIteratorDirect$g,iteratorClose$4=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError$1=iteratorHelperWithoutClosingOnEarlyError$a,someWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError$1("some",TypeError);$$x({target:"Iterator",proto:!0,real:!0,forced:someWithoutClosingOnEarlyError},{some:function(t){anObject$8(this);try{aCallable$8(t)}catch(t){iteratorClose$4(this,"throw",t)}if(someWithoutClosingOnEarlyError)return call$a(someWithoutClosingOnEarlyError,this,t);var e=getIteratorDirect$6(this),r=0;return iterate$7(e,function(e,n){if(t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var $$w=_export,call$9=functionCall,anObject$7=anObject$s,getIteratorDirect$5=getIteratorDirect$g,notANaN=notANan,toPositiveInteger=toPositiveInteger$2,createIteratorProxy=iteratorCreateProxy,iteratorClose$3=iteratorClose$h,iteratorHelperWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError$a,takeWithoutClosingOnEarlyError=iteratorHelperWithoutClosingOnEarlyError("take",RangeError),IteratorProxy=createIteratorProxy(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,iteratorClose$3(t,"normal",void 0);var e=anObject$7(call$9(this.next,t));return(this.done=!!e.done)?void 0:e.value});$$w({target:"Iterator",proto:!0,real:!0,forced:takeWithoutClosingOnEarlyError},{take:function(t){var e;anObject$7(this);try{e=toPositiveInteger(notANaN(+t))}catch(t){iteratorClose$3(this,"throw",t)}return takeWithoutClosingOnEarlyError?call$9(takeWithoutClosingOnEarlyError,this,e):new IteratorProxy(getIteratorDirect$5(this),{remaining:e})}});var $$v=_export,anObject$6=anObject$s,iterate$6=iterate$c,getIteratorDirect$4=getIteratorDirect$g,push$5=[].push;$$v({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return iterate$6(getIteratorDirect$4(anObject$6(this)),push$5,{that:t,IS_RECORD:!0}),t}});var uncurryThis$l=functionUncurryThis,MapPrototype=Map.prototype,mapHelpers={Map:Map,set:uncurryThis$l(MapPrototype.set),get:uncurryThis$l(MapPrototype.get),has:uncurryThis$l(MapPrototype.has),remove:uncurryThis$l(MapPrototype.delete)},$$u=_export,uncurryThis$k=functionUncurryThis,aCallable$7=aCallable$n,requireObjectCoercible$5=requireObjectCoercible$9,iterate$5=iterate$c,MapHelpers$1=mapHelpers,fails$b=fails$t,Map$2=MapHelpers$1.Map,has$6=MapHelpers$1.has,get$2=MapHelpers$1.get,set$3=MapHelpers$1.set,push$4=uncurryThis$k([].push),DOES_NOT_WORK_WITH_PRIMITIVES$1=fails$b(function(){return 1!==Map$2.groupBy("ab",function(t){return t}).get("a").length});$$u({target:"Map",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES$1},{groupBy:function(t,e){requireObjectCoercible$5(t),aCallable$7(e);var r=new Map$2,n=0;return iterate$5(t,function(t){var a=e(t,n++);has$6(r,a)?push$4(get$2(r,a),t):set$3(r,a,[t])}),r}});var mathSign=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},sign=mathSign,roundTiesToEven=mathRoundTiesToEven,abs$1=Math.abs,EPSILON=2220446049250313e-31,mathFloatRound=function(t,e,r,n){var a=+t,i=abs$1(a),o=sign(a);if(i<n)return o*roundTiesToEven(i/n/e)*n*e;var s=(1+e/EPSILON)*i,l=s-(s-i);return l>r||l!=l?o*(1/0):o*l},$$t=_export,floatRound=mathFloatRound,FLOAT16_EPSILON=.0009765625,FLOAT16_MAX_VALUE=65504,FLOAT16_MIN_VALUE=6103515625e-14;$$t({target:"Math",stat:!0},{f16round:function(t){return floatRound(t,FLOAT16_EPSILON,FLOAT16_MAX_VALUE,FLOAT16_MIN_VALUE)}});var $$s=_export,uncurryThis$j=functionUncurryThis,iterate$4=iterate$c,$RangeError$2=RangeError,$TypeError$8=TypeError,$Infinity=1/0,$NaN=NaN,abs=Math.abs,pow=Math.pow,push$3=uncurryThis$j([].push),POW_2_1023=pow(2,1023),MAX_SAFE_INTEGER=pow(2,53)-1,MAX_DOUBLE=Number.MAX_VALUE,MAX_ULP=pow(2,971),NOT_A_NUMBER={},MINUS_INFINITY={},PLUS_INFINITY={},MINUS_ZERO={},FINITE={},twosum=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};$$s({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,n=MINUS_ZERO;switch(iterate$4(t,function(t){if(++r>=MAX_SAFE_INTEGER)throw new $RangeError$2("Maximum allowed index exceeded");if("number"!=typeof t)throw new $TypeError$8("Value is not a number");n!==NOT_A_NUMBER&&(t!=t?n=NOT_A_NUMBER:t===$Infinity?n=n===MINUS_INFINITY?NOT_A_NUMBER:PLUS_INFINITY:t===-$Infinity?n=n===PLUS_INFINITY?NOT_A_NUMBER:MINUS_INFINITY:0===t&&1/t!==$Infinity||n!==MINUS_ZERO&&n!==FINITE||(n=FINITE,push$3(e,t)))}),n){case NOT_A_NUMBER:return $NaN;case MINUS_INFINITY:return-$Infinity;case PLUS_INFINITY:return $Infinity;case MINUS_ZERO:return-0}for(var a,i,o,s,l,c,u=[],d=0,h=0;h<e.length;h++){a=e[h];for(var p=0,g=0;g<u.length;g++){if(i=u[g],abs(a)<abs(i)&&(c=a,a=i,i=c),s=(o=twosum(a,i)).hi,l=o.lo,abs(s)===$Infinity){var y=s===$Infinity?1:-1;d+=y,abs(a=a-y*POW_2_1023-y*POW_2_1023)<abs(i)&&(c=a,a=i,i=c),s=(o=twosum(a,i)).hi,l=o.lo}0!==l&&(u[p++]=l),a=s}u.length=p,0!==a&&push$3(u,a)}var b=u.length-1;if(s=0,l=0,0!==d){var f=b>=0?u[b]:0;if(b--,abs(d)>1||d>0&&f>0||d<0&&f<0)return d>0?$Infinity:-$Infinity;if(s=(o=twosum(d*POW_2_1023,f/2)).hi,l=o.lo,l*=2,abs(2*s)===$Infinity)return s>0?s===POW_2_1023&&l===-MAX_ULP/2&&b>=0&&u[b]<0?MAX_DOUBLE:$Infinity:s===-POW_2_1023&&l===MAX_ULP/2&&b>=0&&u[b]>0?-MAX_DOUBLE:-$Infinity;0!==l&&(u[++b]=l,l=0),s*=2}for(;b>=0&&(s=(o=twosum(s,u[b--])).hi,0===(l=o.lo)););return b>=0&&(l<0&&u[b]<0||l>0&&u[b]>0)&&(i=2*l)===(a=s+i)-s&&(s=a),s}});var $$r=_export,createProperty$1=createProperty$3,getBuiltIn$c=getBuiltIn$j,uncurryThis$i=functionUncurryThis,aCallable$6=aCallable$n,requireObjectCoercible$4=requireObjectCoercible$9,toPropertyKey=toPropertyKey$3,iterate$3=iterate$c,fails$a=fails$t,nativeGroupBy=Object.groupBy,create$2=getBuiltIn$c("Object","create"),push$2=uncurryThis$i([].push),DOES_NOT_WORK_WITH_PRIMITIVES=!nativeGroupBy||fails$a(function(){return 1!==nativeGroupBy("ab",function(t){return t}).a.length});$$r({target:"Object",stat:!0,forced:DOES_NOT_WORK_WITH_PRIMITIVES},{groupBy:function(t,e){requireObjectCoercible$4(t),aCallable$6(e);var r=create$2(null),n=0;return iterate$3(t,function(t){var a=toPropertyKey(e(t,n++));a in r?push$2(r[a],t):createProperty$1(r,a,[t])}),r}});var uncurryThis$h=functionUncurryThis,arraySlice$2=uncurryThis$h([].slice),newPromiseCapability={},aCallable$5=aCallable$n,$TypeError$7=TypeError,PromiseCapability=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw new $TypeError$7("Bad Promise constructor");e=t,r=n}),this.resolve=aCallable$5(e),this.reject=aCallable$5(r)};newPromiseCapability.f=function(t){return new PromiseCapability(t)};var perform$1=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},$$q=_export,globalThis$i=globalThis_1,apply$2=functionApply,slice=arraySlice$2,newPromiseCapabilityModule$1=newPromiseCapability,aCallable$4=aCallable$n,perform=perform$1,Promise$4=globalThis$i.Promise,ACCEPT_ARGUMENTS=!1,FORCED$4=!Promise$4||!Promise$4.try||perform(function(){Promise$4.try(function(t){ACCEPT_ARGUMENTS=8===t},8)}).error||!ACCEPT_ARGUMENTS;$$q({target:"Promise",stat:!0,forced:FORCED$4},{try:function(t){var e=arguments.length>1?slice(arguments,1):[],r=newPromiseCapabilityModule$1.f(this),n=perform(function(){return apply$2(aCallable$4(t),void 0,e)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var $$p=_export,newPromiseCapabilityModule=newPromiseCapability;$$p({target:"Promise",stat:!0},{withResolvers:function(){var t=newPromiseCapabilityModule.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var uncurryThis$g=functionUncurryThis,fails$9=fails$t,isCallable$6=isCallable$l,classof$4=classof$c,getBuiltIn$b=getBuiltIn$j,inspectSource=inspectSource$2,noop$1=function(){},construct=getBuiltIn$b("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec$2=uncurryThis$g(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.test(noop$1),isConstructorModern=function(t){if(!isCallable$6(t))return!1;try{return construct(noop$1,[],t),!0}catch(t){return!1}},isConstructorLegacy=function(t){if(!isCallable$6(t))return!1;switch(classof$4(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec$2(constructorRegExp,inspectSource(t))}catch(t){return!0}};isConstructorLegacy.sham=!0;var AsyncIteratorPrototype$2,prototype,isConstructor$2=!construct||fails$9(function(){var t;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern(function(){t=!0})||t})?isConstructorLegacy:isConstructorModern,globalThis$h=globalThis_1,shared=sharedStoreExports,isCallable$5=isCallable$l,getPrototypeOf$1=objectGetPrototypeOf,defineBuiltIn$5=defineBuiltIn$b,wellKnownSymbol$6=wellKnownSymbol$l,USE_FUNCTION_CONSTRUCTOR="USE_FUNCTION_CONSTRUCTOR",ASYNC_ITERATOR$2=wellKnownSymbol$6("asyncIterator"),AsyncIterator=globalThis$h.AsyncIterator,PassedAsyncIteratorPrototype=shared.AsyncIteratorPrototype;if(PassedAsyncIteratorPrototype)AsyncIteratorPrototype$2=PassedAsyncIteratorPrototype;else if(isCallable$5(AsyncIterator))AsyncIteratorPrototype$2=AsyncIterator.prototype;else if(shared[USE_FUNCTION_CONSTRUCTOR]||globalThis$h[USE_FUNCTION_CONSTRUCTOR])try{prototype=getPrototypeOf$1(getPrototypeOf$1(getPrototypeOf$1(Function("return async function*(){}()")()))),getPrototypeOf$1(prototype)===Object.prototype&&(AsyncIteratorPrototype$2=prototype)}catch(t){}AsyncIteratorPrototype$2||(AsyncIteratorPrototype$2={}),isCallable$5(AsyncIteratorPrototype$2[ASYNC_ITERATOR$2])||defineBuiltIn$5(AsyncIteratorPrototype$2,ASYNC_ITERATOR$2,function(){return this});var asyncIteratorPrototype=AsyncIteratorPrototype$2,call$8=functionCall,anObject$5=anObject$s,create$1=objectCreate,getMethod$4=getMethod$b,defineBuiltIns$1=defineBuiltIns$4,InternalStateModule$2=internalState,iteratorClose$2=iteratorClose$h,getBuiltIn$a=getBuiltIn$j,AsyncIteratorPrototype$1=asyncIteratorPrototype,createIterResultObject=createIterResultObject$2,Promise$3=getBuiltIn$a("Promise"),ASYNC_FROM_SYNC_ITERATOR="AsyncFromSyncIterator",setInternalState$1=InternalStateModule$2.set,getInternalState$1=InternalStateModule$2.getterFor(ASYNC_FROM_SYNC_ITERATOR),asyncFromSyncIteratorContinuation=function(t,e,r,n,a){var i=t.done;Promise$3.resolve(t.value).then(function(t){e(createIterResultObject(t,i))},function(t){if(!i&&a)try{iteratorClose$2(n,"throw",t)}catch(e){t=e}r(t)})},AsyncFromSyncIterator$2=function(t){t.type=ASYNC_FROM_SYNC_ITERATOR,setInternalState$1(this,t)};AsyncFromSyncIterator$2.prototype=defineBuiltIns$1(create$1(AsyncIteratorPrototype$1),{next:function(){var t=getInternalState$1(this);return new Promise$3(function(e,r){var n=anObject$5(call$8(t.next,t.iterator));asyncFromSyncIteratorContinuation(n,e,r,t.iterator,!0)})},return:function(){var t=getInternalState$1(this).iterator;return new Promise$3(function(e,r){var n=getMethod$4(t,"return");if(void 0===n)return e(createIterResultObject(void 0,!0));var a=anObject$5(call$8(n,t));asyncFromSyncIteratorContinuation(a,e,r,t)})}});var asyncFromSyncIterator=AsyncFromSyncIterator$2,call$7=functionCall,AsyncFromSyncIterator$1=asyncFromSyncIterator,anObject$4=anObject$s,getIterator$1=getIterator$3,getIteratorDirect$3=getIteratorDirect$g,getMethod$3=getMethod$b,wellKnownSymbol$5=wellKnownSymbol$l,ASYNC_ITERATOR$1=wellKnownSymbol$5("asyncIterator"),getAsyncIterator$1=function(t,e){var r=arguments.length<2?getMethod$3(t,ASYNC_ITERATOR$1):e;return r?anObject$4(call$7(r,t)):new AsyncFromSyncIterator$1(getIteratorDirect$3(getIterator$1(t)))},call$6=functionCall,getBuiltIn$9=getBuiltIn$j,getMethod$2=getMethod$b,asyncIteratorClose=function(t,e,r,n){try{var a=getMethod$2(t,"return");if(a)return getBuiltIn$9("Promise").resolve(call$6(a,t)).then(function(){e(r)},function(t){n(t)})}catch(t){return n(t)}e(r)},call$5=functionCall,aCallable$3=aCallable$n,anObject$3=anObject$s,isObject$4=isObject$e,doesNotExceedSafeInteger=doesNotExceedSafeInteger$3,getBuiltIn$8=getBuiltIn$j,getIteratorDirect$2=getIteratorDirect$g,closeAsyncIteration=asyncIteratorClose,createMethod$1=function(t){var e=0===t,r=1===t,n=2===t,a=3===t;return function(t,i,o){anObject$3(t);var s=void 0!==i;!s&&e||aCallable$3(i);var l=getIteratorDirect$2(t),c=getBuiltIn$8("Promise"),u=l.iterator,d=l.next,h=0;return new c(function(t,l){var p=function(t){closeAsyncIteration(u,l,t,l)},g=function(){try{if(s)try{doesNotExceedSafeInteger(h)}catch(t){p(t)}c.resolve(anObject$3(call$5(d,u))).then(function(d){try{if(anObject$3(d).done)e?(o.length=h,t(o)):t(!a&&(n||void 0));else{var y=d.value;try{if(s){var b=i(y,h),f=function(i){if(r)g();else if(n)i?g():closeAsyncIteration(u,t,!1,l);else if(e)try{o[h++]=i,g()}catch(t){p(t)}else i?closeAsyncIteration(u,t,a||y,l):g()};isObject$4(b)?c.resolve(b).then(f,p):f(b)}else o[h++]=y,g()}catch(t){p(t)}}}catch(t){l(t)}},l)}catch(t){l(t)}};g()})}},asyncIteratorIteration={toArray:createMethod$1(0)},bind$1=functionBindContext,uncurryThis$f=functionUncurryThis,toObject=toObject$5,isConstructor$1=isConstructor$2,getAsyncIterator=getAsyncIterator$1,getIterator=getIterator$3,getIteratorDirect$1=getIteratorDirect$g,getIteratorMethod=getIteratorMethod$4,getMethod$1=getMethod$b,getBuiltIn$7=getBuiltIn$j,getBuiltInPrototypeMethod=getBuiltInPrototypeMethod$2,wellKnownSymbol$4=wellKnownSymbol$l,AsyncFromSyncIterator=asyncFromSyncIterator,toArray=asyncIteratorIteration.toArray,ASYNC_ITERATOR=wellKnownSymbol$4("asyncIterator"),arrayIterator=uncurryThis$f(getBuiltInPrototypeMethod("Array","values")),arrayIteratorNext=uncurryThis$f(arrayIterator([]).next),safeArrayIterator=function(){return new SafeArrayIterator(this)},SafeArrayIterator=function(t){this.iterator=arrayIterator(t)};SafeArrayIterator.prototype.next=function(){return arrayIteratorNext(this.iterator)};var arrayFromAsync=function(t){var e=this,r=arguments.length,n=r>1?arguments[1]:void 0,a=r>2?arguments[2]:void 0;return new(getBuiltIn$7("Promise"))(function(r){var i=toObject(t);void 0!==n&&(n=bind$1(n,a));var o=getMethod$1(i,ASYNC_ITERATOR),s=o?void 0:getIteratorMethod(i)||safeArrayIterator,l=isConstructor$1(e)?new e:[],c=o?getAsyncIterator(i,o):new AsyncFromSyncIterator(getIteratorDirect$1(getIterator(i,s)));r(toArray(c,n,l))})},$$o=_export,fromAsync=arrayFromAsync,fails$8=fails$t,nativeFromAsync=Array.fromAsync,INCORRECT_CONSTRUCTURING=!nativeFromAsync||fails$8(function(){var t=0;return nativeFromAsync.call(function(){return t++,[]},{length:0}),1!==t});$$o({target:"Array",stat:!0,forced:INCORRECT_CONSTRUCTURING},{fromAsync:fromAsync});var $$n=_export,DESCRIPTORS$4=descriptors,getBuiltIn$6=getBuiltIn$j,aCallable$2=aCallable$n,anInstance$1=anInstance$4,defineBuiltIn$4=defineBuiltIn$b,defineBuiltIns=defineBuiltIns$4,defineBuiltInAccessor$2=defineBuiltInAccessor$6,wellKnownSymbol$3=wellKnownSymbol$l,InternalStateModule$1=internalState,addDisposableResource=addDisposableResource$2,V8_VERSION=environmentV8Version,Promise$2=getBuiltIn$6("Promise"),SuppressedError=getBuiltIn$6("SuppressedError"),$ReferenceError=ReferenceError,ASYNC_DISPOSE$1=wellKnownSymbol$3("asyncDispose"),TO_STRING_TAG$1=wellKnownSymbol$3("toStringTag"),ASYNC_DISPOSABLE_STACK="AsyncDisposableStack",setInternalState=InternalStateModule$1.set,getAsyncDisposableStackInternalState=InternalStateModule$1.getterFor(ASYNC_DISPOSABLE_STACK),HINT="async-dispose",DISPOSED="disposed",PENDING="pending",getPendingAsyncDisposableStackInternalState=function(t){var e=getAsyncDisposableStackInternalState(t);if(e.state===DISPOSED)throw new $ReferenceError(ASYNC_DISPOSABLE_STACK+" already disposed");return e},$AsyncDisposableStack=function(){setInternalState(anInstance$1(this,AsyncDisposableStackPrototype),{type:ASYNC_DISPOSABLE_STACK,state:PENDING,stack:[]}),DESCRIPTORS$4||(this.disposed=!1)},AsyncDisposableStackPrototype=$AsyncDisposableStack.prototype;defineBuiltIns(AsyncDisposableStackPrototype,{disposeAsync:function(){var t=this;return new Promise$2(function(e,r){var n=getAsyncDisposableStackInternalState(t);if(n.state===DISPOSED)return e(void 0);n.state=DISPOSED,DESCRIPTORS$4||(t.disposed=!0);var a,i=n.stack,o=i.length,s=!1,l=function(t){s?a=new SuppressedError(t,a):(s=!0,a=t),c()},c=function(){if(o){var t=i[--o];i[o]=null;try{Promise$2.resolve(t()).then(c,l)}catch(t){l(t)}}else n.stack=null,s?r(a):e(void 0)};c()})},use:function(t){return addDisposableResource(getPendingAsyncDisposableStackInternalState(this),t,HINT),t},adopt:function(t,e){var r=getPendingAsyncDisposableStackInternalState(this);return aCallable$2(e),addDisposableResource(r,void 0,HINT,function(){return e(t)}),t},defer:function(t){var e=getPendingAsyncDisposableStackInternalState(this);aCallable$2(t),addDisposableResource(e,void 0,HINT,t)},move:function(){var t=getPendingAsyncDisposableStackInternalState(this),e=new $AsyncDisposableStack;return getAsyncDisposableStackInternalState(e).stack=t.stack,t.stack=[],t.state=DISPOSED,DESCRIPTORS$4||(this.disposed=!0),e}}),DESCRIPTORS$4&&defineBuiltInAccessor$2(AsyncDisposableStackPrototype,"disposed",{configurable:!0,get:function(){return getAsyncDisposableStackInternalState(this).state===DISPOSED}}),defineBuiltIn$4(AsyncDisposableStackPrototype,ASYNC_DISPOSE$1,AsyncDisposableStackPrototype.disposeAsync,{name:"disposeAsync"}),defineBuiltIn$4(AsyncDisposableStackPrototype,TO_STRING_TAG$1,ASYNC_DISPOSABLE_STACK,{nonWritable:!0});var SYNC_DISPOSE_RETURNING_PROMISE_RESOLUTION_BUG=V8_VERSION&&V8_VERSION<136;$$n({global:!0,constructor:!0,forced:SYNC_DISPOSE_RETURNING_PROMISE_RESOLUTION_BUG},{AsyncDisposableStack:$AsyncDisposableStack});var call$4=functionCall,defineBuiltIn$3=defineBuiltIn$b,getBuiltIn$5=getBuiltIn$j,getMethod=getMethod$b,hasOwn$7=hasOwnProperty_1,wellKnownSymbol$2=wellKnownSymbol$l,AsyncIteratorPrototype=asyncIteratorPrototype,ASYNC_DISPOSE=wellKnownSymbol$2("asyncDispose"),Promise$1=getBuiltIn$5("Promise");hasOwn$7(AsyncIteratorPrototype,ASYNC_DISPOSE)||defineBuiltIn$3(AsyncIteratorPrototype,ASYNC_DISPOSE,function(){var t=this;return new Promise$1(function(e,r){var n=getMethod(t,"return");n?Promise$1.resolve(call$4(n,t)).then(function(){e(void 0)},r):e(void 0)})});var $TypeError$6=TypeError,aString$4=function(t){if("string"==typeof t)return t;throw new $TypeError$6("Argument is not a string")},toIntegerOrInfinity$2=toIntegerOrInfinity$9,toString$7=toString$9,requireObjectCoercible$3=requireObjectCoercible$9,$RangeError$1=RangeError,stringRepeat=function(t){var e=toString$7(requireObjectCoercible$3(this)),r="",n=toIntegerOrInfinity$2(t);if(n<0||n===1/0)throw new $RangeError$1("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},uncurryThis$e=functionUncurryThis,toLength=toLength$3,toString$6=toString$9,$repeat=stringRepeat,requireObjectCoercible$2=requireObjectCoercible$9,repeat=uncurryThis$e($repeat),stringSlice$1=uncurryThis$e("".slice),ceil=Math.ceil,createMethod=function(t){return function(e,r,n){var a,i,o=toString$6(requireObjectCoercible$2(e)),s=toLength(r),l=o.length,c=void 0===n?" ":toString$6(n);return s<=l||""===c?o:((i=repeat(c,ceil((a=s-l)/c.length))).length>a&&(i=stringSlice$1(i,0,a)),t?o+i:i+o)}},stringPad={start:createMethod(!1)},whitespaces="\t\n\v\f\r                　\u2028\u2029\ufeff",$$m=_export,uncurryThis$d=functionUncurryThis,aString$3=aString$4,hasOwn$6=hasOwnProperty_1,padStart=stringPad.start,WHITESPACES=whitespaces,$Array$1=Array,$escape=RegExp.escape,charAt$2=uncurryThis$d("".charAt),charCodeAt$2=uncurryThis$d("".charCodeAt),numberToString$1=uncurryThis$d(1.1.toString),join$1=uncurryThis$d([].join),FIRST_DIGIT_OR_ASCII=/^[0-9a-z]/i,SYNTAX_SOLIDUS=/^[$()*+./?[\\\]^{|}]/,OTHER_PUNCTUATORS_AND_WHITESPACES=RegExp("^[!\"#%&',\\-:;<=>@`~"+WHITESPACES+"]"),exec$1=uncurryThis$d(FIRST_DIGIT_OR_ASCII.exec),ControlEscape={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},escapeChar=function(t){var e=numberToString$1(charCodeAt$2(t,0),16);return e.length<3?"\\x"+padStart(e,2,"0"):"\\u"+padStart(e,4,"0")},FORCED$3=!$escape||"\\x61b"!==$escape("ab");$$m({target:"RegExp",stat:!0,forced:FORCED$3},{escape:function(t){aString$3(t);for(var e=t.length,r=$Array$1(e),n=0;n<e;n++){var a=charAt$2(t,n);if(0===n&&exec$1(FIRST_DIGIT_OR_ASCII,a))r[n]=escapeChar(a);else if(hasOwn$6(ControlEscape,a))r[n]="\\"+ControlEscape[a];else if(exec$1(SYNTAX_SOLIDUS,a))r[n]="\\"+a;else if(exec$1(OTHER_PUNCTUATORS_AND_WHITESPACES,a))r[n]=escapeChar(a);else{var i=charCodeAt$2(a,0);55296!=(63488&i)?r[n]=a:i>=56320||n+1>=e||56320!=(64512&charCodeAt$2(t,n+1))?r[n]=escapeChar(a):(r[n]=a,r[++n]=charAt$2(t,n))}}return join$1(r,"")}});var uncurryThis$c=functionUncurryThis,SetPrototype$1=Set.prototype,setHelpers={Set:Set,add:uncurryThis$c(SetPrototype$1.add),has:uncurryThis$c(SetPrototype$1.has),remove:uncurryThis$c(SetPrototype$1.delete),proto:SetPrototype$1},has$5=setHelpers.has,aSet$7=function(t){return has$5(t),t},call$3=functionCall,iterateSimple$7=function(t,e,r){for(var n,a,i=r?t:t.iterator,o=t.next;!(n=call$3(o,i)).done;)if(void 0!==(a=e(n.value)))return a},uncurryThis$b=functionUncurryThis,iterateSimple$6=iterateSimple$7,SetHelpers$6=setHelpers,Set$4=SetHelpers$6.Set,SetPrototype=SetHelpers$6.proto,forEach$2=uncurryThis$b(SetPrototype.forEach),keys=uncurryThis$b(SetPrototype.keys),next=keys(new Set$4).next,setIterate$1=function(t,e,r){return r?iterateSimple$6({iterator:keys(t),next:next},e):forEach$2(t,e)},SetHelpers$5=setHelpers,iterate$2=setIterate$1,Set$3=SetHelpers$5.Set,add$3=SetHelpers$5.add,setClone=function(t){var e=new Set$3;return iterate$2(t,function(t){add$3(e,t)}),e},uncurryThisAccessor=functionUncurryThisAccessor,SetHelpers$4=setHelpers,setSize=uncurryThisAccessor(SetHelpers$4.proto,"size","get")||function(t){return t.size},aCallable$1=aCallable$n,anObject$2=anObject$s,call$2=functionCall,toIntegerOrInfinity$1=toIntegerOrInfinity$9,getIteratorDirect=getIteratorDirect$g,INVALID_SIZE="Invalid size",$RangeError=RangeError,$TypeError$5=TypeError,max=Math.max,SetRecord=function(t,e){this.set=t,this.size=max(e,0),this.has=aCallable$1(t.has),this.keys=aCallable$1(t.keys)};SetRecord.prototype={getIterator:function(){return getIteratorDirect(anObject$2(call$2(this.keys,this.set)))},includes:function(t){return call$2(this.has,this.set,t)}};var getSetRecord$7=function(t){anObject$2(t);var e=+t.size;if(e!=e)throw new $TypeError$5(INVALID_SIZE);var r=toIntegerOrInfinity$1(e);if(r<0)throw new $RangeError(INVALID_SIZE);return new SetRecord(t,r)},aSet$6=aSet$7,SetHelpers$3=setHelpers,clone$2=setClone,size$4=setSize,getSetRecord$6=getSetRecord$7,iterateSet$2=setIterate$1,iterateSimple$5=iterateSimple$7,has$4=SetHelpers$3.has,remove$2=SetHelpers$3.remove,setDifference=function(t){var e=aSet$6(this),r=getSetRecord$6(t),n=clone$2(e);return size$4(e)<=r.size?iterateSet$2(e,function(t){r.includes(t)&&remove$2(n,t)}):iterateSimple$5(r.getIterator(),function(t){has$4(n,t)&&remove$2(n,t)}),n},getBuiltIn$4=getBuiltIn$j,createSetLike=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},createSetLikeWithInfinitySize=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},setMethodAcceptSetLike$7=function(t,e){var r=getBuiltIn$4("Set");try{(new r)[t](createSetLike(0));try{return(new r)[t](createSetLike(-1)),!1}catch(n){if(!e)return!0;try{return(new r)[t](createSetLikeWithInfinitySize(-1/0)),!1}catch(n){return e(new r([1,2])[t](createSetLikeWithInfinitySize(1/0)))}}}catch(t){return!1}},$$l=_export,difference=setDifference,fails$7=fails$t,setMethodAcceptSetLike$6=setMethodAcceptSetLike$7,SET_LIKE_INCORRECT_BEHAVIOR=!setMethodAcceptSetLike$6("difference",function(t){return 0===t.size}),FORCED$2=SET_LIKE_INCORRECT_BEHAVIOR||fails$7(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});$$l({target:"Set",proto:!0,real:!0,forced:FORCED$2},{difference:difference});var aSet$5=aSet$7,SetHelpers$2=setHelpers,size$3=setSize,getSetRecord$5=getSetRecord$7,iterateSet$1=setIterate$1,iterateSimple$4=iterateSimple$7,Set$2=SetHelpers$2.Set,add$2=SetHelpers$2.add,has$3=SetHelpers$2.has,setIntersection=function(t){var e=aSet$5(this),r=getSetRecord$5(t),n=new Set$2;return size$3(e)>r.size?iterateSimple$4(r.getIterator(),function(t){has$3(e,t)&&add$2(n,t)}):iterateSet$1(e,function(t){r.includes(t)&&add$2(n,t)}),n},$$k=_export,fails$6=fails$t,intersection=setIntersection,setMethodAcceptSetLike$5=setMethodAcceptSetLike$7,INCORRECT$3=!setMethodAcceptSetLike$5("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||fails$6(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))});$$k({target:"Set",proto:!0,real:!0,forced:INCORRECT$3},{intersection:intersection});var aSet$4=aSet$7,has$2=setHelpers.has,size$2=setSize,getSetRecord$4=getSetRecord$7,iterateSet=setIterate$1,iterateSimple$3=iterateSimple$7,iteratorClose$1=iteratorClose$h,setIsDisjointFrom=function(t){var e=aSet$4(this),r=getSetRecord$4(t);if(size$2(e)<=r.size)return!1!==iterateSet(e,function(t){if(r.includes(t))return!1},!0);var n=r.getIterator();return!1!==iterateSimple$3(n,function(t){if(has$2(e,t))return iteratorClose$1(n,"normal",!1)})},$$j=_export,isDisjointFrom=setIsDisjointFrom,setMethodAcceptSetLike$4=setMethodAcceptSetLike$7,INCORRECT$2=!setMethodAcceptSetLike$4("isDisjointFrom",function(t){return!t});$$j({target:"Set",proto:!0,real:!0,forced:INCORRECT$2},{isDisjointFrom:isDisjointFrom});var aSet$3=aSet$7,size$1=setSize,iterate$1=setIterate$1,getSetRecord$3=getSetRecord$7,setIsSubsetOf=function(t){var e=aSet$3(this),r=getSetRecord$3(t);return!(size$1(e)>r.size)&&!1!==iterate$1(e,function(t){if(!r.includes(t))return!1},!0)},$$i=_export,isSubsetOf=setIsSubsetOf,setMethodAcceptSetLike$3=setMethodAcceptSetLike$7,INCORRECT$1=!setMethodAcceptSetLike$3("isSubsetOf",function(t){return t});$$i({target:"Set",proto:!0,real:!0,forced:INCORRECT$1},{isSubsetOf:isSubsetOf});var aSet$2=aSet$7,has$1=setHelpers.has,size=setSize,getSetRecord$2=getSetRecord$7,iterateSimple$2=iterateSimple$7,iteratorClose=iteratorClose$h,setIsSupersetOf=function(t){var e=aSet$2(this),r=getSetRecord$2(t);if(size(e)<r.size)return!1;var n=r.getIterator();return!1!==iterateSimple$2(n,function(t){if(!has$1(e,t))return iteratorClose(n,"normal",!1)})},$$h=_export,isSupersetOf=setIsSupersetOf,setMethodAcceptSetLike$2=setMethodAcceptSetLike$7,INCORRECT=!setMethodAcceptSetLike$2("isSupersetOf",function(t){return!t});$$h({target:"Set",proto:!0,real:!0,forced:INCORRECT},{isSupersetOf:isSupersetOf});var aSet$1=aSet$7,SetHelpers$1=setHelpers,clone$1=setClone,getSetRecord$1=getSetRecord$7,iterateSimple$1=iterateSimple$7,add$1=SetHelpers$1.add,has=SetHelpers$1.has,remove$1=SetHelpers$1.remove,setSymmetricDifference=function(t){var e=aSet$1(this),r=getSetRecord$1(t).getIterator(),n=clone$1(e);return iterateSimple$1(r,function(t){has(e,t)?remove$1(n,t):add$1(n,t)}),n},setMethodGetKeysBeforeCloningDetection=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},n=e[t](r);return 1===n.size&&4===n.values().next().value}catch(t){return!1}},$$g=_export,symmetricDifference=setSymmetricDifference,setMethodGetKeysBeforeCloning$1=setMethodGetKeysBeforeCloningDetection,setMethodAcceptSetLike$1=setMethodAcceptSetLike$7,FORCED$1=!setMethodAcceptSetLike$1("symmetricDifference")||!setMethodGetKeysBeforeCloning$1("symmetricDifference");$$g({target:"Set",proto:!0,real:!0,forced:FORCED$1},{symmetricDifference:symmetricDifference});var aSet=aSet$7,add=setHelpers.add,clone=setClone,getSetRecord=getSetRecord$7,iterateSimple=iterateSimple$7,setUnion=function(t){var e=aSet(this),r=getSetRecord(t).getIterator(),n=clone(e);return iterateSimple(r,function(t){add(n,t)}),n},$$f=_export,union=setUnion,setMethodGetKeysBeforeCloning=setMethodGetKeysBeforeCloningDetection,setMethodAcceptSetLike=setMethodAcceptSetLike$7,FORCED=!setMethodAcceptSetLike("union")||!setMethodGetKeysBeforeCloning("union");$$f({target:"Set",proto:!0,real:!0,forced:FORCED},{union:union});var $$e=_export,uncurryThis$a=functionUncurryThis,requireObjectCoercible$1=requireObjectCoercible$9,toString$5=toString$9,charCodeAt$1=uncurryThis$a("".charCodeAt);$$e({target:"String",proto:!0},{isWellFormed:function(){for(var t=toString$5(requireObjectCoercible$1(this)),e=t.length,r=0;r<e;r++){var n=charCodeAt$1(t,r);if(55296==(63488&n)&&(n>=56320||++r>=e||56320!=(64512&charCodeAt$1(t,r))))return!1}return!0}});var $$d=_export,call$1=functionCall,uncurryThis$9=functionUncurryThis,requireObjectCoercible=requireObjectCoercible$9,toString$4=toString$9,fails$5=fails$t,$Array=Array,charAt$1=uncurryThis$9("".charAt),charCodeAt=uncurryThis$9("".charCodeAt),join=uncurryThis$9([].join),$toWellFormed="".toWellFormed,REPLACEMENT_CHARACTER="�",TO_STRING_CONVERSION_BUG=$toWellFormed&&fails$5(function(){return"1"!==call$1($toWellFormed,1)});$$d({target:"String",proto:!0,forced:TO_STRING_CONVERSION_BUG},{toWellFormed:function(){var t=toString$4(requireObjectCoercible(this));if(TO_STRING_CONVERSION_BUG)return call$1($toWellFormed,t);for(var e=t.length,r=$Array(e),n=0;n<e;n++){var a=charCodeAt(t,n);55296!=(63488&a)?r[n]=charAt$1(t,n):a>=56320||n+1>=e||56320!=(64512&charCodeAt(t,n+1))?r[n]=REPLACEMENT_CHARACTER:(r[n]=charAt$1(t,n),r[++n]=charAt$1(t,n))}return join(r,"")}});var NAME$2,Constructor,Prototype,NATIVE_ARRAY_BUFFER=arrayBufferBasicDetection,DESCRIPTORS$3=descriptors,globalThis$g=globalThis_1,isCallable$4=isCallable$l,isObject$3=isObject$e,hasOwn$5=hasOwnProperty_1,classof$3=classof$c,createNonEnumerableProperty$1=createNonEnumerableProperty$7,defineBuiltIn$2=defineBuiltIn$b,defineBuiltInAccessor$1=defineBuiltInAccessor$6,getPrototypeOf=objectGetPrototypeOf,setPrototypeOf$1=objectSetPrototypeOf,wellKnownSymbol$1=wellKnownSymbol$l,uid$1=uid$4,InternalStateModule=internalState,enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,Int8Array$1=globalThis$g.Int8Array,Int8ArrayPrototype=Int8Array$1&&Int8Array$1.prototype,Uint8ClampedArray=globalThis$g.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype,TypedArray=Int8Array$1&&getPrototypeOf(Int8Array$1),TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype),ObjectPrototype=Object.prototype,TypeError$3=globalThis$g.TypeError,TO_STRING_TAG=wellKnownSymbol$1("toStringTag"),TYPED_ARRAY_TAG=uid$1("TYPED_ARRAY_TAG"),TYPED_ARRAY_CONSTRUCTOR="TypedArrayConstructor",NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf$1&&"Opera"!==classof$3(globalThis$g.opera),TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},getTypedArrayConstructor$3=function(t){var e=getPrototypeOf(t);if(isObject$3(e)){var r=getInternalState(e);return r&&hasOwn$5(r,TYPED_ARRAY_CONSTRUCTOR)?r[TYPED_ARRAY_CONSTRUCTOR]:getTypedArrayConstructor$3(e)}},isTypedArray=function(t){if(!isObject$3(t))return!1;var e=classof$3(t);return hasOwn$5(TypedArrayConstructorsList,e)||hasOwn$5(BigIntArrayConstructorsList,e)},aTypedArray$3=function(t){if(isTypedArray(t))return t;throw new TypeError$3("Target is not a typed array")},exportTypedArrayMethod$3=function(t,e,r,n){if(DESCRIPTORS$3){if(r)for(var a in TypedArrayConstructorsList){var i=globalThis$g[a];if(i&&hasOwn$5(i.prototype,t))try{delete i.prototype[t]}catch(r){try{i.prototype[t]=e}catch(t){}}}TypedArrayPrototype[t]&&!r||defineBuiltIn$2(TypedArrayPrototype,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[t]||e,n)}};for(NAME$2 in TypedArrayConstructorsList)(Prototype=(Constructor=globalThis$g[NAME$2])&&Constructor.prototype)?enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor:NATIVE_ARRAY_BUFFER_VIEWS=!1;for(NAME$2 in BigIntArrayConstructorsList)(Prototype=(Constructor=globalThis$g[NAME$2])&&Constructor.prototype)&&(enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR]=Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable$4(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function(){throw new TypeError$3("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$2 in TypedArrayConstructorsList)globalThis$g[NAME$2]&&setPrototypeOf$1(globalThis$g[NAME$2],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS))for(NAME$2 in TypedArrayConstructorsList)globalThis$g[NAME$2]&&setPrototypeOf$1(globalThis$g[NAME$2].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&setPrototypeOf$1(Uint8ClampedArrayPrototype,TypedArrayPrototype),DESCRIPTORS$3&&!hasOwn$5(TypedArrayPrototype,TO_STRING_TAG))for(NAME$2 in defineBuiltInAccessor$1(TypedArrayPrototype,TO_STRING_TAG,{configurable:!0,get:function(){return isObject$3(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)globalThis$g[NAME$2]&&createNonEnumerableProperty$1(globalThis$g[NAME$2],TYPED_ARRAY_TAG,NAME$2);var arrayBufferViewCore={aTypedArray:aTypedArray$3,exportTypedArrayMethod:exportTypedArrayMethod$3,getTypedArrayConstructor:getTypedArrayConstructor$3,TypedArrayPrototype:TypedArrayPrototype},arrayToReversed=arrayToReversed$2,ArrayBufferViewCore$2=arrayBufferViewCore,aTypedArray$2=ArrayBufferViewCore$2.aTypedArray,exportTypedArrayMethod$2=ArrayBufferViewCore$2.exportTypedArrayMethod,getTypedArrayConstructor$2=ArrayBufferViewCore$2.getTypedArrayConstructor;exportTypedArrayMethod$2("toReversed",function(){return arrayToReversed(aTypedArray$2(this),getTypedArrayConstructor$2(this))});var ArrayBufferViewCore$1=arrayBufferViewCore,uncurryThis$8=functionUncurryThis,aCallable=aCallable$n,arrayFromConstructorAndList$1=arrayFromConstructorAndList$3,aTypedArray$1=ArrayBufferViewCore$1.aTypedArray,getTypedArrayConstructor$1=ArrayBufferViewCore$1.getTypedArrayConstructor,exportTypedArrayMethod$1=ArrayBufferViewCore$1.exportTypedArrayMethod,sort=uncurryThis$8(ArrayBufferViewCore$1.TypedArrayPrototype.sort);exportTypedArrayMethod$1("toSorted",function(t){void 0!==t&&aCallable(t);var e=aTypedArray$1(this),r=arrayFromConstructorAndList$1(getTypedArrayConstructor$1(e),e);return sort(r,t)});var classof$2=classof$c,isBigIntArray$1=function(t){var e=classof$2(t);return"BigInt64Array"===e||"BigUint64Array"===e},toPrimitive=toPrimitive$2,$TypeError$4=TypeError,toBigInt$1=function(t){var e=toPrimitive(t,"number");if("number"==typeof e)throw new $TypeError$4("Can't convert number to bigint");return BigInt(e)},arrayWith=arrayWith$2,ArrayBufferViewCore=arrayBufferViewCore,isBigIntArray=isBigIntArray$1,toIntegerOrInfinity=toIntegerOrInfinity$9,toBigInt=toBigInt$1,aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,PROPER_ORDER=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),THROW_ON_NEGATIVE_FRACTIONAL_INDEX=PROPER_ORDER&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();exportTypedArrayMethod("with",{with:function(t,e){var r=aTypedArray(this),n=toIntegerOrInfinity(t),a=isBigIntArray(r)?toBigInt(e):+e;return arrayWith(r,getTypedArrayConstructor(r),n,a)}}.with,!PROPER_ORDER||THROW_ON_NEGATIVE_FRACTIONAL_INDEX);var isObject$2=isObject$e,$String=String,$TypeError$3=TypeError,anObjectOrUndefined$2=function(t){if(void 0===t||isObject$2(t))return t;throw new $TypeError$3($String(t)+" is not an object or undefined")},commonAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",base64Alphabet$2=commonAlphabet+"+/",base64UrlAlphabet$2=commonAlphabet+"-_",inverse=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},base64Map$2={i2c:base64Alphabet$2,c2i:inverse(base64Alphabet$2),i2cUrl:base64UrlAlphabet$2,c2iUrl:inverse(base64UrlAlphabet$2)},$TypeError$2=TypeError,getAlphabetOption$2=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new $TypeError$2("Incorrect `alphabet` option")},globalThis$f=globalThis_1,uncurryThis$7=functionUncurryThis,anObjectOrUndefined$1=anObjectOrUndefined$2,aString$2=aString$4,hasOwn$4=hasOwnProperty_1,base64Map$1=base64Map$2,getAlphabetOption$1=getAlphabetOption$2,notDetached$3=arrayBufferNotDetached,base64Alphabet$1=base64Map$1.c2i,base64UrlAlphabet$1=base64Map$1.c2iUrl,SyntaxError$1=globalThis$f.SyntaxError,TypeError$2=globalThis$f.TypeError,at=uncurryThis$7("".charAt),skipAsciiWhitespace=function(t,e){for(var r=t.length;e<r;e++){var n=at(t,e);if(" "!==n&&"\t"!==n&&"\n"!==n&&"\f"!==n&&"\r"!==n)break}return e},decodeBase64Chunk=function(t,e,r){var n=t.length;n<4&&(t+=2===n?"AA":"A");var a=(e[at(t,0)]<<18)+(e[at(t,1)]<<12)+(e[at(t,2)]<<6)+e[at(t,3)],i=[a>>16&255,a>>8&255,255&a];if(2===n){if(r&&0!==i[1])throw new SyntaxError$1("Extra bits");return[i[0]]}if(3===n){if(r&&0!==i[2])throw new SyntaxError$1("Extra bits");return[i[0],i[1]]}return i},writeBytes=function(t,e,r){for(var n=e.length,a=0;a<n;a++)t[r+a]=e[a];return r+n},uint8FromBase64=function(t,e,r,n){aString$2(t),anObjectOrUndefined$1(e);var a="base64"===getAlphabetOption$1(e)?base64Alphabet$1:base64UrlAlphabet$1,i=e?e.lastChunkHandling:void 0;if(void 0===i&&(i="loose"),"loose"!==i&&"strict"!==i&&"stop-before-partial"!==i)throw new TypeError$2("Incorrect `lastChunkHandling` option");r&&notDetached$3(r.buffer);var o=t.length,s=r||[],l=0,c=0,u="",d=0;if(n)for(;;){if((d=skipAsciiWhitespace(t,d))===o){if(u.length>0){if("stop-before-partial"===i)break;if("loose"!==i)throw new SyntaxError$1("Missing padding");if(1===u.length)throw new SyntaxError$1("Malformed padding: exactly one additional character");l=writeBytes(s,decodeBase64Chunk(u,a,!1),l)}c=o;break}var h=at(t,d);if(++d,"="===h){if(u.length<2)throw new SyntaxError$1("Padding is too early");if(d=skipAsciiWhitespace(t,d),2===u.length){if(d===o){if("stop-before-partial"===i)break;throw new SyntaxError$1("Malformed padding: only one =")}"="===at(t,d)&&(++d,d=skipAsciiWhitespace(t,d))}if(d<o)throw new SyntaxError$1("Unexpected character after padding");l=writeBytes(s,decodeBase64Chunk(u,a,"strict"===i),l),c=o;break}if(!hasOwn$4(a,h))throw new SyntaxError$1("Unexpected character");var p=n-l;if(1===p&&2===u.length||2===p&&3===u.length)break;if(4===(u+=h).length&&(l=writeBytes(s,decodeBase64Chunk(u,a,!1),l),u="",c=d,l===n))break}return{bytes:s,read:c,written:l}},$$c=_export,globalThis$e=globalThis_1,arrayFromConstructorAndList=arrayFromConstructorAndList$3,$fromBase64$1=uint8FromBase64,Uint8Array$4=globalThis$e.Uint8Array,INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$3=!Uint8Array$4||!Uint8Array$4.fromBase64||!function(){try{return void Uint8Array$4.fromBase64("a")}catch(t){}try{Uint8Array$4.fromBase64("",null)}catch(t){return!0}}();Uint8Array$4&&$$c({target:"Uint8Array",stat:!0,forced:INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$3},{fromBase64:function(t){var e=$fromBase64$1(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return arrayFromConstructorAndList(Uint8Array$4,e.bytes)}});var globalThis$d=globalThis_1,uncurryThis$6=functionUncurryThis,Uint8Array$3=globalThis$d.Uint8Array,SyntaxError=globalThis$d.SyntaxError,parseInt$1=globalThis$d.parseInt,min=Math.min,NOT_HEX=/[^\da-f]/i,exec=uncurryThis$6(NOT_HEX.exec),stringSlice=uncurryThis$6("".slice),uint8FromHex=function(t,e){var r=t.length;if(r%2!=0)throw new SyntaxError("String should be an even number of characters");for(var n=e?min(e.length,r/2):r/2,a=e||new Uint8Array$3(n),i=0,o=0;o<n;){var s=stringSlice(t,i,i+=2);if(exec(NOT_HEX,s))throw new SyntaxError("String should only contain hex characters");a[o++]=parseInt$1(s,16)}return{bytes:a,read:i}},$$b=_export,globalThis$c=globalThis_1,aString$1=aString$4,$fromHex$1=uint8FromHex;globalThis$c.Uint8Array&&$$b({target:"Uint8Array",stat:!0},{fromHex:function(t){return $fromHex$1(aString$1(t)).bytes}});var classof$1=classof$c,$TypeError$1=TypeError,anUint8Array$4=function(t){if("Uint8Array"===classof$1(t))return t;throw new $TypeError$1("Argument is not an Uint8Array")},$$a=_export,globalThis$b=globalThis_1,$fromBase64=uint8FromBase64,anUint8Array$3=anUint8Array$4,Uint8Array$2=globalThis$b.Uint8Array,INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$2=!Uint8Array$2||!Uint8Array$2.prototype.setFromBase64||!function(){var t=new Uint8Array$2([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();Uint8Array$2&&$$a({target:"Uint8Array",proto:!0,forced:INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$2},{setFromBase64:function(t){anUint8Array$3(this);var e=$fromBase64(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var $$9=_export,globalThis$a=globalThis_1,aString=aString$4,anUint8Array$2=anUint8Array$4,notDetached$2=arrayBufferNotDetached,$fromHex=uint8FromHex;globalThis$a.Uint8Array&&$$9({target:"Uint8Array",proto:!0},{setFromHex:function(t){anUint8Array$2(this),aString(t),notDetached$2(this.buffer);var e=$fromHex(t,this).read;return{read:e,written:e/2}}});var $$8=_export,globalThis$9=globalThis_1,uncurryThis$5=functionUncurryThis,anObjectOrUndefined=anObjectOrUndefined$2,anUint8Array$1=anUint8Array$4,notDetached$1=arrayBufferNotDetached,base64Map=base64Map$2,getAlphabetOption=getAlphabetOption$2,base64Alphabet=base64Map.i2c,base64UrlAlphabet=base64Map.i2cUrl,charAt=uncurryThis$5("".charAt),Uint8Array$1=globalThis$9.Uint8Array,INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$1=!Uint8Array$1||!Uint8Array$1.prototype.toBase64||!function(){try{(new Uint8Array$1).toBase64(null)}catch(t){return!0}}();Uint8Array$1&&$$8({target:"Uint8Array",proto:!0,forced:INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$1},{toBase64:function(){var t=anUint8Array$1(this),e=arguments.length?anObjectOrUndefined(arguments[0]):void 0,r="base64"===getAlphabetOption(e)?base64Alphabet:base64UrlAlphabet,n=!!e&&!!e.omitPadding;notDetached$1(this.buffer);for(var a,i="",o=0,s=t.length,l=function(t){return charAt(r,a>>6*t&63)};o+2<s;o+=3)a=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i+=l(3)+l(2)+l(1)+l(0);return o+2===s?(a=(t[o]<<16)+(t[o+1]<<8),i+=l(3)+l(2)+l(1)+(n?"":"=")):o+1===s&&(a=t[o]<<16,i+=l(3)+l(2)+(n?"":"==")),i}});var $$7=_export,globalThis$8=globalThis_1,uncurryThis$4=functionUncurryThis,anUint8Array=anUint8Array$4,notDetached=arrayBufferNotDetached,numberToString=uncurryThis$4(1.1.toString),Uint8Array=globalThis$8.Uint8Array,INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS=!Uint8Array||!Uint8Array.prototype.toHex||!function(){try{return"ffffffffffffffff"===new Uint8Array([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();Uint8Array&&$$7({target:"Uint8Array",proto:!0,forced:INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS},{toHex:function(){anUint8Array(this),notDetached(this.buffer);for(var t="",e=0,r=this.length;e<r;e++){var n=numberToString(this[e],16);t+=1===n.length?"0"+n:n}return t}});var isCallable$3=isCallable$l,isObject$1=isObject$e,setPrototypeOf=objectSetPrototypeOf,inheritIfRequired$1=function(t,e,r){var n,a;return setPrototypeOf&&isCallable$3(n=e.constructor)&&n!==r&&isObject$1(a=n.prototype)&&a!==r.prototype&&setPrototypeOf(t,a),t},domExceptionConstants={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},$$6=_export,globalThis$7=globalThis_1,getBuiltIn$3=getBuiltIn$j,createPropertyDescriptor=createPropertyDescriptor$6,defineProperty=objectDefineProperty.f,hasOwn$3=hasOwnProperty_1,anInstance=anInstance$4,inheritIfRequired=inheritIfRequired$1,normalizeStringArgument=normalizeStringArgument$2,DOMExceptionConstants=domExceptionConstants,clearErrorStack=errorStackClear,DESCRIPTORS$2=descriptors,DOM_EXCEPTION="DOMException",Error$2=getBuiltIn$3("Error"),NativeDOMException=getBuiltIn$3(DOM_EXCEPTION),$DOMException=function(){anInstance(this,DOMExceptionPrototype);var t=arguments.length,e=normalizeStringArgument(t<1?void 0:arguments[0]),r=normalizeStringArgument(t<2?void 0:arguments[1],"Error"),n=new NativeDOMException(e,r),a=new Error$2(e);return a.name=DOM_EXCEPTION,defineProperty(n,"stack",createPropertyDescriptor(1,clearErrorStack(a.stack,1))),inheritIfRequired(n,this,$DOMException),n},DOMExceptionPrototype=$DOMException.prototype=NativeDOMException.prototype,ERROR_HAS_STACK="stack"in new Error$2(DOM_EXCEPTION),DOM_EXCEPTION_HAS_STACK="stack"in new NativeDOMException(1,2),descriptor=NativeDOMException&&DESCRIPTORS$2&&Object.getOwnPropertyDescriptor(globalThis$7,DOM_EXCEPTION),BUGGY_DESCRIPTOR=!(!descriptor||descriptor.writable&&descriptor.configurable),FORCED_CONSTRUCTOR=ERROR_HAS_STACK&&!BUGGY_DESCRIPTOR&&!DOM_EXCEPTION_HAS_STACK;$$6({global:!0,constructor:!0,forced:FORCED_CONSTRUCTOR},{DOMException:FORCED_CONSTRUCTOR?$DOMException:NativeDOMException});var PolyfilledDOMException=getBuiltIn$3(DOM_EXCEPTION),PolyfilledDOMExceptionPrototype=PolyfilledDOMException.prototype;if(PolyfilledDOMExceptionPrototype.constructor!==PolyfilledDOMException)for(var key in defineProperty(PolyfilledDOMExceptionPrototype,"constructor",createPropertyDescriptor(1,PolyfilledDOMException)),DOMExceptionConstants)if(hasOwn$3(DOMExceptionConstants,key)){var constant$4=DOMExceptionConstants[key],constantName=constant$4.s;hasOwn$3(PolyfilledDOMException,constantName)||defineProperty(PolyfilledDOMException,constantName,createPropertyDescriptor(6,constant$4.c))}var $location,defer,channel,port,$TypeError=TypeError,validateArgumentsLength$7=function(t,e){if(t<e)throw new $TypeError("Not enough arguments");return t},userAgent=environmentUserAgent,environmentIsIos=/(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent),globalThis$6=globalThis_1,apply$1=functionApply,bind=functionBindContext,isCallable$2=isCallable$l,hasOwn$2=hasOwnProperty_1,fails$4=fails$t,html=html$2,arraySlice$1=arraySlice$2,createElement=documentCreateElement$1,validateArgumentsLength$6=validateArgumentsLength$7,IS_IOS=environmentIsIos,IS_NODE=environmentIsNode,set$2=globalThis$6.setImmediate,clear=globalThis$6.clearImmediate,process=globalThis$6.process,Dispatch$1=globalThis$6.Dispatch,Function$2=globalThis$6.Function,MessageChannel=globalThis$6.MessageChannel,String$1=globalThis$6.String,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange";fails$4(function(){$location=globalThis$6.location});var run=function(t){if(hasOwn$2(queue,t)){var e=queue[t];delete queue[t],e()}},runner=function(t){return function(){run(t)}},eventListener=function(t){run(t.data)},globalPostMessageDefer=function(t){globalThis$6.postMessage(String$1(t),$location.protocol+"//"+$location.host)};set$2&&clear||(set$2=function(t){validateArgumentsLength$6(arguments.length,1);var e=isCallable$2(t)?t:Function$2(t),r=arraySlice$1(arguments,1);return queue[++counter]=function(){apply$1(e,void 0,r)},defer(counter),counter},clear=function(t){delete queue[t]},IS_NODE?defer=function(t){process.nextTick(runner(t))}:Dispatch$1&&Dispatch$1.now?defer=function(t){Dispatch$1.now(runner(t))}:MessageChannel&&!IS_IOS?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=eventListener,defer=bind(port.postMessage,port)):globalThis$6.addEventListener&&isCallable$2(globalThis$6.postMessage)&&!globalThis$6.importScripts&&$location&&"file:"!==$location.protocol&&!fails$4(globalPostMessageDefer)?(defer=globalPostMessageDefer,globalThis$6.addEventListener("message",eventListener,!1)):defer=ONREADYSTATECHANGE in createElement("script")?function(t){html.appendChild(createElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(t)}}:function(t){setTimeout(runner(t),0)});var task={set:set$2,clear:clear},$$5=_export,globalThis$5=globalThis_1,clearImmediate=task.clear;$$5({global:!0,bind:!0,enumerable:!0,forced:globalThis$5.clearImmediate!==clearImmediate},{clearImmediate:clearImmediate});var globalThis$4=globalThis_1,apply=functionApply,isCallable$1=isCallable$l,ENVIRONMENT=environment,USER_AGENT=environmentUserAgent,arraySlice=arraySlice$2,validateArgumentsLength$5=validateArgumentsLength$7,Function$1=globalThis$4.Function,WRAP=/MSIE .\./.test(USER_AGENT)||"BUN"===ENVIRONMENT&&function(){var t=globalThis$4.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),schedulersFix$1=function(t,e){var r=e?2:1;return WRAP?function(n,a){var i=validateArgumentsLength$5(arguments.length,1)>r,o=isCallable$1(n)?n:Function$1(n),s=i?arraySlice(arguments,r):[],l=i?function(){apply(o,this,s)}:o;return e?t(l,a):t(l)}:t},$$4=_export,globalThis$3=globalThis_1,setTask=task.set,schedulersFix=schedulersFix$1,setImmediate=globalThis$3.setImmediate?schedulersFix(setTask,!1):setTask;$$4({global:!0,bind:!0,enumerable:!0,forced:globalThis$3.setImmediate!==setImmediate},{setImmediate:setImmediate});var globalThis$2=globalThis_1,fails$3=fails$t,RegExp$1=globalThis$2.RegExp,FLAGS_GETTER_IS_CORRECT=!fails$3(function(){var t=!0;try{RegExp$1(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",a=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(i.hasIndices="d"),i)a(o,i[o]);return Object.getOwnPropertyDescriptor(RegExp$1.prototype,"flags").get.call(e)!==n||r!==n}),regexpFlagsDetection={correct:FLAGS_GETTER_IS_CORRECT},anObject$1=anObject$s,regexpFlags=function(){var t=anObject$1(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},call=functionCall,hasOwn$1=hasOwnProperty_1,isPrototypeOf=objectIsPrototypeOf,regExpFlagsDetection=regexpFlagsDetection,regExpFlagsGetterImplementation=regexpFlags,RegExpPrototype=RegExp.prototype,regexpGetFlags=regExpFlagsDetection.correct?function(t){return t.flags}:function(t){return regExpFlagsDetection.correct||!isPrototypeOf(RegExpPrototype,t)||hasOwn$1(t,"flags")?t.flags:call(regExpFlagsGetterImplementation,t)},$$3=_export,globalThis$1=globalThis_1,getBuiltIn$2=getBuiltIn$j,uncurryThis$3=functionUncurryThis,fails$2=fails$t,uid=uid$4,isCallable=isCallable$l,isConstructor=isConstructor$2,isNullOrUndefined=isNullOrUndefined$5,isObject=isObject$e,isSymbol=isSymbol$3,iterate=iterate$c,anObject=anObject$s,classof=classof$c,hasOwn=hasOwnProperty_1,createProperty=createProperty$3,createNonEnumerableProperty=createNonEnumerableProperty$7,lengthOfArrayLike=lengthOfArrayLike$8,validateArgumentsLength$4=validateArgumentsLength$7,getRegExpFlags=regexpGetFlags,MapHelpers=mapHelpers,SetHelpers=setHelpers,setIterate=setIterate$1,detachTransferable=detachTransferable$2,ERROR_STACK_INSTALLABLE=errorStackInstallable,PROPER_STRUCTURED_CLONE_TRANSFER=structuredCloneProperTransfer,Object$1=globalThis$1.Object,Array$1=globalThis$1.Array,Date$1=globalThis$1.Date,Error$1=globalThis$1.Error,TypeError$1=globalThis$1.TypeError,PerformanceMark=globalThis$1.PerformanceMark,DOMException=getBuiltIn$2("DOMException"),Map$1=MapHelpers.Map,mapHas=MapHelpers.has,mapGet=MapHelpers.get,mapSet=MapHelpers.set,Set$1=SetHelpers.Set,setAdd=SetHelpers.add,setHas=SetHelpers.has,objectKeys=getBuiltIn$2("Object","keys"),push$1=uncurryThis$3([].push),thisBooleanValue=uncurryThis$3((!0).valueOf),thisNumberValue=uncurryThis$3(1.1.valueOf),thisStringValue=uncurryThis$3("".valueOf),thisTimeValue=uncurryThis$3(Date$1.prototype.getTime),PERFORMANCE_MARK=uid("structuredClone"),DATA_CLONE_ERROR="DataCloneError",TRANSFERRING="Transferring",checkBasicSemantic=function(t){return!fails$2(function(){var e=new globalThis$1.Set([7]),r=t(e),n=t(Object$1(7));return r===e||!r.has(7)||!isObject(n)||7!==+n})&&t},checkErrorsCloning=function(t,e){return!fails$2(function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)})},checkNewErrorsCloningSemantic=function(t){return!fails$2(function(){var e=t(new globalThis$1.AggregateError([1],PERFORMANCE_MARK,{cause:3}));return"AggregateError"!==e.name||1!==e.errors[0]||e.message!==PERFORMANCE_MARK||3!==e.cause})},nativeStructuredClone=globalThis$1.structuredClone,FORCED_REPLACEMENT=!checkErrorsCloning(nativeStructuredClone,Error$1)||!checkErrorsCloning(nativeStructuredClone,DOMException)||!checkNewErrorsCloningSemantic(nativeStructuredClone),structuredCloneFromMark=!nativeStructuredClone&&checkBasicSemantic(function(t){return new PerformanceMark(PERFORMANCE_MARK,{detail:t}).detail}),nativeRestrictedStructuredClone=checkBasicSemantic(nativeStructuredClone)||structuredCloneFromMark,throwUncloneable=function(t){throw new DOMException("Uncloneable type: "+t,DATA_CLONE_ERROR)},throwUnpolyfillable=function(t,e){throw new DOMException((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",DATA_CLONE_ERROR)},tryNativeRestrictedStructuredClone=function(t,e){return nativeRestrictedStructuredClone||throwUnpolyfillable(e),nativeRestrictedStructuredClone(t)},createDataTransfer=function(){var t;try{t=new globalThis$1.DataTransfer}catch(e){try{t=new globalThis$1.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null},cloneBuffer=function(t,e,r){if(mapHas(e,t))return mapGet(e,t);var n,a,i,o,s,l;if("SharedArrayBuffer"===(r||classof(t)))n=nativeRestrictedStructuredClone?nativeRestrictedStructuredClone(t):t;else{var c=globalThis$1.DataView;c||isCallable(t.slice)||throwUnpolyfillable("ArrayBuffer");try{if(isCallable(t.slice)&&!t.resizable)n=t.slice(0);else{a=t.byteLength,i="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(a,i),o=new c(t),s=new c(n);for(l=0;l<a;l++)s.setUint8(l,o.getUint8(l))}}catch(t){throw new DOMException("ArrayBuffer is detached",DATA_CLONE_ERROR)}}return mapSet(e,t,n),n},cloneView=function(t,e,r,n,a){var i=globalThis$1[e];return isObject(i)||throwUnpolyfillable(e),new i(cloneBuffer(t.buffer,a),r,n)},structuredCloneInternal=function(t,e){if(isSymbol(t)&&throwUncloneable("Symbol"),!isObject(t))return t;if(e){if(mapHas(e,t))return mapGet(e,t)}else e=new Map$1;var r,n,a,i,o,s,l,c,u=classof(t);switch(u){case"Array":a=Array$1(lengthOfArrayLike(t));break;case"Object":a={};break;case"Map":a=new Map$1;break;case"Set":a=new Set$1;break;case"RegExp":a=new RegExp(t.source,getRegExpFlags(t));break;case"Error":switch(n=t.name){case"AggregateError":a=new(getBuiltIn$2(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":a=new(getBuiltIn$2(n));break;case"CompileError":case"LinkError":case"RuntimeError":a=new(getBuiltIn$2("WebAssembly",n));break;default:a=new Error$1}break;case"DOMException":a=new DOMException(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":a=cloneBuffer(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":s="DataView"===u?t.byteLength:t.length,a=cloneView(t,u,t.byteOffset,s,e);break;case"DOMQuad":try{a=new DOMQuad(structuredCloneInternal(t.p1,e),structuredCloneInternal(t.p2,e),structuredCloneInternal(t.p3,e),structuredCloneInternal(t.p4,e))}catch(e){a=tryNativeRestrictedStructuredClone(t,u)}break;case"File":if(nativeRestrictedStructuredClone)try{a=nativeRestrictedStructuredClone(t),classof(a)!==u&&(a=void 0)}catch(t){}if(!a)try{a=new File([t],t.name,t)}catch(t){}a||throwUnpolyfillable(u);break;case"FileList":if(i=createDataTransfer()){for(o=0,s=lengthOfArrayLike(t);o<s;o++)i.items.add(structuredCloneInternal(t[o],e));a=i.files}else a=tryNativeRestrictedStructuredClone(t,u);break;case"ImageData":try{a=new ImageData(structuredCloneInternal(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){a=tryNativeRestrictedStructuredClone(t,u)}break;default:if(nativeRestrictedStructuredClone)a=nativeRestrictedStructuredClone(t);else switch(u){case"BigInt":a=Object$1(t.valueOf());break;case"Boolean":a=Object$1(thisBooleanValue(t));break;case"Number":a=Object$1(thisNumberValue(t));break;case"String":a=Object$1(thisStringValue(t));break;case"Date":a=new Date$1(thisTimeValue(t));break;case"Blob":try{a=t.slice(0,t.size,t.type)}catch(t){throwUnpolyfillable(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=globalThis$1[u];try{a=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){throwUnpolyfillable(u)}break;case"DOMRect":case"DOMRectReadOnly":r=globalThis$1[u];try{a=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){throwUnpolyfillable(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=globalThis$1[u];try{a=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){throwUnpolyfillable(u)}break;case"AudioData":case"VideoFrame":isCallable(t.clone)||throwUnpolyfillable(u);try{a=t.clone()}catch(t){throwUncloneable(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":throwUnpolyfillable(u);default:throwUncloneable(u)}}switch(mapSet(e,t,a),u){case"Array":case"Object":for(l=objectKeys(t),o=0,s=lengthOfArrayLike(l);o<s;o++)c=l[o],createProperty(a,c,structuredCloneInternal(t[c],e));break;case"Map":t.forEach(function(t,r){mapSet(a,structuredCloneInternal(r,e),structuredCloneInternal(t,e))});break;case"Set":t.forEach(function(t){setAdd(a,structuredCloneInternal(t,e))});break;case"Error":createNonEnumerableProperty(a,"message",structuredCloneInternal(t.message,e)),hasOwn(t,"cause")&&createNonEnumerableProperty(a,"cause",structuredCloneInternal(t.cause,e)),"AggregateError"===n?a.errors=structuredCloneInternal(t.errors,e):"SuppressedError"===n&&(a.error=structuredCloneInternal(t.error,e),a.suppressed=structuredCloneInternal(t.suppressed,e));case"DOMException":ERROR_STACK_INSTALLABLE&&createNonEnumerableProperty(a,"stack",structuredCloneInternal(t.stack,e))}return a},tryToTransfer=function(t,e){if(!isObject(t))throw new TypeError$1("Transfer option cannot be converted to a sequence");var r=[];iterate(t,function(t){push$1(r,anObject(t))});for(var n,a,i,o,s,l=0,c=lengthOfArrayLike(r),u=new Set$1;l<c;){if(n=r[l++],"ArrayBuffer"===(a=classof(n))?setHas(u,n):mapHas(e,n))throw new DOMException("Duplicate transferable",DATA_CLONE_ERROR);if("ArrayBuffer"!==a){if(PROPER_STRUCTURED_CLONE_TRANSFER)o=nativeStructuredClone(n,{transfer:[n]});else switch(a){case"ImageBitmap":i=globalThis$1.OffscreenCanvas,isConstructor(i)||throwUnpolyfillable(a,TRANSFERRING);try{(s=new i(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),o=s.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":isCallable(n.clone)&&isCallable(n.close)||throwUnpolyfillable(a,TRANSFERRING);try{o=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":throwUnpolyfillable(a,TRANSFERRING)}if(void 0===o)throw new DOMException("This object cannot be transferred: "+a,DATA_CLONE_ERROR);mapSet(e,n,o)}else setAdd(u,n)}return u},detachBuffers=function(t){setIterate(t,function(t){PROPER_STRUCTURED_CLONE_TRANSFER?nativeRestrictedStructuredClone(t,{transfer:[t]}):isCallable(t.transfer)?t.transfer():detachTransferable?detachTransferable(t):throwUnpolyfillable("ArrayBuffer",TRANSFERRING)})};$$3({global:!0,enumerable:!0,sham:!PROPER_STRUCTURED_CLONE_TRANSFER,forced:FORCED_REPLACEMENT},{structuredClone:function(t){var e,r,n=validateArgumentsLength$4(arguments.length,1)>1&&!isNullOrUndefined(arguments[1])?anObject(arguments[1]):void 0,a=n?n.transfer:void 0;void 0!==a&&(e=new Map$1,r=tryToTransfer(a,e));var i=structuredCloneInternal(t,e);return r&&detachBuffers(r),i}});var fails$1=fails$t,wellKnownSymbol=wellKnownSymbol$l,DESCRIPTORS$1=descriptors,IS_PURE=isPure,ITERATOR=wellKnownSymbol("iterator"),urlConstructorDetection=!fails$1(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),n+=r+t}),r.delete("a",2),r.delete("b",void 0),IS_PURE&&(!t.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!e.size&&(IS_PURE||!DESCRIPTORS$1)||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[ITERATOR]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==n||"x"!==new URL("https://x",void 0).host}),$$2=_export,getBuiltIn$1=getBuiltIn$j,fails=fails$t,validateArgumentsLength$3=validateArgumentsLength$7,toString$3=toString$9,USE_NATIVE_URL$1=urlConstructorDetection,URL$2=getBuiltIn$1("URL"),THROWS_WITHOUT_ARGUMENTS=USE_NATIVE_URL$1&&fails(function(){URL$2.canParse()}),WRONG_ARITY=fails(function(){return 1!==URL$2.canParse.length});$$2({target:"URL",stat:!0,forced:!THROWS_WITHOUT_ARGUMENTS||WRONG_ARITY},{canParse:function(t){var e=validateArgumentsLength$3(arguments.length,1),r=toString$3(t),n=e<2||void 0===arguments[1]?void 0:toString$3(arguments[1]);try{return!!new URL$2(r,n)}catch(t){return!1}}});var $$1=_export,getBuiltIn=getBuiltIn$j,validateArgumentsLength$2=validateArgumentsLength$7,toString$2=toString$9,USE_NATIVE_URL=urlConstructorDetection,URL$1=getBuiltIn("URL");$$1({target:"URL",stat:!0,forced:!USE_NATIVE_URL},{parse:function(t){var e=validateArgumentsLength$2(arguments.length,1),r=toString$2(t),n=e<2||void 0===arguments[1]?void 0:toString$2(arguments[1]);try{return new URL$1(r,n)}catch(t){return null}}});var defineBuiltIn$1=defineBuiltIn$b,uncurryThis$2=functionUncurryThis,toString$1=toString$9,validateArgumentsLength$1=validateArgumentsLength$7,$URLSearchParams$1=URLSearchParams,URLSearchParamsPrototype$2=$URLSearchParams$1.prototype,append$1=uncurryThis$2(URLSearchParamsPrototype$2.append),$delete=uncurryThis$2(URLSearchParamsPrototype$2.delete),forEach$1=uncurryThis$2(URLSearchParamsPrototype$2.forEach),push=uncurryThis$2([].push),params$1=new $URLSearchParams$1("a=1&a=2&b=3");params$1.delete("a",1),params$1.delete("b",void 0),params$1+""!="a=2"&&defineBuiltIn$1(URLSearchParamsPrototype$2,"delete",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $delete(this,t);var n=[];forEach$1(this,function(t,e){push(n,{key:e,value:t})}),validateArgumentsLength$1(e,1);for(var a,i=toString$1(t),o=toString$1(r),s=0,l=0,c=!1,u=n.length;s<u;)a=n[s++],c||a.key===i?(c=!0,$delete(this,a.key)):l++;for(;l<u;)(a=n[l++]).key===i&&a.value===o||append$1(this,a.key,a.value)},{enumerable:!0,unsafe:!0});var defineBuiltIn=defineBuiltIn$b,uncurryThis$1=functionUncurryThis,toString=toString$9,validateArgumentsLength=validateArgumentsLength$7,$URLSearchParams=URLSearchParams,URLSearchParamsPrototype$1=$URLSearchParams.prototype,getAll=uncurryThis$1(URLSearchParamsPrototype$1.getAll),$has=uncurryThis$1(URLSearchParamsPrototype$1.has),params=new $URLSearchParams("a=1");!params.has("a",2)&&params.has("a",void 0)||defineBuiltIn(URLSearchParamsPrototype$1,"has",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return $has(this,t);var n=getAll(this,t);validateArgumentsLength(e,1);for(var a=toString(r),i=0;i<n.length;)if(n[i++]===a)return!0;return!1},{enumerable:!0,unsafe:!0});var DESCRIPTORS=descriptors,uncurryThis=functionUncurryThis,defineBuiltInAccessor=defineBuiltInAccessor$6,URLSearchParamsPrototype=URLSearchParams.prototype,forEach=uncurryThis(URLSearchParamsPrototype.forEach);DESCRIPTORS&&!("size"in URLSearchParamsPrototype)&&defineBuiltInAccessor(URLSearchParamsPrototype,"size",{get:function(){var t=0;return forEach(this,function(){t++}),t},configurable:!0,enumerable:!0});const elementMap=new Map;var Data={set(t,e,r){elementMap.has(t)||elementMap.set(t,new Map);const n=elementMap.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>elementMap.has(t)&&elementMap.get(t).get(e)||null,remove(t,e){if(!elementMap.has(t))return;const r=elementMap.get(t);r.delete(e),0===r.size&&elementMap.delete(t)}};const MILLISECONDS_MULTIPLIER=1e3,TRANSITION_END="transitionend",parseSelector=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),toType=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),getTransitionDurationFromElement=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),a=Number.parseFloat(r);return n||a?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0},triggerTransitionEnd=t=>{t.dispatchEvent(new Event(TRANSITION_END))},isElement=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),getElement=t=>isElement(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(parseSelector(t)):null,isVisible=t=>{if(!isElement(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e},isDisabled=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),reflow=t=>{t.offsetHeight},getjQuery=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,DOMContentLoadedCallbacks=[],onDOMContentLoaded=t=>{"loading"===document.readyState?(DOMContentLoadedCallbacks.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of DOMContentLoadedCallbacks)t()}),DOMContentLoadedCallbacks.push(t)):t()},defineJQueryPlugin=t=>{onDOMContentLoaded(()=>{const e=getjQuery();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}})},execute=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,executeAfterTransition=(t,e,r=!0)=>{if(!r)return void execute(t);const n=getTransitionDurationFromElement(e)+5;let a=!1;const i=({target:r})=>{r===e&&(a=!0,e.removeEventListener(TRANSITION_END,i),execute(t))};e.addEventListener(TRANSITION_END,i),setTimeout(()=>{a||triggerTransitionEnd(e)},n)},namespaceRegex=/[^.]*(?=\..*)\.|.*/,stripNameRegex=/\..*/,stripUidRegex=/::\d+$/,eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"},nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function makeEventUid(t,e){return e&&`${e}::${uidEvent++}`||t.uidEvent||uidEvent++}function getElementEvents(t){const e=makeEventUid(t);return t.uidEvent=e,eventRegistry[e]=eventRegistry[e]||{},eventRegistry[e]}function bootstrapHandler(t,e){return function r(n){return hydrateObj(n,{delegateTarget:t}),r.oneOff&&EventHandler.off(t,n.type,e),e.apply(t,[n])}}function bootstrapDelegationHandler(t,e,r){return function n(a){const i=t.querySelectorAll(e);for(let{target:o}=a;o&&o!==this;o=o.parentNode)for(const s of i)if(s===o)return hydrateObj(a,{delegateTarget:o}),n.oneOff&&EventHandler.off(t,a.type,e,r),r.apply(o,[a])}}function findHandler(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function normalizeParameters(t,e,r){const n="string"==typeof e,a=n?r:e||r;let i=getTypeEvent(t);return nativeEvents.has(i)||(i=t),[n,a,i]}function addHandler(t,e,r,n,a){if("string"!=typeof e||!t)return;let[i,o,s]=normalizeParameters(e,r,n);if(e in customEvents){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o=t(o)}const l=getElementEvents(t),c=l[s]||(l[s]={}),u=findHandler(c,o,i?r:null);if(u)return void(u.oneOff=u.oneOff&&a);const d=makeEventUid(o,e.replace(namespaceRegex,"")),h=i?bootstrapDelegationHandler(t,r,o):bootstrapHandler(t,o);h.delegationSelector=i?r:null,h.callable=o,h.oneOff=a,h.uidEvent=d,c[d]=h,t.addEventListener(s,h,i)}function removeHandler(t,e,r,n,a){const i=findHandler(e[r],n,a);i&&(t.removeEventListener(r,i,Boolean(a)),delete e[r][i.uidEvent])}function removeNamespacedHandlers(t,e,r,n){const a=e[r]||{};for(const[i,o]of Object.entries(a))i.includes(n)&&removeHandler(t,e,r,o.callable,o.delegationSelector)}function getTypeEvent(t){return t=t.replace(stripNameRegex,""),customEvents[t]||t}const EventHandler={on(t,e,r,n){addHandler(t,e,r,n,!1)},one(t,e,r,n){addHandler(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[a,i,o]=normalizeParameters(e,r,n),s=o!==e,l=getElementEvents(t),c=l[o]||{},u=e.startsWith(".");if(void 0===i){if(u)for(const r of Object.keys(l))removeNamespacedHandlers(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const a=r.replace(stripUidRegex,"");s&&!e.includes(a)||removeHandler(t,l,o,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;removeHandler(t,l,o,i,a?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=getjQuery();let a=null,i=!0,o=!0,s=!1;e!==getTypeEvent(e)&&n&&(a=n.Event(e,r),n(t).trigger(a),i=!a.isPropagationStopped(),o=!a.isImmediatePropagationStopped(),s=a.isDefaultPrevented());const l=hydrateObj(new Event(e,{bubbles:i,cancelable:!0}),r);return s&&l.preventDefault(),o&&t.dispatchEvent(l),l.defaultPrevented&&a&&a.preventDefault(),l}};function hydrateObj(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function normalizeData(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function normalizeDataKey(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Manipulator={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${normalizeDataKey(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${normalizeDataKey(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=normalizeData(t.dataset[n])}return e},getDataAttribute:(t,e)=>normalizeData(t.getAttribute(`data-bs-${normalizeDataKey(e)}`))};class Config{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=isElement(e)?Manipulator.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...isElement(e)?Manipulator.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],a=isElement(e)?"element":toType(e);if(!new RegExp(n).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${n}".`)}}}const VERSION="5.3.8";class BaseComponent extends Config{constructor(t,e){super(),(t=getElement(t))&&(this._element=t,this._config=this._getConfig(e),Data.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Data.remove(this._element,this.constructor.DATA_KEY),EventHandler.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){executeAfterTransition(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Data.get(getElement(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const NAME$1="button",DATA_KEY$1="bs.button",EVENT_KEY$1=`.${DATA_KEY$1}`,DATA_API_KEY$1=".data-api",CLASS_NAME_ACTIVE="active",SELECTOR_DATA_TOGGLE$1='[data-bs-toggle="button"]',EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$1}.data-api`;class Button extends BaseComponent{static get NAME(){return NAME$1}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=Button.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE$1,t=>{t.preventDefault();const e=t.target.closest(SELECTOR_DATA_TOGGLE$1);Button.getOrCreateInstance(e).toggle()}),defineJQueryPlugin(Button);const getSelector=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>parseSelector(t)).join(","):null},SelectorEngine={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!isDisabled(t)&&isVisible(t))},getSelectorFromElement(t){const e=getSelector(t);return e&&SelectorEngine.findOne(e)?e:null},getElementFromSelector(t){const e=getSelector(t);return e?SelectorEngine.findOne(e):null},getMultipleElementsFromSelector(t){const e=getSelector(t);return e?SelectorEngine.find(e):[]}},NAME="collapse",DATA_KEY="bs.collapse",EVENT_KEY=`.${DATA_KEY}`,DATA_API_KEY=".data-api",EVENT_SHOW=`show${EVENT_KEY}`,EVENT_SHOWN=`shown${EVENT_KEY}`,EVENT_HIDE=`hide${EVENT_KEY}`,EVENT_HIDDEN=`hidden${EVENT_KEY}`,EVENT_CLICK_DATA_API=`click${EVENT_KEY}.data-api`,CLASS_NAME_SHOW="show",CLASS_NAME_COLLAPSE="collapse",CLASS_NAME_COLLAPSING="collapsing",CLASS_NAME_COLLAPSED="collapsed",CLASS_NAME_DEEPER_CHILDREN=":scope .collapse .collapse",CLASS_NAME_HORIZONTAL="collapse-horizontal",WIDTH="width",HEIGHT="height",SELECTOR_ACTIVES=".collapse.show, .collapse.collapsing",SELECTOR_DATA_TOGGLE='[data-bs-toggle="collapse"]',Default={parent:null,toggle:!0},DefaultType={parent:"(null|element)",toggle:"boolean"};class Collapse extends BaseComponent{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=SelectorEngine.find(SELECTOR_DATA_TOGGLE);for(const t of r){const e=SelectorEngine.getSelectorFromElement(t),r=SelectorEngine.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(t=>t!==this._element).map(t=>Collapse.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(EventHandler.trigger(this._element,EVENT_SHOW).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[e]="",EventHandler.trigger(this._element,EVENT_SHOWN)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(EventHandler.trigger(this._element,EVENT_HIDE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,reflow(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");for(const t of this._triggerArray){const e=SelectorEngine.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),EventHandler.trigger(this._element,EVENT_HIDDEN)},this._element,!0)}_isShown(t=this._element){return t.classList.contains("show")}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=getElement(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?WIDTH:HEIGHT}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);for(const e of t){const t=SelectorEngine.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);return SelectorEngine.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=Collapse.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(t,{toggle:!1}).toggle()}),defineJQueryPlugin(Collapse);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$2=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(e$2&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o$4.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o$4.set(e,t))}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new n$2(r,t,s$2)},S$1=(t,e)=>{if(e$2)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),n=t$1.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return r$2(e)})(t):t,{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$3,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,e)=>t,u$1={toAttribute(t,e){switch(e){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f$1=(t,e)=>!i$2(t,e),b$1={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$2=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b$1){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&e$1(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:a}=h$1(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const i=n?.call(this);a?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,e=[...r$1(t),...o$3(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c$2(t))}else void 0!==t&&e.push(c$2(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const a=(void 0!==r.converter?.toAttribute?r.converter:u$1).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=n;const i=a.fromAttribute(e,t.type);this[n]=i??this._$Ej?.get(n)??i,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const n=this.constructor,a=this[t];if(r??=n.getPropertyOptions(t),!((r.hasChanged??f$1)(a,e)||r.useDefault&&r.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:a},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==a||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y$2.elementStyles=[],y$2.shadowRootOptions={mode:"open"},y$2[d$1("elementProperties")]=new Map,y$2[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$2}),(a$1.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n=`<${o$2}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y$1=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x$1=y$1(1),b=y$1(2),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,e){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(e):e}const V=(t,r)=>{const a=t.length-1,i=[];let o,s=2===r?"<svg>":3===r?"<math>":"",l=f;for(let r=0;r<a;r++){const a=t[r];let c,u,d=-1,y=0;for(;y<a.length&&(l.lastIndex=y,u=l.exec(a),null!==u);)y=l.lastIndex,l===f?"!--"===u[1]?l=v:void 0!==u[1]?l=_:void 0!==u[2]?($.test(u[2])&&(o=RegExp("</"+u[2],"g")),l=m):void 0!==u[3]&&(l=m):l===m?">"===u[0]?(l=o??f,d=-1):void 0===u[1]?d=-2:(d=l.lastIndex-u[2].length,c=u[1],l=void 0===u[3]?m:'"'===u[3]?g:p):l===g||l===p?l=m:l===v||l===_?l=f:(l=m,o=void 0);const b=l===m&&t[r+1].startsWith("/>")?" ":"";s+=l===f?a+n:d>=0?(i.push(c),a.slice(0,d)+e+a.slice(d)+h+b):a+h+(-2===d?r:b)}return[P(t,s+(t[a]||"<?>")+(2===r?"</svg>":3===r?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:r},n){let a;this.parts=[];let i=0,o=0;const s=t.length-1,c=this.parts,[u,d]=V(t,r);if(this.el=N.createElement(u,n),C.currentNode=this.el.content,2===r||3===r){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=C.nextNode())&&c.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(e)){const e=d[o++],r=a.getAttribute(t).split(h),n=/([.?@])?(.*)/.exec(e);c.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?H:"?"===n[1]?I:"@"===n[1]?L:k}),a.removeAttribute(t)}else t.startsWith(h)&&(c.push({type:6,index:i}),a.removeAttribute(t));if($.test(a.tagName)){const t=a.textContent.split(h),e=t.length-1;if(e>0){a.textContent=i$1?i$1.emptyScript:"";for(let r=0;r<e;r++)a.append(t[r],l()),C.nextNode(),c.push({type:2,index:++i});a.append(t[e],l())}}}else if(8===a.nodeType)if(a.data===o$2)c.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(h,t+1));)c.push({type:7,index:i}),t+=h.length-1}i++}}static createElement(t,e){const n=r.createElement("template");return n.innerHTML=t,n}}function S(t,e,r=t,n){if(e===T)return e;let a=void 0!==n?r._$Co?.[n]:r._$Cl;const i=c(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(t),a._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=a:r._$Cl=a),void 0!==a&&(e=S(t,a._$AS(t,e.values),a,n)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,a=(t?.creationScope??r).importNode(e,!0);C.currentNode=a;let i=C.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new R(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new z(i,this,t)),this._$AV.push(e),l=n[++s]}o!==l?.index&&(i=C.nextNode(),o++)}return C.currentNode=r,a}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=N.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new M(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=A.get(t.strings);return void 0===e&&A.set(t.strings,e=new N(t)),e}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const a of t)n===e.length?e.push(r=new R(this.O(l()),this.O(l()),this,this.options)):r=e[n],r._$AI(a),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,e=this,r,n){const a=this.strings;let i=!1;if(void 0===a)t=S(this,t,e,0),i=!c(t)||t!==this._$AH&&t!==T,i&&(this._$AH=t);else{const n=t;let o,s;for(t=a[0],o=0;o<a.length-1;o++)s=S(this,n[r+o],e,o),s===T&&(s=this._$AH[o]),i||=!c(s)||s!==this._$AH[o],s===E?t=E:t!==E&&(t+=(s??"")+a[o+1]),this._$AH[o]=s}i&&!n&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,e,r,n,a){super(t,e,r,n,a),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??E)===T)return;const r=this._$AH,n=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==E&&(r===E||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.3.1");const B=(t,e,r)=>{const n=r?.renderBefore??e;let a=n._$litPart$;if(void 0===a){const t=r?.renderBefore??null;n._$litPart$=a=new R(e.insertBefore(l(),t),t,void 0,r??{})}return a._$AI(t),a},s=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends y$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}i._$litElement$=!0,i.finalized=!0,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;function ascending$1(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function descending(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function bisector(t){let e,r,n;function a(t,n,a=0,i=t.length){if(a<i){if(0!==e(n,n))return i;do{const e=a+i>>>1;r(t[e],n)<0?a=e+1:i=e}while(a<i)}return a}return 2!==t.length?(e=ascending$1,r=(e,r)=>ascending$1(t(e),r),n=(e,r)=>t(e)-r):(e=t===ascending$1||t===descending?t:zero$1,r=t,n=t),{left:a,center:function(t,e,r=0,i=t.length){const o=a(t,e,r,i-1);return o>r&&n(t[o-1],e)>-n(t[o],e)?o-1:o},right:function(t,n,a=0,i=t.length){if(a<i){if(0!==e(n,n))return i;do{const e=a+i>>>1;r(t[e],n)<=0?a=e+1:i=e}while(a<i)}return a}}}function zero$1(){return 0}function number$2(t){return null===t?NaN:+t}o$1?.({LitElement:i}),(s.litElementVersions??=[]).push("4.2.1");const ascendingBisect=bisector(ascending$1),bisectRight=ascendingBisect.right;bisector(number$2).center;const e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function tickSpec(t,e,r){const n=(e-t)/Math.max(0,r),a=Math.floor(Math.log10(n)),i=n/Math.pow(10,a),o=i>=e10?10:i>=e5?5:i>=e2?2:1;let s,l,c;return a<0?(c=Math.pow(10,-a)/o,s=Math.round(t*c),l=Math.round(e*c),s/c<t&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,a)*o,s=Math.round(t/c),l=Math.round(e/c),s*c<t&&++s,l*c>e&&--l),l<s&&.5<=r&&r<2?tickSpec(t,e,2*r):[s,l,c]}function ticks(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[a,i,o]=n?tickSpec(e,t,r):tickSpec(t,e,r);if(!(i>=a))return[];const s=i-a+1,l=new Array(s);if(n)if(o<0)for(let t=0;t<s;++t)l[t]=(i-t)/-o;else for(let t=0;t<s;++t)l[t]=(i-t)*o;else if(o<0)for(let t=0;t<s;++t)l[t]=(a+t)/-o;else for(let t=0;t<s;++t)l[t]=(a+t)*o;return l}function tickIncrement(t,e,r){return tickSpec(t=+t,e=+e,r=+r)[2]}function tickStep(t,e,r){r=+r;const n=(e=+e)<(t=+t),a=n?tickIncrement(e,t,r):tickIncrement(t,e,r);return(n?-1:1)*(a<0?1/-a:a)}function identity$3(t){return t}var top=1,right=2,bottom=3,left=4,epsilon$1=1e-6;function translateX(t){return"translate("+t+",0)"}function translateY(t){return"translate(0,"+t+")"}function number$1(t){return e=>+t(e)}function center(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function entering(){return!this.__axis}function axis(t,e){var r=[],n=null,a=null,i=6,o=6,s=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=t===top||t===left?-1:1,u=t===left||t===right?"x":"y",d=t===top||t===bottom?translateX:translateY;function h(h){var p=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,g=null==a?e.tickFormat?e.tickFormat.apply(e,r):identity$3:a,y=Math.max(i,0)+s,b=e.range(),f=+b[0]+l,$=+b[b.length-1]+l,m=(e.bandwidth?center:number$1)(e.copy(),l),I=h.selection?h.selection():h,E=I.selectAll(".domain").data([null]),A=I.selectAll(".tick").data(p,e).order(),C=A.exit(),v=A.enter().append("g").attr("class","tick"),S=A.select("line"),B=A.select("text");E=E.merge(E.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(v),S=S.merge(v.append("line").attr("stroke","currentColor").attr(u+"2",c*i)),B=B.merge(v.append("text").attr("fill","currentColor").attr(u,c*y).attr("dy",t===top?"0em":t===bottom?"0.71em":"0.32em")),h!==I&&(E=E.transition(h),A=A.transition(h),S=S.transition(h),B=B.transition(h),C=C.transition(h).attr("opacity",epsilon$1).attr("transform",function(t){return isFinite(t=m(t))?d(t+l):this.getAttribute("transform")}),v.attr("opacity",epsilon$1).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:m(t))+l)})),C.remove(),E.attr("d",t===left||t===right?o?"M"+c*o+","+f+"H"+l+"V"+$+"H"+c*o:"M"+l+","+f+"V"+$:o?"M"+f+","+c*o+"V"+l+"H"+$+"V"+c*o:"M"+f+","+l+"H"+$),A.attr("opacity",1).attr("transform",function(t){return d(m(t)+l)}),S.attr(u+"2",c*i),B.attr(u,c*y).text(g),I.filter(entering).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===right?"start":t===left?"end":"middle"),I.each(function(){this.__axis=m})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return r=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),h):r.slice()},h.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),h):n&&n.slice()},h.tickFormat=function(t){return arguments.length?(a=t,h):a},h.tickSize=function(t){return arguments.length?(i=o=+t,h):i},h.tickSizeInner=function(t){return arguments.length?(i=+t,h):i},h.tickSizeOuter=function(t){return arguments.length?(o=+t,h):o},h.tickPadding=function(t){return arguments.length?(s=+t,h):s},h.offset=function(t){return arguments.length?(l=+t,h):l},h}function axisRight(t){return axis(right,t)}function axisBottom(t){return axis(bottom,t)}function axisLeft(t){return axis(left,t)}var noop={value:()=>{}};function dispatch(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Dispatch(n)}function Dispatch(t){this._=t}function parseTypenames$1(t,e){return t.trim().split(/^|\s+/).map(function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}function get$1(t,e){for(var r,n=0,a=t.length;n<a;++n)if((r=t[n]).name===e)return r.value}function set$1(t,e,r){for(var n=0,a=t.length;n<a;++n)if(t[n].name===e){t[n]=noop,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function(t,e){var r,n=this._,a=parseTypenames$1(t+"",n),i=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++i<o;)if(r=(t=a[i]).type)n[r]=set$1(n[r],t.name,e);else if(null==e)for(r in n)n[r]=set$1(n[r],t.name,null);return this}for(;++i<o;)if((r=(t=a[i]).type)&&(r=get$1(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Dispatch(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,a=new Array(r),i=0;i<r;++i)a[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,r=(n=this._[t]).length;i<r;++i)n[i].value.apply(e,a)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],a=0,i=n.length;a<i;++a)n[a].value.apply(e,r)}};var xhtml="http://www.w3.org/1999/xhtml",namespaces={svg:"http://www.w3.org/2000/svg",xhtml:xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),namespaces.hasOwnProperty(e)?{space:namespaces[e],local:t}:t}function creatorInherit(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===xhtml&&e.documentElement.namespaceURI===xhtml?e.createElement(t):e.createElementNS(r,t)}}function creatorFixed(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function creator(t){var e=namespace(t);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(t){return null==t?none:function(){return this.querySelector(t)}}function selection_select(t){"function"!=typeof t&&(t=selector(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o,s=e[a],l=s.length,c=n[a]=new Array(l),u=0;u<l;++u)(i=s[u])&&(o=t.call(i,i.__data__,u,s))&&("__data__"in i&&(o.__data__=i.__data__),c[u]=o);return new Selection$1(n,this._parents)}function array$1(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function empty(){return[]}function selectorAll(t){return null==t?empty:function(){return this.querySelectorAll(t)}}function arrayAll(t){return function(){return array$1(t.apply(this,arguments))}}function selection_selectAll(t){t="function"==typeof t?arrayAll(t):selectorAll(t);for(var e=this._groups,r=e.length,n=[],a=[],i=0;i<r;++i)for(var o,s=e[i],l=s.length,c=0;c<l;++c)(o=s[c])&&(n.push(t.call(o,o.__data__,c,s)),a.push(o));return new Selection$1(n,a)}function matcher(t){return function(){return this.matches(t)}}function childMatcher(t){return function(e){return e.matches(t)}}var find=Array.prototype.find;function childFind(t){return function(){return find.call(this.children,t)}}function childFirst(){return this.firstElementChild}function selection_selectChild(t){return this.select(null==t?childFirst:childFind("function"==typeof t?t:childMatcher(t)))}var filter=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(t){return function(){return filter.call(this.children,t)}}function selection_selectChildren(t){return this.selectAll(null==t?children:childrenFilter("function"==typeof t?t:childMatcher(t)))}function selection_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o=e[a],s=o.length,l=n[a]=[],c=0;c<s;++c)(i=o[c])&&t.call(i,i.__data__,c,o)&&l.push(i);return new Selection$1(n,this._parents)}function sparse(t){return new Array(t.length)}function selection_enter(){return new Selection$1(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function constant$3(t){return function(){return t}}function bindIndex(t,e,r,n,a,i){for(var o,s=0,l=e.length,c=i.length;s<c;++s)(o=e[s])?(o.__data__=i[s],n[s]=o):r[s]=new EnterNode(t,i[s]);for(;s<l;++s)(o=e[s])&&(a[s]=o)}function bindKey(t,e,r,n,a,i,o){var s,l,c,u=new Map,d=e.length,h=i.length,p=new Array(d);for(s=0;s<d;++s)(l=e[s])&&(p[s]=c=o.call(l,l.__data__,s,e)+"",u.has(c)?a[s]=l:u.set(c,l));for(s=0;s<h;++s)c=o.call(t,i[s],s,i)+"",(l=u.get(c))?(n[s]=l,l.__data__=i[s],u.delete(c)):r[s]=new EnterNode(t,i[s]);for(s=0;s<d;++s)(l=e[s])&&u.get(p[s])===l&&(a[s]=l)}function datum(t){return t.__data__}function selection_data(t,e){if(!arguments.length)return Array.from(this,datum);var r=e?bindKey:bindIndex,n=this._parents,a=this._groups;"function"!=typeof t&&(t=constant$3(t));for(var i=a.length,o=new Array(i),s=new Array(i),l=new Array(i),c=0;c<i;++c){var u=n[c],d=a[c],h=d.length,p=arraylike(t.call(u,u&&u.__data__,c,n)),g=p.length,y=s[c]=new Array(g),b=o[c]=new Array(g);r(u,d,y,b,l[c]=new Array(h),p,e);for(var f,$,m=0,I=0;m<g;++m)if(f=y[m]){for(m>=I&&(I=m+1);!($=b[I])&&++I<g;);f._next=$||null}}return(o=new Selection$1(o,n))._enter=s,o._exit=l,o}function arraylike(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function selection_exit(){return new Selection$1(this._exit||this._groups.map(sparse),this._parents)}function selection_join(t,e,r){var n=this.enter(),a=this,i=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(a=e(a))&&(a=a.selection()),null==r?i.remove():r(i),n&&a?n.merge(a).order():a}function selection_merge(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,a=r.length,i=n.length,o=Math.min(a,i),s=new Array(a),l=0;l<o;++l)for(var c,u=r[l],d=n[l],h=u.length,p=s[l]=new Array(h),g=0;g<h;++g)(c=u[g]||d[g])&&(p[g]=c);for(;l<a;++l)s[l]=r[l];return new Selection$1(s,this._parents)}function selection_order(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,a=t[e],i=a.length-1,o=a[i];--i>=0;)(n=a[i])&&(o&&4^n.compareDocumentPosition(o)&&o.parentNode.insertBefore(n,o),o=n);return this}function selection_sort(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ascending);for(var r=this._groups,n=r.length,a=new Array(n),i=0;i<n;++i){for(var o,s=r[i],l=s.length,c=a[i]=new Array(l),u=0;u<l;++u)(o=s[u])&&(c[u]=o);c.sort(e)}return new Selection$1(a,this._parents).order()}function ascending(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function selection_call(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],a=0,i=n.length;a<i;++a){var o=n[a];if(o)return o}return null}function selection_size(){let t=0;for(const e of this)++t;return t}function selection_empty(){return!this.node()}function selection_each(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var a,i=e[r],o=0,s=i.length;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this}function attrRemove$1(t){return function(){this.removeAttribute(t)}}function attrRemoveNS$1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant$1(t,e){return function(){this.setAttribute(t,e)}}function attrConstantNS$1(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function attrFunction$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function attrFunctionNS$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function selection_attr(t,e){var r=namespace(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?attrRemoveNS$1:attrRemove$1:"function"==typeof e?r.local?attrFunctionNS$1:attrFunction$1:r.local?attrConstantNS$1:attrConstant$1)(r,e))}function defaultView(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function styleRemove$1(t){return function(){this.style.removeProperty(t)}}function styleConstant$1(t,e,r){return function(){this.style.setProperty(t,e,r)}}function styleFunction$1(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function selection_style(t,e,r){return arguments.length>1?this.each((null==e?styleRemove$1:"function"==typeof e?styleFunction$1:styleConstant$1)(t,e,null==r?"":r)):styleValue(this.node(),t)}function styleValue(t,e){return t.style.getPropertyValue(e)||defaultView(t).getComputedStyle(t,null).getPropertyValue(e)}function propertyRemove(t){return function(){delete this[t]}}function propertyConstant(t,e){return function(){this[t]=e}}function propertyFunction(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function selection_property(t,e){return arguments.length>1?this.each((null==e?propertyRemove:"function"==typeof e?propertyFunction:propertyConstant)(t,e)):this.node()[t]}function classArray(t){return t.trim().split(/^|\s+/)}function classList(t){return t.classList||new ClassList(t)}function ClassList(t){this._node=t,this._names=classArray(t.getAttribute("class")||"")}function classedAdd(t,e){for(var r=classList(t),n=-1,a=e.length;++n<a;)r.add(e[n])}function classedRemove(t,e){for(var r=classList(t),n=-1,a=e.length;++n<a;)r.remove(e[n])}function classedTrue(t){return function(){classedAdd(this,t)}}function classedFalse(t){return function(){classedRemove(this,t)}}function classedFunction(t,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,t)}}function selection_classed(t,e){var r=classArray(t+"");if(arguments.length<2){for(var n=classList(this.node()),a=-1,i=r.length;++a<i;)if(!n.contains(r[a]))return!1;return!0}return this.each(("function"==typeof e?classedFunction:e?classedTrue:classedFalse)(r,e))}function textRemove(){this.textContent=""}function textConstant$1(t){return function(){this.textContent=t}}function textFunction$1(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function selection_text(t){return arguments.length?this.each(null==t?textRemove:("function"==typeof t?textFunction$1:textConstant$1)(t)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(t){return function(){this.innerHTML=t}}function htmlFunction(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function selection_html(t){return arguments.length?this.each(null==t?htmlRemove:("function"==typeof t?htmlFunction:htmlConstant)(t)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(t){var e="function"==typeof t?t:creator(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function constantNull(){return null}function selection_insert(t,e){var r="function"==typeof t?t:creator(t),n=null==e?constantNull:"function"==typeof e?e:selector(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})}function remove(){var t=this.parentNode;t&&t.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_cloneDeep(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_clone(t){return this.select(t?selection_cloneDeep:selection_cloneShallow)}function selection_datum(t){return arguments.length?this.property("__data__",t):this.node().__data__}function contextListener(t){return function(e){t.call(this,e,this.__data__)}}function parseTypenames(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function onRemove(t){return function(){var e=this.__on;if(e){for(var r,n=0,a=-1,i=e.length;n<i;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++a]=r:this.removeEventListener(r.type,r.listener,r.options);++a?e.length=a:delete this.__on}}}function onAdd(t,e,r){return function(){var n,a=this.__on,i=contextListener(e);if(a)for(var o=0,s=a.length;o<s;++o)if((n=a[o]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=i,n.options=r),void(n.value=e);this.addEventListener(t.type,i,r),n={type:t.type,name:t.name,value:e,listener:i,options:r},a?a.push(n):this.__on=[n]}}function selection_on(t,e,r){var n,a,i=parseTypenames(t+""),o=i.length;if(!(arguments.length<2)){for(s=e?onAdd:onRemove,n=0;n<o;++n)this.each(s(i[n],e,r));return this}var s=this.node().__on;if(s)for(var l,c=0,u=s.length;c<u;++c)for(n=0,l=s[c];n<o;++n)if((a=i[n]).type===l.type&&a.name===l.name)return l.value}function dispatchEvent(t,e,r){var n=defaultView(t),a=n.CustomEvent;"function"==typeof a?a=new a(e,r):(a=n.document.createEvent("Event"),r?(a.initEvent(e,r.bubbles,r.cancelable),a.detail=r.detail):a.initEvent(e,!1,!1)),t.dispatchEvent(a)}function dispatchConstant(t,e){return function(){return dispatchEvent(this,t,e)}}function dispatchFunction(t,e){return function(){return dispatchEvent(this,t,e.apply(this,arguments))}}function selection_dispatch(t,e){return this.each(("function"==typeof e?dispatchFunction:dispatchConstant)(t,e))}function*selection_iterator(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,a=t[e],i=0,o=a.length;i<o;++i)(n=a[i])&&(yield n)}EnterNode.prototype={constructor:EnterNode,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ClassList.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var root=[null];function Selection$1(t,e){this._groups=t,this._parents=e}function selection(){return new Selection$1([[document.documentElement]],root)}function selection_selection(){return this}function select(t){return"string"==typeof t?new Selection$1([[document.querySelector(t)]],[document.documentElement]):new Selection$1([[t]],root)}Selection$1.prototype=selection.prototype={constructor:Selection$1,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};var nextId=0;function local(){return new Local}function Local(){this._="@"+(++nextId).toString(36)}function sourceEvent(t){let e;for(;e=t.sourceEvent;)t=e;return t}function pointer(t,e){if(t=sourceEvent(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var a=e.getBoundingClientRect();return[t.clientX-a.left-e.clientLeft,t.clientY-a.top-e.clientTop]}}return[t.pageX,t.pageY]}Local.prototype=local.prototype={constructor:Local,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const nonpassive={passive:!1},nonpassivecapture={capture:!0,passive:!1};function nopropagation(t){t.stopImmediatePropagation()}function noevent(t){t.preventDefault(),t.stopImmediatePropagation()}function dragDisable(t){var e=t.document.documentElement,r=select(t).on("dragstart.drag",noevent,nonpassivecapture);"onselectstart"in e?r.on("selectstart.drag",noevent,nonpassivecapture):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function yesdrag(t,e){var r=t.document.documentElement,n=select(t).on("dragstart.drag",null);e&&(n.on("click.drag",noevent,nonpassivecapture),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var constant$2=t=>()=>t;function DragEvent(t,{sourceEvent:e,subject:r,target:n,identifier:a,active:i,x:o,y:s,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:a,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function defaultFilter(t){return!t.ctrlKey&&!t.button}function defaultContainer(){return this.parentNode}function defaultSubject(t,e){return null==e?{x:t.x,y:t.y}:e}function defaultTouchable(){return navigator.maxTouchPoints||"ontouchstart"in this}function drag(){var t,e,r,n,a=defaultFilter,i=defaultContainer,o=defaultSubject,s=defaultTouchable,l={},c=dispatch("start","drag","end"),u=0,d=0;function h(t){t.on("mousedown.drag",p).filter(s).on("touchstart.drag",b).on("touchmove.drag",f,nonpassive).on("touchend.drag touchcancel.drag",$).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(o,s){if(!n&&a.call(this,o,s)){var l=m(this,i.call(this,o,s),o,s,"mouse");l&&(select(o.view).on("mousemove.drag",g,nonpassivecapture).on("mouseup.drag",y,nonpassivecapture),dragDisable(o.view),nopropagation(o),r=!1,t=o.clientX,e=o.clientY,l("start",o))}}function g(n){if(noevent(n),!r){var a=n.clientX-t,i=n.clientY-e;r=a*a+i*i>d}l.mouse("drag",n)}function y(t){select(t.view).on("mousemove.drag mouseup.drag",null),yesdrag(t.view,r),noevent(t),l.mouse("end",t)}function b(t,e){if(a.call(this,t,e)){var r,n,o=t.changedTouches,s=i.call(this,t,e),l=o.length;for(r=0;r<l;++r)(n=m(this,s,t,e,o[r].identifier,o[r]))&&(nopropagation(t),n("start",t,o[r]))}}function f(t){var e,r,n=t.changedTouches,a=n.length;for(e=0;e<a;++e)(r=l[n[e].identifier])&&(noevent(t),r("drag",t,n[e]))}function $(t){var e,r,a=t.changedTouches,i=a.length;for(n&&clearTimeout(n),n=setTimeout(function(){n=null},500),e=0;e<i;++e)(r=l[a[e].identifier])&&(nopropagation(t),r("end",t,a[e]))}function m(t,e,r,n,a,i){var s,d,p,g=c.copy(),y=pointer(i||r,e);if(null!=(p=o.call(t,new DragEvent("beforestart",{sourceEvent:r,target:h,identifier:a,active:u,x:y[0],y:y[1],dx:0,dy:0,dispatch:g}),n)))return s=p.x-y[0]||0,d=p.y-y[1]||0,function r(i,o,c){var b,f=y;switch(i){case"start":l[a]=r,b=u++;break;case"end":delete l[a],--u;case"drag":y=pointer(c||o,e),b=u}g.call(i,t,new DragEvent(i,{sourceEvent:o,subject:p,target:h,identifier:a,active:b,x:y[0]+s,y:y[1]+d,dx:y[0]-f[0],dy:y[1]-f[1],dispatch:g}),n)}}return h.filter=function(t){return arguments.length?(a="function"==typeof t?t:constant$2(!!t),h):a},h.container=function(t){return arguments.length?(i="function"==typeof t?t:constant$2(t),h):i},h.subject=function(t){return arguments.length?(o="function"==typeof t?t:constant$2(t),h):o},h.touchable=function(t){return arguments.length?(s="function"==typeof t?t:constant$2(!!t),h):s},h.on=function(){var t=c.on.apply(c,arguments);return t===c?h:t},h.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,h):Math.sqrt(d)},h}function define(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function extend(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function Color(){}DragEvent.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatHex8(){return this.rgb().formatHex8()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?rgbn(e):3===r?new Rgb(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?rgba(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):"transparent"===t?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,255&t,1)}function rgba(t,e,r,n){return n<=0&&(t=e=r=NaN),new Rgb(t,e,r,n)}function rgbConvert(t){return t instanceof Color||(t=color(t)),t?new Rgb((t=t.rgb()).r,t.g,t.b,t.opacity):new Rgb}function rgb(t,e,r,n){return 1===arguments.length?rgbConvert(t):new Rgb(t,e,r,null==n?1:n)}function Rgb(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`}function rgb_formatRgb(){const t=clampa(this.opacity);return`${1===t?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===t?")":`, ${t})`}`}function clampa(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function clampi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hex(t){return((t=clampi(t))<16?"0":"")+t.toString(16)}function hsla(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,r,n)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,a=Math.min(e,r,n),i=Math.max(e,r,n),o=NaN,s=i-a,l=(i+a)/2;return s?(o=e===i?(r-n)/s+6*(r<n):r===i?(n-e)/s+2:(e-r)/s+4,s/=l<.5?i+a:2-i-a,o*=60):s=l>0&&l<1?0:o,new Hsl(o,s,l,t.opacity)}function hsl(t,e,r,n){return 1===arguments.length?hslConvert(t):new Hsl(t,e,r,null==n?1:n)}function Hsl(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function clamph(t){return(t=(t||0)%360)<0?t+360:t}function clampt(t){return Math.max(0,Math.min(1,t||0))}function hsl2rgb(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}define(Color,color,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:color_formatHex8,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb}),define(Rgb,rgb,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:rgb_formatHex8,formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),define(Hsl,hsl,extend(Color,{brighter(t){return t=null==t?brighter:Math.pow(brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?darker:Math.pow(darker,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,a=2*r-n;return new Rgb(hsl2rgb(t>=240?t-240:t+120,a,n),hsl2rgb(t,a,n),hsl2rgb(t<120?t+240:t-120,a,n),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=clampa(this.opacity);return`${1===t?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===t?")":`, ${t})`}`}}));var constant$1=t=>()=>t;function linear$2(t,e){return function(r){return t+r*e}}function exponential(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function gamma(t){return 1===(t=+t)?nogamma:function(e,r){return r-e?exponential(e,r,t):constant$1(isNaN(e)?r:e)}}function nogamma(t,e){var r=e-t;return r?linear$2(t,r):constant$1(isNaN(t)?e:t)}var interpolateRgb=function t(e){var r=gamma(e);function n(t,e){var n=r((t=rgb(t)).r,(e=rgb(e)).r),a=r(t.g,e.g),i=r(t.b,e.b),o=nogamma(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=a(e),t.b=i(e),t.opacity=o(e),t+""}}return n.gamma=t,n}(1);function numberArray(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,a=e.slice();return function(i){for(r=0;r<n;++r)a[r]=t[r]*(1-i)+e[r]*i;return a}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,e){var r,n=e?e.length:0,a=t?Math.min(n,t.length):0,i=new Array(a),o=new Array(n);for(r=0;r<a;++r)i[r]=interpolate$1(t[r],e[r]);for(;r<n;++r)o[r]=e[r];return function(t){for(r=0;r<a;++r)o[r]=i[r](t);return o}}function date(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function interpolateNumber(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function object(t,e){var r,n={},a={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=interpolate$1(t[r],e[r]):a[r]=e[r];return function(t){for(r in n)a[r]=n[r](t);return a}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(t){return function(){return t}}function one(t){return function(e){return t(e)+""}}function interpolateString(t,e){var r,n,a,i=reA.lastIndex=reB.lastIndex=0,o=-1,s=[],l=[];for(t+="",e+="";(r=reA.exec(t))&&(n=reB.exec(e));)(a=n.index)>i&&(a=e.slice(i,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(n=n[0])?s[o]?s[o]+=n:s[++o]=n:(s[++o]=null,l.push({i:o,x:interpolateNumber(r,n)})),i=reB.lastIndex;return i<e.length&&(a=e.slice(i),s[o]?s[o]+=a:s[++o]=a),s.length<2?l[0]?one(l[0].x):zero(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)s[(r=l[n]).i]=r.x(t);return s.join("")})}function interpolate$1(t,e){var r,n=typeof e;return null==e||"boolean"===n?constant$1(e):("number"===n?interpolateNumber:"string"===n?(r=color(e))?(e=r,interpolateRgb):interpolateString:e instanceof color?interpolateRgb:e instanceof Date?date:isNumberArray(e)?numberArray:Array.isArray(e)?genericArray:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?object:interpolateNumber)(t,e)}function interpolateRound(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var svgNode,degrees=180/Math.PI,identity$2={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(t,e,r,n,a,i){var o,s,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,l/=s),t*n<e*r&&(t=-t,e=-e,l=-l,o=-o),{translateX:a,translateY:i,rotate:Math.atan2(e,t)*degrees,skewX:Math.atan(l)*degrees,scaleX:o,scaleY:s}}function parseCss(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?identity$2:decompose(e.a,e.b,e.c,e.d,e.e,e.f)}function parseSvg(t){return null==t?identity$2:(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",t),(t=svgNode.transform.baseVal.consolidate())?decompose((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):identity$2)}function interpolateTransform(t,e,r,n){function a(t){return t.length?t.pop()+" ":""}return function(i,o){var s=[],l=[];return i=t(i),o=t(o),function(t,n,a,i,o,s){if(t!==a||n!==i){var l=o.push("translate(",null,e,null,r);s.push({i:l-4,x:interpolateNumber(t,a)},{i:l-2,x:interpolateNumber(n,i)})}else(a||i)&&o.push("translate("+a+e+i+r)}(i.translateX,i.translateY,o.translateX,o.translateY,s,l),function(t,e,r,i){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),i.push({i:r.push(a(r)+"rotate(",null,n)-2,x:interpolateNumber(t,e)})):e&&r.push(a(r)+"rotate("+e+n)}(i.rotate,o.rotate,s,l),function(t,e,r,i){t!==e?i.push({i:r.push(a(r)+"skewX(",null,n)-2,x:interpolateNumber(t,e)}):e&&r.push(a(r)+"skewX("+e+n)}(i.skewX,o.skewX,s,l),function(t,e,r,n,i,o){if(t!==r||e!==n){var s=i.push(a(i)+"scale(",null,",",null,")");o.push({i:s-4,x:interpolateNumber(t,r)},{i:s-2,x:interpolateNumber(e,n)})}else 1===r&&1===n||i.push(a(i)+"scale("+r+","+n+")")}(i.scaleX,i.scaleY,o.scaleX,o.scaleY,s,l),i=o=null,function(t){for(var e,r=-1,n=l.length;++r<n;)s[(e=l[r]).i]=e.x(t);return s.join("")}}}var taskHead,taskTail,interpolateTransformCss=interpolateTransform(parseCss,"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform(parseSvg,", ",")",")"),frame=0,timeout$1=0,interval$1=0,pokeDelay=1e3,clockLast=0,clockNow=0,clockSkew=0,clock="object"==typeof performance&&performance.now?performance:Date,setFrame="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}function timer(t,e,r){var n=new Timer;return n.restart(t,e,r),n}function timerFlush(){now(),++frame;for(var t,e=taskHead;e;)(t=clockNow-e._time)>=0&&e._call.call(void 0,t),e=e._next;--frame}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{timerFlush()}finally{frame=0,nap(),clockNow=0}}function poke(){var t=clock.now(),e=t-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=t)}function nap(){for(var t,e,r=taskHead,n=1/0;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:taskHead=e);taskTail=t,sleep(n)}function sleep(t){frame||(timeout$1&&(timeout$1=clearTimeout(timeout$1)),t-clockNow>24?(t<1/0&&(timeout$1=setTimeout(wake,t-clock.now()-clockSkew)),interval$1&&(interval$1=clearInterval(interval$1))):(interval$1||(clockLast=clock.now(),interval$1=setInterval(poke,pokeDelay)),frame=1,setFrame(wake)))}function timeout(t,e,r){var n=new Timer;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}function interval(t,e,r){var n=new Timer,a=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?now():+r,n._restart(function i(o){o+=a,n._restart(i,a+=e,r),t(o)},e,r)},n.restart(t,e,r),n}Timer.prototype=timer.prototype={constructor:Timer,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?now():+r)+(null==e?0:+e),this._next||taskTail===this||(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=t,this._time=r,sleep()},stop:function(){this._call&&(this._call=null,this._time=1/0,sleep())}};var emptyOn=dispatch("start","end","cancel","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(t,e,r,n,a,i){var o=t.__transition;if(o){if(r in o)return}else t.__transition={};create(t,r,{name:e,index:n,group:a,on:emptyOn,tween:emptyTween,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:CREATED})}function init(t,e){var r=get(t,e);if(r.state>CREATED)throw new Error("too late; already scheduled");return r}function set(t,e){var r=get(t,e);if(r.state>STARTED)throw new Error("too late; already running");return r}function get(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function create(t,e,r){var n,a=t.__transition;function i(l){var c,u,d,h;if(r.state!==SCHEDULED)return s();for(c in a)if((h=a[c]).name===r.name){if(h.state===STARTED)return timeout(i);h.state===RUNNING?(h.state=ENDED,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete a[c]):+c<e&&(h.state=ENDED,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete a[c])}if(timeout(function(){r.state===STARTED&&(r.state=RUNNING,r.timer.restart(o,r.delay,r.time),o(l))}),r.state=STARTING,r.on.call("start",t,t.__data__,r.index,r.group),r.state===STARTING){for(r.state=STARTED,n=new Array(d=r.tween.length),c=0,u=-1;c<d;++c)(h=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=h);n.length=u+1}}function o(e){for(var a=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(s),r.state=ENDING,1),i=-1,o=n.length;++i<o;)n[i].call(t,a);r.state===ENDING&&(r.on.call("end",t,t.__data__,r.index,r.group),s())}function s(){for(var n in r.state=ENDED,r.timer.stop(),delete a[e],a)return;delete t.__transition}a[e]=r,r.timer=timer(function(t){r.state=SCHEDULED,r.timer.restart(i,r.delay,r.time),r.delay<=t&&i(t-r.delay)},0,r.time)}function interrupt(t,e){var r,n,a,i=t.__transition,o=!0;if(i){for(a in e=null==e?null:e+"",i)(r=i[a]).name===e?(n=r.state>STARTING&&r.state<ENDING,r.state=ENDED,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete i[a]):o=!1;o&&delete t.__transition}}function selection_interrupt(t){return this.each(function(){interrupt(this,t)})}function tweenRemove(t,e){var r,n;return function(){var a=set(this,t),i=a.tween;if(i!==r)for(var o=0,s=(n=r=i).length;o<s;++o)if(n[o].name===e){(n=n.slice()).splice(o,1);break}a.tween=n}}function tweenFunction(t,e,r){var n,a;if("function"!=typeof r)throw new Error;return function(){var i=set(this,t),o=i.tween;if(o!==n){a=(n=o).slice();for(var s={name:e,value:r},l=0,c=a.length;l<c;++l)if(a[l].name===e){a[l]=s;break}l===c&&a.push(s)}i.tween=a}}function transition_tween(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,a=get(this.node(),r).tween,i=0,o=a.length;i<o;++i)if((n=a[i]).name===t)return n.value;return null}return this.each((null==e?tweenRemove:tweenFunction)(r,t,e))}function tweenValue(t,e,r){var n=t._id;return t.each(function(){var t=set(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return get(t,n).value[e]}}function interpolate(t,e){var r;return("number"==typeof e?interpolateNumber:e instanceof color?interpolateRgb:(r=color(e))?(e=r,interpolateRgb):interpolateString)(t,e)}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e,r){var n,a,i=r+"";return function(){var o=this.getAttribute(t);return o===i?null:o===n?a:a=e(n=o,r)}}function attrConstantNS(t,e,r){var n,a,i=r+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===n?a:a=e(n=o,r)}}function attrFunction(t,e,r){var n,a,i;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttribute(t))===(s=l+"")?null:o===n&&s===a?i:(a=s,i=e(n=o,l));this.removeAttribute(t)}}function attrFunctionNS(t,e,r){var n,a,i;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttributeNS(t.space,t.local))===(s=l+"")?null:o===n&&s===a?i:(a=s,i=e(n=o,l));this.removeAttributeNS(t.space,t.local)}}function transition_attr(t,e){var r=namespace(t),n="transform"===r?interpolateTransformSvg:interpolate;return this.attrTween(t,"function"==typeof e?(r.local?attrFunctionNS:attrFunction)(r,n,tweenValue(this,"attr."+t,e)):null==e?(r.local?attrRemoveNS:attrRemove)(r):(r.local?attrConstantNS:attrConstant)(r,n,e))}function attrInterpolate(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}function attrInterpolateNS(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}function attrTweenNS(t,e){var r,n;function a(){var a=e.apply(this,arguments);return a!==n&&(r=(n=a)&&attrInterpolateNS(t,a)),r}return a._value=e,a}function attrTween(t,e){var r,n;function a(){var a=e.apply(this,arguments);return a!==n&&(r=(n=a)&&attrInterpolate(t,a)),r}return a._value=e,a}function transition_attrTween(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=namespace(t);return this.tween(r,(n.local?attrTweenNS:attrTween)(n,e))}function delayFunction(t,e){return function(){init(this,t).delay=+e.apply(this,arguments)}}function delayConstant(t,e){return e=+e,function(){init(this,t).delay=e}}function transition_delay(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?delayFunction:delayConstant)(e,t)):get(this.node(),e).delay}function durationFunction(t,e){return function(){set(this,t).duration=+e.apply(this,arguments)}}function durationConstant(t,e){return e=+e,function(){set(this,t).duration=e}}function transition_duration(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?durationFunction:durationConstant)(e,t)):get(this.node(),e).duration}function easeConstant(t,e){if("function"!=typeof e)throw new Error;return function(){set(this,t).ease=e}}function transition_ease(t){var e=this._id;return arguments.length?this.each(easeConstant(e,t)):get(this.node(),e).ease}function easeVarying(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;set(this,t).ease=r}}function transition_easeVarying(t){if("function"!=typeof t)throw new Error;return this.each(easeVarying(this._id,t))}function transition_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o=e[a],s=o.length,l=n[a]=[],c=0;c<s;++c)(i=o[c])&&t.call(i,i.__data__,c,o)&&l.push(i);return new Transition(n,this._parents,this._name,this._id)}function transition_merge(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,a=r.length,i=Math.min(n,a),o=new Array(n),s=0;s<i;++s)for(var l,c=e[s],u=r[s],d=c.length,h=o[s]=new Array(d),p=0;p<d;++p)(l=c[p]||u[p])&&(h[p]=l);for(;s<n;++s)o[s]=e[s];return new Transition(o,this._parents,this._name,this._id)}function start(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}function onFunction(t,e,r){var n,a,i=start(e)?init:set;return function(){var o=i(this,t),s=o.on;s!==n&&(a=(n=s).copy()).on(e,r),o.on=a}}function transition_on(t,e){var r=this._id;return arguments.length<2?get(this.node(),r).on.on(t):this.each(onFunction(r,t,e))}function removeFunction(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}function transition_remove(){return this.on("end.remove",removeFunction(this._id))}function transition_select(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selector(t));for(var n=this._groups,a=n.length,i=new Array(a),o=0;o<a;++o)for(var s,l,c=n[o],u=c.length,d=i[o]=new Array(u),h=0;h<u;++h)(s=c[h])&&(l=t.call(s,s.__data__,h,c))&&("__data__"in s&&(l.__data__=s.__data__),d[h]=l,schedule(d[h],e,r,h,d,get(s,r)));return new Transition(i,this._parents,e,r)}function transition_selectAll(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selectorAll(t));for(var n=this._groups,a=n.length,i=[],o=[],s=0;s<a;++s)for(var l,c=n[s],u=c.length,d=0;d<u;++d)if(l=c[d]){for(var h,p=t.call(l,l.__data__,d,c),g=get(l,r),y=0,b=p.length;y<b;++y)(h=p[y])&&schedule(h,e,r,y,p,g);i.push(p),o.push(l)}return new Transition(i,o,e,r)}var Selection=selection.prototype.constructor;function transition_selection(){return new Selection(this._groups,this._parents)}function styleNull(t,e){var r,n,a;return function(){var i=styleValue(this,t),o=(this.style.removeProperty(t),styleValue(this,t));return i===o?null:i===r&&o===n?a:a=e(r=i,n=o)}}function styleRemove(t){return function(){this.style.removeProperty(t)}}function styleConstant(t,e,r){var n,a,i=r+"";return function(){var o=styleValue(this,t);return o===i?null:o===n?a:a=e(n=o,r)}}function styleFunction(t,e,r){var n,a,i;return function(){var o=styleValue(this,t),s=r(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=styleValue(this,t)),o===l?null:o===n&&l===a?i:(a=l,i=e(n=o,s))}}function styleMaybeRemove(t,e){var r,n,a,i,o="style."+e,s="end."+o;return function(){var l=set(this,t),c=l.on,u=null==l.value[o]?i||(i=styleRemove(e)):void 0;c===r&&a===u||(n=(r=c).copy()).on(s,a=u),l.on=n}}function transition_style(t,e,r){var n="transform"==(t+="")?interpolateTransformCss:interpolate;return null==e?this.styleTween(t,styleNull(t,n)).on("end.style."+t,styleRemove(t)):"function"==typeof e?this.styleTween(t,styleFunction(t,n,tweenValue(this,"style."+t,e))).each(styleMaybeRemove(this._id,t)):this.styleTween(t,styleConstant(t,n,e),r).on("end.style."+t,null)}function styleInterpolate(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}function styleTween(t,e,r){var n,a;function i(){var i=e.apply(this,arguments);return i!==a&&(n=(a=i)&&styleInterpolate(t,i,r)),n}return i._value=e,i}function transition_styleTween(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,styleTween(t,e,null==r?"":r))}function textConstant(t){return function(){this.textContent=t}}function textFunction(t){return function(){var e=t(this);this.textContent=null==e?"":e}}function transition_text(t){return this.tween("text","function"==typeof t?textFunction(tweenValue(this,"text",t)):textConstant(null==t?"":t+""))}function textInterpolate(t){return function(e){this.textContent=t.call(this,e)}}function textTween(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&textInterpolate(n)),e}return n._value=t,n}function transition_textTween(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,textTween(t))}function transition_transition(){for(var t=this._name,e=this._id,r=newId(),n=this._groups,a=n.length,i=0;i<a;++i)for(var o,s=n[i],l=s.length,c=0;c<l;++c)if(o=s[c]){var u=get(o,e);schedule(o,t,r,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Transition(n,this._parents,t,r)}function transition_end(){var t,e,r=this,n=r._id,a=r.size();return new Promise(function(i,o){var s={value:o},l={value:function(){0===--a&&i()}};r.each(function(){var r=set(this,n),a=r.on;a!==t&&((e=(t=a).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),r.on=e}),0===a&&i()})}var id=0;function Transition(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function newId(){return++id}var selection_prototype=selection.prototype;Transition.prototype={constructor:Transition,select:transition_select,selectAll:transition_selectAll,selectChild:selection_prototype.selectChild,selectChildren:selection_prototype.selectChildren,filter:transition_filter,merge:transition_merge,selection:transition_selection,transition:transition_transition,call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:transition_on,attr:transition_attr,attrTween:transition_attrTween,style:transition_style,styleTween:transition_styleTween,text:transition_text,textTween:transition_textTween,remove:transition_remove,tween:transition_tween,delay:transition_delay,duration:transition_duration,ease:transition_ease,easeVarying:transition_easeVarying,end:transition_end,[Symbol.iterator]:selection_prototype[Symbol.iterator]};const linear$1=t=>+t;function cubicOut(t){return--t*t*t+1}function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var defaultTiming={time:null,delay:0,duration:250,ease:cubicInOut};function inherit(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}function selection_transition(t){var e,r;t instanceof Transition?(e=t._id,t=t._name):(e=newId(),(r=defaultTiming).time=now(),t=null==t?null:t+"");for(var n=this._groups,a=n.length,i=0;i<a;++i)for(var o,s=n[i],l=s.length,c=0;c<l;++c)(o=s[c])&&schedule(o,t,e,c,s,r||inherit(o,e));return new Transition(n,this._parents,t,e)}selection.prototype.interrupt=selection_interrupt,selection.prototype.transition=selection_transition;const pi=Math.PI,tau=2*pi,epsilon=1e-6,tauEpsilon=tau-epsilon;function append(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function appendRound(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return append;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}class Path{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?append:appendRound(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,a,i){this._append`C${+t},${+e},${+r},${+n},${this._x1=+a},${this._y1=+i}`}arcTo(t,e,r,n,a){if(t=+t,e=+e,r=+r,n=+n,(a=+a)<0)throw new Error(`negative radius: ${a}`);let i=this._x1,o=this._y1,s=r-t,l=n-e,c=i-t,u=o-e,d=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>epsilon)if(Math.abs(u*s-l*c)>epsilon&&a){let h=r-i,p=n-o,g=s*s+l*l,y=h*h+p*p,b=Math.sqrt(g),f=Math.sqrt(d),$=a*Math.tan((pi-Math.acos((g+d-y)/(2*b*f)))/2),m=$/f,I=$/b;Math.abs(m-1)>epsilon&&this._append`L${t+m*c},${e+m*u}`,this._append`A${a},${a},0,0,${+(u*h>c*p)},${this._x1=t+I*s},${this._y1=e+I*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,a,i){if(t=+t,e=+e,i=!!i,(r=+r)<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(n),s=r*Math.sin(n),l=t+o,c=e+s,u=1^i,d=i?n-a:a-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>epsilon||Math.abs(this._y1-c)>epsilon)&&this._append`L${l},${c}`,r&&(d<0&&(d=d%tau+tau),d>tauEpsilon?this._append`A${r},${r},0,1,${u},${t-o},${e-s}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:d>epsilon&&this._append`A${r},${r},0,${+(d>=pi)},${u},${this._x1=t+r*Math.cos(a)},${this._y1=e+r*Math.sin(a)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function exponent(t){return(t=formatDecimalParts(Math.abs(t)))?t[1]:NaN}function formatGroup(t,e){return function(r,n){for(var a=r.length,i=[],o=0,s=t[0],l=0;a>0&&s>0&&(l+s+1>n&&(s=Math.max(1,n-l)),i.push(r.substring(a-=s,a+s)),!((l+=s+1)>n));)s=t[o=(o+1)%t.length];return i.reverse().join(e)}}function formatNumerals(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(e=re.exec(t)))throw new Error("invalid format: "+t);var e;return new FormatSpecifier({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function FormatSpecifier(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function formatTrim(t){t:for(var e,r=t.length,n=1,a=-1;n<r;++n)switch(t[n]){case".":a=e=n;break;case"0":0===a&&(a=n),e=n;break;default:if(!+t[n])break t;a>0&&(a=0)}return a>0?t.slice(0,a)+t.slice(e+1):t}function formatPrefixAuto(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],a=r[1],i=a-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,o=n.length;return i===o?n:i>o?n+new Array(i-o+1).join("0"):i>0?n.slice(0,i)+"."+n.slice(i):"0."+new Array(1-i).join("0")+formatDecimalParts(t,Math.max(0,e+i-1))[0]}function formatRounded(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],a=r[1];return a<0?"0."+new Array(-a).join("0")+n:n.length>a+1?n.slice(0,a+1)+"."+n.slice(a+1):n+new Array(a-n.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var formatTypes={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:formatDecimal,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>formatRounded(100*t,e),r:formatRounded,s:formatPrefixAuto,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function identity$1(t){return t}var locale,format,formatPrefix,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale(t){var e=void 0===t.grouping||void 0===t.thousands?identity$1:formatGroup(map.call(t.grouping,Number),t.thousands+""),r=void 0===t.currency?"":t.currency[0]+"",n=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",i=void 0===t.numerals?identity$1:formatNumerals(map.call(t.numerals,String)),o=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function c(t){var c=(t=formatSpecifier(t)).fill,u=t.align,d=t.sign,h=t.symbol,p=t.zero,g=t.width,y=t.comma,b=t.precision,f=t.trim,$=t.type;"n"===$?(y=!0,$="g"):formatTypes[$]||(void 0===b&&(b=12),f=!0,$="g"),(p||"0"===c&&"="===u)&&(p=!0,c="0",u="=");var m="$"===h?r:"#"===h&&/[boxX]/.test($)?"0"+$.toLowerCase():"",I="$"===h?n:/[%p]/.test($)?o:"",E=formatTypes[$],A=/[defgprs%]/.test($);function C(t){var r,n,o,h=m,C=I;if("c"===$)C=E(t)+C,t="";else{var v=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:E(Math.abs(t),b),f&&(t=formatTrim(t)),v&&0===+t&&"+"!==d&&(v=!1),h=(v?"("===d?d:s:"-"===d||"("===d?"":d)+h,C=("s"===$?prefixes[8+prefixExponent/3]:"")+C+(v&&"("===d?")":""),A)for(r=-1,n=t.length;++r<n;)if(48>(o=t.charCodeAt(r))||o>57){C=(46===o?a+t.slice(r+1):t.slice(r))+C,t=t.slice(0,r);break}}y&&!p&&(t=e(t,1/0));var S=h.length+t.length+C.length,B=S<g?new Array(g-S+1).join(c):"";switch(y&&p&&(t=e(B+t,B.length?g-C.length:1/0),B=""),u){case"<":t=h+t+C+B;break;case"=":t=h+B+t+C;break;case"^":t=B.slice(0,S=B.length>>1)+h+t+C+B.slice(S);break;default:t=B+h+t+C}return i(t)}return b=void 0===b?6:/[gprs]/.test($)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),C.toString=function(){return t+""},C}return{format:c,formatPrefix:function(t,e){var r=c(((t=formatSpecifier(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3))),a=Math.pow(10,-n),i=prefixes[8+n/3];return function(t){return r(a*t)+i}}}}function defaultLocale(t){return locale=formatLocale(t),format=locale.format,formatPrefix=locale.formatPrefix,locale}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3)))-exponent(Math.abs(t)))}function precisionRound(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,exponent(e)-exponent(t))+1}defaultLocale({thousands:",",grouping:[3],currency:["$",""]});var defaultSource=Math.random,uniform=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(defaultSource),normal=function t(e){function r(t,r){var n,a;return t=null==t?0:+t,r=null==r?1:+r,function(){var i;if(null!=n)i=n,n=null;else do{n=2*e()-1,i=2*e()-1,a=n*n+i*i}while(!a||a>1);return t+r*i*Math.sqrt(-2*Math.log(a)/a)}}return r.source=t,r}(defaultSource);const mul=1664525,inc=1013904223,eps=1/4294967296;function lcg(t=Math.random()){let e=0|(0<=t&&t<1?t/eps:Math.abs(t));return()=>(e=mul*e+inc|0,eps*(e>>>0))}function initRange(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function constants(t){return function(){return t}}function number(t){return+t}var unit=[0,1];function identity(t){return t}function normalize(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:constants(isNaN(e)?NaN:.5)}function clamper(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}function bimap(t,e,r){var n=t[0],a=t[1],i=e[0],o=e[1];return a<n?(n=normalize(a,n),i=r(o,i)):(n=normalize(n,a),i=r(i,o)),function(t){return i(n(t))}}function polymap(t,e,r){var n=Math.min(t.length,e.length)-1,a=new Array(n),i=new Array(n),o=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<n;)a[o]=normalize(t[o],t[o+1]),i[o]=r(e[o],e[o+1]);return function(e){var r=bisectRight(t,e,1,n)-1;return i[r](a[r](e))}}function copy(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer(){var t,e,r,n,a,i,o=unit,s=unit,l=interpolate$1,c=identity;function u(){var t=Math.min(o.length,s.length);return c!==identity&&(c=clamper(o[0],o[t-1])),n=t>2?polymap:bimap,a=i=null,d}function d(e){return null==e||isNaN(e=+e)?r:(a||(a=n(o.map(t),s,l)))(t(c(e)))}return d.invert=function(r){return c(e((i||(i=n(s,o.map(t),interpolateNumber)))(r)))},d.domain=function(t){return arguments.length?(o=Array.from(t,number),u()):o.slice()},d.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},d.rangeRound=function(t){return s=Array.from(t),l=interpolateRound,u()},d.clamp=function(t){return arguments.length?(c=!!t||identity,u()):c!==identity},d.interpolate=function(t){return arguments.length?(l=t,u()):l},d.unknown=function(t){return arguments.length?(r=t,d):r},function(r,n){return t=r,e=n,u()}}function continuous(){return transformer()(identity,identity)}function tickFormat(t,e,r,n){var a,i=tickStep(t,e,r);switch((n=formatSpecifier(null==n?",f":n)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(a=precisionPrefix(i,o))||(n.precision=a),formatPrefix(n,o);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(a=precisionRound(i,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=a-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(a=precisionFixed(i))||(n.precision=a-2*("%"===n.type))}return format(n)}function linearish(t){var e=t.domain;return t.ticks=function(t){var r=e();return ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return tickFormat(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,a,i=e(),o=0,s=i.length-1,l=i[o],c=i[s],u=10;for(c<l&&(a=l,l=c,c=a,a=o,o=s,s=a);u-- >0;){if((a=tickIncrement(l,c,r))===n)return i[o]=l,i[s]=c,e(i);if(a>0)l=Math.floor(l/a)*a,c=Math.ceil(c/a)*a;else{if(!(a<0))break;l=Math.ceil(l*a)/a,c=Math.floor(c*a)/a}n=a}return t},t}function linear(){var t=continuous();return t.copy=function(){return copy(t,linear())},initRange.apply(t,arguments),linearish(t)}function constant(t){return function(){return t}}function withPath(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new Path(e)}function array(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Linear(t){this._context=t}function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function line(t,e){var r=constant(!0),n=null,a=curveLinear,i=null,o=withPath(s);function s(s){var l,c,u,d=(s=array(s)).length,h=!1;for(null==n&&(i=a(u=o())),l=0;l<=d;++l)!(l<d&&r(c=s[l],l,s))===h&&((h=!h)?i.lineStart():i.lineEnd()),h&&i.point(+t(c,l,s),+e(c,l,s));if(u)return i=null,u+""||null}return t="function"==typeof t?t:void 0===t?x:constant(t),e="function"==typeof e?e:void 0===e?y:constant(e),s.x=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:constant(+t),s):e},s.defined=function(t){return arguments.length?(r="function"==typeof t?t:constant(!!t),s):r},s.curve=function(t){return arguments.length?(a=t,null!=n&&(i=a(n)),s):a},s.context=function(t){return arguments.length?(null==t?n=i=null:i=a(n=t),s):n},s}function Transform(t,e,r){this.k=t,this.x=e,this.y=r}Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},Transform.prototype={constructor:Transform,scale:function(t){return 1===t?this:new Transform(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Transform(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},Transform.prototype;class DecidablesElement extends i{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}firstUpdated(t){super.firstUpdated(t),select(this.renderRoot.host).classed("keyboard",!0).on("mousemove.keyboard touchstart.keyboard",t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!1).on("mousemove.keyboard touchstart.keyboard",null)}).on("keydown.keyboard",t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!0).on("keydown.keyboard mousemove.keyboard touchstart.keyboard",null)})}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=interpolateRgb(t,"#ffffff")(.75),e.light50=interpolateRgb(t,"#ffffff")(.5),e.light25=interpolateRgb(t,"#ffffff")(.25),e.grey=t,e.dark25=interpolateRgb(t,"#000000")(.25),e.dark50=interpolateRgb(t,"#000000")(.5),e.dark75=interpolateRgb(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1,r=!1){const n=this.shadows.opacityUmbra+this.shadows.opacityBoost,a=this.shadows.opacityPenumbra+this.shadows.opacityBoost,i=this.shadows.opacityAmbient+this.shadows.opacityBoost,o=r?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,s=r?`rgba(${this.shadows.inverseBaselineColorString}, ${a})`:`rgba(${this.shadows.baselineColorString}, ${a})`,l=r?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,c=this.shadows.mapUmbra[t],u=this.shadows.mapPenumbra[t],d=this.shadows.mapAmbient[t];return`${e?`${-c.y}px ${c.y/2}px ${c.b}px ${c.s}px`:`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${o}, ${e?`${-u.y}px ${u.y/2}px ${u.b}px ${u.s}px`:`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${s}, ${e?`${-d.y}px ${d.y/2}px ${d.b}px ${d.s}px`:`${d.y/2}px ${d.y}px ${d.b}px ${d.s}px`} ${l}`}static get svgDefs(){const t=DecidablesElement.shadows,e=t.elevations.map(e=>`\n        <filter id=shadow-${e} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">\n          <feComponentTransfer in="SourceAlpha" result="solid">\n            <feFuncA type="table" tableValues="0 1 1"/>\n          </feComponentTransfer>\n          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />\n          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />\n          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />\n          ${0===t.mapUmbra[e].s?"":`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}\n          ${0===t.mapPenumbra[e].s?"":`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}\n          ${0===t.mapAmbient[e].s?"":`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}\n          <feGaussianBlur in=${0===t.mapUmbra[e].s?"offU":"spreadU"} result="blurU" stdDeviation=${t.mapUmbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapPenumbra[e].s?"offP":"spreadP"} result="blurP" stdDeviation=${t.mapPenumbra[e].b/2} />\n          <feGaussianBlur in=${0===t.mapAmbient[e].s?"offA":"spreadA"} result="blurA" stdDeviation=${t.mapAmbient[e].b/2} />\n          <feFlood in="SourceGraphic" result="opU" flood-color=${t.baselineColor} flood-opacity=${t.opacityUmbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opP" flood-color=${t.baselineColor} flood-opacity=${t.opacityPenumbra+t.opacityBoost} />\n          <feFlood in="SourceGraphic" result="opA" flood-color=${t.baselineColor} flood-opacity=${t.opacityAmbient+t.opacityBoost} />\n          <feComposite in="opU" in2="blurU" result="shU" operator="in" />\n          <feComposite in="opP" in2="blurP" result="shP" operator="in" />\n          <feComposite in="opA" in2="blurA" result="shA" operator="in" />\n          <feMorphology in="solid" result="smaller" operator="erode" radius="1" />\n          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />\n          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />\n          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />\n          <feMerge>\n            <feMergeNode in="finalU" />\n            <feMergeNode in="finalP" />\n            <feMergeNode in="finalA" />\n            <feMergeNode in="SourceGraphic" />\n          </feMerge>\n        </filter>`);return`\n      <defs>\n        ${e}\n      </defs>\n    `}static get svgFilters(){const t=DecidablesElement.shadows,e=t.elevations.map(e=>b`
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
        </filter>`);return b`
      <svg class="defs">
        <defs>
          ${e}
        </defs>
      </svg>
    `}static get styles(){return i$3`
      :host {
        ---shadow-0: var(--shadow-0, ${r$2(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${r$2(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${r$2(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${r$2(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${r$2(this.greys.white)});
        ---color-border: var(--color-border, ${r$2(this.greys.light75)});
        ---color-text: var(--color-text, ${r$2(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${r$2(this.greys.white)});
        ---color-link: var(--color-link, ${r$2(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${r$2(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${r$2(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${r$2(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${r$2(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${r$2(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${r$2(this.greys.dark75)});

        ---font-family-base: var(--font-family-base, "Source Sans", sans-serif);
        ---font-family-math: var(--font-family-math, "Source Serif", serif);

        ---border: var(--border, 1px solid var(---color-border));
        ---border-radius: var(--border-radius, 0.25rem);
        ---transition-duration: var(--transition-duration, 500ms);

        font-family: var(---font-family-base);
        font-weight: normal;
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

          ---shadow-2-rotate: var(--shadow-2-rotate, ${r$2(this.cssBoxShadow(2,!0,!1))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${r$2(this.cssBoxShadow(4,!0,!1))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${r$2(this.cssBoxShadow(8,!0,!1))});

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
    `}}function DecidablesMixinResizeable(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("decidables-toggle-option",DecidablesToggleOption);var data={colors:{a:"#e41a1c",z:"#377eb8",v:"#ff7f00",t0:"#f781bf",s:"#999999",left:"#f032e6",right:"#10dbc9",correct:"#4daf4a",error:"#984ea3",nr:"#cccccc"}},colors=data.colors;class AccumulableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return colors}static get lights(){return Object.keys(AccumulableElement.colors).reduce((t,e)=>(t[e]=interpolateRgb(AccumulableElement.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(AccumulableElement.colors).reduce((t,e)=>(t[e]=interpolateRgb(AccumulableElement.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,i$3`
        :host {
          /* Declare base colors */
          ${r$2(Object.keys(AccumulableElement.colors).map(t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`).join("\n"))}

          /* Declare light colors */
          ${r$2(Object.keys(AccumulableElement.colors).map(t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`).join("\n"))}

          /* Declare dark colors */
          ${r$2(Object.keys(AccumulableElement.colors).map(t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`).join("\n"))}
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
      </div>`}}customElements.define("accumulable-control",AccumulableControl);class DDMMath{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t},{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const n=t.reduce((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t},{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(n.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(n.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(n.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,n=DDMMath.s.DEFAULT){const a=t*e,i=Math.exp(-2*r*t/n**2);return(i-Math.exp(-2*r*a/n**2))/(i-1)}static azv2pC(t,e,r,n=DDMMath.s.DEFAULT){return DDMMath.azv2pE(t,1-e,-r,n)}static azvt02m(t,e,r,n,a=DDMMath.s.DEFAULT){const i=t*e,o=Math.exp(-2*r*t/a**2)-1;return n+1e3*(-i/r+t/r*((Math.exp(-2*r*i/a**2)-1)/o))}static azv2sd(t,e,r,n=DDMMath.s.DEFAULT){const a=t*e,i=Math.exp(-2*r*t/n**2)-1,o=Math.exp(-2*r*a/n**2)-1,s=(-r*t**2*(o+4)*o/i**2+((-3*r*t**2+4*r*a*t+n**2*t)*o+4*r*a*t)/i-n**2*a)/r**3;return 1e3*Math.sqrt(s)}static azvt02mE(t,e,r,n,a=DDMMath.s.DEFAULT){function i(t,e){return Math.exp(2*r*e/a**2)-Math.exp(2*r*t/a**2)}const o=t*e;return n+1e3*((o*(i(o-t,t)+i(0,o))+2*t*i(o,0))/(r*i(o,t)*i(-t,0)))}static azv2sdE(t,e,r,n=DDMMath.s.DEFAULT){function a(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const i=t*e,o=-2*t*a(0,i)*(2*r*t*a(i,2*t)+n**2*a(0,t)*a(i,t))*Math.exp(2*r*t/n**2)/(r**3*a(0,t)**2*a(i,t)**2)+(4*r*i*(2*t-i)*Math.exp(2*r*(i+t)/n**2)+i*n**2*a(2*i,2*t))/(r**3*a(i,t)**2);return 1e3*Math.sqrt(o)}static azvt02mC(t,e,r,n,a=DDMMath.s.DEFAULT){return DDMMath.azvt02mE(t,1-e,-r,n,a)}static azv2sdC(t,e,r,n=DDMMath.s.DEFAULT){return DDMMath.azv2sdE(t,1-e,-r,n)}static tazv2gE(t,e,r,n,a=DDMMath.s.DEFAULT){if(!t)return 0;const i=e*r,o=Math.PI*a**2/e**2*Math.exp(-i*n/a**2);let s=0,l=0,c=0;do{s+=1,l=s*Math.sin(Math.PI*i*s/e)*Math.exp(-.5*(n**2/a**2+Math.PI**2*s**2*a**2/e**2)*t),c+=l}while(s<200);return o*c}static tazv2gC(t,e,r,n,a=DDMMath.s.DEFAULT){return DDMMath.tazv2gE(t,e,1-r,-n,a)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:n}){function a(t){return Math.log(t/(1-t))}const i=(e/1e3)**2,o=r/1e3,s=n**2,l=a(t),c=l*(l*t**2-l*t+t-.5)/i,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*n*c**(1/4),d=s*a(t)/u,h=-u*d/s,p=d/(2*u)*(1-Math.exp(h))/(1+Math.exp(h));return{v:u,a:d,t0:1e3*(o?o-p:null),s:n}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}class AccumulableResponse extends AccumulableElement{static get properties(){return{feedback:{attribute:"feedback",type:Boolean,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedback=!1,this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.correctPayoff=0,this.errorPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["left","right"],this.signal=void 0,this.responses=["left","right"],this.response=void 0,this.outcomes=["correct","error","nr"],this.outcome=void 0,this.startTime=void 0,this.rt=void 0,this.data={},this.trials=[],this.alignState()}get trialPayoff(){switch(this.outcome){case"correct":return this.correctPayoff;case"error":return this.errorPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.data.correctCount*this.correctPayoff+this.data.errorCount*this.errorPayoff+this.data.nrCount*this.nrPayoff}alignState(){this.data=DDMMath.trials2stats(this.trials)}start(t,e){this.startTime=Date.now(),this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0,this.rt=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.rt=void 0,this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState())}left(){this.responded("left")}right(){this.responded("right")}responded(t){this.rt=Date.now()-this.startTime,this.state="feedback",this.response=t,this.signal===this.response?this.outcome="correct":this.signal!==this.response&&(this.outcome="error"),this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,data:this.data,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.rt=void 0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.trials=[],this.alignState()}keydown(t){"waiting"===this.state&&("ArrowLeft"===t.key?(this.responded("left"),t.preventDefault()):"ArrowRight"===t.key&&(this.responded("right"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,i$3`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return x$1`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,n,a,i,o,s,l,c,u;return this.numeric?(r=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.correctPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,n=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?x$1`<span class="payoff">${e(this.errorPayoff)}</span>`:x$1``}
        </decidables-spinner>
      `,a=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,i=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,o=x$1`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,s=x$1`
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
        ${this.payoff?x$1`<span class="payoff">${e(this.errorPayoff)}</span>`:x$1``}`,a=x$1`<span>Accuracy</span>`,i=x$1`<span>Correct Mean RT</span>`,o=x$1`<span>Error Mean RT</span>`,s=x$1`<span>Mean RT</span>`,l=x$1`<span>Correct SD RT</span>`,c=x$1`<span>Error SD RT</span>`,u=x$1`<span>SD RT</span>`),x$1`
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
                  ${a}
                </td>`:x$1``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Mean RT
            </th>
            <td class="td td-data correct mean-rt">
              ${i}
            </td>
            <td class="td td-data error mean-rt">
              ${o}
            </td>
            ${this.summary?x$1`
                <td class="td td-summary overall mean-rt">
                  ${s}
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
      </table>`}}function decodeBase64(t,e){return atob(t)}function createURL(t,e,r){var n=e,a=decodeBase64(t),i=a.indexOf("\n",10)+1,o=a.substring(i)+"//# sourceMappingURL="+n,s=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(s)}function createBase64WorkerFactory(t,e,r){var n;return function(r){return n=n||createURL(t,e),new Worker(n,r)}}customElements.define("accumulable-table",AccumulableTable);var WorkerFactory=createBase64WorkerFactory("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uIFswLCBJbmZpbml0eSkKICAgICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhICgwLCAxKQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpCiAgICAgIHQwID0gbm9uLWRlY2lzaW9uIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgKDAsIEluZmluaXR5KQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpIFswLCBJbmZpbml0eSkKCiAgICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKSBbMCwgSW5maW5pdHkpCgogICAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6CiAgICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHMKICAgICAgcEMgPSBwcm9wb3J0aW9uIG9mIGNvcnJlY3QgdHJpYWxzCiAgICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUMgPSBtZWFuIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RDID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCgogICAgRXF1YXRpb25zOgogICAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICAgIFN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKQogICAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNykKICAqLwogIGNsYXNzIERETU1hdGggewogICAgc3RhdGljIHMgPSB7CiAgICAgIERFRkFVTFQ6IDEKICAgIH07CiAgICBzdGF0aWMgYSA9IHsKICAgICAgREVGQVVMVDogMS4yLAogICAgICBNSU46IDAuMDEsCiAgICAgIE1BWDogMi4wLAogICAgICBTVEVQOiAwLjAxLAogICAgICBKVU1QOiAwLjEKICAgIH07CiAgICBzdGF0aWMgeiA9IHsKICAgICAgREVGQVVMVDogMC41NSwKICAgICAgTUlOOiAwLjAxLAogICAgICBNQVg6IDAuOTksCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB2ID0gewogICAgICBERUZBVUxUOiAxLjUsCiAgICAgIE1JTjogMC4wMSwKICAgICAgTUFYOiA1LjAsCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB0MCA9IHsKICAgICAgREVGQVVMVDogMTUwLAogICAgICBNSU46IDAsCiAgICAgIE1BWDogNTAwLAogICAgICBTVEVQOiAxLAogICAgICBKVU1QOiAxMAogICAgfTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0ge307CgogICAgICAvLyBGaXJzdC1vcmRlciBzdW1zCiAgICAgIGNvbnN0IHN1bXMgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JDb3VudCArPSAxOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IubnJDb3VudCArPSAxOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIGNvcnJlY3RDb3VudDogMCwKICAgICAgICBlcnJvckNvdW50OiAwLAogICAgICAgIG5yQ291bnQ6IDAsCiAgICAgICAgY29ycmVjdFJUU3VtOiAwLAogICAgICAgIGVycm9yUlRTdW06IDAKICAgICAgfSk7CgogICAgICAvLyBGaXJzdC1vcmRlciBzdGF0cwogICAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JDb3VudCA9IHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubnJDb3VudCA9IHN1bXMubnJDb3VudDsKICAgICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7CiAgICAgIHN0YXRzLmNvcnJlY3RNZWFuUlQgPSBzdW1zLmNvcnJlY3RSVFN1bSAvIHN1bXMuY29ycmVjdENvdW50OwogICAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubWVhblJUID0gKHN1bXMuY29ycmVjdFJUU3VtICsgc3Vtcy5lcnJvclJUU3VtKSAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zMiA9IHRyaWFscy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4gewogICAgICAgIHN3aXRjaCAodHJpYWwub3V0Y29tZSkgewogICAgICAgICAgY2FzZSAnY29ycmVjdCc6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmNvcnJlY3RNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yU1MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMuZXJyb3JNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgc3M6IDAsCiAgICAgICAgY29ycmVjdFNTOiAwLAogICAgICAgIGVycm9yU1M6IDAKICAgICAgfSk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdFNEUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmNvcnJlY3RTUyAvIChzdGF0cy5jb3JyZWN0Q291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLmVycm9yU0RSVCA9IHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmVycm9yU1MgLyAoc3RhdHMuZXJyb3JDb3VudCAtIDEpKSA6IE5hTjsKICAgICAgc3RhdHMuc2RSVCA9IHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLnNzIC8gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHJldHVybiBzdGF0czsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZQogICAgc3RhdGljIGF6djJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMik7CiAgICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gKC12ICogYSAqKiAyICogKFogKyA0KSAqIFogLyBBICoqIDIgKyAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBIC0gcyAqKiAyICogelByaW1lKSAvIHYgKiogMzsKICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwOwogICAgfQoKICAgIC8vIE1lYW4gRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZ0MDJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MDJtQyhhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenYyc2RDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGlmICghdCkgcmV0dXJuIDA7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBiYXNlID0gTWF0aC5QSSAqIHMgKiogMiAvIGEgKiogMiAqIE1hdGguZXhwKC16UHJpbWUgKiB2IC8gcyAqKiAyKTsKICAgICAgbGV0IGsgPSAwOwogICAgICBsZXQgdGVybSA9IDA7CiAgICAgIGxldCBzdW0gPSAwOwogICAgICBkbyB7CiAgICAgICAgayArPSAxOwogICAgICAgIHRlcm0gPSBrICogTWF0aC5zaW4oTWF0aC5QSSAqIHpQcmltZSAqIGsgLyBhKSAqIE1hdGguZXhwKC0wLjUgKiAodiAqKiAyIC8gcyAqKiAyICsgTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyIC8gYSAqKiAyKSAqIHQpOwogICAgICAgIHN1bSArPSB0ZXJtOwogICAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDSwoKICAgICAgcmV0dXJuIGJhc2UgKiBzdW07CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBDb3JyZWN0IFJUCiAgICBzdGF0aWMgdGF6djJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbAogICAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlcwogICAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXMKICAgIC8vICAgIHBDIC0gUHJvcG9ydGlvbiBjb3JyZWN0CiAgICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXMKICAgIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtcwogICAgLy8gICAgcyAtIGRpZmZ1c2lvbiBzdGFuZGFyZCBkZXZpYXRpb24KICAgIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzCiAgICBzdGF0aWMgZGF0YTJleih7CiAgICAgIGFjY3VyYWN5OiBwQywKICAgICAgc2RSVDogc2QsCiAgICAgIG1lYW5SVDogbSwKICAgICAgcwogICAgfSkgewogICAgICBmdW5jdGlvbiBzaWduKHIpIHsKICAgICAgICByZXR1cm4gciA+IDAgPyAxIDogciA9PT0gMCA/IDAgOiAtMTsKICAgICAgfQogICAgICBmdW5jdGlvbiBsb2dpdChwKSB7CiAgICAgICAgcmV0dXJuIE1hdGgubG9nKHAgLyAoMSAtIHApKTsKICAgICAgfQogICAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyOwogICAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDsKICAgICAgY29uc3QgczIgPSBzICoqIDI7CiAgICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7CiAgICAgIGNvbnN0IHggPSBsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpIC8gdnJ0OwogICAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpOwogICAgICBjb25zdCBhID0gczIgKiBsb2dpdChwQykgLyB2OwogICAgICBjb25zdCB5ID0gLXYgKiBhIC8gczI7CiAgICAgIGNvbnN0IG1kdCA9IGEgLyAoMiAqIHYpICogKDEgLSBNYXRoLmV4cCh5KSkgLyAoMSArIE1hdGguZXhwKHkpKTsKICAgICAgY29uc3QgdDAgPSBtcnQgPyBtcnQgLSBtZHQgOiBudWxsOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWQKCiAgICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7CiAgICAgIHJldHVybiB7CiAgICAgICAgdiwKICAgICAgICBhLAogICAgICAgIHQwOiB0MFByaW1lLAogICAgICAgIHMKICAgICAgfTsKICAgIH0KICAgIHN0YXRpYyBkYXRhMmV6MigpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7CiAgICB9CiAgfQoKICAvLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXMKCiAgLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogWyJvZmYiLCAic2VsZiJdICovCgogIHNlbGYub25tZXNzYWdlID0gZXZlbnQgPT4gewogICAgY29uc3QgcGFyYW1zID0gRERNTWF0aC5kYXRhMmV6KHsKICAgICAgLi4uZXZlbnQuZGF0YSwKICAgICAgczogRERNTWF0aC5zLkRFRkFVTFQKICAgIH0pOwoKICAgIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIQogICAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTsKICAgIGNvbnN0IHogPSAhaXNOYU4ocGFyYW1zLnopID8gcGFyYW1zLnogOiAwLjU7CiAgICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xOwogICAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDsKICAgIGNvbnN0IHMgPSAhaXNOYU4ocGFyYW1zLnMpID8gcGFyYW1zLnMgOiBERE1NYXRoLnMuREVGQVVMVDsKICAgIGNvbnN0IHByZWRpY3RlZCA9IHsKICAgICAgYWNjdXJhY3k6IERETU1hdGguYXp2MnBDKGEsIHosIHYpLAogICAgICBjb3JyZWN0TWVhblJUOiBERE1NYXRoLmF6dnQwMm1DKGEsIHosIHYsIHQwKSwKICAgICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLAogICAgICBtZWFuUlQ6IERETU1hdGguYXp2dDAybShhLCB6LCB2LCB0MCksCiAgICAgIGNvcnJlY3RTRFJUOiBERE1NYXRoLmF6djJzZEMoYSwgeiwgdiksCiAgICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLAogICAgICBzZFJUOiBERE1NYXRoLmF6djJzZChhLCB6LCB2KQogICAgfTsKICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICBwYXJhbXM6IHsKICAgICAgICBhLAogICAgICAgIHosCiAgICAgICAgdiwKICAgICAgICB0MCwKICAgICAgICBzCiAgICAgIH0sCiAgICAgIHByZWRpY3RlZAogICAgfSk7CiAgfTsKCn0pKCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWRkbS1maXQtd29ya2VyLmpzLm1hcAoK","data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb24gWzAsIEluZmluaXR5KVxuICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYSAoMCwgMSlcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKSAoMCwgSW5maW5pdHkpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKSBbMCwgSW5maW5pdHkpXG5cbiAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykgWzAsIEluZmluaXR5KVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNylcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSB7XG4gICAgREVGQVVMVDogMSxcbiAgfTtcblxuICBzdGF0aWMgYSA9IHtcbiAgICBERUZBVUxUOiAxLjIsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMi4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB6ID0ge1xuICAgIERFRkFVTFQ6IDAuNTUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMC45OSxcbiAgICBTVEVQOiAwLjAxLFxuICAgIEpVTVA6IDAuMSxcbiAgfTtcblxuICBzdGF0aWMgdiA9IHtcbiAgICBERUZBVUxUOiAxLjUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogNS4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB0MCA9IHtcbiAgICBERUZBVUxUOiAxNTAsXG4gICAgTUlOOiAwLFxuICAgIE1BWDogNTAwLFxuICAgIFNURVA6IDEsXG4gICAgSlVNUDogMTAsXG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMik7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKTtcblxuICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTtcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gTWVhbiBPdmVyYWxsIFJUXG4gIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgdmFyaWFuY2UgPSAoXG4gICAgICAoXG4gICAgICAgICgtdiAqIGEgKiogMiAqIChaICsgNCkgKiBaKSAvIEEgKiogMlxuICAgICAgKSArIChcbiAgICAgICAgKCgtMyAqIHYgKiBhICoqIDIgKyA0ICogdiAqIHpQcmltZSAqIGEgKyBzICoqIDIgKiBhKSAqIFogKyA0ICogdiAqIHpQcmltZSAqIGEpIC8gQVxuICAgICAgKSAtIChcbiAgICAgICAgcyAqKiAyICogelByaW1lXG4gICAgICApXG4gICAgKSAvIHYgKiogMztcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKVxuICAgICAgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7XG4gICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7XG4gIH1cblxuICAvLyBTRCBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2MnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2MmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgdGVybSA9IDA7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZG8ge1xuICAgICAgayArPSAxO1xuXG4gICAgICB0ZXJtID0ga1xuICAgICAgICAqIE1hdGguc2luKChNYXRoLlBJICogelByaW1lICogaykgLyBhKVxuICAgICAgICAqIE1hdGguZXhwKC0wLjUgKiAoKHYgKiogMiAvIHMgKiogMikgKyAoKE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMikgLyBhICoqIDIpKSAqIHQpO1xuXG4gICAgICBzdW0gKz0gdGVybTtcbiAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDS1xuXG4gICAgcmV0dXJuIGJhc2UgKiBzdW07XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIENvcnJlY3QgUlRcbiAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vcmFvdWwuc29jc2NpLnV2YS5ubC9FWjIvRVoyX25ldy5odG1sXG4gIC8vIEVaLWZ1bmN0aW9uIGZvciBzdGFydGluZyB2YWx1ZXNcbiAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXNcbiAgLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3RcbiAgLy8gICAgc2QgLSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBSVCdzIGluIG1zXG4gIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtc1xuICAvLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvblxuICAvLyByZXR1cm5zOiBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHYsIGEsIGFuZCB0MCwgY29udGFpbmluZyBFWi1lc3RpbWF0ZXMgb2YgdGhlc2UgcGFyYW1ldGVyc1xuICBzdGF0aWMgZGF0YTJleih7XG4gICAgYWNjdXJhY3k6IHBDLFxuICAgIHNkUlQ6IHNkLFxuICAgIG1lYW5SVDogbSxcbiAgICBzLFxuICB9KSB7XG4gICAgZnVuY3Rpb24gc2lnbihyKSB7XG4gICAgICByZXR1cm4gKChyID4gMCkgPyAxIDogKChyID09PSAwKSA/IDAgOiAtMSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ2l0KHApIHtcbiAgICAgIHJldHVybiBNYXRoLmxvZyhwIC8gKDEgLSBwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdnJ0ID0gKHNkIC8gMTAwMCkgKiogMjtcbiAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDtcblxuICAgIGNvbnN0IHMyID0gcyAqKiAyO1xuICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7XG4gICAgY29uc3QgeCA9IChsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpKSAvIHZydDtcbiAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpO1xuICAgIGNvbnN0IGEgPSAoczIgKiBsb2dpdChwQykpIC8gdjtcbiAgICBjb25zdCB5ID0gKC12ICogYSkgLyBzMjtcbiAgICBjb25zdCBtZHQgPSAoKGEgLyAoMiAqIHYpKSAqICgxIC0gTWF0aC5leHAoeSkpKSAvICgxICsgTWF0aC5leHAoeSkpO1xuICAgIGNvbnN0IHQwID0gKG1ydCA/IG1ydCAtIG1kdCA6IG51bGwpOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWRcblxuICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHYsXG4gICAgICBhLFxuICAgICAgdDA6IHQwUHJpbWUsXG4gICAgICBzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZGF0YTJlejIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cbn1cbiIsIlxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgRERNTWF0aCBmcm9tICcuL2RkbS1tYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgRERNTWF0aDtcbiIsIi8qIGVzbGludCBuby1yZXN0cmljdGVkLWdsb2JhbHM6IFtcIm9mZlwiLCBcInNlbGZcIl0gKi9cblxuaW1wb3J0IERETU1hdGggZnJvbSAnQGRlY2lkYWJsZXMvYWNjdW11bGFibGUtbWF0aCc7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IERETU1hdGguZGF0YTJleih7Li4uZXZlbnQuZGF0YSwgczogRERNTWF0aC5zLkRFRkFVTFR9KTtcblxuICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISFcbiAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTtcbiAgY29uc3QgeiA9ICFpc05hTihwYXJhbXMueikgPyBwYXJhbXMueiA6IDAuNTtcbiAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDAuMTtcbiAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDtcbiAgY29uc3QgcyA9ICFpc05hTihwYXJhbXMucykgPyBwYXJhbXMucyA6IERETU1hdGgucy5ERUZBVUxUO1xuXG4gIGNvbnN0IHByZWRpY3RlZCA9IHtcbiAgICBhY2N1cmFjeTogRERNTWF0aC5henYycEMoYSwgeiwgdiksXG4gICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksXG4gICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLFxuICAgIG1lYW5SVDogRERNTWF0aC5henZ0MDJtKGEsIHosIHYsIHQwKSxcbiAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLFxuICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLFxuICAgIHNkUlQ6IERETU1hdGguYXp2MnNkKGEsIHosIHYpLFxuICB9O1xuXG4gIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIHBhcmFtczoge1xuICAgICAgYSwgeiwgdiwgdDAsIHMsXG4gICAgfSxcbiAgICBwcmVkaWN0ZWQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJERE1NYXRoIiwicyIsIkRFRkFVTFQiLCJhIiwiTUlOIiwiTUFYIiwiU1RFUCIsIkpVTVAiLCJ6IiwidiIsInQwIiwidHJpYWxzMnN0YXRzIiwidHJpYWxzIiwic3RhdHMiLCJzdW1zIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ0cmlhbCIsIm91dGNvbWUiLCJjb3JyZWN0Q291bnQiLCJjb3JyZWN0UlRTdW0iLCJydCIsImVycm9yQ291bnQiLCJlcnJvclJUU3VtIiwibnJDb3VudCIsImFjY3VyYWN5IiwiY29ycmVjdE1lYW5SVCIsImVycm9yTWVhblJUIiwibWVhblJUIiwic3VtczIiLCJzcyIsImNvcnJlY3RTUyIsImVycm9yU1MiLCJjb3JyZWN0U0RSVCIsIk1hdGgiLCJzcXJ0IiwiTmFOIiwiZXJyb3JTRFJUIiwic2RSVCIsImF6djJwRSIsInpQcmltZSIsIkEiLCJleHAiLCJaIiwiYXp2MnBDIiwiYXp2dDAybSIsIm1lYW4iLCJhenYyc2QiLCJ2YXJpYW5jZSIsImF6dnQwMm1FIiwicGhpIiwieCIsInkiLCJhenYyc2RFIiwiYXp2dDAybUMiLCJhenYyc2RDIiwidGF6djJnRSIsInQiLCJiYXNlIiwiUEkiLCJrIiwidGVybSIsInN1bSIsInNpbiIsInRhenYyZ0MiLCJkYXRhMmV6IiwicEMiLCJzZCIsIm0iLCJzaWduIiwiciIsImxvZ2l0IiwicCIsImxvZyIsInZydCIsIm1ydCIsInMyIiwibCIsIm1kdCIsInQwUHJpbWUiLCJkYXRhMmV6MiIsIkVycm9yIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyYW1zIiwiZGF0YSIsImlzTmFOIiwicHJlZGljdGVkIiwicG9zdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7OztFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNlLE1BQU1BLE9BQU8sQ0FBQztFQUMzQixFQUFBLE9BQU9DLENBQUMsR0FBRztFQUNUQyxJQUFBQSxPQUFPLEVBQUU7S0FDVjtFQUVELEVBQUEsT0FBT0MsQ0FBQyxHQUFHO0VBQ1RELElBQUFBLE9BQU8sRUFBRSxHQUFHO0VBQ1pFLElBQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1RDLElBQUFBLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElBQUFBLElBQUksRUFBRSxJQUFJO0VBQ1ZDLElBQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPQyxDQUFDLEdBQUc7RUFDVE4sSUFBQUEsT0FBTyxFQUFFLElBQUk7RUFDYkUsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsSUFBSSxFQUFFLElBQUk7RUFDVkMsSUFBQUEsSUFBSSxFQUFFO0tBQ1A7RUFFRCxFQUFBLE9BQU9FLENBQUMsR0FBRztFQUNUUCxJQUFBQSxPQUFPLEVBQUUsR0FBRztFQUNaRSxJQUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNUQyxJQUFBQSxHQUFHLEVBQUUsR0FBRztFQUNSQyxJQUFBQSxJQUFJLEVBQUUsSUFBSTtFQUNWQyxJQUFBQSxJQUFJLEVBQUU7S0FDUDtFQUVELEVBQUEsT0FBT0csRUFBRSxHQUFHO0VBQ1ZSLElBQUFBLE9BQU8sRUFBRSxHQUFHO0VBQ1pFLElBQUFBLEdBQUcsRUFBRSxDQUFDO0VBQ05DLElBQUFBLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElBQUFBLElBQUksRUFBRSxDQUFDO0VBQ1BDLElBQUFBLElBQUksRUFBRTtLQUNQOztFQUVEO0lBQ0EsT0FBT0ksWUFBWUEsQ0FBQ0MsTUFBTSxFQUFFO01BQzFCLE1BQU1DLEtBQUssR0FBRyxFQUFFOztFQUVoQjtNQUNBLE1BQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxNQUFNLENBQ3hCLENBQUNDLFdBQVcsRUFBRUMsS0FBSyxLQUFLO1FBQ3RCLFFBQVFBLEtBQUssQ0FBQ0MsT0FBTztFQUNuQixRQUFBLEtBQUssU0FBUztZQUNaRixXQUFXLENBQUNHLFlBQVksSUFBSSxDQUFDO0VBQzdCSCxVQUFBQSxXQUFXLENBQUNJLFlBQVksSUFBSUgsS0FBSyxDQUFDSSxFQUFFO0VBQ3BDLFVBQUE7RUFDRixRQUFBLEtBQUssT0FBTztZQUNWTCxXQUFXLENBQUNNLFVBQVUsSUFBSSxDQUFDO0VBQzNCTixVQUFBQSxXQUFXLENBQUNPLFVBQVUsSUFBSU4sS0FBSyxDQUFDSSxFQUFFO0VBQ2xDLFVBQUE7RUFDRixRQUFBLEtBQUssSUFBSTtZQUNQTCxXQUFXLENBQUNRLE9BQU8sSUFBSSxDQUFDO0VBQ3hCLFVBQUE7RUFFQTtFQUNKO0VBQ0EsTUFBQSxPQUFPUixXQUFXO0VBQ3BCLElBQUEsQ0FBQyxFQUNEO0VBQ0VHLE1BQUFBLFlBQVksRUFBRSxDQUFDO0VBQ2ZHLE1BQUFBLFVBQVUsRUFBRSxDQUFDO0VBQ2JFLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0VBRVZKLE1BQUFBLFlBQVksRUFBRSxDQUFDO0VBQ2ZHLE1BQUFBLFVBQVUsRUFBRTtFQUNkLEtBQ0YsQ0FBQzs7RUFFRDtFQUNBVixJQUFBQSxLQUFLLENBQUNNLFlBQVksR0FBR0wsSUFBSSxDQUFDSyxZQUFZO0VBQ3RDTixJQUFBQSxLQUFLLENBQUNTLFVBQVUsR0FBR1IsSUFBSSxDQUFDUSxVQUFVO0VBQ2xDVCxJQUFBQSxLQUFLLENBQUNXLE9BQU8sR0FBR1YsSUFBSSxDQUFDVSxPQUFPO0VBQzVCWCxJQUFBQSxLQUFLLENBQUNZLFFBQVEsR0FBR1gsSUFBSSxDQUFDSyxZQUFZLElBQUlMLElBQUksQ0FBQ0ssWUFBWSxHQUFHTCxJQUFJLENBQUNRLFVBQVUsR0FBR1IsSUFBSSxDQUFDVSxPQUFPLENBQUM7TUFFekZYLEtBQUssQ0FBQ2EsYUFBYSxHQUFHWixJQUFJLENBQUNNLFlBQVksR0FBR04sSUFBSSxDQUFDSyxZQUFZO01BQzNETixLQUFLLENBQUNjLFdBQVcsR0FBR2IsSUFBSSxDQUFDUyxVQUFVLEdBQUdULElBQUksQ0FBQ1EsVUFBVTtFQUNyRFQsSUFBQUEsS0FBSyxDQUFDZSxNQUFNLEdBQUcsQ0FBQ2QsSUFBSSxDQUFDTSxZQUFZLEdBQUdOLElBQUksQ0FBQ1MsVUFBVSxLQUFLVCxJQUFJLENBQUNLLFlBQVksR0FBR0wsSUFBSSxDQUFDUSxVQUFVLENBQUM7O0VBRTVGO01BQ0EsTUFBTU8sS0FBSyxHQUFHakIsTUFBTSxDQUFDRyxNQUFNLENBQ3pCLENBQUNDLFdBQVcsRUFBRUMsS0FBSyxLQUFLO1FBQ3RCLFFBQVFBLEtBQUssQ0FBQ0MsT0FBTztFQUNuQixRQUFBLEtBQUssU0FBUztFQUNaRixVQUFBQSxXQUFXLENBQUNjLEVBQUUsSUFBSSxDQUFDYixLQUFLLENBQUNJLEVBQUUsR0FBR1IsS0FBSyxDQUFDZSxNQUFNLEtBQUssQ0FBQztFQUNoRFosVUFBQUEsV0FBVyxDQUFDZSxTQUFTLElBQUksQ0FBQ2QsS0FBSyxDQUFDSSxFQUFFLEdBQUdSLEtBQUssQ0FBQ2EsYUFBYSxLQUFLLENBQUM7RUFDOUQsVUFBQTtFQUNGLFFBQUEsS0FBSyxPQUFPO0VBQ1ZWLFVBQUFBLFdBQVcsQ0FBQ2MsRUFBRSxJQUFJLENBQUNiLEtBQUssQ0FBQ0ksRUFBRSxHQUFHUixLQUFLLENBQUNlLE1BQU0sS0FBSyxDQUFDO0VBQ2hEWixVQUFBQSxXQUFXLENBQUNnQixPQUFPLElBQUksQ0FBQ2YsS0FBSyxDQUFDSSxFQUFFLEdBQUdSLEtBQUssQ0FBQ2MsV0FBVyxLQUFLLENBQUM7RUFDMUQsVUFBQTtFQUVBO0VBQ0o7RUFDQSxNQUFBLE9BQU9YLFdBQVc7RUFDcEIsSUFBQSxDQUFDLEVBQ0Q7RUFDRWMsTUFBQUEsRUFBRSxFQUFFLENBQUM7RUFDTEMsTUFBQUEsU0FBUyxFQUFFLENBQUM7RUFDWkMsTUFBQUEsT0FBTyxFQUFFO0VBQ1gsS0FDRixDQUFDOztFQUVEO01BQ0FuQixLQUFLLENBQUNvQixXQUFXLEdBQUlwQixLQUFLLENBQUNNLFlBQVksR0FBRyxDQUFDLEdBQ3ZDZSxJQUFJLENBQUNDLElBQUksQ0FBQ04sS0FBSyxDQUFDRSxTQUFTLElBQUlsQixLQUFLLENBQUNNLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUNyRGlCLEdBQUc7TUFDUHZCLEtBQUssQ0FBQ3dCLFNBQVMsR0FBSXhCLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsR0FDbkNZLElBQUksQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUNHLE9BQU8sSUFBSW5CLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ2pEYyxHQUFHO0VBQ1B2QixJQUFBQSxLQUFLLENBQUN5QixJQUFJLEdBQUl6QixLQUFLLENBQUNNLFlBQVksR0FBR04sS0FBSyxDQUFDUyxVQUFVLEdBQUcsQ0FBQyxHQUNuRFksSUFBSSxDQUFDQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0MsRUFBRSxJQUFJakIsS0FBSyxDQUFDTSxZQUFZLEdBQUdOLEtBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ2pFYyxHQUFHO0VBRVAsSUFBQSxPQUFPdkIsS0FBSztFQUNkLEVBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU8wQixNQUFNQSxDQUFDcEMsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRVIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0VBQzVDLElBQUEsTUFBTXNDLE1BQU0sR0FBR3JDLENBQUMsR0FBR0ssQ0FBQztFQUVwQixJQUFBLE1BQU1pQyxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsR0FBRyxDQUFFLEVBQUUsR0FBR2pDLENBQUMsR0FBR04sQ0FBQyxHQUFJRixDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pDLElBQUEsTUFBTTBDLENBQUMsR0FBR1QsSUFBSSxDQUFDUSxHQUFHLENBQUUsRUFBRSxHQUFHakMsQ0FBQyxHQUFHK0IsTUFBTSxHQUFJdkMsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUU5QyxPQUFPLENBQUN3QyxDQUFDLEdBQUdFLENBQUMsS0FBS0YsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQixFQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPRyxNQUFNQSxDQUFDekMsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRVIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0VBQzVDLElBQUEsT0FBT0YsT0FBTyxDQUFDdUMsTUFBTSxDQUFDcEMsQ0FBQyxFQUFFLENBQUMsR0FBR0ssQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRVIsQ0FBQyxDQUFDO0VBQ3hDLEVBQUE7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBTzRDLE9BQU9BLENBQUMxQyxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUVULENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE9BQU8sRUFBRTtFQUNqRCxJQUFBLE1BQU1zQyxNQUFNLEdBQUdyQyxDQUFDLEdBQUdLLENBQUM7RUFDcEIsSUFBQSxNQUFNaUMsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLEdBQUcsQ0FBRSxFQUFFLEdBQUdqQyxDQUFDLEdBQUdOLENBQUMsR0FBSUYsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDN0MsSUFBQSxNQUFNMEMsQ0FBQyxHQUFHVCxJQUFJLENBQUNRLEdBQUcsQ0FBRSxFQUFFLEdBQUdqQyxDQUFDLEdBQUcrQixNQUFNLEdBQUl2QyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUVsRCxJQUFBLE1BQU02QyxJQUFJLEdBQUcsRUFBRU4sTUFBTSxHQUFHL0IsQ0FBQyxDQUFDLEdBQUlOLENBQUMsR0FBR00sQ0FBQyxJQUFLa0MsQ0FBQyxHQUFHRixDQUFDLENBQUM7RUFDOUMsSUFBQSxPQUFPL0IsRUFBRSxHQUFHb0MsSUFBSSxHQUFHLElBQUk7RUFDekIsRUFBQTs7RUFFQTtFQUNBO0VBQ0EsRUFBQSxPQUFPQyxNQUFNQSxDQUFDNUMsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRVIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0VBQzVDLElBQUEsTUFBTXNDLE1BQU0sR0FBR3JDLENBQUMsR0FBR0ssQ0FBQztFQUNwQixJQUFBLE1BQU1pQyxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsR0FBRyxDQUFFLEVBQUUsR0FBR2pDLENBQUMsR0FBR04sQ0FBQyxHQUFJRixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUM3QyxJQUFBLE1BQU0wQyxDQUFDLEdBQUdULElBQUksQ0FBQ1EsR0FBRyxDQUFFLEVBQUUsR0FBR2pDLENBQUMsR0FBRytCLE1BQU0sR0FBSXZDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBRWxELElBQUEsTUFBTStDLFFBQVEsR0FBRyxDQUVaLENBQUN2QyxDQUFDLEdBQUdOLENBQUMsSUFBSSxDQUFDLElBQUl3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLENBQUMsR0FBSUYsQ0FBQyxJQUFJLENBQUMsR0FFcEMsQ0FBQyxDQUFDLEVBQUUsR0FBR2hDLENBQUMsR0FBR04sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdNLENBQUMsR0FBRytCLE1BQU0sR0FBR3JDLENBQUMsR0FBR0YsQ0FBQyxJQUFJLENBQUMsR0FBR0UsQ0FBQyxJQUFJd0MsQ0FBQyxHQUFHLENBQUMsR0FBR2xDLENBQUMsR0FBRytCLE1BQU0sR0FBR3JDLENBQUMsSUFBSXNDLENBQ2xGLEdBQ0N4QyxDQUFDLElBQUksQ0FBQyxHQUFHdUMsTUFDVixJQUNDL0IsQ0FBQyxJQUFJLENBQUM7RUFFVixJQUFBLE9BQU95QixJQUFJLENBQUNDLElBQUksQ0FBQ2EsUUFBUSxDQUFDLEdBQUcsSUFBSTtFQUNuQyxFQUFBOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU9DLFFBQVFBLENBQUM5QyxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUVULENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE9BQU8sRUFBRTtFQUNsRCxJQUFBLFNBQVNnRCxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNqQixNQUFBLE9BQU9sQixJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLEdBQUdqQyxDQUFDLEdBQUcyQyxDQUFDLEdBQUtuRCxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQUdpQyxJQUFJLENBQUNRLEdBQUcsQ0FBRSxDQUFDLEdBQUdqQyxDQUFDLEdBQUcwQyxDQUFDLEdBQUtsRCxDQUFDLElBQUksQ0FBRSxDQUFDO0VBQzVFLElBQUE7RUFDQSxJQUFBLE1BQU11QyxNQUFNLEdBQUdyQyxDQUFDLEdBQUdLLENBQUM7TUFFcEIsTUFBTXNDLElBQUksR0FBRyxDQUFDTixNQUFNLElBQUlVLEdBQUcsQ0FBQ1YsTUFBTSxHQUFHckMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsR0FBRytDLEdBQUcsQ0FBQyxDQUFDLEVBQUVWLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHckMsQ0FBQyxHQUFHK0MsR0FBRyxDQUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQ2hGL0IsQ0FBQyxHQUFHeUMsR0FBRyxDQUFDVixNQUFNLEVBQUVyQyxDQUFDLENBQUMsR0FBRytDLEdBQUcsQ0FBQyxDQUFDL0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ3JDLElBQUEsT0FBT08sRUFBRSxHQUFHb0MsSUFBSSxHQUFHLElBQUk7RUFDekIsRUFBQTs7RUFFQTtFQUNBO0VBQ0EsRUFBQSxPQUFPTyxPQUFPQSxDQUFDbEQsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRVIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0VBQzdDLElBQUEsU0FBU2dELEdBQUdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQ2pCLE1BQUEsT0FBT2xCLElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUMsR0FBR2pDLENBQUMsR0FBRzJDLENBQUMsR0FBS25ELENBQUMsSUFBSSxDQUFFLENBQUMsR0FBR2lDLElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUMsR0FBR2pDLENBQUMsR0FBRzBDLENBQUMsR0FBS2xELENBQUMsSUFBSSxDQUFFLENBQUM7RUFDNUUsSUFBQTtFQUNBLElBQUEsTUFBTXVDLE1BQU0sR0FBR3JDLENBQUMsR0FBR0ssQ0FBQztFQUVwQixJQUFBLE1BQU13QyxRQUFRLEdBRVYsRUFBRSxHQUFHN0MsQ0FBQyxHQUFHK0MsR0FBRyxDQUFDLENBQUMsRUFBRVYsTUFBTSxDQUFDLElBQ25CLENBQUMsR0FBRy9CLENBQUMsR0FBR04sQ0FBQyxHQUFHK0MsR0FBRyxDQUFDVixNQUFNLEVBQUUsQ0FBQyxHQUFHckMsQ0FBQyxDQUFDLEdBQUtGLENBQUMsSUFBSSxDQUFDLEdBQUdpRCxHQUFHLENBQUMsQ0FBQyxFQUFFL0MsQ0FBQyxDQUFDLEdBQUcrQyxHQUFHLENBQUNWLE1BQU0sRUFBRXJDLENBQUMsQ0FBRSxDQUFDLEdBQzFFK0IsSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxHQUFHakMsQ0FBQyxHQUFHTixDQUFDLEdBQUlGLENBQUMsSUFBSSxDQUFDLENBQUMsSUFFaENRLENBQUMsSUFBSSxDQUFDLEdBQUd5QyxHQUFHLENBQUMsQ0FBQyxFQUFFL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHK0MsR0FBRyxDQUFDVixNQUFNLEVBQUVyQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQzlDLEdBRUQsQ0FDRSxDQUFDLEdBQUdNLENBQUMsR0FBRytCLE1BQU0sSUFBSSxDQUFDLEdBQUdyQyxDQUFDLEdBQUdxQyxNQUFNLENBQUMsR0FBR04sSUFBSSxDQUFDUSxHQUFHLENBQUUsQ0FBQyxHQUFHakMsQ0FBQyxJQUFJK0IsTUFBTSxHQUFHckMsQ0FBQyxDQUFDLEdBQUlGLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDM0V1QyxNQUFNLEdBQUd2QyxDQUFDLElBQUksQ0FBQyxHQUFHaUQsR0FBRyxDQUFDLENBQUMsR0FBR1YsTUFBTSxFQUFFLENBQUMsR0FBR3JDLENBQUMsQ0FBQyxLQUUxQ00sQ0FBQyxJQUFJLENBQUMsR0FBR3lDLEdBQUcsQ0FBQ1YsTUFBTSxFQUFFckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUUvQjtFQUVELElBQUEsT0FBTytCLElBQUksQ0FBQ0MsSUFBSSxDQUFDYSxRQUFRLENBQUMsR0FBRyxJQUFJO0VBQ25DLEVBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9NLFFBQVFBLENBQUNuRCxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUVULENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE9BQU8sRUFBRTtFQUNsRCxJQUFBLE9BQU9GLE9BQU8sQ0FBQ2lELFFBQVEsQ0FBQzlDLENBQUMsRUFBRSxDQUFDLEdBQUdLLENBQUMsRUFBRSxDQUFDQyxDQUFDLEVBQUVDLEVBQUUsRUFBRVQsQ0FBQyxDQUFDO0VBQzlDLEVBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9zRCxPQUFPQSxDQUFDcEQsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRVIsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0VBQzdDLElBQUEsT0FBT0YsT0FBTyxDQUFDcUQsT0FBTyxDQUFDbEQsQ0FBQyxFQUFFLENBQUMsR0FBR0ssQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRVIsQ0FBQyxDQUFDO0VBQ3pDLEVBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU91RCxPQUFPQSxDQUFDQyxDQUFDLEVBQUV0RCxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFUixDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7RUFDaEQsSUFBQSxJQUFJLENBQUN1RCxDQUFDLEVBQUUsT0FBTyxDQUFDO0VBRWhCLElBQUEsTUFBTWpCLE1BQU0sR0FBR3JDLENBQUMsR0FBR0ssQ0FBQztNQUNwQixNQUFNa0QsSUFBSSxHQUFLeEIsSUFBSSxDQUFDeUIsRUFBRSxHQUFHMUQsQ0FBQyxJQUFJLENBQUMsR0FBSUUsQ0FBQyxJQUFJLENBQUMsR0FBSStCLElBQUksQ0FBQ1EsR0FBRyxDQUFFLENBQUNGLE1BQU0sR0FBRy9CLENBQUMsR0FBSVIsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUU3RSxJQUFJMkQsQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJQyxJQUFJLEdBQUcsQ0FBQztNQUNaLElBQUlDLEdBQUcsR0FBRyxDQUFDO01BQ1gsR0FBRztFQUNERixNQUFBQSxDQUFDLElBQUksQ0FBQztRQUVOQyxJQUFJLEdBQUdELENBQUMsR0FDSjFCLElBQUksQ0FBQzZCLEdBQUcsQ0FBRTdCLElBQUksQ0FBQ3lCLEVBQUUsR0FBR25CLE1BQU0sR0FBR29CLENBQUMsR0FBSXpELENBQUMsQ0FBQyxHQUNwQytCLElBQUksQ0FBQ1EsR0FBRyxDQUFDLElBQUksSUFBS2pDLENBQUMsSUFBSSxDQUFDLEdBQUdSLENBQUMsSUFBSSxDQUFDLEdBQU1pQyxJQUFJLENBQUN5QixFQUFFLElBQUksQ0FBQyxHQUFHQyxDQUFDLElBQUksQ0FBQyxHQUFHM0QsQ0FBQyxJQUFJLENBQUMsR0FBSUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHc0QsQ0FBQyxDQUFDO0VBRTFGSyxNQUFBQSxHQUFHLElBQUlELElBQUk7RUFDYixJQUFBLENBQUMsUUFBUUQsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7TUFFbEIsT0FBT0YsSUFBSSxHQUFHSSxHQUFHO0VBQ25CLEVBQUE7O0VBRUE7RUFDQSxFQUFBLE9BQU9FLE9BQU9BLENBQUNQLENBQUMsRUFBRXRELENBQUMsRUFBRUssQ0FBQyxFQUFFQyxDQUFDLEVBQUVSLENBQUMsR0FBR0QsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE9BQU8sRUFBRTtFQUNoRCxJQUFBLE9BQU9GLE9BQU8sQ0FBQ3dELE9BQU8sQ0FBQ0MsQ0FBQyxFQUFFdEQsQ0FBQyxFQUFFLENBQUMsR0FBR0ssQ0FBQyxFQUFFLENBQUNDLENBQUMsRUFBRVIsQ0FBQyxDQUFDO0VBQzVDLEVBQUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUEsT0FBT2dFLE9BQU9BLENBQUM7RUFDYnhDLElBQUFBLFFBQVEsRUFBRXlDLEVBQUU7RUFDWjVCLElBQUFBLElBQUksRUFBRTZCLEVBQUU7RUFDUnZDLElBQUFBLE1BQU0sRUFBRXdDLENBQUM7RUFDVG5FLElBQUFBO0VBQ0YsR0FBQyxFQUFFO01BQ0QsU0FBU29FLElBQUlBLENBQUNDLENBQUMsRUFBRTtFQUNmLE1BQUEsT0FBU0EsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUtBLENBQUMsS0FBSyxDQUFDLEdBQUksQ0FBQyxHQUFHLEVBQUc7RUFDNUMsSUFBQTtNQUVBLFNBQVNDLEtBQUtBLENBQUNDLENBQUMsRUFBRTtRQUNoQixPQUFPdEMsSUFBSSxDQUFDdUMsR0FBRyxDQUFDRCxDQUFDLElBQUksQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQztFQUM5QixJQUFBO0VBRUEsSUFBQSxNQUFNRSxHQUFHLEdBQUcsQ0FBQ1AsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDO0VBQzVCLElBQUEsTUFBTVEsR0FBRyxHQUFHUCxDQUFDLEdBQUcsSUFBSTtFQUVwQixJQUFBLE1BQU1RLEVBQUUsR0FBRzNFLENBQUMsSUFBSSxDQUFDO0VBQ2pCLElBQUEsTUFBTTRFLENBQUMsR0FBR04sS0FBSyxDQUFDTCxFQUFFLENBQUM7RUFDbkIsSUFBQSxNQUFNZixDQUFDLEdBQUkwQixDQUFDLElBQUlBLENBQUMsR0FBR1gsRUFBRSxJQUFJLENBQUMsR0FBR1csQ0FBQyxHQUFHWCxFQUFFLEdBQUdBLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBSVEsR0FBRztFQUN2RCxJQUFBLE1BQU1qRSxDQUFDLEdBQUc0RCxJQUFJLENBQUNILEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBR2pFLENBQUMsR0FBR2tELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQzNDLE1BQU1oRCxDQUFDLEdBQUl5RSxFQUFFLEdBQUdMLEtBQUssQ0FBQ0wsRUFBRSxDQUFDLEdBQUl6RCxDQUFDO0VBQzlCLElBQUEsTUFBTTJDLENBQUMsR0FBSSxDQUFDM0MsQ0FBQyxHQUFHTixDQUFDLEdBQUl5RSxFQUFFO01BQ3ZCLE1BQU1FLEdBQUcsR0FBSzNFLENBQUMsSUFBSSxDQUFDLEdBQUdNLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBR3lCLElBQUksQ0FBQ1EsR0FBRyxDQUFDVSxDQUFDLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBR2xCLElBQUksQ0FBQ1EsR0FBRyxDQUFDVSxDQUFDLENBQUMsQ0FBQztNQUNuRSxNQUFNMUMsRUFBRSxHQUFJaUUsR0FBRyxHQUFHQSxHQUFHLEdBQUdHLEdBQUcsR0FBRyxJQUFLLENBQUM7O0VBRXBDLElBQUEsTUFBTUMsT0FBTyxHQUFHckUsRUFBRSxHQUFHLElBQUk7TUFDekIsT0FBTztRQUNMRCxDQUFDO1FBQ0ROLENBQUM7RUFDRE8sTUFBQUEsRUFBRSxFQUFFcUUsT0FBTztFQUNYOUUsTUFBQUE7T0FDRDtFQUNILEVBQUE7SUFFQSxPQUFPK0UsUUFBUUEsR0FBRztFQUNoQixJQUFBLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0VBQ2pELEVBQUE7RUFDRjs7RUMvVEE7O0VDREE7O0VBSUFDLElBQUksQ0FBQ0MsU0FBUyxHQUFJQyxLQUFLLElBQUs7RUFDMUIsRUFBQSxNQUFNQyxNQUFNLEdBQUdyRixPQUFPLENBQUNpRSxPQUFPLENBQUM7TUFBQyxHQUFHbUIsS0FBSyxDQUFDRSxJQUFJO0VBQUVyRixJQUFBQSxDQUFDLEVBQUVELE9BQU8sQ0FBQ0MsQ0FBQyxDQUFDQztFQUFPLEdBQUMsQ0FBQzs7RUFFckU7RUFDQSxFQUFBLE1BQU1DLENBQUMsR0FBRyxDQUFDb0YsS0FBSyxDQUFDRixNQUFNLENBQUNsRixDQUFDLENBQUMsR0FBR2tGLE1BQU0sQ0FBQ2xGLENBQUMsR0FBRyxHQUFHO0VBQzNDLEVBQUEsTUFBTUssQ0FBQyxHQUFHLENBQUMrRSxLQUFLLENBQUNGLE1BQU0sQ0FBQzdFLENBQUMsQ0FBQyxHQUFHNkUsTUFBTSxDQUFDN0UsQ0FBQyxHQUFHLEdBQUc7RUFDM0MsRUFBQSxNQUFNQyxDQUFDLEdBQUcsQ0FBQzhFLEtBQUssQ0FBQ0YsTUFBTSxDQUFDNUUsQ0FBQyxDQUFDLEdBQUc0RSxNQUFNLENBQUM1RSxDQUFDLEdBQUcsR0FBRztFQUMzQyxFQUFBLE1BQU1DLEVBQUUsR0FBRyxDQUFDNkUsS0FBSyxDQUFDRixNQUFNLENBQUMzRSxFQUFFLENBQUMsR0FBRzJFLE1BQU0sQ0FBQzNFLEVBQUUsR0FBRyxHQUFHO0VBQzlDLEVBQUEsTUFBTVQsQ0FBQyxHQUFHLENBQUNzRixLQUFLLENBQUNGLE1BQU0sQ0FBQ3BGLENBQUMsQ0FBQyxHQUFHb0YsTUFBTSxDQUFDcEYsQ0FBQyxHQUFHRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsT0FBTztFQUV6RCxFQUFBLE1BQU1zRixTQUFTLEdBQUc7TUFDaEIvRCxRQUFRLEVBQUV6QixPQUFPLENBQUM0QyxNQUFNLENBQUN6QyxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQ2pDaUIsSUFBQUEsYUFBYSxFQUFFMUIsT0FBTyxDQUFDc0QsUUFBUSxDQUFDbkQsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxDQUFDO0VBQzVDaUIsSUFBQUEsV0FBVyxFQUFFM0IsT0FBTyxDQUFDaUQsUUFBUSxDQUFDOUMsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxDQUFDO0VBQzFDa0IsSUFBQUEsTUFBTSxFQUFFNUIsT0FBTyxDQUFDNkMsT0FBTyxDQUFDMUMsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsRUFBRSxDQUFDO01BQ3BDdUIsV0FBVyxFQUFFakMsT0FBTyxDQUFDdUQsT0FBTyxDQUFDcEQsQ0FBQyxFQUFFSyxDQUFDLEVBQUVDLENBQUMsQ0FBQztNQUNyQzRCLFNBQVMsRUFBRXJDLE9BQU8sQ0FBQ3FELE9BQU8sQ0FBQ2xELENBQUMsRUFBRUssQ0FBQyxFQUFFQyxDQUFDLENBQUM7TUFDbkM2QixJQUFJLEVBQUV0QyxPQUFPLENBQUMrQyxNQUFNLENBQUM1QyxDQUFDLEVBQUVLLENBQUMsRUFBRUMsQ0FBQztLQUM3QjtJQUVEeUUsSUFBSSxDQUFDTyxXQUFXLENBQUM7RUFDZkosSUFBQUEsTUFBTSxFQUFFO1FBQ05sRixDQUFDO1FBQUVLLENBQUM7UUFBRUMsQ0FBQztRQUFFQyxFQUFFO0VBQUVULE1BQUFBO09BQ2Q7RUFDRHVGLElBQUFBO0VBQ0YsR0FBQyxDQUFDO0VBQ0osQ0FBQzs7Ozs7OyJ9");class DDMFit extends AccumulableElement{static get properties(){return{}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.observed={},this.predicted={},this.working=!1,this.queued=!1,this.worker=new WorkerFactory,this.worker.onmessage=t=>{this.working=!1,this.predicted=t.data.predicted,this.a=t.data.params.a,this.z=t.data.params.z,this.v=t.data.params.v,this.t0=t.data.params.t0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("ddm-fit-update",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0},bubbles:!0})),this.queued&&this.fit()},this.fit()}fit(){this.working?this.queued=!0:(this.worker.postMessage(this.observed),this.working=!0,this.queued=!1)}clear(){this.observed={},this.fit()}set(t){this.observed=structuredClone(t),this.fit()}static get styles(){return[super.styles,i$3`
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
      </div>`}}customElements.define("ddm-parameters",DDMParameters);class DDMModel extends(DecidablesMixinResizeable(AccumulableElement)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){select(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=uniform(0,1)()}alignPath(t,e,r,n,a){const i=normal.source(lcg(t))(0,this.precision**.5),o=-e/2,s=e/2,l=e*r-e/2,c=n*this.precision,u=[];for(u.push({t:a,e:l});u.at(-1).e>o&&u.at(-1).e<s;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+c+DDMMath.s.DEFAULT*i()});return u}alignCorrectDistribution(t,e,r,n){const a=DDMMath.azv2pC(t,e,r),i=[{t:0,d:0},{t:this.t0,d:0}];for(let o=this.scale.time.min;o<=this.scale.time.max-n;o+=this.scale.time.step)o>0&&i.push({t:n+o,d:DDMMath.tazv2gC(o/1e3,t,e,r)/a});return i}alignErrorDistribution(t,e,r,n){const a=DDMMath.azv2pE(t,e,r),i=[{t:0,d:0},{t:this.t0,d:0}];for(let o=this.scale.time.min;o<=this.scale.time.max-n;o+=this.scale.time.step)o>0&&i.push({t:n+o,d:DDMMath.tazv2gE(o/1e3,t,e,r)/a});return i}alignState(){this.random=uniform.source(lcg(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},(t,e)=>{const r=this.random()/1e3*997,n=this.animate&&e===this.trials-1,a=this.alignPath(r,this.a,this.z,this.v,this.t0),i=a.at(-1).e<=this.bounds.lower?"error":a.at(-1).e>=this.bounds.upper?"correct":"nr",o="error"===i?a.at(-2).t+(this.bounds.lower-a.at(-2).e)/(a.at(-1).e-a.at(-2).e)*(1e3*this.precision):"correct"===i?a.at(-2).t+(this.bounds.upper-a.at(-2).e)/(a.at(-1).e-a.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:a,rt:o,outcome:i,animate:n}});const t=DDMMath.trials2stats(this.data.trials.filter(t=>!t.animate));this.data={...this.data,...t},this.model.accuracy=DDMMath.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=DDMMath.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=DDMMath.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=DDMMath.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=DDMMath.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,i$3`
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

        .measure .line.short {
          stroke-width: 0;
        }

        .measure .markers {
          fill: none;
          stroke-width: 0;
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

        .measure.z .label,
        /* Hack to avoid Safari weirdness */
        .measure.z .label tspan {
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

        .measure-arrow {
          fill: context-stroke;
          stroke: context-stroke;
        }

        .measure-arrow .arrow {
          stroke-width: 1;
        }

        .measure-arrow.capped .cap {
          stroke-width: 2;
        }

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .measure-arrow.a {
          fill: var(---color-a);
          stroke: var(---color-a);
        }

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .measure-arrow.z {
          fill: var(---color-z);
          stroke: var(---color-z);
        }

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .measure-arrow.v {
          fill: var(---color-v);
          stroke: var(---color-v);
        }

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .measure-arrow.t0 {
          fill: var(---color-t0);
          stroke: var(---color-t0);
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

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .cap.correct {
          fill: var(---color-correct-dark);
          stroke: var(---color-correct-dark);
          stroke-dasharray: 100%;
        }

        /* Hack to avoid lack of context-stroke and context-fill in Safari */
        .cap.error {
          fill: var(---color-error-dark);
          stroke: var(---color-error-dark);
          stroke-dasharray: 100%;
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
      `]}render(){return x$1``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,a;e/r>1.5?(a=r,n=1.5*a):(n=e,a=n/1.5);const i=1*this.rem,o=3*this.rem,s=3.75*this.rem,l=3.25*this.rem,c=a-(i+o),u=n-(s+l),d=.75*this.rem,h=.5*c,p=.25*c-d,g=.75*this.rem,y=.9*u,b=.1*u-g,f=parseInt(this.getComputedStyleValue("---transition-duration"),10),$=linear().domain([this.scale.time.min,this.scale.time.max]).range([0,y]),m=linear().domain([this.scale.evidence.min,this.scale.evidence.max]).range([h,0]),I=linear().domain([this.scale.density.min,this.scale.density.max]).range([p,0]),E=linear().domain([this.scale.density.min,this.scale.density.max]).range([0,p]),A=linear().domain([0,1]).range([0,c]),C=drag().subject((t,e)=>({x:$(e.t0),y:m(e.startingPoint)})).on("start",t=>{select(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=$.invert(t.x),n=(m.invert(t.y)+this.a/2)/this.a;r="z"===e?$.invert(t.subject.x):r<DDMMath.t0.MIN?DDMMath.t0.MIN:r>DDMMath.t0.MAX?DDMMath.t0.MAX:r,n="t0"===e?(m.invert(t.subject.y)+this.a/2)/this.a:n<DDMMath.z.MIN?DDMMath.z.MIN:n>DDMMath.z.MAX?DDMMath.z.MAX:n,this.t0=r,this.z=n,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))}).on("end",t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1}),v=drag().on("start",t=>{select(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;let e=(m.invert(t.y)-this.startingPoint)/($.invert(t.x)-this.t0)*1e3;e=e<DDMMath.v.MIN?DDMMath.v.MIN:e>DDMMath.v.MAX?DDMMath.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))}).on("end",t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1}),S=drag().subject((t,e)=>({x:0,y:m(e.value)})).on("start",t=>{select(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=m.invert(t.y);let r=Math.abs(2*e);r=r<DDMMath.a.MIN?DDMMath.a.MIN:r>DDMMath.a.MAX?DDMMath.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))}).on("end",t=>{select(t.currentTarget).classed("dragging",!1),this.drag=!1}),B=line().x(t=>$(t.t)).y(t=>m(t.e)),U=line().x(t=>$(t.t)).y(t=>I(t.d)),R=line().x(t=>$(t.t)).y(t=>E(t.d)),F=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),T=F.enter().append("svg").classed("main",!0).html(AccumulableElement.svgDefs),x=T.append("defs"),Q=t=>{x.append("marker").attr("id",`measure-arrow-${t}`).attr("class",`measure-arrow ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12").append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z")},D=t=>{const e=x.append("marker").attr("id",`measure-capped-arrow-${t}`).attr("class",`measure-arrow capped ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12");e.append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z"),e.append("path").attr("class","cap").attr("d","M 0 -4 l 0 8")};Q("a"),Q("z"),D("v"),Q("t0"),D("t0");const N=t=>{x.append("marker").attr("id",`model-sd-cap-${t}`).attr("class",`model-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),x.append("marker").attr("id",`data-sd-cap-${t}`).attr("class",`data-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6")};N("error"),N("correct");const w=x.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",m(this.bounds.upper)).attr("y2",m(this.bounds.lower));w.append("stop").classed("stop-0",!0).attr("offset","0%"),w.append("stop").classed("stop-100",!0).attr("offset","100%");const M=T.merge(F).attr("viewBox",`0 0 ${n} ${a}`),O=M.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:I,densityLine:U,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:E,densityLine:R,alignDistribution:this.alignErrorDistribution.bind(this)}]),L=T.append("g").classed("plot evidence",!0),_=O.enter().append("g").attr("class",t=>`plot density ${t.outcome}`),k=T.append("g").classed("plot accuracy",!0),P=M.select(".plot.evidence").attr("transform",`translate(${s}, ${i+p+d})`),V=_.merge(O).attr("transform",t=>`translate(${s}, ${"correct"===t.outcome?i:i+p+h+2*d})`),H=M.select(".plot.accuracy").attr("transform",`translate(${s+y+g}, ${i})`);L.append("clipPath").attr("id","clip-evidence").append("rect"),P.select("clipPath rect").attr("y",m(this.bounds.upper)).attr("height",m(this.bounds.lower)-m(this.bounds.upper)+1).attr("width",y+1);const G=L.append("g").classed("underlayer",!0),W=_.append("g").classed("underlayer",!0),j=k.append("g").classed("underlayer",!0),Y=P.select(".underlayer"),z=V.select(".underlayer"),K=H.select(".underlayer");L.append("g").classed("content",!0).append("g").classed("paths",!0);const X=_.append("g").classed("content",!0);k.append("g").classed("content",!0);const J=P.select(".content"),Z=V.select(".content"),q=H.select(".content");L.append("g").classed("overlayer",!0),_.append("g").classed("overlayer",!0),k.append("g").classed("overlayer",!0);const tt=P.select(".overlayer"),et=V.select(".overlayer");G.append("rect").classed("background",!0),W.append("rect").classed("background",!0),Y.select(".background").transition().duration(this.drag?0:f).ease(cubicOut).attr("y",m(this.bounds.upper)).attr("height",m(this.bounds.lower)-m(this.bounds.upper)).attr("width",y),z.select(".background").transition().duration(f).ease(cubicOut).attr("height",p).attr("width",y),W.filter(t=>"error"===t.outcome).append("g").classed("axis time",!0);const rt=z.filter(t=>"error"===t.outcome).select(".axis.time").attr("transform",`translate(0, ${p+.25*this.rem})`);rt.transition().duration(f).ease(cubicOut).call(axisBottom($)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const nt=W.filter(t=>"error"===t.outcome).append("text").classed("title time",!0).attr("text-anchor","middle");nt.append("tspan").classed("name",!0).text("Time (ms)"),z.filter(t=>"error"===t.outcome).select(".title.time").transition().duration(f).ease(cubicOut).attr("transform",`translate(${y/2}, ${p+2.5*this.rem})`),G.append("g").classed("axis evidence",!0),W.append("g").attr("class",t=>`axis density ${t.outcome}`),j.append("g").classed("axis accuracy",!0);const at=Y.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),it=z.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),ot=K.select(".axis.accuracy").attr("transform",`translate(${b+.25*this.rem}, 0)`),st=at.transition().duration(f).ease(cubicOut).call(axisLeft(m)).attr("font-size",null).attr("font-family",null),lt=it.transition().duration(f).ease(cubicOut).each((t,e,r)=>{axisLeft(t.densityScale).ticks(2)(select(r[e]))}).attr("font-size",null).attr("font-family",null),ct=ot.transition().duration(f).ease(cubicOut).call(axisRight(A)).attr("font-size",null).attr("font-family",null);st.selectAll("line, path").attr("stroke",null),lt.selectAll("line, path").attr("stroke",null),ct.selectAll("line, path").attr("stroke",null);const ut=G.append("text").classed("title evidence",!0).attr("text-anchor","middle"),dt=W.append("text").attr("class",t=>`title density ${t.outcome}`).attr("text-anchor","middle"),ht=j.append("text").classed("title accuracy",!0).attr("text-anchor","middle");ut.append("tspan").classed("name",!0).text("Evidence"),dt.append("tspan").classed("name",!0).text("Density"),ht.append("tspan").classed("name",!0).text("Accuracy"),Y.select(".title.evidence").transition().duration(f).ease(cubicOut).attr("transform",`translate(${-2.5*this.rem}, ${h/2})rotate(-90)`),z.select(".title.density").transition().duration(f).ease(cubicOut).attr("transform",`translate(${-2.5*this.rem}, ${p/2})rotate(-90)`),K.select(".title.accuracy").transition().duration(f).ease(cubicOut).attr("transform",`translate(${b+2.25*this.rem}, ${c/2})rotate(90)`);const pt=J.select(".paths").selectAll(".path").data(this.data.trials.filter(t=>void 0!==t.path)),gt=local(),yt=pt.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",(t,e)=>{if(!this.drag){select(t.currentTarget).classed("highlight",!0).raise();const r=tt.append("g").classed(`rt-label ${e.outcome}`,!0),n=r.append("rect"),a=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",$(e.rt)).attr("y","correct"===e.outcome?m(this.bounds.upper)-.25*this.rem:m(this.bounds.lower)+.125*this.rem).node().getBBox();n.attr("x",a.x-.125*this.rem).attr("y",a.y+.125*this.rem).attr("width",a.width+.25*this.rem).attr("height",a.height-.25*this.rem),gt.set(t.currentTarget,r)}}).on("pointerout",(t,e)=>{this.drag||(select(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),gt.get(t.currentTarget).remove())});yt.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const bt=yt.merge(pt).attr("class",t=>`path ${t.outcome}`);bt.select(".curve").transition().duration(this.drag?0:f).ease(cubicOut).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attrTween("d",(t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.a?n.a:this.a,this.a),i=interpolate$1(void 0!==n.z?n.z:this.z,this.z),o=interpolate$1(void 0!==n.v?n.v:this.v,this.v),s=interpolate$1(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=a(e),n.z=i(e),n.v=o(e),n.t0=s(e);const r=this.alignPath(t.seed,n.a,n.z,n.v,n.t0);return B(r)}});const ft=bt.filter(t=>t.animate&&!this.paused);if(!ft.empty()){const t=ft.attr("data-new-trial-ease-time"),e=e=>linear().domain([0,1]).range([t,1])(e),r=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r));ft.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),ft.transition("new").duration(e=>Math.floor(1.5*e.rt*(1-t))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",(t,e,n)=>{const a=interpolate$1(n[e].getAttribute("stroke-dashoffset"),0);return t=>a(r(linear$1)(t))}).on("end",(t,e,r)=>{select(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))})}const $t=bt.filter(t=>t.animate&&this.paused);if(!$t.empty()){const t=$t.attr("data-new-trial-ease-time");$t.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",()=>interpolate$1(1,0)(linear$1(t)))}bt.filter(t=>!t.animate).attr("data-new-trial-ease-time",null),pt.exit().remove();const mt=X.append("g").attr("class",t=>`dist ${t.outcome}`);mt.append("path").classed("curve",!0),Z.select(".dist").select(".curve").transition().duration(this.drag?0:f).ease(cubicOut).attrTween("d",(t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.a?n.a:this.a,this.a),i=interpolate$1(void 0!==n.z?n.z:this.z,this.z),o=interpolate$1(void 0!==n.v?n.v:this.v,this.v),s=interpolate$1(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=a(e),n.z=i(e),n.v=o(e),n.t0=s(e);const r=t.alignDistribution(n.a,n.z,n.v,n.t0);return t.densityLine(r)}});const It=J.selectAll(".rt").data(this.data.trials),Et=It.enter().append("g");Et.append("line").classed("mark",!0).attr("x1",t=>$(t.rt)).attr("x2",t=>$(t.rt)).attr("y1",t=>"correct"===t.outcome?m(1)-.125*this.rem:m(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?m(1)-.675*this.rem:m(-1)+.675*this.rem);const At=Et.merge(It).attr("class",t=>`rt ${t.outcome}`);At.filter(t=>!t.animate).select(".mark").transition().duration(this.drag?0:f).ease(cubicOut).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attr("x1",t=>$(t.rt)).attr("x2",t=>$(t.rt)).attr("y1",t=>"correct"===t.outcome?m(1)-.125*this.rem:m(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?m(1)-.675*this.rem:m(-1)+.675*this.rem),It.exit().remove();const Ct=q.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),vt=Ct.enter().append("g").attr("class",(t,e)=>"accuracy model "+(0===e?"correct":"error"));vt.append("rect").classed("bar",!0).attr("x",0),vt.merge(Ct).select("rect").transition().duration(this.drag?0:f).ease(cubicOut).attr("y",(t,e)=>A(0===e?0:1-t)).attr("width",b).attr("height",t=>A(t)),Ct.exit().remove();const St=q.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),Bt=St.enter().append("g").classed("accuracy data",!0);Bt.append("line").classed("mark",!0);const Ut=Bt.merge(St).attr("class",t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error"));Ut.select(".mark").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",0+.25*this.rem).attr("x2",b-.25*this.rem).attr("y1",t=>A(t)-1).attr("y2",t=>A(t)-1),St.exit().remove();const Rt=tt.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),Ft=Rt.enter().append("g").attr("class",(t,e)=>"boundary "+(0===e?"correct":"error"));Ft.append("line").classed("line",!0),Ft.append("line").classed("line touch",!0);const Tt=Ft.merge(Rt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?DDMMath.a.STEP:DDMMath.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?DDMMath.a.STEP:DDMMath.a.JUMP}r=r<DDMMath.a.MIN?DDMMath.a.MIN:r>DDMMath.a.MAX?DDMMath.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Tt.call(S):Tt.on(".drag",null)),Tt.select(".line").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.min)).attr("x2",$(this.scale.time.max)).attr("y1",t=>m(t.value)).attr("y2",t=>m(t.value)),Tt.select(".line.touch").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.min)).attr("x2",$(this.scale.time.max)).attr("y1",t=>m(t.value)).attr("y2",t=>m(t.value)),Rt.exit().remove();const xt=tt.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Qt=xt.enter().append("g").classed("drift",!0);Qt.append("line").classed("line",!0),Qt.append("line").classed("line touch",!0),Qt.append("path").classed("arrow",!0),Qt.append("path").classed("arrow touch",!0);const Dt=Qt.merge(xt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?DDMMath.v.STEP:DDMMath.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?DDMMath.v.STEP:DDMMath.v.JUMP}e=e<DDMMath.v.MIN?DDMMath.v.MIN:e>DDMMath.v.MAX?DDMMath.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Dt.call(v):Dt.on(".drag",null));const Nt=(m(0)-m(1))/($(1)-$(0));Dt.transition().duration(this.drag?0:f).ease(cubicOut).attr("transform",t=>`translate(${$(t.t0)}, ${m(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*Nt)*(180/Math.PI)})`),Dt.select(".line").attr("x2",$(200)),Dt.select(".line.touch").attr("x2",$(200)),Dt.select(".arrow").attr("d",`\n        M ${$(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Dt.select(".arrow.touch").attr("d",`\n        M ${$(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),xt.exit().remove();const wt=tt.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Mt=wt.enter().append("g").classed("t0z",!0);Mt.append("line").classed("line",!0),Mt.append("line").classed("line touch",!0),Mt.append("circle").classed("point touch",!0);const Ot=Mt.merge(wt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?DDMMath.z.STEP:DDMMath.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?DDMMath.z.STEP:DDMMath.z.JUMP}e=e<DDMMath.z.MIN?DDMMath.z.MIN:e>DDMMath.z.MAX?DDMMath.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?DDMMath.t0.STEP:DDMMath.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?DDMMath.t0.STEP:DDMMath.t0.JUMP}e=e<DDMMath.t0.MIN?DDMMath.t0.MIN:e>DDMMath.t0.MAX?DDMMath.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Ot.call(C):Ot.on(".drag",null)),Ot.select(".line").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(0)).attr("x2",t=>$(t.t0)).attr("y1",t=>m(t.startingPoint)).attr("y2",t=>m(t.startingPoint)),Ot.select(".line.touch").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(0)).attr("x2",t=>$(t.t0)).attr("y1",t=>m(t.startingPoint)).attr("y2",t=>m(t.startingPoint)),Ot.select(".point").transition().duration(this.drag?0:f).ease(cubicOut).attr("cx",t=>$(t.t0)).attr("cy",t=>m(t.startingPoint)),wt.exit().remove();const Lt=tt.selectAll(".measure.a").data(this.measures?[this.a]:[]),_t=Lt.enter().append("g").classed("measure a",!0);_t.append("line").classed("line",!0),_t.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-a)").attr("marker-end","url(#measure-arrow-a)");const kt=_t.append("text").classed("label",!0);kt.append("tspan").classed("a math-var",!0).text("a"),kt.append("tspan").classed("equals",!0).text(" = "),kt.append("tspan").classed("value",!0);const Pt=Math.abs(m(this.bounds.upper)-m(this.bounds.lower))<=4,Vt=_t.merge(Lt);Vt.select(".line").classed("short",Pt).transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.max)-.75*this.rem).attr("y1",m(this.bounds.upper)+2).attr("x2",$(this.scale.time.max)-.75*this.rem).attr("y2",m(this.bounds.lower)-2),Vt.select(".markers").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.max)-.75*this.rem).attr("y1",m(this.bounds.upper)).attr("x2",$(this.scale.time.max)-.75*this.rem).attr("y2",m(this.bounds.lower));Vt.select(".label").transition().duration(this.drag?0:f).ease(cubicOut).attr("x",$(this.scale.time.max)).attr("y",m(this.bounds.upper)-.25*this.rem).select(".value").text(format(".2f")(this.a)),Lt.exit().remove();const Ht=tt.selectAll(".measure.z").data(this.measures?[this.z]:[]),Gt=Ht.enter().append("g").classed("measure z",!0);Gt.append("line").classed("line",!0),Gt.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-z)").attr("marker-end","url(#measure-arrow-z)");const Wt=Gt.append("text").classed("label",!0);Wt.append("tspan").classed("z math-var",!0).text("z"),Wt.append("tspan").classed("equals",!0).text(" = "),Wt.append("tspan").classed("value",!0);const jt=Math.abs(m(this.startingPoint)-m(this.bounds.lower))<=4,Yt=Gt.merge(Ht);Yt.select(".line").classed("short",jt).transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.min)+.75*this.rem).attr("y1",m(this.startingPoint)+2).attr("x2",$(this.scale.time.min)+.75*this.rem).attr("y2",m(this.bounds.lower)-2),Yt.select(".markers").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(this.scale.time.min)+.75*this.rem).attr("y1",m(this.startingPoint)).attr("x2",$(this.scale.time.min)+.75*this.rem).attr("y2",m(this.bounds.lower));Yt.select(".label").transition().duration(this.drag?0:f).ease(cubicOut).attr("x",$(this.scale.time.min)).attr("y",m(this.bounds.lower)+.125*this.rem).select(".value").text(format(".0%")(this.z)),Ht.exit().remove();const zt=tt.selectAll(".measure.v").data(this.measures?[this.v]:[]),Kt=zt.enter().append("g").classed("measure v",!0);Kt.append("path").classed("line",!0),Kt.append("path").classed("markers",!0).attr("marker-start","url(#measure-capped-arrow-v)").attr("marker-end","url(#measure-capped-arrow-v)");const Xt=Kt.append("text").classed("label",!0);Xt.append("tspan").classed("v math-var",!0).text("v"),Xt.append("tspan").classed("equals",!0).text(" = "),Xt.append("tspan").classed("value",!0);const Jt=$(200)-$(0)+.75*this.rem,Zt=Math.atan(this.v/1e3*Nt),qt=Math.cos(Zt)*Jt,te=Math.sin(Zt)*Jt,ee=2/Jt,re=Math.atan(this.v/1e3*Nt)-ee,ne=Math.cos(ee)*Jt,ae=Math.sin(ee)*Jt,ie=Math.cos(re)*Jt,oe=Math.sin(re)*Jt,se=re*Jt<=4,le=Kt.merge(zt);le.select(".line").classed("short",se).transition().duration(this.drag?0:f).ease(cubicOut).attr("d",`\n        M ${$(this.t0)+ne}, ${m(this.startingPoint)-ae}\n        A ${$(200)-$(0)+.75*this.rem} ${$(200)-$(0)+.75*this.rem} 0 0 0 ${$(this.t0)+ie} ${m(this.startingPoint)-oe}\n      `),le.select(".markers").transition().duration(this.drag?0:f).ease(cubicOut).attr("d",`\n        M ${$(this.t0+200)+.75*this.rem}, ${m(this.startingPoint)}\n        A ${$(200)-$(0)+.75*this.rem} ${$(200)-$(0)+.75*this.rem} 0 0 0 ${$(this.t0)+qt} ${m(this.startingPoint)-te}\n      `);le.select(".label").transition().duration(this.drag?0:f).ease(cubicOut).attr("x",$(this.t0+200)+.5*this.rem).attr("y",m(this.bounds.upper)-.25*this.rem).select(".value").text(format(".2f")(this.v)),zt.exit().remove();const ce=tt.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),ue=ce.enter().append("g").classed("measure t0",!0);ue.append("line").classed("line",!0),ue.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-t0)").attr("marker-end","url(#measure-capped-arrow-t0)");const de=ue.append("text").classed("label",!0);de.append("tspan").classed("t0 math-var",!0).text("t₀"),de.append("tspan").classed("equals",!0).text(" = "),de.append("tspan").classed("value",!0);const he=Math.abs($(0)-$(this.t0))<=4,pe=ue.merge(ce);pe.select(".line").classed("short",he).transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(0)+2).attr("y1",m(this.startingPoint)-.75*this.rem).attr("x2",$(this.t0)-2).attr("y2",m(this.startingPoint)-.75*this.rem),pe.select(".markers").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",$(0)).attr("y1",m(this.startingPoint)-.75*this.rem).attr("x2",$(this.t0)).attr("y2",m(this.startingPoint)-.75*this.rem);pe.select(".label").transition().duration(this.drag?0:f).ease(cubicOut).attr("x",$(this.t0)+.25*this.rem).attr("y",m(this.bounds.upper)-.25*this.rem).select(".value").text(format("d")(this.t0)),ce.exit().remove();const ge=et.selectAll(".model.mean").data(t=>this.means?[t]:[]),ye=ge.enter().append("g").attr("class",t=>`model mean ${t.outcome}`);ye.append("line").classed("indicator",!0);ye.merge(ge).select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",t=>$(t.model.meanRT)).attr("x2",t=>$(t.model.meanRT)).attr("y1",t=>t.densityScale(this.scale.density.min)).attr("y2",t=>t.densityScale(this.scale.density.max)),ge.exit().remove();const be=et.selectAll(".data.mean").data(t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[]),fe=be.enter().append("g").attr("class",t=>`data mean ${t.outcome}`);fe.append("line").classed("indicator",!0).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem);fe.merge(be).select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",t=>$(t.data.meanRT)).attr("x2",t=>$(t.data.meanRT)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem),be.exit().select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{select(r[e].parentElement).remove()});const $e=et.selectAll(".model.sd").data(t=>this.sds?[t]:[]),me=$e.enter().append("g").attr("class",t=>`model sd ${t.outcome}`);me.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#model-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#model-sd-cap-${t.outcome})`);me.merge($e).select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",t=>$(t.model.meanRT-t.model.sdRT/2)).attr("x2",t=>$(t.model.meanRT+t.model.sdRT/2)).attr("y1",t=>t.densityScale(5)).attr("y2",t=>t.densityScale(5)),$e.exit().remove();const Ie=et.selectAll(".data.sd").data(t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t]),Ee=Ie.enter().append("g").attr("class",t=>`data sd ${t.outcome}`);Ee.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#data-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#data-sd-cap-${t.outcome})`).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem);Ee.merge(Ie).select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",t=>$(t.data.meanRT-t.data.sdRT/2)).attr("x2",t=>$(t.data.meanRT+t.data.sdRT/2)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem),Ie.exit().select(".indicator").transition().duration(this.drag?0:f).ease(cubicOut).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{select(r[e].parentElement).remove()}),this.firstUpdate=!1}}customElements.define("ddm-model",DDMModel);class RDK2AFCTask extends(DecidablesMixinResizeable(AccumulableElement)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,i$3`
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
      `]}render(){return x$1``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),a=.25*this.rem,i=.25*this.rem,o=.25*this.rem,s=n-(a+i),l=n-(o+.25*this.rem);this.xScale=linear().domain([-1,1]).range([0,l]),this.yScale=linear().domain([1,-1]).range([0,s]);const c=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),d=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),d.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const h=u.append("g").classed("plot",!0),p=d.select(".plot").attr("transform",`translate(${o}, ${a})`),g=h.append("g").classed("underlayer",!0),y=p.select(".underlayer");g.append("circle").classed("background",!0),y.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),h.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");p.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const b=h.append("g").classed("overlayer",!0),f=p.select(".overlayer");b.append("circle").classed("outline",!0),f.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=select(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();select(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();select(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let a=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(a=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const i=void 0===this.dots[t][r];i&&(this.dots[t][r]={});const o=this.dots[t][r];if(a||i){o.direction=t===this.RANDOM?360*Math.random():this.currentDirection,o.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());o.x=this.xScale(n*Math.cos(r)),o.y=this.yScale(n*Math.sin(r))}else if(e>o.birth+this.lifetime){o.birth+=this.lifetime,o.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());o.x=this.xScale(r*Math.cos(e)),o.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(o.direction=this.currentDirection);const e=o.direction*(Math.PI/180);o.dx=this.speed*(n/1e3)*Math.cos(e),o.dy=this.speed*(n/1e3)*Math.sin(e),o.x+=o.dx,o.y+=o.dy;(o.x-this.xScale(0))**2+(o.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(o.x=-(o.x-this.xScale(0))+this.xScale(0),o.y=-(o.y-this.yScale(0))+this.yScale(0))}}}const i=select(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),o=i.enter().append("g").classed("fixation",!0);o.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),o.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),i.exit().remove();const s=select(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);s.enter().append("circle").classed("dot",!0).merge(s).attr("cx",t=>t.x).attr("cy",t=>t.y),s.exit().remove();const l=select(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}customElements.define("rdk-2afc-task",RDK2AFCTask);class DDMEquation extends AccumulableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,i$3`
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
      `]}}class DDMEquationAZV2PC extends DDMEquation{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},accuracy:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.alignState()}alignState(){this.accuracy=DDMMath.azv2pC(this.a,this.z,this.v)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azv2pc-change",{detail:{a:this.a,z:this.z,v:this.v,accuracy:this.accuracy},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,a;this.numeric?(t=x$1`<decidables-spinner class="a bottom"
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
        </decidables-spinner>`,a=x$1`<decidables-spinner class="accuracy bottom"
          disabled
          .value=${+this.accuracy.toFixed(2)}
        >
          <var>Accuracy</var>
        </decidables-spinner>`):(t=x$1`<var class="math-var a">a</var>`,e=x$1`<var class="math-var z">z</var>`,r=x$1`<var class="math-var v">v</var>`,n=x$1`<var class="math-var s">s</var>`,a=x$1`<var class="accuracy">Accuracy</var>`);const i=x$1`
      <tr>
        <td rowspan="2">
          ${a}<span class="equals">=</span>
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
            ${i}
          </tbody>
        </table>
      </div>`}}customElements.define("ddm-equation-azv2pc",DDMEquationAZV2PC);class DDMEquationAZVT02M extends DDMEquation{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0},meanRT:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.alignState()}alignState(){this.meanRT=DDMMath.azvt02m(this.a,this.z,this.v,this.t0)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azvt02m-change",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0,meanRT:this.meanRT},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}t0Input(t){this.t0=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,a,i;this.numeric?(t=x$1`<decidables-spinner class="a bottom"
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
        </decidables-spinner>`,a=x$1`<decidables-spinner class="s bottom"
          disabled
          .value=${DDMMath.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`,i=x$1`<decidables-spinner class="mean-rt bottom"
          disabled
          .value=${+this.meanRT.toFixed(0)}
        >
          <var>Mean RT</var>
        </decidables-spinner>`):(t=x$1`<var class="math-var a">a</var>`,e=x$1`<var class="math-var z">z</var>`,r=x$1`<var class="math-var v">v</var>`,n=x$1`<var class="math-var t0">t<sub>0</sub></var>`,a=x$1`<var class="math-var s">s</var>`,i=x$1`<var class="mean-rt">Mean RT</var>`);const o=x$1`
      <tr>
        <td rowspan="2">
          ${i}<span class="equals">=</span>
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
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${e} / ${a}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
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
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${a}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;return x$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${o}
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
      </div>`}}customElements.define("ddm-example",DDMExample);class DDMExampleHuman extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:!1,type:Number,reflect:!1},z:{attribute:!1,type:Number,reflect:!1},v:{attribute:!1,type:Number,reflect:!1},t0:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.accumulableResponse=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.ddmFit=null,this.data=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.ddmFit=this.querySelector("ddm-fit"),this.ddmModel.clear(),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable&&(this.accumulableTable.correctCount=NaN,this.accumulableTable.errorCount=NaN,this.accumulableTable.nrCount=NaN,this.accumulableTable.accuracy=NaN,this.accumulableTable.correctMeanRT=NaN,this.accumulableTable.errorMeanRT=NaN,this.accumulableTable.meanRT=NaN,this.accumulableTable.correctSDRT=NaN,this.accumulableTable.errorSDRT=NaN,this.accumulableTable.sdRT=NaN),this.ddmModel&&this.ddmModel.clear(),this.ddmFit&&this.ddmFit.clear()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",t=>{this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",()=>{this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()}),this.accumulableResponse&&this.accumulableResponse.addEventListener("accumulable-response",t=>{this.data=t.detail.data,this.ddmModel&&this.ddmModel.trial({index:t.detail.trial,rt:t.detail.rt,outcome:t.detail.outcome}),this.ddmFit&&this.ddmFit.set({accuracy:t.detail.data.accuracy,correctMeanRT:t.detail.data.correctMeanRT,errorMeanRT:t.detail.data.errorMeanRT,meanRT:t.detail.data.meanRT,correctSDRT:t.detail.data.correctSDRT,errorSDRT:t.detail.data.errorSDRT,sdRT:t.detail.data.sdRT}),this.requestUpdate()}),this.ddmFit&&this.ddmFit.addEventListener("ddm-fit-update",t=>{this.a=t.detail.a,this.z=.5,this.v=t.detail.v,this.t0=t.detail.t0})}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}}customElements.define("ddm-example-human",DDMExampleHuman);class DDMExampleInteractive extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-resample",()=>{this.ddmModel?.resample(),this.requestUpdate()}),this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trials,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0)}}customElements.define("ddm-example-interactive",DDMExampleInteractive);class DDMExampleModel extends DDMExample{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=DDMMath.a.DEFAULT,this.z=DDMMath.z.DEFAULT,this.v=DDMMath.v.DEFAULT,this.t0=DDMMath.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.ddmParameters=null,this.ddmModel=null,this.accumulableResponse=null,this.accumulableTable=null,this.trialCount=0,this.signals=["left","right"],this.signal=void 0,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.ddmModel&&this.ddmModel.resumeTrial()}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.ddmModel&&this.ddmModel.pauseTrial()}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.trialCount=0,this.signal=void 0,this.rdkTask&&this.rdkTask.reset(),this.ddmModel&&(this.ddmModel.trials=this.trialCount),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.signal=t.detail.signal,this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial),this.ddmModel&&(this.trialCount+=1,this.ddmModel.trial())}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.signal=void 0,this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}),this.ddmModel.addEventListener("accumulable-response",t=>{if(this.accumulableResponse){const e="correct"===t.detail.outcome?this.signal:"left"===this.signal?"right":"left";this.accumulableResponse.responded(e)}this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.trialCount>this.trials&&(this.trialCount=this.trials),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trialCount,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}}customElements.define("ddm-example-model",DDMExampleModel);
//# sourceMappingURL=page.js.map