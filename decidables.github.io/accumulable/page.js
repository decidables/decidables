var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math===Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||e("object"==typeof r&&r)||function(){return this}()||Function("return this")(),i=r,n=function(t){try{return!!t()}catch(t){return!0}},s=!n(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),a=s,o=Function.prototype,c=o.call,l=a&&o.bind.bind(c,c),u=a?l:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},h=d,g=TypeError,p=function(t){if(h(t))throw new g("Can't call method on "+t);return t},f=p,m=Object,b=function(t){return m(f(t))},y=b,v=u({}.hasOwnProperty),Q=Object.hasOwn||function(t,e){return v(y(t),e)},B={},U={exports:{}},I=r,F=Object.defineProperty,C=function(t,e){try{F(I,t,{value:e,configurable:!0,writable:!0})}catch(r){I[t]=e}return e},A=r,x=C,E="__core-js_shared__",w=U.exports=A[E]||x(E,{});(w.versions||(w.versions=[])).push({version:"3.47.0",mode:"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",source:"https://github.com/zloirock/core-js"});var R,S,N=U.exports,L=N,D=function(t,e){return L[t]||(L[t]=e||{})},M=u,k=0,T=Math.random(),V=M(1.1.toString),H=function(t){return"Symbol("+(void 0===t?"":t)+")_"+V(++k+T,36)},$=r.navigator,_=$&&$.userAgent,z=_?String(_):"",Y=r,G=z,X=Y.process,W=Y.Deno,J=X&&X.versions||W&&W.version,O=J&&J.v8;O&&(S=(R=O.split("."))[0]>0&&R[0]<4?1:+(R[0]+R[1])),!S&&G&&(!(R=G.match(/Edge\/(\d+)/))||R[1]>=74)&&(R=G.match(/Chrome\/(\d+)/))&&(S=+R[1]);var K=S,P=K,Z=n,j=r.String,q=!!Object.getOwnPropertySymbols&&!Z(function(){var t=Symbol("symbol detection");return!j(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&P&&P<41}),tt=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=D,rt=Q,it=H,nt=q,st=tt,at=r.Symbol,ot=et("wks"),ct=st?at.for||at:at&&at.withoutSetter||it,lt=function(t){return rt(ot,t)||(ot[t]=nt&&rt(at,t)?at[t]:ct("Symbol."+t)),ot[t]},ut=lt;B.f=ut;var dt={},ht=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),gt="object"==typeof document&&document.all,pt=void 0===gt&&void 0!==gt?function(t){return"function"==typeof t||t===gt}:function(t){return"function"==typeof t},ft=pt,mt=function(t){return"object"==typeof t?null!==t:ft(t)},bt=mt,yt=r.document,vt=bt(yt)&&bt(yt.createElement),Qt=function(t){return vt?yt.createElement(t):{}},Bt=Qt,Ut=!ht&&!n(function(){return 7!==Object.defineProperty(Bt("div"),"a",{get:function(){return 7}}).a}),It=ht&&n(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),Ft=mt,Ct=String,At=TypeError,xt=function(t){if(Ft(t))return t;throw new At(Ct(t)+" is not an object")},Et=s,wt=Function.prototype.call,Rt=Et?wt.bind(wt):function(){return wt.apply(wt,arguments)},St=r,Nt=pt,Lt=function(t,e){return arguments.length<2?(r=St[t],Nt(r)?r:void 0):St[t]&&St[t][e];var r},Dt=u({}.isPrototypeOf),Mt=Lt,kt=pt,Tt=Dt,Vt=Object,Ht=tt?function(t){return"symbol"==typeof t}:function(t){var e=Mt("Symbol");return kt(e)&&Tt(e.prototype,Vt(t))},$t=String,_t=function(t){try{return $t(t)}catch(t){return"Object"}},zt=pt,Yt=_t,Gt=TypeError,Xt=function(t){if(zt(t))return t;throw new Gt(Yt(t)+" is not a function")},Wt=Xt,Jt=d,Ot=function(t,e){var r=t[e];return Jt(r)?void 0:Wt(r)},Kt=Rt,Pt=pt,Zt=mt,jt=TypeError,qt=Rt,te=mt,ee=Ht,re=Ot,ie=function(t,e){var r,i;if("string"===e&&Pt(r=t.toString)&&!Zt(i=Kt(r,t)))return i;if(Pt(r=t.valueOf)&&!Zt(i=Kt(r,t)))return i;if("string"!==e&&Pt(r=t.toString)&&!Zt(i=Kt(r,t)))return i;throw new jt("Can't convert object to primitive value")},ne=TypeError,se=lt("toPrimitive"),ae=function(t,e){if(!te(t)||ee(t))return t;var r,i=re(t,se);if(i){if(void 0===e&&(e="default"),r=qt(i,t,e),!te(r)||ee(r))return r;throw new ne("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},oe=ae,ce=Ht,le=function(t){var e=oe(t,"string");return ce(e)?e:e+""},ue=ht,de=Ut,he=It,ge=xt,pe=le,fe=TypeError,me=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ye="enumerable",ve="configurable",Qe="writable";dt.f=ue?he?function(t,e,r){if(ge(t),e=pe(e),ge(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Qe in r&&!r[Qe]){var i=be(t,e);i&&i[Qe]&&(t[e]=r.value,r={configurable:ve in r?r[ve]:i[ve],enumerable:ye in r?r[ye]:i[ye],writable:!1})}return me(t,e,r)}:me:function(t,e,r){if(ge(t),e=pe(e),ge(r),de)try{return me(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new fe("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Be=i,Ue=Q,Ie=B,Fe=dt.f,Ce=function(t){var e=Be.Symbol||(Be.Symbol={});Ue(e,t)||Fe(e,t,{value:Ie.f(t)})},Ae={},xe={},Ee={}.propertyIsEnumerable,we=Object.getOwnPropertyDescriptor,Re=we&&!Ee.call({1:2},1);xe.f=Re?function(t){var e=we(this,t);return!!e&&e.enumerable}:Ee;var Se=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Ne=u,Le=Ne({}.toString),De=Ne("".slice),Me=function(t){return De(Le(t),8,-1)},ke=n,Te=Me,Ve=Object,He=u("".split),$e=ke(function(){return!Ve("z").propertyIsEnumerable(0)})?function(t){return"String"===Te(t)?He(t,""):Ve(t)}:Ve,_e=p,ze=function(t){return $e(_e(t))},Ye=ht,Ge=Rt,Xe=xe,We=Se,Je=ze,Oe=le,Ke=Q,Pe=Ut,Ze=Object.getOwnPropertyDescriptor;Ae.f=Ye?Ze:function(t,e){if(t=Je(t),e=Oe(e),Pe)try{return Ze(t,e)}catch(t){}if(Ke(t,e))return We(!Ge(Xe.f,t,e),t[e])};var je=r,qe=Ce,tr=dt.f,er=Ae.f,rr=je.Symbol;if(qe("asyncDispose"),rr){var ir=er(rr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&tr(rr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var nr=r,sr=Ce,ar=dt.f,or=Ae.f,cr=nr.Symbol;if(sr("dispose"),cr){var lr=or(cr,"dispose");lr.enumerable&&lr.configurable&&lr.writable&&ar(cr,"dispose",{value:lr.value,enumerable:!1,configurable:!1,writable:!1})}var ur=dt,dr=Se,hr=ht?function(t,e,r){return ur.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},gr={exports:{}},pr=ht,fr=Q,mr=Function.prototype,br=pr&&Object.getOwnPropertyDescriptor,yr={CONFIGURABLE:fr(mr,"name")&&(!pr||pr&&br(mr,"name").configurable)},vr=pt,Qr=N,Br=u(Function.toString);vr(Qr.inspectSource)||(Qr.inspectSource=function(t){return Br(t)});var Ur,Ir,Fr,Cr=Qr.inspectSource,Ar=pt,xr=r.WeakMap,Er=Ar(xr)&&/native code/.test(String(xr)),wr=H,Rr=D("keys"),Sr=function(t){return Rr[t]||(Rr[t]=wr(t))},Nr={},Lr=Er,Dr=r,Mr=mt,kr=hr,Tr=Q,Vr=N,Hr=Sr,$r=Nr,_r="Object already initialized",zr=Dr.TypeError,Yr=Dr.WeakMap;if(Lr||Vr.state){var Gr=Vr.state||(Vr.state=new Yr);Gr.get=Gr.get,Gr.has=Gr.has,Gr.set=Gr.set,Ur=function(t,e){if(Gr.has(t))throw new zr(_r);return e.facade=t,Gr.set(t,e),e},Ir=function(t){return Gr.get(t)||{}},Fr=function(t){return Gr.has(t)}}else{var Xr=Hr("state");$r[Xr]=!0,Ur=function(t,e){if(Tr(t,Xr))throw new zr(_r);return e.facade=t,kr(t,Xr,e),e},Ir=function(t){return Tr(t,Xr)?t[Xr]:{}},Fr=function(t){return Tr(t,Xr)}}var Wr={set:Ur,get:Ir,has:Fr,enforce:function(t){return Fr(t)?Ir(t):Ur(t,{})},getterFor:function(t){return function(e){var r;if(!Mr(e)||(r=Ir(e)).type!==t)throw new zr("Incompatible receiver, "+t+" required");return r}}},Jr=u,Or=n,Kr=pt,Pr=Q,Zr=ht,jr=yr.CONFIGURABLE,qr=Cr,ti=Wr.enforce,ei=Wr.get,ri=String,ii=Object.defineProperty,ni=Jr("".slice),si=Jr("".replace),ai=Jr([].join),oi=Zr&&!Or(function(){return 8!==ii(function(){},"length",{value:8}).length}),ci=String(String).split("String"),li=gr.exports=function(t,e,r){"Symbol("===ni(ri(e),0,7)&&(e="["+si(ri(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Pr(t,"name")||jr&&t.name!==e)&&(Zr?ii(t,"name",{value:e,configurable:!0}):t.name=e),oi&&r&&Pr(r,"arity")&&t.length!==r.arity&&ii(t,"length",{value:r.arity});try{r&&Pr(r,"constructor")&&r.constructor?Zr&&ii(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var i=ti(t);return Pr(i,"source")||(i.source=ai(ci,"string"==typeof e?e:"")),t};Function.prototype.toString=li(function(){return Kr(this)&&ei(this).source||qr(this)},"toString");var ui,di=gr.exports,hi=pt,gi=dt,pi=di,fi=C,mi=function(t,e,r,i){i||(i={});var n=i.enumerable,s=void 0!==i.name?i.name:e;if(hi(r)&&pi(r,s,i),i.global)n?t[e]=r:fi(e,r);else{try{i.unsafe?t[e]&&(n=!0):delete t[e]}catch(t){}n?t[e]=r:gi.f(t,e,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t},bi={},yi=Math.ceil,vi=Math.floor,Qi=Math.trunc||function(t){var e=+t;return(e>0?vi:yi)(e)},Bi=Qi,Ui=function(t){var e=+t;return e!=e||0===e?0:Bi(e)},Ii=Ui,Fi=Math.max,Ci=Math.min,Ai=Ui,xi=Math.min,Ei=function(t){var e=Ai(t);return e>0?xi(e,9007199254740991):0},wi=Ei,Ri=function(t){return wi(t.length)},Si=ze,Ni=function(t,e){var r=Ii(t);return r<0?Fi(r+e,0):Ci(r,e)},Li=Ri,Di={indexOf:(ui=!1,function(t,e,r){var i=Si(t),n=Li(i);if(0===n)return!ui&&-1;var s,a=Ni(r,n);if(ui&&e!=e){for(;n>a;)if((s=i[a++])!=s)return!0}else for(;n>a;a++)if((ui||a in i)&&i[a]===e)return ui||a||0;return!ui&&-1})},Mi=Q,ki=ze,Ti=Di.indexOf,Vi=Nr,Hi=u([].push),$i=function(t,e){var r,i=ki(t),n=0,s=[];for(r in i)!Mi(Vi,r)&&Mi(i,r)&&Hi(s,r);for(;e.length>n;)Mi(i,r=e[n++])&&(~Ti(s,r)||Hi(s,r));return s},_i=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],zi=$i,Yi=_i.concat("length","prototype");bi.f=Object.getOwnPropertyNames||function(t){return zi(t,Yi)};var Gi={};Gi.f=Object.getOwnPropertySymbols;var Xi=Lt,Wi=bi,Ji=Gi,Oi=xt,Ki=u([].concat),Pi=Xi("Reflect","ownKeys")||function(t){var e=Wi.f(Oi(t)),r=Ji.f;return r?Ki(e,r(t)):e},Zi=Q,ji=Pi,qi=Ae,tn=dt,en=function(t,e,r){for(var i=ji(e),n=tn.f,s=qi.f,a=0;a<i.length;a++){var o=i[a];Zi(t,o)||r&&Zi(r,o)||n(t,o,s(e,o))}},rn=n,nn=pt,sn=/#|\.prototype\./,an=function(t,e){var r=cn[on(t)];return r===un||r!==ln&&(nn(e)?rn(e):!!e)},on=an.normalize=function(t){return String(t).replace(sn,".").toLowerCase()},cn=an.data={},ln=an.NATIVE="N",un=an.POLYFILL="P",dn=an,hn=r,gn=Ae.f,pn=hr,fn=mi,mn=C,bn=en,yn=dn,vn=function(t,e){var r,i,n,s,a,o=t.target,c=t.global,l=t.stat;if(r=c?hn:l?hn[o]||mn(o,{}):hn[o]&&hn[o].prototype)for(i in e){if(s=e[i],n=t.dontCallGetSet?(a=gn(r,i))&&a.value:r[i],!yn(c?i:o+(l?".":"#")+i,t.forced)&&void 0!==n){if(typeof s==typeof n)continue;bn(s,n)}(t.sham||n&&n.sham)&&pn(s,"sham",!0),fn(r,i,s,t)}},Qn={};Qn[lt("toStringTag")]="z";var Bn="[object z]"===String(Qn),Un=pt,In=Me,Fn=lt("toStringTag"),Cn=Object,An="Arguments"===In(function(){return arguments}()),xn=Bn?In:function(t){var e,r,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Cn(t),Fn))?r:An?In(e):"Object"===(i=In(e))&&Un(e.callee)?"Arguments":i},En=vn,wn=Lt,Rn=mt,Sn=xn,Nn=n,Ln="Error",Dn="DOMException",Mn=Object.setPrototypeOf||{}.__proto__,kn=wn(Dn),Tn=Error,Vn=Tn.isError;En({target:"Error",stat:!0,sham:!0,forced:!Vn||!Mn||Nn(function(){return kn&&!Vn(new kn(Dn))||!Vn(new Tn(Ln,{cause:function(){}}))||Vn(wn("Object","create")(Tn.prototype))})},{isError:function(t){if(!Rn(t))return!1;var e=Sn(t);return e===Ln||e===Dn}});var Hn=!n(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),$n=Q,_n=pt,zn=b,Yn=Hn,Gn=Sr("IE_PROTO"),Xn=Object,Wn=Xn.prototype,Jn=Yn?Xn.getPrototypeOf:function(t){var e=zn(t);if($n(e,Gn))return e[Gn];var r=e.constructor;return _n(r)&&e instanceof r?r.prototype:e instanceof Xn?Wn:null},On=u,Kn=Xt,Pn=function(t,e,r){try{return On(Kn(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Zn=mt,jn=function(t){return Zn(t)||null===t},qn=String,ts=TypeError,es=Pn,rs=mt,is=p,ns=function(t){if(jn(t))return t;throw new ts("Can't set "+qn(t)+" as a prototype")},ss=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=es(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return is(r),ns(i),rs(r)?(e?t(r,i):r.__proto__=i,r):r}}():void 0),as={},os=$i,cs=_i,ls=Object.keys||function(t){return os(t,cs)},us=ht,ds=It,hs=dt,gs=xt,ps=ze,fs=ls;as.f=us&&!ds?Object.defineProperties:function(t,e){gs(t);for(var r,i=ps(e),n=fs(e),s=n.length,a=0;s>a;)hs.f(t,r=n[a++],i[r]);return t};var ms,bs=Lt("document","documentElement"),ys=xt,vs=as,Qs=_i,Bs=Nr,Us=bs,Is=Qt,Fs="prototype",Cs="script",As=Sr("IE_PROTO"),xs=function(){},Es=function(t){return"<"+Cs+">"+t+"</"+Cs+">"},ws=function(t){t.write(Es("")),t.close();var e=t.parentWindow.Object;return t=null,e},Rs=function(){try{ms=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Rs="undefined"!=typeof document?document.domain&&ms?ws(ms):(e=Is("iframe"),r="java"+Cs+":",e.style.display="none",Us.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Es("document.F=Object")),t.close(),t.F):ws(ms);for(var i=Qs.length;i--;)delete Rs[Fs][Qs[i]];return Rs()};Bs[As]=!0;var Ss=Object.create||function(t,e){var r;return null!==t?(xs[Fs]=ys(t),r=new xs,xs[Fs]=null,r[As]=t):r=Rs(),void 0===e?r:vs.f(r,e)},Ns=Error,Ls=u("".replace),Ds=String(new Ns("zxcasd").stack),Ms=/\n\s*at [^:]*:[^\n]*/,ks=Ms.test(Ds),Ts=function(t,e){if(ks&&"string"==typeof t&&!Ns.prepareStackTrace)for(;e--;)t=Ls(t,Ms,"");return t},Vs=Se,Hs=!n(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",Vs(1,7)),7!==t.stack)}),$s=hr,_s=Ts,zs=Hs,Ys=Error.captureStackTrace,Gs=xn,Xs=String,Ws=function(t){if("Symbol"===Gs(t))throw new TypeError("Cannot convert a Symbol value to a string");return Xs(t)},Js=Ws,Os=function(t,e){return void 0===t?arguments.length<2?"":e:Js(t)},Ks=vn,Ps=Dt,Zs=Jn,js=ss,qs=en,ta=Ss,ea=hr,ra=Se,ia=function(t,e,r,i){zs&&(Ys?Ys(t,e):$s(t,"stack",_s(r,i)))},na=Os,sa=lt,aa=n,oa=r.SuppressedError,ca=sa("toStringTag"),la=Error,ua=!!oa&&3!==oa.length,da=!!oa&&aa(function(){return 4===new oa(1,2,3,{cause:4}).cause}),ha=ua||da,ga=function(t,e,r){var i,n=Ps(pa,this);return js?i=!ha||n&&Zs(this)!==pa?js(new la,n?Zs(this):pa):new oa:(i=n?this:ta(pa),ea(i,ca,"Error")),void 0!==r&&ea(i,"message",na(r)),ia(i,ga,i.stack,1),ea(i,"error",t),ea(i,"suppressed",e),i};js?js(ga,la):qs(ga,la,{name:!0});var pa=ga.prototype=ha?oa.prototype:ta(la.prototype,{constructor:ra(1,ga),message:ra(1,""),name:ra(1,"SuppressedError")});ha&&(pa.constructor=ga),Ks({global:!0,constructor:!0,arity:3,forced:ha},{SuppressedError:ga});var fa=Me,ma=ht,ba=Array.isArray||function(t){return"Array"===fa(t)},ya=TypeError,va=Object.getOwnPropertyDescriptor,Qa=ma&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}(),Ba=TypeError,Ua=function(t){if(t>9007199254740991)throw Ba("Maximum allowed index exceeded");return t},Ia=b,Fa=Ri,Ca=Qa?function(t,e){if(ba(t)&&!va(t,"length").writable)throw new ya("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Aa=Ua;vn({target:"Array",proto:!0,arity:1,forced:n(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=Ia(this),r=Fa(e),i=arguments.length;Aa(r+i);for(var n=0;n<i;n++)e[r]=arguments[n],r++;return Ca(e,r),r}});var xa=Ri,Ea=Ui,wa=RangeError,Ra=function(t,e,r,i){var n=xa(t),s=Ea(r),a=s<0?n+s:s;if(a>=n||a<0)throw new wa("Incorrect index");for(var o=new e(n),c=0;c<n;c++)o[c]=c===a?i:t[c];return o},Sa=Ra,Na=ze,La=Array;vn({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){return Sa(Na(this),La,t,e)}});var Da=vn,Ma=u,ka=Math.pow,Ta=ka(2,-24),Va=.0009765625,Ha=Ma(DataView.prototype.getUint16);Da({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,i=1023&t;return 31===r?0===i?0===e?1/0:-1/0:NaN:0===r?i*(0===e?Ta:-Ta):ka(2,r-15)*(0===e?1+i*Va:-1-i*Va)}(Ha(this,t,arguments.length>1&&arguments[1]))}});var $a=xn,_a=TypeError,za=Ui,Ya=Ei,Ga=RangeError,Xa=function(t){if(void 0===t)return 0;var e=za(t),r=Ya(e);if(e!==r)throw new Ga("Wrong length or index");return r},Wa=Math.log,Ja=Math.LN2,Oa=Math.log2||function(t){return Wa(t)/Ja},Ka=4503599627370496,Pa=function(t){return t+Ka-Ka},Za=vn,ja=u,qa=function(t){if("DataView"===$a(t))return t;throw new _a("Argument is not a DataView")},to=Xa,eo=Oa,ro=Pa,io=Math.pow,no=1024,so=ja(DataView.prototype.setUint16);Za({target:"DataView",proto:!0},{setFloat16:function(t,e){so(qa(this),to(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|ro(16777216*t);var r=0|eo(t);if(-15===r)return e<<15|no;var i=ro((t*io(2,-r)-1)*no);return i===no?e<<15|r+16<<10:e<<15|r+15<<10|i}(+e),arguments.length>2&&arguments[2])}});var ao=di,oo=dt,co=function(t,e,r){return r.get&&ao(r.get,e,{getter:!0}),r.set&&ao(r.set,e,{setter:!0}),oo.f(t,e,r)},lo="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,uo=r,ho=Pn,go=Me,po=uo.ArrayBuffer,fo=uo.TypeError,mo=po&&ho(po.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==go(t))throw new fo("ArrayBuffer expected");return t.byteLength},bo=lo,yo=mo,vo=r.DataView,Qo=function(t){if(!bo||0!==yo(t))return!1;try{return new vo(t),!1}catch(t){return!0}},Bo=ht,Uo=co,Io=Qo,Fo=ArrayBuffer.prototype;Bo&&!("detached"in Fo)&&Uo(Fo,"detached",{configurable:!0,get:function(){return Io(this)}});var Co,Ao,xo,Eo,wo=Qo,Ro=TypeError,So=function(t){if(wo(t))throw new Ro("ArrayBuffer is detached");return t},No=r,Lo=z,Do=Me,Mo=function(t){return Lo.slice(0,t.length)===t},ko=Mo("Bun/")?"BUN":Mo("Cloudflare-Workers")?"CLOUDFLARE":Mo("Deno/")?"DENO":Mo("Node.js/")?"NODE":No.Bun&&"string"==typeof Bun.version?"BUN":No.Deno&&"object"==typeof Deno.version?"DENO":"process"===Do(No.process)?"NODE":No.window&&No.document?"BROWSER":"REST",To="NODE"===ko,Vo=r,Ho=To,$o=n,_o=K,zo=ko,Yo=r.structuredClone,Go=!!Yo&&!$o(function(){if("DENO"===zo&&_o>92||"NODE"===zo&&_o>94||"BROWSER"===zo&&_o>97)return!1;var t=new ArrayBuffer(8),e=Yo(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Xo=r,Wo=function(t){if(Ho){try{return Vo.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},Jo=Go,Oo=Xo.structuredClone,Ko=Xo.ArrayBuffer,Po=Xo.MessageChannel,Zo=!1;if(Jo)Zo=function(t){Oo(t,{transfer:[t]})};else if(Ko)try{Po||(Co=Wo("worker_threads"))&&(Po=Co.MessageChannel),Po&&(Ao=new Po,xo=new Ko(2),Eo=function(t){Ao.port1.postMessage(null,[t])},2===xo.byteLength&&(Eo(xo),0===xo.byteLength&&(Zo=Eo)))}catch(t){}var jo=Zo,qo=r,tc=u,ec=Pn,rc=Xa,ic=So,nc=mo,sc=jo,ac=Go,oc=qo.structuredClone,cc=qo.ArrayBuffer,lc=qo.DataView,uc=Math.min,dc=cc.prototype,hc=lc.prototype,gc=tc(dc.slice),pc=ec(dc,"resizable","get"),fc=ec(dc,"maxByteLength","get"),mc=tc(hc.getInt8),bc=tc(hc.setInt8),yc=(ac||sc)&&function(t,e,r){var i,n=nc(t),s=void 0===e?n:rc(e),a=!pc||!pc(t);if(ic(t),ac&&(t=oc(t,{transfer:[t]}),n===s&&(r||a)))return t;if(n>=s&&(!r||a))i=gc(t,0,s);else{var o=r&&!a&&fc?{maxByteLength:fc(t)}:void 0;i=new cc(s,o);for(var c=new lc(t),l=new lc(i),u=uc(s,n),d=0;d<u;d++)bc(l,d,mc(c,d))}return ac||sc(t),i},vc=yc;vc&&vn({target:"ArrayBuffer",proto:!0},{transfer:function(){return vc(this,arguments.length?arguments[0]:void 0,!0)}});var Qc=yc;Qc&&vn({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return Qc(this,arguments.length?arguments[0]:void 0,!1)}});var Bc=Dt,Uc=TypeError,Ic=function(t,e){if(Bc(e,t))return t;throw new Uc("Incorrect invocation")},Fc=mi,Cc=function(t,e,r){for(var i in e)Fc(t,i,e[i],r);return t},Ac=Me,xc=u,Ec=function(t){if("Function"===Ac(t))return xc(t)},wc=Xt,Rc=s,Sc=Ec(Ec.bind),Nc=function(t,e){return wc(t),void 0===e?t:Rc?Sc(t,e):function(){return t.apply(e,arguments)}},Lc=Lt,Dc=Rt,Mc=u,kc=Nc,Tc=xt,Vc=Xt,Hc=d,$c=Ot,_c=lt,zc=_c("asyncDispose"),Yc=_c("dispose"),Gc=Mc([].push),Xc=function(t,e,r){return arguments.length<3&&!Hc(t)&&(r=Vc(function(t,e){if("async-dispose"===e){var r=$c(t,zc);return void 0!==r||void 0===(r=$c(t,Yc))?r:function(){var t=this;return new(Lc("Promise"))(function(e){Dc(r,t),e(void 0)})}}return $c(t,Yc)}(Tc(t),e))),void 0===r?function(){}:kc(r,t)},Wc=function(t,e,r,i){var n;if(arguments.length<4){if(Hc(e)&&"sync-dispose"===r)return;n=Xc(e,r)}else n=Xc(void 0,r,i);Gc(t.stack,n)},Jc=vn,Oc=ht,Kc=Xt,Pc=Ic,Zc=mi,jc=Cc,qc=co,tl=lt,el=Wr,rl=Wc,il=Lt("SuppressedError"),nl=ReferenceError,sl=tl("dispose"),al=tl("toStringTag"),ol="DisposableStack",cl=el.set,ll=el.getterFor(ol),ul="sync-dispose",dl="disposed",hl=function(t){var e=ll(t);if(e.state===dl)throw new nl(ol+" already disposed");return e},gl=function(){cl(Pc(this,pl),{type:ol,state:"pending",stack:[]}),Oc||(this.disposed=!1)},pl=gl.prototype;jc(pl,{dispose:function(){var t=ll(this);if(t.state!==dl){t.state=dl,Oc||(this.disposed=!0);for(var e,r=t.stack,i=r.length,n=!1;i;){var s=r[--i];r[i]=null;try{s()}catch(t){n?e=new il(t,e):(n=!0,e=t)}}if(t.stack=null,n)throw e}},use:function(t){return rl(hl(this),t,ul),t},adopt:function(t,e){var r=hl(this);return Kc(e),rl(r,void 0,ul,function(){e(t)}),t},defer:function(t){var e=hl(this);Kc(t),rl(e,void 0,ul,t)},move:function(){var t=hl(this),e=new gl;return ll(e).stack=t.stack,t.stack=[],t.state=dl,Oc||(this.disposed=!0),e}}),Oc&&qc(pl,"disposed",{configurable:!0,get:function(){return ll(this).state===dl}}),Zc(pl,sl,pl.dispose,{name:"dispose"}),Zc(pl,al,ol,{nonWritable:!0}),Jc({global:!0,constructor:!0},{DisposableStack:gl});var fl,ml,bl,yl=ht,vl=dt,Ql=Se,Bl=function(t,e,r){yl?vl.f(t,e,Ql(0,r)):t[e]=r},Ul=n,Il=pt,Fl=mt,Cl=Jn,Al=mi,xl=lt("iterator");[].keys&&"next"in(bl=[].keys())&&(ml=Cl(Cl(bl)))!==Object.prototype&&(fl=ml);var El=!Fl(fl)||Ul(function(){var t={};return fl[xl].call(t)!==t});El&&(fl={}),Il(fl[xl])||Al(fl,xl,function(){return this});var wl={IteratorPrototype:fl},Rl=vn,Sl=r,Nl=Ic,Ll=xt,Dl=pt,Ml=Jn,kl=co,Tl=Bl,Vl=n,Hl=Q,$l=wl.IteratorPrototype,_l=ht,zl="constructor",Yl="Iterator",Gl=lt("toStringTag"),Xl=TypeError,Wl=Sl[Yl],Jl=!Dl(Wl)||Wl.prototype!==$l||!Vl(function(){Wl({})}),Ol=function(){if(Nl(this,$l),Ml(this)===$l)throw new Xl("Abstract class Iterator not directly constructable")},Kl=function(t,e){_l?kl($l,t,{configurable:!0,get:function(){return e},set:function(e){if(Ll(this),this===$l)throw new Xl("You can't redefine this property");Hl(this,t)?this[t]=e:Tl(this,t,e)}}):$l[t]=e};Hl($l,Gl)||Kl(Gl,Yl),!Jl&&Hl($l,zl)&&$l[zl]!==Object||Kl(zl,Ol),Ol.prototype=$l,Rl({global:!0,constructor:!0,forced:Jl},{Iterator:Ol});var Pl=Rt,Zl=mi,jl=Ot,ql=Q,tu=wl.IteratorPrototype,eu=lt("dispose");ql(tu,eu)||Zl(tu,eu,function(){var t=jl(this,"return");t&&Pl(t,this)});var ru=function(t){return{iterator:t,next:t.next,done:!1}},iu=RangeError,nu=function(t){if(t==t)return t;throw new iu("NaN is not allowed")},su=Ui,au=RangeError,ou=function(t){var e=su(t);if(e<0)throw new au("The argument can't be less than 0");return e},cu=Rt,lu=xt,uu=Ot,du=function(t,e,r){var i,n;lu(t);try{if(!(i=uu(t,"return"))){if("throw"===e)throw r;return r}i=cu(i,t)}catch(t){n=!0,i=t}if("throw"===e)throw r;if(n)throw i;return lu(i),r},hu=function(t,e){return{value:t,done:e}},gu=du,pu=Rt,fu=Ss,mu=hr,bu=Cc,yu=Wr,vu=Ot,Qu=wl.IteratorPrototype,Bu=hu,Uu=du,Iu=function(t,e,r){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{r=gu(t[i].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},Fu=lt("toStringTag"),Cu="IteratorHelper",Au="WrapForValidIterator",xu="normal",Eu="throw",wu=yu.set,Ru=function(t){var e=yu.getterFor(t?Au:Cu);return bu(fu(Qu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return Bu(void 0,!0);try{var i=r.nextHandler();return r.returnHandlerResult?i:Bu(i,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),i=r.iterator;if(r.done=!0,t){var n=vu(i,"return");return n?pu(n,i):Bu(void 0,!0)}if(r.inner)try{Uu(r.inner.iterator,xu)}catch(t){return Uu(i,Eu,t)}if(r.openIters)try{Iu(r.openIters,xu)}catch(t){return Uu(i,Eu,t)}return i&&Uu(i,xu),Bu(void 0,!0)}})},Su=Ru(!0),Nu=Ru(!1);mu(Nu,Fu,"Iterator Helper");var Lu=function(t,e,r){var i=function(i,n){n?(n.iterator=i.iterator,n.next=i.next):n=i,n.type=e?Au:Cu,n.returnHandlerResult=!!r,n.nextHandler=t,n.counter=0,n.done=!1,wu(this,n)};return i.prototype=e?Su:Nu,i},Du=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Mu=r,ku=function(t,e){var r=Mu.Iterator,i=r&&r.prototype,n=i&&i[t],s=!1;if(n)try{n.call({next:function(){return{done:!0}},return:function(){s=!0}},-1)}catch(t){t instanceof e||(s=!1)}if(!s)return n},Tu=vn,Vu=Rt,Hu=xt,$u=ru,_u=nu,zu=ou,Yu=du,Gu=Lu,Xu=ku,Wu=!Du("drop",0),Ju=!Wu&&Xu("drop",RangeError),Ou=Wu||Ju,Ku=Gu(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=Hu(Vu(r,e)),this.done=!!t.done)return;if(t=Hu(Vu(r,e)),!(this.done=!!t.done))return t.value});Tu({target:"Iterator",proto:!0,real:!0,forced:Ou},{drop:function(t){var e;Hu(this);try{e=zu(_u(+t))}catch(t){Yu(this,"throw",t)}return Ju?Vu(Ju,this,e):new Ku($u(this),{remaining:e})}});var Pu={},Zu=Pu,ju=lt("iterator"),qu=Array.prototype,td=xn,ed=Ot,rd=d,id=Pu,nd=lt("iterator"),sd=function(t){if(!rd(t))return ed(t,nd)||ed(t,"@@iterator")||id[td(t)]},ad=Rt,od=Xt,cd=xt,ld=_t,ud=sd,dd=TypeError,hd=function(t,e){var r=arguments.length<2?ud(t):e;if(od(r))return cd(ad(r,t));throw new dd(ld(t)+" is not iterable")},gd=Nc,pd=Rt,fd=xt,md=_t,bd=function(t){return void 0!==t&&(Zu.Array===t||qu[ju]===t)},yd=Ri,vd=Dt,Qd=hd,Bd=sd,Ud=du,Id=TypeError,Fd=function(t,e){this.stopped=t,this.result=e},Cd=Fd.prototype,Ad=function(t,e,r){var i,n,s,a,o,c,l,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),g=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),f=gd(e,u),m=function(t){return i&&Ud(i,"normal"),new Fd(!0,t)},b=function(t){return d?(fd(t),p?f(t[0],t[1],m):f(t[0],t[1])):p?f(t,m):f(t)};if(h)i=t.iterator;else if(g)i=t;else{if(!(n=Bd(t)))throw new Id(md(t)+" is not iterable");if(bd(n)){for(s=0,a=yd(t);a>s;s++)if((o=b(t[s]))&&vd(Cd,o))return o;return new Fd(!1)}i=Qd(t,n)}for(c=h?t.next:i.next;!(l=pd(c,i)).done;){try{o=b(l.value)}catch(t){Ud(i,"throw",t)}if("object"==typeof o&&o&&vd(Cd,o))return o}return new Fd(!1)},xd=vn,Ed=Rt,wd=Ad,Rd=Xt,Sd=xt,Nd=ru,Ld=du,Dd=ku("every",TypeError);xd({target:"Iterator",proto:!0,real:!0,forced:Dd},{every:function(t){Sd(this);try{Rd(t)}catch(t){Ld(this,"throw",t)}if(Dd)return Ed(Dd,this,t);var e=Nd(this),r=0;return!wd(e,function(e,i){if(!t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Md=xt,kd=du,Td=function(t,e,r,i){try{return i?e(Md(r)[0],r[1]):e(r)}catch(e){kd(t,"throw",e)}},Vd=vn,Hd=Rt,$d=Xt,_d=xt,zd=ru,Yd=Lu,Gd=Td,Xd=du,Wd=ku,Jd=!Du("filter",function(){}),Od=!Jd&&Wd("filter",TypeError),Kd=Jd||Od,Pd=Yd(function(){for(var t,e,r=this.iterator,i=this.predicate,n=this.next;;){if(t=_d(Hd(n,r)),this.done=!!t.done)return;if(e=t.value,Gd(r,i,[e,this.counter++],!0))return e}});Vd({target:"Iterator",proto:!0,real:!0,forced:Kd},{filter:function(t){_d(this);try{$d(t)}catch(t){Xd(this,"throw",t)}return Od?Hd(Od,this,t):new Pd(zd(this),{predicate:t})}});var Zd=vn,jd=Rt,qd=Ad,th=Xt,eh=xt,rh=ru,ih=du,nh=ku("find",TypeError);Zd({target:"Iterator",proto:!0,real:!0,forced:nh},{find:function(t){eh(this);try{th(t)}catch(t){ih(this,"throw",t)}if(nh)return jd(nh,this,t);var e=rh(this),r=0;return qd(e,function(e,i){if(t(e,r++))return i(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var sh=Rt,ah=xt,oh=ru,ch=sd,lh=function(t,e){e&&"string"==typeof t||ah(t);var r=ch(t);return oh(ah(void 0!==r?sh(r,t):t))},uh=vn,dh=Rt,hh=Xt,gh=xt,ph=ru,fh=lh,mh=Lu,bh=du,yh=ku,vh=!Du("flatMap",function(){}),Qh=!vh&&yh("flatMap",TypeError),Bh=vh||Qh,Uh=mh(function(){for(var t,e,r=this.iterator,i=this.mapper;;){if(e=this.inner)try{if(!(t=gh(dh(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){bh(r,"throw",t)}if(t=gh(dh(this.next,r)),this.done=!!t.done)return;try{this.inner=fh(i(t.value,this.counter++),!1)}catch(t){bh(r,"throw",t)}}});uh({target:"Iterator",proto:!0,real:!0,forced:Bh},{flatMap:function(t){gh(this);try{hh(t)}catch(t){bh(this,"throw",t)}return Qh?dh(Qh,this,t):new Uh(ph(this),{mapper:t,inner:null})}});var Ih=vn,Fh=Rt,Ch=Ad,Ah=Xt,xh=xt,Eh=ru,wh=du,Rh=ku("forEach",TypeError);Ih({target:"Iterator",proto:!0,real:!0,forced:Rh},{forEach:function(t){xh(this);try{Ah(t)}catch(t){wh(this,"throw",t)}if(Rh)return Fh(Rh,this,t);var e=Eh(this),r=0;Ch(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var Sh=vn,Nh=Rt,Lh=b,Dh=Dt,Mh=wl.IteratorPrototype,kh=Lu,Th=lh,Vh=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),Hh=kh(function(){return Nh(this.next,this.iterator)},!0);Sh({target:"Iterator",stat:!0,forced:Vh},{from:function(t){var e=Th("string"==typeof t?Lh(t):t,!0);return Dh(Mh,e.iterator)?e.iterator:new Hh(e)}});var $h=vn,_h=Rt,zh=Xt,Yh=xt,Gh=ru,Xh=Lu,Wh=Td,Jh=du,Oh=ku,Kh=!Du("map",function(){}),Ph=!Kh&&Oh("map",TypeError),Zh=Kh||Ph,jh=Xh(function(){var t=this.iterator,e=Yh(_h(this.next,t));if(!(this.done=!!e.done))return Wh(t,this.mapper,[e.value,this.counter++],!0)});$h({target:"Iterator",proto:!0,real:!0,forced:Zh},{map:function(t){Yh(this);try{zh(t)}catch(t){Jh(this,"throw",t)}return Ph?_h(Ph,this,t):new jh(Gh(this),{mapper:t})}});var qh=s,tg=Function.prototype,eg=tg.apply,rg=tg.call,ig="object"==typeof Reflect&&Reflect.apply||(qh?rg.bind(eg):function(){return rg.apply(eg,arguments)}),ng=vn,sg=Ad,ag=Xt,og=xt,cg=ru,lg=du,ug=ku,dg=ig,hg=TypeError,gg=n(function(){[].keys().reduce(function(){},void 0)}),pg=!gg&&ug("reduce",hg);ng({target:"Iterator",proto:!0,real:!0,forced:gg||pg},{reduce:function(t){og(this);try{ag(t)}catch(t){lg(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(pg)return dg(pg,this,e?[t]:[t,r]);var i=cg(this),n=0;if(sg(i,function(i){e?(e=!1,r=i):r=t(r,i,n),n++},{IS_RECORD:!0}),e)throw new hg("Reduce of empty iterator with no initial value");return r}});var fg=vn,mg=Rt,bg=Ad,yg=Xt,vg=xt,Qg=ru,Bg=du,Ug=ku("some",TypeError);fg({target:"Iterator",proto:!0,real:!0,forced:Ug},{some:function(t){vg(this);try{yg(t)}catch(t){Bg(this,"throw",t)}if(Ug)return mg(Ug,this,t);var e=Qg(this),r=0;return bg(e,function(e,i){if(t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Ig=vn,Fg=Rt,Cg=xt,Ag=ru,xg=nu,Eg=ou,wg=Lu,Rg=du,Sg=ku("take",RangeError),Ng=wg(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,Rg(t,"normal",void 0);var e=Cg(Fg(this.next,t));return(this.done=!!e.done)?void 0:e.value});Ig({target:"Iterator",proto:!0,real:!0,forced:Sg},{take:function(t){var e;Cg(this);try{e=Eg(xg(+t))}catch(t){Rg(this,"throw",t)}return Sg?Fg(Sg,this,e):new Ng(Ag(this),{remaining:e})}});var Lg=xt,Dg=Ad,Mg=ru,kg=[].push;vn({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return Dg(Mg(Lg(this)),kg,{that:t,IS_RECORD:!0}),t}});var Tg=u,Vg=Map.prototype,Hg={Map:Map,set:Tg(Vg.set),get:Tg(Vg.get),has:Tg(Vg.has),remove:Tg(Vg.delete)},$g=vn,_g=Xt,zg=p,Yg=Ad,Gg=n,Xg=Hg.Map,Wg=Hg.has,Jg=Hg.get,Og=Hg.set,Kg=u([].push);$g({target:"Map",stat:!0,forced:Gg(function(){return 1!==Xg.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){zg(t),_g(e);var r=new Xg,i=0;return Yg(t,function(t){var n=e(t,i++);Wg(r,n)?Kg(Jg(r,n),t):Og(r,n,[t])}),r}});var Pg=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},Zg=Pg,jg=Pa,qg=Math.abs,tp=function(t,e,r,i){var n=+t,s=qg(n),a=Zg(n);if(s<i)return a*jg(s/i/e)*i*e;var o=(1+e/2220446049250313e-31)*s,c=o-(o-s);return c>r||c!=c?a*(1/0):a*c};vn({target:"Math",stat:!0},{f16round:function(t){return tp(t,.0009765625,65504,6103515625e-14)}});var ep=vn,rp=u,ip=Ad,np=RangeError,sp=TypeError,ap=1/0,op=Math.abs,cp=Math.pow,lp=rp([].push),up=cp(2,1023),dp=cp(2,53)-1,hp=Number.MAX_VALUE,gp=cp(2,971),pp={},fp={},mp={},bp={},yp={},vp=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};ep({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,i=bp;switch(ip(t,function(t){if(++r>=dp)throw new np("Maximum allowed index exceeded");if("number"!=typeof t)throw new sp("Value is not a number");i!==pp&&(t!=t?i=pp:t===ap?i=i===fp?pp:mp:t===-1/0?i=i===mp?pp:fp:0===t&&1/t!==ap||i!==bp&&i!==yp||(i=yp,lp(e,t)))}),i){case pp:return NaN;case fp:return-1/0;case mp:return ap;case bp:return-0}for(var n,s,a,o,c,l,u=[],d=0,h=0;h<e.length;h++){n=e[h];for(var g=0,p=0;p<u.length;p++){if(s=u[p],op(n)<op(s)&&(l=n,n=s,s=l),o=(a=vp(n,s)).hi,c=a.lo,op(o)===ap){var f=o===ap?1:-1;d+=f,op(n=n-f*up-f*up)<op(s)&&(l=n,n=s,s=l),o=(a=vp(n,s)).hi,c=a.lo}0!==c&&(u[g++]=c),n=o}u.length=g,0!==n&&lp(u,n)}var m=u.length-1;if(o=0,c=0,0!==d){var b=m>=0?u[m]:0;if(m--,op(d)>1||d>0&&b>0||d<0&&b<0)return d>0?ap:-1/0;if(o=(a=vp(d*up,b/2)).hi,c=a.lo,c*=2,op(2*o)===ap)return o>0?o===up&&c===-gp/2&&m>=0&&u[m]<0?hp:ap:o===-up&&c===gp/2&&m>=0&&u[m]>0?-hp:-1/0;0!==c&&(u[++m]=c,c=0),o*=2}for(;m>=0&&(o=(a=vp(o,u[m--])).hi,0===(c=a.lo)););return m>=0&&(c<0&&u[m]<0||c>0&&u[m]>0)&&(s=2*c)===(n=o+s)-o&&(o=n),o}});var Qp=vn,Bp=Bl,Up=Lt,Ip=u,Fp=Xt,Cp=p,Ap=le,xp=Ad,Ep=n,wp=Object.groupBy,Rp=Up("Object","create"),Sp=Ip([].push);Qp({target:"Object",stat:!0,forced:!wp||Ep(function(){return 1!==wp("ab",function(t){return t}).a.length})},{groupBy:function(t,e){Cp(t),Fp(e);var r=Rp(null),i=0;return xp(t,function(t){var n=Ap(e(t,i++));n in r?Sp(r[n],t):Bp(r,n,[t])}),r}});var Np=u([].slice),Lp={},Dp=Xt,Mp=TypeError,kp=function(t){var e,r;this.promise=new t(function(t,i){if(void 0!==e||void 0!==r)throw new Mp("Bad Promise constructor");e=t,r=i}),this.resolve=Dp(e),this.reject=Dp(r)};Lp.f=function(t){return new kp(t)};var Tp=vn,Vp=ig,Hp=Np,$p=Lp,_p=Xt,zp=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Yp=r.Promise,Gp=!1;Tp({target:"Promise",stat:!0,forced:!Yp||!Yp.try||zp(function(){Yp.try(function(t){Gp=8===t},8)}).error||!Gp},{try:function(t){var e=arguments.length>1?Hp(arguments,1):[],r=$p.f(this),i=zp(function(){return Vp(_p(t),void 0,e)});return(i.error?r.reject:r.resolve)(i.value),r.promise}});var Xp=Lp;vn({target:"Promise",stat:!0},{withResolvers:function(){var t=Xp.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var Wp=u,Jp=n,Op=pt,Kp=xn,Pp=Cr,Zp=function(){},jp=Lt("Reflect","construct"),qp=/^\s*(?:class|function)\b/,tf=Wp(qp.exec),ef=!qp.test(Zp),rf=function(t){if(!Op(t))return!1;try{return jp(Zp,[],t),!0}catch(t){return!1}},nf=function(t){if(!Op(t))return!1;switch(Kp(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ef||!!tf(qp,Pp(t))}catch(t){return!0}};nf.sham=!0;var sf,af,of=!jp||Jp(function(){var t;return rf(rf.call)||!rf(Object)||!rf(function(){t=!0})||t})?nf:rf,cf=r,lf=N,uf=pt,df=Jn,hf=mi,gf="USE_FUNCTION_CONSTRUCTOR",pf=lt("asyncIterator"),ff=cf.AsyncIterator,mf=lf.AsyncIteratorPrototype;if(mf)sf=mf;else if(uf(ff))sf=ff.prototype;else if(lf[gf]||cf[gf])try{af=df(df(df(Function("return async function*(){}()")()))),df(af)===Object.prototype&&(sf=af)}catch(t){}sf||(sf={}),uf(sf[pf])||hf(sf,pf,function(){return this});var bf=sf,yf=Rt,vf=xt,Qf=Ss,Bf=Ot,Uf=Cc,If=Wr,Ff=du,Cf=bf,Af=hu,xf=Lt("Promise"),Ef="AsyncFromSyncIterator",wf=If.set,Rf=If.getterFor(Ef),Sf=function(t,e,r,i,n){var s=t.done;xf.resolve(t.value).then(function(t){e(Af(t,s))},function(t){if(!s&&n)try{Ff(i,"throw",t)}catch(e){t=e}r(t)})},Nf=function(t){t.type=Ef,wf(this,t)};Nf.prototype=Uf(Qf(Cf),{next:function(){var t=Rf(this);return new xf(function(e,r){var i=vf(yf(t.next,t.iterator));Sf(i,e,r,t.iterator,!0)})},return:function(){var t=Rf(this).iterator;return new xf(function(e,r){var i=Bf(t,"return");if(void 0===i)return e(Af(void 0,!0));var n=vf(yf(i,t));Sf(n,e,r,t)})}});var Lf,Df,Mf,kf,Tf,Vf=Nf,Hf=Rt,$f=Vf,_f=xt,zf=hd,Yf=ru,Gf=Ot,Xf=lt("asyncIterator"),Wf=r,Jf=Rt,Of=Lt,Kf=Ot,Pf=Rt,Zf=Xt,jf=xt,qf=mt,tm=Ua,em=Lt,rm=ru,im=function(t,e,r,i){try{var n=Kf(t,"return");if(n)return Of("Promise").resolve(Jf(n,t)).then(function(){e(r)},function(t){i(t)})}catch(t){return i(t)}e(r)},nm={toArray:(Lf=0,Df=0===Lf,Mf=1===Lf,kf=2===Lf,Tf=3===Lf,function(t,e,r){jf(t);var i=void 0!==e;!i&&Df||Zf(e);var n=rm(t),s=em("Promise"),a=n.iterator,o=n.next,c=0;return new s(function(t,n){var l=function(t){im(a,n,t,n)},u=function(){try{if(i)try{tm(c)}catch(t){l(t)}s.resolve(jf(Pf(o,a))).then(function(o){try{if(jf(o).done)Df?(r.length=c,t(r)):t(!Tf&&(kf||void 0));else{var d=o.value;try{if(i){var h=e(d,c),g=function(e){if(Mf)u();else if(kf)e?u():im(a,t,!1,n);else if(Df)try{r[c++]=e,u()}catch(t){l(t)}else e?im(a,t,Tf||d,n):u()};qf(h)?s.resolve(h).then(g,l):g(h)}else r[c++]=d,u()}catch(t){l(t)}}}catch(t){n(t)}},n)}catch(t){n(t)}};u()})})},sm=Nc,am=u,om=b,cm=of,lm=function(t,e){var r=arguments.length<2?Gf(t,Xf):e;return r?_f(Hf(r,t)):new $f(Yf(zf(t)))},um=hd,dm=ru,hm=sd,gm=Ot,pm=Lt,fm=function(t,e){var r=Wf[t],i=r&&r.prototype;return i&&i[e]},mm=Vf,bm=nm.toArray,ym=lt("asyncIterator"),vm=am(fm("Array","values")),Qm=am(vm([]).next),Bm=function(){return new Um(this)},Um=function(t){this.iterator=vm(t)};Um.prototype.next=function(){return Qm(this.iterator)};var Im=vn,Fm=function(t){var e=this,r=arguments.length,i=r>1?arguments[1]:void 0,n=r>2?arguments[2]:void 0;return new(pm("Promise"))(function(r){var s=om(t);void 0!==i&&(i=sm(i,n));var a=gm(s,ym),o=a?void 0:hm(s)||Bm,c=cm(e)?new e:[],l=a?lm(s,a):new mm(dm(um(s,o)));r(bm(l,i,c))})},Cm=n,Am=Array.fromAsync,xm=!Am||Cm(function(){var t=0;return Am.call(function(){return t++,[]},{length:0}),1!==t});Im({target:"Array",stat:!0,forced:xm},{fromAsync:Fm});var Em=vn,wm=ht,Rm=Lt,Sm=Xt,Nm=Ic,Lm=mi,Dm=Cc,Mm=co,km=lt,Tm=Wr,Vm=Wc,Hm=K,$m=Rm("Promise"),_m=Rm("SuppressedError"),zm=ReferenceError,Ym=km("asyncDispose"),Gm=km("toStringTag"),Xm="AsyncDisposableStack",Wm=Tm.set,Jm=Tm.getterFor(Xm),Om="async-dispose",Km="disposed",Pm=function(t){var e=Jm(t);if(e.state===Km)throw new zm(Xm+" already disposed");return e},Zm=function(){Wm(Nm(this,jm),{type:Xm,state:"pending",stack:[]}),wm||(this.disposed=!1)},jm=Zm.prototype;Dm(jm,{disposeAsync:function(){var t=this;return new $m(function(e,r){var i=Jm(t);if(i.state===Km)return e(void 0);i.state=Km,wm||(t.disposed=!0);var n,s=i.stack,a=s.length,o=!1,c=function(t){o?n=new _m(t,n):(o=!0,n=t),l()},l=function(){if(a){var t=s[--a];s[a]=null;try{$m.resolve(t()).then(l,c)}catch(t){c(t)}}else i.stack=null,o?r(n):e(void 0)};l()})},use:function(t){return Vm(Pm(this),t,Om),t},adopt:function(t,e){var r=Pm(this);return Sm(e),Vm(r,void 0,Om,function(){return e(t)}),t},defer:function(t){var e=Pm(this);Sm(t),Vm(e,void 0,Om,t)},move:function(){var t=Pm(this),e=new Zm;return Jm(e).stack=t.stack,t.stack=[],t.state=Km,wm||(this.disposed=!0),e}}),wm&&Mm(jm,"disposed",{configurable:!0,get:function(){return Jm(this).state===Km}}),Lm(jm,Ym,jm.disposeAsync,{name:"disposeAsync"}),Lm(jm,Gm,Xm,{nonWritable:!0}),Em({global:!0,constructor:!0,forced:Hm&&Hm<136},{AsyncDisposableStack:Zm});var qm=Rt,tb=mi,eb=Lt,rb=Ot,ib=Q,nb=bf,sb=lt("asyncDispose"),ab=eb("Promise");ib(nb,sb)||tb(nb,sb,function(){var t=this;return new ab(function(e,r){var i=rb(t,"return");i?ab.resolve(qm(i,t)).then(function(){e(void 0)},r):e(void 0)})});var ob,cb=TypeError,lb=function(t){if("string"==typeof t)return t;throw new cb("Argument is not a string")},ub=Ui,db=Ws,hb=p,gb=RangeError,pb=u,fb=Ei,mb=Ws,bb=function(t){var e=db(hb(this)),r="",i=ub(t);if(i<0||i===1/0)throw new gb("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r},yb=p,vb=pb(bb),Qb=pb("".slice),Bb=Math.ceil,Ub={start:(ob=!1,function(t,e,r){var i,n,s=mb(yb(t)),a=fb(e),o=s.length,c=void 0===r?" ":mb(r);return a<=o||""===c?s:((n=vb(c,Bb((i=a-o)/c.length))).length>i&&(n=Qb(n,0,i)),ob?s+n:n+s)})},Ib=vn,Fb=u,Cb=lb,Ab=Q,xb=Ub.start,Eb=Array,wb=RegExp.escape,Rb=Fb("".charAt),Sb=Fb("".charCodeAt),Nb=Fb(1.1.toString),Lb=Fb([].join),Db=/^[0-9a-z]/i,Mb=/^[$()*+./?[\\\]^{|}]/,kb=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),Tb=Fb(Db.exec),Vb={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},Hb=function(t){var e=Nb(Sb(t,0),16);return e.length<3?"\\x"+xb(e,2,"0"):"\\u"+xb(e,4,"0")};Ib({target:"RegExp",stat:!0,forced:!wb||"\\x61b"!==wb("ab")},{escape:function(t){Cb(t);for(var e=t.length,r=Eb(e),i=0;i<e;i++){var n=Rb(t,i);if(0===i&&Tb(Db,n))r[i]=Hb(n);else if(Ab(Vb,n))r[i]="\\"+Vb[n];else if(Tb(Mb,n))r[i]="\\"+n;else if(Tb(kb,n))r[i]=Hb(n);else{var s=Sb(n,0);55296!=(63488&s)?r[i]=n:s>=56320||i+1>=e||56320!=(64512&Sb(t,i+1))?r[i]=Hb(n):(r[i]=n,r[++i]=Rb(t,i))}}return Lb(r,"")}});var $b=u,_b=Set.prototype,zb={Set:Set,add:$b(_b.add),has:$b(_b.has),remove:$b(_b.delete),proto:_b},Yb=zb.has,Gb=function(t){return Yb(t),t},Xb=Rt,Wb=function(t,e,r){for(var i,n,s=r?t:t.iterator,a=t.next;!(i=Xb(a,s)).done;)if(void 0!==(n=e(i.value)))return n},Jb=u,Ob=Wb,Kb=zb.Set,Pb=zb.proto,Zb=Jb(Pb.forEach),jb=Jb(Pb.keys),qb=jb(new Kb).next,ty=function(t,e,r){return r?Ob({iterator:jb(t),next:qb},e):Zb(t,e)},ey=ty,ry=zb.Set,iy=zb.add,ny=function(t){var e=new ry;return ey(t,function(t){iy(e,t)}),e},sy=Pn(zb.proto,"size","get")||function(t){return t.size},ay=Xt,oy=xt,cy=Rt,ly=Ui,uy=ru,dy="Invalid size",hy=RangeError,gy=TypeError,py=Math.max,fy=function(t,e){this.set=t,this.size=py(e,0),this.has=ay(t.has),this.keys=ay(t.keys)};fy.prototype={getIterator:function(){return uy(oy(cy(this.keys,this.set)))},includes:function(t){return cy(this.has,this.set,t)}};var my=function(t){oy(t);var e=+t.size;if(e!=e)throw new gy(dy);var r=ly(e);if(r<0)throw new hy(dy);return new fy(t,r)},by=Gb,yy=ny,vy=sy,Qy=my,By=ty,Uy=Wb,Iy=zb.has,Fy=zb.remove,Cy=Lt,Ay=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},xy=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},Ey=function(t,e){var r=Cy("Set");try{(new r)[t](Ay(0));try{return(new r)[t](Ay(-1)),!1}catch(i){if(!e)return!0;try{return(new r)[t](xy(-1/0)),!1}catch(i){return e(new r([1,2])[t](xy(1/0)))}}}catch(t){return!1}},wy=function(t){var e=by(this),r=Qy(t),i=yy(e);return vy(e)<=r.size?By(e,function(t){r.includes(t)&&Fy(i,t)}):Uy(r.getIterator(),function(t){Iy(i,t)&&Fy(i,t)}),i},Ry=n;vn({target:"Set",proto:!0,real:!0,forced:!Ey("difference",function(t){return 0===t.size})||Ry(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size})},{difference:wy});var Sy=Gb,Ny=sy,Ly=my,Dy=ty,My=Wb,ky=zb.Set,Ty=zb.add,Vy=zb.has,Hy=n,$y=function(t){var e=Sy(this),r=Ly(t),i=new ky;return Ny(e)>r.size?My(r.getIterator(),function(t){Vy(e,t)&&Ty(i,t)}):Dy(e,function(t){r.includes(t)&&Ty(i,t)}),i};vn({target:"Set",proto:!0,real:!0,forced:!Ey("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||Hy(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:$y});var _y=Gb,zy=zb.has,Yy=sy,Gy=my,Xy=ty,Wy=Wb,Jy=du,Oy=function(t){var e=_y(this),r=Gy(t);if(Yy(e)<=r.size)return!1!==Xy(e,function(t){if(r.includes(t))return!1},!0);var i=r.getIterator();return!1!==Wy(i,function(t){if(zy(e,t))return Jy(i,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!Ey("isDisjointFrom",function(t){return!t})},{isDisjointFrom:Oy});var Ky=Gb,Py=sy,Zy=ty,jy=my,qy=function(t){var e=Ky(this),r=jy(t);return!(Py(e)>r.size)&&!1!==Zy(e,function(t){if(!r.includes(t))return!1},!0)};vn({target:"Set",proto:!0,real:!0,forced:!Ey("isSubsetOf",function(t){return t})},{isSubsetOf:qy});var tv=Gb,ev=zb.has,rv=sy,iv=my,nv=Wb,sv=du,av=function(t){var e=tv(this),r=iv(t);if(rv(e)<r.size)return!1;var i=r.getIterator();return!1!==nv(i,function(t){if(!ev(e,t))return sv(i,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!Ey("isSupersetOf",function(t){return!t})},{isSupersetOf:av});var ov=Gb,cv=ny,lv=my,uv=Wb,dv=zb.add,hv=zb.has,gv=zb.remove,pv=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},i=e[t](r);return 1===i.size&&4===i.values().next().value}catch(t){return!1}},fv=function(t){var e=ov(this),r=lv(t).getIterator(),i=cv(e);return uv(r,function(t){hv(e,t)?gv(i,t):dv(i,t)}),i},mv=pv;vn({target:"Set",proto:!0,real:!0,forced:!Ey("symmetricDifference")||!mv("symmetricDifference")},{symmetricDifference:fv});var bv=Gb,yv=zb.add,vv=ny,Qv=my,Bv=Wb,Uv=function(t){var e=bv(this),r=Qv(t).getIterator(),i=vv(e);return Bv(r,function(t){yv(i,t)}),i},Iv=pv;vn({target:"Set",proto:!0,real:!0,forced:!Ey("union")||!Iv("union")},{union:Uv});var Fv=vn,Cv=p,Av=Ws,xv=u("".charCodeAt);Fv({target:"String",proto:!0},{isWellFormed:function(){for(var t=Av(Cv(this)),e=t.length,r=0;r<e;r++){var i=xv(t,r);if(55296==(63488&i)&&(i>=56320||++r>=e||56320!=(64512&xv(t,r))))return!1}return!0}});var Ev=vn,wv=Rt,Rv=u,Sv=p,Nv=Ws,Lv=n,Dv=Array,Mv=Rv("".charAt),kv=Rv("".charCodeAt),Tv=Rv([].join),Vv="".toWellFormed,Hv=Vv&&Lv(function(){return"1"!==wv(Vv,1)});Ev({target:"String",proto:!0,forced:Hv},{toWellFormed:function(){var t=Nv(Sv(this));if(Hv)return wv(Vv,t);for(var e=t.length,r=Dv(e),i=0;i<e;i++){var n=kv(t,i);55296!=(63488&n)?r[i]=Mv(t,i):n>=56320||i+1>=e||56320!=(64512&kv(t,i+1))?r[i]="�":(r[i]=Mv(t,i),r[++i]=Mv(t,i))}return Tv(r,"")}});var $v,_v,zv,Yv=lo,Gv=ht,Xv=r,Wv=pt,Jv=mt,Ov=Q,Kv=xn,Pv=hr,Zv=mi,jv=co,qv=Jn,tQ=ss,eQ=lt,rQ=H,iQ=Wr.enforce,nQ=Wr.get,sQ=Xv.Int8Array,aQ=sQ&&sQ.prototype,oQ=Xv.Uint8ClampedArray,cQ=oQ&&oQ.prototype,lQ=sQ&&qv(sQ),uQ=aQ&&qv(aQ),dQ=Object.prototype,hQ=Xv.TypeError,gQ=eQ("toStringTag"),pQ=rQ("TYPED_ARRAY_TAG"),fQ="TypedArrayConstructor",mQ=Yv&&!!tQ&&"Opera"!==Kv(Xv.opera),bQ={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},yQ={BigInt64Array:8,BigUint64Array:8},vQ=function(t){var e=qv(t);if(Jv(e)){var r=nQ(e);return r&&Ov(r,fQ)?r[fQ]:vQ(e)}};for($v in bQ)(zv=(_v=Xv[$v])&&_v.prototype)?iQ(zv)[fQ]=_v:mQ=!1;for($v in yQ)(zv=(_v=Xv[$v])&&_v.prototype)&&(iQ(zv)[fQ]=_v);if((!mQ||!Wv(lQ)||lQ===Function.prototype)&&(lQ=function(){throw new hQ("Incorrect invocation")},mQ))for($v in bQ)Xv[$v]&&tQ(Xv[$v],lQ);if((!mQ||!uQ||uQ===dQ)&&(uQ=lQ.prototype,mQ))for($v in bQ)Xv[$v]&&tQ(Xv[$v].prototype,uQ);if(mQ&&qv(cQ)!==uQ&&tQ(cQ,uQ),Gv&&!Ov(uQ,gQ))for($v in jv(uQ,gQ,{configurable:!0,get:function(){return Jv(this)?this[pQ]:void 0}}),bQ)Xv[$v]&&Pv(Xv[$v],pQ,$v);var QQ={aTypedArray:function(t){if(function(t){if(!Jv(t))return!1;var e=Kv(t);return Ov(bQ,e)||Ov(yQ,e)}(t))return t;throw new hQ("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,i){if(Gv){if(r)for(var n in bQ){var s=Xv[n];if(s&&Ov(s.prototype,t))try{delete s.prototype[t]}catch(r){try{s.prototype[t]=e}catch(t){}}}uQ[t]&&!r||Zv(uQ,t,r?e:mQ&&aQ[t]||e,i)}},getTypedArrayConstructor:vQ},BQ=xn,UQ=ae,IQ=TypeError,FQ=Ra,CQ=function(t){var e=BQ(t);return"BigInt64Array"===e||"BigUint64Array"===e},AQ=Ui,xQ=function(t){var e=UQ(t,"number");if("number"==typeof e)throw new IQ("Can't convert number to bigint");return BigInt(e)},EQ=QQ.aTypedArray,wQ=QQ.getTypedArrayConstructor,RQ=QQ.exportTypedArrayMethod,SQ=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),NQ=SQ&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();RQ("with",{with:function(t,e){var r=EQ(this),i=AQ(t),n=CQ(r)?xQ(e):+e;return FQ(r,wQ(r),i,n)}}.with,!SQ||NQ);var LQ=Ri,DQ=mt,MQ=String,kQ=TypeError,TQ=function(t){if(void 0===t||DQ(t))return t;throw new kQ(MQ(t)+" is not an object or undefined")},VQ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",HQ=VQ+"+/",$Q=VQ+"-_",_Q=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},zQ={i2c:HQ,c2i:_Q(HQ),i2cUrl:$Q,c2iUrl:_Q($Q)},YQ=TypeError,GQ=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new YQ("Incorrect `alphabet` option")},XQ=r,WQ=u,JQ=TQ,OQ=lb,KQ=Q,PQ=GQ,ZQ=So,jQ=zQ.c2i,qQ=zQ.c2iUrl,tB=XQ.SyntaxError,eB=XQ.TypeError,rB=WQ("".charAt),iB=function(t,e){for(var r=t.length;e<r;e++){var i=rB(t,e);if(" "!==i&&"\t"!==i&&"\n"!==i&&"\f"!==i&&"\r"!==i)break}return e},nB=function(t,e,r){var i=t.length;i<4&&(t+=2===i?"AA":"A");var n=(e[rB(t,0)]<<18)+(e[rB(t,1)]<<12)+(e[rB(t,2)]<<6)+e[rB(t,3)],s=[n>>16&255,n>>8&255,255&n];if(2===i){if(r&&0!==s[1])throw new tB("Extra bits");return[s[0]]}if(3===i){if(r&&0!==s[2])throw new tB("Extra bits");return[s[0],s[1]]}return s},sB=function(t,e,r){for(var i=e.length,n=0;n<i;n++)t[r+n]=e[n];return r+i},aB=function(t,e,r,i){OQ(t),JQ(e);var n="base64"===PQ(e)?jQ:qQ,s=e?e.lastChunkHandling:void 0;if(void 0===s&&(s="loose"),"loose"!==s&&"strict"!==s&&"stop-before-partial"!==s)throw new eB("Incorrect `lastChunkHandling` option");r&&ZQ(r.buffer);var a=t.length,o=r||[],c=0,l=0,u="",d=0;if(i)for(;;){if((d=iB(t,d))===a){if(u.length>0){if("stop-before-partial"===s)break;if("loose"!==s)throw new tB("Missing padding");if(1===u.length)throw new tB("Malformed padding: exactly one additional character");c=sB(o,nB(u,n,!1),c)}l=a;break}var h=rB(t,d);if(++d,"="===h){if(u.length<2)throw new tB("Padding is too early");if(d=iB(t,d),2===u.length){if(d===a){if("stop-before-partial"===s)break;throw new tB("Malformed padding: only one =")}"="===rB(t,d)&&(++d,d=iB(t,d))}if(d<a)throw new tB("Unexpected character after padding");c=sB(o,nB(u,n,"strict"===s),c),l=a;break}if(!KQ(n,h))throw new tB("Unexpected character");var g=i-c;if(1===g&&2===u.length||2===g&&3===u.length)break;if(4===(u+=h).length&&(c=sB(o,nB(u,n,!1),c),u="",l=d,c===i))break}return{bytes:o,read:l,written:c}},oB=vn,cB=function(t,e,r){for(var i=0,n=arguments.length>2?r:LQ(e),s=new t(n);n>i;)s[i]=e[i++];return s},lB=aB,uB=r.Uint8Array,dB=!uB||!uB.fromBase64||!function(){try{return void uB.fromBase64("a")}catch(t){}try{uB.fromBase64("",null)}catch(t){return!0}}();uB&&oB({target:"Uint8Array",stat:!0,forced:dB},{fromBase64:function(t){var e=lB(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return cB(uB,e.bytes)}});var hB=r,gB=u,pB=hB.Uint8Array,fB=hB.SyntaxError,mB=hB.parseInt,bB=Math.min,yB=/[^\da-f]/i,vB=gB(yB.exec),QB=gB("".slice),BB=function(t,e){var r=t.length;if(r%2!=0)throw new fB("String should be an even number of characters");for(var i=e?bB(e.length,r/2):r/2,n=e||new pB(i),s=0,a=0;a<i;){var o=QB(t,s,s+=2);if(vB(yB,o))throw new fB("String should only contain hex characters");n[a++]=mB(o,16)}return{bytes:n,read:s}},UB=vn,IB=lb,FB=BB;r.Uint8Array&&UB({target:"Uint8Array",stat:!0},{fromHex:function(t){return FB(IB(t)).bytes}});var CB=xn,AB=TypeError,xB=function(t){if("Uint8Array"===CB(t))return t;throw new AB("Argument is not an Uint8Array")},EB=vn,wB=aB,RB=xB,SB=r.Uint8Array,NB=!SB||!SB.prototype.setFromBase64||!function(){var t=new SB([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();SB&&EB({target:"Uint8Array",proto:!0,forced:NB},{setFromBase64:function(t){RB(this);var e=wB(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var LB=vn,DB=lb,MB=xB,kB=So,TB=BB;r.Uint8Array&&LB({target:"Uint8Array",proto:!0},{setFromHex:function(t){MB(this),DB(t),kB(this.buffer);var e=TB(t,this).read;return{read:e,written:e/2}}});var VB=vn,HB=r,$B=TQ,_B=xB,zB=So,YB=GQ,GB=zQ.i2c,XB=zQ.i2cUrl,WB=u("".charAt),JB=HB.Uint8Array,OB=!JB||!JB.prototype.toBase64||!function(){try{(new JB).toBase64(null)}catch(t){return!0}}();JB&&VB({target:"Uint8Array",proto:!0,forced:OB},{toBase64:function(){var t=_B(this),e=arguments.length?$B(arguments[0]):void 0,r="base64"===YB(e)?GB:XB,i=!!e&&!!e.omitPadding;zB(this.buffer);for(var n,s="",a=0,o=t.length,c=function(t){return WB(r,n>>6*t&63)};a+2<o;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],s+=c(3)+c(2)+c(1)+c(0);return a+2===o?(n=(t[a]<<16)+(t[a+1]<<8),s+=c(3)+c(2)+c(1)+(i?"":"=")):a+1===o&&(n=t[a]<<16,s+=c(3)+c(2)+(i?"":"==")),s}});var KB=vn,PB=r,ZB=xB,jB=So,qB=u(1.1.toString),tU=PB.Uint8Array,eU=!tU||!tU.prototype.toHex||!function(){try{return"ffffffffffffffff"===new tU([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();tU&&KB({target:"Uint8Array",proto:!0,forced:eU},{toHex:function(){ZB(this),jB(this.buffer);for(var t="",e=0,r=this.length;e<r;e++){var i=qB(this[e],16);t+=1===i.length?"0"+i:i}return t}});var rU=pt,iU=mt,nU=ss,sU=vn,aU=r,oU=Lt,cU=Se,lU=dt.f,uU=Q,dU=Ic,hU=function(t,e,r){var i,n;return nU&&rU(i=e.constructor)&&i!==r&&iU(n=i.prototype)&&n!==r.prototype&&nU(t,n),t},gU=Os,pU={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},fU=Ts,mU=ht,bU="DOMException",yU=oU("Error"),vU=oU(bU),QU=function(){dU(this,BU);var t=arguments.length,e=gU(t<1?void 0:arguments[0]),r=gU(t<2?void 0:arguments[1],"Error"),i=new vU(e,r),n=new yU(e);return n.name=bU,lU(i,"stack",cU(1,fU(n.stack,1))),hU(i,this,QU),i},BU=QU.prototype=vU.prototype,UU="stack"in new yU(bU),IU="stack"in new vU(1,2),FU=vU&&mU&&Object.getOwnPropertyDescriptor(aU,bU),CU=!(!FU||FU.writable&&FU.configurable),AU=UU&&!CU&&!IU;sU({global:!0,constructor:!0,forced:AU},{DOMException:AU?QU:vU});var xU=oU(bU),EU=xU.prototype;if(EU.constructor!==xU)for(var wU in lU(EU,"constructor",cU(1,xU)),pU)if(uU(pU,wU)){var RU=pU[wU],SU=RU.s;uU(xU,SU)||lU(xU,SU,cU(6,RU.c))}var NU,LU,DU,MU,kU=TypeError,TU=function(t,e){if(t<e)throw new kU("Not enough arguments");return t},VU=/(?:ipad|iphone|ipod).*applewebkit/i.test(z),HU=r,$U=ig,_U=Nc,zU=pt,YU=Q,GU=n,XU=bs,WU=Np,JU=Qt,OU=TU,KU=VU,PU=To,ZU=HU.setImmediate,jU=HU.clearImmediate,qU=HU.process,tI=HU.Dispatch,eI=HU.Function,rI=HU.MessageChannel,iI=HU.String,nI=0,sI={},aI="onreadystatechange";GU(function(){NU=HU.location});var oI=function(t){if(YU(sI,t)){var e=sI[t];delete sI[t],e()}},cI=function(t){return function(){oI(t)}},lI=function(t){oI(t.data)},uI=function(t){HU.postMessage(iI(t),NU.protocol+"//"+NU.host)};ZU&&jU||(ZU=function(t){OU(arguments.length,1);var e=zU(t)?t:eI(t),r=WU(arguments,1);return sI[++nI]=function(){$U(e,void 0,r)},LU(nI),nI},jU=function(t){delete sI[t]},PU?LU=function(t){qU.nextTick(cI(t))}:tI&&tI.now?LU=function(t){tI.now(cI(t))}:rI&&!KU?(MU=(DU=new rI).port2,DU.port1.onmessage=lI,LU=_U(MU.postMessage,MU)):HU.addEventListener&&zU(HU.postMessage)&&!HU.importScripts&&NU&&"file:"!==NU.protocol&&!GU(uI)?(LU=uI,HU.addEventListener("message",lI,!1)):LU=aI in JU("script")?function(t){XU.appendChild(JU("script"))[aI]=function(){XU.removeChild(this),oI(t)}}:function(t){setTimeout(cI(t),0)});var dI={set:ZU,clear:jU},hI=dI.clear;vn({global:!0,bind:!0,enumerable:!0,forced:r.clearImmediate!==hI},{clearImmediate:hI});var gI=r,pI=ig,fI=pt,mI=ko,bI=z,yI=Np,vI=TU,QI=gI.Function,BI=/MSIE .\./.test(bI)||"BUN"===mI&&function(){var t=gI.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),UI=vn,II=r,FI=dI.set,CI=function(t,e){var r=e?2:1;return BI?function(i,n){var s=vI(arguments.length,1)>r,a=fI(i)?i:QI(i),o=s?yI(arguments,r):[],c=s?function(){pI(a,this,o)}:a;return e?t(c,n):t(c)}:t},AI=II.setImmediate?CI(FI,!1):FI;UI({global:!0,bind:!0,enumerable:!0,forced:II.setImmediate!==AI},{setImmediate:AI});var xI,EI=n,wI=r.RegExp,RI=!EI(function(){var t=!0;try{wI(".","d")}catch(e){t=!1}var e={},r="",i=t?"dgimsy":"gimsy",n=function(t,i){Object.defineProperty(e,t,{get:function(){return r+=i,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(s.hasIndices="d"),s)n(a,s[a]);return Object.getOwnPropertyDescriptor(wI.prototype,"flags").get.call(e)!==i||r!==i}),SI=xt,NI=Rt,LI=Q,DI=Dt,MI={correct:RI},kI=function(){var t=SI(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},TI=RegExp.prototype,VI=vn,HI=r,$I=Lt,_I=u,zI=n,YI=H,GI=pt,XI=of,WI=d,JI=mt,OI=Ht,KI=Ad,PI=xt,ZI=xn,jI=Q,qI=Bl,tF=hr,eF=Ri,rF=TU,iF=MI.correct?function(t){return t.flags}:function(t){return MI.correct||!DI(TI,t)||LI(t,"flags")?t.flags:NI(kI,t)},nF=Hg,sF=zb,aF=ty,oF=jo,cF=Hs,lF=Go,uF=HI.Object,dF=HI.Array,hF=HI.Date,gF=HI.Error,pF=HI.TypeError,fF=HI.PerformanceMark,mF=$I("DOMException"),bF=nF.Map,yF=nF.has,vF=nF.get,QF=nF.set,BF=sF.Set,UF=sF.add,IF=sF.has,FF=$I("Object","keys"),CF=_I([].push),AF=_I((!0).valueOf),xF=_I(1.1.valueOf),EF=_I("".valueOf),wF=_I(hF.prototype.getTime),RF=YI("structuredClone"),SF="DataCloneError",NF="Transferring",LF=function(t){return!zI(function(){var e=new HI.Set([7]),r=t(e),i=t(uF(7));return r===e||!r.has(7)||!JI(i)||7!==+i})&&t},DF=function(t,e){return!zI(function(){var r=new e,i=t({a:r,b:r});return!(i&&i.a===i.b&&i.a instanceof e&&i.a.stack===r.stack)})},MF=HI.structuredClone,kF=!DF(MF,gF)||!DF(MF,mF)||(xI=MF,!!zI(function(){var t=xI(new HI.AggregateError([1],RF,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==RF||3!==t.cause})),TF=!MF&&LF(function(t){return new fF(RF,{detail:t}).detail}),VF=LF(MF)||TF,HF=function(t){throw new mF("Uncloneable type: "+t,SF)},$F=function(t,e){throw new mF((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",SF)},_F=function(t,e){return VF||$F(e),VF(t)},zF=function(t,e,r){if(yF(e,t))return vF(e,t);var i,n,s,a,o,c;if("SharedArrayBuffer"===(r||ZI(t)))i=VF?VF(t):t;else{var l=HI.DataView;l||GI(t.slice)||$F("ArrayBuffer");try{if(GI(t.slice)&&!t.resizable)i=t.slice(0);else{n=t.byteLength,s="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,i=new ArrayBuffer(n,s),a=new l(t),o=new l(i);for(c=0;c<n;c++)o.setUint8(c,a.getUint8(c))}}catch(t){throw new mF("ArrayBuffer is detached",SF)}}return QF(e,t,i),i},YF=function(t,e){if(OI(t)&&HF("Symbol"),!JI(t))return t;if(e){if(yF(e,t))return vF(e,t)}else e=new bF;var r,i,n,s,a,o,c,l,u=ZI(t);switch(u){case"Array":n=dF(eF(t));break;case"Object":n={};break;case"Map":n=new bF;break;case"Set":n=new BF;break;case"RegExp":n=new RegExp(t.source,iF(t));break;case"Error":switch(i=t.name){case"AggregateError":n=new($I(i))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":n=new($I(i));break;case"CompileError":case"LinkError":case"RuntimeError":n=new($I("WebAssembly",i));break;default:n=new gF}break;case"DOMException":n=new mF(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":n=zF(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,n=function(t,e,r,i,n){var s=HI[e];return JI(s)||$F(e),new s(zF(t.buffer,n),r,i)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{n=new DOMQuad(YF(t.p1,e),YF(t.p2,e),YF(t.p3,e),YF(t.p4,e))}catch(e){n=_F(t,u)}break;case"File":if(VF)try{n=VF(t),ZI(n)!==u&&(n=void 0)}catch(t){}if(!n)try{n=new File([t],t.name,t)}catch(t){}n||$F(u);break;case"FileList":if(s=function(){var t;try{t=new HI.DataTransfer}catch(e){try{t=new HI.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(a=0,o=eF(t);a<o;a++)s.items.add(YF(t[a],e));n=s.files}else n=_F(t,u);break;case"ImageData":try{n=new ImageData(YF(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){n=_F(t,u)}break;default:if(VF)n=VF(t);else switch(u){case"BigInt":n=uF(t.valueOf());break;case"Boolean":n=uF(AF(t));break;case"Number":n=uF(xF(t));break;case"String":n=uF(EF(t));break;case"Date":n=new hF(wF(t));break;case"Blob":try{n=t.slice(0,t.size,t.type)}catch(t){$F(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=HI[u];try{n=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){$F(u)}break;case"DOMRect":case"DOMRectReadOnly":r=HI[u];try{n=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){$F(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=HI[u];try{n=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){$F(u)}break;case"AudioData":case"VideoFrame":GI(t.clone)||$F(u);try{n=t.clone()}catch(t){HF(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":$F(u);default:HF(u)}}switch(QF(e,t,n),u){case"Array":case"Object":for(c=FF(t),a=0,o=eF(c);a<o;a++)l=c[a],qI(n,l,YF(t[l],e));break;case"Map":t.forEach(function(t,r){QF(n,YF(r,e),YF(t,e))});break;case"Set":t.forEach(function(t){UF(n,YF(t,e))});break;case"Error":tF(n,"message",YF(t.message,e)),jI(t,"cause")&&tF(n,"cause",YF(t.cause,e)),"AggregateError"===i?n.errors=YF(t.errors,e):"SuppressedError"===i&&(n.error=YF(t.error,e),n.suppressed=YF(t.suppressed,e));case"DOMException":cF&&tF(n,"stack",YF(t.stack,e))}return n};VI({global:!0,enumerable:!0,sham:!lF,forced:kF},{structuredClone:function(t){var e,r,i=rF(arguments.length,1)>1&&!WI(arguments[1])?PI(arguments[1]):void 0,n=i?i.transfer:void 0;void 0!==n&&(r=function(t,e){if(!JI(t))throw new pF("Transfer option cannot be converted to a sequence");var r=[];KI(t,function(t){CF(r,PI(t))});for(var i,n,s,a,o,c=0,l=eF(r),u=new BF;c<l;){if(i=r[c++],"ArrayBuffer"===(n=ZI(i))?IF(u,i):yF(e,i))throw new mF("Duplicate transferable",SF);if("ArrayBuffer"!==n){if(lF)a=MF(i,{transfer:[i]});else switch(n){case"ImageBitmap":s=HI.OffscreenCanvas,XI(s)||$F(n,NF);try{(o=new s(i.width,i.height)).getContext("bitmaprenderer").transferFromImageBitmap(i),a=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":GI(i.clone)&&GI(i.close)||$F(n,NF);try{a=i.clone(),i.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":$F(n,NF)}if(void 0===a)throw new mF("This object cannot be transferred: "+n,SF);QF(e,i,a)}else UF(u,i)}return u}(n,e=new bF));var s=YF(t,e);return r&&function(t){aF(t,function(t){lF?VF(t,{transfer:[t]}):GI(t.transfer)?t.transfer():oF?oF(t):$F("ArrayBuffer",NF)})}(r),s}});var GF=n,XF=ht,WF=lt("iterator"),JF=!GF(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),i="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),i+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!XF||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[WF]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==i||"x"!==new URL("https://x",void 0).host}),OF=vn,KF=n,PF=TU,ZF=Ws,jF=JF,qF=Lt("URL"),tC=jF&&KF(function(){qF.canParse()}),eC=KF(function(){return 1!==qF.canParse.length});OF({target:"URL",stat:!0,forced:!tC||eC},{canParse:function(t){var e=PF(arguments.length,1),r=ZF(t),i=e<2||void 0===arguments[1]?void 0:ZF(arguments[1]);try{return!!new qF(r,i)}catch(t){return!1}}});var rC=vn,iC=TU,nC=Ws,sC=JF,aC=Lt("URL");rC({target:"URL",stat:!0,forced:!sC},{parse:function(t){var e=iC(arguments.length,1),r=nC(t),i=e<2||void 0===arguments[1]?void 0:nC(arguments[1]);try{return new aC(r,i)}catch(t){return null}}});var oC=mi,cC=u,lC=Ws,uC=TU,dC=URLSearchParams,hC=dC.prototype,gC=cC(hC.append),pC=cC(hC.delete),fC=cC(hC.forEach),mC=cC([].push),bC=new dC("a=1&a=2&b=3");bC.delete("a",1),bC.delete("b",void 0),bC+""!="a=2"&&oC(hC,"delete",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return pC(this,t);var i=[];fC(this,function(t,e){mC(i,{key:e,value:t})}),uC(e,1);for(var n,s=lC(t),a=lC(r),o=0,c=0,l=!1,u=i.length;o<u;)n=i[o++],l||n.key===s?(l=!0,pC(this,n.key)):c++;for(;c<u;)(n=i[c++]).key===s&&n.value===a||gC(this,n.key,n.value)},{enumerable:!0,unsafe:!0});var yC=mi,vC=u,QC=Ws,BC=TU,UC=URLSearchParams,IC=UC.prototype,FC=vC(IC.getAll),CC=vC(IC.has),AC=new UC("a=1");!AC.has("a",2)&&AC.has("a",void 0)||yC(IC,"has",function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return CC(this,t);var i=FC(this,t);BC(e,1);for(var n=QC(r),s=0;s<i.length;)if(i[s++]===n)return!0;return!1},{enumerable:!0,unsafe:!0});var xC=ht,EC=u,wC=co,RC=URLSearchParams.prototype,SC=EC(RC.forEach);xC&&!("size"in RC)&&wC(RC,"size",{get:function(){var t=0;return SC(this,function(){t++}),t},configurable:!0,enumerable:!0});const NC=new Map;var LC={set(t,e,r){NC.has(t)||NC.set(t,new Map);const i=NC.get(t);i.has(e)||0===i.size?i.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>NC.has(t)&&NC.get(t).get(e)||null,remove(t,e){if(!NC.has(t))return;const r=NC.get(t);r.delete(e),0===r.size&&NC.delete(t)}};const DC="transitionend",MC=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),kC=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),TC=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),VC=t=>TC(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(MC(t)):null,HC=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$C=[],_C=t=>{var e;e=()=>{const e=HC();if(e){const r=t.NAME,i=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=i,t.jQueryInterface)}},"loading"===document.readyState?($C.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of $C)t()}),$C.push(e)):e()},zC=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,YC=(t,e,r=!0)=>{if(!r)return void zC(t);const i=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const i=Number.parseFloat(e),n=Number.parseFloat(r);return i||n?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let n=!1;const s=({target:r})=>{r===e&&(n=!0,e.removeEventListener(DC,s),zC(t))};e.addEventListener(DC,s),setTimeout(()=>{n||e.dispatchEvent(new Event(DC))},i)},GC=/[^.]*(?=\..*)\.|.*/,XC=/\..*/,WC=/::\d+$/,JC={};let OC=1;const KC={mouseenter:"mouseover",mouseleave:"mouseout"},PC=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ZC(t,e){return e&&`${e}::${OC++}`||t.uidEvent||OC++}function jC(t){const e=ZC(t);return t.uidEvent=e,JC[e]=JC[e]||{},JC[e]}function qC(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function tA(t,e,r){const i="string"==typeof e,n=i?r:e||r;let s=nA(t);return PC.has(s)||(s=t),[i,n,s]}function eA(t,e,r,i,n){if("string"!=typeof e||!t)return;let[s,a,o]=tA(e,r,i);if(e in KC){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};a=t(a)}const c=jC(t),l=c[o]||(c[o]={}),u=qC(l,a,s?r:null);if(u)return void(u.oneOff=u.oneOff&&n);const d=ZC(a,e.replace(GC,"")),h=s?function(t,e,r){return function i(n){const s=t.querySelectorAll(e);for(let{target:a}=n;a&&a!==this;a=a.parentNode)for(const o of s)if(o===a)return aA(n,{delegateTarget:a}),i.oneOff&&sA.off(t,n.type,e,r),r.apply(a,[n])}}(t,r,a):function(t,e){return function r(i){return aA(i,{delegateTarget:t}),r.oneOff&&sA.off(t,i.type,e),e.apply(t,[i])}}(t,a);h.delegationSelector=s?r:null,h.callable=a,h.oneOff=n,h.uidEvent=d,l[d]=h,t.addEventListener(o,h,s)}function rA(t,e,r,i,n){const s=qC(e[r],i,n);s&&(t.removeEventListener(r,s,Boolean(n)),delete e[r][s.uidEvent])}function iA(t,e,r,i){const n=e[r]||{};for(const[s,a]of Object.entries(n))s.includes(i)&&rA(t,e,r,a.callable,a.delegationSelector)}function nA(t){return t=t.replace(XC,""),KC[t]||t}const sA={on(t,e,r,i){eA(t,e,r,i,!1)},one(t,e,r,i){eA(t,e,r,i,!0)},off(t,e,r,i){if("string"!=typeof e||!t)return;const[n,s,a]=tA(e,r,i),o=a!==e,c=jC(t),l=c[a]||{},u=e.startsWith(".");if(void 0===s){if(u)for(const r of Object.keys(c))iA(t,c,r,e.slice(1));for(const[r,i]of Object.entries(l)){const n=r.replace(WC,"");o&&!e.includes(n)||rA(t,c,a,i.callable,i.delegationSelector)}}else{if(!Object.keys(l).length)return;rA(t,c,a,s,n?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const i=HC();let n=null,s=!0,a=!0,o=!1;e!==nA(e)&&i&&(n=i.Event(e,r),i(t).trigger(n),s=!n.isPropagationStopped(),a=!n.isImmediatePropagationStopped(),o=n.isDefaultPrevented());const c=aA(new Event(e,{bubbles:s,cancelable:!0}),r);return o&&c.preventDefault(),a&&t.dispatchEvent(c),c.defaultPrevented&&n&&n.preventDefault(),c}};function aA(t,e={}){for(const[r,i]of Object.entries(e))try{t[r]=i}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>i})}return t}function oA(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function cA(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const lA={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${cA(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${cA(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const i of r){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=oA(t.dataset[i])}return e},getDataAttribute:(t,e)=>oA(t.getAttribute(`data-bs-${cA(e)}`))};class uA{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=TC(e)?lA.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...TC(e)?lA.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,i]of Object.entries(e)){const e=t[r],n=TC(e)?"element":kC(e);if(!new RegExp(i).test(n))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${n}" but expected type "${i}".`)}}}class dA extends uA{constructor(t,e){super(),(t=VC(t))&&(this._element=t,this._config=this._getConfig(e),LC.set(this._element,this.constructor.DATA_KEY,this))}dispose(){LC.remove(this._element,this.constructor.DATA_KEY),sA.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){YC(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return LC.get(VC(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const hA='[data-bs-toggle="button"]';class gA extends dA{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=gA.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}sA.on(document,"click.bs.button.data-api",hA,t=>{t.preventDefault();const e=t.target.closest(hA);gA.getOrCreateInstance(e).toggle()}),_C(gA);const pA=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>MC(t)).join(","):null},fA={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let i=t.parentNode.closest(e);for(;i;)r.push(i),i=i.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>{if(!TC(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e})(t))},getSelectorFromElement(t){const e=pA(t);return e&&fA.findOne(e)?e:null},getElementFromSelector(t){const e=pA(t);return e?fA.findOne(e):null},getMultipleElementsFromSelector(t){const e=pA(t);return e?fA.find(e):[]}},mA=".bs.collapse",bA=`show${mA}`,yA=`shown${mA}`,vA=`hide${mA}`,QA=`hidden${mA}`,BA=`click${mA}.data-api`,UA="show",IA="collapse",FA="collapsing",CA=`:scope .${IA} .${IA}`,AA='[data-bs-toggle="collapse"]',xA={parent:null,toggle:!0},EA={parent:"(null|element)",toggle:"boolean"};class wA extends dA{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=fA.find(AA);for(const t of r){const e=fA.getSelectorFromElement(t),r=fA.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return xA}static get DefaultType(){return EA}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>wA.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(sA.trigger(this._element,bA).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(IA),this._element.classList.add(FA),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(FA),this._element.classList.add(IA,UA),this._element.style[e]="",sA.trigger(this._element,yA)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(sA.trigger(this._element,vA).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,this._element.offsetHeight,this._element.classList.add(FA),this._element.classList.remove(IA,UA);for(const t of this._triggerArray){const e=fA.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(FA),this._element.classList.add(IA),sA.trigger(this._element,QA)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(UA)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=VC(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(AA);for(const e of t){const t=fA.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=fA.find(CA,this._config.parent);return fA.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=wA.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}sA.on(document,BA,AA,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of fA.getMultipleElementsFromSelector(this))wA.getOrCreateInstance(t,{toggle:!1}).toggle()}),_C(wA);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const RA=globalThis,SA=RA.ShadowRoot&&(void 0===RA.ShadyCSS||RA.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,NA=Symbol(),LA=new WeakMap;let DA=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==NA)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(SA&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=LA.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&LA.set(e,t))}return t}toString(){return this.cssText}};const MA=t=>new DA("string"==typeof t?t:t+"",void 0,NA),kA=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new DA(r,t,NA)},TA=SA?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return MA(e)})(t):t,{is:VA,defineProperty:HA,getOwnPropertyDescriptor:$A,getOwnPropertyNames:_A,getOwnPropertySymbols:zA,getPrototypeOf:YA}=Object,GA=globalThis,XA=GA.trustedTypes,WA=XA?XA.emptyScript:"",JA=GA.reactiveElementPolyfillSupport,OA=(t,e)=>t,KA={toAttribute(t,e){switch(e){case Boolean:t=t?WA:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},PA=(t,e)=>!VA(t,e),ZA={attribute:!0,type:String,converter:KA,reflect:!1,useDefault:!1,hasChanged:PA};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),GA.litPropertyMetadata??=new WeakMap;let jA=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ZA){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&HA(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=$A(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);n?.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ZA}static _$Ei(){if(this.hasOwnProperty(OA("elementProperties")))return;const t=YA(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(OA("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(OA("properties"))){const t=this.properties,e=[..._A(t),...zA(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(TA(t))}else void 0!==t&&e.push(TA(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(SA)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),i=RA.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:KA).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:KA;this._$Em=i;const s=n.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const i=this.constructor,n=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??PA)(n,e)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};jA.elementStyles=[],jA.shadowRootOptions={mode:"open"},jA[OA("elementProperties")]=new Map,jA[OA("finalized")]=new Map,JA?.({ReactiveElement:jA}),(GA.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qA=globalThis,tx=qA.trustedTypes,ex=tx?tx.createPolicy("lit-html",{createHTML:t=>t}):void 0,rx="$lit$",ix=`lit$${Math.random().toFixed(9).slice(2)}$`,nx="?"+ix,sx=`<${nx}>`,ax=document,ox=()=>ax.createComment(""),cx=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lx=Array.isArray,ux="[ \t\n\f\r]",dx=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hx=/-->/g,gx=/>/g,px=RegExp(`>|${ux}(?:([^\\s"'>=/]+)(${ux}*=${ux}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),fx=/'/g,mx=/"/g,bx=/^(?:script|style|textarea|title)$/i,yx=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),vx=yx(1),Qx=yx(2),Bx=Symbol.for("lit-noChange"),Ux=Symbol.for("lit-nothing"),Ix=new WeakMap,Fx=ax.createTreeWalker(ax,129);function Cx(t,e){if(!lx(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ex?ex.createHTML(e):e}const Ax=(t,e)=>{const r=t.length-1,i=[];let n,s=2===e?"<svg>":3===e?"<math>":"",a=dx;for(let e=0;e<r;e++){const r=t[e];let o,c,l=-1,u=0;for(;u<r.length&&(a.lastIndex=u,c=a.exec(r),null!==c);)u=a.lastIndex,a===dx?"!--"===c[1]?a=hx:void 0!==c[1]?a=gx:void 0!==c[2]?(bx.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=px):void 0!==c[3]&&(a=px):a===px?">"===c[0]?(a=n??dx,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?px:'"'===c[3]?mx:fx):a===mx||a===fx?a=px:a===hx||a===gx?a=dx:(a=px,n=void 0);const d=a===px&&t[e+1].startsWith("/>")?" ":"";s+=a===dx?r+sx:l>=0?(i.push(o),r.slice(0,l)+rx+r.slice(l)+ix+d):r+ix+(-2===l?e:d)}return[Cx(t,s+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class xx{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const a=t.length-1,o=this.parts,[c,l]=Ax(t,e);if(this.el=xx.createElement(c,r),Fx.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Fx.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(rx)){const e=l[s++],r=i.getAttribute(t).split(ix),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?Nx:"?"===a[1]?Lx:"@"===a[1]?Dx:Sx}),i.removeAttribute(t)}else t.startsWith(ix)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(bx.test(i.tagName)){const t=i.textContent.split(ix),e=t.length-1;if(e>0){i.textContent=tx?tx.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],ox()),Fx.nextNode(),o.push({type:2,index:++n});i.append(t[e],ox())}}}else if(8===i.nodeType)if(i.data===nx)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(ix,t+1));)o.push({type:7,index:n}),t+=ix.length-1}n++}}static createElement(t,e){const r=ax.createElement("template");return r.innerHTML=t,r}}function Ex(t,e,r=t,i){if(e===Bx)return e;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const s=cx(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(e=Ex(t,n._$AS(t,e.values),n,i)),e}class wx{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??ax).importNode(e,!0);Fx.currentNode=i;let n=Fx.nextNode(),s=0,a=0,o=r[0];for(;void 0!==o;){if(s===o.index){let e;2===o.type?e=new Rx(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new Mx(n,this,t)),this._$AV.push(e),o=r[++a]}s!==o?.index&&(n=Fx.nextNode(),s++)}return Fx.currentNode=ax,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Rx{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=Ux,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ex(this,t,e),cx(t)?t===Ux||null==t||""===t?(this._$AH!==Ux&&this._$AR(),this._$AH=Ux):t!==this._$AH&&t!==Bx&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>lx(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ux&&cx(this._$AH)?this._$AA.nextSibling.data=t:this.T(ax.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=xx.createElement(Cx(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new wx(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Ix.get(t.strings);return void 0===e&&Ix.set(t.strings,e=new xx(t)),e}k(t){lx(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new Rx(this.O(ox()),this.O(ox()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Sx{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=Ux,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ux}_$AI(t,e=this,r,i){const n=this.strings;let s=!1;if(void 0===n)t=Ex(this,t,e,0),s=!cx(t)||t!==this._$AH&&t!==Bx,s&&(this._$AH=t);else{const i=t;let a,o;for(t=n[0],a=0;a<n.length-1;a++)o=Ex(this,i[r+a],e,a),o===Bx&&(o=this._$AH[a]),s||=!cx(o)||o!==this._$AH[a],o===Ux?t=Ux:t!==Ux&&(t+=(o??"")+n[a+1]),this._$AH[a]=o}s&&!i&&this.j(t)}j(t){t===Ux?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nx extends Sx{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ux?void 0:t}}class Lx extends Sx{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ux)}}class Dx extends Sx{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=Ex(this,t,e,0)??Ux)===Bx)return;const r=this._$AH,i=t===Ux&&r!==Ux||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==Ux&&(r===Ux||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mx{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ex(this,t)}}const kx=qA.litHtmlPolyfillSupport;kx?.(xx,Rx),(qA.litHtmlVersions??=[]).push("3.3.1");const Tx=(t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=r?.renderBefore??null;i._$litPart$=n=new Rx(e.insertBefore(ox(),t),t,void 0,r??{})}return n._$AI(t),n},Vx=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hx extends jA{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tx(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Bx}}Hx._$litElement$=!0,Hx.finalized=!0,Vx.litElementHydrateSupport?.({LitElement:Hx});const $x=Vx.litElementPolyfillSupport;function _x(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function zx(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Yx(t){let e,r,i;function n(t,i,n=0,s=t.length){if(n<s){if(0!==e(i,i))return s;do{const e=n+s>>>1;r(t[e],i)<0?n=e+1:s=e}while(n<s)}return n}return 2!==t.length?(e=_x,r=(e,r)=>_x(t(e),r),i=(e,r)=>t(e)-r):(e=t===_x||t===zx?t:Gx,r=t,i=t),{left:n,center:function(t,e,r=0,s=t.length){const a=n(t,e,r,s-1);return a>r&&i(t[a-1],e)>-i(t[a],e)?a-1:a},right:function(t,i,n=0,s=t.length){if(n<s){if(0!==e(i,i))return s;do{const e=n+s>>>1;r(t[e],i)<=0?n=e+1:s=e}while(n<s)}return n}}}function Gx(){return 0}$x?.({LitElement:Hx}),(Vx.litElementVersions??=[]).push("4.2.1");const Xx=Yx(_x).right;Yx(function(t){return null===t?NaN:+t}).center;const Wx=Math.sqrt(50),Jx=Math.sqrt(10),Ox=Math.sqrt(2);function Kx(t,e,r){const i=(e-t)/Math.max(0,r),n=Math.floor(Math.log10(i)),s=i/Math.pow(10,n),a=s>=Wx?10:s>=Jx?5:s>=Ox?2:1;let o,c,l;return n<0?(l=Math.pow(10,-n)/a,o=Math.round(t*l),c=Math.round(e*l),o/l<t&&++o,c/l>e&&--c,l=-l):(l=Math.pow(10,n)*a,o=Math.round(t/l),c=Math.round(e/l),o*l<t&&++o,c*l>e&&--c),c<o&&.5<=r&&r<2?Kx(t,e,2*r):[o,c,l]}function Px(t,e,r){return Kx(t=+t,e=+e,r=+r)[2]}function Zx(t){return t}var jx=1e-6;function qx(t){return"translate("+t+",0)"}function tE(t){return"translate(0,"+t+")"}function eE(t){return e=>+t(e)}function rE(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function iE(){return!this.__axis}function nE(t,e){var r=[],i=null,n=null,s=6,a=6,o=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",d=1===t||3===t?qx:tE;function h(h){var g=null==i?e.ticks?e.ticks.apply(e,r):e.domain():i,p=null==n?e.tickFormat?e.tickFormat.apply(e,r):Zx:n,f=Math.max(s,0)+o,m=e.range(),b=+m[0]+c,y=+m[m.length-1]+c,v=(e.bandwidth?rE:eE)(e.copy(),c),Q=h.selection?h.selection():h,B=Q.selectAll(".domain").data([null]),U=Q.selectAll(".tick").data(g,e).order(),I=U.exit(),F=U.enter().append("g").attr("class","tick"),C=U.select("line"),A=U.select("text");B=B.merge(B.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),U=U.merge(F),C=C.merge(F.append("line").attr("stroke","currentColor").attr(u+"2",l*s)),A=A.merge(F.append("text").attr("fill","currentColor").attr(u,l*f).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==Q&&(B=B.transition(h),U=U.transition(h),C=C.transition(h),A=A.transition(h),I=I.transition(h).attr("opacity",jx).attr("transform",function(t){return isFinite(t=v(t))?d(t+c):this.getAttribute("transform")}),F.attr("opacity",jx).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:v(t))+c)})),I.remove(),B.attr("d",4===t||2===t?a?"M"+l*a+","+b+"H"+c+"V"+y+"H"+l*a:"M"+c+","+b+"V"+y:a?"M"+b+","+l*a+"V"+c+"H"+y+"V"+l*a:"M"+b+","+c+"H"+y),U.attr("opacity",1).attr("transform",function(t){return d(v(t)+c)}),C.attr(u+"2",l*s),A.attr(u,l*f).text(p),Q.filter(iE).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),Q.each(function(){this.__axis=v})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return r=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),h):r.slice()},h.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),h):i&&i.slice()},h.tickFormat=function(t){return arguments.length?(n=t,h):n},h.tickSize=function(t){return arguments.length?(s=a=+t,h):s},h.tickSizeInner=function(t){return arguments.length?(s=+t,h):s},h.tickSizeOuter=function(t){return arguments.length?(a=+t,h):a},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(c=+t,h):c},h}function sE(t){return nE(4,t)}var aE={value:()=>{}};function oE(){for(var t,e=0,r=arguments.length,i={};e<r;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new cE(i)}function cE(t){this._=t}function lE(t,e){for(var r,i=0,n=t.length;i<n;++i)if((r=t[i]).name===e)return r.value}function uE(t,e,r){for(var i=0,n=t.length;i<n;++i)if(t[i].name===e){t[i]=aE,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:e,value:r}),t}cE.prototype=oE.prototype={constructor:cE,on:function(t,e){var r,i,n=this._,s=(i=n,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),a=-1,o=s.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(t=s[a]).type)n[r]=uE(n[r],t.name,e);else if(null==e)for(r in n)n[r]=uE(n[r],t.name,null);return this}for(;++a<o;)if((r=(t=s[a]).type)&&(r=lE(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new cE(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,i,n=new Array(r),s=0;s<r;++s)n[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=0,r=(i=this._[t]).length;s<r;++s)i[s].value.apply(e,n)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],n=0,s=i.length;n<s;++n)i[n].value.apply(e,r)}};var dE="http://www.w3.org/1999/xhtml",hE={svg:"http://www.w3.org/2000/svg",xhtml:dE,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function gE(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),hE.hasOwnProperty(e)?{space:hE[e],local:t}:t}function pE(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===dE&&e.documentElement.namespaceURI===dE?e.createElement(t):e.createElementNS(r,t)}}function fE(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function mE(t){var e=gE(t);return(e.local?fE:pE)(e)}function bE(){}function yE(t){return null==t?bE:function(){return this.querySelector(t)}}function vE(){return[]}function QE(t){return null==t?vE:function(){return this.querySelectorAll(t)}}function BE(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function UE(t){return function(){return this.matches(t)}}function IE(t){return function(e){return e.matches(t)}}var FE=Array.prototype.find;function CE(){return this.firstElementChild}var AE=Array.prototype.filter;function xE(){return Array.from(this.children)}function EE(t){return new Array(t.length)}function wE(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function RE(t,e,r,i,n,s){for(var a,o=0,c=e.length,l=s.length;o<l;++o)(a=e[o])?(a.__data__=s[o],i[o]=a):r[o]=new wE(t,s[o]);for(;o<c;++o)(a=e[o])&&(n[o]=a)}function SE(t,e,r,i,n,s,a){var o,c,l,u=new Map,d=e.length,h=s.length,g=new Array(d);for(o=0;o<d;++o)(c=e[o])&&(g[o]=l=a.call(c,c.__data__,o,e)+"",u.has(l)?n[o]=c:u.set(l,c));for(o=0;o<h;++o)l=a.call(t,s[o],o,s)+"",(c=u.get(l))?(i[o]=c,c.__data__=s[o],u.delete(l)):r[o]=new wE(t,s[o]);for(o=0;o<d;++o)(c=e[o])&&u.get(g[o])===c&&(n[o]=c)}function NE(t){return t.__data__}function LE(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function DE(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ME(t){return function(){this.removeAttribute(t)}}function kE(t){return function(){this.removeAttributeNS(t.space,t.local)}}function TE(t,e){return function(){this.setAttribute(t,e)}}function VE(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function HE(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function $E(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function _E(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function zE(t){return function(){this.style.removeProperty(t)}}function YE(t,e,r){return function(){this.style.setProperty(t,e,r)}}function GE(t,e,r){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,r)}}function XE(t,e){return t.style.getPropertyValue(e)||_E(t).getComputedStyle(t,null).getPropertyValue(e)}function WE(t){return function(){delete this[t]}}function JE(t,e){return function(){this[t]=e}}function OE(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function KE(t){return t.trim().split(/^|\s+/)}function PE(t){return t.classList||new ZE(t)}function ZE(t){this._node=t,this._names=KE(t.getAttribute("class")||"")}function jE(t,e){for(var r=PE(t),i=-1,n=e.length;++i<n;)r.add(e[i])}function qE(t,e){for(var r=PE(t),i=-1,n=e.length;++i<n;)r.remove(e[i])}function tw(t){return function(){jE(this,t)}}function ew(t){return function(){qE(this,t)}}function rw(t,e){return function(){(e.apply(this,arguments)?jE:qE)(this,t)}}function iw(){this.textContent=""}function nw(t){return function(){this.textContent=t}}function sw(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function aw(){this.innerHTML=""}function ow(t){return function(){this.innerHTML=t}}function cw(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function lw(){this.nextSibling&&this.parentNode.appendChild(this)}function uw(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dw(){return null}function hw(){var t=this.parentNode;t&&t.removeChild(this)}function gw(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function pw(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function fw(t){return function(){var e=this.__on;if(e){for(var r,i=0,n=-1,s=e.length;i<s;++i)r=e[i],t.type&&r.type!==t.type||r.name!==t.name?e[++n]=r:this.removeEventListener(r.type,r.listener,r.options);++n?e.length=n:delete this.__on}}}function mw(t,e,r){return function(){var i,n=this.__on,s=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(n)for(var a=0,o=n.length;a<o;++a)if((i=n[a]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=r),void(i.value=e);this.addEventListener(t.type,s,r),i={type:t.type,name:t.name,value:e,listener:s,options:r},n?n.push(i):this.__on=[i]}}function bw(t,e,r){var i=_E(t),n=i.CustomEvent;"function"==typeof n?n=new n(e,r):(n=i.document.createEvent("Event"),r?(n.initEvent(e,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(e,!1,!1)),t.dispatchEvent(n)}function yw(t,e){return function(){return bw(this,t,e)}}function vw(t,e){return function(){return bw(this,t,e.apply(this,arguments))}}wE.prototype={constructor:wE,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},ZE.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Qw=[null];function Bw(t,e){this._groups=t,this._parents=e}function Uw(){return new Bw([[document.documentElement]],Qw)}function Iw(t){return"string"==typeof t?new Bw([[document.querySelector(t)]],[document.documentElement]):new Bw([[t]],Qw)}Bw.prototype=Uw.prototype={constructor:Bw,select:function(t){"function"!=typeof t&&(t=yE(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var s,a,o=e[n],c=o.length,l=i[n]=new Array(c),u=0;u<c;++u)(s=o[u])&&(a=t.call(s,s.__data__,u,o))&&("__data__"in s&&(a.__data__=s.__data__),l[u]=a);return new Bw(i,this._parents)},selectAll:function(t){t="function"==typeof t?BE(t):QE(t);for(var e=this._groups,r=e.length,i=[],n=[],s=0;s<r;++s)for(var a,o=e[s],c=o.length,l=0;l<c;++l)(a=o[l])&&(i.push(t.call(a,a.__data__,l,o)),n.push(a));return new Bw(i,n)},selectChild:function(t){return this.select(null==t?CE:function(t){return function(){return FE.call(this.children,t)}}("function"==typeof t?t:IE(t)))},selectChildren:function(t){return this.selectAll(null==t?xE:function(t){return function(){return AE.call(this.children,t)}}("function"==typeof t?t:IE(t)))},filter:function(t){"function"!=typeof t&&(t=UE(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var s,a=e[n],o=a.length,c=i[n]=[],l=0;l<o;++l)(s=a[l])&&t.call(s,s.__data__,l,a)&&c.push(s);return new Bw(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,NE);var r=e?SE:RE,i=this._parents,n=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var s=n.length,a=new Array(s),o=new Array(s),c=new Array(s),l=0;l<s;++l){var u=i[l],d=n[l],h=d.length,g=LE(t.call(u,u&&u.__data__,l,i)),p=g.length,f=o[l]=new Array(p),m=a[l]=new Array(p);r(u,d,f,m,c[l]=new Array(h),g,e);for(var b,y,v=0,Q=0;v<p;++v)if(b=f[v]){for(v>=Q&&(Q=v+1);!(y=m[Q])&&++Q<p;);b._next=y||null}}return(a=new Bw(a,i))._enter=o,a._exit=c,a},enter:function(){return new Bw(this._enter||this._groups.map(EE),this._parents)},exit:function(){return new Bw(this._exit||this._groups.map(EE),this._parents)},join:function(t,e,r){var i=this.enter(),n=this,s=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(n=e(n))&&(n=n.selection()),null==r?s.remove():r(s),i&&n?i.merge(n).order():n},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,i=e._groups,n=r.length,s=i.length,a=Math.min(n,s),o=new Array(n),c=0;c<a;++c)for(var l,u=r[c],d=i[c],h=u.length,g=o[c]=new Array(h),p=0;p<h;++p)(l=u[p]||d[p])&&(g[p]=l);for(;c<n;++c)o[c]=r[c];return new Bw(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var i,n=t[e],s=n.length-1,a=n[s];--s>=0;)(i=n[s])&&(a&&4^i.compareDocumentPosition(a)&&a.parentNode.insertBefore(i,a),a=i);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=DE);for(var r=this._groups,i=r.length,n=new Array(i),s=0;s<i;++s){for(var a,o=r[s],c=o.length,l=n[s]=new Array(c),u=0;u<c;++u)(a=o[u])&&(l[u]=a);l.sort(e)}return new Bw(n,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],n=0,s=i.length;n<s;++n){var a=i[n];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,i=e.length;r<i;++r)for(var n,s=e[r],a=0,o=s.length;a<o;++a)(n=s[a])&&t.call(n,n.__data__,a,s);return this},attr:function(t,e){var r=gE(t);if(arguments.length<2){var i=this.node();return r.local?i.getAttributeNS(r.space,r.local):i.getAttribute(r)}return this.each((null==e?r.local?kE:ME:"function"==typeof e?r.local?$E:HE:r.local?VE:TE)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?zE:"function"==typeof e?GE:YE)(t,e,null==r?"":r)):XE(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?WE:"function"==typeof e?OE:JE)(t,e)):this.node()[t]},classed:function(t,e){var r=KE(t+"");if(arguments.length<2){for(var i=PE(this.node()),n=-1,s=r.length;++n<s;)if(!i.contains(r[n]))return!1;return!0}return this.each(("function"==typeof e?rw:e?tw:ew)(r,e))},text:function(t){return arguments.length?this.each(null==t?iw:("function"==typeof t?sw:nw)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?aw:("function"==typeof t?cw:ow)(t)):this.node().innerHTML},raise:function(){return this.each(lw)},lower:function(){return this.each(uw)},append:function(t){var e="function"==typeof t?t:mE(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:mE(t),i=null==e?dw:"function"==typeof e?e:yE(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),i.apply(this,arguments)||null)})},remove:function(){return this.each(hw)},clone:function(t){return this.select(t?pw:gw)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var i,n,s=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),a=s.length;if(!(arguments.length<2)){for(o=e?mw:fw,i=0;i<a;++i)this.each(o(s[i],e,r));return this}var o=this.node().__on;if(o)for(var c,l=0,u=o.length;l<u;++l)for(i=0,c=o[l];i<a;++i)if((n=s[i]).type===c.type&&n.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?vw:yw)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i,n=t[e],s=0,a=n.length;s<a;++s)(i=n[s])&&(yield i)}};var Fw=0;function Cw(){return new Aw}function Aw(){this._="@"+(++Fw).toString(36)}function xw(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var i=r.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();return[t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop]}}return[t.pageX,t.pageY]}Aw.prototype=Cw.prototype={constructor:Aw,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const Ew={passive:!1},ww={capture:!0,passive:!1};function Rw(t){t.stopImmediatePropagation()}function Sw(t){t.preventDefault(),t.stopImmediatePropagation()}var Nw=t=>()=>t;function Lw(t,{sourceEvent:e,subject:r,target:i,identifier:n,active:s,x:a,y:o,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}function Dw(t){return!t.ctrlKey&&!t.button}function Mw(){return this.parentNode}function kw(t,e){return null==e?{x:t.x,y:t.y}:e}function Tw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Vw(){var t,e,r,i,n=Dw,s=Mw,a=kw,o=Tw,c={},l=oE("start","drag","end"),u=0,d=0;function h(t){t.on("mousedown.drag",g).filter(o).on("touchstart.drag",m).on("touchmove.drag",b,Ew).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(a,o){if(!i&&n.call(this,a,o)){var c=v(this,s.call(this,a,o),a,o,"mouse");c&&(Iw(a.view).on("mousemove.drag",p,ww).on("mouseup.drag",f,ww),function(t){var e=t.document.documentElement,r=Iw(t).on("dragstart.drag",Sw,ww);"onselectstart"in e?r.on("selectstart.drag",Sw,ww):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(a.view),Rw(a),r=!1,t=a.clientX,e=a.clientY,c("start",a))}}function p(i){if(Sw(i),!r){var n=i.clientX-t,s=i.clientY-e;r=n*n+s*s>d}c.mouse("drag",i)}function f(t){Iw(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,i=Iw(t).on("dragstart.drag",null);e&&(i.on("click.drag",Sw,ww),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in r?i.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),Sw(t),c.mouse("end",t)}function m(t,e){if(n.call(this,t,e)){var r,i,a=t.changedTouches,o=s.call(this,t,e),c=a.length;for(r=0;r<c;++r)(i=v(this,o,t,e,a[r].identifier,a[r]))&&(Rw(t),i("start",t,a[r]))}}function b(t){var e,r,i=t.changedTouches,n=i.length;for(e=0;e<n;++e)(r=c[i[e].identifier])&&(Sw(t),r("drag",t,i[e]))}function y(t){var e,r,n=t.changedTouches,s=n.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),e=0;e<s;++e)(r=c[n[e].identifier])&&(Rw(t),r("end",t,n[e]))}function v(t,e,r,i,n,s){var o,d,g,p=l.copy(),f=xw(s||r,e);if(null!=(g=a.call(t,new Lw("beforestart",{sourceEvent:r,target:h,identifier:n,active:u,x:f[0],y:f[1],dx:0,dy:0,dispatch:p}),i)))return o=g.x-f[0]||0,d=g.y-f[1]||0,function r(s,a,l){var m,b=f;switch(s){case"start":c[n]=r,m=u++;break;case"end":delete c[n],--u;case"drag":f=xw(l||a,e),m=u}p.call(s,t,new Lw(s,{sourceEvent:a,subject:g,target:h,identifier:n,active:m,x:f[0]+o,y:f[1]+d,dx:f[0]-b[0],dy:f[1]-b[1],dispatch:p}),i)}}return h.filter=function(t){return arguments.length?(n="function"==typeof t?t:Nw(!!t),h):n},h.container=function(t){return arguments.length?(s="function"==typeof t?t:Nw(t),h):s},h.subject=function(t){return arguments.length?(a="function"==typeof t?t:Nw(t),h):a},h.touchable=function(t){return arguments.length?(o="function"==typeof t?t:Nw(!!t),h):o},h.on=function(){var t=l.on.apply(l,arguments);return t===l?h:t},h.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,h):Math.sqrt(d)},h}function Hw(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function $w(t,e){var r=Object.create(t.prototype);for(var i in e)r[i]=e[i];return r}function _w(){}Lw.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var zw=.7,Yw=1/zw,Gw="\\s*([+-]?\\d+)\\s*",Xw="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ww="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Jw=/^#([0-9a-f]{3,8})$/,Ow=new RegExp(`^rgb\\(${Gw},${Gw},${Gw}\\)$`),Kw=new RegExp(`^rgb\\(${Ww},${Ww},${Ww}\\)$`),Pw=new RegExp(`^rgba\\(${Gw},${Gw},${Gw},${Xw}\\)$`),Zw=new RegExp(`^rgba\\(${Ww},${Ww},${Ww},${Xw}\\)$`),jw=new RegExp(`^hsl\\(${Xw},${Ww},${Ww}\\)$`),qw=new RegExp(`^hsla\\(${Xw},${Ww},${Ww},${Xw}\\)$`),tR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function eR(){return this.rgb().formatHex()}function rR(){return this.rgb().formatRgb()}function iR(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=Jw.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?nR(e):3===r?new oR(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?sR(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?sR(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=Ow.exec(t))?new oR(e[1],e[2],e[3],1):(e=Kw.exec(t))?new oR(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=Pw.exec(t))?sR(e[1],e[2],e[3],e[4]):(e=Zw.exec(t))?sR(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=jw.exec(t))?gR(e[1],e[2]/100,e[3]/100,1):(e=qw.exec(t))?gR(e[1],e[2]/100,e[3]/100,e[4]):tR.hasOwnProperty(t)?nR(tR[t]):"transparent"===t?new oR(NaN,NaN,NaN,0):null}function nR(t){return new oR(t>>16&255,t>>8&255,255&t,1)}function sR(t,e,r,i){return i<=0&&(t=e=r=NaN),new oR(t,e,r,i)}function aR(t,e,r,i){return 1===arguments.length?function(t){return t instanceof _w||(t=iR(t)),t?new oR((t=t.rgb()).r,t.g,t.b,t.opacity):new oR}(t):new oR(t,e,r,null==i?1:i)}function oR(t,e,r,i){this.r=+t,this.g=+e,this.b=+r,this.opacity=+i}function cR(){return`#${hR(this.r)}${hR(this.g)}${hR(this.b)}`}function lR(){const t=uR(this.opacity);return`${1===t?"rgb(":"rgba("}${dR(this.r)}, ${dR(this.g)}, ${dR(this.b)}${1===t?")":`, ${t})`}`}function uR(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function dR(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hR(t){return((t=dR(t))<16?"0":"")+t.toString(16)}function gR(t,e,r,i){return i<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new fR(t,e,r,i)}function pR(t){if(t instanceof fR)return new fR(t.h,t.s,t.l,t.opacity);if(t instanceof _w||(t=iR(t)),!t)return new fR;if(t instanceof fR)return t;var e=(t=t.rgb()).r/255,r=t.g/255,i=t.b/255,n=Math.min(e,r,i),s=Math.max(e,r,i),a=NaN,o=s-n,c=(s+n)/2;return o?(a=e===s?(r-i)/o+6*(r<i):r===s?(i-e)/o+2:(e-r)/o+4,o/=c<.5?s+n:2-s-n,a*=60):o=c>0&&c<1?0:a,new fR(a,o,c,t.opacity)}function fR(t,e,r,i){this.h=+t,this.s=+e,this.l=+r,this.opacity=+i}function mR(t){return(t=(t||0)%360)<0?t+360:t}function bR(t){return Math.max(0,Math.min(1,t||0))}function yR(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}Hw(_w,iR,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:eR,formatHex:eR,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return pR(this).formatHsl()},formatRgb:rR,toString:rR}),Hw(oR,aR,$w(_w,{brighter(t){return t=null==t?Yw:Math.pow(Yw,t),new oR(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?zw:Math.pow(zw,t),new oR(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new oR(dR(this.r),dR(this.g),dR(this.b),uR(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:cR,formatHex:cR,formatHex8:function(){return`#${hR(this.r)}${hR(this.g)}${hR(this.b)}${hR(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:lR,toString:lR})),Hw(fR,function(t,e,r,i){return 1===arguments.length?pR(t):new fR(t,e,r,null==i?1:i)},$w(_w,{brighter(t){return t=null==t?Yw:Math.pow(Yw,t),new fR(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?zw:Math.pow(zw,t),new fR(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,i=r+(r<.5?r:1-r)*e,n=2*r-i;return new oR(yR(t>=240?t-240:t+120,n,i),yR(t,n,i),yR(t<120?t+240:t-120,n,i),this.opacity)},clamp(){return new fR(mR(this.h),bR(this.s),bR(this.l),uR(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=uR(this.opacity);return`${1===t?"hsl(":"hsla("}${mR(this.h)}, ${100*bR(this.s)}%, ${100*bR(this.l)}%${1===t?")":`, ${t})`}`}}));var vR=t=>()=>t;function QR(t){return 1===(t=+t)?BR:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(i){return Math.pow(t+i*e,r)}}(e,r,t):vR(isNaN(e)?r:e)}}function BR(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):vR(isNaN(t)?e:t)}var UR=function t(e){var r=QR(e);function i(t,e){var i=r((t=aR(t)).r,(e=aR(e)).r),n=r(t.g,e.g),s=r(t.b,e.b),a=BR(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=n(e),t.b=s(e),t.opacity=a(e),t+""}}return i.gamma=t,i}(1);function IR(t,e){e||(e=[]);var r,i=t?Math.min(e.length,t.length):0,n=e.slice();return function(s){for(r=0;r<i;++r)n[r]=t[r]*(1-s)+e[r]*s;return n}}function FR(t,e){var r,i=e?e.length:0,n=t?Math.min(i,t.length):0,s=new Array(n),a=new Array(i);for(r=0;r<n;++r)s[r]=SR(t[r],e[r]);for(;r<i;++r)a[r]=e[r];return function(t){for(r=0;r<n;++r)a[r]=s[r](t);return a}}function CR(t,e){var r=new Date;return t=+t,e=+e,function(i){return r.setTime(t*(1-i)+e*i),r}}function AR(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function xR(t,e){var r,i={},n={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?i[r]=SR(t[r],e[r]):n[r]=e[r];return function(t){for(r in i)n[r]=i[r](t);return n}}var ER=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wR=new RegExp(ER.source,"g");function RR(t,e){var r,i,n,s=ER.lastIndex=wR.lastIndex=0,a=-1,o=[],c=[];for(t+="",e+="";(r=ER.exec(t))&&(i=wR.exec(e));)(n=i.index)>s&&(n=e.slice(s,n),o[a]?o[a]+=n:o[++a]=n),(r=r[0])===(i=i[0])?o[a]?o[a]+=i:o[++a]=i:(o[++a]=null,c.push({i:a,x:AR(r,i)})),s=wR.lastIndex;return s<e.length&&(n=e.slice(s),o[a]?o[a]+=n:o[++a]=n),o.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var r,i=0;i<e;++i)o[(r=c[i]).i]=r.x(t);return o.join("")})}function SR(t,e){var r,i=typeof e;return null==e||"boolean"===i?vR(e):("number"===i?AR:"string"===i?(r=iR(e))?(e=r,UR):RR:e instanceof iR?UR:e instanceof Date?CR:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?IR:Array.isArray(e)?FR:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?xR:AR)(t,e)}function NR(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var LR,DR=180/Math.PI,MR={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function kR(t,e,r,i,n,s){var a,o,c;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(c=t*r+e*i)&&(r-=t*c,i-=e*c),(o=Math.sqrt(r*r+i*i))&&(r/=o,i/=o,c/=o),t*i<e*r&&(t=-t,e=-e,c=-c,a=-a),{translateX:n,translateY:s,rotate:Math.atan2(e,t)*DR,skewX:Math.atan(c)*DR,scaleX:a,scaleY:o}}function TR(t,e,r,i){function n(t){return t.length?t.pop()+" ":""}return function(s,a){var o=[],c=[];return s=t(s),a=t(a),function(t,i,n,s,a,o){if(t!==n||i!==s){var c=a.push("translate(",null,e,null,r);o.push({i:c-4,x:AR(t,n)},{i:c-2,x:AR(i,s)})}else(n||s)&&a.push("translate("+n+e+s+r)}(s.translateX,s.translateY,a.translateX,a.translateY,o,c),function(t,e,r,s){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),s.push({i:r.push(n(r)+"rotate(",null,i)-2,x:AR(t,e)})):e&&r.push(n(r)+"rotate("+e+i)}(s.rotate,a.rotate,o,c),function(t,e,r,s){t!==e?s.push({i:r.push(n(r)+"skewX(",null,i)-2,x:AR(t,e)}):e&&r.push(n(r)+"skewX("+e+i)}(s.skewX,a.skewX,o,c),function(t,e,r,i,s,a){if(t!==r||e!==i){var o=s.push(n(s)+"scale(",null,",",null,")");a.push({i:o-4,x:AR(t,r)},{i:o-2,x:AR(e,i)})}else 1===r&&1===i||s.push(n(s)+"scale("+r+","+i+")")}(s.scaleX,s.scaleY,a.scaleX,a.scaleY,o,c),s=a=null,function(t){for(var e,r=-1,i=c.length;++r<i;)o[(e=c[r]).i]=e.x(t);return o.join("")}}}var VR,HR,$R=TR(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?MR:kR(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),_R=TR(function(t){return null==t?MR:(LR||(LR=document.createElementNS("http://www.w3.org/2000/svg","g")),LR.setAttribute("transform",t),(t=LR.transform.baseVal.consolidate())?kR((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):MR)},", ",")",")"),zR=0,YR=0,GR=0,XR=0,WR=0,JR=0,OR="object"==typeof performance&&performance.now?performance:Date,KR="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function PR(){return WR||(KR(ZR),WR=OR.now()+JR)}function ZR(){WR=0}function jR(){this._call=this._time=this._next=null}function qR(t,e,r){var i=new jR;return i.restart(t,e,r),i}function tS(){WR=(XR=OR.now())+JR,zR=YR=0;try{!function(){PR(),++zR;for(var t,e=VR;e;)(t=WR-e._time)>=0&&e._call.call(void 0,t),e=e._next;--zR}()}finally{zR=0,function(){var t,e,r=VR,i=1/0;for(;r;)r._call?(i>r._time&&(i=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:VR=e);HR=t,rS(i)}(),WR=0}}function eS(){var t=OR.now(),e=t-XR;e>1e3&&(JR-=e,XR=t)}function rS(t){zR||(YR&&(YR=clearTimeout(YR)),t-WR>24?(t<1/0&&(YR=setTimeout(tS,t-OR.now()-JR)),GR&&(GR=clearInterval(GR))):(GR||(XR=OR.now(),GR=setInterval(eS,1e3)),zR=1,KR(tS)))}function iS(t,e,r){var i=new jR;return e=null==e?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,r),i}jR.prototype=qR.prototype={constructor:jR,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?PR():+r)+(null==e?0:+e),this._next||HR===this||(HR?HR._next=this:VR=this,HR=this),this._call=t,this._time=r,rS()},stop:function(){this._call&&(this._call=null,this._time=1/0,rS())}};var nS=oE("start","end","cancel","interrupt"),sS=[];function aS(t,e,r,i,n,s){var a=t.__transition;if(a){if(r in a)return}else t.__transition={};!function(t,e,r){var i,n=t.__transition;function s(t){r.state=1,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)}function a(s){var l,u,d,h;if(1!==r.state)return c();for(l in n)if((h=n[l]).name===r.name){if(3===h.state)return iS(a);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete n[l]):+l<e&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete n[l])}if(iS(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(s))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,i=new Array(d=r.tween.length),l=0,u=-1;l<d;++l)(h=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(i[++u]=h);i.length=u+1}}function o(e){for(var n=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(c),r.state=5,1),s=-1,a=i.length;++s<a;)i[s].call(t,n);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),c())}function c(){for(var i in r.state=6,r.timer.stop(),delete n[e],n)return;delete t.__transition}n[e]=r,r.timer=qR(s,0,r.time)}(t,r,{name:e,index:i,group:n,on:nS,tween:sS,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:0})}function oS(t,e){var r=lS(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function cS(t,e){var r=lS(t,e);if(r.state>3)throw new Error("too late; already running");return r}function lS(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function uS(t,e){var r,i;return function(){var n=cS(this,t),s=n.tween;if(s!==r)for(var a=0,o=(i=r=s).length;a<o;++a)if(i[a].name===e){(i=i.slice()).splice(a,1);break}n.tween=i}}function dS(t,e,r){var i,n;if("function"!=typeof r)throw new Error;return function(){var s=cS(this,t),a=s.tween;if(a!==i){n=(i=a).slice();for(var o={name:e,value:r},c=0,l=n.length;c<l;++c)if(n[c].name===e){n[c]=o;break}c===l&&n.push(o)}s.tween=n}}function hS(t,e,r){var i=t._id;return t.each(function(){var t=cS(this,i);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return lS(t,i).value[e]}}function gS(t,e){var r;return("number"==typeof e?AR:e instanceof iR?UR:(r=iR(e))?(e=r,UR):RR)(t,e)}function pS(t){return function(){this.removeAttribute(t)}}function fS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function mS(t,e,r){var i,n,s=r+"";return function(){var a=this.getAttribute(t);return a===s?null:a===i?n:n=e(i=a,r)}}function bS(t,e,r){var i,n,s=r+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===s?null:a===i?n:n=e(i=a,r)}}function yS(t,e,r){var i,n,s;return function(){var a,o,c=r(this);if(null!=c)return(a=this.getAttribute(t))===(o=c+"")?null:a===i&&o===n?s:(n=o,s=e(i=a,c));this.removeAttribute(t)}}function vS(t,e,r){var i,n,s;return function(){var a,o,c=r(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(o=c+"")?null:a===i&&o===n?s:(n=o,s=e(i=a,c));this.removeAttributeNS(t.space,t.local)}}function QS(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,n)),r}return n._value=e,n}function BS(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,n)),r}return n._value=e,n}function US(t,e){return function(){oS(this,t).delay=+e.apply(this,arguments)}}function IS(t,e){return e=+e,function(){oS(this,t).delay=e}}function FS(t,e){return function(){cS(this,t).duration=+e.apply(this,arguments)}}function CS(t,e){return e=+e,function(){cS(this,t).duration=e}}var AS=Uw.prototype.constructor;function xS(t){return function(){this.style.removeProperty(t)}}var ES=0;function wS(t,e,r,i){this._groups=t,this._parents=e,this._name=r,this._id=i}function RS(){return++ES}var SS=Uw.prototype;wS.prototype={constructor:wS,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=yE(t));for(var i=this._groups,n=i.length,s=new Array(n),a=0;a<n;++a)for(var o,c,l=i[a],u=l.length,d=s[a]=new Array(u),h=0;h<u;++h)(o=l[h])&&(c=t.call(o,o.__data__,h,l))&&("__data__"in o&&(c.__data__=o.__data__),d[h]=c,aS(d[h],e,r,h,d,lS(o,r)));return new wS(s,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=QE(t));for(var i=this._groups,n=i.length,s=[],a=[],o=0;o<n;++o)for(var c,l=i[o],u=l.length,d=0;d<u;++d)if(c=l[d]){for(var h,g=t.call(c,c.__data__,d,l),p=lS(c,r),f=0,m=g.length;f<m;++f)(h=g[f])&&aS(h,e,r,f,g,p);s.push(g),a.push(c)}return new wS(s,a,e,r)},selectChild:SS.selectChild,selectChildren:SS.selectChildren,filter:function(t){"function"!=typeof t&&(t=UE(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var s,a=e[n],o=a.length,c=i[n]=[],l=0;l<o;++l)(s=a[l])&&t.call(s,s.__data__,l,a)&&c.push(s);return new wS(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,i=e.length,n=r.length,s=Math.min(i,n),a=new Array(i),o=0;o<s;++o)for(var c,l=e[o],u=r[o],d=l.length,h=a[o]=new Array(d),g=0;g<d;++g)(c=l[g]||u[g])&&(h[g]=c);for(;o<i;++o)a[o]=e[o];return new wS(a,this._parents,this._name,this._id)},selection:function(){return new AS(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=RS(),i=this._groups,n=i.length,s=0;s<n;++s)for(var a,o=i[s],c=o.length,l=0;l<c;++l)if(a=o[l]){var u=lS(a,e);aS(a,t,r,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new wS(i,this._parents,t,r)},call:SS.call,nodes:SS.nodes,node:SS.node,size:SS.size,empty:SS.empty,each:SS.each,on:function(t,e){var r=this._id;return arguments.length<2?lS(this.node(),r).on.on(t):this.each(function(t,e,r){var i,n,s=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?oS:cS;return function(){var a=s(this,t),o=a.on;o!==i&&(n=(i=o).copy()).on(e,r),a.on=n}}(r,t,e))},attr:function(t,e){var r=gE(t),i="transform"===r?_R:gS;return this.attrTween(t,"function"==typeof e?(r.local?vS:yS)(r,i,hS(this,"attr."+t,e)):null==e?(r.local?fS:pS)(r):(r.local?bS:mS)(r,i,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=gE(t);return this.tween(r,(i.local?QS:BS)(i,e))},style:function(t,e,r){var i="transform"==(t+="")?$R:gS;return null==e?this.styleTween(t,function(t,e){var r,i,n;return function(){var s=XE(this,t),a=(this.style.removeProperty(t),XE(this,t));return s===a?null:s===r&&a===i?n:n=e(r=s,i=a)}}(t,i)).on("end.style."+t,xS(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var i,n,s;return function(){var a=XE(this,t),o=r(this),c=o+"";return null==o&&(this.style.removeProperty(t),c=o=XE(this,t)),a===c?null:a===i&&c===n?s:(n=c,s=e(i=a,o))}}(t,i,hS(this,"style."+t,e))).each(function(t,e){var r,i,n,s,a="style."+e,o="end."+a;return function(){var c=cS(this,t),l=c.on,u=null==c.value[a]?s||(s=xS(e)):void 0;l===r&&n===u||(i=(r=l).copy()).on(o,n=u),c.on=i}}(this._id,t)):this.styleTween(t,function(t,e,r){var i,n,s=r+"";return function(){var a=XE(this,t);return a===s?null:a===i?n:n=e(i=a,r)}}(t,i,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,r){var i,n;function s(){var s=e.apply(this,arguments);return s!==n&&(i=(n=s)&&function(t,e,r){return function(i){this.style.setProperty(t,e.call(this,i),r)}}(t,s,r)),i}return s._value=e,s}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(hS(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function i(){var i=t.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var i,n=lS(this.node(),r).tween,s=0,a=n.length;s<a;++s)if((i=n[s]).name===t)return i.value;return null}return this.each((null==e?uS:dS)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?US:IS)(e,t)):lS(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?FS:CS)(e,t)):lS(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){cS(this,t).ease=e}}(e,t)):lS(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;cS(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,i=r._id,n=r.size();return new Promise(function(s,a){var o={value:a},c={value:function(){0===--n&&s()}};r.each(function(){var r=cS(this,i),n=r.on;n!==t&&((e=(t=n).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(c)),r.on=e}),0===n&&s()})},[Symbol.iterator]:SS[Symbol.iterator]};const NS=t=>+t;function LS(t){return--t*t*t+1}var DS={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function MS(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}Uw.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,i,n,s=t.__transition,a=!0;if(s){for(n in e=null==e?null:e+"",s)(r=s[n]).name===e?(i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete s[n]):a=!1;a&&delete t.__transition}}(this,t)})},Uw.prototype.transition=function(t){var e,r;t instanceof wS?(e=t._id,t=t._name):(e=RS(),(r=DS).time=PR(),t=null==t?null:t+"");for(var i=this._groups,n=i.length,s=0;s<n;++s)for(var a,o=i[s],c=o.length,l=0;l<c;++l)(a=o[l])&&aS(a,t,e,l,o,r||MS(a,e));return new wS(i,this._parents,t,e)};const kS=Math.PI,TS=2*kS,VS=1e-6,HS=TS-VS;function $S(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class _S{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?$S:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return $S;const r=10**e;return function(t){this._+=t[0];for(let e=1,i=t.length;e<i;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,i){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,e,r,i,n,s){this._append`C${+t},${+e},${+r},${+i},${this._x1=+n},${this._y1=+s}`}arcTo(t,e,r,i,n){if(t=+t,e=+e,r=+r,i=+i,(n=+n)<0)throw new Error(`negative radius: ${n}`);let s=this._x1,a=this._y1,o=r-t,c=i-e,l=s-t,u=a-e,d=l*l+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>VS)if(Math.abs(u*o-c*l)>VS&&n){let h=r-s,g=i-a,p=o*o+c*c,f=h*h+g*g,m=Math.sqrt(p),b=Math.sqrt(d),y=n*Math.tan((kS-Math.acos((p+d-f)/(2*m*b)))/2),v=y/b,Q=y/m;Math.abs(v-1)>VS&&this._append`L${t+v*l},${e+v*u}`,this._append`A${n},${n},0,0,${+(u*h>l*g)},${this._x1=t+Q*o},${this._y1=e+Q*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,i,n,s){if(t=+t,e=+e,s=!!s,(r=+r)<0)throw new Error(`negative radius: ${r}`);let a=r*Math.cos(i),o=r*Math.sin(i),c=t+a,l=e+o,u=1^s,d=s?i-n:n-i;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>VS||Math.abs(this._y1-l)>VS)&&this._append`L${c},${l}`,r&&(d<0&&(d=d%TS+TS),d>HS?this._append`A${r},${r},0,1,${u},${t-a},${e-o}A${r},${r},0,1,${u},${this._x1=c},${this._y1=l}`:d>VS&&this._append`A${r},${r},0,${+(d>=kS)},${u},${this._x1=t+r*Math.cos(n)},${this._y1=e+r*Math.sin(n)}`)}rect(t,e,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function zS(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,i=t.slice(0,r);return[i.length>1?i[0]+i.slice(2):i,+t.slice(r+1)]}function YS(t){return(t=zS(Math.abs(t)))?t[1]:NaN}var GS,XS=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function WS(t){if(!(e=XS.exec(t)))throw new Error("invalid format: "+t);var e;return new JS({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function JS(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function OS(t,e){var r=zS(t,e);if(!r)return t+"";var i=r[0],n=r[1];return n<0?"0."+new Array(-n).join("0")+i:i.length>n+1?i.slice(0,n+1)+"."+i.slice(n+1):i+new Array(n-i.length+2).join("0")}WS.prototype=JS.prototype,JS.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var KS={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>OS(100*t,e),r:OS,s:function(t,e){var r=zS(t,e);if(!r)return t+"";var i=r[0],n=r[1],s=n-(GS=3*Math.max(-8,Math.min(8,Math.floor(n/3))))+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+zS(t,Math.max(0,e+s-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function PS(t){return t}var ZS,jS,qS,tN=Array.prototype.map,eN=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function rN(t){var e,r,i=void 0===t.grouping||void 0===t.thousands?PS:(e=tN.call(t.grouping,Number),r=t.thousands+"",function(t,i){for(var n=t.length,s=[],a=0,o=e[0],c=0;n>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),s.push(t.substring(n-=o,n+o)),!((c+=o+1)>i));)o=e[a=(a+1)%e.length];return s.reverse().join(r)}),n=void 0===t.currency?"":t.currency[0]+"",s=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?PS:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(tN.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function d(t){var e=(t=WS(t)).fill,r=t.align,d=t.sign,h=t.symbol,g=t.zero,p=t.width,f=t.comma,m=t.precision,b=t.trim,y=t.type;"n"===y?(f=!0,y="g"):KS[y]||(void 0===m&&(m=12),b=!0,y="g"),(g||"0"===e&&"="===r)&&(g=!0,e="0",r="=");var v="$"===h?n:"#"===h&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",Q="$"===h?s:/[%p]/.test(y)?c:"",B=KS[y],U=/[defgprs%]/.test(y);function I(t){var n,s,c,h=v,I=Q;if("c"===y)I=B(t)+I,t="";else{var F=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:B(Math.abs(t),m),b&&(t=function(t){t:for(var e,r=t.length,i=1,n=-1;i<r;++i)switch(t[i]){case".":n=e=i;break;case"0":0===n&&(n=i),e=i;break;default:if(!+t[i])break t;n>0&&(n=0)}return n>0?t.slice(0,n)+t.slice(e+1):t}(t)),F&&0===+t&&"+"!==d&&(F=!1),h=(F?"("===d?d:l:"-"===d||"("===d?"":d)+h,I=("s"===y?eN[8+GS/3]:"")+I+(F&&"("===d?")":""),U)for(n=-1,s=t.length;++n<s;)if(48>(c=t.charCodeAt(n))||c>57){I=(46===c?a+t.slice(n+1):t.slice(n))+I,t=t.slice(0,n);break}}f&&!g&&(t=i(t,1/0));var C=h.length+t.length+I.length,A=C<p?new Array(p-C+1).join(e):"";switch(f&&g&&(t=i(A+t,A.length?p-I.length:1/0),A=""),r){case"<":t=h+t+I+A;break;case"=":t=h+A+t+I;break;case"^":t=A.slice(0,C=A.length>>1)+h+t+I+A.slice(C);break;default:t=A+h+t+I}return o(t)}return m=void 0===m?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),I.toString=function(){return t+""},I}return{format:d,formatPrefix:function(t,e){var r=d(((t=WS(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(YS(e)/3))),n=Math.pow(10,-i),s=eN[8+i/3];return function(t){return r(n*t)+s}}}}ZS=rN({thousands:",",grouping:[3],currency:["$",""]}),jS=ZS.format,qS=ZS.formatPrefix;var iN=Math.random,nN=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(iN),sN=function t(e){function r(t,r){var i,n;return t=null==t?0:+t,r=null==r?1:+r,function(){var s;if(null!=i)s=i,i=null;else do{i=2*e()-1,s=2*e()-1,n=i*i+s*s}while(!n||n>1);return t+r*s*Math.sqrt(-2*Math.log(n)/n)}}return r.source=t,r}(iN);const aN=1/4294967296;function oN(t=Math.random()){let e=0|(0<=t&&t<1?t/aN:Math.abs(t));return()=>(e=1664525*e+1013904223|0,aN*(e>>>0))}function cN(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function lN(t){return+t}var uN=[0,1];function dN(t){return t}function hN(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function gN(t,e,r){var i=t[0],n=t[1],s=e[0],a=e[1];return n<i?(i=hN(n,i),s=r(a,s)):(i=hN(i,n),s=r(s,a)),function(t){return s(i(t))}}function pN(t,e,r){var i=Math.min(t.length,e.length)-1,n=new Array(i),s=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<i;)n[a]=hN(t[a],t[a+1]),s[a]=r(e[a],e[a+1]);return function(e){var r=Xx(t,e,1,i)-1;return s[r](n[r](e))}}function fN(){var t,e,r,i,n,s,a=uN,o=uN,c=SR,l=dN;function u(){var t=Math.min(a.length,o.length);return l!==dN&&(l=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(a[0],a[t-1])),i=t>2?pN:gN,n=s=null,d}function d(e){return null==e||isNaN(e=+e)?r:(n||(n=i(a.map(t),o,c)))(t(l(e)))}return d.invert=function(r){return l(e((s||(s=i(o,a.map(t),AR)))(r)))},d.domain=function(t){return arguments.length?(a=Array.from(t,lN),u()):a.slice()},d.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},d.rangeRound=function(t){return o=Array.from(t),c=NR,u()},d.clamp=function(t){return arguments.length?(l=!!t||dN,u()):l!==dN},d.interpolate=function(t){return arguments.length?(c=t,u()):c},d.unknown=function(t){return arguments.length?(r=t,d):r},function(r,i){return t=r,e=i,u()}}function mN(t,e,r,i){var n,s=function(t,e,r){r=+r;const i=(e=+e)<(t=+t),n=i?Px(e,t,r):Px(t,e,r);return(i?-1:1)*(n<0?1/-n:n)}(t,e,r);switch((i=WS(null==i?",f":i)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(n=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(YS(e)/3)))-YS(Math.abs(t)))}(s,a))||(i.precision=n),qS(i,a);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(n=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,YS(e)-YS(t))+1}(s,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=n-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(n=function(t){return Math.max(0,-YS(Math.abs(t)))}(s))||(i.precision=n-2*("%"===i.type))}return jS(i)}function bN(t){var e=t.domain;return t.ticks=function(t){var r=e();return function(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const i=e<t,[n,s,a]=i?Kx(e,t,r):Kx(t,e,r);if(!(s>=n))return[];const o=s-n+1,c=new Array(o);if(i)if(a<0)for(let t=0;t<o;++t)c[t]=(s-t)/-a;else for(let t=0;t<o;++t)c[t]=(s-t)*a;else if(a<0)for(let t=0;t<o;++t)c[t]=(n+t)/-a;else for(let t=0;t<o;++t)c[t]=(n+t)*a;return c}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var i=e();return mN(i[0],i[i.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var i,n,s=e(),a=0,o=s.length-1,c=s[a],l=s[o],u=10;for(l<c&&(n=c,c=l,l=n,n=a,a=o,o=n);u-- >0;){if((n=Px(c,l,r))===i)return s[a]=c,s[o]=l,e(s);if(n>0)c=Math.floor(c/n)*n,l=Math.ceil(l/n)*n;else{if(!(n<0))break;c=Math.ceil(c*n)/n,l=Math.floor(l*n)/n}i=n}return t},t}function yN(){var t=fN()(dN,dN);return t.copy=function(){return e=t,yN().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},cN.apply(t,arguments),bN(t)}function vN(t){return function(){return t}}function QN(t){this._context=t}function BN(t){return new QN(t)}function UN(t){return t[0]}function IN(t){return t[1]}function FN(t,e){var r=vN(!0),i=null,n=BN,s=null,a=function(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new _S(e)}(o);function o(o){var c,l,u,d=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,h=!1;for(null==i&&(s=n(u=a())),c=0;c<=d;++c)!(c<d&&r(l=o[c],c,o))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+t(l,c,o),+e(l,c,o));if(u)return s=null,u+""||null}return t="function"==typeof t?t:void 0===t?UN:vN(t),e="function"==typeof e?e:void 0===e?IN:vN(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:vN(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:vN(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:vN(!!t),o):r},o.curve=function(t){return arguments.length?(n=t,null!=i&&(s=n(i)),o):n},o.context=function(t){return arguments.length?(null==t?i=s=null:s=n(i=t),o):i},o}function CN(t,e,r){this.k=t,this.x=e,this.y=r}QN.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},CN.prototype={constructor:CN,scale:function(t){return 1===t?this:new CN(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new CN(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},CN.prototype;class AN extends Hx{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=UR(t,"#ffffff")(.75),e.light50=UR(t,"#ffffff")(.5),e.light25=UR(t,"#ffffff")(.25),e.grey=t,e.dark25=UR(t,"#000000")(.25),e.dark50=UR(t,"#000000")(.5),e.dark75=UR(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,i=this.shadows.opacityPenumbra+this.shadows.opacityBoost,n=this.shadows.opacityAmbient+this.shadows.opacityBoost,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,c=this.shadows.mapUmbra[t],l=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${s}, ${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${a}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=AN.shadows,e=t.elevations.map(e=>Qx`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?Qx``:Qx`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?Qx``:Qx`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?Qx``:Qx`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return Qx`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return kA`
      :host {
        ---shadow-0: var(--shadow-0, ${MA(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${MA(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${MA(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${MA(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${MA(this.greys.white)});
        ---color-border: var(--color-border, ${MA(this.greys.light75)});
        ---color-text: var(--color-text, ${MA(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${MA(this.greys.white)});
        ---color-link: var(--color-link, ${MA(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${MA(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${MA(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${MA(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${MA(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${MA(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${MA(this.greys.dark75)});

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
    `}}customElements.define("decidables-button",class extends AN{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xN=t=>t??Ux;customElements.define("decidables-slider",class extends AN{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${xN(this.rangeMin)} max=${xN(this.rangeMax)} step=${xN(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?vx`
            <div class="datalist">
              <div class="option">${xN(this.max)}</div>
              <div class="option">${xN(this.min)}</div>
            </div>
          `:vx``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${xN(this.min)} max=${xN(this.max)} step=${xN(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}});customElements.define("decidables-spinner",class extends AN{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${xN(this.min)} max=${xN(this.max)} step=${xN(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});customElements.define("decidables-switch",class extends AN{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,kA`
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
        `]}render(){return vx`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}});customElements.define("decidables-toggle",class extends AN{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}});function EN(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("decidables-toggle-option",class extends AN{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}});var wN={a:"#e41a1c",z:"#377eb8",v:"#ff7f00",t0:"#f781bf",s:"#999999",left:"#f032e6",right:"#10dbc9",correct:"#4daf4a",error:"#984ea3",nr:"#cccccc"};class RN extends AN{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return wN}static get lights(){return Object.keys(RN.colors).reduce((t,e)=>(t[e]=UR(RN.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(RN.colors).reduce((t,e)=>(t[e]=UR(RN.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,kA`
        :host {
          /* Declare base colors */
          ${MA(Object.keys(RN.colors).map(t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`).join("\n"))}

          /* Declare light colors */
          ${MA(Object.keys(RN.colors).map(t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`).join("\n"))}

          /* Declare dark colors */
          ${MA(Object.keys(RN.colors).map(t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`).join("\n"))}
        }
      `]}}customElements.define("accumulable-control",class extends RN{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},resample:{attribute:"resample",type:Boolean,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.resample=!1,this.duration=void 0,this.coherence=void 0,this.colors=["none","measure","outcome","all"],this.color=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}doResample(){this.dispatchEvent(new CustomEvent("accumulable-control-resample",{detail:{},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-color",{detail:{color:this.color},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("accumulable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("accumulable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("accumulable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <div class="holder">
        ${null!=this.trials?vx`<decidables-slider class="trials" min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:vx``}
        ${this.resample?vx`
            <div class="buttons">
              ${this.resample?vx`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`:vx``}
            </div>
          `:vx``}
        ${null!=this.duration?vx`<decidables-slider class="duration" min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:vx``}
        ${null!=this.coherence?vx`<decidables-slider class="coherence" min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:vx``}
        ${null!=this.color?vx`
            <decidables-toggle class="color" @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${"measure"===this.color}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:vx``}
        ${this.run||this.pause||this.reset?vx`
            <div class="buttons">
              ${this.run?vx`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:vx``}
              ${this.pause?vx`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:vx``}
              ${this.reset?vx`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:vx``}
            </div>
          `:vx``}
      </div>`}});class SN{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t},{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const i=t.reduce((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t},{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(i.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(i.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(i.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,i=SN.s.DEFAULT){const n=t*e,s=Math.exp(-2*r*t/i**2);return(s-Math.exp(-2*r*n/i**2))/(s-1)}static azv2pC(t,e,r,i=SN.s.DEFAULT){return SN.azv2pE(t,1-e,-r,i)}static azvt02m(t,e,r,i,n=SN.s.DEFAULT){const s=t*e,a=Math.exp(-2*r*t/n**2)-1;return i+1e3*(-s/r+t/r*((Math.exp(-2*r*s/n**2)-1)/a))}static azv2sd(t,e,r,i=SN.s.DEFAULT){const n=t*e,s=Math.exp(-2*r*t/i**2)-1,a=Math.exp(-2*r*n/i**2)-1,o=(-r*t**2*(a+4)*a/s**2+((-3*r*t**2+4*r*n*t+i**2*t)*a+4*r*n*t)/s-i**2*n)/r**3;return 1e3*Math.sqrt(o)}static azvt02mE(t,e,r,i,n=SN.s.DEFAULT){function s(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const a=t*e;return i+1e3*((a*(s(a-t,t)+s(0,a))+2*t*s(a,0))/(r*s(a,t)*s(-t,0)))}static azv2sdE(t,e,r,i=SN.s.DEFAULT){function n(t,e){return Math.exp(2*r*e/i**2)-Math.exp(2*r*t/i**2)}const s=t*e,a=-2*t*n(0,s)*(2*r*t*n(s,2*t)+i**2*n(0,t)*n(s,t))*Math.exp(2*r*t/i**2)/(r**3*n(0,t)**2*n(s,t)**2)+(4*r*s*(2*t-s)*Math.exp(2*r*(s+t)/i**2)+s*i**2*n(2*s,2*t))/(r**3*n(s,t)**2);return 1e3*Math.sqrt(a)}static azvt02mC(t,e,r,i,n=SN.s.DEFAULT){return SN.azvt02mE(t,1-e,-r,i,n)}static azv2sdC(t,e,r,i=SN.s.DEFAULT){return SN.azv2sdE(t,1-e,-r,i)}static tazv2gE(t,e,r,i,n=SN.s.DEFAULT){if(!t)return 0;const s=e*r,a=Math.PI*n**2/e**2*Math.exp(-s*i/n**2);let o=0,c=0,l=0;do{o+=1,c=o*Math.sin(Math.PI*s*o/e)*Math.exp(-.5*(i**2/n**2+Math.PI**2*o**2*n**2/e**2)*t),l+=c}while(o<200);return a*l}static tazv2gC(t,e,r,i,n=SN.s.DEFAULT){return SN.tazv2gE(t,e,1-r,-i,n)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:i}){function n(t){return Math.log(t/(1-t))}const s=(e/1e3)**2,a=r/1e3,o=i**2,c=n(t),l=c*(c*t**2-c*t+t-.5)/s,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*i*l**(1/4),d=o*n(t)/u,h=-u*d/o,g=d/(2*u)*(1-Math.exp(h))/(1+Math.exp(h));return{v:u,a:d,t0:1e3*(a?a-g:null),s:i}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}customElements.define("accumulable-response",class extends RN{static get properties(){return{feedback:{attribute:"feedback",type:Boolean,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedback=!1,this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.correctPayoff=0,this.errorPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["left","right"],this.signal=void 0,this.responses=["left","right"],this.response=void 0,this.outcomes=["correct","error","nr"],this.outcome=void 0,this.startTime=void 0,this.rt=void 0,this.data={},this.trials=[],this.alignState()}get trialPayoff(){switch(this.outcome){case"correct":return this.correctPayoff;case"error":return this.errorPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.data.correctCount*this.correctPayoff+this.data.errorCount*this.errorPayoff+this.data.nrCount*this.nrPayoff}alignState(){this.data=SN.trials2stats(this.trials)}start(t,e){this.startTime=Date.now(),this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0,this.rt=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.rt=void 0,this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState())}left(){this.responded("left")}right(){this.responded("right")}responded(t){this.rt=Date.now()-this.startTime,this.state="feedback",this.response=t,this.signal===this.response?this.outcome="correct":this.signal!==this.response&&(this.outcome="error"),this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,data:this.data,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.rt=void 0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.trials=[],this.alignState()}keydown(t){"waiting"===this.state&&("ArrowLeft"===t.key?(this.responded("left"),t.preventDefault()):"ArrowRight"===t.key&&(this.responded("right"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,kA`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return vx`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${"response "+("feedback"===this.state&&"left"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${"response "+("feedback"===this.state&&"right"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${this.trial||this.feedback||"total"===this.payoff?vx`
            <div class="feedbacks">
              ${this.trial?vx`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:vx``}
              ${this.feedback?vx`
                  <div class=${`feedback ${"feedback"===this.state&&this.feedback?this.outcome:""}`}>
                    ${"feedback"===this.state&&this.feedback?"correct"===this.outcome?vx`<span class="outcome">Correct</span>`:"error"===this.outcome?vx`<span class="outcome">Error</span>`:vx`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?vx``:vx`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:vx``}
              ${"total"===this.payoff?vx`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:vx``}
            </div>`:vx``}
      </div>`}});function NN(t,e,r){var i=e,n=function(t){return atob(t)}(t),s=n.indexOf("\n",10)+1,a=n.substring(s)+"//# sourceMappingURL="+i,o=new Blob([a],{type:"application/javascript"});return URL.createObjectURL(o)}function LN(t,e,r){var i;return function(r){return i=i||NN(t,e),new Worker(i,r)}}customElements.define("accumulable-table",class extends RN{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",type:Boolean,reflect:!0},color:{attribute:"color",type:String,reflect:!0},correctCount:{attribute:"correct-count",type:Number,reflect:!0},errorCount:{attribute:"error-count",type:Number,reflect:!0},nrCount:{attribute:"nr-count",type:Number,reflect:!0},accuracy:{attribute:"accuracy",type:Number,reflect:!0},correctMeanRT:{attribute:"correct-mean-rt",type:Number,reflect:!0},errorMeanRT:{attribute:"error-mean-rt",type:Number,reflect:!0},meanRT:{attribute:"mean-rt",type:Number,reflect:!0},correctSDRT:{attribute:"correct-sd-rt",type:Number,reflect:!0},errorSDRT:{attribute:"error-sd-rt",type:Number,reflect:!0},sdRT:{attribute:"sd-rt",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0}}}constructor(){super(),this.numeric=!1,this.summary=!1,this.colors=["none","measure","outcome","all"],this.color="all",this.payoff=!1,this.correctPayoff=void 0,this.errorPayoff=void 0,this.nrPayoff=void 0,this.correctCount=NaN,this.errorCount=NaN,this.nrCount=NaN,this.accuracy=NaN,this.correctMeanRT=NaN,this.errorMeanRT=NaN,this.meanRT=NaN,this.correctSDRT=NaN,this.errorSDRT=NaN,this.sdRT=NaN}sendEvent(){this.dispatchEvent(new CustomEvent("accumulable-table-change",{detail:{correctCount:this.correctCount,errorCount:this.errorCount,nrCount:this.nrCount,accuracy:this.accuracy,correctMeanRT:this.correctMeanRT,errorMeanRT:this.errorMeanRT,meanRT:this.meanRT,correctSDRT:this.correctSDRT,errorSDRT:this.errorSDRT,sdRT:this.sdRT},bubbles:!0}))}correctCountInput(t){this.correctCount=parseInt(t.target.value,10),this.sendEvent()}errorCountInput(t){this.errorCount=parseInt(t.target.value,10),this.sendEvent()}accuracyInput(t){this.accuracy=parseFloat(t.target.value),this.sendEvent()}correctMeanRTInput(t){this.correctMeanRT=parseFloat(t.target.value),this.sendEvent()}errorMeanRTInput(t){this.errorMeanRT=parseFloat(t.target.value),this.sendEvent()}meanRTInput(t){this.meanRT=parseFloat(t.target.value),this.sendEvent()}correctSDRTInput(t){this.correctSDRT=parseFloat(t.target.value),this.sendEvent()}errorSDRTInput(t){this.errorSDRT=parseFloat(t.target.value),this.sendEvent()}sdRTInput(t){this.sdRT=parseFloat(t.target.value),this.sendEvent()}static get styles(){return[super.styles,kA`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,i,n,s,a,o,c,l,u;return this.numeric?(r=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?vx`<span class="payoff">${e(this.correctPayoff)}</span>`:vx``}
        </decidables-spinner>
      `,i=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?vx`<span class="payoff">${e(this.errorPayoff)}</span>`:vx``}
        </decidables-spinner>
      `,n=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,s=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,a=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,o=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `,c=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `,l=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `,u=vx`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `):(r=vx`<span>Correct Count</span>
        ${this.payoff?vx`<span class="payoff">${e(this.correctPayoff)}</span>`:vx``}`,i=vx`<span>Error Count</span>
        ${this.payoff?vx`<span class="payoff">${e(this.errorPayoff)}</span>`:vx``}`,n=vx`<span>Accuracy</span>`,s=vx`<span>Correct Mean RT</span>`,a=vx`<span>Error Mean RT</span>`,o=vx`<span>Mean RT</span>`,c=vx`<span>Correct SD RT</span>`,l=vx`<span>Error SD RT</span>`,u=vx`<span>SD RT</span>`),vx`
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
            ${this.summary?vx`
                <th class="th th-main" scope="col">
                  Overall
                </th>`:vx``}
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
              ${i}
            </td>
            ${this.summary?vx`
                <td class="td td-summary overall proportion-correct">
                  ${n}
                </td>`:vx``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Mean RT
            </th>
            <td class="td td-data correct mean-rt">
              ${s}
            </td>
            <td class="td td-data error mean-rt">
              ${a}
            </td>
            ${this.summary?vx`
                <td class="td td-summary overall mean-rt">
                  ${o}
                </td>`:vx``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              SD RT
            </th>
            <td class="td td-data correct sd-rt">
              ${c}
            </td>
            <td class="td td-data error sd-rt">
              ${l}
            </td>
            ${this.summary?vx`
                <td class="td td-summary overall sd-rt">
                  ${u}
                </td>`:vx``}
          </tr>
        </tbody>
      </table>`}});var DN=LN("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uIFswLCBJbmZpbml0eSkKICAgICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhICgwLCAxKQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpCiAgICAgIHQwID0gbm9uLWRlY2lzaW9uIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgKDAsIEluZmluaXR5KQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpIFswLCBJbmZpbml0eSkKCiAgICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKSBbMCwgSW5maW5pdHkpCgogICAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6CiAgICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHMKICAgICAgcEMgPSBwcm9wb3J0aW9uIG9mIGNvcnJlY3QgdHJpYWxzCiAgICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUMgPSBtZWFuIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RDID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCgogICAgRXF1YXRpb25zOgogICAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICAgIFN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKQogICAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNykKICAqLwogIGNsYXNzIERETU1hdGggewogICAgc3RhdGljIHMgPSB7CiAgICAgIERFRkFVTFQ6IDEKICAgIH07CiAgICBzdGF0aWMgYSA9IHsKICAgICAgREVGQVVMVDogMS4yLAogICAgICBNSU46IDAuMDEsCiAgICAgIE1BWDogMi4wLAogICAgICBTVEVQOiAwLjAxLAogICAgICBKVU1QOiAwLjEKICAgIH07CiAgICBzdGF0aWMgeiA9IHsKICAgICAgREVGQVVMVDogMC41NSwKICAgICAgTUlOOiAwLjAxLAogICAgICBNQVg6IDAuOTksCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB2ID0gewogICAgICBERUZBVUxUOiAxLjUsCiAgICAgIE1JTjogMC4wMSwKICAgICAgTUFYOiA1LjAsCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB0MCA9IHsKICAgICAgREVGQVVMVDogMTUwLAogICAgICBNSU46IDAsCiAgICAgIE1BWDogNTAwLAogICAgICBTVEVQOiAxLAogICAgICBKVU1QOiAxMAogICAgfTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0ge307CgogICAgICAvLyBGaXJzdC1vcmRlciBzdW1zCiAgICAgIGNvbnN0IHN1bXMgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JDb3VudCArPSAxOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IubnJDb3VudCArPSAxOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIGNvcnJlY3RDb3VudDogMCwKICAgICAgICBlcnJvckNvdW50OiAwLAogICAgICAgIG5yQ291bnQ6IDAsCiAgICAgICAgY29ycmVjdFJUU3VtOiAwLAogICAgICAgIGVycm9yUlRTdW06IDAKICAgICAgfSk7CgogICAgICAvLyBGaXJzdC1vcmRlciBzdGF0cwogICAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JDb3VudCA9IHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubnJDb3VudCA9IHN1bXMubnJDb3VudDsKICAgICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7CiAgICAgIHN0YXRzLmNvcnJlY3RNZWFuUlQgPSBzdW1zLmNvcnJlY3RSVFN1bSAvIHN1bXMuY29ycmVjdENvdW50OwogICAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubWVhblJUID0gKHN1bXMuY29ycmVjdFJUU3VtICsgc3Vtcy5lcnJvclJUU3VtKSAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zMiA9IHRyaWFscy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4gewogICAgICAgIHN3aXRjaCAodHJpYWwub3V0Y29tZSkgewogICAgICAgICAgY2FzZSAnY29ycmVjdCc6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmNvcnJlY3RNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yU1MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMuZXJyb3JNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgc3M6IDAsCiAgICAgICAgY29ycmVjdFNTOiAwLAogICAgICAgIGVycm9yU1M6IDAKICAgICAgfSk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdFNEUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmNvcnJlY3RTUyAvIChzdGF0cy5jb3JyZWN0Q291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLmVycm9yU0RSVCA9IHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmVycm9yU1MgLyAoc3RhdHMuZXJyb3JDb3VudCAtIDEpKSA6IE5hTjsKICAgICAgc3RhdHMuc2RSVCA9IHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLnNzIC8gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHJldHVybiBzdGF0czsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZQogICAgc3RhdGljIGF6djJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMik7CiAgICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gKC12ICogYSAqKiAyICogKFogKyA0KSAqIFogLyBBICoqIDIgKyAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBIC0gcyAqKiAyICogelByaW1lKSAvIHYgKiogMzsKICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwOwogICAgfQoKICAgIC8vIE1lYW4gRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZ0MDJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MDJtQyhhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenYyc2RDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGlmICghdCkgcmV0dXJuIDA7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBiYXNlID0gTWF0aC5QSSAqIHMgKiogMiAvIGEgKiogMiAqIE1hdGguZXhwKC16UHJpbWUgKiB2IC8gcyAqKiAyKTsKICAgICAgbGV0IGsgPSAwOwogICAgICBsZXQgdGVybSA9IDA7CiAgICAgIGxldCBzdW0gPSAwOwogICAgICBkbyB7CiAgICAgICAgayArPSAxOwogICAgICAgIHRlcm0gPSBrICogTWF0aC5zaW4oTWF0aC5QSSAqIHpQcmltZSAqIGsgLyBhKSAqIE1hdGguZXhwKC0wLjUgKiAodiAqKiAyIC8gcyAqKiAyICsgTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyIC8gYSAqKiAyKSAqIHQpOwogICAgICAgIHN1bSArPSB0ZXJtOwogICAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDSwoKICAgICAgcmV0dXJuIGJhc2UgKiBzdW07CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBDb3JyZWN0IFJUCiAgICBzdGF0aWMgdGF6djJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3Jhb3VsLnNvY3NjaS51dmEubmwvRVoyL0VaMl9uZXcuaHRtbAogICAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlcwogICAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXMKICAgIC8vICAgIHBDIC0gUHJvcG9ydGlvbiBjb3JyZWN0CiAgICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXMKICAgIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtcwogICAgLy8gICAgcyAtIGRpZmZ1c2lvbiBzdGFuZGFyZCBkZXZpYXRpb24KICAgIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzCiAgICBzdGF0aWMgZGF0YTJleih7CiAgICAgIGFjY3VyYWN5OiBwQywKICAgICAgc2RSVDogc2QsCiAgICAgIG1lYW5SVDogbSwKICAgICAgcwogICAgfSkgewogICAgICBmdW5jdGlvbiBzaWduKHIpIHsKICAgICAgICByZXR1cm4gciA+IDAgPyAxIDogciA9PT0gMCA/IDAgOiAtMTsKICAgICAgfQogICAgICBmdW5jdGlvbiBsb2dpdChwKSB7CiAgICAgICAgcmV0dXJuIE1hdGgubG9nKHAgLyAoMSAtIHApKTsKICAgICAgfQogICAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyOwogICAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDsKICAgICAgY29uc3QgczIgPSBzICoqIDI7CiAgICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7CiAgICAgIGNvbnN0IHggPSBsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpIC8gdnJ0OwogICAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpOwogICAgICBjb25zdCBhID0gczIgKiBsb2dpdChwQykgLyB2OwogICAgICBjb25zdCB5ID0gLXYgKiBhIC8gczI7CiAgICAgIGNvbnN0IG1kdCA9IGEgLyAoMiAqIHYpICogKDEgLSBNYXRoLmV4cCh5KSkgLyAoMSArIE1hdGguZXhwKHkpKTsKICAgICAgY29uc3QgdDAgPSBtcnQgPyBtcnQgLSBtZHQgOiBudWxsOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWQKCiAgICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7CiAgICAgIHJldHVybiB7CiAgICAgICAgdiwKICAgICAgICBhLAogICAgICAgIHQwOiB0MFByaW1lLAogICAgICAgIHMKICAgICAgfTsKICAgIH0KICAgIHN0YXRpYyBkYXRhMmV6MigpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7CiAgICB9CiAgfQoKICAvLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXMKCiAgLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogWyJvZmYiLCAic2VsZiJdICovCgogIHNlbGYub25tZXNzYWdlID0gZXZlbnQgPT4gewogICAgY29uc3QgcGFyYW1zID0gRERNTWF0aC5kYXRhMmV6KHsKICAgICAgLi4uZXZlbnQuZGF0YSwKICAgICAgczogRERNTWF0aC5zLkRFRkFVTFQKICAgIH0pOwoKICAgIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIQogICAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTsKICAgIGNvbnN0IHogPSAhaXNOYU4ocGFyYW1zLnopID8gcGFyYW1zLnogOiAwLjU7CiAgICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xOwogICAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDsKICAgIGNvbnN0IHMgPSAhaXNOYU4ocGFyYW1zLnMpID8gcGFyYW1zLnMgOiBERE1NYXRoLnMuREVGQVVMVDsKICAgIGNvbnN0IHByZWRpY3RlZCA9IHsKICAgICAgYWNjdXJhY3k6IERETU1hdGguYXp2MnBDKGEsIHosIHYpLAogICAgICBjb3JyZWN0TWVhblJUOiBERE1NYXRoLmF6dnQwMm1DKGEsIHosIHYsIHQwKSwKICAgICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLAogICAgICBtZWFuUlQ6IERETU1hdGguYXp2dDAybShhLCB6LCB2LCB0MCksCiAgICAgIGNvcnJlY3RTRFJUOiBERE1NYXRoLmF6djJzZEMoYSwgeiwgdiksCiAgICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLAogICAgICBzZFJUOiBERE1NYXRoLmF6djJzZChhLCB6LCB2KQogICAgfTsKICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICBwYXJhbXM6IHsKICAgICAgICBhLAogICAgICAgIHosCiAgICAgICAgdiwKICAgICAgICB0MCwKICAgICAgICBzCiAgICAgIH0sCiAgICAgIHByZWRpY3RlZAogICAgfSk7CiAgfTsKCn0pKCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWRkbS1maXQtd29ya2VyLmpzLm1hcAoK","data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb24gWzAsIEluZmluaXR5KVxuICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYSAoMCwgMSlcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKSAoMCwgSW5maW5pdHkpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKSBbMCwgSW5maW5pdHkpXG5cbiAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykgWzAsIEluZmluaXR5KVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNylcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSB7XG4gICAgREVGQVVMVDogMSxcbiAgfTtcblxuICBzdGF0aWMgYSA9IHtcbiAgICBERUZBVUxUOiAxLjIsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMi4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB6ID0ge1xuICAgIERFRkFVTFQ6IDAuNTUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMC45OSxcbiAgICBTVEVQOiAwLjAxLFxuICAgIEpVTVA6IDAuMSxcbiAgfTtcblxuICBzdGF0aWMgdiA9IHtcbiAgICBERUZBVUxUOiAxLjUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogNS4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB0MCA9IHtcbiAgICBERUZBVUxUOiAxNTAsXG4gICAgTUlOOiAwLFxuICAgIE1BWDogNTAwLFxuICAgIFNURVA6IDEsXG4gICAgSlVNUDogMTAsXG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMik7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKTtcblxuICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTtcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gTWVhbiBPdmVyYWxsIFJUXG4gIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgdmFyaWFuY2UgPSAoXG4gICAgICAoXG4gICAgICAgICgtdiAqIGEgKiogMiAqIChaICsgNCkgKiBaKSAvIEEgKiogMlxuICAgICAgKSArIChcbiAgICAgICAgKCgtMyAqIHYgKiBhICoqIDIgKyA0ICogdiAqIHpQcmltZSAqIGEgKyBzICoqIDIgKiBhKSAqIFogKyA0ICogdiAqIHpQcmltZSAqIGEpIC8gQVxuICAgICAgKSAtIChcbiAgICAgICAgcyAqKiAyICogelByaW1lXG4gICAgICApXG4gICAgKSAvIHYgKiogMztcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKVxuICAgICAgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7XG4gICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7XG4gIH1cblxuICAvLyBTRCBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2MnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2MmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgdGVybSA9IDA7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZG8ge1xuICAgICAgayArPSAxO1xuXG4gICAgICB0ZXJtID0ga1xuICAgICAgICAqIE1hdGguc2luKChNYXRoLlBJICogelByaW1lICogaykgLyBhKVxuICAgICAgICAqIE1hdGguZXhwKC0wLjUgKiAoKHYgKiogMiAvIHMgKiogMikgKyAoKE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMikgLyBhICoqIDIpKSAqIHQpO1xuXG4gICAgICBzdW0gKz0gdGVybTtcbiAgICB9IHdoaWxlIChrIDwgMjAwKTsgLy8gPz8gSEFDS1xuXG4gICAgcmV0dXJuIGJhc2UgKiBzdW07XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIENvcnJlY3QgUlRcbiAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgcmV0dXJuIERETU1hdGgudGF6djJnRSh0LCBhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vcmFvdWwuc29jc2NpLnV2YS5ubC9FWjIvRVoyX25ldy5odG1sXG4gIC8vIEVaLWZ1bmN0aW9uIGZvciBzdGFydGluZyB2YWx1ZXNcbiAgLy8gaW5wdXQ6IG9iaiAtIE9iamVjdCB3aXRoIHByb3BlcnRpZXNcbiAgLy8gICAgcEMgLSBQcm9wb3J0aW9uIGNvcnJlY3RcbiAgLy8gICAgc2QgLSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBSVCdzIGluIG1zXG4gIC8vICAgIG0gLSBzYW1wbGUgbWVhbiBvZiB0aGUgUlQncyBpbiBtc1xuICAvLyAgICBzIC0gZGlmZnVzaW9uIHN0YW5kYXJkIGRldmlhdGlvblxuICAvLyByZXR1cm5zOiBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHYsIGEsIGFuZCB0MCwgY29udGFpbmluZyBFWi1lc3RpbWF0ZXMgb2YgdGhlc2UgcGFyYW1ldGVyc1xuICBzdGF0aWMgZGF0YTJleih7XG4gICAgYWNjdXJhY3k6IHBDLFxuICAgIHNkUlQ6IHNkLFxuICAgIG1lYW5SVDogbSxcbiAgICBzLFxuICB9KSB7XG4gICAgZnVuY3Rpb24gc2lnbihyKSB7XG4gICAgICByZXR1cm4gKChyID4gMCkgPyAxIDogKChyID09PSAwKSA/IDAgOiAtMSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ2l0KHApIHtcbiAgICAgIHJldHVybiBNYXRoLmxvZyhwIC8gKDEgLSBwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdnJ0ID0gKHNkIC8gMTAwMCkgKiogMjtcbiAgICBjb25zdCBtcnQgPSBtIC8gMTAwMDtcblxuICAgIGNvbnN0IHMyID0gcyAqKiAyO1xuICAgIGNvbnN0IGwgPSBsb2dpdChwQyk7XG4gICAgY29uc3QgeCA9IChsICogKGwgKiBwQyAqKiAyIC0gbCAqIHBDICsgcEMgLSAwLjUpKSAvIHZydDtcbiAgICBjb25zdCB2ID0gc2lnbihwQyAtIDAuNSkgKiBzICogeCAqKiAoMSAvIDQpO1xuICAgIGNvbnN0IGEgPSAoczIgKiBsb2dpdChwQykpIC8gdjtcbiAgICBjb25zdCB5ID0gKC12ICogYSkgLyBzMjtcbiAgICBjb25zdCBtZHQgPSAoKGEgLyAoMiAqIHYpKSAqICgxIC0gTWF0aC5leHAoeSkpKSAvICgxICsgTWF0aC5leHAoeSkpO1xuICAgIGNvbnN0IHQwID0gKG1ydCA/IG1ydCAtIG1kdCA6IG51bGwpOyAvLyBjb21wdXRlIFRlciBvbmx5IGlmIE1SVCB3YXMgcHJvdmlkZWRcblxuICAgIGNvbnN0IHQwUHJpbWUgPSB0MCAqIDEwMDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHYsXG4gICAgICBhLFxuICAgICAgdDA6IHQwUHJpbWUsXG4gICAgICBzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZGF0YTJlejIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhMmV6MiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cbn1cbiIsIlxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgRERNTWF0aCBmcm9tICcuL2RkbS1tYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgRERNTWF0aDtcbiIsIi8qIGVzbGludCBuby1yZXN0cmljdGVkLWdsb2JhbHM6IFtcIm9mZlwiLCBcInNlbGZcIl0gKi9cblxuaW1wb3J0IERETU1hdGggZnJvbSAnQGRlY2lkYWJsZXMvYWNjdW11bGFibGUtbWF0aCc7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IERETU1hdGguZGF0YTJleih7Li4uZXZlbnQuZGF0YSwgczogRERNTWF0aC5zLkRFRkFVTFR9KTtcblxuICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISFcbiAgY29uc3QgYSA9ICFpc05hTihwYXJhbXMuYSkgPyBwYXJhbXMuYSA6IDEuNTtcbiAgY29uc3QgeiA9ICFpc05hTihwYXJhbXMueikgPyBwYXJhbXMueiA6IDAuNTtcbiAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDAuMTtcbiAgY29uc3QgdDAgPSAhaXNOYU4ocGFyYW1zLnQwKSA/IHBhcmFtcy50MCA6IDEwMDtcbiAgY29uc3QgcyA9ICFpc05hTihwYXJhbXMucykgPyBwYXJhbXMucyA6IERETU1hdGgucy5ERUZBVUxUO1xuXG4gIGNvbnN0IHByZWRpY3RlZCA9IHtcbiAgICBhY2N1cmFjeTogRERNTWF0aC5henYycEMoYSwgeiwgdiksXG4gICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksXG4gICAgZXJyb3JNZWFuUlQ6IERETU1hdGguYXp2dDAybUUoYSwgeiwgdiwgdDApLFxuICAgIG1lYW5SVDogRERNTWF0aC5henZ0MDJtKGEsIHosIHYsIHQwKSxcbiAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLFxuICAgIGVycm9yU0RSVDogRERNTWF0aC5henYyc2RFKGEsIHosIHYpLFxuICAgIHNkUlQ6IERETU1hdGguYXp2MnNkKGEsIHosIHYpLFxuICB9O1xuXG4gIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIHBhcmFtczoge1xuICAgICAgYSwgeiwgdiwgdDAsIHMsXG4gICAgfSxcbiAgICBwcmVkaWN0ZWQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJERE1NYXRoIiwicyIsIkRFRkFVTFQiLCJhIiwiTUlOIiwiTUFYIiwiU1RFUCIsIkpVTVAiLCJ6IiwidiIsInQwIiwidHJpYWxzMnN0YXRzIiwidHJpYWxzIiwic3RhdHMiLCJzdW1zIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ0cmlhbCIsIm91dGNvbWUiLCJjb3JyZWN0Q291bnQiLCJjb3JyZWN0UlRTdW0iLCJydCIsImVycm9yQ291bnQiLCJlcnJvclJUU3VtIiwibnJDb3VudCIsImFjY3VyYWN5IiwiY29ycmVjdE1lYW5SVCIsImVycm9yTWVhblJUIiwibWVhblJUIiwic3VtczIiLCJzcyIsImNvcnJlY3RTUyIsImVycm9yU1MiLCJjb3JyZWN0U0RSVCIsIk1hdGgiLCJzcXJ0IiwiTmFOIiwiZXJyb3JTRFJUIiwic2RSVCIsImF6djJwRSIsInpQcmltZSIsIkEiLCJleHAiLCJaIiwiYXp2MnBDIiwiYXp2dDAybSIsIm1lYW4iLCJhenYyc2QiLCJ2YXJpYW5jZSIsImF6dnQwMm1FIiwicGhpIiwieCIsInkiLCJhenYyc2RFIiwiYXp2dDAybUMiLCJhenYyc2RDIiwidGF6djJnRSIsInQiLCJiYXNlIiwiUEkiLCJrIiwidGVybSIsInN1bSIsInNpbiIsInRhenYyZ0MiLCJkYXRhMmV6IiwicEMiLCJzZCIsIm0iLCJzaWduIiwiciIsImxvZ2l0IiwicCIsImxvZyIsInZydCIsIm1ydCIsInMyIiwibCIsIm1kdCIsInQwUHJpbWUiLCJkYXRhMmV6MiIsIkVycm9yIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGFyYW1zIiwiZGF0YSIsImlzTmFOIiwicHJlZGljdGVkIiwicG9zdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7OztFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNlLE1BQU1BLE9BQU8sQ0FBQztFQUMzQixFQUFBLE9BQU9DLENBQUMsR0FBRztFQUNUQyxJQUFBQSxPQUFPLEVBQUU7S0FDVjtFQUVELEVBQUEsT0FBT0MsQ0FBQyxHQUFHO0VBQ1RELElBQUFBLE9BQU8sRUFBRSxHQUFHO0VBQ1pFLElBQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1RDLElBQUFBLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElBQUFBLElBQUksRUFBRSxJQUFJO0VBQ1ZDLElBQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPQyxDQUFDLEdBQUc7RUFDVE4sSUFBQUEsT0FBTyxFQUFFLElBQUk7RUFDYkUsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsSUFBSSxFQUFFLElBQUk7RUFDVkMsSUFBQUEsSUFBSSxFQUFFO0tBQ1A7RUFFRCxFQUFBLE9BQU9FLENBQUMsR0FBRztFQUNUUCxJQUFBQSxPQUFPLEVBQUUsR0FBRztFQUNaRSxJQUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNUQyxJQUFBQSxHQUFHLEVBQUUs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");customElements.define("ddm-fit",class extends RN{static get properties(){return{}}constructor(){super(),this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.observed={},this.predicted={},this.working=!1,this.queued=!1,this.worker=new DN,this.worker.onmessage=t=>{this.working=!1,this.predicted=t.data.predicted,this.a=t.data.params.a,this.z=t.data.params.z,this.v=t.data.params.v,this.t0=t.data.params.t0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("ddm-fit-update",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0},bubbles:!0})),this.queued&&this.fit()},this.fit()}fit(){this.working?this.queued=!0:(this.worker.postMessage(this.observed),this.working=!0,this.queued=!1)}clear(){this.observed={},this.fit()}set(t){this.observed=structuredClone(t),this.fit()}static get styles(){return[super.styles,kA`
        :host {
          display: inline-block;
        }
      `]}render(){return vx`
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
    `}});customElements.define("ddm-parameters",class extends RN{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.a=void 0,this.z=void 0,this.v=void 0,this.t0=void 0}setBoundarySeparation(t){this.a=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-a",{detail:{a:this.a},bubbles:!0}))}setStartingPoint(t){this.z=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-z",{detail:{z:this.z},bubbles:!0}))}setDriftRate(t){this.v=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-v",{detail:{v:this.v},bubbles:!0}))}setNondecisionTime(t){this.t0=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-t0",{detail:{t0:this.t0},bubbles:!0}))}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <div class="holder">
        ${null!=this.a?vx`<decidables-slider class="a"
            ?disabled=${!this.interactive}
            scale
            min=${SN.a.MIN}
            max=${SN.a.MAX}
            step=${SN.a.STEP}
            .value=${+this.a.toFixed(2)}
            @change=${this.setBoundarySeparation.bind(this)}
            @input=${this.setBoundarySeparation.bind(this)}
          ><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>`:vx``}
        ${null!=this.z?vx`<decidables-slider class="z"
            ?disabled=${!this.interactive}
            scale
            min=${SN.z.MIN}
            max=${SN.z.MAX}
            step=${SN.z.STEP}
            .value=${+this.z.toFixed(2)}
            @change=${this.setStartingPoint.bind(this)}
            @input=${this.setStartingPoint.bind(this)}
          ><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>`:vx``}
        ${null!=this.v?vx`<decidables-slider class="v"
            ?disabled=${!this.interactive}
            scale
            min=${SN.v.MIN}
            max=${SN.v.MAX}
            step=${SN.v.STEP}
            .value=${+this.v.toFixed(2)}
            @change=${this.setDriftRate.bind(this)}
            @input=${this.setDriftRate.bind(this)}
          ><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>`:vx``}
        ${null!=this.t0?vx`<decidables-slider class="t0" 
            ?disabled=${!this.interactive}
            scale
            min=${SN.t0.MIN}
            max=${SN.t0.MAX}
            step=${SN.t0.STEP}
            .value=${+this.t0.toFixed(0)}
            @change=${this.setNondecisionTime.bind(this)}
            @input=${this.setNondecisionTime.bind(this)}
          ><div>Nondecision Time<br><span class="math-var">t₀</span></div></decidables-slider>`:vx``}
      </div>`}});class MN extends(EN(RN)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){Iw(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=nN(0,1)()}alignPath(t,e,r,i,n){const s=sN.source(oN(t))(0,this.precision**.5),a=-e/2,o=e/2,c=e*r-e/2,l=i*this.precision,u=[];for(u.push({t:n,e:c});u.at(-1).e>a&&u.at(-1).e<o;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+l+SN.s.DEFAULT*s()});return u}alignCorrectDistribution(t,e,r,i){const n=SN.azv2pC(t,e,r),s=[{t:0,d:0},{t:this.t0,d:0}];for(let a=this.scale.time.min;a<=this.scale.time.max-i;a+=this.scale.time.step)a>0&&s.push({t:i+a,d:SN.tazv2gC(a/1e3,t,e,r)/n});return s}alignErrorDistribution(t,e,r,i){const n=SN.azv2pE(t,e,r),s=[{t:0,d:0},{t:this.t0,d:0}];for(let a=this.scale.time.min;a<=this.scale.time.max-i;a+=this.scale.time.step)a>0&&s.push({t:i+a,d:SN.tazv2gE(a/1e3,t,e,r)/n});return s}alignState(){this.random=nN.source(oN(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},(t,e)=>{const r=this.random()/1e3*997,i=this.animate&&e===this.trials-1,n=this.alignPath(r,this.a,this.z,this.v,this.t0),s=n.at(-1).e<=this.bounds.lower?"error":n.at(-1).e>=this.bounds.upper?"correct":"nr",a="error"===s?n.at(-2).t+(this.bounds.lower-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):"correct"===s?n.at(-2).t+(this.bounds.upper-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:n,rt:a,outcome:s,animate:i}});const t=SN.trials2stats(this.data.trials.filter(t=>!t.animate));this.data={...this.data,...t},this.model.accuracy=SN.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=SN.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=SN.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=SN.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=SN.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let i,n;e/r>1.5?(n=r,i=1.5*n):(i=e,n=i/1.5);const s=1*this.rem,a=3*this.rem,o=3.75*this.rem,c=3.25*this.rem,l=n-(s+a),u=i-(o+c),d=.75*this.rem,h=.5*l,g=.25*l-d,p=.75*this.rem,f=.9*u,m=.1*u-p,b=parseInt(this.getComputedStyleValue("---transition-duration"),10),y=yN().domain([this.scale.time.min,this.scale.time.max]).range([0,f]),v=yN().domain([this.scale.evidence.min,this.scale.evidence.max]).range([h,0]),Q=yN().domain([this.scale.density.min,this.scale.density.max]).range([g,0]),B=yN().domain([this.scale.density.min,this.scale.density.max]).range([0,g]),U=yN().domain([0,1]).range([0,l]),I=Vw().subject((t,e)=>({x:y(e.t0),y:v(e.startingPoint)})).on("start",t=>{Iw(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=y.invert(t.x),i=(v.invert(t.y)+this.a/2)/this.a;r="z"===e?y.invert(t.subject.x):r<SN.t0.MIN?SN.t0.MIN:r>SN.t0.MAX?SN.t0.MAX:r,i="t0"===e?(v.invert(t.subject.y)+this.a/2)/this.a:i<SN.z.MIN?SN.z.MIN:i>SN.z.MAX?SN.z.MAX:i,this.t0=r,this.z=i,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))}).on("end",t=>{Iw(t.currentTarget).classed("dragging",!1),this.drag=!1}),F=Vw().on("start",t=>{Iw(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;let e=(v.invert(t.y)-this.startingPoint)/(y.invert(t.x)-this.t0)*1e3;e=e<SN.v.MIN?SN.v.MIN:e>SN.v.MAX?SN.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))}).on("end",t=>{Iw(t.currentTarget).classed("dragging",!1),this.drag=!1}),C=Vw().subject((t,e)=>({x:0,y:v(e.value)})).on("start",t=>{Iw(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=v.invert(t.y);let r=Math.abs(2*e);r=r<SN.a.MIN?SN.a.MIN:r>SN.a.MAX?SN.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))}).on("end",t=>{Iw(t.currentTarget).classed("dragging",!1),this.drag=!1}),A=FN().x(t=>y(t.t)).y(t=>v(t.e)),x=FN().x(t=>y(t.t)).y(t=>Q(t.d)),E=FN().x(t=>y(t.t)).y(t=>B(t.d)),w=Iw(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),R=w.enter().append("svg").classed("main",!0).each((t,e,r)=>{Tx(RN.svgFilters,r[e])}),S=R.append("defs").classed("markers",!0),N=t=>{S.append("marker").attr("id",`measure-arrow-${t}`).attr("class",`measure-arrow ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12").append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z")},L=t=>{const e=S.append("marker").attr("id",`measure-capped-arrow-${t}`).attr("class",`measure-arrow capped ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12");e.append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z"),e.append("path").attr("class","cap").attr("d","M 0 -4 l 0 8")};N("a"),N("z"),L("v"),N("t0"),L("t0");const D=t=>{S.append("marker").attr("id",`model-sd-cap-${t}`).attr("class",`model-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),S.append("marker").attr("id",`data-sd-cap-${t}`).attr("class",`data-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6")};D("error"),D("correct");const M=S.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",v(this.bounds.upper)).attr("y2",v(this.bounds.lower));M.append("stop").classed("stop-0",!0).attr("offset","0%"),M.append("stop").classed("stop-100",!0).attr("offset","100%");const k=R.merge(w).attr("viewBox",`0 0 ${i} ${n}`),T=k.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:Q,densityLine:x,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:B,densityLine:E,alignDistribution:this.alignErrorDistribution.bind(this)}]),V=R.append("g").classed("plot evidence",!0),H=T.enter().append("g").attr("class",t=>`plot density ${t.outcome}`),$=R.append("g").classed("plot accuracy",!0),_=k.select(".plot.evidence").attr("transform",`translate(${o}, ${s+g+d})`),z=H.merge(T).attr("transform",t=>`translate(${o}, ${"correct"===t.outcome?s:s+g+h+2*d})`),Y=k.select(".plot.accuracy").attr("transform",`translate(${o+f+p}, ${s})`);V.append("clipPath").attr("id","clip-evidence").append("rect"),_.select("clipPath rect").attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)+1).attr("width",f+1);const G=V.append("g").classed("underlayer",!0),X=H.append("g").classed("underlayer",!0),W=$.append("g").classed("underlayer",!0),J=_.select(".underlayer"),O=z.select(".underlayer"),K=Y.select(".underlayer");V.append("g").classed("content",!0).append("g").classed("paths",!0);const P=H.append("g").classed("content",!0);$.append("g").classed("content",!0);const Z=_.select(".content"),j=z.select(".content"),q=Y.select(".content");V.append("g").classed("overlayer",!0),H.append("g").classed("overlayer",!0),$.append("g").classed("overlayer",!0);const tt=_.select(".overlayer"),et=z.select(".overlayer");G.append("rect").classed("background",!0),X.append("rect").classed("background",!0),J.select(".background").transition().duration(this.drag?0:b).ease(LS).attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)).attr("width",f),O.select(".background").transition().duration(b).ease(LS).attr("height",g).attr("width",f),X.filter(t=>"error"===t.outcome).append("g").classed("axis time",!0);const rt=O.filter(t=>"error"===t.outcome).select(".axis.time").attr("transform",`translate(0, ${g+.25*this.rem})`);var it;rt.transition().duration(b).ease(LS).call((it=y,nE(3,it))).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const nt=X.filter(t=>"error"===t.outcome).append("text").classed("title time",!0).attr("text-anchor","middle");nt.append("tspan").classed("name",!0).text("Time (ms)"),O.filter(t=>"error"===t.outcome).select(".title.time").transition().duration(b).ease(LS).attr("transform",`translate(${f/2}, ${g+2.5*this.rem})`),G.append("g").classed("axis evidence",!0),X.append("g").attr("class",t=>`axis density ${t.outcome}`),W.append("g").classed("axis accuracy",!0);const st=J.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),at=O.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),ot=K.select(".axis.accuracy").attr("transform",`translate(${m+.25*this.rem}, 0)`),ct=st.transition().duration(b).ease(LS).call(sE(v)).attr("font-size",null).attr("font-family",null),lt=at.transition().duration(b).ease(LS).each((t,e,r)=>{sE(t.densityScale).ticks(2)(Iw(r[e]))}).attr("font-size",null).attr("font-family",null),ut=ot.transition().duration(b).ease(LS).call(function(t){return nE(2,t)}(U)).attr("font-size",null).attr("font-family",null);ct.selectAll("line, path").attr("stroke",null),lt.selectAll("line, path").attr("stroke",null),ut.selectAll("line, path").attr("stroke",null);const dt=G.append("text").classed("title evidence",!0).attr("text-anchor","middle"),ht=X.append("text").attr("class",t=>`title density ${t.outcome}`).attr("text-anchor","middle"),gt=W.append("text").classed("title accuracy",!0).attr("text-anchor","middle");dt.append("tspan").classed("name",!0).text("Evidence"),ht.append("tspan").classed("name",!0).text("Density"),gt.append("tspan").classed("name",!0).text("Accuracy"),J.select(".title.evidence").transition().duration(b).ease(LS).attr("transform",`translate(${-2.5*this.rem}, ${h/2})rotate(-90)`),O.select(".title.density").transition().duration(b).ease(LS).attr("transform",`translate(${-2.5*this.rem}, ${g/2})rotate(-90)`),K.select(".title.accuracy").transition().duration(b).ease(LS).attr("transform",`translate(${m+2.25*this.rem}, ${l/2})rotate(90)`);const pt=Z.select(".paths").selectAll(".path").data(this.data.trials.filter(t=>void 0!==t.path)),ft=Cw(),mt=pt.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",(t,e)=>{if(!this.drag){Iw(t.currentTarget).classed("highlight",!0).raise();const r=tt.append("g").classed(`rt-label ${e.outcome}`,!0),i=r.append("rect"),n=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",y(e.rt)).attr("y","correct"===e.outcome?v(this.bounds.upper)-.25*this.rem:v(this.bounds.lower)+.125*this.rem).node().getBBox();i.attr("x",n.x-.125*this.rem).attr("y",n.y+.125*this.rem).attr("width",n.width+.25*this.rem).attr("height",n.height-.25*this.rem),ft.set(t.currentTarget,r)}}).on("pointerout",(t,e)=>{this.drag||(Iw(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),ft.get(t.currentTarget).remove())});mt.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const bt=mt.merge(pt).attr("class",t=>`path ${t.outcome}`);bt.select(".curve").transition().duration(this.drag?0:b).ease(LS).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attrTween("d",(t,e,r)=>{const i=r[e],n=SR(void 0!==i.a?i.a:this.a,this.a),s=SR(void 0!==i.z?i.z:this.z,this.z),a=SR(void 0!==i.v?i.v:this.v,this.v),o=SR(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=s(e),i.v=a(e),i.t0=o(e);const r=this.alignPath(t.seed,i.a,i.z,i.v,i.t0);return A(r)}});const yt=bt.filter(t=>t.animate&&!this.paused);if(!yt.empty()){const t=yt.attr("data-new-trial-ease-time"),e=e=>yN().domain([0,1]).range([t,1])(e),r=e=>r=>yN().domain([e(t),1]).range([0,1])(e(r));yt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),yt.transition("new").duration(e=>Math.floor(1.5*e.rt*(1-t))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",(t,e,i)=>{const n=SR(i[e].getAttribute("stroke-dashoffset"),0);return t=>n(r(NS)(t))}).on("end",(t,e,r)=>{Iw(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))})}const vt=bt.filter(t=>t.animate&&this.paused);if(!vt.empty()){const t=vt.attr("data-new-trial-ease-time");vt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",()=>SR(1,0)(NS(t)))}bt.filter(t=>!t.animate).attr("data-new-trial-ease-time",null),pt.exit().remove();const Qt=P.append("g").attr("class",t=>`dist ${t.outcome}`);Qt.append("path").classed("curve",!0),j.select(".dist").select(".curve").transition().duration(this.drag?0:b).ease(LS).attrTween("d",(t,e,r)=>{const i=r[e],n=SR(void 0!==i.a?i.a:this.a,this.a),s=SR(void 0!==i.z?i.z:this.z,this.z),a=SR(void 0!==i.v?i.v:this.v,this.v),o=SR(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=s(e),i.v=a(e),i.t0=o(e);const r=t.alignDistribution(i.a,i.z,i.v,i.t0);return t.densityLine(r)}});const Bt=Z.selectAll(".rt").data(this.data.trials),Ut=Bt.enter().append("g");Ut.append("line").classed("mark",!0).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem);const It=Ut.merge(Bt).attr("class",t=>`rt ${t.outcome}`);It.filter(t=>!t.animate).select(".mark").transition().duration(this.drag?0:b).ease(LS).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem),Bt.exit().remove();const Ft=q.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),Ct=Ft.enter().append("g").attr("class",(t,e)=>"accuracy model "+(0===e?"correct":"error"));Ct.append("rect").classed("bar",!0).attr("x",0),Ct.merge(Ft).select("rect").transition().duration(this.drag?0:b).ease(LS).attr("y",(t,e)=>U(0===e?0:1-t)).attr("width",m).attr("height",t=>U(t)),Ft.exit().remove();const At=q.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),xt=At.enter().append("g").classed("accuracy data",!0);xt.append("line").classed("mark",!0);const Et=xt.merge(At).attr("class",t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error"));Et.select(".mark").transition().duration(this.drag?0:b).ease(LS).attr("x1",0+.25*this.rem).attr("x2",m-.25*this.rem).attr("y1",t=>U(t)-1).attr("y2",t=>U(t)-1),At.exit().remove();const wt=tt.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),Rt=wt.enter().append("g").attr("class",(t,e)=>"boundary "+(0===e?"correct":"error"));Rt.append("line").classed("line",!0),Rt.append("line").classed("line touch",!0);const St=Rt.merge(wt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?SN.a.STEP:SN.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?SN.a.STEP:SN.a.JUMP}r=r<SN.a.MIN?SN.a.MIN:r>SN.a.MAX?SN.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?St.call(C):St.on(".drag",null)),St.select(".line").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),St.select(".line.touch").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),wt.exit().remove();const Nt=tt.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Lt=Nt.enter().append("g").classed("drift",!0);Lt.append("line").classed("line",!0),Lt.append("line").classed("line touch",!0),Lt.append("path").classed("arrow",!0),Lt.append("path").classed("arrow touch",!0);const Dt=Lt.merge(Nt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?SN.v.STEP:SN.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?SN.v.STEP:SN.v.JUMP}e=e<SN.v.MIN?SN.v.MIN:e>SN.v.MAX?SN.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Dt.call(F):Dt.on(".drag",null));const Mt=(v(0)-v(1))/(y(1)-y(0));Dt.transition().duration(this.drag?0:b).ease(LS).attr("transform",t=>`translate(${y(t.t0)}, ${v(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*Mt)*(180/Math.PI)})`),Dt.select(".line").attr("x2",y(200)),Dt.select(".line.touch").attr("x2",y(200)),Dt.select(".arrow").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Dt.select(".arrow.touch").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Nt.exit().remove();const kt=tt.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Tt=kt.enter().append("g").classed("t0z",!0);Tt.append("line").classed("line",!0),Tt.append("line").classed("line touch",!0),Tt.append("circle").classed("point touch",!0);const Vt=Tt.merge(kt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?SN.z.STEP:SN.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?SN.z.STEP:SN.z.JUMP}e=e<SN.z.MIN?SN.z.MIN:e>SN.z.MAX?SN.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?SN.t0.STEP:SN.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?SN.t0.STEP:SN.t0.JUMP}e=e<SN.t0.MIN?SN.t0.MIN:e>SN.t0.MAX?SN.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Vt.call(I):Vt.on(".drag",null)),Vt.select(".line").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Vt.select(".line.touch").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Vt.select(".point").transition().duration(this.drag?0:b).ease(LS).attr("cx",t=>y(t.t0)).attr("cy",t=>v(t.startingPoint)),kt.exit().remove();const Ht=tt.selectAll(".measure.a").data(this.measures?[this.a]:[]),$t=Ht.enter().append("g").classed("measure a",!0);$t.append("line").classed("line",!0),$t.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-a)").attr("marker-end","url(#measure-arrow-a)");const _t=$t.append("text").classed("label",!0);_t.append("tspan").classed("a math-var",!0).text("a"),_t.append("tspan").classed("equals",!0).text(" = "),_t.append("tspan").classed("value",!0);const zt=Math.abs(v(this.bounds.upper)-v(this.bounds.lower))<=4,Yt=$t.merge(Ht);Yt.select(".line").classed("short",zt).transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)+2).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower)-2),Yt.select(".markers").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower));Yt.select(".label").transition().duration(this.drag?0:b).ease(LS).attr("x",y(this.scale.time.max)).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(jS(".2f")(this.a)),Ht.exit().remove();const Gt=tt.selectAll(".measure.z").data(this.measures?[this.z]:[]),Xt=Gt.enter().append("g").classed("measure z",!0);Xt.append("line").classed("line",!0),Xt.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-z)").attr("marker-end","url(#measure-arrow-z)");const Wt=Xt.append("text").classed("label",!0);Wt.append("tspan").classed("z math-var",!0).text("z"),Wt.append("tspan").classed("equals",!0).text(" = "),Wt.append("tspan").classed("value",!0);const Jt=Math.abs(v(this.startingPoint)-v(this.bounds.lower))<=4,Ot=Xt.merge(Gt);Ot.select(".line").classed("short",Jt).transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)+2).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower)-2),Ot.select(".markers").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower));Ot.select(".label").transition().duration(this.drag?0:b).ease(LS).attr("x",y(this.scale.time.min)).attr("y",v(this.bounds.lower)+.125*this.rem).select(".value").text(jS(".0%")(this.z)),Gt.exit().remove();const Kt=tt.selectAll(".measure.v").data(this.measures?[this.v]:[]),Pt=Kt.enter().append("g").classed("measure v",!0);Pt.append("path").classed("line",!0),Pt.append("path").classed("markers",!0).attr("marker-start","url(#measure-capped-arrow-v)").attr("marker-end","url(#measure-capped-arrow-v)");const Zt=Pt.append("text").classed("label",!0);Zt.append("tspan").classed("v math-var",!0).text("v"),Zt.append("tspan").classed("equals",!0).text(" = "),Zt.append("tspan").classed("value",!0);const jt=y(200)-y(0)+.75*this.rem,qt=Math.atan(this.v/1e3*Mt),te=Math.cos(qt)*jt,ee=Math.sin(qt)*jt,re=2/jt,ie=Math.atan(this.v/1e3*Mt)-re,ne=Math.cos(re)*jt,se=Math.sin(re)*jt,ae=Math.cos(ie)*jt,oe=Math.sin(ie)*jt,ce=ie*jt<=4,le=Pt.merge(Kt);le.select(".line").classed("short",ce).transition().duration(this.drag?0:b).ease(LS).attr("d",`\n        M ${y(this.t0)+ne}, ${v(this.startingPoint)-se}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+ae} ${v(this.startingPoint)-oe}\n      `),le.select(".markers").transition().duration(this.drag?0:b).ease(LS).attr("d",`\n        M ${y(this.t0+200)+.75*this.rem}, ${v(this.startingPoint)}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+te} ${v(this.startingPoint)-ee}\n      `);le.select(".label").transition().duration(this.drag?0:b).ease(LS).attr("x",y(this.t0+200)+.5*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(jS(".2f")(this.v)),Kt.exit().remove();const ue=tt.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),de=ue.enter().append("g").classed("measure t0",!0);de.append("line").classed("line",!0),de.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-t0)").attr("marker-end","url(#measure-capped-arrow-t0)");const he=de.append("text").classed("label",!0);he.append("tspan").classed("t0 math-var",!0).text("t₀"),he.append("tspan").classed("equals",!0).text(" = "),he.append("tspan").classed("value",!0);const ge=Math.abs(y(0)-y(this.t0))<=4,pe=de.merge(ue);pe.select(".line").classed("short",ge).transition().duration(this.drag?0:b).ease(LS).attr("x1",y(0)+2).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)-2).attr("y2",v(this.startingPoint)-.75*this.rem),pe.select(".markers").transition().duration(this.drag?0:b).ease(LS).attr("x1",y(0)).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)).attr("y2",v(this.startingPoint)-.75*this.rem);pe.select(".label").transition().duration(this.drag?0:b).ease(LS).attr("x",y(this.t0)+.25*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(jS("d")(this.t0)),ue.exit().remove();const fe=et.selectAll(".model.mean").data(t=>this.means?[t]:[]),me=fe.enter().append("g").attr("class",t=>`model mean ${t.outcome}`);me.append("line").classed("indicator",!0);me.merge(fe).select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",t=>y(t.model.meanRT)).attr("x2",t=>y(t.model.meanRT)).attr("y1",t=>t.densityScale(this.scale.density.min)).attr("y2",t=>t.densityScale(this.scale.density.max)),fe.exit().remove();const be=et.selectAll(".data.mean").data(t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[]),ye=be.enter().append("g").attr("class",t=>`data mean ${t.outcome}`);ye.append("line").classed("indicator",!0).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem);ye.merge(be).select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",t=>y(t.data.meanRT)).attr("x2",t=>y(t.data.meanRT)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem),be.exit().select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{Iw(r[e].parentElement).remove()});const ve=et.selectAll(".model.sd").data(t=>this.sds?[t]:[]),Qe=ve.enter().append("g").attr("class",t=>`model sd ${t.outcome}`);Qe.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#model-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#model-sd-cap-${t.outcome})`);Qe.merge(ve).select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",t=>y(t.model.meanRT-t.model.sdRT/2)).attr("x2",t=>y(t.model.meanRT+t.model.sdRT/2)).attr("y1",t=>t.densityScale(5)).attr("y2",t=>t.densityScale(5)),ve.exit().remove();const Be=et.selectAll(".data.sd").data(t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t]),Ue=Be.enter().append("g").attr("class",t=>`data sd ${t.outcome}`);Ue.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#data-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#data-sd-cap-${t.outcome})`).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem);Ue.merge(Be).select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",t=>y(t.data.meanRT-t.data.sdRT/2)).attr("x2",t=>y(t.data.meanRT+t.data.sdRT/2)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem),Be.exit().select(".indicator").transition().duration(this.drag?0:b).ease(LS).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{Iw(r[e].parentElement).remove()}),this.firstUpdate=!1}}customElements.define("ddm-model",MN);class kN extends(EN(RN)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,kA`
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
      `]}render(){return vx``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,i=Math.min(e,r),n=.25*this.rem,s=.25*this.rem,a=.25*this.rem,o=i-(n+s),c=i-(a+.25*this.rem);this.xScale=yN().domain([-1,1]).range([0,c]),this.yScale=yN().domain([1,-1]).range([0,o]);const l=Iw(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=l.enter().append("svg").classed("main",!0),d=u.merge(l).attr("viewBox",`0 0 ${i} ${i}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),d.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const h=u.append("g").classed("plot",!0),g=d.select(".plot").attr("transform",`translate(${a}, ${n})`),p=h.append("g").classed("underlayer",!0),f=g.select(".underlayer");p.append("circle").classed("background",!0),f.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),h.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");g.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const m=h.append("g").classed("overlayer",!0),b=g.select(".overlayer");m.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=PR()-this.pauseTime,this.pauseTime=0),this.runner=function(t,e,r){var i=new jR,n=e;return i._restart=i.restart,i.restart=function(t,e,r){e=+e,r=null==r?PR():+r,i._restart(function s(a){a+=n,i._restart(s,n+=e,r),t(a)},e,r)},i.restart(t,e,r),i}(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=PR())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=Iw(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();Iw(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();Iw(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=PR(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,i=this.baseTime?e-this.lastTime:0;this.lastTime=e;let n=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(n=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const s=void 0===this.dots[t][r];s&&(this.dots[t][r]={});const a=this.dots[t][r];if(n||s){a.direction=t===this.RANDOM?360*Math.random():this.currentDirection,a.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,i=Math.sqrt(Math.random());a.x=this.xScale(i*Math.cos(r)),a.y=this.yScale(i*Math.sin(r))}else if(e>a.birth+this.lifetime){a.birth+=this.lifetime,a.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());a.x=this.xScale(r*Math.cos(e)),a.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(a.direction=this.currentDirection);const e=a.direction*(Math.PI/180);a.dx=this.speed*(i/1e3)*Math.cos(e),a.dy=this.speed*(i/1e3)*Math.sin(e),a.x+=a.dx,a.y+=a.dy;(a.x-this.xScale(0))**2+(a.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(a.x=-(a.x-this.xScale(0))+this.xScale(0),a.y=-(a.y-this.yScale(0))+this.yScale(0))}}}const s=Iw(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),a=s.enter().append("g").classed("fixation",!0);a.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),a.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),s.exit().remove();const o=Iw(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const c=Iw(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);c.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),c.exit().remove()}}customElements.define("rdk-2afc-task",kN);class TN extends RN{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,kA`
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
      `]}}customElements.define("ddm-equation-azv2pc",class extends TN{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},accuracy:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.alignState()}alignState(){this.accuracy=SN.azv2pC(this.a,this.z,this.v)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azv2pc-change",{detail:{a:this.a,z:this.z,v:this.v,accuracy:this.accuracy},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n;this.numeric?(t=vx`<decidables-spinner class="a bottom"
          ?disabled=${!this.interactive}
          min=${SN.a.MIN}
          max=${SN.a.MAX}
          step=${SN.a.STEP}
          .value=${this.a}
          @input=${this.aInput.bind(this)}
        >
          <var class="math-var">a</var>
        </decidables-spinner>`,e=vx`<decidables-spinner class="z bottom"
          ?disabled=${!this.interactive}
          min=${SN.z.MIN}
          max=${SN.z.MAX}
          step=${SN.z.STEP}
          .value=${this.z}
          @input=${this.zInput.bind(this)}
        >
          <var class="math-var">z</var>
        </decidables-spinner>`,r=vx`<decidables-spinner class="v bottom"
          ?disabled=${!this.interactive}
          min=${SN.v.MIN}
          max=${SN.v.MAX}
          step=${SN.v.STEP}
          .value=${this.v}
          @input=${this.vInput.bind(this)}
        >
          <var class="math-var">v</var>
        </decidables-spinner>`,i=vx`<decidables-spinner class="s bottom"
          disabled
          .value=${SN.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`,n=vx`<decidables-spinner class="accuracy bottom"
          disabled
          .value=${+this.accuracy.toFixed(2)}
        >
          <var>Accuracy</var>
        </decidables-spinner>`):(t=vx`<var class="math-var a">a</var>`,e=vx`<var class="math-var z">z</var>`,r=vx`<var class="math-var v">v</var>`,i=vx`<var class="math-var s">s</var>`,n=vx`<var class="accuracy">Accuracy</var>`);const s=vx`
      <tr>
        <td rowspan="2">
          ${n}<span class="equals">=</span>
        </td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${i}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${e} / ${i}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
        </td>
      </tr>
      <tr>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${i}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;return vx`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${s}
          </tbody>
        </table>
      </div>`}});customElements.define("ddm-equation-azvt02m",class extends TN{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0},meanRT:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.alignState()}alignState(){this.meanRT=SN.azvt02m(this.a,this.z,this.v,this.t0)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azvt02m-change",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0,meanRT:this.meanRT},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}t0Input(t){this.t0=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n,s;this.numeric?(t=vx`<decidables-spinner class="a bottom"
          ?disabled=${!this.interactive}
          min=${SN.a.MIN}
          max=${SN.a.MAX}
          step=${SN.a.STEP}
          .value=${this.a}
          @input=${this.aInput.bind(this)}
        >
          <var class="math-var">a</var>
        </decidables-spinner>`,e=vx`<decidables-spinner class="z bottom"
          ?disabled=${!this.interactive}
          min=${SN.z.MIN}
          max=${SN.z.MAX}
          step=${SN.z.STEP}
          .value=${this.z}
          @input=${this.zInput.bind(this)}
        >
          <var class="math-var">z</var>
        </decidables-spinner>`,r=vx`<decidables-spinner class="v bottom"
          ?disabled=${!this.interactive}
          min=${SN.v.MIN}
          max=${SN.v.MAX}
          step=${SN.v.STEP}
          .value=${this.v}
          @input=${this.vInput.bind(this)}
        >
          <var class="math-var">v</var>
        </decidables-spinner>`,i=vx`<decidables-spinner class="t0 bottom"
          ?disabled=${!this.interactive}
          min=${SN.t0.MIN}
          max=${SN.t0.MAX}
          step=${SN.t0.STEP}
          .value=${this.t0}
          @input=${this.t0Input.bind(this)}
        >
          <var class="math-var">t<sub>0</sub></var>
        </decidables-spinner>`,n=vx`<decidables-spinner class="s bottom"
          disabled
          .value=${SN.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`,s=vx`<decidables-spinner class="mean-rt bottom"
          disabled
          .value=${+this.meanRT.toFixed(0)}
        >
          <var>Mean RT</var>
        </decidables-spinner>`):(t=vx`<var class="math-var a">a</var>`,e=vx`<var class="math-var z">z</var>`,r=vx`<var class="math-var v">v</var>`,i=vx`<var class="math-var t0">t<sub>0</sub></var>`,n=vx`<var class="math-var s">s</var>`,s=vx`<var class="mean-rt">Mean RT</var>`);const a=vx`
      <tr>
        <td rowspan="2">
          ${s}<span class="equals">=</span>
          ${i}
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
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${e} / ${n}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
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
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${r}${t} / ${n}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;return vx`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${a}
          </tbody>
        </table>
      </div>`}});class VN extends RN{static get styles(){return[super.styles,kA`
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
      `]}render(){return vx`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`}}customElements.define("ddm-example",VN);customElements.define("ddm-example-human",class extends VN{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:!1,type:Number,reflect:!1},z:{attribute:!1,type:Number,reflect:!1},v:{attribute:!1,type:Number,reflect:!1},t0:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.accumulableResponse=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.ddmFit=null,this.data=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.ddmFit=this.querySelector("ddm-fit"),this.ddmModel.clear(),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable&&(this.accumulableTable.correctCount=NaN,this.accumulableTable.errorCount=NaN,this.accumulableTable.nrCount=NaN,this.accumulableTable.accuracy=NaN,this.accumulableTable.correctMeanRT=NaN,this.accumulableTable.errorMeanRT=NaN,this.accumulableTable.meanRT=NaN,this.accumulableTable.correctSDRT=NaN,this.accumulableTable.errorSDRT=NaN,this.accumulableTable.sdRT=NaN),this.ddmModel&&this.ddmModel.clear(),this.ddmFit&&this.ddmFit.clear()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",t=>{this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",()=>{this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()}),this.accumulableResponse&&this.accumulableResponse.addEventListener("accumulable-response",t=>{this.data=t.detail.data,this.ddmModel&&this.ddmModel.trial({index:t.detail.trial,rt:t.detail.rt,outcome:t.detail.outcome}),this.ddmFit&&this.ddmFit.set({accuracy:t.detail.data.accuracy,correctMeanRT:t.detail.data.correctMeanRT,errorMeanRT:t.detail.data.errorMeanRT,meanRT:t.detail.data.meanRT,correctSDRT:t.detail.data.correctSDRT,errorSDRT:t.detail.data.errorSDRT,sdRT:t.detail.data.sdRT}),this.requestUpdate()}),this.ddmFit&&this.ddmFit.addEventListener("ddm-fit-update",t=>{this.a=t.detail.a,this.z=.5,this.v=t.detail.v,this.t0=t.detail.t0})}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});customElements.define("ddm-example-interactive",class extends VN{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.accumulableControl=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-resample",()=>{this.ddmModel?.resample(),this.requestUpdate()}),this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trials,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0)}});customElements.define("ddm-example-model",class extends VN{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=SN.a.DEFAULT,this.z=SN.z.DEFAULT,this.v=SN.v.DEFAULT,this.t0=SN.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.ddmParameters=null,this.ddmModel=null,this.accumulableResponse=null,this.accumulableTable=null,this.trialCount=0,this.signals=["left","right"],this.signal=void 0,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.ddmModel&&this.ddmModel.resumeTrial()}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.ddmModel&&this.ddmModel.pauseTrial()}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.trialCount=0,this.signal=void 0,this.rdkTask&&this.rdkTask.reset(),this.ddmModel&&(this.ddmModel.trials=this.trialCount),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.signal=t.detail.signal,this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial),this.ddmModel&&(this.trialCount+=1,this.ddmModel.trial())}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.signal=void 0,this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}),this.ddmModel.addEventListener("accumulable-response",t=>{if(this.accumulableResponse){const e="correct"===t.detail.outcome?this.signal:"left"===this.signal?"right":"left";this.accumulableResponse.responded(e)}this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.trialCount>this.trials&&(this.trialCount=this.trials),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trialCount,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});
//# sourceMappingURL=page.js.map
