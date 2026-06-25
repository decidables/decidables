var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r=function(t){return t&&t.Math===Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=n,a=function(t){try{return!!t()}catch(t){return!0}},s=!a(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),o=s,l=Function.prototype,c=l.call,u=o&&l.bind.bind(c,c),h=o?u:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},f=d,p=TypeError,m=function(t){if(f(t))throw new p("Can't call method on "+t);return t},g=m,b=Object,v=function(t){return b(g(t))},y=v,w=h({}.hasOwnProperty),x=Object.hasOwn||function(t,e){return w(y(t),e)},k={},$={exports:{}},S=n,_=Object.defineProperty,A=function(t,e){try{_(S,t,{value:e,configurable:!0,writable:!0})}catch(r){S[t]=e}return e},E=n,M=A,T="__core-js_shared__",N=$.exports=E[T]||M(T,{});(N.versions||(N.versions=[])).push({version:"3.49.0",mode:"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"});var C,R,O=$.exports,P=O,I=function(t,e){return P[t]||(P[t]=e||{})},F=h,D=0,j=Math.random(),z=F(1.1.toString),q=function(t){return"Symbol("+(void 0===t?"":t)+")_"+z(++D+j,36)},U=n.navigator,L=U&&U.userAgent,H=L?String(L):"",B=n,V=H,W=B.process,X=B.Deno,Y=W&&W.versions||X&&X.version,K=Y&&Y.v8;K&&(R=(C=K.split("."))[0]>0&&C[0]<4?1:+(C[0]+C[1])),!R&&V&&(!(C=V.match(/Edge\/(\d+)/))||C[1]>=74)&&(C=V.match(/Chrome\/(\d+)/))&&(R=+C[1]);var Z=R,G=Z,J=a,Q=n.String,tt=!!Object.getOwnPropertySymbols&&!J(function(){var t=Symbol("symbol detection");return!Q(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&G&&G<41}),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,rt=I,nt=x,it=q,at=tt,st=et,ot=n.Symbol,lt=rt("wks"),ct=st?ot.for||ot:ot&&ot.withoutSetter||it,ut=function(t){return nt(lt,t)||(lt[t]=at&&nt(ot,t)?ot[t]:ct("Symbol."+t)),lt[t]},ht=ut;k.f=ht;var dt={},ft=!a(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),pt="object"==typeof document&&document.all,mt=void 0===pt&&void 0!==pt?function(t){return"function"==typeof t||t===pt}:function(t){return"function"==typeof t},gt=mt,bt=function(t){return"object"==typeof t?null!==t:gt(t)},vt=bt,yt=n.document,wt=vt(yt)&&vt(yt.createElement),xt=function(t){return wt?yt.createElement(t):{}},kt=xt,$t=!ft&&!a(function(){return 7!==Object.defineProperty(kt("div"),"a",{get:function(){return 7}}).a}),St=ft&&a(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),_t=bt,At=String,Et=TypeError,Mt=function(t){if(_t(t))return t;throw new Et(At(t)+" is not an object")},Tt=s,Nt=Function.prototype.call,Ct=Tt?Nt.bind(Nt):function(){return Nt.apply(Nt,arguments)},Rt=n,Ot=mt,Pt=function(t,e){return arguments.length<2?(r=Rt[t],Ot(r)?r:void 0):Rt[t]&&Rt[t][e];var r},It=h({}.isPrototypeOf),Ft=Pt,Dt=mt,jt=It,zt=Object,qt=et?function(t){return"symbol"==typeof t}:function(t){var e=Ft("Symbol");return Dt(e)&&jt(e.prototype,zt(t))},Ut=String,Lt=function(t){try{return Ut(t)}catch(t){return"Object"}},Ht=mt,Bt=Lt,Vt=TypeError,Wt=function(t){if(Ht(t))return t;throw new Vt(Bt(t)+" is not a function")},Xt=Wt,Yt=d,Kt=function(t,e){var r=t[e];return Yt(r)?void 0:Xt(r)},Zt=Ct,Gt=mt,Jt=bt,Qt=TypeError,te=Ct,ee=bt,re=qt,ne=Kt,ie=function(t,e){var r,n;if("string"===e&&Gt(r=t.toString)&&!Jt(n=Zt(r,t)))return n;if(Gt(r=t.valueOf)&&!Jt(n=Zt(r,t)))return n;if("string"!==e&&Gt(r=t.toString)&&!Jt(n=Zt(r,t)))return n;throw new Qt("Can't convert object to primitive value")},ae=TypeError,se=ut("toPrimitive"),oe=function(t,e){if(!ee(t)||re(t))return t;var r,n=ne(t,se);if(n){if(void 0===e&&(e="default"),r=te(n,t,e),!ee(r)||re(r))return r;throw new ae("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},le=oe,ce=qt,ue=function(t){var e=le(t,"string");return ce(e)?e:e+""},he=ft,de=$t,fe=St,pe=Mt,me=ue,ge=TypeError,be=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ye="enumerable",we="configurable",xe="writable";dt.f=he?fe?function(t,e,r){if(pe(t),e=me(e),pe(r),"function"==typeof t&&"prototype"===e&&"value"in r&&xe in r&&!r[xe]){var n=ve(t,e);n&&n[xe]&&(t[e]=r.value,r={configurable:we in r?r[we]:n[we],enumerable:ye in r?r[ye]:n[ye],writable:!1})}return be(t,e,r)}:be:function(t,e,r){if(pe(t),e=me(e),pe(r),de)try{return be(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new ge("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var ke=i,$e=x,Se=k,_e=dt.f,Ae=function(t){var e=ke.Symbol||(ke.Symbol={});$e(e,t)||_e(e,t,{value:Se.f(t)})},Ee={},Me={},Te={}.propertyIsEnumerable,Ne=Object.getOwnPropertyDescriptor,Ce=Ne&&!Te.call({1:2},1);Me.f=Ce?function(t){var e=Ne(this,t);return!!e&&e.enumerable}:Te;var Re=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Oe=h,Pe=Oe({}.toString),Ie=Oe("".slice),Fe=function(t){return Ie(Pe(t),8,-1)},De=a,je=Fe,ze=Object,qe=h("".split),Ue=De(function(){return!ze("z").propertyIsEnumerable(0)})?function(t){return"String"===je(t)?qe(t,""):ze(t)}:ze,Le=m,He=function(t){return Ue(Le(t))},Be=ft,Ve=Ct,We=Me,Xe=Re,Ye=He,Ke=ue,Ze=x,Ge=$t,Je=Object.getOwnPropertyDescriptor;Ee.f=Be?Je:function(t,e){if(t=Ye(t),e=Ke(e),Ge)try{return Je(t,e)}catch(t){}if(Ze(t,e))return Xe(!Ve(We.f,t,e),t[e])};var Qe=n,tr=Ae,er=dt.f,rr=Ee.f,nr=Qe.Symbol;if(tr("asyncDispose"),nr){var ir=rr(nr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&er(nr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var ar=n,sr=Ae,or=dt.f,lr=Ee.f,cr=ar.Symbol;if(sr("dispose"),cr){var ur=lr(cr,"dispose");ur.enumerable&&ur.configurable&&ur.writable&&or(cr,"dispose",{value:ur.value,enumerable:!1,configurable:!1,writable:!1})}var hr=dt,dr=Re,fr=ft?function(t,e,r){return hr.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},pr={exports:{}},mr=ft,gr=x,br=Function.prototype,vr=mr&&Object.getOwnPropertyDescriptor,yr={CONFIGURABLE:gr(br,"name")&&(!mr||mr&&vr(br,"name").configurable)},wr=mt,xr=O,kr=h(Function.toString);wr(xr.inspectSource)||(xr.inspectSource=function(t){return kr(t)});var $r,Sr,_r,Ar=xr.inspectSource,Er=mt,Mr=n.WeakMap,Tr=Er(Mr)&&/native code/.test(String(Mr)),Nr=q,Cr=I("keys"),Rr=function(t){return Cr[t]||(Cr[t]=Nr(t))},Or={},Pr=Tr,Ir=n,Fr=bt,Dr=fr,jr=x,zr=O,qr=Rr,Ur=Or,Lr="Object already initialized",Hr=Ir.TypeError,Br=Ir.WeakMap;if(Pr||zr.state){var Vr=zr.state||(zr.state=new Br);Vr.get=Vr.get,Vr.has=Vr.has,Vr.set=Vr.set,$r=function(t,e){if(Vr.has(t))throw new Hr(Lr);return e.facade=t,Vr.set(t,e),e},Sr=function(t){return Vr.get(t)||{}},_r=function(t){return Vr.has(t)}}else{var Wr=qr("state");Ur[Wr]=!0,$r=function(t,e){if(jr(t,Wr))throw new Hr(Lr);return e.facade=t,Dr(t,Wr,e),e},Sr=function(t){return jr(t,Wr)?t[Wr]:{}},_r=function(t){return jr(t,Wr)}}var Xr={set:$r,get:Sr,has:_r,enforce:function(t){return _r(t)?Sr(t):$r(t,{})},getterFor:function(t){return function(e){var r;if(!Fr(e)||(r=Sr(e)).type!==t)throw new Hr("Incompatible receiver, "+t+" required");return r}}},Yr=h,Kr=a,Zr=mt,Gr=x,Jr=ft,Qr=yr.CONFIGURABLE,tn=Ar,en=Xr.enforce,rn=Xr.get,nn=String,an=Object.defineProperty,sn=Yr("".slice),on=Yr("".replace),ln=Yr([].join),cn=Jr&&!Kr(function(){return 8!==an(function(){},"length",{value:8}).length}),un=String(String).split("String"),hn=pr.exports=function(t,e,r){"Symbol("===sn(nn(e),0,7)&&(e="["+on(nn(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Gr(t,"name")||Qr&&t.name!==e)&&(Jr?an(t,"name",{value:e,configurable:!0}):t.name=e),cn&&r&&Gr(r,"arity")&&t.length!==r.arity&&an(t,"length",{value:r.arity});try{r&&Gr(r,"constructor")&&r.constructor?Jr&&an(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=en(t);return Gr(n,"source")||(n.source=ln(un,"string"==typeof e?e:"")),t};Function.prototype.toString=hn(function(){return Zr(this)&&rn(this).source||tn(this)},"toString");var dn,fn=pr.exports,pn=mt,mn=dt,gn=fn,bn=A,vn=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(pn(r)&&gn(r,a,n),n.global)i?t[e]=r:bn(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:mn.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},yn={},wn=Math.ceil,xn=Math.floor,kn=Math.trunc||function(t){var e=+t;return(e>0?xn:wn)(e)},$n=kn,Sn=function(t){var e=+t;return e!=e||0===e?0:$n(e)},_n=Sn,An=Math.max,En=Math.min,Mn=Sn,Tn=Math.min,Nn=function(t){var e=Mn(t);return e>0?Tn(e,9007199254740991):0},Cn=Nn,Rn=function(t){return Cn(t.length)},On=He,Pn=function(t,e){var r=_n(t);return r<0?An(r+e,0):En(r,e)},In=Rn,Fn={indexOf:(dn=!1,function(t,e,r){var n=On(t),i=In(n);if(0===i)return!dn&&-1;var a,s=Pn(r,i);if(dn&&e!=e){for(;i>s;)if((a=n[s++])!=a)return!0}else for(;i>s;s++)if((dn||s in n)&&n[s]===e)return dn||s||0;return!dn&&-1})},Dn=x,jn=He,zn=Fn.indexOf,qn=Or,Un=h([].push),Ln=function(t,e){var r,n=jn(t),i=0,a=[];for(r in n)!Dn(qn,r)&&Dn(n,r)&&Un(a,r);for(;e.length>i;)Dn(n,r=e[i++])&&(~zn(a,r)||Un(a,r));return a},Hn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Bn=Ln,Vn=Hn.concat("length","prototype");yn.f=Object.getOwnPropertyNames||function(t){return Bn(t,Vn)};var Wn={};Wn.f=Object.getOwnPropertySymbols;var Xn=Pt,Yn=yn,Kn=Wn,Zn=Mt,Gn=h([].concat),Jn=Xn("Reflect","ownKeys")||function(t){var e=Yn.f(Zn(t)),r=Kn.f;return r?Gn(e,r(t)):e},Qn=x,ti=Jn,ei=Ee,ri=dt,ni=function(t,e,r){for(var n=ti(e),i=ri.f,a=ei.f,s=0;s<n.length;s++){var o=n[s];Qn(t,o)||r&&Qn(r,o)||i(t,o,a(e,o))}},ii=a,ai=mt,si=/#|\.prototype\./,oi=function(t,e){var r=ci[li(t)];return r===hi||r!==ui&&(ai(e)?ii(e):!!e)},li=oi.normalize=function(t){return String(t).replace(si,".").toLowerCase()},ci=oi.data={},ui=oi.NATIVE="N",hi=oi.POLYFILL="P",di=oi,fi=n,pi=Ee.f,mi=fr,gi=vn,bi=A,vi=ni,yi=di,wi=function(t,e){var r,n,i,a,s,o=t.target,l=t.global,c=t.stat;if(r=l?fi:c?fi[o]||bi(o,{}):fi[o]&&fi[o].prototype)for(n in e){if(a=e[n],i=t.dontCallGetSet?(s=pi(r,n))&&s.value:r[n],!yi(l?n:o+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;vi(a,i)}(t.sham||i&&i.sham)&&mi(a,"sham",!0),gi(r,n,a,t)}},xi={};xi[ut("toStringTag")]="z";var ki="[object z]"===String(xi),$i=mt,Si=Fe,_i=ut("toStringTag"),Ai=Object,Ei="Arguments"===Si(function(){return arguments}()),Mi=ki?Si:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Ai(t),_i))?r:Ei?Si(e):"Object"===(n=Si(e))&&$i(e.callee)?"Arguments":n},Ti=wi,Ni=Pt,Ci=bt,Ri=Mi,Oi=a,Pi="Error",Ii="DOMException",Fi=Object.setPrototypeOf||{}.__proto__,Di=Ni(Ii),ji=Error,zi=ji.isError;Ti({target:"Error",stat:!0,sham:!0,forced:!zi||!Fi||Oi(function(){return Di&&!zi(new Di(Ii))||!zi(new ji(Pi,{cause:function(){}}))||zi(Ni("Object","create")(ji.prototype))})},{isError:function(t){if(!Ci(t))return!1;var e=Ri(t);return e===Pi||e===Ii}});var qi=!a(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Ui=x,Li=mt,Hi=v,Bi=qi,Vi=Rr("IE_PROTO"),Wi=Object,Xi=Wi.prototype,Yi=Bi?Wi.getPrototypeOf:function(t){var e=Hi(t);if(Ui(e,Vi))return e[Vi];var r=e.constructor;return Li(r)&&e instanceof r?r.prototype:e instanceof Wi?Xi:null},Ki=h,Zi=Wt,Gi=function(t,e,r){try{return Ki(Zi(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Ji=bt,Qi=function(t){return Ji(t)||null===t},ta=String,ea=TypeError,ra=Gi,na=bt,ia=m,aa=function(t){if(Qi(t))return t;throw new ea("Can't set "+ta(t)+" as a prototype")},sa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=ra(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return ia(r),aa(n),na(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),oa={},la=Ln,ca=Hn,ua=Object.keys||function(t){return la(t,ca)},ha=ft,da=St,fa=dt,pa=Mt,ma=He,ga=ua;oa.f=ha&&!da?Object.defineProperties:function(t,e){pa(t);for(var r,n=ma(e),i=ga(e),a=i.length,s=0;a>s;)fa.f(t,r=i[s++],n[r]);return t};var ba,va=Pt("document","documentElement"),ya=Mt,wa=oa,xa=Hn,ka=Or,$a=va,Sa=xt,_a="prototype",Aa="script",Ea=Rr("IE_PROTO"),Ma=function(){},Ta=function(t){return"<"+Aa+">"+t+"</"+Aa+">"},Na=function(t){t.write(Ta("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ca=function(){try{ba=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Ca="undefined"!=typeof document?document.domain&&ba?Na(ba):(e=Sa("iframe"),r="java"+Aa+":",e.style.display="none",$a.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ta("document.F=Object")),t.close(),t.F):Na(ba);for(var n=xa.length;n--;)delete Ca[_a][xa[n]];return Ca()};ka[Ea]=!0;var Ra=Object.create||function(t,e){var r;return null!==t?(Ma[_a]=ya(t),r=new Ma,Ma[_a]=null,r[Ea]=t):r=Ca(),void 0===e?r:wa.f(r,e)},Oa=Error,Pa=h("".replace),Ia=String(new Oa("zxcasd").stack),Fa=/\n\s*at [^:]*:[^\n]*/,Da=Fa.test(Ia),ja=function(t,e){if(Da&&"string"==typeof t&&!Oa.prepareStackTrace)for(;e--;)t=Pa(t,Fa,"");return t},za=Re,qa=!a(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",za(1,7)),7!==t.stack)}),Ua=fr,La=ja,Ha=qa,Ba=Error.captureStackTrace,Va=Mi,Wa=String,Xa=function(t){if("Symbol"===Va(t))throw new TypeError("Cannot convert a Symbol value to a string");return Wa(t)},Ya=Xa,Ka=function(t,e){return void 0===t?arguments.length<2?"":e:Ya(t)},Za=wi,Ga=It,Ja=Yi,Qa=sa,ts=ni,es=Ra,rs=fr,ns=Re,is=function(t,e,r,n){Ha&&(Ba?Ba(t,e):Ua(t,"stack",La(r,n)))},as=Ka,ss=ut,os=a,ls=n.SuppressedError,cs=ss("toStringTag"),us=Error,hs=!!ls&&3!==ls.length,ds=!!ls&&os(function(){return 4===new ls(1,2,3,{cause:4}).cause}),fs=hs||ds,ps=function(t,e,r){var n,i=Ga(ms,this);return Qa?n=!fs||i&&Ja(this)!==ms?Qa(new us,i?Ja(this):ms):new ls:(n=i?this:es(ms),rs(n,cs,"Error")),void 0!==r&&rs(n,"message",as(r)),is(n,ps,n.stack,1),rs(n,"error",t),rs(n,"suppressed",e),n};Qa?Qa(ps,us):ts(ps,us,{name:!0});var ms=ps.prototype=fs?ls.prototype:es(us.prototype,{constructor:ns(1,ps),message:ns(1,""),name:ns(1,"SuppressedError")});fs&&(ms.constructor=ps),Za({global:!0,constructor:!0,arity:3,forced:fs},{SuppressedError:ps});var gs=Fe,bs=Array.isArray||function(t){return"Array"===gs(t)},vs=ft,ys=bs,ws=TypeError,xs=Object.getOwnPropertyDescriptor,ks=vs&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(ys(t)&&!xs(t,"length").writable)throw new ws("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},$s=TypeError,Ss=function(t){if(t>9007199254740991)throw new $s("Maximum allowed index exceeded");return t},_s=v,As=Rn,Es=ks,Ms=Ss;wi({target:"Array",proto:!0,arity:1,forced:a(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=_s(this),r=As(e),n=arguments.length;Ms(r+n);for(var i=0;i<n;i++)e[r]=arguments[i],r++;return Es(e,r),r}});var Ts=ft,Ns=dt,Cs=Re,Rs=function(t,e,r){Ts?Ns.f(t,e,Cs(0,r)):t[e]=r},Os=Rn,Ps=Sn,Is=He,Fs=Rs,Ds=Array,js=RangeError;wi({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){var r=Is(this),n=Os(r),i=Ps(t),a=i<0?n+i:i;if(a>=n||a<0)throw new js("Incorrect index");for(var s=new Ds(n),o=0;o<n;o++)Fs(s,o,o===a?e:r[o]);return s}});var zs=wi,qs=h,Us=Math.pow,Ls=Us(2,-24),Hs=.0009765625,Bs=qs(DataView.prototype.getUint16);zs({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,n=1023&t;return 31===r?0===n?0===e?1/0:-1/0:NaN:0===r?n*(0===e?Ls:-Ls):Us(2,r-15)*(0===e?1+n*Hs:-1-n*Hs)}(Bs(this,t,arguments.length>1&&arguments[1]))}});var Vs=Mi,Ws=TypeError,Xs=Sn,Ys=Nn,Ks=RangeError,Zs=function(t){if(void 0===t)return 0;var e=Xs(t),r=Ys(e);if(e!==r)throw new Ks("Wrong length or index");return r},Gs=Math.log,Js=Math.LN2,Qs=Math.log2||function(t){return Gs(t)/Js},to=4503599627370496,eo=function(t){return t+to-to},ro=wi,no=h,io=function(t){if("DataView"===Vs(t))return t;throw new Ws("Argument is not a DataView")},ao=Zs,so=Qs,oo=eo,lo=Math.floor,co=Math.pow,uo=1024,ho=no(DataView.prototype.setUint16);ro({target:"DataView",proto:!0},{setFloat16:function(t,e){ho(io(this),ao(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|oo(16777216*t);var r=lo(so(t));if(-15===r)return e<<15|uo;var n=oo((t*co(2,-r)-1)*uo);return n===uo?e<<15|r+16<<10:e<<15|r+15<<10|n}(+e),arguments.length>2&&arguments[2])}});var fo=fn,po=dt,mo=function(t,e,r){return r.get&&fo(r.get,e,{getter:!0}),r.set&&fo(r.set,e,{setter:!0}),po.f(t,e,r)},go="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,bo=n,vo=Gi,yo=Fe,wo=bo.ArrayBuffer,xo=bo.TypeError,ko=wo&&vo(wo.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==yo(t))throw new xo("ArrayBuffer expected");return t.byteLength},$o=go,So=ko,_o=n.DataView,Ao=function(t){if(!$o||0!==So(t))return!1;try{return new _o(t),!1}catch(t){return!0}},Eo=ft,Mo=mo,To=Ao,No=ArrayBuffer.prototype;Eo&&!("detached"in No)&&Mo(No,"detached",{configurable:!0,get:function(){return To(this)}});var Co,Ro,Oo,Po,Io=Ao,Fo=TypeError,Do=function(t){if(Io(t))throw new Fo("ArrayBuffer is detached");return t},jo=n,zo=H,qo=Fe,Uo=function(t){return zo.slice(0,t.length)===t},Lo=Uo("Bun/")?"BUN":Uo("Cloudflare-Workers")?"CLOUDFLARE":Uo("Deno/")?"DENO":Uo("Node.js/")?"NODE":jo.Bun&&"string"==typeof Bun.version?"BUN":jo.Deno&&"object"==typeof Deno.version?"DENO":"process"===qo(jo.process)?"NODE":jo.window&&jo.document?"BROWSER":"REST",Ho="NODE"===Lo,Bo=n,Vo=Ho,Wo=a,Xo=Z,Yo=Lo,Ko=n.structuredClone,Zo=!!Ko&&!Wo(function(){if("DENO"===Yo&&Xo>92||"NODE"===Yo&&Xo>94||"BROWSER"===Yo&&Xo>97)return!1;var t=new ArrayBuffer(8),e=Ko(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Go=n,Jo=function(t){if(Vo){try{return Bo.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},Qo=Zo,tl=Go.structuredClone,el=Go.ArrayBuffer,rl=Go.MessageChannel,nl=!1;if(Qo)nl=function(t){tl(t,{transfer:[t]})};else if(el)try{rl||(Co=Jo("worker_threads"))&&(rl=Co.MessageChannel),rl&&(Ro=new rl,Oo=new el(2),Po=function(t){Ro.port1.postMessage(null,[t])},2===Oo.byteLength&&(Po(Oo),0===Oo.byteLength&&(nl=Po)))}catch(t){}var il=nl,al=n,sl=h,ol=Gi,ll=Zs,cl=Do,ul=ko,hl=il,dl=Zo,fl=al.structuredClone,pl=al.ArrayBuffer,ml=al.DataView,gl=Math.max,bl=Math.min,vl=pl.prototype,yl=ml.prototype,wl=sl(vl.slice),xl=ol(vl,"resizable","get"),kl=ol(vl,"maxByteLength","get"),$l=sl(yl.getInt8),Sl=sl(yl.setInt8),_l=(dl||hl)&&function(t,e,r){var n,i=ul(t),a=void 0===e?i:ll(e),s=!xl||!xl(t);if(cl(t),dl&&(t=fl(t,{transfer:[t]}),i===a&&(r||s)))return t;if(i>=a&&(!r||s))n=wl(t,0,a);else{var o=r&&!s&&kl?{maxByteLength:gl(a,kl(t))}:void 0;n=new pl(a,o);for(var l=new ml(t),c=new ml(n),u=bl(a,i),h=0;h<u;h++)Sl(c,h,$l(l,h))}return dl||hl(t),n},Al=_l;Al&&wi({target:"ArrayBuffer",proto:!0},{transfer:function(){return Al(this,arguments.length?arguments[0]:void 0,!0)}});var El=_l;El&&wi({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return El(this,arguments.length?arguments[0]:void 0,!1)}});var Ml=It,Tl=TypeError,Nl=function(t,e){if(Ml(e,t))return t;throw new Tl("Incorrect invocation")},Cl=vn,Rl=function(t,e,r){for(var n in e)Cl(t,n,e[n],r);return t},Ol=Fe,Pl=h,Il=function(t){if("Function"===Ol(t))return Pl(t)},Fl=Wt,Dl=s,jl=Il(Il.bind),zl=function(t,e){return Fl(t),void 0===e?t:Dl?jl(t,e):function(){return t.apply(e,arguments)}},ql=Pt,Ul=Ct,Ll=h,Hl=zl,Bl=Mt,Vl=Wt,Wl=d,Xl=Kt,Yl=ut,Kl=Yl("asyncDispose"),Zl=Yl("dispose"),Gl=Ll([].push),Jl=function(t,e,r){return arguments.length<3&&!Wl(t)&&(r=Vl(function(t,e){if("async-dispose"===e){var r=Xl(t,Kl);return void 0!==r||void 0===(r=Xl(t,Zl))?r:function(){var t=this;return new(ql("Promise"))(function(e){Ul(r,t),e(void 0)})}}return Xl(t,Zl)}(Bl(t),e))),void 0===r?function(){}:Hl(r,t)},Ql=function(t,e,r,n){var i;if(arguments.length<4){if(Wl(e)&&"sync-dispose"===r)return;i=Jl(e,r)}else i=Jl(void 0,r,n);Gl(t.stack,i)},tc=wi,ec=ft,rc=Wt,nc=Nl,ic=vn,ac=Rl,sc=mo,oc=ut,lc=Xr,cc=Ql,uc=Pt("SuppressedError"),hc=ReferenceError,dc=oc("dispose"),fc=oc("toStringTag"),pc="DisposableStack",mc=lc.set,gc=lc.getterFor(pc),bc="sync-dispose",vc="disposed",yc=function(t){var e=gc(t);if(e.state===vc)throw new hc(pc+" already disposed");return e},wc=function(){mc(nc(this,xc),{type:pc,state:"pending",stack:[]}),ec||(this.disposed=!1)},xc=wc.prototype;ac(xc,{dispose:function(){var t=gc(this);if(t.state!==vc){t.state=vc,ec||(this.disposed=!0);for(var e,r=t.stack,n=r.length,i=!1;n;){var a=r[--n];r[n]=null;try{a()}catch(t){i?e=new uc(t,e):(i=!0,e=t)}}if(t.stack=null,i)throw e}},use:function(t){return cc(yc(this),t,bc),t},adopt:function(t,e){var r=yc(this);return rc(e),cc(r,void 0,bc,function(){e(t)}),t},defer:function(t){var e=yc(this);rc(t),cc(e,void 0,bc,t)},move:function(){var t=yc(this),e=new wc;return gc(e).stack=t.stack,t.stack=[],t.state=vc,ec||(this.disposed=!0),e}}),ec&&sc(xc,"disposed",{configurable:!0,get:function(){return gc(this).state===vc}}),ic(xc,dc,xc.dispose,{name:"dispose"}),ic(xc,fc,pc,{nonWritable:!0}),tc({global:!0,constructor:!0},{DisposableStack:wc});var kc,$c,Sc,_c=a,Ac=mt,Ec=bt,Mc=Yi,Tc=vn,Nc=ut("iterator");[].keys&&"next"in(Sc=[].keys())&&($c=Mc(Mc(Sc)))!==Object.prototype&&(kc=$c);var Cc=!Ec(kc)||_c(function(){var t={};return kc[Nc].call(t)!==t});Cc&&(kc={}),Ac(kc[Nc])||Tc(kc,Nc,function(){return this});var Rc={IteratorPrototype:kc},Oc=wi,Pc=n,Ic=Nl,Fc=Mt,Dc=mt,jc=Yi,zc=mo,qc=Rs,Uc=a,Lc=x,Hc=Rc.IteratorPrototype,Bc=ft,Vc="constructor",Wc="Iterator",Xc=ut("toStringTag"),Yc=TypeError,Kc=Pc[Wc],Zc=!Dc(Kc)||Kc.prototype!==Hc||!Uc(function(){Kc({})}),Gc=function(){if(Ic(this,Hc),jc(this)===Hc)throw new Yc("Abstract class Iterator not directly constructable")},Jc=function(t,e){Bc?zc(Hc,t,{configurable:!0,get:function(){return e},set:function(e){if(Fc(this),this===Hc)throw new Yc("You can't redefine this property");Lc(this,t)?this[t]=e:qc(this,t,e)}}):Hc[t]=e};Lc(Hc,Xc)||Jc(Xc,Wc),!Zc&&Lc(Hc,Vc)&&Hc[Vc]!==Object||Jc(Vc,Gc),Gc.prototype=Hc,Oc({global:!0,constructor:!0,forced:Zc},{Iterator:Gc});var Qc={},tu=Mi,eu=Kt,ru=d,nu=Qc,iu=ut("iterator"),au=function(t){if(!ru(t))return eu(t,iu)||eu(t,"@@iterator")||nu[tu(t)]},su=function(t,e){return{value:t,done:e}},ou=Ct,lu=Mt,cu=Kt,uu=function(t,e,r){var n,i;lu(t);try{if(!(n=cu(t,"return"))){if("throw"===e)throw r;return r}n=ou(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return lu(n),r},hu=uu,du=Ct,fu=Ra,pu=fr,mu=Rl,gu=Xr,bu=Kt,vu=Rc.IteratorPrototype,yu=su,wu=uu,xu=function(t,e,r){for(var n=t.length-1;n>=0;n--)if(void 0!==t[n])try{r=hu(t[n].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},ku=ut("toStringTag"),$u="IteratorHelper",Su="WrapForValidIterator",_u="normal",Au="throw",Eu=gu.set,Mu=function(t){var e=gu.getterFor(t?Su:$u);return mu(fu(vu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return yu(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:yu(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),n=r.iterator,i=r.done;if(r.done=!0,t){var a=bu(n,"return");return a?du(a,n):yu(void 0,!0)}if(i)return yu(void 0,!0);if(r.inner)try{wu(r.inner.iterator,_u)}catch(t){return wu(n,Au,t)}if(r.openIters)try{xu(r.openIters,_u)}catch(t){if(n)return wu(n,Au,t);throw t}return n&&wu(n,_u),yu(void 0,!0)}})},Tu=Mu(!0),Nu=Mu(!1);pu(Nu,ku,"Iterator Helper");var Cu=function(t,e,r){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?Su:$u,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,Eu(this,i)};return n.prototype=e?Tu:Nu,n},Ru=wi,Ou=Ct,Pu=Wt,Iu=Mt,Fu=au,Du=Array,ju=Cu(function(){for(;;){var t=this.iterator;if(!t){var e=this.nextIterableIndex++,r=this.iterables;if(e>=r.length)return void(this.done=!0);var n=r[e];this.iterables[e]=null,t=this.iterator=Iu(Ou(n.method,n.iterable)),this.next=t.next}var i=Iu(Ou(this.next,t));if(!i.done)return i.value;this.iterator=null,this.next=null}});Ru({target:"Iterator",stat:!0,forced:false},{concat:function(){for(var t=arguments.length,e=Du(t),r=0;r<t;r++){var n=Iu(arguments[r]);e[r]={iterable:n,method:Pu(Fu(n))}}return new ju({iterables:e,nextIterableIndex:0,iterator:null,next:null})}});var zu=Ct,qu=vn,Uu=Kt,Lu=x,Hu=Rc.IteratorPrototype,Bu=ut("dispose");Lu(Hu,Bu)||qu(Hu,Bu,function(){var t=Uu(this,"return");t&&zu(t,this)});var Vu=function(t){return{iterator:t,next:t.next,done:!1}},Wu=RangeError,Xu=function(t){if(t==t)return t;throw new Wu("NaN is not allowed")},Yu=Sn,Ku=RangeError,Zu=function(t){var e=Yu(t);if(e<0)throw new Ku("The argument can't be less than 0");return e},Gu=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Ju=n,Qu=function(t,e){var r=Ju.Iterator,n=r&&r.prototype,i=n&&n[t],a=!1;if(i)try{i.call({next:function(){return{done:!0}},return:function(){a=!0}},-1)}catch(t){t instanceof e||(a=!1)}if(!a)return i},th=wi,eh=Ct,rh=Mt,nh=Vu,ih=Xu,ah=Zu,sh=uu,oh=Cu,lh=Qu,ch=!Gu("drop",0),uh=!ch&&lh("drop",RangeError),hh=ch||uh,dh=oh(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=rh(eh(r,e)),this.done=!!t.done)return;if(t=rh(eh(r,e)),!(this.done=!!t.done))return t.value});th({target:"Iterator",proto:!0,real:!0,forced:hh},{drop:function(t){var e;rh(this);try{e=ah(ih(+t))}catch(t){sh(this,"throw",t)}return uh?eh(uh,this,e):new dh(nh(this),{remaining:e})}});var fh=Qc,ph=ut("iterator"),mh=Array.prototype,gh=Ct,bh=Wt,vh=Mt,yh=Lt,wh=au,xh=TypeError,kh=function(t,e){var r=arguments.length<2?wh(t):e;if(bh(r))return vh(gh(r,t));throw new xh(yh(t)+" is not iterable")},$h=zl,Sh=Ct,_h=Mt,Ah=Lt,Eh=function(t){return void 0!==t&&(fh.Array===t||mh[ph]===t)},Mh=Rn,Th=It,Nh=kh,Ch=au,Rh=uu,Oh=TypeError,Ph=function(t,e){this.stopped=t,this.result=e},Ih=Ph.prototype,Fh=function(t,e,r){var n,i,a,s,o,l,c,u=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_RECORD),f=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),m=$h(e,u),g=function(t){var e=n;return n=void 0,e&&Rh(e,"normal"),new Ph(!0,t)},b=function(t){return h?(_h(t),p?m(t[0],t[1],g):m(t[0],t[1])):p?m(t,g):m(t)};if(d)n=t.iterator;else if(f)n=t;else{if(!(i=Ch(t)))throw new Oh(Ah(t)+" is not iterable");if(Eh(i)){for(a=0,s=Mh(t);s>a;a++)if((o=b(t[a]))&&Th(Ih,o))return o;return new Ph(!1)}n=Nh(t,i)}for(l=d?t.next:n.next;!(c=Sh(l,n)).done;){var v=c.value;try{o=b(v)}catch(t){if(!n)throw t;Rh(n,"throw",t)}if("object"==typeof o&&o&&Th(Ih,o))return o}return new Ph(!1)},Dh=wi,jh=Ct,zh=Fh,qh=Wt,Uh=Mt,Lh=Vu,Hh=uu,Bh=Qu("every",TypeError);Dh({target:"Iterator",proto:!0,real:!0,forced:Bh},{every:function(t){Uh(this);try{qh(t)}catch(t){Hh(this,"throw",t)}if(Bh)return jh(Bh,this,t);var e=Lh(this),r=0;return!zh(e,function(e,n){if(!t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Vh=Mt,Wh=uu,Xh=function(t,e,r,n){try{return n?e(Vh(r)[0],r[1]):e(r)}catch(e){Wh(t,"throw",e)}},Yh=wi,Kh=Ct,Zh=Wt,Gh=Mt,Jh=Vu,Qh=Cu,td=Xh,ed=uu,rd=Qu,nd=!Gu("filter",function(){}),id=!nd&&rd("filter",TypeError),ad=nd||id,sd=Qh(function(){for(var t,e,r=this.iterator,n=this.predicate,i=this.next;;){if(t=Gh(Kh(i,r)),this.done=!!t.done)return;if(e=t.value,td(r,n,[e,this.counter++],!0))return e}});Yh({target:"Iterator",proto:!0,real:!0,forced:ad},{filter:function(t){Gh(this);try{Zh(t)}catch(t){ed(this,"throw",t)}return id?Kh(id,this,t):new sd(Jh(this),{predicate:t})}});var od=wi,ld=Ct,cd=Fh,ud=Wt,hd=Mt,dd=Vu,fd=uu,pd=Qu("find",TypeError);od({target:"Iterator",proto:!0,real:!0,forced:pd},{find:function(t){hd(this);try{ud(t)}catch(t){fd(this,"throw",t)}if(pd)return ld(pd,this,t);var e=dd(this),r=0;return cd(e,function(e,n){if(t(e,r++))return n(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var md=Ct,gd=Mt,bd=Vu,vd=au,yd=function(t,e){e&&"string"==typeof t||gd(t);var r=vd(t);return bd(gd(void 0!==r?md(r,t):t))},wd=wi,xd=Ct,kd=Wt,$d=Mt,Sd=Vu,_d=yd,Ad=Cu,Ed=uu,Md=Qu;var Td=!Gu("flatMap",function(){}),Nd=!Td&&Md("flatMap",TypeError),Cd=Td||Nd||function(){try{var t=Iterator.prototype.flatMap.call(new Map([[4,5]]).entries(),function(t){return t});t.next(),t.return()}catch(t){return!0}}(),Rd=Ad(function(){for(var t,e,r=this.iterator,n=this.mapper;;){if(e=this.inner)try{if(!(t=$d(xd(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){Ed(r,"throw",t)}if(t=$d(xd(this.next,r)),this.done=!!t.done)return;try{this.inner=_d(n(t.value,this.counter++),!1)}catch(t){Ed(r,"throw",t)}}});wd({target:"Iterator",proto:!0,real:!0,forced:Cd},{flatMap:function(t){$d(this);try{kd(t)}catch(t){Ed(this,"throw",t)}return Nd?xd(Nd,this,t):new Rd(Sd(this),{mapper:t,inner:null})}});var Od=wi,Pd=Ct,Id=Fh,Fd=Wt,Dd=Mt,jd=Vu,zd=uu,qd=Qu("forEach",TypeError);Od({target:"Iterator",proto:!0,real:!0,forced:qd},{forEach:function(t){Dd(this);try{Fd(t)}catch(t){zd(this,"throw",t)}if(qd)return Pd(qd,this,t);var e=jd(this),r=0;Id(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var Ud=wi,Ld=Ct,Hd=v,Bd=It,Vd=Rc.IteratorPrototype,Wd=Cu,Xd=yd,Yd=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),Kd=Wd(function(){return Ld(this.next,this.iterator)},!0);Ud({target:"Iterator",stat:!0,forced:Yd},{from:function(t){var e=Xd("string"==typeof t?Hd(t):t,!0);return Bd(Vd,e.iterator)?e.iterator:new Kd(e)}});var Zd=wi,Gd=Ct,Jd=Wt,Qd=Mt,tf=Vu,ef=Cu,rf=Xh,nf=uu,af=Qu,sf=!Gu("map",function(){}),of=!sf&&af("map",TypeError),lf=sf||of,cf=ef(function(){var t=this.iterator,e=Qd(Gd(this.next,t));if(!(this.done=!!e.done))return rf(t,this.mapper,[e.value,this.counter++],!0)});Zd({target:"Iterator",proto:!0,real:!0,forced:lf},{map:function(t){Qd(this);try{Jd(t)}catch(t){nf(this,"throw",t)}return of?Gd(of,this,t):new cf(tf(this),{mapper:t})}});var uf=s,hf=Function.prototype,df=hf.apply,ff=hf.call,pf="object"==typeof Reflect&&Reflect.apply||(uf?ff.bind(df):function(){return ff.apply(df,arguments)}),mf=wi,gf=Fh,bf=Wt,vf=Mt,yf=Vu,wf=uu,xf=Qu,kf=pf,$f=TypeError,Sf=a(function(){[].keys().reduce(function(){},void 0)}),_f=!Sf&&xf("reduce",$f);mf({target:"Iterator",proto:!0,real:!0,forced:Sf||_f},{reduce:function(t){vf(this);try{bf(t)}catch(t){wf(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(_f)return kf(_f,this,e?[t]:[t,r]);var n=yf(this),i=0;if(gf(n,function(n){e?(e=!1,r=n):r=t(r,n,i),i++},{IS_RECORD:!0}),e)throw new $f("Reduce of empty iterator with no initial value");return r}});var Af=wi,Ef=Ct,Mf=Fh,Tf=Wt,Nf=Mt,Cf=Vu,Rf=uu,Of=Qu("some",TypeError);Af({target:"Iterator",proto:!0,real:!0,forced:Of},{some:function(t){Nf(this);try{Tf(t)}catch(t){Rf(this,"throw",t)}if(Of)return Ef(Of,this,t);var e=Cf(this),r=0;return Mf(e,function(e,n){if(t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Pf=wi,If=Ct,Ff=Mt,Df=Vu,jf=Xu,zf=Zu,qf=Cu,Uf=uu,Lf=Qu,Hf=!Gu("take",1),Bf=!Hf&&Lf("take",RangeError),Vf=Hf||Bf,Wf=qf(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,Uf(t,"normal",void 0);var e=Ff(If(this.next,t));return(this.done=!!e.done)?void 0:e.value});Pf({target:"Iterator",proto:!0,real:!0,forced:Vf},{take:function(t){var e;Ff(this);try{e=zf(jf(+t))}catch(t){Uf(this,"throw",t)}return Bf?If(Bf,this,e):new Wf(Df(this),{remaining:e})}});var Xf=Mt,Yf=Rs,Kf=Fh,Zf=Vu;wi({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return Kf(Zf(Xf(this)),function(r){Yf(t,e++,r)},{IS_RECORD:!0}),t}});var Gf=!a(function(){var t="9007199254740993",e=JSON.rawJSON(t);return!JSON.isRawJSON(e)||JSON.stringify(e)!==t}),Jf=bt,Qf=Xr.get,tp=function(t){if(!Jf(t))return!1;var e=Qf(t);return!!e&&"RawJSON"===e.type};wi({target:"JSON",stat:!0,forced:!Gf},{isRawJSON:tp});var ep=h,rp=x,np=SyntaxError,ip=parseInt,ap=String.fromCharCode,sp=ep("".charAt),op=ep("".slice),lp=ep(/./.exec),cp={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},up=/^[\da-f]{4}$/i,hp=/^[\u0000-\u001F]$/,dp=function(t,e){for(var r=!0,n="";e<t.length;){var i=sp(t,e);if("\\"===i){var a=op(t,e,e+2);if(rp(cp,a))n+=cp[a],e+=2;else{if("\\u"!==a)throw new np('Unknown escape sequence: "'+a+'"');var s=op(t,e+=2,e+4);if(!lp(up,s))throw new np("Bad Unicode escape at: "+e);n+=ap(ip(s,16)),e+=4}}else{if('"'===i){r=!1,e++;break}if(lp(hp,i))throw new np("Bad control character in string literal at: "+e);n+=i,e++}}if(r)throw new np("Unterminated string at: "+e);return{value:n,end:e}},fp=wi,pp=ft,mp=n,gp=Pt,bp=h,vp=Ct,yp=mt,wp=bt,xp=bs,kp=x,$p=Xa,Sp=Rn,_p=Rs,Ap=a,Ep=dp,Mp=tt,Tp=mp.JSON,Np=mp.Number,Cp=mp.SyntaxError,Rp=Tp&&Tp.parse,Op=gp("Object","keys"),Pp=Object.getOwnPropertyDescriptor,Ip=bp("".charAt),Fp=bp("".slice),Dp=bp(/./.exec),jp=bp([].push),zp=/^\d$/,qp=/^[1-9]$/,Up=/^[\d-]$/,Lp=/^[\t\n\r ]$/,Hp=function(t,e,r,n){var i,a,s,o,l,c=t[e],u=n&&c===n.value,h=u&&"string"==typeof n.source?{source:n.source}:{};if(wp(c)){var d=xp(c),f=u?n.nodes:d?[]:{};if(d)for(i=f.length,s=Sp(c),o=0;o<s;o++)Bp(c,o,Hp(c,""+o,r,o<i?f[o]:void 0));else for(a=Op(c),s=Sp(a),o=0;o<s;o++)l=a[o],Bp(c,l,Hp(c,l,r,kp(f,l)?f[l]:void 0))}return vp(r,t,e,c,h)},Bp=function(t,e,r){if(pp){var n=Pp(t,e);if(n&&!n.configurable)return}void 0===r?delete t[e]:_p(t,e,r)},Vp=function(t,e,r,n){this.value=t,this.end=e,this.source=r,this.nodes=n},Wp=function(t,e){this.source=t,this.index=e};Wp.prototype={fork:function(t){return new Wp(this.source,t)},parse:function(){var t=this.source,e=this.skip(Lp,this.index),r=this.fork(e),n=Ip(t,e);if(Dp(Up,n))return r.number();switch(n){case"{":return r.object();case"[":return r.array();case'"':return r.string();case"t":return r.keyword(!0);case"f":return r.keyword(!1);case"n":return r.keyword(null)}throw new Cp('Unexpected character: "'+n+'" at: '+e)},node:function(t,e,r,n,i){return new Vp(e,n,t?null:Fp(this.source,r,n),i)},object:function(){for(var t=this.source,e=this.index+1,r=!1,n={},i={},a=!1;e<t.length;){if(e=this.until(['"',"}"],e),"}"===Ip(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).string(),o=s.value;e=s.end,e=this.until([":"],e)+1,e=this.skip(Lp,e),s=this.fork(e).parse(),_p(i,o,s),_p(n,o,s.value),e=this.until([",","}"],s.end);var l=Ip(t,e);if(","===l)r=!0,e++;else if("}"===l){e++,a=!0;break}}if(!a)throw new Cp("Unterminated object at: "+e);return this.node(1,n,this.index,e,i)},array:function(){for(var t=this.source,e=this.index+1,r=!1,n=[],i=[],a=!1;e<t.length;){if(e=this.skip(Lp,e),"]"===Ip(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).parse();if(jp(i,s),jp(n,s.value),e=this.until([",","]"],s.end),","===Ip(t,e))r=!0,e++;else if("]"===Ip(t,e)){e++,a=!0;break}}if(!a)throw new Cp("Unterminated array at: "+e);return this.node(1,n,this.index,e,i)},string:function(){var t=this.index,e=Ep(this.source,this.index+1);return this.node(0,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,r=e;if("-"===Ip(t,r)&&r++,"0"===Ip(t,r))r++;else{if(!Dp(qp,Ip(t,r)))throw new Cp("Failed to parse number at: "+r);r=this.skip(zp,r+1)}if("."===Ip(t,r)){var n=r+1;if(n===(r=this.skip(zp,n)))throw new Cp("Failed to parse number's fraction at: "+r)}if(("e"===Ip(t,r)||"E"===Ip(t,r))&&(r++,"+"!==Ip(t,r)&&"-"!==Ip(t,r)||r++,r===(r=this.skip(zp,r))))throw new Cp("Failed to parse number's exponent value at: "+r);return this.node(0,Np(Fp(t,e,r)),e,r)},keyword:function(t){var e=""+t,r=this.index,n=r+e.length;if(Fp(this.source,r,n)!==e)throw new Cp("Failed to parse value at: "+r);return this.node(0,t,r,n)},skip:function(t,e){for(var r=this.source;e<r.length&&Dp(t,Ip(r,e));e++);return e},until:function(t,e){e=this.skip(Lp,e);for(var r=Ip(this.source,e),n=0;n<t.length;n++)if(t[n]===r)return e;throw new Cp('Unexpected character: "'+r+'" at: '+e)}};var Xp=Ap(function(){var t,e="9007199254740993";return Rp(e,function(e,r,n){t=n.source}),t!==e}),Yp=Mp&&!Ap(function(){return 1/Rp("-0 \t")!=-1/0});fp({target:"JSON",stat:!0,forced:Xp},{parse:function(t,e){return Yp&&!yp(e)?Rp(t):function(t,e){t=$p(t);var r=new Wp(t,0),n=r.parse(),i=n.value,a=r.skip(Lp,n.end);if(a<t.length)throw new Cp('Unexpected extra character: "'+Ip(t,a)+'" after the parsed data at: '+a);return yp(e)?Hp({"":i},"",e,n):i}(t,e)}});var Kp=wi,Zp=!a(function(){return Object.isExtensible(Object.preventExtensions({}))}),Gp=Gf,Jp=Pt,Qp=h,tm=Xa,em=Rs,rm=Xr.set,nm=SyntaxError,im=Jp("JSON","parse"),am=Jp("Object","create"),sm=Jp("Object","freeze"),om=Qp("".charAt),lm="Unacceptable as raw JSON",cm=function(t){return" "===t||"\t"===t||"\n"===t||"\r"===t};Kp({target:"JSON",stat:!0,forced:!Gp},{rawJSON:function(t){var e=tm(t);if(""===e||cm(om(e,0))||cm(om(e,e.length-1)))throw new nm(lm);var r=im(e);if("object"==typeof r&&null!==r)throw new nm(lm);var n=am(null);return rm(n,{type:"RawJSON"}),em(n,"rawJSON",e),Zp?sm(n):n}});var um=h([].slice),hm=wi,dm=Pt,fm=pf,pm=Ct,mm=h,gm=a,bm=bs,vm=mt,ym=tp,wm=qt,xm=Fe,km=Xa,$m=um,Sm=dp,_m=q,Am=tt,Em=Gf,Mm=String,Tm=dm("JSON","stringify"),Nm=mm(/./.exec),Cm=mm("".charAt),Rm=mm("".charCodeAt),Om=mm("".replace),Pm=mm("".slice),Im=mm([].push),Fm=mm(1.1.toString),Dm=/[\uD800-\uDFFF]/g,jm=/^[\uD800-\uDBFF]$/,zm=/^[\uDC00-\uDFFF]$/,qm=_m(),Um=qm.length,Lm=!Am||gm(function(){var t=dm("Symbol")("stringify detection");return"[null]"!==Tm([t])||"{}"!==Tm({a:t})||"{}"!==Tm(Object(t))}),Hm=gm(function(){return'"\\udf06\\ud834"'!==Tm("\udf06\ud834")||'"\\udead"'!==Tm("\udead")}),Bm=Lm?function(t,e){var r=$m(arguments),n=Wm(e);if(vm(n)||void 0!==t&&!wm(t))return r[1]=function(t,e){if(vm(n)&&(e=pm(n,this,Mm(t),e)),!wm(e))return e},fm(Tm,null,r)}:Tm,Vm=function(t,e,r){var n=Cm(r,e-1),i=Cm(r,e+1);return Nm(jm,t)&&!Nm(zm,i)||Nm(zm,t)&&!Nm(jm,n)?"\\u"+Fm(Rm(t,0),16):t},Wm=function(t){if(vm(t))return t;if(bm(t)){for(var e=t.length,r=[],n=0;n<e;n++){var i=t[n];"string"==typeof i?Im(r,i):"number"!=typeof i&&"Number"!==xm(i)&&"String"!==xm(i)||Im(r,km(i))}var a=r.length,s=!0;return function(t,e){if(s)return s=!1,e;if(bm(this))return e;for(var n=0;n<a;n++)if(r[n]===t)return e}}};Tm&&hm({target:"JSON",stat:!0,arity:3,forced:Lm||Hm||!Em},{stringify:function(t,e,r){var n=Wm(e),i=[],a=Bm(t,function(t,e){var r=vm(n)?pm(n,this,Mm(t),e):e;return!Em&&ym(r)?qm+(Im(i,r.rawJSON)-1):r},r);if("string"!=typeof a)return a;if(Hm&&(a=Om(a,Dm,Vm)),Em)return a;for(var s="",o=a.length,l=0;l<o;l++){var c=Cm(a,l);if('"'===c){var u=Sm(a,++l).end-1,h=Pm(a,l,u);s+=Pm(h,0,Um)===qm?i[Pm(h,Um)]:'"'+h+'"',l=u}else s+=c}return s}});var Xm=h,Ym=Map.prototype,Km={Map:Map,set:Xm(Ym.set),get:Xm(Ym.get),has:Xm(Ym.has),remove:Xm(Ym.delete)},Zm=wi,Gm=Wt,Jm=m,Qm=Fh,tg=a,eg=Km.Map,rg=Km.has,ng=Km.get,ig=Km.set,ag=h([].push);Zm({target:"Map",stat:!0,forced:tg(function(){return 1!==eg.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){Jm(t),Gm(e);var r=new eg,n=0;return Qm(t,function(t){var i=e(t,n++);rg(r,i)?ag(ng(r,i),t):ig(r,i,[t])}),r}});var sg=Km.get,og=Km.has,lg=Km.set;wi({target:"Map",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return og(this,t)?sg(this,t):(lg(this,t,e),e)}});var cg=Wt,ug=Km.get,hg=Km.has,dg=Km.set;wi({target:"Map",proto:!0,real:!0,forced:false},{getOrInsertComputed:function(t,e){var r=hg(this,t);if(cg(e),r)return ug(this,t);0===t&&1/t==-1/0&&(t=0);var n=e(t);return dg(this,t,n),n}});var fg=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},pg=fg,mg=eo,gg=Math.abs,bg=function(t,e,r,n){var i=+t,a=gg(i),s=pg(i);if(a<n)return s*mg(a/n/e)*n*e;var o=(1+e/2220446049250313e-31)*a,l=o-(o-a);return l>r||l!=l?s*(1/0):s*l};wi({target:"Math",stat:!0},{f16round:function(t){return bg(t,.0009765625,65504,6103515625e-14)}});var vg=wi,yg=h,wg=Fh,xg=RangeError,kg=TypeError,$g=1/0,Sg=Math.abs,_g=Math.pow,Ag=yg([].push),Eg=_g(2,1023),Mg=_g(2,53)-1,Tg=Number.MAX_VALUE,Ng=_g(2,971),Cg={},Rg={},Og={},Pg={},Ig={},Fg=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};vg({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,n=Pg;switch(wg(t,function(t){if(++r>Mg)throw new xg("Maximum allowed index exceeded");if("number"!=typeof t)throw new kg("Value is not a number");n!==Cg&&(t!=t?n=Cg:t===$g?n=n===Rg?Cg:Og:t===-1/0?n=n===Og?Cg:Rg:0===t&&1/t!==$g||n!==Pg&&n!==Ig||(n=Ig,Ag(e,t)))}),n){case Cg:return NaN;case Rg:return-1/0;case Og:return $g;case Pg:return-0}for(var i,a,s,o,l,c,u=[],h=0,d=0;d<e.length;d++){i=e[d];for(var f=0,p=0;p<u.length;p++){if(a=u[p],Sg(i)<Sg(a)&&(c=i,i=a,a=c),o=(s=Fg(i,a)).hi,l=s.lo,Sg(o)===$g){var m=o===$g?1:-1;h+=m,Sg(i=i-m*Eg-m*Eg)<Sg(a)&&(c=i,i=a,a=c),o=(s=Fg(i,a)).hi,l=s.lo}0!==l&&(u[f++]=l),i=o}u.length=f,0!==i&&Ag(u,i)}var g=u.length-1;if(o=0,l=0,0!==h){var b=g>=0?u[g]:0;if(g--,Sg(h)>1||h>0&&b>0||h<0&&b<0)return h>0?$g:-1/0;if(o=(s=Fg(h*Eg,b/2)).hi,l=s.lo,l*=2,Sg(2*o)===$g)return o>0?o===Eg&&l===-Ng/2&&g>=0&&u[g]<0?Tg:$g:o===-Eg&&l===Ng/2&&g>=0&&u[g]>0?-Tg:-1/0;0!==l&&(u[++g]=l,l=0),o*=2}for(;g>=0&&(o=(s=Fg(o,u[g--])).hi,0===(l=s.lo)););return g>=0&&(l<0&&u[g]<0||l>0&&u[g]>0)&&(a=2*l)===(i=o+a)-o&&(o=i),o}});var Dg=wi,jg=Rs,zg=Pt,qg=h,Ug=Wt,Lg=m,Hg=ue,Bg=Fh,Vg=a,Wg=Object.groupBy,Xg=zg("Object","create"),Yg=qg([].push);Dg({target:"Object",stat:!0,forced:!Wg||Vg(function(){return 1!==Wg("ab",function(t){return t}).a.length})},{groupBy:function(t,e){Lg(t),Ug(e);var r=Xg(null),n=0;return Bg(t,function(t){var i=Hg(e(t,n++));i in r?Yg(r[i],t):jg(r,i,[t])}),r}});var Kg={},Zg=Wt,Gg=TypeError,Jg=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw new Gg("Bad Promise constructor");e=t,r=n}),this.resolve=Zg(e),this.reject=Zg(r)};Kg.f=function(t){return new Jg(t)};var Qg=wi,tb=pf,eb=um,rb=Kg,nb=Wt,ib=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},ab=n.Promise,sb=!1;Qg({target:"Promise",stat:!0,forced:!ab||!ab.try||ib(function(){ab.try(function(t){sb=8===t},8)}).error||!sb},{try:function(t){var e=arguments.length>1?eb(arguments,1):[],r=rb.f(this),n=ib(function(){return tb(nb(t),void 0,e)});return(n.error?r.reject:r.resolve)(n.value),r.promise}});var ob=Kg;wi({target:"Promise",stat:!0},{withResolvers:function(){var t=ob.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var lb=h,cb=a,ub=mt,hb=Mi,db=Ar,fb=function(){},pb=Pt("Reflect","construct"),mb=/^\s*(?:class|function)\b/,gb=lb(mb.exec),bb=!mb.test(fb),vb=function(t){if(!ub(t))return!1;try{return pb(fb,[],t),!0}catch(t){return!1}},yb=function(t){if(!ub(t))return!1;switch(hb(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return bb||!!gb(mb,db(t))}catch(t){return!0}};yb.sham=!0;var wb,xb,kb=!pb||cb(function(){var t;return vb(vb.call)||!vb(Object)||!vb(function(){t=!0})||t})?yb:vb,$b=n,Sb=O,_b=mt,Ab=Yi,Eb=vn,Mb="USE_FUNCTION_CONSTRUCTOR",Tb=ut("asyncIterator"),Nb=$b.AsyncIterator,Cb=Sb.AsyncIteratorPrototype;if(Cb)wb=Cb;else if(_b(Nb))wb=Nb.prototype;else if(Sb[Mb]||$b[Mb])try{xb=Ab(Ab(Ab(Function("return async function*(){}()")()))),Ab(xb)===Object.prototype&&(wb=xb)}catch(t){}wb||(wb={}),_b(wb[Tb])||Eb(wb,Tb,function(){return this});var Rb=wb,Ob=Ct,Pb=Mt,Ib=Ra,Fb=Kt,Db=Rl,jb=Xr,zb=uu,qb=Rb,Ub=su,Lb=Pt("Promise"),Hb="AsyncFromSyncIterator",Bb=jb.set,Vb=jb.getterFor(Hb),Wb=function(t,e,r,n,i){var a=t.done;Lb.resolve(t.value).then(function(t){e(Ub(t,a))},function(t){if(!a&&i)try{zb(n,"throw",t)}catch(e){t=e}r(t)})},Xb=function(t){t.type=Hb,Bb(this,t)};Xb.prototype=Db(Ib(qb),{next:function(){var t=Vb(this),e=arguments.length>0,r=e?arguments[0]:void 0;return new Lb(function(n,i){var a=Pb(e?Ob(t.next,t.iterator,r):Ob(t.next,t.iterator));Wb(a,n,i,t.iterator,!0)})},return:function(){var t=Vb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new Lb(function(n,i){var a=Fb(t,"return");if(void 0===a)return n(Ub(r,!0));var s=Pb(e?Ob(a,t,r):Ob(a,t));Wb(s,n,i,t)})},throw:function(){var t=Vb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new Lb(function(n,i){var a=Fb(t,"throw");if(void 0===a){try{zb(t,"normal")}catch(t){return i(t)}return i(new TypeError("The iterator does not provide a throw method"))}var s=Pb(e?Ob(a,t,r):Ob(a,t));Wb(s,n,i,t,!0)})}});var Yb,Kb,Zb,Gb,Jb,Qb=Xb,tv=Ct,ev=Qb,rv=Mt,nv=kh,iv=Vu,av=Kt,sv=ut("asyncIterator"),ov=n,lv=Ct,cv=Mt,uv=Pt,hv=Kt,dv=Ct,fv=Wt,pv=Mt,mv=bt,gv=Ss,bv=Pt,vv=Rs,yv=ks,wv=Vu,xv=function(t,e,r,n){try{var i=hv(t,"return");if(i)return uv("Promise").resolve(lv(i,t)).then(function(t){try{e!==n&&cv(t)}catch(t){return void n(t)}e(r)},function(t){e===n?e(r):n(t)})}catch(t){return n(e===n?r:t)}e(r)},kv={toArray:(Yb=0,Kb=0===Yb,Zb=1===Yb,Gb=2===Yb,Jb=3===Yb,function(t,e,r){pv(t);var n=void 0!==e;!n&&Kb||fv(e);var i=wv(t),a=bv("Promise"),s=i.iterator,o=i.next,l=0;return new a(function(t,i){var c=function(t){xv(s,i,t,i)},u=function(){try{try{gv(l)}catch(t){return c(t)}a.resolve(pv(dv(o,s))).then(function(o){try{if(pv(o).done)Kb?(yv(r,l),t(r)):t(!Jb&&(Gb||void 0));else{var h=o.value;try{if(n){var d=l++,f=e(h,d),p=function(e){if(Zb)u();else if(Gb)e?u():xv(s,t,!1,i);else if(Kb)try{vv(r,d,e),u()}catch(t){c(t)}else e?xv(s,t,Jb||h,i):u()};mv(f)?a.resolve(f).then(p,c):p(f)}else vv(r,l++,h),u()}catch(t){c(t)}}}catch(t){i(t)}},i)}catch(t){i(t)}};u()})})},$v=zl,Sv=h,_v=kb,Av=function(t,e){var r=arguments.length<2?av(t,sv):e;return r?rv(tv(r,t)):new ev(iv(nv(t)))},Ev=kh,Mv=Vu,Tv=au,Nv=Kt,Cv=Pt,Rv=function(t,e){var r=ov[t],n=r&&r.prototype;return n&&n[e]},Ov=Qb,Pv=kv.toArray,Iv=ut("asyncIterator"),Fv=Sv(Rv("Array","values")),Dv=Sv(Fv([]).next),jv=function(){return new zv(this)},zv=function(t){this.iterator=Fv(t)};zv.prototype.next=function(){return Dv(this.iterator)};var qv=wi,Uv=function(t){var e=this,r=arguments.length,n=r>1?arguments[1]:void 0,i=r>2?arguments[2]:void 0;return new(Cv("Promise"))(function(r){void 0!==n&&(n=$v(n,i));var a=Nv(t,Iv),s=a?void 0:Tv(t)||jv,o=_v(e)?new e:[],l=a?Av(t,a):new Ov(Mv(Ev(t,s)));r(Pv(l,n,o))})},Lv=a,Hv=Array.fromAsync,Bv=!Hv||Lv(function(){var t=0;return Hv.call(function(){return t++,[]},{length:0}),1!==t});qv({target:"Array",stat:!0,forced:Bv},{fromAsync:Uv});var Vv=wi,Wv=ft,Xv=Pt,Yv=Wt,Kv=Nl,Zv=vn,Gv=Rl,Jv=mo,Qv=ut,ty=Xr,ey=Ql,ry=Z,ny=Xv("Promise"),iy=Xv("SuppressedError"),ay=ReferenceError,sy=Qv("asyncDispose"),oy=Qv("toStringTag"),ly="AsyncDisposableStack",cy=ty.set,uy=ty.getterFor(ly),hy="async-dispose",dy="disposed",fy=function(t){var e=uy(t);if(e.state===dy)throw new ay(ly+" already disposed");return e},py=function(){cy(Kv(this,my),{type:ly,state:"pending",stack:[]}),Wv||(this.disposed=!1)},my=py.prototype;Gv(my,{disposeAsync:function(){var t=this;return new ny(function(e,r){var n=uy(t);if(n.state===dy)return e(void 0);n.state=dy,Wv||(t.disposed=!0);var i,a=n.stack,s=a.length,o=!1,l=function(t){o?i=new iy(t,i):(o=!0,i=t),c()},c=function(){if(s){var t=a[--s];a[s]=null;try{ny.resolve(t()).then(c,l)}catch(t){l(t)}}else n.stack=null,o?r(i):e(void 0)};c()})},use:function(t){return ey(fy(this),t,hy),t},adopt:function(t,e){var r=fy(this);return Yv(e),ey(r,void 0,hy,function(){return e(t)}),t},defer:function(t){var e=fy(this);Yv(t),ey(e,void 0,hy,t)},move:function(){var t=fy(this),e=new py;return uy(e).stack=t.stack,t.stack=[],t.state=dy,Wv||(this.disposed=!0),e}}),Wv&&Jv(my,"disposed",{configurable:!0,get:function(){return uy(this).state===dy}}),Zv(my,sy,my.disposeAsync,{name:"disposeAsync"}),Zv(my,oy,ly,{nonWritable:!0}),Vv({global:!0,constructor:!0,forced:ry&&ry<136},{AsyncDisposableStack:py});var gy=Ct,by=vn,vy=Pt,yy=Kt,wy=x,xy=Rb,ky=ut("asyncDispose"),$y=vy("Promise");wy(xy,ky)||by(xy,ky,function(){var t=this;return new $y(function(e,r){var n=yy(t,"return");n?$y.resolve(gy(n,t)).then(function(){e(void 0)},r):e(void 0)})});var Sy,_y=TypeError,Ay=function(t){if("string"==typeof t)return t;throw new _y("Argument is not a string")},Ey=Sn,My=Xa,Ty=m,Ny=RangeError,Cy=Math.floor,Ry=h,Oy=Nn,Py=Xa,Iy=function(t){var e=My(Ty(this)),r="",n=Ey(t);if(n<0||n===1/0)throw new Ny("Wrong number of repetitions");for(;n>0;(n=Cy(n/2))&&(e+=e))n%2&&(r+=e);return r},Fy=m,Dy=Ry(Iy),jy=Ry("".slice),zy=Math.ceil,qy={start:(Sy=!1,function(t,e,r){var n=Py(Fy(t)),i=Oy(e),a=n.length;if(i<=a)return n;var s,o,l=void 0===r?" ":Py(r);return""===l?n:((o=Dy(l,zy((s=i-a)/l.length))).length>s&&(o=jy(o,0,s)),Sy?n+o:o+n)})},Uy=wi,Ly=h,Hy=Ay,By=x,Vy=qy.start,Wy=Array,Xy=RegExp.escape,Yy=Ly("".charAt),Ky=Ly("".charCodeAt),Zy=Ly(1.1.toString),Gy=Ly([].join),Jy=/^[0-9a-z]/i,Qy=/^[$()*+./?[\\\]^{|}]/,tw=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),ew=Ly(Jy.exec),rw={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},nw=function(t){var e=Zy(Ky(t,0),16);return e.length<3?"\\x"+Vy(e,2,"0"):"\\u"+Vy(e,4,"0")};Uy({target:"RegExp",stat:!0,forced:!Xy||"\\x61b"!==Xy("ab")},{escape:function(t){Hy(t);for(var e=t.length,r=Wy(e),n=0;n<e;n++){var i=Yy(t,n);if(0===n&&ew(Jy,i))r[n]=nw(i);else if(By(rw,i))r[n]="\\"+rw[i];else if(ew(Qy,i))r[n]="\\"+i;else if(ew(tw,i))r[n]=nw(i);else{var a=Ky(i,0);55296!=(63488&a)?r[n]=i:a>=56320||n+1>=e||56320!=(64512&Ky(t,n+1))?r[n]=nw(i):(r[n]=i,r[++n]=Yy(t,n))}}return Gy(r,"")}});var iw=h,aw=Set.prototype,sw={Set:Set,add:iw(aw.add),has:iw(aw.has),remove:iw(aw.delete),proto:aw},ow=sw.has,lw=function(t){return ow(t),t},cw=Ct,uw=function(t,e,r){for(var n,i,a=r?t:t.iterator,s=t.next;!(n=cw(s,a)).done;)if(void 0!==(i=e(n.value)))return i},hw=h,dw=uw,fw=sw.Set,pw=sw.proto,mw=hw(pw.forEach),gw=hw(pw.keys),bw=gw(new fw).next,vw=function(t,e,r){return r?dw({iterator:gw(t),next:bw},e):mw(t,e)},yw=vw,ww=sw.Set,xw=sw.add,kw=function(t){var e=new ww;return yw(t,function(t){xw(e,t)}),e},$w=Gi(sw.proto,"size","get")||function(t){return t.size},Sw=Wt,_w=Mt,Aw=Ct,Ew=Sn,Mw=Vu,Tw="Invalid size",Nw=RangeError,Cw=TypeError,Rw=Math.max,Ow=function(t,e){this.set=t,this.size=Rw(e,0),this.has=Sw(t.has),this.keys=Sw(t.keys)};Ow.prototype={getIterator:function(){return Mw(_w(Aw(this.keys,this.set)))},includes:function(t){return Aw(this.has,this.set,t)}};var Pw=function(t){_w(t);var e=+t.size;if(e!=e)throw new Cw(Tw);var r=Ew(e);if(r<0)throw new Nw(Tw);return new Ow(t,r)},Iw=lw,Fw=kw,Dw=$w,jw=Pw,zw=vw,qw=uw,Uw=sw.has,Lw=sw.remove,Hw=Pt,Bw=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},Vw=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},Ww=function(t,e){var r=Hw("Set");try{(new r)[t](Bw(0));try{return(new r)[t](Bw(-1)),!1}catch(n){if(!e)return!0;try{return(new r)[t](Vw(-1/0)),!1}catch(n){return e(new r([1,2])[t](Vw(1/0)))}}}catch(t){return!1}},Xw=wi,Yw=function(t){var e=Iw(this),r=jw(t),n=Fw(e);return Dw(n)<=r.size?zw(n,function(t){r.includes(t)&&Lw(n,t)}):qw(r.getIterator(),function(t){Uw(n,t)&&Lw(n,t)}),n},Kw=a,Zw=!Ww("difference",function(t){return 0===t.size})||Kw(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});Xw({target:"Set",proto:!0,real:!0,forced:Zw},{difference:Yw});var Gw=lw,Jw=$w,Qw=Pw,tx=vw,ex=uw,rx=sw.Set,nx=sw.add,ix=sw.has,ax=a,sx=function(t){var e=Gw(this),r=Qw(t),n=new rx;return Jw(e)>r.size?ex(r.getIterator(),function(t){ix(e,t)&&nx(n,t)}):tx(e,function(t){r.includes(t)&&nx(n,t)}),n};wi({target:"Set",proto:!0,real:!0,forced:!Ww("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||ax(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:sx});var ox=lw,lx=sw.has,cx=$w,ux=Pw,hx=vw,dx=uw,fx=uu,px=function(t){var e=ox(this),r=ux(t);if(cx(e)<=r.size)return!1!==hx(e,function(t){if(r.includes(t))return!1},!0);var n=r.getIterator();return!1!==dx(n,function(t){if(lx(e,t))return fx(n.iterator,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Ww("isDisjointFrom",function(t){return!t})},{isDisjointFrom:px});var mx=lw,gx=$w,bx=vw,vx=Pw,yx=function(t){var e=mx(this),r=vx(t);return!(gx(e)>r.size)&&!1!==bx(e,function(t){if(!r.includes(t))return!1},!0)};wi({target:"Set",proto:!0,real:!0,forced:!Ww("isSubsetOf",function(t){return t})},{isSubsetOf:yx});var wx=lw,xx=sw.has,kx=$w,$x=Pw,Sx=uw,_x=uu,Ax=function(t){var e=wx(this),r=$x(t);if(kx(e)<r.size)return!1;var n=r.getIterator();return!1!==Sx(n,function(t){if(!xx(e,t))return _x(n.iterator,"normal",!1)})};wi({target:"Set",proto:!0,real:!0,forced:!Ww("isSupersetOf",function(t){return!t})},{isSupersetOf:Ax});var Ex=lw,Mx=kw,Tx=Pw,Nx=uw,Cx=sw.add,Rx=sw.has,Ox=sw.remove,Px=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},n=e[t](r);return 1===n.size&&4===n.values().next().value}catch(t){return!1}},Ix=function(t){var e=Ex(this),r=Tx(t).getIterator(),n=Mx(e);return Nx(r,function(t){Rx(e,t)?Ox(n,t):Cx(n,t)}),n},Fx=Px;wi({target:"Set",proto:!0,real:!0,forced:!Ww("symmetricDifference")||!Fx("symmetricDifference")},{symmetricDifference:Ix});var Dx=lw,jx=sw.add,zx=kw,qx=Pw,Ux=uw,Lx=function(t){var e=Dx(this),r=qx(t).getIterator(),n=zx(e);return Ux(r,function(t){jx(n,t)}),n},Hx=Px;wi({target:"Set",proto:!0,real:!0,forced:!Ww("union")||!Hx("union")},{union:Lx});var Bx,Vx,Wx,Xx=go,Yx=ft,Kx=n,Zx=mt,Gx=bt,Jx=x,Qx=Mi,tk=fr,ek=vn,rk=mo,nk=Yi,ik=sa,ak=ut,sk=q,ok=Xr.enforce,lk=Xr.get,ck=Kx.Int8Array,uk=ck&&ck.prototype,hk=Kx.Uint8ClampedArray,dk=hk&&hk.prototype,fk=ck&&nk(ck),pk=uk&&nk(uk),mk=Object.prototype,gk=Kx.TypeError,bk=ak("toStringTag"),vk=sk("TYPED_ARRAY_TAG"),yk="TypedArrayConstructor",wk=Xx&&!!ik&&"Opera"!==Qx(Kx.opera),xk={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},kk={BigInt64Array:8,BigUint64Array:8},$k=function(t){var e=nk(t);if(Gx(e)){var r=lk(e);return r&&Jx(r,yk)?r[yk]:$k(e)}};for(Bx in xk)(Wx=(Vx=Kx[Bx])&&Vx.prototype)?ok(Wx)[yk]=Vx:wk=!1;for(Bx in kk)(Wx=(Vx=Kx[Bx])&&Vx.prototype)&&(ok(Wx)[yk]=Vx);if((!wk||!Zx(fk)||fk===Function.prototype)&&(fk=function(){throw new gk("Incorrect invocation")},wk))for(Bx in xk)Kx[Bx]&&ik(Kx[Bx],fk);if((!wk||!pk||pk===mk)&&(pk=fk.prototype,wk))for(Bx in xk)Kx[Bx]&&ik(Kx[Bx].prototype,pk);if(wk&&nk(dk)!==pk&&ik(dk,pk),Yx&&!Jx(pk,bk))for(Bx in rk(pk,bk,{configurable:!0,get:function(){return Gx(this)?this[vk]:void 0}}),xk)Kx[Bx]&&tk(Kx[Bx].prototype,vk,Bx);var Sk={aTypedArray:function(t){if(function(t){if(!Gx(t))return!1;var e=Qx(t);return Jx(xk,e)||Jx(kk,e)}(t))return t;throw new gk("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,n){if(Yx){if(r)for(var i in xk){var a=Kx[i];if(a&&Jx(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}pk[t]&&!r||ek(pk,t,r?e:wk&&uk[t]||e,n)}},getTypedArrayConstructor:$k},_k=Mi,Ak=oe,Ek=TypeError,Mk=function(t){var e=_k(t);return"BigInt64Array"===e||"BigUint64Array"===e},Tk=Rn,Nk=Sn,Ck=function(t){var e=Ak(t,"number");if("number"==typeof e)throw new Ek("Can't convert number to bigint");return BigInt(e)},Rk=Sk.aTypedArray,Ok=Sk.getTypedArrayConstructor,Pk=Sk.exportTypedArrayMethod,Ik=RangeError,Fk=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),Dk=Fk&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();Pk("with",{with:function(t,e){var r=Rk(this),n=Tk(r),i=Nk(t),a=i<0?n+i:i,s=Mk(r)?Ck(e):+e;if(a>=n||a<0)throw new Ik("Incorrect index");for(var o=new(Ok(r))(n),l=0;l<n;l++)o[l]=l===a?s:r[l];return o}}.with,!Fk||Dk);var jk=Rn,zk=bt,qk=String,Uk=TypeError,Lk=function(t){if(void 0===t||zk(t))return t;throw new Uk(qk(t)+" is not an object or undefined")},Hk="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Bk=Hk+"+/",Vk=Hk+"-_",Wk=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},Xk={i2c:Bk,c2i:Wk(Bk),i2cUrl:Vk,c2iUrl:Wk(Vk)},Yk=TypeError,Kk=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new Yk("Incorrect `alphabet` option")},Zk=n,Gk=h,Jk=Lk,Qk=Ay,t$=x,e$=Kk,r$=Do,n$=Xk.c2i,i$=Xk.c2iUrl,a$=Zk.SyntaxError,s$=Zk.TypeError,o$=Gk("".charAt),l$=function(t,e){for(var r=t.length;e<r;e++){var n=o$(t,e);if(" "!==n&&"\t"!==n&&"\n"!==n&&"\f"!==n&&"\r"!==n)break}return e},c$=function(t,e,r){var n=t.length;n<4&&(t+=2===n?"AA":"A");var i=(e[o$(t,0)]<<18)+(e[o$(t,1)]<<12)+(e[o$(t,2)]<<6)+e[o$(t,3)],a=[i>>16&255,i>>8&255,255&i];if(2===n){if(r&&0!==a[1])throw new a$("Extra bits");return[a[0]]}if(3===n){if(r&&0!==a[2])throw new a$("Extra bits");return[a[0],a[1]]}return a},u$=function(t,e,r){for(var n=e.length,i=0;i<n;i++)t[r+i]=e[i];return r+n},h$=function(t,e,r,n){Qk(t),Jk(e);var i="base64"===e$(e)?n$:i$,a=e?e.lastChunkHandling:void 0;if(void 0===a&&(a="loose"),"loose"!==a&&"strict"!==a&&"stop-before-partial"!==a)throw new s$("Incorrect `lastChunkHandling` option");r&&r$(r.buffer);var s=t.length,o=r||[],l=0,c=0,u="",h=0;if(n)for(;;){if((h=l$(t,h))===s){if(u.length>0){if("stop-before-partial"===a)break;if("loose"!==a)throw new a$("Missing padding");if(1===u.length)throw new a$("Malformed padding: exactly one additional character");l=u$(o,c$(u,i,!1),l)}c=s;break}var d=o$(t,h);if(++h,"="===d){if(u.length<2)throw new a$("Padding is too early");if(h=l$(t,h),2===u.length){if(h===s){if("stop-before-partial"===a)break;throw new a$("Malformed padding: only one =")}"="===o$(t,h)&&(++h,h=l$(t,h))}if(h<s)throw new a$("Unexpected character after padding");l=u$(o,c$(u,i,"strict"===a),l),c=s;break}if(!t$(i,d))throw new a$("Unexpected character");var f=n-l;if(1===f&&2===u.length||2===f&&3===u.length)break;if(4===(u+=d).length&&(l=u$(o,c$(u,i,!1),l),u="",c=h,l===n))break}return{bytes:o,read:c,written:l}},d$=wi,f$=function(t,e,r){for(var n=0,i=arguments.length>2?r:jk(e),a=new t(i);i>n;)a[n]=e[n++];return a},p$=h$,m$=n.Uint8Array,g$=!m$||!m$.fromBase64||!function(){try{return void m$.fromBase64("a")}catch(t){}try{m$.fromBase64("",null)}catch(t){return!0}}();m$&&d$({target:"Uint8Array",stat:!0,forced:g$},{fromBase64:function(t){var e=p$(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return f$(m$,e.bytes)}});var b$=n,v$=h,y$=b$.Uint8Array,w$=b$.SyntaxError,x$=Math.min,k$=v$("".match),$$=function(t,e){var r=t.length;if(r%2!=0)throw new w$("String should be an even number of characters");for(var n=e?x$(e.length,r/2):r/2,i=e||new y$(n),a=k$(t,/.{2}/g),s=0;s<n;s++){var o=+("0x"+a[s]+"0");if(o!=o)throw new w$("String should only contain hex characters");i[s]=o>>4}return{bytes:i,read:s<<1}},S$=wi,_$=Ay,A$=$$;n.Uint8Array&&S$({target:"Uint8Array",stat:!0},{fromHex:function(t){return A$(_$(t)).bytes}});var E$=Mi,M$=TypeError,T$=function(t){if("Uint8Array"===E$(t))return t;throw new M$("Argument is not an Uint8Array")},N$=wi,C$=h$,R$=T$,O$=n.Uint8Array,P$=!O$||!O$.prototype.setFromBase64||!function(){var t=new O$([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();O$&&N$({target:"Uint8Array",proto:!0,forced:P$},{setFromBase64:function(t){R$(this);var e=C$(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var I$=wi,F$=Ay,D$=T$,j$=Do,z$=$$;n.Uint8Array&&I$({target:"Uint8Array",proto:!0,forced:function(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(t){return!0}}()},{setFromHex:function(t){D$(this),F$(t),j$(this.buffer);var e=z$(t,this).read;return{read:e,written:e/2}}});var q$=wi,U$=n,L$=Lk,H$=T$,B$=Do,V$=Kk,W$=Xk.i2c,X$=Xk.i2cUrl,Y$=h("".charAt),K$=U$.Uint8Array,Z$=!K$||!K$.prototype.toBase64||!function(){try{(new K$).toBase64(null)}catch(t){return!0}}();K$&&q$({target:"Uint8Array",proto:!0,forced:Z$},{toBase64:function(){var t=H$(this),e=arguments.length?L$(arguments[0]):void 0,r="base64"===V$(e)?W$:X$,n=!!e&&!!e.omitPadding;B$(this.buffer);for(var i,a="",s=0,o=t.length,l=function(t){return Y$(r,i>>6*t&63)};s+2<o;s+=3)i=(t[s]<<16)+(t[s+1]<<8)+t[s+2],a+=l(3)+l(2)+l(1)+l(0);return s+2===o?(i=(t[s]<<16)+(t[s+1]<<8),a+=l(3)+l(2)+l(1)+(n?"":"=")):s+1===o&&(i=t[s]<<16,a+=l(3)+l(2)+(n?"":"==")),a}});var G$=wi,J$=n,Q$=h,tS=T$,eS=Do,rS=Q$(1.1.toString),nS=Q$([].join),iS=Array,aS=J$.Uint8Array,sS=!aS||!aS.prototype.toHex||!function(){try{return"ffffffffffffffff"===new aS([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();aS&&G$({target:"Uint8Array",proto:!0,forced:sS},{toHex:function(){tS(this),eS(this.buffer);for(var t=iS(this.length),e=0,r=this.length;e<r;e++){var n=rS(this[e],16);t[e]=1===n.length?"0"+n:n}return nS(t,"")}});var oS=h,lS=WeakMap.prototype,cS={WeakMap:WeakMap,set:oS(lS.set),get:oS(lS.get),has:oS(lS.has),remove:oS(lS.delete)},uS=cS.get,hS=cS.has,dS=cS.set;wi({target:"WeakMap",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return hS(this,t)?uS(this,t):(dS(this,t,e),e)}});var fS=cS.has,pS=cS,mS=new pS.WeakMap,gS=pS.set,bS=pS.remove,vS=Wt,yS=function(t){return fS(t),t},wS=function(t){return gS(mS,t,1),bS(mS,t),t},xS=cS.get,kS=cS.has,$S=cS.set;wi({target:"WeakMap",proto:!0,real:!0,forced:!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}()},{getOrInsertComputed:function(t,e){if(yS(this),wS(t),vS(e),kS(this,t))return xS(this,t);var r=e(t);return $S(this,t,r),r}});var SS=mt,_S=bt,AS=sa,ES=wi,MS=n,TS=Pt,NS=Re,CS=dt.f,RS=x,OS=Nl,PS=function(t,e,r){var n,i;return AS&&SS(n=e.constructor)&&n!==r&&_S(i=n.prototype)&&i!==r.prototype&&AS(t,i),t},IS=Ka,FS={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},DS=ja,jS=ft,zS="DOMException",qS=TS("Error"),US=TS(zS),LS=function(){OS(this,HS);var t=arguments.length,e=IS(t<1?void 0:arguments[0]),r=IS(t<2?void 0:arguments[1],"Error"),n=new US(e,r),i=new qS(e);return i.name=zS,CS(n,"stack",NS(1,DS(i.stack,1))),PS(n,this,LS),n},HS=LS.prototype=US.prototype,BS="stack"in new qS(zS),VS="stack"in new US(1,2),WS=US&&jS&&Object.getOwnPropertyDescriptor(MS,zS),XS=!(!WS||WS.writable&&WS.configurable),YS=BS&&!XS&&!VS;ES({global:!0,constructor:!0,forced:YS},{DOMException:YS?LS:US});var KS=TS(zS),ZS=KS.prototype;if(ZS.constructor!==KS)for(var GS in CS(ZS,"constructor",NS(1,KS)),FS)if(RS(FS,GS)){var JS=FS[GS],QS=JS.s;RS(KS,QS)||CS(KS,QS,NS(6,JS.c))}var t_,e_,r_,n_,i_=TypeError,a_=function(t,e){if(t<e)throw new i_("Not enough arguments");return t},s_=H,o_=/ipad|iphone|ipod/i.test(s_)&&/applewebkit/i.test(s_),l_=n,c_=pf,u_=zl,h_=mt,d_=x,f_=a,p_=va,m_=um,g_=xt,b_=a_,v_=o_,y_=Ho,w_=l_.setImmediate,x_=l_.clearImmediate,k_=l_.process,$_=l_.Dispatch,S_=l_.Function,__=l_.MessageChannel,A_=l_.String,E_=0,M_={},T_="onreadystatechange";f_(function(){t_=l_.location});var N_=function(t){if(d_(M_,t)){var e=M_[t];delete M_[t],e()}},C_=function(t){return function(){N_(t)}},R_=function(t){N_(t.data)},O_=function(t){l_.postMessage(A_(t),t_.protocol+"//"+t_.host)};w_&&x_||(w_=function(t){b_(arguments.length,1);var e=h_(t)?t:S_(t),r=m_(arguments,1);return M_[++E_]=function(){c_(e,void 0,r)},e_(E_),E_},x_=function(t){delete M_[t]},y_?e_=function(t){k_.nextTick(C_(t))}:$_&&$_.now?e_=function(t){$_.now(C_(t))}:__&&!v_?(n_=(r_=new __).port2,r_.port1.onmessage=R_,e_=u_(n_.postMessage,n_)):l_.addEventListener&&h_(l_.postMessage)&&!l_.importScripts&&t_&&"file:"!==t_.protocol&&!f_(O_)?(e_=O_,l_.addEventListener("message",R_,!1)):e_=T_ in g_("script")?function(t){p_.appendChild(g_("script"))[T_]=function(){p_.removeChild(this),N_(t)}}:function(t){setTimeout(C_(t),0)});var P_={set:w_,clear:x_},I_=P_.clear;wi({global:!0,bind:!0,enumerable:!0,forced:n.clearImmediate!==I_},{clearImmediate:I_});var F_=n,D_=pf,j_=mt,z_=Lo,q_=H,U_=um,L_=a_,H_=F_.Function,B_=/MSIE .\./.test(q_)||"BUN"===z_&&function(){var t=F_.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),V_=wi,W_=n,X_=P_.set,Y_=function(t,e){var r=e?2:1;return B_?function(n,i){var a=L_(arguments.length,1)>r,s=j_(n)?n:H_(n),o=a?U_(arguments,r):[],l=a?function(){D_(s,this,o)}:s;return e?t(l,i):t(l)}:t},K_=W_.setImmediate?Y_(X_,!1):X_;V_({global:!0,bind:!0,enumerable:!0,forced:W_.setImmediate!==K_},{setImmediate:K_});var Z_,G_=a,J_=n.RegExp,Q_=!G_(function(){var t=!0;try{J_(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)i(s,a[s]);return Object.getOwnPropertyDescriptor(J_.prototype,"flags").get.call(e)!==n||r!==n}),tA=Mt,eA=Ct,rA=x,nA=It,iA={correct:Q_},aA=function(){var t=tA(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},sA=RegExp.prototype,oA=wi,lA=n,cA=Pt,uA=h,hA=a,dA=q,fA=mt,pA=kb,mA=d,gA=bt,bA=qt,vA=Fh,yA=Mt,wA=Mi,xA=x,kA=Rs,$A=fr,SA=Rn,_A=a_,AA=iA.correct?function(t){return t.flags}:function(t){return iA.correct||!nA(sA,t)||rA(t,"flags")?t.flags:eA(aA,t)},EA=Km,MA=sw,TA=vw,NA=il,CA=qa,RA=Zo,OA=lA.Object,PA=lA.Array,IA=lA.Date,FA=lA.Error,DA=lA.TypeError,jA=lA.PerformanceMark,zA=cA("DOMException"),qA=EA.Map,UA=EA.has,LA=EA.get,HA=EA.set,BA=MA.Set,VA=MA.add,WA=MA.has,XA=cA("Object","keys"),YA=uA([].push),KA=uA((!0).valueOf),ZA=uA(1.1.valueOf),GA=uA("".valueOf),JA=uA(IA.prototype.getTime),QA=dA("structuredClone"),tE="DataCloneError",eE="Transferring",rE=function(t){return!hA(function(){var e=new lA.Set([7]),r=t(e),n=t(OA(7));return r===e||!r.has(7)||!gA(n)||7!==+n})&&t},nE=function(t,e){return!hA(function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)})},iE=lA.structuredClone,aE=!nE(iE,FA)||!nE(iE,zA)||(Z_=iE,!!hA(function(){var t=Z_(new lA.AggregateError([1],QA,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==QA||3!==t.cause})),sE=!iE&&rE(function(t){return new jA(QA,{detail:t}).detail}),oE=rE(iE)||sE,lE=function(t){throw new zA("Uncloneable type: "+t,tE)},cE=function(t,e){throw new zA((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",tE)},uE=function(t,e){return oE||cE(e),oE(t)},hE=function(t,e,r){if(UA(e,t))return LA(e,t);var n,i,a,s,o,l;if("SharedArrayBuffer"===(r||wA(t)))n=oE?oE(t):t;else{var c=lA.DataView;c||fA(t.slice)||cE("ArrayBuffer");try{if(fA(t.slice)&&!t.resizable)n=t.slice(0);else{i=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,n=new ArrayBuffer(i,a),s=new c(t),o=new c(n);for(l=0;l<i;l++)o.setUint8(l,s.getUint8(l))}}catch(t){throw new zA("ArrayBuffer is detached",tE)}}return HA(e,t,n),n},dE=function(t,e){if(bA(t)&&lE("Symbol"),!gA(t))return t;if(e){if(UA(e,t))return LA(e,t)}else e=new qA;var r,n,i,a,s,o,l,c,u=wA(t);switch(u){case"Array":i=PA(SA(t));break;case"Object":i={};break;case"Map":i=new qA;break;case"Set":i=new BA;break;case"RegExp":i=new RegExp(t.source,AA(t));break;case"Error":switch(n=t.name){case"AggregateError":i=new(cA(n))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":i=new(cA(n));break;case"CompileError":case"LinkError":case"RuntimeError":i=new(cA("WebAssembly",n));break;default:i=new FA}break;case"DOMException":i=new zA(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":i=hE(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,i=function(t,e,r,n,i){var a=lA[e];return gA(a)||cE(e),new a(hE(t.buffer,i),r,n)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{i=new DOMQuad(dE(t.p1,e),dE(t.p2,e),dE(t.p3,e),dE(t.p4,e))}catch(e){i=uE(t,u)}break;case"File":if(oE)try{i=oE(t),wA(i)!==u&&(i=void 0)}catch(t){}if(!i)try{i=new File([t],t.name,t)}catch(t){}i||cE(u);break;case"FileList":if(a=function(){var t;try{t=new lA.DataTransfer}catch(e){try{t=new lA.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(s=0,o=SA(t);s<o;s++)a.items.add(dE(t[s],e));i=a.files}else i=uE(t,u);break;case"ImageData":try{i=new ImageData(dE(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){i=uE(t,u)}break;default:if(oE)i=oE(t);else switch(u){case"BigInt":i=OA(t.valueOf());break;case"Boolean":i=OA(KA(t));break;case"Number":i=OA(ZA(t));break;case"String":i=OA(GA(t));break;case"Date":i=new IA(JA(t));break;case"Blob":try{i=t.slice(0,t.size,t.type)}catch(t){cE(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=lA[u];try{i=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){cE(u)}break;case"DOMRect":case"DOMRectReadOnly":r=lA[u];try{i=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){cE(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=lA[u];try{i=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){cE(u)}break;case"AudioData":case"VideoFrame":fA(t.clone)||cE(u);try{i=t.clone()}catch(t){lE(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":cE(u);default:lE(u)}}switch(HA(e,t,i),u){case"Array":case"Object":for(l=XA(t),s=0,o=SA(l);s<o;s++)c=l[s],kA(i,c,dE(t[c],e));break;case"Map":t.forEach(function(t,r){HA(i,dE(r,e),dE(t,e))});break;case"Set":t.forEach(function(t){VA(i,dE(t,e))});break;case"Error":$A(i,"message",dE(t.message,e)),xA(t,"cause")&&$A(i,"cause",dE(t.cause,e)),"AggregateError"===n?i.errors=dE(t.errors,e):"SuppressedError"===n&&(i.error=dE(t.error,e),i.suppressed=dE(t.suppressed,e));case"DOMException":CA&&$A(i,"stack",dE(t.stack,e))}return i};oA({global:!0,enumerable:!0,sham:!RA,forced:aE},{structuredClone:function(t){var e,r,n=_A(arguments.length,1)>1&&!mA(arguments[1])?yA(arguments[1]):void 0,i=n?n.transfer:void 0;void 0!==i&&(r=function(t,e){if(!gA(t))throw new DA("Transfer option cannot be converted to a sequence");var r=[];vA(t,function(t){YA(r,yA(t))});for(var n,i,a,s,o,l=0,c=SA(r),u=new BA;l<c;){if(n=r[l++],s=void 0,"ArrayBuffer"===(i=wA(n))?WA(u,n):UA(e,n))throw new zA("Duplicate transferable",tE);if("ArrayBuffer"!==i){if(RA)s=iE(n,{transfer:[n]});else switch(i){case"ImageBitmap":a=lA.OffscreenCanvas,pA(a)||cE(i,eE);try{(o=new a(n.width,n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n),s=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":fA(n.clone)&&fA(n.close)||cE(i,eE);try{s=n.clone(),n.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":cE(i,eE)}if(void 0===s)throw new zA("This object cannot be transferred: "+i,tE);HA(e,n,s)}else VA(u,n)}return u}(i,e=new qA));var a=dE(t,e);return r&&function(t){TA(t,function(t){RA?iE(t,{transfer:[t]}):fA(t.transfer)?t.transfer():NA?NA(t):cE("ArrayBuffer",eE)})}(r),a}});var fE=a,pE=ft,mE=ut("iterator"),gE=!fE(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),n+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!pE||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[mE]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==n||"x"!==new URL("https://x",void 0).host}),bE=wi,vE=a_,yE=Xa,wE=gE,xE=Pt("URL");bE({target:"URL",stat:!0,forced:!wE},{parse:function(t){var e=vE(arguments.length,1),r=yE(t),n=e<2||void 0===arguments[1]?void 0:yE(arguments[1]);try{return new xE(r,n)}catch(t){return null}}});const kE=new Map;var $E={set(t,e,r){kE.has(t)||kE.set(t,new Map);const n=kE.get(t);n.has(e)||0===n.size?n.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>kE.has(t)&&kE.get(t).get(e)||null,remove(t,e){if(!kE.has(t))return;const r=kE.get(t);r.delete(e),0===r.size&&kE.delete(t)}};const SE="transitionend",_E=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),AE=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),EE=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),ME=t=>EE(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(_E(t)):null,TE=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,NE=[],CE=t=>{var e;e=()=>{const e=TE();if(e){const r=t.NAME,n=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=n,t.jQueryInterface)}},"loading"===document.readyState?(NE.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of NE)t()}),NE.push(e)):e()},RE=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,OE=(t,e,r=!0)=>{if(!r)return void RE(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const n=Number.parseFloat(e),i=Number.parseFloat(r);return n||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let i=!1;const a=({target:r})=>{r===e&&(i=!0,e.removeEventListener(SE,a),RE(t))};e.addEventListener(SE,a),setTimeout(()=>{i||e.dispatchEvent(new Event(SE))},n)},PE=/[^.]*(?=\..*)\.|.*/,IE=/\..*/,FE=/::\d+$/,DE={};let jE=1;const zE={mouseenter:"mouseover",mouseleave:"mouseout"},qE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function UE(t,e){return e&&`${e}::${jE++}`||t.uidEvent||jE++}function LE(t){const e=UE(t);return t.uidEvent=e,DE[e]=DE[e]||{},DE[e]}function HE(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function BE(t,e,r){const n="string"==typeof e,i=n?r:e||r;let a=YE(t);return qE.has(a)||(a=t),[n,i,a]}function VE(t,e,r,n,i){if("string"!=typeof e||!t)return;let[a,s,o]=BE(e,r,n);if(e in zE){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s=t(s)}const l=LE(t),c=l[o]||(l[o]={}),u=HE(c,s,a?r:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=UE(s,e.replace(PE,"")),d=a?function(t,e,r){return function n(i){const a=t.querySelectorAll(e);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(const o of a)if(o===s)return ZE(i,{delegateTarget:s}),n.oneOff&&KE.off(t,i.type,e,r),r.apply(s,[i])}}(t,r,s):function(t,e){return function r(n){return ZE(n,{delegateTarget:t}),r.oneOff&&KE.off(t,n.type,e),e.apply(t,[n])}}(t,s);d.delegationSelector=a?r:null,d.callable=s,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(o,d,a)}function WE(t,e,r,n,i){const a=HE(e[r],n,i);a&&(t.removeEventListener(r,a,Boolean(i)),delete e[r][a.uidEvent])}function XE(t,e,r,n){const i=e[r]||{};for(const[a,s]of Object.entries(i))a.includes(n)&&WE(t,e,r,s.callable,s.delegationSelector)}function YE(t){return t=t.replace(IE,""),zE[t]||t}const KE={on(t,e,r,n){VE(t,e,r,n,!1)},one(t,e,r,n){VE(t,e,r,n,!0)},off(t,e,r,n){if("string"!=typeof e||!t)return;const[i,a,s]=BE(e,r,n),o=s!==e,l=LE(t),c=l[s]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(l))XE(t,l,r,e.slice(1));for(const[r,n]of Object.entries(c)){const i=r.replace(FE,"");o&&!e.includes(i)||WE(t,l,s,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;WE(t,l,s,a,i?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const n=TE();let i=null,a=!0,s=!0,o=!1;e!==YE(e)&&n&&(i=n.Event(e,r),n(t).trigger(i),a=!i.isPropagationStopped(),s=!i.isImmediatePropagationStopped(),o=i.isDefaultPrevented());const l=ZE(new Event(e,{bubbles:a,cancelable:!0}),r);return o&&l.preventDefault(),s&&t.dispatchEvent(l),l.defaultPrevented&&i&&i.preventDefault(),l}};function ZE(t,e={}){for(const[r,n]of Object.entries(e))try{t[r]=n}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>n})}return t}function GE(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function JE(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const QE={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${JE(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${JE(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const n of r){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=GE(t.dataset[n])}return e},getDataAttribute:(t,e)=>GE(t.getAttribute(`data-bs-${JE(e)}`))};class tM{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=EE(e)?QE.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...EE(e)?QE.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,n]of Object.entries(e)){const e=t[r],i=EE(e)?"element":AE(e);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)}}}class eM extends tM{constructor(t,e){super(),(t=ME(t))&&(this._element=t,this._config=this._getConfig(e),$E.set(this._element,this.constructor.DATA_KEY,this))}dispose(){$E.remove(this._element,this.constructor.DATA_KEY),KE.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){OE(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return $E.get(ME(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const rM='[data-bs-toggle="button"]';class nM extends eM{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=nM.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}KE.on(document,"click.bs.button.data-api",rM,t=>{t.preventDefault();const e=t.target.closest(rM);nM.getOrCreateInstance(e).toggle()}),CE(nM);const iM=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>_E(t)).join(","):null},aM={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let n=t.parentNode.closest(e);for(;n;)r.push(n),n=n.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>{if(!EE(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e})(t))},getSelectorFromElement(t){const e=iM(t);return e&&aM.findOne(e)?e:null},getElementFromSelector(t){const e=iM(t);return e?aM.findOne(e):null},getMultipleElementsFromSelector(t){const e=iM(t);return e?aM.find(e):[]}},sM=".bs.collapse",oM=`show${sM}`,lM=`shown${sM}`,cM=`hide${sM}`,uM=`hidden${sM}`,hM=`click${sM}.data-api`,dM="show",fM="collapse",pM="collapsing",mM=`:scope .${fM} .${fM}`,gM='[data-bs-toggle="collapse"]',bM={parent:null,toggle:!0},vM={parent:"(null|element)",toggle:"boolean"};class yM extends eM{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=aM.find(gM);for(const t of r){const e=aM.getSelectorFromElement(t),r=aM.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return bM}static get DefaultType(){return vM}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>yM.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(KE.trigger(this._element,oM).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(fM),this._element.classList.add(pM),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(pM),this._element.classList.add(fM,dM),this._element.style[e]="",KE.trigger(this._element,lM)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(KE.trigger(this._element,cM).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,this._element.offsetHeight,this._element.classList.add(pM),this._element.classList.remove(fM,dM);for(const t of this._triggerArray){const e=aM.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(pM),this._element.classList.add(fM),KE.trigger(this._element,uM)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(dM)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=ME(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(gM);for(const e of t){const t=aM.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=aM.find(mM,this._config.parent);return aM.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=yM.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}KE.on(document,hM,gM,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of aM.getMultipleElementsFromSelector(this))yM.getOrCreateInstance(t,{toggle:!1}).toggle()}),CE(yM);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wM=globalThis,xM=wM.ShadowRoot&&(void 0===wM.ShadyCSS||wM.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kM=Symbol(),$M=new WeakMap;let SM=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==kM)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(xM&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=$M.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$M.set(e,t))}return t}toString(){return this.cssText}};const _M=t=>new SM("string"==typeof t?t:t+"",void 0,kM),AM=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new SM(r,t,kM)},EM=xM?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return _M(e)})(t):t,{is:MM,defineProperty:TM,getOwnPropertyDescriptor:NM,getOwnPropertyNames:CM,getOwnPropertySymbols:RM,getPrototypeOf:OM}=Object,PM=globalThis,IM=PM.trustedTypes,FM=IM?IM.emptyScript:"",DM=PM.reactiveElementPolyfillSupport,jM=(t,e)=>t,zM={toAttribute(t,e){switch(e){case Boolean:t=t?FM:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},qM=(t,e)=>!MM(t,e),UM={attribute:!0,type:String,converter:zM,reflect:!1,useDefault:!1,hasChanged:qM};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),PM.litPropertyMetadata??=new WeakMap;let LM=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=UM){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&TM(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=NM(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);i?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??UM}static _$Ei(){if(this.hasOwnProperty(jM("elementProperties")))return;const t=OM(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(jM("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jM("properties"))){const t=this.properties,e=[...CM(t),...RM(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(EM(t))}else void 0!==t&&e.push(EM(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(xM)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),n=wM.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:zM).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:zM;this._$Em=n;const a=i.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){const a=this.constructor;if(!1===n&&(i=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??qM)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==i||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};LM.elementStyles=[],LM.shadowRootOptions={mode:"open"},LM[jM("elementProperties")]=new Map,LM[jM("finalized")]=new Map,DM?.({ReactiveElement:LM}),(PM.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const HM=globalThis,BM=t=>t,VM=HM.trustedTypes,WM=VM?VM.createPolicy("lit-html",{createHTML:t=>t}):void 0,XM="$lit$",YM=`lit$${Math.random().toFixed(9).slice(2)}$`,KM="?"+YM,ZM=`<${KM}>`,GM=document,JM=()=>GM.createComment(""),QM=t=>null===t||"object"!=typeof t&&"function"!=typeof t,tT=Array.isArray,eT="[ \t\n\f\r]",rT=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nT=/-->/g,iT=/>/g,aT=RegExp(`>|${eT}(?:([^\\s"'>=/]+)(${eT}*=${eT}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),sT=/'/g,oT=/"/g,lT=/^(?:script|style|textarea|title)$/i,cT=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),uT=cT(1),hT=cT(2),dT=cT(3),fT=Symbol.for("lit-noChange"),pT=Symbol.for("lit-nothing"),mT=new WeakMap,gT=GM.createTreeWalker(GM,129);function bT(t,e){if(!tT(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==WM?WM.createHTML(e):e}const vT=(t,e)=>{const r=t.length-1,n=[];let i,a=2===e?"<svg>":3===e?"<math>":"",s=rT;for(let e=0;e<r;e++){const r=t[e];let o,l,c=-1,u=0;for(;u<r.length&&(s.lastIndex=u,l=s.exec(r),null!==l);)u=s.lastIndex,s===rT?"!--"===l[1]?s=nT:void 0!==l[1]?s=iT:void 0!==l[2]?(lT.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=aT):void 0!==l[3]&&(s=aT):s===aT?">"===l[0]?(s=i??rT,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?aT:'"'===l[3]?oT:sT):s===oT||s===sT?s=aT:s===nT||s===iT?s=rT:(s=aT,i=void 0);const h=s===aT&&t[e+1].startsWith("/>")?" ":"";a+=s===rT?r+ZM:c>=0?(n.push(o),r.slice(0,c)+XM+r.slice(c)+YM+h):r+YM+(-2===c?e:h)}return[bT(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class yT{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,a=0;const s=t.length-1,o=this.parts,[l,c]=vT(t,e);if(this.el=yT.createElement(l,r),gT.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=gT.nextNode())&&o.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(XM)){const e=c[a++],r=n.getAttribute(t).split(YM),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?ST:"?"===s[1]?_T:"@"===s[1]?AT:$T}),n.removeAttribute(t)}else t.startsWith(YM)&&(o.push({type:6,index:i}),n.removeAttribute(t));if(lT.test(n.tagName)){const t=n.textContent.split(YM),e=t.length-1;if(e>0){n.textContent=VM?VM.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],JM()),gT.nextNode(),o.push({type:2,index:++i});n.append(t[e],JM())}}}else if(8===n.nodeType)if(n.data===KM)o.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(YM,t+1));)o.push({type:7,index:i}),t+=YM.length-1}i++}}static createElement(t,e){const r=GM.createElement("template");return r.innerHTML=t,r}}function wT(t,e,r=t,n){if(e===fT)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const a=QM(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=wT(t,i._$AS(t,e.values),i,n)),e}class xT{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??GM).importNode(e,!0);gT.currentNode=n;let i=gT.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new kT(i,i.nextSibling,this,t):1===o.type?e=new o.ctor(i,o.name,o.strings,this,t):6===o.type&&(e=new ET(i,this,t)),this._$AV.push(e),o=r[++s]}a!==o?.index&&(i=gT.nextNode(),a++)}return gT.currentNode=GM,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class kT{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=pT,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wT(this,t,e),QM(t)?t===pT||null==t||""===t?(this._$AH!==pT&&this._$AR(),this._$AH=pT):t!==this._$AH&&t!==fT&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>tT(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==pT&&QM(this._$AH)?this._$AA.nextSibling.data=t:this.T(GM.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=yT.createElement(bT(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new xT(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=mT.get(t.strings);return void 0===e&&mT.set(t.strings,e=new yT(t)),e}k(t){tT(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new kT(this.O(JM()),this.O(JM()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=BM(t).nextSibling;BM(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class $T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=pT,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=pT}_$AI(t,e=this,r,n){const i=this.strings;let a=!1;if(void 0===i)t=wT(this,t,e,0),a=!QM(t)||t!==this._$AH&&t!==fT,a&&(this._$AH=t);else{const n=t;let s,o;for(t=i[0],s=0;s<i.length-1;s++)o=wT(this,n[r+s],e,s),o===fT&&(o=this._$AH[s]),a||=!QM(o)||o!==this._$AH[s],o===pT?t=pT:t!==pT&&(t+=(o??"")+i[s+1]),this._$AH[s]=o}a&&!n&&this.j(t)}j(t){t===pT?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ST extends $T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pT?void 0:t}}class _T extends $T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==pT)}}class AT extends $T{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=wT(this,t,e,0)??pT)===fT)return;const r=this._$AH,n=t===pT&&r!==pT||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==pT&&(r===pT||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ET{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){wT(this,t)}}const MT=HM.litHtmlPolyfillSupport;MT?.(yT,kT),(HM.litHtmlVersions??=[]).push("3.3.2");const TT=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new kT(e.insertBefore(JM(),t),t,void 0,r??{})}return i._$AI(t),i},NT=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class CT extends LM{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=TT(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fT}}CT._$litElement$=!0,CT.finalized=!0,NT.litElementHydrateSupport?.({LitElement:CT});const RT=NT.litElementPolyfillSupport;function OT(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function PT(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function IT(t){let e,r,n;function i(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<0?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=OT,r=(e,r)=>OT(t(e),r),n=(e,r)=>t(e)-r):(e=t===OT||t===PT?t:FT,r=t,n=t),{left:i,center:function(t,e,r=0,a=t.length){const s=i(t,e,r,a-1);return s>r&&n(t[s-1],e)>-n(t[s],e)?s-1:s},right:function(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<=0?i=e+1:a=e}while(i<a)}return i}}}function FT(){return 0}RT?.({LitElement:CT}),(NT.litElementVersions??=[]).push("4.2.2");const DT=IT(OT).right;function jT(t,e){let r,n;if(void 0===e)for(const e of t)null!=e&&(void 0===r?e>=e&&(r=n=e):(r>e&&(r=e),n<e&&(n=e)));else{let i=-1;for(let a of t)null!=(a=e(a,++i,t))&&(void 0===r?a>=a&&(r=n=a):(r>a&&(r=a),n<a&&(n=a)))}return[r,n]}IT(function(t){return null===t?NaN:+t}).center;class zT{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let n=0;n<this._n&&n<32;n++){const i=e[n],a=t+i,s=Math.abs(t)<Math.abs(i)?t-(a-i):i-(a-t);s&&(e[r++]=s),t=a}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e,r,n,i=this._n,a=0;if(i>0){for(a=t[--i];i>0&&(e=a,r=t[--i],a=e+r,n=r-(a-e),!n););i>0&&(n<0&&t[i-1]<0||n>0&&t[i-1]>0)&&(r=2*n,e=a+r,r==e-a&&(a=e))}return a}}function qT(t){return t}var UT=Array.prototype.slice;function LT(t){return()=>t}const HT=Math.sqrt(50),BT=Math.sqrt(10),VT=Math.sqrt(2);function WT(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),s=a>=HT?10:a>=BT?5:a>=VT?2:1;let o,l,c;return i<0?(c=Math.pow(10,-i)/s,o=Math.round(t*c),l=Math.round(e*c),o/c<t&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*s,o=Math.round(t/c),l=Math.round(e/c),o*c<t&&++o,l*c>e&&--l),l<o&&.5<=r&&r<2?WT(t,e,2*r):[o,l,c]}function XT(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,a,s]=n?WT(e,t,r):WT(t,e,r);if(!(a>=i))return[];const o=a-i+1,l=new Array(o);if(n)if(s<0)for(let t=0;t<o;++t)l[t]=(a-t)/-s;else for(let t=0;t<o;++t)l[t]=(a-t)*s;else if(s<0)for(let t=0;t<o;++t)l[t]=(i+t)/-s;else for(let t=0;t<o;++t)l[t]=(i+t)*s;return l}function YT(t,e,r){return WT(t=+t,e=+e,r=+r)[2]}function KT(t,e,r){let n;for(;;){const i=YT(t,e,r);if(i===n||0===i||!isFinite(i))return[t,e];i>0?(t=Math.floor(t/i)*i,e=Math.ceil(e/i)*i):i<0&&(t=Math.ceil(t*i)/i,e=Math.floor(e*i)/i),n=i}}function ZT(t){return Math.max(1,Math.ceil(Math.log(function(t){let e=0;for(let r of t)null!=r&&(r=+r)>=r&&++e;return e}(t))/Math.LN2)+1)}function GT(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),a=new Array(i);++n<i;)a[n]=t+n*r;return a}function JT(t){return t}var QT=1e-6;function tN(t){return"translate("+t+",0)"}function eN(t){return"translate(0,"+t+")"}function rN(t){return e=>+t(e)}function nN(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function iN(){return!this.__axis}function aN(t,e){var r=[],n=null,i=null,a=6,s=6,o=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",h=1===t||3===t?tN:eN;function d(d){var f=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,p=null==i?e.tickFormat?e.tickFormat.apply(e,r):JT:i,m=Math.max(a,0)+o,g=e.range(),b=+g[0]+l,v=+g[g.length-1]+l,y=(e.bandwidth?nN:rN)(e.copy(),l),w=d.selection?d.selection():d,x=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(f,e).order(),$=k.exit(),S=k.enter().append("g").attr("class","tick"),_=k.select("line"),A=k.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(S),_=_.merge(S.append("line").attr("stroke","currentColor").attr(u+"2",c*a)),A=A.merge(S.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),d!==w&&(x=x.transition(d),k=k.transition(d),_=_.transition(d),A=A.transition(d),$=$.transition(d).attr("opacity",QT).attr("transform",function(t){return isFinite(t=y(t))?h(t+l):this.getAttribute("transform")}),S.attr("opacity",QT).attr("transform",function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:y(t))+l)})),$.remove(),x.attr("d",4===t||2===t?s?"M"+c*s+","+b+"H"+l+"V"+v+"H"+c*s:"M"+l+","+b+"V"+v:s?"M"+b+","+c*s+"V"+l+"H"+v+"V"+c*s:"M"+b+","+l+"H"+v),k.attr("opacity",1).attr("transform",function(t){return h(y(t)+l)}),_.attr(u+"2",c*a),A.attr(u,c*m).text(p),w.filter(iN).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each(function(){this.__axis=y})}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return r=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),d):r.slice()},d.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),d):n&&n.slice()},d.tickFormat=function(t){return arguments.length?(i=t,d):i},d.tickSize=function(t){return arguments.length?(a=s=+t,d):a},d.tickSizeInner=function(t){return arguments.length?(a=+t,d):a},d.tickSizeOuter=function(t){return arguments.length?(s=+t,d):s},d.tickPadding=function(t){return arguments.length?(o=+t,d):o},d.offset=function(t){return arguments.length?(l=+t,d):l},d}function sN(t){return aN(3,t)}function oN(t){return aN(4,t)}var lN={value:()=>{}};function cN(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new uN(n)}function uN(t){this._=t}function hN(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function dN(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=lN,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}uN.prototype=cN.prototype={constructor:uN,on:function(t,e){var r,n,i=this._,a=(n=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),s=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=a[s]).type)i[r]=dN(i[r],t.name,e);else if(null==e)for(r in i)i[r]=dN(i[r],t.name,null);return this}for(;++s<o;)if((r=(t=a[s]).type)&&(r=hN(i[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new uN(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var fN="http://www.w3.org/1999/xhtml",pN={svg:"http://www.w3.org/2000/svg",xhtml:fN,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function mN(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),pN.hasOwnProperty(e)?{space:pN[e],local:t}:t}function gN(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===fN&&e.documentElement.namespaceURI===fN?e.createElement(t):e.createElementNS(r,t)}}function bN(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function vN(t){var e=mN(t);return(e.local?bN:gN)(e)}function yN(){}function wN(t){return null==t?yN:function(){return this.querySelector(t)}}function xN(){return[]}function kN(t){return null==t?xN:function(){return this.querySelectorAll(t)}}function $N(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function SN(t){return function(){return this.matches(t)}}function _N(t){return function(e){return e.matches(t)}}var AN=Array.prototype.find;function EN(){return this.firstElementChild}var MN=Array.prototype.filter;function TN(){return Array.from(this.children)}function NN(t){return new Array(t.length)}function CN(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function RN(t,e,r,n,i,a){for(var s,o=0,l=e.length,c=a.length;o<c;++o)(s=e[o])?(s.__data__=a[o],n[o]=s):r[o]=new CN(t,a[o]);for(;o<l;++o)(s=e[o])&&(i[o]=s)}function ON(t,e,r,n,i,a,s){var o,l,c,u=new Map,h=e.length,d=a.length,f=new Array(h);for(o=0;o<h;++o)(l=e[o])&&(f[o]=c=s.call(l,l.__data__,o,e)+"",u.has(c)?i[o]=l:u.set(c,l));for(o=0;o<d;++o)c=s.call(t,a[o],o,a)+"",(l=u.get(c))?(n[o]=l,l.__data__=a[o],u.delete(c)):r[o]=new CN(t,a[o]);for(o=0;o<h;++o)(l=e[o])&&u.get(f[o])===l&&(i[o]=l)}function PN(t){return t.__data__}function IN(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function FN(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function DN(t){return function(){this.removeAttribute(t)}}function jN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function zN(t,e){return function(){this.setAttribute(t,e)}}function qN(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function UN(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function LN(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function HN(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function BN(t){return function(){this.style.removeProperty(t)}}function VN(t,e,r){return function(){this.style.setProperty(t,e,r)}}function WN(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function XN(t,e){return t.style.getPropertyValue(e)||HN(t).getComputedStyle(t,null).getPropertyValue(e)}function YN(t){return function(){delete this[t]}}function KN(t,e){return function(){this[t]=e}}function ZN(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function GN(t){return t.trim().split(/^|\s+/)}function JN(t){return t.classList||new QN(t)}function QN(t){this._node=t,this._names=GN(t.getAttribute("class")||"")}function tC(t,e){for(var r=JN(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function eC(t,e){for(var r=JN(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function rC(t){return function(){tC(this,t)}}function nC(t){return function(){eC(this,t)}}function iC(t,e){return function(){(e.apply(this,arguments)?tC:eC)(this,t)}}function aC(){this.textContent=""}function sC(t){return function(){this.textContent=t}}function oC(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function lC(){this.innerHTML=""}function cC(t){return function(){this.innerHTML=t}}function uC(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function hC(){this.nextSibling&&this.parentNode.appendChild(this)}function dC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fC(){return null}function pC(){var t=this.parentNode;t&&t.removeChild(this)}function mC(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function gC(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function bC(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,a=e.length;n<a;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function vC(t,e,r){return function(){var n,i=this.__on,a=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var s=0,o=i.length;s<o;++s)if((n=i[s]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),void(n.value=e);this.addEventListener(t.type,a,r),n={type:t.type,name:t.name,value:e,listener:a,options:r},i?i.push(n):this.__on=[n]}}function yC(t,e,r){var n=HN(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function wC(t,e){return function(){return yC(this,t,e)}}function xC(t,e){return function(){return yC(this,t,e.apply(this,arguments))}}CN.prototype={constructor:CN,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},QN.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var kC=[null];function $C(t,e){this._groups=t,this._parents=e}function SC(){return new $C([[document.documentElement]],kC)}function _C(t){return"string"==typeof t?new $C([[document.querySelector(t)]],[document.documentElement]):new $C([[t]],kC)}function AC(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}$C.prototype=SC.prototype={constructor:$C,select:function(t){"function"!=typeof t&&(t=wN(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s,o=e[i],l=o.length,c=n[i]=new Array(l),u=0;u<l;++u)(a=o[u])&&(s=t.call(a,a.__data__,u,o))&&("__data__"in a&&(s.__data__=a.__data__),c[u]=s);return new $C(n,this._parents)},selectAll:function(t){t="function"==typeof t?$N(t):kN(t);for(var e=this._groups,r=e.length,n=[],i=[],a=0;a<r;++a)for(var s,o=e[a],l=o.length,c=0;c<l;++c)(s=o[c])&&(n.push(t.call(s,s.__data__,c,o)),i.push(s));return new $C(n,i)},selectChild:function(t){return this.select(null==t?EN:function(t){return function(){return AN.call(this.children,t)}}("function"==typeof t?t:_N(t)))},selectChildren:function(t){return this.selectAll(null==t?TN:function(t){return function(){return MN.call(this.children,t)}}("function"==typeof t?t:_N(t)))},filter:function(t){"function"!=typeof t&&(t=SN(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new $C(n,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,PN);var r=e?ON:RN,n=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var a=i.length,s=new Array(a),o=new Array(a),l=new Array(a),c=0;c<a;++c){var u=n[c],h=i[c],d=h.length,f=IN(t.call(u,u&&u.__data__,c,n)),p=f.length,m=o[c]=new Array(p),g=s[c]=new Array(p);r(u,h,m,g,l[c]=new Array(d),f,e);for(var b,v,y=0,w=0;y<p;++y)if(b=m[y]){for(y>=w&&(w=y+1);!(v=g[w])&&++w<p;);b._next=v||null}}return(s=new $C(s,n))._enter=o,s._exit=l,s},enter:function(){return new $C(this._enter||this._groups.map(NN),this._parents)},exit:function(){return new $C(this._exit||this._groups.map(NN),this._parents)},join:function(t,e,r){var n=this.enter(),i=this,a=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?a.remove():r(a),n&&i?n.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,a=n.length,s=Math.min(i,a),o=new Array(i),l=0;l<s;++l)for(var c,u=r[l],h=n[l],d=u.length,f=o[l]=new Array(d),p=0;p<d;++p)(c=u[p]||h[p])&&(f[p]=c);for(;l<i;++l)o[l]=r[l];return new $C(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],a=i.length-1,s=i[a];--a>=0;)(n=i[a])&&(s&&4^n.compareDocumentPosition(s)&&s.parentNode.insertBefore(n,s),s=n);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=FN);for(var r=this._groups,n=r.length,i=new Array(n),a=0;a<n;++a){for(var s,o=r[a],l=o.length,c=i[a]=new Array(l),u=0;u<l;++u)(s=o[u])&&(c[u]=s);c.sort(e)}return new $C(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,a=n.length;i<a;++i){var s=n[i];if(s)return s}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,a=e[r],s=0,o=a.length;s<o;++s)(i=a[s])&&t.call(i,i.__data__,s,a);return this},attr:function(t,e){var r=mN(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?jN:DN:"function"==typeof e?r.local?LN:UN:r.local?qN:zN)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?BN:"function"==typeof e?WN:VN)(t,e,null==r?"":r)):XN(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?YN:"function"==typeof e?ZN:KN)(t,e)):this.node()[t]},classed:function(t,e){var r=GN(t+"");if(arguments.length<2){for(var n=JN(this.node()),i=-1,a=r.length;++i<a;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?iC:e?rC:nC)(r,e))},text:function(t){return arguments.length?this.each(null==t?aC:("function"==typeof t?oC:sC)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?lC:("function"==typeof t?uC:cC)(t)):this.node().innerHTML},raise:function(){return this.each(hC)},lower:function(){return this.each(dC)},append:function(t){var e="function"==typeof t?t:vN(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:vN(t),n=null==e?fC:"function"==typeof e?e:wN(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(pC)},clone:function(t){return this.select(t?gC:mC)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var n,i,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),s=a.length;if(!(arguments.length<2)){for(o=e?vC:bC,n=0;n<s;++n)this.each(o(a[n],e,r));return this}var o=this.node().__on;if(o)for(var l,c=0,u=o.length;c<u;++c)for(n=0,l=o[c];n<s;++n)if((i=a[n]).type===l.type&&i.name===l.name)return l.value},dispatch:function(t,e){return this.each(("function"==typeof e?xC:wC)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],a=0,s=i.length;a<s;++a)(n=i[a])&&(yield n)}};const EC={passive:!1},MC={capture:!0,passive:!1};function TC(t){t.stopImmediatePropagation()}function NC(t){t.preventDefault(),t.stopImmediatePropagation()}var CC=t=>()=>t;function RC(t,{sourceEvent:e,subject:r,target:n,identifier:i,active:a,x:s,y:o,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}function OC(t){return!t.ctrlKey&&!t.button}function PC(){return this.parentNode}function IC(t,e){return null==e?{x:t.x,y:t.y}:e}function FC(){return navigator.maxTouchPoints||"ontouchstart"in this}function DC(){var t,e,r,n,i=OC,a=PC,s=IC,o=FC,l={},c=cN("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",f).filter(o).on("touchstart.drag",g).on("touchmove.drag",b,EC).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(s,o){if(!n&&i.call(this,s,o)){var l=y(this,a.call(this,s,o),s,o,"mouse");l&&(_C(s.view).on("mousemove.drag",p,MC).on("mouseup.drag",m,MC),function(t){var e=t.document.documentElement,r=_C(t).on("dragstart.drag",NC,MC);"onselectstart"in e?r.on("selectstart.drag",NC,MC):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(s.view),TC(s),r=!1,t=s.clientX,e=s.clientY,l("start",s))}}function p(n){if(NC(n),!r){var i=n.clientX-t,a=n.clientY-e;r=i*i+a*a>h}l.mouse("drag",n)}function m(t){_C(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,n=_C(t).on("dragstart.drag",null);e&&(n.on("click.drag",NC,MC),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in r?n.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),NC(t),l.mouse("end",t)}function g(t,e){if(i.call(this,t,e)){var r,n,s=t.changedTouches,o=a.call(this,t,e),l=s.length;for(r=0;r<l;++r)(n=y(this,o,t,e,s[r].identifier,s[r]))&&(TC(t),n("start",t,s[r]))}}function b(t){var e,r,n=t.changedTouches,i=n.length;for(e=0;e<i;++e)(r=l[n[e].identifier])&&(NC(t),r("drag",t,n[e]))}function v(t){var e,r,i=t.changedTouches,a=i.length;for(n&&clearTimeout(n),n=setTimeout(function(){n=null},500),e=0;e<a;++e)(r=l[i[e].identifier])&&(TC(t),r("end",t,i[e]))}function y(t,e,r,n,i,a){var o,h,f,p=c.copy(),m=AC(a||r,e);if(null!=(f=s.call(t,new RC("beforestart",{sourceEvent:r,target:d,identifier:i,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),n)))return o=f.x-m[0]||0,h=f.y-m[1]||0,function r(a,s,c){var g,b=m;switch(a){case"start":l[i]=r,g=u++;break;case"end":delete l[i],--u;case"drag":m=AC(c||s,e),g=u}p.call(a,t,new RC(a,{sourceEvent:s,subject:f,target:d,identifier:i,active:g,x:m[0]+o,y:m[1]+h,dx:m[0]-b[0],dy:m[1]-b[1],dispatch:p}),n)}}return d.filter=function(t){return arguments.length?(i="function"==typeof t?t:CC(!!t),d):i},d.container=function(t){return arguments.length?(a="function"==typeof t?t:CC(t),d):a},d.subject=function(t){return arguments.length?(s="function"==typeof t?t:CC(t),d):s},d.touchable=function(t){return arguments.length?(o="function"==typeof t?t:CC(!!t),d):o},d.on=function(){var t=c.on.apply(c,arguments);return t===c?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}function jC(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function zC(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function qC(){}RC.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var UC=.7,LC=1/UC,HC="\\s*([+-]?\\d+)\\s*",BC="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",VC="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",WC=/^#([0-9a-f]{3,8})$/,XC=new RegExp(`^rgb\\(${HC},${HC},${HC}\\)$`),YC=new RegExp(`^rgb\\(${VC},${VC},${VC}\\)$`),KC=new RegExp(`^rgba\\(${HC},${HC},${HC},${BC}\\)$`),ZC=new RegExp(`^rgba\\(${VC},${VC},${VC},${BC}\\)$`),GC=new RegExp(`^hsl\\(${BC},${VC},${VC}\\)$`),JC=new RegExp(`^hsla\\(${BC},${VC},${VC},${BC}\\)$`),QC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function tR(){return this.rgb().formatHex()}function eR(){return this.rgb().formatRgb()}function rR(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=WC.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?nR(e):3===r?new sR(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?iR(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?iR(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=XC.exec(t))?new sR(e[1],e[2],e[3],1):(e=YC.exec(t))?new sR(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=KC.exec(t))?iR(e[1],e[2],e[3],e[4]):(e=ZC.exec(t))?iR(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=GC.exec(t))?dR(e[1],e[2]/100,e[3]/100,1):(e=JC.exec(t))?dR(e[1],e[2]/100,e[3]/100,e[4]):QC.hasOwnProperty(t)?nR(QC[t]):"transparent"===t?new sR(NaN,NaN,NaN,0):null}function nR(t){return new sR(t>>16&255,t>>8&255,255&t,1)}function iR(t,e,r,n){return n<=0&&(t=e=r=NaN),new sR(t,e,r,n)}function aR(t,e,r,n){return 1===arguments.length?function(t){return t instanceof qC||(t=rR(t)),t?new sR((t=t.rgb()).r,t.g,t.b,t.opacity):new sR}(t):new sR(t,e,r,null==n?1:n)}function sR(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function oR(){return`#${hR(this.r)}${hR(this.g)}${hR(this.b)}`}function lR(){const t=cR(this.opacity);return`${1===t?"rgb(":"rgba("}${uR(this.r)}, ${uR(this.g)}, ${uR(this.b)}${1===t?")":`, ${t})`}`}function cR(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function uR(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hR(t){return((t=uR(t))<16?"0":"")+t.toString(16)}function dR(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new pR(t,e,r,n)}function fR(t){if(t instanceof pR)return new pR(t.h,t.s,t.l,t.opacity);if(t instanceof qC||(t=rR(t)),!t)return new pR;if(t instanceof pR)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=NaN,o=a-i,l=(a+i)/2;return o?(s=e===a?(r-n)/o+6*(r<n):r===a?(n-e)/o+2:(e-r)/o+4,o/=l<.5?a+i:2-a-i,s*=60):o=l>0&&l<1?0:s,new pR(s,o,l,t.opacity)}function pR(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function mR(t){return(t=(t||0)%360)<0?t+360:t}function gR(t){return Math.max(0,Math.min(1,t||0))}function bR(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}jC(qC,rR,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:tR,formatHex:tR,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return fR(this).formatHsl()},formatRgb:eR,toString:eR}),jC(sR,aR,zC(qC,{brighter(t){return t=null==t?LC:Math.pow(LC,t),new sR(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?UC:Math.pow(UC,t),new sR(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new sR(uR(this.r),uR(this.g),uR(this.b),cR(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:oR,formatHex:oR,formatHex8:function(){return`#${hR(this.r)}${hR(this.g)}${hR(this.b)}${hR(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:lR,toString:lR})),jC(pR,function(t,e,r,n){return 1===arguments.length?fR(t):new pR(t,e,r,null==n?1:n)},zC(qC,{brighter(t){return t=null==t?LC:Math.pow(LC,t),new pR(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?UC:Math.pow(UC,t),new pR(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new sR(bR(t>=240?t-240:t+120,i,n),bR(t,i,n),bR(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new pR(mR(this.h),gR(this.s),gR(this.l),cR(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=cR(this.opacity);return`${1===t?"hsl(":"hsla("}${mR(this.h)}, ${100*gR(this.s)}%, ${100*gR(this.l)}%${1===t?")":`, ${t})`}`}}));var vR=t=>()=>t;function yR(t){return 1===(t=+t)?wR:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}(e,r,t):vR(isNaN(e)?r:e)}}function wR(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):vR(isNaN(t)?e:t)}var xR=function t(e){var r=yR(e);function n(t,e){var n=r((t=aR(t)).r,(e=aR(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),s=wR(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=s(e),t+""}}return n.gamma=t,n}(1);function kR(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(r=0;r<n;++r)i[r]=t[r]*(1-a)+e[r]*a;return i}}function $R(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,a=new Array(i),s=new Array(n);for(r=0;r<i;++r)a[r]=NR(t[r],e[r]);for(;r<n;++r)s[r]=e[r];return function(t){for(r=0;r<i;++r)s[r]=a[r](t);return s}}function SR(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function _R(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function AR(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=NR(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var ER=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,MR=new RegExp(ER.source,"g");function TR(t,e){var r,n,i,a=ER.lastIndex=MR.lastIndex=0,s=-1,o=[],l=[];for(t+="",e+="";(r=ER.exec(t))&&(n=MR.exec(e));)(i=n.index)>a&&(i=e.slice(a,i),o[s]?o[s]+=i:o[++s]=i),(r=r[0])===(n=n[0])?o[s]?o[s]+=n:o[++s]=n:(o[++s]=null,l.push({i:s,x:_R(r,n)})),a=MR.lastIndex;return a<e.length&&(i=e.slice(a),o[s]?o[s]+=i:o[++s]=i),o.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)o[(r=l[n]).i]=r.x(t);return o.join("")})}function NR(t,e){var r,n=typeof e;return null==e||"boolean"===n?vR(e):("number"===n?_R:"string"===n?(r=rR(e))?(e=r,xR):TR:e instanceof rR?xR:e instanceof Date?SR:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?kR:Array.isArray(e)?$R:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?AR:_R)(t,e)}function CR(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var RR,OR=180/Math.PI,PR={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function IR(t,e,r,n,i,a){var s,o,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*r+e*n)&&(r-=t*l,n-=e*l),(o=Math.sqrt(r*r+n*n))&&(r/=o,n/=o,l/=o),t*n<e*r&&(t=-t,e=-e,l=-l,s=-s),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*OR,skewX:Math.atan(l)*OR,scaleX:s,scaleY:o}}function FR(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(a,s){var o=[],l=[];return a=t(a),s=t(s),function(t,n,i,a,s,o){if(t!==i||n!==a){var l=s.push("translate(",null,e,null,r);o.push({i:l-4,x:_R(t,i)},{i:l-2,x:_R(n,a)})}else(i||a)&&s.push("translate("+i+e+a+r)}(a.translateX,a.translateY,s.translateX,s.translateY,o,l),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(i(r)+"rotate(",null,n)-2,x:_R(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(a.rotate,s.rotate,o,l),function(t,e,r,a){t!==e?a.push({i:r.push(i(r)+"skewX(",null,n)-2,x:_R(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(a.skewX,s.skewX,o,l),function(t,e,r,n,a,s){if(t!==r||e!==n){var o=a.push(i(a)+"scale(",null,",",null,")");s.push({i:o-4,x:_R(t,r)},{i:o-2,x:_R(e,n)})}else 1===r&&1===n||a.push(i(a)+"scale("+r+","+n+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,o,l),a=s=null,function(t){for(var e,r=-1,n=l.length;++r<n;)o[(e=l[r]).i]=e.x(t);return o.join("")}}}var DR,jR,zR=FR(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?PR:IR(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),qR=FR(function(t){return null==t?PR:(RR||(RR=document.createElementNS("http://www.w3.org/2000/svg","g")),RR.setAttribute("transform",t),(t=RR.transform.baseVal.consolidate())?IR((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):PR)},", ",")",")"),UR=0,LR=0,HR=0,BR=0,VR=0,WR=0,XR="object"==typeof performance&&performance.now?performance:Date,YR="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function KR(){return VR||(YR(ZR),VR=XR.now()+WR)}function ZR(){VR=0}function GR(){this._call=this._time=this._next=null}function JR(t,e,r){var n=new GR;return n.restart(t,e,r),n}function QR(){VR=(BR=XR.now())+WR,UR=LR=0;try{!function(){KR(),++UR;for(var t,e=DR;e;)(t=VR-e._time)>=0&&e._call.call(void 0,t),e=e._next;--UR}()}finally{UR=0,function(){var t,e,r=DR,n=1/0;for(;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:DR=e);jR=t,eO(n)}(),VR=0}}function tO(){var t=XR.now(),e=t-BR;e>1e3&&(WR-=e,BR=t)}function eO(t){UR||(LR&&(LR=clearTimeout(LR)),t-VR>24?(t<1/0&&(LR=setTimeout(QR,t-XR.now()-WR)),HR&&(HR=clearInterval(HR))):(HR||(BR=XR.now(),HR=setInterval(tO,1e3)),UR=1,YR(QR)))}function rO(t,e,r){var n=new GR;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}GR.prototype=JR.prototype={constructor:GR,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?KR():+r)+(null==e?0:+e),this._next||jR===this||(jR?jR._next=this:DR=this,jR=this),this._call=t,this._time=r,eO()},stop:function(){this._call&&(this._call=null,this._time=1/0,eO())}};var nO=cN("start","end","cancel","interrupt"),iO=[];function aO(t,e,r,n,i,a){var s=t.__transition;if(s){if(r in s)return}else t.__transition={};!function(t,e,r){var n,i=t.__transition;function a(t){r.state=1,r.timer.restart(s,r.delay,r.time),r.delay<=t&&s(t-r.delay)}function s(a){var c,u,h,d;if(1!==r.state)return l();for(c in i)if((d=i[c]).name===r.name){if(3===d.state)return rO(s);4===d.state?(d.state=6,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete i[c]):+c<e&&(d.state=6,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete i[c])}if(rO(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(a))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,n=new Array(h=r.tween.length),c=0,u=-1;c<h;++c)(d=r.tween[c].value.call(t,t.__data__,r.index,r.group))&&(n[++u]=d);n.length=u+1}}function o(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(l),r.state=5,1),a=-1,s=n.length;++a<s;)n[a].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),l())}function l(){for(var n in r.state=6,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=JR(a,0,r.time)}(t,r,{name:e,index:n,group:i,on:nO,tween:iO,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function sO(t,e){var r=lO(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function oO(t,e){var r=lO(t,e);if(r.state>3)throw new Error("too late; already running");return r}function lO(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function cO(t,e){var r,n;return function(){var i=oO(this,t),a=i.tween;if(a!==r)for(var s=0,o=(n=r=a).length;s<o;++s)if(n[s].name===e){(n=n.slice()).splice(s,1);break}i.tween=n}}function uO(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var a=oO(this,t),s=a.tween;if(s!==n){i=(n=s).slice();for(var o={name:e,value:r},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=o;break}l===c&&i.push(o)}a.tween=i}}function hO(t,e,r){var n=t._id;return t.each(function(){var t=oO(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return lO(t,n).value[e]}}function dO(t,e){var r;return("number"==typeof e?_R:e instanceof rR?xR:(r=rR(e))?(e=r,xR):TR)(t,e)}function fO(t){return function(){this.removeAttribute(t)}}function pO(t){return function(){this.removeAttributeNS(t.space,t.local)}}function mO(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttribute(t);return s===a?null:s===n?i:i=e(n=s,r)}}function gO(t,e,r){var n,i,a=r+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===a?null:s===n?i:i=e(n=s,r)}}function bO(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttribute(t))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttribute(t)}}function vO(t,e,r){var n,i,a;return function(){var s,o,l=r(this);if(null!=l)return(s=this.getAttributeNS(t.space,t.local))===(o=l+"")?null:s===n&&o===i?a:(i=o,a=e(n=s,l));this.removeAttributeNS(t.space,t.local)}}function yO(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,i)),r}return i._value=e,i}function wO(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,i)),r}return i._value=e,i}function xO(t,e){return function(){sO(this,t).delay=+e.apply(this,arguments)}}function kO(t,e){return e=+e,function(){sO(this,t).delay=e}}function $O(t,e){return function(){oO(this,t).duration=+e.apply(this,arguments)}}function SO(t,e){return e=+e,function(){oO(this,t).duration=e}}var _O=SC.prototype.constructor;function AO(t){return function(){this.style.removeProperty(t)}}var EO=0;function MO(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function TO(){return++EO}var NO=SC.prototype;MO.prototype={constructor:MO,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=wN(t));for(var n=this._groups,i=n.length,a=new Array(i),s=0;s<i;++s)for(var o,l,c=n[s],u=c.length,h=a[s]=new Array(u),d=0;d<u;++d)(o=c[d])&&(l=t.call(o,o.__data__,d,c))&&("__data__"in o&&(l.__data__=o.__data__),h[d]=l,aO(h[d],e,r,d,h,lO(o,r)));return new MO(a,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=kN(t));for(var n=this._groups,i=n.length,a=[],s=[],o=0;o<i;++o)for(var l,c=n[o],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,f=t.call(l,l.__data__,h,c),p=lO(l,r),m=0,g=f.length;m<g;++m)(d=f[m])&&aO(d,e,r,m,f,p);a.push(f),s.push(l)}return new MO(a,s,e,r)},selectChild:NO.selectChild,selectChildren:NO.selectChildren,filter:function(t){"function"!=typeof t&&(t=SN(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,s=e[i],o=s.length,l=n[i]=[],c=0;c<o;++c)(a=s[c])&&t.call(a,a.__data__,c,s)&&l.push(a);return new MO(n,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,a=Math.min(n,i),s=new Array(n),o=0;o<a;++o)for(var l,c=e[o],u=r[o],h=c.length,d=s[o]=new Array(h),f=0;f<h;++f)(l=c[f]||u[f])&&(d[f]=l);for(;o<n;++o)s[o]=e[o];return new MO(s,this._parents,this._name,this._id)},selection:function(){return new _O(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=TO(),n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)if(s=o[c]){var u=lO(s,e);aO(s,t,r,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new MO(n,this._parents,t,r)},call:NO.call,nodes:NO.nodes,node:NO.node,size:NO.size,empty:NO.empty,each:NO.each,on:function(t,e){var r=this._id;return arguments.length<2?lO(this.node(),r).on.on(t):this.each(function(t,e,r){var n,i,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?sO:oO;return function(){var s=a(this,t),o=s.on;o!==n&&(i=(n=o).copy()).on(e,r),s.on=i}}(r,t,e))},attr:function(t,e){var r=mN(t),n="transform"===r?qR:dO;return this.attrTween(t,"function"==typeof e?(r.local?vO:bO)(r,n,hO(this,"attr."+t,e)):null==e?(r.local?pO:fO)(r):(r.local?gO:mO)(r,n,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=mN(t);return this.tween(r,(n.local?yO:wO)(n,e))},style:function(t,e,r){var n="transform"==(t+="")?zR:dO;return null==e?this.styleTween(t,function(t,e){var r,n,i;return function(){var a=XN(this,t),s=(this.style.removeProperty(t),XN(this,t));return a===s?null:a===r&&s===n?i:i=e(r=a,n=s)}}(t,n)).on("end.style."+t,AO(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var n,i,a;return function(){var s=XN(this,t),o=r(this),l=o+"";return null==o&&(this.style.removeProperty(t),l=o=XN(this,t)),s===l?null:s===n&&l===i?a:(i=l,a=e(n=s,o))}}(t,n,hO(this,"style."+t,e))).each(function(t,e){var r,n,i,a,s="style."+e,o="end."+s;return function(){var l=oO(this,t),c=l.on,u=null==l.value[s]?a||(a=AO(e)):void 0;c===r&&i===u||(n=(r=c).copy()).on(o,i=u),l.on=n}}(this._id,t)):this.styleTween(t,function(t,e,r){var n,i,a=r+"";return function(){var s=XN(this,t);return s===a?null:s===n?i:i=e(n=s,r)}}(t,n,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,function(t,e,r){var n,i;function a(){var a=e.apply(this,arguments);return a!==i&&(n=(i=a)&&function(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}(t,a,r)),n}return a._value=e,a}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(hO(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&function(t){return function(e){this.textContent=t.call(this,e)}}(n)),e}return n._value=t,n}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=lO(this.node(),r).tween,a=0,s=i.length;a<s;++a)if((n=i[a]).name===t)return n.value;return null}return this.each((null==e?cO:uO)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?xO:kO)(e,t)):lO(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?$O:SO)(e,t)):lO(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){oO(this,t).ease=e}}(e,t)):lO(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;oO(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,n=r._id,i=r.size();return new Promise(function(a,s){var o={value:s},l={value:function(){0===--i&&a()}};r.each(function(){var r=oO(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),r.on=e}),0===i&&a()})},[Symbol.iterator]:NO[Symbol.iterator]};const CO=t=>+t;function RO(t){return t*t*t}function OO(t){return--t*t*t+1}var PO={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function IO(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}SC.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,n,i,a=t.__transition,s=!0;if(a){for(i in e=null==e?null:e+"",a)(r=a[i]).name===e?(n=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[i]):s=!1;s&&delete t.__transition}}(this,t)})},SC.prototype.transition=function(t){var e,r;t instanceof MO?(e=t._id,t=t._name):(e=TO(),(r=PO).time=KR(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,a=0;a<i;++a)for(var s,o=n[a],l=o.length,c=0;c<l;++c)(s=o[c])&&aO(s,t,e,c,o,r||IO(s,e));return new MO(n,this._parents,t,e)};const FO=Math.PI,DO=2*FO,jO=1e-6,zO=DO-jO;function qO(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class UO{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?qO:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return qO;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,a){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+a}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let a=this._x1,s=this._y1,o=r-t,l=n-e,c=a-t,u=s-e,h=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>jO)if(Math.abs(u*o-l*c)>jO&&i){let d=r-a,f=n-s,p=o*o+l*l,m=d*d+f*f,g=Math.sqrt(p),b=Math.sqrt(h),v=i*Math.tan((FO-Math.acos((p+h-m)/(2*g*b)))/2),y=v/b,w=v/g;Math.abs(y-1)>jO&&this._append`L${t+y*c},${e+y*u}`,this._append`A${i},${i},0,0,${+(u*d>c*f)},${this._x1=t+w*o},${this._y1=e+w*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(n),o=r*Math.sin(n),l=t+s,c=e+o,u=1^a,h=a?n-i:i-n;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>jO||Math.abs(this._y1-c)>jO)&&this._append`L${l},${c}`,r&&(h<0&&(h=h%DO+DO),h>zO?this._append`A${r},${r},0,1,${u},${t-s},${e-o}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:h>jO&&this._append`A${r},${r},0,${+(h>=FO)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}var LO=Array.prototype.slice;function HO(t,e){return t-e}var BO=t=>()=>t;function VO(t,e){for(var r,n=-1,i=e.length;++n<i;)if(r=WO(t,e[n]))return r;return 0}function WO(t,e){for(var r=e[0],n=e[1],i=-1,a=0,s=t.length,o=s-1;a<s;o=a++){var l=t[a],c=l[0],u=l[1],h=t[o],d=h[0],f=h[1];if(XO(l,h,e))return 0;u>n!=f>n&&r<(d-c)*(n-u)/(f-u)+c&&(i=-i)}return i}function XO(t,e,r){var n;return function(t,e,r){return(e[0]-t[0])*(r[1]-t[1])===(r[0]-t[0])*(e[1]-t[1])}(t,e,r)&&function(t,e,r){return t<=e&&e<=r||r<=e&&e<=t}(t[n=+(t[0]===e[0])],r[n],e[n])}function YO(){}var KO=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function ZO(){var t=1,e=1,r=ZT,n=o;function i(t){var e=r(t);if(Array.isArray(e))e=e.slice().sort(HO);else{const r=jT(t,GO);for(e=XT(...KT(r[0],r[1],e),e);e[e.length-1]>=r[1];)e.pop();for(;e[1]<r[0];)e.shift()}return e.map(e=>a(t,e))}function a(r,i){const a=null==i?NaN:+i;if(isNaN(a))throw new Error(`invalid value: ${i}`);var o=[],l=[];return function(r,n,i){var a,o,l,c,u,h,d=new Array,f=new Array;a=o=-1,c=JO(r[0],n),KO[c<<1].forEach(p);for(;++a<t-1;)l=c,c=JO(r[a+1],n),KO[l|c<<1].forEach(p);KO[c|0].forEach(p);for(;++o<e-1;){for(a=-1,c=JO(r[o*t+t],n),u=JO(r[o*t],n),KO[c<<1|u<<2].forEach(p);++a<t-1;)l=c,c=JO(r[o*t+t+a+1],n),h=u,u=JO(r[o*t+a+1],n),KO[l|c<<1|u<<2|h<<3].forEach(p);KO[c|u<<3].forEach(p)}a=-1,u=r[o*t]>=n,KO[u<<2].forEach(p);for(;++a<t-1;)h=u,u=JO(r[o*t+a+1],n),KO[u<<2|h<<3].forEach(p);function p(t){var e,r,n=[t[0][0]+a,t[0][1]+o],l=[t[1][0]+a,t[1][1]+o],c=s(n),u=s(l);(e=f[c])?(r=d[u])?(delete f[e.end],delete d[r.start],e===r?(e.ring.push(l),i(e.ring)):d[e.start]=f[r.end]={start:e.start,end:r.end,ring:e.ring.concat(r.ring)}):(delete f[e.end],e.ring.push(l),f[e.end=u]=e):(e=d[u])?(r=f[c])?(delete d[e.start],delete f[r.end],e===r?(e.ring.push(l),i(e.ring)):d[r.start]=f[e.end]={start:r.start,end:e.end,ring:r.ring.concat(e.ring)}):(delete d[e.start],e.ring.unshift(n),d[e.start=c]=e):d[c]=f[u]={start:c,end:u,ring:[n,l]}}KO[u<<3].forEach(p)}(r,a,function(t){n(t,r,a),function(t){for(var e=0,r=t.length,n=t[r-1][1]*t[0][0]-t[r-1][0]*t[0][1];++e<r;)n+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return n}(t)>0?o.push([t]):l.push(t)}),l.forEach(function(t){for(var e,r=0,n=o.length;r<n;++r)if(-1!==VO((e=o[r])[0],t))return void e.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function s(e){return 2*e[0]+e[1]*(t+1)*4}function o(r,n,i){r.forEach(function(r){var a=r[0],s=r[1],o=0|a,l=0|s,c=QO(n[l*t+o]);a>0&&a<t&&o===a&&(r[0]=tP(a,QO(n[l*t+o-1]),c,i)),s>0&&s<e&&l===s&&(r[1]=tP(s,QO(n[(l-1)*t+o]),c,i))})}return i.contour=a,i.size=function(r){if(!arguments.length)return[t,e];var n=Math.floor(r[0]),a=Math.floor(r[1]);if(!(n>=0&&a>=0))throw new Error("invalid size");return t=n,e=a,i},i.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?BO(LO.call(t)):BO(t),i):r},i.smooth=function(t){return arguments.length?(n=t?o:YO,i):n===o},i}function GO(t){return isFinite(t)?t:NaN}function JO(t,e){return null!=t&&+t>=e}function QO(t){return null==t||isNaN(t=+t)?-1/0:t}function tP(t,e,r,n){const i=n-e,a=r-e,s=isFinite(i)||isFinite(a)?i/a:Math.sign(i)/Math.sign(a);return isNaN(s)?t:t+s-.5}function eP(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function rP(t){return(t=eP(Math.abs(t)))?t[1]:NaN}var nP,iP=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function aP(t){if(!(e=iP.exec(t)))throw new Error("invalid format: "+t);var e;return new sP({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function sP(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function oP(t,e){var r=eP(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}aP.prototype=sP.prototype,sP.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var lP={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>oP(100*t,e),r:oP,s:function(t,e){var r=eP(t,e);if(!r)return nP=void 0,t.toPrecision(e);var n=r[0],i=r[1],a=i-(nP=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,s=n.length;return a===s?n:a>s?n+new Array(a-s+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+eP(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function cP(t){return t}var uP,hP,dP,fP=Array.prototype.map,pP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function mP(t){var e,r,n=void 0===t.grouping||void 0===t.thousands?cP:(e=fP.call(t.grouping,Number),r=t.thousands+"",function(t,n){for(var i=t.length,a=[],s=0,o=e[0],l=0;i>0&&o>0&&(l+o+1>n&&(o=Math.max(1,n-l)),a.push(t.substring(i-=o,i+o)),!((l+=o+1)>n));)o=e[s=(s+1)%e.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?cP:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(fP.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t,e){var r=(t=aP(t)).fill,h=t.align,d=t.sign,f=t.symbol,p=t.zero,m=t.width,g=t.comma,b=t.precision,v=t.trim,y=t.type;"n"===y?(g=!0,y="g"):lP[y]||(void 0===b&&(b=12),v=!0,y="g"),(p||"0"===r&&"="===h)&&(p=!0,r="0",h="=");var w=(e&&void 0!==e.prefix?e.prefix:"")+("$"===f?i:"#"===f&&/[boxX]/.test(y)?"0"+y.toLowerCase():""),x=("$"===f?a:/[%p]/.test(y)?l:"")+(e&&void 0!==e.suffix?e.suffix:""),k=lP[y],$=/[defgprs%]/.test(y);function S(t){var e,i,a,l=w,f=x;if("c"===y)f=k(t)+f,t="";else{var S=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:k(Math.abs(t),b),v&&(t=function(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),S&&0===+t&&"+"!==d&&(S=!1),l=(S?"("===d?d:c:"-"===d||"("===d?"":d)+l,f=("s"!==y||isNaN(t)||void 0===nP?"":pP[8+nP/3])+f+(S&&"("===d?")":""),$)for(e=-1,i=t.length;++e<i;)if(48>(a=t.charCodeAt(e))||a>57){f=(46===a?s+t.slice(e+1):t.slice(e))+f,t=t.slice(0,e);break}}g&&!p&&(t=n(t,1/0));var _=l.length+t.length+f.length,A=_<m?new Array(m-_+1).join(r):"";switch(g&&p&&(t=n(A+t,A.length?m-f.length:1/0),A=""),h){case"<":t=l+t+f+A;break;case"=":t=l+A+t+f;break;case"^":t=A.slice(0,_=A.length>>1)+l+t+f+A.slice(_);break;default:t=A+l+t+f}return o(t)}return b=void 0===b?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),S.toString=function(){return t+""},S}return{format:h,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor(rP(e)/3))),n=Math.pow(10,-r),i=h(((t=aP(t)).type="f",t),{suffix:pP[8+r/3]});return function(t){return i(n*t)}}}}uP=mP({thousands:",",grouping:[3],currency:["$",""]}),hP=uP.format,dP=uP.formatPrefix;var gP=1e-6,bP=Math.PI,vP=2*bP,yP=180/bP,wP=bP/180,xP=Math.abs,kP=Math.cos,$P=Math.sin,SP=Math.sqrt;function _P(){}function AP(t,e){t&&MP.hasOwnProperty(t.type)&&MP[t.type](t,e)}var EP={Feature:function(t,e){AP(t.geometry,e)},FeatureCollection:function(t,e){for(var r=t.features,n=-1,i=r.length;++n<i;)AP(r[n].geometry,e)}},MP={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)t=r[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){TP(t.coordinates,e,0)},MultiLineString:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)TP(r[n],e,0)},Polygon:function(t,e){NP(t.coordinates,e)},MultiPolygon:function(t,e){for(var r=t.coordinates,n=-1,i=r.length;++n<i;)NP(r[n],e)},GeometryCollection:function(t,e){for(var r=t.geometries,n=-1,i=r.length;++n<i;)AP(r[n],e)}};function TP(t,e,r){var n,i=-1,a=t.length-r;for(e.lineStart();++i<a;)n=t[i],e.point(n[0],n[1],n[2]);e.lineEnd()}function NP(t,e){var r=-1,n=t.length;for(e.polygonStart();++r<n;)TP(t[r],e,1);e.polygonEnd()}function CP(t,e){t&&EP.hasOwnProperty(t.type)?EP[t.type](t,e):AP(t,e)}function RP(t,e,r,n){this.x=t,this.z=e,this.o=r,this.e=n,this.v=!1,this.n=this.p=null}function OP(t,e,r,n,i){var a,s,o=[],l=[];if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,r,n=t[0],s=t[e];if(function(t,e){return xP(t[0]-e[0])<gP&&xP(t[1]-e[1])<gP}(n,s)){if(!n[2]&&!s[2]){for(i.lineStart(),a=0;a<e;++a)i.point((n=t[a])[0],n[1]);return void i.lineEnd()}s[0]+=2e-6}o.push(r=new RP(n,t,null,!0)),l.push(r.o=new RP(n,null,r,!1)),o.push(r=new RP(s,t,null,!1)),l.push(r.o=new RP(s,null,r,!0))}}),o.length){for(l.sort(e),PP(o),PP(l),a=0,s=l.length;a<s;++a)l[a].e=r=!r;for(var c,u,h=o[0];;){for(var d=h,f=!0;d.v;)if((d=d.n)===h)return;c=d.z,i.lineStart();do{if(d.v=d.o.v=!0,d.e){if(f)for(a=0,s=c.length;a<s;++a)i.point((u=c[a])[0],u[1]);else n(d.x,d.n.x,1,i);d=d.n}else{if(f)for(c=d.p.z,a=c.length-1;a>=0;--a)i.point((u=c[a])[0],u[1]);else n(d.x,d.p.x,-1,i);d=d.p}c=(d=d.o).z,f=!f}while(!d.v);i.lineEnd()}}}function PP(t){if(e=t.length){for(var e,r,n=0,i=t[0];++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}var IP=1e9,FP=-IP;function DP(t,e,r,n){function i(i,a){return t<=i&&i<=r&&e<=a&&a<=n}function a(i,a,o,c){var u=0,h=0;if(null==i||(u=s(i,o))!==(h=s(a,o))||l(i,a)<0^o>0)do{c.point(0===u||3===u?t:r,u>1?n:e)}while((u=(u+o+4)%4)!==h);else c.point(a[0],a[1])}function s(n,i){return xP(n[0]-t)<gP?i>0?0:3:xP(n[0]-r)<gP?i>0?2:1:xP(n[1]-e)<gP?i>0?1:0:i>0?3:2}function o(t,e){return l(t.x,e.x)}function l(t,e){var r=s(t,1),n=s(e,1);return r!==n?r-n:0===r?e[1]-t[1]:1===r?t[0]-e[0]:2===r?t[1]-e[1]:e[0]-t[0]}return function(s){var l,c,u,h,d,f,p,m,g,b,v,y=s,w=function(){var t,e=[];return{point:function(e,r,n){t.push([e,r,n])},lineStart:function(){e.push(t=[])},lineEnd:_P,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var r=e;return e=[],t=null,r}}}(),x={point:k,lineStart:function(){x.point=$,c&&c.push(u=[]);b=!0,g=!1,p=m=NaN},lineEnd:function(){l&&($(h,d),f&&g&&w.rejoin(),l.push(w.result()));x.point=k,g&&y.lineEnd()},polygonStart:function(){y=w,l=[],c=[],v=!0},polygonEnd:function(){var e=function(){for(var e=0,r=0,i=c.length;r<i;++r)for(var a,s,o=c[r],l=1,u=o.length,h=o[0],d=h[0],f=h[1];l<u;++l)a=d,s=f,d=(h=o[l])[0],f=h[1],s<=n?f>n&&(d-a)*(n-s)>(f-s)*(t-a)&&++e:f<=n&&(d-a)*(n-s)<(f-s)*(t-a)&&--e;return e}(),r=v&&e,i=(h=l,l=Array.from(function*(t){for(const e of t)yield*e}(h))).length;var h;(r||i)&&(s.polygonStart(),r&&(s.lineStart(),a(null,null,1,s),s.lineEnd()),i&&OP(l,o,e,a,s),s.polygonEnd());y=s,l=c=u=null}};function k(t,e){i(t,e)&&y.point(t,e)}function $(a,s){var o=i(a,s);if(c&&u.push([a,s]),b)h=a,d=s,f=o,b=!1,o&&(y.lineStart(),y.point(a,s));else if(o&&g)y.point(a,s);else{var l=[p=Math.max(FP,Math.min(IP,p)),m=Math.max(FP,Math.min(IP,m))],w=[a=Math.max(FP,Math.min(IP,a)),s=Math.max(FP,Math.min(IP,s))];!function(t,e,r,n,i,a){var s,o=t[0],l=t[1],c=0,u=1,h=e[0]-o,d=e[1]-l;if(s=r-o,h||!(s>0)){if(s/=h,h<0){if(s<c)return;s<u&&(u=s)}else if(h>0){if(s>u)return;s>c&&(c=s)}if(s=i-o,h||!(s<0)){if(s/=h,h<0){if(s>u)return;s>c&&(c=s)}else if(h>0){if(s<c)return;s<u&&(u=s)}if(s=n-l,d||!(s>0)){if(s/=d,d<0){if(s<c)return;s<u&&(u=s)}else if(d>0){if(s>u)return;s>c&&(c=s)}if(s=a-l,d||!(s<0)){if(s/=d,d<0){if(s>u)return;s>c&&(c=s)}else if(d>0){if(s<c)return;s<u&&(u=s)}return c>0&&(t[0]=o+c*h,t[1]=l+c*d),u<1&&(e[0]=o+u*h,e[1]=l+u*d),!0}}}}}(l,w,t,e,r,n)?o&&(y.lineStart(),y.point(a,s),v=!1):(g||(y.lineStart(),y.point(l[0],l[1])),y.point(w[0],w[1]),o||y.lineEnd(),v=!1)}p=a,m=s,g=o}return x}}var jP,zP,qP,UP,LP=t=>t,HP=new zT,BP=new zT,VP={point:_P,lineStart:_P,lineEnd:_P,polygonStart:function(){VP.lineStart=WP,VP.lineEnd=KP},polygonEnd:function(){VP.lineStart=VP.lineEnd=VP.point=_P,HP.add(xP(BP)),BP=new zT},result:function(){var t=HP/2;return HP=new zT,t}};function WP(){VP.point=XP}function XP(t,e){VP.point=YP,jP=qP=t,zP=UP=e}function YP(t,e){BP.add(UP*t-qP*e),qP=t,UP=e}function KP(){YP(jP,zP)}var ZP=1/0,GP=ZP,JP=-ZP,QP=JP,tI={point:function(t,e){t<ZP&&(ZP=t);t>JP&&(JP=t);e<GP&&(GP=e);e>QP&&(QP=e)},lineStart:_P,lineEnd:_P,polygonStart:_P,polygonEnd:_P,result:function(){var t=[[ZP,GP],[JP,QP]];return JP=QP=-(GP=ZP=1/0),t}};var eI,rI,nI,iI,aI=0,sI=0,oI=0,lI=0,cI=0,uI=0,hI=0,dI=0,fI=0,pI={point:mI,lineStart:gI,lineEnd:yI,polygonStart:function(){pI.lineStart=wI,pI.lineEnd=xI},polygonEnd:function(){pI.point=mI,pI.lineStart=gI,pI.lineEnd=yI},result:function(){var t=fI?[hI/fI,dI/fI]:uI?[lI/uI,cI/uI]:oI?[aI/oI,sI/oI]:[NaN,NaN];return aI=sI=oI=lI=cI=uI=hI=dI=fI=0,t}};function mI(t,e){aI+=t,sI+=e,++oI}function gI(){pI.point=bI}function bI(t,e){pI.point=vI,mI(nI=t,iI=e)}function vI(t,e){var r=t-nI,n=e-iI,i=SP(r*r+n*n);lI+=i*(nI+t)/2,cI+=i*(iI+e)/2,uI+=i,mI(nI=t,iI=e)}function yI(){pI.point=mI}function wI(){pI.point=kI}function xI(){$I(eI,rI)}function kI(t,e){pI.point=$I,mI(eI=nI=t,rI=iI=e)}function $I(t,e){var r=t-nI,n=e-iI,i=SP(r*r+n*n);lI+=i*(nI+t)/2,cI+=i*(iI+e)/2,uI+=i,hI+=(i=iI*t-nI*e)*(nI+t),dI+=i*(iI+e),fI+=3*i,mI(nI=t,iI=e)}function SI(t){this._context=t}SI.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,vP)}},result:_P};var _I,AI,EI,MI,TI,NI=new zT,CI={point:_P,lineStart:function(){CI.point=RI},lineEnd:function(){_I&&OI(AI,EI),CI.point=_P},polygonStart:function(){_I=!0},polygonEnd:function(){_I=null},result:function(){var t=+NI;return NI=new zT,t}};function RI(t,e){CI.point=OI,AI=MI=t,EI=TI=e}function OI(t,e){MI-=t,TI-=e,NI.add(SP(MI*MI+TI*TI)),MI=t,TI=e}let PI,II,FI,DI;class jI{constructor(t){this._append=null==t?zI:function(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return zI;if(e!==PI){const t=10**e;PI=e,II=function(e){let r=1;this._+=e[0];for(const n=e.length;r<n;++r)this._+=Math.round(arguments[r]*t)/t+e[r]}}return II}(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:this._append`M${t},${e}`,this._point=1;break;case 1:this._append`L${t},${e}`;break;default:if(this._append`M${t},${e}`,this._radius!==FI||this._append!==II){const t=this._radius,e=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,FI=t,II=this._append,DI=this._,this._=e}this._+=DI}}result(){const t=this._;return this._="",t.length?t:null}}function zI(t){let e=1;this._+=t[0];for(const r=t.length;e<r;++e)this._+=arguments[e]+t[e]}function qI(t,e){let r,n,i=3,a=4.5;function s(t){return t&&("function"==typeof a&&n.pointRadius(+a.apply(this,arguments)),CP(t,r(n))),n.result()}return s.area=function(t){return CP(t,r(VP)),VP.result()},s.measure=function(t){return CP(t,r(CI)),CI.result()},s.bounds=function(t){return CP(t,r(tI)),tI.result()},s.centroid=function(t){return CP(t,r(pI)),pI.result()},s.projection=function(e){return arguments.length?(r=null==e?(t=null,LP):(t=e).stream,s):t},s.context=function(t){return arguments.length?(n=null==t?(e=null,new jI(i)):new SI(e=t),"function"!=typeof a&&n.pointRadius(a),s):e},s.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(n.pointRadius(+t),+t),s):a},s.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);i=e}return null===e&&(n=new jI(i)),s},s.projection(t).digits(i).context(e)}function UI(){}function LI(t,e,r){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=n&&t.clipExtent(null),CP(r,t.stream(tI)),e(tI.result()),null!=n&&t.clipExtent(n),t}function HI(t,e,r){return LI(t,function(r){var n=e[1][0]-e[0][0],i=e[1][1]-e[0][1],a=Math.min(n/(r[1][0]-r[0][0]),i/(r[1][1]-r[0][1])),s=+e[0][0]+(n-a*(r[1][0]+r[0][0]))/2,o=+e[0][1]+(i-a*(r[1][1]+r[0][1]))/2;t.scale(150*a).translate([s,o])},r)}function BI(){var t,e,r,n,i,a,s,o,l=1,c=0,u=0,h=1,d=1,f=0,p=null,m=1,g=1,b=(o={point:function(t,e){var r=w([t,e]);this.stream.point(r[0],r[1])}},function(t){var e=new UI;for(var r in o)e[r]=o[r];return e.stream=t,e}),v=LP;function y(){return m=l*h,g=l*d,a=s=null,w}function w(r){var n=r[0]*m,i=r[1]*g;if(f){var a=i*t-n*e;n=n*t+i*e,i=a}return[n+c,i+u]}return w.invert=function(r){var n=r[0]-c,i=r[1]-u;if(f){var a=i*t+n*e;n=n*t-i*e,i=a}return[n/m,i/g]},w.stream=function(t){return a&&s===t?a:a=b(v(s=t))},w.postclip=function(t){return arguments.length?(v=t,p=r=n=i=null,y()):v},w.clipExtent=function(t){return arguments.length?(v=null==t?(p=r=n=i=null,LP):DP(p=+t[0][0],r=+t[0][1],n=+t[1][0],i=+t[1][1]),y()):null==p?null:[[p,r],[n,i]]},w.scale=function(t){return arguments.length?(l=+t,y()):l},w.translate=function(t){return arguments.length?(c=+t[0],u=+t[1],y()):[c,u]},w.angle=function(r){return arguments.length?(e=$P(f=r%360*wP),t=kP(f),y()):f*yP},w.reflectX=function(t){return arguments.length?(h=t?-1:1,y()):h<0},w.reflectY=function(t){return arguments.length?(d=t?-1:1,y()):d<0},w.fitExtent=function(t,e){return HI(w,t,e)},w.fitSize=function(t,e){return function(t,e,r){return HI(t,[[0,0],e],r)}(w,t,e)},w.fitWidth=function(t,e){return function(t,e,r){return LI(t,function(r){var n=+e,i=n/(r[1][0]-r[0][0]),a=(n-i*(r[1][0]+r[0][0]))/2,s=-i*r[0][1];t.scale(150*i).translate([a,s])},r)}(w,t,e)},w.fitHeight=function(t,e){return function(t,e,r){return LI(t,function(r){var n=+e,i=n/(r[1][1]-r[0][1]),a=-i*r[0][0],s=(n-i*(r[1][1]+r[0][1]))/2;t.scale(150*i).translate([a,s])},r)}(w,t,e)},w}function VI(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function WI(t){return+t}UI.prototype={constructor:UI,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var XI=[0,1];function YI(t){return t}function KI(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function ZI(t,e,r){var n=t[0],i=t[1],a=e[0],s=e[1];return i<n?(n=KI(i,n),a=r(s,a)):(n=KI(n,i),a=r(a,s)),function(t){return a(n(t))}}function GI(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),a=new Array(n),s=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<n;)i[s]=KI(t[s],t[s+1]),a[s]=r(e[s],e[s+1]);return function(e){var r=DT(t,e,1,n)-1;return a[r](i[r](e))}}function JI(){var t,e,r,n,i,a,s=XI,o=XI,l=NR,c=YI;function u(){var t=Math.min(s.length,o.length);return c!==YI&&(c=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(s[0],s[t-1])),n=t>2?GI:ZI,i=a=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(s.map(t),o,l)))(t(c(e)))}return h.invert=function(r){return c(e((a||(a=n(o,s.map(t),_R)))(r)))},h.domain=function(t){return arguments.length?(s=Array.from(t,WI),u()):s.slice()},h.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},h.rangeRound=function(t){return o=Array.from(t),l=CR,u()},h.clamp=function(t){return arguments.length?(c=!!t||YI,u()):c!==YI},h.interpolate=function(t){return arguments.length?(l=t,u()):l},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,u()}}function QI(t,e,r,n){var i,a=function(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?YT(e,t,r):YT(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}(t,e,r);switch((n=aP(null==n?",f":n)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(rP(e)/3)))-rP(Math.abs(t)))}(a,s))||(n.precision=i),dP(n,s);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,rP(e)-rP(t))+1}(a,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=function(t){return Math.max(0,-rP(Math.abs(t)))}(a))||(n.precision=i-2*("%"===n.type))}return hP(n)}function tF(){var t=JI()(YI,YI);return t.copy=function(){return e=t,tF().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},VI.apply(t,arguments),function(t){var e=t.domain;return t.ticks=function(t){var r=e();return XT(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return QI(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,a=e(),s=0,o=a.length-1,l=a[s],c=a[o],u=10;for(c<l&&(i=l,l=c,c=i,i=s,s=o,o=i);u-- >0;){if((i=YT(l,c,r))===n)return a[s]=l,a[o]=c,e(a);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}n=i}return t},t}(t)}function eF(t){return function(){return t}}function rF(t){this._context=t}function nF(t){return new rF(t)}function iF(t){return t[0]}function aF(t){return t[1]}function sF(t,e){var r=eF(!0),n=null,i=nF,a=null,s=function(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new UO(e)}(o);function o(o){var l,c,u,h=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,d=!1;for(null==n&&(a=i(u=s())),l=0;l<=h;++l)!(l<h&&r(c=o[l],l,o))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+t(c,l,o),+e(c,l,o));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?iF:eF(t),e="function"==typeof e?e:void 0===e?aF:eF(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:eF(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:eF(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:eF(!!t),o):r},o.curve=function(t){return arguments.length?(i=t,null!=n&&(a=i(n)),o):i},o.context=function(t){return arguments.length?(null==t?n=a=null:a=i(n=t),o):n},o}function oF(t,e,r){this.k=t,this.x=e,this.y=r}rF.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},oF.prototype={constructor:oF,scale:function(t){return 1===t?this:new oF(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new oF(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},oF.prototype;class lF extends CT{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=xR(t,"#ffffff")(.75),e.light50=xR(t,"#ffffff")(.5),e.light25=xR(t,"#ffffff")(.25),e.grey=t,e.dark25=xR(t,"#000000")(.25),e.dark50=xR(t,"#000000")(.5),e.dark75=xR(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,n=this.shadows.opacityPenumbra+this.shadows.opacityBoost,i=this.shadows.opacityAmbient+this.shadows.opacityBoost,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,l=this.shadows.mapUmbra[t],c=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${a}, ${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${s}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=lF.shadows,e=t.elevations.map(e=>hT`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?hT``:hT`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?hT``:hT`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?hT``:hT`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return hT`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return AM`
      :host {
        ---shadow-0: var(--shadow-0, ${_M(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${_M(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${_M(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${_M(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${_M(this.greys.white)});
        ---color-border: var(--color-border, ${_M(this.greys.light75)});
        ---color-text: var(--color-text, ${_M(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${_M(this.greys.white)});
        ---color-link: var(--color-link, ${_M(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${_M(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${_M(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${_M(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${_M(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${_M(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${_M(this.greys.dark75)});

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
    `}}var cF={h:"#4daf4a",m:"#ff7f00",fa:"#377eb8",cr:"#e41a1c",hr:"#ffff33",far:"#984ea3",acc:"#999999",d:"#f781bf",c:"#a65628",s:"#4545d0",present:"#f032e6",absent:"#10dbc9",correct:"#ffffff",error:"#000000",nr:"#cccccc"};class uF extends lF{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return cF}static get lights(){return Object.keys(uF.colors).reduce((t,e)=>(t[e]=xR(uF.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(uF.colors).reduce((t,e)=>(t[e]=xR(uF.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,AM`
        :host {
          ---color-h: var(--color-h, ${_M(this.colors.h)});
          ---color-m: var(--color-m, ${_M(this.colors.m)});
          ---color-fa: var(--color-fa, ${_M(this.colors.fa)});
          ---color-cr: var(--color-cr, ${_M(this.colors.cr)});
          ---color-hr: var(--color-hr, ${_M(this.colors.hr)});
          ---color-far: var(--color-far, ${_M(this.colors.far)});
          ---color-acc: var(--color-acc, ${_M(this.colors.acc)});
          ---color-d: var(--color-d, ${_M(this.colors.d)});
          ---color-c: var(--color-c, ${_M(this.colors.c)});
          ---color-s: var(--color-s, ${_M(this.colors.s)});
          ---color-present: var(--color-present, ${_M(this.colors.present)});
          ---color-absent: var(--color-absent, ${_M(this.colors.absent)});
          ---color-correct: var(--color-correct, ${_M(this.colors.correct)});
          ---color-error: var(--color-error, ${_M(this.colors.error)});
          ---color-nr: var(--color-nr, ${_M(this.colors.nr)});

          ---color-h-light: var(--color-h-light, ${_M(this.lights.h)});
          ---color-m-light: var(--color-m-light, ${_M(this.lights.m)});
          ---color-fa-light: var(--color-fa-light, ${_M(this.lights.fa)});
          ---color-cr-light: var(--color-cr-light, ${_M(this.lights.cr)});
          ---color-hr-light: var(--color-hr-light, ${_M(this.lights.hr)});
          ---color-far-light: var(--color-far-light, ${_M(this.lights.far)});
          ---color-acc-light: var(--color-acc-light, ${_M(this.lights.acc)});
          ---color-d-light: var(--color-d-light, ${_M(this.lights.d)});
          ---color-c-light: var(--color-c-light, ${_M(this.lights.c)});
          ---color-s-light: var(--color-s-light, ${_M(this.lights.s)});
          ---color-present-light: var(--color-present-light, ${_M(this.lights.present)});
          ---color-absent-light: var(--color-absent-light, ${_M(this.lights.absent)});
          ---color-correct-light: var(--color-correct-light, ${_M(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${_M(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${_M(this.lights.nr)});

          ---color-h-dark: var(--color-h-dark, ${_M(this.darks.h)});
          ---color-m-dark: var(--color-m-dark, ${_M(this.darks.m)});
          ---color-fa-dark: var(--color-fa-dark, ${_M(this.darks.fa)});
          ---color-cr-dark: var(--color-cr-dark, ${_M(this.darks.cr)});
          ---color-hr-dark: var(--color-hr-dark, ${_M(this.darks.hr)});
          ---color-far-dark: var(--color-far-dark, ${_M(this.darks.far)});
          ---color-acc-dark: var(--color-acc-dark, ${_M(this.darks.acc)});
          ---color-d-dark: var(--color-d-dark, ${_M(this.darks.d)});
          ---color-c-dark: var(--color-c-dark, ${_M(this.darks.c)});
          ---color-s-dark: var(--color-s-dark, ${_M(this.darks.s)});
          ---color-present-dark: var(--color-present-dark, ${_M(this.darks.present)});
          ---color-absent-dark: var(--color-absent-dark, ${_M(this.darks.absent)});
          ---color-correct-dark: var(--color-correct-dark, ${_M(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${_M(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${_M(this.darks.nr)});
        }
      `]}}customElements.define("decidables-button",class extends lF{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hF=t=>t??pT;customElements.define("decidables-slider",class extends lF{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${hF(this.rangeMin)} max=${hF(this.rangeMax)} step=${hF(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?uT`
            <div class="datalist">
              <div class="option">${hF(this.max)}</div>
              <div class="option">${hF(this.min)}</div>
            </div>
          `:uT``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${hF(this.min)} max=${hF(this.max)} step=${hF(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}});customElements.define("decidables-switch",class extends lF{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,AM`
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
        `]}render(){return uT`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}});customElements.define("decidables-toggle",class extends lF{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}});customElements.define("decidables-toggle-option",class extends lF{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}});customElements.define("detectable-control",class extends uF{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.duration=void 0,this.coherence=void 0,this.payoff=void 0,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color=void 0,this.zRoc=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}setPayoff(t){this.payoff=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-payoff",{detail:{payoff:this.payoff},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("detectable-control-color",{detail:{color:this.color},bubbles:!0}))}flipZRoc(t){this.zRoc=t.target.checked,this.dispatchEvent(new CustomEvent("detectable-control-z-roc",{detail:{zRoc:this.zRoc},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("detectable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("detectable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("detectable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <div class="holder">
        ${null!=this.trials?uT`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:uT``}
        ${null!=this.duration?uT`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:uT``}
        ${null!=this.coherence?uT`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:uT``}
        ${null!=this.payoff?uT`<decidables-slider class="payoff" min="0" max="100" step="1" .value=${this.payoff} @change=${this.setPayoff.bind(this)} @input=${this.setPayoff.bind(this)}>Payoff</decidables-slider>`:uT``}
        ${null!=this.color?uT`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="accuracy" ?checked=${"accuracy"===this.color}>Accuracy</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="stimulus" ?checked=${"stimulus"===this.color}>Stimulus</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="response" ?checked=${"response"===this.color}>Response</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:uT``}
        ${null!=this.zRoc?uT`
            <decidables-switch ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidables-switch>
          `:uT``}
        ${this.run||this.pause||this.reset?uT`
            <div class="buttons">
              ${this.run?uT`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:uT``}
              ${this.pause?uT`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:uT``}
              ${this.reset?uT`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:uT``}
            </div>
          `:uT``}
      </div>`}});customElements.define("detectable-response",class extends uF{static get properties(){return{feedback:{attribute:"feedback",type:String,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedbacks=["none","accuracy","outcome"],this.feedback="outcome",this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.hPayoff=0,this.mPayoff=0,this.crPayoff=0,this.faPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["present","absent"],this.signal=void 0,this.responses=["present","absent"],this.response=void 0,this.outcomes=["h","m","fa","cr","nr"],this.outcome=void 0,this.accuracies=["c","e","nr"],this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.c=0,this.e=0,this.nr=0}get trialPayoff(){switch(this.outcome){case"h":return this.hPayoff;case"m":return this.mPayoff;case"fa":return this.faPayoff;case"cr":return this.crPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.h*this.hPayoff+this.m*this.mPayoff+this.cr*this.crPayoff+this.fa*this.faPayoff+this.nr*this.nrPayoff}start(t,e){this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.nr+=1,this.accuracy="nr")}present(){this.responded("present")}absent(){this.responded("absent")}responded(t){this.state="feedback",this.response=t,"present"===this.signal&&"present"===this.response?(this.outcome="h",this.h+=1,this.accuracy="c",this.c+=1):"present"===this.signal&&"absent"===this.response?(this.outcome="m",this.m+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"present"===this.response?(this.outcome="fa",this.fa+=1,this.accuracy="e",this.e+=1):"absent"===this.signal&&"absent"===this.response&&(this.outcome="cr",this.cr+=1,this.accuracy="c",this.c+=1),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{trial:this.trialCount,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:this.nr,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.accuracy=void 0,this.h=0,this.m=0,this.cr=0,this.fa=0,this.nr=0,this.c=0,this.e=0}keydown(t){"waiting"===this.state&&("ArrowUp"===t.key?(this.responded("present"),t.preventDefault()):"ArrowDown"===t.key&&(this.responded("absent"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,AM`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return uT`
      <div class="holder">
        <div class="responses">
          <decidables-button name="present" class=${"feedback"===this.state&&"present"===this.response?"selected":"waiting"===this.state?"waiting":""} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.present.bind(this)}>Present</decidables-button>
          <decidables-button name="absent" class=${"feedback"===this.state&&"absent"===this.response?"selected":"waiting"===this.state?"waiting":""} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.absent.bind(this)}>Absent</decidables-button>
        </div>
        ${this.trial||"none"!==this.feedback||"total"===this.payoff?uT`
            <div class="feedbacks">
              ${this.trial?uT`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:uT``}
              ${"none"!==this.feedback?uT`
                  <div class=${`feedback ${"feedback"===this.state?"outcome"===this.feedback?this.outcome:this.accuracy:""}`}>
                    ${"feedback"===this.state?"outcome"===this.feedback?"h"===this.outcome?uT`<span class="outcome">Hit</span>`:"m"===this.outcome?uT`<span class="outcome">Miss</span>`:"fa"===this.outcome?uT`<span class="outcome">False<br>Alarm</span>`:"cr"===this.outcome?uT`<span class="outcome">Correct<br>Rejection</span>`:uT`<span class="outcome">No<br>Response</span>`:"c"===this.accuracy?uT`<span class="outcome">Correct</span>`:"e"===this.accuracy?uT`<span class="outcome">Error</span>`:uT`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?uT``:uT`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:uT``}
              ${"total"===this.payoff?uT`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:uT``}
            </div>`:uT``}
      </div>`}});customElements.define("decidables-spinner",class extends lF{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${hF(this.min)} max=${hF(this.max)} step=${hF(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});const dF={fromAttribute:t=>new Set(t.split(/\s+/)),toAttribute:t=>t.size?[...t].join(" "):null};var fF={exports:{}};fF.exports=function(){var t=function(t,e){var r=Array.prototype.concat,n=Array.prototype.slice,i=Object.prototype.toString;function a(e,r){var n=e>r?e:r;return t.pow(10,17-~~(t.log(n>0?n:-n)*t.LOG10E))}var s=Array.isArray||function(t){return"[object Array]"===i.call(t)};function o(t){return"[object Function]"===i.call(t)}function l(t){return"number"==typeof t&&t-t===0}function c(t){return r.apply([],t)}function u(){return new u._init(arguments)}function h(){return 0}function d(){return 1}function f(t,e){return t===e?1:0}u.fn=u.prototype,u._init=function(t){if(s(t[0]))if(s(t[0][0])){o(t[1])&&(t[0]=u.map(t[0],t[1]));for(var e=0;e<t[0].length;e++)this[e]=t[0][e];this.length=t[0].length}else this[0]=o(t[1])?u.map(t[0],t[1]):t[0],this.length=1;else if(l(t[0]))this[0]=u.seq.apply(null,t),this.length=1;else{if(t[0]instanceof u)return u(t[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:a,isArray:s,isFunction:o,isNumber:l,toVector:c},u._random_fn=t.random,u.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");u._random_fn=t},u.extend=function(t){var e,r;if(1===arguments.length){for(r in t)u[r]=t[r];return this}for(e=1;e<arguments.length;e++)for(r in arguments[e])t[r]=arguments[e][r];return t},u.rows=function(t){return t.length||1},u.cols=function(t){return t[0].length||1},u.dimensions=function(t){return{rows:u.rows(t),cols:u.cols(t)}},u.row=function(t,e){return s(e)?e.map(function(e){return u.row(t,e)}):t[e]},u.rowa=function(t,e){return u.row(t,e)},u.col=function(t,e){if(s(e)){var r=u.arange(t.length).map(function(){return new Array(e.length)});return e.forEach(function(e,n){u.arange(t.length).forEach(function(i){r[i][n]=t[i][e]})}),r}for(var n=new Array(t.length),i=0;i<t.length;i++)n[i]=[t[i][e]];return n},u.cola=function(t,e){return u.col(t,e).map(function(t){return t[0]})},u.diag=function(t){for(var e=u.rows(t),r=new Array(e),n=0;n<e;n++)r[n]=[t[n][n]];return r},u.antidiag=function(t){for(var e=u.rows(t)-1,r=new Array(e),n=0;e>=0;e--,n++)r[n]=[t[n][e]];return r},u.transpose=function(t){var e,r,n,i,a,o=[];for(s(t[0])||(t=[t]),r=t.length,n=t[0].length,a=0;a<n;a++){for(e=new Array(r),i=0;i<r;i++)e[i]=t[i][a];o.push(e)}return 1===o.length?o[0]:o},u.map=function(t,e,r){var n,i,a,o,l;for(s(t[0])||(t=[t]),i=t.length,a=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(a)),l=0;l<a;l++)o[n][l]=e(t[n][l],n,l);return 1===o.length?o[0]:o},u.cumreduce=function(t,e,r){var n,i,a,o,l;for(s(t[0])||(t=[t]),i=t.length,a=t[0].length,o=r?t:new Array(i),n=0;n<i;n++)for(o[n]||(o[n]=new Array(a)),a>0&&(o[n][0]=t[n][0]),l=1;l<a;l++)o[n][l]=e(o[n][l-1],t[n][l]);return 1===o.length?o[0]:o},u.alter=function(t,e){return u.map(t,e,!0)},u.create=function(t,e,r){var n,i,a=new Array(t);for(o(e)&&(r=e,e=t),n=0;n<t;n++)for(a[n]=new Array(e),i=0;i<e;i++)a[n][i]=r(n,i);return a},u.zeros=function(t,e){return l(e)||(e=t),u.create(t,e,h)},u.ones=function(t,e){return l(e)||(e=t),u.create(t,e,d)},u.rand=function(t,e){return l(e)||(e=t),u.create(t,e,u._random_fn)},u.identity=function(t,e){return l(e)||(e=t),u.create(t,e,f)},u.symmetric=function(t){var e,r,n=t.length;if(t.length!==t[0].length)return!1;for(e=0;e<n;e++)for(r=0;r<n;r++)if(t[r][e]!==t[e][r])return!1;return!0},u.clear=function(t){return u.alter(t,h)},u.seq=function(t,e,r,n){o(n)||(n=!1);var i,s=[],l=a(t,e),c=(e*l-t*l)/((r-1)*l),u=t;for(i=0;u<=e&&i<r;u=(t*l+c*l*++i)/l)s.push(n?n(u,i):u);return s},u.arange=function(t,r,n){var i,a=[];if(n=n||1,r===e&&(r=t,t=0),t===r||0===n)return[];if(t<r&&n<0)return[];if(t>r&&n>0)return[];if(n>0)for(i=t;i<r;i+=n)a.push(i);else for(i=t;i>r;i+=n)a.push(i);return a},u.slice=function(){function t(t,r,n,i){var a,s=[],o=t.length;if(r===e&&n===e&&i===e)return u.copy(t);if(i=i||1,(r=(r=r||0)>=0?r:o+r)===(n=(n=n||t.length)>=0?n:o+n)||0===i)return[];if(r<n&&i<0)return[];if(r>n&&i>0)return[];if(i>0)for(a=r;a<n;a+=i)s.push(t[a]);else for(a=r;a>n;a+=i)s.push(t[a]);return s}function r(e,r){var n,i;return l((r=r||{}).row)?l(r.col)?e[r.row][r.col]:t(u.rowa(e,r.row),(n=r.col||{}).start,n.end,n.step):l(r.col)?t(u.cola(e,r.col),(i=r.row||{}).start,i.end,i.step):(i=r.row||{},n=r.col||{},t(e,i.start,i.end,i.step).map(function(e){return t(e,n.start,n.end,n.step)}))}return r}(),u.sliceAssign=function(r,n,i){var a,s;if(l(n.row)){if(l(n.col))return r[n.row][n.col]=i;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,a=u.arange(n.col.start,t.min(r.length,n.col.end),n.col.step);var o=n.row;return a.forEach(function(t,e){r[o][t]=i[e]}),r}if(l(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,s=u.arange(n.row.start,t.min(r[0].length,n.row.end),n.row.step);var c=n.col;return s.forEach(function(t,e){r[t][c]=i[e]}),r}return i[0].length===e&&(i=[i]),n.row.start=n.row.start||0,n.row.end=n.row.end||r.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||r[0].length,n.col.step=n.col.step||1,s=u.arange(n.row.start,t.min(r.length,n.row.end),n.row.step),a=u.arange(n.col.start,t.min(r[0].length,n.col.end),n.col.step),s.forEach(function(t,e){a.forEach(function(n,a){r[t][n]=i[e][a]})}),r},u.diagonal=function(t){var e=u.zeros(t.length,t.length);return t.forEach(function(t,r){e[r][r]=t}),e},u.copy=function(t){return t.map(function(t){return l(t)?t:t.map(function(t){return t})})};var p=u.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},p.map=function(t,e){return u(u.map(this,t,e))},p.cumreduce=function(t,e){return u(u.cumreduce(this,t,e))},p.alter=function(t){return u.alter(this,t),this},function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e){var r,n=this;return e?(setTimeout(function(){e.call(n,p[t].call(n))}),this):(r=u[t](this),s(r)?u(r):r)}})(t[e])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(e,r){var n=this;return r?(setTimeout(function(){r.call(n,p[t].call(n,e))}),this):u(u[t](this,e))}})(t[e])}("row col".split(" ")),function(t){for(var e=0;e<t.length;e++)(function(t){p[t]=function(){return u(u[t].apply(null,arguments))}})(t[e])}("create zeros ones rand identity".split(" ")),u}(Math);return function(t,e){var r=t.utils.isFunction;function n(t,e){return t-e}function i(t,r,n){return e.max(r,e.min(t,n))}t.sum=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.sumsqrd=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r]*t[r];return e},t.sumsqerr=function(e){for(var r,n=t.mean(e),i=0,a=e.length;--a>=0;)i+=(r=e[a]-n)*r;return i},t.sumrow=function(t){for(var e=0,r=t.length;--r>=0;)e+=t[r];return e},t.product=function(t){for(var e=1,r=t.length;--r>=0;)e*=t[r];return e},t.min=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]<e&&(e=t[r]);return e},t.max=function(t){for(var e=t[0],r=0;++r<t.length;)t[r]>e&&(e=t[r]);return e},t.unique=function(t){for(var e={},r=[],n=0;n<t.length;n++)e[t[n]]||(e[t[n]]=!0,r.push(t[n]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(r){var n=r.map(e.log),i=t.mean(n);return e.exp(i)},t.median=function(t){var e=t.length,r=t.slice().sort(n);return 1&e?r[e/2|0]:(r[e/2-1]+r[e/2])/2},t.cumsum=function(e){return t.cumreduce(e,function(t,e){return t+e})},t.cumprod=function(e){return t.cumreduce(e,function(t,e){return t*e})},t.diff=function(t){var e,r=[],n=t.length;for(e=1;e<n;e++)r.push(t[e]-t[e-1]);return r},t.rank=function(t){var e,r=[],i={};for(e=0;e<t.length;e++)i[l=t[e]]?i[l]++:(i[l]=1,r.push(l));var a=r.sort(n),s={},o=1;for(e=0;e<a.length;e++){var l,c=i[l=a[e]],u=(o+(o+c-1))/2;s[l]=u,o+=c}return t.map(function(t){return s[t]})},t.mode=function(t){var e,r=t.length,i=t.slice().sort(n),a=1,s=0,o=0,l=[];for(e=0;e<r;e++)i[e]===i[e+1]?a++:(a>s?(l=[i[e]],s=a,o=0):a===s&&(l.push(i[e]),o++),a=1);return 0===o?l[0]:l},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,r){return t.sumsqerr(e)/(e.length-(r?1:0))},t.pooledvariance=function(e){var r=e.reduce(function(e,r){return e+t.sumsqerr(r)},0),n=e.reduce(function(t,e){return t+e.length},0);return r/(n-e.length)},t.deviation=function(e){for(var r=t.mean(e),n=e.length,i=new Array(n),a=0;a<n;a++)i[a]=e[a]-r;return i},t.stdev=function(r,n){return e.sqrt(t.variance(r,n))},t.pooledstdev=function(r){return e.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var n=t.mean(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.mean(i)},t.meddev=function(r){for(var n=t.median(r),i=[],a=r.length-1;a>=0;a--)i.push(e.abs(r[a]-n));return t.median(i)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(t){var r=t.length,i=t.slice().sort(n);return[i[e.round(r/4)-1],i[e.round(r/2)-1],i[e.round(3*r/4)-1]]},t.quantiles=function(t,r,a,s){var o,l,c,u,h,d=t.slice().sort(n),f=[r.length],p=t.length;for(void 0===a&&(a=3/8),void 0===s&&(s=3/8),o=0;o<r.length;o++)c=p*(l=r[o])+(a+l*(1-a-s)),u=e.floor(i(c,1,p-1)),h=i(c-u,0,1),f[o]=(1-h)*d[u-1]+h*d[u];return f},t.percentile=function(t,e,r){var i=t.slice().sort(n),a=e*(i.length+(r?1:-1))+(r?0:1),s=parseInt(a),o=a-s;return s+1<i.length?i[s-1]+o*(i[s]-i[s-1]):i[s-1]},t.percentileOfScore=function(t,e,r){var n,i,a=0,s=t.length,o=!1;for("strict"===r&&(o=!0),i=0;i<s;i++)n=t[i],(o&&n<e||!o&&n<=e)&&a++;return a/s},t.histogram=function(r,n){n=n||4;var i,a=t.min(r),s=(t.max(r)-a)/n,o=r.length,l=[];for(i=0;i<n;i++)l[i]=0;for(i=0;i<o;i++)l[e.min(e.floor((r[i]-a)/s),n-1)]+=1;return l},t.covariance=function(e,r){var n,i=t.mean(e),a=t.mean(r),s=e.length,o=new Array(s);for(n=0;n<s;n++)o[n]=(e[n]-i)*(r[n]-a);return t.sum(o)/(s-1)},t.corrcoeff=function(e,r){return t.covariance(e,r)/t.stdev(e,1)/t.stdev(r,1)},t.spearmancoeff=function(e,r){return e=t.rank(e),r=t.rank(r),t.corrcoeff(e,r)},t.stanMoment=function(r,n){for(var i=t.mean(r),a=t.stdev(r),s=r.length,o=0,l=0;l<s;l++)o+=e.pow((r[l]-i)/a,n);return o/r.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var a=t.prototype;!function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(n,i){var s=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,a[e].call(l,n))}),this;if(this.length>1){for(l=!0===n?this:this.transpose();o<l.length;o++)s[o]=t[e](l[o]);return s}return t[e](this[0],n)}})(e[n])}("cumsum cumprod".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(n,i){var s=[],o=0,l=this;if(r(n)&&(i=n,n=!1),i)return setTimeout(function(){i.call(l,a[e].call(l,n))}),this;if(this.length>1){for("sumrow"!==e&&(l=!0===n?this:this.transpose());o<l.length;o++)s[o]=t[e](l[o]);return!0===n?t[e](t.utils.toVector(s)):s}return t[e](this[0],n)}})(e[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(e){for(var n=0;n<e.length;n++)(function(e){a[e]=function(){var n,i=[],s=0,o=this,l=Array.prototype.slice.call(arguments);if(r(l[l.length-1])){n=l[l.length-1];var c=l.slice(0,l.length-1);return setTimeout(function(){n.call(o,a[e].apply(o,c))}),this}n=void 0;var u=function(r){return t[e].apply(o,[r].concat(l))};if(this.length>1){for(o=o.transpose();s<o.length;s++)i[s]=u(o[s]);return i}return u(this[0])}})(e[n])}("quantiles percentileOfScore".split(" "))}(t,Math),function(t,e){t.gammaln=function(t){var r,n,i,a=0,s=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],o=1.000000000190015;for(i=(n=r=t)+5.5,i-=(r+.5)*e.log(i);a<6;a++)o+=s[a]/++n;return e.log(2.5066282746310007*o/r)-i},t.loggam=function(t){var r,n,i,a,s,o,l,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,l=0,1==t||2==t)return 0;for(t<=7&&(r=t+(l=e.floor(7-t))),n=1/(r*r),i=2*e.PI,s=c[9],o=8;o>=0;o--)s*=n,s+=c[o];if(a=s/r+.5*e.log(i)+(r-.5)*e.log(r)-r,t<=7)for(o=1;o<=l;o++)a-=e.log(r-1),r-=1;return a},t.gammafn=function(t){var r,n,i,a,s=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],o=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,c=0,u=0,h=0,d=t;if(t>171.6243769536076)return 1/0;if(d<=0){if(!(a=d%1+36e-17))return 1/0;l=(1&d?-1:1)*e.PI/e.sin(e.PI*a),d=1-d}for(i=d,n=d<1?d++:(d-=c=(0|d)-1)-1,r=0;r<8;++r)h=(h+s[r])*n,u=u*n+o[r];if(a=h/u+1,i<d)a/=i;else if(i>d)for(r=0;r<c;++r)a*=d,d++;return l&&(a=l/a),a},t.gammap=function(e,r){return t.lowRegGamma(e,r)*t.gammafn(e)},t.lowRegGamma=function(r,n){var i,a=t.gammaln(r),s=r,o=1/r,l=o,c=n+1-r,u=1/1e-30,h=1/c,d=h,f=1,p=-~(8.5*e.log(r>=1?r:1/r)+.4*r+17);if(n<0||r<=0)return NaN;if(n<r+1){for(;f<=p;f++)o+=l*=n/++s;return o*e.exp(-n+r*e.log(n)-a)}for(;f<=p;f++)d*=(h=1/(h=(i=-f*(f-r))*h+(c+=2)))*(u=c+i/u);return 1-d*e.exp(-n+r*e.log(n)-a)},t.factorialln=function(e){return e<0?NaN:t.gammaln(e+1)},t.factorial=function(e){return e<0?NaN:t.gammafn(e+1)},t.combination=function(r,n){return r>170||n>170?e.exp(t.combinationln(r,n)):t.factorial(r)/t.factorial(n)/t.factorial(r-n)},t.combinationln=function(e,r){return t.factorialln(e)-t.factorialln(r)-t.factorialln(e-r)},t.permutation=function(e,r){return t.factorial(e)/t.factorial(e-r)},t.betafn=function(r,n){if(!(r<=0||n<=0))return r+n>170?e.exp(t.betaln(r,n)):t.gammafn(r)*t.gammafn(n)/t.gammafn(r+n)},t.betaln=function(e,r){return t.gammaln(e)+t.gammaln(r)-t.gammaln(e+r)},t.betacf=function(t,r,n){var i,a,s,o,l=1e-30,c=1,u=r+n,h=r+1,d=r-1,f=1,p=1-u*t/h;for(e.abs(p)<l&&(p=l),o=p=1/p;c<=100&&(p=1+(a=c*(n-c)*t/((d+(i=2*c))*(r+i)))*p,e.abs(p)<l&&(p=l),f=1+a/f,e.abs(f)<l&&(f=l),o*=(p=1/p)*f,p=1+(a=-(r+c)*(u+c)*t/((r+i)*(h+i)))*p,e.abs(p)<l&&(p=l),f=1+a/f,e.abs(f)<l&&(f=l),o*=s=(p=1/p)*f,!(e.abs(s-1)<3e-7));c++);return o},t.gammapinv=function(r,n){var i,a,s,o,l,c,u=0,h=n-1,d=1e-8,f=t.gammaln(n);if(r>=1)return e.max(100,n+100*e.sqrt(n));if(r<=0)return 0;for(n>1?(l=e.log(h),c=e.exp(h*(l-1)-f),o=r<.5?r:1-r,i=(2.30753+.27061*(a=e.sqrt(-2*e.log(o))))/(1+a*(.99229+.04481*a))-a,r<.5&&(i=-i),i=e.max(.001,n*e.pow(1-1/(9*n)-i/(3*e.sqrt(n)),3))):i=r<(a=1-n*(.253+.12*n))?e.pow(r/a,1/n):1-e.log(1-(r-a)/(1-a));u<12;u++){if(i<=0)return 0;if((i-=a=(s=(t.lowRegGamma(n,i)-r)/(a=n>1?c*e.exp(-(i-h)+h*(e.log(i)-l)):e.exp(-i+h*e.log(i)-f)))/(1-.5*e.min(1,s*((n-1)/i-1))))<=0&&(i=.5*(i+a)),e.abs(a)<d*i)break}return i},t.erf=function(t){var r,n,i,a,s=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],o=s.length-1,l=!1,c=0,u=0;for(t<0&&(t=-t,l=!0),n=4*(r=2/(2+t))-2;o>0;o--)i=c,c=n*c-u+s[o],u=i;return a=r*e.exp(-t*t+.5*(s[0]+n*c)-u),l?a-1:1-a},t.erfc=function(e){return 1-t.erf(e)},t.erfcinv=function(r){var n,i,a,s,o=0;if(r>=2)return-100;if(r<=0)return 100;for(s=r<1?r:2-r,n=-.70711*((2.30753+.27061*(a=e.sqrt(-2*e.log(s/2))))/(1+a*(.99229+.04481*a))-a);o<2;o++)n+=(i=t.erfc(n)-s)/(1.1283791670955126*e.exp(-n*n)-n*i);return r<1?n:-n},t.ibetainv=function(r,n,i){var a,s,o,l,c,u,h,d,f,p,m=1e-8,g=n-1,b=i-1,v=0;if(r<=0)return 0;if(r>=1)return 1;for(n>=1&&i>=1?(o=r<.5?r:1-r,u=(2.30753+.27061*(l=e.sqrt(-2*e.log(o))))/(1+l*(.99229+.04481*l))-l,r<.5&&(u=-u),h=(u*u-3)/6,d=2/(1/(2*n-1)+1/(2*i-1)),f=u*e.sqrt(h+d)/d-(1/(2*i-1)-1/(2*n-1))*(h+5/6-2/(3*d)),u=n/(n+i*e.exp(2*f))):(a=e.log(n/(n+i)),s=e.log(i/(n+i)),u=r<(l=e.exp(n*a)/n)/(f=l+(c=e.exp(i*s)/i))?e.pow(n*f*r,1/n):1-e.pow(i*f*(1-r),1/i)),p=-t.gammaln(n)-t.gammaln(i)+t.gammaln(n+i);v<10;v++){if(0===u||1===u)return u;if((u-=l=(c=(t.ibeta(u,n,i)-r)/(l=e.exp(g*e.log(u)+b*e.log(1-u)+p)))/(1-.5*e.min(1,c*(g/u-b/(1-u)))))<=0&&(u=.5*(u+l)),u>=1&&(u=.5*(u+l+1)),e.abs(l)<m*u&&v>0)break}return u},t.ibeta=function(r,n,i){var a=0===r||1===r?0:e.exp(t.gammaln(n+i)-t.gammaln(n)-t.gammaln(i)+n*e.log(r)+i*e.log(1-r));return!(r<0||r>1)&&(r<(n+1)/(n+i+2)?a*t.betacf(r,n,i)/n:1-a*t.betacf(1-r,i,n)/i)},t.randn=function(r,n){var i,a,s,o,l;if(n||(n=r),r)return t.create(r,n,function(){return t.randn()});do{i=t._random_fn(),a=1.7156*(t._random_fn()-.5),l=(s=i-.449871)*s+(o=e.abs(a)+.386595)*(.196*o-.25472*s)}while(l>.27597&&(l>.27846||a*a>-4*e.log(i)*i*i));return a/i},t.randg=function(r,n,i){var a,s,o,l,c,u,h=r;if(i||(i=n),r||(r=1),n)return(u=t.zeros(n,i)).alter(function(){return t.randg(r)}),u;r<1&&(r+=1),a=r-1/3,s=1/e.sqrt(9*a);do{do{l=1+s*(c=t.randn())}while(l<=0);l*=l*l,o=t._random_fn()}while(o>1-.331*e.pow(c,4)&&e.log(o)>.5*c*c+a*(1-l+e.log(l)));if(r==h)return a*l;do{o=t._random_fn()}while(0===o);return e.pow(o,1/h)*a*l},function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t.map(this,function(r){return t[e](r)}))}})(e[r])}("gammaln gammafn factorial factorialln".split(" ")),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(){return t(t[e].apply(null,arguments))}})(e[r])}("randn".split(" "))}(t,Math),function(t,e){function r(t,r,n,i){for(var a,s=0,o=1,l=1,c=1,u=0,h=0;e.abs((l-h)/l)>i;)h=l,o=c+(a=-(r+u)*(r+n+u)*t/(r+2*u)/(r+2*u+1))*o,l=(s=l+a*s)+(a=(u+=1)*(n-u)*t/(r+2*u-1)/(r+2*u))*l,s/=c=o+a*c,o/=c,l/=c,c=1;return l/r}function n(t){return t/e.abs(t)}function i(r,n,i){var a=12,s=6,o=-30,l=-50,c=60,u=8,h=3,d=2,f=3,p=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],m=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],g=.5*r;if(g>=u)return 1;var b,v=2*t.normal.cdf(g,0,1,1,0)-1;v=v>=e.exp(l/i)?e.pow(v,i):0;for(var y=g,w=(u-g)/(b=r>h?d:f),x=y+w,k=0,$=i-1,S=1;S<=b;S++){for(var _=0,A=.5*(x+y),E=.5*(x-y),M=1;M<=a;M++){var T,N=A+E*(s<M?p[(T=a-M+1)-1]:-p[(T=M)-1]),C=N*N;if(C>c)break;var R=2*t.normal.cdf(N,0,1,1,0)*.5-2*t.normal.cdf(N,r,1,1,0)*.5;R>=e.exp(o/$)&&(_+=R=m[T-1]*e.exp(-.5*C)*e.pow(R,$))}k+=_*=2*E*i/e.sqrt(2*e.PI),y=x,x+=w}return(v+=k)<=e.exp(o/n)?0:(v=e.pow(v,n))>=1?1:v}function a(t,r,n){var i=.322232421088,a=.099348462606,s=-1,o=.588581570495,l=-.342242088547,c=.531103462366,u=-.204231210125,h=.10353775285,d=-453642210148e-16,f=.0038560700634,p=.8832,m=.2368,g=1.208,b=1.4142,v=120,y=.5-.5*t,w=e.sqrt(e.log(1/(y*y))),x=w+((((w*d+u)*w+l)*w+s)*w+i)/((((w*f+h)*w+c)*w+o)*w+a);n<v&&(x+=(x*x*x+x)/n/4);var k=p-m*x;return n<v&&(k+=-1.214/n+g*x/n),x*(k*e.log(r-1)+b)}!function(e){for(var r=0;r<e.length;r++)(function(e){t[e]=function t(e,r,n){return this instanceof t?(this._a=e,this._b=r,this._c=n,this):new t(e,r,n)},t.fn[e]=function(r,n,i){var a=t[e](r,n,i);return a.data=this,a},t[e].prototype.sample=function(r){var n=this._a,i=this._b,a=this._c;return r?t.alter(r,function(){return t[e].sample(n,i,a)}):t[e].sample(n,i,a)},function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(n){var i=this._a,a=this._b,s=this._c;return n||0===n||(n=this.data),"number"!=typeof n?t.fn.map.call(n,function(n){return t[e][r](n,i,a,s)}):t[e][r](n,i,a,s)}})(r[n])}("pdf cdf inv".split(" ")),function(r){for(var n=0;n<r.length;n++)(function(r){t[e].prototype[r]=function(){return t[e][r](this._a,this._b,this._c)}})(r[n])}("mean median mode variance".split(" "))})(e[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,n,i){return r>1||r<0?0:1==n&&1==i?1:n<512&&i<512?e.pow(r,n-1)*e.pow(1-r,i-1)/t.betafn(n,i):e.exp((n-1)*e.log(r)+(i-1)*e.log(1-r)-t.betaln(n,i))},cdf:function(e,r,n){return e>1||e<0?1*(e>1):t.ibeta(e,r,n)},inv:function(e,r,n){return t.ibetainv(e,r,n)},mean:function(t,e){return t/(t+e)},median:function(e,r){return t.ibetainv(.5,e,r)},mode:function(t,e){return(t-1)/(t+e-2)},sample:function(e,r){var n=t.randg(e);return n/(n+t.randg(r))},variance:function(t,r){return t*r/(e.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,n,i){var a;return r<0?0:n<=2?0===r&&n<2?1/0:0===r&&2===n?1:1/t.betafn(n/2,i/2)*e.pow(n/i,n/2)*e.pow(r,n/2-1)*e.pow(1+n/i*r,-(n+i)/2):(a=n*r/(i+r*n),n*(i/(i+r*n))/2*t.binomial.pdf((n-2)/2,(n+i-2)/2,a))},cdf:function(e,r,n){return e<0?0:t.ibeta(r*e/(r*e+n),r/2,n/2)},inv:function(e,r,n){return n/(r*(1/t.ibetainv(e,r/2,n/2)-1))},mean:function(t,e){return e>2?e/(e-2):void 0},mode:function(t,e){return t>2?e*(t-2)/(t*(e+2)):void 0},sample:function(e,r){return 2*t.randg(e/2)/e/(2*t.randg(r/2)/r)},variance:function(t,e){if(!(e<=4))return 2*e*e*(t+e-2)/(t*(e-2)*(e-2)*(e-4))}}),t.extend(t.cauchy,{pdf:function(t,r,n){return n<0?0:n/(e.pow(t-r,2)+e.pow(n,2))/e.PI},cdf:function(t,r,n){return e.atan((t-r)/n)/e.PI+.5},inv:function(t,r,n){return r+n*e.tan(e.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,n){return t.randn()*e.sqrt(1/(2*t.randg(.5)))*n+r}}),t.extend(t.chisquare,{pdf:function(r,n){return r<0?0:0===r&&2===n?.5:e.exp((n/2-1)*e.log(r)-r/2-n/2*e.log(2)-t.gammaln(n/2))},cdf:function(e,r){return e<0?0:t.lowRegGamma(r/2,e/2)},inv:function(e,r){return 2*t.gammapinv(e,.5*r)},mean:function(t){return t},median:function(t){return t*e.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(e){return 2*t.randg(e/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*e.exp(-r*t)},cdf:function(t,r){return t<0?0:1-e.exp(-r*t)},inv:function(t,r){return-e.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*e.log(2)},mode:function(){return 0},sample:function(r){return-1/r*e.log(t._random_fn())},variance:function(t){return e.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,n,i){return r<0?0:0===r&&1===n?1/i:e.exp((n-1)*e.log(r)-r/i-t.gammaln(n)-n*e.log(i))},cdf:function(e,r,n){return e<0?0:t.lowRegGamma(r,e/n)},inv:function(e,r,n){return t.gammapinv(e,r)*n},mean:function(t,e){return t*e},mode:function(t,e){if(t>1)return(t-1)*e},sample:function(e,r){return t.randg(e)*r},variance:function(t,e){return t*e*e}}),t.extend(t.invgamma,{pdf:function(r,n,i){return r<=0?0:e.exp(-(n+1)*e.log(r)-i/r-t.gammaln(n)+n*e.log(i))},cdf:function(e,r,n){return e<=0?0:1-t.lowRegGamma(r,n/e)},inv:function(e,r,n){return n/t.gammapinv(1-e,r)},mean:function(t,e){return t>1?e/(t-1):void 0},mode:function(t,e){return e/(t+1)},sample:function(e,r){return r/t.randg(e)},variance:function(t,e){if(!(t<=2))return e*e/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,n){return 0===t&&1===r?n:1===t&&1===n?r:e.exp(e.log(r)+e.log(n)+(r-1)*e.log(t)+(n-1)*e.log(1-e.pow(t,r)))},cdf:function(t,r,n){return t<0?0:t>1?1:1-e.pow(1-e.pow(t,r),n)},inv:function(t,r,n){return e.pow(1-e.pow(1-t,1/n),1/r)},mean:function(e,r){return r*t.gammafn(1+1/e)*t.gammafn(r)/t.gammafn(1+1/e+r)},median:function(t,r){return e.pow(1-e.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return e.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,n){return t<=0?0:e.exp(-e.log(t)-.5*e.log(2*e.PI)-e.log(n)-e.pow(e.log(t)-r,2)/(2*n*n))},cdf:function(r,n,i){return r<0?0:.5+.5*t.erf((e.log(r)-n)/e.sqrt(2*i*i))},inv:function(r,n,i){return e.exp(-1.4142135623730951*i*t.erfcinv(2*r)+n)},mean:function(t,r){return e.exp(t+r*r/2)},median:function(t){return e.exp(t)},mode:function(t,r){return e.exp(t-r*r)},sample:function(r,n){return e.exp(t.randn()*n+r)},variance:function(t,r){return(e.exp(r*r)-1)*e.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,n,i){var a=1e-14;return e.abs(i)<a?t.studentt.pdf(r,n):e.abs(r)<a?e.exp(t.gammaln((n+1)/2)-i*i/2-.5*e.log(e.PI*n)-t.gammaln(n/2)):n/r*(t.noncentralt.cdf(r*e.sqrt(1+2/n),n+2,i)-t.noncentralt.cdf(r,n,i))},cdf:function(r,n,i){var a=1e-14,s=200;if(e.abs(i)<a)return t.studentt.cdf(r,n);var o=!1;r<0&&(o=!0,i=-i);for(var l=t.normal.cdf(-i,0,1),c=a+1,u=c,h=r*r/(r*r+n),d=0,f=e.exp(-i*i/2),p=e.exp(-i*i/2-.5*e.log(2)-t.gammaln(1.5))*i;d<s||u>a||c>a;)u=c,d>0&&(f*=i*i/(2*d),p*=i*i/(2*(d+.5))),l+=.5*(c=f*t.beta.cdf(h,d+.5,n/2)+p*t.beta.cdf(h,d+1,n/2)),d++;return o?1-l:l}}),t.extend(t.normal,{pdf:function(t,r,n){return e.exp(-.5*e.log(2*e.PI)-e.log(n)-e.pow(t-r,2)/(2*n*n))},cdf:function(r,n,i){return.5*(1+t.erf((r-n)/e.sqrt(2*i*i)))},inv:function(e,r,n){return-1.4142135623730951*n*t.erfcinv(2*e)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(e,r){return t.randn()*r+e},variance:function(t,e){return e*e}}),t.extend(t.pareto,{pdf:function(t,r,n){return t<r?0:n*e.pow(r,n)/e.pow(t,n+1)},cdf:function(t,r,n){return t<r?0:1-e.pow(r/t,n)},inv:function(t,r,n){return r/e.pow(1-t,1/n)},mean:function(t,r){if(!(r<=1))return r*e.pow(t,r)/(r-1)},median:function(t,r){return t*(r*e.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(e.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,n){return n=n>1e100?1e100:n,1/(e.sqrt(n)*t.betafn(.5,n/2))*e.pow(1+r*r/n,-(n+1)/2)},cdf:function(r,n){var i=n/2;return t.ibeta((r+e.sqrt(r*r+n))/(2*e.sqrt(r*r+n)),i,i)},inv:function(r,n){var i=t.ibetainv(2*e.min(r,1-r),.5*n,.5);return i=e.sqrt(n*(1-i)/i),r>.5?i:-i},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*e.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,n){return t<0||r<0||n<0?0:n/r*e.pow(t/r,n-1)*e.exp(-e.pow(t/r,n))},cdf:function(t,r,n){return t<0?0:1-e.exp(-e.pow(t/r,n))},inv:function(t,r,n){return r*e.pow(-e.log(1-t),1/n)},mean:function(e,r){return e*t.gammafn(1+1/r)},median:function(t,r){return t*e.pow(e.log(2),1/r)},mode:function(t,r){return r<=1?0:t*e.pow((r-1)/r,1/r)},sample:function(r,n){return r*e.pow(-e.log(t._random_fn()),1/n)},variance:function(r,n){return r*r*t.gammafn(1+2/n)-e.pow(t.weibull.mean(r,n),2)}}),t.extend(t.uniform,{pdf:function(t,e,r){return t<e||t>r?0:1/(r-e)},cdf:function(t,e,r){return t<e?0:t<r?(t-e)/(r-e):1},inv:function(t,e,r){return e+t*(r-e)},mean:function(t,e){return.5*(t+e)},median:function(e,r){return t.mean(e,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,r){return e/2+r/2+(r/2-e/2)*(2*t._random_fn()-1)},variance:function(t,r){return e.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,n,i){return 0===i||1===i?n*i===r?1:0:t.combination(n,r)*e.pow(i,r)*e.pow(1-i,n-r)},cdf:function(n,i,a){var s,o=1e-10;if(n<0)return 0;if(n>=i)return 1;if(a<0||a>1||i<=0)return NaN;var l=a,c=(n=e.floor(n))+1,u=i-n,h=c+u,d=e.exp(t.gammaln(h)-t.gammaln(u)-t.gammaln(c)+c*e.log(l)+u*e.log(1-l));return s=l<(c+1)/(h+2)?d*r(l,c,u,o):1-d*r(1-l,u,c,o),e.round(1/o*(1-s))/(1/o)}}),t.extend(t.negbin,{pdf:function(r,n,i){return r===r>>>0&&(r<0?0:t.combination(r+n-1,n-1)*e.pow(1-i,r)*e.pow(i,n))},cdf:function(e,r,n){var i=0,a=0;if(e<0)return 0;for(;a<=e;a++)i+=t.negbin.pdf(a,r,n);return i}}),t.extend(t.hypgeom,{pdf:function(r,n,i,a){if(r!=r|0)return!1;if(r<0||r<i-(n-a))return 0;if(r>a||r>i)return 0;if(2*i>n)return 2*a>n?t.hypgeom.pdf(n-i-a+r,n,n-i,n-a):t.hypgeom.pdf(a-r,n,n-i,a);if(2*a>n)return t.hypgeom.pdf(i-r,n,i,n-a);if(i<a)return t.hypgeom.pdf(r,n,a,i);for(var s=1,o=0,l=0;l<r;l++){for(;s>1&&o<a;)s*=1-i/(n-o),o++;s*=(a-l)*(i-l)/((l+1)*(n-i-a+l+1))}for(;o<a;o++)s*=1-i/(n-o);return e.min(1,e.max(0,s))},cdf:function(r,n,i,a){if(r<0||r<i-(n-a))return 0;if(r>=a||r>=i)return 1;if(2*i>n)return 2*a>n?t.hypgeom.cdf(n-i-a+r,n,n-i,n-a):1-t.hypgeom.cdf(a-r-1,n,n-i,a);if(2*a>n)return 1-t.hypgeom.cdf(i-r-1,n,i,n-a);if(i<a)return t.hypgeom.cdf(r,n,a,i);for(var s=1,o=1,l=0,c=0;c<r;c++){for(;s>1&&l<a;){var u=1-i/(n-l);o*=u,s*=u,l++}s+=o*=(a-c)*(i-c)/((c+1)*(n-i-a+c+1))}for(;l<a;l++)s*=1-i/(n-l);return e.min(1,e.max(0,s))}}),t.extend(t.poisson,{pdf:function(r,n){return n<0||r%1!=0||r<0?0:e.pow(n,r)*e.exp(-n)/t.factorial(r)},cdf:function(e,r){var n=[],i=0;if(e<0)return 0;for(;i<=e;i++)n.push(t.poisson.pdf(i,r));return t.sum(n)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var n=1,i=0,a=e.exp(-r);do{i++,n*=t._random_fn()}while(n>a);return i-1},sampleLarge:function(r){var n,i,a,s,o,l,c,u,h,d,f=r;for(s=e.sqrt(f),o=e.log(f),l=.02483*(c=.931+2.53*s)-.059,u=1.1239+1.1328/(c-3.4),h=.9277-3.6224/(c-2);;){if(i=e.random()-.5,a=e.random(),d=.5-e.abs(i),n=e.floor((2*l/d+c)*i+f+.43),d>=.07&&a<=h)return n;if(!(n<0||d<.013&&a>d)&&e.log(a)+e.log(u)-e.log(l/(d*d)+c)<=n*o-f-t.loggam(n+1))return n}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,e,r,n){return r<=e||n<e||n>r?NaN:t<e||t>r?0:t<n?2*(t-e)/((r-e)*(n-e)):t===n?2/(r-e):2*(r-t)/((r-e)*(r-n))},cdf:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=r?0:t>=n?1:t<=i?e.pow(t-r,2)/((n-r)*(i-r)):1-e.pow(n-t,2)/((n-r)*(n-i))},inv:function(t,r,n,i){return n<=r||i<r||i>n?NaN:t<=(i-r)/(n-r)?r+(n-r)*e.sqrt(t*((i-r)/(n-r))):r+(n-r)*(1-e.sqrt((1-t)*(1-(i-r)/(n-r))))},mean:function(t,e,r){return(t+e+r)/3},median:function(t,r,n){return n<=(t+r)/2?r-e.sqrt((r-t)*(r-n))/e.sqrt(2):n>(t+r)/2?t+e.sqrt((r-t)*(n-t))/e.sqrt(2):void 0},mode:function(t,e,r){return r},sample:function(r,n,i){var a=t._random_fn();return a<(i-r)/(n-r)?r+e.sqrt(a*(n-r)*(i-r)):n-e.sqrt((1-a)*(n-r)*(n-i))},variance:function(t,e,r){return(t*t+e*e+r*r-t*e-t*r-e*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,n){return n<=r?NaN:t<=r||t>=n?0:2/e.PI*e.pow(e.pow(n-r,2)-e.pow(2*t-r-n,2),-.5)},cdf:function(t,r,n){return t<r?0:t<n?2/e.PI*e.asin(e.sqrt((t-r)/(n-r))):1},inv:function(t,r,n){return r+(.5-.5*e.cos(e.PI*t))*(n-r)},mean:function(t,e){return e<=t?NaN:(t+e)/2},median:function(t,e){return e<=t?NaN:(t+e)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,n){return(r+n)/2+(n-r)/2*e.sin(2*e.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:e.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,n){return n<=0?0:e.exp(-e.abs(t-r)/n)/(2*n)},cdf:function(t,r,n){return n<=0?0:t<r?.5*e.exp((t-r)/n):1-.5*e.exp(-(t-r)/n)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,e){return 2*e*e},sample:function(r,i){var a=t._random_fn()-.5;return r-i*n(a)*e.log(1-2*e.abs(a))}}),t.extend(t.tukey,{cdf:function(r,n,a){var s=1,o=n,l=16,c=8,u=-30,h=1e-14,d=100,f=800,p=5e3,m=25e3,g=1,b=.5,v=.25,y=.125,w=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],x=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(a<2||s<1||o<2)return NaN;if(!Number.isFinite(r))return 1;if(a>m)return i(r,s,o);var k,$=.5*a,S=$*e.log(a)-a*e.log(2)-t.gammaln($),_=$-1,A=.25*a;k=a<=d?g:a<=f?b:a<=p?v:y,S+=e.log(k);for(var E=0,M=1;M<=50;M++){for(var T=0,N=(2*M-1)*k,C=1;C<=l;C++){var R,O;c<C?(R=C-c-1,O=S+_*e.log(N+w[R]*k)-(w[R]*k+N)*A):(R=C-1,O=S+_*e.log(N-w[R]*k)+(w[R]*k-N)*A),O>=u&&(T+=i(c<C?r*e.sqrt(.5*(w[R]*k+N)):r*e.sqrt(.5*(-w[R]*k+N)),s,o)*x[R]*e.exp(O))}if(M*k>=1&&T<=h)break;E+=T}if(T>h)throw new Error("tukey.cdf failed to converge");return E>1&&(E=1),E},inv:function(r,n,i){var s=1e-4,o=50;if(i<2||n<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var l,c=a(r,n,i),u=t.tukey.cdf(c,n,i)-r;l=u>0?e.max(0,c-1):c+1;for(var h,d=t.tukey.cdf(l,n,i)-r,f=1;f<o;f++)if(h=l-d*(l-c)/(d-u),u=d,c=l,h<0&&(h=0,d=-r),d=t.tukey.cdf(h,n,i)-r,l=h,e.abs(l-c)<s)return h;throw new Error("tukey.inv failed to converge")}})}(t,Math),function(t,e){var r=Array.prototype.push,n=t.utils.isArray;function i(e){return n(e)||e instanceof t}t.extend({add:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t+r[e][n]})):t.map(e,function(t){return t+r})},subtract:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.map(e,function(t,e,n){return t-r[e][n]||0})):t.map(e,function(t){return t-r})},divide:function(e,r){return i(r)?(i(r[0])||(r=[r]),t.multiply(e,t.inv(r))):t.map(e,function(t){return t/r})},multiply:function(e,r){var n,a,s,o,l,c,u,h;if(void 0===e.length&&void 0===r.length)return e*r;if(l=e.length,c=e[0].length,u=t.zeros(l,s=i(r)?r[0].length:c),h=0,i(r)){for(;h<s;h++)for(n=0;n<l;n++){for(o=0,a=0;a<c;a++)o+=e[n][a]*r[a][h];u[n][h]=o}return 1===l&&1===h?u[0][0]:u}return t.map(e,function(t){return t*r})},outer:function(e,r){return t.multiply(e.map(function(t){return[t]}),[r])},dot:function(e,r){i(e[0])||(e=[e]),i(r[0])||(r=[r]);for(var n,a,s=1===e[0].length&&1!==e.length?t.transpose(e):e,o=1===r[0].length&&1!==r.length?t.transpose(r):r,l=[],c=0,u=s.length,h=s[0].length;c<u;c++){for(l[c]=[],n=0,a=0;a<h;a++)n+=s[c][a]*o[c][a];l[c]=n}return 1===l.length?l[0]:l},pow:function(r,n){return t.map(r,function(t){return e.pow(t,n)})},exp:function(r){return t.map(r,function(t){return e.exp(t)})},log:function(r){return t.map(r,function(t){return e.log(t)})},abs:function(r){return t.map(r,function(t){return e.abs(t)})},norm:function(t,r){var n=0,a=0;for(isNaN(r)&&(r=2),i(t[0])&&(t=t[0]);a<t.length;a++)n+=e.pow(e.abs(t[a]),r);return e.pow(n,1/r)},angle:function(r,n){return e.acos(t.dot(r,n)/(t.norm(r)*t.norm(n)))},aug:function(t,e){var n,i=[];for(n=0;n<t.length;n++)i.push(t[n].slice());for(n=0;n<i.length;n++)r.apply(i[n],e[n]);return i},inv:function(e){for(var r,n=e.length,i=e[0].length,a=t.identity(n,i),s=t.gauss_jordan(e,a),o=[],l=0;l<n;l++)for(o[l]=[],r=i;r<s[0].length;r++)o[l][r-i]=s[l][r];return o},det:function t(e){if(2===e.length)return e[0][0]*e[1][1]-e[0][1]*e[1][0];for(var r=0,n=0;n<e.length;n++){for(var i=[],a=1;a<e.length;a++){i[a-1]=[];for(var s=0;s<e.length;s++)s<n?i[a-1][s]=e[a][s]:s>n&&(i[a-1][s-1]=e[a][s])}var o=n%2?-1:1;r+=t(i)*e[0][n]*o}return r},gauss_elimination:function(r,n){var i,a,s,o,l=0,c=0,u=r.length,h=r[0].length,d=1,f=0,p=[];for(i=(r=t.aug(r,n))[0].length,l=0;l<u;l++){for(a=r[l][l],c=l,o=l+1;o<h;o++)a<e.abs(r[o][l])&&(a=r[o][l],c=o);if(c!=l)for(o=0;o<i;o++)s=r[l][o],r[l][o]=r[c][o],r[c][o]=s;for(c=l+1;c<u;c++)for(d=r[c][l]/r[l][l],o=l;o<i;o++)r[c][o]=r[c][o]-d*r[l][o]}for(l=u-1;l>=0;l--){for(f=0,c=l+1;c<=u-1;c++)f+=p[c]*r[l][c];p[l]=(r[l][i-1]-f)/r[l][l]}return p},gauss_jordan:function(r,n){var i,a,s,o=t.aug(r,n),l=o.length,c=o[0].length,u=0;for(a=0;a<l;a++){var h=a;for(s=a+1;s<l;s++)e.abs(o[s][a])>e.abs(o[h][a])&&(h=s);var d=o[a];for(o[a]=o[h],o[h]=d,s=a+1;s<l;s++)for(u=o[s][a]/o[a][a],i=a;i<c;i++)o[s][i]-=o[a][i]*u}for(a=l-1;a>=0;a--){for(u=o[a][a],s=0;s<a;s++)for(i=c-1;i>a-1;i--)o[s][i]-=o[a][i]*o[s][a]/u;for(o[a][a]/=u,i=l;i<c;i++)o[a][i]/=u}return o},triaUpSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],s=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),s=!0),t.arange(i-1,-1,-1).forEach(function(s){n=t.arange(s+1,i).map(function(t){return a[t]*e[s][t]}),a[s]=(r[s]-t.sum(n))/e[s][s]}),s?a.map(function(t){return[t]}):a},triaLowSolve:function(e,r){var n,i=e[0].length,a=t.zeros(1,i)[0],s=!1;return null!=r[0].length&&(r=r.map(function(t){return t[0]}),s=!0),t.arange(i).forEach(function(i){n=t.arange(i).map(function(t){return e[i][t]*a[t]}),a[i]=(r[i]-t.sum(n))/e[i][i]}),s?a.map(function(t){return[t]}):a},lu:function(e){var r,n=e.length,i=t.identity(n),a=t.zeros(e.length,e[0].length);return t.arange(n).forEach(function(t){a[0][t]=e[0][t]}),t.arange(1,n).forEach(function(s){t.arange(s).forEach(function(n){r=t.arange(n).map(function(t){return i[s][t]*a[t][n]}),i[s][n]=(e[s][n]-t.sum(r))/a[n][n]}),t.arange(s,n).forEach(function(n){r=t.arange(s).map(function(t){return i[s][t]*a[t][n]}),a[s][n]=e[r.length][n]-t.sum(r)})}),[i,a]},cholesky:function(r){var n,i=r.length,a=t.zeros(r.length,r[0].length);return t.arange(i).forEach(function(s){n=t.arange(s).map(function(t){return e.pow(a[s][t],2)}),a[s][s]=e.sqrt(r[s][s]-t.sum(n)),t.arange(s+1,i).forEach(function(e){n=t.arange(s).map(function(t){return a[s][t]*a[e][t]}),a[e][s]=(r[s][e]-t.sum(n))/a[s][s]})}),a},gauss_jacobi:function(r,n,i,a){for(var s,o,l,c,u=0,h=0,d=r.length,f=[],p=[],m=[];u<d;u++)for(f[u]=[],p[u]=[],m[u]=[],h=0;h<d;h++)u>h?(f[u][h]=r[u][h],p[u][h]=m[u][h]=0):u<h?(p[u][h]=r[u][h],f[u][h]=m[u][h]=0):(m[u][h]=r[u][h],f[u][h]=p[u][h]=0);for(l=t.multiply(t.multiply(t.inv(m),t.add(f,p)),-1),o=t.multiply(t.inv(m),n),s=i,c=t.add(t.multiply(l,i),o),u=2;e.abs(t.norm(t.subtract(c,s)))>a;)s=c,c=t.add(t.multiply(l,s),o),u++;return c},gauss_seidel:function(r,n,i,a){for(var s,o,l,c,u,h=0,d=r.length,f=[],p=[],m=[];h<d;h++)for(f[h]=[],p[h]=[],m[h]=[],s=0;s<d;s++)h>s?(f[h][s]=r[h][s],p[h][s]=m[h][s]=0):h<s?(p[h][s]=r[h][s],f[h][s]=m[h][s]=0):(m[h][s]=r[h][s],f[h][s]=p[h][s]=0);for(c=t.multiply(t.multiply(t.inv(t.add(m,f)),p),-1),l=t.multiply(t.inv(t.add(m,f)),n),o=i,u=t.add(t.multiply(c,i),l),h=2;e.abs(t.norm(t.subtract(u,o)))>a;)o=u,u=t.add(t.multiply(c,o),l),h+=1;return u},SOR:function(r,n,i,a,s){for(var o,l,c,u,h,d=0,f=r.length,p=[],m=[],g=[];d<f;d++)for(p[d]=[],m[d]=[],g[d]=[],o=0;o<f;o++)d>o?(p[d][o]=r[d][o],m[d][o]=g[d][o]=0):d<o?(m[d][o]=r[d][o],p[d][o]=g[d][o]=0):(g[d][o]=r[d][o],p[d][o]=m[d][o]=0);for(u=t.multiply(t.inv(t.add(g,t.multiply(p,s))),t.subtract(t.multiply(g,1-s),t.multiply(m,s))),c=t.multiply(t.multiply(t.inv(t.add(g,t.multiply(p,s))),n),s),l=i,h=t.add(t.multiply(u,i),c),d=2;e.abs(t.norm(t.subtract(h,l)))>a;)l=h,h=t.add(t.multiply(u,l),c),d++;return h},householder:function(r){for(var n,i,a,s,o=r.length,l=r[0].length,c=0,u=[],h=[];c<o-1;c++){for(n=0,s=c+1;s<l;s++)n+=r[s][c]*r[s][c];for(n=(r[c+1][c]>0?-1:1)*e.sqrt(n),i=e.sqrt((n*n-r[c+1][c]*n)/2),(u=t.zeros(o,1))[c+1][0]=(r[c+1][c]-n)/(2*i),a=c+2;a<o;a++)u[a][0]=r[a][c]/(2*i);h=t.subtract(t.identity(o,l),t.multiply(t.multiply(u,t.transpose(u)),2)),r=t.multiply(h,t.multiply(r,h))}return r},QR:function(){var r=t.sum,n=t.arange;function i(i){var a,s,o,l=i.length,c=i[0].length,u=t.zeros(c,c);for(i=t.copy(i),s=0;s<c;s++){for(u[s][s]=e.sqrt(r(n(l).map(function(t){return i[t][s]*i[t][s]}))),a=0;a<l;a++)i[a][s]=i[a][s]/u[s][s];for(o=s+1;o<c;o++)for(u[s][o]=r(n(l).map(function(t){return i[t][s]*i[t][o]})),a=0;a<l;a++)i[a][o]=i[a][o]-i[a][s]*u[s][o]}return[i,u]}return i}(),lstsq:function(){function e(e){var r=(e=t.copy(e)).length,n=t.identity(r);return t.arange(r-1,-1,-1).forEach(function(r){t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),e[r][r])),t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),e[r][r])),t.arange(r).forEach(function(i){var a=t.multiply(e[i][r],-1),s=t.slice(e,{row:i}),o=t.multiply(t.slice(e,{row:r}),a);t.sliceAssign(e,{row:i},t.add(s,o));var l=t.slice(n,{row:i}),c=t.multiply(t.slice(n,{row:r}),a);t.sliceAssign(n,{row:i},t.add(l,c))})}),n}function r(r,n){var i=!1;void 0===n[0].length&&(n=n.map(function(t){return[t]}),i=!0);var a=t.QR(r),s=a[0],o=a[1],l=r[0].length,c=t.slice(s,{col:{end:l}}),u=e(t.slice(o,{row:{end:l}})),h=t.transpose(c);void 0===h[0].length&&(h=[h]);var d=t.multiply(t.multiply(u,h),n);return void 0===d.length&&(d=[[d]]),i?d.map(function(t){return t[0]}):d}return r}(),jacobi:function(r){for(var n,i,a,s,o,l,c,u=1,h=r.length,d=t.identity(h,h),f=[];1===u;){for(o=r[0][1],a=0,s=1,n=0;n<h;n++)for(i=0;i<h;i++)n!=i&&o<e.abs(r[n][i])&&(o=e.abs(r[n][i]),a=n,s=i);for(l=r[a][a]===r[s][s]?r[a][s]>0?e.PI/4:-e.PI/4:e.atan(2*r[a][s]/(r[a][a]-r[s][s]))/2,(c=t.identity(h,h))[a][a]=e.cos(l),c[a][s]=-e.sin(l),c[s][a]=e.sin(l),c[s][s]=e.cos(l),d=t.multiply(d,c),r=t.multiply(t.multiply(t.inv(c),r),c),u=0,n=1;n<h;n++)for(i=1;i<h;i++)n!=i&&e.abs(r[n][i])>.001&&(u=1)}for(n=0;n<h;n++)f.push(r[n][n]);return[d,f]},rungekutta:function(t,e,r,n,i,a){var s,o,l;if(2===a)for(;n<=r;)i+=((s=e*t(n,i))+(o=e*t(n+e,i+s)))/2,n+=e;if(4===a)for(;n<=r;)i+=((s=e*t(n,i))+2*(o=e*t(n+e/2,i+s/2))+2*(l=e*t(n+e/2,i+o/2))+e*t(n+e,i+l))/6,n+=e;return i},romberg:function(t,r,n,i){for(var a,s,o,l,c,u=0,h=(n-r)/2,d=[],f=[],p=[];u<i/2;){for(c=t(r),o=r,l=0;o<=n;o+=h,l++)d[l]=o;for(a=d.length,o=1;o<a-1;o++)c+=(o%2!=0?4:2)*t(d[o]);c=h/3*(c+t(n)),p[u]=c,h/=2,u++}for(s=p.length,a=1;1!==s;){for(o=0;o<s-1;o++)f[o]=(e.pow(4,a)*p[o+1]-p[o])/(e.pow(4,a)-1);s=f.length,p=f,f=[],a++}return p},richardson:function(t,r,n,i){function a(t,e){for(var r,n=0,i=t.length;n<i;n++)t[n]===e&&(r=n);return r}for(var s,o,l,c,u,h=e.abs(n-t[a(t,n)+1]),d=0,f=[],p=[];i>=h;)s=a(t,n+i),o=a(t,n),f[d]=(r[s]-2*r[o]+r[2*o-s])/(i*i),i/=2,d++;for(c=f.length,l=1;1!=c;){for(u=0;u<c-1;u++)p[u]=(e.pow(4,l)*f[u+1]-f[u])/(e.pow(4,l)-1);c=p.length,f=p,p=[],l++}return f},simpson:function(t,e,r,n){for(var i,a=(r-e)/n,s=t(e),o=[],l=e,c=0,u=1;l<=r;l+=a,c++)o[c]=l;for(i=o.length;u<i-1;u++)s+=(u%2!=0?4:2)*t(o[u]);return a/3*(s+t(r))},hermite:function(t,e,r,n){for(var i,a=t.length,s=0,o=0,l=[],c=[],u=[],h=[];o<a;o++){for(l[o]=1,i=0;i<a;i++)o!=i&&(l[o]*=(n-t[i])/(t[o]-t[i]));for(c[o]=0,i=0;i<a;i++)o!=i&&(c[o]+=1/(t[o]-t[i]));u[o]=(1-2*(n-t[o])*c[o])*(l[o]*l[o]),h[o]=(n-t[o])*(l[o]*l[o]),s+=u[o]*e[o]+h[o]*r[o]}return s},lagrange:function(t,e,r){for(var n,i,a=0,s=0,o=t.length;s<o;s++){for(i=e[s],n=0;n<o;n++)s!=n&&(i*=(r-t[n])/(t[s]-t[n]));a+=i}return a},cubic_spline:function(e,r,n){for(var i,a=e.length,s=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[];s<a-1;s++)h[s]=e[s+1]-e[s];for(c[0]=0,s=1;s<a-1;s++)c[s]=3/h[s]*(r[s+1]-r[s])-3/h[s-1]*(r[s]-r[s-1]);for(s=1;s<a-1;s++)o[s]=[],l[s]=[],o[s][s-1]=h[s-1],o[s][s]=2*(h[s-1]+h[s]),o[s][s+1]=h[s],l[s][0]=c[s];for(u=t.multiply(t.inv(o),l),i=0;i<a-1;i++)d[i]=(r[i+1]-r[i])/h[i]-h[i]*(u[i+1][0]+2*u[i][0])/3,f[i]=(u[i+1][0]-u[i][0])/(3*h[i]);for(i=0;i<a&&!(e[i]>n);i++);return r[i-=1]+(n-e[i])*d[i]+t.sq(n-e[i])*u[i]+(n-e[i])*t.sq(n-e[i])*f[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(e){var r,n,i=e.length,a=e[0].length,s=0,o=[],l=[],c=[],u=[],h=[],d=[],f=[],p=[],m=[],g=[];for(s=0;s<i;s++)o[s]=t.sum(e[s])/a;for(s=0;s<a;s++)for(f[s]=[],r=0;r<i;r++)f[s][r]=e[r][s]-o[r];for(f=t.transpose(f),s=0;s<i;s++)for(p[s]=[],r=0;r<i;r++)p[s][r]=t.dot([f[s]],[f[r]])/(a-1);for(m=(c=t.jacobi(p))[0],l=c[1],g=t.transpose(m),s=0;s<l.length;s++)for(r=s;r<l.length;r++)l[s]<l[r]&&(n=l[s],l[s]=l[r],l[r]=n,u=g[s],g[s]=g[r],g[r]=u);for(d=t.transpose(f),s=0;s<i;s++)for(h[s]=[],r=0;r<d.length;r++)h[s][r]=t.dot([g[s]],[d[r]]);return[e,l,g,h]}}),function(e){for(var r=0;r<e.length;r++)(function(e){t.fn[e]=function(r,n){var i=this;return n?(setTimeout(function(){n.call(i,t.fn[e].call(i,r))},15),this):"number"==typeof t[e](this,r)?t[e](this,r):t(t[e](this,r))}})(e[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(t,Math),function(t,e){var r=[].slice,n=t.utils.isNumber,i=t.utils.isArray;function a(t,r,n,i){if(t>1||n>1||t<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var a=(t*r+n*i)/(r+i);return(t-n)/e.sqrt(a*(1-a)*(1/r+1/i))}t.extend({zscore:function(){var e=r.call(arguments);return n(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var n,a=r.call(arguments);return i(a[1])?(n=t.zscore(a[0],a[1],a[3]),1===a[2]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):a.length>2?(n=t.zscore(a[0],a[1],a[2]),1===a[3]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1)):(n=a[0],1===a[1]?t.normal.cdf(-e.abs(n),0,1):2*t.normal.cdf(-e.abs(n),0,1))}}),t.extend(t.fn,{zscore:function(t,e){return(t-this.mean())/this.stdev(e)},ztest:function(r,n,i){var a=e.abs(this.zscore(r,i));return 1===n?t.normal.cdf(-a,0,1):2*t.normal.cdf(-a,0,1)}}),t.extend({tscore:function(){var n=r.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/e.sqrt(n[3])):(n[0]-t.mean(n[1]))/(t.stdev(n[1],!0)/e.sqrt(n[1].length))},ttest:function(){var i,a=r.call(arguments);return 5===a.length?(i=e.abs(t.tscore(a[0],a[1],a[2],a[3])),1===a[4]?t.studentt.cdf(-i,a[3]-1):2*t.studentt.cdf(-i,a[3]-1)):n(a[1])?(i=e.abs(a[0]),1==a[2]?t.studentt.cdf(-i,a[1]-1):2*t.studentt.cdf(-i,a[1]-1)):(i=e.abs(t.tscore(a[0],a[1])),1==a[2]?t.studentt.cdf(-i,a[1].length-1):2*t.studentt.cdf(-i,a[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/e.sqrt(this.cols()))},ttest:function(r,n){return 1===n?1-t.studentt.cdf(e.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-e.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var n,i,a,s,o,l,c,u,h=r.call(arguments);if(1===h.length){for(o=new Array(h[0].length),c=0;c<h[0].length;c++)o[c]=h[0][c];h=o}for(i=new Array,c=0;c<h.length;c++)i=i.concat(h[c]);for(a=t.mean(i),n=0,c=0;c<h.length;c++)n+=h[c].length*e.pow(t.mean(h[c])-a,2);for(n/=h.length-1,l=0,c=0;c<h.length;c++)for(s=t.mean(h[c]),u=0;u<h[c].length;u++)l+=e.pow(h[c][u]-s,2);return n/(l/=i.length-h.length)},anovaftest:function(){var e,i,a,s,o=r.call(arguments);if(n(o[0]))return 1-t.centralF.cdf(o[0],o[1],o[2]);var l=t.anovafscore(o);for(e=o.length-1,a=0,s=0;s<o.length;s++)a+=o[s].length;return i=a-e-1,1-t.centralF.cdf(l,e,i)},ftest:function(e,r,n){return 1-t.centralF.cdf(e,r,n)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e,r=0;for(e=0;e<this.length;e++)r+=this[e].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var i,a,s,o,l,c=r.call(arguments);return n(c[0])?(i=c[0],a=c[1],s=c[2],o=c[3],l=c[4]):(i=t.mean(c[0]),a=t.mean(c[1]),s=c[0].length,o=c[1].length,l=c[2]),e.abs(i-a)/(l*e.sqrt((1/s+1/o)/2))},qtest:function(){var e,n=r.call(arguments);3===n.length?(e=n[0],n=n.slice(1)):7===n.length?(e=t.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(e=t.qscore(n[0],n[1],n[2]),n=n.slice(3));var i=n[0],a=n[1];return 1-t.tukey.cdf(e,a,i-a)},tukeyhsd:function(e){for(var r=t.pooledstdev(e),n=e.map(function(e){return t.mean(e)}),i=e.reduce(function(t,e){return t+e.length},0),a=[],s=0;s<e.length;++s)for(var o=s+1;o<e.length;++o){var l=t.qtest(n[s],n[o],e[s].length,e[o].length,r,i,e.length);a.push([[s,o],l])}return a}}),t.extend({normalci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.normal.inv(i[1]/2,0,1)*i[2]/e.sqrt(i[3])):e.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},tci:function(){var n,i=r.call(arguments),a=new Array(2);return n=4===i.length?e.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/e.sqrt(i[3])):e.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/e.sqrt(i[2].length)),a[0]=i[0]-n,a[1]=i[0]+n,a},significant:function(t,e){return t<e}}),t.extend(t.fn,{normalci:function(e,r){return t.normalci(e,r,this.toArray())},tci:function(e,r){return t.tci(e,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,r,n,i){var s=a(e,r,n,i);return t.ztest(s,1)},twoSidedDifferenceOfProportions:function(e,r,n,i){var s=a(e,r,n,i);return t.ztest(s,2)}})}(t,Math),t.models=function(){function e(e){var n=e[0].length,i=t.arange(n).map(function(i){var a=t.arange(n).filter(function(t){return t!==i});return r(t.col(e,i).map(function(t){return t[0]}),t.col(e,a))});return i}function r(e,r){var n=e.length,i=r[0].length-1,a=n-i-1,s=t.lstsq(r,e),o=t.multiply(r,s.map(function(t){return[t]})).map(function(t){return t[0]}),l=t.subtract(e,o),c=t.mean(e),u=t.sum(o.map(function(t){return Math.pow(t-c,2)})),h=t.sum(e.map(function(t,e){return Math.pow(t-o[e],2)})),d=u+h;return{exog:r,endog:e,nobs:n,df_model:i,df_resid:a,coef:s,predict:o,resid:l,ybar:c,SST:d,SSE:u,SSR:h,R2:u/d}}function n(r){var n=e(r.exog),i=Math.sqrt(r.SSR/r.df_resid),a=n.map(function(t){var e=t.SST,r=t.R2;return i/Math.sqrt(e*(1-r))}),s=r.coef.map(function(t,e){return(t-0)/a[e]}),o=s.map(function(e){var n=t.studentt.cdf(e,r.df_resid);return 2*(n>.5?1-n:n)}),l=t.studentt.inv(.975,r.df_resid),c=r.coef.map(function(t,e){var r=l*a[e];return[t-r,t+r]});return{se:a,t:s,p:o,sigmaHat:i,interval95:c}}function i(e){var r=e.R2/e.df_model/((1-e.R2)/e.df_resid),n=function(e,r,n){return t.beta.cdf(e/(n/r+e),r/2,n/2)};return{F_statistic:r,pvalue:1-n(r,e.df_model,e.df_resid)}}function a(t,e){var a=r(t,e),s=n(a),o=i(a),l=1-(1-a.R2)*((a.nobs-1)/a.df_resid);return a.t=s,a.f=o,a.adjust_R2=l,a}return{ols:a}}(),t.extend({buildxmatrix:function(){for(var e=new Array(arguments.length),r=0;r<arguments.length;r++){var n=[1];e[r]=n.concat(arguments[r])}return t(e)},builddxmatrix:function(){for(var e=new Array(arguments[0].length),r=0;r<arguments[0].length;r++){var n=[1];e[r]=n.concat(arguments[0][r])}return t(e)},buildjxmatrix:function(e){for(var r=new Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return t.builddxmatrix(r)},buildymatrix:function(e){return t(e).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(e,r){var n,i,a,s,o;if(e.cols()==r.rows()){if(r.rows()>1){for(s=[],n=0;n<e.rows();n++)for(s[n]=[],i=0;i<r.cols();i++){for(o=0,a=0;a<e.cols();a++)o+=e.toArray()[n][a]*r.toArray()[a][i];s[n][i]=o}return t(s)}for(s=[],n=0;n<e.rows();n++)for(s[n]=[],i=0;i<r.cols();i++){for(o=0,a=0;a<e.cols();a++)o+=e.toArray()[n][a]*r.toArray()[i];s[n][i]=o}return t(s)}},regress:function(e,r){var n=t.xtranspxinv(e),i=e.transpose(),a=t.matrixmult(t(n),i);return t.matrixmult(a,r)},regresst:function(e,r,n){var i=t.regress(e,r),a={anova:{}},s=t.jMatYBar(e,i);a.yBar=s;var o=r.mean();a.anova.residuals=t.residuals(r,s),a.anova.ssr=t.ssr(s,o),a.anova.msr=a.anova.ssr/(e[0].length-1),a.anova.sse=t.sse(r,s),a.anova.mse=a.anova.sse/(r.length-(e[0].length-1)-1),a.anova.sst=t.sst(r,o),a.anova.mst=a.anova.sst/(r.length-1),a.anova.r2=1-a.anova.sse/a.anova.sst,a.anova.r2<0&&(a.anova.r2=0),a.anova.fratio=a.anova.msr/a.anova.mse,a.anova.pvalue=t.anovaftest(a.anova.fratio,e[0].length-1,r.length-(e[0].length-1)-1),a.anova.rmse=Math.sqrt(a.anova.mse),a.anova.r2adj=1-a.anova.mse/a.anova.mst,a.anova.r2adj<0&&(a.anova.r2adj=0),a.stats=new Array(e[0].length);for(var l,c,u,h=t.xtranspxinv(e),d=0;d<i.length;d++)l=Math.sqrt(a.anova.mse*Math.abs(h[d][d])),c=Math.abs(i[d]/l),u=t.ttest(c,r.length-e[0].length-1,n),a.stats[d]=[i[d],l,c,u];return a.regress=i,a},xtranspx:function(e){return t.matrixmult(e.transpose(),e)},xtranspxinv:function(e){var r=t.matrixmult(e.transpose(),e);return t.inv(r)},jMatYBar:function(e,r){var n=t.matrixmult(e,r);return new t(n)},residuals:function(e,r){return t.matrixsubtract(e,r)},ssr:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},sse:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e[n],2);return r},sst:function(t,e){for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n]-e,2);return r},matrixsubtract:function(e,r){for(var n=new Array(e.length),i=0;i<e.length;i++){n[i]=new Array(e[i].length);for(var a=0;a<e[i].length;a++)n[i][a]=e[i][a]-r[i][a]}return t(n)}}),t.jStat=t,t}();var pF=e(fF.exports);class mF{static d={DEFAULT:1,MIN:-6,MAX:6,STEP:.01,JUMP:.1};static c={DEFAULT:0,MIN:-3,MAX:3,STEP:.01,JUMP:.1};static s={DEFAULT:1,MIN:.8,MAX:40,STEP:.01,JUMP:.05};static hM2Hr(t,e){return 0===t&&0===e?0:t/(t+e)}static faCr2Far(t,e){return 0===t&&0===e?0:t/(t+e)}static hMFaCr2Acc(t,e,r,n){return 0===t&&0===e&&0===r&&0===n?0:(t+n)/(t+e+r+n)}static hrFar2Acc(t,e){return(t+(1-e))/2}static hFa2Ppv(t,e){return 0===t&&0===e?0:t/(t+e)}static mCr2Fomr(t,e){return 0===t&&0===e?0:t/(t+e)}static hrFar2D(t,e,r=1){return 1===r?pF.normal.inv(t,0,1)-pF.normal.inv(e,0,1):Math.sqrt(2/(r*r+1))*(r*pF.normal.inv(t,0,1)-pF.normal.inv(e,0,1))}static hrFar2C(t,e,r=1){return 1===r?-(pF.normal.inv(t,0,1)+pF.normal.inv(e,0,1))/2:Math.sqrt(2/(r*r+1))*(r/(r+1))*-(pF.normal.inv(t,0,1)+pF.normal.inv(e,0,1))}static dC2Hr(t,e,r=1){return 1===r?pF.normal.cdf(t/2-e,0,1):pF.normal.cdf(Math.sqrt((r*r+1)/2)*(t/(1+r)-e/r),0,1)}static dC2Far(t,e,r=1){return 1===r?pF.normal.cdf(-(t/2+e),0,1):pF.normal.cdf(Math.sqrt((r*r+1)/2)*-(t/(1+r)+e),0,1)}static dFar2Hr(t,e,r=1){return 1===r?pF.normal.cdf(t+pF.normal.inv(e,0,1),0,1):pF.normal.cdf((Math.sqrt((r*r+1)/2)*t+pF.normal.inv(e,0,1))/r,0,1)}static cFar2Hr(t,e,r=1){return 1===r?pF.normal.cdf(-2*t-pF.normal.inv(e,0,1),0,1):pF.normal.cdf(-Math.sqrt((r*r+1)/2)*((r+1)/r)*t-pF.normal.inv(e,0,1),0,1)}static d2MuN(t,e=1){return 1===e?-t/2:-Math.sqrt((e*e+1)/2)*(1/(e+1))*t}static muN2D(t,e=1){return 1===e?-2*t:-Math.sqrt(2/(e*e+1))*(e+1)*t}static d2MuS(t,e=1){return 1===e?t/2:Math.sqrt((e*e+1)/2)*(e/(e+1))*t}static muS2D(t,e=1){return 1===e?2*t:Math.sqrt(2/(e*e+1))*((e+1)/e)*t}static c2L(t,e=1){return 1===e?t:Math.sqrt((e*e+1)/2)*t}static l2C(t,e=1){return 1===e?t:Math.sqrt(2/(e*e+1))*t}static s2H(t=1){return 1/(t*Math.sqrt(2*Math.PI))}static h2S(t){return 1/(t*Math.sqrt(2*Math.PI))}static hr2Zhr(t){return pF.normal.inv(t,0,1)}static far2Zfar(t){return pF.normal.inv(t,0,1)}static zhr2Hr(t){return pF.normal.cdf(t,0,1)}static zfar2Far(t){return pF.normal.cdf(t,0,1)}}function gF(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("detectable-table",class extends uF{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",converter:dF,reflect:!0},color:{attribute:"color",type:String,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},hPayoff:{attribute:"hit-payoff",type:Number,reflect:!0},mPayoff:{attribute:"miss-payoff",type:Number,reflect:!0},faPayoff:{attribute:"false-alarm-payoff",type:Number,reflect:!0},crPayoff:{attribute:"correct-rejection-payoff",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},acc:{attribute:!1,type:Number,reflect:!1},ppv:{attribute:!1,type:Number,reflect:!1},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.numeric=!1,this.summaries=["stimulusRates","responseRates","accuracy"],this.summary=new Set,this.colors=["none","accuracy","stimulus","response","outcome","all"],this.color="all",this.payoff=!1,this.hPayoff=void 0,this.mPayoff=void 0,this.crPayoff=void 0,this.faPayoff=void 0,this.h=40,this.m=60,this.fa=75,this.cr=25,this.alignState()}alignState(){this.hr=mF.hM2Hr(this.h,this.m),this.far=mF.faCr2Far(this.fa,this.cr),this.acc=mF.hMFaCr2Acc(this.h,this.m,this.fa,this.cr),this.ppv=mF.hFa2Ppv(this.h,this.fa),this.fomr=mF.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("detectable-table-change",{detail:{h:this.h,m:this.m,hr:this.hr,fa:this.fa,cr:this.cr,far:this.far,acc:this.acc,ppv:this.ppv,fomr:this.fomr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}hrInput(t){const e=parseFloat(t.target.value),r=this.h+this.m;this.h=Math.round(e*r),this.m=r-this.h,this.alignState(),this.sendEvent()}farInput(t){const e=parseFloat(t.target.value),r=this.fa+this.cr;this.fa=Math.round(e*r),this.cr=r-this.fa,this.alignState(),this.sendEvent()}accInput(t){const e=parseFloat(t.target.value),r=this.h+this.m,n=this.fa+this.cr,i=(this.hr+this.far-1)/2;let a=i+e,s=1+i-e;s>1&&(s=1,a=s+2*e-1),s<0&&(s=0,a=s+2*e-1),a>1&&(a=1,s=a-2*e+1),a<0&&(a=0,s=a-2*e+1),this.h=Math.round(a*r),this.m=r-this.h,this.fa=Math.round(s*n),this.cr=n-this.fa,this.alignState(),this.sendEvent()}ppvInput(t){const e=parseFloat(t.target.value),r=this.h+this.fa;this.h=Math.round(e*r),this.fa=r-this.h,this.alignState(),this.sendEvent()}fomrInput(t){const e=parseFloat(t.target.value),r=this.m+this.cr;this.m=Math.round(e*r),this.cr=r-this.m,this.alignState(),this.sendEvent()}static get styles(){return[super.styles,AM`
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
      `]}willUpdate(){this.alignState()}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,n,i,a,s,o,l,c,u;return this.numeric?(r=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff?uT`<span class="payoff">${e(this.hPayoff)}</span>`:uT``}
        </decidables-spinner>
      `,n=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff?uT`<span class="payoff">${e(this.mPayoff)}</span>`:uT``}
        </decidables-spinner>
      `,i=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff?uT`<span class="payoff">${e(this.faPayoff)}</span>`:uT``}
        </decidables-spinner>
      `,a=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff?uT`<span class="payoff">${e(this.crPayoff)}</span>`:uT``}
        </decidables-spinner>
      `,s=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `,o=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `,l=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `,c=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `,u=uT`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `):(r=uT`<span>Hits</span>
        ${this.payoff?uT`<span class="payoff">${e(this.hPayoff)}</span>`:uT``}`,n=uT`<span>Misses</span>
        ${this.payoff?uT`<span class="payoff">${e(this.mPayoff)}</span>`:uT``}`,i=uT`<span>False Alarms</span>
        ${this.payoff?uT`<span class="payoff">${e(this.faPayoff)}</span>`:uT``}`,a=uT`<span>Correct Rejections</span>
        ${this.payoff?uT`<span class="payoff">${e(this.crPayoff)}</span>`:uT``}`,s=uT`<span>Hit Rate</span>`,o=uT`<span>False Alarm Rate</span>`,l=uT`<span>Accuracy</span>`,c=uT`<span>Positive Predictive Value</span>`,u=uT`<span>False Omission Rate</span>`),uT`
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
            ${this.summary.has("stimulusRates")?uT`
                <td class="td td-summary hr">
                  ${s}
                </td>`:uT``}
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
            ${this.summary.has("stimulusRates")?uT`
                <td class="td td-summary far">
                  ${o}
                </td>`:uT``}
          </tr>
          ${this.summary.has("responseRates")||this.summary.has("accuracy")?uT`
              <tr>
                <td colspan="2"></td>
                ${this.summary.has("responseRates")?uT`
                    <td class="td td-summary ppv">
                      ${c}
                    </td>
                    <td class="td td-summary fomr">
                      ${u}
                    </td>`:uT`
                    <td colspan="2"></td>`}
                ${this.summary.has("accuracy")?uT`
                    <td class="td td-summary acc" rowspan="2">
                      ${l}
                    </td>`:uT``}
              </tr>`:uT``}
        </tbody>
      </table>`}});class bF extends(gF(uF)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},direction:{attribute:!1,type:Number,reflect:!1},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.direction=-1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.currentDirection=void 0,this.signals=["present","absent"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=n-(i+a),l=n-(s+.25*this.rem);this.xScale=tF().domain([-1,1]).range([0,l]),this.yScale=tF().domain([1,-1]).range([0,o]);const c=_C(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=c.enter().append("svg").classed("main",!0),h=u.merge(c).attr("viewBox",`0 0 ${n} ${n}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),h.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const d=u.append("g").classed("plot",!0),f=h.select(".plot").attr("transform",`translate(${s}, ${i})`),p=d.append("g").classed("underlayer",!0),m=f.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),d.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");f.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const g=d.append("g").classed("overlayer",!0),b=f.select(".overlayer");g.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=KR()-this.pauseTime,this.pauseTime=0),this.runner=function(t,e,r){var n=new GR,i=e;return n._restart=n.restart,n.restart=function(t,e,r){e=+e,r=null==r?KR():+r,n._restart(function a(s){s+=i,n._restart(a,i+=e,r),t(s)},e,r)},n.restart(t,e,r),n}(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=KR())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=_C(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();_C(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();_C(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=KR(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,n=this.baseTime?e-this.lastTime:0;this.lastTime=e;let i=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(i=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"present":"absent",this.currentDirection="absent"===this.signal?void 0:this.direction>=0?this.direction:360*Math.random(),this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length="present"===this.signal?Math.round(this.count*this.coherence):0,this.dots[this.RANDOM].length="present"===this.signal?this.count-this.dots[this.COHERENT].length:this.count;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(i||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,n=Math.sqrt(Math.random());s.x=this.xScale(n*Math.cos(r)),s.y=this.yScale(n*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(n/1e3)*Math.cos(e),s.dy=this.speed*(n/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=_C(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=_C(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const l=_C(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);l.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),l.exit().remove()}}function vF(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function yF(t){return yF="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yF(t)}function wF(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function xF(){return xF=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},xF.apply(this,arguments)}function kF(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function $F(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return kF(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?kF(t,e):void 0}}(t))||e){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){o=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function SF(t,e){var r=[],n=[];return t.length&&function t(e,i){if(1===e.length)r.push(e[0]),n.push(e[0]);else{for(var a=Array(e.length-1),s=0;s<a.length;s++)0===s&&r.push(e[0]),s===a.length-1&&n.push(e[s+1]),a[s]=[(1-i)*e[s][0]+i*e[s+1][0],(1-i)*e[s][1]+i*e[s+1][1]];t(a,i)}}(t,e),{left:r,right:n.reverse()}}function _F(t){var e={};return 4===t.length&&(e.x2=t[2][0],e.y2=t[2][1]),t.length>=3&&(e.x1=t[1][0],e.y1=t[1][1]),e.x=t[t.length-1][0],e.y=t[t.length-1][1],4===t.length?e.type="C":3===t.length?e.type="Q":e.type="L",e}function AF(t,e,r){var n=[[t.x,t.y]];return null!=e.x1&&n.push([e.x1,e.y1]),null!=e.x2&&n.push([e.x2,e.y2]),n.push([e.x,e.y]),function(t,e){for(var r=[],n=t,i=1/(e=e||2),a=0;a<e-1;a++){var s=SF(n,i/(1-i*a));r.push(s.left),n=s.right}return r.push(n),r}(n,r).map(_F)}customElements.define("rdk-task",bF);var EF=/[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g,MF={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"],Z:[]};function TF(t,e){for(var r=Array(t),n=0;n<t;n++)r[n]=e;return r}function NF(t){return"".concat(t.type).concat(MF[t.type].map(function(e){return t[e]}).join(","))}function CF(t,e,r){var n=t.length-1,i=e.length-1,a=n/i,s=TF(i).reduce(function(e,n,i){var s=Math.floor(a*i);if(r&&s<t.length-1&&r(t[s],t[s+1])){var o=a*i%1<.5;e[s]&&(o?s>0?s-=1:s<t.length-1&&(s+=1):s<t.length-1?s+=1:s>0&&(s-=1))}return e[s]=(e[s]||0)+1,e},[]),o=s.reduce(function(e,r,n){if(n===t.length-1){var i=TF(r,xF({},t[t.length-1]));return"M"===i[0].type&&i.forEach(function(t){t.type="L"}),e.concat(i)}return e.concat(function(t,e,r){var n=[];if("L"===e.type||"Q"===e.type||"C"===e.type)n=n.concat(AF(t,e,r));else{var i=xF({},t);"M"===i.type&&(i.type="L"),(n=n.concat(TF(r-1).map(function(){return i}))).push(e)}return n}(t[n],t[n+1],r))},[]);return o.unshift(t[0]),o}function RF(t){for(var e,r,n=(t||"").match(EF)||[],i=[],a=0;a<n.length;++a)if(e=MF[n[a]]){r={type:n[a]};for(var s=0;s<e.length;++s)r[e[s]]=+n[a+s+1];a+=e.length,i.push(r)}return i}function OF(t,e,r){var n=null==t?[]:t.slice(),i=null==e?[]:e.slice(),a="object"===yF(r)?r:{excludeSegment:r,snapEndsToInput:!0},s=a.excludeSegment,o=a.snapEndsToInput;if(!n.length&&!i.length)return function(){return[]};var l=!(0!==n.length&&"Z"!==n[n.length-1].type||0!==i.length&&"Z"!==i[i.length-1].type);n.length>0&&"Z"===n[n.length-1].type&&n.pop(),i.length>0&&"Z"===i[i.length-1].type&&i.pop(),n.length?i.length||i.push(n[0]):n.push(i[0]),0!==Math.abs(i.length-n.length)&&(i.length>n.length?n=CF(n,i,s):i.length<n.length&&(i=CF(i,n,s))),n=n.map(function(t,e){return function(t,e){var r={x1:"x",y1:"y",x2:"x",y2:"y"},n=["xAxisRotation","largeArcFlag","sweepFlag"];if(t.type!==e.type&&"M"!==e.type.toUpperCase()){var i={};Object.keys(e).forEach(function(a){var s=e[a],o=t[a];void 0===o&&(n.includes(a)?o=s:(void 0===o&&r[a]&&(o=t[r[a]]),void 0===o&&(o=0))),i[a]=o}),i.type=e.type,t=i}return t}(t,i[e])});var c=n.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vF(Object(r),!0).forEach(function(e){wF(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vF(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t)});return l&&(c.push({type:"Z"}),n.push({type:"Z"})),function(t){if(1===t&&o)return null==e?[]:e;if(0===t)return n;for(var r=0;r<c.length;++r){var a,s=n[r],l=i[r],u=c[r],h=$F(MF[u.type]);try{for(h.s();!(a=h.n()).done;){var d=a.value;u[d]=(1-t)*s[d]+t*l[d],"largeArcFlag"!==d&&"sweepFlag"!==d||(u[d]=Math.round(u[d]))}}catch(t){h.e(t)}finally{h.f()}}return c}}Object.keys(MF).forEach(function(t){MF[t.toLowerCase()]=MF[t]});const PF={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const t in PF)Object.freeze(PF[t]);var IF=Object.freeze(PF);const FF=Object.create(null);for(const t in IF)Object.hasOwn(IF,t)&&(FF[IF[t]]=t);const DF={to:{},get:{}};function jF(t,e,r){return Math.min(Math.max(e,t),r)}function zF(t){const e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}DF.get=function(t){let e,r;switch(t.slice(0,3).toLowerCase()){case"hsl":e=DF.get.hsl(t),r="hsl";break;case"hwb":e=DF.get.hwb(t),r="hwb";break;default:e=DF.get.rgb(t),r="rgb"}return e?{model:r,value:e}:null},DF.get.rgb=function(t){if(!t)return null;let e,r,n,i=[0,0,0,1];if(e=t.match(/^#([a-f\d]{6})([a-f\d]{2})?$/i)){for(n=e[2],e=e[1],r=0;r<3;r++){const t=2*r;i[r]=Number.parseInt(e.slice(t,t+2),16)}n&&(i[3]=Number.parseInt(n,16)/255)}else if(e=t.match(/^#([a-f\d]{3,4})$/i)){for(e=e[1],n=e[3],r=0;r<3;r++)i[r]=Number.parseInt(e[r]+e[r],16);n&&(i[3]=Number.parseInt(n+n,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i)){for(r=0;r<3;r++)i[r]=Number.parseFloat(e[r+1]);e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i)))return(e=t.toLowerCase().match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:Object.hasOwn(IF,e[1])?(i=IF[e[1]].slice(),i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*Number.parseFloat(e[r+1]));e[4]&&(i[3]=e[5]?.01*Number.parseFloat(e[4]):Number.parseFloat(e[4]))}for(r=0;r<3;r++)i[r]=jF(i[r],0,255);return i[3]=jF(i[3],0,1),i},DF.get.hsl=function(t){if(!t)return null;const e=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,jF(Number.parseFloat(e[2]),0,100),jF(Number.parseFloat(e[3]),0,100),jF(Number.isNaN(t)?1:t,0,1)]}return null},DF.get.hwb=function(t){if(!t)return null;const e=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);if(e){const t=Number.parseFloat(e[4]);return[(Number.parseFloat(e[1])%360+360)%360,jF(Number.parseFloat(e[2]),0,100),jF(Number.parseFloat(e[3]),0,100),jF(Number.isNaN(t)?1:t,0,1)]}return null},DF.to.hex=function(...t){return"#"+zF(t[0])+zF(t[1])+zF(t[2])+(t[3]<1?zF(Math.round(255*t[3])):"")},DF.to.rgb=function(...t){return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},DF.to.rgb.percent=function(...t){const e=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+r+"%, "+n+"%)":"rgba("+e+"%, "+r+"%, "+n+"%, "+t[3]+")"},DF.to.hsl=function(...t){return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},DF.to.hwb=function(...t){let e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},DF.to.keyword=function(...t){return FF[t.slice(0,3)]};const qF={};for(const t of Object.keys(IF))qF[IF[t]]=t;const UF={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},oklab:{channels:3,labels:["okl","oka","okb"]},lch:{channels:3,labels:"lch"},oklch:{channels:3,labels:["okl","okc","okh"]},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},LF=(6/29)**3;function HF(t){const e=t>.0031308?1.055*t**(1/2.4)-.055:12.92*t;return Math.min(Math.max(0,e),1)}function BF(t){return t>.04045?((t+.055)/1.055)**2.4:t/12.92}for(const t of Object.keys(UF)){if(!("channels"in UF[t]))throw new Error("missing channels property: "+t);if(!("labels"in UF[t]))throw new Error("missing channel labels property: "+t);if(UF[t].labels.length!==UF[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:r}=UF[t];delete UF[t].channels,delete UF[t].labels,Object.defineProperty(UF[t],"channels",{value:e}),Object.defineProperty(UF[t],"labels",{value:r})}function VF(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}function WF(t){const e=function(){const t={},e=Object.keys(UF);for(let{length:r}=e,n=0;n<r;n++)t[e[n]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length>0;){const t=r.pop(),n=Object.keys(UF[t]);for(let{length:i}=n,a=0;a<i;a++){const i=n[a],s=e[i];-1===s.distance&&(s.distance=e[t].distance+1,s.parent=t,r.unshift(i))}}return e}function XF(t,e){return function(r){return e(t(r))}}function YF(t,e){const r=[e[t].parent,t];let n=UF[e[t].parent][t],i=e[t].parent;for(;e[i].parent;)r.unshift(e[i].parent),n=XF(UF[e[i].parent][i],n),i=e[i].parent;return n.conversion=r,n}function KF(t){const e=WF(t),r={},n=Object.keys(e);for(let{length:t}=n,i=0;i<t;i++){const t=n[i];null!==e[t].parent&&(r[t]=YF(t,e))}return r}UF.rgb.hsl=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=a-i;let o,l;switch(a){case i:o=0;break;case e:o=(r-n)/s;break;case r:o=2+(n-e)/s;break;case n:o=4+(e-r)/s}o=Math.min(60*o,360),o<0&&(o+=360);const c=(i+a)/2;return l=a===i?0:c<=.5?s/(a+i):s/(2-a-i),[o,100*l,100*c]},UF.rgb.hsv=function(t){let e,r,n,i,a;const s=t[0]/255,o=t[1]/255,l=t[2]/255,c=Math.max(s,o,l),u=c-Math.min(s,o,l),h=function(t){return(c-t)/6/u+.5};if(0===u)i=0,a=0;else{switch(a=u/c,e=h(s),r=h(o),n=h(l),c){case s:i=n-r;break;case o:i=1/3+e-n;break;case l:i=2/3+r-e}i<0?i+=1:i>1&&(i-=1)}return[360*i,100*a,100*c]},UF.rgb.hwb=function(t){const e=t[0],r=t[1];let n=t[2];const i=UF.rgb.hsl(t)[0],a=1/255*Math.min(e,Math.min(r,n));return n=1-1/255*Math.max(e,Math.max(r,n)),[i,100*a,100*n]},UF.rgb.oklab=function(t){const e=BF(t[0]/255),r=BF(t[1]/255),n=BF(t[2]/255),i=Math.cbrt(.4122214708*e+.5363325363*r+.0514459929*n),a=Math.cbrt(.2119034982*e+.6806995451*r+.1073969566*n),s=Math.cbrt(.0883024619*e+.2817188376*r+.6299787005*n);return[100*(.2104542553*i+.793617785*a-.0040720468*s),100*(1.9779984951*i-2.428592205*a+.4505937099*s),100*(.0259040371*i+.7827717662*a-.808675766*s)]},UF.rgb.cmyk=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(1-e,1-r,1-n);return[100*((1-e-i)/(1-i)||0),100*((1-r-i)/(1-i)||0),100*((1-n-i)/(1-i)||0),100*i]},UF.rgb.keyword=function(t){const e=qF[t];if(e)return e;let r,n=Number.POSITIVE_INFINITY;for(const e of Object.keys(IF)){const i=VF(t,IF[e]);i<n&&(n=i,r=e)}return r},UF.keyword.rgb=function(t){return[...IF[t]]},UF.rgb.xyz=function(t){const e=BF(t[0]/255),r=BF(t[1]/255),n=BF(t[2]/255);return[100*(.4124564*e+.3575761*r+.1804375*n),100*(.2126729*e+.7151522*r+.072175*n),100*(.0193339*e+.119192*r+.9503041*n)]},UF.rgb.lab=function(t){const e=UF.rgb.xyz(t);let r=e[0],n=e[1],i=e[2];r/=95.047,n/=100,i/=108.883,r=r>LF?r**(1/3):7.787*r+16/116,n=n>LF?n**(1/3):7.787*n+16/116,i=i>LF?i**(1/3):7.787*i+16/116;return[116*n-16,500*(r-n),200*(n-i)]},UF.hsl.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;let i,a;if(0===r)return a=255*n,[a,a,a];const s=n<.5?n*(1+r):n+r-n*r,o=2*n-s,l=[0,0,0];for(let t=0;t<3;t++)i=e+1/3*-(t-1),i<0&&i++,i>1&&i--,a=6*i<1?o+6*(s-o)*i:2*i<1?s:3*i<2?o+(s-o)*(2/3-i)*6:o,l[t]=255*a;return l},UF.hsl.hsv=function(t){const e=t[0];let r=t[1]/100,n=t[2]/100,i=r;const a=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,i*=a<=1?a:2-a;return[e,100*(0===n?2*i/(a+i):2*r/(n+r)),100*((n+r)/2)]},UF.hsv.rgb=function(t){const e=t[0]/60,r=t[1]/100;let n=t[2]/100;const i=Math.floor(e)%6,a=e-Math.floor(e),s=255*n*(1-r),o=255*n*(1-r*a),l=255*n*(1-r*(1-a));switch(n*=255,i){case 0:return[n,l,s];case 1:return[o,n,s];case 2:return[s,n,l];case 3:return[s,o,n];case 4:return[l,s,n];case 5:return[n,s,o]}},UF.hsv.hsl=function(t){const e=t[0],r=t[1]/100,n=t[2]/100,i=Math.max(n,.01);let a,s;s=(2-r)*n;const o=(2-r)*i;return a=r*i,a/=o<=1?o:2-o,a=a||0,s/=2,[e,100*a,100*s]},UF.hwb.rgb=function(t){const e=t[0]/360;let r=t[1]/100,n=t[2]/100;const i=r+n;let a;i>1&&(r/=i,n/=i);const s=Math.floor(6*e),o=1-n;a=6*e-s,1&s&&(a=1-a);const l=r+a*(o-r);let c,u,h;switch(s){default:case 6:case 0:c=o,u=l,h=r;break;case 1:c=l,u=o,h=r;break;case 2:c=r,u=o,h=l;break;case 3:c=r,u=l,h=o;break;case 4:c=l,u=r,h=o;break;case 5:c=o,u=r,h=l}return[255*c,255*u,255*h]},UF.cmyk.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i))]},UF.xyz.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100;let i,a,s;return i=3.2404542*e+-1.5371385*r+-.4985314*n,a=-.969266*e+1.8760108*r+.041556*n,s=.0556434*e+-.2040259*r+1.0572252*n,i=HF(i),a=HF(a),s=HF(s),[255*i,255*a,255*s]},UF.xyz.lab=function(t){let e=t[0],r=t[1],n=t[2];e/=95.047,r/=100,n/=108.883,e=e>LF?e**(1/3):7.787*e+16/116,r=r>LF?r**(1/3):7.787*r+16/116,n=n>LF?n**(1/3):7.787*n+16/116;return[116*r-16,500*(e-r),200*(r-n)]},UF.xyz.oklab=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=Math.cbrt(.8189330101*e+.3618667424*r-.1288597137*n),a=Math.cbrt(.0329845436*e+.9293118715*r+.0361456387*n),s=Math.cbrt(.0482003018*e+.2643662691*r+.633851707*n);return[100*(.2104542553*i+.793617785*a-.0040720468*s),100*(1.9779984951*i-2.428592205*a+.4505937099*s),100*(.0259040371*i+.7827717662*a-.808675766*s)]},UF.oklab.oklch=function(t){return UF.lab.lch(t)},UF.oklab.xyz=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(.999999998*e+.396337792*r+.215803758*n)**3,a=(1.000000008*e-.105561342*r-.063854175*n)**3,s=(1.000000055*e-.089484182*r-1.291485538*n)**3;return[100*(1.227013851*i-.55779998*a+.281256149*s),100*(-.040580178*i+1.11225687*a-.071676679*s),100*(-.076381285*i-.421481978*a+1.58616322*s)]},UF.oklab.rgb=function(t){const e=t[0]/100,r=t[1]/100,n=t[2]/100,i=(e+.3963377774*r+.2158037573*n)**3,a=(e-.1055613458*r-.0638541728*n)**3,s=(e-.0894841775*r-1.291485548*n)**3;return[255*HF(4.0767416621*i-3.3077115913*a+.2309699292*s),255*HF(-1.2684380046*i+2.6097574011*a-.3413193965*s),255*HF(-.0041960863*i-.7034186147*a+1.707614701*s)]},UF.oklch.oklab=function(t){return UF.lch.lab(t)},UF.lab.xyz=function(t){let e,r,n;r=(t[0]+16)/116,e=t[1]/500+r,n=r-t[2]/200;const i=r**3,a=e**3,s=n**3;return r=i>LF?i:(r-16/116)/7.787,e=a>LF?a:(e-16/116)/7.787,n=s>LF?s:(n-16/116)/7.787,e*=95.047,r*=100,n*=108.883,[e,r,n]},UF.lab.lch=function(t){const e=t[0],r=t[1],n=t[2];let i;i=360*Math.atan2(n,r)/2/Math.PI,i<0&&(i+=360);return[e,Math.sqrt(r*r+n*n),i]},UF.lch.lab=function(t){const e=t[0],r=t[1],n=t[2]/360*2*Math.PI;return[e,r*Math.cos(n),r*Math.sin(n)]},UF.rgb.ansi16=function(t,e=null){const[r,n,i]=t;let a=null===e?UF.rgb.hsv(t)[2]:e;if(a=Math.round(a/50),0===a)return 30;let s=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===a&&(s+=60),s},UF.hsv.ansi16=function(t){return UF.rgb.ansi16(UF.hsv.rgb(t),t[2])},UF.rgb.ansi256=function(t){const e=t[0],r=t[1],n=t[2];if(e>>4==r>>4&&r>>4==n>>4)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},UF.ansi16.rgb=function(t){let e=(t=t[0])%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const r=.5*(Math.trunc(t>50)+1);return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},UF.ansi256.rgb=function(t){if((t=t[0])>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},UF.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".slice(e.length)+e},UF.hex.rgb=function(t){const e=t.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!e)return[0,0,0];let r=e[0];3===e[0].length&&(r=[...r].map(t=>t+t).join(""));const n=Number.parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},UF.rgb.hcg=function(t){const e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.max(Math.max(e,r),n),a=Math.min(Math.min(e,r),n),s=i-a;let o;return o=s<=0?0:i===e?(r-n)/s%6:i===r?2+(n-e)/s:4+(e-r)/s,o/=6,o%=1,[360*o,100*s,100*(s<1?a/(1-s):0)]},UF.hsl.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=r<.5?2*e*r:2*e*(1-r);let i=0;return n<1&&(i=(r-.5*n)/(1-n)),[t[0],100*n,100*i]},UF.hsv.hcg=function(t){const e=t[1]/100,r=t[2]/100,n=e*r;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},UF.hcg.rgb=function(t){const e=t[0]/360,r=t[1]/100,n=t[2]/100;if(0===r)return[255*n,255*n,255*n];const i=[0,0,0],a=e%1*6,s=a%1,o=1-s;let l=0;switch(Math.floor(a)){case 0:i[0]=1,i[1]=s,i[2]=0;break;case 1:i[0]=o,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=s;break;case 3:i[0]=0,i[1]=o,i[2]=1;break;case 4:i[0]=s,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=o}return l=(1-r)*n,[255*(r*i[0]+l),255*(r*i[1]+l),255*(r*i[2]+l)]},UF.hcg.hsv=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);let n=0;return r>0&&(n=e/r),[t[0],100*n,100*r]},UF.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let n=0;return r>0&&r<.5?n=e/(2*r):r>=.5&&r<1&&(n=e/(2*(1-r))),[t[0],100*n,100*r]},UF.hcg.hwb=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},UF.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,n=r-e;let i=0;return n<1&&(i=(r-n)/(1-n)),[t[0],100*n,100*i]},UF.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},UF.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},UF.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},UF.gray.hsl=function(t){return[0,0,t[0]]},UF.gray.hsv=UF.gray.hsl,UF.gray.hwb=function(t){return[0,100,t[0]]},UF.gray.cmyk=function(t){return[0,0,0,t[0]]},UF.gray.lab=function(t){return[t[0],0,0]},UF.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".slice(r.length)+r},UF.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const ZF={},GF=Object.keys(UF);function JF(t){const e=function(...e){const r=e[0];return null==r?r:(r.length>1&&(e=r),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}function QF(t){const e=function(...e){const r=e[0];if(null==r)return r;r.length>1&&(e=r);const n=t(e);if("object"==typeof n)for(let{length:t}=n,e=0;e<t;e++)n[e]=Math.round(n[e]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}for(const t of GF){ZF[t]={},Object.defineProperty(ZF[t],"channels",{value:UF[t].channels}),Object.defineProperty(ZF[t],"labels",{value:UF[t].labels});const e=KF(t),r=Object.keys(e);for(const n of r){const r=e[n];ZF[t][n]=QF(r),ZF[t][n].raw=JF(r)}}const tD=["keyword","gray","hex"],eD={};for(const t of Object.keys(ZF))eD[[...ZF[t].labels].sort().join("")]=t;const rD={};function nD(t,e){if(!(this instanceof nD))return new nD(t,e);if(e&&e in tD&&(e=null),e&&!(e in ZF))throw new Error("Unknown model: "+e);let r,n;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof nD)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"==typeof t){const e=DF.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,n=ZF[this.model].channels,this.color=e.value.slice(0,n),this.valpha="number"==typeof e.value[n]?e.value[n]:1}else if(t.length>0){this.model=e||"rgb",n=ZF[this.model].channels;const r=Array.prototype.slice.call(t,0,n);this.color=oD(r,n),this.valpha="number"==typeof t[n]?t[n]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const n=e.sort().join("");if(!(n in eD))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=eD[n];const{labels:i}=ZF[this.model],a=[];for(r=0;r<i.length;r++)a.push(t[i[r]]);this.color=oD(a)}if(rD[this.model])for(n=ZF[this.model].channels,r=0;r<n;r++){const t=rD[this.model][r];t&&(this.color[r]=t(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}nD.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in DF.to?this:this.rgb();e=e.round("number"==typeof t?t:1);const r=1===e.valpha?e.color:[...e.color,this.valpha];return DF.to[e.model](...r)},percentString(t){const e=this.rgb().round("number"==typeof t?t:1),r=1===e.valpha?e.color:[...e.color,this.valpha];return DF.to.rgb.percent(...r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=ZF[this.model],{labels:r}=ZF[this.model];for(let n=0;n<e;n++)t[r[n]]=this.color[n];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new nD([...this.color.map(iD(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new nD([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:aD("rgb",0,sD(255)),green:aD("rgb",1,sD(255)),blue:aD("rgb",2,sD(255)),hue:aD(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:aD("hsl",1,sD(100)),lightness:aD("hsl",2,sD(100)),saturationv:aD("hsv",1,sD(100)),value:aD("hsv",2,sD(100)),chroma:aD("hcg",1,sD(100)),gray:aD("hcg",2,sD(100)),white:aD("hwb",1,sD(100)),wblack:aD("hwb",2,sD(100)),cyan:aD("cmyk",0,sD(100)),magenta:aD("cmyk",1,sD(100)),yellow:aD("cmyk",2,sD(100)),black:aD("cmyk",3,sD(100)),x:aD("xyz",0,sD(95.047)),y:aD("xyz",1,sD(100)),z:aD("xyz",2,sD(108.833)),l:aD("lab",0,sD(100)),a:aD("lab",1),b:aD("lab",2),keyword(t){return void 0!==t?new nD(t):ZF[this.model].keyword(this.color)},hex(t){return void 0!==t?new nD(t):DF.to.hex(...this.rgb().round().color)},hexa(t){if(void 0!==t)return new nD(t);const e=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),DF.to.hex(...e)+r},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[r,n]of t.entries()){const t=n/255;e[r]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(2126*t[0]+7152*t[1]+722*t[2])/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return nD.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let r=e.color[0];return r=(r+t)%360,r=r<0?360+r:r,e.color[0]=r,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const r=t.rgb(),n=this.rgb(),i=void 0===e?.5:e,a=2*i-1,s=r.alpha()-n.alpha(),o=((a*s===-1?a:(a+s)/(1+a*s))+1)/2,l=1-o;return nD.rgb(o*r.red()+l*n.red(),o*r.green()+l*n.green(),o*r.blue()+l*n.blue(),r.alpha()*i+n.alpha()*(1-i))}};for(const t of Object.keys(ZF)){if(tD.includes(t))continue;const{channels:e}=ZF[t];nD.prototype[t]=function(...e){return this.model===t?new nD(this):e.length>0?new nD(e,t):new nD([...(r=ZF[this.model][t].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],t);var r},nD[t]=function(...r){let n=r[0];return"number"==typeof n&&(n=oD(r,e)),new nD(n,t)}}function iD(t){return function(e){return function(t,e){return Number(t.toFixed(e))}(e,t)}}function aD(t,e,r){t=Array.isArray(t)?t:[t];for(const n of t)(rD[n]||=[])[e]=r;return t=t[0],function(n){let i;return void 0!==n?(r&&(n=r(n)),i=this[t](),i.color[e]=n,i):(i=this[t]().color[e],r&&(i=r(i)),i)}}function sD(t){return function(e){return Math.max(0,Math.min(t,e))}}function oD(t,e){for(let r=0;r<e;r++)"number"!=typeof t[r]&&(t[r]=0);return t}class lD extends(gF(uF)){static get properties(){return{contour:{attribute:"contour",type:String,reflect:!0},point:{attribute:"point",type:String,reflect:!0},isoD:{attribute:"iso-d",type:String,reflect:!0},isoC:{attribute:"iso-c",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.sdt=!1,this.contours=["sensitivity","bias","accuracy"],this.contour=void 0,this.points=["all","first","rest","none"],this.point="all",this.isoDs=["all","first","rest","none"],this.isoD="first",this.isoCs=["all","first","rest","none"],this.isoC="first",this.zRoc=!1,this.far=.25,this.hr=.75,this.s=mF.s.DEFAULT,this.label="",this.locations=[{name:"default",far:this.far,hr:this.hr,s:this.s,label:""}],this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.alignState()}alignState(){this.locations[0].hr=this.hr,this.locations[0].far=this.far,this.locations[0].s=this.s,this.locations[0].label=this.label,this.d=mF.hrFar2D(this.hr,this.far,this.s),this.c=mF.hrFar2C(this.hr,this.far,this.s),this.pointArray=[],this.isoDArray=[],this.isoCArray=[],this.locations.forEach((t,e)=>{t.d=mF.hrFar2D(t.hr,t.far,t.s),t.c=mF.hrFar2C(t.hr,t.far,t.s),0!==e||"first"!==this.point&&"all"!==this.point?e>0&&("rest"===this.point||"all"===this.point)&&this.pointArray.push(t):this.pointArray.push(t),0!==e||"first"!==this.isoD&&"all"!==this.isoD?e>0&&("rest"===this.isoD||"all"===this.isoD)&&this.isoDArray.push(t):this.isoDArray.push(t),0!==e||"first"!==this.isoC&&"all"!==this.isoC?e>0&&("rest"===this.isoC||"all"===this.isoC)&&this.isoCArray.push(t):this.isoCArray.push(t)})}set(t,e,r="default",n="",i=1){"default"===r&&(this.hr=t,this.far=e,this.s=i,this.label=n);const a=this.locations.find(t=>t.name===r);void 0===a?this.locations.push({name:r,far:e,hr:t,s:i,label:n}):(a.hr=t,a.far=e,a.s=i,a.label=n),this.requestUpdate()}setWithSDT(t,e,r="default",n="",i=1){"default"===r&&(this.hr=mF.dC2Hr(t,e,i),this.far=mF.dC2Far(t,e,i),this.s=i,this.label=n);const a=this.locations.find(t=>t.name===r);void 0===a?this.locations.push({name:r,far:mF.dC2Far(t,e,i),hr:mF.dC2Hr(t,e,i),s:i,label:n}):(a.hr=mF.dC2Hr(t,e,i),a.far=mF.dC2Far(t,e,i),a.s=i,a.label=n),this.sdt=!0,this.requestUpdate()}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,n=Math.min(e,r),i=2*this.rem,a=3*this.rem,s=3*this.rem,o=n-(i+a),l=n-(s+2*this.rem),c=parseInt(this.getComputedStyleValue("---transition-duration"),10),u=tF().domain(this.zRoc?[-3,3]:[0,1]).range([0,l]);this.xScale=u;const h=tF().domain(this.zRoc?[3,-3]:[1,0]).range([0,o]);this.yScale=h;const d=DC().subject((t,e)=>({x:this.xScale(this.zRoc?mF.far2Zfar(e.far):e.far),y:this.yScale(this.zRoc?mF.hr2Zhr(e.hr):e.hr)})).on("start",t=>{_C(t.currentTarget).classed("dragging",!0)}).on("drag",(t,e)=>{this.drag=!0;const r=this.zRoc?mF.zfar2Far(this.xScale.invert(t.x)):this.xScale.invert(t.x),n=this.zRoc?mF.zhr2Hr(this.yScale.invert(t.y)):this.yScale.invert(t.y);e.far=r<.001?.001:r>.999?.999:r,e.hr=n<=.001?.001:n>=.999?.999:n,"default"===e.name&&(this.far=e.far,this.hr=e.hr),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))}).on("end",t=>{_C(t.currentTarget).classed("dragging",!1)}),f=sF().x(t=>u(this.zRoc?mF.far2Zfar(t.far):t.far)).y(t=>h(this.zRoc?mF.hr2Zhr(t.hr):t.hr)),p=_C(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),m=p.enter().append("svg").classed("main",!0).each((t,e,r)=>{TT(uF.svgFilters,r[e])}),g=m.merge(p).attr("viewBox",`0 0 ${n} ${n}`),b=m.append("g").classed("plot",!0),v=g.select(".plot").attr("transform",`translate(${s}, ${i})`);b.append("clipPath").attr("id","clip-roc-space").append("rect"),v.select("clipPath rect").attr("height",o+1).attr("width",l+1);const y=b.append("g").classed("underlayer",!0),w=v.select(".underlayer");if(y.append("rect").classed("background",!0),w.select(".background").attr("height",o).attr("width",l),this.firstUpdate||t.has("contour")||t.has("zRoc")||t.has("width")||t.has("height")||t.has("rem")||t.has("s"))if(void 0!==this.contour){const t=100,e=[];for(let r=.5,n=0;r<t;r+=1)for(let i=.5;i<t;i+=1,n+=1){const a=this.zRoc?mF.zhr2Hr(i/t*6-3):i/t,s=this.zRoc?mF.zfar2Far(6*(1-r/t)-3):1-r/t;e[n]="bias"===this.contour?mF.hrFar2C(a,s,this.s):"sensitivity"===this.contour?mF.hrFar2D(a,s,this.s):"accuracy"===this.contour?mF.hrFar2Acc(a,s):null}const r="bias"===this.contour?GT(-3,3,.25):"sensitivity"===this.contour?GT(-6,6,.5):"accuracy"===this.contour?GT(0,1,.05):null,n=ZO().size([t,t]).thresholds(r),i=this.getComputedStyleValue("bias"===this.contour?"---color-element-background":"sensitivity"===this.contour?"---color-d":"accuracy"===this.contour?"---color-acc-dark":null),a=this.getComputedStyleValue("bias"===this.contour?"---color-c":"sensitivity"===this.contour||"accuracy"===this.contour?"---color-element-background":null),s=tF().domain(jT(r)).interpolate(()=>xR(nD(i).hex(),nD(a).hex())),o=w.selectAll(".plot-contour").data([this.contour]),u=o.enter().append("g").classed("plot-contour",!0).merge(o).selectAll(".contour").data(n(e));u.enter().append("path").classed("contour",!0).merge(u).transition().duration(2*c).ease(OO).attrTween("d",(e,r,n)=>function(t,e,r){var n=RF(t),i=RF(e),a="object"===yF(r)?r:{excludeSegment:r,snapEndsToInput:!0},s=a.excludeSegment,o=a.snapEndsToInput;if(!n.length&&!i.length)return function(){return""};var l=OF(n,i,{excludeSegment:s,snapEndsToInput:o});return function(t){if(1===t&&o)return null==e?"":e;var r,n="",i=$F(l(t));try{for(i.s();!(r=i.n()).done;)n+=NF(r.value)}catch(t){i.e(t)}finally{i.f()}return n}}(_C(n[r]).attr("d"),qI(BI().scale(l/t))(e))).attr("fill",t=>s(t.value)),u.exit().remove();const h=w.selectAll(".title-contour").data([this.contour]);h.enter().append("text").classed("title-contour",!0).attr("text-anchor","middle").merge(h).classed("math-var","bias"===this.contour||"sensitivity"===this.contour).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${this.rem})`:"accuracy"===this.contour?`translate(${l+1.125*this.rem}, ${this.rem})`:null).text("bias"===this.contour?"c":"sensitivity"===this.contour?"d′":"accuracy"===this.contour?"Acc":null);const d=100,f=[];for(let e=.5,r=0;e<d;e+=1,r+=4)f[r]="bias"===this.contour?-(e/t*6-3):"sensitivity"===this.contour?e/t*12-6:"accuracy"===this.contour?e/t:null,f[r+1]=f[r],f[r+2]=f[r],f[r+3]=f[r];const p=ZO().size([4,d]).thresholds(r),m=tF().domain("bias"===this.contour?[3,-3]:"sensitivity"===this.contour?[6,-6]:"accuracy"===this.contour?[1,0]:null).range([0,10*this.rem]),g=w.selectAll(".legend-contour").data([this.contour]),b=g.enter().append("g").classed("legend-contour",!0),v=b.merge(g).attr("transform","bias"===this.contour||"sensitivity"===this.contour?`translate(${l+1.25*this.rem}, ${1.5*this.rem})`:"accuracy"===this.contour?`translate(${l+1.5*this.rem}, ${1.5*this.rem})`:null);g.exit().remove(),b.append("g").classed("axis-contour",!0),v.select(".axis-contour").call(oN(m).ticks(7).tickSize(0)).attr("font-size",null).attr("font-family",null);const y=v.selectAll(".contour").data(p(f));y.enter().append("path").classed("contour",!0).merge(y).attr("d",qI(BI().scale(10*this.rem/d))).attr("fill",t=>s(t.value)),y.exit().remove()}else{w.selectAll(".plot-contour").data([]).exit().remove();w.selectAll(".title-contour").data([]).exit().remove();w.selectAll(".legend-contour").data([]).exit().remove()}y.append("g").classed("axis-x",!0);w.select(".axis-x").attr("transform",`translate(0, ${o})`).transition().duration(2*c).ease(OO).call(sN(u)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const x=y.append("text").classed("title-x",!0).attr("text-anchor","middle");x.append("tspan").classed("z math-var",!0),x.append("tspan").classed("name",!0);const k=w.select(".title-x").attr("transform",`translate(${l/2}, ${o+2.25*this.rem})`);k.select("tspan.z").text(this.zRoc?"z":""),k.select("tspan.name").text(this.zRoc?"(False Alarm Rate)":"False Alarm Rate"),y.append("g").classed("axis-y",!0);w.select(".axis-y").transition().duration(2*c).ease(OO).call(oN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const $=y.append("text").classed("title-y",!0).attr("text-anchor","middle");$.append("tspan").classed("z math-var",!0),$.append("tspan").classed("name",!0);const S=w.select(".title-y").attr("transform",`translate(${-2*this.rem}, ${o/2})rotate(-90)`);S.select("tspan.z").text(this.zRoc?"z":""),S.select("tspan.name").text(this.zRoc?"(Hit Rate)":"Hit Rate"),y.append("line").classed("diagonal",!0),w.select(".diagonal").attr("x1",this.zRoc?u(-3):u(0)).attr("y1",this.zRoc?h(-3):h(0)).attr("x2",this.zRoc?u(3):u(1)).attr("y2",this.zRoc?h(3):h(1)),b.append("g").classed("content",!0);const _=v.select(".content"),A=_.selectAll(".curve-iso-d").data(this.isoDArray,t=>t.name),E=A.enter().append("path").classed("curve-iso-d",!0).attr("clip-path","url(#clip-roc-space)").merge(A);this.firstUpdate||t.has("zRoc")?E.transition().duration(this.drag?0:2*c).ease(OO).attr("d",t=>f(GT(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?mF.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?mF.dFar2Hr(t.d,mF.zfar2Far(u.invert(e)),t.s):mF.dFar2Hr(t.d,u.invert(e),t.s)})))):this.sdt?E.transition().duration(this.drag?0:c).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=NR(void 0!==n.d?n.d:t.d,t.d),a=NR(void 0!==n.s?n.s:t.s,t.s);return t=>{n.d=i(t),n.s=a(t);const e=GT(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?mF.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?mF.dFar2Hr(n.d,mF.zfar2Far(u.invert(t)),n.s):mF.dFar2Hr(n.d,u.invert(t),n.s)}));return f(e)}}):E.transition().duration(this.drag?0:c).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e];n.d=void 0,n.s=void 0;const i=NR(void 0!==n.hr?n.hr:t.hr,t.hr),a=NR(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=GT(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?mF.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?mF.dFar2Hr(mF.hrFar2D(n.hr,n.far,t.s),mF.zfar2Far(u.invert(e)),t.s):mF.dFar2Hr(mF.hrFar2D(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),A.exit().remove();const M=_.selectAll(".curve-iso-c").data(this.isoCArray,t=>t.name),T=M.enter().append("path").classed("curve-iso-c",!0).attr("clip-path","url(#clip-roc-space)").merge(M);this.firstUpdate||t.has("zRoc")?T.transition().duration(this.drag?0:2*c).ease(OO).attr("d",t=>f(GT(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?mF.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?mF.cFar2Hr(t.c,mF.zfar2Far(u.invert(e)),t.s):mF.cFar2Hr(t.c,u.invert(e),t.s)})))):this.sdt?T.transition().duration(this.drag?0:c).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e];n.hr=void 0,n.far=void 0;const i=NR(void 0!==n.c?n.c:t.c,t.c),a=NR(void 0!==n.s?n.s:t.s,t.s);return t=>{n.c=i(t),n.s=a(t);const e=GT(u.range()[0],u.range()[1]+1,1).map(t=>({far:this.zRoc?mF.zfar2Far(u.invert(t)):u.invert(t),hr:this.zRoc?mF.cFar2Hr(n.c,mF.zfar2Far(u.invert(t)),n.s):mF.cFar2Hr(n.c,u.invert(t),n.s)}));return f(e)}}):T.transition().duration(this.drag?0:c).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e];n.c=void 0,n.s=void 0;const i=NR(void 0!==n.hr?n.hr:t.hr,t.hr),a=NR(void 0!==n.far?n.far:t.far,t.far);return e=>{n.hr=i(e),n.far=a(e);const r=GT(u.range()[0],u.range()[1]+1,1).map(e=>({far:this.zRoc?mF.zfar2Far(u.invert(e)):u.invert(e),hr:this.zRoc?mF.cFar2Hr(mF.hrFar2C(n.hr,n.far,t.s),mF.zfar2Far(u.invert(e)),t.s):mF.cFar2Hr(mF.hrFar2C(n.hr,n.far,t.s),u.invert(e),t.s)}));return f(r)}}),M.exit().remove();const N=_.selectAll(".point").data(this.pointArray,t=>t.name),C=N.enter().append("g").classed("point",!0);C.append("circle").classed("circle touch",!0),C.append("text").classed("label",!0);const R=C.merge(N);R.select("text").text(t=>t.label),(this.firstUpdate||t.has("interactive"))&&(this.interactive?R.attr("tabindex",0).classed("interactive",!0).call(d).on("keydown",(t,e)=>{if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key)){let r=this.zRoc?mF.hr2Zhr(e.hr):e.hr,n=this.zRoc?mF.far2Zfar(e.far):e.far;switch(t.key){case"ArrowUp":r+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowDown":r-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowRight":n+=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05;break;case"ArrowLeft":n-=this.zRoc?t.shiftKey?.05:.25:t.shiftKey?.01:.05}r=this.zRoc?mF.zhr2Hr(r):r,n=this.zRoc?mF.zfar2Far(n):n,r=r<.001?.001:r>.999?.999:r,n=n<.001?.001:n>.999?.999:n,r===e.hr&&n===e.far||(e.hr=r,e.far=n,"default"===e.name&&(this.hr=e.hr,this.far=e.far),this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("roc-point-change",{detail:{name:e.name,far:e.far,hr:e.hr,d:e.d,c:e.c,s:e.s,label:e.label},bubbles:!0}))),t.preventDefault()}}):R.attr("tabindex",null).classed("interactive",!1).on("drag",null).on("keydown",null)),this.firstUpdate||t.has("zRoc")?R.transition().duration(this.drag?0:2*c).ease(OO).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?mF.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?mF.hr2Zhr(t.hr):t.hr)}\n          )`}):this.sdt?R.transition().duration(this.drag?0:c).ease(OO).attrTween("transform",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:t.d,t.d),a=NR(void 0!==n.c?n.c:t.c,t.c),s=NR(void 0!==n.s?n.s:t.s,t.s);return t=>(n.d=i(t),n.c=a(t),n.s=s(t),`translate(\n              ${u(this.zRoc?mF.far2Zfar(mF.dC2Far(n.d,n.c,n.s)):mF.dC2Far(n.d,n.c,n.s))},\n              ${h(this.zRoc?mF.hr2Zhr(mF.dC2Hr(n.d,n.c,n.s)):mF.dC2Hr(n.d,n.c,n.s))}\n            )`)}):R.transition().duration(this.drag?0:c).ease(OO).attr("transform",(t,e,r)=>{const n=r[e];return n.d=void 0,n.c=void 0,n.s=void 0,`translate(\n            ${u(this.zRoc?mF.far2Zfar(t.far):t.far)},\n            ${h(this.zRoc?mF.hr2Zhr(t.hr):t.hr)}\n          )`}),N.exit().remove(),this.drag=!1,this.sdt=!1,this.firstUpdate=!1}}customElements.define("roc-space",lD);class cD extends(gF(uF)){static get properties(){return{color:{attribute:"color",type:String,reflect:!0},distributions:{attribute:"distributions",type:Boolean,reflect:!0},threshold:{attribute:"threshold",type:Boolean,reflect:!0},unequal:{attribute:"unequal",type:Boolean,reflect:!0},sensitivity:{attribute:"sensitivity",type:Boolean,reflect:!0},bias:{attribute:"bias",type:Boolean,reflect:!0},variance:{attribute:"variance",type:Boolean,reflect:!0},histogram:{attribute:"histogram",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},binWidth:{attribute:!1,type:Number,reflect:!1},trials:{attribute:!1,type:Array,reflect:!1}}}constructor(){super(),this.colors=["all","outcome","response","stimulus","none"],this.color="all",this.distributions=!1,this.threshold=!1,this.unequal=!1,this.sensitivity=!1,this.bias=!1,this.variance=!1,this.histogram=!1,this.d=mF.d.DEFAULT,this.c=mF.c.DEFAULT,this.s=mF.s.DEFAULT,this.binWidth=.25,this.signals=["present","absent"],this.responses=["present","absent"],this.trials=[],this.muN=NaN,this.muS=NaN,this.l=NaN,this.hS=NaN,this.binRange=[-3,3],this.h=0,this.m=0,this.fa=0,this.cr=0,this.firstUpdate=!0,this.drag=!1,this.alignState()}reset(){this.trials=[],this.h=0,this.m=0,this.fa=0,this.cr=0}trial(t,e,r,n,i){const a={new:!0,paused:!1};a.trial=t,a.signal=e,a.duration=r,a.wait=n,a.iti=i,a.evidence=pF.normal.sample(0,1),this.alignTrial(a),this.trials.push(a),this.requestUpdate()}alignTrial(t){return"present"===t.signal?(t.trueEvidence=t.evidence*this.s+this.muS,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"h":"m"):(t.trueEvidence=t.evidence+this.muN,t.response=t.trueEvidence>this.l?"present":"absent",t.outcome="present"===t.response?"fa":"cr"),t.new||(this[t.outcome]+=1),t}alignState(){this.far=mF.dC2Far(this.d,this.c,this.s),this.hr=mF.dC2Hr(this.d,this.c,this.s),this.muN=mF.d2MuN(this.d,this.s),this.muS=mF.d2MuS(this.d,this.s),this.l=mF.c2L(this.c,this.s),this.hS=mF.s2H(this.s),this.h=0,this.m=0,this.fa=0,this.cr=0;for(let t=0;t<this.trials.length;t+=1)this.alignTrial(this.trials[t])}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT``}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-model-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far,hr:this.hr,h:this.h,m:this.m,fa:this.fa,cr:this.cr},bubbles:!0}))}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let n,i;e/r>1.8?(i=r,n=1.8*i):(n=e,i=n/1.8);const a=2*this.rem,s=3*this.rem,o=3*this.rem,l=i-(a+s),c=n-(o+(this.histogram&&this.distributions?3:.75)*this.rem),u=parseInt(this.getComputedStyleValue("---transition-duration"),10),h=tF().domain([-3,3]).range([0,c]),d=tF().domain([.5,0]).range([0,l]),f=h(this.binWidth)-h(0),p=tF().domain([l/f,0]).range([0,l]),m=DC().subject(()=>({x:h(this.l),y:0})).on("start",t=>{_C(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=mF.l2C(e,this.s);this.c=r<mF.c.MIN?mF.c.MIN:r>mF.c.MAX?mF.c.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{_C(t.currentTarget).classed("dragging",!1)}),g=DC().subject(()=>({x:h(this.muN),y:0})).on("start",t=>{_C(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=h.invert(t.x),r=mF.muN2D(e,this.s);this.d=r<mF.d.MIN?mF.d.MIN:r>mF.d.MAX?mF.d.MAX:r,this.alignState(),this.sendEvent()}).on("end",t=>{_C(t.currentTarget).classed("dragging",!1)}),b=DC().subject(()=>({x:h(this.muS),y:d(this.hS)})).on("start",(t,e)=>{_C(t.currentTarget).classed("dragging",!0),e.startX=t.x,e.startY=t.y,e.startHS=this.hS,e.startMuS=this.muS}).on("drag",(t,e)=>{this.drag=!0;let r=this.muS;this.interactive&&(r=h.invert(t.x));let n=this.hS;if(this.unequal&&(n=d.invert(t.y)),this.interactive&&this.unequal&&t.sourceEvent.shiftKey&&(Math.abs(t.x-e.startX)>Math.abs(t.y-e.startY)?n=e.startHS:r=e.startMuS),this.unequal){const t=mF.h2S(n);this.s=t<mF.s.MIN?mF.s.MIN:t>mF.s.MAX?mF.s.MAX:t;const e=mF.l2C(this.l,this.s);this.c=e<mF.c.MIN?mF.c.MIN:e>mF.c.MAX?mF.c.MAX:e}const i=mF.muS2D(r,this.s);this.d=i<mF.d.MIN?mF.d.MIN:i>mF.d.MAX?mF.d.MAX:i,this.alignState(),this.sendEvent()}).on("end",t=>{_C(t.currentTarget).classed("dragging",!1)}),v=sF().x(t=>h(t.e)).y(t=>d(t.p)),y=_C(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),w=y.enter().append("svg").classed("main",!0).each((t,e,r)=>{TT(uF.svgFilters,r[e])}),x=w.merge(y).attr("viewBox",`0 0 ${n} ${i}`),k=w.append("g").classed("plot",!0),$=x.select(".plot").attr("transform",`translate(${o}, ${a})`),S=k.append("g").classed("underlayer",!0),_=$.select(".underlayer");S.append("rect").classed("background",!0),_.select(".background").attr("height",l).attr("width",c),S.append("g").classed("axis-x",!0);_.select(".axis-x").attr("transform",`translate(0, ${l})`).call(sN(h)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),S.append("text").classed("title-x",!0).attr("text-anchor","middle").text("Evidence"),_.select(".title-x").attr("transform",`translate(${c/2}, ${l+2.25*this.rem})`);const A=_.selectAll(".axis-y").data(this.distributions?[{}]:[]);A.enter().append("g").classed("axis-y",!0).merge(A).call(oN(d).ticks(5)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),A.exit().remove();const E=_.selectAll(".title-y").data(this.distributions?[{}]:[]);E.enter().append("text").classed("title-y",!0).attr("text-anchor","middle").text("Probability").merge(E).attr("transform",`translate(${-2*this.rem}, ${l/2})rotate(-90)`),E.exit().remove();const M=_.selectAll(".axis-y2").data(this.histogram?[{}]:[]);var T;M.enter().append("g").classed("axis-y2",!0).merge(M).attr("transform",this.distributions?`translate(${c}, 0)`:"").call(this.distributions?(T=p,aN(2,T)).ticks(10):oN(p).ticks(10)).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null),M.exit().remove();const N=_.selectAll(".title-y2").data(this.histogram?[{}]:[]);N.enter().append("text").classed("title-y2",!0).attr("text-anchor","middle").text("Count").merge(N).attr("transform",this.distributions?`translate(${c+1.5*this.rem}, ${l/2})rotate(90)`:`translate(${-1.5*this.rem}, ${l/2})rotate(-90)`),N.exit().remove(),k.append("g").classed("content",!0);const C=$.select(".content"),R=C.selectAll(".signal-noise").data(this.distributions?[{}]:[]),O=R.enter().append("g").classed("signal-noise",!0),P=O.merge(R);R.exit().remove();const I=O.append("g").classed("noise",!0),F=P.selectAll(".noise").attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muN;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=mF.muN2D(e,this.s);this.d=r<mF.d.MIN?mF.d.MIN:r>mF.d.MAX?mF.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?F.call(g):F.on(".drag",null)),I.append("path").classed("curve-cr",!0),F.select(".curve-cr").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.c?n.c:this.c,this.c),s=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=GT(h.domain()[0],mF.c2L(n.c,n.s),.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuN(n.d,n.s),1)}));return e.push({e:mF.c2L(n.c,n.s),p:pF.normal.pdf(mF.c2L(n.c,n.s),mF.d2MuN(n.d,n.s),1)}),e.push({e:mF.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),v(e)}}),I.append("path").classed("curve-fa",!0),F.select(".curve-fa").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.c?n.c:this.c,this.c),s=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=GT(mF.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:pF.normal.pdf(h.domain()[1],mF.d2MuN(n.d,n.s),1)}),e.push({e:h.domain()[1],p:0}),e.push({e:mF.c2L(n.c,n.s),p:0}),v(e)}}),I.append("path").classed("curve-noise",!0),F.select(".curve-noise").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=GT(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuN(n.d,n.s),1)}));return e.push({e:h.domain()[1],p:pF.normal.pdf(h.domain()[1],mF.d2MuN(n.d,n.s),1)}),v(e)}});const D=O.append("g").classed("signal",!0),j=P.selectAll(".signal").attr("tabindex",this.interactive||this.unequal?0:null).classed("interactive",this.interactive).classed("unequal",this.unequal).on("keydown.sensitivity",this.interactive?t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.muS;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=mF.muS2D(e,this.s);this.d=r<mF.d.MIN?mF.d.MIN:r>mF.d.MAX?mF.d.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}:null).on("keydown.variance",this.unequal?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let e=this.hS;switch(t.key){case"ArrowUp":e+=t.shiftKey?.002:.02;break;case"ArrowDown":e-=t.shiftKey?.002:.02}e=e<0?0:e;const r=mF.h2S(e);this.s=r<mF.s.MIN?mF.s.MIN:r>mF.s.MAX?mF.s.MAX:r,this.d=mF.muN2D(this.muN,this.s),this.c=mF.l2C(this.l,this.s),this.alignState(),this.sendEvent(),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive")||t.has("unequal"))&&(this.interactive||this.unequal?j.call(b):j.on(".drag",null)),D.append("path").classed("curve-m",!0),j.select(".curve-m").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.c?n.c:this.c,this.c),s=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=GT(h.domain()[0],mF.c2L(n.c,n.s),.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuS(n.d,n.s),n.s)}));return e.push({e:mF.c2L(n.c,n.s),p:pF.normal.pdf(mF.c2L(n.c,n.s),mF.d2MuS(n.d,n.s),n.s)}),e.push({e:mF.c2L(n.c,n.s),p:0}),e.push({e:h.domain()[0],p:0}),v(e)}}),D.append("path").classed("curve-h",!0),j.select(".curve-h").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.c?n.c:this.c,this.c),s=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.c=a(t),n.s=s(t);const e=GT(mF.c2L(n.c,n.s),h.domain()[1],.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:pF.normal.pdf(h.domain()[1],mF.d2MuS(n.d,n.s),n.s)}),e.push({e:h.domain()[1],p:0}),e.push({e:mF.c2L(n.c,n.s),p:0}),v(e)}}),D.append("path").classed("curve-signal",!0),j.select(".curve-signal").transition().duration(this.drag?0:u).ease(OO).attrTween("d",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d),a=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.d=i(t),n.s=a(t);const e=GT(h.domain()[0],h.domain()[1],.05).map(t=>({e:t,p:pF.normal.pdf(t,mF.d2MuS(n.d,n.s),n.s)}));return e.push({e:h.domain()[1],p:pF.normal.pdf(h.domain()[1],mF.d2MuS(n.d,n.s),n.s)}),v(e)}});const z=C.selectAll(".measure-d").data(this.sensitivity?[{}]:[]),q=z.enter().append("g").classed("measure-d",!0);q.append("line").classed("line",!0),q.append("line").classed("cap-left",!0),q.append("line").classed("cap-right",!0);const U=q.append("text").classed("label",!0);U.append("tspan").classed("d math-var",!0).text("d′"),U.append("tspan").classed("equals",!0).text(" = "),U.append("tspan").classed("value",!0);const L=q.merge(z);L.select(".line").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muN)).attr("y1",d(.43)).attr("x2",h(this.muS)).attr("y2",d(.43)),L.select(".cap-left").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muN)).attr("y1",d(.43)+5).attr("x2",h(this.muN)).attr("y2",d(.43)-5),L.select(".cap-right").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muS)).attr("y1",d(.43)+5).attr("x2",h(this.muS)).attr("y2",d(.43)-5);L.select(".label").transition().duration(this.drag?0:u).ease(OO).attr("x",h(this.muN>this.muS?this.muN:this.muS)+5).attr("y",d(.43)+3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.d?n.d:this.d,this.d);return t=>{n.d=i(t),_C(n).text(hP(".3")(n.d))}}),z.exit().remove();const H=C.selectAll(".measure-c").data(this.bias?[{}]:[]),B=H.enter().append("g").classed("measure-c",!0);B.append("line").classed("line",!0),B.append("line").classed("cap-zero",!0);const V=B.append("text").classed("label",!0);V.append("tspan").classed("c math-var",!0).text("c"),V.append("tspan").classed("equals",!0).text(" = "),V.append("tspan").classed("value",!0);const W=B.merge(H);W.select(".line").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.l)).attr("y1",d(.47)).attr("x2",h(0)).attr("y2",d(.47)),W.select(".cap-zero").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(0)).attr("y1",d(.47)+5).attr("x2",h(0)).attr("y2",d(.47)-5);W.select(".label").transition().duration(this.drag?0:u).ease(OO).attr("x",h(0)+(this.l<0?5:-5)).attr("y",d(.47)+3).attr("text-anchor",this.c<0?"start":"end").select(".value").tween("text",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.c?n.c:this.c,this.c);return t=>{n.c=i(t),_C(n).text(hP(".3")(n.c))}}),H.exit().remove();const X=C.selectAll(".measure-s").data(this.variance?[{}]:[]),Y=X.enter().append("g").classed("measure-s",!0);Y.append("line").classed("line",!0),Y.append("line").classed("cap-left",!0),Y.append("line").classed("cap-right",!0);const K=Y.append("text").classed("label",!0);K.append("tspan").classed("s math-var",!0).text("σ"),K.append("tspan").classed("equals",!0).text(" = "),K.append("tspan").classed("value",!0);const Z=Y.merge(X);Z.select(".line").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muS-this.s)).attr("y1",d(pF.normal.pdf(this.s,0,this.s))+10/this.s).attr("x2",h(this.muS+this.s)).attr("y2",d(pF.normal.pdf(this.s,0,this.s))+10/this.s),Z.select(".cap-left").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muS-this.s)).attr("y1",d(pF.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS-this.s)).attr("y2",d(pF.normal.pdf(this.s,0,this.s))+10/this.s-5),Z.select(".cap-right").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.muS+this.s)).attr("y1",d(pF.normal.pdf(this.s,0,this.s))+10/this.s+5).attr("x2",h(this.muS+this.s)).attr("y2",d(pF.normal.pdf(this.s,0,this.s))+10/this.s-5);Z.select(".label").transition().duration(this.drag?0:u).ease(OO).attr("x",h(this.muS)).attr("y",d(pF.normal.pdf(this.s,0,this.s))+10/this.s-3).select(".value").tween("text",(t,e,r)=>{const n=r[e],i=NR(void 0!==n.s?n.s:this.s,this.s);return t=>{n.s=i(t),_C(n).text(hP(".3")(n.s))}}),X.exit().remove();const G=C.selectAll(".threshold").data(this.threshold?[{}]:[]),J=G.enter().append("g").classed("threshold",!0);J.append("line").classed("line",!0),J.append("line").classed("line touch",!0),J.append("circle").classed("handle touch",!0);const Q=J.merge(G).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Q.call(m).on("keydown",t=>{if(["ArrowRight","ArrowLeft"].includes(t.key)){let e=this.l;switch(t.key){case"ArrowRight":e+=t.shiftKey?.01:.1;break;case"ArrowLeft":e-=t.shiftKey?.01:.1}const r=mF.l2C(e,this.s);this.c=r<mF.c.MIN?mF.c.MIN:r>mF.c.MAX?mF.c.MAX:r,this.alignState(),this.sendEvent(),t.preventDefault()}}):Q.on("drag",null).on("keydown",null)),Q.select(".line").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),Q.select(".line.touch").transition().duration(this.drag?0:u).ease(OO).attr("x1",h(this.l)).attr("y1",d(0)).attr("x2",h(this.l)).attr("y2",d(.54)),Q.select(".handle").transition().duration(this.drag?0:u).ease(OO).attr("cx",h(this.l)).attr("cy",d(.54)),G.exit().remove();const tt=C.selectAll(".histogram").data(this.histogram?[{}]:[]),et=tt.enter().append("g").classed("histogram",!0).merge(tt);if(tt.exit().remove(),this.histogram){const t=function(){var t=qT,e=jT,r=ZT;function n(n){Array.isArray(n)||(n=Array.from(n));var i,a,s,o=n.length,l=new Array(o);for(i=0;i<o;++i)l[i]=t(n[i],i,n);var c=e(l),u=c[0],h=c[1],d=r(l,u,h);if(!Array.isArray(d)){const t=h,r=+d;if(e===jT&&([u,h]=KT(u,h,r)),(d=XT(u,h,r))[0]<=u&&(s=YT(u,h,r)),d[d.length-1]>=h)if(t>=h&&e===jT){const t=YT(u,h,r);isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else d.pop()}for(var f=d.length,p=0,m=f;d[p]<=u;)++p;for(;d[m-1]>h;)--m;(p||m<f)&&(d=d.slice(p,m),f=m-p);var g,b=new Array(f+1);for(i=0;i<=f;++i)(g=b[i]=[]).x0=i>0?d[i-1]:u,g.x1=i<f?d[i]:h;if(isFinite(s)){if(s>0)for(i=0;i<o;++i)null!=(a=l[i])&&u<=a&&a<=h&&b[Math.min(f,Math.floor((a-u)/s))].push(n[i]);else if(s<0)for(i=0;i<o;++i)if(null!=(a=l[i])&&u<=a&&a<=h){const t=Math.floor((u-a)*s);b[Math.min(f,t+(d[t]<=a))].push(n[i])}}else for(i=0;i<o;++i)null!=(a=l[i])&&u<=a&&a<=h&&b[DT(d,a,0,f)].push(n[i]);return b}return n.value=function(e){return arguments.length?(t="function"==typeof e?e:LT(e),n):t},n.domain=function(t){return arguments.length?(e="function"==typeof t?t:LT([t[0],t[1]]),n):e},n.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:LT(Array.isArray(t)?UT.call(t):t),n):r},n}().value(t=>t.trueEvidence).domain(h.domain()).thresholds(GT(this.binRange[0],this.binRange[1],this.binWidth)),e=t(this.trials);let r=-1,n=-1;for(let t=0;t<e.length;t+=1)for(let i=0;i<e[t].length;i+=1)e[t][i].binValue=e[t].x0,e[t][i].binCount=i,0===t&&(r=i),t===e.length-1&&(n=i);for(let t=0;t<this.trials.length;t+=1)this.trials[t].trueEvidence<this.binRange[0]&&(r+=1,this.trials[t].binCount=r,this.trials[t].binValue=e[0].x0),this.trials[t].trueEvidence>this.binRange[1]&&(n+=1,this.trials[t].binCount=n,this.trials[t].binValue=e[e.length-1].x0);const i=et.selectAll(".trial").data(this.trials,t=>t.trial),a=i.enter().append("rect").attr("stroke-width",3).attr("data-new-trial-ease-time",0).attr("stroke",this.getComputedStyleValue("---color-acc")).attr("fill",this.getComputedStyleValue("---color-acc-light")).merge(i).attr("class",t=>`trial ${t.outcome}`).attr("width",f-3).attr("height",f-3),s=a.filter(t=>t.new&&!t.paused);if(!s.empty()){const t=s.attr("data-new-trial-ease-time"),e=e=>tF().domain([0,1]).range([t,1])(e),r=e=>r=>tF().domain([e(t),1]).range([0,1])(e(r));s.transition("new").duration(e=>Math.floor((.75*e.duration+.25*e.wait)*(1-t))).ease(e).attr("data-new-trial-ease-time",1).attrTween("stroke",(t,e,n)=>{const i=n[e],a=xR(i.getAttribute("stroke"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc"));return t=>a(r(RO)(t))}).attrTween("fill",(t,e,n)=>{const i=n[e],a=xR(i.getAttribute("fill"),"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light"));return t=>a(r(RO)(t))}).attrTween("x",(t,e,n)=>{const i=NR(n[e].getAttribute("x"),h(t.binValue)+1.5);return t=>i(r(OO)(t))}).attrTween("y",(t,e,n)=>{const i=NR(n[e].getAttribute("y"),d(0)+1.5-(t.binCount+1)*f);return t=>i(r(RO)(t))}).on("end",(t,e,r)=>{r[e].removeAttribute("data-new-trial-ease-time"),t.new=!1,this.alignTrial(t),this.dispatchEvent(new CustomEvent("detectable-response",{detail:{stimulus:t.signal,response:t.response,outcome:t.outcome,h:this.h,m:this.m,fa:this.fa,cr:this.cr,nr:0},bubbles:!0}))})}const o=a.filter(t=>t.new&&t.paused);if(!o.empty()){const t=o.attr("data-new-trial-ease-time");o.transition().duration(u).ease(OO).attr("x",e=>NR(0,h(e.binValue)+1.5)(OO(t))).attr("y",e=>NR(0,d(0)+1.5-(e.binCount+1)*f)(RO(t))).attr("stroke",e=>xR(this.getComputedStyleValue("---color-acc"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}`):this.getComputedStyleValue("---color-acc"))(RO(t))).attr("fill",e=>xR(this.getComputedStyleValue("---color-acc-light"),"stimulus"===this.color?"present"===e.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${e.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${e.outcome}-light`):this.getComputedStyleValue("---color-acc-light"))(RO(t)))}a.filter(t=>!t.new).transition().duration(u).ease(OO).attr("x",t=>h(t.binValue)+1.5).attr("y",t=>d(0)+1.5-(t.binCount+1)*f).attr("stroke",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr"):this.getComputedStyleValue("---color-far"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}`):this.getComputedStyleValue("---color-acc")).attr("fill",t=>"stimulus"===this.color?"present"===t.signal?this.getComputedStyleValue("---color-hr-light"):this.getComputedStyleValue("---color-far-light"):"response"===this.color?this.getComputedStyleValue(`---color-${t.response}-light`):"outcome"===this.color||"all"===this.color?this.getComputedStyleValue(`---color-${t.outcome}-light`):this.getComputedStyleValue("---color-acc-light")),i.exit().transition().duration(u).ease(CO).attrTween("stroke",(t,e,r)=>{const n=r[e],i=xR(n.getAttribute("stroke"),this.getComputedStyleValue("---color-acc"));return t=>i(RO(t))}).attrTween("fill",(t,e,r)=>{const n=r[e],i=xR(n.getAttribute("fill"),this.getComputedStyleValue("---color-acc-light"));return t=>i(RO(t))}).attrTween("x",(t,e,r)=>{const n=NR(r[e].getAttribute("x"),0);return t=>n(RO(t))}).attrTween("y",(t,e,r)=>{const n=NR(r[e].getAttribute("y"),0);return t=>n(OO(t))}).remove()}const rt=k.append("g").classed("overlayer",!0),nt=$.select(".overlayer");rt.append("rect").classed("background",!0),nt.select(".background").attr("height",l).attr("width",c),this.drag=!1,this.firstUpdate=!1}pauseTrial(){const t=_C(this.renderRoot).select(".trial[data-new-trial-ease-time]");t.interrupt("new"),t.datum(t=>(t.paused=!0,t))}resumeTrial(){_C(this.renderRoot).select(".trial[data-new-trial-ease-time]").datum(t=>(t.paused=!1,t)),this.requestUpdate()}}customElements.define("sdt-model",cD);customElements.define("sdt-parameters",class extends uF{static get properties(){return{d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0}}}constructor(){super(),this.d=void 0,this.c=void 0,this.s=void 0}setSensitivity(t){this.d=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-d",{detail:{d:this.d},bubbles:!0}))}setBias(t){this.c=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-c",{detail:{c:this.c},bubbles:!0}))}setVariance(t){this.s=+t.target.value,this.dispatchEvent(new CustomEvent("sdt-parameters-s",{detail:{s:this.s},bubbles:!0}))}static get styles(){return[super.styles,AM`
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
      `]}render(){return uT`
      <div class="holder">
        ${null!=this.d?uT`<decidables-slider class="d"
            ?disabled=${!this.interactive}
            scale
            min=${mF.d.MIN}
            max=${mF.d.MAX}
            step=${mF.d.STEP}
            .value=${+this.d.toFixed(2)}
            @change=${this.setSensitivity.bind(this)}
            @input=${this.setSensitivity.bind(this)}
          ><div>Sensitivity<br><span class="math-var">d′</span></div></decidables-slider>`:uT``}
        ${null!=this.c?uT`<decidables-slider class="c"
            ?disabled=${!this.interactive}
            scale
            min=${mF.c.MIN}
            max=${mF.c.MAX}
            step=${mF.c.STEP}
            .value=${+this.c.toFixed(2)}
            @change=${this.setBias.bind(this)}
            @input=${this.setBias.bind(this)}
          ><div>Bias<br><span class="math-var">c</span></div></decidables-slider>`:uT``}
        ${null!=this.s?uT`<decidables-slider class="s"
            ?disabled=${!this.interactive}
            scale
            min=${mF.s.MIN}
            max=${mF.s.MAX}
            step=${mF.s.STEP}
            .value=${+this.s.toFixed(2)}
            @change=${this.setVariance.bind(this)}
            @input=${this.setVariance.bind(this)}
          ><div>Variance<br><span class="math-var">σ</span></div></decidables-slider>`:uT``}
      </div>`}});class uD extends(function(t){return class extends t{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,AM`
          :host {
            ---font-family-math: var(--font-family-math, "DejaVu Math", math);

            display: block;

            margin: 1rem;
          }

          /* Containing <div> */
          .holder {
            display: flex;

            flex-direction: row;

            justify-content: left;
          }

          /* MathML */
          .math-id {
            padding: 0.25rem;

            border-radius: var(---border-radius);
          }

          /* Different bounding box in Firefox */
          @supports (-moz-appearance: textfield) {
            .math-id {
              padding: 0 0.25rem;
            }

            /* Avoid excessive float above fraction line */
            /* Target mrow on top of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow:first-child:has(> mtable, > msup > mrow > mtable) {
              transform: translateY(0.375rem);
            }

            /* Avoid bounding box overlapping fraction line */
            /* Target mrow on top of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow:first-child:has(> mtext, > mi, > msup > mrow > mi) {
              transform: translateY(-0.125rem);
            }

            /* Avoid bounding box overlapping fraction line */
            /* Target mrow on bottom of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow + mrow:has(> mtext, > mi) {
              transform: translateY(0.25rem);
            }

          }

          math {
            font-family: var(---font-family-math);
          }

          mi {
            font-family: var(---font-family-symbol);
            font-style: italic;

            text-transform: none;
          }

          mn {
            font-family: var(---font-family-base);
          }

          mtext {
            font-family: var(---font-family-base);
          }

          mtable {
            display: table;
          }

          mtable mtable {
            display: inline-table;
          }

          mtd {
            padding: 0;
          }

          .layout > mtr > mtd {
            padding: 0.125rem;
            
            vertical-align: middle;          
          }

          .leftside {
            text-align: -webkit-right;
          }

          /* Different in Safari */
          @supports (-webkit-hyphens:none) {
            .leftside {
              text-align: right;
            }
          }

          .rightside {
            text-align: left;
          }

          /* Basic <var> w/modifiers */
          var {
            padding: 0 0.25rem;

            font-style: normal;

            border-radius: var(---border-radius);
          }

          /* Different bounding box in Safari */
          @supports (-webkit-hyphens:none) {
            var {
              padding: 0.25rem;
            }
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

          .sum-over {
            --decidables-spinner-input-width: 2rem;
          }
        `]}}}(uF)){static get styles(){return[super.styles,AM`
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
      `]}}customElements.define("sdt-equation-dc2far",class extends uD{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=mF.d.DEFAULT,this.c=mF.c.DEFAULT,this.s=mF.s.DEFAULT,this.alignState()}alignState(){this.far=mF.dC2Far(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2far-change",{detail:{d:this.d,c:this.c,s:this.s,far:this.far},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            ?disabled=${!this.interactive}
            step=${mF.d.STEP}
            .value=${this.d}
            @input=${this.dInput.bind(this)}
          >
            <var class="math-var">d′</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math c"
            ?disabled=${!this.interactive}
            step=${mF.c.STEP}
            .value=${this.c}
            @input=${this.cInput.bind(this)}
          >
            <var class="math-var">c</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min=${mF.s.MIN}
            step=${mF.s.STEP}
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.far.toFixed(3)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mi mathvariant="normal" class="math-id d">d′</mi>`,e=dT`<mi mathvariant="normal" class="math-id c">c</mi>`,r=dT`<mi mathvariant="normal" class="math-id s">σ</mi>`,n=dT`<mtext class="math-id far">False Alarm Rate</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${n}
            <mo>=</mo>
            <mi mathvariant="normal" class="math-greek phi">Φ</mi>
            <mrow>
              <mo symmetric="false">(</mo>
              <mrow>
                ${this.unequal?dT`
                    <msup>
                      <mrow>
                        <mo symmetric="true">[</mo>
                        <mfrac>
                          <mrow>
                            <mn>1</mn>
                            <mo>+</mo>
                            <msup>
                              <mrow>
                                ${r}
                              </mrow>
                              <mrow>
                                <mn>2</mn>
                              </mrow>
                            </msup>
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </mfrac>
                        <mo symmetric="true">]</mo>
                      </mrow>
                      <mfrac>
                        <mrow>
                          <mn>1</mn>
                        </mrow>
                        <mrow>
                          <mn>2</mn>
                        </mrow>
                      </mfrac>
                    </msup>
                    <mrow>
                      <mo symmetric="true">[</mo>
                      <mrow>
                        <mfrac>
                          <mrow>
                            <mo form="prefix">−</mo>
                            ${t}
                          </mrow>
                          <mrow>
                            <mn>1</mn>
                            <mo>+</mo>
                            ${r}
                          </mrow>
                        </mfrac>
                        <mo>−</mo>
                        ${e}
                      </mrow>
                      <mo symmetric="true">]</mo>
                    </mrow>
                  `:dT`
                    <mo form="prefix">−</mo>
                    <mfrac>
                      <mrow>
                        ${t}
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                    <mo>−</mo>
                    ${e}
                  `}
              </mrow>
              <mo symmetric="false">)</mo>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal?dT`\\text{False Alarm Rate} = \\Phi{\\left({\\left[\\frac{1 + \\sigma^2}{2}\\right]}^{\\frac{1}{2}}
                  {\\left[\\frac{-d'}{1 + \\sigma} - c\\right]}\\right)}`:dT`\\text{False Alarm Rate} = \\Phi(-\\frac{d'}{2} - c)`}
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal?dT`"False Alarm Rate" = Phi([(1 + sigma^2) / 2]^(1/2)[(-d') / (1 + sigma) - c])`:dT`"False Alarm Rate" = Phi(-(d') / 2 - c)`}
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-dc2hr",class extends uD{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.d=mF.d.DEFAULT,this.c=mF.c.DEFAULT,this.s=mF.s.DEFAULT,this.alignState()}alignState(){this.hr=mF.dC2Hr(this.d,this.c,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-dc2hr-change",{detail:{d:this.d,c:this.c,s:this.s,hr:this.hr},bubbles:!0}))}dInput(t){this.d=parseFloat(t.target.value),this.alignState(),this.sendEvent()}cInput(t){this.c=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            ?disabled=${!this.interactive}
            step=${mF.d.STEP}
            .value=${this.d}
            @input=${this.dInput.bind(this)}
          >
            <var class="math-var">d′</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math c"
            ?disabled=${!this.interactive}
            step=${mF.c.STEP}
            .value=${this.c}
            @input=${this.cInput.bind(this)}
          >
            <var class="math-var">c</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min=${mF.s.MIN}
            step=${mF.s.STEP}
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.hr.toFixed(3)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mi mathvariant="normal" class="math-id d">d′</mi>`,e=dT`<mi mathvariant="normal" class="math-id c">c</mi>`,r=dT`<mi mathvariant="normal" class="math-id s">σ</mi>`,n=dT`<mtext class="math-id hr">Hit Rate</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${n}
            <mo>=</mo>
            <mi mathvariant="normal" class="math-greek phi">Φ</mi>
            <mrow>
              <mo symmetric="false">(</mo>
              <mrow>
                ${this.unequal?dT`
                    <msup>
                      <mrow>
                        <mo symmetric="true">[</mo>
                        <mfrac>
                          <mrow>
                            <mn>1</mn>
                            <mo>+</mo>
                            <msup>
                              <mrow>
                                ${r}
                              </mrow>
                              <mrow>
                                <mn>2</mn>
                              </mrow>
                            </msup>
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </mfrac>
                        <mo symmetric="true">]</mo>
                      </mrow>
                      <mfrac>
                        <mrow>
                          <mn>1</mn>
                        </mrow>
                        <mrow>
                          <mn>2</mn>
                        </mrow>
                      </mfrac>
                    </msup>
                    <mrow>
                      <mo symmetric="true">[</mo>
                      <mrow>
                        <mfrac>
                          <mrow>
                            ${t}
                          </mrow>
                          <mrow>
                              <mn>1</mn>
                              <mo>+</mo>
                              ${r}
                          </mrow>
                        </mfrac>
                        <mo>−</mo>
                        <mfrac>
                          <mrow>
                            ${e}
                          </mrow>
                          <mrow>
                            ${r}
                          </mrow>
                        </mfrac>
                      </mrow>
                      <mo symmetric="true">]</mo>
                    </mrow>
                  `:dT`
                    <mfrac>
                      <mrow>
                        ${t}
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                    <mo>−</mo>
                    ${e}
                  `}
              </mrow>
              <mo symmetric="false">)</mo>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal?dT`\\text{Hit Rate} = \\Phi{\\left({\\left[\\frac{1 + \\sigma^2}{2}\\right]}^{\\frac{1}{2}}
                  {\\left[\\frac{d'}{1 + \\sigma} - \\frac{c}{\\sigma}\\right]}\\right)}`:dT`\\text{Hit Rate} = \\Phi(\\frac{d'}{2} - c)`}
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal?dT`"Hit Rate" = Phi([(1 + sigma^2) / 2]^(1/2)[(d') / (1 + sigma) - c / sigma])`:dT`"Hit Rate" = Phi((d') / 2 - c)`}
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-facr2far",class extends uD{static get properties(){return{fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.fa=0,this.cr=0,this.alignState()}alignState(){this.far=mF.faCr2Far(this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-facr2far-change",{detail:{fa:this.fa,cr:this.cr,far:this.far},bubbles:!0}))}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fa"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.fa}
            @input=${this.faInput.bind(this)}
          >
            <var>False Alarms</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math cr"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.cr}
            @input=${this.crInput.bind(this)}
          >
            <var>Correct Rejections</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.far.toFixed(3)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id fa">False Alarms</mtext>`,e=dT`<mtext class="math-id cr">Correct Rejections</mtext>`,r=dT`<mtext class="math-id far">False Alarm Rate</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${r}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${t}
              </mrow>
              <mrow>
                ${t}
                <mo>+</mo>
                ${e}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{False Alarm Rate} = \\frac{\\text{False Alarms}}
              {\\text{False Alarms} + \\text{Correct Rejections}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "False Alarm Rate" = "False Alarms" / ("False Alarms" + "Correct Rejections")
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-hfa2ppv",class extends uD{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},ppv:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.fa=0,this.alignState()}alignState(){this.ppv=mF.hFa2Ppv(this.h,this.fa)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hfa2ppv-change",{detail:{h:this.h,fa:this.fa,ppv:this.ppv},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math h"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.h}
            @input=${this.hInput.bind(this)}
          >
            <var>Hits</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fa"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.fa}
            @input=${this.faInput.bind(this)}
          >
            <var>False Alarms</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math ppv"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.ppv.toFixed(3)}
          >
            <var>Positive Predictive Value</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id h">Hits</mtext>`,e=dT`<mtext class="math-id fa">False Alarms</mtext>`,r=dT`<mtext class="math-id ppv">Positive Predictive Value</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${r}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${t}
              </mrow>
              <mrow>
                ${t}
                <mo>+</mo>
                ${e}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Positive Predictive Value} = \\frac{\\text{Hits}}
              {\\text{Hits} + \\text{False Alarms}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Positive Predictive Value" = "Hits" / ("Hits" + "False Alarms")
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-hm2hr",class extends uD{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},hr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.alignState()}alignState(){this.hr=mF.hM2Hr(this.h,this.m)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hm2hr-change",{detail:{h:this.h,m:this.m,hr:this.hr},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math h"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.h}
            @input=${this.hInput.bind(this)}
          >
            <var>Hits</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math m"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.m}
            @input=${this.mInput.bind(this)}
          >
            <var>Misses</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.hr.toFixed(3)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id h">Hits</mtext>`,e=dT`<mtext class="math-id m">Misses</mtext>`,r=dT`<mtext class="math-id hr">Hit Rate</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${r}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${t}
              </mrow>
              <mrow>
                ${t}
                <mo>+</mo>
                ${e}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Hit Rate} = \\frac{\\text{Hits}}{\\text{Hits} + \\text{Misses}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Hit Rate" = "Hits" / ("Hits" + "Misses")
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-hmfacr2acc",class extends uD{static get properties(){return{h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},acc:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.alignState()}alignState(){this.acc=mF.hMFaCr2Acc(this.h,this.m,this.fa,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hmfacr2acc-change",{detail:{h:this.h,m:this.m,fa:this.fa,cr:this.cr,acc:this.acc},bubbles:!0}))}hInput(t){this.h=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}faInput(t){this.fa=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n,i;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math h"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.h}
            @input=${this.hInput.bind(this)}
          >
            <var>Hits</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math m"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.m}
            @input=${this.mInput.bind(this)}
          >
            <var>Misses</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fa"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.fa}
            @input=${this.faInput.bind(this)}
          >
            <var>False Alarms</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math cr"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.cr}
            @input=${this.crInput.bind(this)}
          >
            <var>Correct Rejections</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,i=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math acc"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.acc.toFixed(3)}
          >
            <var>Accuracy</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id h">Hits</mtext>`,e=dT`<mtext class="math-id m">Misses</mtext>`,r=dT`<mtext class="math-id fa">False Alarms</mtext>`,n=dT`<mtext class="math-id cr">Correct Rejections</mtext>`,i=dT`<mtext class="math-id acc">Accuracy</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${i}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${t}
                <mo>+</mo>
                ${n}
              </mrow>
              <mrow>
                ${t}
                <mo>+</mo>
                ${n}
                <mo>+</mo>
                ${e}
                <mo>+</mo>
                ${r}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Accuracy} = \\frac{\\text{Hits} + \\text{Correct Rejections}}
              {\\text{Hits} + \\text{Correct Rejections} + \\text{Misses} + \\text{False Alarms}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Accuracy" = ("Hits" + "Correct Rejections") / 
              ("Hits" + "Correct Rejections" + "Misses" + "False Alarms")
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-hrfar2c",class extends uD{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},c:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=mF.s.DEFAULT,this.alignState()}alignState(){this.c=mF.hrFar2C(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2c-change",{detail:{hr:this.hr,far:this.far,s:this.s,c:this.c},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.hr}
            @input=${this.hrInput.bind(this)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.far}
            @input=${this.farInput.bind(this)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min="0"
            step=".001"
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math c"
            disabled
            step=${mF.c.MIN}
            .value=${+this.c.toFixed(3)}
          >
            <var class="math-var">c</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id hr">Hit Rate</mtext>`,e=dT`<mtext class="math-id far">False Alarm Rate</mtext>`,r=dT`<mi mathvariant="normal" class="math-id s">σ</mi>`,n=dT`<mi mathvariant="normal" class="math-id c">c</mi>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${n}
            <mo>=</mo>
            ${this.unequal?dT`
                <msup>
                  <mrow>
                    <mo symmetric="false">(</mo>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                        <mo>+</mo>
                        <msup>
                          <mrow>
                            ${r}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                    <mo symmetric="false">)</mo>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                  </mrow>
                </msup>
                <mrow>
                  <mo symmetric="false">(</mo>
                  <mfrac>
                    <mrow>
                      <mo form="prefix">−</mo>
                      ${r}
                    </mrow>
                    <mrow>
                      <mn>1</mn>
                      <mo>+</mo>
                      ${r}
                    </mrow>
                  </mfrac>
                  <mo symmetric="false">)</mo>
                </mrow>
                <mrow>
                  <mo>[</mo>
                  <mrow>
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      ${t}
                      <mo>)</mo>
                    </mrow>
                    <mo>−</mo>
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      <mrow>
                        ${e}
                      </mrow>
                      <mo>)</mo>
                    </mrow>
                  </mrow>
                  <mo>]</mo>
                </mrow>
              `:dT`
                <mfrac>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mo>[</mo>
                    <mrow>
                      <msup>
                        <mrow>
                          <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                        </mrow>
                        <mrow>
                          <mn>−1</mn>
                        </mrow>
                      </msup>
                      <mrow>
                        <mo>(</mo>
                        <mrow>
                          ${t}
                        </mrow>
                        <mo>)</mo>
                      </mrow>
                      <mo>−</mo>
                      <msup>
                        <mrow>
                          <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                        </mrow>
                        <mrow>
                          <mn>−1</mn>
                        </mrow>
                      </msup>
                      <mrow>
                        <mo>(</mo>
                        <mrow>
                          ${e}
                        </mrow>
                        <mo>)</mo>
                      </mrow>
                    </mrow>
                    <mo>]</mo>
                  </mrow>
                  <mrow>
                    <mn>2</mn>
                  </mrow>
                </mfrac>
              `}
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal?dT`d' = \\left(\\frac{1 + \\sigma^2}{2}\\right)^{-\\frac{1}{2}}
                \\left(\\frac{-\\sigma}{1 + \\sigma}\\right)
                \\left[\\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate}) \\right]`:dT`d' = \\frac{-\\left[\\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate})\\right]}{2}`}
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal?dT`d' = ((1 + sigma^2) / 2)^(-1/2)
                (sigma / (1 + sigma))
                [Phi^(-1)("Hit Rate") - Phi^(-1)("False Alarm Rate")]`:dT`d' = (-[Phi^-1("Hit Rate") - Phi^-1("False Alarm Rate")]) / 2`}
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-hrfar2d",class extends uD{static get properties(){return{unequal:{attribute:"unequal",type:Boolean,reflect:!0},hr:{attribute:"hit-rate",type:Number,reflect:!0},far:{attribute:"false-alarm-rate",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},d:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.unequal=!1,this.hr=0,this.far=0,this.s=mF.s.DEFAULT,this.alignState()}alignState(){this.d=mF.hrFar2D(this.hr,this.far,this.s)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-hrfar2d-change",{detail:{hr:this.hr,far:this.far,s:this.s,d:this.d},bubbles:!0}))}hrInput(t){this.hr=parseFloat(t.target.value),this.alignState(),this.sendEvent()}farInput(t){this.far=parseFloat(t.target.value),this.alignState(),this.sendEvent()}sInput(t){this.s=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,n;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.hr}
            @input=${this.hrInput.bind(this)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.far}
            @input=${this.farInput.bind(this)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min="0"
            step=".001"
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            disabled
            step=${mF.d.STEP}
            .value=${+this.d.toFixed(3)}
          >
            <var class="math-var">d′</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id hr">Hit Rate</mtext>`,e=dT`<mtext class="math-id far">False Alarm Rate</mtext>`,r=dT`<mi mathvariant="normal" class="math-id s">σ</mi>`,n=dT`<mi mathvariant="normal" class="math-id d">d′</mi>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${n}
            <mo>=</mo>
            ${this.unequal?dT`
                <msup>
                  <mrow>
                    <mo symmetric="false">(</mo>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                        <mo>+</mo>
                        <msup>
                          <mrow>
                            ${r}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                    <mo symmetric="false">)</mo>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                  </mrow>
                </msup>
                <mrow>
                  <mo>[</mo>
                  <mrow>
                    ${r}
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      ${t}
                      <mo>)</mo>
                    </mrow>
                    <mo>−</mo>
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      <mrow>
                        ${e}
                      </mrow>
                      <mo>)</mo>
                    </mrow>
                  </mrow>
                  <mo>]</mo>
                </mrow>
              `:dT`
                <msup>
                  <mrow>
                    <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                  </mrow>
                  <mrow>
                    <mn>−1</mn>
                  </mrow>
                </msup>
                <mrow>
                  <mo>(</mo>
                  ${t}
                  <mo>)</mo>
                </mrow>
                <mo>−</mo>
                <msup>
                  <mrow>
                    <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                  </mrow>
                  <mrow>
                    <mn>−1</mn>
                  </mrow>
                </msup>
                <mrow>
                  <mo>(</mo>
                  <mrow>
                    ${e}
                  </mrow>
                  <mo>)</mo>
                </mrow>
              `}
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal?dT`d' = \\left(\\frac{1 + \\sigma^2}{2}\\right)^{-\\frac{1}{2}}
                \\left[\\sigma \\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate}) \\right]`:dT`d' = \\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate})`}
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal?dT`d' = ((1 + sigma^2) / 2)^(-1/2)
                [sigma Phi^(-1)("Hit Rate") - Phi^(-1)("False Alarm Rate")]`:dT`d' = Phi^-1("Hit Rate") - Phi^-1("False Alarm Rate")`}
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("sdt-equation-mcr2fomr",class extends uD{static get properties(){return{m:{attribute:"misses",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},fomr:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.m=0,this.cr=0,this.alignState()}alignState(){this.fomr=mF.mCr2Fomr(this.m,this.cr)}sendEvent(){this.dispatchEvent(new CustomEvent("sdt-equation-mcr2fomr-change",{detail:{m:this.m,cr:this.cr,fomr:this.fomr},bubbles:!0}))}mInput(t){this.m=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}crInput(t){this.cr=parseInt(t.target.value,10),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r;return this.numeric?(t=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math m"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.m}
            @input=${this.mInput.bind(this)}
          >
            <var>Misses</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math cr"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.cr}
            @input=${this.crInput.bind(this)}
          >
            <var>Correct Rejections</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=dT`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fomr"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.fomr.toFixed(3)}
          >
            <var>False Omission Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=dT`<mtext class="math-id m">Misses</mtext>`,e=dT`<mtext class="math-id cr">Correct Rejections</mtext>`,r=dT`<mtext class="math-id fomr">False Omission Rate</mtext>`),uT`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${r}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${t}
              </mrow>
              <mrow>
                ${t}
                <mo>+</mo>
                ${e}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{False Omission Rate} = \\frac{\\text{Misses}}
              {\\text{Misses} + \\text{Correct Rejections}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "False Omission Rate" = "Misses" / ("Misses" + "Correct Rejections")
          </annotation>
        </semantics>
      </math>
    </div>`}});class hD extends(function(t){return class extends t{static get styles(){return[super.styles,AM`
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
        `]}render(){return uT`
        <div class="holder">
          <div class="body">
            <slot>Empty!</slot>
          </div>
        </div>`}}}(uF)){static get styles(){return[super.styles,AM`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(detectable-control) + ::slotted(rdk-task),
           .body ::slotted(rdk-task) + ::slotted(detectable-response) { */
        .body ::slotted(rdk-task),
        .body ::slotted(detectable-response) {
          margin-left: 0;
        }
      `]}}customElements.define("sdt-example",hD);customElements.define("sdt-example-double-interactive",class extends hD{connectedCallback(){super.connectedCallback(),this.one={},this.one.h=95,this.one.m=5,this.one.fa=35,this.one.cr=65,this.one.hr=mF.hM2Hr(this.one.h,this.one.m),this.one.far=mF.faCr2Far(this.one.fa,this.one.cr),this.one.d=mF.hrFar2D(this.one.hr,this.one.far),this.one.c=mF.hrFar2C(this.one.hr,this.one.far),this.two={},this.two.h=40,this.two.m=60,this.two.fa=20,this.two.cr=80,this.two.hr=mF.hM2Hr(this.two.h,this.two.m),this.two.far=mF.faCr2Far(this.two.fa,this.two.cr),this.two.d=mF.hrFar2D(this.two.hr,this.two.far),this.two.c=mF.hrFar2C(this.two.hr,this.two.far),this.detectableTableOne=this.querySelector("detectable-table:nth-of-type(1)"),this.detectableTableTwo=this.querySelector("detectable-table:nth-of-type(2)"),this.rocSpace=this.querySelector("roc-space"),this.sdtModelOne=this.querySelector("sdt-model:nth-of-type(1)"),this.sdtModelTwo=this.querySelector("sdt-model:nth-of-type(2)"),this.detectableTableOne&&(this.detectableTableOne.h=this.one.h,this.detectableTableOne.m=this.one.m,this.detectableTableOne.fa=this.one.fa,this.detectableTableOne.cr=this.one.cr,this.detectableTableOne.addEventListener("detectable-table-change",t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"default","↑"),this.sdtModelOne&&(this.sdtModelOne.d=mF.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelOne.c=mF.hrFar2C(t.detail.hr,t.detail.far))})),this.detectableTableTwo&&(this.detectableTableTwo.h=this.two.h,this.detectableTableTwo.m=this.two.m,this.detectableTableTwo.fa=this.two.fa,this.detectableTableTwo.cr=this.two.cr,this.detectableTableTwo.addEventListener("detectable-table-change",t=>{this.rocSpace&&this.rocSpace.set(t.detail.hr,t.detail.far,"two","↓"),this.sdtModelTwo&&(this.sdtModelTwo.d=mF.hrFar2D(t.detail.hr,t.detail.far),this.sdtModelTwo.c=mF.hrFar2C(t.detail.hr,t.detail.far))})),this.rocSpace&&(this.rocSpace.set(this.one.hr,this.one.far,"default","↑"),this.rocSpace.set(this.two.hr,this.two.far,"two","↓"),this.rocSpace.addEventListener("roc-point-change",t=>{if("default"===t.detail.name&&this.sdtModelOne?(this.sdtModelOne.d=t.detail.d,this.sdtModelOne.c=t.detail.c):"two"===t.detail.name&&this.sdtModelTwo&&(this.sdtModelTwo.d=t.detail.d,this.sdtModelTwo.c=t.detail.c),"default"===t.detail.name&&this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),i=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=i}else if("two"===t.detail.name&&this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),i=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=i}})),this.sdtModelOne&&(this.sdtModelOne.d=this.one.d,this.sdtModelOne.c=this.one.c,this.sdtModelOne.addEventListener("sdt-model-change",t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"default","↑"),this.detectableTableOne){const e=Math.round((this.detectableTableOne.h+this.detectableTableOne.m)*t.detail.hr),r=this.detectableTableOne.h+this.detectableTableOne.m-e,n=Math.round((this.detectableTableOne.fa+this.detectableTableOne.cr)*t.detail.far),i=this.detectableTableOne.fa+this.detectableTableOne.cr-n;this.detectableTableOne.h=e,this.detectableTableOne.m=r,this.detectableTableOne.fa=n,this.detectableTableOne.cr=i}})),this.sdtModelTwo&&(this.sdtModelTwo.d=this.two.d,this.sdtModelTwo.c=this.two.c,this.sdtModelTwo.addEventListener("sdt-model-change",t=>{if(this.rocSpace&&this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"two","↓"),this.detectableTableTwo){const e=Math.round((this.detectableTableTwo.h+this.detectableTableTwo.m)*t.detail.hr),r=this.detectableTableTwo.h+this.detectableTableTwo.m-e,n=Math.round((this.detectableTableTwo.fa+this.detectableTableTwo.cr)*t.detail.far),i=this.detectableTableTwo.fa+this.detectableTableTwo.cr-n;this.detectableTableTwo.h=e,this.detectableTableTwo.m=r,this.detectableTableTwo.fa=n,this.detectableTableTwo.cr=i}}))}});customElements.define("sdt-example-human",class extends hD{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Number,reflect:!0},h:{attribute:!1,type:Number,reflect:!1},m:{attribute:!1,type:Number,reflect:!1},fa:{attribute:!1,type:Number,reflect:!1},cr:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},far:{attribute:!1,type:Number,reflect:!1},d:{attribute:!1,type:Number,reflect:!1},c:{attribute:!1,type:Number,reflect:!1},s:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.payoff=0,this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.d=0,this.c=0,this.s=mF.s.DEFAULT,this.count=0,this.detectableControl=null,this.detectableResponse=null,this.detectableTable=null,this.rdkTask=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null}connectedCallback(){super.connectedCallback(),this.count=1,this.detectableControl=this.querySelector("detectable-control"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rdkTask=this.querySelector("rdk-task"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.rocSpace&&this.rocSpace.hasAttribute("history")&&this.rocSpace.set(.5,.5,"default",this.count),this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-trials",t=>{this.trials=t.detail.trials}),this.detectableControl.addEventListener("detectable-control-duration",t=>{this.duration=t.detail.duration}),this.detectableControl.addEventListener("detectable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.detectableControl.addEventListener("detectable-control-payoff",t=>{this.payoff=t.detail.payoff}),this.detectableControl.addEventListener("detectable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.detectableControl.addEventListener("detectable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.detectableControl.addEventListener("detectable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.d=0,this.c=0,this.rocSpace&&this.rocSpace.hasAttribute("history")&&(this.count+=1,this.rocSpace.set(.5,.5,`point${this.count}`,this.count))})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.detectableResponse&&this.detectableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.detectableControl&&this.detectableControl.complete()})),this.detectableResponse&&this.detectableResponse.addEventListener("detectable-response",t=>{this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=mF.hM2Hr(this.h+1,this.m+1),this.far=mF.faCr2Far(this.fa+1,this.cr+1),this.d=mF.hrFar2D(this.hr,this.far),this.c=mF.hrFar2C(this.hr,this.far),this.rocSpace&&this.rocSpace.hasAttribute("history")&&this.rocSpace.set(this.hr,this.far,1===this.count?"default":`point${this.count}`,this.count)}),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.trials=null!=this.detectableControl.trials?this.trials:void 0,this.detectableControl.duration=null!=this.detectableControl.duration?this.duration:void 0,this.detectableControl.coherence=null!=this.detectableControl.coherence?this.coherence:void 0,this.detectableControl.payoff=null!=this.detectableControl.payoff?this.payoff:void 0),this.detectableResponse&&(this.detectableResponse.trialTotal=this.trials,this.detectableResponse.hPayoff=this.payoff,this.detectableResponse.mPayoff=0-this.payoff,this.detectableResponse.faPayoff=0-(100-this.payoff),this.detectableResponse.crPayoff=100-this.payoff),this.detectableTable&&(this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa,this.detectableTable.hPayoff=this.payoff,this.detectableTable.mPayoff=0-this.payoff,this.detectableTable.faPayoff=0-(100-this.payoff),this.detectableTable.crPayoff=100-this.payoff),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration===1/0?0:this.duration,this.rdkTask.iti=this.duration===1/0?0:this.duration,this.rdkTask.coherence=this.coherence),this.rocSpace&&!this.rocSpace.hasAttribute("history")&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});customElements.define("sdt-example-interactive",class extends hD{static get properties(){return{color:{attribute:"color",type:String,reflect:!0},zRoc:{attribute:"z-roc",type:Boolean,reflect:!0},h:{attribute:"hits",type:Number,reflect:!0},m:{attribute:"misses",type:Number,reflect:!0},fa:{attribute:"false-alarms",type:Number,reflect:!0},cr:{attribute:"correct-rejections",type:Number,reflect:!0},hr:{attribute:"hr",type:Number,reflect:!0},far:{attribute:"far",type:Number,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0}}}constructor(){super(),this.color="all",this.zRoc=!1,this.h=void 0,this.m=void 0,this.fa=void 0,this.cr=void 0,this.hr=void 0,this.far=void 0,this.d=mF.d.DEFAULT,this.c=mF.c.DEFAULT,this.s=mF.s.DEFAULT,this.detectableControl=null,this.detectableTable=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null,this.rocSpaces=[]}connectedCallback(){if(super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.detectableTable=this.querySelector("detectable-table"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.rocSpaces=this.querySelectorAll("roc-space"),void 0!==this.h&&void 0!==this.m&&void 0!==this.fa&&void 0!==this.cr)this.hr=mF.hM2Hr(this.h,this.m),this.far=mF.faCr2Far(this.fa,this.cr),this.d=mF.hrFar2D(this.hr,this.far,this.s),this.c=mF.hrFar2C(this.hr,this.far,this.s);else if(void 0!==this.hr&&void 0!==this.far)this.d=mF.hrFar2D(this.hr,this.far,this.s),this.c=mF.hrFar2C(this.hr,this.far,this.s);else if(void 0!==this.d&&void 0!==this.c){this.hr=mF.dC2Hr(this.d,this.c,this.s),this.far=mF.dC2Far(this.d,this.c,this.s);const t=100;this.h=Math.round(t*this.hr),this.m=t-this.h,this.fa=Math.round(t*this.far),this.cr=t-this.fa}this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-color",t=>{this.color=t.detail.color}),this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.zRoc=t.detail.zRoc})),this.detectableTable&&this.detectableTable.addEventListener("detectable-table-change",t=>{this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.far=t.detail.far,this.hr=t.detail.hr,this.d=mF.hrFar2D(this.hr,this.far,this.s),this.c=mF.hrFar2C(this.hr,this.far,this.s)}),this.rocSpace&&this.rocSpace.addEventListener("roc-point-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.hr=t.detail.hr,this.far=t.detail.far;const e=Math.round((this.h+this.m)*this.hr),r=this.h+this.m-e,n=Math.round((this.fa+this.cr)*this.far),i=this.fa+this.cr-n;this.h=e,this.m=r,this.fa=n,this.cr=i}),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.hr=t.detail.hr,this.far=t.detail.far;const e=Math.round((this.h+this.m)*this.hr),r=this.h+this.m-e,n=Math.round((this.fa+this.cr)*this.far),i=this.fa+this.cr-n;this.h=e,this.m=r,this.fa=n,this.cr=i}),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.color=null!=this.detectableControl.color?this.color:void 0,this.detectableControl.zRoc=null!=this.detectableControl.zRoc?this.zRoc:void 0),this.detectableTable&&(this.detectableTable.color=this.color,this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa),this.rocSpace&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.color=this.color,this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.rocSpaces.length>0&&this.rocSpaces.forEach(t=>{t.zRoc=this.zRoc,t.setWithSDT(this.d,this.c,"default","",this.s)}),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});customElements.define("sdt-example-model",class extends hD{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},d:{attribute:"d",type:Number,reflect:!0},c:{attribute:"c",type:Number,reflect:!0},s:{attribute:"s",type:Number,reflect:!0},h:{attribute:!1,type:Number,reflect:!1},m:{attribute:!1,type:Number,reflect:!1},fa:{attribute:!1,type:Number,reflect:!1},cr:{attribute:!1,type:Number,reflect:!1},hr:{attribute:!1,type:Number,reflect:!1},far:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.color="all",this.d=mF.s.DEFAULT,this.c=mF.s.DEFAULT,this.s=mF.s.DEFAULT,this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5,this.detectableControl=null,this.detectableResponse=null,this.detectableTable=null,this.rdkTask=null,this.rocSpace=null,this.sdtModel=null,this.sdtParameters=null}connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.detectableResponse=this.querySelector("detectable-response"),this.detectableTable=this.querySelector("detectable-table"),this.rdkTask=this.querySelector("rdk-task"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.sdtParameters=this.querySelector("sdt-parameters"),this.detectableControl&&(this.detectableControl.addEventListener("detectable-control-trials",t=>{this.trials=t.detail.trials}),this.detectableControl.addEventListener("detectable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.detectableControl.addEventListener("detectable-control-duration",t=>{this.duration=t.detail.duration}),this.detectableControl.addEventListener("detectable-control-color",t=>{this.color=t.detail.color}),this.detectableControl.addEventListener("detectable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.sdtModel&&this.sdtModel.resumeTrial()}),this.detectableControl.addEventListener("detectable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.sdtModel&&this.sdtModel.pauseTrial()}),this.detectableControl.addEventListener("detectable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.detectableResponse&&this.detectableResponse.reset(),this.sdtModel&&this.sdtModel.reset(),this.h=0,this.m=0,this.fa=0,this.cr=0,this.hr=.5,this.far=.5})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.detectableResponse&&this.detectableResponse.start(t.detail.signal,t.detail.trial),this.sdtModel&&this.sdtModel.trial(t.detail.trial,t.detail.signal,t.detail.duration,t.detail.wait,t.detail.iti)}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.detectableResponse&&this.detectableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.detectableControl&&this.detectableControl.complete()})),this.sdtModel&&(this.sdtModel.addEventListener("detectable-response",t=>{this.detectableResponse&&this.detectableResponse.responded(t.detail.response),this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=mF.hM2Hr(this.h,this.m),this.far=mF.faCr2Far(this.fa,this.cr)}),this.sdtModel.addEventListener("sdt-model-change",t=>{this.d=t.detail.d,this.c=t.detail.c,this.s=t.detail.s,this.h=t.detail.h,this.m=t.detail.m,this.fa=t.detail.fa,this.cr=t.detail.cr,this.hr=mF.hM2Hr(this.h,this.m),this.far=mF.faCr2Far(this.fa,this.cr)})),this.sdtParameters&&(this.sdtParameters.addEventListener("sdt-parameters-d",t=>{this.d=t.detail.d}),this.sdtParameters.addEventListener("sdt-parameters-c",t=>{this.c=t.detail.c}),this.sdtParameters.addEventListener("sdt-parameters-s",t=>{this.s=t.detail.s}))}update(t){super.update(t),this.detectableControl&&(this.detectableControl.trials=void 0!==this.detectableControl.trials?this.trials:void 0,this.detectableControl.coherence=void 0!==this.detectableControl.coherence?this.coherence:void 0,this.detectableControl.duration=void 0!==this.detectableControl.duration?this.duration:void 0,this.detectableControl.color=void 0!==this.detectableControl.color?this.color:void 0),this.detectableResponse&&(this.detectableResponse.trialTotal=this.trials),this.detectableTable&&(this.detectableTable.color=this.color,this.detectableTable.h=this.h,this.detectableTable.m=this.m,this.detectableTable.cr=this.cr,this.detectableTable.fa=this.fa),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.rocSpace&&(this.rocSpace.hr=this.hr,this.rocSpace.far=this.far),this.sdtModel&&(this.sdtModel.color=this.color,this.sdtModel.d=this.d,this.sdtModel.c=this.c,this.sdtModel.s=this.s),this.sdtParameters&&(this.sdtParameters.d=null!=this.sdtParameters.d?this.d:void 0,this.sdtParameters.c=null!=this.sdtParameters.c?this.c:void 0,this.sdtParameters.s=null!=this.sdtParameters.s?this.s:void 0)}});const dD={fromAttribute:t=>t.split(/\s+/).map(t=>Number.parseFloat(t)),toAttribute:t=>t.length?t.map(t=>t.toFixed(3)).join(" "):null};customElements.define("sdt-example-multiple",class extends hD{static get properties(){return{variable:{attribute:"variable",type:String,reflect:!0},values:{attribute:"values",converter:dD,reflect:!0}}}constructor(){super(),this.variables=["d","c"],this.variable="d",this.values=[0,1]}connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.rocSpace.zRoc=t.detail.zRoc}),this.rocSpace&&(this.rocSpace.setWithSDT(1,0,"default","",1),"d"===this.variable?this.values.forEach((t,e)=>{this.rocSpace.setWithSDT(t,this.sdtModel.c,`point${e}`,e+1,this.sdtModel.s)}):"c"===this.variable&&this.values.forEach((t,e)=>{this.rocSpace.setWithSDT(this.sdtModel.d,t,`point${e}`,e+1,this.sdtModel.s)})),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.rocSpace&&(this.rocSpace.setWithSDT(t.detail.d,t.detail.c,"default","",t.detail.s),"d"===this.variable?this.values.forEach((e,r)=>{this.rocSpace.setWithSDT(e,t.detail.c,`point${r}`,r+1,t.detail.s)}):"c"===this.variable&&this.values.forEach((e,r)=>{this.rocSpace.setWithSDT(t.detail.d,e,`point${r}`,r+1,t.detail.s)}))})}});customElements.define("sdt-example-unequal",class extends hD{connectedCallback(){super.connectedCallback(),this.detectableControl=this.querySelector("detectable-control"),this.rocSpace=this.querySelector("roc-space"),this.sdtModel=this.querySelector("sdt-model"),this.detectableControl&&this.detectableControl.addEventListener("detectable-control-z-roc",t=>{this.rocSpace.zRoc=t.detail.zRoc}),this.rocSpace&&(this.rocSpace.setWithSDT(1,0,"default","",1),GT(-1.5,1.6,.5).forEach((t,e)=>{this.rocSpace.setWithSDT(this.sdtModel.d,t,`point${e}`,"",this.sdtModel.s)})),this.sdtModel&&this.sdtModel.addEventListener("sdt-model-change",t=>{this.rocSpace&&GT(-1.5,1.6,.5).forEach((e,r)=>{this.rocSpace.setWithSDT(t.detail.d,e,`point${r}`,"",t.detail.s)})})}});
//# sourceMappingURL=page.js.map
