var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math===Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||e("object"==typeof r&&r)||function(){return this}()||Function("return this")(),i=r,n=function(t){try{return!!t()}catch(t){return!0}},a=!n(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),s=a,o=Function.prototype,c=o.call,l=s&&o.bind.bind(c,c),u=s?l:function(t){return function(){return c.apply(t,arguments)}},d=function(t){return null==t},h=d,g=TypeError,p=function(t){if(h(t))throw new g("Can't call method on "+t);return t},m=p,f=Object,b=function(t){return f(m(t))},y=b,v=u({}.hasOwnProperty),B=Object.hasOwn||function(t,e){return v(y(t),e)},Q={},U={exports:{}},F=r,I=Object.defineProperty,A=function(t,e){try{I(F,t,{value:e,configurable:!0,writable:!0})}catch(r){F[t]=e}return e},C=r,x=A,E="__core-js_shared__",w=U.exports=C[E]||x(E,{});(w.versions||(w.versions=[])).push({version:"3.49.0",mode:"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"});var S,R,L=U.exports,N=L,M=function(t,e){return N[t]||(N[t]=e||{})},D=u,k=0,T=Math.random(),H=D(1.1.toString),V=function(t){return"Symbol("+(void 0===t?"":t)+")_"+H(++k+T,36)},$=r.navigator,_=$&&$.userAgent,z=_?String(_):"",G=r,Y=z,X=G.process,O=G.Deno,W=X&&X.versions||O&&O.version,K=W&&W.v8;K&&(R=(S=K.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!R&&Y&&(!(S=Y.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=Y.match(/Chrome\/(\d+)/))&&(R=+S[1]);var J=R,P=J,Z=n,j=r.String,q=!!Object.getOwnPropertySymbols&&!Z(function(){var t=Symbol("symbol detection");return!j(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&P&&P<41}),tt=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=M,rt=B,it=V,nt=q,at=tt,st=r.Symbol,ot=et("wks"),ct=at?st.for||st:st&&st.withoutSetter||it,lt=function(t){return rt(ot,t)||(ot[t]=nt&&rt(st,t)?st[t]:ct("Symbol."+t)),ot[t]},ut=lt;Q.f=ut;var dt={},ht=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),gt="object"==typeof document&&document.all,pt=void 0===gt&&void 0!==gt?function(t){return"function"==typeof t||t===gt}:function(t){return"function"==typeof t},mt=pt,ft=function(t){return"object"==typeof t?null!==t:mt(t)},bt=ft,yt=r.document,vt=bt(yt)&&bt(yt.createElement),Bt=function(t){return vt?yt.createElement(t):{}},Qt=Bt,Ut=!ht&&!n(function(){return 7!==Object.defineProperty(Qt("div"),"a",{get:function(){return 7}}).a}),Ft=ht&&n(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),It=ft,At=String,Ct=TypeError,xt=function(t){if(It(t))return t;throw new Ct(At(t)+" is not an object")},Et=a,wt=Function.prototype.call,St=Et?wt.bind(wt):function(){return wt.apply(wt,arguments)},Rt=r,Lt=pt,Nt=function(t,e){return arguments.length<2?(r=Rt[t],Lt(r)?r:void 0):Rt[t]&&Rt[t][e];var r},Mt=u({}.isPrototypeOf),Dt=Nt,kt=pt,Tt=Mt,Ht=Object,Vt=tt?function(t){return"symbol"==typeof t}:function(t){var e=Dt("Symbol");return kt(e)&&Tt(e.prototype,Ht(t))},$t=String,_t=function(t){try{return $t(t)}catch(t){return"Object"}},zt=pt,Gt=_t,Yt=TypeError,Xt=function(t){if(zt(t))return t;throw new Yt(Gt(t)+" is not a function")},Ot=Xt,Wt=d,Kt=function(t,e){var r=t[e];return Wt(r)?void 0:Ot(r)},Jt=St,Pt=pt,Zt=ft,jt=TypeError,qt=St,te=ft,ee=Vt,re=Kt,ie=function(t,e){var r,i;if("string"===e&&Pt(r=t.toString)&&!Zt(i=Jt(r,t)))return i;if(Pt(r=t.valueOf)&&!Zt(i=Jt(r,t)))return i;if("string"!==e&&Pt(r=t.toString)&&!Zt(i=Jt(r,t)))return i;throw new jt("Can't convert object to primitive value")},ne=TypeError,ae=lt("toPrimitive"),se=function(t,e){if(!te(t)||ee(t))return t;var r,i=re(t,ae);if(i){if(void 0===e&&(e="default"),r=qt(i,t,e),!te(r)||ee(r))return r;throw new ne("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},oe=se,ce=Vt,le=function(t){var e=oe(t,"string");return ce(e)?e:e+""},ue=ht,de=Ut,he=Ft,ge=xt,pe=le,me=TypeError,fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ye="enumerable",ve="configurable",Be="writable";dt.f=ue?he?function(t,e,r){if(ge(t),e=pe(e),ge(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Be in r&&!r[Be]){var i=be(t,e);i&&i[Be]&&(t[e]=r.value,r={configurable:ve in r?r[ve]:i[ve],enumerable:ye in r?r[ye]:i[ye],writable:!1})}return fe(t,e,r)}:fe:function(t,e,r){if(ge(t),e=pe(e),ge(r),de)try{return fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new me("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Qe=i,Ue=B,Fe=Q,Ie=dt.f,Ae=function(t){var e=Qe.Symbol||(Qe.Symbol={});Ue(e,t)||Ie(e,t,{value:Fe.f(t)})},Ce={},xe={},Ee={}.propertyIsEnumerable,we=Object.getOwnPropertyDescriptor,Se=we&&!Ee.call({1:2},1);xe.f=Se?function(t){var e=we(this,t);return!!e&&e.enumerable}:Ee;var Re=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Le=u,Ne=Le({}.toString),Me=Le("".slice),De=function(t){return Me(Ne(t),8,-1)},ke=n,Te=De,He=Object,Ve=u("".split),$e=ke(function(){return!He("z").propertyIsEnumerable(0)})?function(t){return"String"===Te(t)?Ve(t,""):He(t)}:He,_e=p,ze=function(t){return $e(_e(t))},Ge=ht,Ye=St,Xe=xe,Oe=Re,We=ze,Ke=le,Je=B,Pe=Ut,Ze=Object.getOwnPropertyDescriptor;Ce.f=Ge?Ze:function(t,e){if(t=We(t),e=Ke(e),Pe)try{return Ze(t,e)}catch(t){}if(Je(t,e))return Oe(!Ye(Xe.f,t,e),t[e])};var je=r,qe=Ae,tr=dt.f,er=Ce.f,rr=je.Symbol;if(qe("asyncDispose"),rr){var ir=er(rr,"asyncDispose");ir.enumerable&&ir.configurable&&ir.writable&&tr(rr,"asyncDispose",{value:ir.value,enumerable:!1,configurable:!1,writable:!1})}var nr=r,ar=Ae,sr=dt.f,or=Ce.f,cr=nr.Symbol;if(ar("dispose"),cr){var lr=or(cr,"dispose");lr.enumerable&&lr.configurable&&lr.writable&&sr(cr,"dispose",{value:lr.value,enumerable:!1,configurable:!1,writable:!1})}var ur=dt,dr=Re,hr=ht?function(t,e,r){return ur.f(t,e,dr(1,r))}:function(t,e,r){return t[e]=r,t},gr={exports:{}},pr=ht,mr=B,fr=Function.prototype,br=pr&&Object.getOwnPropertyDescriptor,yr={CONFIGURABLE:mr(fr,"name")&&(!pr||pr&&br(fr,"name").configurable)},vr=pt,Br=L,Qr=u(Function.toString);vr(Br.inspectSource)||(Br.inspectSource=function(t){return Qr(t)});var Ur,Fr,Ir,Ar=Br.inspectSource,Cr=pt,xr=r.WeakMap,Er=Cr(xr)&&/native code/.test(String(xr)),wr=V,Sr=M("keys"),Rr=function(t){return Sr[t]||(Sr[t]=wr(t))},Lr={},Nr=Er,Mr=r,Dr=ft,kr=hr,Tr=B,Hr=L,Vr=Rr,$r=Lr,_r="Object already initialized",zr=Mr.TypeError,Gr=Mr.WeakMap;if(Nr||Hr.state){var Yr=Hr.state||(Hr.state=new Gr);Yr.get=Yr.get,Yr.has=Yr.has,Yr.set=Yr.set,Ur=function(t,e){if(Yr.has(t))throw new zr(_r);return e.facade=t,Yr.set(t,e),e},Fr=function(t){return Yr.get(t)||{}},Ir=function(t){return Yr.has(t)}}else{var Xr=Vr("state");$r[Xr]=!0,Ur=function(t,e){if(Tr(t,Xr))throw new zr(_r);return e.facade=t,kr(t,Xr,e),e},Fr=function(t){return Tr(t,Xr)?t[Xr]:{}},Ir=function(t){return Tr(t,Xr)}}var Or={set:Ur,get:Fr,has:Ir,enforce:function(t){return Ir(t)?Fr(t):Ur(t,{})},getterFor:function(t){return function(e){var r;if(!Dr(e)||(r=Fr(e)).type!==t)throw new zr("Incompatible receiver, "+t+" required");return r}}},Wr=u,Kr=n,Jr=pt,Pr=B,Zr=ht,jr=yr.CONFIGURABLE,qr=Ar,ti=Or.enforce,ei=Or.get,ri=String,ii=Object.defineProperty,ni=Wr("".slice),ai=Wr("".replace),si=Wr([].join),oi=Zr&&!Kr(function(){return 8!==ii(function(){},"length",{value:8}).length}),ci=String(String).split("String"),li=gr.exports=function(t,e,r){"Symbol("===ni(ri(e),0,7)&&(e="["+ai(ri(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Pr(t,"name")||jr&&t.name!==e)&&(Zr?ii(t,"name",{value:e,configurable:!0}):t.name=e),oi&&r&&Pr(r,"arity")&&t.length!==r.arity&&ii(t,"length",{value:r.arity});try{r&&Pr(r,"constructor")&&r.constructor?Zr&&ii(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var i=ti(t);return Pr(i,"source")||(i.source=si(ci,"string"==typeof e?e:"")),t};Function.prototype.toString=li(function(){return Jr(this)&&ei(this).source||qr(this)},"toString");var ui,di=gr.exports,hi=pt,gi=dt,pi=di,mi=A,fi=function(t,e,r,i){i||(i={});var n=i.enumerable,a=void 0!==i.name?i.name:e;if(hi(r)&&pi(r,a,i),i.global)n?t[e]=r:mi(e,r);else{try{i.unsafe?t[e]&&(n=!0):delete t[e]}catch(t){}n?t[e]=r:gi.f(t,e,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t},bi={},yi=Math.ceil,vi=Math.floor,Bi=Math.trunc||function(t){var e=+t;return(e>0?vi:yi)(e)},Qi=Bi,Ui=function(t){var e=+t;return e!=e||0===e?0:Qi(e)},Fi=Ui,Ii=Math.max,Ai=Math.min,Ci=Ui,xi=Math.min,Ei=function(t){var e=Ci(t);return e>0?xi(e,9007199254740991):0},wi=Ei,Si=function(t){return wi(t.length)},Ri=ze,Li=function(t,e){var r=Fi(t);return r<0?Ii(r+e,0):Ai(r,e)},Ni=Si,Mi={indexOf:(ui=!1,function(t,e,r){var i=Ri(t),n=Ni(i);if(0===n)return!ui&&-1;var a,s=Li(r,n);if(ui&&e!=e){for(;n>s;)if((a=i[s++])!=a)return!0}else for(;n>s;s++)if((ui||s in i)&&i[s]===e)return ui||s||0;return!ui&&-1})},Di=B,ki=ze,Ti=Mi.indexOf,Hi=Lr,Vi=u([].push),$i=function(t,e){var r,i=ki(t),n=0,a=[];for(r in i)!Di(Hi,r)&&Di(i,r)&&Vi(a,r);for(;e.length>n;)Di(i,r=e[n++])&&(~Ti(a,r)||Vi(a,r));return a},_i=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],zi=$i,Gi=_i.concat("length","prototype");bi.f=Object.getOwnPropertyNames||function(t){return zi(t,Gi)};var Yi={};Yi.f=Object.getOwnPropertySymbols;var Xi=Nt,Oi=bi,Wi=Yi,Ki=xt,Ji=u([].concat),Pi=Xi("Reflect","ownKeys")||function(t){var e=Oi.f(Ki(t)),r=Wi.f;return r?Ji(e,r(t)):e},Zi=B,ji=Pi,qi=Ce,tn=dt,en=function(t,e,r){for(var i=ji(e),n=tn.f,a=qi.f,s=0;s<i.length;s++){var o=i[s];Zi(t,o)||r&&Zi(r,o)||n(t,o,a(e,o))}},rn=n,nn=pt,an=/#|\.prototype\./,sn=function(t,e){var r=cn[on(t)];return r===un||r!==ln&&(nn(e)?rn(e):!!e)},on=sn.normalize=function(t){return String(t).replace(an,".").toLowerCase()},cn=sn.data={},ln=sn.NATIVE="N",un=sn.POLYFILL="P",dn=sn,hn=r,gn=Ce.f,pn=hr,mn=fi,fn=A,bn=en,yn=dn,vn=function(t,e){var r,i,n,a,s,o=t.target,c=t.global,l=t.stat;if(r=c?hn:l?hn[o]||fn(o,{}):hn[o]&&hn[o].prototype)for(i in e){if(a=e[i],n=t.dontCallGetSet?(s=gn(r,i))&&s.value:r[i],!yn(c?i:o+(l?".":"#")+i,t.forced)&&void 0!==n){if(typeof a==typeof n)continue;bn(a,n)}(t.sham||n&&n.sham)&&pn(a,"sham",!0),mn(r,i,a,t)}},Bn={};Bn[lt("toStringTag")]="z";var Qn="[object z]"===String(Bn),Un=pt,Fn=De,In=lt("toStringTag"),An=Object,Cn="Arguments"===Fn(function(){return arguments}()),xn=Qn?Fn:function(t){var e,r,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=An(t),In))?r:Cn?Fn(e):"Object"===(i=Fn(e))&&Un(e.callee)?"Arguments":i},En=vn,wn=Nt,Sn=ft,Rn=xn,Ln=n,Nn="Error",Mn="DOMException",Dn=Object.setPrototypeOf||{}.__proto__,kn=wn(Mn),Tn=Error,Hn=Tn.isError;En({target:"Error",stat:!0,sham:!0,forced:!Hn||!Dn||Ln(function(){return kn&&!Hn(new kn(Mn))||!Hn(new Tn(Nn,{cause:function(){}}))||Hn(wn("Object","create")(Tn.prototype))})},{isError:function(t){if(!Sn(t))return!1;var e=Rn(t);return e===Nn||e===Mn}});var Vn=!n(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),$n=B,_n=pt,zn=b,Gn=Vn,Yn=Rr("IE_PROTO"),Xn=Object,On=Xn.prototype,Wn=Gn?Xn.getPrototypeOf:function(t){var e=zn(t);if($n(e,Yn))return e[Yn];var r=e.constructor;return _n(r)&&e instanceof r?r.prototype:e instanceof Xn?On:null},Kn=u,Jn=Xt,Pn=function(t,e,r){try{return Kn(Jn(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Zn=ft,jn=function(t){return Zn(t)||null===t},qn=String,ta=TypeError,ea=Pn,ra=ft,ia=p,na=function(t){if(jn(t))return t;throw new ta("Can't set "+qn(t)+" as a prototype")},aa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=ea(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return ia(r),na(i),ra(r)?(e?t(r,i):r.__proto__=i,r):r}}():void 0),sa={},oa=$i,ca=_i,la=Object.keys||function(t){return oa(t,ca)},ua=ht,da=Ft,ha=dt,ga=xt,pa=ze,ma=la;sa.f=ua&&!da?Object.defineProperties:function(t,e){ga(t);for(var r,i=pa(e),n=ma(e),a=n.length,s=0;a>s;)ha.f(t,r=n[s++],i[r]);return t};var fa,ba=Nt("document","documentElement"),ya=xt,va=sa,Ba=_i,Qa=Lr,Ua=ba,Fa=Bt,Ia="prototype",Aa="script",Ca=Rr("IE_PROTO"),xa=function(){},Ea=function(t){return"<"+Aa+">"+t+"</"+Aa+">"},wa=function(t){t.write(Ea("")),t.close();var e=t.parentWindow.Object;return t=null,e},Sa=function(){try{fa=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Sa="undefined"!=typeof document?document.domain&&fa?wa(fa):(e=Fa("iframe"),r="java"+Aa+":",e.style.display="none",Ua.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ea("document.F=Object")),t.close(),t.F):wa(fa);for(var i=Ba.length;i--;)delete Sa[Ia][Ba[i]];return Sa()};Qa[Ca]=!0;var Ra=Object.create||function(t,e){var r;return null!==t?(xa[Ia]=ya(t),r=new xa,xa[Ia]=null,r[Ca]=t):r=Sa(),void 0===e?r:va.f(r,e)},La=Error,Na=u("".replace),Ma=String(new La("zxcasd").stack),Da=/\n\s*at [^:]*:[^\n]*/,ka=Da.test(Ma),Ta=function(t,e){if(ka&&"string"==typeof t&&!La.prepareStackTrace)for(;e--;)t=Na(t,Da,"");return t},Ha=Re,Va=!n(function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",Ha(1,7)),7!==t.stack)}),$a=hr,_a=Ta,za=Va,Ga=Error.captureStackTrace,Ya=xn,Xa=String,Oa=function(t){if("Symbol"===Ya(t))throw new TypeError("Cannot convert a Symbol value to a string");return Xa(t)},Wa=Oa,Ka=function(t,e){return void 0===t?arguments.length<2?"":e:Wa(t)},Ja=vn,Pa=Mt,Za=Wn,ja=aa,qa=en,ts=Ra,es=hr,rs=Re,is=function(t,e,r,i){za&&(Ga?Ga(t,e):$a(t,"stack",_a(r,i)))},ns=Ka,as=lt,ss=n,os=r.SuppressedError,cs=as("toStringTag"),ls=Error,us=!!os&&3!==os.length,ds=!!os&&ss(function(){return 4===new os(1,2,3,{cause:4}).cause}),hs=us||ds,gs=function(t,e,r){var i,n=Pa(ps,this);return ja?i=!hs||n&&Za(this)!==ps?ja(new ls,n?Za(this):ps):new os:(i=n?this:ts(ps),es(i,cs,"Error")),void 0!==r&&es(i,"message",ns(r)),is(i,gs,i.stack,1),es(i,"error",t),es(i,"suppressed",e),i};ja?ja(gs,ls):qa(gs,ls,{name:!0});var ps=gs.prototype=hs?os.prototype:ts(ls.prototype,{constructor:rs(1,gs),message:rs(1,""),name:rs(1,"SuppressedError")});hs&&(ps.constructor=gs),Ja({global:!0,constructor:!0,arity:3,forced:hs},{SuppressedError:gs});var ms=De,fs=Array.isArray||function(t){return"Array"===ms(t)},bs=ht,ys=fs,vs=TypeError,Bs=Object.getOwnPropertyDescriptor,Qs=bs&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(ys(t)&&!Bs(t,"length").writable)throw new vs("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e},Us=TypeError,Fs=function(t){if(t>9007199254740991)throw new Us("Maximum allowed index exceeded");return t},Is=b,As=Si,Cs=Qs,xs=Fs;vn({target:"Array",proto:!0,arity:1,forced:n(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var e=Is(this),r=As(e),i=arguments.length;xs(r+i);for(var n=0;n<i;n++)e[r]=arguments[n],r++;return Cs(e,r),r}});var Es=ht,ws=dt,Ss=Re,Rs=function(t,e,r){Es?ws.f(t,e,Ss(0,r)):t[e]=r},Ls=Si,Ns=Ui,Ms=ze,Ds=Rs,ks=Array,Ts=RangeError;vn({target:"Array",proto:!0,forced:function(){try{[].with({valueOf:function(){throw 4}},null)}catch(t){return 4!==t}}()},{with:function(t,e){var r=Ms(this),i=Ls(r),n=Ns(t),a=n<0?i+n:n;if(a>=i||a<0)throw new Ts("Incorrect index");for(var s=new ks(i),o=0;o<i;o++)Ds(s,o,o===a?e:r[o]);return s}});var Hs=vn,Vs=u,$s=Math.pow,_s=$s(2,-24),zs=.0009765625,Gs=Vs(DataView.prototype.getUint16);Hs({target:"DataView",proto:!0},{getFloat16:function(t){return function(t){var e=t>>>15,r=t>>>10&31,i=1023&t;return 31===r?0===i?0===e?1/0:-1/0:NaN:0===r?i*(0===e?_s:-_s):$s(2,r-15)*(0===e?1+i*zs:-1-i*zs)}(Gs(this,t,arguments.length>1&&arguments[1]))}});var Ys=xn,Xs=TypeError,Os=Ui,Ws=Ei,Ks=RangeError,Js=function(t){if(void 0===t)return 0;var e=Os(t),r=Ws(e);if(e!==r)throw new Ks("Wrong length or index");return r},Ps=Math.log,Zs=Math.LN2,js=Math.log2||function(t){return Ps(t)/Zs},qs=4503599627370496,to=function(t){return t+qs-qs},eo=vn,ro=u,io=function(t){if("DataView"===Ys(t))return t;throw new Xs("Argument is not a DataView")},no=Js,ao=js,so=to,oo=Math.floor,co=Math.pow,lo=1024,uo=ro(DataView.prototype.setUint16);eo({target:"DataView",proto:!0},{setFloat16:function(t,e){uo(io(this),no(t),function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|so(16777216*t);var r=oo(ao(t));if(-15===r)return e<<15|lo;var i=so((t*co(2,-r)-1)*lo);return i===lo?e<<15|r+16<<10:e<<15|r+15<<10|i}(+e),arguments.length>2&&arguments[2])}});var ho=di,go=dt,po=function(t,e,r){return r.get&&ho(r.get,e,{getter:!0}),r.set&&ho(r.set,e,{setter:!0}),go.f(t,e,r)},mo="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,fo=r,bo=Pn,yo=De,vo=fo.ArrayBuffer,Bo=fo.TypeError,Qo=vo&&bo(vo.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==yo(t))throw new Bo("ArrayBuffer expected");return t.byteLength},Uo=mo,Fo=Qo,Io=r.DataView,Ao=function(t){if(!Uo||0!==Fo(t))return!1;try{return new Io(t),!1}catch(t){return!0}},Co=ht,xo=po,Eo=Ao,wo=ArrayBuffer.prototype;Co&&!("detached"in wo)&&xo(wo,"detached",{configurable:!0,get:function(){return Eo(this)}});var So,Ro,Lo,No,Mo=Ao,Do=TypeError,ko=function(t){if(Mo(t))throw new Do("ArrayBuffer is detached");return t},To=r,Ho=z,Vo=De,$o=function(t){return Ho.slice(0,t.length)===t},_o=$o("Bun/")?"BUN":$o("Cloudflare-Workers")?"CLOUDFLARE":$o("Deno/")?"DENO":$o("Node.js/")?"NODE":To.Bun&&"string"==typeof Bun.version?"BUN":To.Deno&&"object"==typeof Deno.version?"DENO":"process"===Vo(To.process)?"NODE":To.window&&To.document?"BROWSER":"REST",zo="NODE"===_o,Go=r,Yo=zo,Xo=n,Oo=J,Wo=_o,Ko=r.structuredClone,Jo=!!Ko&&!Xo(function(){if("DENO"===Wo&&Oo>92||"NODE"===Wo&&Oo>94||"BROWSER"===Wo&&Oo>97)return!1;var t=new ArrayBuffer(8),e=Ko(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}),Po=r,Zo=function(t){if(Yo){try{return Go.process.getBuiltinModule(t)}catch(t){}try{return Function('return require("'+t+'")')()}catch(t){}}},jo=Jo,qo=Po.structuredClone,tc=Po.ArrayBuffer,ec=Po.MessageChannel,rc=!1;if(jo)rc=function(t){qo(t,{transfer:[t]})};else if(tc)try{ec||(So=Zo("worker_threads"))&&(ec=So.MessageChannel),ec&&(Ro=new ec,Lo=new tc(2),No=function(t){Ro.port1.postMessage(null,[t])},2===Lo.byteLength&&(No(Lo),0===Lo.byteLength&&(rc=No)))}catch(t){}var ic=rc,nc=r,ac=u,sc=Pn,oc=Js,cc=ko,lc=Qo,uc=ic,dc=Jo,hc=nc.structuredClone,gc=nc.ArrayBuffer,pc=nc.DataView,mc=Math.max,fc=Math.min,bc=gc.prototype,yc=pc.prototype,vc=ac(bc.slice),Bc=sc(bc,"resizable","get"),Qc=sc(bc,"maxByteLength","get"),Uc=ac(yc.getInt8),Fc=ac(yc.setInt8),Ic=(dc||uc)&&function(t,e,r){var i,n=lc(t),a=void 0===e?n:oc(e),s=!Bc||!Bc(t);if(cc(t),dc&&(t=hc(t,{transfer:[t]}),n===a&&(r||s)))return t;if(n>=a&&(!r||s))i=vc(t,0,a);else{var o=r&&!s&&Qc?{maxByteLength:mc(a,Qc(t))}:void 0;i=new gc(a,o);for(var c=new pc(t),l=new pc(i),u=fc(a,n),d=0;d<u;d++)Fc(l,d,Uc(c,d))}return dc||uc(t),i},Ac=Ic;Ac&&vn({target:"ArrayBuffer",proto:!0},{transfer:function(){return Ac(this,arguments.length?arguments[0]:void 0,!0)}});var Cc=Ic;Cc&&vn({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return Cc(this,arguments.length?arguments[0]:void 0,!1)}});var xc=Mt,Ec=TypeError,wc=function(t,e){if(xc(e,t))return t;throw new Ec("Incorrect invocation")},Sc=fi,Rc=function(t,e,r){for(var i in e)Sc(t,i,e[i],r);return t},Lc=De,Nc=u,Mc=function(t){if("Function"===Lc(t))return Nc(t)},Dc=Xt,kc=a,Tc=Mc(Mc.bind),Hc=function(t,e){return Dc(t),void 0===e?t:kc?Tc(t,e):function(){return t.apply(e,arguments)}},Vc=Nt,$c=St,_c=u,zc=Hc,Gc=xt,Yc=Xt,Xc=d,Oc=Kt,Wc=lt,Kc=Wc("asyncDispose"),Jc=Wc("dispose"),Pc=_c([].push),Zc=function(t,e,r){return arguments.length<3&&!Xc(t)&&(r=Yc(function(t,e){if("async-dispose"===e){var r=Oc(t,Kc);return void 0!==r||void 0===(r=Oc(t,Jc))?r:function(){var t=this;return new(Vc("Promise"))(function(e){$c(r,t),e(void 0)})}}return Oc(t,Jc)}(Gc(t),e))),void 0===r?function(){}:zc(r,t)},jc=function(t,e,r,i){var n;if(arguments.length<4){if(Xc(e)&&"sync-dispose"===r)return;n=Zc(e,r)}else n=Zc(void 0,r,i);Pc(t.stack,n)},qc=vn,tl=ht,el=Xt,rl=wc,il=fi,nl=Rc,al=po,sl=lt,ol=Or,cl=jc,ll=Nt("SuppressedError"),ul=ReferenceError,dl=sl("dispose"),hl=sl("toStringTag"),gl="DisposableStack",pl=ol.set,ml=ol.getterFor(gl),fl="sync-dispose",bl="disposed",yl=function(t){var e=ml(t);if(e.state===bl)throw new ul(gl+" already disposed");return e},vl=function(){pl(rl(this,Bl),{type:gl,state:"pending",stack:[]}),tl||(this.disposed=!1)},Bl=vl.prototype;nl(Bl,{dispose:function(){var t=ml(this);if(t.state!==bl){t.state=bl,tl||(this.disposed=!0);for(var e,r=t.stack,i=r.length,n=!1;i;){var a=r[--i];r[i]=null;try{a()}catch(t){n?e=new ll(t,e):(n=!0,e=t)}}if(t.stack=null,n)throw e}},use:function(t){return cl(yl(this),t,fl),t},adopt:function(t,e){var r=yl(this);return el(e),cl(r,void 0,fl,function(){e(t)}),t},defer:function(t){var e=yl(this);el(t),cl(e,void 0,fl,t)},move:function(){var t=yl(this),e=new vl;return ml(e).stack=t.stack,t.stack=[],t.state=bl,tl||(this.disposed=!0),e}}),tl&&al(Bl,"disposed",{configurable:!0,get:function(){return ml(this).state===bl}}),il(Bl,dl,Bl.dispose,{name:"dispose"}),il(Bl,hl,gl,{nonWritable:!0}),qc({global:!0,constructor:!0},{DisposableStack:vl});var Ql,Ul,Fl,Il=n,Al=pt,Cl=ft,xl=Wn,El=fi,wl=lt("iterator");[].keys&&"next"in(Fl=[].keys())&&(Ul=xl(xl(Fl)))!==Object.prototype&&(Ql=Ul);var Sl=!Cl(Ql)||Il(function(){var t={};return Ql[wl].call(t)!==t});Sl&&(Ql={}),Al(Ql[wl])||El(Ql,wl,function(){return this});var Rl={IteratorPrototype:Ql},Ll=vn,Nl=r,Ml=wc,Dl=xt,kl=pt,Tl=Wn,Hl=po,Vl=Rs,$l=n,_l=B,zl=Rl.IteratorPrototype,Gl=ht,Yl="constructor",Xl="Iterator",Ol=lt("toStringTag"),Wl=TypeError,Kl=Nl[Xl],Jl=!kl(Kl)||Kl.prototype!==zl||!$l(function(){Kl({})}),Pl=function(){if(Ml(this,zl),Tl(this)===zl)throw new Wl("Abstract class Iterator not directly constructable")},Zl=function(t,e){Gl?Hl(zl,t,{configurable:!0,get:function(){return e},set:function(e){if(Dl(this),this===zl)throw new Wl("You can't redefine this property");_l(this,t)?this[t]=e:Vl(this,t,e)}}):zl[t]=e};_l(zl,Ol)||Zl(Ol,Xl),!Jl&&_l(zl,Yl)&&zl[Yl]!==Object||Zl(Yl,Pl),Pl.prototype=zl,Ll({global:!0,constructor:!0,forced:Jl},{Iterator:Pl});var jl={},ql=xn,tu=Kt,eu=d,ru=jl,iu=lt("iterator"),nu=function(t){if(!eu(t))return tu(t,iu)||tu(t,"@@iterator")||ru[ql(t)]},au=function(t,e){return{value:t,done:e}},su=St,ou=xt,cu=Kt,lu=function(t,e,r){var i,n;ou(t);try{if(!(i=cu(t,"return"))){if("throw"===e)throw r;return r}i=su(i,t)}catch(t){n=!0,i=t}if("throw"===e)throw r;if(n)throw i;return ou(i),r},uu=lu,du=St,hu=Ra,gu=hr,pu=Rc,mu=Or,fu=Kt,bu=Rl.IteratorPrototype,yu=au,vu=lu,Bu=function(t,e,r){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{r=uu(t[i].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r},Qu=lt("toStringTag"),Uu="IteratorHelper",Fu="WrapForValidIterator",Iu="normal",Au="throw",Cu=mu.set,xu=function(t){var e=mu.getterFor(t?Fu:Uu);return pu(hu(bu),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return yu(void 0,!0);try{var i=r.nextHandler();return r.returnHandlerResult?i:yu(i,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),i=r.iterator,n=r.done;if(r.done=!0,t){var a=fu(i,"return");return a?du(a,i):yu(void 0,!0)}if(n)return yu(void 0,!0);if(r.inner)try{vu(r.inner.iterator,Iu)}catch(t){return vu(i,Au,t)}if(r.openIters)try{Bu(r.openIters,Iu)}catch(t){if(i)return vu(i,Au,t);throw t}return i&&vu(i,Iu),yu(void 0,!0)}})},Eu=xu(!0),wu=xu(!1);gu(wu,Qu,"Iterator Helper");var Su=function(t,e,r){var i=function(i,n){n?(n.iterator=i.iterator,n.next=i.next):n=i,n.type=e?Fu:Uu,n.returnHandlerResult=!!r,n.nextHandler=t,n.counter=0,n.done=!1,Cu(this,n)};return i.prototype=e?Eu:wu,i},Ru=vn,Lu=St,Nu=Xt,Mu=xt,Du=nu,ku=Array,Tu=Su(function(){for(;;){var t=this.iterator;if(!t){var e=this.nextIterableIndex++,r=this.iterables;if(e>=r.length)return void(this.done=!0);var i=r[e];this.iterables[e]=null,t=this.iterator=Mu(Lu(i.method,i.iterable)),this.next=t.next}var n=Mu(Lu(this.next,t));if(!n.done)return n.value;this.iterator=null,this.next=null}});Ru({target:"Iterator",stat:!0,forced:false},{concat:function(){for(var t=arguments.length,e=ku(t),r=0;r<t;r++){var i=Mu(arguments[r]);e[r]={iterable:i,method:Nu(Du(i))}}return new Tu({iterables:e,nextIterableIndex:0,iterator:null,next:null})}});var Hu=St,Vu=fi,$u=Kt,_u=B,zu=Rl.IteratorPrototype,Gu=lt("dispose");_u(zu,Gu)||Vu(zu,Gu,function(){var t=$u(this,"return");t&&Hu(t,this)});var Yu=function(t){return{iterator:t,next:t.next,done:!1}},Xu=RangeError,Ou=function(t){if(t==t)return t;throw new Xu("NaN is not allowed")},Wu=Ui,Ku=RangeError,Ju=function(t){var e=Wu(t);if(e<0)throw new Ku("The argument can't be less than 0");return e},Pu=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}},Zu=r,ju=function(t,e){var r=Zu.Iterator,i=r&&r.prototype,n=i&&i[t],a=!1;if(n)try{n.call({next:function(){return{done:!0}},return:function(){a=!0}},-1)}catch(t){t instanceof e||(a=!1)}if(!a)return n},qu=vn,td=St,ed=xt,rd=Yu,id=Ou,nd=Ju,ad=lu,sd=Su,od=ju,cd=!Pu("drop",0),ld=!cd&&od("drop",RangeError),ud=cd||ld,dd=sd(function(){for(var t,e=this.iterator,r=this.next;this.remaining;)if(this.remaining--,t=ed(td(r,e)),this.done=!!t.done)return;if(t=ed(td(r,e)),!(this.done=!!t.done))return t.value});qu({target:"Iterator",proto:!0,real:!0,forced:ud},{drop:function(t){var e;ed(this);try{e=nd(id(+t))}catch(t){ad(this,"throw",t)}return ld?td(ld,this,e):new dd(rd(this),{remaining:e})}});var hd=jl,gd=lt("iterator"),pd=Array.prototype,md=St,fd=Xt,bd=xt,yd=_t,vd=nu,Bd=TypeError,Qd=function(t,e){var r=arguments.length<2?vd(t):e;if(fd(r))return bd(md(r,t));throw new Bd(yd(t)+" is not iterable")},Ud=Hc,Fd=St,Id=xt,Ad=_t,Cd=function(t){return void 0!==t&&(hd.Array===t||pd[gd]===t)},xd=Si,Ed=Mt,wd=Qd,Sd=nu,Rd=lu,Ld=TypeError,Nd=function(t,e){this.stopped=t,this.result=e},Md=Nd.prototype,Dd=function(t,e,r){var i,n,a,s,o,c,l,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),g=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),m=Ud(e,u),f=function(t){var e=i;return i=void 0,e&&Rd(e,"normal"),new Nd(!0,t)},b=function(t){return d?(Id(t),p?m(t[0],t[1],f):m(t[0],t[1])):p?m(t,f):m(t)};if(h)i=t.iterator;else if(g)i=t;else{if(!(n=Sd(t)))throw new Ld(Ad(t)+" is not iterable");if(Cd(n)){for(a=0,s=xd(t);s>a;a++)if((o=b(t[a]))&&Ed(Md,o))return o;return new Nd(!1)}i=wd(t,n)}for(c=h?t.next:i.next;!(l=Fd(c,i)).done;){var y=l.value;try{o=b(y)}catch(t){if(!i)throw t;Rd(i,"throw",t)}if("object"==typeof o&&o&&Ed(Md,o))return o}return new Nd(!1)},kd=vn,Td=St,Hd=Dd,Vd=Xt,$d=xt,_d=Yu,zd=lu,Gd=ju("every",TypeError);kd({target:"Iterator",proto:!0,real:!0,forced:Gd},{every:function(t){$d(this);try{Vd(t)}catch(t){zd(this,"throw",t)}if(Gd)return Td(Gd,this,t);var e=_d(this),r=0;return!Hd(e,function(e,i){if(!t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Yd=xt,Xd=lu,Od=function(t,e,r,i){try{return i?e(Yd(r)[0],r[1]):e(r)}catch(e){Xd(t,"throw",e)}},Wd=vn,Kd=St,Jd=Xt,Pd=xt,Zd=Yu,jd=Su,qd=Od,th=lu,eh=ju,rh=!Pu("filter",function(){}),ih=!rh&&eh("filter",TypeError),nh=rh||ih,ah=jd(function(){for(var t,e,r=this.iterator,i=this.predicate,n=this.next;;){if(t=Pd(Kd(n,r)),this.done=!!t.done)return;if(e=t.value,qd(r,i,[e,this.counter++],!0))return e}});Wd({target:"Iterator",proto:!0,real:!0,forced:nh},{filter:function(t){Pd(this);try{Jd(t)}catch(t){th(this,"throw",t)}return ih?Kd(ih,this,t):new ah(Zd(this),{predicate:t})}});var sh=vn,oh=St,ch=Dd,lh=Xt,uh=xt,dh=Yu,hh=lu,gh=ju("find",TypeError);sh({target:"Iterator",proto:!0,real:!0,forced:gh},{find:function(t){uh(this);try{lh(t)}catch(t){hh(this,"throw",t)}if(gh)return oh(gh,this,t);var e=dh(this),r=0;return ch(e,function(e,i){if(t(e,r++))return i(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}});var ph=St,mh=xt,fh=Yu,bh=nu,yh=function(t,e){e&&"string"==typeof t||mh(t);var r=bh(t);return fh(mh(void 0!==r?ph(r,t):t))},vh=vn,Bh=St,Qh=Xt,Uh=xt,Fh=Yu,Ih=yh,Ah=Su,Ch=lu,xh=ju;var Eh=!Pu("flatMap",function(){}),wh=!Eh&&xh("flatMap",TypeError),Sh=Eh||wh||function(){try{var t=Iterator.prototype.flatMap.call(new Map([[4,5]]).entries(),function(t){return t});t.next(),t.return()}catch(t){return!0}}(),Rh=Ah(function(){for(var t,e,r=this.iterator,i=this.mapper;;){if(e=this.inner)try{if(!(t=Uh(Bh(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){Ch(r,"throw",t)}if(t=Uh(Bh(this.next,r)),this.done=!!t.done)return;try{this.inner=Ih(i(t.value,this.counter++),!1)}catch(t){Ch(r,"throw",t)}}});vh({target:"Iterator",proto:!0,real:!0,forced:Sh},{flatMap:function(t){Uh(this);try{Qh(t)}catch(t){Ch(this,"throw",t)}return wh?Bh(wh,this,t):new Rh(Fh(this),{mapper:t,inner:null})}});var Lh=vn,Nh=St,Mh=Dd,Dh=Xt,kh=xt,Th=Yu,Hh=lu,Vh=ju("forEach",TypeError);Lh({target:"Iterator",proto:!0,real:!0,forced:Vh},{forEach:function(t){kh(this);try{Dh(t)}catch(t){Hh(this,"throw",t)}if(Vh)return Nh(Vh,this,t);var e=Th(this),r=0;Mh(e,function(e){t(e,r++)},{IS_RECORD:!0})}});var $h=vn,_h=St,zh=b,Gh=Mt,Yh=Rl.IteratorPrototype,Xh=Su,Oh=yh,Wh=function(){try{Iterator.from({return:null}).return()}catch(t){return!0}}(),Kh=Xh(function(){return _h(this.next,this.iterator)},!0);$h({target:"Iterator",stat:!0,forced:Wh},{from:function(t){var e=Oh("string"==typeof t?zh(t):t,!0);return Gh(Yh,e.iterator)?e.iterator:new Kh(e)}});var Jh=vn,Ph=St,Zh=Xt,jh=xt,qh=Yu,tg=Su,eg=Od,rg=lu,ig=ju,ng=!Pu("map",function(){}),ag=!ng&&ig("map",TypeError),sg=ng||ag,og=tg(function(){var t=this.iterator,e=jh(Ph(this.next,t));if(!(this.done=!!e.done))return eg(t,this.mapper,[e.value,this.counter++],!0)});Jh({target:"Iterator",proto:!0,real:!0,forced:sg},{map:function(t){jh(this);try{Zh(t)}catch(t){rg(this,"throw",t)}return ag?Ph(ag,this,t):new og(qh(this),{mapper:t})}});var cg=a,lg=Function.prototype,ug=lg.apply,dg=lg.call,hg="object"==typeof Reflect&&Reflect.apply||(cg?dg.bind(ug):function(){return dg.apply(ug,arguments)}),gg=vn,pg=Dd,mg=Xt,fg=xt,bg=Yu,yg=lu,vg=ju,Bg=hg,Qg=TypeError,Ug=n(function(){[].keys().reduce(function(){},void 0)}),Fg=!Ug&&vg("reduce",Qg);gg({target:"Iterator",proto:!0,real:!0,forced:Ug||Fg},{reduce:function(t){fg(this);try{mg(t)}catch(t){yg(this,"throw",t)}var e=arguments.length<2,r=e?void 0:arguments[1];if(Fg)return Bg(Fg,this,e?[t]:[t,r]);var i=bg(this),n=0;if(pg(i,function(i){e?(e=!1,r=i):r=t(r,i,n),n++},{IS_RECORD:!0}),e)throw new Qg("Reduce of empty iterator with no initial value");return r}});var Ig=vn,Ag=St,Cg=Dd,xg=Xt,Eg=xt,wg=Yu,Sg=lu,Rg=ju("some",TypeError);Ig({target:"Iterator",proto:!0,real:!0,forced:Rg},{some:function(t){Eg(this);try{xg(t)}catch(t){Sg(this,"throw",t)}if(Rg)return Ag(Rg,this,t);var e=wg(this),r=0;return Cg(e,function(e,i){if(t(e,r++))return i()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}});var Lg=vn,Ng=St,Mg=xt,Dg=Yu,kg=Ou,Tg=Ju,Hg=Su,Vg=lu,$g=ju,_g=!Pu("take",1),zg=!_g&&$g("take",RangeError),Gg=_g||zg,Yg=Hg(function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,Vg(t,"normal",void 0);var e=Mg(Ng(this.next,t));return(this.done=!!e.done)?void 0:e.value});Lg({target:"Iterator",proto:!0,real:!0,forced:Gg},{take:function(t){var e;Mg(this);try{e=Tg(kg(+t))}catch(t){Vg(this,"throw",t)}return zg?Ng(zg,this,e):new Yg(Dg(this),{remaining:e})}});var Xg=xt,Og=Rs,Wg=Dd,Kg=Yu;vn({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return Wg(Kg(Xg(this)),function(r){Og(t,e++,r)},{IS_RECORD:!0}),t}});var Jg=!n(function(){var t="9007199254740993",e=JSON.rawJSON(t);return!JSON.isRawJSON(e)||JSON.stringify(e)!==t}),Pg=ft,Zg=Or.get,jg=function(t){if(!Pg(t))return!1;var e=Zg(t);return!!e&&"RawJSON"===e.type};vn({target:"JSON",stat:!0,forced:!Jg},{isRawJSON:jg});var qg=u,tp=B,ep=SyntaxError,rp=parseInt,ip=String.fromCharCode,np=qg("".charAt),ap=qg("".slice),sp=qg(/./.exec),op={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},cp=/^[\da-f]{4}$/i,lp=/^[\u0000-\u001F]$/,up=function(t,e){for(var r=!0,i="";e<t.length;){var n=np(t,e);if("\\"===n){var a=ap(t,e,e+2);if(tp(op,a))i+=op[a],e+=2;else{if("\\u"!==a)throw new ep('Unknown escape sequence: "'+a+'"');var s=ap(t,e+=2,e+4);if(!sp(cp,s))throw new ep("Bad Unicode escape at: "+e);i+=ip(rp(s,16)),e+=4}}else{if('"'===n){r=!1,e++;break}if(sp(lp,n))throw new ep("Bad control character in string literal at: "+e);i+=n,e++}}if(r)throw new ep("Unterminated string at: "+e);return{value:i,end:e}},dp=vn,hp=ht,gp=r,pp=Nt,mp=u,fp=St,bp=pt,yp=ft,vp=fs,Bp=B,Qp=Oa,Up=Si,Fp=Rs,Ip=n,Ap=up,Cp=q,xp=gp.JSON,Ep=gp.Number,wp=gp.SyntaxError,Sp=xp&&xp.parse,Rp=pp("Object","keys"),Lp=Object.getOwnPropertyDescriptor,Np=mp("".charAt),Mp=mp("".slice),Dp=mp(/./.exec),kp=mp([].push),Tp=/^\d$/,Hp=/^[1-9]$/,Vp=/^[\d-]$/,$p=/^[\t\n\r ]$/,_p=function(t,e,r,i){var n,a,s,o,c,l=t[e],u=i&&l===i.value,d=u&&"string"==typeof i.source?{source:i.source}:{};if(yp(l)){var h=vp(l),g=u?i.nodes:h?[]:{};if(h)for(n=g.length,s=Up(l),o=0;o<s;o++)zp(l,o,_p(l,""+o,r,o<n?g[o]:void 0));else for(a=Rp(l),s=Up(a),o=0;o<s;o++)c=a[o],zp(l,c,_p(l,c,r,Bp(g,c)?g[c]:void 0))}return fp(r,t,e,l,d)},zp=function(t,e,r){if(hp){var i=Lp(t,e);if(i&&!i.configurable)return}void 0===r?delete t[e]:Fp(t,e,r)},Gp=function(t,e,r,i){this.value=t,this.end=e,this.source=r,this.nodes=i},Yp=function(t,e){this.source=t,this.index=e};Yp.prototype={fork:function(t){return new Yp(this.source,t)},parse:function(){var t=this.source,e=this.skip($p,this.index),r=this.fork(e),i=Np(t,e);if(Dp(Vp,i))return r.number();switch(i){case"{":return r.object();case"[":return r.array();case'"':return r.string();case"t":return r.keyword(!0);case"f":return r.keyword(!1);case"n":return r.keyword(null)}throw new wp('Unexpected character: "'+i+'" at: '+e)},node:function(t,e,r,i,n){return new Gp(e,i,t?null:Mp(this.source,r,i),n)},object:function(){for(var t=this.source,e=this.index+1,r=!1,i={},n={},a=!1;e<t.length;){if(e=this.until(['"',"}"],e),"}"===Np(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).string(),o=s.value;e=s.end,e=this.until([":"],e)+1,e=this.skip($p,e),s=this.fork(e).parse(),Fp(n,o,s),Fp(i,o,s.value),e=this.until([",","}"],s.end);var c=Np(t,e);if(","===c)r=!0,e++;else if("}"===c){e++,a=!0;break}}if(!a)throw new wp("Unterminated object at: "+e);return this.node(1,i,this.index,e,n)},array:function(){for(var t=this.source,e=this.index+1,r=!1,i=[],n=[],a=!1;e<t.length;){if(e=this.skip($p,e),"]"===Np(t,e)&&!r){e++,a=!0;break}var s=this.fork(e).parse();if(kp(n,s),kp(i,s.value),e=this.until([",","]"],s.end),","===Np(t,e))r=!0,e++;else if("]"===Np(t,e)){e++,a=!0;break}}if(!a)throw new wp("Unterminated array at: "+e);return this.node(1,i,this.index,e,n)},string:function(){var t=this.index,e=Ap(this.source,this.index+1);return this.node(0,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,r=e;if("-"===Np(t,r)&&r++,"0"===Np(t,r))r++;else{if(!Dp(Hp,Np(t,r)))throw new wp("Failed to parse number at: "+r);r=this.skip(Tp,r+1)}if("."===Np(t,r)){var i=r+1;if(i===(r=this.skip(Tp,i)))throw new wp("Failed to parse number's fraction at: "+r)}if(("e"===Np(t,r)||"E"===Np(t,r))&&(r++,"+"!==Np(t,r)&&"-"!==Np(t,r)||r++,r===(r=this.skip(Tp,r))))throw new wp("Failed to parse number's exponent value at: "+r);return this.node(0,Ep(Mp(t,e,r)),e,r)},keyword:function(t){var e=""+t,r=this.index,i=r+e.length;if(Mp(this.source,r,i)!==e)throw new wp("Failed to parse value at: "+r);return this.node(0,t,r,i)},skip:function(t,e){for(var r=this.source;e<r.length&&Dp(t,Np(r,e));e++);return e},until:function(t,e){e=this.skip($p,e);for(var r=Np(this.source,e),i=0;i<t.length;i++)if(t[i]===r)return e;throw new wp('Unexpected character: "'+r+'" at: '+e)}};var Xp=Ip(function(){var t,e="9007199254740993";return Sp(e,function(e,r,i){t=i.source}),t!==e}),Op=Cp&&!Ip(function(){return 1/Sp("-0 \t")!=-1/0});dp({target:"JSON",stat:!0,forced:Xp},{parse:function(t,e){return Op&&!bp(e)?Sp(t):function(t,e){t=Qp(t);var r=new Yp(t,0),i=r.parse(),n=i.value,a=r.skip($p,i.end);if(a<t.length)throw new wp('Unexpected extra character: "'+Np(t,a)+'" after the parsed data at: '+a);return bp(e)?_p({"":n},"",e,i):n}(t,e)}});var Wp=vn,Kp=!n(function(){return Object.isExtensible(Object.preventExtensions({}))}),Jp=Jg,Pp=Nt,Zp=u,jp=Oa,qp=Rs,tm=Or.set,em=SyntaxError,rm=Pp("JSON","parse"),im=Pp("Object","create"),nm=Pp("Object","freeze"),am=Zp("".charAt),sm="Unacceptable as raw JSON",om=function(t){return" "===t||"\t"===t||"\n"===t||"\r"===t};Wp({target:"JSON",stat:!0,forced:!Jp},{rawJSON:function(t){var e=jp(t);if(""===e||om(am(e,0))||om(am(e,e.length-1)))throw new em(sm);var r=rm(e);if("object"==typeof r&&null!==r)throw new em(sm);var i=im(null);return tm(i,{type:"RawJSON"}),qp(i,"rawJSON",e),Kp?nm(i):i}});var cm=u([].slice),lm=vn,um=Nt,dm=hg,hm=St,gm=u,pm=n,mm=fs,fm=pt,bm=jg,ym=Vt,vm=De,Bm=Oa,Qm=cm,Um=up,Fm=V,Im=q,Am=Jg,Cm=String,xm=um("JSON","stringify"),Em=gm(/./.exec),wm=gm("".charAt),Sm=gm("".charCodeAt),Rm=gm("".replace),Lm=gm("".slice),Nm=gm([].push),Mm=gm(1.1.toString),Dm=/[\uD800-\uDFFF]/g,km=/^[\uD800-\uDBFF]$/,Tm=/^[\uDC00-\uDFFF]$/,Hm=Fm(),Vm=Hm.length,$m=!Im||pm(function(){var t=um("Symbol")("stringify detection");return"[null]"!==xm([t])||"{}"!==xm({a:t})||"{}"!==xm(Object(t))}),_m=pm(function(){return'"\\udf06\\ud834"'!==xm("\udf06\ud834")||'"\\udead"'!==xm("\udead")}),zm=$m?function(t,e){var r=Qm(arguments),i=Ym(e);if(fm(i)||void 0!==t&&!ym(t))return r[1]=function(t,e){if(fm(i)&&(e=hm(i,this,Cm(t),e)),!ym(e))return e},dm(xm,null,r)}:xm,Gm=function(t,e,r){var i=wm(r,e-1),n=wm(r,e+1);return Em(km,t)&&!Em(Tm,n)||Em(Tm,t)&&!Em(km,i)?"\\u"+Mm(Sm(t,0),16):t},Ym=function(t){if(fm(t))return t;if(mm(t)){for(var e=t.length,r=[],i=0;i<e;i++){var n=t[i];"string"==typeof n?Nm(r,n):"number"!=typeof n&&"Number"!==vm(n)&&"String"!==vm(n)||Nm(r,Bm(n))}var a=r.length,s=!0;return function(t,e){if(s)return s=!1,e;if(mm(this))return e;for(var i=0;i<a;i++)if(r[i]===t)return e}}};xm&&lm({target:"JSON",stat:!0,arity:3,forced:$m||_m||!Am},{stringify:function(t,e,r){var i=Ym(e),n=[],a=zm(t,function(t,e){var r=fm(i)?hm(i,this,Cm(t),e):e;return!Am&&bm(r)?Hm+(Nm(n,r.rawJSON)-1):r},r);if("string"!=typeof a)return a;if(_m&&(a=Rm(a,Dm,Gm)),Am)return a;for(var s="",o=a.length,c=0;c<o;c++){var l=wm(a,c);if('"'===l){var u=Um(a,++c).end-1,d=Lm(a,c,u);s+=Lm(d,0,Vm)===Hm?n[Lm(d,Vm)]:'"'+d+'"',c=u}else s+=l}return s}});var Xm=u,Om=Map.prototype,Wm={Map:Map,set:Xm(Om.set),get:Xm(Om.get),has:Xm(Om.has),remove:Xm(Om.delete)},Km=vn,Jm=Xt,Pm=p,Zm=Dd,jm=n,qm=Wm.Map,tf=Wm.has,ef=Wm.get,rf=Wm.set,nf=u([].push);Km({target:"Map",stat:!0,forced:jm(function(){return 1!==qm.groupBy("ab",function(t){return t}).get("a").length})},{groupBy:function(t,e){Pm(t),Jm(e);var r=new qm,i=0;return Zm(t,function(t){var n=e(t,i++);tf(r,n)?nf(ef(r,n),t):rf(r,n,[t])}),r}});var af=Wm.get,sf=Wm.has,of=Wm.set;vn({target:"Map",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return sf(this,t)?af(this,t):(of(this,t,e),e)}});var cf=Xt,lf=Wm.get,uf=Wm.has,df=Wm.set;vn({target:"Map",proto:!0,real:!0,forced:false},{getOrInsertComputed:function(t,e){var r=uf(this,t);if(cf(e),r)return lf(this,t);0===t&&1/t==-1/0&&(t=0);var i=e(t);return df(this,t,i),i}});var hf=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},gf=hf,pf=to,mf=Math.abs,ff=function(t,e,r,i){var n=+t,a=mf(n),s=gf(n);if(a<i)return s*pf(a/i/e)*i*e;var o=(1+e/2220446049250313e-31)*a,c=o-(o-a);return c>r||c!=c?s*(1/0):s*c};vn({target:"Math",stat:!0},{f16round:function(t){return ff(t,.0009765625,65504,6103515625e-14)}});var bf=vn,yf=u,vf=Dd,Bf=RangeError,Qf=TypeError,Uf=1/0,Ff=Math.abs,If=Math.pow,Af=yf([].push),Cf=If(2,1023),xf=If(2,53)-1,Ef=Number.MAX_VALUE,wf=If(2,971),Sf={},Rf={},Lf={},Nf={},Mf={},Df=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};bf({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,i=Nf;switch(vf(t,function(t){if(++r>xf)throw new Bf("Maximum allowed index exceeded");if("number"!=typeof t)throw new Qf("Value is not a number");i!==Sf&&(t!=t?i=Sf:t===Uf?i=i===Rf?Sf:Lf:t===-1/0?i=i===Lf?Sf:Rf:0===t&&1/t!==Uf||i!==Nf&&i!==Mf||(i=Mf,Af(e,t)))}),i){case Sf:return NaN;case Rf:return-1/0;case Lf:return Uf;case Nf:return-0}for(var n,a,s,o,c,l,u=[],d=0,h=0;h<e.length;h++){n=e[h];for(var g=0,p=0;p<u.length;p++){if(a=u[p],Ff(n)<Ff(a)&&(l=n,n=a,a=l),o=(s=Df(n,a)).hi,c=s.lo,Ff(o)===Uf){var m=o===Uf?1:-1;d+=m,Ff(n=n-m*Cf-m*Cf)<Ff(a)&&(l=n,n=a,a=l),o=(s=Df(n,a)).hi,c=s.lo}0!==c&&(u[g++]=c),n=o}u.length=g,0!==n&&Af(u,n)}var f=u.length-1;if(o=0,c=0,0!==d){var b=f>=0?u[f]:0;if(f--,Ff(d)>1||d>0&&b>0||d<0&&b<0)return d>0?Uf:-1/0;if(o=(s=Df(d*Cf,b/2)).hi,c=s.lo,c*=2,Ff(2*o)===Uf)return o>0?o===Cf&&c===-wf/2&&f>=0&&u[f]<0?Ef:Uf:o===-Cf&&c===wf/2&&f>=0&&u[f]>0?-Ef:-1/0;0!==c&&(u[++f]=c,c=0),o*=2}for(;f>=0&&(o=(s=Df(o,u[f--])).hi,0===(c=s.lo)););return f>=0&&(c<0&&u[f]<0||c>0&&u[f]>0)&&(a=2*c)===(n=o+a)-o&&(o=n),o}});var kf=vn,Tf=Rs,Hf=Nt,Vf=u,$f=Xt,_f=p,zf=le,Gf=Dd,Yf=n,Xf=Object.groupBy,Of=Hf("Object","create"),Wf=Vf([].push);kf({target:"Object",stat:!0,forced:!Xf||Yf(function(){return 1!==Xf("ab",function(t){return t}).a.length})},{groupBy:function(t,e){_f(t),$f(e);var r=Of(null),i=0;return Gf(t,function(t){var n=zf(e(t,i++));n in r?Wf(r[n],t):Tf(r,n,[t])}),r}});var Kf={},Jf=Xt,Pf=TypeError,Zf=function(t){var e,r;this.promise=new t(function(t,i){if(void 0!==e||void 0!==r)throw new Pf("Bad Promise constructor");e=t,r=i}),this.resolve=Jf(e),this.reject=Jf(r)};Kf.f=function(t){return new Zf(t)};var jf=vn,qf=hg,tb=cm,eb=Kf,rb=Xt,ib=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},nb=r.Promise,ab=!1;jf({target:"Promise",stat:!0,forced:!nb||!nb.try||ib(function(){nb.try(function(t){ab=8===t},8)}).error||!ab},{try:function(t){var e=arguments.length>1?tb(arguments,1):[],r=eb.f(this),i=ib(function(){return qf(rb(t),void 0,e)});return(i.error?r.reject:r.resolve)(i.value),r.promise}});var sb=Kf;vn({target:"Promise",stat:!0},{withResolvers:function(){var t=sb.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var ob=u,cb=n,lb=pt,ub=xn,db=Ar,hb=function(){},gb=Nt("Reflect","construct"),pb=/^\s*(?:class|function)\b/,mb=ob(pb.exec),fb=!pb.test(hb),bb=function(t){if(!lb(t))return!1;try{return gb(hb,[],t),!0}catch(t){return!1}},yb=function(t){if(!lb(t))return!1;switch(ub(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return fb||!!mb(pb,db(t))}catch(t){return!0}};yb.sham=!0;var vb,Bb,Qb=!gb||cb(function(){var t;return bb(bb.call)||!bb(Object)||!bb(function(){t=!0})||t})?yb:bb,Ub=r,Fb=L,Ib=pt,Ab=Wn,Cb=fi,xb="USE_FUNCTION_CONSTRUCTOR",Eb=lt("asyncIterator"),wb=Ub.AsyncIterator,Sb=Fb.AsyncIteratorPrototype;if(Sb)vb=Sb;else if(Ib(wb))vb=wb.prototype;else if(Fb[xb]||Ub[xb])try{Bb=Ab(Ab(Ab(Function("return async function*(){}()")()))),Ab(Bb)===Object.prototype&&(vb=Bb)}catch(t){}vb||(vb={}),Ib(vb[Eb])||Cb(vb,Eb,function(){return this});var Rb=vb,Lb=St,Nb=xt,Mb=Ra,Db=Kt,kb=Rc,Tb=Or,Hb=lu,Vb=Rb,$b=au,_b=Nt("Promise"),zb="AsyncFromSyncIterator",Gb=Tb.set,Yb=Tb.getterFor(zb),Xb=function(t,e,r,i,n){var a=t.done;_b.resolve(t.value).then(function(t){e($b(t,a))},function(t){if(!a&&n)try{Hb(i,"throw",t)}catch(e){t=e}r(t)})},Ob=function(t){t.type=zb,Gb(this,t)};Ob.prototype=kb(Mb(Vb),{next:function(){var t=Yb(this),e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Nb(e?Lb(t.next,t.iterator,r):Lb(t.next,t.iterator));Xb(a,i,n,t.iterator,!0)})},return:function(){var t=Yb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Db(t,"return");if(void 0===a)return i($b(r,!0));var s=Nb(e?Lb(a,t,r):Lb(a,t));Xb(s,i,n,t)})},throw:function(){var t=Yb(this).iterator,e=arguments.length>0,r=e?arguments[0]:void 0;return new _b(function(i,n){var a=Db(t,"throw");if(void 0===a){try{Hb(t,"normal")}catch(t){return n(t)}return n(new TypeError("The iterator does not provide a throw method"))}var s=Nb(e?Lb(a,t,r):Lb(a,t));Xb(s,i,n,t,!0)})}});var Wb,Kb,Jb,Pb,Zb,jb=Ob,qb=St,ty=jb,ey=xt,ry=Qd,iy=Yu,ny=Kt,ay=lt("asyncIterator"),sy=r,oy=St,cy=xt,ly=Nt,uy=Kt,dy=St,hy=Xt,gy=xt,py=ft,my=Fs,fy=Nt,by=Rs,yy=Qs,vy=Yu,By=function(t,e,r,i){try{var n=uy(t,"return");if(n)return ly("Promise").resolve(oy(n,t)).then(function(t){try{e!==i&&cy(t)}catch(t){return void i(t)}e(r)},function(t){e===i?e(r):i(t)})}catch(t){return i(e===i?r:t)}e(r)},Qy={toArray:(Wb=0,Kb=0===Wb,Jb=1===Wb,Pb=2===Wb,Zb=3===Wb,function(t,e,r){gy(t);var i=void 0!==e;!i&&Kb||hy(e);var n=vy(t),a=fy("Promise"),s=n.iterator,o=n.next,c=0;return new a(function(t,n){var l=function(t){By(s,n,t,n)},u=function(){try{try{my(c)}catch(t){return l(t)}a.resolve(gy(dy(o,s))).then(function(o){try{if(gy(o).done)Kb?(yy(r,c),t(r)):t(!Zb&&(Pb||void 0));else{var d=o.value;try{if(i){var h=c++,g=e(d,h),p=function(e){if(Jb)u();else if(Pb)e?u():By(s,t,!1,n);else if(Kb)try{by(r,h,e),u()}catch(t){l(t)}else e?By(s,t,Zb||d,n):u()};py(g)?a.resolve(g).then(p,l):p(g)}else by(r,c++,d),u()}catch(t){l(t)}}}catch(t){n(t)}},n)}catch(t){n(t)}};u()})})},Uy=Hc,Fy=u,Iy=Qb,Ay=function(t,e){var r=arguments.length<2?ny(t,ay):e;return r?ey(qb(r,t)):new ty(iy(ry(t)))},Cy=Qd,xy=Yu,Ey=nu,wy=Kt,Sy=Nt,Ry=function(t,e){var r=sy[t],i=r&&r.prototype;return i&&i[e]},Ly=jb,Ny=Qy.toArray,My=lt("asyncIterator"),Dy=Fy(Ry("Array","values")),ky=Fy(Dy([]).next),Ty=function(){return new Hy(this)},Hy=function(t){this.iterator=Dy(t)};Hy.prototype.next=function(){return ky(this.iterator)};var Vy=vn,$y=function(t){var e=this,r=arguments.length,i=r>1?arguments[1]:void 0,n=r>2?arguments[2]:void 0;return new(Sy("Promise"))(function(r){void 0!==i&&(i=Uy(i,n));var a=wy(t,My),s=a?void 0:Ey(t)||Ty,o=Iy(e)?new e:[],c=a?Ay(t,a):new Ly(xy(Cy(t,s)));r(Ny(c,i,o))})},_y=n,zy=Array.fromAsync,Gy=!zy||_y(function(){var t=0;return zy.call(function(){return t++,[]},{length:0}),1!==t});Vy({target:"Array",stat:!0,forced:Gy},{fromAsync:$y});var Yy=vn,Xy=ht,Oy=Nt,Wy=Xt,Ky=wc,Jy=fi,Py=Rc,Zy=po,jy=lt,qy=Or,tv=jc,ev=J,rv=Oy("Promise"),iv=Oy("SuppressedError"),nv=ReferenceError,av=jy("asyncDispose"),sv=jy("toStringTag"),ov="AsyncDisposableStack",cv=qy.set,lv=qy.getterFor(ov),uv="async-dispose",dv="disposed",hv=function(t){var e=lv(t);if(e.state===dv)throw new nv(ov+" already disposed");return e},gv=function(){cv(Ky(this,pv),{type:ov,state:"pending",stack:[]}),Xy||(this.disposed=!1)},pv=gv.prototype;Py(pv,{disposeAsync:function(){var t=this;return new rv(function(e,r){var i=lv(t);if(i.state===dv)return e(void 0);i.state=dv,Xy||(t.disposed=!0);var n,a=i.stack,s=a.length,o=!1,c=function(t){o?n=new iv(t,n):(o=!0,n=t),l()},l=function(){if(s){var t=a[--s];a[s]=null;try{rv.resolve(t()).then(l,c)}catch(t){c(t)}}else i.stack=null,o?r(n):e(void 0)};l()})},use:function(t){return tv(hv(this),t,uv),t},adopt:function(t,e){var r=hv(this);return Wy(e),tv(r,void 0,uv,function(){return e(t)}),t},defer:function(t){var e=hv(this);Wy(t),tv(e,void 0,uv,t)},move:function(){var t=hv(this),e=new gv;return lv(e).stack=t.stack,t.stack=[],t.state=dv,Xy||(this.disposed=!0),e}}),Xy&&Zy(pv,"disposed",{configurable:!0,get:function(){return lv(this).state===dv}}),Jy(pv,av,pv.disposeAsync,{name:"disposeAsync"}),Jy(pv,sv,ov,{nonWritable:!0}),Yy({global:!0,constructor:!0,forced:ev&&ev<136},{AsyncDisposableStack:gv});var mv=St,fv=fi,bv=Nt,yv=Kt,vv=B,Bv=Rb,Qv=lt("asyncDispose"),Uv=bv("Promise");vv(Bv,Qv)||fv(Bv,Qv,function(){var t=this;return new Uv(function(e,r){var i=yv(t,"return");i?Uv.resolve(mv(i,t)).then(function(){e(void 0)},r):e(void 0)})});var Fv,Iv=TypeError,Av=function(t){if("string"==typeof t)return t;throw new Iv("Argument is not a string")},Cv=Ui,xv=Oa,Ev=p,wv=RangeError,Sv=Math.floor,Rv=u,Lv=Ei,Nv=Oa,Mv=function(t){var e=xv(Ev(this)),r="",i=Cv(t);if(i<0||i===1/0)throw new wv("Wrong number of repetitions");for(;i>0;(i=Sv(i/2))&&(e+=e))i%2&&(r+=e);return r},Dv=p,kv=Rv(Mv),Tv=Rv("".slice),Hv=Math.ceil,Vv={start:(Fv=!1,function(t,e,r){var i=Nv(Dv(t)),n=Lv(e),a=i.length;if(n<=a)return i;var s,o,c=void 0===r?" ":Nv(r);return""===c?i:((o=kv(c,Hv((s=n-a)/c.length))).length>s&&(o=Tv(o,0,s)),Fv?i+o:o+i)})},$v=vn,_v=u,zv=Av,Gv=B,Yv=Vv.start,Xv=Array,Ov=RegExp.escape,Wv=_v("".charAt),Kv=_v("".charCodeAt),Jv=_v(1.1.toString),Pv=_v([].join),Zv=/^[0-9a-z]/i,jv=/^[$()*+./?[\\\]^{|}]/,qv=RegExp("^[!\"#%&',\\-:;<=>@`~\t\n\v\f\r                　\u2028\u2029\ufeff]"),tB=_v(Zv.exec),eB={"\t":"t","\n":"n","\v":"v","\f":"f","\r":"r"},rB=function(t){var e=Jv(Kv(t,0),16);return e.length<3?"\\x"+Yv(e,2,"0"):"\\u"+Yv(e,4,"0")};$v({target:"RegExp",stat:!0,forced:!Ov||"\\x61b"!==Ov("ab")},{escape:function(t){zv(t);for(var e=t.length,r=Xv(e),i=0;i<e;i++){var n=Wv(t,i);if(0===i&&tB(Zv,n))r[i]=rB(n);else if(Gv(eB,n))r[i]="\\"+eB[n];else if(tB(jv,n))r[i]="\\"+n;else if(tB(qv,n))r[i]=rB(n);else{var a=Kv(n,0);55296!=(63488&a)?r[i]=n:a>=56320||i+1>=e||56320!=(64512&Kv(t,i+1))?r[i]=rB(n):(r[i]=n,r[++i]=Wv(t,i))}}return Pv(r,"")}});var iB=u,nB=Set.prototype,aB={Set:Set,add:iB(nB.add),has:iB(nB.has),remove:iB(nB.delete),proto:nB},sB=aB.has,oB=function(t){return sB(t),t},cB=St,lB=function(t,e,r){for(var i,n,a=r?t:t.iterator,s=t.next;!(i=cB(s,a)).done;)if(void 0!==(n=e(i.value)))return n},uB=u,dB=lB,hB=aB.Set,gB=aB.proto,pB=uB(gB.forEach),mB=uB(gB.keys),fB=mB(new hB).next,bB=function(t,e,r){return r?dB({iterator:mB(t),next:fB},e):pB(t,e)},yB=bB,vB=aB.Set,BB=aB.add,QB=function(t){var e=new vB;return yB(t,function(t){BB(e,t)}),e},UB=Pn(aB.proto,"size","get")||function(t){return t.size},FB=Xt,IB=xt,AB=St,CB=Ui,xB=Yu,EB="Invalid size",wB=RangeError,SB=TypeError,RB=Math.max,LB=function(t,e){this.set=t,this.size=RB(e,0),this.has=FB(t.has),this.keys=FB(t.keys)};LB.prototype={getIterator:function(){return xB(IB(AB(this.keys,this.set)))},includes:function(t){return AB(this.has,this.set,t)}};var NB=function(t){IB(t);var e=+t.size;if(e!=e)throw new SB(EB);var r=CB(e);if(r<0)throw new wB(EB);return new LB(t,r)},MB=oB,DB=QB,kB=UB,TB=NB,HB=bB,VB=lB,$B=aB.has,_B=aB.remove,zB=Nt,GB=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},YB=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}},XB=function(t,e){var r=zB("Set");try{(new r)[t](GB(0));try{return(new r)[t](GB(-1)),!1}catch(i){if(!e)return!0;try{return(new r)[t](YB(-1/0)),!1}catch(i){return e(new r([1,2])[t](YB(1/0)))}}}catch(t){return!1}},OB=function(t){var e=MB(this),r=TB(t),i=DB(e);return kB(i)<=r.size?HB(i,function(t){r.includes(t)&&_B(i,t)}):VB(r.getIterator(),function(t){$B(i,t)&&_B(i,t)}),i},WB=n;vn({target:"Set",proto:!0,real:!0,forced:!XB("difference",function(t){return 0===t.size})||WB(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var r=t++>1;return e.has(1)&&e.clear(),{done:r,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size})},{difference:OB});var KB=oB,JB=UB,PB=NB,ZB=bB,jB=lB,qB=aB.Set,tQ=aB.add,eQ=aB.has,rQ=n,iQ=function(t){var e=KB(this),r=PB(t),i=new qB;return JB(e)>r.size?jB(r.getIterator(),function(t){eQ(e,t)&&tQ(i,t)}):ZB(e,function(t){r.includes(t)&&tQ(i,t)}),i};vn({target:"Set",proto:!0,real:!0,forced:!XB("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||rQ(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))})},{intersection:iQ});var nQ=oB,aQ=aB.has,sQ=UB,oQ=NB,cQ=bB,lQ=lB,uQ=lu,dQ=function(t){var e=nQ(this),r=oQ(t);if(sQ(e)<=r.size)return!1!==cQ(e,function(t){if(r.includes(t))return!1},!0);var i=r.getIterator();return!1!==lQ(i,function(t){if(aQ(e,t))return uQ(i.iterator,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!XB("isDisjointFrom",function(t){return!t})},{isDisjointFrom:dQ});var hQ=oB,gQ=UB,pQ=bB,mQ=NB,fQ=function(t){var e=hQ(this),r=mQ(t);return!(gQ(e)>r.size)&&!1!==pQ(e,function(t){if(!r.includes(t))return!1},!0)};vn({target:"Set",proto:!0,real:!0,forced:!XB("isSubsetOf",function(t){return t})},{isSubsetOf:fQ});var bQ=oB,yQ=aB.has,vQ=UB,BQ=NB,QQ=lB,UQ=lu,FQ=function(t){var e=bQ(this),r=BQ(t);if(vQ(e)<r.size)return!1;var i=r.getIterator();return!1!==QQ(i,function(t){if(!yQ(e,t))return UQ(i.iterator,"normal",!1)})};vn({target:"Set",proto:!0,real:!0,forced:!XB("isSupersetOf",function(t){return!t})},{isSupersetOf:FQ});var IQ=oB,AQ=QB,CQ=NB,xQ=lB,EQ=aB.add,wQ=aB.has,SQ=aB.remove,RQ=function(t){try{var e=new Set,r={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},i=e[t](r);return 1===i.size&&4===i.values().next().value}catch(t){return!1}},LQ=function(t){var e=IQ(this),r=CQ(t).getIterator(),i=AQ(e);return xQ(r,function(t){wQ(e,t)?SQ(i,t):EQ(i,t)}),i},NQ=RQ;vn({target:"Set",proto:!0,real:!0,forced:!XB("symmetricDifference")||!NQ("symmetricDifference")},{symmetricDifference:LQ});var MQ=oB,DQ=aB.add,kQ=QB,TQ=NB,HQ=lB,VQ=function(t){var e=MQ(this),r=TQ(t).getIterator(),i=kQ(e);return HQ(r,function(t){DQ(i,t)}),i},$Q=RQ;vn({target:"Set",proto:!0,real:!0,forced:!XB("union")||!$Q("union")},{union:VQ});var _Q,zQ,GQ,YQ=mo,XQ=ht,OQ=r,WQ=pt,KQ=ft,JQ=B,PQ=xn,ZQ=hr,jQ=fi,qQ=po,tU=Wn,eU=aa,rU=lt,iU=V,nU=Or.enforce,aU=Or.get,sU=OQ.Int8Array,oU=sU&&sU.prototype,cU=OQ.Uint8ClampedArray,lU=cU&&cU.prototype,uU=sU&&tU(sU),dU=oU&&tU(oU),hU=Object.prototype,gU=OQ.TypeError,pU=rU("toStringTag"),mU=iU("TYPED_ARRAY_TAG"),fU="TypedArrayConstructor",bU=YQ&&!!eU&&"Opera"!==PQ(OQ.opera),yU={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},vU={BigInt64Array:8,BigUint64Array:8},BU=function(t){var e=tU(t);if(KQ(e)){var r=aU(e);return r&&JQ(r,fU)?r[fU]:BU(e)}};for(_Q in yU)(GQ=(zQ=OQ[_Q])&&zQ.prototype)?nU(GQ)[fU]=zQ:bU=!1;for(_Q in vU)(GQ=(zQ=OQ[_Q])&&zQ.prototype)&&(nU(GQ)[fU]=zQ);if((!bU||!WQ(uU)||uU===Function.prototype)&&(uU=function(){throw new gU("Incorrect invocation")},bU))for(_Q in yU)OQ[_Q]&&eU(OQ[_Q],uU);if((!bU||!dU||dU===hU)&&(dU=uU.prototype,bU))for(_Q in yU)OQ[_Q]&&eU(OQ[_Q].prototype,dU);if(bU&&tU(lU)!==dU&&eU(lU,dU),XQ&&!JQ(dU,pU))for(_Q in qQ(dU,pU,{configurable:!0,get:function(){return KQ(this)?this[mU]:void 0}}),yU)OQ[_Q]&&ZQ(OQ[_Q].prototype,mU,_Q);var QU={aTypedArray:function(t){if(function(t){if(!KQ(t))return!1;var e=PQ(t);return JQ(yU,e)||JQ(vU,e)}(t))return t;throw new gU("Target is not a typed array")},exportTypedArrayMethod:function(t,e,r,i){if(XQ){if(r)for(var n in yU){var a=OQ[n];if(a&&JQ(a.prototype,t))try{delete a.prototype[t]}catch(r){try{a.prototype[t]=e}catch(t){}}}dU[t]&&!r||jQ(dU,t,r?e:bU&&oU[t]||e,i)}},getTypedArrayConstructor:BU},UU=xn,FU=se,IU=TypeError,AU=function(t){var e=UU(t);return"BigInt64Array"===e||"BigUint64Array"===e},CU=Si,xU=Ui,EU=function(t){var e=FU(t,"number");if("number"==typeof e)throw new IU("Can't convert number to bigint");return BigInt(e)},wU=QU.aTypedArray,SU=QU.getTypedArrayConstructor,RU=QU.exportTypedArrayMethod,LU=RangeError,NU=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),MU=NU&&function(){try{new Int8Array(1).with(-.5,1)}catch(t){return!0}}();RU("with",{with:function(t,e){var r=wU(this),i=CU(r),n=xU(t),a=n<0?i+n:n,s=AU(r)?EU(e):+e;if(a>=i||a<0)throw new LU("Incorrect index");for(var o=new(SU(r))(i),c=0;c<i;c++)o[c]=c===a?s:r[c];return o}}.with,!NU||MU);var DU=Si,kU=ft,TU=String,HU=TypeError,VU=function(t){if(void 0===t||kU(t))return t;throw new HU(TU(t)+" is not an object or undefined")},$U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_U=$U+"+/",zU=$U+"-_",GU=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e},YU={i2c:_U,c2i:GU(_U),i2cUrl:zU,c2iUrl:GU(zU)},XU=TypeError,OU=function(t){var e=t&&t.alphabet;if(void 0===e||"base64"===e||"base64url"===e)return e||"base64";throw new XU("Incorrect `alphabet` option")},WU=r,KU=u,JU=VU,PU=Av,ZU=B,jU=OU,qU=ko,tF=YU.c2i,eF=YU.c2iUrl,rF=WU.SyntaxError,iF=WU.TypeError,nF=KU("".charAt),aF=function(t,e){for(var r=t.length;e<r;e++){var i=nF(t,e);if(" "!==i&&"\t"!==i&&"\n"!==i&&"\f"!==i&&"\r"!==i)break}return e},sF=function(t,e,r){var i=t.length;i<4&&(t+=2===i?"AA":"A");var n=(e[nF(t,0)]<<18)+(e[nF(t,1)]<<12)+(e[nF(t,2)]<<6)+e[nF(t,3)],a=[n>>16&255,n>>8&255,255&n];if(2===i){if(r&&0!==a[1])throw new rF("Extra bits");return[a[0]]}if(3===i){if(r&&0!==a[2])throw new rF("Extra bits");return[a[0],a[1]]}return a},oF=function(t,e,r){for(var i=e.length,n=0;n<i;n++)t[r+n]=e[n];return r+i},cF=function(t,e,r,i){PU(t),JU(e);var n="base64"===jU(e)?tF:eF,a=e?e.lastChunkHandling:void 0;if(void 0===a&&(a="loose"),"loose"!==a&&"strict"!==a&&"stop-before-partial"!==a)throw new iF("Incorrect `lastChunkHandling` option");r&&qU(r.buffer);var s=t.length,o=r||[],c=0,l=0,u="",d=0;if(i)for(;;){if((d=aF(t,d))===s){if(u.length>0){if("stop-before-partial"===a)break;if("loose"!==a)throw new rF("Missing padding");if(1===u.length)throw new rF("Malformed padding: exactly one additional character");c=oF(o,sF(u,n,!1),c)}l=s;break}var h=nF(t,d);if(++d,"="===h){if(u.length<2)throw new rF("Padding is too early");if(d=aF(t,d),2===u.length){if(d===s){if("stop-before-partial"===a)break;throw new rF("Malformed padding: only one =")}"="===nF(t,d)&&(++d,d=aF(t,d))}if(d<s)throw new rF("Unexpected character after padding");c=oF(o,sF(u,n,"strict"===a),c),l=s;break}if(!ZU(n,h))throw new rF("Unexpected character");var g=i-c;if(1===g&&2===u.length||2===g&&3===u.length)break;if(4===(u+=h).length&&(c=oF(o,sF(u,n,!1),c),u="",l=d,c===i))break}return{bytes:o,read:l,written:c}},lF=vn,uF=function(t,e,r){for(var i=0,n=arguments.length>2?r:DU(e),a=new t(n);n>i;)a[i]=e[i++];return a},dF=cF,hF=r.Uint8Array,gF=!hF||!hF.fromBase64||!function(){try{return void hF.fromBase64("a")}catch(t){}try{hF.fromBase64("",null)}catch(t){return!0}}();hF&&lF({target:"Uint8Array",stat:!0,forced:gF},{fromBase64:function(t){var e=dF(t,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return uF(hF,e.bytes)}});var pF=r,mF=u,fF=pF.Uint8Array,bF=pF.SyntaxError,yF=Math.min,vF=mF("".match),BF=function(t,e){var r=t.length;if(r%2!=0)throw new bF("String should be an even number of characters");for(var i=e?yF(e.length,r/2):r/2,n=e||new fF(i),a=vF(t,/.{2}/g),s=0;s<i;s++){var o=+("0x"+a[s]+"0");if(o!=o)throw new bF("String should only contain hex characters");n[s]=o>>4}return{bytes:n,read:s<<1}},QF=vn,UF=Av,FF=BF;r.Uint8Array&&QF({target:"Uint8Array",stat:!0},{fromHex:function(t){return FF(UF(t)).bytes}});var IF=xn,AF=TypeError,CF=function(t){if("Uint8Array"===IF(t))return t;throw new AF("Argument is not an Uint8Array")},xF=vn,EF=cF,wF=CF,SF=r.Uint8Array,RF=!SF||!SF.prototype.setFromBase64||!function(){var t=new SF([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(t){}try{return void t.setFromBase64("a")}catch(t){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();SF&&xF({target:"Uint8Array",proto:!0,forced:RF},{setFromBase64:function(t){wF(this);var e=EF(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}});var LF=vn,NF=Av,MF=CF,DF=ko,kF=BF;r.Uint8Array&&LF({target:"Uint8Array",proto:!0,forced:function(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(t){return!0}}()},{setFromHex:function(t){MF(this),NF(t),DF(this.buffer);var e=kF(t,this).read;return{read:e,written:e/2}}});var TF=vn,HF=r,VF=VU,$F=CF,_F=ko,zF=OU,GF=YU.i2c,YF=YU.i2cUrl,XF=u("".charAt),OF=HF.Uint8Array,WF=!OF||!OF.prototype.toBase64||!function(){try{(new OF).toBase64(null)}catch(t){return!0}}();OF&&TF({target:"Uint8Array",proto:!0,forced:WF},{toBase64:function(){var t=$F(this),e=arguments.length?VF(arguments[0]):void 0,r="base64"===zF(e)?GF:YF,i=!!e&&!!e.omitPadding;_F(this.buffer);for(var n,a="",s=0,o=t.length,c=function(t){return XF(r,n>>6*t&63)};s+2<o;s+=3)n=(t[s]<<16)+(t[s+1]<<8)+t[s+2],a+=c(3)+c(2)+c(1)+c(0);return s+2===o?(n=(t[s]<<16)+(t[s+1]<<8),a+=c(3)+c(2)+c(1)+(i?"":"=")):s+1===o&&(n=t[s]<<16,a+=c(3)+c(2)+(i?"":"==")),a}});var KF=vn,JF=r,PF=u,ZF=CF,jF=ko,qF=PF(1.1.toString),tI=PF([].join),eI=Array,rI=JF.Uint8Array,iI=!rI||!rI.prototype.toHex||!function(){try{return"ffffffffffffffff"===new rI([255,255,255,255,255,255,255,255]).toHex()}catch(t){return!1}}();rI&&KF({target:"Uint8Array",proto:!0,forced:iI},{toHex:function(){ZF(this),jF(this.buffer);for(var t=eI(this.length),e=0,r=this.length;e<r;e++){var i=qF(this[e],16);t[e]=1===i.length?"0"+i:i}return tI(t,"")}});var nI=u,aI=WeakMap.prototype,sI={WeakMap:WeakMap,set:nI(aI.set),get:nI(aI.get),has:nI(aI.has),remove:nI(aI.delete)},oI=sI.get,cI=sI.has,lI=sI.set;vn({target:"WeakMap",proto:!0,real:!0,forced:false},{getOrInsert:function(t,e){return cI(this,t)?oI(this,t):(lI(this,t,e),e)}});var uI=sI.has,dI=sI,hI=new dI.WeakMap,gI=dI.set,pI=dI.remove,mI=Xt,fI=function(t){return uI(t),t},bI=function(t){return gI(hI,t,1),pI(hI,t),t},yI=sI.get,vI=sI.has,BI=sI.set;vn({target:"WeakMap",proto:!0,real:!0,forced:!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}()},{getOrInsertComputed:function(t,e){if(fI(this),bI(t),mI(e),vI(this,t))return yI(this,t);var r=e(t);return BI(this,t,r),r}});var QI=pt,UI=ft,FI=aa,II=vn,AI=r,CI=Nt,xI=Re,EI=dt.f,wI=B,SI=wc,RI=function(t,e,r){var i,n;return FI&&QI(i=e.constructor)&&i!==r&&UI(n=i.prototype)&&n!==r.prototype&&FI(t,n),t},LI=Ka,NI={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}},MI=Ta,DI=ht,kI="DOMException",TI=CI("Error"),HI=CI(kI),VI=function(){SI(this,$I);var t=arguments.length,e=LI(t<1?void 0:arguments[0]),r=LI(t<2?void 0:arguments[1],"Error"),i=new HI(e,r),n=new TI(e);return n.name=kI,EI(i,"stack",xI(1,MI(n.stack,1))),RI(i,this,VI),i},$I=VI.prototype=HI.prototype,_I="stack"in new TI(kI),zI="stack"in new HI(1,2),GI=HI&&DI&&Object.getOwnPropertyDescriptor(AI,kI),YI=!(!GI||GI.writable&&GI.configurable),XI=_I&&!YI&&!zI;II({global:!0,constructor:!0,forced:XI},{DOMException:XI?VI:HI});var OI=CI(kI),WI=OI.prototype;if(WI.constructor!==OI)for(var KI in EI(WI,"constructor",xI(1,OI)),NI)if(wI(NI,KI)){var JI=NI[KI],PI=JI.s;wI(OI,PI)||EI(OI,PI,xI(6,JI.c))}var ZI,jI,qI,tA,eA=TypeError,rA=function(t,e){if(t<e)throw new eA("Not enough arguments");return t},iA=z,nA=/ipad|iphone|ipod/i.test(iA)&&/applewebkit/i.test(iA),aA=r,sA=hg,oA=Hc,cA=pt,lA=B,uA=n,dA=ba,hA=cm,gA=Bt,pA=rA,mA=nA,fA=zo,bA=aA.setImmediate,yA=aA.clearImmediate,vA=aA.process,BA=aA.Dispatch,QA=aA.Function,UA=aA.MessageChannel,FA=aA.String,IA=0,AA={},CA="onreadystatechange";uA(function(){ZI=aA.location});var xA=function(t){if(lA(AA,t)){var e=AA[t];delete AA[t],e()}},EA=function(t){return function(){xA(t)}},wA=function(t){xA(t.data)},SA=function(t){aA.postMessage(FA(t),ZI.protocol+"//"+ZI.host)};bA&&yA||(bA=function(t){pA(arguments.length,1);var e=cA(t)?t:QA(t),r=hA(arguments,1);return AA[++IA]=function(){sA(e,void 0,r)},jI(IA),IA},yA=function(t){delete AA[t]},fA?jI=function(t){vA.nextTick(EA(t))}:BA&&BA.now?jI=function(t){BA.now(EA(t))}:UA&&!mA?(tA=(qI=new UA).port2,qI.port1.onmessage=wA,jI=oA(tA.postMessage,tA)):aA.addEventListener&&cA(aA.postMessage)&&!aA.importScripts&&ZI&&"file:"!==ZI.protocol&&!uA(SA)?(jI=SA,aA.addEventListener("message",wA,!1)):jI=CA in gA("script")?function(t){dA.appendChild(gA("script"))[CA]=function(){dA.removeChild(this),xA(t)}}:function(t){setTimeout(EA(t),0)});var RA={set:bA,clear:yA},LA=RA.clear;vn({global:!0,bind:!0,enumerable:!0,forced:r.clearImmediate!==LA},{clearImmediate:LA});var NA=r,MA=hg,DA=pt,kA=_o,TA=z,HA=cm,VA=rA,$A=NA.Function,_A=/MSIE .\./.test(TA)||"BUN"===kA&&function(){var t=NA.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),zA=vn,GA=r,YA=RA.set,XA=function(t,e){var r=e?2:1;return _A?function(i,n){var a=VA(arguments.length,1)>r,s=DA(i)?i:$A(i),o=a?HA(arguments,r):[],c=a?function(){MA(s,this,o)}:s;return e?t(c,n):t(c)}:t},OA=GA.setImmediate?XA(YA,!1):YA;zA({global:!0,bind:!0,enumerable:!0,forced:GA.setImmediate!==OA},{setImmediate:OA});var WA,KA=n,JA=r.RegExp,PA=!KA(function(){var t=!0;try{JA(".","d")}catch(e){t=!1}var e={},r="",i=t?"dgimsy":"gimsy",n=function(t,i){Object.defineProperty(e,t,{get:function(){return r+=i,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)n(s,a[s]);return Object.getOwnPropertyDescriptor(JA.prototype,"flags").get.call(e)!==i||r!==i}),ZA=xt,jA=St,qA=B,tC=Mt,eC={correct:PA},rC=function(){var t=ZA(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},iC=RegExp.prototype,nC=vn,aC=r,sC=Nt,oC=u,cC=n,lC=V,uC=pt,dC=Qb,hC=d,gC=ft,pC=Vt,mC=Dd,fC=xt,bC=xn,yC=B,vC=Rs,BC=hr,QC=Si,UC=rA,FC=eC.correct?function(t){return t.flags}:function(t){return eC.correct||!tC(iC,t)||qA(t,"flags")?t.flags:jA(rC,t)},IC=Wm,AC=aB,CC=bB,xC=ic,EC=Va,wC=Jo,SC=aC.Object,RC=aC.Array,LC=aC.Date,NC=aC.Error,MC=aC.TypeError,DC=aC.PerformanceMark,kC=sC("DOMException"),TC=IC.Map,HC=IC.has,VC=IC.get,$C=IC.set,_C=AC.Set,zC=AC.add,GC=AC.has,YC=sC("Object","keys"),XC=oC([].push),OC=oC((!0).valueOf),WC=oC(1.1.valueOf),KC=oC("".valueOf),JC=oC(LC.prototype.getTime),PC=lC("structuredClone"),ZC="DataCloneError",jC="Transferring",qC=function(t){return!cC(function(){var e=new aC.Set([7]),r=t(e),i=t(SC(7));return r===e||!r.has(7)||!gC(i)||7!==+i})&&t},tx=function(t,e){return!cC(function(){var r=new e,i=t({a:r,b:r});return!(i&&i.a===i.b&&i.a instanceof e&&i.a.stack===r.stack)})},ex=aC.structuredClone,rx=!tx(ex,NC)||!tx(ex,kC)||(WA=ex,!!cC(function(){var t=WA(new aC.AggregateError([1],PC,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==PC||3!==t.cause})),ix=!ex&&qC(function(t){return new DC(PC,{detail:t}).detail}),nx=qC(ex)||ix,ax=function(t){throw new kC("Uncloneable type: "+t,ZC)},sx=function(t,e){throw new kC((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",ZC)},ox=function(t,e){return nx||sx(e),nx(t)},cx=function(t,e,r){if(HC(e,t))return VC(e,t);var i,n,a,s,o,c;if("SharedArrayBuffer"===(r||bC(t)))i=nx?nx(t):t;else{var l=aC.DataView;l||uC(t.slice)||sx("ArrayBuffer");try{if(uC(t.slice)&&!t.resizable)i=t.slice(0);else{n=t.byteLength,a="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,i=new ArrayBuffer(n,a),s=new l(t),o=new l(i);for(c=0;c<n;c++)o.setUint8(c,s.getUint8(c))}}catch(t){throw new kC("ArrayBuffer is detached",ZC)}}return $C(e,t,i),i},lx=function(t,e){if(pC(t)&&ax("Symbol"),!gC(t))return t;if(e){if(HC(e,t))return VC(e,t)}else e=new TC;var r,i,n,a,s,o,c,l,u=bC(t);switch(u){case"Array":n=RC(QC(t));break;case"Object":n={};break;case"Map":n=new TC;break;case"Set":n=new _C;break;case"RegExp":n=new RegExp(t.source,FC(t));break;case"Error":switch(i=t.name){case"AggregateError":n=new(sC(i))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":n=new(sC(i));break;case"CompileError":case"LinkError":case"RuntimeError":n=new(sC("WebAssembly",i));break;default:n=new NC}break;case"DOMException":n=new kC(t.message,t.name);break;case"ArrayBuffer":case"SharedArrayBuffer":n=cx(t,e,u);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":o="DataView"===u?t.byteLength:t.length,n=function(t,e,r,i,n){var a=aC[e];return gC(a)||sx(e),new a(cx(t.buffer,n),r,i)}(t,u,t.byteOffset,o,e);break;case"DOMQuad":try{n=new DOMQuad(lx(t.p1,e),lx(t.p2,e),lx(t.p3,e),lx(t.p4,e))}catch(e){n=ox(t,u)}break;case"File":if(nx)try{n=nx(t),bC(n)!==u&&(n=void 0)}catch(t){}if(!n)try{n=new File([t],t.name,t)}catch(t){}n||sx(u);break;case"FileList":if(a=function(){var t;try{t=new aC.DataTransfer}catch(e){try{t=new aC.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(s=0,o=QC(t);s<o;s++)a.items.add(lx(t[s],e));n=a.files}else n=ox(t,u);break;case"ImageData":try{n=new ImageData(lx(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(e){n=ox(t,u)}break;default:if(nx)n=nx(t);else switch(u){case"BigInt":n=SC(t.valueOf());break;case"Boolean":n=SC(OC(t));break;case"Number":n=SC(WC(t));break;case"String":n=SC(KC(t));break;case"Date":n=new LC(JC(t));break;case"Blob":try{n=t.slice(0,t.size,t.type)}catch(t){sx(u)}break;case"DOMPoint":case"DOMPointReadOnly":r=aC[u];try{n=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(t){sx(u)}break;case"DOMRect":case"DOMRectReadOnly":r=aC[u];try{n=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(t){sx(u)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=aC[u];try{n=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(t){sx(u)}break;case"AudioData":case"VideoFrame":uC(t.clone)||sx(u);try{n=t.clone()}catch(t){ax(u)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":sx(u);default:ax(u)}}switch($C(e,t,n),u){case"Array":case"Object":for(c=YC(t),s=0,o=QC(c);s<o;s++)l=c[s],vC(n,l,lx(t[l],e));break;case"Map":t.forEach(function(t,r){$C(n,lx(r,e),lx(t,e))});break;case"Set":t.forEach(function(t){zC(n,lx(t,e))});break;case"Error":BC(n,"message",lx(t.message,e)),yC(t,"cause")&&BC(n,"cause",lx(t.cause,e)),"AggregateError"===i?n.errors=lx(t.errors,e):"SuppressedError"===i&&(n.error=lx(t.error,e),n.suppressed=lx(t.suppressed,e));case"DOMException":EC&&BC(n,"stack",lx(t.stack,e))}return n};nC({global:!0,enumerable:!0,sham:!wC,forced:rx},{structuredClone:function(t){var e,r,i=UC(arguments.length,1)>1&&!hC(arguments[1])?fC(arguments[1]):void 0,n=i?i.transfer:void 0;void 0!==n&&(r=function(t,e){if(!gC(t))throw new MC("Transfer option cannot be converted to a sequence");var r=[];mC(t,function(t){XC(r,fC(t))});for(var i,n,a,s,o,c=0,l=QC(r),u=new _C;c<l;){if(i=r[c++],s=void 0,"ArrayBuffer"===(n=bC(i))?GC(u,i):HC(e,i))throw new kC("Duplicate transferable",ZC);if("ArrayBuffer"!==n){if(wC)s=ex(i,{transfer:[i]});else switch(n){case"ImageBitmap":a=aC.OffscreenCanvas,dC(a)||sx(n,jC);try{(o=new a(i.width,i.height)).getContext("bitmaprenderer").transferFromImageBitmap(i),s=o.transferToImageBitmap()}catch(t){}break;case"AudioData":case"VideoFrame":uC(i.clone)&&uC(i.close)||sx(n,jC);try{s=i.clone(),i.close()}catch(t){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":sx(n,jC)}if(void 0===s)throw new kC("This object cannot be transferred: "+n,ZC);$C(e,i,s)}else zC(u,i)}return u}(n,e=new TC));var a=lx(t,e);return r&&function(t){CC(t,function(t){wC?ex(t,{transfer:[t]}):uC(t.transfer)?t.transfer():xC?xC(t):sx("ArrayBuffer",jC)})}(r),a}});var ux=n,dx=ht,hx=lt("iterator"),gx=!ux(function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),i="";return t.pathname="c%20d",e.forEach(function(t,r){e.delete("b"),i+=r+t}),r.delete("a",2),r.delete("b",void 0),!e.size&&!dx||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[hx]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==i||"x"!==new URL("https://x",void 0).host}),px=vn,mx=rA,fx=Oa,bx=gx,yx=Nt("URL");px({target:"URL",stat:!0,forced:!bx},{parse:function(t){var e=mx(arguments.length,1),r=fx(t),i=e<2||void 0===arguments[1]?void 0:fx(arguments[1]);try{return new yx(r,i)}catch(t){return null}}});const vx=new Map;var Bx={set(t,e,r){vx.has(t)||vx.set(t,new Map);const i=vx.get(t);i.has(e)||0===i.size?i.set(e,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>vx.has(t)&&vx.get(t).get(e)||null,remove(t,e){if(!vx.has(t))return;const r=vx.get(t);r.delete(e),0===r.size&&vx.delete(t)}};const Qx="transitionend",Ux=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),Fx=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),Ix=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),Ax=t=>Ix(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(Ux(t)):null,Cx=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,xx=[],Ex=t=>{var e;e=()=>{const e=Cx();if(e){const r=t.NAME,i=e.fn[r];e.fn[r]=t.jQueryInterface,e.fn[r].Constructor=t,e.fn[r].noConflict=()=>(e.fn[r]=i,t.jQueryInterface)}},"loading"===document.readyState?(xx.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of xx)t()}),xx.push(e)):e()},wx=(t,e=[],r=t)=>"function"==typeof t?t.call(...e):r,Sx=(t,e,r=!0)=>{if(!r)return void wx(t);const i=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const i=Number.parseFloat(e),n=Number.parseFloat(r);return i||n?(e=e.split(",")[0],r=r.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(r))):0})(e)+5;let n=!1;const a=({target:r})=>{r===e&&(n=!0,e.removeEventListener(Qx,a),wx(t))};e.addEventListener(Qx,a),setTimeout(()=>{n||e.dispatchEvent(new Event(Qx))},i)},Rx=/[^.]*(?=\..*)\.|.*/,Lx=/\..*/,Nx=/::\d+$/,Mx={};let Dx=1;const kx={mouseenter:"mouseover",mouseleave:"mouseout"},Tx=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hx(t,e){return e&&`${e}::${Dx++}`||t.uidEvent||Dx++}function Vx(t){const e=Hx(t);return t.uidEvent=e,Mx[e]=Mx[e]||{},Mx[e]}function $x(t,e,r=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===r)}function _x(t,e,r){const i="string"==typeof e,n=i?r:e||r;let a=Xx(t);return Tx.has(a)||(a=t),[i,n,a]}function zx(t,e,r,i,n){if("string"!=typeof e||!t)return;let[a,s,o]=_x(e,r,i);if(e in kx){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s=t(s)}const c=Vx(t),l=c[o]||(c[o]={}),u=$x(l,s,a?r:null);if(u)return void(u.oneOff=u.oneOff&&n);const d=Hx(s,e.replace(Rx,"")),h=a?function(t,e,r){return function i(n){const a=t.querySelectorAll(e);for(let{target:s}=n;s&&s!==this;s=s.parentNode)for(const o of a)if(o===s)return Wx(n,{delegateTarget:s}),i.oneOff&&Ox.off(t,n.type,e,r),r.apply(s,[n])}}(t,r,s):function(t,e){return function r(i){return Wx(i,{delegateTarget:t}),r.oneOff&&Ox.off(t,i.type,e),e.apply(t,[i])}}(t,s);h.delegationSelector=a?r:null,h.callable=s,h.oneOff=n,h.uidEvent=d,l[d]=h,t.addEventListener(o,h,a)}function Gx(t,e,r,i,n){const a=$x(e[r],i,n);a&&(t.removeEventListener(r,a,Boolean(n)),delete e[r][a.uidEvent])}function Yx(t,e,r,i){const n=e[r]||{};for(const[a,s]of Object.entries(n))a.includes(i)&&Gx(t,e,r,s.callable,s.delegationSelector)}function Xx(t){return t=t.replace(Lx,""),kx[t]||t}const Ox={on(t,e,r,i){zx(t,e,r,i,!1)},one(t,e,r,i){zx(t,e,r,i,!0)},off(t,e,r,i){if("string"!=typeof e||!t)return;const[n,a,s]=_x(e,r,i),o=s!==e,c=Vx(t),l=c[s]||{},u=e.startsWith(".");if(void 0===a){if(u)for(const r of Object.keys(c))Yx(t,c,r,e.slice(1));for(const[r,i]of Object.entries(l)){const n=r.replace(Nx,"");o&&!e.includes(n)||Gx(t,c,s,i.callable,i.delegationSelector)}}else{if(!Object.keys(l).length)return;Gx(t,c,s,a,n?r:null)}},trigger(t,e,r){if("string"!=typeof e||!t)return null;const i=Cx();let n=null,a=!0,s=!0,o=!1;e!==Xx(e)&&i&&(n=i.Event(e,r),i(t).trigger(n),a=!n.isPropagationStopped(),s=!n.isImmediatePropagationStopped(),o=n.isDefaultPrevented());const c=Wx(new Event(e,{bubbles:a,cancelable:!0}),r);return o&&c.preventDefault(),s&&t.dispatchEvent(c),c.defaultPrevented&&n&&n.preventDefault(),c}};function Wx(t,e={}){for(const[r,i]of Object.entries(e))try{t[r]=i}catch{Object.defineProperty(t,r,{configurable:!0,get:()=>i})}return t}function Kx(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Jx(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Px={setDataAttribute(t,e,r){t.setAttribute(`data-bs-${Jx(e)}`,r)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Jx(e)}`)},getDataAttributes(t){if(!t)return{};const e={},r=Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"));for(const i of r){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=Kx(t.dataset[i])}return e},getDataAttribute:(t,e)=>Kx(t.getAttribute(`data-bs-${Jx(e)}`))};class Zx{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=Ix(e)?Px.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof r?r:{},...Ix(e)?Px.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,i]of Object.entries(e)){const e=t[r],n=Ix(e)?"element":Fx(e);if(!new RegExp(i).test(n))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${n}" but expected type "${i}".`)}}}class jx extends Zx{constructor(t,e){super(),(t=Ax(t))&&(this._element=t,this._config=this._getConfig(e),Bx.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Bx.remove(this._element,this.constructor.DATA_KEY),Ox.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){Sx(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Bx.get(Ax(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const qx='[data-bs-toggle="button"]';class tE extends jx{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){const e=tE.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}Ox.on(document,"click.bs.button.data-api",qx,t=>{t.preventDefault();const e=t.target.closest(qx);tE.getOrCreateInstance(e).toggle()}),Ex(tE);const eE=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let r=t.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&"#"!==r?r.trim():null}return e?e.split(",").map(t=>Ux(t)).join(","):null},rE={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const r=[];let i=t.parentNode.closest(e);for(;i;)r.push(i),i=i.parentNode.closest(e);return r},prev(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>{if(!Ix(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),r=t.closest("details:not([open])");if(!r)return e;if(r!==t){const e=t.closest("summary");if(e&&e.parentNode!==r)return!1;if(null===e)return!1}return e})(t))},getSelectorFromElement(t){const e=eE(t);return e&&rE.findOne(e)?e:null},getElementFromSelector(t){const e=eE(t);return e?rE.findOne(e):null},getMultipleElementsFromSelector(t){const e=eE(t);return e?rE.find(e):[]}},iE=".bs.collapse",nE=`show${iE}`,aE=`shown${iE}`,sE=`hide${iE}`,oE=`hidden${iE}`,cE=`click${iE}.data-api`,lE="show",uE="collapse",dE="collapsing",hE=`:scope .${uE} .${uE}`,gE='[data-bs-toggle="collapse"]',pE={parent:null,toggle:!0},mE={parent:"(null|element)",toggle:"boolean"};class fE extends jx{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=rE.find(gE);for(const t of r){const e=rE.getSelectorFromElement(t),r=rE.find(e).filter(t=>t===this._element);null!==e&&r.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return pE}static get DefaultType(){return mE}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>fE.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning)return;if(Ox.trigger(this._element,nE).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(uE),this._element.classList.add(dE),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(dE),this._element.classList.add(uE,lE),this._element.style[e]="",Ox.trigger(this._element,aE)},this._element,!0),this._element.style[e]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(Ox.trigger(this._element,sE).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,this._element.offsetHeight,this._element.classList.add(dE),this._element.classList.remove(uE,lE);for(const t of this._triggerArray){const e=rE.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(dE),this._element.classList.add(uE),Ox.trigger(this._element,oE)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(lE)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=Ax(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(gE);for(const e of t){const t=rE.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=rE.find(hE,this._config.parent);return rE.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle("collapsed",!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=fE.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===r[t])throw new TypeError(`No method named "${t}"`);r[t]()}})}}Ox.on(document,cE,gE,function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of rE.getMultipleElementsFromSelector(this))fE.getOrCreateInstance(t,{toggle:!1}).toggle()}),Ex(fE);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bE=globalThis,yE=bE.ShadowRoot&&(void 0===bE.ShadyCSS||bE.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vE=Symbol(),BE=new WeakMap;let QE=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==vE)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yE&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=BE.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&BE.set(e,t))}return t}toString(){return this.cssText}};const UE=t=>new QE("string"==typeof t?t:t+"",void 0,vE),FE=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new QE(r,t,vE)},IE=yE?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return UE(e)})(t):t,{is:AE,defineProperty:CE,getOwnPropertyDescriptor:xE,getOwnPropertyNames:EE,getOwnPropertySymbols:wE,getPrototypeOf:SE}=Object,RE=globalThis,LE=RE.trustedTypes,NE=LE?LE.emptyScript:"",ME=RE.reactiveElementPolyfillSupport,DE=(t,e)=>t,kE={toAttribute(t,e){switch(e){case Boolean:t=t?NE:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},TE=(t,e)=>!AE(t,e),HE={attribute:!0,type:String,converter:kE,reflect:!1,useDefault:!1,hasChanged:TE};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),RE.litPropertyMetadata??=new WeakMap;let VE=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=HE){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&CE(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=xE(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);n?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??HE}static _$Ei(){if(this.hasOwnProperty(DE("elementProperties")))return;const t=SE(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(DE("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(DE("properties"))){const t=this.properties,e=[...EE(t),...wE(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(IE(t))}else void 0!==t&&e.push(IE(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(yE)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),i=bE.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:kE).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:kE;this._$Em=i;const a=n.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,r,i=!1,n){if(void 0!==t){const a=this.constructor;if(!1===i&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??TE)(n,e)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};VE.elementStyles=[],VE.shadowRootOptions={mode:"open"},VE[DE("elementProperties")]=new Map,VE[DE("finalized")]=new Map,ME?.({ReactiveElement:VE}),(RE.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $E=globalThis,_E=t=>t,zE=$E.trustedTypes,GE=zE?zE.createPolicy("lit-html",{createHTML:t=>t}):void 0,YE="$lit$",XE=`lit$${Math.random().toFixed(9).slice(2)}$`,OE="?"+XE,WE=`<${OE}>`,KE=document,JE=()=>KE.createComment(""),PE=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ZE=Array.isArray,jE="[ \t\n\f\r]",qE=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tw=/-->/g,ew=/>/g,rw=RegExp(`>|${jE}(?:([^\\s"'>=/]+)(${jE}*=${jE}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),iw=/'/g,nw=/"/g,aw=/^(?:script|style|textarea|title)$/i,sw=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),ow=sw(1),cw=sw(2),lw=sw(3),uw=Symbol.for("lit-noChange"),dw=Symbol.for("lit-nothing"),hw=new WeakMap,gw=KE.createTreeWalker(KE,129);function pw(t,e){if(!ZE(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==GE?GE.createHTML(e):e}const mw=(t,e)=>{const r=t.length-1,i=[];let n,a=2===e?"<svg>":3===e?"<math>":"",s=qE;for(let e=0;e<r;e++){const r=t[e];let o,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===qE?"!--"===c[1]?s=tw:void 0!==c[1]?s=ew:void 0!==c[2]?(aw.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=rw):void 0!==c[3]&&(s=rw):s===rw?">"===c[0]?(s=n??qE,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,o=c[1],s=void 0===c[3]?rw:'"'===c[3]?nw:iw):s===nw||s===iw?s=rw:s===tw||s===ew?s=qE:(s=rw,n=void 0);const d=s===rw&&t[e+1].startsWith("/>")?" ":"";a+=s===qE?r+WE:l>=0?(i.push(o),r.slice(0,l)+YE+r.slice(l)+XE+d):r+XE+(-2===l?e:d)}return[pw(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class fw{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,a=0;const s=t.length-1,o=this.parts,[c,l]=mw(t,e);if(this.el=fw.createElement(c,r),gw.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=gw.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(YE)){const e=l[a++],r=i.getAttribute(t).split(XE),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:s[2],strings:r,ctor:"."===s[1]?Qw:"?"===s[1]?Uw:"@"===s[1]?Fw:Bw}),i.removeAttribute(t)}else t.startsWith(XE)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(aw.test(i.tagName)){const t=i.textContent.split(XE),e=t.length-1;if(e>0){i.textContent=zE?zE.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],JE()),gw.nextNode(),o.push({type:2,index:++n});i.append(t[e],JE())}}}else if(8===i.nodeType)if(i.data===OE)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(XE,t+1));)o.push({type:7,index:n}),t+=XE.length-1}n++}}static createElement(t,e){const r=KE.createElement("template");return r.innerHTML=t,r}}function bw(t,e,r=t,i){if(e===uw)return e;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const a=PE(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(e=bw(t,n._$AS(t,e.values),n,i)),e}class yw{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??KE).importNode(e,!0);gw.currentNode=i;let n=gw.nextNode(),a=0,s=0,o=r[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new vw(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new Iw(n,this,t)),this._$AV.push(e),o=r[++s]}a!==o?.index&&(n=gw.nextNode(),a++)}return gw.currentNode=KE,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class vw{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=dw,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=bw(this,t,e),PE(t)?t===dw||null==t||""===t?(this._$AH!==dw&&this._$AR(),this._$AH=dw):t!==this._$AH&&t!==uw&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ZE(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==dw&&PE(this._$AH)?this._$AA.nextSibling.data=t:this.T(KE.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=fw.createElement(pw(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new yw(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=hw.get(t.strings);return void 0===e&&hw.set(t.strings,e=new fw(t)),e}k(t){ZE(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new vw(this.O(JE()),this.O(JE()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=_E(t).nextSibling;_E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Bw{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=dw,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=dw}_$AI(t,e=this,r,i){const n=this.strings;let a=!1;if(void 0===n)t=bw(this,t,e,0),a=!PE(t)||t!==this._$AH&&t!==uw,a&&(this._$AH=t);else{const i=t;let s,o;for(t=n[0],s=0;s<n.length-1;s++)o=bw(this,i[r+s],e,s),o===uw&&(o=this._$AH[s]),a||=!PE(o)||o!==this._$AH[s],o===dw?t=dw:t!==dw&&(t+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!i&&this.j(t)}j(t){t===dw?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qw extends Bw{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===dw?void 0:t}}class Uw extends Bw{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==dw)}}class Fw extends Bw{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=bw(this,t,e,0)??dw)===uw)return;const r=this._$AH,i=t===dw&&r!==dw||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==dw&&(r===dw||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Iw{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){bw(this,t)}}const Aw=$E.litHtmlPolyfillSupport;Aw?.(fw,vw),($E.litHtmlVersions??=[]).push("3.3.2");const Cw=(t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=r?.renderBefore??null;i._$litPart$=n=new vw(e.insertBefore(JE(),t),t,void 0,r??{})}return n._$AI(t),n},xw=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ew extends VE{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cw(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return uw}}Ew._$litElement$=!0,Ew.finalized=!0,xw.litElementHydrateSupport?.({LitElement:Ew});const ww=xw.litElementPolyfillSupport;function Sw(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Rw(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Lw(t){let e,r,i;function n(t,i,n=0,a=t.length){if(n<a){if(0!==e(i,i))return a;do{const e=n+a>>>1;r(t[e],i)<0?n=e+1:a=e}while(n<a)}return n}return 2!==t.length?(e=Sw,r=(e,r)=>Sw(t(e),r),i=(e,r)=>t(e)-r):(e=t===Sw||t===Rw?t:Nw,r=t,i=t),{left:n,center:function(t,e,r=0,a=t.length){const s=n(t,e,r,a-1);return s>r&&i(t[s-1],e)>-i(t[s],e)?s-1:s},right:function(t,i,n=0,a=t.length){if(n<a){if(0!==e(i,i))return a;do{const e=n+a>>>1;r(t[e],i)<=0?n=e+1:a=e}while(n<a)}return n}}}function Nw(){return 0}ww?.({LitElement:Ew}),(xw.litElementVersions??=[]).push("4.2.2");const Mw=Lw(Sw).right;Lw(function(t){return null===t?NaN:+t}).center;const Dw=Math.sqrt(50),kw=Math.sqrt(10),Tw=Math.sqrt(2);function Hw(t,e,r){const i=(e-t)/Math.max(0,r),n=Math.floor(Math.log10(i)),a=i/Math.pow(10,n),s=a>=Dw?10:a>=kw?5:a>=Tw?2:1;let o,c,l;return n<0?(l=Math.pow(10,-n)/s,o=Math.round(t*l),c=Math.round(e*l),o/l<t&&++o,c/l>e&&--c,l=-l):(l=Math.pow(10,n)*s,o=Math.round(t/l),c=Math.round(e/l),o*l<t&&++o,c*l>e&&--c),c<o&&.5<=r&&r<2?Hw(t,e,2*r):[o,c,l]}function Vw(t,e,r){return Hw(t=+t,e=+e,r=+r)[2]}function $w(t){return t}var _w=1e-6;function zw(t){return"translate("+t+",0)"}function Gw(t){return"translate(0,"+t+")"}function Yw(t){return e=>+t(e)}function Xw(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function Ow(){return!this.__axis}function Ww(t,e){var r=[],i=null,n=null,a=6,s=6,o=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",d=1===t||3===t?zw:Gw;function h(h){var g=null==i?e.ticks?e.ticks.apply(e,r):e.domain():i,p=null==n?e.tickFormat?e.tickFormat.apply(e,r):$w:n,m=Math.max(a,0)+o,f=e.range(),b=+f[0]+c,y=+f[f.length-1]+c,v=(e.bandwidth?Xw:Yw)(e.copy(),c),B=h.selection?h.selection():h,Q=B.selectAll(".domain").data([null]),U=B.selectAll(".tick").data(g,e).order(),F=U.exit(),I=U.enter().append("g").attr("class","tick"),A=U.select("line"),C=U.select("text");Q=Q.merge(Q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),U=U.merge(I),A=A.merge(I.append("line").attr("stroke","currentColor").attr(u+"2",l*a)),C=C.merge(I.append("text").attr("fill","currentColor").attr(u,l*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==B&&(Q=Q.transition(h),U=U.transition(h),A=A.transition(h),C=C.transition(h),F=F.transition(h).attr("opacity",_w).attr("transform",function(t){return isFinite(t=v(t))?d(t+c):this.getAttribute("transform")}),I.attr("opacity",_w).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:v(t))+c)})),F.remove(),Q.attr("d",4===t||2===t?s?"M"+l*s+","+b+"H"+c+"V"+y+"H"+l*s:"M"+c+","+b+"V"+y:s?"M"+b+","+l*s+"V"+c+"H"+y+"V"+l*s:"M"+b+","+c+"H"+y),U.attr("opacity",1).attr("transform",function(t){return d(v(t)+c)}),A.attr(u+"2",l*a),C.attr(u,l*m).text(p),B.filter(Ow).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),B.each(function(){this.__axis=v})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return r=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),h):r.slice()},h.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),h):i&&i.slice()},h.tickFormat=function(t){return arguments.length?(n=t,h):n},h.tickSize=function(t){return arguments.length?(a=s=+t,h):a},h.tickSizeInner=function(t){return arguments.length?(a=+t,h):a},h.tickSizeOuter=function(t){return arguments.length?(s=+t,h):s},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(c=+t,h):c},h}function Kw(t){return Ww(4,t)}var Jw={value:()=>{}};function Pw(){for(var t,e=0,r=arguments.length,i={};e<r;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new Zw(i)}function Zw(t){this._=t}function jw(t,e){for(var r,i=0,n=t.length;i<n;++i)if((r=t[i]).name===e)return r.value}function qw(t,e,r){for(var i=0,n=t.length;i<n;++i)if(t[i].name===e){t[i]=Jw,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:e,value:r}),t}Zw.prototype=Pw.prototype={constructor:Zw,on:function(t,e){var r,i,n=this._,a=(i=n,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),s=-1,o=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=a[s]).type)n[r]=qw(n[r],t.name,e);else if(null==e)for(r in n)n[r]=qw(n[r],t.name,null);return this}for(;++s<o;)if((r=(t=a[s]).type)&&(r=jw(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Zw(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,i,n=new Array(r),a=0;a<r;++a)n[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(i=this._[t]).length;a<r;++a)i[a].value.apply(e,n)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],n=0,a=i.length;n<a;++n)i[n].value.apply(e,r)}};var tS="http://www.w3.org/1999/xhtml",eS={svg:"http://www.w3.org/2000/svg",xhtml:tS,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function rS(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),eS.hasOwnProperty(e)?{space:eS[e],local:t}:t}function iS(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===tS&&e.documentElement.namespaceURI===tS?e.createElement(t):e.createElementNS(r,t)}}function nS(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function aS(t){var e=rS(t);return(e.local?nS:iS)(e)}function sS(){}function oS(t){return null==t?sS:function(){return this.querySelector(t)}}function cS(){return[]}function lS(t){return null==t?cS:function(){return this.querySelectorAll(t)}}function uS(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function dS(t){return function(){return this.matches(t)}}function hS(t){return function(e){return e.matches(t)}}var gS=Array.prototype.find;function pS(){return this.firstElementChild}var mS=Array.prototype.filter;function fS(){return Array.from(this.children)}function bS(t){return new Array(t.length)}function yS(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function vS(t,e,r,i,n,a){for(var s,o=0,c=e.length,l=a.length;o<l;++o)(s=e[o])?(s.__data__=a[o],i[o]=s):r[o]=new yS(t,a[o]);for(;o<c;++o)(s=e[o])&&(n[o]=s)}function BS(t,e,r,i,n,a,s){var o,c,l,u=new Map,d=e.length,h=a.length,g=new Array(d);for(o=0;o<d;++o)(c=e[o])&&(g[o]=l=s.call(c,c.__data__,o,e)+"",u.has(l)?n[o]=c:u.set(l,c));for(o=0;o<h;++o)l=s.call(t,a[o],o,a)+"",(c=u.get(l))?(i[o]=c,c.__data__=a[o],u.delete(l)):r[o]=new yS(t,a[o]);for(o=0;o<d;++o)(c=e[o])&&u.get(g[o])===c&&(n[o]=c)}function QS(t){return t.__data__}function US(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function FS(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function IS(t){return function(){this.removeAttribute(t)}}function AS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function CS(t,e){return function(){this.setAttribute(t,e)}}function xS(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function ES(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function wS(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function SS(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function RS(t){return function(){this.style.removeProperty(t)}}function LS(t,e,r){return function(){this.style.setProperty(t,e,r)}}function NS(t,e,r){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,r)}}function MS(t,e){return t.style.getPropertyValue(e)||SS(t).getComputedStyle(t,null).getPropertyValue(e)}function DS(t){return function(){delete this[t]}}function kS(t,e){return function(){this[t]=e}}function TS(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function HS(t){return t.trim().split(/^|\s+/)}function VS(t){return t.classList||new $S(t)}function $S(t){this._node=t,this._names=HS(t.getAttribute("class")||"")}function _S(t,e){for(var r=VS(t),i=-1,n=e.length;++i<n;)r.add(e[i])}function zS(t,e){for(var r=VS(t),i=-1,n=e.length;++i<n;)r.remove(e[i])}function GS(t){return function(){_S(this,t)}}function YS(t){return function(){zS(this,t)}}function XS(t,e){return function(){(e.apply(this,arguments)?_S:zS)(this,t)}}function OS(){this.textContent=""}function WS(t){return function(){this.textContent=t}}function KS(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function JS(){this.innerHTML=""}function PS(t){return function(){this.innerHTML=t}}function ZS(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function jS(){this.nextSibling&&this.parentNode.appendChild(this)}function qS(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function tR(){return null}function eR(){var t=this.parentNode;t&&t.removeChild(this)}function rR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function iR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function nR(t){return function(){var e=this.__on;if(e){for(var r,i=0,n=-1,a=e.length;i<a;++i)r=e[i],t.type&&r.type!==t.type||r.name!==t.name?e[++n]=r:this.removeEventListener(r.type,r.listener,r.options);++n?e.length=n:delete this.__on}}}function aR(t,e,r){return function(){var i,n=this.__on,a=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(n)for(var s=0,o=n.length;s<o;++s)if((i=n[s]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=r),void(i.value=e);this.addEventListener(t.type,a,r),i={type:t.type,name:t.name,value:e,listener:a,options:r},n?n.push(i):this.__on=[i]}}function sR(t,e,r){var i=SS(t),n=i.CustomEvent;"function"==typeof n?n=new n(e,r):(n=i.document.createEvent("Event"),r?(n.initEvent(e,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(e,!1,!1)),t.dispatchEvent(n)}function oR(t,e){return function(){return sR(this,t,e)}}function cR(t,e){return function(){return sR(this,t,e.apply(this,arguments))}}yS.prototype={constructor:yS,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},$S.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var lR=[null];function uR(t,e){this._groups=t,this._parents=e}function dR(){return new uR([[document.documentElement]],lR)}function hR(t){return"string"==typeof t?new uR([[document.querySelector(t)]],[document.documentElement]):new uR([[t]],lR)}uR.prototype=dR.prototype={constructor:uR,select:function(t){"function"!=typeof t&&(t=oS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s,o=e[n],c=o.length,l=i[n]=new Array(c),u=0;u<c;++u)(a=o[u])&&(s=t.call(a,a.__data__,u,o))&&("__data__"in a&&(s.__data__=a.__data__),l[u]=s);return new uR(i,this._parents)},selectAll:function(t){t="function"==typeof t?uS(t):lS(t);for(var e=this._groups,r=e.length,i=[],n=[],a=0;a<r;++a)for(var s,o=e[a],c=o.length,l=0;l<c;++l)(s=o[l])&&(i.push(t.call(s,s.__data__,l,o)),n.push(s));return new uR(i,n)},selectChild:function(t){return this.select(null==t?pS:function(t){return function(){return gS.call(this.children,t)}}("function"==typeof t?t:hS(t)))},selectChildren:function(t){return this.selectAll(null==t?fS:function(t){return function(){return mS.call(this.children,t)}}("function"==typeof t?t:hS(t)))},filter:function(t){"function"!=typeof t&&(t=dS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s=e[n],o=s.length,c=i[n]=[],l=0;l<o;++l)(a=s[l])&&t.call(a,a.__data__,l,s)&&c.push(a);return new uR(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,QS);var r=e?BS:vS,i=this._parents,n=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var a=n.length,s=new Array(a),o=new Array(a),c=new Array(a),l=0;l<a;++l){var u=i[l],d=n[l],h=d.length,g=US(t.call(u,u&&u.__data__,l,i)),p=g.length,m=o[l]=new Array(p),f=s[l]=new Array(p);r(u,d,m,f,c[l]=new Array(h),g,e);for(var b,y,v=0,B=0;v<p;++v)if(b=m[v]){for(v>=B&&(B=v+1);!(y=f[B])&&++B<p;);b._next=y||null}}return(s=new uR(s,i))._enter=o,s._exit=c,s},enter:function(){return new uR(this._enter||this._groups.map(bS),this._parents)},exit:function(){return new uR(this._exit||this._groups.map(bS),this._parents)},join:function(t,e,r){var i=this.enter(),n=this,a=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(n=e(n))&&(n=n.selection()),null==r?a.remove():r(a),i&&n?i.merge(n).order():n},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,i=e._groups,n=r.length,a=i.length,s=Math.min(n,a),o=new Array(n),c=0;c<s;++c)for(var l,u=r[c],d=i[c],h=u.length,g=o[c]=new Array(h),p=0;p<h;++p)(l=u[p]||d[p])&&(g[p]=l);for(;c<n;++c)o[c]=r[c];return new uR(o,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var i,n=t[e],a=n.length-1,s=n[a];--a>=0;)(i=n[a])&&(s&&4^i.compareDocumentPosition(s)&&s.parentNode.insertBefore(i,s),s=i);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=FS);for(var r=this._groups,i=r.length,n=new Array(i),a=0;a<i;++a){for(var s,o=r[a],c=o.length,l=n[a]=new Array(c),u=0;u<c;++u)(s=o[u])&&(l[u]=s);l.sort(e)}return new uR(n,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],n=0,a=i.length;n<a;++n){var s=i[n];if(s)return s}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,i=e.length;r<i;++r)for(var n,a=e[r],s=0,o=a.length;s<o;++s)(n=a[s])&&t.call(n,n.__data__,s,a);return this},attr:function(t,e){var r=rS(t);if(arguments.length<2){var i=this.node();return r.local?i.getAttributeNS(r.space,r.local):i.getAttribute(r)}return this.each((null==e?r.local?AS:IS:"function"==typeof e?r.local?wS:ES:r.local?xS:CS)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?RS:"function"==typeof e?NS:LS)(t,e,null==r?"":r)):MS(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?DS:"function"==typeof e?TS:kS)(t,e)):this.node()[t]},classed:function(t,e){var r=HS(t+"");if(arguments.length<2){for(var i=VS(this.node()),n=-1,a=r.length;++n<a;)if(!i.contains(r[n]))return!1;return!0}return this.each(("function"==typeof e?XS:e?GS:YS)(r,e))},text:function(t){return arguments.length?this.each(null==t?OS:("function"==typeof t?KS:WS)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?JS:("function"==typeof t?ZS:PS)(t)):this.node().innerHTML},raise:function(){return this.each(jS)},lower:function(){return this.each(qS)},append:function(t){var e="function"==typeof t?t:aS(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:aS(t),i=null==e?tR:"function"==typeof e?e:oS(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),i.apply(this,arguments)||null)})},remove:function(){return this.each(eR)},clone:function(t){return this.select(t?iR:rR)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var i,n,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),s=a.length;if(!(arguments.length<2)){for(o=e?aR:nR,i=0;i<s;++i)this.each(o(a[i],e,r));return this}var o=this.node().__on;if(o)for(var c,l=0,u=o.length;l<u;++l)for(i=0,c=o[l];i<s;++i)if((n=a[i]).type===c.type&&n.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?cR:oR)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i,n=t[e],a=0,s=n.length;a<s;++a)(i=n[a])&&(yield i)}};var gR=0;function pR(){return new mR}function mR(){this._="@"+(++gR).toString(36)}function fR(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var i=r.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();return[t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop]}}return[t.pageX,t.pageY]}mR.prototype=pR.prototype={constructor:mR,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};const bR={passive:!1},yR={capture:!0,passive:!1};function vR(t){t.stopImmediatePropagation()}function BR(t){t.preventDefault(),t.stopImmediatePropagation()}var QR=t=>()=>t;function UR(t,{sourceEvent:e,subject:r,target:i,identifier:n,active:a,x:s,y:o,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}function FR(t){return!t.ctrlKey&&!t.button}function IR(){return this.parentNode}function AR(t,e){return null==e?{x:t.x,y:t.y}:e}function CR(){return navigator.maxTouchPoints||"ontouchstart"in this}function xR(){var t,e,r,i,n=FR,a=IR,s=AR,o=CR,c={},l=Pw("start","drag","end"),u=0,d=0;function h(t){t.on("mousedown.drag",g).filter(o).on("touchstart.drag",f).on("touchmove.drag",b,bR).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(s,o){if(!i&&n.call(this,s,o)){var c=v(this,a.call(this,s,o),s,o,"mouse");c&&(hR(s.view).on("mousemove.drag",p,yR).on("mouseup.drag",m,yR),function(t){var e=t.document.documentElement,r=hR(t).on("dragstart.drag",BR,yR);"onselectstart"in e?r.on("selectstart.drag",BR,yR):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}(s.view),vR(s),r=!1,t=s.clientX,e=s.clientY,c("start",s))}}function p(i){if(BR(i),!r){var n=i.clientX-t,a=i.clientY-e;r=n*n+a*a>d}c.mouse("drag",i)}function m(t){hR(t.view).on("mousemove.drag mouseup.drag",null),function(t,e){var r=t.document.documentElement,i=hR(t).on("dragstart.drag",null);e&&(i.on("click.drag",BR,yR),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in r?i.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}(t.view,r),BR(t),c.mouse("end",t)}function f(t,e){if(n.call(this,t,e)){var r,i,s=t.changedTouches,o=a.call(this,t,e),c=s.length;for(r=0;r<c;++r)(i=v(this,o,t,e,s[r].identifier,s[r]))&&(vR(t),i("start",t,s[r]))}}function b(t){var e,r,i=t.changedTouches,n=i.length;for(e=0;e<n;++e)(r=c[i[e].identifier])&&(BR(t),r("drag",t,i[e]))}function y(t){var e,r,n=t.changedTouches,a=n.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),e=0;e<a;++e)(r=c[n[e].identifier])&&(vR(t),r("end",t,n[e]))}function v(t,e,r,i,n,a){var o,d,g,p=l.copy(),m=fR(a||r,e);if(null!=(g=s.call(t,new UR("beforestart",{sourceEvent:r,target:h,identifier:n,active:u,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),i)))return o=g.x-m[0]||0,d=g.y-m[1]||0,function r(a,s,l){var f,b=m;switch(a){case"start":c[n]=r,f=u++;break;case"end":delete c[n],--u;case"drag":m=fR(l||s,e),f=u}p.call(a,t,new UR(a,{sourceEvent:s,subject:g,target:h,identifier:n,active:f,x:m[0]+o,y:m[1]+d,dx:m[0]-b[0],dy:m[1]-b[1],dispatch:p}),i)}}return h.filter=function(t){return arguments.length?(n="function"==typeof t?t:QR(!!t),h):n},h.container=function(t){return arguments.length?(a="function"==typeof t?t:QR(t),h):a},h.subject=function(t){return arguments.length?(s="function"==typeof t?t:QR(t),h):s},h.touchable=function(t){return arguments.length?(o="function"==typeof t?t:QR(!!t),h):o},h.on=function(){var t=l.on.apply(l,arguments);return t===l?h:t},h.clickDistance=function(t){return arguments.length?(d=(t=+t)*t,h):Math.sqrt(d)},h}function ER(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function wR(t,e){var r=Object.create(t.prototype);for(var i in e)r[i]=e[i];return r}function SR(){}UR.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var RR=.7,LR=1/RR,NR="\\s*([+-]?\\d+)\\s*",MR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",DR="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",kR=/^#([0-9a-f]{3,8})$/,TR=new RegExp(`^rgb\\(${NR},${NR},${NR}\\)$`),HR=new RegExp(`^rgb\\(${DR},${DR},${DR}\\)$`),VR=new RegExp(`^rgba\\(${NR},${NR},${NR},${MR}\\)$`),$R=new RegExp(`^rgba\\(${DR},${DR},${DR},${MR}\\)$`),_R=new RegExp(`^hsl\\(${MR},${DR},${DR}\\)$`),zR=new RegExp(`^hsla\\(${MR},${DR},${DR},${MR}\\)$`),GR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function YR(){return this.rgb().formatHex()}function XR(){return this.rgb().formatRgb()}function OR(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=kR.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?WR(e):3===r?new PR(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?KR(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?KR(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=TR.exec(t))?new PR(e[1],e[2],e[3],1):(e=HR.exec(t))?new PR(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=VR.exec(t))?KR(e[1],e[2],e[3],e[4]):(e=$R.exec(t))?KR(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=_R.exec(t))?rL(e[1],e[2]/100,e[3]/100,1):(e=zR.exec(t))?rL(e[1],e[2]/100,e[3]/100,e[4]):GR.hasOwnProperty(t)?WR(GR[t]):"transparent"===t?new PR(NaN,NaN,NaN,0):null}function WR(t){return new PR(t>>16&255,t>>8&255,255&t,1)}function KR(t,e,r,i){return i<=0&&(t=e=r=NaN),new PR(t,e,r,i)}function JR(t,e,r,i){return 1===arguments.length?function(t){return t instanceof SR||(t=OR(t)),t?new PR((t=t.rgb()).r,t.g,t.b,t.opacity):new PR}(t):new PR(t,e,r,null==i?1:i)}function PR(t,e,r,i){this.r=+t,this.g=+e,this.b=+r,this.opacity=+i}function ZR(){return`#${eL(this.r)}${eL(this.g)}${eL(this.b)}`}function jR(){const t=qR(this.opacity);return`${1===t?"rgb(":"rgba("}${tL(this.r)}, ${tL(this.g)}, ${tL(this.b)}${1===t?")":`, ${t})`}`}function qR(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function tL(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function eL(t){return((t=tL(t))<16?"0":"")+t.toString(16)}function rL(t,e,r,i){return i<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new nL(t,e,r,i)}function iL(t){if(t instanceof nL)return new nL(t.h,t.s,t.l,t.opacity);if(t instanceof SR||(t=OR(t)),!t)return new nL;if(t instanceof nL)return t;var e=(t=t.rgb()).r/255,r=t.g/255,i=t.b/255,n=Math.min(e,r,i),a=Math.max(e,r,i),s=NaN,o=a-n,c=(a+n)/2;return o?(s=e===a?(r-i)/o+6*(r<i):r===a?(i-e)/o+2:(e-r)/o+4,o/=c<.5?a+n:2-a-n,s*=60):o=c>0&&c<1?0:s,new nL(s,o,c,t.opacity)}function nL(t,e,r,i){this.h=+t,this.s=+e,this.l=+r,this.opacity=+i}function aL(t){return(t=(t||0)%360)<0?t+360:t}function sL(t){return Math.max(0,Math.min(1,t||0))}function oL(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}ER(SR,OR,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:YR,formatHex:YR,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return iL(this).formatHsl()},formatRgb:XR,toString:XR}),ER(PR,JR,wR(SR,{brighter(t){return t=null==t?LR:Math.pow(LR,t),new PR(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?RR:Math.pow(RR,t),new PR(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new PR(tL(this.r),tL(this.g),tL(this.b),qR(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ZR,formatHex:ZR,formatHex8:function(){return`#${eL(this.r)}${eL(this.g)}${eL(this.b)}${eL(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:jR,toString:jR})),ER(nL,function(t,e,r,i){return 1===arguments.length?iL(t):new nL(t,e,r,null==i?1:i)},wR(SR,{brighter(t){return t=null==t?LR:Math.pow(LR,t),new nL(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?RR:Math.pow(RR,t),new nL(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,i=r+(r<.5?r:1-r)*e,n=2*r-i;return new PR(oL(t>=240?t-240:t+120,n,i),oL(t,n,i),oL(t<120?t+240:t-120,n,i),this.opacity)},clamp(){return new nL(aL(this.h),sL(this.s),sL(this.l),qR(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=qR(this.opacity);return`${1===t?"hsl(":"hsla("}${aL(this.h)}, ${100*sL(this.s)}%, ${100*sL(this.l)}%${1===t?")":`, ${t})`}`}}));var cL=t=>()=>t;function lL(t){return 1===(t=+t)?uL:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(i){return Math.pow(t+i*e,r)}}(e,r,t):cL(isNaN(e)?r:e)}}function uL(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):cL(isNaN(t)?e:t)}var dL=function t(e){var r=lL(e);function i(t,e){var i=r((t=JR(t)).r,(e=JR(e)).r),n=r(t.g,e.g),a=r(t.b,e.b),s=uL(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=n(e),t.b=a(e),t.opacity=s(e),t+""}}return i.gamma=t,i}(1);function hL(t,e){e||(e=[]);var r,i=t?Math.min(e.length,t.length):0,n=e.slice();return function(a){for(r=0;r<i;++r)n[r]=t[r]*(1-a)+e[r]*a;return n}}function gL(t,e){var r,i=e?e.length:0,n=t?Math.min(i,t.length):0,a=new Array(n),s=new Array(i);for(r=0;r<n;++r)a[r]=BL(t[r],e[r]);for(;r<i;++r)s[r]=e[r];return function(t){for(r=0;r<n;++r)s[r]=a[r](t);return s}}function pL(t,e){var r=new Date;return t=+t,e=+e,function(i){return r.setTime(t*(1-i)+e*i),r}}function mL(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function fL(t,e){var r,i={},n={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?i[r]=BL(t[r],e[r]):n[r]=e[r];return function(t){for(r in i)n[r]=i[r](t);return n}}var bL=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,yL=new RegExp(bL.source,"g");function vL(t,e){var r,i,n,a=bL.lastIndex=yL.lastIndex=0,s=-1,o=[],c=[];for(t+="",e+="";(r=bL.exec(t))&&(i=yL.exec(e));)(n=i.index)>a&&(n=e.slice(a,n),o[s]?o[s]+=n:o[++s]=n),(r=r[0])===(i=i[0])?o[s]?o[s]+=i:o[++s]=i:(o[++s]=null,c.push({i:s,x:mL(r,i)})),a=yL.lastIndex;return a<e.length&&(n=e.slice(a),o[s]?o[s]+=n:o[++s]=n),o.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var r,i=0;i<e;++i)o[(r=c[i]).i]=r.x(t);return o.join("")})}function BL(t,e){var r,i=typeof e;return null==e||"boolean"===i?cL(e):("number"===i?mL:"string"===i?(r=OR(e))?(e=r,dL):vL:e instanceof OR?dL:e instanceof Date?pL:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?hL:Array.isArray(e)?gL:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?fL:mL)(t,e)}function QL(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var UL,FL=180/Math.PI,IL={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function AL(t,e,r,i,n,a){var s,o,c;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(c=t*r+e*i)&&(r-=t*c,i-=e*c),(o=Math.sqrt(r*r+i*i))&&(r/=o,i/=o,c/=o),t*i<e*r&&(t=-t,e=-e,c=-c,s=-s),{translateX:n,translateY:a,rotate:Math.atan2(e,t)*FL,skewX:Math.atan(c)*FL,scaleX:s,scaleY:o}}function CL(t,e,r,i){function n(t){return t.length?t.pop()+" ":""}return function(a,s){var o=[],c=[];return a=t(a),s=t(s),function(t,i,n,a,s,o){if(t!==n||i!==a){var c=s.push("translate(",null,e,null,r);o.push({i:c-4,x:mL(t,n)},{i:c-2,x:mL(i,a)})}else(n||a)&&s.push("translate("+n+e+a+r)}(a.translateX,a.translateY,s.translateX,s.translateY,o,c),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(n(r)+"rotate(",null,i)-2,x:mL(t,e)})):e&&r.push(n(r)+"rotate("+e+i)}(a.rotate,s.rotate,o,c),function(t,e,r,a){t!==e?a.push({i:r.push(n(r)+"skewX(",null,i)-2,x:mL(t,e)}):e&&r.push(n(r)+"skewX("+e+i)}(a.skewX,s.skewX,o,c),function(t,e,r,i,a,s){if(t!==r||e!==i){var o=a.push(n(a)+"scale(",null,",",null,")");s.push({i:o-4,x:mL(t,r)},{i:o-2,x:mL(e,i)})}else 1===r&&1===i||a.push(n(a)+"scale("+r+","+i+")")}(a.scaleX,a.scaleY,s.scaleX,s.scaleY,o,c),a=s=null,function(t){for(var e,r=-1,i=c.length;++r<i;)o[(e=c[r]).i]=e.x(t);return o.join("")}}}var xL,EL,wL=CL(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?IL:AL(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),SL=CL(function(t){return null==t?IL:(UL||(UL=document.createElementNS("http://www.w3.org/2000/svg","g")),UL.setAttribute("transform",t),(t=UL.transform.baseVal.consolidate())?AL((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):IL)},", ",")",")"),RL=0,LL=0,NL=0,ML=0,DL=0,kL=0,TL="object"==typeof performance&&performance.now?performance:Date,HL="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function VL(){return DL||(HL($L),DL=TL.now()+kL)}function $L(){DL=0}function _L(){this._call=this._time=this._next=null}function zL(t,e,r){var i=new _L;return i.restart(t,e,r),i}function GL(){DL=(ML=TL.now())+kL,RL=LL=0;try{!function(){VL(),++RL;for(var t,e=xL;e;)(t=DL-e._time)>=0&&e._call.call(void 0,t),e=e._next;--RL}()}finally{RL=0,function(){var t,e,r=xL,i=1/0;for(;r;)r._call?(i>r._time&&(i=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:xL=e);EL=t,XL(i)}(),DL=0}}function YL(){var t=TL.now(),e=t-ML;e>1e3&&(kL-=e,ML=t)}function XL(t){RL||(LL&&(LL=clearTimeout(LL)),t-DL>24?(t<1/0&&(LL=setTimeout(GL,t-TL.now()-kL)),NL&&(NL=clearInterval(NL))):(NL||(ML=TL.now(),NL=setInterval(YL,1e3)),RL=1,HL(GL)))}function OL(t,e,r){var i=new _L;return e=null==e?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,r),i}_L.prototype=zL.prototype={constructor:_L,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?VL():+r)+(null==e?0:+e),this._next||EL===this||(EL?EL._next=this:xL=this,EL=this),this._call=t,this._time=r,XL()},stop:function(){this._call&&(this._call=null,this._time=1/0,XL())}};var WL=Pw("start","end","cancel","interrupt"),KL=[];function JL(t,e,r,i,n,a){var s=t.__transition;if(s){if(r in s)return}else t.__transition={};!function(t,e,r){var i,n=t.__transition;function a(t){r.state=1,r.timer.restart(s,r.delay,r.time),r.delay<=t&&s(t-r.delay)}function s(a){var l,u,d,h;if(1!==r.state)return c();for(l in n)if((h=n[l]).name===r.name){if(3===h.state)return OL(s);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete n[l]):+l<e&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete n[l])}if(OL(function(){3===r.state&&(r.state=4,r.timer.restart(o,r.delay,r.time),o(a))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,i=new Array(d=r.tween.length),l=0,u=-1;l<d;++l)(h=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(i[++u]=h);i.length=u+1}}function o(e){for(var n=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(c),r.state=5,1),a=-1,s=i.length;++a<s;)i[a].call(t,n);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),c())}function c(){for(var i in r.state=6,r.timer.stop(),delete n[e],n)return;delete t.__transition}n[e]=r,r.timer=zL(a,0,r.time)}(t,r,{name:e,index:i,group:n,on:WL,tween:KL,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function PL(t,e){var r=jL(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function ZL(t,e){var r=jL(t,e);if(r.state>3)throw new Error("too late; already running");return r}function jL(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function qL(t,e){var r,i;return function(){var n=ZL(this,t),a=n.tween;if(a!==r)for(var s=0,o=(i=r=a).length;s<o;++s)if(i[s].name===e){(i=i.slice()).splice(s,1);break}n.tween=i}}function tN(t,e,r){var i,n;if("function"!=typeof r)throw new Error;return function(){var a=ZL(this,t),s=a.tween;if(s!==i){n=(i=s).slice();for(var o={name:e,value:r},c=0,l=n.length;c<l;++c)if(n[c].name===e){n[c]=o;break}c===l&&n.push(o)}a.tween=n}}function eN(t,e,r){var i=t._id;return t.each(function(){var t=ZL(this,i);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return jL(t,i).value[e]}}function rN(t,e){var r;return("number"==typeof e?mL:e instanceof OR?dL:(r=OR(e))?(e=r,dL):vL)(t,e)}function iN(t){return function(){this.removeAttribute(t)}}function nN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function aN(t,e,r){var i,n,a=r+"";return function(){var s=this.getAttribute(t);return s===a?null:s===i?n:n=e(i=s,r)}}function sN(t,e,r){var i,n,a=r+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===a?null:s===i?n:n=e(i=s,r)}}function oN(t,e,r){var i,n,a;return function(){var s,o,c=r(this);if(null!=c)return(s=this.getAttribute(t))===(o=c+"")?null:s===i&&o===n?a:(n=o,a=e(i=s,c));this.removeAttribute(t)}}function cN(t,e,r){var i,n,a;return function(){var s,o,c=r(this);if(null!=c)return(s=this.getAttributeNS(t.space,t.local))===(o=c+"")?null:s===i&&o===n?a:(n=o,a=e(i=s,c));this.removeAttributeNS(t.space,t.local)}}function lN(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,n)),r}return n._value=e,n}function uN(t,e){var r,i;function n(){var n=e.apply(this,arguments);return n!==i&&(r=(i=n)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,n)),r}return n._value=e,n}function dN(t,e){return function(){PL(this,t).delay=+e.apply(this,arguments)}}function hN(t,e){return e=+e,function(){PL(this,t).delay=e}}function gN(t,e){return function(){ZL(this,t).duration=+e.apply(this,arguments)}}function pN(t,e){return e=+e,function(){ZL(this,t).duration=e}}var mN=dR.prototype.constructor;function fN(t){return function(){this.style.removeProperty(t)}}var bN=0;function yN(t,e,r,i){this._groups=t,this._parents=e,this._name=r,this._id=i}function vN(){return++bN}var BN=dR.prototype;yN.prototype={constructor:yN,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=oS(t));for(var i=this._groups,n=i.length,a=new Array(n),s=0;s<n;++s)for(var o,c,l=i[s],u=l.length,d=a[s]=new Array(u),h=0;h<u;++h)(o=l[h])&&(c=t.call(o,o.__data__,h,l))&&("__data__"in o&&(c.__data__=o.__data__),d[h]=c,JL(d[h],e,r,h,d,jL(o,r)));return new yN(a,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=lS(t));for(var i=this._groups,n=i.length,a=[],s=[],o=0;o<n;++o)for(var c,l=i[o],u=l.length,d=0;d<u;++d)if(c=l[d]){for(var h,g=t.call(c,c.__data__,d,l),p=jL(c,r),m=0,f=g.length;m<f;++m)(h=g[m])&&JL(h,e,r,m,g,p);a.push(g),s.push(c)}return new yN(a,s,e,r)},selectChild:BN.selectChild,selectChildren:BN.selectChildren,filter:function(t){"function"!=typeof t&&(t=dS(t));for(var e=this._groups,r=e.length,i=new Array(r),n=0;n<r;++n)for(var a,s=e[n],o=s.length,c=i[n]=[],l=0;l<o;++l)(a=s[l])&&t.call(a,a.__data__,l,s)&&c.push(a);return new yN(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,i=e.length,n=r.length,a=Math.min(i,n),s=new Array(i),o=0;o<a;++o)for(var c,l=e[o],u=r[o],d=l.length,h=s[o]=new Array(d),g=0;g<d;++g)(c=l[g]||u[g])&&(h[g]=c);for(;o<i;++o)s[o]=e[o];return new yN(s,this._parents,this._name,this._id)},selection:function(){return new mN(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=vN(),i=this._groups,n=i.length,a=0;a<n;++a)for(var s,o=i[a],c=o.length,l=0;l<c;++l)if(s=o[l]){var u=jL(s,e);JL(s,t,r,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new yN(i,this._parents,t,r)},call:BN.call,nodes:BN.nodes,node:BN.node,size:BN.size,empty:BN.empty,each:BN.each,on:function(t,e){var r=this._id;return arguments.length<2?jL(this.node(),r).on.on(t):this.each(function(t,e,r){var i,n,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?PL:ZL;return function(){var s=a(this,t),o=s.on;o!==i&&(n=(i=o).copy()).on(e,r),s.on=n}}(r,t,e))},attr:function(t,e){var r=rS(t),i="transform"===r?SL:rN;return this.attrTween(t,"function"==typeof e?(r.local?cN:oN)(r,i,eN(this,"attr."+t,e)):null==e?(r.local?nN:iN)(r):(r.local?sN:aN)(r,i,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=rS(t);return this.tween(r,(i.local?lN:uN)(i,e))},style:function(t,e,r){var i="transform"==(t+="")?wL:rN;return null==e?this.styleTween(t,function(t,e){var r,i,n;return function(){var a=MS(this,t),s=(this.style.removeProperty(t),MS(this,t));return a===s?null:a===r&&s===i?n:n=e(r=a,i=s)}}(t,i)).on("end.style."+t,fN(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var i,n,a;return function(){var s=MS(this,t),o=r(this),c=o+"";return null==o&&(this.style.removeProperty(t),c=o=MS(this,t)),s===c?null:s===i&&c===n?a:(n=c,a=e(i=s,o))}}(t,i,eN(this,"style."+t,e))).each(function(t,e){var r,i,n,a,s="style."+e,o="end."+s;return function(){var c=ZL(this,t),l=c.on,u=null==c.value[s]?a||(a=fN(e)):void 0;l===r&&n===u||(i=(r=l).copy()).on(o,n=u),c.on=i}}(this._id,t)):this.styleTween(t,function(t,e,r){var i,n,a=r+"";return function(){var s=MS(this,t);return s===a?null:s===i?n:n=e(i=s,r)}}(t,i,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,r){var i,n;function a(){var a=e.apply(this,arguments);return a!==n&&(i=(n=a)&&function(t,e,r){return function(i){this.style.setProperty(t,e.call(this,i),r)}}(t,a,r)),i}return a._value=e,a}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(eN(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function i(){var i=t.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var i,n=jL(this.node(),r).tween,a=0,s=n.length;a<s;++a)if((i=n[a]).name===t)return i.value;return null}return this.each((null==e?qL:tN)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?dN:hN)(e,t)):jL(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?gN:pN)(e,t)):jL(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){ZL(this,t).ease=e}}(e,t)):jL(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;ZL(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,i=r._id,n=r.size();return new Promise(function(a,s){var o={value:s},c={value:function(){0===--n&&a()}};r.each(function(){var r=ZL(this,i),n=r.on;n!==t&&((e=(t=n).copy())._.cancel.push(o),e._.interrupt.push(o),e._.end.push(c)),r.on=e}),0===n&&a()})},[Symbol.iterator]:BN[Symbol.iterator]};const QN=t=>+t;function UN(t){return--t*t*t+1}var FN={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function IN(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}dR.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,i,n,a=t.__transition,s=!0;if(a){for(n in e=null==e?null:e+"",a)(r=a[n]).name===e?(i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[n]):s=!1;s&&delete t.__transition}}(this,t)})},dR.prototype.transition=function(t){var e,r;t instanceof yN?(e=t._id,t=t._name):(e=vN(),(r=FN).time=VL(),t=null==t?null:t+"");for(var i=this._groups,n=i.length,a=0;a<n;++a)for(var s,o=i[a],c=o.length,l=0;l<c;++l)(s=o[l])&&JL(s,t,e,l,o,r||IN(s,e));return new yN(i,this._parents,t,e)};const AN=Math.PI,CN=2*AN,xN=1e-6,EN=CN-xN;function wN(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class SN{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?wN:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return wN;const r=10**e;return function(t){this._+=t[0];for(let e=1,i=t.length;e<i;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,i){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,e,r,i,n,a){this._append`C${+t},${+e},${+r},${+i},${this._x1=+n},${this._y1=+a}`}arcTo(t,e,r,i,n){if(t=+t,e=+e,r=+r,i=+i,(n=+n)<0)throw new Error(`negative radius: ${n}`);let a=this._x1,s=this._y1,o=r-t,c=i-e,l=a-t,u=s-e,d=l*l+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>xN)if(Math.abs(u*o-c*l)>xN&&n){let h=r-a,g=i-s,p=o*o+c*c,m=h*h+g*g,f=Math.sqrt(p),b=Math.sqrt(d),y=n*Math.tan((AN-Math.acos((p+d-m)/(2*f*b)))/2),v=y/b,B=y/f;Math.abs(v-1)>xN&&this._append`L${t+v*l},${e+v*u}`,this._append`A${n},${n},0,0,${+(u*h>l*g)},${this._x1=t+B*o},${this._y1=e+B*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,i,n,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(i),o=r*Math.sin(i),c=t+s,l=e+o,u=1^a,d=a?i-n:n-i;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>xN||Math.abs(this._y1-l)>xN)&&this._append`L${c},${l}`,r&&(d<0&&(d=d%CN+CN),d>EN?this._append`A${r},${r},0,1,${u},${t-s},${e-o}A${r},${r},0,1,${u},${this._x1=c},${this._y1=l}`:d>xN&&this._append`A${r},${r},0,${+(d>=AN)},${u},${this._x1=t+r*Math.cos(n)},${this._y1=e+r*Math.sin(n)}`)}rect(t,e,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function RN(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),i=t.slice(0,r);return[i.length>1?i[0]+i.slice(2):i,+t.slice(r+1)]}function LN(t){return(t=RN(Math.abs(t)))?t[1]:NaN}var NN,MN=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function DN(t){if(!(e=MN.exec(t)))throw new Error("invalid format: "+t);var e;return new kN({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function kN(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function TN(t,e){var r=RN(t,e);if(!r)return t+"";var i=r[0],n=r[1];return n<0?"0."+new Array(-n).join("0")+i:i.length>n+1?i.slice(0,n+1)+"."+i.slice(n+1):i+new Array(n-i.length+2).join("0")}DN.prototype=kN.prototype,kN.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var HN={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>TN(100*t,e),r:TN,s:function(t,e){var r=RN(t,e);if(!r)return NN=void 0,t.toPrecision(e);var i=r[0],n=r[1],a=n-(NN=3*Math.max(-8,Math.min(8,Math.floor(n/3))))+1,s=i.length;return a===s?i:a>s?i+new Array(a-s+1).join("0"):a>0?i.slice(0,a)+"."+i.slice(a):"0."+new Array(1-a).join("0")+RN(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function VN(t){return t}var $N,_N,zN,GN=Array.prototype.map,YN=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function XN(t){var e,r,i=void 0===t.grouping||void 0===t.thousands?VN:(e=GN.call(t.grouping,Number),r=t.thousands+"",function(t,i){for(var n=t.length,a=[],s=0,o=e[0],c=0;n>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),a.push(t.substring(n-=o,n+o)),!((c+=o+1)>i));)o=e[s=(s+1)%e.length];return a.reverse().join(r)}),n=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",o=void 0===t.numerals?VN:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(GN.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function d(t,e){var r=(t=DN(t)).fill,d=t.align,h=t.sign,g=t.symbol,p=t.zero,m=t.width,f=t.comma,b=t.precision,y=t.trim,v=t.type;"n"===v?(f=!0,v="g"):HN[v]||(void 0===b&&(b=12),y=!0,v="g"),(p||"0"===r&&"="===d)&&(p=!0,r="0",d="=");var B=(e&&void 0!==e.prefix?e.prefix:"")+("$"===g?n:"#"===g&&/[boxX]/.test(v)?"0"+v.toLowerCase():""),Q=("$"===g?a:/[%p]/.test(v)?c:"")+(e&&void 0!==e.suffix?e.suffix:""),U=HN[v],F=/[defgprs%]/.test(v);function I(t){var e,n,a,c=B,g=Q;if("c"===v)g=U(t)+g,t="";else{var I=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:U(Math.abs(t),b),y&&(t=function(t){t:for(var e,r=t.length,i=1,n=-1;i<r;++i)switch(t[i]){case".":n=e=i;break;case"0":0===n&&(n=i),e=i;break;default:if(!+t[i])break t;n>0&&(n=0)}return n>0?t.slice(0,n)+t.slice(e+1):t}(t)),I&&0===+t&&"+"!==h&&(I=!1),c=(I?"("===h?h:l:"-"===h||"("===h?"":h)+c,g=("s"!==v||isNaN(t)||void 0===NN?"":YN[8+NN/3])+g+(I&&"("===h?")":""),F)for(e=-1,n=t.length;++e<n;)if(48>(a=t.charCodeAt(e))||a>57){g=(46===a?s+t.slice(e+1):t.slice(e))+g,t=t.slice(0,e);break}}f&&!p&&(t=i(t,1/0));var A=c.length+t.length+g.length,C=A<m?new Array(m-A+1).join(r):"";switch(f&&p&&(t=i(C+t,C.length?m-g.length:1/0),C=""),d){case"<":t=c+t+g+C;break;case"=":t=c+C+t+g;break;case"^":t=C.slice(0,A=C.length>>1)+c+t+g+C.slice(A);break;default:t=C+c+t+g}return o(t)}return b=void 0===b?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),I.toString=function(){return t+""},I}return{format:d,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor(LN(e)/3))),i=Math.pow(10,-r),n=d(((t=DN(t)).type="f",t),{suffix:YN[8+r/3]});return function(t){return n(i*t)}}}}$N=XN({thousands:",",grouping:[3],currency:["$",""]}),_N=$N.format,zN=$N.formatPrefix;var ON=Math.random,WN=function t(e){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return e()*r+t}}return r.source=t,r}(ON),KN=function t(e){function r(t,r){var i,n;return t=null==t?0:+t,r=null==r?1:+r,function(){var a;if(null!=i)a=i,i=null;else do{i=2*e()-1,a=2*e()-1,n=i*i+a*a}while(!n||n>1);return t+r*a*Math.sqrt(-2*Math.log(n)/n)}}return r.source=t,r}(ON);const JN=1/4294967296;function PN(t=Math.random()){let e=0|(0<=t&&t<1?t/JN:Math.abs(t));return()=>(e=1664525*e+1013904223|0,JN*(e>>>0))}function ZN(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function jN(t){return+t}var qN=[0,1];function tM(t){return t}function eM(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function rM(t,e,r){var i=t[0],n=t[1],a=e[0],s=e[1];return n<i?(i=eM(n,i),a=r(s,a)):(i=eM(i,n),a=r(a,s)),function(t){return a(i(t))}}function iM(t,e,r){var i=Math.min(t.length,e.length)-1,n=new Array(i),a=new Array(i),s=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<i;)n[s]=eM(t[s],t[s+1]),a[s]=r(e[s],e[s+1]);return function(e){var r=Mw(t,e,1,i)-1;return a[r](n[r](e))}}function nM(){var t,e,r,i,n,a,s=qN,o=qN,c=BL,l=tM;function u(){var t=Math.min(s.length,o.length);return l!==tM&&(l=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(s[0],s[t-1])),i=t>2?iM:rM,n=a=null,d}function d(e){return null==e||isNaN(e=+e)?r:(n||(n=i(s.map(t),o,c)))(t(l(e)))}return d.invert=function(r){return l(e((a||(a=i(o,s.map(t),mL)))(r)))},d.domain=function(t){return arguments.length?(s=Array.from(t,jN),u()):s.slice()},d.range=function(t){return arguments.length?(o=Array.from(t),u()):o.slice()},d.rangeRound=function(t){return o=Array.from(t),c=QL,u()},d.clamp=function(t){return arguments.length?(l=!!t||tM,u()):l!==tM},d.interpolate=function(t){return arguments.length?(c=t,u()):c},d.unknown=function(t){return arguments.length?(r=t,d):r},function(r,i){return t=r,e=i,u()}}function aM(t,e,r,i){var n,a=function(t,e,r){r=+r;const i=(e=+e)<(t=+t),n=i?Vw(e,t,r):Vw(t,e,r);return(i?-1:1)*(n<0?1/-n:n)}(t,e,r);switch((i=DN(null==i?",f":i)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(n=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(LN(e)/3)))-LN(Math.abs(t)))}(a,s))||(i.precision=n),zN(i,s);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(n=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,LN(e)-LN(t))+1}(a,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=n-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(n=function(t){return Math.max(0,-LN(Math.abs(t)))}(a))||(i.precision=n-2*("%"===i.type))}return _N(i)}function sM(t){var e=t.domain;return t.ticks=function(t){var r=e();return function(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const i=e<t,[n,a,s]=i?Hw(e,t,r):Hw(t,e,r);if(!(a>=n))return[];const o=a-n+1,c=new Array(o);if(i)if(s<0)for(let t=0;t<o;++t)c[t]=(a-t)/-s;else for(let t=0;t<o;++t)c[t]=(a-t)*s;else if(s<0)for(let t=0;t<o;++t)c[t]=(n+t)/-s;else for(let t=0;t<o;++t)c[t]=(n+t)*s;return c}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var i=e();return aM(i[0],i[i.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var i,n,a=e(),s=0,o=a.length-1,c=a[s],l=a[o],u=10;for(l<c&&(n=c,c=l,l=n,n=s,s=o,o=n);u-- >0;){if((n=Vw(c,l,r))===i)return a[s]=c,a[o]=l,e(a);if(n>0)c=Math.floor(c/n)*n,l=Math.ceil(l/n)*n;else{if(!(n<0))break;c=Math.ceil(c*n)/n,l=Math.floor(l*n)/n}i=n}return t},t}function oM(){var t=nM()(tM,tM);return t.copy=function(){return e=t,oM().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},ZN.apply(t,arguments),sM(t)}function cM(t){return function(){return t}}function lM(t){this._context=t}function uM(t){return new lM(t)}function dM(t){return t[0]}function hM(t){return t[1]}function gM(t,e){var r=cM(!0),i=null,n=uM,a=null,s=function(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new SN(e)}(o);function o(o){var c,l,u,d=(o=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(o)).length,h=!1;for(null==i&&(a=n(u=s())),c=0;c<=d;++c)!(c<d&&r(l=o[c],c,o))===h&&((h=!h)?a.lineStart():a.lineEnd()),h&&a.point(+t(l,c,o),+e(l,c,o));if(u)return a=null,u+""||null}return t="function"==typeof t?t:void 0===t?dM:cM(t),e="function"==typeof e?e:void 0===e?hM:cM(e),o.x=function(e){return arguments.length?(t="function"==typeof e?e:cM(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:cM(+t),o):e},o.defined=function(t){return arguments.length?(r="function"==typeof t?t:cM(!!t),o):r},o.curve=function(t){return arguments.length?(n=t,null!=i&&(a=n(i)),o):n},o.context=function(t){return arguments.length?(null==t?i=a=null:a=n(i=t),o):i},o}function pM(t,e,r){this.k=t,this.x=e,this.y=r}lM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},pM.prototype={constructor:pM,scale:function(t){return 1===t?this:new pM(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new pM(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},pM.prototype;class mM extends Ew{getComputedStyleValue(t){return getComputedStyle(this).getPropertyValue(t).trim()}static get greys(){const t="#999999",e={white:"#ffffff"};return e.light75=dL(t,"#ffffff")(.75),e.light50=dL(t,"#ffffff")(.5),e.light25=dL(t,"#ffffff")(.25),e.grey=t,e.dark25=dL(t,"#000000")(.25),e.dark50=dL(t,"#000000")(.5),e.dark75=dL(t,"#000000")(.75),e.black="#000000",e}static get shadows(){return{elevations:[0,2,4,8,16],baselineColor:"#000000",baselineColorString:"0, 0, 0",inverseBaselineColor:"#FFFFFF",inverseBaselineColorString:"255, 255, 255",opacityUmbra:.2,opacityPenumbra:.14,opacityAmbient:.12,opacityBoost:.2,mapUmbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:3,b:1,s:-2},4:{x:0,y:2,b:4,s:-1},8:{x:0,y:5,b:5,s:-3},16:{x:0,y:8,b:10,s:-5}},mapPenumbra:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:2,b:2,s:0},4:{x:0,y:4,b:5,s:0},8:{x:0,y:8,b:10,s:1},16:{x:0,y:16,b:24,s:2}},mapAmbient:{0:{x:0,y:0,b:0,s:0},2:{x:0,y:1,b:5,s:0},4:{x:0,y:1,b:10,s:0},8:{x:0,y:3,b:14,s:2},16:{x:0,y:6,b:30,s:5}}}}static cssBoxShadow(t,e=!1){const r=this.shadows.opacityUmbra+this.shadows.opacityBoost,i=this.shadows.opacityPenumbra+this.shadows.opacityBoost,n=this.shadows.opacityAmbient+this.shadows.opacityBoost,a=e?`rgba(${this.shadows.inverseBaselineColorString}, ${r})`:`rgba(${this.shadows.baselineColorString}, ${r})`,s=e?`rgba(${this.shadows.inverseBaselineColorString}, ${i})`:`rgba(${this.shadows.baselineColorString}, ${i})`,o=e?`rgba(${this.shadows.inverseBaselineColorString}, ${n})`:`rgba(${this.shadows.baselineColorString}, ${n})`,c=this.shadows.mapUmbra[t],l=this.shadows.mapPenumbra[t],u=this.shadows.mapAmbient[t];return`${`${c.y/2}px ${c.y}px ${c.b}px ${c.s}px`} ${a}, ${`${l.y/2}px ${l.y}px ${l.b}px ${l.s}px`} ${s}, ${`${u.y/2}px ${u.y}px ${u.b}px ${u.s}px`} ${o}`}static get svgFilters(){const t=mM.shadows,e=t.elevations.map(e=>cw`
        <filter id=${`shadow-${e}`} filterUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${t.mapUmbra[e].y/2} dy=${t.mapUmbra[e].y} />
          <feOffset in="solid" result="offP" dx=${t.mapPenumbra[e].y/2} dy=${t.mapPenumbra[e].y} />
          <feOffset in="solid" result="offA" dx=${t.mapAmbient[e].y/2} dy=${t.mapAmbient[e].y} />
          ${0===t.mapUmbra[e].s?cw``:cw`<feMorphology in="offU" result="spreadU" operator=${t.mapUmbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapUmbra[e].s)} />`}
          ${0===t.mapPenumbra[e].s?cw``:cw`<feMorphology in="offP" result="spreadP" operator=${t.mapPenumbra[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapPenumbra[e].s)} />`}
          ${0===t.mapAmbient[e].s?cw``:cw`<feMorphology in="offA" result="spreadA" operator=${t.mapAmbient[e].s>0?"dilate":"erode"} radius=${Math.abs(t.mapAmbient[e].s)} />`}
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
        </filter>`);return cw`
      <defs class="filtersUser">
        ${e}
      </defs>
    `}static get styles(){return FE`
      :host {
        ---shadow-0: var(--shadow-0, ${UE(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${UE(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${UE(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${UE(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${UE(this.greys.white)});
        ---color-border: var(--color-border, ${UE(this.greys.light75)});
        ---color-text: var(--color-text, ${UE(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${UE(this.greys.white)});
        ---color-link: var(--color-link, ${UE(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${UE(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${UE(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${UE(this.greys.dark25)});
        ---color-element-selected: var(--color-element-selected, ${UE(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${UE(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${UE(this.greys.dark75)});

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
    `}}var fM={a:"#e41a1c",z:"#377eb8",v:"#ff7f00",t0:"#f781bf",s:"#999999",left:"#f032e6",right:"#10dbc9",correct:"#4daf4a",error:"#984ea3",nr:"#cccccc"};class bM extends mM{static get properties(){return{interactive:{attribute:"interactive",type:Boolean,reflect:!0}}}constructor(){super(),this.interactive=!1}static get colors(){return fM}static get lights(){return Object.keys(bM.colors).reduce((t,e)=>(t[e]=dL(bM.colors[e],"#ffffff")(.5),t),{})}static get darks(){return Object.keys(bM.colors).reduce((t,e)=>(t[e]=dL(bM.colors[e],"#000000")(.5),t),{})}static get styles(){return[super.styles,FE`
        :host {
          /* Declare base colors */
          ${UE(Object.keys(bM.colors).map(t=>`---color-${t}: var(--color-${t}, ${this.colors[t]});`).join("\n"))}

          /* Declare light colors */
          ${UE(Object.keys(bM.colors).map(t=>`---color-${t}-light: var(--color-${t}-light, ${this.lights[t]});`).join("\n"))}

          /* Declare dark colors */
          ${UE(Object.keys(bM.colors).map(t=>`---color-${t}-dark: var(--color-${t}-dark, ${this.darks[t]});`).join("\n"))}
        }
      `]}}customElements.define("decidables-button",class extends mM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yM=t=>t??dw;customElements.define("decidables-slider",class extends mM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},scale:{attribute:"scale",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0},nonlinear:{attribute:!1,type:Boolean,reflect:!1}}}constructor(){super(),this.disabled=!1,this.scale=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0,this.nonlinear=!1,this.rangeMax=void 0,this.rangeMin=void 0,this.rangeStep=void 0,this.rangeValue=void 0,this.toRange=void 0,this.fromRange=void 0}nonlinearRange(t,e,r){this.nonlinear=t,this.toRange=t?e:void 0,this.fromRange=t?r:void 0}rangeChanged(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0}))}rangeInputted(t){this.value=this.nonlinear?this.fromRange(t.target.value):t.target.value}spinnerInputted(t){this.value=t.target.value}willUpdate(){this.rangeMax=void 0===this.max?void 0:this.nonlinear?this.toRange(this.max):this.max,this.rangeMin=void 0===this.min?void 0:this.nonlinear?this.toRange(this.min):this.min,this.rangeStep=void 0===this.step?void 0:this.nonlinear?"any":this.step,this.rangeValue=void 0===this.value?void 0:this.nonlinear?this.toRange(this.value):this.value}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${yM(this.rangeMin)} max=${yM(this.rangeMax)} step=${yM(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale?ow`
            <div class="datalist">
              <div class="option">${yM(this.max)}</div>
              <div class="option">${yM(this.min)}</div>
            </div>
          `:ow``}
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${yM(this.min)} max=${yM(this.max)} step=${yM(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `}});customElements.define("decidables-switch",class extends mM{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0}))}static get styles(){return[super.styles,FE`
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
        `]}render(){return ow`
      <input type="checkbox" id="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changed.bind(this)}>
      <label for="switch">
        <slot name="off-label"></slot>
      </label>
      <label for="switch">
        <slot></slot>
      </label>
    `}});customElements.define("decidables-toggle",class extends mM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `}});customElements.define("decidables-toggle-option",class extends mM{static get properties(){return{checked:{attribute:"checked",type:Boolean,reflect:!0},disabled:{attribute:"disabled",type:Boolean,reflect:!0},name:{attribute:"name",type:String,reflect:!0},value:{attribute:"value",type:String,reflect:!0}}}constructor(){super(),this.checked=!1,this.disabled=!1,this.name=void 0,this.value=void 0}changed(t){this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0}))}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <input type="radio" id="toggle-option" name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for="toggle-option">
        <slot></slot>
      </label>
    `}});customElements.define("accumulable-control",class extends bM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},resample:{attribute:"resample",type:Boolean,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},run:{attribute:"run",type:Boolean,reflect:!0},pause:{attribute:"pause",type:Boolean,reflect:!0},reset:{attribute:"reset",type:Boolean,reflect:!0},state:{attribute:!1,type:String,reflect:!1}}}constructor(){super(),this.trials=void 0,this.resample=!1,this.duration=void 0,this.coherence=void 0,this.colors=["none","measure","outcome","all"],this.color=void 0,this.run=!1,this.pause=!1,this.reset=!1,this.states=["resetted","running","paused","ended"],this.state="resetted"}setTrials(t){this.trials=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-trials",{detail:{trials:this.trials},bubbles:!0}))}doResample(){this.dispatchEvent(new CustomEvent("accumulable-control-resample",{detail:{},bubbles:!0}))}setDuration(t){this.duration=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-duration",{detail:{duration:this.duration},bubbles:!0}))}setCoherence(t){this.coherence=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-coherence",{detail:{coherence:this.coherence},bubbles:!0}))}chooseColor(t){this.color=t.target.value,this.dispatchEvent(new CustomEvent("accumulable-control-color",{detail:{color:this.color},bubbles:!0}))}doRun(){this.state="running",this.dispatchEvent(new CustomEvent("accumulable-control-run",{detail:{},bubbles:!0}))}doPause(){this.state="paused",this.dispatchEvent(new CustomEvent("accumulable-control-pause",{detail:{},bubbles:!0}))}doReset(){this.state="resetted",this.dispatchEvent(new CustomEvent("accumulable-control-reset",{detail:{},bubbles:!0}))}complete(){this.state="ended"}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <div class="holder">
        ${null!=this.trials?ow`<decidables-slider class="trials" min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`:ow``}
        ${this.resample?ow`
            <div class="buttons">
              ${this.resample?ow`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`:ow``}
            </div>
          `:ow``}
        ${null!=this.duration?ow`<decidables-slider class="duration" min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`:ow``}
        ${null!=this.coherence?ow`<decidables-slider class="coherence" min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`:ow``}
        ${null!=this.color?ow`
            <decidables-toggle class="color" @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${"none"===this.color}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${"measure"===this.color}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${"outcome"===this.color}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${"all"===this.color}>All</decidables-toggle-option>
            </decidables-toggle>
          `:ow``}
        ${this.run||this.pause||this.reset?ow`
            <div class="buttons">
              ${this.run?ow`<decidables-button name="run" ?disabled=${"running"===this.state||"ended"===this.state} @click=${this.doRun.bind(this)}>Run</decidables-button>`:ow``}
              ${this.pause?ow`<decidables-button name="pause" ?disabled=${"running"!==this.state} @click=${this.doPause.bind(this)}>Pause</decidables-button>`:ow``}
              ${this.reset?ow`<decidables-button name="reset" ?disabled=${"resetted"===this.state} @click=${this.doReset.bind(this)}>Reset</decidables-button>`:ow``}
            </div>
          `:ow``}
      </div>`}});class vM{static s={DEFAULT:1};static a={DEFAULT:1.2,MIN:.01,MAX:2,STEP:.01,JUMP:.1};static z={DEFAULT:.55,MIN:.01,MAX:.99,STEP:.01,JUMP:.1};static v={DEFAULT:1.5,MIN:.01,MAX:5,STEP:.01,JUMP:.1};static t0={DEFAULT:150,MIN:0,MAX:500,STEP:1,JUMP:10};static trials2stats(t){const e={},r=t.reduce((t,e)=>{switch(e.outcome){case"correct":t.correctCount+=1,t.correctRTSum+=e.rt;break;case"error":t.errorCount+=1,t.errorRTSum+=e.rt;break;case"nr":t.nrCount+=1}return t},{correctCount:0,errorCount:0,nrCount:0,correctRTSum:0,errorRTSum:0});e.correctCount=r.correctCount,e.errorCount=r.errorCount,e.nrCount=r.nrCount,e.accuracy=r.correctCount/(r.correctCount+r.errorCount+r.nrCount),e.correctMeanRT=r.correctRTSum/r.correctCount,e.errorMeanRT=r.errorRTSum/r.errorCount,e.meanRT=(r.correctRTSum+r.errorRTSum)/(r.correctCount+r.errorCount);const i=t.reduce((t,r)=>{switch(r.outcome){case"correct":t.ss+=(r.rt-e.meanRT)**2,t.correctSS+=(r.rt-e.correctMeanRT)**2;break;case"error":t.ss+=(r.rt-e.meanRT)**2,t.errorSS+=(r.rt-e.errorMeanRT)**2}return t},{ss:0,correctSS:0,errorSS:0});return e.correctSDRT=e.correctCount>1?Math.sqrt(i.correctSS/(e.correctCount-1)):NaN,e.errorSDRT=e.errorCount>1?Math.sqrt(i.errorSS/(e.errorCount-1)):NaN,e.sdRT=e.correctCount+e.errorCount>1?Math.sqrt(i.ss/(e.correctCount+e.errorCount-1)):NaN,e}static azv2pE(t,e,r,i=vM.s.DEFAULT){const n=t*e,a=Math.exp(-2*r*t/i**2);return(a-Math.exp(-2*r*n/i**2))/(a-1)}static azv2pC(t,e,r,i=vM.s.DEFAULT){return vM.azv2pE(t,1-e,-r,i)}static azvt02m(t,e,r,i,n=vM.s.DEFAULT){const a=t*e,s=Math.exp(-2*r*t/n**2)-1;return i+1e3*(-a/r+t/r*((Math.exp(-2*r*a/n**2)-1)/s))}static azv2sd(t,e,r,i=vM.s.DEFAULT){const n=t*e,a=Math.exp(-2*r*t/i**2)-1,s=Math.exp(-2*r*n/i**2)-1,o=(-r*t**2*(s+4)*s/a**2+((-3*r*t**2+4*r*n*t+i**2*t)*s+4*r*n*t)/a-i**2*n)/r**3;return 1e3*Math.sqrt(o)}static azvt02mE(t,e,r,i,n=vM.s.DEFAULT){function a(t,e){return Math.exp(2*r*e/n**2)-Math.exp(2*r*t/n**2)}const s=t*e;return i+1e3*((s*(a(s-t,t)+a(0,s))+2*t*a(s,0))/(r*a(s,t)*a(-t,0)))}static azv2sdE(t,e,r,i=vM.s.DEFAULT){function n(t,e){return Math.exp(2*r*e/i**2)-Math.exp(2*r*t/i**2)}const a=t*e,s=-2*t*n(0,a)*(2*r*t*n(a,2*t)+i**2*n(0,t)*n(a,t))*Math.exp(2*r*t/i**2)/(r**3*n(0,t)**2*n(a,t)**2)+(4*r*a*(2*t-a)*Math.exp(2*r*(a+t)/i**2)+a*i**2*n(2*a,2*t))/(r**3*n(a,t)**2);return 1e3*Math.sqrt(s)}static azvt02mC(t,e,r,i,n=vM.s.DEFAULT){return vM.azvt02mE(t,1-e,-r,i,n)}static azv2sdC(t,e,r,i=vM.s.DEFAULT){return vM.azv2sdE(t,1-e,-r,i)}static tazv2gE(t,e,r,i,n=vM.s.DEFAULT){if(!t)return 0;const a=e*r,s=Math.PI*n**2/e**2*Math.exp(-a*i/n**2);let o=0,c=0;do{o+=1;c+=o*Math.sin(Math.PI*a*o/e)*Math.exp(-.5*(i**2/n**2+Math.PI**2*o**2*n**2/e**2)*t)}while(o<200);return s*c}static tazv2gC(t,e,r,i,n=vM.s.DEFAULT){return vM.tazv2gE(t,e,1-r,-i,n)}static data2ez({accuracy:t,sdRT:e,meanRT:r,s:i}){function n(t){return Math.log(t/(1-t))}const a=(e/1e3)**2,s=r/1e3,o=i**2,c=n(t),l=c*(c*t**2-c*t+t-.5)/a,u=function(t){return t>0?1:0===t?0:-1}(t-.5)*i*l**(1/4),d=o*n(t)/u,h=-u*d/o,g=d/(2*u)*(1-Math.exp(h))/(1+Math.exp(h));return{v:u,a:d,t0:1e3*(s?s-g:null),s:i}}static data2ez2(){throw new Error("data2ez2 is not implemented!")}}customElements.define("accumulable-response",class extends bM{static get properties(){return{feedback:{attribute:"feedback",type:Boolean,reflect:!0},trial:{attribute:"trial",type:Boolean,reflect:!0},payoff:{attribute:"payoff",type:String,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0},state:{attribute:!1,type:String,reflect:!1},trialCount:{attribute:!1,type:Number,reflect:!1},trialTotal:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.feedback=!1,this.trial=!1,this.payoffs=["none","trial","total"],this.payoff="none",this.correctPayoff=0,this.errorPayoff=0,this.nrPayoff=0,this.states=["off","waiting","feedback"],this.state="off",this.trialCount=0,this.trialTotal=0,this.signals=["left","right"],this.signal=void 0,this.responses=["left","right"],this.response=void 0,this.outcomes=["correct","error","nr"],this.outcome=void 0,this.startTime=void 0,this.rt=void 0,this.data={},this.trials=[],this.alignState()}get trialPayoff(){switch(this.outcome){case"correct":return this.correctPayoff;case"error":return this.errorPayoff;case"nr":return this.nrPayoff;default:return}}get totalPayoff(){return this.data.correctCount*this.correctPayoff+this.data.errorCount*this.errorPayoff+this.data.nrCount*this.nrPayoff}alignState(){this.data=vM.trials2stats(this.trials)}start(t,e){this.startTime=Date.now(),this.trialCount=e,this.state="waiting",this.signal=t,this.response=void 0,this.outcome=void 0,this.rt=void 0}stop(){this.state="feedback",void 0===this.response&&(this.outcome="nr",this.rt=void 0,this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState())}left(){this.responded("left")}right(){this.responded("right")}responded(t){this.rt=Date.now()-this.startTime,this.state="feedback",this.response=t,this.signal===this.response?this.outcome="correct":this.signal!==this.response&&(this.outcome="error"),this.trials.push({trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff}),this.alignState(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{trial:this.trialCount,rt:this.rt,signal:this.signal,response:this.response,outcome:this.outcome,payoff:this.trialPayoff,data:this.data,totalPayoff:this.totalPayoff},bubbles:!0}))}reset(){this.state="off",this.trialCount=0,this.rt=void 0,this.signal=void 0,this.response=void 0,this.outcome=void 0,this.trials=[],this.alignState()}keydown(t){"waiting"===this.state&&("ArrowLeft"===t.key?(this.responded("left"),t.preventDefault()):"ArrowRight"===t.key&&(this.responded("right"),t.preventDefault()))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keydown.bind(this))}disconnectedCallback(){window.removeEventListener("keydown",this.keydown.bind(this)),super.disconnectedCallback()}static get styles(){return[super.styles,FE`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);return ow`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${"response "+("feedback"===this.state&&"left"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${"response "+("feedback"===this.state&&"right"===this.response?"selected":"waiting"===this.state?"waiting":"")} ?disabled=${"waiting"!==this.state||!0!==this.interactive} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${this.trial||this.feedback||"total"===this.payoff?ow`
            <div class="feedbacks">
              ${this.trial?ow`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`:ow``}
              ${this.feedback?ow`
                  <div class=${`feedback ${"feedback"===this.state&&this.feedback?this.outcome:""}`}>
                    ${"feedback"===this.state&&this.feedback?"correct"===this.outcome?ow`<span class="outcome">Correct</span>`:"error"===this.outcome?ow`<span class="outcome">Error</span>`:ow`<span class="outcome">No<br>Response</span>`:""}
                    ${"feedback"!==this.state||"trial"!==this.payoff&&"total"!==this.payoff?ow``:ow`<span class="payoff">${e(this.trialPayoff)}</span>`}
                  </div>`:ow``}
              ${"total"===this.payoff?ow`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${e(this.totalPayoff)}</span>
                  </div>`:ow``}
            </div>`:ow``}
      </div>`}});customElements.define("decidables-spinner",class extends mM{static get properties(){return{disabled:{attribute:"disabled",type:Boolean,reflect:!0},max:{attribute:"max",type:Number,reflect:!0},min:{attribute:"min",type:Number,reflect:!0},step:{attribute:"step",type:Number,reflect:!0},value:{attribute:"value",type:Number,reflect:!0}}}constructor(){super(),this.disabled=!1,this.max=void 0,this.min=void 0,this.step=void 0,this.value=void 0}inputted(t){this.value=t.target.value}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${yM(this.min)} max=${yM(this.max)} step=${yM(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `}});function BM(t,e,r){var i=e,n=function(t){return atob(t)}(t),a=n.indexOf("\n",10)+1,s=n.substring(a)+"//# sourceMappingURL="+i,o=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(o)}function QM(t,e,r){var i;return function(r){return i=i||BM(t,e),new Worker(i,r)}}customElements.define("accumulable-table",class extends bM{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0},summary:{attribute:"summary",type:Boolean,reflect:!0},color:{attribute:"color",type:String,reflect:!0},correctCount:{attribute:"correct-count",type:Number,reflect:!0},errorCount:{attribute:"error-count",type:Number,reflect:!0},nrCount:{attribute:"nr-count",type:Number,reflect:!0},accuracy:{attribute:"accuracy",type:Number,reflect:!0},correctMeanRT:{attribute:"correct-mean-rt",type:Number,reflect:!0},errorMeanRT:{attribute:"error-mean-rt",type:Number,reflect:!0},meanRT:{attribute:"mean-rt",type:Number,reflect:!0},correctSDRT:{attribute:"correct-sd-rt",type:Number,reflect:!0},errorSDRT:{attribute:"error-sd-rt",type:Number,reflect:!0},sdRT:{attribute:"sd-rt",type:Number,reflect:!0},payoff:{attribute:"payoff",type:Boolean,reflect:!0},correctPayoff:{attribute:"correct-payoff",type:Number,reflect:!0},errorPayoff:{attribute:"error-payoff",type:Number,reflect:!0},nrPayoff:{attribute:"no-response-payoff",type:Number,reflect:!0}}}constructor(){super(),this.numeric=!1,this.summary=!1,this.colors=["none","measure","outcome","all"],this.color="all",this.payoff=!1,this.correctPayoff=void 0,this.errorPayoff=void 0,this.nrPayoff=void 0,this.correctCount=NaN,this.errorCount=NaN,this.nrCount=NaN,this.accuracy=NaN,this.correctMeanRT=NaN,this.errorMeanRT=NaN,this.meanRT=NaN,this.correctSDRT=NaN,this.errorSDRT=NaN,this.sdRT=NaN}sendEvent(){this.dispatchEvent(new CustomEvent("accumulable-table-change",{detail:{correctCount:this.correctCount,errorCount:this.errorCount,nrCount:this.nrCount,accuracy:this.accuracy,correctMeanRT:this.correctMeanRT,errorMeanRT:this.errorMeanRT,meanRT:this.meanRT,correctSDRT:this.correctSDRT,errorSDRT:this.errorSDRT,sdRT:this.sdRT},bubbles:!0}))}correctCountInput(t){this.correctCount=parseInt(t.target.value,10),this.sendEvent()}errorCountInput(t){this.errorCount=parseInt(t.target.value,10),this.sendEvent()}accuracyInput(t){this.accuracy=parseFloat(t.target.value),this.sendEvent()}correctMeanRTInput(t){this.correctMeanRT=parseFloat(t.target.value),this.sendEvent()}errorMeanRTInput(t){this.errorMeanRT=parseFloat(t.target.value),this.sendEvent()}meanRTInput(t){this.meanRT=parseFloat(t.target.value),this.sendEvent()}correctSDRTInput(t){this.correctSDRT=parseFloat(t.target.value),this.sendEvent()}errorSDRTInput(t){this.errorSDRT=parseFloat(t.target.value),this.sendEvent()}sdRTInput(t){this.sdRT=parseFloat(t.target.value),this.sendEvent()}static get styles(){return[super.styles,FE`
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
      `]}render(){const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),e=e=>t.formatToParts(e).map(({type:t,value:e})=>"minusSign"===t?"−":e).reduce((t,e)=>t+e);let r,i,n,a,s,o,c,l,u;return this.numeric?(r=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff?ow`<span class="payoff">${e(this.correctPayoff)}</span>`:ow``}
        </decidables-spinner>
      `,i=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff?ow`<span class="payoff">${e(this.errorPayoff)}</span>`:ow``}
        </decidables-spinner>
      `,n=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `,a=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `,s=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `,o=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `,c=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `,l=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `,u=ow`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `):(r=ow`<span>Correct Count</span>
        ${this.payoff?ow`<span class="payoff">${e(this.correctPayoff)}</span>`:ow``}`,i=ow`<span>Error Count</span>
        ${this.payoff?ow`<span class="payoff">${e(this.errorPayoff)}</span>`:ow``}`,n=ow`<span>Accuracy</span>`,a=ow`<span>Correct Mean RT</span>`,s=ow`<span>Error Mean RT</span>`,o=ow`<span>Mean RT</span>`,c=ow`<span>Correct SD RT</span>`,l=ow`<span>Error SD RT</span>`,u=ow`<span>SD RT</span>`),ow`
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
            ${this.summary?ow`
                <th class="th th-main" scope="col">
                  Overall
                </th>`:ow``}
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
            ${this.summary?ow`
                <td class="td td-summary overall proportion-correct">
                  ${n}
                </td>`:ow``}
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
            ${this.summary?ow`
                <td class="td td-summary overall mean-rt">
                  ${o}
                </td>`:ow``}
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
            ${this.summary?ow`
                <td class="td td-summary overall sd-rt">
                  ${u}
                </td>`:ow``}
          </tr>
        </tbody>
      </table>`}});var UM=QM("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoKICAgIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIQoKICAgIE1vZGVsIHBhcmFtZXRlcnM6CiAgICAgIGEgPSBib3VuZGFyeSBzZXBhcmF0aW9uIFswLCBJbmZpbml0eSkKICAgICAgeiA9IHN0YXJ0aW5nIHBvaW50IGFzIGEgcHJvcG9ydGlvbiBvZiBhICgwLCAxKQogICAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpCiAgICAgIHQwID0gbm9uLWRlY2lzaW9uIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgKDAsIEluZmluaXR5KQogICAgICBzID0gd2l0aGluLXRyaWFsIHZhcmlhYmlsaXR5IGluIGRyaWZ0IHJhdGUgKHNeMiA9IGluZmluaXRlc2ltYWwgdmFyaWFuY2UpIFswLCBJbmZpbml0eSkKCiAgICAgIHpQcmltZSA9IHN0YXJ0aW5nIHBvaW50IG9uIGEgMC10by1hIHNjYWxlICh0eXBpY2FsbHkgdXNlZCBpbiBwdWJsaXNoZWQgZXF1YXRpb25zKSBbMCwgSW5maW5pdHkpCgogICAgQmVoYXZpb3JhbCB2YXJpYWJsZXM6CiAgICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHMKICAgICAgcEMgPSBwcm9wb3J0aW9uIG9mIGNvcnJlY3QgdHJpYWxzCiAgICAgIG0gPSBtZWFuIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgbUMgPSBtZWFuIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwgUlRzIChpbiBtaWxsaXNlY29uZHMpCiAgICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcykKICAgICAgc2RDID0gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIGNvcnJlY3QgUlRzIChpbiBtaWxsaXNlY29uZHMpCgogICAgRXF1YXRpb25zOgogICAgICBQcm9iYWJpbGl0eSBvZiBjb3JyZWN0IGFuZCBlcnJvciByZXNwb25zZXMgKEFsZXhhbmRyb3dpY3osIDIwMjApCiAgICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICAgIFN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsLCBlcnJvciwgYW5kIGNvcnJlY3QgUlRzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgICAgRGVuc2l0eSBvZiBlcnJvciBhbmQgY29ycmVjdCBSVCBkaXN0cmlidXRpb25zIChBbGV4YW5kcm93aWN6LCAyMDIwKQogICAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNykKICAqLwogIGNsYXNzIERETU1hdGggewogICAgc3RhdGljIHMgPSB7CiAgICAgIERFRkFVTFQ6IDEKICAgIH07CiAgICBzdGF0aWMgYSA9IHsKICAgICAgREVGQVVMVDogMS4yLAogICAgICBNSU46IDAuMDEsCiAgICAgIE1BWDogMi4wLAogICAgICBTVEVQOiAwLjAxLAogICAgICBKVU1QOiAwLjEKICAgIH07CiAgICBzdGF0aWMgeiA9IHsKICAgICAgREVGQVVMVDogMC41NSwKICAgICAgTUlOOiAwLjAxLAogICAgICBNQVg6IDAuOTksCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB2ID0gewogICAgICBERUZBVUxUOiAxLjUsCiAgICAgIE1JTjogMC4wMSwKICAgICAgTUFYOiA1LjAsCiAgICAgIFNURVA6IDAuMDEsCiAgICAgIEpVTVA6IDAuMQogICAgfTsKICAgIHN0YXRpYyB0MCA9IHsKICAgICAgREVGQVVMVDogMTUwLAogICAgICBNSU46IDAsCiAgICAgIE1BWDogNTAwLAogICAgICBTVEVQOiAxLAogICAgICBKVU1QOiAxMAogICAgfTsKCiAgICAvLyBDYWxjdWxhdGUgYSBidW5jaCBvZiBzdGF0aXN0aWNzIGZvciBhbiBhcnJheSBvZiB0cmlhbHMKICAgIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7CiAgICAgIGNvbnN0IHN0YXRzID0ge307CgogICAgICAvLyBGaXJzdC1vcmRlciBzdW1zCiAgICAgIGNvbnN0IHN1bXMgPSB0cmlhbHMucmVkdWNlKChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHsKICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHsKICAgICAgICAgIGNhc2UgJ2NvcnJlY3QnOgogICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ2Vycm9yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JDb3VudCArPSAxOwogICAgICAgICAgICBhY2N1bXVsYXRvci5lcnJvclJUU3VtICs9IHRyaWFsLnJ0OwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgJ25yJzoKICAgICAgICAgICAgYWNjdW11bGF0b3IubnJDb3VudCArPSAxOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIC8vIE5vLW9wCiAgICAgICAgfQogICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjsKICAgICAgfSwgewogICAgICAgIGNvcnJlY3RDb3VudDogMCwKICAgICAgICBlcnJvckNvdW50OiAwLAogICAgICAgIG5yQ291bnQ6IDAsCiAgICAgICAgY29ycmVjdFJUU3VtOiAwLAogICAgICAgIGVycm9yUlRTdW06IDAKICAgICAgfSk7CgogICAgICAvLyBGaXJzdC1vcmRlciBzdGF0cwogICAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDsKICAgICAgc3RhdHMuZXJyb3JDb3VudCA9IHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubnJDb3VudCA9IHN1bXMubnJDb3VudDsKICAgICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7CiAgICAgIHN0YXRzLmNvcnJlY3RNZWFuUlQgPSBzdW1zLmNvcnJlY3RSVFN1bSAvIHN1bXMuY29ycmVjdENvdW50OwogICAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDsKICAgICAgc3RhdHMubWVhblJUID0gKHN1bXMuY29ycmVjdFJUU3VtICsgc3Vtcy5lcnJvclJUU3VtKSAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3VtcwogICAgICBjb25zdCBzdW1zMiA9IHRyaWFscy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4gewogICAgICAgIHN3aXRjaCAodHJpYWwub3V0Y29tZSkgewogICAgICAgICAgY2FzZSAnY29ycmVjdCc6CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjsKICAgICAgICAgICAgYWNjdW11bGF0b3IuY29ycmVjdFNTICs9ICh0cmlhbC5ydCAtIHN0YXRzLmNvcnJlY3RNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAnZXJyb3InOgogICAgICAgICAgICBhY2N1bXVsYXRvci5zcyArPSAodHJpYWwucnQgLSBzdGF0cy5tZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yU1MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMuZXJyb3JNZWFuUlQpICoqIDI7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgLy8gTm8tb3AKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yOwogICAgICB9LCB7CiAgICAgICAgc3M6IDAsCiAgICAgICAgY29ycmVjdFNTOiAwLAogICAgICAgIGVycm9yU1M6IDAKICAgICAgfSk7CgogICAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHMKICAgICAgc3RhdHMuY29ycmVjdFNEUlQgPSBzdGF0cy5jb3JyZWN0Q291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmNvcnJlY3RTUyAvIChzdGF0cy5jb3JyZWN0Q291bnQgLSAxKSkgOiBOYU47CiAgICAgIHN0YXRzLmVycm9yU0RSVCA9IHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLmVycm9yU1MgLyAoc3RhdHMuZXJyb3JDb3VudCAtIDEpKSA6IE5hTjsKICAgICAgc3RhdHMuc2RSVCA9IHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxID8gTWF0aC5zcXJ0KHN1bXMyLnNzIC8gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgLSAxKSkgOiBOYU47CiAgICAgIHJldHVybiBzdGF0czsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZQogICAgc3RhdGljIGF6djJwRShhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHsKICAgICAgY29uc3QgelByaW1lID0gYSAqIHo7CiAgICAgIGNvbnN0IEEgPSBNYXRoLmV4cCgtMiAqIHYgKiBhIC8gcyAqKiAyKTsKICAgICAgY29uc3QgWiA9IE1hdGguZXhwKC0yICogdiAqIHpQcmltZSAvIHMgKiogMik7CiAgICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTsKICAgIH0KCiAgICAvLyBQcm9iYWJpbGl0eSBvZiBhIENvcnJlY3QgUmVzcG9uc2UKICAgIHN0YXRpYyBhenYycEMoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpOwogICAgfQoKICAgIC8vIE1lYW4gT3ZlcmFsbCBSVAogICAgLy8gRXF1YXRpb24gNSAoR3Jhc21hbiBldCBhbC4sIDIwMDkpCiAgICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IG1lYW4gPSAtKHpQcmltZSAvIHYpICsgYSAvIHYgKiAoWiAvIEEpOwogICAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDsKICAgIH0KCiAgICAvLyBTRCBPdmVyYWxsIFJUCiAgICAvLyBFcXVhdGlvbiA2IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBBID0gTWF0aC5leHAoLTIgKiB2ICogYSAvIHMgKiogMikgLSAxOwogICAgICBjb25zdCBaID0gTWF0aC5leHAoLTIgKiB2ICogelByaW1lIC8gcyAqKiAyKSAtIDE7CiAgICAgIGNvbnN0IHZhcmlhbmNlID0gKC12ICogYSAqKiAyICogKFogKyA0KSAqIFogLyBBICoqIDIgKyAoKC0zICogdiAqIGEgKiogMiArIDQgKiB2ICogelByaW1lICogYSArIHMgKiogMiAqIGEpICogWiArIDQgKiB2ICogelByaW1lICogYSkgLyBBIC0gcyAqKiAyICogelByaW1lKSAvIHYgKiogMzsKICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSkgKiAxMDAwOwogICAgfQoKICAgIC8vIE1lYW4gRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDEzIChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenZ0MDJtRShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7CiAgICAgICAgcmV0dXJuIE1hdGguZXhwKDIgKiB2ICogeSAvIHMgKiogMikgLSBNYXRoLmV4cCgyICogdiAqIHggLyBzICoqIDIpOwogICAgICB9CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKSAvICh2ICogcGhpKHpQcmltZSwgYSkgKiBwaGkoLWEsIDApKTsKICAgICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7CiAgICB9CgogICAgLy8gU0QgRXJyb3IgUlQKICAgIC8vIEVxdWF0aW9uIDE0IChHcmFzbWFuIGV0IGFsLiwgMjAwOSkKICAgIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICBmdW5jdGlvbiBwaGkoeCwgeSkgewogICAgICAgIHJldHVybiBNYXRoLmV4cCgyICogdiAqIHkgLyBzICoqIDIpIC0gTWF0aC5leHAoMiAqIHYgKiB4IC8gcyAqKiAyKTsKICAgICAgfQogICAgICBjb25zdCB6UHJpbWUgPSBhICogejsKICAgICAgY29uc3QgdmFyaWFuY2UgPSAtMiAqIGEgKiBwaGkoMCwgelByaW1lKSAqICgyICogdiAqIGEgKiBwaGkoelByaW1lLCAyICogYSkgKyBzICoqIDIgKiBwaGkoMCwgYSkgKiBwaGkoelByaW1lLCBhKSkgKiBNYXRoLmV4cCgyICogdiAqIGEgLyBzICoqIDIpIC8gKHYgKiogMyAqIHBoaSgwLCBhKSAqKiAyICogcGhpKHpQcmltZSwgYSkgKiogMikgKyAoNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoMiAqIHYgKiAoelByaW1lICsgYSkgLyBzICoqIDIpICsgelByaW1lICogcyAqKiAyICogcGhpKDIgKiB6UHJpbWUsIDIgKiBhKSkgLyAodiAqKiAzICogcGhpKHpQcmltZSwgYSkgKiogMik7CiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDsKICAgIH0KCiAgICAvLyBNZWFuIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenZ0MDJtQyhhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpOwogICAgfQoKICAgIC8vIFNEIENvcnJlY3QgUlQKICAgIHN0YXRpYyBhenYyc2RDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkgewogICAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7CiAgICB9CgogICAgLy8gRGVuc2l0eSBvZiBFcnJvciBSVAogICAgc3RhdGljIHRhenYyZ0UodCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIGlmICghdCkgcmV0dXJuIDA7CiAgICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6OwogICAgICBjb25zdCBiYXNlID0gTWF0aC5QSSAqIHMgKiogMiAvIGEgKiogMiAqIE1hdGguZXhwKC16UHJpbWUgKiB2IC8gcyAqKiAyKTsKICAgICAgbGV0IGsgPSAwOwogICAgICBsZXQgc3VtID0gMDsKICAgICAgZG8gewogICAgICAgIGsgKz0gMTsKICAgICAgICBjb25zdCB0ZXJtID0gayAqIE1hdGguc2luKE1hdGguUEkgKiB6UHJpbWUgKiBrIC8gYSkgKiBNYXRoLmV4cCgtMC41ICogKHYgKiogMiAvIHMgKiogMiArIE1hdGguUEkgKiogMiAqIGsgKiogMiAqIHMgKiogMiAvIGEgKiogMikgKiB0KTsKICAgICAgICBzdW0gKz0gdGVybTsKICAgICAgfSB3aGlsZSAoayA8IDIwMCk7IC8vID8/IEhBQ0sKCiAgICAgIHJldHVybiBiYXNlICogc3VtOwogICAgfQoKICAgIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVAogICAgc3RhdGljIHRhenYyZ0ModCwgYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7CiAgICAgIHJldHVybiBERE1NYXRoLnRhenYyZ0UodCwgYSwgMSAtIHosIC12LCBzKTsKICAgIH0KCiAgICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9yYW91bC5zb2NzY2kudXZhLm5sL0VaMi9FWjJfbmV3Lmh0bWwKICAgIC8vIEVaLWZ1bmN0aW9uIGZvciBzdGFydGluZyB2YWx1ZXMKICAgIC8vIGlucHV0OiBvYmogLSBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzCiAgICAvLyAgICBwQyAtIFByb3BvcnRpb24gY29ycmVjdAogICAgLy8gICAgc2QgLSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBSVCdzIGluIG1zCiAgICAvLyAgICBtIC0gc2FtcGxlIG1lYW4gb2YgdGhlIFJUJ3MgaW4gbXMKICAgIC8vICAgIHMgLSBkaWZmdXNpb24gc3RhbmRhcmQgZGV2aWF0aW9uCiAgICAvLyByZXR1cm5zOiBPYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHYsIGEsIGFuZCB0MCwgY29udGFpbmluZyBFWi1lc3RpbWF0ZXMgb2YgdGhlc2UgcGFyYW1ldGVycwogICAgc3RhdGljIGRhdGEyZXooewogICAgICBhY2N1cmFjeTogcEMsCiAgICAgIHNkUlQ6IHNkLAogICAgICBtZWFuUlQ6IG0sCiAgICAgIHMKICAgIH0pIHsKICAgICAgZnVuY3Rpb24gc2lnbihyKSB7CiAgICAgICAgcmV0dXJuIHIgPiAwID8gMSA6IHIgPT09IDAgPyAwIDogLTE7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbG9naXQocCkgewogICAgICAgIHJldHVybiBNYXRoLmxvZyhwIC8gKDEgLSBwKSk7CiAgICAgIH0KICAgICAgY29uc3QgdnJ0ID0gKHNkIC8gMTAwMCkgKiogMjsKICAgICAgY29uc3QgbXJ0ID0gbSAvIDEwMDA7CiAgICAgIGNvbnN0IHMyID0gcyAqKiAyOwogICAgICBjb25zdCBsID0gbG9naXQocEMpOwogICAgICBjb25zdCB4ID0gbCAqIChsICogcEMgKiogMiAtIGwgKiBwQyArIHBDIC0gMC41KSAvIHZydDsKICAgICAgY29uc3QgdiA9IHNpZ24ocEMgLSAwLjUpICogcyAqIHggKiogKDEgLyA0KTsKICAgICAgY29uc3QgYSA9IHMyICogbG9naXQocEMpIC8gdjsKICAgICAgY29uc3QgeSA9IC12ICogYSAvIHMyOwogICAgICBjb25zdCBtZHQgPSBhIC8gKDIgKiB2KSAqICgxIC0gTWF0aC5leHAoeSkpIC8gKDEgKyBNYXRoLmV4cCh5KSk7CiAgICAgIGNvbnN0IHQwID0gbXJ0ID8gbXJ0IC0gbWR0IDogbnVsbDsgLy8gY29tcHV0ZSBUZXIgb25seSBpZiBNUlQgd2FzIHByb3ZpZGVkCgogICAgICBjb25zdCB0MFByaW1lID0gdDAgKiAxMDAwOwogICAgICByZXR1cm4gewogICAgICAgIHYsCiAgICAgICAgYSwKICAgICAgICB0MDogdDBQcmltZSwKICAgICAgICBzCiAgICAgIH07CiAgICB9CiAgICBzdGF0aWMgZGF0YTJlejIoKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YTJlejIgaXMgbm90IGltcGxlbWVudGVkIScpOwogICAgfQogIH0KCiAgLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzCgogIC8qIGVzbGludCBuby1yZXN0cmljdGVkLWdsb2JhbHM6IFsib2ZmIiwgInNlbGYiXSAqLwoKICBzZWxmLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHsKICAgIGNvbnN0IHBhcmFtcyA9IERETU1hdGguZGF0YTJleih7CiAgICAgIC4uLmV2ZW50LmRhdGEsCiAgICAgIHM6IERETU1hdGgucy5ERUZBVUxUCiAgICB9KTsKCiAgICAvLyAjIyMjIyBBcmJpdHJhcnkgZGVmYXVsdCB2YWx1ZXMhISEKICAgIGNvbnN0IGEgPSAhaXNOYU4ocGFyYW1zLmEpID8gcGFyYW1zLmEgOiAxLjU7CiAgICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41OwogICAgY29uc3QgdiA9ICFpc05hTihwYXJhbXMudikgPyBwYXJhbXMudiA6IDAuMTsKICAgIGNvbnN0IHQwID0gIWlzTmFOKHBhcmFtcy50MCkgPyBwYXJhbXMudDAgOiAxMDA7CiAgICBjb25zdCBzID0gIWlzTmFOKHBhcmFtcy5zKSA/IHBhcmFtcy5zIDogRERNTWF0aC5zLkRFRkFVTFQ7CiAgICBjb25zdCBwcmVkaWN0ZWQgPSB7CiAgICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6djJwQyhhLCB6LCB2KSwKICAgICAgY29ycmVjdE1lYW5SVDogRERNTWF0aC5henZ0MDJtQyhhLCB6LCB2LCB0MCksCiAgICAgIGVycm9yTWVhblJUOiBERE1NYXRoLmF6dnQwMm1FKGEsIHosIHYsIHQwKSwKICAgICAgbWVhblJUOiBERE1NYXRoLmF6dnQwMm0oYSwgeiwgdiwgdDApLAogICAgICBjb3JyZWN0U0RSVDogRERNTWF0aC5henYyc2RDKGEsIHosIHYpLAogICAgICBlcnJvclNEUlQ6IERETU1hdGguYXp2MnNkRShhLCB6LCB2KSwKICAgICAgc2RSVDogRERNTWF0aC5henYyc2QoYSwgeiwgdikKICAgIH07CiAgICBzZWxmLnBvc3RNZXNzYWdlKHsKICAgICAgcGFyYW1zOiB7CiAgICAgICAgYSwKICAgICAgICB6LAogICAgICAgIHYsCiAgICAgICAgdDAsCiAgICAgICAgcwogICAgICB9LAogICAgICBwcmVkaWN0ZWQKICAgIH0pOwogIH07Cgp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1kZG0tZml0LXdvcmtlci5qcy5tYXAKCg==","data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRtLWZpdC13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9kZG0tbWF0aC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1tYXRoL3NyYy9pbmRleC5qcyIsIi4uLy4uL2xpYnJhcmllcy9hY2N1bXVsYWJsZS1lbGVtZW50cy9zcmMvY29tcG9uZW50cy9kZG0tZml0LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIERETU1hdGggU3RhdGljIENsYXNzIC0gTm90IGludGVuZGVkIGZvciBpbnN0YW50aWF0aW9uIVxuXG4gIE1vZGVsIHBhcmFtZXRlcnM6XG4gICAgYSA9IGJvdW5kYXJ5IHNlcGFyYXRpb24gWzAsIEluZmluaXR5KVxuICAgIHogPSBzdGFydGluZyBwb2ludCBhcyBhIHByb3BvcnRpb24gb2YgYSAoMCwgMSlcbiAgICB2ID0gZHJpZnQgcmF0ZSAocGVyIHNlY29uZCkgKC1JbmZpbml0eSwgSW5maW5pdHkpXG4gICAgdDAgPSBub24tZGVjaXNpb24gdGltZSAoaW4gbWlsbGlzZWNvbmRzKSAoMCwgSW5maW5pdHkpXG4gICAgcyA9IHdpdGhpbi10cmlhbCB2YXJpYWJpbGl0eSBpbiBkcmlmdCByYXRlIChzXjIgPSBpbmZpbml0ZXNpbWFsIHZhcmlhbmNlKSBbMCwgSW5maW5pdHkpXG5cbiAgICB6UHJpbWUgPSBzdGFydGluZyBwb2ludCBvbiBhIDAtdG8tYSBzY2FsZSAodHlwaWNhbGx5IHVzZWQgaW4gcHVibGlzaGVkIGVxdWF0aW9ucykgWzAsIEluZmluaXR5KVxuXG4gIEJlaGF2aW9yYWwgdmFyaWFibGVzOlxuICAgIHBFID0gcHJvcG9ydGlvbiBvZiBlcnJvciB0cmlhbHNcbiAgICBwQyA9IHByb3BvcnRpb24gb2YgY29ycmVjdCB0cmlhbHNcbiAgICBtID0gbWVhbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIG1FID0gbWVhbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBtQyA9IG1lYW4gY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZCA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBvdmVyYWxsIFJUcyAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIHNkRSA9IHN0YW5kYXJkIGRldmlhdGlvbiBvZiBlcnJvciBSVHMgKGluIG1pbGxpc2Vjb25kcylcbiAgICBzZEMgPSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgY29ycmVjdCBSVHMgKGluIG1pbGxpc2Vjb25kcylcblxuICBFcXVhdGlvbnM6XG4gICAgUHJvYmFiaWxpdHkgb2YgY29ycmVjdCBhbmQgZXJyb3IgcmVzcG9uc2VzIChBbGV4YW5kcm93aWN6LCAyMDIwKVxuICAgIE1lYW4gb2Ygb3ZlcmFsbCwgZXJyb3IsIGFuZCBjb3JyZWN0IFJUcyAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gICAgU3RhbmRhcmQgZGV2aWF0aW9uIG9mIG92ZXJhbGwsIGVycm9yLCBhbmQgY29ycmVjdCBSVHMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICAgIERlbnNpdHkgb2YgZXJyb3IgYW5kIGNvcnJlY3QgUlQgZGlzdHJpYnV0aW9ucyAoQWxleGFuZHJvd2ljeiwgMjAyMClcbiAgICBFWi1kaWZmdXNpb24gbW9kZWwgKFdhZ2VubWFrZXJzIGV0IGFsLiwgMjAwNylcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERE1NYXRoIHtcbiAgc3RhdGljIHMgPSB7XG4gICAgREVGQVVMVDogMSxcbiAgfTtcblxuICBzdGF0aWMgYSA9IHtcbiAgICBERUZBVUxUOiAxLjIsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMi4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB6ID0ge1xuICAgIERFRkFVTFQ6IDAuNTUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogMC45OSxcbiAgICBTVEVQOiAwLjAxLFxuICAgIEpVTVA6IDAuMSxcbiAgfTtcblxuICBzdGF0aWMgdiA9IHtcbiAgICBERUZBVUxUOiAxLjUsXG4gICAgTUlOOiAwLjAxLFxuICAgIE1BWDogNS4wLFxuICAgIFNURVA6IDAuMDEsXG4gICAgSlVNUDogMC4xLFxuICB9O1xuXG4gIHN0YXRpYyB0MCA9IHtcbiAgICBERUZBVUxUOiAxNTAsXG4gICAgTUlOOiAwLFxuICAgIE1BWDogNTAwLFxuICAgIFNURVA6IDEsXG4gICAgSlVNUDogMTAsXG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIGEgYnVuY2ggb2Ygc3RhdGlzdGljcyBmb3IgYW4gYXJyYXkgb2YgdHJpYWxzXG4gIHN0YXRpYyB0cmlhbHMyc3RhdHModHJpYWxzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB7fTtcblxuICAgIC8vIEZpcnN0LW9yZGVyIHN1bXNcbiAgICBjb25zdCBzdW1zID0gdHJpYWxzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgdHJpYWwpID0+IHtcbiAgICAgICAgc3dpdGNoICh0cmlhbC5vdXRjb21lKSB7XG4gICAgICAgICAgY2FzZSAnY29ycmVjdCc6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5jb3JyZWN0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RSVFN1bSArPSB0cmlhbC5ydDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmVycm9yUlRTdW0gKz0gdHJpYWwucnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICducic6XG4gICAgICAgICAgICBhY2N1bXVsYXRvci5uckNvdW50ICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm8tb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb3JyZWN0Q291bnQ6IDAsXG4gICAgICAgIGVycm9yQ291bnQ6IDAsXG4gICAgICAgIG5yQ291bnQ6IDAsXG5cbiAgICAgICAgY29ycmVjdFJUU3VtOiAwLFxuICAgICAgICBlcnJvclJUU3VtOiAwLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy8gRmlyc3Qtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0Q291bnQgPSBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvckNvdW50ID0gc3Vtcy5lcnJvckNvdW50O1xuICAgIHN0YXRzLm5yQ291bnQgPSBzdW1zLm5yQ291bnQ7XG4gICAgc3RhdHMuYWNjdXJhY3kgPSBzdW1zLmNvcnJlY3RDb3VudCAvIChzdW1zLmNvcnJlY3RDb3VudCArIHN1bXMuZXJyb3JDb3VudCArIHN1bXMubnJDb3VudCk7XG5cbiAgICBzdGF0cy5jb3JyZWN0TWVhblJUID0gc3Vtcy5jb3JyZWN0UlRTdW0gLyBzdW1zLmNvcnJlY3RDb3VudDtcbiAgICBzdGF0cy5lcnJvck1lYW5SVCA9IHN1bXMuZXJyb3JSVFN1bSAvIHN1bXMuZXJyb3JDb3VudDtcbiAgICBzdGF0cy5tZWFuUlQgPSAoc3Vtcy5jb3JyZWN0UlRTdW0gKyBzdW1zLmVycm9yUlRTdW0pIC8gKHN1bXMuY29ycmVjdENvdW50ICsgc3Vtcy5lcnJvckNvdW50KTtcblxuICAgIC8vIFNlY29uZC1vcmRlciBzdW1zXG4gICAgY29uc3Qgc3VtczIgPSB0cmlhbHMucmVkdWNlKFxuICAgICAgKGFjY3VtdWxhdG9yLCB0cmlhbCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRyaWFsLm91dGNvbWUpIHtcbiAgICAgICAgICBjYXNlICdjb3JyZWN0JzpcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnNzICs9ICh0cmlhbC5ydCAtIHN0YXRzLm1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLmNvcnJlY3RTUyArPSAodHJpYWwucnQgLSBzdGF0cy5jb3JyZWN0TWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgYWNjdW11bGF0b3Iuc3MgKz0gKHRyaWFsLnJ0IC0gc3RhdHMubWVhblJUKSAqKiAyO1xuICAgICAgICAgICAgYWNjdW11bGF0b3IuZXJyb3JTUyArPSAodHJpYWwucnQgLSBzdGF0cy5lcnJvck1lYW5SVCkgKiogMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBOby1vcFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNzOiAwLFxuICAgICAgICBjb3JyZWN0U1M6IDAsXG4gICAgICAgIGVycm9yU1M6IDAsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBTZWNvbmQtb3JkZXIgc3RhdHNcbiAgICBzdGF0cy5jb3JyZWN0U0RSVCA9IChzdGF0cy5jb3JyZWN0Q291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuY29ycmVjdFNTIC8gKHN0YXRzLmNvcnJlY3RDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG4gICAgc3RhdHMuZXJyb3JTRFJUID0gKHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuZXJyb3JTUyAvIChzdGF0cy5lcnJvckNvdW50IC0gMSkpXG4gICAgICA6IE5hTjtcbiAgICBzdGF0cy5zZFJUID0gKHN0YXRzLmNvcnJlY3RDb3VudCArIHN0YXRzLmVycm9yQ291bnQgPiAxKVxuICAgICAgPyBNYXRoLnNxcnQoc3VtczIuc3MgLyAoc3RhdHMuY29ycmVjdENvdW50ICsgc3RhdHMuZXJyb3JDb3VudCAtIDEpKVxuICAgICAgOiBOYU47XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICAvLyBQcm9iYWJpbGl0eSBvZiBhbiBFcnJvciBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGNvbnN0IHpQcmltZSA9IGEgKiB6O1xuXG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMik7XG4gICAgY29uc3QgWiA9IE1hdGguZXhwKCgtMiAqIHYgKiB6UHJpbWUpIC8gcyAqKiAyKTtcblxuICAgIHJldHVybiAoQSAtIFopIC8gKEEgLSAxKTtcbiAgfVxuXG4gIC8vIFByb2JhYmlsaXR5IG9mIGEgQ29ycmVjdCBSZXNwb25zZVxuICBzdGF0aWMgYXp2MnBDKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6djJwRShhLCAxIC0geiwgLXYsIHMpO1xuICB9XG5cbiAgLy8gTWVhbiBPdmVyYWxsIFJUXG4gIC8vIEVxdWF0aW9uIDUgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybShhLCB6LCB2LCB0MCwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgbWVhbiA9IC0oelByaW1lIC8gdikgKyAoYSAvIHYpICogKFogLyBBKTtcbiAgICByZXR1cm4gdDAgKyBtZWFuICogMTAwMDtcbiAgfVxuXG4gIC8vIFNEIE92ZXJhbGwgUlRcbiAgLy8gRXF1YXRpb24gNiAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2QoYSwgeiwgdiwgcyA9IERETU1hdGgucy5ERUZBVUxUKSB7XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG4gICAgY29uc3QgQSA9IE1hdGguZXhwKCgtMiAqIHYgKiBhKSAvIHMgKiogMikgLSAxO1xuICAgIGNvbnN0IFogPSBNYXRoLmV4cCgoLTIgKiB2ICogelByaW1lKSAvIHMgKiogMikgLSAxO1xuXG4gICAgY29uc3QgdmFyaWFuY2UgPSAoXG4gICAgICAoXG4gICAgICAgICgtdiAqIGEgKiogMiAqIChaICsgNCkgKiBaKSAvIEEgKiogMlxuICAgICAgKSArIChcbiAgICAgICAgKCgtMyAqIHYgKiBhICoqIDIgKyA0ICogdiAqIHpQcmltZSAqIGEgKyBzICoqIDIgKiBhKSAqIFogKyA0ICogdiAqIHpQcmltZSAqIGEpIC8gQVxuICAgICAgKSAtIChcbiAgICAgICAgcyAqKiAyICogelByaW1lXG4gICAgICApXG4gICAgKSAvIHYgKiogMztcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gRXJyb3IgUlRcbiAgLy8gRXF1YXRpb24gMTMgKEdyYXNtYW4gZXQgYWwuLCAyMDA5KVxuICBzdGF0aWMgYXp2dDAybUUoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCBtZWFuID0gKHpQcmltZSAqIChwaGkoelByaW1lIC0gYSwgYSkgKyBwaGkoMCwgelByaW1lKSkgKyAyICogYSAqIHBoaSh6UHJpbWUsIDApKVxuICAgICAgLyAodiAqIHBoaSh6UHJpbWUsIGEpICogcGhpKC1hLCAwKSk7XG4gICAgcmV0dXJuIHQwICsgbWVhbiAqIDEwMDA7XG4gIH1cblxuICAvLyBTRCBFcnJvciBSVFxuICAvLyBFcXVhdGlvbiAxNCAoR3Jhc21hbiBldCBhbC4sIDIwMDkpXG4gIHN0YXRpYyBhenYyc2RFKGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGZ1bmN0aW9uIHBoaSh4LCB5KSB7XG4gICAgICByZXR1cm4gTWF0aC5leHAoKDIgKiB2ICogeSkgLyAocyAqKiAyKSkgLSBNYXRoLmV4cCgoMiAqIHYgKiB4KSAvIChzICoqIDIpKTtcbiAgICB9XG4gICAgY29uc3QgelByaW1lID0gYSAqIHo7XG5cbiAgICBjb25zdCB2YXJpYW5jZSA9IChcbiAgICAgIChcbiAgICAgICAgLTIgKiBhICogcGhpKDAsIHpQcmltZSlcbiAgICAgICAgKiAoKDIgKiB2ICogYSAqIHBoaSh6UHJpbWUsIDIgKiBhKSkgKyAocyAqKiAyICogcGhpKDAsIGEpICogcGhpKHpQcmltZSwgYSkpKVxuICAgICAgICAqIE1hdGguZXhwKCgyICogdiAqIGEpIC8gcyAqKiAyKVxuICAgICAgKSAvIChcbiAgICAgICAgdiAqKiAzICogcGhpKDAsIGEpICoqIDIgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKSArIChcbiAgICAgIChcbiAgICAgICAgNCAqIHYgKiB6UHJpbWUgKiAoMiAqIGEgLSB6UHJpbWUpICogTWF0aC5leHAoKDIgKiB2ICogKHpQcmltZSArIGEpKSAvIHMgKiogMilcbiAgICAgICAgKyB6UHJpbWUgKiBzICoqIDIgKiBwaGkoMiAqIHpQcmltZSwgMiAqIGEpXG4gICAgICApIC8gKFxuICAgICAgICB2ICoqIDMgKiBwaGkoelByaW1lLCBhKSAqKiAyXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpICogMTAwMDtcbiAgfVxuXG4gIC8vIE1lYW4gQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2dDAybUMoYSwgeiwgdiwgdDAsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIHJldHVybiBERE1NYXRoLmF6dnQwMm1FKGEsIDEgLSB6LCAtdiwgdDAsIHMpO1xuICB9XG5cbiAgLy8gU0QgQ29ycmVjdCBSVFxuICBzdGF0aWMgYXp2MnNkQyhhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC5henYyc2RFKGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBEZW5zaXR5IG9mIEVycm9yIFJUXG4gIHN0YXRpYyB0YXp2MmdFKHQsIGEsIHosIHYsIHMgPSBERE1NYXRoLnMuREVGQVVMVCkge1xuICAgIGlmICghdCkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB6UHJpbWUgPSBhICogejtcbiAgICBjb25zdCBiYXNlID0gKChNYXRoLlBJICogcyAqKiAyKSAvIGEgKiogMikgKiBNYXRoLmV4cCgoLXpQcmltZSAqIHYpIC8gcyAqKiAyKTtcblxuICAgIGxldCBrID0gMDtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBkbyB7XG4gICAgICBrICs9IDE7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBrXG4gICAgICAgICogTWF0aC5zaW4oKE1hdGguUEkgKiB6UHJpbWUgKiBrKSAvIGEpXG4gICAgICAgICogTWF0aC5leHAoLTAuNSAqICgodiAqKiAyIC8gcyAqKiAyKSArICgoTWF0aC5QSSAqKiAyICogayAqKiAyICogcyAqKiAyKSAvIGEgKiogMikpICogdCk7XG5cbiAgICAgIHN1bSArPSB0ZXJtO1xuICAgIH0gd2hpbGUgKGsgPCAyMDApOyAvLyA/PyBIQUNLXG5cbiAgICByZXR1cm4gYmFzZSAqIHN1bTtcbiAgfVxuXG4gIC8vIERlbnNpdHkgb2YgQ29ycmVjdCBSVFxuICBzdGF0aWMgdGF6djJnQyh0LCBhLCB6LCB2LCBzID0gRERNTWF0aC5zLkRFRkFVTFQpIHtcbiAgICByZXR1cm4gRERNTWF0aC50YXp2MmdFKHQsIGEsIDEgLSB6LCAtdiwgcyk7XG4gIH1cblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9yYW91bC5zb2NzY2kudXZhLm5sL0VaMi9FWjJfbmV3Lmh0bWxcbiAgLy8gRVotZnVuY3Rpb24gZm9yIHN0YXJ0aW5nIHZhbHVlc1xuICAvLyBpbnB1dDogb2JqIC0gT2JqZWN0IHdpdGggcHJvcGVydGllc1xuICAvLyAgICBwQyAtIFByb3BvcnRpb24gY29ycmVjdFxuICAvLyAgICBzZCAtIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIFJUJ3MgaW4gbXNcbiAgLy8gICAgbSAtIHNhbXBsZSBtZWFuIG9mIHRoZSBSVCdzIGluIG1zXG4gIC8vICAgIHMgLSBkaWZmdXNpb24gc3RhbmRhcmQgZGV2aWF0aW9uXG4gIC8vIHJldHVybnM6IE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdiwgYSwgYW5kIHQwLCBjb250YWluaW5nIEVaLWVzdGltYXRlcyBvZiB0aGVzZSBwYXJhbWV0ZXJzXG4gIHN0YXRpYyBkYXRhMmV6KHtcbiAgICBhY2N1cmFjeTogcEMsXG4gICAgc2RSVDogc2QsXG4gICAgbWVhblJUOiBtLFxuICAgIHMsXG4gIH0pIHtcbiAgICBmdW5jdGlvbiBzaWduKHIpIHtcbiAgICAgIHJldHVybiAoKHIgPiAwKSA/IDEgOiAoKHIgPT09IDApID8gMCA6IC0xKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naXQocCkge1xuICAgICAgcmV0dXJuIE1hdGgubG9nKHAgLyAoMSAtIHApKTtcbiAgICB9XG5cbiAgICBjb25zdCB2cnQgPSAoc2QgLyAxMDAwKSAqKiAyO1xuICAgIGNvbnN0IG1ydCA9IG0gLyAxMDAwO1xuXG4gICAgY29uc3QgczIgPSBzICoqIDI7XG4gICAgY29uc3QgbCA9IGxvZ2l0KHBDKTtcbiAgICBjb25zdCB4ID0gKGwgKiAobCAqIHBDICoqIDIgLSBsICogcEMgKyBwQyAtIDAuNSkpIC8gdnJ0O1xuICAgIGNvbnN0IHYgPSBzaWduKHBDIC0gMC41KSAqIHMgKiB4ICoqICgxIC8gNCk7XG4gICAgY29uc3QgYSA9IChzMiAqIGxvZ2l0KHBDKSkgLyB2O1xuICAgIGNvbnN0IHkgPSAoLXYgKiBhKSAvIHMyO1xuICAgIGNvbnN0IG1kdCA9ICgoYSAvICgyICogdikpICogKDEgLSBNYXRoLmV4cCh5KSkpIC8gKDEgKyBNYXRoLmV4cCh5KSk7XG4gICAgY29uc3QgdDAgPSAobXJ0ID8gbXJ0IC0gbWR0IDogbnVsbCk7IC8vIGNvbXB1dGUgVGVyIG9ubHkgaWYgTVJUIHdhcyBwcm92aWRlZFxuXG4gICAgY29uc3QgdDBQcmltZSA9IHQwICogMTAwMDtcbiAgICByZXR1cm4ge1xuICAgICAgdixcbiAgICAgIGEsXG4gICAgICB0MDogdDBQcmltZSxcbiAgICAgIHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBkYXRhMmV6MigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEyZXoyIGlzIG5vdCBpbXBsZW1lbnRlZCEnKTtcbiAgfVxufVxuIiwiXG4vLyBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbmltcG9ydCBERE1NYXRoIGZyb20gJy4vZGRtLW1hdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBERE1NYXRoO1xuIiwiLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtZ2xvYmFsczogW1wib2ZmXCIsIFwic2VsZlwiXSAqL1xuXG5pbXBvcnQgRERNTWF0aCBmcm9tICdAZGVjaWRhYmxlcy9hY2N1bXVsYWJsZS1tYXRoJztcblxuc2VsZi5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gRERNTWF0aC5kYXRhMmV6KHsuLi5ldmVudC5kYXRhLCBzOiBERE1NYXRoLnMuREVGQVVMVH0pO1xuXG4gIC8vICMjIyMjIEFyYml0cmFyeSBkZWZhdWx0IHZhbHVlcyEhIVxuICBjb25zdCBhID0gIWlzTmFOKHBhcmFtcy5hKSA/IHBhcmFtcy5hIDogMS41O1xuICBjb25zdCB6ID0gIWlzTmFOKHBhcmFtcy56KSA/IHBhcmFtcy56IDogMC41O1xuICBjb25zdCB2ID0gIWlzTmFOKHBhcmFtcy52KSA/IHBhcmFtcy52IDogMC4xO1xuICBjb25zdCB0MCA9ICFpc05hTihwYXJhbXMudDApID8gcGFyYW1zLnQwIDogMTAwO1xuICBjb25zdCBzID0gIWlzTmFOKHBhcmFtcy5zKSA/IHBhcmFtcy5zIDogRERNTWF0aC5zLkRFRkFVTFQ7XG5cbiAgY29uc3QgcHJlZGljdGVkID0ge1xuICAgIGFjY3VyYWN5OiBERE1NYXRoLmF6djJwQyhhLCB6LCB2KSxcbiAgICBjb3JyZWN0TWVhblJUOiBERE1NYXRoLmF6dnQwMm1DKGEsIHosIHYsIHQwKSxcbiAgICBlcnJvck1lYW5SVDogRERNTWF0aC5henZ0MDJtRShhLCB6LCB2LCB0MCksXG4gICAgbWVhblJUOiBERE1NYXRoLmF6dnQwMm0oYSwgeiwgdiwgdDApLFxuICAgIGNvcnJlY3RTRFJUOiBERE1NYXRoLmF6djJzZEMoYSwgeiwgdiksXG4gICAgZXJyb3JTRFJUOiBERE1NYXRoLmF6djJzZEUoYSwgeiwgdiksXG4gICAgc2RSVDogRERNTWF0aC5henYyc2QoYSwgeiwgdiksXG4gIH07XG5cbiAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBhLCB6LCB2LCB0MCwgcyxcbiAgICB9LFxuICAgIHByZWRpY3RlZCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNlLE1BQU0sT0FBTyxDQUFDO0VBQzNCLEVBQUEsT0FBTyxDQUFDLEdBQUc7RUFDVCxJQUFBLE9BQU8sRUFBRTtLQUNWO0VBRUQsRUFBQSxPQUFPLENBQUMsR0FBRztFQUNULElBQUEsT0FBTyxFQUFFLEdBQUc7RUFDWixJQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1QsSUFBQSxHQUFHLEVBQUUsR0FBRztFQUNSLElBQUEsSUFBSSxFQUFFLElBQUk7RUFDVixJQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPLENBQUMsR0FBRztFQUNULElBQUEsT0FBTyxFQUFFLElBQUk7RUFDYixJQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1QsSUFBQSxHQUFHLEVBQUUsSUFBSTtFQUNULElBQUEsSUFBSSxFQUFFLElBQUk7RUFDVixJQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPLENBQUMsR0FBRztFQUNULElBQUEsT0FBTyxFQUFFLEdBQUc7RUFDWixJQUFBLEdBQUcsRUFBRSxJQUFJO0VBQ1QsSUFBQSxHQUFHLEVBQUUsR0FBRztFQUNSLElBQUEsSUFBSSxFQUFFLElBQUk7RUFDVixJQUFBLElBQUksRUFBRTtLQUNQO0VBRUQsRUFBQSxPQUFPLEVBQUUsR0FBRztFQUNWLElBQUEsT0FBTyxFQUFFLEdBQUc7RUFDWixJQUFBLEdBQUcsRUFBRSxDQUFDO0VBQ04sSUFBQSxHQUFHLEVBQUUsR0FBRztFQUNSLElBQUEsSUFBSSxFQUFFLENBQUM7RUFDUCxJQUFBLElBQUksRUFBRTtLQUNQOztFQUVEO0lBQ0EsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFO01BQzFCLE1BQU0sS0FBSyxHQUFHLEVBQUU7O0VBRWhCO01BQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDeEIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLE9BQU87RUFDbkIsUUFBQSxLQUFLLFNBQVM7WUFDWixXQUFXLENBQUMsWUFBWSxJQUFJLENBQUM7RUFDN0IsVUFBQSxXQUFXLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxFQUFFO0VBQ3BDLFVBQUE7RUFDRixRQUFBLEtBQUssT0FBTztZQUNWLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQztFQUMzQixVQUFBLFdBQVcsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEVBQUU7RUFDbEMsVUFBQTtFQUNGLFFBQUEsS0FBSyxJQUFJO1lBQ1AsV0FBVyxDQUFDLE9BQU8sSUFBSSxDQUFDO0VBQ3hCLFVBQUE7RUFFQTtFQUNKO0VBQ0EsTUFBQSxPQUFPLFdBQVc7RUFDcEIsSUFBQSxDQUFDLEVBQ0Q7RUFDRSxNQUFBLFlBQVksRUFBRSxDQUFDO0VBQ2YsTUFBQSxVQUFVLEVBQUUsQ0FBQztFQUNiLE1BQUEsT0FBTyxFQUFFLENBQUM7RUFFVixNQUFBLFlBQVksRUFBRSxDQUFDO0VBQ2YsTUFBQSxVQUFVLEVBQUU7RUFDZCxLQUNGLENBQUM7O0VBRUQ7RUFDQSxJQUFBLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7RUFDdEMsSUFBQSxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO0VBQ2xDLElBQUEsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztFQUM1QixJQUFBLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUV6RixLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7TUFDM0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO0VBQ3JELElBQUEsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0VBRTVGO01BQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDekIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLE9BQU87RUFDbkIsUUFBQSxLQUFLLFNBQVM7RUFDWixVQUFBLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztFQUNoRCxVQUFBLFdBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQztFQUM5RCxVQUFBO0VBQ0YsUUFBQSxLQUFLLE9BQU87RUFDVixVQUFBLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztFQUNoRCxVQUFBLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEtBQUssQ0FBQztFQUMxRCxVQUFBO0VBRUE7RUFDSjtFQUNBLE1BQUEsT0FBTyxXQUFXO0VBQ3BCLElBQUEsQ0FBQyxFQUNEO0VBQ0UsTUFBQSxFQUFFLEVBQUUsQ0FBQztFQUNMLE1BQUEsU0FBUyxFQUFFLENBQUM7RUFDWixNQUFBLE9BQU8sRUFBRTtFQUNYLEtBQ0YsQ0FBQzs7RUFFRDtNQUNBLEtBQUssQ0FBQyxXQUFXLEdBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ3JELEdBQUc7TUFDUCxLQUFLLENBQUMsU0FBUyxHQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUNqRCxHQUFHO0VBQ1AsSUFBQSxLQUFLLENBQUMsSUFBSSxHQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FDakUsR0FBRztFQUVQLElBQUEsT0FBTyxLQUFLO0VBQ2QsRUFBQTs7RUFFQTtFQUNBLEVBQUEsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0VBQzVDLElBQUEsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFFcEIsSUFBQSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDekMsSUFBQSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFFOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQixFQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7RUFDNUMsSUFBQSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3hDLEVBQUE7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtFQUNqRCxJQUFBLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3BCLElBQUEsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUM3QyxJQUFBLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFbEQsSUFBQSxNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDOUMsSUFBQSxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtFQUN6QixFQUFBOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU8sTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtFQUM1QyxJQUFBLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3BCLElBQUEsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUM3QyxJQUFBLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFbEQsSUFBQSxNQUFNLFFBQVEsR0FBRyxDQUVaLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxHQUVwQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQ2xGLEdBQ0MsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUNWLElBQ0MsQ0FBQyxJQUFJLENBQUM7RUFFVixJQUFBLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJO0VBQ25DLEVBQUE7O0VBRUE7RUFDQTtFQUNBLEVBQUEsT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtFQUNsRCxJQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDakIsTUFBQSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQztFQUM1RSxJQUFBO0VBQ0EsSUFBQSxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUVwQixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUNoRixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDckMsSUFBQSxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtFQUN6QixFQUFBOztFQUVBO0VBQ0E7RUFDQSxFQUFBLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtFQUM3QyxJQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDakIsTUFBQSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQztFQUM1RSxJQUFBO0VBQ0EsSUFBQSxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUVwQixJQUFBLE1BQU0sUUFBUSxHQUVWLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFDbkIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFFLENBQUMsR0FDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBRWhDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQzlDLEdBRUQsQ0FDRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUMzRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBRTFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBRS9CO0VBRUQsSUFBQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSTtFQUNuQyxFQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0VBQ2xELElBQUEsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDOUMsRUFBQTs7RUFFQTtFQUNBLEVBQUEsT0FBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0VBQzdDLElBQUEsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUN6QyxFQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0VBQ2hELElBQUEsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7RUFFaEIsSUFBQSxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUNwQixNQUFNLElBQUksR0FBSyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BRTdFLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDO01BQ1gsR0FBRztFQUNELE1BQUEsQ0FBQyxJQUFJLENBQUM7UUFFTixNQUFNLElBQUksR0FBRyxDQUFDLEdBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUksQ0FBQyxDQUFDLEdBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBTSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUUxRixNQUFBLEdBQUcsSUFBSSxJQUFJO0VBQ2IsSUFBQSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7TUFFbEIsT0FBTyxJQUFJLEdBQUcsR0FBRztFQUNuQixFQUFBOztFQUVBO0VBQ0EsRUFBQSxPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0VBQ2hELElBQUEsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUMsRUFBQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsRUFBQSxPQUFPLE9BQU8sQ0FBQztFQUNiLElBQUEsUUFBUSxFQUFFLEVBQUU7RUFDWixJQUFBLElBQUksRUFBRSxFQUFFO0VBQ1IsSUFBQSxNQUFNLEVBQUUsQ0FBQztFQUNULElBQUE7RUFDRixHQUFDLEVBQUU7TUFDRCxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7RUFDZixNQUFBLE9BQVMsQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUssQ0FBQyxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsRUFBRztFQUM1QyxJQUFBO01BRUEsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzlCLElBQUE7RUFFQSxJQUFBLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDO0VBQzVCLElBQUEsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7RUFFcEIsSUFBQSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQixJQUFBLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7RUFDbkIsSUFBQSxNQUFNLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUksR0FBRztFQUN2RCxJQUFBLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQzNDLE1BQU0sQ0FBQyxHQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUksQ0FBQztFQUM5QixJQUFBLE1BQU0sQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBSSxFQUFFO01BQ3ZCLE1BQU0sR0FBRyxHQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuRSxNQUFNLEVBQUUsR0FBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFLLENBQUM7O0VBRXBDLElBQUEsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUk7TUFDekIsT0FBTztRQUNMLENBQUM7UUFDRCxDQUFDO0VBQ0QsTUFBQSxFQUFFLEVBQUUsT0FBTztFQUNYLE1BQUE7T0FDRDtFQUNILEVBQUE7RUFFQSxFQUFBLE9BQU8sUUFBUSxHQUFHO0VBQ2hCLElBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztFQUNqRCxFQUFBO0VBQ0Y7O0VDOVRBOztFQ0RBOztFQUlBLElBQUksQ0FBQyxTQUFTLEdBQUksS0FBSyxJQUFLO0VBQzFCLEVBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUFDLEdBQUcsS0FBSyxDQUFDLElBQUk7RUFBRSxJQUFBLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQU8sR0FBQyxDQUFDOztFQUVyRTtFQUNBLEVBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRztFQUMzQyxFQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUc7RUFDM0MsRUFBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHO0VBQzNDLEVBQUEsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRztFQUM5QyxFQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTztFQUV6RCxFQUFBLE1BQU0sU0FBUyxHQUFHO01BQ2hCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2pDLElBQUEsYUFBYSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQzVDLElBQUEsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQzFDLElBQUEsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQ3BDLFdBQVcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3JDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ25DLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUM3QjtJQUVELElBQUksQ0FBQyxXQUFXLENBQUM7RUFDZixJQUFBLE1BQU0sRUFBRTtRQUNOLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztRQUFFLEVBQUU7RUFBRSxNQUFBO09BQ2Q7RUFDRCxJQUFBO0VBQ0YsR0FBQyxDQUFDO0VBQ0osQ0FBQzs7Ozs7OyJ9");customElements.define("ddm-fit",class extends bM{static get properties(){return{}}constructor(){super(),this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.observed={},this.predicted={},this.working=!1,this.queued=!1,this.worker=new UM,this.worker.onmessage=t=>{this.working=!1,this.predicted=t.data.predicted,this.a=t.data.params.a,this.z=t.data.params.z,this.v=t.data.params.v,this.t0=t.data.params.t0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("ddm-fit-update",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0},bubbles:!0})),this.queued&&this.fit()},this.fit()}fit(){this.working?this.queued=!0:(this.worker.postMessage(this.observed),this.working=!0,this.queued=!1)}clear(){this.observed={},this.fit()}set(t){this.observed=structuredClone(t),this.fit()}static get styles(){return[super.styles,FE`
        :host {
          display: inline-block;
        }
      `]}render(){return ow`
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
    `}});function FM(t){return class extends t{static get properties(){return{width:{attribute:!1,type:Number,reflect:!1},height:{attribute:!1,type:Number,reflect:!1},rem:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.width=NaN,this.height=NaN,this.rem=NaN}getDimensions(){this.width=parseFloat(this.getComputedStyleValue("width"),10),this.height=parseFloat(this.getComputedStyleValue("height"),10),this.rem=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.getDimensions.bind(this)),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.unobserve(this),super.disconnectedCallback()}}}customElements.define("ddm-parameters",class extends bM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.a=void 0,this.z=void 0,this.v=void 0,this.t0=void 0}setBoundarySeparation(t){this.a=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-a",{detail:{a:this.a},bubbles:!0}))}setStartingPoint(t){this.z=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-z",{detail:{z:this.z},bubbles:!0}))}setDriftRate(t){this.v=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-v",{detail:{v:this.v},bubbles:!0}))}setNondecisionTime(t){this.t0=+t.target.value,this.dispatchEvent(new CustomEvent("ddm-parameters-t0",{detail:{t0:this.t0},bubbles:!0}))}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow`
      <div class="holder">
        ${null!=this.a?ow`<decidables-slider class="a"
            ?disabled=${!this.interactive}
            scale
            min=${vM.a.MIN}
            max=${vM.a.MAX}
            step=${vM.a.STEP}
            .value=${+this.a.toFixed(2)}
            @change=${this.setBoundarySeparation.bind(this)}
            @input=${this.setBoundarySeparation.bind(this)}
          ><div>Boundary Separation<br><span class="math-var">a</span></div></decidables-slider>`:ow``}
        ${null!=this.z?ow`<decidables-slider class="z"
            ?disabled=${!this.interactive}
            scale
            min=${vM.z.MIN}
            max=${vM.z.MAX}
            step=${vM.z.STEP}
            .value=${+this.z.toFixed(2)}
            @change=${this.setStartingPoint.bind(this)}
            @input=${this.setStartingPoint.bind(this)}
          ><div>Starting Point<br><span class="math-var">z</span></div></decidables-slider>`:ow``}
        ${null!=this.v?ow`<decidables-slider class="v"
            ?disabled=${!this.interactive}
            scale
            min=${vM.v.MIN}
            max=${vM.v.MAX}
            step=${vM.v.STEP}
            .value=${+this.v.toFixed(2)}
            @change=${this.setDriftRate.bind(this)}
            @input=${this.setDriftRate.bind(this)}
          ><div>Drift Rate<br><span class="math-var">v</span></div></decidables-slider>`:ow``}
        ${null!=this.t0?ow`<decidables-slider class="t0" 
            ?disabled=${!this.interactive}
            scale
            min=${vM.t0.MIN}
            max=${vM.t0.MAX}
            step=${vM.t0.STEP}
            .value=${+this.t0.toFixed(0)}
            @change=${this.setNondecisionTime.bind(this)}
            @input=${this.setNondecisionTime.bind(this)}
          ><div>Nondecision Time<br><span class="math-var">t<span class="math-num">₀</span></span></div></decidables-slider>`:ow``}
      </div>`}});class IM extends(FM(bM)){static get properties(){return{measures:{attribute:"measures",type:Boolean,reflect:!0},means:{attribute:"means",type:Boolean,reflect:!0},sds:{attribute:"sds",type:Boolean,reflect:!0},human:{attribute:"human",type:Boolean,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},seed:{attribute:"seed",type:Number,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.firstUpdate=!0,this.drag=!1,this.scale={time:{min:0,max:1e3,step:1,round:Math.round},evidence:{min:-1,max:1,step:.01,round:Math.round},density:{min:0,max:10,step:.01,round:Math.round}},this.measures=!1,this.means=!1,this.sds=!1,this.resample(),this.human=!1,this.trials=10,this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.precision=.005,this.random=null,this.bounds=null,this.startingPoint=null,this.data={},this.model={},this.animate=!1,this.paused=!1,this.alignState()}clear(){this.trials=0,this.data.trials=[]}trial(t={}){this.trials+=1,this.human?this.data.trials.push(t):this.animate=!0}pauseTrial(){hR(this.renderRoot).select(".path[data-new-trial-ease-time]").interrupt("new").select(".curve").interrupt("new"),this.paused=!0}resumeTrial(){this.paused=!1,this.requestUpdate()}resample(){this.seed=WN(0,1)()}alignPath(t,e,r,i,n){const a=KN.source(PN(t))(0,this.precision**.5),s=-e/2,o=e/2,c=e*r-e/2,l=i*this.precision,u=[];for(u.push({t:n,e:c});u.at(-1).e>s&&u.at(-1).e<o;)u.push({t:u.at(-1).t+1e3*this.precision,e:u.at(-1).e+l+vM.s.DEFAULT*a()});return u}alignCorrectDistribution(t,e,r,i){const n=vM.azv2pC(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-i;s+=this.scale.time.step)s>0&&a.push({t:i+s,d:vM.tazv2gC(s/1e3,t,e,r)/n});return a}alignErrorDistribution(t,e,r,i){const n=vM.azv2pE(t,e,r),a=[{t:0,d:0},{t:this.t0,d:0}];for(let s=this.scale.time.min;s<=this.scale.time.max-i;s+=this.scale.time.step)s>0&&a.push({t:i+s,d:vM.tazv2gE(s/1e3,t,e,r)/n});return a}alignState(){this.random=WN.source(PN(this.seed))(0,1),this.bounds={lower:-this.a/2,upper:this.a/2},this.startingPoint=this.a*this.z-this.a/2,this.human?this.trials=this.data.trials.length:this.data.trials=Array.from({length:this.trials},(t,e)=>{const r=this.random()/1e3*997,i=this.animate&&e===this.trials-1,n=this.alignPath(r,this.a,this.z,this.v,this.t0),a=n.at(-1).e<=this.bounds.lower?"error":n.at(-1).e>=this.bounds.upper?"correct":"nr",s="error"===a?n.at(-2).t+(this.bounds.lower-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):"correct"===a?n.at(-2).t+(this.bounds.upper-n.at(-2).e)/(n.at(-1).e-n.at(-2).e)*(1e3*this.precision):null;return{index:e,seed:r,path:n,rt:s,outcome:a,animate:i}});const t=vM.trials2stats(this.data.trials.filter(t=>!t.animate));this.data={...this.data,...t},this.model.accuracy=vM.azv2pC(this.a,this.z,this.v),this.model.correctMeanRT=vM.azvt02mC(this.a,this.z,this.v,this.t0),this.model.errorMeanRT=vM.azvt02mE(this.a,this.z,this.v,this.t0),this.model.correctSDRT=vM.azv2sdC(this.a,this.z,this.v),this.model.errorSDRT=vM.azv2sdE(this.a,this.z,this.v),this.model.correctDist=this.alignCorrectDistribution(this.a,this.z,this.v,this.t0),this.model.errorDist=this.alignErrorDistribution(this.a,this.z,this.v,this.t0),this.dispatchEvent(new CustomEvent("ddm-model-output",{detail:{data:this.data,model:this.model},bubbles:!0}))}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow``}willUpdate(){this.alignState()}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height;let i,n;e/r>1.5?(n=r,i=1.5*n):(i=e,n=i/1.5);const a=1*this.rem,s=3*this.rem,o=3.75*this.rem,c=3.25*this.rem,l=n-(a+s),u=i-(o+c),d=.75*this.rem,h=.5*l,g=.25*l-d,p=.75*this.rem,m=.9*u,f=.1*u-p,b=parseInt(this.getComputedStyleValue("---transition-duration"),10),y=oM().domain([this.scale.time.min,this.scale.time.max]).range([0,m]),v=oM().domain([this.scale.evidence.min,this.scale.evidence.max]).range([h,0]),B=oM().domain([this.scale.density.min,this.scale.density.max]).range([g,0]),Q=oM().domain([this.scale.density.min,this.scale.density.max]).range([0,g]),U=oM().domain([0,1]).range([0,l]),F=xR().subject((t,e)=>({x:y(e.t0),y:v(e.startingPoint)})).on("start",t=>{hR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=!!t.sourceEvent.shiftKey&&(Math.abs(t.x-t.subject.x)>Math.abs(t.y-t.subject.y)?"t0":"z");let r=y.invert(t.x),i=(v.invert(t.y)+this.a/2)/this.a;r="z"===e?y.invert(t.subject.x):r<vM.t0.MIN?vM.t0.MIN:r>vM.t0.MAX?vM.t0.MAX:r,i="t0"===e?(v.invert(t.subject.y)+this.a/2)/this.a:i<vM.z.MIN?vM.z.MIN:i>vM.z.MAX?vM.z.MAX:i,this.t0=r,this.z=i,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0}))}).on("end",t=>{hR(t.currentTarget).classed("dragging",!1),this.drag=!1}),I=xR().on("start",t=>{hR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;let e=(v.invert(t.y)-this.startingPoint)/(y.invert(t.x)-this.t0)*1e3;e=e<vM.v.MIN?vM.v.MIN:e>vM.v.MAX?vM.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0}))}).on("end",t=>{hR(t.currentTarget).classed("dragging",!1),this.drag=!1}),A=xR().subject((t,e)=>({x:0,y:v(e.value)})).on("start",t=>{hR(t.currentTarget).classed("dragging",!0)}).on("drag",t=>{this.drag=!0;const e=v.invert(t.y);let r=Math.abs(2*e);r=r<vM.a.MIN?vM.a.MIN:r>vM.a.MAX?vM.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0}))}).on("end",t=>{hR(t.currentTarget).classed("dragging",!1),this.drag=!1}),C=gM().x(t=>y(t.t)).y(t=>v(t.e)),x=gM().x(t=>y(t.t)).y(t=>B(t.d)),E=gM().x(t=>y(t.t)).y(t=>Q(t.d)),w=hR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),S=w.enter().append("svg").classed("main",!0).each((t,e,r)=>{Cw(bM.svgFilters,r[e])}),R=S.append("defs").classed("markers",!0),L=t=>{R.append("marker").attr("id",`measure-arrow-${t}`).attr("class",`measure-arrow ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12").append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z")},N=t=>{const e=R.append("marker").attr("id",`measure-capped-arrow-${t}`).attr("class",`measure-arrow capped ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-10 -6 12 12").attr("refX","0").attr("refY","0").attr("markerWidth","12").attr("markerHeight","12");e.append("path").attr("class","arrow").attr("d","M -7 -3 l 6 3 l -6 3 z"),e.append("path").attr("class","cap").attr("d","M 0 -4 l 0 8")};L("a"),L("z"),N("v"),L("t0"),N("t0");const M=t=>{R.append("marker").attr("id",`model-sd-cap-${t}`).attr("class",`model-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -4 l 0 8"),R.append("marker").attr("id",`data-sd-cap-${t}`).attr("class",`data-sd cap ${t}`).attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").attr("viewBox","-5 -5 10 10").attr("refX","0").attr("refY","0").attr("markerWidth","10").attr("markerHeight","10").append("path").attr("stroke","context-stroke").attr("fill","context-stroke").attr("stroke-width","2").attr("d","M 0 -3 l 0 6")};M("error"),M("correct");const D=R.append("linearGradient").attr("id","path-animate").attr("gradientUnits","userSpaceOnUse").attr("color-interpolation","linearRGB").attr("x1","0").attr("x2","0").attr("y1",v(this.bounds.upper)).attr("y2",v(this.bounds.lower));D.append("stop").classed("stop-0",!0).attr("offset","0%"),D.append("stop").classed("stop-100",!0).attr("offset","100%");const k=S.merge(w).attr("viewBox",`0 0 ${i} ${n}`),T=k.selectAll(".plot.density").data([{outcome:"correct",data:{meanRT:this.data.correctMeanRT,sdRT:this.data.correctSDRT},model:{meanRT:this.model.correctMeanRT,sdRT:this.model.correctSDRT,dist:this.model.correctDist},densityScale:B,densityLine:x,alignDistribution:this.alignCorrectDistribution.bind(this)},{outcome:"error",data:{meanRT:this.data.errorMeanRT,sdRT:this.data.errorSDRT},model:{meanRT:this.model.errorMeanRT,sdRT:this.model.errorSDRT,dist:this.model.errorDist},densityScale:Q,densityLine:E,alignDistribution:this.alignErrorDistribution.bind(this)}]),H=S.append("g").classed("plot evidence",!0),V=T.enter().append("g").attr("class",t=>`plot density ${t.outcome}`),$=S.append("g").classed("plot accuracy",!0),_=k.select(".plot.evidence").attr("transform",`translate(${o}, ${a+g+d})`),z=V.merge(T).attr("transform",t=>`translate(${o}, ${"correct"===t.outcome?a:a+g+h+2*d})`),G=k.select(".plot.accuracy").attr("transform",`translate(${o+m+p}, ${a})`);H.append("clipPath").attr("id","clip-evidence").append("rect"),_.select("clipPath rect").attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)+1).attr("width",m+1);const Y=H.append("g").classed("underlayer",!0),X=V.append("g").classed("underlayer",!0),O=$.append("g").classed("underlayer",!0),W=_.select(".underlayer"),K=z.select(".underlayer"),J=G.select(".underlayer");H.append("g").classed("content",!0).append("g").classed("paths",!0);const P=V.append("g").classed("content",!0);$.append("g").classed("content",!0);const Z=_.select(".content"),j=z.select(".content"),q=G.select(".content");H.append("g").classed("overlayer",!0),V.append("g").classed("overlayer",!0),$.append("g").classed("overlayer",!0);const tt=_.select(".overlayer"),et=z.select(".overlayer");Y.append("rect").classed("background",!0),X.append("rect").classed("background",!0),W.select(".background").transition().duration(this.drag?0:b).ease(UN).attr("y",v(this.bounds.upper)).attr("height",v(this.bounds.lower)-v(this.bounds.upper)).attr("width",m),K.select(".background").transition().duration(b).ease(UN).attr("height",g).attr("width",m),X.filter(t=>"error"===t.outcome).append("g").classed("axis time",!0);const rt=K.filter(t=>"error"===t.outcome).select(".axis.time").attr("transform",`translate(0, ${g+.25*this.rem})`);var it;rt.transition().duration(b).ease(UN).call((it=y,Ww(3,it))).attr("font-size",null).attr("font-family",null).selectAll("line, path").attr("stroke",null);const nt=X.filter(t=>"error"===t.outcome).append("text").classed("title time",!0).attr("text-anchor","middle");nt.append("tspan").classed("name",!0).text("Time (ms)"),K.filter(t=>"error"===t.outcome).select(".title.time").transition().duration(b).ease(UN).attr("transform",`translate(${m/2}, ${g+2.5*this.rem})`),Y.append("g").classed("axis evidence",!0),X.append("g").attr("class",t=>`axis density ${t.outcome}`),O.append("g").classed("axis accuracy",!0);const at=W.select(".axis.evidence").attr("transform",`translate(${-.25*this.rem}, 0)`),st=K.select(".axis.density").attr("transform",`translate(${-.25*this.rem}, 0)`),ot=J.select(".axis.accuracy").attr("transform",`translate(${f+.25*this.rem}, 0)`),ct=at.transition().duration(b).ease(UN).call(Kw(v)).attr("font-size",null).attr("font-family",null),lt=st.transition().duration(b).ease(UN).each((t,e,r)=>{Kw(t.densityScale).ticks(2)(hR(r[e]))}).attr("font-size",null).attr("font-family",null),ut=ot.transition().duration(b).ease(UN).call(function(t){return Ww(2,t)}(U)).attr("font-size",null).attr("font-family",null);ct.selectAll("line, path").attr("stroke",null),lt.selectAll("line, path").attr("stroke",null),ut.selectAll("line, path").attr("stroke",null);const dt=Y.append("text").classed("title evidence",!0).attr("text-anchor","middle"),ht=X.append("text").attr("class",t=>`title density ${t.outcome}`).attr("text-anchor","middle"),gt=O.append("text").classed("title accuracy",!0).attr("text-anchor","middle");dt.append("tspan").classed("name",!0).text("Evidence"),ht.append("tspan").classed("name",!0).text("Density"),gt.append("tspan").classed("name",!0).text("Accuracy"),W.select(".title.evidence").transition().duration(b).ease(UN).attr("transform",`translate(${-2.5*this.rem}, ${h/2})rotate(-90)`),K.select(".title.density").transition().duration(b).ease(UN).attr("transform",`translate(${-2.5*this.rem}, ${g/2})rotate(-90)`),J.select(".title.accuracy").transition().duration(b).ease(UN).attr("transform",`translate(${f+2.25*this.rem}, ${l/2})rotate(90)`);const pt=Z.select(".paths").selectAll(".path").data(this.data.trials.filter(t=>void 0!==t.path)),mt=pR(),ft=pt.enter().append("g").classed("path",!0).attr("data-new-trial-ease-time",0).on("pointerenter",(t,e)=>{if(!this.drag&&(hR(t.currentTarget).classed("highlight",!0).raise(),!mt.get(t.currentTarget))){const r=tt.append("g").classed(`rt-label ${e.outcome}`,!0),i=r.append("rect"),n=r.append("text").text(`RT = ${e.rt.toFixed()}`).attr("x",y(e.rt)).attr("y","correct"===e.outcome?v(this.bounds.upper)-.25*this.rem:v(this.bounds.lower)+.125*this.rem).node().getBBox();i.attr("x",n.x-.125*this.rem).attr("y",n.y+.125*this.rem).attr("width",n.width+.25*this.rem).attr("height",n.height-.25*this.rem),mt.set(t.currentTarget,r)}}).on("pointerleave",(t,e)=>{this.drag||(hR(t.currentTarget).classed("highlight",!1).lower(),t.currentTarget.parentNode.insertBefore(t.currentTarget,t.currentTarget.parentNode.children[e.index]),mt.get(t.currentTarget).remove(),mt.remove(t.currentTarget))});ft.append("path").classed("curve",!0).attr("clip-path","url(#clip-evidence)").attr("pathLength",1).attr("stroke-dashoffset",1);const bt=ft.merge(pt).attr("class",t=>`path ${t.outcome}`);bt.select(".curve").transition().duration(this.drag?0:b).ease(UN).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attrTween("d",(t,e,r)=>{const i=r[e],n=BL(void 0!==i.a?i.a:this.a,this.a),a=BL(void 0!==i.z?i.z:this.z,this.z),s=BL(void 0!==i.v?i.v:this.v,this.v),o=BL(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=a(e),i.v=s(e),i.t0=o(e);const r=this.alignPath(t.seed,i.a,i.z,i.v,i.t0);return C(r)}});const yt=bt.filter(t=>t.animate&&!this.paused);if(!yt.empty()){const t=yt.attr("data-new-trial-ease-time"),e=e=>oM().domain([0,1]).range([t,1])(e),r=e=>r=>oM().domain([e(t),1]).range([0,1])(e(r));yt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1),yt.transition("new").duration(e=>Math.floor(1.5*e.rt*(1-t))).ease(e).attr("data-new-trial-ease-time",1).select(".curve").attrTween("stroke-dashoffset",(t,e,i)=>{const n=BL(i[e].getAttribute("stroke-dashoffset"),0);return t=>n(r(QN)(t))}).on("end",(t,e,r)=>{hR(r[e].parentElement).classed("animate",!1).attr("data-new-trial-ease-time",null),t.animate=!1,this.animate=!1,this.alignState(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("accumulable-response",{detail:{outcome:t.outcome,data:this.data,model:this.model},bubbles:!0}))})}const vt=bt.filter(t=>t.animate&&this.paused);if(!vt.empty()){const t=vt.attr("data-new-trial-ease-time");vt.classed("animate",!0).select(".curve").attr("stroke-dasharray",1).attr("stroke-dashoffset",()=>BL(1,0)(QN(t)))}bt.filter(t=>!t.animate).attr("data-new-trial-ease-time",null),pt.exit().remove();const Bt=P.append("g").attr("class",t=>`dist ${t.outcome}`);Bt.append("path").classed("curve",!0),j.select(".dist").select(".curve").transition().duration(this.drag?0:b).ease(UN).attrTween("d",(t,e,r)=>{const i=r[e],n=BL(void 0!==i.a?i.a:this.a,this.a),a=BL(void 0!==i.z?i.z:this.z,this.z),s=BL(void 0!==i.v?i.v:this.v,this.v),o=BL(void 0!==i.t0?i.t0:this.t0,this.t0);return e=>{i.a=n(e),i.z=a(e),i.v=s(e),i.t0=o(e);const r=t.alignDistribution(i.a,i.z,i.v,i.t0);return t.densityLine(r)}});const Qt=Z.selectAll(".rt").data(this.data.trials),Ut=Qt.enter().append("g");Ut.append("line").classed("mark",!0).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem);const Ft=Ut.merge(Qt).attr("class",t=>`rt ${t.outcome}`);Ft.filter(t=>!t.animate).select(".mark").transition().duration(this.drag?0:b).ease(UN).attr("stroke",t=>this.getComputedStyleValue(`---color-${t.outcome}`)).attr("x1",t=>y(t.rt)).attr("x2",t=>y(t.rt)).attr("y1",t=>"correct"===t.outcome?v(1)-.125*this.rem:v(-1)+.125*this.rem).attr("y2",t=>"correct"===t.outcome?v(1)-.675*this.rem:v(-1)+.675*this.rem),Qt.exit().remove();const It=q.selectAll(".accuracy.model").data([this.model.accuracy,1-this.model.accuracy]),At=It.enter().append("g").attr("class",(t,e)=>"accuracy model "+(0===e?"correct":"error"));At.append("rect").classed("bar",!0).attr("x",0),At.merge(It).select("rect").transition().duration(this.drag?0:b).ease(UN).attr("y",(t,e)=>U(0===e?0:1-t)).attr("width",f).attr("height",t=>U(t)),It.exit().remove();const Ct=q.selectAll(".accuracy.data").data(Number.isNaN(this.data.accuracy)?[]:[this.data.accuracy]),xt=Ct.enter().append("g").classed("accuracy data",!0);xt.append("line").classed("mark",!0);const Et=xt.merge(Ct).attr("class",t=>"accuracy data "+(t<this.model.accuracy.correct?"correct":"error"));Et.select(".mark").transition().duration(this.drag?0:b).ease(UN).attr("x1",0+.25*this.rem).attr("x2",f-.25*this.rem).attr("y1",t=>U(t)-1).attr("y2",t=>U(t)-1),Ct.exit().remove();const wt=tt.selectAll(".boundary").data([{bound:"upper",value:this.bounds.upper},{bound:"lower",value:this.bounds.lower}]),St=wt.enter().append("g").attr("class",(t,e)=>"boundary "+(0===e?"correct":"error"));St.append("line").classed("line",!0),St.append("line").classed("line touch",!0);const Rt=St.merge(wt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?(t,e)=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{a:r}=this;switch(t.key){case"ArrowUp":r+="upper"===e.bound?t.shiftKey?vM.a.STEP:vM.a.JUMP:t.shiftKey?-.01:-.1;break;case"ArrowDown":r+="upper"===e.bound?t.shiftKey?-.01:-.1:t.shiftKey?vM.a.STEP:vM.a.JUMP}r=r<vM.a.MIN?vM.a.MIN:r>vM.a.MAX?vM.a.MAX:r,this.a=r,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-a",{detail:{a:this.a},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Rt.call(A):Rt.on(".drag",null)),Rt.select(".line").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),Rt.select(".line.touch").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.min)).attr("x2",y(this.scale.time.max)).attr("y1",t=>v(t.value)).attr("y2",t=>v(t.value)),wt.exit().remove();const Lt=tt.selectAll(".drift").data([{v:this.v,t0:this.t0,startingPoint:this.startingPoint}]),Nt=Lt.enter().append("g").classed("drift",!0);Nt.append("line").classed("line",!0),Nt.append("line").classed("line touch",!0),Nt.append("path").classed("arrow",!0),Nt.append("path").classed("arrow touch",!0);const Mt=Nt.merge(Lt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{v:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?vM.v.STEP:vM.v.JUMP;break;case"ArrowDown":e-=t.shiftKey?vM.v.STEP:vM.v.JUMP}e=e<vM.v.MIN?vM.v.MIN:e>vM.v.MAX?vM.v.MAX:e,this.v=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-v",{detail:{v:this.v},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Mt.call(I):Mt.on(".drag",null));const Dt=(v(0)-v(1))/(y(1)-y(0));Mt.transition().duration(this.drag?0:b).ease(UN).attr("transform",t=>`translate(${y(t.t0)}, ${v(t.startingPoint)})\n          rotate(${-Math.atan(t.v/1e3*Dt)*(180/Math.PI)})`),Mt.select(".line").attr("x2",y(200)),Mt.select(".line.touch").attr("x2",y(200)),Mt.select(".arrow").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Mt.select(".arrow.touch").attr("d",`\n        M ${y(200)-.5*this.rem},${.5*-this.rem}\n        l ${.5*this.rem},${.5*this.rem}\n        l ${.5*-this.rem},${.5*this.rem}\n      `),Lt.exit().remove();const kt=tt.selectAll(".t0z").data([{t0:this.t0,startingPoint:this.startingPoint}]),Tt=kt.enter().append("g").classed("t0z",!0);Tt.append("line").classed("line",!0),Tt.append("line").classed("line touch",!0),Tt.append("circle").classed("point touch",!0);const Ht=Tt.merge(kt).attr("tabindex",this.interactive?0:null).classed("interactive",this.interactive).on("keydown",this.interactive?t=>{if(["ArrowUp","ArrowDown"].includes(t.key)){let{z:e}=this;switch(t.key){case"ArrowUp":e+=t.shiftKey?vM.z.STEP:vM.z.JUMP;break;case"ArrowDown":e-=t.shiftKey?vM.z.STEP:vM.z.JUMP}e=e<vM.z.MIN?vM.z.MIN:e>vM.z.MAX?vM.z.MAX:e,this.z=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-z",{detail:{z:this.z},bubbles:!0})),t.preventDefault()}if(["ArrowLeft","ArrowRight"].includes(t.key)){let e=this.t0;switch(t.key){case"ArrowRight":e+=t.shiftKey?vM.t0.STEP:vM.t0.JUMP;break;case"ArrowLeft":e-=t.shiftKey?vM.t0.STEP:vM.t0.JUMP}e=e<vM.t0.MIN?vM.t0.MIN:e>vM.t0.MAX?vM.t0.MAX:e,this.t0=e,this.alignState(),this.dispatchEvent(new CustomEvent("ddm-model-t0",{detail:{t0:this.t0},bubbles:!0})),t.preventDefault()}}:null);(this.firstUpdate||t.has("interactive"))&&(this.interactive?Ht.call(F):Ht.on(".drag",null)),Ht.select(".line").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Ht.select(".line.touch").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(0)).attr("x2",t=>y(t.t0)).attr("y1",t=>v(t.startingPoint)).attr("y2",t=>v(t.startingPoint)),Ht.select(".point").transition().duration(this.drag?0:b).ease(UN).attr("cx",t=>y(t.t0)).attr("cy",t=>v(t.startingPoint)),kt.exit().remove();const Vt=tt.selectAll(".measure.a").data(this.measures?[this.a]:[]),$t=Vt.enter().append("g").classed("measure a",!0);$t.append("line").classed("line",!0),$t.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-a)").attr("marker-end","url(#measure-arrow-a)");const _t=$t.append("text").classed("label",!0);_t.append("tspan").classed("a math-var",!0).text("a"),_t.append("tspan").classed("equals",!0).text(" = "),_t.append("tspan").classed("value",!0);const zt=Math.abs(v(this.bounds.upper)-v(this.bounds.lower))<=4,Gt=$t.merge(Vt);Gt.select(".line").classed("short",zt).transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)+2).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower)-2),Gt.select(".markers").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.max)-.75*this.rem).attr("y1",v(this.bounds.upper)).attr("x2",y(this.scale.time.max)-.75*this.rem).attr("y2",v(this.bounds.lower));Gt.select(".label").transition().duration(this.drag?0:b).ease(UN).attr("x",y(this.scale.time.max)).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(_N(".2f")(this.a)),Vt.exit().remove();const Yt=tt.selectAll(".measure.z").data(this.measures?[this.z]:[]),Xt=Yt.enter().append("g").classed("measure z",!0);Xt.append("line").classed("line",!0),Xt.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-z)").attr("marker-end","url(#measure-arrow-z)");const Ot=Xt.append("text").classed("label",!0);Ot.append("tspan").classed("z math-var",!0).text("z"),Ot.append("tspan").classed("equals",!0).text(" = "),Ot.append("tspan").classed("value",!0);const Wt=Math.abs(v(this.startingPoint)-v(this.bounds.lower))<=4,Kt=Xt.merge(Yt);Kt.select(".line").classed("short",Wt).transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)+2).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower)-2),Kt.select(".markers").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(this.scale.time.min)+.75*this.rem).attr("y1",v(this.startingPoint)).attr("x2",y(this.scale.time.min)+.75*this.rem).attr("y2",v(this.bounds.lower));Kt.select(".label").transition().duration(this.drag?0:b).ease(UN).attr("x",y(this.scale.time.min)).attr("y",v(this.bounds.lower)+.125*this.rem).select(".value").text(_N(".0%")(this.z)),Yt.exit().remove();const Jt=tt.selectAll(".measure.v").data(this.measures?[this.v]:[]),Pt=Jt.enter().append("g").classed("measure v",!0);Pt.append("path").classed("line",!0),Pt.append("path").classed("markers",!0).attr("marker-start","url(#measure-capped-arrow-v)").attr("marker-end","url(#measure-capped-arrow-v)");const Zt=Pt.append("text").classed("label",!0);Zt.append("tspan").classed("v math-var",!0).text("v"),Zt.append("tspan").classed("equals",!0).text(" = "),Zt.append("tspan").classed("value",!0);const jt=y(200)-y(0)+.75*this.rem,qt=Math.atan(this.v/1e3*Dt),te=Math.cos(qt)*jt,ee=Math.sin(qt)*jt,re=2/jt,ie=Math.atan(this.v/1e3*Dt)-re,ne=Math.cos(re)*jt,ae=Math.sin(re)*jt,se=Math.cos(ie)*jt,oe=Math.sin(ie)*jt,ce=ie*jt<=4,le=Pt.merge(Jt);le.select(".line").classed("short",ce).transition().duration(this.drag?0:b).ease(UN).attr("d",`\n        M ${y(this.t0)+ne}, ${v(this.startingPoint)-ae}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+se} ${v(this.startingPoint)-oe}\n      `),le.select(".markers").transition().duration(this.drag?0:b).ease(UN).attr("d",`\n        M ${y(this.t0+200)+.75*this.rem}, ${v(this.startingPoint)}\n        A ${y(200)-y(0)+.75*this.rem} ${y(200)-y(0)+.75*this.rem} 0 0 0 ${y(this.t0)+te} ${v(this.startingPoint)-ee}\n      `);le.select(".label").transition().duration(this.drag?0:b).ease(UN).attr("x",y(this.t0+200)+.5*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(_N(".2f")(this.v)),Jt.exit().remove();const ue=tt.selectAll(".measure.t0").data(this.measures?[this.t0]:[]),de=ue.enter().append("g").classed("measure t0",!0);de.append("line").classed("line",!0),de.append("line").classed("markers",!0).attr("marker-start","url(#measure-arrow-t0)").attr("marker-end","url(#measure-capped-arrow-t0)");const he=de.append("text").classed("label",!0);he.append("tspan").classed("t0 math-var",!0).text("t").append("tspan").classed("math-num",!0).text("₀"),he.append("tspan").classed("equals",!0).text(" = "),he.append("tspan").classed("value",!0);const ge=Math.abs(y(0)-y(this.t0))<=4,pe=de.merge(ue);pe.select(".line").classed("short",ge).transition().duration(this.drag?0:b).ease(UN).attr("x1",y(0)+2).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)-2).attr("y2",v(this.startingPoint)-.75*this.rem),pe.select(".markers").transition().duration(this.drag?0:b).ease(UN).attr("x1",y(0)).attr("y1",v(this.startingPoint)-.75*this.rem).attr("x2",y(this.t0)).attr("y2",v(this.startingPoint)-.75*this.rem);pe.select(".label").transition().duration(this.drag?0:b).ease(UN).attr("x",y(this.t0)+.25*this.rem).attr("y",v(this.bounds.upper)-.25*this.rem).select(".value").text(_N("d")(this.t0)),ue.exit().remove();const me=et.selectAll(".model.mean").data(t=>this.means?[t]:[]),fe=me.enter().append("g").attr("class",t=>`model mean ${t.outcome}`);fe.append("line").classed("indicator",!0);fe.merge(me).select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",t=>y(t.model.meanRT)).attr("x2",t=>y(t.model.meanRT)).attr("y1",t=>t.densityScale(this.scale.density.min)).attr("y2",t=>t.densityScale(this.scale.density.max)),me.exit().remove();const be=et.selectAll(".data.mean").data(t=>this.means&&!Number.isNaN(t.data.meanRT)?[t]:[]),ye=be.enter().append("g").attr("class",t=>`data mean ${t.outcome}`);ye.append("line").classed("indicator",!0).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem);ye.merge(be).select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",t=>y(t.data.meanRT)).attr("x2",t=>y(t.data.meanRT)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.125:-.125)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.675:-.675)*this.rem),be.exit().select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{hR(r[e].parentElement).remove()});const ve=et.selectAll(".model.sd").data(t=>this.sds?[t]:[]),Be=ve.enter().append("g").attr("class",t=>`model sd ${t.outcome}`);Be.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#model-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#model-sd-cap-${t.outcome})`);Be.merge(ve).select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",t=>y(t.model.meanRT-t.model.sdRT/2)).attr("x2",t=>y(t.model.meanRT+t.model.sdRT/2)).attr("y1",t=>t.densityScale(5)).attr("y2",t=>t.densityScale(5)),ve.exit().remove();const Qe=et.selectAll(".data.sd").data(t=>!this.sds||Number.isNaN(t.data.meanRT)||Number.isNaN(t.data.sdRT)?[]:[t]),Ue=Qe.enter().append("g").attr("class",t=>`data sd ${t.outcome}`);Ue.append("line").classed("indicator",!0).attr("marker-start",t=>`url(#data-sd-cap-${t.outcome})`).attr("marker-end",t=>`url(#data-sd-cap-${t.outcome})`).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem);Ue.merge(Qe).select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",t=>y(t.data.meanRT-t.data.sdRT/2)).attr("x2",t=>y(t.data.meanRT+t.data.sdRT/2)).attr("y1",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem).attr("y2",t=>t.densityScale(0)+("correct"===t.outcome?.375:-.375)*this.rem),Qe.exit().select(".indicator").transition().duration(this.drag?0:b).ease(UN).attr("x1",0).attr("x2",0).on("end",(t,e,r)=>{hR(r[e].parentElement).remove()}),this.firstUpdate=!1}}customElements.define("ddm-model",IM);class AM extends(FM(bM)){static get properties(){return{coherence:{attribute:"coherence",type:Number,reflect:!0},count:{attribute:"count",type:Number,reflect:!0},probability:{attribute:"probability",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},wait:{attribute:"wait",type:Number,reflect:!0},iti:{attribute:"iti",type:Number,reflect:!0},trials:{attribute:"trials",type:Number,reflect:!0},running:{attribute:"running",type:Boolean,reflect:!0},lifetime:{attribute:!1,type:Number,reflect:!1},speed:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.coherence=.5,this.count=100,this.probability=.5,this.duration=2e3,this.wait=2e3,this.iti=2e3,this.trials=5,this.running=!1,this.lifetime=400,this.speed=50,this.firstUpdate=!0,this.COHERENT=0,this.RANDOM=1,this.dots=[[],[]],this.trial=0,this.states=["resetted","iti","stimulus","wait","ended"],this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.LEFT=180,this.RIGHT=0,this.currentDirection=void 0,this.signals=["left","right"],this.signal=void 0,this.runner=void 0,this.xScale=void 0,this.yScale=void 0}static get styles(){return[super.styles,FE`
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
      `]}render(){return ow``}update(t){if(super.update(t),Number.isNaN(this.width)||Number.isNaN(this.height)||Number.isNaN(this.rem))return;const e=this.width,r=this.height,i=Math.min(e,r),n=.25*this.rem,a=.25*this.rem,s=.25*this.rem,o=i-(n+a),c=i-(s+.25*this.rem);this.xScale=oM().domain([-1,1]).range([0,c]),this.yScale=oM().domain([1,-1]).range([0,o]);const l=hR(this.renderRoot).selectAll(".main").data([{width:this.width,height:this.height,rem:this.rem}]),u=l.enter().append("svg").classed("main",!0),d=u.merge(l).attr("viewBox",`0 0 ${i} ${i}`);u.append("clipPath").attr("id","clip-rdk-task").append("circle"),d.select("clipPath circle").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0));const h=u.append("g").classed("plot",!0),g=d.select(".plot").attr("transform",`translate(${s}, ${n})`),p=h.append("g").classed("underlayer",!0),m=g.select(".underlayer");p.append("circle").classed("background",!0),m.select(".background").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.xScale(0)),h.append("g").classed("content",!0).attr("clip-path","url(#clip-rdk-task)");g.select(".content").selectAll(".dots").data([[],[]]).enter().append("g").classed("dots",!0).classed("coherent",(t,e)=>e===this.COHERENT).classed("random",(t,e)=>e===this.RANDOM);const f=h.append("g").classed("overlayer",!0),b=g.select(".overlayer");f.append("circle").classed("outline",!0),b.select(".outline").attr("cx",this.xScale(0)).attr("cy",this.yScale(0)).attr("r",this.xScale(1)-this.yScale(0)),(this.firstUpdate||t.has("running"))&&(this.running?(this.pauseTime&&(this.baseTime+=VL()-this.pauseTime,this.pauseTime=0),this.runner=function(t,e,r){var i=new _L,n=e;return i._restart=i.restart,i.restart=function(t,e,r){e=+e,r=null==r?VL():+r,i._restart(function a(s){s+=n,i._restart(a,n+=e,r),t(s)},e,r)},i.restart(t,e,r),i}(this.run.bind(this),20)):void 0!==this.runner&&(this.runner.stop(),this.pauseTime=VL())),this.firstUpdate=!1}reset(){void 0!==this.runner&&this.runner.stop(),this.running=!1,this.trial=0,this.state="resetted",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0;const t=hR(this.renderRoot).select(".content").selectAll(".dots").data([[],[]]).selectAll(".dot").data(t=>t);t.exit().remove();hR(this.renderRoot).select(".content").selectAll(".fixation").data([]).exit().remove();hR(this.renderRoot).select(".content").selectAll(".query").data([]).exit().remove()}run(){const t=VL(),e=this.baseTime?t-this.baseTime:0,r=this.baseTime?e-this.startTime:0,i=this.baseTime?e-this.lastTime:0;this.lastTime=e;let n=!1;if("resetted"===this.state?(this.state="iti",this.baseTime=t,this.startTime=0,this.dispatchEvent(new CustomEvent("rdk-block-start",{detail:{trials:this.trials},bubbles:!0}))):"iti"===this.state&&r>=this.iti?(n=!0,this.trial+=1,this.state="stimulus",this.startTime=e,this.signal=Math.random()<this.probability?"left":"right",this.currentDirection="left"===this.signal?this.LEFT:this.RIGHT,this.dispatchEvent(new CustomEvent("rdk-trial-start",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"stimulus"===this.state&&r>=this.duration?(this.state="wait",this.startTime=e,this.dispatchEvent(new CustomEvent("rdk-trial-middle",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0}))):"wait"===this.state&&r>=this.wait&&(this.dispatchEvent(new CustomEvent("rdk-trial-end",{detail:{trials:this.trials,duration:this.duration,wait:this.wait,iti:this.iti,trial:this.trial,signal:this.signal},bubbles:!0})),this.trial>=this.trials?(this.runner.stop(),this.running=!1,this.state="ended",this.baseTime=0,this.pauseTime=0,this.startTime=0,this.lastTime=0,this.signal=void 0,this.currentDirection=void 0,this.dispatchEvent(new CustomEvent("rdk-block-end",{detail:{trials:this.trial},bubbles:!0}))):(this.state="iti",this.startTime=e)),"stimulus"===this.state){this.dots[this.COHERENT].length=Math.round(this.count*this.coherence),this.dots[this.RANDOM].length=this.count-this.dots[this.COHERENT].length;for(let t=0;t<this.dots.length;t+=1)for(let r=0;r<this.dots[t].length;r+=1){const a=void 0===this.dots[t][r];a&&(this.dots[t][r]={});const s=this.dots[t][r];if(n||a){s.direction=t===this.RANDOM?360*Math.random():this.currentDirection,s.birth=e-Math.floor(Math.random()*this.lifetime);const r=2*Math.random()*Math.PI,i=Math.sqrt(Math.random());s.x=this.xScale(i*Math.cos(r)),s.y=this.yScale(i*Math.sin(r))}else if(e>s.birth+this.lifetime){s.birth+=this.lifetime,s.direction=t===this.RANDOM?360*Math.random():this.currentDirection;const e=2*Math.random()*Math.PI,r=Math.sqrt(Math.random());s.x=this.xScale(r*Math.cos(e)),s.y=this.yScale(r*Math.sin(e))}else{t===this.COHERENT&&(s.direction=this.currentDirection);const e=s.direction*(Math.PI/180);s.dx=this.speed*(i/1e3)*Math.cos(e),s.dy=this.speed*(i/1e3)*Math.sin(e),s.x+=s.dx,s.y+=s.dy;(s.x-this.xScale(0))**2+(s.y-this.yScale(0))**2>(this.xScale(1)-this.xScale(0))**2&&(s.x=-(s.x-this.xScale(0))+this.xScale(0),s.y=-(s.y-this.yScale(0))+this.yScale(0))}}}const a=hR(this.renderRoot).select(".content").selectAll(".fixation").data("iti"===this.state?[!0]:[]),s=a.enter().append("g").classed("fixation",!0);s.append("line").attr("x1",this.xScale(-.1)).attr("y1",this.xScale(0)).attr("x2",this.xScale(.1)).attr("y2",this.xScale(0)),s.append("line").attr("x1",this.xScale(0)).attr("y1",this.xScale(-.1)).attr("x2",this.xScale(0)).attr("y2",this.xScale(.1)),a.exit().remove();const o=hR(this.renderRoot).select(".content").selectAll(".dots").data("stimulus"===this.state?this.dots:[[],[]]).selectAll(".dot").data(t=>t);o.enter().append("circle").classed("dot",!0).merge(o).attr("cx",t=>t.x).attr("cy",t=>t.y),o.exit().remove();const c=hR(this.renderRoot).select(".content").selectAll(".query").data("wait"===this.state?[!0]:[]);c.enter().append("g").classed("query",!0).append("text").attr("x",this.xScale(0)).attr("y",this.xScale(0)).attr("text-anchor","middle").attr("alignment-baseline","middle").text("?"),c.exit().remove()}}customElements.define("rdk-2afc-task",AM);class CM extends(function(t){return class extends t{static get properties(){return{numeric:{attribute:"numeric",type:Boolean,reflect:!0}}}constructor(){super(),this.numeric=!1}static get styles(){return[super.styles,FE`
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
        `]}}}(bM)){static get styles(){return[super.styles,FE`
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
      `]}}customElements.define("ddm-equation-azv2pc",class extends CM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},accuracy:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.alignState()}alignState(){this.accuracy=vM.azv2pC(this.a,this.z,this.v)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azv2pc-change",{detail:{a:this.a,z:this.z,v:this.v,accuracy:this.accuracy},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n;return this.numeric?(t=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${vM.a.MIN}
            max=${vM.a.MAX}
            step=${vM.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">a</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math z"
            ?disabled=${!this.interactive}
            min=${vM.z.MIN}
            max=${vM.z.MAX}
            step=${vM.z.STEP}
            .value=${this.z}
            @input=${this.zInput.bind(this)}
          >
            <var class="math-var">z</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            min=${vM.v.MIN}
            max=${vM.v.MAX}
            step=${vM.v.STEP}
            .value=${this.v}
            @input=${this.vInput.bind(this)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,i=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            disabled
            .value=${vM.s.DEFAULT}
          >
            <var class="math-var">s</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math accuracy"
            disabled
            .value=${+this.accuracy.toFixed(2)}
          >
            <var>Accuracy</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=lw`<mi mathvariant="normal" class="math-id a">a</mi>`,e=lw`<mi mathvariant="normal" class="math-id z">z</mi>`,r=lw`<mi mathvariant="normal" class="math-id v">v</mi>`,i=lw`<mi mathvariant="normal" class="math-id s">s</mi>`,n=lw`<mtext class="accuracy">Accuracy</mtext>`),ow`<div class="holder">
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
    </div>`}});customElements.define("ddm-equation-azvt02m",class extends CM{static get properties(){return{a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0},meanRT:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.alignState()}alignState(){this.meanRT=vM.azvt02m(this.a,this.z,this.v,this.t0)}sendEvent(){this.dispatchEvent(new CustomEvent("ddm-equation-azvt02m-change",{detail:{a:this.a,z:this.z,v:this.v,t0:this.t0,meanRT:this.meanRT},bubbles:!0}))}aInput(t){this.a=parseFloat(t.target.value),this.alignState(),this.sendEvent()}zInput(t){this.z=parseFloat(t.target.value),this.alignState(),this.sendEvent()}vInput(t){this.v=parseFloat(t.target.value),this.alignState(),this.sendEvent()}t0Input(t){this.t0=parseFloat(t.target.value),this.alignState(),this.sendEvent()}willUpdate(){this.alignState()}render(){let t,e,r,i,n,a;return this.numeric?(t=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${vM.a.MIN}
            max=${vM.a.MAX}
            step=${vM.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">a</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,e=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math z"
            ?disabled=${!this.interactive}
            min=${vM.z.MIN}
            max=${vM.z.MAX}
            step=${vM.z.STEP}
            .value=${this.z}
            @input=${this.zInput.bind(this)}
          >
            <var class="math-var">z</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,r=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            min=${vM.v.MIN}
            max=${vM.v.MAX}
            step=${vM.v.STEP}
            .value=${this.v}
            @input=${this.vInput.bind(this)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,i=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math t0"
            ?disabled=${!this.interactive}
            min=${vM.t0.MIN}
            max=${vM.t0.MAX}
            step=${vM.t0.STEP}
            .value=${this.t0}
            @input=${this.t0Input.bind(this)}
          >
            <var class="math-var">t<sub class="math-num">0</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,n=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            disabled
            .value=${vM.s.DEFAULT}
          >
            <var class="math-var">s</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`,a=lw`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math mean-rt"
            disabled
            .value=${+this.meanRT.toFixed(0)}
          >
            <var>Mean RT</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`):(t=lw`<mi mathvariant="normal" class="math-id a">a</mi>`,e=lw`<mi mathvariant="normal" class="math-id z">z</mi>`,r=lw`<mi mathvariant="normal" class="math-id v">v</mi>`,i=lw`<msub class="math-id t0">
          <mi mathvariant="normal">t</mi>
          <mrow><mn>0</mn></mrow>
        </msub>`,n=lw`<mi mathvariant="normal" class="math-id s">s</mi>`,a=lw`<mtext class="mean-rt">Mean RT</mtext>`),ow`<div class="holder">
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
    </div>`}});class xM extends(function(t){return class extends t{static get styles(){return[super.styles,FE`
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
        `]}render(){return ow`
        <div class="holder">
          <div class="body">
            <slot>Empty!</slot>
          </div>
        </div>`}}}(bM)){static get styles(){return[super.styles,FE`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(accumulable-control) + ::slotted(rdk-2afc-task),
           .body ::slotted(rdk-2afc-task) + ::slotted(accumulable-response) { */
        .body ::slotted(rdk-2afc-task),
        .body ::slotted(accumulable-response) {
          margin-left: 0;
        }
      `]}}customElements.define("ddm-example",xM);customElements.define("ddm-example-human",class extends xM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:!1,type:Number,reflect:!1},z:{attribute:!1,type:Number,reflect:!1},v:{attribute:!1,type:Number,reflect:!1},t0:{attribute:!1,type:Number,reflect:!1}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.accumulableResponse=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.ddmFit=null,this.data=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.ddmFit=this.querySelector("ddm-fit"),this.ddmModel.clear(),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-coherence",t=>{this.coherence=t.detail.coherence}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0)}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1)}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.rdkTask&&this.rdkTask.reset(),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable&&(this.accumulableTable.correctCount=NaN,this.accumulableTable.errorCount=NaN,this.accumulableTable.nrCount=NaN,this.accumulableTable.accuracy=NaN,this.accumulableTable.correctMeanRT=NaN,this.accumulableTable.errorMeanRT=NaN,this.accumulableTable.meanRT=NaN,this.accumulableTable.correctSDRT=NaN,this.accumulableTable.errorSDRT=NaN,this.accumulableTable.sdRT=NaN),this.ddmModel&&this.ddmModel.clear(),this.ddmFit&&this.ddmFit.clear()})),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-start",t=>{this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial)}),this.rdkTask&&this.rdkTask.addEventListener("rdk-trial-end",()=>{this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask&&this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()}),this.accumulableResponse&&this.accumulableResponse.addEventListener("accumulable-response",t=>{this.data=t.detail.data,this.ddmModel&&this.ddmModel.trial({index:t.detail.trial,rt:t.detail.rt,outcome:t.detail.outcome}),this.ddmFit&&this.ddmFit.set({accuracy:t.detail.data.accuracy,correctMeanRT:t.detail.data.correctMeanRT,errorMeanRT:t.detail.data.errorMeanRT,meanRT:t.detail.data.meanRT,correctSDRT:t.detail.data.correctSDRT,errorSDRT:t.detail.data.errorSDRT,sdRT:t.detail.data.sdRT}),this.requestUpdate()}),this.ddmFit&&this.ddmFit.addEventListener("ddm-fit-update",t=>{this.a=t.detail.a,this.z=.5,this.v=t.detail.v,this.t0=t.detail.t0})}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.wait=this.duration,this.rdkTask.iti=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});customElements.define("ddm-example-interactive",class extends xM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.accumulableControl=null,this.accumulableTable=null,this.ddmParameters=null,this.ddmModel=null,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.accumulableTable=this.querySelector("accumulable-table"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-resample",()=>{this.ddmModel?.resample(),this.requestUpdate()}),this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trials,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0)}});customElements.define("ddm-example-model",class extends xM{static get properties(){return{trials:{attribute:"trials",type:Number,reflect:!0},duration:{attribute:"duration",type:Number,reflect:!0},coherence:{attribute:"coherence",type:Number,reflect:!0},color:{attribute:"color",type:String,reflect:!0},a:{attribute:"boundary-separation",type:Number,reflect:!0},z:{attribute:"starting-point",type:Number,reflect:!0},v:{attribute:"drift-rate",type:Number,reflect:!0},t0:{attribute:"nondecision-time",type:Number,reflect:!0}}}constructor(){super(),this.trials=10,this.duration=2e3,this.coherence=.5,this.colors=["none","measure","outcome","all"],this.color="outcome",this.a=vM.a.DEFAULT,this.z=vM.z.DEFAULT,this.v=vM.v.DEFAULT,this.t0=vM.t0.DEFAULT,this.accumulableControl=null,this.rdkTask=null,this.ddmParameters=null,this.ddmModel=null,this.accumulableResponse=null,this.accumulableTable=null,this.trialCount=0,this.signals=["left","right"],this.signal=void 0,this.data=void 0,this.model=void 0}connectedCallback(){super.connectedCallback(),this.accumulableControl=this.querySelector("accumulable-control"),this.rdkTask=this.querySelector("rdk-2afc-task"),this.ddmParameters=this.querySelector("ddm-parameters"),this.ddmModel=this.querySelector("ddm-model"),this.accumulableResponse=this.querySelector("accumulable-response"),this.accumulableTable=this.querySelector("accumulable-table"),this.accumulableControl&&(this.accumulableControl.addEventListener("accumulable-control-trials",t=>{this.trials=t.detail.trials}),this.accumulableControl.addEventListener("accumulable-control-duration",t=>{this.duration=t.detail.duration}),this.accumulableControl.addEventListener("accumulable-control-color",t=>{this.color=t.detail.color}),this.accumulableControl.addEventListener("accumulable-control-run",()=>{this.rdkTask&&(this.rdkTask.running=!0),this.ddmModel&&this.ddmModel.resumeTrial()}),this.accumulableControl.addEventListener("accumulable-control-pause",()=>{this.rdkTask&&(this.rdkTask.running=!1),this.ddmModel&&this.ddmModel.pauseTrial()}),this.accumulableControl.addEventListener("accumulable-control-reset",()=>{this.trialCount=0,this.signal=void 0,this.rdkTask&&this.rdkTask.reset(),this.ddmModel&&(this.ddmModel.trials=this.trialCount),this.accumulableResponse&&this.accumulableResponse.reset(),this.accumulableTable})),this.rdkTask&&(this.rdkTask.addEventListener("rdk-trial-start",t=>{this.signal=t.detail.signal,this.accumulableResponse&&this.accumulableResponse.start(t.detail.signal,t.detail.trial),this.ddmModel&&(this.trialCount+=1,this.ddmModel.trial())}),this.rdkTask.addEventListener("rdk-trial-end",()=>{this.signal=void 0,this.accumulableResponse&&this.accumulableResponse.stop()}),this.rdkTask.addEventListener("rdk-block-end",()=>{this.accumulableControl&&this.accumulableControl.complete()})),this.ddmParameters&&(this.ddmParameters.addEventListener("ddm-parameters-a",t=>{this.a=t.detail.a}),this.ddmParameters.addEventListener("ddm-parameters-z",t=>{this.z=t.detail.z}),this.ddmParameters.addEventListener("ddm-parameters-v",t=>{this.v=t.detail.v}),this.ddmParameters.addEventListener("ddm-parameters-t0",t=>{this.t0=t.detail.t0})),this.ddmModel&&(this.ddmModel.addEventListener("ddm-model-a",t=>{this.a=t.detail.a}),this.ddmModel.addEventListener("ddm-model-z",t=>{this.z=t.detail.z}),this.ddmModel.addEventListener("ddm-model-v",t=>{this.v=t.detail.v}),this.ddmModel.addEventListener("ddm-model-t0",t=>{this.t0=t.detail.t0}),this.ddmModel.addEventListener("ddm-model-output",t=>{this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()}),this.ddmModel.addEventListener("accumulable-response",t=>{if(this.accumulableResponse){const e="correct"===t.detail.outcome?this.signal:"left"===this.signal?"right":"left";this.accumulableResponse.responded(e)}this.data=t.detail.data,this.model=t.detail.model,this.requestUpdate()})),this.requestUpdate()}update(t){super.update(t),this.trialCount>this.trials&&(this.trialCount=this.trials),this.accumulableControl&&(this.accumulableControl.trials=null!=this.accumulableControl.trials?this.trials:void 0,this.accumulableControl.duration=null!=this.accumulableControl.duration?this.duration:void 0,this.accumulableControl.coherence=null!=this.accumulableControl.coherence?this.coherence:void 0,this.accumulableControl.color=null!=this.accumulableControl.color?this.color:void 0),this.rdkTask&&(this.rdkTask.trials=this.trials,this.rdkTask.duration=this.duration,this.rdkTask.coherence=this.coherence),this.ddmParameters&&(this.ddmParameters.a=null!=this.ddmParameters.a?this.a:void 0,this.ddmParameters.z=null!=this.ddmParameters.z?this.z:void 0,this.ddmParameters.v=null!=this.ddmParameters.a?this.v:void 0,this.ddmParameters.t0=null!=this.ddmParameters.t0?this.t0:void 0),this.ddmModel&&(this.ddmModel.trials=this.trialCount,this.ddmModel.a=+this.a,this.ddmModel.z=+this.z,this.ddmModel.v=+this.v,this.ddmModel.t0=+this.t0),this.accumulableResponse&&(this.accumulableResponse.trialTotal=this.trials),this.accumulableTable&&(this.accumulableTable.color=this.color),this.accumulableTable&&this.data&&(this.accumulableTable.correctCount=this.data.correctCount,this.accumulableTable.errorCount=this.data.errorCount,this.accumulableTable.nrCount=this.data.nrCount,this.accumulableTable.accuracy=this.data.accuracy,this.accumulableTable.correctMeanRT=this.data.correctMeanRT,this.accumulableTable.errorMeanRT=this.data.errorMeanRT,this.accumulableTable.meanRT=this.data.meanRT,this.accumulableTable.correctSDRT=this.data.correctSDRT,this.accumulableTable.errorSDRT=this.data.errorSDRT,this.accumulableTable.sdRT=this.data.sdRT)}});
//# sourceMappingURL=page.js.map
