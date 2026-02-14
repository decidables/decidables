var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r=function(t){return t&&t.Math===Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=n,s=function(t){try{return!!t()}catch(t){return!0}},a=!s(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),o=a,l=Function.prototype,c=l.call,u=o&&l.bind.bind(c,c),h=o?u:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},f=d,p=TypeError,m=function(t){if(f(t))throw new p("Can't call method on "+t);return t},g=m,b=Object,v=function(t){return b(g(t))},y=v,w=h({}.hasOwnProperty),x=Object.hasOwn||function(t,e){return w(y(t),e)},k={},$={exports:{}},_=n,S=Object.defineProperty,E=function(t,e){try{S(_,t,{value:e,configurable:!0,writable:!0})}catch(r){_[t]=e}return e},A=n,M=E,T="__core-js_shared__",C=$.exports=A[T]||M(T,{});(C.versions||(C.versions=[])).push({version:"3.47.0",mode:"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",source:"https://github.com/zloirock/core-js"});var N,R,O=$.exports,P=O,I=function(t,e){return P[t]||(P[t]=e||{})},F=h,D=0,z=Math.random(),q=F(1.1.toString),j=function(t){return"Symbol("+(void 0===t?"":t)+")_"+q(++D+z,36)},U=n.navigator,L=U&&U.userAgent,B=L?String(L):"",H=n,V=B,X=H.process,W=H.Deno,Y=X&&X.versions||W&&W.version,K=Y&&Y.v8;K&&(R=(N=K.split("."))[0]>0&&N[0]<4?1:+(N[0]+N[1])),!R&&V&&(!(N=V.match(/Edge\/(\d+)/))||N[1]>=74)&&(N=V.match(/Chrome\/(\d+)/))&&(R=+N[1]);var Z=R,G=Z,Q=s,J=n.String,tt=!!Object.getOwnPropertySymbols&&!Q(function(){var t=Symbol("symbol detection");return!J(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&G&&G<41}),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,rt=I,nt=x,it=j,st=tt,at=et,ot=n.Symbol,lt=rt("wks"),ct=at?ot.for||ot:ot&&ot.withoutSetter||it,ut=function(t){return nt(lt,t)||(lt[t]=st&&nt(ot,t)?ot[t]:ct("Symbol."+t)),lt[t]},ht=ut;k.f=ht;var dt={},ft=!s(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),pt="object"==typeof document&&document.all,mt=void 0===pt&&void 0!==pt?function(t){return"function"==typeof t||t===pt}:function(t){return"function"==typeof t},gt=mt,bt=function(t){return"object"==typeof t?null!==t:gt(t)},vt=bt,yt=n.document,wt=vt(yt)&&vt(yt.createElement),xt=function(t){return wt?yt.createElement(t):{}},kt=xt,$t=!ft&&!s(function(){return 7!==Object.defineProperty(kt("div"),"a",{get:function(){return 7}}).a}),_t=ft&&s(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),St=bt,Et=String,At=TypeError,Mt=function(t){if(St(t))return t;throw new At(Et(t)+" is not an object")},Tt=a,Ct=Function.prototype.call,Nt=Tt?Ct.bind(Ct):function(){return Ct.apply(Ct,arguments)},Rt=n,Ot=mt,Pt=function(t,e){return arguments.length<2?(r=Rt[t],Ot(r)?r:void 0):Rt[t]&&Rt[t][e];var r},It=h({}.isPrototypeOf),Ft=Pt,Dt=mt,zt=It,qt=Object,jt=et?function(t){return"symbol"==typeof t}:function(t){var e=Ft("Symbol");return Dt(e)&&zt(e.prototype,qt(t))},Ut=String,Lt=function(t){try{return Ut(t)}catch(t){return"Object"}},Bt=mt,Ht=Lt,Vt=TypeError,Xt=function(t){if(Bt(t))return t;throw new Vt(Ht(t)+" is not a function")},Wt=Xt,Yt=d,Kt=function(t,e){var r=t[e];return Yt(r)?void 0:Wt(r)},Zt=Nt,Gt=mt,Qt=bt,Jt=TypeError,te=Nt,ee=bt,re=jt,ne=Kt,ie=function(t,e){var r,n;if("string"===e&&Gt(r=t.toString)&&!Qt(n=Zt(r,t)))return n;if(Gt(r=t.valueOf)&&!Qt(n=Zt(r,t)))return n;if("string"!==e&&Gt(r=t.toString)&&!Qt(n=Zt(r,t)))return n;throw new Jt("Can't convert object to primitive value")},se=TypeError,ae=ut("toPrimitive"),oe=function(t,e){if(!ee(t)||re(t))return t;var r,n=ne(t,ae);if(n){if(void 0===e&&(e="default"),r=te(n,t,e),!ee(r)||re(r))return r;throw new se("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},le=oe,ce=jt,ue=function(t){var e=le(t,"string");return ce(e)?e:e+""},he=ft,de=$t,fe=_t,pe=Mt,me=ue,ge=TypeError,be=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ye="enumerable",we="configurable",xe="writable";dt.f=he?fe?function(t,e,r){if(pe(t),e=me(e),pe(r),"function"==typeof t&&"prototype"===e&&"value"in r&&xe in r&&!r[xe]){var n=ve(t,e);n&&n[xe]&&(t[e]=r.value,r={configurable:we in r?r[we]:n[we],enumerable:ye in r?r[ye]:n[ye],writable:!1})}return be(t,e,r)}:be:function(t,e,r){if(pe(t),e=me(e),pe(r),de)try{return be(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new ge("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var ke=i,$e=x,_e=k,Se=dt.f,Ee=function(t){var e=ke.Symbol||(ke.Symbol={});$e(e,t)||Se(e,t,{value:_e.f(t)})},Ae={},Me={},Te={}.propertyIsEnumerable,Ce=Object.getOwnPropertyDescriptor,Ne=Ce&&!Te.call({1:2},1);Me.f=Ne?function(t){var e=Ce(this,t);return!!e&&e.enumerable}:Te;var Re=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Oe=h,Pe=Oe({}.toString),Ie=Oe("".slice),Fe=function(t){return Ie(Pe(t),8,-1)},De=s,ze=Fe,qe=Object,je=h("".split),Ue=De(function(){return!qe("z").propertyIsEnumerable(0)})?function(t){return"String"===ze(t)?je(t,""):qe(t)}:qe,Le=m,Be=function(t){return Ue(Le(t))},He=ft,Ve=Nt,Xe=Me,We=Re,Ye=Be,Ke=ue,Ze=x,Ge=$t,Qe=Object.getOwnPropertyDescriptor;Ae.f=He?Qe:function(t,e){if(t=Ye(t),e=Ke(e),Ge)try{return Qe(t,e)}catch(t){}if(Ze(t,e))return We(!Ve(Xe.f,t,e),t[e])};var Je=n,tr=Ee,er=dt.f,rr=Ae.f,nr=Je.Symbol;if(tr("asyncDispose"),nr){var ir=rr(nr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&er(nr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var sr=n,ar=Ee,or=dt.f,lr=Ae.f,cr=sr.Symbol;if(ar("dispose"),cr){var ur=lr(cr,"dispose");ur.enumerable&&ur.configurable&&ur.writable&&or(cr,"dispose",{value:ur.value,enumerable:!1,configurable:!1,writable:!1})}var hr=dt,dr=Re,fr=ft?function(t,e,r){return hr.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},pr={exports:{}},mr=ft,gr=x,br=Function.prototype,vr=mr&&Object.getOwnPropertyDescriptor,yr={CONFIGURABLE:gr(br,"name")&&(!mr||mr&&vr(br,"name").configurable)},wr=mt,xr=O,kr=h(Function.toString);wr(xr.inspectSource)||(xr.inspectSource=function(t){return kr(t)});var $r,_r,Sr,Er=xr.inspectSource,Ar=mt,Mr=n.WeakMap,Tr=Ar(Mr)&&/native code/.test(String(Mr)),Cr=j,Nr=I("keys"),Rr=function(t){return Nr[t]||(Nr[t]=Cr(t))},Or={},Pr=Tr,Ir=n,Fr=bt,Dr=fr,zr=x,qr=O,jr=Rr,Ur=Or,Lr="Object already initialized",Br=Ir.TypeError,Hr=Ir.WeakMap;if(Pr||qr.state){var Vr=qr.state||(qr.state=new Hr);Vr.get=Vr.get,Vr.has=Vr.has,Vr.set=Vr.set,$r=function(t,e){if(Vr.has(t))throw new Br(Lr);return e.facade=t,Vr.set(t,e),e},_r=function(t){return Vr.get(t)||{}},Sr=function(t){return Vr.has(t)}}else{var Xr=jr("state");Ur[Xr]=!0,$r=function(t,e){if(zr(t,Xr))throw new Br(Lr);return e.facade=t,Dr(t,Xr,e),e},_r=function(t){return zr(t,Xr)?t[Xr]:{}},Sr=function(t){return zr(t,Xr)}}var Wr={set:$r,get:_r,has:Sr,enforce:function(t){return Sr(t)?_r(t):$r(t,{})},getterFor:function(t){return function(e){var r;if(!Fr(e)||(r=_r(e)).type!==t)throw new Br("Incompatible receiver, "+t+" required");return r}}},Yr=h,Kr=s,Zr=mt,Gr=x,Qr=ft,Jr=yr.CONFIGURABLE,tn=Er,en=Wr.enforce,rn=Wr.get,nn=String,sn=Object.defineProperty,an=Yr("".slice),on=Yr("".replace),ln=Yr([].join),cn=Qr&&!Kr(function(){return 8!==sn(function(){},"length",{value:8}).length}),un=String(String).split("String"),hn=pr.exports=function(t,e,r){"Symbol("===an(nn(e),0,7)&&(e="["+on(nn(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Gr(t,"name")||Jr&&t.name!==e)&&(Qr?sn(t,"name",{value:e,configurable:!0}):t.name=e),cn&&r&&Gr(r,"arity")&&t.length!==r.arity&&sn(t,"length",{value:r.arity});try{r&&Gr(r,"constructor")&&r.constructor?Qr&&sn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=en(t);return Gr(n,"source")||(n.source=ln(un,"string"==typeof e?e:"")),t};Function.prototype.toString=hn(function(){return Zr(this)&&rn(this).source||tn(this)},"toString");var dn,fn=pr.exports,pn=mt,mn=dt,gn=fn,bn=E,vn=function(t,e,r,n){n||(n={});var i=n.enumerable,s=void 0!==n.name?n.name:e;if(pn(r)&&gn(r,s,n),n.global)i?t[e]=r:bn(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:mn.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},yn={},wn=Math.ceil,xn=Math.floor,kn=Math.trunc||function(t){var e=+t;return(e>0?xn:wn)(e)},$n=kn,_n=function(t){var e=+t;return e!=e||0===e?0:$n(e)},Sn=_n,En=Math.max,An=Math.min,Mn=_n,Tn=Math.min,Cn=function(t){var e=Mn(t);return e>0?Tn(e,9007199254740991):0},Nn=Cn,Rn=function(t){return Nn(t.length)},On=Be,Pn=function(t,e){var r=Sn(t);return r<0?En(r+e,0):An(r,e)},In=Rn,Fn={indexOf:(dn=!1,function(t,e,r){var n=On(t),i=In(n);if(0===i)return!dn&&-1;var s,a=Pn(r,i);if(dn&&e!=e){for(;i>a;)if((s=n[a++])!=s)return!0}else for(;i>a;a++)if((dn||a in n)&&n[a]===e)return dn||a||0;return!dn&&-1})},Dn=x,zn=Be,qn=Fn.indexOf,jn=Or,Un=h([].push),Ln=function(t,e){var r,n=zn(t),i=0,s=[];for(r in n)!Dn(jn,r)&&Dn(n,r)&&Un(s,r);for(;e.length>i;)Dn(n,r=e[i++])&&(~qn(s,r)||Un(s,r));return s},Bn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Hn=Ln,Vn=Bn.concat("length","prototype");yn.f=Object.getOwnPropertyNames||function(t){return Hn(t,Vn)};var Xn={};Xn.f=Object.getOwnPropertySymbols;var Wn=Pt,Yn=yn,Kn=Xn,Zn=Mt,Gn=h([].concat),Qn=Wn("Reflect","ownKeys")||function(t){var e=Yn.f(Zn(t)),r=Kn.f;return r?Gn(e,r(t)):e},Jn=x,ti=Qn,ei=Ae,ri=dt,ni=function(t,e,r){for(var n=ti(e),i=ri.f,s=ei.f,a=0;a<n.length;a++){var o=n[a];Jn(t,o)||r&&Jn(r,o)||i(t,o,s(e,o))}},ii=s,si=mt,ai=/#|\.prototype\./,oi=function(t,e){var r=ci[li(t)];return r===hi||r!==ui&&(si(e)?ii(e):!!e)},li=oi.normalize=function(t){return String(t).replace(ai,".").toLowerCase()},ci=oi.data={},ui=oi.NATIVE="N",hi=oi.POLYFILL="P",di=oi,fi=n,pi=Ae.f,mi=fr,gi=vn,bi=E,vi=ni,yi=di,wi=function(t,e){var r,n,i,s,a,o=t.target,l=t.global,c=t.stat;if(r=l?fi:c?fi[o]||bi(o,{}):fi[o]&&fi[o].prototype)for(n in e){if(s=e[n],i=t.dontCallGetSet?(a=pi(r,n))&&a.value:r[n],!yi(l?n:o+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof s==typeof i)continue;vi(s,i)}(t.sham||i&&i.sham)&&mi(s,"sham",!0),gi(r,n,s,t)}},xi={};xi[ut("toStringTag")]="z";var ki="[object z]"===String(xi),$i=mt,_i=Fe,Si=ut("toStringTag"),Ei=Object,Ai="Arguments"===_i(function(){return arguments}()),Mi=ki?_i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Ei(t),Si))?r:Ai?_i(e):"Object"===(n=_i(e))&&$i(e.callee)?"Arguments":n},Ti=wi,Ci=Pt,Ni=bt,Ri=Mi,Oi=s,Pi="Error",Ii="DOMException",Fi=Object.setPrototypeOf||{}.__proto__,Di=Ci(Ii),zi=Error,qi=zi.isError;Ti({target:"Error",stat:!0,sham:!0,forced:!qi||!Fi||Oi(function(){return Di&&!qi(new Di(Ii))||!qi(new zi(Pi,{cause:function(){}}))||qi(Ci("Object","create")(zi.prototype))})},{isError:function(t){if(!Ni(t))return!1;var e=Ri(t);return e===Pi||e===Ii}});var ji=!s(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Ui=x,Li=mt,Bi=v,Hi=ji,Vi=Rr("IE_PROTO"),Xi=Object,Wi=Xi.prototype,Yi=Hi?Xi.getPrototypeOf:function(t){var e=Bi(t);if(Ui(e,Vi))return e[Vi];var r=e.constructor;return Li(r)&&e instanceof r?r.prototype:e instanceof Xi?Wi:null},Ki=h,Zi=Xt,Gi=function(t,e,r){try{return Ki(Zi(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Qi=bt,Ji=function(t){return Qi(t)||null===t},ts=String,es=TypeError,rs=Gi,ns=bt,is=m,ss=function(t){if(Ji(t))return t;throw new es("Can't set "+ts(t)+" as a prototype")},as=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=rs(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return is(r),ss(n),ns(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),os={},ls=Ln,cs=Bn,us=Object.keys||function(t){return ls(t,cs)},hs=ft,ds=_t,fs=dt,ps=Mt,ms=Be,gs=us;os.f=hs&&!ds?Object.defineProperties:function(t,e){ps(t);for(var r,n=ms(e),i=gs(e),s=i.length,a=0;s>a;)fs.f(t,r=i[a++],n[r]);return t};var bs,vs=Pt("document","documentElement"),ys=Mt,ws=os,xs=Bn,ks=Or,$s=vs,_s=xt,Ss="prototype",Es="script",As=Rr("IE_PROTO"),Ms=function(){},Ts=function(t){return"<"+Es+">"+t+"</"+Es+">"},Cs=function(t){t.write(Ts("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ns=function(){try{bs=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Ns="undefined"!=typeof document?document.domain&&bs?Cs(bs):(e=_s("iframe"),r="java"+Es+":",e.style.display="none",$s.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ts("document.F=Object")),t.close(),t.F):Cs(bs);for(var n=xs.length;n--;)delete Ns[Ss][xs[n]];return Ns()};ks[As]=!0;var Rs=Object.create||function(t,e){var r;return null!==t?(Ms[Ss]=ys(t),r=new Ms,Ms[Ss]=null,r[As]=t):r=Ns(),void 0===e?r:ws.f(r,e)},Os=Error,Ps=h("".replace),Is=String(new Os("zxcasd").stack),Fs=/\n\s*at [^:]*:[^\n]*/,Ds=Fs.test(Is),zs=function(t,e){if(Ds&&"string"==typeof t&&!Os.prepareStackTrace)for(;e--;)t=Ps(t,Fs,"");return t},qs=Re,js=!s(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",qs(1,7)),7!==t.stack)}),Us=fr,Ls=zs,Bs=js,Hs=Error.captureStackTrace,Vs=Mi,Xs=String,Ws=function(t){if("Symbol"===Vs(t))throw new TypeError("Cannot convert a Symbol value to a string");return Xs(t)},Ys=Ws,Ks=function(t,e){return void 0===t?arguments.length<2?"":e:Ys(t)},Zs=wi,Gs=It,Qs=Yi,Js=as,ta=ni,ea=Rs,ra=fr,na=Re,ia=function(t,e,r,n){Bs&&(Hs?Hs(t,e):Us(t,"stack",Ls(r,n)))},sa=Ks,aa=ut,oa=s,la=n.SuppressedError,ca=aa("toStringTag"),ua=Error,ha=!!la&&3!==la.length,da=!!la&&oa(function(){return 4===new la(1,2,3,{cause:4}).cause}),fa=ha||da,pa=function(t,e,r){var n,i=Gs(ma,this);return Js?n=!fa||i&&Qs(this)!==ma?Js(new ua,i?Qs(this):ma):new la:(n=i?this:ea(ma),ra(n,ca,"Error")),void 0!==r&&ra(n,"message",sa(r)),ia(n,pa,n.stack,1),ra(n,"error",t),ra(n,"suppressed",e),n};Js?Js(pa,ua):ta(pa,ua,{name:!0});var ma=pa.prototype=fa?la.prototype:ea(ua.prototype,{constructor:na(1,pa),message:na(1,""),name:na(1,"SuppressedError")});fa&&(ma.constructor=pa),Zs({global:!0,constructor:!0,arity:3,forced:fa},{SuppressedError:pa});var ga=Fe,ba=ft,va=Array.isArray||function(t){return"Array"===ga(t)},ya=TypeError,wa=Object.getOwnPropertyDescriptor,xa=ba&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}(),ka=TypeError,$a=function(t){if(t>9007199254740991)throw ka("Maximum allowed index exceeded");return t},_a=v,Sa=Rn,Ea=xa?function(t,e){if(va(t)&&!wa(t,"length").writable)throw new ya("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Aa=$a;wi({target:"Array",proto:!0,arity:1,forced:s(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=_a(this),r=Sa(e),n=arguments.length;Aa(r+n);for(var i=0;i<n;i++)e[r]=arguments[i],r++;return Ea(e,r),r}});var Ma=Rn,Ta=_n,Ca=RangeError,Na=function(t,e,r,n){var i=Ma(t),s=Ta(r),a=s<0?i+s:s;if(a>=i||a<0)throw new Ca("Incorrect index");for(var o=new e(i),l=0;l<i;l++)o[l]=l===a?n:t[l];return o},Ra=Na,Oa=Be,Pa=Array;wi({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){return Ra(Oa(this),Pa,t,e)}});var Ia=wi,Fa=h,Da=Math.pow,za=Da(2,-24),qa=.0009765625,ja=Fa(DataView.prototype.getUint16);Ia({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,n=1023&t;return 31===r?0===n?0===e?1/0:-1/0:NaN:0===r?n*(0===e?za:-za):Da(2,r-15)*(0===e?1+n*qa:-1-n*qa)}(ja(this,t,arguments.length>1&&arguments[1]))}});var Ua=Mi,La=TypeError,Ba=_n,Ha=Cn,Va=RangeError,Xa=function(t){if(void 0===t)return 0;var e=Ba(t),r=Ha(e);if(e!==r)throw new Va("Wrong length or index");return r},Wa=Math.log,Ya=Math.LN2,Ka=Math.log2||function(t){return Wa(t)/Ya},Za=4503599627370496,Ga=function(t){return t+Za-Za},Qa=wi,Ja=h,to=function(t){if("DataView"===Ua(t))return t;throw new La("Argument is not a DataView")},eo=Xa,ro=Ka,no=Ga,io=Math.pow,so=1024,ao=Ja(DataView.prototype.setUint16);Qa({target:"DataView",proto:!0},{setFloat16:function(t,e){ao(to(this),eo(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|no(16777216*t);var r=0|ro(t);if(-15===r)return e<<15|so;var n=no((t*io(2,-r)-1)*so);return n===so?e<<15|r+16<<10:e<<15|r+15<<10|n}(+e),arguments.length>2&&arguments[2])}});var oo=fn,lo=dt,co=function(t,e,r){return r.get&&oo(r.get,e,{getter:!0}),r.set&&oo(r.set,e,{setter:!0}),lo.f(t,e,r)},uo="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,ho=n,fo=Gi,po=Fe,mo=ho.ArrayBuffer,go=ho.TypeError,bo=mo&&fo(mo.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==po(t))throw new go("ArrayBuffer expected");return t.byteLength},vo=uo,yo=bo,wo=n.DataView,xo=function(t){if(!vo||0!==yo(t))return!1;try{return new wo(t),!1}catch(t){return!0}},ko=ft,$o=co,_o=xo,So=ArrayBuffer.prototype;ko&&!("detached"in So)&&$o(So,"detached",{configurable:!0,get:function(){return _o(this)}});var Eo,Ao,Mo,To,Co=xo,No=TypeError,Ro=function(t){if(Co(t))throw new No("ArrayBuffer is detached");return t},Oo=n,Po=B,Io=Fe,Fo=function(t){return Po.slice(0,t.length)===t},Do=Fo("Bun/")?"BUN":Fo("Cloudflare-Workers")?"CLOUDFLARE":Fo("Deno/")?"DENO":Fo("Node.js/")?"NODE":Oo.Bun&&"string"==typeof Bun.version?"BUN":Oo.Deno&&"object"==typeof Deno.version?"DENO":"process"===Io(Oo.process)?"NODE":Oo.window&&Oo.document?"BROWSER":"REST",zo="NODE"===Do,qo=n,jo=zo,Uo=s,Lo=Z,Bo=Do,Ho=n.structuredClone,Vo=!!Ho&&!Uo(function(){if("DENO"===Bo&&Lo>92||"NODE"===Bo&&Lo>94||"BROWSER"===Bo&&Lo>97)return!1;var t=new ArrayBuffer(8),e=Ho(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Xo=n,Wo=function(t){if(jo){try{return qo.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},Yo=Vo,Ko=Xo.structuredClone,Zo=Xo.ArrayBuffer,Go=Xo.MessageChannel,Qo=!1;if(Yo)Qo=function(t){Ko(t,{transfer:[t]})};else if(Zo)try{Go||(Eo=Wo("worker_threads"))&&(Go=Eo.MessageChannel),Go&&(Ao=new Go,Mo=new Zo(2),To=function(t){Ao.port1.postMessage(null,[t])},2===Mo.byteLength&&(To(Mo),0===Mo.byteLength&&(Qo=To)))}catch(t){}var Jo=Qo,tl=n,el=h,rl=Gi,nl=Xa,il=Ro,sl=bo,al=Jo,ol=Vo,ll=tl.structuredClone,cl=tl.ArrayBuffer,ul=tl.DataView,hl=Math.min,dl=cl.prototype,fl=ul.prototype,pl=el(dl.slice),ml=rl(dl,"resizable","get"),gl=rl(dl,"maxByteLength","get"),bl=el(fl.getInt8),vl=el(fl.setInt8),yl=(ol||al)&&function(t,e,r){var n,i=sl(t),s=void 0===e?i:nl(e),a=!ml||!ml(t);if(il(t),ol&&(t=ll(t,{transfer:[t]}),i===s&&(r||a)))return t;if(i>=s&&(!r||a))n=pl(t,0,s);else{var o=r&&!a&&gl?{maxByteLength:gl(t)}:void 0;n=new cl(s,o);for(var l=new ul(t),c=new ul(n),u=hl(s,i),h=0;h<u;h++)vl(c,h,bl(l,h))}return ol||al(t),n},wl=yl;wl&&wi({target:"ArrayBuffer",proto:!0},{transfer:function(){return wl(this,arguments.length?arguments[0]:void 0,!0)}});var xl=yl;xl&&wi({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return xl(this,arguments.length?arguments[0]:void 0,!1)}});var kl=It,$l=TypeError,_l=function(t,e){if(kl(e,t))return t;throw new $l("Incorrect invocation")},Sl=vn,El=function(t,e,r){for(var n in e)Sl(t,n,e[n],r);return t},Al=Fe,Ml=h,Tl=function(t){if("Function"===Al(t))return Ml(t)},Cl=Xt,Nl=a,Rl=Tl(Tl.bind),Ol=function(t,e){return Cl(t),void 0===e?t:Nl?Rl(t,e):function(){return t.apply(e,arguments)}},Pl=Pt,Il=Nt,Fl=h,Dl=Ol,zl=Mt,ql=Xt,jl=d,Ul=Kt,Ll=ut,Bl=Ll("asyncDispose"),Hl=Ll("dispose"),Vl=Fl([].push),Xl=function(t,e,r){return arguments.length<3&&!jl(t)&&(r=ql(function(t,e){if("async-dispose"===e){var r=Ul(t,Bl);return void 0!==r||void 0===(r=Ul(t,Hl))?r:function(){var t=this;return new(Pl("Promise"))(function(e){Il(r,t),e(void 0)})}}return Ul(t,Hl)}(zl(t),e))),void 0===r?function(){}:Dl(r,t)},Wl=function(t,e,r,n){var i;if(arguments.length<4){if(jl(e)&&"sync-dispose"===r)return;i=Xl(e,r)}else i=Xl(void 0,r,n);Vl(t.stack,i)},Yl=wi,Kl=ft,Zl=Xt,Gl=_l,Ql=vn,Jl=El,tc=co,ec=ut,rc=Wr,nc=Wl,ic=Pt("SuppressedError"),sc=ReferenceError,ac=ec("dispose"),oc=ec("toStringTag"),lc="DisposableStack",cc=rc.set,uc=rc.getterFor(lc),hc="sync-dispose",dc="disposed",fc=function(t){var e=uc(t);if(e.state===dc)throw new sc(lc+" already disposed");return e},pc=function(){cc(Gl(this,mc),{type:lc,state:"pending",stack:[]}),Kl||(this.disposed=!1)},mc=pc.prototype;Jl(mc,{dispose:function(){var t=uc(this);if(t.state!==dc){t.state=dc,Kl||(this.disposed=!0);for(var e,r=t.stack,n=r.length,i=!1;n;){var s=r[--n];r[n]=null;try{s()}catch(t){i?e=new ic(t,e):(i=!0,e=t)}}if(t.stack=null,i)throw e}},use:function(t){return nc(fc(this),t,hc),t},adopt:function(t,e){var r=fc(this);return Zl(e),nc(r,void 0,hc,function(){e(t)}),t},defer:function(t){var e=fc(this);Zl(t),nc(e,void 0,hc,t)},move:function(){var t=fc(this),e=new pc;return uc(e).stack=t.stack,t.stack=[],t.state=dc,Kl||(this.disposed=!0),e}}),Kl&&tc(mc,"disposed",{configurable:!0,get:function(){return uc(this).state===dc}}),Ql(mc,ac,mc.dispose,{name:"dispose"}),Ql(mc,oc,lc,{nonWritable:!0}),Yl({global:!0,constructor:!0},{DisposableStack:pc});var gc,bc,vc,yc=ft,wc=dt,xc=Re,kc=function(t,e,r){yc?wc.f(t,e,xc(0,r)):t[e]=r},$c=s,_c=mt,Sc=bt,Ec=Yi,Ac=vn,Mc=ut("iterator");[].keys&&"next"in(vc=[].keys())&&(bc=Ec(Ec(vc)))!==Object.prototype&&(gc=bc);var Tc=!Sc(gc)||$c(function(){var t={};return gc[Mc].call(t)!==t});Tc&&(gc={}),_c(gc[Mc])||Ac(gc,Mc,function(){return this});var Cc={IteratorPrototype:gc},Nc=wi,Rc=n,Oc=_l,Pc=Mt,Ic=mt,Fc=Yi,Dc=co,zc=kc,qc=s,jc=x,Uc=Cc.IteratorPrototype,Lc=ft,Bc="constructor",Hc="Iterator",Vc=ut("toStringTag"),Xc=TypeError,Wc=Rc[Hc],Yc=!Ic(Wc)||Wc.prototype!==Uc||!qc(function(){Wc({})}),Kc=function(){if(Oc(this,Uc),Fc(this)===Uc)throw new Xc("Abstract class Iterator not directly constructable")},Zc=function(t,e){Lc?Dc(Uc,t,{configurable:!0,get:function(){return e},set:function(e){if(Pc(this),this===Uc)throw new Xc("You can't redefine this property");jc(this,t)?this[t]=e:zc(this,t,e)}}):Uc[t]=e};jc(Uc,Vc)||Zc(Vc,Hc),!Yc&&jc(Uc,Bc)&&Uc[Bc]!==Object||Zc(Bc,Kc),Kc.prototype=Uc,Nc({global:!0,constructor:!0,forced:Yc},{Iterator:Kc});var Gc=Nt,Qc=vn,Jc=Kt,tu=x,eu=Cc.IteratorPrototype,ru=ut("dispose");tu(eu,ru)||Qc(eu,ru,function(){var t=Jc(this,"return");t&&Gc(t,this)});var nu=function(t){return{iterator:t,next:t.next,done:!1}},iu=RangeError,su=function(t){if(t==t)return t;throw new iu("NaN is not allowed")},au=_n,ou=RangeError,lu=function(t){var e=au(t);if(e<0)throw new ou("The argument can't be less than 0");return e},cu=Nt,uu=Mt,hu=Kt,du=function(t,e,r){var n,i;uu(t);try{if(!(n=hu(t,"return"))){if("throw"===e)throw r;return r}n=cu(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return uu(n),r},fu=function(t,e){return{value:t,done:e}},pu=du,mu=Nt,gu=Rs,bu=fr,vu=El,yu=Wr,wu=Kt,xu=Cc.IteratorPrototype,ku=fu,$u=du,_u=function(t,e,r){for(var n=t.length-1;n>=0;n--)if(void 0!==t[n])try{r=pu(t[n].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},Su=ut("toStringTag"),Eu="IteratorHelper",Au="WrapForValidIterator",Mu="normal",Tu="throw",Cu=yu.set,Nu=function(t){var e=yu.getterFor(t?Au:Eu);return vu(gu(xu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return ku(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:ku(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),n=r.iterator;if(r.done=!0,t){var i=wu(n,"return");return i?mu(i,n):ku(void 0,!0)}if(r.inner)try{$u(r.inner.iterator,Mu)}catch(t){return $u(n,Tu,t)}if(r.openIters)try{_u(r.openIters,Mu)}catch(t){return $u(n,Tu,t)}return n&&$u(n,Mu),ku(void 0,!0)}})},Ru=Nu(!0),Ou=Nu(!1);bu(Ou,Su,"Iterator Helper");var Pu=function(t,e,r){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?Au:Eu,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,Cu(this,i)};return n.prototype=e?Ru:Ou,n},Iu=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Fu=n,Du=function(t,e){var r=Fu.Iterator,n=r&&r.prototype,i=n&&n[t],s=!1;if(i)try{i.call({next:function(){return{done:!0}},return:function(){s=!0}},-1)}catch(t){t instanceof e||(s=!1)}if(!s)return i},zu=wi,qu=Nt,ju=Mt,Uu=nu,Lu=su,Bu=lu,Hu=du,Vu=Pu,Xu=Du,Wu=!Iu("drop",0),Yu=!Wu&&Xu("drop",RangeError),Ku=Wu||Yu,Zu=Vu(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=ju(qu(r,e)),this.done=!!t.done)return;if(t=ju(qu(r,e)),!(this.done=!!t.done))return t.value});zu({target:"Iterator",proto:!0,real:!0,forced:Ku},{drop:function(t){var e;ju(this);try{e=Bu(Lu(+t))}catch(t){Hu(this,"throw",t)}return Yu?qu(Yu,this,e):new Zu(Uu(this),{remaining:e})}});var Gu={},Qu=Gu,Ju=ut("iterator"),th=Array.prototype,eh=Mi,rh=Kt,nh=d,ih=Gu,sh=ut("iterator"),ah=function(t){if(!nh(t))return rh(t,sh)||rh(t,"@@iterator")||ih[eh(t)]},oh=Nt,lh=Xt,ch=Mt,uh=Lt,hh=ah,dh=TypeError,fh=function(t,e){var r=arguments.length<2?hh(t):e;if(lh(r))return ch(oh(r,t));throw new dh(uh(t)+" is not iterable")},ph=Ol,mh=Nt,gh=Mt,bh=Lt,vh=function(t){return void 0!==t&&(Qu.Array===t||th[Ju]===t)},yh=Rn,wh=It,xh=fh,kh=ah,$h=du,_h=TypeError,Sh=function(t,e){this.stopped=t,this.result=e},Eh=Sh.prototype,Ah=function(t,e,r){var n,i,s,a,o,l,c,u=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_RECORD),f=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),m=ph(e,u),g=function(t){return n&&$h(n,"normal"),new Sh(!0,t)},b=function(t){return h?(gh(t),p?m(t[0],t[1],g):m(t[0],t[1])):p?m(t,g):m(t)};if(d)n=t.iterator;else if(f)n=t;else{if(!(i=kh(t)))throw new _h(bh(t)+" is not iterable");if(vh(i)){for(s=0,a=yh(t);a>s;s++)if((o=b(t[s]))&&wh(Eh,o))return o;return new Sh(!1)}n=xh(t,i)}for(l=d?t.next:n.next;!(c=mh(l,n)).done;){try{o=b(c.value)}catch(t){$h(n,"throw",t)}if("object"==typeof o&&o&&wh(Eh,o))return o}return new Sh(!1)},Mh=wi,Th=Nt,Ch=Ah,Nh=Xt,Rh=Mt,Oh=nu,Ph=du,Ih=Du("every",TypeError);Mh({target:"Iterator",proto:!0,real:!0,forced:Ih},{every:function(t){Rh(this);try{Nh(t)}catch(t){Ph(this,"throw",t)}if(Ih)return Th(Ih,this,t);var e=Oh(this),r=0;return!Ch(e,function(e,n){if(!t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Fh=Mt,Dh=du,zh=function(t,e,r,n){try{return n?e(Fh(r)[0],r[1]):e(r)}catch(e){Dh(t,"throw",e)}},qh=wi,jh=Nt,Uh=Xt,Lh=Mt,Bh=nu,Hh=Pu,Vh=zh,Xh=du,Wh=Du,Yh=!Iu("filter",function(){}),Kh=!Yh&&Wh("filter",TypeError),Zh=Yh||Kh,Gh=Hh(function(){for(var t,e,r=this.iterator,n=this.predicate,i=this.next;;){if(t=Lh(jh(i,r)),this.done=!!t.done)return;if(e=t.value,Vh(r,n,[e,this.counter++],!0))return e}});qh({target:"Iterator",proto:!0,real:!0,forced:Zh},{filter:function(t){Lh(this);try{Uh(t)}catch(t){Xh(this,"throw",t)}return Kh?jh(Kh,this,t):new Gh(Bh(this),{predicate:t})}});var Qh=wi,Jh=Nt,td=Ah,ed=Xt,rd=Mt,nd=nu,id=du,sd=Du("find",TypeError);Qh({target:"Iterator",proto:!0,real:!0,forced:sd},{find:function(t){rd(this);try{ed(t)}catch(t){id(this,"throw",t)}if(sd)return Jh(sd,this,t);var e=nd(this),r=0;return td(e,function(e,n){if(t(e,r++))return n(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var ad=Nt,od=Mt,ld=nu,cd=ah,ud=function(t,e){e&&"string"==typeof t||od(t);var r=cd(t);return ld(od(void 0!==r?ad(r,t):t))},hd=wi,dd=Nt,fd=Xt,pd=Mt,md=nu,gd=ud,bd=Pu,vd=du,yd=Du,wd=!Iu("flatMap",function(){}),xd=!wd&&yd("flatMap",TypeError),kd=wd||xd,$d=bd(function(){for(var t,e,r=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=pd(dd(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){vd(r,"throw",t)}if(t=pd(dd(this.next,r)),this.done=!!t.done)return;try{this.inner=gd(n(t.value,this.counter++),!1)}catch(t){vd(r,"throw",t)}}});hd({target:"Iterator",proto:!0,real:!0,forced:kd},{flatMap:function(t){pd(this);try{fd(t)}catch(t){vd(this,"throw",t)}return xd?dd(xd,this,t):new $d(md(this),{mapper:t,inner:null})}});var _d=wi,Sd=Nt,Ed=Ah,Ad=Xt,Md=Mt,Td=nu,Cd=du,Nd=Du("forEach",TypeError);_d({target:"Iterator",proto:!0,real:!0,forced:Nd},{forEach:function(t){Md(this);try{Ad(t)}catch(t){Cd(this,"throw",t)}if(Nd)return Sd(Nd,this,t);var e=Td(this),r=0;Ed(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var Rd=wi,Od=Nt,Pd=v,Id=It,Fd=Cc.IteratorPrototype,Dd=Pu,zd=ud,qd=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),jd=Dd(function(){return Od(this.next,this.iterator)},!0);Rd({target:"Iterator",stat:!0,forced:qd},{from:function(t){var e=zd("string"==typeof t?Pd(t):t,!0);return Id(Fd,e.iterator)?e.iterator:new jd(e)}});var Ud=wi,Ld=Nt,Bd=Xt,Hd=Mt,Vd=nu,Xd=Pu,Wd=zh,Yd=du,Kd=Du,Zd=!Iu("map",function(){}),Gd=!Zd&&Kd("map",TypeError),Qd=Zd||Gd,Jd=Xd(function(){var t=this.iterator,e=Hd(Ld(this.next,t));if(!(this.done=!!e.done))return Wd(t,this.mapper,[e.value,this.counter++],!0)});Ud({target:"Iterator",proto:!0,real:!0,forced:Qd},{map:function(t){Hd(this);try{Bd(t)}catch(t){Yd(this,"throw",t)}return Gd?Ld(Gd,this,t):new Jd(Vd(this),{mapper:t})}});var tf=a,ef=Function.prototype,rf=ef.apply,nf=ef.call,sf="object"==typeof Reflect&&Reflect.apply||(tf?nf.bind(rf):function(){return nf.apply(rf,arguments)}),af=wi,of=Ah,lf=Xt,cf=Mt,uf=nu,hf=du,df=Du,ff=sf,pf=TypeError,mf=s(function(){[].keys().reduce(function(){},void 0)}),gf=!mf&&df("reduce",pf);af({target:"Iterator",proto:!0,real:!0,forced:mf||gf},{reduce:function(t){cf(this);try{lf(t)}catch(t){hf(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(gf)return ff(gf,this,e?[t]:[t,r]);var n=uf(this),i=0;if(of(n,function(n){e?(e=!1,r=n):r=t(r,n,i),i++},{IS_RECORD:!0}),e)throw new pf("Reduce of empty iterator with no initial value");return r}});var bf=wi,vf=Nt,yf=Ah,wf=Xt,xf=Mt,kf=nu,$f=du,_f=Du("some",TypeError);bf({target:"Iterator",proto:!0,real:!0,forced:_f},{some:function(t){xf(this);try{wf(t)}catch(t){$f(this,"throw",t)}if(_f)return vf(_f,this,t);var e=kf(this),r=0;return yf(e,function(e,n){if(t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Sf=wi,Ef=Nt,Af=Mt,Mf=nu,Tf=su,Cf=lu,Nf=Pu,Rf=du,Of=Du("take",RangeError),Pf=Nf(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,Rf(t,"normal",void 0);var e=Af(Ef(this.next,t));return(this.done=!!e.done)?void 0:e.value});Sf({target:"Iterator",proto:!0,real:!0,forced:Of},{take:function(t){var e;Af(this);try{e=Cf(Tf(+t))}catch(t){Rf(this,"throw",t)}return Of?Ef(Of,this,e):new Pf(Mf(this),{remaining:e})}});var If=Mt,Ff=Ah,Df=nu,zf=[].push;wi({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return Ff(Df(If(this)),zf,{that:t,IS_RECORD:!0}),t}});var qf=h,jf=Map.prototype,Uf={Map:Map,set:qf(jf.set),get:qf(jf.get),has:qf(jf.has),remove:qf(jf.delete)},Lf=wi,Bf=Xt,Hf=m,Vf=Ah,Xf=s,Wf=Uf.Map,Yf=Uf.has,Kf=Uf.get,Zf=Uf.set,Gf=h([].push);Lf({target:"Map",stat:!0,forced:Xf(function(){return 1!==Wf.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){Hf(t),Bf(e);var r=new Wf,n=0;return Vf(t,function(t){var i=e(t,n++);Yf(r,i)?Gf(Kf(r,i),t):Zf(r,i,[t])}),r}});var Qf=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},Jf=Qf,tp=Ga,ep=Math.abs,rp=function(t,e,r,n){var i=+t,s=ep(i),a=Jf(i);if(s<n)return a*tp(s/n/e)*n*e;var o=(1+e/2220446049250313e-31)*s,l=o-(o-s);return l>r||l!=l?a*(1/0):a*l};wi({target:"Math",stat:!0},{f16round:function(t){return rp(t,.0009765625,65504,6103515625e-14)}});var np=wi,ip=h,sp=Ah,ap=RangeError,op=TypeError,lp=1/0,cp=Math.abs,up=Math.pow,hp=ip([].push),dp=up(2,1023),fp=up(2,53)-1,pp=Number.MAX_VALUE,mp=up(2,971),gp={},bp={},vp={},yp={},wp={},xp=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};np({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,n=yp;switch(sp(t,function(t){if(++r>=fp)throw new ap("Maximum allowed index exceeded");if("number"!=typeof t)throw new op("Value is not a number");n!==gp&&(t!=t?n=gp:t===lp?n=n===bp?gp:vp:t===-1/0?n=n===vp?gp:bp:0===t&&1/t!==lp||n!==yp&&n!==wp||(n=wp,hp(e,t)))}),n){case gp:return NaN;case bp:return-1/0;case vp:return lp;case yp:return-0}for(var i,s,a,o,l,c,u=[],h=0,d=0;d<e.length;d++){i=e[d];for(var f=0,p=0;p<u.length;p++){if(s=u[p],cp(i)<cp(s)&&(c=i,i=s,s=c),o=(a=xp(i,s)).hi,l=a.lo,cp(o)===lp){var m=o===lp?1:-1;h+=m,cp(i=i-m*dp-m*dp)<cp(s)&&(c=i,i=s,s=c),o=(a=xp(i,s)).hi,l=a.lo}0!==l&&(u[f++]=l),i=o}u.length=f,0!==i&&hp(u,i)}var g=u.length-1;if(o=0,l=0,0!==h){var b=g>=0?u[g]:0;if(g--,cp(h)>1||h>0&&b>0||h<0&&b<0)return h>0?lp:-1/0;if(o=(a=xp(h*dp,b/2)).hi,l=a.lo,l*=2,cp(2*o)===lp)return o>0?o===dp&&l===-mp/2&&g>=0&&u[g]<0?pp:lp:o===-dp&&l===mp/2&&g>=0&&u[g]>0?-pp:-1/0;0!==l&&(u[++g]=l,l=0),o*=2}for(;g>=0&&(o=(a=xp(o,u[g--])).hi,0===(l=a.lo)););return g>=0&&(l<0&&u[g]<0||l>0&&u[g]>0)&&(s=2*l)===(i=o+s)-o&&(o=i),o}});var kp=wi,$p=kc,_p=Pt,Sp=h,Ep=Xt,Ap=m,Mp=ue,Tp=Ah,Cp=s,Np=Object.groupBy,Rp=_p("Object","create"),Op=Sp([].push);kp({target:"Object",stat:!0,forced:!Np||Cp(function(){return 1!==Np("ab",function(t){return t}).a.length})},{groupBy:function(t,e){Ap(t),Ep(e);var r=Rp(null),n=0;return Tp(t,function(t){var i=Mp(e(t,n++));i in r?Op(r[i],t):$p(r,i,[t])}),r}});var Pp=h([].slice),Ip={},Fp=Xt,Dp=TypeError,zp=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw new Dp("Bad Promise constructor");e=t,r=n}),this.resolve=Fp(e),this.reject=Fp(r)};Ip.f=function(t){return new zp(t)};var qp=wi,jp=sf,Up=Pp,Lp=Ip,Bp=Xt,Hp=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Vp=n.Promise,Xp=!1;qp({target:"Promise",stat:!0,forced:!Vp||!Vp.try||Hp(function(){Vp.try(function(t){Xp=8===t},8)}).error||!Xp},{try:function(t){var e=arguments.length>1?Up(arguments,1):[],r=Lp.f(this),n=Hp(function(){return jp(Bp(t),void 0,e)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var Wp=Ip;wi({target:"Promise",stat:!0},{withResolvers:function(){var t=Wp.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var Yp=h,Kp=s,Zp=mt,Gp=Mi,Qp=Er,Jp=function(){},tm=Pt("Reflect","construct"),em=/^\s*(?:class|function)\b/,rm=Yp(em.exec),nm=!em.test(Jp),im=function(t){if(!Zp(t))return!1;try{return tm(Jp,[],t),!0}catch(t){return!1}},sm=function(t){if(!Zp(t))return!1;switch(Gp(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return nm||!!rm(em,Qp(t))}catch(t){return!0}};sm.sham=!0;var am,om,lm=!tm||Kp(function(){var t;return im(im.call)||!im(Object)||!im(function(){t=!0})||t})?sm:im,cm=n,um=O,hm=mt,dm=Yi,fm=vn,pm="USE_FUNCTION_CONSTRUCTOR",mm=ut("asyncIterator"),gm=cm.AsyncIterator,bm=um.AsyncIteratorPrototype;if(bm)am=bm;else if(hm(gm))am=gm.prototype;else if(um[pm]||cm[pm])try{om=dm(dm(dm(Function("return async function*(){}()")()))),dm(om)===Object.prototype&&(am=om)}catch(t){}am||(am={}),hm(am[mm])||fm(am,mm,function(){return this});var vm=am,ym=Nt,wm=Mt,xm=Rs,km=Kt,$m=El,_m=Wr,Sm=du,Em=vm,Am=fu,Mm=Pt("Promise"),Tm="AsyncFromSyncIterator",Cm=_m.set,Nm=_m.getterFor(Tm),Rm=function(t,e,r,n,i){var s=t.done;Mm.resolve(t.value).then(function(t){e(Am(t,s))},function(t){if(!s&&i)try{Sm(n,"throw",t)}catch(e){t=e}r(t)})},Om=function(t){t.type=Tm,Cm(this,t)};Om.prototype=$m(xm(Em),{next:function(){var t=Nm(this);return new Mm(function(e,r){var n=wm(ym(t.next,t.iterator));Rm(n,e,r,t.iterator,!0)})},return:function(){var t=Nm(this).iterator;return new Mm(function(e,r){var n=km(t,"return");if(void 0===n)return e(Am(void 0,!0));var i=wm(ym(n,t));Rm(i,e,r,t)})}});var Pm,Im,Fm,Dm,zm,qm=Om,jm=Nt,Um=qm,Lm=Mt,Bm=fh,Hm=nu,Vm=Kt,Xm=ut("asyncIterator"),Wm=n,Ym=Nt,Km=Pt,Zm=Kt,Gm=Nt,Qm=Xt,Jm=Mt,tg=bt,eg=$a,rg=Pt,ng=nu,ig=function(t,e,r,n){try{var i=Zm(t,"return");if(i)return Km("Promise").resolve(Ym(i,t)).then(function(){e(r)},function(t){n(t)})}catch(t){return n(t)}e(r)},sg={toArray:(Pm=0,Im=0===Pm,Fm=1===Pm,Dm=2===Pm,zm=3===Pm,function(t,e,r){Jm(t);var n=void 0!==e;!n&&Im||Qm(e);var i=ng(t),s=rg("Promise"),a=i.iterator,o=i.next,l=0;return new s(function(t,i){var c=function(t){ig(a,i,t,i)},u=function(){try{if(n)try{eg(l)}catch(t){c(t)}s.resolve(Jm(Gm(o,a))).then(function(o){try{if(Jm(o).done)Im?(r.length=l,t(r)):t(!zm&&(Dm||void 0));else{var h=o.value;try{if(n){var d=e(h,l),f=function(e){if(Fm)u();else if(Dm)e?u():ig(a,t,!1,i);else if(Im)try{r[l++]=e,u()}catch(t){c(t)}else e?ig(a,t,zm||h,i):u()};tg(d)?s.resolve(d).then(f,c):f(d)}else r[l++]=h,u()}catch(t){c(t)}}}catch(t){i(t)}},i)}catch(t){i(t)}};u()})})},ag=Ol,og=h,lg=v,cg=lm,ug=function(t,e){var r=arguments.length<2?Vm(t,Xm):e;return r?Lm(jm(r,t)):new Um(Hm(Bm(t)))},hg=fh,dg=nu,fg=ah,pg=Kt,mg=Pt,gg=function(t,e){var r=Wm[t],n=r&&r.prototype;return n&&n[e]},bg=qm,vg=sg.toArray,yg=ut("asyncIterator"),wg=og(gg("Array","values")),xg=og(wg([]).next),kg=function(){return new $g(this)},$g=function(t){this.iterator=wg(t)};$g.prototype.next=function(){return xg(this.iterator)};var _g=wi,Sg=function(t){var e=this,r=arguments.length,n=r>1?arguments[1]:void 0,i=r>2?arguments[2]:void 0;return new(mg("Promise"))(function(r){var s=lg(t);void 0!==n&&(n=ag(n,i));var a=pg(s,yg),o=a?void 0:fg(s)||kg,l=cg(e)?new e:[],c=a?ug(s,a):new bg(dg(hg(s,o)));r(vg(c,n,l))})},Eg=s,Ag=Array.fromAsync,Mg=!Ag||Eg(function(){var t=0;return Ag.call(function(){return t++,[]},{length:0}),1!==t});_g({target:"Array",stat:!0,forced:Mg},{fromAsync:Sg});var Tg=wi,Cg=ft,Ng=Pt,Rg=Xt,Og=_l,Pg=vn,Ig=El,Fg=co,Dg=ut,zg=Wr,qg=Wl,jg=Z,Ug=Ng("Promise"),Lg=Ng("SuppressedError"),Bg=ReferenceError,Hg=Dg("asyncDispose"),Vg=Dg("toStringTag"),Xg="AsyncDisposableStack",Wg=zg.set,Yg=zg.getterFor(Xg),Kg="async-dispose",Zg="disposed",Gg=function(t){var e=Yg(t);if(e.state===Zg)throw new Bg(Xg+" already disposed");return e},Qg=function(){Wg(Og(this,Jg),{type:Xg,state:"pending",stack:[]}),Cg||(this.disposed=!1)},Jg=Qg.prototype;Ig(Jg,{disposeAsync:function(){var t=this;return new Ug(function(e,r){var n=Yg(t);if(n.state===Zg)return e(void 0);n.state=Zg,Cg||(t.disposed=!0);var i,s=n.stack,a=s.length,o=!1,l=function(t){o?i=new Lg(t,i):(o=!0,i=t),c()},c=function(){if(a){var t=s[--a];s[a]=null;try{Ug.resolve(t()).then(c,l)}catch(t){l(t)}}else n.stack=null,o?r(i):e(void 0)};c()})},use:function(t){return qg(Gg(this),t,Kg),t},adopt:function(t,e){var r=Gg(this);return Rg(e),qg(r,void 0,Kg,function(){return e(t)}),t},defer:function(t){var e=Gg(this);Rg(t),qg(e,void 0,Kg,t)},move:function(){var t=Gg(this),e=new Qg;return Yg(e).stack=t.stack,t.stack=[],t.state=Zg,Cg||(this.disposed=!0),e}}),Cg&&Fg(Jg,"disposed",{configurable:!0,get:function(){return Yg(this).state===Zg}}),Pg(Jg,Hg,Jg.disposeAsync,{name:"disposeAsync"}),Pg(Jg,Vg,Xg,{nonWritable:!0}),Tg({global:!0,constructor:!0,forced:jg&&jg<136},{AsyncDisposableStack:Qg});var tb=Nt,eb=vn,rb=Pt,nb=Kt,ib=x,sb=vm,ab=ut("asyncDispose"),ob=rb("Promise");ib(sb,ab)||eb(sb,ab,function(){var t=this;return new ob(function(e,r){var n=nb(t,"return");n?ob.resolve(tb(n,t)).then(function(){e(void 0)},r):e(void 0)})});var lb,cb=TypeError,ub=function(t){if("string"==typeof t)return t;throw new cb("Argument is not a string")},hb=_n,db=Ws,fb=m,pb=RangeError,mb=h,gb=Cn,bb=Ws,vb=function(t){var e=db(fb(this)),r="",n=hb(t);if(n<0||n===1/0)throw new pb("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},yb=m,wb=mb(vb),xb=mb("".slice),kb=Math.ceil,$b={start:(lb=!1,function(t,e,r){var n,i,s=bb(yb(t)),a=gb(e),o=s.length,l=void 0===r?" ":bb(r);return a<=o||""===l?s:((i=wb(l,kb((n=a-o)/l.length))).length>n&&(i=xb(i,0,n)),lb?s+i:i+s)})},_b=wi,Sb=h,Eb=ub,Ab=x,Mb=$b.start,Tb=Array,Cb=RegExp.escape,Nb=Sb("".charAt),Rb=Sb("".charCodeAt),Ob=Sb(1.1.toString),Pb=Sb([].join),Ib=/^[0-9a-z]/i,Fb=/^[$()*+./?[\\\]^{|}]/,Db=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),zb=Sb(Ib.exec),qb={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},jb=function(t){var e=Ob(Rb(t,0),16);return e.length<3?"\\x"+Mb(e,2,"0"):"\\u"+Mb(e,4,"0")};_b({target:"RegExp",stat:!0,forced:!Cb||"\\x61b"!==Cb("ab")},{escape:function(t){Eb(t);for(var e=t.length,r=Tb(e),n=0;n<e;n++){var i=Nb(t,n);if(0===n&&zb(Ib,i))r[n]=jb(i);else if(Ab(qb,i))r[n]="\\"+qb[i];else if(zb(Fb,i))r[n]="\\"+i;else if(zb(Db,i))r[n]=jb(i);else{var s=Rb(i,0);55296!=(63488&s)?r[n]=i:s>=56320||n+1>=e||56320!=(64512&Rb(t,n+1))?r[n]=jb(i):(r[n]=i,r[++n]=Nb(t,n))}}return Pb(r,"")}});var Ub=h,Lb=Set.prototype,Bb={Set:Set,add:Ub(Lb.add),has:Ub(Lb.has),remove:Ub(Lb.delete),proto:Lb},Hb=Bb.has,Vb=function(t){return Hb(t),t},Xb=Nt,Wb=function(t,e,r){for(var n,i,s=r?t:t.iterator,a=t.next;!(n=Xb(a,s)).done;)if(void 0!==(i=e(n.value)))return i},Yb=h,Kb=Wb,Zb=Bb.Set,Gb=Bb.proto,Qb=Yb(Gb.forEach),Jb=Yb(Gb.keys),tv=Jb(new Zb).next,ev=function(t,e,r){return r?Kb({iterator:Jb(t),next:tv},e):Qb(t,e)},rv=ev,nv=Bb.Set,iv=Bb.add,sv=function(t){var e=new nv;return rv(t,function(t){iv(e,t)}),e},av=Gi(Bb.proto,"size","get")||function(t){return t.size},ov=Xt,lv=Mt,cv=Nt,uv=_n,hv=nu,dv="Invalid size",fv=RangeError,pv=TypeError,mv=Math.max,gv=function(t,e){this.set=t,this.size=mv(e,0),this.has=ov(t.has),this.keys=ov(t.keys)};gv.prototype={getIterator:function(){return hv(lv(cv(this.keys,this.set)))},includes:function(t){return cv(this.has,this.set,t)}};var bv=function(t){lv(t);var e=+t.size;if(e!=e)throw new pv(dv);var r=uv(e);if(r<0)throw new fv(dv);return new gv(t,r)},vv=Vb,yv=sv,wv=av,xv=bv,kv=ev,$v=Wb,_v=Bb.has,Sv=Bb.remove,Ev=Pt,Av=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},Mv=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},Tv=function(t,e){var r=Ev("Set");try{(new r)[t](Av(0));try{return(new r)[t](Av(-1)),!1}catch(n){if(!e)return!0;try{return(new r)[t](Mv(-1/0)),!1}catch(n){return e(new r([1,2])[t](Mv(1/0)))}}}catch(t){return!1}},Cv=wi,Nv=function(t){var e=vv(this),r=xv(t),n=yv(e);return wv(e)<=r.size?kv(e,function(t){r.includes(t)&&Sv(n,t)}):$v(r.getIterator(),function(t){_v(n,t)&&Sv(n,t)}),n},Rv=s,Ov=!Tv("difference",function(t){return 0===t.size})||Rv(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});Cv({target:"Set",proto:!0,real:!0,forced:Ov},{difference:Nv});var Pv=Vb,Iv=av,Fv=bv,Dv=ev,zv=Wb,qv=Bb.Set,jv=Bb.add,Uv=Bb.has,Lv=s,Bv=function(t){var e=Pv(this),r=Fv(t),n=new qv;return Iv(e)>r.size?zv(r.getIterator(),function(t){Uv(e,t)&&jv(n,t)}):Dv(e,function(t){r.includes(t)&&jv(n,t)}),n};wi({target:"Set",proto:!0,real:!0,forced:!Tv("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||Lv(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:Bv});var Hv=Vb,Vv=Bb.has,Xv=av,Wv=bv,Yv=ev,Kv=Wb,Zv=du,Gv=function(t){var e=Hv(this),r=Wv(t);if(Xv(e)<=r.size)return!1!==Yv(e,function(t){if(r.includes(t))return!1},!0);var n=r.getIterator();return!1!==Kv(n,function(t){if(Vv(e,t))return Zv(n,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Tv("isDisjointFrom",function(t){return!t})},{isDisjointFrom:Gv});var Qv=Vb,Jv=av,ty=ev,ey=bv,ry=function(t){var e=Qv(this),r=ey(t);return!(Jv(e)>r.size)&&!1!==ty(e,function(t){if(!r.includes(t))return!1},!0)};wi({target:"Set",proto:!0,real:!0,forced:!Tv("isSubsetOf",function(t){return t})},{isSubsetOf:ry});var ny=Vb,iy=Bb.has,sy=av,ay=bv,oy=Wb,ly=du,cy=function(t){var e=ny(this),r=ay(t);if(sy(e)<r.size)return!1;var n=r.getIterator();return!1!==oy(n,function(t){if(!iy(e,t))return ly(n,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Tv("isSupersetOf",function(t){return!t})},{isSupersetOf:cy});var uy=Vb,hy=sv,dy=bv,fy=Wb,py=Bb.add,my=Bb.has,gy=Bb.remove,by=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},n=e[t](r);return 1===n.size&&4===n.values().next().value}catch(t){return!1}},vy=function(t){var e=uy(this),r=dy(t).getIterator(),n=hy(e);return fy(r,function(t){my(e,t)?gy(n,t):py(n,t)}),n},yy=by;wi({target:"Set",proto:!0,real:!0,forced:!Tv("symmetricDifference")||!yy("symmetricDifference")},{symmetricDifference:vy});var wy=Vb,xy=Bb.add,ky=sv,$y=bv,_y=Wb,Sy=function(t){var e=wy(this),r=$y(t).getIterator(),n=ky(e);return _y(r,function(t){xy(n,t)}),n},Ey=by;wi({target:"Set",proto:!0,real:!0,forced:!Tv("union")||!Ey("union")},{union:Sy});var Ay=wi,My=m,Ty=Ws,Cy=h("".charCodeAt);Ay({target:"String",proto:!0},{isWellFormed:function(){for(var t=Ty(My(this)),e=t.length,r=0;r<e;r++){var n=Cy(t,r);if(55296==(63488&n)&&(n>=56320||++r>=e||56320!=(64512&Cy(t,r))))return!1}return!0}});var Ny=wi,Ry=Nt,Oy=h,Py=m,Iy=Ws,Fy=s,Dy=Array,zy=Oy("".charAt),qy=Oy("".charCodeAt),jy=Oy([].join),Uy="".toWellFormed,Ly=Uy&&Fy(function(){return"1"!==Ry(Uy,1)});Ny({target:"String",proto:!0,forced:Ly},{toWellFormed:function(){var t=Iy(Py(this));if(Ly)return Ry(Uy,t);for(var e=t.length,r=Dy(e),n=0;n<e;n++){var i=qy(t,n);55296!=(63488&i)?r[n]=zy(t,n):i>=56320||n+1>=e||56320!=(64512&qy(t,n+1))?r[n]="�":(r[n]=zy(t,n),r[++n]=zy(t,n))}return jy(r,"")}});var By,Hy,Vy,Xy=uo,Wy=ft,Yy=n,Ky=mt,Zy=bt,Gy=x,Qy=Mi,Jy=fr,tw=vn,ew=co,rw=Yi,nw=as,iw=ut,sw=j,aw=Wr.enforce,ow=Wr.get,lw=Yy.Int8Array,cw=lw&&lw.prototype,uw=Yy.Uint8ClampedArray,hw=uw&&uw.prototype,dw=lw&&rw(lw),fw=cw&&rw(cw),pw=Object.prototype,mw=Yy.TypeError,gw=iw("toStringTag"),bw=sw("TYPED_ARRAY_TAG"),vw="TypedArrayConstructor",yw=Xy&&!!nw&&"Opera"!==Qy(Yy.opera),ww={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},xw={BigInt64Array:8,BigUint64Array:8},kw=function(t){var e=rw(t);if(Zy(e)){var r=ow(e);return r&&Gy(r,vw)?r[vw]:kw(e)}};for(By in ww)(Vy=(Hy=Yy[By])&&Hy.prototype)?aw(Vy)[vw]=Hy:yw=!1;for(By in xw)(Vy=(Hy=Yy[By])&&Hy.prototype)&&(aw(Vy)[vw]=Hy);if((!yw||!Ky(dw)||dw===Function.prototype)&&(dw=function(){throw new mw("Incorrect invocation")},yw))for(By in ww)Yy[By]&&nw(Yy[By],dw);if((!yw||!fw||fw===pw)&&(fw=dw.prototype,yw))for(By in ww)Yy[By]&&nw(Yy[By].prototype,fw);if(yw&&rw(hw)!==fw&&nw(hw,fw),Wy&&!Gy(fw,gw))for(By in ew(fw,gw,{configurable:!0,get:function(){return Zy(this)?this[bw]:void 0}}),ww)Yy[By]&&Jy(Yy[By],bw,By);var $w={aTypedArray:function(t){if(function(t){if(!Zy(t))return!1;var e=Qy(t);return Gy(ww,e)||Gy(xw,e)}(t))return t;throw new mw("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,n){if(Wy){if(r)for(var i in ww){var s=Yy[i];if(s&&Gy(s.prototype,t))try{delete s.prototype[t]}catch(r){try{s.prototype[t]=e}catch(t){}}}fw[t]&&!r||tw(fw,t,r?e:yw&&cw[t]||e,n)}},getTypedArrayConstructor:kw},_w=Mi,Sw=oe,Ew=TypeError,Aw=Na,Mw=function(t){var e=_w(t);return"BigInt64Array"===e||"BigUint64Array"===e},Tw=_n,Cw=function(t){var e=Sw(t,"number");if("number"==typeof e)throw new Ew("Can't convert number to bigint");return BigInt(e)},Nw=$w.aTypedArray,Rw=$w.getTypedArrayConstructor,Ow=$w.exportTypedArrayMethod,Pw=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),Iw=Pw&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();Ow("with",{with:function(t,e){var r=Nw(this),n=Tw(t),i=Mw(r)?Cw(e):+e;return Aw(r,Rw(r),n,i)}}.with,!Pw||Iw);var Fw=Rn,Dw=bt,zw=String,qw=TypeError,jw=function(t){if(void 0===t||Dw(t))return t;throw new qw(zw(t)+" is not an object or undefined")},Uw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Lw=Uw+"+/",Bw=Uw+"-_",Hw=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},Vw={i2c:Lw,c2i:Hw(Lw),i2cUrl:Bw,c2iUrl:Hw(Bw)},Xw=TypeError,Ww=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new Xw("Incorrect `alphabet` option")},Yw=n,Kw=h,Zw=jw,Gw=ub,Qw=x,Jw=Ww,tx=Ro,ex=Vw.c2i,rx=Vw.c2iUrl,nx=Yw.SyntaxError,ix=Yw.TypeError,sx=Kw("".charAt),ax=function(t,e){for(var r=t.length;e<r;e++){var n=sx(t,e);if(" "!==n&&"\t"!==n&&"\n"!==n&&"\f"!==n&&"\r"!==n)break}return e},ox=function(t,e,r){var n=t.length;n<4&&(t+=2===n?"AA":"A");var i=(e[sx(t,0)]<<18)+(e[sx(t,1)]<<12)+(e[sx(t,2)]<<6)+e[sx(t,3)],s=[i>>16&255,i>>8&255,255&i];if(2===n){if(r&&0!==s[1])throw new nx("Extra bits");return[s[0]]}if(3===n){if(r&&0!==s[2])throw new nx("Extra bits");return[s[0],s[1]]}return s},lx=function(t,e,r){for(var n=e.length,i=0;i<n;i++)t[r+i]=e[i];return r+n},cx=function(t,e,r,n){Gw(t),Zw(e);var i="base64"===Jw(e)?ex:rx,s=e?e.lastChunkHandling:void 0;if(void 0===s&&(s="loose"),"loose"!==s&&"strict"!==s&&"stop-before-partial"!==s)throw new ix("Incorrect `lastChunkHandling` option");r&&tx(r.buffer);var a=t.length,o=r||[],l=0,c=0,u="",h=0;if(n)for(;;){if((h=ax(t,h))===a){if(u.length>0){if("stop-before-partial"===s)break;if("loose"!==s)throw new nx("Missing padding");if(1===u.length)throw new nx("Malformed padding: exactly one additional character");l=lx(o,ox(u,i,!1),l)}c=a;break}var d=sx(t,h);if(++h,"="===d){if(u.length<2)throw new nx("Padding is too early");if(h=ax(t,h),2===u.length){if(h===a){if("stop-before-partial"===s)break;throw new nx("Malformed padding: only one =")}"="===sx(t,h)&&(++h,h=ax(t,h))}if(h<a)throw new nx("Unexpected character after padding");l=lx(o,ox(u,i,"strict"===s),l),c=a;break}if(!Qw(i,d))throw new nx("Unexpected character");var f=n-l;if(1===f&&2===u.length||2===f&&3===u.length)break;if(4===(u+=d).length&&(l=lx(o,ox(u,i,!1),l),u="",c=h,l===n))break}return{bytes:o,read:c,written:l}},ux=wi,hx=function(t,e,r){for(var n=0,i=arguments.length>2?r:Fw(e),s=new t(i);i>n;)s[n]=e[n++];return s},dx=cx,fx=n.Uint8Array,px=!fx||!fx.fromBase64||!function(){try{return void fx.fromBase64("a")}catch(t){}try{fx.fromBase64("",null)}catch(t){return!0}}();fx&&ux({target:"Uint8Array",stat:!0,forced:px},{fromBase64:function(t){var e=dx(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return hx(fx,e.bytes)}});var mx=n,gx=h,bx=mx.Uint8Array,vx=mx.SyntaxError,yx=mx.parseInt,wx=Math.min,xx=/[^\da-f]/i,kx=gx(xx.exec),$x=gx("".slice),_x=function(t,e){var r=t.length;if(r%2!=0)throw new vx("String should be an even number of characters");for(var n=e?wx(e.length,r/2):r/2,i=e||new bx(n),s=0,a=0;a<n;){var o=$x(t,s,s+=2);if(kx(xx,o))throw new vx("String should only contain hex characters");i[a++]=yx(o,16)}return{bytes:i,read:s}},Sx=wi,Ex=ub,Ax=_x;n.Uint8Array&&Sx({target:"Uint8Array",stat:!0},{fromHex:function(t){return Ax(Ex(t)).bytes}});var Mx=Mi,Tx=TypeError,Cx=function(t){if("Uint8Array"===Mx(t))return t;throw new Tx("Argument is not an Uint8Array")},Nx=wi,Rx=cx,Ox=Cx,Px=n.Uint8Array,Ix=!Px||!Px.prototype.setFromBase64||!function(){var t=new Px([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();Px&&Nx({target:"Uint8Array",proto:!0,forced:Ix},{setFromBase64:function(t){Ox(this);var e=Rx(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var Fx=wi,Dx=ub,zx=Cx,qx=Ro,jx=_x;n.Uint8Array&&Fx({target:"Uint8Array",proto:!0},{setFromHex:function(t){zx(this),Dx(t),qx(this.buffer);var e=jx(t,this).read;return{read:e,written:e/2}}});var Ux=wi,Lx=n,Bx=jw,Hx=Cx,Vx=Ro,Xx=Ww,Wx=Vw.i2c,Yx=Vw.i2cUrl,Kx=h("".charAt),Zx=Lx.Uint8Array,Gx=!Zx||!Zx.prototype.toBase64||!function(){try{(new Zx).toBase64(null)}catch(t){return!0}}();Zx&&Ux({target:"Uint8Array",proto:!0,forced:Gx},{toBase64:function(){var t=Hx(this),e=arguments.length?Bx(arguments[0]):void 0,r="base64"===Xx(e)?Wx:Yx,n=!!e&&!!e.omitPadding;Vx(this.buffer);for(var i,s="",a=0,o=t.length,l=function(t){return Kx(r,i>>6*t&63)};a+2<o;a+=3)i=(t[a]<<16)+(t[a+1]<<8)+t[a+2],s+=l(3)+l(2)+l(1)+l(0);return a+2===o?(i=(t[a]<<16)+(t[a+1]<<8),s+=l(3)+l(2)+l(1)+(n?"":"=")):a+1===o&&(i=t[a]<<16,s+=l(3)+l(2)+(n?"":"==")),s}});var Qx=wi,Jx=n,tk=Cx,ek=Ro,rk=h(1.1.toString),nk=Jx.Uint8Array,ik=!nk||!nk.prototype.toHex||!function(){try{return"ffffffffffffffff"===new nk([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();nk&&Qx({target:"Uint8Array",proto:!0,forced:ik},{toHex:function(){tk(this),ek(this.buffer);for(var t="",e=0,r=this.length;e<r;e++){var n=rk(this[e],16);t+=1===n.length?"0"+n:n}return t}});var sk=mt,ak=bt,ok=as,lk=wi,ck=n,uk=Pt,hk=Re,dk=dt.f,fk=x,pk=_l,mk=function(t,e,r){var n,i;return ok&&sk(n=e.constructor)&&n!==r&&ak(i=n.prototype)&&i!==r.prototype&&ok(t,i),t},gk=Ks,bk={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},vk=zs,yk=ft,wk="DOMException",xk=uk("Error"),kk=uk(wk),$k=function(){pk(this,_k);var t=arguments.length,e=gk(t<1?void 0:arguments[0]),r=gk(t<2?void 0:arguments[1],"Error"),n=new kk(e,r),i=new xk(e);return i.name=wk,dk(n,"stack",hk(1,vk(i.stack,1))),mk(n,this,$k),n},_k=$k.prototype=kk.prototype,Sk="stack"in new xk(wk),Ek="stack"in new kk(1,2),Ak=kk&&yk&&Object.getOwnPropertyDescriptor(ck,wk),Mk=!(!Ak||Ak.writable&&Ak.configurable),Tk=Sk&&!Mk&&!Ek;lk({global:!0,constructor:!0,forced:Tk},{DOMException:Tk?$k:kk});var Ck=uk(wk),Nk=Ck.prototype;if(Nk.constructor!==Ck)for(var Rk in dk(Nk,"constructor",hk(1,Ck)),bk)if(fk(bk,Rk)){var Ok=bk[Rk],Pk=Ok.s;fk(Ck,Pk)||dk(Ck,Pk,hk(6,Ok.c))}var Ik,Fk,Dk,zk,qk=TypeError,jk=function(t,e){if(t<e)throw new qk("Not enough arguments");return t},Uk=/(?:ipad|iphone|ipod).*applewebkit/i.test(B),Lk=n,Bk=sf,Hk=Ol,Vk=mt,Xk=x,Wk=s,Yk=vs,Kk=Pp,Zk=xt,Gk=jk,Qk=Uk,Jk=zo,t$=Lk.setImmediate,e$=Lk.clearImmediate,r$=Lk.process,n$=Lk.Dispatch,i$=Lk.Function,s$=Lk.MessageChannel,a$=Lk.String,o$=0,l$={},c$="onreadystatechange";Wk(function(){Ik=Lk.location});var u$=function(t){if(Xk(l$,t)){var e=l$[t];delete l$[t],e()}},h$=function(t){return function(){u$(t)}},d$=function(t){u$(t.data)},f$=function(t){Lk.postMessage(a$(t),Ik.protocol+"//"+Ik.host)};t$&&e$||(t$=function(t){Gk(arguments.length,1);var e=Vk(t)?t:i$(t),r=Kk(arguments,1);return l$[++o$]=function(){Bk(e,void 0,r)},Fk(o$),o$},e$=function(t){delete l$[t]},Jk?Fk=function(t){r$.nextTick(h$(t))}:n$&&n$.now?Fk=function(t){n$.now(h$(t))}:s$&&!Qk?(zk=(Dk=new s$).port2,Dk.port1.onmessage=d$,Fk=Hk(zk.postMessage,zk)):Lk.addEventListener&&Vk(Lk.postMessage)&&!Lk.importScripts&&Ik&&"file:"!==Ik.protocol&&!Wk(f$)?(Fk=f$,Lk.addEventListener("message",d$,!1)):Fk=c$ in Zk("script")?function(t){Yk.appendChild(Zk("script"))[c$]=function(){Yk.removeChild(this),u$(t)}}:function(t){setTimeout(h$(t),0)});var p$={set:t$,clear:e$},m$=p$.clear;wi({global:!0,bind:!0,enumerable:!0,forced:n.clearImmediate!==m$},{clearImmediate:m$});var g$=n,b$=sf,v$=mt,y$=Do,w$=B,x$=Pp,k$=jk,$$=g$.Function,_$=/MSIE .\./.test(w$)||"BUN"===y$&&function(){var t=g$.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),S$=wi,E$=n,A$=p$.set,M$=function(t,e){var r=e?2:1;return _$?function(n,i){var s=k$(arguments.length,1)>r,a=v$(n)?n:$$(n),o=s?x$(arguments,r):[],l=s?function(){b$(a,this,o)}:a;return e?t(l,i):t(l)}:t},T$=E$.setImmediate?M$(A$,!1):A$;S$({global:!0,bind:!0,enumerable:!0,forced:E$.setImmediate!==T$},{setImmediate:T$});var C$,N$=s,R$=n.RegExp,O$=!N$(function(){var t=!0;try{R$(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(s.hasIndices="d"),s)i(a,s[a]);return Object.getOwnPropertyDescriptor(R$.prototype,"flags").get.call(e)!==n||r!==n}),P$=Mt,I$=Nt,F$=x,D$=It,z$={correct:O$},q$=function(){var t=P$(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},j$=RegExp.prototype,U$=wi,L$=n,B$=Pt,H$=h,V$=s,X$=j,W$=mt,Y$=lm,K$=d,Z$=bt,G$=jt,Q$=Ah,J$=Mt,t_=Mi,e_=x,r_=kc,n_=fr,i_=Rn,s_=jk,a_=z$.correct?function(t){return t.flags}:function(t){return z$.correct||!D$(j$,t)||F$(t,"flags")?t.flags:I$(q$,t)},o_=Uf,l_=Bb,c_=ev,u_=Jo,h_=js,d_=Vo,f_=L$.Object,p_=L$.Array,m_=L$.Date,g_=L$.Error,b_=L$.TypeError,v_=L$.PerformanceMark,y_=B$("DOMException"),w_=o_.Map,x_=o_.has,k_=o_.get,$_=o_.set,__=l_.Set,S_=l_.add,E_=l_.has,A_=B$("Object","keys"),M_=H$([].push),T_=H$((!0).valueOf),C_=H$(1.1.valueOf),N_=H$("".valueOf),R_=H$(m_.prototype.getTime),O_=X$("structuredClone"),P_="DataCloneError",I_="Transferring",F_=function(t){return!V$(function(){var e=new L$.Set([7]),r=t(e),n=t(f_(7));return r===e||!r.has(7)||!Z$(n)||7!==+n})&&t},D_=function(t,e){return!V$(function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)})},z_=L$.structuredClone,q_=!D_(z_,g_)||!D_(z_,y_)||(C$=z_,!!V$(function(){var t=C$(new L$.AggregateError([1],O_,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==O_||3!==t.cause})),j_=!z_&&F_(function(t){return new v_(O_,{detail:t}).detail}),U_=F_(z_)||j_,L_=function(t){throw new y_("Uncloneable type: "+t,P_)},B_=function(t,e){throw new y_((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",P_)},H_=function(t,e){return U_||B_(e),U_(t)},V_=function(t,e,r){if(x_(e,t))return k_(e,t);var n,i,s,a,o,l;if("SharedArrayBuffer"===(r||t_(t)))n=U_?U_(t):t;else{var c=L$.DataView;c||W$(t.slice)||B_("ArrayBuffer");try{if(W$(t.slice)&&!t.resizable)n=t.slice(0);else{i=t.byteLength,s="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(i,s),a=new c(t),o=new c(n);for(l=0;l<i;l++)o.setUint8(l,a.getUint8(l))}}catch(t){throw new y_("ArrayBuffer is detached",P_)}}return $_(e,t,n),n},X_=function(t,e){if(G$(t)&&L_("Symbol"),!Z$(t))return t;if(e){if(x_(e,t))return k_(e,t)}else e=new w_;var r,n,i,s,a,o,l,c,u=t_(t);switch(u){case"Array":i=p_(i_(t));break;case"Object":i={};break;case"Map":i=new w_;break;case"Set":i=new __;break;case"RegExp":i=new RegExp(t.source,a_(t));break;case"Error":switch(n=t.name){case"AggregateError":i=new(B$(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(B$(n));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(B$("WebAssembly",n));break;default:i=new g_}break;case"DOMException":i=new y_(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=V_(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,i=function(t,e,r,n,i){var s=L$[e];return Z$(s)||B_(e),new s(V_(t.buffer,i),r,n)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{i=new DOMQuad(X_(t.p1,e),X_(t.p2,e),X_(t.p3,e),X_(t.p4,e))}catch(e){i=H_(t,u)}break;case"File":if(U_)try{i=U_(t),t_(i)!==u&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||B_(u);break;case"FileList":if(s=function(){var t;try{t=new L$.DataTransfer}catch(e){try{t=new L$.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(a=0,o=i_(t);a<o;a++)s.items.add(X_(t[a],e));i=s.files}else i=H_(t,u);break;case"ImageData":try{i=new ImageData(X_(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){i=H_(t,u)}break;default:if(U_)i=U_(t);else switch(u){case"BigInt":i=f_(t.valueOf());break;case"Boolean":i=f_(T_(t));break;case"Number":i=f_(C_(t));break;case"String":i=f_(N_(t));break;case"Date":i=new m_(R_(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){B_(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=L$[u];try{i=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){B_(u)}break;case"DOMRect":case"DOMRectReadOnly":r=L$[u];try{i=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){B_(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=L$[u];try{i=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){B_(u)}break;case"AudioData":case"VideoFrame":W$(t.clone)||B_(u);try{i=t.clone()}catch(t){L_(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":B_(u);default:L_(u)}}switch($_(e,t,i),u){case"Array":case"Object":for(l=A_(t),a=0,o=i_(l);a<o;a++)c=l[a],r_(i,c,X_(t[c],e));break;case"Map":t.forEach(function(t,r){$_(i,X_(r,e),X_(t,e))});break;case"Set":t.forEach(function(t){S_(i,X_(t,e))});break;case"Error":n_(i,"message",X_(t.message,e)),e_(t,"cause")&&n_(i,"cause",X_(t.cause,e)),"AggregateError"===n?i.errors=X_(t.errors,e):"SuppressedError"===n&&(i.error=X_(t.error,e),i.suppressed=X_(t.suppressed,e));case"DOMException":h_&&n_(i,"stack",X_(t.stack,e))}return i};U$({global:!0,enumerable:!0,sham:!d_,forced:q_},{structuredClone:function(t){var e,r,n=s_(arguments.length,1)>1&&!K$(arguments[1])?J$(arguments[1]):void 0,i=n?n.transfer:void 0;void 0!==i&&(r=function(t,e){if(!Z$(t))throw new b_("Transfer option cannot be converted to a sequence");var r=[];Q$(t,function(t){M_(r,J$(t))});for(var n,i,s,a,o,l=0,c=i_(r),u=new __;l<c;){if(n=r[l++],"ArrayBuffer"===(i=t_(n))?E_(u,n):x_(e,n))throw new y_("Duplicate transferable",P_);if("ArrayBuffer"!==i){if(d_)a=z_(n,{transfer:[n]});else switch(i){case"ImageBitmap":s=L$.OffscreenCanvas,Y$(s)||B_(i,I_);try{(o=new s(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),a=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":W$(n.clone)&&W$(n.close)||B_(i,I_);try{a=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":B_(i,I_)}if(void 0===a)throw new y_("This object cannot be transferred: "+i,P_);$_(e,n,a)}else S_(u,n)}return u}(i,e=new w_));var s=X_(t,e);return r&&function(t){c_(t,function(t){d_?U_(t,{transfer:[t]}):W$(t.transfer)?t.transfer():u_?u_(t):B_("ArrayBuffer",I_)})}(r),s}});var W_=s,Y_=ft,K_=ut("iterator"),Z_=!W_(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),n+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!Y_||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[K_]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==n||"x"!==new URL("https://x",void 0).host}),G_=wi,Q_=s,J_=jk,tS=Ws,eS=Z_,rS=Pt("URL"),nS=eS&&Q_(function(){rS.canParse()}),iS=Q_(function(){return 1!==rS.canParse.length});G_({target:"URL",stat:!0,forced:!nS||iS},{canParse:function(t){var e=J_(arguments.length,1),r=tS(t),n=e<2||void 0===arguments[1]?void 0:tS(arguments[1]);try{return!!new rS(r,n)}catch(t){return!1}}});var sS=wi,aS=jk,oS=Ws,lS=Z_,cS=Pt("URL");sS({target:"URL",stat:!0,forced:!lS},{parse:function(t){var e=aS(arguments.length,1),r=oS(t),n=e<2||void 0===arguments[1]?void 0:oS(arguments[1]);try{return new cS(r,n)}catch(t){return null}}});var uS=vn,hS=h,dS=Ws,fS=jk,pS=URLSearchParams,mS=pS.prototype,gS=hS(mS.append),bS=hS(mS.delete),vS=hS(mS.forEach),yS=hS([].push),wS=new pS("a=1&a=2&b=3");wS.delete("a",1),wS.delete("b",void 0),wS+""!="a=2"&&uS(mS,"delete",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return bS(this,t);var n=[];vS(this,function(t,e){yS(n,{key:e,value:t})}),fS(e,1);for(var i,s=dS(t),a=dS(r),o=0,l=0,c=!1,u=n.length;o<u;)i=n[o++],c||i.key===s?(c=!0,bS(this,i.key)):l++;for(;l<u;)(i=n[l++]).key===s&&i.value===a||gS(this,i.key,i.value)},{enumerable:!0,unsafe:!0});var xS=vn,kS=h,$S=Ws,_S=jk,SS=URLSearchParams,ES=SS.prototype,AS=kS(ES.getAll),MS=kS(ES.has),TS=new SS("a=1");!TS.has("a",2)&&TS.has("a",void 0)||xS(ES,"has",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return MS(this,t);var n=AS(this,t);_S(e,1);for(var i=$S(r),s=0;s<n.length;)if(n[s++]===i)return!0;return!1},{enumerable:!0,unsafe:!0});var CS=ft,NS=h,RS=co,OS=URLSearchParams.prototype,PS=NS(OS.forEach);CS&&!("size"in OS)&&RS(OS,"size",{get:function(){var t=0;return PS(this,function(){t++}),t},configurable:!0,enumerable:!0});const IS=new Map;var FS={set(t,e,r){IS.has(t)||IS.set(t,new Map);const n=IS.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>IS.has(t)&&IS.get(t).get(e)||null,remove(t,e){if(!IS.has(t))return;const r=IS.get(t);r.delete(e),0===r.size&&IS.delete(t)}};const DS="transitionend",zS=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),qS=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),jS=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),US=t=>jS(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(zS(t)):null,LS=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,BS=[],HS=t=>{var e;e=()=>{const e=LS();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}},"loading"===document.readyState?(BS.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of BS)t()}),BS.push(e)):e()},VS=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,XS=(t,e,r=!0)=>{if(!r)return void VS(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),i=Number.parseFloat(r);return n||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let i=!1;const s=({target:r})=>{r===e&&(i=!0,e.removeEventListener(DS,s),VS(t))};e.addEventListener(DS,s),setTimeout(()=>{i||e.dispatchEvent(new Event(DS))},n)},WS=/[^.]*(?=\..*)\.|.*/,YS=/\..*/,KS=/::\d+$/,ZS={};let GS=1;const QS={mouseenter:"mouseover",mouseleave:"mouseout"},JS=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function tE(t,e){return e&&`${e}::${GS++}`||t.uidEvent||GS++}function eE(t){const e=tE(t);return t.uidEvent=e,ZS[e]=ZS[e]||{},ZS[e]}function rE(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function nE(t,e,r){const n="string"==typeof e,i=n?r:e||r;let s=oE(t);return JS.has(s)||(s=t),[n,i,s]}function iE(t,e,r,n,i){if("string"!=typeof e||!t)return;let[s,a,o]=nE(e,r,n);if(e in QS){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};a=t(a)}const l=eE(t),c=l[o]||(l[o]={}),u=rE(c,a,s?r:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=tE(a,e.replace(WS,"")),d=s?function(t,e,r){return function n(i){const s=t.querySelectorAll(e);for(let{target:a}=i;a&&a!==this;a=a.parentNode)for(const o of s)if(o===a)return cE(i,{delegateTarget:a}),n.oneOff&&lE.off(t,i.type,e,r),r.apply(a,[i])}}(t,r,a):function(t,e){return function r(n){return cE(n,{delegateTarget:t}),r.oneOff&&lE.off(t,n.type,e),e.apply(t,[n])}}(t,a);d.delegationSelector=s?r:null,d.callable=a,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(o,d,s)}function sE(t,e,r,n,i){const s=rE(e[r],n,i);s&&(t.removeEventListener(r,s,Boolean(i)),delete e[r][s.uidEvent])}function aE(t,e,r,n){const i=e[r]||{};for(const[s,a]of Object.entries(i))s.includes(n)&&sE(t,e,r,a.callable,a.delegationSelector)}function oE(t){return t=t.replace(YS,""),QS[t]||t}const lE={on(t,e,r,n){iE(t,e,r,n,!1)},one(t,e,r,n){iE(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[i,s,a]=nE(e,r,n),o=a!==e,l=eE(t),c=l[a]||{},u=e.startsWith(".");if(void 0===s){if(u)for(const r of Object.keys(l))aE(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const i=r.replace(KS,"");o&&!e.includes(i)||sE(t,l,a,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;sE(t,l,a,s,i?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=LS();let i=null,s=!0,a=!0,o=!1;e!==oE(e)&&n&&(i=n.Event(e,r),n(t).trigger(i),s=!i.isPropagationStopped(),a=!i.isImmediatePropagationStopped(),o=i.isDefaultPrevented());const l=cE(new Event(e,{bubbles:s,cancelable:!0}),r);return o&&l.preventDefault(),a&&t.dispatchEvent(l),l.defaultPrevented&&i&&i.preventDefault(),l}};function cE(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function uE(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function hE(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const dE={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${hE(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${hE(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=uE(t.dataset[n])}return e},getDataAttribute:(t,e)=>uE(t.getAttribute(`data-bs-${hE(e)}`))};class fE{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=jS(e)?dE.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...jS(e)?dE.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],i=jS(e)?"element":qS(e);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)}}}class pE extends fE{constructor(t,e){super(),(t=US(t))&&(this._element=t,this._config=this._getConfig(e),FS.set(this._element,this.constructor.DATA_KEY,this))}dispose(){FS.remove(this._element,this.constructor.DATA_KEY),lE.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){XS(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return FS.get(US(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const mE='[data-bs-toggle="button"]';class gE extends pE{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=gE.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}lE.on(document,"click.bs.button.data-api",mE,t=>{t.preventDefault();const e=t.target.closest(mE);gE.getOrCreateInstance(e).toggle()}),HS(gE);const bE=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>zS(t)).join(","):null},vE={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>{if(!jS(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e})(t))},getSelectorFromElement(t){const e=bE(t);return e&&vE.findOne(e)?e:null},getElementFromSelector(t){const e=bE(t);return e?vE.findOne(e):null},getMultipleElementsFromSelector(t){const e=bE(t);return e?vE.find(e):[]}},yE=".bs.collapse",wE=`show${yE}`,xE=`shown${yE}`,kE=`hide${yE}`,$E=`hidden${yE}`,_E=`click${yE}.data-api`,SE="show",EE="collapse",AE="collapsing",ME=`:scope .${EE} .${EE}`,TE='[data-bs-toggle="collapse"]',CE={parent:null,toggle:!0},NE={parent:"(null|element)",toggle:"boolean"};class RE extends pE{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=vE.find(TE);for(const t of r){const e=vE.getSelectorFromElement(t),r=vE.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return CE}static get DefaultType(){return NE}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>RE.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(lE.trigger(this._element,wE).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(EE),this._element.classList.add(AE),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(AE),this._element.classList.add(EE,SE),this._element.style[e]="",lE.trigger(this._element,xE)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(lE.trigger(this._element,kE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,this._element.offsetHeight,this._element.classList.add(AE),this._element.classList.remove(EE,SE);for(const t of this._triggerArray){const e=vE.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(AE),this._element.classList.add(EE),lE.trigger(this._element,$E)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(SE)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=US(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(TE);for(const e of t){const t=vE.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=vE.find(ME,this._config.parent);return vE.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=RE.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}lE.on(document,_E,TE,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of vE.getMultipleElementsFromSelector(this))RE.getOrCreateInstance(t,{toggle:!1}).toggle()}),HS(RE);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const OE=globalThis,PE=OE.ShadowRoot&&(void 0===OE.ShadyCSS||OE.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,IE=Symbol(),FE=new WeakMap;let DE=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==IE)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(PE&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=FE.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&FE.set(e,t))}return t}toString(){return this.cssText}};const zE=t=>new DE("string"==typeof t?t:t+"",void 0,IE),qE=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new DE(r,t,IE)},jE=PE?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return zE(e)})(t):t,{is:UE,defineProperty:LE,getOwnPropertyDescriptor:BE,getOwnPropertyNames:HE,getOwnPropertySymbols:VE,getPrototypeOf:XE}=Object,WE=globalThis,YE=WE.trustedTypes,KE=YE?YE.emptyScript:"",ZE=WE.reactiveElementPolyfillSupport,GE=(t,e)=>t,QE={toAttribute(t,e){switch(e){case Boolean:t=t?KE:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},JE=(t,e)=>!UE(t,e),tA={attribute:!0,type:String,converter:QE,reflect:!1,useDefault:!1,hasChanged:JE};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),WE.litPropertyMetadata??=new WeakMap;let eA=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tA){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&LE(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=BE(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);i?.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tA}static _$Ei(){if(this.hasOwnProperty(GE("elementProperties")))return;const t=XE(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(GE("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(GE("properties"))){const t=this.properties,e=[...HE(t),...VE(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(jE(t))}else void 0!==t&&e.push(jE(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(PE)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),n=OE.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:QE).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:QE;this._$Em=n;const s=i.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const n=this.constructor,i=this[t];if(r??=n.getPropertyOptions(t),!((r.hasChanged??JE)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==i||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};eA.elementStyles=[],eA.shadowRootOptions={mode:"open"},eA[GE("elementProperties")]=new Map,eA[GE("finalized")]=new Map,ZE?.({ReactiveElement:eA}),(WE.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rA=globalThis,nA=rA.trustedTypes,iA=nA?nA.createPolicy("lit-html",{createHTML:t=>t}):void 0,sA="$lit$",aA=`lit$${Math.random().toFixed(9).slice(2)}$`,oA="?"+aA,lA=`<${oA}>`,cA=document,uA=()=>cA.createComment(""),hA=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dA=Array.isArray,fA="[ \t\n\f\r]",pA=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mA=/-->/g,gA=/>/g,bA=RegExp(`>|${fA}(?:([^\\s"'>=/]+)(${fA}*=${fA}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),vA=/'/g,yA=/"/g,wA=/^(?:script|style|textarea|title)$/i,xA=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),kA=xA(1),$A=xA(2),_A=Symbol.for("lit-noChange"),SA=Symbol.for("lit-nothing"),EA=new WeakMap,AA=cA.createTreeWalker(cA,129);function MA(t,e){if(!dA(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==iA?iA.createHTML(e):e}const TA=(t,e)=>{const r=t.length-1,n=[];let i,s=2===e?"<svg>":3===e?"<math>":"",a=pA;for(let e=0;e<r;e++){const r=t[e];let o,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,l=a.exec(r),null!==l);)u=a.lastIndex,a===pA?"!--"===l[1]?a=mA:void 0!==l[1]?a=gA:void 0!==l[2]?(wA.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=bA):void 0!==l[3]&&(a=bA):a===bA?">"===l[0]?(a=i??pA,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?bA:'"'===l[3]?yA:vA):a===yA||a===vA?a=bA:a===mA||a===gA?a=pA:(a=bA,i=void 0);const h=a===bA&&t[e+1].startsWith("/>")?" ":"";s+=a===pA?r+lA:c>=0?(n.push(o),r.slice(0,c)+sA+r.slice(c)+aA+h):r+aA+(-2===c?e:h)}return[MA(t,s+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class CA{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0;const a=t.length-1,o=this.parts,[l,c]=TA(t,e);if(this.el=CA.createElement(l,r),AA.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=AA.nextNode())&&o.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(sA)){const e=c[s++],r=n.getAttribute(t).split(aA),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?IA:"?"===a[1]?FA:"@"===a[1]?DA:PA}),n.removeAttribute(t)}else t.startsWith(aA)&&(o.push({type:6,index:i}),n.removeAttribute(t));if(wA.test(n.tagName)){const t=n.textContent.split(aA),e=t.length-1;if(e>0){n.textContent=nA?nA.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],uA()),AA.nextNode(),o.push({type:2,index:++i});n.append(t[e],uA())}}}else if(8===n.nodeType)if(n.data===oA)o.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(aA,t+1));)o.push({type:7,index:i}),t+=aA.length-1}i++}}static createElement(t,e){const r=cA.createElement("template");return r.innerHTML=t,r}}function NA(t,e,r=t,n){if(e===_A)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const s=hA(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=NA(t,i._$AS(t,e.values),i,n)),e}class RA{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??cA).importNode(e,!0);AA.currentNode=n;let i=AA.nextNode(),s=0,a=0,o=r[0];for(;void 0!==o;){if(s===o.index){let e;2===o.type?e=new OA(i,i.nextSibling,this,t):1===o.type?e=new o.ctor(i,o.name,o.strings,this,t):6===o.type&&(e=new zA(i,this,t)),this._$AV.push(e),o=r[++a]}s!==o?.index&&(i=AA.nextNode(),s++)}return AA.currentNode=cA,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class OA{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=SA,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=NA(this,t,e),hA(t)?t===SA||null==t||""===t?(this._$AH!==SA&&this._$AR(),this._$AH=SA):t!==this._$AH&&t!==_A&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>dA(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==SA&&hA(this._$AH)?this._$AA.nextSibling.data=t:this.T(cA.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=CA.createElement(MA(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new RA(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=EA.get(t.strings);return void 0===e&&EA.set(t.strings,e=new CA(t)),e}k(t){dA(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new OA(this.O(uA()),this.O(uA()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class PA{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=SA,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=SA}_$AI(t,e=this,r,n){const i=this.strings;let s=!1;if(void 0===i)t=NA(this,t,e,0),s=!hA(t)||t!==this._$AH&&t!==_A,s&&(this._$AH=t);else{const n=t;let a,o;for(t=i[0],a=0;a<i.length-1;a++)o=NA(this,n[r+a],e,a),o===_A&&(o=this._$AH[a]),s||=!hA(o)||o!==this._$AH[a],o===SA?t=SA:t!==SA&&(t+=(o??"")+i[a+1]),this._$AH[a]=o}s&&!n&&this.j(t)}j(t){t===SA?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class IA extends PA{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===SA?void 0:t}}class FA extends PA{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==SA)}}class DA extends PA{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=NA(this,t,e,0)??SA)===_A)return;const r=this._$AH,n=t===SA&&r!==SA||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==SA&&(r===SA||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class zA{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){NA(this,t)}}const qA=rA.litHtmlPolyfillSupport;qA?.(CA,OA),(rA.litHtmlVersions??=[]).push("3.3.1");const jA=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new OA(e.insertBefore(uA(),t),t,void 0,r??{})}return i._$AI(t),i},UA=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class LA extends eA{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jA(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _A}}LA._$litElement$=!0,LA.finalized=!0,UA.litElementHydrateSupport?.({LitElement:LA});const BA=UA.litElementPolyfillSupport;function HA(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function VA(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function XA(t){let e,r,n;function i(t,n,i=0,s=t.length){if(i<s){if(0!==e(n,n))return s;do{const e=i+s>>>1;r(t[e],n)<0?i=e+1:s=e}while(i<s)}return i}return 2!==t.length?(e=HA,r=(e,r)=>HA(t(e),r),n=(e,r)=>t(e)-r):(e=t===HA||t===VA?t:WA,r=t,n=t),{left:i,center:function(t,e,r=0,s=t.length){const a=i(t,e,r,s-1);return a>r&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,i=0,s=t.length){if(i<s){if(0!==e(n,n))return s;do{const e=i+s>>>1;r(t[e],n)<=0?i=e+1:s=e}while(i<s)}return i}}}function WA(){return 0}BA?.({LitElement:LA}),(UA.litElementVersions??=[]).push("4.2.1");const YA=XA(HA).right;function KA(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let i=-1;for(let s of t)null!=(s=e(s,++i,t))&&(void 0===r?s>=s&&(r=n=s):(r>s&&(r=s),n<s&&(n=s)))}return[r,n]}XA(function(t){return null===t?NaN:+t}).center;class ZA{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let n=0;n<this._n&&n<32;n++){const i=e[n],s=t+i,a=Math.abs(t)<Math.abs(i)?t-(s-i):i-(s-t);a&&(e[r++]=a),t=s}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e,r,n,i=this._n,s=0;if(i>0){for(s=t[--i];i>0&&(e=s,r=t[--i],s=e+r,n=r-(s-e),!n););i>0&&(n<0&&t[i-1]<0||n>0&&t[i-1]>0)&&(r=2*n,e=s+r,r==e-s&&(s=e))}return s}}function GA(t){return t}var QA=Array.prototype.slice;function JA(t){return()=>t}const tM=Math.sqrt(50),eM=Math.sqrt(10),rM=Math.sqrt(2);function nM(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),s=n/Math.pow(10,i),a=s>=tM?10:s>=eM?5:s>=rM?2:1;let o,l,c;return i<0?(c=Math.pow(10,-i)/a,o=Math.round(t*c),l=Math.round(e*c),o/c<t&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*a,o=Math.round(t/c),l=Math.round(e/c),o*c<t&&++o,l*c>e&&--l),l<o&&.5<=r&&r<2?nM(t,e,2*r):[o,l,c]}function iM(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,s,a]=n?nM(e,t,r):nM(t,e,r);if(!(s>=i))return[];const o=s-i+1,l=new Array(o);if(n)if(a<0)for(let t=0;t<o;++t)l[t]=(s-t)/-a;else for(let t=0;t<o;++t)l[t]=(s-t)*a;else if(a<0)for(let t=0;t<o;++t)l[t]=(i+t)/-a;else for(let t=0;t<o;++t)l[t]=(i+t)*a;return l}function sM(t,e,r){return nM(t=+t,e=+e,r=+r)[2]}function aM(t,e,r){let n;for(;;){const i=sM(t,e,r);if(i===n||0===i||!isFinite(i))return[t,e];i>0?(t=Math.floor(t/i)*i,e=Math.ceil(e/i)*i):i<0&&(t=Math.ceil(t*i)/i,e=Math.floor(e*i)/i),n=i}}function oM(t){return Math.max(1,Math.ceil(Math.log(function(t){let e=0;for(let r of t)null!=r&&(r=+r)>=r&&++e;return e}(t))/Math.LN2)+1)}function lM(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),s=new Array(i);++n<i;)s[n]=t+n*r;return s}function cM(t){return t}var uM=1e-6;function hM(t){return"translate("+t+",0)"}function dM(t){return"translate(0,"+t+")"}function fM(t){return e=>+t(e)}function pM(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function mM(){return!this.__axis}function gM(t,e){var r=[],n=null,i=null,s=6,a=6,o=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",h=1===t||3===t?hM:dM;function d(d){var f=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,p=null==i?e.tickFormat?e.tickFormat.apply(e,r):cM:i,m=Math.max(s,0)+o,g=e.range(),b=+g[0]+l,v=+g[g.length-1]+l,y=(e.bandwidth?pM:fM)(e.copy(),l),w=d.selection?d.selection():d,x=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(f,e).order(),$=k.exit(),_=k.enter().append("g").attr("class","tick"),S=k.select("line"),E=k.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(_),S=S.merge(_.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),E=E.merge(_.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),d!==w&&(x=x.transition(d),k=k.transition(d),S=S.transition(d),E=E.transition(d),$=$.transition(d).attr("opacity",uM).attr("transform",function(t){return isFinite(t=y(t))?h(t+l):this.getAttribute("transform")}),_.attr("opacity",uM).attr("transform",function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:y(t))+l)})),$.remove(),x.attr("d",4===t||2===t?a?"M"+c*a+","+b+"H"+l+"V"+v+"H"+c*a:"M"+l+","+b+"V"+v:a?"M"+b+","+c*a+"V"+l+"H"+v+"V"+c*a:"M"+b+","+l+"H"+v),k.attr("opacity",1).attr("transform",function(t){return h(y(t)+l)}),S.attr(u+"2",c*s),E.attr(u,c*m).text(p),w.filter(mM).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each(function(){this.__axis=y})}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return r=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),d):r.slice()},d.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),d):n&&n.slice()},d.tickFormat=function(t){return arguments.length?(i=t,d):i},d.tickSize=function(t){return arguments.length?(s=a=+t,d):s},d.tickSizeInner=function(t){return arguments.length?(s=+t,d):s},d.tickSizeOuter=function(t){return arguments.length?(a=+t,d):a},d.tickPadding=function(t){return arguments.length?(o=+t,d):o},d.offset=function(t){return arguments.length?(l=+t,d):l},d}function bM(t){return gM(3,t)}function vM(t){return gM(4,t)}var yM={value:()=>{}};function wM(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new xM(n)}function xM(t){this._=t}function kM(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function $M(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=yM,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}xM.prototype=wM.prototype={constructor:xM,on:function(t,e){var r,n,i=this._,s=(n=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),a=-1,o=s.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(t=s[a]).type)i[r]=$M(i[r],t.name,e);else if(null==e)for(r in i)i[r]=$M(i[r],t.name,null);return this}for(;++a<o;)if((r=(t=s[a]).type)&&(r=kM(i[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new xM(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),s=0;s<r;++s)i[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=0,r=(n=this._[t]).length;s<r;++s)n[s].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,s=n.length;i<s;++i)n[i].value.apply(e,r)}};var _M="http://www.w3.org/1999/xhtml",SM={svg:"http://www.w3.org/2000/svg",xhtml:_M,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function EM(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),SM.hasOwnProperty(e)?{space:SM[e],local:t}:t}function AM(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===_M&&e.documentElement.namespaceURI===_M?e.createElement(t):e.createElementNS(r,t)}}function MM(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function TM(t){var e=EM(t);return(e.local?MM:AM)(e)}function CM(){}function NM(t){return null==t?CM:function(){return this.querySelector(t)}}function RM(){return[]}function OM(t){return null==t?RM:function(){return this.querySelectorAll(t)}}function PM(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function IM(t){return function(){return this.matches(t)}}function FM(t){return function(e){return e.matches(t)}}var DM=Array.prototype.find;function zM(){return this.firstElementChild}var qM=Array.prototype.filter;function jM(){return Array.from(this.children)}function UM(t){return new Array(t.length)}function LM(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function BM(t,e,r,n,i,s){for(var a,o=0,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],n[o]=a):r[o]=new LM(t,s[o]);for(;o<l;++o)(a=e[o])&&(i[o]=a)}function HM(t,e,r,n,i,s,a){var o,l,c,u=new Map,h=e.length,d=s.length,f=new Array(h);for(o=0;o<h;++o)(l=e[o])&&(f[o]=c=a.call(l,l.__data__,o,e)+"",u.has(c)?i[o]=l:u.set(c,l));for(o=0;o<d;++o)c=a.call(t,s[o],o,s)+"",(l=u.get(c))?(n[o]=l,l.__data__=s[o],u.delete(c)):r[o]=new LM(t,s[o]);for(o=0;o<h;++o)(l=e[o])&&u.get(f[o])===l&&(i[o]=l)}function VM(t){return t.__data__}function XM(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function WM(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function YM(t){return function(){this.removeAttribute(t)}}function KM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ZM(t,e){return function(){this.setAttribute(t,e)}}function GM(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function QM(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function JM(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function tT(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function eT(t){return function(){this.style.removeProperty(t)}}function rT(t,e,r){return function(){this.style.setProperty(t,e,r)}}function nT(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function iT(t,e){return t.style.getPropertyValue(e)||tT(t).getComputedStyle(t,null).getPropertyValue(e)}function sT(t){return function(){delete this[t]}}function aT(t,e){return function(){this[t]=e}}function oT(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function lT(t){return t.trim().split(/^|\s+/)}function cT(t){return t.classList||new uT(t)}function uT(t){this._node=t,this._names=lT(t.getAttribute("class")||"")}function hT(t,e){for(var r=cT(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function dT(t,e){for(var r=cT(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function fT(t){return function(){hT(this,t)}}function pT(t){return function(){dT(this,t)}}function mT(t,e){return function(){(e.apply(this,arguments)?hT:dT)(this,t)}}function gT(){this.textContent=""}function bT(t){return function(){this.textContent=t}}function vT(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function yT(){this.innerHTML=""}function wT(t){return function(){this.innerHTML=t}}function xT(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function kT(){this.nextSibling&&this.parentNode.appendChild(this)}function $T(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function _T(){return null}function ST(){var t=this.parentNode;t&&t.removeChild(this)}function ET(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function AT(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function MT(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,s=e.length;n<s;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function TT(t,e,r){return function(){var n,i=this.__on,s=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var a=0,o=i.length;a<o;++a)if((n=i[a]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=s,n.options=r),void(n.value=e);this.addEventListener(t.type,s,r),n={type:t.type,name:t.name,value:e,listener:s,options:r},i?i.push(n):this.__on=[n]}}function CT(t,e,r){var n=tT(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function NT(t,e){return function(){return CT(this,t,e)}}function RT(t,e){return function(){return CT(this,t,e.apply(this,arguments))}}LM.prototype={constructor:LM,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},uT.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var OT=[null];function PT(t,e){this._groups=t,this._parents=e}function IT(){return new PT([[document.documentElement]],OT)}function FT(t){return"string"==typeof t?new PT([[document.querySelector(t)]],[document.documentElement]):new PT([[t]],OT)}function DT(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}PT.prototype=IT.prototype={constructor:PT,select:function(t){"function"!=typeof t&&(t=NM(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var s,a,o=e[i],l=o.length,c=n[i]=new Array(l),u=0;u<l;++u)(s=o[u])&&(a=t.call(s,s.__data__,u,o))&&("__data__"in s&&(a.__data__=s.__data__),c[u]=a);return new PT(n,this._parents)},selectAll:function(t){t="function"==typeof t?PM(t):OM(t);for(var e=this._groups,r=e.length,n=[],i=[],s=0;s<r;++s)for(var a,o=e[s],l=o.length,c=0;c<l;++c)(a=o[c])&&(n.push(t.call(a,a.__data__,c,o)),i.push(a));return new PT(n,i)},selectChild:function(t){return this.select(null==t?zM:function(t){return function(){return DM.call(this.children,t)}}("function"==typeof t?t:FM(t)))},selectChildren:function(t){return this.selectAll(null==t?jM:function(t){return function(){return qM.call(this.children,t)}}("function"==typeof t?t:FM(t)))},filter:function(t){"function"!=typeof t&&(t=IM(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var s,a=e[i],o=a.length,l=n[i]=[],c=0;c<o;++c)(s=a[c])&&t.call(s,s.__data__,c,a)&&l.push(s);return new PT(n,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,VM);var r=e?HM:BM,n=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var s=i.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],h=i[c],d=h.length,f=XM(t.call(u,u&&u.__data__,c,n)),p=f.length,m=o[c]=new Array(p),g=a[c]=new Array(p);r(u,h,m,g,l[c]=new Array(d),f,e);for(var b,v,y=0,w=0;y<p;++y)if(b=m[y]){for(y>=w&&(w=y+1);!(v=g[w])&&++w<p;);b._next=v||null}}return(a=new PT(a,n))._enter=o,a._exit=l,a},enter:function(){return new PT(this._enter||this._groups.map(UM),this._parents)},exit:function(){return new PT(this._exit||this._groups.map(UM),this._parents)},join:function(t,e,r){var n=this.enter(),i=this,s=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?s.remove():r(s),n&&i?n.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,s=n.length,a=Math.min(i,s),o=new Array(i),l=0;l<a;++l)for(var c,u=r[l],h=n[l],d=u.length,f=o[l]=new Array(d),p=0;p<d;++p)(c=u[p]||h[p])&&(f[p]=c);for(;l<i;++l)o[l]=r[l];return new PT(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],s=i.length-1,a=i[s];--s>=0;)(n=i[s])&&(a&&4^n.compareDocumentPosition(a)&&a.parentNode.insertBefore(n,a),a=n);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=WM);for(var r=this._groups,n=r.length,i=new Array(n),s=0;s<n;++s){for(var a,o=r[s],l=o.length,c=i[s]=new Array(l),u=0;u<l;++u)(a=o[u])&&(c[u]=a);c.sort(e)}return new PT(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,s=n.length;i<s;++i){var a=n[i];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,s=e[r],a=0,o=s.length;a<o;++a)(i=s[a])&&t.call(i,i.__data__,a,s);return this},attr:function(t,e){var r=EM(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?KM:YM:"function"==typeof e?r.local?JM:QM:r.local?GM:ZM)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?eT:"function"==typeof e?nT:rT)(t,e,null==r?"":r)):iT(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?sT:"function"==typeof e?oT:aT)(t,e)):this.node()[t]},classed:function(t,e){var r=lT(t+"");if(arguments.length<2){for(var n=cT(this.node()),i=-1,s=r.length;++i<s;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?mT:e?fT:pT)(r,e))},text:function(t){return arguments.length?this.each(null==t?gT:("function"==typeof t?vT:bT)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?yT:("function"==typeof t?xT:wT)(t)):this.node().innerHTML},raise:function(){return this.each(kT)},lower:function(){return this.each($T)},append:function(t){var e="function"==typeof t?t:TM(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:TM(t),n=null==e?_T:"function"==typeof e?e:NM(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(ST)},clone:function(t){return this.select(t?AT:ET)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var n,i,s=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),a=s.length;if(!(arguments.length<2)){for(o=e?TT:MT,n=0;n<a;++n)this.each(o(s[n],e,r));return this}var o=this.node().__on;if(o)for(var l,c=0,u=o.length;c<u;++c)for(n=0,l=o[c];n<a;++n)if((i=s[n]).type===l.type&&i.name===l.name)return l.value},dispatch:function(t,e){return this.each(("function"==typeof e?RT:NT)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],s=0,a=i.length;s<a;++s)(n=i[s])&&(yield n)}};const zT={passive:!1},qT={capture:!0,passive:!1};function jT(t){t.stopImmediatePropagation()}function UT(t){t.preventDefault(),t.stopImmediatePropagation()}var LT=t=>()=>t;function BT(t,{sourceEvent:e,subject:r,target:n,identifier:i,active:s,x:a,y:o,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function HT(t){return!t.ctrlKey&&!t.button}function VT(){return this.parentNode}function XT(t,e){return null==e?{x:t.x,y:t.y}:e}function WT(){return navigator.maxTouchPoints||"ontouchstart"in this}function YT(){var t,e,r,n,i=HT,s=VT,a=XT,o=WT,l={},c=wM("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",f).filter(o).on("touchstart.drag",g).on("touchmove.drag",b,zT).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(a,o){if(!n&&i.call(this,a,o)){var l=y(this,s.call(this,a,o),a,o,"mouse");l&&(FT(a.view).on("mousemove.drag",p,qT).on("mouseup.drag",m,qT),function(t){var e=t.document.documentElement,r=FT(t).on("dragstart.drag",UT,qT);"onselectstart"in e?r.on("selectstart.drag",UT,qT):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(a.view),jT(a),r=!1,t=a.clientX,e=a.clientY,l("start",a))}}function p(n){if(UT(n),!r){var i=n.clientX-t,s=n.clientY-e;r=i*i+s*s>h}l.mouse("drag",n)}function m(t){FT(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,n=FT(t).on("dragstart.drag",null);e&&(n.on("click.drag",UT,qT),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),UT(t),l.mouse("end",t)}function g(t,e){if(i.call(this,t,e)){var r,n,a=t.changedTouches,o=s.call(this,t,e),l=a.length;for(r=0;r<l;++r)(n=y(this,o,t,e,a[r].identifier,a[r]))&&(jT(t),n("start",t,a[r]))}}function b(t){var e,r,n=t.changedTouches,i=n.length;for(e=0;e<i;++e)(r=l[n[e].identifier])&&(UT(t),r("drag",t,n[e]))}function v(t){var e,r,i=t.changedTouches,s=i.length;for(n&&clearTimeout(n),n=setTimeout(function(){n=null},500),e=0;e<s;++e)(r=l[i[e].identifier])&&(jT(t),r("end",t,i[e]))}function y(t,e,r,n,i,s){var o,h,f,p=c.copy(),m=DT(s||r,e);if(null!=(f=a.call(t,new BT("beforestart",{sourceEvent:r,target:d,identifier:i,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),n)))return o=f.x-m[0]||0,h=f.y-m[1]||0,function r(s,a,c){var g,b=m;switch(s){case"start":l[i]=r,g=u++;break;case"end":delete l[i],--u;case"drag":m=DT(c||a,e),g=u}p.call(s,t,new BT(s,{sourceEvent:a,subject:f,target:d,identifier:i,active:g,x:m[0]+o,y:m[1]+h,dx:m[0]-b[0],dy:m[1]-b[1],dispatch:p}),n)}}return d.filter=function(t){return arguments.length?(i="function"==typeof t?t:LT(!!t),d):i},d.container=function(t){return arguments.length?(s="function"==typeof t?t:LT(t),d):s},d.subject=function(t){return arguments.length?(a="function"==typeof t?t:LT(t),d):a},d.touchable=function(t){return arguments.length?(o="function"==typeof t?t:LT(!!t),d):o},d.on=function(){var t=c.on.apply(c,arguments);return t===c?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}function KT(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function ZT(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function GT(){}BT.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var QT=.7,JT=1/QT,tC="\\s*([+-]?\\d+)\\s*",eC="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",rC="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",nC=/^#([0-9a-f]{3,8})$/,iC=new RegExp(`^rgb\\(${tC},${tC},${tC}\\)$`),sC=new RegExp(`^rgb\\(${rC},${rC},${rC}\\)$`),aC=new RegExp(`^rgba\\(${tC},${tC},${tC},${eC}\\)$`),oC=new RegExp(`^rgba\\(${rC},${rC},${rC},${eC}\\)$`),lC=new RegExp(`^hsl\\(${eC},${rC},${rC}\\)$`),cC=new RegExp(`^hsla\\(${eC},${rC},${rC},${eC}\\)$`),uC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function hC(){return this.rgb().formatHex()}function dC(){return this.rgb().formatRgb()}function fC(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=nC.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?pC(e):3===r?new bC(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?mC(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?mC(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=iC.exec(t))?new bC(e[1],e[2],e[3],1):(e=sC.exec(t))?new bC(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=aC.exec(t))?mC(e[1],e[2],e[3],e[4]):(e=oC.exec(t))?mC(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=lC.exec(t))?$C(e[1],e[2]/100,e[3]/100,1):(e=cC.exec(t))?$C(e[1],e[2]/100,e[3]/100,e[4]):uC.hasOwnProperty(t)?pC(uC[t]):"transparent"===t?new bC(NaN,NaN,NaN,0):null}function pC(t){return new bC(t>>16&255,t>>8&255,255&t,1)}function mC(t,e,r,n){return n<=0&&(t=e=r=NaN),new bC(t,e,r,n)}function gC(t,e,r,n){return 1===arguments.length?function(t){return t instanceof GT||(t=fC(t)),t?new bC((t=t.rgb()).r,t.g,t.b,t.opacity):new bC}(t):new bC(t,e,r,null==n?1:n)}function bC(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function vC(){return`#${kC(this.r)}${kC(this.g)}${kC(this.b)}`}function yC(){const t=wC(this.opacity);return`${1===t?"rgb(":"rgba("}${xC(this.r)}, ${xC(this.g)}, ${xC(this.b)}${1===t?")":`, ${t})`}`}function wC(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function xC(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function kC(t){return((t=xC(t))<16?"0":"")+t.toString(16)}function $C(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new SC(t,e,r,n)}function _C(t){if(t instanceof SC)return new SC(t.h,t.s,t.l,t.opacity);if(t instanceof GT||(t=fC(t)),!t)return new SC;if(t instanceof SC)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),s=Math.max(e,r,n),a=NaN,o=s-i,l=(s+i)/2;return o?(a=e===s?(r-n)/o+6*(r<n):r===s?(n-e)/o+2:(e-r)/o+4,o/=l<.5?s+i:2-s-i,a*=60):o=l>0&&l<1?0:a,new SC(a,o,l,t.opacity)}function SC(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function EC(t){return(t=(t||0)%360)<0?t+360:t}function AC(t){return Math.max(0,Math.min(1,t||0))}function MC(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}KT(GT,fC,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:hC,formatHex:hC,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return _C(this).formatHsl()},formatRgb:dC,toString:dC}),KT(bC,gC,ZT(GT,{brighter(t){return t=null==t?JT:Math.pow(JT,t),new bC(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?QT:Math.pow(QT,t),new bC(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new bC(xC(this.r),xC(this.g),xC(this.b),wC(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vC,formatHex:vC,formatHex8:function(){return`#${kC(this.r)}${kC(this.g)}${kC(this.b)}${kC(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:yC,toString:yC})),KT(SC,function(t,e,r,n){return 1===arguments.length?_C(t):new SC(t,e,r,null==n?1:n)},ZT(GT,{brighter(t){return t=null==t?JT:Math.pow(JT,t),new SC(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?QT:Math.pow(QT,t),new SC(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new bC(MC(t>=240?t-240:t+120,i,n),MC(t,i,n),MC(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new SC(EC(this.h),AC(this.s),AC(this.l),wC(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=wC(this.opacity);return`${1===t?"hsl(":"hsla("}${EC(this.h)}, ${100*AC(this.s)}%, ${100*AC(this.l)}%${1===t?")":`, ${t})`}`}}));var TC=t=>()=>t;function CC(t){return 1===(t=+t)?NC:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}(e,r,t):TC(isNaN(e)?r:e)}}function NC(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):TC(isNaN(t)?e:t)}var RC=function t(e){var r=CC(e);function n(t,e){var n=r((t=gC(t)).r,(e=gC(e)).r),i=r(t.g,e.g),s=r(t.b,e.b),a=NC(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=s(e),t.opacity=a(e),t+""}}return n.gamma=t,n}(1);function OC(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(s){for(r=0;r<n;++r)i[r]=t[r]*(1-s)+e[r]*s;return i}}function PC(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,s=new Array(i),a=new Array(n);for(r=0;r<i;++r)s[r]=UC(t[r],e[r]);for(;r<n;++r)a[r]=e[r];return function(t){for(r=0;r<i;++r)a[r]=s[r](t);return a}}function IC(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function FC(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function DC(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=UC(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var zC=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qC=new RegExp(zC.source,"g");function jC(t,e){var r,n,i,s=zC.lastIndex=qC.lastIndex=0,a=-1,o=[],l=[];for(t+="",e+="";(r=zC.exec(t))&&(n=qC.exec(e));)(i=n.index)>s&&(i=e.slice(s,i),o[a]?o[a]+=i:o[++a]=i),(r=r[0])===(n=n[0])?o[a]?o[a]+=n:o[++a]=n:(o[++a]=null,l.push({i:a,x:FC(r,n)})),s=qC.lastIndex;return s<e.length&&(i=e.slice(s),o[a]?o[a]+=i:o[++a]=i),o.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)o[(r=l[n]).i]=r.x(t);return o.join("")})}function UC(t,e){var r,n=typeof e;return null==e||"boolean"===n?TC(e):("number"===n?FC:"string"===n?(r=fC(e))?(e=r,RC):jC:e instanceof fC?RC:e instanceof Date?IC:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?OC:Array.isArray(e)?PC:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?DC:FC)(t,e)}function LC(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var BC,HC=180/Math.PI,VC={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function XC(t,e,r,n,i,s){var a,o,l;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(o=Math.sqrt(r*r+n*n))&&(r/=o,n/=o,l/=o),t*n<e*r&&(t=-t,e=-e,l=-l,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(e,t)*HC,skewX:Math.atan(l)*HC,scaleX:a,scaleY:o}}function WC(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(s,a){var o=[],l=[];return s=t(s),a=t(a),function(t,n,i,s,a,o){if(t!==i||n!==s){var l=a.push("translate(",null,e,null,r);o.push({i:l-4,x:FC(t,i)},{i:l-2,x:FC(n,s)})}else(i||s)&&a.push("translate("+i+e+s+r)}(s.translateX,s.translateY,a.translateX,a.translateY,o,l),function(t,e,r,s){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),s.push({i:r.push(i(r)+"rotate(",null,n)-2,x:FC(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(s.rotate,a.rotate,o,l),function(t,e,r,s){t!==e?s.push({i:r.push(i(r)+"skewX(",null,n)-2,x:FC(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(s.skewX,a.skewX,o,l),function(t,e,r,n,s,a){if(t!==r||e!==n){var o=s.push(i(s)+"scale(",null,",",null,")");a.push({i:o-4,x:FC(t,r)},{i:o-2,x:FC(e,n)})}else 1===r&&1===n||s.push(i(s)+"scale("+r+","+n+")")}(s.scaleX,s.scaleY,a.scaleX,a.scaleY,o,l),s=a=null,function(t){for(var e,r=-1,n=l.length;++r<n;)o[(e=l[r]).i]=e.x(t);return o.join("")}}}var YC,KC,ZC=WC(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?VC:XC(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),GC=WC(function(t){return null==t?VC:(BC||(BC=document.createElementNS("http://www.w3.org/2000/svg","g")),BC.setAttribute("transform",t),(t=BC.transform.baseVal.consolidate())?XC((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):VC)},", ",")",")"),QC=0,JC=0,tN=0,eN=0,rN=0,nN=0,iN="object"==typeof performance&&performance.now?performance:Date,sN="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function aN(){return rN||(sN(oN),rN=iN.now()+nN)}function oN(){rN=0}function lN(){this._call=this._time=this._next=null}function cN(t,e,r){var n=new lN;return n.restart(t,e,r),n}function uN(){rN=(eN=iN.now())+nN,QC=JC=0;try{!function(){aN(),++QC;for(var t,e=YC;e;)(t=rN-e._time)>=0&&e._call.call(void 0,t),e=e._next;--QC}()}finally{QC=0,function(){var t,e,r=YC,n=1/0;for(;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:YC=e);KC=t,dN(n)}(),rN=0}}function hN(){var t=iN.now(),e=t-eN;e>1e3&&(nN-=e,eN=t)}function dN(t){QC||(JC&&(JC=clearTimeout(JC)),t-rN>24?(t<1/0&&(JC=setTimeout(uN,t-iN.now()-nN)),tN&&(tN=clearInterval(tN))):(tN||(eN=iN.now(),tN=setInterval(hN,1e3)),QC=1,sN(uN)))}function fN(t,e,r){var n=new lN;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}lN.prototype=cN.prototype={constructor:lN,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?aN():+r)+(null==e?0:+e),this._next||KC===this||(KC?KC._next=this:YC=this,KC=this),this._call=t,this._time=r,dN()},stop:function(){this._call&&(this._call=null,this._time=1/0,dN())}};var pN=wM("start","end","cancel","interrupt"),mN=[];function gN(t,e,r,n,i,s){var a=t.__transition;if(a){if(r in a)return}else t.__transition={};!function(t,e,r){var n,i=t.__transition;function s(t){r.state=1,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)}function a(s){var c,u,h,d;if(1!==r.state)return l();for(c in i)if((d=i[c]).name===r.name){if(3===d.state)return fN(a);4===d.state?(d.state=6,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete i[c]):+c<e&&(d.state=6,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete i[c])}if(fN(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(s))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,n=new Array(h=r.tween.length),c=0,u=-1;c<h;++c)(d=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=d);n.length=u+1}}function o(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(l),r.state=5,1),s=-1,a=n.length;++s<a;)n[s].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),l())}function l(){for(var n in r.state=6,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=cN(s,0,r.time)}(t,r,{name:e,index:n,group:i,on:pN,tween:mN,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:0})}function bN(t,e){var r=yN(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function vN(t,e){var r=yN(t,e);if(r.state>3)throw new Error("too late; already running");return r}function yN(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function wN(t,e){var r,n;return function(){var i=vN(this,t),s=i.tween;if(s!==r)for(var a=0,o=(n=r=s).length;a<o;++a)if(n[a].name===e){(n=n.slice()).splice(a,1);break}i.tween=n}}function xN(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var s=vN(this,t),a=s.tween;if(a!==n){i=(n=a).slice();for(var o={name:e,value:r},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=o;break}l===c&&i.push(o)}s.tween=i}}function kN(t,e,r){var n=t._id;return t.each(function(){var t=vN(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return yN(t,n).value[e]}}function $N(t,e){var r;return("number"==typeof e?FC:e instanceof fC?RC:(r=fC(e))?(e=r,RC):jC)(t,e)}function _N(t){return function(){this.removeAttribute(t)}}function SN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function EN(t,e,r){var n,i,s=r+"";return function(){var a=this.getAttribute(t);return a===s?null:a===n?i:i=e(n=a,r)}}function AN(t,e,r){var n,i,s=r+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===s?null:a===n?i:i=e(n=a,r)}}function MN(t,e,r){var n,i,s;return function(){var a,o,l=r(this);if(null!=l)return(a=this.getAttribute(t))===(o=l+"")?null:a===n&&o===i?s:(i=o,s=e(n=a,l));this.removeAttribute(t)}}function TN(t,e,r){var n,i,s;return function(){var a,o,l=r(this);if(null!=l)return(a=this.getAttributeNS(t.space,t.local))===(o=l+"")?null:a===n&&o===i?s:(i=o,s=e(n=a,l));this.removeAttributeNS(t.space,t.local)}}function CN(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,i)),r}return i._value=e,i}function NN(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,i)),r}return i._value=e,i}function RN(t,e){return function(){bN(this,t).delay=+e.apply(this,arguments)}}function ON(t,e){return e=+e,function(){bN(this,t).delay=e}}function PN(t,e){return function(){vN(this,t).duration=+e.apply(this,arguments)}}function IN(t,e){return e=+e,function(){vN(this,t).duration=e}}var FN=IT.prototype.constructor;function DN(t){return function(){this.style.removeProperty(t)}}var zN=0;function qN(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function jN(){return++zN}var UN=IT.prototype;qN.prototype={constructor:qN,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=NM(t));for(var n=this._groups,i=n.length,s=new Array(i),a=0;a<i;++a)for(var o,l,c=n[a],u=c.length,h=s[a]=new Array(u),d=0;d<u;++d)(o=c[d])&&(l=t.call(o,o.__data__,d,c))&&("__data__"in o&&(l.__data__=o.__data__),h[d]=l,gN(h[d],e,r,d,h,yN(o,r)));return new qN(s,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=OM(t));for(var n=this._groups,i=n.length,s=[],a=[],o=0;o<i;++o)for(var l,c=n[o],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,f=t.call(l,l.__data__,h,c),p=yN(l,r),m=0,g=f.length;m<g;++m)(d=f[m])&&gN(d,e,r,m,f,p);s.push(f),a.push(l)}return new qN(s,a,e,r)},selectChild:UN.selectChild,selectChildren:UN.selectChildren,filter:function(t){"function"!=typeof t&&(t=IM(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var s,a=e[i],o=a.length,l=n[i]=[],c=0;c<o;++c)(s=a[c])&&t.call(s,s.__data__,c,a)&&l.push(s);return new qN(n,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,s=Math.min(n,i),a=new Array(n),o=0;o<s;++o)for(var l,c=e[o],u=r[o],h=c.length,d=a[o]=new Array(h),f=0;f<h;++f)(l=c[f]||u[f])&&(d[f]=l);for(;o<n;++o)a[o]=e[o];return new qN(a,this._parents,this._name,this._id)},selection:function(){return new FN(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=jN(),n=this._groups,i=n.length,s=0;s<i;++s)for(var a,o=n[s],l=o.length,c=0;c<l;++c)if(a=o[c]){var u=yN(a,e);gN(a,t,r,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new qN(n,this._parents,t,r)},call:UN.call,nodes:UN.nodes,node:UN.node,size:UN.size,empty:UN.empty,each:UN.each,on:function(t,e){var r=this._id;return arguments.length<2?yN(this.node(),r).on.on(t):this.each(function(t,e,r){var n,i,s=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?bN:vN;return function(){var a=s(this,t),o=a.on;o!==n&&(i=(n=o).copy()).on(e,r),a.on=i}}(r,t,e))},attr:function(t,e){var r=EM(t),n="transform"===r?GC:$N;return this.attrTween(t,"function"==typeof e?(r.local?TN:MN)(r,n,kN(this,"attr."+t,e)):null==e?(r.local?SN:_N)(r):(r.local?AN:EN)(r,n,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=EM(t);return this.tween(r,(n.local?CN:NN)(n,e))},style:function(t,e,r){var n="transform"==(t+="")?ZC:$N;return null==e?this.styleTween(t,function(t,e){var r,n,i;return function(){var s=iT(this,t),a=(this.style.removeProperty(t),iT(this,t));return s===a?null:s===r&&a===n?i:i=e(r=s,n=a)}}(t,n)).on("end.style."+t,DN(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var n,i,s;return function(){var a=iT(this,t),o=r(this),l=o+"";return null==o&&(this.style.removeProperty(t),l=o=iT(this,t)),a===l?null:a===n&&l===i?s:(i=l,s=e(n=a,o))}}(t,n,kN(this,"style."+t,e))).each(function(t,e){var r,n,i,s,a="style."+e,o="end."+a;return function(){var l=vN(this,t),c=l.on,u=null==l.value[a]?s||(s=DN(e)):void 0;c===r&&i===u||(n=(r=c).copy()).on(o,i=u),l.on=n}}(this._id,t)):this.styleTween(t,function(t,e,r){var n,i,s=r+"";return function(){var a=iT(this,t);return a===s?null:a===n?i:i=e(n=a,r)}}(t,n,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,function(t,e,r){var n,i;function s(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&function(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}(t,s,r)),n}return s._value=e,s}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(kN(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&function(t){return function(e){this.textContent=t.call(this,e)}}(n)),e}return n._value=t,n}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=yN(this.node(),r).tween,s=0,a=i.length;s<a;++s)if((n=i[s]).name===t)return n.value;return null}return this.each((null==e?wN:xN)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?RN:ON)(e,t)):yN(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?PN:IN)(e,t)):yN(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){vN(this,t).ease=e}}(e,t)):yN(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;vN(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,n=r._id,i=r.size();return new Promise(function(s,a){var o={value:a},l={value:function(){0===--i&&s()}};r.each(function(){var r=vN(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),r.on=e}),0===i&&s()})},[Symbol.iterator]:UN[Symbol.iterator]};const LN=t=>+t;function BN(t){return t*t*t}function HN(t){return--t*t*t+1}var VN={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function XN(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}IT.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,n,i,s=t.__transition,a=!0;if(s){for(i in e=null==e?null:e+"",s)(r=s[i]).name===e?(n=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete s[i]):a=!1;a&&delete t.__transition}}(this,t)})},IT.prototype.transition=function(t){var e,r;t instanceof qN?(e=t._id,t=t._name):(e=jN(),(r=VN).time=aN(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,s=0;s<i;++s)for(var a,o=n[s],l=o.length,c=0;c<l;++c)(a=o[c])&&gN(a,t,e,c,o,r||XN(a,e));return new qN(n,this._parents,t,e)};const WN=Math.PI,YN=2*WN,KN=1e-6,ZN=YN-KN;function GN(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class QN{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?GN:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return GN;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,s){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+s}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let s=this._x1,a=this._y1,o=r-t,l=n-e,c=s-t,u=a-e,h=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>KN)if(Math.abs(u*o-l*c)>KN&&i){let d=r-s,f=n-a,p=o*o+l*l,m=d*d+f*f,g=Math.sqrt(p),b=Math.sqrt(h),v=i*Math.tan((WN-Math.acos((p+h-m)/(2*g*b)))/2),y=v/b,w=v/g;Math.abs(y-1)>KN&&this._append`L${t+y*c},${e+y*u}`,this._append`A${i},${i},0,0,${+(u*d>c*f)},${this._x1=t+w*o},${this._y1=e+w*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,s){if(t=+t,e=+e,s=!!s,(r=+r)<0)throw new Error(`negative radius: ${r}`);let a=r*Math.cos(n),o=r*Math.sin(n),l=t+a,c=e+o,u=1^s,h=s?n-i:i-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>KN||Math.abs(this._y1-c)>KN)&&this._append`L${l},${c}`,r&&(h<0&&(h=h%YN+YN),h>ZN?this._append`A${r},${r},0,1,${u},${t-a},${e-o}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:h>KN&&this._append`A${r},${r},0,${+(h>=WN)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}var JN=Array.prototype.slice;function tR(t,e){return t-e}var eR=t=>()=>t;function rR(t,e){for(var r,n=-1,i=e.length;++n<i;)if(r=nR(t,e[n]))return r;return 0}function nR(t,e){for(var r=e[0],n=e[1],i=-1,s=0,a=t.length,o=a-1;s<a;o=s++){var l=t[s],c=l[0],u=l[1],h=t[o],d=h[0],f=h[1];if(iR(l,h,e))return 0;u>n!=f>n&&r<(d-c)*(n-u)/(f-u)+c&&(i=-i)}return i}function iR(t,e,r){var n;return function(t,e,r){return(e[0]-t[0])*(r[1]-t[1])===(r[0]-t[0])*(e[1]-t[1])}(t,e,r)&&function(t,e,r){return t<=e&&e<=r||r<=e&&e<=t}(t[n=+(t[0]===e[0])],r[n],e[n])}function sR(){}var aR=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function oR(){var t=1,e=1,r=oM,n=o;function i(t){var e=r(t);if(Array.isArray(e))e=e.slice().sort(tR);else{const r=KA(t,lR);for(e=iM(...aM(r[0],r[1],e),e);e[e.length-1]>=r[1];)e.pop();for(;e[1]<r[0];)e.shift()}return e.map(e=>s(t,e))}function s(r,i){const s=null==i?NaN:+i;if(isNaN(s))throw new Error(`invalid value: ${i}`);var o=[],l=[];return function(r,n,i){var s,o,l,c,u,h,d=new Array,f=new Array;s=o=-1,c=cR(r[0],n),aR[c<<1].forEach(p);for(;++s<t-1;)l=c,c=cR(r[s+1],n),aR[l|c<<1].forEach(p);aR[c|0].forEach(p);for(;++o<e-1;){for(s=-1,c=cR(r[o*t+t],n),u=cR(r[o*t],n),aR[c<<1|u<<2].forEach(p);++s<t-1;)l=c,c=cR(r[o*t+t+s+1],n),h=u,u=cR(r[o*t+s+1],n),aR[l|c<<1|u<<2|h<<3].forEach(p);aR[c|u<<3].forEach(p)}s=-1,u=r[o*t]>=n,aR[u<<2].forEach(p);for(;++s<t-1;)h=u,u=cR(r[o*t+s+1],n),aR[u<<2|h<<3].forEach(p);function p(t){var e,r,n=[t[0][0]+s,t[0][1]+o],l=[t[1][0]+s,t[1][1]+o],c=a(n),u=a(l);(e=f[c])?(r=d[u])?(delete f[e.end],delete d[r.start],e===r?(e.ring.push(l),i(e.ring)):d[e.start]=f[r.end]={start:e.start,end:r.end,ring:e.ring.concat(r.ring)}):(delete f[e.end],e.ring.push(l),f[e.end=u]=e):(e=d[u])?(r=f[c])?(delete d[e.start],delete f[r.end],e===r?(e.ring.push(l),i(e.ring)):d[r.start]=f[e.end]={start:r.start,end:e.end,ring:r.ring.concat(e.ring)}):(delete d[e.start],e.ring.unshift(n),d[e.start=c]=e):d[c]=f[u]={start:c,end:u,ring:[n,l]}}aR[u<<3].forEach(p)}(r,s,function(t){n(t,r,s),function(t){for(var e=0,r=t.length,n=t[r-1][1]*t[0][0]-t[r-1][0]*t[0][1];++e<r;)n+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return n}(t)>0?o.push([t]):l.push(t)}),l.forEach(function(t){for(var e,r=0,n=o.length;r<n;++r)if(-1!==rR((e=o[r])[0],t))return void e.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(e){return 2*e[0]+e[1]*(t+1)*4}function o(r,n,i){r.forEach(function(r){var s=r[0],a=r[1],o=0|s,l=0|a,c=uR(n[l*t+o]);s>0&&s<t&&o===s&&(r[0]=hR(s,uR(n[l*t+o-1]),c,i)),a>0&&a<e&&l===a&&(r[1]=hR(a,uR(n[(l-1)*t+o]),c,i))})}return i.contour=s,i.size=function(r){if(!arguments.length)return[t,e];var n=Math.floor(r[0]),s=Math.floor(r[1]);if(!(n>=0&&s>=0))throw new Error("invalid size");return t=n,e=s,i},i.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?eR(JN.call(t)):eR(t),i):r},i.smooth=function(t){return arguments.length?(n=t?o:sR,i):n===o},i}function lR(t){return isFinite(t)?t:NaN}function cR(t,e){return null!=t&&+t>=e}function uR(t){return null==t||isNaN(t=+t)?-1/0:t}function hR(t,e,r,n){const i=n-e,s=r-e,a=isFinite(i)||isFinite(s)?i/s:Math.sign(i)/Math.sign(s);return isNaN(a)?t:t+a-.5}function dR(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function fR(t){return(t=dR(Math.abs(t)))?t[1]:NaN}var pR,mR=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function gR(t){if(!(e=mR.exec(t)))throw new Error("invalid format: "+t);var e;return new bR({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function bR(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function vR(t,e){var r=dR(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}gR.prototype=bR.prototype,bR.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var yR={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>vR(100*t,e),r:vR,s:function(t,e){var r=dR(t,e);if(!r)return t+"";var n=r[0],i=r[1],s=i-(pR=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=n.length;return s===a?n:s>a?n+new Array(s-a+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+dR(t,Math.max(0,e+s-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function wR(t){return t}var xR,kR,$R,_R=Array.prototype.map,SR=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function ER(t){var e,r,n=void 0===t.grouping||void 0===t.thousands?wR:(e=_R.call(t.grouping,Number),r=t.thousands+"",function(t,n){for(var i=t.length,s=[],a=0,o=e[0],l=0;i>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),s.push(t.substring(i-=o,i+o)),!((l+=o+1)>n));)o=e[a=(a+1)%e.length];return s.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",s=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?wR:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(_R.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t){var e=(t=gR(t)).fill,r=t.align,h=t.sign,d=t.symbol,f=t.zero,p=t.width,m=t.comma,g=t.precision,b=t.trim,v=t.type;"n"===v?(m=!0,v="g"):yR[v]||(void 0===g&&(g=12),b=!0,v="g"),(f||"0"===e&&"="===r)&&(f=!0,e="0",r="=");var y="$"===d?i:"#"===d&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w="$"===d?s:/[%p]/.test(v)?l:"",x=yR[v],k=/[defgprs%]/.test(v);function $(t){var i,s,l,d=y,$=w;if("c"===v)$=x(t)+$,t="";else{var _=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:x(Math.abs(t),g),b&&(t=function(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),_&&0===+t&&"+"!==h&&(_=!1),d=(_?"("===h?h:c:"-"===h||"("===h?"":h)+d,$=("s"===v?SR[8+pR/3]:"")+$+(_&&"("===h?")":""),k)for(i=-1,s=t.length;++i<s;)if(48>(l=t.charCodeAt(i))||l>57){$=(46===l?a+t.slice(i+1):t.slice(i))+$,t=t.slice(0,i);break}}m&&!f&&(t=n(t,1/0));var S=d.length+t.length+$.length,E=S<p?new Array(p-S+1).join(e):"";switch(m&&f&&(t=n(E+t,E.length?p-$.length:1/0),E=""),r){case"<":t=d+t+$+E;break;case"=":t=d+E+t+$;break;case"^":t=E.slice(0,S=E.length>>1)+d+t+$+E.slice(S);break;default:t=E+d+t+$}return o(t)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),$.toString=function(){return t+""},$}return{format:h,formatPrefix:function(t,e){var r=h(((t=gR(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(fR(e)/3))),i=Math.pow(10,-n),s=SR[8+n/3];return function(t){return r(i*t)+s}}}}xR=ER({thousands:",",grouping:[3],currency:["$",""]}),kR=xR.format,$R=xR.formatPrefix;var AR=1e-6,MR=Math.PI,TR=2*MR,CR=180/MR,NR=MR/180,RR=Math.abs,OR=Math.cos,PR=Math.sin,IR=Math.sqrt;function FR(){}function DR(t,e){t&&qR.hasOwnProperty(t.type)&&qR[t.type](t,e)}var zR={Feature:function(t,e){DR(t.geometry,e)},FeatureCollection:function(t,e){for(var r=t.features,n=-1,i=r.length;++n<i;)DR(r[n].geometry,e)}},qR={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)t=r[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){jR(t.coordinates,e,0)},MultiLineString:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)jR(r[n],e,0)},Polygon:function(t,e){UR(t.coordinates,e)},MultiPolygon:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)UR(r[n],e)},GeometryCollection:function(t,e){for(var r=t.geometries,n=-1,i=r.length;++n<i;)DR(r[n],e)}};function jR(t,e,r){var n,i=-1,s=t.length-r;for(e.lineStart();++i<s;)n=t[i],e.point(n[0],n[1],n[2]);e.lineEnd()}function UR(t,e){var r=-1,n=t.length;for(e.polygonStart();++r<n;)jR(t[r],e,1);e.polygonEnd()}function LR(t,e){t&&zR.hasOwnProperty(t.type)?zR[t.type](t,e):DR(t,e)}function BR(t,e,r,n){this.x=t,this.z=e,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function HR(t,e,r,n,i){var s,a,o=[],l=[];if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,r,n=t[0],a=t[e];if(function(t,e){return RR(t[0]-e[0])<AR&&RR(t[1]-e[1])<AR}(n,a)){if(!n[2]&&!a[2]){for(i.lineStart(),s=0;s<e;++s)i.point((n=t[s])[0],n[1]);return void i.lineEnd()}a[0]+=2e-6}o.push(r=new BR(n,t,null,!0)),l.push(r.o=new BR(n,null,r,!1)),o.push(r=new BR(a,t,null,!1)),l.push(r.o=new BR(a,null,r,!0))}}),o.length){for(l.sort(e),VR(o),VR(l),s=0,a=l.length;s<a;++s)l[s].e=r=!r;for(var c,u,h=o[0];;){for(var d=h,f=!0;d.v;)if((d=d.n)===h)return;c=d.z,i.lineStart();do{if(d.v=d.o.v=!0,d.e){if(f)for(s=0,a=c.length;s<a;++s)i.point((u=c[s])[0],u[1]);else n(d.x,d.n.x,1,i);d=d.n}else{if(f)for(c=d.p.z,s=c.length-1;s>=0;--s)i.point((u=c[s])[0],u[1]);else n(d.x,d.p.x,-1,i);d=d.p}c=(d=d.o).z,f=!f}while(!d.v);i.lineEnd()}}}function VR(t){if(e=t.length){for(var e,r,n=0,i=t[0];++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}var XR=1e9,WR=-XR;function YR(t,e,r,n){function i(i,s){return t<=i&&i<=r&&e<=s&&s<=n}function s(i,s,o,c){var u=0,h=0;if(null==i||(u=a(i,o))!==(h=a(s,o))||l(i,s)<0^o>0)do{c.point(0===u||3===u?t:r,u>1?n:e)}while((u=(u+o+4)%4)!==h);else c.point(s[0],s[1])}function a(n,i){return RR(n[0]-t)<AR?i>0?0:3:RR(n[0]-r)<AR?i>0?2:1:RR(n[1]-e)<AR?i>0?1:0:i>0?3:2}function o(t,e){return l(t.x,e.x)}function l(t,e){var r=a(t,1),n=a(e,1);return r!==n?r-n:0===r?e[1]-t[1]:1===r?t[0]-e[0]:2===r?t[1]-e[1]:e[0]-t[0]}return function(a){var l,c,u,h,d,f,p,m,g,b,v,y=a,w=function(){var t,e=[];return{point:function(e,r,n){t.push([e,r,n])},lineStart:function(){e.push(t=[])},lineEnd:FR,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],t=null,r}}}(),x={point:k,lineStart:function(){x.point=$,c&&c.push(u=[]);b=!0,g=!1,p=m=NaN},lineEnd:function(){l&&($(h,d),f&&g&&w.rejoin(),l.push(w.result()));x.point=k,g&&y.lineEnd()},polygonStart:function(){y=w,l=[],c=[],v=!0},polygonEnd:function(){var e=function(){for(var e=0,r=0,i=c.length;r<i;++r)for(var s,a,o=c[r],l=1,u=o.length,h=o[0],d=h[0],f=h[1];l<u;++l)s=d,a=f,d=(h=o[l])[0],f=h[1],a<=n?f>n&&(d-s)*(n-a)>(f-a)*(t-s)&&++e:f<=n&&(d-s)*(n-a)<(f-a)*(t-s)&&--e;return e}(),r=v&&e,i=(h=l,l=Array.from(function*(t){for(const e of t)yield*e}(h))).length;var h;(r||i)&&(a.polygonStart(),r&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),i&&HR(l,o,e,s,a),a.polygonEnd());y=a,l=c=u=null}};function k(t,e){i(t,e)&&y.point(t,e)}function $(s,a){var o=i(s,a);if(c&&u.push([s,a]),b)h=s,d=a,f=o,b=!1,o&&(y.lineStart(),y.point(s,a));else if(o&&g)y.point(s,a);else{var l=[p=Math.max(WR,Math.min(XR,p)),m=Math.max(WR,Math.min(XR,m))],w=[s=Math.max(WR,Math.min(XR,s)),a=Math.max(WR,Math.min(XR,a))];!function(t,e,r,n,i,s){var a,o=t[0],l=t[1],c=0,u=1,h=e[0]-o,d=e[1]-l;if(a=r-o,h||!(a>0)){if(a/=h,h<0){if(a<c)return;a<u&&(u=a)}else if(h>0){if(a>u)return;a>c&&(c=a)}if(a=i-o,h||!(a<0)){if(a/=h,h<0){if(a>u)return;a>c&&(c=a)}else if(h>0){if(a<c)return;a<u&&(u=a)}if(a=n-l,d||!(a>0)){if(a/=d,d<0){if(a<c)return;a<u&&(u=a)}else if(d>0){if(a>u)return;a>c&&(c=a)}if(a=s-l,d||!(a<0)){if(a/=d,d<0){if(a>u)return;a>c&&(c=a)}else if(d>0){if(a<c)return;a<u&&(u=a)}return c>0&&(t[0]=o+c*h,t[1]=l+c*d),u<1&&(e[0]=o+u*h,e[1]=l+u*d),!0}}}}}(l,w,t,e,r,n)?o&&(y.lineStart(),y.point(s,a),v=!1):(g||(y.lineStart(),y.point(l[0],l[1])),y.point(w[0],w[1]),o||y.lineEnd(),v=!1)}p=s,m=a,g=o}return x}}var KR,ZR,GR,QR,JR=t=>t,tO=new ZA,eO=new ZA,rO={point:FR,lineStart:FR,lineEnd:FR,polygonStart:function(){rO.lineStart=nO,rO.lineEnd=aO},polygonEnd:function(){rO.lineStart=rO.lineEnd=rO.point=FR,tO.add(RR(eO)),eO=new ZA},result:function(){var t=tO/2;return tO=new ZA,t}};function nO(){rO.point=iO}function iO(t,e){rO.point=sO,KR=GR=t,ZR=QR=e}function sO(t,e){eO.add(QR*t-GR*e),GR=t,QR=e}function aO(){sO(KR,ZR)}var oO=1/0,lO=oO,cO=-oO,uO=cO,hO={point:function(t,e){t<oO&&(oO=t);t>cO&&(cO=t);e<lO&&(lO=e);e>uO&&(uO=e)},lineStart:FR,lineEnd:FR,polygonStart:FR,polygonEnd:FR,result:function(){var t=[[oO,lO],[cO,uO]];return cO=uO=-(lO=oO=1/0),t}};var dO,fO,pO,mO,gO=0,bO=0,vO=0,yO=0,wO=0,xO=0,kO=0,$O=0,_O=0,SO={point:EO,lineStart:AO,lineEnd:CO,polygonStart:function(){SO.lineStart=NO,SO.lineEnd=RO},polygonEnd:function(){SO.point=EO,SO.lineStart=AO,SO.lineEnd=CO},result:function(){var t=_O?[kO/_O,$O/_O]:xO?[yO/xO,wO/xO]:vO?[gO/vO,bO/vO]:[NaN,NaN];return gO=bO=vO=yO=wO=xO=kO=$O=_O=0,t}};function EO(t,e){gO+=t,bO+=e,++vO}function AO(){SO.point=MO}function MO(t,e){SO.point=TO,EO(pO=t,mO=e)}function TO(t,e){var r=t-pO,n=e-mO,i=IR(r*r+n*n);yO+=i*(pO+t)/2,wO+=i*(mO+e)/2,xO+=i,EO(pO=t,mO=e)}function CO(){SO.point=EO}function NO(){SO.point=OO}function RO(){PO(dO,fO)}function OO(t,e){SO.point=PO,EO(dO=pO=t,fO=mO=e)}function PO(t,e){var r=t-pO,n=e-mO,i=IR(r*r+n*n);yO+=i*(pO+t)/2,wO+=i*(mO+e)/2,xO+=i,kO+=(i=mO*t-pO*e)*(pO+t),$O+=i*(mO+e),_O+=3*i,EO(pO=t,mO=e)}function IO(t){this._context=t}IO.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,TR)}},result:FR};var FO,DO,zO,qO,jO,UO=new ZA,LO={point:FR,lineStart:function(){LO.point=BO},lineEnd:function(){FO&&HO(DO,zO),LO.point=FR},polygonStart:function(){FO=!0},polygonEnd:function(){FO=null},result:function(){var t=+UO;return UO=new ZA,t}};function BO(t,e){LO.point=HO,DO=qO=t,zO=jO=e}function HO(t,e){qO-=t,jO-=e,UO.add(IR(qO*qO+jO*jO)),qO=t,jO=e}let VO,XO,WO,YO;class KO{constructor(t){this._append=null==t?ZO:function(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return ZO;if(e!==VO){const t=10**e;VO=e,XO=function(e){let r=1;this._+=e[0];for(const n=e.length;r<n;++r)this._+=Math.round(arguments[r]*t)/t+e[r]}}return XO}(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:this._append`M${t},${e}`,this._point=1;break;case 1:this._append`L${t},${e}`;break;default:if(this._append`M${t},${e}`,this._radius!==WO||this._append!==XO){const t=this._radius,e=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,WO=t,XO=this._append,YO=this._,this._=e}this._+=YO}}result(){const t=this._;return this._="",t.length?t:null}}function ZO(t){let e=1;this._+=t[0];for(const r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function GO(t,e){let r,n,i=3,s=4.5;function a(t){return t&&("function"==typeof s&&n.pointRadius(+s.apply(this,arguments)),LR(t,r(n))),n.result()}return a.area=function(t){return LR(t,r(rO)),rO.result()},a.measure=function(t){return LR(t,r(LO)),LO.result()},a.bounds=function(t){return LR(t,r(hO)),hO.result()},a.centroid=function(t){return LR(t,r(SO)),SO.result()},a.projection=function(e){return arguments.length?(r=null==e?(t=null,JR):(t=e).stream,a):t},a.context=function(t){return arguments.length?(n=null==t?(e=null,new KO(i)):new IO(e=t),"function"!=typeof s&&n.pointRadius(s),a):e},a.pointRadius=function(t){return arguments.length?(s="function"==typeof t?t:(n.pointRadius(+t),+t),a):s},a.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);i=e}return null===e&&(n=new KO(i)),a},a.projection(t).digits(i).context(e)}function QO(){}function JO(t,e,r){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=n&&t.clipExtent(null),LR(r,t.stream(hO)),e(hO.result()),null!=n&&t.clipExtent(n),t}function tP(t,e,r){return JO(t,function(r){var n=e[1][0]-e[0][0],i=e[1][1]-e[0][1],s=Math.min(n/(r[1][0]-r[0][0]),i/(r[1][1]-r[0][1])),a=+e[0][0]+(n-s*(r[1][0]+r[0][0]))/2,o=+e[0][1]+(i-s*(r[1][1]+r[0][1]))/2;t.scale(150*s).translate([a,o])},r)}function eP(){var t,e,r,n,i,s,a,o,l=1,c=0,u=0,h=1,d=1,f=0,p=null,m=1,g=1,b=(o={point:function(t,e){var r=w([t,e]);this.stream.point(r[0],r[1])}},function(t){var e=new QO;for(var r in o)e[r]=o[r];return e.stream=t,e}),v=JR;function y(){return m=l*h,g=l*d,s=a=null,w}function w(r){var n=r[0]*m,i=r[1]*g;if(f){var s=i*t-n*e;n=n*t+i*e,i=s}return[n+c,i+u]}return w.invert=function(r){var n=r[0]-c,i=r[1]-u;if(f){var s=i*t+n*e;n=n*t-i*e,i=s}return[n/m,i/g]},w.stream=function(t){return s&&a===t?s:s=b(v(a=t))},w.postclip=function(t){return arguments.length?(v=t,p=r=n=i=null,y()):v},w.clipExtent=function(t){return arguments.length?(v=null==t?(p=r=n=i=null,JR):YR(p=+t[0][0],r=+t[0][1],n=+t[1][0],i=+t[1][1]),y()):null==p?null:[[p,r],[n,i]]},w.scale=function(t){return arguments.length?(l=+t,y()):l},w.translate=function(t){return arguments.length?(c=+t[0],u=+t[1],y()):[c,u]},w.angle=function(r){return arguments.length?(e=PR(f=r%360*NR),t=OR(f),y()):f*CR},w.reflectX=function(t){return arguments.length?(h=t?-1:1,y()):h<0},w.reflectY=function(t){return arguments.length?(d=t?-1:1,y()):d<0},w.fitExtent=function(t,e){return tP(w,t,e)},w.fitSize=function(t,e){return function(t,e,r){return tP(t,[[0,0],e],r)}(w,t,e)},w.fitWidth=function(t,e){return function(t,e,r){return JO(t,function(r){var n=+e,i=n/(r[1][0]-r[0][0]),s=(n-i*(r[1][0]+r[0][0]))/2,a=-i*r[0][1];t.scale(150*i).translate([s,a])},r)}(w,t,e)},w.fitHeight=function(t,e){return function(t,e,r){return JO(t,function(r){var n=+e,i=n/(r[1][1]-r[0][1]),s=-i*r[0][0],a=(n-i*(r[1][1]+r[0][1]))/2;t.scale(150*i).translate([s,a])},r)}(w,t,e)},w}function rP(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function nP(t){return+t}QO.prototype={constructor:QO,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var iP=[0,1];function sP(t){return t}function aP(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function oP(t,e,r){var n=t[0],i=t[1],s=e[0],a=e[1];return i<n?(n=aP(i,n),s=r(a,s)):(n=aP(n,i),s=r(s,a)),function(t){return s(n(t))}}function lP(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),s=new Array(n),a=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<n;)i[a]=aP(t[a],t[a+1]),s[a]=r(e[a],e[a+1]);return function(e){var r=YA(t,e,1,n)-1;return s[r](i[r](e))}}function cP(){var t,e,r,n,i,s,a=iP,o=iP,l=UC,c=sP;function u(){var t=Math.min(a.length,o.length);return c!==sP&&(c=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(a[0],a[t-1])),n=t>2?lP:oP,i=s=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(a.map(t),o,l)))(t(c(e)))}return h.invert=function(r){return c(e((s||(s=n(o,a.map(t),FC)))(r)))},h.domain=function(t){return arguments.length?(a=Array.from(t,nP),u()):a.slice()},h.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},h.rangeRound=function(t){return o=Array.from(t),l=LC,u()},h.clamp=function(t){return arguments.length?(c=!!t||sP,u()):c!==sP},h.interpolate=function(t){return arguments.length?(l=t,u()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,u()}}function uP(t,e,r,n){var i,s=function(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?sM(e,t,r):sM(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}(t,e,r);switch((n=gR(null==n?",f":n)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(fR(e)/3)))-fR(Math.abs(t)))}(s,a))||(n.precision=i),$R(n,a);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,fR(e)-fR(t))+1}(s,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=function(t){return Math.max(0,-fR(Math.abs(t)))}(s))||(n.precision=i-2*("%"===n.type))}return kR(n)}function hP(){var t=cP()(sP,sP);return t.copy=function(){return e=t,hP().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},rP.apply(t,arguments),function(t){var e=t.domain;return t.ticks=function(t){var r=e();return iM(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return uP(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,s=e(),a=0,o=s.length-1,l=s[a],c=s[o],u=10;for(c<l&&(i=l,l=c,c=i,i=a,a=o,o=i);u-- >0;){if((i=sM(l,c,r))===n)return s[a]=l,s[o]=c,e(s);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}n=i}return t},t}(t)}function dP(t){return function(){return t}}function fP(t){this._context=t}function pP(t){return new fP(t)}function mP(t){return t[0]}function gP(t){return t[1]}function bP(t,e){var r=dP(!0),n=null,i=pP,s=null,a=function(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new QN(e)}(o);function o(o){var l,c,u,h=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,d=!1;for(null==n&&(s=i(u=a())),l=0;l<=h;++l)!(l<h&&r(c=o[l],l,o))===d&&((d=!d)?s.lineStart():s.lineEnd()),d&&s.point(+t(c,l,o),+e(c,l,o));if(u)return s=null,u+""||null}return t="function"==typeof t?t:void 0===t?mP:dP(t),e="function"==typeof e?e:void 0===e?gP:dP(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:dP(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:dP(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:dP(!!t),o):r},o.curve=function(t){return arguments.length?(i=t,null!=n&&(s=i(n)),o):i},o.context=function(t){return arguments.length?(null==t?n=s=null:s=i(n=t),o):n},o}function vP(t,e,r){this.k=t,this.x=e,this.y=r}fP.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},vP.prototype={constructor:vP,scale:function(t){return 1===t?this:new vP(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new vP(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},vP.prototype;class yP extends LA{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=RC(t,"#ffffff")(.75),e.light50=RC(t,"#ffffff")(.5),e.light25=RC(t,"#ffffff")(.25),e.grey=t,e.dark25=RC(t,"#000000")(.25),e.dark50=RC(t,"#000000")(.5),e.dark75=RC(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,n=this.shadows.opacityPenumbra+this.shadows.opacityBoost,i=this.shadows.opacityAmbient+this.shadows.opacityBoost,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,l=this.shadows.mapUmbra[t],c=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${s}, ${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${a}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=yP.shadows,e=t.elevations.map(e=>$A`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?$A``:$A`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?$A``:$A`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?$A``:$A`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return $A`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return qE`
      :host {
        ---shadow-0: var(--shadow-0, ${zE(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${zE(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${zE(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${zE(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${zE(this.greys.white)});
        ---color-border: var(--color-border, ${zE(this.greys.light75)});
        ---color-text: var(--color-text, ${zE(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${zE(this.greys.white)});
        ---color-link: var(--color-link, ${zE(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${zE(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${zE(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${zE(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${zE(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${zE(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${zE(this.greys.dark75)});

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
    `}}customElements.define("decidables-button",class extends yP{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,qE`
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

          outline: none;

          border: 0;
          border-radius: var(---border-radius);
        }

        button:disabled {
          outline: none;

          background-color: var(---decidables-button-background-color-disabled);
          box-shadow: none;
        }

        button:enabled {
          cursor: pointer;
          outline: none;

          background-color: var(---decidables-button-background-color-enabled);
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

        button:enabled:focus-visible {
          outline: none;

          box-shadow: var(---shadow-4);
        }

        button:enabled:focus-visible:active {
          outline: none;

          box-shadow: var(---shadow-8);
        }
      `]}render(){return kA`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wP=t=>t??SA;customElements.define("decidables-slider",class extends yP{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,qE`
        :host {
          ---decidables-slider-background-color: var(--decidables-slider-background-color, var(---color-element-disabled));
          ---decidables-slider-color: var(--decidables-slider-color, var(---color-element-enabled));
          ---decidables-spinner-background-color: var(--decidables-slider-background-color, none);

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

        /* Overall */
        input[type=range] {
          width: 3.5rem;
          height: 4.75rem;

          padding: 0;
          margin: 0;
          
          appearance: none;

          background-color: unset;

          direction: rtl;
          writing-mode: vertical-lr;
        }

        input[type=range]:enabled {
          cursor: ns-resize;
        }

        input[type=range]:focus {
          outline: none;
        }

        /* Track */
        input[type=range]::-webkit-slider-runnable-track {
          width: 4px;
          height: 100%;

          background: var(---decidables-slider-background-color);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        input[type=range]:focus::-webkit-slider-runnable-track {
          background: var(---decidables-slider-background-color);
        }

        input[type=range]::-moz-range-track {
          width: 4px;
          height: 100%;

          background: var(---decidables-slider-background-color);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* Thumb */
        input[type=range]::-webkit-slider-thumb {
          width: 20px;
          height: 10px;

          margin-left: -8px;

          appearance: none;

          border: 0;
          border-radius: 4px;
        }

        input[type=range]:disabled::-webkit-slider-thumb {
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        input[type=range]:enabled::-webkit-slider-thumb {
          background: var(---decidables-slider-color);
          box-shadow: var(---shadow-2);
        }

        input[type=range]:enabled:hover::-webkit-slider-thumb {
          box-shadow: var(---shadow-4);
        }

        input[type=range]:enabled:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8);
        }

        input[type=range]:enabled:focus-visible::-webkit-slider-thumb {
          box-shadow: var(---shadow-4);
        }

        input[type=range]:enabled:focus-visible:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8);
        }

        input[type=range]::-moz-range-thumb {
          width: 20px;
          height: 10px;

          border: 0;
          border-radius: 4px;
        }

        input[type=range]:disabled::-moz-range-thumb {
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        input[type=range]:enabled::-moz-range-thumb {
          background: var(---decidables-slider-color);
          box-shadow: var(---shadow-2);
        }

        input[type=range]:enabled:hover::-moz-range-thumb {
          box-shadow: var(---shadow-4);
        }

        input[type=range]:enabled:active::-moz-range-thumb {
          box-shadow: var(---shadow-8);
        }

        input[type=range]:enabled:focus-visible::-moz-range-thumb {
          box-shadow: var(---shadow-4);
        }

        input[type=range]:enabled:focus-visible:active::-moz-range-thumb {
          box-shadow: var(---shadow-8);
        }

        /* Tick marks */
        .datalist {
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

        .option {
          line-height: 0.8;

          white-space: nowrap;
        }

        .option::before {
          content: "– ";
        }
      `]}render(){return kA`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${wP(this.rangeMin)} max=${wP(this.rangeMax)} step=${wP(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?kA`
            <div class="datalist">
              <div class="option">${wP(this.max)}</div>
              <div class="option">${wP(this.min)}</div>
            </div>
          `:kA``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${wP(this.min)} max=${wP(this.max)} step=${wP(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}});customElements.define("decidables-spinner",class extends yP{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${wP(this.min)} max=${wP(this.max)} step=${wP(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});customElements.define("decidables-switch",class extends yP{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,qE`
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

          outline: 0;

          content: "";
          
          transform: translate(-50%, 0);

          transition: all var(---transition-duration) ease;
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

        input[type=checkbox]:enabled:focus-visible + label + label::after {
          box-shadow: var(---shadow-4);
        }

        input[type=checkbox]:enabled:focus-visible + label + label:active::after,
        input[type=checkbox]:enabled:focus-visible:active + label + label::after {
          box-shadow: var(---shadow-8);
        }
        `]}render(){return kA`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}});customElements.define("decidables-toggle",class extends yP{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}});customElements.define("decidables-toggle-option",class extends yP{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,qE`
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
          outline: none;

          background-color: var(---color-element-enabled);
          border: 0;
          border-radius: 0;
          box-shadow: var(---shadow-2);
        }

        input[type=radio]:checked + label {
          outline: none;

          background-color: var(---color-element-selected);
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

        input[type=radio]:focus-visible + label {
          z-index: 1;

          outline: none;

          box-shadow: var(---shadow-4);
        }

        input[type=radio]:focus-visible:checked + label {
          z-index: 1;

          outline: none;

          background-color: var(---color-element-selected);
          box-shadow: var(---shadow-4);
        }

        input[type=radio]:focus-visible + label:active {
          z-index: 2;

          outline: none;

          box-shadow: var(---shadow-8);
        }
      `]}render(){return kA`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}});const xP={fromAttribute:t=>t.split(/\s+/).map(t=>Number.parseFloat(t)),toAttribute:t=>t.length?t.map(t=>t.toFixed(3)).join(" "):null},kP={fromAttribute:t=>new Set(t.split(/\s+/)),toAttribute:t=>t.size?[...t].join(" "):null};function $P(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}var _P={h:"#4daf4a",m:"#ff7f00",fa:"#377eb8",cr:"#e41a1c",hr:"#ffff33",far:"#984ea3",acc:"#999999",d:"#f781bf",c:"#a65628",s:"#4545d0",present:"#f032e6",absent:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"};class SP extends yP{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return _P}static get lights(){return Object.keys(SP.colors).reduce((t,e)=>(t[e]=RC(SP.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(SP.colors).reduce((t,e)=>(t[e]=RC(SP.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,qE`
        :host {
          ---color-h: var(--color-h, ${zE(this.colors.h)});
          ---color-m: var(--color-m, ${zE(this.colors.m)});
          ---color-fa: var(--color-fa, ${zE(this.colors.fa)});
          ---color-cr: var(--color-cr, ${zE(this.colors.cr)});
          ---color-hr: var(--color-hr, ${zE(this.colors.hr)});
          ---color-far: var(--color-far, ${zE(this.colors.far)});
          ---color-acc: var(--color-acc, ${zE(this.colors.acc)});
          ---color-d: var(--color-d, ${zE(this.colors.d)});
          ---color-c: var(--color-c, ${zE(this.colors.c)});
          ---color-s: var(--color-s, ${zE(this.colors.s)});
          ---color-present: var(--color-present, ${zE(this.colors.present)});
          ---color-absent: var(--color-absent, ${zE(this.colors.absent)});
          ---color-correct: var(--color-correct, ${zE(this.colors.correct)});
          ---color-error: var(--color-error, ${zE(this.colors.error)});
          ---color-nr: var(--color-nr, ${zE(this.colors.nr)});

          ---color-h-light: var(--color-h-light, ${zE(this.lights.h)});
          ---color-m-light: var(--color-m-light, ${zE(this.lights.m)});
          ---color-fa-light: var(--color-fa-light, ${zE(this.lights.fa)});
          ---color-cr-light: var(--color-cr-light, ${zE(this.lights.cr)});
          ---color-hr-light: var(--color-hr-light, ${zE(this.lights.hr)});
          ---color-far-light: var(--color-far-light, ${zE(this.lights.far)});
          ---color-acc-light: var(--color-acc-light, ${zE(this.lights.acc)});
          ---color-d-light: var(--color-d-light, ${zE(this.lights.d)});
          ---color-c-light: var(--color-c-light, ${zE(this.lights.c)});
          ---color-s-light: var(--color-s-light, ${zE(this.lights.s)});
          ---color-present-light: var(--color-present-light, ${zE(this.lights.present)});
          ---color-absent-light: var(--color-absent-light, ${zE(this.lights.absent)});
          ---color-correct-light: var(--color-correct-light, ${zE(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${zE(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${zE(this.lights.nr)});

          ---color-h-dark: var(--color-h-dark, ${zE(this.darks.h)});
          ---color-m-dark: var(--color-m-dark, ${zE(this.darks.m)});
          ---color-fa-dark: var(--color-fa-dark, ${zE(this.darks.fa)});
          ---color-cr-dark: var(--color-cr-dark, ${zE(this.darks.cr)});
          ---color-hr-dark: var(--color-hr-dark, ${zE(this.darks.hr)});
          ---color-far-dark: var(--color-far-dark, ${zE(this.darks.far)});
          ---color-acc-dark: var(--color-acc-dark, ${zE(this.darks.acc)});
          ---color-d-dark: var(--color-d-dark, ${zE(this.darks.d)});
          ---color-c-dark: var(--color-c-dark, ${zE(this.darks.c)});
          ---color-s-dark: var(--color-s-dark, ${zE(this.darks.s)});
          ---color-present-dark: var(--color-present-dark, ${zE(this.darks.present)});
          ---color-absent-dark: var(--color-absent-dark, ${zE(this.darks.absent)});
          ---color-correct-dark: var(--color-correct-dark, ${zE(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${zE(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${zE(this.darks.nr)});
        }
      `]}}customElements.define("detectable-control",class extends SP{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.duration=void 0,this.coherence=void 0,this.payoff=void 0,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color=void 0,this.zRoc=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}setPayoff(t){this.payoff=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-payoff",{detail:{payoff:this.payoff},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-color",{detail:{color:this.color},bubbles:!0}))}flipZRoc(t){this.zRoc=t.target.checked,this.dispatchEvent(new CustomEvent("detectable-control-z-roc",{detail:{zRoc:this.zRoc},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("detectable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("detectable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("detectable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA`
      <div class="holder">
        ${null!=this.trials?kA`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:kA``}
        ${null!=this.duration?kA`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:kA``}
        ${null!=this.coherence?kA`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:kA``}
        ${null!=this.payoff?kA`<decidables-slider class="payoff" min="0" max="100" step="1" .value=${this.payoff} @change=${this.setPayoff.bind(this)} @input=${this.setPayoff.bind(this)}>Payoff</decidables-slider>`:kA``}
        ${null!=this.color?kA`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="accuracy" ?checked=${"accuracy"===this.color}>Accuracy</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="stimulus" ?checked=${"stimulus"===this.color}>Stimulus</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="response" ?checked=${"response"===this.color}>Response</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:kA``}
        ${null!=this.zRoc?kA`
            <decidables-switch ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidables-switch>
          `:kA``}
        ${this.run||this.pause||this.reset?kA`
            <div class="buttons">
              ${this.run?kA`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:kA``}
              ${this.pause?kA`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:kA``}
              ${this.reset?kA`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:kA``}
            </div>
          `:kA``}
      </div>`}});customElements.define("detectable-response",class extends SP{static get properties(){return{feedback:{attribute:"feedback",type:String,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedbacks=["none","accuracy","outcome"],this.feedback="outcome",this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.hPayoff=0,this.mPayoff=0,this.crPayoff=0,this.faPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["present","absent"],this.signal=void 0,this.responses=["present","absent"],this.response=void 0,this.outcomes=["h","m","fa","cr","nr"],this.outcome=void 0,this.accuracies=["c","e","nr"],this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.c=0,this.e=0,this.nr=0}get trialPayoff(){switch(this.outcome){case"h":return this.hPayoff;case"m":return this.mPayoff;case"fa":return this.faPayoff;case"cr":return this.crPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.h*this.hPayoff+this.m*this.mPayoff+this.cr*this.crPayoff+this.fa*this.faPayoff+this.nr*this.nrPayoff}start(t,e){this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.nr+=1,this.accuracy="nr")}present(){this.responded("present")}absent(){this.responded("absent")}responded(t){this.state="feedback",this.response=t,"present"===this.signal&&"present"===this.response?(this.outcome="h",this.h+=1,this.accuracy="c",this.c+=1):"present"===this.signal&&"absent"===this.response?(this.outcome="m",this.m+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"present"===this.response?(this.outcome="fa",this.fa+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"absent"===this.response&&(this.outcome="cr",this.cr+=1,this.accuracy="c",this.c+=1),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{trial:this.trialCount,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:this.nr,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.nr=0,this.c=0,this.e=0}keydown(t){"waiting"===this.state&&("ArrowUp"===t.key?(this.responded("present"),t.preventDefault()):"ArrowDown"===t.key&&(this.responded("absent"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,qE`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return kA`
      <div class="holder">
        <div class="responses">
          <decidables-button name="present" class=${"feedback"===this.state&&"present"===this.response?"selected":"waiting"===this.state?"waiting":""} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.present.bind(this)}>Present</decidables-button>
          <decidables-button name="absent" class=${"feedback"===this.state&&"absent"===this.response?"selected":"waiting"===this.state?"waiting":""} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.absent.bind(this)}>Absent</decidables-button>
        </div>
        ${this.trial||"none"!==this.feedback||"total"===this.payoff?kA`
            <div class="feedbacks">
              ${this.trial?kA`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:kA``}
              ${"none"!==this.feedback?kA`
                  <div class=${`feedback ${"feedback"===this.state?"outcome"===this.feedback?this.outcome:this.accuracy:""}`}>
                    ${"feedback"===this.state?"outcome"===this.feedback?"h"===this.outcome?kA`<span class="outcome">Hit</span>`:"m"===this.outcome?kA`<span class="outcome">Miss</span>`:"fa"===this.outcome?kA`<span class="outcome">False<br>Alarm</span>`:"cr"===this.outcome?kA`<span class="outcome">Correct<br>Rejection</span>`:kA`<span class="outcome">No<br>Response</span>`:"c"===this.accuracy?kA`<span class="outcome">Correct</span>`:"e"===this.accuracy?kA`<span class="outcome">Error</span>`:kA`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?kA``:kA`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:kA``}
              ${"total"===this.payoff?kA`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:kA``}
            </div>`:kA``}
      </div>`}});var EP={exports:{}};EP.exports=function(){var t=function(t,e){var r=Array.prototype.concat,n=Array.prototype.slice,i=Object.prototype.toString;function s(e,r){var n=e>r?e:r;return t.pow(10,17-~~(t.log(n>0?n:-n)*t.LOG10E))}var a=Array.isArray||function(t){return"[object Array]"===i.call(t)};function o(t){return"[object Function]"===i.call(t)}function l(t){return"number"==typeof t&&t-t===0}function c(t){return r.apply([],t)}function u(){return new u._init(arguments)}function h(){return 0}function d(){return 1}function f(t,e){return t===e?1:0}u.fn=u.prototype,u._init=function(t){if(a(t[0]))if(a(t[0][0])){o(t[1])&&(t[0]=u.map(t[0],t[1]));for(var e=0;e<t[0].length;e++)this[e]=t[0][e];this.length=t[0].length}else this[0]=o(t[1])?u.map(t[0],t[1]):t[0],this.length=1;else if(l(t[0]))this[0]=u.seq.apply(null,t),this.length=1;else{if(t[0]instanceof u)return u(t[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:s,isArray:a,isFunction:o,isNumber:l,toVector:c},u._random_fn=t.random,u.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");u._random_fn=t},u.extend=function(t){var e,r;if(1===arguments.length){for(r in t)u[r]=t[r];return this}for(e=1;e<arguments.length;e++)for(r in arguments[e])t[r]=arguments[e][r];return t},u.rows=function(t){return t.length||1},u.cols=function(t){return t[0].length||1},u.dimensions=function(t){return{rows:u.rows(t),cols:u.cols(t)}},u.row=function(t,e){return a(e)?e.map(function(e){return u.row(t,e)}):t[e]},u.rowa=function(t,e){return u.row(t,e)},u.col=function(t,e){if(a(e)){var r=u.arange(t.length).map(function(){return new Array(e.length)});return e.forEach(function(e,n){u.arange(t.length).forEach(function(i){r[i][n]=t[i][e]})}),r}for(var n=new Array(t.length),i=0;i<t.length;i++)n[i]=[t[i][e]];return n},u.cola=function(t,e){return u.col(t,e).map(function(t){return t[0]})},u.diag=function(t){for(var e=u.rows(t),r=new Array(e),n=0;n<e;n++)r[n]=[t[n][n]];return r},u.antidiag=function(t){for(var e=u.rows(t)-1,r=new Array(e),n=0;e>=0;e--,n++)r[n]=[t[n][e]];return r},u.transpose=function(t){var e,r,n,i,s,o=[];for(a(t[0])||(t=[t]),r=t.length,n=t[0].length,s=0;s<n;s++){for(e=new Array(r),i=0;i<r;i++)e[i]=t[i][s];o.push(e)}return 1===o.length?o[0]:o},u.map=function(t,e,r){var n,i,s,o,l;for(a(t[0])||(t=[t]),i=t.length,s=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(s)),l=0;l<s;l++)o[n][l]=e(t[n][l],n,l);return 1===o.length?o[0]:o},u.cumreduce=function(t,e,r){var n,i,s,o,l;for(a(t[0])||(t=[t]),i=t.length,s=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(s)),s>0&&(o[n][0]=t[n][0]),l=1;l<s;l++)o[n][l]=e(o[n][l-1],t[n][l]);return 1===o.length?o[0]:o},u.alter=function(t,e){return u.map(t,e,!0)},u.create=function(t,e,r){var n,i,s=new Array(t);for(o(e)&&(r=e,e=t),n=0;n<t;n++)for(s[n]=new Array(e),i=0;i<e;i++)s[n][i]=r(n,i);return s},u.zeros=function(t,e){return l(e)||(e=t),u.create(t,e,h)},u.ones=function(t,e){return l(e)||(e=t),u.create(t,e,d)},u.rand=function(t,e){return l(e)||(e=t),u.create(t,e,u._random_fn)},u.identity=function(t,e){return l(e)||(e=t),u.create(t,e,f)},u.symmetric=function(t){var e,r,n=t.length;if(t.length!==t[0].length)return!1;for(e=0;e<n;e++)for(r=0;r<n;r++)if(t[r][e]!==t[e][r])return!1;return!0},u.clear=function(t){return u.alter(t,h)},u.seq=function(t,e,r,n){o(n)||(n=!1);var i,a=[],l=s(t,e),c=(e*l-t*l)/((r-1)*l),u=t;for(i=0;u<=e&&i<r;u=(t*l+c*l*++i)/l)a.push(n?n(u,i):u);return a},u.arange=function(t,r,n){var i,s=[];if(n=n||1,r===e&&(r=t,t=0),t===r||0===n)return[];if(t<r&&n<0)return[];if(t>r&&n>0)return[];if(n>0)for(i=t;i<r;i+=n)s.push(i);else for(i=t;i>r;i+=n)s.push(i);return s},u.slice=function(){function t(t,r,n,i){var s,a=[],o=t.length;if(r===e&&n===e&&i===e)return u.copy(t);if(i=i||1,(r=(r=r||0)>=0?r:o+r)===(n=(n=n||t.length)>=0?n:o+n)||0===i)return[];if(r<n&&i<0)return[];if(r>n&&i>0)return[];if(i>0)for(s=r;s<n;s+=i)a.push(t[s]);else for(s=r;s>n;s+=i)a.push(t[s]);return a}function r(e,r){var n,i;return l((r=r||{}).row)?l(r.col)?e[r.row][r.col]:t(u.rowa(e,r.row),(n=r.col||{}).start,n.end,n.step):l(r.col)?t(u.cola(e,r.col),(i=r.row||{}).start,i.end,i.step):(i=r.row||{},n=r.col||{},t(e,i.start,i.end,i.step).map(function(e){return t(e,n.start,n.end,n.step)}))}return r}(),u.sliceAssign=function(r,n,i){var s,a;if(l(n.row)){if(l(n.col))return r[n.row][n.col]=i;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,s=u.arange(n.col.start,t.min(r.length,n.col.end),n.col.step);var o=n.row;return s.forEach(function(t,e){r[o][t]=i[e]}),r}if(l(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,a=u.arange(n.row.start,t.min(r[0].length,n.row.end),n.row.step);var c=n.col;return a.forEach(function(t,e){r[t][c]=i[e]}),r}return i[0].length===e&&(i=[i]),n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,a=u.arange(n.row.start,t.min(r.length,n.row.end),n.row.step),s=u.arange(n.col.start,t.min(r[0].length,n.col.end),n.col.step),a.forEach(function(t,e){s.forEach(function(n,s){r[t][n]=i[e][s]})}),r},u.diagonal=function(t){var e=u.zeros(t.length,t.length);return t.forEach(function(t,r){e[r][r]=t}),e},u.copy=function(t){return t.map(function(t){return l(t)?t:t.map(function(t){return t})})};var p=u.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},p.map=function(t,e){return u(u.map(this,t,e))},p.cumreduce=function(t,e){return u(u.cumreduce(this,t,e))},p.alter=function(t){return u.alter(this,t),this},function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e){var r,n=this;return e?(setTimeout(function(){e.call(n,p[t].call(n))}),this):(r=u[t](this),a(r)?u(r):r)}})(t[e])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e,r){var n=this;return r?(setTimeout(function(){r.call(n,p[t].call(n,e))}),this):u(u[t](this,e))}})(t[e])}("row col".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(){return u(u[t].apply(null,arguments))}})(t[e])}("create zeros ones rand identity".split(" ")),u}(Math);return function(t,e){var r=t.utils.isFunction;function n(t,e){return t-e}function i(t,r,n){return e.max(r,e.min(t,n))}t.sum=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.sumsqrd=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r]*t[r];return e},t.sumsqerr=function(e){for(var r,n=t.mean(e),i=0,s=e.length;--s>=0;)i+=(r=e[s]-n)*r;return i},t.sumrow=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.product=function(t){for(var e=1,r=t.length;--r>=0;)e*=t[r];return e},t.min=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]<e&&(e=t[r]);return e},t.max=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]>e&&(e=t[r]);return e},t.unique=function(t){for(var e={},r=[],n=0;n<t.length;n++)e[t[n]]||(e[t[n]]=!0,r.push(t[n]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(r){var n=r.map(e.log),i=t.mean(n);return e.exp(i)},t.median=function(t){var e=t.length,r=t.slice().sort(n);return 1&e?r[e/2|0]:(r[e/2-1]+r[e/2])/2},t.cumsum=function(e){return t.cumreduce(e,function(t,e){return t+e})},t.cumprod=function(e){return t.cumreduce(e,function(t,e){return t*e})},t.diff=function(t){var e,r=[],n=t.length;for(e=1;e<n;e++)r.push(t[e]-t[e-1]);return r},t.rank=function(t){var e,r=[],i={};for(e=0;e<t.length;e++)i[l=t[e]]?i[l]++:(i[l]=1,r.push(l));var s=r.sort(n),a={},o=1;for(e=0;e<s.length;e++){var l,c=i[l=s[e]],u=(o+(o+c-1))/2;a[l]=u,o+=c}return t.map(function(t){return a[t]})},t.mode=function(t){var e,r=t.length,i=t.slice().sort(n),s=1,a=0,o=0,l=[];for(e=0;e<r;e++)i[e]===i[e+1]?s++:(s>a?(l=[i[e]],a=s,o=0):s===a&&(l.push(i[e]),o++),s=1);return 0===o?l[0]:l},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,r){return t.sumsqerr(e)/(e.length-(r?1:0))},t.pooledvariance=function(e){var r=e.reduce(function(e,r){return e+t.sumsqerr(r)},0),n=e.reduce(function(t,e){return t+e.length},0);return r/(n-e.length)},t.deviation=function(e){for(var r=t.mean(e),n=e.length,i=new Array(n),s=0;s<n;s++)i[s]=e[s]-r;return i},t.stdev=function(r,n){return e.sqrt(t.variance(r,n))},t.pooledstdev=function(r){return e.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var n=t.mean(r),i=[],s=r.length-1;s>=0;s--)i.push(e.abs(r[s]-n));return t.mean(i)},t.meddev=function(r){for(var n=t.median(r),i=[],s=r.length-1;s>=0;s--)i.push(e.abs(r[s]-n));return t.median(i)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(t){var r=t.length,i=t.slice().sort(n);return[i[e.round(r/4)-1],i[e.round(r/2)-1],i[e.round(3*r/4)-1]]},t.quantiles=function(t,r,s,a){var o,l,c,u,h,d=t.slice().sort(n),f=[r.length],p=t.length;for(void 0===s&&(s=3/8),void 0===a&&(a=3/8),o=0;o<r.length;o++)c=p*(l=r[o])+(s+l*(1-s-a)),u=e.floor(i(c,1,p-1)),h=i(c-u,0,1),f[o]=(1-h)*d[u-1]+h*d[u];return f},t.percentile=function(t,e,r){var i=t.slice().sort(n),s=e*(i.length+(r?1:-1))+(r?0:1),a=parseInt(s),o=s-a;return a+1<i.length?i[a-1]+o*(i[a]-i[a-1]):i[a-1]},t.percentileOfScore=function(t,e,r){var n,i,s=0,a=t.length,o=!1;for("strict"===r&&(o=!0),i=0;i<a;i++)n=t[i],(o&&n<e||!o&&n<=e)&&s++;return s/a},t.histogram=function(r,n){n=n||4;var i,s=t.min(r),a=(t.max(r)-s)/n,o=r.length,l=[];for(i=0;i<n;i++)l[i]=0;for(i=0;i<o;i++)l[e.min(e.floor((r[i]-s)/a),n-1)]+=1;return l},t.covariance=function(e,r){var n,i=t.mean(e),s=t.mean(r),a=e.length,o=new Array(a);for(n=0;n<a;n++)o[n]=(e[n]-i)*(r[n]-s);return t.sum(o)/(a-1)},t.corrcoeff=function(e,r){return t.covariance(e,r)/t.stdev(e,1)/t.stdev(r,1)},t.spearmancoeff=function(e,r){return e=t.rank(e),r=t.rank(r),t.corrcoeff(e,r)},t.stanMoment=function(r,n){for(var i=t.mean(r),s=t.stdev(r),a=r.length,o=0,l=0;l<a;l++)o+=e.pow((r[l]-i)/s,n);return o/r.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var s=t.prototype;!function(e){for(var n=0;n<e.length;n++)(function(e){s[e]=function(n,i){var a=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,s[e].call(l,n))}),this;if(this.length>1){for(l=!0===n?this:this.transpose();o<l.length;o++)a[o]=t[e](l[o]);return a}return t[e](this[0],n)}})(e[n])}("cumsum cumprod".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){s[e]=function(n,i){var a=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,s[e].call(l,n))}),this;if(this.length>1){for("sumrow"!==e&&(l=!0===n?this:this.transpose());o<l.length;o++)a[o]=t[e](l[o]);return!0===n?t[e](t.utils.toVector(a)):a}return t[e](this[0],n)}})(e[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){s[e]=function(){var n,i=[],a=0,o=this,l=Array.prototype.slice.call(arguments);if(r(l[l.length-1])){n=l[l.length-1];var c=l.slice(0,l.length-1);return setTimeout(function(){n.call(o,s[e].apply(o,c))}),this}n=void 0;var u=function(r){return t[e].apply(o,[r].concat(l))};if(this.length>1){for(o=o.transpose();a<o.length;a++)i[a]=u(o[a]);return i}return u(this[0])}})(e[n])}("quantiles percentileOfScore".split(" "))}(t,Math),function(t,e){t.gammaln=function(t){var r,n,i,s=0,a=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],o=1.000000000190015;for(i=(n=r=t)+5.5,i-=(r+.5)*e.log(i);s<6;s++)o+=a[s]/++n;return e.log(2.5066282746310007*o/r)-i},t.loggam=function(t){var r,n,i,s,a,o,l,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,l=0,1==t||2==t)return 0;for(t<=7&&(r=t+(l=e.floor(7-t))),n=1/(r*r),i=2*e.PI,a=c[9],o=8;o>=0;o--)a*=n,a+=c[o];if(s=a/r+.5*e.log(i)+(r-.5)*e.log(r)-r,t<=7)for(o=1;o<=l;o++)s-=e.log(r-1),r-=1;return s},t.gammafn=function(t){var r,n,i,s,a=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],o=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,c=0,u=0,h=0,d=t;if(t>171.6243769536076)return 1/0;if(d<=0){if(!(s=d%1+36e-17))return 1/0;l=(1&d?-1:1)*e.PI/e.sin(e.PI*s),d=1-d}for(i=d,n=d<1?d++:(d-=c=(0|d)-1)-1,r=0;r<8;++r)h=(h+a[r])*n,u=u*n+o[r];if(s=h/u+1,i<d)s/=i;else if(i>d)for(r=0;r<c;++r)s*=d,d++;return l&&(s=l/s),s},t.gammap=function(e,r){return t.lowRegGamma(e,r)*t.gammafn(e)},t.lowRegGamma=function(r,n){var i,s=t.gammaln(r),a=r,o=1/r,l=o,c=n+1-r,u=1/1e-30,h=1/c,d=h,f=1,p=-~(8.5*e.log(r>=1?r:1/r)+.4*r+17);if(n<0||r<=0)return NaN;if(n<r+1){for(;f<=p;f++)o+=l*=n/++a;return o*e.exp(-n+r*e.log(n)-s)}for(;f<=p;f++)d*=(h=1/(h=(i=-f*(f-r))*h+(c+=2)))*(u=c+i/u);return 1-d*e.exp(-n+r*e.log(n)-s)},t.factorialln=function(e){return e<0?NaN:t.gammaln(e+1)},t.factorial=function(e){return e<0?NaN:t.gammafn(e+1)},t.combination=function(r,n){return r>170||n>170?e.exp(t.combinationln(r,n)):t.factorial(r)/t.factorial(n)/t.factorial(r-n)},t.combinationln=function(e,r){return t.factorialln(e)-t.factorialln(r)-t.factorialln(e-r)},t.permutation=function(e,r){return t.factorial(e)/t.factorial(e-r)},t.betafn=function(r,n){if(!(r<=0||n<=0))return r+n>170?e.exp(t.betaln(r,n)):t.gammafn(r)*t.gammafn(n)/t.gammafn(r+n)},t.betaln=function(e,r){return t.gammaln(e)+t.gammaln(r)-t.gammaln(e+r)},t.betacf=function(t,r,n){var i,s,a,o,l=1e-30,c=1,u=r+n,h=r+1,d=r-1,f=1,p=1-u*t/h;for(e.abs(p)<l&&(p=l),o=p=1/p;c<=100&&(p=1+(s=c*(n-c)*t/((d+(i=2*c))*(r+i)))*p,e.abs(p)<l&&(p=l),f=1+s/f,e.abs(f)<l&&(f=l),o*=(p=1/p)*f,p=1+(s=-(r+c)*(u+c)*t/((r+i)*(h+i)))*p,e.abs(p)<l&&(p=l),f=1+s/f,e.abs(f)<l&&(f=l),o*=a=(p=1/p)*f,!(e.abs(a-1)<3e-7));c++);return o},t.gammapinv=function(r,n){var i,s,a,o,l,c,u=0,h=n-1,d=1e-8,f=t.gammaln(n);if(r>=1)return e.max(100,n+100*e.sqrt(n));if(r<=0)return 0;for(n>1?(l=e.log(h),c=e.exp(h*(l-1)-f),o=r<.5?r:1-r,i=(2.30753+.27061*(s=e.sqrt(-2*e.log(o))))/(1+s*(.99229+.04481*s))-s,r<.5&&(i=-i),i=e.max(.001,n*e.pow(1-1/(9*n)-i/(3*e.sqrt(n)),3))):i=r<(s=1-n*(.253+.12*n))?e.pow(r/s,1/n):1-e.log(1-(r-s)/(1-s));u<12;u++){if(i<=0)return 0;if((i-=s=(a=(t.lowRegGamma(n,i)-r)/(s=n>1?c*e.exp(-(i-h)+h*(e.log(i)-l)):e.exp(-i+h*e.log(i)-f)))/(1-.5*e.min(1,a*((n-1)/i-1))))<=0&&(i=.5*(i+s)),e.abs(s)<d*i)break}return i},t.erf=function(t){var r,n,i,s,a=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],o=a.length-1,l=!1,c=0,u=0;for(t<0&&(t=-t,l=!0),n=4*(r=2/(2+t))-2;o>0;o--)i=c,c=n*c-u+a[o],u=i;return s=r*e.exp(-t*t+.5*(a[0]+n*c)-u),l?s-1:1-s},t.erfc=function(e){return 1-t.erf(e)},t.erfcinv=function(r){var n,i,s,a,o=0;if(r>=2)return-100;if(r<=0)return 100;for(a=r<1?r:2-r,n=-.70711*((2.30753+.27061*(s=e.sqrt(-2*e.log(a/2))))/(1+s*(.99229+.04481*s))-s);o<2;o++)n+=(i=t.erfc(n)-a)/(1.1283791670955126*e.exp(-n*n)-n*i);return r<1?n:-n},t.ibetainv=function(r,n,i){var s,a,o,l,c,u,h,d,f,p,m=1e-8,g=n-1,b=i-1,v=0;if(r<=0)return 0;if(r>=1)return 1;for(n>=1&&i>=1?(o=r<.5?r:1-r,u=(2.30753+.27061*(l=e.sqrt(-2*e.log(o))))/(1+l*(.99229+.04481*l))-l,r<.5&&(u=-u),h=(u*u-3)/6,d=2/(1/(2*n-1)+1/(2*i-1)),f=u*e.sqrt(h+d)/d-(1/(2*i-1)-1/(2*n-1))*(h+5/6-2/(3*d)),u=n/(n+i*e.exp(2*f))):(s=e.log(n/(n+i)),a=e.log(i/(n+i)),u=r<(l=e.exp(n*s)/n)/(f=l+(c=e.exp(i*a)/i))?e.pow(n*f*r,1/n):1-e.pow(i*f*(1-r),1/i)),p=-t.gammaln(n)-t.gammaln(i)+t.gammaln(n+i);v<10;v++){if(0===u||1===u)return u;if((u-=l=(c=(t.ibeta(u,n,i)-r)/(l=e.exp(g*e.log(u)+b*e.log(1-u)+p)))/(1-.5*e.min(1,c*(g/u-b/(1-u)))))<=0&&(u=.5*(u+l)),u>=1&&(u=.5*(u+l+1)),e.abs(l)<m*u&&v>0)break}return u},t.ibeta=function(r,n,i){var s=0===r||1===r?0:e.exp(t.gammaln(n+i)-t.gammaln(n)-t.gammaln(i)+n*e.log(r)+i*e.log(1-r));return!(r<0||r>1)&&(r<(n+1)/(n+i+2)?s*t.betacf(r,n,i)/n:1-s*t.betacf(1-r,i,n)/i)},t.randn=function(r,n){var i,s,a,o,l;if(n||(n=r),r)return t.create(r,n,function(){return t.randn()});do{i=t._random_fn(),s=1.7156*(t._random_fn()-.5),l=(a=i-.449871)*a+(o=e.abs(s)+.386595)*(.196*o-.25472*a)}while(l>.27597&&(l>.27846||s*s>-4*e.log(i)*i*i));return s/i},t.randg=function(r,n,i){var s,a,o,l,c,u,h=r;if(i||(i=n),r||(r=1),n)return(u=t.zeros(n,i)).alter(function(){return t.randg(r)}),u;r<1&&(r+=1),s=r-1/3,a=1/e.sqrt(9*s);do{do{l=1+a*(c=t.randn())}while(l<=0);l*=l*l,o=t._random_fn()}while(o>1-.331*e.pow(c,4)&&e.log(o)>.5*c*c+s*(1-l+e.log(l)));if(r==h)return s*l;do{o=t._random_fn()}while(0===o);return e.pow(o,1/h)*s*l},function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t.map(this,function(r){return t[e](r)}))}})(e[r])}("gammaln gammafn factorial factorialln".split(" ")),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t[e].apply(null,arguments))}})(e[r])}("randn".split(" "))}(t,Math),function(t,e){function r(t,r,n,i){for(var s,a=0,o=1,l=1,c=1,u=0,h=0;e.abs((l-h)/l)>i;)h=l,o=c+(s=-(r+u)*(r+n+u)*t/(r+2*u)/(r+2*u+1))*o,l=(a=l+s*a)+(s=(u+=1)*(n-u)*t/(r+2*u-1)/(r+2*u))*l,a/=c=o+s*c,o/=c,l/=c,c=1;return l/r}function n(t){return t/e.abs(t)}function i(r,n,i){var s=12,a=6,o=-30,l=-50,c=60,u=8,h=3,d=2,f=3,p=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],m=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],g=.5*r;if(g>=u)return 1;var b,v=2*t.normal.cdf(g,0,1,1,0)-1;v=v>=e.exp(l/i)?e.pow(v,i):0;for(var y=g,w=(u-g)/(b=r>h?d:f),x=y+w,k=0,$=i-1,_=1;_<=b;_++){for(var S=0,E=.5*(x+y),A=.5*(x-y),M=1;M<=s;M++){var T,C=E+A*(a<M?p[(T=s-M+1)-1]:-p[(T=M)-1]),N=C*C;if(N>c)break;var R=2*t.normal.cdf(C,0,1,1,0)*.5-2*t.normal.cdf(C,r,1,1,0)*.5;R>=e.exp(o/$)&&(S+=R=m[T-1]*e.exp(-.5*N)*e.pow(R,$))}k+=S*=2*A*i/e.sqrt(2*e.PI),y=x,x+=w}return(v+=k)<=e.exp(o/n)?0:(v=e.pow(v,n))>=1?1:v}function s(t,r,n){var i=.322232421088,s=.099348462606,a=-1,o=.588581570495,l=-.342242088547,c=.531103462366,u=-.204231210125,h=.10353775285,d=-453642210148e-16,f=.0038560700634,p=.8832,m=.2368,g=1.208,b=1.4142,v=120,y=.5-.5*t,w=e.sqrt(e.log(1/(y*y))),x=w+((((w*d+u)*w+l)*w+a)*w+i)/((((w*f+h)*w+c)*w+o)*w+s);n<v&&(x+=(x*x*x+x)/n/4);var k=p-m*x;return n<v&&(k+=-1.214/n+g*x/n),x*(k*e.log(r-1)+b)}!function(e){for(var r=0;r<e.length;r++)(function(e){t[e]=function t(e,r,n){return this instanceof t?(this._a=e,this._b=r,this._c=n,this):new t(e,r,n)},t.fn[e]=function(r,n,i){var s=t[e](r,n,i);return s.data=this,s},t[e].prototype.sample=function(r){var n=this._a,i=this._b,s=this._c;return r?t.alter(r,function(){return t[e].sample(n,i,s)}):t[e].sample(n,i,s)},function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(n){var i=this._a,s=this._b,a=this._c;return n||0===n||(n=this.data),"number"!=typeof n?t.fn.map.call(n,function(n){return t[e][r](n,i,s,a)}):t[e][r](n,i,s,a)}})(r[n])}("pdf cdf inv".split(" ")),function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(){return t[e][r](this._a,this._b,this._c)}})(r[n])}("mean median mode variance".split(" "))})(e[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,n,i){return r>1||r<0?0:1==n&&1==i?1:n<512&&i<512?e.pow(r,n-1)*e.pow(1-r,i-1)/t.betafn(n,i):e.exp((n-1)*e.log(r)+(i-1)*e.log(1-r)-t.betaln(n,i))},cdf:function(e,r,n){return e>1||e<0?1*(e>1):t.ibeta(e,r,n)},inv:function(e,r,n){return t.ibetainv(e,r,n)},mean:function(t,e){return t/(t+e)},median:function(e,r){return t.ibetainv(.5,e,r)},mode:function(t,e){return(t-1)/(t+e-2)},sample:function(e,r){var n=t.randg(e);return n/(n+t.randg(r))},variance:function(t,r){return t*r/(e.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,n,i){var s;return r<0?0:n<=2?0===r&&n<2?1/0:0===r&&2===n?1:1/t.betafn(n/2,i/2)*e.pow(n/i,n/2)*e.pow(r,n/2-1)*e.pow(1+n/i*r,-(n+i)/2):(s=n*r/(i+r*n),n*(i/(i+r*n))/2*t.binomial.pdf((n-2)/2,(n+i-2)/2,s))},cdf:function(e,r,n){return e<0?0:t.ibeta(r*e/(r*e+n),r/2,n/2)},inv:function(e,r,n){return n/(r*(1/t.ibetainv(e,r/2,n/2)-1))},mean:function(t,e){return e>2?e/(e-2):void 0},mode:function(t,e){return t>2?e*(t-2)/(t*(e+2)):void 0},sample:function(e,r){return 2*t.randg(e/2)/e/(2*t.randg(r/2)/r)},variance:function(t,e){if(!(e<=4))return 2*e*e*(t+e-2)/(t*(e-2)*(e-2)*(e-4))}}),t.extend(t.cauchy,{pdf:function(t,r,n){return n<0?0:n/(e.pow(t-r,2)+e.pow(n,2))/e.PI},cdf:function(t,r,n){return e.atan((t-r)/n)/e.PI+.5},inv:function(t,r,n){return r+n*e.tan(e.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,n){return t.randn()*e.sqrt(1/(2*t.randg(.5)))*n+r}}),t.extend(t.chisquare,{pdf:function(r,n){return r<0?0:0===r&&2===n?.5:e.exp((n/2-1)*e.log(r)-r/2-n/2*e.log(2)-t.gammaln(n/2))},cdf:function(e,r){return e<0?0:t.lowRegGamma(r/2,e/2)},inv:function(e,r){return 2*t.gammapinv(e,.5*r)},mean:function(t){return t},median:function(t){return t*e.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(e){return 2*t.randg(e/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*e.exp(-r*t)},cdf:function(t,r){return t<0?0:1-e.exp(-r*t)},inv:function(t,r){return-e.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*e.log(2)},mode:function(){return 0},sample:function(r){return-1/r*e.log(t._random_fn())},variance:function(t){return e.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,n,i){return r<0?0:0===r&&1===n?1/i:e.exp((n-1)*e.log(r)-r/i-t.gammaln(n)-n*e.log(i))},cdf:function(e,r,n){return e<0?0:t.lowRegGamma(r,e/n)},inv:function(e,r,n){return t.gammapinv(e,r)*n},mean:function(t,e){return t*e},mode:function(t,e){if(t>1)return(t-1)*e},sample:function(e,r){return t.randg(e)*r},variance:function(t,e){return t*e*e}}),t.extend(t.invgamma,{pdf:function(r,n,i){return r<=0?0:e.exp(-(n+1)*e.log(r)-i/r-t.gammaln(n)+n*e.log(i))},cdf:function(e,r,n){return e<=0?0:1-t.lowRegGamma(r,n/e)},inv:function(e,r,n){return n/t.gammapinv(1-e,r)},mean:function(t,e){return t>1?e/(t-1):void 0},mode:function(t,e){return e/(t+1)},sample:function(e,r){return r/t.randg(e)},variance:function(t,e){if(!(t<=2))return e*e/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,n){return 0===t&&1===r?n:1===t&&1===n?r:e.exp(e.log(r)+e.log(n)+(r-1)*e.log(t)+(n-1)*e.log(1-e.pow(t,r)))},cdf:function(t,r,n){return t<0?0:t>1?1:1-e.pow(1-e.pow(t,r),n)},inv:function(t,r,n){return e.pow(1-e.pow(1-t,1/n),1/r)},mean:function(e,r){return r*t.gammafn(1+1/e)*t.gammafn(r)/t.gammafn(1+1/e+r)},median:function(t,r){return e.pow(1-e.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return e.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,n){return t<=0?0:e.exp(-e.log(t)-.5*e.log(2*e.PI)-e.log(n)-e.pow(e.log(t)-r,2)/(2*n*n))},cdf:function(r,n,i){return r<0?0:.5+.5*t.erf((e.log(r)-n)/e.sqrt(2*i*i))},inv:function(r,n,i){return e.exp(-1.4142135623730951*i*t.erfcinv(2*r)+n)},mean:function(t,r){return e.exp(t+r*r/2)},median:function(t){return e.exp(t)},mode:function(t,r){return e.exp(t-r*r)},sample:function(r,n){return e.exp(t.randn()*n+r)},variance:function(t,r){return(e.exp(r*r)-1)*e.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,n,i){var s=1e-14;return e.abs(i)<s?t.studentt.pdf(r,n):e.abs(r)<s?e.exp(t.gammaln((n+1)/2)-i*i/2-.5*e.log(e.PI*n)-t.gammaln(n/2)):n/r*(t.noncentralt.cdf(r*e.sqrt(1+2/n),n+2,i)-t.noncentralt.cdf(r,n,i))},cdf:function(r,n,i){var s=1e-14,a=200;if(e.abs(i)<s)return t.studentt.cdf(r,n);var o=!1;r<0&&(o=!0,i=-i);for(var l=t.normal.cdf(-i,0,1),c=s+1,u=c,h=r*r/(r*r+n),d=0,f=e.exp(-i*i/2),p=e.exp(-i*i/2-.5*e.log(2)-t.gammaln(1.5))*i;d<a||u>s||c>s;)u=c,d>0&&(f*=i*i/(2*d),p*=i*i/(2*(d+.5))),l+=.5*(c=f*t.beta.cdf(h,d+.5,n/2)+p*t.beta.cdf(h,d+1,n/2)),d++;return o?1-l:l}}),t.extend(t.normal,{pdf:function(t,r,n){return e.exp(-.5*e.log(2*e.PI)-e.log(n)-e.pow(t-r,2)/(2*n*n))},cdf:function(r,n,i){return.5*(1+t.erf((r-n)/e.sqrt(2*i*i)))},inv:function(e,r,n){return-1.4142135623730951*n*t.erfcinv(2*e)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(e,r){return t.randn()*r+e},variance:function(t,e){return e*e}}),t.extend(t.pareto,{pdf:function(t,r,n){return t<r?0:n*e.pow(r,n)/e.pow(t,n+1)},cdf:function(t,r,n){return t<r?0:1-e.pow(r/t,n)},inv:function(t,r,n){return r/e.pow(1-t,1/n)},mean:function(t,r){if(!(r<=1))return r*e.pow(t,r)/(r-1)},median:function(t,r){return t*(r*e.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(e.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,n){return n=n>1e100?1e100:n,1/(e.sqrt(n)*t.betafn(.5,n/2))*e.pow(1+r*r/n,-(n+1)/2)},cdf:function(r,n){var i=n/2;return t.ibeta((r+e.sqrt(r*r+n))/(2*e.sqrt(r*r+n)),i,i)},inv:function(r,n){var i=t.ibetainv(2*e.min(r,1-r),.5*n,.5);return i=e.sqrt(n*(1-i)/i),r>.5?i:-i},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*e.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,n){return t<0||r<0||n<0?0:n/r*e.pow(t/r,n-1)*e.exp(-e.pow(t/r,n))},cdf:function(t,r,n){return t<0?0:1-e.exp(-e.pow(t/r,n))},inv:function(t,r,n){return r*e.pow(-e.log(1-t),1/n)},mean:function(e,r){return e*t.gammafn(1+1/r)},median:function(t,r){return t*e.pow(e.log(2),1/r)},mode:function(t,r){return r<=1?0:t*e.pow((r-1)/r,1/r)},sample:function(r,n){return r*e.pow(-e.log(t._random_fn()),1/n)},variance:function(r,n){return r*r*t.gammafn(1+2/n)-e.pow(t.weibull.mean(r,n),2)}}),t.extend(t.uniform,{pdf:function(t,e,r){return t<e||t>r?0:1/(r-e)},cdf:function(t,e,r){return t<e?0:t<r?(t-e)/(r-e):1},inv:function(t,e,r){return e+t*(r-e)},mean:function(t,e){return.5*(t+e)},median:function(e,r){return t.mean(e,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,r){return e/2+r/2+(r/2-e/2)*(2*t._random_fn()-1)},variance:function(t,r){return e.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,n,i){return 0===i||1===i?n*i===r?1:0:t.combination(n,r)*e.pow(i,r)*e.pow(1-i,n-r)},cdf:function(n,i,s){var a,o=1e-10;if(n<0)return 0;if(n>=i)return 1;if(s<0||s>1||i<=0)return NaN;var l=s,c=(n=e.floor(n))+1,u=i-n,h=c+u,d=e.exp(t.gammaln(h)-t.gammaln(u)-t.gammaln(c)+c*e.log(l)+u*e.log(1-l));return a=l<(c+1)/(h+2)?d*r(l,c,u,o):1-d*r(1-l,u,c,o),e.round(1/o*(1-a))/(1/o)}}),t.extend(t.negbin,{pdf:function(r,n,i){return r===r>>>0&&(r<0?0:t.combination(r+n-1,n-1)*e.pow(1-i,r)*e.pow(i,n))},cdf:function(e,r,n){var i=0,s=0;if(e<0)return 0;for(;s<=e;s++)i+=t.negbin.pdf(s,r,n);return i}}),t.extend(t.hypgeom,{pdf:function(r,n,i,s){if(r!=r|0)return!1;if(r<0||r<i-(n-s))return 0;if(r>s||r>i)return 0;if(2*i>n)return 2*s>n?t.hypgeom.pdf(n-i-s+r,n,n-i,n-s):t.hypgeom.pdf(s-r,n,n-i,s);if(2*s>n)return t.hypgeom.pdf(i-r,n,i,n-s);if(i<s)return t.hypgeom.pdf(r,n,s,i);for(var a=1,o=0,l=0;l<r;l++){for(;a>1&&o<s;)a*=1-i/(n-o),o++;a*=(s-l)*(i-l)/((l+1)*(n-i-s+l+1))}for(;o<s;o++)a*=1-i/(n-o);return e.min(1,e.max(0,a))},cdf:function(r,n,i,s){if(r<0||r<i-(n-s))return 0;if(r>=s||r>=i)return 1;if(2*i>n)return 2*s>n?t.hypgeom.cdf(n-i-s+r,n,n-i,n-s):1-t.hypgeom.cdf(s-r-1,n,n-i,s);if(2*s>n)return 1-t.hypgeom.cdf(i-r-1,n,i,n-s);if(i<s)return t.hypgeom.cdf(r,n,s,i);for(var a=1,o=1,l=0,c=0;c<r;c++){for(;a>1&&l<s;){var u=1-i/(n-l);o*=u,a*=u,l++}a+=o*=(s-c)*(i-c)/((c+1)*(n-i-s+c+1))}for(;l<s;l++)a*=1-i/(n-l);return e.min(1,e.max(0,a))}}),t.extend(t.poisson,{pdf:function(r,n){return n<0||r%1!=0||r<0?0:e.pow(n,r)*e.exp(-n)/t.factorial(r)},cdf:function(e,r){var n=[],i=0;if(e<0)return 0;for(;i<=e;i++)n.push(t.poisson.pdf(i,r));return t.sum(n)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var n=1,i=0,s=e.exp(-r);do{i++,n*=t._random_fn()}while(n>s);return i-1},sampleLarge:function(r){var n,i,s,a,o,l,c,u,h,d,f=r;for(a=e.sqrt(f),o=e.log(f),l=.02483*(c=.931+2.53*a)-.059,u=1.1239+1.1328/(c-3.4),h=.9277-3.6224/(c-2);;){if(i=e.random()-.5,s=e.random(),d=.5-e.abs(i),n=e.floor((2*l/d+c)*i+f+.43),d>=.07&&s<=h)return n;if(!(n<0||d<.013&&s>d)&&e.log(s)+e.log(u)-e.log(l/(d*d)+c)<=n*o-f-t.loggam(n+1))return n}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,e,r,n){return r<=e||n<e||n>r?NaN:t<e||t>r?0:t<n?2*(t-e)/((r-e)*(n-e)):t===n?2/(r-e):2*(r-t)/((r-e)*(r-n))},cdf:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=r?0:t>=n?1:t<=i?e.pow(t-r,2)/((n-r)*(i-r)):1-e.pow(n-t,2)/((n-r)*(n-i))},inv:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=(i-r)/(n-r)?r+(n-r)*e.sqrt(t*((i-r)/(n-r))):r+(n-r)*(1-e.sqrt((1-t)*(1-(i-r)/(n-r))))},mean:function(t,e,r){return(t+e+r)/3},median:function(t,r,n){return n<=(t+r)/2?r-e.sqrt((r-t)*(r-n))/e.sqrt(2):n>(t+r)/2?t+e.sqrt((r-t)*(n-t))/e.sqrt(2):void 0},mode:function(t,e,r){return r},sample:function(r,n,i){var s=t._random_fn();return s<(i-r)/(n-r)?r+e.sqrt(s*(n-r)*(i-r)):n-e.sqrt((1-s)*(n-r)*(n-i))},variance:function(t,e,r){return(t*t+e*e+r*r-t*e-t*r-e*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,n){return n<=r?NaN:t<=r||t>=n?0:2/e.PI*e.pow(e.pow(n-r,2)-e.pow(2*t-r-n,2),-.5)},cdf:function(t,r,n){return t<r?0:t<n?2/e.PI*e.asin(e.sqrt((t-r)/(n-r))):1},inv:function(t,r,n){return r+(.5-.5*e.cos(e.PI*t))*(n-r)},mean:function(t,e){return e<=t?NaN:(t+e)/2},median:function(t,e){return e<=t?NaN:(t+e)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,n){return(r+n)/2+(n-r)/2*e.sin(2*e.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:e.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,n){return n<=0?0:e.exp(-e.abs(t-r)/n)/(2*n)},cdf:function(t,r,n){return n<=0?0:t<r?.5*e.exp((t-r)/n):1-.5*e.exp(-(t-r)/n)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,e){return 2*e*e},sample:function(r,i){var s=t._random_fn()-.5;return r-i*n(s)*e.log(1-2*e.abs(s))}}),t.extend(t.tukey,{cdf:function(r,n,s){var a=1,o=n,l=16,c=8,u=-30,h=1e-14,d=100,f=800,p=5e3,m=25e3,g=1,b=.5,v=.25,y=.125,w=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],x=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(s<2||a<1||o<2)return NaN;if(!Number.isFinite(r))return 1;if(s>m)return i(r,a,o);var k,$=.5*s,_=$*e.log(s)-s*e.log(2)-t.gammaln($),S=$-1,E=.25*s;k=s<=d?g:s<=f?b:s<=p?v:y,_+=e.log(k);for(var A=0,M=1;M<=50;M++){for(var T=0,C=(2*M-1)*k,N=1;N<=l;N++){var R,O;c<N?(R=N-c-1,O=_+S*e.log(C+w[R]*k)-(w[R]*k+C)*E):(R=N-1,O=_+S*e.log(C-w[R]*k)+(w[R]*k-C)*E),O>=u&&(T+=i(c<N?r*e.sqrt(.5*(w[R]*k+C)):r*e.sqrt(.5*(-w[R]*k+C)),a,o)*x[R]*e.exp(O))}if(M*k>=1&&T<=h)break;A+=T}if(T>h)throw new Error("tukey.cdf failed to converge");return A>1&&(A=1),A},inv:function(r,n,i){var a=1e-4,o=50;if(i<2||n<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var l,c=s(r,n,i),u=t.tukey.cdf(c,n,i)-r;l=u>0?e.max(0,c-1):c+1;for(var h,d=t.tukey.cdf(l,n,i)-r,f=1;f<o;f++)if(h=l-d*(l-c)/(d-u),u=d,c=l,h<0&&(h=0,d=-r),d=t.tukey.cdf(h,n,i)-r,l=h,e.abs(l-c)<a)return h;throw new Error("tukey.inv failed to converge")}})}(t,Math),function(t,e){var r=Array.prototype.push,n=t.utils.isArray;function i(e){return n(e)||e instanceof t}t.extend({add:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t+r[e][n]})):t.map(e,function(t){return t+r})},subtract:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t-r[e][n]||0})):t.map(e,function(t){return t-r})},divide:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.multiply(e,t.inv(r))):t.map(e,function(t){return t/r})},multiply:function(e,r){var n,s,a,o,l,c,u,h;if(void 0===e.length&&void 0===r.length)return e*r;if(l=e.length,c=e[0].length,u=t.zeros(l,a=i(r)?r[0].length:c),h=0,i(r)){for(;h<a;h++)for(n=0;n<l;n++){for(o=0,s=0;s<c;s++)o+=e[n][s]*r[s][h];u[n][h]=o}return 1===l&&1===h?u[0][0]:u}return t.map(e,function(t){return t*r})},outer:function(e,r){return t.multiply(e.map(function(t){return[t]}),[r])},dot:function(e,r){i(e[0])||(e=[e]),i(r[0])||(r=[r]);for(var n,s,a=1===e[0].length&&1!==e.length?t.transpose(e):e,o=1===r[0].length&&1!==r.length?t.transpose(r):r,l=[],c=0,u=a.length,h=a[0].length;c<u;c++){for(l[c]=[],n=0,s=0;s<h;s++)n+=a[c][s]*o[c][s];l[c]=n}return 1===l.length?l[0]:l},pow:function(r,n){return t.map(r,function(t){return e.pow(t,n)})},exp:function(r){return t.map(r,function(t){return e.exp(t)})},log:function(r){return t.map(r,function(t){return e.log(t)})},abs:function(r){return t.map(r,function(t){return e.abs(t)})},norm:function(t,r){var n=0,s=0;for(isNaN(r)&&(r=2),i(t[0])&&(t=t[0]);s<t.length;s++)n+=e.pow(e.abs(t[s]),r);return e.pow(n,1/r)},angle:function(r,n){return e.acos(t.dot(r,n)/(t.norm(r)*t.norm(n)))},aug:function(t,e){var n,i=[];for(n=0;n<t.length;n++)i.push(t[n].slice());for(n=0;n<i.length;n++)r.apply(i[n],e[n]);return i},inv:function(e){for(var r,n=e.length,i=e[0].length,s=t.identity(n,i),a=t.gauss_jordan(e,s),o=[],l=0;l<n;l++)for(o[l]=[],r=i;r<a[0].length;r++)o[l][r-i]=a[l][r];return o},det:function t(e){if(2===e.length)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(var r=0,n=0;n<e.length;n++){for(var i=[],s=1;s<e.length;s++){i[s-1]=[];for(var a=0;a<e.length;a++)a<n?i[s-1][a]=e[s][a]:a>n&&(i[s-1][a-1]=e[s][a])}var o=n%2?-1:1;r+=t(i)*e[0][n]*o}return r},gauss_elimination:function(r,n){var i,s,a,o,l=0,c=0,u=r.length,h=r[0].length,d=1,f=0,p=[];for(i=(r=t.aug(r,n))[0].length,l=0;l<u;l++){for(s=r[l][l],c=l,o=l+1;o<h;o++)s<e.abs(r[o][l])&&(s=r[o][l],c=o);if(c!=l)for(o=0;o<i;o++)a=r[l][o],r[l][o]=r[c][o],r[c][o]=a;for(c=l+1;c<u;c++)for(d=r[c][l]/r[l][l],o=l;o<i;o++)r[c][o]=r[c][o]-d*r[l][o]}for(l=u-1;l>=0;l--){for(f=0,c=l+1;c<=u-1;c++)f+=p[c]*r[l][c];p[l]=(r[l][i-1]-f)/r[l][l]}return p},gauss_jordan:function(r,n){var i,s,a,o=t.aug(r,n),l=o.length,c=o[0].length,u=0;for(s=0;s<l;s++){var h=s;for(a=s+1;a<l;a++)e.abs(o[a][s])>e.abs(o[h][s])&&(h=a);var d=o[s];for(o[s]=o[h],o[h]=d,a=s+1;a<l;a++)for(u=o[a][s]/o[s][s],i=s;i<c;i++)o[a][i]-=o[s][i]*u}for(s=l-1;s>=0;s--){for(u=o[s][s],a=0;a<s;a++)for(i=c-1;i>s-1;i--)o[a][i]-=o[s][i]*o[a][s]/u;for(o[s][s]/=u,i=l;i<c;i++)o[s][i]/=u}return o},triaUpSolve:function(e,r){var n,i=e[0].length,s=t.zeros(1,i)[0],a=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),a=!0),t.arange(i-1,-1,-1).forEach(function(a){n=t.arange(a+1,i).map(function(t){return s[t]*e[a][t]}),s[a]=(r[a]-t.sum(n))/e[a][a]}),a?s.map(function(t){return[t]}):s},triaLowSolve:function(e,r){var n,i=e[0].length,s=t.zeros(1,i)[0],a=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),a=!0),t.arange(i).forEach(function(i){n=t.arange(i).map(function(t){return e[i][t]*s[t]}),s[i]=(r[i]-t.sum(n))/e[i][i]}),a?s.map(function(t){return[t]}):s},lu:function(e){var r,n=e.length,i=t.identity(n),s=t.zeros(e.length,e[0].length);return t.arange(n).forEach(function(t){s[0][t]=e[0][t]}),t.arange(1,n).forEach(function(a){t.arange(a).forEach(function(n){r=t.arange(n).map(function(t){return i[a][t]*s[t][n]}),i[a][n]=(e[a][n]-t.sum(r))/s[n][n]}),t.arange(a,n).forEach(function(n){r=t.arange(a).map(function(t){return i[a][t]*s[t][n]}),s[a][n]=e[r.length][n]-t.sum(r)})}),[i,s]},cholesky:function(r){var n,i=r.length,s=t.zeros(r.length,r[0].length);return t.arange(i).forEach(function(a){n=t.arange(a).map(function(t){return e.pow(s[a][t],2)}),s[a][a]=e.sqrt(r[a][a]-t.sum(n)),t.arange(a+1,i).forEach(function(e){n=t.arange(a).map(function(t){return s[a][t]*s[e][t]}),s[e][a]=(r[a][e]-t.sum(n))/s[a][a]})}),s},gauss_jacobi:function(r,n,i,s){for(var a,o,l,c,u=0,h=0,d=r.length,f=[],p=[],m=[];u<d;u++)for(f[u]=[],p[u]=[],m[u]=[],h=0;h<d;h++)u>h?(f[u][h]=r[u][h],p[u][h]=m[u][h]=0):u<h?(p[u][h]=r[u][h],f[u][h]=m[u][h]=0):(m[u][h]=r[u][h],f[u][h]=p[u][h]=0);for(l=t.multiply(t.multiply(t.inv(m),t.add(f,p)),-1),o=t.multiply(t.inv(m),n),a=i,c=t.add(t.multiply(l,i),o),u=2;e.abs(t.norm(t.subtract(c,a)))>s;)a=c,c=t.add(t.multiply(l,a),o),u++;return c},gauss_seidel:function(r,n,i,s){for(var a,o,l,c,u,h=0,d=r.length,f=[],p=[],m=[];h<d;h++)for(f[h]=[],p[h]=[],m[h]=[],a=0;a<d;a++)h>a?(f[h][a]=r[h][a],p[h][a]=m[h][a]=0):h<a?(p[h][a]=r[h][a],f[h][a]=m[h][a]=0):(m[h][a]=r[h][a],f[h][a]=p[h][a]=0);for(c=t.multiply(t.multiply(t.inv(t.add(m,f)),p),-1),l=t.multiply(t.inv(t.add(m,f)),n),o=i,u=t.add(t.multiply(c,i),l),h=2;e.abs(t.norm(t.subtract(u,o)))>s;)o=u,u=t.add(t.multiply(c,o),l),h+=1;return u},SOR:function(r,n,i,s,a){for(var o,l,c,u,h,d=0,f=r.length,p=[],m=[],g=[];d<f;d++)for(p[d]=[],m[d]=[],g[d]=[],o=0;o<f;o++)d>o?(p[d][o]=r[d][o],m[d][o]=g[d][o]=0):d<o?(m[d][o]=r[d][o],p[d][o]=g[d][o]=0):(g[d][o]=r[d][o],p[d][o]=m[d][o]=0);for(u=t.multiply(t.inv(t.add(g,t.multiply(p,a))),t.subtract(t.multiply(g,1-a),t.multiply(m,a))),c=t.multiply(t.multiply(t.inv(t.add(g,t.multiply(p,a))),n),a),l=i,h=t.add(t.multiply(u,i),c),d=2;e.abs(t.norm(t.subtract(h,l)))>s;)l=h,h=t.add(t.multiply(u,l),c),d++;return h},householder:function(r){for(var n,i,s,a,o=r.length,l=r[0].length,c=0,u=[],h=[];c<o-1;c++){for(n=0,a=c+1;a<l;a++)n+=r[a][c]*r[a][c];for(n=(r[c+1][c]>0?-1:1)*e.sqrt(n),i=e.sqrt((n*n-r[c+1][c]*n)/2),(u=t.zeros(o,1))[c+1][0]=(r[c+1][c]-n)/(2*i),s=c+2;s<o;s++)u[s][0]=r[s][c]/(2*i);h=t.subtract(t.identity(o,l),t.multiply(t.multiply(u,t.transpose(u)),2)),r=t.multiply(h,t.multiply(r,h))}return r},QR:function(){var r=t.sum,n=t.arange;function i(i){var s,a,o,l=i.length,c=i[0].length,u=t.zeros(c,c);for(i=t.copy(i),a=0;a<c;a++){for(u[a][a]=e.sqrt(r(n(l).map(function(t){return i[t][a]*i[t][a]}))),s=0;s<l;s++)i[s][a]=i[s][a]/u[a][a];for(o=a+1;o<c;o++)for(u[a][o]=r(n(l).map(function(t){return i[t][a]*i[t][o]})),s=0;s<l;s++)i[s][o]=i[s][o]-i[s][a]*u[a][o]}return[i,u]}return i}(),lstsq:function(){function e(e){var r=(e=t.copy(e)).length,n=t.identity(r);return t.arange(r-1,-1,-1).forEach(function(r){t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),e[r][r])),t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),e[r][r])),t.arange(r).forEach(function(i){var s=t.multiply(e[i][r],-1),a=t.slice(e,{row:i}),o=t.multiply(t.slice(e,{row:r}),s);t.sliceAssign(e,{row:i},t.add(a,o));var l=t.slice(n,{row:i}),c=t.multiply(t.slice(n,{row:r}),s);t.sliceAssign(n,{row:i},t.add(l,c))})}),n}function r(r,n){var i=!1;void 0===n[0].length&&(n=n.map(function(t){return[t]}),i=!0);var s=t.QR(r),a=s[0],o=s[1],l=r[0].length,c=t.slice(a,{col:{end:l}}),u=e(t.slice(o,{row:{end:l}})),h=t.transpose(c);void 0===h[0].length&&(h=[h]);var d=t.multiply(t.multiply(u,h),n);return void 0===d.length&&(d=[[d]]),i?d.map(function(t){return t[0]}):d}return r}(),jacobi:function(r){for(var n,i,s,a,o,l,c,u=1,h=r.length,d=t.identity(h,h),f=[];1===u;){for(o=r[0][1],s=0,a=1,n=0;n<h;n++)for(i=0;i<h;i++)n!=i&&o<e.abs(r[n][i])&&(o=e.abs(r[n][i]),s=n,a=i);for(l=r[s][s]===r[a][a]?r[s][a]>0?e.PI/4:-e.PI/4:e.atan(2*r[s][a]/(r[s][s]-r[a][a]))/2,(c=t.identity(h,h))[s][s]=e.cos(l),c[s][a]=-e.sin(l),c[a][s]=e.sin(l),c[a][a]=e.cos(l),d=t.multiply(d,c),r=t.multiply(t.multiply(t.inv(c),r),c),u=0,n=1;n<h;n++)for(i=1;i<h;i++)n!=i&&e.abs(r[n][i])>.001&&(u=1)}for(n=0;n<h;n++)f.push(r[n][n]);return[d,f]},rungekutta:function(t,e,r,n,i,s){var a,o,l;if(2===s)for(;n<=r;)i+=((a=e*t(n,i))+(o=e*t(n+e,i+a)))/2,n+=e;if(4===s)for(;n<=r;)i+=((a=e*t(n,i))+2*(o=e*t(n+e/2,i+a/2))+2*(l=e*t(n+e/2,i+o/2))+e*t(n+e,i+l))/6,n+=e;return i},romberg:function(t,r,n,i){for(var s,a,o,l,c,u=0,h=(n-r)/2,d=[],f=[],p=[];u<i/2;){for(c=t(r),o=r,l=0;o<=n;o+=h,l++)d[l]=o;for(s=d.length,o=1;o<s-1;o++)c+=(o%2!=0?4:2)*t(d[o]);c=h/3*(c+t(n)),p[u]=c,h/=2,u++}for(a=p.length,s=1;1!==a;){for(o=0;o<a-1;o++)f[o]=(e.pow(4,s)*p[o+1]-p[o])/(e.pow(4,s)-1);a=f.length,p=f,f=[],s++}return p},richardson:function(t,r,n,i){function s(t,e){for(var r,n=0,i=t.length;n<i;n++)t[n]===e&&(r=n);return r}for(var a,o,l,c,u,h=e.abs(n-t[s(t,n)+1]),d=0,f=[],p=[];i>=h;)a=s(t,n+i),o=s(t,n),f[d]=(r[a]-2*r[o]+r[2*o-a])/(i*i),i/=2,d++;for(c=f.length,l=1;1!=c;){for(u=0;u<c-1;u++)p[u]=(e.pow(4,l)*f[u+1]-f[u])/(e.pow(4,l)-1);c=p.length,f=p,p=[],l++}return f},simpson:function(t,e,r,n){for(var i,s=(r-e)/n,a=t(e),o=[],l=e,c=0,u=1;l<=r;l+=s,c++)o[c]=l;for(i=o.length;u<i-1;u++)a+=(u%2!=0?4:2)*t(o[u]);return s/3*(a+t(r))},hermite:function(t,e,r,n){for(var i,s=t.length,a=0,o=0,l=[],c=[],u=[],h=[];o<s;o++){for(l[o]=1,i=0;i<s;i++)o!=i&&(l[o]*=(n-t[i])/(t[o]-t[i]));for(c[o]=0,i=0;i<s;i++)o!=i&&(c[o]+=1/(t[o]-t[i]));u[o]=(1-2*(n-t[o])*c[o])*(l[o]*l[o]),h[o]=(n-t[o])*(l[o]*l[o]),a+=u[o]*e[o]+h[o]*r[o]}return a},lagrange:function(t,e,r){for(var n,i,s=0,a=0,o=t.length;a<o;a++){for(i=e[a],n=0;n<o;n++)a!=n&&(i*=(r-t[n])/(t[a]-t[n]));s+=i}return s},cubic_spline:function(e,r,n){for(var i,s=e.length,a=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[];a<s-1;a++)h[a]=e[a+1]-e[a];for(c[0]=0,a=1;a<s-1;a++)c[a]=3/h[a]*(r[a+1]-r[a])-3/h[a-1]*(r[a]-r[a-1]);for(a=1;a<s-1;a++)o[a]=[],l[a]=[],o[a][a-1]=h[a-1],o[a][a]=2*(h[a-1]+h[a]),o[a][a+1]=h[a],l[a][0]=c[a];for(u=t.multiply(t.inv(o),l),i=0;i<s-1;i++)d[i]=(r[i+1]-r[i])/h[i]-h[i]*(u[i+1][0]+2*u[i][0])/3,f[i]=(u[i+1][0]-u[i][0])/(3*h[i]);for(i=0;i<s&&!(e[i]>n);i++);return r[i-=1]+(n-e[i])*d[i]+t.sq(n-e[i])*u[i]+(n-e[i])*t.sq(n-e[i])*f[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(e){var r,n,i=e.length,s=e[0].length,a=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[],p=[],m=[],g=[];for(a=0;a<i;a++)o[a]=t.sum(e[a])/s;for(a=0;a<s;a++)for(f[a]=[],r=0;r<i;r++)f[a][r]=e[r][a]-o[r];for(f=t.transpose(f),a=0;a<i;a++)for(p[a]=[],r=0;r<i;r++)p[a][r]=t.dot([f[a]],[f[r]])/(s-1);for(m=(c=t.jacobi(p))[0],l=c[1],g=t.transpose(m),a=0;a<l.length;a++)for(r=a;r<l.length;r++)l[a]<l[r]&&(n=l[a],l[a]=l[r],l[r]=n,u=g[a],g[a]=g[r],g[r]=u);for(d=t.transpose(f),a=0;a<i;a++)for(h[a]=[],r=0;r<d.length;r++)h[a][r]=t.dot([g[a]],[d[r]]);return[e,l,g,h]}}),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(r,n){var i=this;return n?(setTimeout(function(){n.call(i,t.fn[e].call(i,r))},15),this):"number"==typeof t[e](this,r)?t[e](this,r):t(t[e](this,r))}})(e[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(t,Math),function(t,e){var r=[].slice,n=t.utils.isNumber,i=t.utils.isArray;function s(t,r,n,i){if(t>1||n>1||t<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var s=(t*r+n*i)/(r+i);return(t-n)/e.sqrt(s*(1-s)*(1/r+1/i))}t.extend({zscore:function(){var e=r.call(arguments);return n(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var n,s=r.call(arguments);return i(s[1])?(n=t.zscore(s[0],s[1],s[3]),1===s[2]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):s.length>2?(n=t.zscore(s[0],s[1],s[2]),1===s[3]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):(n=s[0],1===s[1]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1))}}),t.extend(t.fn,{zscore:function(t,e){return(t-this.mean())/this.stdev(e)},ztest:function(r,n,i){var s=e.abs(this.zscore(r,i));return 1===n?t.normal.cdf(-s,0,1):2*t.normal.cdf(-s,0,1)}}),t.extend({tscore:function(){var n=r.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/e.sqrt(n[3])):(n[0]-t.mean(n[1]))/(t.stdev(n[1],!0)/e.sqrt(n[1].length))},ttest:function(){var i,s=r.call(arguments);return 5===s.length?(i=e.abs(t.tscore(s[0],s[1],s[2],s[3])),1===s[4]?t.studentt.cdf(-i,s[3]-1):2*t.studentt.cdf(-i,s[3]-1)):n(s[1])?(i=e.abs(s[0]),1==s[2]?t.studentt.cdf(-i,s[1]-1):2*t.studentt.cdf(-i,s[1]-1)):(i=e.abs(t.tscore(s[0],s[1])),1==s[2]?t.studentt.cdf(-i,s[1].length-1):2*t.studentt.cdf(-i,s[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/e.sqrt(this.cols()))},ttest:function(r,n){return 1===n?1-t.studentt.cdf(e.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-e.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var n,i,s,a,o,l,c,u,h=r.call(arguments);if(1===h.length){for(o=new Array(h[0].length),c=0;c<h[0].length;c++)o[c]=h[0][c];h=o}for(i=new Array,c=0;c<h.length;c++)i=i.concat(h[c]);for(s=t.mean(i),n=0,c=0;c<h.length;c++)n+=h[c].length*e.pow(t.mean(h[c])-s,2);for(n/=h.length-1,l=0,c=0;c<h.length;c++)for(a=t.mean(h[c]),u=0;u<h[c].length;u++)l+=e.pow(h[c][u]-a,2);return n/(l/=i.length-h.length)},anovaftest:function(){var e,i,s,a,o=r.call(arguments);if(n(o[0]))return 1-t.centralF.cdf(o[0],o[1],o[2]);var l=t.anovafscore(o);for(e=o.length-1,s=0,a=0;a<o.length;a++)s+=o[a].length;return i=s-e-1,1-t.centralF.cdf(l,e,i)},ftest:function(e,r,n){return 1-t.centralF.cdf(e,r,n)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e,r=0;for(e=0;e<this.length;e++)r+=this[e].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var i,s,a,o,l,c=r.call(arguments);return n(c[0])?(i=c[0],s=c[1],a=c[2],o=c[3],l=c[4]):(i=t.mean(c[0]),s=t.mean(c[1]),a=c[0].length,o=c[1].length,l=c[2]),e.abs(i-s)/(l*e.sqrt((1/a+1/o)/2))},qtest:function(){var e,n=r.call(arguments);3===n.length?(e=n[0],n=n.slice(1)):7===n.length?(e=t.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(e=t.qscore(n[0],n[1],n[2]),n=n.slice(3));var i=n[0],s=n[1];return 1-t.tukey.cdf(e,s,i-s)},tukeyhsd:function(e){for(var r=t.pooledstdev(e),n=e.map(function(e){return t.mean(e)}),i=e.reduce(function(t,e){return t+e.length},0),s=[],a=0;a<e.length;++a)for(var o=a+1;o<e.length;++o){var l=t.qtest(n[a],n[o],e[a].length,e[o].length,r,i,e.length);s.push([[a,o],l])}return s}}),t.extend({normalci:function(){var n,i=r.call(arguments),s=new Array(2);return n=4===i.length?e.abs(t.normal.inv(i[1]/2,0,1)*i[2]/e.sqrt(i[3])):e.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/e.sqrt(i[2].length)),s[0]=i[0]-n,s[1]=i[0]+n,s},tci:function(){var n,i=r.call(arguments),s=new Array(2);return n=4===i.length?e.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/e.sqrt(i[3])):e.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/e.sqrt(i[2].length)),s[0]=i[0]-n,s[1]=i[0]+n,s},significant:function(t,e){return t<e}}),t.extend(t.fn,{normalci:function(e,r){return t.normalci(e,r,this.toArray())},tci:function(e,r){return t.tci(e,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,r,n,i){var a=s(e,r,n,i);return t.ztest(a,1)},twoSidedDifferenceOfProportions:function(e,r,n,i){var a=s(e,r,n,i);return t.ztest(a,2)}})}(t,Math),t.models=function(){function e(e){var n=e[0].length,i=t.arange(n).map(function(i){var s=t.arange(n).filter(function(t){return t!==i});return r(t.col(e,i).map(function(t){return t[0]}),t.col(e,s))});return i}function r(e,r){var n=e.length,i=r[0].length-1,s=n-i-1,a=t.lstsq(r,e),o=t.multiply(r,a.map(function(t){return[t]})).map(function(t){return t[0]}),l=t.subtract(e,o),c=t.mean(e),u=t.sum(o.map(function(t){return Math.pow(t-c,2)})),h=t.sum(e.map(function(t,e){return Math.pow(t-o[e],2)})),d=u+h;return{exog:r,endog:e,nobs:n,df_model:i,df_resid:s,coef:a,predict:o,resid:l,ybar:c,SST:d,SSE:u,SSR:h,R2:u/d}}function n(r){var n=e(r.exog),i=Math.sqrt(r.SSR/r.df_resid),s=n.map(function(t){var e=t.SST,r=t.R2;return i/Math.sqrt(e*(1-r))}),a=r.coef.map(function(t,e){return(t-0)/s[e]}),o=a.map(function(e){var n=t.studentt.cdf(e,r.df_resid);return 2*(n>.5?1-n:n)}),l=t.studentt.inv(.975,r.df_resid),c=r.coef.map(function(t,e){var r=l*s[e];return[t-r,t+r]});return{se:s,t:a,p:o,sigmaHat:i,interval95:c}}function i(e){var r=e.R2/e.df_model/((1-e.R2)/e.df_resid),n=function(e,r,n){return t.beta.cdf(e/(n/r+e),r/2,n/2)};return{F_statistic:r,pvalue:1-n(r,e.df_model,e.df_resid)}}function s(t,e){var s=r(t,e),a=n(s),o=i(s),l=1-(1-s.R2)*((s.nobs-1)/s.df_resid);return s.t=a,s.f=o,s.adjust_R2=l,s}return{ols:s}}(),t.extend({buildxmatrix:function(){for(var e=new Array(arguments.length),r=0;r<arguments.length;r++){var n=[1];e[r]=n.concat(arguments[r])}return t(e)},builddxmatrix:function(){for(var e=new Array(arguments[0].length),r=0;r<arguments[0].length;r++){var n=[1];e[r]=n.concat(arguments[0][r])}return t(e)},buildjxmatrix:function(e){for(var r=new Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return t.builddxmatrix(r)},buildymatrix:function(e){return t(e).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(e,r){var n,i,s,a,o;if(e.cols()==r.rows()){if(r.rows()>1){for(a=[],n=0;n<e.rows();n++)for(a[n]=[],i=0;i<r.cols();i++){for(o=0,s=0;s<e.cols();s++)o+=e.toArray()[n][s]*r.toArray()[s][i];a[n][i]=o}return t(a)}for(a=[],n=0;n<e.rows();n++)for(a[n]=[],i=0;i<r.cols();i++){for(o=0,s=0;s<e.cols();s++)o+=e.toArray()[n][s]*r.toArray()[i];a[n][i]=o}return t(a)}},regress:function(e,r){var n=t.xtranspxinv(e),i=e.transpose(),s=t.matrixmult(t(n),i);return t.matrixmult(s,r)},regresst:function(e,r,n){var i=t.regress(e,r),s={anova:{}},a=t.jMatYBar(e,i);s.yBar=a;var o=r.mean();s.anova.residuals=t.residuals(r,a),s.anova.ssr=t.ssr(a,o),s.anova.msr=s.anova.ssr/(e[0].length-1),s.anova.sse=t.sse(r,a),s.anova.mse=s.anova.sse/(r.length-(e[0].length-1)-1),s.anova.sst=t.sst(r,o),s.anova.mst=s.anova.sst/(r.length-1),s.anova.r2=1-s.anova.sse/s.anova.sst,s.anova.r2<0&&(s.anova.r2=0),s.anova.fratio=s.anova.msr/s.anova.mse,s.anova.pvalue=t.anovaftest(s.anova.fratio,e[0].length-1,r.length-(e[0].length-1)-1),s.anova.rmse=Math.sqrt(s.anova.mse),s.anova.r2adj=1-s.anova.mse/s.anova.mst,s.anova.r2adj<0&&(s.anova.r2adj=0),s.stats=new Array(e[0].length);for(var l,c,u,h=t.xtranspxinv(e),d=0;d<i.length;d++)l=Math.sqrt(s.anova.mse*Math.abs(h[d][d])),c=Math.abs(i[d]/l),u=t.ttest(c,r.length-e[0].length-1,n),s.stats[d]=[i[d],l,c,u];return s.regress=i,s},xtranspx:function(e){return t.matrixmult(e.transpose(),e)},xtranspxinv:function(e){var r=t.matrixmult(e.transpose(),e);return t.inv(r)},jMatYBar:function(e,r){var n=t.matrixmult(e,r);return new t(n)},residuals:function(e,r){return t.matrixsubtract(e,r)},ssr:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},sse:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e[n],2);return r},sst:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},matrixsubtract:function(e,r){for(var n=new Array(e.length),i=0;i<e.length;i++){n[i]=new Array(e[i].length);for(var s=0;s<e[i].length;s++)n[i][s]=e[i][s]-r[i][s]}return t(n)}}),t.jStat=t,t}();var AP=e(EP.exports);class MP{static d={DEFAULT:1,MIN:-6,MAX:6,STEP:.01,JUMP:.1};static c={DEFAULT:0,MIN:-3,MAX:3,STEP:.01,JUMP:.1};static s={DEFAULT:1,MIN:.8,MAX:40,STEP:.01,JUMP:.05};static hM2Hr(t,e){return 0===t&&0===e?0:t/(t+e)}static faCr2Far(t,e){return 0===t&&0===e?0:t/(t+e)}static hMFaCr2Acc(t,e,r,n){return 0===t&&0===e&&0===r&&0===n?0:(t+n)/(t+e+r+n)}static hrFar2Acc(t,e){return(t+(1-e))/2}static hFa2Ppv(t,e){return 0===t&&0===e?0:t/(t+e)}static mCr2Fomr(t,e){return 0===t&&0===e?0:t/(t+e)}static hrFar2D(t,e,r=1){return 1===r?AP.normal.inv(t,0,1)-AP.normal.inv(e,0,1):Math.sqrt(2/(r*r+1))*(r*AP.normal.inv(t,0,1)-AP.normal.inv(e,0,1))}static hrFar2C(t,e,r=1){return 1===r?-(AP.normal.inv(t,0,1)+AP.normal.inv(e,0,1))/2:Math.sqrt(2/(r*r+1))*(r/(r+1))*-(AP.normal.inv(t,0,1)+AP.normal.inv(e,0,1))}static dC2Hr(t,e,r=1){return 1===r?AP.normal.cdf(t/2-e,0,1):AP.normal.cdf(Math.sqrt((r*r+1)/2)*(t/(1+r)-e/r),0,1)}static dC2Far(t,e,r=1){return 1===r?AP.normal.cdf(-(t/2+e),0,1):AP.normal.cdf(Math.sqrt((r*r+1)/2)*-(t/(1+r)+e),0,1)}static dFar2Hr(t,e,r=1){return 1===r?AP.normal.cdf(t+AP.normal.inv(e,0,1),0,1):AP.normal.cdf((Math.sqrt((r*r+1)/2)*t+AP.normal.inv(e,0,1))/r,0,1)}static cFar2Hr(t,e,r=1){return 1===r?AP.normal.cdf(-2*t-AP.normal.inv(e,0,1),0,1):AP.normal.cdf(-Math.sqrt((r*r+1)/2)*((r+1)/r)*t-AP.normal.inv(e,0,1),0,1)}static d2MuN(t,e=1){return 1===e?-t/2:-Math.sqrt((e*e+1)/2)*(1/(e+1))*t}static muN2D(t,e=1){return 1===e?-2*t:-Math.sqrt(2/(e*e+1))*(e+1)*t}static d2MuS(t,e=1){return 1===e?t/2:Math.sqrt((e*e+1)/2)*(e/(e+1))*t}static muS2D(t,e=1){return 1===e?2*t:Math.sqrt(2/(e*e+1))*((e+1)/e)*t}static c2L(t,e=1){return 1===e?t:Math.sqrt((e*e+1)/2)*t}static l2C(t,e=1){return 1===e?t:Math.sqrt(2/(e*e+1))*t}static s2H(t=1){return 1/(t*Math.sqrt(2*Math.PI))}static h2S(t){return 1/(t*Math.sqrt(2*Math.PI))}static hr2Zhr(t){return AP.normal.inv(t,0,1)}static far2Zfar(t){return AP.normal.inv(t,0,1)}static zhr2Hr(t){return AP.normal.cdf(t,0,1)}static zfar2Far(t){return AP.normal.cdf(t,0,1)}}customElements.define("detectable-table",class extends SP{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",converter:kP,reflect:!0},color:{attribute:"color",type:String,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},acc:{attribute:!1,type:Number,reflect:!1},ppv:{attribute:!1,type:Number,reflect:!1},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.numeric=!1,this.summaries=["stimulusRates","responseRates","accuracy"],this.summary=new Set,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color="all",this.payoff=!1,this.hPayoff=void 0,this.mPayoff=void 0,this.crPayoff=void 0,this.faPayoff=void 0,this.h=40,this.m=60,this.fa=75,this.cr=25,this.alignState()}alignState(){this.hr=MP.hM2Hr(this.h,this.m),this.far=MP.faCr2Far(this.fa,this.cr),this.acc=MP.hMFaCr2Acc(this.h,this.m,this.fa,this.cr),this.ppv=MP.hFa2Ppv(this.h,this.fa),this.fomr=MP.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("detectable-table-change",{detail:{h:this.h,m:this.m,hr:this.hr,fa:this.fa,cr:this.cr,far:this.far,acc:this.acc,ppv:this.ppv,fomr:this.fomr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}hrInput(t){const e=parseFloat(t.target.value),r=this.h+this.m;this.h=Math.round(e*r),this.m=r-this.h,this.alignState(),this.sendEvent()}farInput(t){const e=parseFloat(t.target.value),r=this.fa+this.cr;this.fa=Math.round(e*r),this.cr=r-this.fa,this.alignState(),this.sendEvent()}accInput(t){const e=parseFloat(t.target.value),r=this.h+this.m,n=this.fa+this.cr,i=(this.hr+this.far-1)/2;let s=i+e,a=1+i-e;a>1&&(a=1,s=a+2*e-1),a<0&&(a=0,s=a+2*e-1),s>1&&(s=1,a=s-2*e+1),s<0&&(s=0,a=s-2*e+1),this.h=Math.round(s*r),this.m=r-this.h,this.fa=Math.round(a*n),this.cr=n-this.fa,this.alignState(),this.sendEvent()}ppvInput(t){const e=parseFloat(t.target.value),r=this.h+this.fa;this.h=Math.round(e*r),this.fa=r-this.h,this.alignState(),this.sendEvent()}fomrInput(t){const e=parseFloat(t.target.value),r=this.m+this.cr;this.m=Math.round(e*r),this.cr=r-this.m,this.alignState(),this.sendEvent()}static get styles(){return[super.styles,qE`
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
      `]}willUpdate(){this.alignState()}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,n,i,s,a,o,l,c,u;return this.numeric?(r=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff?kA`<span class="payoff">${e(this.hPayoff)}</span>`:kA``}
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff?kA`<span class="payoff">${e(this.mPayoff)}</span>`:kA``}
        </decidables-spinner>
      `,i=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff?kA`<span class="payoff">${e(this.faPayoff)}</span>`:kA``}
        </decidables-spinner>
      `,s=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff?kA`<span class="payoff">${e(this.crPayoff)}</span>`:kA``}
        </decidables-spinner>
      `,a=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `,o=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `,l=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `,c=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `,u=kA`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `):(r=kA`<span>Hits</span>
        ${this.payoff?kA`<span class="payoff">${e(this.hPayoff)}</span>`:kA``}`,n=kA`<span>Misses</span>
        ${this.payoff?kA`<span class="payoff">${e(this.mPayoff)}</span>`:kA``}`,i=kA`<span>False Alarms</span>
        ${this.payoff?kA`<span class="payoff">${e(this.faPayoff)}</span>`:kA``}`,s=kA`<span>Correct Rejections</span>
        ${this.payoff?kA`<span class="payoff">${e(this.crPayoff)}</span>`:kA``}`,a=kA`<span>Hit Rate</span>`,o=kA`<span>False Alarm Rate</span>`,l=kA`<span>Accuracy</span>`,c=kA`<span>Positive Predictive Value</span>`,u=kA`<span>False Omission Rate</span>`),kA`
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
            ${this.summary.has("stimulusRates")?kA`
                <td class="td td-summary hr">
                  ${a}
                </td>`:kA``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Absent
            </th>
            <td class="td td-data fa">
              ${i}
            </td>
            <td class="td td-data cr">
              ${s}
            </td>
            ${this.summary.has("stimulusRates")?kA`
                <td class="td td-summary far">
                  ${o}
                </td>`:kA``}
          </tr>
          ${this.summary.has("responseRates")||this.summary.has("accuracy")?kA`
              <tr>
                <td colspan="2"></td>
                ${this.summary.has("responseRates")?kA`
                    <td class="td td-summary ppv">
                      ${c}
                    </td>
                    <td class="td td-summary fomr">
                      ${u}
                    </td>`:kA`
                    <td colspan="2"></td>`}
                ${this.summary.has("accuracy")?kA`
                    <td class="td td-summary acc" rowspan="2">
                      ${l}
                    </td>`:kA``}
              </tr>`:kA``}
        </tbody>
      </table>`}});class TP extends($P(SP)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},direction:{attribute:!1,type:Number,reflect:!1},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.direction=-1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.currentDirection=void 0,this.signals=["present","absent"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,s=.25*this.rem,a=.25*this.rem,o=n-(i+s),l=n-(a+.25*this.rem);this.xScale=hP().domain([-1,1]).range([0,l]),this.yScale=hP().domain([1,-1]).range([0,o]);const c=FT(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),f=h.select(".plot").attr("transform",`translate(${a}, ${i})`),p=d.append("g").classed("underlayer",!0),m=f.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");f.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const g=d.append("g").classed("overlayer",!0),b=f.select(".overlayer");g.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=aN()-this.pauseTime,this.pauseTime=0),this.runner=function(t,e,r){var n=new lN,i=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?aN():+r,n._restart(function s(a){a+=i,n._restart(s,i+=e,r),t(a)},e,r)},n.restart(t,e,r),n}(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=aN())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=FT(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();FT(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();FT(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=aN(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"present":"absent",this.currentDirection="absent"===this.signal?void 0:this.direction>=0?this.direction:360*Math.random(),this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length="present"===this.signal?Math.round(this.count*this.coherence):0,this.dots[this.RANDOM].length="present"===this.signal?this.count-this.dots[this.COHERENT].length:this.count;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const s=void 0===this.dots[t][r];s&&(this.dots[t][r]={});const a=this.dots[t][r];if(i||s){a.direction=t===this.RANDOM?360*Math.random():this.currentDirection,a.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());a.x=this.xScale(n*Math.cos(r)),a.y=this.yScale(n*Math.sin(r))}else if(e>a.birth+this.lifetime){a.birth+=this.lifetime,a.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());a.x=this.xScale(r*Math.cos(e)),a.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(a.direction=this.currentDirection);const e=a.direction*(Math.PI/180);a.dx=this.speed*(n/1e3)*Math.cos(e),a.dy=this.speed*(n/1e3)*Math.sin(e),a.x+=a.dx,a.y+=a.dy;(a.x-this.xScale(0))**2+(a.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(a.x=-(a.x-this.xScale(0))+this.xScale(0),a.y=-(a.y-this.yScale(0))+this.yScale(0))}}}const s=FT(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),a=s.enter().append("g").classed("fixation",!0);a.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),a.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),s.exit().remove();const o=FT(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const l=FT(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}function CP(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function NP(t){return NP="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},NP(t)}function RP(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function OP(){return OP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},OP.apply(this,arguments)}function PP(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function IP(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return PP(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?PP(t,e):void 0}}(t))||e){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw s}}}}function FP(t,e){var r=[],n=[];return t.length&&function t(e,i){if(1===e.length)r.push(e[0]),n.push(e[0]);else{for(var s=Array(e.length-1),a=0;a<s.length;a++)0===a&&r.push(e[0]),a===s.length-1&&n.push(e[a+1]),s[a]=[(1-i)*e[a][0]+i*e[a+1][0],(1-i)*e[a][1]+i*e[a+1][1]];t(s,i)}}(t,e),{left:r,right:n.reverse()}}function DP(t){var e={};return 4===t.length&&(e.x2=t[2][0],e.y2=t[2][1]),t.length>=3&&(e.x1=t[1][0],e.y1=t[1][1]),e.x=t[t.length-1][0],e.y=t[t.length-1][1],4===t.length?e.type="C":3===t.length?e.type="Q":e.type="L",e}function zP(t,e,r){var n=[[t.x,t.y]];return null!=e.x1&&n.push([e.x1,e.y1]),null!=e.x2&&n.push([e.x2,e.y2]),n.push([e.x,e.y]),function(t,e){for(var r=[],n=t,i=1/(e=e||2),s=0;s<e-1;s++){var a=FP(n,i/(1-i*s));r.push(a.left),n=a.right}return r.push(n),r}(n,r).map(DP)}customElements.define("rdk-task",TP);var qP=/[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g,jP={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"],Z:[]};function UP(t,e){for(var r=Array(t),n=0;n<t;n++)r[n]=e;return r}function LP(t){return"".concat(t.type).concat(jP[t.type].map(function(e){return t[e]}).join(","))}function BP(t,e,r){var n=t.length-1,i=e.length-1,s=n/i,a=UP(i).reduce(function(e,n,i){var a=Math.floor(s*i);if(r&&a<t.length-1&&r(t[a],t[a+1])){var o=s*i%1<.5;e[a]&&(o?a>0?a-=1:a<t.length-1&&(a+=1):a<t.length-1?a+=1:a>0&&(a-=1))}return e[a]=(e[a]||0)+1,e},[]),o=a.reduce(function(e,r,n){if(n===t.length-1){var i=UP(r,OP({},t[t.length-1]));return"M"===i[0].type&&i.forEach(function(t){t.type="L"}),e.concat(i)}return e.concat(function(t,e,r){var n=[];if("L"===e.type||"Q"===e.type||"C"===e.type)n=n.concat(zP(t,e,r));else{var i=OP({},t);"M"===i.type&&(i.type="L"),(n=n.concat(UP(r-1).map(function(){return i}))).push(e)}return n}(t[n],t[n+1],r))},[]);return o.unshift(t[0]),o}function HP(t){for(var e,r,n=(t||"").match(qP)||[],i=[],s=0;s<n.length;++s)if(e=jP[n[s]]){r={type:n[s]};for(var a=0;a<e.length;++a)r[e[a]]=+n[s+a+1];s+=e.length,i.push(r)}return i}function VP(t,e,r){var n=null==t?[]:t.slice(),i=null==e?[]:e.slice(),s="object"===NP(r)?r:{excludeSegment:r,snapEndsToInput:!0},a=s.excludeSegment,o=s.snapEndsToInput;if(!n.length&&!i.length)return function(){return[]};var l=!(0!==n.length&&"Z"!==n[n.length-1].type||0!==i.length&&"Z"!==i[i.length-1].type);n.length>0&&"Z"===n[n.length-1].type&&n.pop(),i.length>0&&"Z"===i[i.length-1].type&&i.pop(),n.length?i.length||i.push(n[0]):n.push(i[0]),0!==Math.abs(i.length-n.length)&&(i.length>n.length?n=BP(n,i,a):i.length<n.length&&(i=BP(i,n,a))),n=n.map(function(t,e){return function(t,e){var r={x1:"x",y1:"y",x2:"x",y2:"y"},n=["xAxisRotation","largeArcFlag","sweepFlag"];if(t.type!==e.type&&"M"!==e.type.toUpperCase()){var i={};Object.keys(e).forEach(function(s){var a=e[s],o=t[s];void 0===o&&(n.includes(s)?o=a:(void 0===o&&r[s]&&(o=t[r[s]]),void 0===o&&(o=0))),i[s]=o}),i.type=e.type,t=i}return t}(t,i[e])});var c=n.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?CP(Object(r),!0).forEach(function(e){RP(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):CP(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t)});return l&&(c.push({type:"Z"}),n.push({type:"Z"})),function(t){if(1===t&&o)return null==e?[]:e;if(0===t)return n;for(var r=0;r<c.length;++r){var s,a=n[r],l=i[r],u=c[r],h=IP(jP[u.type]);try{for(h.s();!(s=h.n()).done;){var d=s.value;u[d]=(1-t)*a[d]+t*l[d],"largeArcFlag"!==d&&"sweepFlag"!==d||(u[d]=Math.round(u[d]))}}catch(t){h.e(t)}finally{h.f()}}return c}}Object.keys(jP).forEach(function(t){jP[t.toLowerCase()]=jP[t]});var XP={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const WP=Object.create(null);for(const t in XP)Object.hasOwn(XP,t)&&(WP[XP[t]]=t);const YP={to:{},get:{}};function KP(t,e,r){return Math.min(Math.max(e,t),r)}function ZP(t){const e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}YP.get=function(t){let e,r;switch(t.slice(0,3).toLowerCase()){case"hsl":e=YP.get.hsl(t),r="hsl";break;case"hwb":e=YP.get.hwb(t),r="hwb";break;default:e=YP.get.rgb(t),r="rgb"}return e?{model:r,value:e}:null},YP.get.rgb=function(t){if(!t)return null;let e,r,n,i=[0,0,0,1];if(e=t.match(/^#([a-f\d]{6})([a-f\d]{2})?$/i)){for(n=e[2],e=e[1],r=0;r<3;r++){const t=2*r;i[r]=Number.parseInt(e.slice(t,t+2),16)}n&&(i[3]=Number.parseInt(n,16)/255)}else if(e=t.match(/^#([a-f\d]{3,4})$/i)){for(e=e[1],n=e[3],r=0;r<3;r++)i[r]=Number.parseInt(e[r]+e[r],16);n&&(i[3]=Number.parseInt(n+n,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i)){for(r=0;r<3;r++)i[r]=Number.parseFloat(e[r+1]);e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i)))return(e=t.toLowerCase().match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:Object.hasOwn(XP,e[1])?(i=XP[e[1]].slice(),i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*Number.parseFloat(e[r+1]));e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}for(r=0;r<3;r++)i[r]=KP(i[r],0,255);return i[3]=KP(i[3],0,1),i},YP.get.hsl=function(t){if(!t)return null;const e=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,KP(Number.parseFloat(e[2]),0,100),KP(Number.parseFloat(e[3]),0,100),KP(Number.isNaN(t)?1:t,0,1)]}return null},YP.get.hwb=function(t){if(!t)return null;const e=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,KP(Number.parseFloat(e[2]),0,100),KP(Number.parseFloat(e[3]),0,100),KP(Number.isNaN(t)?1:t,0,1)]}return null},YP.to.hex=function(...t){return"#"+ZP(t[0])+ZP(t[1])+ZP(t[2])+(t[3]<1?ZP(Math.round(255*t[3])):"")},YP.to.rgb=function(...t){return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},YP.to.rgb.percent=function(...t){const e=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+r+"%, "+n+"%)":"rgba("+e+"%, "+r+"%, "+n+"%, "+t[3]+")"},YP.to.hsl=function(...t){return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},YP.to.hwb=function(...t){let e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},YP.to.keyword=function(...t){return WP[t.slice(0,3)]};const GP={};for(const t of Object.keys(XP))GP[XP[t]]=t;const QP={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},oklab:{channels:3,labels:["okl","oka","okb"]},lch:{channels:3,labels:"lch"},oklch:{channels:3,labels:["okl","okc","okh"]},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},JP=(6/29)**3;function tI(t){const e=t>.0031308?1.055*t**(1/2.4)-.055:12.92*t;return Math.min(Math.max(0,e),1)}function eI(t){return t>.04045?((t+.055)/1.055)**2.4:t/12.92}for(const t of Object.keys(QP)){if(!("channels"in QP[t]))throw new Error("missing channels property: "+t);if(!("labels"in QP[t]))throw new Error("missing channel labels property: "+t);if(QP[t].labels.length!==QP[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:r}=QP[t];delete QP[t].channels,delete QP[t].labels,Object.defineProperty(QP[t],"channels",{value:e}),Object.defineProperty(QP[t],"labels",{value:r})}function rI(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}function nI(t){const e=function(){const t={},e=Object.keys(QP);for(let{length:r}=e,n=0;n<r;n++)t[e[n]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length>0;){const t=r.pop(),n=Object.keys(QP[t]);for(let{length:i}=n,s=0;s<i;s++){const i=n[s],a=e[i];-1===a.distance&&(a.distance=e[t].distance+1,a.parent=t,r.unshift(i))}}return e}function iI(t,e){return function(r){return e(t(r))}}function sI(t,e){const r=[e[t].parent,t];let n=QP[e[t].parent][t],i=e[t].parent;for(;e[i].parent;)r.unshift(e[i].parent),n=iI(QP[e[i].parent][i],n),i=e[i].parent;return n.conversion=r,n}function aI(t){const e=nI(t),r={},n=Object.keys(e);for(let{length:t}=n,i=0;i<t;i++){const t=n[i];null!==e[t].parent&&(r[t]=sI(t,e))}return r}QP.rgb.hsl=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(e,r,n),s=Math.max(e,r,n),a=s-i;let o,l;switch(s){case i:o=0;break;case e:o=(r-n)/a;break;case r:o=2+(n-e)/a;break;case n:o=4+(e-r)/a}o=Math.min(60*o,360),o<0&&(o+=360);const c=(i+s)/2;return l=s===i?0:c<=.5?a/(s+i):a/(2-s-i),[o,100*l,100*c]},QP.rgb.hsv=function(t){let e,r,n,i,s;const a=t[0]/255,o=t[1]/255,l=t[2]/255,c=Math.max(a,o,l),u=c-Math.min(a,o,l),h=function(t){return(c-t)/6/u+.5};if(0===u)i=0,s=0;else{switch(s=u/c,e=h(a),r=h(o),n=h(l),c){case a:i=n-r;break;case o:i=1/3+e-n;break;case l:i=2/3+r-e}i<0?i+=1:i>1&&(i-=1)}return[360*i,100*s,100*c]},QP.rgb.hwb=function(t){const e=t[0],r=t[1];let n=t[2];const i=QP.rgb.hsl(t)[0],s=1/255*Math.min(e,Math.min(r,n));return n=1-1/255*Math.max(e,Math.max(r,n)),[i,100*s,100*n]},QP.rgb.oklab=function(t){const e=eI(t[0]/255),r=eI(t[1]/255),n=eI(t[2]/255),i=Math.cbrt(.4122214708*e+.5363325363*r+.0514459929*n),s=Math.cbrt(.2119034982*e+.6806995451*r+.1073969566*n),a=Math.cbrt(.0883024619*e+.2817188376*r+.6299787005*n);return[100*(.2104542553*i+.793617785*s-.0040720468*a),100*(1.9779984951*i-2.428592205*s+.4505937099*a),100*(.0259040371*i+.7827717662*s-.808675766*a)]},QP.rgb.cmyk=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(1-e,1-r,1-n);return[100*((1-e-i)/(1-i)||0),100*((1-r-i)/(1-i)||0),100*((1-n-i)/(1-i)||0),100*i]},QP.rgb.keyword=function(t){const e=GP[t];if(e)return e;let r,n=Number.POSITIVE_INFINITY;for(const e of Object.keys(XP)){const i=rI(t,XP[e]);i<n&&(n=i,r=e)}return r},QP.keyword.rgb=function(t){return[...XP[t]]},QP.rgb.xyz=function(t){const e=eI(t[0]/255),r=eI(t[1]/255),n=eI(t[2]/255);return[100*(.4124564*e+.3575761*r+.1804375*n),100*(.2126729*e+.7151522*r+.072175*n),100*(.0193339*e+.119192*r+.9503041*n)]},QP.rgb.lab=function(t){const e=QP.rgb.xyz(t);let r=e[0],n=e[1],i=e[2];r/=95.047,n/=100,i/=108.883,r=r>JP?r**(1/3):7.787*r+16/116,n=n>JP?n**(1/3):7.787*n+16/116,i=i>JP?i**(1/3):7.787*i+16/116;return[116*n-16,500*(r-n),200*(n-i)]},QP.hsl.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;let i,s;if(0===r)return s=255*n,[s,s,s];const a=n<.5?n*(1+r):n+r-n*r,o=2*n-a,l=[0,0,0];for(let t=0;t<3;t++)i=e+1/3*-(t-1),i<0&&i++,i>1&&i--,s=6*i<1?o+6*(a-o)*i:2*i<1?a:3*i<2?o+(a-o)*(2/3-i)*6:o,l[t]=255*s;return l},QP.hsl.hsv=function(t){const e=t[0];let r=t[1]/100,n=t[2]/100,i=r;const s=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,i*=s<=1?s:2-s;return[e,100*(0===n?2*i/(s+i):2*r/(n+r)),100*((n+r)/2)]},QP.hsv.rgb=function(t){const e=t[0]/60,r=t[1]/100;let n=t[2]/100;const i=Math.floor(e)%6,s=e-Math.floor(e),a=255*n*(1-r),o=255*n*(1-r*s),l=255*n*(1-r*(1-s));switch(n*=255,i){case 0:return[n,l,a];case 1:return[o,n,a];case 2:return[a,n,l];case 3:return[a,o,n];case 4:return[l,a,n];case 5:return[n,a,o]}},QP.hsv.hsl=function(t){const e=t[0],r=t[1]/100,n=t[2]/100,i=Math.max(n,.01);let s,a;a=(2-r)*n;const o=(2-r)*i;return s=r*i,s/=o<=1?o:2-o,s=s||0,a/=2,[e,100*s,100*a]},QP.hwb.rgb=function(t){const e=t[0]/360;let r=t[1]/100,n=t[2]/100;const i=r+n;let s;i>1&&(r/=i,n/=i);const a=Math.floor(6*e),o=1-n;s=6*e-a,1&a&&(s=1-s);const l=r+s*(o-r);let c,u,h;switch(a){default:case 6:case 0:c=o,u=l,h=r;break;case 1:c=l,u=o,h=r;break;case 2:c=r,u=o,h=l;break;case 3:c=r,u=l,h=o;break;case 4:c=l,u=r,h=o;break;case 5:c=o,u=r,h=l}return[255*c,255*u,255*h]},QP.cmyk.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i))]},QP.xyz.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100;let i,s,a;return i=3.2404542*e+-1.5371385*r+-.4985314*n,s=-.969266*e+1.8760108*r+.041556*n,a=.0556434*e+-.2040259*r+1.0572252*n,i=tI(i),s=tI(s),a=tI(a),[255*i,255*s,255*a]},QP.xyz.lab=function(t){let e=t[0],r=t[1],n=t[2];e/=95.047,r/=100,n/=108.883,e=e>JP?e**(1/3):7.787*e+16/116,r=r>JP?r**(1/3):7.787*r+16/116,n=n>JP?n**(1/3):7.787*n+16/116;return[116*r-16,500*(e-r),200*(r-n)]},QP.xyz.oklab=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=Math.cbrt(.8189330101*e+.3618667424*r-.1288597137*n),s=Math.cbrt(.0329845436*e+.9293118715*r+.0361456387*n),a=Math.cbrt(.0482003018*e+.2643662691*r+.633851707*n);return[100*(.2104542553*i+.793617785*s-.0040720468*a),100*(1.9779984951*i-2.428592205*s+.4505937099*a),100*(.0259040371*i+.7827717662*s-.808675766*a)]},QP.oklab.oklch=function(t){return QP.lab.lch(t)},QP.oklab.xyz=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(.999999998*e+.396337792*r+.215803758*n)**3,s=(1.000000008*e-.105561342*r-.063854175*n)**3,a=(1.000000055*e-.089484182*r-1.291485538*n)**3;return[100*(1.227013851*i-.55779998*s+.281256149*a),100*(-.040580178*i+1.11225687*s-.071676679*a),100*(-.076381285*i-.421481978*s+1.58616322*a)]},QP.oklab.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(e+.3963377774*r+.2158037573*n)**3,s=(e-.1055613458*r-.0638541728*n)**3,a=(e-.0894841775*r-1.291485548*n)**3;return[255*tI(4.0767416621*i-3.3077115913*s+.2309699292*a),255*tI(-1.2684380046*i+2.6097574011*s-.3413193965*a),255*tI(-.0041960863*i-.7034186147*s+1.707614701*a)]},QP.oklch.oklab=function(t){return QP.lch.lab(t)},QP.lab.xyz=function(t){let e,r,n;r=(t[0]+16)/116,e=t[1]/500+r,n=r-t[2]/200;const i=r**3,s=e**3,a=n**3;return r=i>JP?i:(r-16/116)/7.787,e=s>JP?s:(e-16/116)/7.787,n=a>JP?a:(n-16/116)/7.787,e*=95.047,r*=100,n*=108.883,[e,r,n]},QP.lab.lch=function(t){const e=t[0],r=t[1],n=t[2];let i;i=360*Math.atan2(n,r)/2/Math.PI,i<0&&(i+=360);return[e,Math.sqrt(r*r+n*n),i]},QP.lch.lab=function(t){const e=t[0],r=t[1],n=t[2]/360*2*Math.PI;return[e,r*Math.cos(n),r*Math.sin(n)]},QP.rgb.ansi16=function(t,e=null){const[r,n,i]=t;let s=null===e?QP.rgb.hsv(t)[2]:e;if(s=Math.round(s/50),0===s)return 30;let a=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===s&&(a+=60),a},QP.hsv.ansi16=function(t){return QP.rgb.ansi16(QP.hsv.rgb(t),t[2])},QP.rgb.ansi256=function(t){const e=t[0],r=t[1],n=t[2];if(e>>4==r>>4&&r>>4==n>>4)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},QP.ansi16.rgb=function(t){let e=(t=t[0])%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const r=.5*(Math.trunc(t>50)+1);return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},QP.ansi256.rgb=function(t){if((t=t[0])>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},QP.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".slice(e.length)+e},QP.hex.rgb=function(t){const e=t.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!e)return[0,0,0];let r=e[0];3===e[0].length&&(r=[...r].map(t=>t+t).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},QP.rgb.hcg=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.max(Math.max(e,r),n),s=Math.min(Math.min(e,r),n),a=i-s;let o;return o=a<=0?0:i===e?(r-n)/a%6:i===r?2+(n-e)/a:4+(e-r)/a,o/=6,o%=1,[360*o,100*a,100*(a<1?s/(1-a):0)]},QP.hsl.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=r<.5?2*e*r:2*e*(1-r);let i=0;return n<1&&(i=(r-.5*n)/(1-n)),[t[0],100*n,100*i]},QP.hsv.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=e*r;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},QP.hcg.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;if(0===r)return[255*n,255*n,255*n];const i=[0,0,0],s=e%1*6,a=s%1,o=1-a;let l=0;switch(Math.floor(s)){case 0:i[0]=1,i[1]=a,i[2]=0;break;case 1:i[0]=o,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=a;break;case 3:i[0]=0,i[1]=o,i[2]=1;break;case 4:i[0]=a,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=o}return l=(1-r)*n,[255*(r*i[0]+l),255*(r*i[1]+l),255*(r*i[2]+l)]},QP.hcg.hsv=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);let n=0;return r>0&&(n=e/r),[t[0],100*n,100*r]},QP.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let n=0;return r>0&&r<.5?n=e/(2*r):r>=.5&&r<1&&(n=e/(2*(1-r))),[t[0],100*n,100*r]},QP.hcg.hwb=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},QP.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,n=r-e;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},QP.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},QP.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},QP.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},QP.gray.hsl=function(t){return[0,0,t[0]]},QP.gray.hsv=QP.gray.hsl,QP.gray.hwb=function(t){return[0,100,t[0]]},QP.gray.cmyk=function(t){return[0,0,0,t[0]]},QP.gray.lab=function(t){return[t[0],0,0]},QP.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".slice(r.length)+r},QP.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const oI={},lI=Object.keys(QP);function cI(t){const e=function(...e){const r=e[0];return null==r?r:(r.length>1&&(e=r),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}function uI(t){const e=function(...e){const r=e[0];if(null==r)return r;r.length>1&&(e=r);const n=t(e);if("object"==typeof n)for(let{length:t}=n,e=0;e<t;e++)n[e]=Math.round(n[e]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}for(const t of lI){oI[t]={},Object.defineProperty(oI[t],"channels",{value:QP[t].channels}),Object.defineProperty(oI[t],"labels",{value:QP[t].labels});const e=aI(t),r=Object.keys(e);for(const n of r){const r=e[n];oI[t][n]=uI(r),oI[t][n].raw=cI(r)}}const hI=["keyword","gray","hex"],dI={};for(const t of Object.keys(oI))dI[[...oI[t].labels].sort().join("")]=t;const fI={};function pI(t,e){if(!(this instanceof pI))return new pI(t,e);if(e&&e in hI&&(e=null),e&&!(e in oI))throw new Error("Unknown model: "+e);let r,n;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof pI)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"==typeof t){const e=YP.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,n=oI[this.model].channels,this.color=e.value.slice(0,n),this.valpha="number"==typeof e.value[n]?e.value[n]:1}else if(t.length>0){this.model=e||"rgb",n=oI[this.model].channels;const r=Array.prototype.slice.call(t,0,n);this.color=vI(r,n),this.valpha="number"==typeof t[n]?t[n]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const n=e.sort().join("");if(!(n in dI))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=dI[n];const{labels:i}=oI[this.model],s=[];for(r=0;r<i.length;r++)s.push(t[i[r]]);this.color=vI(s)}if(fI[this.model])for(n=oI[this.model].channels,r=0;r<n;r++){const t=fI[this.model][r];t&&(this.color[r]=t(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}pI.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in YP.to?this:this.rgb();e=e.round("number"==typeof t?t:1);const r=1===e.valpha?e.color:[...e.color,this.valpha];return YP.to[e.model](...r)},percentString(t){const e=this.rgb().round("number"==typeof t?t:1),r=1===e.valpha?e.color:[...e.color,this.valpha];return YP.to.rgb.percent(...r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=oI[this.model],{labels:r}=oI[this.model];for(let n=0;n<e;n++)t[r[n]]=this.color[n];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new pI([...this.color.map(mI(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new pI([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:gI("rgb",0,bI(255)),green:gI("rgb",1,bI(255)),blue:gI("rgb",2,bI(255)),hue:gI(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:gI("hsl",1,bI(100)),lightness:gI("hsl",2,bI(100)),saturationv:gI("hsv",1,bI(100)),value:gI("hsv",2,bI(100)),chroma:gI("hcg",1,bI(100)),gray:gI("hcg",2,bI(100)),white:gI("hwb",1,bI(100)),wblack:gI("hwb",2,bI(100)),cyan:gI("cmyk",0,bI(100)),magenta:gI("cmyk",1,bI(100)),yellow:gI("cmyk",2,bI(100)),black:gI("cmyk",3,bI(100)),x:gI("xyz",0,bI(95.047)),y:gI("xyz",1,bI(100)),z:gI("xyz",2,bI(108.833)),l:gI("lab",0,bI(100)),a:gI("lab",1),b:gI("lab",2),keyword(t){return void 0!==t?new pI(t):oI[this.model].keyword(this.color)},hex(t){return void 0!==t?new pI(t):YP.to.hex(...this.rgb().round().color)},hexa(t){if(void 0!==t)return new pI(t);const e=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),YP.to.hex(...e)+r},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[r,n]of t.entries()){const t=n/255;e[r]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(2126*t[0]+7152*t[1]+722*t[2])/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return pI.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let r=e.color[0];return r=(r+t)%360,r=r<0?360+r:r,e.color[0]=r,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const r=t.rgb(),n=this.rgb(),i=void 0===e?.5:e,s=2*i-1,a=r.alpha()-n.alpha(),o=((s*a===-1?s:(s+a)/(1+s*a))+1)/2,l=1-o;return pI.rgb(o*r.red()+l*n.red(),o*r.green()+l*n.green(),o*r.blue()+l*n.blue(),r.alpha()*i+n.alpha()*(1-i))}};for(const t of Object.keys(oI)){if(hI.includes(t))continue;const{channels:e}=oI[t];pI.prototype[t]=function(...e){return this.model===t?new pI(this):e.length>0?new pI(e,t):new pI([...(r=oI[this.model][t].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],t);var r},pI[t]=function(...r){let n=r[0];return"number"==typeof n&&(n=vI(r,e)),new pI(n,t)}}function mI(t){return function(e){return function(t,e){return Number(t.toFixed(e))}(e,t)}}function gI(t,e,r){t=Array.isArray(t)?t:[t];for(const n of t)(fI[n]||=[])[e]=r;return t=t[0],function(n){let i;return void 0!==n?(r&&(n=r(n)),i=this[t](),i.color[e]=n,i):(i=this[t]().color[e],r&&(i=r(i)),i)}}function bI(t){return function(e){return Math.max(0,Math.min(t,e))}}function vI(t,e){for(let r=0;r<e;r++)"number"!=typeof t[r]&&(t[r]=0);return t}class yI extends($P(SP)){static get properties(){return{contour:{attribute:"contour",type:String,reflect:!0},point:{attribute:"point",type:String,reflect:!0},isoD:{attribute:"iso-d",type:String,reflect:!0},isoC:{attribute:"iso-c",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.sdt=!1,this.contours=["sensitivity","bias","accuracy"],this.contour=void 0,this.points=["all","first","rest","none"],this.point="all",this.isoDs=["all","first","rest","none"],this.isoD="first",this.isoCs=["all","first","rest","none"],this.isoC="first",this.zRoc=!1,this.far=.25,this.hr=.75,this.s=MP.s.DEFAULT,this.label="",this.locations=[{name:"default",far:this.far,hr:this.hr,s:this.s,label:""}],this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.alignState()}alignState(){this.locations[0].hr=this.hr,this.locations[0].far=this.far,this.locations[0].s=this.s,this.locations[0].label=this.label,this.d=MP.hrFar2D(this.hr,this.far,this.s),this.c=MP.hrFar2C(this.hr,this.far,this.s),this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.locations.forEach((t,e)=>{t.d=MP.hrFar2D(t.hr,t.far,t.s),t.c=MP.hrFar2C(t.hr,t.far,t.s),0!==e||"first"!==this.point&&"all"!==this.point?e>0&&("rest"===this.point||"all"===this.point)&&this.pointArray.push(t):this.pointArray.push(t),0!==e||"first"!==this.isoD&&"all"!==this.isoD?e>0&&("rest"===this.isoD||"all"===this.isoD)&&this.isoDArray.push(t):this.isoDArray.push(t),0!==e||"first"!==this.isoC&&"all"!==this.isoC?e>0&&("rest"===this.isoC||"all"===this.isoC)&&this.isoCArray.push(t):this.isoCArray.push(t)})}set(t,e,r="default",n="",i=1){"default"===r&&(this.hr=t,this.far=e,this.s=i,this.label=n);const s=this.locations.find(t=>t.name===r);void 0===s?this.locations.push({name:r,far:e,hr:t,s:i,label:n}):(s.hr=t,s.far=e,s.s=i,s.label=n),this.requestUpdate()}setWithSDT(t,e,r="default",n="",i=1){"default"===r&&(this.hr=MP.dC2Hr(t,e,i),this.far=MP.dC2Far(t,e,i),this.s=i,this.label=n);const s=this.locations.find(t=>t.name===r);void 0===s?this.locations.push({name:r,far:MP.dC2Far(t,e,i),hr:MP.dC2Hr(t,e,i),s:i,label:n}):(s.hr=MP.dC2Hr(t,e,i),s.far=MP.dC2Far(t,e,i),s.s=i,s.label=n),this.sdt=!0,this.requestUpdate()}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,s=3*this.rem,a=3*this.rem,o=n-(i+s),l=n-(a+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=hP().domain(this.zRoc?[-3,3]:[0,1]).range([0,l]);this.xScale=u;const h=hP().domain(this.zRoc?[3,-3]:[1,0]).range([0,o]);this.yScale=h;const d=YT().subject((t,e)=>({x:this.xScale(this.zRoc?MP.far2Zfar(e.far):e.far),y:this.yScale(this.zRoc?MP.hr2Zhr(e.hr):e.hr)})).on("start",t=>{FT(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.zRoc?MP.zfar2Far(this.xScale.invert(t.x)):this.xScale.invert(t.x),n=this.zRoc?MP.zhr2Hr(this.yScale.invert(t.y)):this.yScale.invert(t.y);e.far=r<.001?.001:r>.999?.999:r,e.hr=n<=.001?.001:n>=.999?.999:n,"default"===e.name&&(this.far=e.far,this.hr=e.hr),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))}).on("end",t=>{FT(t.currentTarget).classed("dragging",!1)}),f=bP().x(t=>u(this.zRoc?MP.far2Zfar(t.far):t.far)).y(t=>h(this.zRoc?MP.hr2Zhr(t.hr):t.hr)),p=FT(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),m=p.enter().append("svg").classed("main",!0).each((t,e,r)=>{jA(SP.svgFilters,r[e])}),g=m.merge(p).attr("viewBox",`0 0 ${n} ${n}`),b=m.append("g").classed("plot",!0),v=g.select(".plot").attr("transform",`translate(${a}, ${i})`);b.append("clipPath").attr("id","clip-roc-space").append("rect"),v.select("clipPath rect").attr("height",o+1).attr("width",l+1);const y=b.append("g").classed("underlayer",!0),w=v.select(".underlayer");if(y.append("rect").classed("background",!0),w.select(".background").attr("height",o).attr("width",l),this.firstUpdate||t.has("contour")||t.has("zRoc")||t.has("width")||t.has("height")||t.has("rem")||t.has("s"))if(void 0!==this.contour){const t=100,e=[];for(let r=.5,n=0;r<t;r+=1)for(let i=.5;i<t;i+=1,n+=1){const s=this.zRoc?MP.zhr2Hr(i/t*6-3):i/t,a=this.zRoc?MP.zfar2Far(6*(1-r/t)-3):1-r/t;e[n]="bias"===this.contour?MP.hrFar2C(s,a,this.s):"sensitivity"===this.contour?MP.hrFar2D(s,a,this.s):"accuracy"===this.contour?MP.hrFar2Acc(s,a):null}const r="bias"===this.contour?lM(-3,3,.25):"sensitivity"===this.contour?lM(-6,6,.5):"accuracy"===this.contour?lM(0,1,.05):null,n=oR().size([t,t]).thresholds(r),i=this.getComputedStyleValue("bias"===this.contour?"---color-element-background":"sensitivity"===this.contour?"---color-d":"accuracy"===this.contour?"---color-acc-dark":null),s=this.getComputedStyleValue("bias"===this.contour?"---color-c":"sensitivity"===this.contour||"accuracy"===this.contour?"---color-element-background":null),a=hP().domain(KA(r)).interpolate(()=>RC(pI(i).hex(),pI(s).hex())),o=w.selectAll(".plot-contour").data([this.contour]),u=o.enter().append("g").classed("plot-contour",!0).merge(o).selectAll(".contour").data(n(e));u.enter().append("path").classed("contour",!0).merge(u).transition().duration(2*c).ease(HN).attrTween("d",(e,r,n)=>function(t,e,r){var n=HP(t),i=HP(e),s="object"===NP(r)?r:{excludeSegment:r,snapEndsToInput:!0},a=s.excludeSegment,o=s.snapEndsToInput;if(!n.length&&!i.length)return function(){return""};var l=VP(n,i,{excludeSegment:a,snapEndsToInput:o});return function(t){if(1===t&&o)return null==e?"":e;var r,n="",i=IP(l(t));try{for(i.s();!(r=i.n()).done;)n+=LP(r.value)}catch(t){i.e(t)}finally{i.f()}return n}}(FT(n[r]).attr("d"),GO(eP().scale(l/t))(e))).attr("fill",t=>a(t.value)),u.exit().remove();const h=w.selectAll(".title-contour").data([this.contour]);h.enter().append("text").classed("title-contour",!0).attr("text-anchor","middle").merge(h).classed("math-var","bias"===this.contour||"sensitivity"===this.contour).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${this.rem})`:"accuracy"===this.contour?`translate(${l+1.125*this.rem}, ${this.rem})`:null).text("bias"===this.contour?"c":"sensitivity"===this.contour?"d′":"accuracy"===this.contour?"Acc":null);const d=100,f=[];for(let e=.5,r=0;e<d;e+=1,r+=4)f[r]="bias"===this.contour?-(e/t*6-3):"sensitivity"===this.contour?e/t*12-6:"accuracy"===this.contour?e/t:null,f[r+1]=f[r],f[r+2]=f[r],f[r+3]=f[r];const p=oR().size([4,d]).thresholds(r),m=hP().domain("bias"===this.contour?[3,-3]:"sensitivity"===this.contour?[6,-6]:"accuracy"===this.contour?[1,0]:null).range([0,10*this.rem]),g=w.selectAll(".legend-contour").data([this.contour]),b=g.enter().append("g").classed("legend-contour",!0),v=b.merge(g).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${1.5*this.rem})`:"accuracy"===this.contour?`translate(${l+1.5*this.rem}, ${1.5*this.rem})`:null);g.exit().remove(),b.append("g").classed("axis-contour",!0),v.select(".axis-contour").call(vM(m).ticks(7).tickSize(0)).attr("font-size",null).attr("font-family",null);const y=v.selectAll(".contour").data(p(f));y.enter().append("path").classed("contour",!0).merge(y).attr("d",GO(eP().scale(10*this.rem/d))).attr("fill",t=>a(t.value)),y.exit().remove()}else{w.selectAll(".plot-contour").data([]).exit().remove();w.selectAll(".title-contour").data([]).exit().remove();w.selectAll(".legend-contour").data([]).exit().remove()}y.append("g").classed("axis-x",!0);w.select(".axis-x").attr("transform",`translate(0, ${o})`).transition().duration(2*c).ease(HN).call(bM(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const x=y.append("text").classed("title-x",!0).attr("text-anchor","middle");x.append("tspan").classed("z math-var",!0),x.append("tspan").classed("name",!0);const k=w.select(".title-x").attr("transform",`translate(${l/2}, ${o+2.25*this.rem})`);k.select("tspan.z").text(this.zRoc?"z":""),k.select("tspan.name").text(this.zRoc?"(False Alarm Rate)":"False Alarm Rate"),y.append("g").classed("axis-y",!0);w.select(".axis-y").transition().duration(2*c).ease(HN).call(vM(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const $=y.append("text").classed("title-y",!0).attr("text-anchor","middle");$.append("tspan").classed("z math-var",!0),$.append("tspan").classed("name",!0);const _=w.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${o/2})rotate(-90)`);_.select("tspan.z").text(this.zRoc?"z":""),_.select("tspan.name").text(this.zRoc?"(Hit Rate)":"Hit Rate"),y.append("line").classed("diagonal",!0),w.select(".diagonal").attr("x1",this.zRoc?u(-3):u(0)).attr("y1",this.zRoc?h(-3):h(0)).attr("x2",this.zRoc?u(3):u(1)).attr("y2",this.zRoc?h(3):h(1)),b.append("g").classed("content",!0);const S=v.select(".content"),E=S.selectAll(".curve-iso-d").data(this.isoDArray,t=>t.name),A=E.enter().append("path").classed("curve-iso-d",!0).attr("clip-path","url(#clip-roc-space)").merge(E);this.firstUpdate||t.has("zRoc")?A.transition().duration(this.drag?0:2*c).ease(HN).attr("d",t=>f(lM(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?MP.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?MP.dFar2Hr(t.d,MP.zfar2Far(u.invert(e)),t.s):MP.dFar2Hr(t.d,u.invert(e),t.s)})))):this.sdt?A.transition().duration(this.drag?0:c).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=UC(void 0!==n.d?n.d:t.d,t.d),s=UC(void 0!==n.s?n.s:t.s,t.s);return t=>{n.d=i(t),n.s=s(t);const e=lM(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?MP.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?MP.dFar2Hr(n.d,MP.zfar2Far(u.invert(t)),n.s):MP.dFar2Hr(n.d,u.invert(t),n.s)}));return f(e)}}):A.transition().duration(this.drag?0:c).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e];n.d=void 0,n.s=void 0;const i=UC(void 0!==n.hr?n.hr:t.hr,t.hr),s=UC(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=s(e);const r=lM(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?MP.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?MP.dFar2Hr(MP.hrFar2D(n.hr,n.far,t.s),MP.zfar2Far(u.invert(e)),t.s):MP.dFar2Hr(MP.hrFar2D(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),E.exit().remove();const M=S.selectAll(".curve-iso-c").data(this.isoCArray,t=>t.name),T=M.enter().append("path").classed("curve-iso-c",!0).attr("clip-path","url(#clip-roc-space)").merge(M);this.firstUpdate||t.has("zRoc")?T.transition().duration(this.drag?0:2*c).ease(HN).attr("d",t=>f(lM(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?MP.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?MP.cFar2Hr(t.c,MP.zfar2Far(u.invert(e)),t.s):MP.cFar2Hr(t.c,u.invert(e),t.s)})))):this.sdt?T.transition().duration(this.drag?0:c).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=UC(void 0!==n.c?n.c:t.c,t.c),s=UC(void 0!==n.s?n.s:t.s,t.s);return t=>{n.c=i(t),n.s=s(t);const e=lM(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?MP.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?MP.cFar2Hr(n.c,MP.zfar2Far(u.invert(t)),n.s):MP.cFar2Hr(n.c,u.invert(t),n.s)}));return f(e)}}):T.transition().duration(this.drag?0:c).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e];n.c=void 0,n.s=void 0;const i=UC(void 0!==n.hr?n.hr:t.hr,t.hr),s=UC(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=s(e);const r=lM(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?MP.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?MP.cFar2Hr(MP.hrFar2C(n.hr,n.far,t.s),MP.zfar2Far(u.invert(e)),t.s):MP.cFar2Hr(MP.hrFar2C(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),M.exit().remove();const C=S.selectAll(".point").data(this.pointArray,t=>t.name),N=C.enter().append("g").classed("point",!0);N.append("circle").classed("circle touch",!0),N.append("text").classed("label",!0);const R=N.merge(C);R.select("text").text(t=>t.label),(this.firstUpdate||t.has("interactive"))&&(this.interactive?R.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.zRoc?MP.hr2Zhr(e.hr):e.hr,n=this.zRoc?MP.far2Zfar(e.far):e.far;switch(t.key){case"ArrowUp":r+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowDown":r-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowRight":n+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowLeft":n-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05}r=this.zRoc?MP.zhr2Hr(r):r,n=this.zRoc?MP.zfar2Far(n):n,r=r<.001?.001:r>.999?.999:r,n=n<.001?.001:n>.999?.999:n,r===e.hr&&n===e.far||(e.hr=r,e.far=n,"default"===e.name&&(this.hr=e.hr,this.far=e.far),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))),t.preventDefault()}}):R.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),this.firstUpdate||t.has("zRoc")?R.transition().duration(this.drag?0:2*c).ease(HN).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?MP.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?MP.hr2Zhr(t.hr):t.hr)}\n          )`}):this.sdt?R.transition().duration(this.drag?0:c).ease(HN).attrTween("transform",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:t.d,t.d),s=UC(void 0!==n.c?n.c:t.c,t.c),a=UC(void 0!==n.s?n.s:t.s,t.s);return t=>(n.d=i(t),n.c=s(t),n.s=a(t),`translate(\n              ${u(this.zRoc?MP.far2Zfar(MP.dC2Far(n.d,n.c,n.s)):MP.dC2Far(n.d,n.c,n.s))},\n              ${h(this.zRoc?MP.hr2Zhr(MP.dC2Hr(n.d,n.c,n.s)):MP.dC2Hr(n.d,n.c,n.s))}\n            )`)}):R.transition().duration(this.drag?0:c).ease(HN).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?MP.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?MP.hr2Zhr(t.hr):t.hr)}\n          )`}),C.exit().remove(),this.drag=!1,this.sdt=!1,this.firstUpdate=!1}}customElements.define("roc-space",yI);class wI extends($P(SP)){static get properties(){return{color:{attribute:"color",type:String,reflect:!0},distributions:{attribute:"distributions",type:Boolean,reflect:!0},threshold:{attribute:"threshold",type:Boolean,reflect:!0},unequal:{attribute:"unequal",type:Boolean,reflect:!0},sensitivity:{attribute:"sensitivity",type:Boolean,reflect:!0},bias:{attribute:"bias",type:Boolean,reflect:!0},variance:{attribute:"variance",type:Boolean,reflect:!0},histogram:{attribute:"histogram",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},binWidth:{attribute:!1,type:Number,reflect:!1},trials:{attribute:!1,type:Array,reflect:!1}}}constructor(){super(),this.colors=["all","outcome","response","stimulus","none"],this.color="all",this.distributions=!1,this.threshold=!1,this.unequal=!1,this.sensitivity=!1,this.bias=!1,this.variance=!1,this.histogram=!1,this.d=MP.d.DEFAULT,this.c=MP.c.DEFAULT,this.s=MP.s.DEFAULT,this.binWidth=.25,this.signals=["present","absent"],this.responses=["present","absent"],this.trials=[],this.muN=NaN,this.muS=NaN,this.l=NaN,this.hS=NaN,this.binRange=[-3,3],this.h=0,this.m=0,this.fa=0,this.cr=0,this.firstUpdate=!0,this.drag=!1,this.alignState()}reset(){this.trials=[],this.h=0,this.m=0,this.fa=0,this.cr=0}trial(t,e,r,n,i){const s={new:!0,paused:!1};s.trial=t,s.signal=e,s.duration=r,s.wait=n,s.iti=i,s.evidence=AP.normal.sample(0,1),this.alignTrial(s),this.trials.push(s),this.requestUpdate()}alignTrial(t){return"present"===t.signal?(t.trueEvidence=t.evidence*this.s+this.muS,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"h":"m"):(t.trueEvidence=t.evidence+this.muN,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"fa":"cr"),t.new||(this[t.outcome]+=1),t}alignState(){this.far=MP.dC2Far(this.d,this.c,this.s),this.hr=MP.dC2Hr(this.d,this.c,this.s),this.muN=MP.d2MuN(this.d,this.s),this.muS=MP.d2MuS(this.d,this.s),this.l=MP.c2L(this.c,this.s),this.hS=MP.s2H(this.s),this.h=0,this.m=0,this.fa=0,this.cr=0;for(let t=0;t<this.trials.length;t+=1)this.alignTrial(this.trials[t])}static get styles(){return[super.styles,qE`
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
      `]}render(){return kA``}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-model-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far,hr:this.hr,h:this.h,m:this.m,fa:this.fa,cr:this.cr},bubbles:!0}))}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const s=2*this.rem,a=3*this.rem,o=3*this.rem,l=i-(s+a),c=n-(o+(this.histogram&&this.distributions?3:.75)*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=hP().domain([-3,3]).range([0,c]),d=hP().domain([.5,0]).range([0,l]),f=h(this.binWidth)-h(0),p=hP().domain([l/f,0]).range([0,l]),m=YT().subject(()=>({x:h(this.l),y:0})).on("start",t=>{FT(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=MP.l2C(e,this.s);this.c=r<MP.c.MIN?MP.c.MIN:r>MP.c.MAX?MP.c.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{FT(t.currentTarget).classed("dragging",!1)}),g=YT().subject(()=>({x:h(this.muN),y:0})).on("start",t=>{FT(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=MP.muN2D(e,this.s);this.d=r<MP.d.MIN?MP.d.MIN:r>MP.d.MAX?MP.d.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{FT(t.currentTarget).classed("dragging",!1)}),b=YT().subject(()=>({x:h(this.muS),y:d(this.hS)})).on("start",(t,e)=>{FT(t.currentTarget).classed("dragging",!0),e.startX=t.x,e.startY=t.y,e.startHS=this.hS,e.startMuS=this.muS}).on("drag",(t,e)=>{this.drag=!0;let r=this.muS;this.interactive&&(r=h.invert(t.x));let n=this.hS;if(this.unequal&&(n=d.invert(t.y)),this.interactive&&this.unequal&&t.sourceEvent.shiftKey&&(Math.abs(t.x-e.startX)>Math.abs(t.y-e.startY)?n=e.startHS:r=e.startMuS),this.unequal){const t=MP.h2S(n);this.s=t<MP.s.MIN?MP.s.MIN:t>MP.s.MAX?MP.s.MAX:t;const e=MP.l2C(this.l,this.s);this.c=e<MP.c.MIN?MP.c.MIN:e>MP.c.MAX?MP.c.MAX:e}const i=MP.muS2D(r,this.s);this.d=i<MP.d.MIN?MP.d.MIN:i>MP.d.MAX?MP.d.MAX:i,this.alignState(),this.sendEvent()}).on("end",t=>{FT(t.currentTarget).classed("dragging",!1)}),v=bP().x(t=>h(t.e)).y(t=>d(t.p)),y=FT(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),w=y.enter().append("svg").classed("main",!0).each((t,e,r)=>{jA(SP.svgFilters,r[e])}),x=w.merge(y).attr("viewBox",`0 0 ${n} ${i}`),k=w.append("g").classed("plot",!0),$=x.select(".plot").attr("transform",`translate(${o}, ${s})`),_=k.append("g").classed("underlayer",!0),S=$.select(".underlayer");_.append("rect").classed("background",!0),S.select(".background").attr("height",l).attr("width",c),_.append("g").classed("axis-x",!0);S.select(".axis-x").attr("transform",`translate(0, ${l})`).call(bM(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),_.append("text").classed("title-x",!0).attr("text-anchor","middle").text("Evidence"),S.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`);const E=S.selectAll(".axis-y").data(this.distributions?[{}]:[]);E.enter().append("g").classed("axis-y",!0).merge(E).call(vM(d).ticks(5)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),E.exit().remove();const A=S.selectAll(".title-y").data(this.distributions?[{}]:[]);A.enter().append("text").classed("title-y",!0).attr("text-anchor","middle").text("Probability").merge(A).attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),A.exit().remove();const M=S.selectAll(".axis-y2").data(this.histogram?[{}]:[]);var T;M.enter().append("g").classed("axis-y2",!0).merge(M).attr("transform",this.distributions?`translate(${c}, 0)`:"").call(this.distributions?(T=p,gM(2,T)).ticks(10):vM(p).ticks(10)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),M.exit().remove();const C=S.selectAll(".title-y2").data(this.histogram?[{}]:[]);C.enter().append("text").classed("title-y2",!0).attr("text-anchor","middle").text("Count").merge(C).attr("transform",this.distributions?`translate(${c+1.5*this.rem}, ${l/2})rotate(90)`:`translate(${-1.5*this.rem}, ${l/2})rotate(-90)`),C.exit().remove(),k.append("g").classed("content",!0);const N=$.select(".content"),R=N.selectAll(".signal-noise").data(this.distributions?[{}]:[]),O=R.enter().append("g").classed("signal-noise",!0),P=O.merge(R);R.exit().remove();const I=O.append("g").classed("noise",!0),F=P.selectAll(".noise").attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muN;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=MP.muN2D(e,this.s);this.d=r<MP.d.MIN?MP.d.MIN:r>MP.d.MAX?MP.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?F.call(g):F.on(".drag",null)),I.append("path").classed("curve-cr",!0),F.select(".curve-cr").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.c?n.c:this.c,this.c),a=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=s(t),n.s=a(t);const e=lM(h.domain()[0],MP.c2L(n.c,n.s),.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuN(n.d,n.s),1)}));return e.push({e:MP.c2L(n.c,n.s),p:AP.normal.pdf(MP.c2L(n.c,n.s),MP.d2MuN(n.d,n.s),1)}),e.push({e:MP.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),v(e)}}),I.append("path").classed("curve-fa",!0),F.select(".curve-fa").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.c?n.c:this.c,this.c),a=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=s(t),n.s=a(t);const e=lM(MP.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:AP.normal.pdf(h.domain()[1],MP.d2MuN(n.d,n.s),1)}),e.push({e:h.domain()[1],p:0}),e.push({e:MP.c2L(n.c,n.s),p:0}),v(e)}}),I.append("path").classed("curve-noise",!0),F.select(".curve-noise").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=s(t);const e=lM(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:AP.normal.pdf(h.domain()[1],MP.d2MuN(n.d,n.s),1)}),v(e)}});const D=O.append("g").classed("signal",!0),z=P.selectAll(".signal").attr("tabindex",this.interactive||this.unequal?0:null).classed("interactive",this.interactive).classed("unequal",this.unequal).on("keydown.sensitivity",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muS;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=MP.muS2D(e,this.s);this.d=r<MP.d.MIN?MP.d.MIN:r>MP.d.MAX?MP.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null).on("keydown.variance",this.unequal?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let e=this.hS;switch(t.key){case"ArrowUp":e+=t.shiftKey?.002:.02;break;case"ArrowDown":e-=t.shiftKey?.002:.02}e=e<0?0:e;const r=MP.h2S(e);this.s=r<MP.s.MIN?MP.s.MIN:r>MP.s.MAX?MP.s.MAX:r,this.d=MP.muN2D(this.muN,this.s),this.c=MP.l2C(this.l,this.s),this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive")||t.has("unequal"))&&(this.interactive||this.unequal?z.call(b):z.on(".drag",null)),D.append("path").classed("curve-m",!0),z.select(".curve-m").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.c?n.c:this.c,this.c),a=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=s(t),n.s=a(t);const e=lM(h.domain()[0],MP.c2L(n.c,n.s),.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuS(n.d,n.s),n.s)}));return e.push({e:MP.c2L(n.c,n.s),p:AP.normal.pdf(MP.c2L(n.c,n.s),MP.d2MuS(n.d,n.s),n.s)}),e.push({e:MP.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),v(e)}}),D.append("path").classed("curve-h",!0),z.select(".curve-h").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.c?n.c:this.c,this.c),a=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=s(t),n.s=a(t);const e=lM(MP.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:AP.normal.pdf(h.domain()[1],MP.d2MuS(n.d,n.s),n.s)}),e.push({e:h.domain()[1],p:0}),e.push({e:MP.c2L(n.c,n.s),p:0}),v(e)}}),D.append("path").classed("curve-signal",!0),z.select(".curve-signal").transition().duration(this.drag?0:u).ease(HN).attrTween("d",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d),s=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=s(t);const e=lM(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:AP.normal.pdf(t,MP.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:AP.normal.pdf(h.domain()[1],MP.d2MuS(n.d,n.s),n.s)}),v(e)}});const q=N.selectAll(".measure-d").data(this.sensitivity?[{}]:[]),j=q.enter().append("g").classed("measure-d",!0);j.append("line").classed("line",!0),j.append("line").classed("cap-left",!0),j.append("line").classed("cap-right",!0);const U=j.append("text").classed("label",!0);U.append("tspan").classed("d math-var",!0).text("d′"),U.append("tspan").classed("equals",!0).text(" = "),U.append("tspan").classed("value",!0);const L=j.merge(q);L.select(".line").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muN)).attr("y1",d(.43)).attr("x2",h(this.muS)).attr("y2",d(.43)),L.select(".cap-left").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muN)).attr("y1",d(.43)+5).attr("x2",h(this.muN)).attr("y2",d(.43)-5),L.select(".cap-right").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muS)).attr("y1",d(.43)+5).attr("x2",h(this.muS)).attr("y2",d(.43)-5);L.select(".label").transition().duration(this.drag?0:u).ease(HN).attr("x",h(this.muN>this.muS?this.muN:this.muS)+5).attr("y",d(.43)+3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.d?n.d:this.d,this.d);return t=>{n.d=i(t),FT(n).text(kR(".3")(n.d))}}),q.exit().remove();const B=N.selectAll(".measure-c").data(this.bias?[{}]:[]),H=B.enter().append("g").classed("measure-c",!0);H.append("line").classed("line",!0),H.append("line").classed("cap-zero",!0);const V=H.append("text").classed("label",!0);V.append("tspan").classed("c math-var",!0).text("c"),V.append("tspan").classed("equals",!0).text(" = "),V.append("tspan").classed("value",!0);const X=H.merge(B);X.select(".line").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.l)).attr("y1",d(.47)).attr("x2",h(0)).attr("y2",d(.47)),X.select(".cap-zero").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(0)).attr("y1",d(.47)+5).attr("x2",h(0)).attr("y2",d(.47)-5);X.select(".label").transition().duration(this.drag?0:u).ease(HN).attr("x",h(0)+(this.l<0?5:-5)).attr("y",d(.47)+3).attr("text-anchor",this.c<0?"start":"end").select(".value").tween("text",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.c?n.c:this.c,this.c);return t=>{n.c=i(t),FT(n).text(kR(".3")(n.c))}}),B.exit().remove();const W=N.selectAll(".measure-s").data(this.variance?[{}]:[]),Y=W.enter().append("g").classed("measure-s",!0);Y.append("line").classed("line",!0),Y.append("line").classed("cap-left",!0),Y.append("line").classed("cap-right",!0);const K=Y.append("text").classed("label",!0);K.append("tspan").classed("s math-var",!0).text("σ"),K.append("tspan").classed("equals",!0).text(" = "),K.append("tspan").classed("value",!0);const Z=Y.merge(W);Z.select(".line").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muS-this.s)).attr("y1",d(AP.normal.pdf(this.s,0,this.s))+10/this.s).attr("x2",h(this.muS+this.s)).attr("y2",d(AP.normal.pdf(this.s,0,this.s))+10/this.s),Z.select(".cap-left").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muS-this.s)).attr("y1",d(AP.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS-this.s)).attr("y2",d(AP.normal.pdf(this.s,0,this.s))+10/this.s-5),Z.select(".cap-right").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.muS+this.s)).attr("y1",d(AP.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS+this.s)).attr("y2",d(AP.normal.pdf(this.s,0,this.s))+10/this.s-5);Z.select(".label").transition().duration(this.drag?0:u).ease(HN).attr("x",h(this.muS)).attr("y",d(AP.normal.pdf(this.s,0,this.s))+10/this.s-3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=UC(void 0!==n.s?n.s:this.s,this.s);return t=>{n.s=i(t),FT(n).text(kR(".3")(n.s))}}),W.exit().remove();const G=N.selectAll(".threshold").data(this.threshold?[{}]:[]),Q=G.enter().append("g").classed("threshold",!0);Q.append("line").classed("line",!0),Q.append("line").classed("line touch",!0),Q.append("circle").classed("handle touch",!0);const J=Q.merge(G).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive);(this.firstUpdate||t.has("interactive"))&&(this.interactive?J.call(m).on("keydown",t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.l;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=MP.l2C(e,this.s);this.c=r<MP.c.MIN?MP.c.MIN:r>MP.c.MAX?MP.c.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}):J.on("drag",null).on("keydown",null)),J.select(".line").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),J.select(".line.touch").transition().duration(this.drag?0:u).ease(HN).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),J.select(".handle").transition().duration(this.drag?0:u).ease(HN).attr("cx",h(this.l)).attr("cy",d(.54)),G.exit().remove();const tt=N.selectAll(".histogram").data(this.histogram?[{}]:[]),et=tt.enter().append("g").classed("histogram",!0).merge(tt);if(tt.exit().remove(),this.histogram){const t=function(){var t=GA,e=KA,r=oM;function n(n){Array.isArray(n)||(n=Array.from(n));var i,s,a,o=n.length,l=new Array(o);for(i=0;i<o;++i)l[i]=t(n[i],i,n);var c=e(l),u=c[0],h=c[1],d=r(l,u,h);if(!Array.isArray(d)){const t=h,r=+d;if(e===KA&&([u,h]=aM(u,h,r)),(d=iM(u,h,r))[0]<=u&&(a=sM(u,h,r)),d[d.length-1]>=h)if(t>=h&&e===KA){const t=sM(u,h,r);isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else d.pop()}for(var f=d.length,p=0,m=f;d[p]<=u;)++p;for(;d[m-1]>h;)--m;(p||m<f)&&(d=d.slice(p,m),f=m-p);var g,b=new Array(f+1);for(i=0;i<=f;++i)(g=b[i]=[]).x0=i>0?d[i-1]:u,g.x1=i<f?d[i]:h;if(isFinite(a)){if(a>0)for(i=0;i<o;++i)null!=(s=l[i])&&u<=s&&s<=h&&b[Math.min(f,Math.floor((s-u)/a))].push(n[i]);else if(a<0)for(i=0;i<o;++i)if(null!=(s=l[i])&&u<=s&&s<=h){const t=Math.floor((u-s)*a);b[Math.min(f,t+(d[t]<=s))].push(n[i])}}else for(i=0;i<o;++i)null!=(s=l[i])&&u<=s&&s<=h&&b[YA(d,s,0,f)].push(n[i]);return b}return n.value=function(e){return arguments.length?(t="function"==typeof e?e:JA(e),n):t},n.domain=function(t){return arguments.length?(e="function"==typeof t?t:JA([t[0],t[1]]),n):e},n.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:JA(Array.isArray(t)?QA.call(t):t),n):r},n}().value(t=>t.trueEvidence).domain(h.domain()).thresholds(lM(this.binRange[0],this.binRange[1],this.binWidth)),e=t(this.trials);let r=-1,n=-1;for(let t=0;t<e.length;t+=1)for(let i=0;i<e[t].length;i+=1)e[t][i].binValue=e[t].x0,e[t][i].binCount=i,0===t&&(r=i),t===e.length-1&&(n=i);for(let t=0;t<this.trials.length;t+=1)this.trials[t].trueEvidence<this.binRange[0]&&(r+=1,this.trials[t].binCount=r,this.trials[t].binValue=e[0].x0),this.trials[t].trueEvidence>this.binRange[1]&&(n+=1,this.trials[t].binCount=n,this.trials[t].binValue=e[e.length-1].x0);const i=et.selectAll(".trial").data(this.trials,t=>t.trial),s=i.enter().append("rect").attr("stroke-width",3).attr("data-new-trial-ease-time",0).attr("stroke",this.getComputedStyleValue("---color-acc")).attr("fill",this.getComputedStyleValue("---color-acc-light")).merge(i).attr("class",t=>`trial ${t.outcome}`).attr("width",f-3).attr("height",f-3),a=s.filter(t=>t.new&&!t.paused);if(!a.empty()){const t=a.attr("data-new-trial-ease-time"),e=e=>hP().domain([0,1]).range([t,1])(e),r=e=>r=>hP().domain([e(t),1]).range([0,1])(e(r));a.transition("new").duration(e=>Math.floor((.75*e.duration+.25*e.wait)*(1-t))).ease(e).attr("data-new-trial-ease-time",1).attrTween("stroke",(t,e,n)=>{const i=n[e],s=RC(i.getAttribute("stroke"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"));return t=>s(r(BN)(t))}).attrTween("fill",(t,e,n)=>{const i=n[e],s=RC(i.getAttribute("fill"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"));return t=>s(r(BN)(t))}).attrTween("x",(t,e,n)=>{const i=UC(n[e].getAttribute("x"),h(t.binValue)+1.5);return t=>i(r(HN)(t))}).attrTween("y",(t,e,n)=>{const i=UC(n[e].getAttribute("y"),d(0)+1.5-(t.binCount+1)*f);return t=>i(r(BN)(t))}).on("end",(t,e,r)=>{r[e].removeAttribute("data-new-trial-ease-time"),t.new=!1,this.alignTrial(t),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{stimulus:t.signal,response:t.response,outcome:t.outcome,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:0},bubbles:!0}))})}const o=s.filter(t=>t.new&&t.paused);if(!o.empty()){const t=o.attr("data-new-trial-ease-time");o.transition().duration(u).ease(HN).attr("x",e=>UC(0,h(e.binValue)+1.5)(HN(t))).attr("y",e=>UC(0,d(0)+1.5-(e.binCount+1)*f)(BN(t))).attr("stroke",e=>RC(this.getComputedStyleValue("---color-acc"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}`):this.getComputedStyleValue("---color-acc"))(BN(t))).attr("fill",e=>RC(this.getComputedStyleValue("---color-acc-light"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))(BN(t)))}s.filter(t=>!t.new).transition().duration(u).ease(HN).attr("x",t=>h(t.binValue)+1.5).attr("y",t=>d(0)+1.5-(t.binCount+1)*f).attr("stroke",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc")).attr("fill",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light")),i.exit().transition().duration(u).ease(LN).attrTween("stroke",(t,e,r)=>{const n=r[e],i=RC(n.getAttribute("stroke"),this.getComputedStyleValue("---color-acc"));return t=>i(BN(t))}).attrTween("fill",(t,e,r)=>{const n=r[e],i=RC(n.getAttribute("fill"),this.getComputedStyleValue("---color-acc-light"));return t=>i(BN(t))}).attrTween("x",(t,e,r)=>{const n=UC(r[e].getAttribute("x"),0);return t=>n(BN(t))}).attrTween("y",(t,e,r)=>{const n=UC(r[e].getAttribute("y"),0);return t=>n(HN(t))}).remove()}const rt=k.append("g").classed("overlayer",!0),nt=$.select(".overlayer");rt.append("rect").classed("background",!0),nt.select(".background").attr("height",l).attr("width",c),this.drag=!1,this.firstUpdate=!1}pauseTrial(){const t=FT(this.renderRoot).select(".trial[data-new-trial-ease-time]");t.interrupt("new"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){FT(this.renderRoot).select(".trial[data-new-trial-ease-time]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}}customElements.define("sdt-model",wI);customElements.define("sdt-parameters",class extends SP{static get properties(){return{d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0}}}constructor(){super(),this.d=void 0,this.c=void 0,this.s=void 0}setSensitivity(t){this.d=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-d",{detail:{d:this.d},bubbles:!0}))}setBias(t){this.c=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-c",{detail:{c:this.c},bubbles:!0}))}setVariance(t){this.s=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-s",{detail:{s:this.s},bubbles:!0}))}static get styles(){return[super.styles,qE`
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

        .d {
          --decidables-slider-background-color: var(---color-d-light);
          --decidables-slider-color: var(---color-d);
        }

        .c {
          --decidables-slider-background-color: var(---color-c-light);
          --decidables-slider-color: var(---color-c);
        }

        .s {
          --decidables-slider-background-color: var(---color-s-light);
          --decidables-slider-color: var(---color-s);
        }
      `]}render(){return kA`
      <div class="holder">
        ${null!=this.d?kA`<decidables-slider class="d"
            ?disabled=${!this.interactive}
            scale
            min=${MP.d.MIN}
            max=${MP.d.MAX}
            step=${MP.d.STEP}
            .value=${+this.d.toFixed(2)}
            @change=${this.setSensitivity.bind(this)}
            @input=${this.setSensitivity.bind(this)}
          ><div>Sensitivity<br><span class="math-var">d′</span></div></decidables-slider>`:kA``}
        ${null!=this.c?kA`<decidables-slider class="c"
            ?disabled=${!this.interactive}
            scale
            min=${MP.c.MIN}
            max=${MP.c.MAX}
            step=${MP.c.STEP}
            .value=${+this.c.toFixed(2)}
            @change=${this.setBias.bind(this)}
            @input=${this.setBias.bind(this)}
          ><div>Bias<br><span class="math-var">c</span></div></decidables-slider>`:kA``}
        ${null!=this.s?kA`<decidables-slider class="s"
            ?disabled=${!this.interactive}
            scale
            min=${MP.s.MIN}
            max=${MP.s.MAX}
            step=${MP.s.STEP}
            .value=${+this.s.toFixed(2)}
            @change=${this.setVariance.bind(this)}
            @input=${this.setVariance.bind(this)}
          ><div>Variance<br><span class="math-var">σ</span></div></decidables-slider>`:kA``}
      </div>`}});class xI extends SP{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,qE`
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
      `]}}customElements.define("sdt-equation-dc2far",class extends xI{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=MP.d.DEFAULT,this.c=MP.c.DEFAULT,this.s=MP.s.DEFAULT,this.alignState()}alignState(){this.far=MP.dC2Far(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2far-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=kA`
        <decidables-spinner class="d bottom" 
          ?disabled=${!this.interactive}
          step=${MP.d.STEP}
          .value=${this.d}
          @input=${this.dInput.bind(this)}
        >
          <var class="math-var">d′</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="c bottom"
          ?disabled=${!this.interactive}
          step=${MP.c.DEFAULT}
          .value=${this.c}
          @input=${this.cInput.bind(this)}
        >
          <var class="math-var">c</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="s bottom"
          ?disabled=${!this.interactive}
          min=${MP.s.MIN}
          step=${MP.s.STEP}
          .value=${this.s}
          @input=${this.sInput.bind(this)}
        >
          <var class="math-var">σ</var>
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner class="far bottom"
          disabled min="0"
          max="1"
          step=".001"
          .value=${+this.far.toFixed(3)}
        >
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `):(t=kA`<var class="math-var d">d′</var>`,e=kA`<var class="math-var c">c</var>`,r=kA`<var class="math-var s">σ</var>`,n=kA`<var class="far">False Alarm Rate</var>`),i=this.unequal?kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${r}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span>${t}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${e}<span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${r}</span>
          </td>
        </tr>`:kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="minus tight">−</span>
          </td>
          <td class="underline">
            ${t}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${e}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`,kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${i}
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-dc2hr",class extends xI{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=MP.d.DEFAULT,this.c=MP.c.DEFAULT,this.s=MP.s.DEFAULT,this.alignState()}alignState(){this.hr=MP.dC2Hr(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2hr-change",{detail:{d:this.d,c:this.c,s:this.s,hr:this.hr},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=kA`
        <decidables-spinner class="d bottom"
          ?disabled=${!this.interactive}
          step=${MP.d.STEP}
          .value=${this.d}
          @input=${this.dInput.bind(this)}
        >
          <var class="math-var">d′</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="c bottom"
          ?disabled=${!this.interactive}
          step=${MP.c.STEP}
          .value=${this.c}
          @input=${this.cInput.bind(this)}
        >
          <var class="math-var">c</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="s bottom"
          ?disabled=${!this.interactive}
          min=${MP.s.MIN}
          step=${MP.s.STEP}
          .value=${this.s}
          @input=${this.sInput.bind(this)}
        >
          <var class="math-var">σ</var>
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner class="hr bottom"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.hr.toFixed(3)}
        >
          <var>Hit Rate</var>
        </decidables-spinner>
      `):(t=kA`<var class="math-var d">d′</var>`,e=kA`<var class="math-var c">c</var>`,r=kA`<var class="math-var s">σ</var>`,n=kA`<var class="hr">Hit Rate</var>`),i=this.unequal?kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${r}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            ${t}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>
          </td>
          <td class="underline">
            ${e}
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
            <span><span>1</span><span class="plus">+</span>${r}</span>
          </td>
          <td>
            ${r}
          </td>
        </tr>`:kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span>
          </td>
          <td class="underline">
            ${t}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${e}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`,kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${i}
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-facr2far",class extends xI{static get properties(){return{fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.fa=0,this.cr=0,this.alignState()}alignState(){this.far=MP.faCr2Far(this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-facr2far-change",{detail:{fa:this.fa,cr:this.cr,far:this.far},bubbles:!0}))}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=kA`
        <decidables-spinner class="fa"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.fa}
          @input=${this.faInput.bind(this)}
        >
          <var>False Alarms</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="cr"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.cr}
          @input=${this.crInput.bind(this)}
        >
          <var>Correct Rejections</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="far"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.far.toFixed(3)}
        >
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `):(t=kA`<var class="fa">False Alarms</var>`,e=kA`<var class="cr">Correct Rejections</var>`,r=kA`<var class="far">False Alarm Rate</var>`),kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${r}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${t}
              </td>
            </tr>
            <tr>
              <td>
                ${t}<span class="plus">+</span>${e}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-hfa2ppv",class extends xI{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},ppv:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.fa=0,this.alignState()}alignState(){this.ppv=MP.hFa2Ppv(this.h,this.fa)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hfa2ppv-change",{detail:{h:this.h,fa:this.fa,ppv:this.ppv},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=kA`
        <decidables-spinner class="h"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.h}
          @input=${this.hInput.bind(this)}
        >
          <var>Hits</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="fa"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.fa}
          @input=${this.faInput.bind(this)}
        >
          <var>False Alarms</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="ppv"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.ppv.toFixed(3)}
        >
          <var>Positive Predictive Value</var>
        </decidables-spinner>
      `):(t=kA`<var class="h">Hits</var>`,e=kA`<var class="fa">False Alarms</var>`,r=kA`<var class="ppv">Positive Predictive Value</var>`),kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${r}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${t}
              </td>
            </tr>
            <tr>
              <td>
                ${t}<span class="plus">+</span>${e}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `}});customElements.define("sdt-equation-hm2hr",class extends xI{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.alignState()}alignState(){this.hr=MP.hM2Hr(this.h,this.m)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hm2hr-change",{detail:{h:this.h,m:this.m,hr:this.hr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=kA`
        <decidables-spinner class="h"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.h}
          @input=${this.hInput.bind(this)}
        >
          <var>Hits</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="m"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.m}
          @input=${this.mInput.bind(this)}
        >
          <var>Misses</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="hr"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.hr.toFixed(3)}
        >
          <var>Hit Rate</var>
        </decidables-spinner>
      `):(t=kA`<var class="h">Hits</var>`,e=kA`<var class="m">Misses</var>`,r=kA`<var class="hr">Hit Rate</var>`),kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${r}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${t}
              </td>
            </tr>
            <tr>
              <td>
                ${t}<span class="plus">+</span>${e}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `}});customElements.define("sdt-equation-hmfacr2acc",class extends xI{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},acc:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.alignState()}alignState(){this.acc=MP.hMFaCr2Acc(this.h,this.m,this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hmfacr2acc-change",{detail:{h:this.h,m:this.m,fa:this.fa,cr:this.cr,acc:this.acc},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=kA`
        <decidables-spinner class="h"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.h}
          @input=${this.hInput.bind(this)}
        >
          <var>Hits</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="m"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.m}
          @input=${this.mInput.bind(this)}
        >
          <var>Misses</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="fa"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.fa}
          @input=${this.faInput.bind(this)}
        >
          <var>False Alarms</var>
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner class="cr"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.cr}
          @input=${this.crInput.bind(this)}
        >
          <var>Correct Rejections</var>
        </decidables-spinner>
      `,i=kA`
        <decidables-spinner class="acc"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.acc.toFixed(3)}
        >
          <var>Accuracy</var>
        </decidables-spinner>
      `):(t=kA`<var class="h">Hits</var>`,e=kA`<var class="m">Misses</var>`,r=kA`<var class="fa">False Alarms</var>`,n=kA`<var class="cr">Correct Rejections</var>`,i=kA`<var class="acc">Accuracy</var>`),kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${i}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${t}<span class="plus">+</span>${n}
              </td>
            </tr>
            <tr>
              <td>
                ${t}<span class="plus">+</span>${n}<span class="plus">+</span>${e}<span class="plus">+</span>${r}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-hrfar2c",class extends xI{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},c:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=MP.s.DEFAULT,this.alignState()}alignState(){this.c=MP.hrFar2C(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2c-change",{detail:{hr:this.hr,far:this.far,s:this.s,c:this.c},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=kA`
        <decidables-spinner class="hr bottom"
          ?disabled=${!this.interactive}
          min="0"
          max="1"
          step=".001"
          .value=${this.hr}
          @input=${this.hrInput.bind(this)}
        >
          <var>Hit Rate</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="far bottom"
          ?disabled=${!this.interactive}
          min="0"
          max="1"
          step=".001"
          .value=${this.far}
          @input=${this.farInput.bind(this)}
        >
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="s bottom"
          ?disabled=${!this.interactive}
          min=${MP.s.MIN}
          step=${MP.s.STEP}
          .value=${this.s}
          @input=${this.sInput.bind(this)}
        >
          <var class="math-var">σ</var>
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner class="c bottom"
          disabled
          step=${MP.c.MIN}
          .value=${+this.c.toFixed(3)}
        >
          <var class="math-var">c</var>
        </decidables-spinner>
      `):(t=kA`<var class="hr">Hit Rate</var>`,e=kA`<var class="far">False Alarm Rate</var>`,r=kA`<var class="math-var s">σ</var>`,n=kA`<var class="math-var c">c</var>`),i=this.unequal?kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${r}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span class="minus tight">−</span>${r}
          </td>
          <td rowspan="2">
            <span class="bracket tight">)</span><span class="bracket">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${t}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${e}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${r}</span>
          </td>
        </tr>`:kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span>
          </td>
          <td class="underline">
            <span class="minus tight">−</span><span class="bracket tight">[</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${t}<span class="paren tight">)</span><span class="plus">+</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${e}<span class="paren tight">)</span><span class="bracket tight">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`,kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${i}
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-hrfar2d",class extends xI{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=MP.s.DEFAULT,this.alignState()}alignState(){this.d=MP.hrFar2D(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2d-change",{detail:{hr:this.hr,far:this.far,s:this.s,d:this.d},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=kA`
        <decidables-spinner class="hr bottom"
          ?disabled=${!this.interactive}
          min="0"
          max="1"
          step=".001"
          .value=${this.hr}
          @input=${this.hrInput.bind(this)}
        >
          <var>Hit Rate</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="far bottom"
          ?disabled=${!this.interactive}
          min="0"
          max="1"
          step=".001"
          .value=${this.far}
          @input=${this.farInput.bind(this)}
        >
          <var>False Alarm Rate</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="s bottom"
          ?disabled=${!this.interactive}
          min="0"
          step=".001"
          .value=${this.s}
          @input=${this.sInput.bind(this)}
        >
          <var class="math-var">σ</var>
        </decidables-spinner>
      `,n=kA`
        <decidables-spinner class="d bottom"
          disabled
          step=${MP.d.STEP}
          .value=${+this.d.toFixed(3)}
        >
          <var class="math-var">d′</var>
        </decidables-spinner>
      `):(t=kA`<var class="hr">Hit Rate</var>`,e=kA`<var class="far">False Alarm Rate</var>`,r=kA`<var class="math-var s">σ</var>`,n=kA`<var class="math-var d">d′</var>`),i=this.unequal?kA`
        <tr>
          <td rowspan="2">
            ${n}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${r}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket">[</span>${r}<span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${t}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${e}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`:kA`
        <tr>
          <td>
              ${n}<span class="equals">=</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${t}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${e}<span class="paren tight">)</span>
          </td>
        </tr>`,kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${i}
          </tbody>
        </table>
      </div>`}});customElements.define("sdt-equation-mcr2fomr",class extends xI{static get properties(){return{m:{attribute:"misses",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.m=0,this.cr=0,this.alignState()}alignState(){this.fomr=MP.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-mcr2fomr-change",{detail:{m:this.m,cr:this.cr,fomr:this.fomr},bubbles:!0}))}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=kA`
        <decidables-spinner class="m"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.m}
          @input=${this.mInput.bind(this)}
        >
          <var>Misses</var>
        </decidables-spinner>
      `,e=kA`
        <decidables-spinner class="cr"
          ?disabled=${!this.interactive}
          min="0"
          .value=${this.cr}
          @input=${this.crInput.bind(this)}
        >
          <var>Correct Rejections</var>
        </decidables-spinner>
      `,r=kA`
        <decidables-spinner class="fomr"
          disabled
          min="0"
          max="1"
          step=".001"
          .value=${+this.fomr.toFixed(3)}
        >
          <var>False Omission Rate</var>
        </decidables-spinner>
      `):(t=kA`<var class="m">Misses</var>`,e=kA`<var class="cr">Correct Rejections</var>`,r=kA`<var class="fomr">False Omission Rate</var>`),kA`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${r}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${t}
              </td>
            </tr>
            <tr>
              <td>
                ${t}<span class="plus">+</span>${e}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `}});class kI extends SP{static get styles(){return[super.styles,qE`
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
      `]}render(){return kA`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`}}customElements.define("sdt-example",kI);customElements.define("sdt-example-double-interactive",class extends kI{connectedCallback(){super.connectedCallback(),this.one={},this.one.h=95,this.one.m=5,this.one.fa=35,this.one.cr=65,this.one.hr=MP.hM2Hr(this.one.h,this.one.m),this.one.far=MP.faCr2Far(this.one.fa,this.one.cr),this.one.d=MP.hrFar2D(this.one.hr,this.one.far),this.one.c=MP.hrFar2C(this.one.hr,this.one.far),this.two={},this.two.h=40,this.two.m=60,this.two.fa=20,this.two.cr=80,this.two.hr=MP.hM2Hr(this.two.h,this.two.m),this.two.far=MP.faCr2Far(this.two.fa,this.two.cr),this.two.d=MP.hrFar2D(this.two.hr,this.two.far),this.two.c=MP.hrFar2C(this.two.hr,this.two.far),this.detectableTableOne=this.querySelector("detectable-table:nth-of-type(1)"),this.detectableTableTwo=this.querySelector("detectable-table:nth-of-type(2)"),this.rocSpace=this.querySelector("roc-space"),this.sdtModelOne=this.querySelector("sdt-model:nth-of-type(1)"),this.sdtModelTwo=this.querySelector("sdt-model:nth-of-type(2)"),this.detectableTableOne&&(this.detectableTableOne.h=this.one.h,this.detectableTableOne.m=this.one.m,this.detectableTableOne.fa=this.one.fa,this.detectableTableOne.cr=this.one.cr,this.detectableTableOne.addEventListener("detectable-table-change",t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"default","↑"),this.sdtModelOne&&(this.sdtModelOne.d=MP.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelOne.c=MP.hrFar2C(t.detail.hr,t.detail.far))})),this.detectableTableTwo&&(this.detectableTableTwo.h=this.two.h,this.detectableTableTwo.m=this.two.m,this.detectableTableTwo.fa=this.two.fa,this.detectableTableTwo.cr=this.two.cr,this.detectableTableTwo.addEventListener("detectable-table-change",t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"two","↓"),this.sdtModelTwo&&(this.sdtModelTwo.d=MP.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelTwo.c=MP.hrFar2C(t.detail.hr,t.detail.far))})),this.rocSpace&&(this.rocSpace.set(this.one.hr,this.one.far,"default","↑"),this.rocSpace.set(this.two.hr,this.two.far,"two","↓"),this.rocSpace.addEventListener("roc-point-change",t=>{if("default"===t.detail.name&&this.sdtModelOne?(this.sdtModelOne.d=t.detail.d,this.sdtModelOne.c=t.detail.c):"two"===t.detail.name&&this.sdtModelTwo&&(this.sdtModelTwo.d=t.detail.d,this.sdtModelTwo.c=t.detail.c),"default"===t.detail.name&&this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),i=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=i}else if("two"===t.detail.name&&this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),i=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=i}})),this.sdtModelOne&&(this.sdtModelOne.d=this.one.d,this.sdtModelOne.c=this.one.c,this.sdtModelOne.addEventListener("sdt-model-change",t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"default","↑"),this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),i=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=i}})),this.sdtModelTwo&&(this.sdtModelTwo.d=this.two.d,this.sdtModelTwo.c=this.two.c,this.sdtModelTwo.addEventListener("sdt-model-change",t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"two","↓"),this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),i=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=i}}))}});customElements.define("sdt-example-human",class extends kI{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Number,reflect:!0},h:{attribute:!1,type:Number,reflect:!1},m:{attribute:!1,type:Number,reflect:!1},fa:{attribute:!1,type:Number,reflect:!1},cr:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},far:{attribute:!1,type:Number,reflect:!1},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.payoff=0,this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.d=0,this.c=0,this.s=MP.s.DEFAULT,this.count=0,this.detectableControl=null,this.detectableResponse=null,this.detectableTable=null,this.rdkTask=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null}connectedCallback(){super.connectedCallback(),this.count=1,this.detectableControl=this.querySelector("detectable-control"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rdkTask=this.querySelector("rdk-task"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.rocSpace&&this.rocSpace.hasAttribute("history")&&this.rocSpace.set(.5,.5,"default",this.count),this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-trials",t=>{this.trials=t.detail.trials}),this.detectableControl.addEventListener("detectable-control-duration",t=>{this.duration=t.detail.duration}),this.detectableControl.addEventListener("detectable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.detectableControl.addEventListener("detectable-control-payoff",t=>{this.payoff=t.detail.payoff}),this.detectableControl.addEventListener("detectable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.detectableControl.addEventListener("detectable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.detectableControl.addEventListener("detectable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.d=0,this.c=0,this.rocSpace&&this.rocSpace.hasAttribute("history")&&(this.count+=1,this.rocSpace.set(.5,.5,`point${this.count}`,this.count))})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.detectableResponse&&this.detectableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.detectableControl&&this.detectableControl.complete()})),this.detectableResponse&&this.detectableResponse.addEventListener("detectable-response",t=>{this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=MP.hM2Hr(this.h+1,this.m+1),this.far=MP.faCr2Far(this.fa+1,this.cr+1),this.d=MP.hrFar2D(this.hr,this.far),this.c=MP.hrFar2C(this.hr,this.far),this.rocSpace&&this.rocSpace.hasAttribute("history")&&this.rocSpace.set(this.hr,this.far,1===this.count?"default":`point${this.count}`,this.count)}),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.trials=null!=this.detectableControl.trials?this.trials:void 0,this.detectableControl.duration=null!=this.detectableControl.duration?this.duration:void 0,this.detectableControl.coherence=null!=this.detectableControl.coherence?this.coherence:void 0,this.detectableControl.payoff=null!=this.detectableControl.payoff?this.payoff:void 0),this.detectableResponse&&(this.detectableResponse.trialTotal=this.trials,this.detectableResponse.hPayoff=this.payoff,this.detectableResponse.mPayoff=0-this.payoff,this.detectableResponse.faPayoff=0-(100-this.payoff),this.detectableResponse.crPayoff=100-this.payoff),this.detectableTable&&(this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa,this.detectableTable.hPayoff=this.payoff,this.detectableTable.mPayoff=0-this.payoff,this.detectableTable.faPayoff=0-(100-this.payoff),this.detectableTable.crPayoff=100-this.payoff),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration===1/0?0:this.duration,this.rdkTask.iti=this.duration===1/0?0:this.duration,this.rdkTask.coherence=this.coherence),this.rocSpace&&!this.rocSpace.hasAttribute("history")&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});customElements.define("sdt-example-interactive",class extends kI{static get properties(){return{color:{attribute:"color",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0}}}constructor(){super(),this.color="all",this.zRoc=!1,this.h=void 0,this.m=void 0,this.fa=void 0,this.cr=void 0,this.hr=void 0,this.far=void 0,this.d=MP.d.DEFAULT,this.c=MP.c.DEFAULT,this.s=MP.s.DEFAULT,this.detectableControl=null,this.detectableTable=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null,this.rocSpaces=[]}connectedCallback(){if(super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.detectableTable=this.querySelector("detectable-table"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.rocSpaces=this.querySelectorAll("roc-space"),void 0!==this.h&&void 0!==this.m&&void 0!==this.fa&&void 0!==this.cr)this.hr=MP.hM2Hr(this.h,this.m),this.far=MP.faCr2Far(this.fa,this.cr),this.d=MP.hrFar2D(this.hr,this.far,this.s),this.c=MP.hrFar2C(this.hr,this.far,this.s);else if(void 0!==this.hr&&void 0!==this.far)this.d=MP.hrFar2D(this.hr,this.far,this.s),this.c=MP.hrFar2C(this.hr,this.far,this.s);else if(void 0!==this.d&&void 0!==this.c){this.hr=MP.dC2Hr(this.d,this.c,this.s),this.far=MP.dC2Far(this.d,this.c,this.s);const t=100;this.h=Math.round(t*this.hr),this.m=t-this.h,this.fa=Math.round(t*this.far),this.cr=t-this.fa}this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-color",t=>{this.color=t.detail.color}),this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.zRoc=t.detail.zRoc})),this.detectableTable&&this.detectableTable.addEventListener("detectable-table-change",t=>{this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.far=t.detail.far,this.hr=t.detail.hr,this.d=MP.hrFar2D(this.hr,this.far,this.s),this.c=MP.hrFar2C(this.hr,this.far,this.s)}),this.rocSpace&&this.rocSpace.addEventListener("roc-point-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.hr=t.detail.hr,this.far=t.detail.far;const e=Math.round((this.h+this.m)*this.hr),r=this.h+this.m-e,n=Math.round((this.fa+this.cr)*this.far),i=this.fa+this.cr-n;this.h=e,this.m=r,this.fa=n,this.cr=i}),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.hr=t.detail.hr,this.far=t.detail.far;const e=Math.round((this.h+this.m)*this.hr),r=this.h+this.m-e,n=Math.round((this.fa+this.cr)*this.far),i=this.fa+this.cr-n;this.h=e,this.m=r,this.fa=n,this.cr=i}),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.color=null!=this.detectableControl.color?this.color:void 0,this.detectableControl.zRoc=null!=this.detectableControl.zRoc?this.zRoc:void 0),this.detectableTable&&(this.detectableTable.color=this.color,this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa),this.rocSpace&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.color=this.color,this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.rocSpaces.length>0&&this.rocSpaces.forEach(t=>{t.zRoc=this.zRoc,t.setWithSDT(this.d,this.c,"default","",this.s)}),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});customElements.define("sdt-example-model",class extends kI{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},h:{attribute:!1,type:Number,reflect:!1},m:{attribute:!1,type:Number,reflect:!1},fa:{attribute:!1,type:Number,reflect:!1},cr:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.color="all",this.d=MP.s.DEFAULT,this.c=MP.s.DEFAULT,this.s=MP.s.DEFAULT,this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.detectableControl=null,this.detectableResponse=null,this.detectableTable=null,this.rdkTask=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null}connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rdkTask=this.querySelector("rdk-task"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-trials",t=>{this.trials=t.detail.trials}),this.detectableControl.addEventListener("detectable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.detectableControl.addEventListener("detectable-control-duration",t=>{this.duration=t.detail.duration}),this.detectableControl.addEventListener("detectable-control-color",t=>{this.color=t.detail.color}),this.detectableControl.addEventListener("detectable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.sdtModel&&this.sdtModel.resumeTrial()}),this.detectableControl.addEventListener("detectable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.sdtModel&&this.sdtModel.pauseTrial()}),this.detectableControl.addEventListener("detectable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.sdtModel&&this.sdtModel.reset(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial),this.sdtModel&&this.sdtModel.trial(t.detail.trial,t.detail.signal,t.detail.duration,t.detail.wait,t.detail.iti)}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.detectableResponse&&this.detectableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.detectableControl&&this.detectableControl.complete()})),this.sdtModel&&(this.sdtModel.addEventListener("detectable-response",t=>{this.detectableResponse&&this.detectableResponse.responded(t.detail.response),this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=MP.hM2Hr(this.h,this.m),this.far=MP.faCr2Far(this.fa,this.cr)}),this.sdtModel.addEventListener("sdt-model-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=MP.hM2Hr(this.h,this.m),this.far=MP.faCr2Far(this.fa,this.cr)})),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.trials=void 0!==this.detectableControl.trials?this.trials:void 0,this.detectableControl.coherence=void 0!==this.detectableControl.coherence?this.coherence:void 0,this.detectableControl.duration=void 0!==this.detectableControl.duration?this.duration:void 0,this.detectableControl.color=void 0!==this.detectableControl.color?this.color:void 0),this.detectableResponse&&(this.detectableResponse.trialTotal=this.trials),this.detectableTable&&(this.detectableTable.color=this.color,this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.rocSpace&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.color=this.color,this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});customElements.define("sdt-example-multiple",class extends kI{static get properties(){return{variable:{attribute:"variable",type:String,reflect:!0},values:{attribute:"values",converter:xP,reflect:!0}}}constructor(){super(),this.variables=["d","c"],this.variable="d",this.values=[0,1]}connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.rocSpace.zRoc=t.detail.zRoc}),this.rocSpace&&(this.rocSpace.setWithSDT(1,0,"default","",1),"d"===this.variable?this.values.forEach((t,e)=>{this.rocSpace.setWithSDT(t,this.sdtModel.c,`point${e}`,e+1,this.sdtModel.s)}):"c"===this.variable&&this.values.forEach((t,e)=>{this.rocSpace.setWithSDT(this.sdtModel.d,t,`point${e}`,e+1,this.sdtModel.s)})),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.rocSpace&&(this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"default","",t.detail.s),"d"===this.variable?this.values.forEach((e,r)=>{this.rocSpace.setWithSDT(e,t.detail.c,`point${r}`,r+1,t.detail.s)}):"c"===this.variable&&this.values.forEach((e,r)=>{this.rocSpace.setWithSDT(t.detail.d,e,`point${r}`,r+1,t.detail.s)}))})}});customElements.define("sdt-example-unequal",class extends kI{connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.rocSpace.zRoc=t.detail.zRoc}),this.rocSpace&&(this.rocSpace.setWithSDT(1,0,"default","",1),lM(-1.5,1.6,.5).forEach((t,e)=>{this.rocSpace.setWithSDT(this.sdtModel.d,t,`point${e}`,"",this.sdtModel.s)})),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.rocSpace&&lM(-1.5,1.6,.5).forEach((e,r)=>{this.rocSpace.setWithSDT(t.detail.d,e,`point${r}`,"",t.detail.s)})})}});
//# sourceMappingURL=page.js.map
