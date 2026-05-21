var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math===Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||e("object"==typeof r&&r)||function(){return this}()||Function("return this")(),i=r,n=function(t){try{return!!t()}catch(t){return!0}},a=!n(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),s=a,o=Function.prototype,c=o.call,l=s&&o.bind.bind(c,c),u=s?l:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},h=d,g=TypeError,p=function(t){if(h(t))throw new g("Can't call method on "+t);return t},m=p,f=Object,b=function(t){return f(m(t))},y=b,v=u({}.hasOwnProperty),U=Object.hasOwn||function(t,e){return v(y(t),e)},Q={},B={exports:{}},F=r,I=Object.defineProperty,C=function(t,e){try{I(F,t,{value:e,configurable:!0,writable:!0})}catch(r){F[t]=e}return e},A=r,x=C,E="__core-js_shared__",w=B.exports=A[E]||x(E,{});(w.versions||(w.versions=[])).push({version:"3.49.0",mode:"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"});var S,R,N=B.exports,L=N,M=function(t,e){return L[t]||(L[t]=e||{})},D=u,k=0,T=Math.random(),V=D(1.1.toString),H=function(t){return"Symbol("+(void 0===t?"":t)+")_"+V(++k+T,36)},$=r.navigator,_=$&&$.userAgent,z=_?String(_):"",G=r,Y=z,J=G.process,X=G.Deno,W=J&&J.versions||X&&X.version,O=W&&W.v8;O&&(R=(S=O.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!R&&Y&&(!(S=Y.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=Y.match(/Chrome\/(\d+)/))&&(R=+S[1]);var K=R,P=K,Z=n,j=r.String,q=!!Object.getOwnPropertySymbols&&!Z(function(){var t=Symbol("symbol detection");return!j(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&P&&P<41}),tt=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=M,rt=U,it=H,nt=q,at=tt,st=r.Symbol,ot=et("wks"),ct=at?st.for||st:st&&st.withoutSetter||it,lt=function(t){return rt(ot,t)||(ot[t]=nt&&rt(st,t)?st[t]:ct("Symbol."+t)),ot[t]},ut=lt;Q.f=ut;var dt={},ht=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),gt="object"==typeof document&&document.all,pt=void 0===gt&&void 0!==gt?function(t){return"function"==typeof t||t===gt}:function(t){return"function"==typeof t},mt=pt,ft=function(t){return"object"==typeof t?null!==t:mt(t)},bt=ft,yt=r.document,vt=bt(yt)&&bt(yt.createElement),Ut=function(t){return vt?yt.createElement(t):{}},Qt=Ut,Bt=!ht&&!n(function(){return 7!==Object.defineProperty(Qt("div"),"a",{get:function(){return 7}}).a}),Ft=ht&&n(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),It=ft,Ct=String,At=TypeError,xt=function(t){if(It(t))return t;throw new At(Ct(t)+" is not an object")},Et=a,wt=Function.prototype.call,St=Et?wt.bind(wt):function(){return wt.apply(wt,arguments)},Rt=r,Nt=pt,Lt=function(t,e){return arguments.length<2?(r=Rt[t],Nt(r)?r:void 0):Rt[t]&&Rt[t][e];var r},Mt=u({}.isPrototypeOf),Dt=Lt,kt=pt,Tt=Mt,Vt=Object,Ht=tt?function(t){return"symbol"==typeof t}:function(t){var e=Dt("Symbol");return kt(e)&&Tt(e.prototype,Vt(t))},$t=String,_t=function(t){try{return $t(t)}catch(t){return"Object"}},zt=pt,Gt=_t,Yt=TypeError,Jt=function(t){if(zt(t))return t;throw new Yt(Gt(t)+" is not a function")},Xt=Jt,Wt=d,Ot=function(t,e){var r=t[e];return Wt(r)?void 0:Xt(r)},Kt=St,Pt=pt,Zt=ft,jt=TypeError,qt=St,te=ft,ee=Ht,re=Ot,ie=function(t,e){var r,i;if("string"===e&&Pt(r=t.toString)&&!Zt(i=Kt(r,t)))return i;if(Pt(r=t.valueOf)&&!Zt(i=Kt(r,t)))return i;if("string"!==e&&Pt(r=t.toString)&&!Zt(i=Kt(r,t)))return i;throw new jt("Can't convert object to primitive value")},ne=TypeError,ae=lt("toPrimitive"),se=function(t,e){if(!te(t)||ee(t))return t;var r,i=re(t,ae);if(i){if(void 0===e&&(e="default"),r=qt(i,t,e),!te(r)||ee(r))return r;throw new ne("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},oe=se,ce=Ht,le=function(t){var e=oe(t,"string");return ce(e)?e:e+""},ue=ht,de=Bt,he=Ft,ge=xt,pe=le,me=TypeError,fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ye="enumerable",ve="configurable",Ue="writable";dt.f=ue?he?function(t,e,r){if(ge(t),e=pe(e),ge(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ue in r&&!r[Ue]){var i=be(t,e);i&&i[Ue]&&(t[e]=r.value,r={configurable:ve in r?r[ve]:i[ve],enumerable:ye in r?r[ye]:i[ye],writable:!1})}return fe(t,e,r)}:fe:function(t,e,r){if(ge(t),e=pe(e),ge(r),de)try{return fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new me("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Qe=i,Be=U,Fe=Q,Ie=dt.f,Ce=function(t){var e=Qe.Symbol||(Qe.Symbol={});Be(e,t)||Ie(e,t,{value:Fe.f(t)})},Ae={},xe={},Ee={}.propertyIsEnumerable,we=Object.getOwnPropertyDescriptor,Se=we&&!Ee.call({1:2},1);xe.f=Se?function(t){var e=we(this,t);return!!e&&e.enumerable}:Ee;var Re=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Ne=u,Le=Ne({}.toString),Me=Ne("".slice),De=function(t){return Me(Le(t),8,-1)},ke=n,Te=De,Ve=Object,He=u("".split),$e=ke(function(){return!Ve("z").propertyIsEnumerable(0)})?function(t){return"String"===Te(t)?He(t,""):Ve(t)}:Ve,_e=p,ze=function(t){return $e(_e(t))},Ge=ht,Ye=St,Je=xe,Xe=Re,We=ze,Oe=le,Ke=U,Pe=Bt,Ze=Object.getOwnPropertyDescriptor;Ae.f=Ge?Ze:function(t,e){if(t=We(t),e=Oe(e),Pe)try{return Ze(t,e)}catch(t){}if(Ke(t,e))return Xe(!Ye(Je.f,t,e),t[e])};var je=r,qe=Ce,tr=dt.f,er=Ae.f,rr=je.Symbol;if(qe("asyncDispose"),rr){var ir=er(rr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&tr(rr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var nr=r,ar=Ce,sr=dt.f,or=Ae.f,cr=nr.Symbol;if(ar("dispose"),cr){var lr=or(cr,"dispose");lr.enumerable&&lr.configurable&&lr.writable&&sr(cr,"dispose",{value:lr.value,enumerable:!1,configurable:!1,writable:!1})}var ur=dt,dr=Re,hr=ht?function(t,e,r){return ur.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},gr={exports:{}},pr=ht,mr=U,fr=Function.prototype,br=pr&&Object.getOwnPropertyDescriptor,yr={CONFIGURABLE:mr(fr,"name")&&(!pr||pr&&br(fr,"name").configurable)},vr=pt,Ur=N,Qr=u(Function.toString);vr(Ur.inspectSource)||(Ur.inspectSource=function(t){return Qr(t)});var Br,Fr,Ir,Cr=Ur.inspectSource,Ar=pt,xr=r.WeakMap,Er=Ar(xr)&&/native code/.test(String(xr)),wr=H,Sr=M("keys"),Rr=function(t){return Sr[t]||(Sr[t]=wr(t))},Nr={},Lr=Er,Mr=r,Dr=ft,kr=hr,Tr=U,Vr=N,Hr=Rr,$r=Nr,_r="Object already initialized",zr=Mr.TypeError,Gr=Mr.WeakMap;if(Lr||Vr.state){var Yr=Vr.state||(Vr.state=new Gr);Yr.get=Yr.get,Yr.has=Yr.has,Yr.set=Yr.set,Br=function(t,e){if(Yr.has(t))throw new zr(_r);return e.facade=t,Yr.set(t,e),e},Fr=function(t){return Yr.get(t)||{}},Ir=function(t){return Yr.has(t)}}else{var Jr=Hr("state");$r[Jr]=!0,Br=function(t,e){if(Tr(t,Jr))throw new zr(_r);return e.facade=t,kr(t,Jr,e),e},Fr=function(t){return Tr(t,Jr)?t[Jr]:{}},Ir=function(t){return Tr(t,Jr)}}var Xr={set:Br,get:Fr,has:Ir,enforce:function(t){return Ir(t)?Fr(t):Br(t,{})},getterFor:function(t){return function(e){var r;if(!Dr(e)||(r=Fr(e)).type!==t)throw new zr("Incompatible receiver, "+t+" required");return r}}},Wr=u,Or=n,Kr=pt,Pr=U,Zr=ht,jr=yr.CONFIGURABLE,qr=Cr,ti=Xr.enforce,ei=Xr.get,ri=String,ii=Object.defineProperty,ni=Wr("".slice),ai=Wr("".replace),si=Wr([].join),oi=Zr&&!Or(function(){return 8!==ii(function(){},"length",{value:8}).length}),ci=String(String).split("String"),li=gr.exports=function(t,e,r){"Symbol("===ni(ri(e),0,7)&&(e="["+ai(ri(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Pr(t,"name")||jr&&t.name!==e)&&(Zr?ii(t,"name",{value:e,configurable:!0}):t.name=e),oi&&r&&Pr(r,"arity")&&t.length!==r.arity&&ii(t,"length",{value:r.arity});try{r&&Pr(r,"constructor")&&r.constructor?Zr&&ii(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var i=ti(t);return Pr(i,"source")||(i.source=si(ci,"string"==typeof e?e:"")),t};Function.prototype.toString=li(function(){return Kr(this)&&ei(this).source||qr(this)},"toString");var ui,di=gr.exports,hi=pt,gi=dt,pi=di,mi=C,fi=function(t,e,r,i){i||(i={});var n=i.enumerable,a=void 0!==i.name?i.name:e;if(hi(r)&&pi(r,a,i),i.global)n?t[e]=r:mi(e,r);else{try{i.unsafe?t[e]&&(n=!0):delete t[e]}catch(t){}n?t[e]=r:gi.f(t,e,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t},bi={},yi=Math.ceil,vi=Math.floor,Ui=Math.trunc||function(t){var e=+t;return(e>0?vi:yi)(e)},Qi=Ui,Bi=function(t){var e=+t;return e!=e||0===e?0:Qi(e)},Fi=Bi,Ii=Math.max,Ci=Math.min,Ai=Bi,xi=Math.min,Ei=function(t){var e=Ai(t);return e>0?xi(e,9007199254740991):0},wi=Ei,Si=function(t){return wi(t.length)},Ri=ze,Ni=function(t,e){var r=Fi(t);return r<0?Ii(r+e,0):Ci(r,e)},Li=Si,Mi={indexOf:(ui=!1,function(t,e,r){var i=Ri(t),n=Li(i);if(0===n)return!ui&&-1;var a,s=Ni(r,n);if(ui&&e!=e){for(;n>s;)if((a=i[s++])!=a)return!0}else for(;n>s;s++)if((ui||s in i)&&i[s]===e)return ui||s||0;return!ui&&-1})},Di=U,ki=ze,Ti=Mi.indexOf,Vi=Nr,Hi=u([].push),$i=function(t,e){var r,i=ki(t),n=0,a=[];for(r in i)!Di(Vi,r)&&Di(i,r)&&Hi(a,r);for(;e.length>n;)Di(i,r=e[n++])&&(~Ti(a,r)||Hi(a,r));return a},_i=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],zi=$i,Gi=_i.concat("length","prototype");bi.f=Object.getOwnPropertyNames||function(t){return zi(t,Gi)};var Yi={};Yi.f=Object.getOwnPropertySymbols;var Ji=Lt,Xi=bi,Wi=Yi,Oi=xt,Ki=u([].concat),Pi=Ji("Reflect","ownKeys")||function(t){var e=Xi.f(Oi(t)),r=Wi.f;return r?Ki(e,r(t)):e},Zi=U,ji=Pi,qi=Ae,tn=dt,en=function(t,e,r){for(var i=ji(e),n=tn.f,a=qi.f,s=0;s<i.length;s++){var o=i[s];Zi(t,o)||r&&Zi(r,o)||n(t,o,a(e,o))}},rn=n,nn=pt,an=/#|\.prototype\./,sn=function(t,e){var r=cn[on(t)];return r===un||r!==ln&&(nn(e)?rn(e):!!e)},on=sn.normalize=function(t){return String(t).replace(an,".").toLowerCase()},cn=sn.data={},ln=sn.NATIVE="N",un=sn.POLYFILL="P",dn=sn,hn=r,gn=Ae.f,pn=hr,mn=fi,fn=C,bn=en,yn=dn,vn=function(t,e){var r,i,n,a,s,o=t.target,c=t.global,l=t.stat;if(r=c?hn:l?hn[o]||fn(o,{}):hn[o]&&hn[o].prototype)for(i in e){if(a=e[i],n=t.dontCallGetSet?(s=gn(r,i))&&s.value:r[i],!yn(c?i:o+(l?".":"#")+i,t.forced)&&void 0!==n){if(typeof a==typeof n)continue;bn(a,n)}(t.sham||n&&n.sham)&&pn(a,"sham",!0),mn(r,i,a,t)}},Un={};Un[lt("toStringTag")]="z";var Qn="[object z]"===String(Un),Bn=pt,Fn=De,In=lt("toStringTag"),Cn=Object,An="Arguments"===Fn(function(){return arguments}()),xn=Qn?Fn:function(t){var e,r,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Cn(t),In))?r:An?Fn(e):"Object"===(i=Fn(e))&&Bn(e.callee)?"Arguments":i},En=vn,wn=Lt,Sn=ft,Rn=xn,Nn=n,Ln="Error",Mn="DOMException",Dn=Object.setPrototypeOf||{}.__proto__,kn=wn(Mn),Tn=Error,Vn=Tn.isError;En({target:"Error",stat:!0,sham:!0,forced:!Vn||!Dn||Nn(function(){return kn&&!Vn(new kn(Mn))||!Vn(new Tn(Ln,{cause:function(){}}))||Vn(wn("Object","create")(Tn.prototype))})},{isError:function(t){if(!Sn(t))return!1;var e=Rn(t);return e===Ln||e===Mn}});var Hn=!n(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),$n=U,_n=pt,zn=b,Gn=Hn,Yn=Rr("IE_PROTO"),Jn=Object,Xn=Jn.prototype,Wn=Gn?Jn.getPrototypeOf:function(t){var e=zn(t);if($n(e,Yn))return e[Yn];var r=e.constructor;return _n(r)&&e instanceof r?r.prototype:e instanceof Jn?Xn:null},On=u,Kn=Jt,Pn=function(t,e,r){try{return On(Kn(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Zn=ft,jn=function(t){return Zn(t)||null===t},qn=String,ta=TypeError,ea=Pn,ra=ft,ia=p,na=function(t){if(jn(t))return t;throw new ta("Can't set "+qn(t)+" as a prototype")},aa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=ea(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return ia(r),na(i),ra(r)?(e?t(r,i):r.__proto__=i,r):r}}():void 0),sa={},oa=$i,ca=_i,la=Object.keys||function(t){return oa(t,ca)},ua=ht,da=Ft,ha=dt,ga=xt,pa=ze,ma=la;sa.f=ua&&!da?Object.defineProperties:function(t,e){ga(t);for(var r,i=pa(e),n=ma(e),a=n.length,s=0;a>s;)ha.f(t,r=n[s++],i[r]);return t};var fa,ba=Lt("document","documentElement"),ya=xt,va=sa,Ua=_i,Qa=Nr,Ba=ba,Fa=Ut,Ia="prototype",Ca="script",Aa=Rr("IE_PROTO"),xa=function(){},Ea=function(t){return"<"+Ca+">"+t+"</"+Ca+">"},wa=function(t){t.write(Ea("")),t.close();var e=t.parentWindow.Object;return t=null,e},Sa=function(){try{fa=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Sa="undefined"!=typeof document?document.domain&&fa?wa(fa):(e=Fa("iframe"),r="java"+Ca+":",e.style.display="none",Ba.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ea("document.F=Object")),t.close(),t.F):wa(fa);for(var i=Ua.length;i--;)delete Sa[Ia][Ua[i]];return Sa()};Qa[Aa]=!0;var Ra=Object.create||function(t,e){var r;return null!==t?(xa[Ia]=ya(t),r=new xa,xa[Ia]=null,r[Aa]=t):r=Sa(),void 0===e?r:va.f(r,e)},Na=Error,La=u("".replace),Ma=String(new Na("zxcasd").stack),Da=/\n\s*at [^:]*:[^\n]*/,ka=Da.test(Ma),Ta=function(t,e){if(ka&&"string"==typeof t&&!Na.prepareStackTrace)for(;e--;)t=La(t,Da,"");return t},Va=Re,Ha=!n(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",Va(1,7)),7!==t.stack)}),$a=hr,_a=Ta,za=Ha,Ga=Error.captureStackTrace,Ya=xn,Ja=String,Xa=function(t){if("Symbol"===Ya(t))throw new TypeError("Cannot convert a Symbol value to a string");return Ja(t)},Wa=Xa,Oa=function(t,e){return void 0===t?arguments.length<2?"":e:Wa(t)},Ka=vn,Pa=Mt,Za=Wn,ja=aa,qa=en,ts=Ra,es=hr,rs=Re,is=function(t,e,r,i){za&&(Ga?Ga(t,e):$a(t,"stack",_a(r,i)))},ns=Oa,as=lt,ss=n,os=r.SuppressedError,cs=as("toStringTag"),ls=Error,us=!!os&&3!==os.length,ds=!!os&&ss(function(){return 4===new os(1,2,3,{cause:4}).cause}),hs=us||ds,gs=function(t,e,r){var i,n=Pa(ps,this);return ja?i=!hs||n&&Za(this)!==ps?ja(new ls,n?Za(this):ps):new os:(i=n?this:ts(ps),es(i,cs,"Error")),void 0!==r&&es(i,"message",ns(r)),is(i,gs,i.stack,1),es(i,"error",t),es(i,"suppressed",e),i};ja?ja(gs,ls):qa(gs,ls,{name:!0});var ps=gs.prototype=hs?os.prototype:ts(ls.prototype,{constructor:rs(1,gs),message:rs(1,""),name:rs(1,"SuppressedError")});hs&&(ps.constructor=gs),Ka({global:!0,constructor:!0,arity:3,forced:hs},{SuppressedError:gs});var ms=De,fs=Array.isArray||function(t){return"Array"===ms(t)},bs=ht,ys=fs,vs=TypeError,Us=Object.getOwnPropertyDescriptor,Qs=bs&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(ys(t)&&!Us(t,"length").writable)throw new vs("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Bs=TypeError,Fs=function(t){if(t>9007199254740991)throw new Bs("Maximum allowed index exceeded");return t},Is=b,Cs=Si,As=Qs,xs=Fs;vn({target:"Array",proto:!0,arity:1,forced:n(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=Is(this),r=Cs(e),i=arguments.length;xs(r+i);for(var n=0;n<i;n++)e[r]=arguments[n],r++;return As(e,r),r}});var Es=ht,ws=dt,Ss=Re,Rs=function(t,e,r){Es?ws.f(t,e,Ss(0,r)):t[e]=r},Ns=Si,Ls=Bi,Ms=ze,Ds=Rs,ks=Array,Ts=RangeError;vn({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){var r=Ms(this),i=Ns(r),n=Ls(t),a=n<0?i+n:n;if(a>=i||a<0)throw new Ts("Incorrect index");for(var s=new ks(i),o=0;o<i;o++)Ds(s,o,o===a?e:r[o]);return s}});var Vs=vn,Hs=u,$s=Math.pow,_s=$s(2,-24),zs=.0009765625,Gs=Hs(DataView.prototype.getUint16);Vs({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,i=1023&t;return 31===r?0===i?0===e?1/0:-1/0:NaN:0===r?i*(0===e?_s:-_s):$s(2,r-15)*(0===e?1+i*zs:-1-i*zs)}(Gs(this,t,arguments.length>1&&arguments[1]))}});var Ys=xn,Js=TypeError,Xs=Bi,Ws=Ei,Os=RangeError,Ks=function(t){if(void 0===t)return 0;var e=Xs(t),r=Ws(e);if(e!==r)throw new Os("Wrong length or index");return r},Ps=Math.log,Zs=Math.LN2,js=Math.log2||function(t){return Ps(t)/Zs},qs=4503599627370496,to=function(t){return t+qs-qs},eo=vn,ro=u,io=function(t){if("DataView"===Ys(t))return t;throw new Js("Argument is not a DataView")},no=Ks,ao=js,so=to,oo=Math.floor,co=Math.pow,lo=1024,uo=ro(DataView.prototype.setUint16);eo({target:"DataView",proto:!0},{setFloat16:function(t,e){uo(io(this),no(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|so(16777216*t);var r=oo(ao(t));if(-15===r)return e<<15|lo;var i=so((t*co(2,-r)-1)*lo);return i===lo?e<<15|r+16<<10:e<<15|r+15<<10|i}(+e),arguments.length>2&&arguments[2])}});var ho=di,go=dt,po=function(t,e,r){return r.get&&ho(r.get,e,{getter:!0}),r.set&&ho(r.set,e,{setter:!0}),go.f(t,e,r)},mo="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,fo=r,bo=Pn,yo=De,vo=fo.ArrayBuffer,Uo=fo.TypeError,Qo=vo&&bo(vo.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==yo(t))throw new Uo("ArrayBuffer expected");return t.byteLength},Bo=mo,Fo=Qo,Io=r.DataView,Co=function(t){if(!Bo||0!==Fo(t))return!1;try{return new Io(t),!1}catch(t){return!0}},Ao=ht,xo=po,Eo=Co,wo=ArrayBuffer.prototype;Ao&&!("detached"in wo)&&xo(wo,"detached",{configurable:!0,get:function(){return Eo(this)}});var So,Ro,No,Lo,Mo=Co,Do=TypeError,ko=function(t){if(Mo(t))throw new Do("ArrayBuffer is detached");return t},To=r,Vo=z,Ho=De,$o=function(t){return Vo.slice(0,t.length)===t},_o=$o("Bun/")?"BUN":$o("Cloudflare-Workers")?"CLOUDFLARE":$o("Deno/")?"DENO":$o("Node.js/")?"NODE":To.Bun&&"string"==typeof Bun.version?"BUN":To.Deno&&"object"==typeof Deno.version?"DENO":"process"===Ho(To.process)?"NODE":To.window&&To.document?"BROWSER":"REST",zo="NODE"===_o,Go=r,Yo=zo,Jo=n,Xo=K,Wo=_o,Oo=r.structuredClone,Ko=!!Oo&&!Jo(function(){if("DENO"===Wo&&Xo>92||"NODE"===Wo&&Xo>94||"BROWSER"===Wo&&Xo>97)return!1;var t=new ArrayBuffer(8),e=Oo(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Po=r,Zo=function(t){if(Yo){try{return Go.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},jo=Ko,qo=Po.structuredClone,tc=Po.ArrayBuffer,ec=Po.MessageChannel,rc=!1;if(jo)rc=function(t){qo(t,{transfer:[t]})};else if(tc)try{ec||(So=Zo("worker_threads"))&&(ec=So.MessageChannel),ec&&(Ro=new ec,No=new tc(2),Lo=function(t){Ro.port1.postMessage(null,[t])},2===No.byteLength&&(Lo(No),0===No.byteLength&&(rc=Lo)))}catch(t){}var ic=rc,nc=r,ac=u,sc=Pn,oc=Ks,cc=ko,lc=Qo,uc=ic,dc=Ko,hc=nc.structuredClone,gc=nc.ArrayBuffer,pc=nc.DataView,mc=Math.max,fc=Math.min,bc=gc.prototype,yc=pc.prototype,vc=ac(bc.slice),Uc=sc(bc,"resizable","get"),Qc=sc(bc,"maxByteLength","get"),Bc=ac(yc.getInt8),Fc=ac(yc.setInt8),Ic=(dc||uc)&&function(t,e,r){var i,n=lc(t),a=void 0===e?n:oc(e),s=!Uc||!Uc(t);if(cc(t),dc&&(t=hc(t,{transfer:[t]}),n===a&&(r||s)))return t;if(n>=a&&(!r||s))i=vc(t,0,a);else{var o=r&&!s&&Qc?{maxByteLength:mc(a,Qc(t))}:void 0;i=new gc(a,o);for(var c=new pc(t),l=new pc(i),u=fc(a,n),d=0;d<u;d++)Fc(l,d,Bc(c,d))}return dc||uc(t),i},Cc=Ic;Cc&&vn({target:"ArrayBuffer",proto:!0},{transfer:function(){return Cc(this,arguments.length?arguments[0]:void 0,!0)}});var Ac=Ic;Ac&&vn({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return Ac(this,arguments.length?arguments[0]:void 0,!1)}});var xc=Mt,Ec=TypeError,wc=function(t,e){if(xc(e,t))return t;throw new Ec("Incorrect invocation")},Sc=fi,Rc=function(t,e,r){for(var i in e)Sc(t,i,e[i],r);return t},Nc=De,Lc=u,Mc=function(t){if("Function"===Nc(t))return Lc(t)},Dc=Jt,kc=a,Tc=Mc(Mc.bind),Vc=function(t,e){return Dc(t),void 0===e?t:kc?Tc(t,e):function(){return t.apply(e,arguments)}},Hc=Lt,$c=St,_c=u,zc=Vc,Gc=xt,Yc=Jt,Jc=d,Xc=Ot,Wc=lt,Oc=Wc("asyncDispose"),Kc=Wc("dispose"),Pc=_c([].push),Zc=function(t,e,r){return arguments.length<3&&!Jc(t)&&(r=Yc(function(t,e){if("async-dispose"===e){var r=Xc(t,Oc);return void 0!==r||void 0===(r=Xc(t,Kc))?r:function(){var t=this;return new(Hc("Promise"))(function(e){$c(r,t),e(void 0)})}}return Xc(t,Kc)}(Gc(t),e))),void 0===r?function(){}:zc(r,t)},jc=function(t,e,r,i){var n;if(arguments.length<4){if(Jc(e)&&"sync-dispose"===r)return;n=Zc(e,r)}else n=Zc(void 0,r,i);Pc(t.stack,n)},qc=vn,tl=ht,el=Jt,rl=wc,il=fi,nl=Rc,al=po,sl=lt,ol=Xr,cl=jc,ll=Lt("SuppressedError"),ul=ReferenceError,dl=sl("dispose"),hl=sl("toStringTag"),gl="DisposableStack",pl=ol.set,ml=ol.getterFor(gl),fl="sync-dispose",bl="disposed",yl=function(t){var e=ml(t);if(e.state===bl)throw new ul(gl+" already disposed");return e},vl=function(){pl(rl(this,Ul),{type:gl,state:"pending",stack:[]}),tl||(this.disposed=!1)},Ul=vl.prototype;nl(Ul,{dispose:function(){var t=ml(this);if(t.state!==bl){t.state=bl,tl||(this.disposed=!0);for(var e,r=t.stack,i=r.length,n=!1;i;){var a=r[--i];r[i]=null;try{a()}catch(t){n?e=new ll(t,e):(n=!0,e=t)}}if(t.stack=null,n)throw e}},use:function(t){return cl(yl(this),t,fl),t},adopt:function(t,e){var r=yl(this);return el(e),cl(r,void 0,fl,function(){e(t)}),t},defer:function(t){var e=yl(this);el(t),cl(e,void 0,fl,t)},move:function(){var t=yl(this),e=new vl;return ml(e).stack=t.stack,t.stack=[],t.state=bl,tl||(this.disposed=!0),e}}),tl&&al(Ul,"disposed",{configurable:!0,get:function(){return ml(this).state===bl}}),il(Ul,dl,Ul.dispose,{name:"dispose"}),il(Ul,hl,gl,{nonWritable:!0}),qc({global:!0,constructor:!0},{DisposableStack:vl});var Ql,Bl,Fl,Il=n,Cl=pt,Al=ft,xl=Wn,El=fi,wl=lt("iterator");[].keys&&"next"in(Fl=[].keys())&&(Bl=xl(xl(Fl)))!==Object.prototype&&(Ql=Bl);var Sl=!Al(Ql)||Il(function(){var t={};return Ql[wl].call(t)!==t});Sl&&(Ql={}),Cl(Ql[wl])||El(Ql,wl,function(){return this});var Rl={IteratorPrototype:Ql},Nl=vn,Ll=r,Ml=wc,Dl=xt,kl=pt,Tl=Wn,Vl=po,Hl=Rs,$l=n,_l=U,zl=Rl.IteratorPrototype,Gl=ht,Yl="constructor",Jl="Iterator",Xl=lt("toStringTag"),Wl=TypeError,Ol=Ll[Jl],Kl=!kl(Ol)||Ol.prototype!==zl||!$l(function(){Ol({})}),Pl=function(){if(Ml(this,zl),Tl(this)===zl)throw new Wl("Abstract class Iterator not directly constructable")},Zl=function(t,e){Gl?Vl(zl,t,{configurable:!0,get:function(){return e},set:function(e){if(Dl(this),this===zl)throw new Wl("You can't redefine this property");_l(this,t)?this[t]=e:Hl(this,t,e)}}):zl[t]=e};_l(zl,Xl)||Zl(Xl,Jl),!Kl&&_l(zl,Yl)&&zl[Yl]!==Object||Zl(Yl,Pl),Pl.prototype=zl,Nl({global:!0,constructor:!0,forced:Kl},{Iterator:Pl});var jl={},ql=xn,tu=Ot,eu=d,ru=jl,iu=lt("iterator"),nu=function(t){if(!eu(t))return tu(t,iu)||tu(t,"@@iterator")||ru[ql(t)]},au=function(t,e){return{value:t,done:e}},su=St,ou=xt,cu=Ot,lu=function(t,e,r){var i,n;ou(t);try{if(!(i=cu(t,"return"))){if("throw"===e)throw r;return r}i=su(i,t)}catch(t){n=!0,i=t}if("throw"===e)throw r;if(n)throw i;return ou(i),r},uu=lu,du=St,hu=Ra,gu=hr,pu=Rc,mu=Xr,fu=Ot,bu=Rl.IteratorPrototype,yu=au,vu=lu,Uu=function(t,e,r){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{r=uu(t[i].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},Qu=lt("toStringTag"),Bu="IteratorHelper",Fu="WrapForValidIterator",Iu="normal",Cu="throw",Au=mu.set,xu=function(t){var e=mu.getterFor(t?Fu:Bu);return pu(hu(bu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return yu(void 0,!0);try{var i=r.nextHandler();return r.returnHandlerResult?i:yu(i,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),i=r.iterator,n=r.done;if(r.done=!0,t){var a=fu(i,"return");return a?du(a,i):yu(void 0,!0)}if(n)return yu(void 0,!0);if(r.inner)try{vu(r.inner.iterator,Iu)}catch(t){return vu(i,Cu,t)}if(r.openIters)try{Uu(r.openIters,Iu)}catch(t){if(i)return vu(i,Cu,t);throw t}return i&&vu(i,Iu),yu(void 0,!0)}})},Eu=xu(!0),wu=xu(!1);gu(wu,Qu,"Iterator Helper");var Su=function(t,e,r){var i=function(i,n){n?(n.iterator=i.iterator,n.next=i.next):n=i,n.type=e?Fu:Bu,n.returnHandlerResult=!!r,n.nextHandler=t,n.counter=0,n.done=!1,Au(this,n)};return i.prototype=e?Eu:wu,i},Ru=vn,Nu=St,Lu=Jt,Mu=xt,Du=nu,ku=Array,Tu=Su(function(){for(;;){var t=this.iterator;if(!t){var e=this.nextIterableIndex++,r=this.iterables;if(e>=r.length)return void(this.done=!0);var i=r[e];this.iterables[e]=null,t=this.iterator=Mu(Nu(i.method,i.iterable)),this.next=t.next}var n=Mu(Nu(this.next,t));if(!n.done)return n.value;this.iterator=null,this.next=null}});Ru({target:"Iterator",stat:!0,forced:false},{concat:function(){for(var t=arguments.length,e=ku(t),r=0;r<t;r++){var i=Mu(arguments[r]);e[r]={iterable:i,method:Lu(Du(i))}}return new Tu({iterables:e,nextIterableIndex:0,iterator:null,next:null})}});var Vu=St,Hu=fi,$u=Ot,_u=U,zu=Rl.IteratorPrototype,Gu=lt("dispose");_u(zu,Gu)||Hu(zu,Gu,function(){var t=$u(this,"return");t&&Vu(t,this)});var Yu=function(t){return{iterator:t,next:t.next,done:!1}},Ju=RangeError,Xu=function(t){if(t==t)return t;throw new Ju("NaN is not allowed")},Wu=Bi,Ou=RangeError,Ku=function(t){var e=Wu(t);if(e<0)throw new Ou("The argument can't be less than 0");return e},Pu=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Zu=r,ju=function(t,e){var r=Zu.Iterator,i=r&&r.prototype,n=i&&i[t],a=!1;if(n)try{n.call({next:function(){return{done:!0}},return:function(){a=!0}},-1)}catch(t){t instanceof e||(a=!1)}if(!a)return n},qu=vn,td=St,ed=xt,rd=Yu,id=Xu,nd=Ku,ad=lu,sd=Su,od=ju,cd=!Pu("drop",0),ld=!cd&&od("drop",RangeError),ud=cd||ld,dd=sd(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=ed(td(r,e)),this.done=!!t.done)return;if(t=ed(td(r,e)),!(this.done=!!t.done))return t.value});qu({target:"Iterator",proto:!0,real:!0,forced:ud},{drop:function(t){var e;ed(this);try{e=nd(id(+t))}catch(t){ad(this,"throw",t)}return ld?td(ld,this,e):new dd(rd(this),{remaining:e})}});var hd=jl,gd=lt("iterator"),pd=Array.prototype,md=St,fd=Jt,bd=xt,yd=_t,vd=nu,Ud=TypeError,Qd=function(t,e){var r=arguments.length<2?vd(t):e;if(fd(r))return bd(md(r,t));throw new Ud(yd(t)+" is not iterable")},Bd=Vc,Fd=St,Id=xt,Cd=_t,Ad=function(t){return void 0!==t&&(hd.Array===t||pd[gd]===t)},xd=Si,Ed=Mt,wd=Qd,Sd=nu,Rd=lu,Nd=TypeError,Ld=function(t,e){this.stopped=t,this.result=e},Md=Ld.prototype,Dd=function(t,e,r){var i,n,a,s,o,c,l,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),g=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),m=Bd(e,u),f=function(t){var e=i;return i=void 0,e&&Rd(e,"normal"),new Ld(!0,t)},b=function(t){return d?(Id(t),p?m(t[0],t[1],f):m(t[0],t[1])):p?m(t,f):m(t)};if(h)i=t.iterator;else if(g)i=t;else{if(!(n=Sd(t)))throw new Nd(Cd(t)+" is not iterable");if(Ad(n)){for(a=0,s=xd(t);s>a;a++)if((o=b(t[a]))&&Ed(Md,o))return o;return new Ld(!1)}i=wd(t,n)}for(c=h?t.next:i.next;!(l=Fd(c,i)).done;){var y=l.value;try{o=b(y)}catch(t){if(!i)throw t;Rd(i,"throw",t)}if("object"==typeof o&&o&&Ed(Md,o))return o}return new Ld(!1)},kd=vn,Td=St,Vd=Dd,Hd=Jt,$d=xt,_d=Yu,zd=lu,Gd=ju("every",TypeError);kd({target:"Iterator",proto:!0,real:!0,forced:Gd},{every:function(t){$d(this);try{Hd(t)}catch(t){zd(this,"throw",t)}if(Gd)return Td(Gd,this,t);var e=_d(this),r=0;return!Vd(e,function(e,i){if(!t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Yd=xt,Jd=lu,Xd=function(t,e,r,i){try{return i?e(Yd(r)[0],r[1]):e(r)}catch(e){Jd(t,"throw",e)}},Wd=vn,Od=St,Kd=Jt,Pd=xt,Zd=Yu,jd=Su,qd=Xd,th=lu,eh=ju,rh=!Pu("filter",function(){}),ih=!rh&&eh("filter",TypeError),nh=rh||ih,ah=jd(function(){for(var t,e,r=this.iterator,i=this.predicate,n=this.next;;){if(t=Pd(Od(n,r)),this.done=!!t.done)return;if(e=t.value,qd(r,i,[e,this.counter++],!0))return e}});Wd({target:"Iterator",proto:!0,real:!0,forced:nh},{filter:function(t){Pd(this);try{Kd(t)}catch(t){th(this,"throw",t)}return ih?Od(ih,this,t):new ah(Zd(this),{predicate:t})}});var sh=vn,oh=St,ch=Dd,lh=Jt,uh=xt,dh=Yu,hh=lu,gh=ju("find",TypeError);sh({target:"Iterator",proto:!0,real:!0,forced:gh},{find:function(t){uh(this);try{lh(t)}catch(t){hh(this,"throw",t)}if(gh)return oh(gh,this,t);var e=dh(this),r=0;return ch(e,function(e,i){if(t(e,r++))return i(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var ph=St,mh=xt,fh=Yu,bh=nu,yh=function(t,e){e&&"string"==typeof t||mh(t);var r=bh(t);return fh(mh(void 0!==r?ph(r,t):t))},vh=vn,Uh=St,Qh=Jt,Bh=xt,Fh=Yu,Ih=yh,Ch=Su,Ah=lu,xh=ju;var Eh=!Pu("flatMap",function(){}),wh=!Eh&&xh("flatMap",TypeError),Sh=Eh||wh||function(){try{var t=Iterator.prototype.flatMap.call(new Map([[4,5]]).entries(),function(t){return t});t.next(),t.return()}catch(t){return!0}}(),Rh=Ch(function(){for(var t,e,r=this.iterator,i=this.mapper;;){if(e=this.inner)try{if(!(t=Bh(Uh(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){Ah(r,"throw",t)}if(t=Bh(Uh(this.next,r)),this.done=!!t.done)return;try{this.inner=Ih(i(t.value,this.counter++),!1)}catch(t){Ah(r,"throw",t)}}});vh({target:"Iterator",proto:!0,real:!0,forced:Sh},{flatMap:function(t){Bh(this);try{Qh(t)}catch(t){Ah(this,"throw",t)}return wh?Uh(wh,this,t):new Rh(Fh(this),{mapper:t,inner:null})}});var Nh=vn,Lh=St,Mh=Dd,Dh=Jt,kh=xt,Th=Yu,Vh=lu,Hh=ju("forEach",TypeError);Nh({target:"Iterator",proto:!0,real:!0,forced:Hh},{forEach:function(t){kh(this);try{Dh(t)}catch(t){Vh(this,"throw",t)}if(Hh)return Lh(Hh,this,t);var e=Th(this),r=0;Mh(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var $h=vn,_h=St,zh=b,Gh=Mt,Yh=Rl.IteratorPrototype,Jh=Su,Xh=yh,Wh=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),Oh=Jh(function(){return _h(this.next,this.iterator)},!0);$h({target:"Iterator",stat:!0,forced:Wh},{from:function(t){var e=Xh("string"==typeof t?zh(t):t,!0);return Gh(Yh,e.iterator)?e.iterator:new Oh(e)}});var Kh=vn,Ph=St,Zh=Jt,jh=xt,qh=Yu,tg=Su,eg=Xd,rg=lu,ig=ju,ng=!Pu("map",function(){}),ag=!ng&&ig("map",TypeError),sg=ng||ag,og=tg(function(){var t=this.iterator,e=jh(Ph(this.next,t));if(!(this.done=!!e.done))return eg(t,this.mapper,[e.value,this.counter++],!0)});Kh({target:"Iterator",proto:!0,real:!0,forced:sg},{map:function(t){jh(this);try{Zh(t)}catch(t){rg(this,"throw",t)}return ag?Ph(ag,this,t):new og(qh(this),{mapper:t})}});var cg=a,lg=Function.prototype,ug=lg.apply,dg=lg.call,hg="object"==typeof Reflect&&Reflect.apply||(cg?dg.bind(ug):function(){return dg.apply(ug,arguments)}),gg=vn,pg=Dd,mg=Jt,fg=xt,bg=Yu,yg=lu,vg=ju,Ug=hg,Qg=TypeError,Bg=n(function(){[].keys().reduce(function(){},void 0)}),Fg=!Bg&&vg("reduce",Qg);gg({target:"Iterator",proto:!0,real:!0,forced:Bg||Fg},{reduce:function(t){fg(this);try{mg(t)}catch(t){yg(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(Fg)return Ug(Fg,this,e?[t]:[t,r]);var i=bg(this),n=0;if(pg(i,function(i){e?(e=!1,r=i):r=t(r,i,n),n++},{IS_RECORD:!0}),e)throw new Qg("Reduce of empty iterator with no initial value");return r}});var Ig=vn,Cg=St,Ag=Dd,xg=Jt,Eg=xt,wg=Yu,Sg=lu,Rg=ju("some",TypeError);Ig({target:"Iterator",proto:!0,real:!0,forced:Rg},{some:function(t){Eg(this);try{xg(t)}catch(t){Sg(this,"throw",t)}if(Rg)return Cg(Rg,this,t);var e=wg(this),r=0;return Ag(e,function(e,i){if(t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Ng=vn,Lg=St,Mg=xt,Dg=Yu,kg=Xu,Tg=Ku,Vg=Su,Hg=lu,$g=ju,_g=!Pu("take",1),zg=!_g&&$g("take",RangeError),Gg=_g||zg,Yg=Vg(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,Hg(t,"normal",void 0);var e=Mg(Lg(this.next,t));return(this.done=!!e.done)?void 0:e.value});Ng({target:"Iterator",proto:!0,real:!0,forced:Gg},{take:function(t){var e;Mg(this);try{e=Tg(kg(+t))}catch(t){Hg(this,"throw",t)}return zg?Lg(zg,this,e):new Yg(Dg(this),{remaining:e})}});var Jg=xt,Xg=Rs,Wg=Dd,Og=Yu;vn({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return Wg(Og(Jg(this)),function(r){Xg(t,e++,r)},{IS_RECORD:!0}),t}});var Kg=!n(function(){var t="9007199254740993",e=JSON.rawJSON(t);return!JSON.isRawJSON(e)||JSON.stringify(e)!==t}),Pg=ft,Zg=Xr.get,jg=function(t){if(!Pg(t))return!1;var e=Zg(t);return!!e&&"RawJSON"===e.type};vn({target:"JSON",stat:!0,forced:!Kg},{isRawJSON:jg});var qg=u,tp=U,ep=SyntaxError,rp=parseInt,ip=String.fromCharCode,np=qg("".charAt),ap=qg("".slice),sp=qg(/./.exec),op={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},cp=/^[\da-f]{4}$/i,lp=/^[\u0000-\u001F]$/,up=function(t,e){for(var r=!0,i="";e<t.length;){var n=np(t,e);if("\\"===n){var a=ap(t,e,e+2);if(tp(op,a))i+=op[a],e+=2;else{if("\\u"!==a)throw new ep('Unknown escape sequence: "'+a+'"');var s=ap(t,e+=2,e+4);if(!sp(cp,s))throw new ep("Bad Unicode escape at: "+e);i+=ip(rp(s,16)),e+=4}}else{if('"'===n){r=!1,e++;break}if(sp(lp,n))throw new ep("Bad control character in string literal at: "+e);i+=n,e++}}if(r)throw new ep("Unterminated string at: "+e);return{value:i,end:e}},dp=vn,hp=ht,gp=r,pp=Lt,mp=u,fp=St,bp=pt,yp=ft,vp=fs,Up=U,Qp=Xa,Bp=Si,Fp=Rs,Ip=n,Cp=up,Ap=q,xp=gp.JSON,Ep=gp.Number,wp=gp.SyntaxError,Sp=xp&&xp.parse,Rp=pp("Object","keys"),Np=Object.getOwnPropertyDescriptor,Lp=mp("".charAt),Mp=mp("".slice),Dp=mp(/./.exec),kp=mp([].push),Tp=/^\d$/,Vp=/^[1-9]$/,Hp=/^[\d-]$/,$p=/^[\t\n\r ]$/,_p=function(t,e,r,i){var n,a,s,o,c,l=t[e],u=i&&l===i.value,d=u&&"string"==typeof i.source?{source:i.source}:{};if(yp(l)){var h=vp(l),g=u?i.nodes:h?[]:{};if(h)for(n=g.length,s=Bp(l),o=0;o<s;o++)zp(l,o,_p(l,""+o,r,o<n?g[o]:void 0));else for(a=Rp(l),s=Bp(a),o=0;o<s;o++)c=a[o],zp(l,c,_p(l,c,r,Up(g,c)?g[c]:void 0))}return fp(r,t,e,l,d)},zp=function(t,e,r){if(hp){var i=Np(t,e);if(i&&!i.configurable)return}void 0===r?delete t[e]:Fp(t,e,r)},Gp=function(t,e,r,i){this.value=t,this.end=e,this.source=r,this.nodes=i},Yp=function(t,e){this.source=t,this.index=e};Yp.prototype={fork:function(t){return new Yp(this.source,t)},parse:function(){var t=this.source,e=this.skip($p,this.index),r=this.fork(e),i=Lp(t,e);if(Dp(Hp,i))return r.number();switch(i){case"{":return r.object();case"[":return r.array();case'"':return r.string();case"t":return r.keyword(!0);case"f":return r.keyword(!1);case"n":return r.keyword(null)}throw new wp('Unexpected character: "'+i+'" at: '+e)},node:function(t,e,r,i,n){return new Gp(e,i,t?null:Mp(this.source,r,i),n)},object:function(){for(var t=this.source,e=this.index+1,r=!1,i={},n={},a=!1;e<t.length;){if(e=this.until(['"',"}"],e),"}"===Lp(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).string(),o=s.value;e=s.end,e=this.until([":"],e)+1,e=this.skip($p,e),s=this.fork(e).parse(),Fp(n,o,s),Fp(i,o,s.value),e=this.until([",","}"],s.end);var c=Lp(t,e);if(","===c)r=!0,e++;else if("}"===c){e++,a=!0;break}}if(!a)throw new wp("Unterminated object at: "+e);return this.node(1,i,this.index,e,n)},array:function(){for(var t=this.source,e=this.index+1,r=!1,i=[],n=[],a=!1;e<t.length;){if(e=this.skip($p,e),"]"===Lp(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).parse();if(kp(n,s),kp(i,s.value),e=this.until([",","]"],s.end),","===Lp(t,e))r=!0,e++;else if("]"===Lp(t,e)){e++,a=!0;break}}if(!a)throw new wp("Unterminated array at: "+e);return this.node(1,i,this.index,e,n)},string:function(){var t=this.index,e=Cp(this.source,this.index+1);return this.node(0,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,r=e;if("-"===Lp(t,r)&&r++,"0"===Lp(t,r))r++;else{if(!Dp(Vp,Lp(t,r)))throw new wp("Failed to parse number at: "+r);r=this.skip(Tp,r+1)}if("."===Lp(t,r)){var i=r+1;if(i===(r=this.skip(Tp,i)))throw new wp("Failed to parse number's fraction at: "+r)}if(("e"===Lp(t,r)||"E"===Lp(t,r))&&(r++,"+"!==Lp(t,r)&&"-"!==Lp(t,r)||r++,r===(r=this.skip(Tp,r))))throw new wp("Failed to parse number's exponent value at: "+r);return this.node(0,Ep(Mp(t,e,r)),e,r)},keyword:function(t){var e=""+t,r=this.index,i=r+e.length;if(Mp(this.source,r,i)!==e)throw new wp("Failed to parse value at: "+r);return this.node(0,t,r,i)},skip:function(t,e){for(var r=this.source;e<r.length&&Dp(t,Lp(r,e));e++);return e},until:function(t,e){e=this.skip($p,e);for(var r=Lp(this.source,e),i=0;i<t.length;i++)if(t[i]===r)return e;throw new wp('Unexpected character: "'+r+'" at: '+e)}};var Jp=Ip(function(){var t,e="9007199254740993";return Sp(e,function(e,r,i){t=i.source}),t!==e}),Xp=Ap&&!Ip(function(){return 1/Sp("-0 \t")!=-1/0});dp({target:"JSON",stat:!0,forced:Jp},{parse:function(t,e){return Xp&&!bp(e)?Sp(t):function(t,e){t=Qp(t);var r=new Yp(t,0),i=r.parse(),n=i.value,a=r.skip($p,i.end);if(a<t.length)throw new wp('Unexpected extra character: "'+Lp(t,a)+'" after the parsed data at: '+a);return bp(e)?_p({"":n},"",e,i):n}(t,e)}});var Wp=vn,Op=!n(function(){return Object.isExtensible(Object.preventExtensions({}))}),Kp=Kg,Pp=Lt,Zp=u,jp=Xa,qp=Rs,tm=Xr.set,em=SyntaxError,rm=Pp("JSON","parse"),im=Pp("Object","create"),nm=Pp("Object","freeze"),am=Zp("".charAt),sm="Unacceptable as raw JSON",om=function(t){return" "===t||"\t"===t||"\n"===t||"\r"===t};Wp({target:"JSON",stat:!0,forced:!Kp},{rawJSON:function(t){var e=jp(t);if(""===e||om(am(e,0))||om(am(e,e.length-1)))throw new em(sm);var r=rm(e);if("object"==typeof r&&null!==r)throw new em(sm);var i=im(null);return tm(i,{type:"RawJSON"}),qp(i,"rawJSON",e),Op?nm(i):i}});var cm=u([].slice),lm=vn,um=Lt,dm=hg,hm=St,gm=u,pm=n,mm=fs,fm=pt,bm=jg,ym=Ht,vm=De,Um=Xa,Qm=cm,Bm=up,Fm=H,Im=q,Cm=Kg,Am=String,xm=um("JSON","stringify"),Em=gm(/./.exec),wm=gm("".charAt),Sm=gm("".charCodeAt),Rm=gm("".replace),Nm=gm("".slice),Lm=gm([].push),Mm=gm(1.1.toString),Dm=/[\uD800-\uDFFF]/g,km=/^[\uD800-\uDBFF]$/,Tm=/^[\uDC00-\uDFFF]$/,Vm=Fm(),Hm=Vm.length,$m=!Im||pm(function(){var t=um("Symbol")("stringify detection");return"[null]"!==xm([t])||"{}"!==xm({a:t})||"{}"!==xm(Object(t))}),_m=pm(function(){return'"\\udf06\\ud834"'!==xm("\udf06\ud834")||'"\\udead"'!==xm("\udead")}),zm=$m?function(t,e){var r=Qm(arguments),i=Ym(e);if(fm(i)||void 0!==t&&!ym(t))return r[1]=function(t,e){if(fm(i)&&(e=hm(i,this,Am(t),e)),!ym(e))return e},dm(xm,null,r)}:xm,Gm=function(t,e,r){var i=wm(r,e-1),n=wm(r,e+1);return Em(km,t)&&!Em(Tm,n)||Em(Tm,t)&&!Em(km,i)?"\\u"+Mm(Sm(t,0),16):t},Ym=function(t){if(fm(t))return t;if(mm(t)){for(var e=t.length,r=[],i=0;i<e;i++){var n=t[i];"string"==typeof n?Lm(r,n):"number"!=typeof n&&"Number"!==vm(n)&&"String"!==vm(n)||Lm(r,Um(n))}var a=r.length,s=!0;return function(t,e){if(s)return s=!1,e;if(mm(this))return e;for(var i=0;i<a;i++)if(r[i]===t)return e}}};xm&&lm({target:"JSON",stat:!0,arity:3,forced:$m||_m||!Cm},{stringify:function(t,e,r){var i=Ym(e),n=[],a=zm(t,function(t,e){var r=fm(i)?hm(i,this,Am(t),e):e;return!Cm&&bm(r)?Vm+(Lm(n,r.rawJSON)-1):r},r);if("string"!=typeof a)return a;if(_m&&(a=Rm(a,Dm,Gm)),Cm)return a;for(var s="",o=a.length,c=0;c<o;c++){var l=wm(a,c);if('"'===l){var u=Bm(a,++c).end-1,d=Nm(a,c,u);s+=Nm(d,0,Hm)===Vm?n[Nm(d,Hm)]:'"'+d+'"',c=u}else s+=l}return s}});var Jm=u,Xm=Map.prototype,Wm={Map:Map,set:Jm(Xm.set),get:Jm(Xm.get),has:Jm(Xm.has),remove:Jm(Xm.delete)},Om=vn,Km=Jt,Pm=p,Zm=Dd,jm=n,qm=Wm.Map,tf=Wm.has,ef=Wm.get,rf=Wm.set,nf=u([].push);Om({target:"Map",stat:!0,forced:jm(function(){return 1!==qm.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){Pm(t),Km(e);var r=new qm,i=0;return Zm(t,function(t){var n=e(t,i++);tf(r,n)?nf(ef(r,n),t):rf(r,n,[t])}),r}});var af=Wm.get,sf=Wm.has,of=Wm.set;vn({target:"Map",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return sf(this,t)?af(this,t):(of(this,t,e),e)}});var cf=Jt,lf=Wm.get,uf=Wm.has,df=Wm.set;vn({target:"Map",proto:!0,real:!0,forced:false},{getOrInsertComputed:function(t,e){var r=uf(this,t);if(cf(e),r)return lf(this,t);0===t&&1/t==-1/0&&(t=0);var i=e(t);return df(this,t,i),i}});var hf=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},gf=hf,pf=to,mf=Math.abs,ff=function(t,e,r,i){var n=+t,a=mf(n),s=gf(n);if(a<i)return s*pf(a/i/e)*i*e;var o=(1+e/2220446049250313e-31)*a,c=o-(o-a);return c>r||c!=c?s*(1/0):s*c};vn({target:"Math",stat:!0},{f16round:function(t){return ff(t,.0009765625,65504,6103515625e-14)}});var bf=vn,yf=u,vf=Dd,Uf=RangeError,Qf=TypeError,Bf=1/0,Ff=Math.abs,If=Math.pow,Cf=yf([].push),Af=If(2,1023),xf=If(2,53)-1,Ef=Number.MAX_VALUE,wf=If(2,971),Sf={},Rf={},Nf={},Lf={},Mf={},Df=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};bf({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,i=Lf;switch(vf(t,function(t){if(++r>xf)throw new Uf("Maximum allowed index exceeded");if("number"!=typeof t)throw new Qf("Value is not a number");i!==Sf&&(t!=t?i=Sf:t===Bf?i=i===Rf?Sf:Nf:t===-1/0?i=i===Nf?Sf:Rf:0===t&&1/t!==Bf||i!==Lf&&i!==Mf||(i=Mf,Cf(e,t)))}),i){case Sf:return NaN;case Rf:return-1/0;case Nf:return Bf;case Lf:return-0}for(var n,a,s,o,c,l,u=[],d=0,h=0;h<e.length;h++){n=e[h];for(var g=0,p=0;p<u.length;p++){if(a=u[p],Ff(n)<Ff(a)&&(l=n,n=a,a=l),o=(s=Df(n,a)).hi,c=s.lo,Ff(o)===Bf){var m=o===Bf?1:-1;d+=m,Ff(n=n-m*Af-m*Af)<Ff(a)&&(l=n,n=a,a=l),o=(s=Df(n,a)).hi,c=s.lo}0!==c&&(u[g++]=c),n=o}u.length=g,0!==n&&Cf(u,n)}var f=u.length-1;if(o=0,c=0,0!==d){var b=f>=0?u[f]:0;if(f--,Ff(d)>1||d>0&&b>0||d<0&&b<0)return d>0?Bf:-1/0;if(o=(s=Df(d*Af,b/2)).hi,c=s.lo,c*=2,Ff(2*o)===Bf)return o>0?o===Af&&c===-wf/2&&f>=0&&u[f]<0?Ef:Bf:o===-Af&&c===wf/2&&f>=0&&u[f]>0?-Ef:-1/0;0!==c&&(u[++f]=c,c=0),o*=2}for(;f>=0&&(o=(s=Df(o,u[f--])).hi,0===(c=s.lo)););return f>=0&&(c<0&&u[f]<0||c>0&&u[f]>0)&&(a=2*c)===(n=o+a)-o&&(o=n),o}});var kf=vn,Tf=Rs,Vf=Lt,Hf=u,$f=Jt,_f=p,zf=le,Gf=Dd,Yf=n,Jf=Object.groupBy,Xf=Vf("Object","create"),Wf=Hf([].push);kf({target:"Object",stat:!0,forced:!Jf||Yf(function(){return 1!==Jf("ab",function(t){return t}).a.length})},{groupBy:function(t,e){_f(t),$f(e);var r=Xf(null),i=0;return Gf(t,function(t){var n=zf(e(t,i++));n in r?Wf(r[n],t):Tf(r,n,[t])}),r}});var Of={},Kf=Jt,Pf=TypeError,Zf=function(t){var e,r;this.promise=new t(function(t,i){if(void 0!==e||void 0!==r)throw new Pf("Bad Promise constructor");e=t,r=i}),this.resolve=Kf(e),this.reject=Kf(r)};Of.f=function(t){return new Zf(t)};var jf=vn,qf=hg,tb=cm,eb=Of,rb=Jt,ib=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},nb=r.Promise,ab=!1;jf({target:"Promise",stat:!0,forced:!nb||!nb.try||ib(function(){nb.try(function(t){ab=8===t},8)}).error||!ab},{try:function(t){var e=arguments.length>1?tb(arguments,1):[],r=eb.f(this),i=ib(function(){return qf(rb(t),void 0,e)});return(i.error?r.reject:r.resolve)(i.value),r.promise}});var sb=Of;vn({target:"Promise",stat:!0},{withResolvers:function(){var t=sb.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var ob=u,cb=n,lb=pt,ub=xn,db=Cr,hb=function(){},gb=Lt("Reflect","construct"),pb=/^\s*(?:class|function)\b/,mb=ob(pb.exec),fb=!pb.test(hb),bb=function(t){if(!lb(t))return!1;try{return gb(hb,[],t),!0}catch(t){return!1}},yb=function(t){if(!lb(t))return!1;switch(ub(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return fb||!!mb(pb,db(t))}catch(t){return!0}};yb.sham=!0;var vb,Ub,Qb=!gb||cb(function(){var t;return bb(bb.call)||!bb(Object)||!bb(function(){t=!0})||t})?yb:bb,Bb=r,Fb=N,Ib=pt,Cb=Wn,Ab=fi,xb="USE_FUNCTION_CONSTRUCTOR",Eb=lt("asyncIterator"),wb=Bb.AsyncIterator,Sb=Fb.AsyncIteratorPrototype;if(Sb)vb=Sb;else if(Ib(wb))vb=wb.prototype;else if(Fb[xb]||Bb[xb])try{Ub=Cb(Cb(Cb(Function("return async function*(){}()")()))),Cb(Ub)===Object.prototype&&(vb=Ub)}catch(t){}vb||(vb={}),Ib(vb[Eb])||Ab(vb,Eb,function(){return this});var Rb=vb,Nb=St,Lb=xt,Mb=Ra,Db=Ot,kb=Rc,Tb=Xr,Vb=lu,Hb=Rb,$b=au,_b=Lt("Promise"),zb="AsyncFromSyncIterator",Gb=Tb.set,Yb=Tb.getterFor(zb),Jb=function(t,e,r,i,n){var a=t.done;_b.resolve(t.value).then(function(t){e($b(t,a))},function(t){if(!a&&n)try{Vb(i,"throw",t)}catch(e){t=e}r(t)})},Xb=function(t){t.type=zb,Gb(this,t)};Xb.prototype=kb(Mb(Hb),{next:function(){var t=Yb(this),e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Lb(e?Nb(t.next,t.iterator,r):Nb(t.next,t.iterator));Jb(a,i,n,t.iterator,!0)})},return:function(){var t=Yb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Db(t,"return");if(void 0===a)return i($b(r,!0));var s=Lb(e?Nb(a,t,r):Nb(a,t));Jb(s,i,n,t)})},throw:function(){var t=Yb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Db(t,"throw");if(void 0===a){try{Vb(t,"normal")}catch(t){return n(t)}return n(new TypeError("The iterator does not provide a throw method"))}var s=Lb(e?Nb(a,t,r):Nb(a,t));Jb(s,i,n,t,!0)})}});var Wb,Ob,Kb,Pb,Zb,jb=Xb,qb=St,ty=jb,ey=xt,ry=Qd,iy=Yu,ny=Ot,ay=lt("asyncIterator"),sy=r,oy=St,cy=xt,ly=Lt,uy=Ot,dy=St,hy=Jt,gy=xt,py=ft,my=Fs,fy=Lt,by=Rs,yy=Qs,vy=Yu,Uy=function(t,e,r,i){try{var n=uy(t,"return");if(n)return ly("Promise").resolve(oy(n,t)).then(function(t){try{e!==i&&cy(t)}catch(t){return void i(t)}e(r)},function(t){e===i?e(r):i(t)})}catch(t){return i(e===i?r:t)}e(r)},Qy={toArray:(Wb=0,Ob=0===Wb,Kb=1===Wb,Pb=2===Wb,Zb=3===Wb,function(t,e,r){gy(t);var i=void 0!==e;!i&&Ob||hy(e);var n=vy(t),a=fy("Promise"),s=n.iterator,o=n.next,c=0;return new a(function(t,n){var l=function(t){Uy(s,n,t,n)},u=function(){try{try{my(c)}catch(t){return l(t)}a.resolve(gy(dy(o,s))).then(function(o){try{if(gy(o).done)Ob?(yy(r,c),t(r)):t(!Zb&&(Pb||void 0));else{var d=o.value;try{if(i){var h=c++,g=e(d,h),p=function(e){if(Kb)u();else if(Pb)e?u():Uy(s,t,!1,n);else if(Ob)try{by(r,h,e),u()}catch(t){l(t)}else e?Uy(s,t,Zb||d,n):u()};py(g)?a.resolve(g).then(p,l):p(g)}else by(r,c++,d),u()}catch(t){l(t)}}}catch(t){n(t)}},n)}catch(t){n(t)}};u()})})},By=Vc,Fy=u,Iy=Qb,Cy=function(t,e){var r=arguments.length<2?ny(t,ay):e;return r?ey(qb(r,t)):new ty(iy(ry(t)))},Ay=Qd,xy=Yu,Ey=nu,wy=Ot,Sy=Lt,Ry=function(t,e){var r=sy[t],i=r&&r.prototype;return i&&i[e]},Ny=jb,Ly=Qy.toArray,My=lt("asyncIterator"),Dy=Fy(Ry("Array","values")),ky=Fy(Dy([]).next),Ty=function(){return new Vy(this)},Vy=function(t){this.iterator=Dy(t)};Vy.prototype.next=function(){return ky(this.iterator)};var Hy=vn,$y=function(t){var e=this,r=arguments.length,i=r>1?arguments[1]:void 0,n=r>2?arguments[2]:void 0;return new(Sy("Promise"))(function(r){void 0!==i&&(i=By(i,n));var a=wy(t,My),s=a?void 0:Ey(t)||Ty,o=Iy(e)?new e:[],c=a?Cy(t,a):new Ny(xy(Ay(t,s)));r(Ly(c,i,o))})},_y=n,zy=Array.fromAsync,Gy=!zy||_y(function(){var t=0;return zy.call(function(){return t++,[]},{length:0}),1!==t});Hy({target:"Array",stat:!0,forced:Gy},{fromAsync:$y});var Yy=vn,Jy=ht,Xy=Lt,Wy=Jt,Oy=wc,Ky=fi,Py=Rc,Zy=po,jy=lt,qy=Xr,tv=jc,ev=K,rv=Xy("Promise"),iv=Xy("SuppressedError"),nv=ReferenceError,av=jy("asyncDispose"),sv=jy("toStringTag"),ov="AsyncDisposableStack",cv=qy.set,lv=qy.getterFor(ov),uv="async-dispose",dv="disposed",hv=function(t){var e=lv(t);if(e.state===dv)throw new nv(ov+" already disposed");return e},gv=function(){cv(Oy(this,pv),{type:ov,state:"pending",stack:[]}),Jy||(this.disposed=!1)},pv=gv.prototype;Py(pv,{disposeAsync:function(){var t=this;return new rv(function(e,r){var i=lv(t);if(i.state===dv)return e(void 0);i.state=dv,Jy||(t.disposed=!0);var n,a=i.stack,s=a.length,o=!1,c=function(t){o?n=new iv(t,n):(o=!0,n=t),l()},l=function(){if(s){var t=a[--s];a[s]=null;try{rv.resolve(t()).then(l,c)}catch(t){c(t)}}else i.stack=null,o?r(n):e(void 0)};l()})},use:function(t){return tv(hv(this),t,uv),t},adopt:function(t,e){var r=hv(this);return Wy(e),tv(r,void 0,uv,function(){return e(t)}),t},defer:function(t){var e=hv(this);Wy(t),tv(e,void 0,uv,t)},move:function(){var t=hv(this),e=new gv;return lv(e).stack=t.stack,t.stack=[],t.state=dv,Jy||(this.disposed=!0),e}}),Jy&&Zy(pv,"disposed",{configurable:!0,get:function(){return lv(this).state===dv}}),Ky(pv,av,pv.disposeAsync,{name:"disposeAsync"}),Ky(pv,sv,ov,{nonWritable:!0}),Yy({global:!0,constructor:!0,forced:ev&&ev<136},{AsyncDisposableStack:gv});var mv=St,fv=fi,bv=Lt,yv=Ot,vv=U,Uv=Rb,Qv=lt("asyncDispose"),Bv=bv("Promise");vv(Uv,Qv)||fv(Uv,Qv,function(){var t=this;return new Bv(function(e,r){var i=yv(t,"return");i?Bv.resolve(mv(i,t)).then(function(){e(void 0)},r):e(void 0)})});var Fv,Iv=TypeError,Cv=function(t){if("string"==typeof t)return t;throw new Iv("Argument is not a string")},Av=Bi,xv=Xa,Ev=p,wv=RangeError,Sv=Math.floor,Rv=u,Nv=Ei,Lv=Xa,Mv=function(t){var e=xv(Ev(this)),r="",i=Av(t);if(i<0||i===1/0)throw new wv("Wrong number of repetitions");for(;i>0;(i=Sv(i/2))&&(e+=e))i%2&&(r+=e);return r},Dv=p,kv=Rv(Mv),Tv=Rv("".slice),Vv=Math.ceil,Hv={start:(Fv=!1,function(t,e,r){var i=Lv(Dv(t)),n=Nv(e),a=i.length;if(n<=a)return i;var s,o,c=void 0===r?" ":Lv(r);return""===c?i:((o=kv(c,Vv((s=n-a)/c.length))).length>s&&(o=Tv(o,0,s)),Fv?i+o:o+i)})},$v=vn,_v=u,zv=Cv,Gv=U,Yv=Hv.start,Jv=Array,Xv=RegExp.escape,Wv=_v("".charAt),Ov=_v("".charCodeAt),Kv=_v(1.1.toString),Pv=_v([].join),Zv=/^[0-9a-z]/i,jv=/^[$()*+./?[\\\]^{|}]/,qv=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),tU=_v(Zv.exec),eU={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},rU=function(t){var e=Kv(Ov(t,0),16);return e.length<3?"\\x"+Yv(e,2,"0"):"\\u"+Yv(e,4,"0")};$v({target:"RegExp",stat:!0,forced:!Xv||"\\x61b"!==Xv("ab")},{escape:function(t){zv(t);for(var e=t.length,r=Jv(e),i=0;i<e;i++){var n=Wv(t,i);if(0===i&&tU(Zv,n))r[i]=rU(n);else if(Gv(eU,n))r[i]="\\"+eU[n];else if(tU(jv,n))r[i]="\\"+n;else if(tU(qv,n))r[i]=rU(n);else{var a=Ov(n,0);55296!=(63488&a)?r[i]=n:a>=56320||i+1>=e||56320!=(64512&Ov(t,i+1))?r[i]=rU(n):(r[i]=n,r[++i]=Wv(t,i))}}return Pv(r,"")}});var iU=u,nU=Set.prototype,aU={Set:Set,add:iU(nU.add),has:iU(nU.has),remove:iU(nU.delete),proto:nU},sU=aU.has,oU=function(t){return sU(t),t},cU=St,lU=function(t,e,r){for(var i,n,a=r?t:t.iterator,s=t.next;!(i=cU(s,a)).done;)if(void 0!==(n=e(i.value)))return n},uU=u,dU=lU,hU=aU.Set,gU=aU.proto,pU=uU(gU.forEach),mU=uU(gU.keys),fU=mU(new hU).next,bU=function(t,e,r){return r?dU({iterator:mU(t),next:fU},e):pU(t,e)},yU=bU,vU=aU.Set,UU=aU.add,QU=function(t){var e=new vU;return yU(t,function(t){UU(e,t)}),e},BU=Pn(aU.proto,"size","get")||function(t){return t.size},FU=Jt,IU=xt,CU=St,AU=Bi,xU=Yu,EU="Invalid size",wU=RangeError,SU=TypeError,RU=Math.max,NU=function(t,e){this.set=t,this.size=RU(e,0),this.has=FU(t.has),this.keys=FU(t.keys)};NU.prototype={getIterator:function(){return xU(IU(CU(this.keys,this.set)))},includes:function(t){return CU(this.has,this.set,t)}};var LU=function(t){IU(t);var e=+t.size;if(e!=e)throw new SU(EU);var r=AU(e);if(r<0)throw new wU(EU);return new NU(t,r)},MU=oU,DU=QU,kU=BU,TU=LU,VU=bU,HU=lU,$U=aU.has,_U=aU.remove,zU=Lt,GU=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},YU=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},JU=function(t,e){var r=zU("Set");try{(new r)[t](GU(0));try{return(new r)[t](GU(-1)),!1}catch(i){if(!e)return!0;try{return(new r)[t](YU(-1/0)),!1}catch(i){return e(new r([1,2])[t](YU(1/0)))}}}catch(t){return!1}},XU=function(t){var e=MU(this),r=TU(t),i=DU(e);return kU(i)<=r.size?VU(i,function(t){r.includes(t)&&_U(i,t)}):HU(r.getIterator(),function(t){$U(i,t)&&_U(i,t)}),i},WU=n;vn({target:"Set",proto:!0,real:!0,forced:!JU("difference",function(t){return 0===t.size})||WU(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size})},{difference:XU});var OU=oU,KU=BU,PU=LU,ZU=bU,jU=lU,qU=aU.Set,tQ=aU.add,eQ=aU.has,rQ=n,iQ=function(t){var e=OU(this),r=PU(t),i=new qU;return KU(e)>r.size?jU(r.getIterator(),function(t){eQ(e,t)&&tQ(i,t)}):ZU(e,function(t){r.includes(t)&&tQ(i,t)}),i};vn({target:"Set",proto:!0,real:!0,forced:!JU("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||rQ(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:iQ});var nQ=oU,aQ=aU.has,sQ=BU,oQ=LU,cQ=bU,lQ=lU,uQ=lu,dQ=function(t){var e=nQ(this),r=oQ(t);if(sQ(e)<=r.size)return!1!==cQ(e,function(t){if(r.includes(t))return!1},!0);var i=r.getIterator();return!1!==lQ(i,function(t){if(aQ(e,t))return uQ(i.iterator,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!JU("isDisjointFrom",function(t){return!t})},{isDisjointFrom:dQ});var hQ=oU,gQ=BU,pQ=bU,mQ=LU,fQ=function(t){var e=hQ(this),r=mQ(t);return!(gQ(e)>r.size)&&!1!==pQ(e,function(t){if(!r.includes(t))return!1},!0)};vn({target:"Set",proto:!0,real:!0,forced:!JU("isSubsetOf",function(t){return t})},{isSubsetOf:fQ});var bQ=oU,yQ=aU.has,vQ=BU,UQ=LU,QQ=lU,BQ=lu,FQ=function(t){var e=bQ(this),r=UQ(t);if(vQ(e)<r.size)return!1;var i=r.getIterator();return!1!==QQ(i,function(t){if(!yQ(e,t))return BQ(i.iterator,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!JU("isSupersetOf",function(t){return!t})},{isSupersetOf:FQ});var IQ=oU,CQ=QU,AQ=LU,xQ=lU,EQ=aU.add,wQ=aU.has,SQ=aU.remove,RQ=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},i=e[t](r);return 1===i.size&&4===i.values().next().value}catch(t){return!1}},NQ=function(t){var e=IQ(this),r=AQ(t).getIterator(),i=CQ(e);return xQ(r,function(t){wQ(e,t)?SQ(i,t):EQ(i,t)}),i},LQ=RQ;vn({target:"Set",proto:!0,real:!0,forced:!JU("symmetricDifference")||!LQ("symmetricDifference")},{symmetricDifference:NQ});var MQ=oU,DQ=aU.add,kQ=QU,TQ=LU,VQ=lU,HQ=function(t){var e=MQ(this),r=TQ(t).getIterator(),i=kQ(e);return VQ(r,function(t){DQ(i,t)}),i},$Q=RQ;vn({target:"Set",proto:!0,real:!0,forced:!JU("union")||!$Q("union")},{union:HQ});var _Q,zQ,GQ,YQ=mo,JQ=ht,XQ=r,WQ=pt,OQ=ft,KQ=U,PQ=xn,ZQ=hr,jQ=fi,qQ=po,tB=Wn,eB=aa,rB=lt,iB=H,nB=Xr.enforce,aB=Xr.get,sB=XQ.Int8Array,oB=sB&&sB.prototype,cB=XQ.Uint8ClampedArray,lB=cB&&cB.prototype,uB=sB&&tB(sB),dB=oB&&tB(oB),hB=Object.prototype,gB=XQ.TypeError,pB=rB("toStringTag"),mB=iB("TYPED_ARRAY_TAG"),fB="TypedArrayConstructor",bB=YQ&&!!eB&&"Opera"!==PQ(XQ.opera),yB={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},vB={BigInt64Array:8,BigUint64Array:8},UB=function(t){var e=tB(t);if(OQ(e)){var r=aB(e);return r&&KQ(r,fB)?r[fB]:UB(e)}};for(_Q in yB)(GQ=(zQ=XQ[_Q])&&zQ.prototype)?nB(GQ)[fB]=zQ:bB=!1;for(_Q in vB)(GQ=(zQ=XQ[_Q])&&zQ.prototype)&&(nB(GQ)[fB]=zQ);if((!bB||!WQ(uB)||uB===Function.prototype)&&(uB=function(){throw new gB("Incorrect invocation")},bB))for(_Q in yB)XQ[_Q]&&eB(XQ[_Q],uB);if((!bB||!dB||dB===hB)&&(dB=uB.prototype,bB))for(_Q in yB)XQ[_Q]&&eB(XQ[_Q].prototype,dB);if(bB&&tB(lB)!==dB&&eB(lB,dB),JQ&&!KQ(dB,pB))for(_Q in qQ(dB,pB,{configurable:!0,get:function(){return OQ(this)?this[mB]:void 0}}),yB)XQ[_Q]&&ZQ(XQ[_Q].prototype,mB,_Q);var QB={aTypedArray:function(t){if(function(t){if(!OQ(t))return!1;var e=PQ(t);return KQ(yB,e)||KQ(vB,e)}(t))return t;throw new gB("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,i){if(JQ){if(r)for(var n in yB){var a=XQ[n];if(a&&KQ(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}dB[t]&&!r||jQ(dB,t,r?e:bB&&oB[t]||e,i)}},getTypedArrayConstructor:UB},BB=xn,FB=se,IB=TypeError,CB=function(t){var e=BB(t);return"BigInt64Array"===e||"BigUint64Array"===e},AB=Si,xB=Bi,EB=function(t){var e=FB(t,"number");if("number"==typeof e)throw new IB("Can't convert number to bigint");return BigInt(e)},wB=QB.aTypedArray,SB=QB.getTypedArrayConstructor,RB=QB.exportTypedArrayMethod,NB=RangeError,LB=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),MB=LB&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();RB("with",{with:function(t,e){var r=wB(this),i=AB(r),n=xB(t),a=n<0?i+n:n,s=CB(r)?EB(e):+e;if(a>=i||a<0)throw new NB("Incorrect index");for(var o=new(SB(r))(i),c=0;c<i;c++)o[c]=c===a?s:r[c];return o}}.with,!LB||MB);var DB=Si,kB=ft,TB=String,VB=TypeError,HB=function(t){if(void 0===t||kB(t))return t;throw new VB(TB(t)+" is not an object or undefined")},$B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_B=$B+"+/",zB=$B+"-_",GB=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},YB={i2c:_B,c2i:GB(_B),i2cUrl:zB,c2iUrl:GB(zB)},JB=TypeError,XB=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new JB("Incorrect `alphabet` option")},WB=r,OB=u,KB=HB,PB=Cv,ZB=U,jB=XB,qB=ko,tF=YB.c2i,eF=YB.c2iUrl,rF=WB.SyntaxError,iF=WB.TypeError,nF=OB("".charAt),aF=function(t,e){for(var r=t.length;e<r;e++){var i=nF(t,e);if(" "!==i&&"\t"!==i&&"\n"!==i&&"\f"!==i&&"\r"!==i)break}return e},sF=function(t,e,r){var i=t.length;i<4&&(t+=2===i?"AA":"A");var n=(e[nF(t,0)]<<18)+(e[nF(t,1)]<<12)+(e[nF(t,2)]<<6)+e[nF(t,3)],a=[n>>16&255,n>>8&255,255&n];if(2===i){if(r&&0!==a[1])throw new rF("Extra bits");return[a[0]]}if(3===i){if(r&&0!==a[2])throw new rF("Extra bits");return[a[0],a[1]]}return a},oF=function(t,e,r){for(var i=e.length,n=0;n<i;n++)t[r+n]=e[n];return r+i},cF=function(t,e,r,i){PB(t),KB(e);var n="base64"===jB(e)?tF:eF,a=e?e.lastChunkHandling:void 0;if(void 0===a&&(a="loose"),"loose"!==a&&"strict"!==a&&"stop-before-partial"!==a)throw new iF("Incorrect `lastChunkHandling` option");r&&qB(r.buffer);var s=t.length,o=r||[],c=0,l=0,u="",d=0;if(i)for(;;){if((d=aF(t,d))===s){if(u.length>0){if("stop-before-partial"===a)break;if("loose"!==a)throw new rF("Missing padding");if(1===u.length)throw new rF("Malformed padding: exactly one additional character");c=oF(o,sF(u,n,!1),c)}l=s;break}var h=nF(t,d);if(++d,"="===h){if(u.length<2)throw new rF("Padding is too early");if(d=aF(t,d),2===u.length){if(d===s){if("stop-before-partial"===a)break;throw new rF("Malformed padding: only one =")}"="===nF(t,d)&&(++d,d=aF(t,d))}if(d<s)throw new rF("Unexpected character after padding");c=oF(o,sF(u,n,"strict"===a),c),l=s;break}if(!ZB(n,h))throw new rF("Unexpected character");var g=i-c;if(1===g&&2===u.length||2===g&&3===u.length)break;if(4===(u+=h).length&&(c=oF(o,sF(u,n,!1),c),u="",l=d,c===i))break}return{bytes:o,read:l,written:c}},lF=vn,uF=function(t,e,r){for(var i=0,n=arguments.length>2?r:DB(e),a=new t(n);n>i;)a[i]=e[i++];return a},dF=cF,hF=r.Uint8Array,gF=!hF||!hF.fromBase64||!function(){try{return void hF.fromBase64("a")}catch(t){}try{hF.fromBase64("",null)}catch(t){return!0}}();hF&&lF({target:"Uint8Array",stat:!0,forced:gF},{fromBase64:function(t){var e=dF(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return uF(hF,e.bytes)}});var pF=r,mF=u,fF=pF.Uint8Array,bF=pF.SyntaxError,yF=Math.min,vF=mF("".match),UF=function(t,e){var r=t.length;if(r%2!=0)throw new bF("String should be an even number of characters");for(var i=e?yF(e.length,r/2):r/2,n=e||new fF(i),a=vF(t,/.{2}/g),s=0;s<i;s++){var o=+("0x"+a[s]+"0");if(o!=o)throw new bF("String should only contain hex characters");n[s]=o>>4}return{bytes:n,read:s<<1}},QF=vn,BF=Cv,FF=UF;r.Uint8Array&&QF({target:"Uint8Array",stat:!0},{fromHex:function(t){return FF(BF(t)).bytes}});var IF=xn,CF=TypeError,AF=function(t){if("Uint8Array"===IF(t))return t;throw new CF("Argument is not an Uint8Array")},xF=vn,EF=cF,wF=AF,SF=r.Uint8Array,RF=!SF||!SF.prototype.setFromBase64||!function(){var t=new SF([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();SF&&xF({target:"Uint8Array",proto:!0,forced:RF},{setFromBase64:function(t){wF(this);var e=EF(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var NF=vn,LF=Cv,MF=AF,DF=ko,kF=UF;r.Uint8Array&&NF({target:"Uint8Array",proto:!0,forced:function(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(t){return!0}}()},{setFromHex:function(t){MF(this),LF(t),DF(this.buffer);var e=kF(t,this).read;return{read:e,written:e/2}}});var TF=vn,VF=r,HF=HB,$F=AF,_F=ko,zF=XB,GF=YB.i2c,YF=YB.i2cUrl,JF=u("".charAt),XF=VF.Uint8Array,WF=!XF||!XF.prototype.toBase64||!function(){try{(new XF).toBase64(null)}catch(t){return!0}}();XF&&TF({target:"Uint8Array",proto:!0,forced:WF},{toBase64:function(){var t=$F(this),e=arguments.length?HF(arguments[0]):void 0,r="base64"===zF(e)?GF:YF,i=!!e&&!!e.omitPadding;_F(this.buffer);for(var n,a="",s=0,o=t.length,c=function(t){return JF(r,n>>6*t&63)};s+2<o;s+=3)n=(t[s]<<16)+(t[s+1]<<8)+t[s+2],a+=c(3)+c(2)+c(1)+c(0);return s+2===o?(n=(t[s]<<16)+(t[s+1]<<8),a+=c(3)+c(2)+c(1)+(i?"":"=")):s+1===o&&(n=t[s]<<16,a+=c(3)+c(2)+(i?"":"==")),a}});var OF=vn,KF=r,PF=u,ZF=AF,jF=ko,qF=PF(1.1.toString),tI=PF([].join),eI=Array,rI=KF.Uint8Array,iI=!rI||!rI.prototype.toHex||!function(){try{return"ffffffffffffffff"===new rI([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();rI&&OF({target:"Uint8Array",proto:!0,forced:iI},{toHex:function(){ZF(this),jF(this.buffer);for(var t=eI(this.length),e=0,r=this.length;e<r;e++){var i=qF(this[e],16);t[e]=1===i.length?"0"+i:i}return tI(t,"")}});var nI=u,aI=WeakMap.prototype,sI={WeakMap:WeakMap,set:nI(aI.set),get:nI(aI.get),has:nI(aI.has),remove:nI(aI.delete)},oI=sI.get,cI=sI.has,lI=sI.set;vn({target:"WeakMap",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return cI(this,t)?oI(this,t):(lI(this,t,e),e)}});var uI=sI.has,dI=sI,hI=new dI.WeakMap,gI=dI.set,pI=dI.remove,mI=Jt,fI=function(t){return uI(t),t},bI=function(t){return gI(hI,t,1),pI(hI,t),t},yI=sI.get,vI=sI.has,UI=sI.set;vn({target:"WeakMap",proto:!0,real:!0,forced:!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}()},{getOrInsertComputed:function(t,e){if(fI(this),bI(t),mI(e),vI(this,t))return yI(this,t);var r=e(t);return UI(this,t,r),r}});var QI=pt,BI=ft,FI=aa,II=vn,CI=r,AI=Lt,xI=Re,EI=dt.f,wI=U,SI=wc,RI=function(t,e,r){var i,n;return FI&&QI(i=e.constructor)&&i!==r&&BI(n=i.prototype)&&n!==r.prototype&&FI(t,n),t},NI=Oa,LI={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},MI=Ta,DI=ht,kI="DOMException",TI=AI("Error"),VI=AI(kI),HI=function(){SI(this,$I);var t=arguments.length,e=NI(t<1?void 0:arguments[0]),r=NI(t<2?void 0:arguments[1],"Error"),i=new VI(e,r),n=new TI(e);return n.name=kI,EI(i,"stack",xI(1,MI(n.stack,1))),RI(i,this,HI),i},$I=HI.prototype=VI.prototype,_I="stack"in new TI(kI),zI="stack"in new VI(1,2),GI=VI&&DI&&Object.getOwnPropertyDescriptor(CI,kI),YI=!(!GI||GI.writable&&GI.configurable),JI=_I&&!YI&&!zI;II({global:!0,constructor:!0,forced:JI},{DOMException:JI?HI:VI});var XI=AI(kI),WI=XI.prototype;if(WI.constructor!==XI)for(var OI in EI(WI,"constructor",xI(1,XI)),LI)if(wI(LI,OI)){var KI=LI[OI],PI=KI.s;wI(XI,PI)||EI(XI,PI,xI(6,KI.c))}var ZI,jI,qI,tC,eC=TypeError,rC=function(t,e){if(t<e)throw new eC("Not enough arguments");return t},iC=z,nC=/ipad|iphone|ipod/i.test(iC)&&/applewebkit/i.test(iC),aC=r,sC=hg,oC=Vc,cC=pt,lC=U,uC=n,dC=ba,hC=cm,gC=Ut,pC=rC,mC=nC,fC=zo,bC=aC.setImmediate,yC=aC.clearImmediate,vC=aC.process,UC=aC.Dispatch,QC=aC.Function,BC=aC.MessageChannel,FC=aC.String,IC=0,CC={},AC="onreadystatechange";uC(function(){ZI=aC.location});var xC=function(t){if(lC(CC,t)){var e=CC[t];delete CC[t],e()}},EC=function(t){return function(){xC(t)}},wC=function(t){xC(t.data)},SC=function(t){aC.postMessage(FC(t),ZI.protocol+"//"+ZI.host)};bC&&yC||(bC=function(t){pC(arguments.length,1);var e=cC(t)?t:QC(t),r=hC(arguments,1);return CC[++IC]=function(){sC(e,void 0,r)},jI(IC),IC},yC=function(t){delete CC[t]},fC?jI=function(t){vC.nextTick(EC(t))}:UC&&UC.now?jI=function(t){UC.now(EC(t))}:BC&&!mC?(tC=(qI=new BC).port2,qI.port1.onmessage=wC,jI=oC(tC.postMessage,tC)):aC.addEventListener&&cC(aC.postMessage)&&!aC.importScripts&&ZI&&"file:"!==ZI.protocol&&!uC(SC)?(jI=SC,aC.addEventListener("message",wC,!1)):jI=AC in gC("script")?function(t){dC.appendChild(gC("script"))[AC]=function(){dC.removeChild(this),xC(t)}}:function(t){setTimeout(EC(t),0)});var RC={set:bC,clear:yC},NC=RC.clear;vn({global:!0,bind:!0,enumerable:!0,forced:r.clearImmediate!==NC},{clearImmediate:NC});var LC=r,MC=hg,DC=pt,kC=_o,TC=z,VC=cm,HC=rC,$C=LC.Function,_C=/MSIE .\./.test(TC)||"BUN"===kC&&function(){var t=LC.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),zC=vn,GC=r,YC=RC.set,JC=function(t,e){var r=e?2:1;return _C?function(i,n){var a=HC(arguments.length,1)>r,s=DC(i)?i:$C(i),o=a?VC(arguments,r):[],c=a?function(){MC(s,this,o)}:s;return e?t(c,n):t(c)}:t},XC=GC.setImmediate?JC(YC,!1):YC;zC({global:!0,bind:!0,enumerable:!0,forced:GC.setImmediate!==XC},{setImmediate:XC});var WC,OC=n,KC=r.RegExp,PC=!OC(function(){var t=!0;try{KC(".","d")}catch(e){t=!1}var e={},r="",i=t?"dgimsy":"gimsy",n=function(t,i){Object.defineProperty(e,t,{get:function(){return r+=i,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)n(s,a[s]);return Object.getOwnPropertyDescriptor(KC.prototype,"flags").get.call(e)!==i||r!==i}),ZC=xt,jC=St,qC=U,tA=Mt,eA={correct:PC},rA=function(){var t=ZC(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},iA=RegExp.prototype,nA=vn,aA=r,sA=Lt,oA=u,cA=n,lA=H,uA=pt,dA=Qb,hA=d,gA=ft,pA=Ht,mA=Dd,fA=xt,bA=xn,yA=U,vA=Rs,UA=hr,QA=Si,BA=rC,FA=eA.correct?function(t){return t.flags}:function(t){return eA.correct||!tA(iA,t)||qC(t,"flags")?t.flags:jC(rA,t)},IA=Wm,CA=aU,AA=bU,xA=ic,EA=Ha,wA=Ko,SA=aA.Object,RA=aA.Array,NA=aA.Date,LA=aA.Error,MA=aA.TypeError,DA=aA.PerformanceMark,kA=sA("DOMException"),TA=IA.Map,VA=IA.has,HA=IA.get,$A=IA.set,_A=CA.Set,zA=CA.add,GA=CA.has,YA=sA("Object","keys"),JA=oA([].push),XA=oA((!0).valueOf),WA=oA(1.1.valueOf),OA=oA("".valueOf),KA=oA(NA.prototype.getTime),PA=lA("structuredClone"),ZA="DataCloneError",jA="Transferring",qA=function(t){return!cA(function(){var e=new aA.Set([7]),r=t(e),i=t(SA(7));return r===e||!r.has(7)||!gA(i)||7!==+i})&&t},tx=function(t,e){return!cA(function(){var r=new e,i=t({a:r,b:r});return!(i&&i.a===i.b&&i.a instanceof e&&i.a.stack===r.stack)})},ex=aA.structuredClone,rx=!tx(ex,LA)||!tx(ex,kA)||(WC=ex,!!cA(function(){var t=WC(new aA.AggregateError([1],PA,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==PA||3!==t.cause})),ix=!ex&&qA(function(t){return new DA(PA,{detail:t}).detail}),nx=qA(ex)||ix,ax=function(t){throw new kA("Uncloneable type: "+t,ZA)},sx=function(t,e){throw new kA((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",ZA)},ox=function(t,e){return nx||sx(e),nx(t)},cx=function(t,e,r){if(VA(e,t))return HA(e,t);var i,n,a,s,o,c;if("SharedArrayBuffer"===(r||bA(t)))i=nx?nx(t):t;else{var l=aA.DataView;l||uA(t.slice)||sx("ArrayBuffer");try{if(uA(t.slice)&&!t.resizable)i=t.slice(0);else{n=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,i=new ArrayBuffer(n,a),s=new l(t),o=new l(i);for(c=0;c<n;c++)o.setUint8(c,s.getUint8(c))}}catch(t){throw new kA("ArrayBuffer is detached",ZA)}}return $A(e,t,i),i},lx=function(t,e){if(pA(t)&&ax("Symbol"),!gA(t))return t;if(e){if(VA(e,t))return HA(e,t)}else e=new TA;var r,i,n,a,s,o,c,l,u=bA(t);switch(u){case"Array":n=RA(QA(t));break;case"Object":n={};break;case"Map":n=new TA;break;case"Set":n=new _A;break;case"RegExp":n=new RegExp(t.source,FA(t));break;case"Error":switch(i=t.name){case"AggregateError":n=new(sA(i))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":n=new(sA(i));break;case"CompileError":case"LinkError":case"RuntimeError":n=new(sA("WebAssembly",i));break;default:n=new LA}break;case"DOMException":n=new kA(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":n=cx(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,n=function(t,e,r,i,n){var a=aA[e];return gA(a)||sx(e),new a(cx(t.buffer,n),r,i)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{n=new DOMQuad(lx(t.p1,e),lx(t.p2,e),lx(t.p3,e),lx(t.p4,e))}catch(e){n=ox(t,u)}break;case"File":if(nx)try{n=nx(t),bA(n)!==u&&(n=void 0)}catch(t){}if(!n)try{n=new File([t],t.name,t)}catch(t){}n||sx(u);break;case"FileList":if(a=function(){var t;try{t=new aA.DataTransfer}catch(e){try{t=new aA.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(s=0,o=QA(t);s<o;s++)a.items.add(lx(t[s],e));n=a.files}else n=ox(t,u);break;case"ImageData":try{n=new ImageData(lx(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){n=ox(t,u)}break;default:if(nx)n=nx(t);else switch(u){case"BigInt":n=SA(t.valueOf());break;case"Boolean":n=SA(XA(t));break;case"Number":n=SA(WA(t));break;case"String":n=SA(OA(t));break;case"Date":n=new NA(KA(t));break;case"Blob":try{n=t.slice(0,t.size,t.type)}catch(t){sx(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=aA[u];try{n=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){sx(u)}break;case"DOMRect":case"DOMRectReadOnly":r=aA[u];try{n=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){sx(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=aA[u];try{n=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){sx(u)}break;case"AudioData":case"VideoFrame":uA(t.clone)||sx(u);try{n=t.clone()}catch(t){ax(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":sx(u);default:ax(u)}}switch($A(e,t,n),u){case"Array":case"Object":for(c=YA(t),s=0,o=QA(c);s<o;s++)l=c[s],vA(n,l,lx(t[l],e));break;case"Map":t.forEach(function(t,r){$A(n,lx(r,e),lx(t,e))});break;case"Set":t.forEach(function(t){zA(n,lx(t,e))});break;case"Error":UA(n,"message",lx(t.message,e)),yA(t,"cause")&&UA(n,"cause",lx(t.cause,e)),"AggregateError"===i?n.errors=lx(t.errors,e):"SuppressedError"===i&&(n.error=lx(t.error,e),n.suppressed=lx(t.suppressed,e));case"DOMException":EA&&UA(n,"stack",lx(t.stack,e))}return n};nA({global:!0,enumerable:!0,sham:!wA,forced:rx},{structuredClone:function(t){var e,r,i=BA(arguments.length,1)>1&&!hA(arguments[1])?fA(arguments[1]):void 0,n=i?i.transfer:void 0;void 0!==n&&(r=function(t,e){if(!gA(t))throw new MA("Transfer option cannot be converted to a sequence");var r=[];mA(t,function(t){JA(r,fA(t))});for(var i,n,a,s,o,c=0,l=QA(r),u=new _A;c<l;){if(i=r[c++],s=void 0,"ArrayBuffer"===(n=bA(i))?GA(u,i):VA(e,i))throw new kA("Duplicate transferable",ZA);if("ArrayBuffer"!==n){if(wA)s=ex(i,{transfer:[i]});else switch(n){case"ImageBitmap":a=aA.OffscreenCanvas,dA(a)||sx(n,jA);try{(o=new a(i.width,i.height)).getContext("bitmaprenderer").transferFromImageBitmap(i),s=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":uA(i.clone)&&uA(i.close)||sx(n,jA);try{s=i.clone(),i.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":sx(n,jA)}if(void 0===s)throw new kA("This object cannot be transferred: "+n,ZA);$A(e,i,s)}else zA(u,i)}return u}(n,e=new TA));var a=lx(t,e);return r&&function(t){AA(t,function(t){wA?ex(t,{transfer:[t]}):uA(t.transfer)?t.transfer():xA?xA(t):sx("ArrayBuffer",jA)})}(r),a}});var ux=n,dx=ht,hx=lt("iterator"),gx=!ux(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),i="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),i+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!dx||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[hx]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==i||"x"!==new URL("https://x",void 0).host}),px=vn,mx=n,fx=rC,bx=Xa,yx=gx,vx=Lt("URL"),Ux=yx&&mx(function(){vx.canParse()}),Qx=mx(function(){return 1!==vx.canParse.length});px({target:"URL",stat:!0,forced:!Ux||Qx},{canParse:function(t){var e=fx(arguments.length,1),r=bx(t),i=e<2||void 0===arguments[1]?void 0:bx(arguments[1]);try{return!!new vx(r,i)}catch(t){return!1}}});var Bx=vn,Fx=rC,Ix=Xa,Cx=gx,Ax=Lt("URL");Bx({target:"URL",stat:!0,forced:!Cx},{parse:function(t){var e=Fx(arguments.length,1),r=Ix(t),i=e<2||void 0===arguments[1]?void 0:Ix(arguments[1]);try{return new Ax(r,i)}catch(t){return null}}});const xx=new Map;var Ex={set(t,e,r){xx.has(t)||xx.set(t,new Map);const i=xx.get(t);i.has(e)||0===i.size?i.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>xx.has(t)&&xx.get(t).get(e)||null,remove(t,e){if(!xx.has(t))return;const r=xx.get(t);r.delete(e),0===r.size&&xx.delete(t)}};const wx="transitionend",Sx=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),Rx=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),Nx=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),Lx=t=>Nx(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(Sx(t)):null,Mx=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Dx=[],kx=t=>{var e;e=()=>{const e=Mx();if(e){const r=t.NAME,i=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=i,t.jQueryInterface)}},"loading"===document.readyState?(Dx.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Dx)t()}),Dx.push(e)):e()},Tx=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,Vx=(t,e,r=!0)=>{if(!r)return void Tx(t);const i=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const i=Number.parseFloat(e),n=Number.parseFloat(r);return i||n?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let n=!1;const a=({target:r})=>{r===e&&(n=!0,e.removeEventListener(wx,a),Tx(t))};e.addEventListener(wx,a),setTimeout(()=>{n||e.dispatchEvent(new Event(wx))},i)},Hx=/[^.]*(?=\..*)\.|.*/,$x=/\..*/,_x=/::\d+$/,zx={};let Gx=1;const Yx={mouseenter:"mouseover",mouseleave:"mouseout"},Jx=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Xx(t,e){return e&&`${e}::${Gx++}`||t.uidEvent||Gx++}function Wx(t){const e=Xx(t);return t.uidEvent=e,zx[e]=zx[e]||{},zx[e]}function Ox(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function Kx(t,e,r){const i="string"==typeof e,n=i?r:e||r;let a=qx(t);return Jx.has(a)||(a=t),[i,n,a]}function Px(t,e,r,i,n){if("string"!=typeof e||!t)return;let[a,s,o]=Kx(e,r,i);if(e in Yx){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s=t(s)}const c=Wx(t),l=c[o]||(c[o]={}),u=Ox(l,s,a?r:null);if(u)return void(u.oneOff=u.oneOff&&n);const d=Xx(s,e.replace(Hx,"")),h=a?function(t,e,r){return function i(n){const a=t.querySelectorAll(e);for(let{target:s}=n;s&&s!==this;s=s.parentNode)for(const o of a)if(o===s)return eE(n,{delegateTarget:s}),i.oneOff&&tE.off(t,n.type,e,r),r.apply(s,[n])}}(t,r,s):function(t,e){return function r(i){return eE(i,{delegateTarget:t}),r.oneOff&&tE.off(t,i.type,e),e.apply(t,[i])}}(t,s);h.delegationSelector=a?r:null,h.callable=s,h.oneOff=n,h.uidEvent=d,l[d]=h,t.addEventListener(o,h,a)}function Zx(t,e,r,i,n){const a=Ox(e[r],i,n);a&&(t.removeEventListener(r,a,Boolean(n)),delete e[r][a.uidEvent])}function jx(t,e,r,i){const n=e[r]||{};for(const[a,s]of Object.entries(n))a.includes(i)&&Zx(t,e,r,s.callable,s.delegationSelector)}function qx(t){return t=t.replace($x,""),Yx[t]||t}const tE={on(t,e,r,i){Px(t,e,r,i,!1)},one(t,e,r,i){Px(t,e,r,i,!0)},off(t,e,r,i){if("string"!=typeof e||!t)return;const[n,a,s]=Kx(e,r,i),o=s!==e,c=Wx(t),l=c[s]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(c))jx(t,c,r,e.slice(1));for(const[r,i]of Object.entries(l)){const n=r.replace(_x,"");o&&!e.includes(n)||Zx(t,c,s,i.callable,i.delegationSelector)}}else{if(!Object.keys(l).length)return;Zx(t,c,s,a,n?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const i=Mx();let n=null,a=!0,s=!0,o=!1;e!==qx(e)&&i&&(n=i.Event(e,r),i(t).trigger(n),a=!n.isPropagationStopped(),s=!n.isImmediatePropagationStopped(),o=n.isDefaultPrevented());const c=eE(new Event(e,{bubbles:a,cancelable:!0}),r);return o&&c.preventDefault(),s&&t.dispatchEvent(c),c.defaultPrevented&&n&&n.preventDefault(),c}};function eE(t,e={}){for(const[r,i]of Object.entries(e))try{t[r]=i}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>i})}return t}function rE(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function iE(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const nE={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${iE(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${iE(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const i of r){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=rE(t.dataset[i])}return e},getDataAttribute:(t,e)=>rE(t.getAttribute(`data-bs-${iE(e)}`))};class aE{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=Nx(e)?nE.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...Nx(e)?nE.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,i]of Object.entries(e)){const e=t[r],n=Nx(e)?"element":Rx(e);if(!new RegExp(i).test(n))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${n}" but expected type "${i}".`)}}}class sE extends aE{constructor(t,e){super(),(t=Lx(t))&&(this._element=t,this._config=this._getConfig(e),Ex.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ex.remove(this._element,this.constructor.DATA_KEY),tE.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){Vx(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ex.get(Lx(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const oE='[data-bs-toggle="button"]';class cE extends sE{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=cE.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}tE.on(document,"click.bs.button.data-api",oE,t=>{t.preventDefault();const e=t.target.closest(oE);cE.getOrCreateInstance(e).toggle()}),kx(cE);const lE=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>Sx(t)).join(","):null},uE={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let i=t.parentNode.closest(e);for(;i;)r.push(i),i=i.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>{if(!Nx(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e})(t))},getSelectorFromElement(t){const e=lE(t);return e&&uE.findOne(e)?e:null},getElementFromSelector(t){const e=lE(t);return e?uE.findOne(e):null},getMultipleElementsFromSelector(t){const e=lE(t);return e?uE.find(e):[]}},dE=".bs.collapse",hE=`show${dE}`,gE=`shown${dE}`,pE=`hide${dE}`,mE=`hidden${dE}`,fE=`click${dE}.data-api`,bE="show",yE="collapse",vE="collapsing",UE=`:scope .${yE} .${yE}`,QE='[data-bs-toggle="collapse"]',BE={parent:null,toggle:!0},FE={parent:"(null|element)",toggle:"boolean"};class IE extends sE{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=uE.find(QE);for(const t of r){const e=uE.getSelectorFromElement(t),r=uE.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return BE}static get DefaultType(){return FE}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>IE.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(tE.trigger(this._element,hE).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(yE),this._element.classList.add(vE),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(vE),this._element.classList.add(yE,bE),this._element.style[e]="",tE.trigger(this._element,gE)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(tE.trigger(this._element,pE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,this._element.offsetHeight,this._element.classList.add(vE),this._element.classList.remove(yE,bE);for(const t of this._triggerArray){const e=uE.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(vE),this._element.classList.add(yE),tE.trigger(this._element,mE)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(bE)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=Lx(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(QE);for(const e of t){const t=uE.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=uE.find(UE,this._config.parent);return uE.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=IE.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}tE.on(document,fE,QE,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of uE.getMultipleElementsFromSelector(this))IE.getOrCreateInstance(t,{toggle:!1}).toggle()}),kx(IE);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const CE=globalThis,AE=CE.ShadowRoot&&(void 0===CE.ShadyCSS||CE.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xE=Symbol(),EE=new WeakMap;let wE=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==xE)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(AE&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=EE.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&EE.set(e,t))}return t}toString(){return this.cssText}};const SE=t=>new wE("string"==typeof t?t:t+"",void 0,xE),RE=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new wE(r,t,xE)},NE=AE?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return SE(e)})(t):t,{is:LE,defineProperty:ME,getOwnPropertyDescriptor:DE,getOwnPropertyNames:kE,getOwnPropertySymbols:TE,getPrototypeOf:VE}=Object,HE=globalThis,$E=HE.trustedTypes,_E=$E?$E.emptyScript:"",zE=HE.reactiveElementPolyfillSupport,GE=(t,e)=>t,YE={toAttribute(t,e){switch(e){case Boolean:t=t?_E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},JE=(t,e)=>!LE(t,e),XE={attribute:!0,type:String,converter:YE,reflect:!1,useDefault:!1,hasChanged:JE};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),HE.litPropertyMetadata??=new WeakMap;let WE=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=XE){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&ME(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=DE(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);n?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??XE}static _$Ei(){if(this.hasOwnProperty(GE("elementProperties")))return;const t=VE(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(GE("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(GE("properties"))){const t=this.properties,e=[...kE(t),...TE(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(NE(t))}else void 0!==t&&e.push(NE(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(AE)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),i=CE.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:YE).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:YE;this._$Em=i;const a=n.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,r,i=!1,n){if(void 0!==t){const a=this.constructor;if(!1===i&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??JE)(n,e)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};WE.elementStyles=[],WE.shadowRootOptions={mode:"open"},WE[GE("elementProperties")]=new Map,WE[GE("finalized")]=new Map,zE?.({ReactiveElement:WE}),(HE.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const OE=globalThis,KE=t=>t,PE=OE.trustedTypes,ZE=PE?PE.createPolicy("lit-html",{createHTML:t=>t}):void 0,jE="$lit$",qE=`lit$${Math.random().toFixed(9).slice(2)}$`,tw="?"+qE,ew=`<${tw}>`,rw=document,iw=()=>rw.createComment(""),nw=t=>null===t||"object"!=typeof t&&"function"!=typeof t,aw=Array.isArray,sw="[ \t\n\f\r]",ow=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cw=/-->/g,lw=/>/g,uw=RegExp(`>|${sw}(?:([^\\s"'>=/]+)(${sw}*=${sw}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),dw=/'/g,hw=/"/g,gw=/^(?:script|style|textarea|title)$/i,pw=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),mw=pw(1),fw=pw(2),bw=pw(3),yw=Symbol.for("lit-noChange"),vw=Symbol.for("lit-nothing"),Uw=new WeakMap,Qw=rw.createTreeWalker(rw,129);function Bw(t,e){if(!aw(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ZE?ZE.createHTML(e):e}const Fw=(t,e)=>{const r=t.length-1,i=[];let n,a=2===e?"<svg>":3===e?"<math>":"",s=ow;for(let e=0;e<r;e++){const r=t[e];let o,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===ow?"!--"===c[1]?s=cw:void 0!==c[1]?s=lw:void 0!==c[2]?(gw.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=uw):void 0!==c[3]&&(s=uw):s===uw?">"===c[0]?(s=n??ow,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,o=c[1],s=void 0===c[3]?uw:'"'===c[3]?hw:dw):s===hw||s===dw?s=uw:s===cw||s===lw?s=ow:(s=uw,n=void 0);const d=s===uw&&t[e+1].startsWith("/>")?" ":"";a+=s===ow?r+ew:l>=0?(i.push(o),r.slice(0,l)+jE+r.slice(l)+qE+d):r+qE+(-2===l?e:d)}return[Bw(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Iw{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,a=0;const s=t.length-1,o=this.parts,[c,l]=Fw(t,e);if(this.el=Iw.createElement(c,r),Qw.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Qw.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(jE)){const e=l[a++],r=i.getAttribute(t).split(qE),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:s[2],strings:r,ctor:"."===s[1]?ww:"?"===s[1]?Sw:"@"===s[1]?Rw:Ew}),i.removeAttribute(t)}else t.startsWith(qE)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(gw.test(i.tagName)){const t=i.textContent.split(qE),e=t.length-1;if(e>0){i.textContent=PE?PE.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],iw()),Qw.nextNode(),o.push({type:2,index:++n});i.append(t[e],iw())}}}else if(8===i.nodeType)if(i.data===tw)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(qE,t+1));)o.push({type:7,index:n}),t+=qE.length-1}n++}}static createElement(t,e){const r=rw.createElement("template");return r.innerHTML=t,r}}function Cw(t,e,r=t,i){if(e===yw)return e;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const a=nw(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(e=Cw(t,n._$AS(t,e.values),n,i)),e}class Aw{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??rw).importNode(e,!0);Qw.currentNode=i;let n=Qw.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new xw(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new Nw(n,this,t)),this._$AV.push(e),o=r[++s]}a!==o?.index&&(n=Qw.nextNode(),a++)}return Qw.currentNode=rw,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class xw{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=vw,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Cw(this,t,e),nw(t)?t===vw||null==t||""===t?(this._$AH!==vw&&this._$AR(),this._$AH=vw):t!==this._$AH&&t!==yw&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>aw(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==vw&&nw(this._$AH)?this._$AA.nextSibling.data=t:this.T(rw.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Iw.createElement(Bw(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Aw(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Uw.get(t.strings);return void 0===e&&Uw.set(t.strings,e=new Iw(t)),e}k(t){aw(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new xw(this.O(iw()),this.O(iw()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=KE(t).nextSibling;KE(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Ew{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=vw,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=vw}_$AI(t,e=this,r,i){const n=this.strings;let a=!1;if(void 0===n)t=Cw(this,t,e,0),a=!nw(t)||t!==this._$AH&&t!==yw,a&&(this._$AH=t);else{const i=t;let s,o;for(t=n[0],s=0;s<n.length-1;s++)o=Cw(this,i[r+s],e,s),o===yw&&(o=this._$AH[s]),a||=!nw(o)||o!==this._$AH[s],o===vw?t=vw:t!==vw&&(t+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!i&&this.j(t)}j(t){t===vw?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ww extends Ew{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===vw?void 0:t}}class Sw extends Ew{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==vw)}}class Rw extends Ew{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=Cw(this,t,e,0)??vw)===yw)return;const r=this._$AH,i=t===vw&&r!==vw||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==vw&&(r===vw||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nw{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Cw(this,t)}}const Lw=OE.litHtmlPolyfillSupport;Lw?.(Iw,xw),(OE.litHtmlVersions??=[]).push("3.3.2");const Mw=(t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=r?.renderBefore??null;i._$litPart$=n=new xw(e.insertBefore(iw(),t),t,void 0,r??{})}return n._$AI(t),n},Dw=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kw extends WE{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mw(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return yw}}kw._$litElement$=!0,kw.finalized=!0,Dw.litElementHydrateSupport?.({LitElement:kw});const Tw=Dw.litElementPolyfillSupport;function Vw(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Hw(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function $w(t){let e,r,i;function n(t,i,n=0,a=t.length){if(n<a){if(0!==e(i,i))return a;do{const e=n+a>>>1;r(t[e],i)<0?n=e+1:a=e}while(n<a)}return n}return 2!==t.length?(e=Vw,r=(e,r)=>Vw(t(e),r),i=(e,r)=>t(e)-r):(e=t===Vw||t===Hw?t:_w,r=t,i=t),{left:n,center:function(t,e,r=0,a=t.length){const s=n(t,e,r,a-1);return s>r&&i(t[s-1],e)>-i(t[s],e)?s-1:s},right:function(t,i,n=0,a=t.length){if(n<a){if(0!==e(i,i))return a;do{const e=n+a>>>1;r(t[e],i)<=0?n=e+1:a=e}while(n<a)}return n}}}function _w(){return 0}Tw?.({LitElement:kw}),(Dw.litElementVersions??=[]).push("4.2.2");const zw=$w(Vw).right;$w(function(t){return null===t?NaN:+t}).center;const Gw=Math.sqrt(50),Yw=Math.sqrt(10),Jw=Math.sqrt(2);function Xw(t,e,r){const i=(e-t)/Math.max(0,r),n=Math.floor(Math.log10(i)),a=i/Math.pow(10,n),s=a>=Gw?10:a>=Yw?5:a>=Jw?2:1;let o,c,l;return n<0?(l=Math.pow(10,-n)/s,o=Math.round(t*l),c=Math.round(e*l),o/l<t&&++o,c/l>e&&--c,l=-l):(l=Math.pow(10,n)*s,o=Math.round(t/l),c=Math.round(e/l),o*l<t&&++o,c*l>e&&--c),c<o&&.5<=r&&r<2?Xw(t,e,2*r):[o,c,l]}function Ww(t,e,r){return Xw(t=+t,e=+e,r=+r)[2]}function Ow(t){return t}var Kw=1e-6;function Pw(t){return"translate("+t+",0)"}function Zw(t){return"translate(0,"+t+")"}function jw(t){return e=>+t(e)}function qw(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function tS(){return!this.__axis}function eS(t,e){var r=[],i=null,n=null,a=6,s=6,o=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",d=1===t||3===t?Pw:Zw;function h(h){var g=null==i?e.ticks?e.ticks.apply(e,r):e.domain():i,p=null==n?e.tickFormat?e.tickFormat.apply(e,r):Ow:n,m=Math.max(a,0)+o,f=e.range(),b=+f[0]+c,y=+f[f.length-1]+c,v=(e.bandwidth?qw:jw)(e.copy(),c),U=h.selection?h.selection():h,Q=U.selectAll(".domain").data([null]),B=U.selectAll(".tick").data(g,e).order(),F=B.exit(),I=B.enter().append("g").attr("class","tick"),C=B.select("line"),A=B.select("text");Q=Q.merge(Q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),B=B.merge(I),C=C.merge(I.append("line").attr("stroke","currentColor").attr(u+"2",l*a)),A=A.merge(I.append("text").attr("fill","currentColor").attr(u,l*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==U&&(Q=Q.transition(h),B=B.transition(h),C=C.transition(h),A=A.transition(h),F=F.transition(h).attr("opacity",Kw).attr("transform",function(t){return isFinite(t=v(t))?d(t+c):this.getAttribute("transform")}),I.attr("opacity",Kw).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:v(t))+c)})),F.remove(),Q.attr("d",4===t||2===t?s?"M"+l*s+","+b+"H"+c+"V"+y+"H"+l*s:"M"+c+","+b+"V"+y:s?"M"+b+","+l*s+"V"+c+"H"+y+"V"+l*s:"M"+b+","+c+"H"+y),B.attr("opacity",1).attr("transform",function(t){return d(v(t)+c)}),C.attr(u+"2",l*a),A.attr(u,l*m).text(p),U.filter(tS).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),U.each(function(){this.__axis=v})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return r=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),h):r.slice()},h.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),h):i&&i.slice()},h.tickFormat=function(t){return arguments.length?(n=t,h):n},h.tickSize=function(t){return arguments.length?(a=s=+t,h):a},h.tickSizeInner=function(t){return arguments.length?(a=+t,h):a},h.tickSizeOuter=function(t){return arguments.length?(s=+t,h):s},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(c=+t,h):c},h}function rS(t){return eS(4,t)}var iS={value:()=>{}};function nS(){for(var t,e=0,r=arguments.length,i={};e<r;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new aS(i)}function aS(t){this._=t}function sS(t,e){for(var r,i=0,n=t.length;i<n;++i)if((r=t[i]).name===e)return r.value}function oS(t,e,r){for(var i=0,n=t.length;i<n;++i)if(t[i].name===e){t[i]=iS,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:e,value:r}),t}aS.prototype=nS.prototype={constructor:aS,on:function(t,e){var r,i,n=this._,a=(i=n,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),s=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=a[s]).type)n[r]=oS(n[r],t.name,e);else if(null==e)for(r in n)n[r]=oS(n[r],t.name,null);return this}for(;++s<o;)if((r=(t=a[s]).type)&&(r=sS(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new aS(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,i,n=new Array(r),a=0;a<r;++a)n[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(i=this._[t]).length;a<r;++a)i[a].value.apply(e,n)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],n=0,a=i.length;n<a;++n)i[n].value.apply(e,r)}};var cS="http://www.w3.org/1999/xhtml",lS={svg:"http://www.w3.org/2000/svg",xhtml:cS,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function uS(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),lS.hasOwnProperty(e)?{space:lS[e],local:t}:t}function dS(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===cS&&e.documentElement.namespaceURI===cS?e.createElement(t):e.createElementNS(r,t)}}function hS(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function gS(t){var e=uS(t);return(e.local?hS:dS)(e)}function pS(){}function mS(t){return null==t?pS:function(){return this.querySelector(t)}}function fS(){return[]}function bS(t){return null==t?fS:function(){return this.querySelectorAll(t)}}function yS(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function vS(t){return function(){return this.matches(t)}}function US(t){return function(e){return e.matches(t)}}var QS=Array.prototype.find;function BS(){return this.firstElementChild}var FS=Array.prototype.filter;function IS(){return Array.from(this.children)}function CS(t){return new Array(t.length)}function AS(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function xS(t,e,r,i,n,a){for(var s,o=0,c=e.length,l=a.length;o<l;++o)(s=e[o])?(s.__data__=a[o],i[o]=s):r[o]=new AS(t,a[o]);for(;o<c;++o)(s=e[o])&&(n[o]=s)}function ES(t,e,r,i,n,a,s){var o,c,l,u=new Map,d=e.length,h=a.length,g=new Array(d);for(o=0;o<d;++o)(c=e[o])&&(g[o]=l=s.call(c,c.__data__,o,e)+"",u.has(l)?n[o]=c:u.set(l,c));for(o=0;o<h;++o)l=s.call(t,a[o],o,a)+"",(c=u.get(l))?(i[o]=c,c.__data__=a[o],u.delete(l)):r[o]=new AS(t,a[o]);for(o=0;o<d;++o)(c=e[o])&&u.get(g[o])===c&&(n[o]=c)}function wS(t){return t.__data__}function SS(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function RS(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function NS(t){return function(){this.removeAttribute(t)}}function LS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function MS(t,e){return function(){this.setAttribute(t,e)}}function DS(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function kS(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function TS(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function VS(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function HS(t){return function(){this.style.removeProperty(t)}}function $S(t,e,r){return function(){this.style.setProperty(t,e,r)}}function _S(t,e,r){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,r)}}function zS(t,e){return t.style.getPropertyValue(e)||VS(t).getComputedStyle(t,null).getPropertyValue(e)}function GS(t){return function(){delete this[t]}}function YS(t,e){return function(){this[t]=e}}function JS(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function XS(t){return t.trim().split(/^|\s+/)}function WS(t){return t.classList||new OS(t)}function OS(t){this._node=t,this._names=XS(t.getAttribute("class")||"")}function KS(t,e){for(var r=WS(t),i=-1,n=e.length;++i<n;)r.add(e[i])}function PS(t,e){for(var r=WS(t),i=-1,n=e.length;++i<n;)r.remove(e[i])}function ZS(t){return function(){KS(this,t)}}function jS(t){return function(){PS(this,t)}}function qS(t,e){return function(){(e.apply(this,arguments)?KS:PS)(this,t)}}function tR(){this.textContent=""}function eR(t){return function(){this.textContent=t}}function rR(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function iR(){this.innerHTML=""}function nR(t){return function(){this.innerHTML=t}}function aR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function sR(){this.nextSibling&&this.parentNode.appendChild(this)}function oR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function cR(){return null}function lR(){var t=this.parentNode;t&&t.removeChild(this)}function uR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function dR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function hR(t){return function(){var e=this.__on;if(e){for(var r,i=0,n=-1,a=e.length;i<a;++i)r=e[i],t.type&&r.type!==t.type||r.name!==t.name?e[++n]=r:this.removeEventListener(r.type,r.listener,r.options);++n?e.length=n:delete this.__on}}}function gR(t,e,r){return function(){var i,n=this.__on,a=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(n)for(var s=0,o=n.length;s<o;++s)if((i=n[s]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=r),void(i.value=e);this.addEventListener(t.type,a,r),i={type:t.type,name:t.name,value:e,listener:a,options:r},n?n.push(i):this.__on=[i]}}function pR(t,e,r){var i=VS(t),n=i.CustomEvent;"function"==typeof n?n=new n(e,r):(n=i.document.createEvent("Event"),r?(n.initEvent(e,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(e,!1,!1)),t.dispatchEvent(n)}function mR(t,e){return function(){return pR(this,t,e)}}function fR(t,e){return function(){return pR(this,t,e.apply(this,arguments))}}AS.prototype={constructor:AS,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},OS.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var bR=[null];function yR(t,e){this._groups=t,this._parents=e}function vR(){return new yR([[document.documentElement]],bR)}function UR(t){return"string"==typeof t?new yR([[document.querySelector(t)]],[document.documentElement]):new yR([[t]],bR)}yR.prototype=vR.prototype={constructor:yR,select:function(t){"function"!=typeof t&&(t=mS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s,o=e[n],c=o.length,l=i[n]=new Array(c),u=0;u<c;++u)(a=o[u])&&(s=t.call(a,a.__data__,u,o))&&("__data__"in a&&(s.__data__=a.__data__),l[u]=s);return new yR(i,this._parents)},selectAll:function(t){t="function"==typeof t?yS(t):bS(t);for(var e=this._groups,r=e.length,i=[],n=[],a=0;a<r;++a)for(var s,o=e[a],c=o.length,l=0;l<c;++l)(s=o[l])&&(i.push(t.call(s,s.__data__,l,o)),n.push(s));return new yR(i,n)},selectChild:function(t){return this.select(null==t?BS:function(t){return function(){return QS.call(this.children,t)}}("function"==typeof t?t:US(t)))},selectChildren:function(t){return this.selectAll(null==t?IS:function(t){return function(){return FS.call(this.children,t)}}("function"==typeof t?t:US(t)))},filter:function(t){"function"!=typeof t&&(t=vS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s=e[n],o=s.length,c=i[n]=[],l=0;l<o;++l)(a=s[l])&&t.call(a,a.__data__,l,s)&&c.push(a);return new yR(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,wS);var r=e?ES:xS,i=this._parents,n=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var a=n.length,s=new Array(a),o=new Array(a),c=new Array(a),l=0;l<a;++l){var u=i[l],d=n[l],h=d.length,g=SS(t.call(u,u&&u.__data__,l,i)),p=g.length,m=o[l]=new Array(p),f=s[l]=new Array(p);r(u,d,m,f,c[l]=new Array(h),g,e);for(var b,y,v=0,U=0;v<p;++v)if(b=m[v]){for(v>=U&&(U=v+1);!(y=f[U])&&++U<p;);b._next=y||null}}return(s=new yR(s,i))._enter=o,s._exit=c,s},enter:function(){return new yR(this._enter||this._groups.map(CS),this._parents)},exit:function(){return new yR(this._exit||this._groups.map(CS),this._parents)},join:function(t,e,r){var i=this.enter(),n=this,a=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(n=e(n))&&(n=n.selection()),null==r?a.remove():r(a),i&&n?i.merge(n).order():n},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,i=e._groups,n=r.length,a=i.length,s=Math.min(n,a),o=new Array(n),c=0;c<s;++c)for(var l,u=r[c],d=i[c],h=u.length,g=o[c]=new Array(h),p=0;p<h;++p)(l=u[p]||d[p])&&(g[p]=l);for(;c<n;++c)o[c]=r[c];return new yR(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var i,n=t[e],a=n.length-1,s=n[a];--a>=0;)(i=n[a])&&(s&&4^i.compareDocumentPosition(s)&&s.parentNode.insertBefore(i,s),s=i);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=RS);for(var r=this._groups,i=r.length,n=new Array(i),a=0;a<i;++a){for(var s,o=r[a],c=o.length,l=n[a]=new Array(c),u=0;u<c;++u)(s=o[u])&&(l[u]=s);l.sort(e)}return new yR(n,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],n=0,a=i.length;n<a;++n){var s=i[n];if(s)return s}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,i=e.length;r<i;++r)for(var n,a=e[r],s=0,o=a.length;s<o;++s)(n=a[s])&&t.call(n,n.__data__,s,a);return this},attr:function(t,e){var r=uS(t);if(arguments.length<2){var i=this.node();return r.local?i.getAttributeNS(r.space,r.local):i.getAttribute(r)}return this.each((null==e?r.local?LS:NS:"function"==typeof e?r.local?TS:kS:r.local?DS:MS)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?HS:"function"==typeof e?_S:$S)(t,e,null==r?"":r)):zS(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?GS:"function"==typeof e?JS:YS)(t,e)):this.node()[t]},classed:function(t,e){var r=XS(t+"");if(arguments.length<2){for(var i=WS(this.node()),n=-1,a=r.length;++n<a;)if(!i.contains(r[n]))return!1;return!0}return this.each(("function"==typeof e?qS:e?ZS:jS)(r,e))},text:function(t){return arguments.length?this.each(null==t?tR:("function"==typeof t?rR:eR)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?iR:("function"==typeof t?aR:nR)(t)):this.node().innerHTML},raise:function(){return this.each(sR)},lower:function(){return this.each(oR)},append:function(t){var e="function"==typeof t?t:gS(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:gS(t),i=null==e?cR:"function"==typeof e?e:mS(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),i.apply(this,arguments)||null)})},remove:function(){return this.each(lR)},clone:function(t){return this.select(t?dR:uR)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var i,n,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),s=a.length;if(!(arguments.length<2)){for(o=e?gR:hR,i=0;i<s;++i)this.each(o(a[i],e,r));return this}var o=this.node().__on;if(o)for(var c,l=0,u=o.length;l<u;++l)for(i=0,c=o[l];i<s;++i)if((n=a[i]).type===c.type&&n.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?fR:mR)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i,n=t[e],a=0,s=n.length;a<s;++a)(i=n[a])&&(yield i)}};var QR=0;function BR(){return new FR}function FR(){this._="@"+(++QR).toString(36)}function IR(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var i=r.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();return[t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop]}}return[t.pageX,t.pageY]}FR.prototype=BR.prototype={constructor:FR,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const CR={passive:!1},AR={capture:!0,passive:!1};function xR(t){t.stopImmediatePropagation()}function ER(t){t.preventDefault(),t.stopImmediatePropagation()}var wR=t=>()=>t;function SR(t,{sourceEvent:e,subject:r,target:i,identifier:n,active:a,x:s,y:o,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}function RR(t){return!t.ctrlKey&&!t.button}function NR(){return this.parentNode}function LR(t,e){return null==e?{x:t.x,y:t.y}:e}function MR(){return navigator.maxTouchPoints||"ontouchstart"in this}function DR(){var t,e,r,i,n=RR,a=NR,s=LR,o=MR,c={},l=nS("start","drag","end"),u=0,d=0;function h(t){t.on("mousedown.drag",g).filter(o).on("touchstart.drag",f).on("touchmove.drag",b,CR).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(s,o){if(!i&&n.call(this,s,o)){var c=v(this,a.call(this,s,o),s,o,"mouse");c&&(UR(s.view).on("mousemove.drag",p,AR).on("mouseup.drag",m,AR),function(t){var e=t.document.documentElement,r=UR(t).on("dragstart.drag",ER,AR);"onselectstart"in e?r.on("selectstart.drag",ER,AR):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(s.view),xR(s),r=!1,t=s.clientX,e=s.clientY,c("start",s))}}function p(i){if(ER(i),!r){var n=i.clientX-t,a=i.clientY-e;r=n*n+a*a>d}c.mouse("drag",i)}function m(t){UR(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,i=UR(t).on("dragstart.drag",null);e&&(i.on("click.drag",ER,AR),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in r?i.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),ER(t),c.mouse("end",t)}function f(t,e){if(n.call(this,t,e)){var r,i,s=t.changedTouches,o=a.call(this,t,e),c=s.length;for(r=0;r<c;++r)(i=v(this,o,t,e,s[r].identifier,s[r]))&&(xR(t),i("start",t,s[r]))}}function b(t){var e,r,i=t.changedTouches,n=i.length;for(e=0;e<n;++e)(r=c[i[e].identifier])&&(ER(t),r("drag",t,i[e]))}function y(t){var e,r,n=t.changedTouches,a=n.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),e=0;e<a;++e)(r=c[n[e].identifier])&&(xR(t),r("end",t,n[e]))}function v(t,e,r,i,n,a){var o,d,g,p=l.copy(),m=IR(a||r,e);if(null!=(g=s.call(t,new SR("beforestart",{sourceEvent:r,target:h,identifier:n,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),i)))return o=g.x-m[0]||0,d=g.y-m[1]||0,function r(a,s,l){var f,b=m;switch(a){case"start":c[n]=r,f=u++;break;case"end":delete c[n],--u;case"drag":m=IR(l||s,e),f=u}p.call(a,t,new SR(a,{sourceEvent:s,subject:g,target:h,identifier:n,active:f,x:m[0]+o,y:m[1]+d,dx:m[0]-b[0],dy:m[1]-b[1],dispatch:p}),i)}}return h.filter=function(t){return arguments.length?(n="function"==typeof t?t:wR(!!t),h):n},h.container=function(t){return arguments.length?(a="function"==typeof t?t:wR(t),h):a},h.subject=function(t){return arguments.length?(s="function"==typeof t?t:wR(t),h):s},h.touchable=function(t){return arguments.length?(o="function"==typeof t?t:wR(!!t),h):o},h.on=function(){var t=l.on.apply(l,arguments);return t===l?h:t},h.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,h):Math.sqrt(d)},h}function kR(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function TR(t,e){var r=Object.create(t.prototype);for(var i in e)r[i]=e[i];return r}function VR(){}SR.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var HR=.7,$R=1/HR,_R="\\s*([+-]?\\d+)\\s*",zR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",GR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",YR=/^#([0-9a-f]{3,8})$/,JR=new RegExp(`^rgb\\(${_R},${_R},${_R}\\)$`),XR=new RegExp(`^rgb\\(${GR},${GR},${GR}\\)$`),WR=new RegExp(`^rgba\\(${_R},${_R},${_R},${zR}\\)$`),OR=new RegExp(`^rgba\\(${GR},${GR},${GR},${zR}\\)$`),KR=new RegExp(`^hsl\\(${zR},${GR},${GR}\\)$`),PR=new RegExp(`^hsla\\(${zR},${GR},${GR},${zR}\\)$`),ZR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function jR(){return this.rgb().formatHex()}function qR(){return this.rgb().formatRgb()}function tN(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=YR.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?eN(e):3===r?new nN(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?rN(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?rN(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=JR.exec(t))?new nN(e[1],e[2],e[3],1):(e=XR.exec(t))?new nN(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=WR.exec(t))?rN(e[1],e[2],e[3],e[4]):(e=OR.exec(t))?rN(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=KR.exec(t))?uN(e[1],e[2]/100,e[3]/100,1):(e=PR.exec(t))?uN(e[1],e[2]/100,e[3]/100,e[4]):ZR.hasOwnProperty(t)?eN(ZR[t]):"transparent"===t?new nN(NaN,NaN,NaN,0):null}function eN(t){return new nN(t>>16&255,t>>8&255,255&t,1)}function rN(t,e,r,i){return i<=0&&(t=e=r=NaN),new nN(t,e,r,i)}function iN(t,e,r,i){return 1===arguments.length?function(t){return t instanceof VR||(t=tN(t)),t?new nN((t=t.rgb()).r,t.g,t.b,t.opacity):new nN}(t):new nN(t,e,r,null==i?1:i)}function nN(t,e,r,i){this.r=+t,this.g=+e,this.b=+r,this.opacity=+i}function aN(){return`#${lN(this.r)}${lN(this.g)}${lN(this.b)}`}function sN(){const t=oN(this.opacity);return`${1===t?"rgb(":"rgba("}${cN(this.r)}, ${cN(this.g)}, ${cN(this.b)}${1===t?")":`, ${t})`}`}function oN(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function cN(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function lN(t){return((t=cN(t))<16?"0":"")+t.toString(16)}function uN(t,e,r,i){return i<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new hN(t,e,r,i)}function dN(t){if(t instanceof hN)return new hN(t.h,t.s,t.l,t.opacity);if(t instanceof VR||(t=tN(t)),!t)return new hN;if(t instanceof hN)return t;var e=(t=t.rgb()).r/255,r=t.g/255,i=t.b/255,n=Math.min(e,r,i),a=Math.max(e,r,i),s=NaN,o=a-n,c=(a+n)/2;return o?(s=e===a?(r-i)/o+6*(r<i):r===a?(i-e)/o+2:(e-r)/o+4,o/=c<.5?a+n:2-a-n,s*=60):o=c>0&&c<1?0:s,new hN(s,o,c,t.opacity)}function hN(t,e,r,i){this.h=+t,this.s=+e,this.l=+r,this.opacity=+i}function gN(t){return(t=(t||0)%360)<0?t+360:t}function pN(t){return Math.max(0,Math.min(1,t||0))}function mN(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}kR(VR,tN,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:jR,formatHex:jR,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return dN(this).formatHsl()},formatRgb:qR,toString:qR}),kR(nN,iN,TR(VR,{brighter(t){return t=null==t?$R:Math.pow($R,t),new nN(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?HR:Math.pow(HR,t),new nN(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new nN(cN(this.r),cN(this.g),cN(this.b),oN(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:aN,formatHex:aN,formatHex8:function(){return`#${lN(this.r)}${lN(this.g)}${lN(this.b)}${lN(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:sN,toString:sN})),kR(hN,function(t,e,r,i){return 1===arguments.length?dN(t):new hN(t,e,r,null==i?1:i)},TR(VR,{brighter(t){return t=null==t?$R:Math.pow($R,t),new hN(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?HR:Math.pow(HR,t),new hN(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,i=r+(r<.5?r:1-r)*e,n=2*r-i;return new nN(mN(t>=240?t-240:t+120,n,i),mN(t,n,i),mN(t<120?t+240:t-120,n,i),this.opacity)},clamp(){return new hN(gN(this.h),pN(this.s),pN(this.l),oN(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=oN(this.opacity);return`${1===t?"hsl(":"hsla("}${gN(this.h)}, ${100*pN(this.s)}%, ${100*pN(this.l)}%${1===t?")":`, ${t})`}`}}));var fN=t=>()=>t;function bN(t){return 1===(t=+t)?yN:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(i){return Math.pow(t+i*e,r)}}(e,r,t):fN(isNaN(e)?r:e)}}function yN(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):fN(isNaN(t)?e:t)}var vN=function t(e){var r=bN(e);function i(t,e){var i=r((t=iN(t)).r,(e=iN(e)).r),n=r(t.g,e.g),a=r(t.b,e.b),s=yN(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=n(e),t.b=a(e),t.opacity=s(e),t+""}}return i.gamma=t,i}(1);function UN(t,e){e||(e=[]);var r,i=t?Math.min(e.length,t.length):0,n=e.slice();return function(a){for(r=0;r<i;++r)n[r]=t[r]*(1-a)+e[r]*a;return n}}function QN(t,e){var r,i=e?e.length:0,n=t?Math.min(i,t.length):0,a=new Array(n),s=new Array(i);for(r=0;r<n;++r)a[r]=EN(t[r],e[r]);for(;r<i;++r)s[r]=e[r];return function(t){for(r=0;r<n;++r)s[r]=a[r](t);return s}}function BN(t,e){var r=new Date;return t=+t,e=+e,function(i){return r.setTime(t*(1-i)+e*i),r}}function FN(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function IN(t,e){var r,i={},n={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?i[r]=EN(t[r],e[r]):n[r]=e[r];return function(t){for(r in i)n[r]=i[r](t);return n}}var CN=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,AN=new RegExp(CN.source,"g");function xN(t,e){var r,i,n,a=CN.lastIndex=AN.lastIndex=0,s=-1,o=[],c=[];for(t+="",e+="";(r=CN.exec(t))&&(i=AN.exec(e));)(n=i.index)>a&&(n=e.slice(a,n),o[s]?o[s]+=n:o[++s]=n),(r=r[0])===(i=i[0])?o[s]?o[s]+=i:o[++s]=i:(o[++s]=null,c.push({i:s,x:FN(r,i)})),a=AN.lastIndex;return a<e.length&&(n=e.slice(a),o[s]?o[s]+=n:o[++s]=n),o.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var r,i=0;i<e;++i)o[(r=c[i]).i]=r.x(t);return o.join("")})}function EN(t,e){var r,i=typeof e;return null==e||"boolean"===i?fN(e):("number"===i?FN:"string"===i?(r=tN(e))?(e=r,vN):xN:e instanceof tN?vN:e instanceof Date?BN:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?UN:Array.isArray(e)?QN:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?IN:FN)(t,e)}function wN(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var SN,RN=180/Math.PI,NN={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function LN(t,e,r,i,n,a){var s,o,c;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(c=t*r+e*i)&&(r-=t*c,i-=e*c),(o=Math.sqrt(r*r+i*i))&&(r/=o,i/=o,c/=o),t*i<e*r&&(t=-t,e=-e,c=-c,s=-s),{translateX:n,translateY:a,rotate:Math.atan2(e,t)*RN,skewX:Math.atan(c)*RN,scaleX:s,scaleY:o}}function MN(t,e,r,i){function n(t){return t.length?t.pop()+" ":""}return function(a,s){var o=[],c=[];return a=t(a),s=t(s),function(t,i,n,a,s,o){if(t!==n||i!==a){var c=s.push("translate(",null,e,null,r);o.push({i:c-4,x:FN(t,n)},{i:c-2,x:FN(i,a)})}else(n||a)&&s.push("translate("+n+e+a+r)}(a.translateX,a.translateY,s.translateX,s.translateY,o,c),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(n(r)+"rotate(",null,i)-2,x:FN(t,e)})):e&&r.push(n(r)+"rotate("+e+i)}(a.rotate,s.rotate,o,c),function(t,e,r,a){t!==e?a.push({i:r.push(n(r)+"skewX(",null,i)-2,x:FN(t,e)}):e&&r.push(n(r)+"skewX("+e+i)}(a.skewX,s.skewX,o,c),function(t,e,r,i,a,s){if(t!==r||e!==i){var o=a.push(n(a)+"scale(",null,",",null,")");s.push({i:o-4,x:FN(t,r)},{i:o-2,x:FN(e,i)})}else 1===r&&1===i||a.push(n(a)+"scale("+r+","+i+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,o,c),a=s=null,function(t){for(var e,r=-1,i=c.length;++r<i;)o[(e=c[r]).i]=e.x(t);return o.join("")}}}var DN,kN,TN=MN(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?NN:LN(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),VN=MN(function(t){return null==t?NN:(SN||(SN=document.createElementNS("http://www.w3.org/2000/svg","g")),SN.setAttribute("transform",t),(t=SN.transform.baseVal.consolidate())?LN((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):NN)},", ",")",")"),HN=0,$N=0,_N=0,zN=0,GN=0,YN=0,JN="object"==typeof performance&&performance.now?performance:Date,XN="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function WN(){return GN||(XN(ON),GN=JN.now()+YN)}function ON(){GN=0}function KN(){this._call=this._time=this._next=null}function PN(t,e,r){var i=new KN;return i.restart(t,e,r),i}function ZN(){GN=(zN=JN.now())+YN,HN=$N=0;try{!function(){WN(),++HN;for(var t,e=DN;e;)(t=GN-e._time)>=0&&e._call.call(void 0,t),e=e._next;--HN}()}finally{HN=0,function(){var t,e,r=DN,i=1/0;for(;r;)r._call?(i>r._time&&(i=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:DN=e);kN=t,qN(i)}(),GN=0}}function jN(){var t=JN.now(),e=t-zN;e>1e3&&(YN-=e,zN=t)}function qN(t){HN||($N&&($N=clearTimeout($N)),t-GN>24?(t<1/0&&($N=setTimeout(ZN,t-JN.now()-YN)),_N&&(_N=clearInterval(_N))):(_N||(zN=JN.now(),_N=setInterval(jN,1e3)),HN=1,XN(ZN)))}function tL(t,e,r){var i=new KN;return e=null==e?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,r),i}KN.prototype=PN.prototype={constructor:KN,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?WN():+r)+(null==e?0:+e),this._next||kN===this||(kN?kN._next=this:DN=this,kN=this),this._call=t,this._time=r,qN()},stop:function(){this._call&&(this._call=null,this._time=1/0,qN())}};var eL=nS("start","end","cancel","interrupt"),rL=[];function iL(t,e,r,i,n,a){var s=t.__transition;if(s){if(r in s)return}else t.__transition={};!function(t,e,r){var i,n=t.__transition;function a(t){r.state=1,r.timer.restart(s,r.delay,r.time),r.delay<=t&&s(t-r.delay)}function s(a){var l,u,d,h;if(1!==r.state)return c();for(l in n)if((h=n[l]).name===r.name){if(3===h.state)return tL(s);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete n[l]):+l<e&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete n[l])}if(tL(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(a))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,i=new Array(d=r.tween.length),l=0,u=-1;l<d;++l)(h=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(i[++u]=h);i.length=u+1}}function o(e){for(var n=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(c),r.state=5,1),a=-1,s=i.length;++a<s;)i[a].call(t,n);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),c())}function c(){for(var i in r.state=6,r.timer.stop(),delete n[e],n)return;delete t.__transition}n[e]=r,r.timer=PN(a,0,r.time)}(t,r,{name:e,index:i,group:n,on:eL,tween:rL,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function nL(t,e){var r=sL(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function aL(t,e){var r=sL(t,e);if(r.state>3)throw new Error("too late; already running");return r}function sL(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function oL(t,e){var r,i;return function(){var n=aL(this,t),a=n.tween;if(a!==r)for(var s=0,o=(i=r=a).length;s<o;++s)if(i[s].name===e){(i=i.slice()).splice(s,1);break}n.tween=i}}function cL(t,e,r){var i,n;if("function"!=typeof r)throw new Error;return function(){var a=aL(this,t),s=a.tween;if(s!==i){n=(i=s).slice();for(var o={name:e,value:r},c=0,l=n.length;c<l;++c)if(n[c].name===e){n[c]=o;break}c===l&&n.push(o)}a.tween=n}}function lL(t,e,r){var i=t._id;return t.each(function(){var t=aL(this,i);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return sL(t,i).value[e]}}function uL(t,e){var r;return("number"==typeof e?FN:e instanceof tN?vN:(r=tN(e))?(e=r,vN):xN)(t,e)}function dL(t){return function(){this.removeAttribute(t)}}function hL(t){return function(){this.removeAttributeNS(t.space,t.local)}}function gL(t,e,r){var i,n,a=r+"";return function(){var s=this.getAttribute(t);return s===a?null:s===i?n:n=e(i=s,r)}}function pL(t,e,r){var i,n,a=r+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===a?null:s===i?n:n=e(i=s,r)}}function mL(t,e,r){var i,n,a;return function(){var s,o,c=r(this);if(null!=c)return(s=this.getAttribute(t))===(o=c+"")?null:s===i&&o===n?a:(n=o,a=e(i=s,c));this.removeAttribute(t)}}function fL(t,e,r){var i,n,a;return function(){var s,o,c=r(this);if(null!=c)return(s=this.getAttributeNS(t.space,t.local))===(o=c+"")?null:s===i&&o===n?a:(n=o,a=e(i=s,c));this.removeAttributeNS(t.space,t.local)}}function bL(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,n)),r}return n._value=e,n}function yL(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,n)),r}return n._value=e,n}function vL(t,e){return function(){nL(this,t).delay=+e.apply(this,arguments)}}function UL(t,e){return e=+e,function(){nL(this,t).delay=e}}function QL(t,e){return function(){aL(this,t).duration=+e.apply(this,arguments)}}function BL(t,e){return e=+e,function(){aL(this,t).duration=e}}var FL=vR.prototype.constructor;function IL(t){return function(){this.style.removeProperty(t)}}var CL=0;function AL(t,e,r,i){this._groups=t,this._parents=e,this._name=r,this._id=i}function xL(){return++CL}var EL=vR.prototype;AL.prototype={constructor:AL,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=mS(t));for(var i=this._groups,n=i.length,a=new Array(n),s=0;s<n;++s)for(var o,c,l=i[s],u=l.length,d=a[s]=new Array(u),h=0;h<u;++h)(o=l[h])&&(c=t.call(o,o.__data__,h,l))&&("__data__"in o&&(c.__data__=o.__data__),d[h]=c,iL(d[h],e,r,h,d,sL(o,r)));return new AL(a,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=bS(t));for(var i=this._groups,n=i.length,a=[],s=[],o=0;o<n;++o)for(var c,l=i[o],u=l.length,d=0;d<u;++d)if(c=l[d]){for(var h,g=t.call(c,c.__data__,d,l),p=sL(c,r),m=0,f=g.length;m<f;++m)(h=g[m])&&iL(h,e,r,m,g,p);a.push(g),s.push(c)}return new AL(a,s,e,r)},selectChild:EL.selectChild,selectChildren:EL.selectChildren,filter:function(t){"function"!=typeof t&&(t=vS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s=e[n],o=s.length,c=i[n]=[],l=0;l<o;++l)(a=s[l])&&t.call(a,a.__data__,l,s)&&c.push(a);return new AL(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,i=e.length,n=r.length,a=Math.min(i,n),s=new Array(i),o=0;o<a;++o)for(var c,l=e[o],u=r[o],d=l.length,h=s[o]=new Array(d),g=0;g<d;++g)(c=l[g]||u[g])&&(h[g]=c);for(;o<i;++o)s[o]=e[o];return new AL(s,this._parents,this._name,this._id)},selection:function(){return new FL(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=xL(),i=this._groups,n=i.length,a=0;a<n;++a)for(var s,o=i[a],c=o.length,l=0;l<c;++l)if(s=o[l]){var u=sL(s,e);iL(s,t,r,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new AL(i,this._parents,t,r)},call:EL.call,nodes:EL.nodes,node:EL.node,size:EL.size,empty:EL.empty,each:EL.each,on:function(t,e){var r=this._id;return arguments.length<2?sL(this.node(),r).on.on(t):this.each(function(t,e,r){var i,n,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?nL:aL;return function(){var s=a(this,t),o=s.on;o!==i&&(n=(i=o).copy()).on(e,r),s.on=n}}(r,t,e))},attr:function(t,e){var r=uS(t),i="transform"===r?VN:uL;return this.attrTween(t,"function"==typeof e?(r.local?fL:mL)(r,i,lL(this,"attr."+t,e)):null==e?(r.local?hL:dL)(r):(r.local?pL:gL)(r,i,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=uS(t);return this.tween(r,(i.local?bL:yL)(i,e))},style:function(t,e,r){var i="transform"==(t+="")?TN:uL;return null==e?this.styleTween(t,function(t,e){var r,i,n;return function(){var a=zS(this,t),s=(this.style.removeProperty(t),zS(this,t));return a===s?null:a===r&&s===i?n:n=e(r=a,i=s)}}(t,i)).on("end.style."+t,IL(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var i,n,a;return function(){var s=zS(this,t),o=r(this),c=o+"";return null==o&&(this.style.removeProperty(t),c=o=zS(this,t)),s===c?null:s===i&&c===n?a:(n=c,a=e(i=s,o))}}(t,i,lL(this,"style."+t,e))).each(function(t,e){var r,i,n,a,s="style."+e,o="end."+s;return function(){var c=aL(this,t),l=c.on,u=null==c.value[s]?a||(a=IL(e)):void 0;l===r&&n===u||(i=(r=l).copy()).on(o,n=u),c.on=i}}(this._id,t)):this.styleTween(t,function(t,e,r){var i,n,a=r+"";return function(){var s=zS(this,t);return s===a?null:s===i?n:n=e(i=s,r)}}(t,i,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,r){var i,n;function a(){var a=e.apply(this,arguments);return a!==n&&(i=(n=a)&&function(t,e,r){return function(i){this.style.setProperty(t,e.call(this,i),r)}}(t,a,r)),i}return a._value=e,a}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(lL(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function i(){var i=t.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var i,n=sL(this.node(),r).tween,a=0,s=n.length;a<s;++a)if((i=n[a]).name===t)return i.value;return null}return this.each((null==e?oL:cL)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?vL:UL)(e,t)):sL(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?QL:BL)(e,t)):sL(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){aL(this,t).ease=e}}(e,t)):sL(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;aL(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,i=r._id,n=r.size();return new Promise(function(a,s){var o={value:s},c={value:function(){0===--n&&a()}};r.each(function(){var r=aL(this,i),n=r.on;n!==t&&((e=(t=n).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(c)),r.on=e}),0===n&&a()})},[Symbol.iterator]:EL[Symbol.iterator]};const wL=t=>+t;function SL(t){return--t*t*t+1}var RL={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function NL(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}vR.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,i,n,a=t.__transition,s=!0;if(a){for(n in e=null==e?null:e+"",a)(r=a[n]).name===e?(i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[n]):s=!1;s&&delete t.__transition}}(this,t)})},vR.prototype.transition=function(t){var e,r;t instanceof AL?(e=t._id,t=t._name):(e=xL(),(r=RL).time=WN(),t=null==t?null:t+"");for(var i=this._groups,n=i.length,a=0;a<n;++a)for(var s,o=i[a],c=o.length,l=0;l<c;++l)(s=o[l])&&iL(s,t,e,l,o,r||NL(s,e));return new AL(i,this._parents,t,e)};const LL=Math.PI,ML=2*LL,DL=1e-6,kL=ML-DL;function TL(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class VL{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?TL:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return TL;const r=10**e;return function(t){this._+=t[0];for(let e=1,i=t.length;e<i;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,i){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,e,r,i,n,a){this._append`C${+t},${+e},${+r},${+i},${this._x1=+n},${this._y1=+a}`}arcTo(t,e,r,i,n){if(t=+t,e=+e,r=+r,i=+i,(n=+n)<0)throw new Error(`negative radius: ${n}`);let a=this._x1,s=this._y1,o=r-t,c=i-e,l=a-t,u=s-e,d=l*l+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>DL)if(Math.abs(u*o-c*l)>DL&&n){let h=r-a,g=i-s,p=o*o+c*c,m=h*h+g*g,f=Math.sqrt(p),b=Math.sqrt(d),y=n*Math.tan((LL-Math.acos((p+d-m)/(2*f*b)))/2),v=y/b,U=y/f;Math.abs(v-1)>DL&&this._append`L${t+v*l},${e+v*u}`,this._append`A${n},${n},0,0,${+(u*h>l*g)},${this._x1=t+U*o},${this._y1=e+U*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,i,n,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(i),o=r*Math.sin(i),c=t+s,l=e+o,u=1^a,d=a?i-n:n-i;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>DL||Math.abs(this._y1-l)>DL)&&this._append`L${c},${l}`,r&&(d<0&&(d=d%ML+ML),d>kL?this._append`A${r},${r},0,1,${u},${t-s},${e-o}A${r},${r},0,1,${u},${this._x1=c},${this._y1=l}`:d>DL&&this._append`A${r},${r},0,${+(d>=LL)},${u},${this._x1=t+r*Math.cos(n)},${this._y1=e+r*Math.sin(n)}`)}rect(t,e,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function HL(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),i=t.slice(0,r);return[i.length>1?i[0]+i.slice(2):i,+t.slice(r+1)]}function $L(t){return(t=HL(Math.abs(t)))?t[1]:NaN}var _L,zL=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function GL(t){if(!(e=zL.exec(t)))throw new Error("invalid format: "+t);var e;return new YL({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function YL(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function JL(t,e){var r=HL(t,e);if(!r)return t+"";var i=r[0],n=r[1];return n<0?"0."+new Array(-n).join("0")+i:i.length>n+1?i.slice(0,n+1)+"."+i.slice(n+1):i+new Array(n-i.length+2).join("0")}GL.prototype=YL.prototype,YL.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var XL={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>JL(100*t,e),r:JL,s:function(t,e){var r=HL(t,e);if(!r)return _L=void 0,t.toPrecision(e);var i=r[0],n=r[1],a=n-(_L=3*Math.max(-8,Math.min(8,Math.floor(n/3))))+1,s=i.length;return a===s?i:a>s?i+new Array(a-s+1).join("0"):a>0?i.slice(0,a)+"."+i.slice(a):"0."+new Array(1-a).join("0")+HL(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function WL(t){return t}var OL,KL,PL,ZL=Array.prototype.map,jL=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function qL(t){var e,r,i=void 0===t.grouping||void 0===t.thousands?WL:(e=ZL.call(t.grouping,Number),r=t.thousands+"",function(t,i){for(var n=t.length,a=[],s=0,o=e[0],c=0;n>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),a.push(t.substring(n-=o,n+o)),!((c+=o+1)>i));)o=e[s=(s+1)%e.length];return a.reverse().join(r)}),n=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?WL:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(ZL.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function d(t,e){var r=(t=GL(t)).fill,d=t.align,h=t.sign,g=t.symbol,p=t.zero,m=t.width,f=t.comma,b=t.precision,y=t.trim,v=t.type;"n"===v?(f=!0,v="g"):XL[v]||(void 0===b&&(b=12),y=!0,v="g"),(p||"0"===r&&"="===d)&&(p=!0,r="0",d="=");var U=(e&&void 0!==e.prefix?e.prefix:"")+("$"===g?n:"#"===g&&/[boxX]/.test(v)?"0"+v.toLowerCase():""),Q=("$"===g?a:/[%p]/.test(v)?c:"")+(e&&void 0!==e.suffix?e.suffix:""),B=XL[v],F=/[defgprs%]/.test(v);function I(t){var e,n,a,c=U,g=Q;if("c"===v)g=B(t)+g,t="";else{var I=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:B(Math.abs(t),b),y&&(t=function(t){t:for(var e,r=t.length,i=1,n=-1;i<r;++i)switch(t[i]){case".":n=e=i;break;case"0":0===n&&(n=i),e=i;break;default:if(!+t[i])break t;n>0&&(n=0)}return n>0?t.slice(0,n)+t.slice(e+1):t}(t)),I&&0===+t&&"+"!==h&&(I=!1),c=(I?"("===h?h:l:"-"===h||"("===h?"":h)+c,g=("s"!==v||isNaN(t)||void 0===_L?"":jL[8+_L/3])+g+(I&&"("===h?")":""),F)for(e=-1,n=t.length;++e<n;)if(48>(a=t.charCodeAt(e))||a>57){g=(46===a?s+t.slice(e+1):t.slice(e))+g,t=t.slice(0,e);break}}f&&!p&&(t=i(t,1/0));var C=c.length+t.length+g.length,A=C<m?new Array(m-C+1).join(r):"";switch(f&&p&&(t=i(A+t,A.length?m-g.length:1/0),A=""),d){case"<":t=c+t+g+A;break;case"=":t=c+A+t+g;break;case"^":t=A.slice(0,C=A.length>>1)+c+t+g+A.slice(C);break;default:t=A+c+t+g}return o(t)}return b=void 0===b?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),I.toString=function(){return t+""},I}return{format:d,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor($L(e)/3))),i=Math.pow(10,-r),n=d(((t=GL(t)).type="f",t),{suffix:jL[8+r/3]});return function(t){return n(i*t)}}}}OL=qL({thousands:",",grouping:[3],currency:["$",""]}),KL=OL.format,PL=OL.formatPrefix;var tM=Math.random,eM=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(tM),rM=function t(e){function r(t,r){var i,n;return t=null==t?0:+t,r=null==r?1:+r,function(){var a;if(null!=i)a=i,i=null;else do{i=2*e()-1,a=2*e()-1,n=i*i+a*a}while(!n||n>1);return t+r*a*Math.sqrt(-2*Math.log(n)/n)}}return r.source=t,r}(tM);const iM=1/4294967296;function nM(t=Math.random()){let e=0|(0<=t&&t<1?t/iM:Math.abs(t));return()=>(e=1664525*e+1013904223|0,iM*(e>>>0))}function aM(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function sM(t){return+t}var oM=[0,1];function cM(t){return t}function lM(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function uM(t,e,r){var i=t[0],n=t[1],a=e[0],s=e[1];return n<i?(i=lM(n,i),a=r(s,a)):(i=lM(i,n),a=r(a,s)),function(t){return a(i(t))}}function dM(t,e,r){var i=Math.min(t.length,e.length)-1,n=new Array(i),a=new Array(i),s=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<i;)n[s]=lM(t[s],t[s+1]),a[s]=r(e[s],e[s+1]);return function(e){var r=zw(t,e,1,i)-1;return a[r](n[r](e))}}function hM(){var t,e,r,i,n,a,s=oM,o=oM,c=EN,l=cM;function u(){var t=Math.min(s.length,o.length);return l!==cM&&(l=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(s[0],s[t-1])),i=t>2?dM:uM,n=a=null,d}function d(e){return null==e||isNaN(e=+e)?r:(n||(n=i(s.map(t),o,c)))(t(l(e)))}return d.invert=function(r){return l(e((a||(a=i(o,s.map(t),FN)))(r)))},d.domain=function(t){return arguments.length?(s=Array.from(t,sM),u()):s.slice()},d.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},d.rangeRound=function(t){return o=Array.from(t),c=wN,u()},d.clamp=function(t){return arguments.length?(l=!!t||cM,u()):l!==cM},d.interpolate=function(t){return arguments.length?(c=t,u()):c},d.unknown=function(t){return arguments.length?(r=t,d):r},function(r,i){return t=r,e=i,u()}}function gM(t,e,r,i){var n,a=function(t,e,r){r=+r;const i=(e=+e)<(t=+t),n=i?Ww(e,t,r):Ww(t,e,r);return(i?-1:1)*(n<0?1/-n:n)}(t,e,r);switch((i=GL(null==i?",f":i)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(n=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor($L(e)/3)))-$L(Math.abs(t)))}(a,s))||(i.precision=n),PL(i,s);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(n=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,$L(e)-$L(t))+1}(a,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=n-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(n=function(t){return Math.max(0,-$L(Math.abs(t)))}(a))||(i.precision=n-2*("%"===i.type))}return KL(i)}function pM(t){var e=t.domain;return t.ticks=function(t){var r=e();return function(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const i=e<t,[n,a,s]=i?Xw(e,t,r):Xw(t,e,r);if(!(a>=n))return[];const o=a-n+1,c=new Array(o);if(i)if(s<0)for(let t=0;t<o;++t)c[t]=(a-t)/-s;else for(let t=0;t<o;++t)c[t]=(a-t)*s;else if(s<0)for(let t=0;t<o;++t)c[t]=(n+t)/-s;else for(let t=0;t<o;++t)c[t]=(n+t)*s;return c}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var i=e();return gM(i[0],i[i.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var i,n,a=e(),s=0,o=a.length-1,c=a[s],l=a[o],u=10;for(l<c&&(n=c,c=l,l=n,n=s,s=o,o=n);u-- >0;){if((n=Ww(c,l,r))===i)return a[s]=c,a[o]=l,e(a);if(n>0)c=Math.floor(c/n)*n,l=Math.ceil(l/n)*n;else{if(!(n<0))break;c=Math.ceil(c*n)/n,l=Math.floor(l*n)/n}i=n}return t},t}function mM(){var t=hM()(cM,cM);return t.copy=function(){return e=t,mM().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},aM.apply(t,arguments),pM(t)}function fM(t){return function(){return t}}function bM(t){this._context=t}function yM(t){return new bM(t)}function vM(t){return t[0]}function UM(t){return t[1]}function QM(t,e){var r=fM(!0),i=null,n=yM,a=null,s=function(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new VL(e)}(o);function o(o){var c,l,u,d=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,h=!1;for(null==i&&(a=n(u=s())),c=0;c<=d;++c)!(c<d&&r(l=o[c],c,o))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+t(l,c,o),+e(l,c,o));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?vM:fM(t),e="function"==typeof e?e:void 0===e?UM:fM(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:fM(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:fM(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:fM(!!t),o):r},o.curve=function(t){return arguments.length?(n=t,null!=i&&(a=n(i)),o):n},o.context=function(t){return arguments.length?(null==t?i=a=null:a=n(i=t),o):i},o}function BM(t,e,r){this.k=t,this.x=e,this.y=r}bM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},BM.prototype={constructor:BM,scale:function(t){return 1===t?this:new BM(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new BM(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},BM.prototype;class FM extends kw{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=vN(t,"#ffffff")(.75),e.light50=vN(t,"#ffffff")(.5),e.light25=vN(t,"#ffffff")(.25),e.grey=t,e.dark25=vN(t,"#000000")(.25),e.dark50=vN(t,"#000000")(.5),e.dark75=vN(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,i=this.shadows.opacityPenumbra+this.shadows.opacityBoost,n=this.shadows.opacityAmbient+this.shadows.opacityBoost,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,c=this.shadows.mapUmbra[t],l=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${a}, ${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${s}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=FM.shadows,e=t.elevations.map(e=>fw`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?fw``:fw`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?fw``:fw`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?fw``:fw`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return fw`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return RE`
      :host {
        ---shadow-0: var(--shadow-0, ${SE(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${SE(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${SE(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${SE(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${SE(this.greys.white)});
        ---color-border: var(--color-border, ${SE(this.greys.light75)});
        ---color-text: var(--color-text, ${SE(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${SE(this.greys.white)});
        ---color-link: var(--color-link, ${SE(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${SE(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${SE(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${SE(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${SE(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${SE(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${SE(this.greys.dark75)});

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
    `}}customElements.define("decidables-button",class extends FM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const IM=t=>t??vw;customElements.define("decidables-slider",class extends FM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${IM(this.rangeMin)} max=${IM(this.rangeMax)} step=${IM(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?mw`
            <div class="datalist">
              <div class="option">${IM(this.max)}</div>
              <div class="option">${IM(this.min)}</div>
            </div>
          `:mw``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${IM(this.min)} max=${IM(this.max)} step=${IM(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}});customElements.define("decidables-spinner",class extends FM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${IM(this.min)} max=${IM(this.max)} step=${IM(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});customElements.define("decidables-switch",class extends FM{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,RE`
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
        `]}render(){return mw`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}});customElements.define("decidables-toggle",class extends FM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}});function CM(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("decidables-toggle-option",class extends FM{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}});var AM={a:"#e41a1c",z:"#377eb8",v:"#ff7f00",t0:"#f781bf",s:"#999999",left:"#f032e6",right:"#10dbc9",correct:"#4daf4a",error:"#984ea3",nr:"#cccccc"};class xM extends FM{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return AM}static get lights(){return Object.keys(xM.colors).reduce((t,e)=>(t[e]=vN(xM.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(xM.colors).reduce((t,e)=>(t[e]=vN(xM.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,RE`
        :host {
          /* Declare base colors */
          ${SE(Object.keys(xM.colors).map(t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`).join("\n"))}

          /* Declare light colors */
          ${SE(Object.keys(xM.colors).map(t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`).join("\n"))}

          /* Declare dark colors */
          ${SE(Object.keys(xM.colors).map(t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`).join("\n"))}
        }
      `]}}customElements.define("accumulable-control",class extends xM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},resample:{attribute:"resample",type:Boolean,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.resample=!1,this.duration=void 0,this.coherence=void 0,this.colors=["none","measure","outcome","all"],this.color=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}doResample(){this.dispatchEvent(new CustomEvent("accumulable-control-resample",{detail:{},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-color",{detail:{color:this.color},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("accumulable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("accumulable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("accumulable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <div class="holder">
        ${null!=this.trials?mw`<decidables-slider class="trials" min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:mw``}
        ${this.resample?mw`
            <div class="buttons">
              ${this.resample?mw`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`:mw``}
            </div>
          `:mw``}
        ${null!=this.duration?mw`<decidables-slider class="duration" min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:mw``}
        ${null!=this.coherence?mw`<decidables-slider class="coherence" min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:mw``}
        ${null!=this.color?mw`
            <decidables-toggle class="color" @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${"measure"===this.color}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:mw``}
        ${this.run||this.pause||this.reset?mw`
            <div class="buttons">
              ${this.run?mw`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:mw``}
              ${this.pause?mw`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:mw``}
              ${this.reset?mw`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:mw``}
            </div>
          `:mw``}
      </div>`}});class EM{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t},{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const i=t.reduce((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t},{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(i.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(i.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(i.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,i=EM.s.DEFAULT){const n=t*e,a=Math.exp(-2*r*t/i**2);return(a-Math.exp(-2*r*n/i**2))/(a-1)}static azv2pC(t,e,r,i=EM.s.DEFAULT){return EM.azv2pE(t,1-e,-r,i)}static azvt02m(t,e,r,i,n=EM.s.DEFAULT){const a=t*e,s=Math.exp(-2*r*t/n**2)-1;return i+1e3*(-a/r+t/r*((Math.exp(-2*r*a/n**2)-1)/s))}static azv2sd(t,e,r,i=EM.s.DEFAULT){const n=t*e,a=Math.exp(-2*r*t/i**2)-1,s=Math.exp(-2*r*n/i**2)-1,o=(-r*t**2*(s+4)*s/a**2+((-3*r*t**2+4*r*n*t+i**2*t)*s+4*r*n*t)/a-i**2*n)/r**3;return 1e3*Math.sqrt(o)}static azvt02mE(t,e,r,i,n=EM.s.DEFAULT){function a(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const s=t*e;return i+1e3*((s*(a(s-t,t)+a(0,s))+2*t*a(s,0))/(r*a(s,t)*a(-t,0)))}static azv2sdE(t,e,r,i=EM.s.DEFAULT){function n(t,e){return Math.exp(2*r*e/i**2)-Math.exp(2*r*t/i**2)}const a=t*e,s=-2*t*n(0,a)*(2*r*t*n(a,2*t)+i**2*n(0,t)*n(a,t))*Math.exp(2*r*t/i**2)/(r**3*n(0,t)**2*n(a,t)**2)+(4*r*a*(2*t-a)*Math.exp(2*r*(a+t)/i**2)+a*i**2*n(2*a,2*t))/(r**3*n(a,t)**2);return 1e3*Math.sqrt(s)}static azvt02mC(t,e,r,i,n=EM.s.DEFAULT){return EM.azvt02mE(t,1-e,-r,i,n)}static azv2sdC(t,e,r,i=EM.s.DEFAULT){return EM.azv2sdE(t,1-e,-r,i)}static tazv2gE(t,e,r,i,n=EM.s.DEFAULT){if(!t)return 0;const a=e*r,s=Math.PI*n**2/e**2*Math.exp(-a*i/n**2);let o=0,c=0;do{o+=1;c+=o*Math.sin(Math.PI*a*o/e)*Math.exp(-.5*(i**2/n**2+Math.PI**2*o**2*n**2/e**2)*t)}while(o<200);return s*c}static tazv2gC(t,e,r,i,n=EM.s.DEFAULT){return EM.tazv2gE(t,e,1-r,-i,n)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:i}){function n(t){return Math.log(t/(1-t))}const a=(e/1e3)**2,s=r/1e3,o=i**2,c=n(t),l=c*(c*t**2-c*t+t-.5)/a,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*i*l**(1/4),d=o*n(t)/u,h=-u*d/o,g=d/(2*u)*(1-Math.exp(h))/(1+Math.exp(h));return{v:u,a:d,t0:1e3*(s?s-g:null),s:i}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}customElements.define("accumulable-response",class extends xM{static get properties(){return{feedback:{attribute:"feedback",type:Boolean,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedback=!1,this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.correctPayoff=0,this.errorPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["left","right"],this.signal=void 0,this.responses=["left","right"],this.response=void 0,this.outcomes=["correct","error","nr"],this.outcome=void 0,this.startTime=void 0,this.rt=void 0,this.data={},this.trials=[],this.alignState()}get trialPayoff(){switch(this.outcome){case"correct":return this.correctPayoff;case"error":return this.errorPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.data.correctCount*this.correctPayoff+this.data.errorCount*this.errorPayoff+this.data.nrCount*this.nrPayoff}alignState(){this.data=EM.trials2stats(this.trials)}start(t,e){this.startTime=Date.now(),this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0,this.rt=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.rt=void 0,this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState())}left(){this.responded("left")}right(){this.responded("right")}responded(t){this.rt=Date.now()-this.startTime,this.state="feedback",this.response=t,this.signal===this.response?this.outcome="correct":this.signal!==this.response&&(this.outcome="error"),this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,data:this.data,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.rt=void 0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.trials=[],this.alignState()}keydown(t){"waiting"===this.state&&("ArrowLeft"===t.key?(this.responded("left"),t.preventDefault()):"ArrowRight"===t.key&&(this.responded("right"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,RE`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return mw`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${"response "+("feedback"===this.state&&"left"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${"response "+("feedback"===this.state&&"right"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${this.trial||this.feedback||"total"===this.payoff?mw`
            <div class="feedbacks">
              ${this.trial?mw`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:mw``}
              ${this.feedback?mw`
                  <div class=${`feedback ${"feedback"===this.state&&this.feedback?this.outcome:""}`}>
                    ${"feedback"===this.state&&this.feedback?"correct"===this.outcome?mw`<span class="outcome">Correct</span>`:"error"===this.outcome?mw`<span class="outcome">Error</span>`:mw`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?mw``:mw`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:mw``}
              ${"total"===this.payoff?mw`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:mw``}
            </div>`:mw``}
      </div>`}});function wM(t,e,r){var i=e,n=function(t){return atob(t)}(t),a=n.indexOf("\n",10)+1,s=n.substring(a)+"//# sourceMappingURL="+i,o=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(o)}function SM(t,e,r){var i;return function(r){return i=i||wM(t,e),new Worker(i,r)}}customElements.define("accumulable-table",class extends xM{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",type:Boolean,reflect:!0},color:{attribute:"color",type:String,reflect:!0},correctCount:{attribute:"correct-count",type:Number,reflect:!0},errorCount:{attribute:"error-count",type:Number,reflect:!0},nrCount:{attribute:"nr-count",type:Number,reflect:!0},accuracy:{attribute:"accuracy",type:Number,reflect:!0},correctMeanRT:{attribute:"correct-mean-rt",type:Number,reflect:!0},errorMeanRT:{attribute:"error-mean-rt",type:Number,reflect:!0},meanRT:{attribute:"mean-rt",type:Number,reflect:!0},correctSDRT:{attribute:"correct-sd-rt",type:Number,reflect:!0},errorSDRT:{attribute:"error-sd-rt",type:Number,reflect:!0},sdRT:{attribute:"sd-rt",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0}}}constructor(){super(),this.numeric=!1,this.summary=!1,this.colors=["none","measure","outcome","all"],this.color="all",this.payoff=!1,this.correctPayoff=void 0,this.errorPayoff=void 0,this.nrPayoff=void 0,this.correctCount=NaN,this.errorCount=NaN,this.nrCount=NaN,this.accuracy=NaN,this.correctMeanRT=NaN,this.errorMeanRT=NaN,this.meanRT=NaN,this.correctSDRT=NaN,this.errorSDRT=NaN,this.sdRT=NaN}sendEvent(){this.dispatchEvent(new CustomEvent("accumulable-table-change",{detail:{correctCount:this.correctCount,errorCount:this.errorCount,nrCount:this.nrCount,accuracy:this.accuracy,correctMeanRT:this.correctMeanRT,errorMeanRT:this.errorMeanRT,meanRT:this.meanRT,correctSDRT:this.correctSDRT,errorSDRT:this.errorSDRT,sdRT:this.sdRT},bubbles:!0}))}correctCountInput(t){this.correctCount=parseInt(t.target.value,10),this.sendEvent()}errorCountInput(t){this.errorCount=parseInt(t.target.value,10),this.sendEvent()}accuracyInput(t){this.accuracy=parseFloat(t.target.value),this.sendEvent()}correctMeanRTInput(t){this.correctMeanRT=parseFloat(t.target.value),this.sendEvent()}errorMeanRTInput(t){this.errorMeanRT=parseFloat(t.target.value),this.sendEvent()}meanRTInput(t){this.meanRT=parseFloat(t.target.value),this.sendEvent()}correctSDRTInput(t){this.correctSDRT=parseFloat(t.target.value),this.sendEvent()}errorSDRTInput(t){this.errorSDRT=parseFloat(t.target.value),this.sendEvent()}sdRTInput(t){this.sdRT=parseFloat(t.target.value),this.sendEvent()}static get styles(){return[super.styles,RE`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,i,n,a,s,o,c,l,u;return this.numeric?(r=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?mw`<span class="payoff">${e(this.correctPayoff)}</span>`:mw``}
        </decidables-spinner>
      `,i=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?mw`<span class="payoff">${e(this.errorPayoff)}</span>`:mw``}
        </decidables-spinner>
      `,n=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,a=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,s=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,o=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `,c=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `,l=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `,u=mw`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `):(r=mw`<span>Correct Count</span>
        ${this.payoff?mw`<span class="payoff">${e(this.correctPayoff)}</span>`:mw``}`,i=mw`<span>Error Count</span>
        ${this.payoff?mw`<span class="payoff">${e(this.errorPayoff)}</span>`:mw``}`,n=mw`<span>Accuracy</span>`,a=mw`<span>Correct Mean RT</span>`,s=mw`<span>Error Mean RT</span>`,o=mw`<span>Mean RT</span>`,c=mw`<span>Correct SD RT</span>`,l=mw`<span>Error SD RT</span>`,u=mw`<span>SD RT</span>`),mw`
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
            ${this.summary?mw`
                <th class="th th-main" scope="col">
                  Overall
                </th>`:mw``}
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
            ${this.summary?mw`
                <td class="td td-summary overall proportion-correct">
                  ${n}
                </td>`:mw``}
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
            ${this.summary?mw`
                <td class="td td-summary overall mean-rt">
                  ${o}
                </td>`:mw``}
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
            ${this.summary?mw`
                <td class="td td-summary overall sd-rt">
                  ${u}
                </td>`:mw``}
          </tr>
        </tbody>
      </table>`}});var RM=SM("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uIFswLCBJbmZpbml0eSkKICAgICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhICgwLCAxKQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpCiAgICAgIHQwID0gbm9uLWRlY2lzaW9uIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgKDAsIEluZmluaXR5KQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpIFswLCBJbmZpbml0eSkKCiAgICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKSBbMCwgSW5maW5pdHkpCgogICAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6CiAgICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHMKICAgICAgcEMgPSBwcm9wb3J0aW9uIG9mIGNvcnJlY3QgdHJpYWxzCiAgICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUMgPSBtZWFuIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RDID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCgogICAgRXF1YXRpb25zOgogICAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICAgIFN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKQogICAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNykKICAqLwogIGNsYXNzIERETU1hdGggewogICAgc3RhdGljIHMgPSB7CiAgICAgIERFRkFVTFQ6IDEKICAgIH07CiAgICBzdGF0aWMgYSA9IHsKICAgICAgREVGQVVMVDogMS4yLAogICAgICBNSU46IDAuMDEsCiAgICAgIE1BWDogMi4wLAogICAgICBTVEVQOiAwLjAxLAogICAgICBKVU1QOiAwLjEKICAgIH07CiAgICBzdGF0aWMgeiA9IHsKICAgICAgREVGQVVMVDogMC41NSwKICAgICAgTUlOOiAwLjAxLAogICAgICBNQVg6IDAuOTksCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB2ID0gewogICAgICBERUZBVUxUOiAxLjUsCiAgICAgIE1JTjogMC4wMSwKICAgICAgTUFYOiA1LjAsCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB0MCA9IHsKICAgICAgREVGQVVMVDogMTUwLAogICAgICBNSU46IDAsCiAgICAgIE1BWDogNTAwLAogICAgICBTVEVQOiAxLAogICAgICBKVU1QOiAxMAogICAgfTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0ge307CgogICAgICAvLyBGaXJzdC1vcmRlciBzdW1zCiAgICAgIGNvbnN0IHN1bXMgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JDb3VudCArPSAxOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IubnJDb3VudCArPSAxOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIGNvcnJlY3RDb3VudDogMCwKICAgICAgICBlcnJvckNvdW50OiAwLAogICAgICAgIG5yQ291bnQ6IDAsCiAgICAgICAgY29ycmVjdFJUU3VtOiAwLAogICAgICAgIGVycm9yUlRTdW06IDAKICAgICAgfSk7CgogICAgICAvLyBGaXJzdC1vcmRlciBzdGF0cwogICAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JDb3VudCA9IHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubnJDb3VudCA9IHN1bXMubnJDb3VudDsKICAgICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7CiAgICAgIHN0YXRzLmNvcnJlY3RNZWFuUlQgPSBzdW1zLmNvcnJlY3RSVFN1bSAvIHN1bXMuY29ycmVjdENvdW50OwogICAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubWVhblJUID0gKHN1bXMuY29ycmVjdFJUU3VtICsgc3Vtcy5lcnJvclJUU3VtKSAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zMiA9IHRyaWFscy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4gewogICAgICAgIHN3aXRjaCAodHJpYWwub3V0Y29tZSkgewogICAgICAgICAgY2FzZSAnY29ycmVjdCc6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmNvcnJlY3RNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yU1MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMuZXJyb3JNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgc3M6IDAsCiAgICAgICAgY29ycmVjdFNTOiAwLAogICAgICAgIGVycm9yU1M6IDAKICAgICAgfSk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdFNEUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmNvcnJlY3RTUyAvIChzdGF0cy5jb3JyZWN0Q291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLmVycm9yU0RSVCA9IHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmVycm9yU1MgLyAoc3RhdHMuZXJyb3JDb3VudCAtIDEpKSA6IE5hTjsKICAgICAgc3RhdHMuc2RSVCA9IHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLnNzIC8gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHJldHVybiBzdGF0czsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZQogICAgc3RhdGljIGF6djJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMik7CiAgICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gKC12ICogYSAqKiAyICogKFogKyA0KSAqIFogLyBBICoqIDIgKyAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBIC0gcyAqKiAyICogelByaW1lKSAvIHYgKiogMzsKICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwOwogICAgfQoKICAgIC8vIE1lYW4gRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZ0MDJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MDJtQyhhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenYyc2RDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGlmICghdCkgcmV0dXJuIDA7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBiYXNlID0gTWF0aC5QSSAqIHMgKiogMiAvIGEgKiogMiAqIE1hdGguZXhwKC16UHJpbWUgKiB2IC8gcyAqKiAyKTsKICAgICAgbGV0IGsgPSAwOwogICAgICBsZXQgc3VtID0gMDsKICAgICAgZG8gewogICAgICAgIGsgKz0gMTsKICAgICAgICBjb25zdCB0ZXJtID0gayAqIE1hdGguc2luKE1hdGguUEkgKiB6UHJpbWUgKiBrIC8gYSkgKiBNYXRoLmV4cCgtMC41ICogKHYgKiogMiAvIHMgKiogMiArIE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMiAvIGEgKiogMikgKiB0KTsKICAgICAgICBzdW0gKz0gdGVybTsKICAgICAgfSB3aGlsZSAoayA8IDIwMCk7IC8vID8/IEhBQ0sKCiAgICAgIHJldHVybiBiYXNlICogc3VtOwogICAgfQoKICAgIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVAogICAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLnRhenYyZ0UodCwgYSwgMSAtIHosIC12LCBzKTsKICAgIH0KCiAgICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9yYW91bC5zb2NzY2kudXZhLm5sL0VaMi9FWjJfbmV3Lmh0bWwKICAgIC8vIEVaLWZ1bmN0aW9uIGZvciBzdGFydGluZyB2YWx1ZXMKICAgIC8vIGlucHV0OiBvYmogLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzCiAgICAvLyAgICBwQyAtIFByb3BvcnRpb24gY29ycmVjdAogICAgLy8gICAgc2QgLSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBSVCdzIGluIG1zCiAgICAvLyAgICBtIC0gc2FtcGxlIG1lYW4gb2YgdGhlIFJUJ3MgaW4gbXMKICAgIC8vICAgIHMgLSBkaWZmdXNpb24gc3RhbmRhcmQgZGV2aWF0aW9uCiAgICAvLyByZXR1cm5zOiBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHYsIGEsIGFuZCB0MCwgY29udGFpbmluZyBFWi1lc3RpbWF0ZXMgb2YgdGhlc2UgcGFyYW1ldGVycwogICAgc3RhdGljIGRhdGEyZXooewogICAgICBhY2N1cmFjeTogcEMsCiAgICAgIHNkUlQ6IHNkLAogICAgICBtZWFuUlQ6IG0sCiAgICAgIHMKICAgIH0pIHsKICAgICAgZnVuY3Rpb24gc2lnbihyKSB7CiAgICAgICAgcmV0dXJuIHIgPiAwID8gMSA6IHIgPT09IDAgPyAwIDogLTE7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbG9naXQocCkgewogICAgICAgIHJldHVybiBNYXRoLmxvZyhwIC8gKDEgLSBwKSk7CiAgICAgIH0KICAgICAgY29uc3QgdnJ0ID0gKHNkIC8gMTAwMCkgKiogMjsKICAgICAgY29uc3QgbXJ0ID0gbSAvIDEwMDA7CiAgICAgIGNvbnN0IHMyID0gcyAqKiAyOwogICAgICBjb25zdCBsID0gbG9naXQocEMpOwogICAgICBjb25zdCB4ID0gbCAqIChsICogcEMgKiogMiAtIGwgKiBwQyArIHBDIC0gMC41KSAvIHZydDsKICAgICAgY29uc3QgdiA9IHNpZ24ocEMgLSAwLjUpICogcyAqIHggKiogKDEgLyA0KTsKICAgICAgY29uc3QgYSA9IHMyICogbG9naXQocEMpIC8gdjsKICAgICAgY29uc3QgeSA9IC12ICogYSAvIHMyOwogICAgICBjb25zdCBtZHQgPSBhIC8gKDIgKiB2KSAqICgxIC0gTWF0aC5leHAoeSkpIC8gKDEgKyBNYXRoLmV4cCh5KSk7CiAgICAgIGNvbnN0IHQwID0gbXJ0ID8gbXJ0IC0gbWR0IDogbnVsbDsgLy8gY29tcHV0ZSBUZXIgb25seSBpZiBNUlQgd2FzIHByb3ZpZGVkCgogICAgICBjb25zdCB0MFByaW1lID0gdDAgKiAxMDAwOwogICAgICByZXR1cm4gewogICAgICAgIHYsCiAgICAgICAgYSwKICAgICAgICB0MDogdDBQcmltZSwKICAgICAgICBzCiAgICAgIH07CiAgICB9CiAgICBzdGF0aWMgZGF0YTJlejIoKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YTJlejIgaXMgbm90IGltcGxlbWVudGVkIScpOwogICAgfQogIH0KCiAgLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzCgogIC8qIGVzbGludCBuby1yZXN0cmljdGVkLWdsb2JhbHM6IFsib2ZmIiwgInNlbGYiXSAqLwoKICBzZWxmLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHsKICAgIGNvbnN0IHBhcmFtcyA9IERETU1hdGguZGF0YTJleih7CiAgICAgIC4uLmV2ZW50LmRhdGEsCiAgICAgIHM6IERETU1hdGgucy5ERUZBVUxUCiAgICB9KTsKCiAgICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISEKICAgIGNvbnN0IGEgPSAhaXNOYU4ocGFyYW1zLmEpID8gcGFyYW1zLmEgOiAxLjU7CiAgICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41OwogICAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDAuMTsKICAgIGNvbnN0IHQwID0gIWlzTmFOKHBhcmFtcy50MCkgPyBwYXJhbXMudDAgOiAxMDA7CiAgICBjb25zdCBzID0gIWlzTmFOKHBhcmFtcy5zKSA/IHBhcmFtcy5zIDogRERNTWF0aC5zLkRFRkFVTFQ7CiAgICBjb25zdCBwcmVkaWN0ZWQgPSB7CiAgICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6djJwQyhhLCB6LCB2KSwKICAgICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksCiAgICAgIGVycm9yTWVhblJUOiBERE1NYXRoLmF6dnQwMm1FKGEsIHosIHYsIHQwKSwKICAgICAgbWVhblJUOiBERE1NYXRoLmF6dnQwMm0oYSwgeiwgdiwgdDApLAogICAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLAogICAgICBlcnJvclNEUlQ6IERETU1hdGguYXp2MnNkRShhLCB6LCB2KSwKICAgICAgc2RSVDogRERNTWF0aC5henYyc2QoYSwgeiwgdikKICAgIH07CiAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgcGFyYW1zOiB7CiAgICAgICAgYSwKICAgICAgICB6LAogICAgICAgIHYsCiAgICAgICAgdDAsCiAgICAgICAgcwogICAgICB9LAogICAgICBwcmVkaWN0ZWQKICAgIH0pOwogIH07Cgp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1kZG0tZml0LXdvcmtlci5qcy5tYXAKCg==","data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb24gWzAsIEluZmluaXR5KVxuICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYSAoMCwgMSlcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKSAoMCwgSW5maW5pdHkpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKSBbMCwgSW5maW5pdHkpXG5cbiAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykgWzAsIEluZmluaXR5KVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNylcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSB7XG4gICAgREVGQVVMVDogMSxcbiAgfTtcblxuICBzdGF0aWMgYSA9IHtcbiAgICBERUZBVUxUOiAxLjIsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMi4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB6ID0ge1xuICAgIERFRkFVTFQ6IDAuNTUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMC45OSxcbiAgICBTVEVQOiAwLjAxLFxuICAgIEpVTVA6IDAuMSxcbiAgfTtcblxuICBzdGF0aWMgdiA9IHtcbiAgICBERUZBVUxUOiAxLjUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogNS4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB0MCA9IHtcbiAgICBERUZBVUxUOiAxNTAsXG4gICAgTUlOOiAwLFxuICAgIE1BWDogNTAwLFxuICAgIFNURVA6IDEsXG4gICAgSlVNUDogMTAsXG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMik7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKTtcblxuICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTtcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gTWVhbiBPdmVyYWxsIFJUXG4gIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgdmFyaWFuY2UgPSAoXG4gICAgICAoXG4gICAgICAgICgtdiAqIGEgKiogMiAqIChaICsgNCkgKiBaKSAvIEEgKiogMlxuICAgICAgKSArIChcbiAgICAgICAgKCgtMyAqIHYgKiBhICoqIDIgKyA0ICogdiAqIHpQcmltZSAqIGEgKyBzICoqIDIgKiBhKSAqIFogKyA0ICogdiAqIHpQcmltZSAqIGEpIC8gQVxuICAgICAgKSAtIChcbiAgICAgICAgcyAqKiAyICogelByaW1lXG4gICAgICApXG4gICAgKSAvIHYgKiogMztcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKVxuICAgICAgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7XG4gICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7XG4gIH1cblxuICAvLyBTRCBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2MnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2MmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBkbyB7XG4gICAgICBrICs9IDE7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBrXG4gICAgICAgICogTWF0aC5zaW4oKE1hdGguUEkgKiB6UHJpbWUgKiBrKSAvIGEpXG4gICAgICAgICogTWF0aC5leHAoLTAuNSAqICgodiAqKiAyIC8gcyAqKiAyKSArICgoTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyKSAvIGEgKiogMikpICogdCk7XG5cbiAgICAgIHN1bSArPSB0ZXJtO1xuICAgIH0gd2hpbGUgKGsgPCAyMDApOyAvLyA/PyBIQUNLXG5cbiAgICByZXR1cm4gYmFzZSAqIHN1bTtcbiAgfVxuXG4gIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVFxuICBzdGF0aWMgdGF6djJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC50YXp2MmdFKHQsIGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9yYW91bC5zb2NzY2kudXZhLm5sL0VaMi9FWjJfbmV3Lmh0bWxcbiAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlc1xuICAvLyBpbnB1dDogb2JqIC0gT2JqZWN0IHdpdGggcHJvcGVydGllc1xuICAvLyAgICBwQyAtIFByb3BvcnRpb24gY29ycmVjdFxuICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXNcbiAgLy8gICAgbSAtIHNhbXBsZSBtZWFuIG9mIHRoZSBSVCdzIGluIG1zXG4gIC8vICAgIHMgLSBkaWZmdXNpb24gc3RhbmRhcmQgZGV2aWF0aW9uXG4gIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzXG4gIHN0YXRpYyBkYXRhMmV6KHtcbiAgICBhY2N1cmFjeTogcEMsXG4gICAgc2RSVDogc2QsXG4gICAgbWVhblJUOiBtLFxuICAgIHMsXG4gIH0pIHtcbiAgICBmdW5jdGlvbiBzaWduKHIpIHtcbiAgICAgIHJldHVybiAoKHIgPiAwKSA/IDEgOiAoKHIgPT09IDApID8gMCA6IC0xKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naXQocCkge1xuICAgICAgcmV0dXJuIE1hdGgubG9nKHAgLyAoMSAtIHApKTtcbiAgICB9XG5cbiAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyO1xuICAgIGNvbnN0IG1ydCA9IG0gLyAxMDAwO1xuXG4gICAgY29uc3QgczIgPSBzICoqIDI7XG4gICAgY29uc3QgbCA9IGxvZ2l0KHBDKTtcbiAgICBjb25zdCB4ID0gKGwgKiAobCAqIHBDICoqIDIgLSBsICogcEMgKyBwQyAtIDAuNSkpIC8gdnJ0O1xuICAgIGNvbnN0IHYgPSBzaWduKHBDIC0gMC41KSAqIHMgKiB4ICoqICgxIC8gNCk7XG4gICAgY29uc3QgYSA9IChzMiAqIGxvZ2l0KHBDKSkgLyB2O1xuICAgIGNvbnN0IHkgPSAoLXYgKiBhKSAvIHMyO1xuICAgIGNvbnN0IG1kdCA9ICgoYSAvICgyICogdikpICogKDEgLSBNYXRoLmV4cCh5KSkpIC8gKDEgKyBNYXRoLmV4cCh5KSk7XG4gICAgY29uc3QgdDAgPSAobXJ0ID8gbXJ0IC0gbWR0IDogbnVsbCk7IC8vIGNvbXB1dGUgVGVyIG9ubHkgaWYgTVJUIHdhcyBwcm92aWRlZFxuXG4gICAgY29uc3QgdDBQcmltZSA9IHQwICogMTAwMDtcbiAgICByZXR1cm4ge1xuICAgICAgdixcbiAgICAgIGEsXG4gICAgICB0MDogdDBQcmltZSxcbiAgICAgIHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBkYXRhMmV6MigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEyZXoyIGlzIG5vdCBpbXBsZW1lbnRlZCEnKTtcbiAgfVxufVxuIiwiXG4vLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbmltcG9ydCBERE1NYXRoIGZyb20gJy4vZGRtLW1hdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBERE1NYXRoO1xuIiwiLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogW1wib2ZmXCIsIFwic2VsZlwiXSAqL1xuXG5pbXBvcnQgRERNTWF0aCBmcm9tICdAZGVjaWRhYmxlcy9hY2N1bXVsYWJsZS1tYXRoJztcblxuc2VsZi5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gRERNTWF0aC5kYXRhMmV6KHsuLi5ldmVudC5kYXRhLCBzOiBERE1NYXRoLnMuREVGQVVMVH0pO1xuXG4gIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIVxuICBjb25zdCBhID0gIWlzTmFOKHBhcmFtcy5hKSA/IHBhcmFtcy5hIDogMS41O1xuICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41O1xuICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xO1xuICBjb25zdCB0MCA9ICFpc05hTihwYXJhbXMudDApID8gcGFyYW1zLnQwIDogMTAwO1xuICBjb25zdCBzID0gIWlzTmFOKHBhcmFtcy5zKSA/IHBhcmFtcy5zIDogRERNTWF0aC5zLkRFRkFVTFQ7XG5cbiAgY29uc3QgcHJlZGljdGVkID0ge1xuICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6djJwQyhhLCB6LCB2KSxcbiAgICBjb3JyZWN0TWVhblJUOiBERE1NYXRoLmF6dnQwMm1DKGEsIHosIHYsIHQwKSxcbiAgICBlcnJvck1lYW5SVDogRERNTWF0aC5henZ0MDJtRShhLCB6LCB2LCB0MCksXG4gICAgbWVhblJUOiBERE1NYXRoLmF6dnQwMm0oYSwgeiwgdiwgdDApLFxuICAgIGNvcnJlY3RTRFJUOiBERE1NYXRoLmF6djJzZEMoYSwgeiwgdiksXG4gICAgZXJyb3JTRFJUOiBERE1NYXRoLmF6djJzZEUoYSwgeiwgdiksXG4gICAgc2RSVDogRERNTWF0aC5henYyc2QoYSwgeiwgdiksXG4gIH07XG5cbiAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBhLCB6LCB2LCB0MCwgcyxcbiAgICB9LFxuICAgIHByZWRpY3RlZCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkRETU1hdGgiLCJzIiwiREVGQVVMVCIsImEiLCJNSU4iLCJNQVgiLCJTVEVQIiwiSlVNUCIsInoiLCJ2IiwidDAiLCJ0cmlhbHMyc3RhdHMiLCJ0cmlhbHMiLCJzdGF0cyIsInN1bXMiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInRyaWFsIiwib3V0Y29tZSIsImNvcnJlY3RDb3VudCIsImNvcnJlY3RSVFN1bSIsInJ0IiwiZXJyb3JDb3VudCIsImVycm9yUlRTdW0iLCJuckNvdW50IiwiYWNjdXJhY3kiLCJjb3JyZWN0TWVhblJUIiwiZXJyb3JNZWFuUlQiLCJtZWFuUlQiLCJzdW1zMiIsInNzIiwiY29ycmVjdFNTIiwiZXJyb3JTUyIsImNvcnJlY3RTRFJUIiwiTWF0aCIsInNxcnQiLCJOYU4iLCJlcnJvclNEUlQiLCJzZFJUIiwiYXp2MnBFIiwielByaW1lIiwiQSIsImV4cCIsIloiLCJhenYycEMiLCJhenZ0MDJtIiwibWVhbiIsImF6djJzZCIsInZhcmlhbmNlIiwiYXp2dDAybUUiLCJwaGkiLCJ4IiwieSIsImF6djJzZEUiLCJhenZ0MDJtQyIsImF6djJzZEMiLCJ0YXp2MmdFIiwidCIsImJhc2UiLCJQSSIsImsiLCJzdW0iLCJ0ZXJtIiwic2luIiwidGF6djJnQyIsImRhdGEyZXoiLCJwQyIsInNkIiwibSIsInNpZ24iLCJyIiwibG9naXQiLCJwIiwibG9nIiwidnJ0IiwibXJ0IiwiczIiLCJsIiwibWR0IiwidDBQcmltZSIsImRhdGEyZXoyIiwiRXJyb3IiLCJzZWxmIiwib25tZXNzYWdlIiwiZXZlbnQiLCJwYXJhbXMiLCJkYXRhIiwiaXNOYU4iLCJwcmVkaWN0ZWQiLCJwb3N0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ2UsTUFBTUEsT0FBTyxDQUFDO0VBQzNCLEVBQUEsT0FBT0MsQ0FBQyxHQUFHO0VBQ1RDLElBQUFBLE9BQU8sRUFBRTtLQUNWO0VBRUQsRUFBQSxPQUFPQyxDQUFDLEdBQUc7RUFDVEQsSUFBQUEsT0FBTyxFQUFFLEdBQUc7RUFDWkUsSUFBQUEsR0FBRyxFQUFFLElBQUk7RUFDVEMsSUFBQUEsR0FBRyxFQUFFLEdBQUc7RUFDUkMsSUFBQUEsSUFBSSxFQUFFLElBQUk7RUFDVkMsSUFBQUEsSUFBSSxFQUFFO0tBQ1A7RUFFRCxFQUFBLE9BQU9DLENBQUMsR0FBRztFQUNUTixJQUFBQSxPQUFPLEVBQUUsSUFBSTtFQUNiRSxJQUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNUQyxJQUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNUQyxJQUFBQSxJQUFJLEVBQUUsSUFBSTtFQUNWQyxJQUFBQSxJQUFJLEVBQUU7S0FDUDtFQUVELEVBQUEsT0FBT0UsQ0FBQyxHQUFHO0VBQ1RQLElBQUFBLE9BQU8sRUFBRSxHQUFHO0VBQ1pFLElBQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1RDLElBQUFBLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLElB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");customElements.define("ddm-fit",class extends xM{static get properties(){return{}}constructor(){super(),this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.observed={},this.predicted={},this.working=!1,this.queued=!1,this.worker=new RM,this.worker.onmessage=t=>{this.working=!1,this.predicted=t.data.predicted,this.a=t.data.params.a,this.z=t.data.params.z,this.v=t.data.params.v,this.t0=t.data.params.t0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("ddm-fit-update",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0},bubbles:!0})),this.queued&&this.fit()},this.fit()}fit(){this.working?this.queued=!0:(this.worker.postMessage(this.observed),this.working=!0,this.queued=!1)}clear(){this.observed={},this.fit()}set(t){this.observed=structuredClone(t),this.fit()}static get styles(){return[super.styles,RE`
        :host {
          display: inline-block;
        }
      `]}render(){return mw`
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
    `}});customElements.define("ddm-parameters",class extends xM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.a=void 0,this.z=void 0,this.v=void 0,this.t0=void 0}setBoundarySeparation(t){this.a=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-a",{detail:{a:this.a},bubbles:!0}))}setStartingPoint(t){this.z=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-z",{detail:{z:this.z},bubbles:!0}))}setDriftRate(t){this.v=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-v",{detail:{v:this.v},bubbles:!0}))}setNondecisionTime(t){this.t0=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-t0",{detail:{t0:this.t0},bubbles:!0}))}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <div class="holder">
        ${null!=this.a?mw`<decidables-slider class="a"
            ?disabled=${!this.interactive}
            scale
            min=${EM.a.MIN}
            max=${EM.a.MAX}
            step=${EM.a.STEP}
            .value=${+this.a.toFixed(2)}
            @change=${this.setBoundarySeparation.bind(this)}
            @input=${this.setBoundarySeparation.bind(this)}
          ><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>`:mw``}
        ${null!=this.z?mw`<decidables-slider class="z"
            ?disabled=${!this.interactive}
            scale
            min=${EM.z.MIN}
            max=${EM.z.MAX}
            step=${EM.z.STEP}
            .value=${+this.z.toFixed(2)}
            @change=${this.setStartingPoint.bind(this)}
            @input=${this.setStartingPoint.bind(this)}
          ><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>`:mw``}
        ${null!=this.v?mw`<decidables-slider class="v"
            ?disabled=${!this.interactive}
            scale
            min=${EM.v.MIN}
            max=${EM.v.MAX}
            step=${EM.v.STEP}
            .value=${+this.v.toFixed(2)}
            @change=${this.setDriftRate.bind(this)}
            @input=${this.setDriftRate.bind(this)}
          ><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>`:mw``}
        ${null!=this.t0?mw`<decidables-slider class="t0" 
            ?disabled=${!this.interactive}
            scale
            min=${EM.t0.MIN}
            max=${EM.t0.MAX}
            step=${EM.t0.STEP}
            .value=${+this.t0.toFixed(0)}
            @change=${this.setNondecisionTime.bind(this)}
            @input=${this.setNondecisionTime.bind(this)}
          ><div>Nondecision Time<br><span class="math-var">t₀</span></div></decidables-slider>`:mw``}
      </div>`}});class NM extends(CM(xM)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){UR(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=eM(0,1)()}alignPath(t,e,r,i,n){const a=rM.source(nM(t))(0,this.precision**.5),s=-e/2,o=e/2,c=e*r-e/2,l=i*this.precision,u=[];for(u.push({t:n,e:c});u.at(-1).e>s&&u.at(-1).e<o;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+l+EM.s.DEFAULT*a()});return u}alignCorrectDistribution(t,e,r,i){const n=EM.azv2pC(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-i;s+=this.scale.time.step)s>0&&a.push({t:i+s,d:EM.tazv2gC(s/1e3,t,e,r)/n});return a}alignErrorDistribution(t,e,r,i){const n=EM.azv2pE(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-i;s+=this.scale.time.step)s>0&&a.push({t:i+s,d:EM.tazv2gE(s/1e3,t,e,r)/n});return a}alignState(){this.random=eM.source(nM(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},(t,e)=>{const r=this.random()/1e3*997,i=this.animate&&e===this.trials-1,n=this.alignPath(r,this.a,this.z,this.v,this.t0),a=n.at(-1).e<=this.bounds.lower?"error":n.at(-1).e>=this.bounds.upper?"correct":"nr",s="error"===a?n.at(-2).t+(this.bounds.lower-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):"correct"===a?n.at(-2).t+(this.bounds.upper-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:n,rt:s,outcome:a,animate:i}});const t=EM.trials2stats(this.data.trials.filter(t=>!t.animate));this.data={...this.data,...t},this.model.accuracy=EM.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=EM.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=EM.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=EM.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=EM.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let i,n;e/r>1.5?(n=r,i=1.5*n):(i=e,n=i/1.5);const a=1*this.rem,s=3*this.rem,o=3.75*this.rem,c=3.25*this.rem,l=n-(a+s),u=i-(o+c),d=.75*this.rem,h=.5*l,g=.25*l-d,p=.75*this.rem,m=.9*u,f=.1*u-p,b=parseInt(this.getComputedStyleValue("---transition-duration"),10),y=mM().domain([this.scale.time.min,this.scale.time.max]).range([0,m]),v=mM().domain([this.scale.evidence.min,this.scale.evidence.max]).range([h,0]),U=mM().domain([this.scale.density.min,this.scale.density.max]).range([g,0]),Q=mM().domain([this.scale.density.min,this.scale.density.max]).range([0,g]),B=mM().domain([0,1]).range([0,l]),F=DR().subject((t,e)=>({x:y(e.t0),y:v(e.startingPoint)})).on("start",t=>{UR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=y.invert(t.x),i=(v.invert(t.y)+this.a/2)/this.a;r="z"===e?y.invert(t.subject.x):r<EM.t0.MIN?EM.t0.MIN:r>EM.t0.MAX?EM.t0.MAX:r,i="t0"===e?(v.invert(t.subject.y)+this.a/2)/this.a:i<EM.z.MIN?EM.z.MIN:i>EM.z.MAX?EM.z.MAX:i,this.t0=r,this.z=i,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))}).on("end",t=>{UR(t.currentTarget).classed("dragging",!1),this.drag=!1}),I=DR().on("start",t=>{UR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;let e=(v.invert(t.y)-this.startingPoint)/(y.invert(t.x)-this.t0)*1e3;e=e<EM.v.MIN?EM.v.MIN:e>EM.v.MAX?EM.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))}).on("end",t=>{UR(t.currentTarget).classed("dragging",!1),this.drag=!1}),C=DR().subject((t,e)=>({x:0,y:v(e.value)})).on("start",t=>{UR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=v.invert(t.y);let r=Math.abs(2*e);r=r<EM.a.MIN?EM.a.MIN:r>EM.a.MAX?EM.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))}).on("end",t=>{UR(t.currentTarget).classed("dragging",!1),this.drag=!1}),A=QM().x(t=>y(t.t)).y(t=>v(t.e)),x=QM().x(t=>y(t.t)).y(t=>U(t.d)),E=QM().x(t=>y(t.t)).y(t=>Q(t.d)),w=UR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),S=w.enter().append("svg").classed("main",!0).each((t,e,r)=>{Mw(xM.svgFilters,r[e])}),R=S.append("defs").classed("markers",!0),N=t=>{R.append("marker").attr("id",`measure-arrow-${t}`).attr("class",`measure-arrow ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12").append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z")},L=t=>{const e=R.append("marker").attr("id",`measure-capped-arrow-${t}`).attr("class",`measure-arrow capped ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12");e.append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z"),e.append("path").attr("class","cap").attr("d","M 0 -4 l 0 8")};N("a"),N("z"),L("v"),N("t0"),L("t0");const M=t=>{R.append("marker").attr("id",`model-sd-cap-${t}`).attr("class",`model-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),R.append("marker").attr("id",`data-sd-cap-${t}`).attr("class",`data-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6")};M("error"),M("correct");const D=R.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",v(this.bounds.upper)).attr("y2",v(this.bounds.lower));D.append("stop").classed("stop-0",!0).attr("offset","0%"),D.append("stop").classed("stop-100",!0).attr("offset","100%");const k=S.merge(w).attr("viewBox",`0 0 ${i} ${n}`),T=k.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:U,densityLine:x,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:Q,densityLine:E,alignDistribution:this.alignErrorDistribution.bind(this)}]),V=S.append("g").classed("plot evidence",!0),H=T.enter().append("g").attr("class",t=>`plot density ${t.outcome}`),$=S.append("g").classed("plot accuracy",!0),_=k.select(".plot.evidence").attr("transform",`translate(${o}, ${a+g+d})`),z=H.merge(T).attr("transform",t=>`translate(${o}, ${"correct"===t.outcome?a:a+g+h+2*d})`),G=k.select(".plot.accuracy").attr("transform",`translate(${o+m+p}, ${a})`);V.append("clipPath").attr("id","clip-evidence").append("rect"),_.select("clipPath rect").attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)+1).attr("width",m+1);const Y=V.append("g").classed("underlayer",!0),J=H.append("g").classed("underlayer",!0),X=$.append("g").classed("underlayer",!0),W=_.select(".underlayer"),O=z.select(".underlayer"),K=G.select(".underlayer");V.append("g").classed("content",!0).append("g").classed("paths",!0);const P=H.append("g").classed("content",!0);$.append("g").classed("content",!0);const Z=_.select(".content"),j=z.select(".content"),q=G.select(".content");V.append("g").classed("overlayer",!0),H.append("g").classed("overlayer",!0),$.append("g").classed("overlayer",!0);const tt=_.select(".overlayer"),et=z.select(".overlayer");Y.append("rect").classed("background",!0),J.append("rect").classed("background",!0),W.select(".background").transition().duration(this.drag?0:b).ease(SL).attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)).attr("width",m),O.select(".background").transition().duration(b).ease(SL).attr("height",g).attr("width",m),J.filter(t=>"error"===t.outcome).append("g").classed("axis time",!0);const rt=O.filter(t=>"error"===t.outcome).select(".axis.time").attr("transform",`translate(0, ${g+.25*this.rem})`);var it;rt.transition().duration(b).ease(SL).call((it=y,eS(3,it))).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const nt=J.filter(t=>"error"===t.outcome).append("text").classed("title time",!0).attr("text-anchor","middle");nt.append("tspan").classed("name",!0).text("Time (ms)"),O.filter(t=>"error"===t.outcome).select(".title.time").transition().duration(b).ease(SL).attr("transform",`translate(${m/2}, ${g+2.5*this.rem})`),Y.append("g").classed("axis evidence",!0),J.append("g").attr("class",t=>`axis density ${t.outcome}`),X.append("g").classed("axis accuracy",!0);const at=W.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),st=O.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),ot=K.select(".axis.accuracy").attr("transform",`translate(${f+.25*this.rem}, 0)`),ct=at.transition().duration(b).ease(SL).call(rS(v)).attr("font-size",null).attr("font-family",null),lt=st.transition().duration(b).ease(SL).each((t,e,r)=>{rS(t.densityScale).ticks(2)(UR(r[e]))}).attr("font-size",null).attr("font-family",null),ut=ot.transition().duration(b).ease(SL).call(function(t){return eS(2,t)}(B)).attr("font-size",null).attr("font-family",null);ct.selectAll("line, path").attr("stroke",null),lt.selectAll("line, path").attr("stroke",null),ut.selectAll("line, path").attr("stroke",null);const dt=Y.append("text").classed("title evidence",!0).attr("text-anchor","middle"),ht=J.append("text").attr("class",t=>`title density ${t.outcome}`).attr("text-anchor","middle"),gt=X.append("text").classed("title accuracy",!0).attr("text-anchor","middle");dt.append("tspan").classed("name",!0).text("Evidence"),ht.append("tspan").classed("name",!0).text("Density"),gt.append("tspan").classed("name",!0).text("Accuracy"),W.select(".title.evidence").transition().duration(b).ease(SL).attr("transform",`translate(${-2.5*this.rem}, ${h/2})rotate(-90)`),O.select(".title.density").transition().duration(b).ease(SL).attr("transform",`translate(${-2.5*this.rem}, ${g/2})rotate(-90)`),K.select(".title.accuracy").transition().duration(b).ease(SL).attr("transform",`translate(${f+2.25*this.rem}, ${l/2})rotate(90)`);const pt=Z.select(".paths").selectAll(".path").data(this.data.trials.filter(t=>void 0!==t.path)),mt=BR(),ft=pt.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",(t,e)=>{if(!this.drag){UR(t.currentTarget).classed("highlight",!0).raise();const r=tt.append("g").classed(`rt-label ${e.outcome}`,!0),i=r.append("rect"),n=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",y(e.rt)).attr("y","correct"===e.outcome?v(this.bounds.upper)-.25*this.rem:v(this.bounds.lower)+.125*this.rem).node().getBBox();i.attr("x",n.x-.125*this.rem).attr("y",n.y+.125*this.rem).attr("width",n.width+.25*this.rem).attr("height",n.height-.25*this.rem),mt.set(t.currentTarget,r)}}).on("pointerout",(t,e)=>{this.drag||(UR(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),mt.get(t.currentTarget).remove())});ft.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const bt=ft.merge(pt).attr("class",t=>`path ${t.outcome}`);bt.select(".curve").transition().duration(this.drag?0:b).ease(SL).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attrTween("d",(t,e,r)=>{const i=r[e],n=EN(void 0!==i.a?i.a:this.a,this.a),a=EN(void 0!==i.z?i.z:this.z,this.z),s=EN(void 0!==i.v?i.v:this.v,this.v),o=EN(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=a(e),i.v=s(e),i.t0=o(e);const r=this.alignPath(t.seed,i.a,i.z,i.v,i.t0);return A(r)}});const yt=bt.filter(t=>t.animate&&!this.paused);if(!yt.empty()){const t=yt.attr("data-new-trial-ease-time"),e=e=>mM().domain([0,1]).range([t,1])(e),r=e=>r=>mM().domain([e(t),1]).range([0,1])(e(r));yt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),yt.transition("new").duration(e=>Math.floor(1.5*e.rt*(1-t))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",(t,e,i)=>{const n=EN(i[e].getAttribute("stroke-dashoffset"),0);return t=>n(r(wL)(t))}).on("end",(t,e,r)=>{UR(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))})}const vt=bt.filter(t=>t.animate&&this.paused);if(!vt.empty()){const t=vt.attr("data-new-trial-ease-time");vt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",()=>EN(1,0)(wL(t)))}bt.filter(t=>!t.animate).attr("data-new-trial-ease-time",null),pt.exit().remove();const Ut=P.append("g").attr("class",t=>`dist ${t.outcome}`);Ut.append("path").classed("curve",!0),j.select(".dist").select(".curve").transition().duration(this.drag?0:b).ease(SL).attrTween("d",(t,e,r)=>{const i=r[e],n=EN(void 0!==i.a?i.a:this.a,this.a),a=EN(void 0!==i.z?i.z:this.z,this.z),s=EN(void 0!==i.v?i.v:this.v,this.v),o=EN(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=a(e),i.v=s(e),i.t0=o(e);const r=t.alignDistribution(i.a,i.z,i.v,i.t0);return t.densityLine(r)}});const Qt=Z.selectAll(".rt").data(this.data.trials),Bt=Qt.enter().append("g");Bt.append("line").classed("mark",!0).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem);const Ft=Bt.merge(Qt).attr("class",t=>`rt ${t.outcome}`);Ft.filter(t=>!t.animate).select(".mark").transition().duration(this.drag?0:b).ease(SL).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem),Qt.exit().remove();const It=q.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),Ct=It.enter().append("g").attr("class",(t,e)=>"accuracy model "+(0===e?"correct":"error"));Ct.append("rect").classed("bar",!0).attr("x",0),Ct.merge(It).select("rect").transition().duration(this.drag?0:b).ease(SL).attr("y",(t,e)=>B(0===e?0:1-t)).attr("width",f).attr("height",t=>B(t)),It.exit().remove();const At=q.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),xt=At.enter().append("g").classed("accuracy data",!0);xt.append("line").classed("mark",!0);const Et=xt.merge(At).attr("class",t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error"));Et.select(".mark").transition().duration(this.drag?0:b).ease(SL).attr("x1",0+.25*this.rem).attr("x2",f-.25*this.rem).attr("y1",t=>B(t)-1).attr("y2",t=>B(t)-1),At.exit().remove();const wt=tt.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),St=wt.enter().append("g").attr("class",(t,e)=>"boundary "+(0===e?"correct":"error"));St.append("line").classed("line",!0),St.append("line").classed("line touch",!0);const Rt=St.merge(wt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?EM.a.STEP:EM.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?EM.a.STEP:EM.a.JUMP}r=r<EM.a.MIN?EM.a.MIN:r>EM.a.MAX?EM.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Rt.call(C):Rt.on(".drag",null)),Rt.select(".line").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),Rt.select(".line.touch").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),wt.exit().remove();const Nt=tt.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Lt=Nt.enter().append("g").classed("drift",!0);Lt.append("line").classed("line",!0),Lt.append("line").classed("line touch",!0),Lt.append("path").classed("arrow",!0),Lt.append("path").classed("arrow touch",!0);const Mt=Lt.merge(Nt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?EM.v.STEP:EM.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?EM.v.STEP:EM.v.JUMP}e=e<EM.v.MIN?EM.v.MIN:e>EM.v.MAX?EM.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Mt.call(I):Mt.on(".drag",null));const Dt=(v(0)-v(1))/(y(1)-y(0));Mt.transition().duration(this.drag?0:b).ease(SL).attr("transform",t=>`translate(${y(t.t0)}, ${v(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*Dt)*(180/Math.PI)})`),Mt.select(".line").attr("x2",y(200)),Mt.select(".line.touch").attr("x2",y(200)),Mt.select(".arrow").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Mt.select(".arrow.touch").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Nt.exit().remove();const kt=tt.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Tt=kt.enter().append("g").classed("t0z",!0);Tt.append("line").classed("line",!0),Tt.append("line").classed("line touch",!0),Tt.append("circle").classed("point touch",!0);const Vt=Tt.merge(kt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?EM.z.STEP:EM.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?EM.z.STEP:EM.z.JUMP}e=e<EM.z.MIN?EM.z.MIN:e>EM.z.MAX?EM.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?EM.t0.STEP:EM.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?EM.t0.STEP:EM.t0.JUMP}e=e<EM.t0.MIN?EM.t0.MIN:e>EM.t0.MAX?EM.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Vt.call(F):Vt.on(".drag",null)),Vt.select(".line").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Vt.select(".line.touch").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Vt.select(".point").transition().duration(this.drag?0:b).ease(SL).attr("cx",t=>y(t.t0)).attr("cy",t=>v(t.startingPoint)),kt.exit().remove();const Ht=tt.selectAll(".measure.a").data(this.measures?[this.a]:[]),$t=Ht.enter().append("g").classed("measure a",!0);$t.append("line").classed("line",!0),$t.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-a)").attr("marker-end","url(#measure-arrow-a)");const _t=$t.append("text").classed("label",!0);_t.append("tspan").classed("a math-var",!0).text("a"),_t.append("tspan").classed("equals",!0).text(" = "),_t.append("tspan").classed("value",!0);const zt=Math.abs(v(this.bounds.upper)-v(this.bounds.lower))<=4,Gt=$t.merge(Ht);Gt.select(".line").classed("short",zt).transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)+2).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower)-2),Gt.select(".markers").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower));Gt.select(".label").transition().duration(this.drag?0:b).ease(SL).attr("x",y(this.scale.time.max)).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(KL(".2f")(this.a)),Ht.exit().remove();const Yt=tt.selectAll(".measure.z").data(this.measures?[this.z]:[]),Jt=Yt.enter().append("g").classed("measure z",!0);Jt.append("line").classed("line",!0),Jt.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-z)").attr("marker-end","url(#measure-arrow-z)");const Xt=Jt.append("text").classed("label",!0);Xt.append("tspan").classed("z math-var",!0).text("z"),Xt.append("tspan").classed("equals",!0).text(" = "),Xt.append("tspan").classed("value",!0);const Wt=Math.abs(v(this.startingPoint)-v(this.bounds.lower))<=4,Ot=Jt.merge(Yt);Ot.select(".line").classed("short",Wt).transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)+2).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower)-2),Ot.select(".markers").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower));Ot.select(".label").transition().duration(this.drag?0:b).ease(SL).attr("x",y(this.scale.time.min)).attr("y",v(this.bounds.lower)+.125*this.rem).select(".value").text(KL(".0%")(this.z)),Yt.exit().remove();const Kt=tt.selectAll(".measure.v").data(this.measures?[this.v]:[]),Pt=Kt.enter().append("g").classed("measure v",!0);Pt.append("path").classed("line",!0),Pt.append("path").classed("markers",!0).attr("marker-start","url(#measure-capped-arrow-v)").attr("marker-end","url(#measure-capped-arrow-v)");const Zt=Pt.append("text").classed("label",!0);Zt.append("tspan").classed("v math-var",!0).text("v"),Zt.append("tspan").classed("equals",!0).text(" = "),Zt.append("tspan").classed("value",!0);const jt=y(200)-y(0)+.75*this.rem,qt=Math.atan(this.v/1e3*Dt),te=Math.cos(qt)*jt,ee=Math.sin(qt)*jt,re=2/jt,ie=Math.atan(this.v/1e3*Dt)-re,ne=Math.cos(re)*jt,ae=Math.sin(re)*jt,se=Math.cos(ie)*jt,oe=Math.sin(ie)*jt,ce=ie*jt<=4,le=Pt.merge(Kt);le.select(".line").classed("short",ce).transition().duration(this.drag?0:b).ease(SL).attr("d",`\n        M ${y(this.t0)+ne}, ${v(this.startingPoint)-ae}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+se} ${v(this.startingPoint)-oe}\n      `),le.select(".markers").transition().duration(this.drag?0:b).ease(SL).attr("d",`\n        M ${y(this.t0+200)+.75*this.rem}, ${v(this.startingPoint)}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+te} ${v(this.startingPoint)-ee}\n      `);le.select(".label").transition().duration(this.drag?0:b).ease(SL).attr("x",y(this.t0+200)+.5*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(KL(".2f")(this.v)),Kt.exit().remove();const ue=tt.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),de=ue.enter().append("g").classed("measure t0",!0);de.append("line").classed("line",!0),de.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-t0)").attr("marker-end","url(#measure-capped-arrow-t0)");const he=de.append("text").classed("label",!0);he.append("tspan").classed("t0 math-var",!0).text("t₀"),he.append("tspan").classed("equals",!0).text(" = "),he.append("tspan").classed("value",!0);const ge=Math.abs(y(0)-y(this.t0))<=4,pe=de.merge(ue);pe.select(".line").classed("short",ge).transition().duration(this.drag?0:b).ease(SL).attr("x1",y(0)+2).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)-2).attr("y2",v(this.startingPoint)-.75*this.rem),pe.select(".markers").transition().duration(this.drag?0:b).ease(SL).attr("x1",y(0)).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)).attr("y2",v(this.startingPoint)-.75*this.rem);pe.select(".label").transition().duration(this.drag?0:b).ease(SL).attr("x",y(this.t0)+.25*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(KL("d")(this.t0)),ue.exit().remove();const me=et.selectAll(".model.mean").data(t=>this.means?[t]:[]),fe=me.enter().append("g").attr("class",t=>`model mean ${t.outcome}`);fe.append("line").classed("indicator",!0);fe.merge(me).select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",t=>y(t.model.meanRT)).attr("x2",t=>y(t.model.meanRT)).attr("y1",t=>t.densityScale(this.scale.density.min)).attr("y2",t=>t.densityScale(this.scale.density.max)),me.exit().remove();const be=et.selectAll(".data.mean").data(t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[]),ye=be.enter().append("g").attr("class",t=>`data mean ${t.outcome}`);ye.append("line").classed("indicator",!0).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem);ye.merge(be).select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",t=>y(t.data.meanRT)).attr("x2",t=>y(t.data.meanRT)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem),be.exit().select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{UR(r[e].parentElement).remove()});const ve=et.selectAll(".model.sd").data(t=>this.sds?[t]:[]),Ue=ve.enter().append("g").attr("class",t=>`model sd ${t.outcome}`);Ue.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#model-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#model-sd-cap-${t.outcome})`);Ue.merge(ve).select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",t=>y(t.model.meanRT-t.model.sdRT/2)).attr("x2",t=>y(t.model.meanRT+t.model.sdRT/2)).attr("y1",t=>t.densityScale(5)).attr("y2",t=>t.densityScale(5)),ve.exit().remove();const Qe=et.selectAll(".data.sd").data(t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t]),Be=Qe.enter().append("g").attr("class",t=>`data sd ${t.outcome}`);Be.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#data-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#data-sd-cap-${t.outcome})`).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem);Be.merge(Qe).select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",t=>y(t.data.meanRT-t.data.sdRT/2)).attr("x2",t=>y(t.data.meanRT+t.data.sdRT/2)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem),Qe.exit().select(".indicator").transition().duration(this.drag?0:b).ease(SL).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{UR(r[e].parentElement).remove()}),this.firstUpdate=!1}}customElements.define("ddm-model",NM);class LM extends(CM(xM)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,RE`
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
      `]}render(){return mw``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,i=Math.min(e,r),n=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=i-(n+a),c=i-(s+.25*this.rem);this.xScale=mM().domain([-1,1]).range([0,c]),this.yScale=mM().domain([1,-1]).range([0,o]);const l=UR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=l.enter().append("svg").classed("main",!0),d=u.merge(l).attr("viewBox",`0 0 ${i} ${i}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),d.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const h=u.append("g").classed("plot",!0),g=d.select(".plot").attr("transform",`translate(${s}, ${n})`),p=h.append("g").classed("underlayer",!0),m=g.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),h.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");g.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const f=h.append("g").classed("overlayer",!0),b=g.select(".overlayer");f.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=WN()-this.pauseTime,this.pauseTime=0),this.runner=function(t,e,r){var i=new KN,n=e;return i._restart=i.restart,i.restart=function(t,e,r){e=+e,r=null==r?WN():+r,i._restart(function a(s){s+=n,i._restart(a,n+=e,r),t(s)},e,r)},i.restart(t,e,r),i}(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=WN())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=UR(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();UR(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();UR(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=WN(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,i=this.baseTime?e-this.lastTime:0;this.lastTime=e;let n=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(n=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(n||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,i=Math.sqrt(Math.random());s.x=this.xScale(i*Math.cos(r)),s.y=this.yScale(i*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(i/1e3)*Math.cos(e),s.dy=this.speed*(i/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=UR(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=UR(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const c=UR(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);c.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),c.exit().remove()}}customElements.define("rdk-2afc-task",LM);class MM extends(function(t){return class extends t{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,RE`
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
        `]}}}(xM)){static get styles(){return[super.styles,RE`
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
      `]}}customElements.define("ddm-equation-azv2pc",class extends MM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},accuracy:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.alignState()}alignState(){this.accuracy=EM.azv2pC(this.a,this.z,this.v)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azv2pc-change",{detail:{a:this.a,z:this.z,v:this.v,accuracy:this.accuracy},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n;return this.numeric?(t=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${EM.a.MIN}
            max=${EM.a.MAX}
            step=${EM.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">a</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math z"
            ?disabled=${!this.interactive}
            min=${EM.z.MIN}
            max=${EM.z.MAX}
            step=${EM.z.STEP}
            .value=${this.z}
            @input=${this.zInput.bind(this)}
          >
            <var class="math-var">z</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            min=${EM.v.MIN}
            max=${EM.v.MAX}
            step=${EM.v.STEP}
            .value=${this.v}
            @input=${this.vInput.bind(this)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,i=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            disabled
            .value=${EM.s.DEFAULT}
          >
            <var class="math-var">s</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math accuracy"
            disabled
            .value=${+this.accuracy.toFixed(2)}
          >
            <var>Accuracy</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=bw`<mi mathvariant="normal" class="math-id a">a</mi>`,e=bw`<mi mathvariant="normal" class="math-id z">z</mi>`,r=bw`<mi mathvariant="normal" class="math-id v">v</mi>`,i=bw`<mi mathvariant="normal" class="math-id s">s</mi>`,n=bw`<mtext class="accuracy">Accuracy</mtext>`),mw`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${n}
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${r}
                        ${t}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${i}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                          ${r}
                          ${e}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${i}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
              </mrow>
              <mrow>
                <msup>
                  <mi mathvariant="normal">e</mi>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${r}
                        ${t}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${i}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <mn>1</mn>
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Accuracy} = \\frac{e^{-(2va / s^2)} - e^{-(2vz / s^2)}}{e^{-(2va / s^2)} - 1}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Accuracy" = (e^-(2va // s^2) - e^-(2vz // s^2)) / (e^-(2va // s^2) - 1)
          </annotation>
        </semantics>
      </math>
    </div>`}});customElements.define("ddm-equation-azvt02m",class extends MM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0},meanRT:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.alignState()}alignState(){this.meanRT=EM.azvt02m(this.a,this.z,this.v,this.t0)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azvt02m-change",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0,meanRT:this.meanRT},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}t0Input(t){this.t0=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n,a;return this.numeric?(t=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${EM.a.MIN}
            max=${EM.a.MAX}
            step=${EM.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">a</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math z"
            ?disabled=${!this.interactive}
            min=${EM.z.MIN}
            max=${EM.z.MAX}
            step=${EM.z.STEP}
            .value=${this.z}
            @input=${this.zInput.bind(this)}
          >
            <var class="math-var">z</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            min=${EM.v.MIN}
            max=${EM.v.MAX}
            step=${EM.v.STEP}
            .value=${this.v}
            @input=${this.vInput.bind(this)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,i=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math t0"
            ?disabled=${!this.interactive}
            min=${EM.t0.MIN}
            max=${EM.t0.MAX}
            step=${EM.t0.STEP}
            .value=${this.t0}
            @input=${this.t0Input.bind(this)}
          >
            <var class="math-var">t<sub class="math-num">0</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            disabled
            .value=${EM.s.DEFAULT}
          >
            <var class="math-var">s</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,a=bw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math mean-rt"
            disabled
            .value=${+this.meanRT.toFixed(0)}
          >
            <var>Mean RT</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=bw`<mi mathvariant="normal" class="math-id a">a</mi>`,e=bw`<mi mathvariant="normal" class="math-id z">z</mi>`,r=bw`<mi mathvariant="normal" class="math-id v">v</mi>`,i=bw`<msub class="math-id t0">
          <mi mathvariant="normal">t</mi>
          <mrow><mn>0</mn></mrow>
        </msub>`,n=bw`<mi mathvariant="normal" class="math-id s">s</mi>`,a=bw`<mtext class="mean-rt">Mean RT</mtext>`),mw`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${a}
            <mo>=</mo>
            ${i}
            <mo>−</mo>
            <mfrac>
              <mrow>
                ${e}
              </mrow>
              <mrow>
                ${r}
              </mrow>
            </mfrac>
            <mo>+</mo>
            <mfrac>
              <mrow>
                ${t}
              </mrow>
              <mrow>
                ${r}
              </mrow>
            </mfrac>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${r}
                        ${e}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${n}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <mn>1</mn>
              </mrow>
              <mrow>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${r}
                        ${t}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${n}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <mn>1</mn>
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Mean RT} = t_0 - \\frac{z}{v} + \\frac{a}{v} \\frac{e^{-(2vz / s^2)} - 1} {e^{-(2va / s^2)} - 1}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Mean RT" = t_0 - z / v + a / v (e^-(2vz // s^2) - 1) / (e^-(2va // s^2) - 1)
          </annotation>
        </semantics>
      </math>
    </div>`}});class DM extends xM{static get styles(){return[super.styles,RE`
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
      `]}render(){return mw`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`}}customElements.define("ddm-example",DM);customElements.define("ddm-example-human",class extends DM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:!1,type:Number,reflect:!1},z:{attribute:!1,type:Number,reflect:!1},v:{attribute:!1,type:Number,reflect:!1},t0:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.accumulableResponse=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.ddmFit=null,this.data=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.ddmFit=this.querySelector("ddm-fit"),this.ddmModel.clear(),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable&&(this.accumulableTable.correctCount=NaN,this.accumulableTable.errorCount=NaN,this.accumulableTable.nrCount=NaN,this.accumulableTable.accuracy=NaN,this.accumulableTable.correctMeanRT=NaN,this.accumulableTable.errorMeanRT=NaN,this.accumulableTable.meanRT=NaN,this.accumulableTable.correctSDRT=NaN,this.accumulableTable.errorSDRT=NaN,this.accumulableTable.sdRT=NaN),this.ddmModel&&this.ddmModel.clear(),this.ddmFit&&this.ddmFit.clear()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",t=>{this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",()=>{this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()}),this.accumulableResponse&&this.accumulableResponse.addEventListener("accumulable-response",t=>{this.data=t.detail.data,this.ddmModel&&this.ddmModel.trial({index:t.detail.trial,rt:t.detail.rt,outcome:t.detail.outcome}),this.ddmFit&&this.ddmFit.set({accuracy:t.detail.data.accuracy,correctMeanRT:t.detail.data.correctMeanRT,errorMeanRT:t.detail.data.errorMeanRT,meanRT:t.detail.data.meanRT,correctSDRT:t.detail.data.correctSDRT,errorSDRT:t.detail.data.errorSDRT,sdRT:t.detail.data.sdRT}),this.requestUpdate()}),this.ddmFit&&this.ddmFit.addEventListener("ddm-fit-update",t=>{this.a=t.detail.a,this.z=.5,this.v=t.detail.v,this.t0=t.detail.t0})}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});customElements.define("ddm-example-interactive",class extends DM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.accumulableControl=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-resample",()=>{this.ddmModel?.resample(),this.requestUpdate()}),this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trials,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0)}});customElements.define("ddm-example-model",class extends DM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=EM.a.DEFAULT,this.z=EM.z.DEFAULT,this.v=EM.v.DEFAULT,this.t0=EM.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.ddmParameters=null,this.ddmModel=null,this.accumulableResponse=null,this.accumulableTable=null,this.trialCount=0,this.signals=["left","right"],this.signal=void 0,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.ddmModel&&this.ddmModel.resumeTrial()}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.ddmModel&&this.ddmModel.pauseTrial()}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.trialCount=0,this.signal=void 0,this.rdkTask&&this.rdkTask.reset(),this.ddmModel&&(this.ddmModel.trials=this.trialCount),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.signal=t.detail.signal,this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial),this.ddmModel&&(this.trialCount+=1,this.ddmModel.trial())}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.signal=void 0,this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}),this.ddmModel.addEventListener("accumulable-response",t=>{if(this.accumulableResponse){const e="correct"===t.detail.outcome?this.signal:"left"===this.signal?"right":"left";this.accumulableResponse.responded(e)}this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.trialCount>this.trials&&(this.trialCount=this.trials),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trialCount,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});
//# sourceMappingURL=page.js.map
