var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r=function(t){return t&&t.Math===Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=n,a=function(t){try{return!!t()}catch(t){return!0}},s=!a(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),o=s,l=Function.prototype,c=l.call,u=o&&l.bind.bind(c,c),h=o?u:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},f=d,p=TypeError,m=function(t){if(f(t))throw new p("Can't call method on "+t);return t},g=m,v=Object,y=function(t){return v(g(t))},b=y,w=h({}.hasOwnProperty),x=Object.hasOwn||function(t,e){return w(b(t),e)},k={},A={exports:{}},_=n,$=Object.defineProperty,S=function(t,e){try{$(_,t,{value:e,configurable:!0,writable:!0})}catch(r){_[t]=e}return e},E=n,M=S,T="__core-js_shared__",N=A.exports=E[T]||M(T,{});(N.versions||(N.versions=[])).push({version:"3.49.0",mode:"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"});var C,R,P=A.exports,O=P,I=function(t,e){return O[t]||(O[t]=e||{})},D=h,U=0,z=Math.random(),F=D(1.1.toString),j=function(t){return"Symbol("+(void 0===t?"":t)+")_"+F(++U+z,36)},q=n.navigator,L=q&&q.userAgent,H=L?String(L):"",B=n,V=H,X=B.process,K=B.Deno,W=X&&X.versions||K&&K.version,Y=W&&W.v8;Y&&(R=(C=Y.split("."))[0]>0&&C[0]<4?1:+(C[0]+C[1])),!R&&V&&(!(C=V.match(/Edge\/(\d+)/))||C[1]>=74)&&(C=V.match(/Chrome\/(\d+)/))&&(R=+C[1]);var J=R,Z=J,G=a,Q=n.String,tt=!!Object.getOwnPropertySymbols&&!G(function(){var t=Symbol("symbol detection");return!Q(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,rt=I,nt=x,it=j,at=tt,st=et,ot=n.Symbol,lt=rt("wks"),ct=st?ot.for||ot:ot&&ot.withoutSetter||it,ut=function(t){return nt(lt,t)||(lt[t]=at&&nt(ot,t)?ot[t]:ct("Symbol."+t)),lt[t]},ht=ut;k.f=ht;var dt={},ft=!a(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),pt="object"==typeof document&&document.all,mt=void 0===pt&&void 0!==pt?function(t){return"function"==typeof t||t===pt}:function(t){return"function"==typeof t},gt=mt,vt=function(t){return"object"==typeof t?null!==t:gt(t)},yt=vt,bt=n.document,wt=yt(bt)&&yt(bt.createElement),xt=function(t){return wt?bt.createElement(t):{}},kt=xt,At=!ft&&!a(function(){return 7!==Object.defineProperty(kt("div"),"a",{get:function(){return 7}}).a}),_t=ft&&a(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),$t=vt,St=String,Et=TypeError,Mt=function(t){if($t(t))return t;throw new Et(St(t)+" is not an object")},Tt=s,Nt=Function.prototype.call,Ct=Tt?Nt.bind(Nt):function(){return Nt.apply(Nt,arguments)},Rt=n,Pt=mt,Ot=function(t,e){return arguments.length<2?(r=Rt[t],Pt(r)?r:void 0):Rt[t]&&Rt[t][e];var r},It=h({}.isPrototypeOf),Dt=Ot,Ut=mt,zt=It,Ft=Object,jt=et?function(t){return"symbol"==typeof t}:function(t){var e=Dt("Symbol");return Ut(e)&&zt(e.prototype,Ft(t))},qt=String,Lt=function(t){try{return qt(t)}catch(t){return"Object"}},Ht=mt,Bt=Lt,Vt=TypeError,Xt=function(t){if(Ht(t))return t;throw new Vt(Bt(t)+" is not a function")},Kt=Xt,Wt=d,Yt=function(t,e){var r=t[e];return Wt(r)?void 0:Kt(r)},Jt=Ct,Zt=mt,Gt=vt,Qt=TypeError,te=Ct,ee=vt,re=jt,ne=Yt,ie=function(t,e){var r,n;if("string"===e&&Zt(r=t.toString)&&!Gt(n=Jt(r,t)))return n;if(Zt(r=t.valueOf)&&!Gt(n=Jt(r,t)))return n;if("string"!==e&&Zt(r=t.toString)&&!Gt(n=Jt(r,t)))return n;throw new Qt("Can't convert object to primitive value")},ae=TypeError,se=ut("toPrimitive"),oe=function(t,e){if(!ee(t)||re(t))return t;var r,n=ne(t,se);if(n){if(void 0===e&&(e="default"),r=te(n,t,e),!ee(r)||re(r))return r;throw new ae("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},le=oe,ce=jt,ue=function(t){var e=le(t,"string");return ce(e)?e:e+""},he=ft,de=At,fe=_t,pe=Mt,me=ue,ge=TypeError,ve=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,be="enumerable",we="configurable",xe="writable";dt.f=he?fe?function(t,e,r){if(pe(t),e=me(e),pe(r),"function"==typeof t&&"prototype"===e&&"value"in r&&xe in r&&!r[xe]){var n=ye(t,e);n&&n[xe]&&(t[e]=r.value,r={configurable:we in r?r[we]:n[we],enumerable:be in r?r[be]:n[be],writable:!1})}return ve(t,e,r)}:ve:function(t,e,r){if(pe(t),e=me(e),pe(r),de)try{return ve(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new ge("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var ke=i,Ae=x,_e=k,$e=dt.f,Se=function(t){var e=ke.Symbol||(ke.Symbol={});Ae(e,t)||$e(e,t,{value:_e.f(t)})},Ee={},Me={},Te={}.propertyIsEnumerable,Ne=Object.getOwnPropertyDescriptor,Ce=Ne&&!Te.call({1:2},1);Me.f=Ce?function(t){var e=Ne(this,t);return!!e&&e.enumerable}:Te;var Re=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Pe=h,Oe=Pe({}.toString),Ie=Pe("".slice),De=function(t){return Ie(Oe(t),8,-1)},Ue=a,ze=De,Fe=Object,je=h("".split),qe=Ue(function(){return!Fe("z").propertyIsEnumerable(0)})?function(t){return"String"===ze(t)?je(t,""):Fe(t)}:Fe,Le=m,He=function(t){return qe(Le(t))},Be=ft,Ve=Ct,Xe=Me,Ke=Re,We=He,Ye=ue,Je=x,Ze=At,Ge=Object.getOwnPropertyDescriptor;Ee.f=Be?Ge:function(t,e){if(t=We(t),e=Ye(e),Ze)try{return Ge(t,e)}catch(t){}if(Je(t,e))return Ke(!Ve(Xe.f,t,e),t[e])};var Qe=n,tr=Se,er=dt.f,rr=Ee.f,nr=Qe.Symbol;if(tr("asyncDispose"),nr){var ir=rr(nr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&er(nr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var ar=n,sr=Se,or=dt.f,lr=Ee.f,cr=ar.Symbol;if(sr("dispose"),cr){var ur=lr(cr,"dispose");ur.enumerable&&ur.configurable&&ur.writable&&or(cr,"dispose",{value:ur.value,enumerable:!1,configurable:!1,writable:!1})}var hr=dt,dr=Re,fr=ft?function(t,e,r){return hr.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},pr={exports:{}},mr=ft,gr=x,vr=Function.prototype,yr=mr&&Object.getOwnPropertyDescriptor,br={CONFIGURABLE:gr(vr,"name")&&(!mr||mr&&yr(vr,"name").configurable)},wr=mt,xr=P,kr=h(Function.toString);wr(xr.inspectSource)||(xr.inspectSource=function(t){return kr(t)});var Ar,_r,$r,Sr=xr.inspectSource,Er=mt,Mr=n.WeakMap,Tr=Er(Mr)&&/native code/.test(String(Mr)),Nr=j,Cr=I("keys"),Rr=function(t){return Cr[t]||(Cr[t]=Nr(t))},Pr={},Or=Tr,Ir=n,Dr=vt,Ur=fr,zr=x,Fr=P,jr=Rr,qr=Pr,Lr="Object already initialized",Hr=Ir.TypeError,Br=Ir.WeakMap;if(Or||Fr.state){var Vr=Fr.state||(Fr.state=new Br);Vr.get=Vr.get,Vr.has=Vr.has,Vr.set=Vr.set,Ar=function(t,e){if(Vr.has(t))throw new Hr(Lr);return e.facade=t,Vr.set(t,e),e},_r=function(t){return Vr.get(t)||{}},$r=function(t){return Vr.has(t)}}else{var Xr=jr("state");qr[Xr]=!0,Ar=function(t,e){if(zr(t,Xr))throw new Hr(Lr);return e.facade=t,Ur(t,Xr,e),e},_r=function(t){return zr(t,Xr)?t[Xr]:{}},$r=function(t){return zr(t,Xr)}}var Kr={set:Ar,get:_r,has:$r,enforce:function(t){return $r(t)?_r(t):Ar(t,{})},getterFor:function(t){return function(e){var r;if(!Dr(e)||(r=_r(e)).type!==t)throw new Hr("Incompatible receiver, "+t+" required");return r}}},Wr=h,Yr=a,Jr=mt,Zr=x,Gr=ft,Qr=br.CONFIGURABLE,tn=Sr,en=Kr.enforce,rn=Kr.get,nn=String,an=Object.defineProperty,sn=Wr("".slice),on=Wr("".replace),ln=Wr([].join),cn=Gr&&!Yr(function(){return 8!==an(function(){},"length",{value:8}).length}),un=String(String).split("String"),hn=pr.exports=function(t,e,r){"Symbol("===sn(nn(e),0,7)&&(e="["+on(nn(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Zr(t,"name")||Qr&&t.name!==e)&&(Gr?an(t,"name",{value:e,configurable:!0}):t.name=e),cn&&r&&Zr(r,"arity")&&t.length!==r.arity&&an(t,"length",{value:r.arity});try{r&&Zr(r,"constructor")&&r.constructor?Gr&&an(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=en(t);return Zr(n,"source")||(n.source=ln(un,"string"==typeof e?e:"")),t};Function.prototype.toString=hn(function(){return Jr(this)&&rn(this).source||tn(this)},"toString");var dn,fn=pr.exports,pn=mt,mn=dt,gn=fn,vn=S,yn=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(pn(r)&&gn(r,a,n),n.global)i?t[e]=r:vn(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:mn.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},bn={},wn=Math.ceil,xn=Math.floor,kn=Math.trunc||function(t){var e=+t;return(e>0?xn:wn)(e)},An=kn,_n=function(t){var e=+t;return e!=e||0===e?0:An(e)},$n=_n,Sn=Math.max,En=Math.min,Mn=_n,Tn=Math.min,Nn=function(t){var e=Mn(t);return e>0?Tn(e,9007199254740991):0},Cn=Nn,Rn=function(t){return Cn(t.length)},Pn=He,On=function(t,e){var r=$n(t);return r<0?Sn(r+e,0):En(r,e)},In=Rn,Dn={indexOf:(dn=!1,function(t,e,r){var n=Pn(t),i=In(n);if(0===i)return!dn&&-1;var a,s=On(r,i);if(dn&&e!=e){for(;i>s;)if((a=n[s++])!=a)return!0}else for(;i>s;s++)if((dn||s in n)&&n[s]===e)return dn||s||0;return!dn&&-1})},Un=x,zn=He,Fn=Dn.indexOf,jn=Pr,qn=h([].push),Ln=function(t,e){var r,n=zn(t),i=0,a=[];for(r in n)!Un(jn,r)&&Un(n,r)&&qn(a,r);for(;e.length>i;)Un(n,r=e[i++])&&(~Fn(a,r)||qn(a,r));return a},Hn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Bn=Ln,Vn=Hn.concat("length","prototype");bn.f=Object.getOwnPropertyNames||function(t){return Bn(t,Vn)};var Xn={};Xn.f=Object.getOwnPropertySymbols;var Kn=Ot,Wn=bn,Yn=Xn,Jn=Mt,Zn=h([].concat),Gn=Kn("Reflect","ownKeys")||function(t){var e=Wn.f(Jn(t)),r=Yn.f;return r?Zn(e,r(t)):e},Qn=x,ti=Gn,ei=Ee,ri=dt,ni=function(t,e,r){for(var n=ti(e),i=ri.f,a=ei.f,s=0;s<n.length;s++){var o=n[s];Qn(t,o)||r&&Qn(r,o)||i(t,o,a(e,o))}},ii=a,ai=mt,si=/#|\.prototype\./,oi=function(t,e){var r=ci[li(t)];return r===hi||r!==ui&&(ai(e)?ii(e):!!e)},li=oi.normalize=function(t){return String(t).replace(si,".").toLowerCase()},ci=oi.data={},ui=oi.NATIVE="N",hi=oi.POLYFILL="P",di=oi,fi=n,pi=Ee.f,mi=fr,gi=yn,vi=S,yi=ni,bi=di,wi=function(t,e){var r,n,i,a,s,o=t.target,l=t.global,c=t.stat;if(r=l?fi:c?fi[o]||vi(o,{}):fi[o]&&fi[o].prototype)for(n in e){if(a=e[n],i=t.dontCallGetSet?(s=pi(r,n))&&s.value:r[n],!bi(l?n:o+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;yi(a,i)}(t.sham||i&&i.sham)&&mi(a,"sham",!0),gi(r,n,a,t)}},xi={};xi[ut("toStringTag")]="z";var ki="[object z]"===String(xi),Ai=mt,_i=De,$i=ut("toStringTag"),Si=Object,Ei="Arguments"===_i(function(){return arguments}()),Mi=ki?_i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Si(t),$i))?r:Ei?_i(e):"Object"===(n=_i(e))&&Ai(e.callee)?"Arguments":n},Ti=wi,Ni=Ot,Ci=vt,Ri=Mi,Pi=a,Oi="Error",Ii="DOMException",Di=Object.setPrototypeOf||{}.__proto__,Ui=Ni(Ii),zi=Error,Fi=zi.isError;Ti({target:"Error",stat:!0,sham:!0,forced:!Fi||!Di||Pi(function(){return Ui&&!Fi(new Ui(Ii))||!Fi(new zi(Oi,{cause:function(){}}))||Fi(Ni("Object","create")(zi.prototype))})},{isError:function(t){if(!Ci(t))return!1;var e=Ri(t);return e===Oi||e===Ii}});var ji=!a(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),qi=x,Li=mt,Hi=y,Bi=ji,Vi=Rr("IE_PROTO"),Xi=Object,Ki=Xi.prototype,Wi=Bi?Xi.getPrototypeOf:function(t){var e=Hi(t);if(qi(e,Vi))return e[Vi];var r=e.constructor;return Li(r)&&e instanceof r?r.prototype:e instanceof Xi?Ki:null},Yi=h,Ji=Xt,Zi=function(t,e,r){try{return Yi(Ji(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Gi=vt,Qi=function(t){return Gi(t)||null===t},ta=String,ea=TypeError,ra=Zi,na=vt,ia=m,aa=function(t){if(Qi(t))return t;throw new ea("Can't set "+ta(t)+" as a prototype")},sa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=ra(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return ia(r),aa(n),na(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),oa={},la=Ln,ca=Hn,ua=Object.keys||function(t){return la(t,ca)},ha=ft,da=_t,fa=dt,pa=Mt,ma=He,ga=ua;oa.f=ha&&!da?Object.defineProperties:function(t,e){pa(t);for(var r,n=ma(e),i=ga(e),a=i.length,s=0;a>s;)fa.f(t,r=i[s++],n[r]);return t};var va,ya=Ot("document","documentElement"),ba=Mt,wa=oa,xa=Hn,ka=Pr,Aa=ya,_a=xt,$a="prototype",Sa="script",Ea=Rr("IE_PROTO"),Ma=function(){},Ta=function(t){return"<"+Sa+">"+t+"</"+Sa+">"},Na=function(t){t.write(Ta("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ca=function(){try{va=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Ca="undefined"!=typeof document?document.domain&&va?Na(va):(e=_a("iframe"),r="java"+Sa+":",e.style.display="none",Aa.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ta("document.F=Object")),t.close(),t.F):Na(va);for(var n=xa.length;n--;)delete Ca[$a][xa[n]];return Ca()};ka[Ea]=!0;var Ra=Object.create||function(t,e){var r;return null!==t?(Ma[$a]=ba(t),r=new Ma,Ma[$a]=null,r[Ea]=t):r=Ca(),void 0===e?r:wa.f(r,e)},Pa=Error,Oa=h("".replace),Ia=String(new Pa("zxcasd").stack),Da=/\n\s*at [^:]*:[^\n]*/,Ua=Da.test(Ia),za=function(t,e){if(Ua&&"string"==typeof t&&!Pa.prepareStackTrace)for(;e--;)t=Oa(t,Da,"");return t},Fa=Re,ja=!a(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",Fa(1,7)),7!==t.stack)}),qa=fr,La=za,Ha=ja,Ba=Error.captureStackTrace,Va=Mi,Xa=String,Ka=function(t){if("Symbol"===Va(t))throw new TypeError("Cannot convert a Symbol value to a string");return Xa(t)},Wa=Ka,Ya=function(t,e){return void 0===t?arguments.length<2?"":e:Wa(t)},Ja=wi,Za=It,Ga=Wi,Qa=sa,ts=ni,es=Ra,rs=fr,ns=Re,is=function(t,e,r,n){Ha&&(Ba?Ba(t,e):qa(t,"stack",La(r,n)))},as=Ya,ss=ut,os=a,ls=n.SuppressedError,cs=ss("toStringTag"),us=Error,hs=!!ls&&3!==ls.length,ds=!!ls&&os(function(){return 4===new ls(1,2,3,{cause:4}).cause}),fs=hs||ds,ps=function(t,e,r){var n,i=Za(ms,this);return Qa?n=!fs||i&&Ga(this)!==ms?Qa(new us,i?Ga(this):ms):new ls:(n=i?this:es(ms),rs(n,cs,"Error")),void 0!==r&&rs(n,"message",as(r)),is(n,ps,n.stack,1),rs(n,"error",t),rs(n,"suppressed",e),n};Qa?Qa(ps,us):ts(ps,us,{name:!0});var ms=ps.prototype=fs?ls.prototype:es(us.prototype,{constructor:ns(1,ps),message:ns(1,""),name:ns(1,"SuppressedError")});fs&&(ms.constructor=ps),Ja({global:!0,constructor:!0,arity:3,forced:fs},{SuppressedError:ps});var gs=De,vs=Array.isArray||function(t){return"Array"===gs(t)},ys=ft,bs=vs,ws=TypeError,xs=Object.getOwnPropertyDescriptor,ks=ys&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(bs(t)&&!xs(t,"length").writable)throw new ws("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},As=TypeError,_s=function(t){if(t>9007199254740991)throw new As("Maximum allowed index exceeded");return t},$s=y,Ss=Rn,Es=ks,Ms=_s;wi({target:"Array",proto:!0,arity:1,forced:a(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=$s(this),r=Ss(e),n=arguments.length;Ms(r+n);for(var i=0;i<n;i++)e[r]=arguments[i],r++;return Es(e,r),r}});var Ts=ft,Ns=dt,Cs=Re,Rs=function(t,e,r){Ts?Ns.f(t,e,Cs(0,r)):t[e]=r},Ps=Rn,Os=_n,Is=He,Ds=Rs,Us=Array,zs=RangeError;wi({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){var r=Is(this),n=Ps(r),i=Os(t),a=i<0?n+i:i;if(a>=n||a<0)throw new zs("Incorrect index");for(var s=new Us(n),o=0;o<n;o++)Ds(s,o,o===a?e:r[o]);return s}});var Fs=wi,js=h,qs=Math.pow,Ls=qs(2,-24),Hs=.0009765625,Bs=js(DataView.prototype.getUint16);Fs({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,n=1023&t;return 31===r?0===n?0===e?1/0:-1/0:NaN:0===r?n*(0===e?Ls:-Ls):qs(2,r-15)*(0===e?1+n*Hs:-1-n*Hs)}(Bs(this,t,arguments.length>1&&arguments[1]))}});var Vs=Mi,Xs=TypeError,Ks=_n,Ws=Nn,Ys=RangeError,Js=function(t){if(void 0===t)return 0;var e=Ks(t),r=Ws(e);if(e!==r)throw new Ys("Wrong length or index");return r},Zs=Math.log,Gs=Math.LN2,Qs=Math.log2||function(t){return Zs(t)/Gs},to=4503599627370496,eo=function(t){return t+to-to},ro=wi,no=h,io=function(t){if("DataView"===Vs(t))return t;throw new Xs("Argument is not a DataView")},ao=Js,so=Qs,oo=eo,lo=Math.floor,co=Math.pow,uo=1024,ho=no(DataView.prototype.setUint16);ro({target:"DataView",proto:!0},{setFloat16:function(t,e){ho(io(this),ao(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|oo(16777216*t);var r=lo(so(t));if(-15===r)return e<<15|uo;var n=oo((t*co(2,-r)-1)*uo);return n===uo?e<<15|r+16<<10:e<<15|r+15<<10|n}(+e),arguments.length>2&&arguments[2])}});var fo=fn,po=dt,mo=function(t,e,r){return r.get&&fo(r.get,e,{getter:!0}),r.set&&fo(r.set,e,{setter:!0}),po.f(t,e,r)},go="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,vo=n,yo=Zi,bo=De,wo=vo.ArrayBuffer,xo=vo.TypeError,ko=wo&&yo(wo.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==bo(t))throw new xo("ArrayBuffer expected");return t.byteLength},Ao=go,_o=ko,$o=n.DataView,So=function(t){if(!Ao||0!==_o(t))return!1;try{return new $o(t),!1}catch(t){return!0}},Eo=ft,Mo=mo,To=So,No=ArrayBuffer.prototype;Eo&&!("detached"in No)&&Mo(No,"detached",{configurable:!0,get:function(){return To(this)}});var Co,Ro,Po,Oo,Io=So,Do=TypeError,Uo=function(t){if(Io(t))throw new Do("ArrayBuffer is detached");return t},zo=n,Fo=H,jo=De,qo=function(t){return Fo.slice(0,t.length)===t},Lo=qo("Bun/")?"BUN":qo("Cloudflare-Workers")?"CLOUDFLARE":qo("Deno/")?"DENO":qo("Node.js/")?"NODE":zo.Bun&&"string"==typeof Bun.version?"BUN":zo.Deno&&"object"==typeof Deno.version?"DENO":"process"===jo(zo.process)?"NODE":zo.window&&zo.document?"BROWSER":"REST",Ho="NODE"===Lo,Bo=n,Vo=Ho,Xo=a,Ko=J,Wo=Lo,Yo=n.structuredClone,Jo=!!Yo&&!Xo(function(){if("DENO"===Wo&&Ko>92||"NODE"===Wo&&Ko>94||"BROWSER"===Wo&&Ko>97)return!1;var t=new ArrayBuffer(8),e=Yo(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Zo=n,Go=function(t){if(Vo){try{return Bo.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},Qo=Jo,tl=Zo.structuredClone,el=Zo.ArrayBuffer,rl=Zo.MessageChannel,nl=!1;if(Qo)nl=function(t){tl(t,{transfer:[t]})};else if(el)try{rl||(Co=Go("worker_threads"))&&(rl=Co.MessageChannel),rl&&(Ro=new rl,Po=new el(2),Oo=function(t){Ro.port1.postMessage(null,[t])},2===Po.byteLength&&(Oo(Po),0===Po.byteLength&&(nl=Oo)))}catch(t){}var il=nl,al=n,sl=h,ol=Zi,ll=Js,cl=Uo,ul=ko,hl=il,dl=Jo,fl=al.structuredClone,pl=al.ArrayBuffer,ml=al.DataView,gl=Math.max,vl=Math.min,yl=pl.prototype,bl=ml.prototype,wl=sl(yl.slice),xl=ol(yl,"resizable","get"),kl=ol(yl,"maxByteLength","get"),Al=sl(bl.getInt8),_l=sl(bl.setInt8),$l=(dl||hl)&&function(t,e,r){var n,i=ul(t),a=void 0===e?i:ll(e),s=!xl||!xl(t);if(cl(t),dl&&(t=fl(t,{transfer:[t]}),i===a&&(r||s)))return t;if(i>=a&&(!r||s))n=wl(t,0,a);else{var o=r&&!s&&kl?{maxByteLength:gl(a,kl(t))}:void 0;n=new pl(a,o);for(var l=new ml(t),c=new ml(n),u=vl(a,i),h=0;h<u;h++)_l(c,h,Al(l,h))}return dl||hl(t),n},Sl=$l;Sl&&wi({target:"ArrayBuffer",proto:!0},{transfer:function(){return Sl(this,arguments.length?arguments[0]:void 0,!0)}});var El=$l;El&&wi({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return El(this,arguments.length?arguments[0]:void 0,!1)}});var Ml=It,Tl=TypeError,Nl=function(t,e){if(Ml(e,t))return t;throw new Tl("Incorrect invocation")},Cl=yn,Rl=function(t,e,r){for(var n in e)Cl(t,n,e[n],r);return t},Pl=De,Ol=h,Il=function(t){if("Function"===Pl(t))return Ol(t)},Dl=Xt,Ul=s,zl=Il(Il.bind),Fl=function(t,e){return Dl(t),void 0===e?t:Ul?zl(t,e):function(){return t.apply(e,arguments)}},jl=Ot,ql=Ct,Ll=h,Hl=Fl,Bl=Mt,Vl=Xt,Xl=d,Kl=Yt,Wl=ut,Yl=Wl("asyncDispose"),Jl=Wl("dispose"),Zl=Ll([].push),Gl=function(t,e,r){return arguments.length<3&&!Xl(t)&&(r=Vl(function(t,e){if("async-dispose"===e){var r=Kl(t,Yl);return void 0!==r||void 0===(r=Kl(t,Jl))?r:function(){var t=this;return new(jl("Promise"))(function(e){ql(r,t),e(void 0)})}}return Kl(t,Jl)}(Bl(t),e))),void 0===r?function(){}:Hl(r,t)},Ql=function(t,e,r,n){var i;if(arguments.length<4){if(Xl(e)&&"sync-dispose"===r)return;i=Gl(e,r)}else i=Gl(void 0,r,n);Zl(t.stack,i)},tc=wi,ec=ft,rc=Xt,nc=Nl,ic=yn,ac=Rl,sc=mo,oc=ut,lc=Kr,cc=Ql,uc=Ot("SuppressedError"),hc=ReferenceError,dc=oc("dispose"),fc=oc("toStringTag"),pc="DisposableStack",mc=lc.set,gc=lc.getterFor(pc),vc="sync-dispose",yc="disposed",bc=function(t){var e=gc(t);if(e.state===yc)throw new hc(pc+" already disposed");return e},wc=function(){mc(nc(this,xc),{type:pc,state:"pending",stack:[]}),ec||(this.disposed=!1)},xc=wc.prototype;ac(xc,{dispose:function(){var t=gc(this);if(t.state!==yc){t.state=yc,ec||(this.disposed=!0);for(var e,r=t.stack,n=r.length,i=!1;n;){var a=r[--n];r[n]=null;try{a()}catch(t){i?e=new uc(t,e):(i=!0,e=t)}}if(t.stack=null,i)throw e}},use:function(t){return cc(bc(this),t,vc),t},adopt:function(t,e){var r=bc(this);return rc(e),cc(r,void 0,vc,function(){e(t)}),t},defer:function(t){var e=bc(this);rc(t),cc(e,void 0,vc,t)},move:function(){var t=bc(this),e=new wc;return gc(e).stack=t.stack,t.stack=[],t.state=yc,ec||(this.disposed=!0),e}}),ec&&sc(xc,"disposed",{configurable:!0,get:function(){return gc(this).state===yc}}),ic(xc,dc,xc.dispose,{name:"dispose"}),ic(xc,fc,pc,{nonWritable:!0}),tc({global:!0,constructor:!0},{DisposableStack:wc});var kc,Ac,_c,$c=a,Sc=mt,Ec=vt,Mc=Wi,Tc=yn,Nc=ut("iterator");[].keys&&"next"in(_c=[].keys())&&(Ac=Mc(Mc(_c)))!==Object.prototype&&(kc=Ac);var Cc=!Ec(kc)||$c(function(){var t={};return kc[Nc].call(t)!==t});Cc&&(kc={}),Sc(kc[Nc])||Tc(kc,Nc,function(){return this});var Rc={IteratorPrototype:kc},Pc=wi,Oc=n,Ic=Nl,Dc=Mt,Uc=mt,zc=Wi,Fc=mo,jc=Rs,qc=a,Lc=x,Hc=Rc.IteratorPrototype,Bc=ft,Vc="constructor",Xc="Iterator",Kc=ut("toStringTag"),Wc=TypeError,Yc=Oc[Xc],Jc=!Uc(Yc)||Yc.prototype!==Hc||!qc(function(){Yc({})}),Zc=function(){if(Ic(this,Hc),zc(this)===Hc)throw new Wc("Abstract class Iterator not directly constructable")},Gc=function(t,e){Bc?Fc(Hc,t,{configurable:!0,get:function(){return e},set:function(e){if(Dc(this),this===Hc)throw new Wc("You can't redefine this property");Lc(this,t)?this[t]=e:jc(this,t,e)}}):Hc[t]=e};Lc(Hc,Kc)||Gc(Kc,Xc),!Jc&&Lc(Hc,Vc)&&Hc[Vc]!==Object||Gc(Vc,Zc),Zc.prototype=Hc,Pc({global:!0,constructor:!0,forced:Jc},{Iterator:Zc});var Qc={},tu=Mi,eu=Yt,ru=d,nu=Qc,iu=ut("iterator"),au=function(t){if(!ru(t))return eu(t,iu)||eu(t,"@@iterator")||nu[tu(t)]},su=function(t,e){return{value:t,done:e}},ou=Ct,lu=Mt,cu=Yt,uu=function(t,e,r){var n,i;lu(t);try{if(!(n=cu(t,"return"))){if("throw"===e)throw r;return r}n=ou(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return lu(n),r},hu=uu,du=Ct,fu=Ra,pu=fr,mu=Rl,gu=Kr,vu=Yt,yu=Rc.IteratorPrototype,bu=su,wu=uu,xu=function(t,e,r){for(var n=t.length-1;n>=0;n--)if(void 0!==t[n])try{r=hu(t[n].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},ku=ut("toStringTag"),Au="IteratorHelper",_u="WrapForValidIterator",$u="normal",Su="throw",Eu=gu.set,Mu=function(t){var e=gu.getterFor(t?_u:Au);return mu(fu(yu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return bu(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:bu(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),n=r.iterator,i=r.done;if(r.done=!0,t){var a=vu(n,"return");return a?du(a,n):bu(void 0,!0)}if(i)return bu(void 0,!0);if(r.inner)try{wu(r.inner.iterator,$u)}catch(t){return wu(n,Su,t)}if(r.openIters)try{xu(r.openIters,$u)}catch(t){if(n)return wu(n,Su,t);throw t}return n&&wu(n,$u),bu(void 0,!0)}})},Tu=Mu(!0),Nu=Mu(!1);pu(Nu,ku,"Iterator Helper");var Cu=function(t,e,r){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?_u:Au,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,Eu(this,i)};return n.prototype=e?Tu:Nu,n},Ru=wi,Pu=Ct,Ou=Xt,Iu=Mt,Du=au,Uu=Array,zu=Cu(function(){for(;;){var t=this.iterator;if(!t){var e=this.nextIterableIndex++,r=this.iterables;if(e>=r.length)return void(this.done=!0);var n=r[e];this.iterables[e]=null,t=this.iterator=Iu(Pu(n.method,n.iterable)),this.next=t.next}var i=Iu(Pu(this.next,t));if(!i.done)return i.value;this.iterator=null,this.next=null}});Ru({target:"Iterator",stat:!0,forced:false},{concat:function(){for(var t=arguments.length,e=Uu(t),r=0;r<t;r++){var n=Iu(arguments[r]);e[r]={iterable:n,method:Ou(Du(n))}}return new zu({iterables:e,nextIterableIndex:0,iterator:null,next:null})}});var Fu=Ct,ju=yn,qu=Yt,Lu=x,Hu=Rc.IteratorPrototype,Bu=ut("dispose");Lu(Hu,Bu)||ju(Hu,Bu,function(){var t=qu(this,"return");t&&Fu(t,this)});var Vu=function(t){return{iterator:t,next:t.next,done:!1}},Xu=RangeError,Ku=function(t){if(t==t)return t;throw new Xu("NaN is not allowed")},Wu=_n,Yu=RangeError,Ju=function(t){var e=Wu(t);if(e<0)throw new Yu("The argument can't be less than 0");return e},Zu=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Gu=n,Qu=function(t,e){var r=Gu.Iterator,n=r&&r.prototype,i=n&&n[t],a=!1;if(i)try{i.call({next:function(){return{done:!0}},return:function(){a=!0}},-1)}catch(t){t instanceof e||(a=!1)}if(!a)return i},th=wi,eh=Ct,rh=Mt,nh=Vu,ih=Ku,ah=Ju,sh=uu,oh=Cu,lh=Qu,ch=!Zu("drop",0),uh=!ch&&lh("drop",RangeError),hh=ch||uh,dh=oh(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=rh(eh(r,e)),this.done=!!t.done)return;if(t=rh(eh(r,e)),!(this.done=!!t.done))return t.value});th({target:"Iterator",proto:!0,real:!0,forced:hh},{drop:function(t){var e;rh(this);try{e=ah(ih(+t))}catch(t){sh(this,"throw",t)}return uh?eh(uh,this,e):new dh(nh(this),{remaining:e})}});var fh=Qc,ph=ut("iterator"),mh=Array.prototype,gh=Ct,vh=Xt,yh=Mt,bh=Lt,wh=au,xh=TypeError,kh=function(t,e){var r=arguments.length<2?wh(t):e;if(vh(r))return yh(gh(r,t));throw new xh(bh(t)+" is not iterable")},Ah=Fl,_h=Ct,$h=Mt,Sh=Lt,Eh=function(t){return void 0!==t&&(fh.Array===t||mh[ph]===t)},Mh=Rn,Th=It,Nh=kh,Ch=au,Rh=uu,Ph=TypeError,Oh=function(t,e){this.stopped=t,this.result=e},Ih=Oh.prototype,Dh=function(t,e,r){var n,i,a,s,o,l,c,u=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_RECORD),f=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),m=Ah(e,u),g=function(t){var e=n;return n=void 0,e&&Rh(e,"normal"),new Oh(!0,t)},v=function(t){return h?($h(t),p?m(t[0],t[1],g):m(t[0],t[1])):p?m(t,g):m(t)};if(d)n=t.iterator;else if(f)n=t;else{if(!(i=Ch(t)))throw new Ph(Sh(t)+" is not iterable");if(Eh(i)){for(a=0,s=Mh(t);s>a;a++)if((o=v(t[a]))&&Th(Ih,o))return o;return new Oh(!1)}n=Nh(t,i)}for(l=d?t.next:n.next;!(c=_h(l,n)).done;){var y=c.value;try{o=v(y)}catch(t){if(!n)throw t;Rh(n,"throw",t)}if("object"==typeof o&&o&&Th(Ih,o))return o}return new Oh(!1)},Uh=wi,zh=Ct,Fh=Dh,jh=Xt,qh=Mt,Lh=Vu,Hh=uu,Bh=Qu("every",TypeError);Uh({target:"Iterator",proto:!0,real:!0,forced:Bh},{every:function(t){qh(this);try{jh(t)}catch(t){Hh(this,"throw",t)}if(Bh)return zh(Bh,this,t);var e=Lh(this),r=0;return!Fh(e,function(e,n){if(!t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Vh=Mt,Xh=uu,Kh=function(t,e,r,n){try{return n?e(Vh(r)[0],r[1]):e(r)}catch(e){Xh(t,"throw",e)}},Wh=wi,Yh=Ct,Jh=Xt,Zh=Mt,Gh=Vu,Qh=Cu,td=Kh,ed=uu,rd=Qu,nd=!Zu("filter",function(){}),id=!nd&&rd("filter",TypeError),ad=nd||id,sd=Qh(function(){for(var t,e,r=this.iterator,n=this.predicate,i=this.next;;){if(t=Zh(Yh(i,r)),this.done=!!t.done)return;if(e=t.value,td(r,n,[e,this.counter++],!0))return e}});Wh({target:"Iterator",proto:!0,real:!0,forced:ad},{filter:function(t){Zh(this);try{Jh(t)}catch(t){ed(this,"throw",t)}return id?Yh(id,this,t):new sd(Gh(this),{predicate:t})}});var od=wi,ld=Ct,cd=Dh,ud=Xt,hd=Mt,dd=Vu,fd=uu,pd=Qu("find",TypeError);od({target:"Iterator",proto:!0,real:!0,forced:pd},{find:function(t){hd(this);try{ud(t)}catch(t){fd(this,"throw",t)}if(pd)return ld(pd,this,t);var e=dd(this),r=0;return cd(e,function(e,n){if(t(e,r++))return n(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var md=Ct,gd=Mt,vd=Vu,yd=au,bd=function(t,e){e&&"string"==typeof t||gd(t);var r=yd(t);return vd(gd(void 0!==r?md(r,t):t))},wd=wi,xd=Ct,kd=Xt,Ad=Mt,_d=Vu,$d=bd,Sd=Cu,Ed=uu,Md=Qu;var Td=!Zu("flatMap",function(){}),Nd=!Td&&Md("flatMap",TypeError),Cd=Td||Nd||function(){try{var t=Iterator.prototype.flatMap.call(new Map([[4,5]]).entries(),function(t){return t});t.next(),t.return()}catch(t){return!0}}(),Rd=Sd(function(){for(var t,e,r=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=Ad(xd(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){Ed(r,"throw",t)}if(t=Ad(xd(this.next,r)),this.done=!!t.done)return;try{this.inner=$d(n(t.value,this.counter++),!1)}catch(t){Ed(r,"throw",t)}}});wd({target:"Iterator",proto:!0,real:!0,forced:Cd},{flatMap:function(t){Ad(this);try{kd(t)}catch(t){Ed(this,"throw",t)}return Nd?xd(Nd,this,t):new Rd(_d(this),{mapper:t,inner:null})}});var Pd=wi,Od=Ct,Id=Dh,Dd=Xt,Ud=Mt,zd=Vu,Fd=uu,jd=Qu("forEach",TypeError);Pd({target:"Iterator",proto:!0,real:!0,forced:jd},{forEach:function(t){Ud(this);try{Dd(t)}catch(t){Fd(this,"throw",t)}if(jd)return Od(jd,this,t);var e=zd(this),r=0;Id(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var qd=wi,Ld=Ct,Hd=y,Bd=It,Vd=Rc.IteratorPrototype,Xd=Cu,Kd=bd,Wd=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),Yd=Xd(function(){return Ld(this.next,this.iterator)},!0);qd({target:"Iterator",stat:!0,forced:Wd},{from:function(t){var e=Kd("string"==typeof t?Hd(t):t,!0);return Bd(Vd,e.iterator)?e.iterator:new Yd(e)}});var Jd=wi,Zd=Ct,Gd=Xt,Qd=Mt,tf=Vu,ef=Cu,rf=Kh,nf=uu,af=Qu,sf=!Zu("map",function(){}),of=!sf&&af("map",TypeError),lf=sf||of,cf=ef(function(){var t=this.iterator,e=Qd(Zd(this.next,t));if(!(this.done=!!e.done))return rf(t,this.mapper,[e.value,this.counter++],!0)});Jd({target:"Iterator",proto:!0,real:!0,forced:lf},{map:function(t){Qd(this);try{Gd(t)}catch(t){nf(this,"throw",t)}return of?Zd(of,this,t):new cf(tf(this),{mapper:t})}});var uf=s,hf=Function.prototype,df=hf.apply,ff=hf.call,pf="object"==typeof Reflect&&Reflect.apply||(uf?ff.bind(df):function(){return ff.apply(df,arguments)}),mf=wi,gf=Dh,vf=Xt,yf=Mt,bf=Vu,wf=uu,xf=Qu,kf=pf,Af=TypeError,_f=a(function(){[].keys().reduce(function(){},void 0)}),$f=!_f&&xf("reduce",Af);mf({target:"Iterator",proto:!0,real:!0,forced:_f||$f},{reduce:function(t){yf(this);try{vf(t)}catch(t){wf(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if($f)return kf($f,this,e?[t]:[t,r]);var n=bf(this),i=0;if(gf(n,function(n){e?(e=!1,r=n):r=t(r,n,i),i++},{IS_RECORD:!0}),e)throw new Af("Reduce of empty iterator with no initial value");return r}});var Sf=wi,Ef=Ct,Mf=Dh,Tf=Xt,Nf=Mt,Cf=Vu,Rf=uu,Pf=Qu("some",TypeError);Sf({target:"Iterator",proto:!0,real:!0,forced:Pf},{some:function(t){Nf(this);try{Tf(t)}catch(t){Rf(this,"throw",t)}if(Pf)return Ef(Pf,this,t);var e=Cf(this),r=0;return Mf(e,function(e,n){if(t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Of=wi,If=Ct,Df=Mt,Uf=Vu,zf=Ku,Ff=Ju,jf=Cu,qf=uu,Lf=Qu,Hf=!Zu("take",1),Bf=!Hf&&Lf("take",RangeError),Vf=Hf||Bf,Xf=jf(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,qf(t,"normal",void 0);var e=Df(If(this.next,t));return(this.done=!!e.done)?void 0:e.value});Of({target:"Iterator",proto:!0,real:!0,forced:Vf},{take:function(t){var e;Df(this);try{e=Ff(zf(+t))}catch(t){qf(this,"throw",t)}return Bf?If(Bf,this,e):new Xf(Uf(this),{remaining:e})}});var Kf=Mt,Wf=Rs,Yf=Dh,Jf=Vu;wi({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return Yf(Jf(Kf(this)),function(r){Wf(t,e++,r)},{IS_RECORD:!0}),t}});var Zf=!a(function(){var t="9007199254740993",e=JSON.rawJSON(t);return!JSON.isRawJSON(e)||JSON.stringify(e)!==t}),Gf=vt,Qf=Kr.get,tp=function(t){if(!Gf(t))return!1;var e=Qf(t);return!!e&&"RawJSON"===e.type};wi({target:"JSON",stat:!0,forced:!Zf},{isRawJSON:tp});var ep=h,rp=x,np=SyntaxError,ip=parseInt,ap=String.fromCharCode,sp=ep("".charAt),op=ep("".slice),lp=ep(/./.exec),cp={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},up=/^[\da-f]{4}$/i,hp=/^[\u0000-\u001F]$/,dp=function(t,e){for(var r=!0,n="";e<t.length;){var i=sp(t,e);if("\\"===i){var a=op(t,e,e+2);if(rp(cp,a))n+=cp[a],e+=2;else{if("\\u"!==a)throw new np('Unknown escape sequence: "'+a+'"');var s=op(t,e+=2,e+4);if(!lp(up,s))throw new np("Bad Unicode escape at: "+e);n+=ap(ip(s,16)),e+=4}}else{if('"'===i){r=!1,e++;break}if(lp(hp,i))throw new np("Bad control character in string literal at: "+e);n+=i,e++}}if(r)throw new np("Unterminated string at: "+e);return{value:n,end:e}},fp=wi,pp=ft,mp=n,gp=Ot,vp=h,yp=Ct,bp=mt,wp=vt,xp=vs,kp=x,Ap=Ka,_p=Rn,$p=Rs,Sp=a,Ep=dp,Mp=tt,Tp=mp.JSON,Np=mp.Number,Cp=mp.SyntaxError,Rp=Tp&&Tp.parse,Pp=gp("Object","keys"),Op=Object.getOwnPropertyDescriptor,Ip=vp("".charAt),Dp=vp("".slice),Up=vp(/./.exec),zp=vp([].push),Fp=/^\d$/,jp=/^[1-9]$/,qp=/^[\d-]$/,Lp=/^[\t\n\r ]$/,Hp=function(t,e,r,n){var i,a,s,o,l,c=t[e],u=n&&c===n.value,h=u&&"string"==typeof n.source?{source:n.source}:{};if(wp(c)){var d=xp(c),f=u?n.nodes:d?[]:{};if(d)for(i=f.length,s=_p(c),o=0;o<s;o++)Bp(c,o,Hp(c,""+o,r,o<i?f[o]:void 0));else for(a=Pp(c),s=_p(a),o=0;o<s;o++)l=a[o],Bp(c,l,Hp(c,l,r,kp(f,l)?f[l]:void 0))}return yp(r,t,e,c,h)},Bp=function(t,e,r){if(pp){var n=Op(t,e);if(n&&!n.configurable)return}void 0===r?delete t[e]:$p(t,e,r)},Vp=function(t,e,r,n){this.value=t,this.end=e,this.source=r,this.nodes=n},Xp=function(t,e){this.source=t,this.index=e};Xp.prototype={fork:function(t){return new Xp(this.source,t)},parse:function(){var t=this.source,e=this.skip(Lp,this.index),r=this.fork(e),n=Ip(t,e);if(Up(qp,n))return r.number();switch(n){case"{":return r.object();case"[":return r.array();case'"':return r.string();case"t":return r.keyword(!0);case"f":return r.keyword(!1);case"n":return r.keyword(null)}throw new Cp('Unexpected character: "'+n+'" at: '+e)},node:function(t,e,r,n,i){return new Vp(e,n,t?null:Dp(this.source,r,n),i)},object:function(){for(var t=this.source,e=this.index+1,r=!1,n={},i={},a=!1;e<t.length;){if(e=this.until(['"',"}"],e),"}"===Ip(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).string(),o=s.value;e=s.end,e=this.until([":"],e)+1,e=this.skip(Lp,e),s=this.fork(e).parse(),$p(i,o,s),$p(n,o,s.value),e=this.until([",","}"],s.end);var l=Ip(t,e);if(","===l)r=!0,e++;else if("}"===l){e++,a=!0;break}}if(!a)throw new Cp("Unterminated object at: "+e);return this.node(1,n,this.index,e,i)},array:function(){for(var t=this.source,e=this.index+1,r=!1,n=[],i=[],a=!1;e<t.length;){if(e=this.skip(Lp,e),"]"===Ip(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).parse();if(zp(i,s),zp(n,s.value),e=this.until([",","]"],s.end),","===Ip(t,e))r=!0,e++;else if("]"===Ip(t,e)){e++,a=!0;break}}if(!a)throw new Cp("Unterminated array at: "+e);return this.node(1,n,this.index,e,i)},string:function(){var t=this.index,e=Ep(this.source,this.index+1);return this.node(0,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,r=e;if("-"===Ip(t,r)&&r++,"0"===Ip(t,r))r++;else{if(!Up(jp,Ip(t,r)))throw new Cp("Failed to parse number at: "+r);r=this.skip(Fp,r+1)}if("."===Ip(t,r)){var n=r+1;if(n===(r=this.skip(Fp,n)))throw new Cp("Failed to parse number's fraction at: "+r)}if(("e"===Ip(t,r)||"E"===Ip(t,r))&&(r++,"+"!==Ip(t,r)&&"-"!==Ip(t,r)||r++,r===(r=this.skip(Fp,r))))throw new Cp("Failed to parse number's exponent value at: "+r);return this.node(0,Np(Dp(t,e,r)),e,r)},keyword:function(t){var e=""+t,r=this.index,n=r+e.length;if(Dp(this.source,r,n)!==e)throw new Cp("Failed to parse value at: "+r);return this.node(0,t,r,n)},skip:function(t,e){for(var r=this.source;e<r.length&&Up(t,Ip(r,e));e++);return e},until:function(t,e){e=this.skip(Lp,e);for(var r=Ip(this.source,e),n=0;n<t.length;n++)if(t[n]===r)return e;throw new Cp('Unexpected character: "'+r+'" at: '+e)}};var Kp=Sp(function(){var t,e="9007199254740993";return Rp(e,function(e,r,n){t=n.source}),t!==e}),Wp=Mp&&!Sp(function(){return 1/Rp("-0 \t")!=-1/0});fp({target:"JSON",stat:!0,forced:Kp},{parse:function(t,e){return Wp&&!bp(e)?Rp(t):function(t,e){t=Ap(t);var r=new Xp(t,0),n=r.parse(),i=n.value,a=r.skip(Lp,n.end);if(a<t.length)throw new Cp('Unexpected extra character: "'+Ip(t,a)+'" after the parsed data at: '+a);return bp(e)?Hp({"":i},"",e,n):i}(t,e)}});var Yp=wi,Jp=!a(function(){return Object.isExtensible(Object.preventExtensions({}))}),Zp=Zf,Gp=Ot,Qp=h,tm=Ka,em=Rs,rm=Kr.set,nm=SyntaxError,im=Gp("JSON","parse"),am=Gp("Object","create"),sm=Gp("Object","freeze"),om=Qp("".charAt),lm="Unacceptable as raw JSON",cm=function(t){return" "===t||"\t"===t||"\n"===t||"\r"===t};Yp({target:"JSON",stat:!0,forced:!Zp},{rawJSON:function(t){var e=tm(t);if(""===e||cm(om(e,0))||cm(om(e,e.length-1)))throw new nm(lm);var r=im(e);if("object"==typeof r&&null!==r)throw new nm(lm);var n=am(null);return rm(n,{type:"RawJSON"}),em(n,"rawJSON",e),Jp?sm(n):n}});var um=h([].slice),hm=wi,dm=Ot,fm=pf,pm=Ct,mm=h,gm=a,vm=vs,ym=mt,bm=tp,wm=jt,xm=De,km=Ka,Am=um,_m=dp,$m=j,Sm=tt,Em=Zf,Mm=String,Tm=dm("JSON","stringify"),Nm=mm(/./.exec),Cm=mm("".charAt),Rm=mm("".charCodeAt),Pm=mm("".replace),Om=mm("".slice),Im=mm([].push),Dm=mm(1.1.toString),Um=/[\uD800-\uDFFF]/g,zm=/^[\uD800-\uDBFF]$/,Fm=/^[\uDC00-\uDFFF]$/,jm=$m(),qm=jm.length,Lm=!Sm||gm(function(){var t=dm("Symbol")("stringify detection");return"[null]"!==Tm([t])||"{}"!==Tm({a:t})||"{}"!==Tm(Object(t))}),Hm=gm(function(){return'"\\udf06\\ud834"'!==Tm("\udf06\ud834")||'"\\udead"'!==Tm("\udead")}),Bm=Lm?function(t,e){var r=Am(arguments),n=Xm(e);if(ym(n)||void 0!==t&&!wm(t))return r[1]=function(t,e){if(ym(n)&&(e=pm(n,this,Mm(t),e)),!wm(e))return e},fm(Tm,null,r)}:Tm,Vm=function(t,e,r){var n=Cm(r,e-1),i=Cm(r,e+1);return Nm(zm,t)&&!Nm(Fm,i)||Nm(Fm,t)&&!Nm(zm,n)?"\\u"+Dm(Rm(t,0),16):t},Xm=function(t){if(ym(t))return t;if(vm(t)){for(var e=t.length,r=[],n=0;n<e;n++){var i=t[n];"string"==typeof i?Im(r,i):"number"!=typeof i&&"Number"!==xm(i)&&"String"!==xm(i)||Im(r,km(i))}var a=r.length,s=!0;return function(t,e){if(s)return s=!1,e;if(vm(this))return e;for(var n=0;n<a;n++)if(r[n]===t)return e}}};Tm&&hm({target:"JSON",stat:!0,arity:3,forced:Lm||Hm||!Em},{stringify:function(t,e,r){var n=Xm(e),i=[],a=Bm(t,function(t,e){var r=ym(n)?pm(n,this,Mm(t),e):e;return!Em&&bm(r)?jm+(Im(i,r.rawJSON)-1):r},r);if("string"!=typeof a)return a;if(Hm&&(a=Pm(a,Um,Vm)),Em)return a;for(var s="",o=a.length,l=0;l<o;l++){var c=Cm(a,l);if('"'===c){var u=_m(a,++l).end-1,h=Om(a,l,u);s+=Om(h,0,qm)===jm?i[Om(h,qm)]:'"'+h+'"',l=u}else s+=c}return s}});var Km=h,Wm=Map.prototype,Ym={Map:Map,set:Km(Wm.set),get:Km(Wm.get),has:Km(Wm.has),remove:Km(Wm.delete)},Jm=wi,Zm=Xt,Gm=m,Qm=Dh,tg=a,eg=Ym.Map,rg=Ym.has,ng=Ym.get,ig=Ym.set,ag=h([].push);Jm({target:"Map",stat:!0,forced:tg(function(){return 1!==eg.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){Gm(t),Zm(e);var r=new eg,n=0;return Qm(t,function(t){var i=e(t,n++);rg(r,i)?ag(ng(r,i),t):ig(r,i,[t])}),r}});var sg=Ym.get,og=Ym.has,lg=Ym.set;wi({target:"Map",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return og(this,t)?sg(this,t):(lg(this,t,e),e)}});var cg=Xt,ug=Ym.get,hg=Ym.has,dg=Ym.set;wi({target:"Map",proto:!0,real:!0,forced:false},{getOrInsertComputed:function(t,e){var r=hg(this,t);if(cg(e),r)return ug(this,t);0===t&&1/t==-1/0&&(t=0);var n=e(t);return dg(this,t,n),n}});var fg=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},pg=fg,mg=eo,gg=Math.abs,vg=function(t,e,r,n){var i=+t,a=gg(i),s=pg(i);if(a<n)return s*mg(a/n/e)*n*e;var o=(1+e/2220446049250313e-31)*a,l=o-(o-a);return l>r||l!=l?s*(1/0):s*l};wi({target:"Math",stat:!0},{f16round:function(t){return vg(t,.0009765625,65504,6103515625e-14)}});var yg=wi,bg=h,wg=Dh,xg=RangeError,kg=TypeError,Ag=1/0,_g=Math.abs,$g=Math.pow,Sg=bg([].push),Eg=$g(2,1023),Mg=$g(2,53)-1,Tg=Number.MAX_VALUE,Ng=$g(2,971),Cg={},Rg={},Pg={},Og={},Ig={},Dg=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};yg({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,n=Og;switch(wg(t,function(t){if(++r>Mg)throw new xg("Maximum allowed index exceeded");if("number"!=typeof t)throw new kg("Value is not a number");n!==Cg&&(t!=t?n=Cg:t===Ag?n=n===Rg?Cg:Pg:t===-1/0?n=n===Pg?Cg:Rg:0===t&&1/t!==Ag||n!==Og&&n!==Ig||(n=Ig,Sg(e,t)))}),n){case Cg:return NaN;case Rg:return-1/0;case Pg:return Ag;case Og:return-0}for(var i,a,s,o,l,c,u=[],h=0,d=0;d<e.length;d++){i=e[d];for(var f=0,p=0;p<u.length;p++){if(a=u[p],_g(i)<_g(a)&&(c=i,i=a,a=c),o=(s=Dg(i,a)).hi,l=s.lo,_g(o)===Ag){var m=o===Ag?1:-1;h+=m,_g(i=i-m*Eg-m*Eg)<_g(a)&&(c=i,i=a,a=c),o=(s=Dg(i,a)).hi,l=s.lo}0!==l&&(u[f++]=l),i=o}u.length=f,0!==i&&Sg(u,i)}var g=u.length-1;if(o=0,l=0,0!==h){var v=g>=0?u[g]:0;if(g--,_g(h)>1||h>0&&v>0||h<0&&v<0)return h>0?Ag:-1/0;if(o=(s=Dg(h*Eg,v/2)).hi,l=s.lo,l*=2,_g(2*o)===Ag)return o>0?o===Eg&&l===-Ng/2&&g>=0&&u[g]<0?Tg:Ag:o===-Eg&&l===Ng/2&&g>=0&&u[g]>0?-Tg:-1/0;0!==l&&(u[++g]=l,l=0),o*=2}for(;g>=0&&(o=(s=Dg(o,u[g--])).hi,0===(l=s.lo)););return g>=0&&(l<0&&u[g]<0||l>0&&u[g]>0)&&(a=2*l)===(i=o+a)-o&&(o=i),o}});var Ug=wi,zg=Rs,Fg=Ot,jg=h,qg=Xt,Lg=m,Hg=ue,Bg=Dh,Vg=a,Xg=Object.groupBy,Kg=Fg("Object","create"),Wg=jg([].push);Ug({target:"Object",stat:!0,forced:!Xg||Vg(function(){return 1!==Xg("ab",function(t){return t}).a.length})},{groupBy:function(t,e){Lg(t),qg(e);var r=Kg(null),n=0;return Bg(t,function(t){var i=Hg(e(t,n++));i in r?Wg(r[i],t):zg(r,i,[t])}),r}});var Yg={},Jg=Xt,Zg=TypeError,Gg=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw new Zg("Bad Promise constructor");e=t,r=n}),this.resolve=Jg(e),this.reject=Jg(r)};Yg.f=function(t){return new Gg(t)};var Qg=wi,tv=pf,ev=um,rv=Yg,nv=Xt,iv=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},av=n.Promise,sv=!1;Qg({target:"Promise",stat:!0,forced:!av||!av.try||iv(function(){av.try(function(t){sv=8===t},8)}).error||!sv},{try:function(t){var e=arguments.length>1?ev(arguments,1):[],r=rv.f(this),n=iv(function(){return tv(nv(t),void 0,e)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var ov=Yg;wi({target:"Promise",stat:!0},{withResolvers:function(){var t=ov.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var lv=h,cv=a,uv=mt,hv=Mi,dv=Sr,fv=function(){},pv=Ot("Reflect","construct"),mv=/^\s*(?:class|function)\b/,gv=lv(mv.exec),vv=!mv.test(fv),yv=function(t){if(!uv(t))return!1;try{return pv(fv,[],t),!0}catch(t){return!1}},bv=function(t){if(!uv(t))return!1;switch(hv(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return vv||!!gv(mv,dv(t))}catch(t){return!0}};bv.sham=!0;var wv,xv,kv=!pv||cv(function(){var t;return yv(yv.call)||!yv(Object)||!yv(function(){t=!0})||t})?bv:yv,Av=n,_v=P,$v=mt,Sv=Wi,Ev=yn,Mv="USE_FUNCTION_CONSTRUCTOR",Tv=ut("asyncIterator"),Nv=Av.AsyncIterator,Cv=_v.AsyncIteratorPrototype;if(Cv)wv=Cv;else if($v(Nv))wv=Nv.prototype;else if(_v[Mv]||Av[Mv])try{xv=Sv(Sv(Sv(Function("return async function*(){}()")()))),Sv(xv)===Object.prototype&&(wv=xv)}catch(t){}wv||(wv={}),$v(wv[Tv])||Ev(wv,Tv,function(){return this});var Rv=wv,Pv=Ct,Ov=Mt,Iv=Ra,Dv=Yt,Uv=Rl,zv=Kr,Fv=uu,jv=Rv,qv=su,Lv=Ot("Promise"),Hv="AsyncFromSyncIterator",Bv=zv.set,Vv=zv.getterFor(Hv),Xv=function(t,e,r,n,i){var a=t.done;Lv.resolve(t.value).then(function(t){e(qv(t,a))},function(t){if(!a&&i)try{Fv(n,"throw",t)}catch(e){t=e}r(t)})},Kv=function(t){t.type=Hv,Bv(this,t)};Kv.prototype=Uv(Iv(jv),{next:function(){var t=Vv(this),e=arguments.length>0,r=e?arguments[0]:void 0;return new Lv(function(n,i){var a=Ov(e?Pv(t.next,t.iterator,r):Pv(t.next,t.iterator));Xv(a,n,i,t.iterator,!0)})},return:function(){var t=Vv(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new Lv(function(n,i){var a=Dv(t,"return");if(void 0===a)return n(qv(r,!0));var s=Ov(e?Pv(a,t,r):Pv(a,t));Xv(s,n,i,t)})},throw:function(){var t=Vv(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new Lv(function(n,i){var a=Dv(t,"throw");if(void 0===a){try{Fv(t,"normal")}catch(t){return i(t)}return i(new TypeError("The iterator does not provide a throw method"))}var s=Ov(e?Pv(a,t,r):Pv(a,t));Xv(s,n,i,t,!0)})}});var Wv,Yv,Jv,Zv,Gv,Qv=Kv,ty=Ct,ey=Qv,ry=Mt,ny=kh,iy=Vu,ay=Yt,sy=ut("asyncIterator"),oy=n,ly=Ct,cy=Mt,uy=Ot,hy=Yt,dy=Ct,fy=Xt,py=Mt,my=vt,gy=_s,vy=Ot,yy=Rs,by=ks,wy=Vu,xy=function(t,e,r,n){try{var i=hy(t,"return");if(i)return uy("Promise").resolve(ly(i,t)).then(function(t){try{e!==n&&cy(t)}catch(t){return void n(t)}e(r)},function(t){e===n?e(r):n(t)})}catch(t){return n(e===n?r:t)}e(r)},ky={toArray:(Wv=0,Yv=0===Wv,Jv=1===Wv,Zv=2===Wv,Gv=3===Wv,function(t,e,r){py(t);var n=void 0!==e;!n&&Yv||fy(e);var i=wy(t),a=vy("Promise"),s=i.iterator,o=i.next,l=0;return new a(function(t,i){var c=function(t){xy(s,i,t,i)},u=function(){try{try{gy(l)}catch(t){return c(t)}a.resolve(py(dy(o,s))).then(function(o){try{if(py(o).done)Yv?(by(r,l),t(r)):t(!Gv&&(Zv||void 0));else{var h=o.value;try{if(n){var d=l++,f=e(h,d),p=function(e){if(Jv)u();else if(Zv)e?u():xy(s,t,!1,i);else if(Yv)try{yy(r,d,e),u()}catch(t){c(t)}else e?xy(s,t,Gv||h,i):u()};my(f)?a.resolve(f).then(p,c):p(f)}else yy(r,l++,h),u()}catch(t){c(t)}}}catch(t){i(t)}},i)}catch(t){i(t)}};u()})})},Ay=Fl,_y=h,$y=kv,Sy=function(t,e){var r=arguments.length<2?ay(t,sy):e;return r?ry(ty(r,t)):new ey(iy(ny(t)))},Ey=kh,My=Vu,Ty=au,Ny=Yt,Cy=Ot,Ry=function(t,e){var r=oy[t],n=r&&r.prototype;return n&&n[e]},Py=Qv,Oy=ky.toArray,Iy=ut("asyncIterator"),Dy=_y(Ry("Array","values")),Uy=_y(Dy([]).next),zy=function(){return new Fy(this)},Fy=function(t){this.iterator=Dy(t)};Fy.prototype.next=function(){return Uy(this.iterator)};var jy=wi,qy=function(t){var e=this,r=arguments.length,n=r>1?arguments[1]:void 0,i=r>2?arguments[2]:void 0;return new(Cy("Promise"))(function(r){void 0!==n&&(n=Ay(n,i));var a=Ny(t,Iy),s=a?void 0:Ty(t)||zy,o=$y(e)?new e:[],l=a?Sy(t,a):new Py(My(Ey(t,s)));r(Oy(l,n,o))})},Ly=a,Hy=Array.fromAsync,By=!Hy||Ly(function(){var t=0;return Hy.call(function(){return t++,[]},{length:0}),1!==t});jy({target:"Array",stat:!0,forced:By},{fromAsync:qy});var Vy=wi,Xy=ft,Ky=Ot,Wy=Xt,Yy=Nl,Jy=yn,Zy=Rl,Gy=mo,Qy=ut,tb=Kr,eb=Ql,rb=J,nb=Ky("Promise"),ib=Ky("SuppressedError"),ab=ReferenceError,sb=Qy("asyncDispose"),ob=Qy("toStringTag"),lb="AsyncDisposableStack",cb=tb.set,ub=tb.getterFor(lb),hb="async-dispose",db="disposed",fb=function(t){var e=ub(t);if(e.state===db)throw new ab(lb+" already disposed");return e},pb=function(){cb(Yy(this,mb),{type:lb,state:"pending",stack:[]}),Xy||(this.disposed=!1)},mb=pb.prototype;Zy(mb,{disposeAsync:function(){var t=this;return new nb(function(e,r){var n=ub(t);if(n.state===db)return e(void 0);n.state=db,Xy||(t.disposed=!0);var i,a=n.stack,s=a.length,o=!1,l=function(t){o?i=new ib(t,i):(o=!0,i=t),c()},c=function(){if(s){var t=a[--s];a[s]=null;try{nb.resolve(t()).then(c,l)}catch(t){l(t)}}else n.stack=null,o?r(i):e(void 0)};c()})},use:function(t){return eb(fb(this),t,hb),t},adopt:function(t,e){var r=fb(this);return Wy(e),eb(r,void 0,hb,function(){return e(t)}),t},defer:function(t){var e=fb(this);Wy(t),eb(e,void 0,hb,t)},move:function(){var t=fb(this),e=new pb;return ub(e).stack=t.stack,t.stack=[],t.state=db,Xy||(this.disposed=!0),e}}),Xy&&Gy(mb,"disposed",{configurable:!0,get:function(){return ub(this).state===db}}),Jy(mb,sb,mb.disposeAsync,{name:"disposeAsync"}),Jy(mb,ob,lb,{nonWritable:!0}),Vy({global:!0,constructor:!0,forced:rb&&rb<136},{AsyncDisposableStack:pb});var gb=Ct,vb=yn,yb=Ot,bb=Yt,wb=x,xb=Rv,kb=ut("asyncDispose"),Ab=yb("Promise");wb(xb,kb)||vb(xb,kb,function(){var t=this;return new Ab(function(e,r){var n=bb(t,"return");n?Ab.resolve(gb(n,t)).then(function(){e(void 0)},r):e(void 0)})});var _b,$b=TypeError,Sb=function(t){if("string"==typeof t)return t;throw new $b("Argument is not a string")},Eb=_n,Mb=Ka,Tb=m,Nb=RangeError,Cb=Math.floor,Rb=h,Pb=Nn,Ob=Ka,Ib=function(t){var e=Mb(Tb(this)),r="",n=Eb(t);if(n<0||n===1/0)throw new Nb("Wrong number of repetitions");for(;n>0;(n=Cb(n/2))&&(e+=e))n%2&&(r+=e);return r},Db=m,Ub=Rb(Ib),zb=Rb("".slice),Fb=Math.ceil,jb={start:(_b=!1,function(t,e,r){var n=Ob(Db(t)),i=Pb(e),a=n.length;if(i<=a)return n;var s,o,l=void 0===r?" ":Ob(r);return""===l?n:((o=Ub(l,Fb((s=i-a)/l.length))).length>s&&(o=zb(o,0,s)),_b?n+o:o+n)})},qb=wi,Lb=h,Hb=Sb,Bb=x,Vb=jb.start,Xb=Array,Kb=RegExp.escape,Wb=Lb("".charAt),Yb=Lb("".charCodeAt),Jb=Lb(1.1.toString),Zb=Lb([].join),Gb=/^[0-9a-z]/i,Qb=/^[$()*+./?[\\\]^{|}]/,tw=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),ew=Lb(Gb.exec),rw={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},nw=function(t){var e=Jb(Yb(t,0),16);return e.length<3?"\\x"+Vb(e,2,"0"):"\\u"+Vb(e,4,"0")};qb({target:"RegExp",stat:!0,forced:!Kb||"\\x61b"!==Kb("ab")},{escape:function(t){Hb(t);for(var e=t.length,r=Xb(e),n=0;n<e;n++){var i=Wb(t,n);if(0===n&&ew(Gb,i))r[n]=nw(i);else if(Bb(rw,i))r[n]="\\"+rw[i];else if(ew(Qb,i))r[n]="\\"+i;else if(ew(tw,i))r[n]=nw(i);else{var a=Yb(i,0);55296!=(63488&a)?r[n]=i:a>=56320||n+1>=e||56320!=(64512&Yb(t,n+1))?r[n]=nw(i):(r[n]=i,r[++n]=Wb(t,n))}}return Zb(r,"")}});var iw=h,aw=Set.prototype,sw={Set:Set,add:iw(aw.add),has:iw(aw.has),remove:iw(aw.delete),proto:aw},ow=sw.has,lw=function(t){return ow(t),t},cw=Ct,uw=function(t,e,r){for(var n,i,a=r?t:t.iterator,s=t.next;!(n=cw(s,a)).done;)if(void 0!==(i=e(n.value)))return i},hw=h,dw=uw,fw=sw.Set,pw=sw.proto,mw=hw(pw.forEach),gw=hw(pw.keys),vw=gw(new fw).next,yw=function(t,e,r){return r?dw({iterator:gw(t),next:vw},e):mw(t,e)},bw=yw,ww=sw.Set,xw=sw.add,kw=function(t){var e=new ww;return bw(t,function(t){xw(e,t)}),e},Aw=Zi(sw.proto,"size","get")||function(t){return t.size},_w=Xt,$w=Mt,Sw=Ct,Ew=_n,Mw=Vu,Tw="Invalid size",Nw=RangeError,Cw=TypeError,Rw=Math.max,Pw=function(t,e){this.set=t,this.size=Rw(e,0),this.has=_w(t.has),this.keys=_w(t.keys)};Pw.prototype={getIterator:function(){return Mw($w(Sw(this.keys,this.set)))},includes:function(t){return Sw(this.has,this.set,t)}};var Ow=function(t){$w(t);var e=+t.size;if(e!=e)throw new Cw(Tw);var r=Ew(e);if(r<0)throw new Nw(Tw);return new Pw(t,r)},Iw=lw,Dw=kw,Uw=Aw,zw=Ow,Fw=yw,jw=uw,qw=sw.has,Lw=sw.remove,Hw=Ot,Bw=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},Vw=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},Xw=function(t,e){var r=Hw("Set");try{(new r)[t](Bw(0));try{return(new r)[t](Bw(-1)),!1}catch(n){if(!e)return!0;try{return(new r)[t](Vw(-1/0)),!1}catch(n){return e(new r([1,2])[t](Vw(1/0)))}}}catch(t){return!1}},Kw=wi,Ww=function(t){var e=Iw(this),r=zw(t),n=Dw(e);return Uw(n)<=r.size?Fw(n,function(t){r.includes(t)&&Lw(n,t)}):jw(r.getIterator(),function(t){qw(n,t)&&Lw(n,t)}),n},Yw=a,Jw=!Xw("difference",function(t){return 0===t.size})||Yw(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});Kw({target:"Set",proto:!0,real:!0,forced:Jw},{difference:Ww});var Zw=lw,Gw=Aw,Qw=Ow,tx=yw,ex=uw,rx=sw.Set,nx=sw.add,ix=sw.has,ax=a,sx=function(t){var e=Zw(this),r=Qw(t),n=new rx;return Gw(e)>r.size?ex(r.getIterator(),function(t){ix(e,t)&&nx(n,t)}):tx(e,function(t){r.includes(t)&&nx(n,t)}),n};wi({target:"Set",proto:!0,real:!0,forced:!Xw("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||ax(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:sx});var ox=lw,lx=sw.has,cx=Aw,ux=Ow,hx=yw,dx=uw,fx=uu,px=function(t){var e=ox(this),r=ux(t);if(cx(e)<=r.size)return!1!==hx(e,function(t){if(r.includes(t))return!1},!0);var n=r.getIterator();return!1!==dx(n,function(t){if(lx(e,t))return fx(n.iterator,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Xw("isDisjointFrom",function(t){return!t})},{isDisjointFrom:px});var mx=lw,gx=Aw,vx=yw,yx=Ow,bx=function(t){var e=mx(this),r=yx(t);return!(gx(e)>r.size)&&!1!==vx(e,function(t){if(!r.includes(t))return!1},!0)};wi({target:"Set",proto:!0,real:!0,forced:!Xw("isSubsetOf",function(t){return t})},{isSubsetOf:bx});var wx=lw,xx=sw.has,kx=Aw,Ax=Ow,_x=uw,$x=uu,Sx=function(t){var e=wx(this),r=Ax(t);if(kx(e)<r.size)return!1;var n=r.getIterator();return!1!==_x(n,function(t){if(!xx(e,t))return $x(n.iterator,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Xw("isSupersetOf",function(t){return!t})},{isSupersetOf:Sx});var Ex=lw,Mx=kw,Tx=Ow,Nx=uw,Cx=sw.add,Rx=sw.has,Px=sw.remove,Ox=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},n=e[t](r);return 1===n.size&&4===n.values().next().value}catch(t){return!1}},Ix=function(t){var e=Ex(this),r=Tx(t).getIterator(),n=Mx(e);return Nx(r,function(t){Rx(e,t)?Px(n,t):Cx(n,t)}),n},Dx=Ox;wi({target:"Set",proto:!0,real:!0,forced:!Xw("symmetricDifference")||!Dx("symmetricDifference")},{symmetricDifference:Ix});var Ux=lw,zx=sw.add,Fx=kw,jx=Ow,qx=uw,Lx=function(t){var e=Ux(this),r=jx(t).getIterator(),n=Fx(e);return qx(r,function(t){zx(n,t)}),n},Hx=Ox;wi({target:"Set",proto:!0,real:!0,forced:!Xw("union")||!Hx("union")},{union:Lx});var Bx,Vx,Xx,Kx=go,Wx=ft,Yx=n,Jx=mt,Zx=vt,Gx=x,Qx=Mi,tk=fr,ek=yn,rk=mo,nk=Wi,ik=sa,ak=ut,sk=j,ok=Kr.enforce,lk=Kr.get,ck=Yx.Int8Array,uk=ck&&ck.prototype,hk=Yx.Uint8ClampedArray,dk=hk&&hk.prototype,fk=ck&&nk(ck),pk=uk&&nk(uk),mk=Object.prototype,gk=Yx.TypeError,vk=ak("toStringTag"),yk=sk("TYPED_ARRAY_TAG"),bk="TypedArrayConstructor",wk=Kx&&!!ik&&"Opera"!==Qx(Yx.opera),xk={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},kk={BigInt64Array:8,BigUint64Array:8},Ak=function(t){var e=nk(t);if(Zx(e)){var r=lk(e);return r&&Gx(r,bk)?r[bk]:Ak(e)}};for(Bx in xk)(Xx=(Vx=Yx[Bx])&&Vx.prototype)?ok(Xx)[bk]=Vx:wk=!1;for(Bx in kk)(Xx=(Vx=Yx[Bx])&&Vx.prototype)&&(ok(Xx)[bk]=Vx);if((!wk||!Jx(fk)||fk===Function.prototype)&&(fk=function(){throw new gk("Incorrect invocation")},wk))for(Bx in xk)Yx[Bx]&&ik(Yx[Bx],fk);if((!wk||!pk||pk===mk)&&(pk=fk.prototype,wk))for(Bx in xk)Yx[Bx]&&ik(Yx[Bx].prototype,pk);if(wk&&nk(dk)!==pk&&ik(dk,pk),Wx&&!Gx(pk,vk))for(Bx in rk(pk,vk,{configurable:!0,get:function(){return Zx(this)?this[yk]:void 0}}),xk)Yx[Bx]&&tk(Yx[Bx].prototype,yk,Bx);var _k={aTypedArray:function(t){if(function(t){if(!Zx(t))return!1;var e=Qx(t);return Gx(xk,e)||Gx(kk,e)}(t))return t;throw new gk("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,n){if(Wx){if(r)for(var i in xk){var a=Yx[i];if(a&&Gx(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}pk[t]&&!r||ek(pk,t,r?e:wk&&uk[t]||e,n)}},getTypedArrayConstructor:Ak},$k=Mi,Sk=oe,Ek=TypeError,Mk=function(t){var e=$k(t);return"BigInt64Array"===e||"BigUint64Array"===e},Tk=Rn,Nk=_n,Ck=function(t){var e=Sk(t,"number");if("number"==typeof e)throw new Ek("Can't convert number to bigint");return BigInt(e)},Rk=_k.aTypedArray,Pk=_k.getTypedArrayConstructor,Ok=_k.exportTypedArrayMethod,Ik=RangeError,Dk=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),Uk=Dk&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();Ok("with",{with:function(t,e){var r=Rk(this),n=Tk(r),i=Nk(t),a=i<0?n+i:i,s=Mk(r)?Ck(e):+e;if(a>=n||a<0)throw new Ik("Incorrect index");for(var o=new(Pk(r))(n),l=0;l<n;l++)o[l]=l===a?s:r[l];return o}}.with,!Dk||Uk);var zk=Rn,Fk=vt,jk=String,qk=TypeError,Lk=function(t){if(void 0===t||Fk(t))return t;throw new qk(jk(t)+" is not an object or undefined")},Hk="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Bk=Hk+"+/",Vk=Hk+"-_",Xk=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},Kk={i2c:Bk,c2i:Xk(Bk),i2cUrl:Vk,c2iUrl:Xk(Vk)},Wk=TypeError,Yk=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new Wk("Incorrect `alphabet` option")},Jk=n,Zk=h,Gk=Lk,Qk=Sb,tA=x,eA=Yk,rA=Uo,nA=Kk.c2i,iA=Kk.c2iUrl,aA=Jk.SyntaxError,sA=Jk.TypeError,oA=Zk("".charAt),lA=function(t,e){for(var r=t.length;e<r;e++){var n=oA(t,e);if(" "!==n&&"\t"!==n&&"\n"!==n&&"\f"!==n&&"\r"!==n)break}return e},cA=function(t,e,r){var n=t.length;n<4&&(t+=2===n?"AA":"A");var i=(e[oA(t,0)]<<18)+(e[oA(t,1)]<<12)+(e[oA(t,2)]<<6)+e[oA(t,3)],a=[i>>16&255,i>>8&255,255&i];if(2===n){if(r&&0!==a[1])throw new aA("Extra bits");return[a[0]]}if(3===n){if(r&&0!==a[2])throw new aA("Extra bits");return[a[0],a[1]]}return a},uA=function(t,e,r){for(var n=e.length,i=0;i<n;i++)t[r+i]=e[i];return r+n},hA=function(t,e,r,n){Qk(t),Gk(e);var i="base64"===eA(e)?nA:iA,a=e?e.lastChunkHandling:void 0;if(void 0===a&&(a="loose"),"loose"!==a&&"strict"!==a&&"stop-before-partial"!==a)throw new sA("Incorrect `lastChunkHandling` option");r&&rA(r.buffer);var s=t.length,o=r||[],l=0,c=0,u="",h=0;if(n)for(;;){if((h=lA(t,h))===s){if(u.length>0){if("stop-before-partial"===a)break;if("loose"!==a)throw new aA("Missing padding");if(1===u.length)throw new aA("Malformed padding: exactly one additional character");l=uA(o,cA(u,i,!1),l)}c=s;break}var d=oA(t,h);if(++h,"="===d){if(u.length<2)throw new aA("Padding is too early");if(h=lA(t,h),2===u.length){if(h===s){if("stop-before-partial"===a)break;throw new aA("Malformed padding: only one =")}"="===oA(t,h)&&(++h,h=lA(t,h))}if(h<s)throw new aA("Unexpected character after padding");l=uA(o,cA(u,i,"strict"===a),l),c=s;break}if(!tA(i,d))throw new aA("Unexpected character");var f=n-l;if(1===f&&2===u.length||2===f&&3===u.length)break;if(4===(u+=d).length&&(l=uA(o,cA(u,i,!1),l),u="",c=h,l===n))break}return{bytes:o,read:c,written:l}},dA=wi,fA=function(t,e,r){for(var n=0,i=arguments.length>2?r:zk(e),a=new t(i);i>n;)a[n]=e[n++];return a},pA=hA,mA=n.Uint8Array,gA=!mA||!mA.fromBase64||!function(){try{return void mA.fromBase64("a")}catch(t){}try{mA.fromBase64("",null)}catch(t){return!0}}();mA&&dA({target:"Uint8Array",stat:!0,forced:gA},{fromBase64:function(t){var e=pA(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return fA(mA,e.bytes)}});var vA=n,yA=h,bA=vA.Uint8Array,wA=vA.SyntaxError,xA=Math.min,kA=yA("".match),AA=function(t,e){var r=t.length;if(r%2!=0)throw new wA("String should be an even number of characters");for(var n=e?xA(e.length,r/2):r/2,i=e||new bA(n),a=kA(t,/.{2}/g),s=0;s<n;s++){var o=+("0x"+a[s]+"0");if(o!=o)throw new wA("String should only contain hex characters");i[s]=o>>4}return{bytes:i,read:s<<1}},_A=wi,$A=Sb,SA=AA;n.Uint8Array&&_A({target:"Uint8Array",stat:!0},{fromHex:function(t){return SA($A(t)).bytes}});var EA=Mi,MA=TypeError,TA=function(t){if("Uint8Array"===EA(t))return t;throw new MA("Argument is not an Uint8Array")},NA=wi,CA=hA,RA=TA,PA=n.Uint8Array,OA=!PA||!PA.prototype.setFromBase64||!function(){var t=new PA([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();PA&&NA({target:"Uint8Array",proto:!0,forced:OA},{setFromBase64:function(t){RA(this);var e=CA(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var IA=wi,DA=Sb,UA=TA,zA=Uo,FA=AA;n.Uint8Array&&IA({target:"Uint8Array",proto:!0,forced:function(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(t){return!0}}()},{setFromHex:function(t){UA(this),DA(t),zA(this.buffer);var e=FA(t,this).read;return{read:e,written:e/2}}});var jA=wi,qA=n,LA=Lk,HA=TA,BA=Uo,VA=Yk,XA=Kk.i2c,KA=Kk.i2cUrl,WA=h("".charAt),YA=qA.Uint8Array,JA=!YA||!YA.prototype.toBase64||!function(){try{(new YA).toBase64(null)}catch(t){return!0}}();YA&&jA({target:"Uint8Array",proto:!0,forced:JA},{toBase64:function(){var t=HA(this),e=arguments.length?LA(arguments[0]):void 0,r="base64"===VA(e)?XA:KA,n=!!e&&!!e.omitPadding;BA(this.buffer);for(var i,a="",s=0,o=t.length,l=function(t){return WA(r,i>>6*t&63)};s+2<o;s+=3)i=(t[s]<<16)+(t[s+1]<<8)+t[s+2],a+=l(3)+l(2)+l(1)+l(0);return s+2===o?(i=(t[s]<<16)+(t[s+1]<<8),a+=l(3)+l(2)+l(1)+(n?"":"=")):s+1===o&&(i=t[s]<<16,a+=l(3)+l(2)+(n?"":"==")),a}});var ZA=wi,GA=n,QA=h,t_=TA,e_=Uo,r_=QA(1.1.toString),n_=QA([].join),i_=Array,a_=GA.Uint8Array,s_=!a_||!a_.prototype.toHex||!function(){try{return"ffffffffffffffff"===new a_([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();a_&&ZA({target:"Uint8Array",proto:!0,forced:s_},{toHex:function(){t_(this),e_(this.buffer);for(var t=i_(this.length),e=0,r=this.length;e<r;e++){var n=r_(this[e],16);t[e]=1===n.length?"0"+n:n}return n_(t,"")}});var o_=h,l_=WeakMap.prototype,c_={WeakMap:WeakMap,set:o_(l_.set),get:o_(l_.get),has:o_(l_.has),remove:o_(l_.delete)},u_=c_.get,h_=c_.has,d_=c_.set;wi({target:"WeakMap",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return h_(this,t)?u_(this,t):(d_(this,t,e),e)}});var f_=c_.has,p_=c_,m_=new p_.WeakMap,g_=p_.set,v_=p_.remove,y_=Xt,b_=function(t){return f_(t),t},w_=function(t){return g_(m_,t,1),v_(m_,t),t},x_=c_.get,k_=c_.has,A_=c_.set;wi({target:"WeakMap",proto:!0,real:!0,forced:!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}()},{getOrInsertComputed:function(t,e){if(b_(this),w_(t),y_(e),k_(this,t))return x_(this,t);var r=e(t);return A_(this,t,r),r}});var __=mt,$_=vt,S_=sa,E_=wi,M_=n,T_=Ot,N_=Re,C_=dt.f,R_=x,P_=Nl,O_=function(t,e,r){var n,i;return S_&&__(n=e.constructor)&&n!==r&&$_(i=n.prototype)&&i!==r.prototype&&S_(t,i),t},I_=Ya,D_={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},U_=za,z_=ft,F_="DOMException",j_=T_("Error"),q_=T_(F_),L_=function(){P_(this,H_);var t=arguments.length,e=I_(t<1?void 0:arguments[0]),r=I_(t<2?void 0:arguments[1],"Error"),n=new q_(e,r),i=new j_(e);return i.name=F_,C_(n,"stack",N_(1,U_(i.stack,1))),O_(n,this,L_),n},H_=L_.prototype=q_.prototype,B_="stack"in new j_(F_),V_="stack"in new q_(1,2),X_=q_&&z_&&Object.getOwnPropertyDescriptor(M_,F_),K_=!(!X_||X_.writable&&X_.configurable),W_=B_&&!K_&&!V_;E_({global:!0,constructor:!0,forced:W_},{DOMException:W_?L_:q_});var Y_=T_(F_),J_=Y_.prototype;if(J_.constructor!==Y_)for(var Z_ in C_(J_,"constructor",N_(1,Y_)),D_)if(R_(D_,Z_)){var G_=D_[Z_],Q_=G_.s;R_(Y_,Q_)||C_(Y_,Q_,N_(6,G_.c))}var t$,e$,r$,n$,i$=TypeError,a$=function(t,e){if(t<e)throw new i$("Not enough arguments");return t},s$=H,o$=/ipad|iphone|ipod/i.test(s$)&&/applewebkit/i.test(s$),l$=n,c$=pf,u$=Fl,h$=mt,d$=x,f$=a,p$=ya,m$=um,g$=xt,v$=a$,y$=o$,b$=Ho,w$=l$.setImmediate,x$=l$.clearImmediate,k$=l$.process,A$=l$.Dispatch,_$=l$.Function,$$=l$.MessageChannel,S$=l$.String,E$=0,M$={},T$="onreadystatechange";f$(function(){t$=l$.location});var N$=function(t){if(d$(M$,t)){var e=M$[t];delete M$[t],e()}},C$=function(t){return function(){N$(t)}},R$=function(t){N$(t.data)},P$=function(t){l$.postMessage(S$(t),t$.protocol+"//"+t$.host)};w$&&x$||(w$=function(t){v$(arguments.length,1);var e=h$(t)?t:_$(t),r=m$(arguments,1);return M$[++E$]=function(){c$(e,void 0,r)},e$(E$),E$},x$=function(t){delete M$[t]},b$?e$=function(t){k$.nextTick(C$(t))}:A$&&A$.now?e$=function(t){A$.now(C$(t))}:$$&&!y$?(n$=(r$=new $$).port2,r$.port1.onmessage=R$,e$=u$(n$.postMessage,n$)):l$.addEventListener&&h$(l$.postMessage)&&!l$.importScripts&&t$&&"file:"!==t$.protocol&&!f$(P$)?(e$=P$,l$.addEventListener("message",R$,!1)):e$=T$ in g$("script")?function(t){p$.appendChild(g$("script"))[T$]=function(){p$.removeChild(this),N$(t)}}:function(t){setTimeout(C$(t),0)});var O$={set:w$,clear:x$},I$=O$.clear;wi({global:!0,bind:!0,enumerable:!0,forced:n.clearImmediate!==I$},{clearImmediate:I$});var D$=n,U$=pf,z$=mt,F$=Lo,j$=H,q$=um,L$=a$,H$=D$.Function,B$=/MSIE .\./.test(j$)||"BUN"===F$&&function(){var t=D$.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),V$=wi,X$=n,K$=O$.set,W$=function(t,e){var r=e?2:1;return B$?function(n,i){var a=L$(arguments.length,1)>r,s=z$(n)?n:H$(n),o=a?q$(arguments,r):[],l=a?function(){U$(s,this,o)}:s;return e?t(l,i):t(l)}:t},Y$=X$.setImmediate?W$(K$,!1):K$;V$({global:!0,bind:!0,enumerable:!0,forced:X$.setImmediate!==Y$},{setImmediate:Y$});var J$,Z$=a,G$=n.RegExp,Q$=!Z$(function(){var t=!0;try{G$(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)i(s,a[s]);return Object.getOwnPropertyDescriptor(G$.prototype,"flags").get.call(e)!==n||r!==n}),tS=Mt,eS=Ct,rS=x,nS=It,iS={correct:Q$},aS=function(){var t=tS(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},sS=RegExp.prototype,oS=wi,lS=n,cS=Ot,uS=h,hS=a,dS=j,fS=mt,pS=kv,mS=d,gS=vt,vS=jt,yS=Dh,bS=Mt,wS=Mi,xS=x,kS=Rs,AS=fr,_S=Rn,$S=a$,SS=iS.correct?function(t){return t.flags}:function(t){return iS.correct||!nS(sS,t)||rS(t,"flags")?t.flags:eS(aS,t)},ES=Ym,MS=sw,TS=yw,NS=il,CS=ja,RS=Jo,PS=lS.Object,OS=lS.Array,IS=lS.Date,DS=lS.Error,US=lS.TypeError,zS=lS.PerformanceMark,FS=cS("DOMException"),jS=ES.Map,qS=ES.has,LS=ES.get,HS=ES.set,BS=MS.Set,VS=MS.add,XS=MS.has,KS=cS("Object","keys"),WS=uS([].push),YS=uS((!0).valueOf),JS=uS(1.1.valueOf),ZS=uS("".valueOf),GS=uS(IS.prototype.getTime),QS=dS("structuredClone"),tE="DataCloneError",eE="Transferring",rE=function(t){return!hS(function(){var e=new lS.Set([7]),r=t(e),n=t(PS(7));return r===e||!r.has(7)||!gS(n)||7!==+n})&&t},nE=function(t,e){return!hS(function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)})},iE=lS.structuredClone,aE=!nE(iE,DS)||!nE(iE,FS)||(J$=iE,!!hS(function(){var t=J$(new lS.AggregateError([1],QS,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==QS||3!==t.cause})),sE=!iE&&rE(function(t){return new zS(QS,{detail:t}).detail}),oE=rE(iE)||sE,lE=function(t){throw new FS("Uncloneable type: "+t,tE)},cE=function(t,e){throw new FS((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",tE)},uE=function(t,e){return oE||cE(e),oE(t)},hE=function(t,e,r){if(qS(e,t))return LS(e,t);var n,i,a,s,o,l;if("SharedArrayBuffer"===(r||wS(t)))n=oE?oE(t):t;else{var c=lS.DataView;c||fS(t.slice)||cE("ArrayBuffer");try{if(fS(t.slice)&&!t.resizable)n=t.slice(0);else{i=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(i,a),s=new c(t),o=new c(n);for(l=0;l<i;l++)o.setUint8(l,s.getUint8(l))}}catch(t){throw new FS("ArrayBuffer is detached",tE)}}return HS(e,t,n),n},dE=function(t,e){if(vS(t)&&lE("Symbol"),!gS(t))return t;if(e){if(qS(e,t))return LS(e,t)}else e=new jS;var r,n,i,a,s,o,l,c,u=wS(t);switch(u){case"Array":i=OS(_S(t));break;case"Object":i={};break;case"Map":i=new jS;break;case"Set":i=new BS;break;case"RegExp":i=new RegExp(t.source,SS(t));break;case"Error":switch(n=t.name){case"AggregateError":i=new(cS(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(cS(n));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(cS("WebAssembly",n));break;default:i=new DS}break;case"DOMException":i=new FS(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=hE(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,i=function(t,e,r,n,i){var a=lS[e];return gS(a)||cE(e),new a(hE(t.buffer,i),r,n)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{i=new DOMQuad(dE(t.p1,e),dE(t.p2,e),dE(t.p3,e),dE(t.p4,e))}catch(e){i=uE(t,u)}break;case"File":if(oE)try{i=oE(t),wS(i)!==u&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||cE(u);break;case"FileList":if(a=function(){var t;try{t=new lS.DataTransfer}catch(e){try{t=new lS.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(s=0,o=_S(t);s<o;s++)a.items.add(dE(t[s],e));i=a.files}else i=uE(t,u);break;case"ImageData":try{i=new ImageData(dE(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){i=uE(t,u)}break;default:if(oE)i=oE(t);else switch(u){case"BigInt":i=PS(t.valueOf());break;case"Boolean":i=PS(YS(t));break;case"Number":i=PS(JS(t));break;case"String":i=PS(ZS(t));break;case"Date":i=new IS(GS(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){cE(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=lS[u];try{i=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){cE(u)}break;case"DOMRect":case"DOMRectReadOnly":r=lS[u];try{i=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){cE(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=lS[u];try{i=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){cE(u)}break;case"AudioData":case"VideoFrame":fS(t.clone)||cE(u);try{i=t.clone()}catch(t){lE(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":cE(u);default:lE(u)}}switch(HS(e,t,i),u){case"Array":case"Object":for(l=KS(t),s=0,o=_S(l);s<o;s++)c=l[s],kS(i,c,dE(t[c],e));break;case"Map":t.forEach(function(t,r){HS(i,dE(r,e),dE(t,e))});break;case"Set":t.forEach(function(t){VS(i,dE(t,e))});break;case"Error":AS(i,"message",dE(t.message,e)),xS(t,"cause")&&AS(i,"cause",dE(t.cause,e)),"AggregateError"===n?i.errors=dE(t.errors,e):"SuppressedError"===n&&(i.error=dE(t.error,e),i.suppressed=dE(t.suppressed,e));case"DOMException":CS&&AS(i,"stack",dE(t.stack,e))}return i};oS({global:!0,enumerable:!0,sham:!RS,forced:aE},{structuredClone:function(t){var e,r,n=$S(arguments.length,1)>1&&!mS(arguments[1])?bS(arguments[1]):void 0,i=n?n.transfer:void 0;void 0!==i&&(r=function(t,e){if(!gS(t))throw new US("Transfer option cannot be converted to a sequence");var r=[];yS(t,function(t){WS(r,bS(t))});for(var n,i,a,s,o,l=0,c=_S(r),u=new BS;l<c;){if(n=r[l++],s=void 0,"ArrayBuffer"===(i=wS(n))?XS(u,n):qS(e,n))throw new FS("Duplicate transferable",tE);if("ArrayBuffer"!==i){if(RS)s=iE(n,{transfer:[n]});else switch(i){case"ImageBitmap":a=lS.OffscreenCanvas,pS(a)||cE(i,eE);try{(o=new a(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),s=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":fS(n.clone)&&fS(n.close)||cE(i,eE);try{s=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":cE(i,eE)}if(void 0===s)throw new FS("This object cannot be transferred: "+i,tE);HS(e,n,s)}else VS(u,n)}return u}(i,e=new jS));var a=dE(t,e);return r&&function(t){TS(t,function(t){RS?iE(t,{transfer:[t]}):fS(t.transfer)?t.transfer():NS?NS(t):cE("ArrayBuffer",eE)})}(r),a}});var fE=a,pE=ft,mE=ut("iterator"),gE=!fE(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),n+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!pE||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[mE]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==n||"x"!==new URL("https://x",void 0).host}),vE=wi,yE=a$,bE=Ka,wE=gE,xE=Ot("URL");vE({target:"URL",stat:!0,forced:!wE},{parse:function(t){var e=yE(arguments.length,1),r=bE(t),n=e<2||void 0===arguments[1]?void 0:bE(arguments[1]);try{return new xE(r,n)}catch(t){return null}}});const kE=new Map;var AE={set(t,e,r){kE.has(t)||kE.set(t,new Map);const n=kE.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>kE.has(t)&&kE.get(t).get(e)||null,remove(t,e){if(!kE.has(t))return;const r=kE.get(t);r.delete(e),0===r.size&&kE.delete(t)}};const _E="transitionend",$E=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),SE=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),EE=t=>{t.dispatchEvent(new Event(_E))},ME=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),TE=t=>ME(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector($E(t)):null,NE=t=>{if(!ME(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e},CE=t=>{t.offsetHeight},RE=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,PE=[],OE=()=>"rtl"===document.documentElement.dir,IE=t=>{var e;e=()=>{const e=RE();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}},"loading"===document.readyState?(PE.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of PE)t()}),PE.push(e)):e()},DE=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,UE=(t,e,r=!0)=>{if(!r)return void DE(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),i=Number.parseFloat(r);return n||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let i=!1;const a=({target:r})=>{r===e&&(i=!0,e.removeEventListener(_E,a),DE(t))};e.addEventListener(_E,a),setTimeout(()=>{i||EE(e)},n)},zE=/[^.]*(?=\..*)\.|.*/,FE=/\..*/,jE=/::\d+$/,qE={};let LE=1;const HE={mouseenter:"mouseover",mouseleave:"mouseout"},BE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function VE(t,e){return e&&`${e}::${LE++}`||t.uidEvent||LE++}function XE(t){const e=VE(t);return t.uidEvent=e,qE[e]=qE[e]||{},qE[e]}function KE(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function WE(t,e,r){const n="string"==typeof e,i=n?r:e||r;let a=GE(t);return BE.has(a)||(a=t),[n,i,a]}function YE(t,e,r,n,i){if("string"!=typeof e||!t)return;let[a,s,o]=WE(e,r,n);if(e in HE){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s=t(s)}const l=XE(t),c=l[o]||(l[o]={}),u=KE(c,s,a?r:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=VE(s,e.replace(zE,"")),d=a?function(t,e,r){return function n(i){const a=t.querySelectorAll(e);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(const o of a)if(o===s)return tM(i,{delegateTarget:s}),n.oneOff&&QE.off(t,i.type,e,r),r.apply(s,[i])}}(t,r,s):function(t,e){return function r(n){return tM(n,{delegateTarget:t}),r.oneOff&&QE.off(t,n.type,e),e.apply(t,[n])}}(t,s);d.delegationSelector=a?r:null,d.callable=s,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(o,d,a)}function JE(t,e,r,n,i){const a=KE(e[r],n,i);a&&(t.removeEventListener(r,a,Boolean(i)),delete e[r][a.uidEvent])}function ZE(t,e,r,n){const i=e[r]||{};for(const[a,s]of Object.entries(i))a.includes(n)&&JE(t,e,r,s.callable,s.delegationSelector)}function GE(t){return t=t.replace(FE,""),HE[t]||t}const QE={on(t,e,r,n){YE(t,e,r,n,!1)},one(t,e,r,n){YE(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[i,a,s]=WE(e,r,n),o=s!==e,l=XE(t),c=l[s]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(l))ZE(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const i=r.replace(jE,"");o&&!e.includes(i)||JE(t,l,s,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;JE(t,l,s,a,i?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=RE();let i=null,a=!0,s=!0,o=!1;e!==GE(e)&&n&&(i=n.Event(e,r),n(t).trigger(i),a=!i.isPropagationStopped(),s=!i.isImmediatePropagationStopped(),o=i.isDefaultPrevented());const l=tM(new Event(e,{bubbles:a,cancelable:!0}),r);return o&&l.preventDefault(),s&&t.dispatchEvent(l),l.defaultPrevented&&i&&i.preventDefault(),l}};function tM(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function eM(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function rM(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const nM={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${rM(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${rM(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=eM(t.dataset[n])}return e},getDataAttribute:(t,e)=>eM(t.getAttribute(`data-bs-${rM(e)}`))};class iM{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=ME(e)?nM.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...ME(e)?nM.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],i=ME(e)?"element":SE(e);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)}}}class aM extends iM{constructor(t,e){super(),(t=TE(t))&&(this._element=t,this._config=this._getConfig(e),AE.set(this._element,this.constructor.DATA_KEY,this))}dispose(){AE.remove(this._element,this.constructor.DATA_KEY),QE.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){UE(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return AE.get(TE(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const sM='[data-bs-toggle="button"]';class oM extends aM{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=oM.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}QE.on(document,"click.bs.button.data-api",sM,t=>{t.preventDefault();const e=t.target.closest(sM);oM.getOrCreateInstance(e).toggle()}),IE(oM);const lM=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>$E(t)).join(","):null},cM={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&NE(t))},getSelectorFromElement(t){const e=lM(t);return e&&cM.findOne(e)?e:null},getElementFromSelector(t){const e=lM(t);return e?cM.findOne(e):null},getMultipleElementsFromSelector(t){const e=lM(t);return e?cM.find(e):[]}},uM=".bs.swipe",hM=`touchstart${uM}`,dM=`touchmove${uM}`,fM=`touchend${uM}`,pM=`pointerdown${uM}`,mM=`pointerup${uM}`,gM={endCallback:null,leftCallback:null,rightCallback:null},vM={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class yM extends iM{constructor(t,e){super(),this._element=t,t&&yM.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return gM}static get DefaultType(){return vM}static get NAME(){return"swipe"}dispose(){QE.off(this._element,uM)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),DE(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&DE(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(QE.on(this._element,pM,t=>this._start(t)),QE.on(this._element,mM,t=>this._end(t)),this._element.classList.add("pointer-event")):(QE.on(this._element,hM,t=>this._start(t)),QE.on(this._element,dM,t=>this._move(t)),QE.on(this._element,fM,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const bM=".bs.carousel",wM=".data-api",xM="ArrowLeft",kM="ArrowRight",AM="next",_M="prev",$M="left",SM="right",EM=`slide${bM}`,MM=`slid${bM}`,TM=`keydown${bM}`,NM=`mouseenter${bM}`,CM=`mouseleave${bM}`,RM=`dragstart${bM}`,PM=`load${bM}${wM}`,OM=`click${bM}${wM}`,IM="carousel",DM="active",UM=".active",zM=".carousel-item",FM=UM+zM,jM={[xM]:SM,[kM]:$M},qM={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},LM={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class HM extends aM{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=cM.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===IM&&this.cycle()}static get Default(){return qM}static get DefaultType(){return LM}static get NAME(){return"carousel"}next(){this._slide(AM)}nextWhenVisible(){!document.hidden&&NE(this._element)&&this.next()}prev(){this._slide(_M)}pause(){this._isSliding&&EE(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?QE.one(this._element,MM,()=>this.cycle()):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void QE.one(this._element,MM,()=>this.to(t));const r=this._getItemIndex(this._getActive());if(r===t)return;const n=t>r?AM:_M;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&QE.on(this._element,TM,t=>this._keydown(t)),"hover"===this._config.pause&&(QE.on(this._element,NM,()=>this.pause()),QE.on(this._element,CM,()=>this._maybeEnableCycle())),this._config.touch&&yM.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of cM.find(".carousel-item img",this._element))QE.on(t,RM,t=>t.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder($M)),rightCallback:()=>this._slide(this._directionToOrder(SM)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new yM(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=jM[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=cM.findOne(UM,this._indicatorsElement);e.classList.remove(DM),e.removeAttribute("aria-current");const r=cM.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(DM),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),n=t===AM,i=e||((t,e,r,n)=>{const i=t.length;let a=t.indexOf(e);return-1===a?!r&&n?t[i-1]:t[0]:(a+=r?1:-1,n&&(a=(a+i)%i),t[Math.max(0,Math.min(a,i-1))])})(this._getItems(),r,n,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),s=e=>QE.trigger(this._element,e,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(s(EM).defaultPrevented)return;if(!r||!i)return;const o=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";i.classList.add(c),CE(i),r.classList.add(l),i.classList.add(l);this._queueCallback(()=>{i.classList.remove(l,c),i.classList.add(DM),r.classList.remove(DM,c,l),this._isSliding=!1,s(MM)},r,this._isAnimated()),o&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return cM.findOne(FM,this._element)}_getItems(){return cM.find(zM,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return OE()?t===$M?_M:AM:t===$M?AM:_M}_orderToDirection(t){return OE()?t===_M?$M:SM:t===_M?SM:$M}static jQueryInterface(t){return this.each(function(){const e=HM.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)})}}QE.on(document,OM,"[data-bs-slide], [data-bs-slide-to]",function(t){const e=cM.getElementFromSelector(this);if(!e||!e.classList.contains(IM))return;t.preventDefault();const r=HM.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(r.to(n),void r._maybeEnableCycle()):"next"===nM.getDataAttribute(this,"slide")?(r.next(),void r._maybeEnableCycle()):(r.prev(),void r._maybeEnableCycle())}),QE.on(window,PM,()=>{const t=cM.find('[data-bs-ride="carousel"]');for(const e of t)HM.getOrCreateInstance(e)}),IE(HM);const BM=".bs.collapse",VM=`show${BM}`,XM=`shown${BM}`,KM=`hide${BM}`,WM=`hidden${BM}`,YM=`click${BM}.data-api`,JM="show",ZM="collapse",GM="collapsing",QM=`:scope .${ZM} .${ZM}`,tT='[data-bs-toggle="collapse"]',eT={parent:null,toggle:!0},rT={parent:"(null|element)",toggle:"boolean"};class nT extends aM{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=cM.find(tT);for(const t of r){const e=cM.getSelectorFromElement(t),r=cM.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return eT}static get DefaultType(){return rT}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>nT.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(QE.trigger(this._element,VM).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ZM),this._element.classList.add(GM),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(GM),this._element.classList.add(ZM,JM),this._element.style[e]="",QE.trigger(this._element,XM)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(QE.trigger(this._element,KM).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,CE(this._element),this._element.classList.add(GM),this._element.classList.remove(ZM,JM);for(const t of this._triggerArray){const e=cM.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(GM),this._element.classList.add(ZM),QE.trigger(this._element,WM)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(JM)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=TE(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(tT);for(const e of t){const t=cM.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=cM.find(QM,this._config.parent);return cM.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=nT.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}QE.on(document,YM,tT,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of cM.getMultipleElementsFromSelector(this))nT.getOrCreateInstance(t,{toggle:!1}).toggle()}),IE(nT);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const iT=globalThis,aT=iT.ShadowRoot&&(void 0===iT.ShadyCSS||iT.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sT=Symbol(),oT=new WeakMap;let lT=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==sT)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(aT&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=oT.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&oT.set(e,t))}return t}toString(){return this.cssText}};const cT=t=>new lT("string"==typeof t?t:t+"",void 0,sT),uT=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new lT(r,t,sT)},hT=aT?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return cT(e)})(t):t,{is:dT,defineProperty:fT,getOwnPropertyDescriptor:pT,getOwnPropertyNames:mT,getOwnPropertySymbols:gT,getPrototypeOf:vT}=Object,yT=globalThis,bT=yT.trustedTypes,wT=bT?bT.emptyScript:"",xT=yT.reactiveElementPolyfillSupport,kT=(t,e)=>t,AT={toAttribute(t,e){switch(e){case Boolean:t=t?wT:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_T=(t,e)=>!dT(t,e),$T={attribute:!0,type:String,converter:AT,reflect:!1,useDefault:!1,hasChanged:_T};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),yT.litPropertyMetadata??=new WeakMap;let ST=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$T){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&fT(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=pT(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);i?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$T}static _$Ei(){if(this.hasOwnProperty(kT("elementProperties")))return;const t=vT(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kT("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kT("properties"))){const t=this.properties,e=[...mT(t),...gT(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(hT(t))}else void 0!==t&&e.push(hT(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(aT)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),n=iT.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:AT).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:AT;this._$Em=n;const a=i.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){const a=this.constructor;if(!1===n&&(i=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??_T)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==i||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};ST.elementStyles=[],ST.shadowRootOptions={mode:"open"},ST[kT("elementProperties")]=new Map,ST[kT("finalized")]=new Map,xT?.({ReactiveElement:ST}),(yT.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ET=globalThis,MT=t=>t,TT=ET.trustedTypes,NT=TT?TT.createPolicy("lit-html",{createHTML:t=>t}):void 0,CT="$lit$",RT=`lit$${Math.random().toFixed(9).slice(2)}$`,PT="?"+RT,OT=`<${PT}>`,IT=document,DT=()=>IT.createComment(""),UT=t=>null===t||"object"!=typeof t&&"function"!=typeof t,zT=Array.isArray,FT="[ \t\n\f\r]",jT=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qT=/-->/g,LT=/>/g,HT=RegExp(`>|${FT}(?:([^\\s"'>=/]+)(${FT}*=${FT}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),BT=/'/g,VT=/"/g,XT=/^(?:script|style|textarea|title)$/i,KT=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),WT=KT(1),YT=KT(2),JT=Symbol.for("lit-noChange"),ZT=Symbol.for("lit-nothing"),GT=new WeakMap,QT=IT.createTreeWalker(IT,129);function tN(t,e){if(!zT(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==NT?NT.createHTML(e):e}const eN=(t,e)=>{const r=t.length-1,n=[];let i,a=2===e?"<svg>":3===e?"<math>":"",s=jT;for(let e=0;e<r;e++){const r=t[e];let o,l,c=-1,u=0;for(;u<r.length&&(s.lastIndex=u,l=s.exec(r),null!==l);)u=s.lastIndex,s===jT?"!--"===l[1]?s=qT:void 0!==l[1]?s=LT:void 0!==l[2]?(XT.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=HT):void 0!==l[3]&&(s=HT):s===HT?">"===l[0]?(s=i??jT,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?HT:'"'===l[3]?VT:BT):s===VT||s===BT?s=HT:s===qT||s===LT?s=jT:(s=HT,i=void 0);const h=s===HT&&t[e+1].startsWith("/>")?" ":"";a+=s===jT?r+OT:c>=0?(n.push(o),r.slice(0,c)+CT+r.slice(c)+RT+h):r+RT+(-2===c?e:h)}return[tN(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class rN{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,a=0;const s=t.length-1,o=this.parts,[l,c]=eN(t,e);if(this.el=rN.createElement(l,r),QT.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=QT.nextNode())&&o.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(CT)){const e=c[a++],r=n.getAttribute(t).split(RT),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?oN:"?"===s[1]?lN:"@"===s[1]?cN:sN}),n.removeAttribute(t)}else t.startsWith(RT)&&(o.push({type:6,index:i}),n.removeAttribute(t));if(XT.test(n.tagName)){const t=n.textContent.split(RT),e=t.length-1;if(e>0){n.textContent=TT?TT.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],DT()),QT.nextNode(),o.push({type:2,index:++i});n.append(t[e],DT())}}}else if(8===n.nodeType)if(n.data===PT)o.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(RT,t+1));)o.push({type:7,index:i}),t+=RT.length-1}i++}}static createElement(t,e){const r=IT.createElement("template");return r.innerHTML=t,r}}function nN(t,e,r=t,n){if(e===JT)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const a=UT(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=nN(t,i._$AS(t,e.values),i,n)),e}class iN{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??IT).importNode(e,!0);QT.currentNode=n;let i=QT.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new aN(i,i.nextSibling,this,t):1===o.type?e=new o.ctor(i,o.name,o.strings,this,t):6===o.type&&(e=new uN(i,this,t)),this._$AV.push(e),o=r[++s]}a!==o?.index&&(i=QT.nextNode(),a++)}return QT.currentNode=IT,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class aN{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=ZT,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nN(this,t,e),UT(t)?t===ZT||null==t||""===t?(this._$AH!==ZT&&this._$AR(),this._$AH=ZT):t!==this._$AH&&t!==JT&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>zT(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ZT&&UT(this._$AH)?this._$AA.nextSibling.data=t:this.T(IT.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=rN.createElement(tN(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new iN(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=GT.get(t.strings);return void 0===e&&GT.set(t.strings,e=new rN(t)),e}k(t){zT(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new aN(this.O(DT()),this.O(DT()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=MT(t).nextSibling;MT(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class sN{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=ZT,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ZT}_$AI(t,e=this,r,n){const i=this.strings;let a=!1;if(void 0===i)t=nN(this,t,e,0),a=!UT(t)||t!==this._$AH&&t!==JT,a&&(this._$AH=t);else{const n=t;let s,o;for(t=i[0],s=0;s<i.length-1;s++)o=nN(this,n[r+s],e,s),o===JT&&(o=this._$AH[s]),a||=!UT(o)||o!==this._$AH[s],o===ZT?t=ZT:t!==ZT&&(t+=(o??"")+i[s+1]),this._$AH[s]=o}a&&!n&&this.j(t)}j(t){t===ZT?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class oN extends sN{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ZT?void 0:t}}class lN extends sN{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ZT)}}class cN extends sN{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=nN(this,t,e,0)??ZT)===JT)return;const r=this._$AH,n=t===ZT&&r!==ZT||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ZT&&(r===ZT||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class uN{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){nN(this,t)}}const hN=ET.litHtmlPolyfillSupport;hN?.(rN,aN),(ET.litHtmlVersions??=[]).push("3.3.2");const dN=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new aN(e.insertBefore(DT(),t),t,void 0,r??{})}return i._$AI(t),i},fN=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pN extends ST{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dN(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return JT}}pN._$litElement$=!0,pN.finalized=!0,fN.litElementHydrateSupport?.({LitElement:pN});const mN=fN.litElementPolyfillSupport;function gN(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function vN(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function yN(t){let e,r,n;function i(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<0?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=gN,r=(e,r)=>gN(t(e),r),n=(e,r)=>t(e)-r):(e=t===gN||t===vN?t:bN,r=t,n=t),{left:i,center:function(t,e,r=0,a=t.length){const s=i(t,e,r,a-1);return s>r&&n(t[s-1],e)>-n(t[s],e)?s-1:s},right:function(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<=0?i=e+1:a=e}while(i<a)}return i}}}function bN(){return 0}mN?.({LitElement:pN}),(fN.litElementVersions??=[]).push("4.2.2");const wN=yN(gN).right;function xN(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let i=-1;for(let a of t)null!=(a=e(a,++i,t))&&(void 0===r?a>=a&&(r=n=a):(r>a&&(r=a),n<a&&(n=a)))}return[r,n]}yN(function(t){return null===t?NaN:+t}).center;class kN{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let n=0;n<this._n&&n<32;n++){const i=e[n],a=t+i,s=Math.abs(t)<Math.abs(i)?t-(a-i):i-(a-t);s&&(e[r++]=s),t=a}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e,r,n,i=this._n,a=0;if(i>0){for(a=t[--i];i>0&&(e=a,r=t[--i],a=e+r,n=r-(a-e),!n););i>0&&(n<0&&t[i-1]<0||n>0&&t[i-1]>0)&&(r=2*n,e=a+r,r==e-a&&(a=e))}return a}}function AN(t){return t}var _N=Array.prototype.slice;function $N(t){return()=>t}const SN=Math.sqrt(50),EN=Math.sqrt(10),MN=Math.sqrt(2);function TN(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),s=a>=SN?10:a>=EN?5:a>=MN?2:1;let o,l,c;return i<0?(c=Math.pow(10,-i)/s,o=Math.round(t*c),l=Math.round(e*c),o/c<t&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*s,o=Math.round(t/c),l=Math.round(e/c),o*c<t&&++o,l*c>e&&--l),l<o&&.5<=r&&r<2?TN(t,e,2*r):[o,l,c]}function NN(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,a,s]=n?TN(e,t,r):TN(t,e,r);if(!(a>=i))return[];const o=a-i+1,l=new Array(o);if(n)if(s<0)for(let t=0;t<o;++t)l[t]=(a-t)/-s;else for(let t=0;t<o;++t)l[t]=(a-t)*s;else if(s<0)for(let t=0;t<o;++t)l[t]=(i+t)/-s;else for(let t=0;t<o;++t)l[t]=(i+t)*s;return l}function CN(t,e,r){return TN(t=+t,e=+e,r=+r)[2]}function RN(t,e,r){let n;for(;;){const i=CN(t,e,r);if(i===n||0===i||!isFinite(i))return[t,e];i>0?(t=Math.floor(t/i)*i,e=Math.ceil(e/i)*i):i<0&&(t=Math.ceil(t*i)/i,e=Math.floor(e*i)/i),n=i}}function PN(t){return Math.max(1,Math.ceil(Math.log(function(t){let e=0;for(let r of t)null!=r&&(r=+r)>=r&&++e;return e}(t))/Math.LN2)+1)}function ON(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),a=new Array(i);++n<i;)a[n]=t+n*r;return a}function IN(t){return t}var DN=1e-6;function UN(t){return"translate("+t+",0)"}function zN(t){return"translate(0,"+t+")"}function FN(t){return e=>+t(e)}function jN(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function qN(){return!this.__axis}function LN(t,e){var r=[],n=null,i=null,a=6,s=6,o=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",h=1===t||3===t?UN:zN;function d(d){var f=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,p=null==i?e.tickFormat?e.tickFormat.apply(e,r):IN:i,m=Math.max(a,0)+o,g=e.range(),v=+g[0]+l,y=+g[g.length-1]+l,b=(e.bandwidth?jN:FN)(e.copy(),l),w=d.selection?d.selection():d,x=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(f,e).order(),A=k.exit(),_=k.enter().append("g").attr("class","tick"),$=k.select("line"),S=k.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(_),$=$.merge(_.append("line").attr("stroke","currentColor").attr(u+"2",c*a)),S=S.merge(_.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),d!==w&&(x=x.transition(d),k=k.transition(d),$=$.transition(d),S=S.transition(d),A=A.transition(d).attr("opacity",DN).attr("transform",function(t){return isFinite(t=b(t))?h(t+l):this.getAttribute("transform")}),_.attr("opacity",DN).attr("transform",function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:b(t))+l)})),A.remove(),x.attr("d",4===t||2===t?s?"M"+c*s+","+v+"H"+l+"V"+y+"H"+c*s:"M"+l+","+v+"V"+y:s?"M"+v+","+c*s+"V"+l+"H"+y+"V"+c*s:"M"+v+","+l+"H"+y),k.attr("opacity",1).attr("transform",function(t){return h(b(t)+l)}),$.attr(u+"2",c*a),S.attr(u,c*m).text(p),w.filter(qN).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each(function(){this.__axis=b})}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return r=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),d):r.slice()},d.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),d):n&&n.slice()},d.tickFormat=function(t){return arguments.length?(i=t,d):i},d.tickSize=function(t){return arguments.length?(a=s=+t,d):a},d.tickSizeInner=function(t){return arguments.length?(a=+t,d):a},d.tickSizeOuter=function(t){return arguments.length?(s=+t,d):s},d.tickPadding=function(t){return arguments.length?(o=+t,d):o},d.offset=function(t){return arguments.length?(l=+t,d):l},d}function HN(t){return LN(2,t)}function BN(t){return LN(3,t)}function VN(t){return LN(4,t)}var XN={value:()=>{}};function KN(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new WN(n)}function WN(t){this._=t}function YN(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function JN(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=XN,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}WN.prototype=KN.prototype={constructor:WN,on:function(t,e){var r,n,i=this._,a=(n=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),s=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=a[s]).type)i[r]=JN(i[r],t.name,e);else if(null==e)for(r in i)i[r]=JN(i[r],t.name,null);return this}for(;++s<o;)if((r=(t=a[s]).type)&&(r=YN(i[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new WN(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var ZN="http://www.w3.org/1999/xhtml",GN={svg:"http://www.w3.org/2000/svg",xhtml:ZN,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function QN(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),GN.hasOwnProperty(e)?{space:GN[e],local:t}:t}function tC(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===ZN&&e.documentElement.namespaceURI===ZN?e.createElement(t):e.createElementNS(r,t)}}function eC(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function rC(t){var e=QN(t);return(e.local?eC:tC)(e)}function nC(){}function iC(t){return null==t?nC:function(){return this.querySelector(t)}}function aC(){return[]}function sC(t){return null==t?aC:function(){return this.querySelectorAll(t)}}function oC(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function lC(t){return function(){return this.matches(t)}}function cC(t){return function(e){return e.matches(t)}}var uC=Array.prototype.find;function hC(){return this.firstElementChild}var dC=Array.prototype.filter;function fC(){return Array.from(this.children)}function pC(t){return new Array(t.length)}function mC(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function gC(t,e,r,n,i,a){for(var s,o=0,l=e.length,c=a.length;o<c;++o)(s=e[o])?(s.__data__=a[o],n[o]=s):r[o]=new mC(t,a[o]);for(;o<l;++o)(s=e[o])&&(i[o]=s)}function vC(t,e,r,n,i,a,s){var o,l,c,u=new Map,h=e.length,d=a.length,f=new Array(h);for(o=0;o<h;++o)(l=e[o])&&(f[o]=c=s.call(l,l.__data__,o,e)+"",u.has(c)?i[o]=l:u.set(c,l));for(o=0;o<d;++o)c=s.call(t,a[o],o,a)+"",(l=u.get(c))?(n[o]=l,l.__data__=a[o],u.delete(c)):r[o]=new mC(t,a[o]);for(o=0;o<h;++o)(l=e[o])&&u.get(f[o])===l&&(i[o]=l)}function yC(t){return t.__data__}function bC(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function wC(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function xC(t){return function(){this.removeAttribute(t)}}function kC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function AC(t,e){return function(){this.setAttribute(t,e)}}function _C(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function $C(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function SC(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function EC(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function MC(t){return function(){this.style.removeProperty(t)}}function TC(t,e,r){return function(){this.style.setProperty(t,e,r)}}function NC(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function CC(t,e){return t.style.getPropertyValue(e)||EC(t).getComputedStyle(t,null).getPropertyValue(e)}function RC(t){return function(){delete this[t]}}function PC(t,e){return function(){this[t]=e}}function OC(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function IC(t){return t.trim().split(/^|\s+/)}function DC(t){return t.classList||new UC(t)}function UC(t){this._node=t,this._names=IC(t.getAttribute("class")||"")}function zC(t,e){for(var r=DC(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function FC(t,e){for(var r=DC(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function jC(t){return function(){zC(this,t)}}function qC(t){return function(){FC(this,t)}}function LC(t,e){return function(){(e.apply(this,arguments)?zC:FC)(this,t)}}function HC(){this.textContent=""}function BC(t){return function(){this.textContent=t}}function VC(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function XC(){this.innerHTML=""}function KC(t){return function(){this.innerHTML=t}}function WC(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function YC(){this.nextSibling&&this.parentNode.appendChild(this)}function JC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ZC(){return null}function GC(){var t=this.parentNode;t&&t.removeChild(this)}function QC(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function tR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function eR(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,a=e.length;n<a;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function rR(t,e,r){return function(){var n,i=this.__on,a=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var s=0,o=i.length;s<o;++s)if((n=i[s]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),void(n.value=e);this.addEventListener(t.type,a,r),n={type:t.type,name:t.name,value:e,listener:a,options:r},i?i.push(n):this.__on=[n]}}function nR(t,e,r){var n=EC(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function iR(t,e){return function(){return nR(this,t,e)}}function aR(t,e){return function(){return nR(this,t,e.apply(this,arguments))}}mC.prototype={constructor:mC,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},UC.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var sR=[null];function oR(t,e){this._groups=t,this._parents=e}function lR(){return new oR([[document.documentElement]],sR)}function cR(t){return"string"==typeof t?new oR([[document.querySelector(t)]],[document.documentElement]):new oR([[t]],sR)}oR.prototype=lR.prototype={constructor:oR,select:function(t){"function"!=typeof t&&(t=iC(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s,o=e[i],l=o.length,c=n[i]=new Array(l),u=0;u<l;++u)(a=o[u])&&(s=t.call(a,a.__data__,u,o))&&("__data__"in a&&(s.__data__=a.__data__),c[u]=s);return new oR(n,this._parents)},selectAll:function(t){t="function"==typeof t?oC(t):sC(t);for(var e=this._groups,r=e.length,n=[],i=[],a=0;a<r;++a)for(var s,o=e[a],l=o.length,c=0;c<l;++c)(s=o[c])&&(n.push(t.call(s,s.__data__,c,o)),i.push(s));return new oR(n,i)},selectChild:function(t){return this.select(null==t?hC:function(t){return function(){return uC.call(this.children,t)}}("function"==typeof t?t:cC(t)))},selectChildren:function(t){return this.selectAll(null==t?fC:function(t){return function(){return dC.call(this.children,t)}}("function"==typeof t?t:cC(t)))},filter:function(t){"function"!=typeof t&&(t=lC(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new oR(n,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,yC);var r=e?vC:gC,n=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var a=i.length,s=new Array(a),o=new Array(a),l=new Array(a),c=0;c<a;++c){var u=n[c],h=i[c],d=h.length,f=bC(t.call(u,u&&u.__data__,c,n)),p=f.length,m=o[c]=new Array(p),g=s[c]=new Array(p);r(u,h,m,g,l[c]=new Array(d),f,e);for(var v,y,b=0,w=0;b<p;++b)if(v=m[b]){for(b>=w&&(w=b+1);!(y=g[w])&&++w<p;);v._next=y||null}}return(s=new oR(s,n))._enter=o,s._exit=l,s},enter:function(){return new oR(this._enter||this._groups.map(pC),this._parents)},exit:function(){return new oR(this._exit||this._groups.map(pC),this._parents)},join:function(t,e,r){var n=this.enter(),i=this,a=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?a.remove():r(a),n&&i?n.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,a=n.length,s=Math.min(i,a),o=new Array(i),l=0;l<s;++l)for(var c,u=r[l],h=n[l],d=u.length,f=o[l]=new Array(d),p=0;p<d;++p)(c=u[p]||h[p])&&(f[p]=c);for(;l<i;++l)o[l]=r[l];return new oR(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],a=i.length-1,s=i[a];--a>=0;)(n=i[a])&&(s&&4^n.compareDocumentPosition(s)&&s.parentNode.insertBefore(n,s),s=n);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=wC);for(var r=this._groups,n=r.length,i=new Array(n),a=0;a<n;++a){for(var s,o=r[a],l=o.length,c=i[a]=new Array(l),u=0;u<l;++u)(s=o[u])&&(c[u]=s);c.sort(e)}return new oR(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,a=n.length;i<a;++i){var s=n[i];if(s)return s}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,a=e[r],s=0,o=a.length;s<o;++s)(i=a[s])&&t.call(i,i.__data__,s,a);return this},attr:function(t,e){var r=QN(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?kC:xC:"function"==typeof e?r.local?SC:$C:r.local?_C:AC)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?MC:"function"==typeof e?NC:TC)(t,e,null==r?"":r)):CC(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?RC:"function"==typeof e?OC:PC)(t,e)):this.node()[t]},classed:function(t,e){var r=IC(t+"");if(arguments.length<2){for(var n=DC(this.node()),i=-1,a=r.length;++i<a;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?LC:e?jC:qC)(r,e))},text:function(t){return arguments.length?this.each(null==t?HC:("function"==typeof t?VC:BC)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?XC:("function"==typeof t?WC:KC)(t)):this.node().innerHTML},raise:function(){return this.each(YC)},lower:function(){return this.each(JC)},append:function(t){var e="function"==typeof t?t:rC(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:rC(t),n=null==e?ZC:"function"==typeof e?e:iC(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(GC)},clone:function(t){return this.select(t?tR:QC)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var n,i,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),s=a.length;if(!(arguments.length<2)){for(o=e?rR:eR,n=0;n<s;++n)this.each(o(a[n],e,r));return this}var o=this.node().__on;if(o)for(var l,c=0,u=o.length;c<u;++c)for(n=0,l=o[c];n<s;++n)if((i=a[n]).type===l.type&&i.name===l.name)return l.value},dispatch:function(t,e){return this.each(("function"==typeof e?aR:iR)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],a=0,s=i.length;a<s;++a)(n=i[a])&&(yield n)}};var uR=0;function hR(){return new dR}function dR(){this._="@"+(++uR).toString(36)}function fR(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}dR.prototype=hR.prototype={constructor:dR,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const pR={passive:!1},mR={capture:!0,passive:!1};function gR(t){t.stopImmediatePropagation()}function vR(t){t.preventDefault(),t.stopImmediatePropagation()}var yR=t=>()=>t;function bR(t,{sourceEvent:e,subject:r,target:n,identifier:i,active:a,x:s,y:o,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function wR(t){return!t.ctrlKey&&!t.button}function xR(){return this.parentNode}function kR(t,e){return null==e?{x:t.x,y:t.y}:e}function AR(){return navigator.maxTouchPoints||"ontouchstart"in this}function _R(){var t,e,r,n,i=wR,a=xR,s=kR,o=AR,l={},c=KN("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",f).filter(o).on("touchstart.drag",g).on("touchmove.drag",v,pR).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(s,o){if(!n&&i.call(this,s,o)){var l=b(this,a.call(this,s,o),s,o,"mouse");l&&(cR(s.view).on("mousemove.drag",p,mR).on("mouseup.drag",m,mR),function(t){var e=t.document.documentElement,r=cR(t).on("dragstart.drag",vR,mR);"onselectstart"in e?r.on("selectstart.drag",vR,mR):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(s.view),gR(s),r=!1,t=s.clientX,e=s.clientY,l("start",s))}}function p(n){if(vR(n),!r){var i=n.clientX-t,a=n.clientY-e;r=i*i+a*a>h}l.mouse("drag",n)}function m(t){cR(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,n=cR(t).on("dragstart.drag",null);e&&(n.on("click.drag",vR,mR),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),vR(t),l.mouse("end",t)}function g(t,e){if(i.call(this,t,e)){var r,n,s=t.changedTouches,o=a.call(this,t,e),l=s.length;for(r=0;r<l;++r)(n=b(this,o,t,e,s[r].identifier,s[r]))&&(gR(t),n("start",t,s[r]))}}function v(t){var e,r,n=t.changedTouches,i=n.length;for(e=0;e<i;++e)(r=l[n[e].identifier])&&(vR(t),r("drag",t,n[e]))}function y(t){var e,r,i=t.changedTouches,a=i.length;for(n&&clearTimeout(n),n=setTimeout(function(){n=null},500),e=0;e<a;++e)(r=l[i[e].identifier])&&(gR(t),r("end",t,i[e]))}function b(t,e,r,n,i,a){var o,h,f,p=c.copy(),m=fR(a||r,e);if(null!=(f=s.call(t,new bR("beforestart",{sourceEvent:r,target:d,identifier:i,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),n)))return o=f.x-m[0]||0,h=f.y-m[1]||0,function r(a,s,c){var g,v=m;switch(a){case"start":l[i]=r,g=u++;break;case"end":delete l[i],--u;case"drag":m=fR(c||s,e),g=u}p.call(a,t,new bR(a,{sourceEvent:s,subject:f,target:d,identifier:i,active:g,x:m[0]+o,y:m[1]+h,dx:m[0]-v[0],dy:m[1]-v[1],dispatch:p}),n)}}return d.filter=function(t){return arguments.length?(i="function"==typeof t?t:yR(!!t),d):i},d.container=function(t){return arguments.length?(a="function"==typeof t?t:yR(t),d):a},d.subject=function(t){return arguments.length?(s="function"==typeof t?t:yR(t),d):s},d.touchable=function(t){return arguments.length?(o="function"==typeof t?t:yR(!!t),d):o},d.on=function(){var t=c.on.apply(c,arguments);return t===c?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}function $R(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function SR(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function ER(){}bR.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var MR=.7,TR=1/MR,NR="\\s*([+-]?\\d+)\\s*",CR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",RR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",PR=/^#([0-9a-f]{3,8})$/,OR=new RegExp(`^rgb\\(${NR},${NR},${NR}\\)$`),IR=new RegExp(`^rgb\\(${RR},${RR},${RR}\\)$`),DR=new RegExp(`^rgba\\(${NR},${NR},${NR},${CR}\\)$`),UR=new RegExp(`^rgba\\(${RR},${RR},${RR},${CR}\\)$`),zR=new RegExp(`^hsl\\(${CR},${RR},${RR}\\)$`),FR=new RegExp(`^hsla\\(${CR},${RR},${RR},${CR}\\)$`),jR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function qR(){return this.rgb().formatHex()}function LR(){return this.rgb().formatRgb()}function HR(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=PR.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?BR(e):3===r?new KR(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?VR(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?VR(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=OR.exec(t))?new KR(e[1],e[2],e[3],1):(e=IR.exec(t))?new KR(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=DR.exec(t))?VR(e[1],e[2],e[3],e[4]):(e=UR.exec(t))?VR(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=zR.exec(t))?QR(e[1],e[2]/100,e[3]/100,1):(e=FR.exec(t))?QR(e[1],e[2]/100,e[3]/100,e[4]):jR.hasOwnProperty(t)?BR(jR[t]):"transparent"===t?new KR(NaN,NaN,NaN,0):null}function BR(t){return new KR(t>>16&255,t>>8&255,255&t,1)}function VR(t,e,r,n){return n<=0&&(t=e=r=NaN),new KR(t,e,r,n)}function XR(t,e,r,n){return 1===arguments.length?function(t){return t instanceof ER||(t=HR(t)),t?new KR((t=t.rgb()).r,t.g,t.b,t.opacity):new KR}(t):new KR(t,e,r,null==n?1:n)}function KR(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function WR(){return`#${GR(this.r)}${GR(this.g)}${GR(this.b)}`}function YR(){const t=JR(this.opacity);return`${1===t?"rgb(":"rgba("}${ZR(this.r)}, ${ZR(this.g)}, ${ZR(this.b)}${1===t?")":`, ${t})`}`}function JR(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ZR(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function GR(t){return((t=ZR(t))<16?"0":"")+t.toString(16)}function QR(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new eP(t,e,r,n)}function tP(t){if(t instanceof eP)return new eP(t.h,t.s,t.l,t.opacity);if(t instanceof ER||(t=HR(t)),!t)return new eP;if(t instanceof eP)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=NaN,o=a-i,l=(a+i)/2;return o?(s=e===a?(r-n)/o+6*(r<n):r===a?(n-e)/o+2:(e-r)/o+4,o/=l<.5?a+i:2-a-i,s*=60):o=l>0&&l<1?0:s,new eP(s,o,l,t.opacity)}function eP(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function rP(t){return(t=(t||0)%360)<0?t+360:t}function nP(t){return Math.max(0,Math.min(1,t||0))}function iP(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}$R(ER,HR,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:qR,formatHex:qR,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return tP(this).formatHsl()},formatRgb:LR,toString:LR}),$R(KR,XR,SR(ER,{brighter(t){return t=null==t?TR:Math.pow(TR,t),new KR(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?MR:Math.pow(MR,t),new KR(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new KR(ZR(this.r),ZR(this.g),ZR(this.b),JR(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:WR,formatHex:WR,formatHex8:function(){return`#${GR(this.r)}${GR(this.g)}${GR(this.b)}${GR(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:YR,toString:YR})),$R(eP,function(t,e,r,n){return 1===arguments.length?tP(t):new eP(t,e,r,null==n?1:n)},SR(ER,{brighter(t){return t=null==t?TR:Math.pow(TR,t),new eP(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?MR:Math.pow(MR,t),new eP(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new KR(iP(t>=240?t-240:t+120,i,n),iP(t,i,n),iP(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new eP(rP(this.h),nP(this.s),nP(this.l),JR(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=JR(this.opacity);return`${1===t?"hsl(":"hsla("}${rP(this.h)}, ${100*nP(this.s)}%, ${100*nP(this.l)}%${1===t?")":`, ${t})`}`}}));var aP=t=>()=>t;function sP(t){return 1===(t=+t)?oP:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}(e,r,t):aP(isNaN(e)?r:e)}}function oP(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):aP(isNaN(t)?e:t)}var lP=function t(e){var r=sP(e);function n(t,e){var n=r((t=XR(t)).r,(e=XR(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),s=oP(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=s(e),t+""}}return n.gamma=t,n}(1);function cP(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(r=0;r<n;++r)i[r]=t[r]*(1-a)+e[r]*a;return i}}function uP(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,a=new Array(i),s=new Array(n);for(r=0;r<i;++r)a[r]=vP(t[r],e[r]);for(;r<n;++r)s[r]=e[r];return function(t){for(r=0;r<i;++r)s[r]=a[r](t);return s}}function hP(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function dP(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function fP(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=vP(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var pP=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,mP=new RegExp(pP.source,"g");function gP(t,e){var r,n,i,a=pP.lastIndex=mP.lastIndex=0,s=-1,o=[],l=[];for(t+="",e+="";(r=pP.exec(t))&&(n=mP.exec(e));)(i=n.index)>a&&(i=e.slice(a,i),o[s]?o[s]+=i:o[++s]=i),(r=r[0])===(n=n[0])?o[s]?o[s]+=n:o[++s]=n:(o[++s]=null,l.push({i:s,x:dP(r,n)})),a=mP.lastIndex;return a<e.length&&(i=e.slice(a),o[s]?o[s]+=i:o[++s]=i),o.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)o[(r=l[n]).i]=r.x(t);return o.join("")})}function vP(t,e){var r,n=typeof e;return null==e||"boolean"===n?aP(e):("number"===n?dP:"string"===n?(r=HR(e))?(e=r,lP):gP:e instanceof HR?lP:e instanceof Date?hP:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?cP:Array.isArray(e)?uP:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?fP:dP)(t,e)}function yP(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var bP,wP=180/Math.PI,xP={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function kP(t,e,r,n,i,a){var s,o,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(o=Math.sqrt(r*r+n*n))&&(r/=o,n/=o,l/=o),t*n<e*r&&(t=-t,e=-e,l=-l,s=-s),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*wP,skewX:Math.atan(l)*wP,scaleX:s,scaleY:o}}function AP(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(a,s){var o=[],l=[];return a=t(a),s=t(s),function(t,n,i,a,s,o){if(t!==i||n!==a){var l=s.push("translate(",null,e,null,r);o.push({i:l-4,x:dP(t,i)},{i:l-2,x:dP(n,a)})}else(i||a)&&s.push("translate("+i+e+a+r)}(a.translateX,a.translateY,s.translateX,s.translateY,o,l),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(i(r)+"rotate(",null,n)-2,x:dP(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(a.rotate,s.rotate,o,l),function(t,e,r,a){t!==e?a.push({i:r.push(i(r)+"skewX(",null,n)-2,x:dP(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(a.skewX,s.skewX,o,l),function(t,e,r,n,a,s){if(t!==r||e!==n){var o=a.push(i(a)+"scale(",null,",",null,")");s.push({i:o-4,x:dP(t,r)},{i:o-2,x:dP(e,n)})}else 1===r&&1===n||a.push(i(a)+"scale("+r+","+n+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,o,l),a=s=null,function(t){for(var e,r=-1,n=l.length;++r<n;)o[(e=l[r]).i]=e.x(t);return o.join("")}}}var _P,$P,SP=AP(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?xP:kP(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),EP=AP(function(t){return null==t?xP:(bP||(bP=document.createElementNS("http://www.w3.org/2000/svg","g")),bP.setAttribute("transform",t),(t=bP.transform.baseVal.consolidate())?kP((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):xP)},", ",")",")"),MP=0,TP=0,NP=0,CP=0,RP=0,PP=0,OP="object"==typeof performance&&performance.now?performance:Date,IP="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function DP(){return RP||(IP(UP),RP=OP.now()+PP)}function UP(){RP=0}function zP(){this._call=this._time=this._next=null}function FP(t,e,r){var n=new zP;return n.restart(t,e,r),n}function jP(){RP=(CP=OP.now())+PP,MP=TP=0;try{!function(){DP(),++MP;for(var t,e=_P;e;)(t=RP-e._time)>=0&&e._call.call(void 0,t),e=e._next;--MP}()}finally{MP=0,function(){var t,e,r=_P,n=1/0;for(;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:_P=e);$P=t,LP(n)}(),RP=0}}function qP(){var t=OP.now(),e=t-CP;e>1e3&&(PP-=e,CP=t)}function LP(t){MP||(TP&&(TP=clearTimeout(TP)),t-RP>24?(t<1/0&&(TP=setTimeout(jP,t-OP.now()-PP)),NP&&(NP=clearInterval(NP))):(NP||(CP=OP.now(),NP=setInterval(qP,1e3)),MP=1,IP(jP)))}function HP(t,e,r){var n=new zP;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}function BP(t,e,r){var n=new zP,i=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?DP():+r,n._restart(function a(s){s+=i,n._restart(a,i+=e,r),t(s)},e,r)},n.restart(t,e,r),n}zP.prototype=FP.prototype={constructor:zP,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?DP():+r)+(null==e?0:+e),this._next||$P===this||($P?$P._next=this:_P=this,$P=this),this._call=t,this._time=r,LP()},stop:function(){this._call&&(this._call=null,this._time=1/0,LP())}};var VP=KN("start","end","cancel","interrupt"),XP=[];function KP(t,e,r,n,i,a){var s=t.__transition;if(s){if(r in s)return}else t.__transition={};!function(t,e,r){var n,i=t.__transition;function a(t){r.state=1,r.timer.restart(s,r.delay,r.time),r.delay<=t&&s(t-r.delay)}function s(a){var c,u,h,d;if(1!==r.state)return l();for(c in i)if((d=i[c]).name===r.name){if(3===d.state)return HP(s);4===d.state?(d.state=6,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete i[c]):+c<e&&(d.state=6,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete i[c])}if(HP(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(a))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,n=new Array(h=r.tween.length),c=0,u=-1;c<h;++c)(d=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=d);n.length=u+1}}function o(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(l),r.state=5,1),a=-1,s=n.length;++a<s;)n[a].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),l())}function l(){for(var n in r.state=6,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=FP(a,0,r.time)}(t,r,{name:e,index:n,group:i,on:VP,tween:XP,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function WP(t,e){var r=JP(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function YP(t,e){var r=JP(t,e);if(r.state>3)throw new Error("too late; already running");return r}function JP(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function ZP(t,e){var r,n;return function(){var i=YP(this,t),a=i.tween;if(a!==r)for(var s=0,o=(n=r=a).length;s<o;++s)if(n[s].name===e){(n=n.slice()).splice(s,1);break}i.tween=n}}function GP(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var a=YP(this,t),s=a.tween;if(s!==n){i=(n=s).slice();for(var o={name:e,value:r},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=o;break}l===c&&i.push(o)}a.tween=i}}function QP(t,e,r){var n=t._id;return t.each(function(){var t=YP(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return JP(t,n).value[e]}}function tO(t,e){var r;return("number"==typeof e?dP:e instanceof HR?lP:(r=HR(e))?(e=r,lP):gP)(t,e)}function eO(t){return function(){this.removeAttribute(t)}}function rO(t){return function(){this.removeAttributeNS(t.space,t.local)}}function nO(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttribute(t);return s===a?null:s===n?i:i=e(n=s,r)}}function iO(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===a?null:s===n?i:i=e(n=s,r)}}function aO(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttribute(t))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttribute(t)}}function sO(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttributeNS(t.space,t.local))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttributeNS(t.space,t.local)}}function oO(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,i)),r}return i._value=e,i}function lO(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,i)),r}return i._value=e,i}function cO(t,e){return function(){WP(this,t).delay=+e.apply(this,arguments)}}function uO(t,e){return e=+e,function(){WP(this,t).delay=e}}function hO(t,e){return function(){YP(this,t).duration=+e.apply(this,arguments)}}function dO(t,e){return e=+e,function(){YP(this,t).duration=e}}var fO=lR.prototype.constructor;function pO(t){return function(){this.style.removeProperty(t)}}var mO=0;function gO(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function vO(){return++mO}var yO=lR.prototype;gO.prototype={constructor:gO,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=iC(t));for(var n=this._groups,i=n.length,a=new Array(i),s=0;s<i;++s)for(var o,l,c=n[s],u=c.length,h=a[s]=new Array(u),d=0;d<u;++d)(o=c[d])&&(l=t.call(o,o.__data__,d,c))&&("__data__"in o&&(l.__data__=o.__data__),h[d]=l,KP(h[d],e,r,d,h,JP(o,r)));return new gO(a,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=sC(t));for(var n=this._groups,i=n.length,a=[],s=[],o=0;o<i;++o)for(var l,c=n[o],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,f=t.call(l,l.__data__,h,c),p=JP(l,r),m=0,g=f.length;m<g;++m)(d=f[m])&&KP(d,e,r,m,f,p);a.push(f),s.push(l)}return new gO(a,s,e,r)},selectChild:yO.selectChild,selectChildren:yO.selectChildren,filter:function(t){"function"!=typeof t&&(t=lC(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new gO(n,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,a=Math.min(n,i),s=new Array(n),o=0;o<a;++o)for(var l,c=e[o],u=r[o],h=c.length,d=s[o]=new Array(h),f=0;f<h;++f)(l=c[f]||u[f])&&(d[f]=l);for(;o<n;++o)s[o]=e[o];return new gO(s,this._parents,this._name,this._id)},selection:function(){return new fO(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=vO(),n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)if(s=o[c]){var u=JP(s,e);KP(s,t,r,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new gO(n,this._parents,t,r)},call:yO.call,nodes:yO.nodes,node:yO.node,size:yO.size,empty:yO.empty,each:yO.each,on:function(t,e){var r=this._id;return arguments.length<2?JP(this.node(),r).on.on(t):this.each(function(t,e,r){var n,i,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?WP:YP;return function(){var s=a(this,t),o=s.on;o!==n&&(i=(n=o).copy()).on(e,r),s.on=i}}(r,t,e))},attr:function(t,e){var r=QN(t),n="transform"===r?EP:tO;return this.attrTween(t,"function"==typeof e?(r.local?sO:aO)(r,n,QP(this,"attr."+t,e)):null==e?(r.local?rO:eO)(r):(r.local?iO:nO)(r,n,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=QN(t);return this.tween(r,(n.local?oO:lO)(n,e))},style:function(t,e,r){var n="transform"==(t+="")?SP:tO;return null==e?this.styleTween(t,function(t,e){var r,n,i;return function(){var a=CC(this,t),s=(this.style.removeProperty(t),CC(this,t));return a===s?null:a===r&&s===n?i:i=e(r=a,n=s)}}(t,n)).on("end.style."+t,pO(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var n,i,a;return function(){var s=CC(this,t),o=r(this),l=o+"";return null==o&&(this.style.removeProperty(t),l=o=CC(this,t)),s===l?null:s===n&&l===i?a:(i=l,a=e(n=s,o))}}(t,n,QP(this,"style."+t,e))).each(function(t,e){var r,n,i,a,s="style."+e,o="end."+s;return function(){var l=YP(this,t),c=l.on,u=null==l.value[s]?a||(a=pO(e)):void 0;c===r&&i===u||(n=(r=c).copy()).on(o,i=u),l.on=n}}(this._id,t)):this.styleTween(t,function(t,e,r){var n,i,a=r+"";return function(){var s=CC(this,t);return s===a?null:s===n?i:i=e(n=s,r)}}(t,n,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,function(t,e,r){var n,i;function a(){var a=e.apply(this,arguments);return a!==i&&(n=(i=a)&&function(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}(t,a,r)),n}return a._value=e,a}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(QP(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&function(t){return function(e){this.textContent=t.call(this,e)}}(n)),e}return n._value=t,n}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=JP(this.node(),r).tween,a=0,s=i.length;a<s;++a)if((n=i[a]).name===t)return n.value;return null}return this.each((null==e?ZP:GP)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?cO:uO)(e,t)):JP(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?hO:dO)(e,t)):JP(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){YP(this,t).ease=e}}(e,t)):JP(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;YP(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,n=r._id,i=r.size();return new Promise(function(a,s){var o={value:s},l={value:function(){0===--i&&a()}};r.each(function(){var r=YP(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),r.on=e}),0===i&&a()})},[Symbol.iterator]:yO[Symbol.iterator]};const bO=t=>+t;function wO(t){return t*t*t}function xO(t){return--t*t*t+1}var kO={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function AO(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}lR.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,n,i,a=t.__transition,s=!0;if(a){for(i in e=null==e?null:e+"",a)(r=a[i]).name===e?(n=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[i]):s=!1;s&&delete t.__transition}}(this,t)})},lR.prototype.transition=function(t){var e,r;t instanceof gO?(e=t._id,t=t._name):(e=vO(),(r=kO).time=DP(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)(s=o[c])&&KP(s,t,e,c,o,r||AO(s,e));return new gO(n,this._parents,t,e)};const _O=Math.PI,$O=2*_O,SO=1e-6,EO=$O-SO;function MO(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class TO{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?MO:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return MO;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,a){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+a}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let a=this._x1,s=this._y1,o=r-t,l=n-e,c=a-t,u=s-e,h=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>SO)if(Math.abs(u*o-l*c)>SO&&i){let d=r-a,f=n-s,p=o*o+l*l,m=d*d+f*f,g=Math.sqrt(p),v=Math.sqrt(h),y=i*Math.tan((_O-Math.acos((p+h-m)/(2*g*v)))/2),b=y/v,w=y/g;Math.abs(b-1)>SO&&this._append`L${t+b*c},${e+b*u}`,this._append`A${i},${i},0,0,${+(u*d>c*f)},${this._x1=t+w*o},${this._y1=e+w*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(n),o=r*Math.sin(n),l=t+s,c=e+o,u=1^a,h=a?n-i:i-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>SO||Math.abs(this._y1-c)>SO)&&this._append`L${l},${c}`,r&&(h<0&&(h=h%$O+$O),h>EO?this._append`A${r},${r},0,1,${u},${t-s},${e-o}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:h>SO&&this._append`A${r},${r},0,${+(h>=_O)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}var NO=Array.prototype.slice;function CO(t,e){return t-e}var RO=t=>()=>t;function PO(t,e){for(var r,n=-1,i=e.length;++n<i;)if(r=OO(t,e[n]))return r;return 0}function OO(t,e){for(var r=e[0],n=e[1],i=-1,a=0,s=t.length,o=s-1;a<s;o=a++){var l=t[a],c=l[0],u=l[1],h=t[o],d=h[0],f=h[1];if(IO(l,h,e))return 0;u>n!=f>n&&r<(d-c)*(n-u)/(f-u)+c&&(i=-i)}return i}function IO(t,e,r){var n;return function(t,e,r){return(e[0]-t[0])*(r[1]-t[1])===(r[0]-t[0])*(e[1]-t[1])}(t,e,r)&&function(t,e,r){return t<=e&&e<=r||r<=e&&e<=t}(t[n=+(t[0]===e[0])],r[n],e[n])}function DO(){}var UO=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function zO(){var t=1,e=1,r=PN,n=o;function i(t){var e=r(t);if(Array.isArray(e))e=e.slice().sort(CO);else{const r=xN(t,FO);for(e=NN(...RN(r[0],r[1],e),e);e[e.length-1]>=r[1];)e.pop();for(;e[1]<r[0];)e.shift()}return e.map(e=>a(t,e))}function a(r,i){const a=null==i?NaN:+i;if(isNaN(a))throw new Error(`invalid value: ${i}`);var o=[],l=[];return function(r,n,i){var a,o,l,c,u,h,d=new Array,f=new Array;a=o=-1,c=jO(r[0],n),UO[c<<1].forEach(p);for(;++a<t-1;)l=c,c=jO(r[a+1],n),UO[l|c<<1].forEach(p);UO[c|0].forEach(p);for(;++o<e-1;){for(a=-1,c=jO(r[o*t+t],n),u=jO(r[o*t],n),UO[c<<1|u<<2].forEach(p);++a<t-1;)l=c,c=jO(r[o*t+t+a+1],n),h=u,u=jO(r[o*t+a+1],n),UO[l|c<<1|u<<2|h<<3].forEach(p);UO[c|u<<3].forEach(p)}a=-1,u=r[o*t]>=n,UO[u<<2].forEach(p);for(;++a<t-1;)h=u,u=jO(r[o*t+a+1],n),UO[u<<2|h<<3].forEach(p);function p(t){var e,r,n=[t[0][0]+a,t[0][1]+o],l=[t[1][0]+a,t[1][1]+o],c=s(n),u=s(l);(e=f[c])?(r=d[u])?(delete f[e.end],delete d[r.start],e===r?(e.ring.push(l),i(e.ring)):d[e.start]=f[r.end]={start:e.start,end:r.end,ring:e.ring.concat(r.ring)}):(delete f[e.end],e.ring.push(l),f[e.end=u]=e):(e=d[u])?(r=f[c])?(delete d[e.start],delete f[r.end],e===r?(e.ring.push(l),i(e.ring)):d[r.start]=f[e.end]={start:r.start,end:e.end,ring:r.ring.concat(e.ring)}):(delete d[e.start],e.ring.unshift(n),d[e.start=c]=e):d[c]=f[u]={start:c,end:u,ring:[n,l]}}UO[u<<3].forEach(p)}(r,a,function(t){n(t,r,a),function(t){for(var e=0,r=t.length,n=t[r-1][1]*t[0][0]-t[r-1][0]*t[0][1];++e<r;)n+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return n}(t)>0?o.push([t]):l.push(t)}),l.forEach(function(t){for(var e,r=0,n=o.length;r<n;++r)if(-1!==PO((e=o[r])[0],t))return void e.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function s(e){return 2*e[0]+e[1]*(t+1)*4}function o(r,n,i){r.forEach(function(r){var a=r[0],s=r[1],o=0|a,l=0|s,c=qO(n[l*t+o]);a>0&&a<t&&o===a&&(r[0]=LO(a,qO(n[l*t+o-1]),c,i)),s>0&&s<e&&l===s&&(r[1]=LO(s,qO(n[(l-1)*t+o]),c,i))})}return i.contour=a,i.size=function(r){if(!arguments.length)return[t,e];var n=Math.floor(r[0]),a=Math.floor(r[1]);if(!(n>=0&&a>=0))throw new Error("invalid size");return t=n,e=a,i},i.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?RO(NO.call(t)):RO(t),i):r},i.smooth=function(t){return arguments.length?(n=t?o:DO,i):n===o},i}function FO(t){return isFinite(t)?t:NaN}function jO(t,e){return null!=t&&+t>=e}function qO(t){return null==t||isNaN(t=+t)?-1/0:t}function LO(t,e,r,n){const i=n-e,a=r-e,s=isFinite(i)||isFinite(a)?i/a:Math.sign(i)/Math.sign(a);return isNaN(s)?t:t+s-.5}function HO(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function BO(t){return(t=HO(Math.abs(t)))?t[1]:NaN}var VO,XO=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function KO(t){if(!(e=XO.exec(t)))throw new Error("invalid format: "+t);var e;return new WO({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function WO(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function YO(t,e){var r=HO(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}KO.prototype=WO.prototype,WO.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var JO={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>YO(100*t,e),r:YO,s:function(t,e){var r=HO(t,e);if(!r)return VO=void 0,t.toPrecision(e);var n=r[0],i=r[1],a=i-(VO=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,s=n.length;return a===s?n:a>s?n+new Array(a-s+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+HO(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function ZO(t){return t}var GO,QO,tI,eI=Array.prototype.map,rI=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function nI(t){var e,r,n=void 0===t.grouping||void 0===t.thousands?ZO:(e=eI.call(t.grouping,Number),r=t.thousands+"",function(t,n){for(var i=t.length,a=[],s=0,o=e[0],l=0;i>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),a.push(t.substring(i-=o,i+o)),!((l+=o+1)>n));)o=e[s=(s+1)%e.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?ZO:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(eI.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t,e){var r=(t=KO(t)).fill,h=t.align,d=t.sign,f=t.symbol,p=t.zero,m=t.width,g=t.comma,v=t.precision,y=t.trim,b=t.type;"n"===b?(g=!0,b="g"):JO[b]||(void 0===v&&(v=12),y=!0,b="g"),(p||"0"===r&&"="===h)&&(p=!0,r="0",h="=");var w=(e&&void 0!==e.prefix?e.prefix:"")+("$"===f?i:"#"===f&&/[boxX]/.test(b)?"0"+b.toLowerCase():""),x=("$"===f?a:/[%p]/.test(b)?l:"")+(e&&void 0!==e.suffix?e.suffix:""),k=JO[b],A=/[defgprs%]/.test(b);function _(t){var e,i,a,l=w,f=x;if("c"===b)f=k(t)+f,t="";else{var _=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:k(Math.abs(t),v),y&&(t=function(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),_&&0===+t&&"+"!==d&&(_=!1),l=(_?"("===d?d:c:"-"===d||"("===d?"":d)+l,f=("s"!==b||isNaN(t)||void 0===VO?"":rI[8+VO/3])+f+(_&&"("===d?")":""),A)for(e=-1,i=t.length;++e<i;)if(48>(a=t.charCodeAt(e))||a>57){f=(46===a?s+t.slice(e+1):t.slice(e))+f,t=t.slice(0,e);break}}g&&!p&&(t=n(t,1/0));var $=l.length+t.length+f.length,S=$<m?new Array(m-$+1).join(r):"";switch(g&&p&&(t=n(S+t,S.length?m-f.length:1/0),S=""),h){case"<":t=l+t+f+S;break;case"=":t=l+S+t+f;break;case"^":t=S.slice(0,$=S.length>>1)+l+t+f+S.slice($);break;default:t=S+l+t+f}return o(t)}return v=void 0===v?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v)),_.toString=function(){return t+""},_}return{format:h,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor(BO(e)/3))),n=Math.pow(10,-r),i=h(((t=KO(t)).type="f",t),{suffix:rI[8+r/3]});return function(t){return i(n*t)}}}}GO=nI({thousands:",",grouping:[3],currency:["$",""]}),QO=GO.format,tI=GO.formatPrefix;var iI=1e-6,aI=Math.PI,sI=2*aI,oI=180/aI,lI=aI/180,cI=Math.abs,uI=Math.cos,hI=Math.sin,dI=Math.sqrt;function fI(){}function pI(t,e){t&&gI.hasOwnProperty(t.type)&&gI[t.type](t,e)}var mI={Feature:function(t,e){pI(t.geometry,e)},FeatureCollection:function(t,e){for(var r=t.features,n=-1,i=r.length;++n<i;)pI(r[n].geometry,e)}},gI={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)t=r[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){vI(t.coordinates,e,0)},MultiLineString:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)vI(r[n],e,0)},Polygon:function(t,e){yI(t.coordinates,e)},MultiPolygon:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)yI(r[n],e)},GeometryCollection:function(t,e){for(var r=t.geometries,n=-1,i=r.length;++n<i;)pI(r[n],e)}};function vI(t,e,r){var n,i=-1,a=t.length-r;for(e.lineStart();++i<a;)n=t[i],e.point(n[0],n[1],n[2]);e.lineEnd()}function yI(t,e){var r=-1,n=t.length;for(e.polygonStart();++r<n;)vI(t[r],e,1);e.polygonEnd()}function bI(t,e){t&&mI.hasOwnProperty(t.type)?mI[t.type](t,e):pI(t,e)}function wI(t,e,r,n){this.x=t,this.z=e,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function xI(t,e,r,n,i){var a,s,o=[],l=[];if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,r,n=t[0],s=t[e];if(function(t,e){return cI(t[0]-e[0])<iI&&cI(t[1]-e[1])<iI}(n,s)){if(!n[2]&&!s[2]){for(i.lineStart(),a=0;a<e;++a)i.point((n=t[a])[0],n[1]);return void i.lineEnd()}s[0]+=2e-6}o.push(r=new wI(n,t,null,!0)),l.push(r.o=new wI(n,null,r,!1)),o.push(r=new wI(s,t,null,!1)),l.push(r.o=new wI(s,null,r,!0))}}),o.length){for(l.sort(e),kI(o),kI(l),a=0,s=l.length;a<s;++a)l[a].e=r=!r;for(var c,u,h=o[0];;){for(var d=h,f=!0;d.v;)if((d=d.n)===h)return;c=d.z,i.lineStart();do{if(d.v=d.o.v=!0,d.e){if(f)for(a=0,s=c.length;a<s;++a)i.point((u=c[a])[0],u[1]);else n(d.x,d.n.x,1,i);d=d.n}else{if(f)for(c=d.p.z,a=c.length-1;a>=0;--a)i.point((u=c[a])[0],u[1]);else n(d.x,d.p.x,-1,i);d=d.p}c=(d=d.o).z,f=!f}while(!d.v);i.lineEnd()}}}function kI(t){if(e=t.length){for(var e,r,n=0,i=t[0];++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}var AI=1e9,_I=-AI;function $I(t,e,r,n){function i(i,a){return t<=i&&i<=r&&e<=a&&a<=n}function a(i,a,o,c){var u=0,h=0;if(null==i||(u=s(i,o))!==(h=s(a,o))||l(i,a)<0^o>0)do{c.point(0===u||3===u?t:r,u>1?n:e)}while((u=(u+o+4)%4)!==h);else c.point(a[0],a[1])}function s(n,i){return cI(n[0]-t)<iI?i>0?0:3:cI(n[0]-r)<iI?i>0?2:1:cI(n[1]-e)<iI?i>0?1:0:i>0?3:2}function o(t,e){return l(t.x,e.x)}function l(t,e){var r=s(t,1),n=s(e,1);return r!==n?r-n:0===r?e[1]-t[1]:1===r?t[0]-e[0]:2===r?t[1]-e[1]:e[0]-t[0]}return function(s){var l,c,u,h,d,f,p,m,g,v,y,b=s,w=function(){var t,e=[];return{point:function(e,r,n){t.push([e,r,n])},lineStart:function(){e.push(t=[])},lineEnd:fI,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],t=null,r}}}(),x={point:k,lineStart:function(){x.point=A,c&&c.push(u=[]);v=!0,g=!1,p=m=NaN},lineEnd:function(){l&&(A(h,d),f&&g&&w.rejoin(),l.push(w.result()));x.point=k,g&&b.lineEnd()},polygonStart:function(){b=w,l=[],c=[],y=!0},polygonEnd:function(){var e=function(){for(var e=0,r=0,i=c.length;r<i;++r)for(var a,s,o=c[r],l=1,u=o.length,h=o[0],d=h[0],f=h[1];l<u;++l)a=d,s=f,d=(h=o[l])[0],f=h[1],s<=n?f>n&&(d-a)*(n-s)>(f-s)*(t-a)&&++e:f<=n&&(d-a)*(n-s)<(f-s)*(t-a)&&--e;return e}(),r=y&&e,i=(h=l,l=Array.from(function*(t){for(const e of t)yield*e}(h))).length;var h;(r||i)&&(s.polygonStart(),r&&(s.lineStart(),a(null,null,1,s),s.lineEnd()),i&&xI(l,o,e,a,s),s.polygonEnd());b=s,l=c=u=null}};function k(t,e){i(t,e)&&b.point(t,e)}function A(a,s){var o=i(a,s);if(c&&u.push([a,s]),v)h=a,d=s,f=o,v=!1,o&&(b.lineStart(),b.point(a,s));else if(o&&g)b.point(a,s);else{var l=[p=Math.max(_I,Math.min(AI,p)),m=Math.max(_I,Math.min(AI,m))],w=[a=Math.max(_I,Math.min(AI,a)),s=Math.max(_I,Math.min(AI,s))];!function(t,e,r,n,i,a){var s,o=t[0],l=t[1],c=0,u=1,h=e[0]-o,d=e[1]-l;if(s=r-o,h||!(s>0)){if(s/=h,h<0){if(s<c)return;s<u&&(u=s)}else if(h>0){if(s>u)return;s>c&&(c=s)}if(s=i-o,h||!(s<0)){if(s/=h,h<0){if(s>u)return;s>c&&(c=s)}else if(h>0){if(s<c)return;s<u&&(u=s)}if(s=n-l,d||!(s>0)){if(s/=d,d<0){if(s<c)return;s<u&&(u=s)}else if(d>0){if(s>u)return;s>c&&(c=s)}if(s=a-l,d||!(s<0)){if(s/=d,d<0){if(s>u)return;s>c&&(c=s)}else if(d>0){if(s<c)return;s<u&&(u=s)}return c>0&&(t[0]=o+c*h,t[1]=l+c*d),u<1&&(e[0]=o+u*h,e[1]=l+u*d),!0}}}}}(l,w,t,e,r,n)?o&&(b.lineStart(),b.point(a,s),y=!1):(g||(b.lineStart(),b.point(l[0],l[1])),b.point(w[0],w[1]),o||b.lineEnd(),y=!1)}p=a,m=s,g=o}return x}}var SI,EI,MI,TI,NI=t=>t,CI=new kN,RI=new kN,PI={point:fI,lineStart:fI,lineEnd:fI,polygonStart:function(){PI.lineStart=OI,PI.lineEnd=UI},polygonEnd:function(){PI.lineStart=PI.lineEnd=PI.point=fI,CI.add(cI(RI)),RI=new kN},result:function(){var t=CI/2;return CI=new kN,t}};function OI(){PI.point=II}function II(t,e){PI.point=DI,SI=MI=t,EI=TI=e}function DI(t,e){RI.add(TI*t-MI*e),MI=t,TI=e}function UI(){DI(SI,EI)}var zI=1/0,FI=zI,jI=-zI,qI=jI,LI={point:function(t,e){t<zI&&(zI=t);t>jI&&(jI=t);e<FI&&(FI=e);e>qI&&(qI=e)},lineStart:fI,lineEnd:fI,polygonStart:fI,polygonEnd:fI,result:function(){var t=[[zI,FI],[jI,qI]];return jI=qI=-(FI=zI=1/0),t}};var HI,BI,VI,XI,KI=0,WI=0,YI=0,JI=0,ZI=0,GI=0,QI=0,tD=0,eD=0,rD={point:nD,lineStart:iD,lineEnd:oD,polygonStart:function(){rD.lineStart=lD,rD.lineEnd=cD},polygonEnd:function(){rD.point=nD,rD.lineStart=iD,rD.lineEnd=oD},result:function(){var t=eD?[QI/eD,tD/eD]:GI?[JI/GI,ZI/GI]:YI?[KI/YI,WI/YI]:[NaN,NaN];return KI=WI=YI=JI=ZI=GI=QI=tD=eD=0,t}};function nD(t,e){KI+=t,WI+=e,++YI}function iD(){rD.point=aD}function aD(t,e){rD.point=sD,nD(VI=t,XI=e)}function sD(t,e){var r=t-VI,n=e-XI,i=dI(r*r+n*n);JI+=i*(VI+t)/2,ZI+=i*(XI+e)/2,GI+=i,nD(VI=t,XI=e)}function oD(){rD.point=nD}function lD(){rD.point=uD}function cD(){hD(HI,BI)}function uD(t,e){rD.point=hD,nD(HI=VI=t,BI=XI=e)}function hD(t,e){var r=t-VI,n=e-XI,i=dI(r*r+n*n);JI+=i*(VI+t)/2,ZI+=i*(XI+e)/2,GI+=i,QI+=(i=XI*t-VI*e)*(VI+t),tD+=i*(XI+e),eD+=3*i,nD(VI=t,XI=e)}function dD(t){this._context=t}dD.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,sI)}},result:fI};var fD,pD,mD,gD,vD,yD=new kN,bD={point:fI,lineStart:function(){bD.point=wD},lineEnd:function(){fD&&xD(pD,mD),bD.point=fI},polygonStart:function(){fD=!0},polygonEnd:function(){fD=null},result:function(){var t=+yD;return yD=new kN,t}};function wD(t,e){bD.point=xD,pD=gD=t,mD=vD=e}function xD(t,e){gD-=t,vD-=e,yD.add(dI(gD*gD+vD*vD)),gD=t,vD=e}let kD,AD,_D,$D;class SD{constructor(t){this._append=null==t?ED:function(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return ED;if(e!==kD){const t=10**e;kD=e,AD=function(e){let r=1;this._+=e[0];for(const n=e.length;r<n;++r)this._+=Math.round(arguments[r]*t)/t+e[r]}}return AD}(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:this._append`M${t},${e}`,this._point=1;break;case 1:this._append`L${t},${e}`;break;default:if(this._append`M${t},${e}`,this._radius!==_D||this._append!==AD){const t=this._radius,e=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,_D=t,AD=this._append,$D=this._,this._=e}this._+=$D}}result(){const t=this._;return this._="",t.length?t:null}}function ED(t){let e=1;this._+=t[0];for(const r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function MD(t,e){let r,n,i=3,a=4.5;function s(t){return t&&("function"==typeof a&&n.pointRadius(+a.apply(this,arguments)),bI(t,r(n))),n.result()}return s.area=function(t){return bI(t,r(PI)),PI.result()},s.measure=function(t){return bI(t,r(bD)),bD.result()},s.bounds=function(t){return bI(t,r(LI)),LI.result()},s.centroid=function(t){return bI(t,r(rD)),rD.result()},s.projection=function(e){return arguments.length?(r=null==e?(t=null,NI):(t=e).stream,s):t},s.context=function(t){return arguments.length?(n=null==t?(e=null,new SD(i)):new dD(e=t),"function"!=typeof a&&n.pointRadius(a),s):e},s.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(n.pointRadius(+t),+t),s):a},s.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);i=e}return null===e&&(n=new SD(i)),s},s.projection(t).digits(i).context(e)}function TD(){}function ND(t,e,r){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=n&&t.clipExtent(null),bI(r,t.stream(LI)),e(LI.result()),null!=n&&t.clipExtent(n),t}function CD(t,e,r){return ND(t,function(r){var n=e[1][0]-e[0][0],i=e[1][1]-e[0][1],a=Math.min(n/(r[1][0]-r[0][0]),i/(r[1][1]-r[0][1])),s=+e[0][0]+(n-a*(r[1][0]+r[0][0]))/2,o=+e[0][1]+(i-a*(r[1][1]+r[0][1]))/2;t.scale(150*a).translate([s,o])},r)}function RD(){var t,e,r,n,i,a,s,o,l=1,c=0,u=0,h=1,d=1,f=0,p=null,m=1,g=1,v=(o={point:function(t,e){var r=w([t,e]);this.stream.point(r[0],r[1])}},function(t){var e=new TD;for(var r in o)e[r]=o[r];return e.stream=t,e}),y=NI;function b(){return m=l*h,g=l*d,a=s=null,w}function w(r){var n=r[0]*m,i=r[1]*g;if(f){var a=i*t-n*e;n=n*t+i*e,i=a}return[n+c,i+u]}return w.invert=function(r){var n=r[0]-c,i=r[1]-u;if(f){var a=i*t+n*e;n=n*t-i*e,i=a}return[n/m,i/g]},w.stream=function(t){return a&&s===t?a:a=v(y(s=t))},w.postclip=function(t){return arguments.length?(y=t,p=r=n=i=null,b()):y},w.clipExtent=function(t){return arguments.length?(y=null==t?(p=r=n=i=null,NI):$I(p=+t[0][0],r=+t[0][1],n=+t[1][0],i=+t[1][1]),b()):null==p?null:[[p,r],[n,i]]},w.scale=function(t){return arguments.length?(l=+t,b()):l},w.translate=function(t){return arguments.length?(c=+t[0],u=+t[1],b()):[c,u]},w.angle=function(r){return arguments.length?(e=hI(f=r%360*lI),t=uI(f),b()):f*oI},w.reflectX=function(t){return arguments.length?(h=t?-1:1,b()):h<0},w.reflectY=function(t){return arguments.length?(d=t?-1:1,b()):d<0},w.fitExtent=function(t,e){return CD(w,t,e)},w.fitSize=function(t,e){return function(t,e,r){return CD(t,[[0,0],e],r)}(w,t,e)},w.fitWidth=function(t,e){return function(t,e,r){return ND(t,function(r){var n=+e,i=n/(r[1][0]-r[0][0]),a=(n-i*(r[1][0]+r[0][0]))/2,s=-i*r[0][1];t.scale(150*i).translate([a,s])},r)}(w,t,e)},w.fitHeight=function(t,e){return function(t,e,r){return ND(t,function(r){var n=+e,i=n/(r[1][1]-r[0][1]),a=-i*r[0][0],s=(n-i*(r[1][1]+r[0][1]))/2;t.scale(150*i).translate([a,s])},r)}(w,t,e)},w}TD.prototype={constructor:TD,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var PD=Math.random,OD=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(PD),ID=function t(e){function r(t,r){var n,i;return t=null==t?0:+t,r=null==r?1:+r,function(){var a;if(null!=n)a=n,n=null;else do{n=2*e()-1,a=2*e()-1,i=n*n+a*a}while(!i||i>1);return t+r*a*Math.sqrt(-2*Math.log(i)/i)}}return r.source=t,r}(PD);const DD=1/4294967296;function UD(t=Math.random()){let e=0|(0<=t&&t<1?t/DD:Math.abs(t));return()=>(e=1664525*e+1013904223|0,DD*(e>>>0))}function zD(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function FD(t){return+t}var jD=[0,1];function qD(t){return t}function LD(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function HD(t,e,r){var n=t[0],i=t[1],a=e[0],s=e[1];return i<n?(n=LD(i,n),a=r(s,a)):(n=LD(n,i),a=r(a,s)),function(t){return a(n(t))}}function BD(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),a=new Array(n),s=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<n;)i[s]=LD(t[s],t[s+1]),a[s]=r(e[s],e[s+1]);return function(e){var r=wN(t,e,1,n)-1;return a[r](i[r](e))}}function VD(){var t,e,r,n,i,a,s=jD,o=jD,l=vP,c=qD;function u(){var t=Math.min(s.length,o.length);return c!==qD&&(c=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(s[0],s[t-1])),n=t>2?BD:HD,i=a=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(s.map(t),o,l)))(t(c(e)))}return h.invert=function(r){return c(e((a||(a=n(o,s.map(t),dP)))(r)))},h.domain=function(t){return arguments.length?(s=Array.from(t,FD),u()):s.slice()},h.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},h.rangeRound=function(t){return o=Array.from(t),l=yP,u()},h.clamp=function(t){return arguments.length?(c=!!t||qD,u()):c!==qD},h.interpolate=function(t){return arguments.length?(l=t,u()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,u()}}function XD(t,e,r,n){var i,a=function(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?CN(e,t,r):CN(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}(t,e,r);switch((n=KO(null==n?",f":n)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(BO(e)/3)))-BO(Math.abs(t)))}(a,s))||(n.precision=i),tI(n,s);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,BO(e)-BO(t))+1}(a,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=function(t){return Math.max(0,-BO(Math.abs(t)))}(a))||(n.precision=i-2*("%"===n.type))}return QO(n)}function KD(){var t=VD()(qD,qD);return t.copy=function(){return e=t,KD().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},zD.apply(t,arguments),function(t){var e=t.domain;return t.ticks=function(t){var r=e();return NN(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return XD(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,a=e(),s=0,o=a.length-1,l=a[s],c=a[o],u=10;for(c<l&&(i=l,l=c,c=i,i=s,s=o,o=i);u-- >0;){if((i=CN(l,c,r))===n)return a[s]=l,a[o]=c,e(a);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}n=i}return t},t}(t)}function WD(t){return function(){return t}}const YD=Math.abs,JD=Math.atan2,ZD=Math.cos,GD=Math.max,QD=Math.min,tU=Math.sin,eU=Math.sqrt,rU=1e-12,nU=Math.PI,iU=nU/2,aU=2*nU;function sU(t){return t>=1?iU:t<=-1?-iU:Math.asin(t)}function oU(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new TO(e)}function lU(t){return t.innerRadius}function cU(t){return t.outerRadius}function uU(t){return t.startAngle}function hU(t){return t.endAngle}function dU(t){return t&&t.padAngle}function fU(t,e,r,n,i,a,s){var o=t-r,l=e-n,c=(s?a:-a)/eU(o*o+l*l),u=c*l,h=-c*o,d=t+u,f=e+h,p=r+u,m=n+h,g=(d+p)/2,v=(f+m)/2,y=p-d,b=m-f,w=y*y+b*b,x=i-a,k=d*m-p*f,A=(b<0?-1:1)*eU(GD(0,x*x*w-k*k)),_=(k*b-y*A)/w,$=(-k*y-b*A)/w,S=(k*b+y*A)/w,E=(-k*y+b*A)/w,M=_-g,T=$-v,N=S-g,C=E-v;return M*M+T*T>N*N+C*C&&(_=S,$=E),{cx:_,cy:$,x01:-u,y01:-h,x11:_*(i/x-1),y11:$*(i/x-1)}}function pU(){var t=lU,e=cU,r=WD(0),n=null,i=uU,a=hU,s=dU,o=null,l=oU(c);function c(){var c,u,h=+t.apply(this,arguments),d=+e.apply(this,arguments),f=i.apply(this,arguments)-iU,p=a.apply(this,arguments)-iU,m=YD(p-f),g=p>f;if(o||(o=c=l()),d<h&&(u=d,d=h,h=u),d>rU)if(m>aU-rU)o.moveTo(d*ZD(f),d*tU(f)),o.arc(0,0,d,f,p,!g),h>rU&&(o.moveTo(h*ZD(p),h*tU(p)),o.arc(0,0,h,p,f,g));else{var v,y,b=f,w=p,x=f,k=p,A=m,_=m,$=s.apply(this,arguments)/2,S=$>rU&&(n?+n.apply(this,arguments):eU(h*h+d*d)),E=QD(YD(d-h)/2,+r.apply(this,arguments)),M=E,T=E;if(S>rU){var N=sU(S/h*tU($)),C=sU(S/d*tU($));(A-=2*N)>rU?(x+=N*=g?1:-1,k-=N):(A=0,x=k=(f+p)/2),(_-=2*C)>rU?(b+=C*=g?1:-1,w-=C):(_=0,b=w=(f+p)/2)}var R=d*ZD(b),P=d*tU(b),O=h*ZD(k),I=h*tU(k);if(E>rU){var D,U=d*ZD(w),z=d*tU(w),F=h*ZD(x),j=h*tU(x);if(m<nU)if(D=function(t,e,r,n,i,a,s,o){var l=r-t,c=n-e,u=s-i,h=o-a,d=h*l-u*c;if(!(d*d<rU))return[t+(d=(u*(e-a)-h*(t-i))/d)*l,e+d*c]}(R,P,F,j,U,z,O,I)){var q=R-D[0],L=P-D[1],H=U-D[0],B=z-D[1],V=1/tU(function(t){return t>1?0:t<-1?nU:Math.acos(t)}((q*H+L*B)/(eU(q*q+L*L)*eU(H*H+B*B)))/2),X=eU(D[0]*D[0]+D[1]*D[1]);M=QD(E,(h-X)/(V-1)),T=QD(E,(d-X)/(V+1))}else M=T=0}_>rU?T>rU?(v=fU(F,j,R,P,d,T,g),y=fU(U,z,O,I,d,T,g),o.moveTo(v.cx+v.x01,v.cy+v.y01),T<E?o.arc(v.cx,v.cy,T,JD(v.y01,v.x01),JD(y.y01,y.x01),!g):(o.arc(v.cx,v.cy,T,JD(v.y01,v.x01),JD(v.y11,v.x11),!g),o.arc(0,0,d,JD(v.cy+v.y11,v.cx+v.x11),JD(y.cy+y.y11,y.cx+y.x11),!g),o.arc(y.cx,y.cy,T,JD(y.y11,y.x11),JD(y.y01,y.x01),!g))):(o.moveTo(R,P),o.arc(0,0,d,b,w,!g)):o.moveTo(R,P),h>rU&&A>rU?M>rU?(v=fU(O,I,U,z,h,-M,g),y=fU(R,P,F,j,h,-M,g),o.lineTo(v.cx+v.x01,v.cy+v.y01),M<E?o.arc(v.cx,v.cy,M,JD(v.y01,v.x01),JD(y.y01,y.x01),!g):(o.arc(v.cx,v.cy,M,JD(v.y01,v.x01),JD(v.y11,v.x11),!g),o.arc(0,0,h,JD(v.cy+v.y11,v.cx+v.x11),JD(y.cy+y.y11,y.cx+y.x11),g),o.arc(y.cx,y.cy,M,JD(y.y11,y.x11),JD(y.y01,y.x01),!g))):o.arc(0,0,h,k,x,g):o.lineTo(O,I)}else o.moveTo(0,0);if(o.closePath(),c)return o=null,c+""||null}return c.centroid=function(){var r=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,n=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-nU/2;return[ZD(n)*r,tU(n)*r]},c.innerRadius=function(e){return arguments.length?(t="function"==typeof e?e:WD(+e),c):t},c.outerRadius=function(t){return arguments.length?(e="function"==typeof t?t:WD(+t),c):e},c.cornerRadius=function(t){return arguments.length?(r="function"==typeof t?t:WD(+t),c):r},c.padRadius=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:WD(+t),c):n},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:WD(+t),c):i},c.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:WD(+t),c):a},c.padAngle=function(t){return arguments.length?(s="function"==typeof t?t:WD(+t),c):s},c.context=function(t){return arguments.length?(o=null==t?null:t,c):o},c}function mU(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function gU(t){this._context=t}function vU(t){return new gU(t)}function yU(t){return t[0]}function bU(t){return t[1]}function wU(t,e){var r=WD(!0),n=null,i=vU,a=null,s=oU(o);function o(o){var l,c,u,h=(o=mU(o)).length,d=!1;for(null==n&&(a=i(u=s())),l=0;l<=h;++l)!(l<h&&r(c=o[l],l,o))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+t(c,l,o),+e(c,l,o));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?yU:WD(t),e="function"==typeof e?e:void 0===e?bU:WD(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:WD(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:WD(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:WD(!!t),o):r},o.curve=function(t){return arguments.length?(i=t,null!=n&&(a=i(n)),o):i},o.context=function(t){return arguments.length?(null==t?n=a=null:a=i(n=t),o):n},o}function xU(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function kU(t){return t}function AU(t,e,r){this.k=t,this.x=e,this.y=r}function _U(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}gU.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},AU.prototype={constructor:AU,scale:function(t){return 1===t?this:new AU(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new AU(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},AU.prototype;class $U extends pN{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=lP(t,"#ffffff")(.75),e.light50=lP(t,"#ffffff")(.5),e.light25=lP(t,"#ffffff")(.25),e.grey=t,e.dark25=lP(t,"#000000")(.25),e.dark50=lP(t,"#000000")(.5),e.dark75=lP(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,n=this.shadows.opacityPenumbra+this.shadows.opacityBoost,i=this.shadows.opacityAmbient+this.shadows.opacityBoost,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,l=this.shadows.mapUmbra[t],c=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${a}, ${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${s}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=$U.shadows,e=t.elevations.map(e=>YT`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?YT``:YT`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?YT``:YT`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?YT``:YT`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return YT`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return uT`
      :host {
        ---shadow-0: var(--shadow-0, ${cT(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${cT(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${cT(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${cT(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${cT(this.greys.white)});
        ---color-border: var(--color-border, ${cT(this.greys.light75)});
        ---color-text: var(--color-text, ${cT(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${cT(this.greys.white)});
        ---color-link: var(--color-link, ${cT(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${cT(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${cT(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${cT(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${cT(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${cT(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${cT(this.greys.dark75)});

        ---font-family-base: var(--font-family-base, "Source Sans", sans-serif);
        ---font-family-symbol: var(--font-family-symbol, "Source Serif", serif);

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
        font-family: var(---font-family-symbol);
        font-style: normal;
      }

      .math-num {
        font-family: var(---font-family-base);
        font-style: normal;
      }

      .math-text {
        font-family: var(---font-family-base);
        font-style: normal;
      }

      .math-var {
        font-family: var(---font-family-symbol);
        font-style: italic;
      }

      .defs {
        display: block;

        width: 0;
        height: 0;
      }
    `}}var SU={h:"#4daf4a",m:"#ff7f00",fa:"#377eb8",cr:"#e41a1c",hr:"#ffff33",far:"#984ea3",acc:"#999999",d:"#f781bf",c:"#a65628",s:"#4545d0",present:"#f032e6",absent:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"};class EU extends $U{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return SU}static get lights(){return Object.keys(EU.colors).reduce((t,e)=>(t[e]=lP(EU.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(EU.colors).reduce((t,e)=>(t[e]=lP(EU.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,uT`
        :host {
          ---color-h: var(--color-h, ${cT(this.colors.h)});
          ---color-m: var(--color-m, ${cT(this.colors.m)});
          ---color-fa: var(--color-fa, ${cT(this.colors.fa)});
          ---color-cr: var(--color-cr, ${cT(this.colors.cr)});
          ---color-hr: var(--color-hr, ${cT(this.colors.hr)});
          ---color-far: var(--color-far, ${cT(this.colors.far)});
          ---color-acc: var(--color-acc, ${cT(this.colors.acc)});
          ---color-d: var(--color-d, ${cT(this.colors.d)});
          ---color-c: var(--color-c, ${cT(this.colors.c)});
          ---color-s: var(--color-s, ${cT(this.colors.s)});
          ---color-present: var(--color-present, ${cT(this.colors.present)});
          ---color-absent: var(--color-absent, ${cT(this.colors.absent)});
          ---color-correct: var(--color-correct, ${cT(this.colors.correct)});
          ---color-error: var(--color-error, ${cT(this.colors.error)});
          ---color-nr: var(--color-nr, ${cT(this.colors.nr)});

          ---color-h-light: var(--color-h-light, ${cT(this.lights.h)});
          ---color-m-light: var(--color-m-light, ${cT(this.lights.m)});
          ---color-fa-light: var(--color-fa-light, ${cT(this.lights.fa)});
          ---color-cr-light: var(--color-cr-light, ${cT(this.lights.cr)});
          ---color-hr-light: var(--color-hr-light, ${cT(this.lights.hr)});
          ---color-far-light: var(--color-far-light, ${cT(this.lights.far)});
          ---color-acc-light: var(--color-acc-light, ${cT(this.lights.acc)});
          ---color-d-light: var(--color-d-light, ${cT(this.lights.d)});
          ---color-c-light: var(--color-c-light, ${cT(this.lights.c)});
          ---color-s-light: var(--color-s-light, ${cT(this.lights.s)});
          ---color-present-light: var(--color-present-light, ${cT(this.lights.present)});
          ---color-absent-light: var(--color-absent-light, ${cT(this.lights.absent)});
          ---color-correct-light: var(--color-correct-light, ${cT(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${cT(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${cT(this.lights.nr)});

          ---color-h-dark: var(--color-h-dark, ${cT(this.darks.h)});
          ---color-m-dark: var(--color-m-dark, ${cT(this.darks.m)});
          ---color-fa-dark: var(--color-fa-dark, ${cT(this.darks.fa)});
          ---color-cr-dark: var(--color-cr-dark, ${cT(this.darks.cr)});
          ---color-hr-dark: var(--color-hr-dark, ${cT(this.darks.hr)});
          ---color-far-dark: var(--color-far-dark, ${cT(this.darks.far)});
          ---color-acc-dark: var(--color-acc-dark, ${cT(this.darks.acc)});
          ---color-d-dark: var(--color-d-dark, ${cT(this.darks.d)});
          ---color-c-dark: var(--color-c-dark, ${cT(this.darks.c)});
          ---color-s-dark: var(--color-s-dark, ${cT(this.darks.s)});
          ---color-present-dark: var(--color-present-dark, ${cT(this.darks.present)});
          ---color-absent-dark: var(--color-absent-dark, ${cT(this.darks.absent)});
          ---color-correct-dark: var(--color-correct-dark, ${cT(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${cT(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${cT(this.darks.nr)});
        }
      `]}}class MU extends(_U(EU)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},direction:{attribute:!1,type:Number,reflect:!1},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.direction=-1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.currentDirection=void 0,this.signals=["present","absent"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,uT`
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
      `]}render(){return WT``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=n-(i+a),l=n-(s+.25*this.rem);this.xScale=KD().domain([-1,1]).range([0,l]),this.yScale=KD().domain([1,-1]).range([0,o]);const c=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),f=h.select(".plot").attr("transform",`translate(${s}, ${i})`),p=d.append("g").classed("underlayer",!0),m=f.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");f.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const g=d.append("g").classed("overlayer",!0),v=f.select(".overlayer");g.append("circle").classed("outline",!0),v.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=DP()-this.pauseTime,this.pauseTime=0),this.runner=BP(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=DP())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=cR(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();cR(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();cR(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=DP(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"present":"absent",this.currentDirection="absent"===this.signal?void 0:this.direction>=0?this.direction:360*Math.random(),this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length="present"===this.signal?Math.round(this.count*this.coherence):0,this.dots[this.RANDOM].length="present"===this.signal?this.count-this.dots[this.COHERENT].length:this.count;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(i||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());s.x=this.xScale(n*Math.cos(r)),s.y=this.yScale(n*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(n/1e3)*Math.cos(e),s.dy=this.speed*(n/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=cR(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=cR(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const l=cR(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}function TU(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function NU(t){return NU="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},NU(t)}function CU(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function RU(){return RU=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},RU.apply(this,arguments)}function PU(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function OU(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return PU(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?PU(t,e):void 0}}(t))||e){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){o=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function IU(t,e){var r=[],n=[];return t.length&&function t(e,i){if(1===e.length)r.push(e[0]),n.push(e[0]);else{for(var a=Array(e.length-1),s=0;s<a.length;s++)0===s&&r.push(e[0]),s===a.length-1&&n.push(e[s+1]),a[s]=[(1-i)*e[s][0]+i*e[s+1][0],(1-i)*e[s][1]+i*e[s+1][1]];t(a,i)}}(t,e),{left:r,right:n.reverse()}}function DU(t){var e={};return 4===t.length&&(e.x2=t[2][0],e.y2=t[2][1]),t.length>=3&&(e.x1=t[1][0],e.y1=t[1][1]),e.x=t[t.length-1][0],e.y=t[t.length-1][1],4===t.length?e.type="C":3===t.length?e.type="Q":e.type="L",e}function UU(t,e,r){var n=[[t.x,t.y]];return null!=e.x1&&n.push([e.x1,e.y1]),null!=e.x2&&n.push([e.x2,e.y2]),n.push([e.x,e.y]),function(t,e){for(var r=[],n=t,i=1/(e=e||2),a=0;a<e-1;a++){var s=IU(n,i/(1-i*a));r.push(s.left),n=s.right}return r.push(n),r}(n,r).map(DU)}customElements.define("rdk-task",MU);var zU=/[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g,FU={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"],Z:[]};function jU(t,e){for(var r=Array(t),n=0;n<t;n++)r[n]=e;return r}function qU(t){return"".concat(t.type).concat(FU[t.type].map(function(e){return t[e]}).join(","))}function LU(t,e,r){var n=t.length-1,i=e.length-1,a=n/i,s=jU(i).reduce(function(e,n,i){var s=Math.floor(a*i);if(r&&s<t.length-1&&r(t[s],t[s+1])){var o=a*i%1<.5;e[s]&&(o?s>0?s-=1:s<t.length-1&&(s+=1):s<t.length-1?s+=1:s>0&&(s-=1))}return e[s]=(e[s]||0)+1,e},[]),o=s.reduce(function(e,r,n){if(n===t.length-1){var i=jU(r,RU({},t[t.length-1]));return"M"===i[0].type&&i.forEach(function(t){t.type="L"}),e.concat(i)}return e.concat(function(t,e,r){var n=[];if("L"===e.type||"Q"===e.type||"C"===e.type)n=n.concat(UU(t,e,r));else{var i=RU({},t);"M"===i.type&&(i.type="L"),(n=n.concat(jU(r-1).map(function(){return i}))).push(e)}return n}(t[n],t[n+1],r))},[]);return o.unshift(t[0]),o}function HU(t){for(var e,r,n=(t||"").match(zU)||[],i=[],a=0;a<n.length;++a)if(e=FU[n[a]]){r={type:n[a]};for(var s=0;s<e.length;++s)r[e[s]]=+n[a+s+1];a+=e.length,i.push(r)}return i}function BU(t,e,r){var n=null==t?[]:t.slice(),i=null==e?[]:e.slice(),a="object"===NU(r)?r:{excludeSegment:r,snapEndsToInput:!0},s=a.excludeSegment,o=a.snapEndsToInput;if(!n.length&&!i.length)return function(){return[]};var l=!(0!==n.length&&"Z"!==n[n.length-1].type||0!==i.length&&"Z"!==i[i.length-1].type);n.length>0&&"Z"===n[n.length-1].type&&n.pop(),i.length>0&&"Z"===i[i.length-1].type&&i.pop(),n.length?i.length||i.push(n[0]):n.push(i[0]),0!==Math.abs(i.length-n.length)&&(i.length>n.length?n=LU(n,i,s):i.length<n.length&&(i=LU(i,n,s))),n=n.map(function(t,e){return function(t,e){var r={x1:"x",y1:"y",x2:"x",y2:"y"},n=["xAxisRotation","largeArcFlag","sweepFlag"];if(t.type!==e.type&&"M"!==e.type.toUpperCase()){var i={};Object.keys(e).forEach(function(a){var s=e[a],o=t[a];void 0===o&&(n.includes(a)?o=s:(void 0===o&&r[a]&&(o=t[r[a]]),void 0===o&&(o=0))),i[a]=o}),i.type=e.type,t=i}return t}(t,i[e])});var c=n.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?TU(Object(r),!0).forEach(function(e){CU(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):TU(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t)});return l&&(c.push({type:"Z"}),n.push({type:"Z"})),function(t){if(1===t&&o)return null==e?[]:e;if(0===t)return n;for(var r=0;r<c.length;++r){var a,s=n[r],l=i[r],u=c[r],h=OU(FU[u.type]);try{for(h.s();!(a=h.n()).done;){var d=a.value;u[d]=(1-t)*s[d]+t*l[d],"largeArcFlag"!==d&&"sweepFlag"!==d||(u[d]=Math.round(u[d]))}}catch(t){h.e(t)}finally{h.f()}}return c}}Object.keys(FU).forEach(function(t){FU[t.toLowerCase()]=FU[t]});const VU={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const t in VU)Object.freeze(VU[t]);var XU=Object.freeze(VU);const KU=Object.create(null);for(const t in XU)Object.hasOwn(XU,t)&&(KU[XU[t]]=t);const WU={to:{},get:{}};function YU(t,e,r){return Math.min(Math.max(e,t),r)}function JU(t){const e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}WU.get=function(t){let e,r;switch(t.slice(0,3).toLowerCase()){case"hsl":e=WU.get.hsl(t),r="hsl";break;case"hwb":e=WU.get.hwb(t),r="hwb";break;default:e=WU.get.rgb(t),r="rgb"}return e?{model:r,value:e}:null},WU.get.rgb=function(t){if(!t)return null;let e,r,n,i=[0,0,0,1];if(e=t.match(/^#([a-f\d]{6})([a-f\d]{2})?$/i)){for(n=e[2],e=e[1],r=0;r<3;r++){const t=2*r;i[r]=Number.parseInt(e.slice(t,t+2),16)}n&&(i[3]=Number.parseInt(n,16)/255)}else if(e=t.match(/^#([a-f\d]{3,4})$/i)){for(e=e[1],n=e[3],r=0;r<3;r++)i[r]=Number.parseInt(e[r]+e[r],16);n&&(i[3]=Number.parseInt(n+n,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i)){for(r=0;r<3;r++)i[r]=Number.parseFloat(e[r+1]);e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i)))return(e=t.toLowerCase().match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:Object.hasOwn(XU,e[1])?(i=XU[e[1]].slice(),i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*Number.parseFloat(e[r+1]));e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}for(r=0;r<3;r++)i[r]=YU(i[r],0,255);return i[3]=YU(i[3],0,1),i},WU.get.hsl=function(t){if(!t)return null;const e=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,YU(Number.parseFloat(e[2]),0,100),YU(Number.parseFloat(e[3]),0,100),YU(Number.isNaN(t)?1:t,0,1)]}return null},WU.get.hwb=function(t){if(!t)return null;const e=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,YU(Number.parseFloat(e[2]),0,100),YU(Number.parseFloat(e[3]),0,100),YU(Number.isNaN(t)?1:t,0,1)]}return null},WU.to.hex=function(...t){return"#"+JU(t[0])+JU(t[1])+JU(t[2])+(t[3]<1?JU(Math.round(255*t[3])):"")},WU.to.rgb=function(...t){return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},WU.to.rgb.percent=function(...t){const e=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+r+"%, "+n+"%)":"rgba("+e+"%, "+r+"%, "+n+"%, "+t[3]+")"},WU.to.hsl=function(...t){return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},WU.to.hwb=function(...t){let e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},WU.to.keyword=function(...t){return KU[t.slice(0,3)]};const ZU={};for(const t of Object.keys(XU))ZU[XU[t]]=t;const GU={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},oklab:{channels:3,labels:["okl","oka","okb"]},lch:{channels:3,labels:"lch"},oklch:{channels:3,labels:["okl","okc","okh"]},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},QU=(6/29)**3;function tz(t){const e=t>.0031308?1.055*t**(1/2.4)-.055:12.92*t;return Math.min(Math.max(0,e),1)}function ez(t){return t>.04045?((t+.055)/1.055)**2.4:t/12.92}for(const t of Object.keys(GU)){if(!("channels"in GU[t]))throw new Error("missing channels property: "+t);if(!("labels"in GU[t]))throw new Error("missing channel labels property: "+t);if(GU[t].labels.length!==GU[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:r}=GU[t];delete GU[t].channels,delete GU[t].labels,Object.defineProperty(GU[t],"channels",{value:e}),Object.defineProperty(GU[t],"labels",{value:r})}function rz(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}function nz(t){const e=function(){const t={},e=Object.keys(GU);for(let{length:r}=e,n=0;n<r;n++)t[e[n]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length>0;){const t=r.pop(),n=Object.keys(GU[t]);for(let{length:i}=n,a=0;a<i;a++){const i=n[a],s=e[i];-1===s.distance&&(s.distance=e[t].distance+1,s.parent=t,r.unshift(i))}}return e}function iz(t,e){return function(r){return e(t(r))}}function az(t,e){const r=[e[t].parent,t];let n=GU[e[t].parent][t],i=e[t].parent;for(;e[i].parent;)r.unshift(e[i].parent),n=iz(GU[e[i].parent][i],n),i=e[i].parent;return n.conversion=r,n}function sz(t){const e=nz(t),r={},n=Object.keys(e);for(let{length:t}=n,i=0;i<t;i++){const t=n[i];null!==e[t].parent&&(r[t]=az(t,e))}return r}GU.rgb.hsl=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=a-i;let o,l;switch(a){case i:o=0;break;case e:o=(r-n)/s;break;case r:o=2+(n-e)/s;break;case n:o=4+(e-r)/s}o=Math.min(60*o,360),o<0&&(o+=360);const c=(i+a)/2;return l=a===i?0:c<=.5?s/(a+i):s/(2-a-i),[o,100*l,100*c]},GU.rgb.hsv=function(t){let e,r,n,i,a;const s=t[0]/255,o=t[1]/255,l=t[2]/255,c=Math.max(s,o,l),u=c-Math.min(s,o,l),h=function(t){return(c-t)/6/u+.5};if(0===u)i=0,a=0;else{switch(a=u/c,e=h(s),r=h(o),n=h(l),c){case s:i=n-r;break;case o:i=1/3+e-n;break;case l:i=2/3+r-e}i<0?i+=1:i>1&&(i-=1)}return[360*i,100*a,100*c]},GU.rgb.hwb=function(t){const e=t[0],r=t[1];let n=t[2];const i=GU.rgb.hsl(t)[0],a=1/255*Math.min(e,Math.min(r,n));return n=1-1/255*Math.max(e,Math.max(r,n)),[i,100*a,100*n]},GU.rgb.oklab=function(t){const e=ez(t[0]/255),r=ez(t[1]/255),n=ez(t[2]/255),i=Math.cbrt(.4122214708*e+.5363325363*r+.0514459929*n),a=Math.cbrt(.2119034982*e+.6806995451*r+.1073969566*n),s=Math.cbrt(.0883024619*e+.2817188376*r+.6299787005*n);return[100*(.2104542553*i+.793617785*a-.0040720468*s),100*(1.9779984951*i-2.428592205*a+.4505937099*s),100*(.0259040371*i+.7827717662*a-.808675766*s)]},GU.rgb.cmyk=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(1-e,1-r,1-n);return[100*((1-e-i)/(1-i)||0),100*((1-r-i)/(1-i)||0),100*((1-n-i)/(1-i)||0),100*i]},GU.rgb.keyword=function(t){const e=ZU[t];if(e)return e;let r,n=Number.POSITIVE_INFINITY;for(const e of Object.keys(XU)){const i=rz(t,XU[e]);i<n&&(n=i,r=e)}return r},GU.keyword.rgb=function(t){return[...XU[t]]},GU.rgb.xyz=function(t){const e=ez(t[0]/255),r=ez(t[1]/255),n=ez(t[2]/255);return[100*(.4124564*e+.3575761*r+.1804375*n),100*(.2126729*e+.7151522*r+.072175*n),100*(.0193339*e+.119192*r+.9503041*n)]},GU.rgb.lab=function(t){const e=GU.rgb.xyz(t);let r=e[0],n=e[1],i=e[2];r/=95.047,n/=100,i/=108.883,r=r>QU?r**(1/3):7.787*r+16/116,n=n>QU?n**(1/3):7.787*n+16/116,i=i>QU?i**(1/3):7.787*i+16/116;return[116*n-16,500*(r-n),200*(n-i)]},GU.hsl.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;let i,a;if(0===r)return a=255*n,[a,a,a];const s=n<.5?n*(1+r):n+r-n*r,o=2*n-s,l=[0,0,0];for(let t=0;t<3;t++)i=e+1/3*-(t-1),i<0&&i++,i>1&&i--,a=6*i<1?o+6*(s-o)*i:2*i<1?s:3*i<2?o+(s-o)*(2/3-i)*6:o,l[t]=255*a;return l},GU.hsl.hsv=function(t){const e=t[0];let r=t[1]/100,n=t[2]/100,i=r;const a=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,i*=a<=1?a:2-a;return[e,100*(0===n?2*i/(a+i):2*r/(n+r)),100*((n+r)/2)]},GU.hsv.rgb=function(t){const e=t[0]/60,r=t[1]/100;let n=t[2]/100;const i=Math.floor(e)%6,a=e-Math.floor(e),s=255*n*(1-r),o=255*n*(1-r*a),l=255*n*(1-r*(1-a));switch(n*=255,i){case 0:return[n,l,s];case 1:return[o,n,s];case 2:return[s,n,l];case 3:return[s,o,n];case 4:return[l,s,n];case 5:return[n,s,o]}},GU.hsv.hsl=function(t){const e=t[0],r=t[1]/100,n=t[2]/100,i=Math.max(n,.01);let a,s;s=(2-r)*n;const o=(2-r)*i;return a=r*i,a/=o<=1?o:2-o,a=a||0,s/=2,[e,100*a,100*s]},GU.hwb.rgb=function(t){const e=t[0]/360;let r=t[1]/100,n=t[2]/100;const i=r+n;let a;i>1&&(r/=i,n/=i);const s=Math.floor(6*e),o=1-n;a=6*e-s,1&s&&(a=1-a);const l=r+a*(o-r);let c,u,h;switch(s){default:case 6:case 0:c=o,u=l,h=r;break;case 1:c=l,u=o,h=r;break;case 2:c=r,u=o,h=l;break;case 3:c=r,u=l,h=o;break;case 4:c=l,u=r,h=o;break;case 5:c=o,u=r,h=l}return[255*c,255*u,255*h]},GU.cmyk.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i))]},GU.xyz.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100;let i,a,s;return i=3.2404542*e+-1.5371385*r+-.4985314*n,a=-.969266*e+1.8760108*r+.041556*n,s=.0556434*e+-.2040259*r+1.0572252*n,i=tz(i),a=tz(a),s=tz(s),[255*i,255*a,255*s]},GU.xyz.lab=function(t){let e=t[0],r=t[1],n=t[2];e/=95.047,r/=100,n/=108.883,e=e>QU?e**(1/3):7.787*e+16/116,r=r>QU?r**(1/3):7.787*r+16/116,n=n>QU?n**(1/3):7.787*n+16/116;return[116*r-16,500*(e-r),200*(r-n)]},GU.xyz.oklab=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=Math.cbrt(.8189330101*e+.3618667424*r-.1288597137*n),a=Math.cbrt(.0329845436*e+.9293118715*r+.0361456387*n),s=Math.cbrt(.0482003018*e+.2643662691*r+.633851707*n);return[100*(.2104542553*i+.793617785*a-.0040720468*s),100*(1.9779984951*i-2.428592205*a+.4505937099*s),100*(.0259040371*i+.7827717662*a-.808675766*s)]},GU.oklab.oklch=function(t){return GU.lab.lch(t)},GU.oklab.xyz=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(.999999998*e+.396337792*r+.215803758*n)**3,a=(1.000000008*e-.105561342*r-.063854175*n)**3,s=(1.000000055*e-.089484182*r-1.291485538*n)**3;return[100*(1.227013851*i-.55779998*a+.281256149*s),100*(-.040580178*i+1.11225687*a-.071676679*s),100*(-.076381285*i-.421481978*a+1.58616322*s)]},GU.oklab.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(e+.3963377774*r+.2158037573*n)**3,a=(e-.1055613458*r-.0638541728*n)**3,s=(e-.0894841775*r-1.291485548*n)**3;return[255*tz(4.0767416621*i-3.3077115913*a+.2309699292*s),255*tz(-1.2684380046*i+2.6097574011*a-.3413193965*s),255*tz(-.0041960863*i-.7034186147*a+1.707614701*s)]},GU.oklch.oklab=function(t){return GU.lch.lab(t)},GU.lab.xyz=function(t){let e,r,n;r=(t[0]+16)/116,e=t[1]/500+r,n=r-t[2]/200;const i=r**3,a=e**3,s=n**3;return r=i>QU?i:(r-16/116)/7.787,e=a>QU?a:(e-16/116)/7.787,n=s>QU?s:(n-16/116)/7.787,e*=95.047,r*=100,n*=108.883,[e,r,n]},GU.lab.lch=function(t){const e=t[0],r=t[1],n=t[2];let i;i=360*Math.atan2(n,r)/2/Math.PI,i<0&&(i+=360);return[e,Math.sqrt(r*r+n*n),i]},GU.lch.lab=function(t){const e=t[0],r=t[1],n=t[2]/360*2*Math.PI;return[e,r*Math.cos(n),r*Math.sin(n)]},GU.rgb.ansi16=function(t,e=null){const[r,n,i]=t;let a=null===e?GU.rgb.hsv(t)[2]:e;if(a=Math.round(a/50),0===a)return 30;let s=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===a&&(s+=60),s},GU.hsv.ansi16=function(t){return GU.rgb.ansi16(GU.hsv.rgb(t),t[2])},GU.rgb.ansi256=function(t){const e=t[0],r=t[1],n=t[2];if(e>>4==r>>4&&r>>4==n>>4)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},GU.ansi16.rgb=function(t){let e=(t=t[0])%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const r=.5*(Math.trunc(t>50)+1);return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},GU.ansi256.rgb=function(t){if((t=t[0])>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},GU.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".slice(e.length)+e},GU.hex.rgb=function(t){const e=t.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!e)return[0,0,0];let r=e[0];3===e[0].length&&(r=[...r].map(t=>t+t).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},GU.rgb.hcg=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.max(Math.max(e,r),n),a=Math.min(Math.min(e,r),n),s=i-a;let o;return o=s<=0?0:i===e?(r-n)/s%6:i===r?2+(n-e)/s:4+(e-r)/s,o/=6,o%=1,[360*o,100*s,100*(s<1?a/(1-s):0)]},GU.hsl.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=r<.5?2*e*r:2*e*(1-r);let i=0;return n<1&&(i=(r-.5*n)/(1-n)),[t[0],100*n,100*i]},GU.hsv.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=e*r;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},GU.hcg.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;if(0===r)return[255*n,255*n,255*n];const i=[0,0,0],a=e%1*6,s=a%1,o=1-s;let l=0;switch(Math.floor(a)){case 0:i[0]=1,i[1]=s,i[2]=0;break;case 1:i[0]=o,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=s;break;case 3:i[0]=0,i[1]=o,i[2]=1;break;case 4:i[0]=s,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=o}return l=(1-r)*n,[255*(r*i[0]+l),255*(r*i[1]+l),255*(r*i[2]+l)]},GU.hcg.hsv=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);let n=0;return r>0&&(n=e/r),[t[0],100*n,100*r]},GU.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let n=0;return r>0&&r<.5?n=e/(2*r):r>=.5&&r<1&&(n=e/(2*(1-r))),[t[0],100*n,100*r]},GU.hcg.hwb=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},GU.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,n=r-e;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},GU.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},GU.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},GU.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},GU.gray.hsl=function(t){return[0,0,t[0]]},GU.gray.hsv=GU.gray.hsl,GU.gray.hwb=function(t){return[0,100,t[0]]},GU.gray.cmyk=function(t){return[0,0,0,t[0]]},GU.gray.lab=function(t){return[t[0],0,0]},GU.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".slice(r.length)+r},GU.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const oz={},lz=Object.keys(GU);function cz(t){const e=function(...e){const r=e[0];return null==r?r:(r.length>1&&(e=r),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}function uz(t){const e=function(...e){const r=e[0];if(null==r)return r;r.length>1&&(e=r);const n=t(e);if("object"==typeof n)for(let{length:t}=n,e=0;e<t;e++)n[e]=Math.round(n[e]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}for(const t of lz){oz[t]={},Object.defineProperty(oz[t],"channels",{value:GU[t].channels}),Object.defineProperty(oz[t],"labels",{value:GU[t].labels});const e=sz(t),r=Object.keys(e);for(const n of r){const r=e[n];oz[t][n]=uz(r),oz[t][n].raw=cz(r)}}const hz=["keyword","gray","hex"],dz={};for(const t of Object.keys(oz))dz[[...oz[t].labels].sort().join("")]=t;const fz={};function pz(t,e){if(!(this instanceof pz))return new pz(t,e);if(e&&e in hz&&(e=null),e&&!(e in oz))throw new Error("Unknown model: "+e);let r,n;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof pz)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"==typeof t){const e=WU.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,n=oz[this.model].channels,this.color=e.value.slice(0,n),this.valpha="number"==typeof e.value[n]?e.value[n]:1}else if(t.length>0){this.model=e||"rgb",n=oz[this.model].channels;const r=Array.prototype.slice.call(t,0,n);this.color=yz(r,n),this.valpha="number"==typeof t[n]?t[n]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const n=e.sort().join("");if(!(n in dz))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=dz[n];const{labels:i}=oz[this.model],a=[];for(r=0;r<i.length;r++)a.push(t[i[r]]);this.color=yz(a)}if(fz[this.model])for(n=oz[this.model].channels,r=0;r<n;r++){const t=fz[this.model][r];t&&(this.color[r]=t(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}pz.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in WU.to?this:this.rgb();e=e.round("number"==typeof t?t:1);const r=1===e.valpha?e.color:[...e.color,this.valpha];return WU.to[e.model](...r)},percentString(t){const e=this.rgb().round("number"==typeof t?t:1),r=1===e.valpha?e.color:[...e.color,this.valpha];return WU.to.rgb.percent(...r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=oz[this.model],{labels:r}=oz[this.model];for(let n=0;n<e;n++)t[r[n]]=this.color[n];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new pz([...this.color.map(mz(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new pz([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:gz("rgb",0,vz(255)),green:gz("rgb",1,vz(255)),blue:gz("rgb",2,vz(255)),hue:gz(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:gz("hsl",1,vz(100)),lightness:gz("hsl",2,vz(100)),saturationv:gz("hsv",1,vz(100)),value:gz("hsv",2,vz(100)),chroma:gz("hcg",1,vz(100)),gray:gz("hcg",2,vz(100)),white:gz("hwb",1,vz(100)),wblack:gz("hwb",2,vz(100)),cyan:gz("cmyk",0,vz(100)),magenta:gz("cmyk",1,vz(100)),yellow:gz("cmyk",2,vz(100)),black:gz("cmyk",3,vz(100)),x:gz("xyz",0,vz(95.047)),y:gz("xyz",1,vz(100)),z:gz("xyz",2,vz(108.833)),l:gz("lab",0,vz(100)),a:gz("lab",1),b:gz("lab",2),keyword(t){return void 0!==t?new pz(t):oz[this.model].keyword(this.color)},hex(t){return void 0!==t?new pz(t):WU.to.hex(...this.rgb().round().color)},hexa(t){if(void 0!==t)return new pz(t);const e=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),WU.to.hex(...e)+r},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[r,n]of t.entries()){const t=n/255;e[r]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(2126*t[0]+7152*t[1]+722*t[2])/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return pz.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let r=e.color[0];return r=(r+t)%360,r=r<0?360+r:r,e.color[0]=r,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const r=t.rgb(),n=this.rgb(),i=void 0===e?.5:e,a=2*i-1,s=r.alpha()-n.alpha(),o=((a*s===-1?a:(a+s)/(1+a*s))+1)/2,l=1-o;return pz.rgb(o*r.red()+l*n.red(),o*r.green()+l*n.green(),o*r.blue()+l*n.blue(),r.alpha()*i+n.alpha()*(1-i))}};for(const t of Object.keys(oz)){if(hz.includes(t))continue;const{channels:e}=oz[t];pz.prototype[t]=function(...e){return this.model===t?new pz(this):e.length>0?new pz(e,t):new pz([...(r=oz[this.model][t].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],t);var r},pz[t]=function(...r){let n=r[0];return"number"==typeof n&&(n=yz(r,e)),new pz(n,t)}}function mz(t){return function(e){return function(t,e){return Number(t.toFixed(e))}(e,t)}}function gz(t,e,r){t=Array.isArray(t)?t:[t];for(const n of t)(fz[n]||=[])[e]=r;return t=t[0],function(n){let i;return void 0!==n?(r&&(n=r(n)),i=this[t](),i.color[e]=n,i):(i=this[t]().color[e],r&&(i=r(i)),i)}}function vz(t){return function(e){return Math.max(0,Math.min(t,e))}}function yz(t,e){for(let r=0;r<e;r++)"number"!=typeof t[r]&&(t[r]=0);return t}var bz={exports:{}};bz.exports=function(){var t=function(t,e){var r=Array.prototype.concat,n=Array.prototype.slice,i=Object.prototype.toString;function a(e,r){var n=e>r?e:r;return t.pow(10,17-~~(t.log(n>0?n:-n)*t.LOG10E))}var s=Array.isArray||function(t){return"[object Array]"===i.call(t)};function o(t){return"[object Function]"===i.call(t)}function l(t){return"number"==typeof t&&t-t===0}function c(t){return r.apply([],t)}function u(){return new u._init(arguments)}function h(){return 0}function d(){return 1}function f(t,e){return t===e?1:0}u.fn=u.prototype,u._init=function(t){if(s(t[0]))if(s(t[0][0])){o(t[1])&&(t[0]=u.map(t[0],t[1]));for(var e=0;e<t[0].length;e++)this[e]=t[0][e];this.length=t[0].length}else this[0]=o(t[1])?u.map(t[0],t[1]):t[0],this.length=1;else if(l(t[0]))this[0]=u.seq.apply(null,t),this.length=1;else{if(t[0]instanceof u)return u(t[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:a,isArray:s,isFunction:o,isNumber:l,toVector:c},u._random_fn=t.random,u.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");u._random_fn=t},u.extend=function(t){var e,r;if(1===arguments.length){for(r in t)u[r]=t[r];return this}for(e=1;e<arguments.length;e++)for(r in arguments[e])t[r]=arguments[e][r];return t},u.rows=function(t){return t.length||1},u.cols=function(t){return t[0].length||1},u.dimensions=function(t){return{rows:u.rows(t),cols:u.cols(t)}},u.row=function(t,e){return s(e)?e.map(function(e){return u.row(t,e)}):t[e]},u.rowa=function(t,e){return u.row(t,e)},u.col=function(t,e){if(s(e)){var r=u.arange(t.length).map(function(){return new Array(e.length)});return e.forEach(function(e,n){u.arange(t.length).forEach(function(i){r[i][n]=t[i][e]})}),r}for(var n=new Array(t.length),i=0;i<t.length;i++)n[i]=[t[i][e]];return n},u.cola=function(t,e){return u.col(t,e).map(function(t){return t[0]})},u.diag=function(t){for(var e=u.rows(t),r=new Array(e),n=0;n<e;n++)r[n]=[t[n][n]];return r},u.antidiag=function(t){for(var e=u.rows(t)-1,r=new Array(e),n=0;e>=0;e--,n++)r[n]=[t[n][e]];return r},u.transpose=function(t){var e,r,n,i,a,o=[];for(s(t[0])||(t=[t]),r=t.length,n=t[0].length,a=0;a<n;a++){for(e=new Array(r),i=0;i<r;i++)e[i]=t[i][a];o.push(e)}return 1===o.length?o[0]:o},u.map=function(t,e,r){var n,i,a,o,l;for(s(t[0])||(t=[t]),i=t.length,a=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(a)),l=0;l<a;l++)o[n][l]=e(t[n][l],n,l);return 1===o.length?o[0]:o},u.cumreduce=function(t,e,r){var n,i,a,o,l;for(s(t[0])||(t=[t]),i=t.length,a=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(a)),a>0&&(o[n][0]=t[n][0]),l=1;l<a;l++)o[n][l]=e(o[n][l-1],t[n][l]);return 1===o.length?o[0]:o},u.alter=function(t,e){return u.map(t,e,!0)},u.create=function(t,e,r){var n,i,a=new Array(t);for(o(e)&&(r=e,e=t),n=0;n<t;n++)for(a[n]=new Array(e),i=0;i<e;i++)a[n][i]=r(n,i);return a},u.zeros=function(t,e){return l(e)||(e=t),u.create(t,e,h)},u.ones=function(t,e){return l(e)||(e=t),u.create(t,e,d)},u.rand=function(t,e){return l(e)||(e=t),u.create(t,e,u._random_fn)},u.identity=function(t,e){return l(e)||(e=t),u.create(t,e,f)},u.symmetric=function(t){var e,r,n=t.length;if(t.length!==t[0].length)return!1;for(e=0;e<n;e++)for(r=0;r<n;r++)if(t[r][e]!==t[e][r])return!1;return!0},u.clear=function(t){return u.alter(t,h)},u.seq=function(t,e,r,n){o(n)||(n=!1);var i,s=[],l=a(t,e),c=(e*l-t*l)/((r-1)*l),u=t;for(i=0;u<=e&&i<r;u=(t*l+c*l*++i)/l)s.push(n?n(u,i):u);return s},u.arange=function(t,r,n){var i,a=[];if(n=n||1,r===e&&(r=t,t=0),t===r||0===n)return[];if(t<r&&n<0)return[];if(t>r&&n>0)return[];if(n>0)for(i=t;i<r;i+=n)a.push(i);else for(i=t;i>r;i+=n)a.push(i);return a},u.slice=function(){function t(t,r,n,i){var a,s=[],o=t.length;if(r===e&&n===e&&i===e)return u.copy(t);if(i=i||1,(r=(r=r||0)>=0?r:o+r)===(n=(n=n||t.length)>=0?n:o+n)||0===i)return[];if(r<n&&i<0)return[];if(r>n&&i>0)return[];if(i>0)for(a=r;a<n;a+=i)s.push(t[a]);else for(a=r;a>n;a+=i)s.push(t[a]);return s}function r(e,r){var n,i;return l((r=r||{}).row)?l(r.col)?e[r.row][r.col]:t(u.rowa(e,r.row),(n=r.col||{}).start,n.end,n.step):l(r.col)?t(u.cola(e,r.col),(i=r.row||{}).start,i.end,i.step):(i=r.row||{},n=r.col||{},t(e,i.start,i.end,i.step).map(function(e){return t(e,n.start,n.end,n.step)}))}return r}(),u.sliceAssign=function(r,n,i){var a,s;if(l(n.row)){if(l(n.col))return r[n.row][n.col]=i;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,a=u.arange(n.col.start,t.min(r.length,n.col.end),n.col.step);var o=n.row;return a.forEach(function(t,e){r[o][t]=i[e]}),r}if(l(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,s=u.arange(n.row.start,t.min(r[0].length,n.row.end),n.row.step);var c=n.col;return s.forEach(function(t,e){r[t][c]=i[e]}),r}return i[0].length===e&&(i=[i]),n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,s=u.arange(n.row.start,t.min(r.length,n.row.end),n.row.step),a=u.arange(n.col.start,t.min(r[0].length,n.col.end),n.col.step),s.forEach(function(t,e){a.forEach(function(n,a){r[t][n]=i[e][a]})}),r},u.diagonal=function(t){var e=u.zeros(t.length,t.length);return t.forEach(function(t,r){e[r][r]=t}),e},u.copy=function(t){return t.map(function(t){return l(t)?t:t.map(function(t){return t})})};var p=u.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},p.map=function(t,e){return u(u.map(this,t,e))},p.cumreduce=function(t,e){return u(u.cumreduce(this,t,e))},p.alter=function(t){return u.alter(this,t),this},function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e){var r,n=this;return e?(setTimeout(function(){e.call(n,p[t].call(n))}),this):(r=u[t](this),s(r)?u(r):r)}})(t[e])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e,r){var n=this;return r?(setTimeout(function(){r.call(n,p[t].call(n,e))}),this):u(u[t](this,e))}})(t[e])}("row col".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(){return u(u[t].apply(null,arguments))}})(t[e])}("create zeros ones rand identity".split(" ")),u}(Math);return function(t,e){var r=t.utils.isFunction;function n(t,e){return t-e}function i(t,r,n){return e.max(r,e.min(t,n))}t.sum=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.sumsqrd=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r]*t[r];return e},t.sumsqerr=function(e){for(var r,n=t.mean(e),i=0,a=e.length;--a>=0;)i+=(r=e[a]-n)*r;return i},t.sumrow=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.product=function(t){for(var e=1,r=t.length;--r>=0;)e*=t[r];return e},t.min=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]<e&&(e=t[r]);return e},t.max=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]>e&&(e=t[r]);return e},t.unique=function(t){for(var e={},r=[],n=0;n<t.length;n++)e[t[n]]||(e[t[n]]=!0,r.push(t[n]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(r){var n=r.map(e.log),i=t.mean(n);return e.exp(i)},t.median=function(t){var e=t.length,r=t.slice().sort(n);return 1&e?r[e/2|0]:(r[e/2-1]+r[e/2])/2},t.cumsum=function(e){return t.cumreduce(e,function(t,e){return t+e})},t.cumprod=function(e){return t.cumreduce(e,function(t,e){return t*e})},t.diff=function(t){var e,r=[],n=t.length;for(e=1;e<n;e++)r.push(t[e]-t[e-1]);return r},t.rank=function(t){var e,r=[],i={};for(e=0;e<t.length;e++)i[l=t[e]]?i[l]++:(i[l]=1,r.push(l));var a=r.sort(n),s={},o=1;for(e=0;e<a.length;e++){var l,c=i[l=a[e]],u=(o+(o+c-1))/2;s[l]=u,o+=c}return t.map(function(t){return s[t]})},t.mode=function(t){var e,r=t.length,i=t.slice().sort(n),a=1,s=0,o=0,l=[];for(e=0;e<r;e++)i[e]===i[e+1]?a++:(a>s?(l=[i[e]],s=a,o=0):a===s&&(l.push(i[e]),o++),a=1);return 0===o?l[0]:l},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,r){return t.sumsqerr(e)/(e.length-(r?1:0))},t.pooledvariance=function(e){var r=e.reduce(function(e,r){return e+t.sumsqerr(r)},0),n=e.reduce(function(t,e){return t+e.length},0);return r/(n-e.length)},t.deviation=function(e){for(var r=t.mean(e),n=e.length,i=new Array(n),a=0;a<n;a++)i[a]=e[a]-r;return i},t.stdev=function(r,n){return e.sqrt(t.variance(r,n))},t.pooledstdev=function(r){return e.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var n=t.mean(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.mean(i)},t.meddev=function(r){for(var n=t.median(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.median(i)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(t){var r=t.length,i=t.slice().sort(n);return[i[e.round(r/4)-1],i[e.round(r/2)-1],i[e.round(3*r/4)-1]]},t.quantiles=function(t,r,a,s){var o,l,c,u,h,d=t.slice().sort(n),f=[r.length],p=t.length;for(void 0===a&&(a=3/8),void 0===s&&(s=3/8),o=0;o<r.length;o++)c=p*(l=r[o])+(a+l*(1-a-s)),u=e.floor(i(c,1,p-1)),h=i(c-u,0,1),f[o]=(1-h)*d[u-1]+h*d[u];return f},t.percentile=function(t,e,r){var i=t.slice().sort(n),a=e*(i.length+(r?1:-1))+(r?0:1),s=parseInt(a),o=a-s;return s+1<i.length?i[s-1]+o*(i[s]-i[s-1]):i[s-1]},t.percentileOfScore=function(t,e,r){var n,i,a=0,s=t.length,o=!1;for("strict"===r&&(o=!0),i=0;i<s;i++)n=t[i],(o&&n<e||!o&&n<=e)&&a++;return a/s},t.histogram=function(r,n){n=n||4;var i,a=t.min(r),s=(t.max(r)-a)/n,o=r.length,l=[];for(i=0;i<n;i++)l[i]=0;for(i=0;i<o;i++)l[e.min(e.floor((r[i]-a)/s),n-1)]+=1;return l},t.covariance=function(e,r){var n,i=t.mean(e),a=t.mean(r),s=e.length,o=new Array(s);for(n=0;n<s;n++)o[n]=(e[n]-i)*(r[n]-a);return t.sum(o)/(s-1)},t.corrcoeff=function(e,r){return t.covariance(e,r)/t.stdev(e,1)/t.stdev(r,1)},t.spearmancoeff=function(e,r){return e=t.rank(e),r=t.rank(r),t.corrcoeff(e,r)},t.stanMoment=function(r,n){for(var i=t.mean(r),a=t.stdev(r),s=r.length,o=0,l=0;l<s;l++)o+=e.pow((r[l]-i)/a,n);return o/r.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var a=t.prototype;!function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(n,i){var s=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,a[e].call(l,n))}),this;if(this.length>1){for(l=!0===n?this:this.transpose();o<l.length;o++)s[o]=t[e](l[o]);return s}return t[e](this[0],n)}})(e[n])}("cumsum cumprod".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(n,i){var s=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,a[e].call(l,n))}),this;if(this.length>1){for("sumrow"!==e&&(l=!0===n?this:this.transpose());o<l.length;o++)s[o]=t[e](l[o]);return!0===n?t[e](t.utils.toVector(s)):s}return t[e](this[0],n)}})(e[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(){var n,i=[],s=0,o=this,l=Array.prototype.slice.call(arguments);if(r(l[l.length-1])){n=l[l.length-1];var c=l.slice(0,l.length-1);return setTimeout(function(){n.call(o,a[e].apply(o,c))}),this}n=void 0;var u=function(r){return t[e].apply(o,[r].concat(l))};if(this.length>1){for(o=o.transpose();s<o.length;s++)i[s]=u(o[s]);return i}return u(this[0])}})(e[n])}("quantiles percentileOfScore".split(" "))}(t,Math),function(t,e){t.gammaln=function(t){var r,n,i,a=0,s=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],o=1.000000000190015;for(i=(n=r=t)+5.5,i-=(r+.5)*e.log(i);a<6;a++)o+=s[a]/++n;return e.log(2.5066282746310007*o/r)-i},t.loggam=function(t){var r,n,i,a,s,o,l,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,l=0,1==t||2==t)return 0;for(t<=7&&(r=t+(l=e.floor(7-t))),n=1/(r*r),i=2*e.PI,s=c[9],o=8;o>=0;o--)s*=n,s+=c[o];if(a=s/r+.5*e.log(i)+(r-.5)*e.log(r)-r,t<=7)for(o=1;o<=l;o++)a-=e.log(r-1),r-=1;return a},t.gammafn=function(t){var r,n,i,a,s=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],o=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,c=0,u=0,h=0,d=t;if(t>171.6243769536076)return 1/0;if(d<=0){if(!(a=d%1+36e-17))return 1/0;l=(1&d?-1:1)*e.PI/e.sin(e.PI*a),d=1-d}for(i=d,n=d<1?d++:(d-=c=(0|d)-1)-1,r=0;r<8;++r)h=(h+s[r])*n,u=u*n+o[r];if(a=h/u+1,i<d)a/=i;else if(i>d)for(r=0;r<c;++r)a*=d,d++;return l&&(a=l/a),a},t.gammap=function(e,r){return t.lowRegGamma(e,r)*t.gammafn(e)},t.lowRegGamma=function(r,n){var i,a=t.gammaln(r),s=r,o=1/r,l=o,c=n+1-r,u=1/1e-30,h=1/c,d=h,f=1,p=-~(8.5*e.log(r>=1?r:1/r)+.4*r+17);if(n<0||r<=0)return NaN;if(n<r+1){for(;f<=p;f++)o+=l*=n/++s;return o*e.exp(-n+r*e.log(n)-a)}for(;f<=p;f++)d*=(h=1/(h=(i=-f*(f-r))*h+(c+=2)))*(u=c+i/u);return 1-d*e.exp(-n+r*e.log(n)-a)},t.factorialln=function(e){return e<0?NaN:t.gammaln(e+1)},t.factorial=function(e){return e<0?NaN:t.gammafn(e+1)},t.combination=function(r,n){return r>170||n>170?e.exp(t.combinationln(r,n)):t.factorial(r)/t.factorial(n)/t.factorial(r-n)},t.combinationln=function(e,r){return t.factorialln(e)-t.factorialln(r)-t.factorialln(e-r)},t.permutation=function(e,r){return t.factorial(e)/t.factorial(e-r)},t.betafn=function(r,n){if(!(r<=0||n<=0))return r+n>170?e.exp(t.betaln(r,n)):t.gammafn(r)*t.gammafn(n)/t.gammafn(r+n)},t.betaln=function(e,r){return t.gammaln(e)+t.gammaln(r)-t.gammaln(e+r)},t.betacf=function(t,r,n){var i,a,s,o,l=1e-30,c=1,u=r+n,h=r+1,d=r-1,f=1,p=1-u*t/h;for(e.abs(p)<l&&(p=l),o=p=1/p;c<=100&&(p=1+(a=c*(n-c)*t/((d+(i=2*c))*(r+i)))*p,e.abs(p)<l&&(p=l),f=1+a/f,e.abs(f)<l&&(f=l),o*=(p=1/p)*f,p=1+(a=-(r+c)*(u+c)*t/((r+i)*(h+i)))*p,e.abs(p)<l&&(p=l),f=1+a/f,e.abs(f)<l&&(f=l),o*=s=(p=1/p)*f,!(e.abs(s-1)<3e-7));c++);return o},t.gammapinv=function(r,n){var i,a,s,o,l,c,u=0,h=n-1,d=1e-8,f=t.gammaln(n);if(r>=1)return e.max(100,n+100*e.sqrt(n));if(r<=0)return 0;for(n>1?(l=e.log(h),c=e.exp(h*(l-1)-f),o=r<.5?r:1-r,i=(2.30753+.27061*(a=e.sqrt(-2*e.log(o))))/(1+a*(.99229+.04481*a))-a,r<.5&&(i=-i),i=e.max(.001,n*e.pow(1-1/(9*n)-i/(3*e.sqrt(n)),3))):i=r<(a=1-n*(.253+.12*n))?e.pow(r/a,1/n):1-e.log(1-(r-a)/(1-a));u<12;u++){if(i<=0)return 0;if((i-=a=(s=(t.lowRegGamma(n,i)-r)/(a=n>1?c*e.exp(-(i-h)+h*(e.log(i)-l)):e.exp(-i+h*e.log(i)-f)))/(1-.5*e.min(1,s*((n-1)/i-1))))<=0&&(i=.5*(i+a)),e.abs(a)<d*i)break}return i},t.erf=function(t){var r,n,i,a,s=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],o=s.length-1,l=!1,c=0,u=0;for(t<0&&(t=-t,l=!0),n=4*(r=2/(2+t))-2;o>0;o--)i=c,c=n*c-u+s[o],u=i;return a=r*e.exp(-t*t+.5*(s[0]+n*c)-u),l?a-1:1-a},t.erfc=function(e){return 1-t.erf(e)},t.erfcinv=function(r){var n,i,a,s,o=0;if(r>=2)return-100;if(r<=0)return 100;for(s=r<1?r:2-r,n=-.70711*((2.30753+.27061*(a=e.sqrt(-2*e.log(s/2))))/(1+a*(.99229+.04481*a))-a);o<2;o++)n+=(i=t.erfc(n)-s)/(1.1283791670955126*e.exp(-n*n)-n*i);return r<1?n:-n},t.ibetainv=function(r,n,i){var a,s,o,l,c,u,h,d,f,p,m=1e-8,g=n-1,v=i-1,y=0;if(r<=0)return 0;if(r>=1)return 1;for(n>=1&&i>=1?(o=r<.5?r:1-r,u=(2.30753+.27061*(l=e.sqrt(-2*e.log(o))))/(1+l*(.99229+.04481*l))-l,r<.5&&(u=-u),h=(u*u-3)/6,d=2/(1/(2*n-1)+1/(2*i-1)),f=u*e.sqrt(h+d)/d-(1/(2*i-1)-1/(2*n-1))*(h+5/6-2/(3*d)),u=n/(n+i*e.exp(2*f))):(a=e.log(n/(n+i)),s=e.log(i/(n+i)),u=r<(l=e.exp(n*a)/n)/(f=l+(c=e.exp(i*s)/i))?e.pow(n*f*r,1/n):1-e.pow(i*f*(1-r),1/i)),p=-t.gammaln(n)-t.gammaln(i)+t.gammaln(n+i);y<10;y++){if(0===u||1===u)return u;if((u-=l=(c=(t.ibeta(u,n,i)-r)/(l=e.exp(g*e.log(u)+v*e.log(1-u)+p)))/(1-.5*e.min(1,c*(g/u-v/(1-u)))))<=0&&(u=.5*(u+l)),u>=1&&(u=.5*(u+l+1)),e.abs(l)<m*u&&y>0)break}return u},t.ibeta=function(r,n,i){var a=0===r||1===r?0:e.exp(t.gammaln(n+i)-t.gammaln(n)-t.gammaln(i)+n*e.log(r)+i*e.log(1-r));return!(r<0||r>1)&&(r<(n+1)/(n+i+2)?a*t.betacf(r,n,i)/n:1-a*t.betacf(1-r,i,n)/i)},t.randn=function(r,n){var i,a,s,o,l;if(n||(n=r),r)return t.create(r,n,function(){return t.randn()});do{i=t._random_fn(),a=1.7156*(t._random_fn()-.5),l=(s=i-.449871)*s+(o=e.abs(a)+.386595)*(.196*o-.25472*s)}while(l>.27597&&(l>.27846||a*a>-4*e.log(i)*i*i));return a/i},t.randg=function(r,n,i){var a,s,o,l,c,u,h=r;if(i||(i=n),r||(r=1),n)return(u=t.zeros(n,i)).alter(function(){return t.randg(r)}),u;r<1&&(r+=1),a=r-1/3,s=1/e.sqrt(9*a);do{do{l=1+s*(c=t.randn())}while(l<=0);l*=l*l,o=t._random_fn()}while(o>1-.331*e.pow(c,4)&&e.log(o)>.5*c*c+a*(1-l+e.log(l)));if(r==h)return a*l;do{o=t._random_fn()}while(0===o);return e.pow(o,1/h)*a*l},function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t.map(this,function(r){return t[e](r)}))}})(e[r])}("gammaln gammafn factorial factorialln".split(" ")),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t[e].apply(null,arguments))}})(e[r])}("randn".split(" "))}(t,Math),function(t,e){function r(t,r,n,i){for(var a,s=0,o=1,l=1,c=1,u=0,h=0;e.abs((l-h)/l)>i;)h=l,o=c+(a=-(r+u)*(r+n+u)*t/(r+2*u)/(r+2*u+1))*o,l=(s=l+a*s)+(a=(u+=1)*(n-u)*t/(r+2*u-1)/(r+2*u))*l,s/=c=o+a*c,o/=c,l/=c,c=1;return l/r}function n(t){return t/e.abs(t)}function i(r,n,i){var a=12,s=6,o=-30,l=-50,c=60,u=8,h=3,d=2,f=3,p=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],m=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],g=.5*r;if(g>=u)return 1;var v,y=2*t.normal.cdf(g,0,1,1,0)-1;y=y>=e.exp(l/i)?e.pow(y,i):0;for(var b=g,w=(u-g)/(v=r>h?d:f),x=b+w,k=0,A=i-1,_=1;_<=v;_++){for(var $=0,S=.5*(x+b),E=.5*(x-b),M=1;M<=a;M++){var T,N=S+E*(s<M?p[(T=a-M+1)-1]:-p[(T=M)-1]),C=N*N;if(C>c)break;var R=2*t.normal.cdf(N,0,1,1,0)*.5-2*t.normal.cdf(N,r,1,1,0)*.5;R>=e.exp(o/A)&&($+=R=m[T-1]*e.exp(-.5*C)*e.pow(R,A))}k+=$*=2*E*i/e.sqrt(2*e.PI),b=x,x+=w}return(y+=k)<=e.exp(o/n)?0:(y=e.pow(y,n))>=1?1:y}function a(t,r,n){var i=.322232421088,a=.099348462606,s=-1,o=.588581570495,l=-.342242088547,c=.531103462366,u=-.204231210125,h=.10353775285,d=-453642210148e-16,f=.0038560700634,p=.8832,m=.2368,g=1.208,v=1.4142,y=120,b=.5-.5*t,w=e.sqrt(e.log(1/(b*b))),x=w+((((w*d+u)*w+l)*w+s)*w+i)/((((w*f+h)*w+c)*w+o)*w+a);n<y&&(x+=(x*x*x+x)/n/4);var k=p-m*x;return n<y&&(k+=-1.214/n+g*x/n),x*(k*e.log(r-1)+v)}!function(e){for(var r=0;r<e.length;r++)(function(e){t[e]=function t(e,r,n){return this instanceof t?(this._a=e,this._b=r,this._c=n,this):new t(e,r,n)},t.fn[e]=function(r,n,i){var a=t[e](r,n,i);return a.data=this,a},t[e].prototype.sample=function(r){var n=this._a,i=this._b,a=this._c;return r?t.alter(r,function(){return t[e].sample(n,i,a)}):t[e].sample(n,i,a)},function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(n){var i=this._a,a=this._b,s=this._c;return n||0===n||(n=this.data),"number"!=typeof n?t.fn.map.call(n,function(n){return t[e][r](n,i,a,s)}):t[e][r](n,i,a,s)}})(r[n])}("pdf cdf inv".split(" ")),function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(){return t[e][r](this._a,this._b,this._c)}})(r[n])}("mean median mode variance".split(" "))})(e[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,n,i){return r>1||r<0?0:1==n&&1==i?1:n<512&&i<512?e.pow(r,n-1)*e.pow(1-r,i-1)/t.betafn(n,i):e.exp((n-1)*e.log(r)+(i-1)*e.log(1-r)-t.betaln(n,i))},cdf:function(e,r,n){return e>1||e<0?1*(e>1):t.ibeta(e,r,n)},inv:function(e,r,n){return t.ibetainv(e,r,n)},mean:function(t,e){return t/(t+e)},median:function(e,r){return t.ibetainv(.5,e,r)},mode:function(t,e){return(t-1)/(t+e-2)},sample:function(e,r){var n=t.randg(e);return n/(n+t.randg(r))},variance:function(t,r){return t*r/(e.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,n,i){var a;return r<0?0:n<=2?0===r&&n<2?1/0:0===r&&2===n?1:1/t.betafn(n/2,i/2)*e.pow(n/i,n/2)*e.pow(r,n/2-1)*e.pow(1+n/i*r,-(n+i)/2):(a=n*r/(i+r*n),n*(i/(i+r*n))/2*t.binomial.pdf((n-2)/2,(n+i-2)/2,a))},cdf:function(e,r,n){return e<0?0:t.ibeta(r*e/(r*e+n),r/2,n/2)},inv:function(e,r,n){return n/(r*(1/t.ibetainv(e,r/2,n/2)-1))},mean:function(t,e){return e>2?e/(e-2):void 0},mode:function(t,e){return t>2?e*(t-2)/(t*(e+2)):void 0},sample:function(e,r){return 2*t.randg(e/2)/e/(2*t.randg(r/2)/r)},variance:function(t,e){if(!(e<=4))return 2*e*e*(t+e-2)/(t*(e-2)*(e-2)*(e-4))}}),t.extend(t.cauchy,{pdf:function(t,r,n){return n<0?0:n/(e.pow(t-r,2)+e.pow(n,2))/e.PI},cdf:function(t,r,n){return e.atan((t-r)/n)/e.PI+.5},inv:function(t,r,n){return r+n*e.tan(e.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,n){return t.randn()*e.sqrt(1/(2*t.randg(.5)))*n+r}}),t.extend(t.chisquare,{pdf:function(r,n){return r<0?0:0===r&&2===n?.5:e.exp((n/2-1)*e.log(r)-r/2-n/2*e.log(2)-t.gammaln(n/2))},cdf:function(e,r){return e<0?0:t.lowRegGamma(r/2,e/2)},inv:function(e,r){return 2*t.gammapinv(e,.5*r)},mean:function(t){return t},median:function(t){return t*e.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(e){return 2*t.randg(e/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*e.exp(-r*t)},cdf:function(t,r){return t<0?0:1-e.exp(-r*t)},inv:function(t,r){return-e.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*e.log(2)},mode:function(){return 0},sample:function(r){return-1/r*e.log(t._random_fn())},variance:function(t){return e.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,n,i){return r<0?0:0===r&&1===n?1/i:e.exp((n-1)*e.log(r)-r/i-t.gammaln(n)-n*e.log(i))},cdf:function(e,r,n){return e<0?0:t.lowRegGamma(r,e/n)},inv:function(e,r,n){return t.gammapinv(e,r)*n},mean:function(t,e){return t*e},mode:function(t,e){if(t>1)return(t-1)*e},sample:function(e,r){return t.randg(e)*r},variance:function(t,e){return t*e*e}}),t.extend(t.invgamma,{pdf:function(r,n,i){return r<=0?0:e.exp(-(n+1)*e.log(r)-i/r-t.gammaln(n)+n*e.log(i))},cdf:function(e,r,n){return e<=0?0:1-t.lowRegGamma(r,n/e)},inv:function(e,r,n){return n/t.gammapinv(1-e,r)},mean:function(t,e){return t>1?e/(t-1):void 0},mode:function(t,e){return e/(t+1)},sample:function(e,r){return r/t.randg(e)},variance:function(t,e){if(!(t<=2))return e*e/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,n){return 0===t&&1===r?n:1===t&&1===n?r:e.exp(e.log(r)+e.log(n)+(r-1)*e.log(t)+(n-1)*e.log(1-e.pow(t,r)))},cdf:function(t,r,n){return t<0?0:t>1?1:1-e.pow(1-e.pow(t,r),n)},inv:function(t,r,n){return e.pow(1-e.pow(1-t,1/n),1/r)},mean:function(e,r){return r*t.gammafn(1+1/e)*t.gammafn(r)/t.gammafn(1+1/e+r)},median:function(t,r){return e.pow(1-e.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return e.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,n){return t<=0?0:e.exp(-e.log(t)-.5*e.log(2*e.PI)-e.log(n)-e.pow(e.log(t)-r,2)/(2*n*n))},cdf:function(r,n,i){return r<0?0:.5+.5*t.erf((e.log(r)-n)/e.sqrt(2*i*i))},inv:function(r,n,i){return e.exp(-1.4142135623730951*i*t.erfcinv(2*r)+n)},mean:function(t,r){return e.exp(t+r*r/2)},median:function(t){return e.exp(t)},mode:function(t,r){return e.exp(t-r*r)},sample:function(r,n){return e.exp(t.randn()*n+r)},variance:function(t,r){return(e.exp(r*r)-1)*e.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,n,i){var a=1e-14;return e.abs(i)<a?t.studentt.pdf(r,n):e.abs(r)<a?e.exp(t.gammaln((n+1)/2)-i*i/2-.5*e.log(e.PI*n)-t.gammaln(n/2)):n/r*(t.noncentralt.cdf(r*e.sqrt(1+2/n),n+2,i)-t.noncentralt.cdf(r,n,i))},cdf:function(r,n,i){var a=1e-14,s=200;if(e.abs(i)<a)return t.studentt.cdf(r,n);var o=!1;r<0&&(o=!0,i=-i);for(var l=t.normal.cdf(-i,0,1),c=a+1,u=c,h=r*r/(r*r+n),d=0,f=e.exp(-i*i/2),p=e.exp(-i*i/2-.5*e.log(2)-t.gammaln(1.5))*i;d<s||u>a||c>a;)u=c,d>0&&(f*=i*i/(2*d),p*=i*i/(2*(d+.5))),l+=.5*(c=f*t.beta.cdf(h,d+.5,n/2)+p*t.beta.cdf(h,d+1,n/2)),d++;return o?1-l:l}}),t.extend(t.normal,{pdf:function(t,r,n){return e.exp(-.5*e.log(2*e.PI)-e.log(n)-e.pow(t-r,2)/(2*n*n))},cdf:function(r,n,i){return.5*(1+t.erf((r-n)/e.sqrt(2*i*i)))},inv:function(e,r,n){return-1.4142135623730951*n*t.erfcinv(2*e)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(e,r){return t.randn()*r+e},variance:function(t,e){return e*e}}),t.extend(t.pareto,{pdf:function(t,r,n){return t<r?0:n*e.pow(r,n)/e.pow(t,n+1)},cdf:function(t,r,n){return t<r?0:1-e.pow(r/t,n)},inv:function(t,r,n){return r/e.pow(1-t,1/n)},mean:function(t,r){if(!(r<=1))return r*e.pow(t,r)/(r-1)},median:function(t,r){return t*(r*e.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(e.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,n){return n=n>1e100?1e100:n,1/(e.sqrt(n)*t.betafn(.5,n/2))*e.pow(1+r*r/n,-(n+1)/2)},cdf:function(r,n){var i=n/2;return t.ibeta((r+e.sqrt(r*r+n))/(2*e.sqrt(r*r+n)),i,i)},inv:function(r,n){var i=t.ibetainv(2*e.min(r,1-r),.5*n,.5);return i=e.sqrt(n*(1-i)/i),r>.5?i:-i},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*e.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,n){return t<0||r<0||n<0?0:n/r*e.pow(t/r,n-1)*e.exp(-e.pow(t/r,n))},cdf:function(t,r,n){return t<0?0:1-e.exp(-e.pow(t/r,n))},inv:function(t,r,n){return r*e.pow(-e.log(1-t),1/n)},mean:function(e,r){return e*t.gammafn(1+1/r)},median:function(t,r){return t*e.pow(e.log(2),1/r)},mode:function(t,r){return r<=1?0:t*e.pow((r-1)/r,1/r)},sample:function(r,n){return r*e.pow(-e.log(t._random_fn()),1/n)},variance:function(r,n){return r*r*t.gammafn(1+2/n)-e.pow(t.weibull.mean(r,n),2)}}),t.extend(t.uniform,{pdf:function(t,e,r){return t<e||t>r?0:1/(r-e)},cdf:function(t,e,r){return t<e?0:t<r?(t-e)/(r-e):1},inv:function(t,e,r){return e+t*(r-e)},mean:function(t,e){return.5*(t+e)},median:function(e,r){return t.mean(e,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,r){return e/2+r/2+(r/2-e/2)*(2*t._random_fn()-1)},variance:function(t,r){return e.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,n,i){return 0===i||1===i?n*i===r?1:0:t.combination(n,r)*e.pow(i,r)*e.pow(1-i,n-r)},cdf:function(n,i,a){var s,o=1e-10;if(n<0)return 0;if(n>=i)return 1;if(a<0||a>1||i<=0)return NaN;var l=a,c=(n=e.floor(n))+1,u=i-n,h=c+u,d=e.exp(t.gammaln(h)-t.gammaln(u)-t.gammaln(c)+c*e.log(l)+u*e.log(1-l));return s=l<(c+1)/(h+2)?d*r(l,c,u,o):1-d*r(1-l,u,c,o),e.round(1/o*(1-s))/(1/o)}}),t.extend(t.negbin,{pdf:function(r,n,i){return r===r>>>0&&(r<0?0:t.combination(r+n-1,n-1)*e.pow(1-i,r)*e.pow(i,n))},cdf:function(e,r,n){var i=0,a=0;if(e<0)return 0;for(;a<=e;a++)i+=t.negbin.pdf(a,r,n);return i}}),t.extend(t.hypgeom,{pdf:function(r,n,i,a){if(r!=r|0)return!1;if(r<0||r<i-(n-a))return 0;if(r>a||r>i)return 0;if(2*i>n)return 2*a>n?t.hypgeom.pdf(n-i-a+r,n,n-i,n-a):t.hypgeom.pdf(a-r,n,n-i,a);if(2*a>n)return t.hypgeom.pdf(i-r,n,i,n-a);if(i<a)return t.hypgeom.pdf(r,n,a,i);for(var s=1,o=0,l=0;l<r;l++){for(;s>1&&o<a;)s*=1-i/(n-o),o++;s*=(a-l)*(i-l)/((l+1)*(n-i-a+l+1))}for(;o<a;o++)s*=1-i/(n-o);return e.min(1,e.max(0,s))},cdf:function(r,n,i,a){if(r<0||r<i-(n-a))return 0;if(r>=a||r>=i)return 1;if(2*i>n)return 2*a>n?t.hypgeom.cdf(n-i-a+r,n,n-i,n-a):1-t.hypgeom.cdf(a-r-1,n,n-i,a);if(2*a>n)return 1-t.hypgeom.cdf(i-r-1,n,i,n-a);if(i<a)return t.hypgeom.cdf(r,n,a,i);for(var s=1,o=1,l=0,c=0;c<r;c++){for(;s>1&&l<a;){var u=1-i/(n-l);o*=u,s*=u,l++}s+=o*=(a-c)*(i-c)/((c+1)*(n-i-a+c+1))}for(;l<a;l++)s*=1-i/(n-l);return e.min(1,e.max(0,s))}}),t.extend(t.poisson,{pdf:function(r,n){return n<0||r%1!=0||r<0?0:e.pow(n,r)*e.exp(-n)/t.factorial(r)},cdf:function(e,r){var n=[],i=0;if(e<0)return 0;for(;i<=e;i++)n.push(t.poisson.pdf(i,r));return t.sum(n)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var n=1,i=0,a=e.exp(-r);do{i++,n*=t._random_fn()}while(n>a);return i-1},sampleLarge:function(r){var n,i,a,s,o,l,c,u,h,d,f=r;for(s=e.sqrt(f),o=e.log(f),l=.02483*(c=.931+2.53*s)-.059,u=1.1239+1.1328/(c-3.4),h=.9277-3.6224/(c-2);;){if(i=e.random()-.5,a=e.random(),d=.5-e.abs(i),n=e.floor((2*l/d+c)*i+f+.43),d>=.07&&a<=h)return n;if(!(n<0||d<.013&&a>d)&&e.log(a)+e.log(u)-e.log(l/(d*d)+c)<=n*o-f-t.loggam(n+1))return n}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,e,r,n){return r<=e||n<e||n>r?NaN:t<e||t>r?0:t<n?2*(t-e)/((r-e)*(n-e)):t===n?2/(r-e):2*(r-t)/((r-e)*(r-n))},cdf:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=r?0:t>=n?1:t<=i?e.pow(t-r,2)/((n-r)*(i-r)):1-e.pow(n-t,2)/((n-r)*(n-i))},inv:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=(i-r)/(n-r)?r+(n-r)*e.sqrt(t*((i-r)/(n-r))):r+(n-r)*(1-e.sqrt((1-t)*(1-(i-r)/(n-r))))},mean:function(t,e,r){return(t+e+r)/3},median:function(t,r,n){return n<=(t+r)/2?r-e.sqrt((r-t)*(r-n))/e.sqrt(2):n>(t+r)/2?t+e.sqrt((r-t)*(n-t))/e.sqrt(2):void 0},mode:function(t,e,r){return r},sample:function(r,n,i){var a=t._random_fn();return a<(i-r)/(n-r)?r+e.sqrt(a*(n-r)*(i-r)):n-e.sqrt((1-a)*(n-r)*(n-i))},variance:function(t,e,r){return(t*t+e*e+r*r-t*e-t*r-e*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,n){return n<=r?NaN:t<=r||t>=n?0:2/e.PI*e.pow(e.pow(n-r,2)-e.pow(2*t-r-n,2),-.5)},cdf:function(t,r,n){return t<r?0:t<n?2/e.PI*e.asin(e.sqrt((t-r)/(n-r))):1},inv:function(t,r,n){return r+(.5-.5*e.cos(e.PI*t))*(n-r)},mean:function(t,e){return e<=t?NaN:(t+e)/2},median:function(t,e){return e<=t?NaN:(t+e)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,n){return(r+n)/2+(n-r)/2*e.sin(2*e.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:e.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,n){return n<=0?0:e.exp(-e.abs(t-r)/n)/(2*n)},cdf:function(t,r,n){return n<=0?0:t<r?.5*e.exp((t-r)/n):1-.5*e.exp(-(t-r)/n)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,e){return 2*e*e},sample:function(r,i){var a=t._random_fn()-.5;return r-i*n(a)*e.log(1-2*e.abs(a))}}),t.extend(t.tukey,{cdf:function(r,n,a){var s=1,o=n,l=16,c=8,u=-30,h=1e-14,d=100,f=800,p=5e3,m=25e3,g=1,v=.5,y=.25,b=.125,w=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],x=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(a<2||s<1||o<2)return NaN;if(!Number.isFinite(r))return 1;if(a>m)return i(r,s,o);var k,A=.5*a,_=A*e.log(a)-a*e.log(2)-t.gammaln(A),$=A-1,S=.25*a;k=a<=d?g:a<=f?v:a<=p?y:b,_+=e.log(k);for(var E=0,M=1;M<=50;M++){for(var T=0,N=(2*M-1)*k,C=1;C<=l;C++){var R,P;c<C?(R=C-c-1,P=_+$*e.log(N+w[R]*k)-(w[R]*k+N)*S):(R=C-1,P=_+$*e.log(N-w[R]*k)+(w[R]*k-N)*S),P>=u&&(T+=i(c<C?r*e.sqrt(.5*(w[R]*k+N)):r*e.sqrt(.5*(-w[R]*k+N)),s,o)*x[R]*e.exp(P))}if(M*k>=1&&T<=h)break;E+=T}if(T>h)throw new Error("tukey.cdf failed to converge");return E>1&&(E=1),E},inv:function(r,n,i){var s=1e-4,o=50;if(i<2||n<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var l,c=a(r,n,i),u=t.tukey.cdf(c,n,i)-r;l=u>0?e.max(0,c-1):c+1;for(var h,d=t.tukey.cdf(l,n,i)-r,f=1;f<o;f++)if(h=l-d*(l-c)/(d-u),u=d,c=l,h<0&&(h=0,d=-r),d=t.tukey.cdf(h,n,i)-r,l=h,e.abs(l-c)<s)return h;throw new Error("tukey.inv failed to converge")}})}(t,Math),function(t,e){var r=Array.prototype.push,n=t.utils.isArray;function i(e){return n(e)||e instanceof t}t.extend({add:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t+r[e][n]})):t.map(e,function(t){return t+r})},subtract:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t-r[e][n]||0})):t.map(e,function(t){return t-r})},divide:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.multiply(e,t.inv(r))):t.map(e,function(t){return t/r})},multiply:function(e,r){var n,a,s,o,l,c,u,h;if(void 0===e.length&&void 0===r.length)return e*r;if(l=e.length,c=e[0].length,u=t.zeros(l,s=i(r)?r[0].length:c),h=0,i(r)){for(;h<s;h++)for(n=0;n<l;n++){for(o=0,a=0;a<c;a++)o+=e[n][a]*r[a][h];u[n][h]=o}return 1===l&&1===h?u[0][0]:u}return t.map(e,function(t){return t*r})},outer:function(e,r){return t.multiply(e.map(function(t){return[t]}),[r])},dot:function(e,r){i(e[0])||(e=[e]),i(r[0])||(r=[r]);for(var n,a,s=1===e[0].length&&1!==e.length?t.transpose(e):e,o=1===r[0].length&&1!==r.length?t.transpose(r):r,l=[],c=0,u=s.length,h=s[0].length;c<u;c++){for(l[c]=[],n=0,a=0;a<h;a++)n+=s[c][a]*o[c][a];l[c]=n}return 1===l.length?l[0]:l},pow:function(r,n){return t.map(r,function(t){return e.pow(t,n)})},exp:function(r){return t.map(r,function(t){return e.exp(t)})},log:function(r){return t.map(r,function(t){return e.log(t)})},abs:function(r){return t.map(r,function(t){return e.abs(t)})},norm:function(t,r){var n=0,a=0;for(isNaN(r)&&(r=2),i(t[0])&&(t=t[0]);a<t.length;a++)n+=e.pow(e.abs(t[a]),r);return e.pow(n,1/r)},angle:function(r,n){return e.acos(t.dot(r,n)/(t.norm(r)*t.norm(n)))},aug:function(t,e){var n,i=[];for(n=0;n<t.length;n++)i.push(t[n].slice());for(n=0;n<i.length;n++)r.apply(i[n],e[n]);return i},inv:function(e){for(var r,n=e.length,i=e[0].length,a=t.identity(n,i),s=t.gauss_jordan(e,a),o=[],l=0;l<n;l++)for(o[l]=[],r=i;r<s[0].length;r++)o[l][r-i]=s[l][r];return o},det:function t(e){if(2===e.length)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(var r=0,n=0;n<e.length;n++){for(var i=[],a=1;a<e.length;a++){i[a-1]=[];for(var s=0;s<e.length;s++)s<n?i[a-1][s]=e[a][s]:s>n&&(i[a-1][s-1]=e[a][s])}var o=n%2?-1:1;r+=t(i)*e[0][n]*o}return r},gauss_elimination:function(r,n){var i,a,s,o,l=0,c=0,u=r.length,h=r[0].length,d=1,f=0,p=[];for(i=(r=t.aug(r,n))[0].length,l=0;l<u;l++){for(a=r[l][l],c=l,o=l+1;o<h;o++)a<e.abs(r[o][l])&&(a=r[o][l],c=o);if(c!=l)for(o=0;o<i;o++)s=r[l][o],r[l][o]=r[c][o],r[c][o]=s;for(c=l+1;c<u;c++)for(d=r[c][l]/r[l][l],o=l;o<i;o++)r[c][o]=r[c][o]-d*r[l][o]}for(l=u-1;l>=0;l--){for(f=0,c=l+1;c<=u-1;c++)f+=p[c]*r[l][c];p[l]=(r[l][i-1]-f)/r[l][l]}return p},gauss_jordan:function(r,n){var i,a,s,o=t.aug(r,n),l=o.length,c=o[0].length,u=0;for(a=0;a<l;a++){var h=a;for(s=a+1;s<l;s++)e.abs(o[s][a])>e.abs(o[h][a])&&(h=s);var d=o[a];for(o[a]=o[h],o[h]=d,s=a+1;s<l;s++)for(u=o[s][a]/o[a][a],i=a;i<c;i++)o[s][i]-=o[a][i]*u}for(a=l-1;a>=0;a--){for(u=o[a][a],s=0;s<a;s++)for(i=c-1;i>a-1;i--)o[s][i]-=o[a][i]*o[s][a]/u;for(o[a][a]/=u,i=l;i<c;i++)o[a][i]/=u}return o},triaUpSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],s=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),s=!0),t.arange(i-1,-1,-1).forEach(function(s){n=t.arange(s+1,i).map(function(t){return a[t]*e[s][t]}),a[s]=(r[s]-t.sum(n))/e[s][s]}),s?a.map(function(t){return[t]}):a},triaLowSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],s=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),s=!0),t.arange(i).forEach(function(i){n=t.arange(i).map(function(t){return e[i][t]*a[t]}),a[i]=(r[i]-t.sum(n))/e[i][i]}),s?a.map(function(t){return[t]}):a},lu:function(e){var r,n=e.length,i=t.identity(n),a=t.zeros(e.length,e[0].length);return t.arange(n).forEach(function(t){a[0][t]=e[0][t]}),t.arange(1,n).forEach(function(s){t.arange(s).forEach(function(n){r=t.arange(n).map(function(t){return i[s][t]*a[t][n]}),i[s][n]=(e[s][n]-t.sum(r))/a[n][n]}),t.arange(s,n).forEach(function(n){r=t.arange(s).map(function(t){return i[s][t]*a[t][n]}),a[s][n]=e[r.length][n]-t.sum(r)})}),[i,a]},cholesky:function(r){var n,i=r.length,a=t.zeros(r.length,r[0].length);return t.arange(i).forEach(function(s){n=t.arange(s).map(function(t){return e.pow(a[s][t],2)}),a[s][s]=e.sqrt(r[s][s]-t.sum(n)),t.arange(s+1,i).forEach(function(e){n=t.arange(s).map(function(t){return a[s][t]*a[e][t]}),a[e][s]=(r[s][e]-t.sum(n))/a[s][s]})}),a},gauss_jacobi:function(r,n,i,a){for(var s,o,l,c,u=0,h=0,d=r.length,f=[],p=[],m=[];u<d;u++)for(f[u]=[],p[u]=[],m[u]=[],h=0;h<d;h++)u>h?(f[u][h]=r[u][h],p[u][h]=m[u][h]=0):u<h?(p[u][h]=r[u][h],f[u][h]=m[u][h]=0):(m[u][h]=r[u][h],f[u][h]=p[u][h]=0);for(l=t.multiply(t.multiply(t.inv(m),t.add(f,p)),-1),o=t.multiply(t.inv(m),n),s=i,c=t.add(t.multiply(l,i),o),u=2;e.abs(t.norm(t.subtract(c,s)))>a;)s=c,c=t.add(t.multiply(l,s),o),u++;return c},gauss_seidel:function(r,n,i,a){for(var s,o,l,c,u,h=0,d=r.length,f=[],p=[],m=[];h<d;h++)for(f[h]=[],p[h]=[],m[h]=[],s=0;s<d;s++)h>s?(f[h][s]=r[h][s],p[h][s]=m[h][s]=0):h<s?(p[h][s]=r[h][s],f[h][s]=m[h][s]=0):(m[h][s]=r[h][s],f[h][s]=p[h][s]=0);for(c=t.multiply(t.multiply(t.inv(t.add(m,f)),p),-1),l=t.multiply(t.inv(t.add(m,f)),n),o=i,u=t.add(t.multiply(c,i),l),h=2;e.abs(t.norm(t.subtract(u,o)))>a;)o=u,u=t.add(t.multiply(c,o),l),h+=1;return u},SOR:function(r,n,i,a,s){for(var o,l,c,u,h,d=0,f=r.length,p=[],m=[],g=[];d<f;d++)for(p[d]=[],m[d]=[],g[d]=[],o=0;o<f;o++)d>o?(p[d][o]=r[d][o],m[d][o]=g[d][o]=0):d<o?(m[d][o]=r[d][o],p[d][o]=g[d][o]=0):(g[d][o]=r[d][o],p[d][o]=m[d][o]=0);for(u=t.multiply(t.inv(t.add(g,t.multiply(p,s))),t.subtract(t.multiply(g,1-s),t.multiply(m,s))),c=t.multiply(t.multiply(t.inv(t.add(g,t.multiply(p,s))),n),s),l=i,h=t.add(t.multiply(u,i),c),d=2;e.abs(t.norm(t.subtract(h,l)))>a;)l=h,h=t.add(t.multiply(u,l),c),d++;return h},householder:function(r){for(var n,i,a,s,o=r.length,l=r[0].length,c=0,u=[],h=[];c<o-1;c++){for(n=0,s=c+1;s<l;s++)n+=r[s][c]*r[s][c];for(n=(r[c+1][c]>0?-1:1)*e.sqrt(n),i=e.sqrt((n*n-r[c+1][c]*n)/2),(u=t.zeros(o,1))[c+1][0]=(r[c+1][c]-n)/(2*i),a=c+2;a<o;a++)u[a][0]=r[a][c]/(2*i);h=t.subtract(t.identity(o,l),t.multiply(t.multiply(u,t.transpose(u)),2)),r=t.multiply(h,t.multiply(r,h))}return r},QR:function(){var r=t.sum,n=t.arange;function i(i){var a,s,o,l=i.length,c=i[0].length,u=t.zeros(c,c);for(i=t.copy(i),s=0;s<c;s++){for(u[s][s]=e.sqrt(r(n(l).map(function(t){return i[t][s]*i[t][s]}))),a=0;a<l;a++)i[a][s]=i[a][s]/u[s][s];for(o=s+1;o<c;o++)for(u[s][o]=r(n(l).map(function(t){return i[t][s]*i[t][o]})),a=0;a<l;a++)i[a][o]=i[a][o]-i[a][s]*u[s][o]}return[i,u]}return i}(),lstsq:function(){function e(e){var r=(e=t.copy(e)).length,n=t.identity(r);return t.arange(r-1,-1,-1).forEach(function(r){t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),e[r][r])),t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),e[r][r])),t.arange(r).forEach(function(i){var a=t.multiply(e[i][r],-1),s=t.slice(e,{row:i}),o=t.multiply(t.slice(e,{row:r}),a);t.sliceAssign(e,{row:i},t.add(s,o));var l=t.slice(n,{row:i}),c=t.multiply(t.slice(n,{row:r}),a);t.sliceAssign(n,{row:i},t.add(l,c))})}),n}function r(r,n){var i=!1;void 0===n[0].length&&(n=n.map(function(t){return[t]}),i=!0);var a=t.QR(r),s=a[0],o=a[1],l=r[0].length,c=t.slice(s,{col:{end:l}}),u=e(t.slice(o,{row:{end:l}})),h=t.transpose(c);void 0===h[0].length&&(h=[h]);var d=t.multiply(t.multiply(u,h),n);return void 0===d.length&&(d=[[d]]),i?d.map(function(t){return t[0]}):d}return r}(),jacobi:function(r){for(var n,i,a,s,o,l,c,u=1,h=r.length,d=t.identity(h,h),f=[];1===u;){for(o=r[0][1],a=0,s=1,n=0;n<h;n++)for(i=0;i<h;i++)n!=i&&o<e.abs(r[n][i])&&(o=e.abs(r[n][i]),a=n,s=i);for(l=r[a][a]===r[s][s]?r[a][s]>0?e.PI/4:-e.PI/4:e.atan(2*r[a][s]/(r[a][a]-r[s][s]))/2,(c=t.identity(h,h))[a][a]=e.cos(l),c[a][s]=-e.sin(l),c[s][a]=e.sin(l),c[s][s]=e.cos(l),d=t.multiply(d,c),r=t.multiply(t.multiply(t.inv(c),r),c),u=0,n=1;n<h;n++)for(i=1;i<h;i++)n!=i&&e.abs(r[n][i])>.001&&(u=1)}for(n=0;n<h;n++)f.push(r[n][n]);return[d,f]},rungekutta:function(t,e,r,n,i,a){var s,o,l;if(2===a)for(;n<=r;)i+=((s=e*t(n,i))+(o=e*t(n+e,i+s)))/2,n+=e;if(4===a)for(;n<=r;)i+=((s=e*t(n,i))+2*(o=e*t(n+e/2,i+s/2))+2*(l=e*t(n+e/2,i+o/2))+e*t(n+e,i+l))/6,n+=e;return i},romberg:function(t,r,n,i){for(var a,s,o,l,c,u=0,h=(n-r)/2,d=[],f=[],p=[];u<i/2;){for(c=t(r),o=r,l=0;o<=n;o+=h,l++)d[l]=o;for(a=d.length,o=1;o<a-1;o++)c+=(o%2!=0?4:2)*t(d[o]);c=h/3*(c+t(n)),p[u]=c,h/=2,u++}for(s=p.length,a=1;1!==s;){for(o=0;o<s-1;o++)f[o]=(e.pow(4,a)*p[o+1]-p[o])/(e.pow(4,a)-1);s=f.length,p=f,f=[],a++}return p},richardson:function(t,r,n,i){function a(t,e){for(var r,n=0,i=t.length;n<i;n++)t[n]===e&&(r=n);return r}for(var s,o,l,c,u,h=e.abs(n-t[a(t,n)+1]),d=0,f=[],p=[];i>=h;)s=a(t,n+i),o=a(t,n),f[d]=(r[s]-2*r[o]+r[2*o-s])/(i*i),i/=2,d++;for(c=f.length,l=1;1!=c;){for(u=0;u<c-1;u++)p[u]=(e.pow(4,l)*f[u+1]-f[u])/(e.pow(4,l)-1);c=p.length,f=p,p=[],l++}return f},simpson:function(t,e,r,n){for(var i,a=(r-e)/n,s=t(e),o=[],l=e,c=0,u=1;l<=r;l+=a,c++)o[c]=l;for(i=o.length;u<i-1;u++)s+=(u%2!=0?4:2)*t(o[u]);return a/3*(s+t(r))},hermite:function(t,e,r,n){for(var i,a=t.length,s=0,o=0,l=[],c=[],u=[],h=[];o<a;o++){for(l[o]=1,i=0;i<a;i++)o!=i&&(l[o]*=(n-t[i])/(t[o]-t[i]));for(c[o]=0,i=0;i<a;i++)o!=i&&(c[o]+=1/(t[o]-t[i]));u[o]=(1-2*(n-t[o])*c[o])*(l[o]*l[o]),h[o]=(n-t[o])*(l[o]*l[o]),s+=u[o]*e[o]+h[o]*r[o]}return s},lagrange:function(t,e,r){for(var n,i,a=0,s=0,o=t.length;s<o;s++){for(i=e[s],n=0;n<o;n++)s!=n&&(i*=(r-t[n])/(t[s]-t[n]));a+=i}return a},cubic_spline:function(e,r,n){for(var i,a=e.length,s=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[];s<a-1;s++)h[s]=e[s+1]-e[s];for(c[0]=0,s=1;s<a-1;s++)c[s]=3/h[s]*(r[s+1]-r[s])-3/h[s-1]*(r[s]-r[s-1]);for(s=1;s<a-1;s++)o[s]=[],l[s]=[],o[s][s-1]=h[s-1],o[s][s]=2*(h[s-1]+h[s]),o[s][s+1]=h[s],l[s][0]=c[s];for(u=t.multiply(t.inv(o),l),i=0;i<a-1;i++)d[i]=(r[i+1]-r[i])/h[i]-h[i]*(u[i+1][0]+2*u[i][0])/3,f[i]=(u[i+1][0]-u[i][0])/(3*h[i]);for(i=0;i<a&&!(e[i]>n);i++);return r[i-=1]+(n-e[i])*d[i]+t.sq(n-e[i])*u[i]+(n-e[i])*t.sq(n-e[i])*f[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(e){var r,n,i=e.length,a=e[0].length,s=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[],p=[],m=[],g=[];for(s=0;s<i;s++)o[s]=t.sum(e[s])/a;for(s=0;s<a;s++)for(f[s]=[],r=0;r<i;r++)f[s][r]=e[r][s]-o[r];for(f=t.transpose(f),s=0;s<i;s++)for(p[s]=[],r=0;r<i;r++)p[s][r]=t.dot([f[s]],[f[r]])/(a-1);for(m=(c=t.jacobi(p))[0],l=c[1],g=t.transpose(m),s=0;s<l.length;s++)for(r=s;r<l.length;r++)l[s]<l[r]&&(n=l[s],l[s]=l[r],l[r]=n,u=g[s],g[s]=g[r],g[r]=u);for(d=t.transpose(f),s=0;s<i;s++)for(h[s]=[],r=0;r<d.length;r++)h[s][r]=t.dot([g[s]],[d[r]]);return[e,l,g,h]}}),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(r,n){var i=this;return n?(setTimeout(function(){n.call(i,t.fn[e].call(i,r))},15),this):"number"==typeof t[e](this,r)?t[e](this,r):t(t[e](this,r))}})(e[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(t,Math),function(t,e){var r=[].slice,n=t.utils.isNumber,i=t.utils.isArray;function a(t,r,n,i){if(t>1||n>1||t<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var a=(t*r+n*i)/(r+i);return(t-n)/e.sqrt(a*(1-a)*(1/r+1/i))}t.extend({zscore:function(){var e=r.call(arguments);return n(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var n,a=r.call(arguments);return i(a[1])?(n=t.zscore(a[0],a[1],a[3]),1===a[2]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):a.length>2?(n=t.zscore(a[0],a[1],a[2]),1===a[3]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):(n=a[0],1===a[1]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1))}}),t.extend(t.fn,{zscore:function(t,e){return(t-this.mean())/this.stdev(e)},ztest:function(r,n,i){var a=e.abs(this.zscore(r,i));return 1===n?t.normal.cdf(-a,0,1):2*t.normal.cdf(-a,0,1)}}),t.extend({tscore:function(){var n=r.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/e.sqrt(n[3])):(n[0]-t.mean(n[1]))/(t.stdev(n[1],!0)/e.sqrt(n[1].length))},ttest:function(){var i,a=r.call(arguments);return 5===a.length?(i=e.abs(t.tscore(a[0],a[1],a[2],a[3])),1===a[4]?t.studentt.cdf(-i,a[3]-1):2*t.studentt.cdf(-i,a[3]-1)):n(a[1])?(i=e.abs(a[0]),1==a[2]?t.studentt.cdf(-i,a[1]-1):2*t.studentt.cdf(-i,a[1]-1)):(i=e.abs(t.tscore(a[0],a[1])),1==a[2]?t.studentt.cdf(-i,a[1].length-1):2*t.studentt.cdf(-i,a[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/e.sqrt(this.cols()))},ttest:function(r,n){return 1===n?1-t.studentt.cdf(e.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-e.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var n,i,a,s,o,l,c,u,h=r.call(arguments);if(1===h.length){for(o=new Array(h[0].length),c=0;c<h[0].length;c++)o[c]=h[0][c];h=o}for(i=new Array,c=0;c<h.length;c++)i=i.concat(h[c]);for(a=t.mean(i),n=0,c=0;c<h.length;c++)n+=h[c].length*e.pow(t.mean(h[c])-a,2);for(n/=h.length-1,l=0,c=0;c<h.length;c++)for(s=t.mean(h[c]),u=0;u<h[c].length;u++)l+=e.pow(h[c][u]-s,2);return n/(l/=i.length-h.length)},anovaftest:function(){var e,i,a,s,o=r.call(arguments);if(n(o[0]))return 1-t.centralF.cdf(o[0],o[1],o[2]);var l=t.anovafscore(o);for(e=o.length-1,a=0,s=0;s<o.length;s++)a+=o[s].length;return i=a-e-1,1-t.centralF.cdf(l,e,i)},ftest:function(e,r,n){return 1-t.centralF.cdf(e,r,n)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e,r=0;for(e=0;e<this.length;e++)r+=this[e].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var i,a,s,o,l,c=r.call(arguments);return n(c[0])?(i=c[0],a=c[1],s=c[2],o=c[3],l=c[4]):(i=t.mean(c[0]),a=t.mean(c[1]),s=c[0].length,o=c[1].length,l=c[2]),e.abs(i-a)/(l*e.sqrt((1/s+1/o)/2))},qtest:function(){var e,n=r.call(arguments);3===n.length?(e=n[0],n=n.slice(1)):7===n.length?(e=t.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(e=t.qscore(n[0],n[1],n[2]),n=n.slice(3));var i=n[0],a=n[1];return 1-t.tukey.cdf(e,a,i-a)},tukeyhsd:function(e){for(var r=t.pooledstdev(e),n=e.map(function(e){return t.mean(e)}),i=e.reduce(function(t,e){return t+e.length},0),a=[],s=0;s<e.length;++s)for(var o=s+1;o<e.length;++o){var l=t.qtest(n[s],n[o],e[s].length,e[o].length,r,i,e.length);a.push([[s,o],l])}return a}}),t.extend({normalci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.normal.inv(i[1]/2,0,1)*i[2]/e.sqrt(i[3])):e.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},tci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/e.sqrt(i[3])):e.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},significant:function(t,e){return t<e}}),t.extend(t.fn,{normalci:function(e,r){return t.normalci(e,r,this.toArray())},tci:function(e,r){return t.tci(e,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,r,n,i){var s=a(e,r,n,i);return t.ztest(s,1)},twoSidedDifferenceOfProportions:function(e,r,n,i){var s=a(e,r,n,i);return t.ztest(s,2)}})}(t,Math),t.models=function(){function e(e){var n=e[0].length,i=t.arange(n).map(function(i){var a=t.arange(n).filter(function(t){return t!==i});return r(t.col(e,i).map(function(t){return t[0]}),t.col(e,a))});return i}function r(e,r){var n=e.length,i=r[0].length-1,a=n-i-1,s=t.lstsq(r,e),o=t.multiply(r,s.map(function(t){return[t]})).map(function(t){return t[0]}),l=t.subtract(e,o),c=t.mean(e),u=t.sum(o.map(function(t){return Math.pow(t-c,2)})),h=t.sum(e.map(function(t,e){return Math.pow(t-o[e],2)})),d=u+h;return{exog:r,endog:e,nobs:n,df_model:i,df_resid:a,coef:s,predict:o,resid:l,ybar:c,SST:d,SSE:u,SSR:h,R2:u/d}}function n(r){var n=e(r.exog),i=Math.sqrt(r.SSR/r.df_resid),a=n.map(function(t){var e=t.SST,r=t.R2;return i/Math.sqrt(e*(1-r))}),s=r.coef.map(function(t,e){return(t-0)/a[e]}),o=s.map(function(e){var n=t.studentt.cdf(e,r.df_resid);return 2*(n>.5?1-n:n)}),l=t.studentt.inv(.975,r.df_resid),c=r.coef.map(function(t,e){var r=l*a[e];return[t-r,t+r]});return{se:a,t:s,p:o,sigmaHat:i,interval95:c}}function i(e){var r=e.R2/e.df_model/((1-e.R2)/e.df_resid),n=function(e,r,n){return t.beta.cdf(e/(n/r+e),r/2,n/2)};return{F_statistic:r,pvalue:1-n(r,e.df_model,e.df_resid)}}function a(t,e){var a=r(t,e),s=n(a),o=i(a),l=1-(1-a.R2)*((a.nobs-1)/a.df_resid);return a.t=s,a.f=o,a.adjust_R2=l,a}return{ols:a}}(),t.extend({buildxmatrix:function(){for(var e=new Array(arguments.length),r=0;r<arguments.length;r++){var n=[1];e[r]=n.concat(arguments[r])}return t(e)},builddxmatrix:function(){for(var e=new Array(arguments[0].length),r=0;r<arguments[0].length;r++){var n=[1];e[r]=n.concat(arguments[0][r])}return t(e)},buildjxmatrix:function(e){for(var r=new Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return t.builddxmatrix(r)},buildymatrix:function(e){return t(e).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(e,r){var n,i,a,s,o;if(e.cols()==r.rows()){if(r.rows()>1){for(s=[],n=0;n<e.rows();n++)for(s[n]=[],i=0;i<r.cols();i++){for(o=0,a=0;a<e.cols();a++)o+=e.toArray()[n][a]*r.toArray()[a][i];s[n][i]=o}return t(s)}for(s=[],n=0;n<e.rows();n++)for(s[n]=[],i=0;i<r.cols();i++){for(o=0,a=0;a<e.cols();a++)o+=e.toArray()[n][a]*r.toArray()[i];s[n][i]=o}return t(s)}},regress:function(e,r){var n=t.xtranspxinv(e),i=e.transpose(),a=t.matrixmult(t(n),i);return t.matrixmult(a,r)},regresst:function(e,r,n){var i=t.regress(e,r),a={anova:{}},s=t.jMatYBar(e,i);a.yBar=s;var o=r.mean();a.anova.residuals=t.residuals(r,s),a.anova.ssr=t.ssr(s,o),a.anova.msr=a.anova.ssr/(e[0].length-1),a.anova.sse=t.sse(r,s),a.anova.mse=a.anova.sse/(r.length-(e[0].length-1)-1),a.anova.sst=t.sst(r,o),a.anova.mst=a.anova.sst/(r.length-1),a.anova.r2=1-a.anova.sse/a.anova.sst,a.anova.r2<0&&(a.anova.r2=0),a.anova.fratio=a.anova.msr/a.anova.mse,a.anova.pvalue=t.anovaftest(a.anova.fratio,e[0].length-1,r.length-(e[0].length-1)-1),a.anova.rmse=Math.sqrt(a.anova.mse),a.anova.r2adj=1-a.anova.mse/a.anova.mst,a.anova.r2adj<0&&(a.anova.r2adj=0),a.stats=new Array(e[0].length);for(var l,c,u,h=t.xtranspxinv(e),d=0;d<i.length;d++)l=Math.sqrt(a.anova.mse*Math.abs(h[d][d])),c=Math.abs(i[d]/l),u=t.ttest(c,r.length-e[0].length-1,n),a.stats[d]=[i[d],l,c,u];return a.regress=i,a},xtranspx:function(e){return t.matrixmult(e.transpose(),e)},xtranspxinv:function(e){var r=t.matrixmult(e.transpose(),e);return t.inv(r)},jMatYBar:function(e,r){var n=t.matrixmult(e,r);return new t(n)},residuals:function(e,r){return t.matrixsubtract(e,r)},ssr:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},sse:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e[n],2);return r},sst:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},matrixsubtract:function(e,r){for(var n=new Array(e.length),i=0;i<e.length;i++){n[i]=new Array(e[i].length);for(var a=0;a<e[i].length;a++)n[i][a]=e[i][a]-r[i][a]}return t(n)}}),t.jStat=t,t}();var wz=e(bz.exports);class xz{static d={DEFAULT:1,MIN:-6,MAX:6,STEP:.01,JUMP:.1};static c={DEFAULT:0,MIN:-3,MAX:3,STEP:.01,JUMP:.1};static s={DEFAULT:1,MIN:.8,MAX:40,STEP:.01,JUMP:.05};static hM2Hr(t,e){return 0===t&&0===e?0:t/(t+e)}static faCr2Far(t,e){return 0===t&&0===e?0:t/(t+e)}static hMFaCr2Acc(t,e,r,n){return 0===t&&0===e&&0===r&&0===n?0:(t+n)/(t+e+r+n)}static hrFar2Acc(t,e){return(t+(1-e))/2}static hFa2Ppv(t,e){return 0===t&&0===e?0:t/(t+e)}static mCr2Fomr(t,e){return 0===t&&0===e?0:t/(t+e)}static hrFar2D(t,e,r=1){return 1===r?wz.normal.inv(t,0,1)-wz.normal.inv(e,0,1):Math.sqrt(2/(r*r+1))*(r*wz.normal.inv(t,0,1)-wz.normal.inv(e,0,1))}static hrFar2C(t,e,r=1){return 1===r?-(wz.normal.inv(t,0,1)+wz.normal.inv(e,0,1))/2:Math.sqrt(2/(r*r+1))*(r/(r+1))*-(wz.normal.inv(t,0,1)+wz.normal.inv(e,0,1))}static dC2Hr(t,e,r=1){return 1===r?wz.normal.cdf(t/2-e,0,1):wz.normal.cdf(Math.sqrt((r*r+1)/2)*(t/(1+r)-e/r),0,1)}static dC2Far(t,e,r=1){return 1===r?wz.normal.cdf(-(t/2+e),0,1):wz.normal.cdf(Math.sqrt((r*r+1)/2)*-(t/(1+r)+e),0,1)}static dFar2Hr(t,e,r=1){return 1===r?wz.normal.cdf(t+wz.normal.inv(e,0,1),0,1):wz.normal.cdf((Math.sqrt((r*r+1)/2)*t+wz.normal.inv(e,0,1))/r,0,1)}static cFar2Hr(t,e,r=1){return 1===r?wz.normal.cdf(-2*t-wz.normal.inv(e,0,1),0,1):wz.normal.cdf(-Math.sqrt((r*r+1)/2)*((r+1)/r)*t-wz.normal.inv(e,0,1),0,1)}static d2MuN(t,e=1){return 1===e?-t/2:-Math.sqrt((e*e+1)/2)*(1/(e+1))*t}static muN2D(t,e=1){return 1===e?-2*t:-Math.sqrt(2/(e*e+1))*(e+1)*t}static d2MuS(t,e=1){return 1===e?t/2:Math.sqrt((e*e+1)/2)*(e/(e+1))*t}static muS2D(t,e=1){return 1===e?2*t:Math.sqrt(2/(e*e+1))*((e+1)/e)*t}static c2L(t,e=1){return 1===e?t:Math.sqrt((e*e+1)/2)*t}static l2C(t,e=1){return 1===e?t:Math.sqrt(2/(e*e+1))*t}static s2H(t=1){return 1/(t*Math.sqrt(2*Math.PI))}static h2S(t){return 1/(t*Math.sqrt(2*Math.PI))}static hr2Zhr(t){return wz.normal.inv(t,0,1)}static far2Zfar(t){return wz.normal.inv(t,0,1)}static zhr2Hr(t){return wz.normal.cdf(t,0,1)}static zfar2Far(t){return wz.normal.cdf(t,0,1)}}class kz extends(_U(EU)){static get properties(){return{contour:{attribute:"contour",type:String,reflect:!0},point:{attribute:"point",type:String,reflect:!0},isoD:{attribute:"iso-d",type:String,reflect:!0},isoC:{attribute:"iso-c",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.sdt=!1,this.contours=["sensitivity","bias","accuracy"],this.contour=void 0,this.points=["all","first","rest","none"],this.point="all",this.isoDs=["all","first","rest","none"],this.isoD="first",this.isoCs=["all","first","rest","none"],this.isoC="first",this.zRoc=!1,this.far=.25,this.hr=.75,this.s=xz.s.DEFAULT,this.label="",this.locations=[{name:"default",far:this.far,hr:this.hr,s:this.s,label:""}],this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.alignState()}alignState(){this.locations[0].hr=this.hr,this.locations[0].far=this.far,this.locations[0].s=this.s,this.locations[0].label=this.label,this.d=xz.hrFar2D(this.hr,this.far,this.s),this.c=xz.hrFar2C(this.hr,this.far,this.s),this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.locations.forEach((t,e)=>{t.d=xz.hrFar2D(t.hr,t.far,t.s),t.c=xz.hrFar2C(t.hr,t.far,t.s),0!==e||"first"!==this.point&&"all"!==this.point?e>0&&("rest"===this.point||"all"===this.point)&&this.pointArray.push(t):this.pointArray.push(t),0!==e||"first"!==this.isoD&&"all"!==this.isoD?e>0&&("rest"===this.isoD||"all"===this.isoD)&&this.isoDArray.push(t):this.isoDArray.push(t),0!==e||"first"!==this.isoC&&"all"!==this.isoC?e>0&&("rest"===this.isoC||"all"===this.isoC)&&this.isoCArray.push(t):this.isoCArray.push(t)})}set(t,e,r="default",n="",i=1){"default"===r&&(this.hr=t,this.far=e,this.s=i,this.label=n);const a=this.locations.find(t=>t.name===r);void 0===a?this.locations.push({name:r,far:e,hr:t,s:i,label:n}):(a.hr=t,a.far=e,a.s=i,a.label=n),this.requestUpdate()}setWithSDT(t,e,r="default",n="",i=1){"default"===r&&(this.hr=xz.dC2Hr(t,e,i),this.far=xz.dC2Far(t,e,i),this.s=i,this.label=n);const a=this.locations.find(t=>t.name===r);void 0===a?this.locations.push({name:r,far:xz.dC2Far(t,e,i),hr:xz.dC2Hr(t,e,i),s:i,label:n}):(a.hr=xz.dC2Hr(t,e,i),a.far=xz.dC2Far(t,e,i),a.s=i,a.label=n),this.sdt=!0,this.requestUpdate()}static get styles(){return[super.styles,uT`
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
          outline: none;

          filter: url("#shadow-2");

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

        .point.interactive:focus-visible {
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
          stroke-width: 1;
          stroke-dasharray: 4;
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

        /* Make a larger target for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
          }
        }
      `]}render(){return WT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,s=3*this.rem,o=n-(i+a),l=n-(s+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=KD().domain(this.zRoc?[-3,3]:[0,1]).range([0,l]);this.xScale=u;const h=KD().domain(this.zRoc?[3,-3]:[1,0]).range([0,o]);this.yScale=h;const d=_R().subject((t,e)=>({x:this.xScale(this.zRoc?xz.far2Zfar(e.far):e.far),y:this.yScale(this.zRoc?xz.hr2Zhr(e.hr):e.hr)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.zRoc?xz.zfar2Far(this.xScale.invert(t.x)):this.xScale.invert(t.x),n=this.zRoc?xz.zhr2Hr(this.yScale.invert(t.y)):this.yScale.invert(t.y);e.far=r<.001?.001:r>.999?.999:r,e.hr=n<=.001?.001:n>=.999?.999:n,"default"===e.name&&(this.far=e.far,this.hr=e.hr),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),f=wU().x(t=>u(this.zRoc?xz.far2Zfar(t.far):t.far)).y(t=>h(this.zRoc?xz.hr2Zhr(t.hr):t.hr)),p=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),m=p.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(EU.svgFilters,r[e])}),g=m.merge(p).attr("viewBox",`0 0 ${n} ${n}`),v=m.append("g").classed("plot",!0),y=g.select(".plot").attr("transform",`translate(${s}, ${i})`);v.append("clipPath").attr("id","clip-roc-space").append("rect"),y.select("clipPath rect").attr("height",o+1).attr("width",l+1);const b=v.append("g").classed("underlayer",!0),w=y.select(".underlayer");if(b.append("rect").classed("background",!0),w.select(".background").attr("height",o).attr("width",l),this.firstUpdate||t.has("contour")||t.has("zRoc")||t.has("width")||t.has("height")||t.has("rem")||t.has("s"))if(void 0!==this.contour){const t=100,e=[];for(let r=.5,n=0;r<t;r+=1)for(let i=.5;i<t;i+=1,n+=1){const a=this.zRoc?xz.zhr2Hr(i/t*6-3):i/t,s=this.zRoc?xz.zfar2Far(6*(1-r/t)-3):1-r/t;e[n]="bias"===this.contour?xz.hrFar2C(a,s,this.s):"sensitivity"===this.contour?xz.hrFar2D(a,s,this.s):"accuracy"===this.contour?xz.hrFar2Acc(a,s):null}const r="bias"===this.contour?ON(-3,3,.25):"sensitivity"===this.contour?ON(-6,6,.5):"accuracy"===this.contour?ON(0,1,.05):null,n=zO().size([t,t]).thresholds(r),i=this.getComputedStyleValue("bias"===this.contour?"---color-element-background":"sensitivity"===this.contour?"---color-d":"accuracy"===this.contour?"---color-acc-dark":null),a=this.getComputedStyleValue("bias"===this.contour?"---color-c":"sensitivity"===this.contour||"accuracy"===this.contour?"---color-element-background":null),s=KD().domain(xN(r)).interpolate(()=>lP(pz(i).hex(),pz(a).hex())),o=w.selectAll(".plot-contour").data([this.contour]),u=o.enter().append("g").classed("plot-contour",!0).merge(o).selectAll(".contour").data(n(e));u.enter().append("path").classed("contour",!0).merge(u).transition().duration(2*c).ease(xO).attrTween("d",(e,r,n)=>function(t,e,r){var n=HU(t),i=HU(e),a="object"===NU(r)?r:{excludeSegment:r,snapEndsToInput:!0},s=a.excludeSegment,o=a.snapEndsToInput;if(!n.length&&!i.length)return function(){return""};var l=BU(n,i,{excludeSegment:s,snapEndsToInput:o});return function(t){if(1===t&&o)return null==e?"":e;var r,n="",i=OU(l(t));try{for(i.s();!(r=i.n()).done;)n+=qU(r.value)}catch(t){i.e(t)}finally{i.f()}return n}}(cR(n[r]).attr("d"),MD(RD().scale(l/t))(e))).attr("fill",t=>s(t.value)),u.exit().remove();const h=w.selectAll(".title-contour").data([this.contour]);h.enter().append("text").classed("title-contour",!0).attr("text-anchor","middle").merge(h).classed("math-var","bias"===this.contour||"sensitivity"===this.contour).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${this.rem})`:"accuracy"===this.contour?`translate(${l+1.125*this.rem}, ${this.rem})`:null).text("bias"===this.contour?"c":"sensitivity"===this.contour?"d′":"accuracy"===this.contour?"Acc":null);const d=100,f=[];for(let e=.5,r=0;e<d;e+=1,r+=4)f[r]="bias"===this.contour?-(e/t*6-3):"sensitivity"===this.contour?e/t*12-6:"accuracy"===this.contour?e/t:null,f[r+1]=f[r],f[r+2]=f[r],f[r+3]=f[r];const p=zO().size([4,d]).thresholds(r),m=KD().domain("bias"===this.contour?[3,-3]:"sensitivity"===this.contour?[6,-6]:"accuracy"===this.contour?[1,0]:null).range([0,10*this.rem]),g=w.selectAll(".legend-contour").data([this.contour]),v=g.enter().append("g").classed("legend-contour",!0),y=v.merge(g).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${1.5*this.rem})`:"accuracy"===this.contour?`translate(${l+1.5*this.rem}, ${1.5*this.rem})`:null);g.exit().remove(),v.append("g").classed("axis-contour",!0),y.select(".axis-contour").call(VN(m).ticks(7).tickSize(0)).attr("font-size",null).attr("font-family",null);const b=y.selectAll(".contour").data(p(f));b.enter().append("path").classed("contour",!0).merge(b).attr("d",MD(RD().scale(10*this.rem/d))).attr("fill",t=>s(t.value)),b.exit().remove()}else{w.selectAll(".plot-contour").data([]).exit().remove();w.selectAll(".title-contour").data([]).exit().remove();w.selectAll(".legend-contour").data([]).exit().remove()}b.append("g").classed("axis-x",!0);w.select(".axis-x").attr("transform",`translate(0, ${o})`).transition().duration(2*c).ease(xO).call(BN(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const x=b.append("text").classed("title-x",!0).attr("text-anchor","middle");x.append("tspan").classed("z math-var",!0),x.append("tspan").classed("name",!0);const k=w.select(".title-x").attr("transform",`translate(${l/2}, ${o+2.25*this.rem})`);k.select("tspan.z").text(this.zRoc?"z":""),k.select("tspan.name").text(this.zRoc?"(False Alarm Rate)":"False Alarm Rate"),b.append("g").classed("axis-y",!0);w.select(".axis-y").transition().duration(2*c).ease(xO).call(VN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const A=b.append("text").classed("title-y",!0).attr("text-anchor","middle");A.append("tspan").classed("z math-var",!0),A.append("tspan").classed("name",!0);const _=w.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${o/2})rotate(-90)`);_.select("tspan.z").text(this.zRoc?"z":""),_.select("tspan.name").text(this.zRoc?"(Hit Rate)":"Hit Rate"),b.append("line").classed("diagonal",!0),w.select(".diagonal").attr("x1",this.zRoc?u(-3):u(0)).attr("y1",this.zRoc?h(-3):h(0)).attr("x2",this.zRoc?u(3):u(1)).attr("y2",this.zRoc?h(3):h(1)),v.append("g").classed("content",!0);const $=y.select(".content"),S=$.selectAll(".curve-iso-d").data(this.isoDArray,t=>t.name),E=S.enter().append("path").classed("curve-iso-d",!0).attr("clip-path","url(#clip-roc-space)").merge(S);this.firstUpdate||t.has("zRoc")?E.transition().duration(this.drag?0:2*c).ease(xO).attr("d",t=>f(ON(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?xz.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?xz.dFar2Hr(t.d,xz.zfar2Far(u.invert(e)),t.s):xz.dFar2Hr(t.d,u.invert(e),t.s)})))):this.sdt?E.transition().duration(this.drag?0:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=vP(void 0!==n.d?n.d:t.d,t.d),a=vP(void 0!==n.s?n.s:t.s,t.s);return t=>{n.d=i(t),n.s=a(t);const e=ON(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?xz.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?xz.dFar2Hr(n.d,xz.zfar2Far(u.invert(t)),n.s):xz.dFar2Hr(n.d,u.invert(t),n.s)}));return f(e)}}):E.transition().duration(this.drag?0:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e];n.d=void 0,n.s=void 0;const i=vP(void 0!==n.hr?n.hr:t.hr,t.hr),a=vP(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=ON(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?xz.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?xz.dFar2Hr(xz.hrFar2D(n.hr,n.far,t.s),xz.zfar2Far(u.invert(e)),t.s):xz.dFar2Hr(xz.hrFar2D(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),S.exit().remove();const M=$.selectAll(".curve-iso-c").data(this.isoCArray,t=>t.name),T=M.enter().append("path").classed("curve-iso-c",!0).attr("clip-path","url(#clip-roc-space)").merge(M);this.firstUpdate||t.has("zRoc")?T.transition().duration(this.drag?0:2*c).ease(xO).attr("d",t=>f(ON(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?xz.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?xz.cFar2Hr(t.c,xz.zfar2Far(u.invert(e)),t.s):xz.cFar2Hr(t.c,u.invert(e),t.s)})))):this.sdt?T.transition().duration(this.drag?0:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=vP(void 0!==n.c?n.c:t.c,t.c),a=vP(void 0!==n.s?n.s:t.s,t.s);return t=>{n.c=i(t),n.s=a(t);const e=ON(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?xz.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?xz.cFar2Hr(n.c,xz.zfar2Far(u.invert(t)),n.s):xz.cFar2Hr(n.c,u.invert(t),n.s)}));return f(e)}}):T.transition().duration(this.drag?0:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e];n.c=void 0,n.s=void 0;const i=vP(void 0!==n.hr?n.hr:t.hr,t.hr),a=vP(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=ON(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?xz.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?xz.cFar2Hr(xz.hrFar2C(n.hr,n.far,t.s),xz.zfar2Far(u.invert(e)),t.s):xz.cFar2Hr(xz.hrFar2C(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),M.exit().remove();const N=$.selectAll(".point").data(this.pointArray,t=>t.name),C=N.enter().append("g").classed("point",!0);C.append("circle").classed("circle touch",!0),C.append("text").classed("label",!0);const R=C.merge(N);R.select("text").text(t=>t.label),(this.firstUpdate||t.has("interactive"))&&(this.interactive?R.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.zRoc?xz.hr2Zhr(e.hr):e.hr,n=this.zRoc?xz.far2Zfar(e.far):e.far;switch(t.key){case"ArrowUp":r+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowDown":r-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowRight":n+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowLeft":n-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05}r=this.zRoc?xz.zhr2Hr(r):r,n=this.zRoc?xz.zfar2Far(n):n,r=r<.001?.001:r>.999?.999:r,n=n<.001?.001:n>.999?.999:n,r===e.hr&&n===e.far||(e.hr=r,e.far=n,"default"===e.name&&(this.hr=e.hr,this.far=e.far),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))),t.preventDefault()}}):R.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),this.firstUpdate||t.has("zRoc")?R.transition().duration(this.drag?0:2*c).ease(xO).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?xz.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?xz.hr2Zhr(t.hr):t.hr)}\n          )`}):this.sdt?R.transition().duration(this.drag?0:c).ease(xO).attrTween("transform",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:t.d,t.d),a=vP(void 0!==n.c?n.c:t.c,t.c),s=vP(void 0!==n.s?n.s:t.s,t.s);return t=>(n.d=i(t),n.c=a(t),n.s=s(t),`translate(\n              ${u(this.zRoc?xz.far2Zfar(xz.dC2Far(n.d,n.c,n.s)):xz.dC2Far(n.d,n.c,n.s))},\n              ${h(this.zRoc?xz.hr2Zhr(xz.dC2Hr(n.d,n.c,n.s)):xz.dC2Hr(n.d,n.c,n.s))}\n            )`)}):R.transition().duration(this.drag?0:c).ease(xO).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?xz.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?xz.hr2Zhr(t.hr):t.hr)}\n          )`}),N.exit().remove(),this.drag=!1,this.sdt=!1,this.firstUpdate=!1}}customElements.define("roc-space",kz);class Az extends(_U(EU)){static get properties(){return{color:{attribute:"color",type:String,reflect:!0},distributions:{attribute:"distributions",type:Boolean,reflect:!0},threshold:{attribute:"threshold",type:Boolean,reflect:!0},unequal:{attribute:"unequal",type:Boolean,reflect:!0},sensitivity:{attribute:"sensitivity",type:Boolean,reflect:!0},bias:{attribute:"bias",type:Boolean,reflect:!0},variance:{attribute:"variance",type:Boolean,reflect:!0},histogram:{attribute:"histogram",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},binWidth:{attribute:!1,type:Number,reflect:!1},trials:{attribute:!1,type:Array,reflect:!1}}}constructor(){super(),this.colors=["all","outcome","response","stimulus","none"],this.color="all",this.distributions=!1,this.threshold=!1,this.unequal=!1,this.sensitivity=!1,this.bias=!1,this.variance=!1,this.histogram=!1,this.d=xz.d.DEFAULT,this.c=xz.c.DEFAULT,this.s=xz.s.DEFAULT,this.binWidth=.25,this.signals=["present","absent"],this.responses=["present","absent"],this.trials=[],this.muN=NaN,this.muS=NaN,this.l=NaN,this.hS=NaN,this.binRange=[-3,3],this.h=0,this.m=0,this.fa=0,this.cr=0,this.firstUpdate=!0,this.drag=!1,this.alignState()}reset(){this.trials=[],this.h=0,this.m=0,this.fa=0,this.cr=0}trial(t,e,r,n,i){const a={new:!0,paused:!1};a.trial=t,a.signal=e,a.duration=r,a.wait=n,a.iti=i,a.evidence=wz.normal.sample(0,1),this.alignTrial(a),this.trials.push(a),this.requestUpdate()}alignTrial(t){return"present"===t.signal?(t.trueEvidence=t.evidence*this.s+this.muS,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"h":"m"):(t.trueEvidence=t.evidence+this.muN,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"fa":"cr"),t.new||(this[t.outcome]+=1),t}alignState(){this.far=xz.dC2Far(this.d,this.c,this.s),this.hr=xz.dC2Hr(this.d,this.c,this.s),this.muN=xz.d2MuN(this.d,this.s),this.muS=xz.d2MuS(this.d,this.s),this.l=xz.c2L(this.c,this.s),this.hS=xz.s2H(this.s),this.h=0,this.m=0,this.fa=0,this.cr=0;for(let t=0;t<this.trials.length;t+=1)this.alignTrial(this.trials[t])}static get styles(){return[super.styles,uT`
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
          outline: none;

          filter: url("#shadow-2");
        }

        .signal.unequal {
          cursor: ns-resize;
          outline: none;

          filter: url("#shadow-2");
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
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
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

        .noise.interactive:focus-visible,
        .signal.interactive:focus-visible,
        .signal.unequal:focus-visible,
        .threshold.interactive:focus-visible {
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

        /* Make a larger target for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
          }
        }
      `]}render(){return WT``}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-model-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far,hr:this.hr,h:this.h,m:this.m,fa:this.fa,cr:this.cr},bubbles:!0}))}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const a=2*this.rem,s=3*this.rem,o=3*this.rem,l=i-(a+s),c=n-(o+(this.histogram&&this.distributions?3:.75)*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=KD().domain([-3,3]).range([0,c]),d=KD().domain([.5,0]).range([0,l]),f=h(this.binWidth)-h(0),p=KD().domain([l/f,0]).range([0,l]),m=_R().subject(()=>({x:h(this.l),y:0})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=xz.l2C(e,this.s);this.c=r<xz.c.MIN?xz.c.MIN:r>xz.c.MAX?xz.c.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),g=_R().subject(()=>({x:h(this.muN),y:0})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=xz.muN2D(e,this.s);this.d=r<xz.d.MIN?xz.d.MIN:r>xz.d.MAX?xz.d.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),v=_R().subject(()=>({x:h(this.muS),y:d(this.hS)})).on("start",(t,e)=>{cR(t.currentTarget).classed("dragging",!0),e.startX=t.x,e.startY=t.y,e.startHS=this.hS,e.startMuS=this.muS}).on("drag",(t,e)=>{this.drag=!0;let r=this.muS;this.interactive&&(r=h.invert(t.x));let n=this.hS;if(this.unequal&&(n=d.invert(t.y)),this.interactive&&this.unequal&&t.sourceEvent.shiftKey&&(Math.abs(t.x-e.startX)>Math.abs(t.y-e.startY)?n=e.startHS:r=e.startMuS),this.unequal){const t=xz.h2S(n);this.s=t<xz.s.MIN?xz.s.MIN:t>xz.s.MAX?xz.s.MAX:t;const e=xz.l2C(this.l,this.s);this.c=e<xz.c.MIN?xz.c.MIN:e>xz.c.MAX?xz.c.MAX:e}const i=xz.muS2D(r,this.s);this.d=i<xz.d.MIN?xz.d.MIN:i>xz.d.MAX?xz.d.MAX:i,this.alignState(),this.sendEvent()}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),y=wU().x(t=>h(t.e)).y(t=>d(t.p)),b=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),w=b.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(EU.svgFilters,r[e])}),x=w.merge(b).attr("viewBox",`0 0 ${n} ${i}`),k=w.append("g").classed("plot",!0),A=x.select(".plot").attr("transform",`translate(${o}, ${a})`),_=k.append("g").classed("underlayer",!0),$=A.select(".underlayer");_.append("rect").classed("background",!0),$.select(".background").attr("height",l).attr("width",c),_.append("g").classed("axis-x",!0);$.select(".axis-x").attr("transform",`translate(0, ${l})`).call(BN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),_.append("text").classed("title-x",!0).attr("text-anchor","middle").text("Evidence"),$.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`);const S=$.selectAll(".axis-y").data(this.distributions?[{}]:[]);S.enter().append("g").classed("axis-y",!0).merge(S).call(VN(d).ticks(5)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),S.exit().remove();const E=$.selectAll(".title-y").data(this.distributions?[{}]:[]);E.enter().append("text").classed("title-y",!0).attr("text-anchor","middle").text("Probability").merge(E).attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),E.exit().remove();const M=$.selectAll(".axis-y2").data(this.histogram?[{}]:[]);M.enter().append("g").classed("axis-y2",!0).merge(M).attr("transform",this.distributions?`translate(${c}, 0)`:"").call(this.distributions?HN(p).ticks(10):VN(p).ticks(10)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),M.exit().remove();const T=$.selectAll(".title-y2").data(this.histogram?[{}]:[]);T.enter().append("text").classed("title-y2",!0).attr("text-anchor","middle").text("Count").merge(T).attr("transform",this.distributions?`translate(${c+1.5*this.rem}, ${l/2})rotate(90)`:`translate(${-1.5*this.rem}, ${l/2})rotate(-90)`),T.exit().remove(),k.append("g").classed("content",!0);const N=A.select(".content"),C=N.selectAll(".signal-noise").data(this.distributions?[{}]:[]),R=C.enter().append("g").classed("signal-noise",!0),P=R.merge(C);C.exit().remove();const O=R.append("g").classed("noise",!0),I=P.selectAll(".noise").attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muN;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=xz.muN2D(e,this.s);this.d=r<xz.d.MIN?xz.d.MIN:r>xz.d.MAX?xz.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?I.call(g):I.on(".drag",null)),O.append("path").classed("curve-cr",!0),I.select(".curve-cr").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.c?n.c:this.c,this.c),s=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=ON(h.domain()[0],xz.c2L(n.c,n.s),.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuN(n.d,n.s),1)}));return e.push({e:xz.c2L(n.c,n.s),p:wz.normal.pdf(xz.c2L(n.c,n.s),xz.d2MuN(n.d,n.s),1)}),e.push({e:xz.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),y(e)}}),O.append("path").classed("curve-fa",!0),I.select(".curve-fa").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.c?n.c:this.c,this.c),s=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=ON(xz.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:wz.normal.pdf(h.domain()[1],xz.d2MuN(n.d,n.s),1)}),e.push({e:h.domain()[1],p:0}),e.push({e:xz.c2L(n.c,n.s),p:0}),y(e)}}),O.append("path").classed("curve-noise",!0),I.select(".curve-noise").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=ON(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:wz.normal.pdf(h.domain()[1],xz.d2MuN(n.d,n.s),1)}),y(e)}});const D=R.append("g").classed("signal",!0),U=P.selectAll(".signal").attr("tabindex",this.interactive||this.unequal?0:null).classed("interactive",this.interactive).classed("unequal",this.unequal).on("keydown.sensitivity",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muS;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=xz.muS2D(e,this.s);this.d=r<xz.d.MIN?xz.d.MIN:r>xz.d.MAX?xz.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null).on("keydown.variance",this.unequal?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let e=this.hS;switch(t.key){case"ArrowUp":e+=t.shiftKey?.002:.02;break;case"ArrowDown":e-=t.shiftKey?.002:.02}e=e<0?0:e;const r=xz.h2S(e);this.s=r<xz.s.MIN?xz.s.MIN:r>xz.s.MAX?xz.s.MAX:r,this.d=xz.muN2D(this.muN,this.s),this.c=xz.l2C(this.l,this.s),this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive")||t.has("unequal"))&&(this.interactive||this.unequal?U.call(v):U.on(".drag",null)),D.append("path").classed("curve-m",!0),U.select(".curve-m").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.c?n.c:this.c,this.c),s=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=ON(h.domain()[0],xz.c2L(n.c,n.s),.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuS(n.d,n.s),n.s)}));return e.push({e:xz.c2L(n.c,n.s),p:wz.normal.pdf(xz.c2L(n.c,n.s),xz.d2MuS(n.d,n.s),n.s)}),e.push({e:xz.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),y(e)}}),D.append("path").classed("curve-h",!0),U.select(".curve-h").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.c?n.c:this.c,this.c),s=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=ON(xz.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:wz.normal.pdf(h.domain()[1],xz.d2MuS(n.d,n.s),n.s)}),e.push({e:h.domain()[1],p:0}),e.push({e:xz.c2L(n.c,n.s),p:0}),y(e)}}),D.append("path").classed("curve-signal",!0),U.select(".curve-signal").transition().duration(this.drag?0:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d),a=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=ON(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:wz.normal.pdf(t,xz.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:wz.normal.pdf(h.domain()[1],xz.d2MuS(n.d,n.s),n.s)}),y(e)}});const z=N.selectAll(".measure-d").data(this.sensitivity?[{}]:[]),F=z.enter().append("g").classed("measure-d",!0);F.append("line").classed("line",!0),F.append("line").classed("cap-left",!0),F.append("line").classed("cap-right",!0);const j=F.append("text").classed("label",!0);j.append("tspan").classed("d math-var",!0).text("d′"),j.append("tspan").classed("equals",!0).text(" = "),j.append("tspan").classed("value",!0);const q=F.merge(z);q.select(".line").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muN)).attr("y1",d(.43)).attr("x2",h(this.muS)).attr("y2",d(.43)),q.select(".cap-left").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muN)).attr("y1",d(.43)+5).attr("x2",h(this.muN)).attr("y2",d(.43)-5),q.select(".cap-right").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muS)).attr("y1",d(.43)+5).attr("x2",h(this.muS)).attr("y2",d(.43)-5);q.select(".label").transition().duration(this.drag?0:u).ease(xO).attr("x",h(this.muN>this.muS?this.muN:this.muS)+5).attr("y",d(.43)+3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:this.d,this.d);return t=>{n.d=i(t),cR(n).text(QO(".3")(n.d))}}),z.exit().remove();const L=N.selectAll(".measure-c").data(this.bias?[{}]:[]),H=L.enter().append("g").classed("measure-c",!0);H.append("line").classed("line",!0),H.append("line").classed("cap-zero",!0);const B=H.append("text").classed("label",!0);B.append("tspan").classed("c math-var",!0).text("c"),B.append("tspan").classed("equals",!0).text(" = "),B.append("tspan").classed("value",!0);const V=H.merge(L);V.select(".line").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.l)).attr("y1",d(.47)).attr("x2",h(0)).attr("y2",d(.47)),V.select(".cap-zero").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(0)).attr("y1",d(.47)+5).attr("x2",h(0)).attr("y2",d(.47)-5);V.select(".label").transition().duration(this.drag?0:u).ease(xO).attr("x",h(0)+(this.l<0?5:-5)).attr("y",d(.47)+3).attr("text-anchor",this.c<0?"start":"end").select(".value").tween("text",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.c?n.c:this.c,this.c);return t=>{n.c=i(t),cR(n).text(QO(".3")(n.c))}}),L.exit().remove();const X=N.selectAll(".measure-s").data(this.variance?[{}]:[]),K=X.enter().append("g").classed("measure-s",!0);K.append("line").classed("line",!0),K.append("line").classed("cap-left",!0),K.append("line").classed("cap-right",!0);const W=K.append("text").classed("label",!0);W.append("tspan").classed("s math-var",!0).text("σ"),W.append("tspan").classed("equals",!0).text(" = "),W.append("tspan").classed("value",!0);const Y=K.merge(X);Y.select(".line").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muS-this.s)).attr("y1",d(wz.normal.pdf(this.s,0,this.s))+10/this.s).attr("x2",h(this.muS+this.s)).attr("y2",d(wz.normal.pdf(this.s,0,this.s))+10/this.s),Y.select(".cap-left").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muS-this.s)).attr("y1",d(wz.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS-this.s)).attr("y2",d(wz.normal.pdf(this.s,0,this.s))+10/this.s-5),Y.select(".cap-right").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.muS+this.s)).attr("y1",d(wz.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS+this.s)).attr("y2",d(wz.normal.pdf(this.s,0,this.s))+10/this.s-5);Y.select(".label").transition().duration(this.drag?0:u).ease(xO).attr("x",h(this.muS)).attr("y",d(wz.normal.pdf(this.s,0,this.s))+10/this.s-3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.s?n.s:this.s,this.s);return t=>{n.s=i(t),cR(n).text(QO(".3")(n.s))}}),X.exit().remove();const J=N.selectAll(".threshold").data(this.threshold?[{}]:[]),Z=J.enter().append("g").classed("threshold",!0);Z.append("line").classed("line",!0),Z.append("line").classed("line touch",!0),Z.append("circle").classed("handle touch",!0);const G=Z.merge(J).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive);(this.firstUpdate||t.has("interactive"))&&(this.interactive?G.call(m).on("keydown",t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.l;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=xz.l2C(e,this.s);this.c=r<xz.c.MIN?xz.c.MIN:r>xz.c.MAX?xz.c.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}):G.on("drag",null).on("keydown",null)),G.select(".line").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),G.select(".line.touch").transition().duration(this.drag?0:u).ease(xO).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),G.select(".handle").transition().duration(this.drag?0:u).ease(xO).attr("cx",h(this.l)).attr("cy",d(.54)),J.exit().remove();const Q=N.selectAll(".histogram").data(this.histogram?[{}]:[]),tt=Q.enter().append("g").classed("histogram",!0).merge(Q);if(Q.exit().remove(),this.histogram){const t=function(){var t=AN,e=xN,r=PN;function n(n){Array.isArray(n)||(n=Array.from(n));var i,a,s,o=n.length,l=new Array(o);for(i=0;i<o;++i)l[i]=t(n[i],i,n);var c=e(l),u=c[0],h=c[1],d=r(l,u,h);if(!Array.isArray(d)){const t=h,r=+d;if(e===xN&&([u,h]=RN(u,h,r)),(d=NN(u,h,r))[0]<=u&&(s=CN(u,h,r)),d[d.length-1]>=h)if(t>=h&&e===xN){const t=CN(u,h,r);isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else d.pop()}for(var f=d.length,p=0,m=f;d[p]<=u;)++p;for(;d[m-1]>h;)--m;(p||m<f)&&(d=d.slice(p,m),f=m-p);var g,v=new Array(f+1);for(i=0;i<=f;++i)(g=v[i]=[]).x0=i>0?d[i-1]:u,g.x1=i<f?d[i]:h;if(isFinite(s)){if(s>0)for(i=0;i<o;++i)null!=(a=l[i])&&u<=a&&a<=h&&v[Math.min(f,Math.floor((a-u)/s))].push(n[i]);else if(s<0)for(i=0;i<o;++i)if(null!=(a=l[i])&&u<=a&&a<=h){const t=Math.floor((u-a)*s);v[Math.min(f,t+(d[t]<=a))].push(n[i])}}else for(i=0;i<o;++i)null!=(a=l[i])&&u<=a&&a<=h&&v[wN(d,a,0,f)].push(n[i]);return v}return n.value=function(e){return arguments.length?(t="function"==typeof e?e:$N(e),n):t},n.domain=function(t){return arguments.length?(e="function"==typeof t?t:$N([t[0],t[1]]),n):e},n.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:$N(Array.isArray(t)?_N.call(t):t),n):r},n}().value(t=>t.trueEvidence).domain(h.domain()).thresholds(ON(this.binRange[0],this.binRange[1],this.binWidth)),e=t(this.trials);let r=-1,n=-1;for(let t=0;t<e.length;t+=1)for(let i=0;i<e[t].length;i+=1)e[t][i].binValue=e[t].x0,e[t][i].binCount=i,0===t&&(r=i),t===e.length-1&&(n=i);for(let t=0;t<this.trials.length;t+=1)this.trials[t].trueEvidence<this.binRange[0]&&(r+=1,this.trials[t].binCount=r,this.trials[t].binValue=e[0].x0),this.trials[t].trueEvidence>this.binRange[1]&&(n+=1,this.trials[t].binCount=n,this.trials[t].binValue=e[e.length-1].x0);const i=tt.selectAll(".trial").data(this.trials,t=>t.trial),a=i.enter().append("rect").attr("stroke-width",3).attr("data-new-trial-ease-time",0).attr("stroke",this.getComputedStyleValue("---color-acc")).attr("fill",this.getComputedStyleValue("---color-acc-light")).merge(i).attr("class",t=>`trial ${t.outcome}`).attr("width",f-3).attr("height",f-3),s=a.filter(t=>t.new&&!t.paused);if(!s.empty()){const t=s.attr("data-new-trial-ease-time"),e=e=>KD().domain([0,1]).range([t,1])(e),r=e=>r=>KD().domain([e(t),1]).range([0,1])(e(r));s.transition("new").duration(e=>Math.floor((.75*e.duration+.25*e.wait)*(1-t))).ease(e).attr("data-new-trial-ease-time",1).attrTween("stroke",(t,e,n)=>{const i=n[e],a=lP(i.getAttribute("stroke"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"));return t=>a(r(wO)(t))}).attrTween("fill",(t,e,n)=>{const i=n[e],a=lP(i.getAttribute("fill"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"));return t=>a(r(wO)(t))}).attrTween("x",(t,e,n)=>{const i=vP(n[e].getAttribute("x"),h(t.binValue)+1.5);return t=>i(r(xO)(t))}).attrTween("y",(t,e,n)=>{const i=vP(n[e].getAttribute("y"),d(0)+1.5-(t.binCount+1)*f);return t=>i(r(wO)(t))}).on("end",(t,e,r)=>{r[e].removeAttribute("data-new-trial-ease-time"),t.new=!1,this.alignTrial(t),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{stimulus:t.signal,response:t.response,outcome:t.outcome,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:0},bubbles:!0}))})}const o=a.filter(t=>t.new&&t.paused);if(!o.empty()){const t=o.attr("data-new-trial-ease-time");o.transition().duration(u).ease(xO).attr("x",e=>vP(0,h(e.binValue)+1.5)(xO(t))).attr("y",e=>vP(0,d(0)+1.5-(e.binCount+1)*f)(wO(t))).attr("stroke",e=>lP(this.getComputedStyleValue("---color-acc"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}`):this.getComputedStyleValue("---color-acc"))(wO(t))).attr("fill",e=>lP(this.getComputedStyleValue("---color-acc-light"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))(wO(t)))}a.filter(t=>!t.new).transition().duration(u).ease(xO).attr("x",t=>h(t.binValue)+1.5).attr("y",t=>d(0)+1.5-(t.binCount+1)*f).attr("stroke",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc")).attr("fill",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light")),i.exit().transition().duration(u).ease(bO).attrTween("stroke",(t,e,r)=>{const n=r[e],i=lP(n.getAttribute("stroke"),this.getComputedStyleValue("---color-acc"));return t=>i(wO(t))}).attrTween("fill",(t,e,r)=>{const n=r[e],i=lP(n.getAttribute("fill"),this.getComputedStyleValue("---color-acc-light"));return t=>i(wO(t))}).attrTween("x",(t,e,r)=>{const n=vP(r[e].getAttribute("x"),0);return t=>n(wO(t))}).attrTween("y",(t,e,r)=>{const n=vP(r[e].getAttribute("y"),0);return t=>n(xO(t))}).remove()}const et=k.append("g").classed("overlayer",!0),rt=A.select(".overlayer");et.append("rect").classed("background",!0),rt.select(".background").attr("height",l).attr("width",c),this.drag=!1,this.firstUpdate=!1}pauseTrial(){const t=cR(this.renderRoot).select(".trial[data-new-trial-ease-time]");t.interrupt("new"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){cR(this.renderRoot).select(".trial[data-new-trial-ease-time]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}}customElements.define("sdt-model",Az);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _z=t=>t??ZT;customElements.define("decidables-spinner",class extends $U{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,uT`
        :host {
          ---decidables-spinner-font-size: var(--decidables-spinner-font-size, 1.125rem);
          ---decidables-spinner-input-width: var(--decidables-spinner-input-width, 4rem);
          ---decidables-spinner-prefix: var(--decidables-spinner-prefix, "");

          ---decidables-spinner-postfix: var(--decidables-spinner-postfix, "");
          ---decidables-spinner-postfix-padding: var(--decidables-spinner-postfix-padding, 0rem);

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

          padding: 1px var(---decidables-spinner-postfix-padding) 1px 2px;
          margin: 0;

          font-family: var(---font-family-base);
          font-size: var(---decidables-spinner-font-size);

          color: inherit;

          text-align: right;

          appearance: none;
          outline: none;

          background: none;
          border: 0;
          border-radius: 0;
          box-shadow: var(---shadow-2);
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
        }

        /* HACK: Manage spinners in Firefox */
        @supports (-moz-appearance: textfield) {
          input[type=number] {
            padding-right: calc(18px + var(---decidables-spinner-postfix-padding));

            appearance: textfield;
          }

          /* HACK: Avoid elements shifting due to box-shadow! */
          :host(.math) input[type=number]:hover {
            box-shadow: var(---shadow-2);
          }

          :host(.math) input[type=number]:focus,
          :host(.math) input[type=number]:active {
            box-shadow: var(---shadow-8);
          }

          input[type=number]:hover,
          input[type=number]:focus,
          input[type=number]:active {
            padding-right: var(---decidables-spinner-postfix-padding);

            appearance: none;
          }

          input[type=number]:disabled {
            padding-right: calc(18px + var(---decidables-spinner-postfix-padding));

            appearance: textfield;
          }
        }

        /* HACK: Manage spinners in Chrome/Edge/Safari */
        input[type=number]::-webkit-inner-spin-button {
          /* Avoid oversized spinners in Safari */
          font-size: 1.125rem;

          opacity: 0;
        }

        input[type=number]:hover::-webkit-inner-spin-button,
        input[type=number]:focus::-webkit-inner-spin-button,
        input[type=number]:active::-webkit-inner-spin-button {
          opacity: 1;
        }

        input[type=number]:disabled::-webkit-inner-spin-button {
          opacity: 0;
        }

        /* HACK: Adjust padding on mobile w/o spinners */
        @media only screen and (hover: none) and (pointer: coarse) {
          input[type=number] {
            padding-right: calc(1.125rem + var(---decidables-spinner-postfix-padding));
          }
        }
      `]}render(){return WT`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${_z(this.min)} max=${_z(this.max)} step=${_z(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});const $z={fromAttribute:t=>new Set(t.split(/\s+/)),toAttribute:t=>t.size?[...t].join(" "):null};customElements.define("detectable-table",class extends EU{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",converter:$z,reflect:!0},color:{attribute:"color",type:String,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},acc:{attribute:!1,type:Number,reflect:!1},ppv:{attribute:!1,type:Number,reflect:!1},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.numeric=!1,this.summaries=["stimulusRates","responseRates","accuracy"],this.summary=new Set,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color="all",this.payoff=!1,this.hPayoff=void 0,this.mPayoff=void 0,this.crPayoff=void 0,this.faPayoff=void 0,this.h=40,this.m=60,this.fa=75,this.cr=25,this.alignState()}alignState(){this.hr=xz.hM2Hr(this.h,this.m),this.far=xz.faCr2Far(this.fa,this.cr),this.acc=xz.hMFaCr2Acc(this.h,this.m,this.fa,this.cr),this.ppv=xz.hFa2Ppv(this.h,this.fa),this.fomr=xz.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("detectable-table-change",{detail:{h:this.h,m:this.m,hr:this.hr,fa:this.fa,cr:this.cr,far:this.far,acc:this.acc,ppv:this.ppv,fomr:this.fomr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}hrInput(t){const e=parseFloat(t.target.value),r=this.h+this.m;this.h=Math.round(e*r),this.m=r-this.h,this.alignState(),this.sendEvent()}farInput(t){const e=parseFloat(t.target.value),r=this.fa+this.cr;this.fa=Math.round(e*r),this.cr=r-this.fa,this.alignState(),this.sendEvent()}accInput(t){const e=parseFloat(t.target.value),r=this.h+this.m,n=this.fa+this.cr,i=(this.hr+this.far-1)/2;let a=i+e,s=1+i-e;s>1&&(s=1,a=s+2*e-1),s<0&&(s=0,a=s+2*e-1),a>1&&(a=1,s=a-2*e+1),a<0&&(a=0,s=a-2*e+1),this.h=Math.round(a*r),this.m=r-this.h,this.fa=Math.round(s*n),this.cr=n-this.fa,this.alignState(),this.sendEvent()}ppvInput(t){const e=parseFloat(t.target.value),r=this.h+this.fa;this.h=Math.round(e*r),this.fa=r-this.h,this.alignState(),this.sendEvent()}fomrInput(t){const e=parseFloat(t.target.value),r=this.m+this.cr;this.m=Math.round(e*r),this.cr=r-this.m,this.alignState(),this.sendEvent()}static get styles(){return[super.styles,uT`
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
      `]}willUpdate(){this.alignState()}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,n,i,a,s,o,l,c,u;return this.numeric?(r=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff?WT`<span class="payoff">${e(this.hPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,n=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff?WT`<span class="payoff">${e(this.mPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,i=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff?WT`<span class="payoff">${e(this.faPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,a=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff?WT`<span class="payoff">${e(this.crPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,s=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `,o=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `,l=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `,c=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `,u=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `):(r=WT`<span>Hits</span>
        ${this.payoff?WT`<span class="payoff">${e(this.hPayoff)}</span>`:WT``}`,n=WT`<span>Misses</span>
        ${this.payoff?WT`<span class="payoff">${e(this.mPayoff)}</span>`:WT``}`,i=WT`<span>False Alarms</span>
        ${this.payoff?WT`<span class="payoff">${e(this.faPayoff)}</span>`:WT``}`,a=WT`<span>Correct Rejections</span>
        ${this.payoff?WT`<span class="payoff">${e(this.crPayoff)}</span>`:WT``}`,s=WT`<span>Hit Rate</span>`,o=WT`<span>False Alarm Rate</span>`,l=WT`<span>Accuracy</span>`,c=WT`<span>Positive Predictive Value</span>`,u=WT`<span>False Omission Rate</span>`),WT`
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
            ${this.summary.has("stimulusRates")?WT`
                <td class="td td-summary hr">
                  ${s}
                </td>`:WT``}
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
            ${this.summary.has("stimulusRates")?WT`
                <td class="td td-summary far">
                  ${o}
                </td>`:WT``}
          </tr>
          ${this.summary.has("responseRates")||this.summary.has("accuracy")?WT`
              <tr>
                <td colspan="2"></td>
                ${this.summary.has("responseRates")?WT`
                    <td class="td td-summary ppv">
                      ${c}
                    </td>
                    <td class="td td-summary fomr">
                      ${u}
                    </td>`:WT`
                    <td colspan="2"></td>`}
                ${this.summary.has("accuracy")?WT`
                    <td class="td td-summary acc" rowspan="2">
                      ${l}
                    </td>`:WT``}
              </tr>`:WT``}
        </tbody>
      </table>`}});class Sz{static a={DEFAULT:.5,MIN:0,MAX:1,STEP:.01,JUMP:.05};static l={DEFAULT:2,MIN:0,MAX:10,STEP:.01,JUMP:.05};static g={DEFAULT:.5,MIN:0,MAX:1,STEP:.01,JUMP:.05};static xal2v(t,e,r){return t>=0?t**e:-r*(-t)**e}static xlv2a(t,e,r){return t>=0?Math.log(r)/Math.log(t):(Math.log(-r)-Math.log(e))/Math.log(-t)}static xav2l(t,e,r){return t>=0?NaN:-r/(-t)**e}static pg2w(t,e){return t**e/(t**e+(1-t)**e)**(1/e)}static vw2u(t,e){if("number"==typeof t&&"number"==typeof e)return t*e;if(t instanceof Array&&e instanceof Array&&t.length>0&&t.length===e.length){let r=0;for(let n=0;n<t.length;n+=1)r+=t[n]*e[n];return r}return NaN}}var Ez={x:"#e41a1c",a:"#ff7f00",l:"#ffff33",v:"#f781bf",p:"#377eb8",g:"#4daf4a",w:"#984ea3",u:"#a65628",chosen:"#999999",better:"#4545d0",worse:"#f032e6",even:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"};class Mz extends $U{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return Ez}static get lights(){return Object.keys(Mz.colors).reduce((t,e)=>(t[e]=lP(Mz.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(Mz.colors).reduce((t,e)=>(t[e]=lP(Mz.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,uT`
        :host {
          ---color-x: var(--color-x, ${cT(this.colors.x)});
          ---color-a: var(--color-a, ${cT(this.colors.a)});
          ---color-l: var(--color-l, ${cT(this.colors.l)});
          ---color-v: var(--color-v, ${cT(this.colors.v)});
          ---color-p: var(--color-p, ${cT(this.colors.p)});
          ---color-g: var(--color-g, ${cT(this.colors.g)});
          ---color-w: var(--color-w, ${cT(this.colors.w)});
          ---color-u: var(--color-u, ${cT(this.colors.u)});
          ---color-chosen: var(--color-chosen, ${cT(this.colors.chosen)});
          ---color-better: var(--color-better, ${cT(this.colors.better)});
          ---color-worse: var(--color-worse, ${cT(this.colors.worse)});
          ---color-even: var(--color-even, ${cT(this.colors.even)});
          ---color-correct: var(--color-correct, ${cT(this.colors.correct)});
          ---color-error: var(--color-error, ${cT(this.colors.error)});
          ---color-nr: var(--color-nr, ${cT(this.colors.nr)});

          ---color-x-light: var(--color-x-light, ${cT(this.lights.x)});
          ---color-a-light: var(--color-a-light, ${cT(this.lights.a)});
          ---color-l-light: var(--color-l-light, ${cT(this.lights.l)});
          ---color-v-light: var(--color-v-light, ${cT(this.lights.v)});
          ---color-p-light: var(--color-p-light, ${cT(this.lights.p)});
          ---color-g-light: var(--color-g-light, ${cT(this.lights.g)});
          ---color-w-light: var(--color-w-light, ${cT(this.lights.w)});
          ---color-u-light: var(--color-u-light, ${cT(this.lights.u)});
          ---color-chosen-light: var(--color-chosen-light, ${cT(this.lights.chosen)});
          ---color-better-light: var(--color-better-light, ${cT(this.lights.better)});
          ---color-worse-light: var(--color-worse-light, ${cT(this.lights.worse)});
          ---color-even-light: var(--color-even-light, ${cT(this.lights.even)});
          ---color-correct-light: var(--color-correct-light, ${cT(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${cT(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${cT(this.lights.nr)});

          ---color-x-dark: var(--color-x-dark, ${cT(this.darks.x)});
          ---color-a-dark: var(--color-a-dark, ${cT(this.darks.a)});
          ---color-l-dark: var(--color-l-dark, ${cT(this.darks.l)});
          ---color-v-dark: var(--color-v-dark, ${cT(this.darks.v)});
          ---color-p-dark: var(--color-p-dark, ${cT(this.darks.p)});
          ---color-g-dark: var(--color-g-dark, ${cT(this.darks.g)});
          ---color-w-dark: var(--color-w-dark, ${cT(this.darks.w)});
          ---color-u-dark: var(--color-u-dark, ${cT(this.darks.u)});
          ---color-chosen-dark: var(--color-chosen-dark, ${cT(this.darks.chosen)});
          ---color-better-dark: var(--color-better-dark, ${cT(this.darks.better)});
          ---color-worse-dark: var(--color-worse-dark, ${cT(this.darks.worse)});
          ---color-even-dark: var(--color-even-dark, ${cT(this.darks.even)});
          ---color-correct-dark: var(--color-correct-dark, ${cT(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${cT(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${cT(this.darks.nr)});
        }
      `]}}class Tz extends(_U(Mz)){static get properties(){return{p:{attribute:"probability",type:Number,reflect:!0},g:{attribute:"gamma",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},w:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.g=Sz.g.DEFAULT,this.p=null,this.label="",this.function="default",this.functions=[{name:"default",g:this.g}],this.probabilities=[{name:"default",p:this.p,label:this.label,function:this.function}],this.xl=null,this.xw=null,this.pw=null,this.xs=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.functions[0].g=this.g,this.probabilities[0].p=this.p,this.probabilities[0].label=this.label,this.probabilities[0].function=this.function,this.probabilities.forEach(t=>{const e=this.functions.find(e=>e.name===t.function);t.w=Sz.pg2w(t.p,e.g)}),this.w=this.probabilities[0].w}trial(t,e,r,n,i,a){this.trialCount&&this.removeProbability(`${this.trialCount}`),this.xl=t,this.xw=e,this.pw=r,this.xs=n,this.trialCount=i,this.response=a,this.setProbability(this.pw,`${this.trialCount}`,"","default",!0)}pauseTrial(){const t=cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}clearFunctions(){this.functions.splice(1),this.requestUpdate()}clearProbabilities(){this.probabilities.splice(1),this.requestUpdate()}clear(){this.clearFunctions(),this.clearProbabilities()}removeFunction(t){this.functions=this.functions.filter(e=>e.name!==t),this.requestUpdate()}removeProbability(t){this.probabilities=this.probabilities.filter(e=>e.name!==t),this.requestUpdate()}remove(t){this.removeFunction(t),this.removeProbability(t)}getFunction(t="default"){return this.functions.find(e=>e.name===t)}getProbability(t="default"){return this.probabilities.find(e=>e.name===t)}get(t="default"){return{...this.getFunction(t),...this.getProbability(t)}}setFunction(t,e="default"){"default"===e&&(this.g=t);const r=this.functions.find(t=>t.name===e);void 0===r?this.functions.push({name:e,g:t}):r.g=t,this.requestUpdate()}setProbability(t,e="default",r="",n=e,i=!1){"default"===e&&(this.p=t,this.label=r);const a=this.probabilities.find(t=>t.name===e);void 0===a?this.probabilities.push({name:e,p:t,label:r,function:n,trial:i,new:i}):(a.p=t,a.label=r,a.function=n),this.requestUpdate()}set(t,e,r="default",n="",i=r){this.setFunction(e,i),this.setProbability(t,r,n,i)}static get styles(){return[super.styles,uT`
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
          outline: none;

          filter: url("#shadow-2");
        }

        .curve.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          transform: translateX(0);
        }

        .curve.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        .curve.interactive:focus-visible {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .point.interactive {
          cursor: nesw-resize;
          outline: none;

          filter: url("#shadow-2");

          /* HACK: This gets Safari to correctly apply the filter! */
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

        .point.interactive:focus-visible {
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
          stroke-width: 1;
          stroke-dasharray: 4;
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

        /* Make a larger target for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
          }
        }
      `]}render(){return WT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,s=3*this.rem,o=n-(i+a),l=n-(s+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=KD().domain([0,1]).range([0,l]).clamp(!0);this.xScale=u;const h=KD().domain([1,0]).range([0,o]);this.yScale=h;const d=_R().subject((t,e)=>({x:t.x,y:this.yScale(Sz.pg2w(this.xScale.invert(t.x),e.g)),p:this.xScale.invert(t.x),g:e.g,w:Sz.pg2w(this.xScale.invert(t.x),e.g)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=r-t.subject.p,a=n-t.subject.w,s=(i**2+a**2)**.5,o=t.subject.p>t.subject.w?i>a?t.subject.g-s:t.subject.g+s:i>a?t.subject.g+s:t.subject.g-s;e.g=o>Sz.g.MAX?Sz.g.MAX:o<Sz.g.MIN?Sz.g.MIN:o,"default"===e.name&&(this.g=e.g),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:this.get(e.name),bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),f=_R().subject((t,e)=>({x:this.xScale(e.p),y:this.yScale(e.w)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x);e.p=r<0?0:r>1?1:r,"default"===e.name&&(this.p=e.p),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:{name:e.name,p:e.p,w:e.w,label:e.label,g:this.getFunction(e.function).g},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),p=wU().x(t=>u(t.p)).y(t=>h(t.w)),m=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),g=m.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(Mz.svgFilters,r[e])}),v=g.merge(m).attr("viewBox",`0 0 ${n} ${n}`),y=g.append("g").classed("plot",!0),b=v.select(".plot").attr("transform",`translate(${s}, ${i})`);y.append("clipPath").attr("id","clip-cpt-value").append("rect"),b.select("clipPath rect").attr("height",o+1).attr("width",l+1);const w=y.append("g").classed("underlayer",!0),x=b.select(".underlayer");w.append("rect").classed("background",!0),x.select(".background").attr("height",o).attr("width",l),w.append("g").classed("scale-x",!0);x.select(".scale-x").attr("transform",`translate(0, ${o})`).transition().duration(2*c).ease(xO).call(BN(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const k=w.append("text").classed("title-x",!0).attr("text-anchor","middle");k.append("tspan").classed("name",!0).text("Probability ("),k.append("tspan").classed("math-var p",!0).text("p"),k.append("tspan").classed("name",!0).text(")"),x.select(".title-x").attr("transform",`translate(${l/2}, ${o+2.25*this.rem})`),w.append("g").classed("scale-y",!0);x.select(".scale-y").transition().duration(2*c).ease(xO).call(VN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const A=w.append("text").classed("title-y",!0).attr("text-anchor","middle");A.append("tspan").classed("name",!0).text("Decision Weight ("),A.append("tspan").classed("math-var v",!0).text("w"),A.append("tspan").classed("name",!0).text(")"),x.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${o/2})rotate(-90)`),w.append("line").classed("diagonal",!0),x.select(".diagonal").transition().duration(2*c).attr("x1",u(0)).attr("y1",h(0)).attr("x2",u(1)).attr("y2",h(1)),y.append("g").classed("content",!0);const _=b.select(".content"),$=_.selectAll(".lines").data(this.probabilities.filter(t=>null!=t.p),t=>t.name),S=$.enter().append("g").classed("lines",!0);S.each((t,e,r)=>{const n=cR(r[e]);n.append("line").classed("line-p above",!0),n.append("line").classed("line-p below",!0),n.append("line").classed("line-w before",!0),n.append("line").classed("line-w after",!0)}),S.filter(t=>t.new).attr("data-animating-ease-time-1",0).attr("data-animating-ease-time-2",0).each((t,e,r)=>{const n=cR(r[e]);n.select(".line-p.above").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(1)).attr("y2",h(1)),n.select(".line-p.below").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(0)).attr("y2",h(0)),n.select(".line-w.before").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(t.w)).attr("y2",h(t.w)),n.select(".line-w.after").attr("x1",u(t.p)).attr("x2",u(t.p)).attr("y1",h(t.w)).attr("y2",h(t.w))});const E=S.merge($),M=E.filter(t=>t.new&&!t.paused);if(!M.empty()){const t=M.attr("data-animating-ease-time-1"),e=M.attr("data-animating-ease-time-2"),r=e=>KD().domain([0,1]).range([t,1])(e),n=e=>KD().range([0,1]).domain([t,1])(e),i=t=>KD().domain([0,1]).range([e,1])(t),a=t=>KD().range([0,1]).domain([e,1])(t),s=e=>r=>KD().domain([e(t),1]).range([0,1])(e(r)),o=t=>r=>KD().domain([t(e),1]).range([0,1])(t(r));M.transition("new-1").duration(()=>Math.floor(c*(1-t))).ease(r).attr("data-animating-ease-time-1",1).tween("animating",(t,e,r)=>{const i=r[e],a=cR(i),o=vP(void 0!==i.p?i.p:t.p,t.p),l=vP(void 0!==i.g?i.g:this.getFunction(t.function).g,this.getFunction(t.function).g),c=vP(h.invert(a.select(".line-p.above").attr("y1")),t.w),d=vP(h.invert(a.select(".line-p.below").attr("y1")),t.w);return t=>{i.p=o(xO(n(t))),i.g=l(xO(n(t))),i.w=Sz.pg2w(i.p,i.g),a.select(".line-p.above").attr("x1",u(i.p)).attr("x2",u(i.p)).attr("y1",h(c(s(wO)(t)))).attr("y2",h(1)),a.select(".line-p.below").attr("x1",u(i.p)).attr("x2",u(i.p)).attr("y1",h(d(s(wO)(t)))).attr("y2",h(0))}}).transition("new-2").duration(()=>Math.floor(c*(1-e))).ease(i).attr("data-animating-ease-time-2",1).tween("animating",(t,e,r)=>{const n=r[e],i=cR(n),s=vP(void 0!==n.p?n.p:t.p,t.p),l=vP(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g),c=vP(u.invert(i.select(".line-w.before").attr("x1")),0),d=vP(u.invert(i.select(".line-w.after").attr("x1")),1);return t=>{n.p=s(xO(a(t))),n.g=l(xO(a(t))),n.w=Sz.pg2w(n.p,n.g),i.select(".line-w.before").attr("x1",u(c(o(xO)(t)))).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w)),i.select(".line-w.after").attr("x1",u(d(o(xO)(t)))).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w))}}).on("end",(t,e,r)=>{const n=r[e];n.removeAttribute("data-animating-ease-time-1"),n.removeAttribute("data-animating-ease-time-2"),t.new=!1,this.dispatchEvent(new CustomEvent("prospectable-response",{detail:{trial:this.trialCount,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,response:this.response},bubbles:!0}))})}const T=E.filter(t=>t.new&&t.paused);if(!T.empty()){const t=T.attr("data-animating-ease-time-1"),e=T.attr("data-animating-ease-time-2");T.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).tween("paused",(r,n,i)=>{const a=i[n],s=cR(a),o=vP(void 0!==a.p?a.p:r.p,r.p),l=vP(void 0!==a.g?a.g:this.getFunction(r.function).g,this.getFunction(r.function).g),c=vP(1,r.w),d=vP(0,r.w),f=vP(r.p,0),p=vP(r.p,1);return r=>{a.p=o(r),a.g=l(r),a.w=Sz.pg2w(a.p,a.g),s.select(".line-p.above").attr("x1",u(a.p)).attr("x2",u(a.p)).attr("y1",h(c(wO(t)))).attr("y2",h(1)),s.select(".line-p.below").attr("x1",u(a.p)).attr("x2",u(a.p)).attr("y1",h(d(wO(t)))).attr("y2",h(0)),s.select(".line-w.before").attr("x1",u(f(xO(e)))).attr("x2",u(a.p)).attr("y1",h(a.w)).attr("y2",h(a.w)),s.select(".line-w.after").attr("x1",u(p(xO(e)))).attr("x2",u(a.p)).attr("y1",h(a.w)).attr("y2",h(a.w))}})}E.filter(t=>!t.new).transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).tween("non-animating",(t,e,r)=>{const n=r[e],i=cR(n),a=vP(void 0!==n.p?n.p:t.p,t.p),s=vP(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g);return t=>{n.p=a(t),n.g=s(t),n.w=Sz.pg2w(n.p,n.g),i.select(".line-p.above").attr("x1",u(n.p)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(1)),i.select(".line-p.below").attr("x1",u(n.p)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(0)),i.select(".line-w.before").attr("x1",u(0)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w)),i.select(".line-w.after").attr("x1",u(1)).attr("x2",u(n.p)).attr("y1",h(n.w)).attr("y2",h(n.w))}}),$.exit().remove();const N=_.selectAll(".curve").data(this.functions,t=>t.name),C=N.enter().append("g").classed("curve",!0).attr("clip-path","url(#clip-cpt-value)");C.append("path").classed("path",!0),C.append("path").classed("path touch",!0);const R=C.merge(N);(this.firstUpdate||t.has("interactive"))&&(this.interactive?R.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.g;switch(t.key){case"ArrowUp":case"ArrowLeft":r+=t.shiftKey?Sz.g.STEP:Sz.g.JUMP;break;case"ArrowDown":case"ArrowRight":r-=t.shiftKey?Sz.g.STEP:Sz.g.JUMP}r=r<Sz.g.MIN?Sz.g.MIN:r>Sz.g.MAX?Sz.g.MAX:r,r!==e.g&&(e.g=r,"default"===e.name&&(this.g=e.g),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}}):R.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),R.select(".path").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.g?n.g:t.g,t.g);return t=>{n.g=i(t);const e=ON(u.range()[0],u.range()[1]+1,1).map(t=>({p:u.invert(t),w:Sz.pg2w(u.invert(t),n.g)}));return p(e)}}),R.select(".path.touch").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.g?n.g:t.g,t.g);return t=>{n.g=i(t);const e=ON(u.range()[0],u.range()[1]+1,1).map(t=>({p:u.invert(t),w:Sz.pg2w(u.invert(t),n.g)}));return p(e)}}),N.exit().remove();const P=_.selectAll(".point").data(this.probabilities.filter(t=>null!=t.p),t=>t.name),O=P.enter().append("g").classed("point",!0);O.append("circle").classed("circle touch",!0),O.append("text").classed("label",!0);const I=O.merge(P);I.select("text").text(t=>t.label),I.filter(e=>(this.firstUpdate||t.has("interactive"))&&this.interactive&&!e.trial).attr("tabindex",0).classed("interactive",!0).call(f).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.p;switch(t.key){case"ArrowUp":case"ArrowRight":r+=t.shiftKey?.01:.05;break;case"ArrowDown":case"ArrowLeft":r-=t.shiftKey?.01:.05}r=r<0?0:r>1?1:r,r!==e.p&&(e.p=r,"default"===e.name&&(this.p=e.p),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-probability-change",{detail:{name:e.name,p:e.p,w:e.w,label:e.label,g:this.getFunction(e.function).g},bubbles:!0}))),t.preventDefault()}}),I.filter(e=>(this.firstUpdate||t.has("interactive"))&&!this.interactive||e.trial).attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null),I.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("transform",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.p?n.p:t.p,t.p),a=vP(void 0!==n.g?n.g:this.getFunction(t.function).g,this.getFunction(t.function).g);return t=>(n.p=i(t),n.g=a(t),`translate(\n            ${u(n.p)},\n            ${h(Sz.pg2w(n.p,n.g))}\n          )`)}),P.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("cpt-probability",Tz);class Nz extends(_U(Mz)){static get properties(){return{x:{attribute:"value",type:Number,reflect:!0},a:{attribute:"alpha",type:Number,reflect:!0},l:{attribute:"lambda",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},v:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.a=Sz.a.DEFAULT,this.l=Sz.l.DEFAULT,this.x=null,this.label="",this.function="default",this.functions=[{name:"default",a:this.a,l:this.l}],this.values=[{name:"default",x:this.x,label:this.label,function:this.function}],this.xl=null,this.xw=null,this.pw=null,this.xs=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.functions[0].a=this.a,this.functions[0].l=this.l,this.values[0].x=this.x,this.values[0].label=this.label,this.values[0].function=this.function,this.values.forEach(t=>{const e=this.functions.find(e=>e.name===t.function);t.v=Sz.xal2v(t.x,e.a,e.l)}),this.v=this.values[0].v}trial(t,e,r,n,i,a){this.trialCount&&this.removeValue(`${this.trialCount}-w`),this.trialCount&&this.removeValue(`${this.trialCount}-s`),this.xl=t,this.xw=e,this.pw=r,this.xs=n,this.trialCount=i,this.response=a,this.setValue(this.xw,`${this.trialCount}-w`,"g","default",!0),this.setValue(this.xs,`${this.trialCount}-s`,"s","default",!0)}pauseTrial(){const t=cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}clearFunctions(){this.functions.splice(1),this.requestUpdate()}clearValues(){this.values.splice(1),this.requestUpdate()}clear(){this.clearFunctions(),this.clearValues()}removeFunction(t){this.functions=this.functions.filter(e=>e.name!==t),this.requestUpdate()}removeValue(t){this.values=this.values.filter(e=>e.name!==t),this.requestUpdate()}remove(t){this.removeFunction(t),this.removeValue(t)}getFunction(t="default"){return this.functions.find(e=>e.name===t)}getValue(t="default"){return this.values.find(e=>e.name===t)}get(t="default"){return{...this.getFunction(t),...this.getValue(t)}}setFunction(t,e,r="default"){"default"===r&&(this.a=t,this.l=e);const n=this.functions.find(t=>t.name===r);void 0===n?this.functions.push({name:r,a:t,l:e}):(n.a=t,n.l=e),this.requestUpdate()}setValue(t,e="default",r="",n=e,i=!1){"default"===e&&(this.x=t,this.label=r);const a=this.values.find(t=>t.name===e);void 0===a?this.values.push({name:e,x:t,label:r,function:n,trial:i,new:i}):(a.x=t,a.label=r,a.function=n),this.requestUpdate()}set(t,e,r,n="default",i="",a=n){this.setFunction(e,r,a),this.setValue(t,n,i,a)}static get styles(){return[super.styles,uT`
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
          outline: none;

          filter: url("#shadow-2");
        }

        .curve-p.interactive:hover,
        .curve-n.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          transform: translateX(0);
        }

        .curve-p.interactive:active,
        .curve-n.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        .curve-p.interactive:focus-visible,
        .curve-n.interactive:focus-visible {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .point.interactive {
          cursor: nesw-resize;
          outline: none;

          filter: url("#shadow-2");

          /* HACK: This gets Safari to correctly apply the filter! */
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

        .point.interactive:focus-visible {
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
          stroke-width: 1;
          stroke-dasharray: 4;
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

        /* Make larger targets for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
          }
        }
      `]}render(){return WT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,s=3*this.rem,o=n-(i+a),l=n-(s+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=20,h=KD().domain([-20,u]).range([0,l]);this.xScale=h;const d=KD().domain([u,-20]).range([0,o]);this.yScale=d;const f=_R().subject((t,e)=>({x:t.x,y:this.yScale(Sz.xal2v(this.xScale.invert(t.x),e.a,e.l))})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=Sz.xlv2a(r,e.l,n);e.a=Number.isNaN(i)||i<Sz.a.MIN||i>Sz.a.MAX||r<0||n<0?r>n?Sz.a.MIN:Sz.a.MAX:i,"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),p=_R().subject((t,e)=>({x:t.x,y:this.yScale(Sz.xal2v(this.xScale.invert(t.x),e.a,e.l))})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x),n=this.yScale.invert(t.y),i=Sz.xav2l(r,e.a,n);e.l=Number.isNaN(i)||i<Sz.l.MIN||i>Sz.l.MAX||r>0||n>0?r>n?Sz.l.MAX:Sz.l.MIN:i,"default"===e.name&&(this.l=e.l),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),m=_R().subject((t,e)=>({x:this.xScale(e.x),y:this.yScale(e.v)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.xScale.invert(t.x);e.x=r<-20?-20:r>u?u:r,"default"===e.name&&(this.x=e.x),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:{name:e.name,x:e.x,v:e.v,label:e.label,a:this.getFunction(e.function).a,l:this.getFunction(e.function).l},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)}),g=wU().x(t=>h(t.x)).y(t=>d(t.v)),v=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),y=v.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(Mz.svgFilters,r[e])}),b=y.merge(v).attr("viewBox",`0 0 ${n} ${n}`),w=y.append("g").classed("plot",!0),x=b.select(".plot").attr("transform",`translate(${s}, ${i})`);w.append("clipPath").attr("id","clip-cpt-value").append("rect"),x.select("clipPath rect").attr("height",o+1).attr("width",l+1);const k=w.append("g").classed("underlayer",!0),A=x.select(".underlayer");k.append("rect").classed("background",!0),A.select(".background").attr("height",o).attr("width",l),k.append("g").classed("scale-x",!0);A.select(".scale-x").attr("transform",`translate(0, ${d(-20)})`).transition().duration(2*c).ease(xO).call(BN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),k.append("line").classed("axis-x",!0),A.select(".axis-x").transition().duration(c).ease(xO).attr("x1",h(-20)).attr("x2",h(u)).attr("y1",d(0)).attr("y2",d(0));const _=k.append("text").classed("title-x",!0).attr("text-anchor","middle");_.append("tspan").classed("name",!0).text("Objective Value ("),_.append("tspan").classed("math-var x",!0).text("x"),_.append("tspan").classed("name",!0).text(")"),A.select(".title-x").attr("transform",`translate(${l/2}, ${o+2.25*this.rem})`),k.append("g").classed("scale-y",!0);A.select(".scale-y").transition().duration(2*c).ease(xO).call(VN(d)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),k.append("line").classed("axis-y",!0),A.select(".axis-y").transition().duration(c).ease(xO).attr("x1",h(0)).attr("x2",h(0)).attr("y1",d(u)).attr("y2",d(-20));const $=k.append("text").classed("title-y",!0).attr("text-anchor","middle");$.append("tspan").classed("name",!0).text("Subjective Value ("),$.append("tspan").classed("math-var v",!0).text("v"),$.append("tspan").classed("name",!0).text(")"),A.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${o/2})rotate(-90)`),k.append("line").classed("diagonal",!0),A.select(".diagonal").transition().duration(2*c).ease(xO).attr("x1",h(-20)).attr("y1",d(-20)).attr("x2",h(u)).attr("y2",d(u)),w.append("g").classed("content",!0);const S=x.select(".content"),E=S.selectAll(".lines").data(this.values.filter(t=>null!=t.x),t=>t.name),M=E.enter().append("g").classed("lines",!0);M.each((t,e,r)=>{const n=cR(r[e]);n.append("line").classed("line-x above",!0),n.append("line").classed("line-x below",!0),n.append("line").classed("line-v before",!0),n.append("line").classed("line-v after",!0)}),M.filter(t=>t.new).attr("data-animating-ease-time-1",0).attr("data-animating-ease-time-2",0).each((t,e,r)=>{const n=cR(r[e]);n.select(".line-x.above").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(u)).attr("y2",d(u)),n.select(".line-x.below").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(-20)).attr("y2",d(-20)),n.select(".line-v.before").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(t.v)).attr("y2",d(t.v)),n.select(".line-v.after").attr("x1",h(t.x)).attr("x2",h(t.x)).attr("y1",d(t.v)).attr("y2",d(t.v))});const T=M.merge(E),N=T.filter(t=>t.new&&!t.paused);if(!N.empty()){const t=N.attr("data-animating-ease-time-1"),e=N.attr("data-animating-ease-time-2"),r=e=>KD().domain([0,1]).range([t,1])(e),n=e=>KD().range([0,1]).domain([t,1])(e),i=t=>KD().domain([0,1]).range([e,1])(t),a=t=>KD().range([0,1]).domain([e,1])(t),s=e=>r=>KD().domain([e(t),1]).range([0,1])(e(r)),o=t=>r=>KD().domain([t(e),1]).range([0,1])(t(r));N.transition("new-1").duration(()=>Math.floor(c*(1-t))).ease(r).attr("data-animating-ease-time-1",1).tween("animating",(t,e,r)=>{const i=r[e],a=cR(i),o=vP(void 0!==i.x?i.x:t.x,t.x),l=vP(void 0!==i.a?i.a:this.getFunction(t.function).a,this.getFunction(t.function).a),c=vP(void 0!==i.l?i.l:this.getFunction(t.function).l,this.getFunction(t.function).l),f=vP(d.invert(a.select(".line-x.above").attr("y1")),t.v),p=vP(d.invert(a.select(".line-x.below").attr("y1")),t.v);return t=>{i.x=o(xO(n(t))),i.a=l(xO(n(t))),i.l=c(xO(n(t))),i.v=Sz.xal2v(i.x,i.a,i.l),a.select(".line-x.above").attr("x1",h(i.x)).attr("x2",h(i.x)).attr("y1",d(f(s(wO)(t)))).attr("y2",d(u)),a.select(".line-x.below").attr("x1",h(i.x)).attr("x2",h(i.x)).attr("y1",d(p(s(wO)(t)))).attr("y2",d(-20))}}).transition("new-2").duration(()=>Math.floor(c*(1-e))).ease(i).attr("data-animating-ease-time-2",1).tween("animating",(t,e,r)=>{const n=r[e],i=cR(n),s=vP(void 0!==n.x?n.x:t.x,t.x),l=vP(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),c=vP(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l),f=vP(h.invert(i.select(".line-v.before").attr("x1")),-20),p=vP(h.invert(i.select(".line-v.after").attr("x1")),u);return t=>{n.x=s(xO(a(t))),n.a=l(xO(a(t))),n.l=c(xO(a(t))),n.v=Sz.xal2v(n.x,n.a,n.l),i.select(".line-v.before").attr("x1",h(f(o(xO)(t)))).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v)),i.select(".line-v.after").attr("x1",h(p(o(xO)(t)))).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v))}}).on("end",(t,e,r)=>{const n=r[e];n.removeAttribute("data-animating-ease-time-1"),n.removeAttribute("data-animating-ease-time-2"),t.new=!1,this.dispatchEvent(new CustomEvent("prospectable-response",{detail:{trial:this.trialCount,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,response:this.response},bubbles:!0}))})}const C=T.filter(t=>t.new&&t.paused);if(!C.empty()){const t=C.attr("data-animating-ease-time-1"),e=C.attr("data-animating-ease-time-2");C.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).tween("paused",(r,n,i)=>{const a=i[n],s=cR(a),o=vP(void 0!==a.x?a.x:r.x,r.x),l=vP(void 0!==a.a?a.a:this.getFunction(r.function).a,this.getFunction(r.function).a),c=vP(void 0!==a.l?a.l:this.getFunction(r.function).l,this.getFunction(r.function).l),f=vP(u,r.v),p=vP(-20,r.v),m=vP(r.x,-20),g=vP(r.x,u);return r=>{a.x=o(r),a.a=l(r),a.l=c(r),a.v=Sz.xal2v(a.x,a.a,a.l),s.select(".line-x.above").attr("x1",h(a.x)).attr("x2",h(a.x)).attr("y1",d(f(wO(t)))).attr("y2",d(u)),s.select(".line-x.below").attr("x1",h(a.x)).attr("x2",h(a.x)).attr("y1",d(p(wO(t)))).attr("y2",d(-20)),s.select(".line-v.before").attr("x1",h(m(xO(e)))).attr("x2",h(a.x)).attr("y1",d(a.v)).attr("y2",d(a.v)),s.select(".line-v.after").attr("x1",h(g(xO(e)))).attr("x2",h(a.x)).attr("y1",d(a.v)).attr("y2",d(a.v))}})}T.filter(t=>!t.new).transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).tween("non-animating",(t,e,r)=>{const n=r[e],i=cR(n),a=vP(void 0!==n.x?n.x:t.x,t.x),s=vP(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),o=vP(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l);return t=>{n.x=a(t),n.a=s(t),n.l=o(t),n.v=Sz.xal2v(n.x,n.a,n.l),i.select(".line-x.above").attr("x1",h(n.x)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(u)),i.select(".line-x.below").attr("x1",h(n.x)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(-20)),i.select(".line-v.before").attr("x1",h(-20)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v)),i.select(".line-v.after").attr("x1",h(u)).attr("x2",h(n.x)).attr("y1",d(n.v)).attr("y2",d(n.v))}}),E.exit().remove();const R=S.selectAll(".curve-p").data(this.functions,t=>t.name),P=R.enter().append("g").classed("curve-p",!0).attr("clip-path","url(#clip-cpt-value)");P.append("path").classed("path-p",!0),P.append("path").classed("path-p touch",!0);const O=P.merge(R);(this.firstUpdate||t.has("interactive"))&&(this.interactive?O.attr("tabindex",0).classed("interactive",!0).call(f).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.a;switch(t.key){case"ArrowUp":case"ArrowLeft":r+=t.shiftKey?Sz.a.STEP:Sz.a.JUMP;break;case"ArrowDown":case"ArrowRight":r-=t.shiftKey?Sz.a.STEP:Sz.a.JUMP}r=r<Sz.a.MIN?Sz.a.MIN:r>Sz.a.MAX?Sz.a.MAX:r,r!==e.a&&(e.a=r,"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}}):O.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),O.select(".path-p").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=ON(h(0),h.range()[1]+1,1).map(t=>({x:h.invert(t),v:Sz.xal2v(h.invert(t),n.a,n.l)}));return g(e)}}),O.select(".path-p.touch").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=ON(h(0),h.range()[1]+1,1).map(t=>({x:h.invert(t),v:Sz.xal2v(h.invert(t),n.a,n.l)}));return g(e)}}),R.exit().remove();const I=S.selectAll(".curve-n").data(this.functions,t=>t.name),D=I.enter().append("g").classed("curve-n",!0).attr("clip-path","url(#clip-cpt-value)");D.append("path").classed("path-n",!0),D.append("path").classed("path-n touch",!0);const U=D.merge(I);(this.firstUpdate||t.has("interactive"))&&(this.interactive?U.attr("tabindex",0).classed("interactive",!0).call(p).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.l;switch(t.key){case"ArrowUp":case"ArrowLeft":r-=t.shiftKey?Sz.l.STEP:Sz.l.JUMP;break;case"ArrowDown":case"ArrowRight":r+=t.shiftKey?Sz.l.STEP:Sz.l.JUMP}r=r<Sz.l.MIN?Sz.l.MIN:r>Sz.l.MAX?Sz.l.MAX:r,r!==e.l&&(e.l=r,"default"===e.name&&(this.l=e.l),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:this.get(e.name),bubbles:!0}))),t.preventDefault()}}):U.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),U.select(".path-n").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=ON(h.range()[0],h(0)+1,1).map(t=>({x:h.invert(t),v:Sz.xal2v(h.invert(t),n.a,n.l)}));return g(e)}}),U.select(".path-n.touch").transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.l?n.l:t.l,t.l);return t=>{n.a=i(t),n.l=a(t);const e=ON(h.range()[0],h(0)+1,1).map(t=>({x:h.invert(t),v:Sz.xal2v(h.invert(t),n.a,n.l)}));return g(e)}}),I.exit().remove();const z=S.selectAll(".point").data(this.values.filter(t=>null!=t.x),t=>t.name),F=z.enter().append("g").classed("point",!0);F.append("circle").classed("circle touch",!0),F.append("text").classed("label",!0);const j=F.merge(z);j.select("text").text(t=>t.label),j.filter(e=>(this.firstUpdate||t.has("interactive"))&&this.interactive&&!e.trial).attr("tabindex",0).classed("interactive",!0).call(m).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=e.x;switch(t.key){case"ArrowUp":case"ArrowRight":r+=t.shiftKey?.2:1;break;case"ArrowDown":case"ArrowLeft":r-=t.shiftKey?.2:1}r=r<-20?-20:r>u?u:r,r!==e.x&&(e.x=r,"default"===e.name&&(this.x=e.x),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("cpt-value-change",{detail:{name:e.name,x:e.x,v:e.v,label:e.label,a:this.getFunction(e.function).a,l:this.getFunction(e.function).l},bubbles:!0}))),t.preventDefault()}}),j.filter(e=>(this.firstUpdate||t.has("interactive"))&&!this.interactive||e.trial).attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null),j.transition().duration(this.drag?0:this.firstUpdate?2*c:c).ease(xO).attrTween("transform",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.x?n.x:t.x,t.x),a=vP(void 0!==n.a?n.a:this.getFunction(t.function).a,this.getFunction(t.function).a),s=vP(void 0!==n.l?n.l:this.getFunction(t.function).l,this.getFunction(t.function).l);return t=>(n.x=i(t),n.a=a(t),n.l=s(t),`translate(\n            ${h(n.x)},\n            ${d(Sz.xal2v(n.x,n.a,n.l))}\n          )`)}),z.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("cpt-value",Nz);class Cz extends(_U(Mz)){static get styles(){return[super.styles,uT`
        :host {
          --decidables-spinner-font-size: 1.75rem;
          --decidables-spinner-input-width: 4rem;
          --decidables-spinner-prefix: "$";

          position: relative;

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
          outline: none;

          filter: url("#shadow-2");
        }

        .arc.interactive:hover {
          filter: url("#shadow-4");
        }

        .arc.interactive:active {
          filter: url("#shadow-8");
        }

        .arc.interactive:focus-visible {
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

          dominant-baseline: middle;

          user-select: none;

          text-anchor: middle;
        }

        .label.interactive {
          position: absolute;

          width: var(--decidables-spinner-input-width);
          height: calc(var(--decidables-spinner-font-size) * 1.5);

          overflow: visible;
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
      `]}render(){return WT`
      <slot></slot>
    `}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{t.some(t=>"childList"===t.type||"attributes"===t.type&&t.target!==this)&&this.requestUpdate()}),this.mutationObserver.observe(this,{subtree:!0,childList:!0,attributes:!0})}disconnectedCallback(){this.mutationObserver.disconnect(),super.disconnectedCallback()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=n-(0+0),a=n-(0+0),s=this.querySelectorAll("risky-outcome"),o=s.length?-s[0].p:0,l=function(){var t=kU,e=xU,r=null,n=WD(0),i=WD(aU),a=WD(0);function s(s){var o,l,c,u,h,d=(s=mU(s)).length,f=0,p=new Array(d),m=new Array(d),g=+n.apply(this,arguments),v=Math.min(aU,Math.max(-aU,i.apply(this,arguments)-g)),y=Math.min(Math.abs(v)/d,a.apply(this,arguments)),b=y*(v<0?-1:1);for(o=0;o<d;++o)(h=m[p[o]=o]=+t(s[o],o,s))>0&&(f+=h);for(null!=e?p.sort(function(t,r){return e(m[t],m[r])}):null!=r&&p.sort(function(t,e){return r(s[t],s[e])}),o=0,c=f?(v-d*b)/f:0;o<d;++o,g=u)l=p[o],u=g+((h=m[l])>0?h*c:0)+b,m[l]={data:s[l],index:o,value:h,startAngle:g,endAngle:u,padAngle:y};return m}return s.value=function(e){return arguments.length?(t="function"==typeof e?e:WD(+e),s):t},s.sortValues=function(t){return arguments.length?(e=t,r=null,s):e},s.sort=function(t){return arguments.length?(r=t,e=null,s):r},s.startAngle=function(t){return arguments.length?(n="function"==typeof t?t:WD(+t),s):n},s.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:WD(+t),s):i},s.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:WD(+t),s):a},s}().startAngle(o*Math.PI-Math.PI).endAngle(o*Math.PI+Math.PI).sortValues(null).value(t=>t.p)(s),c=l.filter(t=>!t.data.interactive),u=l.filter(t=>t.data.interactive);function h(t){const e=(t+2*Math.PI)%(2*Math.PI);return e>Math.PI?e-2*Math.PI:e<-Math.PI?e+2*Math.PI:e}const d=_R().subject((t,e)=>{const r=h((e.endAngle+e.startAngle)/2),n=h(Math.atan2(t.y,t.x)+Math.PI/2);return s.forEach(t=>{t.startP=t.p}),{arcAngle:r,startAngle:h(n-r)}}).on("start",(t,e)=>{if(!e.data.interactive)return;cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{if(!e.data.interactive)return;const r=h(Math.atan2(t.y,t.x)+Math.PI/2),n=h(r-t.subject.arcAngle),i=h(t.subject.startAngle>0?n-t.subject.startAngle:t.subject.startAngle-n)/Math.PI,a=e.data.startP+i,o=a>.99?.99:a<.01?.01:a;s.forEach(t=>{t.p=t===e.data?o:t.startP/(1-e.data.startP)*(1-o)}),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0}))}).on("end",(t,e)=>{if(!e.data.interactive)return;cR(t.currentTarget).classed("dragging",!1)}),f=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),p=f.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(Mz.svgFilters,r[e])}),m=p.merge(f).attr("viewBox",`0 0 ${n} ${n}`),g=p.append("g").classed("pie",!0),v=m.select(".pie").attr("transform",`translate(${a/2}, ${i/2})`);g.append("circle").classed("outline",!0),v.select(".outline").attr("r",Math.min(a,i)/2-1);const y=v.selectAll(".arc").data(l),b=y.enter().append("path").call(d).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){const r=e.data.p;let n=e.data.p;switch(t.key){case"ArrowUp":n-=t.shiftKey?.01:.05;break;case"ArrowDown":n+=t.shiftKey?.01:.05}const i=n>.99?.99:n<.01?.01:n;s.forEach(t=>{t.p=t===e.data?i:t.p/(1-r)*(1-i)}),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0})),t.preventDefault()}});b.merge(y).attr("tabindex",t=>u.includes(t)&&l.length>1?0:null).attr("class",t=>`arc ${t.data.name}`).classed("interactive",t=>u.includes(t)&&l.length>1).attr("d",pU().innerRadius(0).outerRadius(Math.min(a,i)/2-1)),y.exit().remove();const w=v.selectAll(".label.static").data(c),x=cR(this.renderRoot).selectAll(".label.interactive").data(u),k=w.enter().append("text"),A=x.enter().append("xhtml:div");A.append("decidables-spinner").on("input",(t,e)=>{e.data.x=parseFloat(t.target.value),this.dispatchEvent(new CustomEvent("risky-outcome-change",{detail:{x:e.data.x,p:e.data.p,name:e.data.name},bubbles:!0}))}),k.merge(w).attr("class",t=>`label static ${t.data.name}`).attr("transform",t=>{if(1===l.length)return"translate(0, 0)";const e=Math.min(a,i)/2*.6;return`translate(${pU().innerRadius(e).outerRadius(e).centroid(t)})`}).text(t=>`$${t.data.x.toFixed(0)}`);const _=A.merge(x).attr("class",t=>`label interactive ${t.data.name}`).attr("style",t=>{const e=parseFloat(this.getComputedStyleValue("--decidables-spinner-input-width")),r=parseFloat(this.getComputedStyleValue("--decidables-spinner-font-size")),n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10),s=a/2+e*n/-2,o=i/2+r*n*1.5/-2;if(1===l.length)return`left: ${s}px; top: ${o}px;`;const c=Math.min(a,i)/2*.6,u=pU().innerRadius(c).outerRadius(c);return`left: ${u.centroid(t)[0]+s}px; top: ${u.centroid(t)[1]+o}px;`});_.select("decidables-spinner").attr("value",t=>`${t.data.x.toFixed(0)}`),w.exit().remove(),x.exit().remove()}}customElements.define("risky-option",Cz);customElements.define("risky-outcome",class extends Mz{static get properties(){return{x:{attribute:"value",type:Number,reflect:!0},p:{attribute:"probability",type:Number,reflect:!0},name:{attribute:"name",type:String,reflect:!0}}}constructor(){super(),this.x=0,this.p=0,this.name=""}static get styles(){return[uT`
        :host {
          display: none;
        }
      `]}render(){return WT``}});customElements.define("risky-choice",class extends Mz{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},xl:{attribute:"loss",type:Number,reflect:!0},xw:{attribute:"win",type:Number,reflect:!0},pw:{attribute:"probability",type:Number,reflect:!0},xs:{attribute:"sure",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.xl=0,this.xw=100,this.pw=.75,this.xs=50}static get styles(){return[super.styles,uT`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("risky-choice-change",{detail:{xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs},bubbles:!0}))}winChange(t){this.xw=parseFloat(t.detail.x),this.pw=parseFloat(t.detail.p),this.sendEvent()}sureChange(t){this.xs=parseFloat(t.detail.x),this.sendEvent()}render(){return WT`
      <div class="holder">
        <risky-option class="gamble" ?interactive=${this.interactive} @risky-outcome-change=${this.winChange.bind(this)}>
          ${"choice"===this.state?WT`
              <risky-outcome probability="${1-this.pw}" value="${this.xl}" name="loss"></risky-outcome>
              <risky-outcome ?interactive=${this.interactive} probability="${this.pw}" value="${this.xw}" name="win"></risky-outcome>`:""}
        </risky-option><span class="query"
         >${"choice"===this.state?"?":"fixation"===this.state?"+":WT`∙`}</span
        ><risky-option class="sure" ?interactive=${this.interactive} @risky-outcome-change=${this.sureChange.bind(this)}>
          ${"choice"===this.state?WT`
              <risky-outcome ?interactive=${this.interactive} probability="1" value="${this.xs}" name="sure"></risky-outcome>`:""}
        </risky-option>
      </div>`}});customElements.define("risky-task",class extends Mz{static get properties(){return{duration:{attribute:"duration",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.duration=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.states=["resetted","iti","stimulus","ended"],this.state="resetted",this.range={},this.range.xl={start:0,stop:0,step:1},this.range.xw={start:10,stop:30,step:1},this.range.pw={start:.1,stop:.9,step:.1},this.range.xs={start:5,stop:15,step:1},this.range.xl.values=ON(this.range.xl.start,this.range.xl.stop+.01,this.range.xl.step),this.range.xw.values=ON(this.range.xw.start,this.range.xw.stop+.01,this.range.xw.step),this.range.pw.values=ON(this.range.pw.start,this.range.pw.stop+.01,this.range.pw.step),this.range.xs.values=ON(this.range.xs.start,this.range.xs.stop+.01,this.range.xs.step),this.firstUpdate=!0,this.xl=0,this.xw=0,this.pw=0,this.xs=0,this.trial=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.runner=void 0}static get styles(){return[super.styles,uT`
        :host {
          display: inline-block;
        }
      `]}render(){return WT`
      <div class="holder">
        <risky-choice state="${"stimulus"===this.state?"choice":"iti"===this.state?"fixation":"blank"}" probability="${this.pw}" win="${this.xw}" loss="${this.xl}" sure="${this.xs}"></risky-choice>
      </div>`}update(t){super.update(t),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=DP()-this.pauseTime,this.pauseTime=0),this.runner=BP(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=DP())),this.firstUpdate=!1}reset(){this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.xl=0,this.xw=0,this.pw=0,this.xs=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0}run(){const t=DP(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0;this.lastTime=e,"resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("risky-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(this.trial+=1,this.state="stimulus",this.startTime=e,this.xl=this.range.xl.values[Math.floor(Math.random()*this.range.xl.values.length)],this.xw=this.range.xw.values[Math.floor(Math.random()*this.range.xw.values.length)],this.pw=this.range.pw.values[Math.floor(Math.random()*this.range.pw.values.length)],this.xs=this.range.xs.values[Math.floor(Math.random()*this.range.xs.values.length)],this.vDiff=this.xw*this.pw+this.xl*(1-this.pw)-this.xs,this.gamblePayoff=Math.random()<this.pw?this.xw:this.xl,this.surePayoff=this.xs,this.better=this.vDiff>0?"gamble":this.vDiff<0?"sure":"equal",this.dispatchEvent(new CustomEvent("risky-trial-start",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,better:this.better,gamblePayoff:this.gamblePayoff,surePayoff:this.surePayoff},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration&&(this.dispatchEvent(new CustomEvent("risky-trial-end",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,xl:this.xl,xw:this.xw,pw:this.pw,xs:this.xs,better:this.better,gamblePayoff:this.gamblePayoff,surePayoff:this.surePayoff},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.dispatchEvent(new CustomEvent("risky-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e))}});class Rz{static k={DEFAULT:.05,MIN:0,MAX:100,STEP:.001,JUMP:.01};static adk2v(t,e,r){return t/(1+r*e)}static adv2k(t,e,r){return(t-r)/(r*e)}}var Pz={a:"#e41a1c",d:"#377eb8",k:"#4daf4a",v:"#984ea3",sooner:"#ff7f00",later:"#f781bf",larger:"#4545d0",smaller:"#f032e6",equal:"#10dbc9",nr:"#cccccc"};class Oz extends $U{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return Pz}static get lights(){return Object.keys(Oz.colors).reduce((t,e)=>(t[e]=lP(Oz.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(Oz.colors).reduce((t,e)=>(t[e]=lP(Oz.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,uT`
        :host {
          ---color-a: var(--color-a, ${cT(this.colors.a)});
          ---color-d: var(--color-d, ${cT(this.colors.d)});
          ---color-k: var(--color-k, ${cT(this.colors.k)});
          ---color-v: var(--color-v, ${cT(this.colors.v)});
          ---color-sooner: var(--color-sooner, ${cT(this.colors.sooner)});
          ---color-later: var(--color-later, ${cT(this.colors.later)});
          ---color-larger: var(--color-larger, ${cT(this.colors.larger)});
          ---color-smaller: var(--color-smaller, ${cT(this.colors.smaller)});
          ---color-equal: var(--color-equal, ${cT(this.colors.equal)});
          ---color-nr: var(--color-nr, ${cT(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${cT(this.lights.a)});
          ---color-d-light: var(--color-d-light, ${cT(this.lights.d)});
          ---color-k-light: var(--color-k-light, ${cT(this.lights.k)});
          ---color-v-light: var(--color-v-light, ${cT(this.lights.v)});
          ---color-sooner-light: var(--color-sooner-light, ${cT(this.lights.sooner)});
          ---color-later-light: var(--color-later-light, ${cT(this.lights.later)});
          ---color-larger-light: var(--color-larger-light, ${cT(this.lights.larger)});
          ---color-smaller-light: var(--color-smaller-light, ${cT(this.lights.smaller)});
          ---color-equal-light: var(--color-equal-light, ${cT(this.lights.equal)});
          ---color-nr-light: var(--color-nr-light, ${cT(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${cT(this.darks.a)});
          ---color-d-dark: var(--color-d-dark, ${cT(this.darks.d)});
          ---color-k-dark: var(--color-k-dark, ${cT(this.darks.k)});
          ---color-v-dark: var(--color-v-dark, ${cT(this.darks.v)});
          ---color-sooner-dark: var(--color-sooner-dark, ${cT(this.darks.sooner)});
          ---color-later-dark: var(--color-later-dark, ${cT(this.darks.later)});
          ---color-larger-dark: var(--color-larger-dark, ${cT(this.darks.larger)});
          ---color-smaller-dark: var(--color-smaller-dark, ${cT(this.darks.smaller)});
          ---color-equal-dark: var(--color-equal-dark, ${cT(this.darks.equal)});
          ---color-nr-dark: var(--color-nr-dark, ${cT(this.darks.nr)});
        }
      `]}}class Iz extends(_U(Oz)){static get properties(){return{a:{attribute:"amount",type:Number,reflect:!0},d:{attribute:"delay",type:Number,reflect:!0},label:{attribute:"label",type:String,reflect:!0},k:{attribute:"k",type:Number,reflect:!0},v:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={value:{min:0,max:80,step:1,round:Math.round},time:{min:0,max:100,step:1,round:Math.round}},this.a=null,this.d=null,this.label="",this.k=Rz.k.DEFAULT,this.options=[{name:"default",a:this.a,d:this.d,label:this.label}],this.as=null,this.ds=null,this.al=null,this.dl=null,this.trialCount=null,this.response=null,this.alignState()}alignState(){this.options[0].a=this.a,this.options[0].d=this.d,this.options[0].label=this.label,this.options.forEach(t=>{t.v=Rz.adk2v(t.a,t.d,this.k)}),this.v=this.options[0].v}trial(t,e,r,n,i,a){this.trialCount&&this.removeOption(`${this.trialCount}-s`),this.trialCount&&this.removeOption(`${this.trialCount}-l`),this.as=t,this.ds=e,this.al=r,this.dl=n,this.trialCount=i,this.response=a,this.setOption(this.as,this.ds,`${this.trialCount}-s`,"s",!0),this.setOption(this.al,this.dl,`${this.trialCount}-l`,"l",!0)}pauseTrial(){const t=cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]");t.interrupt("new-1"),t.interrupt("new-2"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){cR(this.renderRoot).selectAll(".lines[data-animating-ease-time-1]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}clearOptions(){this.options.splice(1),this.requestUpdate()}removeOption(t){this.options=this.options.filter(e=>e.name!==t),this.requestUpdate()}getOption(t="default"){return this.options.find(e=>e.name===t)}setOption(t,e,r="default",n="",i=!1){"default"===r&&(this.a=t,this.d=e,this.label=n);const a=this.options.find(t=>t.name===r);void 0===a?this.options.push({name:r,a:t,d:e,label:n,trial:i,new:i}):(a.a=t,a.d=e,a.label=n),this.requestUpdate()}static get styles(){return[super.styles,uT`
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

        .option .interactive {
          outline: none;

          filter: url("#shadow-2");
        }

        .option .interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          transform: translateX(0);
        }

        .option .interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        .option .interactive:focus-visible {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .option .body.interactive:has(~ .point:hover) {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateX(0);
        }

        .option .body.interactive:has(~ .point:active) {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        .body.interactive:has(~ .point:focus-visible) {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .gradient.sooner stop {
          stop-color: var(---color-sooner);
        }

        .gradient.later stop {
          stop-color: var(---color-later);
        }

        .stop-0,
        .stop-before {
          stop-opacity: 0;
        }

        .stop-after,
        .stop-100 {
          stop-opacity: 1;
        }

        .fill {
          fill: var(---color-element-enabled);
          fill-opacity: 0.5;
          stroke: none;
        }

        .interactive .fill {
          cursor: move;
          outline: none;
        }

        .sooner .fill {
          fill: var(---color-sooner);
        }

        .later .fill {
          fill: var(---color-later);
        }

        .trial.sooner .fill {
          fill: url("#sooner-gradient");
        }

        .trial.later .fill {
          fill: url("#later-gradient");
        }

        .bar {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .interactive .bar {
          cursor: ew-resize;
          outline: none;
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

        .point.interact {
          cursor: ns-resize;
          outline: none;
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .curve.interactive {
          cursor: nwse-resize;
          outline: none;
        }

        /* Make larger targets for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
          }
        }
      `]}render(){return WT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const a=2*this.rem,s=3*this.rem,o=3*this.rem,l=i-(a+s),c=n-(o+2*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=KD().domain([this.scale.time.min,this.scale.time.max]).range([0,c]),d=KD().domain([this.scale.value.min,this.scale.value.max]).range([l,0]),f=wU().x(t=>h(t.d)).y(t=>d(t.v)),p=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),m=p.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(Oz.svgFilters,r[e])}),g=m.append("defs").classed("gradients",!0),v=g.append("linearGradient").classed("gradient sooner",!0).attr("id","sooner-gradient");v.append("stop").classed("stop-0",!0).attr("offset","0"),v.append("stop").classed("stop-before animation",!0).attr("offset","1"),v.append("stop").classed("stop-after animation",!0).attr("offset","1"),v.append("stop").classed("stop-100",!0).attr("offset","1");const y=g.append("linearGradient").classed("gradient later",!0).attr("id","later-gradient");y.append("stop").classed("stop-0",!0).attr("offset","0"),y.append("stop").classed("stop-before animation",!0).attr("offset","1"),y.append("stop").classed("stop-after animation",!0).attr("offset","1"),y.append("stop").classed("stop-100",!0).attr("offset","1");const b=m.merge(p).attr("viewBox",`0 0 ${n} ${i}`),w=m.append("g").classed("plot",!0),x=b.select(".plot").attr("transform",`translate(${o}, ${a})`);w.append("clipPath").attr("id","clip-htd-curves").append("rect"),x.select("clipPath rect").attr("height",l+1).attr("width",c+1);const k=w.append("g").classed("underlayer",!0),A=x.select(".underlayer");k.append("rect").classed("background",!0),A.select(".background").attr("height",l).attr("width",c),k.append("g").classed("axis-x",!0);A.select(".axis-x").attr("transform",`translate(0, ${d(0)})`).transition().duration(2*u).ease(xO).call(BN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const _=k.append("text").classed("title-x",!0).attr("text-anchor","middle");_.append("tspan").classed("name",!0).text("Delay ("),_.append("tspan").classed("math-var d",!0).text("D"),_.append("tspan").classed("name",!0).text(")"),A.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`),k.append("g").classed("axis-y",!0);A.select(".axis-y").transition().duration(2*u).ease(xO).call(VN(d)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const $=k.append("text").classed("title-y",!0).attr("text-anchor","middle");$.append("tspan").classed("name",!0).text("Value ("),$.append("tspan").classed("math-var v",!0).text("V"),$.append("tspan").classed("name",!0).text(")"),A.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),w.append("g").classed("content",!0);const S=x.select(".content").selectAll(".option").data(this.options.filter(t=>null!==t.a&&null!==t.d),t=>t.name),E=S.enter().append("g").attr("class",t=>`option ${"s"===t.label?"sooner":"l"===t.label?"later":""} ${t.trial?"trial":""}`),M=E.append("g").classed("body",!0),T=M.append("g").classed("fill",!0).attr("clip-path","url(#clip-htd-curves)").each(t=>{t.trial&&b.selectAll(".gradient .animation").attr("offset",1)});T.append("path").classed("region",!0).attr("d",t=>{const e=ON(h(t.d),h(0),-1).map(e=>({d:h.invert(e),v:Rz.adk2v(t.a,t.d-h.invert(e),this.k)}));return f([...e,{d:0,v:0},{d:t.d,v:0}])});const N=M.append("g").classed("bar",!0);N.append("line").classed("line",!0),N.append("line").classed("line touch",!0),N.selectAll(".line").attr("x1",t=>h(t.d)).attr("x2",t=>h(t.d)).attr("y1",d(0)).attr("y2",t=>d(t.a)).attr("stroke-dasharray",(t,e,r)=>{if(t.trial){return`0,${r[e].getTotalLength()}`}return"none"});M.append("g").classed("point",!0).append("circle").classed("mark touch",!0);const C=E.append("g").classed("curve",!0).attr("clip-path","url(#clip-htd-curves)");C.append("path").classed("path",!0),C.append("path").classed("path touch",!0),C.selectAll(".path").attr("d",t=>{const e=ON(h(t.d),h(0),-1).map(e=>({d:h.invert(e),v:Rz.adk2v(t.a,t.d-h.invert(e),this.k)}));return f(e)}).attr("stroke-dasharray",(t,e,r)=>{if(t.trial){return`0,${r[e].getTotalLength()}`}return"none"});const R=E.append("g").classed("point top-point",!0);R.append("circle").classed("mark touch",!0),R.append("text").classed("label",!0),E.selectAll(".point").attr("transform",t=>`translate(${h(t.d)}, ${d(t.a)})`).attr("opacity",t=>t.trial?0:1);const P=E.merge(S),O=P.filter((t,e,r)=>this.interactive&&!t.trial&&!cR(r[e]).select(".body").classed("interactive")).select(".body");O.classed("interactive",!0).attr("tabindex",0).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)){let r=e.a,n=e.d;switch(t.key){case"ArrowUp":r+=t.shiftKey?1:5;break;case"ArrowDown":r-=t.shiftKey?1:5;break;case"ArrowRight":n+=t.shiftKey?1:5;break;case"ArrowLeft":n-=t.shiftKey?1:5}n=n<this.scale.time.min?this.scale.time.min:n>this.scale.time.max?this.scale.time.max:n,r=r<this.scale.value.min?this.scale.value.min:r>this.scale.value.max?this.scale.value.max:r,n===e.d&&r===e.a||(e.d=n,e.a=r,"default"===e.name&&(this.d=e.d,this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}}),O.select(".fill").call(_R().subject((t,e)=>({x:h(e.d),y:d(e.a)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=h.invert(t.x),n=d.invert(t.y);e.d=r<this.scale.time.min?this.scale.time.min:r>this.scale.time.max?this.scale.time.max:this.scale.time.round(r),e.a=n<this.scale.value.min?this.scale.value.min:n>this.scale.value.max?this.scale.value.max:this.scale.value.round(n),"default"===e.name&&(this.d=e.d,this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)})),O.select(".bar").call(_R().subject((t,e)=>({x:h(e.d),y:d(e.a)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=h.invert(t.x);e.d=r<this.scale.time.min?this.scale.time.min:r>this.scale.time.max?this.scale.time.max:this.scale.time.round(r),"default"===e.name&&(this.d=e.d),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)})),P.filter((t,e,r)=>this.interactive&&!t.trial&&!cR(r[e]).select(".top-point").classed("interact")).select(".top-point").classed("interact",!0).attr("tabindex",-1).call(_R().subject((t,e)=>({x:h(e.d),y:d(e.a)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=d.invert(t.y);e.a=r<this.scale.value.min?this.scale.value.min:r>this.scale.value.max?this.scale.value.max:this.scale.value.round(r),"default"===e.name&&(this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)})).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)){let r=e.a,n=e.d;switch(t.key){case"ArrowUp":r+=t.shiftKey?1:5;break;case"ArrowDown":r-=t.shiftKey?1:5;break;case"ArrowRight":n+=t.shiftKey?1:5;break;case"ArrowLeft":n-=t.shiftKey?1:5}n=n<this.scale.time.min?this.scale.time.min:n>this.scale.time.max?this.scale.time.max:n,r=r<this.scale.value.min?this.scale.value.min:r>this.scale.value.max?this.scale.value.max:r,n===e.d&&r===e.a||(e.d=n,e.a=r,"default"===e.name&&(this.d=e.d,this.a=e.a),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}}),P.filter((t,e,r)=>this.interactive&&!cR(r[e]).select(".curve").classed("interactive")).select(".curve").classed("interactive",!0).attr("tabindex",0).call(_R().subject(t=>({x:t.x,y:t.y})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=e.d-h.invert(t.x),n=r<0?0:r>e.d?e.d:r,i=d.invert(t.y),a=i<=0?.001:i>e.a?e.a:i,s=Rz.adv2k(e.a,n,a);this.k=s<Rz.k.MIN?Rz.k.MIN:s>Rz.k.MAX?Rz.k.MAX:s,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1)})).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let{k:r}=this;switch(t.key){case"ArrowUp":case"ArrowLeft":r*=t.shiftKey?.95:.85;break;case"ArrowDown":case"ArrowRight":r*=t.shiftKey?1/.95:1/.85}r=r<Rz.k.MIN?Rz.k.MIN:r>Rz.k.MAX?Rz.k.MAX:r,r!==this.k&&(this.k=r,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("htd-curves-change",{detail:{name:e.name,a:e.a,d:e.d,k:this.k,label:e.label},bubbles:!0}))),t.preventDefault()}});const I=P.filter((t,e,r)=>(!this.interactive||t.trial)&&cR(r[e]).select(".body").classed("interactive"));I.classed("interactive",!1),I.select(".fill").attr("tabindex",null).on("drag",null).on("keydown",null),I.select(".bar").on("drag",null).on("keydown",null),P.filter((t,e,r)=>(!this.interactive||t.trial)&&cR(r[e]).select(".top-point").classed("interact")).select(".top-point").classed("interact",!1).on("drag",null).on("keydown",null),P.filter((t,e,r)=>!this.interactive&&cR(r[e]).select(".curve").classed("interactive")).select(".curve").classed("interactive",!1).attr("tabindex",null).on("drag",null).on("keydown",null),P.filter(t=>t.new).each(()=>{b.selectAll(".gradient .animation").transition().duration(u).delay(u+u/10).ease(bO).attrTween("offset",()=>vP(1,0))}),P.filter(t=>t.new).selectAll(".bar .line").transition().duration(u).ease(bO).attrTween("stroke-dasharray",(t,e,r)=>{const n=r[e].getTotalLength();return vP(`0,${n}`,`${n},${n}`)}),P.filter(t=>t.new).selectAll(".point").transition().duration(u/10).delay(u).ease(bO).attrTween("opacity",()=>vP(0,1)),P.filter(t=>t.new).selectAll(".curve .path").transition().duration(u).delay(u+u/10).ease(bO).attrTween("stroke-dasharray",(t,e,r)=>{const n=r[e].getTotalLength();return vP(`0,${n}`,`${n},0`)}).on("end",t=>{t.new=!1,this.dispatchEvent(new CustomEvent("discountable-response",{detail:{trial:this.trialCount,as:this.as,ds:this.ds,al:this.al,dl:this.dl,response:this.response},bubbles:!0}))}),P.filter(t=>"s"===t.label).raise(),P.filter(t=>"l"===t.label).lower(),S.select(".fill .region").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.d?n.d:t.d,t.d);return t=>{n.a=i(t),n.d=a(t);const e=ON(h(n.d),h(0),-1).map(t=>({d:h.invert(t),v:Rz.adk2v(n.a,n.d-h.invert(t),this.k)}));return f([...e,{d:0,v:0},{d:n.d,v:0}])}}),S.selectAll(".bar .line").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(xO).attrTween("x1",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:t.d,t.d);return t=>(n.d=i(t),`${h(n.d)}`)}).attrTween("x2",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:t.d,t.d);return t=>(n.d=i(t),`${h(n.d)}`)}).attr("y1",d(0)).attrTween("y2",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a);return t=>(n.a=i(t),`${d(n.a)}`)}),S.selectAll(".point").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(xO).attrTween("transform",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.d?n.d:t.d,t.d),a=vP(void 0!==n.a?n.a:t.a,t.a);return t=>(n.d=i(t),n.a=a(t),`translate(${h(n.d)}, ${d(n.a)})`)}),P.select(".point .label").text(t=>t.label),S.selectAll(".curve .path").transition().duration(this.drag?0:this.firstUpdate?2*u:u).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:t.a,t.a),a=vP(void 0!==n.d?n.d:t.d,t.d);return t=>{n.a=i(t),n.d=a(t);const e=ON(h(n.d),h(0),-1).map(t=>({d:h.invert(t),v:Rz.adk2v(n.a,n.d-h.invert(t),this.k)}));return f(e)}}),S.exit().remove(),this.drag=!1,this.firstUpdate=!1}}customElements.define("htd-curves",Iz);customElements.define("itc-option",class extends Oz{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},a:{attribute:"amount",type:Number,reflect:!0},d:{attribute:"delay",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.a=0,this.d=0}static get styles(){return[super.styles,uT`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("itc-option-change",{detail:{a:this.a,d:this.d},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.sendEvent()}dInput(t){this.d=parseFloat(t.target.value),this.sendEvent()}render(){return WT`
      <div class="holder">
        ${"choice"===this.state?this.interactive?WT`<decidables-spinner
              class="amount interactive"
              ?disabled=${!this.interactive}
              step="1"
              .value="${this.a}"
              @input=${this.aInput.bind(this)}
              ></decidables-spinner>`:WT`<div
              class="amount static"
              >$${this.a}</div>`:""}
        ${"choice"===this.state?WT`<div class="in">in</div>`:""}
        ${"choice"===this.state?this.interactive?WT`<decidables-spinner
              class="delay interactive"
              ?disabled=${!this.interactive}
              min="0" 
              step="1"
              .value="${this.d}"
              @input=${this.dInput.bind(this)}
              ></decidables-spinner>`:WT`<div
              class="delay static"
              >${this.d} days</div>`:""}
      </div>
    `}});customElements.define("itc-choice",class extends Oz{static get properties(){return{state:{attribute:"state",type:String,reflect:!0},as:{attribute:"amount-ss",type:Number,reflect:!0},ds:{attribute:"delay-ss",type:Number,reflect:!0},al:{attribute:"amount-ll",type:Number,reflect:!0},dl:{attribute:"delay-ll",type:Number,reflect:!0}}}constructor(){super(),this.states=["choice","fixation","blank"],this.state="choice",this.as=10,this.ds=5,this.al=40,this.dl=30}static get styles(){return[super.styles,uT`
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
      `]}sendEvent(){this.dispatchEvent(new CustomEvent("itc-choice-change",{detail:{as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0}))}ssChange(t){this.as=parseFloat(t.detail.a),this.ds=parseFloat(t.detail.d),this.sendEvent()}llChange(t){this.al=parseFloat(t.detail.a),this.dl=parseFloat(t.detail.d),this.sendEvent()}render(){return WT`
      <div class="holder">
        <itc-option
          class="ss"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.as}"
          delay="${this.ds}"
          @itc-option-change=${this.ssChange.bind(this)}>
        </itc-option><span class="query"
         >${"choice"===this.state?"?":"fixation"===this.state?"+":WT`∙`}</span
        ><itc-option
          class="ll"
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.al}"
          delay="${this.dl}"
          @itc-option-change=${this.llChange.bind(this)}>
        </itc-option>
      </div>`}});customElements.define("itc-task",class extends Oz{static get properties(){return{duration:{attribute:"duration",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.duration=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.states=["resetted","iti","stimulus","ended"],this.state="resetted",this.range={},this.range.as={start:5,stop:20,step:5},this.range.ds={start:5,stop:20,step:5},this.range.al={start:40,stop:80,step:5},this.range.dl={start:40,stop:80,step:5},this.range.as.values=ON(this.range.as.start,this.range.as.stop+.01,this.range.as.step),this.range.ds.values=ON(this.range.ds.start,this.range.ds.stop+.01,this.range.ds.step),this.range.al.values=ON(this.range.al.start,this.range.al.stop+.01,this.range.al.step),this.range.dl.values=ON(this.range.dl.start,this.range.dl.stop+.01,this.range.dl.step),this.firstUpdate=!0,this.as=0,this.ds=0,this.al=0,this.dl=0,this.trial=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.runner=void 0}static get styles(){return[super.styles,uT`
        :host {
          display: inline-block;
        }
      `]}render(){return WT`
      <div class="holder">
        <itc-choice 
          state="${"stimulus"===this.state?"choice":"iti"===this.state?"fixation":"blank"}"
          amount-ss="${this.as}"
          delay-ss="${this.ds}"
          amount-ll="${this.al}"
          delay-ll="${this.dl}">
        </itc-choice>
      </div>`}update(t){super.update(t),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=DP()-this.pauseTime,this.pauseTime=0),this.runner=BP(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=DP())),this.firstUpdate=!1}reset(){this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.as=0,this.ds=0,this.al=0,this.dl=0,this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0}run(){const t=DP(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0;this.lastTime=e,"resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("itc-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(this.trial+=1,this.state="stimulus",this.startTime=e,this.as=this.range.as.values[Math.floor(Math.random()*this.range.as.values.length)],this.ds=this.range.ds.values[Math.floor(Math.random()*this.range.ds.values.length)],this.al=this.range.al.values[Math.floor(Math.random()*this.range.al.values.length)],this.dl=this.range.dl.values[Math.floor(Math.random()*this.range.dl.values.length)],this.dispatchEvent(new CustomEvent("itc-trial-start",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration&&(this.dispatchEvent(new CustomEvent("itc-trial-end",{detail:{trials:this.trials,duration:this.duration,iti:this.iti,trial:this.trial,as:this.as,ds:this.ds,al:this.al,dl:this.dl},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.dispatchEvent(new CustomEvent("itc-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e))}});var Dz={a:"#e41a1c",z:"#377eb8",v:"#ff7f00",t0:"#f781bf",s:"#999999",left:"#f032e6",right:"#10dbc9",correct:"#4daf4a",error:"#984ea3",nr:"#cccccc"};class Uz extends $U{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return Dz}static get lights(){return Object.keys(Uz.colors).reduce((t,e)=>(t[e]=lP(Uz.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(Uz.colors).reduce((t,e)=>(t[e]=lP(Uz.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,uT`
        :host {
          /* Declare base colors */
          ${cT(Object.keys(Uz.colors).map(t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`).join("\n"))}

          /* Declare light colors */
          ${cT(Object.keys(Uz.colors).map(t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`).join("\n"))}

          /* Declare dark colors */
          ${cT(Object.keys(Uz.colors).map(t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`).join("\n"))}
        }
      `]}}customElements.define("accumulable-table",class extends Uz{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",type:Boolean,reflect:!0},color:{attribute:"color",type:String,reflect:!0},correctCount:{attribute:"correct-count",type:Number,reflect:!0},errorCount:{attribute:"error-count",type:Number,reflect:!0},nrCount:{attribute:"nr-count",type:Number,reflect:!0},accuracy:{attribute:"accuracy",type:Number,reflect:!0},correctMeanRT:{attribute:"correct-mean-rt",type:Number,reflect:!0},errorMeanRT:{attribute:"error-mean-rt",type:Number,reflect:!0},meanRT:{attribute:"mean-rt",type:Number,reflect:!0},correctSDRT:{attribute:"correct-sd-rt",type:Number,reflect:!0},errorSDRT:{attribute:"error-sd-rt",type:Number,reflect:!0},sdRT:{attribute:"sd-rt",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0}}}constructor(){super(),this.numeric=!1,this.summary=!1,this.colors=["none","measure","outcome","all"],this.color="all",this.payoff=!1,this.correctPayoff=void 0,this.errorPayoff=void 0,this.nrPayoff=void 0,this.correctCount=NaN,this.errorCount=NaN,this.nrCount=NaN,this.accuracy=NaN,this.correctMeanRT=NaN,this.errorMeanRT=NaN,this.meanRT=NaN,this.correctSDRT=NaN,this.errorSDRT=NaN,this.sdRT=NaN}sendEvent(){this.dispatchEvent(new CustomEvent("accumulable-table-change",{detail:{correctCount:this.correctCount,errorCount:this.errorCount,nrCount:this.nrCount,accuracy:this.accuracy,correctMeanRT:this.correctMeanRT,errorMeanRT:this.errorMeanRT,meanRT:this.meanRT,correctSDRT:this.correctSDRT,errorSDRT:this.errorSDRT,sdRT:this.sdRT},bubbles:!0}))}correctCountInput(t){this.correctCount=parseInt(t.target.value,10),this.sendEvent()}errorCountInput(t){this.errorCount=parseInt(t.target.value,10),this.sendEvent()}accuracyInput(t){this.accuracy=parseFloat(t.target.value),this.sendEvent()}correctMeanRTInput(t){this.correctMeanRT=parseFloat(t.target.value),this.sendEvent()}errorMeanRTInput(t){this.errorMeanRT=parseFloat(t.target.value),this.sendEvent()}meanRTInput(t){this.meanRT=parseFloat(t.target.value),this.sendEvent()}correctSDRTInput(t){this.correctSDRT=parseFloat(t.target.value),this.sendEvent()}errorSDRTInput(t){this.errorSDRT=parseFloat(t.target.value),this.sendEvent()}sdRTInput(t){this.sdRT=parseFloat(t.target.value),this.sendEvent()}static get styles(){return[super.styles,uT`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,n,i,a,s,o,l,c,u;return this.numeric?(r=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?WT`<span class="payoff">${e(this.correctPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,n=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?WT`<span class="payoff">${e(this.errorPayoff)}</span>`:WT``}
        </decidables-spinner>
      `,i=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,a=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,s=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,o=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `,l=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `,c=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `,u=WT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `):(r=WT`<span>Correct Count</span>
        ${this.payoff?WT`<span class="payoff">${e(this.correctPayoff)}</span>`:WT``}`,n=WT`<span>Error Count</span>
        ${this.payoff?WT`<span class="payoff">${e(this.errorPayoff)}</span>`:WT``}`,i=WT`<span>Accuracy</span>`,a=WT`<span>Correct Mean RT</span>`,s=WT`<span>Error Mean RT</span>`,o=WT`<span>Mean RT</span>`,l=WT`<span>Correct SD RT</span>`,c=WT`<span>Error SD RT</span>`,u=WT`<span>SD RT</span>`),WT`
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
            ${this.summary?WT`
                <th class="th th-main" scope="col">
                  Overall
                </th>`:WT``}
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
            ${this.summary?WT`
                <td class="td td-summary overall proportion-correct">
                  ${i}
                </td>`:WT``}
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
            ${this.summary?WT`
                <td class="td td-summary overall mean-rt">
                  ${o}
                </td>`:WT``}
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
            ${this.summary?WT`
                <td class="td td-summary overall sd-rt">
                  ${u}
                </td>`:WT``}
          </tr>
        </tbody>
      </table>`}});class zz{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t},{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const n=t.reduce((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t},{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(n.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(n.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(n.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,n=zz.s.DEFAULT){const i=t*e,a=Math.exp(-2*r*t/n**2);return(a-Math.exp(-2*r*i/n**2))/(a-1)}static azv2pC(t,e,r,n=zz.s.DEFAULT){return zz.azv2pE(t,1-e,-r,n)}static azvt02m(t,e,r,n,i=zz.s.DEFAULT){const a=t*e,s=Math.exp(-2*r*t/i**2)-1;return n+1e3*(-a/r+t/r*((Math.exp(-2*r*a/i**2)-1)/s))}static azv2sd(t,e,r,n=zz.s.DEFAULT){const i=t*e,a=Math.exp(-2*r*t/n**2)-1,s=Math.exp(-2*r*i/n**2)-1,o=(-r*t**2*(s+4)*s/a**2+((-3*r*t**2+4*r*i*t+n**2*t)*s+4*r*i*t)/a-n**2*i)/r**3;return 1e3*Math.sqrt(o)}static azvt02mE(t,e,r,n,i=zz.s.DEFAULT){function a(t,e){return Math.exp(2*r*e/i**2)-Math.exp(2*r*t/i**2)}const s=t*e;return n+1e3*((s*(a(s-t,t)+a(0,s))+2*t*a(s,0))/(r*a(s,t)*a(-t,0)))}static azv2sdE(t,e,r,n=zz.s.DEFAULT){function i(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const a=t*e,s=-2*t*i(0,a)*(2*r*t*i(a,2*t)+n**2*i(0,t)*i(a,t))*Math.exp(2*r*t/n**2)/(r**3*i(0,t)**2*i(a,t)**2)+(4*r*a*(2*t-a)*Math.exp(2*r*(a+t)/n**2)+a*n**2*i(2*a,2*t))/(r**3*i(a,t)**2);return 1e3*Math.sqrt(s)}static azvt02mC(t,e,r,n,i=zz.s.DEFAULT){return zz.azvt02mE(t,1-e,-r,n,i)}static azv2sdC(t,e,r,n=zz.s.DEFAULT){return zz.azv2sdE(t,1-e,-r,n)}static tazv2gE(t,e,r,n,i=zz.s.DEFAULT){if(!t)return 0;const a=e*r,s=Math.PI*i**2/e**2*Math.exp(-a*n/i**2);let o=0,l=0;do{o+=1;l+=o*Math.sin(Math.PI*a*o/e)*Math.exp(-.5*(n**2/i**2+Math.PI**2*o**2*i**2/e**2)*t)}while(o<200);return s*l}static tazv2gC(t,e,r,n,i=zz.s.DEFAULT){return zz.tazv2gE(t,e,1-r,-n,i)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:n}){function i(t){return Math.log(t/(1-t))}const a=(e/1e3)**2,s=r/1e3,o=n**2,l=i(t),c=l*(l*t**2-l*t+t-.5)/a,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*n*c**(1/4),h=o*i(t)/u,d=-u*h/o,f=h/(2*u)*(1-Math.exp(d))/(1+Math.exp(d));return{v:u,a:h,t0:1e3*(s?s-f:null),s:n}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}class Fz extends(_U(Uz)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=zz.a.DEFAULT,this.z=zz.z.DEFAULT,this.v=zz.v.DEFAULT,this.t0=zz.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){cR(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=OD(0,1)()}alignPath(t,e,r,n,i){const a=ID.source(UD(t))(0,this.precision**.5),s=-e/2,o=e/2,l=e*r-e/2,c=n*this.precision,u=[];for(u.push({t:i,e:l});u.at(-1).e>s&&u.at(-1).e<o;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+c+zz.s.DEFAULT*a()});return u}alignCorrectDistribution(t,e,r,n){const i=zz.azv2pC(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-n;s+=this.scale.time.step)s>0&&a.push({t:n+s,d:zz.tazv2gC(s/1e3,t,e,r)/i});return a}alignErrorDistribution(t,e,r,n){const i=zz.azv2pE(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-n;s+=this.scale.time.step)s>0&&a.push({t:n+s,d:zz.tazv2gE(s/1e3,t,e,r)/i});return a}alignState(){this.random=OD.source(UD(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},(t,e)=>{const r=this.random()/1e3*997,n=this.animate&&e===this.trials-1,i=this.alignPath(r,this.a,this.z,this.v,this.t0),a=i.at(-1).e<=this.bounds.lower?"error":i.at(-1).e>=this.bounds.upper?"correct":"nr",s="error"===a?i.at(-2).t+(this.bounds.lower-i.at(-2).e)/(i.at(-1).e-i.at(-2).e)*(1e3*this.precision):"correct"===a?i.at(-2).t+(this.bounds.upper-i.at(-2).e)/(i.at(-1).e-i.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:i,rt:s,outcome:a,animate:n}});const t=zz.trials2stats(this.data.trials.filter(t=>!t.animate));this.data={...this.data,...t},this.model.accuracy=zz.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=zz.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=zz.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=zz.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=zz.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,uT`
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
          opacity: 1;

          filter: url("#shadow-2");
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
        .boundary.interactive {
          cursor: ns-resize;
        }

        .t0z.interactive {
          cursor: move;
        }

        .boundary.interactive,
        .t0z.interactive {
          outline: none;

          filter: url("#shadow-2");
        }

        .boundary.interactive:hover,
        .t0z.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          transform: translateX(0);
        }

        .boundary.interactive:active,
        .t0z.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        .boundary.interactive:focus-visible,
        .t0z.interactive:focus-visible {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .t0z .point {
          fill: var(---color-element-emphasis);
          stroke-width: 0;

          r: 6px;
        }

        .drift {
          pointer-events: visible;

          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
          stroke-dasharray: 8 4;
        }

        .drift.interactive {
          cursor: ns-resize;
          outline: none;

          filter: url("#shadow-2");

          /* HACK: This gets Safari to correctly apply the filter! */
          fill: #000000;
          fill-opacity: 0;
        }

        .drift.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          fill: #ff0000;
        }

        .drift.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          fill: #00ff00;
        }

        .drift.interactive:focus-visible {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          fill: #0000ff;
        }

        .drift .arrow {
          stroke-dasharray: none;
        }

        /* Make larger targets for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
          stroke-dasharray: none;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-width: 12;
            stroke-linecap: round;
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
      `]}render(){return WT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.5?(i=r,n=1.5*i):(n=e,i=n/1.5);const a=1*this.rem,s=3*this.rem,o=3.75*this.rem,l=3.25*this.rem,c=i-(a+s),u=n-(o+l),h=.75*this.rem,d=.5*c,f=.25*c-h,p=.75*this.rem,m=.9*u,g=.1*u-p,v=parseInt(this.getComputedStyleValue("---transition-duration"),10),y=KD().domain([this.scale.time.min,this.scale.time.max]).range([0,m]),b=KD().domain([this.scale.evidence.min,this.scale.evidence.max]).range([d,0]),w=KD().domain([this.scale.density.min,this.scale.density.max]).range([f,0]),x=KD().domain([this.scale.density.min,this.scale.density.max]).range([0,f]),k=KD().domain([0,1]).range([0,c]),A=_R().subject((t,e)=>({x:y(e.t0),y:b(e.startingPoint)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=y.invert(t.x),n=(b.invert(t.y)+this.a/2)/this.a;r="z"===e?y.invert(t.subject.x):r<zz.t0.MIN?zz.t0.MIN:r>zz.t0.MAX?zz.t0.MAX:r,n="t0"===e?(b.invert(t.subject.y)+this.a/2)/this.a:n<zz.z.MIN?zz.z.MIN:n>zz.z.MAX?zz.z.MAX:n,this.t0=r,this.z=n,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1),this.drag=!1}),_=_R().on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;let e=(b.invert(t.y)-this.startingPoint)/(y.invert(t.x)-this.t0)*1e3;e=e<zz.v.MIN?zz.v.MIN:e>zz.v.MAX?zz.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1),this.drag=!1}),$=_R().subject((t,e)=>({x:0,y:b(e.value)})).on("start",t=>{cR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=b.invert(t.y);let r=Math.abs(2*e);r=r<zz.a.MIN?zz.a.MIN:r>zz.a.MAX?zz.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))}).on("end",t=>{cR(t.currentTarget).classed("dragging",!1),this.drag=!1}),S=wU().x(t=>y(t.t)).y(t=>b(t.e)),E=wU().x(t=>y(t.t)).y(t=>w(t.d)),M=wU().x(t=>y(t.t)).y(t=>x(t.d)),T=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),N=T.enter().append("svg").classed("main",!0).each((t,e,r)=>{dN(Uz.svgFilters,r[e])}),C=N.append("defs").classed("markers",!0),R=t=>{C.append("marker").attr("id",`measure-arrow-${t}`).attr("class",`measure-arrow ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12").append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z")},P=t=>{const e=C.append("marker").attr("id",`measure-capped-arrow-${t}`).attr("class",`measure-arrow capped ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12");e.append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z"),e.append("path").attr("class","cap").attr("d","M 0 -4 l 0 8")};R("a"),R("z"),P("v"),R("t0"),P("t0");const O=t=>{C.append("marker").attr("id",`model-sd-cap-${t}`).attr("class",`model-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),C.append("marker").attr("id",`data-sd-cap-${t}`).attr("class",`data-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6")};O("error"),O("correct");const I=C.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",b(this.bounds.upper)).attr("y2",b(this.bounds.lower));I.append("stop").classed("stop-0",!0).attr("offset","0%"),I.append("stop").classed("stop-100",!0).attr("offset","100%");const D=N.merge(T).attr("viewBox",`0 0 ${n} ${i}`),U=D.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:w,densityLine:E,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:x,densityLine:M,alignDistribution:this.alignErrorDistribution.bind(this)}]),z=N.append("g").classed("plot evidence",!0),F=U.enter().append("g").attr("class",t=>`plot density ${t.outcome}`),j=N.append("g").classed("plot accuracy",!0),q=D.select(".plot.evidence").attr("transform",`translate(${o}, ${a+f+h})`),L=F.merge(U).attr("transform",t=>`translate(${o}, ${"correct"===t.outcome?a:a+f+d+2*h})`),H=D.select(".plot.accuracy").attr("transform",`translate(${o+m+p}, ${a})`);z.append("clipPath").attr("id","clip-evidence").append("rect"),q.select("clipPath rect").attr("y",b(this.bounds.upper)).attr("height",b(this.bounds.lower)-b(this.bounds.upper)+1).attr("width",m+1);const B=z.append("g").classed("underlayer",!0),V=F.append("g").classed("underlayer",!0),X=j.append("g").classed("underlayer",!0),K=q.select(".underlayer"),W=L.select(".underlayer"),Y=H.select(".underlayer");z.append("g").classed("content",!0).append("g").classed("paths",!0);const J=F.append("g").classed("content",!0);j.append("g").classed("content",!0);const Z=q.select(".content"),G=L.select(".content"),Q=H.select(".content");z.append("g").classed("overlayer",!0),F.append("g").classed("overlayer",!0),j.append("g").classed("overlayer",!0);const tt=q.select(".overlayer"),et=L.select(".overlayer");B.append("rect").classed("background",!0),V.append("rect").classed("background",!0),K.select(".background").transition().duration(this.drag?0:v).ease(xO).attr("y",b(this.bounds.upper)).attr("height",b(this.bounds.lower)-b(this.bounds.upper)).attr("width",m),W.select(".background").transition().duration(v).ease(xO).attr("height",f).attr("width",m),V.filter(t=>"error"===t.outcome).append("g").classed("axis time",!0);const rt=W.filter(t=>"error"===t.outcome).select(".axis.time").attr("transform",`translate(0, ${f+.25*this.rem})`);rt.transition().duration(v).ease(xO).call(BN(y)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const nt=V.filter(t=>"error"===t.outcome).append("text").classed("title time",!0).attr("text-anchor","middle");nt.append("tspan").classed("name",!0).text("Time (ms)"),W.filter(t=>"error"===t.outcome).select(".title.time").transition().duration(v).ease(xO).attr("transform",`translate(${m/2}, ${f+2.5*this.rem})`),B.append("g").classed("axis evidence",!0),V.append("g").attr("class",t=>`axis density ${t.outcome}`),X.append("g").classed("axis accuracy",!0);const it=K.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),at=W.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),st=Y.select(".axis.accuracy").attr("transform",`translate(${g+.25*this.rem}, 0)`),ot=it.transition().duration(v).ease(xO).call(VN(b)).attr("font-size",null).attr("font-family",null),lt=at.transition().duration(v).ease(xO).each((t,e,r)=>{VN(t.densityScale).ticks(2)(cR(r[e]))}).attr("font-size",null).attr("font-family",null),ct=st.transition().duration(v).ease(xO).call(HN(k)).attr("font-size",null).attr("font-family",null);ot.selectAll("line, path").attr("stroke",null),lt.selectAll("line, path").attr("stroke",null),ct.selectAll("line, path").attr("stroke",null);const ut=B.append("text").classed("title evidence",!0).attr("text-anchor","middle"),ht=V.append("text").attr("class",t=>`title density ${t.outcome}`).attr("text-anchor","middle"),dt=X.append("text").classed("title accuracy",!0).attr("text-anchor","middle");ut.append("tspan").classed("name",!0).text("Evidence"),ht.append("tspan").classed("name",!0).text("Density"),dt.append("tspan").classed("name",!0).text("Accuracy"),K.select(".title.evidence").transition().duration(v).ease(xO).attr("transform",`translate(${-2.5*this.rem}, ${d/2})rotate(-90)`),W.select(".title.density").transition().duration(v).ease(xO).attr("transform",`translate(${-2.5*this.rem}, ${f/2})rotate(-90)`),Y.select(".title.accuracy").transition().duration(v).ease(xO).attr("transform",`translate(${g+2.25*this.rem}, ${c/2})rotate(90)`);const ft=Z.select(".paths").selectAll(".path").data(this.data.trials.filter(t=>void 0!==t.path)),pt=hR(),mt=ft.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",(t,e)=>{if(!this.drag&&(cR(t.currentTarget).classed("highlight",!0).raise(),!pt.get(t.currentTarget))){const r=tt.append("g").classed(`rt-label ${e.outcome}`,!0),n=r.append("rect"),i=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",y(e.rt)).attr("y","correct"===e.outcome?b(this.bounds.upper)-.25*this.rem:b(this.bounds.lower)+.125*this.rem).node().getBBox();n.attr("x",i.x-.125*this.rem).attr("y",i.y+.125*this.rem).attr("width",i.width+.25*this.rem).attr("height",i.height-.25*this.rem),pt.set(t.currentTarget,r)}}).on("pointerleave",(t,e)=>{this.drag||(cR(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),pt.get(t.currentTarget).remove(),pt.remove(t.currentTarget))});mt.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const gt=mt.merge(ft).attr("class",t=>`path ${t.outcome}`);gt.select(".curve").transition().duration(this.drag?0:v).ease(xO).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:this.a,this.a),a=vP(void 0!==n.z?n.z:this.z,this.z),s=vP(void 0!==n.v?n.v:this.v,this.v),o=vP(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=i(e),n.z=a(e),n.v=s(e),n.t0=o(e);const r=this.alignPath(t.seed,n.a,n.z,n.v,n.t0);return S(r)}});const vt=gt.filter(t=>t.animate&&!this.paused);if(!vt.empty()){const t=vt.attr("data-new-trial-ease-time"),e=e=>KD().domain([0,1]).range([t,1])(e),r=e=>r=>KD().domain([e(t),1]).range([0,1])(e(r));vt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),vt.transition("new").duration(e=>Math.floor(1.5*e.rt*(1-t))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",(t,e,n)=>{const i=vP(n[e].getAttribute("stroke-dashoffset"),0);return t=>i(r(bO)(t))}).on("end",(t,e,r)=>{cR(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))})}const yt=gt.filter(t=>t.animate&&this.paused);if(!yt.empty()){const t=yt.attr("data-new-trial-ease-time");yt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",()=>vP(1,0)(bO(t)))}gt.filter(t=>!t.animate).attr("data-new-trial-ease-time",null),ft.exit().remove();const bt=J.append("g").attr("class",t=>`dist ${t.outcome}`);bt.append("path").classed("curve",!0),G.select(".dist").select(".curve").transition().duration(this.drag?0:v).ease(xO).attrTween("d",(t,e,r)=>{const n=r[e],i=vP(void 0!==n.a?n.a:this.a,this.a),a=vP(void 0!==n.z?n.z:this.z,this.z),s=vP(void 0!==n.v?n.v:this.v,this.v),o=vP(void 0!==n.t0?n.t0:this.t0,this.t0);return e=>{n.a=i(e),n.z=a(e),n.v=s(e),n.t0=o(e);const r=t.alignDistribution(n.a,n.z,n.v,n.t0);return t.densityLine(r)}});const wt=Z.selectAll(".rt").data(this.data.trials),xt=wt.enter().append("g");xt.append("line").classed("mark",!0).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?b(1)-.125*this.rem:b(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?b(1)-.675*this.rem:b(-1)+.675*this.rem);const kt=xt.merge(wt).attr("class",t=>`rt ${t.outcome}`);kt.filter(t=>!t.animate).select(".mark").transition().duration(this.drag?0:v).ease(xO).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?b(1)-.125*this.rem:b(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?b(1)-.675*this.rem:b(-1)+.675*this.rem),wt.exit().remove();const At=Q.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),_t=At.enter().append("g").attr("class",(t,e)=>"accuracy model "+(0===e?"correct":"error"));_t.append("rect").classed("bar",!0).attr("x",0),_t.merge(At).select("rect").transition().duration(this.drag?0:v).ease(xO).attr("y",(t,e)=>k(0===e?0:1-t)).attr("width",g).attr("height",t=>k(t)),At.exit().remove();const $t=Q.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),St=$t.enter().append("g").classed("accuracy data",!0);St.append("line").classed("mark",!0);const Et=St.merge($t).attr("class",t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error"));Et.select(".mark").transition().duration(this.drag?0:v).ease(xO).attr("x1",0+.25*this.rem).attr("x2",g-.25*this.rem).attr("y1",t=>k(t)-1).attr("y2",t=>k(t)-1),$t.exit().remove();const Mt=tt.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),Tt=Mt.enter().append("g").attr("class",(t,e)=>"boundary "+(0===e?"correct":"error"));Tt.append("line").classed("line",!0),Tt.append("line").classed("line touch",!0);const Nt=Tt.merge(Mt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?zz.a.STEP:zz.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?zz.a.STEP:zz.a.JUMP}r=r<zz.a.MIN?zz.a.MIN:r>zz.a.MAX?zz.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Nt.call($):Nt.on(".drag",null)),Nt.select(".line").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>b(t.value)).attr("y2",t=>b(t.value)),Nt.select(".line.touch").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>b(t.value)).attr("y2",t=>b(t.value)),Mt.exit().remove();const Ct=tt.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Rt=Ct.enter().append("g").classed("drift",!0);Rt.append("line").classed("line",!0),Rt.append("line").classed("line touch",!0),Rt.append("path").classed("arrow",!0),Rt.append("path").classed("arrow touch",!0);const Pt=Rt.merge(Ct).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?zz.v.STEP:zz.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?zz.v.STEP:zz.v.JUMP}e=e<zz.v.MIN?zz.v.MIN:e>zz.v.MAX?zz.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Pt.call(_):Pt.on(".drag",null));const Ot=(b(0)-b(1))/(y(1)-y(0));Pt.transition().duration(this.drag?0:v).ease(xO).attr("transform",t=>`translate(${y(t.t0)}, ${b(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*Ot)*(180/Math.PI)})`),Pt.select(".line").attr("x2",y(200)),Pt.select(".line.touch").attr("x2",y(200)),Pt.select(".arrow").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Pt.select(".arrow.touch").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Ct.exit().remove();const It=tt.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Dt=It.enter().append("g").classed("t0z",!0);Dt.append("line").classed("line",!0),Dt.append("line").classed("line touch",!0),Dt.append("circle").classed("point touch",!0);const Ut=Dt.merge(It).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?zz.z.STEP:zz.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?zz.z.STEP:zz.z.JUMP}e=e<zz.z.MIN?zz.z.MIN:e>zz.z.MAX?zz.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?zz.t0.STEP:zz.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?zz.t0.STEP:zz.t0.JUMP}e=e<zz.t0.MIN?zz.t0.MIN:e>zz.t0.MAX?zz.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Ut.call(A):Ut.on(".drag",null)),Ut.select(".line").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>b(t.startingPoint)).attr("y2",t=>b(t.startingPoint)),Ut.select(".line.touch").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>b(t.startingPoint)).attr("y2",t=>b(t.startingPoint)),Ut.select(".point").transition().duration(this.drag?0:v).ease(xO).attr("cx",t=>y(t.t0)).attr("cy",t=>b(t.startingPoint)),It.exit().remove();const zt=tt.selectAll(".measure.a").data(this.measures?[this.a]:[]),Ft=zt.enter().append("g").classed("measure a",!0);Ft.append("line").classed("line",!0),Ft.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-a)").attr("marker-end","url(#measure-arrow-a)");const jt=Ft.append("text").classed("label",!0);jt.append("tspan").classed("a math-var",!0).text("a"),jt.append("tspan").classed("equals",!0).text(" = "),jt.append("tspan").classed("value",!0);const qt=Math.abs(b(this.bounds.upper)-b(this.bounds.lower))<=4,Lt=Ft.merge(zt);Lt.select(".line").classed("short",qt).transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",b(this.bounds.upper)+2).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",b(this.bounds.lower)-2),Lt.select(".markers").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",b(this.bounds.upper)).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",b(this.bounds.lower));Lt.select(".label").transition().duration(this.drag?0:v).ease(xO).attr("x",y(this.scale.time.max)).attr("y",b(this.bounds.upper)-.25*this.rem).select(".value").text(QO(".2f")(this.a)),zt.exit().remove();const Ht=tt.selectAll(".measure.z").data(this.measures?[this.z]:[]),Bt=Ht.enter().append("g").classed("measure z",!0);Bt.append("line").classed("line",!0),Bt.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-z)").attr("marker-end","url(#measure-arrow-z)");const Vt=Bt.append("text").classed("label",!0);Vt.append("tspan").classed("z math-var",!0).text("z"),Vt.append("tspan").classed("equals",!0).text(" = "),Vt.append("tspan").classed("value",!0);const Xt=Math.abs(b(this.startingPoint)-b(this.bounds.lower))<=4,Kt=Bt.merge(Ht);Kt.select(".line").classed("short",Xt).transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",b(this.startingPoint)+2).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",b(this.bounds.lower)-2),Kt.select(".markers").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",b(this.startingPoint)).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",b(this.bounds.lower));Kt.select(".label").transition().duration(this.drag?0:v).ease(xO).attr("x",y(this.scale.time.min)).attr("y",b(this.bounds.lower)+.125*this.rem).select(".value").text(QO(".0%")(this.z)),Ht.exit().remove();const Wt=tt.selectAll(".measure.v").data(this.measures?[this.v]:[]),Yt=Wt.enter().append("g").classed("measure v",!0);Yt.append("path").classed("line",!0),Yt.append("path").classed("markers",!0).attr("marker-start","url(#measure-capped-arrow-v)").attr("marker-end","url(#measure-capped-arrow-v)");const Jt=Yt.append("text").classed("label",!0);Jt.append("tspan").classed("v math-var",!0).text("v"),Jt.append("tspan").classed("equals",!0).text(" = "),Jt.append("tspan").classed("value",!0);const Zt=y(200)-y(0)+.75*this.rem,Gt=Math.atan(this.v/1e3*Ot),Qt=Math.cos(Gt)*Zt,te=Math.sin(Gt)*Zt,ee=2/Zt,re=Math.atan(this.v/1e3*Ot)-ee,ne=Math.cos(ee)*Zt,ie=Math.sin(ee)*Zt,ae=Math.cos(re)*Zt,se=Math.sin(re)*Zt,oe=re*Zt<=4,le=Yt.merge(Wt);le.select(".line").classed("short",oe).transition().duration(this.drag?0:v).ease(xO).attr("d",`\n        M ${y(this.t0)+ne}, ${b(this.startingPoint)-ie}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+ae} ${b(this.startingPoint)-se}\n      `),le.select(".markers").transition().duration(this.drag?0:v).ease(xO).attr("d",`\n        M ${y(this.t0+200)+.75*this.rem}, ${b(this.startingPoint)}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+Qt} ${b(this.startingPoint)-te}\n      `);le.select(".label").transition().duration(this.drag?0:v).ease(xO).attr("x",y(this.t0+200)+.5*this.rem).attr("y",b(this.bounds.upper)-.25*this.rem).select(".value").text(QO(".2f")(this.v)),Wt.exit().remove();const ce=tt.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),ue=ce.enter().append("g").classed("measure t0",!0);ue.append("line").classed("line",!0),ue.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-t0)").attr("marker-end","url(#measure-capped-arrow-t0)");const he=ue.append("text").classed("label",!0);he.append("tspan").classed("t0 math-var",!0).text("t").append("tspan").classed("math-num",!0).text("₀"),he.append("tspan").classed("equals",!0).text(" = "),he.append("tspan").classed("value",!0);const de=Math.abs(y(0)-y(this.t0))<=4,fe=ue.merge(ce);fe.select(".line").classed("short",de).transition().duration(this.drag?0:v).ease(xO).attr("x1",y(0)+2).attr("y1",b(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)-2).attr("y2",b(this.startingPoint)-.75*this.rem),fe.select(".markers").transition().duration(this.drag?0:v).ease(xO).attr("x1",y(0)).attr("y1",b(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)).attr("y2",b(this.startingPoint)-.75*this.rem);fe.select(".label").transition().duration(this.drag?0:v).ease(xO).attr("x",y(this.t0)+.25*this.rem).attr("y",b(this.bounds.upper)-.25*this.rem).select(".value").text(QO("d")(this.t0)),ce.exit().remove();const pe=et.selectAll(".model.mean").data(t=>this.means?[t]:[]),me=pe.enter().append("g").attr("class",t=>`model mean ${t.outcome}`);me.append("line").classed("indicator",!0);me.merge(pe).select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",t=>y(t.model.meanRT)).attr("x2",t=>y(t.model.meanRT)).attr("y1",t=>t.densityScale(this.scale.density.min)).attr("y2",t=>t.densityScale(this.scale.density.max)),pe.exit().remove();const ge=et.selectAll(".data.mean").data(t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[]),ve=ge.enter().append("g").attr("class",t=>`data mean ${t.outcome}`);ve.append("line").classed("indicator",!0).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem);ve.merge(ge).select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",t=>y(t.data.meanRT)).attr("x2",t=>y(t.data.meanRT)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem),ge.exit().select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{cR(r[e].parentElement).remove()});const ye=et.selectAll(".model.sd").data(t=>this.sds?[t]:[]),be=ye.enter().append("g").attr("class",t=>`model sd ${t.outcome}`);be.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#model-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#model-sd-cap-${t.outcome})`);be.merge(ye).select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",t=>y(t.model.meanRT-t.model.sdRT/2)).attr("x2",t=>y(t.model.meanRT+t.model.sdRT/2)).attr("y1",t=>t.densityScale(5)).attr("y2",t=>t.densityScale(5)),ye.exit().remove();const we=et.selectAll(".data.sd").data(t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t]),xe=we.enter().append("g").attr("class",t=>`data sd ${t.outcome}`);xe.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#data-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#data-sd-cap-${t.outcome})`).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem);xe.merge(we).select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",t=>y(t.data.meanRT-t.data.sdRT/2)).attr("x2",t=>y(t.data.meanRT+t.data.sdRT/2)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem),we.exit().select(".indicator").transition().duration(this.drag?0:v).ease(xO).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{cR(r[e].parentElement).remove()}),this.firstUpdate=!1}}customElements.define("ddm-model",Fz);class jz extends(_U(Uz)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,uT`
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
      `]}render(){return WT``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=n-(i+a),l=n-(s+.25*this.rem);this.xScale=KD().domain([-1,1]).range([0,l]),this.yScale=KD().domain([1,-1]).range([0,o]);const c=cR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),f=h.select(".plot").attr("transform",`translate(${s}, ${i})`),p=d.append("g").classed("underlayer",!0),m=f.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");f.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const g=d.append("g").classed("overlayer",!0),v=f.select(".overlayer");g.append("circle").classed("outline",!0),v.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=DP()-this.pauseTime,this.pauseTime=0),this.runner=BP(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=DP())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=cR(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();cR(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();cR(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=DP(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(i||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());s.x=this.xScale(n*Math.cos(r)),s.y=this.yScale(n*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(n/1e3)*Math.cos(e),s.dy=this.speed*(n/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=cR(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=cR(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const l=cR(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}customElements.define("rdk-2afc-task",jz);
//# sourceMappingURL=page.js.map
