var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(t){var e={exports:{}};return t(e,e.exports),e.exports}var match,version,check=function(t){return t&&t.Math==Math&&t},global$1=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||function(){return this}()||Function("return this")(),path$1=global$1,fails=function(t){try{return!!t()}catch(t){return!0}},functionBindNative=!fails((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),FunctionPrototype$2=Function.prototype,bind$1=FunctionPrototype$2.bind,call$2=FunctionPrototype$2.call,uncurryThis=functionBindNative&&bind$1.bind(call$2,call$2),functionUncurryThis=functionBindNative?function(t){return t&&uncurryThis(t)}:function(t){return t&&function(){return call$2.apply(t,arguments)}},TypeError$k=global$1.TypeError,requireObjectCoercible=function(t){if(null==t)throw TypeError$k("Can't call method on "+t);return t},Object$6=global$1.Object,toObject=function(t){return Object$6(requireObjectCoercible(t))},hasOwnProperty=functionUncurryThis({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(t,e){return hasOwnProperty(toObject(t),e)},isPure=!1,defineProperty$7=Object.defineProperty,setGlobal=function(t,e){try{defineProperty$7(global$1,t,{value:e,configurable:!0,writable:!0})}catch(r){global$1[t]=e}return e},SHARED="__core-js_shared__",store$1=global$1[SHARED]||setGlobal(SHARED,{}),sharedStore=store$1,shared=createCommonjsModule((function(t){(t.exports=function(t,e){return sharedStore[t]||(sharedStore[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),id$1=0,postfix=Math.random(),toString$2=functionUncurryThis(1..toString),uid=function(t){return"Symbol("+(void 0===t?"":t)+")_"+toString$2(++id$1+postfix,36)},isCallable=function(t){return"function"==typeof t},aFunction=function(t){return isCallable(t)?t:void 0},getBuiltIn=function(t,e){return arguments.length<2?aFunction(global$1[t]):global$1[t]&&global$1[t][e]},engineUserAgent=getBuiltIn("navigator","userAgent")||"",process$1=global$1.process,Deno=global$1.Deno,versions=process$1&&process$1.versions||Deno&&Deno.version,v8=versions&&versions.v8;v8&&(version=(match=v8.split("."))[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&engineUserAgent&&(!(match=engineUserAgent.match(/Edge\/(\d+)/))||match[1]>=74)&&(match=engineUserAgent.match(/Chrome\/(\d+)/))&&(version=+match[1]);var engineV8Version=version,nativeSymbol=!!Object.getOwnPropertySymbols&&!fails((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&engineV8Version&&engineV8Version<41})),useSymbolAsUid=nativeSymbol&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,WellKnownSymbolsStore=shared("wks"),Symbol$1=global$1.Symbol,symbolFor=Symbol$1&&Symbol$1.for,createWellKnownSymbol=useSymbolAsUid?Symbol$1:Symbol$1&&Symbol$1.withoutSetter||uid,wellKnownSymbol=function(t){if(!hasOwnProperty_1(WellKnownSymbolsStore,t)||!nativeSymbol&&"string"!=typeof WellKnownSymbolsStore[t]){var e="Symbol."+t;nativeSymbol&&hasOwnProperty_1(Symbol$1,t)?WellKnownSymbolsStore[t]=Symbol$1[t]:WellKnownSymbolsStore[t]=useSymbolAsUid&&symbolFor?symbolFor(e):createWellKnownSymbol(e)}return WellKnownSymbolsStore[t]},f$8=wellKnownSymbol,wellKnownSymbolWrapped={f:f$8},descriptors=!fails((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),isObject=function(t){return"object"==typeof t?null!==t:isCallable(t)},document$1=global$1.document,EXISTS$1=isObject(document$1)&&isObject(document$1.createElement),documentCreateElement=function(t){return EXISTS$1?document$1.createElement(t):{}},ie8DomDefine=!descriptors&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),v8PrototypeDefineBug=descriptors&&fails((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),String$6=global$1.String,TypeError$j=global$1.TypeError,anObject=function(t){if(isObject(t))return t;throw TypeError$j(String$6(t)+" is not an object")},call$1=Function.prototype.call,functionCall=functionBindNative?call$1.bind(call$1):function(){return call$1.apply(call$1,arguments)},objectIsPrototypeOf=functionUncurryThis({}.isPrototypeOf),Object$5=global$1.Object,isSymbol=useSymbolAsUid?function(t){return"symbol"==typeof t}:function(t){var e=getBuiltIn("Symbol");return isCallable(e)&&objectIsPrototypeOf(e.prototype,Object$5(t))},String$5=global$1.String,tryToString=function(t){try{return String$5(t)}catch(t){return"Object"}},TypeError$i=global$1.TypeError,aCallable=function(t){if(isCallable(t))return t;throw TypeError$i(tryToString(t)+" is not a function")},getMethod=function(t,e){var r=t[e];return null==r?void 0:aCallable(r)},TypeError$h=global$1.TypeError,ordinaryToPrimitive=function(t,e){var r,n;if("string"===e&&isCallable(r=t.toString)&&!isObject(n=functionCall(r,t)))return n;if(isCallable(r=t.valueOf)&&!isObject(n=functionCall(r,t)))return n;if("string"!==e&&isCallable(r=t.toString)&&!isObject(n=functionCall(r,t)))return n;throw TypeError$h("Can't convert object to primitive value")},TypeError$g=global$1.TypeError,TO_PRIMITIVE=wellKnownSymbol("toPrimitive"),toPrimitive=function(t,e){if(!isObject(t)||isSymbol(t))return t;var r,n=getMethod(t,TO_PRIMITIVE);if(n){if(void 0===e&&(e="default"),r=functionCall(n,t,e),!isObject(r)||isSymbol(r))return r;throw TypeError$g("Can't convert object to primitive value")}return void 0===e&&(e="number"),ordinaryToPrimitive(t,e)},toPropertyKey=function(t){var e=toPrimitive(t,"string");return isSymbol(e)?e:e+""},TypeError$f=global$1.TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable",f$7=descriptors?v8PrototypeDefineBug?function(t,e,r){if(anObject(t),e=toPropertyKey(e),anObject(r),"function"==typeof t&&"prototype"===e&&"value"in r&&WRITABLE in r&&!r[WRITABLE]){var n=$getOwnPropertyDescriptor$1(t,e);n&&n[WRITABLE]&&(t[e]=r.value,r={configurable:CONFIGURABLE$1 in r?r[CONFIGURABLE$1]:n[CONFIGURABLE$1],enumerable:ENUMERABLE in r?r[ENUMERABLE]:n[ENUMERABLE],writable:!1})}return $defineProperty(t,e,r)}:$defineProperty:function(t,e,r){if(anObject(t),e=toPropertyKey(e),anObject(r),ie8DomDefine)try{return $defineProperty(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError$f("Accessors not supported");return"value"in r&&(t[e]=r.value),t},objectDefineProperty={f:f$7},defineProperty$6=objectDefineProperty.f,defineWellKnownSymbol=function(t){var e=path$1.Symbol||(path$1.Symbol={});hasOwnProperty_1(e,t)||defineProperty$6(e,t,{value:wellKnownSymbolWrapped.f(t)})};defineWellKnownSymbol("matchAll");var $propertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$1&&!$propertyIsEnumerable.call({1:2},1),f$6=NASHORN_BUG?function(t){var e=getOwnPropertyDescriptor$1(this,t);return!!e&&e.enumerable}:$propertyIsEnumerable,objectPropertyIsEnumerable={f:f$6},createPropertyDescriptor=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},toString$1=functionUncurryThis({}.toString),stringSlice$8=functionUncurryThis("".slice),classofRaw=function(t){return stringSlice$8(toString$1(t),8,-1)},Object$4=global$1.Object,split$3=functionUncurryThis("".split),indexedObject=fails((function(){return!Object$4("z").propertyIsEnumerable(0)}))?function(t){return"String"==classofRaw(t)?split$3(t,""):Object$4(t)}:Object$4,toIndexedObject=function(t){return indexedObject(requireObjectCoercible(t))},$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$5=descriptors?$getOwnPropertyDescriptor:function(t,e){if(t=toIndexedObject(t),e=toPropertyKey(e),ie8DomDefine)try{return $getOwnPropertyDescriptor(t,e)}catch(t){}if(hasOwnProperty_1(t,e))return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f,t,e),t[e])},objectGetOwnPropertyDescriptor={f:f$5},createNonEnumerableProperty=descriptors?function(t,e,r){return objectDefineProperty.f(t,e,createPropertyDescriptor(1,r))}:function(t,e,r){return t[e]=r,t},functionToString=functionUncurryThis(Function.toString);isCallable(sharedStore.inspectSource)||(sharedStore.inspectSource=function(t){return functionToString(t)});var set$4,get$3,has,inspectSource=sharedStore.inspectSource,WeakMap$2=global$1.WeakMap,nativeWeakMap=isCallable(WeakMap$2)&&/native code/.test(inspectSource(WeakMap$2)),keys$1=shared("keys"),sharedKey=function(t){return keys$1[t]||(keys$1[t]=uid(t))},hiddenKeys$1={},OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$e=global$1.TypeError,WeakMap$1=global$1.WeakMap,enforce=function(t){return has(t)?get$3(t):set$4(t,{})},getterFor=function(t){return function(e){var r;if(!isObject(e)||(r=get$3(e)).type!==t)throw TypeError$e("Incompatible receiver, "+t+" required");return r}};if(nativeWeakMap||sharedStore.state){var store=sharedStore.state||(sharedStore.state=new WeakMap$1),wmget=functionUncurryThis(store.get),wmhas=functionUncurryThis(store.has),wmset=functionUncurryThis(store.set);set$4=function(t,e){if(wmhas(store,t))throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);return e.facade=t,wmset(store,t,e),e},get$3=function(t){return wmget(store,t)||{}},has=function(t){return wmhas(store,t)}}else{var STATE=sharedKey("state");hiddenKeys$1[STATE]=!0,set$4=function(t,e){if(hasOwnProperty_1(t,STATE))throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);return e.facade=t,createNonEnumerableProperty(t,STATE,e),e},get$3=function(t){return hasOwnProperty_1(t,STATE)?t[STATE]:{}},has=function(t){return hasOwnProperty_1(t,STATE)}}var internalState={set:set$4,get:get$3,has:has,enforce:enforce,getterFor:getterFor},FunctionPrototype$1=Function.prototype,getDescriptor=descriptors&&Object.getOwnPropertyDescriptor,EXISTS=hasOwnProperty_1(FunctionPrototype$1,"name"),PROPER=EXISTS&&"something"===function(){}.name,CONFIGURABLE=EXISTS&&(!descriptors||descriptors&&getDescriptor(FunctionPrototype$1,"name").configurable),functionName={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE},redefine=createCommonjsModule((function(t){var e=functionName.CONFIGURABLE,r=internalState.get,n=internalState.enforce,a=String(String).split("String");(t.exports=function(t,r,i,o){var s,l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet,h=o&&void 0!==o.name?o.name:r;isCallable(i)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!hasOwnProperty_1(i,"name")||e&&i.name!==h)&&createNonEnumerableProperty(i,"name",h),(s=n(i)).source||(s.source=a.join("string"==typeof h?h:""))),t!==global$1?(l?!u&&t[r]&&(c=!0):delete t[r],c?t[r]=i:createNonEnumerableProperty(t,r,i)):c?t[r]=i:setGlobal(r,i)})(Function.prototype,"toString",(function(){return isCallable(this)&&r(this).source||inspectSource(this)}))})),ceil=Math.ceil,floor$7=Math.floor,toIntegerOrInfinity=function(t){var e=+t;return e!=e||0===e?0:(e>0?floor$7:ceil)(e)},max$3=Math.max,min$2=Math.min,toAbsoluteIndex=function(t,e){var r=toIntegerOrInfinity(t);return r<0?max$3(r+e,0):min$2(r,e)},min$1=Math.min,toLength=function(t){return t>0?min$1(toIntegerOrInfinity(t),9007199254740991):0},lengthOfArrayLike=function(t){return toLength(t.length)},createMethod$2=function(t){return function(e,r,n){var a,i=toIndexedObject(e),o=lengthOfArrayLike(i),s=toAbsoluteIndex(n,o);if(t&&r!=r){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((t||s in i)&&i[s]===r)return t||s||0;return!t&&-1}},arrayIncludes={includes:createMethod$2(!0),indexOf:createMethod$2(!1)},indexOf$2=arrayIncludes.indexOf,push$7=functionUncurryThis([].push),objectKeysInternal=function(t,e){var r,n=toIndexedObject(t),a=0,i=[];for(r in n)!hasOwnProperty_1(hiddenKeys$1,r)&&hasOwnProperty_1(n,r)&&push$7(i,r);for(;e.length>a;)hasOwnProperty_1(n,r=e[a++])&&(~indexOf$2(i,r)||push$7(i,r));return i},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys=enumBugKeys.concat("length","prototype"),f$4=Object.getOwnPropertyNames||function(t){return objectKeysInternal(t,hiddenKeys)},objectGetOwnPropertyNames={f:f$4},f$3=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$3},concat$2=functionUncurryThis([].concat),ownKeys=getBuiltIn("Reflect","ownKeys")||function(t){var e=objectGetOwnPropertyNames.f(anObject(t)),r=objectGetOwnPropertySymbols.f;return r?concat$2(e,r(t)):e},copyConstructorProperties=function(t,e,r){for(var n=ownKeys(e),a=objectDefineProperty.f,i=objectGetOwnPropertyDescriptor.f,o=0;o<n.length;o++){var s=n[o];hasOwnProperty_1(t,s)||r&&hasOwnProperty_1(r,s)||a(t,s,i(e,s))}},replacement=/#|\.prototype\./,isForced=function(t,e){var r=data$1[normalize$1(t)];return r==POLYFILL||r!=NATIVE&&(isCallable(e)?fails(e):!!e)},normalize$1=isForced.normalize=function(t){return String(t).replace(replacement,".").toLowerCase()},data$1=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f,_export=function(t,e){var r,n,a,i,o,s=t.target,l=t.global,c=t.stat;if(r=l?global$1:c?global$1[s]||setGlobal(s,{}):(global$1[s]||{}).prototype)for(n in e){if(i=e[n],a=t.noTargetGet?(o=getOwnPropertyDescriptor(r,n))&&o.value:r[n],!isForced_1(l?n:s+(c?".":"#")+n,t.forced)&&void 0!==a){if(typeof i==typeof a)continue;copyConstructorProperties(i,a)}(t.sham||a&&a.sham)&&createNonEnumerableProperty(i,"sham",!0),redefine(r,n,i,t)}},FunctionPrototype=Function.prototype,apply=FunctionPrototype.apply,call=FunctionPrototype.call,functionApply="object"==typeof Reflect&&Reflect.apply||(functionBindNative?call.bind(apply):function(){return call.apply(apply,arguments)}),String$4=global$1.String,TypeError$d=global$1.TypeError,aPossiblePrototype=function(t){if("object"==typeof t||isCallable(t))return t;throw TypeError$d("Can't set "+String$4(t)+" as a prototype")},objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return anObject(r),aPossiblePrototype(n),e?t(r,n):r.__proto__=n,r}}():void 0),inheritIfRequired=function(t,e,r){var n,a;return objectSetPrototypeOf&&isCallable(n=e.constructor)&&n!==r&&isObject(a=n.prototype)&&a!==r.prototype&&objectSetPrototypeOf(t,a),t},TO_STRING_TAG$5=wellKnownSymbol("toStringTag"),test={};test[TO_STRING_TAG$5]="z";var toStringTagSupport="[object z]"===String(test),TO_STRING_TAG$4=wellKnownSymbol("toStringTag"),Object$3=global$1.Object,CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}},classof=toStringTagSupport?classofRaw:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=Object$3(t),TO_STRING_TAG$4))?r:CORRECT_ARGUMENTS?classofRaw(e):"Object"==(n=classofRaw(e))&&isCallable(e.callee)?"Arguments":n},String$3=global$1.String,toString=function(t){if("Symbol"===classof(t))throw TypeError("Cannot convert a Symbol value to a string");return String$3(t)},normalizeStringArgument=function(t,e){return void 0===t?arguments.length<2?"":e:toString(t)},installErrorCause=function(t,e){isObject(e)&&"cause"in e&&createNonEnumerableProperty(t,"cause",e.cause)},replace$5=functionUncurryThis("".replace),TEST=String(Error("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),clearErrorStack=function(t,e){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof t)for(;e--;)t=replace$5(t,V8_OR_CHAKRA_STACK_ENTRY,"");return t},errorStackInstallable=!fails((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",createPropertyDescriptor(1,7)),7!==t.stack)})),wrapErrorConstructorWithCause=function(t,e,r,n){var a=n?2:1,i=t.split("."),o=i[i.length-1],s=getBuiltIn.apply(null,i);if(s){var l=s.prototype;if(hasOwnProperty_1(l,"cause")&&delete l.cause,!r)return s;var c=getBuiltIn("Error"),u=e((function(t,e){var r=normalizeStringArgument(n?e:t,void 0),i=n?new s(t):new s;return void 0!==r&&createNonEnumerableProperty(i,"message",r),errorStackInstallable&&createNonEnumerableProperty(i,"stack",clearErrorStack(i.stack,2)),this&&objectIsPrototypeOf(l,this)&&inheritIfRequired(i,this,u),arguments.length>a&&installErrorCause(i,arguments[a]),i}));u.prototype=l,"Error"!==o&&(objectSetPrototypeOf?objectSetPrototypeOf(u,c):copyConstructorProperties(u,c,{name:!0})),copyConstructorProperties(u,s);try{l.name!==o&&createNonEnumerableProperty(l,"name",o),l.constructor=u}catch(t){}return u}},WEB_ASSEMBLY="WebAssembly",WebAssembly$1=global$1[WEB_ASSEMBLY],FORCED$4=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(t,e){var r={};r[t]=wrapErrorConstructorWithCause(t,e,FORCED$4),_export({global:!0,forced:FORCED$4},r)},exportWebAssemblyErrorCauseWrapper=function(t,e){if(WebAssembly$1&&WebAssembly$1[t]){var r={};r[t]=wrapErrorConstructorWithCause(WEB_ASSEMBLY+"."+t,e,FORCED$4),_export({target:WEB_ASSEMBLY,stat:!0,forced:FORCED$4},r)}};exportGlobalErrorCauseWrapper("Error",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(t){return function(e){return functionApply(t,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(t){return function(e){return functionApply(t,this,arguments)}}));var activeXDocument,correctPrototypeGetter=!fails((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),IE_PROTO$1=sharedKey("IE_PROTO"),Object$2=global$1.Object,ObjectPrototype$2=Object$2.prototype,objectGetPrototypeOf=correctPrototypeGetter?Object$2.getPrototypeOf:function(t){var e=toObject(t);if(hasOwnProperty_1(e,IE_PROTO$1))return e[IE_PROTO$1];var r=e.constructor;return isCallable(r)&&e instanceof r?r.prototype:e instanceof Object$2?ObjectPrototype$2:null},objectKeys$1=Object.keys||function(t){return objectKeysInternal(t,enumBugKeys)},f$2=descriptors&&!v8PrototypeDefineBug?Object.defineProperties:function(t,e){anObject(t);for(var r,n=toIndexedObject(e),a=objectKeys$1(e),i=a.length,o=0;i>o;)objectDefineProperty.f(t,r=a[o++],n[r]);return t},objectDefineProperties={f:f$2},html=getBuiltIn("document","documentElement"),GT=">",LT="<",PROTOTYPE$1="prototype",SCRIPT="script",IE_PROTO=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return LT+SCRIPT+GT+t+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(t){t.write(scriptTag("")),t.close();var e=t.parentWindow.Object;return t=null,e},NullProtoObjectViaIFrame=function(){var t,e=documentCreateElement("iframe"),r="java"+SCRIPT+":";return e.style.display="none",html.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F},NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(t){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var t=enumBugKeys.length;t--;)delete NullProtoObject[PROTOTYPE$1][enumBugKeys[t]];return NullProtoObject()};hiddenKeys$1[IE_PROTO]=!0;var objectCreate=Object.create||function(t,e){var r;return null!==t?(EmptyConstructor[PROTOTYPE$1]=anObject(t),r=new EmptyConstructor,EmptyConstructor[PROTOTYPE$1]=null,r[IE_PROTO]=t):r=NullProtoObject(),void 0===e?r:objectDefineProperties.f(r,e)},bind=functionUncurryThis(functionUncurryThis.bind),functionBindContext=function(t,e){return aCallable(t),void 0===e?t:functionBindNative?bind(t,e):function(){return t.apply(e,arguments)}},iterators={},ITERATOR$7=wellKnownSymbol("iterator"),ArrayPrototype$1=Array.prototype,isArrayIteratorMethod=function(t){return void 0!==t&&(iterators.Array===t||ArrayPrototype$1[ITERATOR$7]===t)},ITERATOR$6=wellKnownSymbol("iterator"),getIteratorMethod=function(t){if(null!=t)return getMethod(t,ITERATOR$6)||getMethod(t,"@@iterator")||iterators[classof(t)]},TypeError$c=global$1.TypeError,getIterator=function(t,e){var r=arguments.length<2?getIteratorMethod(t):e;if(aCallable(r))return anObject(functionCall(r,t));throw TypeError$c(tryToString(t)+" is not iterable")},iteratorClose=function(t,e,r){var n,a;anObject(t);try{if(!(n=getMethod(t,"return"))){if("throw"===e)throw r;return r}n=functionCall(n,t)}catch(t){a=!0,n=t}if("throw"===e)throw r;if(a)throw n;return anObject(n),r},TypeError$b=global$1.TypeError,Result=function(t,e){this.stopped=t,this.result=e},ResultPrototype=Result.prototype,iterate=function(t,e,r){var n,a,i,o,s,l,c,u=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),f=!(!r||!r.INTERRUPTED),p=functionBindContext(e,u),g=function(t){return n&&iteratorClose(n,"normal",t),new Result(!0,t)},m=function(t){return h?(anObject(t),f?p(t[0],t[1],g):p(t[0],t[1])):f?p(t,g):p(t)};if(d)n=t;else{if(!(a=getIteratorMethod(t)))throw TypeError$b(tryToString(t)+" is not iterable");if(isArrayIteratorMethod(a)){for(i=0,o=lengthOfArrayLike(t);o>i;i++)if((s=m(t[i]))&&objectIsPrototypeOf(ResultPrototype,s))return s;return new Result(!1)}n=getIterator(t,a)}for(l=n.next;!(c=functionCall(l,n)).done;){try{s=m(c.value)}catch(t){iteratorClose(n,"throw",t)}if("object"==typeof s&&s&&objectIsPrototypeOf(ResultPrototype,s))return s}return new Result(!1)},TO_STRING_TAG$3=wellKnownSymbol("toStringTag"),Error$3=global$1.Error,push$6=[].push,$AggregateError$1=function(t,e){var r,n=arguments.length>2?arguments[2]:void 0,a=objectIsPrototypeOf(AggregateErrorPrototype,this);objectSetPrototypeOf?r=objectSetPrototypeOf(new Error$3,a?objectGetPrototypeOf(this):AggregateErrorPrototype):(r=a?this:objectCreate(AggregateErrorPrototype),createNonEnumerableProperty(r,TO_STRING_TAG$3,"Error")),void 0!==e&&createNonEnumerableProperty(r,"message",normalizeStringArgument(e)),errorStackInstallable&&createNonEnumerableProperty(r,"stack",clearErrorStack(r.stack,1)),installErrorCause(r,n);var i=[];return iterate(t,push$6,{that:i}),createNonEnumerableProperty(r,"errors",i),r};objectSetPrototypeOf?objectSetPrototypeOf($AggregateError$1,Error$3):copyConstructorProperties($AggregateError$1,Error$3,{name:!0});var AggregateErrorPrototype=$AggregateError$1.prototype=objectCreate(Error$3.prototype,{constructor:createPropertyDescriptor(1,$AggregateError$1),message:createPropertyDescriptor(1,""),name:createPropertyDescriptor(1,"AggregateError")});_export({global:!0},{AggregateError:$AggregateError$1});var AGGREGATE_ERROR="AggregateError",$AggregateError=getBuiltIn(AGGREGATE_ERROR),FORCED$3=!fails((function(){return 1!==$AggregateError([1]).errors[0]}))&&fails((function(){return 7!==$AggregateError([1],AGGREGATE_ERROR,{cause:7}).cause}));_export({global:!0,forced:FORCED$3},{AggregateError:wrapErrorConstructorWithCause(AGGREGATE_ERROR,(function(t){return function(e,r){return functionApply(t,this,arguments)}}),FORCED$3,!0)});var UNSCOPABLES=wellKnownSymbol("unscopables"),ArrayPrototype=Array.prototype;null==ArrayPrototype[UNSCOPABLES]&&objectDefineProperty.f(ArrayPrototype,UNSCOPABLES,{configurable:!0,value:objectCreate(null)});var addToUnscopables=function(t){ArrayPrototype[UNSCOPABLES][t]=!0};_export({target:"Array",proto:!0},{at:function(t){var e=toObject(this),r=lengthOfArrayLike(e),n=toIntegerOrInfinity(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}}),addToUnscopables("at"),addToUnscopables("flat"),addToUnscopables("flatMap");var thisNumberValue=functionUncurryThis(1..valueOf),RangeError$8=global$1.RangeError,stringRepeat=function(t){var e=toString(requireObjectCoercible(this)),r="",n=toIntegerOrInfinity(t);if(n<0||n==1/0)throw RangeError$8("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},log$1=Math.log,LOG10E=Math.LOG10E,mathLog10=Math.log10||function(t){return log$1(t)*LOG10E},RangeError$7=global$1.RangeError,String$2=global$1.String,isFinite$1=global$1.isFinite,abs$2=Math.abs,floor$6=Math.floor,pow$2=Math.pow,round=Math.round,un$ToExponential=functionUncurryThis(1..toExponential),repeat=functionUncurryThis(stringRepeat),stringSlice$7=functionUncurryThis("".slice),ROUNDS_PROPERLY="-6.9000e-11"===un$ToExponential(-69e-12,4)&&"1.25e+0"===un$ToExponential(1.255,2)&&"1.235e+4"===un$ToExponential(12345,3)&&"3e+1"===un$ToExponential(25,0),THROWS_ON_INFINITY_FRACTION=fails((function(){un$ToExponential(1,1/0)}))&&fails((function(){un$ToExponential(1,-1/0)})),PROPER_NON_FINITE_THIS_CHECK=!fails((function(){un$ToExponential(1/0,1/0)}))&&!fails((function(){un$ToExponential(NaN,1/0)})),FORCED$2=!ROUNDS_PROPERLY||!THROWS_ON_INFINITY_FRACTION||!PROPER_NON_FINITE_THIS_CHECK;_export({target:"Number",proto:!0,forced:FORCED$2},{toExponential:function(t){var e=thisNumberValue(this);if(void 0===t)return un$ToExponential(e);var r=toIntegerOrInfinity(t);if(!isFinite$1(e))return String$2(e);if(r<0||r>20)throw RangeError$7("Incorrect fraction digits");if(ROUNDS_PROPERLY)return un$ToExponential(e,r);var n="",a="",i=0,o="",s="";if(e<0&&(n="-",e=-e),0===e)i=0,a=repeat("0",r+1);else{var l=mathLog10(e);i=floor$6(l);var c=0,u=pow$2(10,i-r);2*e>=(2*(c=round(e/u))+1)*u&&(c+=1),c>=pow$2(10,r+1)&&(c/=10,i+=1),a=String$2(c)}return 0!==r&&(a=stringSlice$7(a,0,1)+"."+stringSlice$7(a,1)),0===i?(o="+",s="0"):(o=i>0?"+":"-",s=String$2(abs$2(i))),n+(a+="e"+o+s)}}),_export({target:"Object",stat:!0},{hasOwn:hasOwnProperty_1});var PromiseCapability=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=aCallable(e),this.reject=aCallable(r)},f$1=function(t){return new PromiseCapability(t)},newPromiseCapability={f:f$1},perform=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};_export({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=newPromiseCapability.f(e),n=r.resolve,a=r.reject,i=perform((function(){var r=aCallable(e.resolve),a=[],i=0,o=1;iterate(t,(function(t){var s=i++,l=!1;o++,functionCall(r,e,t).then((function(t){l||(l=!0,a[s]={status:"fulfilled",value:t},--o||n(a))}),(function(t){l||(l=!0,a[s]={status:"rejected",reason:t},--o||n(a))}))})),--o||n(a)}));return i.error&&a(i.value),r.promise}});var PROMISE_ANY_ERROR="No one promise resolved";_export({target:"Promise",stat:!0},{any:function(t){var e=this,r=getBuiltIn("AggregateError"),n=newPromiseCapability.f(e),a=n.resolve,i=n.reject,o=perform((function(){var n=aCallable(e.resolve),o=[],s=0,l=1,c=!1;iterate(t,(function(t){var u=s++,h=!1;l++,functionCall(n,e,t).then((function(t){h||c||(c=!0,a(t))}),(function(t){h||c||(h=!0,o[u]=t,--l||i(new r(o,PROMISE_ANY_ERROR)))}))})),--l||i(new r(o,PROMISE_ANY_ERROR))}));return o.error&&i(o.value),n.promise}});var nativePromiseConstructor=global$1.Promise,noop$3=function(){},empty$1=[],construct=getBuiltIn("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec$2=functionUncurryThis(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.exec(noop$3),isConstructorModern=function(t){if(!isCallable(t))return!1;try{return construct(noop$3,empty$1,t),!0}catch(t){return!1}},isConstructorLegacy=function(t){if(!isCallable(t))return!1;switch(classof(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec$2(constructorRegExp,inspectSource(t))}catch(t){return!0}};isConstructorLegacy.sham=!0;var isConstructor=!construct||fails((function(){var t;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern((function(){t=!0}))||t}))?isConstructorLegacy:isConstructorModern,TypeError$a=global$1.TypeError,aConstructor=function(t){if(isConstructor(t))return t;throw TypeError$a(tryToString(t)+" is not a constructor")},SPECIES$3=wellKnownSymbol("species"),speciesConstructor=function(t,e){var r,n=anObject(t).constructor;return void 0===n||null==(r=anObject(n)[SPECIES$3])?e:aConstructor(r)},promiseResolve=function(t,e){if(anObject(t),isObject(e)&&e.constructor===t)return e;var r=newPromiseCapability.f(t);return(0,r.resolve)(e),r.promise},NON_GENERIC=!!nativePromiseConstructor&&fails((function(){nativePromiseConstructor.prototype.finally.call({then:function(){}},(function(){}))}));if(_export({target:"Promise",proto:!0,real:!0,forced:NON_GENERIC},{finally:function(t){var e=speciesConstructor(this,getBuiltIn("Promise")),r=isCallable(t);return this.then(r?function(r){return promiseResolve(e,t()).then((function(){return r}))}:t,r?function(r){return promiseResolve(e,t()).then((function(){throw r}))}:t)}}),isCallable(nativePromiseConstructor)){var method=getBuiltIn("Promise").prototype.finally;nativePromiseConstructor.prototype.finally!==method&&redefine(nativePromiseConstructor.prototype,"finally",method,{unsafe:!0})}var defineProperty$5=objectDefineProperty.f,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),setToStringTag=function(t,e,r){t&&!r&&(t=t.prototype),t&&!hasOwnProperty_1(t,TO_STRING_TAG$2)&&defineProperty$5(t,TO_STRING_TAG$2,{configurable:!0,value:e})};_export({global:!0},{Reflect:{}}),setToStringTag(global$1.Reflect,"Reflect",!0);var charAt$7=functionUncurryThis("".charAt),FORCED$1=fails((function(){return"\ud842"!=="𠮷".at(-2)}));_export({target:"String",proto:!0,forced:FORCED$1},{at:function(t){var e=toString(requireObjectCoercible(this)),r=e.length,n=toIntegerOrInfinity(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:charAt$7(e,a)}});var IteratorPrototype$2,PrototypeOfArrayIteratorPrototype,arrayIterator,ITERATOR$5=wellKnownSymbol("iterator"),BUGGY_SAFARI_ITERATORS$1=!1;[].keys&&("next"in(arrayIterator=[].keys())?(PrototypeOfArrayIteratorPrototype=objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)))!==Object.prototype&&(IteratorPrototype$2=PrototypeOfArrayIteratorPrototype):BUGGY_SAFARI_ITERATORS$1=!0);var NEW_ITERATOR_PROTOTYPE=null==IteratorPrototype$2||fails((function(){var t={};return IteratorPrototype$2[ITERATOR$5].call(t)!==t}));NEW_ITERATOR_PROTOTYPE&&(IteratorPrototype$2={}),isCallable(IteratorPrototype$2[ITERATOR$5])||redefine(IteratorPrototype$2,ITERATOR$5,(function(){return this}));var iteratorsCore={IteratorPrototype:IteratorPrototype$2,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS$1},IteratorPrototype$1=iteratorsCore.IteratorPrototype,returnThis$1=function(){return this},createIteratorConstructor=function(t,e,r,n){var a=e+" Iterator";return t.prototype=objectCreate(IteratorPrototype$1,{next:createPropertyDescriptor(+!n,r)}),setToStringTag(t,a,!1),iterators[a]=returnThis$1,t},MATCH=wellKnownSymbol("match"),isRegexp=function(t){var e;return isObject(t)&&(void 0!==(e=t[MATCH])?!!e:"RegExp"==classofRaw(t))},regexpFlags=function(){var t=anObject(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},charAt$6=functionUncurryThis("".charAt),charCodeAt$1=functionUncurryThis("".charCodeAt),stringSlice$6=functionUncurryThis("".slice),createMethod$1=function(t){return function(e,r){var n,a,i=toString(requireObjectCoercible(e)),o=toIntegerOrInfinity(r),s=i.length;return o<0||o>=s?t?"":void 0:(n=charCodeAt$1(i,o))<55296||n>56319||o+1===s||(a=charCodeAt$1(i,o+1))<56320||a>57343?t?charAt$6(i,o):n:t?stringSlice$6(i,o,o+2):a-56320+(n-55296<<10)+65536}},stringMultibyte={codeAt:createMethod$1(!1),charAt:createMethod$1(!0)},charAt$5=stringMultibyte.charAt,advanceStringIndex=function(t,e,r){return e+(r?charAt$5(t,e).length:1)},$RegExp$2=global$1.RegExp,UNSUPPORTED_Y$1=fails((function(){var t=$RegExp$2("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),MISSED_STICKY=UNSUPPORTED_Y$1||fails((function(){return!$RegExp$2("a","y").sticky})),BROKEN_CARET=UNSUPPORTED_Y$1||fails((function(){var t=$RegExp$2("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),regexpStickyHelpers={BROKEN_CARET:BROKEN_CARET,MISSED_STICKY:MISSED_STICKY,UNSUPPORTED_Y:UNSUPPORTED_Y$1},$RegExp$1=global$1.RegExp,regexpUnsupportedDotAll=fails((function(){var t=$RegExp$1(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),$RegExp=global$1.RegExp,regexpUnsupportedNcg=fails((function(){var t=$RegExp("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),getInternalState$4=internalState.get,nativeReplace=shared("native-string-replace",String.prototype.replace),nativeExec=RegExp.prototype.exec,patchedExec=nativeExec,charAt$4=functionUncurryThis("".charAt),indexOf$1=functionUncurryThis("".indexOf),replace$4=functionUncurryThis("".replace),stringSlice$5=functionUncurryThis("".slice),UPDATES_LAST_INDEX_WRONG=function(){var t=/a/,e=/b*/g;return functionCall(nativeExec,t,"a"),functionCall(nativeExec,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),UNSUPPORTED_Y=regexpStickyHelpers.BROKEN_CARET,NPCG_INCLUDED=void 0!==/()??/.exec("")[1],PATCH=UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED||UNSUPPORTED_Y||regexpUnsupportedDotAll||regexpUnsupportedNcg;PATCH&&(patchedExec=function(t){var e,r,n,a,i,o,s,l=this,c=getInternalState$4(l),u=toString(t),h=c.raw;if(h)return h.lastIndex=l.lastIndex,e=functionCall(patchedExec,h,u),l.lastIndex=h.lastIndex,e;var d=c.groups,f=UNSUPPORTED_Y&&l.sticky,p=functionCall(regexpFlags,l),g=l.source,m=0,b=u;if(f&&(p=replace$4(p,"y",""),-1===indexOf$1(p,"g")&&(p+="g"),b=stringSlice$5(u,l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==charAt$4(u,l.lastIndex-1))&&(g="(?: "+g+")",b=" "+b,m++),r=new RegExp("^(?:"+g+")",p)),NPCG_INCLUDED&&(r=new RegExp("^"+g+"$(?!\\s)",p)),UPDATES_LAST_INDEX_WRONG&&(n=l.lastIndex),a=functionCall(nativeExec,f?r:l,b),f?a?(a.input=stringSlice$5(a.input,m),a[0]=stringSlice$5(a[0],m),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:UPDATES_LAST_INDEX_WRONG&&a&&(l.lastIndex=l.global?a.index+a[0].length:n),NPCG_INCLUDED&&a&&a.length>1&&functionCall(nativeReplace,a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a&&d)for(a.groups=o=objectCreate(null),i=0;i<d.length;i++)o[(s=d[i])[0]]=a[s[1]];return a});var regexpExec=patchedExec,TypeError$9=global$1.TypeError,regexpExecAbstract=function(t,e){var r=t.exec;if(isCallable(r)){var n=functionCall(r,t,e);return null!==n&&anObject(n),n}if("RegExp"===classofRaw(t))return functionCall(regexpExec,t,e);throw TypeError$9("RegExp#exec called on incompatible receiver")},MATCH_ALL=wellKnownSymbol("matchAll"),REGEXP_STRING="RegExp String",REGEXP_STRING_ITERATOR=REGEXP_STRING+" Iterator",setInternalState$5=internalState.set,getInternalState$3=internalState.getterFor(REGEXP_STRING_ITERATOR),RegExpPrototype$2=RegExp.prototype,TypeError$8=global$1.TypeError,getFlags$2=functionUncurryThis(regexpFlags),stringIndexOf$2=functionUncurryThis("".indexOf),un$MatchAll=functionUncurryThis("".matchAll),WORKS_WITH_NON_GLOBAL_REGEX=!!un$MatchAll&&!fails((function(){un$MatchAll("a",/./)})),$RegExpStringIterator=createIteratorConstructor((function(t,e,r,n){setInternalState$5(this,{type:REGEXP_STRING_ITERATOR,regexp:t,string:e,global:r,unicode:n,done:!1})}),REGEXP_STRING,(function(){var t=getInternalState$3(this);if(t.done)return{value:void 0,done:!0};var e=t.regexp,r=t.string,n=regexpExecAbstract(e,r);return null===n?{value:void 0,done:t.done=!0}:t.global?(""===toString(n[0])&&(e.lastIndex=advanceStringIndex(r,toLength(e.lastIndex),t.unicode)),{value:n,done:!1}):(t.done=!0,{value:n,done:!1})})),$matchAll=function(t){var e,r,n,a,i,o,s=anObject(this),l=toString(t);return e=speciesConstructor(s,RegExp),void 0===(r=s.flags)&&objectIsPrototypeOf(RegExpPrototype$2,s)&&!("flags"in RegExpPrototype$2)&&(r=getFlags$2(s)),n=void 0===r?"":toString(r),a=new e(e===RegExp?s.source:s,n),i=!!~stringIndexOf$2(n,"g"),o=!!~stringIndexOf$2(n,"u"),a.lastIndex=toLength(s.lastIndex),new $RegExpStringIterator(a,l,i,o)};_export({target:"String",proto:!0,forced:WORKS_WITH_NON_GLOBAL_REGEX},{matchAll:function(t){var e,r,n,a=requireObjectCoercible(this);if(null!=t){if(isRegexp(t)&&(e=toString(requireObjectCoercible("flags"in RegExpPrototype$2?t.flags:getFlags$2(t))),!~stringIndexOf$2(e,"g")))throw TypeError$8("`.matchAll` does not allow non-global regexes");if(WORKS_WITH_NON_GLOBAL_REGEX)return un$MatchAll(a,t);if(void 0===(n=getMethod(t,MATCH_ALL))&&isPure&&"RegExp"==classofRaw(t)&&(n=$matchAll),n)return functionCall(n,t,a)}else if(WORKS_WITH_NON_GLOBAL_REGEX)return un$MatchAll(a,t);return r=toString(a),new RegExp(t,"g")[MATCH_ALL](r)}}),MATCH_ALL in RegExpPrototype$2||redefine(RegExpPrototype$2,MATCH_ALL,$matchAll),_export({target:"RegExp",proto:!0,forced:/./.exec!==regexpExec},{exec:regexpExec});var SPECIES$2=wellKnownSymbol("species"),RegExpPrototype$1=RegExp.prototype,fixRegexpWellKnownSymbolLogic=function(t,e,r,n){var a=wellKnownSymbol(t),i=!fails((function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})),o=i&&!fails((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[SPECIES$2]=function(){return r},r.flags="",r[a]=/./[a]),r.exec=function(){return e=!0,null},r[a](""),!e}));if(!i||!o||r){var s=functionUncurryThis(/./[a]),l=e(a,""[t],(function(t,e,r,n,a){var o=functionUncurryThis(t),l=e.exec;return l===regexpExec||l===RegExpPrototype$1.exec?i&&!a?{done:!0,value:s(e,r,n)}:{done:!0,value:o(r,e,n)}:{done:!1}}));redefine(String.prototype,t,l[0]),redefine(RegExpPrototype$1,a,l[1])}n&&createNonEnumerableProperty(RegExpPrototype$1[a],"sham",!0)},floor$5=Math.floor,charAt$3=functionUncurryThis("".charAt),replace$3=functionUncurryThis("".replace),stringSlice$4=functionUncurryThis("".slice),SUBSTITUTION_SYMBOLS=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,SUBSTITUTION_SYMBOLS_NO_NAMED=/\$([$&'`]|\d{1,2})/g,getSubstitution=function(t,e,r,n,a,i){var o=r+t.length,s=n.length,l=SUBSTITUTION_SYMBOLS_NO_NAMED;return void 0!==a&&(a=toObject(a),l=SUBSTITUTION_SYMBOLS),replace$3(i,l,(function(i,l){var c;switch(charAt$3(l,0)){case"$":return"$";case"&":return t;case"`":return stringSlice$4(e,0,r);case"'":return stringSlice$4(e,o);case"<":c=a[stringSlice$4(l,1,-1)];break;default:var u=+l;if(0===u)return i;if(u>s){var h=floor$5(u/10);return 0===h?i:h<=s?void 0===n[h-1]?charAt$3(l,1):n[h-1]+charAt$3(l,1):i}c=n[u-1]}return void 0===c?"":c}))},REPLACE$1=wellKnownSymbol("replace"),max$2=Math.max,min=Math.min,concat$1=functionUncurryThis([].concat),push$5=functionUncurryThis([].push),stringIndexOf$1=functionUncurryThis("".indexOf),stringSlice$3=functionUncurryThis("".slice),maybeToString=function(t){return void 0===t?t:String(t)},REPLACE_KEEPS_$0="$0"==="a".replace(/./,"$0"),REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE=!!/./[REPLACE$1]&&""===/./[REPLACE$1]("a","$0"),REPLACE_SUPPORTS_NAMED_GROUPS=!fails((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));fixRegexpWellKnownSymbolLogic("replace",(function(t,e,r){var n=REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE?"$":"$0";return[function(t,r){var n=requireObjectCoercible(this),a=null==t?void 0:getMethod(t,REPLACE$1);return a?functionCall(a,t,n,r):functionCall(e,toString(n),t,r)},function(t,a){var i=anObject(this),o=toString(t);if("string"==typeof a&&-1===stringIndexOf$1(a,n)&&-1===stringIndexOf$1(a,"$<")){var s=r(e,i,o,a);if(s.done)return s.value}var l=isCallable(a);l||(a=toString(a));var c=i.global;if(c){var u=i.unicode;i.lastIndex=0}for(var h=[];;){var d=regexpExecAbstract(i,o);if(null===d)break;if(push$5(h,d),!c)break;""===toString(d[0])&&(i.lastIndex=advanceStringIndex(o,toLength(i.lastIndex),u))}for(var f="",p=0,g=0;g<h.length;g++){for(var m=toString((d=h[g])[0]),b=max$2(min(toIntegerOrInfinity(d.index),o.length),0),y=[],v=1;v<d.length;v++)push$5(y,maybeToString(d[v]));var $=d.groups;if(l){var _=concat$1([m],y,b,o);void 0!==$&&push$5(_,$);var S=toString(functionApply(a,void 0,_))}else S=getSubstitution(m,o,b,y,$,a);b>=p&&(f+=stringSlice$3(o,p,b)+S,p=b+m.length)}return f+stringSlice$3(o,p)}]}),!REPLACE_SUPPORTS_NAMED_GROUPS||!REPLACE_KEEPS_$0||REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);var REPLACE=wellKnownSymbol("replace"),RegExpPrototype=RegExp.prototype,TypeError$7=global$1.TypeError,getFlags$1=functionUncurryThis(regexpFlags),indexOf=functionUncurryThis("".indexOf);functionUncurryThis("".replace);var stringSlice$2=functionUncurryThis("".slice),max$1=Math.max,stringIndexOf=function(t,e,r){return r>t.length?-1:""===e?r:indexOf(t,e,r)};_export({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,a,i,o,s,l,c,u=requireObjectCoercible(this),h=0,d=0,f="";if(null!=t){if(isRegexp(t)&&(r=toString(requireObjectCoercible("flags"in RegExpPrototype?t.flags:getFlags$1(t))),!~indexOf(r,"g")))throw TypeError$7("`.replaceAll` does not allow non-global regexes");if(n=getMethod(t,REPLACE))return functionCall(n,t,u,e)}for(a=toString(u),i=toString(t),(o=isCallable(e))||(e=toString(e)),s=i.length,l=max$1(1,s),h=stringIndexOf(a,i,0);-1!==h;)c=o?toString(e(i,h,a)):getSubstitution(i,a,h,[],void 0,e),f+=stringSlice$2(a,d,h)+c,d=h+s,h=stringIndexOf(a,i,h+l);return d<a.length&&(f+=stringSlice$2(a,d)),f}});var ITERATOR$4=wellKnownSymbol("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR$4]=function(){return this},Array.from(iteratorWithReturn,(function(){throw 2}))}catch(t){}var NAME,Constructor,Prototype,checkCorrectnessOfIteration=function(t,e){if(!e&&!SAFE_CLOSING)return!1;var r=!1;try{var n={};n[ITERATOR$4]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},arrayBufferNative="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,defineProperty$4=objectDefineProperty.f,Int8Array$2=global$1.Int8Array,Int8ArrayPrototype$1=Int8Array$2&&Int8Array$2.prototype,Uint8ClampedArray$1=global$1.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray$1&&Uint8ClampedArray$1.prototype,TypedArray=Int8Array$2&&objectGetPrototypeOf(Int8Array$2),TypedArrayPrototype=Int8ArrayPrototype$1&&objectGetPrototypeOf(Int8ArrayPrototype$1),ObjectPrototype$1=Object.prototype,TypeError$6=global$1.TypeError,TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),TYPED_ARRAY_TAG=uid("TYPED_ARRAY_TAG"),TYPED_ARRAY_CONSTRUCTOR=uid("TYPED_ARRAY_CONSTRUCTOR"),NATIVE_ARRAY_BUFFER_VIEWS$1=arrayBufferNative&&!!objectSetPrototypeOf&&"Opera"!==classof(global$1.opera),TYPED_ARRAY_TAG_REQUIRED=!1,TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},isView=function(t){if(!isObject(t))return!1;var e=classof(t);return"DataView"===e||hasOwnProperty_1(TypedArrayConstructorsList,e)||hasOwnProperty_1(BigIntArrayConstructorsList,e)},isTypedArray=function(t){if(!isObject(t))return!1;var e=classof(t);return hasOwnProperty_1(TypedArrayConstructorsList,e)||hasOwnProperty_1(BigIntArrayConstructorsList,e)},aTypedArray$3=function(t){if(isTypedArray(t))return t;throw TypeError$6("Target is not a typed array")},aTypedArrayConstructor$2=function(t){if(isCallable(t)&&(!objectSetPrototypeOf||objectIsPrototypeOf(TypedArray,t)))return t;throw TypeError$6(tryToString(t)+" is not a typed array constructor")},exportTypedArrayMethod$3=function(t,e,r,n){if(descriptors){if(r)for(var a in TypedArrayConstructorsList){var i=global$1[a];if(i&&hasOwnProperty_1(i.prototype,t))try{delete i.prototype[t]}catch(r){try{i.prototype[t]=e}catch(t){}}}TypedArrayPrototype[t]&&!r||redefine(TypedArrayPrototype,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS$1&&Int8ArrayPrototype$1[t]||e,n)}},exportTypedArrayStaticMethod$2=function(t,e,r){var n,a;if(descriptors){if(objectSetPrototypeOf){if(r)for(n in TypedArrayConstructorsList)if((a=global$1[n])&&hasOwnProperty_1(a,t))try{delete a[t]}catch(t){}if(TypedArray[t]&&!r)return;try{return redefine(TypedArray,t,r?e:NATIVE_ARRAY_BUFFER_VIEWS$1&&TypedArray[t]||e)}catch(t){}}for(n in TypedArrayConstructorsList)!(a=global$1[n])||a[t]&&!r||redefine(a,t,e)}};for(NAME in TypedArrayConstructorsList)(Prototype=(Constructor=global$1[NAME])&&Constructor.prototype)?createNonEnumerableProperty(Prototype,TYPED_ARRAY_CONSTRUCTOR,Constructor):NATIVE_ARRAY_BUFFER_VIEWS$1=!1;for(NAME in BigIntArrayConstructorsList)(Prototype=(Constructor=global$1[NAME])&&Constructor.prototype)&&createNonEnumerableProperty(Prototype,TYPED_ARRAY_CONSTRUCTOR,Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS$1||!isCallable(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function(){throw TypeError$6("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS$1))for(NAME in TypedArrayConstructorsList)global$1[NAME]&&objectSetPrototypeOf(global$1[NAME],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS$1||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype$1)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS$1))for(NAME in TypedArrayConstructorsList)global$1[NAME]&&objectSetPrototypeOf(global$1[NAME].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS$1&&objectGetPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&objectSetPrototypeOf(Uint8ClampedArrayPrototype,TypedArrayPrototype),descriptors&&!hasOwnProperty_1(TypedArrayPrototype,TO_STRING_TAG$1))for(NAME in TYPED_ARRAY_TAG_REQUIRED=!0,defineProperty$4(TypedArrayPrototype,TO_STRING_TAG$1,{get:function(){return isObject(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)global$1[NAME]&&createNonEnumerableProperty(global$1[NAME],TYPED_ARRAY_TAG,NAME);var arrayBufferViewCore={NATIVE_ARRAY_BUFFER_VIEWS:NATIVE_ARRAY_BUFFER_VIEWS$1,TYPED_ARRAY_CONSTRUCTOR:TYPED_ARRAY_CONSTRUCTOR,TYPED_ARRAY_TAG:TYPED_ARRAY_TAG_REQUIRED&&TYPED_ARRAY_TAG,aTypedArray:aTypedArray$3,aTypedArrayConstructor:aTypedArrayConstructor$2,exportTypedArrayMethod:exportTypedArrayMethod$3,exportTypedArrayStaticMethod:exportTypedArrayStaticMethod$2,isView:isView,isTypedArray:isTypedArray,TypedArray:TypedArray,TypedArrayPrototype:TypedArrayPrototype},NATIVE_ARRAY_BUFFER_VIEWS=arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS,ArrayBuffer$1=global$1.ArrayBuffer,Int8Array$1=global$1.Int8Array,typedArrayConstructorsRequireWrappers=!NATIVE_ARRAY_BUFFER_VIEWS||!fails((function(){Int8Array$1(1)}))||!fails((function(){new Int8Array$1(-1)}))||!checkCorrectnessOfIteration((function(t){new Int8Array$1,new Int8Array$1(null),new Int8Array$1(1.5),new Int8Array$1(t)}),!0)||fails((function(){return 1!==new Int8Array$1(new ArrayBuffer$1(2),1,void 0).length})),redefineAll=function(t,e,r){for(var n in e)redefine(t,n,e[n],r);return t},TypeError$5=global$1.TypeError,anInstance=function(t,e){if(objectIsPrototypeOf(e,t))return t;throw TypeError$5("Incorrect invocation")},RangeError$6=global$1.RangeError,toIndex=function(t){if(void 0===t)return 0;var e=toIntegerOrInfinity(t),r=toLength(e);if(e!==r)throw RangeError$6("Wrong length or index");return r},Array$6=global$1.Array,abs$1=Math.abs,pow$1=Math.pow,floor$4=Math.floor,log=Math.log,LN2=Math.LN2,pack=function(t,e,r){var n,a,i,o=Array$6(r),s=8*r-e-1,l=(1<<s)-1,c=l>>1,u=23===e?pow$1(2,-24)-pow$1(2,-77):0,h=t<0||0===t&&1/t<0?1:0,d=0;for((t=abs$1(t))!=t||t===1/0?(a=t!=t?1:0,n=l):(n=floor$4(log(t)/LN2),t*(i=pow$1(2,-n))<1&&(n--,i*=2),(t+=n+c>=1?u/i:u*pow$1(2,1-c))*i>=2&&(n++,i/=2),n+c>=l?(a=0,n=l):n+c>=1?(a=(t*i-1)*pow$1(2,e),n+=c):(a=t*pow$1(2,c-1)*pow$1(2,e),n=0));e>=8;)o[d++]=255&a,a/=256,e-=8;for(n=n<<e|a,s+=e;s>0;)o[d++]=255&n,n/=256,s-=8;return o[--d]|=128*h,o},unpack=function(t,e){var r,n=t.length,a=8*n-e-1,i=(1<<a)-1,o=i>>1,s=a-7,l=n-1,c=t[l--],u=127&c;for(c>>=7;s>0;)u=256*u+t[l--],s-=8;for(r=u&(1<<-s)-1,u>>=-s,s+=e;s>0;)r=256*r+t[l--],s-=8;if(0===u)u=1-o;else{if(u===i)return r?NaN:c?-1/0:1/0;r+=pow$1(2,e),u-=o}return(c?-1:1)*r*pow$1(2,u-e)},ieee754={pack:pack,unpack:unpack},arrayFill=function(t){for(var e=toObject(this),r=lengthOfArrayLike(e),n=arguments.length,a=toAbsoluteIndex(n>1?arguments[1]:void 0,r),i=n>2?arguments[2]:void 0,o=void 0===i?r:toAbsoluteIndex(i,r);o>a;)e[a++]=t;return e},createProperty=function(t,e,r){var n=toPropertyKey(e);n in t?objectDefineProperty.f(t,n,createPropertyDescriptor(0,r)):t[n]=r},Array$5=global$1.Array,max=Math.max,arraySliceSimple=function(t,e,r){for(var n=lengthOfArrayLike(t),a=toAbsoluteIndex(e,n),i=toAbsoluteIndex(void 0===r?n:r,n),o=Array$5(max(i-a,0)),s=0;a<i;a++,s++)createProperty(o,s,t[a]);return o.length=s,o},getOwnPropertyNames=objectGetOwnPropertyNames.f,defineProperty$3=objectDefineProperty.f,PROPER_FUNCTION_NAME$1=functionName.PROPER,CONFIGURABLE_FUNCTION_NAME$1=functionName.CONFIGURABLE,getInternalState$2=internalState.get,setInternalState$4=internalState.set,ARRAY_BUFFER="ArrayBuffer",DATA_VIEW="DataView",PROTOTYPE="prototype",WRONG_LENGTH="Wrong length",WRONG_INDEX="Wrong index",NativeArrayBuffer=global$1[ARRAY_BUFFER],$ArrayBuffer=NativeArrayBuffer,ArrayBufferPrototype=$ArrayBuffer&&$ArrayBuffer[PROTOTYPE],$DataView=global$1[DATA_VIEW],DataViewPrototype=$DataView&&$DataView[PROTOTYPE],ObjectPrototype=Object.prototype,Array$4=global$1.Array,RangeError$5=global$1.RangeError,fill=functionUncurryThis(arrayFill),reverse=functionUncurryThis([].reverse),packIEEE754=ieee754.pack,unpackIEEE754=ieee754.unpack,packInt8=function(t){return[255&t]},packInt16=function(t){return[255&t,t>>8&255]},packInt32=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},unpackInt32=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},packFloat32=function(t){return packIEEE754(t,23,4)},packFloat64=function(t){return packIEEE754(t,52,8)},addGetter=function(t,e){defineProperty$3(t[PROTOTYPE],e,{get:function(){return getInternalState$2(this)[e]}})},get$2=function(t,e,r,n){var a=toIndex(r),i=getInternalState$2(t);if(a+e>i.byteLength)throw RangeError$5(WRONG_INDEX);var o=getInternalState$2(i.buffer).bytes,s=a+i.byteOffset,l=arraySliceSimple(o,s,s+e);return n?l:reverse(l)},set$3=function(t,e,r,n,a,i){var o=toIndex(r),s=getInternalState$2(t);if(o+e>s.byteLength)throw RangeError$5(WRONG_INDEX);for(var l=getInternalState$2(s.buffer).bytes,c=o+s.byteOffset,u=n(+a),h=0;h<e;h++)l[c+h]=u[i?h:e-h-1]};if(arrayBufferNative){var INCORRECT_ARRAY_BUFFER_NAME=PROPER_FUNCTION_NAME$1&&NativeArrayBuffer.name!==ARRAY_BUFFER;if(fails((function(){NativeArrayBuffer(1)}))&&fails((function(){new NativeArrayBuffer(-1)}))&&!fails((function(){return new NativeArrayBuffer,new NativeArrayBuffer(1.5),new NativeArrayBuffer(NaN),INCORRECT_ARRAY_BUFFER_NAME&&!CONFIGURABLE_FUNCTION_NAME$1})))INCORRECT_ARRAY_BUFFER_NAME&&CONFIGURABLE_FUNCTION_NAME$1&&createNonEnumerableProperty(NativeArrayBuffer,"name",ARRAY_BUFFER);else{($ArrayBuffer=function(t){return anInstance(this,ArrayBufferPrototype),new NativeArrayBuffer(toIndex(t))})[PROTOTYPE]=ArrayBufferPrototype;for(var key$1,keys=getOwnPropertyNames(NativeArrayBuffer),j=0;keys.length>j;)(key$1=keys[j++])in $ArrayBuffer||createNonEnumerableProperty($ArrayBuffer,key$1,NativeArrayBuffer[key$1]);ArrayBufferPrototype.constructor=$ArrayBuffer}objectSetPrototypeOf&&objectGetPrototypeOf(DataViewPrototype)!==ObjectPrototype&&objectSetPrototypeOf(DataViewPrototype,ObjectPrototype);var testView=new $DataView(new $ArrayBuffer(2)),$setInt8=functionUncurryThis(DataViewPrototype.setInt8);testView.setInt8(0,2147483648),testView.setInt8(1,2147483649),!testView.getInt8(0)&&testView.getInt8(1)||redefineAll(DataViewPrototype,{setInt8:function(t,e){$setInt8(this,t,e<<24>>24)},setUint8:function(t,e){$setInt8(this,t,e<<24>>24)}},{unsafe:!0})}else ArrayBufferPrototype=($ArrayBuffer=function(t){anInstance(this,ArrayBufferPrototype);var e=toIndex(t);setInternalState$4(this,{bytes:fill(Array$4(e),0),byteLength:e}),descriptors||(this.byteLength=e)})[PROTOTYPE],DataViewPrototype=($DataView=function(t,e,r){anInstance(this,DataViewPrototype),anInstance(t,ArrayBufferPrototype);var n=getInternalState$2(t).byteLength,a=toIntegerOrInfinity(e);if(a<0||a>n)throw RangeError$5("Wrong offset");if(a+(r=void 0===r?n-a:toLength(r))>n)throw RangeError$5(WRONG_LENGTH);setInternalState$4(this,{buffer:t,byteLength:r,byteOffset:a}),descriptors||(this.buffer=t,this.byteLength=r,this.byteOffset=a)})[PROTOTYPE],descriptors&&(addGetter($ArrayBuffer,"byteLength"),addGetter($DataView,"buffer"),addGetter($DataView,"byteLength"),addGetter($DataView,"byteOffset")),redefineAll(DataViewPrototype,{getInt8:function(t){return get$2(this,1,t)[0]<<24>>24},getUint8:function(t){return get$2(this,1,t)[0]},getInt16:function(t){var e=get$2(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=get$2(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return unpackInt32(get$2(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return unpackInt32(get$2(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return unpackIEEE754(get$2(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return unpackIEEE754(get$2(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){set$3(this,1,t,packInt8,e)},setUint8:function(t,e){set$3(this,1,t,packInt8,e)},setInt16:function(t,e){set$3(this,2,t,packInt16,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){set$3(this,2,t,packInt16,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){set$3(this,4,t,packInt32,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){set$3(this,4,t,packInt32,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){set$3(this,4,t,packFloat32,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){set$3(this,8,t,packFloat64,e,arguments.length>2?arguments[2]:void 0)}});setToStringTag($ArrayBuffer,ARRAY_BUFFER),setToStringTag($DataView,DATA_VIEW);var arrayBuffer={ArrayBuffer:$ArrayBuffer,DataView:$DataView},floor$3=Math.floor,isIntegralNumber=Number.isInteger||function(t){return!isObject(t)&&isFinite(t)&&floor$3(t)===t},RangeError$4=global$1.RangeError,toPositiveInteger=function(t){var e=toIntegerOrInfinity(t);if(e<0)throw RangeError$4("The argument can't be less than 0");return e},RangeError$3=global$1.RangeError,toOffset=function(t,e){var r=toPositiveInteger(t);if(r%e)throw RangeError$3("Wrong offset");return r},aTypedArrayConstructor$1=arrayBufferViewCore.aTypedArrayConstructor,typedArrayFrom=function(t){var e,r,n,a,i,o,s=aConstructor(this),l=toObject(t),c=arguments.length,u=c>1?arguments[1]:void 0,h=void 0!==u,d=getIteratorMethod(l);if(d&&!isArrayIteratorMethod(d))for(o=(i=getIterator(l,d)).next,l=[];!(a=functionCall(o,i)).done;)l.push(a.value);for(h&&c>2&&(u=functionBindContext(u,arguments[2])),r=lengthOfArrayLike(l),n=new(aTypedArrayConstructor$1(s))(r),e=0;r>e;e++)n[e]=h?u(l[e],e):l[e];return n},isArray=Array.isArray||function(t){return"Array"==classofRaw(t)},SPECIES$1=wellKnownSymbol("species"),Array$3=global$1.Array,arraySpeciesConstructor=function(t){var e;return isArray(t)&&(e=t.constructor,(isConstructor(e)&&(e===Array$3||isArray(e.prototype))||isObject(e)&&null===(e=e[SPECIES$1]))&&(e=void 0)),void 0===e?Array$3:e},arraySpeciesCreate=function(t,e){return new(arraySpeciesConstructor(t))(0===e?0:e)},push$4=functionUncurryThis([].push),createMethod=function(t){var e=1==t,r=2==t,n=3==t,a=4==t,i=6==t,o=7==t,s=5==t||i;return function(l,c,u,h){for(var d,f,p=toObject(l),g=indexedObject(p),m=functionBindContext(c,u),b=lengthOfArrayLike(g),y=0,v=h||arraySpeciesCreate,$=e?v(l,b):r||o?v(l,0):void 0;b>y;y++)if((s||y in g)&&(f=m(d=g[y],y,p),t))if(e)$[y]=f;else if(f)switch(t){case 3:return!0;case 5:return d;case 6:return y;case 2:push$4($,d)}else switch(t){case 4:return!1;case 7:push$4($,d)}return i?-1:n||a?a:$}},arrayIteration={forEach:createMethod(0),map:createMethod(1),filter:createMethod(2),some:createMethod(3),every:createMethod(4),find:createMethod(5),findIndex:createMethod(6),filterReject:createMethod(7)},SPECIES=wellKnownSymbol("species"),setSpecies=function(t){var e=getBuiltIn(t),r=objectDefineProperty.f;descriptors&&e&&!e[SPECIES]&&r(e,SPECIES,{configurable:!0,get:function(){return this}})},typedArrayConstructor=createCommonjsModule((function(t){var e=objectGetOwnPropertyNames.f,r=arrayIteration.forEach,n=internalState.get,a=internalState.set,i=objectDefineProperty.f,o=objectGetOwnPropertyDescriptor.f,s=Math.round,l=global$1.RangeError,c=arrayBuffer.ArrayBuffer,u=c.prototype,h=arrayBuffer.DataView,d=arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS,f=arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR,p=arrayBufferViewCore.TYPED_ARRAY_TAG,g=arrayBufferViewCore.TypedArray,m=arrayBufferViewCore.TypedArrayPrototype,b=arrayBufferViewCore.aTypedArrayConstructor,y=arrayBufferViewCore.isTypedArray,v="BYTES_PER_ELEMENT",$="Wrong length",_=function(t,e){b(t);for(var r=0,n=e.length,a=new t(n);n>r;)a[r]=e[r++];return a},S=function(t,e){i(t,e,{get:function(){return n(this)[e]}})},E=function(t){var e;return objectIsPrototypeOf(u,t)||"ArrayBuffer"==(e=classof(t))||"SharedArrayBuffer"==e},T=function(t,e){return y(t)&&!isSymbol(e)&&e in t&&isIntegralNumber(+e)&&e>=0},w=function(t,e){return e=toPropertyKey(e),T(t,e)?createPropertyDescriptor(2,t[e]):o(t,e)},A=function(t,e,r){return e=toPropertyKey(e),!(T(t,e)&&isObject(r)&&hasOwnProperty_1(r,"value"))||hasOwnProperty_1(r,"get")||hasOwnProperty_1(r,"set")||r.configurable||hasOwnProperty_1(r,"writable")&&!r.writable||hasOwnProperty_1(r,"enumerable")&&!r.enumerable?i(t,e,r):(t[e]=r.value,t)};descriptors?(d||(objectGetOwnPropertyDescriptor.f=w,objectDefineProperty.f=A,S(m,"buffer"),S(m,"byteOffset"),S(m,"byteLength"),S(m,"length")),_export({target:"Object",stat:!0,forced:!d},{getOwnPropertyDescriptor:w,defineProperty:A}),t.exports=function(t,o,u){var b=t.match(/\d+$/)[0]/8,S=t+(u?"Clamped":"")+"Array",T="get"+t,w="set"+t,A=global$1[S],x=A,R=x&&x.prototype,C={},O=function(t,e){i(t,e,{get:function(){return function(t,e){var r=n(t);return r.view[T](e*b+r.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,r){var a=n(t);u&&(r=(r=s(r))<0?0:r>255?255:255&r),a.view[w](e*b+a.byteOffset,r,!0)}(this,e,t)},enumerable:!0})};d?typedArrayConstructorsRequireWrappers&&(x=o((function(t,e,r,n){return anInstance(t,R),inheritIfRequired(isObject(e)?E(e)?void 0!==n?new A(e,toOffset(r,b),n):void 0!==r?new A(e,toOffset(r,b)):new A(e):y(e)?_(x,e):functionCall(typedArrayFrom,x,e):new A(toIndex(e)),t,x)})),objectSetPrototypeOf&&objectSetPrototypeOf(x,g),r(e(A),(function(t){t in x||createNonEnumerableProperty(x,t,A[t])})),x.prototype=R):(x=o((function(t,e,r,n){anInstance(t,R);var i,o,s,u=0,d=0;if(isObject(e)){if(!E(e))return y(e)?_(x,e):functionCall(typedArrayFrom,x,e);i=e,d=toOffset(r,b);var f=e.byteLength;if(void 0===n){if(f%b)throw l($);if((o=f-d)<0)throw l($)}else if((o=toLength(n)*b)+d>f)throw l($);s=o/b}else s=toIndex(e),i=new c(o=s*b);for(a(t,{buffer:i,byteOffset:d,byteLength:o,length:s,view:new h(i)});u<s;)O(t,u++)})),objectSetPrototypeOf&&objectSetPrototypeOf(x,g),R=x.prototype=objectCreate(m)),R.constructor!==x&&createNonEnumerableProperty(R,"constructor",x),createNonEnumerableProperty(R,f,x),p&&createNonEnumerableProperty(R,p,S),C[S]=x,_export({global:!0,forced:x!=A,sham:!d},C),v in x||createNonEnumerableProperty(x,v,b),v in R||createNonEnumerableProperty(R,v,b),setSpecies(S)}):t.exports=function(){}}));typedArrayConstructor("Float32",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Float64",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Int8",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Int16",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Int32",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}),!0),typedArrayConstructor("Uint16",(function(t){return function(e,r,n){return t(this,e,r,n)}})),typedArrayConstructor("Uint32",(function(t){return function(e,r,n){return t(this,e,r,n)}}));var aTypedArray$2=arrayBufferViewCore.aTypedArray,exportTypedArrayMethod$2=arrayBufferViewCore.exportTypedArrayMethod;exportTypedArrayMethod$2("at",(function(t){var e=aTypedArray$2(this),r=lengthOfArrayLike(e),n=toIntegerOrInfinity(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}));var exportTypedArrayStaticMethod$1=arrayBufferViewCore.exportTypedArrayStaticMethod;exportTypedArrayStaticMethod$1("from",typedArrayFrom,typedArrayConstructorsRequireWrappers);var aTypedArrayConstructor=arrayBufferViewCore.aTypedArrayConstructor,exportTypedArrayStaticMethod=arrayBufferViewCore.exportTypedArrayStaticMethod;exportTypedArrayStaticMethod("of",(function(){for(var t=0,e=arguments.length,r=new(aTypedArrayConstructor(this))(e);e>t;)r[t]=arguments[t++];return r}),typedArrayConstructorsRequireWrappers);var RangeError$2=global$1.RangeError,Int8Array=global$1.Int8Array,Int8ArrayPrototype=Int8Array&&Int8Array.prototype,$set=Int8ArrayPrototype&&Int8ArrayPrototype.set,aTypedArray$1=arrayBufferViewCore.aTypedArray,exportTypedArrayMethod$1=arrayBufferViewCore.exportTypedArrayMethod,WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS=!fails((function(){var t=new Uint8ClampedArray(2);return functionCall($set,t,{length:1,0:3},1),3!==t[1]})),TO_OBJECT_BUG=WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS&&arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS&&fails((function(){var t=new Int8Array(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));exportTypedArrayMethod$1("set",(function(t){aTypedArray$1(this);var e=toOffset(arguments.length>1?arguments[1]:void 0,1),r=toObject(t);if(WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS)return functionCall($set,this,r,e);var n=this.length,a=lengthOfArrayLike(r),i=0;if(a+e>n)throw RangeError$2("Wrong length");for(;i<a;)this[e+i]=r[i++]}),!WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS||TO_OBJECT_BUG);var floor$2=Math.floor,mergeSort=function(t,e){var r=t.length,n=floor$2(r/2);return r<8?insertionSort(t,e):merge$1(t,mergeSort(arraySliceSimple(t,0,n),e),mergeSort(arraySliceSimple(t,n),e),e)},insertionSort=function(t,e){for(var r,n,a=t.length,i=1;i<a;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},merge$1=function(t,e,r,n){for(var a=e.length,i=r.length,o=0,s=0;o<a||s<i;)t[o+s]=o<a&&s<i?n(e[o],r[s])<=0?e[o++]:r[s++]:o<a?e[o++]:r[s++];return t},arraySort=mergeSort,firefox=engineUserAgent.match(/firefox\/(\d+)/i),engineFfVersion=!!firefox&&+firefox[1],engineIsIeOrEdge=/MSIE|Trident/.test(engineUserAgent),webkit=engineUserAgent.match(/AppleWebKit\/(\d+)\./),engineWebkitVersion=!!webkit&&+webkit[1],Array$2=global$1.Array,aTypedArray=arrayBufferViewCore.aTypedArray,exportTypedArrayMethod=arrayBufferViewCore.exportTypedArrayMethod,Uint16Array=global$1.Uint16Array,un$Sort=Uint16Array&&functionUncurryThis(Uint16Array.prototype.sort),ACCEPT_INCORRECT_ARGUMENTS=!(!un$Sort||fails((function(){un$Sort(new Uint16Array(2),null)}))&&fails((function(){un$Sort(new Uint16Array(2),{})}))),STABLE_SORT=!!un$Sort&&!fails((function(){if(engineV8Version)return engineV8Version<74;if(engineFfVersion)return engineFfVersion<67;if(engineIsIeOrEdge)return!0;if(engineWebkitVersion)return engineWebkitVersion<602;var t,e,r=new Uint16Array(516),n=Array$2(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(un$Sort(r,(function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0})),getSortCompare=function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}};exportTypedArrayMethod("sort",(function(t){return void 0!==t&&aCallable(t),STABLE_SORT?un$Sort(this,t):arraySort(aTypedArray(this),getSortCompare(t))}),!STABLE_SORT||ACCEPT_INCORRECT_ARGUMENTS);var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},classList$1=documentCreateElement("span").classList,DOMTokenListPrototype=classList$1&&classList$1.constructor&&classList$1.constructor.prototype,domTokenListPrototype=DOMTokenListPrototype===Object.prototype?void 0:DOMTokenListPrototype,PROPER_FUNCTION_NAME=functionName.PROPER,CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,IteratorPrototype=iteratorsCore.IteratorPrototype,BUGGY_SAFARI_ITERATORS=iteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR$3=wellKnownSymbol("iterator"),KEYS="keys",VALUES="values",ENTRIES="entries",returnThis=function(){return this},defineIterator=function(t,e,r,n,a,i,o){createIteratorConstructor(r,e,n);var s,l,c,u=function(t){if(t===a&&g)return g;if(!BUGGY_SAFARI_ITERATORS&&t in f)return f[t];switch(t){case KEYS:case VALUES:case ENTRIES:return function(){return new r(this,t)}}return function(){return new r(this)}},h=e+" Iterator",d=!1,f=t.prototype,p=f[ITERATOR$3]||f["@@iterator"]||a&&f[a],g=!BUGGY_SAFARI_ITERATORS&&p||u(a),m="Array"==e&&f.entries||p;if(m&&(s=objectGetPrototypeOf(m.call(new t)))!==Object.prototype&&s.next&&(objectGetPrototypeOf(s)!==IteratorPrototype&&(objectSetPrototypeOf?objectSetPrototypeOf(s,IteratorPrototype):isCallable(s[ITERATOR$3])||redefine(s,ITERATOR$3,returnThis)),setToStringTag(s,h,!0)),PROPER_FUNCTION_NAME&&a==VALUES&&p&&p.name!==VALUES&&(CONFIGURABLE_FUNCTION_NAME?createNonEnumerableProperty(f,"name",VALUES):(d=!0,g=function(){return functionCall(p,this)})),a)if(l={values:u(VALUES),keys:i?g:u(KEYS),entries:u(ENTRIES)},o)for(c in l)(BUGGY_SAFARI_ITERATORS||d||!(c in f))&&redefine(f,c,l[c]);else _export({target:e,proto:!0,forced:BUGGY_SAFARI_ITERATORS||d},l);return f[ITERATOR$3]!==g&&redefine(f,ITERATOR$3,g,{name:a}),iterators[e]=g,l},defineProperty$2=objectDefineProperty.f,ARRAY_ITERATOR="Array Iterator",setInternalState$3=internalState.set,getInternalState$1=internalState.getterFor(ARRAY_ITERATOR),es_array_iterator=defineIterator(Array,"Array",(function(t,e){setInternalState$3(this,{type:ARRAY_ITERATOR,target:toIndexedObject(t),index:0,kind:e})}),(function(){var t=getInternalState$1(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),values=iterators.Arguments=iterators.Array;if(addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries"),descriptors&&"values"!==values.name)try{defineProperty$2(values,"name",{value:"values"})}catch(t){}var ITERATOR$2=wellKnownSymbol("iterator"),TO_STRING_TAG=wellKnownSymbol("toStringTag"),ArrayValues=es_array_iterator.values,handlePrototype=function(t,e){if(t){if(t[ITERATOR$2]!==ArrayValues)try{createNonEnumerableProperty(t,ITERATOR$2,ArrayValues)}catch(e){t[ITERATOR$2]=ArrayValues}if(t[TO_STRING_TAG]||createNonEnumerableProperty(t,TO_STRING_TAG,e),domIterables[e])for(var r in es_array_iterator)if(t[r]!==es_array_iterator[r])try{createNonEnumerableProperty(t,r,es_array_iterator[r])}catch(e){t[r]=es_array_iterator[r]}}};for(var COLLECTION_NAME in domIterables)handlePrototype(global$1[COLLECTION_NAME]&&global$1[COLLECTION_NAME].prototype,COLLECTION_NAME);handlePrototype(domTokenListPrototype,"DOMTokenList");var domExceptionConstants={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},defineProperty$1=objectDefineProperty.f,DOM_EXCEPTION="DOMException",Error$2=getBuiltIn("Error"),NativeDOMException=getBuiltIn(DOM_EXCEPTION),$DOMException=function(){anInstance(this,DOMExceptionPrototype);var t=arguments.length,e=normalizeStringArgument(t<1?void 0:arguments[0]),r=normalizeStringArgument(t<2?void 0:arguments[1],"Error"),n=new NativeDOMException(e,r),a=Error$2(e);return a.name=DOM_EXCEPTION,defineProperty$1(n,"stack",createPropertyDescriptor(1,clearErrorStack(a.stack,1))),inheritIfRequired(n,this,$DOMException),n},DOMExceptionPrototype=$DOMException.prototype=NativeDOMException.prototype,ERROR_HAS_STACK="stack"in Error$2(DOM_EXCEPTION),DOM_EXCEPTION_HAS_STACK="stack"in new NativeDOMException(1,2),FORCED_CONSTRUCTOR=ERROR_HAS_STACK&&!DOM_EXCEPTION_HAS_STACK;_export({global:!0,forced:FORCED_CONSTRUCTOR},{DOMException:FORCED_CONSTRUCTOR?$DOMException:NativeDOMException});var PolyfilledDOMException=getBuiltIn(DOM_EXCEPTION),PolyfilledDOMExceptionPrototype=PolyfilledDOMException.prototype;if(PolyfilledDOMExceptionPrototype.constructor!==PolyfilledDOMException)for(var key in defineProperty$1(PolyfilledDOMExceptionPrototype,"constructor",createPropertyDescriptor(1,PolyfilledDOMException)),domExceptionConstants)if(hasOwnProperty_1(domExceptionConstants,key)){var constant$6=domExceptionConstants[key],constantName=constant$6.s;hasOwnProperty_1(PolyfilledDOMException,constantName)||defineProperty$1(PolyfilledDOMException,constantName,createPropertyDescriptor(6,constant$6.c))}var location,defer,channel,port,arraySlice=functionUncurryThis([].slice),TypeError$4=global$1.TypeError,validateArgumentsLength=function(t,e){if(t<e)throw TypeError$4("Not enough arguments");return t},engineIsIos=/(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent),engineIsNode="process"==classofRaw(global$1.process),set$2=global$1.setImmediate,clear=global$1.clearImmediate,process=global$1.process,Dispatch$1=global$1.Dispatch,Function$1=global$1.Function,MessageChannel=global$1.MessageChannel,String$1=global$1.String,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange";try{location=global$1.location}catch(t){}var run=function(t){if(hasOwnProperty_1(queue,t)){var e=queue[t];delete queue[t],e()}},runner=function(t){return function(){run(t)}},listener=function(t){run(t.data)},post=function(t){global$1.postMessage(String$1(t),location.protocol+"//"+location.host)};set$2&&clear||(set$2=function(t){validateArgumentsLength(arguments.length,1);var e=isCallable(t)?t:Function$1(t),r=arraySlice(arguments,1);return queue[++counter]=function(){functionApply(e,void 0,r)},defer(counter),counter},clear=function(t){delete queue[t]},engineIsNode?defer=function(t){process.nextTick(runner(t))}:Dispatch$1&&Dispatch$1.now?defer=function(t){Dispatch$1.now(runner(t))}:MessageChannel&&!engineIsIos?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=listener,defer=functionBindContext(port.postMessage,port)):global$1.addEventListener&&isCallable(global$1.postMessage)&&!global$1.importScripts&&location&&"file:"!==location.protocol&&!fails(post)?(defer=post,global$1.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in documentCreateElement("script")?function(t){html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(t)}}:function(t){setTimeout(runner(t),0)});var task={set:set$2,clear:clear},FORCED=!global$1.setImmediate||!global$1.clearImmediate;_export({global:!0,bind:!0,enumerable:!0,forced:FORCED},{setImmediate:task.set,clearImmediate:task.clear});var Object$1=global$1.Object,Date$1=global$1.Date,Error$1=global$1.Error,EvalError=global$1.EvalError,RangeError$1=global$1.RangeError,ReferenceError=global$1.ReferenceError,SyntaxError=global$1.SyntaxError,TypeError$3=global$1.TypeError,URIError=global$1.URIError,PerformanceMark=global$1.PerformanceMark,WebAssembly=global$1.WebAssembly,CompileError=WebAssembly&&WebAssembly.CompileError||Error$1,LinkError=WebAssembly&&WebAssembly.LinkError||Error$1,RuntimeError=WebAssembly&&WebAssembly.RuntimeError||Error$1,DOMException=getBuiltIn("DOMException"),Set$1=getBuiltIn("Set"),Map$1=getBuiltIn("Map"),MapPrototype=Map$1.prototype,mapHas=functionUncurryThis(MapPrototype.has),mapGet=functionUncurryThis(MapPrototype.get),mapSet=functionUncurryThis(MapPrototype.set),setAdd=functionUncurryThis(Set$1.prototype.add),objectKeys=getBuiltIn("Object","keys"),push$3=functionUncurryThis([].push),booleanValueOf=functionUncurryThis((!0).valueOf),numberValueOf=functionUncurryThis(1..valueOf),stringValueOf=functionUncurryThis("".valueOf),getFlags=functionUncurryThis(regexpFlags),getTime=functionUncurryThis(Date$1.prototype.getTime),PERFORMANCE_MARK=uid("structuredClone"),DATA_CLONE_ERROR="DataCloneError",TRANSFERRING="Transferring",checkBasicSemantic=function(t){return!fails((function(){var e=new global$1.Set([7]),r=t(e),n=t(Object$1(7));return r==e||!r.has(7)||"object"!=typeof n||7!=n}))&&t},checkNewErrorsSemantic=function(t){return!fails((function(){var e=t(new global$1.AggregateError([1],PERFORMANCE_MARK,{cause:3}));return"AggregateError"!=e.name||1!=e.errors[0]||e.message!=PERFORMANCE_MARK||3!=e.cause}))&&t},nativeStructuredClone=global$1.structuredClone,FORCED_REPLACEMENT=!checkNewErrorsSemantic(nativeStructuredClone),structuredCloneFromMark=!nativeStructuredClone&&checkBasicSemantic((function(t){return new PerformanceMark(PERFORMANCE_MARK,{detail:t}).detail})),nativeRestrictedStructuredClone=checkBasicSemantic(nativeStructuredClone)||structuredCloneFromMark,throwUncloneable=function(t){throw new DOMException("Uncloneable type: "+t,DATA_CLONE_ERROR)},throwUnpolyfillable=function(t,e){throw new DOMException((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",DATA_CLONE_ERROR)},structuredCloneInternal=function(t,e){if(isSymbol(t)&&throwUncloneable("Symbol"),!isObject(t))return t;if(e){if(mapHas(e,t))return mapGet(e,t)}else e=new Map$1;var r,n,a,i,o,s,l,c,u,h,d=classof(t),f=!1;switch(d){case"Array":a=[],f=!0;break;case"Object":a={},f=!0;break;case"Map":a=new Map$1,f=!0;break;case"Set":a=new Set$1,f=!0;break;case"RegExp":a=new RegExp(t.source,"flags"in t?t.flags:getFlags(t));break;case"Error":switch(n=t.name){case"AggregateError":a=getBuiltIn("AggregateError")([]);break;case"EvalError":a=EvalError();break;case"RangeError":a=RangeError$1();break;case"ReferenceError":a=ReferenceError();break;case"SyntaxError":a=SyntaxError();break;case"TypeError":a=TypeError$3();break;case"URIError":a=URIError();break;case"CompileError":a=CompileError();break;case"LinkError":a=LinkError();break;case"RuntimeError":a=RuntimeError();break;default:a=Error$1()}f=!0;break;case"DOMException":a=new DOMException(t.message,t.name),f=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":r=global$1[d],isObject(r)||throwUnpolyfillable(d),a=new r(structuredCloneInternal(t.buffer,e),t.byteOffset,"DataView"===d?t.byteLength:t.length);break;case"DOMQuad":try{a=new DOMQuad(structuredCloneInternal(t.p1,e),structuredCloneInternal(t.p2,e),structuredCloneInternal(t.p3,e),structuredCloneInternal(t.p4,e))}catch(e){nativeRestrictedStructuredClone?a=nativeRestrictedStructuredClone(t):throwUnpolyfillable(d)}break;case"FileList":if(r=global$1.DataTransfer,isConstructor(r)){for(i=new r,o=0,s=lengthOfArrayLike(t);o<s;o++)i.items.add(structuredCloneInternal(t[o],e));a=i.files}else nativeRestrictedStructuredClone?a=nativeRestrictedStructuredClone(t):throwUnpolyfillable(d);break;case"ImageData":try{a=new ImageData(structuredCloneInternal(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){nativeRestrictedStructuredClone?a=nativeRestrictedStructuredClone(t):throwUnpolyfillable(d)}break;default:if(nativeRestrictedStructuredClone)a=nativeRestrictedStructuredClone(t);else switch(d){case"BigInt":a=Object$1(t.valueOf());break;case"Boolean":a=Object$1(booleanValueOf(t));break;case"Number":a=Object$1(numberValueOf(t));break;case"String":a=Object$1(stringValueOf(t));break;case"Date":a=new Date$1(getTime(t));break;case"ArrayBuffer":(r=global$1.DataView)||"function"==typeof t.slice||throwUnpolyfillable(d);try{if("function"==typeof t.slice)a=t.slice(0);else for(s=t.byteLength,a=new ArrayBuffer(s),u=new r(t),h=new r(a),o=0;o<s;o++)h.setUint8(o,u.getUint8(o))}catch(t){throw new DOMException("ArrayBuffer is detached",DATA_CLONE_ERROR)}break;case"SharedArrayBuffer":a=t;break;case"Blob":try{a=t.slice(0,t.size,t.type)}catch(t){throwUnpolyfillable(d)}break;case"DOMPoint":case"DOMPointReadOnly":r=global$1[d];try{a=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){throwUnpolyfillable(d)}break;case"DOMRect":case"DOMRectReadOnly":r=global$1[d];try{a=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){throwUnpolyfillable(d)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=global$1[d];try{a=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){throwUnpolyfillable(d)}break;case"AudioData":case"VideoFrame":isCallable(t.clone)||throwUnpolyfillable(d);try{a=t.clone()}catch(t){throwUncloneable(d)}break;case"File":try{a=new File([t],t.name,t)}catch(t){throwUnpolyfillable(d)}break;case"CryptoKey":case"GPUCompilationMessage":case"GPUCompilationInfo":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":throwUnpolyfillable(d);default:throwUncloneable(d)}}if(mapSet(e,t,a),f)switch(d){case"Array":case"Object":for(l=objectKeys(t),o=0,s=lengthOfArrayLike(l);o<s;o++)c=l[o],createProperty(a,c,structuredCloneInternal(t[c],e));break;case"Map":t.forEach((function(t,r){mapSet(a,structuredCloneInternal(r,e),structuredCloneInternal(t,e))}));break;case"Set":t.forEach((function(t){setAdd(a,structuredCloneInternal(t,e))}));break;case"Error":createNonEnumerableProperty(a,"message",structuredCloneInternal(t.message,e)),hasOwnProperty_1(t,"cause")&&createNonEnumerableProperty(a,"cause",structuredCloneInternal(t.cause,e)),"AggregateError"==n&&(a.errors=structuredCloneInternal(t.errors,e));case"DOMException":errorStackInstallable&&createNonEnumerableProperty(a,"stack",structuredCloneInternal(t.stack,e))}return a},PROPER_TRANSFER=nativeStructuredClone&&!fails((function(){var t=new ArrayBuffer(8),e=nativeStructuredClone(t,{transfer:[t]});return 0!=t.byteLength||8!=e.byteLength})),tryToTransfer=function(t,e){if(!isObject(t))throw TypeError$3("Transfer option cannot be converted to a sequence");var r=[];iterate(t,(function(t){push$3(r,anObject(t))}));var n,a,i,o,s,l,c=0,u=lengthOfArrayLike(r);if(PROPER_TRANSFER)for(o=nativeStructuredClone(r,{transfer:r});c<u;)mapSet(e,r[c],o[c++]);else for(;c<u;){if(n=r[c++],mapHas(e,n))throw new DOMException("Duplicate transferable",DATA_CLONE_ERROR);switch(a=classof(n)){case"ImageBitmap":i=global$1.OffscreenCanvas,isConstructor(i)||throwUnpolyfillable(a,TRANSFERRING);try{(l=new i(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),s=l.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":isCallable(n.clone)&&isCallable(n.close)||throwUnpolyfillable(a,TRANSFERRING);try{s=n.clone(),n.close()}catch(t){}break;case"ArrayBuffer":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":throwUnpolyfillable(a,TRANSFERRING)}if(void 0===s)throw new DOMException("This object cannot be transferred: "+a,DATA_CLONE_ERROR);mapSet(e,n,s)}};_export({global:!0,enumerable:!0,sham:!PROPER_TRANSFER,forced:FORCED_REPLACEMENT},{structuredClone:function(t){var e,r=validateArgumentsLength(arguments.length,1)>1?anObject(arguments[1]):void 0,n=r?r.transfer:void 0;return void 0!==n&&(e=new Map$1,tryToTransfer(n,e)),structuredCloneInternal(t,e)}});var charAt$2=stringMultibyte.charAt,STRING_ITERATOR="String Iterator",setInternalState$2=internalState.set,getInternalState=internalState.getterFor(STRING_ITERATOR);defineIterator(String,"String",(function(t){setInternalState$2(this,{type:STRING_ITERATOR,string:toString(t),index:0})}),(function(){var t,e=getInternalState(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=charAt$2(r,n),e.index+=t.length,{value:t,done:!1})}));var ITERATOR$1=wellKnownSymbol("iterator"),nativeUrl=!fails((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),isPure&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[ITERATOR$1]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host})),$assign=Object.assign,defineProperty=Object.defineProperty,concat=functionUncurryThis([].concat),objectAssign=!$assign||fails((function(){if(descriptors&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=$assign({},t)[r]||objectKeys$1($assign({},e)).join("")!=n}))?function(t,e){for(var r=toObject(t),n=arguments.length,a=1,i=objectGetOwnPropertySymbols.f,o=objectPropertyIsEnumerable.f;n>a;)for(var s,l=indexedObject(arguments[a++]),c=i?concat(objectKeys$1(l),i(l)):objectKeys$1(l),u=c.length,h=0;u>h;)s=c[h++],descriptors&&!functionCall(o,l,s)||(r[s]=l[s]);return r}:$assign,callWithSafeIterationClosing=function(t,e,r,n){try{return n?e(anObject(r)[0],r[1]):e(r)}catch(e){iteratorClose(t,"throw",e)}},Array$1=global$1.Array,arrayFrom=function(t){var e=toObject(t),r=isConstructor(this),n=arguments.length,a=n>1?arguments[1]:void 0,i=void 0!==a;i&&(a=functionBindContext(a,n>2?arguments[2]:void 0));var o,s,l,c,u,h,d=getIteratorMethod(e),f=0;if(!d||this==Array$1&&isArrayIteratorMethod(d))for(o=lengthOfArrayLike(e),s=r?new this(o):Array$1(o);o>f;f++)h=i?a(e[f],f):e[f],createProperty(s,f,h);else for(u=(c=getIterator(e,d)).next,s=r?new this:[];!(l=functionCall(u,c)).done;f++)h=i?callWithSafeIterationClosing(c,a,[l.value,f],!0):l.value,createProperty(s,f,h);return s.length=f,s},maxInt=2147483647,base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,delimiter="-",regexNonASCII=/[^\0-\u007E]/,regexSeparators=/[.\u3002\uFF0E\uFF61]/g,OVERFLOW_ERROR="Overflow: input needs wider integers to process",baseMinusTMin=base-tMin,RangeError=global$1.RangeError,exec$1=functionUncurryThis(regexSeparators.exec),floor$1=Math.floor,fromCharCode=String.fromCharCode,charCodeAt=functionUncurryThis("".charCodeAt),join$2=functionUncurryThis([].join),push$2=functionUncurryThis([].push),replace$2=functionUncurryThis("".replace),split$2=functionUncurryThis("".split),toLowerCase$1=functionUncurryThis("".toLowerCase),ucs2decode=function(t){for(var e=[],r=0,n=t.length;r<n;){var a=charCodeAt(t,r++);if(a>=55296&&a<=56319&&r<n){var i=charCodeAt(t,r++);56320==(64512&i)?push$2(e,((1023&a)<<10)+(1023&i)+65536):(push$2(e,a),r--)}else push$2(e,a)}return e},digitToBasic=function(t){return t+22+75*(t<26)},adapt=function(t,e,r){var n=0;for(t=r?floor$1(t/damp):t>>1,t+=floor$1(t/e);t>baseMinusTMin*tMax>>1;)t=floor$1(t/baseMinusTMin),n+=base;return floor$1(n+(baseMinusTMin+1)*t/(t+skew))},encode=function(t){var e,r,n=[],a=(t=ucs2decode(t)).length,i=initialN,o=0,s=initialBias;for(e=0;e<t.length;e++)(r=t[e])<128&&push$2(n,fromCharCode(r));var l=n.length,c=l;for(l&&push$2(n,delimiter);c<a;){var u=maxInt;for(e=0;e<t.length;e++)(r=t[e])>=i&&r<u&&(u=r);var h=c+1;if(u-i>floor$1((maxInt-o)/h))throw RangeError(OVERFLOW_ERROR);for(o+=(u-i)*h,i=u,e=0;e<t.length;e++){if((r=t[e])<i&&++o>maxInt)throw RangeError(OVERFLOW_ERROR);if(r==i){for(var d=o,f=base;;){var p=f<=s?tMin:f>=s+tMax?tMax:f-s;if(d<p)break;var g=d-p,m=base-p;push$2(n,fromCharCode(digitToBasic(p+g%m))),d=floor$1(g/m),f+=base}push$2(n,fromCharCode(digitToBasic(d))),s=adapt(o,h,c==l),o=0,c++}}o++,i++}return join$2(n,"")},stringPunycodeToAscii=function(t){var e,r,n=[],a=split$2(replace$2(toLowerCase$1(t),regexSeparators,"."),".");for(e=0;e<a.length;e++)r=a[e],push$2(n,exec$1(regexNonASCII,r)?"xn--"+encode(r):r);return join$2(n,".")},ITERATOR=wellKnownSymbol("iterator"),URL_SEARCH_PARAMS="URLSearchParams",URL_SEARCH_PARAMS_ITERATOR=URL_SEARCH_PARAMS+"Iterator",setInternalState$1=internalState.set,getInternalParamsState=internalState.getterFor(URL_SEARCH_PARAMS),getInternalIteratorState=internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR),n$Fetch=getBuiltIn("fetch"),N$Request=getBuiltIn("Request"),Headers=getBuiltIn("Headers"),RequestPrototype=N$Request&&N$Request.prototype,HeadersPrototype=Headers&&Headers.prototype,RegExp$1=global$1.RegExp,TypeError$2=global$1.TypeError,decodeURIComponent=global$1.decodeURIComponent,encodeURIComponent$1=global$1.encodeURIComponent,charAt$1=functionUncurryThis("".charAt),join$1=functionUncurryThis([].join),push$1=functionUncurryThis([].push),replace$1=functionUncurryThis("".replace),shift$1=functionUncurryThis([].shift),splice=functionUncurryThis([].splice),split$1=functionUncurryThis("".split),stringSlice$1=functionUncurryThis("".slice),plus=/\+/g,sequences=Array(4),percentSequence=function(t){return sequences[t-1]||(sequences[t-1]=RegExp$1("((?:%[\\da-f]{2}){"+t+"})","gi"))},percentDecode=function(t){try{return decodeURIComponent(t)}catch(e){return t}},deserialize=function(t){var e=replace$1(t,plus," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=replace$1(e,percentSequence(r--),percentDecode);return e}},find$1=/[!'()~]|%20/g,replacements={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},replacer=function(t){return replacements[t]},serialize=function(t){return replace$1(encodeURIComponent$1(t),find$1,replacer)},URLSearchParamsIterator=createIteratorConstructor((function(t,e){setInternalState$1(this,{type:URL_SEARCH_PARAMS_ITERATOR,iterator:getIterator(getInternalParamsState(t).entries),kind:e})}),"Iterator",(function(){var t=getInternalIteratorState(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),!0),URLSearchParamsState=function(t){this.entries=[],this.url=null,void 0!==t&&(isObject(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===charAt$1(t,0)?stringSlice$1(t,1):t:toString(t)))};URLSearchParamsState.prototype={type:URL_SEARCH_PARAMS,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,r,n,a,i,o,s,l=getIteratorMethod(t);if(l)for(r=(e=getIterator(t,l)).next;!(n=functionCall(r,e)).done;){if(i=(a=getIterator(anObject(n.value))).next,(o=functionCall(i,a)).done||(s=functionCall(i,a)).done||!functionCall(i,a).done)throw TypeError$2("Expected sequence with length 2");push$1(this.entries,{key:toString(o.value),value:toString(s.value)})}else for(var c in t)hasOwnProperty_1(t,c)&&push$1(this.entries,{key:c,value:toString(t[c])})},parseQuery:function(t){if(t)for(var e,r,n=split$1(t,"&"),a=0;a<n.length;)(e=n[a++]).length&&(r=split$1(e,"="),push$1(this.entries,{key:deserialize(shift$1(r)),value:deserialize(join$1(r,"="))}))},serialize:function(){for(var t,e=this.entries,r=[],n=0;n<e.length;)t=e[n++],push$1(r,serialize(t.key)+"="+serialize(t.value));return join$1(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var URLSearchParamsConstructor=function(){anInstance(this,URLSearchParamsPrototype);var t=arguments.length>0?arguments[0]:void 0;setInternalState$1(this,new URLSearchParamsState(t))},URLSearchParamsPrototype=URLSearchParamsConstructor.prototype;if(redefineAll(URLSearchParamsPrototype,{append:function(t,e){validateArgumentsLength(arguments.length,2);var r=getInternalParamsState(this);push$1(r.entries,{key:toString(t),value:toString(e)}),r.updateURL()},delete:function(t){validateArgumentsLength(arguments.length,1);for(var e=getInternalParamsState(this),r=e.entries,n=toString(t),a=0;a<r.length;)r[a].key===n?splice(r,a,1):a++;e.updateURL()},get:function(t){validateArgumentsLength(arguments.length,1);for(var e=getInternalParamsState(this).entries,r=toString(t),n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){validateArgumentsLength(arguments.length,1);for(var e=getInternalParamsState(this).entries,r=toString(t),n=[],a=0;a<e.length;a++)e[a].key===r&&push$1(n,e[a].value);return n},has:function(t){validateArgumentsLength(arguments.length,1);for(var e=getInternalParamsState(this).entries,r=toString(t),n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){validateArgumentsLength(arguments.length,1);for(var r,n=getInternalParamsState(this),a=n.entries,i=!1,o=toString(t),s=toString(e),l=0;l<a.length;l++)(r=a[l]).key===o&&(i?splice(a,l--,1):(i=!0,r.value=s));i||push$1(a,{key:o,value:s}),n.updateURL()},sort:function(){var t=getInternalParamsState(this);arraySort(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){for(var e,r=getInternalParamsState(this).entries,n=functionBindContext(t,arguments.length>1?arguments[1]:void 0),a=0;a<r.length;)n((e=r[a++]).value,e.key,this)},keys:function(){return new URLSearchParamsIterator(this,"keys")},values:function(){return new URLSearchParamsIterator(this,"values")},entries:function(){return new URLSearchParamsIterator(this,"entries")}},{enumerable:!0}),redefine(URLSearchParamsPrototype,ITERATOR,URLSearchParamsPrototype.entries,{name:"entries"}),redefine(URLSearchParamsPrototype,"toString",(function(){return getInternalParamsState(this).serialize()}),{enumerable:!0}),setToStringTag(URLSearchParamsConstructor,URL_SEARCH_PARAMS),_export({global:!0,forced:!nativeUrl},{URLSearchParams:URLSearchParamsConstructor}),!nativeUrl&&isCallable(Headers)){var headersHas=functionUncurryThis(HeadersPrototype.has),headersSet=functionUncurryThis(HeadersPrototype.set),wrapRequestOptions=function(t){if(isObject(t)){var e,r=t.body;if(classof(r)===URL_SEARCH_PARAMS)return e=t.headers?new Headers(t.headers):new Headers,headersHas(e,"content-type")||headersSet(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),objectCreate(t,{body:createPropertyDescriptor(0,toString(r)),headers:createPropertyDescriptor(0,e)})}return t};if(isCallable(n$Fetch)&&_export({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return n$Fetch(t,arguments.length>1?wrapRequestOptions(arguments[1]):{})}}),isCallable(N$Request)){var RequestConstructor=function(t){return anInstance(this,RequestPrototype),new N$Request(t,arguments.length>1?wrapRequestOptions(arguments[1]):{})};RequestPrototype.constructor=RequestConstructor,RequestConstructor.prototype=RequestPrototype,_export({global:!0,forced:!0},{Request:RequestConstructor})}}var EOF,web_urlSearchParams={URLSearchParams:URLSearchParamsConstructor,getState:getInternalParamsState},defineProperties=objectDefineProperties.f,codeAt=stringMultibyte.codeAt,setInternalState=internalState.set,getInternalURLState=internalState.getterFor("URL"),URLSearchParams$1=web_urlSearchParams.URLSearchParams,getInternalSearchParamsState=web_urlSearchParams.getState,NativeURL=global$1.URL,TypeError$1=global$1.TypeError,parseInt$1=global$1.parseInt,floor=Math.floor,pow=Math.pow,charAt=functionUncurryThis("".charAt),exec=functionUncurryThis(/./.exec),join=functionUncurryThis([].join),numberToString=functionUncurryThis(1..toString),pop=functionUncurryThis([].pop),push=functionUncurryThis([].push),replace=functionUncurryThis("".replace),shift=functionUncurryThis([].shift),split=functionUncurryThis("".split),stringSlice=functionUncurryThis("".slice),toLowerCase=functionUncurryThis("".toLowerCase),unshift=functionUncurryThis([].unshift),INVALID_AUTHORITY="Invalid authority",INVALID_SCHEME="Invalid scheme",INVALID_HOST="Invalid host",INVALID_PORT="Invalid port",ALPHA=/[a-z]/i,ALPHANUMERIC=/[\d+-.a-z]/i,DIGIT=/\d/,HEX_START=/^0x/i,OCT=/^[0-7]+$/,DEC=/^\d+$/,HEX=/^[\da-f]+$/i,FORBIDDEN_HOST_CODE_POINT=/[\0\t\n\r #%/:<>?@[\\\]^|]/,FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT=/[\0\t\n\r #/:<>?@[\\\]^|]/,LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,TAB_AND_NEW_LINE=/[\t\n\r]/g,parseIPv4=function(t){var e,r,n,a,i,o,s,l=split(t,".");if(l.length&&""==l[l.length-1]&&l.length--,(e=l.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(a=l[n]))return t;if(i=10,a.length>1&&"0"==charAt(a,0)&&(i=exec(HEX_START,a)?16:8,a=stringSlice(a,8==i?1:2)),""===a)o=0;else{if(!exec(10==i?DEC:8==i?OCT:HEX,a))return t;o=parseInt$1(a,i)}push(r,o)}for(n=0;n<e;n++)if(o=r[n],n==e-1){if(o>=pow(256,5-e))return null}else if(o>255)return null;for(s=pop(r),n=0;n<r.length;n++)s+=r[n]*pow(256,3-n);return s},parseIPv6=function(t){var e,r,n,a,i,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,d=function(){return charAt(t,h)};if(":"==d()){if(":"!=charAt(t,1))return;h+=2,u=++c}for(;d();){if(8==c)return;if(":"!=d()){for(e=r=0;r<4&&exec(HEX,d());)e=16*e+parseInt$1(d(),16),h++,r++;if("."==d()){if(0==r)return;if(h-=r,c>6)return;for(n=0;d();){if(a=null,n>0){if(!("."==d()&&n<4))return;h++}if(!exec(DIGIT,d()))return;for(;exec(DIGIT,d());){if(i=parseInt$1(d(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;h++}l[c]=256*l[c]+a,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==d()){if(h++,!d())return}else if(d())return;l[c++]=e}else{if(null!==u)return;h++,u=++c}}if(null!==u)for(o=c-u,c=7;0!=c&&o>0;)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s;else if(8!=c)return;return l},findLongestZeroSequence=function(t){for(var e=null,r=1,n=null,a=0,i=0;i<8;i++)0!==t[i]?(a>r&&(e=n,r=a),n=null,a=0):(null===n&&(n=i),++a);return a>r&&(e=n,r=a),e},serializeHost=function(t){var e,r,n,a;if("number"==typeof t){for(e=[],r=0;r<4;r++)unshift(e,t%256),t=floor(t/256);return join(e,".")}if("object"==typeof t){for(e="",n=findLongestZeroSequence(t),r=0;r<8;r++)a&&0===t[r]||(a&&(a=!1),n===r?(e+=r?":":"::",a=!0):(e+=numberToString(t[r],16),r<7&&(e+=":")));return"["+e+"]"}return t},C0ControlPercentEncodeSet={},fragmentPercentEncodeSet=objectAssign({},C0ControlPercentEncodeSet,{" ":1,'"':1,"<":1,">":1,"`":1}),pathPercentEncodeSet=objectAssign({},fragmentPercentEncodeSet,{"#":1,"?":1,"{":1,"}":1}),userinfoPercentEncodeSet=objectAssign({},pathPercentEncodeSet,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),percentEncode=function(t,e){var r=codeAt(t,0);return r>32&&r<127&&!hasOwnProperty_1(e,t)?t:encodeURIComponent(t)},specialSchemes={ftp:21,file:null,http:80,https:443,ws:80,wss:443},isWindowsDriveLetter=function(t,e){var r;return 2==t.length&&exec(ALPHA,charAt(t,0))&&(":"==(r=charAt(t,1))||!e&&"|"==r)},startsWithWindowsDriveLetter=function(t){var e;return t.length>1&&isWindowsDriveLetter(stringSlice(t,0,2))&&(2==t.length||"/"===(e=charAt(t,2))||"\\"===e||"?"===e||"#"===e)},isSingleDot=function(t){return"."===t||"%2e"===toLowerCase(t)},isDoubleDot=function(t){return".."===(t=toLowerCase(t))||"%2e."===t||".%2e"===t||"%2e%2e"===t},SCHEME_START={},SCHEME={},NO_SCHEME={},SPECIAL_RELATIVE_OR_AUTHORITY={},PATH_OR_AUTHORITY={},RELATIVE={},RELATIVE_SLASH={},SPECIAL_AUTHORITY_SLASHES={},SPECIAL_AUTHORITY_IGNORE_SLASHES={},AUTHORITY={},HOST={},HOSTNAME={},PORT={},FILE={},FILE_SLASH={},FILE_HOST={},PATH_START={},PATH={},CANNOT_BE_A_BASE_URL_PATH={},QUERY={},FRAGMENT={},URLState=function(t,e,r){var n,a,i,o=toString(t);if(e){if(a=this.parse(o))throw TypeError$1(a);this.searchParams=null}else{if(void 0!==r&&(n=new URLState(r,!0)),a=this.parse(o,null,n))throw TypeError$1(a);(i=getInternalSearchParamsState(new URLSearchParams$1)).bindURL(this),this.searchParams=i}};URLState.prototype={type:"URL",parse:function(t,e,r){var n,a,i,o,s=this,l=e||SCHEME_START,c=0,u="",h=!1,d=!1,f=!1;for(t=toString(t),e||(s.scheme="",s.username="",s.password="",s.host=null,s.port=null,s.path=[],s.query=null,s.fragment=null,s.cannotBeABaseURL=!1,t=replace(t,LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE,"")),t=replace(t,TAB_AND_NEW_LINE,""),n=arrayFrom(t);c<=n.length;){switch(a=n[c],l){case SCHEME_START:if(!a||!exec(ALPHA,a)){if(e)return INVALID_SCHEME;l=NO_SCHEME;continue}u+=toLowerCase(a),l=SCHEME;break;case SCHEME:if(a&&(exec(ALPHANUMERIC,a)||"+"==a||"-"==a||"."==a))u+=toLowerCase(a);else{if(":"!=a){if(e)return INVALID_SCHEME;u="",l=NO_SCHEME,c=0;continue}if(e&&(s.isSpecial()!=hasOwnProperty_1(specialSchemes,u)||"file"==u&&(s.includesCredentials()||null!==s.port)||"file"==s.scheme&&!s.host))return;if(s.scheme=u,e)return void(s.isSpecial()&&specialSchemes[s.scheme]==s.port&&(s.port=null));u="","file"==s.scheme?l=FILE:s.isSpecial()&&r&&r.scheme==s.scheme?l=SPECIAL_RELATIVE_OR_AUTHORITY:s.isSpecial()?l=SPECIAL_AUTHORITY_SLASHES:"/"==n[c+1]?(l=PATH_OR_AUTHORITY,c++):(s.cannotBeABaseURL=!0,push(s.path,""),l=CANNOT_BE_A_BASE_URL_PATH)}break;case NO_SCHEME:if(!r||r.cannotBeABaseURL&&"#"!=a)return INVALID_SCHEME;if(r.cannotBeABaseURL&&"#"==a){s.scheme=r.scheme,s.path=arraySliceSimple(r.path),s.query=r.query,s.fragment="",s.cannotBeABaseURL=!0,l=FRAGMENT;break}l="file"==r.scheme?FILE:RELATIVE;continue;case SPECIAL_RELATIVE_OR_AUTHORITY:if("/"!=a||"/"!=n[c+1]){l=RELATIVE;continue}l=SPECIAL_AUTHORITY_IGNORE_SLASHES,c++;break;case PATH_OR_AUTHORITY:if("/"==a){l=AUTHORITY;break}l=PATH;continue;case RELATIVE:if(s.scheme=r.scheme,a==EOF)s.username=r.username,s.password=r.password,s.host=r.host,s.port=r.port,s.path=arraySliceSimple(r.path),s.query=r.query;else if("/"==a||"\\"==a&&s.isSpecial())l=RELATIVE_SLASH;else if("?"==a)s.username=r.username,s.password=r.password,s.host=r.host,s.port=r.port,s.path=arraySliceSimple(r.path),s.query="",l=QUERY;else{if("#"!=a){s.username=r.username,s.password=r.password,s.host=r.host,s.port=r.port,s.path=arraySliceSimple(r.path),s.path.length--,l=PATH;continue}s.username=r.username,s.password=r.password,s.host=r.host,s.port=r.port,s.path=arraySliceSimple(r.path),s.query=r.query,s.fragment="",l=FRAGMENT}break;case RELATIVE_SLASH:if(!s.isSpecial()||"/"!=a&&"\\"!=a){if("/"!=a){s.username=r.username,s.password=r.password,s.host=r.host,s.port=r.port,l=PATH;continue}l=AUTHORITY}else l=SPECIAL_AUTHORITY_IGNORE_SLASHES;break;case SPECIAL_AUTHORITY_SLASHES:if(l=SPECIAL_AUTHORITY_IGNORE_SLASHES,"/"!=a||"/"!=charAt(u,c+1))continue;c++;break;case SPECIAL_AUTHORITY_IGNORE_SLASHES:if("/"!=a&&"\\"!=a){l=AUTHORITY;continue}break;case AUTHORITY:if("@"==a){h&&(u="%40"+u),h=!0,i=arrayFrom(u);for(var p=0;p<i.length;p++){var g=i[p];if(":"!=g||f){var m=percentEncode(g,userinfoPercentEncodeSet);f?s.password+=m:s.username+=m}else f=!0}u=""}else if(a==EOF||"/"==a||"?"==a||"#"==a||"\\"==a&&s.isSpecial()){if(h&&""==u)return INVALID_AUTHORITY;c-=arrayFrom(u).length+1,u="",l=HOST}else u+=a;break;case HOST:case HOSTNAME:if(e&&"file"==s.scheme){l=FILE_HOST;continue}if(":"!=a||d){if(a==EOF||"/"==a||"?"==a||"#"==a||"\\"==a&&s.isSpecial()){if(s.isSpecial()&&""==u)return INVALID_HOST;if(e&&""==u&&(s.includesCredentials()||null!==s.port))return;if(o=s.parseHost(u))return o;if(u="",l=PATH_START,e)return;continue}"["==a?d=!0:"]"==a&&(d=!1),u+=a}else{if(""==u)return INVALID_HOST;if(o=s.parseHost(u))return o;if(u="",l=PORT,e==HOSTNAME)return}break;case PORT:if(!exec(DIGIT,a)){if(a==EOF||"/"==a||"?"==a||"#"==a||"\\"==a&&s.isSpecial()||e){if(""!=u){var b=parseInt$1(u,10);if(b>65535)return INVALID_PORT;s.port=s.isSpecial()&&b===specialSchemes[s.scheme]?null:b,u=""}if(e)return;l=PATH_START;continue}return INVALID_PORT}u+=a;break;case FILE:if(s.scheme="file","/"==a||"\\"==a)l=FILE_SLASH;else{if(!r||"file"!=r.scheme){l=PATH;continue}if(a==EOF)s.host=r.host,s.path=arraySliceSimple(r.path),s.query=r.query;else if("?"==a)s.host=r.host,s.path=arraySliceSimple(r.path),s.query="",l=QUERY;else{if("#"!=a){startsWithWindowsDriveLetter(join(arraySliceSimple(n,c),""))||(s.host=r.host,s.path=arraySliceSimple(r.path),s.shortenPath()),l=PATH;continue}s.host=r.host,s.path=arraySliceSimple(r.path),s.query=r.query,s.fragment="",l=FRAGMENT}}break;case FILE_SLASH:if("/"==a||"\\"==a){l=FILE_HOST;break}r&&"file"==r.scheme&&!startsWithWindowsDriveLetter(join(arraySliceSimple(n,c),""))&&(isWindowsDriveLetter(r.path[0],!0)?push(s.path,r.path[0]):s.host=r.host),l=PATH;continue;case FILE_HOST:if(a==EOF||"/"==a||"\\"==a||"?"==a||"#"==a){if(!e&&isWindowsDriveLetter(u))l=PATH;else if(""==u){if(s.host="",e)return;l=PATH_START}else{if(o=s.parseHost(u))return o;if("localhost"==s.host&&(s.host=""),e)return;u="",l=PATH_START}continue}u+=a;break;case PATH_START:if(s.isSpecial()){if(l=PATH,"/"!=a&&"\\"!=a)continue}else if(e||"?"!=a)if(e||"#"!=a){if(a!=EOF&&(l=PATH,"/"!=a))continue}else s.fragment="",l=FRAGMENT;else s.query="",l=QUERY;break;case PATH:if(a==EOF||"/"==a||"\\"==a&&s.isSpecial()||!e&&("?"==a||"#"==a)){if(isDoubleDot(u)?(s.shortenPath(),"/"==a||"\\"==a&&s.isSpecial()||push(s.path,"")):isSingleDot(u)?"/"==a||"\\"==a&&s.isSpecial()||push(s.path,""):("file"==s.scheme&&!s.path.length&&isWindowsDriveLetter(u)&&(s.host&&(s.host=""),u=charAt(u,0)+":"),push(s.path,u)),u="","file"==s.scheme&&(a==EOF||"?"==a||"#"==a))for(;s.path.length>1&&""===s.path[0];)shift(s.path);"?"==a?(s.query="",l=QUERY):"#"==a&&(s.fragment="",l=FRAGMENT)}else u+=percentEncode(a,pathPercentEncodeSet);break;case CANNOT_BE_A_BASE_URL_PATH:"?"==a?(s.query="",l=QUERY):"#"==a?(s.fragment="",l=FRAGMENT):a!=EOF&&(s.path[0]+=percentEncode(a,C0ControlPercentEncodeSet));break;case QUERY:e||"#"!=a?a!=EOF&&("'"==a&&s.isSpecial()?s.query+="%27":s.query+="#"==a?"%23":percentEncode(a,C0ControlPercentEncodeSet)):(s.fragment="",l=FRAGMENT);break;case FRAGMENT:a!=EOF&&(s.fragment+=percentEncode(a,fragmentPercentEncodeSet))}c++}},parseHost:function(t){var e,r,n;if("["==charAt(t,0)){if("]"!=charAt(t,t.length-1))return INVALID_HOST;if(!(e=parseIPv6(stringSlice(t,1,-1))))return INVALID_HOST;this.host=e}else if(this.isSpecial()){if(t=stringPunycodeToAscii(t),exec(FORBIDDEN_HOST_CODE_POINT,t))return INVALID_HOST;if(null===(e=parseIPv4(t)))return INVALID_HOST;this.host=e}else{if(exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT,t))return INVALID_HOST;for(e="",r=arrayFrom(t),n=0;n<r.length;n++)e+=percentEncode(r[n],C0ControlPercentEncodeSet);this.host=e}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return hasOwnProperty_1(specialSchemes,this.scheme)},shortenPath:function(){var t=this.path,e=t.length;!e||"file"==this.scheme&&1==e&&isWindowsDriveLetter(t[0],!0)||t.length--},serialize:function(){var t=this,e=t.scheme,r=t.username,n=t.password,a=t.host,i=t.port,o=t.path,s=t.query,l=t.fragment,c=e+":";return null!==a?(c+="//",t.includesCredentials()&&(c+=r+(n?":"+n:"")+"@"),c+=serializeHost(a),null!==i&&(c+=":"+i)):"file"==e&&(c+="//"),c+=t.cannotBeABaseURL?o[0]:o.length?"/"+join(o,"/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},setHref:function(t){var e=this.parse(t);if(e)throw TypeError$1(e);this.searchParams.update()},getOrigin:function(){var t=this.scheme,e=this.port;if("blob"==t)try{return new URLConstructor(t.path[0]).origin}catch(t){return"null"}return"file"!=t&&this.isSpecial()?t+"://"+serializeHost(this.host)+(null!==e?":"+e:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(toString(t)+":",SCHEME_START)},getUsername:function(){return this.username},setUsername:function(t){var e=arrayFrom(toString(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<e.length;r++)this.username+=percentEncode(e[r],userinfoPercentEncodeSet)}},getPassword:function(){return this.password},setPassword:function(t){var e=arrayFrom(toString(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<e.length;r++)this.password+=percentEncode(e[r],userinfoPercentEncodeSet)}},getHost:function(){var t=this.host,e=this.port;return null===t?"":null===e?serializeHost(t):serializeHost(t)+":"+e},setHost:function(t){this.cannotBeABaseURL||this.parse(t,HOST)},getHostname:function(){var t=this.host;return null===t?"":serializeHost(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,HOSTNAME)},getPort:function(){var t=this.port;return null===t?"":toString(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""==(t=toString(t))?this.port=null:this.parse(t,PORT))},getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+join(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,PATH_START))},getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""==(t=toString(t))?this.query=null:("?"==charAt(t,0)&&(t=stringSlice(t,1)),this.query="",this.parse(t,QUERY)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){""!=(t=toString(t))?("#"==charAt(t,0)&&(t=stringSlice(t,1)),this.fragment="",this.parse(t,FRAGMENT)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var URLConstructor=function(t){var e=anInstance(this,URLPrototype),r=validateArgumentsLength(arguments.length,1)>1?arguments[1]:void 0,n=setInternalState(e,new URLState(t,!1,r));descriptors||(e.href=n.serialize(),e.origin=n.getOrigin(),e.protocol=n.getProtocol(),e.username=n.getUsername(),e.password=n.getPassword(),e.host=n.getHost(),e.hostname=n.getHostname(),e.port=n.getPort(),e.pathname=n.getPathname(),e.search=n.getSearch(),e.searchParams=n.getSearchParams(),e.hash=n.getHash())},URLPrototype=URLConstructor.prototype,accessorDescriptor=function(t,e){return{get:function(){return getInternalURLState(this)[t]()},set:e&&function(t){return getInternalURLState(this)[e](t)},configurable:!0,enumerable:!0}};if(descriptors&&defineProperties(URLPrototype,{href:accessorDescriptor("serialize","setHref"),origin:accessorDescriptor("getOrigin"),protocol:accessorDescriptor("getProtocol","setProtocol"),username:accessorDescriptor("getUsername","setUsername"),password:accessorDescriptor("getPassword","setPassword"),host:accessorDescriptor("getHost","setHost"),hostname:accessorDescriptor("getHostname","setHostname"),port:accessorDescriptor("getPort","setPort"),pathname:accessorDescriptor("getPathname","setPathname"),search:accessorDescriptor("getSearch","setSearch"),searchParams:accessorDescriptor("getSearchParams"),hash:accessorDescriptor("getHash","setHash")}),redefine(URLPrototype,"toJSON",(function(){return getInternalURLState(this).serialize()}),{enumerable:!0}),redefine(URLPrototype,"toString",(function(){return getInternalURLState(this).serialize()}),{enumerable:!0}),NativeURL){var nativeCreateObjectURL=NativeURL.createObjectURL,nativeRevokeObjectURL=NativeURL.revokeObjectURL;nativeCreateObjectURL&&redefine(URLConstructor,"createObjectURL",functionBindContext(nativeCreateObjectURL,NativeURL)),nativeRevokeObjectURL&&redefine(URLConstructor,"revokeObjectURL",functionBindContext(nativeRevokeObjectURL,NativeURL))}setToStringTag(URLConstructor,"URL"),_export({global:!0,forced:!nativeUrl,sham:!descriptors},{URL:URLConstructor}),_export({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return functionCall(URL.prototype.toString,this)}});
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var eventHandler=createCommonjsModule((function(t,e){t.exports=function(){const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,r=/\..*/,n=/::\d+$/,a={};let i=1;const o={mouseenter:"mouseover",mouseleave:"mouseout"},s=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(t,e){return e&&`${e}::${i++}`||t.uidEvent||i++}function u(t){const e=c(t);return t.uidEvent=e,a[e]=a[e]||{},a[e]}function h(t,e){return function r(n){return n.delegateTarget=t,r.oneOff&&v.off(t,n.type,e),e.apply(t,[n])}}function d(t,e,r){return function n(a){const i=t.querySelectorAll(e);for(let{target:o}=a;o&&o!==this;o=o.parentNode)for(let s=i.length;s--;)if(i[s]===o)return a.delegateTarget=o,n.oneOff&&v.off(t,a.type,e,r),r.apply(o,[a]);return null}}function f(t,e,r=null){const n=Object.keys(t);for(let a=0,i=n.length;a<i;a++){const i=t[n[a]];if(i.originalHandler===e&&i.delegationSelector===r)return i}return null}function p(t,e,r){const n="string"==typeof e,a=n?r:e;let i=y(t);return l.has(i)||(i=t),[n,a,i]}function g(t,r,n,a,i){if("string"!=typeof r||!t)return;if(n||(n=a,a=null),s.test(r)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};a?a=t(a):n=t(n)}const[o,l,g]=p(r,n,a),m=u(t),b=m[g]||(m[g]={}),y=f(b,l,o?n:null);if(y)return void(y.oneOff=y.oneOff&&i);const v=c(l,r.replace(e,"")),$=o?d(t,n,a):h(t,n);$.delegationSelector=o?n:null,$.originalHandler=l,$.oneOff=i,$.uidEvent=v,b[v]=$,t.addEventListener(g,$,o)}function m(t,e,r,n,a){const i=f(e[r],n,a);i&&(t.removeEventListener(r,i,Boolean(a)),delete e[r][i.uidEvent])}function b(t,e,r,n){const a=e[r]||{};Object.keys(a).forEach((i=>{if(i.includes(n)){const n=a[i];m(t,e,r,n.originalHandler,n.delegationSelector)}}))}function y(t){return t=t.replace(r,""),o[t]||t}const v={on(t,e,r,n){g(t,e,r,n,!1)},one(t,e,r,n){g(t,e,r,n,!0)},off(t,e,r,a){if("string"!=typeof e||!t)return;const[i,o,s]=p(e,r,a),l=s!==e,c=u(t),h=e.startsWith(".");if(void 0!==o){if(!c||!c[s])return;return void m(t,c,s,o,i?r:null)}h&&Object.keys(c).forEach((r=>{b(t,c,r,e.slice(1))}));const d=c[s]||{};Object.keys(d).forEach((r=>{const a=r.replace(n,"");if(!l||e.includes(a)){const e=d[r];m(t,c,s,e.originalHandler,e.delegationSelector)}}))},trigger(e,r,n){if("string"!=typeof r||!e)return null;const a=t(),i=y(r),o=r!==i,s=l.has(i);let c,u=!0,h=!0,d=!1,f=null;return o&&a&&(c=a.Event(r,n),a(e).trigger(c),u=!c.isPropagationStopped(),h=!c.isImmediatePropagationStopped(),d=c.isDefaultPrevented()),s?(f=document.createEvent("HTMLEvents"),f.initEvent(i,u,!0)):f=new CustomEvent(r,{bubbles:u,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(f,t,{get:()=>n[t]})})),d&&f.preventDefault(),h&&e.dispatchEvent(f),f.defaultPrevented&&void 0!==c&&c.preventDefault(),f}};return v}()})),data=createCommonjsModule((function(t,e){t.exports=function(){const t=new Map,e={set(e,r,n){t.has(e)||t.set(e,new Map);const a=t.get(e);a.has(r)||0===a.size?a.set(r,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`)},get:(e,r)=>t.has(e)&&t.get(e).get(r)||null,remove(e,r){if(!t.has(e))return;const n=t.get(e);n.delete(r),0===n.size&&t.delete(e)}};return e}()})),baseComponent=createCommonjsModule((function(t,e){t.exports=function(t,e){const r=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},n=r(t),a=r(e),i=1e3,o="transitionend",s=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),a=Number.parseFloat(r);return n||a?(e=e.split(",")[0],r=r.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(r))*i):0},l=t=>{t.dispatchEvent(new Event(o))},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),u=t=>c(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,h=t=>{"function"==typeof t&&t()},d=(t,e,r=!0)=>{if(!r)return void h(t);const n=5,a=s(e)+n;let i=!1;const c=({target:r})=>{r===e&&(i=!0,e.removeEventListener(o,c),h(t))};e.addEventListener(o,c),setTimeout((()=>{i||l(e)}),a)},f="5.1.3";class p{constructor(t){(t=u(t))&&(this._element=t,n.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.default.remove(this._element,this.constructor.DATA_KEY),a.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,r=!0){d(t,e,r)}static getInstance(t){return n.default.get(u(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return f}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return p}(data,eventHandler)}));
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap button.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
createCommonjsModule((function(t,e){t.exports=function(t,e){const r=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},n=r(t),a=r(e),i=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},o=[],s=t=>{"loading"===document.readyState?(o.length||document.addEventListener("DOMContentLoaded",(()=>{o.forEach((t=>t()))})),o.push(t)):t()},l=t=>{s((()=>{const e=i();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}}))},c="button",u="active",h='[data-bs-toggle="button"]',d="click.bs.button.data-api";class f extends a.default{static get NAME(){return c}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(u))}static jQueryInterface(t){return this.each((function(){const e=f.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}return n.default.on(document,d,h,(t=>{t.preventDefault();const e=t.target.closest(h);f.getOrCreateInstance(e).toggle()})),l(f),f}(eventHandler,baseComponent)}));
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var manipulator=createCommonjsModule((function(t,e){t.exports=function(){function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const r={setDataAttribute(t,r,n){t.setAttribute(`data-bs-${e(r)}`,n)},removeDataAttribute(t,r){t.removeAttribute(`data-bs-${e(r)}`)},getDataAttributes(e){if(!e)return{};const r={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let a=n.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1,a.length),r[a]=t(e.dataset[n])})),r},getDataAttribute:(r,n)=>t(r.getAttribute(`data-bs-${e(n)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})};return r}()})),selectorEngine=createCommonjsModule((function(t,e){t.exports=function(){const t=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),e=e=>!(!t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),r=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),n=3,a={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const r=[];let a=t.parentNode;for(;a&&a.nodeType===Node.ELEMENT_NODE&&a.nodeType!==n;)a.matches(e)&&r.push(a),a=a.parentNode;return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(n,t).filter((t=>!r(t)&&e(t)))}};return a}()}));
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
createCommonjsModule((function(t,e){t.exports=function(t,e,r,n,a){const i=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},o=i(t),s=i(e),l=i(r),c=i(n),u=i(a),h=t=>null==t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),d=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e},f=t=>{const e=d(t);return e&&document.querySelector(e)?e:null},p=t=>{const e=d(t);return e?document.querySelector(e):null},g=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),m=t=>g(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,b=(t,e,r)=>{Object.keys(r).forEach((n=>{const a=r[n],i=e[n],o=i&&g(i)?"element":h(i);if(!new RegExp(a).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${a}".`)}))},y=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},$=[],_=t=>{"loading"===document.readyState?($.length||document.addEventListener("DOMContentLoaded",(()=>{$.forEach((t=>t()))})),$.push(t)):t()},S=t=>{_((()=>{const e=v();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}}))},E="collapse",T="bs.collapse",w=`.${T}`,A={toggle:!0,parent:null},x={toggle:"boolean",parent:"(null|element)"},R=`show${w}`,C=`shown${w}`,O=`hide${w}`,P=`hidden${w}`,I=`click${w}.data-api`,k="show",N="collapse",M="collapsing",D="collapsed",L=`:scope .${N} .${N}`,U="collapse-horizontal",F="width",j="height",H=".collapse.show, .collapse.collapsing",B='[data-bs-toggle="collapse"]';class q extends u.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const r=c.default.find(B);for(let t=0,e=r.length;t<e;t++){const e=r[t],n=f(e),a=c.default.find(n).filter((t=>t===this._element));null!==n&&a.length&&(this._selector=n,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return A}static get NAME(){return E}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(L,this._config.parent);e=c.default.find(H,this._config.parent).filter((e=>!t.includes(e)))}const r=c.default.findOne(this._selector);if(e.length){const n=e.find((t=>r!==t));if(t=n?q.getInstance(n):null,t&&t._isTransitioning)return}if(s.default.trigger(this._element,R).defaultPrevented)return;e.forEach((e=>{r!==e&&q.getOrCreateInstance(e,{toggle:!1}).hide(),t||o.default.set(e,T,null)}));const n=this._getDimension();this._element.classList.remove(N),this._element.classList.add(M),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(M),this._element.classList.add(N,k),this._element.style[n]="",s.default.trigger(this._element,C)},i=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(a,this._element,!0),this._element.style[n]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(s.default.trigger(this._element,O).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,y(this._element),this._element.classList.add(M),this._element.classList.remove(N,k);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],r=p(e);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(M),this._element.classList.add(N),s.default.trigger(this._element,P)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(k)}_getConfig(t){return(t={...A,...l.default.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=m(t.parent),b(E,t,x),t}_getDimension(){return this._element.classList.contains(U)?F:j}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(L,this._config.parent);c.default.find(B,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=p(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(D):t.classList.add(D),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const r=q.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}}))}}return s.default.on(document,I,B,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=f(this);c.default.find(e).forEach((t=>{q.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),S(q),q}(data,eventHandler,manipulator,selectorEngine,baseComponent)}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol(),n$3=new Map;class s$3{constructor(t,e){if(this._$cssResult$=!0,e!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n$3.get(this.cssText);return t$1&&void 0===t&&(n$3.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$2),r$2=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new s$3(r,e$2)},i$1=(t,e)=>{t$1?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return o$3(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s$2;const e$1=window.trustedTypes,r$1=e$1?e$1.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,e){switch(e){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},n$2=(t,e)=>e!==t&&(e==e||t==t),l$3={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=l$3){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(S$1(t))}else void 0!==t&&e.push(S$1(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=l$3){var n,a;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const o=(null!==(a=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==a?a:o$2.toAttribute)(e,r.type);this._$Ei=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Ei=null}}_$AK(t,e){var r,n,a;const i=this.constructor,o=i._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=i.getPropertyOptions(o),s=t.converter,l=null!==(a=null!==(n=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==a?a:o$2.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.1");const i=globalThis.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e,n$1=`<${o$1}>`,l$2=document,h=(t="")=>l$2.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_$n=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),$=p(1),y$1=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x$1=(t,e,r)=>{var n,a;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let o=i._$litPart$;if(void 0===o){const t=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;i._$litPart$=o=new N(e.insertBefore(h(),t),t,void 0,null!=r?r:{})}return o._$AI(t),o},A=l$2.createTreeWalker(l$2,129,null,!1),C=(t,r)=>{const n=t.length-1,i=[];let o,s=2===r?"<svg>":"",l=c;for(let r=0;r<n;r++){const n=t[r];let u,h,d=-1,p=0;for(;p<n.length&&(l.lastIndex=p,h=l.exec(n),null!==h);)p=l.lastIndex,l===c?"!--"===h[1]?l=v:void 0!==h[1]?l=a:void 0!==h[2]?(g.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=f):void 0!==h[3]&&(l=f):l===f?">"===h[0]?(l=null!=o?o:c,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=void 0===h[3]?f:'"'===h[3]?m:_$n):l===m||l===_$n?l=f:l===v||l===a?l=c:(l=f,o=void 0);const b=l===f&&t[r+1].startsWith("/>")?" ":"";s+=l===c?n+n$1:d>=0?(i.push(u),n.slice(0,d)+"$lit$"+n.slice(d)+e+b):n+e+(-2===d?(i.push(void 0),r):b)}const u=s+(t[n]||"<?>")+(2===r?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s$1?s$1.createHTML(u):u,i]};class E{constructor({strings:t,_$litType$:r},n){let a;this.parts=[];let o=0,s=0;const l=t.length-1,c=this.parts,[u,d]=C(t,r);if(this.el=E.createElement(u,n),A.currentNode=this.el.content,2===r){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(a=A.nextNode())&&c.length<l;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const r of a.getAttributeNames())if(r.endsWith("$lit$")||r.startsWith(e)){const n=d[s++];if(t.push(r),void 0!==n){const t=a.getAttribute(n.toLowerCase()+"$lit$").split(e),r=/([.?@])?(.*)/.exec(n);c.push({type:1,index:o,name:r[2],strings:t,ctor:"."===r[1]?M:"?"===r[1]?H:"@"===r[1]?I:S})}else c.push({type:6,index:o})}for(const e of t)a.removeAttribute(e)}if(g.test(a.tagName)){const t=a.textContent.split(e),r=t.length-1;if(r>0){a.textContent=i?i.emptyScript:"";for(let e=0;e<r;e++)a.append(t[e],h()),A.nextNode(),c.push({type:2,index:++o});a.append(t[r],h())}}}else if(8===a.nodeType)if(a.data===o$1)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=a.data.indexOf(e,t+1));)c.push({type:7,index:o}),t+=e.length-1}o++}}static createElement(t,e){const r=l$2.createElement("template");return r.innerHTML=t,r}}function P(t,e,n=t,a){var i,o,s,l;if(e===b)return e;let c=void 0!==a?null===(i=n._$Cl)||void 0===i?void 0:i[a]:n._$Cu;const u=r(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==u&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===u?c=void 0:(c=new u(t),c._$AT(t,n,a)),void 0!==a?(null!==(s=(l=n)._$Cl)&&void 0!==s?s:l._$Cl=[])[a]=c:n._$Cu=c),void 0!==c&&(e=P(t,c._$AS(t,e.values),c,a)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l$2).importNode(r,!0);A.currentNode=a;let i=A.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new N(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new L(i,this,t)),this.v.push(e),l=n[++s]}o!==(null==l?void 0:l.index)&&(i=A.nextNode(),o++)}return a}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,n){var a;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$2.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,a="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=E.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(r);else{const t=new V(a,this),e=t.p(this.options);t.m(r),this.k(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new E(t)),e}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const a of t)n===e.length?e.push(r=new N(this.A(h()),this.A(h()),this,this.options)):r=e[n],r._$AI(a),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class S{constructor(t,e,r,n,a){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,a){const i=this.strings;let o=!1;if(void 0===i)t=P(this,t,e,0),o=!r(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const a=t;let s,l;for(t=i[0],s=0;s<i.length-1;s++)l=P(this,a[n+s],e,s),l===b&&(l=this._$AH[s]),o||(o=!r(l)||l!==this._$AH[s]),l===w?t=w:t!==w&&(t+=(null!=l?l:"")+i[s+1]),this._$AH[s]=l}o&&!a&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends S{constructor(t,e,r,n,a){super(t,e,r,n,a),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=P(this,t,e,0))&&void 0!==r?r:w)===b)return;const n=this._$AH,a=t===w&&n!==w||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==w&&(n===w||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const z=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1,o;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.1");class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x$1(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;function ascending$2(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function bisector(t){let e=t,r=t,n=t;function a(t,e,a=0,i=t.length){if(a<i){if(0!==r(e,e))return i;do{const r=a+i>>>1;n(t[r],e)<0?a=r+1:i=r}while(a<i)}return a}return 2!==t.length&&(e=(e,r)=>t(e)-r,r=ascending$2,n=(e,r)=>ascending$2(t(e),r)),{left:a,center:function(t,r,n=0,i=t.length){const o=a(t,r,n,i-1);return o>n&&e(t[o-1],r)>-e(t[o],r)?o-1:o},right:function(t,e,a=0,i=t.length){if(a<i){if(0!==r(e,e))return i;do{const r=a+i>>>1;n(t[r],e)<=0?a=r+1:i=r}while(a<i)}return a}}}function number$2(t){return null===t?NaN:+t}null==n||n({LitElement:s}),(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");const ascendingBisect=bisector(ascending$2),bisectRight=ascendingBisect.right;bisector(number$2).center;var bisect=bisectRight;function count(t,e){let r=0;if(void 0===e)for(let e of t)null!=e&&(e=+e)>=e&&++r;else{let n=-1;for(let a of t)null!=(a=e(a,++n,t))&&(a=+a)>=a&&++r}return r}function extent(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let a=-1;for(let i of t)null!=(i=e(i,++a,t))&&(void 0===r?i>=i&&(r=n=i):(r>i&&(r=i),n<i&&(n=i)))}return[r,n]}class Adder{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let n=0;n<this._n&&n<32;n++){const a=e[n],i=t+a,o=Math.abs(t)<Math.abs(a)?t-(i-a):a-(i-t);o&&(e[r++]=o),t=i}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e,r,n,a=this._n,i=0;if(a>0){for(i=t[--a];a>0&&(e=i,r=t[--a],i=e+r,n=r-(i-e),!n););a>0&&(n<0&&t[a-1]<0||n>0&&t[a-1]>0)&&(r=2*n,e=i+r,r==e-i&&(i=e))}return i}}function identity$6(t){return t}var array$3=Array.prototype,slice$1=array$3.slice;function constant$5(t){return()=>t}var e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function ticks(t,e,r){var n,a,i,o,s=-1;if(r=+r,(t=+t)===(e=+e)&&r>0)return[t];if((n=e<t)&&(a=t,t=e,e=a),0===(o=tickIncrement(t,e,r))||!isFinite(o))return[];if(o>0){let r=Math.round(t/o),n=Math.round(e/o);for(r*o<t&&++r,n*o>e&&--n,i=new Array(a=n-r+1);++s<a;)i[s]=(r+s)*o}else{o=-o;let r=Math.round(t*o),n=Math.round(e*o);for(r/o<t&&++r,n/o>e&&--n,i=new Array(a=n-r+1);++s<a;)i[s]=(r+s)/o}return n&&i.reverse(),i}function tickIncrement(t,e,r){var n=(e-t)/Math.max(0,r),a=Math.floor(Math.log(n)/Math.LN10),i=n/Math.pow(10,a);return a>=0?(i>=e10?10:i>=e5?5:i>=e2?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(i>=e10?10:i>=e5?5:i>=e2?2:1)}function tickStep(t,e,r){var n=Math.abs(e-t)/Math.max(0,r),a=Math.pow(10,Math.floor(Math.log(n)/Math.LN10)),i=n/a;return i>=e10?a*=10:i>=e5?a*=5:i>=e2&&(a*=2),e<t?-a:a}function nice(t,e,r){let n;for(;;){const a=tickIncrement(t,e,r);if(a===n||0===a||!isFinite(a))return[t,e];a>0?(t=Math.floor(t/a)*a,e=Math.ceil(e/a)*a):a<0&&(t=Math.ceil(t*a)/a,e=Math.floor(e*a)/a),n=a}}function thresholdSturges(t){return Math.ceil(Math.log(count(t))/Math.LN2)+1}function bin(){var t=identity$6,e=extent,r=thresholdSturges;function n(n){Array.isArray(n)||(n=Array.from(n));var a,i,o=n.length,s=new Array(o);for(a=0;a<o;++a)s[a]=t(n[a],a,n);var l=e(s),c=l[0],u=l[1],h=r(s,c,u);if(!Array.isArray(h)){const t=u,r=+h;if(e===extent&&([c,u]=nice(c,u,r)),(h=ticks(c,u,r))[h.length-1]>=u)if(t>=u&&e===extent){const t=tickIncrement(c,u,r);isFinite(t)&&(t>0?u=(Math.floor(u/t)+1)*t:t<0&&(u=(Math.ceil(u*-t)+1)/-t))}else h.pop()}for(var d=h.length;h[0]<=c;)h.shift(),--d;for(;h[d-1]>u;)h.pop(),--d;var f,p=new Array(d+1);for(a=0;a<=d;++a)(f=p[a]=[]).x0=a>0?h[a-1]:c,f.x1=a<d?h[a]:u;for(a=0;a<o;++a)null!=(i=s[a])&&c<=i&&i<=u&&p[bisect(h,i,0,d)].push(n[a]);return p}return n.value=function(e){return arguments.length?(t="function"==typeof e?e:constant$5(e),n):t},n.domain=function(t){return arguments.length?(e="function"==typeof t?t:constant$5([t[0],t[1]]),n):e},n.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?constant$5(slice$1.call(t)):constant$5(t),n):r},n}function*flatten(t){for(const e of t)yield*e}function merge(t){return Array.from(flatten(t))}function range(t,e,r){t=+t,e=+e,r=(a=arguments.length)<2?(e=t,t=0,1):a<3?1:+r;for(var n=-1,a=0|Math.max(0,Math.ceil((e-t)/r)),i=new Array(a);++n<a;)i[n]=t+n*r;return i}function identity$5(t){return t}var top=1,right=2,bottom=3,left=4,epsilon$2=1e-6;function translateX(t){return"translate("+t+",0)"}function translateY(t){return"translate(0,"+t+")"}function number$1(t){return e=>+t(e)}function center(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function entering(){return!this.__axis}function axis(t,e){var r=[],n=null,a=null,i=6,o=6,s=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=t===top||t===left?-1:1,u=t===left||t===right?"x":"y",h=t===top||t===bottom?translateX:translateY;function d(d){var f=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,p=null==a?e.tickFormat?e.tickFormat.apply(e,r):identity$5:a,g=Math.max(i,0)+s,m=e.range(),b=+m[0]+l,y=+m[m.length-1]+l,v=(e.bandwidth?center:number$1)(e.copy(),l),$=d.selection?d.selection():d,_=$.selectAll(".domain").data([null]),S=$.selectAll(".tick").data(f,e).order(),E=S.exit(),T=S.enter().append("g").attr("class","tick"),w=S.select("line"),A=S.select("text");_=_.merge(_.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(T),w=w.merge(T.append("line").attr("stroke","currentColor").attr(u+"2",c*i)),A=A.merge(T.append("text").attr("fill","currentColor").attr(u,c*g).attr("dy",t===top?"0em":t===bottom?"0.71em":"0.32em")),d!==$&&(_=_.transition(d),S=S.transition(d),w=w.transition(d),A=A.transition(d),E=E.transition(d).attr("opacity",epsilon$2).attr("transform",(function(t){return isFinite(t=v(t))?h(t+l):this.getAttribute("transform")})),T.attr("opacity",epsilon$2).attr("transform",(function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:v(t))+l)}))),E.remove(),_.attr("d",t===left||t===right?o?"M"+c*o+","+b+"H"+l+"V"+y+"H"+c*o:"M"+l+","+b+"V"+y:o?"M"+b+","+c*o+"V"+l+"H"+y+"V"+c*o:"M"+b+","+l+"H"+y),S.attr("opacity",1).attr("transform",(function(t){return h(v(t)+l)})),w.attr(u+"2",c*i),A.attr(u,c*g).text(p),$.filter(entering).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===right?"start":t===left?"end":"middle"),$.each((function(){this.__axis=v}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return r=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),d):r.slice()},d.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),d):n&&n.slice()},d.tickFormat=function(t){return arguments.length?(a=t,d):a},d.tickSize=function(t){return arguments.length?(i=o=+t,d):i},d.tickSizeInner=function(t){return arguments.length?(i=+t,d):i},d.tickSizeOuter=function(t){return arguments.length?(o=+t,d):o},d.tickPadding=function(t){return arguments.length?(s=+t,d):s},d.offset=function(t){return arguments.length?(l=+t,d):l},d}function axisRight(t){return axis(right,t)}function axisBottom(t){return axis(bottom,t)}function axisLeft(t){return axis(left,t)}var noop$2={value:()=>{}};function dispatch(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Dispatch(n)}function Dispatch(t){this._=t}function parseTypenames$1(t,e){return t.trim().split(/^|\s+/).map((function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function get$1(t,e){for(var r,n=0,a=t.length;n<a;++n)if((r=t[n]).name===e)return r.value}function set$1(t,e,r){for(var n=0,a=t.length;n<a;++n)if(t[n].name===e){t[n]=noop$2,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function(t,e){var r,n=this._,a=parseTypenames$1(t+"",n),i=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++i<o;)if(r=(t=a[i]).type)n[r]=set$1(n[r],t.name,e);else if(null==e)for(r in n)n[r]=set$1(n[r],t.name,null);return this}for(;++i<o;)if((r=(t=a[i]).type)&&(r=get$1(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Dispatch(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,a=new Array(r),i=0;i<r;++i)a[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,r=(n=this._[t]).length;i<r;++i)n[i].value.apply(e,a)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],a=0,i=n.length;a<i;++a)n[a].value.apply(e,r)}};var xhtml="http://www.w3.org/1999/xhtml",namespaces={svg:"http://www.w3.org/2000/svg",xhtml:xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),namespaces.hasOwnProperty(e)?{space:namespaces[e],local:t}:t}function creatorInherit(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===xhtml&&e.documentElement.namespaceURI===xhtml?e.createElement(t):e.createElementNS(r,t)}}function creatorFixed(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function creator(t){var e=namespace(t);return(e.local?creatorFixed:creatorInherit)(e)}function none(){}function selector(t){return null==t?none:function(){return this.querySelector(t)}}function selection_select(t){"function"!=typeof t&&(t=selector(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o,s=e[a],l=s.length,c=n[a]=new Array(l),u=0;u<l;++u)(i=s[u])&&(o=t.call(i,i.__data__,u,s))&&("__data__"in i&&(o.__data__=i.__data__),c[u]=o);return new Selection$1(n,this._parents)}function array$2(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function empty(){return[]}function selectorAll(t){return null==t?empty:function(){return this.querySelectorAll(t)}}function arrayAll(t){return function(){return array$2(t.apply(this,arguments))}}function selection_selectAll(t){t="function"==typeof t?arrayAll(t):selectorAll(t);for(var e=this._groups,r=e.length,n=[],a=[],i=0;i<r;++i)for(var o,s=e[i],l=s.length,c=0;c<l;++c)(o=s[c])&&(n.push(t.call(o,o.__data__,c,s)),a.push(o));return new Selection$1(n,a)}function matcher(t){return function(){return this.matches(t)}}function childMatcher(t){return function(e){return e.matches(t)}}var find=Array.prototype.find;function childFind(t){return function(){return find.call(this.children,t)}}function childFirst(){return this.firstElementChild}function selection_selectChild(t){return this.select(null==t?childFirst:childFind("function"==typeof t?t:childMatcher(t)))}var filter=Array.prototype.filter;function children(){return Array.from(this.children)}function childrenFilter(t){return function(){return filter.call(this.children,t)}}function selection_selectChildren(t){return this.selectAll(null==t?children:childrenFilter("function"==typeof t?t:childMatcher(t)))}function selection_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o=e[a],s=o.length,l=n[a]=[],c=0;c<s;++c)(i=o[c])&&t.call(i,i.__data__,c,o)&&l.push(i);return new Selection$1(n,this._parents)}function sparse(t){return new Array(t.length)}function selection_enter(){return new Selection$1(this._enter||this._groups.map(sparse),this._parents)}function EnterNode(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function constant$4(t){return function(){return t}}function bindIndex(t,e,r,n,a,i){for(var o,s=0,l=e.length,c=i.length;s<c;++s)(o=e[s])?(o.__data__=i[s],n[s]=o):r[s]=new EnterNode(t,i[s]);for(;s<l;++s)(o=e[s])&&(a[s]=o)}function bindKey(t,e,r,n,a,i,o){var s,l,c,u=new Map,h=e.length,d=i.length,f=new Array(h);for(s=0;s<h;++s)(l=e[s])&&(f[s]=c=o.call(l,l.__data__,s,e)+"",u.has(c)?a[s]=l:u.set(c,l));for(s=0;s<d;++s)c=o.call(t,i[s],s,i)+"",(l=u.get(c))?(n[s]=l,l.__data__=i[s],u.delete(c)):r[s]=new EnterNode(t,i[s]);for(s=0;s<h;++s)(l=e[s])&&u.get(f[s])===l&&(a[s]=l)}function datum(t){return t.__data__}function selection_data(t,e){if(!arguments.length)return Array.from(this,datum);var r=e?bindKey:bindIndex,n=this._parents,a=this._groups;"function"!=typeof t&&(t=constant$4(t));for(var i=a.length,o=new Array(i),s=new Array(i),l=new Array(i),c=0;c<i;++c){var u=n[c],h=a[c],d=h.length,f=arraylike(t.call(u,u&&u.__data__,c,n)),p=f.length,g=s[c]=new Array(p),m=o[c]=new Array(p),b=l[c]=new Array(d);r(u,h,g,m,b,f,e);for(var y,v,$=0,_=0;$<p;++$)if(y=g[$]){for($>=_&&(_=$+1);!(v=m[_])&&++_<p;);y._next=v||null}}return(o=new Selection$1(o,n))._enter=s,o._exit=l,o}function arraylike(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function selection_exit(){return new Selection$1(this._exit||this._groups.map(sparse),this._parents)}function selection_join(t,e,r){var n=this.enter(),a=this,i=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(a=e(a))&&(a=a.selection()),null==r?i.remove():r(i),n&&a?n.merge(a).order():a}function selection_merge(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,a=r.length,i=n.length,o=Math.min(a,i),s=new Array(a),l=0;l<o;++l)for(var c,u=r[l],h=n[l],d=u.length,f=s[l]=new Array(d),p=0;p<d;++p)(c=u[p]||h[p])&&(f[p]=c);for(;l<a;++l)s[l]=r[l];return new Selection$1(s,this._parents)}function selection_order(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,a=t[e],i=a.length-1,o=a[i];--i>=0;)(n=a[i])&&(o&&4^n.compareDocumentPosition(o)&&o.parentNode.insertBefore(n,o),o=n);return this}function selection_sort(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ascending$1);for(var r=this._groups,n=r.length,a=new Array(n),i=0;i<n;++i){for(var o,s=r[i],l=s.length,c=a[i]=new Array(l),u=0;u<l;++u)(o=s[u])&&(c[u]=o);c.sort(e)}return new Selection$1(a,this._parents).order()}function ascending$1(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function selection_call(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function selection_nodes(){return Array.from(this)}function selection_node(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],a=0,i=n.length;a<i;++a){var o=n[a];if(o)return o}return null}function selection_size(){let t=0;for(const e of this)++t;return t}function selection_empty(){return!this.node()}function selection_each(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var a,i=e[r],o=0,s=i.length;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this}function attrRemove$1(t){return function(){this.removeAttribute(t)}}function attrRemoveNS$1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant$1(t,e){return function(){this.setAttribute(t,e)}}function attrConstantNS$1(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function attrFunction$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function attrFunctionNS$1(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function selection_attr(t,e){var r=namespace(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?attrRemoveNS$1:attrRemove$1:"function"==typeof e?r.local?attrFunctionNS$1:attrFunction$1:r.local?attrConstantNS$1:attrConstant$1)(r,e))}function defaultView(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function styleRemove$1(t){return function(){this.style.removeProperty(t)}}function styleConstant$1(t,e,r){return function(){this.style.setProperty(t,e,r)}}function styleFunction$1(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function selection_style(t,e,r){return arguments.length>1?this.each((null==e?styleRemove$1:"function"==typeof e?styleFunction$1:styleConstant$1)(t,e,null==r?"":r)):styleValue(this.node(),t)}function styleValue(t,e){return t.style.getPropertyValue(e)||defaultView(t).getComputedStyle(t,null).getPropertyValue(e)}function propertyRemove(t){return function(){delete this[t]}}function propertyConstant(t,e){return function(){this[t]=e}}function propertyFunction(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function selection_property(t,e){return arguments.length>1?this.each((null==e?propertyRemove:"function"==typeof e?propertyFunction:propertyConstant)(t,e)):this.node()[t]}function classArray(t){return t.trim().split(/^|\s+/)}function classList(t){return t.classList||new ClassList(t)}function ClassList(t){this._node=t,this._names=classArray(t.getAttribute("class")||"")}function classedAdd(t,e){for(var r=classList(t),n=-1,a=e.length;++n<a;)r.add(e[n])}function classedRemove(t,e){for(var r=classList(t),n=-1,a=e.length;++n<a;)r.remove(e[n])}function classedTrue(t){return function(){classedAdd(this,t)}}function classedFalse(t){return function(){classedRemove(this,t)}}function classedFunction(t,e){return function(){(e.apply(this,arguments)?classedAdd:classedRemove)(this,t)}}function selection_classed(t,e){var r=classArray(t+"");if(arguments.length<2){for(var n=classList(this.node()),a=-1,i=r.length;++a<i;)if(!n.contains(r[a]))return!1;return!0}return this.each(("function"==typeof e?classedFunction:e?classedTrue:classedFalse)(r,e))}function textRemove(){this.textContent=""}function textConstant$1(t){return function(){this.textContent=t}}function textFunction$1(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function selection_text(t){return arguments.length?this.each(null==t?textRemove:("function"==typeof t?textFunction$1:textConstant$1)(t)):this.node().textContent}function htmlRemove(){this.innerHTML=""}function htmlConstant(t){return function(){this.innerHTML=t}}function htmlFunction(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function selection_html(t){return arguments.length?this.each(null==t?htmlRemove:("function"==typeof t?htmlFunction:htmlConstant)(t)):this.node().innerHTML}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function selection_raise(){return this.each(raise)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function selection_lower(){return this.each(lower)}function selection_append(t){var e="function"==typeof t?t:creator(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}function constantNull(){return null}function selection_insert(t,e){var r="function"==typeof t?t:creator(t),n=null==e?constantNull:"function"==typeof e?e:selector(e);return this.select((function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)}))}function remove(){var t=this.parentNode;t&&t.removeChild(this)}function selection_remove(){return this.each(remove)}function selection_cloneShallow(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_cloneDeep(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function selection_clone(t){return this.select(t?selection_cloneDeep:selection_cloneShallow)}function selection_datum(t){return arguments.length?this.property("__data__",t):this.node().__data__}function contextListener(t){return function(e){t.call(this,e,this.__data__)}}function parseTypenames(t){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}}))}function onRemove(t){return function(){var e=this.__on;if(e){for(var r,n=0,a=-1,i=e.length;n<i;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++a]=r:this.removeEventListener(r.type,r.listener,r.options);++a?e.length=a:delete this.__on}}}function onAdd(t,e,r){return function(){var n,a=this.__on,i=contextListener(e);if(a)for(var o=0,s=a.length;o<s;++o)if((n=a[o]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=i,n.options=r),void(n.value=e);this.addEventListener(t.type,i,r),n={type:t.type,name:t.name,value:e,listener:i,options:r},a?a.push(n):this.__on=[n]}}function selection_on(t,e,r){var n,a,i=parseTypenames(t+""),o=i.length;if(!(arguments.length<2)){for(s=e?onAdd:onRemove,n=0;n<o;++n)this.each(s(i[n],e,r));return this}var s=this.node().__on;if(s)for(var l,c=0,u=s.length;c<u;++c)for(n=0,l=s[c];n<o;++n)if((a=i[n]).type===l.type&&a.name===l.name)return l.value}function dispatchEvent(t,e,r){var n=defaultView(t),a=n.CustomEvent;"function"==typeof a?a=new a(e,r):(a=n.document.createEvent("Event"),r?(a.initEvent(e,r.bubbles,r.cancelable),a.detail=r.detail):a.initEvent(e,!1,!1)),t.dispatchEvent(a)}function dispatchConstant(t,e){return function(){return dispatchEvent(this,t,e)}}function dispatchFunction(t,e){return function(){return dispatchEvent(this,t,e.apply(this,arguments))}}function selection_dispatch(t,e){return this.each(("function"==typeof e?dispatchFunction:dispatchConstant)(t,e))}function*selection_iterator(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,a=t[e],i=0,o=a.length;i<o;++i)(n=a[i])&&(yield n)}EnterNode.prototype={constructor:EnterNode,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ClassList.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var root=[null];function Selection$1(t,e){this._groups=t,this._parents=e}function selection(){return new Selection$1([[document.documentElement]],root)}function selection_selection(){return this}function select(t){return"string"==typeof t?new Selection$1([[document.querySelector(t)]],[document.documentElement]):new Selection$1([[t]],root)}function sourceEvent(t){let e;for(;e=t.sourceEvent;)t=e;return t}function pointer(t,e){if(t=sourceEvent(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var a=e.getBoundingClientRect();return[t.clientX-a.left-e.clientLeft,t.clientY-a.top-e.clientTop]}}return[t.pageX,t.pageY]}Selection$1.prototype=selection.prototype={constructor:Selection$1,select:selection_select,selectAll:selection_selectAll,selectChild:selection_selectChild,selectChildren:selection_selectChildren,filter:selection_filter,data:selection_data,enter:selection_enter,exit:selection_exit,join:selection_join,merge:selection_merge,selection:selection_selection,order:selection_order,sort:selection_sort,call:selection_call,nodes:selection_nodes,node:selection_node,size:selection_size,empty:selection_empty,each:selection_each,attr:selection_attr,style:selection_style,property:selection_property,classed:selection_classed,text:selection_text,html:selection_html,raise:selection_raise,lower:selection_lower,append:selection_append,insert:selection_insert,remove:selection_remove,clone:selection_clone,datum:selection_datum,on:selection_on,dispatch:selection_dispatch,[Symbol.iterator]:selection_iterator};const nonpassive={passive:!1},nonpassivecapture={capture:!0,passive:!1};function nopropagation(t){t.stopImmediatePropagation()}function noevent(t){t.preventDefault(),t.stopImmediatePropagation()}function dragDisable(t){var e=t.document.documentElement,r=select(t).on("dragstart.drag",noevent,nonpassivecapture);"onselectstart"in e?r.on("selectstart.drag",noevent,nonpassivecapture):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function yesdrag(t,e){var r=t.document.documentElement,n=select(t).on("dragstart.drag",null);e&&(n.on("click.drag",noevent,nonpassivecapture),setTimeout((function(){n.on("click.drag",null)}),0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var constant$3=t=>()=>t;function DragEvent(t,{sourceEvent:e,subject:r,target:n,identifier:a,active:i,x:o,y:s,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:a,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function defaultFilter(t){return!t.ctrlKey&&!t.button}function defaultContainer(){return this.parentNode}function defaultSubject(t,e){return null==e?{x:t.x,y:t.y}:e}function defaultTouchable(){return navigator.maxTouchPoints||"ontouchstart"in this}function drag(){var t,e,r,n,a=defaultFilter,i=defaultContainer,o=defaultSubject,s=defaultTouchable,l={},c=dispatch("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",f).filter(s).on("touchstart.drag",m).on("touchmove.drag",b,nonpassive).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(o,s){if(!n&&a.call(this,o,s)){var l=v(this,i.call(this,o,s),o,s,"mouse");l&&(select(o.view).on("mousemove.drag",p,nonpassivecapture).on("mouseup.drag",g,nonpassivecapture),dragDisable(o.view),nopropagation(o),r=!1,t=o.clientX,e=o.clientY,l("start",o))}}function p(n){if(noevent(n),!r){var a=n.clientX-t,i=n.clientY-e;r=a*a+i*i>h}l.mouse("drag",n)}function g(t){select(t.view).on("mousemove.drag mouseup.drag",null),yesdrag(t.view,r),noevent(t),l.mouse("end",t)}function m(t,e){if(a.call(this,t,e)){var r,n,o=t.changedTouches,s=i.call(this,t,e),l=o.length;for(r=0;r<l;++r)(n=v(this,s,t,e,o[r].identifier,o[r]))&&(nopropagation(t),n("start",t,o[r]))}}function b(t){var e,r,n=t.changedTouches,a=n.length;for(e=0;e<a;++e)(r=l[n[e].identifier])&&(noevent(t),r("drag",t,n[e]))}function y(t){var e,r,a=t.changedTouches,i=a.length;for(n&&clearTimeout(n),n=setTimeout((function(){n=null}),500),e=0;e<i;++e)(r=l[a[e].identifier])&&(nopropagation(t),r("end",t,a[e]))}function v(t,e,r,n,a,i){var s,h,f,p=c.copy(),g=pointer(i||r,e);if(null!=(f=o.call(t,new DragEvent("beforestart",{sourceEvent:r,target:d,identifier:a,active:u,x:g[0],y:g[1],dx:0,dy:0,dispatch:p}),n)))return s=f.x-g[0]||0,h=f.y-g[1]||0,function r(i,o,c){var m,b=g;switch(i){case"start":l[a]=r,m=u++;break;case"end":delete l[a],--u;case"drag":g=pointer(c||o,e),m=u}p.call(i,t,new DragEvent(i,{sourceEvent:o,subject:f,target:d,identifier:a,active:m,x:g[0]+s,y:g[1]+h,dx:g[0]-b[0],dy:g[1]-b[1],dispatch:p}),n)}}return d.filter=function(t){return arguments.length?(a="function"==typeof t?t:constant$3(!!t),d):a},d.container=function(t){return arguments.length?(i="function"==typeof t?t:constant$3(t),d):i},d.subject=function(t){return arguments.length?(o="function"==typeof t?t:constant$3(t),d):o},d.touchable=function(t){return arguments.length?(s="function"==typeof t?t:constant$3(!!t),d):s},d.on=function(){var t=c.on.apply(c,arguments);return t===c?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}function define(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function extend(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function Color(){}DragEvent.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp("^rgb\\("+[reI,reI,reI]+"\\)$"),reRgbPercent=new RegExp("^rgb\\("+[reP,reP,reP]+"\\)$"),reRgbaInteger=new RegExp("^rgba\\("+[reI,reI,reI,reN]+"\\)$"),reRgbaPercent=new RegExp("^rgba\\("+[reP,reP,reP,reN]+"\\)$"),reHslPercent=new RegExp("^hsl\\("+[reN,reP,reP]+"\\)$"),reHslaPercent=new RegExp("^hsla\\("+[reN,reP,reP,reN]+"\\)$"),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?rgbn(e):3===r?new Rgb(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?rgba(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):"transparent"===t?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,255&t,1)}function rgba(t,e,r,n){return n<=0&&(t=e=r=NaN),new Rgb(t,e,r,n)}function rgbConvert(t){return t instanceof Color||(t=color(t)),t?new Rgb((t=t.rgb()).r,t.g,t.b,t.opacity):new Rgb}function rgb(t,e,r,n){return 1===arguments.length?rgbConvert(t):new Rgb(t,e,r,null==n?1:n)}function Rgb(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function rgb_formatHex(){return"#"+hex(this.r)+hex(this.g)+hex(this.b)}function rgb_formatRgb(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function hex(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function hsla(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,r,n)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,a=Math.min(e,r,n),i=Math.max(e,r,n),o=NaN,s=i-a,l=(i+a)/2;return s?(o=e===i?(r-n)/s+6*(r<n):r===i?(n-e)/s+2:(e-r)/s+4,s/=l<.5?i+a:2-i-a,o*=60):s=l>0&&l<1?0:o,new Hsl(o,s,l,t.opacity)}function hsl(t,e,r,n){return 1===arguments.length?hslConvert(t):new Hsl(t,e,r,null==n?1:n)}function Hsl(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function hsl2rgb(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}define(Color,color,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb}),define(Rgb,rgb,extend(Color,{brighter:function(t){return t=null==t?brighter:Math.pow(brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?darker:Math.pow(darker,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),define(Hsl,hsl,extend(Color,{brighter:function(t){return t=null==t?brighter:Math.pow(brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?darker:Math.pow(darker,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,a=2*r-n;return new Rgb(hsl2rgb(t>=240?t-240:t+120,a,n),hsl2rgb(t,a,n),hsl2rgb(t<120?t+240:t-120,a,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var constant$2=t=>()=>t;function linear$2(t,e){return function(r){return t+r*e}}function exponential(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}function gamma(t){return 1==(t=+t)?nogamma:function(e,r){return r-e?exponential(e,r,t):constant$2(isNaN(e)?r:e)}}function nogamma(t,e){var r=e-t;return r?linear$2(t,r):constant$2(isNaN(t)?e:t)}var interpolateRgb=function t(e){var r=gamma(e);function n(t,e){var n=r((t=rgb(t)).r,(e=rgb(e)).r),a=r(t.g,e.g),i=r(t.b,e.b),o=nogamma(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=a(e),t.b=i(e),t.opacity=o(e),t+""}}return n.gamma=t,n}(1);function numberArray(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,a=e.slice();return function(i){for(r=0;r<n;++r)a[r]=t[r]*(1-i)+e[r]*i;return a}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,e){var r,n=e?e.length:0,a=t?Math.min(n,t.length):0,i=new Array(a),o=new Array(n);for(r=0;r<a;++r)i[r]=interpolate$1(t[r],e[r]);for(;r<n;++r)o[r]=e[r];return function(t){for(r=0;r<a;++r)o[r]=i[r](t);return o}}function date(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function interpolateNumber(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function object(t,e){var r,n={},a={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=interpolate$1(t[r],e[r]):a[r]=e[r];return function(t){for(r in n)a[r]=n[r](t);return a}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(t){return function(){return t}}function one(t){return function(e){return t(e)+""}}function interpolateString(t,e){var r,n,a,i=reA.lastIndex=reB.lastIndex=0,o=-1,s=[],l=[];for(t+="",e+="";(r=reA.exec(t))&&(n=reB.exec(e));)(a=n.index)>i&&(a=e.slice(i,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(n=n[0])?s[o]?s[o]+=n:s[++o]=n:(s[++o]=null,l.push({i:o,x:interpolateNumber(r,n)})),i=reB.lastIndex;return i<e.length&&(a=e.slice(i),s[o]?s[o]+=a:s[++o]=a),s.length<2?l[0]?one(l[0].x):zero(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)s[(r=l[n]).i]=r.x(t);return s.join("")})}function interpolate$1(t,e){var r,n=typeof e;return null==e||"boolean"===n?constant$2(e):("number"===n?interpolateNumber:"string"===n?(r=color(e))?(e=r,interpolateRgb):interpolateString:e instanceof color?interpolateRgb:e instanceof Date?date:isNumberArray(e)?numberArray:Array.isArray(e)?genericArray:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?object:interpolateNumber)(t,e)}function interpolateRound(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var svgNode,degrees$1=180/Math.PI,identity$4={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(t,e,r,n,a,i){var o,s,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,l/=s),t*n<e*r&&(t=-t,e=-e,l=-l,o=-o),{translateX:a,translateY:i,rotate:Math.atan2(e,t)*degrees$1,skewX:Math.atan(l)*degrees$1,scaleX:o,scaleY:s}}function parseCss(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?identity$4:decompose(e.a,e.b,e.c,e.d,e.e,e.f)}function parseSvg(t){return null==t?identity$4:(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",t),(t=svgNode.transform.baseVal.consolidate())?decompose((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):identity$4)}function interpolateTransform(t,e,r,n){function a(t){return t.length?t.pop()+" ":""}return function(i,o){var s=[],l=[];return i=t(i),o=t(o),function(t,n,a,i,o,s){if(t!==a||n!==i){var l=o.push("translate(",null,e,null,r);s.push({i:l-4,x:interpolateNumber(t,a)},{i:l-2,x:interpolateNumber(n,i)})}else(a||i)&&o.push("translate("+a+e+i+r)}(i.translateX,i.translateY,o.translateX,o.translateY,s,l),function(t,e,r,i){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),i.push({i:r.push(a(r)+"rotate(",null,n)-2,x:interpolateNumber(t,e)})):e&&r.push(a(r)+"rotate("+e+n)}(i.rotate,o.rotate,s,l),function(t,e,r,i){t!==e?i.push({i:r.push(a(r)+"skewX(",null,n)-2,x:interpolateNumber(t,e)}):e&&r.push(a(r)+"skewX("+e+n)}(i.skewX,o.skewX,s,l),function(t,e,r,n,i,o){if(t!==r||e!==n){var s=i.push(a(i)+"scale(",null,",",null,")");o.push({i:s-4,x:interpolateNumber(t,r)},{i:s-2,x:interpolateNumber(e,n)})}else 1===r&&1===n||i.push(a(i)+"scale("+r+","+n+")")}(i.scaleX,i.scaleY,o.scaleX,o.scaleY,s,l),i=o=null,function(t){for(var e,r=-1,n=l.length;++r<n;)s[(e=l[r]).i]=e.x(t);return s.join("")}}}var taskHead,taskTail,interpolateTransformCss=interpolateTransform(parseCss,"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform(parseSvg,", ",")",")"),frame=0,timeout$1=0,interval$1=0,pokeDelay=1e3,clockLast=0,clockNow=0,clockSkew=0,clock="object"==typeof performance&&performance.now?performance:Date,setFrame="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}function timer(t,e,r){var n=new Timer;return n.restart(t,e,r),n}function timerFlush(){now(),++frame;for(var t,e=taskHead;e;)(t=clockNow-e._time)>=0&&e._call.call(void 0,t),e=e._next;--frame}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{timerFlush()}finally{frame=0,nap(),clockNow=0}}function poke(){var t=clock.now(),e=t-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=t)}function nap(){for(var t,e,r=taskHead,n=1/0;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:taskHead=e);taskTail=t,sleep(n)}function sleep(t){frame||(timeout$1&&(timeout$1=clearTimeout(timeout$1)),t-clockNow>24?(t<1/0&&(timeout$1=setTimeout(wake,t-clock.now()-clockSkew)),interval$1&&(interval$1=clearInterval(interval$1))):(interval$1||(clockLast=clock.now(),interval$1=setInterval(poke,pokeDelay)),frame=1,setFrame(wake)))}function timeout(t,e,r){var n=new Timer;return e=null==e?0:+e,n.restart((r=>{n.stop(),t(r+e)}),e,r),n}function interval(t,e,r){var n=new Timer,a=e;return null==e?(n.restart(t,e,r),n):(n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?now():+r,n._restart((function i(o){o+=a,n._restart(i,a+=e,r),t(o)}),e,r)},n.restart(t,e,r),n)}Timer.prototype=timer.prototype={constructor:Timer,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?now():+r)+(null==e?0:+e),this._next||taskTail===this||(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=t,this._time=r,sleep()},stop:function(){this._call&&(this._call=null,this._time=1/0,sleep())}};var emptyOn=dispatch("start","end","cancel","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(t,e,r,n,a,i){var o=t.__transition;if(o){if(r in o)return}else t.__transition={};create(t,r,{name:e,index:n,group:a,on:emptyOn,tween:emptyTween,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:CREATED})}function init(t,e){var r=get(t,e);if(r.state>CREATED)throw new Error("too late; already scheduled");return r}function set(t,e){var r=get(t,e);if(r.state>STARTED)throw new Error("too late; already running");return r}function get(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function create(t,e,r){var n,a=t.__transition;function i(l){var c,u,h,d;if(r.state!==SCHEDULED)return s();for(c in a)if((d=a[c]).name===r.name){if(d.state===STARTED)return timeout(i);d.state===RUNNING?(d.state=ENDED,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete a[c]):+c<e&&(d.state=ENDED,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete a[c])}if(timeout((function(){r.state===STARTED&&(r.state=RUNNING,r.timer.restart(o,r.delay,r.time),o(l))})),r.state=STARTING,r.on.call("start",t,t.__data__,r.index,r.group),r.state===STARTING){for(r.state=STARTED,n=new Array(h=r.tween.length),c=0,u=-1;c<h;++c)(d=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=d);n.length=u+1}}function o(e){for(var a=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(s),r.state=ENDING,1),i=-1,o=n.length;++i<o;)n[i].call(t,a);r.state===ENDING&&(r.on.call("end",t,t.__data__,r.index,r.group),s())}function s(){for(var n in r.state=ENDED,r.timer.stop(),delete a[e],a)return;delete t.__transition}a[e]=r,r.timer=timer((function(t){r.state=SCHEDULED,r.timer.restart(i,r.delay,r.time),r.delay<=t&&i(t-r.delay)}),0,r.time)}function interrupt(t,e){var r,n,a,i=t.__transition,o=!0;if(i){for(a in e=null==e?null:e+"",i)(r=i[a]).name===e?(n=r.state>STARTING&&r.state<ENDING,r.state=ENDED,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete i[a]):o=!1;o&&delete t.__transition}}function selection_interrupt(t){return this.each((function(){interrupt(this,t)}))}function tweenRemove(t,e){var r,n;return function(){var a=set(this,t),i=a.tween;if(i!==r)for(var o=0,s=(n=r=i).length;o<s;++o)if(n[o].name===e){(n=n.slice()).splice(o,1);break}a.tween=n}}function tweenFunction(t,e,r){var n,a;if("function"!=typeof r)throw new Error;return function(){var i=set(this,t),o=i.tween;if(o!==n){a=(n=o).slice();for(var s={name:e,value:r},l=0,c=a.length;l<c;++l)if(a[l].name===e){a[l]=s;break}l===c&&a.push(s)}i.tween=a}}function transition_tween(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,a=get(this.node(),r).tween,i=0,o=a.length;i<o;++i)if((n=a[i]).name===t)return n.value;return null}return this.each((null==e?tweenRemove:tweenFunction)(r,t,e))}function tweenValue(t,e,r){var n=t._id;return t.each((function(){var t=set(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)})),function(t){return get(t,n).value[e]}}function interpolate(t,e){var r;return("number"==typeof e?interpolateNumber:e instanceof color?interpolateRgb:(r=color(e))?(e=r,interpolateRgb):interpolateString)(t,e)}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e,r){var n,a,i=r+"";return function(){var o=this.getAttribute(t);return o===i?null:o===n?a:a=e(n=o,r)}}function attrConstantNS(t,e,r){var n,a,i=r+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===n?a:a=e(n=o,r)}}function attrFunction(t,e,r){var n,a,i;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttribute(t))===(s=l+"")?null:o===n&&s===a?i:(a=s,i=e(n=o,l));this.removeAttribute(t)}}function attrFunctionNS(t,e,r){var n,a,i;return function(){var o,s,l=r(this);if(null!=l)return(o=this.getAttributeNS(t.space,t.local))===(s=l+"")?null:o===n&&s===a?i:(a=s,i=e(n=o,l));this.removeAttributeNS(t.space,t.local)}}function transition_attr(t,e){var r=namespace(t),n="transform"===r?interpolateTransformSvg:interpolate;return this.attrTween(t,"function"==typeof e?(r.local?attrFunctionNS:attrFunction)(r,n,tweenValue(this,"attr."+t,e)):null==e?(r.local?attrRemoveNS:attrRemove)(r):(r.local?attrConstantNS:attrConstant)(r,n,e))}function attrInterpolate(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}function attrInterpolateNS(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}function attrTweenNS(t,e){var r,n;function a(){var a=e.apply(this,arguments);return a!==n&&(r=(n=a)&&attrInterpolateNS(t,a)),r}return a._value=e,a}function attrTween(t,e){var r,n;function a(){var a=e.apply(this,arguments);return a!==n&&(r=(n=a)&&attrInterpolate(t,a)),r}return a._value=e,a}function transition_attrTween(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=namespace(t);return this.tween(r,(n.local?attrTweenNS:attrTween)(n,e))}function delayFunction(t,e){return function(){init(this,t).delay=+e.apply(this,arguments)}}function delayConstant(t,e){return e=+e,function(){init(this,t).delay=e}}function transition_delay(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?delayFunction:delayConstant)(e,t)):get(this.node(),e).delay}function durationFunction(t,e){return function(){set(this,t).duration=+e.apply(this,arguments)}}function durationConstant(t,e){return e=+e,function(){set(this,t).duration=e}}function transition_duration(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?durationFunction:durationConstant)(e,t)):get(this.node(),e).duration}function easeConstant(t,e){if("function"!=typeof e)throw new Error;return function(){set(this,t).ease=e}}function transition_ease(t){var e=this._id;return arguments.length?this.each(easeConstant(e,t)):get(this.node(),e).ease}function easeVarying(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;set(this,t).ease=r}}function transition_easeVarying(t){if("function"!=typeof t)throw new Error;return this.each(easeVarying(this._id,t))}function transition_filter(t){"function"!=typeof t&&(t=matcher(t));for(var e=this._groups,r=e.length,n=new Array(r),a=0;a<r;++a)for(var i,o=e[a],s=o.length,l=n[a]=[],c=0;c<s;++c)(i=o[c])&&t.call(i,i.__data__,c,o)&&l.push(i);return new Transition(n,this._parents,this._name,this._id)}function transition_merge(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,a=r.length,i=Math.min(n,a),o=new Array(n),s=0;s<i;++s)for(var l,c=e[s],u=r[s],h=c.length,d=o[s]=new Array(h),f=0;f<h;++f)(l=c[f]||u[f])&&(d[f]=l);for(;s<n;++s)o[s]=e[s];return new Transition(o,this._parents,this._name,this._id)}function start(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}function onFunction(t,e,r){var n,a,i=start(e)?init:set;return function(){var o=i(this,t),s=o.on;s!==n&&(a=(n=s).copy()).on(e,r),o.on=a}}function transition_on(t,e){var r=this._id;return arguments.length<2?get(this.node(),r).on.on(t):this.each(onFunction(r,t,e))}function removeFunction(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}function transition_remove(){return this.on("end.remove",removeFunction(this._id))}function transition_select(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selector(t));for(var n=this._groups,a=n.length,i=new Array(a),o=0;o<a;++o)for(var s,l,c=n[o],u=c.length,h=i[o]=new Array(u),d=0;d<u;++d)(s=c[d])&&(l=t.call(s,s.__data__,d,c))&&("__data__"in s&&(l.__data__=s.__data__),h[d]=l,schedule(h[d],e,r,d,h,get(s,r)));return new Transition(i,this._parents,e,r)}function transition_selectAll(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=selectorAll(t));for(var n=this._groups,a=n.length,i=[],o=[],s=0;s<a;++s)for(var l,c=n[s],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,f=t.call(l,l.__data__,h,c),p=get(l,r),g=0,m=f.length;g<m;++g)(d=f[g])&&schedule(d,e,r,g,f,p);i.push(f),o.push(l)}return new Transition(i,o,e,r)}var Selection=selection.prototype.constructor;function transition_selection(){return new Selection(this._groups,this._parents)}function styleNull(t,e){var r,n,a;return function(){var i=styleValue(this,t),o=(this.style.removeProperty(t),styleValue(this,t));return i===o?null:i===r&&o===n?a:a=e(r=i,n=o)}}function styleRemove(t){return function(){this.style.removeProperty(t)}}function styleConstant(t,e,r){var n,a,i=r+"";return function(){var o=styleValue(this,t);return o===i?null:o===n?a:a=e(n=o,r)}}function styleFunction(t,e,r){var n,a,i;return function(){var o=styleValue(this,t),s=r(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=styleValue(this,t)),o===l?null:o===n&&l===a?i:(a=l,i=e(n=o,s))}}function styleMaybeRemove(t,e){var r,n,a,i,o="style."+e,s="end."+o;return function(){var l=set(this,t),c=l.on,u=null==l.value[o]?i||(i=styleRemove(e)):void 0;c===r&&a===u||(n=(r=c).copy()).on(s,a=u),l.on=n}}function transition_style(t,e,r){var n="transform"==(t+="")?interpolateTransformCss:interpolate;return null==e?this.styleTween(t,styleNull(t,n)).on("end.style."+t,styleRemove(t)):"function"==typeof e?this.styleTween(t,styleFunction(t,n,tweenValue(this,"style."+t,e))).each(styleMaybeRemove(this._id,t)):this.styleTween(t,styleConstant(t,n,e),r).on("end.style."+t,null)}function styleInterpolate(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}function styleTween(t,e,r){var n,a;function i(){var i=e.apply(this,arguments);return i!==a&&(n=(a=i)&&styleInterpolate(t,i,r)),n}return i._value=e,i}function transition_styleTween(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,styleTween(t,e,null==r?"":r))}function textConstant(t){return function(){this.textContent=t}}function textFunction(t){return function(){var e=t(this);this.textContent=null==e?"":e}}function transition_text(t){return this.tween("text","function"==typeof t?textFunction(tweenValue(this,"text",t)):textConstant(null==t?"":t+""))}function textInterpolate(t){return function(e){this.textContent=t.call(this,e)}}function textTween(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&textInterpolate(n)),e}return n._value=t,n}function transition_textTween(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,textTween(t))}function transition_transition(){for(var t=this._name,e=this._id,r=newId(),n=this._groups,a=n.length,i=0;i<a;++i)for(var o,s=n[i],l=s.length,c=0;c<l;++c)if(o=s[c]){var u=get(o,e);schedule(o,t,r,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Transition(n,this._parents,t,r)}function transition_end(){var t,e,r=this,n=r._id,a=r.size();return new Promise((function(i,o){var s={value:o},l={value:function(){0==--a&&i()}};r.each((function(){var r=set(this,n),a=r.on;a!==t&&((e=(t=a).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),r.on=e})),0===a&&i()}))}var id=0;function Transition(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function newId(){return++id}var selection_prototype=selection.prototype;Transition.prototype={constructor:Transition,select:transition_select,selectAll:transition_selectAll,selectChild:selection_prototype.selectChild,selectChildren:selection_prototype.selectChildren,filter:transition_filter,merge:transition_merge,selection:transition_selection,transition:transition_transition,call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:transition_on,attr:transition_attr,attrTween:transition_attrTween,style:transition_style,styleTween:transition_styleTween,text:transition_text,textTween:transition_textTween,remove:transition_remove,tween:transition_tween,delay:transition_delay,duration:transition_duration,ease:transition_ease,easeVarying:transition_easeVarying,end:transition_end,[Symbol.iterator]:selection_prototype[Symbol.iterator]};const linear$1=t=>+t;function cubicIn(t){return t*t*t}function cubicOut(t){return--t*t*t+1}function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var defaultTiming={time:null,delay:0,duration:250,ease:cubicInOut};function inherit(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}function selection_transition(t){var e,r;t instanceof Transition?(e=t._id,t=t._name):(e=newId(),(r=defaultTiming).time=now(),t=null==t?null:t+"");for(var n=this._groups,a=n.length,i=0;i<a;++i)for(var o,s=n[i],l=s.length,c=0;c<l;++c)(o=s[c])&&schedule(o,t,e,c,s,r||inherit(o,e));return new Transition(n,this._parents,t,e)}selection.prototype.interrupt=selection_interrupt,selection.prototype.transition=selection_transition;const pi$1=Math.PI,tau$1=2*pi$1,epsilon$1=1e-6,tauEpsilon=tau$1-1e-6;function Path(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function path(){return new Path}Path.prototype=path.prototype={constructor:Path,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,r,n){this._+="Q"+ +t+","+ +e+","+(this._x1=+r)+","+(this._y1=+n)},bezierCurveTo:function(t,e,r,n,a,i){this._+="C"+ +t+","+ +e+","+ +r+","+ +n+","+(this._x1=+a)+","+(this._y1=+i)},arcTo:function(t,e,r,n,a){t=+t,e=+e,r=+r,n=+n,a=+a;var i=this._x1,o=this._y1,s=r-t,l=n-e,c=i-t,u=o-e,h=c*c+u*u;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(h>1e-6)if(Math.abs(u*s-l*c)>1e-6&&a){var d=r-i,f=n-o,p=s*s+l*l,g=d*d+f*f,m=Math.sqrt(p),b=Math.sqrt(h),y=a*Math.tan((pi$1-Math.acos((p+h-g)/(2*m*b)))/2),v=y/b,$=y/m;Math.abs(v-1)>1e-6&&(this._+="L"+(t+v*c)+","+(e+v*u)),this._+="A"+a+","+a+",0,0,"+ +(u*d>c*f)+","+(this._x1=t+$*s)+","+(this._y1=e+$*l)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,r,n,a,i){t=+t,e=+e,i=!!i;var o=(r=+r)*Math.cos(n),s=r*Math.sin(n),l=t+o,c=e+s,u=1^i,h=i?n-a:a-n;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+l+","+c:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-c)>1e-6)&&(this._+="L"+l+","+c),r&&(h<0&&(h=h%tau$1+tau$1),h>tauEpsilon?this._+="A"+r+","+r+",0,1,"+u+","+(t-o)+","+(e-s)+"A"+r+","+r+",0,1,"+u+","+(this._x1=l)+","+(this._y1=c):h>1e-6&&(this._+="A"+r+","+r+",0,"+ +(h>=pi$1)+","+u+","+(this._x1=t+r*Math.cos(a))+","+(this._y1=e+r*Math.sin(a))))},rect:function(t,e,r,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +r+"v"+ +n+"h"+-r+"Z"},toString:function(){return this._}};var array$1=Array.prototype,slice=array$1.slice;function ascending(t,e){return t-e}function area(t){for(var e=0,r=t.length,n=t[r-1][1]*t[0][0]-t[r-1][0]*t[0][1];++e<r;)n+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return n}var constant$1=t=>()=>t;function contains(t,e){for(var r,n=-1,a=e.length;++n<a;)if(r=ringContains(t,e[n]))return r;return 0}function ringContains(t,e){for(var r=e[0],n=e[1],a=-1,i=0,o=t.length,s=o-1;i<o;s=i++){var l=t[i],c=l[0],u=l[1],h=t[s],d=h[0],f=h[1];if(segmentContains(l,h,e))return 0;u>n!=f>n&&r<(d-c)*(n-u)/(f-u)+c&&(a=-a)}return a}function segmentContains(t,e,r){var n;return collinear(t,e,r)&&within(t[n=+(t[0]===e[0])],r[n],e[n])}function collinear(t,e,r){return(e[0]-t[0])*(r[1]-t[1])==(r[0]-t[0])*(e[1]-t[1])}function within(t,e,r){return t<=e&&e<=r||r<=e&&e<=t}function noop$1(){}var cases=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function contours(){var t=1,e=1,r=thresholdSturges,n=s;function a(t){var e=r(t);if(Array.isArray(e))e=e.slice().sort(ascending);else{const r=extent(t),n=tickStep(r[0],r[1],e);e=ticks(Math.floor(r[0]/n)*n,Math.floor(r[1]/n-1)*n,e)}return e.map((e=>i(t,e)))}function i(r,a){var i=[],s=[];return function(r,n,a){var i,s,l,c,u,h,d=new Array,f=new Array;i=s=-1,c=r[0]>=n,cases[c<<1].forEach(p);for(;++i<t-1;)l=c,c=r[i+1]>=n,cases[l|c<<1].forEach(p);cases[c<<0].forEach(p);for(;++s<e-1;){for(i=-1,c=r[s*t+t]>=n,u=r[s*t]>=n,cases[c<<1|u<<2].forEach(p);++i<t-1;)l=c,c=r[s*t+t+i+1]>=n,h=u,u=r[s*t+i+1]>=n,cases[l|c<<1|u<<2|h<<3].forEach(p);cases[c|u<<3].forEach(p)}i=-1,u=r[s*t]>=n,cases[u<<2].forEach(p);for(;++i<t-1;)h=u,u=r[s*t+i+1]>=n,cases[u<<2|h<<3].forEach(p);function p(t){var e,r,n=[t[0][0]+i,t[0][1]+s],l=[t[1][0]+i,t[1][1]+s],c=o(n),u=o(l);(e=f[c])?(r=d[u])?(delete f[e.end],delete d[r.start],e===r?(e.ring.push(l),a(e.ring)):d[e.start]=f[r.end]={start:e.start,end:r.end,ring:e.ring.concat(r.ring)}):(delete f[e.end],e.ring.push(l),f[e.end=u]=e):(e=d[u])?(r=f[c])?(delete d[e.start],delete f[r.end],e===r?(e.ring.push(l),a(e.ring)):d[r.start]=f[e.end]={start:r.start,end:e.end,ring:r.ring.concat(e.ring)}):(delete d[e.start],e.ring.unshift(n),d[e.start=c]=e):d[c]=f[u]={start:c,end:u,ring:[n,l]}}cases[u<<3].forEach(p)}(r,a,(function(t){n(t,r,a),area(t)>0?i.push([t]):s.push(t)})),s.forEach((function(t){for(var e,r=0,n=i.length;r<n;++r)if(-1!==contains((e=i[r])[0],t))return void e.push(t)})),{type:"MultiPolygon",value:a,coordinates:i}}function o(e){return 2*e[0]+e[1]*(t+1)*4}function s(r,n,a){r.forEach((function(r){var i,o=r[0],s=r[1],l=0|o,c=0|s,u=n[c*t+l];o>0&&o<t&&l===o&&(i=n[c*t+l-1],r[0]=o+(a-i)/(u-i)-.5),s>0&&s<e&&c===s&&(i=n[(c-1)*t+l],r[1]=s+(a-i)/(u-i)-.5)}))}return a.contour=i,a.size=function(r){if(!arguments.length)return[t,e];var n=Math.floor(r[0]),i=Math.floor(r[1]);if(!(n>=0&&i>=0))throw new Error("invalid size");return t=n,e=i,a},a.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?constant$1(slice.call(t)):constant$1(t),a):r},a.smooth=function(t){return arguments.length?(n=t?s:noop$1,a):n===s},a}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function exponent(t){return(t=formatDecimalParts(Math.abs(t)))?t[1]:NaN}function formatGroup(t,e){return function(r,n){for(var a=r.length,i=[],o=0,s=t[0],l=0;a>0&&s>0&&(l+s+1>n&&(s=Math.max(1,n-l)),i.push(r.substring(a-=s,a+s)),!((l+=s+1)>n));)s=t[o=(o+1)%t.length];return i.reverse().join(e)}}function formatNumerals(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(e=re.exec(t)))throw new Error("invalid format: "+t);var e;return new FormatSpecifier({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function FormatSpecifier(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function formatTrim(t){t:for(var e,r=t.length,n=1,a=-1;n<r;++n)switch(t[n]){case".":a=e=n;break;case"0":0===a&&(a=n),e=n;break;default:if(!+t[n])break t;a>0&&(a=0)}return a>0?t.slice(0,a)+t.slice(e+1):t}function formatPrefixAuto(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],a=r[1],i=a-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,o=n.length;return i===o?n:i>o?n+new Array(i-o+1).join("0"):i>0?n.slice(0,i)+"."+n.slice(i):"0."+new Array(1-i).join("0")+formatDecimalParts(t,Math.max(0,e+i-1))[0]}function formatRounded(t,e){var r=formatDecimalParts(t,e);if(!r)return t+"";var n=r[0],a=r[1];return a<0?"0."+new Array(-a).join("0")+n:n.length>a+1?n.slice(0,a+1)+"."+n.slice(a+1):n+new Array(a-n.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var formatTypes={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:formatDecimal,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>formatRounded(100*t,e),r:formatRounded,s:formatPrefixAuto,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function identity$3(t){return t}var locale,format,formatPrefix,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale(t){var e=void 0===t.grouping||void 0===t.thousands?identity$3:formatGroup(map.call(t.grouping,Number),t.thousands+""),r=void 0===t.currency?"":t.currency[0]+"",n=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",i=void 0===t.numerals?identity$3:formatNumerals(map.call(t.numerals,String)),o=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function c(t){var c=(t=formatSpecifier(t)).fill,u=t.align,h=t.sign,d=t.symbol,f=t.zero,p=t.width,g=t.comma,m=t.precision,b=t.trim,y=t.type;"n"===y?(g=!0,y="g"):formatTypes[y]||(void 0===m&&(m=12),b=!0,y="g"),(f||"0"===c&&"="===u)&&(f=!0,c="0",u="=");var v="$"===d?r:"#"===d&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",$="$"===d?n:/[%p]/.test(y)?o:"",_=formatTypes[y],S=/[defgprs%]/.test(y);function E(t){var r,n,o,d=v,E=$;if("c"===y)E=_(t)+E,t="";else{var T=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:_(Math.abs(t),m),b&&(t=formatTrim(t)),T&&0==+t&&"+"!==h&&(T=!1),d=(T?"("===h?h:s:"-"===h||"("===h?"":h)+d,E=("s"===y?prefixes[8+prefixExponent/3]:"")+E+(T&&"("===h?")":""),S)for(r=-1,n=t.length;++r<n;)if(48>(o=t.charCodeAt(r))||o>57){E=(46===o?a+t.slice(r+1):t.slice(r))+E,t=t.slice(0,r);break}}g&&!f&&(t=e(t,1/0));var w=d.length+t.length+E.length,A=w<p?new Array(p-w+1).join(c):"";switch(g&&f&&(t=e(A+t,A.length?p-E.length:1/0),A=""),u){case"<":t=d+t+E+A;break;case"=":t=d+A+t+E;break;case"^":t=A.slice(0,w=A.length>>1)+d+t+E+A.slice(w);break;default:t=A+d+t+E}return i(t)}return m=void 0===m?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),E.toString=function(){return t+""},E}return{format:c,formatPrefix:function(t,e){var r=c(((t=formatSpecifier(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3))),a=Math.pow(10,-n),i=prefixes[8+n/3];return function(t){return r(a*t)+i}}}}function defaultLocale(t){return locale=formatLocale(t),format=locale.format,formatPrefix=locale.formatPrefix,locale}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(exponent(e)/3)))-exponent(Math.abs(t)))}function precisionRound(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,exponent(e)-exponent(t))+1}defaultLocale({thousands:",",grouping:[3],currency:["$",""]});var epsilon=1e-6,pi=Math.PI,tau=2*pi,degrees=180/pi,radians=pi/180,abs=Math.abs,cos=Math.cos,sin=Math.sin,sqrt=Math.sqrt;function noop(){}function streamGeometry(t,e){t&&streamGeometryType.hasOwnProperty(t.type)&&streamGeometryType[t.type](t,e)}var streamObjectType={Feature:function(t,e){streamGeometry(t.geometry,e)},FeatureCollection:function(t,e){for(var r=t.features,n=-1,a=r.length;++n<a;)streamGeometry(r[n].geometry,e)}},streamGeometryType={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var r=t.coordinates,n=-1,a=r.length;++n<a;)t=r[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){streamLine(t.coordinates,e,0)},MultiLineString:function(t,e){for(var r=t.coordinates,n=-1,a=r.length;++n<a;)streamLine(r[n],e,0)},Polygon:function(t,e){streamPolygon(t.coordinates,e)},MultiPolygon:function(t,e){for(var r=t.coordinates,n=-1,a=r.length;++n<a;)streamPolygon(r[n],e)},GeometryCollection:function(t,e){for(var r=t.geometries,n=-1,a=r.length;++n<a;)streamGeometry(r[n],e)}};function streamLine(t,e,r){var n,a=-1,i=t.length-r;for(e.lineStart();++a<i;)n=t[a],e.point(n[0],n[1],n[2]);e.lineEnd()}function streamPolygon(t,e){var r=-1,n=t.length;for(e.polygonStart();++r<n;)streamLine(t[r],e,1);e.polygonEnd()}function geoStream(t,e){t&&streamObjectType.hasOwnProperty(t.type)?streamObjectType[t.type](t,e):streamGeometry(t,e)}function clipBuffer(){var t,e=[];return{point:function(e,r,n){t.push([e,r,n])},lineStart:function(){e.push(t=[])},lineEnd:noop,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],t=null,r}}}function pointEqual(t,e){return abs(t[0]-e[0])<epsilon&&abs(t[1]-e[1])<epsilon}function Intersection(t,e,r,n){this.x=t,this.z=e,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function clipRejoin(t,e,r,n,a){var i,o,s=[],l=[];if(t.forEach((function(t){if(!((e=t.length-1)<=0)){var e,r,n=t[0],o=t[e];if(pointEqual(n,o)){if(!n[2]&&!o[2]){for(a.lineStart(),i=0;i<e;++i)a.point((n=t[i])[0],n[1]);return void a.lineEnd()}o[0]+=2*epsilon}s.push(r=new Intersection(n,t,null,!0)),l.push(r.o=new Intersection(n,null,r,!1)),s.push(r=new Intersection(o,t,null,!1)),l.push(r.o=new Intersection(o,null,r,!0))}})),s.length){for(l.sort(e),link(s),link(l),i=0,o=l.length;i<o;++i)l[i].e=r=!r;for(var c,u,h=s[0];;){for(var d=h,f=!0;d.v;)if((d=d.n)===h)return;c=d.z,a.lineStart();do{if(d.v=d.o.v=!0,d.e){if(f)for(i=0,o=c.length;i<o;++i)a.point((u=c[i])[0],u[1]);else n(d.x,d.n.x,1,a);d=d.n}else{if(f)for(c=d.p.z,i=c.length-1;i>=0;--i)a.point((u=c[i])[0],u[1]);else n(d.x,d.p.x,-1,a);d=d.p}c=(d=d.o).z,f=!f}while(!d.v);a.lineEnd()}}}function link(t){if(e=t.length){for(var e,r,n=0,a=t[0];++n<e;)a.n=r=t[n],r.p=a,a=r;a.n=r=t[0],r.p=a}}function clipLine(t,e,r,n,a,i){var o,s=t[0],l=t[1],c=0,u=1,h=e[0]-s,d=e[1]-l;if(o=r-s,h||!(o>0)){if(o/=h,h<0){if(o<c)return;o<u&&(u=o)}else if(h>0){if(o>u)return;o>c&&(c=o)}if(o=a-s,h||!(o<0)){if(o/=h,h<0){if(o>u)return;o>c&&(c=o)}else if(h>0){if(o<c)return;o<u&&(u=o)}if(o=n-l,d||!(o>0)){if(o/=d,d<0){if(o<c)return;o<u&&(u=o)}else if(d>0){if(o>u)return;o>c&&(c=o)}if(o=i-l,d||!(o<0)){if(o/=d,d<0){if(o>u)return;o>c&&(c=o)}else if(d>0){if(o<c)return;o<u&&(u=o)}return c>0&&(t[0]=s+c*h,t[1]=l+c*d),u<1&&(e[0]=s+u*h,e[1]=l+u*d),!0}}}}}var clipMax=1e9,clipMin=-clipMax;function clipRectangle(t,e,r,n){function a(a,i){return t<=a&&a<=r&&e<=i&&i<=n}function i(a,i,s,c){var u=0,h=0;if(null==a||(u=o(a,s))!==(h=o(i,s))||l(a,i)<0^s>0)do{c.point(0===u||3===u?t:r,u>1?n:e)}while((u=(u+s+4)%4)!==h);else c.point(i[0],i[1])}function o(n,a){return abs(n[0]-t)<epsilon?a>0?0:3:abs(n[0]-r)<epsilon?a>0?2:1:abs(n[1]-e)<epsilon?a>0?1:0:a>0?3:2}function s(t,e){return l(t.x,e.x)}function l(t,e){var r=o(t,1),n=o(e,1);return r!==n?r-n:0===r?e[1]-t[1]:1===r?t[0]-e[0]:2===r?t[1]-e[1]:e[0]-t[0]}return function(o){var l,c,u,h,d,f,p,g,m,b,y,v=o,$=clipBuffer(),_={point:S,lineStart:function(){_.point=E,c&&c.push(u=[]);b=!0,m=!1,p=g=NaN},lineEnd:function(){l&&(E(h,d),f&&m&&$.rejoin(),l.push($.result()));_.point=S,m&&v.lineEnd()},polygonStart:function(){v=$,l=[],c=[],y=!0},polygonEnd:function(){var e=function(){for(var e=0,r=0,a=c.length;r<a;++r)for(var i,o,s=c[r],l=1,u=s.length,h=s[0],d=h[0],f=h[1];l<u;++l)i=d,o=f,d=(h=s[l])[0],f=h[1],o<=n?f>n&&(d-i)*(n-o)>(f-o)*(t-i)&&++e:f<=n&&(d-i)*(n-o)<(f-o)*(t-i)&&--e;return e}(),r=y&&e,a=(l=merge(l)).length;(r||a)&&(o.polygonStart(),r&&(o.lineStart(),i(null,null,1,o),o.lineEnd()),a&&clipRejoin(l,s,e,i,o),o.polygonEnd());v=o,l=c=u=null}};function S(t,e){a(t,e)&&v.point(t,e)}function E(i,o){var s=a(i,o);if(c&&u.push([i,o]),b)h=i,d=o,f=s,b=!1,s&&(v.lineStart(),v.point(i,o));else if(s&&m)v.point(i,o);else{var l=[p=Math.max(clipMin,Math.min(clipMax,p)),g=Math.max(clipMin,Math.min(clipMax,g))],$=[i=Math.max(clipMin,Math.min(clipMax,i)),o=Math.max(clipMin,Math.min(clipMax,o))];clipLine(l,$,t,e,r,n)?(m||(v.lineStart(),v.point(l[0],l[1])),v.point($[0],$[1]),s||v.lineEnd(),y=!1):s&&(v.lineStart(),v.point(i,o),y=!1)}p=i,g=o,m=s}return _}}var x00$2,y00$2,x0$3,y0$3,identity$2=t=>t,areaSum=new Adder,areaRingSum=new Adder,areaStream={point:noop,lineStart:noop,lineEnd:noop,polygonStart:function(){areaStream.lineStart=areaRingStart,areaStream.lineEnd=areaRingEnd},polygonEnd:function(){areaStream.lineStart=areaStream.lineEnd=areaStream.point=noop,areaSum.add(abs(areaRingSum)),areaRingSum=new Adder},result:function(){var t=areaSum/2;return areaSum=new Adder,t}};function areaRingStart(){areaStream.point=areaPointFirst}function areaPointFirst(t,e){areaStream.point=areaPoint,x00$2=x0$3=t,y00$2=y0$3=e}function areaPoint(t,e){areaRingSum.add(y0$3*t-x0$3*e),x0$3=t,y0$3=e}function areaRingEnd(){areaPoint(x00$2,y00$2)}var pathArea=areaStream,x0$2=1/0,y0$2=x0$2,x1=-x0$2,y1=x1,boundsStream={point:boundsPoint,lineStart:noop,lineEnd:noop,polygonStart:noop,polygonEnd:noop,result:function(){var t=[[x0$2,y0$2],[x1,y1]];return x1=y1=-(y0$2=x0$2=1/0),t}};function boundsPoint(t,e){t<x0$2&&(x0$2=t),t>x1&&(x1=t),e<y0$2&&(y0$2=e),e>y1&&(y1=e)}var x00$1,y00$1,x0$1,y0$1,boundsStream$1=boundsStream,X0=0,Y0=0,Z0=0,X1=0,Y1=0,Z1=0,X2=0,Y2=0,Z2=0,centroidStream={point:centroidPoint,lineStart:centroidLineStart,lineEnd:centroidLineEnd,polygonStart:function(){centroidStream.lineStart=centroidRingStart,centroidStream.lineEnd=centroidRingEnd},polygonEnd:function(){centroidStream.point=centroidPoint,centroidStream.lineStart=centroidLineStart,centroidStream.lineEnd=centroidLineEnd},result:function(){var t=Z2?[X2/Z2,Y2/Z2]:Z1?[X1/Z1,Y1/Z1]:Z0?[X0/Z0,Y0/Z0]:[NaN,NaN];return X0=Y0=Z0=X1=Y1=Z1=X2=Y2=Z2=0,t}};function centroidPoint(t,e){X0+=t,Y0+=e,++Z0}function centroidLineStart(){centroidStream.point=centroidPointFirstLine}function centroidPointFirstLine(t,e){centroidStream.point=centroidPointLine,centroidPoint(x0$1=t,y0$1=e)}function centroidPointLine(t,e){var r=t-x0$1,n=e-y0$1,a=sqrt(r*r+n*n);X1+=a*(x0$1+t)/2,Y1+=a*(y0$1+e)/2,Z1+=a,centroidPoint(x0$1=t,y0$1=e)}function centroidLineEnd(){centroidStream.point=centroidPoint}function centroidRingStart(){centroidStream.point=centroidPointFirstRing}function centroidRingEnd(){centroidPointRing(x00$1,y00$1)}function centroidPointFirstRing(t,e){centroidStream.point=centroidPointRing,centroidPoint(x00$1=x0$1=t,y00$1=y0$1=e)}function centroidPointRing(t,e){var r=t-x0$1,n=e-y0$1,a=sqrt(r*r+n*n);X1+=a*(x0$1+t)/2,Y1+=a*(y0$1+e)/2,Z1+=a,X2+=(a=y0$1*t-x0$1*e)*(x0$1+t),Y2+=a*(y0$1+e),Z2+=3*a,centroidPoint(x0$1=t,y0$1=e)}var pathCentroid=centroidStream;function PathContext(t){this._context=t}PathContext.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,tau)}},result:noop};var lengthRing,x00,y00,x0,y0,lengthSum=new Adder,lengthStream={point:noop,lineStart:function(){lengthStream.point=lengthPointFirst},lineEnd:function(){lengthRing&&lengthPoint(x00,y00),lengthStream.point=noop},polygonStart:function(){lengthRing=!0},polygonEnd:function(){lengthRing=null},result:function(){var t=+lengthSum;return lengthSum=new Adder,t}};function lengthPointFirst(t,e){lengthStream.point=lengthPoint,x00=x0=t,y00=y0=e}function lengthPoint(t,e){x0-=t,y0-=e,lengthSum.add(sqrt(x0*x0+y0*y0)),x0=t,y0=e}var pathMeasure=lengthStream;function PathString(){this._string=[]}function circle(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function index(t,e){var r,n,a=4.5;function i(t){return t&&("function"==typeof a&&n.pointRadius(+a.apply(this,arguments)),geoStream(t,r(n))),n.result()}return i.area=function(t){return geoStream(t,r(pathArea)),pathArea.result()},i.measure=function(t){return geoStream(t,r(pathMeasure)),pathMeasure.result()},i.bounds=function(t){return geoStream(t,r(boundsStream$1)),boundsStream$1.result()},i.centroid=function(t){return geoStream(t,r(pathCentroid)),pathCentroid.result()},i.projection=function(e){return arguments.length?(r=null==e?(t=null,identity$2):(t=e).stream,i):t},i.context=function(t){return arguments.length?(n=null==t?(e=null,new PathString):new PathContext(e=t),"function"!=typeof a&&n.pointRadius(a),i):e},i.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(n.pointRadius(+t),+t),i):a},i.projection(t).context(e)}function transformer$1(t){return function(e){var r=new TransformStream;for(var n in t)r[n]=t[n];return r.stream=e,r}}function TransformStream(){}function fit(t,e,r){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=n&&t.clipExtent(null),geoStream(r,t.stream(boundsStream$1)),e(boundsStream$1.result()),null!=n&&t.clipExtent(n),t}function fitExtent(t,e,r){return fit(t,(function(r){var n=e[1][0]-e[0][0],a=e[1][1]-e[0][1],i=Math.min(n/(r[1][0]-r[0][0]),a/(r[1][1]-r[0][1])),o=+e[0][0]+(n-i*(r[1][0]+r[0][0]))/2,s=+e[0][1]+(a-i*(r[1][1]+r[0][1]))/2;t.scale(150*i).translate([o,s])}),r)}function fitSize(t,e,r){return fitExtent(t,[[0,0],e],r)}function fitWidth(t,e,r){return fit(t,(function(r){var n=+e,a=n/(r[1][0]-r[0][0]),i=(n-a*(r[1][0]+r[0][0]))/2,o=-a*r[0][1];t.scale(150*a).translate([i,o])}),r)}function fitHeight(t,e,r){return fit(t,(function(r){var n=+e,a=n/(r[1][1]-r[0][1]),i=-a*r[0][0],o=(n-a*(r[1][1]+r[0][1]))/2;t.scale(150*a).translate([i,o])}),r)}function identity$1(){var t,e,r,n,a,i,o,s=1,l=0,c=0,u=1,h=1,d=0,f=null,p=1,g=1,m=transformer$1({point:function(t,e){var r=v([t,e]);this.stream.point(r[0],r[1])}}),b=identity$2;function y(){return p=s*u,g=s*h,i=o=null,v}function v(r){var n=r[0]*p,a=r[1]*g;if(d){var i=a*t-n*e;n=n*t+a*e,a=i}return[n+l,a+c]}return v.invert=function(r){var n=r[0]-l,a=r[1]-c;if(d){var i=a*t+n*e;n=n*t-a*e,a=i}return[n/p,a/g]},v.stream=function(t){return i&&o===t?i:i=m(b(o=t))},v.postclip=function(t){return arguments.length?(b=t,f=r=n=a=null,y()):b},v.clipExtent=function(t){return arguments.length?(b=null==t?(f=r=n=a=null,identity$2):clipRectangle(f=+t[0][0],r=+t[0][1],n=+t[1][0],a=+t[1][1]),y()):null==f?null:[[f,r],[n,a]]},v.scale=function(t){return arguments.length?(s=+t,y()):s},v.translate=function(t){return arguments.length?(l=+t[0],c=+t[1],y()):[l,c]},v.angle=function(r){return arguments.length?(e=sin(d=r%360*radians),t=cos(d),y()):d*degrees},v.reflectX=function(t){return arguments.length?(u=t?-1:1,y()):u<0},v.reflectY=function(t){return arguments.length?(h=t?-1:1,y()):h<0},v.fitExtent=function(t,e){return fitExtent(v,t,e)},v.fitSize=function(t,e){return fitSize(v,t,e)},v.fitWidth=function(t,e){return fitWidth(v,t,e)},v.fitHeight=function(t,e){return fitHeight(v,t,e)},v}function initRange(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function constants(t){return function(){return t}}function number(t){return+t}PathString.prototype={_radius:4.5,_circle:circle(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._string.push("M",t,",",e),this._point=1;break;case 1:this._string.push("L",t,",",e);break;default:null==this._circle&&(this._circle=circle(this._radius)),this._string.push("M",t,",",e,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},TransformStream.prototype={constructor:TransformStream,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var unit=[0,1];function identity(t){return t}function normalize(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:constants(isNaN(e)?NaN:.5)}function clamper(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}function bimap(t,e,r){var n=t[0],a=t[1],i=e[0],o=e[1];return a<n?(n=normalize(a,n),i=r(o,i)):(n=normalize(n,a),i=r(i,o)),function(t){return i(n(t))}}function polymap(t,e,r){var n=Math.min(t.length,e.length)-1,a=new Array(n),i=new Array(n),o=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<n;)a[o]=normalize(t[o],t[o+1]),i[o]=r(e[o],e[o+1]);return function(e){var r=bisect(t,e,1,n)-1;return i[r](a[r](e))}}function copy(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer(){var t,e,r,n,a,i,o=unit,s=unit,l=interpolate$1,c=identity;function u(){var t=Math.min(o.length,s.length);return c!==identity&&(c=clamper(o[0],o[t-1])),n=t>2?polymap:bimap,a=i=null,h}function h(e){return null==e||isNaN(e=+e)?r:(a||(a=n(o.map(t),s,l)))(t(c(e)))}return h.invert=function(r){return c(e((i||(i=n(s,o.map(t),interpolateNumber)))(r)))},h.domain=function(t){return arguments.length?(o=Array.from(t,number),u()):o.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),l=interpolateRound,u()},h.clamp=function(t){return arguments.length?(c=!!t||identity,u()):c!==identity},h.interpolate=function(t){return arguments.length?(l=t,u()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,u()}}function continuous(){return transformer()(identity,identity)}function tickFormat(t,e,r,n){var a,i=tickStep(t,e,r);switch((n=formatSpecifier(null==n?",f":n)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(a=precisionPrefix(i,o))||(n.precision=a),formatPrefix(n,o);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(a=precisionRound(i,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=a-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(a=precisionFixed(i))||(n.precision=a-2*("%"===n.type))}return format(n)}function linearish(t){var e=t.domain;return t.ticks=function(t){var r=e();return ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return tickFormat(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,a,i=e(),o=0,s=i.length-1,l=i[o],c=i[s],u=10;for(c<l&&(a=l,l=c,c=a,a=o,o=s,s=a);u-- >0;){if((a=tickIncrement(l,c,r))===n)return i[o]=l,i[s]=c,e(i);if(a>0)l=Math.floor(l/a)*a,c=Math.ceil(c/a)*a;else{if(!(a<0))break;l=Math.ceil(l*a)/a,c=Math.floor(c*a)/a}n=a}return t},t}function linear(){var t=continuous();return t.copy=function(){return copy(t,linear())},initRange.apply(t,arguments),linearish(t)}function colors(t){for(var e=t.length/6|0,r=new Array(e),n=0;n<e;)r[n]="#"+t.slice(6*n,6*++n);return r}var Set1=colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");function constant(t){return function(){return t}}function array(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Linear(t){this._context=t}function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function line(t,e){var r=constant(!0),n=null,a=curveLinear,i=null;function o(o){var s,l,c,u=(o=array(o)).length,h=!1;for(null==n&&(i=a(c=path())),s=0;s<=u;++s)!(s<u&&r(l=o[s],s,o))===h&&((h=!h)?i.lineStart():i.lineEnd()),h&&i.point(+t(l,s,o),+e(l,s,o));if(c)return i=null,c+""||null}return t="function"==typeof t?t:void 0===t?x:constant(t),e="function"==typeof e?e:void 0===e?y:constant(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:constant(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:constant(!!t),o):r},o.curve=function(t){return arguments.length?(a=t,null!=n&&(i=a(n)),o):a},o.context=function(t){return arguments.length?(null==t?n=i=null:i=a(n=t),o):n},o}Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};let _t$m,_t2$k,_t3$a,_t4$a,_t5$a,_t6$a,_t7$a,_t8$8,_t9$8,_$m=t=>t;class DecidablesElement extends s{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}firstUpdated(t){super.firstUpdated(t),select(this.renderRoot.host).classed("keyboard",!0).on("mousemove.keyboard touchstart.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!1).on("mousemove.keyboard touchstart.keyboard",null)})).on("keydown.keyboard",(t=>{select(t.currentTarget.renderRoot.host).classed("keyboard",!0).on("keydown.keyboard mousemove.keyboard touchstart.keyboard",null)}))}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=interpolateRgb(t,"#ffffff")(.75),e.light50=interpolateRgb(t,"#ffffff")(.5),e.light25=interpolateRgb(t,"#ffffff")(.25),e.grey=t,e.dark25=interpolateRgb(t,"#000000")(.25),e.dark50=interpolateRgb(t,"#000000")(.5),e.dark75=interpolateRgb(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1,r=!1){const n=this.shadows.opacityUmbra+this.shadows.opacityBoost,a=this.shadows.opacityPenumbra+this.shadows.opacityBoost,i=this.shadows.opacityAmbient+this.shadows.opacityBoost,o=r?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,s=r?`rgba(${this.shadows.inverseBaselineColorString}, ${a})`:`rgba(${this.shadows.baselineColorString}, ${a})`,l=r?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,c=this.shadows.mapUmbra[t],u=this.shadows.mapPenumbra[t],h=this.shadows.mapAmbient[t];return`${e?`${-c.y}px ${c.y/2}px ${c.b}px ${c.s}px`:`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${o}, ${e?`${-u.y}px ${u.y/2}px ${u.b}px ${u.s}px`:`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${s}, ${e?`${-h.y}px ${h.y/2}px ${h.b}px ${h.s}px`:`${h.y/2}px ${h.y}px ${h.b}px ${h.s}px`} ${l}`}static get svgFilters(){const t=DecidablesElement.shadows,e=t.elevations.map((e=>y$1(_t$m||(_t$m=_$m`
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
        </filter>`),`shadow-${e}`,t.mapUmbra[e].y/2,t.mapUmbra[e].y,t.mapPenumbra[e].y/2,t.mapPenumbra[e].y,t.mapAmbient[e].y/2,t.mapAmbient[e].y,0===t.mapUmbra[e].s?y$1(_t2$k||(_t2$k=_$m``)):y$1(_t3$a||(_t3$a=_$m`<feMorphology in="offU" result="spreadU" operator=${0} radius=${0} />`),t.mapUmbra[e].s>0?"dilate":"erode",Math.abs(t.mapUmbra[e].s)),0===t.mapPenumbra[e].s?y$1(_t4$a||(_t4$a=_$m``)):y$1(_t5$a||(_t5$a=_$m`<feMorphology in="offP" result="spreadP" operator=${0} radius=${0} />`),t.mapPenumbra[e].s>0?"dilate":"erode",Math.abs(t.mapPenumbra[e].s)),0===t.mapAmbient[e].s?y$1(_t6$a||(_t6$a=_$m``)):y$1(_t7$a||(_t7$a=_$m`<feMorphology in="offA" result="spreadA" operator=${0} radius=${0} />`),t.mapAmbient[e].s>0?"dilate":"erode",Math.abs(t.mapAmbient[e].s)),0===t.mapUmbra[e].s?"offU":"spreadU",t.mapUmbra[e].b/2,0===t.mapPenumbra[e].s?"offP":"spreadP",t.mapPenumbra[e].b/2,0===t.mapAmbient[e].s?"offA":"spreadA",t.mapAmbient[e].b/2,t.baselineColor,t.opacityUmbra+t.opacityBoost,t.baselineColor,t.opacityPenumbra+t.opacityBoost,t.baselineColor,t.opacityAmbient+t.opacityBoost)));return y$1(_t8$8||(_t8$8=_$m`
      <svg class="defs">
        <defs>
          ${0}
        </defs>
      </svg>
    `),e)}static get styles(){return r$2(_t9$8||(_t9$8=_$m`
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
    `),o$3(this.cssBoxShadow(0)),o$3(this.cssBoxShadow(2)),o$3(this.cssBoxShadow(4)),o$3(this.cssBoxShadow(8)),o$3(this.greys.white),o$3(this.greys.light75),o$3(this.greys.dark75),o$3(this.greys.white),o$3(this.greys.dark25),o$3(this.greys.light75),o$3(this.greys.light50),o$3(this.greys.dark25),o$3(this.greys.grey),o$3(this.greys.dark50),o$3(this.greys.dark75))}}let _t$l,_t2$j,_$l=t=>t;class DecidablesButton extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,r$2(_t$l||(_t$l=_$l`
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
      `))]}render(){return $(_t2$j||(_t2$j=_$l`
      <button ?disabled=${0}>
        <slot></slot>
      </button>
    `),this.disabled)}}customElements.define("decidables-button",DecidablesButton);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l=t=>null!=t?t:w;let _t$k,_t2$i,_$k=t=>t;class DecidablesSlider extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}changed(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,r$2(_t$k||(_t$k=_$k`
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
      `),o$3(this.cssBoxShadow(2,!0,!1)),o$3(this.cssBoxShadow(4,!0,!1)),o$3(this.cssBoxShadow(8,!0,!1)))]}render(){return $(_t2$i||(_t2$i=_$k`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input type="range" id="slider" min=${0} max=${0} step=${0} .value=${0} @change=${0} @input=${0}>
      </div>
      <decidables-spinner min=${0} max=${0} step=${0} .value=${0} @input=${0}></decidables-spinner>
    `),l(this.min),l(this.max),l(this.step),this.value,this.changed.bind(this),this.inputted.bind(this),l(this.min),l(this.max),l(this.step),this.value,this.inputted.bind(this))}}customElements.define("decidables-slider",DecidablesSlider);let _t$j,_t2$h,_$j=t=>t;class DecidablesSpinner extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,r$2(_t$j||(_t$j=_$j`
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
      `))]}render(){return $(_t2$h||(_t2$h=_$j`
      <label>
        <slot></slot>
        <input ?disabled=${0} type="number" min=${0} max=${0} step=${0} .value=${0} @input=${0}>
      </label>
    `),this.disabled,l(this.min),l(this.max),l(this.step),this.value,this.inputted.bind(this))}}customElements.define("decidables-spinner",DecidablesSpinner);let _t$i,_t2$g,_$i=t=>t;class DecidablesSwitch extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,r$2(_t$i||(_t$i=_$i`
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
      `))]}render(){return $(_t2$g||(_t2$g=_$i`
      <input type="checkbox" id="switch" ?checked=${0} ?disabled=${0} @change=${0}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `),this.checked,this.disabled,this.changed.bind(this))}}customElements.define("decidables-switch",DecidablesSwitch);let _t$h,_t2$f,_$h=t=>t;class DecidablesToggle extends DecidablesElement{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,r$2(_t$h||(_t$h=_$h`
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
      `))]}render(){return $(_t2$f||(_t2$f=_$h`
      <fieldset ?disabled=${0}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `),this.disabled)}}customElements.define("decidables-toggle",DecidablesToggle);let _t$g,_t2$e,_$g=t=>t;class DecidablesToggleOption extends DecidablesElement{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,r$2(_t$g||(_t$g=_$g`
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
      `))]}render(){return $(_t2$e||(_t2$e=_$g`
      <input type="radio" id="toggle-option" name=${0} value=${0} .checked=${0} @change=${0}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `),this.name,this.value,this.checked,this.changed.bind(this))}}customElements.define("decidables-toggle-option",DecidablesToggleOption);const DecidablesConverterSet={fromAttribute:t=>new Set(t.split(/\s+/)),toAttribute:t=>t.size?[...t].join(" "):null};let _t$f,_$f=t=>t;class DetectableElement extends DecidablesElement{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return{h:Set1[2],m:Set1[4],fa:Set1[1],cr:Set1[0],hr:Set1[5],far:Set1[3],acc:Set1[8],d:Set1[7],c:Set1[6],s:"#4545d0",present:"#f032e6",absent:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"}}static get lights(){return Object.keys(DetectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DetectableElement.colors[e],"#ffffff")(.5),t)),{})}static get darks(){return Object.keys(DetectableElement.colors).reduce(((t,e)=>(t[e]=interpolateRgb(DetectableElement.colors[e],"#000000")(.5),t)),{})}static get styles(){return[super.styles,r$2(_t$f||(_t$f=_$f`
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
      `),o$3(this.colors.h),o$3(this.colors.m),o$3(this.colors.fa),o$3(this.colors.cr),o$3(this.colors.hr),o$3(this.colors.far),o$3(this.colors.acc),o$3(this.colors.d),o$3(this.colors.c),o$3(this.colors.s),o$3(this.colors.present),o$3(this.colors.absent),o$3(this.colors.correct),o$3(this.colors.error),o$3(this.colors.nr),o$3(this.lights.h),o$3(this.lights.m),o$3(this.lights.fa),o$3(this.lights.cr),o$3(this.lights.hr),o$3(this.lights.far),o$3(this.lights.acc),o$3(this.lights.d),o$3(this.lights.c),o$3(this.lights.s),o$3(this.lights.present),o$3(this.lights.absent),o$3(this.lights.correct),o$3(this.lights.error),o$3(this.lights.nr),o$3(this.darks.h),o$3(this.darks.m),o$3(this.darks.fa),o$3(this.darks.cr),o$3(this.darks.hr),o$3(this.darks.far),o$3(this.darks.acc),o$3(this.darks.d),o$3(this.darks.c),o$3(this.darks.s),o$3(this.darks.present),o$3(this.darks.absent),o$3(this.darks.correct),o$3(this.darks.error),o$3(this.darks.nr))]}}let _t$e,_t2$d,_$e=t=>t;class RDKTask extends DetectableElement{static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},direction:{attribute:!1,type:Number,reflect:!1},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1},width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.direction=-1,this.lifetime=400,this.speed=50,this.width=NaN,this.height=NaN,this.rem=NaN,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.currentDirection=void 0,this.signals=["present","absent"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,r$2(_t$e||(_t$e=_$e`
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
      `))]}render(){return $(_t2$d||(_t2$d=_$e``))}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.getDimensions.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.getDimensions.bind(this)),super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this.getDimensions()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),a=.25*this.rem,i=.25*this.rem,o=.25*this.rem,s=n-(a+i),l=n-(o+.25*this.rem);this.xScale=linear().domain([-1,1]).range([0,l]),this.yScale=linear().domain([1,-1]).range([0,s]);const c=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),f=h.select(".plot").attr("transform",`translate(${o}, ${a})`),p=d.append("g").classed("underlayer",!0),g=f.select(".underlayer");p.append("circle").classed("background",!0),g.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");f.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",((t,e)=>e===this.COHERENT)).classed("random",((t,e)=>e===this.RANDOM));const m=d.append("g").classed("overlayer",!0),b=f.select(".overlayer");m.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=now()-this.pauseTime,this.pauseTime=0),this.runner=interval(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=now())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=select(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data((t=>t));t.exit().remove();select(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();select(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=now(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let a=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(a=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"present":"absent",this.currentDirection="absent"===this.signal?void 0:this.direction>=0?this.direction:360*Math.random(),this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length="present"===this.signal?Math.round(this.count*this.coherence):0,this.dots[this.RANDOM].length="present"===this.signal?this.count-this.dots[this.COHERENT].length:this.count;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const i=void 0===this.dots[t][r];i&&(this.dots[t][r]={});const o=this.dots[t][r];if(a||i){o.direction=t===this.RANDOM?360*Math.random():this.currentDirection,o.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());o.x=this.xScale(n*Math.cos(r)),o.y=this.yScale(n*Math.sin(r))}else if(e>o.birth+this.lifetime){o.birth+=this.lifetime,o.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());o.x=this.xScale(r*Math.cos(e)),o.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(o.direction=this.currentDirection);const e=o.direction*(Math.PI/180);o.dx=this.speed*(n/1e3)*Math.cos(e),o.dy=this.speed*(n/1e3)*Math.sin(e),o.x+=o.dx,o.y+=o.dy;(o.x-this.xScale(0))**2+(o.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(o.x=-(o.x-this.xScale(0))+this.xScale(0),o.y=-(o.y-this.yScale(0))+this.yScale(0))}}}const i=select(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),o=i.enter().append("g").classed("fixation",!0);o.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),o.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),i.exit().remove();const s=select(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data((t=>t));s.enter().append("circle").classed("dot",!0).merge(s).attr("cx",(t=>t.x)).attr("cy",(t=>t.y)),s.exit().remove();const l=select(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}customElements.define("rdk-task",RDKTask);var jstat=createCommonjsModule((function(t,e){var r;t.exports=(r=function(t,e){var r=Array.prototype.concat,n=Array.prototype.slice,a=Object.prototype.toString;function i(e,r){var n=e>r?e:r;return t.pow(10,17-~~(t.log(n>0?n:-n)*t.LOG10E))}var o=Array.isArray||function(t){return"[object Array]"===a.call(t)};function s(t){return"[object Function]"===a.call(t)}function l(t){return"number"==typeof t&&t-t==0}function c(t){return r.apply([],t)}function u(){return new u._init(arguments)}function h(){return 0}function d(){return 1}function f(t,e){return t===e?1:0}u.fn=u.prototype,u._init=function(t){if(o(t[0]))if(o(t[0][0])){s(t[1])&&(t[0]=u.map(t[0],t[1]));for(var e=0;e<t[0].length;e++)this[e]=t[0][e];this.length=t[0].length}else this[0]=s(t[1])?u.map(t[0],t[1]):t[0],this.length=1;else if(l(t[0]))this[0]=u.seq.apply(null,t),this.length=1;else{if(t[0]instanceof u)return u(t[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:i,isArray:o,isFunction:s,isNumber:l,toVector:c},u._random_fn=t.random,u.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");u._random_fn=t},u.extend=function(t){var e,r;if(1===arguments.length){for(r in t)u[r]=t[r];return this}for(e=1;e<arguments.length;e++)for(r in arguments[e])t[r]=arguments[e][r];return t},u.rows=function(t){return t.length||1},u.cols=function(t){return t[0].length||1},u.dimensions=function(t){return{rows:u.rows(t),cols:u.cols(t)}},u.row=function(t,e){return o(e)?e.map((function(e){return u.row(t,e)})):t[e]},u.rowa=function(t,e){return u.row(t,e)},u.col=function(t,e){if(o(e)){var r=u.arange(t.length).map((function(){return new Array(e.length)}));return e.forEach((function(e,n){u.arange(t.length).forEach((function(a){r[a][n]=t[a][e]}))})),r}for(var n=new Array(t.length),a=0;a<t.length;a++)n[a]=[t[a][e]];return n},u.cola=function(t,e){return u.col(t,e).map((function(t){return t[0]}))},u.diag=function(t){for(var e=u.rows(t),r=new Array(e),n=0;n<e;n++)r[n]=[t[n][n]];return r},u.antidiag=function(t){for(var e=u.rows(t)-1,r=new Array(e),n=0;e>=0;e--,n++)r[n]=[t[n][e]];return r},u.transpose=function(t){var e,r,n,a,i,s=[];for(o(t[0])||(t=[t]),r=t.length,n=t[0].length,i=0;i<n;i++){for(e=new Array(r),a=0;a<r;a++)e[a]=t[a][i];s.push(e)}return 1===s.length?s[0]:s},u.map=function(t,e,r){var n,a,i,s,l;for(o(t[0])||(t=[t]),a=t.length,i=t[0].length,s=r?t:new Array(a),n=0;n<a;n++)for(s[n]||(s[n]=new Array(i)),l=0;l<i;l++)s[n][l]=e(t[n][l],n,l);return 1===s.length?s[0]:s},u.cumreduce=function(t,e,r){var n,a,i,s,l;for(o(t[0])||(t=[t]),a=t.length,i=t[0].length,s=r?t:new Array(a),n=0;n<a;n++)for(s[n]||(s[n]=new Array(i)),i>0&&(s[n][0]=t[n][0]),l=1;l<i;l++)s[n][l]=e(s[n][l-1],t[n][l]);return 1===s.length?s[0]:s},u.alter=function(t,e){return u.map(t,e,!0)},u.create=function(t,e,r){var n,a,i=new Array(t);for(s(e)&&(r=e,e=t),n=0;n<t;n++)for(i[n]=new Array(e),a=0;a<e;a++)i[n][a]=r(n,a);return i},u.zeros=function(t,e){return l(e)||(e=t),u.create(t,e,h)},u.ones=function(t,e){return l(e)||(e=t),u.create(t,e,d)},u.rand=function(t,e){return l(e)||(e=t),u.create(t,e,u._random_fn)},u.identity=function(t,e){return l(e)||(e=t),u.create(t,e,f)},u.symmetric=function(t){var e,r,n=t.length;if(t.length!==t[0].length)return!1;for(e=0;e<n;e++)for(r=0;r<n;r++)if(t[r][e]!==t[e][r])return!1;return!0},u.clear=function(t){return u.alter(t,h)},u.seq=function(t,e,r,n){s(n)||(n=!1);var a,o=[],l=i(t,e),c=(e*l-t*l)/((r-1)*l),u=t;for(a=0;u<=e&&a<r;u=(t*l+c*l*++a)/l)o.push(n?n(u,a):u);return o},u.arange=function(t,r,n){var a,i=[];if(n=n||1,r===e&&(r=t,t=0),t===r||0===n)return[];if(t<r&&n<0)return[];if(t>r&&n>0)return[];if(n>0)for(a=t;a<r;a+=n)i.push(a);else for(a=t;a>r;a+=n)i.push(a);return i},u.slice=function(){function t(t,r,n,a){var i,o=[],s=t.length;if(r===e&&n===e&&a===e)return u.copy(t);if(a=a||1,(r=(r=r||0)>=0?r:s+r)===(n=(n=n||t.length)>=0?n:s+n)||0===a)return[];if(r<n&&a<0)return[];if(r>n&&a>0)return[];if(a>0)for(i=r;i<n;i+=a)o.push(t[i]);else for(i=r;i>n;i+=a)o.push(t[i]);return o}function r(e,r){var n,a;return l((r=r||{}).row)?l(r.col)?e[r.row][r.col]:t(u.rowa(e,r.row),(n=r.col||{}).start,n.end,n.step):l(r.col)?t(u.cola(e,r.col),(a=r.row||{}).start,a.end,a.step):(a=r.row||{},n=r.col||{},t(e,a.start,a.end,a.step).map((function(e){return t(e,n.start,n.end,n.step)})))}return r}(),u.sliceAssign=function(r,n,a){var i,o;if(l(n.row)){if(l(n.col))return r[n.row][n.col]=a;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,i=u.arange(n.col.start,t.min(r.length,n.col.end),n.col.step);var s=n.row;return i.forEach((function(t,e){r[s][t]=a[e]})),r}if(l(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,o=u.arange(n.row.start,t.min(r[0].length,n.row.end),n.row.step);var c=n.col;return o.forEach((function(t,e){r[t][c]=a[e]})),r}return a[0].length===e&&(a=[a]),n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,o=u.arange(n.row.start,t.min(r.length,n.row.end),n.row.step),i=u.arange(n.col.start,t.min(r[0].length,n.col.end),n.col.step),o.forEach((function(t,e){i.forEach((function(n,i){r[t][n]=a[e][i]}))})),r},u.diagonal=function(t){var e=u.zeros(t.length,t.length);return t.forEach((function(t,r){e[r][r]=t})),e},u.copy=function(t){return t.map((function(t){return l(t)?t:t.map((function(t){return t}))}))};var p=u.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},p.map=function(t,e){return u(u.map(this,t,e))},p.cumreduce=function(t,e){return u(u.cumreduce(this,t,e))},p.alter=function(t){return u.alter(this,t),this},function(t){for(var e=0;e<t.length;e++)!function(t){p[t]=function(e){var r,n=this;return e?(setTimeout((function(){e.call(n,p[t].call(n))})),this):(r=u[t](this),o(r)?u(r):r)}}(t[e])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var e=0;e<t.length;e++)!function(t){p[t]=function(e,r){var n=this;return r?(setTimeout((function(){r.call(n,p[t].call(n,e))})),this):u(u[t](this,e))}}(t[e])}("row col".split(" ")),function(t){for(var e=0;e<t.length;e++)!function(t){p[t]=function(){return u(u[t].apply(null,arguments))}}(t[e])}("create zeros ones rand identity".split(" ")),u}(Math),function(t,e){var r=t.utils.isFunction;function n(t,e){return t-e}function a(t,r,n){return e.max(r,e.min(t,n))}t.sum=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.sumsqrd=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r]*t[r];return e},t.sumsqerr=function(e){for(var r,n=t.mean(e),a=0,i=e.length;--i>=0;)a+=(r=e[i]-n)*r;return a},t.sumrow=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.product=function(t){for(var e=1,r=t.length;--r>=0;)e*=t[r];return e},t.min=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]<e&&(e=t[r]);return e},t.max=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]>e&&(e=t[r]);return e},t.unique=function(t){for(var e={},r=[],n=0;n<t.length;n++)e[t[n]]||(e[t[n]]=!0,r.push(t[n]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(r){return e.pow(t.product(r),1/r.length)},t.median=function(t){var e=t.length,r=t.slice().sort(n);return 1&e?r[e/2|0]:(r[e/2-1]+r[e/2])/2},t.cumsum=function(e){return t.cumreduce(e,(function(t,e){return t+e}))},t.cumprod=function(e){return t.cumreduce(e,(function(t,e){return t*e}))},t.diff=function(t){var e,r=[],n=t.length;for(e=1;e<n;e++)r.push(t[e]-t[e-1]);return r},t.rank=function(t){var e,r=[],a={};for(e=0;e<t.length;e++)a[l=t[e]]?a[l]++:(a[l]=1,r.push(l));var i=r.sort(n),o={},s=1;for(e=0;e<i.length;e++){var l,c=a[l=i[e]],u=(s+(s+c-1))/2;o[l]=u,s+=c}return t.map((function(t){return o[t]}))},t.mode=function(t){var e,r=t.length,a=t.slice().sort(n),i=1,o=0,s=0,l=[];for(e=0;e<r;e++)a[e]===a[e+1]?i++:(i>o?(l=[a[e]],o=i,s=0):i===o&&(l.push(a[e]),s++),i=1);return 0===s?l[0]:l},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,r){return t.sumsqerr(e)/(e.length-(r?1:0))},t.pooledvariance=function(e){var r=e.reduce((function(e,r){return e+t.sumsqerr(r)}),0),n=e.reduce((function(t,e){return t+e.length}),0);return r/(n-e.length)},t.deviation=function(e){for(var r=t.mean(e),n=e.length,a=new Array(n),i=0;i<n;i++)a[i]=e[i]-r;return a},t.stdev=function(r,n){return e.sqrt(t.variance(r,n))},t.pooledstdev=function(r){return e.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var n=t.mean(r),a=[],i=r.length-1;i>=0;i--)a.push(e.abs(r[i]-n));return t.mean(a)},t.meddev=function(r){for(var n=t.median(r),a=[],i=r.length-1;i>=0;i--)a.push(e.abs(r[i]-n));return t.median(a)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(t){var r=t.length,a=t.slice().sort(n);return[a[e.round(r/4)-1],a[e.round(r/2)-1],a[e.round(3*r/4)-1]]},t.quantiles=function(t,r,i,o){var s,l,c,u,h,d=t.slice().sort(n),f=[r.length],p=t.length;for(void 0===i&&(i=3/8),void 0===o&&(o=3/8),s=0;s<r.length;s++)c=p*(l=r[s])+(i+l*(1-i-o)),u=e.floor(a(c,1,p-1)),h=a(c-u,0,1),f[s]=(1-h)*d[u-1]+h*d[u];return f},t.percentile=function(t,e,r){var a=t.slice().sort(n),i=e*(a.length+(r?1:-1))+(r?0:1),o=parseInt(i),s=i-o;return o+1<a.length?a[o-1]+s*(a[o]-a[o-1]):a[o-1]},t.percentileOfScore=function(t,e,r){var n,a,i=0,o=t.length,s=!1;for("strict"===r&&(s=!0),a=0;a<o;a++)n=t[a],(s&&n<e||!s&&n<=e)&&i++;return i/o},t.histogram=function(r,n){n=n||4;var a,i=t.min(r),o=(t.max(r)-i)/n,s=r.length,l=[];for(a=0;a<n;a++)l[a]=0;for(a=0;a<s;a++)l[e.min(e.floor((r[a]-i)/o),n-1)]+=1;return l},t.covariance=function(e,r){var n,a=t.mean(e),i=t.mean(r),o=e.length,s=new Array(o);for(n=0;n<o;n++)s[n]=(e[n]-a)*(r[n]-i);return t.sum(s)/(o-1)},t.corrcoeff=function(e,r){return t.covariance(e,r)/t.stdev(e,1)/t.stdev(r,1)},t.spearmancoeff=function(e,r){return e=t.rank(e),r=t.rank(r),t.corrcoeff(e,r)},t.stanMoment=function(r,n){for(var a=t.mean(r),i=t.stdev(r),o=r.length,s=0,l=0;l<o;l++)s+=e.pow((r[l]-a)/i,n);return s/r.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var i=t.prototype;!function(e){for(var n=0;n<e.length;n++)!function(e){i[e]=function(n,a){var o=[],s=0,l=this;if(r(n)&&(a=n,n=!1),a)return setTimeout((function(){a.call(l,i[e].call(l,n))})),this;if(this.length>1){for(l=!0===n?this:this.transpose();s<l.length;s++)o[s]=t[e](l[s]);return o}return t[e](this[0],n)}}(e[n])}("cumsum cumprod".split(" ")),function(e){for(var n=0;n<e.length;n++)!function(e){i[e]=function(n,a){var o=[],s=0,l=this;if(r(n)&&(a=n,n=!1),a)return setTimeout((function(){a.call(l,i[e].call(l,n))})),this;if(this.length>1){for("sumrow"!==e&&(l=!0===n?this:this.transpose());s<l.length;s++)o[s]=t[e](l[s]);return!0===n?t[e](t.utils.toVector(o)):o}return t[e](this[0],n)}}(e[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(e){for(var n=0;n<e.length;n++)!function(e){i[e]=function(){var n,a=[],o=0,s=this,l=Array.prototype.slice.call(arguments);if(r(l[l.length-1])){n=l[l.length-1];var c=l.slice(0,l.length-1);return setTimeout((function(){n.call(s,i[e].apply(s,c))})),this}n=void 0;var u=function(r){return t[e].apply(s,[r].concat(l))};if(this.length>1){for(s=s.transpose();o<s.length;o++)a[o]=u(s[o]);return a}return u(this[0])}}(e[n])}("quantiles percentileOfScore".split(" "))}(r,Math),function(t,e){t.gammaln=function(t){var r,n,a,i=0,o=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015;for(a=(n=r=t)+5.5,a-=(r+.5)*e.log(a);i<6;i++)s+=o[i]/++n;return e.log(2.5066282746310007*s/r)-a},t.loggam=function(t){var r,n,a,i,o,s,l,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,l=0,1==t||2==t)return 0;for(t<=7&&(r=t+(l=e.floor(7-t))),n=1/(r*r),a=2*e.PI,o=c[9],s=8;s>=0;s--)o*=n,o+=c[s];if(i=o/r+.5*e.log(a)+(r-.5)*e.log(r)-r,t<=7)for(s=1;s<=l;s++)i-=e.log(r-1),r-=1;return i},t.gammafn=function(t){var r,n,a,i,o=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],s=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,c=0,u=0,h=0,d=t;if(t>171.6243769536076)return 1/0;if(d<=0){if(!(i=d%1+36e-17))return 1/0;l=(1&d?-1:1)*e.PI/e.sin(e.PI*i),d=1-d}for(a=d,n=d<1?d++:(d-=c=(0|d)-1)-1,r=0;r<8;++r)h=(h+o[r])*n,u=u*n+s[r];if(i=h/u+1,a<d)i/=a;else if(a>d)for(r=0;r<c;++r)i*=d,d++;return l&&(i=l/i),i},t.gammap=function(e,r){return t.lowRegGamma(e,r)*t.gammafn(e)},t.lowRegGamma=function(r,n){var a,i=t.gammaln(r),o=r,s=1/r,l=s,c=n+1-r,u=1/1e-30,h=1/c,d=h,f=1,p=-~(8.5*e.log(r>=1?r:1/r)+.4*r+17);if(n<0||r<=0)return NaN;if(n<r+1){for(;f<=p;f++)s+=l*=n/++o;return s*e.exp(-n+r*e.log(n)-i)}for(;f<=p;f++)d*=(h=1/(h=(a=-f*(f-r))*h+(c+=2)))*(u=c+a/u);return 1-d*e.exp(-n+r*e.log(n)-i)},t.factorialln=function(e){return e<0?NaN:t.gammaln(e+1)},t.factorial=function(e){return e<0?NaN:t.gammafn(e+1)},t.combination=function(r,n){return r>170||n>170?e.exp(t.combinationln(r,n)):t.factorial(r)/t.factorial(n)/t.factorial(r-n)},t.combinationln=function(e,r){return t.factorialln(e)-t.factorialln(r)-t.factorialln(e-r)},t.permutation=function(e,r){return t.factorial(e)/t.factorial(e-r)},t.betafn=function(r,n){if(!(r<=0||n<=0))return r+n>170?e.exp(t.betaln(r,n)):t.gammafn(r)*t.gammafn(n)/t.gammafn(r+n)},t.betaln=function(e,r){return t.gammaln(e)+t.gammaln(r)-t.gammaln(e+r)},t.betacf=function(t,r,n){var a,i,o,s,l=1e-30,c=1,u=r+n,h=r+1,d=r-1,f=1,p=1-u*t/h;for(e.abs(p)<l&&(p=l),s=p=1/p;c<=100&&(p=1+(i=c*(n-c)*t/((d+(a=2*c))*(r+a)))*p,e.abs(p)<l&&(p=l),f=1+i/f,e.abs(f)<l&&(f=l),s*=(p=1/p)*f,p=1+(i=-(r+c)*(u+c)*t/((r+a)*(h+a)))*p,e.abs(p)<l&&(p=l),f=1+i/f,e.abs(f)<l&&(f=l),s*=o=(p=1/p)*f,!(e.abs(o-1)<3e-7));c++);return s},t.gammapinv=function(r,n){var a,i,o,s,l,c,u=0,h=n-1,d=1e-8,f=t.gammaln(n);if(r>=1)return e.max(100,n+100*e.sqrt(n));if(r<=0)return 0;for(n>1?(l=e.log(h),c=e.exp(h*(l-1)-f),s=r<.5?r:1-r,a=(2.30753+.27061*(i=e.sqrt(-2*e.log(s))))/(1+i*(.99229+.04481*i))-i,r<.5&&(a=-a),a=e.max(.001,n*e.pow(1-1/(9*n)-a/(3*e.sqrt(n)),3))):a=r<(i=1-n*(.253+.12*n))?e.pow(r/i,1/n):1-e.log(1-(r-i)/(1-i));u<12;u++){if(a<=0)return 0;if((a-=i=(o=(t.lowRegGamma(n,a)-r)/(i=n>1?c*e.exp(-(a-h)+h*(e.log(a)-l)):e.exp(-a+h*e.log(a)-f)))/(1-.5*e.min(1,o*((n-1)/a-1))))<=0&&(a=.5*(a+i)),e.abs(i)<d*a)break}return a},t.erf=function(t){var r,n,a,i,o=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],s=o.length-1,l=!1,c=0,u=0;for(t<0&&(t=-t,l=!0),n=4*(r=2/(2+t))-2;s>0;s--)a=c,c=n*c-u+o[s],u=a;return i=r*e.exp(-t*t+.5*(o[0]+n*c)-u),l?i-1:1-i},t.erfc=function(e){return 1-t.erf(e)},t.erfcinv=function(r){var n,a,i,o,s=0;if(r>=2)return-100;if(r<=0)return 100;for(o=r<1?r:2-r,n=-.70711*((2.30753+.27061*(i=e.sqrt(-2*e.log(o/2))))/(1+i*(.99229+.04481*i))-i);s<2;s++)n+=(a=t.erfc(n)-o)/(1.1283791670955126*e.exp(-n*n)-n*a);return r<1?n:-n},t.ibetainv=function(r,n,a){var i,o,s,l,c,u,h,d,f,p,g=1e-8,m=n-1,b=a-1,y=0;if(r<=0)return 0;if(r>=1)return 1;for(n>=1&&a>=1?(s=r<.5?r:1-r,u=(2.30753+.27061*(l=e.sqrt(-2*e.log(s))))/(1+l*(.99229+.04481*l))-l,r<.5&&(u=-u),h=(u*u-3)/6,d=2/(1/(2*n-1)+1/(2*a-1)),f=u*e.sqrt(h+d)/d-(1/(2*a-1)-1/(2*n-1))*(h+5/6-2/(3*d)),u=n/(n+a*e.exp(2*f))):(i=e.log(n/(n+a)),o=e.log(a/(n+a)),u=r<(l=e.exp(n*i)/n)/(f=l+(c=e.exp(a*o)/a))?e.pow(n*f*r,1/n):1-e.pow(a*f*(1-r),1/a)),p=-t.gammaln(n)-t.gammaln(a)+t.gammaln(n+a);y<10;y++){if(0===u||1===u)return u;if((u-=l=(c=(t.ibeta(u,n,a)-r)/(l=e.exp(m*e.log(u)+b*e.log(1-u)+p)))/(1-.5*e.min(1,c*(m/u-b/(1-u)))))<=0&&(u=.5*(u+l)),u>=1&&(u=.5*(u+l+1)),e.abs(l)<g*u&&y>0)break}return u},t.ibeta=function(r,n,a){var i=0===r||1===r?0:e.exp(t.gammaln(n+a)-t.gammaln(n)-t.gammaln(a)+n*e.log(r)+a*e.log(1-r));return!(r<0||r>1)&&(r<(n+1)/(n+a+2)?i*t.betacf(r,n,a)/n:1-i*t.betacf(1-r,a,n)/a)},t.randn=function(r,n){var a,i,o,s,l;if(n||(n=r),r)return t.create(r,n,(function(){return t.randn()}));do{a=t._random_fn(),i=1.7156*(t._random_fn()-.5),l=(o=a-.449871)*o+(s=e.abs(i)+.386595)*(.196*s-.25472*o)}while(l>.27597&&(l>.27846||i*i>-4*e.log(a)*a*a));return i/a},t.randg=function(r,n,a){var i,o,s,l,c,u,h=r;if(a||(a=n),r||(r=1),n)return(u=t.zeros(n,a)).alter((function(){return t.randg(r)})),u;r<1&&(r+=1),i=r-1/3,o=1/e.sqrt(9*i);do{do{l=1+o*(c=t.randn())}while(l<=0);l*=l*l,s=t._random_fn()}while(s>1-.331*e.pow(c,4)&&e.log(s)>.5*c*c+i*(1-l+e.log(l)));if(r==h)return i*l;do{s=t._random_fn()}while(0===s);return e.pow(s,1/h)*i*l},function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(){return t(t.map(this,(function(r){return t[e](r)})))}}(e[r])}("gammaln gammafn factorial factorialln".split(" ")),function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(){return t(t[e].apply(null,arguments))}}(e[r])}("randn".split(" "))}(r,Math),function(t,e){function r(t,r,n,a){for(var i,o=0,s=1,l=1,c=1,u=0,h=0;e.abs((l-h)/l)>a;)h=l,s=c+(i=-(r+u)*(r+n+u)*t/(r+2*u)/(r+2*u+1))*s,l=(o=l+i*o)+(i=(u+=1)*(n-u)*t/(r+2*u-1)/(r+2*u))*l,o/=c=s+i*c,s/=c,l/=c,c=1;return l/r}function n(t){return t/e.abs(t)}function a(r,n,a){var i=12,o=6,s=-30,l=-50,c=60,u=8,h=3,d=2,f=3,p=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],g=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],m=.5*r;if(m>=u)return 1;var b,y=2*t.normal.cdf(m,0,1,1,0)-1;y=y>=e.exp(l/a)?e.pow(y,a):0;for(var v=m,$=(u-m)/(b=r>h?d:f),_=v+$,S=0,E=a-1,T=1;T<=b;T++){for(var w=0,A=.5*(_+v),x=.5*(_-v),R=1;R<=i;R++){var C,O=A+x*(o<R?p[(C=i-R+1)-1]:-p[(C=R)-1]),P=O*O;if(P>c)break;var I=2*t.normal.cdf(O,0,1,1,0)*.5-2*t.normal.cdf(O,r,1,1,0)*.5;I>=e.exp(s/E)&&(w+=I=g[C-1]*e.exp(-.5*P)*e.pow(I,E))}S+=w*=2*x*a/e.sqrt(2*e.PI),v=_,_+=$}return(y+=S)<=e.exp(s/n)?0:(y=e.pow(y,n))>=1?1:y}function i(t,r,n){var a=.322232421088,i=.099348462606,o=-1,s=.588581570495,l=-.342242088547,c=.531103462366,u=-.204231210125,h=.10353775285,d=-453642210148e-16,f=.0038560700634,p=.8832,g=.2368,m=1.214,b=1.208,y=1.4142,v=120,$=.5-.5*t,_=e.sqrt(e.log(1/($*$))),S=_+((((_*d+u)*_+l)*_+o)*_+a)/((((_*f+h)*_+c)*_+s)*_+i);n<v&&(S+=(S*S*S+S)/n/4);var E=p-g*S;return n<v&&(E+=-m/n+b*S/n),S*(E*e.log(r-1)+y)}!function(e){for(var r=0;r<e.length;r++)!function(e){t[e]=function t(e,r,n){return this instanceof t?(this._a=e,this._b=r,this._c=n,this):new t(e,r,n)},t.fn[e]=function(r,n,a){var i=t[e](r,n,a);return i.data=this,i},t[e].prototype.sample=function(r){var n=this._a,a=this._b,i=this._c;return r?t.alter(r,(function(){return t[e].sample(n,a,i)})):t[e].sample(n,a,i)},function(r){for(var n=0;n<r.length;n++)!function(r){t[e].prototype[r]=function(n){var a=this._a,i=this._b,o=this._c;return n||0===n||(n=this.data),"number"!=typeof n?t.fn.map.call(n,(function(n){return t[e][r](n,a,i,o)})):t[e][r](n,a,i,o)}}(r[n])}("pdf cdf inv".split(" ")),function(r){for(var n=0;n<r.length;n++)!function(r){t[e].prototype[r]=function(){return t[e][r](this._a,this._b,this._c)}}(r[n])}("mean median mode variance".split(" "))}(e[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,n,a){return r>1||r<0?0:1==n&&1==a?1:n<512&&a<512?e.pow(r,n-1)*e.pow(1-r,a-1)/t.betafn(n,a):e.exp((n-1)*e.log(r)+(a-1)*e.log(1-r)-t.betaln(n,a))},cdf:function(e,r,n){return e>1||e<0?1*(e>1):t.ibeta(e,r,n)},inv:function(e,r,n){return t.ibetainv(e,r,n)},mean:function(t,e){return t/(t+e)},median:function(e,r){return t.ibetainv(.5,e,r)},mode:function(t,e){return(t-1)/(t+e-2)},sample:function(e,r){var n=t.randg(e);return n/(n+t.randg(r))},variance:function(t,r){return t*r/(e.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,n,a){var i;return r<0?0:n<=2?0===r&&n<2?1/0:0===r&&2===n?1:1/t.betafn(n/2,a/2)*e.pow(n/a,n/2)*e.pow(r,n/2-1)*e.pow(1+n/a*r,-(n+a)/2):(i=n*r/(a+r*n),n*(a/(a+r*n))/2*t.binomial.pdf((n-2)/2,(n+a-2)/2,i))},cdf:function(e,r,n){return e<0?0:t.ibeta(r*e/(r*e+n),r/2,n/2)},inv:function(e,r,n){return n/(r*(1/t.ibetainv(e,r/2,n/2)-1))},mean:function(t,e){return e>2?e/(e-2):void 0},mode:function(t,e){return t>2?e*(t-2)/(t*(e+2)):void 0},sample:function(e,r){return 2*t.randg(e/2)/e/(2*t.randg(r/2)/r)},variance:function(t,e){if(!(e<=4))return 2*e*e*(t+e-2)/(t*(e-2)*(e-2)*(e-4))}}),t.extend(t.cauchy,{pdf:function(t,r,n){return n<0?0:n/(e.pow(t-r,2)+e.pow(n,2))/e.PI},cdf:function(t,r,n){return e.atan((t-r)/n)/e.PI+.5},inv:function(t,r,n){return r+n*e.tan(e.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,n){return t.randn()*e.sqrt(1/(2*t.randg(.5)))*n+r}}),t.extend(t.chisquare,{pdf:function(r,n){return r<0?0:0===r&&2===n?.5:e.exp((n/2-1)*e.log(r)-r/2-n/2*e.log(2)-t.gammaln(n/2))},cdf:function(e,r){return e<0?0:t.lowRegGamma(r/2,e/2)},inv:function(e,r){return 2*t.gammapinv(e,.5*r)},mean:function(t){return t},median:function(t){return t*e.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(e){return 2*t.randg(e/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*e.exp(-r*t)},cdf:function(t,r){return t<0?0:1-e.exp(-r*t)},inv:function(t,r){return-e.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*e.log(2)},mode:function(){return 0},sample:function(r){return-1/r*e.log(t._random_fn())},variance:function(t){return e.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,n,a){return r<0?0:0===r&&1===n?1/a:e.exp((n-1)*e.log(r)-r/a-t.gammaln(n)-n*e.log(a))},cdf:function(e,r,n){return e<0?0:t.lowRegGamma(r,e/n)},inv:function(e,r,n){return t.gammapinv(e,r)*n},mean:function(t,e){return t*e},mode:function(t,e){if(t>1)return(t-1)*e},sample:function(e,r){return t.randg(e)*r},variance:function(t,e){return t*e*e}}),t.extend(t.invgamma,{pdf:function(r,n,a){return r<=0?0:e.exp(-(n+1)*e.log(r)-a/r-t.gammaln(n)+n*e.log(a))},cdf:function(e,r,n){return e<=0?0:1-t.lowRegGamma(r,n/e)},inv:function(e,r,n){return n/t.gammapinv(1-e,r)},mean:function(t,e){return t>1?e/(t-1):void 0},mode:function(t,e){return e/(t+1)},sample:function(e,r){return r/t.randg(e)},variance:function(t,e){if(!(t<=2))return e*e/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,n){return 0===t&&1===r?n:1===t&&1===n?r:e.exp(e.log(r)+e.log(n)+(r-1)*e.log(t)+(n-1)*e.log(1-e.pow(t,r)))},cdf:function(t,r,n){return t<0?0:t>1?1:1-e.pow(1-e.pow(t,r),n)},inv:function(t,r,n){return e.pow(1-e.pow(1-t,1/n),1/r)},mean:function(e,r){return r*t.gammafn(1+1/e)*t.gammafn(r)/t.gammafn(1+1/e+r)},median:function(t,r){return e.pow(1-e.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return e.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,n){return t<=0?0:e.exp(-e.log(t)-.5*e.log(2*e.PI)-e.log(n)-e.pow(e.log(t)-r,2)/(2*n*n))},cdf:function(r,n,a){return r<0?0:.5+.5*t.erf((e.log(r)-n)/e.sqrt(2*a*a))},inv:function(r,n,a){return e.exp(-1.4142135623730951*a*t.erfcinv(2*r)+n)},mean:function(t,r){return e.exp(t+r*r/2)},median:function(t){return e.exp(t)},mode:function(t,r){return e.exp(t-r*r)},sample:function(r,n){return e.exp(t.randn()*n+r)},variance:function(t,r){return(e.exp(r*r)-1)*e.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,n,a){var i=1e-14;return e.abs(a)<i?t.studentt.pdf(r,n):e.abs(r)<i?e.exp(t.gammaln((n+1)/2)-a*a/2-.5*e.log(e.PI*n)-t.gammaln(n/2)):n/r*(t.noncentralt.cdf(r*e.sqrt(1+2/n),n+2,a)-t.noncentralt.cdf(r,n,a))},cdf:function(r,n,a){var i=1e-14,o=200;if(e.abs(a)<i)return t.studentt.cdf(r,n);var s=!1;r<0&&(s=!0,a=-a);for(var l=t.normal.cdf(-a,0,1),c=i+1,u=c,h=r*r/(r*r+n),d=0,f=e.exp(-a*a/2),p=e.exp(-a*a/2-.5*e.log(2)-t.gammaln(1.5))*a;d<o||u>i||c>i;)u=c,d>0&&(f*=a*a/(2*d),p*=a*a/(2*(d+.5))),l+=.5*(c=f*t.beta.cdf(h,d+.5,n/2)+p*t.beta.cdf(h,d+1,n/2)),d++;return s?1-l:l}}),t.extend(t.normal,{pdf:function(t,r,n){return e.exp(-.5*e.log(2*e.PI)-e.log(n)-e.pow(t-r,2)/(2*n*n))},cdf:function(r,n,a){return.5*(1+t.erf((r-n)/e.sqrt(2*a*a)))},inv:function(e,r,n){return-1.4142135623730951*n*t.erfcinv(2*e)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(e,r){return t.randn()*r+e},variance:function(t,e){return e*e}}),t.extend(t.pareto,{pdf:function(t,r,n){return t<r?0:n*e.pow(r,n)/e.pow(t,n+1)},cdf:function(t,r,n){return t<r?0:1-e.pow(r/t,n)},inv:function(t,r,n){return r/e.pow(1-t,1/n)},mean:function(t,r){if(!(r<=1))return r*e.pow(t,r)/(r-1)},median:function(t,r){return t*(r*e.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(e.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,n){return n=n>1e100?1e100:n,1/(e.sqrt(n)*t.betafn(.5,n/2))*e.pow(1+r*r/n,-(n+1)/2)},cdf:function(r,n){var a=n/2;return t.ibeta((r+e.sqrt(r*r+n))/(2*e.sqrt(r*r+n)),a,a)},inv:function(r,n){var a=t.ibetainv(2*e.min(r,1-r),.5*n,.5);return a=e.sqrt(n*(1-a)/a),r>.5?a:-a},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*e.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,n){return t<0||r<0||n<0?0:n/r*e.pow(t/r,n-1)*e.exp(-e.pow(t/r,n))},cdf:function(t,r,n){return t<0?0:1-e.exp(-e.pow(t/r,n))},inv:function(t,r,n){return r*e.pow(-e.log(1-t),1/n)},mean:function(e,r){return e*t.gammafn(1+1/r)},median:function(t,r){return t*e.pow(e.log(2),1/r)},mode:function(t,r){return r<=1?0:t*e.pow((r-1)/r,1/r)},sample:function(r,n){return r*e.pow(-e.log(t._random_fn()),1/n)},variance:function(r,n){return r*r*t.gammafn(1+2/n)-e.pow(t.weibull.mean(r,n),2)}}),t.extend(t.uniform,{pdf:function(t,e,r){return t<e||t>r?0:1/(r-e)},cdf:function(t,e,r){return t<e?0:t<r?(t-e)/(r-e):1},inv:function(t,e,r){return e+t*(r-e)},mean:function(t,e){return.5*(t+e)},median:function(e,r){return t.mean(e,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,r){return e/2+r/2+(r/2-e/2)*(2*t._random_fn()-1)},variance:function(t,r){return e.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,n,a){return 0===a||1===a?n*a===r?1:0:t.combination(n,r)*e.pow(a,r)*e.pow(1-a,n-r)},cdf:function(n,a,i){var o,s=1e-10;if(n<0)return 0;if(n>=a)return 1;if(i<0||i>1||a<=0)return NaN;var l=i,c=(n=e.floor(n))+1,u=a-n,h=c+u,d=e.exp(t.gammaln(h)-t.gammaln(u)-t.gammaln(c)+c*e.log(l)+u*e.log(1-l));return o=l<(c+1)/(h+2)?d*r(l,c,u,s):1-d*r(1-l,u,c,s),e.round(1/s*(1-o))/(1/s)}}),t.extend(t.negbin,{pdf:function(r,n,a){return r===r>>>0&&(r<0?0:t.combination(r+n-1,n-1)*e.pow(1-a,r)*e.pow(a,n))},cdf:function(e,r,n){var a=0,i=0;if(e<0)return 0;for(;i<=e;i++)a+=t.negbin.pdf(i,r,n);return a}}),t.extend(t.hypgeom,{pdf:function(r,n,a,i){if(r!=r|0)return!1;if(r<0||r<a-(n-i))return 0;if(r>i||r>a)return 0;if(2*a>n)return 2*i>n?t.hypgeom.pdf(n-a-i+r,n,n-a,n-i):t.hypgeom.pdf(i-r,n,n-a,i);if(2*i>n)return t.hypgeom.pdf(a-r,n,a,n-i);if(a<i)return t.hypgeom.pdf(r,n,i,a);for(var o=1,s=0,l=0;l<r;l++){for(;o>1&&s<i;)o*=1-a/(n-s),s++;o*=(i-l)*(a-l)/((l+1)*(n-a-i+l+1))}for(;s<i;s++)o*=1-a/(n-s);return e.min(1,e.max(0,o))},cdf:function(r,n,a,i){if(r<0||r<a-(n-i))return 0;if(r>=i||r>=a)return 1;if(2*a>n)return 2*i>n?t.hypgeom.cdf(n-a-i+r,n,n-a,n-i):1-t.hypgeom.cdf(i-r-1,n,n-a,i);if(2*i>n)return 1-t.hypgeom.cdf(a-r-1,n,a,n-i);if(a<i)return t.hypgeom.cdf(r,n,i,a);for(var o=1,s=1,l=0,c=0;c<r;c++){for(;o>1&&l<i;){var u=1-a/(n-l);s*=u,o*=u,l++}o+=s*=(i-c)*(a-c)/((c+1)*(n-a-i+c+1))}for(;l<i;l++)o*=1-a/(n-l);return e.min(1,e.max(0,o))}}),t.extend(t.poisson,{pdf:function(r,n){return n<0||r%1!=0||r<0?0:e.pow(n,r)*e.exp(-n)/t.factorial(r)},cdf:function(e,r){var n=[],a=0;if(e<0)return 0;for(;a<=e;a++)n.push(t.poisson.pdf(a,r));return t.sum(n)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var n=1,a=0,i=e.exp(-r);do{a++,n*=t._random_fn()}while(n>i);return a-1},sampleLarge:function(r){var n,a,i,o,s,l,c,u,h,d,f=r;for(o=e.sqrt(f),s=e.log(f),l=.02483*(c=.931+2.53*o)-.059,u=1.1239+1.1328/(c-3.4),h=.9277-3.6224/(c-2);;){if(a=e.random()-.5,i=e.random(),d=.5-e.abs(a),n=e.floor((2*l/d+c)*a+f+.43),d>=.07&&i<=h)return n;if(!(n<0||d<.013&&i>d)&&e.log(i)+e.log(u)-e.log(l/(d*d)+c)<=n*s-f-t.loggam(n+1))return n}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,e,r,n){return r<=e||n<e||n>r?NaN:t<e||t>r?0:t<n?2*(t-e)/((r-e)*(n-e)):t===n?2/(r-e):2*(r-t)/((r-e)*(r-n))},cdf:function(t,r,n,a){return n<=r||a<r||a>n?NaN:t<=r?0:t>=n?1:t<=a?e.pow(t-r,2)/((n-r)*(a-r)):1-e.pow(n-t,2)/((n-r)*(n-a))},inv:function(t,r,n,a){return n<=r||a<r||a>n?NaN:t<=(a-r)/(n-r)?r+(n-r)*e.sqrt(t*((a-r)/(n-r))):r+(n-r)*(1-e.sqrt((1-t)*(1-(a-r)/(n-r))))},mean:function(t,e,r){return(t+e+r)/3},median:function(t,r,n){return n<=(t+r)/2?r-e.sqrt((r-t)*(r-n))/e.sqrt(2):n>(t+r)/2?t+e.sqrt((r-t)*(n-t))/e.sqrt(2):void 0},mode:function(t,e,r){return r},sample:function(r,n,a){var i=t._random_fn();return i<(a-r)/(n-r)?r+e.sqrt(i*(n-r)*(a-r)):n-e.sqrt((1-i)*(n-r)*(n-a))},variance:function(t,e,r){return(t*t+e*e+r*r-t*e-t*r-e*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,n){return n<=r?NaN:t<=r||t>=n?0:2/e.PI*e.pow(e.pow(n-r,2)-e.pow(2*t-r-n,2),-.5)},cdf:function(t,r,n){return t<r?0:t<n?2/e.PI*e.asin(e.sqrt((t-r)/(n-r))):1},inv:function(t,r,n){return r+(.5-.5*e.cos(e.PI*t))*(n-r)},mean:function(t,e){return e<=t?NaN:(t+e)/2},median:function(t,e){return e<=t?NaN:(t+e)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,n){return(r+n)/2+(n-r)/2*e.sin(2*e.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:e.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,n){return n<=0?0:e.exp(-e.abs(t-r)/n)/(2*n)},cdf:function(t,r,n){return n<=0?0:t<r?.5*e.exp((t-r)/n):1-.5*e.exp(-(t-r)/n)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,e){return 2*e*e},sample:function(r,a){var i=t._random_fn()-.5;return r-a*n(i)*e.log(1-2*e.abs(i))}}),t.extend(t.tukey,{cdf:function(r,n,i){var o=1,s=n,l=16,c=8,u=-30,h=1e-14,d=100,f=800,p=5e3,g=25e3,m=1,b=.5,y=.25,v=.125,$=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],_=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(i<2||o<1||s<2)return NaN;if(!Number.isFinite(r))return 1;if(i>g)return a(r,o,s);var S,E=.5*i,T=E*e.log(i)-i*e.log(2)-t.gammaln(E),w=E-1,A=.25*i;S=i<=d?m:i<=f?b:i<=p?y:v,T+=e.log(S);for(var x=0,R=1;R<=50;R++){for(var C=0,O=(2*R-1)*S,P=1;P<=l;P++){var I,k;c<P?(I=P-c-1,k=T+w*e.log(O+$[I]*S)-($[I]*S+O)*A):(I=P-1,k=T+w*e.log(O-$[I]*S)+($[I]*S-O)*A),k>=u&&(C+=a(c<P?r*e.sqrt(.5*($[I]*S+O)):r*e.sqrt(.5*(-$[I]*S+O)),o,s)*_[I]*e.exp(k))}if(R*S>=1&&C<=h)break;x+=C}if(C>h)throw new Error("tukey.cdf failed to converge");return x>1&&(x=1),x},inv:function(r,n,a){var o=1e-4,s=50;if(a<2||n<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var l,c=i(r,n,a),u=t.tukey.cdf(c,n,a)-r;l=u>0?e.max(0,c-1):c+1;for(var h,d=t.tukey.cdf(l,n,a)-r,f=1;f<s;f++)if(h=l-d*(l-c)/(d-u),u=d,c=l,h<0&&(h=0,d=-r),d=t.tukey.cdf(h,n,a)-r,l=h,e.abs(l-c)<o)return h;throw new Error("tukey.inv failed to converge")}})}(r,Math),function(t,e){var r=Array.prototype.push,n=t.utils.isArray;function a(e){return n(e)||e instanceof t}t.extend({add:function(e,r){return a(r)?(a(r[0])||(r=[r]),t.map(e,(function(t,e,n){return t+r[e][n]}))):t.map(e,(function(t){return t+r}))},subtract:function(e,r){return a(r)?(a(r[0])||(r=[r]),t.map(e,(function(t,e,n){return t-r[e][n]||0}))):t.map(e,(function(t){return t-r}))},divide:function(e,r){return a(r)?(a(r[0])||(r=[r]),t.multiply(e,t.inv(r))):t.map(e,(function(t){return t/r}))},multiply:function(e,r){var n,i,o,s,l,c,u,h;if(void 0===e.length&&void 0===r.length)return e*r;if(l=e.length,c=e[0].length,u=t.zeros(l,o=a(r)?r[0].length:c),h=0,a(r)){for(;h<o;h++)for(n=0;n<l;n++){for(s=0,i=0;i<c;i++)s+=e[n][i]*r[i][h];u[n][h]=s}return 1===l&&1===h?u[0][0]:u}return t.map(e,(function(t){return t*r}))},outer:function(e,r){return t.multiply(e.map((function(t){return[t]})),[r])},dot:function(e,r){a(e[0])||(e=[e]),a(r[0])||(r=[r]);for(var n,i,o=1===e[0].length&&1!==e.length?t.transpose(e):e,s=1===r[0].length&&1!==r.length?t.transpose(r):r,l=[],c=0,u=o.length,h=o[0].length;c<u;c++){for(l[c]=[],n=0,i=0;i<h;i++)n+=o[c][i]*s[c][i];l[c]=n}return 1===l.length?l[0]:l},pow:function(r,n){return t.map(r,(function(t){return e.pow(t,n)}))},exp:function(r){return t.map(r,(function(t){return e.exp(t)}))},log:function(r){return t.map(r,(function(t){return e.log(t)}))},abs:function(r){return t.map(r,(function(t){return e.abs(t)}))},norm:function(t,r){var n=0,i=0;for(isNaN(r)&&(r=2),a(t[0])&&(t=t[0]);i<t.length;i++)n+=e.pow(e.abs(t[i]),r);return e.pow(n,1/r)},angle:function(r,n){return e.acos(t.dot(r,n)/(t.norm(r)*t.norm(n)))},aug:function(t,e){var n,a=[];for(n=0;n<t.length;n++)a.push(t[n].slice());for(n=0;n<a.length;n++)r.apply(a[n],e[n]);return a},inv:function(e){for(var r,n=e.length,a=e[0].length,i=t.identity(n,a),o=t.gauss_jordan(e,i),s=[],l=0;l<n;l++)for(s[l]=[],r=a;r<o[0].length;r++)s[l][r-a]=o[l][r];return s},det:function(t){var e,r=t.length,n=2*r,a=new Array(n),i=r-1,o=n-1,s=i-r+1,l=o,c=0,u=0;if(2===r)return t[0][0]*t[1][1]-t[0][1]*t[1][0];for(;c<n;c++)a[c]=1;for(c=0;c<r;c++){for(e=0;e<r;e++)a[s<0?s+r:s]*=t[c][e],a[l<r?l+r:l]*=t[c][e],s++,l--;s=--i-r+1,l=--o}for(c=0;c<r;c++)u+=a[c];for(;c<n;c++)u-=a[c];return u},gauss_elimination:function(r,n){var a,i,o,s,l=0,c=0,u=r.length,h=r[0].length,d=1,f=0,p=[];for(a=(r=t.aug(r,n))[0].length,l=0;l<u;l++){for(i=r[l][l],c=l,s=l+1;s<h;s++)i<e.abs(r[s][l])&&(i=r[s][l],c=s);if(c!=l)for(s=0;s<a;s++)o=r[l][s],r[l][s]=r[c][s],r[c][s]=o;for(c=l+1;c<u;c++)for(d=r[c][l]/r[l][l],s=l;s<a;s++)r[c][s]=r[c][s]-d*r[l][s]}for(l=u-1;l>=0;l--){for(f=0,c=l+1;c<=u-1;c++)f+=p[c]*r[l][c];p[l]=(r[l][a-1]-f)/r[l][l]}return p},gauss_jordan:function(r,n){var a,i,o,s=t.aug(r,n),l=s.length,c=s[0].length,u=0;for(i=0;i<l;i++){var h=i;for(o=i+1;o<l;o++)e.abs(s[o][i])>e.abs(s[h][i])&&(h=o);var d=s[i];for(s[i]=s[h],s[h]=d,o=i+1;o<l;o++)for(u=s[o][i]/s[i][i],a=i;a<c;a++)s[o][a]-=s[i][a]*u}for(i=l-1;i>=0;i--){for(u=s[i][i],o=0;o<i;o++)for(a=c-1;a>i-1;a--)s[o][a]-=s[i][a]*s[o][i]/u;for(s[i][i]/=u,a=l;a<c;a++)s[i][a]/=u}return s},triaUpSolve:function(e,r){var n,a=e[0].length,i=t.zeros(1,a)[0],o=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),o=!0),t.arange(a-1,-1,-1).forEach((function(o){n=t.arange(o+1,a).map((function(t){return i[t]*e[o][t]})),i[o]=(r[o]-t.sum(n))/e[o][o]})),o?i.map((function(t){return[t]})):i},triaLowSolve:function(e,r){var n,a=e[0].length,i=t.zeros(1,a)[0],o=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),o=!0),t.arange(a).forEach((function(a){n=t.arange(a).map((function(t){return e[a][t]*i[t]})),i[a]=(r[a]-t.sum(n))/e[a][a]})),o?i.map((function(t){return[t]})):i},lu:function(e){var r,n=e.length,a=t.identity(n),i=t.zeros(e.length,e[0].length);return t.arange(n).forEach((function(t){i[0][t]=e[0][t]})),t.arange(1,n).forEach((function(o){t.arange(o).forEach((function(n){r=t.arange(n).map((function(t){return a[o][t]*i[t][n]})),a[o][n]=(e[o][n]-t.sum(r))/i[n][n]})),t.arange(o,n).forEach((function(n){r=t.arange(o).map((function(t){return a[o][t]*i[t][n]})),i[o][n]=e[r.length][n]-t.sum(r)}))})),[a,i]},cholesky:function(r){var n,a=r.length,i=t.zeros(r.length,r[0].length);return t.arange(a).forEach((function(o){n=t.arange(o).map((function(t){return e.pow(i[o][t],2)})),i[o][o]=e.sqrt(r[o][o]-t.sum(n)),t.arange(o+1,a).forEach((function(e){n=t.arange(o).map((function(t){return i[o][t]*i[e][t]})),i[e][o]=(r[o][e]-t.sum(n))/i[o][o]}))})),i},gauss_jacobi:function(r,n,a,i){for(var o,s,l,c,u=0,h=0,d=r.length,f=[],p=[],g=[];u<d;u++)for(f[u]=[],p[u]=[],g[u]=[],h=0;h<d;h++)u>h?(f[u][h]=r[u][h],p[u][h]=g[u][h]=0):u<h?(p[u][h]=r[u][h],f[u][h]=g[u][h]=0):(g[u][h]=r[u][h],f[u][h]=p[u][h]=0);for(l=t.multiply(t.multiply(t.inv(g),t.add(f,p)),-1),s=t.multiply(t.inv(g),n),o=a,c=t.add(t.multiply(l,a),s),u=2;e.abs(t.norm(t.subtract(c,o)))>i;)o=c,c=t.add(t.multiply(l,o),s),u++;return c},gauss_seidel:function(r,n,a,i){for(var o,s,l,c,u,h=0,d=r.length,f=[],p=[],g=[];h<d;h++)for(f[h]=[],p[h]=[],g[h]=[],o=0;o<d;o++)h>o?(f[h][o]=r[h][o],p[h][o]=g[h][o]=0):h<o?(p[h][o]=r[h][o],f[h][o]=g[h][o]=0):(g[h][o]=r[h][o],f[h][o]=p[h][o]=0);for(c=t.multiply(t.multiply(t.inv(t.add(g,f)),p),-1),l=t.multiply(t.inv(t.add(g,f)),n),s=a,u=t.add(t.multiply(c,a),l),h=2;e.abs(t.norm(t.subtract(u,s)))>i;)s=u,u=t.add(t.multiply(c,s),l),h+=1;return u},SOR:function(r,n,a,i,o){for(var s,l,c,u,h,d=0,f=r.length,p=[],g=[],m=[];d<f;d++)for(p[d]=[],g[d]=[],m[d]=[],s=0;s<f;s++)d>s?(p[d][s]=r[d][s],g[d][s]=m[d][s]=0):d<s?(g[d][s]=r[d][s],p[d][s]=m[d][s]=0):(m[d][s]=r[d][s],p[d][s]=g[d][s]=0);for(u=t.multiply(t.inv(t.add(m,t.multiply(p,o))),t.subtract(t.multiply(m,1-o),t.multiply(g,o))),c=t.multiply(t.multiply(t.inv(t.add(m,t.multiply(p,o))),n),o),l=a,h=t.add(t.multiply(u,a),c),d=2;e.abs(t.norm(t.subtract(h,l)))>i;)l=h,h=t.add(t.multiply(u,l),c),d++;return h},householder:function(r){for(var n,a,i,o,s=r.length,l=r[0].length,c=0,u=[],h=[];c<s-1;c++){for(n=0,o=c+1;o<l;o++)n+=r[o][c]*r[o][c];for(n=(r[c+1][c]>0?-1:1)*e.sqrt(n),a=e.sqrt((n*n-r[c+1][c]*n)/2),(u=t.zeros(s,1))[c+1][0]=(r[c+1][c]-n)/(2*a),i=c+2;i<s;i++)u[i][0]=r[i][c]/(2*a);h=t.subtract(t.identity(s,l),t.multiply(t.multiply(u,t.transpose(u)),2)),r=t.multiply(h,t.multiply(r,h))}return r},QR:function(){var r=t.sum,n=t.arange;function a(a){var i,o,s,l=a.length,c=a[0].length,u=t.zeros(c,c);for(a=t.copy(a),o=0;o<c;o++){for(u[o][o]=e.sqrt(r(n(l).map((function(t){return a[t][o]*a[t][o]})))),i=0;i<l;i++)a[i][o]=a[i][o]/u[o][o];for(s=o+1;s<c;s++)for(u[o][s]=r(n(l).map((function(t){return a[t][o]*a[t][s]}))),i=0;i<l;i++)a[i][s]=a[i][s]-a[i][o]*u[o][s]}return[a,u]}return a}(),lstsq:function(){function e(e){var r=(e=t.copy(e)).length,n=t.identity(r);return t.arange(r-1,-1,-1).forEach((function(r){t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),e[r][r])),t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),e[r][r])),t.arange(r).forEach((function(a){var i=t.multiply(e[a][r],-1),o=t.slice(e,{row:a}),s=t.multiply(t.slice(e,{row:r}),i);t.sliceAssign(e,{row:a},t.add(o,s));var l=t.slice(n,{row:a}),c=t.multiply(t.slice(n,{row:r}),i);t.sliceAssign(n,{row:a},t.add(l,c))}))})),n}function r(r,n){var a=!1;void 0===n[0].length&&(n=n.map((function(t){return[t]})),a=!0);var i=t.QR(r),o=i[0],s=i[1],l=r[0].length,c=t.slice(o,{col:{end:l}}),u=e(t.slice(s,{row:{end:l}})),h=t.transpose(c);void 0===h[0].length&&(h=[h]);var d=t.multiply(t.multiply(u,h),n);return void 0===d.length&&(d=[[d]]),a?d.map((function(t){return t[0]})):d}return r}(),jacobi:function(r){for(var n,a,i,o,s,l,c,u=1,h=r.length,d=t.identity(h,h),f=[];1===u;){for(s=r[0][1],i=0,o=1,n=0;n<h;n++)for(a=0;a<h;a++)n!=a&&s<e.abs(r[n][a])&&(s=e.abs(r[n][a]),i=n,o=a);for(l=r[i][i]===r[o][o]?r[i][o]>0?e.PI/4:-e.PI/4:e.atan(2*r[i][o]/(r[i][i]-r[o][o]))/2,(c=t.identity(h,h))[i][i]=e.cos(l),c[i][o]=-e.sin(l),c[o][i]=e.sin(l),c[o][o]=e.cos(l),d=t.multiply(d,c),r=t.multiply(t.multiply(t.inv(c),r),c),u=0,n=1;n<h;n++)for(a=1;a<h;a++)n!=a&&e.abs(r[n][a])>.001&&(u=1)}for(n=0;n<h;n++)f.push(r[n][n]);return[d,f]},rungekutta:function(t,e,r,n,a,i){var o,s,l;if(2===i)for(;n<=r;)a+=((o=e*t(n,a))+(s=e*t(n+e,a+o)))/2,n+=e;if(4===i)for(;n<=r;)a+=((o=e*t(n,a))+2*(s=e*t(n+e/2,a+o/2))+2*(l=e*t(n+e/2,a+s/2))+e*t(n+e,a+l))/6,n+=e;return a},romberg:function(t,r,n,a){for(var i,o,s,l,c,u=0,h=(n-r)/2,d=[],f=[],p=[];u<a/2;){for(c=t(r),s=r,l=0;s<=n;s+=h,l++)d[l]=s;for(i=d.length,s=1;s<i-1;s++)c+=(s%2!=0?4:2)*t(d[s]);c=h/3*(c+t(n)),p[u]=c,h/=2,u++}for(o=p.length,i=1;1!==o;){for(s=0;s<o-1;s++)f[s]=(e.pow(4,i)*p[s+1]-p[s])/(e.pow(4,i)-1);o=f.length,p=f,f=[],i++}return p},richardson:function(t,r,n,a){function i(t,e){for(var r,n=0,a=t.length;n<a;n++)t[n]===e&&(r=n);return r}for(var o,s,l,c,u,h=e.abs(n-t[i(t,n)+1]),d=0,f=[],p=[];a>=h;)o=i(t,n+a),s=i(t,n),f[d]=(r[o]-2*r[s]+r[2*s-o])/(a*a),a/=2,d++;for(c=f.length,l=1;1!=c;){for(u=0;u<c-1;u++)p[u]=(e.pow(4,l)*f[u+1]-f[u])/(e.pow(4,l)-1);c=p.length,f=p,p=[],l++}return f},simpson:function(t,e,r,n){for(var a,i=(r-e)/n,o=t(e),s=[],l=e,c=0,u=1;l<=r;l+=i,c++)s[c]=l;for(a=s.length;u<a-1;u++)o+=(u%2!=0?4:2)*t(s[u]);return i/3*(o+t(r))},hermite:function(t,e,r,n){for(var a,i=t.length,o=0,s=0,l=[],c=[],u=[],h=[];s<i;s++){for(l[s]=1,a=0;a<i;a++)s!=a&&(l[s]*=(n-t[a])/(t[s]-t[a]));for(c[s]=0,a=0;a<i;a++)s!=a&&(c[s]+=1/(t[s]-t[a]));u[s]=(1-2*(n-t[s])*c[s])*(l[s]*l[s]),h[s]=(n-t[s])*(l[s]*l[s]),o+=u[s]*e[s]+h[s]*r[s]}return o},lagrange:function(t,e,r){for(var n,a,i=0,o=0,s=t.length;o<s;o++){for(a=e[o],n=0;n<s;n++)o!=n&&(a*=(r-t[n])/(t[o]-t[n]));i+=a}return i},cubic_spline:function(e,r,n){for(var a,i=e.length,o=0,s=[],l=[],c=[],u=[],h=[],d=[],f=[];o<i-1;o++)h[o]=e[o+1]-e[o];for(c[0]=0,o=1;o<i-1;o++)c[o]=3/h[o]*(r[o+1]-r[o])-3/h[o-1]*(r[o]-r[o-1]);for(o=1;o<i-1;o++)s[o]=[],l[o]=[],s[o][o-1]=h[o-1],s[o][o]=2*(h[o-1]+h[o]),s[o][o+1]=h[o],l[o][0]=c[o];for(u=t.multiply(t.inv(s),l),a=0;a<i-1;a++)d[a]=(r[a+1]-r[a])/h[a]-h[a]*(u[a+1][0]+2*u[a][0])/3,f[a]=(u[a+1][0]-u[a][0])/(3*h[a]);for(a=0;a<i&&!(e[a]>n);a++);return r[a-=1]+(n-e[a])*d[a]+t.sq(n-e[a])*u[a]+(n-e[a])*t.sq(n-e[a])*f[a]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(e){var r,n,a=e.length,i=e[0].length,o=0,s=[],l=[],c=[],u=[],h=[],d=[],f=[],p=[],g=[],m=[];for(o=0;o<a;o++)s[o]=t.sum(e[o])/i;for(o=0;o<i;o++)for(f[o]=[],r=0;r<a;r++)f[o][r]=e[r][o]-s[r];for(f=t.transpose(f),o=0;o<a;o++)for(p[o]=[],r=0;r<a;r++)p[o][r]=t.dot([f[o]],[f[r]])/(i-1);for(g=(c=t.jacobi(p))[0],l=c[1],m=t.transpose(g),o=0;o<l.length;o++)for(r=o;r<l.length;r++)l[o]<l[r]&&(n=l[o],l[o]=l[r],l[r]=n,u=m[o],m[o]=m[r],m[r]=u);for(d=t.transpose(f),o=0;o<a;o++)for(h[o]=[],r=0;r<d.length;r++)h[o][r]=t.dot([m[o]],[d[r]]);return[e,l,m,h]}}),function(e){for(var r=0;r<e.length;r++)!function(e){t.fn[e]=function(r,n){var a=this;return n?(setTimeout((function(){n.call(a,t.fn[e].call(a,r))}),15),this):"number"==typeof t[e](this,r)?t[e](this,r):t(t[e](this,r))}}(e[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(r,Math),function(t,e){var r=[].slice,n=t.utils.isNumber,a=t.utils.isArray;function i(t,r,n,a){if(t>1||n>1||t<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var i=(t*r+n*a)/(r+a);return(t-n)/e.sqrt(i*(1-i)*(1/r+1/a))}t.extend({zscore:function(){var e=r.call(arguments);return n(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var n,i=r.call(arguments);return a(i[1])?(n=t.zscore(i[0],i[1],i[3]),1===i[2]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):i.length>2?(n=t.zscore(i[0],i[1],i[2]),1===i[3]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):(n=i[0],1===i[1]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1))}}),t.extend(t.fn,{zscore:function(t,e){return(t-this.mean())/this.stdev(e)},ztest:function(r,n,a){var i=e.abs(this.zscore(r,a));return 1===n?t.normal.cdf(-i,0,1):2*t.normal.cdf(-i,0,1)}}),t.extend({tscore:function(){var n=r.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/e.sqrt(n[3])):(n[0]-t.mean(n[1]))/(t.stdev(n[1],!0)/e.sqrt(n[1].length))},ttest:function(){var a,i=r.call(arguments);return 5===i.length?(a=e.abs(t.tscore(i[0],i[1],i[2],i[3])),1===i[4]?t.studentt.cdf(-a,i[3]-1):2*t.studentt.cdf(-a,i[3]-1)):n(i[1])?(a=e.abs(i[0]),1==i[2]?t.studentt.cdf(-a,i[1]-1):2*t.studentt.cdf(-a,i[1]-1)):(a=e.abs(t.tscore(i[0],i[1])),1==i[2]?t.studentt.cdf(-a,i[1].length-1):2*t.studentt.cdf(-a,i[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/e.sqrt(this.cols()))},ttest:function(r,n){return 1===n?1-t.studentt.cdf(e.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-e.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var n,a,i,o,s,l,c,u,h=r.call(arguments);if(1===h.length){for(s=new Array(h[0].length),c=0;c<h[0].length;c++)s[c]=h[0][c];h=s}for(a=new Array,c=0;c<h.length;c++)a=a.concat(h[c]);for(i=t.mean(a),n=0,c=0;c<h.length;c++)n+=h[c].length*e.pow(t.mean(h[c])-i,2);for(n/=h.length-1,l=0,c=0;c<h.length;c++)for(o=t.mean(h[c]),u=0;u<h[c].length;u++)l+=e.pow(h[c][u]-o,2);return n/(l/=a.length-h.length)},anovaftest:function(){var e,a,i,o,s=r.call(arguments);if(n(s[0]))return 1-t.centralF.cdf(s[0],s[1],s[2]);var l=t.anovafscore(s);for(e=s.length-1,i=0,o=0;o<s.length;o++)i+=s[o].length;return a=i-e-1,1-t.centralF.cdf(l,e,a)},ftest:function(e,r,n){return 1-t.centralF.cdf(e,r,n)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e,r=0;for(e=0;e<this.length;e++)r+=this[e].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var a,i,o,s,l,c=r.call(arguments);return n(c[0])?(a=c[0],i=c[1],o=c[2],s=c[3],l=c[4]):(a=t.mean(c[0]),i=t.mean(c[1]),o=c[0].length,s=c[1].length,l=c[2]),e.abs(a-i)/(l*e.sqrt((1/o+1/s)/2))},qtest:function(){var e,n=r.call(arguments);3===n.length?(e=n[0],n=n.slice(1)):7===n.length?(e=t.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(e=t.qscore(n[0],n[1],n[2]),n=n.slice(3));var a=n[0],i=n[1];return 1-t.tukey.cdf(e,i,a-i)},tukeyhsd:function(e){for(var r=t.pooledstdev(e),n=e.map((function(e){return t.mean(e)})),a=e.reduce((function(t,e){return t+e.length}),0),i=[],o=0;o<e.length;++o)for(var s=o+1;s<e.length;++s){var l=t.qtest(n[o],n[s],e[o].length,e[s].length,r,a,e.length);i.push([[o,s],l])}return i}}),t.extend({normalci:function(){var n,a=r.call(arguments),i=new Array(2);return n=4===a.length?e.abs(t.normal.inv(a[1]/2,0,1)*a[2]/e.sqrt(a[3])):e.abs(t.normal.inv(a[1]/2,0,1)*t.stdev(a[2])/e.sqrt(a[2].length)),i[0]=a[0]-n,i[1]=a[0]+n,i},tci:function(){var n,a=r.call(arguments),i=new Array(2);return n=4===a.length?e.abs(t.studentt.inv(a[1]/2,a[3]-1)*a[2]/e.sqrt(a[3])):e.abs(t.studentt.inv(a[1]/2,a[2].length-1)*t.stdev(a[2],!0)/e.sqrt(a[2].length)),i[0]=a[0]-n,i[1]=a[0]+n,i},significant:function(t,e){return t<e}}),t.extend(t.fn,{normalci:function(e,r){return t.normalci(e,r,this.toArray())},tci:function(e,r){return t.tci(e,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,r,n,a){var o=i(e,r,n,a);return t.ztest(o,1)},twoSidedDifferenceOfProportions:function(e,r,n,a){var o=i(e,r,n,a);return t.ztest(o,2)}})}(r,Math),r.models=function(){function t(t){var n=t[0].length,a=r.arange(n).map((function(a){var i=r.arange(n).filter((function(t){return t!==a}));return e(r.col(t,a).map((function(t){return t[0]})),r.col(t,i))}));return a}function e(t,e){var n=t.length,a=e[0].length-1,i=n-a-1,o=r.lstsq(e,t),s=r.multiply(e,o.map((function(t){return[t]}))).map((function(t){return t[0]})),l=r.subtract(t,s),c=r.mean(t),u=r.sum(s.map((function(t){return Math.pow(t-c,2)}))),h=r.sum(t.map((function(t,e){return Math.pow(t-s[e],2)}))),d=u+h;return{exog:e,endog:t,nobs:n,df_model:a,df_resid:i,coef:o,predict:s,resid:l,ybar:c,SST:d,SSE:u,SSR:h,R2:u/d}}function n(e){var n=t(e.exog),a=Math.sqrt(e.SSR/e.df_resid),i=n.map((function(t){var e=t.SST,r=t.R2;return a/Math.sqrt(e*(1-r))})),o=e.coef.map((function(t,e){return(t-0)/i[e]})),s=o.map((function(t){var n=r.studentt.cdf(t,e.df_resid);return 2*(n>.5?1-n:n)})),l=r.studentt.inv(.975,e.df_resid),c=e.coef.map((function(t,e){var r=l*i[e];return[t-r,t+r]}));return{se:i,t:o,p:s,sigmaHat:a,interval95:c}}function a(t){var e=t.R2/t.df_model/((1-t.R2)/t.df_resid),n=function(t,e,n){return r.beta.cdf(t/(n/e+t),e/2,n/2)};return{F_statistic:e,pvalue:1-n(e,t.df_model,t.df_resid)}}function i(t,r){var i=e(t,r),o=n(i),s=a(i),l=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=s,i.adjust_R2=l,i}return{ols:i}}(),r.extend({buildxmatrix:function(){for(var t=new Array(arguments.length),e=0;e<arguments.length;e++){var n=[1];t[e]=n.concat(arguments[e])}return r(t)},builddxmatrix:function(){for(var t=new Array(arguments[0].length),e=0;e<arguments[0].length;e++){var n=[1];t[e]=n.concat(arguments[0][e])}return r(t)},buildjxmatrix:function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=t[n];return r.builddxmatrix(e)},buildymatrix:function(t){return r(t).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(t,e){var n,a,i,o,s;if(t.cols()==e.rows()){if(e.rows()>1){for(o=[],n=0;n<t.rows();n++)for(o[n]=[],a=0;a<e.cols();a++){for(s=0,i=0;i<t.cols();i++)s+=t.toArray()[n][i]*e.toArray()[i][a];o[n][a]=s}return r(o)}for(o=[],n=0;n<t.rows();n++)for(o[n]=[],a=0;a<e.cols();a++){for(s=0,i=0;i<t.cols();i++)s+=t.toArray()[n][i]*e.toArray()[a];o[n][a]=s}return r(o)}},regress:function(t,e){var n=r.xtranspxinv(t),a=t.transpose(),i=r.matrixmult(r(n),a);return r.matrixmult(i,e)},regresst:function(t,e,n){var a=r.regress(t,e),i={anova:{}},o=r.jMatYBar(t,a);i.yBar=o;var s=e.mean();i.anova.residuals=r.residuals(e,o),i.anova.ssr=r.ssr(o,s),i.anova.msr=i.anova.ssr/(t[0].length-1),i.anova.sse=r.sse(e,o),i.anova.mse=i.anova.sse/(e.length-(t[0].length-1)-1),i.anova.sst=r.sst(e,s),i.anova.mst=i.anova.sst/(e.length-1),i.anova.r2=1-i.anova.sse/i.anova.sst,i.anova.r2<0&&(i.anova.r2=0),i.anova.fratio=i.anova.msr/i.anova.mse,i.anova.pvalue=r.anovaftest(i.anova.fratio,t[0].length-1,e.length-(t[0].length-1)-1),i.anova.rmse=Math.sqrt(i.anova.mse),i.anova.r2adj=1-i.anova.mse/i.anova.mst,i.anova.r2adj<0&&(i.anova.r2adj=0),i.stats=new Array(t[0].length);for(var l,c,u,h=r.xtranspxinv(t),d=0;d<a.length;d++)l=Math.sqrt(i.anova.mse*Math.abs(h[d][d])),c=Math.abs(a[d]/l),u=r.ttest(c,e.length-t[0].length-1,n),i.stats[d]=[a[d],l,c,u];return i.regress=a,i},xtranspx:function(t){return r.matrixmult(t.transpose(),t)},xtranspxinv:function(t){var e=r.matrixmult(t.transpose(),t);return r.inv(e)},jMatYBar:function(t,e){var n=r.matrixmult(t,e);return new r(n)},residuals:function(t,e){return r.matrixsubtract(t,e)},ssr:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},sse:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e[n],2);return r},sst:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},matrixsubtract:function(t,e){for(var n=new Array(t.length),a=0;a<t.length;a++){n[a]=new Array(t[a].length);for(var i=0;i<t[a].length;i++)n[a][i]=t[a][i]-e[a][i]}return r(n)}}),r.jStat=r,r)}));class SDTMath{static hM2Hr(t,e){return 0===t&&0===e?0:t/(t+e)}static faCr2Far(t,e){return 0===t&&0===e?0:t/(t+e)}static hMFaCr2Acc(t,e,r,n){return 0===t&&0===e&&0===r&&0===n?0:(t+n)/(t+e+r+n)}static hrFar2Acc(t,e){return(t+(1-e))/2}static hFa2Ppv(t,e){return 0===t&&0===e?0:t/(t+e)}static mCr2Fomr(t,e){return 0===t&&0===e?0:t/(t+e)}static hrFar2D(t,e,r=1){return 1===r?jstat.normal.inv(t,0,1)-jstat.normal.inv(e,0,1):Math.sqrt(2/(r*r+1))*(r*jstat.normal.inv(t,0,1)-jstat.normal.inv(e,0,1))}static hrFar2C(t,e,r=1){return 1===r?-(jstat.normal.inv(t,0,1)+jstat.normal.inv(e,0,1))/2:Math.sqrt(2/(r*r+1))*(r/(r+1))*-(jstat.normal.inv(t,0,1)+jstat.normal.inv(e,0,1))}static dC2Hr(t,e,r=1){return 1===r?jstat.normal.cdf(t/2-e,0,1):jstat.normal.cdf(Math.sqrt((r*r+1)/2)*(t/(1+r)-e/r),0,1)}static dC2Far(t,e,r=1){return 1===r?jstat.normal.cdf(-(t/2+e),0,1):jstat.normal.cdf(Math.sqrt((r*r+1)/2)*-(t/(1+r)+e),0,1)}static dFar2Hr(t,e,r=1){return 1===r?jstat.normal.cdf(t+jstat.normal.inv(e,0,1),0,1):jstat.normal.cdf((Math.sqrt((r*r+1)/2)*t+jstat.normal.inv(e,0,1))/r,0,1)}static cFar2Hr(t,e,r=1){return 1===r?jstat.normal.cdf(-2*t-jstat.normal.inv(e,0,1),0,1):jstat.normal.cdf(-Math.sqrt((r*r+1)/2)*((r+1)/r)*t-jstat.normal.inv(e,0,1),0,1)}static d2MuN(t,e=1){return 1===e?-t/2:-Math.sqrt((e*e+1)/2)*(1/(e+1))*t}static muN2D(t,e=1){return 1===e?-2*t:-Math.sqrt(2/(e*e+1))*(e+1)*t}static d2MuS(t,e=1){return 1===e?t/2:Math.sqrt((e*e+1)/2)*(e/(e+1))*t}static muS2D(t,e=1){return 1===e?2*t:Math.sqrt(2/(e*e+1))*((e+1)/e)*t}static c2L(t,e=1){return 1===e?t:Math.sqrt((e*e+1)/2)*t}static l2C(t,e=1){return 1===e?t:Math.sqrt(2/(e*e+1))*t}static s2H(t=1){return 1/(t*Math.sqrt(2*Math.PI))}static h2S(t){return 1/(t*Math.sqrt(2*Math.PI))}static hr2Zhr(t){return jstat.normal.inv(t,0,1)}static far2Zfar(t){return jstat.normal.inv(t,0,1)}static zhr2Hr(t){return jstat.normal.cdf(t,0,1)}static zfar2Far(t){return jstat.normal.cdf(t,0,1)}}let _t$d,_t2$c,_$d=t=>t;class ROCSpace extends DetectableElement{static get properties(){return{contour:{attribute:"contour",type:String,reflect:!0},point:{attribute:"point",type:String,reflect:!0},isoD:{attribute:"iso-d",type:String,reflect:!0},isoC:{attribute:"iso-c",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1},width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.sdt=!1,this.contours=["sensitivity","bias","accuracy"],this.contour=void 0,this.points=["all","first","rest","none"],this.point="all",this.isoDs=["all","first","rest","none"],this.isoD="first",this.isoCs=["all","first","rest","none"],this.isoC="first",this.zRoc=!1,this.far=.25,this.hr=.75,this.s=1,this.label="",this.locations=[{name:"default",far:this.far,hr:this.hr,s:this.s,label:""}],this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.width=NaN,this.height=NaN,this.rem=NaN,this.alignState()}alignState(){this.locations[0].hr=this.hr,this.locations[0].far=this.far,this.locations[0].s=this.s,this.locations[0].label=this.label,this.d=SDTMath.hrFar2D(this.hr,this.far,this.s),this.c=SDTMath.hrFar2C(this.hr,this.far,this.s),this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.locations.forEach(((t,e)=>{t.d=SDTMath.hrFar2D(t.hr,t.far,t.s),t.c=SDTMath.hrFar2C(t.hr,t.far,t.s),0!==e||"first"!==this.point&&"all"!==this.point?e>0&&("rest"===this.point||"all"===this.point)&&this.pointArray.push(t):this.pointArray.push(t),0!==e||"first"!==this.isoD&&"all"!==this.isoD?e>0&&("rest"===this.isoD||"all"===this.isoD)&&this.isoDArray.push(t):this.isoDArray.push(t),0!==e||"first"!==this.isoC&&"all"!==this.isoC?e>0&&("rest"===this.isoC||"all"===this.isoC)&&this.isoCArray.push(t):this.isoCArray.push(t)}))}set(t,e,r="default",n="",a=1){"default"===r&&(this.hr=t,this.far=e,this.s=a,this.label=n);const i=this.locations.find((t=>t.name===r));void 0===i?this.locations.push({name:r,far:e,hr:t,s:a,label:n}):(i.hr=t,i.far=e,i.s=a,i.label=n),this.requestUpdate()}setWithSDT(t,e,r="default",n="",a=1){"default"===r&&(this.hr=SDTMath.dC2Hr(t,e,a),this.far=SDTMath.dC2Far(t,e,a),this.s=a,this.label=n);const i=this.locations.find((t=>t.name===r));void 0===i?this.locations.push({name:r,far:SDTMath.dC2Far(t,e,a),hr:SDTMath.dC2Hr(t,e,a),s:a,label:n}):(i.hr=SDTMath.dC2Hr(t,e,a),i.far=SDTMath.dC2Far(t,e,a),i.s=a,i.label=n),this.sdt=!0,this.requestUpdate()}static get styles(){return[super.styles,r$2(_t$d||(_t$d=_$d`
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
      `))]}render(){return $(_t2$c||(_t2$c=_$d`
      ${0}
    `),DetectableElement.svgFilters)}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.getDimensions.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.getDimensions.bind(this)),super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this.getDimensions()}update(t){if(super.update(t),this.alignState(),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),a=2*this.rem,i=3*this.rem,o=3*this.rem,s=n-(a+i),l=n-(o+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=linear().domain(this.zRoc?[-3,3]:[0,1]).range([0,l]);this.xScale=u;const h=linear().domain(this.zRoc?[3,-3]:[1,0]).range([0,s]);this.yScale=h;const d=drag().subject(((t,e)=>({x:this.xScale(this.zRoc?SDTMath.far2Zfar(e.far):e.far),y:this.yScale(this.zRoc?SDTMath.hr2Zhr(e.hr):e.hr)}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",((t,e)=>{this.drag=!0;const r=this.zRoc?SDTMath.zfar2Far(this.xScale.invert(t.x)):this.xScale.invert(t.x),n=this.zRoc?SDTMath.zhr2Hr(this.yScale.invert(t.y)):this.yScale.invert(t.y);e.far=r<.001?.001:r>.999?.999:r,e.hr=n<=.001?.001:n>=.999?.999:n,"default"===e.name&&(this.far=e.far,this.hr=e.hr),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),f=line().x((t=>u(this.zRoc?SDTMath.far2Zfar(t.far):t.far))).y((t=>h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr))),p=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),g=p.enter().append("svg").classed("main",!0),m=g.merge(p).attr("viewBox",`0 0 ${n} ${n}`),b=g.append("g").classed("plot",!0),y=m.select(".plot").attr("transform",`translate(${o}, ${a})`);b.append("clipPath").attr("id","clip-roc-space").append("rect"),y.select("clipPath rect").attr("height",s+1).attr("width",l+1);const v=b.append("g").classed("underlayer",!0),$=y.select(".underlayer");if(v.append("rect").classed("background",!0),$.select(".background").attr("height",s).attr("width",l),this.firstUpdate||t.has("contour")||t.has("zRoc")||t.has("width")||t.has("height")||t.has("rem")||t.has("s"))if(void 0!==this.contour){const t=100,e=[];for(let r=.5,n=0;r<t;r+=1)for(let a=.5;a<t;a+=1,n+=1){const i=this.zRoc?SDTMath.zhr2Hr(a/t*6-3):a/t,o=this.zRoc?SDTMath.zfar2Far(6*(1-r/t)-3):1-r/t;e[n]="bias"===this.contour?SDTMath.hrFar2C(i,o,this.s):"sensitivity"===this.contour?SDTMath.hrFar2D(i,o,this.s):"accuracy"===this.contour?SDTMath.hrFar2Acc(i,o):null}const r="bias"===this.contour?range(-3,3,.25):"sensitivity"===this.contour?range(-6,6,.5):"accuracy"===this.contour?range(0,1,.05):null,n=contours().size([t,t]).thresholds(r),a=this.getComputedStyleValue("bias"===this.contour?"---color-element-background":"sensitivity"===this.contour?"---color-d":"accuracy"===this.contour?"---color-acc-dark":null),i=this.getComputedStyleValue("bias"===this.contour?"---color-c":"sensitivity"===this.contour||"accuracy"===this.contour?"---color-element-background":null),o=linear().domain(extent(r)).interpolate((()=>interpolateRgb(a,i))),s=$.selectAll(".plot-contour").data([this.contour]),u=s.enter().append("g").classed("plot-contour",!0).merge(s).selectAll(".contour").data(n(e));u.enter().append("path").classed("contour",!0).merge(u).transition().duration(2*c).ease(cubicOut).attr("d",index(identity$1().scale(l/t))).attr("fill",(t=>o(t.value))),u.exit().remove();const h=$.selectAll(".title-contour").data([this.contour]);h.enter().append("text").classed("title-contour",!0).attr("text-anchor","middle").merge(h).classed("math-var","bias"===this.contour||"sensitivity"===this.contour).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${this.rem})`:"accuracy"===this.contour?`translate(${l+1.125*this.rem}, ${this.rem})`:null).text("bias"===this.contour?"c":"sensitivity"===this.contour?"d′":"accuracy"===this.contour?"Acc":null);const d=100,f=[];for(let e=.5,r=0;e<d;e+=1,r+=4)f[r]="bias"===this.contour?-(e/t*6-3):"sensitivity"===this.contour?e/t*12-6:"accuracy"===this.contour?e/t:null,f[r+1]=f[r],f[r+2]=f[r],f[r+3]=f[r];const p=contours().size([4,d]).thresholds(r),g=linear().domain("bias"===this.contour?[3,-3]:"sensitivity"===this.contour?[6,-6]:"accuracy"===this.contour?[1,0]:null).range([0,10*this.rem]),m=$.selectAll(".legend-contour").data([this.contour]),b=m.enter().append("g").classed("legend-contour",!0),y=b.merge(m).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${1.5*this.rem})`:"accuracy"===this.contour?`translate(${l+1.5*this.rem}, ${1.5*this.rem})`:null);m.exit().remove(),b.append("g").classed("axis-contour",!0),y.select(".axis-contour").call(axisLeft(g).ticks(7).tickSize(0)).attr("font-size",null).attr("font-family",null);const v=y.selectAll(".contour").data(p(f));v.enter().append("path").classed("contour",!0).merge(v).attr("d",index(identity$1().scale(10*this.rem/d))).attr("fill",(t=>o(t.value))),v.exit().remove()}else{$.selectAll(".plot-contour").data([]).exit().remove();$.selectAll(".title-contour").data([]).exit().remove();$.selectAll(".legend-contour").data([]).exit().remove()}v.append("g").classed("axis-x",!0);$.select(".axis-x").attr("transform",`translate(0, ${s})`).transition().duration(2*c).ease(cubicOut).call(axisBottom(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const _=v.append("text").classed("title-x",!0).attr("text-anchor","middle");_.append("tspan").classed("z math-var",!0),_.append("tspan").classed("name",!0);const S=$.select(".title-x").attr("transform",`translate(${l/2}, ${s+2.25*this.rem})`);S.select("tspan.z").text(this.zRoc?"z":""),S.select("tspan.name").text(this.zRoc?"(False Alarm Rate)":"False Alarm Rate"),v.append("g").classed("axis-y",!0);$.select(".axis-y").transition().duration(2*c).ease(cubicOut).call(axisLeft(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const E=v.append("text").classed("title-y",!0).attr("text-anchor","middle");E.append("tspan").classed("z math-var",!0),E.append("tspan").classed("name",!0);const T=$.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${s/2})rotate(-90)`);T.select("tspan.z").text(this.zRoc?"z":""),T.select("tspan.name").text(this.zRoc?"(Hit Rate)":"Hit Rate"),v.append("line").classed("diagonal",!0),$.select(".diagonal").attr("x1",this.zRoc?u(-3):u(0)).attr("y1",this.zRoc?h(-3):h(0)).attr("x2",this.zRoc?u(3):u(1)).attr("y2",this.zRoc?h(3):h(1)),b.append("g").classed("content",!0);const w=y.select(".content"),A=w.selectAll(".curve-iso-d").data(this.isoDArray,(t=>t.name)),x=A.enter().append("path").classed("curve-iso-d",!0).attr("clip-path","url(#clip-roc-space)").merge(A);this.firstUpdate||t.has("zRoc")?x.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("d",(t=>f(range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.dFar2Hr(t.d,SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.dFar2Hr(t.d,u.invert(e),t.s)})))))):this.sdt?x.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const a=interpolate$1(void 0!==n.d?n.d:t.d,t.d),i=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>{n.d=a(t),n.s=i(t);const e=range(u.range()[0],u.range()[1]+1,1).map((t=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?SDTMath.dFar2Hr(n.d,SDTMath.zfar2Far(u.invert(t)),n.s):SDTMath.dFar2Hr(n.d,u.invert(t),n.s)})));return f(e)}})):x.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.d=void 0,n.s=void 0;const a=interpolate$1(void 0!==n.hr?n.hr:t.hr,t.hr),i=interpolate$1(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=a(e),n.far=i(e);const r=range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.dFar2Hr(SDTMath.hrFar2D(n.hr,n.far,t.s),SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.dFar2Hr(SDTMath.hrFar2D(n.hr,n.far,t.s),u.invert(e),t.s)})));return f(r)}})),A.exit().remove();const R=w.selectAll(".curve-iso-c").data(this.isoCArray,(t=>t.name)),C=R.enter().append("path").classed("curve-iso-c",!0).attr("clip-path","url(#clip-roc-space)").merge(R);this.firstUpdate||t.has("zRoc")?C.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("d",(t=>f(range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.cFar2Hr(t.c,SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.cFar2Hr(t.c,u.invert(e),t.s)})))))):this.sdt?C.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const a=interpolate$1(void 0!==n.c?n.c:t.c,t.c),i=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>{n.c=a(t),n.s=i(t);const e=range(u.range()[0],u.range()[1]+1,1).map((t=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?SDTMath.cFar2Hr(n.c,SDTMath.zfar2Far(u.invert(t)),n.s):SDTMath.cFar2Hr(n.c,u.invert(t),n.s)})));return f(e)}})):C.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e];n.c=void 0,n.s=void 0;const a=interpolate$1(void 0!==n.hr?n.hr:t.hr,t.hr),i=interpolate$1(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=a(e),n.far=i(e);const r=range(u.range()[0],u.range()[1]+1,1).map((e=>({far:this.zRoc?SDTMath.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?SDTMath.cFar2Hr(SDTMath.hrFar2C(n.hr,n.far,t.s),SDTMath.zfar2Far(u.invert(e)),t.s):SDTMath.cFar2Hr(SDTMath.hrFar2C(n.hr,n.far,t.s),u.invert(e),t.s)})));return f(r)}})),R.exit().remove();const O=w.selectAll(".point").data(this.pointArray,(t=>t.name)),P=O.enter().append("g").classed("point",!0);P.append("circle").classed("circle",!0),P.append("text").classed("label",!0);const I=P.merge(O);I.select("text").text((t=>t.label)),(this.firstUpdate||t.has("interactive"))&&(this.interactive?I.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",((t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.zRoc?SDTMath.hr2Zhr(e.hr):e.hr,n=this.zRoc?SDTMath.far2Zfar(e.far):e.far;switch(t.key){case"ArrowUp":r+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowDown":r-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowRight":n+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowLeft":n-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05}r=this.zRoc?SDTMath.zhr2Hr(r):r,n=this.zRoc?SDTMath.zfar2Far(n):n,r=r<.001?.001:r>.999?.999:r,n=n<.001?.001:n>.999?.999:n,r===e.hr&&n===e.far||(e.hr=r,e.far=n,"default"===e.name&&(this.hr=e.hr,this.far=e.far),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))),t.preventDefault()}})):I.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),this.firstUpdate||t.has("zRoc")?I.transition().duration(this.drag?0:2*c).ease(cubicOut).attr("transform",((t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?SDTMath.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr)}\n          )`})):this.sdt?I.transition().duration(this.drag?0:c).ease(cubicOut).attrTween("transform",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:t.d,t.d),i=interpolate$1(void 0!==n.c?n.c:t.c,t.c),o=interpolate$1(void 0!==n.s?n.s:t.s,t.s);return t=>(n.d=a(t),n.c=i(t),n.s=o(t),`translate(\n              ${u(this.zRoc?SDTMath.far2Zfar(SDTMath.dC2Far(n.d,n.c,n.s)):SDTMath.dC2Far(n.d,n.c,n.s))},\n              ${h(this.zRoc?SDTMath.hr2Zhr(SDTMath.dC2Hr(n.d,n.c,n.s)):SDTMath.dC2Hr(n.d,n.c,n.s))}\n            )`)})):I.transition().duration(this.drag?0:c).ease(cubicOut).attr("transform",((t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?SDTMath.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?SDTMath.hr2Zhr(t.hr):t.hr)}\n          )`})),O.exit().remove(),this.drag=!1,this.sdt=!1,this.firstUpdate=!1}}customElements.define("roc-space",ROCSpace);let _t$c,_t2$b,_t3$9,_t4$9,_t5$9,_t6$9,_t7$9,_t8$7,_t9$7,_t10$7,_t11$7,_t12$2,_t13$2,_t14$2,_t15$2,_t16$2,_t17$2,_t18$2,_t19$2,_t20$2,_t21$1,_t22$1,_$c=t=>t;class DetectableControl extends DetectableElement{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{atribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.duration=void 0,this.coherence=void 0,this.payoff=void 0,this.colors=["none","accuracy","stimulus","response","outcome"],this.color=void 0,this.zRoc=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}setPayoff(t){this.payoff=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-payoff",{detail:{payoff:this.payoff},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-color",{detail:{color:this.color},bubbles:!0}))}flipZRoc(t){this.zRoc=t.target.checked,this.dispatchEvent(new CustomEvent("detectable-control-z-roc",{detail:{zRoc:this.zRoc},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("detectable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("detectable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("detectable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,r$2(_t$c||(_t$c=_$c`
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
      `))]}render(){return $(_t2$b||(_t2$b=_$c`
      <div class="holder">
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>`),this.trials?$(_t3$9||(_t3$9=_$c`<decidables-slider min="1" max="100" step="1" .value=${0} @change=${0} @input=${0}>Trials</decidables-slider>`),this.trials,this.setTrials.bind(this),this.setTrials.bind(this)):$(_t4$9||(_t4$9=_$c``)),this.duration?$(_t5$9||(_t5$9=_$c`<decidables-slider min="10" max="2000" step="10" .value=${0} @change=${0} @input=${0}>Duration</decidables-slider>`),this.duration,this.setDuration.bind(this),this.setDuration.bind(this)):$(_t6$9||(_t6$9=_$c``)),this.coherence?$(_t7$9||(_t7$9=_$c`<decidables-slider min="0" max="1" step=".01" .value=${0} @change=${0} @input=${0}>Coherence</decidables-slider>`),this.coherence,this.setCoherence.bind(this),this.setCoherence.bind(this)):$(_t8$7||(_t8$7=_$c``)),this.payoff?$(_t9$7||(_t9$7=_$c`<decidables-slider class="payoff" min="0" max="100" step="1" .value=${0} @change=${0} @input=${0}>Payoff</decidables-slider>`),this.payoff,this.setPayoff.bind(this),this.setPayoff.bind(this)):$(_t10$7||(_t10$7=_$c``)),void 0!==this.color?$(_t11$7||(_t11$7=_$c`
            <decidables-toggle @change=${0}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${0}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="accuracy" ?checked=${0}>Accuracy</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="stimulus" ?checked=${0}>Stimulus</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="response" ?checked=${0}>Response</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${0}>Outcome</decidables-toggle-option>
            </decidables-toggle>
          `),this.chooseColor.bind(this),"none"===this.color,"accuracy"===this.color,"stimulus"===this.color,"response"===this.color,"outcome"===this.color):$(_t12$2||(_t12$2=_$c``)),void 0!==this.zRoc?$(_t13$2||(_t13$2=_$c`
            <decidables-switch ?checked=${0} @change=${0}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidables-switch>
          `),this.zRoc,this.flipZRoc.bind(this)):$(_t14$2||(_t14$2=_$c``)),this.run||this.pause||this.reset?$(_t15$2||(_t15$2=_$c`
            <div class="buttons">
              ${0}
              ${0}
              ${0}
            </div>
          `),this.run?$(_t16$2||(_t16$2=_$c`<decidables-button name="run" ?disabled=${0} @click=${0}>Run</decidables-button>`),"running"===this.state||"ended"===this.state,this.doRun.bind(this)):$(_t17$2||(_t17$2=_$c``)),this.pause?$(_t18$2||(_t18$2=_$c`<decidables-button name="pause" ?disabled=${0} @click=${0}>Pause</decidables-button>`),"running"!==this.state,this.doPause.bind(this)):$(_t19$2||(_t19$2=_$c``)),this.reset?$(_t20$2||(_t20$2=_$c`<decidables-button name="reset" ?disabled=${0} @click=${0}>Reset</decidables-button>`),"resetted"===this.state,this.doReset.bind(this)):$(_t21$1||(_t21$1=_$c``))):$(_t22$1||(_t22$1=_$c``)))}}customElements.define("detectable-control",DetectableControl);let _t$b,_t2$a,_$b=t=>t;class SDTModel extends DetectableElement{static get properties(){return{color:{attribute:"color",type:String,reflect:!0},distributions:{attribute:"distributions",type:Boolean,reflect:!0},threshold:{attribute:"threshold",type:Boolean,reflect:!0},unequal:{attribute:"unequal",type:Boolean,reflect:!0},sensitivity:{attribute:"sensitivity",type:Boolean,reflect:!0},bias:{attribute:"bias",type:Boolean,reflect:!0},variance:{attribute:"variance",type:Boolean,reflect:!0},histogram:{attribute:"histogram",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},binWidth:{attribute:!1,type:Number,reflect:!1},trials:{attribute:!1,type:Array,reflect:!1},width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.colors=["outcome","response","stimulus","none"],this.color="outcome",this.distributions=!1,this.threshold=!1,this.unequal=!1,this.sensitivity=!1,this.bias=!1,this.variance=!1,this.histogram=!1,this.d=1,this.c=0,this.s=1,this.binWidth=.25,this.signals=["present","absent"],this.responses=["present","absent"],this.trials=[],this.width=NaN,this.height=NaN,this.rem=NaN,this.muN=NaN,this.muS=NaN,this.l=NaN,this.hS=NaN,this.binRange=[-3,3],this.h=0,this.m=0,this.fa=0,this.cr=0,this.firstUpdate=!0,this.drag=!1,this.alignState()}reset(){this.trials=[],this.h=0,this.m=0,this.fa=0,this.cr=0}trial(t,e,r,n,a){const i={new:!0,paused:!1};i.trial=t,i.signal=e,i.duration=r,i.wait=n,i.iti=a,i.evidence=jstat.normal.sample(0,1),this.alignTrial(i),this.trials.push(i),this.requestUpdate()}alignTrial(t){return"present"===t.signal?(t.trueEvidence=t.evidence*this.s+this.muS,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"h":"m"):(t.trueEvidence=t.evidence+this.muN,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"fa":"cr"),t.new||(this[t.outcome]+=1),t}alignState(){this.far=SDTMath.dC2Far(this.d,this.c,this.s),this.hr=SDTMath.dC2Hr(this.d,this.c,this.s),this.muN=SDTMath.d2MuN(this.d,this.s),this.muS=SDTMath.d2MuS(this.d,this.s),this.l=SDTMath.c2L(this.c,this.s),this.hS=SDTMath.s2H(this.s),this.h=0,this.m=0,this.fa=0,this.cr=0;for(let t=0;t<this.trials.length;t+=1)this.alignTrial(this.trials[t])}static get styles(){return[super.styles,r$2(_t$b||(_t$b=_$b`
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
      `))]}render(){return $(_t2$a||(_t2$a=_$b`
      ${0}
    `),DetectableElement.svgFilters)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-model-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far,hr:this.hr,h:this.h,m:this.m,fa:this.fa,cr:this.cr},bubbles:!0}))}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.getDimensions.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.getDimensions.bind(this)),super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this.getDimensions()}update(t){if(super.update(t),this.alignState(),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,a;e/r>1.8?(a=r,n=1.8*a):(n=e,a=n/1.8);const i=2*this.rem,o=3*this.rem,s=3*this.rem,l=a-(i+o),c=n-(s+(this.histogram&&this.distributions?3:.75)*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=linear().domain([-3,3]).range([0,c]),d=linear().domain([.5,0]).range([0,l]),f=h(this.binWidth)-h(0),p=linear().domain([l/f,0]).range([0,l]),g=drag().subject((()=>({x:h(this.l),y:0}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;let e=h.invert(t.x);e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,this.c=SDTMath.l2C(e,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),m=drag().subject((()=>({x:h(this.muN),y:0}))).on("start",(t=>{select(t.currentTarget).classed("dragging",!0)})).on("drag",(t=>{this.drag=!0;let e=h.invert(t.x);e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,this.d=SDTMath.muN2D(e,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),b=drag().subject((()=>({x:h(this.muS),y:d(this.hS)}))).on("start",((t,e)=>{select(t.currentTarget).classed("dragging",!0),e.startX=t.x,e.startY=t.y,e.startHS=this.hS,e.startMuS=this.muS})).on("drag",((t,e)=>{this.drag=!0;let r=this.muS;this.interactive&&(r=h.invert(t.x),r=r<h.domain()[0]?h.domain()[0]:r>h.domain()[1]?h.domain()[1]:r);let n=this.hS;this.unequal&&(n=d.invert(t.y),n=n<.01?.01:n>d.domain()[0]?d.domain()[0]:n),this.interactive&&this.unequal&&t.sourceEvent.shiftKey&&(Math.abs(t.x-e.startX)>Math.abs(t.y-e.startY)?n=e.startHS:r=e.startMuS),this.unequal&&(this.s=SDTMath.h2S(n),this.c=SDTMath.l2C(this.l,this.s)),this.d=SDTMath.muS2D(r,this.s),this.alignState(),this.sendEvent()})).on("end",(t=>{select(t.currentTarget).classed("dragging",!1)})),y=line().x((t=>h(t.e))).y((t=>d(t.p))),v=select(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),$=v.enter().append("svg").classed("main",!0),_=$.merge(v).attr("viewBox",`0 0 ${n} ${a}`),S=$.append("g").classed("plot",!0),E=_.select(".plot").attr("transform",`translate(${s}, ${i})`),T=S.append("g").classed("underlayer",!0),w=E.select(".underlayer");T.append("rect").classed("background",!0),w.select(".background").attr("height",l).attr("width",c),T.append("g").classed("axis-x",!0);w.select(".axis-x").attr("transform",`translate(0, ${l})`).call(axisBottom(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),T.append("text").classed("title-x",!0).attr("text-anchor","middle").text("Evidence"),w.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`);const A=w.selectAll(".axis-y").data(this.distributions?[{}]:[]);A.enter().append("g").classed("axis-y",!0).merge(A).call(axisLeft(d).ticks(5)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),A.exit().remove();const x=w.selectAll(".title-y").data(this.distributions?[{}]:[]);x.enter().append("text").classed("title-y",!0).attr("text-anchor","middle").text("Probability").merge(x).attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),x.exit().remove();const R=w.selectAll(".axis-y2").data(this.histogram?[{}]:[]);R.enter().append("g").classed("axis-y2",!0).merge(R).attr("transform",this.distributions?`translate(${c}, 0)`:"").call(this.distributions?axisRight(p).ticks(10):axisLeft(p).ticks(10)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),R.exit().remove();const C=w.selectAll(".title-y2").data(this.histogram?[{}]:[]);C.enter().append("text").classed("title-y2",!0).attr("text-anchor","middle").text("Count").merge(C).attr("transform",this.distributions?`translate(${c+1.5*this.rem}, ${l/2})rotate(90)`:`translate(${-1.5*this.rem}, ${l/2})rotate(-90)`),C.exit().remove(),S.append("g").classed("content",!0);const O=E.select(".content"),P=O.selectAll(".signal-noise").data(this.distributions?[{}]:[]),I=P.enter().append("g").classed("signal-noise",!0),k=I.merge(P);P.exit().remove();const N=I.append("g").classed("noise",!0),M=k.selectAll(".noise").attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muN;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.muN&&(this.d=SDTMath.muN2D(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?M.call(m):M.on(".drag",null)),N.append("path").classed("curve-cr",!0),M.select(".curve-cr").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.c=i(t),n.s=o(t);const e=range(h.domain()[0],SDTMath.c2L(n.c,n.s),.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:SDTMath.c2L(n.c,n.s),p:jstat.normal.pdf(SDTMath.c2L(n.c,n.s),SDTMath.d2MuN(n.d,n.s),1)}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),y(e)}})),N.append("path").classed("curve-fa",!0),M.select(".curve-fa").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.c=i(t),n.s=o(t);const e=range(SDTMath.c2L(n.c,n.s),h.domain()[1],.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:h.domain()[1],p:jstat.normal.pdf(h.domain()[1],SDTMath.d2MuN(n.d,n.s),1)}),e.push({e:h.domain()[1],p:0}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),y(e)}})),N.append("path").classed("curve-noise",!0),M.select(".curve-noise").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.s=i(t);const e=range(h.domain()[0],h.domain()[1],.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuN(n.d,n.s),1)})));return e.push({e:h.domain()[1],p:jstat.normal.pdf(h.domain()[1],SDTMath.d2MuN(n.d,n.s),1)}),y(e)}}));const D=I.append("g").classed("signal",!0),L=k.selectAll(".signal").attr("tabindex",this.interactive||this.unequal?0:null).classed("interactive",this.interactive).classed("unequal",this.unequal).on("keydown.sensitivity",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muS;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.muS&&(this.d=SDTMath.muS2D(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null).on("keydown.variance",this.unequal?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let e=this.hS;switch(t.key){case"ArrowUp":e+=t.shiftKey?.002:.02;break;case"ArrowDown":e-=t.shiftKey?.002:.02}e=e<.01?.01:e>d.domain()[0]?d.domain()[0]:e,e!==this.hS&&(this.s=SDTMath.h2S(e),this.d=SDTMath.muN2D(this.muN,this.s),this.c=SDTMath.l2C(this.l,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive")||t.has("unequal"))&&(this.interactive||this.unequal?L.call(b):L.on(".drag",null)),D.append("path").classed("curve-m",!0),L.select(".curve-m").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.c=i(t),n.s=o(t);const e=range(h.domain()[0],SDTMath.c2L(n.c,n.s),.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:SDTMath.c2L(n.c,n.s),p:jstat.normal.pdf(SDTMath.c2L(n.c,n.s),SDTMath.d2MuS(n.d,n.s),n.s)}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),y(e)}})),D.append("path").classed("curve-h",!0),L.select(".curve-h").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.c?n.c:this.c,this.c),o=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.c=i(t),n.s=o(t);const e=range(SDTMath.c2L(n.c,n.s),h.domain()[1],.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:h.domain()[1],p:jstat.normal.pdf(h.domain()[1],SDTMath.d2MuS(n.d,n.s),n.s)}),e.push({e:h.domain()[1],p:0}),e.push({e:SDTMath.c2L(n.c,n.s),p:0}),y(e)}})),D.append("path").classed("curve-signal",!0),L.select(".curve-signal").transition().duration(this.drag?0:u).ease(cubicOut).attrTween("d",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d),i=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=a(t),n.s=i(t);const e=range(h.domain()[0],h.domain()[1],.05).map((t=>({e:t,p:jstat.normal.pdf(t,SDTMath.d2MuS(n.d,n.s),n.s)})));return e.push({e:h.domain()[1],p:jstat.normal.pdf(h.domain()[1],SDTMath.d2MuS(n.d,n.s),n.s)}),y(e)}}));const U=O.selectAll(".measure-d").data(this.sensitivity?[{}]:[]),F=U.enter().append("g").classed("measure-d",!0);F.append("line").classed("line",!0),F.append("line").classed("cap-left",!0),F.append("line").classed("cap-right",!0);const j=F.append("text").classed("label",!0);j.append("tspan").classed("d math-var",!0).text("d′"),j.append("tspan").classed("equals",!0).text(" = "),j.append("tspan").classed("value",!0);const H=F.merge(U);H.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muN)).attr("y1",d(.43)).attr("x2",h(this.muS)).attr("y2",d(.43)),H.select(".cap-left").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muN)).attr("y1",d(.43)+5).attr("x2",h(this.muN)).attr("y2",d(.43)-5),H.select(".cap-right").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS)).attr("y1",d(.43)+5).attr("x2",h(this.muS)).attr("y2",d(.43)-5);H.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(this.muN>this.muS?this.muN:this.muS)+5).attr("y",d(.43)+3).select(".value").tween("text",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.d?n.d:this.d,this.d);return t=>{n.d=a(t),select(n).text(+n.d.toFixed(3))}})),U.exit().remove();const B=O.selectAll(".measure-c").data(this.bias?[{}]:[]),q=B.enter().append("g").classed("measure-c",!0);q.append("line").classed("line",!0),q.append("line").classed("cap-zero",!0);const V=q.append("text").classed("label",!0);V.append("tspan").classed("c math-var",!0).text("c"),V.append("tspan").classed("equals",!0).text(" = "),V.append("tspan").classed("value",!0);const G=q.merge(B);G.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.l)).attr("y1",d(.47)).attr("x2",h(0)).attr("y2",d(.47)),G.select(".cap-zero").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(0)).attr("y1",d(.47)+5).attr("x2",h(0)).attr("y2",d(.47)-5);G.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(0)+(this.l<0?5:-5)).attr("y",d(.47)+3).attr("text-anchor",this.c<0?"start":"end").select(".value").tween("text",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.c?n.c:this.c,this.c);return t=>{n.c=a(t),select(n).text(+n.c.toFixed(3))}})),B.exit().remove();const z=O.selectAll(".measure-s").data(this.variance?[{}]:[]),Y=z.enter().append("g").classed("measure-s",!0);Y.append("line").classed("line",!0),Y.append("line").classed("cap-left",!0),Y.append("line").classed("cap-right",!0);const W=Y.append("text").classed("label",!0);W.append("tspan").classed("s math-var",!0).text("σ"),W.append("tspan").classed("equals",!0).text(" = "),W.append("tspan").classed("value",!0);const K=Y.merge(z);K.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS-this.s)).attr("y1",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s).attr("x2",h(this.muS+this.s)).attr("y2",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s),K.select(".cap-left").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS-this.s)).attr("y1",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS-this.s)).attr("y2",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s-5),K.select(".cap-right").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.muS+this.s)).attr("y1",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS+this.s)).attr("y2",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s-5);K.select(".label").transition().duration(this.drag?0:u).ease(cubicOut).attr("x",h(this.muS)).attr("y",d(jstat.normal.pdf(this.s,0,this.s))+10/this.s-3).select(".value").tween("text",((t,e,r)=>{const n=r[e],a=interpolate$1(void 0!==n.s?n.s:this.s,this.s);return t=>{n.s=a(t),select(n).text(+n.s.toFixed(3))}})),z.exit().remove();const X=O.selectAll(".threshold").data(this.threshold?[{}]:[]),Z=X.enter().append("g").classed("threshold",!0);Z.append("line").classed("line",!0),Z.append("circle").classed("handle",!0);const Q=Z.merge(X).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Q.call(g).on("keydown",(t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.l;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}e=e<h.domain()[0]?h.domain()[0]:e>h.domain()[1]?h.domain()[1]:e,e!==this.l&&(this.c=SDTMath.l2C(e,this.s),this.alignState(),this.sendEvent()),t.preventDefault()}})):Q.on("drag",null).on("keydown",null)),Q.select(".line").transition().duration(this.drag?0:u).ease(cubicOut).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),Q.select(".handle").transition().duration(this.drag?0:u).ease(cubicOut).attr("cx",h(this.l)).attr("cy",d(.54)),X.exit().remove();const J=O.selectAll(".histogram").data(this.histogram?[{}]:[]),tt=J.enter().append("g").classed("histogram",!0).merge(J);if(J.exit().remove(),this.histogram){const t=bin().value((t=>t.trueEvidence)).domain(h.domain()).thresholds(range(this.binRange[0],this.binRange[1],this.binWidth)),e=t(this.trials);let r=-1,n=-1;for(let t=0;t<e.length;t+=1)for(let a=0;a<e[t].length;a+=1)e[t][a].binValue=e[t].x0,e[t][a].binCount=a,0===t&&(r=a),t===e.length-1&&(n=a);for(let t=0;t<this.trials.length;t+=1)this.trials[t].trueEvidence<this.binRange[0]&&(r+=1,this.trials[t].binCount=r,this.trials[t].binValue=e[0].x0),this.trials[t].trueEvidence>this.binRange[1]&&(n+=1,this.trials[t].binCount=n,this.trials[t].binValue=e[e.length-1].x0);const a=tt.selectAll(".trial").data(this.trials,(t=>t.trial)),i=a.enter().append("rect").attr("stroke-width",3).attr("data-new-trial-ease-time",0).attr("stroke",this.getComputedStyleValue("---color-acc")).attr("fill",this.getComputedStyleValue("---color-acc-light")).merge(a).attr("class",(t=>`trial ${t.outcome}`)).attr("width",f-3).attr("height",f-3),o=i.filter((t=>t.new&&!t.paused));if(!o.empty()){const t=o.attr("data-new-trial-ease-time"),e=e=>linear().domain([0,1]).range([t,1])(e),r=e=>r=>linear().domain([e(t),1]).range([0,1])(e(r));o.transition("new").duration((e=>Math.floor((.75*e.duration+.25*e.wait)*(1-t)))).ease(e).attr("data-new-trial-ease-time",1).attrTween("stroke",((t,e,n)=>{const a=n[e],i=interpolateRgb(a.getAttribute("stroke"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"));return t=>i(r(cubicIn)(t))})).attrTween("fill",((t,e,n)=>{const a=n[e],i=interpolateRgb(a.getAttribute("fill"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"));return t=>i(r(cubicIn)(t))})).attrTween("x",((t,e,n)=>{const a=interpolate$1(n[e].getAttribute("x"),h(t.binValue)+1.5);return t=>a(r(cubicOut)(t))})).attrTween("y",((t,e,n)=>{const a=interpolate$1(n[e].getAttribute("y"),d(0)+1.5-(t.binCount+1)*f);return t=>a(r(cubicIn)(t))})).on("end",((t,e,r)=>{r[e].removeAttribute("data-new-trial-ease-time"),t.new=!1,this.alignTrial(t),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{stimulus:t.signal,response:t.response,outcome:t.outcome,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:0},bubbles:!0}))}))}const s=i.filter((t=>t.new&&t.paused));if(!s.empty()){const t=s.attr("data-new-trial-ease-time");s.transition().duration(u).ease(cubicOut).attr("x",(e=>interpolate$1(0,h(e.binValue)+1.5)(cubicOut(t)))).attr("y",(e=>interpolate$1(0,d(0)+1.5-(e.binCount+1)*f)(cubicIn(t)))).attr("stroke",(e=>interpolateRgb(this.getComputedStyleValue("---color-acc"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${e.outcome}`):this.getComputedStyleValue("---color-acc"))(cubicIn(t)))).attr("fill",(e=>interpolateRgb(this.getComputedStyleValue("---color-acc-light"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${e.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))(cubicIn(t))))}i.filter((t=>!t.new)).transition().duration(u).ease(cubicOut).attr("x",(t=>h(t.binValue)+1.5)).attr("y",(t=>d(0)+1.5-(t.binCount+1)*f)).attr("stroke",(t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"))).attr("fill",(t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))),a.exit().transition().duration(u).ease(linear$1).attrTween("stroke",((t,e,r)=>{const n=r[e],a=interpolateRgb(n.getAttribute("stroke"),this.getComputedStyleValue("---color-acc"));return t=>a(cubicIn(t))})).attrTween("fill",((t,e,r)=>{const n=r[e],a=interpolateRgb(n.getAttribute("fill"),this.getComputedStyleValue("---color-acc-light"));return t=>a(cubicIn(t))})).attrTween("x",((t,e,r)=>{const n=interpolate$1(r[e].getAttribute("x"),0);return t=>n(cubicIn(t))})).attrTween("y",((t,e,r)=>{const n=interpolate$1(r[e].getAttribute("y"),0);return t=>n(cubicOut(t))})).remove()}const et=S.append("g").classed("overlayer",!0),rt=E.select(".overlayer");et.append("rect").classed("background",!0),rt.select(".background").attr("height",l).attr("width",c),this.drag=!1,this.firstUpdate=!1}pauseTrial(){const t=select(this.renderRoot).select(".trial[data-new-trial-ease-time]");t.interrupt("new"),t.datum((t=>(t.paused=!0,t)))}resumeTrial(){select(this.renderRoot).select(".trial[data-new-trial-ease-time]").datum((t=>(t.paused=!1,t))),this.requestUpdate()}}customElements.define("sdt-model",SDTModel);let _t$a,_t2$9,_t3$8,_t4$8,_t5$8,_t6$8,_t7$8,_t8$6,_t9$6,_t10$6,_t11$6,_t12$1,_t13$1,_t14$1,_t15$1,_t16$1,_t17$1,_t18$1,_t19$1,_t20$1,_$a=t=>t;class DetectableResponse extends DetectableElement{static get properties(){return{feedback:{attribute:"feedback",type:String,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedbacks=["none","accuracy","outcome"],this.feedback="outcome",this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.hPayoff=0,this.mPayoff=0,this.crPayoff=0,this.faPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["present","absent"],this.signal=void 0,this.responses=["present","absent"],this.response=void 0,this.outcomes=["h","m","fa","cr","nr"],this.outcome=void 0,this.accuracies=["c","e","nr"],this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.c=0,this.e=0,this.nr=0}get trialPayoff(){switch(this.outcome){case"h":return this.hPayoff;case"m":return this.mPayoff;case"fa":return this.faPayoff;case"cr":return this.crPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.h*this.hPayoff+this.m*this.mPayoff+this.cr*this.crPayoff+this.fa*this.faPayoff+this.nr*this.nrPayoff}start(t,e){this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.nr+=1,this.accuracy="nr")}present(){this.responded("present")}absent(){this.responded("absent")}responded(t){this.state="feedback",this.response=t,"present"===this.signal&&"present"===this.response?(this.outcome="h",this.h+=1,this.accuracy="c",this.c+=1):"present"===this.signal&&"absent"===this.response?(this.outcome="m",this.m+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"present"===this.response?(this.outcome="fa",this.fa+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"absent"===this.response&&(this.outcome="cr",this.cr+=1,this.accuracy="c",this.c+=1),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{trial:this.trialCount,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:this.nr,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.nr=0,this.c=0,this.e=0}static get styles(){return[super.styles,r$2(_t$a||(_t$a=_$a`
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

        :host([payoff="trial"]) .feedback,
        :host([payoff="total"]) .feedback {
          height: 4rem;
        }

        /* Payoff feedback */
        .payoff {
          text-align: center;
        }

        .payoff .label {
          font-weight: 600;
        }
      `))]}render(){return $(_t2$9||(_t2$9=_$a`
      <div class="holder">
        <div class="responses">
          <decidables-button name="present" class=${0} ?disabled=${0} @click=${0}>Present</decidables-button>
          <decidables-button name="absent" class=${0} ?disabled=${0} @click=${0}>Absent</decidables-button>
        </div>
        ${0}
      </div>`),"feedback"===this.state&&"present"===this.response?"selected":"waiting"===this.state?"waiting":"","waiting"!==this.state||!0!==this.interactive,this.present.bind(this),"feedback"===this.state&&"absent"===this.response?"selected":"waiting"===this.state?"waiting":"","waiting"!==this.state||!0!==this.interactive,this.absent.bind(this),this.trial||"none"!==this.feedback||"total"===this.payoff?$(_t3$8||(_t3$8=_$a`
            <div class="feedbacks">
              ${0}
              ${0}
              ${0}
            </div>`),this.trial?$(_t4$8||(_t4$8=_$a`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${0}</span><span class="of"> of </span><span class="total">${0}</span>
                  </div>`),this.trialCount,this.trialTotal):$(_t5$8||(_t5$8=_$a``)),"none"!==this.feedback?$(_t6$8||(_t6$8=_$a`
                  <div class=${0}>
                    ${0}
                    ${0}
                  </div>`),`feedback ${"feedback"===this.state?"outcome"===this.feedback?this.outcome:this.accuracy:""}`,"feedback"===this.state?"outcome"===this.feedback?"h"===this.outcome?$(_t7$8||(_t7$8=_$a`<span class="outcome">Hit</span>`)):"m"===this.outcome?$(_t8$6||(_t8$6=_$a`<span class="outcome">Miss</span>`)):"fa"===this.outcome?$(_t9$6||(_t9$6=_$a`<span class="outcome">False<br>Alarm</span>`)):"cr"===this.outcome?$(_t10$6||(_t10$6=_$a`<span class="outcome">Correct<br>Rejection</span>`)):$(_t11$6||(_t11$6=_$a`<span class="outcome">No<br>Response</span>`)):"c"===this.accuracy?$(_t12$1||(_t12$1=_$a`<span class="outcome">Correct</span>`)):"e"===this.accuracy?$(_t13$1||(_t13$1=_$a`<span class="outcome">Error</span>`)):$(_t14$1||(_t14$1=_$a`<span class="outcome">No<br>Response</span>`)):"","trial"===this.payoff||"total"===this.payoff?$(_t15$1||(_t15$1=_$a`<span class="payoff">${0}</span>`),this.trialPayoff):$(_t16$1||(_t16$1=_$a``))):$(_t17$1||(_t17$1=_$a``)),"total"===this.payoff?$(_t18$1||(_t18$1=_$a`
                  <div class="payoff">
                    <span class="label">Total: </span><span class="value">${0}</span>
                  </div>`),this.totalPayoff):$(_t19$1||(_t19$1=_$a``))):$(_t20$1||(_t20$1=_$a``)))}}customElements.define("detectable-response",DetectableResponse);let _t$9,_t2$8,_t3$7,_t4$7,_t5$7,_t6$7,_t7$7,_t8$5,_t9$5,_t10$5,_t11$5,_t12,_t13,_t14,_t15,_t16,_t17,_t18,_t19,_t20,_t21,_t22,_t23,_t24,_t25,_t26,_t27,_t28,_t29,_t30,_t31,_t32,_t33,_t34,_t35,_t36,_t37,_t38,_t39,_t40,_t41,_t42,_t43,_t44,_t45,_t46,_$9=t=>t;class DetectableTable extends DetectableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",converter:DecidablesConverterSet,reflect:!0},color:{attribute:"color",type:String,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},acc:{attribute:!1,type:Number,reflect:!1},ppv:{attribute:!1,type:Number,reflect:!1},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.numeric=!1,this.summaries=["stimulusRates","responseRates","accuracy"],this.summary=new Set,this.colors=["none","accuracy","stimulus","response","outcome"],this.color="outcome",this.h=40,this.m=60,this.fa=75,this.cr=25,this.alignState(),this.payoff=!1,this.hPayoff=void 0,this.mPayoff=void 0,this.crPayoff=void 0,this.faPayoff=void 0}alignState(){this.hr=SDTMath.hM2Hr(this.h,this.m),this.far=SDTMath.faCr2Far(this.fa,this.cr),this.acc=SDTMath.hMFaCr2Acc(this.h,this.m,this.fa,this.cr),this.ppv=SDTMath.hFa2Ppv(this.h,this.fa),this.fomr=SDTMath.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("detectable-table-change",{detail:{h:this.h,m:this.m,hr:this.hr,fa:this.fa,cr:this.cr,far:this.far,acc:this.acc,ppv:this.ppv,fomr:this.fomr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}hrInput(t){const e=parseFloat(t.target.value),r=this.h+this.m;this.h=Math.round(e*r),this.m=r-this.h,this.alignState(),this.sendEvent()}farInput(t){const e=parseFloat(t.target.value),r=this.fa+this.cr;this.fa=Math.round(e*r),this.cr=r-this.fa,this.alignState(),this.sendEvent()}accInput(t){const e=parseFloat(t.target.value),r=this.h+this.m,n=this.fa+this.cr,a=(this.hr+this.far-1)/2;let i=a+e,o=1+a-e;o>1&&(o=1,i=o+2*e-1),o<0&&(o=0,i=o+2*e-1),i>1&&(i=1,o=i-2*e+1),i<0&&(i=0,o=i-2*e+1),this.h=Math.round(i*r),this.m=r-this.h,this.fa=Math.round(o*n),this.cr=n-this.fa,this.alignState(),this.sendEvent()}ppvInput(t){const e=parseFloat(t.target.value),r=this.h+this.fa;this.h=Math.round(e*r),this.fa=r-this.h,this.alignState(),this.sendEvent()}fomrInput(t){const e=parseFloat(t.target.value),r=this.m+this.cr;this.m=Math.round(e*r),this.cr=r-this.m,this.alignState(),this.sendEvent()}static get styles(){return[super.styles,r$2(_t$9||(_t$9=_$9`
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

        /* (Default) Outcome color scheme */
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
      `))]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0});let e,r,n,a,i,o,s,l,c;return this.alignState(),this.numeric?(e=$(_t2$8||(_t2$8=_$9`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Hits</span>
          ${0}
        </decidables-spinner>
      `),!this.interactive,this.h,this.hInput.bind(this),this.payoff?$(_t3$7||(_t3$7=_$9`<span class="payoff">${0}</span>`),t.format(this.hPayoff)):$(_t4$7||(_t4$7=_$9``))),r=$(_t5$7||(_t5$7=_$9`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Misses</span>
          ${0}
        </decidables-spinner>
      `),!this.interactive,this.m,this.mInput.bind(this),this.payoff?$(_t6$7||(_t6$7=_$9`<span class="payoff">${0}</span>`),t.format(this.mPayoff)):$(_t7$7||(_t7$7=_$9``))),n=$(_t8$5||(_t8$5=_$9`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>False Alarms</span>
          ${0}
        </decidables-spinner>
      `),!this.interactive,this.fa,this.faInput.bind(this),this.payoff?$(_t9$5||(_t9$5=_$9`<span class="payoff">${0}</span>`),t.format(this.faPayoff)):$(_t10$5||(_t10$5=_$9``))),a=$(_t11$5||(_t11$5=_$9`
        <decidables-spinner ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <span>Correct Rejections</span>
          ${0}
        </decidables-spinner>
      `),!this.interactive,this.cr,this.crInput.bind(this),this.payoff?$(_t12||(_t12=_$9`<span class="payoff">${0}</span>`),t.format(this.crPayoff)):$(_t13||(_t13=_$9``))),i=$(_t14||(_t14=_$9`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `),!this.interactive,+this.hr.toFixed(3),this.hrInput.bind(this)),o=$(_t15||(_t15=_$9`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `),!this.interactive,+this.far.toFixed(3),this.farInput.bind(this)),s=$(_t16||(_t16=_$9`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Accuracy</span>
        </decidables-spinner>
      `),!this.interactive,+this.acc.toFixed(3),this.accInput.bind(this)),l=$(_t17||(_t17=_$9`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `),!this.interactive,+this.ppv.toFixed(3),this.ppvInput.bind(this)),c=$(_t18||(_t18=_$9`
        <decidables-spinner ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `),!this.interactive,+this.fomr.toFixed(3),this.fomrInput.bind(this))):(e=$(_t19||(_t19=_$9`<span>Hits</span>
        ${0}`),this.payoff?$(_t20||(_t20=_$9`<span class="payoff">${0}</span>`),t.format(this.hPayoff)):$(_t21||(_t21=_$9``))),r=$(_t22||(_t22=_$9`<span>Misses</span>
        ${0}`),this.payoff?$(_t23||(_t23=_$9`<span class="payoff">${0}</span>`),t.format(this.mPayoff)):$(_t24||(_t24=_$9``))),n=$(_t25||(_t25=_$9`<span>False Alarms</span>
        ${0}`),this.payoff?$(_t26||(_t26=_$9`<span class="payoff">${0}</span>`),t.format(this.faPayoff)):$(_t27||(_t27=_$9``))),a=$(_t28||(_t28=_$9`<span>Correct Rejections</span>
        ${0}`),this.payoff?$(_t29||(_t29=_$9`<span class="payoff">${0}</span>`),t.format(this.crPayoff)):$(_t30||(_t30=_$9``))),i=$(_t31||(_t31=_$9`<span>Hit Rate</span>`)),o=$(_t32||(_t32=_$9`<span>False Alarm Rate</span>`)),s=$(_t33||(_t33=_$9`<span>Accuracy</span>`)),l=$(_t34||(_t34=_$9`<span>Positive Predictive Value</span>`)),c=$(_t35||(_t35=_$9`<span>False Omission Rate</span>`))),$(_t36||(_t36=_$9`
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
      </table>`),this.numeric?"numeric":"",e,r,this.summary.has("stimulusRates")?$(_t37||(_t37=_$9`
                <td class="td td-summary hr">
                  ${0}
                </td>`),i):$(_t38||(_t38=_$9``)),n,a,this.summary.has("stimulusRates")?$(_t39||(_t39=_$9`
                <td class="td td-summary far">
                  ${0}
                </td>`),o):$(_t40||(_t40=_$9``)),this.summary.has("responseRates")||this.summary.has("accuracy")?$(_t41||(_t41=_$9`
              <tr>
                <td colspan="2"></td>
                ${0}
                ${0}
              </tr>`),this.summary.has("responseRates")?$(_t42||(_t42=_$9`
                    <td class="td td-summary ppv">
                      ${0}
                    </td>
                    <td class="td td-summary fomr">
                      ${0}
                    </td>`),l,c):$(_t43||(_t43=_$9`
                    <td colspan="2"></td>`)),this.summary.has("accuracy")?$(_t44||(_t44=_$9`
                    <td class="td td-summary acc" rowspan="2">
                      ${0}
                    </td>`),s):$(_t45||(_t45=_$9``))):$(_t46||(_t46=_$9``)))}}customElements.define("detectable-table",DetectableTable);let _t$8,_$8=t=>t;class SDTEquation extends DetectableElement{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,r$2(_t$8||(_t$8=_$8`
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
      `))]}}let _t$7,_t2$7,_t3$6,_t4$6,_t5$6,_t6$6,_t7$6,_t8$4,_t9$4,_t10$4,_t11$4,_$7=t=>t;class SDTEquationDC2Far extends SDTEquation{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=0,this.c=0,this.s=1,this.alignState()}alignState(){this.far=SDTMath.dC2Far(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2far-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}render(){let t,e,r,n,a;return this.alignState(),this.numeric?(t=$(_t$7||(_t$7=_$7`
        <decidables-spinner class="d bottom" ?disabled=${0} step=".001" .value="${0}" @input=${0}>
          <var class="math-var">d′</var>
        </decidables-spinner>
      `),!this.interactive,this.d,this.dInput.bind(this)),e=$(_t2$7||(_t2$7=_$7`
        <decidables-spinner class="c bottom" ?disabled=${0} step=".001" .value="${0}" @input=${0}>
          <var class="math-var">c</var>
        </decidables-spinner>
      `),!this.interactive,this.c,this.cInput.bind(this)),r=$(_t3$6||(_t3$6=_$7`
        <decidables-spinner class="s bottom" ?disabled=${0} min="0" step=".001" .value="${0}" @input=${0}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `),!this.interactive,this.s,this.sInput.bind(this)),n=$(_t4$6||(_t4$6=_$7`
        <decidables-spinner class="far bottom" disabled min="0" max="1" step=".001" .value="${0}">
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `),+this.far.toFixed(3))):(t=$(_t5$6||(_t5$6=_$7`<var class="math-var d">d′</var>`)),e=$(_t6$6||(_t6$6=_$7`<var class="math-var c">c</var>`)),r=$(_t7$6||(_t7$6=_$7`<var class="math-var s">σ</var>`)),n=$(_t8$4||(_t8$4=_$7`<var class="far">False Alarm Rate</var>`))),a=this.unequal?$(_t9$4||(_t9$4=_$7`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${0}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span>${0}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${0}<span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${0}</span>
          </td>
        </tr>`),n,r,t,e,r):$(_t10$4||(_t10$4=_$7`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="minus tight">−</span>
          </td>
          <td class="underline">
            ${0}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${0}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`),n,t,e),$(_t11$4||(_t11$4=_$7`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>`),a)}}customElements.define("sdt-equation-dc2far",SDTEquationDC2Far);let _t$6,_t2$6,_t3$5,_t4$5,_t5$5,_t6$5,_t7$5,_t8$3,_t9$3,_t10$3,_t11$3,_$6=t=>t;class SDTEquationDC2Hr extends SDTEquation{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=0,this.c=0,this.s=1,this.alignState()}alignState(){this.hr=SDTMath.dC2Hr(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2hr-change",{detail:{d:this.d,c:this.c,s:this.s,hr:this.hr},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}render(){let t,e,r,n,a;return this.alignState(),this.numeric?(t=$(_t$6||(_t$6=_$6`
        <decidables-spinner class="d bottom" ?disabled=${0} step=".001" .value="${0}" @input=${0}>
          <var class="math-var">d′</var>
        </decidables-spinner>
      `),!this.interactive,this.d,this.dInput.bind(this)),e=$(_t2$6||(_t2$6=_$6`
        <decidables-spinner class="c bottom" ?disabled=${0} step=".001" .value="${0}" @input=${0}>
          <var class="math-var">c</var>
        </decidables-spinner>
      `),!this.interactive,this.c,this.cInput.bind(this)),r=$(_t3$5||(_t3$5=_$6`
        <decidables-spinner class="s bottom" ?disabled=${0} min="0" step=".001" .value="${0}" @input=${0}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `),!this.interactive,this.s,this.sInput.bind(this)),n=$(_t4$5||(_t4$5=_$6`
        <decidables-spinner class="hr bottom" disabled min="0" max="1" step=".001" .value="${0}">
          <var>Hit Rate</var>
        </decidables-spinner>
      `),+this.hr.toFixed(3))):(t=$(_t5$5||(_t5$5=_$6`<var class="math-var d">d′</var>`)),e=$(_t6$5||(_t6$5=_$6`<var class="math-var c">c</var>`)),r=$(_t7$5||(_t7$5=_$6`<var class="math-var s">σ</var>`)),n=$(_t8$3||(_t8$3=_$6`<var class="hr">Hit Rate</var>`))),a=this.unequal?$(_t9$3||(_t9$3=_$6`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${0}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            ${0}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>
          </td>
          <td class="underline">
            ${0}
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
            <span><span>1</span><span class="plus">+</span>${0}</span>
          </td>
          <td>
            ${0}
          </td>
        </tr>`),n,r,t,e,r,r):$(_t10$3||(_t10$3=_$6`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span>
          </td>
          <td class="underline">
            ${0}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${0}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`),n,t,e),$(_t11$3||(_t11$3=_$6`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>`),a)}}customElements.define("sdt-equation-dc2hr",SDTEquationDC2Hr);let _t$5,_t2$5,_t3$4,_t4$4,_t5$4,_t6$4,_t7$4,_$5=t=>t;class SDTEquationFaCr2Far extends SDTEquation{static get properties(){return{fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.fa=0,this.cr=0,this.alignState()}alignState(){this.far=SDTMath.faCr2Far(this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-facr2far-change",{detail:{fa:this.fa,cr:this.cr,far:this.far},bubbles:!0}))}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}render(){let t,e,r;return this.alignState(),this.numeric?(t=$(_t$5||(_t$5=_$5`
        <decidables-spinner class="fa" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>False Alarms</var>
        </decidables-spinner>
      `),!this.interactive,this.fa,this.faInput.bind(this)),e=$(_t2$5||(_t2$5=_$5`
        <decidables-spinner class="cr" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `),!this.interactive,this.cr,this.crInput.bind(this)),r=$(_t3$4||(_t3$4=_$5`
        <decidables-spinner class="far" disabled min="0" max="1" step=".001" .value="${0}">
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `),+this.far.toFixed(3))):(t=$(_t4$4||(_t4$4=_$5`<var class="fa">False Alarms</var>`)),e=$(_t5$4||(_t5$4=_$5`<var class="cr">Correct Rejections</var>`)),r=$(_t6$4||(_t6$4=_$5`<var class="far">False Alarm Rate</var>`))),$(_t7$4||(_t7$4=_$5`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${0}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${0}
              </td>
            </tr>
            <tr>
              <td>
                ${0}<span class="plus">+</span>${0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`),r,t,t,e)}}customElements.define("sdt-equation-facr2far",SDTEquationFaCr2Far);let _t$4,_t2$4,_t3$3,_t4$3,_t5$3,_t6$3,_t7$3,_$4=t=>t;class SDTEquationHM2Hr extends SDTEquation{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.alignState()}alignState(){this.hr=SDTMath.hM2Hr(this.h,this.m)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hm2hr-change",{detail:{h:this.h,m:this.m,hr:this.hr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}render(){let t,e,r;return this.alignState(),this.numeric?(t=$(_t$4||(_t$4=_$4`
        <decidables-spinner class="h" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Hits</var>
        </decidables-spinner>
      `),!this.interactive,this.h,this.hInput.bind(this)),e=$(_t2$4||(_t2$4=_$4`
        <decidables-spinner class="m" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Misses</var>
        </decidables-spinner>
      `),!this.interactive,this.m,this.mInput.bind(this)),r=$(_t3$3||(_t3$3=_$4`
        <decidables-spinner class="hr" disabled min="0" max="1" step=".001" .value="${0}">
          <var>Hit Rate</var>
        </decidables-spinner>
      `),+this.hr.toFixed(3))):(t=$(_t4$3||(_t4$3=_$4`<var class="h">Hits</var>`)),e=$(_t5$3||(_t5$3=_$4`<var class="m">Misses</var>`)),r=$(_t6$3||(_t6$3=_$4`<var class="hr">Hit Rate</var>`))),$(_t7$3||(_t7$3=_$4`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${0}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${0}
              </td>
            </tr>
            <tr>
              <td>
                ${0}<span class="plus">+</span>${0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `),r,t,t,e)}}customElements.define("sdt-equation-hm2hr",SDTEquationHM2Hr);let _t$3,_t2$3,_t3$2,_t4$2,_t5$2,_t6$2,_t7$2,_t8$2,_t9$2,_t10$2,_t11$2,_$3=t=>t;class SDTEquationHMFaCr2Acc extends SDTEquation{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},acc:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.alignState()}alignState(){this.acc=SDTMath.hMFaCr2Acc(this.h,this.m,this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hmfacr2acc-change",{detail:{h:this.h,m:this.m,fa:this.fa,cr:this.cr,acc:this.acc},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}render(){let t,e,r,n,a;return this.alignState(),this.numeric?(t=$(_t$3||(_t$3=_$3`
        <decidables-spinner class="h" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Hits</var>
        </decidables-spinner>
      `),!this.interactive,this.h,this.hInput.bind(this)),e=$(_t2$3||(_t2$3=_$3`
        <decidables-spinner class="m" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Misses</var>
        </decidables-spinner>
      `),!this.interactive,this.m,this.mInput.bind(this)),r=$(_t3$2||(_t3$2=_$3`
        <decidables-spinner class="fa" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>False Alarms</var>
        </decidables-spinner>
      `),!this.interactive,this.fa,this.faInput.bind(this)),n=$(_t4$2||(_t4$2=_$3`
        <decidables-spinner class="cr" ?disabled=${0} min="0" .value="${0}" @input=${0}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `),!this.interactive,this.cr,this.crInput.bind(this)),a=$(_t5$2||(_t5$2=_$3`
        <decidables-spinner class="acc" disabled min="0" max="1" step=".001" .value="${0}">
          <var>Accuracy</var>
        </decidables-spinner>
      `),+this.acc.toFixed(3))):(t=$(_t6$2||(_t6$2=_$3`<var class="h">Hits</var>`)),e=$(_t7$2||(_t7$2=_$3`<var class="m">Misses</var>`)),r=$(_t8$2||(_t8$2=_$3`<var class="fa">False Alarms</var>`)),n=$(_t9$2||(_t9$2=_$3`<var class="cr">Correct Rejections</var>`)),a=$(_t10$2||(_t10$2=_$3`<var class="acc">Accuracy</var>`))),$(_t11$2||(_t11$2=_$3`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${0}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${0}<span class="plus">+</span>${0}
              </td>
            </tr>
            <tr>
              <td>
                ${0}<span class="plus">+</span>${0}<span class="plus">+</span>${0}<span class="plus">+</span>${0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`),a,t,n,t,n,e,r)}}customElements.define("sdt-equation-hmfacr2acc",SDTEquationHMFaCr2Acc);let _t$2,_t2$2,_t3$1,_t4$1,_t5$1,_t6$1,_t7$1,_t8$1,_t9$1,_t10$1,_t11$1,_$2=t=>t;class SDTEquationHrFar2C extends SDTEquation{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},c:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=1,this.alignState()}alignState(){this.c=SDTMath.hrFar2C(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2c-change",{detail:{hr:this.hr,far:this.far,s:this.s,c:this.c},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}render(){let t,e,r,n,a;return this.alignState(),this.numeric?(t=$(_t$2||(_t$2=_$2`
        <decidables-spinner class="hr bottom" ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <var>Hit Rate</var>
        </decidables-spinner>
      `),!this.interactive,this.hr,this.hrInput.bind(this)),e=$(_t2$2||(_t2$2=_$2`
        <decidables-spinner class="far bottom" ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `),!this.interactive,this.far,this.farInput.bind(this)),r=$(_t3$1||(_t3$1=_$2`
        <decidables-spinner class="s bottom" ?disabled=${0} min="0" step=".001" .value="${0}" @input=${0}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `),!this.interactive,this.s,this.sInput.bind(this)),n=$(_t4$1||(_t4$1=_$2`
        <decidables-spinner class="c bottom" disabled step=".001" .value="${0}">
          <var class="math-var">c</var>
        </decidables-spinner>
      `),+this.c.toFixed(3))):(t=$(_t5$1||(_t5$1=_$2`<var class="hr">Hit Rate</var>`)),e=$(_t6$1||(_t6$1=_$2`<var class="far">False Alarm Rate</var>`)),r=$(_t7$1||(_t7$1=_$2`<var class="math-var s">σ</var>`)),n=$(_t8$1||(_t8$1=_$2`<var class="math-var c">c</var>`))),a=this.unequal?$(_t9$1||(_t9$1=_$2`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${0}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span class="minus tight">−</span>${0}
          </td>
          <td rowspan="2">
            <span class="bracket tight">)</span><span class="bracket">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${0}</span>
          </td>
        </tr>`),n,r,r,t,e,r):$(_t10$1||(_t10$1=_$2`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span><span class="bracket tight">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="bracket tight">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`),n,t,e),$(_t11$1||(_t11$1=_$2`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>`),a)}}customElements.define("sdt-equation-hrfar2c",SDTEquationHrFar2C);let _t$1,_t2$1,_t3,_t4,_t5,_t6,_t7,_t8,_t9,_t10,_t11,_$1=t=>t;class SDTEquationHrFar2D extends SDTEquation{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=1,this.alignState()}alignState(){this.d=SDTMath.hrFar2D(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2d-change",{detail:{hr:this.hr,far:this.far,s:this.s,d:this.d},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}render(){let t,e,r,n,a;return this.alignState(),this.numeric?(t=$(_t$1||(_t$1=_$1`
        <decidables-spinner class="hr bottom" ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <var>Hit Rate</var>
        </decidables-spinner>
      `),!this.interactive,this.hr,this.hrInput.bind(this)),e=$(_t2$1||(_t2$1=_$1`
        <decidables-spinner class="far bottom" ?disabled=${0} min="0" max="1" step=".001" .value="${0}" @input=${0}>
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `),!this.interactive,this.far,this.farInput.bind(this)),r=$(_t3||(_t3=_$1`
        <decidables-spinner class="s bottom" ?disabled=${0} min="0" step=".001" .value="${0}" @input=${0}>
          <var class="math-var">σ</var>
        </decidables-spinner>
      `),!this.interactive,this.s,this.sInput.bind(this)),n=$(_t4||(_t4=_$1`
        <decidables-spinner class="d bottom" disabled step=".001" .value="${0}">
          <var class="math-var">d′</var>
        </decidables-spinner>
      `),+this.d.toFixed(3))):(t=$(_t5||(_t5=_$1`<var class="hr">Hit Rate</var>`)),e=$(_t6||(_t6=_$1`<var class="far">False Alarm Rate</var>`)),r=$(_t7||(_t7=_$1`<var class="math-var s">σ</var>`)),n=$(_t8||(_t8=_$1`<var class="math-var d">d′</var>`))),a=this.unequal?$(_t9||(_t9=_$1`
        <tr>
          <td rowspan="2">
            ${0}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${0}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket">[</span>${0}<span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`),n,r,r,t,e):$(_t10||(_t10=_$1`
        <tr>
          <td>
              ${0}<span class="equals">=</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${0}<span class="paren tight">)</span>
          </td>
        </tr>`),n,t,e),$(_t11||(_t11=_$1`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>`),a)}}customElements.define("sdt-equation-hrfar2d",SDTEquationHrFar2D);let _t,_t2,_=t=>t;class SDTExample extends DetectableElement{static get styles(){return[super.styles,r$2(_t||(_t=_`
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
      `))]}render(){return $(_t2||(_t2=_`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`))}}customElements.define("sdt-example",SDTExample);class SDTExampleDoubleInteractive extends SDTExample{firstUpdated(){this.one={},this.one.h=95,this.one.m=5,this.one.fa=35,this.one.cr=65,this.one.hr=SDTMath.hM2Hr(this.one.h,this.one.m),this.one.far=SDTMath.faCr2Far(this.one.fa,this.one.cr),this.one.d=SDTMath.hrFar2D(this.one.hr,this.one.far),this.one.c=SDTMath.hrFar2C(this.one.hr,this.one.far),this.two={},this.two.h=40,this.two.m=60,this.two.fa=20,this.two.cr=80,this.two.hr=SDTMath.hM2Hr(this.two.h,this.two.m),this.two.far=SDTMath.faCr2Far(this.two.fa,this.two.cr),this.two.d=SDTMath.hrFar2D(this.two.hr,this.two.far),this.two.c=SDTMath.hrFar2C(this.two.hr,this.two.far),this.detectableTableOne=this.querySelector("detectable-table:nth-of-type(1)"),this.detectableTableTwo=this.querySelector("detectable-table:nth-of-type(2)"),this.rocSpace=this.querySelector("roc-space"),this.sdtModelOne=this.querySelector("sdt-model:nth-of-type(1)"),this.sdtModelTwo=this.querySelector("sdt-model:nth-of-type(2)"),this.detectableTableOne&&(this.detectableTableOne.h=this.one.h,this.detectableTableOne.m=this.one.m,this.detectableTableOne.fa=this.one.fa,this.detectableTableOne.cr=this.one.cr,this.detectableTableOne.addEventListener("detectable-table-change",(t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"default","↑"),this.sdtModelOne&&(this.sdtModelOne.d=SDTMath.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelOne.c=SDTMath.hrFar2C(t.detail.hr,t.detail.far))}))),this.detectableTableTwo&&(this.detectableTableTwo.h=this.two.h,this.detectableTableTwo.m=this.two.m,this.detectableTableTwo.fa=this.two.fa,this.detectableTableTwo.cr=this.two.cr,this.detectableTableTwo.addEventListener("detectable-table-change",(t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"two","↓"),this.sdtModelTwo&&(this.sdtModelTwo.d=SDTMath.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelTwo.c=SDTMath.hrFar2C(t.detail.hr,t.detail.far))}))),this.rocSpace&&(this.rocSpace.set(this.one.hr,this.one.far,"default","↑"),this.rocSpace.set(this.two.hr,this.two.far,"two","↓"),this.rocSpace.addEventListener("roc-point-change",(t=>{if("default"===t.detail.name&&this.sdtModelOne?(this.sdtModelOne.d=t.detail.d,this.sdtModelOne.c=t.detail.c):"two"===t.detail.name&&this.sdtModelTwo&&(this.sdtModelTwo.d=t.detail.d,this.sdtModelTwo.c=t.detail.c),"default"===t.detail.name&&this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),a=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=a}else if("two"===t.detail.name&&this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),a=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=a}}))),this.sdtModelOne&&(this.sdtModelOne.d=this.one.d,this.sdtModelOne.c=this.one.c,this.sdtModelOne.addEventListener("sdt-model-change",(t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"default","↑"),this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),a=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=a}}))),this.sdtModelTwo&&(this.sdtModelTwo.d=this.two.d,this.sdtModelTwo.c=this.two.c,this.sdtModelTwo.addEventListener("sdt-model-change",(t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"two","↓"),this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),a=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=a}})))}}customElements.define("sdt-example-double-interactive",SDTExampleDoubleInteractive);class SDTExampleHuman extends SDTExample{firstUpdated(){this.count=1,this.detectableControl=this.querySelector("detectable-control"),this.rdkTask=this.querySelector("rdk-task"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.rocSpace&&this.rocSpace.hasAttribute("history")&&this.rocSpace.set(.5,.5,"default",this.count),this.detectableControl&&this.detectableControl.hasAttribute("trials")&&this.detectableControl.addEventListener("detectable-control-trials",(t=>{this.rdkTask&&(this.rdkTask.trials=t.detail.trials),this.detectableResponse&&(this.detectableResponse.trialTotal=t.detail.trials)})),this.detectableControl&&this.detectableControl.hasAttribute("duration")&&this.detectableControl.addEventListener("detectable-control-duration",(t=>{this.rdkTask&&(this.rdkTask.duration=t.detail.duration,this.rdkTask.wait=t.detail.duration,this.rdkTask.iti=t.detail.duration)})),this.detectableControl&&this.detectableControl.hasAttribute("coherence")&&this.detectableControl.addEventListener("detectable-control-coherence",(t=>{this.rdkTask&&(this.rdkTask.coherence=t.detail.coherence)})),this.detectableControl&&this.detectableControl.hasAttribute("payoff")&&this.detectableControl.addEventListener("detectable-control-payoff",(t=>{this.detectableResponse&&(this.detectableResponse.hPayoff=t.detail.payoff,this.detectableResponse.mPayoff=0-t.detail.payoff,this.detectableResponse.faPayoff=0-(100-t.detail.payoff),this.detectableResponse.crPayoff=100-t.detail.payoff),this.detectableTable&&(this.detectableTable.hPayoff=t.detail.payoff,this.detectableTable.mPayoff=0-t.detail.payoff,this.detectableTable.faPayoff=0-(100-t.detail.payoff),this.detectableTable.crPayoff=100-t.detail.payoff)})),this.detectableControl&&this.detectableControl.hasAttribute("run")&&this.detectableControl.addEventListener("detectable-control-run",(()=>{this.rdkTask&&(this.rdkTask.running=!0)})),this.detectableControl&&this.detectableControl.hasAttribute("pause")&&this.detectableControl.addEventListener("detectable-control-pause",(()=>{this.rdkTask&&(this.rdkTask.running=!1)})),this.detectableControl&&this.detectableControl.hasAttribute("reset")&&this.detectableControl.addEventListener("detectable-control-reset",(()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.detectableTable&&(this.detectableTable.h=0,this.detectableTable.m=0,this.detectableTable.fa=0,this.detectableTable.cr=0),this.rocSpace&&(this.rocSpace.hasAttribute("history")?(this.count+=1,this.rocSpace.set(.5,.5,`point${this.count}`,this.count)):(this.rocSpace.hr=.5,this.rocSpace.far=.5)),this.sdtModel&&(this.sdtModel.d=0,this.sdtModel.c=0)})),this.rdkTask&&this.detectableResponse&&(this.detectableResponse.trialTotal=this.rdkTask.trials),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",(t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial)})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",(()=>{this.detectableResponse&&this.detectableResponse.stop()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",(()=>{this.detectableControl&&this.detectableControl.complete()})),this.detectableResponse&&this.detectableResponse.addEventListener("detectable-response",(t=>{this.detectableTable&&(this.detectableTable.h=t.detail.h,this.detectableTable.m=t.detail.m,this.detectableTable.fa=t.detail.fa,this.detectableTable.cr=t.detail.cr);const e=SDTMath.hM2Hr(t.detail.h+1,t.detail.m+1),r=SDTMath.faCr2Far(t.detail.fa+1,t.detail.cr+1);this.rocSpace&&(this.rocSpace.hasAttribute("history")?this.rocSpace.set(e,r,1===this.count?"default":`point${this.count}`,this.count):(this.rocSpace.hr=e,this.rocSpace.far=r)),this.sdtModel&&(this.sdtModel.d=SDTMath.hrFar2D(e,r),this.sdtModel.c=SDTMath.hrFar2C(e,r))}))}}customElements.define("sdt-example-human",SDTExampleHuman);class SDTExampleInteractive extends SDTExample{firstUpdated(){this.detectableControl=this.querySelector("detectable-control"),this.detectableTable=this.querySelector("detectable-table"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.rocSpaces=this.querySelectorAll("roc-space"),this.detectableControl&&this.detectableControl.hasAttribute("color")&&this.detectableControl.addEventListener("detectable-control-color",(t=>{this.sdtModel&&(this.sdtModel.color=t.detail.color),this.detectableTable&&(this.detectableTable.color=t.detail.color)})),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",(t=>{this.rocSpaces.length>0&&this.rocSpaces.forEach((e=>{e.zRoc=t.detail.zRoc}))})),this.detectableTable&&(this.rocSpace&&(this.rocSpace.hr=SDTMath.hM2Hr(this.detectableTable.h,this.detectableTable.m),this.rocSpace.far=SDTMath.faCr2Far(this.detectableTable.fa,this.detectableTable.cr)),this.sdtModel&&(this.sdtModel.d=SDTMath.hrFar2D(SDTMath.hM2Hr(this.detectableTable.h,this.detectableTable.m),SDTMath.faCr2Far(this.detectableTable.fa,this.detectableTable.cr),this.sdtModel.s),this.sdtModel.c=SDTMath.hrFar2C(SDTMath.hM2Hr(this.detectableTable.h,this.detectableTable.m),SDTMath.faCr2Far(this.detectableTable.fa,this.detectableTable.cr),this.sdtModel.s)),this.detectableTable.addEventListener("detectable-table-change",(t=>{this.rocSpace&&(this.rocSpace.far=t.detail.far,this.rocSpace.hr=t.detail.hr),this.sdtModel&&(this.sdtModel.d=SDTMath.hrFar2D(t.detail.hr,t.detail.far,this.sdtModel.s),this.sdtModel.c=SDTMath.hrFar2C(t.detail.hr,t.detail.far,this.sdtModel.s))}))),this.rocSpace&&(this.sdtModel&&!this.detectableTable&&(this.sdtModel.d=SDTMath.hrFar2D(this.rocSpace.hr,this.rocSpace.far,this.rocSpace.s),this.sdtModel.c=SDTMath.hrFar2C(this.rocSpace.hr,this.rocSpace.far,this.rocSpace.s),this.sdtModel.s=this.rocSpace.s),this.rocSpace.addEventListener("roc-point-change",(t=>{if(this.sdtModel&&(this.sdtModel.d=t.detail.d,this.sdtModel.c=t.detail.c,this.sdtModel.s=t.detail.s),this.detectableTable){const e=Math.round((this.detectableTable.h+this.detectableTable.m)*t.detail.hr),r=this.detectableTable.h+this.detectableTable.m-e,n=Math.round((this.detectableTable.fa+this.detectableTable.cr)*t.detail.far),a=this.detectableTable.fa+this.detectableTable.cr-n;this.detectableTable.h=e,this.detectableTable.m=r,this.detectableTable.fa=n,this.detectableTable.cr=a}}))),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",(t=>{if(this.rocSpaces.length>0&&this.rocSpaces.forEach((e=>{e.setWithSDT(t.detail.d,t.detail.c,"default","",t.detail.s)})),this.detectableTable){const e=Math.round((this.detectableTable.h+this.detectableTable.m)*t.detail.hr),r=this.detectableTable.h+this.detectableTable.m-e,n=Math.round((this.detectableTable.fa+this.detectableTable.cr)*t.detail.far),a=this.detectableTable.fa+this.detectableTable.cr-n;this.detectableTable.h=e,this.detectableTable.m=r,this.detectableTable.fa=n,this.detectableTable.cr=a}}))}}customElements.define("sdt-example-interactive",SDTExampleInteractive);class SDTExampleModel extends SDTExample{firstUpdated(){this.count=1,this.detectableControl=this.querySelector("detectable-control"),this.rdkTask=this.querySelector("rdk-task"),this.sdtModel=this.querySelector("sdt-model"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rocSpace=this.querySelector("roc-space"),this.detectableControl&&this.detectableControl.hasAttribute("color")&&this.detectableControl.addEventListener("detectable-control-color",(t=>{this.sdtModel&&(this.sdtModel.color=t.detail.color),this.detectableTable&&(this.detectableTable.color=t.detail.color)})),this.detectableControl&&this.detectableControl.hasAttribute("duration")&&this.detectableControl.addEventListener("detectable-control-duration",(t=>{this.rdkTask&&(this.rdkTask.duration=t.detail.duration,this.rdkTask.wait=t.detail.duration,this.rdkTask.iti=t.detail.duration)})),this.detectableControl&&this.detectableControl.hasAttribute("trials")&&this.detectableControl.addEventListener("detectable-control-trials",(t=>{this.rdkTask&&(this.rdkTask.trials=t.detail.trials),this.detectableResponse&&(this.detectableResponse.trialTotal=t.detail.trials)})),this.detectableControl&&this.detectableControl.hasAttribute("coherence")&&this.detectableControl.addEventListener("detectable-control-coherence",(t=>{this.rdkTask&&(this.rdkTask.coherence=t.detail.coherence)})),this.detectableControl&&this.detectableControl.hasAttribute("run")&&this.detectableControl.addEventListener("detectable-control-run",(()=>{this.rdkTask&&(this.rdkTask.running=!0),this.sdtModel&&this.sdtModel.resumeTrial()})),this.detectableControl&&this.detectableControl.hasAttribute("pause")&&this.detectableControl.addEventListener("detectable-control-pause",(()=>{this.rdkTask&&(this.rdkTask.running=!1),this.sdtModel&&this.sdtModel.pauseTrial()})),this.detectableControl&&this.detectableControl.hasAttribute("reset")&&this.detectableControl.addEventListener("detectable-control-reset",(()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.sdtModel&&this.sdtModel.reset(),this.detectableTable&&(this.detectableTable.h=0,this.detectableTable.m=0,this.detectableTable.fa=0,this.detectableTable.cr=0),this.rocSpace&&(this.rocSpace.hasAttribute("history")?(this.count+=1,this.rocSpace.set(.5,.5,`point${this.count}`,"",1)):(this.rocSpace.hr=.5,this.rocSpace.far=.5))})),this.rdkTask&&this.detectableResponse&&(this.detectableResponse.trialTotal=this.rdkTask.trials),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",(t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial),this.sdtModel&&this.sdtModel.trial(t.detail.trial,t.detail.signal,t.detail.duration,t.detail.wait,t.detail.iti)})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-middle",(()=>{})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",(()=>{this.detectableResponse&&this.detectableResponse.stop()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",(()=>{this.detectableControl&&this.detectableControl.complete()})),this.sdtModel&&this.sdtModel.addEventListener("detectable-response",(t=>{this.detectableResponse&&this.detectableResponse.responded(t.detail.response),this.detectableTable&&(this.detectableTable.h=t.detail.h,this.detectableTable.m=t.detail.m,this.detectableTable.fa=t.detail.fa,this.detectableTable.cr=t.detail.cr),this.rocSpace&&(this.rocSpace.hr=SDTMath.hM2Hr(t.detail.h,t.detail.m),this.rocSpace.far=SDTMath.faCr2Far(t.detail.fa,t.detail.cr))})),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",(t=>{this.detectableTable&&(this.detectableTable.h=t.detail.h,this.detectableTable.m=t.detail.m,this.detectableTable.fa=t.detail.fa,this.detectableTable.cr=t.detail.cr),this.rocSpace&&(this.rocSpace.hr=SDTMath.hM2Hr(t.detail.h,t.detail.m),this.rocSpace.far=SDTMath.faCr2Far(t.detail.fa,t.detail.cr))}))}}customElements.define("sdt-example-model",SDTExampleModel);class SDTExampleUnequal extends SDTExample{firstUpdated(){this.detectableControl=this.querySelector("detectable-control"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",(t=>{this.rocSpace.zRoc=t.detail.zRoc})),this.rocSpace&&this.rocSpace.setWithSDT(1,0,"default","",1),this.sdtModel&&(this.rocSpace&&range(-1.5,1.6,.5).forEach(((t,e)=>{this.rocSpace.setWithSDT(this.sdtModel.d,t,`point${e}`,"",this.sdtModel.s)})),this.sdtModel.addEventListener("sdt-model-change",(t=>{this.rocSpace&&range(-1.5,1.6,.5).forEach(((e,r)=>{this.rocSpace.setWithSDT(t.detail.d,e,`point${r}`,"",t.detail.s)}))})))}}customElements.define("sdt-example-unequal",SDTExampleUnequal);
//# sourceMappingURL=page.js.map